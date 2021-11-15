# Check Kraken's visibility

## Use RouteObserver to switch automatically

> This method are limited to the navigation methods provided from Flutter.

When an App jumps from one Kraken page to another page, it must be hoped that the animation and other operations performed by the original Kraken page will no longer be executed, to save the App’s valuable cpu resources.

Flutter provides [RouteObserver](https://api.flutter.dev/flutter/widgets/RouteObserver-class.html) to monitor this. The same function is also applicable to Kraken. You only need to pass in the `routeObserver` parameter when generating Kraken.

```dart
// Register the RouteObserver as a navigation observer.
final RouteObserver<ModalRoute<void>> routeObserver = RouteObserver<ModalRoute<void>>();

void main() {
  runApp(MaterialApp(
    home: MyApp(),
    navigatorObservers: [routeObserver],
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}): super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Second Route'),
      ),
      body: Center(
        child: Column(children: [
          Kraken(
            routeObserver: routeObserver
          ),
        ])
      ),
    );
  }
}
```

When the page jumps and Kraken is hidden, the callbacks of setTimeout, setInterval, and requestAnimationFrame will stop executing. Only when the page returns again, the callback will be triggered again.

## Manually pause

If the redirection is performed through the client view, Kraken will not be able to monitor whether the page is redirected. Therefore, developers need to implement routing monitoring functions by themselves, and call the following methods to pause and awaken the page.

**Pause the execution of the page**

```dart
Kraken kraken = Kraken();
// All timers and requestAnimationFrame will pause
kraken.controller.pause();
```

**Resume the execution of the page**

```dart
Kraken kraken = Kraken();
// All timers and requestAnimationFrame will resume
kraken.controller.resume();
```
