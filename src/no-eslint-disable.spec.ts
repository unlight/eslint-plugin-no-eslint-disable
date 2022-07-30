import { RuleTester } from 'eslint';

import { noEslintDisable } from './no-eslint-disable';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {},
  },
});

ruleTester.run('no-eslint-disable', noEslintDisable, {
  invalid: [
    {
      code: `var x = 1; // eslint-disable-line no-var`,
      errors: [{ messageId: 'message' }],
    },
    {
      code: `// eslint-disable-next-line`,
      errors: [{ messageId: 'message' }],
    },
    {
      code: `/* eslint-disable */`,
      errors: [{ messageId: 'message' }],
    },
  ],
  valid: [
    {
      code: '(empty)',
    },
  ],
});
