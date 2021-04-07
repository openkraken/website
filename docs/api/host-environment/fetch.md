# Fetch

Kraken 所提供的 Fetch API 兼容 W3C 的协议规范，因此你可以直接将浏览器中的 `fetch` 调用代码无缝移植到 Kraken 环境中。

在 Kraken 环境中，Fetch API 不仅提供了 `fetch` 函数，还提供了对 `Request` 和 `Response` 的支持。通过这 2 个内置的构造器，可以实现一些比较复杂的功能，比如自定义请求头，处理不同类型的数据返回类型等。

需要注意的是在浏览器中，Fetch 会受到浏览器的[同源策略安全限制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)，但是在 Kraken 并没有提供类似浏览器那样的安全限制，所以你可以使用 Fetch 请求网络上的任何一个 API，但是需要注意的是，一定确保执行 Fetch 的代码是可信任的，否则将会引起安全问题。

在下面的示例中，我们使用 FetchAPI 去发起一个 GET 请求，这个请求会返回一个 JSON 字符串，我们可以通过调用 response 的`json()`方法将其转成对象，从供后面的代码使用：

**示例：**

```javascript
fetch('http://example.com/demo.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // This is the object from API.
    console.log(data);
  });
```

`fetch` 函数的第 2 个参数，可以传入一个对象可以自定义请求时的输入，如发起一个 POST 请求，并发送一段 JSON 字符串到服务端：

```javascript
const data = {
  username: 'kraken team',
};

fetch('http://example.com/post', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Server post response.
    console.log(data);
  });
```
