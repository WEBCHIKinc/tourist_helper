module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'import',
    'editorconfig',
    'react'
  ],
  rules: {
    'no-new-object': 1,
    'quote-props': [
      2,
      'as-needed',
      {
        'keywords': true,
        'unnecessary': false
      }
    ],
    'no-array-constructor': 1,
    'quotes': [
      1,
      'single',
      'avoid-escape'
    ],
    'no-shadow-restricted-names': 1,
    'one-var': 0,
    'vars-on-top': 0,
    'eqeqeq': 1,
    'no-use-before-define': 0,
    'no-unused-vars': [
      1,
      {
        'vars': 'all',
        'args': 'after-used'
      }
    ],
    'curly': 0,
    'no-shadow': 0,
    'no-mixed-spaces-and-tabs': 1,
    'space-before-blocks': [
      1,
      'always'
    ],
    'no-multi-spaces': [
      2,
      {
        'exceptions': {
          'ImportDeclaration': true,
          'Property': true
        }
      }
    ],
    'space-infix-ops': 1,
    'keyword-spacing': [
      1,
      {
        'before': true,
        'after': true,
        'overrides': {}
      }
    ],
    'no-trailing-spaces': 1,
    'comma-style': [
      1,
      'last'
    ],
    'comma-dangle': [
      1,
      'never'
    ],
    'semi': [
      1,
      'always'
    ],
    'camelcase': 1,
    'new-cap': 'off',
    'react/display-name': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 2,
    //"react/wrap-multilines": 2,
    'func-names': 0,
    'no-debugger': 1,
    'no-alert': 2,
    'editorconfig/charset': 'error',
    'editorconfig/eol-last': 'error',
    'editorconfig/indent': 'error',
    'editorconfig/linebreak-style': 'error',
    'editorconfig/no-trailing-spaces': 'error'
  }
};
