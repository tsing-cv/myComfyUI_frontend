import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, I as createVNode, O as createBaseVNode, Q as onUnmounted, R as defineComponent, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
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
import "./vendor-three-BgyUnc8C.js";
import { t as Load3DControls_default } from "./Load3DControls-Cms-DfuQ.js";
import { t as AnimationControls_default } from "./AnimationControls-dEDCTTQj.js";
import "./load3dService-Rc9DS8S1.js";
import { t as useLoad3dViewer } from "./useLoad3dViewer-DlfK7Bns.js";
//#region src/renderer/extensions/linearMode/Preview3d.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pointer-events-none absolute top-0 left-0 size-full" };
//#endregion
//#region src/renderer/extensions/linearMode/Preview3d.vue
var Preview3d_default = /* @__PURE__ */ defineComponent({
	__name: "Preview3d",
	props: { modelUrl: {} },
	setup(__props) {
		const containerRef = useTemplateRef("containerRef");
		const viewer = ref(useLoad3dViewer());
		watch([containerRef, () => __props.modelUrl], async () => {
			if (!containerRef.value || !__props.modelUrl) return;
			viewer.value.cleanup();
			await viewer.value.initializeStandaloneViewer(containerRef.value, __props.modelUrl);
		}, { flush: "post" });
		onUnmounted(() => {
			viewer.value.cleanup();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: "relative size-full self-center md:w-[calc(100%-150px)]",
				onMouseenter: _cache[10] || (_cache[10] = (...args) => viewer.value.handleMouseEnter && viewer.value.handleMouseEnter(...args)),
				onMouseleave: _cache[11] || (_cache[11] = (...args) => viewer.value.handleMouseLeave && viewer.value.handleMouseLeave(...args)),
				onResize: _cache[12] || (_cache[12] = (...args) => viewer.value.handleResize && viewer.value.handleResize(...args))
			}, [createBaseVNode("div", _hoisted_1, [createVNode(Load3DControls_default, {
				"scene-config": viewer.value,
				"onUpdate:sceneConfig": _cache[0] || (_cache[0] = ($event) => viewer.value = $event),
				"model-config": viewer.value,
				"onUpdate:modelConfig": _cache[1] || (_cache[1] = ($event) => viewer.value = $event),
				"camera-config": viewer.value,
				"onUpdate:cameraConfig": _cache[2] || (_cache[2] = ($event) => viewer.value = $event),
				"light-config": viewer.value,
				"onUpdate:lightConfig": _cache[3] || (_cache[3] = ($event) => viewer.value = $event),
				"is-splat-model": viewer.value.isSplatModel,
				"is-ply-model": viewer.value.isPlyModel,
				"has-skeleton": viewer.value.hasSkeleton,
				onUpdateBackgroundImage: viewer.value.handleBackgroundImageUpdate,
				onExportModel: viewer.value.exportModel
			}, null, 8, [
				"scene-config",
				"model-config",
				"camera-config",
				"light-config",
				"is-splat-model",
				"is-ply-model",
				"has-skeleton",
				"onUpdateBackgroundImage",
				"onExportModel"
			]), viewer.value.animations && viewer.value.animations.length > 0 ? (openBlock(), createBlock(AnimationControls_default, {
				key: 0,
				animations: viewer.value.animations,
				"onUpdate:animations": _cache[4] || (_cache[4] = ($event) => viewer.value.animations = $event),
				playing: viewer.value.playing,
				"onUpdate:playing": _cache[5] || (_cache[5] = ($event) => viewer.value.playing = $event),
				"selected-speed": viewer.value.selectedSpeed,
				"onUpdate:selectedSpeed": _cache[6] || (_cache[6] = ($event) => viewer.value.selectedSpeed = $event),
				"selected-animation": viewer.value.selectedAnimation,
				"onUpdate:selectedAnimation": _cache[7] || (_cache[7] = ($event) => viewer.value.selectedAnimation = $event),
				"animation-progress": viewer.value.animationProgress,
				"onUpdate:animationProgress": _cache[8] || (_cache[8] = ($event) => viewer.value.animationProgress = $event),
				"animation-duration": viewer.value.animationDuration,
				"onUpdate:animationDuration": _cache[9] || (_cache[9] = ($event) => viewer.value.animationDuration = $event),
				onSeek: viewer.value.handleSeek
			}, null, 8, [
				"animations",
				"playing",
				"selected-speed",
				"selected-animation",
				"animation-progress",
				"animation-duration",
				"onSeek"
			])) : createCommentVNode("", true)])], 544);
		};
	}
});
//#endregion
export { Preview3d_default as default };

//# sourceMappingURL=Preview3d-DTgUYFxZ.js.map