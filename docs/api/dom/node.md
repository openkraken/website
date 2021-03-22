# 节点

Kraken 提供了大部分 W3C(whatwg) 标准的节点相关 API 实现。
以下列出目前已经支持的 API 及其属性与方法，详细文档请参考标准文档。

---

## Node

### 接口说明

`Node` 接口是诸如 `Element`、`Document`、`DocumentFragment` 所基于的抽象基类，提供了一些通用的属性和方法。

继承关系：`Node` → `EventTarget`

### 属性

- `childNodes` NodeList 只读  
  返回一个包含了该节点所有子节点的实时的 NodeList。NodeList 是动态变化的。如果该节点的子节点发生了变化，NodeList 对象就会自动更新。

- `firstChild` Node 只读  
  返回该节点的第一个子节点 Node，如果该节点没有子节点则返回 null。

- `lastChild` Node 只读  
  返回该节点的最后一个子节点 Node，如果该节点没有子节点则返回 null。

- `previousSibling` Node 只读  
  返回当前节点同辈的前一个节点 Node，如果该节点不存在则返回 null。

- `nextSibling` Node 只读  
  返回当前节点同辈的后一个节点 Node，如果该节点不存在则返回 null。

- `parentNode` Node 只读  
  返回当前节点的父节点 Node，如果该节点不存在则返回 null。

- `parentElement` Element 只读  
  返回当前节点的父节点 Element，如果该节点不存在则返回 null。

- `nodeName` String 只读  
  返回当前节点的名称。如果节点是 Element，则等同于 Element.tagName 属性的值。

- `nodeType` Enum(Number) 只读  
  返回一个与该节点类型对应的无符号短整型的值。

- `nodeValue` String  
  返回或设置当前节点的值。

### 方法

- `hasChildNodes`  
  返回一个布尔值，来表示该元素是否包含有子节点。

- `contains`  
  返回一个布尔值，来表示传入的节点是否为该节点的后代节点。

- `cloneNode`  
  返回一个布尔值，来表示该元素是否包含有子节点。

- `isEqualNode`  
  判断两个节点是否相等。当两个节点的类型、内容和属性相同，这两个节点就是相等的。

- `isSameNode`  
  判断两个节点是否相同。也就是是否引用同一个对象。

- `insertBefore`  
  在参照节点之前插入一个新节点，如果新节点已存在，则做位置移动。

- `appendChild`  
  将一个节点添加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。

- `removeChild`  
  从父节点中删除一个指定的子节点。被移除的这个子节点仍然存在于内存中，只是没有添加到当前文档的 DOM 树中，因此，你还可以把这个节点重新添加回文档中。

- `replaceChild`  
  用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/node)

---

## Element

### 接口说明

`Element` 是一个通用性非常强的节点基类，绝大部分的节点都继承于此，如 div、img。

继承关系：`Element` → `Node` → `EventTarget`

### 属性

- `attributes` NamedNodeMap 只读  
  返回一个与该元素相关的所有属性集合 NamedNodeMap。

- `id` String  
  返回或设置元素的 id。

- `className` Node  
  返回或设置元素的 class。

- `tagName` String 只读  
  返回当前元素的标签名。

- `clientHeight` Number 只读  
  返回当前元素的内部高度（单位像素），包含内边距，但不包括水平滚动条、边框和外边距。

- `clientWidth` Number 只读  
  返回当前元素的内部宽度（单位像素），包含内边距，但不包括垂直滚动条、边框和外边距。

- `scrollHeight` Number 只读  
  返回当前元素的滚动高度（单位像素），包含内边距、由于溢出导致的视图中不可见内容，但不包括水平滚动条、边框和外边距。

- `scrollWidth` Number 只读  
  返回当前元素的滚动宽度（单位像素），包含内边距、由于溢出导致的视图中不可见内容，但不包括垂直滚动条、边框和外边距。

- `scrollTop` Number  
  返回或设置元素垂直滚动的距离（单位像素）。

- `scrollLeft` Number  
  返回或设置元素水平滚动的距离（单位像素）。

### 方法

- `getAttribute`  
  返回元素指定属性的属性值。如果指定的属性不存在，则返回 null。

- `hasAttribute`  
  返回一个布尔值，来表示改元素是否包含有指定的属性。

- `setAttribute`  
  设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

- `removeAttribute`  
  从指定的元素中删除一个属性。

- `getBoundingClientRect`  
  回元素的大小及其相对于视口的位置。

- `getElementsByTagName`  
  返回一个动态的包含所有指定 tagName 的元素的 HTML 集合 HTMLCollection。注意只有 element 的后代元素会被搜索，不包括元素自己。

- `insertAdjacentElement`  
  将一个指定元素节点插入到被调用元素的给定位置。

- `scrollBy`  
  将元素的内容滚动一段特定距离。

- `scrollTo`  
  将元素的内容滚动到相对元素的指定坐标位置。

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/element)

---

## HTMLElement

### 接口说明

`HTMLElement` 接口适用于所有 HTML 元素。由于比较常用的 `offsetHeight`、`offsetTop` 等属性在 W3C 规范中是在该接口实现，因而标准容器规范决定纳入 `HTMLElement` 接口。

继承关系：`HTMLElement` → `Element` → `Node` → `EventTarget`

### 属性

- `offsetHeight` Number 只读  
  返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

- `offsetWidth` Number 只读  
  返回该元素的像素宽度，宽度包含该元素的水平内边距和边框，且是一个整数。

- `offsetTop` Number 只读  
  返回当前元素相对于其 offsetParent 元素的上边界内边距的距离。

- `offsetLeft` Number 只读  
  返回当前元素相对于其 offsetParent 元素的左边界内边距的距离。

### 方法

无

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/htmlElement)

---

## Text

### 接口说明

`Text` 接口表示 `Element` 的文本内容。

继承关系：`Text` → `Node` → `EventTarget`

### 构造函数

#### Text()

创建并返回一个 Text 对象。

```js
const text = new Text(str);
```

#### 入参

- `str` String  
  文本内容。

### 属性

无

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/text)
