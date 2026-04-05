import "./rolldown-runtime-DBfy44LZ.js";
import { S as script, X as script$1, dt as useToast } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, it as resolveComponent, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, v as vShow, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { $i as getTierCredits, Qi as TIER_TO_KEY, Ri as workspaceApi, Ui as getComfyPlatformBaseUrl, Zi as TIER_PRICING, ea as getTierFeatures, ki as useBillingContext, n as useBillingOperationStore, ta as getTierPrice } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
//#region src/platform/workspace/components/PricingTableWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "flex flex-col gap-6" };
var _hoisted_2$3 = { class: "flex justify-center" };
var _hoisted_3$3 = { class: "flex items-center gap-2" };
var _hoisted_4$3 = {
	key: 0,
	class: "flex items-center rounded-full bg-primary-background px-1 py-0.5 text-2xs font-bold text-white"
};
var _hoisted_5$3 = { class: "flex flex-col items-stretch gap-4 xl:flex-row" };
var _hoisted_6$3 = { class: "flex flex-col gap-4 p-6 pb-0" };
var _hoisted_7$2 = { class: "flex flex-row items-center justify-between gap-2" };
var _hoisted_8$2 = { class: "font-inter text-base/normal font-bold text-base-foreground" };
var _hoisted_9$2 = {
	key: 0,
	class: "flex h-5 items-center rounded-full bg-base-foreground px-1.5 text-2xs font-bold tracking-tight text-base-background uppercase"
};
var _hoisted_10$2 = { class: "flex flex-col" };
var _hoisted_11$2 = { class: "flex flex-col gap-2" };
var _hoisted_12$2 = { class: "flex flex-row items-baseline gap-2" };
var _hoisted_13$2 = { class: "font-inter text-[28px] leading-normal font-semibold text-base-foreground" };
var _hoisted_14$2 = { class: "font-inter text-sm/normal text-base-foreground" };
var _hoisted_15$2 = { class: "flex items-center gap-2" };
var _hoisted_16$2 = { class: "text-sm text-muted-foreground" };
var _hoisted_17$2 = { class: "flex items-center gap-2" };
var _hoisted_18$2 = { class: "text-sm text-emerald-400" };
var _hoisted_19$2 = { class: "text-sm font-bold text-base-foreground" };
var _hoisted_20$2 = { class: "flex flex-1 flex-col gap-3 pb-0" };
var _hoisted_21$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_22$2 = { class: "text-foreground text-sm font-normal" };
var _hoisted_23$2 = { class: "flex flex-row items-center gap-1" };
var _hoisted_24$2 = { class: "font-inter text-sm/normal font-bold text-base-foreground" };
var _hoisted_25$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_26$2 = { class: "text-foreground text-sm font-normal" };
var _hoisted_27$2 = { class: "font-inter text-sm/normal font-bold text-base-foreground" };
var _hoisted_28$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_29$2 = { class: "text-foreground text-sm font-normal" };
var _hoisted_30$2 = { class: "font-inter text-sm/normal font-bold text-base-foreground" };
var _hoisted_31$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_32$2 = { class: "text-foreground text-sm font-normal" };
var _hoisted_33$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_34$2 = { class: "text-foreground text-sm font-normal" };
var _hoisted_35$2 = { class: "flex flex-row items-center justify-between" };
var _hoisted_36$1 = { class: "text-foreground text-sm font-normal" };
var _hoisted_37 = {
	key: 0,
	class: "pi pi-check text-success-foreground text-xs"
};
var _hoisted_38 = {
	key: 1,
	class: "pi pi-times text-foreground text-xs"
};
var _hoisted_39 = { class: "flex flex-col gap-2" };
var _hoisted_40 = { class: "flex flex-row items-start justify-between" };
var _hoisted_41 = { class: "flex flex-col gap-2" };
var _hoisted_42 = { class: "text-foreground text-sm/relaxed font-normal" };
var _hoisted_43 = { class: "group flex flex-row items-center gap-2 pt-2" };
var _hoisted_44 = { class: "font-inter text-sm/normal font-bold text-base-foreground" };
var _hoisted_45 = { class: "flex flex-col p-6" };
var _hoisted_46 = { class: "flex flex-col gap-2" };
var _hoisted_47 = { class: "text-sm/normal text-base-foreground" };
var _hoisted_48 = {
	href: "https://cloud.comfy.org/?template=video_wan2_2_14B_i2v",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "flex gap-1 text-sm text-azure-600 no-underline hover:text-azure-400"
};
var _hoisted_49 = { class: "underline" };
var _hoisted_50 = { class: "flex flex-col items-center gap-2" };
var _hoisted_51 = { class: "m-0 text-sm text-text-secondary" };
var _hoisted_52 = { class: "flex items-center gap-1.5" };
var _hoisted_53 = { class: "text-sm text-text-secondary" };
//#endregion
//#region src/platform/workspace/components/PricingTableWorkspace.vue
var PricingTableWorkspace_default = /* @__PURE__ */ defineComponent({
	__name: "PricingTableWorkspace",
	props: {
		isLoading: { type: Boolean },
		loadingTier: { default: null }
	},
	emits: ["subscribe", "resubscribe"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t, n } = useI18n();
		const billingCycleOptions = [{
			label: t("subscription.yearly"),
			value: "yearly"
		}, {
			label: t("subscription.monthly"),
			value: "monthly"
		}];
		const tiers = [
			{
				id: "STANDARD",
				key: "standard",
				name: t("subscription.tiers.standard.name"),
				pricing: TIER_PRICING.standard,
				maxDuration: t("subscription.maxDuration.standard"),
				customLoRAs: false,
				maxMembers: 1,
				isPopular: false
			},
			{
				id: "CREATOR",
				key: "creator",
				name: t("subscription.tiers.creator.name"),
				pricing: TIER_PRICING.creator,
				maxDuration: t("subscription.maxDuration.creator"),
				customLoRAs: true,
				maxMembers: 5,
				isPopular: true
			},
			{
				id: "PRO",
				key: "pro",
				name: t("subscription.tiers.pro.name"),
				pricing: TIER_PRICING.pro,
				maxDuration: t("subscription.maxDuration.pro"),
				customLoRAs: true,
				maxMembers: 20,
				isPopular: false
			}
		];
		const { plans: apiPlans, currentPlanSlug, fetchPlans, subscription, getMaxSeats } = useBillingContext();
		const isCancelled = computed(() => subscription.value?.isCancelled ?? false);
		const popover = ref();
		const currentBillingCycle = ref("yearly");
		onMounted(() => {
			fetchPlans();
		});
		function getApiPlanForTier(tierKey, duration) {
			const apiDuration = duration === "yearly" ? "ANNUAL" : "MONTHLY";
			const apiTier = tierKey.toUpperCase();
			return apiPlans.value.find((p) => p.tier === apiTier && p.duration === apiDuration);
		}
		function getPriceFromApi(tier) {
			const plan = getApiPlanForTier(tier.key, currentBillingCycle.value);
			if (!plan) return null;
			const price = plan.price_cents / 100;
			return currentBillingCycle.value === "yearly" ? price / 12 : price;
		}
		const currentTierKey = computed(() => subscription.value?.tier ? TIER_TO_KEY[subscription.value.tier] : null);
		const isYearlySubscription = computed(() => subscription.value?.duration === "ANNUAL");
		const isCurrentPlan = (tierKey) => {
			if (currentPlanSlug.value) return getApiPlanForTier(tierKey, currentBillingCycle.value)?.slug === currentPlanSlug.value;
			if (!currentTierKey.value) return false;
			const selectedIsYearly = currentBillingCycle.value === "yearly";
			return currentTierKey.value === tierKey && isYearlySubscription.value === selectedIsYearly;
		};
		const togglePopover = (event) => {
			popover.value.toggle(event);
		};
		const getButtonLabel = (tier) => {
			const planName = currentBillingCycle.value === "yearly" ? t("subscription.tierNameYearly", { name: tier.name }) : tier.name;
			if (isCurrentPlan(tier.key)) return isCancelled.value ? t("subscription.resubscribeTo", { plan: planName }) : t("subscription.currentPlan");
			return currentTierKey.value ? t("subscription.changeTo", { plan: planName }) : t("subscription.subscribeTo", { plan: planName });
		};
		const getButtonSeverity = (tier) => {
			if (isCurrentPlan(tier.key)) return isCancelled.value ? "primary" : "secondary";
			if (tier.key === "creator") return "primary";
			return "secondary";
		};
		const isButtonDisabled = (tier) => {
			if (__props.isLoading) return true;
			if (isCurrentPlan(tier.key)) return !isCancelled.value;
			return false;
		};
		const getButtonTextClass = (tier) => tier.key === "creator" ? "font-inter text-sm font-bold leading-normal text-base-background" : "font-inter text-sm font-bold leading-normal text-primary-foreground";
		const getPrice = (tier) => getPriceFromApi(tier) ?? tier.pricing[currentBillingCycle.value];
		const getMonthlyPrice = (tier) => {
			const plan = getApiPlanForTier(tier.key, "monthly");
			return plan ? plan.price_cents / 100 : tier.pricing.monthly;
		};
		const getAnnualTotal = (tier) => {
			const plan = getApiPlanForTier(tier.key, "yearly");
			return plan ? plan.price_cents / 100 : tier.pricing.yearly * 12;
		};
		const maxMembersByTier = computed(() => Object.fromEntries(tiers.map((t) => [t.key, getMaxSeats(t.key)])));
		const getMonthlyCreditsPerMember = (tier) => tier.pricing.credits;
		function handleSubscribe(tierKey) {
			if (__props.isLoading) return;
			if (isCurrentPlan(tierKey)) {
				if (isCancelled.value) emit("resubscribe");
				return;
			}
			emit("subscribe", {
				tierKey,
				billingCycle: currentBillingCycle.value
			});
		}
		function handleContactUs() {
			window.open("https://www.comfy.org/discord", "_blank");
		}
		function handleViewEnterprise() {
			window.open("https://www.comfy.org/enterprise", "_blank");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [
				createBaseVNode("div", _hoisted_2$3, [createVNode(unref(script), {
					modelValue: currentBillingCycle.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentBillingCycle.value = $event),
					options: billingCycleOptions,
					"option-label": "label",
					"option-value": "value",
					"allow-empty": false,
					unstyled: "",
					pt: {
						root: { class: "flex gap-1 bg-secondary-background rounded-lg p-1.5" },
						pcToggleButton: {
							root: ({ context }) => ({ class: ["w-36  h-8 rounded-md transition-colors cursor-pointer border-none outline-none ring-0 text-sm font-medium flex items-center justify-center", context.active ? "bg-base-foreground text-base-background" : "bg-transparent text-muted-foreground hover:bg-secondary-background-hover"] }),
							label: { class: "flex items-center gap-2 " }
						}
					}
				}, {
					option: withCtx(({ option }) => [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("span", null, toDisplayString(option.label), 1), option.value === "yearly" ? (openBlock(), createElementBlock("div", _hoisted_4$3, " -20% ")) : createCommentVNode("", true)])]),
					_: 1
				}, 8, ["modelValue", "pt"])]),
				createBaseVNode("div", _hoisted_5$3, [(openBlock(), createElementBlock(Fragment, null, renderList(tiers, (tier) => {
					return createBaseVNode("div", {
						key: tier.id,
						class: normalizeClass(unref(cn)("flex flex-1 flex-col rounded-2xl border border-border-default bg-base-background shadow-[0_0_12px_rgba(0,0,0,0.1)]", tier.isPopular ? "border-emerald-500" : ""))
					}, [createBaseVNode("div", _hoisted_6$3, [
						createBaseVNode("div", _hoisted_7$2, [createBaseVNode("span", _hoisted_8$2, toDisplayString(tier.name), 1), tier.isPopular ? (openBlock(), createElementBlock("div", _hoisted_9$2, toDisplayString(unref(t)("subscription.mostPopular")), 1)) : createCommentVNode("", true)]),
						createBaseVNode("div", _hoisted_10$2, [createBaseVNode("div", _hoisted_11$2, [createBaseVNode("div", _hoisted_12$2, [createBaseVNode("span", _hoisted_13$2, [withDirectives(createBaseVNode("span", { class: "text-2xl text-muted-foreground line-through" }, " $" + toDisplayString(getMonthlyPrice(tier)), 513), [[vShow, currentBillingCycle.value === "yearly"]]), createTextVNode(" $" + toDisplayString(getPrice(tier)), 1)]), createBaseVNode("span", _hoisted_14$2, toDisplayString(unref(t)("subscription.usdPerMonthPerMember")), 1)]), createBaseVNode("div", _hoisted_15$2, [createBaseVNode("span", _hoisted_16$2, toDisplayString(currentBillingCycle.value === "yearly" ? unref(t)("subscription.billedYearly", { total: `$${getAnnualTotal(tier)}` }) : unref(t)("subscription.billedMonthly")), 1)])])]),
						createBaseVNode("div", { class: normalizeClass(unref(cn)("flex h-10 items-center justify-between rounded-lg px-3", maxMembersByTier.value[tier.key] > 1 ? "bg-emerald-500/20" : "")) }, [maxMembersByTier.value[tier.key] > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_17$2, [_cache[1] || (_cache[1] = createBaseVNode("i", {
							class: "pi pi-users text-xs text-emerald-400",
							"aria-hidden": "true"
						}, null, -1)), createBaseVNode("span", _hoisted_18$2, toDisplayString(unref(t)("subscription.inviteUpTo")), 1)]), createBaseVNode("span", _hoisted_19$2, toDisplayString(unref(t)("subscription.memberCount", { count: maxMembersByTier.value[tier.key] })), 1)], 64)) : createCommentVNode("", true)], 2),
						createBaseVNode("div", _hoisted_20$2, [
							createBaseVNode("div", _hoisted_21$2, [createBaseVNode("span", _hoisted_22$2, toDisplayString(unref(t)("subscription.monthlyCreditsPerMemberLabel")), 1), createBaseVNode("div", _hoisted_23$2, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--component] text-sm text-amber-400" }, null, -1)), createBaseVNode("span", _hoisted_24$2, toDisplayString(unref(n)(getMonthlyCreditsPerMember(tier))), 1)])]),
							createBaseVNode("div", _hoisted_25$2, [createBaseVNode("span", _hoisted_26$2, toDisplayString(unref(t)("subscription.maxMembersLabel")), 1), createBaseVNode("span", _hoisted_27$2, toDisplayString(maxMembersByTier.value[tier.key]), 1)]),
							createBaseVNode("div", _hoisted_28$2, [createBaseVNode("span", _hoisted_29$2, toDisplayString(unref(t)("subscription.maxDurationLabel")), 1), createBaseVNode("span", _hoisted_30$2, toDisplayString(tier.maxDuration), 1)]),
							createBaseVNode("div", _hoisted_31$2, [createBaseVNode("span", _hoisted_32$2, toDisplayString(unref(t)("subscription.gpuLabel")), 1), _cache[3] || (_cache[3] = createBaseVNode("i", { class: "pi pi-check text-success-foreground text-xs" }, null, -1))]),
							createBaseVNode("div", _hoisted_33$2, [createBaseVNode("span", _hoisted_34$2, toDisplayString(unref(t)("subscription.addCreditsLabel")), 1), _cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-check text-success-foreground text-xs" }, null, -1))]),
							createBaseVNode("div", _hoisted_35$2, [createBaseVNode("span", _hoisted_36$1, toDisplayString(unref(t)("subscription.customLoRAsLabel")), 1), tier.customLoRAs ? (openBlock(), createElementBlock("i", _hoisted_37)) : (openBlock(), createElementBlock("i", _hoisted_38))]),
							createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("span", _hoisted_42, toDisplayString(unref(t)("subscription.videoEstimateLabel")), 1), createBaseVNode("div", _hoisted_43, [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "pi pi-question-circle text-xs text-muted-foreground group-hover:text-base-foreground" }, null, -1)), createBaseVNode("span", {
								class: "cursor-pointer text-sm font-normal text-muted-foreground group-hover:text-base-foreground",
								onClick: togglePopover
							}, toDisplayString(unref(t)("subscription.videoEstimateHelp")), 1)])]), createBaseVNode("span", _hoisted_44, " ~" + toDisplayString(unref(n)(tier.pricing.videoEstimate)), 1)])])
						])
					]), createBaseVNode("div", _hoisted_45, [createVNode(Button_default, {
						variant: getButtonSeverity(tier),
						disabled: isButtonDisabled(tier),
						loading: _ctx.loadingTier === tier.key,
						class: normalizeClass(unref(cn)("h-10 w-full", getButtonTextClass(tier), tier.key === "creator" ? "border-transparent bg-success-background hover:bg-success-background/80" : "border-transparent bg-secondary-background hover:bg-secondary-background-hover focus:bg-secondary-background-selected")),
						onClick: () => handleSubscribe(tier.key)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(getButtonLabel(tier)), 1)]),
						_: 2
					}, 1032, [
						"variant",
						"disabled",
						"loading",
						"class",
						"onClick"
					])])], 2);
				}), 64))]),
				createVNode(unref(script$1), {
					ref_key: "popover",
					ref: popover,
					"append-to": "body",
					"auto-z-index": true,
					"base-z-index": 1e3,
					dismissable: true,
					"close-on-escape": true,
					unstyled: "",
					pt: { root: { class: "rounded-lg border border-interface-stroke bg-interface-panel-surface shadow-lg p-4 max-w-xs" } }
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_46, [createBaseVNode("p", _hoisted_47, toDisplayString(unref(t)("subscription.videoEstimateExplanation")), 1), createBaseVNode("a", _hoisted_48, [createBaseVNode("span", _hoisted_49, toDisplayString(unref(t)("subscription.videoEstimateTryTemplate")), 1), _cache[6] || (_cache[6] = createBaseVNode("span", {
						class: "no-underline",
						innerHTML: "→"
					}, null, -1))])])]),
					_: 1
				}, 512),
				createBaseVNode("div", _hoisted_50, [createBaseVNode("p", _hoisted_51, toDisplayString(_ctx.$t("subscription.haveQuestions")), 1), createBaseVNode("div", _hoisted_52, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						class: "h-6 p-1 text-sm text-text-secondary hover:text-base-foreground",
						onClick: handleContactUs
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.contactUs")) + " ", 1), _cache[7] || (_cache[7] = createBaseVNode("i", { class: "pi pi-comments" }, null, -1))]),
						_: 1
					}),
					createBaseVNode("span", _hoisted_53, toDisplayString(_ctx.$t("g.or")), 1),
					createVNode(Button_default, {
						variant: "muted-textonly",
						class: "h-6 p-1 text-sm text-text-secondary hover:text-base-foreground",
						onClick: handleViewEnterprise
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.viewEnterprise")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "pi pi-external-link" }, null, -1))]),
						_: 1
					})
				])])
			]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/SubscriptionAddPaymentPreviewWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "m-0 mb-8 text-center text-xl text-muted-foreground lg:text-2xl" };
