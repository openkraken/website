# Use Flutter Widget to customize elements

## Basic usage

Custom elements allow developers to define new HTML element types through Flutter Widget, which allows Kraken to directly reuse the Flutter Widget ecosystem.

`Kraken.defineCustomElement(name, builder)` provides the ability to register custom elements, in the following example we register a custom element called `flutter-text`:

```dart
import 'package:kraken/widget.dart';
import 'package:flutter/material.dart';

class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) :
        super(context);

  @override
  Widget build(BuildContext context, Map<String, String> attributes, List<Widget> children) {
    return Text(attributes['value'] ?? '', textDirection: TextDirection.ltr, style: TextStyle(color: Color.fromARGB(255, 100, 100, 100)));
  }
}

void main() {
  Kraken.defineCustomElement('flutter-text', (context) {
    return TextWidgetElement(context);
  });
}
```

Creating custom elements is done in the same way as normal elements:

```js
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // handle click
});
```

Developers need to inherit `WidgetElement` to implement a `TextWidgetElement` and register it with Kraken through `defineCustomElement` to make it a Custom Element. In the build method of `TextWidgetElement`, whenever the attribute or child node of the node changes (such as appendChild), the node will be marked dirty, depending on the life cycle of Flutter, the node will eventually be rebuilt, Kraken at this time The latest properties and children of the node (corresponding to the front end is the setAttribute and dom nodes) will be passed over, and the Widget will complete a build based on these parameters and finally update it to the interface.

Note: In order to distinguish built-in elements, custom element names `name` must contain `-` characters. At the same time, `builder` is triggered to re-execute every time the attribute of the element changes, which is similar to the Stateful Widget mechanism.

## Add custom method to Element

Elements created by JS can implement arbitrary properties and functions directly by Dart.

### Add properties

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
  Widget build(BuildContext context, Map<String, String> attributes,
      List<Widget> children) {
    _textValue = attributes['value'] ?? '';
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

```dart
class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) : super(context);

  @override
  Widget build(BuildContext context, Map<String, String> attributes,
      List<Widget> children) {
    return Text(attributes['value'] ?? '',
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

### Add async function

Adding an asynchronous call is similar to adding a function, the only difference is that the returned function is a function with a return type of Future. At this time, the return value of the JS function is also a Promise object.

```javascript
const text = document.createElement('flutter-text');
text.setAttribute('value', 'Hello');
document.body.appendChild(text);

text.addEventListener('click', function() {
  // handle click
  text.waitAndGetData(1000, 'Kraken').then(data => {
    console.log(data); // Kraken: Hello World!
  });
});
```

```dart
class TextWidgetElement extends WidgetElement {
  TextWidgetElement(context) : super(context);

  @override
  Widget build(BuildContext context, Map<String, String> attributes,
      List<Widget> children) {
    return Text(attributes['value'] ?? '',
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

## Trigger Element custom event

The Flutter Widget implemented by Dart can throw custom events to JS to let the front end handle some events that are responded to by client-side functions.

```javascript
const flutterButton = document.createElement('flutter-button');
flutterButton.addEventListener('buttonpress', e => {
  console.log(e.detail); // helloworld
  document.body.appendChild(document.createTextNode(e.detail));
});
document.body.appendChild(flutterButton);
```

```dart
class FlutterButtonElement extends WidgetElement {
  FlutterButtonElement(context) : super(context);

  @override
  Widget build(BuildContext context, Map<String, String> attributes,
      List<Widget> children) {
    return ElevatedButton(
        onPressed: () {
          dispatchEvent(CustomEvent(
              'buttonpress', CustomEventInit(detail: 'helloworld')));
        },
        child: Text('Click This'));
  }
}
```

## Advanced usage

### Control rendering logic

In addition to enriching the basic rendering capabilities, the existing Flutter Widget materials can be integrated into Kraken as rendering capabilities, and the overall experience of Kraken rendering pages in the end can be optimized through the optimization capabilities of the Flutter Widget itself, such as front-end development. An Element container that provides the ability for dynamic Render Object recycling without perception.

Taking a common form in business - waterfall flow scene as an example, by accessing the community's waterfall flow widget component - [waterfall_flow](https://pub.dev/packages/waterfall_flow) and a pull-down bottom-to-refresh Widget component - [flutter_easyrefresh](https://pub.dev/packages/flutter_easyrefresh), we expect to provide it with a container Element to Kraken's rendering process. At the same time, it is also expected that it provides some dynamic Render Object recycling capabilities to ensure a smooth scrolling and stable memory performance under a long list.

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
  Widget build(BuildContext context, Map<String, String> attributes, List<Widget> children) {
    return EasyRefresh(
      child: WaterfallFlow.builder(
        // All web standard nodes can be passed into the Widget.
        itemCount: children.length,
        itemBuilder: (BuildContext context, int index) => children[index],
        padding: EdgeInsets.all(5.0),
        gridDelegate: SliverWaterfallFlowDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
      ),
      // Through dispatchEvent, events that conform to Web standards can be thrown like element nodes, and the front end listens through addEventListener.
      onRefresh: () async => dispatchEvent(Event('refresh')),
      onLoad: () async => dispatchEvent(Event('load')),
    );
  }
}
```

At this point, since the Custom Element has been registered in Kraken, you only need to create the node through the web standard createElement on the front end.

```js
const flutterContainer = document.createElement('flutter-container');
```

And the node can listen to the Custom Event thrown by the Widget component through `addEventListener`.

```js
flutterContainer.addEventListener('refresh', () => {});
```
