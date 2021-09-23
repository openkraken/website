# Front-end code debugging

Kraken supports debugging via Chrome DevTools.

Note: Currently DevTools currently only supports Element debugging, JS debugging, and Network debugging is currently under development.

## Open the debugging tool

After Kraken is started, the access address of the debugging service will be displayed in the console.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210323142503.jpg" style="max-width:800px"></img>

Copy and paste the `devtools://` prefix to the address into the Chrome browser to debug.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20210323143003.jpeg" style="max-width:800px"></img>

## Open the debugging tool on Android / iOS devices

There are some differences between opening the debugging tool on the Android / iOS device and the PC. If you use the method of installing APK on the phone to run Kraken, it is difficult to see the output of Kraken in the console.

In addition to the output on the console, Kraken also automatically copies the debugging address of `devtools://` to the pasteboard. You only need to send the contents of the pasteboard to the PC on the mobile phone to debug.

Note: Please make sure that the mobile phone and the PC are in the same local area network, otherwise the connection may not be possible.
