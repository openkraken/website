# AnimationPlayer

Add the `<animation-player>` tag to provide the ability to play [Flutter Flare](https://fireship.io/lessons/animated-navigation-flutter-flare/) animation.

## Quick use

Add [kraken_animation_player](https://pub.dev/packages/kraken_animation_player) as a project dependency in the pubspec.yaml file.

Add the following code before calling `runApp()`:

```dart
import'package:kraken_animation_player/kraken_animation_player.dart';
void main() {
  KrakenAnimationPlayer.initialize();
  runApp(MyApp());
}
```

## Example

```javascript
const ASSET = 'https://kraken.oss-cn-hangzhou.aliyuncs.com/data/Teddy.flr';
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

### Attributes

**src**

Animation file address

**type**

Types of animation files

### Method

**play(name: string)**

Play animation
