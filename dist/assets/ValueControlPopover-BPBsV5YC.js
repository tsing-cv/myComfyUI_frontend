import "./rolldown-runtime-DBfy44LZ.js";
import { P as script } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, nt as renderList, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { a as useSettingStore } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
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
import "./useExternalLink-DB_su3zs.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "w-113 max-w-md space-y-4 p-4" };
var _hoisted_2 = { class: "text-sm/tight text-muted-foreground" };
var _hoisted_3 = { class: "font-medium text-base-foreground" };
var _hoisted_4 = { class: "space-y-2" };
var _hoisted_5 = { class: "flex min-w-0 flex-1 items-center gap-2 text-wrap" };
var _hoisted_6 = { class: "flex size-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-secondary-background" };
var _hoisted_7 = {
	key: 1,
	class: "text-xs font-normal text-base-foreground"
};
var _hoisted_8 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" };
var _hoisted_9 = { class: "text-sm/tight font-normal text-base-foreground" };
var _hoisted_10 = { class: "text-sm/tight font-normal text-muted-foreground" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlPopover.vue
var ValueControlPopover_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlPopover",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const settingStore = useSettingStore();
		const controlOptions = [
			{
				mode: "fixed",
				icon: "icon-[lucide--pencil-off]",
				title: "fixed",
				description: "fixedDesc"
			},
			{
				mode: "increment",
				text: "+1",
				title: "increment",
				description: "incrementDesc"
			},
			{
				mode: "decrement",
				text: "-1",
				title: "decrement",
				description: "decrementDesc"
			},
			{
				mode: "randomize",
				icon: "icon-[lucide--shuffle]",
				title: "randomize",
				description: "randomizeDesc"
			}
		];
		const widgetControlMode = computed(() => settingStore.get("Comfy.WidgetControlMode"));
		const controlMode = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createTextVNode(toDisplayString(_ctx.$t("widgets.valueControl.header.prefix")) + " ", 1),
				createBaseVNode("span", _hoisted_3, toDisplayString(widgetControlMode.value === "before" ? _ctx.$t("widgets.valueControl.header.before") : _ctx.$t("widgets.valueControl.header.after")), 1),
				createTextVNode(" " + toDisplayString(_ctx.$t("widgets.valueControl.header.postfix")), 1)
			]), createBaseVNode("div", _hoisted_4, [(openBlock(), createElementBlock(Fragment, null, renderList(controlOptions, (option) => {
				return createVNode(Button_default, {
					key: option.mode,
					as: "label",
					variant: "textonly",
					size: "lg",
					class: "flex h-[unset] w-full items-center justify-between gap-7 py-2 text-left",
					for: option.mode
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [option.icon ? (openBlock(), createElementBlock("i", {
						key: 0,
						class: normalizeClass([option.icon, "text-base text-base-foreground"])
					}, null, 2)) : createCommentVNode("", true), option.text ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(option.text), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("span", null, toDisplayString(_ctx.$t(`widgets.valueControl.${option.title}`)), 1)]), createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t(`widgets.valueControl.${option.description}`)), 1)])]), createVNode(unref(script), {
						modelValue: controlMode.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlMode.value = $event),
						class: "shrink",
						"input-id": option.mode,
						value: option.mode
					}, null, 8, [
						"modelValue",
						"input-id",
						"value"
					])]),
					_: 2
				}, 1032, ["for"]);
			}), 64))])]);
		};
	}
});
//#endregion
export { ValueControlPopover_default as default };

//# sourceMappingURL=ValueControlPopover-BPBsV5YC.js.map