# 页面跳转

Kraken 支持一下三种方式进行页面跳转，选择任意一种即可：

1. 通过创建一个 `a` 标签的进行点击跳转
2. 通过调用 `window.open` 的进行跳转
3. 通过给 `location.href` 赋值的进行跳转

## 通过 `a` 标签进行跳转

```javascript
<a href={'/example.js'}>Click To Navigation</a>
```

## 通过调用 `window.open` 进行跳转

```javascript
<div
  onClick={() => {
    window.open('/example.js');
  }}
>
  Click to Navigation
</div>
```

## 通过 `location.href` 进行跳转

```javascript
<div
  onClick={() => {
    location.href = '/example.js';
  }}
>
  Click to Navigation
</div>
```
