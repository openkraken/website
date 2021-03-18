import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Kraken',
  logo:
    'https://img.alicdn.com/imgextra/i4/O1CN01vfjZK31uFiEAKOl8g_!!6000000006008-2-tps-200-200.png',
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
            title: '客户端接入 Kraken',
            path: '/guide/use/native',
            children: [
              {
                title: '使用 Kraken Widget 嵌入在现有 Flutter 页面中',
                path: '/guide/use/native/widget-interpolation',
              },
              {
                title: '使用预构建的 Android AAR/iOS Framework 进行集成',
                path: '/guide/use/native/pre-compiled-interpolation',
              },
              {
                title: '如何集成预构建的产物到 App 内',
                path: '/guide/use/native/interpolation-app',
              },
            ],
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
        title: '内置标签',
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
        title: 'DOM API',
        path: '/api/dom',
      },
      {
        title: '事件',
        path: '/api/event',
        children: [
          {
            title: '通用事件',
            path: '/api/event/common',
          },
          {
            title: '事件冒泡',
            path: '/api/event/bubbling',
          },
          {
            title: '手势',
            path: '/api/event/gesture',
          },
        ],
      },
      {
        titile: 'Kraken API',
        path: '/api/krakenapi',
      },
      {
        title: '扩展 API',
        path: '/api/extends',
        children: [
          {
            title: '插件 API',
            path: '/api/extends/plugin',
          },
        ],
      },
    ],
  },
});
