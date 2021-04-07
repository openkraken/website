# XMLHttpRequest

## 接口说明

`XMLHttpRequest` 接口用于与服务器交互。

## 构造函数

**XMLHttpRequest()**

创建并返回一个 `XMLHttpRequest` 对象。

```js
const myXHR = new XMLHttpRequest();
```

## 属性

- `onabort`  
  当请求被停止时触发，例如当程序调用 `XMLHttpRequest.abort()` 时。回调入参 `event` 遵循 `ProgressEvent`。

- `onerror`  
  当请求遭遇错误时触发。回调入参 event 遵循 `ProgressEvent`。

- `onload`  
  当请求成功完成时触发。回调入参 event 遵循 `ProgressEvent`。

- `onloadend`  
  当请求结束时触发，无论请求成功还是失败。回调入参 event 遵循 `ProgressEvent`。

- `onloadstart`  
  当开始传送数据时被调用。回调入参 event 遵循 `ProgressEvent`。

- `onloadend`  
  当请求接收到更多数据时，周期性地触发。回调入参 event 遵循 `ProgressEvent`。

- `ontimeout`  
  在预设时间内没有接收到响应时触发。回调入参 event 遵循 `ProgressEvent`。

- `onreadystatechange`  
  当 readyState 属性发生变化时，调用的回调函数。回调入参 event 遵循 `ProgressEvent`。

- `onreadystatechange`  
  当 readyState 属性发生变化时，调用的回调函数。回调入参 event 遵循 `ProgressEvent`。

- `readyState`  
  返回一个无符号短整型数字，代表请求的状态码。

- `response`  
  返回整个响应实体。其类型取决于 `responseType` 的值。你可以尝试设置 `responseType` 的值，以便通过特定的类型请求数据。如果请求尚未完成或未成功，则取值是 null 。response 可能的类型包括： ArrayBuffer、Blob、Document、String 或者一个 JavaScript 对象。

- `responseText`  
  返回响应文本，如果请求失败则返回 null，如果请求还未发送，则返回 ''。

- `responseXML`  
  返回一个包含请求检索的 HTML 或 XML 的 `Document`。如果请求未成功，尚未发送，或者检索的数据无法正确解析为 XML 或 HTML，则为 null。默认是当作 “text / xml” 来解析。当 `responseType` 设置为 `document` 并且请求已异步执行时，响应将被当作 “text / html” 来解析。

- `status`  
  返回一个无符号短整型数字，代表请求的响应状态。status 码是标准的 [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)。在请求完成前，status 的值为 0。

- `statusText`  
  返回一个字符串，代表请求的响应状态的文本信息。如果请求的状态 `readyState` 的值为 UNSENT 或者 OPENED ，则这个属性的值将会是一个空字符串。如果服务器未明确指定一个状态文本信息，则 `statusText` 的值将会被自动赋值为 OK。

## 方法

- `abort`  
  如果请求已被发出，则立刻中止请求。当一个请求被终止，它的 `readyState` 将被置为 0（XMLHttpRequest.UNSENT），并且请求的 `status` 置为 0。

- `getAllResponseHeaders`  
  以字符串的形式返回所有用 [CRLF](https://developer.mozilla.org/zh-CN/docs/Glossary/CRLF) 分隔的响应头，如果没有收到响应，则返回 null。

- `getResponseHeader`  
  返回包含指定响应头的字符串，如果响应尚未收到或响应中不存在该报头，则返回 null。

- `open`  
  初始化一个请求。

- `send`  
  用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。`send()` 方法接受一个可选的参数，作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。如果没有使用 `setRequestHeader()` 方法设置 Accept 头信息，则会发送带有 "_ / _" 的 Accept 头信息。

## 事件

- `abort`  
  当请求遭遇错误时触发。

- `load`  
  当请求成功完成时触发。

- `loadend`  
  当请求结束时触发，无论请求成功还是失败。

- `loadstart`  
  当接收到响应数据时触发。

## 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
