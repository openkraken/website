# 颜色与背景

Kraken 支持以下边框与圆角相关样式。

## 颜色

#### color

- 定义：设置一个元素的文本和文本装饰的前景色，同时也设置 `currentcolor`，`currentcolor` 用于其他颜色属性如 `border-color`、`background-color` 在未设置指定颜色时的默认取值。
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)。

## 背景

#### background

- 定义：指定元素的背景，为 `background-color`,`background-image`, `background-repeat`, `backgrond-position` 和 `background-size` 的简写属性。
- 属性值： `background-color` | `background-image` | `background-repeat` | `backgrond-position`  | (/ `background-size` )
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)。

#### background-color

- 定义：用于设置一个元素的背景色。
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)。

#### background-image

- 定义：用于设置一个元素的一个或多个背景图。
- 属性值：[ none | url() | linear-gradient() | radic-gradient() | conic-gradient() ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)。

#### background-repeat

- 定义：定义背景图像的重复方式。背景图像可以沿着横轴、纵轴，两个轴重复，或者根本不重复。
- 属性值：[ no-repeat | repeat | repeat-x | repeat-y ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)。

#### background-position

- 定义：用于设置背景图位置。
- 属性值：[ \<number>[ px | rpx | vw | vh ] | top | bottom | left | right | center ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)。

#### background-size

- 定义：设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。
- 属性值：[ cover | contain | auto | \<number>[ px | rpx | vw | vh ] ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)。
- 说明：暂不支持百分比。

#### background-attachment

- 定义：指定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。
- 属性值：[ local | scroll ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)。
