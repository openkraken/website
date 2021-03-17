Kraken 使用 W3C 标准定义样式，只要你具有一定的前端开发能力，都可以使用 Kraken 开发原生应用。
> Kraken 支持的通用样式已在本文档中全部列出，一些组件可能有自定义样式，请参考组件文档。除此之外的属性，均不被支持。

## 属性

> 在属性后面如果带有 P，则代表该属性与 web 中可能存在一些细微的差异。

### 盒模型

#### display
- 属性值：[ block | inline-block | flex | inline-flex | none ]
- 默认值：根据 element 类型不一样有不同的默认值

#### height、min-height、max-height
- 属性值：<number>[ px | rpx | vw | vh | % ]

#### width、min-width、max-width
- 属性值：<number>[ px | rpx | vw | vh | % ]

#### margin
- 属性值：<±number>[ px | rpx | vw | vh | % ]

#### padding
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 说明：
   - margin、padding 四个方向的简写方式，以顺时针方向展示；
   - 一个值：四个方向的值；
   - 两个值：分别代表上下、左右的值；
   - 三个值：分别代表上、左右、下的值；
   - 四个值：分别代表上、右、下、左的值

#### margin-top、margin-right、margin-bottom、margin-left
- 属性值：<±number>[ px | rpx | vw | vh | % ]

#### padding-top、padding-right、padding-bottom、padding-left
- 属性值：<number>[ px | rpx | vw | vh | % ]

#### overflow
- 属性值：[ visible | hidden | scroll | auto ]
- 默认值：visible

#### border-radius 
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 默认值：0

#### border-top-left-radius、border-top-right-radius、border-bottom-left-radius、border-bottom-right-radius
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 默认值：0

#### border
- 属性值： `border-width` | `border-style` | `border-color`

#### border-width
- 属性值： `border-top-width` | `border-right-width` | `border-bottom-width` | `border-left-width`
- 说明：四个方向边框宽度的简写，以顺时针方向展示
   - 一个值：四个边框的值相同；
   - 两个值：分别代表上下、左右的边框值；
   - 三个值：分别代表上、左右、下的边框值；
   - 四个值：分别代表上、右、下、左四个方向的边框值；

#### border-*-width
- 属性值：<number>[ px | rpx | vw | vh ]

#### border-color
- 属性值： `border-top-color` | `border-right-color` | `border-bottom-color` | `border-left-color`
- 说明：四个方向边框颜色的简写，以顺时针方向展示
   - 一个值：四个边框的颜色相同；
   - 两个值：分别代表上下、左右的边框颜色；
   - 三个值：分别代表上、左右、下的边框颜色；
   - 四个值：分别代表上、右、下、左四个方向的边框颜色；

#### border-*-color
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]

#### border-style 
- 属性值：`border-top-style` | `border-right-style` | `border-bottom-style` | `border-left-style`
- 说明：四个方向边框样式的简写，以顺时针方向展示
   - 一个值：四个边框的颜色相同；
   - 两个值：分别代表上下、左右的边框样式；
   - 三个值：分别代表上、左右、下的边框样式；
   - 四个值：分别代表上、右、下、左四个方向的边框样式；

#### border-*-style
- 属性值：[ none | solid ]
- 说明：目前支持 solid 类型，dotted, dashed 等均不支持

#### border-*
- 属性值： `border-*-width` | `border-*-style` | `border-*-color`
- 说明：四个方向的边框样式简写

> 以上 border 属性中出现的 * 主要代表的是 top、right、bottom、left 四个方向；


### 定位

#### position
- 属性值：[ static、relative、absolute、fixed、sticky ]
- 默认值：static

#### top、left、bottom、right
- 属性值：<±number>[ px | rpx | vw | vh | % ]
- 默认值：

#### z-index `P`

- 属性值：<±number>
- 默认值：
- 说明：在某些元素深度嵌套情况下 `z-index` 的表现与 web 中会有差异


### Flexbox

#### align-items
- 属性值：[ flex-start | start | flex-end | end | center  | stretch | baseline ]
- 默认值：stretch

