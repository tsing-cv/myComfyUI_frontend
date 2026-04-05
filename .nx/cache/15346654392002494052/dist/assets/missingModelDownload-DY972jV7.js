import "./rolldown-runtime-DBfy44LZ.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import { r as downloadUrlToHfRepoUrl, y as isCivitaiModelUrl } from "./formatUtil-CKufMkDg.js";
import { t as useElectronDownloadStore } from "./electronDownloadStore-CuawkY8S.js";
//#region src/platform/missingModel/missingModelDownload.ts
var ALLOWED_SOURCES = [
	"https://civitai.com/",
	"https://huggingface.co/",
	"http://localhost:"
];
var ALLOWED_SUFFIXES = [
	".safetensors",
	".sft",
	".ckpt",
	".pth",
	".pt"
];
var WHITE_LISTED_URLS = new Set([
	"https://huggingface.co/stabilityai/stable-zero123/resolve/main/stable_zero123.ckpt",
	"https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_depth_sd14v1.pth?download=true",
	"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"
]);
/**
* Converts a model download URL to a browsable page URL.
* - HuggingFace: `/resolve/` → `/blob/` (file page with model info)
* - Civitai: strips `/api/download` or `/api/v1` prefix (model page)
*/
function toBrowsableUrl(url) {
	if (isCivitaiModelUrl(url)) return url.replace("/api/download/", "/").replace("/api/v1/", "/");
	if (url.includes("huggingface.co")) return url.replace("/resolve/", "/blob/");
	return url;
}
function isModelDownloadable(model) {
	if (WHITE_LISTED_URLS.has(model.url)) return true;
	if (!ALLOWED_SOURCES.some((source) => model.url.startsWith(source))) return false;
	if (!ALLOWED_SUFFIXES.some((suffix) => model.name.endsWith(suffix))) return false;
	return true;
}
function downloadModel(model, paths) {
	if (!isDesktop) {
		const link = document.createElement("a");
		link.href = model.url;
		link.download = model.name;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		link.click();
		return;
	}
	const modelPaths = paths[model.directory];
	if (modelPaths?.[0]) useElectronDownloadStore().start({
		url: model.url,
		savePath: modelPaths[0],
		filename: model.name
	});
}
var metadataCache = /* @__PURE__ */ new Map();
var inflight = /* @__PURE__ */ new Map();
async function fetchCivitaiMetadata(url) {
	try {
		const pathname = new URL(url).pathname;
		const versionIdMatch = pathname.match(/^\/api\/download\/models\/(\d+)$/) ?? pathname.match(/^\/api\/v1\/models-versions\/(\d+)$/);
		if (!versionIdMatch) return {
			fileSize: null,
			gatedRepoUrl: null
		};
		const [, modelVersionId] = versionIdMatch;
		const apiUrl = `https://civitai.com/api/v1/model-versions/${modelVersionId}`;
		const res = await fetch(apiUrl);
		if (!res.ok) return {
			fileSize: null,
			gatedRepoUrl: null
		};
		const matchingFile = (await res.json()).files?.find((file) => {
			const downloadUrl = file.downloadUrl;
			return typeof downloadUrl === "string" && downloadUrl.length > 0 && downloadUrl.startsWith(url);
		});
		return {
			fileSize: matchingFile?.sizeKB ? matchingFile.sizeKB * 1024 : null,
			gatedRepoUrl: null
		};
	} catch {
		return {
			fileSize: null,
			gatedRepoUrl: null
		};
	}
}
var GATED_STATUS_CODES = new Set([
	401,
	403,
	451
]);
async function fetchHeadMetadata(url) {
	try {
		const response = await fetch(url, { method: "HEAD" });
		if (!response.ok) {
			if (url.includes("huggingface.co") && GATED_STATUS_CODES.has(response.status)) return {
				fileSize: null,
				gatedRepoUrl: downloadUrlToHfRepoUrl(url)
			};
			return {
				fileSize: null,
				gatedRepoUrl: null
			};
		}
		const size = response.headers.get("content-length");
		const parsedSize = size ? parseInt(size, 10) : null;
		return {
			fileSize: parsedSize !== null && !Number.isNaN(parsedSize) ? parsedSize : null,
			gatedRepoUrl: null
		};
	} catch {
		return {
			fileSize: null,
			gatedRepoUrl: null
		};
	}
}
function isComplete(metadata) {
	return metadata.fileSize !== null || metadata.gatedRepoUrl !== null;
}
async function fetchModelMetadata(url) {
	const cached = metadataCache.get(url);
	if (cached !== void 0) return cached;
	const existing = inflight.get(url);
	if (existing) return existing;
	const promise = (async () => {
		const metadata = isCivitaiModelUrl(url) ? await fetchCivitaiMetadata(url) : await fetchHeadMetadata(url);
		if (isComplete(metadata)) metadataCache.set(url, metadata);
		return metadata;
	})();
	inflight.set(url, promise);
	try {
		return await promise;
	} finally {
		inflight.delete(url);
	}
}
//#endregion
export { toBrowsableUrl as i, fetchModelMetadata as n, isModelDownloadable as r, downloadModel as t };

//# sourceMappingURL=missingModelDownload-DY972jV7.js.map