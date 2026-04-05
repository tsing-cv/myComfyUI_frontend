import { tryOnScopeDispose } from "@vueuse/shared";
import { customRef, nextTick, toValue, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

//#region useRouteHash/index.ts
let _hash;
/* @__NO_SIDE_EFFECTS__ */
function useRouteHash(defaultValue, { mode = "replace", route = useRoute(), router = useRouter() } = {}) {
	_hash = route.hash;
	tryOnScopeDispose(() => {
		_hash = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return _hash || toValue(defaultValue);
			},
			set(v) {
				if (v === _hash) return;
				_hash = v === null ? void 0 : v;
				trigger();
				nextTick(() => {
					const { params, query } = route;
					router[toValue(mode)]({
						params,
						query,
						hash: _hash
					});
				});
			}
		};
	});
	watch(() => route.hash, () => {
		if (route.hash === _hash) return;
		_hash = route.hash;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}

//#endregion
//#region useRouteParams/index.ts
const _queue$1 = /* @__PURE__ */ new WeakMap();
function useRouteParams(name, defaultValue, options = {}) {
	const { mode = "replace", route = useRoute(), router = useRouter(), transform } = options;
	let transformGet = (value) => value;
	let transformSet = (value) => value;
	if (typeof transform === "function") transformGet = transform;
	else if (transform) {
		if (transform.get) transformGet = transform.get;
		if (transform.set) transformSet = transform.set;
	}
	if (!_queue$1.has(router)) _queue$1.set(router, /* @__PURE__ */ new Map());
	const _paramsQueue = _queue$1.get(router);
	let param = route.params[name];
	tryOnScopeDispose(() => {
		param = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return transformGet(param !== void 0 && param !== "" ? param : toValue(defaultValue));
			},
			set(v) {
				v = transformSet(v);
				if (param === v) return;
				param = v === toValue(defaultValue) || v === null ? void 0 : v;
				_paramsQueue.set(name, v === toValue(defaultValue) || v === null ? void 0 : v);
				trigger();
				nextTick(() => {
					if (_paramsQueue.size === 0) return;
					const newParams = Object.fromEntries(_paramsQueue.entries());
					_paramsQueue.clear();
					const { params, query, hash } = route;
					router[toValue(mode)]({
						params: {
							...params,
							...newParams
						},
						query,
						hash
					});
				});
			}
		};
	});
	watch(() => route.params[name], (v) => {
		if (param === transformGet(v)) return;
		param = v;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}

//#endregion
//#region useRouteQuery/index.ts
const _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
	const { mode = "replace", route = useRoute(), router = useRouter(), transform } = options;
	let transformGet = (value) => value;
	let transformSet = (value) => value;
	if (typeof transform === "function") transformGet = transform;
	else if (transform) {
		if (transform.get) transformGet = transform.get;
		if (transform.set) transformSet = transform.set;
	}
	if (!_queue.has(router)) _queue.set(router, /* @__PURE__ */ new Map());
	const _queriesQueue = _queue.get(router);
	let query = route.query[name];
	tryOnScopeDispose(() => {
		query = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return transformGet(query !== void 0 ? query : toValue(defaultValue));
			},
			set(v) {
				v = transformSet(v);
				if (query === v) return;
				query = v === toValue(defaultValue) ? void 0 : v;
				_queriesQueue.set(name, v === toValue(defaultValue) ? void 0 : v);
				trigger();
				nextTick(() => {
					if (_queriesQueue.size === 0) return;
					const newQueries = Object.fromEntries(_queriesQueue.entries());
					_queriesQueue.clear();
					const { params, query: query$1, hash } = route;
					router[toValue(mode)]({
						params,
						query: {
							...query$1,
							...newQueries
						},
						hash
					});
				});
			}
		};
	});
	watch(() => route.query[name], (v) => {
		if (query === transformGet(v)) return;
		query = v;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}

//#endregion
export { useRouteHash, useRouteParams, useRouteQuery };