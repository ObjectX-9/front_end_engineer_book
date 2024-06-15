import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  ssr: isProd ? {} : false,
  exportStatic: isProd ? {} : false,
  title: 'ObjectX前端工程化实践',
  mode: 'site',
  favicon: 'https://s21.ax1x.com/2024/06/14/pkdLxmt.png',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  theme: {
    '@primary-color': '#fff',
  },
  logo: 'https://s21.ax1x.com/2024/06/14/pkdLxmt.png',
  themeConfig: {},
  navs: [
    null,
    {
      title: '⭐️Github',
      path: 'https://github.com/ObjectX-9/front_end_engineer_book',
    },
  ],
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  // 这里用你的仓库名
  base: isProd ? '/front_end_engineer_book/' : '/', // router base
  publicPath: isProd ? '/front_end_engineer_book/' : '/', // router base
} as IConfig);
