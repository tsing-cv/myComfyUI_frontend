export declare function resolveFileGlobPatterns(patterns: string[], options: {
    cwd?: string;
    extensions?: string[];
    globInputPaths?: boolean;
}): string[];
export declare function listFilesToProcess(globPatterns: string[], providedOptions: {
    cwd?: string;
    extensions?: string[];
    globInputPaths?: boolean;
    ignore?: boolean;
    dotfiles?: boolean;
}): {
    filename: string;
    ignored: boolean;
}[];
