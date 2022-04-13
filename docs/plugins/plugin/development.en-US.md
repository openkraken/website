# develop plugin

## Initialize the project project

Create a flutter plugin scaffold with the `flutter create` command. Then add our code to this plugin scaffolding. Now we need to add some configurations so that when building, all dependencies are packaged into the App.

```shell
flutter create --template=plugin ./my_kraken_plugin
```

## Develop plugins

Plugins can contain custom API functions, or Elements extended by Flutter Widgets.

For details, please refer to:

- [Add custom API to JS runtime environment](/en-US/guide/advanced/custom-js-api)
- [Using Flutter Widget Custom Elements](/en-US/guide/advanced/widget-custom-element)

## Publish plugin

```shell
flutter pub publish
```
