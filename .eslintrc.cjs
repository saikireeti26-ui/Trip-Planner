module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  globals: { __dirname: 'readonly', module: 'writable', require: 'readonly' },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  'react/jsx-no-target-blank': 'off',
  'react-refresh/only-export-components': 'off'
  },
  overrides: [
    {
      files: ['tailwind.config.js', 'vite.config.js'],
      env: { node: true, es2021: true },
      parserOptions: { sourceType: 'module', ecmaVersion: 'latest' }
    }
  ]
}
