import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, G as mergeModels, Ht as normalizeStyle, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, pt as watch, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { a as hsvaToHex, i as hsbToRgb, l as rgbToHex, n as hexToHsva, o as isColorFormat, u as toHexFromFormat } from "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { G as PopoverTrigger_default, K as PopoverPortal_default, Z as PopoverRoot_default, q as PopoverContent_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bx34DVM6.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-Da15-q1j.js";
//#region src/components/ui/color-picker/ColorPickerSaturationValue.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["aria-label", "aria-valuetext"];
//#endregion
//#region src/components/ui/color-picker/ColorPickerSaturationValue.vue
var ColorPickerSaturationValue_default = /* @__PURE__ */ defineComponent({
	__name: "ColorPickerSaturationValue",
	props: /* @__PURE__ */ mergeModels({ hue: {} }, {
		"saturation": { required: true },
		"saturationModifiers": {},
		"value": { required: true },
		"valueModifiers": {}
	}),
	emits: ["update:saturation", "update:value"],
	setup(__props) {
		const { t } = useI18n();
		const saturation = useModel(__props, "saturation");
		const value = useModel(__props, "value");
		const containerRef = ref(null);
		const hueBackground = computed(() => `hsl(${__props.hue}, 100%, 50%)`);
		const handleStyle = computed(() => ({
			left: `${saturation.value}%`,
			top: `${100 - value.value}%`
		}));
		function updateFromPointer(e) {
			const el = containerRef.value;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
			const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
			saturation.value = Math.round(x * 100);
			value.value = Math.round((1 - y) * 100);
		}
		function handlePointerDown(e) {
			e.currentTarget.setPointerCapture(e.pointerId);
			updateFromPointer(e);
		}
		function handlePointerMove(e) {
			if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
			updateFromPointer(e);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				role: "slider",
				"aria-label": unref(t)("color.saturationBrightness"),
				"aria-valuetext": `${saturation.value}%, ${value.value}%`,
				class: "relative aspect-square w-full cursor-crosshair rounded-sm",
				style: normalizeStyle({
					backgroundColor: hueBackground.value,
					touchAction: "none"
				}),
				onPointerdown: handlePointerDown,
				onPointermove: handlePointerMove
			}, [
				_cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 rounded-sm bg-linear-to-r from-white to-transparent" }, null, -1)),
				_cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute inset-0 rounded-sm bg-linear-to-b from-transparent to-black" }, null, -1)),
				createBaseVNode("div", {
					class: "pointer-events-none absolute size-3.5 -translate-1/2 rounded-full border-2 border-white shadow-[0_0_2px_rgba(0,0,0,0.6)]",
					style: normalizeStyle(handleStyle.value)
				}, null, 4)
			], 44, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/components/ui/color-picker/ColorPickerSlider.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"aria-label",
	"aria-valuemax",
	"aria-valuenow"
];
//#endregion
//#region src/components/ui/color-picker/ColorPickerSlider.vue
var ColorPickerSlider_default = /* @__PURE__ */ defineComponent({
	__name: "ColorPickerSlider",
	props: /* @__PURE__ */ mergeModels({
		type: {},
		hue: { default: 0 },
		saturation: { default: 100 },
		brightness: { default: 100 }
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const { t } = useI18n();
		const modelValue = useModel(__props, "modelValue");
		const max = computed(() => __props.type === "hue" ? 360 : 100);
		const fraction = computed(() => modelValue.value / max.value);
		const trackBackground = computed(() => {
			if (__props.type === "hue") return "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)";
			return `linear-gradient(to right, transparent, ${rgbToHex(hsbToRgb({
				h: __props.hue,
				s: __props.saturation,
				b: __props.brightness
			}))})`;
		});
		const containerStyle = computed(() => {
			if (__props.type === "alpha") return {
				backgroundImage: "repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%)",
				backgroundSize: "8px 8px",
				touchAction: "none"
			};
			return {
				background: trackBackground.value,
				touchAction: "none"
			};
		});
		function updateFromPointer(e) {
			const rect = e.currentTarget.getBoundingClientRect();
			const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
			modelValue.value = Math.round(x * max.value);
		}
		function handlePointerDown(e) {
			e.currentTarget.setPointerCapture(e.pointerId);
			updateFromPointer(e);
		}
		function handlePointerMove(e) {
			if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
			updateFromPointer(e);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				role: "slider",
				"aria-label": _ctx.type === "hue" ? unref(t)("color.hue") : unref(t)("color.alpha"),
				"aria-valuemin": 0,
				"aria-valuemax": max.value,
				"aria-valuenow": modelValue.value,
				class: "relative flex h-4 cursor-pointer items-center rounded-full p-px",
				style: normalizeStyle(containerStyle.value),
				onPointerdown: handlePointerDown,
				onPointermove: handlePointerMove
			}, [_ctx.type === "alpha" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: "absolute inset-0 rounded-full",
				style: normalizeStyle({ background: trackBackground.value })
			}, null, 4)) : createCommentVNode("", true), createBaseVNode("div", {
				class: "pointer-events-none absolute aspect-square h-full -translate-x-1/2 rounded-full border-2 border-white shadow-[0_0_2px_rgba(0,0,0,0.6)]",
				style: normalizeStyle({ left: `${fraction.value * 100}%` })
			}, null, 4)], 44, _hoisted_1$2);
		};
	}
});
//#endregion
//#region src/components/ui/color-picker/ColorPickerPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex w-[211px] flex-col gap-2 rounded-lg border border-border-subtle bg-base-background p-2 shadow-md" };
var _hoisted_2$1 = { class: "flex items-center gap-1" };
var _hoisted_3$1 = { class: "flex h-6 min-w-0 flex-1 items-center gap-1 rounded-sm bg-secondary-background px-1 text-xs text-node-component-slot-text" };
var _hoisted_4$1 = {
	key: 0,
	class: "min-w-0 flex-1 truncate text-center"
};
var _hoisted_5$1 = { class: "w-6 shrink-0 text-center" };
var _hoisted_6 = { class: "w-6 shrink-0 text-center" };
var _hoisted_7 = { class: "w-6 shrink-0 text-center" };
var _hoisted_8 = { class: "shrink-0 border-l border-border-subtle pl-1" };
//#endregion
//#region src/components/ui/color-picker/ColorPickerPanel.vue
var ColorPickerPanel_default = /* @__PURE__ */ defineComponent({
	__name: "ColorPickerPanel",
	props: {
		"hsva": { required: true },
		"hsvaModifiers": {},
		"displayMode": { required: true },
		"displayModeModifiers": {}
	},
	emits: ["update:hsva", "update:displayMode"],
	setup(__props) {
		const hsva = useModel(__props, "hsva");
		const displayMode = useModel(__props, "displayMode");
		const rgb = computed(() => hsbToRgb({
			h: hsva.value.h,
			s: hsva.value.s,
			b: hsva.value.v
		}));
		const hexString = computed(() => rgbToHex(rgb.value).toLowerCase());
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				createVNode(ColorPickerSaturationValue_default, {
					saturation: hsva.value.s,
					"onUpdate:saturation": _cache[0] || (_cache[0] = ($event) => hsva.value.s = $event),
					value: hsva.value.v,
					"onUpdate:value": _cache[1] || (_cache[1] = ($event) => hsva.value.v = $event),
					hue: hsva.value.h
				}, null, 8, [
					"saturation",
					"value",
					"hue"
				]),
				createVNode(ColorPickerSlider_default, {
					modelValue: hsva.value.h,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => hsva.value.h = $event),
					type: "hue"
				}, null, 8, ["modelValue"]),
				createVNode(ColorPickerSlider_default, {
					modelValue: hsva.value.a,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => hsva.value.a = $event),
					type: "alpha",
					hue: hsva.value.h,
					saturation: hsva.value.s,
					brightness: hsva.value.v
				}, null, 8, [
					"modelValue",
					"hue",
					"saturation",
					"brightness"
				]),
				createBaseVNode("div", _hoisted_2$1, [createVNode(Select_default, {
					modelValue: displayMode.value,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => displayMode.value = $event)
				}, {
					default: withCtx(() => [createVNode(SelectTrigger_default, { class: "h-6 w-[58px] shrink-0 gap-0.5 overflow-clip rounded-sm border-0 px-1.5 py-0 text-xs [&>span]:overflow-visible" }, {
						default: withCtx(() => [createVNode(SelectValue_default)]),
						_: 1
					}), createVNode(SelectContent_default, { class: "min-w-16 p-1" }, {
						default: withCtx(() => [createVNode(SelectItem_default, {
							value: "hex",
							class: "px-2 py-1 text-xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("color.hex")), 1)]),
							_: 1
						}), createVNode(SelectItem_default, {
							value: "rgba",
							class: "px-2 py-1 text-xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("color.rgba")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue"]), createBaseVNode("div", _hoisted_3$1, [displayMode.value === "hex" ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(hexString.value), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("span", _hoisted_5$1, toDisplayString(rgb.value.r), 1),
					createBaseVNode("span", _hoisted_6, toDisplayString(rgb.value.g), 1),
					createBaseVNode("span", _hoisted_7, toDisplayString(rgb.value.b), 1)
				], 64)), createBaseVNode("span", _hoisted_8, toDisplayString(hsva.value.a) + "%", 1)])])
			]);
		};
	}
});
//#endregion
//#region src/components/ui/color-picker/ColorPicker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-8 shrink-0 items-center justify-center" };
var _hoisted_2 = { class: "relative size-4 overflow-hidden rounded-sm" };
var _hoisted_3 = { class: "flex flex-1 items-center justify-between pl-1 text-xs text-node-component-slot-text" };
var _hoisted_4 = { key: 0 };
var _hoisted_5 = {
	key: 1,
	class: "flex gap-2"
};
//#endregion
//#region src/components/ui/color-picker/ColorPicker.vue
var ColorPicker_default = /* @__PURE__ */ defineComponent({
	__name: "ColorPicker",
	props: /* @__PURE__ */ mergeModels({ class: {} }, {
		"modelValue": { default: "#000000" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const hsva = ref(hexToHsva(modelValue.value || "#000000"));
		const displayMode = ref("hex");
		watch(modelValue, (newVal) => {
			if (newVal !== hsvaToHex(hsva.value)) hsva.value = hexToHsva(newVal || "#000000");
		});
		watch(hsva, (newHsva) => {
			const hex = hsvaToHex(newHsva);
			if (hex !== modelValue.value) modelValue.value = hex;
		}, { deep: true });
		const baseRgb = computed(() => hsbToRgb({
			h: hsva.value.h,
			s: hsva.value.s,
			b: hsva.value.v
		}));
		const previewColor = computed(() => {
			const hex = rgbToHex(baseRgb.value);
			const a = hsva.value.a / 100;
			if (a < 1) return `${hex}${Math.round(a * 255).toString(16).padStart(2, "0")}`;
			return hex;
		});
		const displayHex = computed(() => rgbToHex(baseRgb.value).toLowerCase());
		const isOpen = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverRoot_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => isOpen.value = $event)
			}, {
				default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(unref(cn)("flex h-8 w-full items-center overflow-clip rounded-lg border border-transparent bg-node-component-surface pr-2 outline-none hover:bg-component-node-widget-background-hovered", isOpen.value && "border-node-stroke", _ctx.$props.class))
					}, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_cache[3] || (_cache[3] = createBaseVNode("div", {
						class: "absolute inset-0",
						style: {
							backgroundImage: "repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%)",
							backgroundSize: "4px 4px"
						}
					}, null, -1)), createBaseVNode("div", {
						class: "absolute inset-0",
						style: normalizeStyle({ backgroundColor: previewColor.value })
					}, null, 4)])]), createBaseVNode("div", _hoisted_3, [displayMode.value === "hex" ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(displayHex.value), 1)) : (openBlock(), createElementBlock("div", _hoisted_5, [
						createBaseVNode("span", null, toDisplayString(baseRgb.value.r), 1),
						createBaseVNode("span", null, toDisplayString(baseRgb.value.g), 1),
						createBaseVNode("span", null, toDisplayString(baseRgb.value.b), 1)
					])), createBaseVNode("span", null, toDisplayString(hsva.value.a) + "%", 1)])], 2)]),
					_: 1
				}), createVNode(unref(PopoverPortal_default), null, {
					default: withCtx(() => [createVNode(unref(PopoverContent_default), {
						side: "bottom",
						align: "start",
						"side-offset": 7,
						"collision-padding": 10,
						class: "z-1700"
					}, {
						default: withCtx(() => [createVNode(ColorPickerPanel_default, {
							hsva: hsva.value,
							"onUpdate:hsva": _cache[0] || (_cache[0] = ($event) => hsva.value = $event),
							"display-mode": displayMode.value,
							"onUpdate:displayMode": _cache[1] || (_cache[1] = ($event) => displayMode.value = $event)
						}, null, 8, ["hsva", "display-mode"])]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetColorPicker.vue
var WidgetColorPicker_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetColorPicker",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const format = isColorFormat(__props.widget.options?.format) ? __props.widget.options.format : "hex";
		const localValue = ref(toHexFromFormat(modelValue.value || "#000000", format));
		watch(modelValue, (newVal) => {
			localValue.value = toHexFromFormat(newVal || "#000000", format);
		});
		function onUpdate(val) {
			localValue.value = val;
			modelValue.value = val;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: _ctx.widget }, {
				default: withCtx(() => [createVNode(ColorPicker_default, {
					modelValue: localValue.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => localValue.value = $event), onUpdate]
				}, null, 8, ["modelValue"])]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
export { WidgetColorPicker_default as default };

//# sourceMappingURL=WidgetColorPicker-C8pEXF6e.js.map