# performance comparison

The first screen performance is an important indicator to measure the engine performance. The first screen performance means the length of the white screen time, which has a great impact on the user experience. By using QuickJS as the default JS engine, Kraken can directly download files in ByteCode format to optimize the JS execution time of the application.

Kraken measures above-the-fold data based on [Benchmark](https://github.com/openkraken/kraken/tree/main/performance_tests/benchmark), which is a common product list page in actual business scenarios. Count the time from the completion of loading and the execution of the entry file to the triggering of the load event on the window, so as to measure the time from when the actual user opens the page to when it becomes visible.

[Kraken Performance Benchmark](https://github.com/openkraken/kraken/blob/main/scripts/run_benchmark.js) will automatically collect and upload the above performance data between Kraken and Webview. 5 times before and after the fluctuation data, leaving 50 sets of data as the benchmark data, and finally get the average.

> Note: The test machine for this performance test is MI 6. The WebView version is Chrome/80, and the Kraken version is the latest [main](https://github.com/openkraken/kraken) branch version.

For the 50 sets of data obtained in the latest test (sorted and excluding the fluctuation data before and after), see [detailed data](/en-US/guide/performance-list).

<div>

```jsx
/**
 * inline: true
 */

import React from 'react';
import { G2, Chart, Coordinate, Interval } from 'bizcharts';

let compare = {};
['webLoadtime', 'krakenLoadtime'].forEach(type => {
  const list = window.krakenPerformanceData[`${type}List`];
  let sumLoadTimes = 0;
  list.forEach(num => (sumLoadTimes += num));
  let averageLoadTime = sumLoadTimes / list.length;
  compare[type] = averageLoadTime;
});

const data = [
  {
    type: 'WebView',
    time: parseInt(compare.webLoadtime),
  },
  {
    type: 'Kraken',
    time: parseInt(compare.krakenLoadtime),
  },
];

function Grouped() {
  return (
    <Chart height={200} padding="auto" data={data} autoFit>
      <Coordinate transpose />
      <Interval
        color={{ fields: ['type'], values: ['#2295EC', 'rgb(246, 175, 31)'] }}
        position="type*time"
      />
    </Chart>
  );
}

export default () => (
  <div>
    <div style={{ marginBottom: '100px' }}>
      <p>Average data from the above data </p>
      <ul>
        <li>
          In Kraken, Benchmark average render completion time is{' '}
          {compare.krakenLoadtime} ms.
        </li>
        <li>
          In WebView, the average rendering completion time of Benchmark is{' '}
          {compare.webLoadtime} ms.
        </li>
      </ul>
      <p>
        Under MI 6, Kraken's time above the fold is faster than WebView{' '}
        {(
          ((compare.webLoadtime - compare.krakenLoadtime) /
            compare.webLoadtime) *
          100
        ).toFixed()}
        %.
      </p>
    </div>
    <Grouped />
  </div>
);
```

</div>
