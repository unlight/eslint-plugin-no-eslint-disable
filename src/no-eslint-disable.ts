import * as ts from 'typescript';
import { Rule, AST } from 'eslint';
import * as ESTree from 'estree';

const disableRegex = /eslint-disable(-next-line|-line)?/;

function create(context: Rule.RuleContext): Rule.RuleListener {

    const comments = context.getSourceCode().getAllComments();
    comments.forEach(comment => {
        const reportDescriptor = match(comment);
        if (reportDescriptor) {
            context.report(reportDescriptor);
        }
    });

    return {};
}

function match(comment: ESTree.Comment): any {
    const match = disableRegex.exec(comment.value);
    if (match) {
        const [matched] = match;
        return {
            messageId: 'message',
            loc: {
                line: 0,
                column: 0,
            },
            data: comment.loc.start,
        };
    }
}

export const noEslintDisable: Rule.RuleModule = {
    create,
    meta: {
        docs: {
            description: 'Disallow disable rules by `eslint-disable` comment',
        },
        messages: {
            message: 'Disabling rules by comments is not allowed at line {{line}}:{{column}}'
        }
    },
};
