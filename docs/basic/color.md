# 颜色与背景

颜色 `color` 作用于字体上，背景可作用于任意元素（包含文本），Kraken 支持的颜色与背景相关属性请参考[文档](http://localhost:8000/development/styles/background)。

对于颜色同时支持颜色关键字，rgba，16 进制等多种格式，具体请参考[文档](/development/styles/unit#css-%E9%A2%9C%E8%89%B2%E5%8D%95%E4%BD%8D)。

**示例：**

```js
<div style={{ padding: '20px' }}>
  {/* 关键字字体颜色 */}
  <div
    style={{
      color: 'blue',
      fontSize: '16px',
    }}
  >
    aaa
  </div>

  {/* 16 进制字体颜色 */}
  <div
    style={{
      color: '#F40',
      fontSize: '20px',
    }}
  >
    bbb
  </div>

  {/* rgba 字体颜色 */}
  <div
    style={{
      color: 'rgba(155, 85, 150, 0.9)',
      fontSize: '24px',
    }}
  >
    ccc
  </div>

  {/* 背景颜色 */}
  <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'steelblue',
    }}
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

<img src="https://img.alicdn.com/imgextra/i3/O1CN01BwVuVT1bpuqHNqTaf_!!6000000003515-2-tps-480-732.png" width=240 />
