# 本地存储

Kraken 实现了 `AsyncStorage` API 作为本地存储的接口，与大家熟悉的 [LocalStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 一样，`AsyncStorage` 也是 [Web Storage](https://www.w3.org/TR/webstorage/) 的一种实现。

你无需引入任何模块，直接使用 `asyncStorage` 对象就可以进行操作。

> 需要额外注意的是，目前 Kraken 的本地存储还未实现跨域 [Origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin) 级别的隔离，未来我们会提供相关支持，你可以关注此 [issue#127](https://github.com/openkraken/kraken/issues/127) 的进展。

## API

### getItem(key)

读取存储项，需要注意的是，`key` 必须是一个字符串类型的变量。

**示例：**

```js
const value = await asyncStorage.getItem('foo');
console.log(`Value is: ${value}`);
```

### setItem(key, value)

设置存储项，`key` 和 `value` 都必须是一个字符串类型的变量。

**示例：**

```js
await asyncStorage.setItem('foo', 'bar');
```

### removeItem(key)

移除存储项，`key` 必须是一个字符串类型的变量。

**示例：**

```js
await asyncStorage.removeItem('foo');
```

### getAllKeys()

获取所有存储内容的 `key` 的数组。

**示例：**

```js
const keys = await asyncStorage.getAllKeys();
console.log(`All keys: ${keys}`);
```

### clear()

清除所有存储的内容。

**示例：**

```js
await asyncStorage.clear();
```
