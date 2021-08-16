# Network interceptor

## Network request interceptor

Sometimes we need to intercept or replace the internal requests of Kraken. This ability is usually used to implement custom caching, error rate statistics, authentication and other functions.

Kraken provides the `httpClientInterceptor` parameter on the Widget layer, and the network interceptor can be implemented by implementing a custom `HttpClientInterceptor`.

### Abstract class method description

We need to implement `HttpClientInterceptor` to provide network interception capabilities. It has 3 methods:

-`Future<HttpClientRequest?> beforeRequest(HttpClientRequest request)`: Before making the request, at this time the `HttpClientRequest` object has been created, it will be passed in as the first parameter of this method, you can directly modify this object, or you You can also return a new `HttpClientRequest` object. Returning a Null value means that no modification will be made. -`Future<HttpClientResponse?> shouldInterceptRequest(HttpClientRequest request)`: Triggered when the request is initiated. Unlike `beforeRequest`, you can directly return a `HttpClientResponse` object. At this time, Kraken will no longer initiate real network requests. Instead, use this object as the return object of this request. This is useful when implementing a custom cache function. Returning a Null value means that no modification will be made. -`Future<HttpClientResponse?> afterResponse(HttpClientRequest request, HttpClientResponse response);`: Triggered after the request returns, it will pass in both `HttpClientRequest` and `HttpClientResponse` objects; but at this time `HttpClientRequest` is a read-only object, modify It has no meaning; `HttpClientResponse` can be modified, or you can return a new `HttpClientResponse` object as the return object of this request. Returning a Null value means that no modification will be made.

> Tips: `HttpClientResponse` is also an abstract class, you can use `HttpClientStreamResponse` as the actual implementation of `HttpClientResponse`.

### A simple example

```dart
import'dart:typed_data';
import'package:kraken/foundation.dart';

class CustomHttpClientInterceptor implements HttpClientInterceptor {
  DateTime? _startTime;
  DateTime? _endTime;

  @override
  Future<HttpClientRequest?> beforeRequest(HttpClientRequest request) async {
    request.headers.set('x-foo','bar');
    print('beforeRequest, request headers: ${request.headers}');
    if (request.uri.path =='/posts/1') {
      _startTime = DateTime.now();
    }
    return null;
  }

  @override
  Future<HttpClientResponse?> afterResponse(HttpClientRequest request, HttpClientResponse response) async {
    print('afterResponse, response headers: ${response.headers}');
    if (request.uri.path =='/posts/1') {
      _endTime = DateTime.now();
      print('/posts/1 cost: ${_endTime!.millisecondsSinceEpoch-_startTime!.millisecondsSinceEpoch}ms');
    }
    return null;
  }

  @override
  Future<HttpClientResponse?> shouldInterceptRequest(HttpClientRequest request) async {
    if (request.uri.path =='/posts/1') {
      // Direct output string, transform to stream.
      String replaced ='{ "foo": "bar" }';
      Uint8List data = Uint8List.fromList(replaced.codeUnits);
      Stream<Uint8List> stream = Stream<Uint8List>.value(data);
      return HttpClientStreamResponse('text/html','utf8', stream, responseHeaders: {'x-kraken':'hey','hello':'world' });
    }
    return null;
  }
}

void main() {
  runApp(Kraken(
    bundleContent:'''
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

## Custom URI resolution

Kraken will be thereThis part implements a set of URI parsing rules `UriParser`. When developers need to customize a set of URI parsing rules, they can process `UriParser`.

### A simple example

```dart
class MyUriParser extends UriParser {
  @override
  String resolve(Uri base, Uri relative) {
    String uri = super.resolve(base, relative);
    // custom parse uri.
    return uri;
  }
}

void main() {
  runApp(Kraken(
    uriParser: MyUriParser(),
  ));
}
```
