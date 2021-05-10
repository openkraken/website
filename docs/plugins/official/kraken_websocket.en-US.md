# WebSocket

Provide [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) API.

## Quick use

Add [kraken_websocket](https://pub.dev/packages/kraken_websocket) as a project dependency in the pubspec.yaml file.

Add the following code before calling `runApp()`:

```dart
import'package:kraken_websocket/kraken_websocket.dart';
void main() {
  KrakenWebsocket.initialize();
  runApp(MyApp());
}
```

## Example

```javascript
let ws = new WebSocket('ws://127.0.0.1:8399');
ws.onopen = () => {
  ws.send('helloworld');
};
ws.onmessage = event => {
  console.log(event);
};
```

## API

### Constructor

```
WebSocket(url[, protocols])
```

Create a WebSocket object.

### Constant

| Constant             | Value |
| -------------------- | ----- |
| WebSocket.CONNECTING | 0     |
| WebSocket.OPEN       | 1     |
| WebSocket.CLOSING    | 2     |
| WebSocket.CLOSED     | 3     |

### Attributes

**WebSocket.binaryType**

The type of data during transmission.

**WebSocket.onclose**

An event listener, triggered when the connection is interrupted.

**WebSocket.onerror**

An event listener, triggered when the connection is abnormal.

**WebSocket.onmessage**

An event listener, which is triggered when a message sent by the server is received.

**WebSocket.onopen**

An event listener, triggered when a ws:// protocol connection is established.

**WebSocket.protocol**

The required WebSocket protocol version.

**WebSocket.readyState**

The status of the current connection.

**WebSocket.url**

The address of the connection.

### Method

**WebSocket.close([code[, reason]])**

Disconnect.

**WebSocket.send(data)**

send data.

### Incident

Use `addEventListener` or set the listener via the `oneventname` property.

**close**

Triggered when the connection is interrupted.

**error**

Triggered when the connection is abnormal.

**message**

Triggered when a message sent by the server is received.

**open**

Triggered when the ws:// protocol connection is established.
