# 什么是 Kraken 插件

Kraken 插件是一个可以用于扩展 Kraken 能力的 Flutter 插件，可以被发布到 [pub.dev](https://pub.dev/) 上，可以通过 pub 安装。

通过 Kraken 插件可以自定义 Kraken 的渲染能力，包括自定义标签、在全局 JS 环境中添加自定义 API 以及通过 PlatformView 渲染自定义内容等。

Kraken 插件的开发需要具备一定的客户端开发能力。开发者需要对 Android / iOS 开发具备一定的基础，同时也需要掌握 Flutter 应用开发的相关技能。

详细请查看[插件开发快速入门](/guide/plugin/development)。

## Kraken 插件的能力范围

Kraken 在设计上给插件提供了两种能力的扩展：

1. 渲染能力扩展
2. API 能力扩展

渲染能力扩展是指开发者可以在插件中自定义一个新的 `Element` 类型，并且通过自定义的 `RenderObject` 来实现自定义的渲染能力。

例如：想要实现一个播放器插件，就需要给 Kraken 扩展一个 `tagName` 为 `video` 的 `Element`，并且通过 `RenderTexture` 来对接到原生客户端的实现。相关的源码请参考：[kraken_video_player](https://github.com/openkraken/plugins/tree/main/packages/kraken_video_player)

API 能力扩展是指开发者可以在插件中给 Kraken 的 JavaScript 环境新增一些新的 API，然后在 Native 侧实现这些 API。相关的源码请参考：[kraken_websocket](https://github.com/openkraken/plugins/tree/main/packages/kraken_websocket)

## 发布插件

开发者在完成插件开发之后，需要通过 [kraken-npbt](https://github.com/openkraken/native-plugin-build-tool) 工具对 JavaScript / C++ 的源码进行构建，然后再发布到 pub.dev 上就可以像其他 flutter plugin 一样直接安装使用。
