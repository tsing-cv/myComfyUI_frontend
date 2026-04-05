import "./rolldown-runtime-DBfy44LZ.js";
import { L as script$5, M as script$7, N as script$4, Y as script$6, c as script$1, ot as script, st as script$3, tt as script$2 } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, at as resolveDirective, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, pt as watch, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import { t as axios } from "./vendor-axios-B-zaJ78_.js";
import { mt as isAbortError } from "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as d } from "./i18n-1Rh80DIx.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Bi as useAuthStore, Hi as getComfyApiBaseUrl, Ni as useCommandStore, Oi as useAuthActions, ki as useBillingContext, nt as formatCreditsFromCents, t as useDialogService } from "./dialogService-DKx-VcuC.js";
import { c as formatMetronomeCurrency } from "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import { t as useExternalLink } from "./useExternalLink-DB_su3zs.js";
//#region src/components/common/UserCredit.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	key: 0,
	class: "flex items-center gap-1"
};
var _hoisted_2$2 = { class: "flex items-center gap-2" };
var _hoisted_3$2 = {
	key: 1,
	class: "flex items-center gap-1"
};
//#endregion
//#region src/components/common/UserCredit.vue
var UserCredit_default = /* @__PURE__ */ defineComponent({
	__name: "UserCredit",
	props: {
		textClass: {},
		showCreditsOnly: { type: Boolean }
	},
	setup(__props) {
		const authStore = useAuthStore();
		const balanceLoading = computed(() => authStore.isFetchingBalance);
		const { t, locale } = useI18n();
		const formattedBalance = computed(() => {
			return `${formatCreditsFromCents({
				cents: authStore.balance?.effective_balance_micros ?? authStore.balance?.amount_micros ?? 0,
				locale: locale.value
			})} ${t("credits.credits")}`;
		});
		const formattedCreditsOnly = computed(() => {
			return formatCreditsFromCents({
				cents: authStore.balance?.effective_balance_micros ?? authStore.balance?.amount_micros ?? 0,
				locale: locale.value,
				numberOptions: {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0
				}
			});
		});
		return (_ctx, _cache) => {
			return balanceLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
				createBaseVNode("div", _hoisted_2$2, [createVNode(unref(script), {
					shape: "circle",
					width: "1.5rem",
					height: "1.5rem"
				})]),
				_cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex-1" }, null, -1)),
				createVNode(unref(script), {
					width: "8rem",
					height: "2rem"
				})
			])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [!_ctx.showCreditsOnly ? (openBlock(), createBlock(unref(script$1), {
				key: 0,
				severity: "secondary",
				rounded: "",
				class: "p-1 text-amber-400"
			}, {
				icon: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "icon-[lucide--component]" }, null, -1)])),
				_: 1
			})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.textClass) }, toDisplayString(_ctx.showCreditsOnly ? formattedCreditsOnly.value : formattedBalance.value), 3)]));
		};
	}
});
//#endregion
//#region src/services/customerEventsService.ts
var EventType = /* @__PURE__ */ function(EventType) {
	EventType["CREDIT_ADDED"] = "credit_added";
	EventType["ACCOUNT_CREATED"] = "account_created";
	EventType["API_USAGE_STARTED"] = "api_usage_started";
	EventType["API_USAGE_COMPLETED"] = "api_usage_completed";
	return EventType;
}({});
var customerApiClient = axios.create({
	baseURL: getComfyApiBaseUrl(),
	headers: { "Content-Type": "application/json" }
});
var useCustomerEventsService = () => {
	const isLoading = ref(false);
	const error = ref(null);
	watch(() => getComfyApiBaseUrl(), (url) => {
		customerApiClient.defaults.baseURL = url;
	});
	const handleRequestError = (err, context, routeSpecificErrors) => {
		if (isAbortError(err)) return;
		let message;
		if (!axios.isAxiosError(err)) message = `${context} failed: ${err instanceof Error ? err.message : String(err)}`;
		else {
			const axiosError = err;
			const status = axiosError.response?.status;
			if (status && routeSpecificErrors?.[status]) message = routeSpecificErrors[status];
			else message = axiosError.response?.data?.message ?? `${context} failed with status ${status}`;
		}
		error.value = message;
	};
	const executeRequest = async (requestCall, options) => {
		const { errorContext, routeSpecificErrors } = options;
		isLoading.value = true;
		error.value = null;
		try {
			return (await requestCall()).data;
		} catch (err) {
			handleRequestError(err, errorContext, routeSpecificErrors);
			return null;
		} finally {
			isLoading.value = false;
		}
	};
	function formatEventType(eventType) {
		switch (eventType) {
			case "credit_added": return "Credits Added";
			case "account_created": return "Account Created";
			case "api_usage_completed": return "API Usage";
			default: return eventType;
		}
	}
	function formatDate(dateString) {
		return d(new Date(dateString), {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
	}
	function formatJsonKey(key) {
		return key.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
	}
	function formatJsonValue(value) {
		if (typeof value === "number") return value.toLocaleString();
		if (typeof value === "string") {
			const date = new Date(value);
			if (!Number.isNaN(date.getTime()) && /^\d{4}-\d{2}-\d{2}T/.test(value)) return d(date, {
				dateStyle: "medium",
				timeStyle: "short"
			});
		}
		return value;
	}
	function getEventSeverity(eventType) {
		switch (eventType) {
			case "credit_added": return "success";
			case "account_created": return "info";
			case "api_usage_completed": return "warning";
			default: return "info";
		}
	}
	function hasAdditionalInfo(event) {
		const { amount, api_name, model, ...otherParams } = event.params || {};
		return Object.keys(otherParams).length > 0;
	}
	function getTooltipContent(event) {
		const { ...params } = event.params || {};
		return Object.entries(params).map(([key, value]) => {
			return `<strong>${formatJsonKey(key)}:</strong> ${formatJsonValue(value)}`;
		}).join("<br>");
	}
	function formatAmount(amountMicros) {
		if (!amountMicros) return "0.00";
		return (amountMicros / 100).toFixed(2);
	}
	async function getMyEvents({ page = 1, limit = 10 } = {}) {
		const errorContext = "Fetching customer events";
		const routeSpecificErrors = {
			400: "Invalid input, object invalid",
			404: "Not found"
		};
		const authHeaders = await useAuthStore().getAuthHeader();
		if (!authHeaders) {
			error.value = "Authentication header is missing";
			return null;
		}
		return await executeRequest(() => customerApiClient.get("/customers/events", {
			params: {
				page,
				limit
			},
			headers: authHeaders
		}), {
			errorContext,
			routeSpecificErrors
		});
	}
	return {
		isLoading,
		error,
		getMyEvents,
		formatEventType,
		getEventSeverity,
		formatAmount,
		hasAdditionalInfo,
		formatDate,
		formatJsonKey,
		formatJsonValue,
		getTooltipContent
	};
};
//#endregion
//#region src/components/dialog/content/setting/UsageLogsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "flex items-center justify-center p-8"
};
var _hoisted_2$1 = {
	key: 1,
	class: "p-4"
};
var _hoisted_3$1 = { class: "event-details" };
var _hoisted_4$1 = {
	key: 0,
	class: "font-semibold text-green-500"
};
var _hoisted_5$1 = { key: 1 };
var _hoisted_6$1 = {
	key: 2,
	class: "flex flex-col gap-1"
};
var _hoisted_7$1 = { class: "font-semibold" };
var _hoisted_8$1 = { class: "text-sm text-smoke-400" };
//#endregion
//#region src/components/dialog/content/setting/UsageLogsTable.vue
var UsageLogsTable_default = /* @__PURE__ */ defineComponent({
	__name: "UsageLogsTable",
	setup(__props, { expose: __expose }) {
		const events = ref([]);
		const loading = ref(true);
		const error = ref(null);
		const customerEventService = useCustomerEventsService();
		const pagination = ref({
			page: 1,
			limit: 7,
			total: 0,
			totalPages: 0
		});
		const dataTableFirst = computed(() => (pagination.value.page - 1) * pagination.value.limit);
		const tooltipContentMap = computed(() => {
			const map = /* @__PURE__ */ new Map();
			events.value.forEach((event) => {
				if (customerEventService.hasAdditionalInfo(event) && event.event_id) map.set(event.event_id, customerEventService.getTooltipContent(event));
			});
			return map;
		});
		const loadEvents = async () => {
			loading.value = true;
			error.value = null;
			try {
				const response = await customerEventService.getMyEvents({
					page: pagination.value.page,
					limit: pagination.value.limit
				});
				if (response) {
					if (response.events) events.value = response.events;
					if (response.page) pagination.value.page = response.page;
					if (response.limit) pagination.value.limit = response.limit;
					if (response.total) pagination.value.total = response.total;
					if (response.totalPages) pagination.value.totalPages = response.totalPages;
					useTelemetry()?.checkForCompletedTopup(response.events);
				} else error.value = customerEventService.error.value || "Failed to load events";
			} catch (err) {
				error.value = err instanceof Error ? err.message : "Unknown error";
				console.error("Error loading events:", err);
			} finally {
				loading.value = false;
			}
		};
		const onPageChange = (event) => {
			pagination.value.page = event.page + 1;
			loadEvents().catch((error) => {
				console.error("Error loading events:", error);
			});
		};
		const refresh = async () => {
			pagination.value.page = 1;
			await loadEvents();
		};
		__expose({ refresh });
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", null, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(script$2))])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(script$3), {
				severity: "error",
				closable: false
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
				_: 1
			})])) : (openBlock(), createBlock(unref(script$4), {
				key: 2,
				value: events.value,
				paginator: true,
				rows: pagination.value.limit,
				"total-records": pagination.value.total,
				first: dataTableFirst.value,
				lazy: true,
				class: "p-datatable-sm custom-datatable",
				onPage: onPageChange
			}, {
				default: withCtx(() => [
					createVNode(unref(script$5), {
						field: "event_type",
						header: _ctx.$t("credits.eventType")
					}, {
						body: withCtx(({ data }) => [createVNode(unref(script$6), {
							value: unref(customerEventService).formatEventType(data.event_type),
							severity: unref(customerEventService).getEventSeverity(data.event_type)
						}, null, 8, ["value", "severity"])]),
						_: 1
					}, 8, ["header"]),
					createVNode(unref(script$5), {
						field: "details",
						header: _ctx.$t("credits.details")
					}, {
						body: withCtx(({ data }) => [createBaseVNode("div", _hoisted_3$1, [data.event_type === unref(EventType).CREDIT_ADDED ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(_ctx.$t("credits.added")) + " $" + toDisplayString(unref(customerEventService).formatAmount(data.params?.amount)), 1)) : data.event_type === unref(EventType).ACCOUNT_CREATED ? (openBlock(), createElementBlock("div", _hoisted_5$1, toDisplayString(_ctx.$t("credits.accountInitialized")), 1)) : data.event_type === unref(EventType).API_USAGE_COMPLETED ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createBaseVNode("div", _hoisted_7$1, toDisplayString(data.params?.api_name || "API"), 1), createBaseVNode("div", _hoisted_8$1, toDisplayString(_ctx.$t("credits.model")) + ": " + toDisplayString(data.params?.model || "-"), 1)])) : createCommentVNode("", true)])]),
						_: 1
					}, 8, ["header"]),
					createVNode(unref(script$5), {
						field: "createdAt",
						header: _ctx.$t("credits.time")
					}, {
						body: withCtx(({ data }) => [createTextVNode(toDisplayString(unref(customerEventService).formatDate(data.createdAt)), 1)]),
						_: 1
					}, 8, ["header"]),
					createVNode(unref(script$5), {
						field: "params",
						header: _ctx.$t("credits.additionalInfo")
					}, {
						body: withCtx(({ data }) => [unref(customerEventService).hasAdditionalInfo(data) ? withDirectives((openBlock(), createBlock(Button_default, {
							key: 0,
							variant: "textonly",
							size: "icon-sm",
							"aria-label": _ctx.$t("credits.additionalInfo")
						}, {
							default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-info-circle" }, null, -1)])),
							_: 2
						}, 1032, ["aria-label"])), [[
							_directive_tooltip,
							{
								escape: false,
								value: tooltipContentMap.value.get(data.event_id) || "",
								pt: { text: { style: { width: "max-content !important" } } }
							},
							void 0,
							{ top: true }
						]]) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["header"])
				]),
				_: 1
			}, 8, [
				"value",
				"rows",
				"total-records",
				"first"
			]))]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/LegacyCreditsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "credits-container h-full" };
