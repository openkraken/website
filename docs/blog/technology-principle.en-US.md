# In-depth analysis of Kraken technical principles

## The technical background of the North Sea

When it comes to the technical background of Beihai, we have to mention the evolution of cross-end technology. Many students should be familiar with the process of cross-end technology, so I will briefly talk about it.

We know that the browser is the most mature natural cross-platform solution. As early as the PC era, the browser has become the entrance to the Internet, and everyone will habitually browse web pages through the browser to absorb various information. At that time, we called this way of surfing the Internet "surfing". However, in the mobile era, browsers do not have an eye-catching performance on mobile devices. On the contrary, due to problems such as large memory, long white screen in weak network environment, and lack of sensor capabilities (slow standard follow-up), various doubts are endless.

In order to make up for some deficiencies of the above browsers on the mobile side, Hybrid technology has emerged, which implements some non-standard supersets on the Web through the capabilities of containers, and also improves the loading performance of the first screen through various technologies such as prefetch and offline packages. .

Since then, an RN-like solution (typically representing React Native) has emerged. Its principle is to bridge the Native control and the front-end ecosystem through the JS engine, improve efficiency through Web development business logic, and improve performance through Native control rendering. and experience. However, the disadvantage of this type of solution is that it cannot completely smooth out the differences between the two ends, does not solve the problem of consistency, and ultimately exposes the complexity to developers.

