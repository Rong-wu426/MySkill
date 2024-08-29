module.exports = {
    parser: 'vue-eslint-parser',
    env: {
      node: true,
      jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      "vue/no-parsing-error": "off",
    }
  };