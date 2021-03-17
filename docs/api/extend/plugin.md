## 什么是 Kraken 插件

Kraken 插件是一个可以用于扩展 Kraken 能力的 Flutter 插件，可以被发布到 [pub.dev](https://pub.dev/) 上，可以直接通过 pub 进行安装。通过 Kraken 插件可以自定义 Kraken 的渲染能力，包括自定义标签，在全局 JS 环境中添加自定义 API，以及通过 PlatformView 渲染自定义内容等。

Kraken 插件的开发需要具备一定的客户端开发能力。开发者需要对 Android/iOS 开发具备一定的基础，同时也需要掌握 Flutter 应用开发。当然，如果你的目标是给 Kraken 添加一些自定义的 API，或者是新增一个标签的话，掌握一定的 JavaScript 能力和 C/C++ 能力也是必须的。


## 一个简单的闹钟 API

查看项目源代码：https://github.com/openkraken/kraken_plugin_examples/tree/main/my_kraken_plugin

接下来通过一个简单的例子来演示如何给 Kraken 的 JS 环境中添加一个自定义的 API。

我们的目标是通过创建一个插件，然后新增一个 `alarmClock` 的全局对象，并支持在 JS 层注册一个回调用于处理闹钟响了，然后在 Dart 层去实现定时器的功能。

### 准备工作

**初始化项目工程**

通过 `flutter create` 命令来创建一个 flutter plugin 脚手架。然后在这个 plugin 脚手架上添加我们的代码，现在我们需要添加一些配置，让构建的时候，将所有的依赖都打包进 App 中。

```shell
flutter create --template=plugin --ios-language objc --android-language java --platforms ios,android,macos ./my_kraken_plugin
```

**安装 [kraken-npbt](https://github.com/openkraken/native-plugin-build-tool)**

不管是使用 JavaScript 还是 C/C++ 编写的插件，都需要使用 `kraken-npbt` 工具进行构建

```bash
npm install kraken-npbt -g
```

在安装完成之后，使用下面的命令在插件目录内进行项目初始化，它会在 `bridge` 目录下生成必要的编译工程文件。

```bash
kraken-npbt configure
```

### 添加 JavaScript 层的实现

然后在 bridge 目录下创建一个名为 my_plugin.js 的文件，然后放入以下代码：

**my_plugin.js** 

```javascript
kraken.addKrakenModuleListener(function(moduleName, event, data) {
  if (moduleName == 'AlarmClock') {
    if (alarmClock.onTimeListener != null) {
      alarmClock.onTimeListener(event, data);
    }
  }
});

const alarmClock = {
  onTimeListener: null,
  setTime(time) {
    kraken.invokeModule('AlarmClock', 'setTime', time, (e, ret) => {
      if (e) {
        throw new Error(e);
      }
      console.log(ret);
    });
  },

  onTime(fn) {
    this.onTimeListener = fn;
  }
}

Object.defineProperty(globalThis, 'alarmClock', {
  value: alarmClock,
  enumerable: true,
  writable: false,
  configurable: false
});
```

通过上面的代码实现了一个 AlarmClock 对象，通过在 JS 插件内调用 `kraken.invokeModule` 和 `kraken.addKrakenModuleListener` 方法来实现和 Dart 层的通讯。

Kraken 在 JS 全局环境中注入了名为 `kraken` 的全局变量，提供插件实现所必要的功能：

```typescript
// 调用 Dart 函数
kraken.invokeModule: (module: string, method: string, params?: Object | null, fn?: (err: Error, data: any) => void) => string;

// 监听 Dart 触发的 Module 事件
kraken.addKrakenModuleListener: (fn: (moduleName: string, event: Event, extra: string) => void) => void;
```

### Dart 层逻辑的实现

上面的 JavaScript 实现将调用转发到了 Dart 层，接下来就是要在 Dart 层实现闹钟的业务逻辑。

**alarm_clock_module.dart** 

```dart
import 'package:kraken/module.dart';
import 'package:kraken/dom.dart';
import 'dart:async';

class AlarmClockModule extends BaseModule {
  AlarmClockModule(ModuleManager moduleManager) : super(moduleManager);

  @override
  String get name => 'AlarmClock';

  @override
  void dispose() {}

  @override
  String invoke(String method, dynamic params, InvokeModuleCallback callback) {
    try {
      if (method == 'setTime') {
        dynamic time = params;
        Timer(Duration(seconds: time.toInt()), () {
          Event alarmEvent = Event('alarm');
          moduleManager.emitModuleEvent(name,
              event: alarmEvent, data: 'Wake Up!');
          callback(data: 'success');
        });
      }
      return null;
    } catch (e, stack) {
      String errmsg = '$e\n$stack';
      callback(errmsg: errmsg);
    }

    return null;
  }
}
```

Kraken 提供了基础了 BaseModule 抽象类，实现 BaseModule 所定义的方法就可以实现一个 Kraken 的 Module 模块。

Kraken 在设计上使用 Module 模块来处理来自 JavaScript API 的调用。因此对于 AlarmClock 这个 JS API，这个module 命名是 AlarmClockModule 。

在 Module 内向 JavaScript 返回数据有 2 种方式，第一种是通过 `InvokeModuleCallback callback` 来进行返回。只要 JavaScript 的代码在调用的时候，在最后了一个参数传入了一个函数作为回调的话，就可以在 Dart 层调用 `InvokeModuleCallback callback` 来直接进行回调。回调参数可以传递 errmsg 或 data，用于处理异常和正常的两种情况。

第二种方式是直接在 Module 内的任何函数内调用 `moduleManager.emitModuleEvent(name, event: alarmEvent, data: 'Wake Up!');` 来触发一个 Module 事件。通过在 JavaScript 上调用 `kraken.addKrakenModuleListener` 就可以监听到这个事件。不过值得注意的是，任何一个 Module 所触发的事件都会执行 `kraken.addKrakenModuleListener` 所注册的回调，因此还需要判断回调执行时，调用的模块名称。



### 完成插件的注册

现在我们已经完成了大部分的功能的实现，接下来就是把代码注册到 Kraken 中，就大功告成了。



**构建 bridge**

`kraken-npbt` 工具可以把 bridge 目录下的 C++ 和 JavaScript 文件都构建成一个动态链接库产物。只需要使用下面的命令就可以一键构建 macOS/iOS/Android 平台的产物。

```bash
kraken-npbt build
```

构建的产物也会自动按照不同的平台，放置在插件项目中的不同目录下：

- **macOS:** `your_kraken_plugin/macos/libmy_kraken_plugin_jsc.dylib`
- **iOS:** `your_kraken_plugin/ios/libmy_kraken_plugin_jsc.dylib`
- **android:** 
  - `your_kraken_plugin/android/jniLibs/arm64_v8a/libmy_kraken_plugin_jsc.so`
  - `your_kraken_plugin/android/jniLibs/armeabi_v7a/libmy_kraken_plugin_jsc.so`



**将 bridge 构建产物注册到插件**

**macOS: [my_kraken_plugin/macos/my_kraken_plugin.pubspec](https://github.com/openkraken/plugin_examples/blob/main/my_kraken_plugin/macos/my_kraken_plugin.podspec#L18)**

```
s.vendored_libraries = 'libmy_kraken_plugin_jsc.dylib'
```

**iOS:** **[my_kraken_plugin/ios/my_kraken_plugin.pubspec](https://github.com/openkraken/plugin_examples/blob/main/my_kraken_plugin/ios/my_kraken_plugin.podspec#L20)**

```
s.vendored_libraries = 'libmy_kraken_plugin_jsc.dylib'
```

**Android:** **[my_kraken_plugin/android/build.gradle](https://github.com/openkraken/plugin_examples/blob/main/my_kraken_plugin/android/build.gradle#L33)**

```
android {
    sourceSets {
        main {
            jniLibs.srcDirs = ['jniLibs']
        }
    }
}
```

**在插件初始化阶段初始化 bridge**

**[platform.dart](https://github.com/openkraken/plugin_examples/blob/main/my_kraken_plugin/lib/platform.dart)**

```dart
// ignore_for_file: unused_import, undefined_function

import 'dart:ffi';
import 'dart:io' show Platform;
import 'dart:typed_data';

/// Search dynamic lib from env.KRAKEN_LIBRARY_PATH or /usr/lib
const String KRAKEN_JS_ENGINE = 'KRAKEN_JS_ENGINE';
final String kkJsEngine = Platform.environment[KRAKEN_JS_ENGINE] ??
    ((Platform.isIOS || Platform.isMacOS || Platform.isAndroid) ? 'jsc' : 'quickjs');
final String libName = 'libmy_kraken_plugin_$kkJsEngine';
final String nativeDynamicLibraryName = (Platform.isMacOS || Platform.isIOS)
    ? '$libName.dylib'
    : Platform.isWindows ? '$libName.dll' : '$libName.so';
DynamicLibrary nativeDynamicLibrary =
    DynamicLibrary.open(nativeDynamicLibraryName);
```

**[my_kraken_plugin.dart](https://github.com/openkraken/plugin_examples/blob/main/my_kraken_plugin/lib/my_kraken_plugin.dart)**

```dart
import 'platform.dart';
import 'dart:ffi';

typedef Native_InitBridge = Void Function();
typedef Dart_InitBridge = void Function();

final Dart_InitBridge _initBridge =
nativeDynamicLibrary.lookup<NativeFunction<Native_InitBridge>>('initBridge').asFunction();

void initBridge() {
  _initBridge();
}

class MyKrakenPlugin {
  static void initialize() {
    initBridge();
    ModuleManager.defineModule((moduleNamager) => AlarmClockModule(moduleNamager));
  }
}

```

之后只需要在应用中的 main 函数内进行插件的初始化，就可以直接使用 AlarmClock 这个 API 了。

```dart
void main() {
  MyKrakenPlugin.initialize();
  runApp(MyApp());
}
```
