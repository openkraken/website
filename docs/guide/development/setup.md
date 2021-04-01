# 准备环境

如果你只熟悉前端开发，最简单的方式是安装 [kraken-cli](https://www.npmjs.com/package/@openkraken/cli) 进行 Kraken 页面的开发与调试。
你只需要在电脑上安装 Node.js 就可以立刻开始写代码。

如果你熟悉客户端开发，并希望将 Kraken 整合到你的 App 中。请确保电脑上安装有可以编译 Flutter 应用的开发环境。

详细内容可以参考：

- [在 Flutter 应用中集成 Kraken](/guide/native/interpolation-flutter)
- [在原生 App 中集成 Kraken](/guide/native/interpolation-app)

## 快速运行一个 Kraken 应用

使用以下命令安装 Kraken CLI：

```shell
$ npm install -g @openkraken/cli
```

**运行一个 Kraken 页面**

```
# kraken [localfile|URL]
$ kraken https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js
```

## 下一步？

Kraken 支持流行的前端开发框架，如 React，Vue，Rax。你可以选择你喜欢的前端框架，然后通过它们编写你的应用，运行在 Kraken 中。

- [用 Rax 开发一个 Kraken 应用](/guide/development/rax)
- [用 Vue 开发一个 Kraken 应用](/guide/development/vue)
