# Integrate Kraken in native apps

> Android simulator is not supported.

In addition to being directly integrated into the flutter application, Kraken also provides pre-built into the SDK, which can be easily integrated into iOS and Android applications.

## Integrate into Android app

### 1. Prepare your AndroidStudio project

Open AndroidStudio, select new Project, here we use EmptyActivity as the initial project, and use Java as the default Language

<img src="https://gw.alicdn.com/tfs/TB1cmU.0oY1gK0jSZFMXXaWcVXa-1500-989.png" style="max-width: 600px" />

### 2. Get Kraken Android SDK

Visit [Kraken Github Release](https://github.com/openkraken/kraken/releases) to get the pre-built Android SDK.

Download `com.openkraken.kraken.sdk.<kraken_version>.zip`.

### 3. Configure the maven warehouse address:

Declare maven dependencies in `build.gradle` and add in `repositories` of `allprojects`:

```gradle

repositories {
  maven {
      url "some/path/com.openkraken.kraken.sdk.<kraken_version>/outputs/repo"
  }
  maven {
      // libflutter.so and libflutter.jar warehouse addresses
      url "http://download.flutter.io"
  }
}
```

### 4. Add build dependencies

Add dependencies in the `dependencies` item of `app/build.gradle`

```
dependencies {
  debugImplementation'com.openkraken.kraken.sdk:flutter_debug:<kraken_version>'
  profileImplementation'com.openkraken.kraken.sdk:flutter_profile:<kraken_version>'
  releaseImplementation'com.openkraken.kraken.sdk:flutter_release:<kraken_version>'
}
```

At the same time, add the compilation configuration of Java 1.8 under the android field

```
compileOptions {
    sourceCompatibility 1.8
    targetCompatibility 1.8
}
```

-For more build configurations, please refer to https://developer.android.com/studio/build/dependencies?hl=zh-cn

### 5. Add startup code in MainActivity

Open `app/src/main/java/com/example/myapplication/MainActivity.java` and add the following initialization code:

```java
package com.example.myapplication;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;

import com.openkraken.kraken.Kraken;
import android.os.Bundle;

public class MainActivity extends FlutterActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FlutterEngine engine = getFlutterEngine();
        if (engine == null) return;
        Kraken kraken = new Kraken(engine);
        String url = "https://raw.githubusercontent.com/openkraken/kraken/main/kraken/example/assets/bundle.js";
        kraken.loadUrl(url);
    }
}
```

Build and run to see the effect

## Integrate into existing iOS apps

### 1. Prepare your XCode iOS project

Open XCode.app and select Create a new XCode Project. Here we use Single View App as the initial project template and Objective-C as the default Language.

<img src="https://gw.alicdn.com/tfs/TB1ugs.0oY1gK0jSZFCXXcwqXXa-1498-1100.png" style="max-width: 600px" />

### 2. Get Kraken iOS SDK

Visit [Kraken Github Release](https://github.com/openkraken/kraken/releases) to get the pre-built iOS SDK.

Download `ios.sdk.<kraken_version>.zip`.

### 3. Configure Cocoapods

KrakenSDK is distributed in the form of pod, please make sure that the latest cocoapods has been installed on this machine.

Execute in the root directory of the xcode project you created:

```
pod init
```

Initialize `Podfile` and edit:

```ruby
#coding: utf-8
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target'MyiOSApplication' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for MyiOSApplication
  pod'Flutter', :podspec =>'/path/to/ios-sdk/[build mode]/Flutter.podspec'
end
```

Then execute

```bash
pod update
```

Pull updates.

### 4. Integrate Frameworks into App

You can directly drag and drop the downloaded frameworks file from the Finder to the `Build Settings> Build Phases> Link Binary With Libraries` list in the XCode project:

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210319194730.jpg)

Also make sure that the added frameworks is selected as Embed & Sign in `General> Frameworks, Libries, and Embedded Content'

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210319194925.jpg)

### 5. Initialize Kraken

Use xcode to open the xcodeworkspace file, edit `ViewController.m`, and add the header file:

```objective-c
#import <Flutter/Flutter.h>
#import <FlutterPluginRegistrant/GeneratedPluginRegistrant.h>
#import <kraken/Kraken.h>
```

Then add a button to the `viewDidLoad` method:

```objective-c
-(void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  // Make a button to call the showFlutter function when pressed.
  UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
  [button addTarget:self
             action:@selector(showFlutter)
   forControlEvents:UIControlEventTouchUpInside];
  [button setTitle:@"Show Kraken!" forState:UIControlStateNormal];
  button.backgroundColor = UIColor.blueColor;
  button.frame = CGRectMake(80.0, 210.0, 160.0, 40.0);
  [self.view addSubview:button];
}
```

Then implement the `showFlutter` method:

```objective-c
-(void)showFlutter {
  FlutterEngine *flutterEngine = [[FlutterEngine alloc] initWithName:@"my flutter engine"];
  // Runs the default Dart entrypoint with a default Flutter route.
  [flutterEngine run];
  [GeneratedPluginRegistrant registerWithRegistry:flutterEngine];

  FlutterViewController *flutterViewController =
  [[FlutterViewController alloc] initWithEngine:flutterEngine nibName:nil bundle:nil];

  Kraken* kraken = [[Kraken alloc] initWithFlutterEngine:flutterEngine];
  [kraken loadUrl:@"https://raw.githubusercontent.com/openkraken/kraken/main/kraken/example/assets/bundle.js"];

  [self presentViewController:flutterViewController animated:YES completion:nil];
}
```

Build and run to see the effect
