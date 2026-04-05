import type { RuleContext } from '../../types';
import type { AST as JSONAST } from 'jsonc-eslint-parser';
import type { AST as YAMLAST } from 'yaml-eslint-parser';
export declare const NodeTypes: {
    readonly Resource: 0;
    readonly Plural: 1;
    readonly Message: 2;
    readonly Text: 3;
    readonly Named: 4;
    readonly List: 5;
    readonly Linked: 6;
    readonly LinkedKey: 7;
    readonly LinkedModifier: 8;
    readonly Literal: 9;
};
export type MessageSyntaxVersions = {
    v9: boolean;
    v10: boolean;
    v11: boolean;
    isNotSet: boolean;
    reportIfMissingSetting: () => boolean;
};
export declare function getMessageSyntaxVersions(context: RuleContext): MessageSyntaxVersions;
export declare function getReportIndex(node: JSONAST.JSONNode | YAMLAST.YAMLNode, stringOffset: number): number | null;
export declare function getJSONStringOffset(code: string, stringOffset: number): number;
export declare function getYAMLSingleQuotedStringOffset(code: string, stringOffset: number): number;
export declare function getYAMLDoubleQuotedStringOffset(code: string, stringOffset: number): number;
export declare function getYAMLPlainStringOffset(code: string, stringOffset: number): number;
