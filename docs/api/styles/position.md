# 定位

Kraken 支持 CSS 的 [position 定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)，先为元素设置 position 属性，然后通过设置 top、right、bottom、left 四个属性设置元素坐标。
## position
kraken 支持 CSS 的以下几种 position 属性值：

- static：默认值，无定位，元素在文档常规流中按当前的位置布局，指定 top, right, bottom, left 和 z-index 属性无效。

- relative：相对定位，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）

- absolute: 绝对定位，元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。

- fixed：固定定位，元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。
- sticky: 粘性定位，元素根据正常文档流进行定位，然后相对它的最近滚动祖先和 [containing block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block) (最近块级祖先)，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。
## 坐标

- top: 距离上方的偏移量，默认为 0。

- right: 距离右方的偏移量，默认为 0。

- bottom: 距离下方的偏移量，默认为 0。

- left: 距离左方的偏移量，默认为 0。

## z-index
对于一个已经定位的元素（即其 position 属性值不是 static），z-index 属性指定元素在当前堆叠中的优先级，当元素之间重叠的时候， z-index 较大的元素会覆盖较小的元素在上层进行显示。