var _hoisted_2$2 = { class: "mx-auto flex h-full max-w-[400px] flex-col items-stretch justify-between text-sm" };
var _hoisted_3$2 = { class: "" };
var _hoisted_4$2 = { class: "flex flex-col gap-2" };
var _hoisted_5$2 = { class: "text-sm text-base-foreground" };
var _hoisted_6$2 = { class: "flex items-baseline gap-2" };
var _hoisted_7$1 = { class: "text-4xl font-semibold text-base-foreground" };
var _hoisted_8$1 = { class: "text-xl text-base-foreground" };
var _hoisted_9$1 = { class: "text-muted-foreground" };
var _hoisted_10$1 = { class: "flex flex-col gap-3 pt-16 pb-8" };
var _hoisted_11$1 = { class: "flex items-center justify-between" };
var _hoisted_12$1 = { class: "text-base-foreground" };
var _hoisted_13$1 = { class: "flex items-center gap-1" };
var _hoisted_14$1 = { class: "font-bold text-base-foreground" };
var _hoisted_15$1 = { class: "text-base-foreground" };
var _hoisted_16$1 = { class: "flex flex-col gap-2 pt-2" };
var _hoisted_17$1 = { class: "flex items-center justify-between" };
var _hoisted_18$1 = { class: "text-sm text-base-foreground" };
var _hoisted_19$1 = { class: "text-sm font-bold text-base-foreground" };
var _hoisted_20$1 = { class: "flex items-center justify-between" };
var _hoisted_21$1 = { class: "text-sm text-base-foreground" };
var _hoisted_22$1 = { class: "flex items-center justify-between" };
var _hoisted_23$1 = { class: "text-sm text-base-foreground" };
var _hoisted_24$1 = { class: "flex items-center justify-between" };
var _hoisted_25$1 = { class: "text-sm text-base-foreground" };
var _hoisted_26$1 = {
	key: 0,
	class: "pi pi-check text-success-foreground text-xs"
};
var _hoisted_27$1 = {
	key: 1,
	class: "pi pi-times text-xs text-muted-foreground"
};
var _hoisted_28$1 = { class: "flex flex-col gap-2 border-t border-border-subtle pt-8" };
var _hoisted_29$1 = { class: "flex items-center justify-between text-base" };
var _hoisted_30$1 = { class: "text-base-foreground" };
var _hoisted_31$1 = { class: "font-bold text-base-foreground" };
var _hoisted_32$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_33$1 = { class: "flex flex-col gap-2 pt-8" };
var _hoisted_34$1 = { class: "text-center text-xs text-muted-foreground" };
var _hoisted_35$1 = {
	href: "https://www.comfy.org/terms",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "underline hover:text-base-foreground"
};
var _hoisted_36 = {
	href: "https://www.comfy.org/privacy",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "underline hover:text-base-foreground"
};
//#endregion
//#region src/platform/workspace/components/SubscriptionAddPaymentPreviewWorkspace.vue
var SubscriptionAddPaymentPreviewWorkspace_default = /* @__PURE__ */ defineComponent({
	__name: "SubscriptionAddPaymentPreviewWorkspace",
	props: {
		tierKey: {},
		billingCycle: { default: "monthly" },
		isLoading: {
			type: Boolean,
			default: false
		},
		previewData: { default: null }
	},
	emits: ["addCreditCard", "back"],
	setup(__props) {
		const { t, n } = useI18n();
		const isFeaturesCollapsed = ref(true);
		const tierName = computed(() => t(`subscription.tiers.${__props.tierKey}.name`));
		const displayPrice = computed(() => {
			if (__props.previewData?.new_plan) return (__props.previewData.new_plan.price_cents / 100).toFixed(0);
			return getTierPrice(__props.tierKey, __props.billingCycle === "yearly");
		});
		const displayCredits = computed(() => n(getTierCredits(__props.tierKey) ?? 0));
		const hasCustomLoRAs = computed(() => getTierFeatures(__props.tierKey).customLoRAs);
		const maxDuration = computed(() => t(`subscription.maxDuration.${__props.tierKey}`));
		const totalDueToday = computed(() => {
			if (__props.previewData) return (__props.previewData.cost_today_cents / 100).toFixed(2);
			const priceValue = getTierPrice(__props.tierKey, __props.billingCycle === "yearly");
			if (__props.billingCycle === "yearly") return (priceValue * 12).toFixed(2);
			return priceValue.toFixed(2);
		});
		const nextPaymentDate = computed(() => {
			if (__props.previewData?.new_plan?.period_end) return new Date(__props.previewData.new_plan.period_end).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
			const date = /* @__PURE__ */ new Date();
			if (__props.billingCycle === "yearly") date.setFullYear(date.getFullYear() + 1);
			else date.setMonth(date.getMonth() + 1);
			return date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		});
		return (_ctx, _cache) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("h2", _hoisted_1$2, toDisplayString(_ctx.$t("subscription.preview.confirmPayment")), 1), createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$2, [
				createBaseVNode("div", _hoisted_4$2, [
					createBaseVNode("span", _hoisted_5$2, toDisplayString(tierName.value), 1),
					createBaseVNode("div", _hoisted_6$2, [createBaseVNode("span", _hoisted_7$1, " $" + toDisplayString(displayPrice.value), 1), createBaseVNode("span", _hoisted_8$1, toDisplayString(_ctx.$t("subscription.usdPerMonthPerMember")), 1)]),
					createBaseVNode("span", _hoisted_9$1, toDisplayString(_ctx.$t("subscription.preview.startingToday")), 1)
				]),
				createBaseVNode("div", _hoisted_10$1, [
					createBaseVNode("div", _hoisted_11$1, [createBaseVNode("span", _hoisted_12$1, toDisplayString(_ctx.$t("subscription.preview.eachMonthCreditsRefill")), 1), createBaseVNode("div", _hoisted_13$1, [
						_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--component] text-sm text-amber-400" }, null, -1)),
						createBaseVNode("span", _hoisted_14$1, toDisplayString(displayCredits.value), 1),
						createBaseVNode("span", _hoisted_15$1, toDisplayString(_ctx.$t("subscription.preview.perMember")), 1)
					])]),
					createBaseVNode("button", {
						class: "flex cursor-pointer items-center justify-end gap-1 border-none bg-transparent p-0 text-sm text-muted-foreground hover:text-base-foreground",
						onClick: _cache[0] || (_cache[0] = ($event) => isFeaturesCollapsed.value = !isFeaturesCollapsed.value)
					}, [createBaseVNode("span", null, toDisplayString(isFeaturesCollapsed.value ? _ctx.$t("subscription.preview.showMoreFeatures") : _ctx.$t("subscription.preview.hideFeatures")), 1), createBaseVNode("i", { class: normalizeClass(unref(cn)("pi text-xs", isFeaturesCollapsed.value ? "pi-chevron-down" : "pi-chevron-up")) }, null, 2)]),
					withDirectives(createBaseVNode("div", _hoisted_16$1, [
						createBaseVNode("div", _hoisted_17$1, [createBaseVNode("span", _hoisted_18$1, toDisplayString(_ctx.$t("subscription.maxDurationLabel")), 1), createBaseVNode("span", _hoisted_19$1, toDisplayString(maxDuration.value), 1)]),
						createBaseVNode("div", _hoisted_20$1, [createBaseVNode("span", _hoisted_21$1, toDisplayString(_ctx.$t("subscription.gpuLabel")), 1), _cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-check text-success-foreground text-xs" }, null, -1))]),
						createBaseVNode("div", _hoisted_22$1, [createBaseVNode("span", _hoisted_23$1, toDisplayString(_ctx.$t("subscription.addCreditsLabel")), 1), _cache[5] || (_cache[5] = createBaseVNode("i", { class: "pi pi-check text-success-foreground text-xs" }, null, -1))]),
						createBaseVNode("div", _hoisted_24$1, [createBaseVNode("span", _hoisted_25$1, toDisplayString(_ctx.$t("subscription.customLoRAsLabel")), 1), hasCustomLoRAs.value ? (openBlock(), createElementBlock("i", _hoisted_26$1)) : (openBlock(), createElementBlock("i", _hoisted_27$1))])
					], 512), [[vShow, !isFeaturesCollapsed.value]])
				]),
				createBaseVNode("div", _hoisted_28$1, [createBaseVNode("div", _hoisted_29$1, [createBaseVNode("span", _hoisted_30$1, toDisplayString(_ctx.$t("subscription.preview.totalDueToday")), 1), createBaseVNode("span", _hoisted_31$1, " $" + toDisplayString(totalDueToday.value), 1)]), createBaseVNode("span", _hoisted_32$1, toDisplayString(_ctx.$t("subscription.preview.nextPaymentDue", { date: nextPaymentDate.value })), 1)])
			]), createBaseVNode("div", _hoisted_33$1, [
				createBaseVNode("p", _hoisted_34$1, [createVNode(_component_i18n_t, {
					keypath: "subscription.preview.termsAgreement",
					tag: "span"
				}, {
					terms: withCtx(() => [createBaseVNode("a", _hoisted_35$1, toDisplayString(_ctx.$t("subscription.preview.terms")), 1)]),
					privacy: withCtx(() => [createBaseVNode("a", _hoisted_36, toDisplayString(_ctx.$t("subscription.preview.privacyPolicy")), 1)]),
					_: 1
				})]),
				createVNode(Button_default, {
					variant: "secondary",
					size: "lg",
					class: "w-full rounded-lg",
					loading: _ctx.isLoading,
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("addCreditCard"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.preview.addCreditCard")), 1)]),
					_: 1
				}, 8, ["loading"]),
				createVNode(Button_default, {
					variant: "textonly",
					class: "cursor-pointer text-center text-xs text-muted-foreground transition-colors hover:bg-none hover:text-base-foreground",
					onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("back"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.preview.backToAllPlans")), 1)]),
					_: 1
				})
			])])], 64);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/SubscriptionTransitionPreviewWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "m-0 mb-8 text-center text-xl text-muted-foreground lg:text-2xl" };
