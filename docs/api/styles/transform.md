# 变形与过渡

Kraken 支持以下变形与过渡相关样式。

## 变形

### transform
- 定义：旋转，缩放，倾斜或平移指定元素。
- 属性值：[ martix() | martix3d() | rotate() | rotateX() | rotateY() | rotateZ() | rotate3d() | translate() | translateX() | translateY() | translateZ() | translate3d() | scale() | scaleX() | scaleY() | perspective() | skew() ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)。
- 说明：skew() 大于 90 度时动画旋转顺序与浏览器相反，见 [issue](https://github.com/openkraken/kraken/issues/25)

### transform-origin 
- 定义：指定元素变形的原点。
- 属性值：<[ left | center | right | (top | bottom)] | [number[ px | rpx | vw | vh ]]> | 属性值：<[ top | center | bottom] | [number[ px | rpx | vw | vh ]]>
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。


## 过渡

#### transition
- 定义：为一个元素在不同状态之间切换的时候定义不同的过渡效果。 为 `transition-property`, `transition-duration`, `transition-delay` 和 `transition-timing-function` 的简写属性。
- 属性值： `transition-property` | `transition-duration` | `transition-delay` | `transition-timing-function`
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transtion)。
- 说明： 目前只支持设置一组属性。

#### transition-propery
- 定义：指定应用过渡属性的名称。
- 属性值：[ all | transform | opacity | background-color ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transtion-property)。

#### transition-duration
- 定义：以秒或毫秒为单位指定过渡动画所需的时间。
- 属性值：\<number>[ ms | s ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transtion-duration)。

#### transition-delay
- 定义：规定了在过渡效果开始作用之前需要等待的时间。
- 属性值：\<number>[ ms | s ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transtion-delay)。

#### transition-timing-function
- 定义：为 `transition` 中过渡的 CSS 属性产生不断变化的中间值的函数，用来描述这个中间值是怎样计算的。
- 属性值：[ ease | ease-in | ease-out | ease-in-out | linear | cubic-bezier() ]
- 标准：参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transtion-timing-function)。