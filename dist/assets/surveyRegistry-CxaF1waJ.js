import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed } from "./vendor-vue-core-Ba0aGEmU.js";
import { B as useStorage } from "./vendor-vueuse--4MZqvDu.js";
//#region src/platform/surveys/useFeatureUsageTracker.ts
var STORAGE_KEY = "Comfy.FeatureUsage";
/**
* Tracks feature usage for survey eligibility.
* Persists to localStorage.
*/
function useFeatureUsageTracker(featureId) {
	const usageData = useStorage(STORAGE_KEY, {});
	const usage = computed(() => usageData.value[featureId]);
	const useCount = computed(() => usage.value?.useCount ?? 0);
	function trackUsage() {
		const now = Date.now();
		const existing = usageData.value[featureId];
		usageData.value[featureId] = {
			useCount: (existing?.useCount ?? 0) + 1,
			firstUsed: existing?.firstUsed ?? now,
			lastUsed: now
		};
	}
	function reset() {
		delete usageData.value[featureId];
	}
	return {
		usage,
		useCount,
		trackUsage,
		reset
	};
}
//#endregion
//#region src/platform/surveys/surveyRegistry.ts
/**
* Registry of all feature surveys.
* Add new surveys here when targeting specific features for feedback.
*/
var FEATURE_SURVEYS = { "node-search": {
	featureId: "node-search",
	typeformId: "goZLqjKL",
	triggerThreshold: 3,
	delayMs: 5e3
} };
function getSurveyConfig(featureId) {
	return FEATURE_SURVEYS[featureId];
}
function getEnabledSurveys() {
	return Object.values(FEATURE_SURVEYS).filter((config) => config.enabled !== false);
}
//#endregion
export { getSurveyConfig as n, useFeatureUsageTracker as r, getEnabledSurveys as t };

//# sourceMappingURL=surveyRegistry-CxaF1waJ.js.map