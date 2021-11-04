# 滚动容器

在一个普通的固定尺寸的容器上添加 `overflow: scroll` 就可以创建一个滚动容器。
默认情况下，滚动容器支持横向滚动和纵向滚动，通过 `overflow-x: scroll` 和 `overflow-y: scroll` 可以单独设置横向和纵向的滚动。

下面的例子演示如何创建一个滚动容器：

```html
<div style={{ width: '100px', height: '100px', overflow: 'scroll' }}>
  <p>
    The overflow property specifies whether to clip content or to add scrollbars
    when an element's content is too big to fit in a specified area.
  </p>
</div>
```

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01DRI45K1OB4W5Mz3ix_!!6000000001666-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-scrollable.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="/guide#kraken-playground" >Play Kraken App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/68_687_2b6eb14913b45ac7522637d23acc214c_2d74fdc99be8a021a3f025eb5069a731.png" />
    </div>
  </div>
</div>
