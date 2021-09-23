# Development and debugging

## Prepare the code editor

Kraken's development environment is a Flutter application development environment. If you are familiar with Flutter application development, it will not be difficult to quickly get started with Kraken's source code development environment.

Kraken's source code supports development through the following two editors:

- Android Studio and IntelliJ
- Visual Studio Code

After installing the editor, you also need to install additional Flutter plugins. For specific operations, please refer to [Flutter official documentation](https://flutter.dev/docs/get-started/editor?tab=androidstudio).

## Build Bridge

Before running Kraken, you also need to build the JS Bridge code locally. The bridge code is in the `bridge` directory and is implemented by C++. Before compiling, make sure to follow the instructions in [Prepare Development Environment](/en-US/guide/contribute/environment) to build the dependencies required for the build.

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

**Use Clion**

The most convenient and quick way to debug Bridge code is to use Clion, which can quickly modify and debug C/C++ code.

1. Use Clion to open the `kraken/bridge` directory.
2. Open Preference -> Build, Execution, Depolyment -> CMake, and configure it as shown in the figure below.

![image](https://kraken.oss-cn-hangzhou.aliyuncs.com/videos/117528306-1eeae380-b004-11eb-8ab8-5781912e815c.png)

At this time, Bridge can be compiled, and the built product is in `kraken/bridge/cmake-build-debug/libkraken_jsc.dylib`

3. Add flutter build command in Clion

Open Run -> Edit Configurations, click the `+` in the upper left corner to create a `Shell Script` configuration

![image](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210722151305.jpg)

4. Add npm scripts build command in Clion

Continue to follow the above method to add a NPM build command

![image](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210722151516.jpg)

5. Connect startup scripts and bind startup applications

Select kraken in CMake Application, then select Executable as `kraken/kraken/example/build/macos/Build/Products/Debug/kraken_example.app`

And delete the build provided by default in Before Launch, add the flutter build command and npm scripts build command created above, pay attention to the npm build command to be at the top.

![image](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210722151903.jpg)

6. Click the debug button in the upper right corner to set breakpoints in any C/C++ code and debug.

![image](https://kraken.oss-cn-hangzhou.aliyuncs.com/videos/117529034-d9301a00-b007-11eb-9300-d46d1c25005f.png)
