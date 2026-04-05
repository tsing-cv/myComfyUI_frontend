import { Visitor } from 'oxc-parser';
import stripJsonComments from 'strip-json-comments';
import { extname, isInternal } from "../util/path.js";
import { parseFile } from "./visitors/helpers.js";
const isStringLiteral = (node) => node?.type === 'StringLiteral' || (node?.type === 'Literal' && typeof node.value === 'string');
const getStringValue = (node) => (isStringLiteral(node) ? node.value : undefined);
export const getImportMap = (program) => {
    const importMap = new Map();
    for (const node of program.body ?? []) {
        if (node.type === 'ImportDeclaration') {
            const importPath = getStringValue(node.source);
            if (!importPath)
                continue;
            for (const spec of node.specifiers ?? []) {
                if (spec.type === 'ImportDefaultSpecifier' && spec.local?.name) {
                    importMap.set(spec.local.name, importPath);
                }
                else if (spec.type === 'ImportSpecifier' && spec.local?.name) {
                    importMap.set(spec.local.name, importPath);
                }
            }
        }
        if (node.type === 'VariableDeclaration') {
            for (const decl of node.declarations ?? []) {
                if (decl.init?.type === 'CallExpression' &&
                    decl.init.callee?.type === 'Identifier' &&
                    decl.init.callee.name === 'require' &&
                    isStringLiteral(decl.init.arguments?.[0]) &&
                    decl.id?.type === 'Identifier') {
                    importMap.set(decl.id.name, decl.init.arguments[0].value);
                }
            }
        }
    }
    return importMap;
};
export const getDefaultImportName = (importMap, specifier) => {
    for (const [name, path] of importMap) {
        if (path === specifier)
            return name;
    }
};
export const getPropertyValues = (node, propertyName) => {
    const values = new Set();
    if (node?.type !== 'ObjectExpression')
        return values;
    for (const prop of node.properties ?? []) {
        if (prop.type !== 'Property')
            continue;
        const name = prop.key?.name ?? prop.key?.value;
        if (name !== propertyName)
            continue;
        const init = prop.value;
        if (isStringLiteral(init)) {
            values.add(init.value);
        }
        else if (init?.type === 'ArrayExpression') {
            for (const el of init.elements ?? []) {
                if (isStringLiteral(el))
                    values.add(el.value);
            }
        }
        else if (init?.type === 'ObjectExpression') {
            for (const p of init.properties ?? []) {
                if (p.type === 'Property' && isStringLiteral(p.value)) {
                    values.add(p.value.value);
                }
            }
        }
    }
    return values;
};
export const collectPropertyValues = (program, propertyName) => {
    const values = new Set();
    const visitor = new Visitor({
        ObjectExpression(node) {
            for (const v of getPropertyValues(node, propertyName))
                values.add(v);
        },
    });
    visitor.visit(program);
    return values;
};
export const findCallArg = (program, fnName) => {
    let result;
    const visitor = new Visitor({
        CallExpression(node) {
            if (result)
                return;
            if (node.callee?.type === 'Identifier' && node.callee.name === fnName) {
                const arg = node.arguments?.[0];
                if (arg?.type === 'ObjectExpression')
                    result = arg;
            }
        },
    });
    visitor.visit(program);
    return result;
};
export const findProperty = (node, name) => {
    if (node?.type !== 'ObjectExpression')
        return;
    for (const prop of node.properties ?? []) {
        if (prop.type === 'Property' && (prop.key?.name === name || prop.key?.value === name)) {
            return prop.value;
        }
    }
};
export const getStringValues = (node) => {
    const values = new Set();
    if (node?.type !== 'ArrayExpression')
        return values;
    for (const el of node.elements ?? []) {
        if (isStringLiteral(el)) {
            values.add(el.value);
        }
        else if (el?.type === 'ArrayExpression' && isStringLiteral(el.elements?.[0])) {
            values.add(el.elements[0].value);
        }
    }
    return values;
};
export const isExternalReExportsOnly = (result) => {
    const mod = result.module;
    if (mod.staticExports.length === 0)
        return false;
    for (const se of mod.staticExports) {
        for (const entry of se.entries) {
            if (!entry.moduleRequest)
                return false;
            if (isInternal(entry.moduleRequest.value))
                return false;
        }
    }
    if (mod.staticImports.length > 0)
        return false;
    return true;
};
export const hasImportSpecifier = (program, modulePath, specifierName) => {
    for (const node of program.body ?? []) {
        if (node.type !== 'ImportDeclaration' || getStringValue(node.source) !== modulePath)
            continue;
        for (const spec of node.specifiers ?? []) {
            if (spec.type === 'ImportSpecifier') {
                const imported = spec.imported?.name ?? spec.local?.name;
                if (imported === specifierName)
                    return true;
            }
        }
    }
    return false;
};
const collectJsonStringLiterals = (obj, literals) => {
    if (typeof obj === 'string') {
        literals.add(obj);
    }
    else if (Array.isArray(obj)) {
        for (const item of obj)
            collectJsonStringLiterals(item, literals);
    }
    else if (obj && typeof obj === 'object') {
        for (const val of Object.values(obj))
            collectJsonStringLiterals(val, literals);
    }
};
export const collectStringLiterals = (sourceText, filePath) => {
    const literals = new Set();
    try {
        const ext = extname(filePath);
        if (ext === '.json' || ext === '.jsonc' || ext === '.json5') {
            collectJsonStringLiterals(JSON.parse(stripJsonComments(sourceText, { trailingCommas: true })), literals);
            return literals;
        }
        const result = parseFile(filePath, sourceText);
        const visitor = new Visitor({
            Literal(node) {
                if (typeof node.value === 'string')
                    literals.add(node.value);
            },
        });
        visitor.visit(result.program);
    }
    catch { }
    return literals;
};
