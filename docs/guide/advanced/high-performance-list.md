# 实现一个高性能长列表

在 Web 中，实现一个高性能的长列表容器是一件令人困扰的事情。Kraken 内置了 `display: sliver` 的扩展布局方式，方便前端开发者实现一个带有回收特性的高性能列表容器。

## 简单的例子

```js
const container = document.createElement('div');
// 修改 display 为 sliver.
container.style.display = 'sliver';
// 必须指定渲染容器节点滚动方向的尺寸(height).
container.style.height = '300px';

// 创建 100 个子节点.
for (let i = 0; i < 100; i++) {
  const ele = document.createElement('div');
  ele.style.background = i % 2 ? '#fff' : '#e6e6e6';
  // Sliver 元素默认滚动方向为垂直方向
  // 它的子元素在水平方向上的尺寸(width)会被自动撑满.
  ele.style.padding = '35rpx 60rpx';
  ele.appendChild(document.createTextNode(`第 ${i + 1} 个元素`));

  // 模拟内部元素高度不定场景
  if (i % 3 === 0) {
    const img = new Image();
    img.src =
      'https://gw.alicdn.com/tfs/TB1.A6OslBh1e4jSZFhXXcC9VXa-229-255.png';
    img.width = '50px';
    ele.appendChild(img);
  }

  container.appendChild(ele);
}

document.body.appendChild(container);
```

**渲染效果**：

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i4/O1CN01AMUGBt1bpSRjWwYdO_!!6000000003514-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-high-performance-list.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="#" target="_blank">Kraken Playground App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i1/O1CN01eX1cyI1vCnKNgkfO4_!!6000000006137-2-tps-260-260.png" />
    </div>
  </div>
</div>

这样一个简单的 Sliver 滚动列表就可以工作了，当你向下滚动的时候，Kraken 会动态生成对应的 RenderObject 并同时释放已经移出可视区域（Viewport）的节点对应的 RenderObject。

## 渐进式支持

目前 `display: sliver` 仅在 Kraken 中得到支持，如果你希望将一份前端代码复用到 Kraken、浏览器等多端，还需要做一些兼容，以 React / Rax 组件封装为例：

> 以下代码仅作参考。

```js
// ScrollView 组件的部分实现
const isKraken = typeof kraken !== 'undefined';
// ...
const defaultStyle = {
  // ...
};

export default function ScrollView(props) {
  const { children, style } = props;
  const styleToRender = {
    display: isKraken ? 'sliver' : 'block',
    ...defaultStyle,
    ...style,
  };
  return (
    <div {...props} style={style}>
      {props.children}
    </div>
  );
}
```

## 与流式布局的差异与常见问题

1. Sliver 容器默认滚动方向为垂直方向 (column)，如果希望实现水平的 Sliver 容器，可以通过增加 `sliver-direction: row` 来实现。
2. 渲染容器节点滚动方向（主轴）的尺寸（width / height）必须指定，因为 Sliver 容器内部的元素并不会将主轴空间撑开，这也是与流式布局的盒子有差异的地方。
3. Sliver 容器的子元素在滚动方向垂直的方向（交叉轴方向）上的尺寸会被自动拉伸为 Sliver 容器的尺寸。

## API 参考

更多细节请跳转到 [Sliver API](/api/increase/sliver) 文档查看。
