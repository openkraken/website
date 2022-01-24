# 集成开发者工具

Kraken 支持使用 Chrome DevTools 进行调试，通过集成 KrakenDevTools 工具即可开启。
在 0.10 版本之后，KrakenDevTools 已经被集成到 kraken 包内。

## 安装

> 开发者工具集成目前仅支持使用 flutter 集成的方式进行接入，SDK 集成接入的方式还在开发中。

```
import 'package:kraken/devtools.dart';

Kraken(
  // ...
  devToolsService: ChromeDevToolsService(),
);
```

## 如何使用

DevTools 会启动一个服务，可以使用 Chrome DevTools 连接来启动调试。
当服务成功启动，会在控制台输出以下日志：

```
flutter: Kraken DevTool listening at ws://0.0.0.0:9222
flutter: Open Chrome/Edge and paste following url to your navigator:
flutter:     devtools://devtools/bundled/inspector.html?ws=0.0.0.0:9222
```

在 Chrome 浏览器中打开 chrome://inspect 页面进行调试。
