import { FlatCompat } from '@eslint/eslintrc';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tailwind from 'eslint-plugin-tailwindcss';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierRecommended,
  ...tailwind.configs['flat/recommended'],
  ...compat.config({
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: false,
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            ['sibling', 'index'],
            'unknown',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: '__mocks__/**',
              group: 'unknown',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react/**'],
        },
      ],
    },
  }),
];

export default eslintConfig;
