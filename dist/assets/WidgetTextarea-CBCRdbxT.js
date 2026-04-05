import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, G as mergeModels, I as createVNode, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, b as withModifiers, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, lt as useId, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { wt as isNodeOptionsOpen } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import { r as useHideLayoutField } from "./widgetTypes-DxLkDLQG.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import { t as useCopyToClipboard } from "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { t as Textarea_default } from "./Textarea-DdwIdlE4.js";
import { o as filterWidgetProps, r as INPUT_EXCLUDED_PROPS } from "./widgetPropFilter-nQfJwFQD.js";
import { t as WidgetInputBaseClass } from "./layout-CbnMFmup.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetTextarea.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["for"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetTextarea.vue
var WidgetTextarea_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetTextarea",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		placeholder: { default: "" }
	}, {
		"modelValue": { default: "" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const textAreaRef = useTemplateRef("textAreaRef");
		const modelValue = useModel(__props, "modelValue");
		const isFocused = ref(false);
		function trackFocus() {
			isFocused.value = document.activeElement === textAreaRef.value?.$el;
		}
		const hideLayoutField = useHideLayoutField();
		const { copyToClipboard } = useCopyToClipboard();
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, INPUT_EXCLUDED_PROPS));
		const displayName = computed(() => __props.widget.label || __props.widget.name);
		const id = useId();
		const isReadOnly = computed(() => Boolean(__props.widget.options?.read_only || __props.widget.options?.disabled));
		function handleContextMenu(e) {
			if (isNodeOptionsOpen() || isFocused.value) {
				e.stopPropagation();
				return;
			}
			e.preventDefault();
		}
		function handleCopy() {
			copyToClipboard(modelValue.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("group relative rounded-lg transition-all focus-within:ring focus-within:ring-component-node-widget-background-highlighted hover:bg-component-node-widget-background-hovered", _ctx.widget.borderStyle)) }, [
				!unref(hideLayoutField) ? (openBlock(), createElementBlock("label", {
					key: 0,
					for: unref(id),
					class: "pointer-events-none absolute top-1.5 left-3 z-10 text-2xs text-muted-foreground"
				}, toDisplayString(displayName.value), 9, _hoisted_1)) : createCommentVNode("", true),
				createVNode(Textarea_default, mergeProps(filteredProps.value, {
					id: unref(id),
					ref_key: "textAreaRef",
					ref: textAreaRef,
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					class: unref(cn)(unref(WidgetInputBaseClass), "size-full resize-none text-xs", !unref(hideLayoutField) && "pt-5"),
					placeholder: _ctx.placeholder,
					readonly: isReadOnly.value,
					"data-capture-wheel": "true",
					onPointerdownCapture: withModifiers(trackFocus, ["stop"]),
					onPointermoveCapture: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
					onPointerupCapture: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
					onContextmenuCapture: handleContextMenu
				}), null, 16, [
					"id",
					"modelValue",
					"class",
					"placeholder",
					"readonly"
				]),
				isReadOnly.value ? (openBlock(), createBlock(Button_default, {
					key: 1,
					variant: "textonly",
					size: "icon",
					class: "invisible absolute top-1.5 right-1.5 z-10 group-focus-within:visible group-hover:visible hover:bg-base-foreground/10",
					title: _ctx.$t("g.copyToClipboard"),
					"aria-label": _ctx.$t("g.copyToClipboard"),
					onClick: handleCopy,
					onPointerdownCapture: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => _cache[4] || (_cache[4] = [createBaseVNode("i", { class: "icon-[lucide--copy] size-4 text-component-node-foreground" }, null, -1)])),
					_: 1
				}, 8, ["title", "aria-label"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
export { WidgetTextarea_default as default };

//# sourceMappingURL=WidgetTextarea-CBCRdbxT.js.map