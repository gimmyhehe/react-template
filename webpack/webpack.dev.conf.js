var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.dev.env
}

module.exports = merge(baseWebpackConfig,{
  devServer:{
    port : 3000,
    progress : true,
    contentBase: './dist', //the path where the build target put
    compress:true //
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify:{},
      hash : true
    })
  ]
})
