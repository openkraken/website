# 定位

Kraken 支持 CSS 规范中定义的所有类型 [position 定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 方式，涉及以下的属性：

## 属性

### position

- 定义：指定元素在文档中的定位方式。
- 属性值：[ static | relative | absolute | fixed | sticky ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)。

### z-index

- 定义：定义了一个定位元素及其后代元素或 flex 成员项的 z-order。 当元素之间重叠的时候， z-index 较大的元素会覆盖较小的元素在上层进行显示。
- 属性值：<±number>
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)。
- 说明：Kraken 未完整支持 W3C 的 [stacking context](https://www.w3.org/TR/CSS2/zindex.html)，导致在某些元素深度嵌套情况下 z-index 的表现与 Web 相比有差异，见 [issue](https://github.com/openkraken/kraken/issues/55)。

### top

- 定义：定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | vmin | vmax | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)。

### right

- 定义：定义了定位元素的右外边距边界与其包含块右边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | vmin | vmax | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right)。

### bottom

- 定义：定义了定位元素下外边距边界与其包含块下边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | vmin | vmax | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)。

### left

- 定义：定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | vmin | vmax | % ]
- 参考：[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)。
