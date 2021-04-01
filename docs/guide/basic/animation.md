# 动画

## Transition

Kraken 提供了 Transition 的能力以便开发者通过该属性来开发一个过渡的动画。

下面提供来一个根据点击来移动球位置的例子，以查看实际 Transition 的效果。

```html
<div
  id="foo"
  style="border-radius: 50px;width: 50px;height: 50px;background: red;
position: absolute;top: 0;left: 0;transition: all 1s;"
></div>

<script>
  const f = document.getElementById('foo');
  document.addEventListener(
    'click',
    function(ev) {
      f.style.left = ev.clientX - 25 + 'px';
      f.style.top = ev.clientY - 25 + 'px';
    },
    false,
  );
</script>
```
