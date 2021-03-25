# 如何测算 Kraken 的运行性能

在使用 Kraken 的过程中，难免会遇到一些性能瓶颈。

通常情况下 Kraken 都可以快速地完成页面的渲染，但是在一些特殊的场景下，Kraken 的性能会受到一些影响，从而使整体的性能体验看上去并没有那么好。

在 Profile 运行模式下，Kraken 会收集运行的各个阶段的耗时。你可以通过一个简单的 JS API 获取 Kraken 各个模块的运行性能报告，从而定位性能问题。

## 开启 Profile 模式

在默认情况下，Kraken 在运行过程中是不会记录各个阶段的耗时。

在构建 bridge 时，添加 `ENABLE_PROFILE=true` 环境变量就可以开启 Profile 记录。

```shell script
ENABLE_PROFILE=true npm run build:bridge:all:release
```

在启动的时候，添加 `--profile` 参数让 Flutter 工作在 Profile 模式下就可以进行性能数据的统计。

```shell script
flutter run --profile
```

## 获取性能报告

在开启 Profile 模式的前提下，通过调用 `performance.__kraken_navigation_summary__()` 就可以获得性能报告数据。

```javascript
setTimeout(() => {
  console.log(performance.__kraken_navigation_summary__());
}, 2000); // 2s 后获取报告
```
