# 性能测试详细数据

以下展示最新一次测试得到的 50 组数据（已排序并剔除前后波动数据）。

> 注： 本性能测试的测试机为 MI 6。WebView 版本为 Chrome/80，Kraken 版本为最新 main 分支版本。

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
