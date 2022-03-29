# Differences with browsers

Considering the higher performance and smaller size, Kraken is different from browsers in terms of usage.

## It is recommended to use JS instead of HTML for normal application entry

The entry file of the web is an HTML document with extension such as `.html` or `.htm`.

While Kraken is more like React Native and Weex, it accepts a JSBundle of `.js` and uses the DOM API to build views and styles.

This choice is based on performance considerations. Modern front-end frameworks usually use JS logic to manipulate the DOM to generate UI. Downloading JS directly can reduce the time it takes to download and parse HTML documents.

HTML documents under the web:

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

Compared to HTML, JS has more flexible features. Due to the implementation of the standard DOM API, you can use most of the excellent front-end frameworks in the front-end community, such as Vue, Rax, React, etc. For details, please refer to [Development Documentation](/en-US/guide).

Of course, for an SSR application, it is recommended to use HTML as the entry. For details, please refer to [Development Documentation](/en-US/guide/advanced/html).

## Limited DOM & global API support

In Kraken, not all DOM and global APIs are supported. Leaving aside the historical baggage of browsers, we implemented most of the modern, frequently used, user-friendly W3C APIs.

For a more detailed support list, you can refer to the site's [API documentation](/en-US/api/tags).

## Style capability differences

After Kraken 0.10, it has been supported to import external styles through `<link>` or `<style>` tags, but the CSS parsing part only supports the `class` selector, you can use it like this:

```html
<!-- index.html -->
<link rel="stylesheet" href="./common.css" />
```

```css
/* common.css */
.logo {
  width: 100px;
  object-fit: contain;
}
```

Please refer to the [Differences with browsers](/en-US/api/styles/difference) documentation.

## local storage

In browsers, we often use `LocalStorage` for local data storage, while in Kraken, `AsyncStorage` is used for local storage, which provides a more efficient asynchronous API to prevent I/O from blocking the UI thread, more info See [async local storage](/en-US/api/enhancement/storage).
