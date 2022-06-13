# Kraken 架构介绍

## 前言

Kraken 是一款采用基于 Flutter 而实现的自绘渲染引擎。它使用 W3C 标准的 HTML，CSS，JavaScript，并支持通过 JavaScript 实现对画面的实时交互。

Kraken 基于 Flutter Rendering 层的实现进行了深度定制，在保留兼容 RenderObject API 的情况下，扩展出了兼容 W3C 标准的布局能力，并在此基础之上添加了 DOM，CSS 的解析处理，并对接 JavaScript 引擎，实现了一个类浏览器的技术架构：

<img src="https://andycall.oss-cn-beijing.aliyuncs.com/images/20220406122844.jpg" width="500" />

## Bridge 层介绍

Bridge 层为用户提供了基于 ECMAScript 标准的 JavaScript 运行环境，并内置了 W3C 标准的 DOM API 和 BOM API。

**Kraken 使用的 JavaScript Engine**

Kraken 的 JavaScript Engine 为 QuickJS，支持 ECMA 2020 标准的绝大部分功能。QuickJS 不光支持解析 JavaScript 代码，同时还支持离线将 JavaScript 转换为 ByteCode 格式，再直接解析 ByteCode 运行。这样可以减去页面加载过程中 Parse 阶段的时间。

通过 QuickJS Binding，Kraken 使用 C/C++ 实现了 DOM 标准内的绝大部分功能，包括 Node，EventTarget，Element，选择器等。

一些基于 DOM 标准而实现的前端框架，都可以在不更改一行代码的情况下运行，比如流行的 React.js，Vue.js 和 Rax.js。

具体的实现细节和性能优化后续会单独开一篇文章进行介绍。

**HTML 解析**

用户所输入的 HTML 文本也会在 bridge 层进行解析。bridge 中内置一个 HTML Parser，用于解析用户编写的 HTML 字符串。将 HTML 字符串解析后，会生成一组 DOM 节点的调用，进而创建出 DOM 对象。

**C++ 与 Dart 之间的通信**

在 Bridge 层的下面是采用 Dart 实现的 Framework 层。Kraken 的 C++ 代码通过 Dart FFI 与 Framework 层实现相互通信，在 Kraken 中，C++ 和 Dart 环境中都包含 `BindingObject` 对象，它是 C++ 和 Dart 之间相互通信的主要桥梁。用户代码通过调用 DOM API 所创建的节点操作等各种操作，会通过转换成指令，成批发送到 Framework 层进行处理。

具体的细节也会在后续单独开一篇文章进行介绍。

**插件能力**

除了 Kraken 所提供的功能之外，还向用户提供了插件功能。可以让用户自行通过 JavaScript 扩展出新的 Element，并通过 Flutter Widget 来实现原生的渲染能力。

Kraken 团队官方维护了一些插件，可以作为示范代码进行参考：https://github.com/openkraken/plugins

Bridge 层对于插件能力的支持，是通过截取用户的属性调用和方法调用，并通过 BindingObject 通道，将调用发送到 Framework 侧，并调用 Framework 层 Element 的一些生命周期。从而让用户使用 Flutter Widget 编写的渲染代码，感知到 JavaScript 环境中的变化。

具体的细节也会在后续单独开一篇文章进行介绍。

## Framework 层介绍

Framework 采用 Dart 语言编写，通过 C++ 层传递过来的操作指令进行驱动。

**DOM 树**

DOM 树既是用户通过 JavaScript API 所生成的结构树，也同时负责着连接到 Framework 层的其他功能模块，包括调用 CSS 的解析和处理，以及生成 RenderObject，用来完成布局和绘图的操作。对于用户的一些手势操作，DOM 节点也会触发对应的事件，以调用所注册的 JavaScript 函数。

Elements 包含非常繁杂的功能，包括节点操作，HTML 属性的处理，事件的注册和绑定，并包含了很多生命周期，用户处理 CSS 和 RenderObject。

具体的细节也会在后续单独开一篇文章进行介绍。

**CSS 样式处理**

用户通过 Style 标签内联的 CSS 代码和通过 JavaScript API 设置的 inlineStyle，都会通过 DOM 树转发到 CSS 样式处理模块。这个模块包含了对 CSS 文本的解析，值类型的解析。

CSS 动画是 CSS 模块的一个重要的组成部分，包括 transition，animation 的实现。这些操作都会反过来对 DOM 节点造成修改，以实现动画的控制。

