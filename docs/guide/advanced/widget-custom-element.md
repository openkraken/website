# 使用 Fluter Widget 自定义元素

## 基础使用

自定义元素允许开发者通过 Flutter Widget 定义新的 HTML 元素类型，该机制使得 Kraken 可以直接复用 Flutter Widget 生态。

`Kraken.defineCustomElement(name, builder)` 提供了注册自定义元素的能力，在如下示例我们注册了一个叫做 `flutter-text` 的自定义元素：

```dart
import 'package:kraken/widget.dart';
import 'package:flutter/material.dart';

class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) :
        super(context);

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return Text(properties['value'] ?? '', textDirection: TextDirection.ltr, style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }
}

void main() {
  Kraken.defineCustomElement('flutter-text', (context) {
    return TextWidgetElement(context);
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

开发者需要继承 `WidgetElement` 实现一个 `TextWidgetElement` ，并通过 `defineCustomElement` 注册到 Kraken 中去，使其成为一个 Custom Element。在 `TextWidgetElement` 的 build 方法中，每当该节点的 attribute 或者子节点变化（比如 appendChild），该节点就会被标脏，依赖 Flutter 的生命周期，该节点最终会重新被 build，Kraken 在此时会把该节点最新的 properties 以及 children （对应到前端就是 setAttribute 以及 dom 节点）传递过来，Widget 根据这些参数完成一次 build，最终更新到界面上。

注：为了区别内置元素，自定义元素名称 `name` 必须包含 `-` 字符。同时，每当元素的 attribute 改变时都是触发 `builder` 重新执行，这与 Stateful Widget 机制类似。
