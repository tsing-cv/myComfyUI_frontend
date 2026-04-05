import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
import { i as remoteConfig } from "./useFeatureFlags-BaQ5ErdO.js";
import { $i as getTierCredits } from "./dialogService-DKx-VcuC.js";
//#region src/platform/cloud/onboarding/composables/useFreeTierOnboarding.ts
function useFreeTierOnboarding() {
	const showEmailForm = ref(false);
	const freeTierCredits = computed(() => getTierCredits("free"));
	const isFreeTierEnabled = computed(() => remoteConfig.value.new_free_tier_subscriptions ?? false);
	function switchToEmailForm() {
		showEmailForm.value = true;
	}
	function switchToSocialLogin() {
		showEmailForm.value = false;
	}
	return {
		showEmailForm,
		freeTierCredits,
		isFreeTierEnabled,
		switchToEmailForm,
		switchToSocialLogin
	};
}
//#endregion
//#region src/platform/cloud/onboarding/utils/previousFullPath.ts
var decodeQueryParam = (value) => {
	try {
		return decodeURIComponent(value);
	} catch {
		return null;
	}
};
var isSafeInternalRedirectPath = (path) => {
	return path.startsWith("/") && !path.startsWith("//");
};
var getSafePreviousFullPath = (query) => {
	const raw = query.previousFullPath;
	const value = Array.isArray(raw) ? raw[0] : raw;
	if (!value) return null;
	const decoded = decodeQueryParam(value);
	if (!decoded) return null;
	return isSafeInternalRedirectPath(decoded) ? decoded : null;
};
//#endregion
export { useFreeTierOnboarding as n, getSafePreviousFullPath as t };

//# sourceMappingURL=previousFullPath-BbhGVBA_.js.map