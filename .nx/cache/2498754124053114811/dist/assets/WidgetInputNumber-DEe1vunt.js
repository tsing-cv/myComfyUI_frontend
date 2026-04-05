import "./rolldown-runtime-DBfy44LZ.js";
import { F as script } from "./vendor-primevue-Dnp2bJ8y.js";
import { Bt as normalizeClass, D as computed, G as mergeModels, Ht as normalizeStyle, I as createVNode, It as toValue, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, _t as withCtx, at as resolveDirective, et as openBlock, k as createBlock, kt as ref, ot as resolveDynamicComponent, rt as renderSlot, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as evaluateInput } from "./widget-W78njY6p.js";
import { g as SliderThumb_default, h as SliderTrack_default, v as SliderRoot_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import "./Button-BDFSC50t.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { t as Slider_default } from "./Slider-crPZmra_.js";
import "./Popover-CIFEPFvK.js";
import { t as ScrubableNumberInput_default } from "./ScrubableNumberInput-B5dNKiiS.js";
import { a as STANDARD_EXCLUDED_PROPS, o as filterWidgetProps, r as INPUT_EXCLUDED_PROPS } from "./widgetPropFilter-nQfJwFQD.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-Da15-q1j.js";
import { t as WidgetInputBaseClass } from "./layout-CbnMFmup.js";
import { t as WidgetWithControl_default } from "./WidgetWithControl-DtgXp6sU.js";
//#region src/components/gradientslider/gradients.ts
function stopsToGradient(stops) {
	if (!stops.length) return "transparent";
	return `linear-gradient(to right, ${stops.map(({ offset, color: [r, g, b] }) => `rgb(${r},${g},${b}) ${offset * 100}%`).join(", ")})`;
}
function interpolateStops(stops, t) {
	if (!stops.length) return "transparent";
	const clamped = Math.max(0, Math.min(1, t));
	if (clamped <= stops[0].offset) {
		const [r, g, b] = stops[0].color;
		return `rgb(${r},${g},${b})`;
	}
	for (let i = 0; i < stops.length - 1; i++) {
		const { offset: o1, color: [r1, g1, b1] } = stops[i];
		const { offset: o2, color: [r2, g2, b2] } = stops[i + 1];
		if (clamped >= o1 && clamped <= o2) {
			const f = o2 === o1 ? 0 : (clamped - o1) / (o2 - o1);
			return `rgb(${Math.round(r1 + (r2 - r1) * f)},${Math.round(g1 + (g2 - g1) * f)},${Math.round(b1 + (b2 - b1) * f)})`;
		}
	}
	const [r, g, b] = stops[stops.length - 1].color;
	return `rgb(${r},${g},${b})`;
}
//#endregion
//#region src/components/gradientslider/GradientSlider.vue
var GradientSlider_default = /* @__PURE__ */ defineComponent({
	__name: "GradientSlider",
	props: /* @__PURE__ */ mergeModels({
		stops: {},
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: false
		},
		ariaLabel: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const sliderValue = computed({
			get: () => [modelValue.value],
			set: (v) => {
				if (v.length) modelValue.value = v[0];
			}
		});
		const gradient = computed(() => stopsToGradient(__props.stops));
		const thumbColor = computed(() => {
			const t = __props.max === __props.min ? 0 : (modelValue.value - __props.min) / (__props.max - __props.min);
			return interpolateStops(__props.stops, t);
		});
		const pressed = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SliderRoot_default), {
				modelValue: sliderValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sliderValue.value = $event),
				min: _ctx.min,
				max: _ctx.max,
				step: _ctx.step,
				disabled: _ctx.disabled,
				class: normalizeClass(unref(cn)("relative flex w-full touch-none items-center select-none", "data-disabled:opacity-50")),
				style: { "--reka-slider-thumb-transform": "translate(-50%, -50%)" },
				onSlideStart: _cache[1] || (_cache[1] = ($event) => pressed.value = true),
				onSlideMove: _cache[2] || (_cache[2] = ($event) => pressed.value = true),
				onSlideEnd: _cache[3] || (_cache[3] = ($event) => pressed.value = false)
			}, {
				default: withCtx(() => [createVNode(unref(SliderTrack_default), {
					class: normalizeClass(unref(cn)("relative h-2.5 w-full grow cursor-pointer overflow-visible rounded-full", "before:absolute before:-inset-2 before:block before:bg-transparent")),
					style: normalizeStyle({ background: gradient.value })
				}, {
					default: withCtx(() => [createVNode(unref(SliderThumb_default), {
						class: normalizeClass(unref(cn)("top-1/2 block size-4 shrink-0 cursor-grab rounded-full shadow-md ring-1 ring-black/25", "transition-[color,box-shadow,background-color]", "before:absolute before:-inset-1.5 before:block before:rounded-full before:bg-transparent", "hover:ring-2 hover:ring-black/40 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:outline-hidden", "disabled:pointer-events-none disabled:opacity-50", { "cursor-grabbing": pressed.value })),
						style: normalizeStyle({ backgroundColor: thumbColor.value }),
						"aria-label": _ctx.ariaLabel
					}, null, 8, [
						"class",
						"style",
						"aria-label"
					])]),
					_: 1
				}, 8, ["class", "style"])]),
				_: 1
			}, 8, [
				"modelValue",
				"min",
				"max",
				"step",
				"disabled",
				"class"
			]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useNumberStepCalculation.ts
/**
* Shared composable for calculating step values in number input widgets
* Handles both explicit step2 values and precision-derived steps
*/
function useNumberStepCalculation(options, precisionArg, returnUndefinedForDefault = false) {
	return computed(() => {
		const precision = toValue(precisionArg);
		if (options?.step2 !== void 0) return Number(options.step2);
		const step = options?.step;
		if (step !== void 0 && step > 10) return Number(step) / 10;
		if (precision === void 0) return returnUndefinedForDefault ? void 0 : 0;
		if (precision === 0) return 1;
		const calculatedStep = 1 / Math.pow(10, precision);
		return returnUndefinedForDefault ? calculatedStep : Number(calculatedStep.toFixed(precision));
	});
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useNumberWidgetButtonPt.ts
var sharedButtonClasses = cn("inline-flex items-center justify-center border-0 bg-transparent text-inherit transition-colors duration-150 ease-in-out", "hover:bg-node-component-surface-hovered active:bg-node-component-surface-selected", "disabled:cursor-not-allowed disabled:bg-node-component-disabled disabled:text-node-icon-disabled");
function useNumberWidgetButtonPt(options) {
	const { roundedLeft = false, roundedRight = false } = options ?? {};
	const increment = cn(sharedButtonClasses, roundedRight && "rounded-r-lg");
	const decrement = cn(sharedButtonClasses, roundedLeft && "rounded-l-lg");
	return {
		incrementButton: { class: increment },
		decrementButton: { class: decrement }
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputNumberGradientSlider.vue
var WidgetInputNumberGradientSlider_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetInputNumberGradientSlider",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const DEFAULT_GRADIENT_STOPS = [{
			offset: 0,
			color: [
				0,
				0,
				0
			]
		}, {
			offset: 1,
			color: [
				255,
				255,
				255
			]
		}];
		const modelValue = useModel(__props, "modelValue");
		const timesEmptied = ref(0);
		const handleNumberInputUpdate = (newValue) => {
			if (newValue !== void 0) {
				modelValue.value = newValue;
				return;
			}
			timesEmptied.value += 1;
		};
		const gradientStops = computed(() => {
			const stops = __props.widget.options?.gradient_stops;
			if (stops && stops.length >= 2) return stops;
			return DEFAULT_GRADIENT_STOPS;
		});
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, STANDARD_EXCLUDED_PROPS));
		const precision = computed(() => {
			const p = __props.widget.options?.precision;
			return typeof p === "number" && p >= 0 ? p : void 0;
		});
		const stepValue = useNumberStepCalculation(__props.widget.options, precision, true);
		const numberPt = useNumberWidgetButtonPt({
			roundedLeft: true,
			roundedRight: true
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: _ctx.widget }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex items-center gap-2 pr-2 pl-3")) }, [createVNode(GradientSlider_default, {
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					stops: gradientStops.value,
					min: _ctx.widget.options?.min ?? 0,
					max: _ctx.widget.options?.max ?? 100,
					step: unref(stepValue),
					disabled: _ctx.widget.options?.disabled,
					"aria-label": _ctx.widget.name,
					class: "min-w-0 flex-1"
				}, null, 8, [
					"modelValue",
					"stops",
					"min",
					"max",
					"step",
					"disabled",
					"aria-label"
				]), (openBlock(), createBlock(unref(script), mergeProps({
					key: timesEmptied.value,
					"model-value": modelValue.value
				}, filteredProps.value, {
					step: unref(stepValue),
					"min-fraction-digits": precision.value,
					"max-fraction-digits": precision.value,
					"aria-label": _ctx.widget.name,
					size: "small",
					"pt:pc-input-text:root": "min-w-[4ch] bg-transparent border-none text-center truncate",
					class: "w-16 shrink-0",
					pt: unref(numberPt),
					"onUpdate:modelValue": handleNumberInputUpdate
				}), null, 16, [
					"model-value",
					"step",
					"min-fraction-digits",
					"max-fraction-digits",
					"aria-label",
					"pt"
				]))], 2)]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputNumberInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pointer-events-none absolute size-full overflow-clip rounded-lg" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputNumberInput.vue
