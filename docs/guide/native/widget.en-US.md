# Kraken widget

When we access Kraken in the Flutter application, we can change the default properties of the Kraken Widget through the following configurations.

## container configuration

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

## Load Bundle

### Remote Bundle

The URL of the JavaScript/Bytecode script to load and execute.

**Example:**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromUrl('http://example.com/path/to/js),
);
```

### Local Bundle

The local path of JavaScript/Bytecode to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromUrl('assets://assets/bundle.js')
);
```

### JavaScript String content

The String content of the JavaScript script to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromContent('console.log(1)'),
);
```

### JavaScript Bytecode Content

The Bytecode content of the JavaScript script to be loaded and executed.

**Example:**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromBytecode(bytecode),
);
```

## event

### onLoad

The onLoad event is fired when the document is loaded.

**Example:**

```dart
Kraken kraken = Kraken(
  onLoad: (KrakenController controller) {
    // ...
  },
);
```

### onLoadError

Callback function for file loading exceptions.

**Example:**

```dart
Kraken kraken = Kraken(
  onLoadError: (FlutterError error, StackTrace stackTrace) {
    // ...
  },
);
```

### onJSError

This callback throws an exception when JavaScript executes abnormally.

**Example:**

```dart
Kraken kraken = Kraken(
  onJSError: (String message) {
    // ...
  },
);
```

## enable debugging

### debugEnableInspector

Force the debug mode to be enabled, the default is true.

**Example:**

```dart
Kraken kraken = Kraken(
  debugEnableInspector: false,
);
```

## gestures

### gestureListener

Listen for interactive behavior events thrown by Kraken.

method

- `dragStartCallback`
  Fired when gesture starts
- `dragUpdateCallback`
  Fired when the gesture moves
- `dragEndCallback`
  Fired when the gesture ends

**Example:**

```dart
Kraken(
GestureListener: gestureListener(
    onDrag: (GestureEvent gestureEvent) {
      if (gestureEvent.state == EVENT_STATE_START) {
        //...
      } else if (gestureEvent.state == EVENT_STATE_UPDATE) {
        //...
      } else if (gestureEvent.state == EVENT_STATE_END) {
        //...
      }
    },
    onTouchStart: (TouchEvent touchEvent) {
      //...
    },
    onTouchEnd: (TouchEvent touchEvent) {
      //...
    },
    onTouchMove: (TouchEvent touchEvent) {
      //...
    }
  ),
)
```

## animation control

### animationController

Widget animation controller. In order to avoid the stutter caused by the first execution of JavaScript, use this parameter to allow JavaScript to start executing after the execution of the external animation.

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
              bundlePath: 'assets/bundle.js',
              animationController: controller,
            )
          ],
        ));
  }
}
```

## page jump

### navigationDelegate

Implement custom behaviors that are triggered during the loading of Kraken views and the completion of navigation requests.

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
