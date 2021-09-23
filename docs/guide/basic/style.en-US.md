# Structure and style

Kraken implements W3C standard HTML tags and CSS styles, so you can use Web development methods to write page structure and styles.

## Build the page structure

Kraken supports most commonly used standard HTML tags (for all supported tags, please refer to [Development Document](/en-US/api/tags)). Using these tags can help us build the basic structure of the page.

The following example demonstrates how to write a simple blog post structure using native HTML tags:

**Example:**

```js
<div>
  <div>Introduction to Kraken</div>
  <div>2021-1-1</div>
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png" />
  </div>
  <div>
    Kraken is a high-performance rendering engine based on W3C standards. The
    bottom layer of Kraken is based on Flutter Perform rendering and ensure
    multi-end consistency through its self-drawn rendering feature. The upper
    layer is based on W3C Standard implementation, with a very large front-end
    developer ecosystem.
  </div>
</div>
```

## Add style

Kraken supports most of the commonly used CSS styles (for all supported styles, please refer to [Development Document](/en-US/api/styles)). Next, we will continue to add styles to the HTML code example of the blog post example above:

> For the convenience of demonstration, the code examples uniformly use the [JSX syntax](https://zh-hans.reactjs.org/docs/introducing-jsx.html) supported by React / Rax to set the inline style.

**Example:**

```js
<div style={{ margin: '20px' }}>
  <div style={{ fontSize: '30px', margin: '10px 0' }}>
    Kraken getting started tutorial
  </div>
  <div style={{ fontSize: '14px', color: '#666' }}>2021-1-1</div>
  <div style={{ margin: '10px 0' }}>
    <img
      style={{ width: '100%' }}
      src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png"
    />
  </div>
  <div style={{ fontSize: '16px' }}>
    Kraken is a high-performance rendering engine based on W3C standards. The
    bottom layer of Kraken is based on Flutter Perform rendering and ensure
    multi-end consistency through its self-drawn rendering feature. The upper
    layer is based on W3C Standard implementation, with a very large front-end
    developer ecosystem.
  </div>
</div>
```

**Rendering effect**:

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01l9K7WT1PUb17VCz17_!!6000000001844-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-styles.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01pQIRh51KGmzur4LOQ_!!6000000001137-2-tps-200-200.png" />
    </div>
  </div>
</div>
