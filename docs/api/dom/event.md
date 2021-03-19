# 事件

Kraken 提供了大部分 W3C(whatwg) 标准的事件相关 API 实现。
以下列出目前已经支持的 API 及其属性与方法，详细文档请参考标准文档。

---

## Event

### 接口说明

`Event` API 表示在 DOM 中出现的事件。一些事件是由用户触发的，例如鼠标或键盘事件；而其他事件常由 API 生成，例如指示动画已经完成运行的事件，视频已被暂停等等。

### 构造函数

#### Event()

创建并返回一个 `Event` 对象。

```js
const myEvent = new Event(type, eventInit);
```

#### 入参

- `type` String  
   表示所创建事件的名称。

- `eventInit` Object 可选  
   可选参数对象。可用的选项如下：
  - `bubbles` Boolean，默认值为 false，表示该事件是否冒泡。
  - `cancelable` Boolean，默认值为 false，表示该事件能否被取消。

### 属性

- `bubbles` Boolean 只读  
   用来表示该事件是否会在 DOM 中冒泡。

- `cancelable` Boolean 只读  
   表示事件是否可以取消。

- `currentTarget` Object 只读  
   对事件当前注册的目标的引用。

- `defaultPrevented` Boolean 只读  
   表示 `event.preventDefault()` 方法是否取消了事件的默认行为。

- `eventPhase` Number 只读  
   表示事件流正被处理到了哪个阶段。

- `target` Object 只读  
   对事件原始目标的引用，这里的原始目标指最初派发（dispatch）事件时指定的目标。

- `type` String 只读  
   事件的类型，不区分大小写。

- `isTrusted` Boolean 只读  
   表示事件是由用户发起的（如点击），还是由脚本发出的（如自定义事件）。

### 方法

- `preventDefault`  
   取消事件（如果该事件可取消）。

- `stopPropagation`
  停止冒泡，阻止事件在 DOM 中继续冒泡。

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)

---

## MessageEvent

### 接口说明

`MessageEvent` 代表被目标对象接收的消息。

继承关系：`MessageEvent` → `Event`

### 构造函数

#### MessageEvent()

创建并返回一个 MessageEvent 对象。

```js
const myMsgEvent = new MessageEvent(type, eventInit);
```

#### 入参

- `type` String  
   表示所创建事件的名称。

- `eventInit` Object 可选  
   可选参数对象。可用的选项如下：
  - data Any：希望包含在 MessageEvent 中的数据。这可以是任何数据类型，如果没有指定，则默认为 null。
  - origin String：表示消息发送源。如果没有指定，则默认为空字符串 ""。
  - lastEventId String：表示事件的唯一 ID。如果没有指定，则默认为空字符串 ""。
  - source MessagePort：表示消息发送对象。如果没有设置，则默认为 null。
  - ports MessagePort[]：MessagePort 对象数组，表示正在通过的消息通道关联的端口(在适当的情况下，例如在通道消息传递或向共享工作者发送消息时)。如果没有指定，则默认为空数组 []。

### 属性

- `data` String Bolb ArrayBuffer 只读  
   来自发送者的数据。

- `origin` String  
   表示消息发送源。

- `lastEventId` String 只读  
   表示事件的唯一 ID。

- `source` MessagePort  
   表示消息发送对象。

- `ports` MessagePort[]  
   MessagePort 对象数组，表示正在通过的消息通道关联的端口(在适当的情况下，例如在通道消息传递或向共享工作者发送消息时)。

### 方法

无

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/messageEvent)

---

## EventTarget

### 接口说明

`EventTarget` 接口提供了接收事件、创建侦听器的能力。

### 构造函数

#### EventTarget()

创建一个新的 `EventTarget` 对象实例。可以用来实现消息发布订阅功能。

```javascript
const myEventTarget = new EventTarget();
```

### 属性

无

### 方法

- `addEventListener`  
  将指定的监听器注册到 `EventTarget` 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

- `removeEventListener`  
  删除使用 `addEventListener()` 方法添加的事件。使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。

- `dispatchEvent`  
  向一个指定的事件目标派发一个事件 `event`, 并以合适的顺序同步调用目标元素相关的事件处理函数。

### 参考

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/eventTarget)
