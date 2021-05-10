# Gesture

When the user triggers a gesture interaction on an element, the corresponding gesture event will be triggered.

## gesture event

Kraken expands on [GestureEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/GestureEvent), adding some parameters for different gestures:

-state: Some states of continuous gestures, down, move, up.
-direction: direction, left, right, up, down.
-deltaX: coordinate of X axis movement.
-deltaY: The coordinate of Y axis movement.
-velocityX: X axis moving speed.
-velocityY: Y axis moving speed.
-scale: The scale of enlargement or reduction.
-rotation: angle.

## swipe

It is triggered when the user triggers a swipe operation on an element.

**Example:**

```js
const element = document.createElement('div');
element.addEventListener('swipe', function(event) {
  // ...
});
```

## pan

It will be triggered when the user triggers a sliding operation on an element.

**Example:**

```js
const element = document.createElement('div');
element.addEventListener('pan', function(event) {
  // ...
});
```

## longpress

It will be triggered when the user triggers a long press operation on an element.

**Example:**

```js
const element = document.createElement('div');
element.addEventListener('longpress', function(event) {
  // ...
});
```

## scale

It is triggered when the user triggers a zoom operation on an element.

**Example:**

```js
const element = document.createElement('div');
element.addEventListener('scale', function(event) {
  // ...
});
```
