# 文本

Kraken 目前支持以下文本相关样式。


### font-size
用于指定字体大小。

- 属性值：<number>[ px | rpx | vw | vh | % ]
- 默认值：


### text-align
用于指定行内内容（例如文字）如何相对它的块父元素对齐。`text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

- 属性值：[ left | center | right ]
- 默认值：left


### font-weight
用于指定字体的粗细程度。

- 属性值：[ normal | bold | lighter | border | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ]
- 默认值：normal


### font-family
通过指定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

- 属性值：字体名称
- 默认值：系统默认字体


### text-overflow
指定如何向用户发出未显示的溢出内容信号。

- 属性值：[ clip | ellipsis ]
- 默认值：clip


### text-decoration
指定文本的修饰线外观的（下划线、上划线、贯穿线/删除线  或 闪烁）它是 [`text-decoration-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line), [`text-decoration-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color), [`text-decoration-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style), 和新出现的 [`text-decoration-thickness`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-thickness) 属性的缩写。

- 属性值：[ underline | overline | line-through | none ]
- 默认值：none


### line-height
指定多行元素之间的间距，如多行文本的间距。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非 替代的 inline 元素，它用于计算行盒（line box）的高度。

- 属性值：[ normal | <±number>[ 无单位 | px | rpx | vw | vh | % ]
- 默认值：normal


### font-style
选择 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 字体下的 `italic` 或 `oblique` 样式。

- 属性值：[normal | italic]
- 默认值：normal


### text-shadow
为文字添加阴影。可以为文字与  [`text-decorations`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)  添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成。

- 属性值：[ none | $x $y $blur-radius $color ]
- 默认值：none
- 相关说明：
   - `$x` 是指 x 坐标的偏移量；
   - `$y` 是指 y 坐标的偏移量；
   - `$blur-radius` 阴影的模糊扩散量；
   - `$color` 阴影的颜色值；
   - 至少需要 `$x` 和 `$y` 两个值， `$blur-radius` 默认是 **0** ， `$color` 默认是文本颜色；


### letter-spacing
用于设置文本字符的间距。

- 属性值：[ px | rpx | vw | vh ]
- 默认值：0


### word-spacing
用于设置文本字符的间距。

- 属性值：[ px | rpx | vw | vh ]
- 默认值：0


### line-clamp
用于限制文本的最大显示行数。

- 属性值：限制文本行数
- 默认值：
