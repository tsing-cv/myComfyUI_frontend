import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { O as createBaseVNode, R as defineComponent, Ut as toDisplayString, Y as onBeforeUnmount, et as openBlock, j as createElementBlock, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import { T as useIntersectionObserver } from "./vendor-vueuse--4MZqvDu.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
import { n as isAssetPreviewSupported, t as findServerPreviewUrl } from "./assetPreviewUtil-9V8Vrv_O.js";
//#region src/platform/assets/components/Media3DTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = {
	key: 1,
	class: "flex size-full flex-col items-center justify-center gap-2 bg-modal-card-placeholder-background transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105"
};
var _hoisted_3 = { class: "text-sm text-base-foreground" };
//#endregion
//#region src/platform/assets/components/Media3DTop.vue
var Media3DTop_default = /* @__PURE__ */ defineComponent({
	__name: "Media3DTop",
	props: { asset: {} },
	setup(__props) {
		const containerRef = ref();
		const thumbnailSrc = ref(null);
		const hasAttempted = ref(false);
		useIntersectionObserver(containerRef, ([entry]) => {
			if (entry?.isIntersecting && !hasAttempted.value) {
				hasAttempted.value = true;
				loadThumbnail();
			}
		});
		async function loadThumbnail() {
			if (__props.asset?.preview_id && __props.asset?.preview_url) {
				thumbnailSrc.value = __props.asset.preview_url;
				return;
			}
			if (!__props.asset?.src) return;
			if (__props.asset.name && isAssetPreviewSupported()) {
				const serverPreviewUrl = await findServerPreviewUrl(__props.asset.name);
				if (serverPreviewUrl) thumbnailSrc.value = serverPreviewUrl;
			}
		}
		function revokeThumbnail() {
			if (thumbnailSrc.value?.startsWith("blob:")) URL.revokeObjectURL(thumbnailSrc.value);
			thumbnailSrc.value = null;
		}
		watch(() => __props.asset?.src, () => {
			if (hasAttempted.value) {
				hasAttempted.value = false;
				revokeThumbnail();
			}
		});
		onBeforeUnmount(revokeThumbnail);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: "relative size-full overflow-hidden rounded-sm"
			}, [thumbnailSrc.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: thumbnailSrc.value,
				alt: _ctx.asset?.name,
				class: "size-full object-contain transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105"
			}, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--box] text-3xl text-muted-foreground" }, null, -1)), createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("assetBrowser.media.threeDModelPlaceholder")), 1)]))], 512);
		};
	}
});
//#endregion
export { Media3DTop_default as default };

//# sourceMappingURL=Media3DTop-zxSAjrf2.js.map