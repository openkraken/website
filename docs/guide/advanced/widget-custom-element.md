# 使用 Fluter Widget 自定义元素

自定义元素允许开发者通过 Flutter Widget 定义新的 HTML 元素类型，该机制使得 Kraken 可以直接复用 Flutter Widget 生态。

`Kraken.defineCustomElement(name, builder)` 提供了注册自定义元素的能力，在如下示例我们注册了一个叫做 `flutter-text` 的自定义元素：

```dart
import 'package:kraken/widget.dart';
import 'package:flutter/material.dart';

void defineKrakenCustomElements() {
  Kraken.defineCustomElement('flutter-text', (Map<String, dynamic> attributes) {
    return Text(attributes['value'] ?? '', textDirection: TextDirection.ltr, style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  });
}
```

创建自定义元素的方式与创建普通元素一致：

```js
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
   // Handle click
});
```

为了区别内置元素，自定义元素名称 `name` 必须包含 `-` 字符。同时，每当元素的 attribute 改变时都是触发 `builder` 重新执行，这与 Stateful Widget 机制类似。


