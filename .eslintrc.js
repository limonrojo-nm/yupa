const _ = {
  ERROR: 'error',
  WARN: 'warn',
  OFF: 'off',
  NEVER:  'never',
  ALWAYS: 'always',
}

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['react', 'react-native', '@typescript-eslint', 'no-relative-import-paths'],
  rules: {
    'no-unused-vars': _.WARN,
    'comma-dangle': [_.ERROR, 'always-multiline'],
    'space-infix-ops': _.OFF,
    'space-before-function-paren': _.OFF,
    'prefer-arrow-callback': _.ERROR,
    'func-style': [_.ERROR, 'expression'],
    'arrow-spacing': _.OFF,
    'brace-style': _.OFF,
    'keyword-spacing': _.OFF,
    'space-before-blocks': _.OFF,
    'operator-linebreak': _.OFF,
    'no-multiple-empty-lines': _.ERROR,
    'no-trailing-spaces': _.ERROR,
    'semi': [_.ERROR, _.NEVER],
    'quotes': [_.ERROR, 'single'],
    'no-useless-constructor':_.OFF,
    'indent': ['error', 2],
    'camelcase': [_.OFF, { properties: _.ALWAYS }],
    'object-curly-spacing': [_.ERROR, _.ALWAYS],
    'max-len':[_.WARN, {
      'code': 160,
      'tabWidth': 2,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'react/react-in-jsx-scope': _.OFF,
    'react-hooks/exhaustive-deps': _.OFF,
    // '@next/next/no-html-link-for-pages': [_.OFF],
    'no-relative-import-paths/no-relative-import-paths': [
      _.ERROR,
      { 'allowSameFolder': true },
    ],
    // 'react-native/no-color-literals': _.OFF,
    '@typescript-eslint/array-type':  ['error', { 'default': 'generic' }],
    '@typescript-eslint/no-empty-interface': _.OFF,
    '@typescript-eslint/no-namespace': _.OFF,
    '@typescript-eslint/no-explicit-any': _.OFF,
    '@typescript-eslint/no-var-requires': _.OFF,
    '@typescript-eslint/ban-ts-comment': _.OFF,
    '@typescript-eslint/no-empty-function': _.OFF,
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': _.OFF,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
