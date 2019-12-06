var webpack = require('webpack')
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports ={
  entry: config.common.entry,
  output: config.common.output,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: config.common.alias
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel-loader?cacheDirectory',
      //   include: [resolve('src')]
      // },
      //这里的options也可以写在babel.config.js
      {
        test: /\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              '@babel/preset-env'
            ],
            plugins:[
              ["@babel/plugin-transform-runtime"]
            ]
          }
        },
        include: path.resolve(__dirname,'../src/'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: utils.getStyleLoaders(),
      },
      // {
      //   test: /\.less$/,
      //   use: utils.generateCSSLoaders('less', {
      //     modifyVars: utils.getThemeConfig(),
      //     javascriptEnabled: true
      //   }),
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // Webpack3 的 Scope Hositing 特性
    new webpack.optimize.ModuleConcatenationPlugin(),
    // DefinePlugin 是webpack 的内置插件，该插件可以在打包时候替换制定的变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction ?
        config.build.env : config.dev.env
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}
