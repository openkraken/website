# 与浏览器差异

Kraken 在 CSS 标准上与浏览器有如下差异：

| 属性            | 差异                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| box-sizing      | box-sizing 只支持 border-box，Web 上未设定此属性值时，盒模型的尺寸会有差异                                                      |
| display         | 1. 仅支持 block, inline-block, flex, inline-flex, inline, none<br />2. display 为 inline-block 类型时，element 之间无默认的间距 |
| margin          | 流式布局中不支持 margin collapse 效果，与浏览器表现有差异                                                                       |
| z-index         | 未支持 stacking context，不支持[跨层级 z-index 排序](https://github.com/openkraken/kraken/issues/55)                            |
| order(Flexbox)  | 未支持利用 order 对 flex item 进行排序                                                                                          |
| 文本空格        | 文本空格在某些布局下与浏览器表现不一致                                                                                          |
| text-align      | 暂不支持 justify-all, match-parent                                                                                              |
| line-break      | 文本换行不支持                                                                                                                  |
| gradient        | 某些渐变效果与浏览器表现不一致，如 radius-gradient, repeating-radial-gradient                                                   |
| border-style    | 仅支持 solid                                                                                                                    |
| justify-content | 未支持 normal                                                                                                                   |
| vertical-align  | 不支持 middle                                                                                                                   |
| align-items     | 未支持 normal, first baseline, last baseline                                                                                    |
| align-content   | 不支持 normal, baseline, first baseline, last baseline                                                                          |
| mask            | 暂不支持                                                                                                                        |
| border-image    | 暂不支持                                                                                                                        |
| text-indent     | 暂不支持                                                                                                                        |
| animation       | 暂不支持                                                                                                                        |
| CSS Variable    | 暂不支持                                                                                                                        |
| iconfont        | 暂不支持                                                                                                                        |
| calc()          | 暂不支持                                                                                                                        |
| 单位            | 不支持 rem/em                                                                                                                   |
