# Develop plugin

## A simple alarm clock API

View the project source code: https://github.com/openkraken/samples/tree/main/plugins/my_kraken_plugin

Next, a simple example is used to demonstrate how to add a custom API to Kraken's JS environment.

Our goal is to create a plugin, then add a global object of `alarmClock`, and support registering a callback in the JS layer to handle the alarm clock, and then implement the timer function in the Dart layer.

### Ready to work

**Initialize project engineering**

Create a flutter plugin scaffold with the `flutter create` command. Then add our code to this plugin scaffolding. Now we need to add some configuration so that when building, all dependencies are packaged into the App.

```shell
flutter create --template=plugin ./my_kraken_plugin
```

### Add implementation of JavaScript layer

Create a file called my_plugin.js in the lib/ directory and put the following code:

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

The above code implements an AlarmClock object, which communicates with the Dart layer by calling the `kraken.invokeModule` and `kraken.addKrakenModuleListener` methods in the JS plugin.

Kraken injects a global variable named `kraken` in the JS global environment, providing the necessary functions for plugin implementation:

```typescript
// call Dart function
kraken.invokeModule: (module: string, method: string, params?: Object | null, fn?: (err: Error, data: any) => void) => string;

// Listen to the Module event triggered by Dart
kraken.addKrakenModuleListener: (fn: (moduleName: string, event: Event, extra: string) => void) => void;
```

### Implementation of Dart layer logic

The above JavaScript implementation forwards the call to the Dart layer, and the next step is to implement the business logic of the alarm clock in the Dart layer.

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

Kraken provides the basic BaseModule abstract class, and implementing the methods defined by BaseModule can implement a Kraken Module.

Kraken is designed to use Modules to handle calls from JavaScript APIs. So for the AlarmClock JS API, the Module name is AlarmClockModule .

There are 2 ways to return data to JavaScript in Module, the first is through `InvokeModuleCallback callback`. As long as the JavaScript code is called, and a function is passed as a callback in the last parameter, you can call `InvokeModuleCallback callback` in the Dart layer to directly call back. The callback parameter can be passed `errmsg` or `data` for both exception and normal cases.

The second way is to call `moduleManager.emitModuleEvent(name, event: alarmEvent, data: 'Wake Up!');` from any function inside the Module to trigger a Module event. This event can be listened to by calling `kraken.addKrakenModuleListener` on JavaScript. However, it is worth noting that any event triggered by a Module will execute the callback registered by `kraken.addKrakenModuleListener`, so it is also necessary to determine the name of the Module called when the callback is executed.

### Complete plugin registration

Now that we have implemented most of the functions, we just need to register the code in Kraken and we are done.

Use the following command to call the `qjsc` command provided by kraken-cli to convert the JavaScript code to Dart source code with QuickJS bytecode:

```bash
kraken qjsc ./lib/my_plugin.js ./lib/my_plugin_qjsc.dart --dart --pluginName my_plugin
```

The `my_plugin_qjsc.dart` file will be generated in the lib/ directory.

**Initialize JS during plugin initialization phase**

```dart
import 'alarm_clock_module.dart';
import 'package:kraken/module.dart';
import 'my_plugin_qjsc.dart';

class MyKrakenPlugin {
  static void initialize() {
    registerMyPluginByteData();
    ModuleManager.defineModule(
        (moduleNamager) => AlarmClockModule(moduleNamager));
  }
}
```

After that, you only need to initialize the plugin in the main function of the application, and you can use the AlarmClock API directly.

```dart
void main() {
  MyKrakenPlugin.initialize();
  runApp(MyApp());
}
```
