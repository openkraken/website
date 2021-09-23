# Node

Kraken provides most of the W3C (whatwg) standard node-related API implementations.
The following lists the currently supported APIs and their attributes and methods. For detailed documentation, please refer to the standard.

---

## Node

### Interface Description

The `Node` interface is an abstract base class based on such as `Element`, `Document`, and `DocumentFragment`, providing some common properties and methods.

Inheritance: `Node` → `EventTarget`

### Attributes

- `childNodes` NodeList read only
  Return a real-time NodeList containing all the child nodes of this node. The NodeList changes dynamically. If the child nodes of the node change, the NodeList object will be automatically updated.

- `firstChild` Node read only
  Returns the first child node Node of the node, or null if the node has no child nodes.

- `lastChild` Node read only
  Returns the last child node of the node, Node, or null if the node has no child nodes.

- `previousSibling` Node read only
  Returns the previous node Node of the sibling of the current node, or null if the node does not exist.

- `nextSibling` Node read only
  Return the next node Node of the current node's sibling, or null if the node does not exist.

- `parentNode` Node read only
  Returns the parent node Node of the current node, or null if the node does not exist.

- `parentElement` Element read only
  Returns the parent node Element of the current node, or null if the node does not exist.

- `nodeName` String Read only
  Returns the name of the current node. If the node is an Element, it is equivalent to the value of the Element.tagName property.

- `nodeType` Enum(Number) Read only
  Returns an unsigned short integer value corresponding to the node type.

- `nodeValue` String
  Returns or sets the value of the current node.

### method

- `hasChildNodes`
  Returns a Boolean value to indicate whether the element contains child nodes.

- `contains`
  Returns a boolean value to indicate whether the passed node is a descendant node of the node.

- `cloneNode`
  Returns a Boolean value to indicate whether the element contains child nodes.

- `isEqualNode`
  Determine whether two nodes are equal. When two nodes have the same type, content, and attributes, the two nodes are equal.

- `isSameNode`
  Determine whether the two nodes are the same. That is, whether to refer to the same object.

- `insertBefore`
  Insert a new node before the reference node. If the new node already exists, move the position.

- `appendChild`
  Add a node to the end of the list of child nodes of the specified parent node. If the node to be inserted already exists in the document tree of the current document, it will only be moved from its original position to the new position (there is no need to remove the node to be moved in advance).

- `removeChild`
  Delete a specified child node from the parent node. The removed child node still exists in memory, but it is not added to the DOM tree of the current document. Therefore, you can also add this node back to the document.

- `replaceChild`
  Replace a child node of the current node with the specified node, and return the replaced node.

### refer to

- [Link](https://developer.mozilla.org/zh-CN/docs/Web/API/node)

---

## Element

### Interface Description

`Element` is a very versatile node base class, most of the nodes inherit from this, such as div and img.

Inheritance: `Element` → `Node` → `EventTarget`

### Attributes

- `attributes` NamedNodeMap read only
  Returns a NamedNodeMap, a collection of all attributes related to this element.

- `id` String
  Returns or sets the id of the element.

- `className` Node
  Returns or sets the class of the element.

- `tagName` String Read only
  Returns the tag name of the current element.

- `clientHeight` Number Read only
  Returns the inner height (in pixels) of the current element, including inner margins, but excluding horizontal scroll bars, borders, and outer margins.

- `clientWidth` Number Read only
  Returns the inner width (in pixels) of the current element, including inner margins, but excluding vertical scroll bars, borders, and outer margins.

- `scrollHeight` Number Read only
  Returns the scroll height (in pixels) of the current element, including the inner margin and the content that is not visible in the view due to overflow, but does not include the horizontal scroll bar, border, and outer margin.

- `scrollWidth` Number Read only
  Returns the scrolling width (in pixels) of the current element, including the inner margin and the content that is not visible in the view due to overflow, but does not include the vertical scroll bar, border, and outer margin.

- `scrollTop` Number
  Returns or sets the vertical scroll distance (in pixels) of the element.

- `scrollLeft` Number
  Returns or sets the horizontal scroll distance (in pixels) of the element.

### method

- `getAttribute`
  Returns the attribute value of the specified attribute of the element. If the specified attribute does not exist, null is returned.

- `hasAttribute`
  Returns a Boolean value to indicate whether the changed element contains the specified attribute.

- `setAttribute`
  Set the value of an attribute on the specified element. If the attribute already exists, update the value; otherwise, add a new attribute with the specified name and value.

- `removeAttribute`
  Remove an attribute from the specified element.

- `getBoundingClientRect`
  Return the size of the element and its position relative to the viewport.

- `getElementsByTagName`
  Returns a dynamic HTML collection HTMLCollection containing all elements of the specified tagName. Note that only the descendants of element will be searched, not including the element itself.

- `insertAdjacentElement`
  Insert a specified element node into the given position of the called element.

- `scrollBy`
  Scroll the content of the element a certain distance.

- `scrollTo`
  Scroll the content of the element to the specified coordinate position relative to the element.

### refer to

- [Link](https://developer.mozilla.org/zh-CN/docs/Web/API/element)

---

## HTMLElement

### Interface Description

The `HTMLElement` interface is applicable to all HTML elements. Since the more commonly used attributes such as `offsetHeight` and `offsetTop` are implemented in this interface in the W3C specification, the standard container specification decided to include `HTMLElement`Interface.

Inheritance relationship: `HTMLElement` → `Element` → `Node` → `EventTarget`

### Attributes

- `offsetHeight` Number Read only
  Returns the pixel height of the element. The height includes the vertical padding and border of the element, and is an integer.

- `offsetWidth` Number Read only
  Returns the pixel width of the element. The width includes the horizontal padding and border of the element, and is an integer.

- `offsetTop` Number Read only
  Returns the distance of the current element relative to the inner margin of the upper boundary of its offsetParent element.

- `offsetLeft` Number Read only
  Returns the distance of the current element relative to the left margin of its offsetParent element.

### method

without

### refer to

- [Link](https://developer.mozilla.org/zh-CN/docs/Web/API/htmlElement)

---

## Text

### Interface Description

The `Text` interface represents the text content of the `Element`.

Inheritance: `Text` → `Node` → `EventTarget`

### Constructor

#### Text()

Create and return a Text object.

```js
const text = new Text(str);
```

#### Entry

- `str` String
  Text content.

### Attributes

without

### refer to

- [Link](https://developer.mozilla.org/zh-CN/docs/Web/API/text)
