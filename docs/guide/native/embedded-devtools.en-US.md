# Integrate developer tools

Kraken supports debugging with Chrome DevTools, which can be enabled by integrating the KrakenDevTools tool.
After version 0.10, KrakenDevTools has been integrated into the kraken package.

## Install

> The developer tool integration currently only supports access by using the flutter integration method, and the SDK integration access method is still under development.

```
import 'package:kraken/devtools.dart';

Kraken(
  // ...
  devToolsService: ChromeDevToolsService(),
);
```

## how to use

DevTools starts a service that can be used to start debugging using the Chrome DevTools connection.
When the service starts successfully, the following log will be output to the console:

```
flutter: Kraken DevTool listening at ws://0.0.0.0:9222
flutter: Open Chrome/Edge and paste the following url to your navigator:
flutter: devtools://devtools/bundled/inspector.html?ws=0.0.0.0:9222
```

Open the chrome://inspect page in the Chrome browser to debug.
