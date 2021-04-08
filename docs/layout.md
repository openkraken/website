# 布局

在编排页面结构时面临的一个核心问题是如何给页面中的标签排版，页面排版需要用到 CSS 中布局相关的能力，目前 CSS 标准中支持的布局方式主要有:

1. [流式布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)
2. [弹性盒布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
3. [定位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)
4. [浮动](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)
5. [网格布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
6. [多列布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

Kraken 支持了前三种目前 Web 开发中主流使用的布局方式，以下结合示例介绍下如何使用。（对于更详细的 CSS 布局能力介绍可以参考此[文档](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Introduction)）

## 流式布局

如果未使用任何 CSS 样式来改变标签的排版方式，页面内的标签将按照正常的布局流来展示。

所有标签在布局方式上都被默认分为[块级](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)（如 `<div>`）与[行内](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)（如`<span>`）两种显示类型，同时可以通过 CSS 的 [display 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 改变标签默认的显示类型。

块级标签的排版规则是会在上一个标签下另起一行，并按照样式上设置的 margin 来分隔；而行内标签则不会另起一行，只要在其父级块级标签的宽度内有足够的空间，它们与其他行内标签被安排在同一行。如果空间不够，则将被移到新的一行。

**示例：**

```js
<div style={{ marginLeft: '-20px' }}>
  {/* 块级 */}
  <div style={{ textAlign: 'center' }}>
    {/* 行内 */}
    <p
      style={{
        display: 'inline-block',
        backgroundColor: 'pink',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
    {/* 行内 */}
    <span
      style={{
        display: 'inline-block',
        backgroundColor: 'lightblue',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
  </div>

  {/* 块级 */}
  <div style={{ textAlign: 'center' }}>
    {/* 行内 */}
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'orange',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
    {/* 行内 */}
    <span
      style={{
        display: 'inline-block',
        backgroundColor: 'lightgreen',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
  </div>
</div>
```

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01nJgGq21MiqUQ27w25_!!6000000001469-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-flow-layout.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken Playground App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01BHfjbd1mDri05zcYk_!!6000000004921-2-tps-200-200.png" />
    </div>
  </div>
</div>

## 弹性盒布局

长久以来，CSS 布局中唯一可靠且跨浏览器兼容的布局方式只有流式布局、浮动和定位。这几种布局方式能满足大部分布局需求，但是由于它们在布局能力上先天的局限性，使得要实现某些布局不够直观与灵活，如以下场景：

1. 在父容器中垂直居中一个块级标签。
2. 使容器的所有子项占用等量的可用宽度/高度，而不管容器中有多少宽度/高度可用。
3. 使多列布局中的所有列占用相同的高度，即使每列中包含的内容量不同。

于是在 CSS3 标准中引入了弹性盒（Flexbox）的布局方式，解决了诸多之前布局方式的局限。详细的概念介绍请参考此[文档](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)。

Kraken 支持的与弹性盒布局相关的所有属性请参考[开发文档](/api/styles/layout#弹性盒布局)。

以下通过示例介绍简单用法：

**示例：**

```js
<div>
  {/* 横向排版: 水平等间距 & 垂直居中 */}
  <div
    style={{
      display: 'flex',
      height: '100px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ width: '50px', height: '50px', backgroundColor: 'orange' }} />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* 横向排版: 换行 & 行间等间距 & 水平等间距 */}
  <div
    style={{
      display: 'flex',
      height: '150px',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-evenly',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'orange' }}
    />
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* 纵向排版: 垂直等间距 & 水平居中 */}
  <div
    style={{
      display: 'flex',
      height: '200px',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ width: '50px', height: '50px', backgroundColor: 'orange' }} />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* 横向排版: 子项宽度按比例拉伸 & 子项高度自动拉伸 */}
  <div
    style={{
      display: 'flex',
      height: '100px',
      justifyContent: 'space-evenly',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ flexGrow: 1, backgroundColor: 'orange' }} />
    <div style={{ flexGrow: 2, backgroundColor: 'lightblue' }} />
    <div style={{ flexGrow: 3, backgroundColor: 'lightgreen' }} />
  </div>
</div>
```

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN012H2bAt1yMMRjwhIKt_!!6000000006564-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-flex-layout.js 
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken Playground App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01sBl1yz1tCfzWbBGWB_!!6000000005866-2-tps-200-200.png" />
    </div>
  </div>
</div>

## 定位

有时候我们需要将标签重叠在另一个标签上面，或者滚动时始终与视窗保持在同一位置，这时就需要用到 CSS 中的定位能力。

CSS 提供了五种定位方式：

1. static：静态定位，默认值，标签在文档流中按当前的位置布局，指定 top, right, bottom, left 和 z-index 属性无效。

2. relative：相对定位，标签先放置在未添加定位时的位置，再在不改变页面布局的前提下调整标签位置（因此会在此标签未添加定位时所在位置留下空白）

3. absolute: 绝对定位，标签会被移出正常文档流，并不为标签预留空间，通过指定标签相对于最近的非 static 定位祖先标签的偏移，来确定标签位置。

4. fixed：固定定位，标签会被移出正常文档流，并不为标签预留空间，而是通过指定标签相对于屏幕视窗（Viewport）的位置来指定标签位置。标签的位置在屏幕滚动时不会改变。

5. sticky: 粘性定位，标签根据正常文档流进行定位，然后相对它的最近滚动祖先和  [containing block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block) (最近块级祖先)，基于 top, right, bottom 和  left 的值进行偏移。偏移值不会影响任何其他标签的位置。

Kraken 支持的与定位相关的所有属性请参考[开发文档](/development/styles/position)。

**示例：**

```js
<div style={{ padding: '20px', position: 'relative' }}>
  {/* 静态定位 */}
  <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink',
      marginTop: '20px',
    }}
  >
    1. 静态定位
  </div>

  {/* 相对定位 */}
  <div
    style={{
      position: 'relative',
      top: '20px',
      width: '100px',
      height: '100px',
      backgroundColor: 'lightblue',
      marginTop: '20px',
    }}
  >
    2. 相对定位
  </div>

  {/* 绝对定位 */}
  <div
    style={{
      position: 'absolute',
      top: '140px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'lightgreen',
      marginTop: '20px',
    }}
  >
    3. 绝对定位
  </div>

  {/* 固定定位 */}
  <div
    style={{
      position: 'fixed',
      top: '20px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'orange',
      marginTop: '20px',
    }}
  >
    4. 固定定位
  </div>

  {/* 固定定位 */}
  <div
    style={{
      position: 'sticky',
      top: '20px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'mediumpurple',
      marginTop: '20px',
    }}
  >
    5. 粘性定位
  </div>
</div>
```

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN0165tLbR22Qig4BSSI9_!!6000000007115-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-position.js 
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken Playground App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01Ot39kM1yCHjKKSEmL_!!6000000006542-2-tps-200-200.png" />
    </div>
  </div>
</div>