#### justify-content
- 属性值：[ flex-start | start | flex-end | end | center | space-around | space-between | space-evenly ]
- 默认值：flex-start

#### flex-direction
- 属性值：[ row | row-reverse | column | column-reverse ]
- 默认值：row

#### flex
- 属性值：[ auto | initial | none | `flex-grow/flex-shrink/flex-basis 组合` ]
- 默认值：initial

#### flex-grow
- 属性值：<number>
- 默认值：0

#### flex-shrink
- 属性值：<number>
- 默认值：1

#### flex-basis 
- 属性值：[ auto | <number>[ px | rpx | vw | vh ] ]
- 默认值：auto

#### flex-wrap
- 属性值：[ nowrap | wrap | wrap-reverse ]
- 默认值：nowrap

#### align-self
- 属性值：[ flex-start | flex-end | cener | baseline | stretch ]
- 默认值：flex-start

#### align-content
- 属性值：[ flex-start | flex-end | center | space-around | space-between ]
- 默认值：flex-start

#### flex-flow
- 属性值：[ `flex-direction 与 flex-wrap 组合` ]
- 默认值：row nowrap


### Transform

#### transform `P`
- 属性值：[ martix() | martix3d() | rotate() | rotateX() | rotateY() | rotateZ() | rotate3d() | translate() | translateX() | translateY() | translateZ() | translate3d() | scale() | scaleX() | scaleY() | perspective() | skew() ]
- 默认值： none
- 说明：skew 大于 90 度时，扭曲的方向与 chrome 相反

#### transform-origin 

- 属性值：<[ left | center | right | (top | bottom)] | [number[ px | rpx | vw | vh ]]> | 属性值：<[ top | center | bottom] | [number[ px | rpx | vw | vh ]]>
- 默认值：center
- 说明：
   - 如果仅有一个值时，可以为 left、center、right、top、bottom 任意一个值，或者数值+单位的形式；
   - 如果是两个值：第一个值为 left、center、right，第二值为 top、center、bottom，或者是数值+单位


### Transition

#### transition
- 属性值： `transition-property transition-duration transition-delay transition-timing-function`
- 说明： 目前只支持设置一组属性。

#### transition-propery
- 属性值：[ all | transform | opacity | background-color ]

#### transition-duration
- 属性值：<number>[ ms | s ]

#### transition-delay
- 属性值：<number>[ ms | s ]

#### transition-timing-function
- 属性值：[ ease | ease-in | ease-out | ease-in-out | linear | cubic-bezier() ]
- 默认值：ease


### 颜色与背景

#### color
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]

#### background
- 属性值： `background-color` | `background-image` | `background-repeat` | `backgrond-position`  | (/ `background-size` )
- 背景相关属性的简写

#### background-color
- 属性值：[ 颜色值 | transparent | 颜色关键词 ]

#### background-image
- 属性值：[ none | url() | linear-gradient() | radic-gradient() | conic-gradient() ]

#### background-repeat
- 属性值：[ no-repeat | repeat | repeat-x | repeat-y ]
- 默认值：repeat

#### background-position
- 属性值：[ <number>[ px | rpx | vw | vh ] | top | bottom | left | right | center ]
- 说明：
   - 默认为元素的左上角，即坐标 0 0；
   - 可以为一个值，第一个值为水平方向，第二值默认为 `center`
   - 可以为两个值：
      - 都为数值时，代表的是 x 和 y 坐标；
      - 如果第二个值为数值，第一个值不能是 `top` 或者 `bottom` ，因为坐标是 x y；

#### background-size
- 属性值：[ cover | contain | auto | <number>[ px | rpx | vw | vh ] ]
- 默认值：auto
- 说明：
   - 可以为双值的写法，第一个值代表背景图的宽度，第二个值代表高度；
   - 如果非 `cover` 或者 `contian` 的话，一个值的写法代表的是宽度，高度为默认的 `auto` ；

#### background-attachment
- 属性值：[ local | scroll ]
- 默认值：scroll


### 文本

#### font-size
- 属性值：<number>[ px | rpx | vw | vh | % ]
- 默认值：

