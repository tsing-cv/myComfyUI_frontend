import { AST as VAST } from 'vue-eslint-parser';
import { ResourceLoader } from './resource-loader';
import type { RuleContext, VisitorKeys } from '../types';
export declare function collectKeysFromAST(node: VAST.ESLintProgram, visitorKeys?: VisitorKeys): string[];
declare class UsedKeysCache {
    private _targetFilesLoader;
    private _collectKeyResourcesFromFiles;
    constructor();
    collectKeysFromFiles(files: string[], extensions: string[], context: RuleContext): string[];
    _getKeyResources(context: RuleContext, files: string[], extensions: string[]): ResourceLoader<string[]>[];
}
export declare const usedKeysCache: UsedKeysCache;
export {};
