# 用 react 开发一个 Kraken 应用

## 示例应用

我们提供了一个[示例应用](https://github.com/openkraken/gallery/tree/main/demos/hello-react)来展示一个 React 应用如何在 Kraken 上运行起来。

首先，将代码 clone 下来，并进入 ./demos/hello-react 目录。

```shell
git clone https://github.com/openkraken/samples.git
cd ./demos/hello-react
```

安装依赖并打包。

```shell
npm i
npm run build
```

通过 [Kraken Cli](https://www.npmjs.com/package/@openkraken/cli) 将打包好的 bundle 运行起来。

```shell
kraken ./build/static/js/bundle.js
```

<img src="https://img.alicdn.com/imgextra/i3/O1CN014QtfFz1Kcm0cIu7sQ_!!6000000001185-2-tps-375-834.png" class="preview-image"  width="300px"></img>

## 初始化一个 React 项目

React 提供了一个官方的 [Create React App](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app)脚手架工具来初始化一个 React 项目。然后开发者只需要对项目做一些工程上的改造即可使 React 项目在 Kraken 上顺利运行起来。

由于 Kraken 没有 HTML，所以我们的 root 节点必须是 `document.body`。因此，开发者需要在入口文件中，将 `ReactDOM.render` 的入参改为 `document.body`。

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body,
);
```

由于 Kraken 没有 Script 标签的支持，你需要配置 webpack ，使 bundle 打在一个包中。

此外，需要注意的是，目前 Kraken 只支持内联样式，所以我们建议使用下列方法来写 `CSS 样式`。

```js
const styles = {
  App: {
    textAlign: 'center',
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: 'white',
  },
};

function App() {
  return (
    <div style={styles.App}>
      <div style={styles.AppHeader}>Demo</div>
    </div>
  );
}

export default App;
```

## 状态管理

一个复杂的可交互动态应用往往需要状态管理，以管理数据以及 UI 状态。

在 React 应用中，我们可以按如下方式使用 [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html)来管理我们应用内的状态。

**示例：**

```js
import { useState } from 'rax';

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

当然，这样的方式会导致状态分散到各个组件中，不同组件之间需要通过通信的方式来保证数据的传递以及同步。当所开发的应用变大后，复杂度也会明显提高，并不利于开发者在大型应用中做状态管理。对于大型应用，我们更推荐使用类 FLux 的状态管理库比如 [Redux]](https://redux.js.org/) 。
