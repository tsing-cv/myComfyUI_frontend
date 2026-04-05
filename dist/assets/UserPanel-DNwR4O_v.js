import "./rolldown-runtime-DBfy44LZ.js";
import { M as script, tt as script$1 } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, at as resolveDirective, et as openBlock, it as resolveComponent, j as createElementBlock, k as createBlock, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Mi as useCurrentUser, t as useDialogService } from "./dialogService-DKx-VcuC.js";
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
import { t as UserAvatar_default } from "./UserAvatar-DcGdl_le.js";
//#region src/components/dialog/content/setting/UserPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "user-settings-container h-full" };
var _hoisted_2 = { class: "flex h-full flex-col" };
var _hoisted_3 = { class: "mb-2 text-2xl font-bold" };
var _hoisted_4 = {
	key: 0,
	class: "flex flex-col gap-2"
};
var _hoisted_5 = { class: "flex flex-col gap-0.5" };
var _hoisted_6 = { class: "font-medium" };
var _hoisted_7 = { class: "text-muted" };
var _hoisted_8 = { class: "flex flex-col gap-0.5" };
var _hoisted_9 = { class: "font-medium" };
var _hoisted_10 = { class: "text-muted" };
var _hoisted_11 = { class: "flex flex-col gap-0.5" };
var _hoisted_12 = { class: "font-medium" };
var _hoisted_13 = { class: "flex items-center gap-1 text-muted" };
var _hoisted_14 = {
	key: 2,
	class: "mt-4 flex flex-col gap-2"
};
var _hoisted_15 = {
	key: 1,
	class: "flex flex-col gap-4"
};
var _hoisted_16 = { class: "text-smoke-600" };
//#endregion
//#region src/components/dialog/content/setting/UserPanel.vue
var UserPanel_default = /* @__PURE__ */ defineComponent({
	__name: "UserPanel",
	setup(__props) {
		const dialogService = useDialogService();
		const { loading, isLoggedIn, isApiKeyLogin, isEmailProvider, userDisplayName, userEmail, userPhotoUrl, providerName, providerIcon, handleSignOut, handleSignIn } = useCurrentUser();
		return (_ctx, _cache) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("userSettings.title")), 1),
				createVNode(unref(script), { class: "mb-3" }),
				unref(isLoggedIn) ? (openBlock(), createElementBlock("div", _hoisted_4, [
					unref(userPhotoUrl) ? (openBlock(), createBlock(UserAvatar_default, {
						key: 0,
						"photo-url": unref(userPhotoUrl),
						shape: "circle",
						size: "large"
					}, null, 8, ["photo-url"])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_5, [createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.$t("userSettings.name")), 1), createBaseVNode("div", _hoisted_7, toDisplayString(unref(userDisplayName) || _ctx.$t("userSettings.notSet")), 1)]),
					createBaseVNode("div", _hoisted_8, [createBaseVNode("h3", _hoisted_9, toDisplayString(_ctx.$t("userSettings.email")), 1), createBaseVNode("span", _hoisted_10, toDisplayString(unref(userEmail)), 1)]),
					createBaseVNode("div", _hoisted_11, [createBaseVNode("h3", _hoisted_12, toDisplayString(_ctx.$t("userSettings.provider")), 1), createBaseVNode("div", _hoisted_13, [
						createBaseVNode("i", { class: normalizeClass(unref(providerIcon)) }, null, 2),
						createTextVNode(" " + toDisplayString(unref(providerName)) + " ", 1),
						unref(isEmailProvider) ? withDirectives((openBlock(), createBlock(Button_default, {
							key: 0,
							variant: "muted-textonly",
							size: "icon-sm",
							onClick: _cache[0] || (_cache[0] = ($event) => unref(dialogService).showUpdatePasswordDialog())
						}, {
							default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-pen-to-square" }, null, -1)])),
							_: 1
						})), [[_directive_tooltip, {
							value: _ctx.$t("userSettings.updatePassword"),
							showDelay: 300
						}]]) : createCommentVNode("", true)
					])]),
					unref(loading) ? (openBlock(), createBlock(unref(script$1), {
						key: 1,
						class: "mt-4 size-8",
						style: { "--pc-spinner-color": "#000" }
					})) : (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(Button_default, {
						class: "w-32",
						variant: "secondary",
						onClick: unref(handleSignOut)
					}, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-sign-out" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("auth.signOut.signOut")), 1)]),
						_: 1
					}, 8, ["onClick"]), !unref(isApiKeyLogin) ? (openBlock(), createBlock(_component_i18n_t, {
						key: 0,
						keypath: "auth.deleteAccount.contactSupport",
						tag: "p",
						class: "text-sm text-muted"
					}, {
						email: withCtx(() => _cache[3] || (_cache[3] = [createBaseVNode("a", {
							href: "mailto:support@comfy.org",
							class: "underline"
						}, "support@comfy.org", -1)])),
						_: 1
					})) : createCommentVNode("", true)]))
				])) : (openBlock(), createElementBlock("div", _hoisted_15, [createBaseVNode("p", _hoisted_16, toDisplayString(_ctx.$t("auth.login.title")), 1), createVNode(Button_default, {
					class: "w-52",
					variant: "primary",
					loading: unref(loading),
					onClick: unref(handleSignIn)
				}, {
					default: withCtx(() => [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-user" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("auth.login.signInOrSignUp")), 1)]),
					_: 1
				}, 8, ["loading", "onClick"])]))
			])]);
		};
	}
});
//#endregion
export { UserPanel_default as default };

//# sourceMappingURL=UserPanel-DNwR4O_v.js.map