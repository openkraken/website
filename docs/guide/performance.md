# 性能对比

首屏性能是衡量引擎性能的一个重要重要指标，首屏性能意味着白屏时间的长短，对用户体验有着非常大的影响。Kraken 通过将 QuickJS 作为默认的 JS 引擎，用户可以直接下发 ByteCode 格式的文件来优化应用程序的 JS 执行时间。

Kraken 基于 [Benchmark](https://github.com/openkraken/kraken/tree/main/performance_tests/benchmark) 衡量首屏数据，该 Benchmark 是一个实际业务场景比较常见的商品列表页。统计从加载完成并开始执行入口文件到 window 上的 load 事件触发的时间，以此衡量实际用户从打开页面到可见的时间。

[Kraken Performance Benchmark](https://github.com/openkraken/kraken/blob/main/scripts/run_benchmark.js) 会自动采集以及上传 Kraken 与 Webview 之间的上述性能数据，默认会采集 60 次，去掉前后 5 次的波动数据，留下 50 组数据作为基准数据，最后得到平均值。

> 注： 本性能测试的测试机为 MI 6。

以下是最新一次得到数据（已排序并剔除前后波动数据）：

<div id="loadtimeList" style="margin: 30px 0px; width: 100%"></div>

由上述数据得出平均数据：

- 在 Kraken 中，Benchmark 平均渲染完成时间为 <span id="krakenLoadtime"></span> ms。
- 在 WebView 中，Benchmark 平均渲染完成时间为 <span id="webLoadtime"></span> ms。

在 MI 6 下，Kraken 首屏时间较 WebView 快 <span id="compare"></span>。
