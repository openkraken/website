# 状态管理

一个复杂的可交互动态应用往往需要状态管理，以管理数据以及 UI 状态。

## 如果你是 Rax/React 用户

在 Rax/React 中，我们可以按如下方式使用 [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html)来管理我们应用内的状态。

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
