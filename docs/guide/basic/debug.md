# 前端代码调试

Kraken 支持通过 Chrome DevTools 进行调试。

注：目前 DevTools 目前仅支持 Element 调试，JS 调试，Network 调试目前还在开发中。

## 打开调试工具

Kraken 在启动之后，会在控制台内显示调试服务的访问地址。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210323142503.jpg" style="max-width:800px"></img>

将 `devtools://` 前缀到地址复制粘贴到 Chrome 浏览器内就可以进行调试。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210323143003.jpeg" style="max-width:800px"></img>

## 在 Android / iOS 设备上打开调试工具

在 Android / iOS 设备上打开调试工具与 PC 有些差异，如果使用在手机上安装 APK 的方式来运行 Kraken 的话，很难在控制台内看到 Kraken 的输出。

除了在控制台的输出，Kraken 也将 `devtools://` 的调试地址自动复制到了粘贴板，只需在手机上将粘贴板里面的内容发送到 PC 上就可以进行调试。

注：请确保手机和 PC 在同一个局域网内，否则可能会出现连接不上的情况。
