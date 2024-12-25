import globals from 'globals';
import ESLint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jest from 'eslint-plugin-jest';

export default [
  ESLint.configs.recommended,
  {
    ignores: [ 'dist/', '*.json', 'eslint.config.mjs' ],
  },
  {
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node, ...globals.jest } 
    },
  },
  {
    files: [ '**/*.test.js' ],
    ...jest.configs[ 'flat/recommended' ],
    rules: {
      ...jest.configs[ 'flat/recommended' ].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: [ 'src/**/*.js' ],
    rules: {
      indent: [ 'error', 2 ],
      semi: [ 'error', 'always' ],
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-var': 'error',
    },
  },
  {
    files: [ '*.config.*' ],
    rules: {
      'no-underscore-dangle': [ 'off' ],
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    plugins: { '@stylistic/js': stylisticJs },
    rules: {
      'max-len': [
        'error', { code: 130 }
      ],
      quotes: [
        'error', 'single'
      ],
      'array-bracket-spacing': [
        'error', 'always'
      ],
      'array-bracket-newline': [
        'error', { 'multiline': true, 'minItems': 3 }
      ],
      'object-curly-spacing': [
        'error', 'always'
      ],
      'object-curly-newline': [
        'error', 
        {
          'ObjectExpression': { 
            'multiline': true, 'minProperties': 3 
          },
        }
      ],
      'no-multi-spaces': [
        'error',
        {
          exceptions: {
            'Property': false,
            'BinaryExpression': true,
            'VariableDeclarator': true,
            'ImportDeclaration': true
          }
        }
      ],
      'key-spacing': [
        'error', { 'mode': 'strict' }
      ],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': [
        'error', { max: 1, maxBOF: 1 }
      ],
    },
  },
];