# Native and Kraken for gesture transfer

When Kraken is used in combination with Native, it often encounters the problem of gesture conflict. For example, the same horizontal sliding gesture produces a scrolling action of a scroll container in Kraken’s internal consumption, and a horizontal sliding action is also generated in Native, which makes the entire The Native container is closed by sliding horizontally.

Therefore, Kraken provides an abstract class of `GestureClient`. Kraken users can implement corresponding methods by inheriting this abstract class to capture gestures that do not need to be consumed in Kraken, pass them to Native for use, and trigger corresponding gesture events.

```dart
abstract class GestureClient {
  void dragUpdateCallback(DragUpdateDetails details);

  void dragStartCallback(DragStartDetails details);

  void dragEndCallback(DragEndDetails details);
}
```

The three functions `dragUpdateCallback`, `dragStartCallback`, and `dragEndCallback` will be triggered respectively at the beginning, sliding and end of the gesture.

for example:

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

Passed in when Kraken's Widget is initialized.

```dart
Kraken kraken = Kraken(
  gestureClient: NativeGestureClient(),
);
```

For detailed API calls, see [Development Document](/guide/native/widget).
