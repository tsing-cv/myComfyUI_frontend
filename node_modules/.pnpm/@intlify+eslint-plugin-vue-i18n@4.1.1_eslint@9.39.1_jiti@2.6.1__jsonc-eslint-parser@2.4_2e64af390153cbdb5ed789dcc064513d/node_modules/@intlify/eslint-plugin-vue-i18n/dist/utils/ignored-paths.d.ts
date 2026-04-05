import type { Ignore } from 'ignore';
import type { Path } from 'path-scurry';
export declare class IgnoredPaths {
    cache: {
        [key: string]: string[] | undefined;
    };
    defaultPatterns: string[];
    ignoreFileDir: string;
    options: {
        dotfiles: boolean;
        cwd: string;
        patterns?: string[];
        ignore?: boolean;
        ignorePath?: string;
        ignorePattern?: string;
    };
    private _baseDir;
    ig: {
        custom: Ignore & {
            ignoreFiles: string[];
        };
        default: Ignore & {
            ignoreFiles: string[];
        };
    };
    constructor(providedOptions: {
        dotfiles?: boolean | undefined;
        cwd?: string | undefined;
        patterns?: string[];
        ignore?: boolean;
        ignorePath?: string;
        ignorePattern?: string;
    });
    addPatternRelativeToCwd(ig: Ignore, pattern: string): void;
    addPatternRelativeToIgnoreFile(ig: Ignore, pattern: string): void;
    getBaseDir(): string;
    readIgnoreFile(filePath: string): string[];
    addIgnoreFile(ig: Ignore & {
        ignoreFiles: string[];
    }, filePath: string): void;
    contains(filepath: string, category?: 'custom' | 'default'): boolean;
    getIgnoredFoldersGlobChecker(): (absolutePath: Path) => boolean;
}
