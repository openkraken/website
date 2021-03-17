# 内置标签

## W3C 标准标签
Kraken 支持以下 W3C 定义的标准标签。

- div
- span
- a
- audio
- body
- canvas
- iframe
- img
- input
- object
- p
- pre
- strong
- video


## 扩展标签
除了 W3C 中标准的标签外，Kraken 提供了一系列增强能力的内置标签。

- animation-player
- camera-preview

### animation-player
animation-player 提供了带交互动画的抽象，目前支持 flare 渲染类型。

#### 属性
- type:  动画类型，目前仅支持 `flare`
- src:  指定动画数据源地址

#### 示例

```
const FLARE_ASSET_URL = 'https://kraken.oss-cn-hangzhou.aliyuncs.com/data/Teddy.flr';
const animationPlayer = document.createElement('animation-player');
animationPlayer.setAttribute('type', 'flare');
animationPlayer.setAttribute('src', FLARE_ASSET_URL);

Object.assign(animationPlayer.style, {
  width: '100vw',
  height: '100vh',
  objectFit: 'contain',
});

document.body.appendChild(animationPlayer);

let state = 'hands_down';
animationPlayer.addEventListener('click', () => {
  if (state === 'hands_down') {
    state = 'hands_up';
    animationPlayer.play('hands_up', { mix: 2.0 });
  } else {
    state = 'hands_down';
    animationPlayer.play('hands_down', { mix: 2.0 });
  }
});
```


### camera-preview
camera-preview 提供了调用并展示摄像头的能力。

