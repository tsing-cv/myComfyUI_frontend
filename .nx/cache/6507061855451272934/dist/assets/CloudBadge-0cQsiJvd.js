import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed, R as defineComponent, et as openBlock, k as createBlock } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as TopbarBadge_default } from "./TopbarBadge-CivLUvp6.js";
//#endregion
//#region src/components/topbar/CloudBadge.vue
var CloudBadge_default = /* @__PURE__ */ defineComponent({
	__name: "CloudBadge",
	props: {
		displayMode: { default: "full" },
		reverseOrder: { type: Boolean },
		noPadding: { type: Boolean },
		backgroundColor: { default: "var(--comfy-menu-bg)" }
	},
	setup(__props) {
		const cloudBadge = computed(() => ({
			icon: "icon-[lucide--cloud]",
			text: "Comfy Cloud"
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TopbarBadge_default, {
				badge: cloudBadge.value,
				"display-mode": _ctx.displayMode,
				"reverse-order": _ctx.reverseOrder,
				"no-padding": _ctx.noPadding,
				"background-color": _ctx.backgroundColor
			}, null, 8, [
				"badge",
				"display-mode",
				"reverse-order",
				"no-padding",
				"background-color"
			]);
		};
	}
});
//#endregion
export { CloudBadge_default as t };

//# sourceMappingURL=CloudBadge-0cQsiJvd.js.map