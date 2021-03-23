import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: 'Kraken',
  logo:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
  favicon:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
  styles: [
    'a:hover { color: #F6AF1F !important }',
    'a.active { color: #F6AF1F !important }',
    'ul li > span::before { background-color: #F6AF1F !important }',
    'ul li a::before, nav > span > a.active::after { background-color: #F6AF1F !important }',
    '.__dumi-default-menu { width: 350px !important }',
    '.__dumi-default-layout-toc{ width: 220px !important }',
    '.__dumi-default-layout-content{ padding-left: 30px !important; max-width: none !important }',
    '.__dumi-default-layout-features{ max-width: none !important }',
    '.__dumi-default-menu-list > li > a::after{ background-color: #F6AF1F !important }',
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
      title: '常用插件',
      path: '/extends',
    },
    {
      title: 'CHANGELOG',
      path: '/changelog',
    },
    {
      title: 'GitHub',
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
        title: '接入与使用',
        path: '/guide/use',
        children: [
          {
            title: '用 Rax 开发一个 Kraken 应用',
            path: '/guide/use/rax',
          },
          {
            title: '用 Vue 开发一个 Kraken 应用',
            path: '/guide/use/vue',
          },
          {
            title: '在 Flutter 应用中集成 Kraken',
            path: '/guide/use/interpolation-flutter',
          },
          {
            title: '在原生 App 中集成 Kraken',
            path: '/guide/use/interpolation-app',
          },
        ],
      },
      {
        title: '网络请求',
        path: '/guide/network',
      },
      {
        title: '调试',
        path: '/guide/debug',
      },
      {
        title: 'Kraken 与 Web 的差异',
        path: '/guide/difference',
      },
      {
        title: '进阶',
        path: '/guide/advanced',
        children: [
          {
            title: '如何实现一个高性能长列表',
            path: '/guide/advanced/sliver',
          },
          {
            title: '如何使用增强的手势能力',
            path: '/guide/advanced/gesture',
          },
          {
            title: '如何在 Flutter 应用中处理页面跳转',
            path: '',
          },
          {
            title: 'JS 如何与 Native 通信',
            path: '',
          },
          {
            title: 'Native 如何与 Kraken 进行手势传递',
            path: '/guide/advanced/gesture-to-native',
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
          {
            title: '贡献规范',
            path: '/guide/contribute/spec',
          },
        ],
      },
    ],
    '/api': [
      {
        title: '标签',
        path: '/api/tags',
      },
      {
        title: '样式',
        path: '/api/styles',
        children: [
          {
            title: '盒模型',
            path: '/api/styles/boxmodel',
          },
          {
            title: '定位',
            path: '/api/styles/position',
          },
          {
            title: '布局',
            path: '/api/styles/layout',
          },
          {
            title: '字体与文本',
            path: '/api/styles/text',
          },
          {
            title: '边框与圆角',
            path: '/api/styles/text',
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
            title: '其它',
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
        title: '全局变量与方法',
        path: '/api/global',
      },
      {
        title: 'Kraken Widget',
        path: '/api/widget',
      },
      {
        title: '扩展能力',
        path: '/api/extension',
        children: [
          {
            title: '手势',
            path: '/api/extension/gesture',
          },
          {
            title: 'Sliver',
            path: '/api/extension/sliver',
          },
        ],
      },
      {
        title: '插件',
        path: '/api/plugin',
      },
    ],
  },
});
