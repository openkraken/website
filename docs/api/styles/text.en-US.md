# Fonts and text

Kraken supports the following fonts and related text styles.

## Font

### font-size

-Definition: Used to specify the font size.
-Attribute value: \<number>[ px | rpx | vw | vh | vmin | vmax |%]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size).

### font-weight

-Definition: Used to specify the thickness of the font.
-Property value: [normal | bold | lighter | border | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight).

### font-family

-Definition: Set the font for the selected element by specifying a sequential list consisting of font names or font family names.
-Property value: font name
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family).

### font-style

-Definition: Choose [font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) italic or oblique style under the font.
-Property value: [normal | italic]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style).

## Text

### text-align

-Definition: Used to specify how the inline content (such as text) is aligned relative to its block parent element. text-align does not control the alignment of the block element itself, only the alignment of its inline content.
-Property value: [left | center | right]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align).

### text-overflow

-Definition: Set the omission style when the content exceeds the container.
-Property value: [clip | ellipsis]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow).

### text-decoration

-Definition: Specify the appearance of the decoration line of the text (underline, overline, through/strikethrough or flashing), which is [text-decoration-line](https://developer.mozilla.org/zh-CN/docs /Web/CSS/text-decoration-line),[text-decoration-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color),[text- decoration-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style), and the new [text-decoration-thickness](https://developer. mozilla.org/zh-CN/docs/Web/CSS/text-decoration-thickness) Abbreviation of attribute.
-Property value: [underline | overline | line-through | none]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration).

### line-height

-Definition: Specify the spacing between multiple lines of elements, such as the spacing of multiple lines of text. For block-level elements, it specifies the minimum height of the line boxes of the element. For non-replaced inline elements, it is used to calculate the height of the line box.
-Property value: [normal | <±number>[ no unit | px | rpx | vw | vh | vmin | vmax |%]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height).

### text-shadow

-Definition: Add a shadow to the text. You can add multiple shadows to text and text-decorations, and the shadow values ​​are separated by commas. Each shadow value is composed of the offset of the element in the X and Y directions, the blur radius, and the color value.
-Property value: [none | \$x \$y \$blur-radius \$color]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow).

### letter-spacing

-Definition: Used to set the spacing of text characters.
-Property value: [px | rpx | vw | vh]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing).

### word-spacing

-Definition: Used to set the spacing of text characters.
-Property value: [px | rpx | vw | vh]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing).

### line-clamp

-Definition: Used to limit the maximum number of displayed lines of text.
-Attribute value: \<number>
-Reference: [link](https://www.w3.org/TR/css-overflow-3/#line-clamp).
