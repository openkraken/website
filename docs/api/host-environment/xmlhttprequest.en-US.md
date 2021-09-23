# XMLHttpRequest

## Interface Description

The `XMLHttpRequest` interface is used to interact with the server.

## Constructor

**XMLHttpRequest()**

Create and return an `XMLHttpRequest` object.

```js
const myXHR = new XMLHttpRequest();
```

## Attributes

- `onabort`
  Triggered when the request is stopped, for example when the program calls `XMLHttpRequest.abort()`. The callback input parameter `event` follows `ProgressEvent`.

- `onerror`
  Triggered when the request encounters an error. The callback input parameter event follows `ProgressEvent`.

- `onload`
  Triggered when the request is successfully completed. The callback input parameter event follows `ProgressEvent`.

- `onloadend`
  Triggered when the request ends, regardless of whether the request succeeds or fails. The callback input parameter event follows `ProgressEvent`.

- `onloadstart`
  Called when starting to transfer data. The callback input parameter event follows `ProgressEvent`.

- `onloadend`
  When the request receives more data, it is triggered periodically. The callback input parameter event follows `ProgressEvent`.

- `ontimeout`
  Triggered when no response is received within the preset time. The callback input parameter event follows `ProgressEvent`.

- `onreadystatechange`
  The callback function to be called when the readyState property changes. The callback input parameter event follows `ProgressEvent`.

- `onreadystatechange`
  The callback function to be called when the readyState property changes. The callback input parameter event follows `ProgressEvent`.

- `readyState`
  Returns an unsigned short integer number representing the status code of the request.

- `response`
  Return the entire response entity. Its type depends on the value of `responseType`. You can try to set the value of `responseType` to request data through a specific type. If the request has not been completed or unsuccessful, the value is null. The possible types of response include: ArrayBuffer, Blob, Document, String or a JavaScript object.

- `responseText`
  Return the response text, or null if the request fails, or'' if the request has not been sent.

- `responseXML`
  Return a `Document` containing the HTML or XML requested to be retrieved. If the request is unsuccessful, has not been sent, or the retrieved data cannot be correctly parsed into XML or HTML, it is null. The default is to parse as "text / xml". When `responseType` is set to `document` and the request has been executed asynchronously, the response will be parsed as "text / html".

- `status`
  Returns an unsigned short integer number, which represents the response status of the request. The status code is standard [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). Before the request is completed, the value of status is 0.

- `statusText`
  Returns a string representing the textual information of the response status of the request. If the value of the requested state `readyState` is UNSENT or OPENED, the value of this attribute will be an empty string. If the server does not explicitly specify a status text message, the value of `statusText` will be automatically assigned the value OK.

## method

- `abort`
  If the request has been sent, the request is immediately aborted. When a request is terminated, its `readyState` will be set to 0 (XMLHttpRequest.UNSENT), and the request's `status` will be set to 0.

- `getAllResponseHeaders`
  Return all response headers separated by [CRLF](https://developer.mozilla.org/zh-CN/docs/Glossary/CRLF) as a string, or null if no response is received.

- `getResponseHeader`
  Returns a string containing the specified response header, or null if the response has not been received or the header does not exist in the response.

- `open`
  Initiate a request.

- `send`
  Used to send HTTP requests. If it is an asynchronous request (the default is an asynchronous request), this method will return immediately after the request is sent; if it is a synchronous request, this method will not return until the response arrives. The `send()` method accepts an optional parameter as the request body; if the request method is GET or HEAD, the request body should be set to null. If the Accept header is not set using the `setRequestHeader()` method, the Accept header with "_ / _" will be sent.

## event

- `abort`
  Triggered when the request encounters an error.

- `load`
  Triggered when the request is successfully completed.

- `loadend`
  Triggered when the request ends, regardless of whether the request succeeds or fails.

- `loadstart`
  Triggered when response data is received.

## refer to

- [Link](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
