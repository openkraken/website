# DOM API

Kraken 提供了大部分 W3C(whatwg) 标准的 DOM API 实现。
以下罗列目前已经支持的部分常用 API，更多文档请参考标准容器或 WHATWG 文档。
## Screen
获取屏幕的宽高，兼容 [W3C Screen API](https://developer.mozilla.org/docs/Web/API/Screen) 。
### API

- availWidth：获取当前屏幕可用的宽

- availHeight：获取当面屏幕可用的高

- width：等同于 availWidth

- height：等同于 availHeight

```
console.log(screen);
```
## Console
Kraken 实现了标准的 Console API：

- [Console.assert()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/assert) 判断第一个参数是否为真，`false` 的话抛出异常并且在控制台输出相应信息。

- [Console.count()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/count) 以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。

- [Console.countReset()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/countReset) 重置指定标签的计数器值。

- [Console.debug()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/debug) 在控制台打印一条  debug 消息。

- [Console.dir()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/dir) 打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性。

- [Console.error()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error) 打印一条错误信息。

- [Console.group()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/group) 创建一个新的内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console), 后续所有打印内容将会以子层级的形式展示。调用 `groupEnd()`来闭合组。

- [Console.groupCollapsed()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/groupCollapsed) 创建一个新的内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console)。使用方法和 `group()` 相同，不同的是，`groupCollapsed()` 方法打印出来的内容默认是折叠的。To move back out a level, call `groupEnd()`.

- [Console.groupEnd()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/groupEnd) 闭合当前内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console).

- [Console.info()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/info) 打印资讯类说明信息。

- [Console.log()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log) 打印内容的通用方法。

- [Console.table()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table) 将列表型的数据打印成表格。

- [Console.time()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/time) 启动一个以入参作为特定名称的[计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers)，在显示页面中可同时运行的计时器上限为10,000.

