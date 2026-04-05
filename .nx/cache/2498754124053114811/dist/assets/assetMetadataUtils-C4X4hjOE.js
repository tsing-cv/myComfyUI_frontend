import "./rolldown-runtime-DBfy44LZ.js";
//#region src/platform/assets/utils/assetMetadataUtils.ts
/**
* Type-safe utilities for extracting metadata from assets.
* These utilities check user_metadata first, then metadata, then fallback.
*/
/**
* Helper to get a string property from user_metadata or metadata
*/
function getStringProperty(asset, key) {
	const userValue = asset.user_metadata?.[key];
	if (typeof userValue === "string") return userValue;
	const metaValue = asset.metadata?.[key];
	if (typeof metaValue === "string") return metaValue;
}
/**
* Safely extracts string description from asset metadata
* Checks user_metadata first, then metadata, then returns null
* @param asset - The asset to extract description from
* @returns The description string or null if not present/not a string
*/
function getAssetDescription(asset) {
	return getStringProperty(asset, "description") ?? null;
}
/**
* Extracts base models as an array from asset metadata
* Checks user_metadata first, then metadata, then returns empty array
* @param asset - The asset to extract base models from
* @returns Array of base model strings
*/
function getAssetBaseModels(asset) {
	const baseModel = asset.user_metadata?.base_model ?? asset.metadata?.base_model;
	if (Array.isArray(baseModel)) return baseModel.filter((m) => typeof m === "string");
	if (typeof baseModel === "string" && baseModel) return [baseModel];
	return [];
}
/**
* Gets the display name for an asset
* Checks user_metadata.name, then metadata.name, then display_name, then asset.name
* @param asset - The asset to get display name from
* @returns The display name
*/
function getAssetDisplayName(asset) {
	return getStringProperty(asset, "name") || asset.display_name || asset.name;
}
/**
* Constructs source URL from asset's source_arn
* @param asset - The asset to extract source URL from
* @returns The source URL or null if not present/parseable
*/
function getAssetSourceUrl(asset) {
	if (typeof asset.metadata?.repo_url === "string") return asset.metadata.repo_url;
	const sourceArn = asset.metadata?.source_arn ?? asset.user_metadata?.source_arn;
	if (typeof sourceArn !== "string") return null;
	const civitaiMatch = sourceArn.match(/^civitai:model:(\d+):version:(\d+)(?::file:\d+)?$/);
	if (civitaiMatch) {
		const [, modelId, versionId] = civitaiMatch;
		return `https://civitai.com/models/${modelId}?modelVersionId=${versionId}`;
	}
	return null;
}
/**
* Extracts trigger phrases from asset metadata
* Checks user_metadata first, then metadata, then returns empty array
* @param asset - The asset to extract trigger phrases from
* @returns Array of trigger phrases
*/
function getAssetTriggerPhrases(asset) {
	const phrases = asset.user_metadata?.trained_words ?? asset.metadata?.trained_words;
	if (Array.isArray(phrases)) return phrases.filter((p) => typeof p === "string");
	if (typeof phrases === "string") return [phrases];
	return [];
}
/**
* Extracts additional tags from asset user_metadata
* @param asset - The asset to extract tags from
* @returns Array of user-defined tags
*/
function getAssetAdditionalTags(asset) {
	const tags = asset.user_metadata?.additional_tags;
	if (Array.isArray(tags)) return tags.filter((t) => typeof t === "string");
	return [];
}
/**
* Determines the source name from a URL
* @param url - The source URL
* @returns Human-readable source name
*/
function getSourceName(url) {
	if (url.includes("civitai.com")) return "Civitai";
	if (url.includes("huggingface.co")) return "Hugging Face";
	return "Source";
}
/**
* Extracts the model type from asset tags
* @param asset - The asset to extract model type from
* @returns The model type string or null if not present
*/
function getAssetModelType(asset) {
	return asset.tags?.find((tag) => tag && tag !== "models") ?? null;
}
/**
* Extracts user description from asset user_metadata
* @param asset - The asset to extract user description from
* @returns The user description string or empty string if not present
*/
function getAssetUserDescription(asset) {
	return typeof asset.user_metadata?.user_description === "string" ? asset.user_metadata.user_description : "";
}
/**
* Gets the filename for an asset with fallback chain
* Checks user_metadata.filename first, then metadata.filename, then asset.name
* @param asset - The asset to extract filename from
* @returns The filename string
*/
function getAssetFilename(asset) {
	return getStringProperty(asset, "filename") ?? asset.name;
}
//#endregion
export { getAssetFilename as a, getAssetTriggerPhrases as c, getAssetDisplayName as i, getAssetUserDescription as l, getAssetBaseModels as n, getAssetModelType as o, getAssetDescription as r, getAssetSourceUrl as s, getAssetAdditionalTags as t, getSourceName as u };

//# sourceMappingURL=assetMetadataUtils-C4X4hjOE.js.map