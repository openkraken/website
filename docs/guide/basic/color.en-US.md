# Color and background

The color `color` acts on the font, and the background `background` can act on any element (including text). For the color and background-related attributes supported by Kraken, please refer to the corresponding [Development Document](/en-US/api/styles/background).

For colors, it supports multiple formats such as color keywords, rgba, hexadecimal, etc. For details, please refer to the corresponding [Development Document](/en-US/api/styles/unit#css-color unit).

**Example:**

```js
<div>
  {/* Keyword font color */}
  <div style={{ color: 'blue', fontSize: '16px' }}>Keyword color</div>

  {/* Hexadecimal font color */}
  <div style={{ color: '#F40', fontSize: '20px' }}>Hexadecimal color</div>

  {/* rgba font color */}
  <div style={{ color: 'rgba(155, 85, 150, 0.9)', fontSize: '24px' }}>
    rgba color
  </div>

  {/* background color */}
  <div
    style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}
  />

  {/* Background picture */}
  <div
    style={{
      width: '150px',
      height: '150px',
      backgroundImage:
        'url(https://kraken.oss-cn-hangzhou.aliyuncs.com/images/60x60-green.png)',
    }}
  />
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01XtPcnn29zFr1Bz0Zl_!!6000000008138-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, and then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-color.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01fBBI8s297fVxwnJoW_!!6000000008021-2-tps-200-200.png" />
    </div>
  </div>
</div>
