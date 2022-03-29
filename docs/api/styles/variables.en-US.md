# CSS custom properties (variables)

Since version 0.10, Kraken supports CSS Variables capability.

## Basic usage

To declare a custom property, the property name needs to start with two minus signs (`--`), and the property value can be any valid CSS value. Like other properties, custom properties are also written in the ruleset, as follows:

```css
.root {
  --main-bg-color: brown;
}
```

It should be noted that the declaration of this custom property is also scoped.

When used, use the `var()` function to access.

```css
.root {
  background-color: var(--main-bg-color);
}
```

## Inheritance of custom properties

Custom properties are inherited. This means that if no value is set for this custom property on a given element, the value on its parent element will be used. Look at this piece of HTML:

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

Companion CSS:

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

In this case, the results of var(--test) are:

- for elements class="two" : 10px
- for elements class="three" : 2em
- For element class="four" : 10px (inherited from parent property)
- For element class="one" : illegal value, it will become the default value of the custom attribute

## Custom property alternate value

Multiple fallback values ​​can be defined with the `var()` function, which will be replaced with fallback values ​​when the given value is undefined.

The first parameter of the function is the name of the custom property. If the second parameter is provided, it represents an alternate value that takes effect when the custom property value is invalid. The second parameter can be nested, but cannot continue to be tiled, for example:

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
