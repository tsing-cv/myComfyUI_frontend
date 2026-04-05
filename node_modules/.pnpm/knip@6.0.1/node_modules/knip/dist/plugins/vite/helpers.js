import { Visitor } from 'oxc-parser';
import { findProperty, getDefaultImportName, getImportMap, getStringValues } from "../../typescript/ast-helpers.js";
import { isFile, loadFile } from "../../util/fs.js";
import { toProductionEntry } from "../../util/input.js";
import { join } from "../../util/path.js";
export const getReactBabelPlugins = (program) => {
    const babelPlugins = [];
    const importMap = getImportMap(program);
    const reactPluginNames = new Set();
    for (const [importName, importPath] of importMap) {
        if (importPath.includes('@vitejs/plugin-react'))
            reactPluginNames.add(importName);
    }
    if (reactPluginNames.size === 0) {
        const defaultImportName = getDefaultImportName(importMap, '@vitejs/plugin-react');
        if (defaultImportName)
            reactPluginNames.add(defaultImportName);
        else
            reactPluginNames.add('react');
    }
    const visitor = new Visitor({
        CallExpression(node) {
            if (node.callee?.type !== 'Identifier' || node.callee.name !== 'defineConfig')
                return;
            const plugins = findProperty(node.arguments?.[0], 'plugins');
            if (plugins?.type !== 'ArrayExpression')
                return;
            for (const el of plugins.elements ?? []) {
                if (el?.type !== 'CallExpression' || el.callee?.type !== 'Identifier')
                    continue;
                if (!reactPluginNames.has(el.callee.name))
                    continue;
                const babelPluginsArray = findProperty(findProperty(el.arguments?.[0], 'babel'), 'plugins');
                for (const v of getStringValues(babelPluginsArray))
                    babelPlugins.push(v);
            }
        },
    });
    visitor.visit(program);
    return babelPlugins;
};
const moduleScriptPattern = /<script\b(?=[^>]*\btype\s*=\s*["']?module["']?)(?=[^>]*\bsrc\s*=\s*["']?([^"' >]+)["']?)[^>]*>/gi;
const normalizeModuleScriptSrc = (value) => value.trim().replace(/^\//, '');
const getModuleScriptSources = (html) => {
    const matches = html.matchAll(moduleScriptPattern);
    const sources = [];
    for (const match of matches) {
        const src = normalizeModuleScriptSrc(match[1]);
        if (src)
            sources.push(src);
    }
    return sources;
};
export const getIndexHtmlEntries = async (rootDir) => {
    const indexPath = join(rootDir, 'index.html');
    if (!isFile(indexPath))
        return [];
    const html = await loadFile(indexPath);
    const entries = getModuleScriptSources(html).map(src => join(rootDir, src));
    return entries.map(entry => toProductionEntry(entry));
};
