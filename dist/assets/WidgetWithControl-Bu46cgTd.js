const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ValueControlPopover-BPBsV5YC.js","./rolldown-runtime-DBfy44LZ.js","./vendor-primevue-Dnp2bJ8y.js","./vendor-vue-core-Ba0aGEmU.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-DKx-VcuC.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-i18n-CQIJzQYM.js","./vendor-sentry-Dn2jSJwd.js","./vendor-vueuse--4MZqvDu.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-DifTE-W9.js","./i18n-1Rh80DIx.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-mBVaC-eN.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./api-DZnjKRFN.js","./vendor-yjs-CLwSweDd.js","./widget-W78njY6p.js","./colorUtil-D_gLWYA0.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-MPqv8vkx.js","./useErrorHandling-DtKxKYzs.js","./useExternalLink-DB_su3zs.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BaQ5ErdO.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-Xq2eOfQ2.js","./widgetTypes-DxLkDLQG.js","./markdownRendererUtil-uFQ2wi0y.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, G as mergeModels, I as createVNode, K as mergeProps, L as defineAsyncComponent, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, ot as resolveDynamicComponent, pt as watch, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Popover_default } from "./Popover-CIFEPFvK.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = {
	key: 1,
	class: "text-xs font-normal text-primary-background"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue
var ValueControlButton_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlButton",
	props: {
		mode: {},
		variant: { default: "badge" }
	},
	setup(__props) {
		const { t } = useI18n();
		const iconMap = {
			fixed: "icon-[lucide--pencil-off]",
			randomize: "icon-[lucide--shuffle]",
			increment: null,
			decrement: null
		};
		const textMap = {
			increment: "+1",
			decrement: "-1",
			fixed: null,
			randomize: null
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				"aria-label": unref(t)("widgets.valueControl." + _ctx.mode),
				class: normalizeClass(unref(cn)("flex shrink-0 cursor-pointer items-center justify-center border-none focus-visible:ring-2 focus-visible:ring-primary-background focus-visible:ring-offset-1 focus-visible:outline-none", _ctx.variant === "badge" ? "h-4.5 w-8 rounded-full" : "size-6 rounded-sm", _ctx.mode !== "fixed" ? "bg-primary-background/30 hover:bg-primary-background-hover/30" : "bg-transparent"))
			}, [iconMap[_ctx.mode] ? (openBlock(), createElementBlock("i", {
				key: 0,
				"aria-hidden": "true",
				class: normalizeClass(unref(cn)(iconMap[_ctx.mode] ?? "", "text-xs", _ctx.mode === "fixed" ? "text-muted-foreground" : "text-primary-background"))
			}, null, 2)) : textMap[_ctx.mode] ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(textMap[_ctx.mode]), 1)) : createCommentVNode("", true)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative grid grid-cols-subgrid" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue
var WidgetWithControl_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetWithControl",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		component: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const ValueControlPopover = defineAsyncComponent(() => __vitePreload(() => import("./ValueControlPopover-BPBsV5YC.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]), import.meta.url));
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const controlModel = ref(props.widget.controlWidget.value);
		watch(controlModel, props.widget.controlWidget.update);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.component), mergeProps(_ctx.$attrs, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				widget: _ctx.widget
			}), {
				default: withCtx(() => [createVNode(Popover_default, null, {
					button: withCtx(() => [createVNode(ValueControlButton_default, {
						mode: controlModel.value,
						class: "self-center"
					}, null, 8, ["mode"])]),
					default: withCtx(() => [createVNode(unref(ValueControlPopover), {
						modelValue: controlModel.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlModel.value = $event)
					}, null, 8, ["modelValue"])]),
					_: 1
				})]),
				_: 1
			}, 16, ["modelValue", "widget"]))]);
		};
	}
});
//#endregion
export { WidgetWithControl_default as t };

//# sourceMappingURL=WidgetWithControl-Bu46cgTd.js.map