import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, D as computed, I as createVNode, O as createBaseVNode, R as defineComponent, Z as onMounted, b as withModifiers, et as openBlock, j as createElementBlock, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { t as VideoPlayOverlay_default } from "./VideoPlayOverlay-BdSWt_zU.js";
//#region src/platform/assets/components/MediaVideoTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["controls"];
var _hoisted_2 = ["src", "type"];
//#endregion
//#region src/platform/assets/components/MediaVideoTop.vue
var MediaVideoTop_default = /* @__PURE__ */ defineComponent({
	__name: "MediaVideoTop",
	props: { asset: {} },
	emits: ["videoPlayingStateChanged", "videoControlsChanged"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const videoElement = ref(null);
		const isHovered = ref(false);
		const isPlaying = ref(false);
		const shouldShowControls = computed(() => isPlaying.value && isHovered.value);
		watch(shouldShowControls, (controlsVisible) => {
			emit("videoControlsChanged", controlsVisible);
		});
		onMounted(() => {
			emit("videoControlsChanged", shouldShowControls.value);
		});
		const onVideoPlay = () => {
			isPlaying.value = true;
			emit("videoPlayingStateChanged", true);
		};
		const onVideoPause = () => {
			isPlaying.value = false;
			emit("videoPlayingStateChanged", false);
		};
		const onVideoClick = async () => {
			if (shouldShowControls.value) return;
			const video = videoElement.value;
			if (!video) return;
			if (video.paused || video.ended) {
				await video.play().catch(() => {});
				return;
			}
			video.pause();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "relative size-full overflow-hidden rounded-sm bg-black",
				onMouseenter: _cache[0] || (_cache[0] = ($event) => isHovered.value = true),
				onMouseleave: _cache[1] || (_cache[1] = ($event) => isHovered.value = false)
			}, [createBaseVNode("video", {
				ref_key: "videoElement",
				ref: videoElement,
				controls: shouldShowControls.value,
				preload: "metadata",
				muted: "",
				loop: "",
				playsinline: "",
				class: "relative size-full object-contain transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105",
				onClick: withModifiers(onVideoClick, ["stop"]),
				onPlay: onVideoPlay,
				onPause: onVideoPause
			}, [_ctx.asset.src ? (openBlock(), createElementBlock("source", {
				key: 0,
				src: _ctx.asset.src,
				type: _ctx.asset.mime_type ?? void 0
			}, null, 8, _hoisted_2)) : createCommentVNode("", true)], 40, _hoisted_1), createVNode(VideoPlayOverlay_default, {
				visible: !isPlaying.value,
				size: "md"
			}, null, 8, ["visible"])], 32);
		};
	}
});
//#endregion
export { MediaVideoTop_default as default };

//# sourceMappingURL=MediaVideoTop-CLB2jPxj.js.map