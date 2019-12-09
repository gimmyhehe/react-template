var webpack = require('webpack')
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })
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
        test: /\.(js|jsx)$/,
        use: 'Happypack/loader?id=js',
        include: path.resolve(__dirname,'../src/'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: utils.getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: utils.getStyleLoaders( {
          javascriptEnabled: true
        },'less-loader'),
      },
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
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [ 'babel-loader' ]
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: require('../public/manifest.json'),
    // }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
      }
    ]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // DefinePlugin 是webpack 的内置插件，该插件可以在打包时候替换制定的变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction ?
        config.build.env : config.dev.env
    }),
  ]
}
