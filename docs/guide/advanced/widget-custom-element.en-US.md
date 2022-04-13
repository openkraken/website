# Use Flutter Widget to customize elements

## Basic usage

Custom elements allow developers to define new HTML element types through Flutter Widget. This mechanism allows Kraken to directly reuse the Flutter Widget ecosystem.

`Kraken.defineCustomElement(name, builder)` provides the ability to register custom elements. In the following example, we register a custom element called `flutter-text`:

```dart
import'package:kraken/widget.dart';
import'package:flutter/material.dart';

class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context):
        super(context);

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return Text(properties['value'] ??'', textDirection: TextDirection.ltr, style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }
}

void main() {
  Kraken.defineCustomElement('flutter-text', (context) {
    return TextWidgetElement(context);
  });
}
```

The way of creating custom elements is the same as creating common elements:

```js
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // Handle click
});
```

Developers need to inherit `WidgetElement` to implement a `TextWidgetElement` and register it in Kraken through `defineCustomElement` to make it a Custom Element. In the build method of `TextWidgetElement`, whenever the attribute or child node of the node changes (such as appendChild), the node will be marked dirty. Depending on the life cycle of Flutter, the node will eventually be rebuilt. Kraken is at this point The latest properties and children of the node (corresponding to the front end is setAttribute and dom nodes) will be passed over, and the Widget will complete a build based on these parameters and finally update it on the interface.

Note: In order to distinguish the built-in elements, the custom element name `name` must contain the `-` character. At the same time, whenever the attribute of an element changes, the `builder` is triggered to re-execute, which is similar to the Stateful Widget mechanism.

## Advanced usage

### Control Rendering in Dart

In addition to enriching the basic rendering capabilities, connecting existing Flutter Widget materials as rendering capabilities to Kraken, you can also optimize the overall experience of Kraken rendering pages on the end through the optimization capabilities of Flutter Widget itself, such as front-end development An Element container that provides dynamic Render Object recycling capabilities without perceptually.

Take a common form in business-waterfall flow scene as an example, through the waterfall flow Widget component connected to the community-[waterfall_flow](https://pub.dev/packages/waterfall_flow) and a drop-down bottoming refresh Widget component-[flutter_easyrefresh](https://pub.dev/packages/flutter_easyrefresh), we expect to provide a container Element to Kraken's rendering process. At the same time, it is expected that some dynamic Render Object recovery capabilities provided by it internally can ensure smooth scrolling and stable memory performance under long lists.

```dart
void main() {
  Kraken.defineCustomElement('flutter-container', (context) {
    return EasyRefreshWidgetElement(context);
  });
}

class EasyRefreshWidgetElement extends WidgetElement {
  EasyRefreshWidgetElement(EventTargetContext? context):
        super(context, defaultStyle: {'height': '100vh','display':'block' });

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return EasyRefresh(
      child: WaterfallFlow.builder(
        // All Web standard nodes can be passed into Widget.
        itemCount: children.length,
        itemBuilder: (BuildContext context, int index) => children[index],
        padding: EdgeInsets.all(5.0),
        gridDelegate: SliverWaterfallFlowDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
      ),
      // Through dispatchEvent, you can throw events that conform to Web standards like element nodes, and the front-end monitors them through addEventListener.
      onRefresh: () async => dispatchEvent(Event('refresh')),
      onLoad: () async => dispatchEvent(Event('load')),
    );}
}
```

At this point, since the Custom Element has been registered in Kraken, the front-end only needs to use the web standard createElement to create the node.

```js
const flutterContainer = document.createElement('flutter-container');
```

And the node can monitor the Custom Event thrown by the Widget component through `addEventListener`.

```js
flutterContainer.addEventListener('refresh', () => {});
```

### Add custom methods to Element

Elements created by JS can implement arbitrary properties and functions directly by Dart.

**Add property**

In the JS environment, if an Element has a property accessed by JS, the `getBindingProperty` callback will be triggered and pass the name of the property accessed by JS. By returning directly in Dart, you can pass the value back to JS and use it as the return value of JS access.

The returned types supported by properties are the same as those supported by JSON serialization:

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
  // handle click
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

### Add sync function

The method of adding a custom function to an Element is similar to adding a property. You only need to return a Dart function, and you can also return a function in the JS environment. When the function returned by JS is called, the Dart function will also be called.

```javascript
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // handle click
  text.sayHi('Kraken'); // flutter: Kraken: Hi!
});
```
