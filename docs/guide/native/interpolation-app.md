# 在原生 App 中集成 Kraken

> 不支持 Android 模拟器，请使用真机

除了直接集成到 flutter 应用之外，Kraken 还提供预构建到 SDK，可以方便地集成至 iOS 以及 Android 应用内。

## 集成到 Android 应用

### 1. 准备好你的 AndroidStudio 工程

打开 AndroidStudio，选择 new Project，这里以 EmptyActivity 为初始化项目，使用 Java 为默认 Language

<img src="https://gw.alicdn.com/tfs/TB1cmU.0oY1gK0jSZFMXXaWcVXa-1500-989.png" style="max-width: 600px" />

### 2. 获取 Kraken Android SDK

访问 [Kraken Github Release](https://github.com/openkraken/kraken/releases) 获取预构建的 Android SDK。

下载 `com.openkraken.kraken.sdk.<kraken_version>.zip`。

### 3. 配置 maven 仓库地址：

在 `build.gradle` 中声明 maven 依赖，在 `allprojects` 的 `repositories` 中添加：

```gradle

repositories {
  maven {
      url "some/path/com.openkraken.kraken.sdk.<kraken_version>/outputs/repo"
  }
  maven {
      // libflutter.so 和 libflutter.jar 仓库地址
      url "http://download.flutter.io"
  }
}
```

### 4. 添加构建依赖项

在 `app/build.gradle` 的 `dependencies` 项中添加依赖

```
dependencies {
  debugImplementation 'com.openkraken.kraken.sdk:flutter_debug:<kraken_version>'
  profileImplementation 'com.openkraken.kraken.sdk:flutter_profile:<kraken_version>'
  releaseImplementation 'com.openkraken.kraken.sdk:flutter_release:<kraken_version>'
}
```

同时在 android 字段下添加 Java 1.8 的编译配置

```
compileOptions {
    sourceCompatibility 1.8
    targetCompatibility 1.8
}
```

- 更多构建配置可参考 https://developer.android.com/studio/build/dependencies?hl=zh-cn

### 5. 在 MainActivity 中添加启动代码

打开 `app/src/main/java/com/example/myapplication/MainActivity.java`，添加以下初始化代码：

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

构建运行即可看到效果

## 集成到现有 iOS 应用

### 1. 准备好你的 XCode iOS 工程

打开 XCode.app，选择 Create a new XCode Project，这里以 Single View App 为初始化项目模板，使用 Objective-C 为默认 Language。

<img src="https://gw.alicdn.com/tfs/TB1ugs.0oY1gK0jSZFCXXcwqXXa-1498-1100.png" style="max-width: 600px" />

### 2. 获取 Kraken iOS SDK

访问 [Kraken Github Release](https://github.com/openkraken/kraken/releases) 获取预构建的 iOS SDK。

下载 `ios.sdk.<kraken_version>.zip`。

### 3. 配置 Cocoapods

KrakenSDK 使用 pod 形式分发，请先确保本机已经安装了最新的 cocoapods。

在你创建的 xcode 工程根目录执行：

```
pod init
```

初始化 `Podfile` ，并编辑：

```ruby
#coding: utf-8
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'MyiOSApplication' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for MyiOSApplication
  pod 'Flutter', :podspec => '/path/to/ios-sdk/[build mode]/Flutter.podspec'
end
```

然后执行

```bash
pod update
```

拉取更新。

### 4. 将 Frameworks 集成到 App 中

你可以直接将下载到的 frameworks 文件从 Finder 拖拽到 XCode 工程中的 `Build Settings > Build Phases > Link Binary With Libraries` 列表下：

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210319194730.jpg)

同时确保在 `General > Frameworks, Libries, and Embedded Content 内将添加的 frameworks 选为 Embed & Sign`

![img](https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210319194925.jpg)

### 5. 初始化 Kraken

使用 xcode 打开 xcodeworkspace 文件，编辑 `ViewController.m` ，添加头文件：

```objective-c
#import <Flutter/Flutter.h>
#import <FlutterPluginRegistrant/GeneratedPluginRegistrant.h>
#import <kraken/Kraken.h>
```

然后在 `viewDidLoad` 方法中添加一个按钮：

```objective-c
- (void)viewDidLoad {
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

接着实现 `showFlutter` 方法：

```objective-c
- (void)showFlutter {
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

构建运行即可看到效果
