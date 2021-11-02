# 开发一个渲染插件

渲染插件可用于给 Kraken 添加额外的渲染能力支持，例如使用 `RenderTexture` 实现一个视频插件，然后在 Kraken 页面中来播放视频。

渲染扩展的基础是使用 Flutter RenderObject 做为载体。如果你希望通过 Flutter Widget 来扩展渲染，可以使用这里的方法来实现： [使用 Fluter Widget 自定义元素](/guide/advanced/widget-custom-element)

## Example

https://github.com/openkraken/plugins/tree/main/packages/kraken_video_player

## 基础

Kraken 中使用 Kraken 本身所实现的 Element 来管理 RenderObject。一个 Kraken 渲染插件就是通过实现一个 Element 来管理和操作 RenderObject，然后通过 RenderObject 来实现渲染。

Kraken 提供了非常简单的方式，可以让用户直接在 JS 环境中，直接读取和方法使用 Dart 实现的 Kraken Element 上的任何方法和属性。因此不需要任何 JS 胶水代码来进行整合，只需要编写 Dart 代码就可以完成所有的工作。

### 管理 RenderObject

例如我们编写一个 VideoElement，来实现 `<video />` 标签。播放器的底层实现在这里不做讨论，在这里我们主要是演示如何将生成和管理 RenderObject。

```dart
class VideoElement extends Element {
  VideoElement(int targetId, Pointer<NativeEventTarget> nativePtr,
      ElementManager elementManager,
      {required Map<String, dynamic> defaultStyle})
      : super(targetId, nativePtr, elementManager,
            isIntrinsicBox: true,
            repaintSelf: true,
            defaultStyle: defaultStyle) {
  }

  TextureBox? _textureBox;
  VideoPlayerController? controller;

  // Called when this element is append into document tree, and ready to paint.
  @override
  void willAttachRenderer() {
    super.willAttachRenderer();
    renderVideo();
  }

  // Attach TextureBox renderObject into document renderObject tree.
  void renderVideo() {
    _textureBox = TextureBox(textureId: 0);
    if (childNodes.isEmpty) {
      addChild(_textureBox!);
    }
  }

  // Called when this element is remove from document tree.
  @override
  void didDetachRenderer() {
    super.didDetachRenderer();
    _textureBox = null;

    if (controller != null) {
      controller!.dispose().then((_) {
        controller = null;
      });
    }
  }
}
```

### 添加属性

在 JS 环境中，如果一个 Element 被 JS 所访问属性，`getProperty` 这个回调就会被触发，并传入 JS 所访问的属性名。在 Dart 中直接进行返回，就可以将值传回 JS，并作为 JS 访问的返回值。

```javascript
let video = document.createElement('video');
console.log(video.isPlaying); // true
```

```dart
class VideoElement extends Element {
  VideoElement(int targetId, Pointer<NativeEventTarget> nativePtr,
      ElementManager elementManager,
      {required Map<String, dynamic> defaultStyle})
      : super(targetId, nativePtr, elementManager,
            isIntrinsicBox: true,
            repaintSelf: true,
            defaultStyle: defaultStyle) {
  }

  // ...

  bool get isPlaying => true;
  @override
  dynamic getProperty(String key) {
    var value;
    switch (key) {
      case 'isPlaying':
        return isPlaying;
    }

    return value ?? super.getProperty(key);
  }
}

```

### 添加函数

给 Element 添加自定义函数的方法和添加属性类似，只需要返回一个 Dart 函数，就可以在 JS 环境中也返回一个函数，当 JS 返回的函数被调用时，Dart 函数也会被调用。

```javascript
let video = document.createElement('video');
video.play(); // playing...
```

```dart
class VideoElement extends Element {
  VideoElement(int targetId, Pointer<NativeEventTarget> nativePtr,
      ElementManager elementManager,
      {required Map<String, dynamic> defaultStyle})
      : super(targetId, nativePtr, elementManager,
            isIntrinsicBox: true,
            repaintSelf: true,
            defaultStyle: defaultStyle) {
  }

  // ...

  void play() {
    print('playing...');
  };

  @override
  dynamic getProperty(String key) {
    switch (key) {
      case 'play':
        return (List<dynamic> argv) => play();
    }

    return value ?? super.getProperty(key);
  }
}
```

### 添加异步函数

添加异步调用的方式和添加函数类似，唯一的区别在于，返回的函数是一个返回类型为 Future 的函数。这个时候，JS 函数返回值也是一个 Promise 对象。

**Example: https://github.com/openkraken/plugins/blob/main/packages/kraken_camera/lib/camera_element.dart**

```javascript
let video = document.createElement('video');
let p = video.takePicture();
p.then(() => {
  console.log('picture saved');
}).catch(err => console.log(err));
```

```dart
class VideoElement extends Element {
  VideoElement(int targetId, Pointer<NativeEventTarget> nativePtr,
      ElementManager elementManager,
      {required Map<String, dynamic> defaultStyle})
      : super(targetId, nativePtr, elementManager,
            isIntrinsicBox: true,
            repaintSelf: true,
            defaultStyle: defaultStyle) {
  }

  // ...

  Future<void> _takePicture(value) async {
    Directory tempDir = await getTemporaryDirectory();
    String tempPath = tempDir.path;
    await controller!.takePicture(tempPath + '/' + value);
  }

  @override
  dynamic getProperty(String key) {
    switch(key) {
      case 'takePicture':
        return (List<dynamic> argv) async => await _takePicture(argv[0]);
    }
    return super.getProperty(key);
  }
}
```

### 注册 Element 到 JS 环境

通过下面的代码，就可以在 JS 环境中，去创建自定义的 Element。

```dart
Kraken.defineCustomElement('x-video', (int targetId, Pointer<NativeEventTarget> nativeEventTarget, ElementManager elementManager) {
  return VideoElement(targetId, nativeEventTarget, elementManager);
});
```