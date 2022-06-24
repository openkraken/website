# 在 Flutter 应用中集成 Kraken

> 不支持 Android 模拟器，请使用真机

在这里，我们设定环境中已经完全安装 [Kraken 指定的 Flutter stable 版本](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8)，并且 `flutter doctor` 检测全部通过。

使用下面的命令创建一个新的 Flutter App

```shell script
flutter create myapp
cd myapp
```

连接 Android 或者 iOS 手机，确保使用 `flutter devices` 可以看到已经连接的设备：

```
flutter devices
1 connected devices:

HWI TL00 (mobile) • 77P5T18126000120 • android-arm64 • Android 9 (API 28)
```

打开 `pubspec.yaml` 文件，然后在 `dependencies` 下面添加 `kraken` 的依赖。

```yaml
dependencies:
  kraken: '>= 0.0.1' # 会安装最新的 kraken 依赖
```

然后执行下面的命令自动安装依赖：

```shell script
flutter pub get
```

> 在国内可能会出现安装失败的情况，如果安装失败，可以参考链接内容使用国内镜像：https://flutter.cn/community/china

打开 `lib/main.dart`，然后粘贴如下代码：

```dart
import 'package:flutter/material.dart';
import 'package:kraken/kraken.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    Kraken kraken = Kraken(bundle: KrakenBundle.fromUrl('http://https://andycall.oss-cn-beijing.aliyuncs.com/demo/guide-styles.js'));

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: kraken
    );
  }
}
```

然后再执行 `flutter run` 就可以运行了。