var WidgetInputNumberInput_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetInputNumberInput",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		rootClass: {}
	}, {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const { locale } = useI18n();
		const props = __props;
		function formatNumber(value, options) {
			return new Intl.NumberFormat(locale.value, options).format(value);
		}
		const decimalSeparator = computed(() => formatNumber(1.1).replace(/\p{Number}/gu, ""));
		const groupSeparator = computed(() => formatNumber(11111).replace(/\p{Number}/gu, ""));
		function unformatValue(value) {
			return value.replaceAll(groupSeparator.value, "").replaceAll(decimalSeparator.value, ".");
		}
		const modelValue = useModel(__props, "modelValue");
		const formattedValue = computed(() => {
			const value = modelValue.value;
			if (value === "" || !isFinite(value)) return `${value}`;
			const options = { useGrouping: useGrouping.value };
			if (precision.value !== void 0) {
				options.minimumFractionDigits = precision.value;
				options.maximumFractionDigits = precision.value;
			}
			return formatNumber(value, options);
		});
		function parseWidgetValue(raw) {
			return evaluateInput(unformatValue(raw));
		}
		const filteredProps = computed(() => {
			return filterWidgetProps(props.widget.options, INPUT_EXCLUDED_PROPS);
		});
		const isDisabled = computed(() => props.widget.options?.disabled ?? false);
		const precision = computed(() => {
			const p = props.widget.options?.precision;
			return typeof p === "number" && p >= 0 ? p : void 0;
		});
		const stepValue = computed(() => {
			if (props.widget.options?.step2 !== void 0) return Number(props.widget.options.step2);
			const step = props.widget.options?.step;
			if (step !== void 0 && step > 10) return Number(step) / 10;
			if (precision.value !== void 0) {
				if (precision.value === 0) return 1;
				return Number((1 / Math.pow(10, precision.value)).toFixed(precision.value));
			}
			return 0;
		});
		const useGrouping = computed(() => {
			return props.widget.options?.useGrouping === true;
		});
		const buttonsDisabled = computed(() => {
			const currentValue = modelValue.value ?? 0;
			return !Number.isFinite(currentValue) || Math.abs(currentValue) > Number.MAX_SAFE_INTEGER;
		});
		const buttonTooltip = computed(() => {
			if (buttonsDisabled.value) return "Increment/decrement disabled: value exceeds JavaScript precision limit (±2^53)";
			return null;
		});
		const sliderWidth = computed(() => {
			const { max, min, step } = filteredProps.value;
			if (min === void 0 || max === void 0 || step === void 0 || (max - min) / step >= 100) return 0;
			return ((modelValue.value - min) / (max - min) * 100).toFixed(0);
		});
		const inputAriaAttrs = computed(() => ({
			"aria-valuenow": modelValue.value,
			"aria-valuemin": filteredProps.value.min,
			"aria-valuemax": filteredProps.value.max,
			role: "spinbutton",
			tabindex: 0
		}));
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createBlock(WidgetLayoutField_default, {
				widget: _ctx.widget,
				"root-class": props.rootClass
			}, {
				default: withCtx(() => [withDirectives((openBlock(), createBlock(ScrubableNumberInput_default, {
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					"aria-label": _ctx.widget.name,
					min: filteredProps.value.min,
					max: filteredProps.value.max,
					step: stepValue.value,
					"display-value": formattedValue.value,
					disabled: isDisabled.value,
					"hide-buttons": buttonsDisabled.value,
					"parse-value": parseWidgetValue,
					"input-attrs": inputAriaAttrs.value,
					class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "relative flex h-7 grow text-xs"))
				}, {
					background: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", {
						class: "size-full bg-primary-background/15",
						style: normalizeStyle({ width: `${sliderWidth.value}%` })
					}, null, 4)])]),
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"modelValue",
					"aria-label",
					"min",
					"max",
					"step",
					"display-value",
					"disabled",
					"hide-buttons",
					"input-attrs",
					"class"
				])), [[_directive_tooltip, buttonTooltip.value]])]),
				_: 3
			}, 8, ["widget", "root-class"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputNumberSlider.vue
var WidgetInputNumberSlider_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WidgetInputNumberSlider",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const timesEmptied = ref(0);
		const updateLocalValue = (newValue) => {
			if (newValue?.length) modelValue.value = newValue[0];
		};
		const handleNumberInputUpdate = (newValue) => {
			if (newValue !== void 0) {
				updateLocalValue([newValue]);
				return;
			}
			timesEmptied.value += 1;
		};
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, STANDARD_EXCLUDED_PROPS));
		const p = __props.widget.options?.precision;
		const precision = typeof p === "number" && p >= 0 ? p : void 0;
		const stepValue = useNumberStepCalculation(__props.widget.options, precision, true);
		const sliderNumberPt = useNumberWidgetButtonPt({
			roundedLeft: true,
			roundedRight: true
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: _ctx.widget }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex items-center gap-2 pr-2 pl-3 not-disabled:hover:bg-component-node-widget-background-hovered")) }, [createVNode(Slider_default, mergeProps({ "model-value": [modelValue.value] }, filteredProps.value, {
					class: "grow text-xs",
					step: unref(stepValue),
					"aria-label": _ctx.widget.name,
					"onUpdate:modelValue": updateLocalValue
				}), null, 16, [
					"model-value",
					"step",
					"aria-label"
				]), (openBlock(), createBlock(unref(script), mergeProps({
					key: timesEmptied.value,
					"model-value": modelValue.value
				}, filteredProps.value, {
					step: unref(stepValue),
					"min-fraction-digits": unref(precision),
					"max-fraction-digits": unref(precision),
					"aria-label": _ctx.widget.name,
					size: "small",
					"pt:pc-input-text:root": "min-w-[4ch] bg-transparent border-none text-center truncate",
					class: "w-16",
					pt: unref(sliderNumberPt),
					"onUpdate:modelValue": handleNumberInputUpdate
				}), null, 16, [
					"model-value",
					"step",
					"min-fraction-digits",
					"max-fraction-digits",
					"aria-label",
					"pt"
				]))], 2)]),
				_: 1
			}, 8, ["widget"]);
		};
	}
}), [["__scopeId", "data-v-bd3c3efd"]]);
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputNumber.vue
var WidgetInputNumber_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetInputNumber",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const controlWidget = computed(() => props.widget.controlWidget ? props.widget : null);
		const widgetComponent = computed(() => {
			switch (props.widget.type) {
				case "gradientslider": return WidgetInputNumberGradientSlider_default;
				case "slider": return WidgetInputNumberSlider_default;
				default: return WidgetInputNumberInput_default;
			}
		});
		return (_ctx, _cache) => {
			return controlWidget.value ? (openBlock(), createBlock(WidgetWithControl_default, {
				key: 0,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				widget: controlWidget.value,
				component: widgetComponent.value
			}, null, 8, [
				"modelValue",
				"widget",
				"component"
			])) : (openBlock(), createBlock(resolveDynamicComponent(widgetComponent.value), mergeProps({
				key: 1,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				widget: _ctx.widget
			}, _ctx.$attrs), null, 16, ["modelValue", "widget"]));
		};
	}
});
//#endregion
export { WidgetInputNumber_default as default };

//# sourceMappingURL=WidgetInputNumber-DEe1vunt.js.map