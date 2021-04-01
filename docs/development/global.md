# 全局变量与方法

跟浏览器的 BOM(Browser Object Model) 一样，Kraken 也提供了一系列宿主环境的全局变量与方法。

## 定时

Kraken 支持与浏览器相同的用于定时的 API，包含：

- setTimeout
- clearTimeout
- setInterval
- clearInterval

---

## requestAnimationFrame

Kraken 支持 W3C [requestAnimationFrame API](https://www.w3.org/TR/animation-timing/#dom-windowanimationtiming-requestanimationframe)，用于在渲染引擎下一帧绘制前调用指定的回调函数。使用方法参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)。

---

## Screen

获取屏幕的宽高，兼容 W3C [Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Screen)。

- availWidth：获取当前屏幕可用的宽
- availHeight：获取当面屏幕可用的高
- width：等同于 availWidth
- height：等同于 availHeight

---

## Fetch

Kraken 所提供的 Fetch API 兼容 W3C 的协议规范，因此你可以直接将浏览器中的 `fetch` 调用代码无缝移植到 Kraken 环境中。

在 Kraken 环境中，Fetch API 不仅提供了 `fetch` 函数，还提供了对 `Request` 和 `Response` 的支持。通过这 2 个内置的构造器，可以实现一些比较复杂的功能，比如自定义请求头，处理不同类型的数据返回类型等。

需要注意的是在浏览器中，Fetch 会受到浏览器的[同源策略安全限制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)，但是在 Kraken 并没有提供类似浏览器那样的安全限制，所以你可以使用 Fetch 请求网络上的任何一个 API，但是需要注意的是，一定确保执行 Fetch 的代码是可信任的，否则将会引起安全问题。

### 示例

在下面的示例中，我们使用 FetchAPI 去发起一个 GET 请求，这个请求会返回一个 JSON 字符串，我们可以通过调用 response 的`json()`方法将其转成对象，从供后面的代码使用：

```javascript
fetch('http://example.com/demo.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // This is the object from API.
    console.log(data);
  });
```

`fetch` 函数的第 2 个参数，可以传入一个对象可以自定义请求时的输入，如发起一个 POST 请求，并发送一段 JSON 字符串到服务端：

```javascript
const data = {
  username: 'kraken team',
};

fetch('http://example.com/post', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Server post response.
    console.log(data);
  });
```

### Events

使用 `addEventListener` 来绑定事件，使用 `removeEventListener` 来取消事件绑定

#### close

当连接中断，触发此事件。同时也可以使用 onclose 属性

#### error

当连接异常时触发此事件。同时也可以使用 onerror 属性

#### message

当接收到数据当时候触发此事件。同时也可以使用 onmessage 属性

#### open

当连接建立到时候触发此事件。同时也可以使用 onopen 属性

### 示例

```javascript
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
// Connection opened
socket.addEventListener('open', function(event) {
  socket.send('Hello Server!');
});
// Listen for messages
socket.addEventListener('message', function(event) {
  console.log('Message from server ', event.data);
});
```

## URL

`URL` 可以作为一个构造函数被调用来构造 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) 对象。

### 构造器

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

### 属性

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

### 方法

- `toString()`
  返回一个包含完整 URL 的 [String](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。它是 [URL.href](https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/href) 的别名，但区别在于 toString 不能用于修改值。

## URLSearchParams

`URLSearchParams` 接口定义了一些实用的方法来处理 URL 的查询字符串。

### 构造函数

`URLSearchParams()` 构造器创建并返回一个新的 [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 对象。 开头的`"?"` 字符会被忽略。

```js
const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);
```

`paramsString` （可选）可以是一个 String、Object 或 Array。

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

### 方法

- `append()` 插入一个指定的键/值对作为新的搜索参数。

- `delete()` 从搜索参数列表里删除指定的搜索参数及其对应的值。

- `get()` 获取指定搜索参数的第一个值。

- `getAll()` 获取指定搜索参数的所有值，返回是一个数组。

- `has()` 返回 Boolean 判断是否存在此搜索参数。

- `set()` 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。

- `toString()` 返回搜索参数组成的字符串，可直接使用在 URL 上。

---

## Console

Kraken 实现了标准的 [Console API](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)：

- `assert()`
  判断第一个参数是否为真，`false` 的话抛出异常并且在控制台输出相应信息。
- `count()`
  以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。
- `countReset()`
  重置指定标签的计数器值。
- `debug()`
  在控制台打印一条 debug 消息。
- `dir()`
  打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性。
- `error()`
  打印一条错误信息。
- `group()`
  创建一个新的内联 group, 后续所有打印内容将会以子层级的形式展示。调用 `groupEnd()`来闭合组。
- `groupCollapsed`
  创建一个新的内联 group。使用方法和 `group()` 相同，不同的是，`groupCollapsed()` 方法打印出来的内容默认是折叠的。To move back out a level, call `groupEnd()`。
- `groupEnd()`
  闭合当前内联 group。
- `info()`
  打印资讯类说明信息。
- `log()`
  打印内容的通用方法。
- `table()`
  将列表型的数据打印成表格。
- `time()`
  启动一个以入参作为特定名称的计时器，在显示页面中可同时运行的计时器上限为 10,000。
- `timeEnd()`
  结束特定的计时器，并以豪秒打印其从开始到结束所用的时间。
- `timeLog()`
  打印特定计时器所运行的时间。
- `trace()`
  输出一个 stack trace。
- `warn()`
  打印一个警告信息。
