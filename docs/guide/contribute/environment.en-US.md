# Prepare development environment

Building Kraken requires the installation of specific tools, and the installation method for each platform is different.

## macOS environment preparation

1. Visit [nodejs.org](https://nodejs.org/en/) to download and install the latest Node.js

2. Install Flutter

   ```bash
   git clone https://github.com/flutter/flutter
   ```

3. Switch to [Flutter version specified by Kraken](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8)

   ```bash
   git checkout <flutter_version>
   ```

4. Follow the steps in [Flutter official documentation](https://flutter.dev/docs/get-started/install/macos#update-your-path) to install Flutter's related dependencies, and make sure to execute `flutter doctor` no more Any warnings.

5. Install CMake

   ```bash
   brew install cmake
   ```

6. Install Xcode 11.2 and above

## Windows environment preparation

> Note: Only the Android platform is available for building under the Windows platform. For iOS & macOS platforms, please use the macOS system.
> Only supports Windows 10 system.

1. Visit [nodejs.org](https://nodejs.org/en/) to download and install the latest Node.js

2. Download [Git for Windows](https://git-scm.com/download/win)

3. Install [Android Studio](https://developer.android.com/studio)

4. Download [ninja](https://github.com/ninja-build/ninja/releases), then copy the installed ninja.exe file to the `C:\Windows` directory, so that you can directly in the Terminal Enter the `ninja` command to invoke it.

5. Install [CMake for Windows](https://cmake.org/download/)

6. Install NDK

   Open Android Studio, open Files> Settings> Appearance & Behavior> System Settings> Android SDK. Select NDK, and then install version 20.1.5948944.

   ![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/%7BDEC91E5D-E622-4E1F-B8D3-AD39A3C7D1A0%7D.png.jpg)

7. Install Flutter

   ```bash
   git clone https://github.com/flutter/flutter
   ```

8. Switch to [Flutter version specified by Kraken](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8)

   ```bash
   git checkout <flutter_version>
   ```

9. Follow the steps in [Flutter official documentation](https://flutter.dev/docs/get-started/install/windows#update-your-path) to install Flutter's related dependencies, and make sure that the execution of `flutter doctor` no longer exists Any warnings.