var _hoisted_2$1 = { class: "mx-auto flex h-full flex-col items-stretch justify-between text-sm" };
var _hoisted_3$1 = { class: "flex items-center gap-4" };
var _hoisted_4$1 = { class: "flex w-[250px] flex-col gap-1" };
var _hoisted_5$1 = { class: "text-sm text-base-foreground" };
var _hoisted_6$1 = { class: "flex items-baseline gap-1" };
var _hoisted_7 = { class: "text-2xl font-semibold text-base-foreground" };
var _hoisted_8 = { class: "text-sm text-base-foreground" };
var _hoisted_9 = { class: "flex items-center gap-1 text-sm text-muted-foreground" };
var _hoisted_10 = { class: "inline text-sm text-muted-foreground" };
var _hoisted_11 = { class: "flex flex-col gap-1" };
var _hoisted_12 = { class: "text-sm font-semibold text-base-foreground" };
var _hoisted_13 = { class: "flex items-baseline gap-1" };
var _hoisted_14 = { class: "text-2xl font-semibold text-base-foreground" };
var _hoisted_15 = { class: "text-sm text-base-foreground" };
var _hoisted_16 = { class: "flex items-center gap-1 text-sm text-muted-foreground" };
var _hoisted_17 = { class: "text-sm text-muted-foreground" };
var _hoisted_18 = { class: "flex flex-col gap-3 pt-12 pb-6" };
var _hoisted_19 = { class: "flex items-center justify-between" };
var _hoisted_20 = { class: "text-base-foreground" };
var _hoisted_21 = { class: "flex items-center gap-1" };
var _hoisted_22 = { class: "font-bold text-base-foreground" };
var _hoisted_23 = {
	key: 0,
	class: "flex flex-col gap-2 border-t border-border-subtle py-6"
};
var _hoisted_24 = {
	key: 0,
	class: "flex items-center justify-between"
};
var _hoisted_25 = { class: "text-muted-foreground" };
var _hoisted_26 = { class: "text-muted-foreground" };
var _hoisted_27 = {
	key: 1,
	class: "flex items-center justify-between"
};
var _hoisted_28 = { class: "text-muted-foreground" };
var _hoisted_29 = { class: "text-muted-foreground" };
var _hoisted_30 = { class: "flex flex-col gap-2 border-t border-border-subtle pt-6" };
var _hoisted_31 = { class: "flex items-center justify-between text-base" };
var _hoisted_32 = { class: "text-base-foreground" };
var _hoisted_33 = { class: "font-bold text-base-foreground" };
var _hoisted_34 = { class: "text-sm text-muted-foreground" };
var _hoisted_35 = { class: "flex flex-col gap-2 pt-8" };
//#endregion
//#region src/platform/workspace/components/SubscriptionTransitionPreviewWorkspace.vue
var SubscriptionTransitionPreviewWorkspace_default = /* @__PURE__ */ defineComponent({
	__name: "SubscriptionTransitionPreviewWorkspace",
	props: {
		previewData: {},
		isLoading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["confirm", "back"],
	setup(__props) {
		const { t, n } = useI18n();
		function formatTierName(tier) {
			return t(`subscription.tiers.${tier.toLowerCase()}.name`);
		}
		function formatDate(dateStr) {
			return new Date(dateStr).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		}
		const currentTierName = computed(() => __props.previewData.current_plan ? formatTierName(__props.previewData.current_plan.tier) : "");
		const newTierName = computed(() => formatTierName(__props.previewData.new_plan.tier));
		const currentDisplayPrice = computed(() => __props.previewData.current_plan ? (__props.previewData.current_plan.price_cents / 100).toFixed(0) : "0");
		const newDisplayPrice = computed(() => (__props.previewData.new_plan.price_cents / 100).toFixed(0));
		const currentDisplayCredits = computed(() => {
			if (!__props.previewData.current_plan) return n(0);
			return n(getTierCredits(__props.previewData.current_plan.tier.toLowerCase()) ?? 0);
		});
		const newDisplayCredits = computed(() => {
			return n(getTierCredits(__props.previewData.new_plan.tier.toLowerCase()) ?? 0);
		});
		const currentPeriodEndDate = computed(() => __props.previewData.current_plan?.period_end ? formatDate(__props.previewData.current_plan.period_end) : "");
		const effectiveDate = computed(() => formatDate(__props.previewData.effective_at));
		const showProration = computed(() => __props.previewData.is_immediate);
		const proratedRefundCents = computed(() => {
			if (!__props.previewData.current_plan || !__props.previewData.is_immediate) return 0;
			const chargeToday = __props.previewData.cost_today_cents;
			const newPlanCost = __props.previewData.new_plan.price_cents;
			if (chargeToday < newPlanCost) return newPlanCost - chargeToday;
			return 0;
		});
		const proratedRefund = computed(() => (proratedRefundCents.value / 100).toFixed(2));
		const proratedChargeCents = computed(() => {
			if (!__props.previewData.is_immediate) return 0;
			return __props.previewData.cost_today_cents;
		});
		const proratedCharge = computed(() => (proratedChargeCents.value / 100).toFixed(2));
		const totalDueToday = computed(() => (__props.previewData.cost_today_cents / 100).toFixed(2));
		const nextPaymentDate = computed(() => __props.previewData.new_plan.period_end ? formatDate(__props.previewData.new_plan.period_end) : formatDate(__props.previewData.effective_at));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("h2", _hoisted_1$1, toDisplayString(_ctx.$t("subscription.preview.confirmPlanChange")), 1), createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", null, [
				createBaseVNode("div", _hoisted_3$1, [
					createBaseVNode("div", _hoisted_4$1, [
						createBaseVNode("span", _hoisted_5$1, toDisplayString(currentTierName.value), 1),
						createBaseVNode("div", _hoisted_6$1, [createBaseVNode("span", _hoisted_7, " $" + toDisplayString(currentDisplayPrice.value), 1), createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("subscription.usdPerMonthPerMember")), 1)]),
						createBaseVNode("div", _hoisted_9, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--component] text-xs text-amber-400" }, null, -1)), createBaseVNode("span", null, toDisplayString(currentDisplayCredits.value) + " " + toDisplayString(_ctx.$t("subscription.perMonth")), 1)]),
						createBaseVNode("span", _hoisted_10, toDisplayString(_ctx.$t("subscription.preview.ends", { date: currentPeriodEndDate.value })), 1)
					]),
					_cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-arrow-right size-8 text-muted-foreground" }, null, -1)),
					createBaseVNode("div", _hoisted_11, [
						createBaseVNode("span", _hoisted_12, toDisplayString(newTierName.value), 1),
						createBaseVNode("div", _hoisted_13, [createBaseVNode("span", _hoisted_14, " $" + toDisplayString(newDisplayPrice.value), 1), createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("subscription.usdPerMonthPerMember")), 1)]),
						createBaseVNode("div", _hoisted_16, [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--component] text-xs text-amber-400" }, null, -1)), createBaseVNode("span", null, toDisplayString(newDisplayCredits.value) + " " + toDisplayString(_ctx.$t("subscription.perMonth")), 1)]),
						createBaseVNode("span", _hoisted_17, toDisplayString(_ctx.$t("subscription.preview.starting", { date: effectiveDate.value })), 1)
					])
				]),
				createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("span", _hoisted_20, toDisplayString(_ctx.$t("subscription.preview.eachMonthCreditsRefill")), 1), createBaseVNode("div", _hoisted_21, [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "icon-[lucide--component] text-sm text-amber-400" }, null, -1)), createBaseVNode("span", _hoisted_22, toDisplayString(newDisplayCredits.value), 1)])])]),
				showProration.value ? (openBlock(), createElementBlock("div", _hoisted_23, [proratedRefundCents.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [createBaseVNode("span", _hoisted_25, toDisplayString(_ctx.$t("subscription.preview.proratedRefund", { plan: currentTierName.value })), 1), createBaseVNode("span", _hoisted_26, "-$" + toDisplayString(proratedRefund.value), 1)])) : createCommentVNode("", true), proratedChargeCents.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [createBaseVNode("span", _hoisted_28, toDisplayString(_ctx.$t("subscription.preview.proratedCharge", { plan: newTierName.value })), 1), createBaseVNode("span", _hoisted_29, "$" + toDisplayString(proratedCharge.value), 1)])) : createCommentVNode("", true)])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("span", _hoisted_32, toDisplayString(_ctx.$t("subscription.preview.totalDueToday")), 1), createBaseVNode("span", _hoisted_33, " $" + toDisplayString(totalDueToday.value), 1)]), createBaseVNode("span", _hoisted_34, toDisplayString(_ctx.$t("subscription.preview.nextPaymentDue", { date: nextPaymentDate.value })), 1)])
			]), createBaseVNode("div", _hoisted_35, [createVNode(Button_default, {
				variant: "secondary",
				size: "lg",
				class: "w-full rounded-lg",
				loading: _ctx.isLoading,
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("confirm"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.preview.confirm")), 1)]),
				_: 1
			}, 8, ["loading"]), createVNode(Button_default, {
				variant: "textonly",
				class: "cursor-pointer text-center text-xs text-muted-foreground transition-colors hover:bg-none hover:text-base-foreground",
				onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("back"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.preview.backToAllPlans")), 1)]),
				_: 1
			})])])], 64);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/SubscriptionRequiredDialogContentWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative flex h-full flex-col gap-6 overflow-y-auto p-4 pt-8 md:px-16 md:py-8" };
