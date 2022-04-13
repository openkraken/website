# Performance test detailed data

The following shows the 50 sets of data obtained from the latest test (sorted and before and after fluctuation data are excluded).

> Note: The test machine for this performance test is MI 6. The WebView version is Chrome/80, and the Kraken version is the latest main branch version.

<div>

```jsx
/**
 * inline: true
 */

import React from 'react';
import { G2, Chart, Tooltip, Interval } from 'bizcharts';

let data = [];
data = data.concat(
  window.krakenPerformanceData['webLoadtimeList'].map((time, index) => {
    return { time, index: index + 1, type: 'WebView' };
  }),
);
data = data.concat(
  window.krakenPerformanceData['krakenLoadtimeList'].map((time, index) => {
    return { time, index: index + 1, type: 'Kraken' };
  }),
);

function Grouped() {
  return (
    <Chart height={500} padding="auto" data={data} autoFit>
      <Interval
        color={{ fields: ['type'], values: ['#2295EC', 'rgb(246, 175, 31)'] }}
        position="index*time"
      />
      <Tooltip shared />
    </Chart>
  );
}

export default () => (
  <div>
    <Grouped />
  </div>
);
```

</div>
