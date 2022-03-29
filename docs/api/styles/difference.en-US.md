# Differences with browsers

Kraken has the following differences between CSS standards and browsers:

| Properties     | Differences                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| box-sizing     | box-sizing only supports border-box. When this property value is not set on the Web, the size of the box model will be different                               |
| display        | 1. Only supports block, inline-block, flex, inline-flex, inline, none<br /> 2. When display is inline-block type, there is no default spacing between elements |
| z-index        | does not support stacking context, does not support [cross-level z-index sorting](https://github.com/openkraken/kraken/issues/55)                              |
| order(Flexbox) | Sorting flex items by order is not supported                                                                                                                   |
| Text Spaces    | Text Spaces Do Not Behave With Browsers In Some Layouts                                                                                                        |
| text-align     | does not support justify-all, match-parent                                                                                                                     |
| line-break     | Text wrapping is not supported                                                                                                                                 |
| gradient       | Some gradient effects are inconsistent with browser performance, such as radius-gradient, repeating-radial-gradient                                            |
| border-style   | only supports solid                                                                                                                                            |
| vertical-align | middle is not supported                                                                                                                                        |
| align-items    | first baseline, last baseline not supported                                                                                                                    |
| align-content  | does not support baseline, first baseline, last baseline                                                                                                       |
| mask           | Currently not supported                                                                                                                                        |
| border-image   | Currently not supported                                                                                                                                        |
| text-indent    | Not currently supported                                                                                                                                        |
| animation      | Currently not supported                                                                                                                                        |
| iconfont       | Currently not supported                                                                                                                                        |
| calc()         | Not supported yet                                                                                                                                              |
