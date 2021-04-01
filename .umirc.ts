import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: ' ',
  logo:
    'https://img.alicdn.com/imgextra/i1/O1CN01Fch4UU1W9Fs6HYq8G_!!6000000002745-2-tps-490-190.png',
  favicon:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
  styles: [
    '.markdown{ padding-bottom: 200px }',
    'code[class*="language-"], pre[class*="language-"]{ color: #333 }',
    '.markdown :not(pre) code { font-size: 14px }',
    '.markdown pre { font-size: 13px }',
    'a:hover { color: #F6AF1F !important }',
    '.__dumi-default-layout-content a { color: #F6AF1F !important }',
    'a.active { color: #F6AF1F !important }',
    'ul li > span::before { background-color: #F6AF1F !important }',
    'ul li a::before, nav > span > a.active::after { opacity: 0 !important; background-color: #F6AF1F !important }',
    '.__dumi-default-layout-content{ max-width: none !important }',
    '.__dumi-default-layout[data-route="/"] .markdown{ padding-bottom: 0px !important;padding-left: 0px !important; padding-right: 0px !important }',
    '.__dumi-default-layout-features{ max-width: none !important }',
    '.__dumi-default-menu-list > li > a::after{ background-color: #F6AF1F !important }',
    '::-webkit-scrollbar{ display:none }',
    '.__dumi-default-layout-footer-meta { display: none !important }',
    '.__dumi-default-layout-hero{ display: none !important }',
    '.__dumi-default-layout { padding-left: 0px !important;padding-right: 0px !important; padding-bottom: 0px !important }',
    '.footer-container a { color: #FFFFFF !important }',
    '.__dumi-default-layout[data-route="/"] .__dumi-default-layout-footer { display: none }',
    '.__dumi-default-navbar-logo{ width: 100px }',
    '.__dumi-default-layout-features > dl dt { margin-bottom: 8px !important }',
    '@media only screen and (min-width: 767px) {\
      .__dumi-default-menu { width: 350px !important }\
      .markdown{ padding-left: 380px !important }\
      .homepage-title { color: #0b1b3e;font-size: 50px;line-height: 71px;max-width: 600px;margin: 0;padding-top: 106px;padding-bottom: 28px;font-weight: 600;box-sizing: content-box;box-sizing: initial;position: relative;font-family: PingFangSC-Semibold;letter-spacing: 0 }\
      .homepage-subtitle { font-weight: 100;font-size: 18px;margin-bottom: 10px;font-family: PingFangSC-Light;color: #000;line-height: 1.8em; width: 47% }\
      .homepage-img { width: 50%;position: absolute;right: 0;z-index: 1 } \
      .quick-start-github{ line-height: 42px; }\
      .quick-start{ margin-top: 50px; display: flex;flex-direction:row; }\
      .homepage-root{ max-width: 1180px;width: 100%;margin: 0 auto 120px;position: relative;padding-top: 30px;height:470px }\
      .introduction-infos{ width:50%; padding:120px 25px }\
      .footer-block-content{ flex-grow: 1; }\
      .footer-wrapper{ max-width: 1180px;margin: 0 auto;padding: 100px 0 0px;display: flex;flex-wrap: wrap; }\
      .markdown{ padding-right: 200px },\
    }',
    '@media only screen and (max-width: 767px) {\
      .homepage-title { text-align: center; color: #0b1b3e;font-size: 38px;line-height: 71px;max-width: 600px;margin: 0;padding-bottom: 28px;font-weight: 600;box-sizing: content-box;box-sizing: initial;position: relative;font-family: PingFangSC-Semibold;letter-spacing: 0;display: table;margin: 0 auto }\
      .homepage-subtitle { margin:0 auto;text-align: center;display:table;font-weight: 100;font-size: 18px;font-family: PingFangSC-Light;color: #000;line-height: 1.8em;  }\
      .homepage-img { display: none }\
      .quick-start{ margin-top: 50px; display: flex;flex-direction:column; }\
      .quick-start-btn{ display: block; margin: 0 auto; }\
      iframe.quick-start-btn{ display: none; }\
      .quick-start-github{ text-align: center;margin-top: 20px;margin-left: 0; position: relative;top: 10px; }\
      .__dumi-default-layout[data-route="/"]{ padding-left: 0 !important; padding-right: 0 !important }\
      .homepage-root{ max-width: 1180px;width: 100%;margin: 0 auto 20px;position: relative;padding-top: 30px;height:470px }\
      .__dumi-default-layout-features dl { padding-left: 80px !important;width: 170px;margin: 30px auto !important; display: table; }\
      .introduction-img{ display: none !important; }\
      .introduction-infos{ width:100%; padding:120px 25px }\
      .footer-container div ul li { width: 100% !important }\
      .footer-block-content{ margin: 0 auto; flex-grow: 1; text-align: center; margin-bottom: 50px; }\
      .footer-wrapper{ max-width: 1180px;margin: 0 auto;padding: 100px 0 0px;display: flex;flex-wrap: wrap; flex-direction: column; }\
      .__dumi-default-navbar-logo{ width: 50px }\
    }',
  ],
  scripts: [
    // 数据统计
    {
      src: 'https://s9.cnzz.com/z_stat.php?id=1279786237&web_id=1279786237',
      defer: true,
    },
    {
      content:
        "window.addEventListener('click', function(e){\
          if(e.target.id === 'sayKraken-img'){\
            sayKraken.play()\
          }\
        },false)",
      charset: 'utf-8',
    },
  ],
  navs: [
    {
      title: '教程',
      path: '/guide',
    },
    {
      title: '开发',
      path: '/development',
    },
    {
      title: 'API',
      path: '/api',
    },
    {
      title: '常用插件',
      path: '/plugins',
    },
    {
      title: 'GITHUB',
      path: 'https://github.com/openkraken/kraken',
    },
  ],
  menus: {
    '/guide': [
      {
        title: '快速起步',
        path: '/guide',
      },
      {
        title: '基础',
        path: '/basic',
        children: [
          {
            title: '结构与样式',
            path: '/basic/style',
          },
          {
            title: '尺寸与边距',
            path: '/basic/sizing',
          },
          {
            title: '颜色与背景',
            path: '/basic/color',
          },
          {
            title: '布局',
            path: '/basic/layout',
          },
          {
            title: '文本输入',
            path: '',
          },
          {
            title: '多媒体',
            path: '/basic/multimedia',
          },
          {
            title: '滚动容器',
            path: '',
          },
          {
            title: '触摸事件',
            path: '',
          },
          {
            title: '定时器',
            path: '',
          },
          {
            title: '网络请求',
            path: '/guide/basic/network',
          },
          {
            title: '页面跳转',
            path: '',
          },
          {
            title: '动画',
            path: '',
          },
        ],
      },
      {
        title: '开发',
        path: 'development',
        children: [
          {
            title: '准备环境',
            path: '',
          },
          {
            title: '用 Rax 开发一个 Kraken 应用',
            path: '/guide/development/rax',
          },
          {
            title: '用 Vue 开发一个 Kraken 应用',
            path: '/guide/development/vue',
          },
          {
            title: '状态管理',
            path: '',
          },
          {
            title: '前端调试',
            path: '/guide/development/debug',
          },
          {
            title: '与浏览器的差异',
            path: '/guide/development/difference-to-web',
          },
        ],
      },
      {
        title: '进阶',
        path: '/guide/advanced',
        children: [
          {
            title: '实现一个高性能长列表',
            path: '/guide/advanced/high-performance-list',
          },
          {
            title: '使用增强的手势能力',
            path: '/guide/advanced/gesture',
          },
          {
            title: 'Native 控制页面跳转',
            path: '/guide/advanced/handle-navigation',
          },
          {
            title: 'JavaScript 与 Native 通信',
            path: '/guide/advanced/communicate-with-native',
          },
          {
            title: 'Native 与 Kraken 进行手势传递',
            path: '/guide/advanced/gesture-to-native',
          },
          {
            title: '测算 Kraken 的运行性能',
            path: '/guide/advanced/measure-performance',
          },
        ],
      },
      {
        title: '客户端接入',
        path: '/guide/native',
        children: [
          {
            title: '在 Flutter 应用中集成 Kraken',
            path: '/guide/native/interpolation-flutter',
          },
          {
            title: '在原生 App 中集成 Kraken',
            path: '/guide/native/interpolation-app',
          },
        ],
      },
      {
        title: '插件',
        path: '/guide/plugin',
        children: [
          {
            title: '什么是插件',
            path: '/guide/plugin/introduction',
          },
          {
            title: '开发插件',
            path: '/guide/plugin/development',
          },
        ],
      },
      {
        title: '贡献代码',
        path: '/guide/contribute',
        children: [
          {
            title: '准备开发环境',
            path: '/guide/contribute/environment',
          },
          {
            title: '开发与调试',
            path: '/guide/contribute/development',
          },
          {
            title: '编写测试用例',
            path: '/guide/contribute/test',
          },
        ],
      },
    ],
    '/development': [
      {
        title: '标签',
        path: '/development/tags',
      },
      {
        title: '样式',
        path: '/development/styles',
        children: [
          {
            title: '尺寸与边距',
            path: '/development/styles/sizing',
          },
          {
            title: '布局',
            path: '/development/styles/layout',
          },
          {
            title: '定位',
            path: '/development/styles/position',
          },
          {
            title: '字体与文本',
            path: '/development/styles/text',
          },
          {
            title: '边框与圆角',
            path: '/development/styles/border',
          },
          {
            title: '颜色与背景',
            path: '/development/styles/background',
          },
          {
            title: '变形与过渡',
            path: '/development/styles/transform',
          },
          {
            title: '单位',
            path: '/development/styles/unit',
          },
          {
            title: '其它',
            path: '/development/styles/misc',
          },
          {
            title: '与浏览器差异',
            path: '/development/styles/difference',
          },
        ],
      },
      {
        title: 'DOM',
        path: '/development/dom',
        children: [
          {
            title: '事件',
            path: '/development/dom/event',
          },
          {
            title: '节点',
            path: '/development/dom/node',
          },
          {
            title: '文档',
            path: '/development/dom/document',
          },
        ],
      },
      {
        title: '扩展能力',
        path: '/development/extension',
        children: [
          {
            title: '手势',
            path: '/development/extension/gesture',
          },
          {
            title: 'Sliver',
            path: '/development/extension/sliver',
          },
          {
            title: '本地存储',
            path: '',
          },
        ],
      },
      {
        title: '全局变量与方法',
        path: '/development/global',
      },
    ],
    '/api': [
      {
        title: 'Widget API',
        path: '/api/widget',
        children: [
          {
            title: '容器配置',
            path: '',
          },
          {
            title: '加载资源',
            path: '',
          },
          {
            title: '事件',
            path: '',
          },
          {
            title: '开启调试',
            path: '',
          },
          {
            title: '手势捕获',
            path: '',
          },
          {
            title: '动画控制',
            path: '',
          },
          {
            title: '页面跳转',
            path: '',
          },
          {
            title: '与 JS 通信',
            path: '',
          },
        ],
      },
      {
        title: '插件 API',
        path: '/api/plugin',
      },
    ],
    '/plugins': [
      {
        title: 'WebSocket',
        path: '/plugins/kraken_websocket',
      },
      {
        title: 'AnimationPlayer',
        path: '/plugins/kraken_animation_player',
      },
      {
        title: 'WebView',
        path: '/plugins/kraken_webview',
      },
      {
        title: 'Video',
        path: '/plugins/kraken_video_player',
      },
    ],
  },
});
