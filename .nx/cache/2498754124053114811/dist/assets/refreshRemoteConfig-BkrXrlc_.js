import "./rolldown-runtime-DBfy44LZ.js";
import { a as remoteConfigState, i as remoteConfig } from "./useFeatureFlags-BHjH2vt1.js";
import { r as api } from "./api-kFdESQTE.js";
//#region src/platform/remoteConfig/refreshRemoteConfig.ts
/**
* Loads remote configuration from the backend /features endpoint
* and updates the reactive remoteConfig ref.
*
* Sets remoteConfigState to:
* - 'anonymous' when loaded without auth
* - 'authenticated' when loaded with auth
* - 'error' when load fails
*/
async function refreshRemoteConfig(options = {}) {
	const { useAuth = true } = options;
	try {
		const response = useAuth ? await api.fetchApi("/features", { cache: "no-store" }) : await fetch("/api/features", { cache: "no-store" });
		if (response.ok) {
			const config = await response.json();
			window.__CONFIG__ = config;
			remoteConfig.value = config;
			remoteConfigState.value = useAuth ? "authenticated" : "anonymous";
			return;
		}
		console.warn("Failed to load remote config:", response.statusText);
		if (response.status === 401 || response.status === 403) {
			window.__CONFIG__ = {};
			remoteConfig.value = {};
			remoteConfigState.value = "error";
		}
	} catch (error) {
		console.error("Failed to fetch remote config:", error);
		window.__CONFIG__ = {};
		remoteConfig.value = {};
		remoteConfigState.value = "error";
	}
}
//#endregion
export { refreshRemoteConfig as t };

//# sourceMappingURL=refreshRemoteConfig-BkrXrlc_.js.map