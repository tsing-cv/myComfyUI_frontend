const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i18n-kcltE3sL.js","./vendor-primevue-Dnp2bJ8y.js","./rolldown-runtime-DBfy44LZ.js","./vendor-vue-core-Ba0aGEmU.js","./i18n-CEjiKAGw.js","./vendor-i18n-CQIJzQYM.js"])))=>i.map(i=>d[i]);
import { a as __toESM, r as __name } from "./rolldown-runtime-DBfy44LZ.js";
import { E as script$2, O as script$4, X as script$3, ct as __vitePreload, ot as script$5, st as script, tt as script$1 } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, Ct as isRef, D as computed, F as createTextVNode, G as mergeModels, Ht as normalizeStyle, I as createVNode, It as toValue, Mt as shallowRef, O as createBaseVNode, Ot as readonly, Pt as toRef, Q as onUnmounted, R as defineComponent, Rt as unref, S as Fragment, U as inject, Ut as toDisplayString, Y as onBeforeUnmount, Z as onMounted, _t as withCtx, at as resolveDirective, b as withModifiers, c as defineStore, et as openBlock, h as useCssVars, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, lt as useId, mt as watchEffect, nt as renderList, pt as watch, q as nextTick, rt as renderSlot, tt as provide, ut as useModel, v as vShow, vt as withDirectives, y as withKeys, z as getCurrentInstance } from "./vendor-vue-core-Ba0aGEmU.js";
import { D as require_quick_lru, G as omit, K as merge, O as require_semver, U as isEmpty, W as pickBy, X as memoize, Z as debounce, c as liteClient, ct as partition, et as uniqBy, ft as flatMap, ht as filter, l as v4, lt as orderBy, mt as find, nt as some, pt as map, rt as isNil, ut as groupBy } from "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { $ as until, B as useStorage, G as get, W as createSharedComposable, at as watchDebounced, l as useAsyncState, ot as whenever, y as useEventListener } from "./vendor-vueuse--4MZqvDu.js";
import { t as axios } from "./vendor-axios-B-zaJ78_.js";
import { Z as collectAllNodes, ft as mapAllNodes, mt as isAbortError, r as api } from "./api-kFdESQTE.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { o as t } from "./i18n-CEjiKAGw.js";
import { ct as ComboboxItem_default, dt as ComboboxContent_default, ft as ComboboxRoot_default, lt as ComboboxInput_default, mt as ComboboxAnchor_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Bi as useAuthStore, D as useWorkflowStore, H as useNodeDefStore, L as useSettingsDialog, Ni as useCommandStore, Zn as ModelInfoField_default, a as useSettingStore, aa as searchInputSizeConfig, bi as transformInputSpecV1ToV2, lt as NodePreview_default, ma as useColorPaletteStore, mi as SingleSelect_default, oa as searchInputVariants, oi as VirtualGrid_default, ot as normalizePackId, pi as LeftSidePanel_default, ra as BaseModalLayout_default, rr as PropertiesAccordionItem_default, s as app, si as NoResultsPlaceholder_default, st as normalizePackKeys, t as useDialogService } from "./dialogService-ClaKHdWI.js";
import { T as paramsToCacheKey, x as isValidUrl } from "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
import { t as useUserStore } from "./userStore-DKB2Qhsc.js";
import { n as OnCloseKey } from "./widgetTypes-DxLkDLQG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { r as useSystemStatsStore, t as useCopyToClipboard } from "./useCopyToClipboard-BfoO2Yv1.js";
import { t as useExternalLink } from "./useExternalLink-CjbQfKLB.js";
//#region src/stores/bootstrapStore.ts
var useBootstrapStore = defineStore("bootstrap", () => {
	const settingStore = useSettingStore();
	const workflowStore = useWorkflowStore();
	const { isReady: isI18nReady, error: i18nError, execute: loadI18n } = useAsyncState(async () => {
		const { mergeCustomNodesI18n } = await __vitePreload(async () => {
			const { mergeCustomNodesI18n } = await import("./i18n-kcltE3sL.js");
			return { mergeCustomNodesI18n };
		}, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url);
		mergeCustomNodesI18n(await api.getCustomNodesI18n());
	}, void 0, { immediate: false });
	let storesLoaded = false;
	function loadAuthenticatedStores() {
		if (storesLoaded) return;
		storesLoaded = true;
		settingStore.load();
		workflowStore.loadWorkflows();
	}
	async function startStoreBootstrap() {
		if (isCloud) {
			const { isInitialized, isAuthenticated } = storeToRefs(useAuthStore());
			await until(isInitialized).toBe(true);
			await until(isAuthenticated).toBe(true);
		}
		const userStore = useUserStore();
		await userStore.initialize();
		const { needsLogin } = storeToRefs(userStore);
		await until(needsLogin).toBe(false);
		loadI18n();
		loadAuthenticatedStores();
	}
	return {
		isI18nReady,
		i18nError,
		startStoreBootstrap
	};
});
//#endregion
//#region src/config.ts
var config_default = {
	app_title: "ComfyUI",
	app_version: "1.43.12"
};
//#endregion
//#region src/services/comfyRegistryService.ts
var registryApiClient = axios.create({
	baseURL: "https://api.comfy.org",
	headers: { "Content-Type": "application/json" },
	paramsSerializer: { indexes: null }
});
/**
* Service for interacting with the Comfy Registry API
*/
var useComfyRegistryService = () => {
	const isLoading = ref(false);
	const error = ref(null);
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
				case 409: return `Conflict: ${data?.message || "Resource conflict"}`;
				case 500: return `Server error: ${data?.message || "Internal server error"}`;
				default: return `${context}: ${data?.message || axiosError.message}`;
			}
		}
		return `${context}: ${axiosError.message}`;
	};
	/**
	* Execute an API request with error and loading state handling
	* @param apiCall - Function that returns a promise with the API call
	* @param errorContext - Context description for error messages
	* @param routeSpecificErrors - Optional map of status codes to custom error messages
	* @returns Promise with the API response data or null if the request failed
	*/
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
	/**
	* Get the Comfy Node definitions in a specific version of a node pack
	* @param packId - The ID of the node pack
	* @param versionId - The version of the node pack
	* @returns The node definitions or null if not found or an error occurred
	*/
	const getNodeDefs = async (params, signal) => {
		const { packId, version: versionId, ...queryParams } = params;
		if (!packId || !versionId) return null;
		const endpoint = `/nodes/${packId}/versions/${versionId}/comfy-nodes`;
		return executeApiRequest(() => registryApiClient.get(endpoint, {
			params: queryParams,
			signal
		}), "Failed to get node definitions", {
			403: "This pack has been banned and its definition is not available",
			404: "The requested node, version, or comfy node does not exist"
		});
	};
	/**
	* Get a paginated list of packs matching specific criteria.
	* Search packs using `search` param. Search individual nodes using `comfy_node_search` param.
	*/
	const search = async (params, signal) => {
		const endpoint = "/nodes/search";
		return executeApiRequest(() => registryApiClient.get(endpoint, {
			params,
			signal
		}), "Failed to perform search");
	};
	/**
	* Get publisher information
	*/
	const getPublisherById = async (publisherId, signal) => {
		const endpoint = `/publishers/${publisherId}`;
		return executeApiRequest(() => registryApiClient.get(endpoint, { signal }), "Failed to get publisher", { 404: `Publisher not found: The publisher with ID ${publisherId} does not exist` });
	};
	/**
	* List all packs associated with a specific publisher
	*/
	const listPacksForPublisher = async (publisherId, includeBanned, signal) => {
		const params = includeBanned ? { include_banned: true } : void 0;
		const endpoint = `/publishers/${publisherId}/nodes`;
		return executeApiRequest(() => registryApiClient.get(endpoint, {
			params,
			signal
		}), "Failed to list packs for publisher", {
			400: "Bad request: Invalid input data",
			404: `Publisher not found: The publisher with ID ${publisherId} does not exist`
		});
	};
	/**
	* Add a review for a pack
	*/
	const postPackReview = async (packId, star, signal) => {
		const endpoint = `/nodes/${packId}/reviews`;
		const params = { star };
		return executeApiRequest(() => registryApiClient.post(endpoint, null, {
			params,
			signal
		}), "Failed to add review", {
			400: "Bad request: Invalid review",
			404: `Pack not found: Pack with ID ${packId} does not exist`
		});
	};
	/**
	* Get a paginated list of all packs on the registry
	*/
	const listAllPacks = async (params, signal) => {
		const endpoint = "/nodes";
		return executeApiRequest(() => registryApiClient.get(endpoint, {
			params,
			signal
		}), "Failed to list packs");
	};
	/**
	* Get a list of all pack versions
	*/
	const getPackVersions = async (packId, params, signal) => {
		const endpoint = `/nodes/${packId}/versions`;
		return executeApiRequest(() => registryApiClient.get(endpoint, {
			params,
			signal
		}), "Failed to get pack versions", {
			403: "This pack has been banned and its versions are not available",
			404: `Pack not found: Pack with ID ${packId} does not exist`
		});
	};
	/**
	* Get a specific pack by ID and version
	*/
	const getPackByVersion = async (packId, versionId, signal) => {
		const endpoint = `/nodes/${packId}/versions/${versionId}`;
		return executeApiRequest(() => registryApiClient.get(endpoint, { signal }), "Failed to get pack version", {
			403: "This pack has been banned and its versions are not available",
			404: `Pack not found: Pack with ID ${packId} does not exist`
		});
	};
	/**
	* Get a specific pack by ID
	*/
	const getPackById = async (packId, signal) => {
		const endpoint = `/nodes/${packId}`;
		return executeApiRequest(() => registryApiClient.get(endpoint, { signal }), "Failed to get pack", { 404: `Pack not found: The pack with ID ${packId} does not exist` });
	};
	/**
	* Get the node pack that contains a specific ComfyUI node by its name.
	* This method queries the registry to find which pack provides the given node.
	*
	* When multiple packs contain a node with the same name, the API returns the best match based on:
	* 1. Preemption match - If the node name matches any in the pack's preempted_comfy_node_names array
	* 2. Search ranking - Lower search_ranking values are preferred
	* 3. Total installs - Higher installation counts are preferred as a tiebreaker
	*
	* @param nodeName - The name of the ComfyUI node (e.g., 'KSampler', 'CLIPTextEncode')
	* @param signal - Optional AbortSignal for request cancellation
	* @returns The node pack containing the specified node, or null if not found or on error
	*
	* @example
	* ```typescript
	* const pack = await inferPackFromNodeName('KSampler')
	* if (pack) {
	*   console.log(`Node found in pack: ${pack.name}`)
	* }
	* ```
	*/
	const inferPackFromNodeName = async (nodeName, signal) => {
		const endpoint = `/comfy-nodes/${nodeName}/node`;
		return executeApiRequest(() => registryApiClient.get(endpoint, { signal }), "Failed to infer pack from comfy node name", { 404: `Comfy node not found: The node with name ${nodeName} does not exist in the registry` });
	};
	/**
	* Get multiple pack versions in a single bulk request.
	* This is more efficient than making individual requests for each pack version.
	*
	* @param nodeVersions - Array of node ID and version pairs to retrieve
	* @param signal - Optional AbortSignal for request cancellation
	* @returns Bulk response containing the requested node versions or null on error
	*
	* @example
	* ```typescript
	* const versions = await getBulkNodeVersions([
	*   { node_id: 'ComfyUI-Manager', version: '1.0.0' },
	*   { node_id: 'ComfyUI-Impact-Pack', version: '2.0.0' }
	* ])
	* if (versions) {
	*   versions.node_versions.forEach(result => {
	*     if (result.status === 'success' && result.node_version) {
	*       console.log(`Retrieved ${result.identifier.node_id}@${result.identifier.version}`)
	*     }
	*   })
	* }
	* ```
	*/
	const getBulkNodeVersions = async (nodeVersions, signal) => {
		const endpoint = "/bulk/nodes/versions";
		const errorContext = "Failed to get bulk node versions";
		const routeSpecificErrors = { 400: "Bad request: Invalid node version identifiers provided" };
		const requestBody = { node_versions: nodeVersions };
		return executeApiRequest(() => registryApiClient.post(endpoint, requestBody, { signal }), errorContext, routeSpecificErrors);
	};
	return {
		isLoading,
		error,
		listAllPacks,
		search,
		getPackById,
		getPackVersions,
		getPackByVersion,
		getPublisherById,
		listPacksForPublisher,
		getNodeDefs,
		postPackReview,
		inferPackFromNodeName,
		getBulkNodeVersions
	};
};
//#endregion
//#region src/composables/useCachedRequest.ts
var import_quick_lru = /* @__PURE__ */ __toESM(require_quick_lru(), 1);
var DEFAULT_MAX_SIZE = 50;
/**
* Composable that wraps a function with memoization, request deduplication, and abort handling.
*/
function useCachedRequest(requestFunction, options = {}) {
	const { maxSize = DEFAULT_MAX_SIZE, cacheKeyFn = paramsToCacheKey } = options;
	const cache = new import_quick_lru.default({ maxSize });
	const pendingRequests = /* @__PURE__ */ new Map();
	const abortControllers = /* @__PURE__ */ new Map();
	const executeAndCacheCall = async (params, cacheKey) => {
		try {
			const controller = new AbortController();
			abortControllers.set(cacheKey, controller);
			const responsePromise = requestFunction(params, controller.signal);
			pendingRequests.set(cacheKey, responsePromise);
			const result = await responsePromise;
			cache.set(cacheKey, result);
			return result;
		} catch (err) {
			cache.set(cacheKey, null);
			return null;
		} finally {
			pendingRequests.delete(cacheKey);
			abortControllers.delete(cacheKey);
		}
	};
	const handlePendingRequest = async (pendingRequest) => {
		try {
			return await pendingRequest;
		} catch (err) {
			console.error("Error in pending request:", err);
			return null;
		}
	};
	const abortAllRequests = () => {
		for (const controller of abortControllers.values()) controller.abort();
	};
	/**
	* Cancel and clear any pending requests
	*/
	const cancel = () => {
		abortAllRequests();
		abortControllers.clear();
		pendingRequests.clear();
	};
	/**
	* Cached version of the request function
	*/
	const call = async (params) => {
		const cacheKey = cacheKeyFn(params);
		const cachedResult = cache.get(cacheKey);
		if (cachedResult !== void 0) return cachedResult;
		const pendingRequest = pendingRequests.get(cacheKey);
		if (pendingRequest) return handlePendingRequest(pendingRequest);
		return executeAndCacheCall(params, cacheKey);
	};
	return {
		call,
		cancel,
		clear: () => cache.clear()
	};
}
//#endregion
//#region src/stores/comfyRegistryStore.ts
var PACK_LIST_CACHE_SIZE = 20;
var PACK_BY_ID_CACHE_SIZE = 64;
var isNodePack = (pack) => {
	return pack !== void 0 && "id" in pack;
};
/**
* Store for managing remote custom nodes
*/
var useComfyRegistryStore = defineStore("comfyRegistry", () => {
	const registryService = useComfyRegistryService();
	let getPacksByIdController = null;
	const getPacksByIdCache = new import_quick_lru.default({ maxSize: PACK_BY_ID_CACHE_SIZE });
	/**
	* Get a list of all node packs from the registry
	*/
	const listAllPacks = useCachedRequest(registryService.listAllPacks, { maxSize: PACK_LIST_CACHE_SIZE });
	/**
	* Get a pack by its ID from the registry
	*/
	const getPackById = useCachedRequest(async (params) => {
		if (!params) return null;
		return registryService.getPackById(params);
	}, { maxSize: PACK_BY_ID_CACHE_SIZE });
	/**
	* Get a list of packs by their IDs from the registry
	*/
	const getPacksByIds = async (ids) => {
		const [cachedPacksIds, uncachedPacksIds] = partition(ids, (id) => getPacksByIdCache.has(id));
		const resolvedPacks = cachedPacksIds.map((id) => getPacksByIdCache.get(id)).filter(isNodePack);
		if (uncachedPacksIds.length) {
			getPacksByIdController = new AbortController();
			const { nodes = [] } = await registryService.listAllPacks({ node_id: uncachedPacksIds.filter((id) => id !== void 0) }, getPacksByIdController.signal) ?? {};
			nodes.forEach((pack) => {
				if (pack?.id) {
					getPacksByIdCache.set(pack.id, pack);
					resolvedPacks.push(pack);
				}
			});
		}
		return resolvedPacks;
	};
	/**
	* Get the node definitions for a pack
	*/
	const getNodeDefs = useCachedRequest(registryService.getNodeDefs, { maxSize: PACK_BY_ID_CACHE_SIZE });
	/**
	* Search for packs by pack name or node names
	*/
	const search = useCachedRequest(registryService.search, { maxSize: PACK_LIST_CACHE_SIZE });
	/**
	* Get the node pack that contains a specific ComfyUI node by its name.
	* Results are cached to avoid redundant API calls.
	*
	* @see {@link useComfyRegistryService.inferPackFromNodeName} for details on the ranking algorithm
	*/
	const inferPackFromNodeName = useCachedRequest(registryService.inferPackFromNodeName, { maxSize: PACK_BY_ID_CACHE_SIZE });
	/**
	* Clear all cached data
	*/
	const clearCache = () => {
		getNodeDefs.clear();
		listAllPacks.clear();
		getPackById.clear();
		inferPackFromNodeName.clear();
	};
	/**
	* Cancel all any in-flight requests.
	*/
	const cancelRequests = () => {
		getNodeDefs.cancel();
		listAllPacks.cancel();
		getPackById.cancel();
		inferPackFromNodeName.cancel();
		getPacksByIdController?.abort();
	};
	return {
		listAllPacks,
		getPackById,
		getPacksByIds: {
			call: getPacksByIds,
			cancel: () => getPacksByIdController?.abort()
		},
		getNodeDefs,
		search,
		inferPackFromNodeName,
		clearCache,
		cancelRequests,
		isLoading: registryService.isLoading,
		error: registryService.error
	};
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/useNodePacks.ts
/**
* Handles fetching node packs from the registry given a list of node pack IDs
*/
var useNodePacks = (packsIds, options = {}) => {
	const { immediate = false } = options;
	const { getPacksByIds } = useComfyRegistryStore();
	const fetchPacks = () => getPacksByIds.call(get(packsIds).filter(Boolean));
	const { isReady, isLoading, error, execute, state: nodePacks } = useAsyncState(fetchPacks, [], { immediate });
	const cleanup = () => {
		getPacksByIds.cancel();
		isReady.value = false;
		isLoading.value = false;
	};
	return {
		error,
		isLoading,
		isReady,
		nodePacks,
		startFetch: execute,
		cleanup
	};
};
//#endregion
//#region src/composables/useServerLogs.ts
var LOGS_MESSAGE_TYPE = "logs";
var MANAGER_WS_TASK_DONE_NAME$1 = "cm-task-completed";
var MANAGER_WS_TASK_STARTED_NAME$1 = "cm-task-started";
var useServerLogs = (options = {}) => {
	const { ui_id, immediate = false, messageFilter = (msg) => Boolean(msg.trim()) } = options;
	const logs = ref([]);
	const isTaskStarted = ref(!ui_id);
	let stopLogs = null;
	let stopTaskDone = null;
	let stopTaskStarted = null;
	const isValidLogEvent = (event) => event?.type === LOGS_MESSAGE_TYPE && event.detail?.entries?.length > 0;
	const parseLogMessage = (event) => event.detail.entries.map((e) => e.m).filter(messageFilter);
	const handleLogMessage = (event) => {
		if (!isTaskStarted.value) return;
		if (isValidLogEvent(event)) {
			const messages = parseLogMessage(event);
			if (messages.length > 0) logs.value.push(...messages);
		}
	};
	const handleTaskStarted = (event) => {
		if (ui_id && event?.detail?.ui_id === ui_id) isTaskStarted.value = true;
	};
	const handleTaskDone = (event) => {
		if (ui_id && event?.detail?.ui_id === ui_id) isTaskStarted.value = false;
	};
	const start = async () => {
		await api.subscribeLogs(true);
		stopLogs = useEventListener(api, LOGS_MESSAGE_TYPE, handleLogMessage);
		if (ui_id) {
			stopTaskStarted = useEventListener(api, MANAGER_WS_TASK_STARTED_NAME$1, handleTaskStarted);
			stopTaskDone = useEventListener(api, MANAGER_WS_TASK_DONE_NAME$1, handleTaskDone);
		}
	};
	const stopListening = async () => {
		stopLogs?.();
		stopTaskStarted?.();
		stopTaskDone?.();
		stopLogs = null;
		stopTaskStarted = null;
		stopTaskDone = null;
		await api.subscribeLogs(false);
	};
	if (immediate) start();
	onUnmounted(async () => {
		await stopListening();
		logs.value = [];
	});
	return {
		logs,
		startListening: start,
		stopListening
	};
};
//#endregion
//#region src/workbench/extensions/manager/composables/useManagerQueue.ts
var MANAGER_WS_TASK_DONE_NAME = "cm-task-completed";
var MANAGER_WS_TASK_STARTED_NAME = "cm-task-started";
var useManagerQueue = (taskHistory, taskQueue, installedPacks) => {
	const maxHistoryItems = ref(64);
	const isLoading = ref(false);
	const isProcessing = ref(false);
	const currentQueueLength = computed(() => taskQueue.value.running_queue.length + taskQueue.value.pending_queue.length);
	/**
	* Update the processing state based on the current queue length.
	* If the queue is empty, or all tasks in the queue are associated
	* with different clients, then this client is not processing any tasks.
	*/
	const updateProcessingState = () => {
		isProcessing.value = currentQueueLength.value > 0;
	};
	const allTasksDone = computed(() => currentQueueLength.value === 0);
	const historyCount = computed(() => Object.keys(taskHistory.value).length);
	/**
	* Check if a task is associated with this client.
	* Task can be from running queue, pending queue, or history.
	* @param task - The task to check
	* @returns True if the task belongs to this client
	*/
	const isTaskFromThisClient = (task) => task.client_id === app.api.clientId;
	/**
	* Check if a history task is associated with this client.
	* @param task - The history task to check
	* @returns True if the task belongs to this client
	*/
	const isHistoryTaskFromThisClient = (task) => task.client_id === app.api.clientId;
	/**
	* Filter queue tasks by client id.
	* Ensures that only tasks associated with this client are processed and
	* added to client state.
	* @param tasks - Array of queue tasks to filter
	* @returns Filtered array containing only tasks from this client
	*/
	const filterQueueByClientId = (tasks) => tasks.filter(isTaskFromThisClient);
	/**
	* Filter history tasks by client id using pickBy for optimal performance.
	* Returns a new object containing only tasks associated with this client.
	* @param history - The history object to filter
	* @returns Filtered history object containing only tasks from this client
	*/
	const filterHistoryByClientId = (history) => pickBy(history, isHistoryTaskFromThisClient);
	/**
	* Update task queue and history state with filtered data from server.
	* Ensures only tasks from this client are stored in local state.
	* @param state - The task state message from the server
	*/
	const updateTaskState = (state) => {
		taskQueue.value.running_queue = filterQueueByClientId(state.running_queue);
		taskQueue.value.pending_queue = filterQueueByClientId(state.pending_queue);
		taskHistory.value = filterHistoryByClientId(state.history);
		if (state.installed_packs) installedPacks.value = normalizePackKeys(state.installed_packs);
		updateProcessingState();
	};
	const cleanupTaskDoneListener = useEventListener(app.api, MANAGER_WS_TASK_DONE_NAME, (event) => {
		if (event?.type === MANAGER_WS_TASK_DONE_NAME && event.detail?.state) updateTaskState(event.detail.state);
	});
	const cleanupTaskStartedListener = useEventListener(app.api, MANAGER_WS_TASK_STARTED_NAME, (event) => {
		if (event?.type === MANAGER_WS_TASK_STARTED_NAME && event.detail?.state) updateTaskState(event.detail.state);
	});
	/**
	* Cleanup function to remove event listeners and reset state
	*/
	const cleanup = () => {
		cleanupTaskDoneListener();
		cleanupTaskStartedListener();
		isProcessing.value = false;
		isLoading.value = false;
	};
	return {
		isLoading,
		isProcessing,
		maxHistoryItems,
		allTasksDone,
		historyCount,
		currentQueueLength,
		updateTaskState,
		cleanup
	};
};
//#endregion
//#region src/components/ui/search-input/SearchAutocomplete.vue
var SearchAutocomplete_default = /* @__PURE__ */ defineComponent({
	__name: "SearchAutocomplete",
	props: /* @__PURE__ */ mergeModels({
		placeholder: {},
		icon: { default: "icon-[lucide--search]" },
		autofocus: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		size: { default: "md" },
		suggestions: { default: () => [] },
		optionLabel: {},
		optionKey: {},
		class: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["select"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const sizeConfig = computed(() => searchInputSizeConfig[__props.size]);
		const modelValue = useModel(__props, "modelValue");
		const inputRef = ref(null);
		const isOpen = ref(false);
		const isComposing = ref(false);
		function focus() {
			inputRef.value?.$el?.focus();
		}
		__expose({ focus });
		const placeholderText = computed(() => __props.placeholder ?? t("g.searchPlaceholder", { subject: "" }));
		function clearSearch() {
			modelValue.value = "";
			focus();
		}
		function getItemProperty(item, key) {
			if (typeof item === "object" && item !== null) return String(item[key]);
			return String(item);
		}
		function suggestionLabel(item) {
			if (__props.optionLabel) return getItemProperty(item, __props.optionLabel);
			return String(item);
		}
		function suggestionKey(item, index) {
			if (__props.optionKey) return getItemProperty(item, __props.optionKey);
			return `${suggestionLabel(item)}-${index}`;
		}
		function suggestionValue(item) {
			return suggestionLabel(item);
		}
		function onSelectSuggestion(item) {
			modelValue.value = suggestionLabel(item);
			isOpen.value = false;
			emit("select", item);
		}
		function onEnterKey(e) {
			if (isComposing.value) {
				e.preventDefault();
				e.stopPropagation();
			}
		}
		watch(() => __props.suggestions, (items) => {
			isOpen.value = items.length > 0 && !!modelValue.value;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ComboboxRoot_default), {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => modelValue.value = $event),
				open: isOpen.value,
				"onUpdate:open": _cache[4] || (_cache[4] = ($event) => isOpen.value = $event),
				"ignore-filter": "",
				disabled: _ctx.disabled,
				class: normalizeClass(__props.class)
			}, {
				default: withCtx(() => [createVNode(unref(ComboboxAnchor_default), {
					class: normalizeClass(unref(cn)(unref(searchInputVariants)({ size: _ctx.size }), _ctx.disabled && "pointer-events-none opacity-50")),
					onClick: focus
				}, {
					default: withCtx(() => [modelValue.value ? (openBlock(), createBlock(Button_default, {
						key: 0,
						class: normalizeClass(unref(cn)("absolute", sizeConfig.value.clearPos)),
						variant: "textonly",
						size: "icon-sm",
						"aria-label": _ctx.$t("g.clear"),
						onClick: withModifiers(clearSearch, ["stop"])
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(unref(cn)("icon-[lucide--x]", sizeConfig.value.icon)) }, null, 2)]),
						_: 1
					}, 8, ["class", "aria-label"])) : _ctx.loading ? (openBlock(), createElementBlock("i", {
						key: 1,
						class: normalizeClass(unref(cn)("pointer-events-none absolute icon-[lucide--loader-circle] animate-spin", sizeConfig.value.iconPos, sizeConfig.value.icon))
					}, null, 2)) : (openBlock(), createElementBlock("i", {
						key: 2,
						class: normalizeClass(unref(cn)("pointer-events-none absolute", sizeConfig.value.iconPos, sizeConfig.value.icon, _ctx.icon))
					}, null, 2)), createVNode(unref(ComboboxInput_default), {
						ref_key: "inputRef",
						ref: inputRef,
						modelValue: modelValue.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
						class: normalizeClass(unref(cn)("size-full border-none bg-transparent outline-none", sizeConfig.value.inputPl, sizeConfig.value.inputText)),
						placeholder: placeholderText.value,
						"auto-focus": _ctx.autofocus,
						onCompositionstart: _cache[1] || (_cache[1] = ($event) => isComposing.value = true),
						onCompositionend: _cache[2] || (_cache[2] = ($event) => isComposing.value = false),
						onKeydown: withKeys(onEnterKey, ["enter"])
					}, null, 8, [
						"modelValue",
						"class",
						"placeholder",
						"auto-focus"
					])]),
					_: 1
				}, 8, ["class"]), _ctx.suggestions.length > 0 ? (openBlock(), createBlock(unref(ComboboxContent_default), {
					key: 0,
					position: "popper",
					"side-offset": 4,
					class: normalizeClass(unref(cn)("z-50 max-h-60 w-(--reka-combobox-trigger-width) overflow-y-auto", "rounded-lg border border-border-default bg-base-background p-1 shadow-lg"))
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.suggestions, (suggestion, index) => {
						return openBlock(), createBlock(unref(ComboboxItem_default), {
							key: suggestionKey(suggestion, index),
							value: suggestionValue(suggestion),
							class: normalizeClass(unref(cn)("cursor-pointer rounded-sm px-3 py-2 text-sm outline-none", "data-highlighted:bg-secondary-background-hover")),
							onSelect: withModifiers(($event) => onSelectSuggestion(suggestion), ["prevent"])
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "suggestion", { suggestion }, () => [createTextVNode(toDisplayString(suggestionLabel(suggestion)), 1)])]),
							_: 2
						}, 1032, [
							"value",
							"class",
							"onSelect"
						]);
					}), 128))]),
					_: 3
				}, 8, ["class"])) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"modelValue",
				"open",
				"disabled",
				"class"
			]);
		};
	}
});
//#endregion
//#region src/components/common/DotSpinner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$25 = ["width", "height"];
var _hoisted_2$22 = { "clip-path": "url(#clip0_776_9582)" };
var _hoisted_3$17 = ["fill"];
var _hoisted_4$13 = ["fill"];
var _hoisted_5$11 = ["fill"];
var _hoisted_6$9 = ["fill"];
var _hoisted_7$9 = ["fill"];
var _hoisted_8$8 = ["fill"];
var _hoisted_9$6 = ["fill"];
var _hoisted_10$5 = ["fill"];
//#endregion
//#region src/components/common/DotSpinner.vue
var DotSpinner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DotSpinner",
	props: {
		size: { default: 24 },
		duration: { default: "2s" }
	},
	setup(__props) {
		const colorPaletteStore = useColorPaletteStore();
		const color = computed(() => colorPaletteStore.completedActivePalette.light_theme ? "#2C2B30" : "#D4D4D4");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "inline-flex items-center justify-center",
				style: normalizeStyle({
					width: _ctx.size + "px",
					height: _ctx.size + "px"
				})
			}, [(openBlock(), createElementBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: _ctx.size,
				height: _ctx.size,
				viewBox: "0 0 14 14",
				fill: "none",
				class: "animate-spin",
				style: normalizeStyle({ animationDuration: _ctx.duration })
			}, [createBaseVNode("g", _hoisted_2$22, [
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M7 2.21053C7.61042 2.21053 8.10526 1.71568 8.10526 1.10526C8.10526 0.494843 7.61042 0 7 0C6.38958 0 5.89474 0.494843 5.89474 1.10526C5.89474 1.71568 6.38958 2.21053 7 2.21053Z",
					fill: color.value
				}, null, 8, _hoisted_3$17),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.25s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M2.21053 7C2.21053 7.61042 1.71568 8.10526 1.10526 8.10526C0.494843 8.10526 0 7.61042 0 7C0 6.38958 0.494843 5.89474 1.10526 5.89474C1.71568 5.89474 2.21053 6.38958 2.21053 7Z",
					fill: color.value
				}, null, 8, _hoisted_4$13),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.5s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M14 7C14 7.61042 13.5052 8.10526 12.8947 8.10526C12.2843 8.10526 11.7895 7.61042 11.7895 7C11.7895 6.38958 12.2843 5.89474 12.8947 5.89474C13.5052 5.89474 14 6.38958 14 7Z",
					fill: color.value
				}, null, 8, _hoisted_5$11),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.75s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M8.10526 12.8947C8.10526 13.5052 7.61041 14 6.99999 14C6.38957 14 5.89473 13.5052 5.89473 12.8947C5.89473 12.2843 6.38957 11.7895 6.99999 11.7895C7.61041 11.7895 8.10526 12.2843 8.10526 12.8947Z",
					fill: color.value
				}, null, 8, _hoisted_6$9),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.125s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M2.05039 3.61349C2.48203 4.04513 3.18184 4.04513 3.61347 3.61349C4.0451 3.18186 4.0451 2.48205 3.61347 2.05042C3.18184 1.61878 2.48203 1.61878 2.05039 2.05042C1.61876 2.48205 1.61876 3.18186 2.05039 3.61349Z",
					fill: color.value
				}, null, 8, _hoisted_7$9),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.625s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M11.9496 11.9496C11.518 12.3812 10.8182 12.3812 10.3865 11.9496C9.9549 11.5179 9.9549 10.8181 10.3865 10.3865C10.8182 9.95485 11.518 9.95485 11.9496 10.3865C12.3812 10.8181 12.3812 11.5179 11.9496 11.9496Z",
					fill: color.value
				}, null, 8, _hoisted_8$8),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.875s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M2.05039 11.9496C2.48203 12.3812 3.18184 12.3812 3.61347 11.9496C4.0451 11.5179 4.0451 10.8181 3.61347 10.3865C3.18184 9.95485 2.48203 9.95485 2.05039 10.3865C1.61876 10.8181 1.61876 11.5179 2.05039 11.9496Z",
					fill: color.value
				}, null, 8, _hoisted_9$6),
				createBaseVNode("path", {
					class: "dot-animation",
					style: { "animation-delay": "0.375s" },
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M11.9496 3.61349C11.518 4.04513 10.8182 4.04513 10.3865 3.61349C9.9549 3.18186 9.9549 2.48205 10.3865 2.05042C10.8182 1.61878 11.518 1.61878 11.9496 2.05042C12.3812 2.48205 12.3812 3.18186 11.9496 3.61349Z",
					fill: color.value
				}, null, 8, _hoisted_10$5)
			]), _cache[0] || (_cache[0] = createBaseVNode("defs", null, [createBaseVNode("clipPath", { id: "clip0_776_9582" }, [createBaseVNode("rect", {
				width: "14",
				height: "14",
				fill: "white"
			})])], -1))], 12, _hoisted_1$25))], 4);
		};
	}
}), [["__scopeId", "data-v-ec0691c8"]]);
//#endregion
//#region src/components/common/ContentDivider.vue
var ContentDivider_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ContentDivider",
	props: {
		orientation: { default: "horizontal" },
		width: { default: .3 }
	},
	setup(__props) {
		useCssVars((_ctx) => ({ "4bb7c524": _ctx.width + "px" }));
		const colorPaletteStore = useColorPaletteStore();
		const isLightTheme = computed(() => colorPaletteStore.completedActivePalette.light_theme);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					"content-divider": true,
					"content-divider--horizontal": _ctx.orientation === "horizontal",
					"content-divider--vertical": _ctx.orientation === "vertical"
				}),
				style: normalizeStyle({ backgroundColor: isLightTheme.value ? "#DCDAE1" : "#2C2C2C" })
			}, null, 6);
		};
	}
}), [["__scopeId", "data-v-1d39213b"]]);
//#endregion
//#region src/workbench/extensions/manager/utils/conflictMessageUtil.ts
/**
* Generates a localized conflict message for a given conflict detail.
* This function should be used anywhere conflict messages need to be displayed.
*
* @param conflict The conflict detail object
* @param t The i18n translation function
* @returns A localized conflict message string
*/
function getConflictMessage(conflict, t) {
	const messageKey = `manager.conflicts.conflictMessages.${conflict.type}`;
	if (conflict.type === "comfyui_version" || conflict.type === "frontend_version" || conflict.type === "os" || conflict.type === "accelerator") return t(messageKey, {
		current: conflict.current_value,
		required: conflict.required_value
	});
	if (conflict.type === "banned" || conflict.type === "pending" || conflict.type === "import_failed") return t(messageKey);
	return t("manager.conflicts.conflictMessages.generic", {
		current: conflict.current_value,
		required: conflict.required_value
	});
}
/**
* Generates conflict messages for multiple conflicts and joins them.
*
* @param conflicts Array of conflict details
* @param t The i18n translation function
* @param separator The separator to use when joining messages (default: '; ')
* @returns A single string with all conflict messages joined
*/
function getJoinedConflictMessages(conflicts, t, separator = "; ") {
	return conflicts.map((conflict) => getConflictMessage(conflict, t)).join(separator);
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/NodeConflictDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$24 = { class: "flex w-138 flex-col" };
var _hoisted_2$21 = { class: "flex size-full flex-col gap-2 px-4 py-6" };
var _hoisted_3$16 = { key: 0 };
var _hoisted_4$12 = { class: "m-0 mb-4 text-sm/4 text-base-foreground" };
var _hoisted_5$10 = {
	key: 1,
	class: "flex min-h-8 w-full flex-col rounded-lg bg-base-background"
};
var _hoisted_6$8 = { class: "flex flex-1" };
var _hoisted_7$8 = { class: "mr-2 text-xs font-bold text-warning-background" };
var _hoisted_8$7 = { class: "text-xs font-bold text-base-foreground" };
var _hoisted_9$5 = {
	key: 0,
	"data-testid": "conflict-dialog-panel-expanded",
	class: "flex max-h-35.5 scrollbar-hide flex-col gap-2.5 overflow-y-auto px-4 py-2"
};
var _hoisted_10$4 = ["aria-label"];
var _hoisted_11$3 = { class: "text-xs text-muted" };
var _hoisted_12$1 = {
	key: 2,
	class: "flex min-h-8 w-full flex-col rounded-lg bg-base-background"
};
var _hoisted_13$1 = { class: "flex flex-1" };
var _hoisted_14 = { class: "mr-2 text-xs font-bold text-warning-background" };
var _hoisted_15 = { class: "text-xs font-bold text-base-foreground" };
var _hoisted_16 = {
	key: 0,
	"data-testid": "conflict-dialog-panel-expanded",
	class: "flex max-h-[142px] scrollbar-hide flex-col gap-2.5 overflow-y-auto px-4 py-2"
};
var _hoisted_17 = ["aria-label"];
var _hoisted_18 = { class: "text-xs text-muted" };
var _hoisted_19 = {
	key: 3,
	class: "flex min-h-8 w-full flex-col rounded-lg bg-base-background"
};
var _hoisted_20 = { class: "flex flex-1" };
var _hoisted_21 = { class: "mr-2 text-xs font-bold text-warning-background" };
var _hoisted_22 = { class: "text-xs font-bold text-base-foreground" };
var _hoisted_23 = {
	key: 0,
	"data-testid": "conflict-dialog-panel-expanded",
	class: "flex max-h-35.5 scrollbar-hide flex-col gap-2.5 overflow-y-auto px-4 py-2"
};
var _hoisted_24 = { class: "text-xs text-muted" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/NodeConflictDialogContent.vue
var NodeConflictDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "NodeConflictDialogContent",
	props: {
		showAfterWhatsNew: {
			type: Boolean,
			default: false
		},
		conflictedPackages: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const { conflictedPackages: globalConflictPackages } = useConflictDetection();
		const conflictsExpanded = ref(false);
		const extensionsExpanded = ref(false);
		const importFailedExpanded = ref(false);
		const conflictData = computed(() => __props.conflictedPackages || globalConflictPackages.value);
		const allConflictDetails = computed(() => {
			return filter(flatMap(conflictData.value, (result) => result.conflicts), (conflict) => conflict.type !== "import_failed");
		});
		const packagesWithImportFailed = computed(() => {
			return filter(conflictData.value, (result) => some(result.conflicts, (conflict) => conflict.type === "import_failed"));
		});
		const importFailedConflicts = computed(() => {
			return map(packagesWithImportFailed.value, (result) => result.package_name || result.package_id);
		});
		const toggleImportFailedPanel = () => {
			importFailedExpanded.value = !importFailedExpanded.value;
			conflictsExpanded.value = false;
			extensionsExpanded.value = false;
		};
		const toggleConflictsPanel = () => {
			conflictsExpanded.value = !conflictsExpanded.value;
			extensionsExpanded.value = false;
			importFailedExpanded.value = false;
		};
		const toggleExtensionsPanel = () => {
			extensionsExpanded.value = !extensionsExpanded.value;
			conflictsExpanded.value = false;
			importFailedExpanded.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$24, [
				createVNode(ContentDivider_default, { width: 1 }),
				createBaseVNode("div", _hoisted_2$21, [
					_ctx.showAfterWhatsNew ? (openBlock(), createElementBlock("div", _hoisted_3$16, [createBaseVNode("p", _hoisted_4$12, [
						createTextVNode(toDisplayString(_ctx.$t("manager.conflicts.description")) + " ", 1),
						_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
						_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(_ctx.$t("manager.conflicts.info")), 1)
					])])) : createCommentVNode("", true),
					importFailedConflicts.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$10, [createBaseVNode("div", {
						"data-testid": "conflict-dialog-panel-toggle",
						class: "flex h-8 w-full items-center justify-between gap-2 pl-4",
						onClick: toggleImportFailedPanel
					}, [createBaseVNode("div", _hoisted_6$8, [createBaseVNode("span", _hoisted_7$8, toDisplayString(importFailedConflicts.value.length), 1), createBaseVNode("span", _hoisted_8$7, toDisplayString(_ctx.$t("manager.conflicts.importFailedExtensions")), 1)]), createBaseVNode("div", null, [createVNode(Button_default, {
						variant: "textonly",
						class: "bg-transparent text-muted"
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(importFailedExpanded.value ? "pi pi-chevron-down text-xs" : "pi pi-chevron-right text-xs") }, null, 2)]),
						_: 1
					})])]), importFailedExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_9$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(importFailedConflicts.value, (packageName, i) => {
						return openBlock(), createElementBlock("div", {
							key: i,
							"aria-label": `Import failed package: ${packageName}`,
							class: "flex min-h-6 shrink-0 items-center justify-between px-4 py-1 hover:bg-node-component-surface-hovered"
						}, [createBaseVNode("span", _hoisted_11$3, toDisplayString(packageName), 1), _cache[2] || (_cache[2] = createBaseVNode("span", { class: "pi pi-info-circle text-sm" }, null, -1))], 8, _hoisted_10$4);
					}), 128))])) : createCommentVNode("", true)])) : createCommentVNode("", true),
					allConflictDetails.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12$1, [createBaseVNode("div", {
						"data-testid": "conflict-dialog-panel-toggle",
						class: "flex h-8 w-full items-center justify-between gap-2 pl-4",
						onClick: toggleConflictsPanel
					}, [createBaseVNode("div", _hoisted_13$1, [createBaseVNode("span", _hoisted_14, toDisplayString(allConflictDetails.value.length), 1), createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("manager.conflicts.conflicts")), 1)]), createBaseVNode("div", null, [createVNode(Button_default, {
						variant: "textonly",
						class: "bg-transparent text-muted"
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(conflictsExpanded.value ? "pi pi-chevron-down text-xs" : "pi pi-chevron-right text-xs") }, null, 2)]),
						_: 1
					})])]), conflictsExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(allConflictDetails.value, (conflict, i) => {
						return openBlock(), createElementBlock("div", {
							key: i,
							"aria-label": `Conflict: ${unref(getConflictMessage)(conflict, unref(t))}`,
							class: "flex min-h-6 shrink-0 items-center justify-between px-4 py-1 hover:bg-node-component-surface-hovered"
						}, [createBaseVNode("span", _hoisted_18, toDisplayString(unref(getConflictMessage)(conflict, unref(t))), 1), _cache[3] || (_cache[3] = createBaseVNode("span", { class: "pi pi-info-circle text-sm" }, null, -1))], 8, _hoisted_17);
					}), 128))])) : createCommentVNode("", true)])) : createCommentVNode("", true),
					conflictData.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [createBaseVNode("div", {
						"data-testid": "conflict-dialog-panel-toggle",
						class: "flex h-8 w-full items-center justify-between gap-2 pl-4",
						onClick: toggleExtensionsPanel
					}, [createBaseVNode("div", _hoisted_20, [createBaseVNode("span", _hoisted_21, toDisplayString(conflictData.value.length), 1), createBaseVNode("span", _hoisted_22, toDisplayString(_ctx.$t("manager.conflicts.extensionAtRisk")), 1)]), createBaseVNode("div", null, [createVNode(Button_default, {
						variant: "textonly",
						class: "bg-transparent text-muted"
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(extensionsExpanded.value ? "pi pi-chevron-down text-xs" : "pi pi-chevron-right text-xs") }, null, 2)]),
						_: 1
					})])]), extensionsExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_23, [(openBlock(true), createElementBlock(Fragment, null, renderList(conflictData.value, (conflictResult) => {
						return openBlock(), createElementBlock("div", {
							key: conflictResult.package_id,
							class: "flex min-h-6 shrink-0 items-center justify-between px-4 py-1 hover:bg-node-component-surface-hovered"
						}, [createBaseVNode("span", _hoisted_24, toDisplayString(conflictResult.package_name), 1), _cache[4] || (_cache[4] = createBaseVNode("span", { class: "pi pi-info-circle text-sm" }, null, -1))]);
					}), 128))])) : createCommentVNode("", true)])) : createCommentVNode("", true)
				]),
				createVNode(ContentDivider_default, { width: 1 })
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/NodeConflictFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$23 = { class: "flex w-full items-center justify-between px-3 py-4" };
var _hoisted_2$20 = { class: "flex w-full items-center justify-between gap-2 pr-1" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/NodeConflictFooter.vue
var NodeConflictFooter_default = /* @__PURE__ */ defineComponent({
	__name: "NodeConflictFooter",
	props: {
		buttonText: {},
		onButtonClick: { type: Function }
	},
	setup(__props) {
		const { buildDocsUrl } = useExternalLink();
		const dialogStore = useDialogStore();
		const handleConflictInfoClick = () => {
			window.open(buildDocsUrl("/troubleshooting/custom-node-issues", { includeLocale: true }), "_blank");
		};
		const handleButtonClick = () => {
			dialogStore.closeDialog({ key: "global-node-conflict" });
			if (__props.onButtonClick) __props.onButtonClick();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$23, [createBaseVNode("div", _hoisted_2$20, [createVNode(Button_default, {
				variant: "muted-textonly",
				size: "sm",
				class: "text-sm",
				onClick: handleConflictInfoClick
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-info-circle" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("manager.conflicts.conflictInfoTitle")), 1)]),
				_: 1
			}), _ctx.buttonText ? (openBlock(), createBlock(Button_default, {
				key: 0,
				variant: "secondary",
				size: "sm",
				onClick: handleButtonClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.buttonText), 1)]),
				_: 1
			})) : createCommentVNode("", true)])]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/NodeConflictHeader.vue
var _sfc_main$1 = {};
var _hoisted_1$22 = { class: "flex h-12 w-full items-center justify-between pl-6" };
var _hoisted_2$19 = { class: "flex items-center gap-2" };
var _hoisted_3$15 = { class: "text-base font-bold" };
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$22, [createBaseVNode("div", _hoisted_2$19, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--triangle-alert] text-warning-background" }, null, -1)), createBaseVNode("p", _hoisted_3$15, toDisplayString(_ctx.$t("manager.conflicts.title")), 1)])]);
}
__name(_sfc_render$1, "_sfc_render");
var NodeConflictHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]]);
//#endregion
//#region src/workbench/extensions/manager/composables/useNodeConflictDialog.ts
var DIALOG_KEY$2 = "global-node-conflict";
function useNodeConflictDialog() {
	const { showSmallLayoutDialog } = useDialogService();
	const dialogStore = useDialogStore();
	function hide() {
		dialogStore.closeDialog({ key: DIALOG_KEY$2 });
	}
	function show(options = {}) {
		const { dialogComponentProps, buttonText, onButtonClick, showAfterWhatsNew, conflictedPackages } = options;
		showSmallLayoutDialog({
			key: DIALOG_KEY$2,
			headerComponent: NodeConflictHeader_default,
			footerComponent: NodeConflictFooter_default,
			component: NodeConflictDialogContent_default,
			dialogComponentProps,
			props: {
				showAfterWhatsNew,
				conflictedPackages
			},
			footerProps: {
				buttonText,
				onButtonClick
			}
		});
	}
	return {
		show,
		hide
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/usePackInstall.ts
function usePackInstall(getNodePacks, getHasConflict, getConflictInfo) {
	const managerStore = useComfyManagerStore();
	const { show: showNodeConflictDialog } = useNodeConflictDialog();
	const { checkNodeCompatibility } = useConflictDetection();
	const { t } = useI18n();
	const isInstalling = computed(() => {
		const nodePacks = getNodePacks();
		if (!nodePacks?.length) return false;
		return nodePacks.some((pack) => managerStore.isPackInstalling(pack.id));
	});
	const createPayload = (installItem) => {
		if (!installItem.id) throw new Error(t("manager.packInstall.nodeIdRequired"));
		const versionToInstall = installItem.publisher?.name === "Unclaimed" ? "nightly" : installItem.latest_version?.version ?? "latest";
		return {
			id: installItem.id,
			repository: installItem.repository ?? "",
			channel: "dev",
			mode: "cache",
			selected_version: versionToInstall,
			version: versionToInstall
		};
	};
	const installPack = (item) => managerStore.installPack.call(createPayload(item));
	const performInstallation = async (packs) => {
		try {
			const failures = (await Promise.allSettled(packs.map(installPack))).filter((r) => r.status === "rejected");
			if (failures.length) console.error("[usePackInstall] Some installations failed:", failures.map((f) => f.reason));
		} finally {
			managerStore.installPack.clear();
		}
	};
	const installAllPacks = async () => {
		const nodePacks = getNodePacks();
		if (!nodePacks?.length) return;
		const hasConflict = getHasConflict?.();
		const conflictInfo = getConflictInfo?.();
		if (hasConflict) {
			if (!conflictInfo) return;
			showNodeConflictDialog({
				conflictedPackages: nodePacks.map((pack) => {
					const compatibilityCheck = checkNodeCompatibility(pack);
					return {
						package_id: pack.id || "",
						package_name: pack.name || "",
						has_conflict: compatibilityCheck.hasConflict,
						conflicts: compatibilityCheck.conflicts,
						is_compatible: !compatibilityCheck.hasConflict
					};
				}).filter((result) => result.has_conflict),
				buttonText: t("manager.conflicts.installAnyway"),
				onButtonClick: async () => {
					const uninstalledPacks = nodePacks.filter((pack) => !managerStore.isPackInstalled(pack.id));
					if (!uninstalledPacks.length) return;
					await performInstallation(uninstalledPacks);
				}
			});
			return;
		}
		const uninstalledPacks = nodePacks.filter((pack) => !managerStore.isPackInstalled(pack.id));
		if (!uninstalledPacks.length) return;
		await performInstallation(uninstalledPacks);
	};
	return {
		isInstalling,
		installAllPacks,
		performInstallation
	};
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackInstallButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$21 = {
	key: 0,
	class: "icon-[lucide--triangle-alert] text-warning-background"
};
var _hoisted_2$18 = {
	key: 2,
	class: "icon-[lucide--download]"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackInstallButton.vue
var PackInstallButton_default = /* @__PURE__ */ defineComponent({
	__name: "PackInstallButton",
	props: {
		nodePacks: {},
		isLoading: {
			type: Boolean,
			default: false
		},
		label: {},
		size: { default: "sm" },
		hasConflict: { type: Boolean },
		conflictInfo: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const { isInstalling, installAllPacks } = usePackInstall(() => __props.nodePacks, () => __props.hasConflict, () => __props.conflictInfo);
		const computedLabel = computed(() => isInstalling.value ? t("g.installing") : __props.label ?? (__props.nodePacks.length > 1 ? t("manager.installSelected") : t("g.install")));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				variant: "primary",
				size: _ctx.size,
				disabled: _ctx.isLoading || unref(isInstalling),
				onClick: withModifiers(unref(installAllPacks), ["stop"])
			}, {
				default: withCtx(() => [_ctx.hasConflict && !unref(isInstalling) && !_ctx.isLoading ? (openBlock(), createElementBlock("i", _hoisted_1$21)) : _ctx.isLoading || unref(isInstalling) ? (openBlock(), createBlock(DotSpinner_default, {
					key: 1,
					duration: "1s",
					size: _ctx.size === "sm" ? 12 : 16
				}, null, 8, ["size"])) : (openBlock(), createElementBlock("i", _hoisted_2$18)), createBaseVNode("span", null, toDisplayString(computedLabel.value), 1)]),
				_: 1
			}, 8, [
				"size",
				"disabled",
				"onClick"
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackUpdateButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$20 = {
	key: 1,
	class: "icon-[lucide--refresh-cw]"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackUpdateButton.vue
var PackUpdateButton_default = /* @__PURE__ */ defineComponent({
	__name: "PackUpdateButton",
	props: {
		nodePacks: {},
		hasDisabledUpdatePacks: { type: Boolean },
		size: { default: "sm" }
	},
	setup(__props) {
		const isUpdating = ref(false);
		const managerStore = useComfyManagerStore();
		const createPayload = (updateItem) => {
			return {
				id: updateItem.id,
				version: updateItem.latest_version.version
			};
		};
		const updatePack = async (item) => {
			if (!item.id || !item.latest_version?.version) {
				console.warn("Pack missing required id or version:", item);
				return;
			}
			await managerStore.updatePack.call(createPayload(item));
		};
		const updateAllPacks = async () => {
			if (!__props.nodePacks?.length) {
				console.warn("No packs provided for update");
				return;
			}
			isUpdating.value = true;
			const updatablePacks = __props.nodePacks.filter((pack) => managerStore.isPackInstalled(pack.id));
			if (!updatablePacks.length) {
				isUpdating.value = false;
				return;
			}
			try {
				await Promise.all(updatablePacks.map(updatePack));
				managerStore.updatePack.clear();
			} catch (error) {
				console.error("Pack update failed:", error);
				console.error("Failed packs info:", updatablePacks.map((p) => p.id));
			} finally {
				isUpdating.value = false;
			}
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				variant: "primary",
				size: _ctx.size,
				disabled: isUpdating.value,
				onClick: updateAllPacks
			}, {
				default: withCtx(() => [isUpdating.value ? (openBlock(), createBlock(DotSpinner_default, {
					key: 0,
					duration: "1s"
				})) : (openBlock(), createElementBlock("i", _hoisted_1$20)), createBaseVNode("span", null, toDisplayString(_ctx.nodePacks.length > 1 ? _ctx.$t("manager.updateAll") : _ctx.$t("manager.update")), 1)]),
				_: 1
			}, 8, ["size", "disabled"])), [[
				_directive_tooltip,
				_ctx.hasDisabledUpdatePacks ? _ctx.$t("manager.disabledNodesWontUpdate") : null,
				void 0,
				{ top: true }
			]]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/types/importFailedTypes.ts
var ImportFailedKey = Symbol("ImportFailed");
//#endregion
//#region src/workbench/extensions/manager/components/manager/PackStatusMessage.vue
var PackStatusMessage_default = /* @__PURE__ */ defineComponent({
	__name: "PackStatusMessage",
	props: {
		statusType: {},
		hasCompatibilityIssues: { type: Boolean }
	},
	setup(__props) {
		const importFailed = inject(ImportFailedKey)?.importFailed;
		const statusPropsMap = {
			NodeStatusActive: {
				label: "active",
				severity: "success"
			},
			NodeStatusDeleted: {
				label: "deleted",
				severity: "warn"
			},
			NodeStatusBanned: {
				label: "banned",
				severity: "error"
			},
			NodeVersionStatusActive: {
				label: "active",
				severity: "success"
			},
			NodeVersionStatusPending: {
				label: "pending",
				severity: "warn"
			},
			NodeVersionStatusDeleted: {
				label: "deleted",
				severity: "warn"
			},
			NodeVersionStatusFlagged: {
				label: "flagged",
				severity: "error"
			},
			NodeVersionStatusBanned: {
				label: "banned",
				severity: "error"
			}
		};
		const statusLabel = computed(() => {
			if (importFailed?.value) return "importFailed";
			if (__props.hasCompatibilityIssues) return "conflicting";
			return statusPropsMap[__props.statusType]?.label || "unknown";
		});
		const statusSeverity = computed(() => {
			if (__props.hasCompatibilityIssues || importFailed?.value) return "error";
			return statusPropsMap[__props.statusType]?.severity || "secondary";
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				severity: statusSeverity.value,
				class: "flex w-fit items-center rounded-xl p-0 wrap-break-word",
				pt: {
					text: { class: "text-xs" },
					content: { class: "px-2 py-0.5" }
				}
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", {
					class: "pi pi-circle-fill mr-1.5 p-0 text-[0.6rem]",
					style: { opacity: .8 }
				}, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t(`manager.status.${statusLabel.value}`)), 1)]),
				_: 1
			}, 8, ["severity"]);
		};
	}
});
//#endregion
//#region src/components/icons/VerifiedIcon.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$19 = ["width", "height"];
var _hoisted_2$17 = ["fill"];
//#endregion
//#region src/components/icons/VerifiedIcon.vue
var VerifiedIcon_default = /* @__PURE__ */ defineComponent({
	__name: "VerifiedIcon",
	props: {
		size: { default: 16 },
		color: { default: "#60A5FA" },
		class: {}
	},
	setup(__props) {
		const iconClass = computed(() => __props.class || "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: _ctx.size,
				height: _ctx.size,
				viewBox: "0 0 16 16",
				fill: "none",
				class: normalizeClass(iconClass.value)
			}, [createBaseVNode("path", {
				d: "M8.00049 1.3335C8.73661 1.33367 9.33332 1.93038 9.3335 2.6665V2.83447C9.82278 2.96041 10.2851 3.15405 10.7095 3.40479L10.8286 3.28564C11.3493 2.76525 12.1937 2.76519 12.7144 3.28564C13.235 3.80626 13.2348 4.65067 12.7144 5.17139L12.5952 5.29053C12.846 5.71486 13.0396 6.17725 13.1655 6.6665H13.3335C14.0699 6.6665 14.6665 7.26411 14.6665 8.00049C14.6663 8.73672 14.0698 9.3335 13.3335 9.3335H13.1655C13.0396 9.82284 12.846 10.2851 12.5952 10.7095L12.7144 10.8286C13.235 11.3493 13.235 12.1937 12.7144 12.7144C12.1937 13.235 11.3493 13.235 10.8286 12.7144L10.7095 12.5952C10.2851 12.846 9.82284 13.0396 9.3335 13.1655V13.3335C9.3335 14.0698 8.73672 14.6663 8.00049 14.6665C7.26411 14.6665 6.6665 14.0699 6.6665 13.3335V13.1655C6.17725 13.0396 5.71486 12.846 5.29053 12.5952L5.17139 12.7144C4.65067 13.2348 3.80626 13.235 3.28564 12.7144C2.76519 12.1937 2.76525 11.3493 3.28564 10.8286L3.40479 10.7095C3.15405 10.2851 2.96041 9.82278 2.83447 9.3335H2.6665C1.93038 9.33332 1.33367 8.73661 1.3335 8.00049C1.3335 7.26422 1.93027 6.66668 2.6665 6.6665H2.83447C2.96043 6.17722 3.15403 5.71488 3.40479 5.29053L3.28564 5.17139C2.76536 4.65065 2.76508 3.80621 3.28564 3.28564C3.80621 2.76508 4.65065 2.76536 5.17139 3.28564L5.29053 3.40479C5.71488 3.15403 6.17722 2.96043 6.6665 2.83447V2.6665C6.66668 1.93027 7.26422 1.3335 8.00049 1.3335ZM7.3335 8.00049L6.00049 6.6665L4.6665 8.00049L7.3335 10.6665L11.3335 6.6665L10.0005 5.3335L7.3335 8.00049Z",
				fill: _ctx.color
			}, null, 8, _hoisted_2$17)], 10, _hoisted_1$19);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/PackVersionSelectorPopover.vue?vue&type=script&setup=true&lang.ts
var import_semver = require_semver();
var _hoisted_1$18 = { class: "w-64 pt-1" };
var _hoisted_2$16 = { class: "py-2" };
var _hoisted_3$14 = { class: "text-md pl-3 font-semibold text-neutral-500" };
var _hoisted_4$11 = {
	key: 0,
	class: "flex flex-col items-center py-4 text-center text-muted"
};
var _hoisted_5$9 = {
	key: 1,
	class: "py-2"
};
var _hoisted_6$7 = { class: "flex w-full items-center justify-between p-1" };
var _hoisted_7$7 = { class: "flex items-center gap-2" };
var _hoisted_8$6 = {
	key: 0,
	class: "w-4"
};
var _hoisted_9$4 = {
	key: 0,
	class: "icon-[lucide--triangle-alert] text-warning-background"
};
var _hoisted_10$3 = {
	key: 0,
	class: "pi pi-check text-highlight"
};
var _hoisted_11$2 = { class: "flex justify-end gap-2 px-3 py-1" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/PackVersionSelectorPopover.vue
var PackVersionSelectorPopover_default = /* @__PURE__ */ defineComponent({
	__name: "PackVersionSelectorPopover",
	props: { nodePack: {} },
	emits: ["cancel", "submit"],
	setup(__props, { emit: __emit }) {
		const SelectedVersionValues = {
			LATEST: "latest",
			NIGHTLY: "nightly"
		};
		const ManagerChannelValues = {
			DEFAULT: "default",
			DEV: "dev"
		};
		const ManagerDatabaseSourceValues = {
			CACHE: "cache",
			REMOTE: "remote",
			LOCAL: "local"
		};
		const emit = __emit;
		const { t } = useI18n();
		const registryService = useComfyRegistryService();
		const managerStore = useComfyManagerStore();
		const { checkNodeCompatibility } = useConflictDetection();
		const isQueueing = ref(false);
		const selectedVersion = ref(SelectedVersionValues.LATEST);
		const isInstallDisabled = computed(() => isQueueing.value || isVersionInstalled(selectedVersion.value));
		onMounted(() => {
			const initialVersion = getInitialSelectedVersion() ?? SelectedVersionValues.LATEST;
			selectedVersion.value = (0, import_semver.valid)(initialVersion) ? initialVersion : SelectedVersionValues.NIGHTLY;
		});
		const getInitialSelectedVersion = () => {
			if (!__props.nodePack.id) return;
			if (__props.nodePack.publisher?.name === "Unclaimed") return SelectedVersionValues.NIGHTLY;
			if (managerStore.isPackInstalled(__props.nodePack.id)) return managerStore.getInstalledPackVersion(__props.nodePack.id);
			return __props.nodePack.latest_version?.version;
		};
		const fetchVersions = async () => {
			if (!__props.nodePack?.id) return [];
			return await registryService.getPackVersions(__props.nodePack.id) || [];
		};
		const versionOptions = ref([]);
		const fetchedVersions = ref([]);
		const isLoadingVersions = ref(false);
		const onNodePackChange = async () => {
			isLoadingVersions.value = true;
			const versions = await fetchVersions();
			fetchedVersions.value = versions;
			const latestVersionNumber = __props.nodePack.latest_version?.version;
			const availableVersionOptions = versions.map((version) => ({
				value: version.version ?? "",
				label: version.version ?? ""
			})).filter((option) => option.value && option.value !== latestVersionNumber);
			const latestLabel = latestVersionNumber ? `${t("manager.latestVersion")} (${latestVersionNumber})` : t("manager.latestVersion");
			const defaultVersions = [{
				value: SelectedVersionValues.LATEST,
				label: latestLabel
			}];
			if (__props.nodePack.repository?.length) defaultVersions.push({
				value: SelectedVersionValues.NIGHTLY,
				label: t("manager.nightlyVersion")
			});
			versionOptions.value = [...defaultVersions, ...availableVersionOptions];
			isLoadingVersions.value = false;
		};
		whenever(() => __props.nodePack.id, (nodePackId, oldNodePackId) => {
			if (nodePackId !== oldNodePackId) onNodePackChange();
		}, {
			deep: true,
			immediate: true
		});
		const handleSubmit = async () => {
			isQueueing.value = true;
			if (!__props.nodePack.id) throw new Error("Node ID is required for installation");
			const actualVersion = selectedVersion.value === "latest" ? __props.nodePack.latest_version?.version ?? "latest" : selectedVersion.value;
			await managerStore.installPack.call({
				id: __props.nodePack.id,
				repository: __props.nodePack.repository ?? "",
				channel: ManagerChannelValues.DEFAULT,
				mode: ManagerDatabaseSourceValues.CACHE,
				version: actualVersion,
				selected_version: selectedVersion.value
			});
			isQueueing.value = false;
			emit("submit");
		};
		const getVersionData = (version) => {
			const latestVersionNumber = __props.nodePack.latest_version?.version;
			if (version === "latest" || version === latestVersionNumber) return { ...__props.nodePack.latest_version };
			const versionData = fetchedVersions.value.find((v) => v.version === version);
			if (versionData) return { ...versionData };
			return { ...__props.nodePack };
		};
		const getVersionCompatibility = (version) => {
			const compatibility = checkNodeCompatibility(getVersionData(version));
			const conflictMessage = compatibility.hasConflict ? getJoinedConflictMessages(compatibility.conflicts, t) : "";
			return {
				hasConflict: compatibility.hasConflict,
				conflictMessage
			};
		};
		const isOptionSelected = (optionValue) => {
			if (selectedVersion.value === optionValue) return true;
			if (optionValue === "latest" && selectedVersion.value === __props.nodePack.latest_version?.version) return true;
			return false;
		};
		const isVersionInstalled = (version) => {
			const installed = __props.nodePack.id ? managerStore.getInstalledPackVersion(__props.nodePack.id) : void 0;
			if (!installed) return false;
			if (version === "latest") return installed === __props.nodePack.latest_version?.version;
			return version === installed;
		};
		const processedVersionOptions = computed(() => {
			return versionOptions.value.map((option) => {
				const compatibility = getVersionCompatibility(option.value);
				return {
					...option,
					hasConflict: compatibility.hasConflict,
					conflictMessage: compatibility.conflictMessage,
					isSelected: isOptionSelected(option.value),
					isInstalled: isVersionInstalled(option.value)
				};
			});
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$18, [
				createBaseVNode("div", _hoisted_2$16, [createBaseVNode("span", _hoisted_3$14, toDisplayString(_ctx.$t("manager.selectVersion")), 1)]),
				isLoadingVersions.value || isQueueing.value ? (openBlock(), createElementBlock("div", _hoisted_4$11, [createVNode(unref(script$1), { class: "mb-2 size-8" }), createTextVNode(" " + toDisplayString(_ctx.$t("manager.loadingVersions")), 1)])) : versionOptions.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$9, [createVNode(NoResultsPlaceholder_default, {
					title: _ctx.$t("g.noResultsFound"),
					message: _ctx.$t("manager.tryAgainLater"),
					icon: "pi pi-exclamation-circle",
					class: "p-0"
				}, null, 8, ["title", "message"])])) : (openBlock(), createBlock(unref(script$2), {
					key: 2,
					modelValue: selectedVersion.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedVersion.value = $event),
					"option-label": "label",
					"option-value": "value",
					"option-disabled": "isInstalled",
					options: processedVersionOptions.value,
					"highlight-on-select": false,
					class: "max-h-[50vh] w-full rounded-md border-none shadow-none",
					pt: { listContainer: { class: "scrollbar-hide" } }
				}, {
					option: withCtx((slotProps) => [createBaseVNode("div", _hoisted_6$7, [createBaseVNode("div", _hoisted_7$7, [slotProps.option.value === "nightly" ? (openBlock(), createElementBlock("div", _hoisted_8$6)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [slotProps.option.hasConflict ? withDirectives((openBlock(), createElementBlock("i", _hoisted_9$4, null, 512)), [[_directive_tooltip, {
						value: slotProps.option.conflictMessage,
						showDelay: 300
					}]]) : (openBlock(), createBlock(VerifiedIcon_default, {
						key: 1,
						size: 20,
						class: "relative right-0.5"
					}))], 64)), createBaseVNode("span", null, toDisplayString(slotProps.option.label), 1)]), slotProps.option.isSelected ? (openBlock(), createElementBlock("i", _hoisted_10$3)) : createCommentVNode("", true)])]),
					_: 1
				}, 8, ["modelValue", "options"])),
				createVNode(ContentDivider_default, { class: "my-2" }),
				createBaseVNode("div", _hoisted_11$2, [createVNode(Button_default, {
					variant: "muted-textonly",
					class: "text-sm",
					disabled: isQueueing.value,
					onClick: _cache[1] || (_cache[1] = ($event) => emit("cancel"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(Button_default, {
					variant: "secondary",
					class: "rounded-lg bg-secondary-background px-4 py-2.5 text-sm text-base-foreground",
					disabled: isInstallDisabled.value,
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.install")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/usePackUpdateStatus.ts
var usePackUpdateStatus = (nodePackSource) => {
	const { isPackInstalled, isPackEnabled, getInstalledPackVersion } = useComfyManagerStore();
	const nodePack = computed(() => toValue(nodePackSource));
	const isInstalled = computed(() => isPackInstalled(nodePack.value?.id));
	const isEnabled = computed(() => isPackEnabled(nodePack.value?.id));
	const installedVersion = computed(() => getInstalledPackVersion(nodePack.value?.id ?? ""));
	const latestVersion = computed(() => nodePack.value?.latest_version?.version);
	const isNightlyPack = computed(() => !!installedVersion.value && !(0, import_semver.valid)(installedVersion.value));
	return {
		isUpdateAvailable: computed(() => {
			if (!isInstalled.value || isNightlyPack.value || !latestVersion.value || !installedVersion.value) return false;
			return (0, import_semver.compare)(latestVersion.value, installedVersion.value) > 0;
		}),
		isNightlyPack,
		canTryNightlyUpdate: computed(() => isInstalled.value && isEnabled.value && isNightlyPack.value),
		installedVersion,
		latestVersion
	};
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/PackVersionBadge.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$17 = [
	"aria-haspopup",
	"role",
	"tabindex"
];
var _hoisted_2$15 = {
	key: 0,
	class: "pi pi-arrow-circle-up text-xs text-blue-600"
};
var _hoisted_3$13 = {
	key: 1,
	class: "pi pi-chevron-right text-2xs"
};
var TRUNCATED_HASH_LENGTH = 7;
//#endregion
//#region src/workbench/extensions/manager/components/manager/PackVersionBadge.vue
var PackVersionBadge_default = /* @__PURE__ */ defineComponent({
	__name: "PackVersionBadge",
	props: {
		nodePack: {},
		isSelected: { type: Boolean },
		fill: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const { isUpdateAvailable } = usePackUpdateStatus(() => __props.nodePack);
		const popoverRef = ref();
		const lastTargetEl = ref(null);
		const managerStore = useComfyManagerStore();
		const isInstalled = computed(() => managerStore.isPackInstalled(__props.nodePack?.id));
		const isDisabled = computed(() => isInstalled.value && !managerStore.isPackEnabled(__props.nodePack?.id));
		const installedVersion = computed(() => {
			if (!__props.nodePack.id) return "nightly";
			const version = managerStore.installedPacks[__props.nodePack.id]?.ver ?? __props.nodePack.latest_version?.version ?? "nightly";
			return (0, import_semver.valid)(version) ? version : version.slice(0, TRUNCATED_HASH_LENGTH);
		});
		const toggleVersionSelector = (event) => {
			lastTargetEl.value = event.currentTarget;
			popoverRef.value.toggle(event);
		};
		const closeVersionSelector = () => {
			popoverRef.value.hide();
		};
		const fixPopoverIntoViewport = async () => {
			await nextTick();
			const popoverEl = popoverRef.value?.container ?? popoverRef.value?.$el;
			const targetEl = lastTargetEl.value;
			if (!popoverEl || !targetEl) return;
			requestAnimationFrame(() => {
				const boundary = (targetEl.closest(".p-dialog") ?? targetEl.closest(".manager-dialog") ?? targetEl.closest("[role=\"dialog\"]") ?? document.documentElement).getBoundingClientRect();
				const targetRect = targetEl.getBoundingClientRect();
				popoverEl.style.transform = "";
				const rect = popoverEl.getBoundingClientRect();
				const M = 8;
				const GAP = 10;
				const spaceBelow = boundary.bottom - targetRect.bottom;
				const spaceAbove = targetRect.top - boundary.top;
				const placeAbove = spaceBelow < rect.height + GAP && spaceAbove > spaceBelow;
				let top = placeAbove ? targetRect.top - rect.height - GAP : targetRect.bottom + GAP;
				top = Math.min(top, boundary.bottom - rect.height - M);
				top = Math.max(top, boundary.top + M);
				let left = targetRect.left;
				left = Math.min(left, boundary.right - rect.width - M);
				left = Math.max(left, boundary.left + M);
				popoverEl.style.top = `${Math.round(top)}px`;
				popoverEl.style.left = `${Math.round(left)}px`;
				popoverEl.classList.toggle("p-popover-flipped", placeAbove);
			});
		};
		watch(() => __props.isSelected, (isSelected, wasSelected) => {
			if (wasSelected && !isSelected) closeVersionSelector();
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", null, [withDirectives((openBlock(), createElementBlock("div", {
				class: normalizeClass(["inline-flex items-center gap-1 rounded-2xl py-1 text-xs", {
					"bg-dialog-surface px-1.5": _ctx.fill,
					"cursor-pointer": !isDisabled.value,
					"cursor-not-allowed opacity-60": isDisabled.value
				}]),
				"aria-haspopup": !isDisabled.value,
				role: isDisabled.value ? "text" : "button",
				tabindex: isDisabled.value ? -1 : 0,
				onClick: _cache[0] || (_cache[0] = ($event) => !isDisabled.value && toggleVersionSelector($event)),
				onKeydown: [_cache[1] || (_cache[1] = withKeys(($event) => !isDisabled.value && toggleVersionSelector($event), ["enter"])), _cache[2] || (_cache[2] = withKeys(($event) => !isDisabled.value && toggleVersionSelector($event), ["space"]))]
			}, [
				unref(isUpdateAvailable) ? (openBlock(), createElementBlock("i", _hoisted_2$15)) : createCommentVNode("", true),
				createBaseVNode("span", null, toDisplayString(installedVersion.value), 1),
				!isDisabled.value ? (openBlock(), createElementBlock("i", _hoisted_3$13)) : createCommentVNode("", true)
			], 42, _hoisted_1$17)), [[
				_directive_tooltip,
				isDisabled.value ? _ctx.$t("manager.enablePackToChangeVersion") : null,
				void 0,
				{ top: true }
			]]), createVNode(unref(script$3), {
				ref_key: "popoverRef",
				ref: popoverRef,
				"append-to": "body",
				pt: {
					root: { class: "before:hidden after:hidden [&_.p-popover-arrow]:hidden" },
					content: { class: "p-0 shadow-lg" }
				},
				onShow: fixPopoverIntoViewport
			}, {
				default: withCtx(() => [createVNode(PackVersionSelectorPopover_default, {
					"installed-version": installedVersion.value,
					"node-pack": _ctx.nodePack,
					onCancel: closeVersionSelector,
					onSubmit: closeVersionSelector
				}, null, 8, ["installed-version", "node-pack"])]),
				_: 1
			}, 512)]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/stores/conflictDetectionStore.ts
var useConflictDetectionStore = defineStore("conflictDetection", () => {
	const conflictedPackages = ref([]);
	const isDetecting = ref(false);
	const lastDetectionTime = ref(null);
	const hasConflicts = computed(() => conflictedPackages.value.some((pkg) => pkg.has_conflict));
	const getConflictsForPackageByID = computed(() => (packageId) => conflictedPackages.value.find((pkg) => pkg.package_id === packageId));
	const bannedPackages = computed(() => conflictedPackages.value.filter((pkg) => pkg.conflicts.some((conflict) => conflict.type === "banned")));
	const securityPendingPackages = computed(() => conflictedPackages.value.filter((pkg) => pkg.conflicts.some((conflict) => conflict.type === "pending")));
	function setConflictedPackages(packages) {
		conflictedPackages.value = [...packages];
	}
	function clearConflicts() {
		conflictedPackages.value = [];
	}
	function setDetecting(detecting) {
		isDetecting.value = detecting;
	}
	function setLastDetectionTime(time) {
		lastDetectionTime.value = time;
	}
	return {
		conflictedPackages,
		isDetecting,
		lastDetectionTime,
		hasConflicts,
		getConflictsForPackageByID,
		bannedPackages,
		securityPendingPackages,
		setConflictedPackages,
		clearConflicts,
		setDetecting,
		setLastDetectionTime
	};
});
//#endregion
//#region src/workbench/extensions/manager/composables/useConflictAcknowledgment.ts
/**
* LocalStorage keys for conflict acknowledgment tracking
*/
var STORAGE_KEYS = {
	CONFLICT_MODAL_DISMISSED: "Comfy.ConflictModalDismissed",
	CONFLICT_RED_DOT_DISMISSED: "Comfy.ConflictRedDotDismissed",
	CONFLICT_WARNING_BANNER_DISMISSED: "Comfy.ConflictWarningBannerDismissed"
};
var modalDismissed = useStorage(STORAGE_KEYS.CONFLICT_MODAL_DISMISSED, false);
var redDotDismissed = useStorage(STORAGE_KEYS.CONFLICT_RED_DOT_DISMISSED, false);
var warningBannerDismissed = useStorage(STORAGE_KEYS.CONFLICT_WARNING_BANNER_DISMISSED, false);
/**
* Composable for managing conflict acknowledgment state in localStorage
*
* This handles:
* - Tracking whether conflict modal has been dismissed
* - Tracking whether red dot notification has been cleared
* - Managing per-package conflict acknowledgments
* - Detecting ComfyUI version changes to reset acknowledgment state
*/
function useConflictAcknowledgment() {
	const conflictDetectionStore = useConflictDetectionStore();
	const state = computed(() => ({
		modal_dismissed: modalDismissed.value,
		red_dot_dismissed: redDotDismissed.value,
		warning_banner_dismissed: warningBannerDismissed.value
	}));
	/**
	* Mark red dot notification as dismissed
	*/
	function dismissRedDotNotification() {
		redDotDismissed.value = true;
	}
	/**
	* Mark manager warning banner as dismissed
	*/
	function dismissWarningBanner() {
		warningBannerDismissed.value = true;
		redDotDismissed.value = true;
	}
	/**
	* Mark conflicts as seen (unified function for help center and manager)
	*/
	function markConflictsAsSeen() {
		redDotDismissed.value = true;
		modalDismissed.value = true;
		warningBannerDismissed.value = true;
	}
	const hasConflicts = computed(() => conflictDetectionStore.hasConflicts);
	return {
		acknowledgmentState: state,
		shouldShowConflictModal: computed(() => !modalDismissed.value),
		shouldShowRedDot: computed(() => {
			if (!hasConflicts.value) return false;
			if (redDotDismissed.value) return false;
			return true;
		}),
		shouldShowManagerBanner: computed(() => {
			return hasConflicts.value && !warningBannerDismissed.value;
		}),
		dismissRedDotNotification,
		dismissWarningBanner,
		markConflictsAsSeen
	};
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/ImportFailedNodeContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$16 = { class: "flex w-[490px] flex-col border-t border-border-default" };
var _hoisted_2$14 = { class: "flex size-full flex-col gap-4 p-4" };
var _hoisted_3$12 = {
	key: 0,
	class: "flex flex-col gap-3"
};
var _hoisted_4$10 = ["aria-label"];
var _hoisted_5$8 = {
	key: 0,
	class: "rounded-md bg-secondary-background p-4 font-mono text-xs"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/ImportFailedNodeContent.vue
var ImportFailedNodeContent_default = /* @__PURE__ */ defineComponent({
	__name: "ImportFailedNodeContent",
	props: { conflictedPackages: {} },
	setup(__props) {
		const importFailedPackages = computed(() => {
			return __props.conflictedPackages.filter((pkg) => pkg.conflicts.some((conflict) => conflict.type === "import_failed")).map((pkg) => {
				const importFailedConflict = pkg.conflicts.find((conflict) => conflict.type === "import_failed");
				if (!importFailedConflict) return {
					packageId: pkg.package_id,
					packageName: pkg.package_name,
					errorMessage: "Unknown import error",
					traceback: ""
				};
				return {
					packageId: pkg.package_id,
					packageName: pkg.package_name,
					errorMessage: importFailedConflict.current_value || "Unknown import error",
					traceback: importFailedConflict.required_value || ""
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$16, [createBaseVNode("div", _hoisted_2$14, [importFailedPackages.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$12, [(openBlock(true), createElementBlock(Fragment, null, renderList(importFailedPackages.value, (pkg) => {
				return openBlock(), createElementBlock("div", {
					key: pkg.packageId,
					class: "flex scrollbar-custom max-h-60 flex-col gap-2 overflow-x-hidden overflow-y-auto",
					role: "region",
					"aria-label": `Error traceback for ${pkg.packageId}`,
					tabindex: "0"
				}, [pkg.traceback || pkg.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_5$8, toDisplayString(pkg.traceback || pkg.errorMessage), 1)) : createCommentVNode("", true)], 8, _hoisted_4$10);
			}), 128))])) : createCommentVNode("", true)])]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/ImportFailedNodeFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$15 = { class: "flex w-full items-center justify-between px-3 pb-4" };
var _hoisted_2$13 = { class: "flex w-full items-start justify-end gap-2 pr-1" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/ImportFailedNodeFooter.vue
var ImportFailedNodeFooter_default = /* @__PURE__ */ defineComponent({
	__name: "ImportFailedNodeFooter",
	props: { conflictedPackages: { default: () => [] } },
	setup(__props) {
		const { copyToClipboard } = useCopyToClipboard();
		const formatErrorText = computed(() => {
			const errorParts = [];
			__props.conflictedPackages.forEach((pkg) => {
				const importFailedConflict = pkg.conflicts.find((conflict) => conflict.type === "import_failed");
				if (importFailedConflict?.required_value) errorParts.push(importFailedConflict.required_value);
			});
			return errorParts.join("\n\n");
		});
		const handleCopyError = () => {
			copyToClipboard(formatErrorText.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$15, [createBaseVNode("div", _hoisted_2$13, [createVNode(Button_default, {
				variant: "secondary",
				onClick: handleCopyError
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("importFailed.copyError")), 1)]),
				_: 1
			})])]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/ImportFailedNodeHeader.vue
var _sfc_main = {};
var _hoisted_1$14 = { class: "flex w-full items-center justify-between p-4" };
var _hoisted_2$12 = { class: "flex items-center gap-2" };
var _hoisted_3$11 = { class: "m-0 text-sm" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$14, [createBaseVNode("div", _hoisted_2$12, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--triangle-alert] text-warning-background" }, null, -1)), createBaseVNode("p", _hoisted_3$11, toDisplayString(_ctx.$t("importFailed.title")), 1)])]);
}
var ImportFailedNodeHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/workbench/extensions/manager/composables/useImportFailedNodeDialog.ts
var DIALOG_KEY$1 = "global-import-failed";
function useImportFailedNodeDialog() {
	const { showSmallLayoutDialog } = useDialogService();
	const dialogStore = useDialogStore();
	function hide() {
		dialogStore.closeDialog({ key: DIALOG_KEY$1 });
	}
	function show(options = {}) {
		const { dialogComponentProps, conflictedPackages = [] } = options;
		showSmallLayoutDialog({
			key: DIALOG_KEY$1,
			headerComponent: ImportFailedNodeHeader_default,
			footerComponent: ImportFailedNodeFooter_default,
			component: ImportFailedNodeContent_default,
			dialogComponentProps,
			props: { conflictedPackages },
			footerProps: { conflictedPackages }
		});
	}
	return {
		show,
		hide
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/useImportFailedDetection.ts
/**
* Extracting import failed conflicts from conflict list
*/
function extractImportFailedConflicts(conflicts) {
	if (!conflicts) return null;
	const importFailedConflicts = conflicts.filter((item) => item.type === "import_failed");
	return importFailedConflicts.length > 0 ? importFailedConflicts : null;
}
/**
* Creating import failed dialog
*/
function createImportFailedDialog() {
	const { show } = useImportFailedNodeDialog();
	return (conflictedPackages, onClose) => {
		if (conflictedPackages && conflictedPackages.length > 0) show({
			conflictedPackages,
			dialogComponentProps: { onClose }
		});
	};
}
/**
* Composable for detecting and handling import failed conflicts
* @param packageId - Package ID string or computed ref
* @returns Object with import failed detection and dialog handler
*/
function useImportFailedDetection(packageId) {
	const { isPackInstalled } = useComfyManagerStore();
	const { getConflictsForPackageByID } = useConflictDetectionStore();
	const isInstalled = computed(() => packageId ? isPackInstalled(unref(packageId)) : false);
	const conflicts = computed(() => {
		const currentPackageId = unref(packageId);
		if (!currentPackageId || !isInstalled.value) return null;
		return getConflictsForPackageByID(currentPackageId) || null;
	});
	const importFailedInfo = computed(() => {
		return extractImportFailedConflicts(conflicts.value?.conflicts);
	});
	const importFailed = computed(() => {
		return importFailedInfo.value !== null;
	});
	const openDialog = createImportFailedDialog();
	return {
		importFailedInfo,
		importFailed,
		showImportFailedDialog: (onClose) => {
			if (conflicts.value) openDialog([conflicts.value], onClose);
		},
		isInstalled
	};
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackEnableToggle.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$13 = { class: "flex items-center gap-2" };
var TOGGLE_DEBOUNCE_MS = 256;
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackEnableToggle.vue
var PackEnableToggle_default = /* @__PURE__ */ defineComponent({
	__name: "PackEnableToggle",
	props: { nodePack: {} },
	setup(__props) {
		const { t } = useI18n();
		const { isPackEnabled, enablePack, disablePack, installedPacks } = useComfyManagerStore();
		const { getConflictsForPackageByID } = useConflictDetectionStore();
		const { show: showNodeConflictDialog } = useNodeConflictDialog();
		const { acknowledgmentState, markConflictsAsSeen } = useConflictAcknowledgment();
		const { showImportFailedDialog } = useImportFailedDetection(__props.nodePack.id || "");
		const isLoading = ref(false);
		const isEnabled = computed(() => isPackEnabled(__props.nodePack.id));
		const version = computed(() => {
			const id = __props.nodePack.id;
			if (!id) return "nightly";
			return installedPacks[id]?.ver ?? __props.nodePack.latest_version?.version ?? "nightly";
		});
		const packageConflict = computed(() => {
			if (!__props.nodePack.id) return void 0;
			return getConflictsForPackageByID(__props.nodePack.id);
		});
		const canToggleDirectly = computed(() => {
			return !(packageConflict.value?.has_conflict && !acknowledgmentState.value.modal_dismissed);
		});
		const showConflictModal = (skipModalDismissed) => {
			let modal_dismissed = acknowledgmentState.value.modal_dismissed;
			if (skipModalDismissed) modal_dismissed = false;
			if (packageConflict.value && !modal_dismissed) if (packageConflict.value.conflicts.some((conflict) => conflict.type === "import_failed")) showImportFailedDialog(() => {
				markConflictsAsSeen();
			});
			else showNodeConflictDialog({
				conflictedPackages: [packageConflict.value],
				buttonText: !isEnabled.value ? t("manager.conflicts.enableAnyway") : t("manager.conflicts.understood"),
				onButtonClick: async () => {
					if (!isEnabled.value) await handleEnable();
				},
				dialogComponentProps: { onClose: () => {
					markConflictsAsSeen();
				} }
			});
		};
		const handleEnable = () => {
			if (!__props.nodePack.id) throw new Error("Node ID is required for enabling");
			return enablePack({
				id: __props.nodePack.id,
				version: version.value ?? "latest"
			});
		};
		const handleDisable = () => {
			if (!__props.nodePack.id) throw new Error("Node ID is required for disabling");
			return disablePack({
				id: __props.nodePack.id,
				version: version.value ?? "latest"
			});
		};
		const handleToggle = async (enable) => {
			if (isLoading.value) return;
			isLoading.value = true;
			if (enable) await handleEnable();
			else await handleDisable();
			isLoading.value = false;
		};
		const onToggle = debounce((enable) => {
			handleToggle(enable);
		}, TOGGLE_DEBOUNCE_MS, { trailing: true });
		const handleToggleInteraction = async (event) => {
			if (!canToggleDirectly.value) {
				event.preventDefault();
				showConflictModal(false);
			}
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$13, [packageConflict.value?.has_conflict ? withDirectives((openBlock(), createElementBlock("div", {
				key: 0,
				class: "flex size-6 cursor-pointer items-center justify-center",
				onClick: _cache[0] || (_cache[0] = ($event) => showConflictModal(true))
			}, _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "icon-[lucide--triangle-alert] text-xl text-warning-background" }, null, -1)]))), [[_directive_tooltip, {
				value: _ctx.$t("manager.conflicts.warningTooltip"),
				showDelay: 300
			}]]) : createCommentVNode("", true), !canToggleDirectly.value ? (openBlock(), createBlock(unref(script$4), {
				key: 1,
				"model-value": isEnabled.value,
				disabled: isLoading.value,
				readonly: !canToggleDirectly.value,
				"aria-label": _ctx.$t("g.enableOrDisablePack"),
				onFocus: handleToggleInteraction
			}, null, 8, [
				"model-value",
				"disabled",
				"readonly",
				"aria-label"
			])) : (openBlock(), createBlock(unref(script$4), {
				key: 2,
				"model-value": isEnabled.value,
				disabled: isLoading.value,
				"aria-label": _ctx.$t("g.enableOrDisablePack"),
				"onUpdate:modelValue": unref(onToggle)
			}, null, 8, [
				"model-value",
				"disabled",
				"aria-label",
				"onUpdate:modelValue"
			]))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackTryUpdateButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = {
	key: 1,
	class: "icon-[lucide--refresh-cw]"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackTryUpdateButton.vue
var PackTryUpdateButton_default = /* @__PURE__ */ defineComponent({
	__name: "PackTryUpdateButton",
	props: {
		nodePack: {},
		size: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const managerStore = useComfyManagerStore();
		const isUpdating = ref(false);
		async function tryUpdate() {
			if (!__props.nodePack.id) {
				console.warn("Pack missing required id:", __props.nodePack);
				return;
			}
			isUpdating.value = true;
			try {
				await managerStore.updatePack.call({
					id: __props.nodePack.id,
					version: "nightly"
				});
				managerStore.updatePack.clear();
			} catch (error) {
				console.error("Nightly update failed:", error);
			} finally {
				isUpdating.value = false;
			}
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				variant: "primary",
				size: _ctx.size,
				disabled: isUpdating.value,
				onClick: tryUpdate
			}, {
				default: withCtx(() => [isUpdating.value ? (openBlock(), createBlock(DotSpinner_default, {
					key: 0,
					duration: "1s",
					size: _ctx.size === "sm" ? 12 : 16
				}, null, 8, ["size"])) : (openBlock(), createElementBlock("i", _hoisted_1$12)), createBaseVNode("span", null, toDisplayString(isUpdating.value ? unref(t)("g.updating") : unref(t)("manager.tryUpdate")), 1)]),
				_: 1
			}, 8, ["size", "disabled"])), [[
				_directive_tooltip,
				_ctx.$t("manager.tryUpdateTooltip"),
				void 0,
				{ top: true }
			]]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/button/PackUninstallButton.vue
var PackUninstallButton_default = /* @__PURE__ */ defineComponent({
	__name: "PackUninstallButton",
	props: {
		nodePacks: {},
		size: {}
	},
	setup(__props) {
		const managerStore = useComfyManagerStore();
		const { t } = useI18n();
		const createPayload = (uninstallItem) => {
			if (!uninstallItem.id) throw new Error("Node ID is required for uninstallation");
			return {
				id: uninstallItem.id,
				version: uninstallItem.latest_version?.version || "unknown"
			};
		};
		const uninstallPack = (item) => managerStore.uninstallPack(createPayload(item));
		const uninstallItems = async () => {
			if (!__props.nodePacks?.length) return;
			await Promise.all(__props.nodePacks.map(uninstallPack));
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				variant: "destructive",
				size: _ctx.size,
				onClick: uninstallItems
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--trash-2]" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.nodePacks.length > 1 ? unref(t)("manager.uninstallSelected") : unref(t)("manager.uninstall")), 1)]),
				_: 1
			}, 8, ["size"]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/MarkdownText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$11 = ["textContent"];
var _hoisted_2$11 = {
	key: 1,
	class: "wrap-break-word"
};
var _hoisted_3$10 = ["href"];
var _hoisted_4$9 = { class: "text-blue-600" };
var _hoisted_5$7 = { key: 1 };
var _hoisted_6$6 = { key: 2 };
var _hoisted_7$6 = {
	key: 3,
	class: "rounded-sm px-1 py-0.5 text-xs"
};
var _hoisted_8$5 = { key: 4 };
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/MarkdownText.vue
var MarkdownText_default = /* @__PURE__ */ defineComponent({
	__name: "MarkdownText",
	props: { text: {} },
	setup(__props) {
		const hasMarkdown = computed(() => {
			return /(\[.*?\]\(.*?\)|(\*\*|__)(.*?)(\*\*|__)|(\*|_)(.*?)(\*|_)|`(.*?)`)/.test(__props.text);
		});
		const parsedSegments = computed(() => {
			if (!hasMarkdown.value) return [{
				type: "text",
				text: __props.text
			}];
			const segments = [];
			const remainingText = __props.text;
			let lastIndex = 0;
			const linkRegex = /\[(.*?)\]\((.*?)\)/g;
			let linkMatch;
			while ((linkMatch = linkRegex.exec(remainingText)) !== null) {
				if (linkMatch.index > lastIndex) segments.push({
					type: "text",
					text: remainingText.substring(lastIndex, linkMatch.index)
				});
				segments.push({
					type: "link",
					text: linkMatch[1],
					url: linkMatch[2]
				});
				lastIndex = linkMatch.index + linkMatch[0].length;
			}
			if (lastIndex < remainingText.length) {
				let rest = remainingText.substring(lastIndex);
				rest = rest.replace(/(\*\*|__)(.*?)(\*\*|__)/g, (_, __, p2) => {
					segments.push({
						type: "bold",
						text: p2
					});
					return "";
				});
				rest = rest.replace(/(\*|_)(.*?)(\*|_)/g, (_, __, p2) => {
					segments.push({
						type: "italic",
						text: p2
					});
					return "";
				});
				rest = rest.replace(/`(.*?)`/g, (_, p1) => {
					segments.push({
						type: "code",
						text: p1
					});
					return "";
				});
				if (rest) segments.push({
					type: "text",
					text: rest
				});
			}
			return segments;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!hasMarkdown.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: "wrap-break-word",
				textContent: toDisplayString(_ctx.text)
			}, null, 8, _hoisted_1$11)) : (openBlock(), createElementBlock("div", _hoisted_2$11, [(openBlock(true), createElementBlock(Fragment, null, renderList(parsedSegments.value, (segment, index) => {
				return openBlock(), createElementBlock(Fragment, { key: index }, [segment.type === "link" && "url" in segment ? (openBlock(), createElementBlock("a", {
					key: 0,
					href: segment.url,
					target: "_blank",
					rel: "noopener noreferrer",
					class: "hover:underline"
				}, [createBaseVNode("span", _hoisted_4$9, toDisplayString(segment.text), 1)], 8, _hoisted_3$10)) : segment.type === "bold" ? (openBlock(), createElementBlock("strong", _hoisted_5$7, toDisplayString(segment.text), 1)) : segment.type === "italic" ? (openBlock(), createElementBlock("em", _hoisted_6$6, toDisplayString(segment.text), 1)) : segment.type === "code" ? (openBlock(), createElementBlock("code", _hoisted_7$6, toDisplayString(segment.text), 1)) : (openBlock(), createElementBlock("span", _hoisted_8$5, toDisplayString(segment.text), 1))], 64);
			}), 128))]))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/DescriptionTabPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = {
	key: 1,
	class: "text-muted-foreground italic"
};
var _hoisted_2$10 = ["href"];
var _hoisted_3$9 = {
	key: 0,
	class: "pi pi-github text-base"
};
var _hoisted_4$8 = { class: "break-all" };
var _hoisted_5$6 = ["href"];
var _hoisted_6$5 = { class: "break-all" };
var _hoisted_7$5 = {
	key: 1,
	class: "break-all text-muted-foreground"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/DescriptionTabPanel.vue
var DescriptionTabPanel_default = /* @__PURE__ */ defineComponent({
	__name: "DescriptionTabPanel",
	props: { nodePack: {} },
	setup(__props) {
		const { t } = useI18n();
		const isGitHubLink = (url) => url.includes("github.com");
		const isLicenseFile = (filename) => {
			return /^license(\.md|\.txt)?$/i.test(filename);
		};
		const extractBaseRepoUrl = (repoUrl) => {
			const match = repoUrl.match(/^(https?:\/\/github\.com\/[^/]+\/[^/]+)/i);
			return match ? match[1] : repoUrl;
		};
		const createLicenseUrl = (filename, repoUrl) => {
			if (!repoUrl || !filename) return "";
			const licenseFile = isLicenseFile(filename) ? filename : "LICENSE";
			return `${extractBaseRepoUrl(repoUrl)}/blob/main/${licenseFile}`;
		};
		const parseLicenseObject = (licenseObj) => {
			const licenseFile = licenseObj.file || licenseObj.text;
			if (typeof licenseFile === "string" && isLicenseFile(licenseFile) && __props.nodePack.repository) {
				const url = createLicenseUrl(licenseFile, __props.nodePack.repository);
				return {
					text: url,
					isUrl: !!url && isValidUrl(url)
				};
			} else if (licenseObj.text) return {
				text: licenseObj.text,
				isUrl: false
			};
			else if (typeof licenseFile === "string") return {
				text: licenseFile,
				isUrl: false
			};
			return {
				text: JSON.stringify(licenseObj),
				isUrl: false
			};
		};
		const formatLicense = (license) => {
			if (license === "{}") return null;
			try {
				const licenseObj = JSON.parse(license);
				if (Object.keys(licenseObj).length === 0) return null;
				return parseLicenseObject(licenseObj);
			} catch (e) {
				if (isLicenseFile(license) && __props.nodePack.repository) {
					const url = createLicenseUrl(license, __props.nodePack.repository);
					return {
						text: url,
						isUrl: !!url && isValidUrl(url)
					};
				}
				return {
					text: license,
					isUrl: false
				};
			}
		};
		const licenseInfo = computed(() => {
			if (!__props.nodePack.license) return null;
			return formatLicense(__props.nodePack.license);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(ModelInfoField_default, { label: unref(t)("g.description") }, {
					default: withCtx(() => [_ctx.nodePack.description ? (openBlock(), createBlock(MarkdownText_default, {
						key: 0,
						text: _ctx.nodePack.description,
						class: "text-muted-foreground"
					}, null, 8, ["text"])) : (openBlock(), createElementBlock("span", _hoisted_1$10, toDisplayString(unref(t)("manager.noDescription")), 1))]),
					_: 1
				}, 8, ["label"]),
				_ctx.nodePack.repository ? (openBlock(), createBlock(ModelInfoField_default, {
					key: 0,
					label: unref(t)("manager.repository")
				}, {
					default: withCtx(() => [createBaseVNode("a", {
						href: _ctx.nodePack.repository,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "hover:text-foreground inline-flex items-center gap-1.5 text-muted-foreground no-underline transition-colors"
					}, [
						isGitHubLink(_ctx.nodePack.repository) ? (openBlock(), createElementBlock("i", _hoisted_3$9)) : createCommentVNode("", true),
						createBaseVNode("span", _hoisted_4$8, toDisplayString(_ctx.nodePack.repository), 1),
						_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--external-link] size-4 shrink-0" }, null, -1))
					], 8, _hoisted_2$10)]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				licenseInfo.value ? (openBlock(), createBlock(ModelInfoField_default, {
					key: 1,
					label: unref(t)("manager.license")
				}, {
					default: withCtx(() => [licenseInfo.value.isUrl ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: licenseInfo.value.text,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "hover:text-foreground inline-flex items-center gap-1.5 text-muted-foreground no-underline transition-colors"
					}, [createBaseVNode("span", _hoisted_6$5, toDisplayString(licenseInfo.value.text), 1), _cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--external-link] size-4 shrink-0" }, null, -1))], 8, _hoisted_5$6)) : (openBlock(), createElementBlock("span", _hoisted_7$5, toDisplayString(licenseInfo.value.text), 1))]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				_ctx.nodePack.latest_version?.dependencies?.length ? (openBlock(), createBlock(ModelInfoField_default, {
					key: 2,
					label: unref(t)("manager.dependencies")
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodePack.latest_version.dependencies, (dep, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: "wrap-break-word text-muted-foreground"
						}, toDisplayString(dep), 1);
					}), 128))]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/utils/mapperUtil.ts
var registryToFrontendV2NodeOutputs = (registryDef) => {
	const returnTypes = JSON.parse(registryDef.return_types ?? "{}");
	if (!returnTypes.length) return [];
	const returnNames = JSON.parse(registryDef.return_names ?? "{}");
	const outputsIsList = registryDef.output_is_list ?? [];
	const outputs = [];
	for (let i = 0; i < returnTypes.length; i++) outputs.push({
		type: returnTypes[i],
		name: returnNames[i] || returnTypes[i],
		is_list: outputsIsList[i] ?? false,
		index: i
	});
	return outputs;
};
var registryToFrontendV2NodeInputs = (registryDef) => {
	const inputTypes = JSON.parse(registryDef.input_types ?? "{}");
	if (!inputTypes || !Object.keys(inputTypes).length) return {};
	const inputsV2 = {};
	if (inputTypes.required) Object.entries(inputTypes.required).forEach(([name, inputSpecV1]) => {
		inputsV2[name] = transformInputSpecV1ToV2(inputSpecV1, {
			name,
			isOptional: false
		});
	});
	if (inputTypes.optional) Object.entries(inputTypes.optional).forEach(([name, inputSpecV1]) => {
		inputsV2[name] = transformInputSpecV1ToV2(inputSpecV1, {
			name,
			isOptional: true
		});
	});
	return inputsV2;
};
var registryToFrontendV2NodeDef = (nodeDef, nodePack) => {
	const name = nodeDef.comfy_node_name ?? "Node Name";
	return {
		category: nodeDef.category ?? "unknown",
		description: nodeDef.description ?? "",
		display_name: name,
		name,
		inputs: registryToFrontendV2NodeInputs(nodeDef),
		outputs: registryToFrontendV2NodeOutputs(nodeDef),
		output_node: false,
		python_module: nodePack.name ?? nodePack.id ?? "unknown"
	};
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/NodesTabPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = { class: "flex flex-col gap-1 text-sm" };
var _hoisted_2$9 = {
	key: 0,
	class: "flex flex-col gap-2"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/NodesTabPanel.vue
var NodesTabPanel_default = /* @__PURE__ */ defineComponent({
	__name: "NodesTabPanel",
	props: {
		nodePack: {},
		nodeNames: {}
	},
	setup(__props) {
		const { getNodeDefs } = useComfyRegistryStore();
		const isLoading = ref(false);
		const registryNodeDefs = shallowRef(null);
		const fetchNodeDefs = async () => {
			getNodeDefs.cancel();
			isLoading.value = true;
			const { id: packId } = __props.nodePack;
			const version = __props.nodePack.latest_version?.version;
			if (!packId || !version) registryNodeDefs.value = null;
			else registryNodeDefs.value = (await getNodeDefs.call({
				packId,
				version,
				page: 1,
				limit: 256
			}))?.comfy_nodes ?? null;
			isLoading.value = false;
		};
		whenever(() => __props.nodePack, fetchNodeDefs, {
			immediate: true,
			deep: true
		});
		const toFrontendNodeDef = (nodeDef) => {
			try {
				return registryToFrontendV2NodeDef(nodeDef, __props.nodePack);
			} catch (error) {
				return null;
			}
		};
		const mappedNodeDefs = computed(() => {
			if (!registryNodeDefs.value) return null;
			return registryNodeDefs.value.map(toFrontendNodeDef).filter((nodeDef) => nodeDef !== null);
		});
		const createNodeDefKey = (nodeDef) => `${nodeDef.category}${nodeDef.comfy_node_name ?? useId()}`;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$9, [mappedNodeDefs.value?.length ? (openBlock(), createElementBlock("div", _hoisted_2$9, [(openBlock(true), createElementBlock(Fragment, null, renderList(mappedNodeDefs.value, (nodeDef) => {
				return openBlock(), createElementBlock("div", {
					key: createNodeDefKey(nodeDef),
					class: "scale-75"
				}, [createVNode(NodePreview_default, {
					"node-def": nodeDef,
					class: "min-w-full!"
				}, null, 8, ["node-def"])]);
			}), 128))])) : isLoading.value ? (openBlock(), createBlock(unref(script$1), { key: 1 })) : _ctx.nodeNames.length ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(_ctx.nodeNames, (node) => {
				return openBlock(), createElementBlock("div", {
					key: node,
					class: "truncate text-muted"
				}, toDisplayString(node), 1);
			}), 128)) : (openBlock(), createBlock(NoResultsPlaceholder_default, {
				key: 3,
				title: _ctx.$t("manager.noNodesFound"),
				message: _ctx.$t("manager.noNodesFoundDescription")
			}, null, 8, ["title", "message"]))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/WarningTabPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = { class: "flex flex-col gap-3" };
var _hoisted_2$8 = {
	key: 0,
	class: "overflow-x-hidden rounded-sm"
};
var _hoisted_3$8 = { class: "m-0 font-mono text-xs break-all text-muted-foreground" };
var _hoisted_4$7 = {
	key: 1,
	class: "text-sm wrap-break-word"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/tabs/WarningTabPanel.vue
var WarningTabPanel_default = /* @__PURE__ */ defineComponent({
	__name: "WarningTabPanel",
	props: { conflictResult: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$8, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.conflictResult?.conflicts || [], (conflict, index) => {
				return openBlock(), createElementBlock("div", {
					key: index,
					class: "rounded-md bg-secondary-background/60"
				}, [conflict.type === "import_failed" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [conflict.required_value ? (openBlock(), createElementBlock("div", _hoisted_2$8, [createBaseVNode("p", _hoisted_3$8, toDisplayString(conflict.required_value), 1)])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", _hoisted_4$7, toDisplayString(unref(getConflictMessage)(conflict, _ctx.$t)), 1))]);
			}), 128))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/types/comfyManagerTypes.ts
var isMergedNodePack = (nodePack) => "comfy_nodes" in nodePack;
var IsInstallingKey = Symbol("isInstalling");
var ManagerTab = /* @__PURE__ */ function(ManagerTab) {
	ManagerTab["All"] = "all";
	ManagerTab["NotInstalled"] = "notInstalled";
	ManagerTab["AllInstalled"] = "allInstalled";
	ManagerTab["UpdateAvailable"] = "updateAvailable";
	ManagerTab["Conflicting"] = "conflicting";
	ManagerTab["Workflow"] = "workflow";
	ManagerTab["Missing"] = "missing";
	ManagerTab["Unresolved"] = "unresolved";
	return ManagerTab;
}({});
var SortableAlgoliaField = /* @__PURE__ */ function(SortableAlgoliaField) {
	SortableAlgoliaField["Downloads"] = "total_install";
	SortableAlgoliaField["Created"] = "create_time";
	SortableAlgoliaField["Updated"] = "update_time";
	SortableAlgoliaField["Publisher"] = "publisher_id";
	SortableAlgoliaField["Name"] = "name";
	return SortableAlgoliaField;
}({});
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/InfoPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { class: "font-inter text-xs uppercase" };
var _hoisted_2$7 = { class: "flex flex-col gap-1 px-4" };
var _hoisted_3$7 = { class: "font-inter text-xs uppercase" };
var _hoisted_4$6 = { class: "text-muted-foreground" };
var _hoisted_5$5 = { class: "text-muted-foreground" };
var _hoisted_6$4 = { class: "font-inter text-xs uppercase" };
var _hoisted_7$4 = { class: "font-inter text-xs uppercase" };
var _hoisted_8$4 = { class: "px-4 py-2" };
var _hoisted_9$3 = { class: "font-inter text-xs uppercase" };
var _hoisted_10$2 = { class: "px-4 py-2" };
var _hoisted_11$1 = {
	key: 1,
	class: "flex-1 overflow-hidden px-8 pt-4 text-sm"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/InfoPanel.vue
var InfoPanel_default = /* @__PURE__ */ defineComponent({
	__name: "InfoPanel",
	props: { nodePack: {} },
	setup(__props) {
		const scrollContainer = ref(null);
		const accordionClass = cn("border-t border-border-default bg-modal-panel-background");
		const { isPackInstalled } = useComfyManagerStore();
		const isInstalled = computed(() => isPackInstalled(__props.nodePack.id));
		const isInstalling = ref(false);
		provide(IsInstallingKey, isInstalling);
		whenever(isInstalled, () => {
			isInstalling.value = false;
		});
		const { canTryNightlyUpdate, isUpdateAvailable } = usePackUpdateStatus(() => __props.nodePack);
		const isAllInstalled = computed(() => isPackInstalled(__props.nodePack.id));
		const { checkNodeCompatibility } = useConflictDetection();
		const conflictInfo = computed(() => {
			return checkNodeCompatibility(__props.nodePack).conflicts ?? [];
		});
		const hasConflictInfo = computed(() => conflictInfo.value.length > 0);
		const { getConflictsForPackageByID } = useConflictDetectionStore();
		const { t, d, n } = useI18n();
		const conflictResult = computed(() => {
			if (isInstalled.value && __props.nodePack.id) return getConflictsForPackageByID(__props.nodePack.id) || null;
			const compatibility = checkNodeCompatibility(__props.nodePack);
			if (compatibility.hasConflict) return {
				package_id: __props.nodePack.id || "",
				package_name: __props.nodePack.name || "",
				has_conflict: true,
				conflicts: compatibility.conflicts,
				is_compatible: false
			};
			return null;
		});
		const hasCompatibilityIssues = computed(() => {
			return conflictResult.value?.has_conflict;
		});
		const { importFailed, showImportFailedDialog } = useImportFailedDetection(computed(() => __props.nodePack.id || ""));
		provide(ImportFailedKey, {
			importFailed,
			showImportFailedDialog
		});
		const nodeNames = computed(() => {
			const { comfy_nodes } = __props.nodePack;
			return comfy_nodes ?? [];
		});
		const infoItems = computed(() => [
			{
				key: "publisher",
				label: t("manager.createdBy"),
				value: __props.nodePack.publisher?.name ?? __props.nodePack.publisher?.id
			},
			{
				key: "downloads",
				label: t("manager.downloads"),
				value: __props.nodePack.downloads ? n(__props.nodePack.downloads) : void 0
			},
			{
				key: "lastUpdated",
				label: t("manager.lastUpdated"),
				value: __props.nodePack.latest_version?.createdAt ? d(__props.nodePack.latest_version.createdAt, { dateStyle: "medium" }) : void 0
			}
		]);
		whenever(() => __props.nodePack.id, (nodePackId, oldNodePackId) => {
			if (nodePackId !== oldNodePackId && scrollContainer.value) scrollContainer.value.scrollTop = 0;
		}, { immediate: true });
		return (_ctx, _cache) => {
			return _ctx.nodePack ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "scrollContainer",
				ref: scrollContainer,
				class: "flex scrollbar-custom h-full flex-col overflow-y-auto"
			}, [
				!unref(importFailed) ? (openBlock(), createBlock(PropertiesAccordionItem_default, {
					key: 0,
					class: normalizeClass(unref(accordionClass))
				}, {
					label: withCtx(() => [createBaseVNode("span", _hoisted_1$7, toDisplayString(unref(t)("manager.actions")), 1)]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_2$7, [unref(canTryNightlyUpdate) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(PackTryUpdateButton_default, {
						"node-pack": _ctx.nodePack,
						size: "md"
					}, null, 8, ["node-pack"]), createVNode(PackUninstallButton_default, {
						"node-packs": [_ctx.nodePack],
						size: "md"
					}, null, 8, ["node-packs"])], 64)) : unref(isUpdateAvailable) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(PackUpdateButton_default, {
						"node-packs": [_ctx.nodePack],
						size: "md"
					}, null, 8, ["node-packs"]), createVNode(PackUninstallButton_default, {
						"node-packs": [_ctx.nodePack],
						size: "md"
					}, null, 8, ["node-packs"])], 64)) : isAllInstalled.value ? (openBlock(), createBlock(PackUninstallButton_default, {
						key: 2,
						"node-packs": [_ctx.nodePack],
						size: "md"
					}, null, 8, ["node-packs"])) : (openBlock(), createBlock(PackInstallButton_default, {
						key: 3,
						"node-packs": [_ctx.nodePack],
						size: "md",
						"has-conflict": hasCompatibilityIssues.value || hasConflictInfo.value,
						"conflict-info": conflictInfo.value
					}, null, 8, [
						"node-packs",
						"has-conflict",
						"conflict-info"
					]))])]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(PropertiesAccordionItem_default, { class: normalizeClass(unref(accordionClass)) }, {
					label: withCtx(() => [createBaseVNode("span", _hoisted_3$7, toDisplayString(unref(t)("manager.basicInfo")), 1)]),
					default: withCtx(() => [
						createVNode(ModelInfoField_default, { label: unref(t)("g.name") }, {
							default: withCtx(() => [createBaseVNode("span", _hoisted_4$6, toDisplayString(_ctx.nodePack.name), 1)]),
							_: 1
						}, 8, ["label"]),
						!unref(importFailed) && unref(isPackInstalled)(_ctx.nodePack.id) ? (openBlock(), createBlock(ModelInfoField_default, {
							key: 0,
							label: unref(t)("manager.filter.enabled")
						}, {
							default: withCtx(() => [createVNode(PackEnableToggle_default, {
								"node-pack": _ctx.nodePack,
								"has-conflict": hasCompatibilityIssues.value
							}, null, 8, ["node-pack", "has-conflict"])]),
							_: 1
						}, 8, ["label"])) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(infoItems.value, (item) => {
							return withDirectives((openBlock(), createBlock(ModelInfoField_default, {
								key: item.key,
								label: item.label
							}, {
								default: withCtx(() => [createBaseVNode("span", _hoisted_5$5, toDisplayString(item.value), 1)]),
								_: 2
							}, 1032, ["label"])), [[vShow, item.value !== void 0 && item.value !== null]]);
						}), 128)),
						createVNode(ModelInfoField_default, { label: unref(t)("g.status") }, {
							default: withCtx(() => [createVNode(PackStatusMessage_default, {
								"status-type": _ctx.nodePack.status,
								"has-compatibility-issues": hasCompatibilityIssues.value
							}, null, 8, ["status-type", "has-compatibility-issues"])]),
							_: 1
						}, 8, ["label"]),
						createVNode(ModelInfoField_default, { label: unref(t)("manager.version") }, {
							default: withCtx(() => [createVNode(PackVersionBadge_default, {
								"node-pack": _ctx.nodePack,
								"is-selected": true
							}, null, 8, ["node-pack"])]),
							_: 1
						}, 8, ["label"])
					]),
					_: 1
				}, 8, ["class"]),
				createVNode(PropertiesAccordionItem_default, { class: normalizeClass(unref(accordionClass)) }, {
					label: withCtx(() => [createBaseVNode("span", _hoisted_6$4, toDisplayString(unref(t)("g.description")), 1)]),
					default: withCtx(() => [createVNode(DescriptionTabPanel_default, { "node-pack": _ctx.nodePack }, null, 8, ["node-pack"])]),
					_: 1
				}, 8, ["class"]),
				hasCompatibilityIssues.value ? (openBlock(), createBlock(PropertiesAccordionItem_default, {
					key: 1,
					class: normalizeClass(unref(accordionClass))
				}, {
					label: withCtx(() => [createBaseVNode("span", _hoisted_7$4, " ⚠️ " + toDisplayString(unref(importFailed) ? unref(t)("g.error") : unref(t)("g.warning")), 1)]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_8$4, [createVNode(WarningTabPanel_default, { "conflict-result": conflictResult.value }, null, 8, ["conflict-result"])])]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(PropertiesAccordionItem_default, { class: normalizeClass(unref(accordionClass)) }, {
					label: withCtx(() => [createBaseVNode("span", _hoisted_9$3, toDisplayString(unref(t)("g.nodes")), 1)]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_10$2, [createVNode(NodesTabPanel_default, {
						"node-pack": _ctx.nodePack,
						"node-names": nodeNames.value
					}, null, 8, ["node-pack", "node-names"])])]),
					_: 1
				}, 8, ["class"])
			], 512)) : (openBlock(), createElementBlock("div", _hoisted_11$1, toDisplayString(_ctx.$t("manager.infoPanelEmpty")), 1));
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/usePacksSelection.ts
/**
* Composable for managing multi-package selection states
* Handles installation status tracking and selection state determination
*/
function usePacksSelection(nodePacks) {
	const managerStore = useComfyManagerStore();
	const installedPacks = computed(() => nodePacks.value.filter((pack) => managerStore.isPackInstalled(pack.id)));
	const notInstalledPacks = computed(() => nodePacks.value.filter((pack) => !managerStore.isPackInstalled(pack.id)));
	const isAllInstalled = computed(() => installedPacks.value.length === nodePacks.value.length);
	const isNoneInstalled = computed(() => notInstalledPacks.value.length === nodePacks.value.length);
	const isMixed = computed(() => installedPacks.value.length > 0 && notInstalledPacks.value.length > 0);
	const selectionState = computed(() => {
		if (isAllInstalled.value) return "all-installed";
		if (isNoneInstalled.value) return "none-installed";
		return "mixed";
	});
	/**
	* Nightly packs are installed packs with a non-semver version (git hash)
	* that are also enabled
	*/
	const nightlyPacks = computed(() => installedPacks.value.filter((pack) => {
		if (!pack.id) return false;
		const version = managerStore.getInstalledPackVersion(pack.id);
		const isNightly = !!version && !(0, import_semver.valid)(version);
		const isEnabled = managerStore.isPackEnabled(pack.id);
		return isNightly && isEnabled;
	}));
	return {
		installedPacks,
		notInstalledPacks,
		isAllInstalled,
		isNoneInstalled,
		isMixed,
		selectionState,
		nightlyPacks,
		hasNightlyPacks: computed(() => nightlyPacks.value.length > 0)
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/usePacksStatus.ts
var STATUS_PRIORITY = [
	"NodeStatusBanned",
	"NodeVersionStatusBanned",
	"NodeStatusDeleted",
	"NodeVersionStatusDeleted",
	"NodeVersionStatusFlagged",
	"NodeVersionStatusPending",
	"NodeStatusActive",
	"NodeVersionStatusActive"
];
/**
* Composable for managing package status with priority
* Handles import failures and determines the most important status
*/
function usePacksStatus(nodePacks) {
	const conflictDetectionStore = useConflictDetectionStore();
	const hasImportFailed = computed(() => {
		return nodePacks.value.some((pack) => {
			if (!pack.id) return false;
			return conflictDetectionStore.getConflictsForPackageByID(pack.id)?.conflicts?.some((c) => c.type === "import_failed") || false;
		});
	});
	return {
		hasImportFailed,
		overallStatus: computed(() => {
			if (hasImportFailed.value) return "NodeVersionStatusActive";
			for (const priorityStatus of STATUS_PRIORITY) if (nodePacks.value.some((pack) => pack.status === priorityStatus)) return priorityStatus;
			return "NodeVersionStatusActive";
		})
	};
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/InfoPanelMultiItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = {
	key: 0,
	class: "flex scrollbar-custom h-full flex-col overflow-y-auto"
};
var _hoisted_2$6 = { class: "font-inter text-xs uppercase" };
var _hoisted_3$6 = { class: "flex flex-col gap-1 px-4" };
var _hoisted_4$5 = {
	key: 0,
	class: "text-sm text-neutral-500"
};
var _hoisted_5$4 = { class: "font-inter text-xs uppercase" };
var _hoisted_6$3 = { class: "font-bold text-blue-500" };
var _hoisted_7$3 = { class: "text-muted-foreground" };
var _hoisted_8$3 = {
	key: 1,
	class: "mx-8 mt-4 flex-1 overflow-hidden text-sm"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/infoPanel/InfoPanelMultiItem.vue
var InfoPanelMultiItem_default = /* @__PURE__ */ defineComponent({
	__name: "InfoPanelMultiItem",
	props: { nodePacks: {} },
	setup(__props) {
		const { t } = useI18n();
		const accordionClass = cn("border-t border-border-default bg-modal-panel-background");
		const managerStore = useComfyManagerStore();
		const nodePacksRef = toRef(() => __props.nodePacks);
		const { installedPacks, notInstalledPacks, isAllInstalled, isNoneInstalled, isMixed, nightlyPacks, hasNightlyPacks } = usePacksSelection(nodePacksRef);
		const { hasImportFailed, overallStatus } = usePacksStatus(nodePacksRef);
		const isUpdatingSelected = ref(false);
		async function updateSelectedNightlyPacks() {
			if (nightlyPacks.value.length === 0) return;
			isUpdatingSelected.value = true;
			try {
				for (const pack of nightlyPacks.value) {
					if (!pack.id) continue;
					await managerStore.updatePack.call({
						id: pack.id,
						version: "nightly"
					});
				}
				managerStore.updatePack.clear();
			} catch (error) {
				console.error("Batch nightly update failed:", error);
			} finally {
				isUpdatingSelected.value = false;
			}
		}
		const updateSelectedLabel = computed(() => isUpdatingSelected.value ? t("g.updating") : t("manager.updateSelected"));
		const { checkNodeCompatibility } = useConflictDetection();
		const { getNodeDefs } = useComfyRegistryStore();
		provide(ImportFailedKey, {
			importFailed: hasImportFailed,
			showImportFailedDialog: () => {}
		});
		const packageConflicts = computed(() => {
			const conflictsByPackage = /* @__PURE__ */ new Map();
			for (const pack of notInstalledPacks.value) {
				const compatibilityCheck = checkNodeCompatibility(pack);
				if (compatibilityCheck.hasConflict && pack.id) conflictsByPackage.set(pack.id, compatibilityCheck.conflicts);
			}
			return conflictsByPackage;
		});
		const conflictInfo = computed(() => {
			const conflictMap = /* @__PURE__ */ new Map();
			packageConflicts.value.forEach((conflicts) => {
				conflicts.forEach((conflict) => {
					const key = `${conflict.type}-${conflict.current_value}-${conflict.required_value}`;
					if (!conflictMap.has(key)) conflictMap.set(key, conflict);
				});
			});
			return Array.from(conflictMap.values());
		});
		const hasConflicts = computed(() => conflictInfo.value.length > 0);
		const getPackNodes = async (pack) => {
			if (!pack.latest_version?.version) return [];
			return (await getNodeDefs.call({
				packId: pack.id,
				version: pack.latest_version?.version,
				limit: 8192
			}))?.comfy_nodes ?? [];
		};
		const { state: allNodeDefs } = useAsyncState(() => Promise.all(__props.nodePacks.map(getPackNodes)), [], { immediate: true });
		const totalNodesCount = computed(() => allNodeDefs.value.reduce((total, nodeDefs) => total + (nodeDefs?.length || 0), 0));
		onUnmounted(() => {
			getNodeDefs.cancel();
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return _ctx.nodePacks?.length ? (openBlock(), createElementBlock("div", _hoisted_1$6, [createVNode(PropertiesAccordionItem_default, { class: normalizeClass(unref(accordionClass)) }, {
				label: withCtx(() => [createBaseVNode("span", _hoisted_2$6, toDisplayString(unref(t)("manager.actions")), 1)]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_3$6, [unref(isMixed) ? (openBlock(), createElementBlock("div", _hoisted_4$5, toDisplayString(_ctx.$t("manager.mixedSelectionMessage")), 1)) : unref(isAllInstalled) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(hasNightlyPacks) ? withDirectives((openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "textonly",
					size: "md",
					disabled: isUpdatingSelected.value,
					onClick: updateSelectedNightlyPacks
				}, {
					default: withCtx(() => [isUpdatingSelected.value ? (openBlock(), createBlock(DotSpinner_default, {
						key: 0,
						duration: "1s",
						size: 16
					})) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(updateSelectedLabel.value), 1)]),
					_: 1
				}, 8, ["disabled"])), [[
					_directive_tooltip,
					_ctx.$t("manager.tryUpdateTooltip"),
					void 0,
					{ top: true }
				]]) : createCommentVNode("", true), createVNode(PackUninstallButton_default, {
					size: "md",
					"node-packs": unref(installedPacks)
				}, null, 8, ["node-packs"])], 64)) : unref(isNoneInstalled) ? (openBlock(), createBlock(PackInstallButton_default, {
					key: 2,
					size: "md",
					"node-packs": unref(notInstalledPacks),
					"has-conflict": hasConflicts.value,
					"conflict-info": conflictInfo.value
				}, null, 8, [
					"node-packs",
					"has-conflict",
					"conflict-info"
				])) : createCommentVNode("", true)])]),
				_: 1
			}, 8, ["class"]), createVNode(PropertiesAccordionItem_default, { class: normalizeClass(unref(accordionClass)) }, {
				label: withCtx(() => [createBaseVNode("span", _hoisted_5$4, toDisplayString(unref(t)("manager.basicInfo")), 1)]),
				default: withCtx(() => [
					createVNode(ModelInfoField_default, { label: unref(t)("manager.selected") }, {
						default: withCtx(() => [createBaseVNode("span", null, [createBaseVNode("span", _hoisted_6$3, toDisplayString(_ctx.nodePacks.length), 1), createTextVNode(" " + toDisplayString(unref(t)("manager.packsSelected")), 1)])]),
						_: 1
					}, 8, ["label"]),
					createVNode(ModelInfoField_default, { label: unref(t)("g.status") }, {
						default: withCtx(() => [createVNode(PackStatusMessage_default, {
							"status-type": unref(overallStatus),
							"has-compatibility-issues": hasConflicts.value
						}, null, 8, ["status-type", "has-compatibility-issues"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(ModelInfoField_default, { label: unref(t)("manager.totalNodes") }, {
						default: withCtx(() => [createBaseVNode("span", _hoisted_7$3, toDisplayString(totalNodesCount.value), 1)]),
						_: 1
					}, 8, ["label"])
				]),
				_: 1
			}, 8, ["class"])])) : (openBlock(), createElementBlock("div", _hoisted_8$3, toDisplayString(_ctx.$t("manager.infoPanelEmpty")), 1));
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/packBanner/PackBanner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { class: "z-0 aspect-7/3 w-full overflow-hidden" };
var _hoisted_2$5 = {
	key: 0,
	class: "size-full"
};
var _hoisted_3$5 = ["alt"];
var _hoisted_4$4 = {
	key: 1,
	class: "relative size-full"
};
var _hoisted_5$3 = ["src", "alt"];
var DEFAULT_BANNER = "/assets/images/fallback-gradient-avatar.svg";
//#endregion
//#region src/workbench/extensions/manager/components/manager/packBanner/PackBanner.vue
var PackBanner_default = /* @__PURE__ */ defineComponent({
	__name: "PackBanner",
	props: { nodePack: {} },
	setup(__props) {
		const isImageError = ref(false);
		const showDefaultBanner = computed(() => !__props.nodePack.banner_url && !__props.nodePack.icon);
		const imgSrc = computed(() => __props.nodePack.banner_url || __props.nodePack.icon);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$5, [showDefaultBanner.value ? (openBlock(), createElementBlock("div", _hoisted_2$5, [createBaseVNode("img", {
				src: DEFAULT_BANNER,
				alt: _ctx.$t("g.defaultBanner"),
				class: "size-full object-cover"
			}, null, 8, _hoisted_3$5)])) : (openBlock(), createElementBlock("div", _hoisted_4$4, [imgSrc.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
				style: normalizeStyle({
					backgroundImage: `url(${imgSrc.value})`,
					filter: "blur(10px)"
				})
			}, null, 4)) : createCommentVNode("", true), createBaseVNode("img", {
				src: isImageError.value ? DEFAULT_BANNER : imgSrc.value,
				alt: _ctx.nodePack.name + " banner",
				class: normalizeClass(isImageError.value ? "relative z-10 size-full object-cover" : "relative z-10 size-full object-contain"),
				onError: _cache[0] || (_cache[0] = ($event) => isImageError.value = true)
			}, null, 42, _hoisted_5$3)]))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/packCard/PackCardFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "flex min-h-12 items-center justify-between px-4 py-2 text-xs/3 font-medium text-muted" };
var _hoisted_2$4 = {
	key: 0,
	class: "flex items-center gap-1.5"
};
var _hoisted_3$4 = { key: 1 };
//#endregion
//#region src/workbench/extensions/manager/components/manager/packCard/PackCardFooter.vue
var PackCardFooter_default = /* @__PURE__ */ defineComponent({
	__name: "PackCardFooter",
	props: { nodePack: {} },
	setup(__props) {
		const { isPackInstalled } = useComfyManagerStore();
		const isInstalled = computed(() => isPackInstalled(__props.nodePack?.id));
		const isInstalling = inject(IsInstallingKey);
		const { n } = useI18n();
		const formattedDownloads = computed(() => __props.nodePack.downloads ? n(__props.nodePack.downloads) : "");
		const { checkNodeCompatibility } = useConflictDetection();
		const conflictInfo = computed(() => {
			if (!__props.nodePack) return [];
			return checkNodeCompatibility(__props.nodePack).conflicts || [];
		});
		const hasConflicts = computed(() => conflictInfo.value.length > 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$4, [_ctx.nodePack.downloads ? (openBlock(), createElementBlock("div", _hoisted_2$4, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-download text-muted" }, null, -1)), createBaseVNode("span", null, toDisplayString(formattedDownloads.value), 1)])) : (openBlock(), createElementBlock("div", _hoisted_3$4)), !isInstalled.value ? (openBlock(), createBlock(PackInstallButton_default, {
				key: 2,
				"node-packs": [_ctx.nodePack],
				"is-installing": unref(isInstalling),
				"has-conflict": hasConflicts.value,
				"conflict-info": conflictInfo.value
			}, null, 8, [
				"node-packs",
				"is-installing",
				"has-conflict",
				"conflict-info"
			])) : (openBlock(), createBlock(PackEnableToggle_default, {
				key: 3,
				"node-pack": _ctx.nodePack
			}, null, 8, ["node-pack"]))]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/packCard/PackCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "w-full rounded-t-lg" };
var _hoisted_2$3 = { class: "flex min-h-0 flex-1 flex-col rounded-lg" };
var _hoisted_3$3 = { class: "size-full px-3 py-2" };
var _hoisted_4$3 = { class: "flex size-full flex-col gap-y-1" };
var _hoisted_5$2 = { class: "truncate overflow-hidden text-xs font-bold text-ellipsis" };
var _hoisted_6$2 = {
	key: 0,
	class: "my-0 mb-1 line-clamp-3 min-h-12 flex-1 overflow-hidden text-xs/4 font-medium wrap-break-word text-muted"
};
var _hoisted_7$2 = { class: "flex flex-col gap-y-2" };
var _hoisted_8$2 = { class: "flex flex-1 items-center gap-2" };
var _hoisted_9$2 = {
	key: 0,
	class: "p-2 pl-0 text-xs"
};
var _hoisted_10$1 = {
	key: 1,
	class: "flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium text-muted"
};
var _hoisted_11 = { class: "flex" };
var _hoisted_12 = {
	key: 0,
	class: "max-w-40 truncate text-xs/3 font-medium text-muted"
};
var _hoisted_13 = { class: "border-t border-border-default" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/packCard/PackCard.vue
var PackCard_default = /* @__PURE__ */ defineComponent({
	__name: "PackCard",
	props: {
		nodePack: {},
		isSelected: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { d, t } = useI18n();
		const { isPackInstalled, isPackEnabled, isPackInstalling } = useComfyManagerStore();
		const isInstalling = computed(() => isPackInstalling(__props.nodePack?.id));
		provide(IsInstallingKey, isInstalling);
		const isInstalled = computed(() => isPackInstalled(__props.nodePack?.id));
		const isDisabled = computed(() => isInstalled.value && !isPackEnabled(__props.nodePack?.id));
		const nodesCount = computed(() => isMergedNodePack(__props.nodePack) ? __props.nodePack.comfy_nodes?.length : void 0);
		const nodesLabel = computed(() => nodesCount.value ? t("g.nodesCount", nodesCount.value) : "");
		const publisherName = computed(() => {
			if (!__props.nodePack) return null;
			const { publisher, author } = __props.nodePack;
			return publisher?.name ?? publisher?.id ?? author;
		});
		const formattedLatestVersionDate = computed(() => {
			if (!__props.nodePack.latest_version?.createdAt) return null;
			return d(new Date(__props.nodePack.latest_version.createdAt), { dateStyle: "medium" });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("flex size-full cursor-pointer flex-col overflow-hidden rounded-lg bg-modal-card-background transition-colors duration-200 select-none", _ctx.isSelected ? "ring-3 ring-modal-card-border-highlighted" : "hover:bg-modal-card-background-hovered", isDisabled.value && "opacity-60")) }, [
				createBaseVNode("div", _hoisted_1$3, [createVNode(PackBanner_default, { "node-pack": _ctx.nodePack }, null, 8, ["node-pack"])]),
				createBaseVNode("div", _hoisted_2$3, [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("div", _hoisted_4$3, [
					createBaseVNode("span", _hoisted_5$2, toDisplayString(_ctx.nodePack.name), 1),
					_ctx.nodePack.description ? (openBlock(), createElementBlock("p", _hoisted_6$2, toDisplayString(_ctx.nodePack.description), 1)) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_7$2, [createBaseVNode("div", _hoisted_8$2, [
						nodesLabel.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, toDisplayString(nodesLabel.value), 1)) : createCommentVNode("", true),
						createVNode(PackVersionBadge_default, {
							"node-pack": _ctx.nodePack,
							"is-selected": _ctx.isSelected,
							fill: false,
							class: normalizeClass(isInstalling.value ? "pointer-events-none" : "")
						}, null, 8, [
							"node-pack",
							"is-selected",
							"class"
						]),
						formattedLatestVersionDate.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, toDisplayString(formattedLatestVersionDate.value), 1)) : createCommentVNode("", true)
					]), createBaseVNode("div", _hoisted_11, [publisherName.value ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(publisherName.value), 1)) : createCommentVNode("", true)])])
				])])]),
				createBaseVNode("div", _hoisted_13, [createVNode(PackCardFooter_default, {
					"node-pack": _ctx.nodePack,
					"is-installing": isInstalling.value
				}, null, 8, ["node-pack", "is-installing"])])
			], 2);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/skeleton/PackCardSkeleton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	class: "flex h-full flex-col overflow-hidden rounded-lg shadow-sm",
	"data-virtual-grid-item": ""
};
var _hoisted_2$2 = { class: "flex w-full items-center justify-between px-4 py-3" };
var _hoisted_3$2 = { class: "flex items-center" };
var _hoisted_4$2 = { class: "flex size-6 items-center justify-center" };
var _hoisted_5$1 = { class: "flex flex-1 p-4" };
var _hoisted_6$1 = { class: "mr-4 shrink-0" };
var _hoisted_7$1 = { class: "flex flex-1 flex-col overflow-hidden" };
var _hoisted_8$1 = { class: "mb-3" };
var _hoisted_9$1 = { class: "flex gap-2" };
var _hoisted_10 = { class: "flex w-full items-center justify-between px-5 py-4" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/skeleton/PackCardSkeleton.vue
var PackCardSkeleton_default = /* @__PURE__ */ defineComponent({
	__name: "PackCardSkeleton",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [
				createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$2, [createBaseVNode("div", _hoisted_4$2, [createVNode(unref(script$5), {
					shape: "circle",
					width: "1.5rem",
					height: "1.5rem"
				})]), createVNode(unref(script$5), {
					width: "5rem",
					height: "1rem",
					class: "ml-2"
				})]), createVNode(unref(script$5), {
					width: "4rem",
					height: "1.75rem",
					"border-radius": "0.75rem"
				})]),
				createBaseVNode("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6$1, [createVNode(unref(script$5), {
					width: "4rem",
					height: "4rem",
					"border-radius": "0.5rem"
				})]), createBaseVNode("div", _hoisted_7$1, [
					createVNode(unref(script$5), {
						width: "80%",
						height: "1rem",
						class: "mb-2"
					}),
					createBaseVNode("div", _hoisted_8$1, [
						createVNode(unref(script$5), {
							width: "100%",
							height: "0.75rem",
							class: "mb-1"
						}),
						createVNode(unref(script$5), {
							width: "95%",
							height: "0.75rem",
							class: "mb-1"
						}),
						createVNode(unref(script$5), {
							width: "90%",
							height: "0.75rem"
						})
					]),
					createBaseVNode("div", _hoisted_9$1, [createVNode(unref(script$5), {
						width: "4rem",
						height: "1.5rem",
						"border-radius": "0.75rem"
					}), createVNode(unref(script$5), {
						width: "5rem",
						height: "1.5rem",
						"border-radius": "0.75rem"
					})])
				])]),
				createBaseVNode("div", _hoisted_10, [createVNode(unref(script$5), {
					width: "4rem",
					height: "0.8rem"
				}), createVNode(unref(script$5), {
					width: "6rem",
					height: "0.8rem"
				})])
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/skeleton/GridSkeleton.vue
var GridSkeleton_default = /* @__PURE__ */ defineComponent({
	__name: "GridSkeleton",
	props: {
		skeletonCardCount: { default: 12 },
		gridStyle: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { style: normalizeStyle(_ctx.gridStyle) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.skeletonCardCount, (n) => {
				return openBlock(), createBlock(PackCardSkeleton_default, { key: n });
			}), 128))], 4);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/components/manager/UnresolvedNodesMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex flex-col items-center gap-3 p-8" };
var _hoisted_2$1 = { class: "text-base font-semibold" };
var _hoisted_3$1 = { class: "text-center text-sm text-muted-foreground" };
var _hoisted_4$1 = { class: "mt-2 flex flex-col gap-1 rounded-lg bg-secondary-background p-2" };
//#endregion
//#region src/workbench/extensions/manager/components/manager/UnresolvedNodesMessage.vue
var UnresolvedNodesMessage_default = /* @__PURE__ */ defineComponent({
	__name: "UnresolvedNodesMessage",
	props: { nodeNames: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--triangle-alert] text-4xl text-warning-background" }, null, -1)),
				createBaseVNode("h3", _hoisted_2$1, toDisplayString(_ctx.$t("manager.unresolvedNodes.title")), 1),
				createBaseVNode("p", _hoisted_3$1, toDisplayString(_ctx.$t("manager.unresolvedNodes.message")), 1),
				createBaseVNode("ul", _hoisted_4$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodeNames, (name) => {
					return openBlock(), createElementBlock("li", {
						key: name,
						class: "px-3 py-1.5 font-mono text-sm"
					}, toDisplayString(name), 1);
				}), 128))])
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/useWorkflowPacks.ts
var CORE_NODES_PACK_NAME = "comfy-core";
/**
* Handles parsing node pack metadata from nodes on the graph and fetching the
* associated node packs from the registry.
* This is a shared singleton composable - all components use the same instance.
*/
var _useWorkflowPacks = () => {
	const nodeDefStore = useNodeDefStore();
	const systemStatsStore = useSystemStatsStore();
	const { inferPackFromNodeName } = useComfyRegistryStore();
	const workflowPacks = ref([]);
	const unresolvedNodeNames = ref([]);
	const getWorkflowNodePackId = (node) => {
		if (typeof node.properties?.cnr_id === "string") return node.properties.cnr_id;
		if (typeof node.properties?.aux_id === "string") return node.properties.aux_id;
	};
	/**
	* Clean the version string to be used in the registry search.
	* Removes the leading 'v' and trims whitespace and line terminators.
	*/
	const cleanVersionString = (version) => version.replace(/^v/, "").trim();
	/**
	* Infer the pack for a node by searching the registry for packs that have nodes
	* with the same name.
	*/
	const inferPack = async (node) => {
		const nodeName = node.type;
		if (nodeDefStore.nodeDefsByName[nodeName]?.nodeSource.type === "core") {
			if (!systemStatsStore.systemStats) await systemStatsStore.refetchSystemStats();
			return {
				id: CORE_NODES_PACK_NAME,
				version: systemStatsStore.systemStats?.system?.comfyui_version ?? "nightly"
			};
		}
		const pack = await inferPackFromNodeName.call(nodeName);
		if (pack) return {
			id: pack.id,
			version: pack.latest_version?.version ?? "nightly"
		};
	};
	/**
	* Map a workflow node to its pack using the node pack metadata.
	* If the node pack metadata is not available, fallback to searching the
	* registry for packs that have nodes with the same name.
	*/
	const workflowNodeToPack = async (node) => {
		const packId = getWorkflowNodePackId(node);
		if (!packId) return inferPack(node);
		if (packId === CORE_NODES_PACK_NAME) return void 0;
		return {
			id: packId,
			version: typeof node.properties.ver === "string" ? cleanVersionString(node.properties.ver) : void 0
		};
	};
	/**
	* Get the node packs for all nodes in the workflow (including subgraphs).
	* Nodes that have no local definition and no registry match are tracked
	* as unresolved so downstream consumers can surface them to the user.
	*/
	const getWorkflowPacks = async () => {
		if (!app.rootGraph) {
			workflowPacks.value = [];
			unresolvedNodeNames.value = [];
			return;
		}
		const resolvedPacks = [];
		const unresolved = [];
		await Promise.all(mapAllNodes(app.rootGraph, async (node) => {
			const pack = await workflowNodeToPack(node);
			if (pack) resolvedPacks.push(pack);
			else {
				const nodeName = node.type;
				if (nodeName && getWorkflowNodePackId(node) === void 0 && !nodeDefStore.nodeDefsByName[nodeName]) unresolved.push(nodeName);
			}
		}));
		workflowPacks.value = resolvedPacks;
		unresolvedNodeNames.value = [...new Set(unresolved)];
	};
	const packsToUniqueIds = (packs) => packs.reduce((acc, pack) => {
		if (pack?.id) acc.add(pack.id);
		return acc;
	}, /* @__PURE__ */ new Set());
	const workflowPacksIds = computed(() => Array.from(packsToUniqueIds(workflowPacks.value)));
	const { startFetch, cleanup, error, isLoading, nodePacks, isReady } = useNodePacks(workflowPacksIds);
	const isIdInWorkflow = (packId) => workflowPacksIds.value.includes(packId);
	const filterWorkflowPack = (packs) => packs.filter((pack) => !!pack.id && isIdInWorkflow(pack.id));
	onUnmounted(() => {
		cleanup();
	});
	return {
		error,
		isLoading,
		isReady,
		workflowPacks: nodePacks,
		unresolvedNodeNames,
		startFetchWorkflowPacks: async () => {
			await getWorkflowPacks();
			await startFetch();
		},
		filterWorkflowPack
	};
};
var useWorkflowPacks = createSharedComposable(_useWorkflowPacks);
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/useMissingNodes.ts
/**
* Composable to find missing NodePacks from workflow
* Automatically fetches workflow pack data when initialized
* This is a shared singleton composable - all components use the same instance
*/
var useMissingNodes = createSharedComposable(() => {
	const nodeDefStore = useNodeDefStore();
	const comfyManagerStore = useComfyManagerStore();
	const workflowStore = useWorkflowStore();
	const { workflowPacks, unresolvedNodeNames, isLoading, error, startFetchWorkflowPacks } = useWorkflowPacks();
	const filterMissingPacks = (packs) => packs.filter((pack) => !comfyManagerStore.isPackInstalled(pack.id));
	const missingNodePacks = computed(() => {
		if (!workflowPacks.value.length) return [];
		return filterMissingPacks(workflowPacks.value);
	});
	/**
	* Check if a pack is the ComfyUI builtin node pack (nodes that come pre-installed)
	* @param packId - The id of the pack to check
	* @returns True if the pack is the comfy-core pack, false otherwise
	*/
	const isCorePack = (packId) => {
		return packId === "comfy-core";
	};
	/**
	* Check if a node is a missing core node
	* A missing core node is a node that is in the workflow and originates from
	* the comfy-core pack (pre-installed) but not registered in the node def
	* store (the node def was not found on the server)
	* @param node - The node to check
	* @returns True if the node is a missing core node, false otherwise
	*/
	const isMissingCoreNode = (node) => {
		const packId = node.properties?.cnr_id;
		if (packId === void 0 || !isCorePack(packId)) return false;
		const nodeName = node.type;
		return !!!nodeDefStore.nodeDefsByName[nodeName];
	};
	const missingCoreNodes = computed(() => {
		return groupBy(collectAllNodes(app.rootGraph, isMissingCoreNode), (node) => String(node.properties?.ver || ""));
	});
	const hasMissingNodes = computed(() => {
		return missingNodePacks.value.length > 0 || Object.keys(missingCoreNodes.value).length > 0 || unresolvedNodeNames.value.length > 0;
	});
	watch(() => workflowStore.activeWorkflow, async () => {
		await startFetchWorkflowPacks();
	}, { immediate: true });
	return {
		missingNodePacks,
		missingCoreNodes,
		unresolvedNodeNames,
		hasMissingNodes,
		isLoading,
		error
	};
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/useUpdateAvailableNodes.ts
/**
* Composable to find NodePacks that have updates available
* Automatically fetches installed pack data when initialized
*/
var useUpdateAvailableNodes = () => {
	const comfyManagerStore = useComfyManagerStore();
	const { installedPacks, isLoading, error, startFetchInstalled } = useInstalledPacks();
	const isOutdatedPack = (pack) => {
		if (!comfyManagerStore.isPackInstalled(pack?.id)) return false;
		const installedVersion = comfyManagerStore.getInstalledPackVersion(pack.id ?? "");
		const latestVersion = pack.latest_version?.version;
		if (!!installedVersion && !(0, import_semver.valid)(installedVersion) || !latestVersion || !installedVersion) return false;
		return (0, import_semver.compare)(latestVersion, installedVersion) > 0;
	};
	const filterOutdatedPacks = (packs) => packs.filter(isOutdatedPack);
	const updateAvailableNodePacks = computed(() => {
		if (!installedPacks.value.length) return [];
		return filterOutdatedPacks(installedPacks.value);
	});
	const enabledUpdateAvailableNodePacks = computed(() => {
		return updateAvailableNodePacks.value.filter((pack) => comfyManagerStore.isPackEnabled(pack.id));
	});
	const hasUpdateAvailable = computed(() => {
		return enabledUpdateAvailableNodePacks.value.length > 0;
	});
	const hasDisabledUpdatePacks = computed(() => {
		return updateAvailableNodePacks.value.length > enabledUpdateAvailableNodePacks.value.length;
	});
	onMounted(async () => {
		if (!installedPacks.value.length && !isLoading.value) await startFetchInstalled();
	});
	return {
		updateAvailableNodePacks,
		enabledUpdateAvailableNodePacks,
		hasUpdateAvailable,
		hasDisabledUpdatePacks,
		isLoading,
		error
	};
};
//#endregion
//#region src/services/providers/algoliaSearchProvider.ts
var RETRIEVE_ATTRIBUTES = [
	"comfy_nodes",
	"name",
	"description",
	"latest_version",
	"status",
	"publisher_id",
	"total_install",
	"create_time",
	"update_time",
	"license",
	"repository_url",
	"latest_version_status",
	"comfy_node_extract_status",
	"id",
	"icon_url",
	"github_stars",
	"supported_os",
	"supported_comfyui_version",
	"supported_comfyui_frontend_version",
	"supported_accelerators",
	"banner_url"
];
var searchPacksCache = new import_quick_lru.default({ maxSize: 64 });
var toRegistryLatestVersion = (algoliaNode) => {
	return {
		version: algoliaNode.latest_version,
		createdAt: algoliaNode.update_time,
		status: algoliaNode.latest_version_status,
		comfy_node_extract_status: algoliaNode.comfy_node_extract_status ?? void 0
	};
};
var toRegistryPublisher = (algoliaNode) => {
	return {
		id: algoliaNode.publisher_id,
		name: algoliaNode.publisher_id
	};
};
/**
* Convert from node pack in Algolia format to Comfy Registry format
*/
var toRegistryPack = memoize((algoliaNode) => {
	return {
		id: algoliaNode.id ?? algoliaNode.objectID,
		name: algoliaNode.name,
		description: algoliaNode.description,
		repository: algoliaNode.repository_url,
		license: algoliaNode.license,
		downloads: algoliaNode.total_install,
		status: algoliaNode.status,
		icon: algoliaNode.icon_url,
		latest_version: toRegistryLatestVersion(algoliaNode),
		publisher: toRegistryPublisher(algoliaNode),
		created_at: algoliaNode.create_time,
		category: algoliaNode.category,
		author: algoliaNode.author,
		tags: algoliaNode.tags,
		github_stars: algoliaNode.github_stars,
		supported_os: algoliaNode.supported_os,
		supported_comfyui_version: algoliaNode.supported_comfyui_version,
		supported_comfyui_frontend_version: algoliaNode.supported_comfyui_frontend_version,
		supported_accelerators: algoliaNode.supported_accelerators,
		banner_url: algoliaNode.banner_url,
		comfy_nodes: algoliaNode.comfy_nodes
	};
}, (algoliaNode) => algoliaNode.id);
var useAlgoliaSearchProvider = () => {
	const searchClient = liteClient("", "");
	/**
	* Search for node packs in Algolia (internal method)
	*/
	const searchPacksInternal = async (query, params) => {
		const { pageSize, pageNumber } = params;
		const requests = [{
			query,
			indexName: "nodes_index",
			attributesToRetrieve: RETRIEVE_ATTRIBUTES,
			...omit(params, ["pageSize", "pageNumber"]),
			hitsPerPage: pageSize,
			page: pageNumber
		}];
		if (query.length >= 2) requests.push({
			indexName: "nodes_index_query_suggestions",
			query
		});
		const { results } = await searchClient.search({
			requests,
			strategy: "none"
		});
		const [nodePacks, querySuggestions = { hits: [] }] = results;
		return {
			nodePacks: nodePacks.hits.map(toRegistryPack),
			querySuggestions: querySuggestions.hits.map((suggestion) => ({
				query: suggestion.query,
				popularity: suggestion.popularity
			}))
		};
	};
	/**
	* Search for node packs in Algolia with caching.
	*/
	const searchPacks = async (query, params) => {
		const cacheKey = paramsToCacheKey({
			query,
			...params
		});
		const cachedResult = searchPacksCache.get(cacheKey);
		if (cachedResult !== void 0) return cachedResult;
		const result = await searchPacksInternal(query, params);
		searchPacksCache.set(cacheKey, result);
		return result;
	};
	const clearSearchCache = () => {
		searchPacksCache.clear();
	};
	const getSortValue = (pack, sortField) => {
		switch (sortField) {
			case SortableAlgoliaField.Downloads: return pack.downloads ?? 0;
			case SortableAlgoliaField.Created: {
				const createTime = pack.created_at;
				return createTime ? new Date(createTime).getTime() : 0;
			}
			case SortableAlgoliaField.Updated: return pack.latest_version?.createdAt ? new Date(pack.latest_version.createdAt).getTime() : 0;
			case SortableAlgoliaField.Publisher: return pack.publisher?.name ?? "";
			case SortableAlgoliaField.Name: return pack.name ?? "";
			default: return 0;
		}
	};
	const getSortableFields = () => {
		return [
			{
				id: SortableAlgoliaField.Downloads,
				label: "Downloads",
				direction: "desc"
			},
			{
				id: SortableAlgoliaField.Created,
				label: "Created",
				direction: "desc"
			},
			{
				id: SortableAlgoliaField.Updated,
				label: "Updated",
				direction: "desc"
			},
			{
				id: SortableAlgoliaField.Publisher,
				label: "Publisher",
				direction: "asc"
			},
			{
				id: SortableAlgoliaField.Name,
				label: "Name",
				direction: "asc"
			}
		];
	};
	return {
		searchPacks,
		clearSearchCache,
		getSortValue,
		getSortableFields
	};
};
//#endregion
//#region src/services/providers/registrySearchProvider.ts
/**
* Search provider for the Comfy Registry.
* Uses public Comfy Registry API.
*/
var useComfyRegistrySearchProvider = () => {
	const registryStore = useComfyRegistryStore();
	/**
	* Search for node packs using the Comfy Registry API.
	*/
	const searchPacks = async (query, params) => {
		const { pageSize, pageNumber, restrictSearchableAttributes } = params;
		if (!query || query.trim() === "") {
			const listParams = {
				limit: pageSize,
				page: pageNumber + 1
			};
			return {
				nodePacks: (await registryStore.listAllPacks.call(listParams))?.nodes ?? [],
				querySuggestions: []
			};
		}
		const isNodeSearch = restrictSearchableAttributes?.includes("comfy_nodes");
		const searchParams = {
			search: isNodeSearch ? void 0 : query,
			comfy_node_search: isNodeSearch ? query : void 0,
			limit: pageSize,
			page: pageNumber + 1
		};
		return {
			nodePacks: (await registryStore.search.call(searchParams))?.nodes ?? [],
			querySuggestions: []
		};
	};
	const clearSearchCache = () => {
		registryStore.search.clear();
		registryStore.listAllPacks.clear();
	};
	const getSortValue = (pack, sortField) => {
		switch (sortField) {
			case "downloads": return pack.downloads ?? 0;
			case "name": return pack.name ?? "";
			case "publisher": return pack.publisher?.name ?? "";
			case "updated": return pack.latest_version?.createdAt ? new Date(pack.latest_version.createdAt).getTime() : 0;
			default: return 0;
		}
	};
	const getSortableFields = () => {
		return [
			{
				id: "downloads",
				label: "Downloads",
				direction: "desc"
			},
			{
				id: "name",
				label: "Name",
				direction: "asc"
			},
			{
				id: "publisher",
				label: "Publisher",
				direction: "asc"
			},
			{
				id: "updated",
				label: "Updated",
				direction: "desc"
			}
		];
	};
	return {
		searchPacks,
		clearSearchCache,
		getSortValue,
		getSortableFields
	};
};
//#endregion
//#region src/services/gateway/registrySearchGateway.ts
var CIRCUIT_BREAKER_THRESHOLD = 3;
var CIRCUIT_BREAKER_TIMEOUT = 6e4;
/**
* API Gateway for registry search providers with circuit breaker pattern.
* Acts as a single entry point that routes search requests to appropriate providers
* and handles failures gracefully by falling back to alternative providers.
*
* Implements:
* - Gateway pattern: Single entry point for all search requests
* - Circuit breaker: Prevents repeated calls to failed services
* - Automatic failover: Cascades through providers on failure
*/
var useRegistrySearchGateway = () => {
	const providers = [];
	let activeProviderIndex = 0;
	try {
		providers.push({
			provider: useAlgoliaSearchProvider(),
			name: "Algolia",
			isHealthy: true,
			consecutiveFailures: 0
		});
	} catch (error) {
		console.warn("Failed to initialize Algolia provider:", error);
	}
	providers.push({
		provider: useComfyRegistrySearchProvider(),
		name: "ComfyRegistry",
		isHealthy: true,
		consecutiveFailures: 0
	});
	/**
	* Check if a provider's circuit breaker should be closed (available to try)
	*/
	const isCircuitClosed = (providerState) => {
		if (providerState.consecutiveFailures < CIRCUIT_BREAKER_THRESHOLD) return true;
		if (providerState.lastAttempt) {
			if (Date.now() - providerState.lastAttempt.getTime() > CIRCUIT_BREAKER_TIMEOUT) return true;
		}
		return false;
	};
	/**
	* Record a successful call to a provider
	*/
	const recordSuccess = (providerState) => {
		providerState.isHealthy = true;
		providerState.consecutiveFailures = 0;
		providerState.lastError = void 0;
	};
	/**
	* Record a failed call to a provider
	*/
	const recordFailure = (providerState, error) => {
		providerState.consecutiveFailures++;
		providerState.lastError = error;
		providerState.lastAttempt = /* @__PURE__ */ new Date();
		if (providerState.consecutiveFailures >= CIRCUIT_BREAKER_THRESHOLD) {
			providerState.isHealthy = false;
			console.warn(`${providerState.name} provider circuit breaker opened after ${providerState.consecutiveFailures} failures`);
		}
	};
	/**
	* Get the currently active provider based on circuit breaker states
	*/
	const getActiveProvider = () => {
		const currentProvider = providers[activeProviderIndex];
		if (currentProvider && isCircuitClosed(currentProvider)) return currentProvider.provider;
		for (let i = 0; i < providers.length; i++) {
			const providerState = providers[i];
			if (isCircuitClosed(providerState)) {
				activeProviderIndex = i;
				return providerState.provider;
			}
		}
		throw new Error("No available search providers");
	};
	/**
	* Update the active provider index after a failure.
	* Move to the next provider if available.
	*/
	const updateActiveProviderOnFailure = () => {
		if (activeProviderIndex < providers.length - 1) activeProviderIndex++;
	};
	/**
	* Search for node packs.
	*/
	const searchPacks = async (query, params) => {
		let lastError = null;
		for (let attempts = 0; attempts < providers.length; attempts++) try {
			const provider = getActiveProvider();
			const providerState = providers[activeProviderIndex];
			const result = await provider.searchPacks(query, params);
			recordSuccess(providerState);
			return result;
		} catch (error) {
			lastError = error;
			const providerState = providers[activeProviderIndex];
			recordFailure(providerState, lastError);
			console.warn(`${providerState.name} search provider failed (${providerState.consecutiveFailures} failures):`, error);
			updateActiveProviderOnFailure();
		}
		throw new Error(`All search providers failed. Last error: ${lastError?.message || "Unknown error"}`);
	};
	/**
	* Clear the search cache for all providers that implement it.
	*/
	const clearSearchCache = () => {
		for (const providerState of providers) try {
			providerState.provider.clearSearchCache();
		} catch (error) {
			console.warn(`Failed to clear cache for ${providerState.name} provider:`, error);
		}
	};
	/**
	* Get the sort value for a pack.
	* @example
	* const pack = {
	*   id: '123',
	*   name: 'Test Pack',
	*   downloads: 100
	* }
	* const sortValue = getSortValue(pack, 'downloads')
	* console.log(sortValue) // 100
	*/
	const getSortValue = (pack, sortField) => {
		return getActiveProvider().getSortValue(pack, sortField);
	};
	/**
	* Get the sortable fields for the active provider.
	* @example
	* const sortableFields = getSortableFields()
	* console.log(sortableFields) // ['downloads', 'created', 'updated', 'publisher', 'name']
	*/
	const getSortableFields = () => {
		return getActiveProvider().getSortableFields();
	};
	return {
		searchPacks,
		clearSearchCache,
		getSortValue,
		getSortableFields
	};
};
//#endregion
//#region src/workbench/extensions/manager/composables/useManagerDisplayPacks.ts
function useManagerDisplayPacks(selectedTabId, searchResults, searchQuery, sortField) {
	const comfyManagerStore = useComfyManagerStore();
	const conflictDetectionStore = useConflictDetectionStore();
	const { getSortValue, getSortableFields } = useRegistrySearchGateway();
	const { startFetchInstalled, filterInstalledPack, installedPacks, isLoading: isLoadingInstalled, isReady: installedPacksReady } = useInstalledPacks();
	const { startFetchWorkflowPacks, filterWorkflowPack, workflowPacks, isLoading: isLoadingWorkflow, isReady: workflowPacksReady } = useWorkflowPacks();
	const tabType = computed(() => selectedTabId.value);
	const isEmptySearch = computed(() => searchQuery.value === "");
	const sortPacks = (packs) => {
		if (!sortField.value || packs.length === 0) return packs;
		return orderBy(packs, [(pack) => getSortValue(pack, sortField.value)], [getSortableFields().find((f) => f.id === sortField.value)?.direction || "desc"]);
	};
	const filterNotInstalled = (packs) => packs.filter((p) => !comfyManagerStore.isPackInstalled(p.id));
	const filterConflicting = (packs) => packs.filter((p) => !!p.id && conflictDetectionStore.conflictedPackages.some((c) => c.package_id === p.id));
	const filterOutdated = (packs) => packs.filter((p) => {
		const installedVersion = comfyManagerStore.getInstalledPackVersion(p.id ?? "");
		const latestVersion = p.latest_version?.version;
		if (!comfyManagerStore.isPackInstalled(p.id) || !installedVersion || !latestVersion || !(0, import_semver.valid)(installedVersion)) return false;
		return (0, import_semver.compare)(latestVersion, installedVersion) > 0;
	});
	const needsInstalledPacks = computed(() => [
		ManagerTab.AllInstalled,
		ManagerTab.UpdateAvailable,
		ManagerTab.Conflicting
	].includes(tabType.value));
	const needsWorkflowPacks = computed(() => [ManagerTab.Workflow, ManagerTab.Missing].includes(tabType.value));
	whenever(() => needsInstalledPacks.value && !installedPacksReady.value && !isLoadingInstalled.value, () => startFetchInstalled());
	whenever(() => needsWorkflowPacks.value && !workflowPacksReady.value && !isLoadingWorkflow.value, () => startFetchWorkflowPacks());
	whenever(() => tabType.value === ManagerTab.Missing && !installedPacksReady.value && !isLoadingInstalled.value, () => startFetchInstalled());
	return {
		displayPacks: computed(() => {
			const tab = tabType.value;
			const hasSearch = !isEmptySearch.value;
			switch (tab) {
				case ManagerTab.All: return searchResults.value;
				case ManagerTab.NotInstalled: return filterNotInstalled(searchResults.value);
				case ManagerTab.AllInstalled: return hasSearch ? filterInstalledPack(searchResults.value) : sortPacks(installedPacks.value);
				case ManagerTab.UpdateAvailable: return sortPacks(filterOutdated(hasSearch ? filterInstalledPack(searchResults.value) : installedPacks.value));
				case ManagerTab.Conflicting: return sortPacks(filterConflicting(hasSearch ? filterInstalledPack(searchResults.value) : installedPacks.value));
				case ManagerTab.Workflow: return hasSearch ? filterWorkflowPack(searchResults.value) : sortPacks(workflowPacks.value);
				case ManagerTab.Missing: return sortPacks(filterNotInstalled(hasSearch ? filterWorkflowPack(searchResults.value) : workflowPacks.value));
				case ManagerTab.Unresolved: return [];
				default: return searchResults.value;
			}
		}),
		isLoading: computed(() => {
			const tab = tabType.value;
			if ([
				ManagerTab.AllInstalled,
				ManagerTab.UpdateAvailable,
				ManagerTab.Conflicting
			].includes(tab)) return isLoadingInstalled.value;
			if ([ManagerTab.Workflow, ManagerTab.Missing].includes(tab)) return isLoadingWorkflow.value;
			return false;
		}),
		isLoadingInstalled,
		isLoadingWorkflow,
		installedPacks,
		workflowPacks,
		filterInstalledPack,
		filterWorkflowPack,
		missingNodePacks: computed(() => filterNotInstalled(workflowPacks.value))
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/useManagerStatePersistence.ts
var STORAGE_KEY = "Comfy.Manager.UI.State";
var useManagerStatePersistence = () => {
	/**
	* Load the UI state from localStorage.
	*/
	const loadStoredState = () => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) return JSON.parse(stored);
		} catch (e) {
			console.error("Failed to load manager UI state:", e);
		}
		return {
			selectedTabId: ManagerTab.All,
			searchQuery: "",
			searchMode: "packs",
			sortField: SortableAlgoliaField.Downloads
		};
	};
	/**
	* Persist the UI state to localStorage.
	*/
	const persistState = (state) => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	};
	/**
	* Reset the UI state to the default values.
	*/
	const reset = () => {
		persistState({
			selectedTabId: ManagerTab.All,
			searchQuery: "",
			searchMode: "packs",
			sortField: SortableAlgoliaField.Downloads
		});
	};
	return {
		loadStoredState,
		persistState,
		reset
	};
};
//#endregion
//#region src/workbench/extensions/manager/composables/useRegistrySearch.ts
var SEARCH_DEBOUNCE_TIME = 320;
var DEFAULT_SORT_FIELD = SortableAlgoliaField.Downloads;
/**
* Composable for managing UI state of Comfy Node Registry search.
*/
function useRegistrySearch(options = {}) {
	const { initialSortField = DEFAULT_SORT_FIELD, initialSearchMode = "packs", initialSearchQuery = "", initialPageNumber = 0 } = options;
	const isLoading = ref(false);
	const sortField = ref(initialSortField);
	const searchMode = ref(initialSearchMode);
	const pageSize = ref(64);
	const pageNumber = ref(initialPageNumber);
	const searchQuery = ref(initialSearchQuery);
	const searchResults = ref([]);
	const suggestions = ref([]);
	const searchAttributes = computed(() => searchMode.value === "nodes" ? ["comfy_nodes"] : ["name", "description"]);
	const { searchPacks, clearSearchCache, getSortValue, getSortableFields } = useRegistrySearchGateway();
	const updateSearchResults = async (options) => {
		isLoading.value = true;
		if (!options.append) pageNumber.value = 0;
		const { nodePacks, querySuggestions } = await searchPacks(searchQuery.value, {
			pageSize: pageSize.value,
			pageNumber: pageNumber.value,
			restrictSearchableAttributes: searchAttributes.value
		});
		let sortedPacks = nodePacks;
		if (sortField.value && sortField.value !== DEFAULT_SORT_FIELD) sortedPacks = orderBy(nodePacks, [(pack) => getSortValue(pack, sortField.value)], [getSortableFields().find((f) => f.id === sortField.value)?.direction || "desc"]);
		if (options.append && searchResults.value?.length) searchResults.value = searchResults.value.concat(sortedPacks);
		else searchResults.value = sortedPacks;
		suggestions.value = querySuggestions;
		isLoading.value = false;
	};
	const onQueryChange = () => void updateSearchResults({ append: false });
	const onPageChange = () => {
		if (pageNumber.value === 0) return;
		updateSearchResults({ append: true });
	};
	watch([sortField, searchMode], onQueryChange);
	watch(pageNumber, onPageChange);
	watchDebounced(searchQuery, onQueryChange, {
		debounce: SEARCH_DEBOUNCE_TIME,
		immediate: true
	});
	return {
		isLoading,
		pageNumber,
		pageSize,
		sortField,
		searchMode,
		searchQuery,
		suggestions,
		searchResults,
		sortOptions: computed(() => {
			return getSortableFields();
		}),
		clearCache: clearSearchCache
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/useLegacySearchTip.ts
var LEGACY_MANAGER_KEYWORDS = [
	"manager",
	"comfyui-manager",
	"manager comfyui",
	"comfyui manager"
];
function useLegacySearchTip(searchQuery, isNewManagerUI) {
	return { isLegacyManagerSearch: computed(() => {
		if (!isNewManagerUI.value) return false;
		const query = searchQuery.value.toLowerCase().trim();
		if (!query) return false;
		return LEGACY_MANAGER_KEYWORDS.some((keyword) => query.includes(keyword));
	}) };
}
//#endregion
//#region src/workbench/extensions/manager/components/manager/ManagerDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "text-neutral text-base" };
var _hoisted_2 = { class: "flex w-full items-center justify-between gap-2" };
var _hoisted_3 = { class: "flex w-full items-center gap-2" };
var _hoisted_4 = {
	key: 0,
	class: "relative mx-6 mt-3 mb-4 flex items-center gap-6 rounded-lg bg-yellow-500/20 p-4"
};
var _hoisted_5 = { class: "flex flex-1 flex-col gap-2" };
var _hoisted_6 = { class: "m-0 text-sm font-bold" };
var _hoisted_7 = { class: "m-0 text-xs" };
var _hoisted_8 = { class: "flex justify-end px-6 pb-4" };
var _hoisted_9 = {
	key: 0,
	class: "size-full scrollbar-hide overflow-auto"
};
//#endregion
//#region src/workbench/extensions/manager/components/manager/ManagerDialog.vue
var ManagerDialog_default = /* @__PURE__ */ defineComponent({
	__name: "ManagerDialog",
	props: {
		initialTab: {},
		initialPackId: {},
		onClose: { type: Function }
	},
	setup(__props) {
		provide(OnCloseKey, __props.onClose);
		const { t } = useI18n();
		const { buildDocsUrl } = useExternalLink();
		const comfyManagerStore = useComfyManagerStore();
		const { getPackById } = useComfyRegistryStore();
		const conflictAcknowledgment = useConflictAcknowledgment();
		const conflictDetectionStore = useConflictDetectionStore();
		const { isNewManagerUI } = useManagerState();
		const workflowStore = useWorkflowStore();
		const persistedState = useManagerStatePersistence();
		const initialState = persistedState.loadStoredState();
		const GRID_STYLE = {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
			gap: "1rem",
			padding: "0.5rem"
		};
		const { shouldShowManagerBanner, dismissWarningBanner, dismissRedDotNotification } = conflictAcknowledgment;
		const { missingNodePacks, unresolvedNodeNames, isLoading: isMissingLoading, error: missingError } = useMissingNodes();
		const { hasUpdateAvailable, enabledUpdateAvailableNodePacks, hasDisabledUpdatePacks } = useUpdateAvailableNodes();
		const workflowName = computed(() => workflowStore.activeWorkflow?.filename ?? t("manager.inWorkflow"));
		const navItems = computed(() => [
			{
				id: ManagerTab.All,
				label: t("manager.nav.allExtensions"),
				icon: "icon-[lucide--list]"
			},
			{
				id: ManagerTab.NotInstalled,
				label: t("manager.nav.notInstalled"),
				icon: "icon-[lucide--globe]"
			},
			{
				title: t("manager.nav.installedSection"),
				items: [
					{
						id: ManagerTab.AllInstalled,
						label: t("manager.nav.allInstalled"),
						icon: "icon-[lucide--download]"
					},
					{
						id: ManagerTab.UpdateAvailable,
						label: t("manager.nav.updatesAvailable"),
						icon: "icon-[lucide--refresh-cw]"
					},
					{
						id: ManagerTab.Conflicting,
						label: t("manager.nav.conflicting"),
						icon: "icon-[lucide--triangle-alert]",
						badge: conflictDetectionStore.conflictedPackages.length || void 0
					}
				]
			},
			{
				title: t("manager.nav.inWorkflowSection"),
				items: [
					{
						id: ManagerTab.Workflow,
						label: t("manager.nav.allInWorkflow", { workflowName: workflowName.value }),
						icon: "icon-[lucide--share-2]"
					},
					{
						id: ManagerTab.Missing,
						label: t("manager.nav.missingNodes"),
						icon: "icon-[lucide--triangle-alert]"
					},
					...unresolvedNodeNames.value.length > 0 ? [{
						id: ManagerTab.Unresolved,
						label: t("manager.nav.unresolvedNodes"),
						icon: "icon-[lucide--help-circle]",
						badge: unresolvedNodeNames.value.length
					}] : []
				]
			}
		]);
		const initialTabId = __props.initialTab ?? initialState.selectedTabId ?? ManagerTab.All;
		const selectedNavId = ref(initialTabId);
		const findNavItemById = (items, id) => {
			for (const item of items) if ("items" in item) {
				const found = item.items.find((subItem) => subItem.id === id);
				if (found) return found;
			} else if (item.id === id) return item;
		};
		const selectedTab = computed(() => findNavItemById(navItems.value, selectedNavId.value));
		watch(navItems, (items) => {
			if (selectedNavId.value && !findNavItemById(items, selectedNavId.value)) selectedNavId.value = ManagerTab.Missing;
		});
		const { searchQuery, pageNumber, isLoading: isSearchLoading, searchResults, searchMode, sortField, suggestions, sortOptions } = useRegistrySearch({
			initialSortField: initialState.sortField,
			initialSearchMode: __props.initialPackId && initialTabId !== ManagerTab.Missing ? "packs" : initialState.searchMode,
			initialSearchQuery: initialTabId === ManagerTab.Missing ? "" : __props.initialPackId ?? initialState.searchQuery
		});
		pageNumber.value = 0;
		const { isLegacyManagerSearch } = useLegacySearchTip(searchQuery, isNewManagerUI);
		const filterOptions = computed(() => [{
			name: t("manager.filter.nodePack"),
			value: "packs"
		}, {
			name: t("g.nodes"),
			value: "nodes"
		}]);
		const availableSortOptions = computed(() => {
			if (!sortOptions.value) return [];
			return sortOptions.value.map((field) => ({
				name: field.label,
				value: field.id
			}));
		});
		const onOptionSelect = (suggestion) => {
			searchQuery.value = suggestion.query;
		};
		const onApproachEnd = () => {
			pageNumber.value++;
		};
		const isInitialLoad = computed(() => searchResults.value.length === 0 && searchQuery.value === "");
		const { displayPacks, isLoading: isTabLoading, workflowPacks } = useManagerDisplayPacks(selectedNavId, searchResults, searchQuery, sortField);
		const isUpdateAvailableTab = computed(() => selectedTab.value?.id === ManagerTab.UpdateAvailable);
		const isMissingTab = computed(() => selectedTab.value?.id === ManagerTab.Missing);
		const isUnresolvedTab = computed(() => selectedTab.value?.id === ManagerTab.Unresolved);
		const tabEmptyStateKeys = {
			[ManagerTab.AllInstalled]: "allInstalled",
			[ManagerTab.UpdateAvailable]: "updateAvailable",
			[ManagerTab.Conflicting]: "conflicting",
			[ManagerTab.Workflow]: "workflow",
			[ManagerTab.Missing]: "missing"
		};
		const managerApiDependentTabs = new Set([
			ManagerTab.AllInstalled,
			ManagerTab.UpdateAvailable,
			ManagerTab.Conflicting,
			ManagerTab.NotInstalled,
			ManagerTab.Missing
		]);
		const isManagerErrorRelevant = computed(() => {
			const tabId = selectedTab.value?.id;
			return !!comfyManagerStore.error && !!tabId && managerApiDependentTabs.has(tabId);
		});
		const emptyStateTitle = computed(() => {
			if (isManagerErrorRelevant.value) return t("manager.errorConnecting");
			if (searchQuery.value) return t("manager.noResultsFound");
			const tabId = selectedTab.value?.id;
			const emptyStateKey = tabId ? tabEmptyStateKeys[tabId] : void 0;
			return emptyStateKey ? t(`manager.emptyState.${emptyStateKey}.title`) : t("manager.noResultsFound");
		});
		const emptyStateMessage = computed(() => {
			if (isManagerErrorRelevant.value) return t("manager.tryAgainLater");
			if (searchQuery.value) {
				const baseMessage = t("manager.tryDifferentSearch");
				if (isLegacyManagerSearch.value) return `${baseMessage}\n\n${t("manager.legacyManagerSearchTip")}`;
				return baseMessage;
			}
			const tabId = selectedTab.value?.id;
			const emptyStateKey = tabId ? tabEmptyStateKeys[tabId] : void 0;
			return emptyStateKey ? t(`manager.emptyState.${emptyStateKey}.message`) : t("manager.tryDifferentSearch");
		});
		const onClickWarningLink = () => {
			window.open(buildDocsUrl("/troubleshooting/custom-node-issues", { includeLocale: true }), "_blank");
		};
		const isLoading = computed(() => {
			if (isSearchLoading.value) return searchResults.value.length === 0;
			if (isTabLoading.value) return true;
			return isInitialLoad.value;
		});
		const resultsWithKeys = computed(() => displayPacks.value.map((item) => ({
			...item,
			key: item.id || item.name
		})));
		const selectedNodePacks = ref([]);
		const selectedNodePack = computed(() => selectedNodePacks.value.length === 1 ? selectedNodePacks.value[0] : null);
		const isRightPanelOpen = ref(false);
		watch(() => selectedNodePacks.value.length, (length, oldLength) => {
			if (length > 0 && oldLength === 0) isRightPanelOpen.value = true;
		});
		if (__props.initialPackId) until(resultsWithKeys).toMatch((packs) => packs.some((p) => p.id === __props.initialPackId)).then((packs) => {
			const target = packs.find((p) => p.id === __props.initialPackId);
			if (target && selectedNodePacks.value.length === 0) {
				selectedNodePacks.value = [target];
				isRightPanelOpen.value = true;
			}
		});
		const getLoadingCount = () => {
			switch (selectedTab.value?.id) {
				case ManagerTab.AllInstalled: return comfyManagerStore.installedPacksIds?.size;
				case ManagerTab.Workflow: return workflowPacks.value?.length;
				case ManagerTab.Missing: return workflowPacks.value?.filter?.((pack) => !comfyManagerStore.isPackInstalled(pack.id))?.length;
				default: return searchResults.value.length;
			}
		};
		const skeletonCardCount = computed(() => {
			const loadingCount = getLoadingCount();
			if (loadingCount) return loadingCount;
			return 16;
		});
		const selectNodePack = (nodePack, event) => {
			if (event.shiftKey || event.ctrlKey || event.metaKey) if (selectedNodePacks.value.findIndex((pack) => pack.id === nodePack.id) === -1) selectedNodePacks.value = [...selectedNodePacks.value, nodePack];
			else selectedNodePacks.value = selectedNodePacks.value.filter((pack) => pack.id !== nodePack.id);
			else selectedNodePacks.value = [nodePack];
		};
		const unSelectItems = () => {
			selectedNodePacks.value = [];
		};
		const handleGridContainerClick = (event) => {
			const targetElement = event.target;
			if (targetElement && !targetElement.closest("[data-virtual-grid-item]")) unSelectItems();
		};
		const hasMultipleSelections = computed(() => selectedNodePacks.value.length > 1);
		const lastFetchedPackId = ref(null);
		whenever(selectedNodePack, async () => {
			getPackById.cancel();
			const pack = selectedNodePack.value;
			if (!pack?.id) return;
			if (hasMultipleSelections.value) return;
			if (lastFetchedPackId.value === pack.id) return;
			const data = await getPackById.call(pack.id);
			if (data?.id === pack.id) {
				lastFetchedPackId.value = pack.id;
				const mergedPack = merge({}, pack, data);
				const packIndex = selectedNodePacks.value.findIndex((p) => p.id === mergedPack.id);
				if (packIndex !== -1) selectedNodePacks.value.splice(packIndex, 1, mergedPack);
			}
		});
		let gridContainer = null;
		onMounted(() => {
			gridContainer = document.getElementById("results-grid");
		});
		watch([searchQuery, selectedNavId], () => {
			gridContainer ??= document.getElementById("results-grid");
			if (gridContainer) {
				pageNumber.value = 0;
				gridContainer.scrollTop = 0;
			}
			unSelectItems();
		});
		watchEffect(() => {
			dismissRedDotNotification();
		});
		onBeforeUnmount(() => {
			persistedState.persistState({
				selectedTabId: selectedTab.value?.id ?? ManagerTab.All,
				searchQuery: searchQuery.value,
				searchMode: searchMode.value,
				sortField: sortField.value
			});
		});
		onUnmounted(() => {
			getPackById.cancel();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseModalLayout_default, {
				"right-panel-open": isRightPanelOpen.value,
				"onUpdate:rightPanelOpen": _cache[4] || (_cache[4] = ($event) => isRightPanelOpen.value = $event),
				"content-title": _ctx.$t("manager.discoverCommunityContent"),
				"right-panel-title": _ctx.$t("manager.nodePackInfo"),
				class: "manager-dialog"
			}, {
				leftPanelHeaderTitle: withCtx(() => [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "icon-[comfy--extensions-blocks]" }, null, -1)), createBaseVNode("h2", _hoisted_1, toDisplayString(_ctx.$t("manager.title")), 1)]),
				leftPanel: withCtx(() => [createVNode(LeftSidePanel_default, {
					modelValue: selectedNavId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedNavId.value = $event),
					"nav-items": navItems.value
				}, null, 8, ["modelValue", "nav-items"])]),
				header: withCtx(() => [createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [createVNode(SingleSelect_default, {
						modelValue: unref(searchMode),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(searchMode) ? searchMode.value = $event : null),
						class: "min-w-34",
						options: filterOptions.value
					}, null, 8, ["modelValue", "options"]), createVNode(SearchAutocomplete_default, {
						modelValue: unref(searchQuery),
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
						suggestions: unref(suggestions),
						placeholder: _ctx.$t("manager.searchPlaceholder"),
						"option-label": "query",
						autofocus: "",
						size: "lg",
						class: "max-w-96 flex-1",
						onSelect: onOptionSelect
					}, null, 8, [
						"modelValue",
						"suggestions",
						"placeholder"
					])]),
					isMissingTab.value && unref(missingNodePacks).length > 0 ? (openBlock(), createBlock(PackInstallButton_default, {
						key: 0,
						disabled: unref(isMissingLoading) || !!unref(missingError),
						"node-packs": unref(missingNodePacks),
						size: "lg",
						label: _ctx.$t("manager.installAllMissingNodes")
					}, null, 8, [
						"disabled",
						"node-packs",
						"label"
					])) : createCommentVNode("", true),
					isUpdateAvailableTab.value && unref(hasUpdateAvailable) ? (openBlock(), createBlock(PackUpdateButton_default, {
						key: 1,
						"node-packs": unref(enabledUpdateAvailableNodePacks),
						"has-disabled-update-packs": unref(hasDisabledUpdatePacks),
						size: "lg"
					}, null, 8, ["node-packs", "has-disabled-update-packs"])) : createCommentVNode("", true)
				])]),
				contentFilter: withCtx(() => [unref(shouldShowManagerBanner) ? (openBlock(), createElementBlock("div", _hoisted_4, [
					_cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--triangle-alert] text-lg text-warning-background" }, null, -1)),
					createBaseVNode("div", _hoisted_5, [
						createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("manager.conflicts.warningBanner.title")), 1),
						createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.$t("manager.conflicts.warningBanner.message")), 1),
						createBaseVNode("p", {
							class: "m-0 cursor-pointer text-sm font-bold",
							onClick: onClickWarningLink
						}, toDisplayString(_ctx.$t("manager.conflicts.warningBanner.button")), 1)
					]),
					createVNode(Button_default, {
						class: "absolute top-0 right-0",
						variant: "textonly",
						size: "icon",
						onClick: unref(dismissWarningBanner)
					}, {
						default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("i", { class: "pi pi-times text-xs text-base-foreground" }, null, -1)])),
						_: 1
					}, 8, ["onClick"])
				])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_8, [createVNode(SingleSelect_default, {
					modelValue: unref(sortField),
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(sortField) ? sortField.value = $event : null),
					label: _ctx.$t("g.sort"),
					options: availableSortOptions.value,
					class: "w-48"
				}, {
					icon: withCtx(() => _cache[8] || (_cache[8] = [createBaseVNode("i", { class: "icon-[lucide--arrow-up-down] text-muted-foreground" }, null, -1)])),
					_: 1
				}, 8, [
					"modelValue",
					"label",
					"options"
				])])]),
				content: withCtx(() => [isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(GridSkeleton_default, {
					"grid-style": GRID_STYLE,
					"skeleton-card-count": skeletonCardCount.value
				}, null, 8, ["skeleton-card-count"])])) : isUnresolvedTab.value ? (openBlock(), createBlock(UnresolvedNodesMessage_default, {
					key: 1,
					"node-names": unref(unresolvedNodeNames)
				}, null, 8, ["node-names"])) : unref(displayPacks).length === 0 ? (openBlock(), createBlock(NoResultsPlaceholder_default, {
					key: 2,
					title: emptyStateTitle.value,
					message: emptyStateMessage.value
				}, null, 8, ["title", "message"])) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: "size-full",
					onClick: handleGridContainerClick
				}, [createVNode(VirtualGrid_default, {
					id: "results-grid",
					items: resultsWithKeys.value,
					"buffer-rows": 4,
					"grid-style": GRID_STYLE,
					onApproachEnd
				}, {
					item: withCtx(({ item }) => [createVNode(PackCard_default, {
						"node-pack": item,
						"is-selected": selectedNodePacks.value.some((pack) => pack.id === item.id),
						onClick: withModifiers((event) => selectNodePack(item, event), ["stop"])
					}, null, 8, [
						"node-pack",
						"is-selected",
						"onClick"
					])]),
					_: 1
				}, 8, ["items"])]))]),
				rightPanel: withCtx(() => [!hasMultipleSelections.value && selectedNodePack.value ? (openBlock(), createBlock(InfoPanel_default, {
					key: 0,
					"node-pack": selectedNodePack.value
				}, null, 8, ["node-pack"])) : (openBlock(), createBlock(InfoPanelMultiItem_default, {
					key: 1,
					"node-packs": selectedNodePacks.value
				}, null, 8, ["node-packs"]))]),
				_: 1
			}, 8, [
				"right-panel-open",
				"content-title",
				"right-panel-title"
			]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/composables/useManagerDialog.ts
var DIALOG_KEY = "global-manager";
function useManagerDialog() {
	const dialogService = useDialogService();
	const dialogStore = useDialogStore();
	function hide() {
		dialogStore.closeDialog({ key: DIALOG_KEY });
	}
	function show(initialTab, initialPackId) {
		dialogService.showLayoutDialog({
			key: DIALOG_KEY,
			component: ManagerDialog_default,
			props: {
				onClose: hide,
				initialTab,
				initialPackId
			}
		});
	}
	return {
		show,
		hide
	};
}
//#endregion
//#region src/workbench/extensions/manager/composables/useManagerState.ts
var ManagerUIState = /* @__PURE__ */ function(ManagerUIState) {
	ManagerUIState["DISABLED"] = "disabled";
	ManagerUIState["LEGACY_UI"] = "legacy";
	ManagerUIState["NEW_UI"] = "new";
	return ManagerUIState;
}({});
function useManagerState() {
	const { systemStats, isInitialized: systemInitialized } = storeToRefs(useSystemStatsStore());
	const managerDialog = useManagerDialog();
	/**
	* The current manager UI state.
	* Computed once and cached until dependencies change (which they don't during runtime).
	* This follows Vue's conventions and provides better performance through caching.
	*/
	const managerUIState = readonly(computed(() => {
		if (!systemInitialized.value) return ManagerUIState.DISABLED;
		const clientSupportsV4 = api.getClientFeatureFlags().supports_manager_v4_ui ?? false;
		const serverSupportsV4 = api.getServerFeature("extension.manager.supports_v4");
		if (!systemStats.value?.system?.argv?.includes("--enable-manager")) return ManagerUIState.DISABLED;
		if (systemStats.value?.system?.argv?.includes("--enable-manager-legacy-ui")) return ManagerUIState.LEGACY_UI;
		if (clientSupportsV4 && serverSupportsV4 === true) return ManagerUIState.NEW_UI;
		if (serverSupportsV4 === true && !clientSupportsV4) return ManagerUIState.LEGACY_UI;
		if (serverSupportsV4 === false) return ManagerUIState.LEGACY_UI;
		if (serverSupportsV4 === void 0) return ManagerUIState.NEW_UI;
		return ManagerUIState.DISABLED;
	}));
	/**
	* Check if manager is enabled (not DISABLED)
	*/
	const isManagerEnabled = readonly(computed(() => {
		return managerUIState.value !== ManagerUIState.DISABLED;
	}));
	/**
	* Check if manager UI is in NEW_UI mode
	*/
	const isNewManagerUI = readonly(computed(() => {
		return managerUIState.value === ManagerUIState.NEW_UI;
	}));
	/**
	* Check if manager UI is in LEGACY_UI mode
	*/
	const isLegacyManagerUI = readonly(computed(() => {
		return managerUIState.value === ManagerUIState.LEGACY_UI;
	}));
	/**
	* Check if install button should be shown (only in NEW_UI mode)
	*/
	const shouldShowInstallButton = readonly(computed(() => {
		return isNewManagerUI.value;
	}));
	/**
	* Check if manager buttons should be shown (when manager is not disabled)
	*/
	const shouldShowManagerButtons = readonly(computed(() => {
		return isManagerEnabled.value;
	}));
	/**
	* Opens the manager UI based on current state
	* Centralizes the logic for opening manager across the app
	* @param options - Optional configuration for opening the manager
	* @param options.initialTab - Initial tab to show (for NEW_UI mode)
	* @param options.legacyCommand - Legacy command to execute (for LEGACY_UI mode)
	* @param options.showToastOnLegacyError - Whether to show toast on legacy command failure
	* @param options.isLegacyOnly - If true, shows error in NEW_UI mode instead of opening manager
	*/
	const openManager = async (options) => {
		const state = managerUIState.value;
		const settingsDialog = useSettingsDialog();
		const commandStore = useCommandStore();
		switch (state) {
			case ManagerUIState.DISABLED:
				settingsDialog.show("extension");
				break;
			case ManagerUIState.LEGACY_UI: {
				const command = options?.legacyCommand || "Comfy.Manager.Menu.ToggleVisibility";
				try {
					await commandStore.execute(command);
				} catch {
					if (options?.showToastOnLegacyError !== false) useToastStore().add({
						severity: "error",
						summary: t("g.error"),
						detail: t("manager.legacyMenuNotAvailable")
					});
					if (options?.showToastOnLegacyError === false) settingsDialog.show("extension");
				}
				break;
			}
			case ManagerUIState.NEW_UI:
				if (options?.isLegacyOnly) useToastStore().add({
					severity: "error",
					summary: t("g.error"),
					detail: t("manager.legacyMenuNotAvailable")
				});
				else managerDialog.show(options?.initialTab, options?.initialPackId);
				break;
		}
	};
	return {
		managerUIState,
		isManagerEnabled,
		isNewManagerUI,
		isLegacyManagerUI,
		shouldShowInstallButton,
		shouldShowManagerButtons,
		openManager
	};
}
//#endregion
//#region src/workbench/extensions/manager/services/comfyManagerService.ts
var GENERIC_SECURITY_ERR_MSG = "Forbidden: A security error has occurred. Please check the terminal logs";
/**
* API routes for ComfyUI Manager
*/
var ManagerRoute = /* @__PURE__ */ function(ManagerRoute) {
	ManagerRoute["START_QUEUE"] = "manager/queue/start";
	ManagerRoute["RESET_QUEUE"] = "manager/queue/reset";
	ManagerRoute["QUEUE_STATUS"] = "manager/queue/status";
	ManagerRoute["UPDATE_ALL"] = "manager/queue/update_all";
	ManagerRoute["UPDATE_COMFYUI"] = "manager/queue/update_comfyui";
	ManagerRoute["LIST_INSTALLED"] = "customnode/installed";
	ManagerRoute["GET_NODES"] = "customnode/getmappings";
	ManagerRoute["IMPORT_FAIL_INFO"] = "customnode/import_fail_info";
	ManagerRoute["IMPORT_FAIL_INFO_BULK"] = "customnode/import_fail_info_bulk";
	ManagerRoute["REBOOT"] = "manager/reboot";
	ManagerRoute["IS_LEGACY_MANAGER_UI"] = "manager/is_legacy_manager_ui";
	ManagerRoute["TASK_HISTORY"] = "manager/queue/history";
	ManagerRoute["QUEUE_TASK"] = "manager/queue/task";
	return ManagerRoute;
}(ManagerRoute || {});
var managerApiClient = axios.create({
	baseURL: api.apiURL("/v2/"),
	headers: { "Content-Type": "application/json" }
});
/**
* Service for interacting with the ComfyUI Manager API
* Provides methods for managing packs, ComfyUI-Manager queue operations, and system functions
* Note: This service should only be used when Manager state is NEW_UI
*/
var useComfyManagerService = () => {
	const isLoading = ref(false);
	const error = ref(null);
	const isManagerServiceAvailable = () => {
		return useManagerState().isNewManagerUI.value;
	};
	const handleRequestError = (err, context, routeSpecificErrors) => {
		if (isAbortError(err)) return;
		let message;
		if (!axios.isAxiosError(err)) message = `${context} failed: ${err instanceof Error ? err.message : String(err)}`;
		else {
			const axiosError = err;
			const status = axiosError.response?.status;
			if (status && routeSpecificErrors?.[status]) message = routeSpecificErrors[status];
			else if (status === 404) message = "Could not connect to ComfyUI-Manager";
			else message = axiosError.response?.data?.message ?? `${context} failed with status ${status}`;
		}
		error.value = message;
	};
	const executeRequest = async (requestCall, options) => {
		const { errorContext, routeSpecificErrors, isQueueOperation } = options;
		if (!isManagerServiceAvailable()) {
			error.value = "Manager service is not available in current mode";
			return null;
		}
		isLoading.value = true;
		error.value = null;
		try {
			const response = await requestCall();
			if (isQueueOperation) await startQueue();
			return response.data;
		} catch (err) {
			handleRequestError(err, errorContext, routeSpecificErrors);
			return null;
		} finally {
			isLoading.value = false;
		}
	};
	const startQueue = async (signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.START_QUEUE, { signal }), {
			errorContext: "Starting ComfyUI-Manager job queue",
			routeSpecificErrors: { 201: "Created: ComfyUI-Manager job queue is already running" }
		});
	};
	const getQueueStatus = async (client_id, signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.QUEUE_STATUS, {
			params: client_id ? { client_id } : void 0,
			signal
		}), { errorContext: "Getting ComfyUI-Manager queue status" });
	};
	const listInstalledPacks = async (signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.LIST_INSTALLED, { signal }), { errorContext: "Fetching installed packs" });
	};
	const getImportFailInfo = async (signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.IMPORT_FAIL_INFO, { signal }), { errorContext: "Fetching import failure information" });
	};
	const getImportFailInfoBulk = async (params = {}, signal) => {
		const errorContext = "Fetching bulk import failure information";
		if (!params.cnr_ids?.length && !params.urls?.length) return {};
		return executeRequest(() => managerApiClient.post(ManagerRoute.IMPORT_FAIL_INFO_BULK, params, { signal }), { errorContext });
	};
	const queueTask = async (kind, params, ui_id, signal) => {
		const task = {
			kind,
			params,
			ui_id: ui_id || v4(),
			client_id: api.clientId ?? api.initialClientId ?? "unknown"
		};
		return executeRequest(() => managerApiClient.post(ManagerRoute.QUEUE_TASK, task, { signal }), {
			errorContext: `Queueing ${task.kind} task`,
			routeSpecificErrors: {
				403: GENERIC_SECURITY_ERR_MSG,
				404: `Not Found: Task could not be queued`
			},
			isQueueOperation: true
		});
	};
	const installPack = async (params, ui_id, signal) => {
		return queueTask("install", params, ui_id, signal);
	};
	const uninstallPack = async (params, ui_id, signal) => {
		return queueTask("uninstall", params, ui_id, signal);
	};
	const disablePack = async (params, ui_id, signal) => {
		return queueTask("disable", params, ui_id, signal);
	};
	const enablePack = async (params, ui_id, signal) => {
		return queueTask("enable", params, ui_id, signal);
	};
	const updatePack = async (params, ui_id, signal) => {
		return queueTask("update", params, ui_id, signal);
	};
	const updateAllPacks = async (params = {}, ui_id, signal) => {
		const errorContext = "Updating all packs";
		const routeSpecificErrors = {
			403: "Forbidden: To use this action, a security_level of `middle or below` is required",
			401: "Unauthorized: ComfyUI-Manager job queue is busy"
		};
		const queryParams = {
			mode: params.mode,
			client_id: api.clientId ?? api.initialClientId ?? "unknown",
			ui_id: ui_id || v4()
		};
		return executeRequest(() => managerApiClient.get(ManagerRoute.UPDATE_ALL, {
			params: queryParams,
			signal
		}), {
			errorContext,
			routeSpecificErrors,
			isQueueOperation: true
		});
	};
	const updateComfyUI = async (params = { is_stable: true }, ui_id, signal) => {
		const errorContext = "Updating ComfyUI";
		const routeSpecificErrors = {
			400: "Bad Request: Missing required parameters",
			403: "Forbidden: To use this action, a security_level of `middle or below` is required"
		};
		const queryParams = {
			client_id: api.clientId ?? api.initialClientId ?? "unknown",
			ui_id: ui_id || v4(),
			...params
		};
		return executeRequest(() => managerApiClient.get(ManagerRoute.UPDATE_COMFYUI, {
			params: queryParams,
			signal
		}), {
			errorContext,
			routeSpecificErrors,
			isQueueOperation: true
		});
	};
	const rebootComfyUI = async (signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.REBOOT, { signal }), {
			errorContext: "Rebooting ComfyUI",
			routeSpecificErrors: { 403: "Forbidden: Rebooting ComfyUI requires security_level of middle or below" }
		});
	};
	const isLegacyManagerUI = async (signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.IS_LEGACY_MANAGER_UI, { signal }), { errorContext: "Checking if user set Manager to use the legacy UI" });
	};
	const getTaskHistory = async (options = {}, signal) => {
		return executeRequest(() => managerApiClient.get(ManagerRoute.TASK_HISTORY, {
			params: options,
			signal
		}), { errorContext: "Getting ComfyUI-Manager task history" });
	};
	return {
		isLoading,
		error,
		startQueue,
		getQueueStatus,
		getTaskHistory,
		listInstalledPacks,
		getImportFailInfo,
		getImportFailInfoBulk,
		installPack,
		uninstallPack,
		enablePack,
		disablePack,
		updatePack,
		updateAllPacks,
		updateComfyUI,
		rebootComfyUI,
		isLegacyManagerUI
	};
};
//#endregion
//#region src/workbench/extensions/manager/stores/comfyManagerStore.ts
/**
* Store for state of installed node packs
*/
var useComfyManagerStore = defineStore("comfyManager", () => {
	const managerService = useComfyManagerService();
	const installedPacks = ref({});
	const enabledPacksIds = ref(/* @__PURE__ */ new Set());
	const disabledPacksIds = ref(/* @__PURE__ */ new Set());
	const installedPacksIds = ref(/* @__PURE__ */ new Set());
	const installingPacksIds = ref(/* @__PURE__ */ new Set());
	const isStale = ref(true);
	const taskLogs = ref([]);
	const succeededTasksLogs = ref([]);
	const failedTasksLogs = ref([]);
	const taskHistory = ref({});
	const succeededTasksIds = ref([]);
	const failedTasksIds = ref([]);
	const taskQueue = ref({
		history: {},
		running_queue: [],
		pending_queue: [],
		installed_packs: {}
	});
	const taskIdToPackId = ref(/* @__PURE__ */ new Map());
	const managerQueue = useManagerQueue(taskHistory, taskQueue, installedPacks);
	useEventListener(app.api, "cm-task-completed", (event) => {
		const taskId = event.detail?.ui_id;
		if (taskId && taskIdToPackId.value.has(taskId)) {
			const packId = taskIdToPackId.value.get(taskId);
			installingPacksIds.value.delete(packId);
			taskIdToPackId.value.delete(taskId);
		}
	});
	const setStale = () => {
		isStale.value = true;
	};
	const partitionTaskLogs = () => {
		const successTaskLogs = [];
		const failTaskLogs = [];
		for (const log of taskLogs.value) if (failedTasksIds.value.includes(log.taskId)) failTaskLogs.push(log);
		else successTaskLogs.push(log);
		succeededTasksLogs.value = successTaskLogs;
		failedTasksLogs.value = failTaskLogs;
	};
	const partitionTasks = () => {
		const successTasksIds = [];
		const failTasksIds = [];
		for (const task of Object.values(taskHistory.value)) if (task.status?.status_str === "success") successTasksIds.push(task.ui_id);
		else failTasksIds.push(task.ui_id);
		succeededTasksIds.value = successTasksIds;
		failedTasksIds.value = failTasksIds;
	};
	whenever(taskHistory, () => {
		partitionTasks();
		partitionTaskLogs();
	}, { deep: true });
	const getPackId = (pack) => pack.cnr_id || pack.aux_id;
	const isInstalledPackId = (packName) => !!packName && installedPacksIds.value.has(packName);
	const isEnabledPackId = (packName) => !!packName && isInstalledPackId(packName) && enabledPacksIds.value.has(packName);
	const isInstallingPackId = (packName) => !!packName && installingPacksIds.value.has(packName);
	const packsToIdSet = (packs) => packs.reduce((acc, pack) => {
		const id = pack.cnr_id || pack.aux_id;
		if (id) acc.add(id);
		return acc;
	}, /* @__PURE__ */ new Set());
	/**
	* A pack is disabled if there is a disabled entry and no corresponding
	* enabled entry. If `packname@1.0.2` is disabled, but `packname@1.0.3` is
	* enabled, then `packname` is considered enabled.
	*
	* @example
	* installedPacks = {
	*   "packname@1_0_2": { enabled: false, cnr_id: "packname" },
	*   "packname": { enabled: true, cnr_id: "packname" }
	* }
	* isDisabled("packname") // false
	*
	* installedPacks = {
	*   "packname@1_0_2": { enabled: false, cnr_id: "packname" },
	* }
	* isDisabled("packname") // true
	*/
	const updateDisabledIds = (packs) => {
		const enabledIds = /* @__PURE__ */ new Set();
		const disabledIds = /* @__PURE__ */ new Set();
		for (const pack of packs) {
			const id = getPackId(pack);
			if (!id) continue;
			const { enabled } = pack;
			if (enabled === true) enabledIds.add(id);
			else if (enabled === false) disabledIds.add(id);
			if (enabledIds.has(id) && disabledIds.has(id)) disabledIds.delete(id);
		}
		enabledPacksIds.value = enabledIds;
		disabledPacksIds.value = disabledIds;
	};
	const updateInstalledIds = (packs) => {
		installedPacksIds.value = packsToIdSet(packs);
	};
	const onPacksChanged = () => {
		const packs = Object.values(installedPacks.value);
		updateDisabledIds(packs);
		updateInstalledIds(packs);
	};
	watch(installedPacks, onPacksChanged, { deep: true });
	const refreshInstalledList = async () => {
		const packs = await managerService.listInstalledPacks();
		if (packs) installedPacks.value = normalizePackKeys(packs);
		isStale.value = false;
	};
	whenever(isStale, refreshInstalledList, { immediate: true });
	const enqueueTaskWithLogs = async (task, taskName) => {
		const taskId = v4();
		const { logs } = useServerLogs({
			ui_id: taskId,
			immediate: true
		});
		try {
			managerQueue.isProcessing.value = true;
			taskLogs.value.push({
				taskName,
				taskId,
				logs: logs.value
			});
			await task(taskId);
		} catch (error) {
			managerQueue.isProcessing.value = false;
			taskHistory.value[taskId] = {
				ui_id: taskId,
				client_id: api.clientId || "unknown",
				kind: "error",
				result: "failed",
				status: {
					status_str: "error",
					completed: false,
					messages: [error instanceof Error ? error.message : String(error)]
				},
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			};
		}
	};
	const installPack = useCachedRequest(async (params, signal) => {
		if (!params.id) return;
		let actionDescription = t("g.installing");
		if (installedPacksIds.value.has(params.id)) {
			const installedPack = installedPacks.value[params.id];
			if (installedPack && installedPack.ver !== params.selected_version) actionDescription = t("manager.changingVersion", {
				from: installedPack.ver,
				to: params.selected_version
			});
			else actionDescription = t("g.enabling");
		}
		installingPacksIds.value.add(params.id);
		const task = (taskId) => {
			taskIdToPackId.value.set(taskId, params.id);
			return managerService.installPack(params, taskId, signal);
		};
		await enqueueTaskWithLogs(task, `${actionDescription} ${params.id}`);
	}, { maxSize: 1 });
	const uninstallPack = async (params, signal) => {
		installPack.clear();
		installPack.cancel();
		installingPacksIds.value.add(params.id);
		const uninstallParams = {
			node_name: params.id,
			is_unknown: false
		};
		const task = (taskId) => {
			taskIdToPackId.value.set(taskId, params.id);
			return managerService.uninstallPack(uninstallParams, taskId, signal);
		};
		await enqueueTaskWithLogs(task, t("manager.uninstalling", { id: params.id }));
	};
	const updatePack = useCachedRequest(async (params, signal) => {
		updateAllPacks.cancel();
		const updateParams = {
			node_name: params.id,
			node_ver: params.version
		};
		const task = (taskId) => managerService.updatePack(updateParams, taskId, signal);
		await enqueueTaskWithLogs(task, t("g.updating", { id: params.id }));
	}, { maxSize: 1 });
	const updateAllPacks = useCachedRequest(async (params, signal) => {
		const task = (taskId) => managerService.updateAllPacks(params, taskId, signal);
		await enqueueTaskWithLogs(task, t("manager.updatingAllPacks"));
	}, { maxSize: 1 });
	const disablePack = async (params, signal) => {
		const disableParams = {
			node_name: params.id,
			is_unknown: false
		};
		const task = (taskId) => managerService.disablePack(disableParams, taskId, signal);
		await enqueueTaskWithLogs(task, t("g.disabling", { id: params.id }));
	};
	const enablePack = async (params, signal) => {
		const enableParams = { cnr_id: params.id };
		const task = (taskId) => managerService.enablePack(enableParams, taskId, signal);
		await enqueueTaskWithLogs(task, t("g.enabling", { id: params.id }));
	};
	const getInstalledPackVersion = (packId) => {
		return installedPacks.value[packId]?.ver;
	};
	const clearLogs = () => {
		taskLogs.value = [];
	};
	const resetTaskState = () => {
		taskLogs.value = [];
		taskHistory.value = {};
		succeededTasksIds.value = [];
		failedTasksIds.value = [];
		succeededTasksLogs.value = [];
		failedTasksLogs.value = [];
		installingPacksIds.value.clear();
		taskIdToPackId.value.clear();
		taskQueue.value = {
			history: {},
			running_queue: [],
			pending_queue: [],
			installed_packs: {}
		};
	};
	return {
		isLoading: managerService.isLoading,
		error: managerService.error,
		taskLogs,
		clearLogs,
		resetTaskState,
		setStale,
		installedPacks,
		installedPacksIds,
		isPackInstalled: isInstalledPackId,
		isPackEnabled: isEnabledPackId,
		isPackInstalling: isInstallingPackId,
		getInstalledPackVersion,
		refreshInstalledList,
		taskHistory,
		taskQueue,
		isProcessingTasks: managerQueue.isProcessing,
		succeededTasksIds,
		failedTasksIds,
		succeededTasksLogs,
		failedTasksLogs,
		managerQueue,
		installPack,
		uninstallPack,
		updatePack,
		updateAllPacks,
		disablePack,
		enablePack
	};
});
//#endregion
//#region src/workbench/extensions/manager/composables/nodePack/useInstalledPacks.ts
var useInstalledPacks = (options = {}) => {
	const comfyManagerStore = useComfyManagerStore();
	const isInitializing = ref(false);
	const lastFetchedIds = ref("");
	const installedPackIds = computed(() => Array.from(comfyManagerStore.installedPacksIds));
	const { startFetch, cleanup, error, isLoading, nodePacks, isReady } = useNodePacks(installedPackIds, options);
	const filterInstalledPack = (packs) => packs.filter((pack) => comfyManagerStore.isPackInstalled(pack.id));
	const startFetchInstalled = async () => {
		if (isInitializing.value) return;
		isInitializing.value = true;
		try {
			if (comfyManagerStore.installedPacksIds.size === 0) await comfyManagerStore.refreshInstalledList();
			await startFetch();
		} finally {
			isInitializing.value = false;
		}
	};
	whenever(installedPackIds, async (newIds) => {
		const newIdsStr = newIds.sort().join(",");
		if (newIdsStr !== lastFetchedIds.value && !isInitializing.value) {
			lastFetchedIds.value = newIdsStr;
			await startFetch();
		}
	});
	onUnmounted(() => {
		cleanup();
	});
	return {
		error,
		isLoading,
		isReady,
		installedPacks: nodePacks,
		installedPacksWithVersions: computed(() => {
			const result = [];
			for (const pack of Object.values(comfyManagerStore.installedPacks)) {
				const id = pack.cnr_id || pack.aux_id;
				if (id) result.push({
					id,
					version: pack.ver ?? ""
				});
			}
			return result;
		}),
		startFetchInstalled,
		filterInstalledPack
	};
};
//#endregion
//#region src/workbench/extensions/manager/utils/conflictUtils.ts
/**
* Checks for banned package status conflicts.
*/
function createBannedConflict(isBanned) {
	if (isBanned === true) return {
		type: "banned",
		current_value: "installed",
		required_value: "not_banned"
	};
	return null;
}
/**
* Checks for pending package status conflicts.
*/
function createPendingConflict(isPending) {
	if (isPending === true) return {
		type: "pending",
		current_value: "installed",
		required_value: "not_pending"
	};
	return null;
}
/**
* Groups and deduplicates conflicts by normalized package name.
* Consolidates multiple conflict sources (registry checks, import failures, disabled packages with version suffix)
* into a single UI entry per package.
*
* Example:
* - Input: [{name: "pack@1_0_3", conflicts: [...]}, {name: "pack", conflicts: [...]}]
* - Output: [{name: "pack", conflicts: [...combined unique conflicts...]}]
*
* @param conflicts Array of conflict detection results (may have duplicate packages with version suffixes)
* @returns Array of deduplicated conflict results grouped by normalized package name
*/
function consolidateConflictsByPackage(conflicts) {
	const grouped = groupBy(conflicts, (conflict) => normalizePackId(conflict.package_name));
	return Object.entries(grouped).map(([packageName, packageConflicts]) => {
		const uniqueConflicts = uniqBy(packageConflicts.flatMap((pc) => pc.conflicts), (conflict) => `${conflict.type}|${conflict.current_value}|${conflict.required_value}`);
		return {
			...packageConflicts[0],
			package_name: packageName,
			conflicts: uniqueConflicts,
			has_conflict: uniqueConflicts.length > 0,
			is_compatible: uniqueConflicts.length === 0
		};
	});
}
//#endregion
//#region src/workbench/extensions/manager/utils/systemCompatibility.ts
/**
* Maps system OS string to Registry OS format
* @param systemOS Raw OS string from system stats ('darwin', 'win32', 'linux', etc)
* @returns Registry OS or undefined if unknown
*/
function getRegistryOS(systemOS) {
	if (!systemOS) return void 0;
	const lower = systemOS.toLowerCase();
	if (lower.includes("darwin") || lower.includes("mac")) return "macOS";
	if (lower.includes("win")) return "Windows";
	if (lower.includes("linux")) return "Linux";
}
/**
* Maps device type to Registry accelerator format
* @param deviceType Raw device type from system stats ('cuda', 'mps', 'rocm', 'cpu', etc)
* @returns Registry accelerator
*/
function getRegistryAccelerator(deviceType) {
	if (!deviceType) return "CPU";
	const lower = deviceType.toLowerCase();
	if (lower === "cuda") return "CUDA";
	if (lower === "mps") return "Metal";
	if (lower === "rocm") return "ROCm";
	return "CPU";
}
/**
* Checks OS compatibility
* @param supported Supported OS list from Registry (null/undefined = all OS supported)
* @param current Current system OS
* @returns ConflictDetail if incompatible, null if compatible
*/
function checkOSCompatibility(supported, current) {
	if (isNil(supported) || isEmpty(supported)) return null;
	const currentOS = getRegistryOS(current);
	if (!currentOS) return {
		type: "os",
		current_value: "Unknown",
		required_value: supported.join(", ")
	};
	if (!supported.includes(currentOS)) return {
		type: "os",
		current_value: currentOS,
		required_value: supported.join(", ")
	};
	return null;
}
/**
* Checks accelerator compatibility
* @param supported Supported accelerators from Registry (null/undefined = all accelerators supported)
* @param current Current device type
* @returns ConflictDetail if incompatible, null if compatible
*/
function checkAcceleratorCompatibility(supported, current) {
	if (isNil(supported) || isEmpty(supported)) return null;
	const currentAcc = getRegistryAccelerator(current);
	if (!supported.includes(currentAcc)) return {
		type: "accelerator",
		current_value: currentAcc,
		required_value: supported.join(", ")
	};
	return null;
}
/**
* Normalizes OS values from Registry API
* Handles edge cases like "OS Independent"
* @returns undefined if all OS supported, otherwise filtered valid OS list
*/
function normalizeOSList(osValues) {
	if (isNil(osValues) || isEmpty(osValues)) return void 0;
	if (osValues.some((os) => os.toLowerCase() === "os independent")) return;
	const validOS = [];
	osValues.forEach((os) => {
		if (os === "Windows" || os === "macOS" || os === "Linux") {
			if (!validOS.includes(os)) validOS.push(os);
		}
	});
	return validOS.length > 0 ? validOS : void 0;
}
//#endregion
//#region src/workbench/extensions/manager/utils/versionUtil.ts
/**
* Cleans a version string by removing common prefixes and normalizing format
* @param version Raw version string (e.g., "v1.2.3", "1.2.3-alpha")
* @returns Cleaned version string or original if cleaning fails
*/
function cleanVersion(version) {
	return (0, import_semver.clean)(version) || version;
}
/**
* Checks version compatibility and returns conflict details.
* Supports all semver ranges including >=, <=, >, <, ~, ^ operators.
* @param type Conflict type (e.g., 'comfyui_version', 'frontend_version')
* @param currentVersion Current version string
* @param supportedVersion Required version range string
* @returns ConflictDetail object if incompatible, null if compatible
*/
function checkVersionCompatibility(type, currentVersion, supportedVersion) {
	if (isNil(currentVersion) || isEmpty(currentVersion)) return null;
	if (isNil(supportedVersion) || isEmpty(supportedVersion?.trim())) return null;
	const cleanCurrent = cleanVersion(currentVersion);
	let isCompatible = false;
	try {
		isCompatible = (0, import_semver.satisfies)(cleanCurrent, supportedVersion);
	} catch {
		return {
			type,
			current_value: currentVersion,
			required_value: supportedVersion
		};
	}
	if (isCompatible) return null;
	return {
		type,
		current_value: currentVersion,
		required_value: supportedVersion
	};
}
/**
* get frontend version from config.
* @returns frontend version string or undefined
*/
function getFrontendVersion() {
	return config_default.app_version || void 0;
}
//#endregion
//#region src/workbench/extensions/manager/composables/useConflictDetection.ts
/**
* Composable for conflict detection system.
* Error-resilient and asynchronous to avoid affecting other components.
*/
function useConflictDetection() {
	const managerStore = useComfyManagerStore();
	const { startFetchInstalled, installedPacks, installedPacksWithVersions, isReady: installedPacksReady } = useInstalledPacks();
	const isDetecting = ref(false);
	const lastDetectionTime = ref(null);
	const detectionError = ref(null);
	const systemEnvironment = ref(null);
	const detectionResults = ref([]);
	const storedMergedConflicts = ref([]);
	const abortController = ref(null);
	const acknowledgment = useConflictAcknowledgment();
	const conflictStore = useConflictDetectionStore();
	const hasConflicts = computed(() => conflictStore.hasConflicts);
	const conflictedPackages = computed(() => {
		return conflictStore.conflictedPackages;
	});
	const bannedPackages = computed(() => conflictStore.bannedPackages);
	const securityPendingPackages = computed(() => conflictStore.securityPendingPackages);
	/**
	* Collects current system environment information.
	* Continues with default values even if errors occur.
	* @returns Promise that resolves to system environment information
	*/
	async function collectSystemEnvironment() {
		try {
			const systemStatsStore = useSystemStatsStore();
			const { systemStats } = systemStatsStore;
			await until(() => systemStatsStore.isInitialized).toBe(true);
			const frontendVersion = getFrontendVersion();
			const environment = {
				comfyui_version: systemStats?.system.comfyui_version ?? "",
				frontend_version: frontendVersion,
				os: systemStats?.system.os ?? "",
				accelerator: systemStats?.devices?.[0]?.type ?? ""
			};
			systemEnvironment.value = environment;
			return environment;
		} catch (error) {
			const fallbackEnvironment = {
				comfyui_version: void 0,
				frontend_version: void 0,
				os: void 0,
				accelerator: void 0
			};
			systemEnvironment.value = fallbackEnvironment;
			return fallbackEnvironment;
		}
	}
	/**
	* Fetches requirement information for installed packages using Registry Store.
	*
	* This function combines local installation data with Registry API compatibility metadata
	* using the established store layer pattern with caching and batch requests.
	*
	* Process
	* 1. Get locally installed packages
	* 2. Batch fetch Registry data using store layer
	* 3. Combine local + Registry data
	* 4. Extract compatibility requirements
	*
	* @returns Promise that resolves to array of node pack requirements
	*/
	async function buildNodeRequirements() {
		try {
			await startFetchInstalled();
			if (!installedPacksReady.value || !installedPacks.value || installedPacks.value.length === 0) {
				console.warn("[ConflictDetection] No installed packages available from useInstalledPacks");
				return [];
			}
			const registryService = useComfyRegistryService();
			abortController.value = new AbortController();
			const versionDataMap = /* @__PURE__ */ new Map();
			const nodeVersions = installedPacksWithVersions.value.map((pack) => ({
				node_id: pack.id,
				version: pack.version
			}));
			if (nodeVersions.length > 0) try {
				const bulkResponse = await registryService.getBulkNodeVersions(nodeVersions, abortController.value?.signal);
				if (bulkResponse && bulkResponse.node_versions?.length > 0) bulkResponse.node_versions.forEach((result) => {
					if (result.status === "success" && result.node_version) versionDataMap.set(result.identifier.node_id, result.node_version);
					else if (result.status === "error") console.warn(`[ConflictDetection] Failed to fetch version data for ${result.identifier.node_id}@${result.identifier.version}:`, result.error_message);
				});
			} catch (error) {
				console.warn("[ConflictDetection] Failed to fetch bulk version data:", error);
			}
			const requirements = [];
			for (const installedPackVersion of installedPacksWithVersions.value) {
				const versionData = versionDataMap.get(installedPackVersion.id);
				const isEnabled = managerStore.isPackEnabled(installedPackVersion.id);
				const packInfo = find(installedPacks.value, { id: installedPackVersion.id });
				if (versionData) {
					const requirement = {
						id: installedPackVersion.id,
						name: packInfo?.name || installedPackVersion.id,
						installed_version: installedPackVersion.version,
						is_enabled: isEnabled,
						supported_comfyui_version: versionData.supported_comfyui_version,
						supported_comfyui_frontend_version: versionData.supported_comfyui_frontend_version,
						supported_os: normalizeOSList(versionData.supported_os),
						supported_accelerators: versionData.supported_accelerators,
						version_status: versionData.status,
						is_banned: versionData.status === "NodeVersionStatusBanned",
						is_pending: versionData.status === "NodeVersionStatusPending"
					};
					requirements.push(requirement);
				} else {
					console.warn(`[ConflictDetection] No Registry data found for ${installedPackVersion.id}, using fallback`);
					const fallbackRequirement = {
						id: installedPackVersion.id,
						name: packInfo?.name || installedPackVersion.id,
						installed_version: installedPackVersion.version,
						is_enabled: isEnabled,
						is_banned: false,
						is_pending: false
					};
					requirements.push(fallbackRequirement);
				}
			}
			return requirements;
		} catch (error) {
			console.warn("[ConflictDetection] Failed to fetch package requirements:", error);
			return [];
		}
	}
	/**
	* Detects conflicts for an individual package using Registry API data.
	*
	* @param packageReq Package requirements from Registry
	* @param sysEnv Current system environment
	* @returns Conflict detection result for the package
	*/
	function analyzePackageConflicts(packageReq, systemEnvInfo) {
		const conflicts = [];
		const versionConflict = checkVersionCompatibility("comfyui_version", systemEnvInfo.comfyui_version, packageReq.supported_comfyui_version);
		if (versionConflict) conflicts.push(versionConflict);
		const frontendConflict = checkVersionCompatibility("frontend_version", systemEnvInfo.frontend_version, packageReq.supported_comfyui_frontend_version);
		if (frontendConflict) conflicts.push(frontendConflict);
		const osConflict = checkOSCompatibility(packageReq.supported_os, systemEnvInfo.os);
		if (osConflict) conflicts.push(osConflict);
		const acceleratorConflict = checkAcceleratorCompatibility(packageReq.supported_accelerators, systemEnvInfo.accelerator);
		if (acceleratorConflict) conflicts.push(acceleratorConflict);
		const bannedConflict = createBannedConflict(packageReq.is_banned);
		if (bannedConflict) conflicts.push(bannedConflict);
		const pendingConflict = createPendingConflict(packageReq.is_pending);
		if (pendingConflict) conflicts.push(pendingConflict);
		const hasConflict = conflicts.length > 0;
		return {
			package_id: packageReq.id ?? "",
			package_name: packageReq.name ?? "",
			has_conflict: hasConflict,
			conflicts,
			is_compatible: !hasConflict
		};
	}
	/**
	* Fetches Python import failure information from ComfyUI Manager.
	* Gets installed packages and checks each one for import failures using bulk API.
	* @returns Promise that resolves to import failure data
	*/
	async function fetchImportFailInfo() {
		try {
			const comfyManagerService = useComfyManagerService();
			if (!installedPacksWithVersions.value || installedPacksWithVersions.value.length === 0) {
				console.warn("[ConflictDetection] No installed packages available for import failure check");
				return {};
			}
			const packageIds = installedPacksWithVersions.value.map((pack) => pack.id);
			const bulkResult = await comfyManagerService.getImportFailInfoBulk({ cnr_ids: packageIds }, abortController.value?.signal);
			if (bulkResult) {
				const importFailures = {};
				Object.entries(bulkResult).forEach(([packageId, failInfo]) => {
					if (failInfo !== null) importFailures[packageId] = failInfo;
				});
				return importFailures;
			}
			return {};
		} catch (error) {
			console.warn("[ConflictDetection] Failed to fetch import failure information:", error);
			return {};
		}
	}
	/**
	* Detects runtime conflicts from Python import failures.
	* @param importFailInfo Import failure data from Manager API
	* @returns Array of conflict detection results for failed imports
	*/
	function detectImportFailConflicts(importFailInfo) {
		const results = [];
		if (!importFailInfo || typeof importFailInfo !== "object") return results;
		for (const [packageId, failureInfo] of Object.entries(importFailInfo)) {
			if (!failureInfo || typeof failureInfo !== "object") continue;
			const errorMsg = failureInfo.error || "Unknown import error";
			const fullErrorInfo = failureInfo.traceback || errorMsg;
			results.push({
				package_id: packageId,
				package_name: packageId,
				has_conflict: true,
				conflicts: [{
					type: "import_failed",
					current_value: errorMsg,
					required_value: fullErrorInfo
				}],
				is_compatible: false
			});
			console.warn(`[ConflictDetection] Python import failure detected for ${packageId}:`, errorMsg);
		}
		return results;
	}
	/**
	* Performs complete conflict detection.
	* @returns Promise that resolves to conflict detection response
	*/
	async function runFullConflictAnalysis() {
		if (isDetecting.value) return {
			success: false,
			error_message: "Already detecting conflicts",
			results: detectionResults.value
		};
		isDetecting.value = true;
		detectionError.value = null;
		try {
			const systemEnvInfo = await collectSystemEnvironment();
			const conflictDetectionTasks = (await buildNodeRequirements()).map(async (packageReq) => {
				try {
					return analyzePackageConflicts(packageReq, systemEnvInfo);
				} catch (error) {
					console.warn(`[ConflictDetection] Failed to detect conflicts for package ${packageReq.name}:`, error);
					return null;
				}
			});
			const packageResults = (await Promise.allSettled(conflictDetectionTasks)).map((result) => result.status === "fulfilled" ? result.value : null).filter((result) => result !== null);
			const importFailResults = detectImportFailConflicts(await fetchImportFailInfo());
			const allResults = [...packageResults, ...importFailResults];
			detectionResults.value = allResults;
			lastDetectionTime.value = (/* @__PURE__ */ new Date()).toISOString();
			if (allResults.some((result) => result.has_conflict)) {
				const mergedConflicts = consolidateConflictsByPackage(allResults.filter((result) => result.has_conflict));
				conflictStore.setConflictedPackages(mergedConflicts);
				detectionResults.value = [...mergedConflicts];
				storedMergedConflicts.value = [...mergedConflicts];
				return {
					success: true,
					results: mergedConflicts,
					detected_system_environment: systemEnvInfo
				};
			} else {
				conflictStore.clearConflicts();
				detectionResults.value = [];
			}
			return {
				success: true,
				results: allResults,
				detected_system_environment: systemEnvInfo
			};
		} catch (error) {
			console.error("[ConflictDetection] Error during conflict detection:", error);
			detectionError.value = error instanceof Error ? error.message : String(error);
			return {
				success: false,
				error_message: detectionError.value,
				results: []
			};
		} finally {
			isDetecting.value = false;
			if (abortController.value) abortController.value = null;
		}
	}
	/**
	* Error-resilient initialization (called on app mount).
	* Async function that doesn't block UI setup.
	* Ensures proper order: system_stats -> manager state -> installed -> versions bulk -> import_fail_info_bulk
	*/
	async function initializeConflictDetection() {
		try {
			const systemStatsStore = useSystemStatsStore();
			await until(() => systemStatsStore.isInitialized).toBe(true);
			if (!useManagerState().isNewManagerUI.value) return;
			await runFullConflictAnalysis();
		} catch (error) {
			console.warn("[ConflictDetection] Error during initialization (ignored):", error);
		}
	}
	function cancelRequests() {
		if (abortController.value) {
			abortController.value.abort();
			abortController.value = null;
		}
	}
	if (getCurrentInstance()) onUnmounted(() => {
		cancelRequests();
	});
	/**
	* Check if conflicts should trigger modal display after "What's New" dismissal
	*/
	async function shouldShowConflictModalAfterUpdate() {
		if (detectionResults.value.length === 0) await runFullConflictAnalysis();
		const hasActualConflicts = hasConflicts.value;
		const canShowModal = acknowledgment.shouldShowConflictModal.value;
		return hasActualConflicts && canShowModal;
	}
	/**
	* Check compatibility for a node.
	* Used by components like PackVersionSelectorPopover.
	*/
	function checkNodeCompatibility(node) {
		const conflicts = [];
		const osConflict = checkOSCompatibility(normalizeOSList(node.supported_os), systemEnvironment.value?.os);
		if (osConflict) conflicts.push(osConflict);
		const acceleratorConflict = checkAcceleratorCompatibility(node.supported_accelerators, systemEnvironment.value?.accelerator);
		if (acceleratorConflict) conflicts.push(acceleratorConflict);
		const comfyUIVersionConflict = checkVersionCompatibility("comfyui_version", systemEnvironment.value?.comfyui_version, node.supported_comfyui_version);
		if (comfyUIVersionConflict) conflicts.push(comfyUIVersionConflict);
		const frontendVersionConflict = checkVersionCompatibility("frontend_version", getFrontendVersion(), node.supported_comfyui_frontend_version);
		if (frontendVersionConflict) conflicts.push(frontendVersionConflict);
		const bannedConflict = createBannedConflict(node.status === "NodeStatusBanned" || node.status === "NodeVersionStatusBanned");
		if (bannedConflict) conflicts.push(bannedConflict);
		const pendingConflict = createPendingConflict(node.status === "NodeVersionStatusPending");
		if (pendingConflict) conflicts.push(pendingConflict);
		return {
			hasConflict: conflicts.length > 0,
			conflicts
		};
	}
	return {
		isDetecting: readonly(isDetecting),
		lastDetectionTime: readonly(lastDetectionTime),
		detectionError: readonly(detectionError),
		systemEnvironment: readonly(systemEnvironment),
		detectionResults: readonly(detectionResults),
		hasConflicts,
		conflictedPackages,
		bannedPackages,
		securityPendingPackages,
		runFullConflictAnalysis,
		collectSystemEnvironment,
		initializeConflictDetection,
		cancelRequests,
		shouldShowConflictModalAfterUpdate,
		checkNodeCompatibility
	};
}
//#endregion
export { useManagerState as a, useConflictAcknowledgment as c, DotSpinner_default as d, useComfyRegistryStore as f, ManagerUIState as i, usePackInstall as l, useBootstrapStore as m, useComfyManagerStore as n, useMissingNodes as o, config_default as p, useComfyManagerService as r, ManagerTab as s, useConflictDetection as t, useNodeConflictDialog as u };

//# sourceMappingURL=useConflictDetection-CJV5QMRy.js.map