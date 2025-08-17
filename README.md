# eslint-plugin-no-eslint-disable

Disallow disable rules by `eslint-disable` comment.

## Install

```sh
npm i -D eslint-plugin-no-eslint-disable
```

```js
// eslint.config.js

import * as noEslintDisable from 'eslint-plugin-no-eslint-disable';

export default [
  {
    plugins: {
      'no-eslint-disable': noEslintDisable,
    },
    rules: {
      'no-eslint-disable/no-eslint-disable': 'error',
    },
  },
];
```

## Links

- https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
- https://github.com/coleturner/eslint-plugin-why
- https://github.com/edwardpayton/eslint-plugin-no-empty-disable

## License

[MIT License](https://opensource.org/licenses/MIT) (c) 2025