![](https://img.alicdn.com/imgextra/i3/O1CN01gqgaIi1UqeByZpOXY_!!6000000002569-0-tps-8000-4500.jpg)

As the new favorite of the cross-end industry, Flutter has also gained more and more attention in the past two years. Let's introduce Flutter.

![](https://img.alicdn.com/imgextra/i2/O1CN01iZ2dAx1EzmEdGLS27_!!6000000000423-0-tps-8000-4500.jpg)

The advantages of Flutter are good performance and high cross-end consistency due to its self-drawing rendering, but it also has its own shortcomings, such as its own ecology, neither front-end nor Android/iOS.

This leads to a series of questions.

- First of all, front-end (JavaScript) or client-side (Swift / JAVA) transformation has a certain cost, but because the GUI system on the end side is similar. From the perspective of a front-end developer, the author sees that the cost of language learning is not particularly high. Students with experience in front-end frameworks such as React or Vue can quickly get started with short-answer learning. For some small entrepreneurial teams, it is true that they can learn and develop quickly in small steps, but when the organization is large to a certain extent, the cost of this conversion will increase exponentially.

- Secondly, the ecosystem is waiting to be rebuilt. Some Flutter developer friends may feel that there are already quite a few pubs in Flutter development that can be used directly. But in fact, the ecosystem is not limited to Flutter pub, there are also various existing basic links, such as construction-related CI/CD, and construction, etc. This series of ecology needs to be rebuilt, and the cost is very large.

- Again, many of the existing businesses are front-end projects developed through JavaScript + front-end frameworks. If we want to migrate them to Dart + Widget, the cost is undoubtedly very huge.

While facing so many problems and the high cost of switching, we also expect to bring more technical possibilities to our business through Flutter, while improving some performance and experience problems of web containers on the side. Well, _the first step in introducing a new technology is to solve the cost of introducing this new technology_, so we are actively exploring a solution that combines the front-end ecosystem with Flutter.

![](https://img.alicdn.com/imgextra/i1/O1CN01YS3crQ1xH2Fhip0ZX_!!6000000006417-0-tps-8000-4500.jpg)

So the protagonist of this topic - Beihai Kraken was born.

Kraken is a high-performance web standard self-drawing rendering engine, featuring high performance, easy expansion, Flutter-based and web standards compliance.

![](https://img.alicdn.com/imgextra/i3/O1CN012T9Czg1pSvbwpQrc7_!!6000000005360-0-tps-8000-4500.jpg)

Below I list some application scenarios of Beihai in Alibaba. In C-end APPs or IoT devices, Beihai has related applications.

![](https://img.alicdn.com/imgextra/i4/O1CN01t6jLXr1TtZ6IuMLN3_!!6000000002440-2-tps-1014-574.png)

## The technical principle of the North Sea

Before introducing the technical principles of Kraken, let me demonstrate how to develop a Kraken application. Because Kraken is a web rendering engine developed based on the W3C standard, the upper layer is independent of the framework. Whether developers use Vue, React or Rax, they can develop an application on Kraken.

Taking Vue.js development as an example, the following is a project I started with vue-cli provided by Vue. For the specific code, see [Official Example](https://github.com/openkraken/samples/tree/main/demos/hello-vue).

It can be seen that the leftmost is the relevant code of Vue, and the right is the result of running the application on Chrome (left) and Kraken (right). You can see that the results are exactly the same.

![](https://img.alicdn.com/imgextra/i1/O1CN011QDzXY1T8qhPR8FGY_!!6000000002338-0-tps-8000-4500.jpg)

After understanding how to develop a Kraken application, let's understand the technical principle of Kraken. For a better understanding, let's first compare the rendering process of Flutter and Webview.

I believe everyone is very familiar with the rendering process of WebView. A very classic topic in the interview is how a URL input is finally rendered to the screen. In general, it parses HTML, JS and CSS files, executes corresponding JS to call DOM API, and finally generates DOM Tree and CSSOM Tree, and then calculates and finally obtains Render Tree, generates a series of Layers through Layout and Paint processes, and finally passes Compositing and rasterizing rendering to the screen.

Looking at Flutter, there are three classic Flutter trees - Widget Tree, Element Tree and RenderObject Tree. Widget Tree corresponds to the front-end layer similar to the front-end framework, while Element corresponds to DOM Tree, RenderObject Tree and Render Tree respectively. Finally, Layer will be generated through a series of calculations of Layout and Paint, and then rendered to the screen through synthesis and rasterization.

![](https://img.alicdn.com/imgextra/i3/O1CN010q3VsK1nhvLVUgKFF_!!6000000005122-0-tps-8000-4500.jpg)

Then, we will add the front-end framework to our entire process for a more intuitive comparison.Vue.js for example.

Vue.js will generate a series of Vdoms at runtime to generate a Vdom Tree, and then call the API of the specific platform through the abstraction of platfom.

![](https://img.alicdn.com/imgextra/i1/O1CN01HRszbU1FwOvmpSDkj_!!6000000000551-0-tps-8000-4500.jpg)

Then we will find that we only need to exchange the part of the process I circled with the red box to achieve the effect we finally want to achieve (upper-level web development, lower-level rendering based on Flutter).

![](https://img.alicdn.com/imgextra/i3/O1CN01wyRRUf1MA2Q1IfQxB_!!6000000001393-0-tps-8000-4500.jpg)

Based on the above assumptions, the rendering process of Beihai came out.

At present, the mainstream front-end frameworks will convert the product into a JS Bundle, and operate the specific view through the standard DOM API, while there is generally only one root node in HTML. Under the Web, the page will first request the HTML file, and then parse the Script tag to load the corresponding JS file. The entrance of Kraken is designed as a JS file, which can reduce one request and speed up the rendering of the first screen.

The JS file will be executed in JS Engine. Kraken's runtime provides a series of Web standard API interfaces through JS Engine Binding. Calling the corresponding API will execute the relevant logic and create a series of instructions that need to be sent to the Dart layer for processing. Stored in a struct. C++ sends the underlying address of the corresponding instruction to Dart through FFI, and Dart processes the relevant instruction and generates a Dom Tree. Similarly, CSS will also generate the corresponding CSSOM Tree through Parser, which will eventually generate Flutter's RenderObject Tree. After a series of calculations of Layout and Paint, a corresponding series of Layers will be generated, and then finally displayed on the screen through synthetic rasterization.

Similarly, in the latest implementation, we considered the SSR application scenario, so we added the Beihai application development method with HTML as the entry point, and the corresponding HTML file can be parsed through HTML Parser, and the subsequent process is the same. The support of SSR also makes the second opening rate of the first screen to a higher level.

![](https://img.alicdn.com/imgextra/i1/O1CN01WgTBJA1wDXcBX8MzI_!!6000000006274-0-tps-8000-4500.jpg)

So after understanding the entire rendering process of Kraken, how do we complete the development of a web-standard rendering engine based on Flutter?

![](https://img.alicdn.com/imgextra/i3/O1CN01az6nMa1KbrFD2Jeri_!!6000000001183-0-tps-8000-4500.jpg)

So to do this based on Flutter, you must first understand the architecture of Flutter.

The top layer of Flutter is the Framework implemented by Dart, which includes the responsive framework, the official website component library, and the parts that implement the layout and drawing protocol. In the middle is the Flutter Engine implemented by C++, which is the second half of the rendering process, providing some basic capabilities, as well as layer synthesis and rasterization output. The lowest Embedder layer is responsible for some implementations of specific platforms to achieve cross-platform.

![](https://img.alicdn.com/imgextra/i2/O1CN01rG5Vgn1xMX0OZzFgf_!!6000000006429-0-tps-8000-4500.jpg)

It is not difficult to find that the most Dart Framework Widget is an abstraction of the UI, which implements a set of responsive frameworks, corresponding to the front-end frameworks such as Vue / React. The layout protocol below can correspond to the W3C standard to implement a set of layout and rendering protocols based on front-end standards.

![](https://img.alicdn.com/imgextra/i1/O1CN01b5Gspu23opAVMte9P_!!6000000007303-0-tps-8000-4500.jpg)

Then we can draw the architectural design of Beihai.

Let’s look at the left side first. The left side is still the overall architecture of Flutter introduced above. Flutter’s Widget capabilities can be registered in Kraken through plug-ins and become a front-end standard Tag. JS can dynamically call and control rendering. The Flutter architecture on the left supports the upper-level Flutter ecosystem, so that the Flutter ecosystem can also be integrated into the entire Kraken rendering system in the form of plug-ins.

On the right is the architecture implementation of Kraken, which does not intrude the implementation into the Flutter Engine. In the Dart layer, by implementing a series of layout and rendering capabilities of the W3C standard, a series of standardized capabilities are provided for the upper layer, such as Element, CSS, and modules of various web standards. In the upper layer, Kraken's runtime provides a series of Web-standard API interfaces through JS Engine Binding. Calling the corresponding API will execute relevant logic and create a series of instructions that need to be sent to the Dart layer for processing. The instructions are stored in a struct. C++ sends the address of the bottom layer of the corresponding instruction to Dart through FFI, and finally Dart invokes the standardization capability mentioned above according to the instruction to complete the docking. Through this implementation, it provides support for the upper front-end ecosystem. With the rich front-end ecosystem, developers can enjoy the efficient development experience brought by the front-end ecosystem.

![](https://img.alicdn.com/imgextra/i3/O1CN013NHoul1frz7bP6XtK_!!6000000004061-0-tps-8000-4500.jpg)

## Key technical features

The loading performance of the first screen is a key indicator of a C-side scenario, and a long white screen will greatly affect the user experience.

Kraken needs to create a large number of nodes when the first screen is initialized, and a lot of time is spent on communication, so it is urgent to optimize the performance of the first screen.

![](https://img.alicdn.com/imgextra/i3/O1CN01QT1hfD1tjeXKngT2c_!!6000000005938-0-tps-8000-4500.jpg)

In the above technical principle part, we know that Kraken needs to complete the communication between C++ (JS Engine) and Dart through Bridge to achieve the purpose of passing instructions to the Dart layer. The architecture of Bridge has also undergone three versions of evolution.

In the original first-generation solution, we hacked into the Flutter Engine, passed the data from the JS Engine to the Flutter Engine, and finally sent the data to the Dart layer through native bingding. The obvious disadvantage of this generation of solutions is that it invades the Flutter Engine, and it takes a lot of time to compile the Flutter Engine during development. Meanwhile, for KrakenIn terms of the architecture of Flutter Engine, it is not a reasonable design to invade Flutter Engine.

Later, Dart FFI appeared, which can realize efficient communication between C++ and Dart, so the second generation solution was born. The second-generation Bridge solution serializes the JSON data and transmits the data to the Dart layer through Dart FFI. The Dart layer then deserializes JSON to obtain the final data. Compared with the previous generation, this generation of solutions can solve the shortcomings of invading Flutter Engine, but it introduces the problem of string copying and JSON serialization and deserialization.

![](https://img.alicdn.com/imgextra/i4/O1CN01BQOO4G1sTKoGdkzcq_!!6000000005767-0-tps-8000-4500.jpg)

In order to solve the above-mentioned problems, the third-generation Bridge solution was produced. The third-generation Bridge solution defines a standard 40 Bytes Struct to store instructions by sharing memory, and only the address of the instruction is passed through Dart FFI. Both C++ and Dart rely on the address to access related data. Doing so solves the problem of JSON serialization and deserialization, saves time, and saves one data copy. At the same time, since the memory is aligned with 40 Bytes, the memory access efficiency can be improved.

![](https://img.alicdn.com/imgextra/i4/O1CN01RXM5ND1iCFspH6bb6_!!6000000004376-0-tps-8000-4500.jpg)

Here are some above-the-fold benefits from actual online pages.

![](https://img.alicdn.com/imgextra/i4/O1CN01lrXIQB1TZs4GnJp5Z_!!6000000002397-0-tps-8000-4500.jpg)

The long list of infinite scrolling is a historical problem that has plagued front-end developers for a long time. A large number of layouts cause the page to freeze, and the long Paint time when scrolling causes the scrolling frame to drop, and the page experience is very bad. The community also has a lot of front-end solutions to deal with this problem, and on Kraken, we also expect to solve this problem at the container layer.

![](https://img.alicdn.com/imgextra/i4/O1CN01WMIWOR28ZJq0aVIQ2_!!6000000007946-0-tps-8000-4500.jpg)

There are also RecyclerView and TableView on Android and iOS respectively to solve this problem. Their principle is to define a buffer area outside the viewport of the visible area, dynamically release when the node exceeds the area, dynamically create when entering the area, and A series of nodes are used to replace attributes to ensure that the number of nodes does not explode. A similar implementation of Sliver is also provided in Flutter, so can we use Sliver to empower the front end to solve this problem?

![](https://img.alicdn.com/imgextra/i1/O1CN01PLfZmu1iTevs1s2aR_!!6000000004414-0-tps-8000-4500.jpg)

Kraken defines a new `display` property `sliver`. By setting the `display` property of the node to `sliver`, you can directly use Flutter's sliver capability to achieve dynamic recovery after the node exceeds the visible and cache area. an ability. It can be seen that we use a demo of 1000 cards for testing, and `sliver` has obvious gains compared to `block`.

At the same time, the standard has also been discussed in the [W3C Chinese Interest Group](https://github.com/w3c/chinese-ig/issues/239), and we hope that we will try to propose this proposal after full discussion and consensus. Submit to W3C and feed back to the front-end community.

![](https://img.alicdn.com/imgextra/i4/O1CN01dmviLm1vSpDXh2Lem_!!6000000006172-0-tps-8000-4500.jpg)

![](https://img.alicdn.com/imgextra/i4/O1CN01tbtMpg1wQp6InJRGi_!!6000000006303-0-tps-8000-4500.jpg)

A large front-end team often has both a client and a front-end, and will accumulate a series of end-to-end capabilities. Different needs will have different technology selections. For example, a player is often developed through Native technology. We expect to integrate the capabilities on the end (including Flutter Widget, Web, Native, and third-party SDKs, etc.) into a large front-end development system, so how do we integrate this series of capabilities on the end in Kraken? At the same time, we also expect to introduce on-demand, which can optimize the package size. In different business domains, we expect to quickly carry out customized development and quickly form a set of domain capabilities for vertical business domains.

![](https://img.alicdn.com/imgextra/i3/O1CN01GEkCRk1xwFtqAHU22_!!6000000006507-0-tps-8000-4500.jpg)

Kraken provides a set of extension capabilities to solve the above problems. Through the rendering capability extension interface, developers can quickly integrate the developed standard-compliant Flutter Widget and Native rendering capabilities into the Kraken system, and finally provide a dynamic through JavaScript. ability to call. Similarly, through MethodChannel, developers can call some Native or Dart API capabilities through this channel, such as some second-party or third-party SDK capabilities.

Developers can customize the capabilities required by the business domain by extending capabilities, and plug and unplug as needed to achieve the purpose of optimizing the package size. Likewise, plugins registered to kraken can be controlled via JavaScript code, providing dynamism.

![](https://img.alicdn.com/imgextra/i3/O1CN0144wmu91Y802tKb1lN_!!6000000003013-0-tps-8000-4500.jpg)

Below is a series of demos that extend the Flutter Widget, Native API, and Native player inside Kraken.

![](https://img.alicdn.com/imgextra/i4/O1CN01cpbwnC1Od0hgjtT0K_!!6000000001727-0-tps-8000-4500.jpg)

The following is to improve interactivity. Before introducing Kraken's interactivity, let's take a look at some interactive problems under the Web.

When developing applications with rich interactive capabilities under the web, front-end developers often need to introduce an additional lib to provide enhanced gesture capabilities (such as a gesture library such as Hammer.js). Then, when the front-end developer introduces lib, it will result in an additional request for the corresponding JS library after index.html is loaded, which will cause an additional request overhead and prolong the interactive time of the first screen.

When the user performs an operation on the screen, it may be the user's hand or a device such as the Apple Pencil or a mouse due to the way the user operates. So in the W3C standard, theThe contact points of user-operated interactive applications are abstracted as a [pointer](https://www.w3.org/TR/pointerevents3/), and these pointers will form a gesture according to the operation, which are three processes of down, move, and up. , where move can be omitted (eg click).

In the web, it is necessary to dispatch this series of pointers to the element tree, and frequently send these pointers to the JS layer through bubbling, and then JS completes the recognition of the interaction by encapsulating the Touch API. Doing this brings several problems, first of all, the frequent passing of pointers from C++ to JS brings unnecessary overhead, and the ability to encapsulate standards also creates additional development costs, and ease of use is not outstanding. At this time, if some solutions of the community are used, it will also lead to non-standardization and misalignment of standards, resulting in inconsistent interactive experience on different pages in the same application.

![](https://img.alicdn.com/imgextra/i4/O1CN01HlKs9M1yZBZ0euNcX_!!6000000006592-0-tps-8000-4500.jpg)

In order to solve the above problems, we expect to provide a set of standardized interaction capabilities from the aspects of standardization, ease of use, and standardization. By encapsulating the underlying pointer to obtain different gesture capabilities, developers can quickly develop rich interactive applications.

![](https://img.alicdn.com/imgextra/i2/O1CN0129WN1s1DtzcGM8ywr_!!6000000000275-0-tps-8000-4500.jpg)

Below is a flowchart of the enhanced interactivity in Kraken. When the user performs some interactive operations, the pointer of each touch point will be passed from Native to Kraken, and the Pointer will be distributed to GestureManager (gesture recognizer management class) and Scroll recognizer at the same time. GestureManager will recognize that developers register and distribute to the corresponding gesture recognizers through the Web standard listening behavior (EventTarget.addEventListener), and the Scroll recognizer will also distribute pointers. These recognizers are added to the Flutter arena for gesture competition to ensure that only a specific action is triggered (interaction controllable). The scroll recognizer will trigger the scrolling operation of the scroll area, the gesture recognizer will bubble and dispatch through the standard web process, and finally the developer completes the custom behavior by listening to the event.

![](https://img.alicdn.com/imgextra/i1/O1CN01xPV6dp1mPJdjPkUK3_!!6000000004946-0-tps-8000-4500.jpg)

When developing applications, debugging capabilities are essential. The high front-end development efficiency is not only due to a prosperous ecosystem, but also a friendly development and debugging experience is an artifact to improve efficiency.

![](https://img.alicdn.com/imgextra/i1/O1CN01PF1KQs1DbDNNTBg8Q_!!6000000000234-0-tps-8000-4500.jpg)

Kraken abstracts the Inspector to connect to Chrome DevTools through the Chrome DevTools Protocol, providing a series of debugging experiences that are completely consistent with front-end development of web applications. Whether developers prefer to use Console.log or through JS Debugger, they can get started quickly.

![](https://img.alicdn.com/imgextra/i4/O1CN01mw0qIS1nCK1Fb6C2r_!!6000000005053-0-tps-8000-4500.jpg)

![](https://img.alicdn.com/imgextra/i3/O1CN01LXun9524WKnIJBcAV_!!6000000007398-0-tps-8000-4500.jpg)

In addition, Kraken also provides the ability of local hot update by supporting all standard Web APIs of HMR, so that the development of kraken applications can be consistent with the local hot update debugging experience under the Web, which greatly improves the development and debugging experience of developers.

![](https://img.alicdn.com/imgextra/i3/O1CN010eZQwr1QXdHpyDI3z_!!6000000001986-0-tps-8000-4500.jpg)

Finally, all of Kraken's code has been open sourced. Kraken provides an open TSC mechanism. It is expected that all developers can communicate and make decisions equally, so that Kraken can develop better, and more developers are welcome to build Kraken together.