var _hoisted_2 = { class: "flex flex-col items-center gap-3" };
var _hoisted_3 = { class: "text-emerald-400" };
var _hoisted_4 = {
	key: 1,
	class: "text-center"
};
var _hoisted_5 = { class: "m-0 text-xl text-muted-foreground lg:text-2xl" };
var _hoisted_6 = { class: "m-0 mt-2 text-sm text-text-secondary" };
//#endregion
//#region src/platform/workspace/components/SubscriptionRequiredDialogContentWorkspace.vue
var SubscriptionRequiredDialogContentWorkspace_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscriptionRequiredDialogContentWorkspace",
	props: {
		onClose: { type: Function },
		reason: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		const toast = useToast();
		const { subscribe, previewSubscribe, plans, fetchStatus, fetchBalance } = useBillingContext();
		const billingOperationStore = useBillingOperationStore();
		const isPolling = computed(() => billingOperationStore.hasPendingOperations);
		const checkoutStep = ref("pricing");
		const isLoadingPreview = ref(false);
		const loadingTier = ref(null);
		const isSubscribing = ref(false);
		const isResubscribing = ref(false);
		const previewData = ref(null);
		const selectedTierKey = ref(null);
		const selectedBillingCycle = ref("yearly");
		function getApiPlanSlug(tierKey, billingCycle) {
			const apiDuration = billingCycle === "yearly" ? "ANNUAL" : "MONTHLY";
			const apiTier = tierKey.toUpperCase();
			return plans.value.find((p) => p.tier === apiTier && p.duration === apiDuration)?.slug ?? null;
		}
		async function handleSubscribeClick(payload) {
			const { tierKey, billingCycle } = payload;
			isLoadingPreview.value = true;
			loadingTier.value = tierKey;
			selectedTierKey.value = tierKey;
			selectedBillingCycle.value = billingCycle;
			try {
				const planSlug = getApiPlanSlug(tierKey, billingCycle);
				if (!planSlug) {
					toast.add({
						severity: "error",
						summary: "Unable to subscribe",
						detail: "This plan is not available"
					});
					return;
				}
				const response = await previewSubscribe(planSlug);
				if (!response || !response.allowed) {
					toast.add({
						severity: "error",
						summary: "Unable to subscribe",
						detail: response?.reason || "This plan is not available"
					});
					return;
				}
				previewData.value = response;
				checkoutStep.value = "preview";
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to load subscription preview";
				toast.add({
					severity: "error",
					summary: "Error",
					detail: message
				});
			} finally {
				isLoadingPreview.value = false;
				loadingTier.value = null;
			}
		}
		function handleBackToPricing() {
			checkoutStep.value = "pricing";
			previewData.value = null;
		}
		async function handleAddCreditCard() {
			if (!selectedTierKey.value) return;
			isSubscribing.value = true;
			try {
				const planSlug = getApiPlanSlug(selectedTierKey.value, selectedBillingCycle.value);
				if (!planSlug) return;
				const response = await subscribe(planSlug, `${getComfyPlatformBaseUrl()}/payment/success`, `${getComfyPlatformBaseUrl()}/payment/failed`);
				if (!response) return;
				if (response.status === "subscribed") {
					toast.add({
						severity: "success",
						summary: t("subscription.required.pollingSuccess"),
						life: 5e3
					});
					await Promise.all([fetchStatus(), fetchBalance()]);
					emit("close", true);
				} else if (response.status === "needs_payment_method" && response.payment_method_url) {
					window.open(response.payment_method_url, "_blank");
					billingOperationStore.startOperation(response.billing_op_id, "subscription");
				} else if (response.status === "pending_payment") billingOperationStore.startOperation(response.billing_op_id, "subscription");
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to subscribe";
				toast.add({
					severity: "error",
					summary: "Error",
					detail: message
				});
			} finally {
				isSubscribing.value = false;
			}
		}
		async function handleConfirmTransition() {
			if (!selectedTierKey.value) return;
			isSubscribing.value = true;
			try {
				const planSlug = getApiPlanSlug(selectedTierKey.value, selectedBillingCycle.value);
				if (!planSlug) return;
				const response = await subscribe(planSlug, `${getComfyPlatformBaseUrl()}/payment/success`, `${getComfyPlatformBaseUrl()}/payment/failed`);
				if (!response) return;
				if (response.status === "subscribed") {
					toast.add({
						severity: "success",
						summary: t("subscription.required.pollingSuccess"),
						life: 5e3
					});
					await Promise.all([fetchStatus(), fetchBalance()]);
					emit("close", true);
				} else if (response.status === "needs_payment_method" && response.payment_method_url) {
					window.open(response.payment_method_url, "_blank");
					billingOperationStore.startOperation(response.billing_op_id, "subscription");
				} else if (response.status === "pending_payment") billingOperationStore.startOperation(response.billing_op_id, "subscription");
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to update subscription";
				toast.add({
					severity: "error",
					summary: "Error",
					detail: message
				});
			} finally {
				isSubscribing.value = false;
			}
		}
		async function handleResubscribe() {
			isResubscribing.value = true;
			try {
				await workspaceApi.resubscribe();
				toast.add({
					severity: "success",
					summary: t("subscription.resubscribeSuccess"),
					life: 5e3
				});
				await Promise.all([fetchStatus(), fetchBalance()]);
				emit("close", true);
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to resubscribe";
				toast.add({
					severity: "error",
					summary: "Error",
					detail: message
				});
			} finally {
				isResubscribing.value = false;
			}
		}
		function handleClose() {
			__props.onClose();
		}
		return (_ctx, _cache) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				checkoutStep.value === "preview" ? (openBlock(), createBlock(Button_default, {
					key: 0,
					size: "icon",
					variant: "muted-textonly",
					class: "absolute top-2.5 left-2.5 shrink-0 rounded-full text-text-secondary hover:bg-white/10",
					"aria-label": _ctx.$t("g.back"),
					onClick: handleBackToPricing
				}, {
					default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-arrow-left text-xl" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])) : createCommentVNode("", true),
				createVNode(Button_default, {
					size: "icon",
					variant: "muted-textonly",
					class: "absolute top-2.5 right-2.5 shrink-0 rounded-full text-text-secondary hover:bg-white/10",
					"aria-label": _ctx.$t("g.close"),
					onClick: handleClose
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-times text-xl" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"]),
				createBaseVNode("div", _hoisted_2, [_cache[2] || (_cache[2] = createBaseVNode("div", {
					class: "flex size-10 items-center justify-center rounded-xl bg-primary-background text-lg font-semibold text-white",
					"aria-hidden": "true"
				}, " T ", -1)), createVNode(_component_i18n_t, {
					keypath: "subscription.plansForWorkspace",
					tag: "h2",
					class: "m-0 font-inter text-2xl font-semibold text-base-foreground"
				}, {
					workspace: withCtx(() => [createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("subscription.teamWorkspace")), 1)]),
					_: 1
				})]),
				_ctx.reason === "out_of_credits" ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("h2", _hoisted_5, toDisplayString(_ctx.$t("credits.topUp.insufficientTitle")), 1), createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("credits.topUp.insufficientMessage")), 1)])) : createCommentVNode("", true),
				checkoutStep.value === "pricing" ? (openBlock(), createBlock(PricingTableWorkspace_default, {
					key: 2,
					class: "flex-1",
					"is-loading": isLoadingPreview.value || isResubscribing.value,
					"loading-tier": loadingTier.value,
					onSubscribe: handleSubscribeClick,
					onResubscribe: handleResubscribe
				}, null, 8, ["is-loading", "loading-tier"])) : checkoutStep.value === "preview" && previewData.value && previewData.value.transition_type === "new_subscription" ? (openBlock(), createBlock(SubscriptionAddPaymentPreviewWorkspace_default, {
					key: 3,
					"preview-data": previewData.value,
					"tier-key": selectedTierKey.value,
					"billing-cycle": selectedBillingCycle.value,
					"is-loading": isSubscribing.value || isPolling.value,
					onAddCreditCard: handleAddCreditCard,
					onBack: handleBackToPricing
				}, null, 8, [
					"preview-data",
					"tier-key",
					"billing-cycle",
					"is-loading"
				])) : checkoutStep.value === "preview" && previewData.value && previewData.value.transition_type !== "new_subscription" ? (openBlock(), createBlock(SubscriptionTransitionPreviewWorkspace_default, {
					key: 4,
					"preview-data": previewData.value,
					"is-loading": isSubscribing.value || isPolling.value,
					onConfirm: handleConfirmTransition,
					onBack: handleBackToPricing
				}, null, 8, ["preview-data", "is-loading"])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-bcf22eb4"]]);
//#endregion
export { SubscriptionRequiredDialogContentWorkspace_default as default };

//# sourceMappingURL=SubscriptionRequiredDialogContentWorkspace-UpUokRdk.js.map