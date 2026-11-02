import js from '@eslint/js';
import jestDom from 'eslint-plugin-jest-dom';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['build']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, react.configs.flat.recommended, prettierRecommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'off'
    }
  },
  {
    files: ['src/tests/**'],
    extends: [jestDom.configs['flat/recommended'], testingLibrary.configs['flat/react']],
    languageOptions: {
      globals: globals.vitest
    },
    rules: {
      'testing-library/no-render-in-lifecycle': [
        'error',
        { allowTestingFrameworkSetupHook: 'beforeEach' }
      ]
    }
  }
]);
