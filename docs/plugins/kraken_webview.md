# WebView

添加 `<iframe />` 标签，在 Kraken 内部嵌入一个 Web 浏览器。

## 快速使用

将 [kraken_webview](https://pub.dev/packages/kraken_webview) 作为项目依赖添加到 pubspec.yaml 文件中。

在调用 `runApp()` 之前添加以下代码：

```dart
import 'package:kraken_webview/kraken_webview.dart';
void main() {
  KrakenWebView.initialize();
  runApp(MyApp());
}
```

## 示例

```javascript
const iframe = document.createElement('iframe');
iframe.setAttribute(
  'src',
  'https://dev.g.alicdn.com/kraken/kraken-demos/todomvc/build/web/index.html',
);
iframe.style.width = '360px';
iframe.style.height = '375px';
document.body.appendChild(iframe);
```

## API

参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)
