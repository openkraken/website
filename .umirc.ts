import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Kraken',
  logo:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
  favicon:
    'https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png',
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
      title: 'Github',
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
        title: '调试',
        path: '/guide/debug',
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
            title: 'CSS 属性支持列表',
            path: '/api/styles/css',
          },
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
