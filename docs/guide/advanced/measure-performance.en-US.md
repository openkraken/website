# Measure the performance of Kraken

In the process of using Kraken, it is inevitable to encounter some performance bottlenecks.

Under normal circumstances, Kraken can quickly complete the rendering of the page, but in some special scenarios, Kraken's performance will be affected, so that the overall performance experience does not look so good.

In the Profile operation mode, Kraken collects the time spent in each stage of the operation. You can get the running performance report of each module of Kraken through a simple JS API to locate performance problems.

## Turn on Profile mode

By default, Kraken will not record the time consuming of each stage during its operation.

When building the bridge, add the environment variable `ENABLE_PROFILE=true` to enable Profile recording.

```shell script
ENABLE_PROFILE=true npm run build:bridge:all:release
```

At startup, add the `--profile` parameter to let Flutter work in Profile mode to perform statistics on performance data.

```shell script
flutter run --profile
```

## Get performance report

Under the premise of enabling Profile mode, performance report data can be obtained by calling `performance.__kraken_navigation_summary__()`.

```javascript
setTimeout(() => {
  console.log(performance.__kraken_navigation_summary__());
}, 2000); // get report after 2s
```