#### text-align
- 属性值：[ left | center | right ]
- 默认值：left

#### font-weight
- 属性值：[ normal | bold | lighter | border | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ]
- 默认值：normal

#### font-family
- 属性值：字体名称
- 默认值：系统默认字体

#### text-overflow
- 属性值：[ clip | ellipsis ]
- 默认值：clip

#### text-decoration
- 属性值：[ underline | overline | line-through | none ]
- 默认值：none

#### line-height
- 属性值：[ normal | <±number>[ 无单位 | px | rpx | vw | vh | % ]
- 默认值：normal

#### font-style
- 属性值：[normal | italic]
- 默认值：normal

#### text-shadow
- 属性值：[ none | $x $y $blur-radius $color ]
- 默认值：none
- 相关说明：
   - `$x` 是指 x 坐标的偏移量；
   - `$y` 是指 y 坐标的偏移量；
   - `$blur-radius` 阴影的模糊扩散量；
   - `$color` 阴影的颜色值；
   - 至少需要 `$x` 和 `$y` 两个值， `$blur-radius` 默认是 **0** ， `$color` 默认是文本颜色；

#### letter-spacing
- 属性值：[ px | rpx | vw | vh ]
- 默认值：0

#### word-spacing
- 属性值：[ px | rpx | vw | vh ]
- 默认值：0

#### line-clamp
- 属性值：限制文本行数
- 默认值：


### 其他属性

#### opacity
- 属性值：大于等于 0 且小于等于 1 的数
- 默认值：0

#### box-shadow
- 属性值：[ none | $x $y $blur-radius $spread-radius $color ]
- 相关说明：
   - `$x` x 坐标的偏移量；
   - `$y` y 坐标的偏移量；
   - `$blur-radius` 阴影模糊半径；   
   - `$spread-radius` 阴影扩散半径；
   - `$color` 阴影的颜色值；
   -  暂时不支持 inset

#### visibility
- 属性值：[ visible | hidden ]
- 默认值：visible

#### vertical-align
- 属性值：[ baseline | top | bottom ]
- 默认值：baseline
- 说明：不支持 middle


## 单位
> 不支持 em rem 单位。

- px
- rpx
- vw
- vh
- %


## 颜色值
- W3C 定义的颜色关键字: 参考 [https://www.w3.org/wiki/CSS/Properties/color/keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords)
- RGB: eg. `rgb(0, 0, 0)`
- RGBA: eg. `rgba(0, 0, 0, 0.1)`
- HEX: 支持 3 位或 6 位的 16 进制值, eg: #fff, #000000
- transparent


## 与浏览器差异
| 分类 | 属性 | 差异 |
| --- | --- | --- |
| 盒模型 | box-sizing | box-sizing 只支持 border-box，web 上未设定此属性值时，盒模型的尺寸会有差异 |
|  | display | display 为 inline-block 类型时，element 之间无默认的 4px 间距 |
|  | margin | 流式布局中不支持 margin collapse 效果，与 web 表现有差异 |
| 定位 | z-index | 未支持 stacking context，不同层级的 element 上设置 z-index 时，优先级与 web 可能有差异 |
| Flexbox | order | 未支持利用 order 对 flex-item 进行排序 |
| 文本 | 空格 collapse | 文本空格 collapse 规则在不同 layout 下表现与 Web 不一致 |
|  | word-break | 不支持指定换行规则 |
|  | text-indent | 未支持 text-indent |
| box-shadow | | 暂时不支持 inset 类型阴影 |
| 渐变 | gradient | 某些渐变效果与浏览器不一致，如 radius-gradient, repeating-radial-gradient |
| 单位 |  | rem/em |
| 根节点 |  | Kraken 的 root 节点未区分 html 和 body 节点，在 html 与 body 上设置样式在 kraken 上可能不生效 |
| animation |  | 未支持 CSS animation |
| variable |  | 未支持 CSS variable |
| iconfont |  | 未支持 iconfont |
| calc() |  | 未支持 calc() |
| 选择器 |  | 未支持 css 选择器 |
| 继承 |  | 未支持样式继承 |



