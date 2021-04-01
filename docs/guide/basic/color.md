# 颜色与背景

颜色 `color` 作用于字体上，背景 `background` 则可作用于任意元素（包含文本），Kraken 支持的颜色与背景相关属性请参考对应的[开发文档](/development/styles/background)。

对于颜色同时支持颜色关键字，rgba，16 进制等多种格式，具体请参考对应的[开发文档](/development/styles/unit#css-颜色单位)。

**示例：**

```js
<div>
  {/* 关键字字体颜色 */}
  <div style={{ color: 'blue', fontSize: '16px' }}>关键字颜色</div>

  {/* 16 进制字体颜色 */}
  <div style={{ color: '#F40', fontSize: '20px' }}>16 进制颜色</div>

  {/* rgba 字体颜色 */}
  <div style={{ color: 'rgba(155, 85, 150, 0.9)', fontSize: '24px' }}>
    rgba 颜色
  </div>

  {/* 背景颜色 */}
  <div
    style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}
  />

  {/* 背景图片 */}
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

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01XtPcnn29zFr1Bz0Zl_!!6000000008138-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/api-color.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken PlayGround App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01eqsSnp1JoqpwHsMkI_!!6000000001076-2-tps-370-370.png" />
    </div>
  </div>
</div>