- [Console.timeEnd()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeEnd) 结束特定的 [计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 并以豪秒打印其从开始到结束所用的时间。

- [Console.timeLog()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeLog) 打印特定 [计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 所运行的时间。

- [Console.trace()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/trace) 输出一个 [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces)。

- [Console.warn()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/warn) 打印一个警告信息。

## Fetch
### 概念和用法
Fetch API 提供了一个获取资源的接口，和浏览器所提供的FetchAPI一样，Kraken所提供的FetchAPI也兼容W3C的协议规范，因此你可以直接将浏览器中的fetch调用代码无缝移植到Kraken环境中。
在Kraken环境中，Fetch 不仅提供了 fetch  函数，还提供了对 `Request`  和 `Response` 的支持。通过这2个内置的Class，就可以实现一些比较复杂的功能，比如自定义header头，处理不同类型的数据返回类型等。
发送请求或者获取资源，需要使用 `fetch()` 方法，它是一个全局变量，可以在任何地方直接进行读取。 `fetch()` 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 Promise 对象，resolve 对应请求的 `Response`。你也可以传一个可选的第二个参数init（参见 Request）。
一旦 Response 被返回，就有一些方法可以使用了，比如定义内容或者处理方法。
你也可以通过 `Request()`和 `Response()`的构造函数直接创建请求和响应，但是我们并不推荐这个做，发送网络请求还是应该使用`fetch()`函数。
在浏览器中，Fetch API会受到浏览器等[同源策略安全限制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)，但是在Kraken并不会提供类似浏览器那样的安全限制，所以你可以使用Fetch API请求网络上的任何一个API，但是需要注意的是，一定确保执行fetch API的代码是可信任的，千万不要去执行用户生成的代码。
当遇到网络错误时，`fetch()` 返回的 promise 会被 reject，并传回 `TypeError`，虽然这也可能因为权限或其它问题导致。成功的 `fetch()` 检查不仅要包括 promise 被 resolve，还要包括 [Response.ok](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok) 属性为 true。HTTP 404 状态并不被认为是网络错误，只有连接失败，网络中断，网络重置等连接问题才算。
### 示例
在下面的示例中，我们使用FetchAPI去发起一个GET请求，这个请求会返回一个JSON字符串，我们可以通过调用response的`json()`方法将其转成对象，从供后面的代码使用：
```
fetch('http://example.com/demo.json').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data); // this is the object from the API
});
```
fetch函数还有第二个参数，可以传入一个对象可以自定义请求时的输入，比如发起一个POST请求，并发送一段JSON字符串到服务端：
```
let data = {
  username: 'kraken team'
};
fetch('http://example.com/post', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(function(response) {
  return response.json()
}).then(function(data) {
  console.log(data); // server post response
});
```
## Headers
Fetch API的 **Headers** 接口允许您对HTTP请求和响应头执行各种操作。 这些操作包括检索，设置，添加和删除。 一个Headers对象具有关联的头列表，它最初为空，由零个或多个键值对组成。你可以使用 `append()`方法添加值。在该接口的所有方法中，标题名称由不区分大小写的字节序列匹配。
你可以通过 `Request.headers` 和`Response.headers`属性检索一个`Headers`对象.
### API
#### Fetch()
**语法**
```
Promise<Response> fetch(input[, init]);
```
**参数**
_input_
定义要获取的资源。这可能是：

- 一个字符串，包含要获取资源的 URL。

- 一个 `Request` 对象。


_init_ 可选
一个配置项对象，包括所有对请求的设置。可选的参数有：

- `method`: 请求使用的方法，如 `GET`、 `POST`。

- `headers`: 请求的头信息，形式为 `Headers` 的对象。

- `body`: 请求的 body 信息：目前只能是一个String，注意 GET 或 HEAD 方法的请求不能包含 body 信息。

#### Headers
**方法**

- `append(name: string, value: string): void`


给现有的header添加一个值, 或者添加一个未存在的header并赋值.

- `delete(name: string): void`


从Headers对象中删除指定header.

- `get(name: string)`


返回制定header的值

- `has(name: string)`


以布尔值的形式从Headers对象中返回是否存在指定的header.
## WebSocket
Kraken 的 WebSocket API 提供了创建和管理 WebSocket 连接，并可以通过改连接发送和接收数据，该API的用法兼容 [W3C 规范](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)。
### API
#### WebSocket
创建 WebSockets，并连接服务器。
#### WebSocket(url, protocol)

- **@url**, string, 表示要连接的 URL

- **@protocol**, string, WebSockets 协议名字字符串

```
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
```
#### send(data: string | ArrayBuffer)
调用此方法来发送数据
#### close(code: number, reason: string)

- code： 一个数字状态码，它解释了连接关闭的原因。如果没有传这个参数，默认使用1005。[CloseEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent)的允许的状态码见 [状态码列表](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes) 。

- reason：可选一个人类可读的字符串，它解释了连接关闭的原因。这个UTF-8编码的字符串不能超过123个字节。

## Events
使用 `addEventListener`  来绑定时间，使用 `removeEventListener`  来取消事件绑定
### API
#### close
当连接中断，触发此事件。同时也可以使用 onclose 属性
#### error
当连接异常时触发此事件。同时也可以使用 onerror 属性
#### message
当接收到数据当时候触发此事件。同时也可以使用 onmessage 属性
#### open
当连接建立到时候触发此事件。同时也可以使用 onopen 属性
### Example
```
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```
## URL
**`URL` **可以作为一个构造函数被调用来构造 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) 对象。
### 构造器
`**URL()**` 构造函数返回一个新创建的 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) 对象，表示由一组参数定义的 URL。 如果给定的基本 URL 或生成的 URL 不是有效的 URL 链接，则会抛出一个异常。
```
url = new URL(url, [base])
```
`url`是一个表示绝对或相对 URL 的 String。如果_url_ 是相对 URL，则会将 _base_ 用作基准 URL。如果 url 是绝对URL，则将忽略 _base_，无论是否有给出。
`base`(可选)是一个表示基准 URL 的 String，在 _url_ 是相对 URL 时，它才会起效。如果未指定，则默认为 `''`。
```
var a = new URL("/", "https://developer.mozilla.org"); // Creates a URL pointing to 'https://developer.mozilla.org/'
var b = new URL("https://developer.mozilla.org");      // Creates a URL pointing to 'https://developer.mozilla.org/'
var c = new URL('en-US/docs', b);                      // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var f = new URL('/en-US/docs', d);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var g = new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var h = new URL('/en-US/docs', a);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var i = new URL('/en-US/docs', '');                    // Raises a TypeError exception as '' is not a valid URL
var j = new URL('/en-US/docs');                        // Raises a TypeError exception as '/en-US/docs' is not a valid URL
var k = new URL('http://www.example.com', 'https://developers.mozilla.com');
                                                       // Creates a URL pointing to 'http://www.example.com/'
var l = new URL('http://www.example.com', b);          // Creates a URL pointing to 'http://www.example.com/'
```
### 属性
**href** 包含完整 URL 的 String。 **protocol** 包含 URL 协议名的 String，末尾带 ':'。 **host** 包含 URL 域名，':'，和端口号的 String。 **hostname** 包含 URL 域名的 String。 **port** 包含 URL 端口号的 String。 **pathname** 以 '/' 起头紧跟着 URL 文件路径的 String。 **search** 以 '?' 起头紧跟着 URL 请求参数的 String。 **hash** 以 '#' 起头紧跟着 URL 锚点标记的 String。 **username** 包含在域名前面指定的用户名的 String。 **password** 包含在域名前面指定的密码的 String。 **origin** 只读 返回一个包含协议名、域名和端口号的 String。 **searchParams** 返回一个用来访问当前 URL GET 请求参数的 URLSearchParams 对象。
### 方法
[URL.toString()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/toString) 返回一个包含完整 URL 的 [String](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。它是 [URL.href](https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/href) 的别名，但区别在于 toString 不能用于修改值。
## URLSearchParams
**`URLSearchParams`** 接口定义了一些实用的方法来处理 URL 的查询字符串。
### 构造函数
`**URLSearchParams()**` 构造器创建并返回一个新的[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 对象。 开头的`'?'` 字符会被忽略。
var _URLSearchParams_ = new URLSearchParams(_init_);
_`init`_ (可选)可以是一个 String、Object 或 Array。
```
// Pass in a string literal
var url = new URL('https://example.com?foo=1&bar=2');
// Retrieve from window.location
var url2 = new URL(window.location);
// Retrieve params via url.search, passed into ctor
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);
// Pass in a sequence
var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);
// Pass in a record
var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
```
### 方法
[URLSearchParams.append()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/append) 插入一个指定的键/值对作为新的搜索参数。
[URLSearchParams.delete()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/delete) 从搜索参数列表里删除指定的搜索参数及其对应的值。
[URLSearchParams.get()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/get) 获取指定搜索参数的第一个值。
[URLSearchParams.getAll()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/getAll) 获取指定搜索参数的所有值，返回是一个数组。
[URLSearchParams.has()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/has) 返回 [Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean) 判断是否存在此搜索参数。
[URLSearchParams.set()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/set) 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
[URLSearchParams.toString()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/toString) 返回搜索参数组成的字符串，可直接使用在URL上。
