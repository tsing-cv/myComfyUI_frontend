import "./rolldown-runtime-DBfy44LZ.js";
import { T as script, dt as useToast, ot as script$1 } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Y as onBeforeUnmount, Z as onMounted, _t as withCtx, at as resolveDirective, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, nt as renderList, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { $i as getTierCredits, Ai as useSubscriptionDialog, Li as useTeamWorkspaceStore, Qi as TIER_TO_KEY, Ri as workspaceApi, Xi as DEFAULT_TIER_KEY, ki as useBillingContext, n as useBillingOperationStore, na as StatusBadge_default, t as useDialogService, ta as getTierPrice } from "./dialogService-DKx-VcuC.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { n as useSubscriptionCredits, r as useSubscriptionActions, t as getCommonTierBenefits } from "./tierBenefits-0VXcca6t.js";
import { t as useWorkspaceUI } from "./useWorkspaceUI-Csp9D5DA.js";
//#region src/platform/workspace/components/SubscriptionPanelContentWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grow overflow-auto pt-6" };
var _hoisted_2 = {
	key: 0,
	class: "rounded-2xl border border-interface-stroke p-6"
};
var _hoisted_3 = { class: "flex items-center gap-2 py-4 text-muted-foreground" };
var _hoisted_4 = {
	key: 0,
	class: "mb-6 flex gap-1 rounded-2xl border border-warning-background bg-warning-background/20 p-4"
};
var _hoisted_5 = { class: "flex flex-col gap-2" };
var _hoisted_6 = { class: "m-0 pt-1.5 text-sm font-bold text-text-primary" };
var _hoisted_7 = { class: "m-0 text-sm text-text-secondary" };
var _hoisted_8 = { class: "rounded-2xl border border-interface-stroke p-6" };
var _hoisted_9 = { class: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-2" };
var _hoisted_10 = { class: "flex flex-col gap-2" };
var _hoisted_11 = { class: "text-sm font-bold text-text-primary" };
var _hoisted_12 = { class: "text-sm text-text-secondary" };
var _hoisted_13 = {
	key: 1,
	class: "flex flex-col gap-2"
};
var _hoisted_14 = { class: "text-sm font-bold text-text-primary" };
var _hoisted_15 = { class: "text-sm text-text-secondary" };
var _hoisted_16 = { class: "flex flex-col gap-2" };
var _hoisted_17 = { class: "flex items-center gap-2" };
var _hoisted_18 = { class: "text-sm font-bold text-text-primary" };
var _hoisted_19 = { class: "flex items-baseline gap-1 font-inter font-semibold" };
var _hoisted_20 = { class: "text-2xl" };
var _hoisted_21 = { class: "text-base" };
var _hoisted_22 = {
	key: 0,
	class: "flex flex-wrap gap-2 md:ml-auto"
};
var _hoisted_23 = { class: "flex flex-col gap-6 pt-6 lg:flex-row lg:items-stretch" };
var _hoisted_24 = { class: "flex flex-col" };
var _hoisted_25 = { class: "flex h-full flex-col gap-3" };
var _hoisted_26 = { class: "relative flex h-full flex-col justify-between gap-6 rounded-2xl bg-secondary-background p-5" };
var _hoisted_27 = { class: "flex flex-col gap-2" };
var _hoisted_28 = { class: "text-sm text-muted" };
var _hoisted_29 = {
	key: 1,
	class: "text-2xl font-bold"
};
var _hoisted_30 = { class: "text-sm text-muted" };
var _hoisted_31 = { class: "pr-4 text-left align-middle font-bold" };
var _hoisted_32 = { key: 1 };
var _hoisted_33 = ["title"];
var _hoisted_34 = { class: "pr-4 text-left align-middle font-bold" };
var _hoisted_35 = { key: 1 };
var _hoisted_36 = ["title"];
var _hoisted_37 = {
	key: 0,
	class: "flex flex-col gap-3"
};
var _hoisted_38 = {
	key: 0,
	class: "flex flex-col gap-2"
};
var _hoisted_39 = { class: "text-sm text-text-primary" };
var _hoisted_40 = { class: "flex flex-col gap-0" };
var _hoisted_41 = {
	key: 0,
	class: "pi pi-check text-xs text-text-primary"
};
var _hoisted_42 = {
	key: 2,
	class: "text-sm font-normal whitespace-nowrap text-text-primary"
};
var _hoisted_43 = { class: "text-sm text-muted" };
var _hoisted_44 = {
	key: 1,
	class: "mt-6 flex items-center justify-between gap-1 rounded-2xl border border-interface-stroke p-6 text-sm"
};
var _hoisted_45 = { class: "flex flex-col gap-2" };
var _hoisted_46 = { class: "m-0 text-sm text-text-primary" };
var _hoisted_47 = { class: "flex flex-col items-end gap-2" };
var _hoisted_48 = { class: "m-0 font-bold" };
var _hoisted_49 = { class: "m-0 text-muted-foreground" };
var _hoisted_50 = {
	key: 2,
	class: "flex items-center gap-2 py-6"
};
var _hoisted_51 = {
	href: "https://www.comfy.org/cloud/pricing",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "text-sm text-muted underline hover:opacity-80"
};
var PENDING_TOPUP_KEY = "pending_topup_timestamp";
var TOPUP_EXPIRY_MS = 300 * 1e3;
//#endregion
//#region src/platform/workspace/components/SubscriptionPanelContentWorkspace.vue
var SubscriptionPanelContentWorkspace_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanelContentWorkspace",
	setup(__props) {
		const { isWorkspaceSubscribed, isInPersonalWorkspace, members } = storeToRefs(useTeamWorkspaceStore());
		const { permissions } = useWorkspaceUI();
		const { t, n } = useI18n();
		const toast = useToast();
		const billingOperationStore = useBillingOperationStore();
		const isSettingUp = computed(() => billingOperationStore.isSettingUp);
		const { isActiveSubscription, isFreeTier: isFreeTierPlan, subscription, showSubscriptionDialog, manageSubscription, fetchStatus, fetchBalance, getMaxSeats } = useBillingContext();
		const { showCancelSubscriptionDialog } = useDialogService();
		const { showPricingTable } = useSubscriptionDialog();
		const isResubscribing = ref(false);
		async function handleResubscribe() {
			isResubscribing.value = true;
			try {
				await workspaceApi.resubscribe();
				toast.add({
					severity: "success",
					summary: t("subscription.resubscribeSuccess"),
					life: 5e3
				});
				await Promise.all([fetchStatus(), fetchBalance()]);
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to resubscribe";
				toast.add({
					severity: "error",
					summary: t("g.error"),
					detail: message
				});
			} finally {
				isResubscribing.value = false;
			}
		}
		const isCancelled = computed(() => !isInPersonalWorkspace.value && (subscription.value?.isCancelled ?? false));
		const showSubscribePrompt = computed(() => {
			if (!permissions.value.canManageSubscription) return false;
			if (isCancelled.value) return false;
			if (isInPersonalWorkspace.value) return !isActiveSubscription.value;
			return !isWorkspaceSubscribed.value;
		});
		const isMemberView = computed(() => !permissions.value.canManageSubscription && !isActiveSubscription.value && !isWorkspaceSubscribed.value);
		const showZeroState = computed(() => showSubscribePrompt.value || isMemberView.value);
		function handleSubscribeWorkspace() {
			showSubscriptionDialog();
		}
		function handleUpgrade() {
			if (isFreeTierPlan.value) showPricingTable();
			else showSubscriptionDialog();
		}
		function handleUpgradeToAddCredits() {
			showPricingTable();
		}
		const subscriptionTier = computed(() => subscription.value?.tier ?? null);
		const isYearlySubscription = computed(() => subscription.value?.duration === "ANNUAL");
		const formattedRenewalDate = computed(() => {
			if (!subscription.value?.renewalDate) return "";
			return new Date(subscription.value.renewalDate).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		});
		const formattedEndDate = computed(() => {
			if (!subscription.value?.endDate) return "";
			return new Date(subscription.value.endDate).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		});
		const subscriptionTierName = computed(() => {
			const tier = subscriptionTier.value;
			if (!tier) return "";
			const baseName = t(`subscription.tiers.${TIER_TO_KEY[tier] ?? "standard"}.name`);
			return isYearlySubscription.value ? t("subscription.tierNameYearly", { name: baseName }) : baseName;
		});
		const planMenu = ref(null);
		const planMenuItems = computed(() => [{
			label: t("subscription.cancelSubscription"),
			icon: "pi pi-times",
			command: () => {
				showCancelSubscriptionDialog(subscription.value?.endDate ?? void 0);
			}
		}]);
		const tierKey = computed(() => {
			const tier = subscriptionTier.value;
			if (!tier) return DEFAULT_TIER_KEY;
			return TIER_TO_KEY[tier] ?? "standard";
		});
		const tierPrice = computed(() => getTierPrice(tierKey.value, isYearlySubscription.value));
		const memberCount = computed(() => members.value.length);
		const nextMonthInvoice = computed(() => memberCount.value * tierPrice.value);
		const refillsDate = computed(() => {
			if (!subscription.value?.renewalDate) return "";
			const date = new Date(subscription.value.renewalDate);
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
		const tierBenefits = computed(() => {
			const key = tierKey.value;
			const benefits = [];
			if (!isInPersonalWorkspace.value) benefits.push({
				key: "members",
				type: "icon",
				label: t("subscription.membersLabel", { count: getMaxSeats(key) }),
				icon: "pi pi-user"
			});
			benefits.push(...getCommonTierBenefits(key, t, n));
			return benefits;
		});
		const { totalCredits, monthlyBonusCredits, prepaidCredits, isLoadingBalance } = useSubscriptionCredits();
		const { handleAddApiCredits, handleRefresh } = useSubscriptionActions();
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
			Promise.all([fetchStatus(), fetchBalance()]);
		});
		onBeforeUnmount(() => {
			window.removeEventListener("focus", handleWindowFocus);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [isSettingUp.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-spin pi-spinner" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("billingOperation.subscriptionProcessing")), 1)])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				isCancelled.value ? (openBlock(), createElementBlock("div", _hoisted_4, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex size-8 shrink-0 items-center justify-center rounded-full text-warning-background" }, [createBaseVNode("i", { class: "pi pi-info-circle" })], -1)), createBaseVNode("div", _hoisted_5, [createBaseVNode("h2", _hoisted_6, toDisplayString(_ctx.$t("subscription.canceledCard.title")), 1), createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.$t("subscription.canceledCard.description", { date: formattedEndDate.value })), 1)])])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_8, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_9, [showSubscribePrompt.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("subscription.workspaceNotSubscribed")), 1), createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("subscription.subscriptionRequiredMessage")), 1)]), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					class: "ml-auto rounded-lg px-4 py-2 text-sm font-normal",
					onClick: handleSubscribeWorkspace
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.subscribeNow")), 1)]),
					_: 1
				})], 64)) : isMemberView.value ? (openBlock(), createElementBlock("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.$t("subscription.workspaceNotSubscribed")), 1), createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("subscription.contactOwnerToSubscribe")), 1)])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", _hoisted_16, [
					createBaseVNode("div", _hoisted_17, [createBaseVNode("span", _hoisted_18, toDisplayString(subscriptionTierName.value), 1), isCancelled.value ? (openBlock(), createBlock(StatusBadge_default, {
						key: 0,
						label: _ctx.$t("subscription.canceled"),
						severity: "warn"
					}, null, 8, ["label"])) : createCommentVNode("", true)]),
					createBaseVNode("div", _hoisted_19, [createBaseVNode("span", _hoisted_20, "$" + toDisplayString(tierPrice.value), 1), createBaseVNode("span", _hoisted_21, toDisplayString(unref(isInPersonalWorkspace) ? _ctx.$t("subscription.usdPerMonth") : _ctx.$t("subscription.usdPerMonthPerMember")), 1)]),
					unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref(cn)("text-sm", isCancelled.value ? "text-warning-background" : "text-text-secondary"))
					}, [isCancelled.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.expiresDate", { date: formattedEndDate.value })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.renewsDate", { date: formattedRenewalDate.value })), 1)], 64))], 2)) : createCommentVNode("", true)
				]), unref(isActiveSubscription) && unref(permissions).canManageSubscription ? (openBlock(), createElementBlock("div", _hoisted_22, [isCancelled.value ? (openBlock(), createBlock(Button_default, {
					key: 0,
					size: "lg",
					variant: "primary",
					class: "rounded-lg px-4 text-sm font-normal",
					loading: isResubscribing.value,
					onClick: handleResubscribe
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.resubscribe")), 1)]),
					_: 1
				}, 8, ["loading"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					!unref(isFreeTierPlan) ? (openBlock(), createBlock(Button_default, {
						key: 0,
						size: "lg",
						variant: "secondary",
						class: "rounded-lg bg-interface-menu-component-surface-selected px-4 text-sm font-normal text-text-primary",
						onClick: unref(manageSubscription)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.managePayment")), 1)]),
						_: 1
					}, 8, ["onClick"])) : createCommentVNode("", true),
					createVNode(Button_default, {
						size: "lg",
						variant: "primary",
						class: "rounded-lg px-4 text-sm font-normal text-text-primary",
						onClick: handleUpgrade
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.upgradePlan")), 1)]),
						_: 1
					}),
					!unref(isFreeTierPlan) ? withDirectives((openBlock(), createBlock(Button_default, {
						key: 1,
						variant: "secondary",
						size: "lg",
						"aria-label": _ctx.$t("g.moreOptions"),
						onClick: _cache[0] || (_cache[0] = ($event) => planMenu.value?.toggle($event))
					}, {
						default: withCtx(() => _cache[4] || (_cache[4] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])),
						_: 1
					}, 8, ["aria-label"])), [[_directive_tooltip, {
						value: _ctx.$t("g.moreOptions"),
						showDelay: 300
					}]]) : createCommentVNode("", true),
					createVNode(unref(script), {
						ref_key: "planMenu",
						ref: planMenu,
						model: planMenuItems.value,
						popup: true
					}, null, 8, ["model"])
				], 64))])) : createCommentVNode("", true)], 64))])]), createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						size: "icon-sm",
						class: "absolute top-4 right-4",
						loading: unref(isLoadingBalance),
						onClick: unref(handleRefresh)
					}, {
						default: withCtx(() => _cache[5] || (_cache[5] = [createBaseVNode("i", { class: "pi pi-sync text-sm text-text-secondary" }, null, -1)])),
						_: 1
					}, 8, ["loading", "onClick"]),
					createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, toDisplayString(_ctx.$t("subscription.totalCredits")), 1), unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script$1), {
						key: 0,
						width: "8rem",
						height: "2rem"
					})) : (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(showZeroState.value ? "0" : unref(totalCredits)), 1))]),
					createBaseVNode("table", _hoisted_30, [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_31, [unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script$1), {
						key: 0,
						width: "5rem",
						height: "1rem"
					})) : (openBlock(), createElementBlock("span", _hoisted_32, toDisplayString(showZeroState.value ? "0 / 0" : includedCreditsDisplay.value), 1))]), createBaseVNode("td", {
						class: "align-middle",
						title: creditsRemainingLabel.value
					}, toDisplayString(creditsRemainingLabel.value), 9, _hoisted_33)]), createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_34, [unref(isLoadingBalance) ? (openBlock(), createBlock(unref(script$1), {
						key: 0,
						width: "3rem",
						height: "1rem"
					})) : (openBlock(), createElementBlock("span", _hoisted_35, toDisplayString(showZeroState.value ? "0" : unref(prepaidCredits)), 1))]), createBaseVNode("td", {
						class: "align-middle",
						title: _ctx.$t("subscription.creditsYouveAdded")
					}, toDisplayString(_ctx.$t("subscription.creditsYouveAdded")), 9, _hoisted_36)])])]),
					unref(isActiveSubscription) && !showZeroState.value && unref(permissions).canTopUp ? (openBlock(), createElementBlock("div", _hoisted_37, [unref(isFreeTierPlan) ? (openBlock(), createBlock(Button_default, {
						key: 0,
						variant: "gradient",
						class: "min-h-8 w-full rounded-lg p-2 text-sm font-normal",
						onClick: handleUpgradeToAddCredits
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.upgradeToAddCredits")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(Button_default, {
						key: 1,
						variant: "secondary",
						class: "min-h-8 rounded-lg bg-interface-menu-component-surface-selected p-2 text-sm font-normal text-text-primary",
						onClick: unref(handleAddApiCredits)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.addCredits")), 1)]),
						_: 1
					}, 8, ["onClick"]))])) : createCommentVNode("", true)
				])])]), unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, toDisplayString(_ctx.$t("subscription.yourPlanIncludes")), 1), createBaseVNode("div", _hoisted_40, [(openBlock(true), createElementBlock(Fragment, null, renderList(tierBenefits.value, (benefit) => {
					return openBlock(), createElementBlock("div", {
						key: benefit.key,
						class: "flex items-center gap-2 py-2"
					}, [benefit.type === "feature" ? (openBlock(), createElementBlock("i", _hoisted_41)) : benefit.type === "icon" && benefit.icon ? (openBlock(), createElementBlock("i", {
						key: 1,
						class: normalizeClass([benefit.icon, "text-xs text-text-primary"])
					}, null, 2)) : benefit.type === "metric" && benefit.value ? (openBlock(), createElementBlock("span", _hoisted_42, toDisplayString(benefit.value), 1)) : createCommentVNode("", true), createBaseVNode("span", _hoisted_43, toDisplayString(benefit.label), 1)]);
				}), 128))])])) : createCommentVNode("", true)])]),
				unref(isActiveSubscription) && !unref(isInPersonalWorkspace) && unref(permissions).canManageSubscription ? (openBlock(), createElementBlock("div", _hoisted_44, [createBaseVNode("div", _hoisted_45, [createBaseVNode("h4", _hoisted_46, toDisplayString(_ctx.$t("subscription.nextMonthInvoice")), 1), createBaseVNode("span", {
					class: "cursor-pointer text-muted-foreground underline",
					onClick: _cache[1] || (_cache[1] = (...args) => unref(manageSubscription) && unref(manageSubscription)(...args))
				}, toDisplayString(_ctx.$t("subscription.invoiceHistory")), 1)]), createBaseVNode("div", _hoisted_47, [createBaseVNode("h4", _hoisted_48, "$" + toDisplayString(nextMonthInvoice.value), 1), createBaseVNode("h5", _hoisted_49, toDisplayString(_ctx.$t("subscription.memberCount", memberCount.value)), 1)])])) : createCommentVNode("", true),
				unref(permissions).canManageSubscription ? (openBlock(), createElementBlock("div", _hoisted_50, [_cache[6] || (_cache[6] = createBaseVNode("i", { class: "pi pi-external-link text-muted" }, null, -1)), createBaseVNode("a", _hoisted_51, toDisplayString(_ctx.$t("subscription.viewMoreDetailsPlans")), 1)])) : createCommentVNode("", true)
			], 64))]);
		};
	}
}), [["__scopeId", "data-v-485c1052"]]);
//#endregion
export { SubscriptionPanelContentWorkspace_default as t };

//# sourceMappingURL=SubscriptionPanelContentWorkspace-C5dqhK09.js.map