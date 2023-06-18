module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-useless-constructor': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    'class-methods-use-this': 'warn',
    'max-len': ['error', { code: 120 }],
  },
};
