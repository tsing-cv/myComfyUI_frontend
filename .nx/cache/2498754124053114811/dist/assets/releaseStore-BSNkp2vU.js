import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, c as defineStore, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import { O as require_semver } from "./vendor-other-BMn-xt1e.js";
import { n as isDesktop, t as isCloud } from "./types-BqIM6TDt.js";
import { $ as until } from "./vendor-vueuse--4MZqvDu.js";
import { t as axios } from "./vendor-axios-B-zaJ78_.js";
import { mt as isAbortError } from "./api-kFdESQTE.js";
import { Hi as getComfyApiBaseUrl, a as useSettingStore } from "./dialogService-ClaKHdWI.js";
import { O as stringToLocale } from "./formatUtil-CKufMkDg.js";
import { r as useSystemStatsStore } from "./useCopyToClipboard-BfoO2Yv1.js";
//#region src/platform/updates/common/releaseService.ts
var releaseApiClient = axios.create({
	baseURL: getComfyApiBaseUrl(),
	headers: { "Content-Type": "application/json" }
});
var useReleaseService = () => {
	const isLoading = ref(false);
	const error = ref(null);
	watch(() => getComfyApiBaseUrl(), (url) => {
		releaseApiClient.defaults.baseURL = url;
	});
	const handleApiError = (err, context, routeSpecificErrors) => {
		if (!axios.isAxiosError(err)) return err instanceof Error ? `${context}: ${err.message}` : `${context}: Unknown error occurred`;
		const axiosError = err;
		if (axiosError.response) {
			const { status, data } = axiosError.response;
			if (routeSpecificErrors && routeSpecificErrors[status]) return routeSpecificErrors[status];
			switch (status) {
				case 400: return `Bad request: ${data?.message || "Invalid input"}`;
				case 401: return "Unauthorized: Authentication required";
				case 403: return `Forbidden: ${data?.message || "Access denied"}`;
				case 404: return `Not found: ${data?.message || "Resource not found"}`;
				case 500: return `Server error: ${data?.message || "Internal server error"}`;
				default: return `${context}: ${data?.message || axiosError.message}`;
			}
		}
		return `${context}: ${axiosError.message}`;
	};
	const executeApiRequest = async (apiCall, errorContext, routeSpecificErrors) => {
		isLoading.value = true;
		error.value = null;
		try {
			return (await apiCall()).data;
		} catch (err) {
			if (isAbortError(err)) return null;
			error.value = handleApiError(err, errorContext, routeSpecificErrors);
			return null;
		} finally {
			isLoading.value = false;
		}
	};
	const getReleases = async (params, signal) => {
		const endpoint = "/releases";
		return await executeApiRequest(() => releaseApiClient.get(endpoint, {
			params,
			signal
		}), "Failed to get releases", { 400: "Invalid project or version parameter" });
	};
	return {
		isLoading,
		error,
		getReleases
	};
};
//#endregion
//#region src/platform/updates/common/releaseStore.ts
var import_semver = require_semver();
var useReleaseStore = defineStore("release", () => {
	const releases = ref([]);
	const isLoading = ref(false);
	const error = ref(null);
	const releaseService = useReleaseService();
	const systemStatsStore = useSystemStatsStore();
	const settingStore = useSettingStore();
	const currentVersion = computed(() => {
		if (isCloud) return systemStatsStore?.systemStats?.system?.cloud_version ?? "";
		return systemStatsStore?.systemStats?.system?.comfyui_version ?? "";
	});
	const locale = computed(() => settingStore.get("Comfy.Locale"));
	const releaseVersion = computed(() => settingStore.get("Comfy.Release.Version"));
	const releaseStatus = computed(() => settingStore.get("Comfy.Release.Status"));
	const releaseTimestamp = computed(() => settingStore.get("Comfy.Release.Timestamp"));
	const showVersionUpdates = computed(() => settingStore.get("Comfy.Notification.ShowVersionUpdates"));
	const recentRelease = computed(() => {
		return releases.value[0] ?? null;
	});
	const recentReleases = computed(() => {
		return releases.value.slice(0, 3);
	});
	const THREE_DAYS_MS = 4320 * 60 * 1e3;
	const compareVersions = (releaseVersion, currentVer) => {
		if ((0, import_semver.valid)(releaseVersion) && (0, import_semver.valid)(currentVer)) return (0, import_semver.compare)(releaseVersion, currentVer);
		return releaseVersion === currentVer ? 0 : 1;
	};
	const isNewVersionAvailable = computed(() => !!recentRelease.value && compareVersions(recentRelease.value.version, currentVersion.value || "0.0.0") > 0);
	const isLatestVersion = computed(() => !!recentRelease.value && compareVersions(recentRelease.value.version, currentVersion.value || "0.0.0") === 0);
	const hasMediumOrHighAttention = computed(() => {
		const attention = recentRelease.value?.attention;
		return attention === "medium" || attention === "high";
	});
	const shouldShowToast = computed(() => {
		if (!isDesktop || isCloud) return false;
		if (!showVersionUpdates.value) return false;
		if (!isNewVersionAvailable.value) return false;
		if (!hasMediumOrHighAttention.value) return false;
		if (releaseVersion.value === recentRelease.value?.version && ["skipped", "changelog seen"].includes(releaseStatus.value)) return false;
		return true;
	});
	const shouldShowRedDot = computed(() => {
		if (!isDesktop || isCloud) return false;
		if (!showVersionUpdates.value) return false;
		if (!isNewVersionAvailable.value) return false;
		const { version } = recentRelease.value;
		if (releaseVersion.value === version && releaseStatus.value === "changelog seen") return false;
		if (hasMediumOrHighAttention.value) return true;
		if (releaseVersion.value === version && releaseStatus.value === "skipped" && releaseTimestamp.value && Date.now() - releaseTimestamp.value >= THREE_DAYS_MS) return false;
		return true;
	});
	const shouldShowPopup = computed(() => {
		if (!isDesktop && !isCloud) return false;
		if (!showVersionUpdates.value) return false;
		if (!recentRelease.value) return false;
		if (!!(0, import_semver.valid)(currentVersion.value) && !isLatestVersion.value) return false;
		if (releaseVersion.value === recentRelease.value.version && releaseStatus.value === "what's new seen") return false;
		return true;
	});
	async function handleSkipRelease(version) {
		if (version !== recentRelease.value?.version || releaseStatus.value === "changelog seen") return;
		await settingStore.setMany({
			"Comfy.Release.Version": version,
			"Comfy.Release.Status": "skipped",
			"Comfy.Release.Timestamp": Date.now()
		});
	}
	async function handleShowChangelog(version) {
		if (version !== recentRelease.value?.version) return;
		await settingStore.setMany({
			"Comfy.Release.Version": version,
			"Comfy.Release.Status": "changelog seen",
			"Comfy.Release.Timestamp": Date.now()
		});
	}
	async function handleWhatsNewSeen(version) {
		if (version !== recentRelease.value?.version) return;
		await settingStore.setMany({
			"Comfy.Release.Version": version,
			"Comfy.Release.Status": "what's new seen",
			"Comfy.Release.Timestamp": Date.now()
		});
	}
	async function fetchReleases() {
		if (isLoading.value) return;
		if (!isCloud && !showVersionUpdates.value) return;
		if (systemStatsStore.systemStats?.system?.argv?.includes("--disable-api-nodes")) return;
		isLoading.value = true;
		error.value = null;
		try {
			if (!systemStatsStore.systemStats) await until(systemStatsStore.isInitialized);
			const fetchedReleases = await releaseService.getReleases({
				project: isCloud ? "cloud" : "comfyui",
				current_version: currentVersion.value,
				form_factor: systemStatsStore.getFormFactor(),
				locale: stringToLocale(locale.value)
			});
			if (fetchedReleases !== null) releases.value = fetchedReleases;
			else if (releaseService.error.value) error.value = releaseService.error.value;
		} catch (err) {
			error.value = err instanceof Error ? err.message : "Unknown error occurred";
		} finally {
			isLoading.value = false;
		}
	}
	async function initialize() {
		await fetchReleases();
	}
	return {
		releases,
		isLoading,
		error,
		recentRelease,
		recentReleases,
		shouldShowToast,
		shouldShowRedDot,
		shouldShowPopup,
		shouldShowUpdateButton: isNewVersionAvailable,
		handleSkipRelease,
		handleShowChangelog,
		handleWhatsNewSeen,
		fetchReleases,
		initialize
	};
});
//#endregion
export { useReleaseStore as t };

//# sourceMappingURL=releaseStore-BSNkp2vU.js.map