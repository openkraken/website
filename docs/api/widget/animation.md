# 动画控制

## animationController

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
