# 布局

在布局方式上 Kraken 目前支持 W3C 标准的流式布局与 Flexbox 布局。通过 display 属性来控制不同的布局方式。
## display
display 属性定义了元素的显示类型，Kraken 目前支持以下几种常用值：

- inline - 内联元素
- block - 行级块元素
- inline-block 行内块元素
- flex - Flex 元素
- inline-flex - 内联 Flex 元素


## 流式布局
Kraken 支持 CSS 的[流式布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)，即在文档流中通过内联与块的方式排列元素，同时可以通过 [display 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 改变元素的默认排列方式。
### 内联元素
在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向，从左边开始一个接一个地显示。
kraken 中的默认内联显示的标签有 `<span>` `<img>` `input` 。
### 块元素
在文档流中，块元素一个接一个地显示，就像该文档的写作模式中的段落一样，从顶部开始向下显示并移动页面。
kraken 中的默认块级展示的标签有 `<div>` `<p>` 。


## Flexbox 布局
Kraken 的 Flexbox 布局基于 CSS 的 [flexbox 模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)，Kraken 支持的 Flexbox 属性如下：
### flex-direction

- column： 从上向下排列；

- column-reverse： 从下到上排列；

- row： 从左向右排列

- row-reverse： 从右向左排列

### flex-wrap

- nowrap: flex 成员项在一行排布，排布的开始位置由 flex-direction 指定；

- wrap: flex 成员项在多行排布，排布的开始位置由 flex-direction 指定；

### justify-content

- flex-start：默认值，所有的 flex 成员项都排列在容器的前部；

- flex-end：则意味着成员项排列在容器的后部；

- center：即中间对齐，成员项排列在容器中间、两边留白；

- space-around：使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间;

- space-between: 与 space-around 类似，但是不会在两端留下任何空间;

### align-items

- stretch：默认值，即拉伸高度至 flex 容器的大小；

- flex-start：上对齐，所有的成员项排列在容器顶部；

- flex-end：下对齐，所有的成员项排列在容器底部；

- center：中间对齐，所有成员项都垂直地居中显示；
- baseline: 所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线;
### align-content
描述多行的 flex 成员项在纵轴上的排布方式。

- start: 默认值，上对齐，所有的成员项行排列在容器顶部；

- end：下对齐，所有的成员项行排列在容器顶部；

- center：中间对齐，所有的成员项行垂直地居中显示在容器中；

- space-around：使所有 flex 项行沿着纵轴均匀地分布，在任意一端都会留有一半大小的空间;

- space-between：与 space-around 类似，但是不会在两端留下任何空间;

- space-evenly：与 space-around 类似，但是每行间距离相等；
- baseline: 所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线;
### flex-grow
描述 flex 成员项的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
### flex-shrink
描述 flex 成员项的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
### flex-basis
描述 flex 成员项在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。






