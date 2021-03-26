# WebSocket

提供 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) API。

## 快速使用

将 [kraken_websocket](https://pub.dev/packages/kraken_websocket) 作为项目依赖添加到 pubspec.yaml 文件中。

在调用 `runApp()` 之前添加以下代码：

```dart
import 'package:kraken_websocket/kraken_websocket.dart';
void main() {
  KrakenWebsocket.initialize();
  runApp(MyApp());
}
```

## 示例

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

### 构造函数

```
WebSocket(url[, protocols])
```

创建一个 WebSocket 对象。

### 常量

| Constant             | Value |
| -------------------- | ----- |
| WebSocket.CONNECTING | 0     |
| WebSocket.OPEN       | 1     |
| WebSocket.CLOSING    | 2     |
| WebSocket.CLOSED     | 3     |

### 属性

**WebSocket.binaryType**

传输过程中数据的类型。

**WebSocket.onclose**

一个事件监听器，当连接中断时触发。

**WebSocket.onerror**

一个事件监听器，当连接异常时触发。

**WebSocket.onmessage**

一个事件监听器，当接收到服务端发送过来当消息时触发。

**WebSocket.onopen**

一个事件监听器，当建立 ws:// 协议连接时触发。

**WebSocket.protocol**

要求的 WebSocket 协议版本。

**WebSocket.readyState**

当前连接的状态。

**WebSocket.url**

连接的地址。

### 方法

**WebSocket.close([code[, reason]])**

中断连接。

**WebSocket.send(data)**

发送数据。

### 事件

使用 `addEventListener` 或者通过 `oneventname` 属性来设置监听器。

**close**

当连接中断时触发。

**error**

当连接异常时触发。

**message**

当接收到服务端发送过来当消息时触发。

**open**

当建立 ws:// 协议连接时触发。
