# 与浏览器的差异

考虑到更高的性能与更小的体积，Kraken 在使用层面与浏览器有一定的差异。

## 使用 JS 而不是 HTML

Web 的入口文件是一个 `.html` 或 `.htm` 等为扩展名的 HTML 文档。

而 Kraken 更类似 React Native 和 Weex，它接受一个 `.js` 的 JSBundle，使用 DOM API 构建视图和样式。

这样的选择是出于性能的考虑，现代的前端框架通常使用 JS 逻辑操作 DOM 生成 UI，直接下载 JS 可以减少下载解析 HTML 文档所花费的时间。

Web 下的 HTML 文档：

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div>Hello World!</div>
  </body>
</html>
```

使用 JS Bundle：

```js
const root = document.createElement('div');
root.appendChild(document.createTextNode('Hello World!'));
document.body.appendChild(root);
```

相比 HTML，JS 具有更灵活的特性。由于实现了标准的 DOM API，你可以使用前端社区中大多数优秀的前端框架，如 Vue、Rax、React 等等，具体可以参考[介绍](/guide)。

## 有限的 CSS 支持

到目前为止，Kraken 还不支持使用[层叠样式表(CSS)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)，也就是说你无法使用 `.css` 文件或者 `<style>` 标签。修改节点样式的方式是使用[内联的 CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_is_structured#%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F) 或者节点的 `style` 属性。

```js
const div = document.createElement('div');
div.style.color = 'red'; // 使用 style 属性.

div.setAttribute('style', 'color: red; font-size: 16px;'); // 使用内联 CSS Text.
```

## 有限的 DOM & 全局 API 支持

在 Kraken 中，并不是所有的 DOM 和全局 API 被支持。抛开浏览器的历史包袱，我们实现了大部分现代的、高频使用的、用户友好的 W3C API。

更多详细的支持列表，可以参考站点的 [API 文档](/api/tags)。

## 样式能力差异

请参考[与浏览器差异](/development/styles/difference)文档。

## 本地存储

在浏览器中，我们经常使用 `LocalStorage` 进行本地数据的存储，而在 Kraken 中则使用 `AsyncStorage` 实现本地存储，它提供了更高效的异步 API 以防止 I/O 阻塞 UI 线程，更多信息可以查看[本地存储](/development/extension/storage)。
