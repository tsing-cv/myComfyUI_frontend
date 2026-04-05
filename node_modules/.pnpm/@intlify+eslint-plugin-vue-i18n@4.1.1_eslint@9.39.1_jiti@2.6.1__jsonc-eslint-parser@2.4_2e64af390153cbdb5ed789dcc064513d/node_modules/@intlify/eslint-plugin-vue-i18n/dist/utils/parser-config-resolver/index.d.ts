import type { AST as VAST } from 'vue-eslint-parser';
export type ParseResult = Pick<VAST.ESLintExtendedProgram, 'ast' | 'visitorKeys'> | null;
export type Parser = (filePath: string) => ParseResult;
export declare function buildParserFromConfig(cwd: string): Parser;
