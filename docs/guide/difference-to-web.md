# 与 Web 的差异

考虑到更高的性能，更小的体积，Kraken 在设计层面和使用层面与传统浏览器(Web)有一定的差异。

## 使用 JS 而不是 HTML

Web 的入口文件是一个 `.html` 或 `.htm` 等为扩展名的 HTML 文档。而 Kraken 更类似 React Native 和 Weex，它接受一个 `.js` 的 JSBundle，使用 DOM API 构建视图和样式。

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

使用 JSBundle：

```js
const root = document.createElement('div');
root.appendChild(document.createTextNode('Hello World!'));
document.body.appendChild(root);
```

相比 HTML，JS 具有更灵活的特性。由于实现了标准的 DOM API，你可以使用前端社区中大多数优秀的前端框架，如 React、Vue、Rax 等等，具体可以参考[介绍](/guide/guide)。

## 有限的 CSS 支持

到目前为止，Kraken 还不支持使用层叠样式表(CSS)，也就是说你无法使用 `.css` 文件或者 `<style>` 标签。修改节点样式的方式是使用内联的 CSS 或者节点的 `style` 属性。

```js
const div = document.createElement('div');
div.style.color = 'red'; // 使用 style 属性.

div.setAttribute('style', 'color: red; font-size: 16px;'); // 使用内联 CSS Text.
```

## 有限的 DOM & 全局 API 支持

在 Kraken 中，并不是所有的 DOM 和全局 API 被支持。抛开浏览器的历史包袱，我们实现了大部分现代的、高频使用的、用户友好的 W3C API。

例如在事件中，我们不支持已经废弃的 `document.createEvent()` 和 `document.initEvent()`，你可以使用更方便的标准 API `new Event()` 替代。

网络请求中，我们建议使用 Fetch API 而不是 `XMLHttpRequest`。

更多详细的支持列表，可以参考站点的 API 文档。

## 样式能力差异

由于实现的差异，下表列出了部分差异：

| 属性            | 差异                                                                       |
| --------------- | -------------------------------------------------------------------------- |
| box-sizing      | box-sizing 只支持 border-box，Web 上未设定此属性值时，盒模型的尺寸会有差异 |
| display         | display 为 inline-block 类型时，element 之间无默认的间距                   |
| display         | 仅支持 block, inline-block, flex, inline-flex, inline, none                |
| margin          | 流式布局中不支持 margin collapse 效果，与 web 表现有差异                   |
| z-index         | 未支持 stacking context，不支持跨层级 z-index 排序                         |
| order(Flexbox)  | 未支持利用 order 对 flex-item  进行排序                                    |
| 文本空格        | 文本空格在不同布局下表现与 Web 不一致                                      |
| text-align      | 暂不支持 justify-all、match-parent                                         |
| line-break      | 文本换行不支持                                                             |
| gradient        | 某些渐变效果与浏览器不一致，如 radius-gradient, repeating-radial-gradient  |
| border-style    | 仅支持 solid                                                               |
| justify-content | 未支持 normal                                                              |
| vertical-align  | 不支持 middle                                                              |
| align-items     | 未支持 normal, first baseline, last baseline                               |
| align-content   | 不支持 normal, baseline, first baseline, last baseline                     |
| mask            | 暂不支持                                                                   |
| border-image    | 暂不支持                                                                   |
| text-indent     | 暂不支持                                                                   |
| animation       | 暂不支持                                                                   |
| CSS Variable    | 暂不支持                                                                   |
| iconfont        | 暂不支持                                                                   |
| calc()          | 暂不支持                                                                   |
| 单位            | 不支持 rem/em                                                              |
