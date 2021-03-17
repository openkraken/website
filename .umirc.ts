import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Kraken',
  logo:
    'https://img.alicdn.com/imgextra/i4/O1CN01vfjZK31uFiEAKOl8g_!!6000000006008-2-tps-200-200.png',
  navs: [
    {
      title: '教程',
      path: '/tutorials',
    },
    {
      title: 'API 文档',
      path: '/api',
    },
    // {
    //   title: '常用插件',
    //   path: '/extends',
    // },
    {
      title: '版本',
      path: '/version',
    },
    {
      title: 'Github',
      path: 'https://github.com/openkraken/kraken',
    },
    {
      title: '加入我们',
      path: '/joinus',
    },
  ],
  menus: {
    '/tutorials': [
      {
        title: '快速起步',
        path: 'quickstart',
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
      },
      {
        title: '能力扩展',
        path: '/api/extend',
        children: [
          {
            title: '插件开发',
            path: '/api/extend/plugin',
          },
        ],
      },
    ],
  },
});
