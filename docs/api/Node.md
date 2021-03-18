# Node

## 接口说明

`Node` 接口是诸如 `Element`、`Document`、`DocumentFragment` 所基于的抽象基类，提供了一些通用的属性和方法。

继承关系：Node → EventTarget

---

## 属性

### **childNodes**

`NodeList` 只读

返回一个包含了该节点所有子节点的实时的 [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)。[`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) 是动态变化的。如果该节点的子节点发生了变化，[`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) 对象就会自动更新。

```javascript
const ndList = elementNodeReference.childNodes;
```

### **firstChild**

`Node` 只读

返回该节点的第一个子节点 `Node`，如果该节点没有子节点则返回 `null`。

```javascript
const firstChild = elementNodeReference.firstChild;
```

### **lastChild**

`Node` 只读

返回该节点的最后一个子节点 `Node`，如果该节点没有子节点则返回 `null`。

```javascript
const lastChild = elementNodeReference.lastChild;
```

### **previousSibling**

`Node` 只读

返回当前节点同辈的前一个节点 `Node`，如果该节点不存在则返回 `null`。

```javascript
const previousSibling = elementNodeReference.previousSibling;
```

### **nextSibling**

`Node` 只读

返回当前节点同辈的后一个节点 `Node`，如果该节点不存在则返回 `null`。

```javascript
const nextSibling = elementNodeReference.nextSibling;
```

### **parentNode**

`Node` 只读

返回当前节点的父节点 `Node`，如果该节点不存在则返回 `null`。

```javascript
const parentNode = elementNodeReference.parentNode;
```

### **parentElement**

`Element` 只读

返回当前节点的父节点 Element，如果该节点不存在则返回 `null`。

```javascript
const parentElement = elementNodeReference.parentElement;
```

### **nodeName**

`String` 只读

返回当前节点的名称。如果节点是 Element，则等同于 Element.tagName 属性的值；

```javascript
const nodeName = elementNodeReference.nodeName;
```

### **nodeType**

`Number` 只读

返回一个与该节点类型对应的无符号短整型的值，可能的值如下：

| **值** |        **描述**        |
| :----: | :--------------------: |
| **1**  |      ELEMENT_NODE      |
| **3**  |       TEXT_NODE        |
| **9**  |     DOCUMENT_NODE      |
| **11** | DOCUMENT_FRAGMENT_NODE |

```javascript
const nodeType = elementNodeReference.nodeType;
```

### **nodeValue**

`String`

返回或设置当前节点的值。

```javascript
const nodeValue = node.nodeValue;
node.nodeValue = newVal;
```

|     **Node**     |     **值**     |
| :--------------: | :------------: |
|     Element      |      null      |
|       Text       | 文本节点的内容 |
|     Document     |      null      |
| DocumentFragment |      null      |

---

## 方法

### **hasChildNodes**

返回一个布尔值，来表示该元素是否包含有子节点。

```javascript
const hasChild = node.hasChildNodes();
```

**返回值**
`val` Boolean
是否包含有子节点。

### **contains**

返回一个布尔值，来表示传入的节点是否为该节点的后代节点。

```javascript
const isContained = node.contains(otherNode);
```

**入参**
`otherNode` Node
需要进行检查的节点。

**返回值**
`val` Boolean
是否为目标节点的后代节点。如果 `otherNode` 是 `node` 的后代节点或 `node` 节点本身，则返回 `true`，否则返回 `false`。

### **cloneNode**

返回一个布尔值，来表示该元素是否包含有子节点。

```javascript
const dupNode = node.cloneNode(deep);
```

**入参**
`deep` Boolean 可选
是否采用深度克隆，如果为 `true`，则该节点的所有后代节点也都会被克隆；如果为 `false`，则只克隆该节点本身。

**返回值**
`val` Node
是否包含有子节点。

### **isEqualNode**

判断两个节点是否相等。当两个节点的类型、内容和属性相同，这两个节点就是相等的。

```javascript
const isEqualNode = node.isEqualNode(otherNode);
```

**入参**
`otherNode` Node
比较是否相等的节点。

**返回值**
`val` Boolean
是否相等。

### **isSameNode**

判断两个节点是否相同。也就是是否引用同一个对象。

```javascript
const isSameNode = node.isSameNode(otherNode);
```

**入参**
`otherNode` Node
比较是否相同的节点。

**返回值**
`val` Boolean
是否相同。

### **insertBefore**

在参照节点之前插入一个新节点，如果新节点已存在，则做位置移动。

```javascript
const insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

**入参**
`newNode` Node
插入的新节点。

`referenceNode` Node
参照节点。

**返回值**
`val` Node
被插入的新节点。如果新节点是 DocumentFragment，则返回一个空的 DocumentFragment。

### **appendChild**

将一个节点添加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）

```javascript
const appendedNode = parentNode.appendChild(newNode);
```

**入参**
`newNode` Node
插入的新节点。

**返回值**
`val` Node
被插入的新节点。如果新节点是 DocumentFragment，则返回一个空的 DocumentFragment。

### **removeChild**

从父节点中删除一个指定的子节点。被移除的这个子节点仍然存在于内存中，只是没有添加到当前文档的 DOM 树中，因此，你还可以把这个节点重新添加回文档中。

```javascript
const oldChild = parentNode.removeChild(childNode);
```

**入参**
`childNode` Node
要移除的子节点。如果 `childNode` 不是 `parentNode` 的子节点，则该方法会抛出异常。

**返回值**
`val` Node
被移除的子节点。

### **replaceChild**

用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

```javascript
const oldChild = parentNode.removeChild(newChild, oldChild);
```

**入参**
`newChild` Node
用来替换 oldChild 的新节点。如果该节点已经存在于 DOM 树中，则它首先会被从原始位置删除。

`oldChild` Node
被替换的原始节点。

**返回值**
`val` Node
被替换掉的原始节点。
