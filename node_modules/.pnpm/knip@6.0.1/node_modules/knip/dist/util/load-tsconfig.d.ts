import type { CompilerOptions } from '../types/project.ts';
export declare const loadTSConfig: (tsConfigFilePath: string) => Promise<{
    isFile: boolean;
    compilerOptions: CompilerOptions;
    fileNames: string[];
}>;
