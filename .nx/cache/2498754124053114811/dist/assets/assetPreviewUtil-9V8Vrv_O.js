import "./rolldown-runtime-DBfy44LZ.js";
import { r as api } from "./api-kFdESQTE.js";
import { ti as assetService } from "./dialogService-ClaKHdWI.js";
//#region src/platform/assets/utils/assetPreviewUtil.ts
function isAssetPreviewSupported() {
	return assetService.isAssetAPIEnabled() || api.getServerFeature("assets", false);
}
async function fetchAssets(params) {
	const query = new URLSearchParams(params);
	const res = await api.fetchApi(`/assets?${query}`);
	if (!res.ok) return [];
	return (await res.json()).assets ?? [];
}
function resolvePreviewUrl(asset) {
	if (asset.preview_url) return api.apiURL(asset.preview_url);
	const contentId = asset.preview_id ?? asset.id;
	return api.apiURL(`/assets/${contentId}/content`);
}
/**
* Find an output asset record by content hash, falling back to name.
* On cloud, output filenames are content-hashed; use asset_hash to match.
* On local, filenames are not hashed; use name_contains to match.
*/
async function findOutputAsset(name) {
	const hashMatch = (await fetchAssets({ asset_hash: name })).find((a) => a.asset_hash === name);
	if (hashMatch) return hashMatch;
	return (await fetchAssets({ name_contains: name })).find((a) => a.name === name);
}
async function findServerPreviewUrl(name) {
	try {
		const asset = await findOutputAsset(name);
		if (!asset?.preview_id) return null;
		return resolvePreviewUrl(asset);
	} catch {
		return null;
	}
}
async function persistThumbnail(name, blob) {
	try {
		const asset = await findOutputAsset(name);
		if (!asset || asset.preview_id) return;
		const previewFilename = `${asset.name}_preview.png`;
		const uploaded = await assetService.uploadAssetFromBase64({
			data: await blobToDataUrl(blob),
			name: previewFilename,
			tags: ["output"],
			user_metadata: { filename: previewFilename }
		});
		await assetService.updateAsset(asset.id, { preview_id: uploaded.id });
	} catch {}
}
function blobToDataUrl(blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}
//#endregion
export { isAssetPreviewSupported as n, persistThumbnail as r, findServerPreviewUrl as t };

//# sourceMappingURL=assetPreviewUtil-9V8Vrv_O.js.map