# 网络拦截器

有时候我们需要对 Kraken 内部发出的请求进行拦截或者替换，这种能力通常被用来实现自定义缓存、错误率统计、鉴权等功能。

Kraken 在 Widget 层提供了 `httpClientInterceptor` 参数，可以通过实现自定义的 `HttpClientInterceptor` 来实现网络拦截器。

## 抽象类方法说明

我们需要实现 `HttpClientInterceptor` 来提供网络拦截的能力，它有 3 个方法：

- `Future<HttpClientRequest?> beforeRequest(HttpClientRequest request)`：发出请求之前，这个时候 `HttpClientRequest` 对象已经创建，它会作为这个方法的第一个参数被传入，你可以直接修改此对象，或者你也可以返回一个新的 `HttpClientRequest` 对象。返回 Null 值意味着不进行任何修改。
- `Future<HttpClientResponse?> shouldInterceptRequest(HttpClientRequest request)`：在发起请求时触发，与 `beforeRequest` 不同的是，你可以直接返回一个 `HttpClientResponse` 对象，这个时候 Kraken 将不再发起真实的网络请求，而是使用此对象作为此次请求的返回对象。这在实现自定义缓存功能的时候会比较有用。返回 Null 值意味着不进行任何修改。
- `Future<HttpClientResponse?> afterResponse(HttpClientRequest request, HttpClientResponse response);`：在请求返回后触发，会同时传入 `HttpClientRequest` 和 `HttpClientResponse` 对象；但是在这个时候 `HttpClientRequest` 是只读对象，修改它无任何意义；`HttpClientResponse` 可以进行修改，或者你也可以返回一个新的 `HttpClientResponse` 对象作为此次请求的返回对象。返回 Null 值意味着不进行任何修改。

> Tips: `HttpClientResponse` 也是一个抽象类，你可以使用 `HttpClientStreamResponse` 作为 `HttpClientResponse` 的实际实现。

## 一个简单的例子

```dart
import 'dart:typed_data';
import 'package:kraken/foundation.dart';

class CustomHttpClientInterceptor implements HttpClientInterceptor {
  DateTime? _startTime;
  DateTime? _endTime;

  @override
  Future<HttpClientRequest?> beforeRequest(HttpClientRequest request) async {
    request.headers.set('x-foo', 'bar');
    print('beforeRequest, request headers: ${request.headers}');
    if (request.uri.path == '/posts/1') {
      _startTime = DateTime.now();
    }
    return null;
  }

  @override
  Future<HttpClientResponse?> afterResponse(HttpClientRequest request, HttpClientResponse response) async {
    print('afterResponse, response headers: ${response.headers}');
    if (request.uri.path == '/posts/1') {
      _endTime = DateTime.now();
      print('/posts/1 cost: ${_endTime!.millisecondsSinceEpoch - _startTime!.millisecondsSinceEpoch}ms');
    }
    return null;
  }

  @override
  Future<HttpClientResponse?> shouldInterceptRequest(HttpClientRequest request) async {
    if (request.uri.path == '/posts/1') {
      // Direct output string, transform to stream.
      String replaced = '{ "foo": "bar" }';
      Uint8List data = Uint8List.fromList(replaced.codeUnits);
      Stream<Uint8List> stream = Stream<Uint8List>.value(data);
      return HttpClientStreamResponse('text/html', 'utf8', stream, responseHeaders: { 'x-kraken': 'hey', 'hello': 'world' });
    }
    return null;
  }
}

void main() {
  runApp(Kraken(
    bundleContent: '''
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // This is the object from API.
          console.log('LOG:', data);
        })
        .catch(err => {
          console.error('error:', err);
        });
    ''',
    httpClientInterceptor: CustomHttpClientInterceptor(),
  ));
}
```
