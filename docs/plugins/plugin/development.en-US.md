# Development plugin

## A simple alarm clock API

View the project source code: https://github.com/openkraken/kraken_plugin_examples/tree/main/plugins/my_kraken_plugin

Next, a simple example demonstrates how to add a custom API to Kraken's JS environment.

Our goal is to create a plug-in, and then add a global object of `alarmClock`, and support to register a callback in the JS layer to handle the alarm sound, and then implement the timer function in the Dart layer.

### Ready to work

**Initial project engineering**

Use the `flutter create` command to create a flutter plugin scaffolding. Then add our code to the plugin scaffolding. Now we need to add some configuration so that when building, all dependencies are packaged into the App.

```shell
flutter create --template=plugin --ios-language objc --android-language java --platforms ios,android,macos ./my_kraken_plugin
```

**Install [kraken-npbt](https://github.com/openkraken/native-plugin-build-tool)**

Whether it is a plug-in written in JavaScript or C/C++, you need to use the `kraken-npbt` tool to build

```bash
npm install kraken-npbt -g
```

After the installation is complete, use the following command to initialize the project in the plug-in directory. It will generate the necessary compilation project files in the `bridge` directory.

```bash
kraken-npbt configure
```

### Add implementation of JavaScript layer

Create a file named my_plugin.js in the bridge directory, and then put the following code:

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
  },
};

Object.defineProperty(globalThis, 'alarmClock', {
  value: alarmClock,
  enumerable: true,
  writable: false,
  configurable: false,
});
```

Through the above code, an AlarmClock object is realized, and the communication with the Dart layer is realized by calling the `kraken.invokeModule` and `kraken.addKrakenModuleListener` methods in the JS plug-in.

Kraken injects a global variable named `kraken` into the JS global environment to provide the necessary functions for the plug-in:

```typescript
// call Dart function
kraken.invokeModule: (module: string, method: string, params?: Object | null, fn?: (err: Error, data: any) => void) => string;

// Listen to the Module event triggered by Dart
kraken.addKrakenModuleListener: (fn: (moduleName: string, event: Event, extra: string) => void) => void;
```

### Dart layer logic implementation

The above JavaScript implementation forwards the call to the Dart layer, and the next step is to implement the business logic of the alarm clock in the Dart layer.

**alarm_clock_module.dart**

```dart
import'package:kraken/module.dart';
import'package:kraken/dom.dart';
import'dart:async';

class AlarmClockModule extends BaseModule {
  AlarmClockModule(ModuleManager moduleManager): super(moduleManager);

  @override
  String get name =>'AlarmClock';

  @override
  void dispose() {}

  @override
  String invoke(String method, dynamic params, InvokeModuleCallback callback) {
    try {
      if (method =='setTime') {
        dynamic time = params;
        Timer(Duration(seconds: time.toInt()), () {
          Event alarmEvent = Event('alarm');
          moduleManager.emitModuleEvent(name,
              event: alarmEvent, data:'Wake Up!');
          callback(data:'success');
        });
      }
      return null;
    } catch (e, stack) {
      String errmsg ='$e\n$stack';
      callback(errmsg: errmsg);
    }

    return null;
  }
}
```

Kraken provides a basic BaseModule abstract class, and a Kraken Module can be realized by implementing the methods defined by BaseModule.

Kraken uses Module in its design to handle calls from the JavaScript API. Therefore, for the JS API of AlarmClock, the Module name is AlarmClockModule.

There are two ways to return data to JavaScript in Module. The first one is to return data through `InvokeModuleCallback callback`. As long as the JavaScript code is called, and a function is passed in as a callback at the last parameter, you can call the InvokeModuleCallback callback on the Dart layer to directly perform the callback. The callback parameter can be passed `errmsg` or `data` to handle both abnormal and normal situations.

The second way is to call `moduleManager.emitModuleEvent(name, event: alarmEvent, data:'Wake Up!');` in any function in Module to trigger a Module event. This event can be monitored by calling `kraken.addKrakenModuleListener` on JavaScript. However, it is worth noting that any event triggered by a Module will execute the callback registered by `kraken.addKrakenModuleListener`, so it is also necessary to determine the name of the Module called when the callback is executed.

### Complete the registration of the plug-in

Now that we have completed most of the functions, we only need to register the code in Kraken, and you are done.

**Build bridge**

The `kraken-npbt` tool can build both C++ and JavaScript files in the bridge directory into a dynamic link library product. Just use the following commands to build macOS / iOS / Android platform products with one click.

```bash
kraken-npbt build
```

The built products will also be automatically placed in different directories in the plug-in project according to different platforms:

-**macOS:** `your_kraken_plugin/macos/libmy_kraken_plugin_jsc.dylib` -**iOS:** `your_kraken_plugin/ios/libmy_kraken_plugin_jsc.dylib` -**android:** -`your_kraken_plugin/android/jniLibs/arm64_v8a/libmy_kraken_plugin_jsc.so` -`your_kraken_plugin/android/jniLibs/armeabi_v7a/libmy_kraken_plugin_jsc.so`

**Register the bridge build product to the plugin**

**macOS: [my_kraken_plugin/macos/my_kraken_plugin.pubspec](https://github.com/openkraken/plugin_examples/blob/main/plugins/my_kraken_plugin/macos/my_kraken_plugin.podspec#L18)**

```
s.vendored_libraries ='libmy_kraken_plugin_jsc.dylib'
```

**iOS:** **[my_kraken_plugin/ios/my_kraken_plugin.pubspec](https://github.com/openkraken/plugin_examples/blob/main/plugins/my_kraken_plugin/ios/my_kraken_plugin.podspec#L20)**

```
s.vendored_libraries ='libmy_kraken_plugin_jsc.dylib'
```

**Android:** **[my_kraken_plugin/android/build.gradle](https://github.com/openkraken/plugin_examples/blob/main/plugins/my_kraken_plugin/android/build.gradle#L33)**

```
android {
    sourceSets {
        main {
            jniLibs.srcDirs = ['jniLibs']
        }
    }
}
```

**Initialize the bridge during the plugin initialization phase**

**[platform.dart](https://github.com/openkraken/plugin_examples/blob/main/plugins/my_kraken_plugin/lib/platform.dart)**

```dart
// ignore_for_file: unused_import, undefined_function

import'dart:ffi';
import'dart:io' show Platform;
import'dart:typed_data';

/// Search dynamic lib from env.KRAKEN_LIBRARY_PATH or /usr/lib
const String KRAKEN_JS_ENGINE ='KRAKEN_JS_ENGINE';
final String kkJsEngine = Platform.environment[KRAKEN_JS_ENGINE] ??
    ((Platform.isIOS || Platform.isMacOS || Platform.isAndroid)?'Jsc':'quickjs');
final String libName ='libmy_kraken_plugin_$kkJsEngine';
final String nativeDynamicLibraryName = (Platform.isMacOS || Platform.isIOS)
    ?'$libName.dylib'
    : Platform.isWindows?'$libName.dll':'$libName.so';
DynamicLibrary nativeDynamicLibrary =
    DynamicLibrary.open(nativeDynamicLibraryName);
```

**[my_kraken_plugin.dart](https://github.com/openkraken/plugin_examples/blob/main/plugins/my_kraken_plugin/lib/my_kraken_plugin.dart)**

```dart
import'platform.dart';
import'dart:ffi';

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

After that, you only need to initialize the plug-in in the main function of the application, and you can directly use the AlarmClock API.

```dart
void main() {
  MyKrakenPlugin.initialize();
  runApp(MyApp());
}
```
