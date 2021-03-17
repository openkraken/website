# 事件

Kraken 支持了 W3C 标准的 Event 对象，实现了一些 W3C 标准对象，并在此基础上扩展了一些移动设备上的常用事件，以下列出了 Kraken 目前支持的事件：

## 标准事件

### click

执行点击手势时被触发。

### input

input 输入完成时触发。

### scroll

执行滚动手势时触发。

### touchstart

触摸手势开始时触发。

### touchmove

触摸后移动时触发。

### touchend

触摸结束后触发。

### touchcancel

取消触摸时触发。

### transitionstart

CSS transition 开始执行时触发。

### transitionend

CSS transition 执行结束时触发。

### transitionrun

当 CSS transition 创建并加入已有的 transitions 中时触发。

### transitioncancel

CSS transition 取消时触发。

### DOMContentLoaded

DOM 文档被完全加载和解析完成后触发。

## 手势事件

## 其他事件

### appear

如果一个位于某个可滚动区域内的组件被绑定了 appear 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。

## disappear

如果一个位于某个可滚动区域内的组件被绑定了 disappear 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。
