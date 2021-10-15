# Native 与 Kraken 进行交互传递

触摸传递

## 手势监听器

当 Kraken 与 Native 结合使用时，往往会遇到手势冲突的问题，比如说同一个横滑手势在 Kraken 内部消费产生了一个滚动容器的滚动动作，同样在 Native 也会产生一个横滑动作，使得整个 Native 容器被横滑关闭。此外，当 Kraken 与 Native 结合使用时，由于 Flutter 会默认消费 Native 的触摸事件，所以需要 Kraken 重新抛出相关 Touch 事件给 Widget，以便处理在 Kraken View 之下的 Native View 的一些交互事件。

因此，Kraken 提供了一个 `gestureListener` 的监听器，使 Kraken 开发者可以通过实现相应的方法，监听相关交互传递以触发相应的事件。

```dart
Kraken(
bundleURL: 'xxxxxxx',
GestureListener: gestureListener(
    onXXX: (Infos infos) {
      // ...
    },
  ),
)
```

### onDrag

通过 `onDrag` 可以监听嵌套滚动容器到顶（底）端后的向外传递的一个拖动交互。监听器会在触发操作后抛出一个符合标准 [GestureEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/GestureEvent) 的事件，以供开发者实现相应逻辑。

```dart
Kraken(
bundleURL: 'xxxxxxx',
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

开发者可以通过监听 `onTouch` 相关的监听器来监听触摸交互的传递。

注：因为 Kraken 内部实现了按需计算收集与 `dispatch`，不建议频繁监听 `TouchMove` 事件做一些重逻辑的计算，以避免引发性能问题。

```dart
Kraken(
bundleURL: 'xxxxxxx',
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
