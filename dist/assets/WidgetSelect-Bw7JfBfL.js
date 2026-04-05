import "./rolldown-runtime-DBfy44LZ.js";
import { X as script$1, nt as script } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, G as mergeModels, I as createVNode, It as toValue, K as mergeProps, Mt as shallowRef, O as createBaseVNode, Pt as toRef, R as defineComponent, Rt as unref, S as Fragment, U as inject, Ut as toDisplayString, _t as withCtx, at as resolveDirective, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, pt as watch, rt as renderSlot, tt as provide, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { H as capitalize } from "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import { X as refDebounced, a as computedAsync } from "./vendor-vueuse--4MZqvDu.js";
import { r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { D as useWorkflowStore, Jn as sortAssets, Wn as useModelUpload, Xn as filterItemByOwnership, Yn as filterItemByBaseModels, bn as getOutputAssetMetadata, fn as useMediaAssets, ii as appendCloudResParam, lr as useAssetFilterOptions, ni as useModelToNodeStore, oi as VirtualGrid_default, ti as assetService, un as resolveOutputAssetItems, ur as isComboInputSpec, xn as useAssetsStore } from "./dialogService-DKx-VcuC.js";
import { h as getMediaTypeFromFilename } from "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import { a as getAssetFilename, i as getAssetDisplayName, n as getAssetBaseModels } from "./assetMetadataUtils-C4X4hjOE.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { n as SUPPORTED_EXTENSIONS_ACCEPT } from "./constants-CWGvtpeq.js";
import { i as PANEL_EXCLUDED_PROPS, o as filterWidgetProps } from "./widgetPropFilter-nQfJwFQD.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-Da15-q1j.js";
import { t as WidgetInputBaseClass } from "./layout-CbnMFmup.js";
import { t as WidgetWithControl_default } from "./WidgetWithControl-Bu46cgTd.js";
import { r as useTransformCompatOverlayProps, t as FormSearchInput_default } from "./FormSearchInput-C6zjCC36.js";
//#region src/components/primevueOverride/SelectPlus.vue
var _sfc_main = {
	name: "SelectPlus",
	extends: script,
	emits: ["hide"],
	methods: { onOverlayLeave() {
		this.unbindOutsideClickListener();
		this.unbindScrollListener();
		this.unbindResizeListener();
		this.$emit("hide");
		this.overlay = null;
	} }
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDefault.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { class: "absolute top-5 right-8 flex h-4 w-7 -translate-y-4/5" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDefault.vue
var WidgetSelectDefault_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelectDefault",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default(props) {
			const values = props.widget.options?.values;
			const resolved = typeof values === "function" ? values() : values;
			return Array.isArray(resolved) ? resolved[0] ?? "" : "";
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		function resolveValues(values) {
			if (typeof values === "function") return values();
			if (Array.isArray(values)) return values;
			return [];
		}
		const modelValue = useModel(__props, "modelValue");
		const transformCompatProps = useTransformCompatOverlayProps();
		const refreshTrigger = ref(0);
		function refreshOptions() {
			refreshTrigger.value++;
		}
		const selectOptions = computed(() => {
			refreshTrigger.value;
			return resolveValues(props.widget.options?.values);
		});
		const invalid = computed(() => !!modelValue.value && !selectOptions.value.includes(modelValue.value));
		const combinedProps = computed(() => ({
			...filterWidgetProps(props.widget.options, PANEL_EXCLUDED_PROPS),
			...transformCompatProps.value,
			...invalid.value ? { placeholder: `${modelValue.value}` } : {}
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: _ctx.widget }, {
				default: withCtx(() => [createVNode(_sfc_main, mergeProps({
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					invalid: invalid.value,
					filter: selectOptions.value.length > 4,
					"auto-filter-focus": "",
					options: selectOptions.value
				}, combinedProps.value, {
					class: unref(cn)(unref(WidgetInputBaseClass), "w-full text-xs"),
					"aria-label": _ctx.widget.name,
					size: "small",
					pt: {
						option: "text-xs",
						dropdown: "w-8",
						label: unref(cn)("min-w-[4ch] truncate", _ctx.$slots.default && "mr-5"),
						overlay: "w-fit min-w-full"
					},
					"data-capture-wheel": "true",
					onShow: refreshOptions,
					onFilter: refreshOptions
				}), {
					dropdownicon: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "icon-[lucide--chevron-down] size-4 text-component-node-foreground-secondary" }, null, -1)])),
					_: 1
				}, 16, [
					"modelValue",
					"invalid",
					"filter",
					"options",
					"class",
					"aria-label",
					"pt"
				]), createBaseVNode("div", _hoisted_1$5, [renderSlot(_ctx.$slots, "default")])]),
				_: 3
			}, 8, ["widget"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "min-w-0 flex-1 truncate px-1 py-2 text-left" };
var _hoisted_2$4 = { key: 0 };
var _hoisted_3$3 = { key: 1 };
var _hoisted_4$2 = [
	"multiple",
	"disabled",
	"accept"
];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownInput.vue
var FormDropdownInput_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownInput",
	props: {
		isOpen: { type: Boolean },
		placeholder: { default: "Select..." },
		items: {},
		displayItems: {},
		selected: {},
		maxSelectable: {},
		uploadable: { type: Boolean },
		disabled: { type: Boolean },
		accept: {}
	},
	emits: ["select-click", "file-change"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const selectedItems = computed(() => {
			return (__props.displayItems ?? __props.items).filter((item) => __props.selected.has(item.id));
		});
		const theButtonStyle = computed(() => cn("border-0 bg-component-node-widget-background text-text-secondary outline-none", __props.disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-component-node-widget-background-hovered", selectedItems.value.length > 0 && "text-text-primary"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex text-base leading-none", { "cursor-not-allowed opacity-50 outline-node-component-border": _ctx.disabled })) }, [createBaseVNode("button", {
				class: normalizeClass(unref(cn)(theButtonStyle.value, "flex h-8 min-w-0 flex-1 items-center justify-between", {
					"rounded-l-lg": _ctx.uploadable,
					"rounded-lg": !_ctx.uploadable
				})),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("select-click", $event))
			}, [createBaseVNode("span", _hoisted_1$4, [!selectedItems.value.length ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(_ctx.placeholder), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(selectedItems.value.map((item) => item.label ?? item.name).join(", ")), 1))]), createBaseVNode("i", { class: normalizeClass(["icon-[lucide--chevron-down]", unref(cn)("mr-2 size-4 shrink-0 text-component-node-foreground-secondary transition-transform duration-200", _ctx.isOpen && "rotate-180")]) }, null, 2)], 2), _ctx.uploadable ? (openBlock(), createElementBlock("label", {
				key: 0,
				class: normalizeClass(unref(cn)(theButtonStyle.value, "relative", "flex size-8 items-center justify-center rounded-r-lg border-l border-node-component-border"))
			}, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--folder-search] size-4" }, null, -1)), createBaseVNode("input", {
				type: "file",
				class: "absolute inset-0 -z-1 opacity-0",
				multiple: _ctx.maxSelectable > 1,
				disabled: _ctx.disabled,
				accept: _ctx.accept,
				onChange: _cache[1] || (_cache[1] = ($event) => emit("file-change", $event))
			}, null, 40, _hoisted_4$2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "text-secondary flex gap-2 px-4" };
