# 开发与调试

## 准备好一个代码编辑器

Kraken 的开发环境是一个 Flutter 应用的开发环境，如果你熟悉 Flutter 应用开发，那么快速上手 Kraken 的源码开发环境将不是一件难事。

Kraken 的源代码支持通过以下两种编辑器进行开发，

- Android Studio and IntelliJ
- Visual Studio Code

在安装好编辑器之后，还需要额外安装 Flutter 插件。具体操作可以参考 [Flutter 官方文档说明](https://flutter.dev/docs/get-started/editor?tab=androidstudio)

## 构建 Bridge

在运行 Kraken 之前，还需要在本地构建 JS Bridge 的代码。Bridge 的代码在 `bridge` 目录，由 C++ 编写而成。在编译之前，确保按照 [准备开发环境](/guide/contribute/environment) 内的说明搭建好构建所需要的依赖。

**macOS 平台**

macOS 平台支持构建 macOS，iOS，Android 平台的 bridge，使用下面的命令可以一键构建三个平台的 JS Bridge。

```shell script
npm run build:bridge:all
```

**Windows 平台**

> 需要 Windows 10 及以上版本

Windows 平台支持构建 Android 平台的 bridge。

打开 `Git Bash`，执行下面的命令：

```shell script
npm run build:bridge:all
```

## 在本地运行 Kraken

cd 到 `kraken/example` 目录，执行 `flutter run` 即可。

## 如何调试 Kraken

### 如何调试 Dart 代码

使用 Android Studio 或者 VSCode 就可以进行 Dart 代码的调试。具体的使用方法和其他 Flutter 应用的调试没有区别，具体详情参考 [如何调试 Flutter 应用](https://flutter.dev/docs/testing/debugging)

### 如何调试 Bridge 代码

Bridge 代码的调试目前仅支持 macOS 平台，Windows 平台的调试方法待补充。

使用 XCode 打开 `kraken/example/macos/Runner.xcworkspace`

然后在 Bridge 中代码添加一行 `assert(false)`，这样做的目的是强制触发一次代码异常，这样就可以在 XCode 上设置调试断点。

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210322174105.jpg)

然后执行下面的命令重新构建 Bridge

```shell script
npm run build:bridge:macos
```

然后再回到 XCode 运行 example 应用。这时候 Kraken 会不出意外的抛出异常，而这时候 XCode 也会把 Bridge 的源代码显示出来。

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210322175048.jpg)

这时候只需要在代码行数点击以下即可创建一个断点，然后删掉 `assert(false)` 重新构建 Bridge 即可调试 C/C++ 的代码。
