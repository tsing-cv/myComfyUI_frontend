import "./rolldown-runtime-DBfy44LZ.js";
import { O as createBaseVNode, R as defineComponent, Ut as toDisplayString, et as openBlock, j as createElementBlock } from "./vendor-vue-core-Ba0aGEmU.js";
//#region src/platform/cloud/subscription/components/SubscriptionBenefits.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col items-start gap-0 self-stretch" };
var _hoisted_2 = { class: "flex items-center gap-2 py-2" };
var _hoisted_3 = { class: "text-sm text-text-primary" };
var _hoisted_4 = { class: "flex items-center gap-2 py-2" };
var _hoisted_5 = { class: "text-sm text-text-primary" };
var _hoisted_6 = { class: "flex items-center gap-2 py-2" };
var _hoisted_7 = { class: "text-sm text-text-primary" };
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionBenefits.vue
var SubscriptionBenefits_default = /* @__PURE__ */ defineComponent({
	__name: "SubscriptionBenefits",
	props: { isFreeTier: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-check text-xs text-text-primary" }, null, -1)), createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.isFreeTier ? _ctx.$t("subscription.benefits.benefit1FreeTier") : _ctx.$t("subscription.benefits.benefit1")), 1)]),
				createBaseVNode("div", _hoisted_4, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-check text-xs text-text-primary" }, null, -1)), createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.$t("subscription.benefits.benefit2")), 1)]),
				createBaseVNode("div", _hoisted_6, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-check text-xs text-text-primary" }, null, -1)), createBaseVNode("span", _hoisted_7, toDisplayString(_ctx.$t("subscription.benefits.benefit3")), 1)])
			]);
		};
	}
});
//#endregion
export { SubscriptionBenefits_default as t };

//# sourceMappingURL=SubscriptionBenefits-ydWOhZnh.js.map