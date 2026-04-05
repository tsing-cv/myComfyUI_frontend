import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, D as computed, F as createTextVNode, I as createVNode, It as toValue, O as createBaseVNode, Q as onUnmounted, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, d as Transition, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, pt as watch, v as vShow, vt as withDirectives, w as Teleport } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./types-BqIM6TDt.js";
import { B as useStorage, ot as whenever } from "./vendor-vueuse--4MZqvDu.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { r as useFeatureUsageTracker, t as getEnabledSurveys } from "./surveyRegistry-CxaF1waJ.js";
//#region src/platform/surveys/useSurveyEligibility.ts
var STORAGE_KEY = "Comfy.SurveyState";
var GLOBAL_COOLDOWN_MS = 5760 * 60 * 1e3;
var DEFAULT_THRESHOLD = 3;
var DEFAULT_DELAY_MS = 5e3;
function useSurveyEligibility(config) {
	const state = useStorage(STORAGE_KEY, {
		optedOut: false,
		seenSurveys: {}
	});
	const resolvedConfig = computed(() => toValue(config));
	const { useCount } = useFeatureUsageTracker(resolvedConfig.value.featureId);
	const threshold = computed(() => resolvedConfig.value.triggerThreshold ?? DEFAULT_THRESHOLD);
	const delayMs = computed(() => resolvedConfig.value.delayMs ?? DEFAULT_DELAY_MS);
	const isSurveyEnabled = computed(() => resolvedConfig.value.enabled ?? true);
	const isNightlyLocalhost = computed(() => false);
	const hasReachedThreshold = computed(() => useCount.value >= threshold.value);
	const hasSeenSurvey = computed(() => !!state.value.seenSurveys[resolvedConfig.value.featureId]);
	const isInGlobalCooldown = computed(() => {
		const timestamps = Object.values(state.value.seenSurveys);
		if (timestamps.length === 0) return false;
		const lastShown = Math.max(...timestamps);
		return Date.now() - lastShown < GLOBAL_COOLDOWN_MS;
	});
	const hasOptedOut = computed(() => state.value.optedOut);
	const isEligible = computed(() => {
		if (!isSurveyEnabled.value) return false;
		if (!isNightlyLocalhost.value) return false;
		if (!hasReachedThreshold.value) return false;
		if (hasSeenSurvey.value) return false;
		if (isInGlobalCooldown.value) return false;
		if (hasOptedOut.value) return false;
		return true;
	});
	function markSurveyShown() {
		state.value.seenSurveys[resolvedConfig.value.featureId] = Date.now();
	}
	function optOut() {
		state.value.optedOut = true;
	}
	function resetState() {
		state.value = {
			optedOut: false,
			seenSurveys: {}
		};
	}
	return {
		isEligible,
		delayMs,
		markSurveyShown,
		optOut,
		resetState
	};
}
//#endregion
//#region src/platform/surveys/NightlySurveyPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-testid": "nightly-survey-popover",
	class: "fixed right-4 bottom-4 z-10000 w-80 rounded-lg border border-border-subtle bg-base-background p-4 shadow-lg"
};
var _hoisted_2 = { class: "mb-2 flex items-center justify-end" };
var _hoisted_3 = {
	key: 0,
	class: "text-danger text-sm"
};
var _hoisted_4 = ["data-tf-widget"];
var _hoisted_5 = { class: "mt-3 flex items-center justify-center gap-2" };
var TYPEFORM_SRC = "https://embed.typeform.com/next/embed.js";
//#endregion
//#region src/platform/surveys/NightlySurveyPopover.vue
var NightlySurveyPopover_default = /* @__PURE__ */ defineComponent({
	__name: "NightlySurveyPopover",
	props: { config: {} },
	emits: [
		"shown",
		"dismissed",
		"optedOut"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		const { isEligible, delayMs, markSurveyShown, optOut } = useSurveyEligibility(() => __props.config);
		const isVisible = ref(false);
		const typeformError = ref(false);
		const typeformRef = useTemplateRef("typeformRef");
		let showTimeout = null;
		const isValidTypeformId = computed(() => /^[A-Za-z0-9]+$/.test(__props.config.typeformId));
		const typeformId = computed(() => isValidTypeformId.value ? __props.config.typeformId : "");
		watch(isEligible, (eligible) => {
			if (!eligible) {
				if (showTimeout) {
					clearTimeout(showTimeout);
					showTimeout = null;
				}
				return;
			}
			if (isVisible.value || showTimeout) return;
			showTimeout = setTimeout(() => {
				showTimeout = null;
				if (!isValidTypeformId.value) return;
				isVisible.value = true;
				markSurveyShown();
				emit("shown");
			}, delayMs.value);
		}, { immediate: true });
		onUnmounted(() => {
			if (showTimeout) clearTimeout(showTimeout);
		});
		whenever(typeformRef, () => {
			if (document.querySelector(`script[src="${TYPEFORM_SRC}"]`)) return;
			const scriptEl = document.createElement("script");
			scriptEl.src = TYPEFORM_SRC;
			scriptEl.async = true;
			scriptEl.onerror = () => {
				typeformError.value = true;
			};
			document.head.appendChild(scriptEl);
		});
		function handleDismiss() {
			isVisible.value = false;
			emit("dismissed");
		}
		function handleOptOut() {
			optOut();
			isVisible.value = false;
			emit("optedOut");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, {
				"enter-active-class": "transition duration-300 ease-out",
				"enter-from-class": "translate-x-full opacity-0",
				"enter-to-class": "translate-x-0 opacity-100",
				"leave-active-class": "transition duration-300 ease-in",
				"leave-from-class": "translate-x-0 opacity-100",
				"leave-to-class": "translate-x-full opacity-0"
			}, {
				default: withCtx(() => [isVisible.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
					createBaseVNode("div", _hoisted_2, [createVNode(Button_default, {
						variant: "muted-textonly",
						size: "icon-sm",
						"aria-label": unref(t)("g.close"),
						onClick: handleDismiss
					}, {
						default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "icon-[lucide--x] size-4" }, null, -1)])),
						_: 1
					}, 8, ["aria-label"])]),
					typeformError.value ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(t)("nightlySurvey.loadError")), 1)) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", {
						ref_key: "typeformRef",
						ref: typeformRef,
						"data-tf-auto-resize": "",
						"data-tf-widget": typeformId.value,
						class: "min-h-[300px]"
					}, null, 8, _hoisted_4), [[vShow, isVisible.value && !typeformError.value && isValidTypeformId.value]]),
					createBaseVNode("div", _hoisted_5, [createVNode(Button_default, {
						variant: "textonly",
						size: "sm",
						onClick: handleDismiss
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("nightlySurvey.notNow")), 1)]),
						_: 1
					}), createVNode(Button_default, {
						variant: "muted-textonly",
						size: "sm",
						onClick: handleOptOut
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("nightlySurvey.dontAskAgain")), 1)]),
						_: 1
					})])
				])) : createCommentVNode("", true)]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/platform/surveys/NightlySurveyController.vue
var NightlySurveyController_default = /* @__PURE__ */ defineComponent({
	__name: "NightlySurveyController",
	setup(__props) {
		const enabledSurveys = computed(() => getEnabledSurveys());
		return (_ctx, _cache) => {
			return openBlock(true), createElementBlock(Fragment, null, renderList(enabledSurveys.value, (config) => {
				return openBlock(), createBlock(NightlySurveyPopover_default, {
					key: config.featureId,
					config
				}, null, 8, ["config"]);
			}), 128);
		};
	}
});
//#endregion
export { NightlySurveyController_default as default };

//# sourceMappingURL=NightlySurveyController-Dm5HbqxD.js.map