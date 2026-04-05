import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { ki as useBillingContext } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
//#region src/platform/workspace/components/dialogs/InviteMemberUpsellDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[512px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/InviteMemberUpsellDialogContent.vue
var InviteMemberUpsellDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "InviteMemberUpsellDialogContent",
	setup(__props) {
		const dialogStore = useDialogStore();
		const { isActiveSubscription, showSubscriptionDialog } = useBillingContext();
		function onDismiss() {
			dialogStore.closeDialog({ key: "invite-member-upsell" });
		}
		function onUpgrade() {
			dialogStore.closeDialog({ key: "invite-member-upsell" });
			showSubscriptionDialog();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.inviteUpsellDialog.titleSingleSeat") : _ctx.$t("workspacePanel.inviteUpsellDialog.titleNotSubscribed")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onDismiss
				}, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.inviteUpsellDialog.messageSingleSeat") : _ctx.$t("workspacePanel.inviteUpsellDialog.messageNotSubscribed")), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onDismiss
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					onClick: onUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.inviteUpsellDialog.upgradeToCreator") : _ctx.$t("workspacePanel.inviteUpsellDialog.viewPlans")), 1)]),
					_: 1
				})])
			]);
		};
	}
});
//#endregion
export { InviteMemberUpsellDialogContent_default as default };

//# sourceMappingURL=InviteMemberUpsellDialogContent-CRLy-2Su.js.map