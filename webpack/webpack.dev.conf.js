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
    hot:true,
    port : 3000,
    progress : true,
    disableHostCheck: true, //  解决IEInvalid Host/Origin header 的问题
    contentBase: config.buildDir, //the path where the build target put
    historyApiFallback: true,
    // 前端mock数据
    // before(app){
    //   app.get('/test',function(req,res){
    //     res.json({name:'gimmyhehe'})
    //   })
    // },
    proxy:{
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite:{'/api':'/api'},
        secure: false,
        changeOrigin: true,
      }
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify:{},
      hash : true
    })
  ]
})
