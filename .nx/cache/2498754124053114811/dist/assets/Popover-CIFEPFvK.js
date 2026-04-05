import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, F as createTextVNode, I as createVNode, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, nt as renderList, rt as renderSlot } from "./vendor-vue-core-Ba0aGEmU.js";
import { G as PopoverTrigger_default, K as PopoverPortal_default, Y as PopoverArrow_default, Z as PopoverRoot_default, q as PopoverContent_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
//#region src/components/ui/Popover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col p-1" };
var _hoisted_2 = {
	key: 0,
	class: "w-full border-b border-border-subtle"
};
var _hoisted_3 = ["onClick"];
//#endregion
//#region src/components/ui/Popover.vue
var Popover_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Popover",
	props: {
		entries: {},
		icon: {},
		to: {},
		showArrow: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverRoot_default), null, {
				default: withCtx(({ close }) => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "button", {}, () => [createVNode(Button_default, { size: "icon" }, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(_ctx.icon ?? "icon-[lucide--ellipsis]") }, null, 2)]),
						_: 1
					})])]),
					_: 3
				}), createVNode(unref(PopoverPortal_default), { to: _ctx.to }, {
					default: withCtx(() => [createVNode(unref(PopoverContent_default), mergeProps({
						side: "bottom",
						"side-offset": 5,
						"collision-padding": 10
					}, _ctx.$attrs, { class: "data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-1700 rounded-lg border border-border-subtle bg-base-background p-2 shadow-sm will-change-[transform,opacity]" }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { close }, () => [createBaseVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.entries ?? [], (item) => {
							return openBlock(), createElementBlock(Fragment, { key: item.label }, [item.separator ? (openBlock(), createElementBlock("div", _hoisted_2)) : (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(unref(cn)("my-1 flex flex-row gap-4 rounded-sm p-2", item.disabled ? "pointer-events-none opacity-50" : item.command && "cursor-pointer hover:bg-secondary-background-hover")),
								onClick: (e) => {
									if (!item.command || item.disabled) return;
									item.command({
										originalEvent: e,
										item
									});
									close();
								}
							}, [item.icon ? (openBlock(), createElementBlock("i", {
								key: 0,
								class: normalizeClass(item.icon)
							}, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(item.label), 1)], 10, _hoisted_3))], 64);
						}), 128))])]), _ctx.showArrow ? (openBlock(), createBlock(unref(PopoverArrow_default), {
							key: 0,
							class: "fill-base-background stroke-border-subtle"
						})) : createCommentVNode("", true)]),
						_: 2
					}, 1040)]),
					_: 2
				}, 1032, ["to"])]),
				_: 3
			});
		};
	}
});
//#endregion
export { Popover_default as t };

//# sourceMappingURL=Popover-CIFEPFvK.js.map