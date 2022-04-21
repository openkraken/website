# Console

Kraken 实现了标准的 [Console API](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)：

- `assert()`
  判断第一个参数是否为真，`false` 的话抛出异常并且在控制台输出相应信息。

- `count()`
  以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。

- `countReset()`
  重置指定标签的计数器值。

- `debug()`
  在控制台打印一条 debug 消息。

- `dir()`
  打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性。

- `error()`
  打印一条错误信息。

- `group()`
  创建一个新的内联 group, 后续所有打印内容将会以子层级的形式展示。调用 `groupEnd()`来闭合组。

- `groupCollapsed`
  创建一个新的内联 group。使用方法和 `group()` 相同，不同的是，`groupCollapsed()` 方法打印出来的内容默认是折叠的。To move back out a level, call `groupEnd()`。

- `groupEnd()`
  闭合当前内联 group。

- `info()`
  打印资讯类说明信息。

- `log()`
  打印内容的通用方法。

- `table()`
  将列表型的数据打印成表格。

- `time()`
  启动一个以入参作为特定名称的计时器，在显示页面中可同时运行的计时器上限为 10,000。

- `timeEnd()`
  结束特定的计时器，并以毫秒打印其从开始到结束所用的时间。

- `timeLog()`
  打印特定计时器所运行的时间。

- `trace()`
  输出一个 stack trace。

- `warn()`
  打印一个警告信息。
