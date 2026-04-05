import "./rolldown-runtime-DBfy44LZ.js";
import { $ as script$6, P as script$4, _ as script$3, g as script$2, h as script, j as script$1, rt as script$5 } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref, nt as renderList, o as useRouter } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useFeatureFlags } from "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { r as submitSurvey, t as getSurveyCompletedStatus } from "./auth-DsUzMF2I.js";
//#region src/platform/cloud/onboarding/CloudSurveyView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mb-8 block text-lg font-medium" };
var _hoisted_2 = { class: "flex flex-col gap-6" };
var _hoisted_3 = ["for"];
var _hoisted_4 = { class: "flex justify-between pt-4" };
var _hoisted_5 = { class: "mb-8 block text-lg font-medium" };
var _hoisted_6 = { class: "flex flex-col gap-6" };
var _hoisted_7 = ["for"];
var _hoisted_8 = {
	key: 0,
	class: "mt-4 ml-8"
};
var _hoisted_9 = { class: "flex gap-6 pt-4" };
var _hoisted_10 = { class: "mb-8 block text-lg font-medium" };
var _hoisted_11 = { class: "flex flex-col gap-6" };
var _hoisted_12 = ["for"];
var _hoisted_13 = {
	key: 0,
	class: "mt-4 ml-8"
};
var _hoisted_14 = { class: "flex gap-6 pt-4" };
var _hoisted_15 = { class: "mb-8 block text-lg font-medium" };
var _hoisted_16 = { class: "flex flex-col gap-6" };
var _hoisted_17 = ["for"];
var _hoisted_18 = { class: "flex gap-6 pt-4" };
var totalSteps = 4;
//#endregion
//#region src/platform/cloud/onboarding/CloudSurveyView.vue
var CloudSurveyView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CloudSurveyView",
	setup(__props) {
		const { t } = useI18n();
		const router = useRouter();
		const { flags } = useFeatureFlags();
		const onboardingSurveyEnabled = computed(() => flags.onboardingSurveyEnabled);
		onMounted(async () => {
			if (!onboardingSurveyEnabled.value) {
				await router.replace({ name: "cloud-user-check" });
				return;
			}
			try {
				if (await getSurveyCompletedStatus()) await router.replace({ name: "cloud-user-check" });
				else if (isCloud) useTelemetry()?.trackSurvey("opened");
			} catch (error) {
				console.error("Failed to check survey status:", error);
			}
		});
		const activeStep = ref(1);
		const progressPercent = computed(() => Math.max(20, Math.min(100, (activeStep.value - 1) / (totalSteps - 1) * 100)));
		const isSubmitting = ref(false);
		const surveyData = ref({
			familiarity: "",
			useCase: "",
			useCaseOther: "",
			industry: "",
			industryOther: "",
			making: []
		});
		const familiarityOptions = [
			{
				label: "New to ComfyUI (never used it before)",
				value: "new"
			},
			{
				label: "Just getting started (following tutorials)",
				value: "starting"
			},
			{
				label: "Comfortable with basics",
				value: "basics"
			},
			{
				label: "Advanced user (custom workflows)",
				value: "advanced"
			},
			{
				label: "Expert (help others)",
				value: "expert"
			}
		];
		const purposeOptions = [
			{
				label: "Personal projects/hobby",
				value: "personal"
			},
			{
				label: "Community contributions (nodes, workflows, etc.)",
				value: "community"
			},
			{
				label: "Client work (freelance)",
				value: "client"
			},
			{
				label: "My own workplace (in-house)",
				value: "inhouse"
			},
			{
				label: "Academic research",
				value: "research"
			},
			{
				label: "Other",
				value: "other"
			}
		];
		const industryOptions = [
			{
				label: "Film, TV, & animation",
				value: "film_tv_animation"
			},
			{
				label: "Gaming",
				value: "gaming"
			},
			{
				label: "Marketing & advertising",
				value: "marketing"
			},
			{
				label: "Architecture",
				value: "architecture"
			},
			{
				label: "Product & graphic design",
				value: "product_design"
			},
			{
				label: "Fine art & illustration",
				value: "fine_art"
			},
			{
				label: "Software & technology",
				value: "software"
			},
			{
				label: "Education",
				value: "education"
			},
			{
				label: "Other",
				value: "other"
			}
		];
		const makingOptions = [
			{
				label: "Images",
				value: "images"
			},
			{
				label: "Video & animation",
				value: "video"
			},
			{
				label: "3D assets",
				value: "3d"
			},
			{
				label: "Audio/music",
				value: "audio"
			},
			{
				label: "Custom nodes & workflows",
				value: "custom_nodes"
			}
		];
		const validStep1 = computed(() => !!surveyData.value.familiarity);
		const validStep2 = computed(() => {
			if (!surveyData.value.useCase) return false;
			if (surveyData.value.useCase === "other") return !!surveyData.value.useCaseOther?.trim();
			return true;
		});
		const validStep3 = computed(() => {
			if (!surveyData.value.industry) return false;
			if (surveyData.value.industry === "other") return !!surveyData.value.industryOther?.trim();
			return true;
		});
		const validStep4 = computed(() => surveyData.value.making.length > 0);
		const changeActiveStep = (step) => {
			activeStep.value = step;
		};
		const goTo = (step, activate) => {
			changeActiveStep(step);
			activate(String(step));
		};
		const onSubmitSurvey = async () => {
			try {
				if (!onboardingSurveyEnabled.value) {
					await router.replace({ name: "cloud-user-check" });
					return;
				}
				isSubmitting.value = true;
				const payload = {
					familiarity: surveyData.value.familiarity,
					useCase: surveyData.value.useCase === "other" ? surveyData.value.useCaseOther?.trim() || "other" : surveyData.value.useCase,
					industry: surveyData.value.industry === "other" ? surveyData.value.industryOther?.trim() || "other" : surveyData.value.industry,
					making: surveyData.value.making
				};
				await submitSurvey(payload);
				if (isCloud) useTelemetry()?.trackSurvey("submitted", {
					industry: payload.industry,
					useCase: payload.useCase,
					familiarity: payload.familiarity,
					making: payload.making
				});
				await router.push({ name: "cloud-user-check" });
			} finally {
				isSubmitting.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(script), {
				value: "1",
				class: "flex h-[638px] max-h-[80vh] w-[320px] max-w-[90vw] flex-col"
			}, {
				default: withCtx(() => [createVNode(unref(script$1), {
					value: progressPercent.value,
					"show-value": false,
					class: "mb-8 h-2"
				}, null, 8, ["value"]), createVNode(unref(script$2), { class: "flex flex-1 flex-col p-0" }, {
					default: withCtx(() => [
						createVNode(unref(script$3), {
							value: "1",
							class: "flex min-h-full flex-1 flex-col justify-between bg-transparent"
						}, {
							default: withCtx(({ activateCallback }) => [createBaseVNode("div", null, [createBaseVNode("label", _hoisted_1, toDisplayString(unref(t)("cloudSurvey_steps_familiarity")), 1), createBaseVNode("div", _hoisted_2, [(openBlock(), createElementBlock(Fragment, null, renderList(familiarityOptions, (opt) => {
								return createBaseVNode("div", {
									key: opt.value,
									class: "flex items-center gap-3"
								}, [createVNode(unref(script$4), {
									modelValue: surveyData.value.familiarity,
									"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => surveyData.value.familiarity = $event),
									"input-id": `fam-${opt.value}`,
									name: "familiarity",
									value: opt.value
								}, null, 8, [
									"modelValue",
									"input-id",
									"value"
								]), createBaseVNode("label", {
									for: `fam-${opt.value}`,
									class: "cursor-pointer text-sm"
								}, toDisplayString(opt.label), 9, _hoisted_3)]);
							}), 64))])]), createBaseVNode("div", _hoisted_4, [_cache[6] || (_cache[6] = createBaseVNode("span", null, null, -1)), createVNode(Button_default, {
								disabled: !validStep1.value,
								class: "h-10 w-full border-none text-white",
								onClick: ($event) => goTo(2, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.next")), 1)]),
								_: 2
							}, 1032, ["disabled", "onClick"])])]),
							_: 1
						}),
						createVNode(unref(script$3), {
							value: "2",
							class: "flex min-h-full flex-1 flex-col justify-between bg-transparent"
						}, {
							default: withCtx(({ activateCallback }) => [createBaseVNode("div", null, [
								createBaseVNode("label", _hoisted_5, toDisplayString(unref(t)("cloudSurvey_steps_purpose")), 1),
								createBaseVNode("div", _hoisted_6, [(openBlock(), createElementBlock(Fragment, null, renderList(purposeOptions, (opt) => {
									return createBaseVNode("div", {
										key: opt.value,
										class: "flex items-center gap-3"
									}, [createVNode(unref(script$4), {
										modelValue: surveyData.value.useCase,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => surveyData.value.useCase = $event),
										"input-id": `purpose-${opt.value}`,
										name: "purpose",
										value: opt.value
									}, null, 8, [
										"modelValue",
										"input-id",
										"value"
									]), createBaseVNode("label", {
										for: `purpose-${opt.value}`,
										class: "cursor-pointer text-sm"
									}, toDisplayString(opt.label), 9, _hoisted_7)]);
								}), 64))]),
								surveyData.value.useCase === "other" ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(script$5), {
									modelValue: surveyData.value.useCaseOther,
									"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => surveyData.value.useCaseOther = $event),
									class: "w-full",
									placeholder: _ctx.$t("cloudOnboarding.survey.options.industry.otherPlaceholder")
								}, null, 8, ["modelValue", "placeholder"])])) : createCommentVNode("", true)
							]), createBaseVNode("div", _hoisted_9, [createVNode(Button_default, {
								variant: "secondary",
								class: "flex-1 text-white",
								onClick: ($event) => goTo(1, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.back")), 1)]),
								_: 2
							}, 1032, ["onClick"]), createVNode(Button_default, {
								disabled: !validStep2.value,
								class: "h-10 flex-1 text-white",
								onClick: ($event) => goTo(3, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.next")), 1)]),
								_: 2
							}, 1032, ["disabled", "onClick"])])]),
							_: 1
						}),
						createVNode(unref(script$3), {
							value: "3",
							class: "flex min-h-full flex-1 flex-col justify-between bg-transparent"
						}, {
							default: withCtx(({ activateCallback }) => [createBaseVNode("div", null, [
								createBaseVNode("label", _hoisted_10, toDisplayString(unref(t)("cloudSurvey_steps_industry")), 1),
								createBaseVNode("div", _hoisted_11, [(openBlock(), createElementBlock(Fragment, null, renderList(industryOptions, (opt) => {
									return createBaseVNode("div", {
										key: opt.value,
										class: "flex items-center gap-3"
									}, [createVNode(unref(script$4), {
										modelValue: surveyData.value.industry,
										"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => surveyData.value.industry = $event),
										"input-id": `industry-${opt.value}`,
										name: "industry",
										value: opt.value
									}, null, 8, [
										"modelValue",
										"input-id",
										"value"
									]), createBaseVNode("label", {
										for: `industry-${opt.value}`,
										class: "cursor-pointer text-sm"
									}, toDisplayString(opt.label), 9, _hoisted_12)]);
								}), 64))]),
								surveyData.value.industry === "other" ? (openBlock(), createElementBlock("div", _hoisted_13, [createVNode(unref(script$5), {
									modelValue: surveyData.value.industryOther,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => surveyData.value.industryOther = $event),
									class: "w-full",
									placeholder: _ctx.$t("cloudOnboarding.survey.options.industry.otherPlaceholder")
								}, null, 8, ["modelValue", "placeholder"])])) : createCommentVNode("", true)
							]), createBaseVNode("div", _hoisted_14, [createVNode(Button_default, {
								variant: "secondary",
								class: "flex-1 text-white",
								onClick: ($event) => goTo(2, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.back")), 1)]),
								_: 2
							}, 1032, ["onClick"]), createVNode(Button_default, {
								disabled: !validStep3.value,
								class: "h-10 flex-1 border-none text-white",
								onClick: ($event) => goTo(4, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.next")), 1)]),
								_: 2
							}, 1032, ["disabled", "onClick"])])]),
							_: 1
						}),
						createVNode(unref(script$3), {
							value: "4",
							class: "flex min-h-full flex-1 flex-col justify-between bg-transparent"
						}, {
							default: withCtx(({ activateCallback }) => [createBaseVNode("div", null, [createBaseVNode("label", _hoisted_15, toDisplayString(unref(t)("cloudSurvey_steps_making")), 1), createBaseVNode("div", _hoisted_16, [(openBlock(), createElementBlock(Fragment, null, renderList(makingOptions, (opt) => {
								return createBaseVNode("div", {
									key: opt.value,
									class: "flex items-center gap-3"
								}, [createVNode(unref(script$6), {
									modelValue: surveyData.value.making,
									"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => surveyData.value.making = $event),
									"input-id": `making-${opt.value}`,
									value: opt.value
								}, null, 8, [
									"modelValue",
									"input-id",
									"value"
								]), createBaseVNode("label", {
									for: `making-${opt.value}`,
									class: "cursor-pointer text-sm"
								}, toDisplayString(opt.label), 9, _hoisted_17)]);
							}), 64))])]), createBaseVNode("div", _hoisted_18, [createVNode(Button_default, {
								variant: "secondary",
								class: "flex-1 text-white",
								onClick: ($event) => goTo(3, activateCallback)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.back")), 1)]),
								_: 2
							}, 1032, ["onClick"]), createVNode(Button_default, {
								disabled: !validStep4.value || isSubmitting.value,
								loading: isSubmitting.value,
								class: "h-10 flex-1 border-none text-white",
								onClick: onSubmitSurvey
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.submit")), 1)]),
								_: 1
							}, 8, ["disabled", "loading"])])]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-a5b5d1d9"]]);
//#endregion
export { CloudSurveyView_default as default };

//# sourceMappingURL=CloudSurveyView-CzfDHssd.js.map