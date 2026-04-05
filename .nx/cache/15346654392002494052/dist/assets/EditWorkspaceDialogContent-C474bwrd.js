import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, _ as vModelText, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref, vt as withDirectives, y as withKeys } from "./vendor-vue-core-Ba0aGEmU.js";
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
//#region src/platform/workspace/components/dialogs/EditWorkspaceDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full min-w-[400px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "flex flex-col gap-2" };
var _hoisted_7 = { class: "text-sm text-base-foreground" };
var _hoisted_8 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/EditWorkspaceDialogContent.vue
var EditWorkspaceDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "EditWorkspaceDialogContent",
	setup(__props) {
		const { t } = useI18n();
		const toast = useToast();
		const dialogStore = useDialogStore();
		const workspaceStore = useTeamWorkspaceStore();
		const loading = ref(false);
		const newWorkspaceName = ref(workspaceStore.workspaceName);
		const isValidName = computed(() => {
			const name = newWorkspaceName.value.trim();
			return name.length >= 1 && name.length <= 50 && /^[a-zA-Z0-9][a-zA-Z0-9\s\-_'.,()&+]*$/.test(name);
		});
		function onCancel() {
			dialogStore.closeDialog({ key: "edit-workspace" });
		}
		async function onSave() {
			if (!isValidName.value) return;
			loading.value = true;
			try {
				await workspaceStore.updateWorkspaceName(newWorkspaceName.value.trim());
				dialogStore.closeDialog({ key: "edit-workspace" });
				toast.add({
					severity: "success",
					summary: t("workspacePanel.toast.workspaceUpdated.title"),
					detail: t("workspacePanel.toast.workspaceUpdated.message"),
					life: 5e3
				});
			} catch (error) {
				console.error("[EditWorkspaceDialog] Failed to update workspace:", error);
				toast.add({
					severity: "error",
					summary: t("workspacePanel.toast.failedToUpdateWorkspace"),
					detail: error instanceof Error ? error.message : t("g.unknownError")
				});
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("workspacePanel.editWorkspaceDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onCancel
				}, _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("label", _hoisted_7, toDisplayString(_ctx.$t("workspacePanel.editWorkspaceDialog.nameLabel")), 1), withDirectives(createBaseVNode("input", {
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWorkspaceName.value = $event),
					type: "text",
					class: "focus:ring-secondary-foreground w-full rounded-lg border border-border-default bg-transparent px-3 py-2 text-sm text-base-foreground placeholder:text-muted-foreground focus:ring-1 focus:outline-none",
					onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => isValidName.value && onSave(), ["enter"]))
				}, null, 544), [[vModelText, newWorkspaceName.value]])])]),
				createBaseVNode("div", _hoisted_8, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					loading: loading.value,
					disabled: !isValidName.value,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.editWorkspaceDialog.save")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])])
			]);
		};
	}
});
//#endregion
export { EditWorkspaceDialogContent_default as default };

//# sourceMappingURL=EditWorkspaceDialogContent-C474bwrd.js.map