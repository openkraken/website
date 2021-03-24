# JS 如何与 Native 通信

## 在 JS 环境中与 Native 通信

Kraken 在 JS 环境中添加了 `kraken` 的全局对象，在这个全局对象上有 `kraken.methodChannel` 对象，用于实现和 Native 的消息通信。

在 JS 中直接调用 `kraken.methodChannel.invokeMethod` 就可以调用客户端实现的函数，其中第一个参数为函数名，剩下的其余参数都是传递到客户端的调用参数。

**调用客户端实现某个方法**

```javascript
kraken.methodChannel
  .invokeMethod('somemethod', 'parameter 1', ['parameter 2'], {
    value: 'parmeter 3',
  })
  .then(result => {
    console.log('data from native', result);
  })
  .catch(err => {
    console.log('some error occured', err);
  });
```

注：在 JS 测会被强制转成 null 的类型：NaN，undefined。

**处理客户端触发的一些回调**

在任何时刻，客户端都可以主动调用 JavaScript 所实现的方法，即使现在 JavaScript 还没有调用客户端任何方法。

在默认情况下，客户端发送过来的任何调用都会被抛弃，除非使用 JavaScript 调用 `kraken.methodChannel.setMethodCallHandler` 注册一个处理函数。

在设置了处理函数之后，任何客户端发送过来的任何调用都将调用这个处理函数。

```javascript
kraken.methodChannel.setMethodCallHandler((method, args) => {
  switch (method) {
    case 'foo':
      handleFoo(args);
      break;
    case 'bar':
      handleBar(args);
  }
});
```

如果注册了多个处理函数，那么一次客户端的调用，每个注册的处理函数都将被运行。

## 在 Native 中与 JS 进行通讯

由于 Kraken 有两种不同的集成方式：直接集成到 Flutter 中和使用 SDK 进行集成。
两种不同到集成方式与 JS 进行通讯到方式也不一样。

Kraken 分别针对以上场景提供了相应的 API。

### 在 Dart 环境中与 JS 进行通讯

如果采用了直接集成到 Flutter 中的方式，可以使用 KrakenJavaScriptChannel 类，来实现和 JavaScript 的通讯。

**处理 JS 侧的调用过来的方法**

```dart
KrakenJavaScriptChannel javaScriptChannel = KrakenJavaScriptChannel();
javaScriptChannel.onMethodCall = (String method, dynamic arguments) async {
  Completer completer = Completer<String>();
  Timer(Duration(seconds: 1), () {
    completer.complete('helloworld');
  });
  return completer.future;
};
Krake kraken = Kraken(
  bundlePath: 'assets/bundle.js',
  javaScriptChannel: javaScriptChannel,
),
```

给 `KrakenJavaScriptChannel.onMethodCall` 赋值一个回调函数来处理来自 JavaScript 的调用，返回值是一个 Future 类型，即可以进行一些异步调用后进行返回。

**直接调用 JavaScript 注册的方法**

除了被动接收来自 JavaScript 的调用之外，在 Dart 环境中也可以直接调用 `invokeMethod` 方法来调用 JS 环境中注册的方法。
这个方法调用会触发 JS 环境中 `kraken.methodChannel.setMethodCallHandler` 函数所注册的回调。

**调用 JS 侧的函数**

```dart
KrakenJavaScriptChannel javaScriptChannel = KrakenJavaScriptChannel();
Timer(Duration(seconds: 1), () {
  javaScriptChannel.invokeMethod('hello', [1234]);
});
Kraken kraken = Kraken(
  bundlePath: 'assets/bundle.js',
  javaScriptChannel: javaScriptChannel,
),
```

### 在 Objective-C/Swift 环境中与 JS 进行通讯

引入 KrakenSDK

```
#import <kraken_sdk/Kraken.h>
```

#### 处理 JS 的函数调用

使用 FlutterEngine 初始化一个 Kraken 实例并调用 registerMethodCallHandler 来注册一个回调函数。通过此回调实现供 JS 调用的各个函数。

**Swift**

```swift
// 初始化 Kraken 插件
let kraken = Kraken.init(flutterEngine: flutterViewController.engine)

// 注册一个处理 JS 调用的回调函数
kraken.registerMethodCallHandler({ (call: FlutterMethodCall, result: FlutterResult) in
  // 调用 JS 的函数
  result("method: " + call.method)
})
```

#### 调用 JS 函数

调用 invokeMethod 方法也可以调用由 JS 来实现的函数方法。

**Swift**

```swift
kraken.invokeMethod(call.method, arguments: call.arguments)
```

### 在 Java/Kotlin 环境中与 JS 进行通讯

引入 KrakenSDK

```
import com.taobao.kraken.Kraken;
```

#### 处理 JS 的函数调用

使用 FlutterEngine 初始化一个 Kraken 实例并调用 registerMethodCallHandler 来注册一个回调函数。通过此回调来实现供 JS 来调用的各个函数。

**Kotlin**

```kotlin
class MainActivity: FlutterActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    var kraken = Kraken(flutterEngine)
    kraken.registerMethodCallHandler { call, result ->
        print("method " + call.method) // helloworld
        result.success("helloworld")
    }
  }
  override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
    GeneratedPluginRegistrant.registerWith(flutterEngine);
  }
}
```

#### 调用 JS 函数

**Kotlin**

```kotlin
kraken.invokeMethod("helloworld", "1234")
```
