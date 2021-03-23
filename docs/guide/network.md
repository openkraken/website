# 网络请求

与在浏览器中一样，Kraken 下你可以使用 Fetch API 来发起 HTTP 请求，同时为了兼容一些支持旧款浏览器的 JS 库，Kraken 也支持使用 XMLHttpRequest。

对于全双工的通信，WebSocket 是更好的选择，Kraken 支持与 Web 一致的 WebSocket API (非默认能力需注册对应插件)。

## 与浏览器的差异

需要注意的是，从 Kraken 发起的网络请求暂时不受跨域限制。

## 简单 HTTP 请求

你可以使用 `Fetch API` 在 Kraken 中发送 HTTP 请求：

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

// -> {
//      "userId": 1,
//      "id": 1,
//      "title": "delectus aut autem",
//      "completed": false
//    }
```

有时候你需要使用 POST 方式向 HTTP URL 发起请求，可以在 fetch 方法添加第二个可选参数：

```js
const data = {
  foo: 'bar',
};
fetch(url, {
  body: JSON.stringify(data),
  method: 'POST',
})
  .then(response => response.json())
  .then(json => console.log(json));
```

更多信息可以参考[全局变量与方法](/api/global)。

## WebSocket

HTTP 的网络通信只能由客户端发起，而 WebSocket 则提供了双向通信的支持。WebSocket 的 API 基于事件通信的模型，在 Kraken 中只要提前加载 [WebSocket 插件](/plugin/websocket) 就可以使用了。

```js
const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = function(evt) {
  console.log('Connection open ...');
  ws.send('Hello WebSockets!');
};

ws.onmessage = function(evt) {
  console.log('Received Message: ' + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log('Connection closed.');
};
```

更多细节可以参考 [WebSocket](/plugin/websocket)。

## 使用 XMLHttpRequest

出于兼容性的考虑，XMLHttpRequest 在 Kraken 中也被支持。

以下为使用 XMLHttpRequest 的示例：

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(event) {});
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
```
