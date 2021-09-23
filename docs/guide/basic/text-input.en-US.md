# Processing text input

In the browser, the `<input>` tag allows developers to process the user's text input. Similarly, in Kraken, we can still use the familiar `<input>` to achieve this ability.

To give a simplest example, the content input by the user is synchronously displayed in the `div`:

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

After running with Kraken, enter any text in the input box, and the entered content will be displayed in the `div` below.

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i3/O1CN01YAc3w11khyW4hpoYR_!!6000000004716-2-tps-360-662.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/guide-input.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Kraken Playground App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01xYDF611nA20oVARrf_!!6000000005048-2-tps-400-400.png" />
    </div>
  </div>
</div>

You can see that we use the `placeholder` attribute to store the placeholder when there is no content input, and we know the timing of the user's input by monitoring the `input` event.

## Attributes

The attribute `placeholder` has been introduced above, which can be used to control the content displayed in the control when the form control is empty. Other attributes supported by Kraken are:

- placeholder: When the form control is empty, the content displayed in the control.
- autofocus: When configured, allows to automatically get focus when the page loads.
- value: The content value of the input box.

## Input type

Input supports many types (types). The default value is `text`, which is a text type. Not all types are supported in Kraken. The supported types and descriptions are enumerated below.

- text: The default value, used to enter text.
- number: It is used to enter numbers, and the numeric keyboard will be displayed on devices with dynamic keyboards.
- tel: Used to enter a phone number, the phone number keyboard will be displayed on a device with a dynamic keyboard.

## More

For more information, please refer to [\<input\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input).
