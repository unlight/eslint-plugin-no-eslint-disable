import { Rule } from 'eslint';
import type * as ESTree from 'estree';

const disableRegex = /eslint-disable(?:-next-line|-line)?/;

function create(context: Rule.RuleContext): Rule.RuleListener {
  const comments = context.sourceCode.getAllComments();

  for (const comment of comments) {
    const reportDescriptor = match(comment);
    if (reportDescriptor) {
      context.report(reportDescriptor);
    }
  }

  return {};
}

function match(comment: ESTree.Comment): Rule.ReportDescriptor | undefined {
  if (disableRegex.test(comment.value)) {
    const { start } = comment.loc || {};
    const data: Record<string, string> = {
      column: String(start?.column),
      line: String(start?.line),
    };

    return { data, loc: { column: 0, line: 0 }, messageId: 'message' };
  }
}

export const noEslintDisable: Rule.RuleModule = {
  create,
  meta: {
    docs: {
      description: 'Disallow disable rules by `eslint-disable` comment',
    },
    messages: {
      message:
        'Disabling rules by comments is not allowed at line {{line}}:{{column}}',
    },
  },
};
