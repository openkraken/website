# Transformation and transition

Kraken supports the following related styles of deformation and transition.

## Deformation

### transform

-Definition: Rotate, zoom, tilt or translate the specified element.
-Attribute value: none | [martix() | martix3d() | rotate() | rotateX() | rotateY() | rotateZ() | rotate3d() | translate() | translateX() | translateY() | translateZ() | translate3d() | scale() | scaleX() | scaleY() | perspective() | skew()]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform).
-Note: When skew() is greater than 90 degrees, the animation rotation sequence is opposite to that of the browser, see [issue](https://github.com/openkraken/kraken/issues/25)

### transform-origin

-Definition: Specify the origin of the element's deformation.
-Property value: <[ left | center | right | (top | bottom)] | [number[ px | rpx | vw | vh ]]>
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin).

## Transition

#### transition

-Definition: Define different transition effects when an element switches between different states. Shorthand properties for transition-property, transition-duration, transition-delay and transition-timing-function.
-Property value: transition-property | transition-duration | transition-delay | transition-timing-function
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition).
-Note: Only one set of attributes is currently supported.

#### transition-propery

-Definition: Specify the name of the transition attribute of the application.
-Property value: [all | transform | opacity | background-color]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property).

#### transition-duration

-Definition: Specify the time required for the transition animation in seconds or milliseconds.
-Attribute value: \<number>[ ms | s]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration).

#### transition-delay

-Definition: Specifies the time to wait before the transition effect starts to take effect.
-Attribute value: \<number>[ ms | s]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay).

#### transition-timing-function

-Definition: A function that generates a constantly changing intermediate value for the transitioned CSS property in the transition, and is used to describe how the intermediate value is calculated.
-Property value: [ease | ease-in | ease-out | ease-in-out | linear | cubic-bezier()]
-Reference: [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function).
