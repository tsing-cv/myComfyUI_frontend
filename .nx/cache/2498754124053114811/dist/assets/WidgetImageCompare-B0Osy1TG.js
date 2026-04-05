import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, D as computed, F as createTextVNode, G as mergeModels, Ht as normalizeStyle, I as createVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref, pt as watch, rt as renderSlot, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { M as useMouseInElement } from "./vendor-vueuse--4MZqvDu.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
//#region src/renderer/extensions/vueNodes/widgets/components/BatchNavigation.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "flex items-center gap-1"
};
var _hoisted_2$1 = { class: "mr-1 text-muted-foreground" };
var _hoisted_3$1 = { "data-testid": "batch-counter" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/BatchNavigation.vue
var BatchNavigation_default = /* @__PURE__ */ defineComponent({
	__name: "BatchNavigation",
	props: /* @__PURE__ */ mergeModels({ count: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const index = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return _ctx.count > 1 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
				createBaseVNode("span", _hoisted_2$1, [renderSlot(_ctx.$slots, "label")]),
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "icon-sm",
					disabled: index.value === 0,
					"data-testid": "batch-prev",
					onClick: _cache[0] || (_cache[0] = ($event) => index.value--)
				}, {
					default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "icon-[lucide--chevron-left]" }, null, -1)])),
					_: 1
				}, 8, ["disabled"]),
				createBaseVNode("span", _hoisted_3$1, toDisplayString(_ctx.$t("batch.index", {
					current: index.value + 1,
					total: _ctx.count
				})), 1),
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "icon-sm",
					disabled: index.value === _ctx.count - 1,
					"data-testid": "batch-next",
					onClick: _cache[1] || (_cache[1] = ($event) => index.value++)
				}, {
					default: withCtx(() => _cache[3] || (_cache[3] = [createBaseVNode("i", { class: "icon-[lucide--chevron-right]" }, null, -1)])),
					_: 1
				}, 8, ["disabled"])
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetImageCompare.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-full min-h-32 flex-col overflow-hidden" };
var _hoisted_2 = {
	key: 0,
	class: "flex shrink-0 justify-between px-2 py-1 text-xs",
	"data-testid": "batch-nav"
};
var _hoisted_3 = { key: 0 };
var _hoisted_4 = ["src", "alt"];
var _hoisted_5 = ["src", "alt"];
var _hoisted_6 = {
	key: 2,
	class: "flex min-h-0 flex-1 items-center justify-center"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetImageCompare.vue
var WidgetImageCompare_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetImageCompare",
	props: { widget: {} },
	setup(__props) {
		const props = __props;
		const containerRef = ref(null);
		const sliderPosition = ref(50);
		const beforeIndex = ref(0);
		const afterIndex = ref(0);
		const { elementX, elementWidth, isOutside } = useMouseInElement(containerRef);
		watch([
			elementX,
			elementWidth,
			isOutside
		], ([x, width, outside]) => {
			if (!outside && width > 0) sliderPosition.value = Math.max(0, Math.min(100, x / width * 100));
		});
		function isSingleImage(value) {
			return typeof value === "string";
		}
		const parsedValue = computed(() => {
			const value = props.widget.value;
			return isSingleImage(value) ? null : value;
		});
		const beforeBatchCount = computed(() => parsedValue.value?.beforeImages?.length ?? 0);
		const afterBatchCount = computed(() => parsedValue.value?.afterImages?.length ?? 0);
		const showBatchNav = computed(() => beforeBatchCount.value > 1 || afterBatchCount.value > 1);
		watch(() => parsedValue.value?.beforeImages, () => {
			beforeIndex.value = 0;
		});
		watch(() => parsedValue.value?.afterImages, () => {
			afterIndex.value = 0;
		});
		const beforeImage = computed(() => {
			const value = props.widget.value;
			if (isSingleImage(value)) return value;
			return value?.beforeImages?.[beforeIndex.value] ?? "";
		});
		const afterImage = computed(() => {
			const value = props.widget.value;
			if (isSingleImage(value)) return "";
			return value?.afterImages?.[afterIndex.value] ?? "";
		});
		const hasCompareImages = computed(() => Boolean(beforeImage.value && afterImage.value));
		const beforeAlt = computed(() => {
			const value = props.widget.value;
			return !isSingleImage(value) && value?.beforeAlt ? value.beforeAlt : "Before image";
		});
		const afterAlt = computed(() => {
			const value = props.widget.value;
			return !isSingleImage(value) && value?.afterAlt ? value.afterAlt : "After image";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [showBatchNav.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
				createVNode(BatchNavigation_default, {
					modelValue: beforeIndex.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => beforeIndex.value = $event),
					count: beforeBatchCount.value,
					"data-testid": "before-batch"
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("imageCompare.batchLabelA")), 1)]),
					_: 1
				}, 8, ["modelValue", "count"]),
				beforeBatchCount.value <= 1 ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("", true),
				createVNode(BatchNavigation_default, {
					modelValue: afterIndex.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => afterIndex.value = $event),
					count: afterBatchCount.value,
					"data-testid": "after-batch"
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("imageCompare.batchLabelB")), 1)]),
					_: 1
				}, 8, ["modelValue", "count"])
			])) : createCommentVNode("", true), beforeImage.value || afterImage.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				ref_key: "containerRef",
				ref: containerRef,
				class: "relative min-h-0 flex-1 overflow-hidden rounded-lg bg-node-component-surface py-4"
			}, [
				afterImage.value ? (openBlock(), createElementBlock("img", {
					key: 0,
					src: afterImage.value,
					alt: afterAlt.value,
					draggable: "false",
					class: "absolute inset-0 size-full object-contain"
				}, null, 8, _hoisted_4)) : createCommentVNode("", true),
				beforeImage.value ? (openBlock(), createElementBlock("img", {
					key: 1,
					src: beforeImage.value,
					alt: beforeAlt.value,
					draggable: "false",
					class: "absolute inset-0 size-full object-contain",
					style: normalizeStyle(hasCompareImages.value ? { clipPath: `inset(0 ${100 - sliderPosition.value}% 0 0)` } : void 0)
				}, null, 12, _hoisted_5)) : createCommentVNode("", true),
				hasCompareImages.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: "pointer-events-none absolute top-1/2 z-10 size-6 -translate-1/2 rounded-full border-2 border-white bg-white/30 shadow-lg backdrop-blur-sm",
					style: normalizeStyle({ left: `${sliderPosition.value}%` }),
					role: "presentation"
				}, null, 4)) : createCommentVNode("", true)
			], 512)) : (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(_ctx.$t("imageCompare.noImages")), 1))]);
		};
	}
});
//#endregion
export { WidgetImageCompare_default as default };

//# sourceMappingURL=WidgetImageCompare-B0Osy1TG.js.map