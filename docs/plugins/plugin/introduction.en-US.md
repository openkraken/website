# What is the Kraken plugin

The Kraken plugin is a Flutter plugin that can be used to extend Kraken's capabilities. It can be published to [pub.dev](https://pub.dev/) and can be installed via pub.

Kraken's rendering capabilities can be customized through the Kraken plug-in, including custom tags, adding custom APIs in the global JS environment, and rendering custom content through PlatformView.

The development of Kraken plug-in requires certain client development capabilities. Developers need to have a certain foundation for Android / iOS development, and also need to master the relevant skills of Flutter application development.

For details, please refer to [Development Plugin](/plugins/plugin/development).

## Kraken plug-in capabilities

Kraken provides two extensions to plug-ins in its design:

1. Rendering capability expansion
2. API capability expansion

The extension of rendering capabilities means that developers can customize a new `Element` type in the plug-in, and implement custom rendering capabilities through a custom `RenderObject`.

For example, if you want to implement a player plug-in, you need to extend a `Element` with `tagName` as `video` to Kraken, and connect to the implementation of native client through `RenderTexture`. For related source code, please refer to: [kraken_video_player](https://github.com/openkraken/plugins/tree/main/packages/kraken_video_player)

API capability expansion means that developers can add some new APIs to Kraken's JavaScript environment in the plug-in, and then implement these APIs on the Native side. For related source code, please refer to: [kraken_websocket](https://github.com/openkraken/plugins/tree/main/packages/kraken_websocket)

## Publish plugin

After the developer completes the plug-in development, he needs to use the [kraken-npbt](https://github.com/openkraken/native-plugin-build-tool) tool to build the JavaScript/C++ source code, and then publish it to the pub. It can be directly installed and used on dev just like other flutter plugins.
