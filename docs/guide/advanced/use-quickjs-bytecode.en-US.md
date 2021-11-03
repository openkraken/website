# Use QuickJS Bytecode to improve loading performance

Kraken supports the QuickJS engine since version 0.9.0. Compared with JavaScriptCore, QuickJS support the bytecode format, which can skip the Parse phase and execute the code directly, which can greatly reduce the time of JavaScript stage during the first page startup process.

Through [experimental proof](https://github.com/openkraken/kraken/pull/446), using QuickJS Bytecode for loading can reduce JS loading time by 58.12%.

**The .kbc1 file format**

Since quickjs bytecode between different versions may not be compatible, kraken add numbers to subfix of `kbc` in file format.

## How to get Bytecode file

**Conversion via command line**

1. Install qjsc tool

```bash
npm install -g qjsc
```

2. Use the qjsc command to convert the JavaScript file into a .kbc1 file.

```bash
qjsc -s /path/to/source.js -d ./
```

**Conversion via Node API**

```javascript
const Qjsc = require('qjsc');
const qjsc = new Qjsc();

// Dump bytecode from javascript source;
let buffer = qjsc.compile('function hello() {return 1 + 1};'); // <Buffer ...>
fs.writeFileSync('/path/to/sample.kbc1', buffer);
```

## How to use Bytecode files

Kraken recognizes the downloaded file as bytecode in the following two ways:

1. Pass the file suffix

   Files with the file extension .kbc1 will be recognized as bytecode.

2. Identified by the Content-Type returned by the HTTP request

   The HTTP request return header containing `Content-Type: application/vnd.kraken.bc1` will also be recognized as bytecode.
