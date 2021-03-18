# 与浏览器差异

Kraken 在 CSS 标准上与浏览器有如下差异：

| 分类 | 属性 | 差异 |
| --- | --- | --- |
| 盒模型 | box-sizing | 未支持 box-sizing，盒模型尺寸默认按 border-box 计算 |
|  | display | display 为 inline-block 类型且 HTML 标签之间有空格时，Kraken 不会像 web 一样给标签加默认间距 |
|  | margin | 未支持 [margin collapse](https://www.w3.org/TR/CSS2/box.html#collapsing-margins) |
| 定位 | z-index | 未支持 [stacking context](https://www.w3.org/TR/CSS2/zindex.html)，不同层级的 element 上设置 z-index 时，优先级与 web 可能有差异，见 [issue](https://github.com/openkraken/kraken/issues/55) |
| Flexbox | order | 未支持利用 order 对 flex 成员项进行排序 |
| 文本 | 跨标签文本合并 | 某些情况下跨标签的相邻文本显示效果与 web 不一致，见 [issue](https://github.com/openkraken/kraken/issues/28) |
|  | word-break | 未支持 word-break |
|  | text-indent | 未支持 text-indent |
| border-style | | 未支持除 solid 之外的类型 |
| box-shadow | | 未支持 inset 类型 box-shadow |
| 单位 |  | 未支持 rem/em |
| 根节点 |  | Kraken 的 root 节点未区分 html 和 body 节点，在 html 与 body 上设置样式在 kraken 上不生效 |
| animation |  | 未支持 CSS animation |
| variable |  | 未支持 CSS variable |
| iconfont |  | 未支持 iconfont |
| calc() |  | 未支持 calc() |
| 选择器 |  | 未支持 css 选择器 |
| 继承 |  | 未支持样式继承 |