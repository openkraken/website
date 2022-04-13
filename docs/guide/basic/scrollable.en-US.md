# Scroll container

Add `overflow: scroll` to an ordinary fixed-size container to create a scrolling container.
By default, the scroll container supports horizontal scrolling and vertical scrolling, and horizontal and vertical scrolling can be set separately through `overflow-x: scroll` and `overflow-y: scroll`.

The following example demonstrates how to create a rolling container:

```html
<div style={{ width: '100px', height: '100px', overflow:'scroll' }}>
  <p>
    The overflow property specifies whether to clip content or to add scrollbars
    when an element's content is too big to fit in a specified area.
  </p>
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01DRI45K1OB4W5Mz3ix_!!6000000001666-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-scrollable.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Play Kraken App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/68_687_2b6eb14913b45ac7522637d23acc214c_2d74fdc99be8a021a3f025eb5069a731.png" />
    </div>
  </div>
</div>
