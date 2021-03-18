# 使用 Kraken Widget 嵌入在现有的 Flutter 页面中

在 [pub.dev](https://pub.dev/packages/kraken) 上获取 Kraken 的最新版本，然后添加到 `pubspec.yaml` 中。

```yaml
dependencies:
  kraken: latest
```

在 Flutter 项目中引入 kraken package，然后使用 `Kraken` Widget 嵌入到 Flutter 页面中。

```dart
import 'package:flutter/material.dart';
import 'package:kraken/kraken.dart';

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    String jsCode = """
var text = document.createTextNode('Hello World!');
var p = document.createElement('p');
p.style.textAlign = 'center';
p.appendChild(text);
document.body.appendChild(p);
    """;

    Kraken kraken = Kraken(
      viewportWidth: window.physicalSize.width / window.devicePixelRatio,
      viewportHeight: window.physicalSize.height / window.devicePixelRatio,
      bundleContent: jsCode,
    );

    return MaterialApp(
      title: 'Kraken Browser',
      // theme: ThemeData.dark(),
      home: kraken
    );
  }
}
```

之后再通过 `flutter run` 就可以现有的 Flutter 应用中运行了。
