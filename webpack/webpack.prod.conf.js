var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.dev.env
}

module.exports = merge(baseWebpackConfig,{

  module:{
    // rules: [
    //   {
    //     test: /.\js$/,
    //     use:{
    //       loader:'eslint-loader',
    //       options:{
    //         enforce:'pre'
    //       }
    //     }
    //   },
    // ]
  },
  optimization: {
    minimizer: [
      //压缩js 详细配置参考https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
      new UglifyJsPlugin(
        {
          cache: true,
          parallel: true
        }
      ),
      //压缩css的插件
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify:{},
      hash : true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath('css/[name].[hash:7].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].chunk.css')
    }),
  ]
})
