# 手势事件

当用户在某个元素上触发某个手势交互动作时，对应的手势事件就会被触发。

## gesture event

Kraken 在 [GestureEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/GestureEvent) 上进行扩展，增加不同手势的一些参数：

- state: 连续手势的一些状态，down、move、up。
- direction: 方向，left、right、up、down。
- deltaX: X 轴移动的坐标。
- deltaY: Y 轴移动的坐标。
- velocityX: X 轴移动速度。
- velocityY: Y 轴移动速度。
- scale: 放大或缩小的比例。
- rotation: 角度。

## swipe

当用户在某个元素上触发轻扫操作时会触发。

**示例：**

```js
const element = document.createElement('div');
element.addEventListener('swipe', function(event) {
  // ...
});
```

## pan

当用户在某个元素上触发滑动操作时会触发。

**示例：**

```js
const element = document.createElement('div');
element.addEventListener('pan', function(event) {
  // ...
});
```

## longpress

当用户在某个元素上触发长按操作时会触发。

**示例：**

```js
const element = document.createElement('div');
element.addEventListener('longpress', function(event) {
  // ...
});
```

## scale

当用户在某个元素上触发缩放操作时会触发。

**示例：**

```js
const element = document.createElement('div');
element.addEventListener('scale', function(event) {
  // ...
});
```
