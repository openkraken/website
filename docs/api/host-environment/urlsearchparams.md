# URLSearchParams

`URLSearchParams` 接口定义了一些实用的方法来处理 URL 的查询字符串。

## 构造函数

`URLSearchParams()` 构造器创建并返回一个新的 [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 对象。 开头的`"?"` 字符会被忽略。

```js
const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);
```

`paramsString` （可选）可以是一个 String、Object 或 Array。

```javascript
// Pass in a string literal
const url = new URL('https://example.com?foo=1&bar=2');
// Retrieve from window.location
const url2 = new URL(window.location);

// Retrieve params via url.search, passed into ctor
const params = new URLSearchParams(url.search);
const params2 = new URLSearchParams(url2.search);

// Pass in a sequence
const params3 = new URLSearchParams([
  ['foo', 1],
  ['bar', 2],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: 1, bar: 2 });
```

## 方法

- `append()` 插入一个指定的键/值对作为新的搜索参数。

- `delete()` 从搜索参数列表里删除指定的搜索参数及其对应的值。

- `get()` 获取指定搜索参数的第一个值。

- `getAll()` 获取指定搜索参数的所有值，返回是一个数组。

- `has()` 返回 Boolean 判断是否存在此搜索参数。

- `set()` 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。

- `toString()` 返回搜索参数组成的字符串，可直接使用在 URL 上。
