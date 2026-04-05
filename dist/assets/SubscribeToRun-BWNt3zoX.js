import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, F as createTextVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, _t as withCtx, at as resolveDirective, et as openBlock, k as createBlock, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { i as breakpointsTailwind, u as useBreakpoints } from "./vendor-vueuse--4MZqvDu.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { ki as useBillingContext } from "./dialogService-DKx-VcuC.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeToRun.vue
var SubscribeToRun_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeToRun",
	setup(__props) {
		const { t } = useI18n();
		const isMdOrLarger = useBreakpoints(breakpointsTailwind).greaterOrEqual("md");
		const buttonLabel = computed(() => isMdOrLarger.value ? t("subscription.subscribeToRunFull") : t("subscription.subscribeToRun"));
		const { showSubscriptionDialog } = useBillingContext();
		const handleSubscribeToRun = () => {
			if (isCloud) useTelemetry()?.trackRunButton({ subscribe_to_run: true });
			showSubscriptionDialog();
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				class: "subscribe-to-run-button whitespace-nowrap",
				variant: "gradient",
				size: "sm",
				"data-testid": "subscribe-to-run-button",
				onClick: handleSubscribeToRun
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-lock" }, null, -1)), createTextVNode(" " + toDisplayString(buttonLabel.value), 1)]),
				_: 1
			})), [[
				_directive_tooltip,
				{
					value: _ctx.$t("subscription.subscribeToRunFull"),
					showDelay: 600
				},
				void 0,
				{ bottom: true }
			]]);
		};
	}
});
//#endregion
export { SubscribeToRun_default as t };

//# sourceMappingURL=SubscribeToRun-BWNt3zoX.js.map