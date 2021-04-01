# 状态管理

一个复杂的可交互动态应用往往需要状态管理，以管理数据以及 UI 状态。

## 如果你是 Rax / React 用户

在 Rax / React 应用中，我们可以按如下方式使用 [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html)来管理我们应用内的状态。

**示例：**

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

当然，这样的方式会导致状态分散到各个组件中，不同组件之间需要通过通信的方式来保证数据的传递以及同步。当所开发的应用变大后，复杂度也会明显提高，并不利于开发者在大型应用中做状态管理。对于大型应用，我们推荐使用类 Flux 的状态管理方案，比如在 [Redux](https://redux.js.org/) 等。

## 如果你是 Vue 用户

在 Vue 应用中，开发者同样可以在 data 中管理组件/应用的状态。

**示例：**

```html
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        counter: 0,
      };
    },
  };
</script>
```

同样的，对于复杂的大型应用，我们更推荐使用 Vue 官方提供的 [Vuex](https://vuex.vuejs.org/)来管理应用的状态。
