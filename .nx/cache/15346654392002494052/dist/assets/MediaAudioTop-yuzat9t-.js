import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import { I as createVNode, O as createBaseVNode, R as defineComponent, Ut as toDisplayString, et as openBlock, j as createElementBlock } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import "./formatUtil-CKufMkDg.js";
import { t as WaveAudioPlayer_default } from "./WaveAudioPlayer-mBVaC-eN.js";
//#region src/platform/assets/components/MediaAudioTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative size-full overflow-hidden rounded-sm" };
var _hoisted_2 = { class: "flex size-full flex-col items-center justify-center gap-2 bg-modal-card-placeholder-background transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105" };
var _hoisted_3 = { class: "text-base-foreground" };
var _hoisted_4 = { class: "absolute bottom-0 left-0 w-full p-2" };
//#endregion
//#region src/platform/assets/components/MediaAudioTop.vue
var MediaAudioTop_default = /* @__PURE__ */ defineComponent({
	__name: "MediaAudioTop",
	props: { asset: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--music] text-3xl text-base-foreground" }, null, -1)), createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("assetBrowser.media.audioPlaceholder")), 1)]), createBaseVNode("div", _hoisted_4, [createVNode(WaveAudioPlayer_default, {
				src: _ctx.asset.src,
				"bar-count": 40,
				height: 32,
				align: "bottom"
			}, null, 8, ["src"])])]);
		};
	}
});
//#endregion
export { MediaAudioTop_default as default };

//# sourceMappingURL=MediaAudioTop-yuzat9t-.js.map