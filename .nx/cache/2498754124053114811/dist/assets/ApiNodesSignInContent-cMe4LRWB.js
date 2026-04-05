import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import { F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, et as openBlock, it as resolveComponent, j as createElementBlock } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { t as useExternalLink } from "./useExternalLink-CjbQfKLB.js";
//#region src/components/dialog/content/ApiNodesSignInContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-110 max-w-96 flex-col gap-4 p-2" };
var _hoisted_2 = { class: "mb-2 text-2xl font-medium" };
var _hoisted_3 = { class: "mb-4 text-base" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "flex gap-2" };
//#endregion
//#region src/components/dialog/content/ApiNodesSignInContent.vue
var ApiNodesSignInContent_default = /* @__PURE__ */ defineComponent({
	__name: "ApiNodesSignInContent",
	props: {
		apiNodeNames: {},
		onLogin: { type: Function },
		onCancel: { type: Function }
	},
	setup(__props) {
		const { t } = useI18n();
		const { buildDocsUrl } = useExternalLink();
		const handleLearnMoreClick = () => {
			window.open(buildDocsUrl("/tutorials/api-nodes/faq", { includeLocale: true }), "_blank");
		};
		return (_ctx, _cache) => {
			const _component_ApiNodesList = resolveComponent("ApiNodesList");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, toDisplayString(unref(t)("apiNodesSignInDialog.title")), 1),
				createBaseVNode("div", _hoisted_3, toDisplayString(unref(t)("apiNodesSignInDialog.message")), 1),
				createVNode(_component_ApiNodesList, { "node-names": _ctx.apiNodeNames }, null, 8, ["node-names"]),
				createBaseVNode("div", _hoisted_4, [createVNode(Button_default, {
					variant: "textonly",
					onClick: handleLearnMoreClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.learnMore")), 1)]),
					_: 1
				}), createBaseVNode("div", _hoisted_5, [createVNode(Button_default, {
					variant: "secondary",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onCancel?.())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, { onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onLogin?.()) }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.login")), 1)]),
					_: 1
				})])])
			]);
		};
	}
});
//#endregion
export { ApiNodesSignInContent_default as default };

//# sourceMappingURL=ApiNodesSignInContent-cMe4LRWB.js.map