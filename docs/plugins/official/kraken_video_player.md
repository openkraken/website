# Video

添加 `<video />` 标签，在 Kraken 内部嵌入一个 视频播放器。

## 快速使用

将 [kraken_video_player](https://pub.dev/packages/kraken_video_player) 作为项目依赖添加到 pubspec.yaml 文件中。

在调用 `runApp()` 之前添加以下代码：

```javascript
import 'package:kraken_video_player/kraken_video_player.dart';

void main() {
  KrakenVideoPlayer.initialize();
  runApp(MaterialApp(
    title: 'Navigation Basics',
    home: FirstRoute(),
  ));
}
```

## 示例

```javascript
function setElementStyle(dom, object) {
  if (object == null) return;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      dom.style[key] = object[key];
    }
  }
}

function setAttributes(dom, object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      dom.setAttribute(key, object[key]);
    }
  }
}

const container1 = document.createElement('div');
setElementStyle(container1, {
  height: '500px',
});

document.body.appendChild(container1);

const video = document.createElement('video');
setElementStyle(video, {
  width: '750px',
  height: '400px',
});

setAttributes(video, {
  autoPlay: true,
  src:
    'https://videocdn.taobao.com/oss/ali-video/1fa0c3345eb3433b8af7e995e2013cea/1458900536/video.mp4',
});

video.addEventListener('canplay', () => {
  console.log('vide can play');
});

container1.appendChild(video);

const pauseBtn = document.createElement('div');
pauseBtn.appendChild(document.createTextNode('pause button'));
pauseBtn.addEventListener('click', () => {
  video.pause();
});
container1.appendChild(pauseBtn);

const playBtn = document.createElement('div');
playBtn.appendChild(document.createTextNode('playBtn button'));
playBtn.addEventListener('click', () => {
  video.play();
});
container1.appendChild(playBtn);
```

## API

参考： [链接](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
