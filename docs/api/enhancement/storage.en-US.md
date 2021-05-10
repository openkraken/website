# Asynchronous local storage

Kraken implements the `AsyncStorage` API as an interface for local storage, similar to the familiar [LocalStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage), `AsyncStorage` It is also an implementation of [Web Storage](https://www.w3.org/TR/webstorage/).

You don't need to import any modules, you can directly use the `asyncStorage` object to operate.

> It is important to note that currently Kraken’s local storage has not yet achieved cross-domain [Origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin) level isolation. We will provide related information in the future. Yes, you can follow the progress of this [issue#127](https://github.com/openkraken/kraken/issues/127).

## API

### getItem(key)

When reading storage items, note that `key` must be a variable of string type.

**Example:**

```js
const value = await asyncStorage.getItem('foo');
console.log(`Value is: ${value}`);
```

### setItem(key, value)

To set the storage item, both `key` and `value` must be a string variable.

**Example:**

```js
await asyncStorage.setItem('foo', 'bar');
```

### removeItem(key)

To remove storage items, `key` must be a variable of string type.

**Example:**

```js
await asyncStorage.removeItem('foo');
```

### getAllKeys()

Get an array of `key` of all stored contents.

**Example:**

```js
const keys = await asyncStorage.getAllKeys();
console.log(`All keys: ${keys}`);
```

### clear()

Clear all stored content.

**Example:**

```js
await asyncStorage.clear();
```
