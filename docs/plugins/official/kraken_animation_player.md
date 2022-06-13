# AnimationPlayer

添加 `<animation-player>` 标签，提供播放 [Flutter Flare](https://fireship.io/lessons/animated-navigation-flutter-flare/) 动画的能力。

## 快速使用

将 [kraken_animation_player](https://pub.dev/packages/kraken_animation_player) 作为项目依赖添加到 pubspec.yaml 文件中。

在调用 `runApp()` 之前添加以下代码：

```dart
import 'package:kraken_animation_player/kraken_animation_player.dart';
void main() {
  KrakenAnimationPlayer.initialize();
  runApp(MyApp());
}
```

## 示例

```javascript
const ASSET = 'https://andycall.oss-cn-beijing.aliyuncs.com/data/Teddy.flr';
const animationPlayer = document.createElement('animation-player');
animationPlayer.setAttribute('type', 'flare');
animationPlayer.setAttribute('src', ASSET);
Object.assign(animationPlayer.style, {
  width: '360px',
  height: '640px',
  objectFit: 'contain',
});

document.body.appendChild(animationPlayer);
document.body.onclick = () => animationPlayer.play('hands_up');
```

## API

### 属性

**src**

动画文件地址

**type**

动画文件的类型

### 方法

**play(name: string)**

播放动画
