import type { Program } from 'oxc-parser';
import { type Input } from '../../util/input.ts';
export declare const getReactBabelPlugins: (program: Program) => string[];
export declare const getIndexHtmlEntries: (rootDir: string) => Promise<Input[]>;
