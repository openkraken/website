# Layout

One of the core problems faced when arranging the page structure is how to typeset the labels in the page. Page typesetting requires the use of layout-related capabilities in CSS. The current layout methods supported in the CSS standard are mainly:

1. [Flow Layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)
2. [Flexbox layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
3. [Positioning](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)
4. [Float](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)
5. [Grid Layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
6. [Multiple column layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

Kraken supports the first three layout methods that are currently mainstream in Web development. The following is an example of how to use them. (For a more detailed introduction to CSS layout capabilities, please refer to this [document](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Introduction))

## Flow Layout

If no CSS styles are used to change the layout of the labels, the labels in the page will be displayed according to the normal layout flow.

All tags are divided into [Block-level](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements) (such as `<div>`) and [ Inline](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements) (such as `<span>`) two display types, at the same time you can pass the CSS [display property](https: //developer.mozilla.org/zh-CN/docs/Web/CSS/display) Change the default display type of the label.

The typesetting rule for block-level labels is to start a new line under the previous label and separate them according to the margin set on the style; while in-line labels will not start a new line, as long as there is enough within the width of the parent block-level label They are arranged in the same row with other in-row labels. If there is not enough space, it will be moved to a new line.

**Example:**

```js
<div style={{ marginLeft: '-20px' }}>
  {/* block level */}
  <div style={{ textAlign: 'center' }}>
    {/* Inline */}
    <p
      style={{
        display: 'inline-block',
        backgroundColor: 'pink',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
    {/* Inline */}
    <span
      style={{
        display: 'inline-block',
        backgroundColor: 'lightblue',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
  </div>

  {/* block level */}
  <div style={{ textAlign: 'center' }}>
    {/* Inline */}
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'orange',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
    {/* Inline */}
    <span
      style={{
        display: 'inline-block',
        backgroundColor: 'lightgreen',
        width: '40%',
        height: '100px',
        margin: '20px 0 0 20px',
      }}
    />
  </div>
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN01nJgGq21MiqUQ27w25_!!6000000001469-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://https://andycall.oss-cn-beijing.aliyuncs.com/demo/guide-flow-layout.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Play Kraken App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01BHfjbd1mDri05zcYk_!!6000000004921-2-tps-200-200.png" />
    </div>
  </div>
</div>

## Flexbox layout

For a long time, the only reliable and cross-browser compatible layout methods in CSS layout have been streaming layout, floating, and positioning. These layout methods can meet most layout requirements, but due to their inherent limitations in layout capabilities, it is not intuitive and flexible to implement certain layouts, such as the following scenarios:

1. Center a block-level label vertically in the parent container.
2. Make all children of the container occupy the same amount of available width/height, regardless of how much width/height is available in the container.
3. Make all columns in a multi-column layout occupy the same height, even if the amount of content contained in each column is different.

So the Flexbox layout method is introduced in the CSS3 standard, which solves the limitations of many previous layout methods. For detailed concept introduction, please refer to this [document](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox).

For all properties related to the flexbox layout supported by Kraken, please refer to [Development Document](/en-US/api/styles/layout#flexbox layout).

The following uses examples to introduce simple usage:

**Example:**

```js
<div>
  {/* Horizontal layout: horizontal equal spacing & vertical centering */}
  <div
    style={{
      display: 'flex',
      height: '100px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ width: '50px', height: '50px', backgroundColor: 'orange' }} />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* Horizontal layout: line break & equal spacing between lines & horizontal equal spacing */}
  <div
    style={{
      display: 'flex',
      height: '150px',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-evenly',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'orange' }}
    />
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '150px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* Vertical layout: vertical equal spacing & horizontal centering */}
  <div
    style={{
      display: 'flex',
      height: '200px',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ width: '50px', height: '50px', backgroundColor: 'orange' }} />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightblue' }}
    />
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'lightgreen' }}
    />
  </div>

  {/* Horizontal layout: Proportionally stretch the width of the sub-item & automatically stretch the height of the sub-item */}
  <div
    style={{
      display: 'flex',
      height: '100px',
      justifyContent: 'space-evenly',
      backgroundColor: '#999',
      marginTop: '10px',
    }}
  >
    <div style={{ flexGrow: 1, backgroundColor: 'orange' }} />
    <div style={{ flexGrow: 2, backgroundColor: 'lightblue' }} />
    <div style={{ flexGrow: 3, backgroundColor: 'lightgreen' }} />
  </div>
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i1/O1CN012H2bAt1yMMRjwhIKt_!!6000000006564-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://https://andycall.oss-cn-beijing.aliyuncs.com/demo/guide-flex-layout.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download the <a href="/en-US/guide#kraken-playground" >Play Kraken App</a> on your Android phone, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i3/O1CN01sBl1yz1tCfzWbBGWB_!!6000000005866-2-tps-200-200.png" />
    </div>
  </div>
</div>

## position

Sometimes we need to overlap the label on top of another label, or always remain in the same position with the window when scrolling. At this time, we need to use the positioning ability in CSS.

CSS provides five positioning methods:

1. static: static positioning, the default value, the label is laid out according to the current position in the document flow, and the specified top, right, bottom, left and z-index properties are invalid.

2. relative: relative positioning, the label is first placed in the position when the positioning is not added, and then the label position is adjusted without changing the page layout (therefore, the label will be left blank when the positioning is not added)

3. Absolute: Absolute positioning, the label will be moved out of the normal document flow, and no space is reserved for the label. The label position is determined by specifying the offset of the label relative to the nearest non-static positioning ancestor label.

4. fixed: fixed positioning, the label will be moved out of the normal document flow, no space is reserved for the label, but the label position is specified by specifying the position of the label relative to the viewport. The position of the label will not change when the screen is scrolled.

5. sticky: sticky positioning, the tag is positioned according to the normal document flow, and then relative to its nearest scrolling ancestor and [containing block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block) (The nearest block-level ancestor), offset based on the values ​​of top, right, bottom and left. The offset value does not affect the position of any other labels.

Please refer to [Development Document](/en-US/api/styles/position) for all the properties related to positioning supported by Kraken.

**Example:**

```js
<div style={{ padding: '20px', position: 'relative' }}>
  {/* Static positioning */}
  <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink',
      marginTop: '20px',
    }}
  >
    1. Static positioning
  </div>

  {/* Relative positioning */}
  <div
    style={{
      position: 'relative',
      top: '20px',
      width: '100px',
      height: '100px',
      backgroundColor: 'lightblue',
      marginTop: '20px',
    }}
  >
    2. Relative positioning
  </div>

  {/* Absolute positioning */}
  <div
    style={{
      position: 'absolute',
      top: '140px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'lightgreen',
      marginTop: '20px',
    }}
  >
    3. Absolute positioning
  </div>

  {/* Fixed positioning */}
  <div
    style={{
      position: 'fixed',
      top: '20px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'orange',
      marginTop: '20px',
    }}
  >
    4. Fixed positioning
  </div>

  {/* Fixed positioning */}
  <div
    style={{
      position: 'sticky',
      top: '20px',
      left: '150px',
      width: '100px',
      height: '100px',
      backgroundColor: 'mediumpurple',
      marginTop: '20px',
    }}
  >
    5. Sticky positioning
  </div>
</div>
```

**Rendering effect:**

<div className="code-preview">
  <img className="preview-image" src="https://img.alicdn.com/imgextra/i2/O1CN0165tLbR22Qig4BSSI9_!!6000000007115-2-tps-720-1324.png" />

  <div className="preview-tips">
    <div className="preview-title">
      Please choose one of the following methods to preview:
    </div>
    <div className="preview-row">
      <div>
        1. Install <a href="/en-US/guide#快 Experience-kraken">Kraken CLI</a>, then copy the following command to the command line to run:
      </div>
      <div className="preview-code">
        kraken http://https://andycall.oss-cn-beijing.aliyuncs.com/demo/guide-position.js
      </div>
    </div>
    <div className="preview-row">
      <div>
        2. First download <a href="/en-US/guide#kraken-playground" >Kr on your Android phoneaken Playground App</a>, then open the App and scan the QR code below to preview:
      </div>
      <img className="preview-qrcode" src="https://img.alicdn.com/imgextra/i4/O1CN01Ot39kM1yCHjKKSEmL_!!6000000006542-2-tps-200-200.png" />
    </div>
  </div>
</div>
