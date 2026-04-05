import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
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
import { ki as useBillingContext } from "./dialogService-DKx-VcuC.js";
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
//#region src/components/dialog/content/subscription/CancelSubscriptionDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[400px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label", "disabled"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/components/dialog/content/subscription/CancelSubscriptionDialogContent.vue
var CancelSubscriptionDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "CancelSubscriptionDialogContent",
	props: { cancelAt: {} },
	setup(__props) {
		const props = __props;
		const { t } = useI18n();
		const dialogStore = useDialogStore();
		const toast = useToast();
		const { cancelSubscription, fetchStatus, subscription } = useBillingContext();
		const isLoading = ref(false);
		const formattedEndDate = computed(() => {
			const dateStr = props.cancelAt ?? subscription.value?.endDate;
			if (!dateStr) return t("subscription.cancelDialog.endOfBillingPeriod");
			return new Date(dateStr).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		});
		const description = computed(() => t("subscription.cancelDialog.description", { date: formattedEndDate.value }));
		function onClose() {
			if (isLoading.value) return;
			dialogStore.closeDialog({ key: "cancel-subscription" });
		}
		async function onConfirmCancel() {
			isLoading.value = true;
			try {
				await cancelSubscription();
				await fetchStatus();
				dialogStore.closeDialog({ key: "cancel-subscription" });
				toast.add({
					severity: "success",
					summary: t("subscription.cancelSuccess"),
					life: 5e3
				});
			} catch (error) {
				toast.add({
					severity: "error",
					summary: t("subscription.cancelDialog.failed"),
					detail: error instanceof Error ? error.message : t("g.unknownError")
				});
			} finally {
				isLoading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("subscription.cancelDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					disabled: isLoading.value,
					onClick: onClose
				}, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(description.value), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					disabled: isLoading.value,
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.cancelDialog.keepSubscription")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(Button_default, {
					variant: "destructive",
					size: "lg",
					loading: isLoading.value,
					onClick: onConfirmCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.cancelDialog.confirmCancel")), 1)]),
					_: 1
				}, 8, ["loading"])])
			]);
		};
	}
});
//#endregion
export { CancelSubscriptionDialogContent_default as default };

//# sourceMappingURL=CancelSubscriptionDialogContent-CCD4DF3B.js.map