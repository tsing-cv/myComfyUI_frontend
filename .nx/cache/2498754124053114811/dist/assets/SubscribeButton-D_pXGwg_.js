import "./rolldown-runtime-DBfy44LZ.js";
import { Bt as normalizeClass, F as createTextVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, Y as onBeforeUnmount, _t as withCtx, et as openBlock, k as createBlock, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { ji as useSubscription, ki as useBillingContext } from "./dialogService-ClaKHdWI.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeButton.vue
var SubscribeButton_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeButton",
	props: {
		label: {},
		size: { default: "lg" },
		buttonVariant: { default: "default" },
		fluid: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["subscribed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { isActiveSubscription, showSubscriptionDialog } = useBillingContext();
		const { subscriptionTier } = useSubscription();
		const isAwaitingStripeSubscription = ref(false);
		watch([isAwaitingStripeSubscription, isActiveSubscription], ([awaiting, isActive]) => {
			if (isCloud && awaiting && isActive) {
				emit("subscribed");
				isAwaitingStripeSubscription.value = false;
			}
		});
		const handleSubscribe = () => {
			if (isCloud) useTelemetry()?.trackSubscription("subscribe_clicked", { current_tier: subscriptionTier.value?.toLowerCase() });
			isAwaitingStripeSubscription.value = true;
			showSubscriptionDialog();
		};
		onBeforeUnmount(() => {
			isAwaitingStripeSubscription.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				size: _ctx.size,
				disabled: _ctx.disabled,
				variant: _ctx.buttonVariant === "gradient" ? "gradient" : "primary",
				class: normalizeClass(unref(cn)("font-bold", _ctx.fluid && "w-full")),
				onClick: handleSubscribe
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.label || _ctx.$t("subscription.required.subscribe")), 1)]),
				_: 1
			}, 8, [
				"size",
				"disabled",
				"variant",
				"class"
			]);
		};
	}
});
//#endregion
export { SubscribeButton_default as t };

//# sourceMappingURL=SubscribeButton-D_pXGwg_.js.map