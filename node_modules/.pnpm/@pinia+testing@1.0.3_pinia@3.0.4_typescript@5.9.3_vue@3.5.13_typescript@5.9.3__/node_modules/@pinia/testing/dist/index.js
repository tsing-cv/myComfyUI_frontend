"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createTestingPinia: () => createTestingPinia
});
module.exports = __toCommonJS(index_exports);

// src/testing.ts
var import_vue = require("vue");
var import_pinia = require("pinia");
function createTestingPinia({
  initialState = {},
  plugins = [],
  stubActions = true,
  stubPatch = false,
  stubReset = false,
  fakeApp = false,
  createSpy: _createSpy
} = {}) {
  const pinia = (0, import_pinia.createPinia)();
  pinia._p.push(({ store }) => {
    if (initialState[store.$id]) {
      mergeReactiveObjects(store.$state, initialState[store.$id]);
    }
  });
  plugins.forEach((plugin) => pinia._p.push(plugin));
  pinia._p.push(WritableComputed);
  const createSpy = _createSpy || // @ts-ignore
  typeof jest !== "undefined" && jest.fn || typeof vi !== "undefined" && vi.fn;
  if (!createSpy) {
    throw new Error(
      "[@pinia/testing]: You must configure the `createSpy` option. See https://pinia.vuejs.org/cookbook/testing.html#Specifying-the-createSpy-function"
    );
  } else if (typeof createSpy !== "function" || // When users pass vi.fn() instead of vi.fn
  // https://github.com/vuejs/pinia/issues/2896
  "mockReturnValue" in createSpy) {
    throw new Error(
      "[@pinia/testing]: Invalid `createSpy` option. See https://pinia.vuejs.org/cookbook/testing.html#Specifying-the-createSpy-function"
    );
  }
  pinia._p.push(({ store, options }) => {
    Object.keys(options.actions).forEach((action) => {
      if (action === "$reset") return;
      store[action] = shouldStubAction(stubActions, action, store) ? createSpy() : createSpy(store[action]);
    });
    store.$patch = stubPatch ? createSpy() : createSpy(store.$patch);
    store.$reset = stubReset ? createSpy() : createSpy(store.$reset);
  });
  if (fakeApp) {
    const app = (0, import_vue.createApp)({});
    app.use(pinia);
  }
  pinia._testing = true;
  (0, import_pinia.setActivePinia)(pinia);
  Object.defineProperty(pinia, "app", {
    configurable: true,
    enumerable: true,
    get() {
      return this._a;
    }
  });
  return pinia;
}
function mergeReactiveObjects(target, patchToApply) {
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key)) continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !(0, import_vue.isRef)(subPatch) && !(0, import_vue.isReactive)(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = //
      subPatch;
    }
  }
  return target;
}
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
function isComputed(v) {
  return !!v && (0, import_vue.isRef)(v) && "effect" in v;
}
function WritableComputed({ store }) {
  const rawStore = (0, import_vue.toRaw)(store);
  for (const key in rawStore) {
    const originalComputed = rawStore[key];
    if (isComputed(originalComputed)) {
      const originalFn = originalComputed.fn;
      const overriddenFn = () => (
        // @ts-expect-error: internal cached value
        originalComputed._value
      );
      rawStore[key] = (0, import_vue.computed)({
        get() {
          return originalComputed.value;
        },
        set(newValue) {
          if (newValue === void 0) {
            originalComputed.fn = originalFn;
            delete originalComputed._value;
            originalComputed._dirty = true;
          } else {
            originalComputed.fn = overriddenFn;
            originalComputed._value = newValue;
          }
          (0, import_vue.triggerRef)(originalComputed);
        }
      });
    }
  }
}
function shouldStubAction(stubActions, action, store) {
  if (typeof stubActions === "boolean") {
    return stubActions;
  } else if (Array.isArray(stubActions)) {
    return stubActions.includes(action);
  } else if (typeof stubActions === "function") {
    return stubActions(action, store);
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTestingPinia
});
