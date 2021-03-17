# Transition

该属性可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 `:hover`，`:active` 或者通过 JavaScript 实现的状态变化。

## 语法
```
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

`transition` 属性可以被指定为一个或多个 CSS 属性的过渡效果，多个属性之间用逗号','进行分隔。
每个单属性转换都描述了应该应用于单个属性的转换（或特殊值 `all` 和 `none` ）。 这包括：

- 零或一个值，表示转换应适用的属性。 这可能是以下任何一种：
   - 关键字 `all`
   - CSS 属性 。
- 零或一个 [`<function>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 值表示要使用的过渡函数
- 零，一或两个 `<time>` 值。可以解析为时间的第一个值被指定为过度时间，并且可以解析为时间的第二个值被指定为延迟时间。
