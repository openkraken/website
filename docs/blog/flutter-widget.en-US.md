# Flutter Widget mixed rendering

## background

The encapsulation and development of components (modules) can greatly improve the R&D efficiency of the front-end business development process. Developers in each business domain will customize and develop many basic components (modules) that meet their own business scenarios to precipitate a set of rapid reuse. material system to ensure the R&D efficiency of business development. Similarly, in each Flutter team, there are also a large number of Flutter Widget materials, as well as various performance optimizations based on Flutter scenarios. From the perspective of the big front-end, we expect to have the R&D efficiency and dynamics of web development in the end, and we also hope that through some native optimization methods, the application will have an experience and performance comparable to native.

[Beihai (Kraken)](https://zhuanlan.zhihu.com/p/366587010) As a high-performance, easy-to-expand Web standard rendering engine, it implements W3C standards through the upper layer to provide front-end developers with lower learning costs And the ability to quickly reuse the existing front-end R&D system. As we all know, in addition to doing some business component development according to the front-end framework, there is a set of technologies on the front-end for extending the customization capabilities of the container (browser) standard - [Web Components](https://developer.mozilla.org/zh-CN/ docs/Web/Web_Components). Web Component provides more ability for developers to create reusable custom elements, but it still has some limitations based on the Web technology stack, such as the inability to directly manage Render Objects to achieve the ability to dynamically recycle in the next long list. As a reuse of UI capabilities and the encapsulation of basic atomic component capabilities, Web Components are completely sufficient, but for providing some default Native-level optimizations on node containers in the end, Web Components are not so prominent. There is actually more room for imagination.

So, Kraken itself is a web rendering engine developed based on Flutter technology. Can it reuse the Flutter ecosystem and integrate the Flutter Widget capability into the web rendering capability? In this way, a large number of Widget's business components can be reused. While using the same rendering pipeline for efficient rendering, it also provides more client-side (Widget) performance optimization methods in the terminal to form a set of "dynamic" and "high-performance". ", "Easy to expand" large front-end technology system that integrates Web and Flutter ecology.

![](https://img.alicdn.com/imgextra/i3/O1CN01E7SgwE1CRlchuOYDD_!!6000000000078-2-tps-860-645.png)

## Implement a Custom Element with Flutter Widget

To integrate the Flutter ecosystem into Kraken, we hope to allow developers to integrate the Flutter Widget into the Kraken system as a Custom Element.

First, developers need to inherit `WidgetElement` to implement a `FlutterContainerWidgetElement` and register it with Kraken through `defineCustomElement` to make it a Custom Element. In the build method of `FlutterContainerWidgetElement`, whenever the attribute or child node of the node changes (such as appendChild), the node will be marked dirty, depending on the life cycle of Flutter, the node will eventually be rebuilt, Kraken at this time The latest properties and children of the node (corresponding to the front end is the setAttribute and dom nodes) will be passed over, and the Widget will complete a build based on these parameters and finally update it to the interface.

Below is a demo that implements a ColumnWidgetElement from Flutter's Column Widget to provide a front-end column layout container.

```dart
void main() {
  // Define tagname and register Custom Element.
  Kraken.defineCustomElement('flutter-column', (context) {
    return ColumnWidgetElement(context);
  });
}

// Inherit WidgetElement to implement Custom Element, and return the corresponding Widget in the build method.
class ColumnWidgetElement extends WidgetElement {
  ColumnWidgetElement(EventTargetContext? context) :
        super(context);

  // The Build method will pass the attributes (properties) set by the front end to the Element and the children of the node (automatically converted into a List of Widgets) by default. Here, you only need to return a Widget implemented by the developer.
  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return Column(
      // The logic and configuration of the Widget can be triggered through the attributes set by the front end.
      textDirection: properties['direction'] ? TextDirection.ltr : TextDirection.ltr,
      // All child nodes of front-end appendchild will be packaged into Widget List, which can be used directly.
      children: children,
    );
  }
}
```

Correspondingly, in JavaScript, front-end developers can directly call the generated `flutter-column` to invoke the Widget capability.

```javascript
const column = document.createElement('flutter-column');
document.body.appendChild(column);

for (let i = 0; i < 10; i++) {
  column.appendChild(document.createTextNode(i));
}
```

## Technical principle

Then, to realize the premise of such a hybrid rendering scheme, you must understand the rendering process of Kraken and Flutter Widget.

![](https://img.alicdn.com/imgextra/i2/O1CN01FfkCnl1cRTNdgIW8j_!!6000000003597-2-tps-985-520.png)

Note: In the Render Object Tree, K represents the Render Object generated by Kraken, and F represents the Flutter WidgRender Object generated by et (the same below).

The Kraken rendering process is very similar to the Web. The classic three trees - CSSOM Tree, DOM Tree and Render Object Tree, and the corresponding Flutter rendering process also has the classic three trees - Widget Tree, Element Tree and RenderObject Tree. When the RenderObject Tree is finally generated, the subsequent synthetic rasterization on-screen operations are consistent. For those who are not familiar with the technical principles of Kraken, you can go through another article of the author - ["In-depth Analysis of the Technical Principles of the Flutter-based Web Rendering Engine "Beihai Kraken""](https://zhuanlan.zhihu.com/p /401698292) to learn about Kraken's implementation ideas and more technical principle details.

It is not difficult to find that in the Render Object Tree finally generated in the above rendering process, the Render Object generated by Kraken and the Render Object generated by Flutter Widget are two completely independent subtrees, which cannot be mixed into the following mutual nesting:

![](https://img.alicdn.com/imgextra/i4/O1CN012kbdvY1TVI8f0nMHG_!!6000000002387-2-tps-99-153.png)

We know that what ultimately affects rendering is only the Render Object Tree, and the upper DOM (or Flutter Element) assumes different roles in their respective life cycles and APIs. They provide support for different developer ecosystems (Web ecosystem and Flutter). ecology) support. If the Widget or Flutter Element is forcibly invaded into the DOM of the web standard, it will lead to various differences that are difficult to smooth out, and it cannot be maintained and iterated continuously in the long run.

Therefore, we expect to adapt the two sets of standards through Adapter, and finally assemble the final Render Object Tree through the bridging of their respective life cycles, and finally achieve the goal of hybrid rendering. Based on this assumption, we can get the following rendering process:

![](https://img.alicdn.com/imgextra/i2/O1CN01VgIOTX1vUepmSbsj9_!!6000000006176-2-tps-651-441.png)

It can be seen that the core here is to process four trees (DOM, Widget, Flutter Element and Render Object), of which CSS is dependent on the DOM, and no additional processing is required. In the above figure, the Adapter is used to complete the mutual binding and conversion between the DOM, the Widget and the Flutter Element. Finally, the Render Object generated by the current node (whether generated by the DOM or by the Flutter Element) is directly linked to the bridge through their respective life cycles. On the Render Object of the parent node, the Render Object Tree that is finally mixed together is formed.

In fact, these four trees will produce the following correspondence:

![](https://img.alicdn.com/imgextra/i3/O1CN01s3aZoz1PBopmLOGxB_!!6000000001803-2-tps-1148-976.png)

At first glance, the four trees are arranged and combined in different situations to form a very complex tree structure, ~~actually very complicated~~. Since Flutter Widget needs to be supported as a Custom Element in the rendering pipeline of the Web, whether it is nested with each other or inserted into or inserted into a common DOM node, it needs corresponding support. The arrangement and combination are as follows:

- Element is used as an append layer of Flutter Widget under Container.

- Flutter Widget as append Element(Text Node) under Container.

- Flutter Widget as append Flutter Widget under Container.

- Flutter Widget as Container append Element as child Container, Element continues to append Flutter Widget.

- Element as append Element(Text Node) under Container.

The mutual correspondence of the four trees in the above figure actually includes the above-mentioned situations, so I will sort them out from the beginning.

![](https://img.alicdn.com/imgextra/i3/O1CN01ZJ6dGH1LbELkEkE8n_!!6000000001317-2-tps-1425-528.png)

Kraken itself is a Widget, it can be nested inside other Flutter Widgets, so there will be a corresponding `rootFlutterElement` at the top level of Kraken, in the life cycle mount of Kraken Widget, it will point to the Flutter Element Store it for subsequent use (the later Flutter Element needs to be mounted on the root node of Kraken). In addition, the initialization process will create familiar nodes such as Window, Document, Body, and Head, and create the corresponding Render Object.

![](https://img.alicdn.com/imgextra/i2/O1CN01HGqV2M1xG7Ugg5W4k_!!6000000006415-2-tps-1566-657.png)

Next is the middle part, which shows a Flutter Widget as a container (continue to insert DOM child nodes below) and a rendering process of ordinary DOM inside Kraken. The first is the ordinary DOM. Take the DIV Element and TextNode of the yellow tree on the far right as an example. Inserting them into the BODY node is the default WEB rendering process. The corresponding RenderFlowLayout, RenderTextBox and RenderParagraph will be generated and inserted into the Render as the corresponding Render Object. in Object Tree. When a Flutter Widget (WidgetElement) is inserted into the DOM tree as a node, a WidgetElement (inherited from dom.Element) will be inserted into the DOM tree as a DOM structure. So how does this DOM node implemented by Flutter Widget drive Flutter Widget to generate Flutter Element and corresponding Render Object and hang it on the Render Object of the corresponding parent node?

First, the WidgetElement class will create a Stateful Widget - \_KrakenAdapterWidget when it is initialized, when the attribute of a DOM node or through appendCWhen an operation such as hild inserts (or deletes) a child node, the Widget needs to be marked dirty by triggering build, so that the Widget can rebuild the output through the life cycle of Flutter. At the same time, the Adapter will also process all child nodes. If the child node is a Flutter Widget, the corresponding Widget will be built directly through the build method. If the child node is an ordinary DOM, the node will be wrapped by KrakenElementToWidgetAdaptor. , the corresponding life cycle and Render Object have been bridged (the following will talk about how ordinary DOM is converted into a Flutter Widget).

![](https://img.alicdn.com/imgextra/i1/O1CN01JkxVHR21yKBUEwYrh_!!6000000007053-2-tps-1405-657.png)

We know that after the DOM is finally inserted into the DOM Tree, the generated Render Object will also be inserted into the Render Object Tree. If the DOM node is a WidgetElement (Flutter Widget), then the Render Object finally generated by the Flutter Widget needs to be used. So the didAttachRendere life cycle is overridden, \_attachWidget is called internally, and the Render Object finally generated by the Flutter Widget is attached to the Render Object Tree.

![](https://img.alicdn.com/imgextra/i1/O1CN01SsrX5k1ZtSjnxv7T4_!!6000000003252-2-tps-1351-626.png)

Finally, let's take a look at how a common DOM element is integrated into the rendering process of Flutter Element and Widget as mentioned above. Taking DIV Element as an example, in the above-mentioned convertNodeListToWidgetList, a common DOM element will be converted into the Widget KrakenElementToWidgetAdaptor, the createElement of the Widget will generate the corresponding Flutter Element, so it will be overridden, and the Flutter Element KrakenElementToFlutterElementAdaptor will be generated . Similarly, we do not want the Widget to generate a Render Object according to the Widget process, but directly use the Render Object generated by the above DIV Element, so the Render Object generated by the DIV Element will be directly returned through the createRenderObject method.

Similarly, the Flutter Element KrakenElementToFlutterElementAdaptor will trigger methods such as createRenderer in the mount and umount life cycles, and use Flutter's life cycle hooks to ensure the invocation of some Kraken DOM processes or the release of resources.

Based on the above principles, Kraken implements Flutter Widget as a Custom Element embedded anywhere in Kraken. Take the JS code of [Demo](https://kraken.oss-cn-hangzhou.aliyuncs.com/demo/flutterwidget.js) as an example to render the [Flutter Widget](https://kraken. oss-cn-hangzhou.aliyuncs.com/demo/flutterwidget.dart), Flutter Widget, whether as a container or a child node, can be presented in Kraken and dynamically modified with JS.

## Advanced version: more complex scenes

### Optimize waterfall scene performance with Flutter Widget

Taking a common form in business - waterfall flow scene as an example, the author found a community waterfall flow widget component - [waterfall_flow](https://pub.dev/packages/waterfall_flow) and a drop-down refresh Widget component - [flutter_easyrefresh](https://pub.dev/packages/flutter_easyrefresh), we expect to integrate it into Kraken's rendering process as a waterfall container, so that it can be treated as an Element in JavaScript transfer. At the same time, it is also expected that it provides some dynamic Render Object recycling capabilities to ensure smooth scrolling and stable memory performance under long lists, and these only need to be realized by the students who developed this Flutter Widget. Some optimization capabilities are free of development and understanding costs. For front-end students, it is as simple as using an npm package, and can optimize performance at the container level.

```dart
void main() {
  Kraken.defineCustomElement('flutter-container', (context) {
    return EasyRefreshWidgetElement(context);
  });
}

class EasyRefreshWidgetElement extends WidgetElement {
  EasyRefreshWidgetElement(EventTargetContext? context) :
        super(context, defaultStyle: { 'height': '100vh', 'display': 'block' });

  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return EasyRefresh(
      child: WaterfallFlow.builder(
        // All web standard nodes can be passed into the Widget.
        itemCount: children.length,
        itemBuilder: (BuildContext context, int index) => children[index],
        padding: EdgeInsets.all(5.0),
        gridDelegate: SliverWaterfallFlowDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
      ),
      // Through dispatchEvent, events that conform to Web standards can be thrown like element nodes, and the front end listens through addEventListener.
      onRefresh: () async => dispatchEvent(Event('refresh')),
      onLoad: () async => dispatchEvent(Event('load')),
    );
  }
}
```

At this point, since the Custom Element has been registered in Kraken, you only need to create the node through the web standard createElement on the front end.

```javascript
const flutterContainer = document.createElement('flutter-container');
```

And the node can listen to the Custom Event thrown by the Widget component through `addEventListener`.

```javascript
flutterContainer.addEventListener('refresh', () => {});
```

The final rendered content is as follows. You can see that the Web nodes of the internal child nodes can directly use the layout capabilities of the waterfall widget. At the same time, due to the dynamic Render Object recycling capability that comes with the Widget, the child nodes can be dynamically recycled when scrolling, ensuring smooth scrolling and no significant increase in memory. **And all of this does not have any additional access and understanding costs for front-end developers. Flutter Widget access to the web system will be presented to the front-end in full accordance with web standards. Similarly, for Flutter developers, you can still control the familiar three trees - Widget, Flutter Element, and Render Object to provide some end-to-end enhancements. **

<video autoplay src="https://kraken.oss-cn-hangzhou.aliyuncs.com/videos/flutterwidget.mp4"></video>

## At last

While following the W3C standard, Kraken also integrates Flutter's rendering capabilities into the entire system, allowing the Flutter ecosystem and the Web ecosystem to integrate rendering and become a large front-end technology system that integrates rendering. The expressiveness, dynamism and web ecology provided by the web front-end ecosystem enable businesses to rapidly develop and iterate to meet most changing businesses. At the same time, Native students can provide front-end developers with a variety of UI rendering capabilities, and apply more performance optimization methods to the entire system, so that the upper limit of optimization is higher and the experience is better.

At the same time, based on Kraken's "easy expansion" point, developers can develop a deeply customized web rendering engine according to their business domain with very low customization cost. Reuse the existing infrastructure and ecology to bring more experience upgrades and possibilities to the in-device experience.

Finally, all of Kraken's code has been open sourced. Kraken provides an open TSC mechanism. It is expected that all developers can communicate and make decisions equally, so that Kraken can develop better, and more developers are welcome to build Kraken together.
