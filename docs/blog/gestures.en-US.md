# Talk about the gesture system and thinking of each end

In the past, in the early Web, more pages were used for content display, which were first straight out of the back-end framework, and then matched with various CSS and JS interactive content to complete the final display of page content. At that time, the Web was more Most of them belong to [content development], which is the direct output and display of content. Today, the modern web development system has undergone earth-shaking changes, and it has long exceeded the scope of [content development], and JavaScript is used in various fields. Similarly, the Web has been freed from the constraints of clients and browsers, and various Web runtimes based on Web standards or private standards emerge in an endless stream. [Web application development] is different from the traditional [content development]. It puts forward higher requirements for developers and higher requirements for Web capabilities, whether based on standardization considerations or based on ease of use. For the sake of stability, we all expect that Web developers can obtain high-performance capabilities through higher-level encapsulation standards.

Gesture ability is one of them.

At present, in the Web standard, gesture ability is a missing piece of ability. More developers use [hammer.js](http://hammerjs.github.io/) to obtain a gesture event simulated by JavaScript to develop An application with strong gesture interaction, or directly based on the lower level [Touch event](https://www.w3.org/TR/touch-events/) for further encapsulation.

But whether it is the front-end gesture solution of the class [hammer.js](http://hammerjs.github.io/), or the [Touch event](https://www.w3.org/TR/touch-events/) Encapsulation will cause some problems. I will make further analysis from the perspectives of ease of use, performance, and standardization:

<img src="https://img.alicdn.com/imgextra/i3/O1CN01LTDhyx20MwBSqOdAL_!!6000000006836-2-tps-1652-678.png" width="500px"></img>

**Ease of use:**
Developers must manually implement or encapsulate higher-level gesture capabilities, and cannot directly obtain the event event of an advanced gesture from element. Regardless of the development cost, additional loading or additional CDN execution is required, which is a loss of front-end resources.
**Performance:**
The solution implemented by JavaScript needs to frequently pass the gesture capabilities to the front end through the Bridge, and then calculate and simulate the related gesture events. Frequently passing data increases the consumption of Bridge, and constantly executing JavaScript will block the UI thread. If more powerful gesture capability support is needed, we must further encapsulate the implementation of [competition] and other capabilities to achieve the purpose of gesture competition, and this part Capabilities are meant to sink into the rendering engine itself, rather than being handled in JavaScript.
**Normalization:**
The standards implemented by various developers are not uniform, the benchmarks for judgment are inconsistent, and the misalignment of the revealed event capabilities will lead to non-uniform standards for each platform and even each page. For example, when accessing two pages developed by different developers on the same iOS device, the inconsistent gesture capabilities may bring a very bad experience to the user. The non-standardized gesture capabilities are also prominent on each end. I will introduce these differences when I introduce the gesture capabilities of each end.

## Continuous and discrete gestures

First, I need to introduce the concept of continuous gestures and discrete gestures, so that readers can better distinguish the difference between the two gestures, and understand the impact of implementing different gesture capabilities on development, performance, ease of use, and other dimensions.

First of all, we need to know that because there are various screen-operated devices on the end side, common electronic pen devices such as apple pencil (pen), direct finger touch operation (touch), and mouse (mouse) Wait. So in the [W3C standard](https://www.w3.org/TR/pointerevents/), all physical devices that touch the screen are abstracted into a [pointer](https://www.w3.org/ TR/pointerevents/#intro), no matter what kind of physical device the upper layer is, the screen only perceives and abstracts the touched point, and distinguishes the specific upper-layer physical device based on the type.

![pointer](https://img.alicdn.com/imgextra/i3/O1CN01qyTfpJ1YREetdm1Nx_!!6000000003055-2-tps-264-272.png)

A complete gesture includes the finger starting to touch the screen (pointer down), then the finger is offset on the screen (pointer move), and the finger is lifted off the screen (pointer up), and we will not discuss cancel, out, etc. for the time being. Of course, the middle pointer move process can be omitted. The most common gestures that omit pointer move are click or long press (of course, if the clicking device is not a mouse but a finger, in fact, the actual contact of the finger will definitely be In the case of slight movement, such as in FLutter, this slight movement distance is allowed to be within 18 pixels, which is regarded as no movement). It is foreseeable that there will be more physical device operation screens (even not screens) in the future, and the pointer abstraction based on the underlying touch points is conducive to more expansion of the upper layer.

Knowing this, let's take a look at the difference between continuous gestures and discrete gestures.

- Continuous gestures: From pointer down to pointer moves to pointer up, the intermediate process can be described by the state of the gesture, which can clearly let the developer perceive the current state of the gesture through different callbacks or different states. Common continuous gesture: pan.
- Discrete gestures: The developer will be notified through a callback after the complete gesture is triggered, and there is no intermediate state transition. Common discrete gestures: click.

Continuous gestures will frequently notify the developer of the current state of the gesture through callbacks or states. Let's look at a situation:

```javascript
element.addEventListener('pan', gestureEvent => {
  if (gestureEvent.state === 'up') {
    // do something...
  }
});
```

Suppose we need to implement the pan gesture in Web standards. If it is a continuous gesture, and our scene only needs to use the up state, we need to continuously pass the current state to JavaScript through Bridge and JS engine. Frequent delivery overhead is a waste of device performance. Of course, there are also framework solutions to solve this problem through more subdivided granularity, such as splitting into `panstart`, `panupdate`, `panend`, etc. When developers do not register callbacks for these methods, they can judge within the framework and optimize accordingly. However, the subdivided API abstraction is not low-level enough, and it is not so friendly to developers.

For discrete gestures, we do not need to consider the state transfer during the gesture process, but only need to return the final result to the developer. The discrete gesture shields many internal processing details and ensures that the callback registered by the developer can only be complete. The gesture can only be hit after the operation is completed. Effectively reduce the amount of continuous gesture data transfer. But compared to continuous gestures, the disadvantage of discrete gestures is that developers cannot perceive intermediate states well.

Next, let's take a look at the gesture systems, advantages, disadvantages, and differences implemented on each terminal.

## Gesture system at each end

###hammer.js

![hammer](https://img.alicdn.com/imgextra/i3/O1CN01NTY51u1EipYivwM9R_!!6000000000386-2-tps-556-158.png)

- Pan
  Pan needs to have a minimum distance and direction, as long as this condition is met, it can be triggered frequently.
  See: https://github.com/hammerjs/hammer.js/blob/master/src/recognizers/pan.js#L42
- Swipe
  The sliding distance and speed reach a certain threshold.
  See: https://github.com/hammerjs/hammer.js/blob/master/src/recognizers/swipe.js#L36
- Pinch (zoom in when you pinch out, zoom out when you pinch in)
- Press (long press, the default time is more than 250 ms, instead of long press)
  See: https://github.com/hammerjs/hammer.js/blob/master/src/recognizers/press.js#L78

As a gesture lib implemented by the front-end, hammer.js completes the judgment of specific operations by registering Touch events for encapsulation. The solution of gestures on the front-end has been mentioned before, and it needs to be continuously passed to JavaScript through Bridge and JS engine. Then the gesture operation can finally be processed in JavaScript, as long as there is an operation, it will be thrown into JavaScript for processing, and the frequent transfer consumes a lot of unnecessary performance. We prefer that this part of the ability can be sunk into the rendering engine itself, which can save a lot of unnecessary data transfer overhead.

If you want to further introduce more complex [arena] and other capabilities on top of basic gesture judgment, this part will make the logic in JavaScript more complicated, even if you put aside "can you" do related implementations on the front end, too much JavaScript Running takes up computing resources is also not what we want.

At the same time, a CDN script needs to be introduced separately to support related functions, which also adds extra cost to the package size and the first screen. However, considering that the browser itself does not come with these functions, general developers cannot optimize this solution well and sink it into the browser, so it has become a better technology in most front-end business scenarios. selection.

### Flutter

![Flutter](https://img.alicdn.com/imgextra/i4/O1CN012Ha7QU1OrCxdyIgNz_!!6000000001758-2-tps-311-162.png)

- Tap
- Double tap
- Long press (long press over 500 ms)
- Vertical(Horizontal) drag
  It is further encapsulated on drag, which can be triggered when the x-axis or y-axis offset exceeds the minimum distance and reaches the threshold speed.
- scale
  scale will include zoom in, zoom out and rotation gestures, equivalent to Pinch + Rotation in other terminals
- Pan
  The internal implementation of Pan requires a drag with a minimum speed and a minimum moving distance to trigger Pan. Pan is a package based on drag and adds judgment. Flutter has a built-in pointer down + pointer moves + pointer up that can only trigger one gesture, so Pan can only trigger once (unlike hammer, which is a stateful gesture)
  See: https://github.com/flutter/flutter/blob/master/packages/flutter/lib/src/gestures/monodrag.dart#L579

In addition to Long press, Flutter's gesture system is a continuous gesture without discrete gestures. Tap is also completed through states such as TapDown and TapUp. Each intermediate state will support the developer's processing logic through different callback functions, and the return parameters will also vary according to the intermediate state. Excluding the unified encapsulation of Widgets, similar to Android, there are too many callbacks, and the return parameters are not uniform, which is not conducive to standardization. However, for the internal gesture callback, the subdivided interfaces perform their respective functions, and it is necessary to pass the required parameters, and the developer can directly obtain the specific return information.

###iOS

- Tap (discrete gesture, click behavior around 100 ms)
- Long Press (continuous gesture, click behavior over 500 ms)
- Pan (continuous gesture, panning, similar to drag, but can keep changing direction during movement)
- Swipe (discrete gesture)
- Pinch (continuous gesture, zoom out when pinch out, zoom out when pinch in)
- Rotation (continuous gesture, rotation)

![iOS gestures](https://img.alicdn.com/imgextra/i4/O1CN01Y5dcUc29RMYNQ9KOY_!!6000000008064-2-tps-2006-488.png)

In order to make it easier for everyone to understand the difference between each gesture, especially the difference between Pan and Swipe, [some pictures of iOS developer documentation](https://developer.apple.com/documentation/uikit/touches_presses_and_gestures/handling_uikit_gestures).

iOS gestures can bring multiple touch pointers, while satisfying the ability to operate several fingers. For example, three-finger swipe (three-finger swipe), two-finger tap (two-finger tap), etc. It provides developers to process a gesture into a registered callback function, and judge the current gesture state through state. Discrete gestures coexist with continuous gestures.

### Android

- Some methods of click and touch are provided directly on View
- OnDragListener: drag event.
- OnLongClickListener: The event when the long press is lifted.
- GestureDetector.OnGestureListener
- onDown: The down event of the gesture recognizer.
- onFling: Similar to swipe.
- onLongPress: Long press.
- onScroll: The event when the scroll view scrolls.
- onShowPress: It is not lifted after being pressed, which is equivalent to (the middle move state of up, move, and down, but there is no move).
- onSingleTapUp: Click to lift, corresponding to onDown.
- GestureDetector.OnDoubleTapListener: Double tap.
- ScaleGestureDetector: rotate, pinch, divide begin, onScale, end.

Relatively speaking, Android's gesture system is relatively subdivided, which is roughly similar to FLutter, but Flutter has different gestures in different categories. Flutter is basically discrete gestures. Android has many continuous gestures, but it is more subdivided.

## standard

In summary, after analyzing Flutter, iOS, Android and a front-end implementation of gesture lib (hammer.js), it is not difficult to find that the gesture solutions implemented by each end are similar. All these methods are implemented: click (Tap), swipe, Pan, Long Press (Press), Pinch and Rotation (or Scale). However, the implementation of each gesture on each platform is slightly different, whether it is the code logic judgment of specific gestures or the splitting or naming of specific gestures.

In Web technology, what kind of gesture specification should we use to take into account ease of use, performance and standardization? At present, there are many web runtimes developed based on the web technology system. Systems such as Web, React Native, and small programs have brought huge runtime fragmentation on the end side. In the future, it will not only be on the mobile terminal, but also various IOT devices will appear, and more and more Web runtimes may appear. In the future, there may be more fields with different terminal devices, and the arrival of folding screens and flexible screens may also allow end-side devices (mobile phones, IOTs, vehicles, etc.) to form more and more complex cross-end scenarios. With that comes more interactive gestures to "communicate" with these devices.

Unfortunately, there is currently no corresponding gesture specification on the W3C. We prefer to have a unified established standard to regulate. We are also on the [W3C Chinese Interest Group](https://github.com/w3c/chinese-ig) Started a [discussion](https://github.com/w3c/chinese-ig/issues/240), and this discussion has mentioned [UIEvent](https://github.com/w3c/uievents/issues/ 293). We expect to discuss the necessity of gesture specification and the corresponding gesture standardization capability through the dimensions of ease of use, performance and standardization, and the feasibility of ultimately promoting the establishment of the specification, and welcome more small partners to join the discussion.

In addition, the standard proposal has now been implemented on [Beihai Kraken](http://openkraken.com/), and developers can directly use [enhanced gesture capabilities](http://openkraken.com/guide/advanced/gesture) to develop complex interactive applications. In the future, the [Beihai Kraken](http://openkraken.com/) team will define more problems and general capabilities in complex business scenarios, hoping to make Web technology better by participating in promoting standard customization.
