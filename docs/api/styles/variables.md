# CSS 自定义属性（变量）

从 0.10 版本开始，Kraken 支持 CSS 变量 (CSS Variables) 能力。

## 基本用法

声明一个自定义属性，属性名需要以两个减号（`--`）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
.root {
  --main-bg-color: brown;
}
```

需要注意的是，这个自定义属性的声明也是有作用域的。

使用时使用 `var()` 函数访问。

```css
.root {
  background-color: var(--main-bg-color);
}
```

## 自定义属性的继承性

自定义属性会继承。这意味着如果在一个给定的元素上，没有为这个自定义属性设置值，在其父元素上的值会被使用。看这一段 HTML：

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

配套的 CSS：

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

在这个情况下， var(--test) 的结果分别是：

- 对于元素 class="two" ：10px
- 对于元素 class="three" ：2em
- 对于元素 class="four" ：10px （继承自父属性）
- 对于元素 class="one" ：非法值，会变成自定义属性的默认值

## 自定义属性备用值

用 `var()` 函数可以定义多个备用值(fallback value)，当给定值未定义时将会用备用值替换。

函数的第一个参数是自定义属性的名称。如果提供了第二个参数，则表示备用值，当自定义属性值无效时生效。第二个参数可以嵌套，但是不能继续平铺展开下去了，例如：

```css
.two {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}

.three {
  background-color: var(
    --my-var,
    var(--my-background, pink)
  ); /* pink if --my-var and --my-background are not defined */
}

.three {
  background-color: var(
    --my-var,
    --my-background,
    pink
  ); /* Invalid: "--my-background, pink" */
}
```
