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
  if (!window.krakenPerformanceData) return;

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
    chart.scale({
      time: {
        formatter: time => `${time} ms`,
      },
    });

    chart
      .interval()
      .position('index*time')
      .color('type', ['#2295EC', 'rgb(246, 175, 31)']);
    chart.render();
  }

  let compare = {};
  ['webLoadtime', 'krakenLoadtime'].forEach(type => {
    const list = window.krakenPerformanceData[`${type}List`];
    let sumLoadTimes: Number = 0;
    list.forEach((num: Number) => (sumLoadTimes += num));
    let averageLoadTime = (sumLoadTimes / list.length).toFixed();
    compare[type] = averageLoadTime;

    const ele = document.getElementById(type);
    if (ele) {
      ele.innerHTML = averageLoadTime;
    }
  });

  const compareEle = document.getElementById('compare');
  if (compareEle) {
    compareEle.innerHTML = `${(
      ((compare.webLoadtime - compare.krakenLoadtime) / compare.webLoadtime) *
      100
    ).toFixed()} %`;
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
