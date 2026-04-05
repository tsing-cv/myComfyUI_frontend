import "./rolldown-runtime-DBfy44LZ.js";
import { Bt as normalizeClass, O as createBaseVNode, R as defineComponent, Rt as unref, Z as onMounted, et as openBlock, j as createElementBlock, kt as ref, q as nextTick, rt as renderSlot, v as vShow, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import { n as isNativeWindow, t as electronAPI } from "./envUtil-iYCo4Y6R.js";
//#region src/views/templates/BaseViewTemplate.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full grow items-center justify-center overflow-auto" };
//#endregion
//#region src/views/templates/BaseViewTemplate.vue
var BaseViewTemplate_default = /* @__PURE__ */ defineComponent({
	__name: "BaseViewTemplate",
	props: { dark: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const darkTheme = {
			color: "rgba(0, 0, 0, 0)",
			symbolColor: "#d4d4d4"
		};
		const lightTheme = {
			color: "rgba(0, 0, 0, 0)",
			symbolColor: "#171717"
		};
		const topMenuRef = ref(null);
		onMounted(async () => {
			if (isDesktop) {
				await nextTick();
				electronAPI().changeTheme({
					...__props.dark ? darkTheme : lightTheme,
					height: topMenuRef.value?.getBoundingClientRect().height ?? 0
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["flex h-svh w-screen flex-col font-sans", [_ctx.dark ? "dark-theme bg-neutral-900 text-neutral-300" : "bg-neutral-300 text-neutral-900"]]) }, [withDirectives(createBaseVNode("div", {
				ref_key: "topMenuRef",
				ref: topMenuRef,
				class: "app-drag h-(--comfy-topbar-height) w-full"
			}, null, 512), [[vShow, unref(isNativeWindow)()]]), createBaseVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")])], 2);
		};
	}
});
//#endregion
export { BaseViewTemplate_default as t };

//# sourceMappingURL=BaseViewTemplate-DU0C8qed.js.map