CSS 中还包含了一些非常复杂的布局功能。比如 position: absolute, display: flex 等。而这些功能是由 CSS 模块，DOM 树和后面会介绍的布局模块共同完成。其中 CSS 模块主要负责对样式的设置，而 DOM 树负责创建对应的 RenderObject，而布局模块则是去实现布局算法。

具体的细节也会在后续单独开一篇文章进行介绍。

**Flutter Widget 扩展支持**

Kraken 从 0.10 版本开始，支持使用 Flutter Widget 来开发自定义 Element 扩展。Kraken 实现了一个桥接层，可以将 DOM 树的生命周期和 Flutter Element 的生命周期进行对接。从而可以驱动 Flutter Widget，可以在一个 Kraken Element 的范围内，使用 Flutter Widget 去绘制渲染内容，并还支持多层嵌套，完美打通了 Web 和 Flutter 生态之间的边界。让 Web 的简单灵活布局 和 Flutter Widget 友好的混合进行渲染。

具体的细节也会在后续单独开一篇文章进行介绍。

**Module 扩展**

Kraken 的扩展能力除了可以进行自定义渲染之外，还支持使用 Dart 来丰富 JavaScript 的能力。通过 Module 扩展，可以很轻易在 JavaScript 环境中去注入新的 JavaScript API，并通过 Dart 来去实现用户所希望的能力。

具体的细节也会在后续单独开一篇文章进行介绍。

**调试工具**

Kraken 模块中内置了基于 Chrome Developer Protocol 的调试服务实现。可以使用 Chrome 浏览器连接，并通过 Chrome Developer Tools 来调试 Kraken 页面。目前支持调试 Element 结构，查看 CSS 样式，截取 Network 请求，2022 年 5 月份会支持 JavaScript Debugger 功能。

调试工具会在应用本地启动一个 WebSocket 调试服务，通过 Chrome Developer Protocol 来和浏览器调试工具进行数据交换，并将 Kraken 当前的运行信息传递到调试工具进行调试。

具体的细节也会在后续单独开一篇文章进行介绍。

**手势处理**

W3C 标准中定义了很多手势操作，如 touchstart，click 等。Kraken 的 Gesture 模块负责这个部分的计算和处理。当用户触控屏幕的时候，Flutter Engine 会将原始的触控点击信息发送到手势处理模块，由手势处理模块判定当前用户的手势操作属于哪一种类型。最后再检测当前对这种事件类型有没有绑定事件，如果有，则将事件抛出到 DOM 树，再由 DOM 节点去触发绑定的 JavaScript 函数。

手势处理还有一个核心功能是滚动手势的识别。在移动应用中，滚动是最常见的一种操作，而手势处理模块可以精确的识别哪些是滚动手势，并计算出滚动的加速度，内置了数学函数来推导出未来一段时间的位移。最终这些位移的值，会实时传送到后面介绍的绘图模块，用于实现滚动效果。

具体的细节也会在后续单独开一篇文章进行介绍。

**布局模块**

用户通过 CSS 所设置的布局样式，比如 display: flex, position: absolute 等。都会在布局模块去调用其对应的计算算法，如 flex 布局算法模块，flow 布局算法模块。布局模块最主要的事情是将 CSS 模块所设置过来的属性，通过计算转换成尺寸和坐标。让每一个 RenderObject 都获得其在屏幕中所占用的尺寸和相对左上角的位置坐标。

布局模块也是 Kraken 中最复杂的模块。在 W3C 标准中，不同样式之间的组合会带来各种不一样的效果，而这些组合成的功能，也都会在布局模块中被一一实现。

具体的细节也会在后续单独开一篇文章进行介绍。

**绘图模块**

绘图模块是 Kraken 中最后一个实现的模块，后面的操作都将交给 Flutter 进行处理。在布局模块完成工作，确定每个 RenderObject 的尺寸和坐标之后，绘图模块会在已有的坐标上，调用图形 API 进行图像的绘制。Flutter Engine 提供了类似 Canvas 的绘图 API，绘图模块通过这些 API，实现了 border，color 等涉及图像操作的处理。

图像操作是一种比较消耗性能的操作，因此绘图模块包含了很多优化图像绘制性能的优化手段。

具体的细节也会在后续单独开一篇文章进行介绍。

## 小结

本篇文章介绍了 Kraken 主要的分层设计功能，并进行了简要的介绍，后续 Kraken 团队将会定期发布每层具体的实现细节内容。
