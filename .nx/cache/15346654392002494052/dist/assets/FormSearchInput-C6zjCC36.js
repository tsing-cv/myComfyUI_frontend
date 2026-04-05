import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, G as mergeModels, It as toValue, O as createBaseVNode, Pt as toRef, R as defineComponent, Rt as unref, U as inject, _ as vModelText, et as openBlock, j as createElementBlock, kt as ref, pt as watch, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { X as refDebounced } from "./vendor-vueuse--4MZqvDu.js";
import { t as cn } from "./src-ZLYFRbHY.js";
//#region src/composables/useTransformCompatOverlayProps.ts
var OverlayAppendToKey = Symbol("OverlayAppendTo");
/**
* Composable that provides props to make PrimeVue overlay components
* compatible with CSS-transformed parent elements.
*
* Vue nodes use CSS transforms for positioning/scaling. PrimeVue overlay
* components (Select, MultiSelect, TreeSelect, etc.) teleport to document
* body by default, breaking transform inheritance. This composable provides
* the necessary props to keep overlays within their component elements.
*
* @param overrides - Optional overrides for specific use cases
* @returns Computed props object to spread on PrimeVue overlay components
*
* @example
* ```vue
* <template>
*   <Select v-bind="overlayProps" />
* </template>
*
* <script setup>
* const overlayProps = useTransformCompatOverlayProps()
* <\/script>
* ```
*/
function useTransformCompatOverlayProps(overrides = {}) {
	const injectedAppendTo = inject(OverlayAppendToKey, void 0);
	return computed(() => ({
		appendTo: injectedAppendTo ?? "self",
		...overrides
	}));
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/FormSearchInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["placeholder", "autofocus"];
var _hoisted_2 = ["aria-label"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/FormSearchInput.vue
var FormSearchInput_default = /* @__PURE__ */ defineComponent({
	__name: "FormSearchInput",
	props: /* @__PURE__ */ mergeModels({
		searcher: {
			type: Function,
			default: async () => {}
		},
		updateKey: {},
		autofocus: {
			type: Boolean,
			default: false
		},
		class: {}
	}, {
		"modelValue": { default: "" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const searchQuery = useModel(__props, "modelValue");
		const isQuerying = ref(false);
		const debouncedSearchQuery = refDebounced(searchQuery, 250, { maxWait: 1e3 });
		watch(searchQuery, (value) => {
			isQuerying.value = value !== debouncedSearchQuery.value;
		});
		watch([debouncedSearchQuery, toRef(() => toValue(__props.updateKey))], (_, __, onCleanup) => {
			let isCleanup = false;
			let cleanupFn;
			onCleanup(() => {
				isCleanup = true;
				cleanupFn?.();
			});
			__props.searcher(debouncedSearchQuery.value, (cb) => cleanupFn = cb).catch((error) => {
				console.error("[SidePanelSearch] searcher failed", error);
			}).finally(() => {
				if (!isCleanup) isQuerying.value = false;
			});
		}, { immediate: true });
		function handleFocus(event) {
			const target = event.target;
			if (target instanceof HTMLInputElement) target.select();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("label", { class: normalizeClass(unref(cn)("group", "rounded-lg bg-component-node-widget-background transition-all duration-150", "flex flex-1 items-center", "border-0 text-base-foreground", "focus-within:ring focus-within:ring-component-node-widget-background-highlighted/80", __props.class)) }, [
				createBaseVNode("i", { class: normalizeClass(unref(cn)("ml-2 size-4 shrink-0 transition-colors duration-150", isQuerying.value ? "icon-[lucide--loader-circle] animate-spin" : "icon-[lucide--search]", searchQuery.value?.trim() !== "" ? "text-base-foreground" : "text-muted-foreground group-focus-within:text-base-foreground group-hover:text-base-foreground")) }, null, 2),
				withDirectives(createBaseVNode("input", {
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					type: "text",
					class: "mx-2 my-1.5 h-5 w-full min-w-0 border-0 bg-transparent ring-0 outline-0",
					placeholder: _ctx.$t("g.searchPlaceholder", { subject: "" }),
					autofocus: _ctx.autofocus,
					onFocus: handleFocus
				}, null, 40, _hoisted_1), [[vModelText, searchQuery.value]]),
				searchQuery.value.trim().length > 0 ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: "m-0 flex shrink-0 items-center justify-center border-0 bg-transparent p-0 pr-3 pl-1 text-muted-foreground ring-0 outline-0 transition-all duration-150 hover:scale-108 hover:text-base-foreground",
					"aria-label": _ctx.$t("g.clear"),
					onClick: _cache[1] || (_cache[1] = ($event) => searchQuery.value = "")
				}, [createBaseVNode("i", { class: normalizeClass(unref(cn)("icon-[lucide--delete] size-4 cursor-pointer")) }, null, 2)], 8, _hoisted_2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
export { OverlayAppendToKey as n, useTransformCompatOverlayProps as r, FormSearchInput_default as t };

//# sourceMappingURL=FormSearchInput-C6zjCC36.js.map