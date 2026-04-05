import * as vue0 from "vue";
import { MaybeRef, MaybeRefOrGetter, Ref } from "vue";
import { RouteParamValueRaw, useRoute, useRouter } from "vue-router";

//#region _types.d.ts
type RouteQueryValueRaw = RouteParamValueRaw | string[];
type RouteHashValueRaw = string | null | undefined;
interface ReactiveRouteOptions {
  /**
   * Mode to update the router query, ref is also acceptable
   *
   * @default 'replace'
   */
  mode?: MaybeRef<'replace' | 'push'>;
  /**
   * Route instance, use `useRoute()` if not given
   */
  route?: ReturnType<typeof useRoute>;
  /**
   * Router instance, use `useRouter()` if not given
   */
  router?: ReturnType<typeof useRouter>;
}
interface ReactiveRouteOptionsWithTransform<V, R> extends ReactiveRouteOptions {
  /**
   * Function to transform data before return, or an object with one or both functions:
   * `get` to transform data before returning, and `set` to transform data before setting
   */
  transform?: ((val: V) => R) | ({
    get?: (value: V) => R;
    set?: (value: R) => V;
  });
}
//#endregion
//#region useRouteHash/index.d.ts
declare function useRouteHash(defaultValue?: MaybeRefOrGetter<RouteHashValueRaw>, {
  mode,
  route,
  router
}?: ReactiveRouteOptions): vue0.Ref<RouteHashValueRaw, RouteHashValueRaw>;
//#endregion
//#region useRouteParams/index.d.ts
declare function useRouteParams(name: string): Ref<null | string | string[]>;
declare function useRouteParams<T extends RouteParamValueRaw = RouteParamValueRaw, K = T>(name: string, defaultValue?: MaybeRefOrGetter<T>, options?: ReactiveRouteOptionsWithTransform<T, K>): Ref<K>;
//#endregion
//#region useRouteQuery/index.d.ts
declare function useRouteQuery(name: string): Ref<undefined | null | string | string[]>;
declare function useRouteQuery<T extends RouteQueryValueRaw = RouteQueryValueRaw, K = T>(name: string, defaultValue?: MaybeRefOrGetter<T>, options?: ReactiveRouteOptionsWithTransform<T, K>): Ref<K>;
//#endregion
export { useRouteHash, useRouteParams, useRouteQuery };