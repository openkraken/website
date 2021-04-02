# 手势捕获

## gestureClient

捕获 Kraken 内部未消费的手势，可以自定义手势事件。

方法

- `dragStartCallback`  
  手势开始时触发
- `dragUpdateCallback`  
  手势移动时触发
- `dragEndCallback`  
  手势结束时触发

**示例：**

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
