import { RuleTester } from 'eslint';

import { noEslintDisable } from './no-eslint-disable';
import { describe, it } from 'vitest';

const ruleTester = new RuleTester();

it('no-eslint-disable', () => {
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
});
