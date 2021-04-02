# 容器配置

我们在 Flutter 应用中接入 Kraken 时，可以通过下列的这些配置来改变 Kraken Widget 容器的默认属性。

## background

自定义 Kraken 容器的背景色。

**示例：**

```dart
Color color = const Color(0x000000);

Kraken kraken = Kraken(
  background: color,
);
```

## viewportWidth

自定义 Kraken 容器的宽度。

**示例：**

```dart
Kraken kraken = Kraken(
  viewportWidth: window.physicalSize.width / window.devicePixelRatio,
);
```

## viewportHeight

自定义 Kraken 容器的高度。

**示例：**

```dart
Kraken kraken = Kraken(
  viewportHeight: window.physicalSize.height / window.devicePixelRatio,
);
```
