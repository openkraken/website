# Native and Kraken for interactive delivery

## Rolling delivery

When Kraken and Native are used in combination, they often encounter gesture conflicts. For example, the same horizontal sliding gesture produces a scrolling action in Kraken’s internal consumption, and a horizontal sliding action is also generated in Native, which makes the entire The Native container is closed by sliding horizontally.

Therefore, Kraken provides an abstract class of `GestureClient`. Kraken users can implement corresponding methods by inheriting this abstract class to capture gestures that do not need to be consumed in Kraken, and pass them to Native to use and trigger corresponding gesture events.

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

## Touch pass

When Kraken is used in combination with Native, since Flutter will consume Native touch events by default, Kraken needs to rethrow related Touch events to Widget in order to process some interaction events of Native View under Kraken View.

Therefore, Kraken provides an abstract class of `EventClient`, and Kraken users can implement corresponding methods by inheriting this abstract class to capture Touch events thrown by Kraken.

```dart
/// Pass Touch to native.
abstract class EventClient {
  void eventListener(Event event);
}
```

By implementing `eventListener`, you can monitor the callbacks of Kraken's top-level nodes. Its usage is similar to the front-end standard `addEventListener`, and it throws [Touch Event](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) events that conform to the front-end standard.

for example:

```dart
class NativeEventClient implements EventClient {
  @override
  void eventListener(Event event) {
    /// ...
  }
}
```

Passed in when Kraken's Widget is initialized.

```dart
Kraken kraken = Kraken(
  eventClient: NativeEventClient(),
);
```
