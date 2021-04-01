# 触摸与手势

一个复杂的可交互应用往往需要开发者处理触摸事件，以便提供用户在触摸屏或者触控板上做操作时基于特定的反馈。

## TouchEvent

Kraken 提供了 [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) 使开发者可以监听底层的触摸事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等。

如果开发者需要监听用户在某个元素上的用手指（触摸笔）触摸屏幕并做某个交互手势的全部过程并触发某个特定行为，可以按照如下所示的例子来处理。

```js
const root = document.getElementById('root');

root.addEventListener('touchstart', e => {
  // 开始触摸
});

root.addEventListener('touchmove', e => {
  // 触摸后开始移动
});

root.addEventListener('touchend', e => {
  // 结束触摸（手或触摸笔等离开屏幕）
});
```

但是实际开发过程中，开发者往往不太会用到这些底层的 API，用上层封装的一些点击事件以及手势事件有利于更快速地开发出一个复杂的可交互应用。

## click 事件

如果开发者想要监听用户点击某个元素的行为做出交互事件（比如提交表单、刷新页面等），就需要监听 click 事件。

```js
const root = document.getElementById('root');

root.addEventListener('click', () => {
  // 处理点击事件
});
```

在 Rax/React/Vue 等应用中，只需要通过框架提供的能力，给相应的元素绑定上 click 事件即可进行相关操作。

## 使用更高级的手势能力

在 Web 上，开发者往往需要将底层的 [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) 进行封装从而提供一套更上层手势能力。而 Kraken 将这些常用的手势能力进行了内置，具体的高级手势能力用法请参考 [使用增强的手势能力](/guide/advanced/gesture)。
