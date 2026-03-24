import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const fsdImportGroups = [
  ['^react$', '^react-dom$', '^react/', '^react-dom/'],
  ['^next', '^next/'],
  ['^@?\\w'],
  ['^@/appLayer'],
  ['^@/shared/lib'],
  ['^@/shared/config', '^@/shared/constants'],
  ['^@/shared/hooks', '^@/shared/api'],
  ['^@/shared/ui'],
  ['^@/shared'],
  ['^@/entities'],
  ['^@/features'],
  ['^@/widgets'],
  ['^@/stores'],
  ['^@/pages'],
  ['^@/app/'],
  ['.*\\.(css|scss)$'],
  ['^@/types', '.*\\/types$'],
];

const jsxA11yRecommendedRules = jsxA11y.flatConfigs.recommended.rules;

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...jsxA11yRecommendedRules,
      'jsx-a11y/alt-text': [
        'error',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],

      'no-alert': 'warn',
      'prefer-const': 'warn',
      eqeqeq: ['error', 'always'],
      'max-params': ['warn', 4],
      'max-depth': ['warn', 4],
      'prefer-template': 'error',
      'max-lines': [
        'warn',
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'max-len': ['warn', { code: 130, ignoreStrings: true }],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: ['export'], next: '*' },
      ],

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
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],

      'prettier/prettier': 'error',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-sort-props': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
        },
      ],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-no-duplicate-props': 'error',

      'simple-import-sort/imports': ['warn', { groups: fsdImportGroups }],
      'simple-import-sort/exports': 'warn',
    },
  },
  eslintConfigPrettier,
]);
