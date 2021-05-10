# Page jump

Kraken supports the following three ways to jump to the page, choose any one:

1. Click to jump by creating an `a` tag
2. Jump by calling `window.open`
3. Jump by assigning a value to `location.href`

## Jump through the `a` tag

```javascript
<a href="/example.js">Click To Navigation</a>
```

## Jump by calling `window.open`

```javascript
<div
  onClick={() => {
    window.open('/example.js');
  }}
>
  Click to Navigation
</div>
```

## Jump through `location.href`

```javascript
<div
  onClick={() => {
    location.href = '/example.js';
  }}
>
  Click to Navigation
</div>
```
