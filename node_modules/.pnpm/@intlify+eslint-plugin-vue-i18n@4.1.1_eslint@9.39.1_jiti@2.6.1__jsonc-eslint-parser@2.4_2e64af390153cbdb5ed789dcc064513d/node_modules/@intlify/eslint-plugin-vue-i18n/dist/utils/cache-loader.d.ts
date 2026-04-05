export type LoadData<A extends any[], R> = (...args: A) => R;
export declare class CacheLoader<A extends any[], R> {
    private loader;
    private timeout;
    private _cacheTime;
    private _cacheKey;
    private _cache;
    constructor(loader: LoadData<A, R>, timeout?: number | (() => number));
    get(...args: A): R;
}
