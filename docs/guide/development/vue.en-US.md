# Develop Kraken application with Vue

## Sample application

We provide a [sample application](https://github.com/openkraken/samples) to show how a Vue application can run on Kraken.

First, clone the code and enter the `./demos/hello-vue` directory.

```shell
git clone https://github.com/openkraken/samples.git
cd ./demos/hello-vue
```

Install dependencies and package.

```shell
npm i
npm run build
```

Run the packaged bundle through [Kraken Cli](https://www.npmjs.com/package/@openkraken/cli).

```shell
kraken ./dist/js/app.js
```

<img class="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01o7N4Y21sm71NGx468_!!6000000005808-2-tps-360-662.png" width="300px"></img >

## Initialize a Vue project

Vue provides an official [Vue CLI](https://github.com/vuejs/vue-cli), we can directly use [Vue CLI](https://github.com/vuejs/vue-cli) Let's initialize a Vue project, and then do some engineering transformations on the project to make the Vue project run smoothly on Kraken.

Since Kraken does not have HTML, our root node must be `document.body`. Therefore, developers need to change the input parameter of mount to `document.body` in the entry file.

```js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount(document.body);
```

Configure vue.config.js. Since there is no support for Script tags, you need to put the bundle in a package.

```js
module.exports = {
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },
};
```

In addition, it should be noted that currently Kraken only supports inline styles, so we recommend using the following methods to write `CSS styles`.

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

## State Management

A complex interactive dynamic application often requires state management to manage data and UI state.

In Vue applications, developers can also manage the state of components/applications in data.

**Example:**

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

Of course, this method will cause the state to be dispersed among various components, and different components need to communicate to ensure data transmission and synchronization. When the developed application becomes larger, the complexity will also increase significantly, which is not conducive for developers to do state management in large-scale applications. For complex large-scale applications, we recommend using [Vuex](https://vuex.vuejs.org/) officially provided by Vue to manage the status of the application.
