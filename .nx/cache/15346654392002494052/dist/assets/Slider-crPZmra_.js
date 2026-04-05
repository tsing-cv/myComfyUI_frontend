import "./rolldown-runtime-DBfy44LZ.js";
import { Bt as normalizeClass, I as createVNode, K as mergeProps, R as defineComponent, Rt as unref, S as Fragment, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, nt as renderList } from "./vendor-vue-core-Ba0aGEmU.js";
import { J as reactiveOmit } from "./vendor-vueuse--4MZqvDu.js";
import { Ot as useForwardPropsEmits, _ as SliderRange_default, g as SliderThumb_default, h as SliderTrack_default, v as SliderRoot_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
//#endregion
//#region src/components/ui/slider/Slider.vue
var Slider_default = /* @__PURE__ */ defineComponent({
	__name: "Slider",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		inverted: { type: Boolean },
		min: {},
		max: {},
		step: {},
		minStepsBetweenThumbs: {},
		thumbAlignment: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: {}
	},
	emits: ["update:modelValue", "valueCommit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const pressed = ref(false);
		const setPressed = (val) => {
			pressed.value = val;
		};
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SliderRoot_default), mergeProps({
				"data-slot": "slider",
				class: unref(cn)("relative flex w-full touch-none items-center select-none data-disabled:opacity-50", "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", props.class)
			}, unref(forwarded), {
				onSlideStart: _cache[0] || (_cache[0] = () => setPressed(true)),
				onSlideMove: _cache[1] || (_cache[1] = () => setPressed(true)),
				onSlideEnd: _cache[2] || (_cache[2] = () => setPressed(false))
			}), {
				default: withCtx(({ modelValue }) => [createVNode(unref(SliderTrack_default), {
					"data-slot": "slider-track",
					class: normalizeClass(unref(cn)("relative grow overflow-hidden rounded-full bg-node-stroke", "cursor-pointer overflow-visible", `before:absolute before:-inset-2 before:block before:bg-transparent`, "data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full", "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5"))
				}, {
					default: withCtx(() => [createVNode(unref(SliderRange_default), {
						"data-slot": "slider-range",
						class: "absolute bg-node-component-surface-highlight data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
					})]),
					_: 1
				}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(modelValue, (_, key) => {
					return openBlock(), createBlock(unref(SliderThumb_default), {
						key,
						"data-slot": "slider-thumb",
						class: normalizeClass(unref(cn)("block size-3.5 shrink-0 rounded-full bg-node-component-surface-highlight shadow-sm ring-node-component-surface-selected transition-[color,box-shadow]", "cursor-grab", "before:absolute before:-inset-1 before:block before:rounded-full before:bg-transparent", "hover:ring-2 focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50", { "cursor-grabbing": pressed.value }))
					}, null, 8, ["class"]);
				}), 128))]),
				_: 1
			}, 16, ["class"]);
		};
	}
});
//#endregion
export { Slider_default as t };

//# sourceMappingURL=Slider-crPZmra_.js.map