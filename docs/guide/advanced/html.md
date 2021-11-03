# 使用 HTML 格式渲染（SSR）

Kraken 应用的入口是一个 JavaScript 文件，开发一个普通应用通常直接打出一个 JS bundle 或者是 bytecode 文件。考虑到前端 SSR 的场景，开发者往往需要通过服务端渲染等方式加快首屏的渲染速度，这时可以将入口改成 HTML 文件，以支持 SSR 渲染 Kraken 应用。

## 简单的例子

```html
<html>
  <head>
    <title>Kraken App</title>
  </head>
  <body>
    <div
      style="box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; align-content: flex-start; border-width: 0vw; border-style: solid; border-color: black; margin: 26.6667vw 0vw 0vw; padding: 0vw; min-width: 0vw; align-items: center;"
    >
      <img
        src="https://img.alicdn.com/imgextra/i1/O1CN01CUE2IL1FdAGnYPawX_!!6000000000509-2-tps-350-116.png"
        style="height: 24vw; margin-bottom: 2.6667vw;"
      />
      <span
        style="box-sizing: border-box; display: block; font-size: 6vw; white-space: pre-wrap; font-weight: bold; margin: 2.6667vw 0vw;"
        >Welcome to Your Kraken App</span
      >
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

**渲染效果：**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN01U44xcT1PCHDfXyXPz_!!6000000001804-2-tps-750-1680.png" />

  <div className="preview-tips">
    <div className="preview-title">
      请选择以下任意一种方式预览：
    </div>
    <div className="preview-row">
      <div>
        1. 安装 <a href="/guide#快速体验-kraken">Kraken CLI</a>，然后复制以下命令到命令行中运行：
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/html-demo.html
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. 在 Android 手机上先下载 <a href="/guide#kraken-playground" >Kraken Playground App</a>，然后打开 App 扫描下方二维码预览：
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01xpUopt1LdyiEmVgi5_!!6000000001323-2-tps-400-400.png" />
    </div>
  </div>
</div>
