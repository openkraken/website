# 准备开发环境

构建 Kraken 需要安装特定的工具，每个平台的安装方式都不太一样。

## macOS 环境准备

1. 访问 [nodejs.org](https://nodejs.org/en/) 下载并安装最新的 Node.js

2. 安装 Flutter

   ```bash
   git clone https://github.com/flutter/flutter
   ```

3. 切换到 [Kraken 指定的 Flutter 版本](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8)

   ```bash
   git checkout <flutter_version>
   ```

4. 按照 [Flutter 官方文档](https://flutter.dev/docs/get-started/install/windows#update-your-path) 的步骤安装 Flutter 的相关依赖, 确保执行 `flutter doctor` 不再有任何警告。

5. 安装 CMake

   ```bash
   brew install cmake
   ```

6. 安装 Xcode 11.2 以上版本

## Windows 环境准备

> 注：Windows 平台下只提供 Android 平台的构建，iOS & macOS 平台请使用 macOS 系统。
> 仅支持 Windows 10 系统。

1. 访问 [nodejs.org](https://nodejs.org/en/) 下载并安装最新的 Node.js

2. 下载 [Git for Windows](https://git-scm.com/download/win)

3. 安装 [Android Studio](https://developer.android.com/studio)

4. 下载 [ninja](https://github.com/ninja-build/ninja/releases)，然后将安装后的 ninja.exe 文件复制到 `C:\Windows` 目录下，这样就可以直接在 Terminal 中输入 `ninja` 命令来调用。

5. 安装 [CMake for Windows](https://cmake.org/download/)

6. 安装 NDK

   打开 Android Studio，打开 Files > Settings > Appearance & Behavior > System Settings > Android SDK。选中 NDK，然后安装 20.1.5948944 版本。

   ![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/%7BDEC91E5D-E622-4E1F-B8D3-AD39A3C7D1A0%7D.png.jpg)

7. 安装 Flutter

   ```bash
   git clone https://github.com/flutter/flutter
   ```

8. 切换到 [Kraken 指定的 Flutter 版本](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8)

   ```bash
   git checkout <flutter_version>
   ```

9. 按照 [Flutter 官方文档](https://flutter.dev/docs/get-started/install/windows#update-your-path) 的步骤安装 Flutter 的相关依赖, 确保执行 `flutter doctor` 不再有任何警告。
