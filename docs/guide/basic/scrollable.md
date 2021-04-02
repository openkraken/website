# 滚动容器

在一个普通的固定尺寸的容器上添加 `overflow: scroll` 就可以创建一个滚动容器。
默认情况下，滚动容器支持横向滚动和纵向滚动，通过 `overflow-x: scroll` 和 `overflow-y: scroll` 可以单独设置横向和纵向的滚动。

下面的例子演示如何创建一个滚动容器：

```html
<div style={{ width: '100px', height: '100px', overflow: 'scroll' }}>
  <p>
    The overflow property specifies whether to clip content or to add scrollbars
    when an element's content is too big to fit in a specified area.
  </p>
</div>
```
