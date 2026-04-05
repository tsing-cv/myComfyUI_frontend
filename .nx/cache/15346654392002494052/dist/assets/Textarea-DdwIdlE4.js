import "./rolldown-runtime-DBfy44LZ.js";
import { G as mergeModels, K as mergeProps, M as createPropsRestProxy, R as defineComponent, Rt as unref, _ as vModelText, et as openBlock, j as createElementBlock, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as cn } from "./src-ZLYFRbHY.js";
//#endregion
//#region src/components/ui/textarea/Textarea.vue
var Textarea_default = /* @__PURE__ */ defineComponent({
	__name: "Textarea",
	props: /* @__PURE__ */ mergeModels({ class: {} }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const restAttrs = createPropsRestProxy(__props, ["class"]);
		const modelValue = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("textarea", mergeProps(restAttrs, {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				class: unref(cn)("flex min-h-16 w-full rounded-lg border-none bg-secondary-background px-3 py-2 text-sm text-base-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-border-default focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", __props.class)
			}), null, 16)), [[vModelText, modelValue.value]]);
		};
	}
});
//#endregion
export { Textarea_default as t };

//# sourceMappingURL=Textarea-DdwIdlE4.js.map