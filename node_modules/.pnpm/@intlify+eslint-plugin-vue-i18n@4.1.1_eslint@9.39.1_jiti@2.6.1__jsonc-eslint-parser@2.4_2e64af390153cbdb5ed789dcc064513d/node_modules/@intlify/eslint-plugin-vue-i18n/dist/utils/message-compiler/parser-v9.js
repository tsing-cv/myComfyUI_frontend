"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const utils_1 = require("./utils");
const parser_1 = require("./parser");
const traverser_1 = require("./traverser");
function parse(code) {
    const { ast, errors } = (0, parser_1.parse)(code);
    (0, traverser_1.traverseNode)(ast, node => {
        if (node.type === utils_1.NodeTypes.Message) {
            transformModuloNamedNode(node.items);
        }
    });
    return {
        ast,
        errors
    };
    function transformModuloNamedNode(nodes) {
        var _a;
        for (let index = nodes.length - 1; index >= 1; index--) {
            const node = nodes[index];
            if (node.type !== utils_1.NodeTypes.Named ||
                code[node.loc.start.offset - 1] !== '%')
                continue;
            const prev = nodes[index - 1];
            if (prev.type !== utils_1.NodeTypes.Text || !((_a = prev.value) === null || _a === void 0 ? void 0 : _a.endsWith('%')))
                continue;
            node.modulo = true;
            prev.loc.end.offset -= 1;
            prev.loc.end.column -= 1;
            prev.end -= 1;
            prev.value = prev.value.slice(0, -1);
            if (prev.start === prev.end) {
                nodes.splice(index - 1, 1);
                index--;
            }
        }
    }
}
exports.parse = parse;
