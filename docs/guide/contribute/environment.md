# 准备开发环境

构建 Kraken 需要安装特定的工具，每个平台的安装方式都不太一样。

## macOS 环境准备

1. 访问 [nodejs.org](https://nodejs.org/en/) 下载并安装最新的 Node.js

2. 安装 Flutter

   ```bash
   git clone https://github.com/flutter/flutter
   ```

3. 切换到 1.22.6 版本

   ```bash
   git checkout 1.22.6
   ```

4. 按照 [Flutter 官方文档](https://flutter.dev/docs/get-started/install/windows#update-your-path) 的步骤安装 Flutter 的相关依赖, 确保执行 `flutter doctor` 不再有任何警告。

5. 安装 CMake

   ```bash
   brew install cmake
   ```

6. 安装 Xcode 11.2 以上版本

## window 环境准备
