import "./rolldown-runtime-DBfy44LZ.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-CEjiKAGw.js";
//#region src/base/common/downloadUtil.ts
/**
* Utility functions for downloading files
*/
var DEFAULT_DOWNLOAD_FILENAME = "download.png";
/**
* Trigger a download by creating a temporary anchor element
* @param href - The URL or blob URL to download
* @param filename - The filename to suggest to the browser
*/
function triggerLinkDownload(href, filename) {
	const link = document.createElement("a");
	link.href = href;
	link.download = filename;
	link.style.display = "none";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
/**
* Download a file from a URL by creating a temporary anchor element
* @param url - The URL of the file to download (must be a valid URL string)
* @param filename - Optional filename override (will use URL filename or default if not provided)
* @throws {Error} If the URL is invalid or empty
*/
function downloadFile(url, filename) {
	if (!url || typeof url !== "string" || url.trim().length === 0) throw new Error("Invalid URL provided for download");
	const inferredFilename = filename || extractFilenameFromUrl(url) || DEFAULT_DOWNLOAD_FILENAME;
	if (isCloud) {
		downloadViaBlobFetch(url, inferredFilename).catch((error) => {
			console.error("Failed to download file", error);
		});
		return;
	}
	triggerLinkDownload(url, inferredFilename);
}
/**
* Download a Blob by creating a temporary object URL and anchor element
* @param filename - The filename to suggest to the browser
* @param blob - The Blob to download
*/
function downloadBlob(filename, blob) {
	const url = URL.createObjectURL(blob);
	triggerLinkDownload(url, filename);
	queueMicrotask(() => URL.revokeObjectURL(url));
}
/**
* Extract filename from a URL's query parameters
* @param url - The URL to extract filename from
* @returns The extracted filename or null if not found
*/
var extractFilenameFromUrl = (url) => {
	try {
		return new URL(url, window.location.origin).searchParams.get("filename");
	} catch {
		return null;
	}
};
/**
* Extract filename from Content-Disposition header
* Handles both simple format: attachment; filename="name.png"
* And RFC 5987 format: attachment; filename="fallback.png"; filename*=UTF-8''encoded%20name.png
* @param header - The Content-Disposition header value
* @returns The extracted filename or null if not found
*/
function extractFilenameFromContentDisposition(header) {
	if (!header) return null;
	const extendedMatch = header.match(/filename\*=UTF-8''([^;]+)/i);
	if (extendedMatch?.[1]) try {
		return decodeURIComponent(extendedMatch[1]);
	} catch {}
	const quotedMatch = header.match(/filename="([^"]+)"/i);
	if (quotedMatch?.[1]) return quotedMatch[1];
	const unquotedMatch = header.match(/filename=([^;\s]+)/i);
	if (unquotedMatch?.[1]) return unquotedMatch[1];
	return null;
}
/**
* Fetch a URL and return its body as a Blob.
* Shared by download and open-in-new-tab cloud paths.
*/
async function fetchAsBlob(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
	return response;
}
async function downloadViaBlobFetch(href, fallbackFilename) {
	const response = await fetchAsBlob(href);
	const headerFilename = extractFilenameFromContentDisposition(response.headers.get("Content-Disposition"));
	const blob = await response.blob();
	downloadBlob(headerFilename ?? fallbackFilename, blob);
}
/**
* Open a file URL in a new browser tab.
* On cloud, fetches the resource as a blob first to avoid GCS redirects
* that would trigger an auto-download instead of displaying the file.
*
* Opens the tab synchronously to preserve the user-gesture context
* (browsers block window.open after an await), then navigates it to
* the blob URL once the fetch completes.
*/
async function openFileInNewTab(url) {
	if (!isCloud) {
		window.open(url, "_blank");
		return;
	}
	const tab = window.open("", "_blank");
	try {
		const blob = await (await fetchAsBlob(url)).blob();
		const blobUrl = URL.createObjectURL(blob);
		if (tab && !tab.closed) {
			tab.location.href = blobUrl;
			setTimeout(() => URL.revokeObjectURL(blobUrl), 6e4);
		} else URL.revokeObjectURL(blobUrl);
	} catch (error) {
		tab?.close();
		console.error("Failed to open image:", error);
		useToastStore().addAlert(t("toastMessages.errorOpenImage", { error: error instanceof Error ? error.message : String(error) }));
	}
}
//#endregion
export { downloadFile as n, openFileInNewTab as r, downloadBlob as t };

//# sourceMappingURL=downloadUtil-B-Ajm1fy.js.map