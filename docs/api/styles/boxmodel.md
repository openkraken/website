# 盒模型

Kraken 的盒模型基于 CSS 的[盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model?spm=a2c7j.-zh-docs-styles-common-styles.0.0.3f95bcbbzSH3n5), 当对一个文档进行布局的时候，引擎根据盒模型将所有元素表示为一个个矩形的盒子。 每个盒子由四个部分组成，其效用由它们各自的边界所定义如图，与盒子的四个组成区域相对应，每个盒子有四个边界：_内容边界_ _Content edge_、_内边距边界_ _Padding Edge_、_边框边界_ _Border Edge_、_外边框边界_ _Margin Edge_。


![](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/184/1615362804222-5c85b970-f1f5-4d09-a386-139fb71c043d.png#align=left&display=inline&height=340&margin=%5Bobject%20Object%5D&originHeight=340&originWidth=377&size=0&status=done&style=none&width=377)

## 属性

### height
- 简介：指定元素的高度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)。

### min-height
- 简介：指定元素的最小高度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)。

### min-height
- 简介：指定元素的最大高度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-height)。

### width
- 简介：指定元素的宽度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)。

### min-width
- 简介：指定元素的最小宽度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-width)。

### max-width
- 简介：指定元素的最大宽度。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width)。

#### margin
- 简介：为给定元素设置所有四个（上下左右）方向的外边距属性。是 margin-top，margin-right，margin-bottom 和 margin-left 四个外边距属性设置的简写。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)。

#### margin-top、margin-right、margin-bottom、margin-left
- 简介：分别对应元素的上、右、下、左外边距属性。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：分别参考 [margin-top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)、[margin-right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right)、[margin-bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)、[margin-left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left)。

#### padding
- 简介：为给定元素设置所有四个（上下左右）方向的内边距属性。是 padding-top，padding-right，padding-bottom 和 padding-left 四个内边距属性设置的简写。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)。

#### padding-top、padding-right、padding-bottom、padding-left
- 简介：分别对应元素的上、右、下、左内边距属性。
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 标准：分别参考 [padding-top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-top)、[padding-right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-right)、[padding-bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-bottom)、[padding-left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-left)。



