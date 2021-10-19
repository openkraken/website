# 使用 Quickjs Bytecode 提升加载性能

Kraken 从 0.9.0 版本开始支持 quickjs 引擎。相比 JavaScriptCore，quickjs 支持使用 quickjs bytecode 来进行页面加载，从而可以跳过 Parse 阶段，直接解析代码并执行，能够大幅度减少首次页面启动过程中，解析 JavaScript 所花费的时间。

通过[实验证明](https://github.com/openkraken/kraken/pull/446), 采用 Quickjs Bytecode 进行加载能够将 JS 加载时间减少 58.12%。

**Bytecode 文件的命名**

由于不同版本之间的 quickjs bytecode 并不一定可以完全兼容，因为 kraken 将所生成的 bytecode 文件命名为 `.kbc1` 格式。

## 如何获得 Bytecode 文件

**通过命令行进行转换**

1. 安装 qjsc 工具

```bash
npm install -g qjsc
```

2. 通过 qjsc 命令将 JavaScript 文件转换成 .kbc1 文件。

```bash
qjsc -s /path/to/source.js -d ./
```

**通过 Node API 进行转换**

```javascript
const Qjsc = require('qjsc');
const qjsc = new Qjsc();

// Dump bytecode from javascript source;
let buffer = qjsc.compile('function hello() { return 1 + 1};'); // <Buffer ...>
fs.writeFileSync('/path/to/sample.kbc1', buffer);
```

## 如何使用 Bytecode 文件

Kraken 通过以下两种方式来识别下载的文件为 bytecode：

1. 通过文件后缀

   文件后缀为 .kbc1 的文件都将识别为 bytecode。

2. 通过 HTTP 请求返回的 Content-Type 来识别

   HTTP 请求返回头包含 `Content-Type: application/vnd.kraken.bc1` 也将识别为 bytecode。
