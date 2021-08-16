# Integrated developer tools

Kraken supports the use of Chrome DevTools for debugging, which can be turned on by installing `kraken_devtools`.

> Only supports macOS, Android ARM64 platform

## Install

> Developer tool integration currently only supports the use of flutter integration for access, and the SDK integration access method is still under development.

Add the dependency of `kraken_devtools` in the `pubspec.yaml` file.

```
Kraken kraken = Kraken(
  bundleURL:'https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/fed.js',
  devToolsService: ChromeDevToolsService(),
);
```

## how to use

DevTools will start a service, you can use the Chrome DevTools connection to start debugging.
When the service is successfully started, the following log will be output on the console:

```
flutter: Kraken DevTool listening at ws://172.20.10.2:9222
flutter: Open Chrome/Edge and paste following url to your navigator:
flutter: devtools://devtools/bundled/inspector.html?ws=172.20.10.2:9222
```

Paste the address beginning with `devtools://` into the Chrome browser for debugging.
