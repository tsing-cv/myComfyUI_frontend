import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, K as mergeProps, M as createPropsRestProxy, Pt as toRef, R as defineComponent, Rt as unref, U as inject, _t as withCtx, et as openBlock, k as createBlock, kt as ref, rt as renderSlot, tt as provide } from "./vendor-vue-core-Ba0aGEmU.js";
import { k as cva } from "./vendor-other-BMn-xt1e.js";
import { Ot as useForwardPropsEmits, a as ToggleGroupRoot_default, i as ToggleGroupItem_default$1, kt as useForwardProps } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
//#region src/components/ui/toggle-group/toggleGroup.variants.ts
var toggleGroupVariantKey = Symbol("toggleGroupVariant");
var toggleGroupVariants = cva({
	base: "flex items-center justify-center gap-1",
	variants: { variant: {
		default: "bg-transparent",
		outline: "bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
var toggleGroupItemVariants = cva({
	base: [
		"inline-flex items-center justify-center rounded",
		"border-none cursor-pointer appearance-none",
		"text-center font-normal",
		"transition-all duration-150 ease-in-out",
		"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
		"disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
		"data-[state=on]:bg-interface-menu-component-surface-selected data-[state=on]:text-text-primary"
	],
	variants: {
		variant: {
			default: "bg-transparent text-text-secondary hover:bg-interface-menu-component-surface-selected/50",
			outline: "border border-border-default bg-transparent text-text-secondary hover:bg-secondary-background"
		},
		size: {
			default: "h-7 px-3 text-sm",
			sm: "h-6 px-5 py-[5px] text-xs",
			lg: "h-9 px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
//#endregion
//#region src/components/ui/toggle-group/ToggleGroup.vue
var ToggleGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ToggleGroup",
	props: {
		class: {},
		variant: { default: "default" },
		rovingFocus: { type: Boolean },
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		type: {},
		modelValue: {},
		defaultValue: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(createPropsRestProxy(__props, ["class", "variant"]), __emit);
		provide(toggleGroupVariantKey, toRef(() => __props.variant));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ToggleGroupRoot_default), mergeProps(unref(forwarded), { class: unref(cn)(unref(toggleGroupVariants)({ variant: _ctx.variant }), __props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region src/components/ui/toggle-group/ToggleGroupItem.vue
var ToggleGroupItem_default = /* @__PURE__ */ defineComponent({
	__name: "ToggleGroupItem",
	props: {
		class: {},
		variant: {},
		size: { default: "default" },
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const restProps = createPropsRestProxy(__props, [
			"class",
			"variant",
			"size"
		]);
		const contextVariant = inject(toggleGroupVariantKey, ref("default"));
		const forwardedProps = useForwardProps(restProps);
		const resolvedVariant = computed(() => __props.variant ?? contextVariant.value ?? "default");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ToggleGroupItem_default$1), mergeProps(unref(forwardedProps), { class: unref(cn)(unref(toggleGroupItemVariants)({
				variant: resolvedVariant.value,
				size: _ctx.size
			}), "min-w-0 flex-1 truncate", __props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
export { ToggleGroup_default as n, ToggleGroupItem_default as t };

//# sourceMappingURL=toggle-group-DczfNkiV.js.map