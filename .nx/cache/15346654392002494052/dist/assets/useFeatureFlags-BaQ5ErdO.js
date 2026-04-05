import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, Dt as reactive, Ot as readonly, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { Qt as getDevOverride, r as api } from "./api-DZnjKRFN.js";
//#region src/platform/remoteConfig/remoteConfig.ts
/**
* Remote configuration service
*
* Fetches configuration from the server at runtime, enabling:
* - Feature flags without rebuilding
* - Server-side feature discovery
* - Version compatibility management
* - Avoiding vendor lock-in for native apps
*
* This module is tree-shaken in OSS builds.
*/
/**
* Current load state of remote configuration
*/
var remoteConfigState = ref("unloaded");
/**
* Whether the authenticated config has been loaded.
* Use this to gate access to user-specific feature flags like teamWorkspacesEnabled.
*/
var isAuthenticatedConfigLoaded = computed(() => remoteConfigState.value === "authenticated");
/**
* Reactive remote configuration
* Updated whenever config is loaded from the server
*/
var remoteConfig = ref({});
function configValueOrDefault(remoteConfig, key, defaultValue) {
	return remoteConfig[key] || defaultValue;
}
//#endregion
//#region src/composables/useFeatureFlags.ts
/**
* Known server feature flags (top-level, not extensions)
*/
var ServerFeatureFlag = /* @__PURE__ */ function(ServerFeatureFlag) {
	ServerFeatureFlag["SUPPORTS_PREVIEW_METADATA"] = "supports_preview_metadata";
	ServerFeatureFlag["MAX_UPLOAD_SIZE"] = "max_upload_size";
	ServerFeatureFlag["MANAGER_SUPPORTS_V4"] = "extension.manager.supports_v4";
	ServerFeatureFlag["MODEL_UPLOAD_BUTTON_ENABLED"] = "model_upload_button_enabled";
	ServerFeatureFlag["ASSET_RENAME_ENABLED"] = "asset_rename_enabled";
	ServerFeatureFlag["PRIVATE_MODELS_ENABLED"] = "private_models_enabled";
	ServerFeatureFlag["ONBOARDING_SURVEY_ENABLED"] = "onboarding_survey_enabled";
	ServerFeatureFlag["LINEAR_TOGGLE_ENABLED"] = "linear_toggle_enabled";
	ServerFeatureFlag["TEAM_WORKSPACES_ENABLED"] = "team_workspaces_enabled";
	ServerFeatureFlag["USER_SECRETS_ENABLED"] = "user_secrets_enabled";
	ServerFeatureFlag["NODE_REPLACEMENTS"] = "node_replacements";
	ServerFeatureFlag["NODE_LIBRARY_ESSENTIALS_ENABLED"] = "node_library_essentials_enabled";
	ServerFeatureFlag["WORKFLOW_SHARING_ENABLED"] = "workflow_sharing_enabled";
	ServerFeatureFlag["COMFYHUB_UPLOAD_ENABLED"] = "comfyhub_upload_enabled";
	ServerFeatureFlag["COMFYHUB_PROFILE_GATE_ENABLED"] = "comfyhub_profile_gate_enabled";
	return ServerFeatureFlag;
}({});
/**
* Resolves a feature flag value with dev override > remoteConfig > serverFeature priority.
*/
function resolveFlag(flagKey, remoteConfigValue, defaultValue) {
	const override = /* @__PURE__ */ getDevOverride(flagKey);
	if (override !== void 0) return override;
	return remoteConfigValue ?? api.getServerFeature(flagKey, defaultValue);
}
/**
* Composable for reactive access to server-side feature flags
*/
function useFeatureFlags() {
	const flags = reactive({
		get supportsPreviewMetadata() {
			return api.getServerFeature(ServerFeatureFlag.SUPPORTS_PREVIEW_METADATA);
		},
		get maxUploadSize() {
			return api.getServerFeature(ServerFeatureFlag.MAX_UPLOAD_SIZE);
		},
		get supportsManagerV4() {
			return api.getServerFeature(ServerFeatureFlag.MANAGER_SUPPORTS_V4);
		},
		get modelUploadButtonEnabled() {
			return resolveFlag(ServerFeatureFlag.MODEL_UPLOAD_BUTTON_ENABLED, remoteConfig.value.model_upload_button_enabled, false);
		},
		get assetRenameEnabled() {
			return resolveFlag(ServerFeatureFlag.ASSET_RENAME_ENABLED, remoteConfig.value.asset_rename_enabled, false);
		},
		get privateModelsEnabled() {
			return resolveFlag(ServerFeatureFlag.PRIVATE_MODELS_ENABLED, remoteConfig.value.private_models_enabled, false);
		},
		get onboardingSurveyEnabled() {
			return resolveFlag(ServerFeatureFlag.ONBOARDING_SURVEY_ENABLED, remoteConfig.value.onboarding_survey_enabled, false);
		},
		get linearToggleEnabled() {
			return resolveFlag(ServerFeatureFlag.LINEAR_TOGGLE_ENABLED, remoteConfig.value.linear_toggle_enabled, false);
		},
		get teamWorkspacesEnabled() {
			const override = /* @__PURE__ */ getDevOverride(ServerFeatureFlag.TEAM_WORKSPACES_ENABLED);
			if (override !== void 0) return override;
			if (!isCloud) return false;
			if (!isAuthenticatedConfigLoaded.value) return false;
			return remoteConfig.value.team_workspaces_enabled ?? api.getServerFeature(ServerFeatureFlag.TEAM_WORKSPACES_ENABLED, false);
		},
		get userSecretsEnabled() {
			return resolveFlag(ServerFeatureFlag.USER_SECRETS_ENABLED, remoteConfig.value.user_secrets_enabled, false);
		},
		get nodeReplacementsEnabled() {
			return api.getServerFeature(ServerFeatureFlag.NODE_REPLACEMENTS, false);
		},
		get nodeLibraryEssentialsEnabled() {
			return remoteConfig.value.node_library_essentials_enabled ?? api.getServerFeature(ServerFeatureFlag.NODE_LIBRARY_ESSENTIALS_ENABLED, false);
		},
		get workflowSharingEnabled() {
			return resolveFlag(ServerFeatureFlag.WORKFLOW_SHARING_ENABLED, remoteConfig.value.workflow_sharing_enabled, false);
		},
		get comfyHubUploadEnabled() {
			return resolveFlag(ServerFeatureFlag.COMFYHUB_UPLOAD_ENABLED, remoteConfig.value.comfyhub_upload_enabled, false);
		},
		get comfyHubProfileGateEnabled() {
			return resolveFlag(ServerFeatureFlag.COMFYHUB_PROFILE_GATE_ENABLED, remoteConfig.value.comfyhub_profile_gate_enabled, false);
		}
	});
	const featureFlag = (featurePath, defaultValue) => computed(() => api.getServerFeature(featurePath, defaultValue));
	return {
		flags: readonly(flags),
		featureFlag
	};
}
//#endregion
export { remoteConfigState as a, remoteConfig as i, useFeatureFlags as n, configValueOrDefault as r, ServerFeatureFlag as t };

//# sourceMappingURL=useFeatureFlags-BaQ5ErdO.js.map