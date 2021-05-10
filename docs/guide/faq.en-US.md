# FAQ

## Reference local image path not found

Local image loading needs to rely on Flutter’s assets mechanism. Please refer to [Flutter Documentation](https://flutter.dev/docs/development/ui/assets-and-images). You need to declare the image file to pubspec.yaml in order to Obtain the correct index relationship when packaging.

Reference: [https://github.com/openkraken/kraken/issues/239](https://github.com/openkraken/kraken/issues/239)

## The problem of using the kraken SDK release package on the Android side

There are some problems with the SDK API. You can use the Widget API to build and test with the Flutter application.

Reference: [https://github.com/openkraken/kraken/issues/235](https://github.com/openkraken/kraken/issues/235)

## macOS installation of Kraken CLI failed

Please use the following method to install

```bash
sudo npm install -g @openkraken/cli --unsafe-perm
```

Or refer to [document](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally/) to install node in the user directory.

Reference: [https://github.com/openkraken/kraken/issues/190](https://github.com/openkraken/kraken/issues/190)

## Windows platform Kraken CLI

Kraken CLI for Windows platform is under development.
