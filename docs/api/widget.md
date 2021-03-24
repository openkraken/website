# Kraken Widget

当我们在一个 Flutter 应用中接入 Kraken 时，需要用 Kraken Widget 的方式来创建一个 Kraken 实例，Kraken Widget 提供了一些 API，满足了与现有应用交互的一些诉求。

## background

自定义 Kraken 容器的背景色。

示例：

```dart
Kraken kraken = Kraken(
  background: '#000000',
);
```

## viewportWidth

自定义 Kraken 容器的宽度。

示例：

```dart
Kraken kraken = Kraken(
  viewportWidth: window.physicalSize.width / window.devicePixelRatio,
);
```

## viewportHeight

自定义 Kraken 容器的高度。

示例：

```dart
Kraken kraken = Kraken(
  viewportWidth: window.physicalSize.height / window.devicePixelRatio,
);
```

## bundleURL

需加载执行的 JavaScript 脚本的 URL。

示例：

```dart
Kraken kraken = Kraken(
  bundleURL: 'https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js',
);
```

## bundlePath

需加载执行的 JavaScript 脚本本地路径。

## bundleContent

需加载执行的 JavaScript 脚本的内容。

## onLoad

在文档装载完成后会触发 onLoad 事件。

## onLoadError

在文档装载异常的回调函数。

## onJSError

JavaScript 执行异常时通过该回调抛出异常。

## debugEnableInspector

开启调试模式。

## gestureClient

捕获 Kraken 内部未消费的手势，可以自定义手势事件。

方法

- `dragStartCallback`  
  手势开始时触发
- `dragUpdateCallback`  
  手势移动时触发
- `dragEndCallback`  
  手势结束时触发

示例：

```dart
class NativeGestureClient implements GestureClient {
  @override
  void dragStartCallback(DragStartDetails details) {
    // ...
  }

  @override
  void dragUpdateCallback(DragUpdateDetails details) {
    // ...
  }

  @override
  void dragEndCallback(DragEndDetails details) {
    // ...
  }
}

Kraken kraken = Kraken(
  gestureClient: NativeGestureClient(),
);
```

## animationController

## navigationDelegate

实现在 Kraken 视图的加载以及完成导航请求过程中触发的自定义行为。

## javaScriptChannel

与 JavaScript 交换信息的通道。
