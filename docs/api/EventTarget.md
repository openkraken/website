## 接口说明

`EventTarget` 接口提供了接收事件、创建侦听器的能力。

---

## 构造函数

### EventTarget()

创建一个新的 `EventTarget` 对象实例。可以用来实现消息发布订阅功能。

```javascript
const myEventTarget = new EventTarget();
```

---

## 属性

无

---

## 方法

### addEventListener

将指定的监听器注册到 `EventTarget` 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

```javascript
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
```

**返回值**
`type` String
表示监听的事件类型。

`listener` Function
被监听的事件类型触发时，执行的回调函数。

`options` Object 可选
一个指定有关 `listener` 属性的可选参数对象。可用的选项如下：

- `capture` Boolean，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
- `once` Boolean，表示 `listener` 在添加之后最多只调用一次。如果是 true， `listener` 会在其被调用之后自动移除。
- `passive` Boolean，设置为 true 时，表示 `listener` 永远不会调用`preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

`useCapture` Boolean 可选
在 DOM 树中，注册了 `listener` 的元素，是否要先于它下面的 `EventTarget`，调用该 `listener`。

### removeEventListener

删除使用 `addEventListener()` 方法添加的事件。使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。

```javascript
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

**入参**
`type` String
表示需要移除的事件类型。

`listener` Function
需要从目标事件移除的监听函数。

`options` Object 可选
一个指定有关 `listener` 属性的可选参数对象。可用的选项如下：

- `capture` Boolean，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。

`useCapture` Boolean 可选
指定需要移除的监听函数是否为捕获监听器。

### dispatchEvent

向一个指定的事件目标派发一个事件 `event`, 并以合适的顺序同步调用目标元素相关的事件处理函数。

```javascript
const cancelled = !target.dispatchEvent(event);
```

**入参**
`event` Event
要被派发的事件对象 Event。

**返回值**
`val` Boolean
当该事件是可取消的（`Event.cancelable` 为 `true`）并且有至少一个该事件的事件处理方法调用了 `Event.preventDefault()`，则返回值为 `false`，否则返回 `true`。
