import type { RuleModule } from '../types';
import type { AST as JSONAST } from 'jsonc-eslint-parser';
import type { AST as YAMLAST } from 'yaml-eslint-parser';
import type { CustomBlockVisitorFactory } from '../types/vue-parser-services';
export type GetReportOffset = (offset: number) => number | null;
export type VerifyMessage = (message: string, reportNode: JSONAST.JSONStringLiteral | YAMLAST.YAMLScalar, getReportOffset: GetReportOffset) => void;
export declare function createRule(module: RuleModule): RuleModule;
export declare function defineCreateVisitorForJson(verifyMessage: VerifyMessage): CustomBlockVisitorFactory;
export declare function defineCreateVisitorForYaml(verifyMessage: VerifyMessage): CustomBlockVisitorFactory;
