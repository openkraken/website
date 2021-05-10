# Sliver

Kraken extends the `sliver` type in addition to the W3C standard `display` type. The purpose is to solve the problem of reuse and recycling of scrolling views under the Web standard, similar to the layout container of `RecyclerView / UITableView` in client development that implements scrolling recycling, Display Sliver defines the layout of the container and the recycling characteristics when the child elements are scrolled out of the `Viewport`.

## Attributes

**display: sliver**

`sliver` belongs to the Inner Display Layout Models type defined in W3C Box Layout Modes, see [CSS Display 3](https://www.w3.org/TR/css-display-3/#inner-model) for details.

When display is `sliver`, the main axis of the element appears to be scrollable, and the content beyond the viewport will not be drawn until the area is scrolled into the viewport.

**Example:**

```js
const div = document.createElement('div');
div.style.display = 'sliver';
document.body.appendChild(div);
```

**sliver-direction**

The CSS property `sliver-direction` specifies the Main Axis of the Sliver container.

The legal values ​​of `sliver-direction` include:

-column: the scrollable direction is vertical (default value)
-row: The scrollable direction is horizontal

The main axis direction of the Sliver container is the scroll direction; the Cross Axis direction of the Sliver container crosses the main axis direction, and the Sliver container is not scrollable in the direction of the cross axis.

**Example:**

```js
const div = document.createElement('div');
div.style.display = 'sliver';
div.style.sliverDirection = 'row';

document.body.appendChild(div);
```

## Layout features

It can be scrolled in the Main Axis. Its value is specified by `sliver-direction`, and the default value is `column`.

The size in the main axis direction needs to be defined by CSS explicit `width / height`, otherwise the default value is 0.

The size in the Cross Axis direction will fill the remaining space on the parent container scale, and [flow layout](https://www.w3.org/TR/css-display-3/#flow-layout) The **block-level** in the behaves the same.

For each child element of the container, the size in the main axis direction needs to be defined by the child element in CSS, otherwise the default value is 0; the size in the cross axis direction will fill the remaining space of the SliverContainer.

## Recycling features

When the child element in the Sliver container scrolls out of the container's Viewport, the node used for rendering in the child element can be recycled to save memory usage. When the child element reappears, the rendering node is regenerated according to the DOM description.
