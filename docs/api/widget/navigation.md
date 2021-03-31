# 页面跳转

## navigationDelegate

实现在 Kraken 视图的加载以及完成导航请求过程中触发的自定义行为。

示例：

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
