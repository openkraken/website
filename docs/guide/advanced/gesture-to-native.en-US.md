# Native and Kraken for interactive delivery

Touch pass

## Gesture Listener

When Kraken and Native are used in combination, they often encounter gesture conflicts. For example, the same horizontal sliding gesture produces a scrolling action in Kraken’s internal consumption, and a horizontal sliding action is also generated in Native, which makes the entire The Native container is closed by sliding horizontally. In addition, when Kraken is used in combination with Native, since Flutter will consume Native touch events by default, Kraken needs to rethrow related Touch events to Widget in order to process some interaction events of Native View under Kraken View.

Therefore, Kraken provides a `gestureListener` listener, so that Kraken developers can implement corresponding methods to monitor related interactions to trigger corresponding events.

```dart
Kraken(
bundleURL:'xxxxxxx',
GestureListener: gestureListener(
    onXXX: (Infos infos) {
      // ...
    },
  ),
)
```

### onDrag

Through `onDrag`, you can monitor a drag interaction that is passed out after the nested scroll container reaches the top (bottom) end. The listener will throw an event that conforms to the standard [GestureEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/GestureEvent) after the operation is triggered, so that the developer can implement the corresponding logic.

```dart
Kraken(
bundleURL:'xxxxxxx',
GestureListener: gestureListener(
    onDrag: (GestureEvent gestureEvent) {
      if (gestureEvent.state == EVENT_STATE_START) {
        //...
      } else if (gestureEvent.state == EVENT_STATE_UPDATE) {
        //...
      } else if (gestureEvent.state == EVENT_STATE_END) {
        //...
      }
    },
  ),
)
```

### onTouch

Developers can monitor the transmission of touch interactions by monitoring the `onTouch` related listeners.

Note: Because Kraken implements on-demand computing collection and `dispatch` internally, it is not recommended to frequently monitor `TouchMove` events to do some heavy logic calculations to avoid performance problems.

```dart
Kraken(
bundleURL:'xxxxxxx',
GestureListener: gestureListener(
    onTouchStart: (TouchEvent touchEvent) {
      //...
    },
    onTouchEnd: (TouchEvent touchEvent) {
      //...
    },
    onTouchMove: (TouchEvent touchEvent) {
      //...
    }
  ),
)
```
