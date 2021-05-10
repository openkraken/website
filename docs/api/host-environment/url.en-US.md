# URL

`URL` can be called as a constructor to construct a [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) object.

## Constructor

The `URL()` constructor returns a newly created [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) object, which represents a URL defined by a set of parameters.
If the given base URL or the generated URL is not a valid URL link, an exception will be thrown.

```javascript
var url = new URL(url, [base]);
```

`url` is a String representing an absolute or relative URL. If _url_ is a relative URL, _base_ will be used as the base URL. If url is an absolute URL, _base_ will be ignored, regardless of whether it is given or not.

`base` (optional) is a String representing the base URL. It will only work when _url_ is a relative URL. If not specified, the default is `''`.

```javascript
var a = new URL('/', 'https://developer.mozilla.org'); // Creates a URL pointing to'https://developer.mozilla.org/'
var b = new URL('https://developer.mozilla.org'); // Creates a URL pointing to'https://developer.mozilla.org/'
var c = new URL('en-US/docs', b); // Creates a URL pointing to'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b); // Creates a URL pointing to'https://developer.mozilla.org/en-US/docs'
var f = new URL('/en-US/docs', d); // Creates a URL pointing to'https://developer.mozilla.org/en-US/docs'
var g = new URL('/en-US/docs', 'https://developer.mozilla.org/fr-FR/toto');
// Creates a URL pointing to'https://developer.mozilla.org/en-US/docs'
var h = new URL('/en-US/docs', a); // Creates a URL pointing to'https://developer.mozilla.org/en-US/docs'
var i = new URL('/en-US/docs', ''); // Raises a TypeError exception as'' is not a valid URL
var j = new URL('/en-US/docs'); // Raises a TypeError exception as'/en-US/docs' is not a valid URL
var k = new URL('http://www.example.com', 'https://developers.mozilla.com');
// Creates a URL pointing to'http://www.example.com/'
var l = new URL('http://www.example.com', b); // Creates a URL pointing to'http://www.example.com/'
```

## Attributes

-`href`
A String containing the full URL. -`protocol`
A String containing the URL protocol name, with a':' at the end. -`host`
A String containing the URL domain name,':', and port number. -`hostname`
A String containing the URL domain name. -`port`
A String containing the URL port number. -`pathname`
A String beginning with a'/' followed by the URL file path. -`search`
A String that starts with a'?' and immediately follows the URL request parameter. -`hash`
A String that starts with a'#' immediately followed by the URL anchor mark. -`username`
A String containing the username specified in front of the domain name. -`password`
A String containing the password specified in front of the domain name. -`origin` read only
Returns a String containing the protocol name, domain name, and port number. -`searchParams`
Returns a URLSearchParams object used to access the parameters of the current URL GET request.

## Method

-`toString()`
Return a [String](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) containing the complete URL. It is an alias of [URL.href](https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/href), but the difference is that toString cannot be used to modify the value.
