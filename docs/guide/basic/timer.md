# 定时器

定时器用于在一段时间之后，执行一个回调函数内的特定代码。

## 创建一个临时定时器

使用 `setTimeout(fn)` 函数创建一个临时定时器，当时间到了，`setTimeout(fn)` 所传入的回调函数会被调用一次。

下面的代码将会在大约 1s 后输出 Ping。

```javascript
setTimeout(function() {
  console.log('Ping');
}, 1000);
```

## 创建一个反复定时器

使用 `setInterval(fn)` 创建一个反复定时器，每通过一段时间间隔，`setInterval(fn)` 所传入的回调函数都会被调用一次。

下面的代码将会大约每 1s 输出一次 Ping。

```javascript
setInterval(function() {
  console.log('Ping');
}, 1000);
```

## 中断定时器

使用 `clearTimeout` 可以中断一个还没有到期的定时器。既可以中断一个临时定时器，也可以中断一个反复定时器。

下面的代码永远也不会输出 Ping。

```javascript
let timer = setTimeout(function() {
  console.log('Ping');
}, 1000);
clearTimeout(timer);
```
