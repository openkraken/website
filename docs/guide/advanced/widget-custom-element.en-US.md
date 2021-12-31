# Use Fluter Widget to customize elements

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

The way of creating custom elements is the same as creating ordinary elements:

```js
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // Handle click
});
```

Developers need to inherit `WidgetElement` to implement a `TextWidgetElement` and register it in Kraken through `defineCustomElement` to make it a Custom Element. In the build method of `TextWidgetElement`, whenever the attribute or child node of the node changes (such as appendChild), the node will be marked as dirty. Depending on the life cycle of Flutter, the node will eventually be rebuilt. Kraken is at this point The latest properties and children of the node (corresponding to the front end is setAttribute and dom nodes) will be passed over, and the Widget will complete a build based on these parameters and finally update it on the interface.

Note: In order to distinguish the built-in elements, the custom element name `name` must contain the `-` character. At the same time, whenever the attribute of an element changes, the `builder` is triggered to re-execute, which is similar to the Stateful Widget mechanism.
