---
order: 1
toc: menu
---

# 标签

Kraken 支持以下 W3C 定义的 HTML 标签。

## 分区根元素

**\<body>**

- 定义：表示文档的内容。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 。

## 内容分区

**\<address>**

- 定义：表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/address) 。

**\<article>**

- 定义：表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。​​
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 。

**\<aside>**

- 定义：表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside) 。

**\<footer>**

- 定义：表示最近一个章节内容或者根节点（sectioning root）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer) 。

**\<header>**

- 定义：用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。

- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header) 。

**\<h1>**

- 定义：表示一级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<h2>**

- 定义：表示二级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<h3>**

- 定义：表示三级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<h4>**

- 定义：表示四级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<h5>**

- 定义：表示五级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<h6>**

- 定义：表示六级标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 。

**\<main>**

- 定义：呈现了文档的 \<body> 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main) 。

**\<nav>**

- 定义：表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav) 。

**\<section>**

- 定义：表示一个包含在 HTML 文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section) 。

## 文本内容

**\<blockquote>**

- 定义：代表其中的文字是引用内容。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote) 。

**\<dd>**

- 定义：用来指明一个描述列表 (\<dl>) 元素中一个术语的描述。这个元素只能作为描述列表元素的子元素出现，并且必须跟着一个 \<dt> 元素。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd) 。

**\<div>**

- 定义：通用块级容器。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 。

**\<dl>**

- 定义：表示一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键-值对列表)。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl) 。

**\<dt>**

- 定义：用于在一个定义列表中声明一个术语。该元素仅能作为 \<dl> 的子元素出现。通常在该元素后面会跟着 \<dd> 元素， 然而，多个连续出现的 \<dt> 元素都将由出现在它们后面的第一个 \<dd> 元素定义。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt) 。

**\<figure>**

- 定义：代表一段独立的内容, 经常与说明（caption） \<figcaption> 配合使用, 并且作为一个独立的引用单元。当它属于主内容流（main flow）时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure) 。

**\<figcaption>**

- 定义：是与其相关联的图片的说明/标题，用于描述其父节点 \<figure> 元素里的其他数据。这意味着 \<figcaption> 在\<figure> 块里是第一个或最后一个。同时 HTML Figcaption 元素是可选的；如果没有该元素，这个父节点的图片只是会没有说明/标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption) 。

**\<li>**

- 定义：表示列表里的条目表示。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li) 。

**\<ol>**

- 定义：表示一个内可含多个元素的有序列表。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol) 。

**\<p>**

- 定义：表示文本的一个段落。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 。

**\<pre>**

- 定义：表示预定义格式的文本。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/pre) 。

**\<ul>**

- 定义：表示一个内可含多个元素的无序列表。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul) 。

## 内联文本语义

**\<a>**

- 定义：用于实现页面间跳转的标签。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a) 。

**\<abbr>**

- 定义：用于代表缩写，并且可以通过可选的 title 属性提供完整的描述。若使用 title 属性，则它必须且仅可包含完整的描述内容。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr) 。

**\<b>**

- 定义：用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b) 。

**\<br>**

- 定义：在文本中生成一个换行（回车）符号。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br) 。

**\<code>**

- 定义：呈现一段计算机代码。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code) 。

**\<data>**

- 定义：将一个指定内容和机器可读的翻译联系在一起。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/data) 。

**\<dfn>**

- 定义：表示术语的一个定义。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dfn) 。

**\<em>**

- 定义：标记出需要用户着重阅读的内容， \<em> 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em) 。

**\<cite>**

- 定义：表示一个作品的引用，且必须包含作品的标题。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite) 。

**\<i>**

- 定义：用于表现因某些原因需要区分普通文本的一系列文本。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i) 。

**\<kbd>**

- 定义：用于表示用户输入，它将产生一个行内元素，以浏览器的默认 monospace 字体显示。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/kbd) 。

**\<mark>**

- 定义：表示为引用或符号目的而标记或突出显示的文本，这是由于标记的段落在封闭上下文中的相关性或重要性造成的。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark) 。

**\<q>**

- 定义：表示一个封闭的并且是短的行内引用的文本。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q) 。

**\<s>**

- 定义：使用删除线来渲染文本。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/s) 。

**\<samp>**

- 定义：用于标识计算机程序输出。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/samp) 。

**\<small>**

- 定义：用于使文本的字体变小一号。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/small) 。

**\<span>**

- 定义：通用行内容器。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 。

**\<strong>**

- 定义：表示文本十分重要，一般用粗体显示。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong) 。

**\<time>**

- 定义：用来表示 24 小时制时间或者公历日期，若表示日期则也可包含时间和时区。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time) 。

**\<u>**

- 定义：用来表示 24 小时制时间或者公历日期。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u) 。

**\<var>**

- 定义：表示数学表达式或编程上下文中的变量名称。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/var) 。

## 表单

**\<button>**

- 定义：表示一个可点击的按钮。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button) 。

**\<input>**

- 定义：用于创建接收用户输入字符的输入框。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 。

**\<label>**

- 定义：表示用户界面中某个元素的说明。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label) 。

## 图片和多媒体

**\<img>**

- 定义：用于在界面中显示图片。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 。

**\<video>**

- 定义：用来在页面中嵌入视频内容。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 。
- 注：需要额外安装 [kraken_video_player](/plugins/kraken_video_player) 插件

## 编辑标识

**\<del>**

- 定义：表示一些被从文档中删除的文字内容。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/del) 。

**\<ins>**

- 定义：定义已经被插入文档中的文本。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ins) 。

## 内嵌内容

**\<iframe>**

- 定义：用来将另一个页面嵌入到当前页面中。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 。
- 注：需要额外安装 [kraken_webview](/plugins/kraken_webview) 插件

**\<object>**

- 定义：表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object) 。

## 脚本

**\<canvas>**

- 定义：用来通过 [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) API 绘制图形及动画。
- 参考： [链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 。
