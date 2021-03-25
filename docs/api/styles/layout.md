# 布局

在布局方式上 Kraken 目前支持 W3C 标准的流式布局与 Flexbox 布局。

## 布局方式

display 属性定义了元素的显示类型，通过指定不同的值来控制布局方式。

### 属性

#### display

- 定义：设置元素的显示类型。
- 属性值：[ block | inline-block | inline | flex | inline-flex | none ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)。
- 说明：Kraken 目前只支持 block | inline-block | inline | flex | inline-flex | none 这几种类型。

## 流式布局

Kraken 支持 CSS 的[流式布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)，即在文档流中通过内联与块的方式排列元素，同时可以通过 [display 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 改变元素的默认排列方式。

### 内联元素

在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向，从左边开始一个接一个地显示。
Kraken 中的默认内联显示的标签有 `<span>` `<img>` `input` 。

### 块元素

在文档流中，块元素一个接一个地显示，就像该文档的写作模式中的段落一样，从顶部开始向下显示并移动页面。
Kraken 中的默认块级展示的标签有 `<div>` `<p>` 。

## Flexbox 布局

Kraken 的 Flexbox 布局基于 CSS 的 [flexbox 模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)，Kraken 支持的 Flexbox 属性如下：

### flex-direction

- 定义：定义了 flex 容器中 flex 成员项的排列方向。
- 属性值：[ row | row-reverse | column | column-reverse ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)。

### flex-wrap

- 定义：指定 flex 成员项以单行显示还是多行显示。如果允许换行，该属性同时指定在行内的排列方向。
- 属性值：[ nowrap | wrap | wrap-reverse ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)。

### flex-flow

- 定义：flex-direction 与 flex-wrap 的简写属性。
- 属性值：[ nowrap | wrap | wrap-reverse ]
- 属性值：[ `flex-direction 与 flex-wrap 组合` ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)。

### align-items

- 定义：定义了 flex 容器中所有 flex 成员项在纵轴方向上的排列方式。
- 属性值：[ flex-start | start | flex-end | end | center | stretch | baseline ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)。

### justify-content

- 定义：定义了 flex 容器中 flex 成员项在主轴方向上的排列方式。
- 属性值：[ flex-start | start | flex-end | end | center | space-around | space-between | space-evenly ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)。

### align-content

- 定义：当 flex 成员项多行排列时，定义了每行在纵轴方向上的排列方式。该属性对单行排列方式无效 (设置了 `flex-wrap: nowrap`)。
- 属性值：[ flex-start | flex-end | center | space-around | space-between ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)。

### align-self

- 定义：定义了 flex 容器中单个 flex 成员项在纵轴方向上如何排列以处理空白部分。
- 属性值：[ flex-start | flex-end | cener | baseline | stretch ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)。

### flex

- 定义：定义了 flex 成员项可以占用容器中剩余空间的大小。
- 属性值：[ auto | initial | flex-grow/flex-shrink/flex-basis 组合 ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)。

### flex-grow

- 定义：当所有 flex 成员项在主轴上 size 之和小于 flex 容器 size 时，指定了 flex 容器的剩余空间应该分配给当前 flex 成员项的比例。
- 属性值：\<number>
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)。

### flex-shrink

- 定义：当所有 flex 成员项在主轴上 size 之和大于 flex 容器 size 时，指定了当前 flex 成员项从所有 flex 成员项超出空间中应该扣除的比例。
- 属性值：\<number>
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)。

### flex-basis

- 定义：指定了 flex 成员项在主轴方向上的初始大小。
- 属性值：[ auto | \<number>[ px | rpx | vw | vh ] ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)。
