import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  ssr: isProd ? {} : false,
  exportStatic: isProd ? {} : false,
  title: 'ObjectX前端工程化实践',
  mode: 'site',
  favicon: '/objectX.png',
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
  logo: '/objectX.png',
  themeConfig: {
    repository: {
      url: '',
      branch: 'main',
      platform: 'github',
    },
    qrcode:
      'tuyaSmart--addVirtualDev?productId=mvhcrizelobov3dw&token=release_common_component',
    apiData: 'https://unpkg.com/tuya-panel-kit-props-data/props.json',
    demoUrl:
      process.env.NODE_ENV === 'development'
        ? // ? 'http://localhost:8001'
          'https://tuya.github.io/tuya-panel-kit/tuya-panel-kit/'
        : 'https://tuya.github.io/tuya-panel-kit/tuya-panel-kit/',
    demoInfoUrl:
      'https://github.com/tuya/tuya-panel-kit/blob/master/example/tuya-panel-kit/src/pages{demo}/index.tsx',
    typeAssetsUrl: 'https://panel-docs.tuyacn.com/types-assets.json',
  },
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  // 这里用你的仓库名
  base: isProd ? '/book_template/' : '/', // router base
  publicPath: isProd ? '/book_template/' : '/', // router base
  headScripts: [
    {
      async: true,
      src:
        '//static1.tuyacn.com/static/ty-lib/tpm3/tpm-3.3.11.min.js?appId=panel-docs',
    },
  ],
  // more config: https://d.umijs.org/config
} as IConfig);
