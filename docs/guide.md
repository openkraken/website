# 介绍

## Kraken 是什么

xxx

## 快速体验 Kraken

Kraken Cli 是面向前端开发者的桌面端 Kraken 应用，提供调试和预览能力。

使用以下命令安装 Kraken Cli：

```shell
$ npm install -g @openkraken/cli
```

安装完成之后你将得到一个 `kraken` 的全局命令行，你可以使用 `kraken --help` 查看使用方式和参数。

你可以直接使用下面的命令启动一个调试应用：

```shell
# kraken [localfile|URL]
$ kraken https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js
```

如果你想要调试，直接在 Chrome 中打开一个新的 Tab 页，然后直接粘贴即可访问 Chrome DevTools 来调试 Kraken 应用。

## 创建一个 Kraken 应用

Kraken 不限制上层开发者使用的框架是什么，无论你是 React 开发者、Rax 开发者还是 Vue 开发者，都可以快速使用你最熟悉的框架来开发一个 Kraken 应用。

![](https://img.alicdn.com/imgextra/i1/O1CN018a3mFu28GXZC6hTVQ_!!6000000007905-2-tps-1080-418.png)

### 如果你是 Rax 开发者

那么可以基于 `npm init rax` 命令来快速创建一个 Rax for Kraken 的应用。更详细的步骤请访问[用 Rax 开发一个 Kraken 应用](/guide/use/rax)。

### 如果你是 Vue 开发者

你可以直接用我们构建出来的 Vue bundle 来运行一个 Kraken 应用，以此体验一下 Vue 应用在 Kraken 下的表现。

```shell
kraken https://raw.githubusercontent.com/openkraken/vue_examples/main/dist/js/app.js
```

当然，如果你期望了解更多如何使用 Vue 来开发一个 Kraken 应用，或者如何对 Vue 的老项目进行改造，使他能够在 Kraken 上面运行，可以访问[用 Vue 开发一个 Kraken 应用](/guide/use/vue)。
