// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jest: jestPlugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      }
    }
  },
  {
    rules: {
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        "no-console": "off",
        "no-multi-spaces": "error",
        "no-unused-vars": "warn",
        "no-undef": "error",
        "no-var": "error",
        "prefer-const": "error",
        "new-cap": ["error", {
            capIsNew: false
        }],
        "no-redeclare": "error",
        "no-use-before-define": "error",
        "space-in-parens": ["error"],
        "space-infix-ops": "error",
        "object-curly-spacing": ["error", "always"],
        "comma-spacing": "error",
        "space-before-function-paren": ["error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
        }],
        "keyword-spacing": ["error", {
            before: true,
            after: true,
        }],
        "array-bracket-spacing": "error",
        eqeqeq: ["error", "always"],
        indent: ["error", 2, {
        SwitchCase: 1,
            ignoreComments: true,
        }],
        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        semi: ["error", "always"],
            
        }
    },
    {
      ignores: ['**/build/**', '**/dist/**', 'eslint.config.mjs'],
    },
    {
      // disable type-aware linting on JS files
      files: ['**/*.js'],
      ...tseslint.configs.disableTypeChecked
    },
    {
      // enable jest rules on test files
      files: ['test/**'],
      ...jestPlugin.configs['flat/recommended']
    },
  );