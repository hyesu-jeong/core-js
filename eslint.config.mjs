import globals from 'globals';
import pluginJs from '@eslint/js';

const type = {
  isString: true,
  isObject: true,
  isArray: true,
  isNumber: true,
  isSymbol: true,
  isBigInt: true,
  isFunction: true,
  isMath: true,
  isUndefined: true,
  isNull: true,
  getNode: true,
  getNOdes: true,
  insertLast: true,
  attr: true,
  css: true,
  bindEvent: true,
  addClass: true,
  removeClass: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...ignore,
      },
    },

    rules: {
      'no-unused-vars': 'warn',
    },
  },
];