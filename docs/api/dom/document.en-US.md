# Documentation

Kraken provides most of the W3C (whatwg) standard document-related API implementations.
The following lists the currently supported APIs and their attributes and methods. For detailed documentation, please refer to the standard documentation.

---

## Document

### Interface Description

The `Document` interface describes the general properties and methods of DOM tree operations.

Inheritance: `Document` → `Node` → `EventTarget`

### Constructor

#### Document()

Create a new instance of the `Document` object.

```js
const myDocument = new Document();
```

### Attributes

no

### Method

-`createElement`
Create an HTML element specified by the tag name tagName. If the user agent cannot recognize the tagName, an unknown HTML element HTMLUnknownElement will be generated.

-`createTextNode`
Create a new Text node. This method can be used to escape HTML characters.

-`getElementById`
Returns an element that matches a specific ID.

-`getElementsByTagName`
Returns a dynamic HTML collection that includes all elements of the given tag name.

### Reference

-[Link](https://developer.mozilla.org/zh-CN/docs/Web/API/document)

### Description

`querySelector`, `querySelectorAll`, `getElementsByClassName` APIs are not currently supported.
