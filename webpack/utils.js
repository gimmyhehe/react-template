var path = require('path')
var config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var isProduction = process.env.NODE_ENV === 'production'
const shouldUseRelativeAssetPaths = false
const shouldUseSourceMap = true
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.getStyleLoaders =  (cssOptions, preProcessor) => {
  const loaders = [
    isProduction ? {
      loader: MiniCssExtractPlugin.loader, //抽离CSS样式到单独的文件
      options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {},
    } : require.resolve('style-loader'),
    {
      loader: 'css-loader',
      options: {
        sourceMap: false
      }
    },
    {
      loader: 'postcss-loader'
    }
  ].filter(Boolean)
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: isProduction && shouldUseSourceMap,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    )
  }
  return loaders
}
