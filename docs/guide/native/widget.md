# Kraken widget

我们在 Flutter 应用中接入 Kraken 时，可以通过下列的这些配置来改变 Kraken Widget 的默认属性。

## 容器配置

### background

自定义 Kraken 容器的背景色。

**示例：**

```dart
Color color = const Color(0x000000);

Kraken kraken = Kraken(
  background: color,
);
```

### viewportWidth

自定义 Kraken 容器的宽度。

**示例：**

```dart
Kraken kraken = Kraken(
  viewportWidth: window.physicalSize.width / window.devicePixelRatio,
);
```

### viewportHeight

自定义 Kraken 容器的高度。

**示例：**

```dart
Kraken kraken = Kraken(
  viewportHeight: window.physicalSize.height / window.devicePixelRatio,
);
```

## 加载 Bundle

### 远程 Bundle

需加载执行的 JavaScript/Bytecode 脚本的 URL。

**示例：**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromUrl('http://example.com/path/to/js),
);
```

### 本地 Bundle

需加载执行的 JavaScript/Bytecode 本地路径。

**示例：**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromUrl('assets://assets/bundle.js')
);
```

### JavaScript String 内容

需加载执行的 JavaScript 脚本的 String 内容。

**示例：**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromContent('console.log(1)'),
);
```

### JavaScript Bytecode 内容

需加载执行的 JavaScript 脚本的 Bytecode 内容。

**示例：**

```dart
Kraken kraken = Kraken(
  bundle: KrakenBundle.fromBytecode(bytecode),
);
```

## 事件

### onLoad

在文档装载完成后会触发 onLoad 事件。

**示例：**

```dart
Kraken kraken = Kraken(
  onLoad: (KrakenController controller) {
    // ...
  },
);
```

### onLoadError

在文档装载异常的回调函数。

**示例：**

```dart
Kraken kraken = Kraken(
  onLoadError: (FlutterError error, StackTrace stackTrace) {
    // ...
  },
);
```

### onJSError

JavaScript 执行异常时通过该回调抛出异常。

**示例：**

```dart
Kraken kraken = Kraken(
  onJSError: (String message) {
    // ...
  },
);
```

## 开启调试

### debugEnableInspector

强制开启调试模式，默认为 true。

**示例：**

```dart
Kraken kraken = Kraken(
  debugEnableInspector: false,
);
```

## 手势

### gestureListener

监听 Kraken 抛出的交互行为事件。

方法

- `dragStartCallback`  
  手势开始时触发
- `dragUpdateCallback`  
  手势移动时触发
- `dragEndCallback`  
  手势结束时触发

**示例：**

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

## 动画控制

### animationController

Widget 动画控制器。为了避免初次执行 JavaScript 而导致的卡顿，使用这个参数可以让 JavaScript 在外部动画执行结束之后再开始执行。

**示例：**

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

## 页面跳转

### navigationDelegate

实现在 Kraken 视图的加载以及完成导航请求过程中触发的自定义行为。

**示例：**

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

## 与 JS 通信

### javaScriptChannel

与 JavaScript 交换信息的通道。

**示例：**

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
