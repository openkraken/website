# Integrate Kraken in the Flutter application

Here, we have completely installed [Flutter version specified by Kraken](https://github.com/openkraken/kraken/blob/main/kraken/pubspec.yaml#L8) in our setting environment, and `flutter doctor` detection All passed.

Use the following command to create a new Flutter App

```shell script
flutter create myapp
cd myapp
```

Connect an Android or iOS phone, make sure to use `flutter devices` to see the connected devices:

```
flutter devices
1 connected devices:

HWI TL00 (mobile) • 77P5T18126000120 • android-arm64 • Android 9 (API 28)
```

Open the `pubspec.yaml` file, and add the dependency of `kraken` under `dependencies`.

```yaml
dependencies: kraken:'>= 0.0.1' # Will install the latest kraken dependency
```

Then execute the following command to automatically install the dependencies:

```shell script
flutter pub get
```

> Installation failure may occur in China. If the installation fails, you can refer to the link content to use the domestic mirror: https://flutter.cn/community/china

Open `lib/main.dart`, and paste the following code:

```dart
import'package:flutter/material.dart';
import'package:kraken/kraken.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    Kraken kraken = Kraken(bundleURL:'https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js');

    return MaterialApp(
      title:'Flutter Demo',
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
