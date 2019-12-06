//webpack默认的配置文件，如果需要更改，可在脚本条件  --config '配置文件名'
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
// const resolve = require('resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// style files regexes
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

module.exports = {
  mode : 'development',  //development or production
  entry : './src/index.js',
  output : {
    // The build folder.
    path: path.resolve(__dirname,'dist'),
    // Add /* filename */ comments to generated require()s in the output.
    //pathinfo: isEnvDevelopment,
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename : 'bundle.[contenthash:8].js'
    //  filename: isEnvProduction
    //    ? 'static/js/[name].[contenthash:8].js'
    //    : isEnvDevelopment && 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    //chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',

    // We inferred the "public path" (such as / or /my-project) from homepage.
    // We use "/" in development.
    //publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    //  devtoolModuleFilenameTemplate: isEnvProduction
    //    ? info =>
    //        path
    //          .relative(paths.appSrc, info.absoluteResourcePath)
    //          .replace(/\\/g, '/')
    //    : isEnvDevelopment &&
    //      (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
  },
  devServer:{
    port : 3000,
    progress : true,
    contentBase: './dist', //the path where the build target put
    compress:true //
  },
  module:{
    rules:[
      {
        test : '/\.css$/',
        use:[{loader:'style-loader'},'css-loader']
      }
    ]
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

}
