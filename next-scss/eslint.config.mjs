import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const typescriptEslintRules = {
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
  ],
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: { attributes: false },
    },
  ],
};

const eslintConfig = defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  ...nextVitals,
  ...nextTs,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: typescriptEslintRules,
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'],
            ['^react$', '^react-dom$', '^next(/.*)?$'],
            ['^@?\\w'],
            ['^@/shared/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/entities/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/features/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/widgets/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/pagesLayer/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/appLayer/(?!.*\\.module\\.(?:css|scss)$).+$'],
            ['^@/(?!.*\\.module\\.(?:css|scss)$).+'],
            ['^\\.'],
            ['^.+\\.module\\.(?:css|scss)$'],
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  prettierRecommended,
]);

export default eslintConfig;
