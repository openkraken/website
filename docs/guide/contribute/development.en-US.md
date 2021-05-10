# Development and debugging

## Prepare the code editor

Kraken's development environment is a Flutter application development environment. If you are familiar with Flutter application development, it will not be difficult to quickly get started with Kraken's source code development environment.

Kraken's source code supports development through the following two editors:

-Android Studio and IntelliJ
-Visual Studio Code

After installing the editor, you also need to install additional Flutter plugins. For specific operations, please refer to [Flutter official documentation](https://flutter.dev/docs/get-started/editor?tab=androidstudio).

## Build Bridge

Before running Kraken, you also need to build the JS Bridge code locally. The bridge code is in the `bridge` directory and is implemented by C++. Before compiling, make sure to follow the instructions in [Prepare Development Environment](/guide/contribute/environment) to build the dependencies required for the build.

**macOS platform**

The macOS platform supports building `Bridge` for macOS / iOS / Android platforms. Use the following commands to build `Bridge` for three platforms with one click.

```shell script
npm run build:bridge:all
```

**Windows platform**

> Requires Windows 10 and above

The Windows platform supports building the `Bridge` of the Android platform.

Open `Git Bash` and execute the following command:

```shell script
npm run build:bridge:all
```

## Run Kraken locally

Switch to the `kraken/example` directory and execute `flutter run`.

## Debug Kraken

### Debug Dart code

Dart code can be debugged using Android Studio or VSCode. The specific usage method is no different from other Flutter application debugging. For details, please refer to [Debug Flutter Application](https://flutter.dev/docs/testing/debugging)

### Debug Bridge code

The debugging of Bridge code currently only supports the macOS platform, and the debugging method of the Windows platform needs to be added.

Use XCode to open `kraken/example/macos/Runner.xcworkspace`

Then add a line of `assert(false)` to the code in Bridge. The purpose of this is to force a code exception to be triggered, so that you can set debugging breakpoints on XCode.

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210322174105.jpg)

Then execute the following command to rebuild `Bridge`

```shell script
npm run build:bridge:macos
```

Then go back to XCode to run the example application. At this time, Kraken will not accidentally throw an exception, and at this time, XCode will also display the source code of `Bridge`.

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210322175048.jpg)

At this time, you only need to click below the number of lines of code to create a breakpoint, then delete the `assert(false)` and rebuild the `Bridge` to debug the C/C++ code.
