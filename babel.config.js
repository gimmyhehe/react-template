//babel的配置文件 效果等于babel里面的option
const presets = [
  [
    '@babel/preset-env',
    {
      'useBuiltIns': 'entry'
    }
  ],
  ['@babel/preset-react']
]

const plugins = [
  ['@babel/plugin-transform-runtime'],
  ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es','style': 'css'}, 'ant'],
]

module.exports = { presets,plugins }
