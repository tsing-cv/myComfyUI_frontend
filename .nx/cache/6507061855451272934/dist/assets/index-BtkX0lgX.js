const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onboardingCloudRoutes-C_XTT3ZV.js","./rolldown-runtime-DBfy44LZ.js","./vendor-primevue-Dnp2bJ8y.js","./vendor-vue-core-Ba0aGEmU.js","./GraphView-_7ZHLxYu.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-i18n-CQIJzQYM.js","./vendor-vueuse--4MZqvDu.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-DKx-VcuC.js","./vendor-sentry-Dn2jSJwd.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-DifTE-W9.js","./i18n-1Rh80DIx.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-mBVaC-eN.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./api-DZnjKRFN.js","./vendor-yjs-CLwSweDd.js","./widget-W78njY6p.js","./colorUtil-D_gLWYA0.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-MPqv8vkx.js","./useErrorHandling-DtKxKYzs.js","./useExternalLink-DB_su3zs.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BaQ5ErdO.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-Xq2eOfQ2.js","./widgetTypes-DxLkDLQG.js","./markdownRendererUtil-uFQ2wi0y.js","./useConflictDetection-ZavzbBWu.js","./keybindingService-cPdg6abo.js","./ScrubableNumberInput-B5dNKiiS.js","./UserAvatar-DcGdl_le.js","./curveUtils-DrOuXIbn.js","./GlobalToast-Z87IDfUt.js","./TopbarBadge-CivLUvp6.js","./graphHasMissingNodes-SVYS0Zxk.js","./useClickDragGuard-DNjf-Zpl.js","./FormSearchInput-C6zjCC36.js","./SubscribeButton-Cj9v7eqK.js","./SubscribeToRun-BWNt3zoX.js","./missingModelDownload-DY972jV7.js","./config-BytgeQk3.js","./surveyRegistry-CxaF1waJ.js","./releaseStore-CfzLNum-.js","./workflowShareService-DovPH99t.js","./WorkspaceProfilePic-cG9UiDIS.js","./useWorkspaceSwitch-Bn9PNDKb.js","./layout-CbnMFmup.js","./serverConfigStore-x4Y-WkJ3.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css","./useConflictDetection-CPg1JjrL.css","./GraphView-B08kkKFP.css","./UserSelectView-D26-ue2k.js","./BaseViewTemplate-DU0C8qed.js","./auth-ChukGu3M.js","./auth-BoVUNcOK.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { V as script$1, _t as definePreset, ct as __vitePreload, ft as ConfirmationService, gt as index, lt as Tooltip, mt as PrimeVue, q as script, ut as ToastService } from "./vendor-primevue-Dnp2bJ8y.js";
import { t as init } from "./vendor-sentry-Dn2jSJwd.js";
import { b as initializeApp } from "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, D as computed, I as createVNode, K as mergeProps, N as createSlots, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, i as createWebHistory, it as resolveComponent, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, n as createRouter, nt as renderList, ot as resolveDynamicComponent, p as createApp, pt as watch, r as createWebHashHistory, rt as renderSlot, s as createPinia } from "./vendor-vue-core-Ba0aGEmU.js";
import { K as merge, bt as VueFireAuth, yt as VueFire } from "./vendor-other-BMn-xt1e.js";
import { n as isDesktop, t as isCloud } from "./types-BqIM6TDt.js";
import { i as remoteConfig, n as useFeatureFlags } from "./useFeatureFlags-BaQ5ErdO.js";
import { $ as until, K as promiseTimeout, b as useFavicon } from "./vendor-vueuse--4MZqvDu.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as i18n } from "./i18n-1Rh80DIx.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { Ai as useSubscriptionDialog, Bi as useAuthStore, Gi as capturePreservedQuery, Li as useTeamWorkspaceStore, Wi as PRESERVED_QUERY_NAMESPACES, Z as useWorkspaceStore, qi as hydratePreservedQuery, s as app$1, t as useDialogService } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
import { t as useUserStore } from "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { t as refreshRemoteConfig } from "./refreshRemoteConfig-_AESMIwV.js";
import { m as useBootstrapStore, p as config_default, t as useConflictDetection } from "./useConflictDetection-ZavzbBWu.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/config/firebase.ts
var BUILD_TIME_CONFIG = {
	apiKey: "AIzaSyDa_YMeyzV0SkVe92vBZ1tVikWBmOU5KVE",
	authDomain: "dreamboothy-dev.firebaseapp.com",
	databaseURL: "https://dreamboothy-dev-default-rtdb.firebaseio.com",
	projectId: "dreamboothy-dev",
	storageBucket: "dreamboothy-dev.appspot.com",
	messagingSenderId: "313257147182",
	appId: "1:313257147182:web:be38f6ebf74345fc7618bf",
	measurementId: "G-YEVSMYXSPY"
};
/**
* Returns the Firebase configuration for the current environment.
* - Cloud builds use runtime configuration delivered via feature flags
* - OSS / localhost builds fall back to the build-time config determined by __USE_PROD_CONFIG__
*/
function getFirebaseConfig() {
	if (!isCloud) return BUILD_TIME_CONFIG;
	return remoteConfig.value.firebase_config ?? BUILD_TIME_CONFIG;
}
//#endregion
//#region src/platform/workspace/auth/WorkspaceAuthGate.vue?vue&type=script&setup=true&lang.ts
var FIREBASE_INIT_TIMEOUT_MS = 16e3;
var CONFIG_REFRESH_TIMEOUT_MS = 1e4;
//#endregion
//#region src/platform/workspace/auth/WorkspaceAuthGate.vue
var WorkspaceAuthGate_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceAuthGate",
	setup(__props) {
		/**
		* WorkspaceAuthGate - Conditional auth checkpoint for workspace mode.
		*
		* This gate ensures proper initialization order for workspace-scoped auth:
		* 1. Wait for Firebase auth to resolve
		* 2. Check if teamWorkspacesEnabled feature flag is on
		* 3. If YES: Initialize workspace token and store before rendering
		* 4. If NO: Render immediately using existing Firebase auth
		*
		* This prevents race conditions where API calls use Firebase tokens
		* instead of workspace tokens when the workspace feature is enabled.
		*
		* The splash loader in index.html (z-9999) covers the screen during this
		* phase, so no separate loading indicator is needed here.
		*/
		const isReady = ref(!isCloud);
		const subscriptionDialog = useSubscriptionDialog();
		async function initialize() {
			if (!isCloud) return;
			const { isInitialized, currentUser } = storeToRefs(useAuthStore());
			try {
				if (!isInitialized.value) await until(isInitialized).toBe(true, { timeout: FIREBASE_INIT_TIMEOUT_MS });
				if (!currentUser.value) {
					isReady.value = true;
					return;
				}
				try {
					await Promise.race([refreshRemoteConfig({ useAuth: true }), promiseTimeout(CONFIG_REFRESH_TIMEOUT_MS).then(() => {
						throw new Error("Config refresh timeout");
					})]);
				} catch (error) {
					console.warn("[WorkspaceAuthGate] Failed to refresh remote config:", error);
				}
				const { flags } = useFeatureFlags();
				if (!flags.teamWorkspacesEnabled) {
					isReady.value = true;
					return;
				}
				await initializeWorkspaceMode();
				if (useTeamWorkspaceStore().initState === "ready") subscriptionDialog.resumePendingPricingFlow();
			} catch (error) {
				console.error("[WorkspaceAuthGate] Initialization failed:", error);
			} finally {
				isReady.value = true;
			}
		}
		async function initializeWorkspaceMode() {
			try {
				const workspaceStore = useTeamWorkspaceStore();
				if (workspaceStore.initState === "uninitialized") await workspaceStore.initialize();
			} catch (error) {
				console.warn("[WorkspaceAuthGate] Failed to initialize workspace store:", error);
			}
		}
		onMounted(() => {
			initialize();
		});
		return (_ctx, _cache) => {
			return isReady.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/views/layouts/LayoutDefault.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "relative size-full overflow-hidden" };
//#endregion
//#region src/views/layouts/LayoutDefault.vue
var LayoutDefault_default = /* @__PURE__ */ defineComponent({
	__name: "LayoutDefault",
	setup(__props) {
		useFavicon("/assets/favicon.ico");
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(WorkspaceAuthGate_default, null, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1$1, [createVNode(_component_router_view)])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/platform/navigation/preservedQueryTracker.ts
var installPreservedQueryTracker = (router, definitions) => {
	const trackedDefinitions = definitions.map((definition) => ({ ...definition }));
	router.beforeEach((to, _from, next) => {
		const queryKeys = new Set(Object.keys(to.query));
		trackedDefinitions.forEach(({ namespace, keys }) => {
			hydratePreservedQuery(namespace);
			if (keys.some((key) => queryKeys.has(key))) capturePreservedQuery(namespace, to.query, keys);
		});
		next();
	});
};
//#endregion
//#region src/router.ts
var cloudOnboardingRoutes = isCloud ? (await __vitePreload(async () => {
	const { cloudOnboardingRoutes } = await import("./onboardingCloudRoutes-C_XTT3ZV.js");
	return { cloudOnboardingRoutes };
}, __vite__mapDeps([0,1,2,3]), import.meta.url)).cloudOnboardingRoutes : [];
var isFileProtocol = window.location.protocol === "file:";
/**
* Determine base path for the router.
* - Electron: always root
* - Cloud: use Vite's BASE_URL (configured at build time)
* - Standard web (including reverse proxy subpaths): use window.location.pathname
*   to support deployments like http://mysite.com/ComfyUI/
*/
function getBasePath() {
	if (isDesktop) return "/";
	if (isCloud) return "./";
	return window.location.pathname;
}
var basePath = getBasePath();
function trackPageView() {
	if (!isCloud || typeof window === "undefined") return;
	useTelemetry()?.trackPageView(document.title, { path: window.location.href });
}
var router = createRouter({
	history: isFileProtocol ? createWebHashHistory() : createWebHistory(basePath),
	routes: [...isCloud ? cloudOnboardingRoutes : [], {
		path: "/",
		component: LayoutDefault_default,
		children: [{
			path: "",
			name: "GraphView",
			component: () => __vitePreload(() => import("./GraphView-_7ZHLxYu.js"), __vite__mapDeps([4,5,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]), import.meta.url),
			beforeEnter: async (_to, _from, next) => {
				const userStore = useUserStore();
				await userStore.initialize();
				if (userStore.needsLogin) next("/user-select");
				else next();
			}
		}, {
			path: "user-select",
			name: "UserSelectView",
			component: () => __vitePreload(() => import("./UserSelectView-D26-ue2k.js"), __vite__mapDeps([72,1,2,3,6,7,8,9,10,13,25,19,27,12,17,28,18,21,11,29,22,23,30,44,73,37,68]), import.meta.url)
		}]
	}],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) return savedPosition;
		else return { top: 0 };
	}
});
installPreservedQueryTracker(router, [
	{
		namespace: PRESERVED_QUERY_NAMESPACES.TEMPLATE,
		keys: [
			"template",
			"source",
			"mode"
		]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.SHARE,
		keys: ["share"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.INVITE,
		keys: ["invite"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.CREATE_WORKSPACE,
		keys: ["create_workspace"]
	}
]);
router.afterEach(() => {
	trackPageView();
});
if (isCloud) {
	const { flags } = useFeatureFlags();
	const PUBLIC_ROUTE_NAMES = new Set([
		"cloud-login",
		"cloud-signup",
		"cloud-forgot-password",
		"cloud-sorry-contact-support"
	]);
	const PUBLIC_ROUTE_PATHS = new Set([
		"/cloud/login",
		"/cloud/signup",
		"/cloud/forgot-password",
		"/cloud/sorry-contact-support"
	]);
	function isPublicRoute(to) {
		const name = String(to.name);
		if (PUBLIC_ROUTE_NAMES.has(name)) return true;
		const path = to.path;
		return PUBLIC_ROUTE_PATHS.has(path);
	}
	router.beforeEach(async (to, _from, next) => {
		const authStore = useAuthStore();
		if (!authStore.isInitialized) try {
			const { isInitialized } = storeToRefs(authStore);
			await until(isInitialized).toBe(true, { timeout: 16e3 });
		} catch (error) {
			console.error("Auth initialization failed:", error);
			return next({ name: "cloud-auth-timeout" });
		}
		const isLoggedIn = !!await authStore.getAuthHeader();
		if (isPublicRoute(to)) return next();
		if (to.name === "cloud-user-check") {
			if (to.meta.requiresAuth && !isLoggedIn) return next({ name: "cloud-login" });
			return next();
		}
		if (_from.name === "cloud-user-check" && to.path === "/") return next();
		const query = to.fullPath === "/" ? void 0 : { previousFullPath: encodeURIComponent(to.fullPath) };
		if (to.meta.requiresAuth && !isLoggedIn) return next({
			name: "cloud-login",
			query
		});
		if (!isLoggedIn) {
			if (isDesktop) return await useDialogService().showSignInDialog() ? next() : next(false);
			return next({
				name: "cloud-login",
				query
			});
		}
		if (!isDesktop && isLoggedIn && to.path === "/") {
			if (!flags.onboardingSurveyEnabled) return next();
			const { getSurveyCompletedStatus } = await __vitePreload(async () => {
				const { getSurveyCompletedStatus } = await import("./auth-ChukGu3M.js");
				return { getSurveyCompletedStatus };
			}, __vite__mapDeps([74,2,1,3,6,7,8,9,13,27,12,17,28,18,21,11,29,22,23,30,75,16,68]), import.meta.url);
			try {
				if (!await getSurveyCompletedStatus()) return next({ name: "cloud-survey" });
			} catch (error) {
				console.error("Failed to check user status:", error);
				return next({ name: "cloud-user-check" });
			}
		}
		return next();
	});
}
//#endregion
//#region src/components/dialog/GlobalDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = ["id"];
//#endregion
//#region src/components/dialog/GlobalDialog.vue
var GlobalDialog_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalDialog",
	setup(__props) {
		const { flags } = useFeatureFlags();
		const teamWorkspacesEnabled = computed(() => isCloud && flags.teamWorkspacesEnabled);
		const dialogStore = useDialogStore();
		function getDialogPt(item) {
			const isWorkspaceSettingsDialog = item.key === "global-settings" && teamWorkspacesEnabled.value;
			const basePt = item.dialogComponentProps.pt || {};
			if (isWorkspaceSettingsDialog) return merge(basePt, { mask: { class: "p-8" } });
			return basePt;
		}
		return (_ctx, _cache) => {
			return openBlock(true), createElementBlock(Fragment, null, renderList(unref(dialogStore).dialogStack, (item) => {
				return openBlock(), createBlock(unref(script), mergeProps({
					key: item.key,
					visible: item.visible,
					"onUpdate:visible": ($event) => item.visible = $event,
					class: "global-dialog",
					ref_for: true
				}, item.dialogComponentProps, {
					pt: getDialogPt(item),
					"aria-labelledby": item.key
				}), createSlots({
					header: withCtx(() => [!item.dialogComponentProps?.headless ? (openBlock(), createElementBlock("div", _hoisted_1, [item.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(item.headerComponent), mergeProps({
						key: 0,
						ref_for: true
					}, item.headerProps, { id: item.key }), null, 16, ["id"])) : (openBlock(), createElementBlock("h3", {
						key: 1,
						id: item.key
					}, toDisplayString(item.title || " "), 9, _hoisted_2))])) : createCommentVNode("", true)]),
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"]))]),
					_: 2
				}, [item.footerComponent ? {
					name: "footer",
					fn: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.footerComponent), mergeProps({ ref_for: true }, item.footerProps), null, 16))]),
					key: "0"
				} : void 0]), 1040, [
					"visible",
					"onUpdate:visible",
					"pt",
					"aria-labelledby"
				]);
			}), 128);
		};
	}
});
//#endregion
//#region src/utils/preloadErrorUtil.ts
var CSS_PRELOAD_RE = /Unable to preload CSS for (.+)/;
var JS_DYNAMIC_IMPORT_RE = /Failed to fetch dynamically imported module:\s*(.+)/;
var URL_FALLBACK_RE = /https?:\/\/[^\s"')]+/;
var FONT_EXTENSIONS = new Set([
	"woff",
	"woff2",
	"ttf",
	"otf",
	"eot"
]);
var IMAGE_EXTENSIONS = new Set([
	"png",
	"jpg",
	"jpeg",
	"gif",
	"svg",
	"webp",
	"avif",
	"ico"
]);
function extractUrl(message) {
	const cssMatch = message.match(CSS_PRELOAD_RE);
	if (cssMatch) return cssMatch[1].trim();
	const jsMatch = message.match(JS_DYNAMIC_IMPORT_RE);
	if (jsMatch) return jsMatch[1].trim();
	const fallbackMatch = message.match(URL_FALLBACK_RE);
	if (fallbackMatch) return fallbackMatch[0];
	return null;
}
function detectFileType(url) {
	const ext = new URL(url, "https://cloud.comfy.org").pathname.split(".").pop()?.toLowerCase();
	if (!ext) return "unknown";
	const cleanExt = ext.split("?")[0];
	if (cleanExt === "js" || cleanExt === "mjs") return "js";
	if (cleanExt === "css") return "css";
	if (FONT_EXTENSIONS.has(cleanExt)) return "font";
	if (IMAGE_EXTENSIONS.has(cleanExt)) return "image";
	return "unknown";
}
function extractChunkName(url) {
	const filename = new URL(url, "https://cloud.comfy.org").pathname.split("/").pop();
	if (!filename) return null;
	return filename.replace(/\.[^.]+$/, "").replace(/-[a-f0-9]{6,}$/, "") || null;
}
function parsePreloadError(error) {
	const message = error.message || String(error);
	const url = extractUrl(message);
	return {
		url,
		fileType: url ? detectFileType(url) : "unknown",
		chunkName: url ? extractChunkName(url) : null,
		message
	};
}
//#endregion
//#region src/App.vue
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		const workspaceStore = useWorkspaceStore();
		app$1.extensionManager = useWorkspaceStore();
		const conflictDetection = useConflictDetection();
		const isLoading = computed(() => workspaceStore.spinner);
		watch(isLoading, (loading, prevLoading) => {
			if (prevLoading && !loading) document.getElementById("splash-loader")?.remove();
		}, { flush: "post" });
		const showContextMenu = (event) => {
			const { target } = event;
			switch (true) {
				case target instanceof HTMLTextAreaElement:
				case target instanceof HTMLInputElement && target.type === "text":
					electronAPI()?.showContextMenu({ type: "text" });
					return;
			}
		};
		onMounted(() => {
			window["__COMFYUI_FRONTEND_VERSION__"] = config_default.app_version;
			if (isDesktop) document.addEventListener("contextmenu", showContextMenu);
			window.addEventListener("vite:preloadError", (event) => {
				event.preventDefault();
				const info = parsePreloadError(event.payload);
				console.error("[vite:preloadError]", {
					url: info.url,
					fileType: info.fileType,
					chunkName: info.chunkName,
					message: info.message
				});
			});
			conflictDetection.initializeConflictDetection();
		});
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(_component_router_view),
				createVNode(GlobalDialog_default),
				createVNode(unref(script$1), {
					"full-screen": "",
					blocked: isLoading.value
				}, null, 8, ["blocked"])
			], 64);
		};
	}
});
//#endregion
//#region src/main.ts
var ComfyUIPreset = definePreset(index, { semantic: { primary: index["primitive"].blue } });
var firebaseApp = initializeApp(getFirebaseConfig());
var app = createApp(App_default);
var pinia = createPinia();
init({
	app,
	dsn: "",
	enabled: false,
	release: "1.43.12",
	normalizeDepth: 8,
	tracesSampleRate: 0,
	replaysSessionSampleRate: 0,
	replaysOnErrorSampleRate: 0,
	integrations: [],
	autoSessionTracking: false,
	defaultIntegrations: false
});
app.directive("tooltip", Tooltip);
app.use(router).use(PrimeVue, { theme: {
	preset: ComfyUIPreset,
	options: {
		prefix: "p",
		cssLayer: {
			name: "primevue",
			order: "theme, base, primevue"
		},
		darkModeSelector: ".dark-theme, :root:has(.dark-theme)"
	}
} }).use(ConfirmationService).use(ToastService).use(pinia).use(i18n).use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()]
});
useBootstrapStore(pinia).startStoreBootstrap();
app.mount("#vue-app");
//#endregion

//# sourceMappingURL=index-BtkX0lgX.js.map