# Use enhanced gesture capabilities

## What is enhanced gesture ability

On the Web, since there is no standard gesture API, we often need to encapsulate specific gesture capabilities on the Touch Event. In addition to the need to introduce additional JS code, the constant transmission of data between JS and the browser also brings unnecessary performance overhead.

Therefore, Kraken has built-in commonly used gesture capabilities to meet the basic requirements for gesture interaction during application development.

## What gesture capabilities are built-in

- swipe
- pan (slide)
- longpress (long press)
- scale

## how to use

Similar to ordinary Event, you only need to listen to a specific gesture event on a specific element, you can trigger a callback function when the gesture is triggered, and throw a [GestureEvent](https://developer.mozilla.org/ zh-CN/docs/Web/API/GestureEvent).

Here is an example of the `swipe` gesture:

```js
element.addEventListener('swipe', gestureEvent => {
  if (gestureEvent.state === 'down') {
    // ...
  } else if (gestureEvent.state === 'move') {
    // ...
  }
});
```

Kraken expands on `GestureEvent`, adding some parameters for different gestures:

- state: Some states of continuous gestures, down, move, up.
- direction: direction, left, right, up, down.
- deltaX: coordinate of X axis movement.
- deltaY: The coordinate of Y axis movement.
- velocityX: X axis moving speed.
- velocityY: Y axis moving speed.
- scale: The scale of enlargement or reduction.
- rotation: angle.

Through these `GestureEvent` parameters, we can easily monitor gesture events on a specific element in the application, and learn some of the current gesture states based on the parameters, so as to quickly develop an application with complex gesture interaction.

For more detailed API introduction, please see [gesture](/en-US/api/enhancement/gesture).
