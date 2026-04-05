import "./rolldown-runtime-DBfy44LZ.js";
import { O as createBaseVNode, R as defineComponent, Rt as unref, et as openBlock, j as createElementBlock } from "./vendor-vue-core-Ba0aGEmU.js";
import { C as useImage, ot as whenever } from "./vendor-vueuse--4MZqvDu.js";
import { i as getAssetDisplayName } from "./assetMetadataUtils-C4X4hjOE.js";
//#region src/platform/assets/components/MediaImageTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = {
	key: 1,
	class: "flex size-full items-center justify-center bg-modal-card-placeholder-background"
};
//#endregion
//#region src/platform/assets/components/MediaImageTop.vue
var MediaImageTop_default = /* @__PURE__ */ defineComponent({
	__name: "MediaImageTop",
	props: { asset: {} },
	emits: ["image-loaded", "view"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { state, error, isReady } = useImage({
			src: __props.asset.src ?? "",
			alt: getAssetDisplayName(__props.asset)
		});
		whenever(() => isReady.value && state.value?.naturalWidth && state.value?.naturalHeight, () => emit("image-loaded", state.value.naturalWidth, state.value.naturalHeight));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "relative size-full overflow-hidden rounded-sm bg-modal-card-placeholder-background",
				onDblclick: _cache[0] || (_cache[0] = ($event) => emit("view"))
			}, [!unref(error) ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: _ctx.asset.src,
				alt: unref(getAssetDisplayName)(_ctx.asset),
				class: "size-full object-contain transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105",
				draggable: false
			}, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-image text-3xl text-muted-foreground" }, null, -1)])))], 32);
		};
	}
});
//#endregion
export { MediaImageTop_default as default };

//# sourceMappingURL=MediaImageTop-DPlUogv8.js.map