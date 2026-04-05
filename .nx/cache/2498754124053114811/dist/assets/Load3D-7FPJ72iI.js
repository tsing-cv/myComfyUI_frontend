import "./rolldown-runtime-DBfy44LZ.js";
import { A as createCommentVNode, Bt as normalizeClass, Ct as isRef, D as computed, G as mergeModels, I as createVNode, O as createBaseVNode, Q as onUnmounted, R as defineComponent, Rt as unref, Ut as toDisplayString, Z as onMounted, _t as withCtx, at as resolveDirective, b as withModifiers, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { a as useSettingStore, ai as LoadingOverlay_default, kr as resolveNode } from "./dialogService-ClaKHdWI.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { t as Load3DControls_default } from "./Load3DControls-Cms-DfuQ.js";
import { n as useLoad3dDrag, t as Load3dViewerContent_default } from "./Load3dViewerContent-Dx_rPCvK.js";
import { t as AnimationControls_default } from "./AnimationControls-dEDCTTQj.js";
import { t as useLoad3dService } from "./load3dService-Rc9DS8S1.js";
import { n as useLoad3d } from "./useLoad3d-CYb_XTwg.js";
//#region src/components/load3d/Load3DScene.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
};
var _hoisted_2$3 = { class: "rounded-lg border-2 border-dashed border-blue-400 bg-blue-500/20 px-6 py-4 text-lg font-medium text-blue-100" };
//#endregion
//#region src/components/load3d/Load3DScene.vue
var Load3DScene_default = /* @__PURE__ */ defineComponent({
	__name: "Load3DScene",
	props: {
		initializeLoad3d: { type: Function },
		cleanup: { type: Function },
		loading: { type: Boolean },
		loadingMessage: {},
		onModelDrop: { type: Function },
		isPreview: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const container = ref(null);
		function focusContainer() {
			container.value?.focus();
		}
		const { isDragging, dragMessage, handleDragOver, handleDragLeave, handleDrop } = useLoad3dDrag({
			onModelDrop: async (file) => {
				if (props.onModelDrop) await props.onModelDrop(file);
			},
			disabled: computed(() => props.isPreview)
		});
		onMounted(() => {
			if (container.value) props.initializeLoad3d(container.value);
		});
		onUnmounted(() => {
			props.cleanup();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container,
				class: "relative size-full min-h-[200px]",
				"data-capture-wheel": "true",
				tabindex: "-1",
				onPointerdown: withModifiers(focusContainer, ["stop"]),
				onPointermove: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
				onPointerup: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
				onMousedown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
				onMousemove: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"])),
				onMouseup: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"])),
				onContextmenu: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop", "prevent"])),
				onDragover: _cache[6] || (_cache[6] = withModifiers((...args) => unref(handleDragOver) && unref(handleDragOver)(...args), ["prevent", "stop"])),
				onDragleave: _cache[7] || (_cache[7] = withModifiers((...args) => unref(handleDragLeave) && unref(handleDragLeave)(...args), ["stop"])),
				onDrop: _cache[8] || (_cache[8] = withModifiers((...args) => unref(handleDrop) && unref(handleDrop)(...args), ["prevent", "stop"]))
			}, [createVNode(LoadingOverlay_default, {
				loading: _ctx.loading,
				"loading-message": _ctx.loadingMessage
			}, null, 8, ["loading", "loading-message"]), !_ctx.isPreview && unref(isDragging) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$3, toDisplayString(unref(dragMessage)), 1)])) : createCommentVNode("", true)], 544);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/RecordingControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "relative rounded-lg bg-backdrop/30" };
