# JS and Native communication

## Communicate with Native in JS environment

Kraken adds a global object of `kraken` to the JS environment, and there is a `kraken.methodChannel` object on this global object, which is used to implement message communication with Native.

Calling `kraken.methodChannel.invokeMethod` in JS can call the function implemented by the client. The first parameter is the function name, and the remaining parameters are the calling parameters passed to the client.

**Call the client to implement a method**

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

Note: In the JS test, it will be forced to be converted to null types: NaN, undefined.

**Handle some callbacks triggered by the client**

At any time, the client can actively call the methods implemented by JavaScript, even if JavaScript has not yet called any methods on the client.

By default, any call sent by the client will be discarded, unless JavaScript is used to call `kraken.methodChannel.setMethodCallHandler` to register a handler.

After the processing function is set, any call sent by any client will call this processing function.

```javascript
kraken.methodChannel.setMethodCallHandler((method, args) => {
  switch (method) {
    case 'foo':
      handleFoo(args);
      break;
    case 'bar':
      handleBar(args);
      break;
  }
});
```

If more than one processing function is registered, each of the registered processing functions will be executed once the client calls.

## Communicate with JS in Native

Because Kraken has two different integration methods: directly integrate into Flutter and use SDK for integration.
The two different integration methods communicate with JS in different ways.

Kraken provides corresponding APIs for the above scenarios.

### Communicate with JS in the Dart environment

If you are directly integrated into Flutter, you can use the KrakenJavaScriptChannel class to communicate with JavaScript.

**Handle the method called from the JS side**

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
  bundlePath:'assets/bundle.js',
  javaScriptChannel: javaScriptChannel,
),
```

Assign a callback function to `KrakenJavaScriptChannel.onMethodCall` to handle calls from JavaScript. The return value is a Future type, that is, it can return after some asynchronous calls.

**Directly call the JavaScript registration method**

In addition to passively receiving calls from JavaScript, you can also directly call the invokeMethod method in the Dart environment to call the methods registered in the JS environment.
This method call will trigger the callback registered by the `kraken.methodChannel.setMethodCallHandler` function in the JS environment.

**Call the function on the JS side**

```dart
KrakenJavaScriptChannel javaScriptChannel = KrakenJavaScriptChannel();
Timer(Duration(seconds: 1), () {
  javaScriptChannel.invokeMethod('hello', [1234]);
});
Kraken kraken = Kraken(
  bundlePath:'assets/bundle.js',
  javaScriptChannel: javaScriptChannel,
),
```

### Communicate with JS in Objective-C/Swift environment

Introduce KrakenSDK

```
#import <kraken_sdk/Kraken.h>
```

#### Handling JS function calls

Use FlutterEngine to initialize a Kraken instance and call registerMethodCallHandler to register a callback function. Through this callback, various functions for JS to call are realized.

**Swift**

```swift
// Initialize the Kraken plugin
let kraken = Kraken.init(flutterEngine: flutterViewController.engine)

// Register a callback function to handle JS calls
kraken.registerMethodCallHandler({ (call: FlutterMethodCall, result: FlutterResult) in
  // call JS function
  result("method: "+ call.method)
})
```

#### Call JS function

Calling the invokeMethod method can also call the function method implemented by JS.

**Swift**

```swift
kraken.invokeMethod(call.method, arguments: call.arguments)
```

### Communicate with JS in Java/Kotlin environment

Introduce KrakenSDK

```
import com.openkraken.kraken.Kraken;
```

#### Handling JS function calls

Use FlutterEngine to initialize a Kraken instance and call registerMethodCallHandler to register a callback function. Through this callback to realize the various functions for JS to call.

**Kotlin**

```kotlin
class MainActivity: FlutterActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    var kraken = Kraken(flutterEngine)
    kraken.registerMethodCallHandler {call, result ->
        print("method "+ call.method) // helloworld
        result.success("helloworld")
    }
  }
  override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
    GeneratedPluginRegistrant.registerWith(flutterEngine);
  }
}
```

#### Call JS function

**Kotlin**

```kotlin
kraken.invokeMethod("helloworld", "1234")
```
