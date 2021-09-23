# Color and background

Kraken supports the following color and background related styles.

## colour

#### color

- Definition: Set the foreground color of the text and text decoration of an element, and also set the currentcolor, which is the default value for other color attributes such as border-color, background-color when the specified color is not set.
- Property value: [color value | transparent | color keyword]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color).

## background

#### background

- Definition: Specify the background of the element, which is the shorthand attribute of background-color, background-image, background-repeat, backgrond-position and background-size.
- Attribute value: background-color | background-image | background-repeat | backgrond-position | background-size
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background).

#### background-color

- Definition: Used to set the background color of an element.
- Property value: [color value | transparent | color keyword]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color).

#### background-image

- Definition: used to set one or more background images of an element.
- Property value: [none | url() | linear-gradient() | radic-gradient() | conic-gradient()]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image).

#### background-repeat

- Definition: Define the repeating method of the background image. The background image can be repeated along the horizontal axis, the vertical axis, the two axes, or not at all.
- Attribute value: [no-repeat | repeat | repeat-x | repeat-y]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat).

#### background-position

- Definition: Used to set the position of the background image.
- Property value: [\<number>[ px | rpx | vw | vh] | top | bottom | left | right | center]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position).

#### background-size

- Definition: Set the background image size. The picture can maintain its original size, or stretch to a new size, or zoom to the size of the available space of the element while maintaining its original proportions.
- Property value: [cover | contain | auto | \<number>[ px | rpx | vw | vh]]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size).
- Note: Percentage is not currently supported.

#### background-attachment

- Definition: The position of the specified background image is fixed in the viewport or scrolled along with the block containing it.
- Property value: [local | scroll]
- Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment).
