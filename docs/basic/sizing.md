# 尺寸与边距

在页面渲染时 Kraken 基于 [W3C 的盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model?spm=a2c7j.-zh-docs-styles-common-styles.0.0.3f95bcbbzSH3n5) 将所有标签表示为一个个矩形的盒子。 每个盒子由四个部分组成，其效用由它们各自的边界所定义如图，与盒子的四个组成区域相对应，每个盒子有四个边界：_内容边界_ _Content edge_、_内边距边界_ _Padding Edge_、_边框边界_ _Border Edge_、_外边框边界_ _Margin Edge_。

![](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/184/1615362804222-5c85b970-f1f5-4d09-a386-139fb71c043d.png#align=left&display=inline&height=340&margin=%5Bobject%20Object%5D&originHeight=340&originWidth=377&size=0&status=done&style=none&width=377)

对应 CSS 属性来说，`width`, `height` 描述标签的宽高，`padding` 描述标签的内边距，`margin` 描述标签的外边距。

Kraken 支持的与尺寸边距相关的所有属性请参考[开发文档](/development/styles/boxmodel)。

**示例：**

```js
<div style={{ padding: '20px' }}>
  {/* 固定尺寸 */}
  <div style={{ width: '25vw', height: '100px', backgroundColor: 'pink' }}>
    固定宽高
  </div>

  {/* 最小最大尺寸 */}
  <div
    style={{
      width: '150px',
      height: '200px',
      minWidth: '180px',
      maxHeight: '100px',
      backgroundColor: 'lightblue',
    }}
  >
    最小宽度 最大高度
  </div>

  {/* 内外边距 */}
  <div
    style={{
      width: '200px',
      height: '100px',
      padding: '20px',
      margin: '20px',
      backgroundColor: 'lightgreen',
    }}
  >
    内边距 外边距
  </div>
</div>
```

**渲染效果：**

<img src="https://img.alicdn.com/imgextra/i4/O1CN01pnq07I1yypiPZIQpG_!!6000000006648-2-tps-700-720.png" width=350 />
