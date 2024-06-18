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
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
        getNode: true,
        getNodes: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
