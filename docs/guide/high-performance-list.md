# 实现一个高性能长列表

在 Web 中，实现一个高性能的长列表容器是一件令人困扰的事情。Kraken 内置了 `display: sliver` 的扩展布局方式，方便前端开发者实现一个带有回收特性的高性能列表容器。

## 简单的例子

```js
const container = document.createElement('div');
// 修改 display 为 sliver.
container.style.display = 'sliver';
```

## 渐进式支持

目前

## 一些注意事项

TODO

## API 参考

更多细节请跳转到 [Sliver API](/api/sliver) 文档查看。
