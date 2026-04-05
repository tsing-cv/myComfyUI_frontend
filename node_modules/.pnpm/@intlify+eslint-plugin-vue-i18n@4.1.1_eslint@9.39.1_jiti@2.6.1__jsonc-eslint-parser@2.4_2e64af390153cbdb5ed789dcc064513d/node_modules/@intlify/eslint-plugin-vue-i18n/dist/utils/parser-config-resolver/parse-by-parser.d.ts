import type { Linter } from 'eslint';
import type { ParseResult } from '.';
export declare function parseByParser(filePath: string, parserDefine: Linter.ParserModule | string | undefined, parserOptions: unknown): ParseResult;
