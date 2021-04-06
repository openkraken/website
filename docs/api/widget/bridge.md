# 与 JS 通信

## javaScriptChannel

与 JavaScript 交换信息的通道。

**示例：**

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
  javaScriptChannel: javaScriptChannel,
),
```
