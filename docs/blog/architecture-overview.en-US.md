# Architecture Overview

## Beginning

Kraken is a self-drawn rendering engine based on Flutter. It uses W3C standard HTML, CSS, and JavaScript to generate GUI pictures through a series of calculations, and supports real-time interaction of pictures through JavaScript.

```
(HTML+CSS+JS) + Rendering = Pixel.
```

To achieve this goal, the intermediate process requires very complex calculations. In order to ensure that users can see the interface faster, the entire system must be completed within one frame, otherwise the page will be stuck.

In order to ensure the high performance of the project, it can be better maintained and updated. We need to divide the entire complex computing process into different stages through system design, and design a dedicated data structure to achieve efficient updates in different stages. .

## Technical solution based on Flutter

It is difficult to complete a self-drawn rendering engine from 0, so the Kraken team chose to work with the existing construction of the community. Flutter from Google is an excellent cross-end rendering engine, but it does not support JavaScript nor W3C standard rendering. Therefore, the Kraken team chose to use the underlying facilities that Flutter has built, and then conduct secondary development on the upper layer of Flutter, and then develop a rendering engine based on the W3C standard.

Based on the architecture diagram provided by Flutter, Kraken will build its own module starting from the Painting layer, and will always maintain compatibility with the Flutter Painting layer to continuously obtain the improvement brought by the underlying upgrade of Flutter.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406152417.jpg" width="500" />

This article will start with the most basic input and gradually expand the content of the Kraken system layered design.

## Basic Input: HTML/CSS & JavaScript

Like browsers, Kraken also uses HTML/CSS & JavaScript to implement page layout. Among them, HTML/CSS is used to describe the structure and style of the page, while JavaScript is responsible for manipulating and processing data.

```html
<style>
  .container {
    width: 200px;
    height: 200px;
  }
</style>

<div class="container">
  Hello World !
</div>

<script>
  let container = document.getElementById('container');
  container.addEventListener('click', function() {
    console.log('clicked');
  });
</script>
```

## DOM structure generation

For the appealed data, the first step the rendering engine starts is processing the HTML. Students who are familiar with HTML know that HTML is composed of multiple different tags. Tags and tags can be nested and at the same level, and they form a tree-like structure.

By parsing HTML and obtaining the structural semantics contained in HTML, the rendering engine obtains a tree-like data structure containing the relationship between tags. In the WhatWG standard, it is called DOM (Document Object Model) Tree.

```
HTML --> Parser --> DOM Tree
```

There is a 1:1 mapping between tags in the DOM Tree and HTML. The tag name and attribute value of each tag will be mapped to the DOM tree one by one. DOM Tree is a data structure representation of HTML.

## Double Layer DOM Tree - Compromise for Cross-Language Communication

Because it is based on Flutter, the implementation of Kraken's main rendering layer is developed in the Dart language. The JavaScript engine and Binding API are developed in C/C++. So frequent communication between C/C++ and Dart is essential.

Dart provides mutual calls between FFI function implementation and C/C++, and the average time is 0.02ms for a single time. However, for the page rendering process, there will be thousands of mutual calls for the first page initialization, so the single time consumption of 0.02 ms is still unacceptable.

Therefore, Kraken merges multiple calls into a set of invocations, which are then sent from C/C++ to Dart for processing at one time.

At the same time, in order to reduce the frequency of communication between each other, C/C++ and Dart each have a DOM tree, which is always synchronized, so that any calls related to the tree structure do not need to go through the cross-language channel.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406153912.jpg" width="800" />

## DOM Tree based CSS

The prerequisite for CSS to work is to have its matching DOM node. Pixel-level manipulation of individual nodes is an essential step if a rendering system wishes to give users more flexible control over the UI they create.

The CSS code appealed is to set each HTML tag with the `class="container"` attribute to be 200px wide and 200px high.

```css
.container {
  width: 200px;
  height: 200px;
}
```

CSS text describes a way to apply a set of style rules to which type of tag.

```
[Selector] {
Rule 1: Rule Content
Rule 2: Rule Content
}
```

These style rules will undergo a series of transformation processes through a Parser to generate CSS Rules objects. The selector-based rules are then applied to Elements and stored in properties that contain style information for each Element.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220405172221.jpg" width="400" />

## Calculate the size of each Element - Layout stage

After the style information required by each Element is stored in properties, then the size occupied by each Element in the page can be calculated based on this information.

Due to the subsequent layout and drawing operations, size-related data is generated. At the same time, for some complex layout operations, such as `position: absolute` and `z-index`, more complex processing will be involved. Therefore, a separate set of data structures is needed to handle these processes, rather than all being coupled to Element. Here we call this data structure RenderObject, and the tree composed of it is called RenderObject Tree.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406154459.jpg" width="600" />

The rendering engine will call the `PipelineOwner.flushLayout` method in each frame, call the `layout()` of each RenderObject from top to bottom for layout, and calculate the size of each RenderObject from top to bottom.

If the CSS contains size-related properties, such as width and height, it will affect the final size.

There are many layout rules defined by CSS, and there will be a separate article to introduce this topic later.

Of course, there will be some optimization methods here. If unnecessary, the Layout method of each RenderObject will not be called, which will be explained in detail later.

## Add 100 million dots of detail in the frame - Paint stage

When the size of each element is determined, the frame of the entire page is built, and the next step is to fill in the details in the frame.

The operation of Paint will be based on the pixel coordinates calculated in the Layout stage as the base point, and then call the drawing API to draw.

The execution process of Paint is very similar to Layout. When the rendering engine calls all Layout operations in each frame, it will call the `PipelineOwner.flushPaint` method to perform the paint operation.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406154734.jpg" width="700" />

If all drawing operations are performed on a single drawing, then all paint calls will be repeated every frame, which can severely impact performance.

Therefore, it is necessary to introduce a multi-layer design scheme, that is, to layer the drawing operations of the entire page, and combine multiple scattered drawing operations into the same layer content. At the same time, we call a single layer a Layer, and a tree structure composed of multiple layers is called a Layer tree.

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220405183825.jpg" width="700" />

Usually the rendering engine will take different rendering actions for different CSS properties. For color, background, and border, these drawings are relatively simple, and only take effect on the properties of a single Element. The drawing API will be called directly to draw the content to the current Layer. For a scrolling scene, a large number of RenderObjects will be drawn, and a Layer will be generated separately to cache most of the drawing content, which can effectively improve the scrolling frame rate. This also contains a lot of technical details, and there will be separate articles for analysis in the future.

## Integration with Flutter

When the construction of the Layer tree is completed, Kraken has completed the integration with Flutter. The next step is to send the Layer layer to the Flutter Engine, which generates the final image.

The final architecture of the integration of Kraken and Flutter is as follows:

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406122844.jpg" width="600" />

## Summary

This article introduces the main layered design functions of Kraken and gives a brief introduction. The Kraken team will regularly release the specific work details and thinking of each layer.
