import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, S as Fragment, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref, nt as renderList, o as useRouter } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Oi as useAuthActions } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
//#region src/platform/cloud/onboarding/CloudAuthTimeoutView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-full items-center justify-center p-6" };
var _hoisted_2 = { class: "max-w-[100vw] text-center lg:w-[500px]" };
var _hoisted_3 = { class: "mb-3 text-xl text-text-primary" };
var _hoisted_4 = { class: "mb-5 text-muted" };
var _hoisted_5 = { class: "mb-4 rounded-sm bg-secondary-background px-3 py-2 text-left" };
var _hoisted_6 = { class: "mb-2 text-sm font-semibold text-text-primary" };
var _hoisted_7 = { class: "space-y-1.5 text-sm text-muted" };
var _hoisted_8 = {
	key: 0,
	class: "mb-4 text-left"
};
var _hoisted_9 = {
	key: 0,
	class: "mt-2 rounded-sm border border-muted-background p-4 font-mono text-xs break-all text-muted-foreground"
};
var _hoisted_10 = { class: "mb-5 text-center text-sm text-gray-600" };
var _hoisted_11 = {
	href: "https://support.comfy.org",
	class: "cursor-pointer text-blue-400 no-underline",
	target: "_blank",
	rel: "noopener noreferrer"
};
var _hoisted_12 = { class: "flex flex-col gap-3" };
//#endregion
//#region src/platform/cloud/onboarding/CloudAuthTimeoutView.vue
var CloudAuthTimeoutView_default = /* @__PURE__ */ defineComponent({
	__name: "CloudAuthTimeoutView",
	props: { errorMessage: {} },
	setup(__props) {
		const router = useRouter();
		const { logout } = useAuthActions();
		const showTechnicalDetails = ref(false);
		const handleRestart = async () => {
			await logout();
			await router.replace({ name: "cloud-login" });
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.title")), 1),
				createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.message")), 1),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.troubleshooting")), 1), createBaseVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$tm("cloudOnboarding.authTimeout.causes"), (cause, index) => {
					return openBlock(), createElementBlock("li", {
						key: index,
						class: "flex gap-2"
					}, [_cache[1] || (_cache[1] = createBaseVNode("span", null, "•", -1)), createBaseVNode("span", null, toDisplayString(cause), 1)]);
				}), 128))])]),
				_ctx.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("button", {
					class: "flex w-full items-center justify-between rounded-sm border-0 bg-secondary-background px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-secondary-background-hover",
					onClick: _cache[0] || (_cache[0] = ($event) => showTechnicalDetails.value = !showTechnicalDetails.value)
				}, [createBaseVNode("span", null, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.technicalDetails")), 1), createBaseVNode("i", { class: normalizeClass(["pi", showTechnicalDetails.value ? "pi-chevron-up" : "pi-chevron-down"]) }, null, 2)]), showTechnicalDetails.value ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(_ctx.errorMessage), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true),
				createBaseVNode("p", _hoisted_10, [
					createTextVNode(toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.helpText")) + " ", 1),
					createBaseVNode("a", _hoisted_11, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.supportLink")), 1),
					_cache[2] || (_cache[2] = createTextVNode(". "))
				]),
				createBaseVNode("div", _hoisted_12, [createVNode(Button_default, {
					class: "w-full",
					onClick: handleRestart
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.restart")), 1)]),
					_: 1
				})])
			])]);
		};
	}
});
//#endregion
export { CloudAuthTimeoutView_default as default };

//# sourceMappingURL=CloudAuthTimeoutView-CVqPp7FE.js.map