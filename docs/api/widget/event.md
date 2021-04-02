# 事件

## onLoad

在文档装载完成后会触发 onLoad 事件。

**示例：**

```dart
Kraken kraken = Kraken(
  onLoad: (KrakenController controller) {
    // ...
  },
);
```

## onLoadError

在文档装载异常的回调函数。

**示例：**

```dart
Kraken kraken = Kraken(
  onLoadError: (FlutterError error, StackTrace stackTrace) {
    // ...
  },
);
```

## onJSError

JavaScript 执行异常时通过该回调抛出异常。

**示例：**

```dart
Kraken kraken = Kraken(
  onJSError: (String message) {
    // ...
  },
);
```
