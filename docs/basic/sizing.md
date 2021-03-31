# 尺寸与边距

Kraken 通过[盒模型](/development/styles/boxmodel) 的方式给每个标签设置尺寸与边距。

简单来说通过 `width`, `height` 来设置宽高，`padding` 设置内边距，`margin` 设置外边距。同时在设置尺寸与边距时支持这些[单位](/development/styles/unit)。

**示例：**

```js
<div style={{ padding: '20px' }}>
  {/* 固定尺寸 */}
  <div
    style={{
      width: '25vw',
      height: '100px',
      backgroundColor: 'powderblue',
    }}
  >
    aaa
  </div>

  {/* 最小最大尺寸 */}
  <div
    style={{
      width: '100px',
      height: '200px',
      minWidth: '150px',
      maxHeight: '100px',
      backgroundColor: 'steelblue',
    }}
  >
    bbb
  </div>

  {/* 内外边距 */}
  <div
    style={{
      width: '200px',
      height: '100px',
      padding: '20px',
      margin: '20px',
      backgroundColor: 'cadetblue',
    }}
  >
    ccc
  </div>
</div>
```

**渲染效果：**

<img src="https://img.alicdn.com/imgextra/i1/O1CN01kKQpq02AM9eiuhaZi_!!6000000008188-2-tps-740-740.png" width=370 />