var _hoisted_2$2 = { class: "flex flex-col gap-2" };
var _hoisted_3 = {
	key: 2,
	class: "mt-1 text-center text-xs text-base-foreground"
};
//#endregion
//#region src/components/load3d/controls/RecordingControls.vue
var RecordingControls_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "RecordingControls",
	props: {
		"hasRecording": { type: Boolean },
		"hasRecordingModifiers": {},
		"isRecording": { type: Boolean },
		"isRecordingModifiers": {},
		"recordingDuration": {},
		"recordingDurationModifiers": {}
	},
	emits: /* @__PURE__ */ mergeModels([
		"startRecording",
		"stopRecording",
		"exportRecording",
		"clearRecording"
	], [
		"update:hasRecording",
		"update:isRecording",
		"update:recordingDuration"
	]),
	setup(__props, { emit: __emit }) {
		const hasRecording = useModel(__props, "hasRecording");
		const isRecording = useModel(__props, "isRecording");
		const recordingDuration = useModel(__props, "recordingDuration");
		const emit = __emit;
		function toggleRecording() {
			if (isRecording.value) emit("stopRecording");
			else emit("startRecording");
		}
		function handleExportRecording() {
			emit("exportRecording");
		}
		function handleClearRecording() {
			emit("clearRecording");
		}
		function formatDuration(seconds) {
			const minutes = Math.floor(seconds / 60);
			const remainingSeconds = Math.floor(seconds % 60);
			return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [
				withDirectives((openBlock(), createBlock(Button_default, {
					size: "icon",
					variant: "textonly",
					class: normalizeClass(unref(cn)("rounded-full", isRecording.value && "recording-button-blink text-red-500")),
					"aria-label": isRecording.value ? _ctx.$t("load3d.stopRecording") : _ctx.$t("load3d.startRecording"),
					onClick: toggleRecording
				}, {
					default: withCtx(() => [createBaseVNode("i", { class: normalizeClass([
						"pi",
						isRecording.value ? "pi-circle-fill" : "pi-video",
						"text-lg text-base-foreground"
					]) }, null, 2)]),
					_: 1
				}, 8, ["class", "aria-label"])), [[
					_directive_tooltip,
					{
						value: isRecording.value ? _ctx.$t("load3d.stopRecording") : _ctx.$t("load3d.startRecording"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]),
				hasRecording.value && !isRecording.value ? withDirectives((openBlock(), createBlock(Button_default, {
					key: 0,
					size: "icon",
					variant: "textonly",
					class: "rounded-full",
					"aria-label": _ctx.$t("load3d.exportRecording"),
					onClick: handleExportRecording
				}, {
					default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-download text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.exportRecording"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]) : createCommentVNode("", true),
				hasRecording.value && !isRecording.value ? withDirectives((openBlock(), createBlock(Button_default, {
					key: 1,
					size: "icon",
					variant: "textonly",
					class: "rounded-full",
					"aria-label": _ctx.$t("load3d.clearRecording"),
					onClick: handleClearRecording
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-trash text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.clearRecording"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]) : createCommentVNode("", true),
				recordingDuration.value && recordingDuration.value > 0 && !isRecording.value ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(formatDuration(recordingDuration.value)), 1)) : createCommentVNode("", true)
			])]);
		};
	}
}), [["__scopeId", "data-v-cf32fe32"]]);
//#endregion
//#region src/components/load3d/controls/ViewerControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "relative rounded-lg bg-backdrop/30" };
var _hoisted_2$1 = { class: "flex flex-col gap-2" };
//#endregion
//#region src/components/load3d/controls/ViewerControls.vue
var ViewerControls_default = /* @__PURE__ */ defineComponent({
	__name: "ViewerControls",
	props: { node: {} },
	setup(__props) {
		const { t } = useI18n();
		const openIn3DViewer = () => {
			const props = { node: __props.node };
			useDialogStore().showDialog({
				key: "global-load3d-viewer",
				title: t("load3d.viewer.title"),
				component: Load3dViewerContent_default,
				props,
				dialogComponentProps: {
					style: "width: 80vw; height: 80vh;",
					maximizable: true,
					onClose: async () => {
						await useLoad3dService().handleViewerClose(props.node);
					}
				}
			});
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": unref(t)("load3d.openIn3DViewer"),
				onClick: openIn3DViewer
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-expand text-lg text-base-foreground" }, null, -1)])),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: unref(t)("load3d.openIn3DViewer"),
					showDelay: 300
				},
				void 0,
				{ right: true }
			]])])]);
		};
	}
});
//#endregion
//#region src/components/load3d/Load3D.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pointer-events-none absolute top-0 left-0 size-full" };
var _hoisted_2 = {
	key: 1,
	class: "pointer-events-auto absolute top-12 right-2 z-20"
};
//#endregion
//#region src/components/load3d/Load3D.vue
var Load3D_default = /* @__PURE__ */ defineComponent({
	__name: "Load3D",
	props: {
		widget: {},
		nodeId: {}
	},
	setup(__props) {
		const props = __props;
		function isComponentWidget(widget) {
			return "node" in widget && widget.node !== void 0;
		}
		const node = ref(null);
		if (isComponentWidget(props.widget)) node.value = props.widget.node;
		else if (props.nodeId) onMounted(() => {
			node.value = resolveNode(props.nodeId) ?? null;
		});
		const { sceneConfig, modelConfig, cameraConfig, lightConfig, isRecording, isPreview, isSplatModel, isPlyModel, hasSkeleton, hasRecording, recordingDuration, animations, playing, selectedSpeed, selectedAnimation, animationProgress, animationDuration, loading, loadingMessage, initializeLoad3d, handleMouseEnter, handleMouseLeave, handleStartRecording, handleStopRecording, handleExportRecording, handleClearRecording, handleSeek, handleBackgroundImageUpdate, handleExportModel, handleModelDrop, cleanup } = useLoad3d(node);
		const enable3DViewer = computed(() => useSettingStore().get("Comfy.Load3D.3DViewerEnable"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "relative size-full",
				onMouseenter: _cache[13] || (_cache[13] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
				onMouseleave: _cache[14] || (_cache[14] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
				onPointerdown: _cache[15] || (_cache[15] = withModifiers(() => {}, ["stop"])),
				onPointermove: _cache[16] || (_cache[16] = withModifiers(() => {}, ["stop"])),
				onPointerup: _cache[17] || (_cache[17] = withModifiers(() => {}, ["stop"]))
			}, [
				node.value ? (openBlock(), createBlock(Load3DScene_default, {
					key: 0,
					"initialize-load3d": unref(initializeLoad3d),
					cleanup: unref(cleanup),
					loading: unref(loading),
					"loading-message": unref(loadingMessage),
					"on-model-drop": unref(isPreview) ? void 0 : unref(handleModelDrop),
					"is-preview": unref(isPreview)
				}, null, 8, [
					"initialize-load3d",
					"cleanup",
					"loading",
					"loading-message",
					"on-model-drop",
					"is-preview"
				])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_1, [createVNode(Load3DControls_default, {
					"scene-config": unref(sceneConfig),
					"onUpdate:sceneConfig": _cache[0] || (_cache[0] = ($event) => isRef(sceneConfig) ? sceneConfig.value = $event : null),
					"model-config": unref(modelConfig),
					"onUpdate:modelConfig": _cache[1] || (_cache[1] = ($event) => isRef(modelConfig) ? modelConfig.value = $event : null),
					"camera-config": unref(cameraConfig),
					"onUpdate:cameraConfig": _cache[2] || (_cache[2] = ($event) => isRef(cameraConfig) ? cameraConfig.value = $event : null),
					"light-config": unref(lightConfig),
					"onUpdate:lightConfig": _cache[3] || (_cache[3] = ($event) => isRef(lightConfig) ? lightConfig.value = $event : null),
					"is-splat-model": unref(isSplatModel),
					"is-ply-model": unref(isPlyModel),
					"has-skeleton": unref(hasSkeleton),
					onUpdateBackgroundImage: unref(handleBackgroundImageUpdate),
					onExportModel: unref(handleExportModel)
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
				]), unref(animations) && unref(animations).length > 0 ? (openBlock(), createBlock(AnimationControls_default, {
					key: 0,
					animations: unref(animations),
					"onUpdate:animations": _cache[4] || (_cache[4] = ($event) => isRef(animations) ? animations.value = $event : null),
					playing: unref(playing),
					"onUpdate:playing": _cache[5] || (_cache[5] = ($event) => isRef(playing) ? playing.value = $event : null),
					"selected-speed": unref(selectedSpeed),
					"onUpdate:selectedSpeed": _cache[6] || (_cache[6] = ($event) => isRef(selectedSpeed) ? selectedSpeed.value = $event : null),
					"selected-animation": unref(selectedAnimation),
					"onUpdate:selectedAnimation": _cache[7] || (_cache[7] = ($event) => isRef(selectedAnimation) ? selectedAnimation.value = $event : null),
					"animation-progress": unref(animationProgress),
					"onUpdate:animationProgress": _cache[8] || (_cache[8] = ($event) => isRef(animationProgress) ? animationProgress.value = $event : null),
					"animation-duration": unref(animationDuration),
					"onUpdate:animationDuration": _cache[9] || (_cache[9] = ($event) => isRef(animationDuration) ? animationDuration.value = $event : null),
					onSeek: unref(handleSeek)
				}, null, 8, [
					"animations",
					"playing",
					"selected-speed",
					"selected-animation",
					"animation-progress",
					"animation-duration",
					"onSeek"
				])) : createCommentVNode("", true)]),
				enable3DViewer.value && node.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(ViewerControls_default, { node: node.value }, null, 8, ["node"])])) : createCommentVNode("", true),
				!unref(isPreview) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(["pointer-events-auto absolute right-2 z-20", {
						"top-12": !enable3DViewer.value,
						"top-24": enable3DViewer.value
					}])
				}, [createVNode(RecordingControls_default, {
					"is-recording": unref(isRecording),
					"onUpdate:isRecording": _cache[10] || (_cache[10] = ($event) => isRef(isRecording) ? isRecording.value = $event : null),
					"has-recording": unref(hasRecording),
					"onUpdate:hasRecording": _cache[11] || (_cache[11] = ($event) => isRef(hasRecording) ? hasRecording.value = $event : null),
					"recording-duration": unref(recordingDuration),
					"onUpdate:recordingDuration": _cache[12] || (_cache[12] = ($event) => isRef(recordingDuration) ? recordingDuration.value = $event : null),
					onStartRecording: unref(handleStartRecording),
					onStopRecording: unref(handleStopRecording),
					onExportRecording: unref(handleExportRecording),
					onClearRecording: unref(handleClearRecording)
				}, null, 8, [
					"is-recording",
					"has-recording",
					"recording-duration",
					"onStartRecording",
					"onStopRecording",
					"onExportRecording",
					"onClearRecording"
				])], 2)) : createCommentVNode("", true)
			], 32);
		};
	}
});
//#endregion
export { Load3D_default as t };

//# sourceMappingURL=Load3D-7FPJ72iI.js.map