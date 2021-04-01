# 多媒体

页面中的多媒体用得比较多的图像与视频，Kraken 分别使用 `<img>` 与 `<video>` 标签来支持，以下介绍具体的用法。

## 图像

Kraken 支持所有 Flutter 支持的图像格式，包含 `JPEG, PNG, GIF, Animated GIF, WebP, Animated WebP, BMP, WBMP`。

**示例：**

```js
<div style={{ padding: '20px' }}>
  <img
    src="https://img.alicdn.com/imgextra/i1/O1CN01Fch4UU1W9Fs6HYq8G_!!6000000002745-2-tps-490-190.png"
    style={{ width: '100%' }}
  />
</div>
```

**渲染效果：**

<img src="https://img.alicdn.com/imgextra/i2/O1CN01cr9yFl1hMV6Dgd1QU_!!6000000004263-2-tps-744-338.png" width=372 />

## 视频

视频不属于 Kraken 原生支持的能力，需要先安装这个 [kraken_video_player 插件](https://pub.dev/packages/kraken_video_player)来支持，详细安装方法请参考[开发文档](/plugins/kraken_video_player)。

**示例：**

```js
<div style={{ padding: '20px' }}>
  <video
    src="https://videocdn.taobao.com/oss/ali-video/1fa0c3345eb3433b8af7e995e2013cea/1458900536/video.mp4"
    style={{ width: '100%' }}
  />
</div>
```

**渲染效果：**

<img src="https://img.alicdn.com/imgextra/i1/O1CN01SuQOIK1fClRsxvkm4_!!6000000003971-2-tps-742-458.png" width=371 />
