const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SubscriptionPanelContentWorkspace-gnimN162.js","./vendor-primevue-Dnp2bJ8y.js","./rolldown-runtime-DBfy44LZ.js","./vendor-vue-core-Ba0aGEmU.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-DKx-VcuC.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-i18n-CQIJzQYM.js","./vendor-sentry-Dn2jSJwd.js","./vendor-vueuse--4MZqvDu.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-DifTE-W9.js","./i18n-1Rh80DIx.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-mBVaC-eN.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./api-DZnjKRFN.js","./vendor-yjs-CLwSweDd.js","./widget-W78njY6p.js","./colorUtil-D_gLWYA0.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-MPqv8vkx.js","./useErrorHandling-DtKxKYzs.js","./useExternalLink-DB_su3zs.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BaQ5ErdO.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-Xq2eOfQ2.js","./widgetTypes-DxLkDLQG.js","./markdownRendererUtil-uFQ2wi0y.js","./tierBenefits-0VXcca6t.js","./SubscriptionPanelContentWorkspace-C5dqhK09.js","./useWorkspaceUI-Csp9D5DA.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css","./SubscriptionPanelContentWorkspace-BbYEEdbz.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload, ot as script } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, L as defineAsyncComponent, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Y as onBeforeUnmount, Z as onMounted, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, nt as renderList } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useFeatureFlags } from "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { $i as getTierCredits, Ai as useSubscriptionDialog, Oi as useAuthActions, Qi as TIER_TO_KEY, Xi as DEFAULT_TIER_KEY, ji as useSubscription, ki as useBillingContext, ta as getTierPrice } from "./dialogService-DKx-VcuC.js";
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
import { t as useExternalLink } from "./useExternalLink-DB_su3zs.js";
import { t as CloudBadge_default } from "./CloudBadge-0cQsiJvd.js";
import { t as SubscribeButton_default } from "./SubscribeButton-Cj9v7eqK.js";
import { n as useSubscriptionCredits, r as useSubscriptionActions, t as getCommonTierBenefits } from "./tierBenefits-0VXcca6t.js";
//#region src/platform/cloud/subscription/components/SubscriptionPanelContentLegacy.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "grow overflow-auto" };
var _hoisted_2$1 = { class: "rounded-2xl border border-interface-stroke p-6" };
var _hoisted_3$1 = { class: "flex items-center justify-between gap-2" };
var _hoisted_4$1 = { class: "flex flex-col gap-2" };
var _hoisted_5$1 = { class: "text-sm font-bold text-text-primary" };
var _hoisted_6$1 = { class: "flex items-baseline gap-1 font-inter font-semibold" };
var _hoisted_7$1 = { class: "text-2xl" };
var _hoisted_8 = { class: "text-base" };
var _hoisted_9 = {
	key: 0,
	class: "text-sm text-text-secondary"
};
var _hoisted_10 = { class: "flex flex-col gap-6 pt-9 lg:flex-row" };
var _hoisted_11 = { class: "flex shrink-0 flex-col" };
var _hoisted_12 = { class: "flex flex-col gap-3" };
var _hoisted_13 = { class: "flex flex-col gap-2" };
var _hoisted_14 = { class: "text-sm text-muted" };
var _hoisted_15 = {
	key: 1,
	class: "text-2xl font-bold"
};
var _hoisted_16 = { class: "text-sm text-muted" };
var _hoisted_17 = { class: "pr-4 text-left align-middle font-bold" };
var _hoisted_18 = { key: 1 };
var _hoisted_19 = ["title"];
var _hoisted_20 = { class: "pr-4 text-left align-middle font-bold" };
var _hoisted_21 = { key: 1 };
var _hoisted_22 = ["title"];
var _hoisted_23 = { class: "flex flex-col gap-3" };
var _hoisted_24 = {
	href: "https://platform.comfy.org/profile/usage",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "text-sm text-muted underline"
};
var _hoisted_25 = { class: "flex flex-col gap-2" };
var _hoisted_26 = { class: "text-sm text-text-primary" };
var _hoisted_27 = { class: "flex flex-col gap-0" };
var _hoisted_28 = {
	key: 0,
	class: "pi pi-check text-xs text-text-primary"
};
var _hoisted_29 = {
	key: 1,
	class: "text-sm font-normal whitespace-nowrap text-text-primary"
};
var _hoisted_30 = { class: "text-sm text-muted" };
var _hoisted_31 = { class: "flex items-center gap-2 py-4" };
var _hoisted_32 = {
	href: "https://www.comfy.org/cloud/pricing",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "text-sm text-muted underline hover:opacity-80"
};
var PENDING_TOPUP_KEY = "pending_topup_timestamp";
var TOPUP_EXPIRY_MS = 300 * 1e3;
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanelContentLegacy.vue
var SubscriptionPanelContentLegacy_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanelContentLegacy",
	setup(__props) {
		const authActions = useAuthActions();
		const { t, n } = useI18n();
		const { isActiveSubscription, isCancelled, isFreeTier, formattedRenewalDate, formattedEndDate, subscriptionTier, subscriptionTierName, subscriptionStatus, isYearlySubscription } = useSubscription();
		const { show: showSubscriptionDialog, showPricingTable } = useSubscriptionDialog();
		const tierKey = computed(() => {
			const tier = subscriptionTier.value;
			if (!tier) return DEFAULT_TIER_KEY;
			return TIER_TO_KEY[tier] ?? "standard";
		});
		const tierPrice = computed(() => getTierPrice(tierKey.value, isYearlySubscription.value));
		const refillsDate = computed(() => {
			if (!subscriptionStatus.value?.renewal_date) return "";
			const date = new Date(subscriptionStatus.value.renewal_date);
			const day = String(date.getDate()).padStart(2, "0");
			return `${String(date.getMonth() + 1).padStart(2, "0")}/${day}/${String(date.getFullYear()).slice(-2)}`;
		});
		const creditsRemainingLabel = computed(() => isYearlySubscription.value ? t("subscription.creditsRemainingThisYear", { date: refillsDate.value }, { escapeParameter: false }) : t("subscription.creditsRemainingThisMonth", { date: refillsDate.value }, { escapeParameter: false }));
		const planTotalCredits = computed(() => {
			const credits = getTierCredits(tierKey.value);
			if (credits === null) return "—";
			return n(isYearlySubscription.value ? credits * 12 : credits);
		});
		const includedCreditsDisplay = computed(() => `${monthlyBonusCredits.value} / ${planTotalCredits.value}`);
		const tierBenefits = computed(() => getCommonTierBenefits(tierKey.value, t, n));
		const { totalCredits, monthlyBonusCredits, prepaidCredits, isLoadingBalance } = useSubscriptionCredits();
		const { handleAddApiCredits, handleRefresh } = useSubscriptionActions();
		function handleUpgradeToAddCredits() {
			showPricingTable();
		}
		function handleWindowFocus() {
			const timestampStr = localStorage.getItem(PENDING_TOPUP_KEY);
			if (!timestampStr) return;
			const timestamp = parseInt(timestampStr, 10);
			if (Date.now() - timestamp > TOPUP_EXPIRY_MS) {
				localStorage.removeItem(PENDING_TOPUP_KEY);
				return;
			}
			handleRefresh();
			localStorage.removeItem(PENDING_TOPUP_KEY);
		}
		onMounted(() => {
			window.addEventListener("focus", handleWindowFocus);
		});
		onBeforeUnmount(() => {
			window.removeEventListener("focus", handleWindowFocus);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_3$1, [
				createBaseVNode("div", _hoisted_4$1, [
					createBaseVNode("div", _hoisted_5$1, toDisplayString(unref(subscriptionTierName)), 1),
					createBaseVNode("div", _hoisted_6$1, [createBaseVNode("span", _hoisted_7$1, "$" + toDisplayString(tierPrice.value), 1), createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("subscription.perMonth")), 1)]),
					unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", _hoisted_9, [unref(isCancelled) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.expiresDate", { date: unref(formattedEndDate) })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.renewsDate", { date: unref(formattedRenewalDate) })), 1)], 64))])) : createCommentVNode("", true)
				]),
				unref(isActiveSubscription) && !unref(isFreeTier) ? (openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "secondary",
					class: "ml-auto rounded-lg bg-interface-menu-component-surface-selected px-4 py-2 text-sm font-normal text-text-primary",
					onClick: _cache[0] || (_cache[0] = async () => {
						await unref(authActions).accessBillingPortal();
					})
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.manageSubscription")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				unref(isActiveSubscription) ? (openBlock(), createBlock(Button_default, {
					key: 1,
					variant: "primary",
					class: "rounded-lg px-4 py-2 text-sm font-normal text-text-primary",
					onClick: unref(showSubscriptionDialog)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.upgradePlan")), 1)]),
					_: 1
				}, 8, ["onClick"])) : createCommentVNode("", true),
				!unref(isActiveSubscription) ? (openBlock(), createBlock(SubscribeButton_default, {
					key: 2,
					label: _ctx.$t("subscription.subscribeNow"),
					size: "sm",
					fluid: false,
					class: "text-xs",
					onSubscribed: unref(handleRefresh)
				}, null, 8, ["label", "onSubscribed"])) : createCommentVNode("", true)
			])]), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", { class: normalizeClass(unref(cn)("relative flex flex-col gap-6 rounded-2xl p-5", "bg-modal-panel-background")) }, [
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "icon-sm",
					class: "absolute top-4 right-4",
					loading: unref(isLoadingBalance),
					"aria-label": _ctx.$t("subscription.refreshCredits"),
					onClick: unref(handleRefresh)
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-sync text-sm text-text-secondary" }, null, -1)])),
					_: 1
				}, 8, [
					"loading",
					"aria-label",
					"onClick"
				]),
				createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.$t("subscription.totalCredits")), 1), unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script), {
					key: 0,
					width: "8rem",
					height: "2rem"
				})) : (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(totalCredits)), 1))]),
				createBaseVNode("table", _hoisted_16, [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_17, [unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script), {
					key: 0,
					width: "5rem",
					height: "1rem"
				})) : (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(includedCreditsDisplay.value), 1))]), createBaseVNode("td", {
					class: "align-middle",
					title: creditsRemainingLabel.value
				}, toDisplayString(creditsRemainingLabel.value), 9, _hoisted_19)]), createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_20, [unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script), {
					key: 0,
					width: "3rem",
					height: "1rem"
				})) : (openBlock(), createElementBlock("span", _hoisted_21, toDisplayString(unref(prepaidCredits)), 1))]), createBaseVNode("td", {
					class: "align-middle",
					title: _ctx.$t("subscription.creditsYouveAdded")
				}, toDisplayString(_ctx.$t("subscription.creditsYouveAdded")), 9, _hoisted_22)])])]),
				createBaseVNode("div", _hoisted_23, [createBaseVNode("a", _hoisted_24, toDisplayString(_ctx.$t("subscription.viewUsageHistory")), 1), unref(isActiveSubscription) && unref(isFreeTier) ? (openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "gradient",
					class: "min-h-8 w-full rounded-lg p-2 text-sm font-normal",
					onClick: handleUpgradeToAddCredits
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.upgradeToAddCredits")), 1)]),
					_: 1
				})) : unref(isActiveSubscription) ? (openBlock(), createBlock(Button_default, {
					key: 1,
					variant: "secondary",
					class: "min-h-8 rounded-lg bg-interface-menu-component-surface-selected p-2 text-sm font-normal text-text-primary",
					onClick: unref(handleAddApiCredits)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.addCredits")), 1)]),
					_: 1
				}, 8, ["onClick"])) : createCommentVNode("", true)])
			], 2)])]), createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, toDisplayString(_ctx.$t("subscription.yourPlanIncludes")), 1), createBaseVNode("div", _hoisted_27, [(openBlock(true), createElementBlock(Fragment, null, renderList(tierBenefits.value, (benefit) => {
				return openBlock(), createElementBlock("div", {
					key: benefit.key,
					class: "flex items-center gap-2 py-2"
				}, [benefit.type === "feature" ? (openBlock(), createElementBlock("i", _hoisted_28)) : benefit.type === "metric" && benefit.value ? (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(benefit.value), 1)) : createCommentVNode("", true), createBaseVNode("span", _hoisted_30, toDisplayString(benefit.label), 1)]);
			}), 128))])])])]), createBaseVNode("div", _hoisted_31, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-external-link text-muted" }, null, -1)), createBaseVNode("a", _hoisted_32, toDisplayString(_ctx.$t("subscription.viewMoreDetailsPlans")), 1)])]);
		};
	}
}), [["__scopeId", "data-v-3f9f3079"]]);
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "subscription-container h-full" };
var _hoisted_2 = { class: "flex h-full flex-col gap-6" };
var _hoisted_3 = { class: "flex items-center gap-2" };
var _hoisted_4 = { class: "font-inter text-2xl/tight font-semibold" };
var _hoisted_5 = { class: "pt-1" };
var _hoisted_6 = { class: "flex items-center justify-between border-t border-interface-stroke pt-3" };
var _hoisted_7 = { class: "flex gap-2" };
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanel.vue
var SubscriptionPanel_default = /* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanel",
	setup(__props) {
		const SubscriptionPanelContentWorkspace = defineAsyncComponent(() => __vitePreload(() => import("./SubscriptionPanelContentWorkspace-gnimN162.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]), import.meta.url));
		const { flags } = useFeatureFlags();
		const teamWorkspacesEnabled = computed(() => isCloud && flags.teamWorkspacesEnabled);
		const { buildDocsUrl, docsPaths } = useExternalLink();
		const { isActiveSubscription, manageSubscription } = useBillingContext();
		const { isLoadingSupport, handleMessageSupport, handleLearnMoreClick } = useSubscriptionActions();
		const handleInvoiceHistory = async () => {
			await manageSubscription();
		};
		const handleOpenPartnerNodesInfo = () => {
			window.open(buildDocsUrl(docsPaths.partnerNodesPricing, { includeLocale: true }), "_blank");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("span", _hoisted_4, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("subscription.title") : _ctx.$t("subscription.titleUnsubscribed")), 1), createBaseVNode("div", _hoisted_5, [createVNode(CloudBadge_default, {
					"reverse-order": "",
					"background-color": "var(--p-dialog-background)"
				})])]),
				teamWorkspacesEnabled.value ? (openBlock(), createBlock(unref(SubscriptionPanelContentWorkspace), { key: 0 })) : (openBlock(), createBlock(SubscriptionPanelContentLegacy_default, { key: 1 })),
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						class: "text-xs text-text-secondary",
						onClick: unref(handleLearnMoreClick)
					}, {
						default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-question-circle text-xs text-text-secondary" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("subscription.learnMore")), 1)]),
						_: 1
					}, 8, ["onClick"]),
					createVNode(Button_default, {
						variant: "muted-textonly",
						class: "text-xs text-text-secondary",
						onClick: handleOpenPartnerNodesInfo
					}, {
						default: withCtx(() => [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-question-circle text-xs text-text-secondary" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("subscription.partnerNodesCredits")), 1)]),
						_: 1
					}),
					createVNode(Button_default, {
						variant: "muted-textonly",
						class: "text-xs text-text-secondary",
						loading: unref(isLoadingSupport),
						onClick: unref(handleMessageSupport)
					}, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-comment text-xs text-text-secondary" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("subscription.messageSupport")), 1)]),
						_: 1
					}, 8, ["loading", "onClick"])
				]), createVNode(Button_default, {
					variant: "muted-textonly",
					class: "text-xs text-text-secondary",
					onClick: handleInvoiceHistory
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.invoiceHistory")) + " ", 1), _cache[3] || (_cache[3] = createBaseVNode("i", { class: "pi pi-external-link text-xs text-text-secondary" }, null, -1))]),
					_: 1
				})])
			])]);
		};
	}
});
//#endregion
export { SubscriptionPanel_default as default };

//# sourceMappingURL=SubscriptionPanel-D82Et2FB.js.map