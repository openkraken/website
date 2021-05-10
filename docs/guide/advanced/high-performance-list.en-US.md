# Implement a high-performance long list

In the Web, implementing a high-performance long list container is a troublesome thing. Kraken has built-in the extended layout of `display: sliver`, which is convenient for front-end developers to implement a high-performance list container with recycling features.

## Simple example

```js
const container = document.createElement('div');
// Modify display to sliver.
container.style.display = 'sliver';
// The size (height) of the scrolling direction of the rendering container node must be specified.
container.style.height = '100vh';

// Create 100 child nodes.
for (let i = 0; i < 100; i++) {
  const ele = document.createElement('div');
  ele.style.background = i % 2 ? '#fff' : '#e6e6e6';
  // The default scrolling direction of the Sliver element is vertical
  // The size (width) of its child elements in the horizontal direction will be automatically filled.
  ele.style.padding = '35rpx 60rpx';
  ele.appendChild(document.createTextNode(`The ${i + 1} element`));

  // Simulate a scene with variable height of internal elements
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

**Rendering effect**:

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01Wb4AvS1vvg8hF82c5_!!6000000006235-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-high-performance-list.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i1/O1CN01eX1cyI1vCnKNgkfO4_!!6000000006137-2-tps-260-260.png" />
    </div>
  </div>
</div>

Such a simple Sliver scrolling list can work. When you scroll down, Kraken will dynamically generate the corresponding RenderObject and release the corresponding RenderObject of the node that has moved out of the viewport.

## Progressive support

Currently `display: sliver` is only supported in Kraken. If you want to reuse a front-end code to Kraken, browsers, etc., you need to do some compatibility. Take React / Rax component packaging as an example:

> The following code is for reference only.

```js
// Partial implementation of ScrollView component
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

## Differences and common problems with flow layout

1. The default scrolling direction of the Sliver container is the vertical direction (column). If you want to achieve a horizontal Sliver container, you can add `sliver-direction: row` to achieve it.
2. The size (width / height) of the scrolling direction (main axis) of the rendering container node must be specified, because the elements inside the Sliver container will not stretch the main axis space, which is also different from the flow layout box.
3. The size of the child elements of the Sliver container in the direction perpendicular to the scrolling direction (cross-axis direction) will be automatically stretched to the size of the Sliver container.

## API Reference

For more details, please jump to the [Sliver API](/api/enhancement/sliver) document to view.
