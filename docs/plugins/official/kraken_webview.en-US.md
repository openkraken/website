# WebView

Add the `<iframe />` tag to embed a web browser inside Kraken.

## Quick use

Add [kraken_webview](https://pub.dev/packages/kraken_webview) as a project dependency in the pubspec.yaml file.

Add the following code before calling `runApp()`:

```dart
import'package:kraken_webview/kraken_webview.dart';
void main() {
  KrakenWebView.initialize();
  runApp(MyApp());
}
```

## Example

```javascript
const iframe = document.createElement('iframe');
iframe.setAttribute(
  'src',
  'https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js',
);
iframe.style.width = '360px';
iframe.style.height = '375px';
document.body.appendChild(iframe);
```

## API

Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)
