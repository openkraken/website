# 加载资源

## bundleURL

需加载执行的 JavaScript 脚本的 URL。

示例：

```dart
Kraken kraken = Kraken(
  bundleURL: 'https://raw.githubusercontent.com/openkraken/kraken/master/kraken/example/assets/bundle.js',
);
```

## bundlePath

需加载执行的 JavaScript 脚本本地路径。

示例：

```dart
Kraken kraken = Kraken(
  bundlePath: 'assets/bundle.js',
);
```

## bundleContent

需加载执行的 JavaScript 脚本的内容。

示例：

```dart
Kraken kraken = Kraken(
  bundleContent: 'console.log(1)',
);
```
