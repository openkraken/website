# Layout

In terms of layout, Kraken currently supports the W3C standard [Flow Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout) and [Flexible Box Layout](https://developer .mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox).

## Layout

The display attribute defines the display type of the element, and controls the layout by specifying different values.

### Attributes

#### display

-Definition: Set the display type of the element.
-Property value: [block | inline-block | inline | flex | inline-flex | none]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display).
-Note: Kraken currently only supports block | inline-block | inline | flex | inline-flex | none.

## Flow Layout

Kraken supports CSS flow layout, that is, arranging elements in the document flow through inline and block, and at the same time through [display property](https://developer.mozilla.org/zh-CN/docs/Web/CSS /display) Change the default arrangement of elements.

### Inline elements

In the document flow, inline elements are displayed in the inline direction, that is, the direction in which the words are expressed in the sentence according to the document writing mode, and are displayed one after another from the left.
The common tags displayed inline by default in Kraken are `<span>` `<img>` `<input>` `<a>`.

### Block element

In the document flow, block elements are displayed one after another, just like paragraphs in the writing mode of the document, starting from the top and moving down the page.
The common tags displayed at the block level by default in Kraken are `<div>` `<p>`.

## Flexbox layout

Kraken’s flexbox layout is based on the CSS [Flexbox model](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox). The Flexbox properties supported by Kraken are as follows:

### flex-direction

-Definition: It defines the arrangement direction of the flex member items in the flex container.
-Property value: [row | row-reverse | column | column-reverse]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction).

### flex-wrap

-Definition: Specify whether the flex member items are displayed in a single line or in multiple lines. If line wrapping is allowed, this attribute also specifies the arrangement direction within the line.
-Property value: [nowrap | wrap | wrap-reverse]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap).

### flex-flow

-Definition: shorthand for flex-direction and flex-wrap.
-Property value: [nowrap | wrap | wrap-reverse]
-Property value: [\<flex-direction> || \<flex-wrap>]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow).

### align-items

-Definition: It defines the arrangement of all flex member items in the flex container along the vertical axis.
-Property value: [flex-start | start | flex-end | end | center | stretch | baseline]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items).

### justify-content

-Definition: It defines the arrangement of the flex member items in the flex container in the direction of the main axis.
-Property value: [flex-start | start | flex-end | end | center | space-around | space-between | space-evenly]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content).

### align-content

-Definition: When the flex member items are arranged in multiple rows, the arrangement of each row in the direction of the vertical axis is defined. This attribute is invalid for single-line arrangement (flex-wrap: nowrap is set).
-Property value: [flex-start | flex-end | center | space-around | space-between]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content).

### align-self

-Definition: It defines how a single flex member item in the flex container is arranged along the vertical axis to handle the blank part.
-Property value: [flex-start | flex-end | cener | baseline | stretch]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self).

### flex

-Definition: defines the size of the remaining space in the container that the flex member item can occupy.
-Property value: [auto | initial | none | \<flex-grow> \<flex-shrink>? || \<flex-basis>]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex).

### flex-grow

-Definition: When the sum of the sizes of all flex member items on the main axis is less than the size of the flex container, it specifies the proportion of the remaining space of the flex container that should be allocated to the current flex member items.
-Attribute value: \<number>
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow).

### flex-shrink

-Definition: When the sum of the size of all flex member items on the main axis is greater than the size of the flex container, it specifies the proportion of the current flex member item that should be deducted from the excess space of all flex member items.
-Attribute value: \<number>
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink).

### flex-basis

-Definition: The initial size of the flex member items in the main axis direction is specified.
-Attribute value: [auto | \<number>[ px | rpx | vw | vh]]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis).
