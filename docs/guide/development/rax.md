# 用 Rax 开发 Kraken 应用

## 初始化项目

基于 `npm init rax` 命令，可以快速创建一个 Rax 多端应用（注意：npm 版本需 >= 6.1.0）：

```shell
npm init rax <YourProjectName>
```

初始化项目过程中， 请依次选择 `App`、 `Kraken 跨端应用`，然后根据你的喜好选择 `JavaScript` 或者 `TypeScript`。

按流程创建出前端工程目录后启动 dev server：

```shell
cd <YourProjectName>
npm install
npm start
```

将得到以下输出

```shell
> @rax-materials/scaffolds-app-js@0.1.0 start
> rax-app start

[Web] Development server at:
http://localhost:3333/home.html
http://[your.ip]:3333/home.html

[Kraken] Development server at:
http://[your.ip]:3333/kraken/home.js

[Kraken] Run Kraken Playground App:
kraken http://[your.ip]:3333/kraken/home.js

```

## 运行

执行上述命令，就可以用 Kraken 打开该 Rax 应用。

```shell
kraken http://[your.ip]:3333/kraken/home.js
```

<img class="preview-image" src="//img.alicdn.com/imgextra/i3/O1CN01dfJxos1lnl8Pzjvwa_!!6000000004864-2-tps-720-1324.png" width="300px"></img>

## 状态管理

一个复杂的可交互动态应用往往需要状态管理，以管理数据以及 UI 状态。

在 Rax 应用中，我们可以按如下方式使用 [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html)来管理我们应用内的状态。

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

当然，这样的方式会导致状态分散到各个组件中，不同组件之间需要通过通信的方式来保证数据的传递以及同步。当所开发的应用变大后，复杂度也会明显提高，并不利于开发者在大型应用中做状态管理。对于大型应用，我们推荐 Rax 官方提供的状态管理库 [icestore](https://github.com/ice-lab/icestore) 。
