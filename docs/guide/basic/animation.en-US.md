# Animation

Kraken provides the ability of Transition so that developers can develop a transition animation through this property.

Here is an example of moving the ball position according to the click to see the effect of the actual Transition.

**Example:**

```js
setTimeout(() => {
  const f = document.getElementById('foo');
  f.style.left = '200px';
  f.style.top = '200px';
  f.style.background = 'blue';
}, 1000);

<div
  id="foo"
  style={{
    borderRadius: '50px',
    width: '50px',
    height: '50px',
    background: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all 1s',
  }}
></div>;
```

**Rendering effect**:

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i4/O1CN01HS4uqg1e4gqlXWfxU_!!6000000003818-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-animation.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i2/O1CN01LRf0DP24NAqS1zrFH_!!6000000007378-2-tps-400-400.png" />
    </div>
  </div>
</div>

For more detailed API, please refer to [Development Document](/api/styles/transform).
