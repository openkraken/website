# Sliver

Kraken 在 W3C 标准的 `display` 类型外扩展了 `sliver` 类型，目的是解决 Web 标准下滚动视图的复用回收问题，类似客户端开发中的 RecyclerView/UITableView 实现滚动回收的布局容器，Display Sliver 定义了容器的布局方式以及当子元素滚动出 viewport 后的回收特性。

## 属性

**display: sliver**

sliver 属于 W3C Box Layout Modes 中定义的 Inner Display Layout Models 类型，详见 https://www.w3.org/TR/css-display-3/#inner-model

当 display 为 `sliver` 时，该元素的主轴方向表现为可滚动，超出视口的内容不会被绘制，直到区域滚动到视口内。

**sliver-direction**

CSS 属性 `sliver-direction` 指定了 Sliver 容器的主轴方向 (Main Axis)。

`sliver-direction` 的合法值包括：

- column: 可滚动方向为垂直方向(默认值)
- row: 可滚动方向为水平方向

Sliver 容器的主轴方向即滚动方向；Sliver 容器的交叉轴 (Cross Axis) 方向与主轴方向交叉，Sliver 容器在交叉轴方向不可滚动。

## 布局特性

在主轴方向 (Main Axis) 上可滚动, 其值由 `sliver-direction` 指定, 默认值为 `column` ；

主轴方向上的尺寸需要由 CSS 显式的 width/height 定义，否则默认值为 0。

交叉轴 (Cross Axis) 方向上的尺寸会填充满父容器尺度上的剩余空间, 与 [flow layout](https://www.w3.org/TR/css-display-3/#flow-layout) 中的 **block-level** 的表现相同。

对容器的每一个子元素，其主轴方向上的尺寸需要由子元素在 CSS 中定义，否则默认值为 0；其交叉轴方向上的尺寸会填充满 SliverContainer 的剩余空间。

## 回收特性

当 Sliver 容器中的子元素滚动出该容器的 Viewport 时，可以将该子元素中用于渲染的节点回收以达到节省内存占用的目的。当子元素重新出现时，根据 DOM 描述重新生成渲染节点。
