import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: ' ',
  logo:
    'https://img.alicdn.com/imgextra/i1/O1CN01CUE2IL1FdAGnYPawX_!!6000000000509-2-tps-350-116.png',
  favicon:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
  styles: [
    '@keyframes levitate { 0% { transform: translate3d(0,-2.3%,0);} 50% {transform: translate3d(0,2.3%,0);} 100% {transform: translate3d(0,-2.3%,0);}}',
    '.img-animation{ animation: levitate 5s ease-in-out infinite forwards }',
    '.__dumi-default-code-block{ background-color: #F9F9F9 }',
    '.preview-image {box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.3); border-radius: 6px; margin: 10px 20px 20px 0; width: 360px;}',
    '.preview-tips {margin-left: 50px;margin-top: 10px;display: flex; flex-direction: column; max-width: 500px;}',
    '.preview-code {margin-top: 10px; background-color: #f9f9f9; padding: 10px; color: #000;font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;}',
    '.preview-qrcode { margin-top: 20px; width: 200px; height: 200px;}',
    '.preview-title {font-weight: bold; margin: 0 0 20px;}',
    '.preview-row {margin-bottom: 20px;}',
    '.markdown{ padding-bottom: 200px }',
    'code[class*="language-"], pre[class*="language-"]{ color: #333 }',
    '.markdown :not(pre) code { font-size: 14px }',
    '.markdown pre { font-size: 13px }',
    'a:hover { color: #F6AF1F !important }',
    '.__dumi-default-layout-content a { color: #F6AF1F !important }',
    'a.active { color: #F6AF1F !important }',
    '.support-frame img{ margin: 20px 10px 0px; cursor: pointer; }',
    'ul li > span::before { background-color: #F6AF1F !important }',
    '.__dumi-default-layout-features{ max-width: 1180px !important }',
    'ul li a::before, nav > span > a.active::after { opacity: 0 !important; background-color: #F6AF1F !important }',
    '.__dumi-default-layout-content{ max-width: none !important }',
    '.__dumi-default-layout-hero + .__dumi-default-layout-content{ margin-top: 0px !important }',
    '.__dumi-default-layout[data-route="/"] .markdown{ padding-bottom: 0px !important;padding-left: 0px !important; padding-right: 0px !important }',
    '.__dumi-default-layout-features{ max-width: 1180px }',
    '.__dumi-default-menu-list > li > a::after{ background-color: #F6AF1F !important }',
    '::-webkit-scrollbar{ display:none }',
    '.__dumi-default-layout-footer-meta { display: none !important }',
    '.__dumi-default-layout-hero{ display: none !important }',
    '.__dumi-default-layout { padding-left: 0px !important;padding-right: 0px !important; padding-bottom: 0px !important }',
    '.footer-container a { color: #FFFFFF !important }',
    '.__dumi-default-layout[data-route="/"] .__dumi-default-layout-footer { display: none }',
    '.__dumi-default-navbar-logo{ width: 30px }',
    '.__dumi-default-layout-features > dl dt { margin-bottom: 8px !important }',
    '.sponsors img { filter: grayscale(100%); opacity: 0.66; }',
    '.sponsors img:hover { filter: grayscale(0%); opacity: 1; }',
    'video:focus {outline: -webkit-focus-ring-color auto 0px;}',
    'video::-webkit-media-controls {overflow: hidden !important;};video::-webkit-media-controls-enclosure {width: calc(100% + 32px);margin-left: auto;}',
    '@media only screen and (min-width: 767px) {\
      .code-preview {display: flex; justify-content: left;max-width: 1000px}\
      .__dumi-default-menu { width: 350px !important }\
      .markdown{ padding-left: 380px !important }\
      .homepage-title { color: #0b1b3e;font-size: 70px;line-height: 71px;max-width: 600px;margin: 0;padding-top: 80px;padding-bottom: 42px;font-weight: 600;box-sizing: content-box;box-sizing: initial;position: relative;font-family: PingFangSC-Semibold;letter-spacing: 0 }\
      .homepage-subtitle { font-weight: 100;font-size: 18px;margin-bottom: 10px;font-family: PingFangSC-Light;color: #000;line-height: 1.8em; width: 47% }\
      .homepage-img { width: 50%;position: absolute;right: 0;z-index: 1 } \
      .quick-start-github{ line-height: 42px; }\
      .quick-start{ margin-top: 50px; display: flex;flex-direction:row; }\
      .homepage-root{ max-width: 1180px;width: 100%;margin: 0 auto 50px;position: relative;height:470px }\
      .introduction-infos{ width:50%; padding:120px 25px }\
      .footer-block-content{ flex-grow: 1; }\
      .footer-wrapper{ max-width: 1180px;margin: 0 auto;padding: 100px 0 0px;display: flex;flex-wrap: wrap; }\
      .markdown{ padding-right: 200px }\
      .sponsors-container{ box-shadow: 0 0 8px srgba(0,0,0,.101562);background-color:#f8fafc; padding: 100px 150px }\
      .sponsors-list{ display:flex;flex-direction:row;max-width:1200px;width:100%;margin:0 auto;position:relative;align-items: center; }\
      .github-btn{ color: #4f5959;border-color: #f6f6f6; }\
      .sponsors{ margin: 20px 50px;width:200px;vertical-align: middle; }\
    }',
    '@media only screen and (max-width: 767px) {\
      .preview-tips{ display: none; }\
      .code-preview {display: flex; flex-direction: column;}\
      .homepage-title { text-align: center; color: #0b1b3e;font-size: 38px;line-height: 71px;max-width: 600px;margin: 0;padding-bottom: 28px;font-weight: 600;box-sizing: content-box;box-sizing: initial;position: relative;font-family: PingFangSC-Semibold;letter-spacing: 0;display: table;margin: 0 auto }\
      .homepage-subtitle { margin:0 auto;text-align: center;display:table;font-weight: 100;font-size: 18px;font-family: PingFangSC-Light;color: #000;line-height: 1.8em;  }\
      .homepage-img { display: none }\
      .quick-start{ margin-top: 50px; display: flex;flex-direction:column; }\
      .quick-start-btn{ display: block; margin: 0 auto; }\
      .github-btn{ display: block; margin: 0px auto;width: 170px;margin-top:20px; }\
      iframe.quick-start-btn{ display: none; }\
      .quick-start-github{ text-align: center;margin-top: 20px;margin-left: 0; position: relative;top: 10px; }\
      .__dumi-default-layout[data-route="/"]{ padding-left: 0 !important; padding-right: 0 !important }\
      .homepage-root{ max-width: 1180px;width: 100%;margin: 0 auto 20px;position: relative;height:400px }\
      .__dumi-default-layout-features dl { padding-left: 80px !important;width: 170px;margin: 30px auto !important; display: table; }\
      .introduction-img{ display: none !important; }\
      .introduction-infos{ width:100%; padding:120px 25px }\
      .footer-container div ul li { width: 100% !important }\
      .footer-block-content{ margin: 0 auto; flex-grow: 1; text-align: center; margin-bottom: 50px; }\
      .footer-wrapper{ max-width: 1180px;margin: 0 auto;padding: 100px 0 0px;display: flex;flex-wrap: wrap; flex-direction: column; }\
      .__dumi-default-navbar-logo{ width: 50px }\
      .sponsors-container{ padding-bottom: 30px;box-shadow: 0 0 8px rgba(0,0,0,.101562);background-color:#f8fafc; }\
      .sponsors-list{ padding: 0 30px;width:100%;margin:0 auto;position:relative; }\
      .sponsors{ vertical-align: middle;margin-top: 20px;margin:0 20px;display: inline-block;width: 100px; }\
      .support-frame{ margin: 0px auto; width: 150px; }\
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
      title: 'API',
      path: '/api',
    },
    {
      title: '插件',
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
        path: '/guide/basic',
        children: [
          {
            title: '结构与样式',
            path: '/guide/basic/style',
          },
          {
            title: '尺寸与边距',
            path: '/guide/basic/sizing',
          },
          {
            title: '颜色与背景',
            path: '/guide/basic/color',
          },
          {
            title: '布局',
            path: '/guide/basic/layout',
          },
          {
            title: '处理文本输入',
            path: '/guide/basic/text-input',
          },
          {
            title: '多媒体',
            path: '/guide/basic/multimedia',
          },
          {
            title: '滚动容器',
            path: '/guide/basic/scrollable',
          },
          {
            title: '触摸与手势',
            path: '/guide/basic/touch',
          },
          {
            title: '定时器',
            path: '/guide/basic/timer',
          },
          {
            title: '网络请求',
            path: '/guide/basic/network',
          },
          {
            title: '页面跳转',
            path: '/guide/basic/navigation',
          },
          {
            title: '动画',
            path: '/guide/basic/animation',
          },
          {
            title: '前端调试',
            path: '/guide/basic/debug',
          },
          {
            title: '与浏览器的差异',
            path: '/guide/basic/difference-to-web',
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
        title: '框架开发',
        path: '/guide/development',
        children: [
          {
            title: '用 Rax 开发 Kraken 应用',
            path: '/guide/development/rax',
          },
          {
            title: '用 Vue 开发 Kraken 应用',
            path: '/guide/development/vue',
          },
          {
            title: '用 React 开发 Kraken 应用',
            path: '/guide/development/react',
          },
        ],
      },
      {
        title: 'Kraken Gallery',
        path: 'https://github.com/openkraken/gallery',
      },
      {
        title: '客户端集成',
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
          {
            title: 'Kraken Widget',
            path: '/guide/native/widget',
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
    '/api': [
      {
        title: '标签',
        path: '/api/tags',
        children: [
          {
            title: '分区根元素',
            path: '/api/tags/sectioning-root',
          },
          {
            title: '内容分区',
            path: '/api/tags/content-sectioning',
          },
          {
            title: '文本内容',
            path: '/api/tags/text-content',
          },
          {
            title: '内联文本语义',
            path: '/api/tags/inline-text-semantics',
          },
          {
            title: '表单',
            path: '/api/tags/forms',
          },
          {
            title: '图片和多媒体',
            path: '/api/tags/image-and-multimedia',
          },
          {
            title: '编辑标识',
            path: '/api/tags/demarcating-edits',
          },
          {
            title: '内嵌内容',
            path: '/api/tags/embedded-content',
          },
          {
            title: '脚本',
            path: '/api/tags/scripting',
          },
        ],
      },
      {
        title: '样式',
        path: '/api/styles',
        children: [
          {
            title: '尺寸与边距',
            path: '/api/styles/sizing',
          },
          {
            title: '布局',
            path: '/api/styles/layout',
          },
          {
            title: '定位',
            path: '/api/styles/position',
          },
          {
            title: '字体与文本',
            path: '/api/styles/text',
          },
          {
            title: '边框与圆角',
            path: '/api/styles/border',
          },
          {
            title: '颜色与背景',
            path: '/api/styles/background',
          },
          {
            title: '变形与过渡',
            path: '/api/styles/transform',
          },
          {
            title: '单位',
            path: '/api/styles/unit',
          },
          {
            title: '其它样式',
            path: '/api/styles/misc',
          },
          {
            title: '与浏览器差异',
            path: '/api/styles/difference',
          },
        ],
      },
      {
        title: 'DOM',
        path: '/api/dom',
        children: [
          {
            title: '事件',
            path: '/api/dom/event',
          },
          {
            title: '节点',
            path: '/api/dom/node',
          },
          {
            title: '文档',
            path: '/api/dom/document',
          },
        ],
      },
      {
        title: '增强能力',
        path: '/api/enhancement',
        children: [
          {
            title: '手势',
            path: '/api/enhancement/gesture',
          },
          {
            title: 'Sliver',
            path: '/api/enhancement/sliver',
          },
          {
            title: '异步本地存储',
            path: '/api/enhancement/storage',
          },
        ],
      },
      {
        title: '宿主环境',
        path: '/api/host-environment',
        children: [
          {
            title: 'Timers',
            path: '/api/host-environment/timers',
          },
          {
            title: 'requestAnimationFrame',
            path: '/api/host-environment/requestanimationframe',
          },
          {
            title: 'Screen',
            path: '/api/host-environment/screen',
          },
          {
            title: 'fetch',
            path: '/api/host-environment/fetch',
          },
          {
            title: 'XMLHttpRequest',
            path: '/api/host-environment/xmlhttprequest',
          },
          {
            title: 'URL',
            path: '/api/host-environment/url',
          },
          {
            title: 'URLSearchParams',
            path: '/api/host-environment/urlsearchparams',
          },
          {
            title: 'Console',
            path: '/api/host-environment/console',
          },
        ],
      },
    ],
    '/plugins': [
      {
        title: '插件',
        path: '/plugins/plugin',
        children: [
          {
            title: '什么是插件',
            path: '/plugins/plugin/introduction',
          },
          {
            title: '开发插件',
            path: '/plugins/plugin/development',
          },
        ],
      },
      {
        title: '官方插件',
        path: '/plugins/official',
        children: [
          {
            title: 'WebSocket',
            path: '/plugins/official/kraken_websocket',
          },
          {
            title: 'AnimationPlayer',
            path: '/plugins/official/kraken_animation_player',
          },
          {
            title: 'WebView',
            path: '/plugins/official/kraken_webview',
          },
          {
            title: 'Video',
            path: '/plugins/official/kraken_video_player',
          },
        ],
      },
    ],
  },
});
