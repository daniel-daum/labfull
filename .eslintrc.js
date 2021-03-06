module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: false
  }
};