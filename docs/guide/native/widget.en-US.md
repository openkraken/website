# Kraken widget

When we access Kraken in the Flutter application, we can change the default properties of Kraken Widget through the following configurations.

## Container configuration

### background

Customize the background color of the Kraken container.

**Example:**

```dart
Color color = const Color(0x000000);

Kraken kraken = Kraken(
  background: color,
);
```

### viewportWidth

Customize the width of the Kraken container.

**Example:**

```dart
Kraken kraken = Kraken(
  viewportWidth: window.physicalSize.width / window.devicePixelRatio,
);
```

### viewportHeight

Customize the height of the Kraken container.

**Example:**

```dart
Kraken kraken = Kraken(
  viewportHeight: window.physicalSize.height / window.devicePixelRatio,
);
```

## Load resources

### bundleURL

The URL of the JavaScript script to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundleURL:'https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js',
);
```

### bundlePath

The local path of the JavaScript script to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundlePath:'assets/bundle.js',
);
```

### bundleContent

The content of the JavaScript script to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundleContent:'console.log(1)',
);
```

## event

### onLoad

The onLoad event will be triggered after the document is loaded.

**Example:**

```dart
Kraken kraken = Kraken(
  onLoad: (KrakenController controller) {
    // ...
  },
);
```

### onLoadError

Load the abnormal callback function in the document.

**Example:**

```dart
Kraken kraken = Kraken(
  onLoadError: (FlutterError error, StackTrace stackTrace) {
    // ...
  },
);
```

### onJSError

When JavaScript executes abnormally, an exception is thrown through this callback.

**Example:**

```dart
Kraken kraken = Kraken(
  onJSError: (String message) {
    // ...
  },
);
```

## Turn on debugging

### debugEnableInspector

Force the debug mode to be turned on, the default is true.

**Example:**

```dart
Kraken kraken = Kraken(
  debugEnableInspector: false,
);
```

## Gesture

### gestureClient

Capture unconsumed gestures inside Kraken, and customize gesture events.

method

- `dragStartCallback`
  Triggered when the gesture starts
- `dragUpdateCallback`
  Triggered when the gesture moves
- `dragEndCallback`
  Triggered when the gesture ends

**Example:**

```dart
class NativeGestureClient implements GestureClient {
  @override
  void dragStartCallback(DragStartDetails details) {
    // ...
  }

  @override
  void dragUpdateCallback(DragUpdateDetails details) {
    // ...
  }

  @override
  void dragEndCallback(DragEndDetails details) {
    // ...
  }
}

Kraken kraken = Kraken(
  gestureClient: NativeGestureClient(),
);
```

## Animation control

### animationController

Widget animation controller. In order to avoid the lag caused by the first execution of JavaScript, use this parameter to enable JavaScript to start execution after the execution of the external animation ends.

**Example:**

```dart
class FirstRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First Route'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Open route'),
          onPressed: () {
            MaterialPageRoute route;
            routeBuilder(context) {
              return SecondRoute(route.controller);
            }

            route = MaterialPageRoute(builder: routeBuilder);
            Navigator.push(
              context,
              route,
            );
          },
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  final AnimationController controller;

  SecondRoute(this.controller);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Second Route"),
        ),
        body: Wrap(
          children: <Widget>[
            Kraken(
              bundlePath:'assets/bundle.js',
              animationController: controller,
            )
          ],
        ));
  }
}
```

## Page Jump

### navigationDelegate

Implement custom behaviors triggered during the loading of the Kraken view and the completion of the navigation request.

**Example:**

```dart
KrakenNavigationDelegate navigationDelegate = KrakenNavigationDelegate();
navigationDelegate.errorHandler = (Object error, Object stack) {};
navigationDelegate.setDecisionHandler((KrakenNavigationAction action) async {
  // ...
  return KrakenNavigationActionPolicy.cancel;
});

Kraken kraken = Kraken(
  navigationDelegate: navigationDelegate,
);
```

## Communicate with JS

### javaScriptChannel

A channel for exchanging information with JavaScript.

**Example:**

```dart
KrakenJavaScriptChannel javaScriptChannel = KrakenJavaScriptChannel();
javaScriptChannel.onMethodCall = (String method, dynamic arguments) async {
  Completer completer = Completer<String>();
  Timer(Duration(seconds: 1), () {
    completer.complete('helloworld');
  });
  return completer.future;
};
Krake kraken = Kraken(
  javaScriptChannel: javaScriptChannel,
),
```
