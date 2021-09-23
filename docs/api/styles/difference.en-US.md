# Difference with browser

Kraken has the following differences with browsers in terms of CSS standards:

| Properties     | Differences                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| box-sizing     | box-sizing only supports border-box. When this property value is not set on the Web, the size of the box model will be different                             |
| display        | 1. Only support block, inline-block, flex, inline-flex, inline, none<br />2. When display is inline-block type, there is no default spacing between elements |
| margin         | The margin collapse effect is not supported in the flow layout, which is different from the browser performance                                              |
| z-index        | Stacking context is not supported, and [Cross-level z-index sorting](https://github.com/openkraken/kraken/issues/55) is not supported                        |
| order(Flexbox) | The use of order to sort flex items is not supported                                                                                                         |
| Text space     | Text space is inconsistent with browser performance under certain layouts                                                                                    |
| text-align     | Not currently supported justify-all, match-parent                                                                                                            |
| line-break     | Text wrapping is not supported                                                                                                                               |
| gradient       | Some gradient effects are inconsistent with browser performance, such as radius-gradient, repeating-radial-gradient                                          |
| border-style   | Only solid support                                                                                                                                           |
| vertical-align | middle is not supported                                                                                                                                      |
| align-items    | Not supported first baseline, last baseline                                                                                                                  |
| align-content  | Does not support baseline, first baseline, last baseline                                                                                                     |
| mask           | Not currently supported                                                                                                                                      |
| border-image   | Not currently supported                                                                                                                                      |
| text-indent    | Not currently supported                                                                                                                                      |
| animation      | Not currently supported                                                                                                                                      |
| CSS Variable   | Not currently supported                                                                                                                                      |
| iconfont       | Not currently supported                                                                                                                                      |
| calc()         | Not currently supported                                                                                                                                      |
| Unit           | Rem/em not supported                                                                                                                                         |
