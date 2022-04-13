# 给 JS 运行环境中添加自定义 API

## 一个简单的闹钟 API

接下来通过一个简单的例子来演示如何给 Kraken 的 JS 环境中添加一个自定义的 API。

我们的目标是通过给 JS 全局环境中新增一个 `alarmClock` 的全局对象，并支持在 JS 层注册一个回调用于处理闹钟响了，然后在 Dart 层去实现定时器的功能。

### 添加 JavaScript 层的实现

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

Kraken 提供了基础的 BaseModule 抽象类，实现 BaseModule 所定义的方法就可以实现一个 Kraken 的 Module。

Kraken 在设计上使用 Module 来处理来自 JavaScript API 的调用。因此对于 AlarmClock 这个 JS API，这个 Module 命名是 AlarmClockModule 。

在 Module 内向 JavaScript 返回数据有 2 种方式，第一种是通过 `InvokeModuleCallback callback` 来进行返回。只要 JavaScript 的代码在调用的时候，在最后了一个参数传入了一个函数作为回调的话，就可以在 Dart 层调用 `InvokeModuleCallback callback` 来直接进行回调。回调参数可以传递 `errmsg` 或 `data`，用于处理异常和正常的两种情况。

第二种方式是在 Module 内的任何函数内调用 `moduleManager.emitModuleEvent(name, event: alarmEvent, data: 'Wake Up!');` 来触发一个 Module 事件。通过在 JavaScript 上调用 `kraken.addKrakenModuleListener` 就可以监听到这个事件。不过值得注意的是，任何一个 Module 所触发的事件都会执行 `kraken.addKrakenModuleListener` 所注册的回调，因此还需要判断回调执行时调用的 Module 名称。

## 完成 API 的安装

API 注册最好的方式是将 JS 代码通过工具转成 bytecode，然后再应用初始化的时候进行注册。

使用下面的命令调用 kraken-cli 所提供的 qjsc 命令将 JavaScript 代码转成包含 QuickJS bytecode 的 Dart 源代码：

```
kraken qjsc ./lib/my_plugin.js ./lib/my_plugin_qjsc.dart --dart --pluginName my_plugin
```

就会在 lib/ 目录下生成 my_plugin_qjsc.dart 文件。

```dart
import 'my_plugin_qjsc.dart';

void main() {
  registerMyPluginByteData();
  ModuleManager.defineModule((moduleNamager) => AlarmClockModule(moduleNamager));
}

```
