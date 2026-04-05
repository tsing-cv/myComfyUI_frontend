(function(exports, __vueuse_shared, vue, vue_router) {

//#region rolldown:runtime
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
__vueuse_shared = __toESM(__vueuse_shared);
vue = __toESM(vue);
vue_router = __toESM(vue_router);

//#region useRouteHash/index.ts
	let _hash;
	/* @__NO_SIDE_EFFECTS__ */
	function useRouteHash(defaultValue, { mode = "replace", route = (0, vue_router.useRoute)(), router = (0, vue_router.useRouter)() } = {}) {
		_hash = route.hash;
		(0, __vueuse_shared.tryOnScopeDispose)(() => {
			_hash = void 0;
		});
		let _trigger;
		const proxy = (0, vue.customRef)((track, trigger) => {
			_trigger = trigger;
			return {
				get() {
					track();
					return _hash || (0, vue.toValue)(defaultValue);
				},
				set(v) {
					if (v === _hash) return;
					_hash = v === null ? void 0 : v;
					trigger();
					(0, vue.nextTick)(() => {
						const { params, query } = route;
						router[(0, vue.toValue)(mode)]({
							params,
							query,
							hash: _hash
						});
					});
				}
			};
		});
		(0, vue.watch)(() => route.hash, () => {
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
		const { mode = "replace", route = (0, vue_router.useRoute)(), router = (0, vue_router.useRouter)(), transform } = options;
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
		(0, __vueuse_shared.tryOnScopeDispose)(() => {
			param = void 0;
		});
		let _trigger;
		const proxy = (0, vue.customRef)((track, trigger) => {
			_trigger = trigger;
			return {
				get() {
					track();
					return transformGet(param !== void 0 && param !== "" ? param : (0, vue.toValue)(defaultValue));
				},
				set(v) {
					v = transformSet(v);
					if (param === v) return;
					param = v === (0, vue.toValue)(defaultValue) || v === null ? void 0 : v;
					_paramsQueue.set(name, v === (0, vue.toValue)(defaultValue) || v === null ? void 0 : v);
					trigger();
					(0, vue.nextTick)(() => {
						if (_paramsQueue.size === 0) return;
						const newParams = Object.fromEntries(_paramsQueue.entries());
						_paramsQueue.clear();
						const { params, query, hash } = route;
						router[(0, vue.toValue)(mode)]({
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
		(0, vue.watch)(() => route.params[name], (v) => {
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
		const { mode = "replace", route = (0, vue_router.useRoute)(), router = (0, vue_router.useRouter)(), transform } = options;
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
		(0, __vueuse_shared.tryOnScopeDispose)(() => {
			query = void 0;
		});
		let _trigger;
		const proxy = (0, vue.customRef)((track, trigger) => {
			_trigger = trigger;
			return {
				get() {
					track();
					return transformGet(query !== void 0 ? query : (0, vue.toValue)(defaultValue));
				},
				set(v) {
					v = transformSet(v);
					if (query === v) return;
					query = v === (0, vue.toValue)(defaultValue) ? void 0 : v;
					_queriesQueue.set(name, v === (0, vue.toValue)(defaultValue) ? void 0 : v);
					trigger();
					(0, vue.nextTick)(() => {
						if (_queriesQueue.size === 0) return;
						const newQueries = Object.fromEntries(_queriesQueue.entries());
						_queriesQueue.clear();
						const { params, query: query$1, hash } = route;
						router[(0, vue.toValue)(mode)]({
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
		(0, vue.watch)(() => route.query[name], (v) => {
			if (query === transformGet(v)) return;
			query = v;
			_trigger();
		}, { flush: "sync" });
		return proxy;
	}

//#endregion
exports.useRouteHash = useRouteHash;
exports.useRouteParams = useRouteParams;
exports.useRouteQuery = useRouteQuery;
})(this.VueUse = this.VueUse || {}, VueUse, Vue, VueRouter);