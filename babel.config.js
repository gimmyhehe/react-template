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
  ['@babel/plugin-transform-runtime']
]

module.exports = { presets,plugins }
