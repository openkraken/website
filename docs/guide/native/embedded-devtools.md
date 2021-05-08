# 集成开发者工具

Kraken 支持使用 Chrome DevTools 进行调试，通过安装 `kraken_devtools` 来开启。

## 安装

> 开发者工具集成目前仅支持使用 flutter 集成的方式进行接入，SDK 集成接入的方式还在开发中。

在 `pubspec.yaml` 文件中添加 `kraken_devtools` 的依赖。

```
Kraken kraken = Kraken(
  bundlePath: 'https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/fed.js',
  devToolsService: ChromeDevToolsService(),
);
```

## 如何使用

DevTools 会启动一个服务，可以使用 Chrome DevTools 连接来启动调试。
当服务成功启动，会在控制台输出以下日志：

```
flutter: Kraken DevTool listening at ws://172.20.10.2:9222
flutter: Open Chrome/Edge and paste following url to your navigator:
flutter:     devtools://devtools/bundled/inspector.html?ws=172.20.10.2:9222
```

将 `devtools://` 开头的地址粘贴到 Chrome 浏览器来进行调试。
