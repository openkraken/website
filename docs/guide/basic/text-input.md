# 处理文本输入

在浏览器中，`<input>` 标签允许开发者处理用户的文本输入，同理在 Kraken 中，我们还是可以使用熟悉的 `<input>` 来实现这个能力。

举一个最简单的例子，将用户输入的内容同步展示到 `div` 中：

```js
const input = document.createElement('input');
input.placeholder = 'Please input something.';

document.body.appendChild(input);

const div = document.createElement('div');
const text = document.createTextNode('');
div.appendChild(text);
div.style.color = 'red';
div.style.fontSize = '25px';
document.body.appendChild(div);

input.addEventListener('input', event => {
  text.data = input.value;
});
```

```bash
kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-input.js
```

<img src="https://gw.alicdn.com/imgextra/i2/O1CN01ySbvyk1iPXL5IOn9K_!!6000000004405-2-tps-256-256.png" width=200 />

使用 Kraken 运行后，在输入框内输入任意文本，都会将输入的内容同步展示到下边的 `div` 中。

<img src="https://gw.alicdn.com/imgextra/i4/O1CN01fKjB6F1XrVl2nKCLW_!!6000000002977-2-tps-944-1560.png" width="400" />

可以看到我们使用了 `placeholder` 属性来储存当无内容输入时候的占位，并且通过监听 `input` 事件获知到了用户输入内容的时机。

## 属性

上文中已经介绍了 `placeholder` 这一属性，可以用来控制当表单控件为空时，控件中显示的内容。Kraken 支持的其它属性有：

- placeholder: 当表单控件为空时，控件中显示的内容。
- autofocus: 当配置时，允许在页面加载时自动获得焦点。
- value: 输入框的内容值。

## Input 类型

Input 支持很多类型 (type)，默认值为 `text` 即文本类型，在 Kraken 中并不是所有类型都被支持，以下枚举了支持的类型和描述。

- text: 默认值，用于输入文本。
- number: 用于输入数字，在拥有动态键盘的设备上会显示数字键盘。
- tel: 用于输入电话号码，在拥有动态键盘的设备上会显示电话数字键盘。

## 更多

更多的内容可以参考 [\<input\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 。
