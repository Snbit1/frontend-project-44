module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    indent: ['error', 2],
    'eol-last': ['error', 'always'],
  },
};
