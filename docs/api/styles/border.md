# 边框与圆角

Kraken 支持以下边框与圆角相关样式。

## 边框

### border

- 定义：设定元素的边框，为 `border-width`, `border-style` 和 `border-color` 属性的简写。
- 属性值： `border-width` | `border-style` | `border-color`
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)。

### border-width

- 定义：设定元素的边框宽度，为 `border-top-width`, `border-right-width`, `border-bottom-width`, 和 `border-left-width` 属性的简写。
- 属性值： `border-top-width` | `border-right-width` | `border-bottom-width` | `border-left-width`
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width)。

### border-\*-width

- 定义：设定元素单边的边框宽度。
- 属性值：\<number>[ px | rpx | vw | vh ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width)。

### border-color

- 定义：设定元素的边框颜色，为 `border-top-color`, `border-right-color`, `border-bottom-color`, 和 `border-left-color` 属性的简写。
- 属性值： `border-top-color` | `border-right-color` | `border-bottom-color` | `border-left-color`
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)。

### border-\*-color

- 定义：设定元素单边的边框颜色。
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)。

### border-style

- 定义：设定元素的边框颜色，为 `border-top-style`, `border-right-style`, `border-bottom-style`, 和 `border-left-style` 属性的简写。
- 属性值：`border-top-style` | `border-right-style` | `border-bottom-style` | `border-left-style`
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)。

### border-\*-style

- 定义：设定元素单边的边框样式。
- 属性值：[ none | solid ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)。
- 说明：目前仅支持 solid 类型，dotted, dashed 等均不支持

## 圆角

### border-radius

- 定义：设定元素的边框圆角，为 `border-top-left-radius`,`border-top-right-radius`, `border-bottom-left-radius` 和 `border-bottom-right-radius` 属性的简写。
- 属性值：`border-top-left-radius` | `border-top-right-radius` | `border-bottom-left-radius` | `border-bottom-right-radius`
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)。

### border-\*-radius

- 定义：设定元素的单个方向的边框圆角。
- 属性值：\<number>[ px | rpx | vw | vh | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)。
