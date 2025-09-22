/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 120,
  tabWidth: 2,
  tailwindStylesheet: './src/style/global.css',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cva'],
  importOrder: ['^react$', '<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '', '^[.]', '^(?!.*[.]css$)[./].*$', '.css$'],
  importOrderTypeScriptVersion: '5.8.3'
};
