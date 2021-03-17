# 盒模型

Kraken 的盒模型基于 CSS 的盒模型, 当对一个文档进行布局的时候，引擎根据盒模型将所有元素表示为一个个矩形的盒子。 每个盒子由四个部分组成，其效用由它们各自的边界所定义如图，与盒子的四个组成区域相对应，每个盒子有四个边界：_内容边界_ _Content edge_、_内边距边界_ _Padding Edge_、_边框边界_ _Border Edge_、_外边框边界_ _Margin Edge_。


![](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/184/1615362804222-5c85b970-f1f5-4d09-a386-139fb71c043d.png#align=left&display=inline&height=340&margin=%5Bobject%20Object%5D&originHeight=340&originWidth=377&size=0&status=done&style=none&width=377)


**内容区域 content area** ，由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度和内容高度。它通常含有一个背景颜色（默认颜色为透明）或背景图像。


**内边距区域 padding area** 由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 _padding-box 宽度_ 和 _padding-box 高度_。 内边距的粗细可以由 [padding-top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-top)、[padding-right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-right)、[padding-bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-bottom)、[padding-left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-left)，和简写属性 [padding](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 控制。


**边框区域 border area** 由边框边界限制，扩展自内边距区域，是容纳边框的区域。其尺寸为 _border-box  宽度_ 和 _border-box 高度_。 边框的粗细由 [border-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 和简写的 [border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 属性控制。


**外边距区域 margin area** 由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 _margin-box 宽度 _和 _margin-box 高度_。 外边距区域的大小由 [margin-top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)、[margin-right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right)、[margin-bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)、[margin-left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left)，和简写属性 [margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 控制。


**BorderBox** Kraken 使用 BorderBox 来实现默认的盒模型定义，[width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)和 [height]() 的大小表示 `border`, `padding` , `content` 三部分的和。
