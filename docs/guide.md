# 介绍

## Kraken 是什么

xxx

## 快速体验 Kraken

```shell
$ npm install -g @openkraken/cli
```

```shell
# kraken [localfile|URL]
$ kraken https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js
```

## 创建一个 Kraken 应用

Kraken 不限制上层开发者使用的框架是什么，无论你是 React 开发者、Rax 开发者还是 Vue 开发者，都可以快速使用你最熟悉的框架来开发一个 Kraken 应用。

### 如果你是一位 Rax 开发者

你可以直接用我们构建出来的 Rax bundle 来运行一个 Kraken 应用。

```shell
kraken https://raw.githubusercontent.com/openkraken/rax_examples/main/build/kraken/index.js
```

当然，如果你期望了解更多如何使用 Rax 来开发一个 Kraken 应用，可以访问[用 Rax 开发一个 Kraken 应用](/guide/use/rax)。

### 如果你是一位 Vue 开发者

你可以直接用我们构建出来的 Vue bundle 来运行一个 Kraken 应用。

```shell
kraken https://raw.githubusercontent.com/openkraken/vue_examples/main/dist/js/app.js
```

当然，如果你期望了解更多如何使用 Vue 来开发一个 Kraken 应用，或者如何对 Vue 的老项目进行改造，使他能够在 Kraken 上面运行，可以访问[用 Vue 开发一个 Kraken 应用](/guide/use/vue)。
