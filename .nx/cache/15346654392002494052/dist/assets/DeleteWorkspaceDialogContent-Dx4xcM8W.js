import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
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
import { Li as useTeamWorkspaceStore } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
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
//#region src/platform/workspace/components/dialogs/DeleteWorkspaceDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[360px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/DeleteWorkspaceDialogContent.vue
var DeleteWorkspaceDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "DeleteWorkspaceDialogContent",
	props: {
		workspaceId: {},
		workspaceName: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const toast = useToast();
		const dialogStore = useDialogStore();
		const workspaceStore = useTeamWorkspaceStore();
		const loading = ref(false);
		function onCancel() {
			dialogStore.closeDialog({ key: "delete-workspace" });
		}
		async function onDelete() {
			loading.value = true;
			try {
				await workspaceStore.deleteWorkspace(__props.workspaceId);
				dialogStore.closeDialog({ key: "delete-workspace" });
				window.location.reload();
			} catch (error) {
				console.error("[DeleteWorkspaceDialog] Failed to delete workspace:", error);
				toast.add({
					severity: "error",
					summary: t("workspacePanel.toast.failedToDeleteWorkspace"),
					detail: error instanceof Error ? error.message : t("g.unknownError")
				});
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("workspacePanel.deleteDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onCancel
				}, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.workspaceName ? _ctx.$t("workspacePanel.deleteDialog.messageWithName", { name: _ctx.workspaceName }) : _ctx.$t("workspacePanel.deleteDialog.message")), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "destructive",
					size: "lg",
					loading: loading.value,
					onClick: onDelete
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.delete")), 1)]),
					_: 1
				}, 8, ["loading"])])
			]);
		};
	}
});
//#endregion
export { DeleteWorkspaceDialogContent_default as default };

//# sourceMappingURL=DeleteWorkspaceDialogContent-Dx4xcM8W.js.map