# JavaScript API

## kraken.invokeModule()

在 JavaScript 环境下调用 Module API。

调用参数：

```
kraken.invokeModule: (module: string, method: string, params?: Object | null, fn?: (err: Error, data: any) => void) => string;
```

- `module: string`： 调用的模块名
- `method: string`： 调用的方法名
- `params?: Object | null`：传递的参数
- `fn?: (err: Error, data: any) => void`：调用的回调函数

## kraken.addKrakenModuleListener()

监听来自 Module 触发的 Module 事件。

调用参数：

```
kraken.addKrakenModuleListener: (fn: (moduleName: string, event: Event, extra: string) => void) => void;
```

- `moduleName: string`: 触发 Module 事件的 Module 名称。
- `event: Event`: Module 传递过来的 W3C Event。
- `extra: string`: Module 传递过来的数据。
