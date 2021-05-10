# URLSearchParams

The `URLSearchParams` interface defines some useful methods to process URL query strings.

## Constructor

The `URLSearchParams()` constructor creates and returns a new [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) object. The first `"?"` character will be ignored.

```js
const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);
```

`paramsString` (optional) can be a String, Object or Array.

```javascript
// Pass in a string literal
const url = new URL('https://example.com?foo=1&bar=2');
// Retrieve from window.location
const url2 = new URL(window.location);

// Retrieve params via url.search, passed into ctor
const params = new URLSearchParams(url.search);
const params2 = new URLSearchParams(url2.search);

// Pass in a sequence
const params3 = new URLSearchParams([
  ['foo', 1],
  ['bar', 2],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: 1, bar: 2 });
```

## Method

-`append()` inserts a specified key/value pair as a new search parameter.

-`delete()` deletes the specified search parameter and its corresponding value from the search parameter list.

-`get()` Get the first value of the specified search parameter.

-`getAll()` Get all the values ​​of the specified search parameter, and the return is an array.

-`has()` returns a Boolean to determine whether this search parameter exists.

-`set()` sets a new value of a search parameter. If there are multiple values, all other values ​​will be deleted.

-`toString()` returns a string composed of search parameters, which can be used directly on the URL.
