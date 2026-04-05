import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, G as mergeModels, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, _t as withCtx, b as withModifiers, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, rt as renderSlot, ut as useModel, y as withKeys } from "./vendor-vue-core-Ba0aGEmU.js";
import { F as usePointerSwipe, ot as whenever, s as onClickOutside } from "./vendor-vueuse--4MZqvDu.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
//#region src/components/common/ScrubableNumberInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative my-0.25 min-w-[4ch] flex-1 py-1.5" };
var _hoisted_2 = ["value", "disabled"];
//#endregion
//#region src/components/common/ScrubableNumberInput.vue
var ScrubableNumberInput_default = /* @__PURE__ */ defineComponent({
	__name: "ScrubableNumberInput",
	props: /* @__PURE__ */ mergeModels({
		min: { default: () => -Number.MAX_VALUE },
		max: { default: () => Number.MAX_VALUE },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: false
		},
		hideButtons: {
			type: Boolean,
			default: false
		},
		displayValue: {},
		parseValue: { type: Function },
		inputAttrs: {}
	}, {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const { t } = useI18n();
		const modelValue = useModel(__props, "modelValue");
		const container = useTemplateRef("container");
		const inputField = useTemplateRef("inputField");
		const swipeElement = useTemplateRef("swipeElement");
		const textEdit = ref(false);
		onClickOutside(container, () => {
			if (textEdit.value) textEdit.value = false;
		});
		function clamp(value) {
			return Math.min(__props.max, Math.max(__props.min, value));
		}
		const canDecrement = computed(() => modelValue.value > __props.min && !__props.disabled);
		const canIncrement = computed(() => modelValue.value < __props.max && !__props.disabled);
		function handleBlur(e) {
			const target = e.target;
			const raw = target.value.trim();
			const parsed = __props.parseValue ? __props.parseValue(raw) : raw === "" ? void 0 : Number(raw);
			if (parsed != null && !isNaN(parsed)) modelValue.value = clamp(parsed);
			else target.value = __props.displayValue ?? String(modelValue.value);
			textEdit.value = false;
		}
		let dragDelta = 0;
		function handlePointerUp() {
			if (isSwiping.value) return;
			textEdit.value = true;
			inputField.value?.focus();
			inputField.value?.select();
		}
		const { distanceX, isSwiping } = usePointerSwipe(swipeElement, { onSwipeEnd: () => dragDelta = 0 });
		whenever(distanceX, () => {
			if (__props.disabled) return;
			const delta = (distanceX.value - dragDelta) / 10 | 0;
			dragDelta += delta * 10;
			modelValue.value = clamp(modelValue.value - delta * __props.step);
		});
		function updateValueBy(delta) {
			modelValue.value = Math.min(__props.max, Math.max(__props.min, modelValue.value + delta));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container,
				class: "flex h-7 rounded-lg bg-component-node-widget-background text-xs text-component-node-foreground"
			}, [
				renderSlot(_ctx.$slots, "background"),
				!_ctx.hideButtons ? (openBlock(), createBlock(Button_default, {
					key: 0,
					"aria-label": unref(t)("g.decrement"),
					"data-testid": "decrement",
					class: "aspect-8/7 h-full rounded-r-none hover:bg-base-foreground/20 disabled:opacity-30",
					variant: "muted-textonly",
					disabled: !canDecrement.value,
					tabindex: "-1",
					onClick: _cache[0] || (_cache[0] = ($event) => modelValue.value = clamp(modelValue.value - _ctx.step))
				}, {
					default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("i", { class: "pi pi-minus" }, null, -1)])),
					_: 1
				}, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_1, [createBaseVNode("input", mergeProps({
					ref_key: "inputField",
					ref: inputField
				}, _ctx.inputAttrs, {
					value: _ctx.displayValue ?? modelValue.value,
					disabled: _ctx.disabled,
					class: unref(cn)("absolute inset-0 truncate border-0 bg-transparent p-1 text-sm focus:outline-0"),
					inputmode: "decimal",
					autocomplete: "off",
					autocorrect: "off",
					spellcheck: "false",
					onBlur: handleBlur,
					onKeyup: withKeys(handleBlur, ["enter"]),
					onKeydown: [
						_cache[1] || (_cache[1] = withKeys(withModifiers(($event) => updateValueBy(_ctx.step), ["prevent"]), ["up"])),
						_cache[2] || (_cache[2] = withKeys(withModifiers(($event) => updateValueBy(-_ctx.step), ["prevent"]), ["down"])),
						_cache[3] || (_cache[3] = withKeys(withModifiers(($event) => updateValueBy(10 * _ctx.step), ["prevent"]), ["page-up"])),
						_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => updateValueBy(-10 * _ctx.step), ["prevent"]), ["page-down"]))
					]
				}), null, 16, _hoisted_2), createBaseVNode("div", {
					ref_key: "swipeElement",
					ref: swipeElement,
					class: normalizeClass(unref(cn)("absolute inset-0 z-10 cursor-ew-resize touch-pan-y", textEdit.value && "pointer-events-none hidden")),
					onPointerup: handlePointerUp
				}, null, 34)]),
				renderSlot(_ctx.$slots, "default"),
				!_ctx.hideButtons ? (openBlock(), createBlock(Button_default, {
					key: 1,
					"aria-label": unref(t)("g.increment"),
					"data-testid": "increment",
					class: "aspect-8/7 h-full rounded-l-none hover:bg-base-foreground/20 disabled:opacity-30",
					variant: "muted-textonly",
					disabled: !canIncrement.value,
					tabindex: "-1",
					onClick: _cache[5] || (_cache[5] = ($event) => modelValue.value = clamp(modelValue.value + _ctx.step))
				}, {
					default: withCtx(() => _cache[7] || (_cache[7] = [createBaseVNode("i", { class: "pi pi-plus" }, null, -1)])),
					_: 1
				}, 8, ["aria-label", "disabled"])) : createCommentVNode("", true)
			], 512);
		};
	}
});
//#endregion
export { ScrubableNumberInput_default as t };

//# sourceMappingURL=ScrubableNumberInput-B5dNKiiS.js.map