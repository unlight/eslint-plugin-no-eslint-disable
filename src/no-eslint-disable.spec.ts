import { noEslintDisable } from './no-eslint-disable';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {},
    },
});

ruleTester.run('no-eslint-disable', noEslintDisable, {
    invalid: [
        {
            code: `var x = 1; // eslint-disable-line no-var`,
            errors: [
                { messageId: 'message' },
            ],
        },
        {
            code: `// eslint-disable-next-line`,
            errors: [
                { messageId: 'message' },
            ],
        },
        {
            code: `/* eslint-disable */`,
            errors: [
                { messageId: 'message' },
            ],
        },
    ],
    valid: [
        {
            code: '(empty)',
        }
    ],
});
