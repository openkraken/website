# 使用 Flutter Widget 自定义元素

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

## 高阶用法

### 控制渲染逻辑

除了可以丰富基础的渲染能力，将已有的 Flutter Widget 物料作为渲染能力接入到 Kraken 中，还可以通过 Flutter Widget 本身的优化能力来优化端内 Kraken 渲染页面的整体体验，比如可以做到前端开发者无感知地提供动态 Render Object 回收的能力的 Element 容器。

以业务中常见的一种形态——瀑布流场景为例，通过接入社区的瀑布流 Widget 组件——[waterfall_flow](https://pub.dev/packages/waterfall_flow) 以及一个下拉触底刷新的 Widget 组件—— [flutter_easyrefresh](https://pub.dev/packages/flutter_easyrefresh)，我们期望把它提供一个容器 Element 到 Kraken 的渲染流程中。同时，也期望它内部提供的一些动态 Render Object 的回收能力，保证在长列表下有一个滚动流畅以稳定的及内存的表现。

```dart
void main() {
  Kraken.defineCustomElement('flutter-container', (context) {
    return EasyRefreshWidgetElement(context);
  });
}

class EasyRefreshWidgetElement extends WidgetElement {
  EasyRefreshWidgetElement(EventTargetContext? context) :
        super(context, defaultStyle: { 'height': '100vh', 'display': 'block' });

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return EasyRefresh(
      child: WaterfallFlow.builder(
        // 所有 Web 标准的节点可以传入到 Widget 中。
        itemCount: children.length,
        itemBuilder: (BuildContext context, int index) => children[index],
        padding: EdgeInsets.all(5.0),
        gridDelegate: SliverWaterfallFlowDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
      ),
      // 通过 dispatchEvent 可以像 element 节点抛出符合 Web 标准的事件，前端通过 addEventListener 监听。
      onRefresh: () async => dispatchEvent(Event('refresh')),
      onLoad: () async => dispatchEvent(Event('load')),
    );
  }
}
```

此时，由于该 Custom Element 已经被注册到 Kraken 中去，在前端只需要通过 web 标准的 createElement 即可创建该节点。

```js
const flutterContainer = document.createElement('flutter-container');
```

以及该节点可以通过 `addEventListener` 来监听 Widget 组件抛出的 Custom Event。

```js
flutterContainer.addEventListener('refresh', () => {});
```

### 给 Element 添加自定义方法

由 JS 所创建的 Element，可以直接由 Dart 来实现任意属性和函数。

**添加属性**

在 JS 环境中，如果一个 Element 被 JS 所访问属性，`getBindingProperty` 这个回调就会被触发，并传入 JS 所访问的属性名。在 Dart 中直接进行返回，就可以将值传回 JS，并作为 JS 访问的返回值。

属性所支持返回的类型和 JSON 序列化所支持的类型一致：

- int
- double
- String
- List
- Map

```javascript
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // Handle click
  console.log(text.value); // Hello
  console.log(text.hello); // World!
  console.log(text.data); // ['A', 'B']
});
```

```dart
class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) : super(context);

  String _textValue = '';
  List<String> _textData = ['A', 'B'];

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties,
      List<Widget> children) {
    _textValue = properties['value'] ?? '';
    return Text(_textValue,
        textDirection: TextDirection.ltr,
        style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }

  @override
  getBindingProperty(String key) {
    if (key == 'value') {
      return _textValue;
    } else if (key == 'hello') {
      return 'World!';
    } else if (key == 'data') {
      return _textData;
    }

    return super.getBindingProperty(key);
  }
}
```

### 添加同步函数

给 Element 添加自定义函数的方法和添加属性类似，只需要返回一个 Dart 函数，就可以在 JS 环境中也返回一个函数，当 JS 返回的函数被调用时，Dart 函数也会被调用。

```javascript
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // Handle click
  text.sayHi('Kraken'); // flutter: Kraken: Hi!
});
```

```dart
class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) : super(context);

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties,
      List<Widget> children) {
    return Text(properties['value'] ?? '',
        textDirection: TextDirection.ltr,
        style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }

  dynamic sayHi(List<dynamic> args) {
    print(args[0] + ': Hi!');
  }

  @override
  getBindingProperty(String key) {
    if (key == 'sayHi') {
      return sayHi;
    }

    return super.getBindingProperty(key);
  }
}
```

### 添加异步函数

添加异步调用的方式和添加函数类似，唯一的区别在于，返回的函数是一个返回类型为 Future 的函数。这个时候，JS 函数返回值也是一个 Promise 对象。

```javascript
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // Handle click
  text.waitAndGetData(1000, 'Kraken').then(data => {
    console.log(data); // Kraken: Hello World!
  });
});
```

```dart
class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) : super(context);

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties,
      List<Widget> children) {
    return Text(properties['value'] ?? '',
        textDirection: TextDirection.ltr,
        style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }

  Future<dynamic> waitAndGetData(List<dynamic> argv) async {
    Completer<dynamic> completer = Completer();
    Timer(Duration(milliseconds: argv[0]), () {
      completer.complete('${argv[1]}: Hello World!');
    });
    return completer.future;
  }

  @override
  getBindingProperty(String key) {
    if (key == 'waitAndGetData') {
      return waitAndGetData;
    }

    return super.getBindingProperty(key);
  }
}
```
