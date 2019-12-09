var path = require('path')
var webpack = require('webpack')
var project = require('../package.json')
var vendors = Object.keys(project.dependencies)

function notBuildLibrary(library){
  return !(/^@babel/.test(library))
}
module.exports = {
  mode: 'development',
  entry: {
    vendors: vendors.filter(notBuildLibrary),
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public', 'manifest.json'),
      name: '[name]',
    })
  ]
}
