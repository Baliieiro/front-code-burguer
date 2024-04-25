module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['prettier','react-refresh','eslint-plugin-import-helpers',"react-hooks"],
  rules: {
    "prettier/prettier":[
      "error",
      {
      "endOfLine": "auto"
      }
      ],
    "react-hooks/rules-of-hooks":'error',
    "react-hooks/exhaustive-deps":'warn',
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
          newlinesBetween: 'always',
          groups: [
              'module',
              '/^@shared/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
  ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],    
  },
}
