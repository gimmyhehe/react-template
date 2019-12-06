module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": [
        "error",
        2,
        { "SwitchCase": 1 }
    ],
    "linebreak-style": [
        "off", "windows"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "never"
    ]
  },
};
