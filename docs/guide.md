# 快速起步

## Kraken 是什么

Kraken 是一款基于 W3C 标准的高性能渲染引擎。Kraken 底层基于 Flutter 进行渲染，通过其自绘渲染的特性，保证多端一致性。上层基于 W3C 标准实现，拥有非常庞大的前端开发者生态。

## 快速体验 Kraken

#### macOS 用户

Kraken CLI 是面向前端开发者的桌面端 Kraken 应用，提供调试和预览能力。

使用以下命令安装 Kraken CLI：

```shell
$ npm install -g @openkraken/cli
```

安装完成之后你将得到一个 `kraken` 的全局命令行，你可以使用 `kraken --help` 查看使用方式和参数。

你可以使用下面的命令启动一个调试应用：

```shell
# kraken [localfile|URL]
$ kraken https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js
```

如果你想要调试，可以在 Chrome 中打开一个新的 Tab 页，然后粘贴即可访问 Chrome DevTools 来调试 Kraken 应用。

#### Windows 用户

Kraken 目前暂时没有提供可运行在 Windows 平台的 CLI 程序，请使用安卓手机下载 [Kraken Gallery](https://github.com/openkraken/gallery) 以体验 Kraken 在移动端的表现。

#### Kraken Playground

使用一个 Android 手机扫描下面的二维码下载 Kraken Playground，以体验各个文档中的示例。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01FGQcF91hKD7T5drVR_!!6000000004258-2-tps-400-400.png" width="200px"></img>

## 创建一个 Kraken 应用

Kraken 不限制上层开发者使用的框架，无论你是 Vue 开发者、Rax 开发者还是 React 开发者，都可以使用你最熟悉的框架来开发一个 Kraken 应用。

![](https://img.alicdn.com/imgextra/i1/O1CN017l9JYV1HHIam1kLgC_!!6000000000732-2-tps-1097-263.png)

### 如果你是 Rax 开发者

你可以使用我们构建出来的 Rax bundle 来运行一个 Kraken 应用，以此体验一下 Rax 应用在 Kraken 下的表现。

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-rax.js
```

当然，如果你期望了解更多如何使用 Rax 来开发一个 Kraken 应用，那么可以基于 `npm init rax` 命令来快速创建一个 Rax for Kraken 的应用。更详细的步骤请访问[用 Rax 开发 Kraken 应用](/guide/development/rax)。

### 如果你是 Vue 开发者

你可以使用我们构建出来的 Vue bundle 来运行一个 Kraken 应用，以此体验一下 Vue 应用在 Kraken 下的表现。

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-vue.js
```

当然，如果你期望了解更多如何使用 Vue 来开发一个 Kraken 应用，或者如何对 Vue 的老项目进行改造，使它能够在 Kraken 上运行，可以访问[用 Vue 开发 Kraken 应用](/guide/development/vue)。

### 如果你是 React 开发者

你可以使用我们构建出来的 React bundle 来运行一个 Kraken 应用，以此体验一下 React 应用在 Kraken 下的表现。

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-react.js
```

当然，如果你期望了解更多如何使用 React 来开发一个 Kraken 应用，或者如何对 React 的老项目进行改造，使它能够在 Kraken 上运行，可以访问[用 React 开发 Kraken 应用](/guide/development/react)。
