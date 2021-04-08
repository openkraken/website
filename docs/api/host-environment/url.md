# URL

`URL` 可以作为一个构造函数被调用来构造 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) 对象。

## 构造函数

`URL()` 构造函数返回一个新创建的 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) 对象，表示由一组参数定义的 URL。
如果给定的基本 URL 或生成的 URL 不是有效的 URL 链接，则会抛出一个异常。

```javascript
var url = new URL(url, [base]);
```

`url`是一个表示绝对或相对 URL 的 String。如果*url* 是相对 URL，则会将 _base_ 用作基准 URL。如果 url 是绝对 URL，则将忽略 _base_，无论是否有给出。

`base`(可选)是一个表示基准 URL 的 String，在 _url_ 是相对 URL 时，它才会起效。如果未指定，则默认为 `''`。

```javascript
var a = new URL('/', 'https://developer.mozilla.org'); // Creates a URL pointing to 'https://developer.mozilla.org/'
var b = new URL('https://developer.mozilla.org'); // Creates a URL pointing to 'https://developer.mozilla.org/'
var c = new URL('en-US/docs', b); // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b); // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var f = new URL('/en-US/docs', d); // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var g = new URL('/en-US/docs', 'https://developer.mozilla.org/fr-FR/toto');
// Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var h = new URL('/en-US/docs', a); // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var i = new URL('/en-US/docs', ''); // Raises a TypeError exception as '' is not a valid URL
var j = new URL('/en-US/docs'); // Raises a TypeError exception as '/en-US/docs' is not a valid URL
var k = new URL('http://www.example.com', 'https://developers.mozilla.com');
// Creates a URL pointing to 'http://www.example.com/'
var l = new URL('http://www.example.com', b); // Creates a URL pointing to 'http://www.example.com/'
```

## 属性

- `href`
  包含完整 URL 的 String。
- `protocol`
  包含 URL 协议名的 String，末尾带 ':'。
- `host`
  包含 URL 域名，':'，和端口号的 String。
- `hostname`
  包含 URL 域名的 String。
- `port`
  包含 URL 端口号的 String。
- `pathname`
  以 '/' 起头紧跟着 URL 文件路径的 String。
- `search`
  以 '?' 起头紧跟着 URL 请求参数的 String。
- `hash`
  以 '#' 起头紧跟着 URL 锚点标记的 String。
- `username`
  包含在域名前面指定的用户名的 String。
- `password`
  包含在域名前面指定的密码的 String。
- `origin` 只读
  返回一个包含协议名、域名和端口号的 String。
- `searchParams`
  返回一个用来访问当前 URL GET 请求参数的 URLSearchParams 对象。

## 方法

- `toString()`
  返回一个包含完整 URL 的 [String](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。它是 [URL.href](https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/href) 的别名，但区别在于 toString 不能用于修改值。
