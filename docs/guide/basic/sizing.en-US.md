# Dimensions and margins

When the page is rendered, Kraken is based on the [W3C box model](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model?spm=a2c7j.-zh-docs-styles-common -styles.0.0.3f95bcbbzSH3n5) Represent all labels as rectangular boxes. Each box is composed of four parts, and its function is defined by their respective boundaries as shown in the figure, corresponding to the four component areas of the box. Each box has four boundaries: _content boundary_ _Content edge_, _inner margin Border_ _Padding Edge_, _Border Edge_ _Border Edge_, _Outer Border Edge_ _Margin Edge_.

![](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/184/1615362804222-5c85b970-f1f5-4d09-a386-139fb71c043d.png#align=left&display=inline&height=340&margin=%5Bobject %20Object%5D&originHeight=340&originWidth=377&size=0&status=done&style=none&width=377)

Corresponding to the CSS properties, `width`, `height` describe the width and height of the label, `padding` describes the inner margin of the label, and `margin` describes the outer margin of the label.

Please refer to [Development Document](/api/styles/sizing) for all the attributes related to size margins supported by Kraken.

**Example:**

```js
<div>
  {/* Fixed size */}
  <div style={{ width: '25vw', height: '100px', backgroundColor: 'pink' }}>
    Fixed width and height
  </div>

  {/* Minimum and maximum size */}
  <div
    style={{
      width: '150px',
      height: '200px',
      minWidth: '180px',
      maxHeight: '100px',
      backgroundColor: 'lightblue',
    }}
  >
    Minimum width Maximum height
  </div>

  {/* Inner and outer margins */}
  <div
    style={{
      width: '200px',
      height: '100px',
      padding: '20px',
      margin: '20px',
      backgroundColor: 'lightgreen',
    }}
  >
    Inner margin Outer margin
  </div>
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01A33yOu1GtTzqOcw0e_!!6000000000680-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-sizing.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01ZH38q51czMd4AIfb3_!!6000000003671-2-tps-200-200.png" />
    </div>
  </div>
</div>
