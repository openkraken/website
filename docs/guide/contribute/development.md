# 开发与调试

## 准备代码编辑器

Kraken 的开发环境是一个 Flutter 应用的开发环境，如果你熟悉 Flutter 应用开发，那么快速上手 Kraken 的源码开发环境将不是一件难事。

Kraken 的源代码支持通过以下两种编辑器进行开发：

- Android Studio and IntelliJ
- Visual Studio Code

在安装好编辑器之后，还需要额外安装 Flutter 插件。具体操作可以参考 [Flutter 官方文档说明](https://flutter.dev/docs/get-started/editor?tab=androidstudio)。

## 构建 Bridge

在运行 Kraken 之前，还需要在本地构建 JS Bridge 的代码。Bridge 的代码在 `bridge` 目录，由 C++ 实现。在编译之前，确保按照 [准备开发环境](/guide/contribute/environment) 内的说明搭建好构建所需要的依赖。

**macOS 平台**

macOS 平台支持构建 macOS / iOS / Android 平台的 `Bridge`，使用下面的命令可以一键构建三个平台的 `Bridge`。

```shell script
npm run build:bridge:all
```

**Windows 平台**

> 需要 Windows 10 及以上版本

Windows 平台支持构建 Android 平台的 `Bridge`。

打开 `Git Bash`，执行下面的命令：

```shell script
npm run build:bridge:all
```

## 在本地运行 Kraken

切换到 `kraken/example` 目录，执行 `flutter run` 即可。

## 调试 Kraken

### 调试 Dart 代码

使用 Android Studio 或者 VSCode 就可以进行 Dart 代码的调试。具体的使用方法和其他 Flutter 应用的调试没有区别，详情请参考 [调试 Flutter 应用](https://flutter.dev/docs/testing/debugging)

### 调试 Bridge 代码

Bridge 代码的调试目前仅支持 macOS 平台，Windows 平台的调试方法待补充。

**使用 Clion**

调试 Bridge 代码最方便快捷的方式是使用 Clion，可以快速修改和调试 C/C++ 代码。

1. 使用 Clion 打开 `kraken/bridge` 目录。
2. 打开 Preference -> Build，Execution，Depolyment -> CMake，按照下图的方式进行配置。

![image](https://user-images.githubusercontent.com/4409743/117528306-1eeae380-b004-11eb-8ab8-5781912e815c.png)

这个时候就可以进行 Bridge 的编译，构建的产物在 `kraken/bridge/cmake-build-debug/libkraken_jsc.dylib`

3. 在 `kraken/kraken/macos/` 目录，使用下面的命令修改软链接。

```bash
  cd /path/to/kraken/kraken/macos
  rm libkraken_jsc.dylib
  ln -s /path/to/kraken/bridge/cmake-build-debug/libkraken_jsc.dylib # 必须是绝对地址
  echo > prepare.sh
```

4. 创建 flutter 应用启动脚本

创建任意位置创建一个脚本文件，用来执行编译 flutter app 的命令。

```bash
  echo "flutter build macos --debug" > ~/build_flutter.sh
```

5. 在 Clion 建立配置关联启动脚本

打开 Run -> Edit Configurations，点击左上角的 `+`，创建一个 `Shell Script` 配置

![image](https://user-images.githubusercontent.com/4409743/117528742-59558000-b006-11eb-8870-8b9d69f3b14f.png)

6. 串联启动脚本，并绑定启动应用

将 Executable 选择为 `kraken/kraken/example/build/macos/Build/Products/Debug/kraken_example.app`

并在下面 Before launch 中添加上面创建的 `Build Flutter Example App`

https://user-images.githubusercontent.com/4409743/117528845-e0a2f380-b006-11eb-8049-130715f3ccd0.mp4

7. 点击右上角的调试按钮，就可以在任何 C/C++ 代码中设置断点并进行调试。

![image](https://user-images.githubusercontent.com/4409743/117529034-d9301a00-b007-11eb-9300-d46d1c25005f.png)
