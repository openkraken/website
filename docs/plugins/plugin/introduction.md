# 什么是 Kraken 插件

Kraken 插件是一个可以用于扩展 Kraken 能力的 Flutter 插件，可以被发布到 [pub.dev](https://pub.dev/) 上，可以通过 pub 安装。

通过 Kraken 插件可以自定义 Kraken 的渲染能力，包括自定义标签、在全局 JS 环境中添加自定义 API。

详细请查看[开发插件](/plugins/plugin/development)。

## Kraken 插件的能力范围

Kraken 支持通过下面的方式进行扩展：

1. 使用 JavaScript 新增新的 API，然后通过 Dart 进行实现。
2. 使用 Flutter Widget 新增新的 HTML 标签，获得更丰富的渲染能力。

具体细节可以参考以下插件：

- [kraken_websocket](https://github.com/openkraken/plugins/tree/main/packages/kraken_websocket)

## 发布插件

将插件发布到 pub.dev 上就可以像其他 flutter plugin 一样直接安装使用。
