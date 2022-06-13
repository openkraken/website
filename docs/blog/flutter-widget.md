# Flutter Widget 混合渲染

## 背景

组件（模块）封装与开发可以给前端业务开发的过程带来非常大的研发效能的提升，各个业务域的开发者会定制开发许多符合自己业务场景的基础组件（模块）沉淀一套快速复用的物料体系，以保证业务开发的研发效能。同样，在各个 Flutter 团队，也有大量的 Flutter Widget 的物料，以及各种基于 Flutter 场景做的性能优化。在大前端的视角下，我们期望在端内拥有 Web 开发的研发效能以及动态性的同时，也期望通过一些 Native 的优化手段让应用拥有媲美原生的体验与性能。

[北海（Kraken）](https://zhuanlan.zhihu.com/p/366587010) 作为一款高性能、易扩展的 Web 标准渲染引擎，通过上层实现 W3C 标准以提供前端开发者较低的学习成本以及快速复用已有的前端研发体系的能力。众所周知，除了根据前端框架做一些业务组件开发，在前端有一套为容器（浏览器）标准的扩展定制能力的技术 —— [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)。Web Component 更多地提供开发者创建可重用的定制 element 的能力，而它本身基于 Web 技术栈还是存在一些限制，比如说无法直接管理 Render Object 达到在长列表下一个动态回收能力等。作为一个 UI 能力的复用以及对基础原子组件能力的封装，Web Components 是完全够用的，但是对于在端内在节点容器上提供一些默认的 Native 级别的优化，Web Components 显得并没有那么突出，这里面其实还可以有更大的想象空间。

那么，Kraken 本身是一款基于 Flutter 技术开发的 Web 渲染引擎，是否可以复用 Flutter 生态，将 Flutter Widget 能力融合进 Web 渲染能力中呢？这样可以复用大量 Widget 的业务组件，采用同一条渲染管线高效渲染的同时，也在端内提供了更多客户端（Widget）的性能优化手段，以形成一套“动态化”、“高性能”、“易扩展”的融合 Web 与 Flutter 生态的大前端技术体系。

![](https://img.alicdn.com/imgextra/i3/O1CN01E7SgwE1CRlchuOYDD_!!6000000000078-2-tps-860-645.png)

## 用 Flutter Widget 实现一个 Custom Element

要把 Flutter 生态融合进 Kraken 中去，我们期望能让开发者把 Flutter Widget 作为一种 Custom Element 接入到 Kraken 体系中。

首先开发者需要继承 `WidgetElement` 实现一个 `FlutterContainerWidgetElement` ，并通过 `defineCustomElement` 注册到 Kraken 中去，使其成为一个 Custom Element。在 `FlutterContainerWidgetElement` 的 build 方法中，每当该节点的 attribute 或者子节点变化（比如 appendChild），该节点就会被标脏，依赖 Flutter 的生命周期，该节点最终会重新被 build，Kraken 在此时会把该节点最新的 properties 以及 children （对应到前端就是 setAttribute 以及 dom 节点）传递过来，Widget 根据这些参数完成一次 build，最终更新到界面上。

下面是一个将 Flutter 的 Column Widget 实现一个 ColumnWidgetElement 以提供给前端一个列布局容器的 Demo。

```dart
void main() {
  // 定义 tagname 以及 注册 Custom Element。
  Kraken.defineCustomElement('flutter-column', (context) {
    return ColumnWidgetElement(context);
  });
}

// 继承 WidgetElement 实现 Custom Element，在 build 方法中返回对应 Widiget。
class ColumnWidgetElement extends WidgetElement {
  ColumnWidgetElement(EventTargetContext? context) :
        super(context);

  // Build 方法会默认将前端设置给 Element 的 attribute（properties）以及该节点的 children（自动转换成一个 Widget 的 List）传递过来，这边只需要返回一个开发者自己实现的 Widget 即可。
  @override
  Widget build(BuildContext context, Map<String, dynamic> properties, List<Widget> children) {
    return Column(
      // 可以通过前端设置的 attribute 来触发 Widget 的逻辑与配置。
      textDirection: properties['direction'] ? TextDirection.ltr : TextDirection.ltr,
      // 前端 appendchild 的所有子节点会包装成 Widget List，直接使用即可。
      children: children,
    );
  }
}
```

相应的在 JavaScript 中，前端开发者可以直接调用生成 `flutter-column` 即可调用该 Widget 能力。

```javascript
const column = document.createElement('flutter-column');
document.body.appendChild(column);

for (let i = 0; i < 10; i++) {
  column.appendChild(document.createTextNode(i));
}
```

## 技术原理

那么，要实现这样一套混合渲染的方案的前提，得搞明白 Kraken 以及 Flutter Widget 的渲染流程。

![](https://img.alicdn.com/imgextra/i2/O1CN01FfkCnl1cRTNdgIW8j_!!6000000003597-2-tps-985-520.png)

注：Render Object Tree 中，K 代表 Kraken 生成的 Render Object，F 则代表 Flutter Widget 生成的 Render Object（下同）。

Kraken 渲染流程跟 Web 非常类似，经典的三棵树——CSSOM Tree、DOM Tree 以及 Render Object Tree，与之相对应的 Flutter 渲染流程也有经典的三棵树—— Widget Tree、Element Tree 以及 RenderObject Tree。当最终生成 RenderObject Tree 以后，后续的合成光栅化上屏操作是一致的。对于 Kraken 技术原理不熟悉的小伙伴，可以通过笔者的另一篇文章——[《深入解析基于 Flutter 的 Web 渲染引擎「北海 Kraken 」技术原理》](https://zhuanlan.zhihu.com/p/401698292) 来了解 Kraken 的实现思路以及更多技术原理细节。

不难发现，在上述的渲染流程中最终生成的 Render Object Tree 里 Kraken 生成的 Render Object 与 Flutter Widget 生成的 Render Object 是完全独立的两棵子树，无法混合成如下所述的互相嵌套：

![](https://img.alicdn.com/imgextra/i4/O1CN012kbdvY1TVI8f0nMHG_!!6000000002387-2-tps-99-153.png)

我们知道，最终影响渲染的只是 Render Object Tree，而上层的 DOM（或 Flutter Element）在各自的生命周期以及 API 中承担了不同的角色，它们提供的是对不同的开发者生态（Web 生态以及 Flutter 生态）的支持。如果强行把 Widget 或者 Flutter Element 侵入到 Web 标准的 DOM 中去，会导致各种差异难以抹平，长久看是无法持续维护与迭代的。

所以我们期望通过 Adapter 来适配两套标准，最终通过各自的生命周期的桥接来组装出最终的 Render Object Tree，最终达到混合渲染的目标。基于这个设想，我们可以得到如下的渲染流程：

![](https://img.alicdn.com/imgextra/i2/O1CN01VgIOTX1vUepmSbsj9_!!6000000006176-2-tps-651-441.png)

可以看到，这里面核心就是需要处理四棵树（DOM、Widget、Flutter Element 以及 Render Object），其中 CSS 是依赖与 DOM 上的，不需要做额外的处理。上图中通过 Adapter 完成 DOM 与 Widget 以及 Flutter Element 之间的互相绑定与转换，最终通过各自生命周期的桥接将当前节点产生的 Render Object（无论是 DOM 产生的还是 Flutter Element 产生的）直接挂在到父亲节点的 Render Object 上，形成最终混合在一起的 Render Object Tree。

实际上这四棵树就会产生如下的一个对应关系：

![](https://img.alicdn.com/imgextra/i3/O1CN01s3aZoz1PBopmLOGxB_!!6000000001803-2-tps-1148-976.png)

乍一看四棵树在不同情况下排列组合成了一堆非常复杂的树形结构，~~实际上确实非常复杂~~。由于需要支持 Flutter Widget 作为一个 Custom Element 存在 Web 的渲染管线中，那么无论是互相嵌套还是插入或者被插入到普通 DOM 节点上，都需要对应的支持，排列组合一下就是下面这些情况：

- Element 作为 Container 下 append 一层 Flutter Widget。

- Flutter Widget 作为 Container 下 append Element(Text Node)。

- Flutter Widget 作为 Container 下 append Flutter Widget。

- Flutter Widget 作为 Container 下 append Element 作为子 Container， Element 继续 append Flutter Widget 。

- Element 作为 Container 下 append Element(Text Node)。

上图的四棵树的互相对应关系其实就包含了上述的几种情况，我分别从头开始梳理一下。

![](https://img.alicdn.com/imgextra/i3/O1CN01ZJ6dGH1LbELkEkE8n_!!6000000001317-2-tps-1425-528.png)

Kraken 本身是一个 Widget ，它是可以被嵌套在其他 Flutter Widget 的内部的，所以在 Kraken 的顶层会有一个对应的 `rootFlutterElement` ，在 Kraken Widget 的生命周期 mount 中，会将该 Flutter Element 的指针存储起来，以供后续使用（后面的 Flutter Element 需要挂载在 Kraken 的根节点上）。此外，初始化过程会创建出大家熟悉的 Window、Document、Body 以及 Head 等节点，同时创建出对应的 Render Object。

![](https://img.alicdn.com/imgextra/i2/O1CN01HGqV2M1xG7Ugg5W4k_!!6000000006415-2-tps-1566-657.png)

接着是中间一部分，这里展示了一个 Flutter Widget 作为容器（下面继续插入 DOM 子节点）以及普通 DOM 在 Kraken 内部的一个渲染流程。首先是普通的 DOM，以最右侧黄色树的 DIV Element 以及 TextNode 为例，它们插入到 BODY 节点上就是默认的 WEB 渲染流程，会生成对应的 RenderFlowLayout 以及 RenderTextBox、RenderParagraph 作为对应的 Render Object 插入到 Render Object Tree 中。当一个 Flutter Widget （WidgetElement）作为节点插入到 DOM 树中时，会有一个 WidgetElement（继承自 dom.Element）作为 DOM 结构插入到 DOM 树中去。那么这个以 Flutter Widget 作为实现的 DOM 节点，是如何驱动 Flutter Widget 产生 Flutter Element 以及对应的 Render Object 并挂在到对应的父节点的 Render Object 上的呢？

首先，WidgetElement 类在初始化时会创建一个 Stateful 的 Widget——\_KrakenAdapterWidget，当一个 DOM 节点的 attribute 或者 通过 appendChild 等操作插入（或删除）一个子节点时候，会需要通过触发 build 将 Widget 标脏，使该 Widget 可以通过 Flutter 的生命周期重新构建输出。同时，该 Adapter 也会对所有子节点进行处理，如果子节点是一个 Flutter Widget，则直接通过 build 方法构建出对应的 Widget，如果子节点是一个普通的 DOM，则会通过 KrakenElementToWidgetAdaptor 来包装一下该节点，已桥接对应的生命周期以及 Render Object（下面会讲到普通 DOM 如何转换成一个 Flutter Widget）。

![](https://img.alicdn.com/imgextra/i1/O1CN01JkxVHR21yKBUEwYrh_!!6000000007053-2-tps-1405-657.png)

我们知道， DOM 最终被被插入 DOM Tree 后会将产生的 Render Object 也插入到 Render Object Tree，如果 DOM 节点是一个 WidgetElement（Flutter Widget），那么就需要使用 Flutter Widget 最终生成的 Render Object。所以 override 了 didAttachRendere 生命周期，内部调用了 \_attachWidget，通过它将 Flutter Widget 最终产生的 Render Obejct 给 attach 到 Render Object Tree 上。

![](https://img.alicdn.com/imgextra/i1/O1CN01SsrX5k1ZtSjnxv7T4_!!6000000003252-2-tps-1351-626.png)

最后来看看上文已经提到过的，一个普通 DOM 元素是如何融入到 Flutter Element 与 Widget 的渲染流程中去的。以 DIV Element 为例，在上文提到的 convertNodeListToWidgetList 中，会将一个普通 DOM 元素转化成 KrakenElementToWidgetAdaptor 这个 Widget，该 Widget 的 createElement 会生成对应的 Flutter Element， 所以会被 override 掉，并生成 KrakenElementToFlutterElementAdaptor 这个 Flutter Element。同样的，该 Widget 我们并不希望它会按照 Widget 流程产生一个 Render Object，而是直接用上述的 DIV Element 产生的 Render Object， 所以会通过 createRenderObject 方法来直接返回 DIV Element 产生的 Render Object。

同样，KrakenElementToFlutterElementAdaptor 这个 Flutter Element，会在 mount 以及 umount 生命周期中触发 createRenderer 等方法，用 Flutter 的生命周期钩子去保证 Kraken DOM 的一些流程的调用或者资源的释放。

基于以上原理，Kraken 实现了 Flutter Widget 作为一个 Custom Element 嵌入到 Kraken 中的任何地方。以 [Demo](https://andycall.oss-cn-beijing.aliyuncs.com/demo/flutterwidget.js) 的 JS 代码为例渲染 已注册到 Kraken 内部的 [Flutter Widget](https://andycall.oss-cn-beijing.aliyuncs.com/demo/flutterwidget.dart)，Flutter Widget 无论作为容器还是一个子节点，都可以呈现在 Kraken 中，用 JS 来动态修改。

## 进阶版：更多复杂的场景

### 用 Flutter Widget 优化瀑布流场景性能

笔者以业务中常见的一种形态——瀑布流场景为例，找了一个社区的瀑布流 Widget 组件——[waterfall_flow](https://pub.dev/packages/waterfall_flow) 以及一个下拉触底刷新的 Widget 组件—— [flutter_easyrefresh](https://pub.dev/packages/flutter_easyrefresh)，我们期望把它作为一个瀑布流容器集成到 Kraken 的渲染流程中，让它能够在 JavaScript 中被当作一个 Element 调用。同时，也期望它内部提供的一些动态 Render Object 的回收能力，保证在长列表下有一个滚动流畅以稳定的及内存的表现，而这些只需要开发这个 Flutter Widget 的同学去实现，前端同学对于这部分优化能力是无开发以及理解成本的，对于前端同学来说，就像使用一个 npm 包一样简单，并且能够让性能做到容器级别的优化。

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
        // 所有 Web 标准的节点可以传入到 Widget 中。
        itemCount: children.length,
        itemBuilder: (BuildContext context, int index) => children[index],
        padding: EdgeInsets.all(5.0),
        gridDelegate: SliverWaterfallFlowDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
      ),
      // 通过 dispatchEvent 可以像 element 节点抛出符合 Web 标准的事件，前端通过 addEventListener 监听。
      onRefresh: () async => dispatchEvent(Event('refresh')),
      onLoad: () async => dispatchEvent(Event('load')),
    );
  }
}
```

此时，由于该 Custom Element 已经被注册到 Kraken 中去，在前端只需要通过 web 标准的 createElement 即可创建该节点。

```javascript
const flutterContainer = document.createElement('flutter-container');
```

以及该节点可以通过 `addEventListener` 来监听 Widget 组件抛出的 Custom Event。

```javascript
flutterContainer.addEventListener('refresh', () => {});
```

最终渲染出来的内容如下，可以看到内部子节点的 Web 节点可以直接使用瀑布流 Widget 的布局能力。同时，由于该 Widget 自带的动态 Render Object 回收能力，可以使得子节点在滚动时候动态回收，保证流畅地滚动，并且内存不会有明显的增量。**而这一切对于前端开发者是没有任何额外的接入以及理解成本的，Flutter Widget 接入 Web 体系中会完全按照 Web 标准呈现给前端。同样，对于 Flutter 开发者，依旧可以控制熟悉的三棵树——Widget、Flutter Element 以及 Render Object，以提供一些端上的增强能力。**

<video autoplay src="https://andycall.oss-cn-beijing.aliyuncs.com/videos/flutterwidget.mp4"></video>

## 最后

Kraken 在 follow 了 W3C 标准的同时，也将 Flutter 的渲染能力融合进整个体系，让 Flutter 生态与 Web 生态融合渲染，成为一个融合渲染的大前端技术体系，互相取之所长，补其所短。让 Web 前端生态提供的表现力、动态性以及 Web 生态使业务可以快速开发迭代，满足大部分变化的业务。同时也让 Native 的同学可以提供给前端开发者多样化的 UI 渲染能力，以及将更多的性能优化手段运用到整个体系中，使优化的上限更高，体验更好。

同时，基于 Kraken **“易扩展”**这个点，开发者可以用非常低的定制成本根据自己的业务域开发一款深度定制的 Web 渲染引擎。复用已有的基建以及生态，给端内的体验带来更多的体验升级以及可能性。

最后，Kraken 的所有代码都已经开源，Kraken 提供了开放的 TSC 机制期望所有开发者可以平等地交流以及决策，使 Kraken 可以更好地发展，也欢迎更多的开发者一起来共建 Kraken。
