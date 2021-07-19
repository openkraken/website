# Use Fluter Widget to customize elements

Custom elements allow developers to define new HTML element types through Flutter Widget. This mechanism allows Kraken to directly reuse the Flutter Widget ecosystem.

`Kraken.defineCustomElement(name, builder)` provides the ability to register custom elements. In the following example, we register a custom element called `flutter-text`:

```dart
import'package:kraken/widget.dart';
import'package:flutter/material.dart';

void defineKrakenCustomElements() {
  Kraken.defineCustomElement('flutter-text', (Map<String, dynamic> attributes) {
    return Text(attributes['value'] ??'', textDirection: TextDirection.ltr, style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
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

In order to distinguish the built-in elements, the custom element name `name` must contain the `-` character. At the same time, whenever the attribute of an element changes, the `builder` is triggered to re-execute, which is similar to the Stateful Widget mechanism.
