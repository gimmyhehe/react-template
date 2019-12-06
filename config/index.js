// https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
var path = require('path')
var ouputDir = '../dist'
var resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  common:{
    entry:'./src/index.js',
    output : {
      path: path.resolve(__dirname,ouputDir),
      filename : 'bundle.[contenthash:8].js'
   },
    alias: {
      '@': resolve('src'),
      '@actions': resolve('src/actions'),
      '@api': resolve('src/api'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@constants': resolve('src/constants'),
      '@containers': resolve('src/containers'),
      '@decorators': resolve('src/decorators'),
      '@pages': resolve('src/pages'),
      '@reducers': resolve('src/reducers'),
      '@routes': resolve('src/routes'),
      '@store': resolve('src/store'),
      '@utils': resolve('src/utils')
    }
  },
  build: {
    env: '"production"',
    index: path.resolve(__dirname, '../dist/index.html'),
    title: 'One Pro',
    icon: path.resolve(__dirname, '../src/assets/favicon.png'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    extractCSS: true,
    useEslint: false
  },
  dev: {
    env: '"development"',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // Various Dev Server settings
    port: 3000, // can be overwritten by process.env.PORT
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    proxyTable: {
    },

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
