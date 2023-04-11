module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'jsx-a11y/alt-text': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }]
  }
};
