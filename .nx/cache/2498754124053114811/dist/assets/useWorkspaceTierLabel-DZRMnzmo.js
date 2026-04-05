import "./rolldown-runtime-DBfy44LZ.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
//#region src/platform/workspace/composables/useWorkspaceTierLabel.ts
var tierKeyMap = {
	FREE: "free",
	STANDARD: "standard",
	CREATOR: "creator",
	PRO: "pro",
	FOUNDER: "founder",
	FOUNDERS_EDITION: "founder"
};
function useWorkspaceTierLabel() {
	const { t } = useI18n();
	function formatTierName(tier, isYearly) {
		if (!tier) return "";
		const key = tierKeyMap[tier];
		if (!key) return "";
		const baseName = t(`subscription.tiers.${key}.name`);
		return isYearly ? t("subscription.tierNameYearly", { name: baseName }) : baseName;
	}
	function getTierLabel(workspace) {
		if (!workspace.isSubscribed) return null;
		if (workspace.subscriptionTier) return formatTierName(workspace.subscriptionTier, false);
		if (!workspace.subscriptionPlan) return null;
		const planSlug = workspace.subscriptionPlan;
		const tierMatch = Object.keys(tierKeyMap).sort((a, b) => b.length - a.length).find((tier) => planSlug === tier || planSlug.startsWith(`${tier}_`));
		if (!tierMatch) return null;
		return formatTierName(tierMatch, planSlug.includes("YEARLY") || planSlug.includes("ANNUAL"));
	}
	return {
		formatTierName,
		getTierLabel
	};
}
//#endregion
export { useWorkspaceTierLabel as t };

//# sourceMappingURL=useWorkspaceTierLabel-DZRMnzmo.js.map