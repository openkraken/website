# Difference with browser

Considering the higher performance and smaller size, Kraken has a certain difference in the use level and the browser.

## Use JS instead of HTML

The web entry file is an HTML document with extensions such as `.html` or `.htm`.

Kraken is more similar to React Native and Weex. It accepts a JSBundle of `.js` and uses the DOM API to build views and styles.

This choice is for performance considerations. Modern front-end frameworks usually use JS logic to manipulate DOM to generate UI. Directly downloading JS can reduce the time it takes to download and parse HTML documents.

HTML documents under the Web:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div>Hello World!</div>
  </body>
</html>
```

Use JS Bundle:

```js
const root = document.createElement('div');
root.appendChild(document.createTextNode('Hello World!'));
document.body.appendChild(root);
```

Compared to HTML, JS has more flexible features. Since the standard DOM API is implemented, you can use most of the excellent front-end frameworks in the front-end community, such as Vue, Rax, React, etc., for details, please refer to [Development Document](/en-US/guide).

## Limited CSS support

So far, Kraken does not support the use of [Cascading Style Sheets (CSS)](https://developer.mozilla.org/zh-CN/docs/Web/CSS), which means you cannot use `.css` files Or the `<style>` tag. The way to modify the node style is to use [Inline CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_is_structured#%E5%86%85%E8%81%94 %E6%A0%B7%E5%BC%8F) or the `style` attribute of the node.

```js
const div = document.createElement('div');
div.style.color = 'red'; // Use the style attribute.

div.setAttribute('style', 'color: red; font-size: 16px;'); // Use inline CSS Text.
```

## Limited DOM & global API support

In Kraken, not all DOM and global APIs are supported. Putting aside the historical baggage of browsers, we implemented most of the modern, frequently used, and user-friendly W3C APIs.

For more detailed support list, please refer to [API document](/en-US/api/tags) on the site.

## Style ability difference

Please refer to the [Differences from browser](/en-US/api/styles/difference) document.

## Local storage

In browsers, we often use `LocalStorage` for local data storage, while in Kraken we use `AsyncStorage` to implement local storage. It provides a more efficient asynchronous API to prevent I/O from blocking the UI thread. More information You can view [Asynchronous Local Storage](/en-US/api/enhancement/storage).
