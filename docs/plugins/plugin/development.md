# 开发 插件

## 初始化项目工程

通过 `flutter create` 命令来创建一个 flutter plugin 脚手架。然后在这个 plugin 脚手架上添加我们的代码，现在我们需要添加一些配置，让构建的时候，将所有的依赖都打包进 App 中。

```shell
flutter create --template=plugin ./my_kraken_plugin
```

## 开发插件

插件里面可以包含自定义 API 的功能，或者是通过 Flutter Widget 扩展的 Element。

详细可以参考：

- [给 JS 运行环境中添加自定义 API](/guide/advanced/custom-js-api)
- [使用 Flutter Widget 自定义元素](/guide/advanced/widget-custom-element)

## 发布插件

```shell
flutter pub publish
```

即可将插件发布到 pub.dev 上。