var _hoisted_2$3 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_3$2 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var _hoisted_4$1 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_5$1 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var _hoisted_6 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_7 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var layoutSwitchItemStyle = "size-6 flex justify-center items-center rounded-sm cursor-pointer transition-all duration-150 hover:scale-108 hover:text-base-foreground active:scale-95";
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuActions.vue
var FormDropdownMenuActions_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuActions",
	props: /* @__PURE__ */ mergeModels({
		sortOptions: {},
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {}
	}, {
		"layoutMode": {},
		"layoutModeModifiers": {},
		"searchQuery": {},
		"searchQueryModifiers": {},
		"sortSelected": {},
		"sortSelectedModifiers": {},
		"ownershipSelected": { default: "all" },
		"ownershipSelectedModifiers": {},
		"baseModelSelected": { default: /* @__PURE__ */ new Set() },
		"baseModelSelectedModifiers": {}
	}),
	emits: [
		"update:layoutMode",
		"update:searchQuery",
		"update:sortSelected",
		"update:ownershipSelected",
		"update:baseModelSelected"
	],
	setup(__props) {
		const { t } = useI18n();
		const overlayProps = useTransformCompatOverlayProps();
		const layoutMode = useModel(__props, "layoutMode");
		const searchQuery = useModel(__props, "searchQuery");
		const sortSelected = useModel(__props, "sortSelected");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const actionButtonStyle = cn("h-8 rounded-lg bg-zinc-500/20 outline-1 -outline-offset-1 outline-node-component-border transition-all duration-150");
		const sortPopoverRef = useTemplateRef("sortPopoverRef");
		const sortTriggerRef = useTemplateRef("sortTriggerRef");
		const isSortPopoverOpen = ref(false);
		function toggleSortPopover(event) {
			if (!sortPopoverRef.value || !sortTriggerRef.value) return;
			isSortPopoverOpen.value = !isSortPopoverOpen.value;
			sortPopoverRef.value.toggle(event, sortTriggerRef.value.$el);
		}
		function closeSortPopover() {
			isSortPopoverOpen.value = false;
			sortPopoverRef.value?.hide();
		}
		function handleSortSelected(item) {
			sortSelected.value = item.id;
			closeSortPopover();
		}
		const ownershipPopoverRef = useTemplateRef("ownershipPopoverRef");
		const ownershipTriggerRef = useTemplateRef("ownershipTriggerRef");
		const isOwnershipPopoverOpen = ref(false);
		function toggleOwnershipPopover(event) {
			if (!ownershipPopoverRef.value || !ownershipTriggerRef.value) return;
			isOwnershipPopoverOpen.value = !isOwnershipPopoverOpen.value;
			ownershipPopoverRef.value.toggle(event, ownershipTriggerRef.value.$el);
		}
		function closeOwnershipPopover() {
			isOwnershipPopoverOpen.value = false;
			ownershipPopoverRef.value?.hide();
		}
		function handleOwnershipSelected(item) {
			ownershipSelected.value = item.value;
			closeOwnershipPopover();
		}
		const baseModelPopoverRef = useTemplateRef("baseModelPopoverRef");
		const baseModelTriggerRef = useTemplateRef("baseModelTriggerRef");
		const isBaseModelPopoverOpen = ref(false);
		function toggleBaseModelPopover(event) {
			if (!baseModelPopoverRef.value || !baseModelTriggerRef.value) return;
			isBaseModelPopoverOpen.value = !isBaseModelPopoverOpen.value;
			baseModelPopoverRef.value.toggle(event, baseModelTriggerRef.value.$el);
		}
		function toggleBaseModelSelection(item) {
			const current = new Set(baseModelSelected.value);
			baseModelSelected.value = current.has(item.value) ? new Set([...current].filter((v) => v !== item.value)) : new Set([...current, item.value]);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [
				createVNode(FormSearchInput_default, {
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					autofocus: "",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "hover:outline-component-node-widget-background-highlighted/80", "focus-within:ring-0 focus-within:outline-component-node-widget-background-highlighted/80"))
				}, null, 8, ["modelValue", "class"]),
				createVNode(Button_default, {
					ref_key: "sortTriggerRef",
					ref: sortTriggerRef,
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleSortPopover
				}, {
					default: withCtx(() => [sortSelected.value !== "default" ? (openBlock(), createElementBlock("div", _hoisted_2$3)) : createCommentVNode("", true), _cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--arrow-up-down] size-4" }, null, -1))]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(script$1), {
					ref_key: "sortPopoverRef",
					ref: sortPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					"append-to": unref(overlayProps).appendTo,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[1] || (_cache[1] = ($event) => isSortPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortOptions, (item) => {
						return openBlock(), createBlock(Button_default, {
							key: item.name,
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: ($event) => handleSortSelected(item)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), sortSelected.value === item.id ? (openBlock(), createElementBlock("i", _hoisted_3$2)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)]),
					_: 1
				}, 8, ["append-to"]),
				_ctx.showOwnershipFilter && _ctx.ownershipOptions?.length ? (openBlock(), createBlock(Button_default, {
					key: 0,
					ref_key: "ownershipTriggerRef",
					ref: ownershipTriggerRef,
					"aria-label": unref(t)("assetBrowser.ownership"),
					title: unref(t)("assetBrowser.ownership"),
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleOwnershipPopover
				}, {
					default: withCtx(() => [ownershipSelected.value !== "all" ? (openBlock(), createElementBlock("div", _hoisted_4$1)) : createCommentVNode("", true), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--user] size-4" }, null, -1))]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				])) : createCommentVNode("", true),
				createVNode(unref(script$1), {
					ref_key: "ownershipPopoverRef",
					ref: ownershipPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					"append-to": unref(overlayProps).appendTo,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[2] || (_cache[2] = ($event) => isOwnershipPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.ownershipOptions, (item) => {
						return openBlock(), createBlock(Button_default, {
							key: item.value,
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: ($event) => handleOwnershipSelected(item)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), ownershipSelected.value === item.value ? (openBlock(), createElementBlock("i", _hoisted_5$1)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)]),
					_: 1
				}, 8, ["append-to"]),
				_ctx.showBaseModelFilter && _ctx.baseModelOptions?.length ? (openBlock(), createBlock(Button_default, {
					key: 1,
					ref_key: "baseModelTriggerRef",
					ref: baseModelTriggerRef,
					"aria-label": unref(t)("assetBrowser.baseModel"),
					title: unref(t)("assetBrowser.baseModel"),
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleBaseModelPopover
				}, {
					default: withCtx(() => [baseModelSelected.value.size > 0 ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true), _cache[9] || (_cache[9] = createBaseVNode("i", { class: "icon-[comfy--ai-model] size-4" }, null, -1))]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				])) : createCommentVNode("", true),
				createVNode(unref(script$1), {
					ref_key: "baseModelPopoverRef",
					ref: baseModelPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					"append-to": unref(overlayProps).appendTo,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[4] || (_cache[4] = ($event) => isBaseModelPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.baseModelOptions, (item) => {
							return openBlock(), createBlock(Button_default, {
								key: item.value,
								variant: "textonly",
								size: "unset",
								class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
								onClick: ($event) => toggleBaseModelSelection(item)
							}, {
								default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), baseModelSelected.value.has(item.value) ? (openBlock(), createElementBlock("i", _hoisted_7)) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["class", "onClick"]);
						}), 128)),
						_cache[10] || (_cache[10] = createBaseVNode("span", { class: "h-0 w-full border-b border-border-default" }, null, -1)),
						createVNode(Button_default, {
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: _cache[3] || (_cache[3] = ($event) => baseModelSelected.value = /* @__PURE__ */ new Set())
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.clearFilters")), 1)]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					_: 1
				}, 8, ["append-to"]),
				createBaseVNode("div", { class: normalizeClass(unref(cn)(unref(actionButtonStyle), "flex items-center justify-center gap-1 p-1 hover:outline-component-node-widget-background-highlighted")) }, [createVNode(Button_default, {
					variant: "textonly",
					size: "unset",
					class: normalizeClass(unref(cn)(layoutSwitchItemStyle, layoutMode.value === "list" && "bg-neutral-500/50 text-base-foreground")),
					onClick: _cache[5] || (_cache[5] = ($event) => layoutMode.value = "list")
				}, {
					default: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("i", { class: "icon-[lucide--list] size-4" }, null, -1)])),
					_: 1
				}, 8, ["class"]), createVNode(Button_default, {
					variant: "textonly",
					size: "unset",
					class: normalizeClass(unref(cn)(layoutSwitchItemStyle, layoutMode.value === "grid" && "bg-neutral-500/50 text-base-foreground")),
					onClick: _cache[6] || (_cache[6] = ($event) => layoutMode.value = "grid")
				}, {
					default: withCtx(() => _cache[12] || (_cache[12] = [createBaseVNode("i", { class: "icon-[lucide--layout-grid] size-4" }, null, -1)])),
					_: 1
				}, 8, ["class"])], 2)
			]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "text-secondary mb-4 flex justify-start gap-1 px-4" };
var _hoisted_2$2 = ["disabled", "onClick"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuFilter.vue
var FormDropdownMenuFilter_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuFilter",
	props: /* @__PURE__ */ mergeModels({ filterOptions: {} }, {
		"filterSelected": {},
		"filterSelectedModifiers": {}
	}),
	emits: ["update:filterSelected"],
	setup(__props) {
		const filterSelected = useModel(__props, "filterSelected");
		const { isUploadButtonEnabled, showUploadDialog } = useModelUpload();
		const singleFilterOption = computed(() => __props.filterOptions.length === 1);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filterOptions, (option) => {
				return openBlock(), createElementBlock("button", {
					key: option.value,
					type: "button",
					disabled: singleFilterOption.value,
					class: normalizeClass(unref(cn)("inline-flex appearance-none items-center justify-center rounded-md border-0 px-4 py-2 text-base-foreground select-none", !singleFilterOption.value && "cursor-pointer transition-all duration-150 hover:bg-interface-menu-component-surface-hovered hover:text-base-foreground active:scale-95", !singleFilterOption.value && filterSelected.value === option.value ? "bg-interface-menu-component-surface-selected! text-base-foreground" : "bg-transparent")),
					onClick: ($event) => filterSelected.value = option.value
				}, toDisplayString(option.name), 11, _hoisted_2$2);
			}), 128)), unref(isUploadButtonEnabled) && singleFilterOption.value ? (openBlock(), createBlock(Button_default, {
				key: 0,
				class: "ml-auto",
				size: "md",
				variant: "textonly",
				onClick: unref(showUploadDialog)
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--folder-input]" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("g.import")), 1)]),
				_: 1
			}, 8, ["onClick"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/types.ts
var AssetKindKey = Symbol("assetKind");
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "absolute top-1 left-1 size-4 rounded-full border border-base-foreground bg-primary-background"
};
var _hoisted_2$1 = ["src"];
var _hoisted_3$1 = ["src", "alt"];
var _hoisted_4 = {
	key: 3,
	class: "size-full bg-linear-to-tr from-blue-400 via-teal-500 to-green-400"
};
var _hoisted_5 = {
	key: 0,
	class: "text-secondary block text-xs"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuItem.vue
var FormDropdownMenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuItem",
	props: {
		index: {},
		selected: { type: Boolean },
		previewUrl: {},
		name: {},
		label: {},
		layout: {}
	},
	emits: ["click", "mediaLoad"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const actualDimensions = ref(null);
		const assetKind = inject(AssetKindKey);
		const isVideo = computed(() => assetKind?.value === "video");
		function handleClick() {
			emit("click", props.index);
		}
		function handleImageLoad(event) {
			emit("mediaLoad", event);
			if (!event.target || !(event.target instanceof HTMLImageElement)) return;
			const img = event.target;
			if (img.naturalWidth && img.naturalHeight) actualDimensions.value = `${img.naturalWidth} x ${img.naturalHeight}`;
		}
		function handleVideoLoad(event) {
			emit("mediaLoad", event);
			if (!event.target || !(event.target instanceof HTMLVideoElement)) return;
			const video = event.target;
			if (video.videoWidth && video.videoHeight) actualDimensions.value = `${video.videoWidth} x ${video.videoHeight}`;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(unref(cn)("group/item flex cursor-pointer gap-1 bg-component-node-widget-background select-none", "transition-[transform,box-shadow,background-color] duration-150", {
					"flex-col text-center": _ctx.layout === "grid",
					"max-h-16 flex-row rounded-lg text-left hover:scale-102 active:scale-98": _ctx.layout === "list",
					"flex-row rounded-lg text-left hover:bg-component-node-widget-background-hovered": _ctx.layout === "list-small",
					"ring-2 ring-component-node-widget-background-highlighted": _ctx.layout === "list" && _ctx.selected
				})),
				onClick: handleClick
			}, [_ctx.layout !== "list-small" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)("relative", "aspect-square w-full overflow-hidden outline-1 -outline-offset-1 outline-interface-stroke", "transition-[transform,box-shadow] duration-150", {
					"max-w-16 min-w-16 rounded-l-lg": _ctx.layout === "list",
					"rounded-sm group-hover/item:scale-108 group-active/item:scale-95": _ctx.layout === "grid",
					"ring-2 ring-component-node-widget-background-highlighted": _ctx.layout === "grid" && _ctx.selected
				}))
			}, [_ctx.selected ? (openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "bold icon-[lucide--check] size-3 translate-y-[-0.5px] text-base-foreground" }, null, -1)]))) : createCommentVNode("", true), _ctx.previewUrl && isVideo.value ? (openBlock(), createElementBlock("video", {
				key: 1,
				src: _ctx.previewUrl,
				class: "size-full object-cover",
				preload: "metadata",
				muted: "",
				onLoadeddata: handleVideoLoad
			}, null, 40, _hoisted_2$1)) : _ctx.previewUrl ? (openBlock(), createElementBlock("img", {
				key: 2,
				src: _ctx.previewUrl,
				alt: _ctx.name,
				draggable: "false",
				class: "size-full object-cover",
				onLoad: handleImageLoad
			}, null, 40, _hoisted_3$1)) : (openBlock(), createElementBlock("div", _hoisted_4))], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref(cn)("flex gap-1", {
				"flex-col": _ctx.layout === "grid",
				"w-full min-w-0 flex-col justify-center px-4 py-1": _ctx.layout === "list",
				"w-full flex-row items-center justify-between p-2": _ctx.layout === "list-small"
			})) }, [withDirectives((openBlock(), createElementBlock("span", { class: normalizeClass(unref(cn)("line-clamp-2 block overflow-hidden text-xs wrap-break-word", "transition-colors duration-150", !!_ctx.selected && "text-base-foreground")) }, [createTextVNode(toDisplayString(_ctx.label ?? _ctx.name), 1)], 2)), [[_directive_tooltip, _ctx.layout === "grid" ? _ctx.label ?? _ctx.name : void 0]]), actualDimensions.value ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(actualDimensions.value), 1)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "flex h-[640px] w-103 flex-col rounded-lg bg-component-node-background pt-4 outline -outline-offset-1 outline-node-component-border",
	"data-capture-wheel": "true"
};
var _hoisted_2 = {
	key: 1,
	class: "flex h-50 items-center justify-center"
};
var _hoisted_3 = ["title", "aria-label"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenu.vue
var FormDropdownMenu_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenu",
	props: /* @__PURE__ */ mergeModels({
		items: {},
		isSelected: { type: Function },
		filterOptions: {},
		sortOptions: {},
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {}
	}, {
		"filterSelected": {},
		"filterSelectedModifiers": {},
		"layoutMode": {},
		"layoutModeModifiers": {},
		"sortSelected": {},
		"sortSelectedModifiers": {},
		"searchQuery": {},
		"searchQueryModifiers": {},
		"ownershipSelected": {},
		"ownershipSelectedModifiers": {},
		"baseModelSelected": {},
		"baseModelSelectedModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["item-click"], [
		"update:filterSelected",
		"update:layoutMode",
		"update:sortSelected",
		"update:searchQuery",
		"update:ownershipSelected",
		"update:baseModelSelected"
	]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const filterSelected = useModel(__props, "filterSelected");
		const layoutMode = useModel(__props, "layoutMode");
		const sortSelected = useModel(__props, "sortSelected");
		const searchQuery = useModel(__props, "searchQuery");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const LAYOUT_CONFIGS = {
			grid: {
				maxColumns: 4,
				itemHeight: 120,
				itemWidth: 89,
				gap: "var(--spacing-4) var(--spacing-2)"
			},
			list: {
				maxColumns: 1,
				itemHeight: 64,
				itemWidth: 380,
				gap: "var(--spacing-2)"
			},
			"list-small": {
				maxColumns: 1,
				itemHeight: 40,
				itemWidth: 380,
				gap: "var(--spacing-1)"
			}
		};
		const layoutConfig = computed(() => LAYOUT_CONFIGS[layoutMode.value ?? "grid"]);
		const gridStyle = computed(() => ({
			display: "grid",
			gap: layoutConfig.value.gap,
			padding: "1rem",
			width: "100%"
		}));
		const virtualItems = computed(() => __props.items.map((item) => ({
			...item,
			key: String(item.id)
		})));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_ctx.filterOptions.length > 0 ? (openBlock(), createBlock(FormDropdownMenuFilter_default, {
					key: 0,
					"filter-selected": filterSelected.value,
					"onUpdate:filterSelected": _cache[0] || (_cache[0] = ($event) => filterSelected.value = $event),
					"filter-options": _ctx.filterOptions
				}, null, 8, ["filter-selected", "filter-options"])) : createCommentVNode("", true),
				createVNode(FormDropdownMenuActions_default, {
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[1] || (_cache[1] = ($event) => layoutMode.value = $event),
					"sort-selected": sortSelected.value,
					"onUpdate:sortSelected": _cache[2] || (_cache[2] = ($event) => sortSelected.value = $event),
					"search-query": searchQuery.value,
					"onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
					"ownership-selected": ownershipSelected.value,
					"onUpdate:ownershipSelected": _cache[4] || (_cache[4] = ($event) => ownershipSelected.value = $event),
					"base-model-selected": baseModelSelected.value,
					"onUpdate:baseModelSelected": _cache[5] || (_cache[5] = ($event) => baseModelSelected.value = $event),
					"sort-options": _ctx.sortOptions,
					"show-ownership-filter": _ctx.showOwnershipFilter,
					"ownership-options": _ctx.ownershipOptions,
					"show-base-model-filter": _ctx.showBaseModelFilter,
					"base-model-options": _ctx.baseModelOptions
				}, null, 8, [
					"layout-mode",
					"sort-selected",
					"search-query",
					"ownership-selected",
					"base-model-selected",
					"sort-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options"
				]),
				_ctx.items.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("i", {
					title: _ctx.$t("g.noItems"),
					"aria-label": _ctx.$t("g.noItems"),
					class: "icon-[lucide--circle-off] size-30 text-muted-foreground/20"
				}, null, 8, _hoisted_3)])) : (openBlock(), createBlock(VirtualGrid_default, {
					key: layoutMode.value,
					items: virtualItems.value,
					"grid-style": gridStyle.value,
					"max-columns": layoutConfig.value.maxColumns,
					"default-item-height": layoutConfig.value.itemHeight,
					"default-item-width": layoutConfig.value.itemWidth,
					"buffer-rows": 2,
					class: "mt-2 min-h-0 flex-1"
				}, {
					item: withCtx(({ item, index }) => [createVNode(FormDropdownMenuItem_default, {
						index,
						selected: _ctx.isSelected(item, index),
						"preview-url": item.preview_url ?? "",
						name: item.name,
						label: item.label,
						layout: layoutMode.value,
						onClick: ($event) => emit("item-click", item, index)
					}, null, 8, [
						"index",
						"selected",
						"preview-url",
						"name",
						"label",
						"layout",
						"onClick"
					])]),
					_: 1
				}, 8, [
					"items",
					"grid-style",
					"max-columns",
					"default-item-height",
					"default-item-width"
				]))
			]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/shared.ts
