# Fetch

The Fetch API provided by Kraken is compatible with the W3C protocol specification, so you can seamlessly migrate the `fetch` calling code in the browser to the Kraken environment.

In the Kraken environment, the Fetch API not only provides the `fetch` function, but also provides support for `Request` and `Response`. Through these two built-in constructors, some more complex functions can be implemented, such as customizing request headers, processing different types of data return types, and so on.

It should be noted that in the browser, Fetch will be subject to the browser’s [same-origin policy security restrictions](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy), but Kraken does not provide security restrictions like browsers, so you can use Fetch to request any API on the network, but it should be noted that you must ensure that the code executing Fetch is trustworthy, otherwise it will cause Security Question.

In the following example, we use FetchAPI to initiate a GET request. This request will return a JSON string. We can convert it into an object by calling the `json()` method of response for use by the following code:

**Example:**

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

The second parameter of the `fetch` function can be passed in an object to customize the input of the request, such as initiating a POST request and sending a JSON string to the server:

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
