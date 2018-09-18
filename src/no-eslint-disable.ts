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

function match(comment: ESTree.Comment): Rule.ReportDescriptor | undefined {
    if (disableRegex.test(comment.value)) {
        return {
            messageId: 'message',
            data: <any>comment.loc.start, // eslint-disable-line tslint/config
            loc: {
                line: 0,
                column: 0,
            },
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
