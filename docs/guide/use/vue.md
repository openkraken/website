# 用 Vue 开发一个 Kraken 应用

## 示例应用

我们提供了一个 [示例应用](https://github.com/openkraken/samples) 来展示一个 Vue 应用如何在 Kraken 上运行起来。

首先，将代码 clone 下来，并进入 `./demos/hello-vue` 目录。

```shell
$ git clone https://github.com/openkraken/samples.git
$ cd ./demos/hello-vue
```

安装依赖并打包。

```shell
$ npm i
$ npm run build
```

通过 [Kraken Cli](https://www.npmjs.com/package/@openkraken/cli) 将打包好的 bundle 运行起来。

```shell
$ kraken ./dist/js/app.js
```

<img src="https://gw.alicdn.com/imgextra/i3/O1CN01LiZmbF1acLUTDzWzF_!!6000000003350-2-tps-944-1560.png" width="300px"></img>

## 初始化一个 Vue 项目

Vue 提供了一个官方的 [Vue CLI](https://github.com/vuejs/vue-cli)，我们可以直接用 [Vue CLI](https://github.com/vuejs/vue-cli) 来初始化一个 Vue 项目，然后对项目做一些工程上的改造即可使 Vue 项目在 Kraken 上顺利运行起来。

由于 Kraken 没有 HTML，所以我们的 root 节点必须是 `document.body`。因此，开发者需要在入口文件中，将 mount 的入参改为 `document.body`。

```js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount(document.body);
```

由于 [createEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createEvent) 已废弃，但目前 Vue 在 web 的 platform 中还是用到了该方法，所以需要通过 polyfill 来支持一下该特性。

```js
// src/polyfill.js
if (!document.createEvent) {
  document.createEvent = () => {
    return new Event('');
  };
}
```

配置 vue.config.js，将 polyfill.js 打入包中，同时，由于没有 Script 标签的支持，所以需要将 bundle 打在一个包中。

```js
module.exports = {
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    config.entry('app').prepend('./src/polyfill.js');
  },
};
```

此外，需要注意的是，目前 Kraken 只支持内联样式，所以我们建议使用下列方法来写 `CSS 样式`。

```html
<template>
  <div :style="style.home">
    demo
  </div>
</template>

<script>
  const style = {
    home: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      margin: '27vw 0vw 0vw',
      padding: '0vw',
      minWidth: '0vw',
      alignItems: 'center',
    },
  };

  export default {
    name: 'App',
    data() {
      return {
        style,
      };
    },
  };
</script>
```
