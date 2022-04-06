# Kraken 分层设计

## 前言

Kraken 是一款采用基于 Flutter 而实现的自绘渲染引擎。它使用 W3C 标准的 HTML，CSS，JavaScript，通过一系列的计算，生成 GUI 画面，并支持通过 JavaScript 实现对画面的实时交互。

```
(HTML+CSS+JS) + Rendering = Pixel.
```

要达成这一目标，中间过程需要很复杂的计算才能完成，为了确保用户可以更快的看到界面，整套系统必须要在一帧以内完成，否则就会导致页面卡顿。

为了能让项目保证高性能的同时，能够更好的维护和更新，我们需要通过系统设计，将整个复杂的计算过程分成不同的阶段，并设计专用的数据结构以实现不同阶段内的高效率更新。

## 基于 Flutter 的技术方案

从 0 完成一个自绘渲染引擎是一件很困难的事情，因此 Kraken 团队选择借助社区已有的建设来开展工作。源自 Google 的 Flutter 是一套优秀的跨端渲染引擎，只不过并不支持 JavaScript 也不支持 W3C 标准渲染。所以 Kraken 团队选择基于 Flutter 已经建设的底层设施，然后再 Flutter 的上层进行二次开发，进而开发出基于 W3C 标准的渲染引擎。

基于 Flutter 所提供的架构图，Kraken 将从 Painting 层开始建立属于自己的模块，并始终保持和 Flutter Painting 层的兼容，以持续获取 Flutter 底层升级所带来的提升。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406152417.jpg" width="500" />

而这篇文章将从最基本的输入开始，逐步展开 Kraken 系统分层设计的内容。

## 基本的输入：HTML/CSS & JavaScript

和浏览器一样，Kraken 也同样使用 HTML/CSS & JavaScript 来实现页面的布局。其中 HTML/CSS 用于描述页面的结构和样式，而 JavaScript 负责操作和处理数据。

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

## DOM 结构的生成

对于上诉的数据，渲染引擎开始的第一步是处理 HTML。熟悉 HTML 的同学都知道，HTML 是由多个不同的标签组成，标签与标签可以嵌套，可以同级，他们之间组成了树形的结构。

通过解析 HTML，获取 HTML 包含的结构化语义，渲染引擎就获得了一个包含标签相互关系的树状数据结构，在 WhatWG 标准中，它叫做 DOM（Document Object Model） Tree。

```
HTML --> Parser --> DOM Tree
```

DOM Tree 和 HTML 中的标签是 1 : 1 的映射关系，每个标签的标签名，属性的值，都将被一一映射到 DOM 树上。DOM Tree 是 HTML 的一种数据结构表达方式。

## 双层 DOM Tree — 跨语言通信的妥协

由于是建立在 Flutter 基础之上的缘故，Kraken 的主要渲染层的实现是采用 Dart 语言进行开发。而 JavaScript 引擎和 Binding API 均是采用 C/C++ 开发。所以 C/C++ 和 Dart 之间的频繁通信必不可少。

Dart 提供了 FFI 功能实现和 C/C++ 之间的相互调用，平均耗时为 0.02ms 单次。但是对于页面渲染的过程，首次页面初始化会有上千次的相互调用，所以 0.02 ms 单次的耗时依然无法接受。

因此 Kraken 将多个调用进行了合并，合并成一组指令的调用，再一次性从 C/C++ 发送到 Dart 进行处理。

同时为了减少相互之间的通信频率，C/C++ 和 Dart 各存在一棵 DOM 树，并始终保持同步，让任何有关树结构有关的调用都无须通过跨语言通道。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406153912.jpg" width="800" />

## 基于 DOM Tree 的 CSS

CSS 生效的前提是拥有其匹配的 DOM 节点。如果一个渲染系统希望给予用户所制作的 UI 有更加灵活的控制能力，那么针对单个节点的像素级操作是必不可少的步骤。

