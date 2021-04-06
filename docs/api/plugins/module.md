# Module API

## BaseModule

扩展模块的基础类。

```dart
abstract class BaseModule {
  String get name;
  final ModuleManager moduleManager;
  BaseModule(this.moduleManager);
  String invoke(String method, dynamic params, InvokeModuleCallback callback);
  void dispose();
}
```

**String get name**

模块名

**final ModuleManager moduleManager**

当前 Kraken 页面所属的模块管理器，用于触发 Module 事件。

**String invoke(String method, dynamic params, InvokeModuleCallback callback)**

当模块被 JS 调用的时候，所触发的方法。

- `String method`: 被调用的方法名称
- `dynamic params`: 传递的参数
- `InvokeModuleCallback callback`: 异步回调的函数，使用此方法可以异步返回数据给前端。
  - callback(errmsg: 'error msg') 传递一个错误信息
  - callback(data: 'data msg') 传递一个成功的数据

**void dispose()**

- 当模块被销毁时调用，通常为页面销毁时触发。

## 触发 Module 事件

通过调用 `moduleManager.emitModuleEvent` 方法触发。

```
moduleManager.emitModuleEvent(name, data: [1234]);
```

**通过 Module 事件传递数据**

```dart
moduleManager.emitModuleEvent(name, data: [1234]);
```

**通过 Module 事件传递 W3C Event**

```dart
moduleManager.emitModuleEvent(name, event: Event('click'));
```
