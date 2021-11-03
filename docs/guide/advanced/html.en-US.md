# Use HTML format rendering (SSR)

The entrance of the Kraken application is a JavaScript file. When developing an ordinary application, you usually directly type a JS bundle or a bytecode file. Considering the front-end SSR scenario, developers often need to speed up the rendering of the first screen through server-side rendering and other methods. At this time, the entry can be changed to an HTML file to support SSR rendering of Kraken applications.

## Simple example

```html
<html>
  <head>
    <title>Kraken App</title>
  </head>
  <body>
    <div
      style="box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; align-content: flex-start; border-width: 0vw; border-style: solid; border - color: black; margin: 26.6667vw 0vw 0vw; padding: 0vw; min-width: 0vw; align-items: center;"
    >
      <img
        src="https://img.alicdn.com/imgextra/i1/O1CN01CUE2IL1FdAGnYPawX_!!6000000000509-2-tps-350-116.png"
        style="height: 24vw; margin-bottom: 2.6667vw;"
      />
      <span
        style="box-sizing: border-box; display: block; font-size: 6vw; white-space: pre-wrap; font-weight: bold; margin: 2.6667vw 0vw;"
        >Welcome to Your Kraken App
      </span>
      <span
        style="box-sizing: border-box; display: block; font-size: 4.8vw; white-space: pre-wrap; margin: 1.0667vw 0vw; color: rgb(85, 85, 85);"
        >More information about Kraken</span
      >
      <span
        style="box-sizing: border-box; display: block; font-size: 4.8vw; white-space: pre-wrap; margin: 1.0667vw 0vw; color: rgb(85, 85, 85);"
        >Visit http://openkraken.com/</span
      >
    </div>
    <script>
      console.log('eval JavaScript!');
    </script>
  </body>
</html>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01U44xcT1PCHDfXyXPz_!!6000000001804-2-tps-750-1680.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/html-demo.html
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01xpUopt1LdyiEmVgi5_!!6000000001323-2-tps-400-400.png" />
    </div>
  </div>
</div>