下诉的 CSS 代码是将每个含有 `class="container"` 属性的 HTML 标签，都设置为宽 200px 和高 200px。

```css
.container {
  width: 200px;
  height: 200px;
}
```

CSS 文本中描述了一种将哪一类标签应用一组样式规则的方式。

```
[选择器] {
	规则1: 规则内容
	规则2: 规则内容
}
```

这些样式规则，会通过一个 Parser 进行一系列的转换过程，生成 CSS Rules 对象。然后再基于选择器的规则，应用到 Element，存储在包含每个 Element 对应样式信息的 properties 中。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220405172221.jpg" width="400" />

## 计算每个 Element 的尺寸 — Layout 阶段

当每个 Element 所需要的样式信息都存储到 properties 中之后，接下来就可以基于这些信息来计算每个 Element 在页面中所占用的尺寸。

由于接下来需要进行布局和绘制操作，会生成和尺寸有关的数据。同时对于一些复杂的布局操作，比如 `position: absolute` 以及 `z-index`，会涉及到更加复杂的处理。因此需要单独一套数据结构用来处理这些流程，而不是都耦合在 Element 上。在这里我们将这套数据结构称之为 RenderObject，由它组成的树叫做 RenderObject Tree。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406154459.jpg" width="600" />

渲染引擎会在每一帧调用 `PipelineOwner.flushLayout` 方法，依次从上往下调用每个 RenderObject 的 `layout()` 进行布局，并从上到下依次计算每个 RenderObject 的尺寸。

如果 CSS 中含有和尺寸有关的属性，比如 width 和 height，都会对最终的尺寸产生影响。

CSS 所定义的布局规则繁多，后面将会有单独的文章针对次话题展开介绍。

当然这里会有一些优化手段，在不必要的情况下不去调用每个 RenderObject 的 Layout 方法，后面也会详细解读。

## 在框架内添加亿点点细节— Paint 阶段

当每个元素的尺寸确定之后，整个页面的框架也就搭建完成，接下来就是在框架内填充细节。

Paint 的操作会基于 Layout 阶段所计算的像素坐标为基点，然后调用绘图 API 进行绘制。

Paint 的执行过程也 Layout 非常类似，当渲染引擎在每一帧调用完所有的 Layout 操作之后，就会调用 `PipelineOwner.flushPaint` 方法来进行 paint 操作。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406154734.jpg" width="700" />

如果所有的绘制操作都在一张画图上进行操作，那么每一帧都将重复所有的 paint 调用，这样会严重影响性能。

因此需要引入多图层的设计方案，即将整个页面的绘制操作进行分层，将多个零散的绘制操作合并到同一个图层内容。同时我们将单个图层称之为 Layer，而由多个图层组成的树状结构称之为 Layer 树。

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220405183825.jpg" width="700" />

通常渲染引擎会对不同的 CSS 属性采取不同的渲染操作。对于 color，background，border 这些绘制比较简单，并只生效于单个 Element 的属性，会直接调用绘图 API，将内容绘制到当前的 Layer 上。而对于滚动场景，会涉及大量的 RenderObject 的绘制，则会单独生成 Layer 用于缓存大部分的绘制内容可以有效提升滚动帧率。这其中也包含了很多的技术细节，未来将会有单独的文章进行分析。

## 实现和 Flutter 的融合

当完成了 Layer 树的构建，Kraken 就完成了和 Flutter 的相互融合。接下来就是将 Layer 层发送到 Flutter Engine，并由 Flutter Engine 生成最终的图像。

最终 Kraken 和 Flutter 相互融合的架构如下：

<img src="https://kraken.oss-cn-hangzhou.aliyuncs.com/images/20220406122844.jpg" width="600"  />

## 小结

本篇文章介绍了 Kraken 主要的分层设计功能，并进行了简要的介绍，后续 Kraken 团队将会定期发布每层具体的工作细节和思考。
