# 如何处理页面跳转

在很多业务中，都会遇到页面跳转的场景，即用户通过点击页面的某个地方，触发页面的跳转。

在浏览器上，页面的跳转是浏览器通过跳转到新的 Tab 页面，或者是直接刷新当前页面来达成。在客户端上，页面会先执行一段客户端切换的动画，然后再跳转到新的页面去。

目前 Kraken 在 JavaScript 环境中支持三种跳转调用：

1. 通过创建一个 `a` 标签的方式进行点击跳转
2. 通过调用 `window.open` 的方式进行跳转
3. 通过给 `location.href` 赋值的方式进行跳转

Kraken 提供了相关的设计可以让用户自定义跳转逻辑。

## 在 Dart 中控制自定义跳转

例如，在 Kraken 中运行下面的 JavaScript 代码

```javascript
const text = document.createTextNode('Click me and navigate to b.');
const a = document.createElement('a');
a.href = 'b.js';
a.style.display = 'block';

const c = document.createElement('a');
c.href = 'c.js';
c.style.display = 'block';
c.appendChild(document.createTextNode('Click me and nothing happened.'));
const p = document.createElement('p');
p.style.textAlign = 'center';
a.appendChild(text);
p.appendChild(a);
p.appendChild(c);
document.body.appendChild(p);
```

接下来，我们在 Dart 层添加对应逻辑的实现。在这里通过创建一个 `KrakenNavigationDelegate` 对象用于处理跳转逻辑。

通过调用 `setDecisionHandler()` 方法就可以设置当页面跳转之后执行的回调函数。如果回调函数返回 `KrakenNavigationActionPolicy.allow`，那么 Kraken 将会进行跳转。
如果返回 `KrakenNavigationActionPolicy.cancel` 则会进行跳转阻断，取消跳转行为的执行。

```dart
KrakenNavigationDelegate navigationDelegate = KrakenNavigationDelegate();
navigationDelegate.errorHandler = (Object error, Object stack) {};
navigationDelegate.setDecisionHandler((KrakenNavigationAction action) async {
  print(action);
  if (action.target == 'b.js') {
    return KrakenNavigationActionPolicy.allow;
  }
  return KrakenNavigationActionPolicy.cancel;
});

Kraken kraken = Kraken(
  bundlePath: 'assets/bundle.js',
  navigationDelegate: navigationDelegate,
);

```

因此在这个页面中，点击第一行的文字会触发页面的跳转，但是点击第二行的文字将不会有任何事情发生。

## 在 iOS / Android 中控制自定义跳转

目前还尚未支持，未来将会提供，现阶段请使用在 Dart 中控制自定义跳转。
