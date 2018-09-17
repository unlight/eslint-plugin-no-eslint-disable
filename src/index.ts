import { noEslintDisable } from './no-eslint-disable';
import { Rule } from 'eslint';

type RuleDict = { [id: string]: Rule.RuleModule | ((context: Rule.RuleContext) => Rule.RuleListener) };

export const rules: RuleDict = {
    'no-eslint-disable': noEslintDisable,
};
