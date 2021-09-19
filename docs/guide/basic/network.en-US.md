# Network request

As in the browser, you can use the Fetch API to initiate HTTP requests under Kraken. At the same time, in order to be compatible with some JS libraries that support older browsers, Kraken also supports the use of XMLHttpRequest.

For full-duplex communication, WebSocket is a better choice. Kraken supports WebSocket API consistent with the Web (non-default capabilities require registration of the corresponding plug-in).

## Differences with browsers

It should be noted that network requests initiated from Kraken are not subject to cross-domain restrictions.

## Simple HTTP request

You can use `Fetch API` to send HTTP requests in Kraken:

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
```

Sometimes you need to use the POST method to initiate a request to the HTTP URL. You can add a second optional parameter to the fetch method:

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

For more information, please refer to [Development Document](/en-US/api/host-environment/fetch).

## WebSocket

HTTP network communication can only be initiated by the client, while WebSocket provides support for two-way communication. The WebSocket API is based on the event communication model, and it can be used by loading [WebSocket Plug-in](https://pub.dev/packages/kraken_websocket) in Kraken in advance.

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

For more details, please refer to [Development Document](/en-US/plugins/official/kraken_websocket).

## Use XMLHttpRequest

For compatibility reasons, XMLHttpRequest is also supported in Kraken.

The following is an example of using XMLHttpRequest:

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(event) {});
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
```
