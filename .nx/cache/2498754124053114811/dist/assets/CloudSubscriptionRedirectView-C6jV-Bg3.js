import "./rolldown-runtime-DBfy44LZ.js";
import { J as script$1, tt as script } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, D as computed, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, Z as onMounted, a as useRoute, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, o as useRouter } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { Oi as useAuthActions, ki as useBillingContext } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import { t as useErrorHandling } from "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
import { t as comfy_logo_single_default } from "./comfy-logo-single-Busbi-nj.js";
import { t as performSubscriptionCheckout } from "./subscriptionCheckoutUtil-DTVEEs1_.js";
//#region src/platform/cloud/onboarding/CloudSubscriptionRedirectView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "bg-comfy-menu-secondary-bg flex size-full items-center justify-center" };
var _hoisted_2 = { class: "flex flex-col items-center gap-4" };
var _hoisted_3 = ["alt"];
var _hoisted_4 = {
	key: 0,
	class: "font-inter text-base/normal font-normal text-base-foreground"
};
//#endregion
//#region src/platform/cloud/onboarding/CloudSubscriptionRedirectView.vue
var CloudSubscriptionRedirectView_default = /* @__PURE__ */ defineComponent({
	__name: "CloudSubscriptionRedirectView",
	setup(__props) {
		const { t } = useI18n();
		const route = useRoute();
		const router = useRouter();
		const { reportError, accessBillingPortal } = useAuthActions();
		const { wrapWithErrorHandlingAsync } = useErrorHandling();
		const { isActiveSubscription, isInitialized, initialize } = useBillingContext();
		const selectedTierKey = ref(null);
		const tierDisplayName = computed(() => {
			if (!selectedTierKey.value) return "";
			return {
				free: t("subscription.tiers.free.name"),
				standard: t("subscription.tiers.standard.name"),
				creator: t("subscription.tiers.creator.name"),
				pro: t("subscription.tiers.pro.name"),
				founder: t("subscription.tiers.founder.name")
			}[selectedTierKey.value];
		});
		const runRedirect = wrapWithErrorHandlingAsync(async () => {
			const rawType = route.query.tier;
			const rawCycle = route.query.cycle;
			let tierKeyParam = null;
			let cycleParam = "monthly";
			if (typeof rawType === "string") tierKeyParam = rawType;
			else if (Array.isArray(rawType) && rawType[0]) tierKeyParam = rawType[0];
			if (typeof rawCycle === "string") cycleParam = rawCycle;
			else if (Array.isArray(rawCycle) && rawCycle[0]) cycleParam = rawCycle[0];
			if (!tierKeyParam) {
				await router.push("/");
				return;
			}
			if (![
				"standard",
				"creator",
				"pro",
				"founder"
			].includes(tierKeyParam)) {
				await router.push("/");
				return;
			}
			const tierKey = tierKeyParam;
			selectedTierKey.value = tierKey;
			if (!cycleParam || !["monthly", "yearly"].includes(cycleParam)) cycleParam = "monthly";
			if (!isInitialized.value) await initialize();
			if (isActiveSubscription.value) await accessBillingPortal(void 0, false);
			else await performSubscriptionCheckout(tierKey, cycleParam, false);
		}, reportError);
		onMounted(() => {
			runRedirect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("img", {
					src: comfy_logo_single_default,
					alt: unref(t)("g.comfyOrgLogoAlt"),
					class: "size-16"
				}, null, 8, _hoisted_3),
				selectedTierKey.value ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(unref(t)("subscription.subscribeTo", { plan: tierDisplayName.value })), 1)) : createCommentVNode("", true),
				selectedTierKey.value ? (openBlock(), createBlock(unref(script), {
					key: 1,
					class: "size-8",
					"stroke-width": "4"
				})) : createCommentVNode("", true),
				selectedTierKey.value ? (openBlock(), createBlock(unref(script$1), {
					key: 2,
					as: "a",
					href: "/",
					link: "",
					label: unref(t)("cloudOnboarding.skipToCloudApp")
				}, null, 8, ["label"])) : createCommentVNode("", true)
			])]);
		};
	}
});
//#endregion
export { CloudSubscriptionRedirectView_default as default };

//# sourceMappingURL=CloudSubscriptionRedirectView-C6jV-Bg3.js.map