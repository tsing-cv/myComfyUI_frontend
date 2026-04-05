import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, j as createElementBlock, rt as renderSlot, t as RouterView } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { t as GlobalToast_default } from "./GlobalToast-Z87IDfUt.js";
import { t as BaseViewTemplate_default } from "./BaseViewTemplate-DU0C8qed.js";
//#region src/platform/cloud/onboarding/assets/videos/thumbnail.png
var thumbnail_default = "" + new URL("thumbnail-imMA3y7Z.png", import.meta.url).href;
//#endregion
//#region src/platform/cloud/onboarding/assets/videos/video.mp4
var video_default = "" + new URL("video-BvOHf4P9.mp4", import.meta.url).href;
//#endregion
//#region ../../../../../assets/images/comfy-cloud-logo.svg
var comfy_cloud_logo_default = "" + new URL("images/comfy-cloud-logo.svg", import.meta.url).href;
//#endregion
//#region src/platform/cloud/onboarding/components/CloudLogo.vue
var _sfc_main = {};
var _hoisted_1$2 = { class: "mx-auto flex h-[7%] max-h-[70px] w-5/6 items-end" };
var _hoisted_2$2 = ["alt"];
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("img", {
		src: comfy_cloud_logo_default,
		alt: _ctx.$t("subscription.comfyCloudLogo"),
		class: "h-3/4 max-h-10 w-auto"
	}, null, 8, _hoisted_2$2)]);
}
var CloudLogo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/platform/cloud/onboarding/components/CloudTemplateFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "mx-auto flex h-[5%] max-h-[60px] w-5/6 items-start gap-2.5" };
var _hoisted_2$1 = {
	href: "https://www.comfy.org/terms-of-service",
	target: "_blank",
	class: "cursor-pointer text-sm text-gray-600 no-underline"
};
var _hoisted_3$1 = {
	href: "https://www.comfy.org/privacy-policy",
	target: "_blank",
	class: "cursor-pointer text-sm text-gray-600 no-underline"
};
var _hoisted_4$1 = {
	href: "https://support.comfy.org",
	class: "cursor-pointer text-sm text-gray-600 no-underline",
	target: "_blank",
	rel: "noopener noreferrer"
};
//#endregion
//#region src/platform/cloud/onboarding/components/CloudTemplateFooter.vue
var CloudTemplateFooter_default = /* @__PURE__ */ defineComponent({
	__name: "CloudTemplateFooter",
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("footer", _hoisted_1$1, [
				createBaseVNode("a", _hoisted_2$1, toDisplayString(unref(t)("auth.login.termsLink")), 1),
				createBaseVNode("a", _hoisted_3$1, toDisplayString(unref(t)("auth.login.privacyLink")), 1),
				createBaseVNode("a", _hoisted_4$1, toDisplayString(unref(t)("cloudFooter_needHelp")), 1)
			]);
		};
	}
});
//#endregion
//#region src/platform/cloud/onboarding/components/CloudTemplate.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex" };
var _hoisted_2 = { class: "relative hidden flex-1 overflow-hidden bg-black lg:block" };
var _hoisted_3 = ["poster"];
var _hoisted_4 = ["src"];
var _hoisted_5 = { class: "absolute inset-0 flex items-center justify-center text-center text-white" };
var _hoisted_6 = { class: "font-abcrom hero-title font-black uppercase italic" };
var _hoisted_7 = { class: "m-2 text-center text-xl text-white" };
var _hoisted_8 = { class: "m-0 text-center text-xl text-white" };
var _hoisted_9 = { class: "absolute inset-0 flex flex-col justify-end px-14 pb-[64px]" };
var _hoisted_10 = { class: "flex items-center justify-end" };
var _hoisted_11 = { class: "flex items-center gap-3" };
var _hoisted_12 = { class: "text-md text-white" };
//#endregion
//#region src/platform/cloud/onboarding/components/CloudTemplate.vue
var CloudTemplate_default = /* @__PURE__ */ defineComponent({
	__name: "CloudTemplate",
	setup(__props) {
		const { t } = useI18n();
		const handleDownloadClick = () => {
			window.open("https://www.comfy.org/download", "_blank");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(BaseViewTemplate_default, {
				dark: "",
				class: "flex-1"
			}, {
				header: withCtx(() => [createVNode(CloudLogo_default)]),
				footer: withCtx(() => [createVNode(CloudTemplateFooter_default)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("video", {
					class: "absolute inset-0 size-full object-cover",
					autoplay: "",
					muted: "",
					loop: "",
					playsinline: "",
					poster: unref(thumbnail_default)
				}, [createBaseVNode("source", {
					src: unref(video_default),
					type: "video/mp4"
				}, null, 8, _hoisted_4)], 8, _hoisted_3),
				_cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 size-full bg-black/30" }, null, -1)),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("div", null, [
					createBaseVNode("h1", _hoisted_6, toDisplayString(unref(t)("cloudStart_title")), 1),
					createBaseVNode("p", _hoisted_7, toDisplayString(unref(t)("cloudStart_desc")), 1),
					createBaseVNode("p", _hoisted_8, toDisplayString(unref(t)("cloudStart_explain")), 1)
				])]),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("p", _hoisted_12, toDisplayString(unref(t)("cloudStart_wantToRun")), 1), createVNode(Button_default, {
					type: "button",
					class: "h-10 bg-black font-bold text-white",
					variant: "secondary",
					onClick: handleDownloadClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("cloudStart_download")), 1)]),
					_: 1
				})])])])
			])]);
		};
	}
});
//#endregion
//#region src/platform/cloud/onboarding/components/CloudLayoutView.vue
var CloudLayoutView_default = /* @__PURE__ */ defineComponent({
	__name: "CloudLayoutView",
	setup(__props) {
		onMounted(() => {
			document.getElementById("splash-loader")?.remove();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(CloudTemplate_default, null, {
				default: withCtx(() => [createVNode(unref(RouterView))]),
				_: 1
			}), createVNode(GlobalToast_default)], 64);
		};
	}
});
//#endregion
export { CloudLayoutView_default as default };

//# sourceMappingURL=CloudLayoutView-Dmq9Ibsg.js.map