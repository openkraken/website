# 常见问题

## 引用本地图片路径找不到

本地图片加载需要依赖 Flutter 的 assets 机制，参考 [Flutter 文档](https://flutter.dev/docs/development/ui/assets-and-images)，需要将图片文件声明到 pubspec.yaml 中, 以在打包时获得正确的索引关系。

参考： [https://github.com/openkraken/kraken/issues/239](https://github.com/openkraken/kraken/issues/239)

## Android 端使用 kraken SDK release 包问题

SDK API 存在一些问题，可以使用 Widget API，与 Flutter 应用一块构建进行测试。

参考：[https://github.com/openkraken/kraken/issues/235](https://github.com/openkraken/kraken/issues/235)

## macOS 安装 Kraken CLI 失败

请用以下方式安装

```bash
sudo npm install -g @openkraken/cli --unsafe-perm
```

或者参考[文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally/)将 node 安装在用户目录。

参考：[https://github.com/openkraken/kraken/issues/190](https://github.com/openkraken/kraken/issues/190)

## Windows 平台 Kraken CLI

Windows 平台 Kraken CLI 正在开发中。

## 集成 Kraken 包体积增量

参考： [https://github.com/openkraken/kraken/issues/688](https://github.com/openkraken/kraken/issues/688)
