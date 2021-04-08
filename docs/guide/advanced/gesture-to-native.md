# Native 与 Kraken 进行手势传递

当 Kraken 与 Native 结合使用时，往往会遇到手势冲突的问题，比如说同一个横滑手势在 Kraken 内部消费产生了一个滚动容器的滚动动作，同样在 Native 也会产生一个横滑动作，使得整个 Native 容器被横滑关闭。

因此，Kraken 提供了一个 `GestureClient` 的抽象类，Kraken 用户可以通过继承该抽象类实现相应的方法，以此来捕获 Kraken 内部不需要消费的手势，来传递给 Native 使用，触发相应的手势事件。

```dart
abstract class GestureClient {
  void dragUpdateCallback(DragUpdateDetails details);

  void dragStartCallback(DragStartDetails details);

  void dragEndCallback(DragEndDetails details);
}
```

`dragUpdateCallback`,`dragStartCallback`,`dragEndCallback` 三个函数分别会在手势开始、滑动中以及结束三个阶段分别触发。

举个例子：

```dart
class NativeGestureClient implements GestureClient {
  @override
  void dragUpdateCallback(DragUpdateDetails details) {
    print('dragUpdateCallback=${details}');
  }

  @override
  void dragStartCallback(DragStartDetails details) {
    print('dragStartCallback=${details}');
  }

  @override
  void dragEndCallback(DragEndDetails details) {
    print('dragEndCallback=${details}');
  }
}
```

在 Kraken 的 Widget 初始化时传入。

```dart
Kraken kraken = Kraken(
  gestureClient: NativeGestureClient(),
);
```

详细的 API 调用见 [开发文档](/guide/native/widget)。