async function defaultSearcher(query, items) {
	if (query.trim() === "") return items;
	const words = query.trim().toLowerCase().split(" ");
	return items.filter((item) => {
		const name = item.name.toLowerCase();
		const label = item.label?.toLowerCase() ?? "";
		return words.every((word) => name.includes(word) || label.includes(word));
	});
}
/**
* Create a SortOption that delegates to the shared sortAssets utility
*/
function createSortOption(id, name) {
	return {
		id,
		name,
		sorter: ({ items }) => sortAssets(items, id)
	};
}
function getDefaultSortOptions() {
	return [createSortOption("default", t("assetBrowser.sortDefault")), createSortOption("name-asc", t("assetBrowser.sortAZ"))];
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdown.vue
var FormDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdown",
	props: /* @__PURE__ */ mergeModels({
		items: {},
		displayItems: {},
		placeholder: {},
		multiple: {
			type: [Boolean, Number],
			default: false
		},
		uploadable: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		accept: {},
		filterOptions: { default: () => [] },
		sortOptions: { default: () => getDefaultSortOptions() },
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {},
		isSelected: {
			type: Function,
			default: (selected, item, _index) => selected.has(item.id)
		},
		searcher: {
			type: Function,
			default: defaultSearcher
		}
	}, {
		"selected": { default: () => /* @__PURE__ */ new Set() },
		"selectedModifiers": {},
		"filterSelected": { default: "" },
		"filterSelectedModifiers": {},
		"sortSelected": { default: "default" },
		"sortSelectedModifiers": {},
		"layoutMode": { default: "grid" },
		"layoutModeModifiers": {},
		"files": { default: () => [] },
		"filesModifiers": {},
		"searchQuery": { default: "" },
		"searchQueryModifiers": {},
		"ownershipSelected": { default: "all" },
		"ownershipSelectedModifiers": {},
		"baseModelSelected": { default: () => /* @__PURE__ */ new Set() },
		"baseModelSelectedModifiers": {},
		"isOpen": {
			type: Boolean,
			default: false
		},
		"isOpenModifiers": {}
	}),
	emits: [
		"update:selected",
		"update:filterSelected",
		"update:sortSelected",
		"update:layoutMode",
		"update:files",
		"update:searchQuery",
		"update:ownershipSelected",
		"update:baseModelSelected",
		"update:isOpen"
	],
	setup(__props) {
		const { t } = useI18n();
		const overlayProps = useTransformCompatOverlayProps();
		const placeholderText = computed(() => __props.placeholder ?? t("widgets.uploadSelect.placeholder"));
		const selected = useModel(__props, "selected");
		const filterSelected = useModel(__props, "filterSelected");
		const sortSelected = useModel(__props, "sortSelected");
		const layoutMode = useModel(__props, "layoutMode");
		const files = useModel(__props, "files");
		const searchQuery = useModel(__props, "searchQuery");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const isOpen = useModel(__props, "isOpen");
		const toastStore = useToastStore();
		const popoverRef = ref();
		const triggerRef = useTemplateRef("triggerRef");
		const maxSelectable = computed(() => {
			if (__props.multiple === true) return Infinity;
			if (typeof __props.multiple === "number") return __props.multiple;
			return 1;
		});
		const debouncedSearchQuery = refDebounced(searchQuery, 250, { maxWait: 1e3 });
		const filteredItems = computedAsync(async (onCancel) => {
			if (!isOpen.value) return __props.items;
			let cleanupFn;
			onCancel(() => cleanupFn?.());
			return await __props.searcher(debouncedSearchQuery.value, __props.items, (cb) => {
				cleanupFn = cb;
			});
		}, __props.items);
		const defaultSorter = computed(() => {
			return __props.sortOptions.find((option) => option.id === "default")?.sorter || (({ items: i }) => i.slice());
		});
		const selectedSorter = computed(() => {
			if (sortSelected.value === "default") return defaultSorter.value;
			return __props.sortOptions.find((option) => option.id === sortSelected.value)?.sorter || defaultSorter.value;
		});
		const sortedItems = computed(() => {
			if (!isOpen.value) return __props.items;
			return selectedSorter.value({ items: filteredItems.value }) || [];
		});
		function internalIsSelected(item, index) {
			return __props.isSelected(selected.value, item, index);
		}
		const toggleDropdown = (event) => {
			if (__props.disabled) return;
			if (popoverRef.value && triggerRef.value) {
				popoverRef.value.toggle?.(event, triggerRef.value);
				isOpen.value = !isOpen.value;
			}
		};
		const closeDropdown = () => {
			if (popoverRef.value) {
				popoverRef.value.hide?.();
				isOpen.value = false;
			}
		};
		function handleFileChange(event) {
			if (__props.disabled) return;
			const target = event.target;
			if (!(target instanceof HTMLInputElement)) return;
			if (target.files) files.value = Array.from(target.files);
			target.value = "";
		}
		function handleSelection(item, index) {
			if (__props.disabled) return;
			const sel = selected.value;
			if (internalIsSelected(item, index)) sel.delete(item.id);
			else if (sel.size < maxSelectable.value) sel.add(item.id);
			else if (maxSelectable.value === 1) {
				sel.clear();
				sel.add(item.id);
			} else {
				toastStore.addAlert(t("widgets.uploadSelect.maxSelectionReached"));
				return;
			}
			selected.value = new Set(sel);
			if (maxSelectable.value === 1) closeDropdown();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "triggerRef",
				ref: triggerRef
			}, [createVNode(FormDropdownInput_default, {
				files: files.value,
				"is-open": isOpen.value,
				placeholder: placeholderText.value,
				items: _ctx.items,
				"display-items": _ctx.displayItems,
				"max-selectable": maxSelectable.value,
				selected: selected.value,
				uploadable: _ctx.uploadable,
				disabled: _ctx.disabled,
				accept: _ctx.accept,
				onSelectClick: toggleDropdown,
				onFileChange: handleFileChange
			}, null, 8, [
				"files",
				"is-open",
				"placeholder",
				"items",
				"display-items",
				"max-selectable",
				"selected",
				"uploadable",
				"disabled",
				"accept"
			]), createVNode(unref(script$1), {
				ref_key: "popoverRef",
				ref: popoverRef,
				dismissable: true,
				"close-on-escape": true,
				"append-to": unref(overlayProps).appendTo,
				unstyled: "",
				pt: {
					root: { class: "absolute z-50" },
					content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
				},
				onHide: _cache[6] || (_cache[6] = ($event) => isOpen.value = false)
			}, {
				default: withCtx(() => [createVNode(FormDropdownMenu_default, {
					"filter-selected": filterSelected.value,
					"onUpdate:filterSelected": _cache[0] || (_cache[0] = ($event) => filterSelected.value = $event),
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[1] || (_cache[1] = ($event) => layoutMode.value = $event),
					"sort-selected": sortSelected.value,
					"onUpdate:sortSelected": _cache[2] || (_cache[2] = ($event) => sortSelected.value = $event),
					"search-query": searchQuery.value,
					"onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
					"ownership-selected": ownershipSelected.value,
					"onUpdate:ownershipSelected": _cache[4] || (_cache[4] = ($event) => ownershipSelected.value = $event),
					"base-model-selected": baseModelSelected.value,
					"onUpdate:baseModelSelected": _cache[5] || (_cache[5] = ($event) => baseModelSelected.value = $event),
					"filter-options": _ctx.filterOptions,
					"sort-options": _ctx.sortOptions,
					"show-ownership-filter": _ctx.showOwnershipFilter,
					"ownership-options": _ctx.ownershipOptions,
					"show-base-model-filter": _ctx.showBaseModelFilter,
					"base-model-options": _ctx.baseModelOptions,
					disabled: _ctx.disabled,
					items: sortedItems.value,
					"is-selected": internalIsSelected,
					"max-selectable": maxSelectable.value,
					onClose: closeDropdown,
					onItemClick: handleSelection
				}, null, 8, [
					"filter-selected",
					"layout-mode",
					"sort-selected",
					"search-query",
					"ownership-selected",
					"base-model-selected",
					"filter-options",
					"sort-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options",
					"disabled",
					"items",
					"max-selectable"
				])]),
				_: 1
			}, 8, ["append-to"])], 512);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useAssetWidgetData.ts
/**
* Composable for fetching and transforming asset data for Vue node widgets.
* Provides reactive asset data based on node type with automatic category detection.
* Uses store-based caching to avoid duplicate fetches across multiple instances.
*
* Cloud-only composable - returns empty data when not in cloud environment.
*
* @param nodeType - ComfyUI node type (ref, getter, or plain value). Can be undefined.
*   Accepts: ref('CheckpointLoaderSimple'), () => 'CheckpointLoaderSimple', or 'CheckpointLoaderSimple'
* @returns Reactive data including category, assets, dropdown items, loading state, and errors
*/
function useAssetWidgetData(nodeType) {
	if (isCloud) {
		const assetsStore = useAssetsStore();
		const modelToNodeStore = useModelToNodeStore();
		const category = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? modelToNodeStore.getCategoryForNodeType(resolvedType) : void 0;
		});
		const assets = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.getAssets(resolvedType) ?? [] : [];
		});
		const isLoading = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.isModelLoading(resolvedType) : false;
		});
		const error = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.getError(resolvedType) ?? null : null;
		});
		watch(() => toValue(nodeType), async (currentNodeType) => {
			if (!currentNodeType) return;
			const isLoading = assetsStore.isModelLoading(currentNodeType);
			const hasBeenInitialized = assetsStore.hasAssetKey(currentNodeType);
			if (!isLoading && !hasBeenInitialized) await assetsStore.updateModelsForNodeType(currentNodeType);
		}, { immediate: true });
		return {
			category,
			assets,
			isLoading,
			error
		};
	}
	return {
		category: computed(() => void 0),
		assets: computed(() => []),
		isLoading: computed(() => false),
		error: computed(() => null)
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDropdown.vue
var WidgetSelectDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelectDropdown",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		nodeType: {},
		assetKind: {},
		allowUpload: { type: Boolean },
		uploadFolder: {},
		uploadSubfolder: {},
		isAssetMode: { type: Boolean },
		defaultLayoutMode: {}
	}, {
		"modelValue": { default(props) {
			const values = props.widget.options?.values;
			return (Array.isArray(values) ? values[0] : void 0) ?? "";
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		provide(AssetKindKey, computed(() => props.assetKind));
		const modelValue = useModel(__props, "modelValue");
		const { t } = useI18n();
		const toastStore = useToastStore();
		const outputMediaAssets = useMediaAssets("output");
		const transformCompatProps = useTransformCompatOverlayProps();
		const combinedProps = computed(() => ({
			...filterWidgetProps(props.widget.options, PANEL_EXCLUDED_PROPS),
			...transformCompatProps.value
		}));
		const getAssetData = () => {
			const nodeType = props.widget.options?.nodeType ?? props.nodeType;
			if (props.isAssetMode && nodeType) return useAssetWidgetData(toRef(nodeType));
			return null;
		};
		const assetData = getAssetData();
		const filterSelected = ref("all");
		const filterOptions = computed(() => {
			if (props.isAssetMode) return [{
				name: capitalize(assetData?.category.value ?? "All"),
				value: "all"
			}];
			return [
				{
					name: "All",
					value: "all"
				},
				{
					name: "Inputs",
					value: "inputs"
				},
				{
					name: "Outputs",
					value: "outputs"
				}
			];
		});
		const ownershipSelected = ref("all");
		const showOwnershipFilter = computed(() => props.isAssetMode);
		const { ownershipOptions, availableBaseModels } = useAssetFilterOptions(() => assetData?.assets.value ?? []);
		const baseModelSelected = ref(/* @__PURE__ */ new Set());
		const showBaseModelFilter = computed(() => props.isAssetMode);
		const baseModelOptions = computed(() => {
			if (!props.isAssetMode || !assetData) return [];
			return availableBaseModels.value;
		});
		const selectedSet = ref(/* @__PURE__ */ new Set());
		/**
		* Transforms a value using getOptionLabel if available.
		* Falls back to the original value if getOptionLabel is not provided,
		* returns undefined/null, or throws an error.
		*/
		function getDisplayLabel(value) {
			const getOptionLabel = props.widget.options?.getOptionLabel;
			if (!getOptionLabel) return value;
			try {
				return getOptionLabel(value) || value;
			} catch (e) {
				console.error("Failed to map value:", e);
				return value;
			}
		}
		const inputItems = computed(() => {
			const values = props.widget.options?.values || [];
			if (!Array.isArray(values)) return [];
			return values.map((value, index) => ({
				id: `input-${index}`,
				preview_url: getMediaUrl(String(value), "input"),
				name: String(value),
				label: getDisplayLabel(String(value))
			}));
		});
		function assetKindToMediaType(kind) {
			return kind === "mesh" ? "3D" : kind;
		}
		/**
		* Per-job cache of resolved outputs for multi-output jobs.
		* Keyed by jobId, populated lazily via resolveOutputAssetItems which
		* fetches full outputs through getJobDetail (itself LRU-cached).
		*/
		const resolvedByJobId = shallowRef(/* @__PURE__ */ new Map());
		const pendingJobIds = /* @__PURE__ */ new Set();
		watch(() => outputMediaAssets.media.value, (assets, _, onCleanup) => {
			let cancelled = false;
			onCleanup(() => {
				cancelled = true;
			});
			pendingJobIds.clear();
			for (const asset of assets) {
				const meta = getOutputAssetMetadata(asset.user_metadata);
				if (!meta) continue;
				if ((meta.outputCount ?? meta.allOutputs?.length ?? 0) <= 1 || resolvedByJobId.value.has(meta.jobId) || pendingJobIds.has(meta.jobId)) continue;
				pendingJobIds.add(meta.jobId);
				resolveOutputAssetItems(meta, { createdAt: asset.created_at }).then((resolved) => {
					if (cancelled || !resolved.length) return;
					const next = new Map(resolvedByJobId.value);
					next.set(meta.jobId, resolved);
					resolvedByJobId.value = next;
				}).catch((error) => {
					console.warn("Failed to resolve multi-output job", meta.jobId, error);
				}).finally(() => {
					pendingJobIds.delete(meta.jobId);
				});
			}
		}, { immediate: true });
		const outputItems = computed(() => {
			if (![
				"image",
				"video",
				"audio",
				"mesh"
			].includes(props.assetKind ?? "")) return [];
			const targetMediaType = assetKindToMediaType(props.assetKind);
			const seen = /* @__PURE__ */ new Set();
			const items = [];
			const assets = outputMediaAssets.media.value.flatMap((asset) => {
				const meta = getOutputAssetMetadata(asset.user_metadata);
				return (meta ? resolvedByJobId.value.get(meta.jobId) : void 0) ?? [asset];
			});
			for (const asset of assets) {
				if (getMediaTypeFromFilename(asset.name) !== targetMediaType) continue;
				if (seen.has(asset.id)) continue;
				seen.add(asset.id);
				const annotatedPath = `${asset.name} [output]`;
				items.push({
					id: `output-${annotatedPath}`,
					preview_url: asset.preview_url || getMediaUrl(asset.name, "output"),
					name: annotatedPath,
					label: getDisplayLabel(annotatedPath)
				});
			}
			return items;
		});
		/**
		* Creates a fallback item for the current modelValue when it doesn't exist
		* in the available items list. This handles cases like template-loaded nodes
		* where the saved value may not exist in the current server environment.
		* Works for both local mode (inputItems/outputItems) and cloud mode (assetData).
		*/
		const missingValueItem = computed(() => {
			const currentValue = modelValue.value;
			if (!currentValue) return void 0;
			if (props.isAssetMode && assetData) {
				if (assetData.assets.value.some((asset) => getAssetFilename(asset) === currentValue)) return void 0;
				return {
					id: `missing-${currentValue}`,
					preview_url: "",
					name: currentValue,
					label: getDisplayLabel(currentValue)
				};
			}
			const existsInInputs = inputItems.value.some((item) => item.name === currentValue);
			const existsInOutputs = outputItems.value.some((item) => item.name === currentValue);
			if (existsInInputs || existsInOutputs) return void 0;
			const isOutput = currentValue.endsWith(" [output]");
			const strippedValue = isOutput ? currentValue.replace(" [output]", "") : currentValue;
			return {
				id: `missing-${currentValue}`,
				preview_url: getMediaUrl(strippedValue, isOutput ? "output" : "input"),
				name: currentValue,
				label: getDisplayLabel(currentValue)
			};
		});
		/**
		* Transforms AssetItem[] to FormDropdownItem[] for cloud mode.
		* Uses getAssetFilename for display name, asset.name for label.
		*/
		const assetItems = computed(() => {
			if (!props.isAssetMode || !assetData) return [];
			return assetData.assets.value.map((asset) => ({
				id: asset.id,
				name: getAssetFilename(asset),
				label: getAssetDisplayName(asset),
				preview_url: asset.preview_url,
				is_immutable: asset.is_immutable,
				base_models: getAssetBaseModels(asset)
			}));
		});
		const ownershipFilteredAssetItems = computed(() => filterItemByOwnership(assetItems.value, ownershipSelected.value));
		const baseModelFilteredAssetItems = computed(() => filterItemByBaseModels(ownershipFilteredAssetItems.value, baseModelSelected.value));
		const allItems = computed(() => {
			if (props.isAssetMode && assetData) return baseModelFilteredAssetItems.value;
			return [
				...missingValueItem.value ? [missingValueItem.value] : [],
				...inputItems.value,
				...outputItems.value
			];
		});
		const dropdownItems = computed(() => {
			if (props.isAssetMode) return allItems.value;
			switch (filterSelected.value) {
				case "inputs": return inputItems.value;
				case "outputs": return outputItems.value;
				default: return allItems.value;
			}
		});
		/**
		* Items used for display in the input field. In cloud mode, includes
		* missing items so users can see their selected value even if not in library.
		*/
		const displayItems = computed(() => {
			if (props.isAssetMode && assetData && missingValueItem.value) return [missingValueItem.value, ...baseModelFilteredAssetItems.value];
			return dropdownItems.value;
		});
		const mediaPlaceholder = computed(() => {
			const options = props.widget.options;
			if (options?.placeholder) return options.placeholder;
			switch (props.assetKind) {
				case "image": return t("widgets.uploadSelect.placeholderImage");
				case "video": return t("widgets.uploadSelect.placeholderVideo");
				case "audio": return t("widgets.uploadSelect.placeholderAudio");
				case "mesh": return t("widgets.uploadSelect.placeholderMesh");
				case "model": return t("widgets.uploadSelect.placeholderModel");
				case "unknown": return t("widgets.uploadSelect.placeholderUnknown");
			}
			return t("widgets.uploadSelect.placeholder");
		});
		const uploadable = computed(() => {
			if (props.isAssetMode) return false;
			return props.allowUpload === true;
		});
		const acceptTypes = computed(() => {
			switch (props.assetKind) {
				case "image": return "image/*";
				case "video": return "video/*";
				case "audio": return "audio/*";
				case "mesh": return SUPPORTED_EXTENSIONS_ACCEPT;
				default: return;
			}
		});
		const layoutMode = ref(props.defaultLayoutMode ?? "grid");
		watch([modelValue, displayItems], ([currentValue]) => {
			if (currentValue === void 0) {
				selectedSet.value.clear();
				return;
			}
			const item = displayItems.value.find((item) => item.name === currentValue);
			if (!item) {
				selectedSet.value.clear();
				return;
			}
			selectedSet.value.clear();
			selectedSet.value.add(item.id);
		}, { immediate: true });
		function updateSelectedItems(selectedItems) {
			let id = void 0;
			if (selectedItems.size > 0) id = selectedItems.values().next().value;
			if (id == null) {
				modelValue.value = void 0;
				return;
			}
			const name = dropdownItems.value.find((item) => item.id === id)?.name;
			if (!name) {
				modelValue.value = void 0;
				return;
			}
			modelValue.value = name;
			useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
		}
		const uploadFile = async (file, isPasted = false, formFields = {}) => {
			const body = new FormData();
			body.append("image", file);
			if (isPasted) body.append("subfolder", "pasted");
			else if (props.uploadSubfolder) body.append("subfolder", props.uploadSubfolder);
			if (formFields.type) body.append("type", formFields.type);
			const resp = await api.fetchApi("/upload/image", {
				method: "POST",
				body
			});
			if (resp.status !== 200) {
				toastStore.addAlert(resp.status + " - " + resp.statusText);
				return null;
			}
			const data = await resp.json();
			if (formFields.type === "input" || !formFields.type && !isPasted) await useAssetsStore().updateInputs();
			return data.subfolder ? `${data.subfolder}/${data.name}` : data.name;
		};
		const uploadFiles = async (files) => {
			const folder = props.uploadFolder ?? "input";
			const uploadPromises = files.map((file) => uploadFile(file, false, { type: folder }));
			return (await Promise.all(uploadPromises)).filter((path) => path !== null);
		};
		async function handleFilesUpdate(files) {
			if (!files || files.length === 0) return;
			try {
				const uploadedPaths = await uploadFiles(files);
				if (uploadedPaths.length === 0) {
					toastStore.addAlert("File upload failed");
					return;
				}
				const values = props.widget.options?.values;
				if (Array.isArray(values)) uploadedPaths.forEach((path) => {
					if (!values.includes(path)) values.push(path);
				});
				modelValue.value = uploadedPaths[0];
				if (props.widget.callback) props.widget.callback(uploadedPaths[0]);
				useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
			} catch (error) {
				console.error("Upload error:", error);
				toastStore.addAlert(`Upload failed: ${error}`);
			}
		}
		function getMediaUrl(filename, type = "input") {
			if (![
				"image",
				"video",
				"audio",
				"mesh"
			].includes(props.assetKind ?? "")) return "";
			const params = new URLSearchParams({
				filename,
				type
			});
			appendCloudResParam(params, filename);
			return `/api/view?${params}`;
		}
		function handleIsOpenUpdate(isOpen) {
			if (isOpen && !outputMediaAssets.loading.value) outputMediaAssets.refresh();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: _ctx.widget }, {
				default: withCtx(() => [createVNode(FormDropdown_default, mergeProps({
					selected: selectedSet.value,
					"onUpdate:selected": _cache[0] || (_cache[0] = ($event) => selectedSet.value = $event),
					"filter-selected": filterSelected.value,
					"onUpdate:filterSelected": _cache[1] || (_cache[1] = ($event) => filterSelected.value = $event),
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[2] || (_cache[2] = ($event) => layoutMode.value = $event),
					"ownership-selected": ownershipSelected.value,
					"onUpdate:ownershipSelected": _cache[3] || (_cache[3] = ($event) => ownershipSelected.value = $event),
					"base-model-selected": baseModelSelected.value,
					"onUpdate:baseModelSelected": _cache[4] || (_cache[4] = ($event) => baseModelSelected.value = $event),
					items: dropdownItems.value,
					"display-items": displayItems.value,
					placeholder: mediaPlaceholder.value,
					multiple: false,
					uploadable: uploadable.value,
					accept: acceptTypes.value,
					"filter-options": filterOptions.value,
					"show-ownership-filter": showOwnershipFilter.value,
					"ownership-options": unref(ownershipOptions),
					"show-base-model-filter": showBaseModelFilter.value,
					"base-model-options": baseModelOptions.value
				}, combinedProps.value, {
					class: "w-full",
					"onUpdate:selected": updateSelectedItems,
					"onUpdate:files": handleFilesUpdate,
					"onUpdate:isOpen": handleIsOpenUpdate
				}), null, 16, [
					"selected",
					"filter-selected",
					"layout-mode",
					"ownership-selected",
					"base-model-selected",
					"items",
					"display-items",
					"placeholder",
					"uploadable",
					"accept",
					"filter-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options"
				])]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelect.vue
var WidgetSelect_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelect",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		nodeType: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const comboSpec = computed(() => {
			if (props.widget.spec && isComboInputSpec(props.widget.spec)) return props.widget.spec;
		});
		const specDescriptor = computed(() => {
			const spec = comboSpec.value;
			if (!spec) return {
				kind: "unknown",
				allowUpload: false,
				folder: void 0,
				subfolder: void 0
			};
			const { image_upload, animated_image_upload, video_upload, image_folder, audio_upload, mesh_upload, upload_subfolder } = spec;
			let kind = "unknown";
			if (video_upload) kind = "video";
			else if (image_upload || animated_image_upload) kind = "image";
			else if (audio_upload) kind = "audio";
			else if (mesh_upload) kind = "mesh";
			return {
				kind,
				allowUpload: image_upload === true || animated_image_upload === true || video_upload === true || audio_upload === true || mesh_upload === true,
				folder: mesh_upload ? "input" : image_folder,
				subfolder: upload_subfolder
			};
		});
		const isAssetMode = computed(() => assetService.shouldUseAssetBrowser(props.nodeType, props.widget.name) || assetService.isAssetAPIEnabled() && props.widget.type === "asset");
		const assetKind = computed(() => specDescriptor.value.kind);
		const isDropdownUIWidget = computed(() => isAssetMode.value || assetKind.value !== "unknown");
		const allowUpload = computed(() => specDescriptor.value.allowUpload);
		const uploadFolder = computed(() => {
			return specDescriptor.value.folder ?? "input";
		});
		const uploadSubfolder = computed(() => specDescriptor.value.subfolder);
		const defaultLayoutMode = computed(() => {
			return isAssetMode.value ? "list" : "grid";
		});
		return (_ctx, _cache) => {
			return isDropdownUIWidget.value ? (openBlock(), createBlock(WidgetSelectDropdown_default, {
				key: 0,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				widget: _ctx.widget,
				"node-type": _ctx.widget.nodeType ?? _ctx.nodeType,
				"asset-kind": assetKind.value,
				"allow-upload": allowUpload.value,
				"upload-folder": uploadFolder.value,
				"upload-subfolder": uploadSubfolder.value,
				"is-asset-mode": isAssetMode.value,
				"default-layout-mode": defaultLayoutMode.value
			}, null, 8, [
				"modelValue",
				"widget",
				"node-type",
				"asset-kind",
				"allow-upload",
				"upload-folder",
				"upload-subfolder",
				"is-asset-mode",
				"default-layout-mode"
			])) : _ctx.widget.controlWidget ? (openBlock(), createBlock(WidgetWithControl_default, {
				key: 1,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				component: WidgetSelectDefault_default,
				widget: _ctx.widget
			}, null, 8, ["modelValue", "widget"])) : (openBlock(), createBlock(WidgetSelectDefault_default, {
				key: 2,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => modelValue.value = $event),
				widget: _ctx.widget
			}, null, 8, ["modelValue", "widget"]));
		};
	}
});
//#endregion
export { WidgetSelect_default as default };

//# sourceMappingURL=WidgetSelect-Bw7JfBfL.js.map