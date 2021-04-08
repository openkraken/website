# 使用增强的手势能力

## 什么是增强的手势能力

在 Web 上，由于没有标准的手势 API，我们往往需要在 Touch Event 之上封装具体的手势能力。除了需要引入额外的 JS 代码之外，JS 与浏览器不停传递数据也带来了不必要的性能开销。

因此， Kraken 内置了常用的手势能力，以满足应用开发时候对手势交互的基本要求。

## 内置了哪些手势能力

- swipe（轻扫）
- pan（滑动）
- longpress（长按）
- scale（缩放）

## 如何使用

与普通的 Event 类似，只需要在某个具体的元素上，监听具体的手势事件，即可在触发手势时触发回调函数，并且抛出一个 [GestureEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/GestureEvent)。

这里以 `swipe` 手势为例：

```js
element.addEventLisenter('swipe', gestureEvent => {
  if (gestureEvent.state === 'down') {
    // ...
  } else if (gestureEvent.state === 'move') {
    // ...
  }
});
```

Kraken 在 `GestureEvent` 上进行扩展，增加不同手势的一些参数：

- state: 连续手势的一些状态，down、move、up。
- direction: 方向，left、right、up、down。
- deltaX: X 轴移动的坐标。
- deltaY: Y 轴移动的坐标。
- velocityX: X 轴移动速度。
- velocityY: Y 轴移动速度。
- scale: 放大或缩小的比例。
- rotation: 角度。

通过这些 `GestureEvent` 的参数，我们可以在应用程序中非常方便的监听某个具体元素上的手势事件，来根据参数得知目前手势的一些状态，从而快速开发一个拥有复杂手势交互的应用。

更详细的 API 介绍，请查看[手势](/api/enhancement/gesture)。
