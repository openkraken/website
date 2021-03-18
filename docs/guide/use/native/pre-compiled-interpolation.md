# 使用预构建的 Android AAR/iOS Framework 进行集成

除了通过 Flutter Widget 的方式来使用 Kraken，Kraken 还提供了 Java Public API 和 Objective-C Public API 来使用 Kraken。

在使用之前，需要客户端集成 Kraken 预构建的 Android AAR 或 iOS Framework。

Kraken 目前并不会提供预构建的文件，因此需要按照下面的指南进行本地编译构建。

已经完成构建？直接查看集成方式：[如何集成预构建的产物到 App 内](/guide/use/native/interpolation-app)

### 构建 Kraken Android AAR/iOS Framework

0. 前置依赖

   - [Node.js](https://nodejs.org/) v12.0 or later
   - [Flutter](https://flutter.dev/docs/get-started/install) version in the `kraken/pubspec.yaml`
   - [CMake](https://cmake.org/) v3.2.0 or later
   - [Xcode](https://developer.apple.com/xcode/) (10.12) or later (Building target macOS or iOS)
   - [Android NDK](https://developer.android.com/studio/projects/install-ndk) version `20.0.5594570` or later (Building target Android)

1. 构建 Kraken Bridge

   一键构建全部已支持的平台 (macOS, iOS, Android)：

   ```shell
   $ npm run build:bridge:all
   ```

   按照平台进行构建：

   **macOS**

   ```shell
   $ npm run build:bridge:macos
   ```

   **iOS**

   ```shell
   $ npm run build:bridge:ios
   ```

   **Android**

   ```shell
   $ npm run build:bridge:android
   ```

1. 构建 Android AAR

   ```bash
   cd sdk && flutter build aar
   ```

1. 构建 iOS Framework

   ```bash
   cd sdk && flutter build ios-framework
   ```

构建产物存放在 `sdk/build` 目录下。