var _hoisted_2 = { class: "flex h-full flex-col" };
var _hoisted_3 = { class: "mb-2 text-2xl font-bold" };
var _hoisted_4 = { class: "flex flex-col gap-2" };
var _hoisted_5 = { class: "text-sm font-medium text-muted" };
var _hoisted_6 = { class: "flex items-center justify-between" };
var _hoisted_7 = { class: "flex flex-row items-center" };
var _hoisted_8 = {
	key: 1,
	class: "text-xs text-muted"
};
var _hoisted_9 = { class: "flex items-center justify-between" };
var _hoisted_10 = {
	key: 0,
	class: "grow"
};
var _hoisted_11 = { class: "text-sm font-medium" };
var _hoisted_12 = { class: "text-xs text-muted" };
var _hoisted_13 = { class: "flex flex-row gap-2" };
//#endregion
//#region src/components/dialog/content/setting/LegacyCreditsPanel.vue
var LegacyCreditsPanel_default = /* @__PURE__ */ defineComponent({
	__name: "LegacyCreditsPanel",
	setup(__props) {
		const { buildDocsUrl, docsPaths } = useExternalLink();
		const dialogService = useDialogService();
		const authStore = useAuthStore();
		const authActions = useAuthActions();
		const commandStore = useCommandStore();
		const telemetry = useTelemetry();
		const { isActiveSubscription } = useBillingContext();
		const loading = computed(() => authStore.loading);
		const balanceLoading = computed(() => authStore.isFetchingBalance);
		const usageLogsTableRef = ref(null);
		const formattedLastUpdateTime = computed(() => authStore.lastBalanceUpdateTime ? authStore.lastBalanceUpdateTime.toLocaleString() : "");
		watch(() => authStore.lastBalanceUpdateTime, (newTime, oldTime) => {
			if (newTime && newTime !== oldTime && usageLogsTableRef.value) usageLogsTableRef.value.refresh();
		});
		const handlePurchaseCreditsClick = () => {
			useTelemetry()?.trackAddApiCreditButtonClicked();
			dialogService.showTopUpCreditsDialog();
		};
		const handleCreditsHistoryClick = async () => {
			await authActions.accessBillingPortal();
		};
		const handleMessageSupport = async () => {
			telemetry?.trackHelpResourceClicked({
				resource_type: "help_feedback",
				is_external: true,
				source: "credits_panel"
			});
			await commandStore.execute("Comfy.ContactSupport");
		};
		const handleFaqClick = () => {
			window.open(buildDocsUrl("/tutorials/api-nodes/faq", { includeLocale: true }), "_blank");
		};
		const handleOpenPartnerNodesInfo = () => {
			window.open(buildDocsUrl(docsPaths.partnerNodesPricing, { includeLocale: true }), "_blank");
		};
		const creditHistory = ref([]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("credits.credits")), 1),
				createVNode(unref(script$7)),
				createBaseVNode("div", _hoisted_4, [
					createBaseVNode("h3", _hoisted_5, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
					createBaseVNode("div", _hoisted_6, [createVNode(UserCredit_default, { "text-class": "text-3xl font-bold" }), loading.value ? (openBlock(), createBlock(unref(script), {
						key: 0,
						width: "2rem",
						height: "2rem"
					})) : unref(isActiveSubscription) ? (openBlock(), createBlock(Button_default, {
						key: 1,
						loading: loading.value,
						onClick: handlePurchaseCreditsClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("credits.purchaseCredits")), 1)]),
						_: 1
					}, 8, ["loading"])) : createCommentVNode("", true)]),
					createBaseVNode("div", _hoisted_7, [balanceLoading.value ? (openBlock(), createBlock(unref(script), {
						key: 0,
						width: "12rem",
						height: "1rem",
						class: "text-xs"
					})) : formattedLastUpdateTime.value ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.$t("credits.lastUpdated")) + ": " + toDisplayString(formattedLastUpdateTime.value), 1)) : createCommentVNode("", true), createVNode(Button_default, {
						variant: "muted-textonly",
						size: "icon-sm",
						"aria-label": _ctx.$t("g.refresh"),
						onClick: _cache[0] || (_cache[0] = () => unref(authActions).fetchBalance())
					}, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-refresh" }, null, -1)])),
						_: 1
					}, 8, ["aria-label"])])
				]),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("h3", null, toDisplayString(_ctx.$t("credits.activity")), 1), createVNode(Button_default, {
					variant: "muted-textonly",
					loading: loading.value,
					onClick: handleCreditsHistoryClick
				}, {
					default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-arrow-up-right" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("credits.invoiceHistory")), 1)]),
					_: 1
				}, 8, ["loading"])]),
				creditHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(unref(script$4), {
					value: creditHistory.value,
					"show-headers": false
				}, {
					default: withCtx(() => [createVNode(unref(script$5), {
						field: "title",
						header: _ctx.$t("g.name")
					}, {
						body: withCtx(({ data }) => [createBaseVNode("div", _hoisted_11, toDisplayString(data.title), 1), createBaseVNode("div", _hoisted_12, toDisplayString(data.timestamp), 1)]),
						_: 1
					}, 8, ["header"]), createVNode(unref(script$5), {
						field: "amount",
						header: _ctx.$t("g.amount")
					}, {
						body: withCtx(({ data }) => [createBaseVNode("div", { class: normalizeClass(["text-center text-base font-medium", data.isPositive ? "text-sky-500" : "text-red-400"]) }, toDisplayString(data.isPositive ? "+" : "-") + "$" + toDisplayString(unref(formatMetronomeCurrency)(data.amount, "usd")), 3)]),
						_: 1
					}, 8, ["header"])]),
					_: 1
				}, 8, ["value"])])) : createCommentVNode("", true),
				createVNode(unref(script$7)),
				createVNode(UsageLogsTable_default, {
					ref_key: "usageLogsTableRef",
					ref: usageLogsTableRef
				}, null, 512),
				createBaseVNode("div", _hoisted_13, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						onClick: handleFaqClick
					}, {
						default: withCtx(() => [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "pi pi-question-circle" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("credits.faqs")), 1)]),
						_: 1
					}),
					createVNode(Button_default, {
						variant: "muted-textonly",
						onClick: handleOpenPartnerNodesInfo
					}, {
						default: withCtx(() => [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-question-circle" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("subscription.partnerNodesCredits")), 1)]),
						_: 1
					}),
					createVNode(Button_default, {
						variant: "muted-textonly",
						onClick: handleMessageSupport
					}, {
						default: withCtx(() => [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "pi pi-comments" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("credits.messageSupport")), 1)]),
						_: 1
					})
				])
			])]);
		};
	}
});
//#endregion
export { LegacyCreditsPanel_default as default };

//# sourceMappingURL=LegacyCreditsPanel-C5KACE2j.js.map