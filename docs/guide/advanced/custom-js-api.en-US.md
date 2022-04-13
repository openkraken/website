# Add custom API to JS runtime environment

## A simple alarm clock API

Next, a simple example is used to demonstrate how to add a custom API to Kraken's JS environment.

Our goal is to add a `alarmClock` global object to the JS global environment, and support to register a callback in the JS layer to handle the alarm clock, and then implement the timer function in the Dart layer.

### Add implementation of JavaScript layer

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

void main() {
  ModuleManager.defineModule((moduleNamager) => AlarmClockModule(moduleNamager));
}
```

Kraken provides the basic BaseModule abstract class, and implementing the methods defined by BaseModule can implement a Kraken Module.

Kraken is designed to use Modules to handle calls from JavaScript APIs. So for the AlarmClock JS API, the Module name is AlarmClockModule .

There are two ways to return data to JavaScript in Module, the first is through `InvokeModuleCallback callback` to return data. As long as the JavaScript code is called, and a function is passed as a callback in the last parameter, you can call `InvokeModuleCallback callback` in the Dart layer to directly call back. The callback parameter can be passed `errmsg` or `data` for both exception and normal cases.

The second way is to call `moduleManager.emitModuleEvent(name, event: alarmEvent, data: 'Wake Up!');` from any function inside the Module to trigger a Module event. This event can be listened to by calling `kraken.addKrakenModuleListener` on JavaScript. However, it is worth noting that any event triggered by a Module will execute the callback registered by `kraken.addKrakenModuleListener`, so it is also necessary to determine the name of the Module called when the callback is executed.

## complete the installation of the API

The best way to register the API is to convert the JS code into bytecode through the tool, and then register it when the application is initialized.

Use the following command to call the qjsc command provided by kraken-cli to convert the JavaScript code to Dart source code containing QuickJS bytecode:

```
kraken qjsc ./lib/my_plugin.js ./lib/my_plugin_qjsc.dart --dart --pluginName my_plugin
```

The my_plugin_qjsc.dart file will be generated in the lib/ directory.

```dart
import 'my_plugin_qjsc.dart';

void main() {
  registerMyPluginByteData();
  ModuleManager.defineModule((moduleNamager) => AlarmClockModule(moduleNamager));
}

```
