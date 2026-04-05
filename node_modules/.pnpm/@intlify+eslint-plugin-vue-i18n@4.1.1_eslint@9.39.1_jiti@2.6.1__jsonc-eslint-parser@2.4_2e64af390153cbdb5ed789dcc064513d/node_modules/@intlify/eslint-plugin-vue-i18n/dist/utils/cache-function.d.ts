import type { LoadData } from './cache-loader';
export declare function defineCacheFunction<A extends any[], R>(fn: LoadData<A, R>): (...args: A) => R;
