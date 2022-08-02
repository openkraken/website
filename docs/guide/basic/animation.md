# 动画

Kraken 提供了 Transition 的能力以便开发者通过该属性来开发一个过渡的动画。

下面提供来一个根据点击来移动球位置的例子，以查看实际 Transition 的效果。

**示例：**

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

**渲染效果**：

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i4/O1CN01HS4uqg1e4gqlXWfxU_!!6000000003818-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-animation.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="/guide#kraken-playground" >Play Kraken App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i2/O1CN01LRf0DP24NAqS1zrFH_!!6000000007378-2-tps-400-400.png" />
    </div>
  </div>
</div>

更详细的 API 请参考[开发文档](/api/styles/transform)。
