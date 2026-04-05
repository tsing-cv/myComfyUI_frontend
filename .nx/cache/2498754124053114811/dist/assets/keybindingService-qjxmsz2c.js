import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, It as toValue, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, et as openBlock, it as resolveComponent, j as createElementBlock, k as createBlock, nt as renderList, rt as renderSlot } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { B as DropdownMenuItem_default, F as DropdownMenuSeparator_default, H as DropdownMenuRoot_default, M as DropdownMenuSubTrigger_default, N as DropdownMenuSubContent_default, P as DropdownMenuSub_default, R as DropdownMenuPortal_default, V as DropdownMenuContent_default, W as DropdownMenuArrow_default, j as DropdownMenuTrigger_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Fi as KeybindingImpl, Ii as KeyComboImpl, Ni as useCommandStore, Pi as useKeybindingStore, a as useSettingStore } from "./dialogService-ClaKHdWI.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
//#region src/components/common/DropdownItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var _hoisted_2 = {
	key: 0,
	class: "icon-[lucide--check] shrink-0"
};
var _hoisted_3 = ["textContent"];
//#endregion
//#region src/components/common/DropdownItem.vue
var DropdownItem_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownItem",
	props: {
		itemClass: {},
		contentClass: {},
		item: {}
	},
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			const _component_DropdownItem = resolveComponent("DropdownItem", true);
			return _ctx.item.separator ? (openBlock(), createBlock(unref(DropdownMenuSeparator_default), {
				key: 0,
				class: "m-1 h-px bg-border-subtle"
			})) : _ctx.item.items ? (openBlock(), createBlock(unref(DropdownMenuSub_default), { key: 1 }, {
				default: withCtx(() => [createVNode(unref(DropdownMenuSubTrigger_default), {
					class: normalizeClass(_ctx.itemClass),
					disabled: toValue(_ctx.item.disabled) ?? !_ctx.item.items?.length
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.item.label) + " ", 1), _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ml-auto icon-[lucide--chevron-right]" }, null, -1))]),
					_: 1
				}, 8, ["class", "disabled"]), createVNode(unref(DropdownMenuPortal_default), null, {
					default: withCtx(() => [createVNode(unref(DropdownMenuSubContent_default), {
						class: normalizeClass(_ctx.contentClass),
						"side-offset": 2,
						"align-offset": -5
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.item.items, (subitem, index) => {
							return openBlock(), createBlock(_component_DropdownItem, {
								key: toValue(subitem.label) ?? index,
								item: subitem,
								"item-class": _ctx.itemClass,
								"content-class": _ctx.contentClass
							}, null, 8, [
								"item",
								"item-class",
								"content-class"
							]);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			})) : (openBlock(), createBlock(unref(DropdownMenuItem_default), {
				key: 2,
				class: normalizeClass(_ctx.itemClass),
				disabled: toValue(_ctx.item.disabled) ?? !_ctx.item.command,
				onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.item.command?.({
					originalEvent: $event,
					item: _ctx.item
				}))
			}, {
				default: withCtx(() => [
					createBaseVNode("i", { class: normalizeClass(["size-5 shrink-0", _ctx.item.icon]) }, null, 2),
					createBaseVNode("div", {
						class: "mr-auto truncate",
						textContent: toDisplayString(_ctx.item.label)
					}, null, 8, _hoisted_1),
					_ctx.item.checked ? (openBlock(), createElementBlock("i", _hoisted_2)) : _ctx.item.new ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: "flex shrink-0 items-center rounded-full bg-primary-background px-1 text-2xs leading-none font-bold",
						textContent: toDisplayString(unref(t)("contextMenu.new"))
					}, null, 8, _hoisted_3)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class", "disabled"]));
		};
	}
});
//#endregion
//#region src/components/common/DropdownMenu.vue
var DropdownMenu_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownMenu",
	props: {
		entries: {},
		icon: {},
		to: {},
		itemClass: {},
		contentClass: {},
		buttonSize: {},
		buttonClass: {}
	},
	setup(__props) {
		const itemClass = computed(() => cn("m-1 flex cursor-pointer items-center-safe gap-1 rounded-lg p-2 leading-none data-disabled:pointer-events-none data-disabled:text-muted-foreground data-highlighted:bg-secondary-background-hover", __props.itemClass));
		const contentClass = computed(() => cn("data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-1700 min-w-[220px] rounded-lg border border-border-subtle bg-base-background p-2 shadow-sm will-change-[opacity,transform]", __props.contentClass));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenuRoot_default), null, {
				default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "button", {}, () => [createVNode(Button_default, {
						size: _ctx.buttonSize ?? "icon",
						class: normalizeClass(_ctx.buttonClass)
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(_ctx.icon ?? "icon-[lucide--menu]") }, null, 2)]),
						_: 1
					}, 8, ["size", "class"])])]),
					_: 3
				}), createVNode(unref(DropdownMenuPortal_default), { to: _ctx.to }, {
					default: withCtx(() => [createVNode(unref(DropdownMenuContent_default), mergeProps({
						side: "bottom",
						"side-offset": 5,
						"collision-padding": 10
					}, _ctx.$attrs, { class: contentClass.value }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { itemClass: itemClass.value }, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.entries ?? [], (item, index) => {
							return openBlock(), createBlock(DropdownItem_default, {
								key: toValue(item.label) ?? index,
								"item-class": itemClass.value,
								"content-class": contentClass.value,
								item
							}, null, 8, [
								"item-class",
								"content-class",
								"item"
							]);
						}), 128))]), createVNode(unref(DropdownMenuArrow_default), { class: "fill-base-background stroke-border-subtle" })]),
						_: 3
					}, 16, ["class"])]),
					_: 3
				}, 8, ["to"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region src/platform/keybindings/defaults.ts
var CORE_KEYBINDINGS = [
	{
		combo: {
			ctrl: true,
			key: "Enter"
		},
		commandId: "Comfy.QueuePrompt"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "Enter"
		},
		commandId: "Comfy.QueuePromptFront"
	},
	{
		combo: {
			ctrl: true,
			alt: true,
			key: "Enter"
		},
		commandId: "Comfy.Interrupt"
	},
	{
		combo: { key: "r" },
		commandId: "Comfy.RefreshNodeDefinitions"
	},
	{
		combo: { key: "w" },
		commandId: "Workspace.ToggleSidebarTab.workflows"
	},
	{
		combo: { key: "n" },
		commandId: "Workspace.ToggleSidebarTab.node-library"
	},
	{
		combo: { key: "m" },
		commandId: "Workspace.ToggleSidebarTab.model-library"
	},
	{
		combo: { key: "a" },
		commandId: "Workspace.ToggleSidebarTab.assets"
	},
	{
		combo: {
			alt: true,
			key: "m"
		},
		commandId: "Comfy.ToggleLinear"
	},
	{
		combo: {
			alt: true,
			key: "µ"
		},
		commandId: "Comfy.ToggleLinear"
	},
	{
		combo: {
			key: "s",
			ctrl: true
		},
		commandId: "Comfy.SaveWorkflow"
	},
	{
		combo: {
			key: "o",
			ctrl: true
		},
		commandId: "Comfy.OpenWorkflow"
	},
	{
		combo: {
			key: "g",
			ctrl: true
		},
		commandId: "Comfy.Graph.GroupSelectedNodes"
	},
	{
		combo: {
			key: ",",
			ctrl: true
		},
		commandId: "Comfy.ShowSettingsDialog"
	},
	{
		combo: {
			key: "=",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "+",
			alt: true,
			shift: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "+",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "-",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomOut",
		targetElementId: "graph-canvas"
	},
	{
		combo: { key: "." },
		commandId: "Comfy.Canvas.FitView",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "p" },
		commandId: "Comfy.Canvas.ToggleSelected.Pin",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "c",
			alt: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "b",
			ctrl: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "m",
			ctrl: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Mute",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "`",
			ctrl: true
		},
		commandId: "Workspace.ToggleBottomPanelTab.logs-terminal"
	},
	{
		combo: {
			key: "e",
			ctrl: true,
			shift: true
		},
		commandId: "Comfy.Graph.ConvertToSubgraph"
	},
	{
		combo: {
			key: "m",
			alt: true,
			shift: true
		},
		commandId: "Comfy.Canvas.ToggleMinimap"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "k"
		},
		commandId: "Workspace.ToggleBottomPanel.Shortcuts"
	},
	{
		combo: { key: "v" },
		commandId: "Comfy.Canvas.Unlock"
	},
	{
		combo: { key: "h" },
		commandId: "Comfy.Canvas.Lock"
	},
	{
		combo: { key: "Escape" },
		commandId: "Comfy.Graph.ExitSubgraph"
	},
	{
		combo: {
			ctrl: true,
			key: "a"
		},
		commandId: "Comfy.Canvas.SelectAll",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "v"
		},
		commandId: "Comfy.Canvas.PasteFromClipboardWithConnect",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "Delete" },
		commandId: "Comfy.Canvas.DeleteSelectedItems",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "Backspace" },
		commandId: "Comfy.Canvas.DeleteSelectedItems",
		targetElementId: "graph-canvas-container"
	}
];
//#endregion
//#region src/platform/keybindings/keybindingService.ts
function useKeybindingService() {
	const keybindingStore = useKeybindingStore();
	const commandStore = useCommandStore();
	const settingStore = useSettingStore();
	const dialogStore = useDialogStore();
	async function keybindHandler(event) {
		const keyCombo = KeyComboImpl.fromEvent(event);
		if (keyCombo.isModifier) return;
		const target = event.composedPath()[0];
		if (keyCombo.isReservedByTextInput && (target.tagName === "TEXTAREA" || target.tagName === "INPUT" || target.contentEditable === "true" || target.tagName === "SPAN" && target.classList.contains("property_value"))) return;
		const keybinding = keybindingStore.getKeybinding(keyCombo);
		if (keybinding) {
			const targetElementId = keybinding.targetElementId === "graph-canvas" ? "graph-canvas-container" : keybinding.targetElementId;
			if (targetElementId) {
				if (!document.getElementById(targetElementId)?.contains(target)) return;
			}
			if (event.key === "Escape" && !event.ctrlKey && !event.altKey && !event.metaKey) {
				if (dialogStore.dialogStack.length > 0) return;
			}
			event.preventDefault();
			if (new Set([
				"Comfy.QueuePrompt",
				"Comfy.QueuePromptFront",
				"Comfy.QueueSelectedOutputNodes"
			]).has(keybinding.commandId)) await commandStore.execute(keybinding.commandId, { metadata: { trigger_source: "keybinding" } });
			else await commandStore.execute(keybinding.commandId);
			return;
		}
		if (event.ctrlKey || event.altKey || event.metaKey) return;
		if (event.key === "Escape") {
			const modals = document.querySelectorAll(".comfy-modal");
			for (const modal of modals) if (window.getComputedStyle(modal).getPropertyValue("display") !== "none") {
				modal.style.display = "none";
				break;
			}
			for (const d of document.querySelectorAll("dialog")) d.close();
		}
	}
	function registerCoreKeybindings() {
		for (const keybinding of CORE_KEYBINDINGS) {
			if (isCloud && keybinding.commandId === "Workspace.ToggleBottomPanelTab.logs-terminal") continue;
			keybindingStore.addDefaultKeybinding(new KeybindingImpl(keybinding));
		}
	}
	function registerUserKeybindings() {
		const unsetBindings = settingStore.get("Comfy.Keybinding.UnsetBindings");
		for (const keybinding of unsetBindings) keybindingStore.unsetKeybinding(new KeybindingImpl(keybinding));
		const newBindings = settingStore.get("Comfy.Keybinding.NewBindings");
		for (const keybinding of newBindings) {
			if (isCloud && keybinding.commandId === "Workspace.ToggleBottomPanelTab.logs-terminal") continue;
			keybindingStore.addUserKeybinding(new KeybindingImpl(keybinding));
		}
	}
	async function persistUserKeybindings() {
		await settingStore.setMany({
			"Comfy.Keybinding.NewBindings": Object.values(keybindingStore.getUserKeybindings()),
			"Comfy.Keybinding.UnsetBindings": Object.values(keybindingStore.getUserUnsetKeybindings())
		});
	}
	return {
		keybindHandler,
		registerCoreKeybindings,
		registerUserKeybindings,
		persistUserKeybindings
	};
}
//#endregion
export { DropdownMenu_default as n, useKeybindingService as t };

//# sourceMappingURL=keybindingService-qjxmsz2c.js.map