# Multimedia

The images and videos that are used for multimedia on the page are supported by Kraken using `<img>` and `<video>` tags respectively. The specific usage is introduced below.

## Image

Kraken supports all image formats supported by Flutter, including `JPEG, PNG, GIF, Animated GIF, WebP, Animated WebP, BMP, WBMP`.

**Example:**

```js
<div style={{ padding: '20px' }}>
  <img
    src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png"
    style={{ width: '100%' }}
  />
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01bOyzka1nbVm4XjCs1_!!6000000005108-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, and then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-image.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01llXZG21IbHUBpiDnt_!!6000000000911-2-tps-200-200.png" />
    </div>
  </div>
</div>

## video

Video does not belong to Kraken's native support capabilities. You need to install this [kraken_video_player plugin](https://pub.dev/packages/kraken_video_player) to support it. For detailed installation methods, please refer to [Development Document](/en-US/plugins/official/kraken_video_player) .

**Example:**

```js
<div>
  <video
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    autoplay={true}
    style={{ width: '100%', height: '200px' }}
  />
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01uFSWbo24k4e9pci5q_!!6000000007428-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, and then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-video.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i1/O1CN01I0hsO41NlsjX2YLK8_!!6000000001611-2-tps-200-200.png" />
    </div>
  </div>
</div>
