# 结构与样式

Kraken 中实现了 W3C 标准的 HTML 标签与 CSS 样式，因此可以完全使用 Web 开发的方式来书写页面结构与样式。

## 搭建页面结构

Kraken 支持大部分常用的标准 HTML 标签（具体标签请参考此[文档](/development/tags)），使用这些标签可以帮我们搭建出页面的基本结构。

以下例子演示了如何使用原生 HTML 标签写一个简单的博客文章结构：

**示例：**

```js
<div>
  <div>帖子标题</div>
  <div>发表日期</div>
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN014crkxU1tk6u8PpEat_!!6000000005939-2-tps-400-300.png" />
  </div>
  <div>
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文
  </div>
</div>
```

## 添加样式

Kraken 支持大部分常用的 CSS 样式（具体样式请参考[文档](/development/styles))，接下来我们继续在上面博客文章示例的 HTML 代码示例上添加样式：

> 为方便演示，示例中统一使用 React / Rax 支持的 [JSX 语法](https://zh-hans.reactjs.org/docs/introducing-jsx.html)来设置内联 style。

**示例：**

```js
<div
  style={{
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  }}
>
  <div style={{ fontSize: '30px', fontStyle: 'italic', margin: '10px 0' }}>
    帖子标题
  </div>
  <div style={{ fontSize: '14px', color: '#666' }}>发表日期</div>
  <div style={{ margin: '10px 0' }}>
    <img
      style={{ width: '100%' }}
      src="https://img.alicdn.com/imgextra/i1/O1CN014crkxU1tk6u8PpEat_!!6000000005939-2-tps-400-300.png"
    />
  </div>
  <div style={{ fontSize: '16px' }}>
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文 正文
    正文 正文 正文 正文
  </div>
</div>
```

**渲染效果**：

<img width="365" src="https://img.alicdn.com/imgextra/i4/O1CN01yT1WnN2209htINZeG_!!6000000007057-2-tps-730-1096.png" />
