import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, Ct as isRef, D as computed, F as createTextVNode, G as mergeModels, Ht as normalizeStyle, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, b as withModifiers, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, pt as watch, ut as useModel, v as vShow, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import { L as useResizeObserver } from "./vendor-vueuse--4MZqvDu.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { M as useNodeOutputStore, kr as resolveNode } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bx34DVM6.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import "./ScrubableNumberInput-B5dNKiiS.js";
import { t as WidgetBoundingBox_default } from "./WidgetBoundingBox-BiYl5Wl8.js";
import { r as useUpstreamValue, t as boundsExtractor } from "./useUpstreamValue-C9mUbHu-.js";
//#region src/composables/useImageCrop.ts
var HANDLE_SIZE = 8;
var CORNER_SIZE = 10;
var MIN_CROP_SIZE = 16;
var CROP_BOX_BORDER = 2;
var ASPECT_RATIOS = {
	"1:1": 1,
	"3:4": 3 / 4,
	"4:3": 4 / 3,
	"16:9": 16 / 9,
	"9:16": 9 / 16,
	custom: null
};
function useImageCrop(nodeId, options) {
	const { imageEl, containerEl, modelValue } = options;
	const nodeOutputStore = useNodeOutputStore();
	const node = ref(null);
	const imageUrl = ref(null);
	const isLoading = ref(false);
	const naturalWidth = ref(0);
	const naturalHeight = ref(0);
	const displayedWidth = ref(0);
	const displayedHeight = ref(0);
	const scaleFactor = ref(1);
	const imageOffsetX = ref(0);
	const imageOffsetY = ref(0);
	const cropX = computed({
		get: () => modelValue.value.x,
		set: (v) => {
			modelValue.value.x = v;
		}
	});
	const cropY = computed({
		get: () => modelValue.value.y,
		set: (v) => {
			modelValue.value.y = v;
		}
	});
	const cropWidth = computed({
		get: () => modelValue.value.width || 512,
		set: (v) => {
			modelValue.value.width = v;
		}
	});
	const cropHeight = computed({
		get: () => modelValue.value.height || 512,
		set: (v) => {
			modelValue.value.height = v;
		}
	});
	const isDragging = ref(false);
	const dragStartX = ref(0);
	const dragStartY = ref(0);
	const dragStartCropX = ref(0);
	const dragStartCropY = ref(0);
	const isResizing = ref(false);
	const resizeDirection = ref(null);
	const resizeStartX = ref(0);
	const resizeStartY = ref(0);
	const resizeStartCropX = ref(0);
	const resizeStartCropY = ref(0);
	const resizeStartCropWidth = ref(0);
	const resizeStartCropHeight = ref(0);
	const lockedRatio = ref(null);
	const selectedRatio = computed({
		get: () => {
			if (lockedRatio.value == null) return "custom";
			const entry = Object.entries(ASPECT_RATIOS).find(([, v]) => v === lockedRatio.value);
			return entry ? entry[0] : "custom";
		},
		set: (key) => {
			if (key === "custom") {
				lockedRatio.value = null;
				return;
			}
			lockedRatio.value = ASPECT_RATIOS[key] ?? null;
			applyLockedRatio();
		}
	});
	const isLockEnabled = computed({
		get: () => lockedRatio.value != null,
		set: (locked) => {
			if (locked && lockedRatio.value == null) lockedRatio.value = cropWidth.value / cropHeight.value;
			if (!locked) lockedRatio.value = null;
		}
	});
	function applyLockedRatio() {
		if (lockedRatio.value == null) return;
		const ratio = lockedRatio.value;
		const w = cropWidth.value;
		let newHeight = Math.round(w / ratio);
		if (cropY.value + newHeight > naturalHeight.value) {
			newHeight = naturalHeight.value - cropY.value;
			const newWidth = Math.round(newHeight * ratio);
			cropWidth.value = Math.max(MIN_CROP_SIZE, newWidth);
		}
		cropHeight.value = Math.max(MIN_CROP_SIZE, newHeight);
	}
	useResizeObserver(containerEl, () => {
		if (imageEl.value && imageUrl.value) updateDisplayedDimensions();
	});
	const getInputImageUrl = () => {
		if (!node.value) return null;
		let sourceNode = node.value.getInputNode(0);
		if (!sourceNode) return null;
		if (sourceNode.isSubgraphNode()) {
			const link = node.value.getInputLink(0);
			if (!link) return null;
			sourceNode = sourceNode.resolveSubgraphOutputLink(link.origin_slot)?.outputNode ?? null;
			if (!sourceNode) return null;
		}
		const urls = nodeOutputStore.getNodeImageUrls(sourceNode);
		if (urls?.length) return urls[0];
		return null;
	};
	const updateImageUrl = () => {
		imageUrl.value = getInputImageUrl();
	};
	const updateDisplayedDimensions = () => {
		if (!imageEl.value || !containerEl.value) return;
		const img = imageEl.value;
		const container = containerEl.value;
		naturalWidth.value = img.naturalWidth;
		naturalHeight.value = img.naturalHeight;
		if (naturalWidth.value <= 0 || naturalHeight.value <= 0) {
			scaleFactor.value = 1;
			return;
		}
		const containerWidth = container.clientWidth;
		const containerHeight = container.clientHeight;
		const imageAspect = naturalWidth.value / naturalHeight.value;
		if (imageAspect > containerWidth / containerHeight) {
			displayedWidth.value = containerWidth;
			displayedHeight.value = containerWidth / imageAspect;
			imageOffsetX.value = 0;
			imageOffsetY.value = (containerHeight - displayedHeight.value) / 2;
		} else {
			displayedHeight.value = containerHeight;
			displayedWidth.value = containerHeight * imageAspect;
			imageOffsetX.value = (containerWidth - displayedWidth.value) / 2;
			imageOffsetY.value = 0;
		}
		if (naturalWidth.value <= 0 || displayedWidth.value <= 0) scaleFactor.value = 1;
		else scaleFactor.value = displayedWidth.value / naturalWidth.value;
	};
	const getEffectiveScale = () => {
		const container = containerEl.value;
		if (!container || naturalWidth.value <= 0 || displayedWidth.value <= 0) return 1;
		const rect = container.getBoundingClientRect();
		const clientWidth = container.clientWidth;
		if (!clientWidth || !rect.width) return 1;
		return displayedWidth.value / clientWidth * rect.width / naturalWidth.value;
	};
	const cropBoxStyle = computed(() => ({
		left: `${imageOffsetX.value + cropX.value * scaleFactor.value - CROP_BOX_BORDER}px`,
		top: `${imageOffsetY.value + cropY.value * scaleFactor.value - CROP_BOX_BORDER}px`,
		width: `${cropWidth.value * scaleFactor.value}px`,
		height: `${cropHeight.value * scaleFactor.value}px`
	}));
	const CORNER_DIRECTIONS = new Set([
		"nw",
		"ne",
		"sw",
		"se"
	]);
	const allResizeHandles = computed(() => {
		const x = imageOffsetX.value + cropX.value * scaleFactor.value;
		const y = imageOffsetY.value + cropY.value * scaleFactor.value;
		const w = cropWidth.value * scaleFactor.value;
		const h = cropHeight.value * scaleFactor.value;
		return [
			{
				direction: "top",
				class: "h-2 cursor-ns-resize",
				style: {
					left: `${x + HANDLE_SIZE}px`,
					top: `${y - HANDLE_SIZE / 2}px`,
					width: `${Math.max(0, w - HANDLE_SIZE * 2)}px`
				}
			},
			{
				direction: "bottom",
				class: "h-2 cursor-ns-resize",
				style: {
					left: `${x + HANDLE_SIZE}px`,
					top: `${y + h - HANDLE_SIZE / 2}px`,
					width: `${Math.max(0, w - HANDLE_SIZE * 2)}px`
				}
			},
			{
				direction: "left",
				class: "w-2 cursor-ew-resize",
				style: {
					left: `${x - HANDLE_SIZE / 2}px`,
					top: `${y + HANDLE_SIZE}px`,
					height: `${Math.max(0, h - HANDLE_SIZE * 2)}px`
				}
			},
			{
				direction: "right",
				class: "w-2 cursor-ew-resize",
				style: {
					left: `${x + w - HANDLE_SIZE / 2}px`,
					top: `${y + HANDLE_SIZE}px`,
					height: `${Math.max(0, h - HANDLE_SIZE * 2)}px`
				}
			},
			{
				direction: "nw",
				class: "cursor-nwse-resize rounded-sm bg-white/80",
				style: {
					left: `${x - CORNER_SIZE / 2}px`,
					top: `${y - CORNER_SIZE / 2}px`,
					width: `${CORNER_SIZE}px`,
					height: `${CORNER_SIZE}px`
				}
			},
			{
				direction: "ne",
				class: "cursor-nesw-resize rounded-sm bg-white/80",
				style: {
					left: `${x + w - CORNER_SIZE / 2}px`,
					top: `${y - CORNER_SIZE / 2}px`,
					width: `${CORNER_SIZE}px`,
					height: `${CORNER_SIZE}px`
				}
			},
			{
				direction: "sw",
				class: "cursor-nesw-resize rounded-sm bg-white/80",
				style: {
					left: `${x - CORNER_SIZE / 2}px`,
					top: `${y + h - CORNER_SIZE / 2}px`,
					width: `${CORNER_SIZE}px`,
					height: `${CORNER_SIZE}px`
				}
			},
			{
				direction: "se",
				class: "cursor-nwse-resize rounded-sm bg-white/80",
				style: {
					left: `${x + w - CORNER_SIZE / 2}px`,
					top: `${y + h - CORNER_SIZE / 2}px`,
					width: `${CORNER_SIZE}px`,
					height: `${CORNER_SIZE}px`
				}
			}
		];
	});
	const resizeHandles = computed(() => {
		if (!isLockEnabled.value) return allResizeHandles.value;
		return allResizeHandles.value.filter((h) => CORNER_DIRECTIONS.has(h.direction));
	});
	const handleImageLoad = () => {
		isLoading.value = false;
		updateDisplayedDimensions();
	};
	const handleImageError = () => {
		isLoading.value = false;
		imageUrl.value = null;
	};
	const capturePointer = (e) => e.target.setPointerCapture(e.pointerId);
	const releasePointer = (e) => e.target.releasePointerCapture(e.pointerId);
	const handleDragStart = (e) => {
		if (!imageUrl.value) return;
		isDragging.value = true;
		dragStartX.value = e.clientX;
		dragStartY.value = e.clientY;
		dragStartCropX.value = cropX.value;
		dragStartCropY.value = cropY.value;
		capturePointer(e);
	};
	const handleDragMove = (e) => {
		if (!isDragging.value) return;
		const effectiveScale = getEffectiveScale();
		if (effectiveScale === 0) return;
		const deltaX = (e.clientX - dragStartX.value) / effectiveScale;
		const deltaY = (e.clientY - dragStartY.value) / effectiveScale;
		const maxX = naturalWidth.value - cropWidth.value;
		const maxY = naturalHeight.value - cropHeight.value;
		cropX.value = Math.round(Math.max(0, Math.min(maxX, dragStartCropX.value + deltaX)));
		cropY.value = Math.round(Math.max(0, Math.min(maxY, dragStartCropY.value + deltaY)));
	};
	const handleDragEnd = (e) => {
		if (!isDragging.value) return;
		isDragging.value = false;
		releasePointer(e);
	};
	const handleResizeStart = (e, direction) => {
		if (!imageUrl.value) return;
		e.stopPropagation();
		isResizing.value = true;
		resizeDirection.value = direction;
		resizeStartX.value = e.clientX;
		resizeStartY.value = e.clientY;
		resizeStartCropX.value = cropX.value;
		resizeStartCropY.value = cropY.value;
		resizeStartCropWidth.value = cropWidth.value;
		resizeStartCropHeight.value = cropHeight.value;
		capturePointer(e);
	};
	const handleResizeMove = (e) => {
		if (!isResizing.value || !resizeDirection.value) return;
		const effectiveScale = getEffectiveScale();
		if (effectiveScale === 0) return;
		const dir = resizeDirection.value;
		const deltaX = (e.clientX - resizeStartX.value) / effectiveScale;
		const deltaY = (e.clientY - resizeStartY.value) / effectiveScale;
		const ratioValue = isLockEnabled.value ? lockedRatio.value : null;
		if (ratioValue != null && CORNER_DIRECTIONS.has(dir)) {
			handleConstrainedResize(dir, deltaX, deltaY, ratioValue);
			return;
		}
		const affectsLeft = dir === "left" || dir === "nw" || dir === "sw";
		const affectsRight = dir === "right" || dir === "ne" || dir === "se";
		const affectsTop = dir === "top" || dir === "nw" || dir === "ne";
		const affectsBottom = dir === "bottom" || dir === "sw" || dir === "se";
		let newX = resizeStartCropX.value;
		let newY = resizeStartCropY.value;
		let newWidth = resizeStartCropWidth.value;
		let newHeight = resizeStartCropHeight.value;
		if (affectsLeft) {
			const maxDeltaX = resizeStartCropWidth.value - MIN_CROP_SIZE;
			const minDeltaX = -resizeStartCropX.value;
			const clampedDeltaX = Math.max(minDeltaX, Math.min(maxDeltaX, deltaX));
			newX = resizeStartCropX.value + clampedDeltaX;
			newWidth = resizeStartCropWidth.value - clampedDeltaX;
		} else if (affectsRight) {
			const maxWidth = naturalWidth.value - resizeStartCropX.value;
			newWidth = Math.max(MIN_CROP_SIZE, Math.min(maxWidth, resizeStartCropWidth.value + deltaX));
		}
		if (affectsTop) {
			const maxDeltaY = resizeStartCropHeight.value - MIN_CROP_SIZE;
			const minDeltaY = -resizeStartCropY.value;
			const clampedDeltaY = Math.max(minDeltaY, Math.min(maxDeltaY, deltaY));
			newY = resizeStartCropY.value + clampedDeltaY;
			newHeight = resizeStartCropHeight.value - clampedDeltaY;
		} else if (affectsBottom) {
			const maxHeight = naturalHeight.value - resizeStartCropY.value;
			newHeight = Math.max(MIN_CROP_SIZE, Math.min(maxHeight, resizeStartCropHeight.value + deltaY));
		}
		if (affectsLeft || affectsRight) {
			cropX.value = Math.round(newX);
			cropWidth.value = Math.round(newWidth);
		}
		if (affectsTop || affectsBottom) {
			cropY.value = Math.round(newY);
			cropHeight.value = Math.round(newHeight);
		}
	};
	function handleConstrainedResize(dir, deltaX, deltaY, ratio) {
		const affectsLeft = dir === "nw" || dir === "sw";
		const affectsTop = dir === "nw" || dir === "ne";
		const sx = affectsLeft ? -1 : 1;
		const sy = affectsTop ? -1 : 1;
		const invRatio = 1 / ratio;
		const widthDelta = (deltaX * sx + deltaY * sy * invRatio) / (1 + invRatio * invRatio);
		let newWidth = Math.round(resizeStartCropWidth.value + widthDelta);
		let newHeight = Math.round(newWidth / ratio);
		if (newWidth < MIN_CROP_SIZE) {
			newWidth = MIN_CROP_SIZE;
			newHeight = Math.round(newWidth / ratio);
		}
		if (newHeight < MIN_CROP_SIZE) {
			newHeight = MIN_CROP_SIZE;
			newWidth = Math.round(newHeight * ratio);
		}
		let newX = resizeStartCropX.value;
		let newY = resizeStartCropY.value;
		if (affectsLeft) newX = resizeStartCropX.value + resizeStartCropWidth.value - newWidth;
		if (affectsTop) newY = resizeStartCropY.value + resizeStartCropHeight.value - newHeight;
		if (newX < 0) {
			newWidth += newX;
			newX = 0;
			newHeight = Math.round(newWidth / ratio);
		}
		if (newY < 0) {
			newHeight += newY;
			newY = 0;
			newWidth = Math.round(newHeight * ratio);
		}
		if (newX + newWidth > naturalWidth.value) {
			newWidth = naturalWidth.value - newX;
			newHeight = Math.round(newWidth / ratio);
		}
		if (newY + newHeight > naturalHeight.value) {
			newHeight = naturalHeight.value - newY;
			newWidth = Math.round(newHeight * ratio);
		}
		cropX.value = Math.round(newX);
		cropY.value = Math.round(newY);
		cropWidth.value = Math.max(MIN_CROP_SIZE, newWidth);
		cropHeight.value = Math.max(MIN_CROP_SIZE, newHeight);
	}
	const handleResizeEnd = (e) => {
		if (!isResizing.value) return;
		isResizing.value = false;
		resizeDirection.value = null;
		releasePointer(e);
	};
	const initialize = () => {
		if (nodeId != null) node.value = resolveNode(nodeId) ?? null;
		updateImageUrl();
	};
	watch(() => nodeOutputStore.nodeOutputs, () => updateImageUrl(), { deep: true });
	watch(() => nodeOutputStore.nodePreviewImages, () => updateImageUrl(), { deep: true });
	onMounted(initialize);
	return {
		imageUrl,
		isLoading,
		cropX,
		cropY,
		cropWidth,
		cropHeight,
		selectedRatio,
		isLockEnabled,
		cropBoxStyle,
		resizeHandles,
		handleImageLoad,
		handleImageError,
		handleDragStart,
		handleDragMove,
		handleDragEnd,
		handleResizeStart,
		handleResizeMove,
		handleResizeEnd
	};
}
//#endregion
//#region src/components/imagecrop/WidgetImageCrop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "flex size-full items-center justify-center"
};
var _hoisted_2 = { class: "text-sm" };
var _hoisted_3 = {
	key: 1,
	class: "flex size-full flex-col items-center justify-center text-center"
};
var _hoisted_4 = { class: "text-sm" };
var _hoisted_5 = ["src", "alt"];
var _hoisted_6 = ["onPointerdown"];
var _hoisted_7 = {
	key: 0,
	class: "flex shrink-0 items-center gap-2"
};
var _hoisted_8 = { class: "text-xs text-muted-foreground" };
//#endregion
//#region src/components/imagecrop/WidgetImageCrop.vue
var WidgetImageCrop_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetImageCrop",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		nodeId: {}
	}, {
		"modelValue": { default: () => ({
			x: 0,
			y: 0,
			width: 512,
			height: 512
		}) },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const isDisabled = computed(() => !!__props.widget.options?.disabled);
		const upstreamValue = useUpstreamValue(() => __props.widget.linkedUpstream, boundsExtractor());
		const effectiveBounds = computed({
			get: () => isDisabled.value && upstreamValue.value ? upstreamValue.value : modelValue.value,
			set: (v) => {
				if (!isDisabled.value) modelValue.value = v;
			}
		});
		const imageEl = useTemplateRef("imageEl");
		const containerEl = useTemplateRef("containerEl");
		const ratioKeys = Object.keys(ASPECT_RATIOS);
		const { imageUrl, isLoading, selectedRatio, isLockEnabled, cropBoxStyle, resizeHandles, handleImageLoad, handleImageError, handleDragStart, handleDragMove, handleDragEnd, handleResizeStart, handleResizeMove, handleResizeEnd } = useImageCrop(__props.nodeId, {
			imageEl,
			containerEl,
			modelValue: effectiveBounds
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "widget-expands relative flex size-full flex-col gap-1",
				onPointerdown: _cache[11] || (_cache[11] = withModifiers(() => {}, ["stop"])),
				onPointermove: _cache[12] || (_cache[12] = withModifiers(() => {}, ["stop"])),
				onPointerup: _cache[13] || (_cache[13] = withModifiers(() => {}, ["stop"]))
			}, [
				createBaseVNode("div", {
					ref_key: "containerEl",
					ref: containerEl,
					class: "relative min-h-0 flex-1 overflow-hidden rounded-[5px] bg-node-component-surface"
				}, [
					unref(isLoading) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.$t("imageCrop.loading")), 1)])) : !unref(imageUrl) ? (openBlock(), createElementBlock("div", _hoisted_3, [_cache[14] || (_cache[14] = createBaseVNode("i", { class: "mb-2 icon-[lucide--image] size-12" }, null, -1)), createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("imageCrop.noInputImage")), 1)])) : (openBlock(), createElementBlock("img", {
						key: 2,
						ref_key: "imageEl",
						ref: imageEl,
						src: unref(imageUrl),
						alt: _ctx.$t("imageCrop.cropPreviewAlt"),
						draggable: "false",
						class: "block size-full object-contain select-none",
						onLoad: _cache[0] || (_cache[0] = (...args) => unref(handleImageLoad) && unref(handleImageLoad)(...args)),
						onError: _cache[1] || (_cache[1] = (...args) => unref(handleImageError) && unref(handleImageError)(...args)),
						onDragstart: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"]))
					}, null, 40, _hoisted_5)),
					unref(imageUrl) && !unref(isLoading) ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(unref(cn)("absolute box-content cursor-move border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]", isDisabled.value && "pointer-events-none opacity-60")),
						style: normalizeStyle(unref(cropBoxStyle)),
						onPointerdown: _cache[3] || (_cache[3] = (...args) => unref(handleDragStart) && unref(handleDragStart)(...args)),
						onPointermove: _cache[4] || (_cache[4] = (...args) => unref(handleDragMove) && unref(handleDragMove)(...args)),
						onPointerup: _cache[5] || (_cache[5] = (...args) => unref(handleDragEnd) && unref(handleDragEnd)(...args))
					}, null, 38)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(unref(resizeHandles), (handle) => {
						return withDirectives((openBlock(), createElementBlock("div", {
							key: handle.direction,
							class: normalizeClass(unref(cn)("absolute", handle.class, isDisabled.value && "pointer-events-none opacity-60")),
							style: normalizeStyle(handle.style),
							onPointerdown: (e) => unref(handleResizeStart)(e, handle.direction),
							onPointermove: _cache[6] || (_cache[6] = (...args) => unref(handleResizeMove) && unref(handleResizeMove)(...args)),
							onPointerup: _cache[7] || (_cache[7] = (...args) => unref(handleResizeEnd) && unref(handleResizeEnd)(...args))
						}, null, 46, _hoisted_6)), [[vShow, unref(imageUrl) && !unref(isLoading)]]);
					}), 128))
				], 512),
				!isDisabled.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
					createBaseVNode("label", _hoisted_8, toDisplayString(_ctx.$t("imageCrop.ratio")), 1),
					createVNode(Select_default, {
						modelValue: unref(selectedRatio),
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null)
					}, {
						default: withCtx(() => [createVNode(SelectTrigger_default, { class: "h-7 w-24 text-xs" }, {
							default: withCtx(() => [createVNode(SelectValue_default)]),
							_: 1
						}), createVNode(SelectContent_default, null, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(ratioKeys), (key) => {
								return openBlock(), createBlock(SelectItem_default, {
									key,
									value: key
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(key === "custom" ? _ctx.$t("imageCrop.custom") : key), 1)]),
									_: 2
								}, 1032, ["value"]);
							}), 128))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(Button_default, {
						size: "icon",
						variant: unref(isLockEnabled) ? "primary" : "secondary",
						class: "size-7",
						"aria-label": unref(isLockEnabled) ? _ctx.$t("imageCrop.unlockRatio") : _ctx.$t("imageCrop.lockRatio"),
						onClick: _cache[9] || (_cache[9] = ($event) => isLockEnabled.value = !unref(isLockEnabled))
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(unref(isLockEnabled) ? "icon-[lucide--lock] size-3.5" : "icon-[lucide--lock-open] size-3.5") }, null, 2)]),
						_: 1
					}, 8, ["variant", "aria-label"])
				])) : createCommentVNode("", true),
				createVNode(WidgetBoundingBox_default, {
					modelValue: effectiveBounds.value,
					"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => effectiveBounds.value = $event),
					disabled: isDisabled.value,
					class: "shrink-0"
				}, null, 8, ["modelValue", "disabled"])
			], 32);
		};
	}
});
//#endregion
export { WidgetImageCrop_default as default };

//# sourceMappingURL=WidgetImageCrop-nvxVrfSu.js.map