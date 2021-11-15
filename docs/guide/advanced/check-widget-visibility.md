# 检测 Kraken 是否在屏

## 使用 RouteObserver 自动切换

> 此方法仅适用于使用 Flutter 所提供的跳转能力，

当一个 App 从一个 Kraken 页面跳转到另外一个页面时，必然希望原有 Kraken 页面所执行的动画等操作将不再执行，以节省 App 宝贵的计算资源。

Flutter 提供了 [RouteObserver](https://api.flutter.dev/flutter/widgets/RouteObserver-class.html) 来实现对此的监听。同样这个功能在 Kraken 上也适用，只需要在生成 Kraken 的时候，传入 `routeObserver` 参数即可。

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
  const MyApp({Key? key}) : super(key: key);

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

当页面跳转，Kraken 被隐藏的时候，setTimeout，setInterval，requestAnimationFrame 的回调将停止执行，只有当页面再次返回的时候，回调才会再次被触发。

## 手动进行暂停

如果跳转行为时通过客户端视图进行跳转，这时 Kraken 将无法监听页面是否发生跳转。所以开发者需要自行实现路由监听函数，并调用以下方法来实现页面的暂停和唤起。

**暂停页面的执行**

```dart
Kraken kraken = Kraken();
// All timers and requestAnimationFrame will pause
kraken.controller.pause();
```

**恢复页面的执行**

```dart
Kraken kraken = Kraken();
// All timers and requestAnimationFrame will resume
kraken.controller.resume();
```
