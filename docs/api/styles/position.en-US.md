# position

Kraken supports all types of [position positioning](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) methods defined in the CSS specification, involving the following properties:

## Attributes

### position

- Definition: Specify the positioning method of the element in the document.
- Property value: [static | relative | absolute | fixed | sticky]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position).

### z-index

- Definition: Defines the z-order of a positioning element and its descendants or flex member items. When the elements overlap, the element with a larger z-index will cover the smaller element and be displayed on the upper layer.
- Property value: <±number>
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index).
- Note: Kraken does not fully support W3C's [stacking context](https://www.w3.org/TR/CSS2/zindex.html), which leads to the same z-index performance as the Web when some elements are deeply nested There are differences in comparison, see [issue](https://github.com/openkraken/kraken/issues/55).

### top

- Definition: Defines the offset between the upper margin boundary of the positioned element and the upper boundary of its containing block. Setting this attribute for non-positioned elements is invalid.
- Attribute value: <±number>[ px | rpx | vw | vh | vmin | vmax |%]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top).

### right

- Definition: Defines the offset between the right margin boundary of the positioned element and the right boundary of its containing block. Setting this attribute for non-positioned elements is invalid.
- Attribute value: <±number>[ px | rpx | vw | vh | vmin | vmax |%]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right).

### bottom

- Definition: Defines the offset between the lower margin boundary of the positioned element and the lower boundary of its containing block. Setting this attribute for non-positioned elements is invalid.
- Attribute value: <±number>[ px | rpx | vw | vh | vmin | vmax |%]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom).

### left

- Definition: Defines the offset between the left margin boundary of the positioned element and the left boundary of its containing block. Setting this attribute for non-positioned elements is invalid.
- Attribute value: <±number>[ px | rpx | vw | vh | vmin | vmax |%]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left).
