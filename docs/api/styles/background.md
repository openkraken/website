# 背景

# background-color
背景色，取值为 [color](https://yuque.antfin-inc.com/kraken/docs/style-unit#jua5L)。

# background-image
支持设置背景图片，或者设置渐变，不支持设置多个，语法如下：
```
//设置背景为线性渐变
background-image:linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5))

//设置背景图片
background-image:url('https://mdn.mozillademos.org/files/7693/catfront.png');
```
渐变支持标准渐变写法：

- [linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)
- [radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient) 不支持椭圆，所以shape参数不用设置
- [conic-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/conic-gradient)

## background-repeat
当设置 background-image 为图片时，可以设置background-repeat属性，取值：

- repeat-x 只在x轴重复
- repeat-y 只在y轴重复
- repeat x，y轴都重复

## background-size
当设置 background-image 为图片时，可以设置 background-size 属性，设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。
取值:

- cover 只要能覆盖到元素上，尽可能的小
- fill 填充整个元素
- contain 保持原有宽高比例，尽可能大填充元素
- fit-width 保持原有宽高比例，填充元素宽度
- fit-height 保持原有宽高比例，填充元素高度
- scale-down 保持原有宽高比例，如果需要压缩，按比例压缩（和 contain 表现一样），不需要压缩时，维持原图大小

## background-position
当设置 background-image 为图片时，可以设置 background-position 属性，为每一个背景图片设置初始位置。
具体标准参考 [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)

## background-attachment
决定背景图像的位置是在视口内固定，还是随着包含它的区块滚动。
取值：

- local：此关键字表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。
- scroll：此关键字表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
