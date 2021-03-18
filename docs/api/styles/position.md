# 定位

Kraken 支持 CSS 规范中定义的所有类型 [position 定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 方式：

- static：默认值，无定位，元素在文档常规流中按当前的位置布局，指定 top, right, bottom, left 和 z-index 属性无效。

- relative：相对定位，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）

- absolute: 绝对定位，元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。

- fixed：固定定位，元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。

- sticky: 粘性定位，元素根据正常文档流进行定位，然后相对它的最近滚动祖先和 [containing block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block) (最近块级祖先)，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。

## 属性

### position
- 定义：指定元素在文档中的定位方式。
- 属性值：[ static | relative | absolute | fixed | sticky ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)。

### z-index
- 定义：定义了一个定位元素及其后代元素或 flex 成员项的 z-order。 当元素之间重叠的时候， z-index 较大的元素会覆盖较小的元素在上层进行显示。
- 属性值：<±number>
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)。
- 说明：Kraken 未完整支持 W3C 的 [stacking context](https://www.w3.org/TR/CSS2/zindex.html)，导致在某些元素深度嵌套情况下 `z-index` 的表现与 web 相比有差异，见 [issue](https://github.com/openkraken/kraken/issues/55)。

### top
- 定义：定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)。

### right
- 定义：定义了定位元素的右外边距边界与其包含块右边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right)。

### bottom
- 定义：定义了定位元素下外边距边界与其包含块下边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)。

### left
- 定义：定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)。