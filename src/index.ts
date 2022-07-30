import { Rule } from 'eslint';

import { noEslintDisable } from './no-eslint-disable';

type RuleDict = {
  [id: string]: Rule.RuleModule | ((context: Rule.RuleContext) => Rule.RuleListener);
};

export const rules: RuleDict = {
  'no-eslint-disable': noEslintDisable,
};
