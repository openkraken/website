# Touch and gesture

A complex interactive application often requires the developer to handle touch events in order to provide specific feedback based on the user's operations on the touch screen or touch pad.

## TouchEvent

Kraken provides [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) to enable developers to monitor the underlying touch events. This type of event is used to describe one or more contacts, allowing developers to detect the movement of contacts, the increase and decrease of contacts, and so on.

If the developer needs to monitor the entire process of the user touching the screen with a finger (touch pen) on an element and making an interactive gesture and triggering a specific behavior, you can follow the example shown below.

**Example:**

```js
const root = document.getElementById('root');

root.addEventListener('touchstart', e => {
  // start touching
});

root.addEventListener('touchmove', e => {
  // start moving after touching
});

root.addEventListener('touchend', e => {
  // End touch (hand or touch pen, etc. leave the screen)
});
```

However, in the actual development process, developers often seldom use these low-level APIs. Some click events and gesture events encapsulated by the upper layer are conducive to developing a complex interactive application more quickly.

## click event

If the developer wants to listen to the user's click on an element to make interactive events (such as submitting a form, refreshing the page, etc.), they need to listen to the click event.

**Example:**

```js
const root = document.getElementById('root');

root.addEventListener('click', () => {
  // handle the click event
});
```

In applications such as Rax / React / Vue, you only need to bind the click event to the corresponding element through the ability provided by the framework to perform related operations.

## Use more advanced gesture capabilities

On the Web, developers often need to encapsulate the underlying [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) to provide a set of higher-level gesture capabilities. Kraken has built-in these commonly used gesture abilities. For specific advanced gesture abilities usage, please refer to [Using Enhanced Gesture Abilities](/en-US/guide/advanced/gesture).
