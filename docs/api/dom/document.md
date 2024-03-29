# 文档

Kraken 提供了大部分 W3C（whatwg）标准的文档相关 API 实现。
以下列出目前已经支持的 API 及其属性与方法，详细文档请参考标准文档。

---

## Document

### 接口说明

`Document` 接口描述了 DOM 树操作的通用属性与方法。

继承关系：`Document` → `Node` → `EventTarget`

### 构造函数

#### Document()

创建一个新的 `Document` 对象实例。

```js
const myDocument = new Document();
```

### 属性

无

### 方法

- `createElement`  
  创建一个由标签名称 tagName 指定的 HTML 元素。如果用户代理无法识别 tagName，则会生成一个未知 HTML 元素 HTMLUnknownElement。

- `createTextNode`  
  创建一个新的 Text 节点。这个方法可以用来转义 HTML 字符。

- `getElementById`  
  返回一个匹配特定 ID 的元素。

- `getElementsByTagName`  
  返回一个包括所有给定标签名称的元素的动态 HTML 集合。

- `getElementsByClassName`
  返回一个包含了所有指定类名的子元素的类数组对象。当在 document 对象上调用时，会搜索整个 DOM 文档，包含根节点。你也可以在任意元素上调用 getElementsByClassName() 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

- `querySelector`
  返回文档中与指定选择器或选择器组匹配的第一个 Element 对象。 如果找不到匹配项，则返回 null。

- `querySelectorAll`
  返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList。

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/document)
