# Quick start

## What is Kraken

Kraken is a high-performance rendering engine based on W3C standards. Kraken's bottom layer is rendered based on Flutter, and its self-drawn rendering feature ensures multi-end consistency. The upper layer is implemented based on W3C standards and has a very large front-end developer ecosystem.

## Quick experience Kraken

#### macOS users

Kraken CLI is a desktop Kraken application for front-end developers, providing debugging and preview capabilities.

Use the following command to install Kraken CLI:

```shell
$ npm install -g @openkraken/cli
```

After the installation is complete, you will get a global command line for `kraken`, you can use `kraken --help` to view the usage and parameters.

You can start a debugging application with the following command:

```shell
# kraken [localfile|URL]
$ kraken https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js
```

If you want to debug, you can open a new Tab page in Chrome and paste it to access Chrome DevTools to debug Kraken applications.

#### Windows users

Kraken currently does not provide a CLI program that can run on the Windows platform. Please use your Android phone to download [Kraken Gallery](https://github.com/openkraken/gallery) to experience the performance of Kraken on the mobile terminal.

#### Kraken Playground

Use your Android phone to scan the QR code below to download Kraken Playground to experience the examples in each document.

<img src="https://gw.alicdn.com/imgextra/i4/O1CN01KBxF3l221zJJ9NLKe_!!6000000007061-2-tps-400-400.png" width="200px"></img>

## Create a Kraken application

Kraken does not limit the framework used by upper-level developers. Whether you are a Vue developer, Rax developer or React developer, you can use the framework you are most familiar with to develop a Kraken application.

![](https://img.alicdn.com/imgextra/i1/O1CN017l9JYV1HHIam1kLgC_!!6000000000732-2-tps-1097-263.png)

### If you are a Rax developer

You can use the Rax bundle we built to run a Kraken application to experience the performance of the Rax application under Kraken.

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-rax.js
```

Of course, if you want to learn more about how to use Rax to develop a Kraken application, you can quickly create a Rax for Kraken application based on the `npm init rax` command. For more detailed steps, please visit [Develop Kraken Application with Rax](/guide/development/rax).

### If you are a Vue developer

You can use the Vue bundle we built to run a Kraken application to experience the performance of the Vue application under Kraken.

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-vue.js
```

Of course, if you want to learn more about how to use Vue to develop a Kraken application, or how to transform an old project of Vue so that it can run on Kraken, you can visit [Develop Kraken Application with Vue](/guide/development/ vue).

### If you are a React developer

You can use the React bundle we built to run a Kraken application to experience the performance of the React application under Kraken.

```shell
kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/demo-react.js
```

Of course, if you want to learn more about how to use React to develop a Kraken application, or how to transform an old React project so that it can run on Kraken, you can visit [Develop Kraken Application with React](/guide/development/ react).
