# Integrate Kraken in Flutter app

> Android emulator is not supported, please use a real device

Here, we set the environment to have [Kraken-specified Flutter stable version](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8) fully installed, and `flutter doctor` All tests passed.

Create a new Flutter App with the command below

```shell script
flutter create myapp
cd myapp
```

Connect your Android or iOS phone and make sure you can see the connected devices using `flutter devices`:

```
flutter devices
1 connected devices:

HWI TL00 (mobile) • 77P5T18126000120 • android-arm64 • Android 9 (API 28)
```

Open the `pubspec.yaml` file and add the `kraken` dependency under `dependencies`.

```yaml
dependencies:
  kraken: '>= 0.0.1' # will install the latest kraken dependencies
```

Then execute the following command to automatically install the dependencies:

```shell script
flutter pub get
```

> The installation may fail in China. If the installation fails, you can refer to the link to use the domestic mirror: https://flutter.cn/community/china

Open `lib/main.dart` and paste the following code:

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

Then execute `flutter run` to run.
