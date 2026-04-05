import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import { n as i18n } from "./i18n-CEjiKAGw.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
//#region src/composables/useExternalLink.ts
/**
* Composable for building docs.comfy.org URLs with automatic locale and platform detection
*
* @example
* ```ts
* const { buildDocsUrl } = useExternalLink()
*
* // Simple usage
* const changelogUrl = buildDocsUrl('/changelog', { includeLocale: true })
* // => 'https://docs.comfy.org/zh-CN/changelog' (if Chinese)
*
* // With platform detection
* const desktopUrl = buildDocsUrl('/installation/desktop', {
*   includeLocale: true,
*   platform: true
* })
* // => 'https://docs.comfy.org/zh-CN/installation/desktop/macos' (if Chinese + macOS)
* ```
*/
function useExternalLink() {
	const locale = computed(() => String(i18n.global.locale.value));
	const isChinese = computed(() => {
		return locale.value === "zh" || locale.value === "zh-TW";
	});
	const platform = computed(() => {
		if (!isDesktop) return null;
		return electronAPI().getPlatform() === "darwin" ? "macos" : "windows";
	});
	/**
	* Build a docs.comfy.org URL with optional locale and platform
	*
	* @param path - The path after the domain (e.g., '/installation/desktop')
	* @param options - Options for building the URL
	* @param options.includeLocale - Whether to include locale prefix (default: false)
	* @param options.platform - Whether to include platform suffix (default: false)
	* @returns The complete docs URL
	*
	* @example
	* ```ts
	* buildDocsUrl('/changelog') // => 'https://docs.comfy.org/changelog'
	* buildDocsUrl('/changelog', { includeLocale: true }) // => 'https://docs.comfy.org/zh-CN/changelog' (if Chinese)
	* buildDocsUrl('/installation/desktop', { includeLocale: true, platform: true })
	* // => 'https://docs.comfy.org/zh-CN/installation/desktop/macos' (if Chinese + macOS)
	* ```
	*/
	const buildDocsUrl = (path, options = {}) => {
		const { includeLocale = false, platform: includePlatform = false } = options;
		let url = "https://docs.comfy.org";
		if (includeLocale && isChinese.value) url += "/zh-CN";
		const normalizedPath = path.startsWith("/") ? path : `/${path}`;
		url += normalizedPath;
		if (includePlatform && platform.value) {
			url = url.endsWith("/") ? url : `${url}/`;
			url += platform.value;
		}
		return url;
	};
	return {
		buildDocsUrl,
		staticUrls: {
			discord: "https://www.comfy.org/discord",
			github: "https://github.com/comfyanonymous/ComfyUI",
			githubIssues: "https://github.com/comfyanonymous/ComfyUI/issues",
			githubFrontend: "https://github.com/Comfy-Org/ComfyUI_frontend",
			githubElectron: "https://github.com/Comfy-Org/electron",
			forum: "https://forum.comfy.org/",
			comfyOrg: "https://www.comfy.org/"
		},
		docsPaths: { partnerNodesPricing: "/tutorials/partner-nodes/pricing" }
	};
}
//#endregion
export { useExternalLink as t };

//# sourceMappingURL=useExternalLink-CjbQfKLB.js.map