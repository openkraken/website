# Transform

该属性允许你旋转，缩放，倾斜或平移指定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的。

## 语法
```
/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
```
transform 属性可以指定一个或多个变换，指定多个时用空格隔开。
## 取值
[`<transform-function>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function)
要应用的一个或多个 CSS 变换函数。 变换函数按从左到右的顺序相乘，这意味着复合变换按从右到左的顺序有效地应用。
