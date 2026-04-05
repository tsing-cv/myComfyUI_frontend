import "./rolldown-runtime-DBfy44LZ.js";
import { Bt as normalizeClass, D as computed, Ht as normalizeStyle, I as createVNode, O as createBaseVNode, Pt as toRef, Q as onUnmounted, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, b as withModifiers, et as openBlock, j as createElementBlock, kt as ref, nt as renderList } from "./vendor-vue-core-Ba0aGEmU.js";
import { k as useMediaControls, ot as whenever } from "./vendor-vueuse--4MZqvDu.js";
import { r as api } from "./api-kFdESQTE.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { d as formatTime } from "./formatUtil-CKufMkDg.js";
import { t as Slider_default } from "./Slider-crPZmra_.js";
//#region src/composables/useWaveAudioPlayer.ts
function useWaveAudioPlayer(options) {
	const { src, barCount = 40 } = options;
	const audioRef = ref();
	const waveformRef = ref();
	const blobUrl = ref();
	const loading = ref(false);
	let decodeRequestId = 0;
	const bars = ref(generatePlaceholderBars());
	const { playing, currentTime, duration, volume, muted } = useMediaControls(audioRef);
	const playedBarIndex = computed(() => {
		if (duration.value === 0) return -1;
		return Math.floor(currentTime.value / duration.value * barCount) - 1;
	});
	const formattedCurrentTime = computed(() => formatTime(currentTime.value));
	const formattedDuration = computed(() => formatTime(duration.value));
	const audioSrc = computed(() => src.value ? blobUrl.value ?? src.value : "");
	function generatePlaceholderBars() {
		return Array.from({ length: barCount }, () => ({ height: Math.random() * 60 + 10 }));
	}
	function generateBarsFromBuffer(buffer) {
		const channelData = buffer.getChannelData(0);
		if (channelData.length === 0) {
			bars.value = generatePlaceholderBars();
			return;
		}
		const averages = [];
		for (let i = 0; i < barCount; i++) {
			const start = Math.floor(i * channelData.length / barCount);
			const end = Math.max(start + 1, Math.floor((i + 1) * channelData.length / barCount));
			let sum = 0;
			for (let j = start; j < end && j < channelData.length; j++) sum += Math.abs(channelData[j]);
			averages.push(sum / (end - start));
		}
		const peak = Math.max(...averages) || 1;
		bars.value = averages.map((avg) => ({ height: Math.max(8, avg / peak * 100) }));
	}
	async function decodeAudioSource(url) {
		const requestId = ++decodeRequestId;
		loading.value = true;
		let ctx;
		try {
			const apiBase = api.apiURL("/");
			const route = url.includes(apiBase) ? url.slice(url.indexOf(apiBase) + api.apiURL("").length) : url;
			const response = await api.fetchApi(route);
			if (requestId !== decodeRequestId) return;
			if (!response.ok) throw new Error(`Failed to fetch audio (${response.status})`);
			const arrayBuffer = await response.arrayBuffer();
			if (requestId !== decodeRequestId) return;
			const blob = new Blob([arrayBuffer.slice(0)], { type: response.headers.get("content-type") ?? "audio/wav" });
			if (blobUrl.value) URL.revokeObjectURL(blobUrl.value);
			blobUrl.value = URL.createObjectURL(blob);
			ctx = new AudioContext();
			const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
			if (requestId !== decodeRequestId) return;
			generateBarsFromBuffer(audioBuffer);
		} catch {
			if (requestId === decodeRequestId) {
				if (blobUrl.value) {
					URL.revokeObjectURL(blobUrl.value);
					blobUrl.value = void 0;
				}
				bars.value = generatePlaceholderBars();
			}
		} finally {
			await ctx?.close();
			if (requestId === decodeRequestId) loading.value = false;
		}
	}
	const progressRatio = computed(() => {
		if (duration.value === 0) return 0;
		return currentTime.value / duration.value * 100;
	});
	function togglePlayPause() {
		playing.value = !playing.value;
	}
	function seekToStart() {
		currentTime.value = 0;
	}
	function seekToEnd() {
		currentTime.value = duration.value;
		playing.value = false;
	}
	function seekToRatio(ratio) {
		currentTime.value = Math.max(0, Math.min(1, ratio)) * duration.value;
	}
	function toggleMute() {
		muted.value = !muted.value;
	}
	const volumeIcon = computed(() => {
		if (muted.value || volume.value === 0) return "icon-[lucide--volume-x]";
		if (volume.value < .5) return "icon-[lucide--volume-1]";
		return "icon-[lucide--volume-2]";
	});
	function handleWaveformClick(event) {
		if (!waveformRef.value || duration.value === 0) return;
		const rect = waveformRef.value.getBoundingClientRect();
		currentTime.value = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)) * duration.value;
		if (!playing.value) playing.value = true;
	}
	whenever(src, (url) => {
		playing.value = false;
		currentTime.value = 0;
		decodeAudioSource(url);
	}, { immediate: true });
	onUnmounted(() => {
		decodeRequestId += 1;
		audioRef.value?.pause();
		if (blobUrl.value) {
			URL.revokeObjectURL(blobUrl.value);
			blobUrl.value = void 0;
		}
	});
	return {
		audioRef,
		waveformRef,
		audioSrc,
		bars,
		loading,
		isPlaying: playing,
		playedBarIndex,
		progressRatio,
		formattedCurrentTime,
		formattedDuration,
		togglePlayPause,
		seekToStart,
		seekToEnd,
		volume,
		volumeIcon,
		toggleMute,
		seekToRatio,
		handleWaveformClick
	};
}
//#endregion
//#region src/components/common/WaveAudioPlayer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "ml-0.5 icon-[lucide--play] size-3 text-base-foreground"
};
var _hoisted_2 = {
	key: 1,
	class: "icon-[lucide--pause] size-3 text-base-foreground"
};
var _hoisted_3 = { class: "shrink-0 text-xs text-muted-foreground tabular-nums" };
var _hoisted_4 = { class: "flex flex-col gap-1" };
var _hoisted_5 = { class: "flex justify-between text-xs text-muted-foreground tabular-nums" };
var _hoisted_6 = { class: "flex items-center gap-2" };
var _hoisted_7 = { class: "flex flex-1 items-center justify-center gap-2" };
var _hoisted_8 = {
	key: 0,
	class: "ml-0.5 icon-[lucide--play] size-5 text-base-foreground"
};
var _hoisted_9 = {
	key: 1,
	class: "icon-[lucide--pause] size-5 text-base-foreground"
};
var _hoisted_10 = { class: "flex w-20 items-center gap-1" };
var _hoisted_11 = ["src"];
//#endregion
//#region src/components/common/WaveAudioPlayer.vue
var WaveAudioPlayer_default = /* @__PURE__ */ defineComponent({
	__name: "WaveAudioPlayer",
	props: {
		src: {},
		barCount: { default: 40 },
		height: { default: 32 },
		align: { default: "center" },
		variant: { default: "compact" }
	},
	setup(__props) {
		const progressRef = ref();
		const { audioRef, waveformRef, audioSrc, bars, loading, isPlaying, playedBarIndex, progressRatio, formattedCurrentTime, formattedDuration, togglePlayPause, seekToStart, seekToEnd, volume, volumeIcon, toggleMute, seekToRatio, handleWaveformClick } = useWaveAudioPlayer({
			src: toRef(() => __props.src),
			barCount: __props.barCount
		});
		function handleProgressClick(event) {
			if (!progressRef.value) return;
			const rect = progressRef.value.getBoundingClientRect();
			seekToRatio((event.clientX - rect.left) / rect.width);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [_ctx.variant === "compact" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)("flex w-full gap-2", _ctx.align === "center" ? "items-center" : "items-end")),
				onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
				onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, [
				createVNode(Button_default, {
					variant: "textonly",
					size: "icon-sm",
					class: "size-7 shrink-0 rounded-full bg-muted-foreground/15 hover:bg-muted-foreground/25",
					"aria-label": unref(isPlaying) ? _ctx.$t("g.pause") : _ctx.$t("g.play"),
					loading: unref(loading),
					onClick: withModifiers(unref(togglePlayPause), ["stop"])
				}, {
					default: withCtx(() => [!unref(isPlaying) ? (openBlock(), createElementBlock("i", _hoisted_1)) : (openBlock(), createElementBlock("i", _hoisted_2))]),
					_: 1
				}, 8, [
					"aria-label",
					"loading",
					"onClick"
				]),
				createBaseVNode("div", {
					ref: (el) => waveformRef.value = el,
					class: normalizeClass(unref(cn)("flex min-w-0 flex-1 cursor-pointer gap-px", _ctx.align === "center" ? "items-center" : "items-end")),
					style: normalizeStyle({ height: _ctx.height + "px" }),
					onClick: _cache[0] || (_cache[0] = (...args) => unref(handleWaveformClick) && unref(handleWaveformClick)(...args))
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(bars), (bar, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: normalizeClass(unref(cn)("min-h-0.5 flex-1 rounded-full", unref(loading) ? "bg-muted-foreground/20" : index <= unref(playedBarIndex) ? "bg-base-foreground" : "bg-muted-foreground/40")),
						style: normalizeStyle({ height: bar.height / 100 * _ctx.height + "px" })
					}, null, 6);
				}), 128))], 6),
				createBaseVNode("span", _hoisted_3, toDisplayString(unref(formattedCurrentTime)) + " / " + toDisplayString(unref(formattedDuration)), 1)
			], 34)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: "flex w-full flex-col gap-4",
				onPointerdown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"])),
				onClick: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop"]))
			}, [
				createBaseVNode("div", {
					class: "flex w-full items-center gap-0.5",
					style: normalizeStyle({ height: _ctx.height + "px" })
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(bars), (bar, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: normalizeClass(unref(cn)("min-h-0.5 flex-1 rounded-full", unref(loading) ? "bg-muted-foreground/20" : "bg-base-foreground")),
						style: normalizeStyle({ height: bar.height / 100 * _ctx.height + "px" })
					}, null, 6);
				}), 128))], 4),
				createBaseVNode("div", _hoisted_4, [createBaseVNode("div", {
					ref_key: "progressRef",
					ref: progressRef,
					class: "relative h-1 w-full cursor-pointer rounded-full bg-muted-foreground/20",
					onClick: handleProgressClick
				}, [createBaseVNode("div", {
					class: "absolute top-0 left-0 h-full rounded-full bg-base-foreground",
					style: normalizeStyle({ width: unref(progressRatio) + "%" })
				}, null, 4)], 512), createBaseVNode("div", _hoisted_5, [createBaseVNode("span", null, toDisplayString(unref(formattedCurrentTime)), 1), createBaseVNode("span", null, toDisplayString(unref(formattedDuration)), 1)])]),
				createBaseVNode("div", _hoisted_6, [
					_cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-20" }, null, -1)),
					createBaseVNode("div", _hoisted_7, [
						createVNode(Button_default, {
							variant: "textonly",
							size: "icon-sm",
							class: "size-8 rounded-full",
							"aria-label": _ctx.$t("g.skipToStart"),
							disabled: unref(loading),
							onClick: unref(seekToStart)
						}, {
							default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("i", { class: "icon-[lucide--skip-back] size-4 text-base-foreground" }, null, -1)])),
							_: 1
						}, 8, [
							"aria-label",
							"disabled",
							"onClick"
						]),
						createVNode(Button_default, {
							variant: "textonly",
							size: "icon-sm",
							class: "size-10 rounded-full bg-muted-foreground/15 hover:bg-muted-foreground/25",
							"aria-label": unref(isPlaying) ? _ctx.$t("g.pause") : _ctx.$t("g.play"),
							loading: unref(loading),
							onClick: unref(togglePlayPause)
						}, {
							default: withCtx(() => [!unref(isPlaying) ? (openBlock(), createElementBlock("i", _hoisted_8)) : (openBlock(), createElementBlock("i", _hoisted_9))]),
							_: 1
						}, 8, [
							"aria-label",
							"loading",
							"onClick"
						]),
						createVNode(Button_default, {
							variant: "textonly",
							size: "icon-sm",
							class: "size-8 rounded-full",
							"aria-label": _ctx.$t("g.skipToEnd"),
							disabled: unref(loading),
							onClick: unref(seekToEnd)
						}, {
							default: withCtx(() => _cache[7] || (_cache[7] = [createBaseVNode("i", { class: "icon-[lucide--skip-forward] size-4 text-base-foreground" }, null, -1)])),
							_: 1
						}, 8, [
							"aria-label",
							"disabled",
							"onClick"
						])
					]),
					createBaseVNode("div", _hoisted_10, [createVNode(Button_default, {
						variant: "textonly",
						size: "icon-sm",
						class: "size-8 shrink-0 rounded-full",
						"aria-label": _ctx.$t("g.volume"),
						disabled: unref(loading),
						onClick: unref(toggleMute)
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(unref(cn)(unref(volumeIcon), "size-4 text-base-foreground")) }, null, 2)]),
						_: 1
					}, 8, [
						"aria-label",
						"disabled",
						"onClick"
					]), createVNode(Slider_default, {
						"model-value": [unref(volume) * 100],
						min: 0,
						max: 100,
						step: 1,
						class: "flex-1",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = (v) => volume.value = (v?.[0] ?? 100) / 100)
					}, null, 8, ["model-value"])])
				])
			], 32)), createBaseVNode("audio", {
				ref: (el) => audioRef.value = el,
				src: unref(audioSrc),
				preload: "metadata",
				class: "hidden"
			}, null, 8, _hoisted_11)], 64);
		};
	}
});
//#endregion
export { WaveAudioPlayer_default as t };

//# sourceMappingURL=WaveAudioPlayer-CHCY451S.js.map