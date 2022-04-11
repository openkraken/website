// src/app.ts
import Prism from 'prism-react-renderer/prism';
import { Chart } from '@antv/g2';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-dart');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-kotlin');

if (window && navigator && window.location.pathname === '/') {
  var lang = navigator.language;
  if (lang !== 'zh-CN') {
    window.location.href = '/en-US';
  }
}

const dealwithPerformance = () => {
  let loadtimeList = document.getElementById('loadtimeList');

  if (loadtimeList) {
    const chart = new Chart({
      container: loadtimeList,
      autoFit: true,
      height: 500,
      padding: 'auto',
    });

    let data = [];
    data = data.concat(
      window.krakenPerformanceData['webLoadtimeList'].map(
        (time: Number, index: Number) => {
          return { time, index: index + 1, type: 'webview' };
        },
      ),
    );
    data = data.concat(
      window.krakenPerformanceData['krakenLoadtimeList'].map(
        (time: Number, index: Number) => {
          return { time, index: index + 1, type: 'kraken' };
        },
      ),
    );

    chart.data(data);
    chart.scale('time', {
      alias: '首屏时间（ms）',
    });

    chart
      .interval()
      .position('index*time')
      .color('type');
    chart.render();
  }
};

setTimeout(() => {
  dealwithPerformance();
}, 0);

// Add event listenter to watch route change.
document.body.addEventListener('click', (e: MouseEvent) => {
  const target: Element = e.target as Element;
  if (
    target.nodeName.toLowerCase() === 'a' &&
    target.getAttribute('href') === '/guide/performance'
  ) {
    setTimeout(() => {
      dealwithPerformance();
    }, 0);
  }
});
