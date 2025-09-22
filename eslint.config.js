import js from '@eslint/js';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import pluginUnicorn from 'eslint-plugin-unicorn';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  [
    globalIgnores(['dist', 'storybook-static']),
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true
        }
      },
      extends: [
        js.configs.recommended,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        reactRefresh.configs.vite,
        reactHooks.configs['recommended-latest']
      ],
      plugins: {
        unicorn: pluginUnicorn
      },
      rules: {
        'no-duplicate-imports': ['error'],
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
        'no-restricted-syntax': [
          'error',
          {
            selector: "ImportDeclaration[source.value='react'] > ImportDefaultSpecifier",
            message: 'React import is unnecessary since version 17'
          }
        ]
      }
    }
  ],
  ...storybook.configs['flat/recommended'],
  pluginPrettierRecommended
);
