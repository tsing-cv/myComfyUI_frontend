import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, It as toValue, Z as onMounted, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { $i as getTierCredits, Ni as useCommandStore, Oi as useAuthActions, ea as getTierFeatures, ki as useBillingContext, nt as formatCreditsFromCents, t as useDialogService } from "./dialogService-DKx-VcuC.js";
//#region src/platform/cloud/subscription/composables/useSubscriptionActions.ts
/**
* Composable for handling subscription panel actions and loading states
*/
function useSubscriptionActions() {
	const dialogService = useDialogService();
	const authActions = useAuthActions();
	const commandStore = useCommandStore();
	const telemetry = useTelemetry();
	const { fetchStatus } = useBillingContext();
	const isLoadingSupport = ref(false);
	onMounted(() => {
		handleRefresh();
	});
	const handleAddApiCredits = () => {
		dialogService.showTopUpCreditsDialog();
	};
	const handleMessageSupport = async () => {
		try {
			isLoadingSupport.value = true;
			if (isCloud) telemetry?.trackHelpResourceClicked({
				resource_type: "help_feedback",
				is_external: true,
				source: "subscription"
			});
			await commandStore.execute("Comfy.ContactSupport");
		} catch (error) {
			console.error("[useSubscriptionActions] Error contacting support:", error);
		} finally {
			isLoadingSupport.value = false;
		}
	};
	const handleRefresh = async () => {
		try {
			await Promise.all([authActions.fetchBalance(), fetchStatus()]);
		} catch (error) {
			console.error("[useSubscriptionActions] Error refreshing data:", error);
		}
	};
	const handleLearnMoreClick = () => {
		window.open("https://docs.comfy.org/get_started/cloud", "_blank");
	};
	return {
		isLoadingSupport,
		handleAddApiCredits,
		handleMessageSupport,
		handleRefresh,
		handleLearnMoreClick
	};
}
//#endregion
//#region src/platform/cloud/subscription/composables/useSubscriptionCredits.ts
/**
* Composable for handling subscription credit calculations and formatting.
*
* Uses useBillingContext which automatically selects the correct billing source:
* - If team workspaces feature is disabled: uses legacy (/customers)
* - If team workspaces feature is enabled:
*   - Personal workspace: uses legacy (/customers)
*   - Team workspace: uses workspace (/billing)
*/
/**
* Formats a cent value to display credits.
* Backend returns cents despite the *_micros naming convention.
*/
function formatBalance(maybeCents, locale) {
	return formatCreditsFromCents({
		cents: maybeCents ?? 0,
		locale,
		numberOptions: {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}
	});
}
function useSubscriptionCredits() {
	const billingContext = useBillingContext();
	const { locale } = useI18n();
	return {
		totalCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.amountMicros, locale.value);
		}),
		monthlyBonusCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.cloudCreditBalanceMicros, locale.value);
		}),
		prepaidCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.prepaidBalanceMicros, locale.value);
		}),
		isLoadingBalance: computed(() => toValue(billingContext.isLoading))
	};
}
//#endregion
//#region src/platform/cloud/subscription/utils/tierBenefits.ts
function getCommonTierBenefits(key, t, n) {
	const benefits = [];
	const isFree = key === "free";
	if (isFree) {
		const credits = getTierCredits(key);
		if (credits !== null) benefits.push({
			key: "monthlyCredits",
			type: "metric",
			value: n(credits),
			label: t("subscription.monthlyCreditsLabel")
		});
	}
	benefits.push({
		key: "maxDuration",
		type: "metric",
		value: t(`subscription.maxDuration.${key}`),
		label: t("subscription.maxDurationLabel")
	});
	benefits.push({
		key: "gpu",
		type: "feature",
		label: t("subscription.gpuLabel")
	});
	if (!isFree) benefits.push({
		key: "addCredits",
		type: "feature",
		label: t("subscription.addCreditsLabel")
	});
	if (getTierFeatures(key).customLoRAs) benefits.push({
		key: "customLoRAs",
		type: "feature",
		label: t("subscription.customLoRAsLabel")
	});
	return benefits;
}
//#endregion
export { useSubscriptionCredits as n, useSubscriptionActions as r, getCommonTierBenefits as t };

//# sourceMappingURL=tierBenefits-0VXcca6t.js.map