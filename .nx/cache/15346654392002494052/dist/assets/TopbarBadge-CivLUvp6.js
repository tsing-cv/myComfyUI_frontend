import "./rolldown-runtime-DBfy44LZ.js";
import { X as script } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, Ht as normalizeStyle, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, _t as withCtx, at as resolveDirective, et as openBlock, j as createElementBlock, kt as ref, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as cn } from "./src-ZLYFRbHY.js";
//#region src/components/topbar/TopbarBadge.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex max-w-xs min-w-40 flex-col gap-2 p-3" };
var _hoisted_2 = { class: "font-inter text-sm" };
var _hoisted_3 = {
	key: 1,
	class: "text-xs"
};
var _hoisted_4 = { class: "flex max-w-xs min-w-40 flex-col gap-2 p-3" };
var _hoisted_5 = { class: "font-inter text-sm" };
var _hoisted_6 = {
	key: 1,
	class: "text-xs"
};
var clickableClasses = "cursor-pointer transition-opacity hover:opacity-80";
//#endregion
//#region src/components/topbar/TopbarBadge.vue
var TopbarBadge_default = /* @__PURE__ */ defineComponent({
	__name: "TopbarBadge",
	props: {
		badge: {},
		displayMode: { default: "full" },
		reverseOrder: { type: Boolean },
		noPadding: { type: Boolean },
		backgroundColor: { default: "var(--comfy-menu-bg)" }
	},
	setup(__props) {
		const popover = ref();
		const togglePopover = (event) => {
			popover.value?.toggle(event);
		};
		const variant = computed(() => __props.badge.variant ?? "info");
		const menuBackgroundStyle = computed(() => ({ backgroundColor: __props.backgroundColor }));
		const labelClasses = computed(() => {
			switch (variant.value) {
				case "error": return "bg-danger-100 text-white";
				case "warning": return "bg-gold-600 text-black";
				default: return "bg-white text-black";
			}
		});
		const textClasses = computed(() => {
			switch (variant.value) {
				case "error": return "text-danger-100";
				case "warning": return "text-warning-background";
				default: return "text-text-primary";
			}
		});
		const iconColorClass = computed(() => textClasses.value);
		const iconClass = computed(() => {
			if (__props.badge.icon) return __props.badge.icon;
			switch (variant.value) {
				case "error": return "pi pi-exclamation-circle";
				case "warning": return "icon-[lucide--triangle-alert]";
				default: return;
			}
		});
		const dotClasses = computed(() => {
			switch (variant.value) {
				case "error": return "bg-danger-100";
				case "warning": return "bg-gold-600";
				default: return "bg-slate-100";
			}
		});
		const popoverPt = computed(() => ({
			root: { class: cn("absolute z-50") },
			content: { class: cn("mt-1 rounded-lg", "bg-base-background", "text-base-foreground", "shadow-lg", "border border-border-default") }
		}));
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return _ctx.displayMode === "icon-only" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["relative inline-flex h-full shrink-0 items-center justify-center px-2", clickableClasses]),
				style: normalizeStyle(menuBackgroundStyle.value),
				onClick: togglePopover
			}, [iconClass.value ? (openBlock(), createElementBlock("i", {
				key: 0,
				"data-testid": "badge-icon",
				class: normalizeClass([
					"shrink-0 text-base",
					iconClass.value,
					iconColorClass.value
				])
			}, null, 2)) : _ctx.badge.label ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-3xs font-semibold", labelClasses.value])
			}, toDisplayString(_ctx.badge.label), 3)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(["size-2 shrink-0 rounded-full", dotClasses.value])
			}, null, 2)), createVNode(unref(script), {
				ref_key: "popover",
				ref: popover,
				"append-to": "body",
				"auto-z-index": true,
				"base-z-index": 1e3,
				dismissable: true,
				"close-on-escape": true,
				unstyled: "",
				pt: popoverPt.value
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					_ctx.badge.label ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(["w-fit rounded-full px-1.5 py-0.5 text-3xs font-semibold", labelClasses.value])
					}, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.badge.text), 1),
					_ctx.badge.tooltip ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.badge.tooltip), 1)) : createCommentVNode("", true)
				])]),
				_: 1
			}, 8, ["pt"])], 4)) : _ctx.displayMode === "compact" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: "relative inline-flex h-full",
				style: normalizeStyle(menuBackgroundStyle.value)
			}, [createBaseVNode("div", {
				class: normalizeClass(["flex h-full shrink-0 items-center gap-2 whitespace-nowrap", [
					{ "flex-row-reverse": _ctx.reverseOrder },
					_ctx.noPadding ? "" : "px-3",
					clickableClasses
				]]),
				onClick: togglePopover
			}, [iconClass.value ? (openBlock(), createElementBlock("i", {
				key: 0,
				"data-testid": "badge-icon",
				class: normalizeClass([
					"shrink-0 text-base",
					iconClass.value,
					iconColorClass.value
				])
			}, null, 2)) : createCommentVNode("", true), _ctx.badge.label ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-3xs font-semibold", labelClasses.value])
			}, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true)], 2), createVNode(unref(script), {
				ref_key: "popover",
				ref: popover,
				"append-to": "body",
				"auto-z-index": true,
				"base-z-index": 1e3,
				dismissable: true,
				"close-on-escape": true,
				unstyled: "",
				pt: popoverPt.value
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_4, [
					_ctx.badge.label ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(["w-fit rounded-full px-1.5 py-0.5 text-3xs font-semibold", labelClasses.value])
					}, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.badge.text), 1),
					_ctx.badge.tooltip ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(_ctx.badge.tooltip), 1)) : createCommentVNode("", true)
				])]),
				_: 1
			}, 8, ["pt"])], 4)) : withDirectives((openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(["flex h-full shrink-0 items-center gap-2 whitespace-nowrap", [{ "flex-row-reverse": _ctx.reverseOrder }, _ctx.noPadding ? "" : "px-3"]]),
				style: normalizeStyle(menuBackgroundStyle.value)
			}, [
				iconClass.value ? (openBlock(), createElementBlock("i", {
					key: 0,
					"data-testid": "badge-icon",
					class: normalizeClass([
						"shrink-0 text-base",
						iconClass.value,
						iconColorClass.value
					])
				}, null, 2)) : createCommentVNode("", true),
				_ctx.badge.label ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-3xs font-semibold", labelClasses.value])
				}, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(["font-inter text-sm", textClasses.value]) }, toDisplayString(_ctx.badge.text), 3)
			], 6)), [[_directive_tooltip, _ctx.badge.tooltip]]);
		};
	}
});
//#endregion
export { TopbarBadge_default as t };

//# sourceMappingURL=TopbarBadge-CivLUvp6.js.map