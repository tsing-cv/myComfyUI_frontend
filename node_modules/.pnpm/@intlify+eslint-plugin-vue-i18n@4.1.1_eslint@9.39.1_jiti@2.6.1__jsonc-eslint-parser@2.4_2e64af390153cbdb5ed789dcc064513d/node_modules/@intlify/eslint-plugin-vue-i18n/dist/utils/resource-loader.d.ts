export type LoadResource<R> = (filename: string) => R;
export declare class ResourceLoader<R> {
    private filename;
    private loader;
    private _resource;
    private _mtimeLoader;
    private _mtimeMs;
    constructor(filename: string, loader: LoadResource<R>, mtimeCheckTimeout?: number | (() => number));
    getResource(): R;
}
