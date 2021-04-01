# 结构与样式

Kraken 中实现了 W3C 标准的 HTML 标签与 CSS 样式，因此可以完全使用 Web 开发的方式来书写页面结构与样式。

## 搭建页面结构

Kraken 支持大部分常用的标准 HTML 标签（具体标签请参考此[文档](/development/tags)），使用这些标签可以帮我们搭建出页面的基本结构。

以下例子演示了如何使用原生 HTML 标签写一个简单的博客文章结构：

**示例：**

```js
<div>
  <div>Flutter 入门教程</div>
  <div>2021-1-1</div>
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN014crkxU1tk6u8PpEat_!!6000000005939-2-tps-400-300.png" />
  </div>
  <div>
    Flutter 是 Google 开源的 UI
    工具包，帮助开发者通过一套代码库高效构建多平台精美应用，支持移动、Web、桌面和嵌入式平台。
  </div>
</div>
```

## 添加样式

Kraken 支持大部分常用的 CSS 样式（所有支持的样式请参考[开发文档](/development/styles))，接下来我们继续在上面博客文章示例的 HTML 代码示例上添加样式：

> 为方便演示，示例中统一使用 React / Rax 支持的 [JSX 语法](https://zh-hans.reactjs.org/docs/introducing-jsx.html)来设置内联 style。

**示例：**

```js
<div style={{ margin: '20px' }}>
  <div style={{ fontSize: '30px', margin: '10px 0' }}>Flutter 入门教程</div>
  <div style={{ fontSize: '14px', color: '#666' }}>2021-1-1</div>
  <div style={{ margin: '10px 0' }}>
    <img
      style={{ width: '100%' }}
      src="https://img.alicdn.com/imgextra/i1/O1CN014crkxU1tk6u8PpEat_!!6000000005939-2-tps-400-300.png"
    />
  </div>
  <div style={{ fontSize: '16px' }}>
    Flutter 是 Google 开源的 UI
    工具包，帮助开发者通过一套代码库高效构建多平台精美应用，支持移动、Web、桌面和嵌入式平台。
  </div>
</div>
```

**渲染效果**：

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01x598NQ1TjwkoX4duO_!!6000000002419-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className=".preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/api-styles.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken PlayGround App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i2/O1CN01hwZu731hahNMqsv1S_!!6000000004294-2-tps-370-370.png" />
    </div>
  </div>
</div>
