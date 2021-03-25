# 字体与文本

Kraken 支持以下字体与文本的相关样式。

## 字体

### font-size

- 定义：用于指定字体大小。
- 属性值：\<number>[ px | rpx | vw | vh | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)。

### font-weight

- 定义：用于指定字体的粗细程度。
- 属性值：[ normal | bold | lighter | border | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)。

### font-family

- 定义：通过指定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。
- 属性值：字体名称
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)。

### font-style

- 定义：选择  [font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)  字体下的  `italic`  或  `oblique`  样式。
- 属性值：[normal | italic]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)。

## 文本

### text-align

- 定义：用于指定行内内容（例如文字）如何相对它的块父元素对齐。`text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐。
- 属性值：[ left | center | right ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)。

### text-overflow

- 定义：设置内容超出容器时的省略样式。
- 属性值：[ clip | ellipsis ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)。

### text-decoration

- 定义：指定文本的修饰线外观的（下划线、上划线、贯穿线/删除线   或 闪烁）它是  [text-decoration-line](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line), [text-decoration-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color), [text-decoration-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style), 和新出现的  [text-decoration-thickness](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-thickness)  属性的缩写。
- 属性值：[ underline | overline | line-through | none ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)。

### line-height

- 定义：指定多行元素之间的间距，如多行文本的间距。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非替代的 inline 元素，它用于计算行盒（line box）的高度。
- 属性值：[ normal | <±number>[ 无单位 | px | rpx | vw | vh | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)。

### text-shadow

- 定义：为文字添加阴影。可以为文字与   [text-decorations](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)  添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 X 和 Y 方向的偏移量、模糊半径和颜色值组成。
- 属性值：[ none | \$x \$y \$blur-radius \$color ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)。

### letter-spacing

- 定义：用于设置文本字符的间距。
- 属性值：[ px | rpx | vw | vh ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing)。

### word-spacing

- 定义：用于设置文本字符的间距。
- 属性值：[ px | rpx | vw | vh ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing)。

### line-clamp

- 定义：用于限制文本的最大显示行数。
- 属性值：\<number>
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-clamp)。
