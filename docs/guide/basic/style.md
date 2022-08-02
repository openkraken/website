# 结构与样式

Kraken 中实现了 W3C 标准的 HTML 标签与 CSS 样式，因此可以完全使用 Web 开发的方式来书写页面结构与样式。

## 搭建页面结构

Kraken 支持大部分常用的标准 HTML 标签（所有支持的标签请参考[开发文档](/api/tags)），使用这些标签可以帮我们搭建出页面的基本结构。

以下例子演示了如何使用原生 HTML 标签写一个简单的博客文章结构：

**示例：**

```js
<div>
  <div>Kraken 入门教程</div>
  <div>2021-1-1</div>
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png" />
  </div>
  <div>
    Kraken 是一款基于 W3C 标准的高性能渲染引擎。Kraken 底层基于 Flutter
    进行渲染，通过其自绘渲染的特性，保证多端一致性。上层基于 W3C
    标准实现，拥有非常庞大的前端开发者生态。
  </div>
</div>
```

## 添加样式

Kraken 支持大部分常用的 CSS 样式（所有支持的样式请参考[开发文档](/api/styles))，接下来我们继续在上面博客文章示例的 HTML 代码示例上添加样式：

> 为方便演示，代码示例中统一使用 React / Rax 支持的 [JSX 语法](https://zh-hans.reactjs.org/docs/introducing-jsx.html)来设置内联 style。

**示例：**

```js
<div style={{ margin: '20px' }}>
  <div style={{ fontSize: '30px', margin: '10px 0' }}>Kraken 入门教程</div>
  <div style={{ fontSize: '14px', color: '#666' }}>2021-1-1</div>
  <div style={{ margin: '10px 0' }}>
    <img
      style={{ width: '100%' }}
      src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png"
    />
  </div>
  <div style={{ fontSize: '16px' }}>
    Kraken 是一款基于 W3C 标准的高性能渲染引擎。Kraken 底层基于 Flutter
    进行渲染，通过其自绘渲染的特性，保证多端一致性。上层基于 W3C
    标准实现，拥有非常庞大的前端开发者生态。
  </div>
</div>
```

**渲染效果**：

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01l9K7WT1PUb17VCz17_!!6000000001844-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-styles.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="/guide#kraken-playground" >Play Kraken App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01pQIRh51KGmzur4LOQ_!!6000000001137-2-tps-200-200.png" />
    </div>
  </div>
</div>
