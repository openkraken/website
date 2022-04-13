# Documentation

Kraken provides documentation-related API implementations for most of the W3C (whatwg) standards.
The following lists the currently supported APIs and their properties and methods. For detailed documentation, please refer to the standard documentation.

---

## Documents

### Interface Description

The `Document` interface describes common properties and methods for DOM tree manipulation.

Inheritance relationship: `Document` → `Node` → `EventTarget`

### Constructor

#### Document()

Creates a new `Document` object instance.

```js
const myDocument = new Document();
```

### Attributes

without

### Methods

- `createElement`
  Creates an HTML element specified by the tag name tagName. If the user agent does not recognize the tagName, an unknown HTML element HTMLUnknownElement is generated.

- `createTextNode`
  Create a new Text node. This method can be used to escape HTML characters.

- `getElementById`
  Returns an element matching a specific ID.

- `getElementsByTagName`
  Returns a dynamic HTML collection that includes all elements with the given tag name.

- `getElementsByClassName`
  Returns an array-like object containing all the child elements of the specified class name. When called on the document object, the entire DOM document is searched, including the root node. You can also call the getElementsByClassName() method on any element, and it will return all child elements with the specified class name with the current element as the root node.

- `querySelector`
  Returns the first Element object in the document that matches the specified selector or selector group. Returns null if no match is found.

- `querySelectorAll`
  Returns a list of elements in the document that match the specified selector group (traversing the document's nodes using depth-first preorder). The returned object is a NodeList.

### Refer to

- [Link](https://developer.mozilla.org/en-US/docs/Web/API/document)
