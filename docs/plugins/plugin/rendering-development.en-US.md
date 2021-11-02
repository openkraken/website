# Develop a rendering plugin

Rendering plugins can be used to add additional rendering capabilities to Kraken. For example, use `RenderTexture` to implement a video plugin, and then play the video on the Kraken page.

The basis of rendering extension is to use Flutter RenderObject as a carrier. If you want to extend the rendering through Flutter Widget, you can use the method here to achieve: [Use Fluter Widget custom element](/en-US/guide/advanced/widget-custom-element)

## Example

https://github.com/openkraken/plugins/tree/main/packages/kraken_video_player

## Base

Kraken uses the Element implemented by Kraken itself to manage RenderObject. A Kraken rendering plug-in is to manage and operate RenderObject by implementing an Element, and then implement rendering through RenderObject.

Kraken provides a very simple way to allow users to directly read and use any methods and attributes on the Kraken Element implemented by Dart in the JS environment. So there is no need for any JS glue code to integrate, just write Dart code to complete all the work.

### Manage RenderObject

For example, we write a VideoElement to implement the `<video />` tag. The underlying implementation of the player is not discussed here. Here we mainly demonstrate how to generate and manage RenderObject.

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

### Add attribute

In the JS environment, if an Element has a property accessed by JS, the callback of `getProperty` will be triggered and the property name accessed by JS will be passed in. By returning directly in Dart, the value can be passed back to JS and used as the return value of JS access.

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
      case'isPlaying':
        return isPlaying;
    }

    return value ?? super.getProperty(key);
  }
}

```

### Add function

The method of adding custom functions to Element is similar to adding attributes. You only need to return a Dart function to return a function in the JS environment. When the function returned by JS is called, the Dart function will also be called.

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
      case'play':
        return (List<dynamic> argv) => play();
    }

    return value ?? super.getProperty(key);
  }
}
```

### Add asynchronous function

The way to add an asynchronous call is similar to adding a function. The only difference is that the returned function is a function with a return type of Future. At this time, the return value of the JS function is also a Promise object.

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
    await controller!.takePicture(tempPath +'/' + value);
  }

  @override
  dynamic getProperty(String key) {
    switch(key) {
      case'takePicture':
        return (List<dynamic> argv) async => await _takePicture(argv[0]);
    }
    return super.getProperty(key);
  }
}
```
