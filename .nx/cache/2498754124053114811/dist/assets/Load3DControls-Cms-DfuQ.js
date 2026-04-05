import "./rolldown-runtime-DBfy44LZ.js";
import { x as script } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, G as mergeModels, I as createVNode, O as createBaseVNode, Q as onUnmounted, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, at as resolveDirective, b as withModifiers, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, ut as useModel, v as vShow, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { a as useSettingStore } from "./dialogService-ClaKHdWI.js";
//#region src/components/load3d/controls/PopupSlider.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = { class: "show-slider relative" };
var _hoisted_2$5 = { class: "absolute top-0 left-12 w-[150px] rounded-lg bg-interface-menu-surface p-4 shadow-lg" };
//#endregion
//#region src/components/load3d/controls/PopupSlider.vue
var PopupSlider_default = /* @__PURE__ */ defineComponent({
	__name: "PopupSlider",
	props: /* @__PURE__ */ mergeModels({
		icon: { default: "pi-expand" },
		tooltipText: {},
		min: { default: 10 },
		max: { default: 150 },
		step: { default: 1 }
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const value = useModel(__props, "modelValue");
		const showSlider = ref(false);
		const toggleSlider = () => {
			showSlider.value = !showSlider.value;
		};
		const closeSlider = (e) => {
			if (!e.target.closest(".show-slider")) showSlider.value = false;
		};
		onMounted(() => {
			document.addEventListener("click", closeSlider);
		});
		onUnmounted(() => {
			document.removeEventListener("click", closeSlider);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$6, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": _ctx.tooltipText,
				onClick: toggleSlider
			}, {
				default: withCtx(() => [createBaseVNode("i", { class: normalizeClass([
					"pi",
					_ctx.icon,
					"text-lg text-base-foreground"
				]) }, null, 2)]),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: _ctx.tooltipText,
					showDelay: 300
				},
				void 0,
				{ right: true }
			]]), withDirectives(createBaseVNode("div", _hoisted_2$5, [createVNode(unref(script), {
				modelValue: value.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
				class: "w-full",
				min: _ctx.min,
				max: _ctx.max,
				step: _ctx.step
			}, null, 8, [
				"modelValue",
				"min",
				"max",
				"step"
			])], 512), [[vShow, showSlider.value]])]);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/CameraControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { class: "flex flex-col" };
//#endregion
//#region src/components/load3d/controls/CameraControls.vue
var CameraControls_default = /* @__PURE__ */ defineComponent({
	__name: "CameraControls",
	props: {
		"cameraType": {},
		"cameraTypeModifiers": {},
		"fov": {},
		"fovModifiers": {}
	},
	emits: ["update:cameraType", "update:fov"],
	setup(__props) {
		const cameraType = useModel(__props, "cameraType");
		const fov = useModel(__props, "fov");
		const showFOVButton = computed(() => cameraType.value === "perspective");
		const switchCamera = () => {
			cameraType.value = cameraType.value === "perspective" ? "orthographic" : "perspective";
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$5, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": _ctx.$t("load3d.switchCamera"),
				onClick: switchCamera
			}, {
				default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: normalizeClass([
					"pi",
					"pi-camera",
					"text-lg text-base-foreground"
				]) }, null, -1)])),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: _ctx.$t("load3d.switchCamera"),
					showDelay: 300
				},
				void 0,
				{ right: true }
			]]), showFOVButton.value ? (openBlock(), createBlock(PopupSlider_default, {
				key: 0,
				modelValue: fov.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fov.value = $event),
				"tooltip-text": _ctx.$t("load3d.fov")
			}, null, 8, ["modelValue", "tooltip-text"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/ExportControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "flex flex-col" };
var _hoisted_2$4 = { class: "show-export-formats relative" };
var _hoisted_3$4 = { class: "absolute top-0 left-12 rounded-lg bg-interface-menu-surface shadow-lg" };
var _hoisted_4$3 = { class: "flex flex-col" };
//#endregion
//#region src/components/load3d/controls/ExportControls.vue
var ExportControls_default = /* @__PURE__ */ defineComponent({
	__name: "ExportControls",
	emits: ["exportModel"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const showExportFormats = ref(false);
		const exportFormats = [
			{
				label: "GLB",
				value: "glb"
			},
			{
				label: "OBJ",
				value: "obj"
			},
			{
				label: "STL",
				value: "stl"
			}
		];
		function toggleExportFormats() {
			showExportFormats.value = !showExportFormats.value;
		}
		function exportModel(format) {
			emit("exportModel", format);
			showExportFormats.value = false;
		}
		function closeExportFormatsList(e) {
			if (!e.target.closest(".show-export-formats")) showExportFormats.value = false;
		}
		onMounted(() => {
			document.addEventListener("click", closeExportFormatsList);
		});
		onUnmounted(() => {
			document.removeEventListener("click", closeExportFormatsList);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$4, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": _ctx.$t("load3d.exportModel"),
				onClick: toggleExportFormats
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-download text-lg text-base-foreground" }, null, -1)])),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: _ctx.$t("load3d.exportModel"),
					showDelay: 300
				},
				void 0,
				{ right: true }
			]]), withDirectives(createBaseVNode("div", _hoisted_3$4, [createBaseVNode("div", _hoisted_4$3, [(openBlock(), createElementBlock(Fragment, null, renderList(exportFormats, (format) => {
				return createVNode(Button_default, {
					key: format.value,
					variant: "textonly",
					class: "text-base-foreground",
					onClick: ($event) => exportModel(format.value)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(format.label), 1)]),
					_: 2
				}, 1032, ["onClick"]);
			}), 64))])], 512), [[vShow, showExportFormats.value]])])]);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/LightControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "flex flex-col" };
var _hoisted_2$3 = {
	key: 0,
	class: "show-light-intensity relative"
};
var _hoisted_3$3 = {
	class: "absolute top-0 left-12 rounded-lg bg-black/50 p-4 shadow-lg",
	style: { "width": "150px" }
};
//#endregion
//#region src/components/load3d/controls/LightControls.vue
var LightControls_default = /* @__PURE__ */ defineComponent({
	__name: "LightControls",
	props: {
		"lightIntensity": {},
		"lightIntensityModifiers": {},
		"materialMode": {},
		"materialModeModifiers": {}
	},
	emits: ["update:lightIntensity", "update:materialMode"],
	setup(__props) {
		const lightIntensity = useModel(__props, "lightIntensity");
		const materialMode = useModel(__props, "materialMode");
		const showLightIntensityButton = computed(() => materialMode.value === "original");
		const showLightIntensity = ref(false);
		const lightIntensityMaximum = useSettingStore().get("Comfy.Load3D.LightIntensityMaximum");
		const lightIntensityMinimum = useSettingStore().get("Comfy.Load3D.LightIntensityMinimum");
		const lightAdjustmentIncrement = useSettingStore().get("Comfy.Load3D.LightAdjustmentIncrement");
		function toggleLightIntensity() {
			showLightIntensity.value = !showLightIntensity.value;
		}
		function closeLightSlider(e) {
			if (!e.target.closest(".show-light-intensity")) showLightIntensity.value = false;
		}
		onMounted(() => {
			document.addEventListener("click", closeLightSlider);
		});
		onUnmounted(() => {
			document.removeEventListener("click", closeLightSlider);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$3, [showLightIntensityButton.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": _ctx.$t("load3d.lightIntensity"),
				onClick: toggleLightIntensity
			}, {
				default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-sun text-lg text-base-foreground" }, null, -1)])),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: _ctx.$t("load3d.lightIntensity"),
					showDelay: 300
				},
				void 0,
				{ right: true }
			]]), withDirectives(createBaseVNode("div", _hoisted_3$3, [createVNode(unref(script), {
				modelValue: lightIntensity.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => lightIntensity.value = $event),
				class: "w-full",
				min: unref(lightIntensityMinimum),
				max: unref(lightIntensityMaximum),
				step: unref(lightAdjustmentIncrement)
			}, null, 8, [
				"modelValue",
				"min",
				"max",
				"step"
			])], 512), [[vShow, showLightIntensity.value]])])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/ModelControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex flex-col" };
var _hoisted_2$2 = { class: "show-up-direction relative" };
var _hoisted_3$2 = { class: "absolute top-0 left-12 rounded-lg bg-interface-menu-surface shadow-lg" };
var _hoisted_4$2 = { class: "flex flex-col" };
var _hoisted_5$2 = {
	key: 0,
	class: "show-material-mode relative"
};
var _hoisted_6$1 = { class: "absolute top-0 left-12 rounded-lg bg-interface-menu-surface shadow-lg" };
var _hoisted_7 = { class: "flex flex-col" };
var _hoisted_8 = { key: 1 };
//#endregion
//#region src/components/load3d/controls/ModelControls.vue
var ModelControls_default = /* @__PURE__ */ defineComponent({
	__name: "ModelControls",
	props: /* @__PURE__ */ mergeModels({
		hideMaterialMode: {
			type: Boolean,
			default: false
		},
		isPlyModel: {
			type: Boolean,
			default: false
		},
		hasSkeleton: {
			type: Boolean,
			default: false
		}
	}, {
		"materialMode": {},
		"materialModeModifiers": {},
		"upDirection": {},
		"upDirectionModifiers": {},
		"showSkeleton": { type: Boolean },
		"showSkeletonModifiers": {}
	}),
	emits: [
		"update:materialMode",
		"update:upDirection",
		"update:showSkeleton"
	],
	setup(__props) {
		const { t } = useI18n();
		const materialMode = useModel(__props, "materialMode");
		const upDirection = useModel(__props, "upDirection");
		const showSkeleton = useModel(__props, "showSkeleton");
		const showUpDirection = ref(false);
		const showMaterialMode = ref(false);
		const upDirections = [
			"original",
			"-x",
			"+x",
			"-y",
			"+y",
			"-z",
			"+z"
		];
		const materialModes = computed(() => {
			const modes = [
				"original",
				"normal",
				"wireframe"
			];
			if (__props.isPlyModel) modes.splice(1, 0, "pointCloud");
			return modes;
		});
		function toggleUpDirection() {
			showUpDirection.value = !showUpDirection.value;
			showMaterialMode.value = false;
		}
		function selectUpDirection(direction) {
			upDirection.value = direction;
			showUpDirection.value = false;
		}
		function toggleMaterialMode() {
			showMaterialMode.value = !showMaterialMode.value;
			showUpDirection.value = false;
		}
		function selectMaterialMode(mode) {
			materialMode.value = mode;
			showMaterialMode.value = false;
		}
		function formatMaterialMode(mode) {
			return t(`load3d.materialModes.${mode}`);
		}
		function closeSceneSlider(e) {
			const target = e.target;
			if (!target.closest(".show-up-direction")) showUpDirection.value = false;
			if (!target.closest(".show-material-mode")) showMaterialMode.value = false;
		}
		onMounted(() => {
			document.addEventListener("click", closeSceneSlider);
		});
		onUnmounted(() => {
			document.removeEventListener("click", closeSceneSlider);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$2, [
				createBaseVNode("div", _hoisted_2$2, [withDirectives((openBlock(), createBlock(Button_default, {
					size: "icon",
					variant: "textonly",
					class: "rounded-full",
					"aria-label": unref(t)("load3d.upDirection"),
					onClick: toggleUpDirection
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-arrow-up text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: unref(t)("load3d.upDirection"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]), withDirectives(createBaseVNode("div", _hoisted_3$2, [createBaseVNode("div", _hoisted_4$2, [(openBlock(), createElementBlock(Fragment, null, renderList(upDirections, (direction) => {
					return createVNode(Button_default, {
						key: direction,
						variant: "textonly",
						class: normalizeClass(unref(cn)("text-base-foreground", upDirection.value === direction && "bg-blue-500")),
						onClick: ($event) => selectUpDirection(direction)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(direction.toUpperCase()), 1)]),
						_: 2
					}, 1032, ["class", "onClick"]);
				}), 64))])], 512), [[vShow, showUpDirection.value]])]),
				!_ctx.hideMaterialMode ? (openBlock(), createElementBlock("div", _hoisted_5$2, [withDirectives((openBlock(), createBlock(Button_default, {
					size: "icon",
					variant: "textonly",
					class: "rounded-full",
					"aria-label": unref(t)("load3d.materialMode"),
					onClick: toggleMaterialMode
				}, {
					default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-box text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: unref(t)("load3d.materialMode"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]), withDirectives(createBaseVNode("div", _hoisted_6$1, [createBaseVNode("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(materialModes.value, (mode) => {
					return openBlock(), createBlock(Button_default, {
						key: mode,
						variant: "textonly",
						class: normalizeClass(unref(cn)("whitespace-nowrap text-base-foreground", materialMode.value === mode && "bg-blue-500")),
						onClick: ($event) => selectMaterialMode(mode)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formatMaterialMode(mode)), 1)]),
						_: 2
					}, 1032, ["class", "onClick"]);
				}), 128))])], 512), [[vShow, showMaterialMode.value]])])) : createCommentVNode("", true),
				_ctx.hasSkeleton ? (openBlock(), createElementBlock("div", _hoisted_8, [withDirectives((openBlock(), createBlock(Button_default, {
					size: "icon",
					variant: "textonly",
					class: normalizeClass(unref(cn)("rounded-full", showSkeleton.value && "bg-blue-500")),
					"aria-label": unref(t)("load3d.showSkeleton"),
					onClick: _cache[0] || (_cache[0] = ($event) => showSkeleton.value = !showSkeleton.value)
				}, {
					default: withCtx(() => _cache[3] || (_cache[3] = [createBaseVNode("i", { class: "pi pi-sitemap text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["class", "aria-label"])), [[
					_directive_tooltip,
					{
						value: unref(t)("load3d.showSkeleton"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]])])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/SceneControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex flex-col" };
var _hoisted_2$1 = { key: 0 };
var _hoisted_3$1 = ["value"];
var _hoisted_4$1 = { key: 1 };
var _hoisted_5$1 = { key: 2 };
var _hoisted_6 = { key: 4 };
//#endregion
//#region src/components/load3d/controls/SceneControls.vue
var SceneControls_default = /* @__PURE__ */ defineComponent({
	__name: "SceneControls",
	props: {
		"showGrid": { type: Boolean },
		"showGridModifiers": {},
		"backgroundColor": {},
		"backgroundColorModifiers": {},
		"backgroundImage": {},
		"backgroundImageModifiers": {},
		"backgroundRenderMode": { default: "tiled" },
		"backgroundRenderModeModifiers": {},
		"fov": {},
		"fovModifiers": {}
	},
	emits: /* @__PURE__ */ mergeModels(["updateBackgroundImage"], [
		"update:showGrid",
		"update:backgroundColor",
		"update:backgroundImage",
		"update:backgroundRenderMode",
		"update:fov"
	]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const showGrid = useModel(__props, "showGrid");
		const backgroundColor = useModel(__props, "backgroundColor");
		const backgroundImage = useModel(__props, "backgroundImage");
		const backgroundRenderMode = useModel(__props, "backgroundRenderMode");
		const fov = useModel(__props, "fov");
		const hasBackgroundImage = computed(() => backgroundImage.value && backgroundImage.value !== "");
		const colorPickerRef = ref(null);
		const imagePickerRef = ref(null);
		const toggleGrid = () => {
			showGrid.value = !showGrid.value;
		};
		const updateBackgroundColor = (color) => {
			backgroundColor.value = color;
		};
		const openColorPicker = () => {
			colorPickerRef.value?.click();
		};
		const openImagePicker = () => {
			imagePickerRef.value?.click();
		};
		const uploadBackgroundImage = (event) => {
			const input = event.target;
			if (input.files && input.files[0]) emit("updateBackgroundImage", input.files[0]);
		};
		const removeBackgroundImage = () => {
			emit("updateBackgroundImage", null);
		};
		const toggleBackgroundRenderMode = () => {
			backgroundRenderMode.value = backgroundRenderMode.value === "panorama" ? "tiled" : "panorama";
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				withDirectives((openBlock(), createBlock(Button_default, {
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)("rounded-full", showGrid.value && "ring-2 ring-white/50")),
					"aria-label": _ctx.$t("load3d.showGrid"),
					onClick: toggleGrid
				}, {
					default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-table text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["class", "aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.showGrid"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]]),
				!hasBackgroundImage.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [withDirectives((openBlock(), createBlock(Button_default, {
					variant: "textonly",
					size: "icon",
					class: "rounded-full",
					"aria-label": _ctx.$t("load3d.backgroundColor"),
					onClick: openColorPicker
				}, {
					default: withCtx(() => [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "pi pi-palette text-lg text-base-foreground" }, null, -1)), createBaseVNode("input", {
						ref_key: "colorPickerRef",
						ref: colorPickerRef,
						type: "color",
						value: backgroundColor.value,
						class: "pointer-events-none absolute m-0 size-0 p-0 opacity-0",
						onInput: _cache[0] || (_cache[0] = ($event) => updateBackgroundColor($event.target.value))
					}, null, 40, _hoisted_3$1)]),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.backgroundColor"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]])])) : createCommentVNode("", true),
				!hasBackgroundImage.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [withDirectives((openBlock(), createBlock(Button_default, {
					variant: "textonly",
					size: "icon",
					class: "rounded-full",
					"aria-label": _ctx.$t("load3d.uploadBackgroundImage"),
					onClick: openImagePicker
				}, {
					default: withCtx(() => [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-image text-lg text-base-foreground" }, null, -1)), createBaseVNode("input", {
						ref_key: "imagePickerRef",
						ref: imagePickerRef,
						type: "file",
						accept: "image/*",
						class: "pointer-events-none absolute m-0 size-0 p-0 opacity-0",
						onChange: uploadBackgroundImage
					}, null, 544)]),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.uploadBackgroundImage"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]])])) : createCommentVNode("", true),
				hasBackgroundImage.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [withDirectives((openBlock(), createBlock(Button_default, {
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)("rounded-full", backgroundRenderMode.value === "panorama" && "ring-2 ring-white/50")),
					"aria-label": _ctx.$t("load3d.panoramaMode"),
					onClick: toggleBackgroundRenderMode
				}, {
					default: withCtx(() => _cache[5] || (_cache[5] = [createBaseVNode("i", { class: "pi pi-globe text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["class", "aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.panoramaMode"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]])])) : createCommentVNode("", true),
				hasBackgroundImage.value && backgroundRenderMode.value === "panorama" ? (openBlock(), createBlock(PopupSlider_default, {
					key: 3,
					modelValue: fov.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => fov.value = $event),
					"tooltip-text": _ctx.$t("load3d.fov")
				}, null, 8, ["modelValue", "tooltip-text"])) : createCommentVNode("", true),
				hasBackgroundImage.value ? (openBlock(), createElementBlock("div", _hoisted_6, [withDirectives((openBlock(), createBlock(Button_default, {
					variant: "textonly",
					size: "icon",
					class: "rounded-full",
					"aria-label": _ctx.$t("load3d.removeBackgroundImage"),
					onClick: removeBackgroundImage
				}, {
					default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("i", { class: "pi pi-times text-lg text-base-foreground" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"])), [[
					_directive_tooltip,
					{
						value: _ctx.$t("load3d.removeBackgroundImage"),
						showDelay: 300
					},
					void 0,
					{ right: true }
				]])])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/components/load3d/Load3DControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "show-menu relative" };
var _hoisted_2 = { class: "absolute top-0 left-12 rounded-lg bg-interface-menu-surface shadow-lg" };
var _hoisted_3 = { class: "flex flex-col" };
var _hoisted_4 = { class: "whitespace-nowrap text-base-foreground" };
var _hoisted_5 = { class: "rounded-lg bg-smoke-700/30" };
//#endregion
//#region src/components/load3d/Load3DControls.vue
var Load3DControls_default = /* @__PURE__ */ defineComponent({
	__name: "Load3DControls",
	props: /* @__PURE__ */ mergeModels({
		isSplatModel: {
			type: Boolean,
			default: false
		},
		isPlyModel: {
			type: Boolean,
			default: false
		},
		hasSkeleton: {
			type: Boolean,
			default: false
		}
	}, {
		"sceneConfig": {},
		"sceneConfigModifiers": {},
		"modelConfig": {},
		"modelConfigModifiers": {},
		"cameraConfig": {},
		"cameraConfigModifiers": {},
		"lightConfig": {},
		"lightConfigModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["updateBackgroundImage", "exportModel"], [
		"update:sceneConfig",
		"update:modelConfig",
		"update:cameraConfig",
		"update:lightConfig"
	]),
	setup(__props, { emit: __emit }) {
		const sceneConfig = useModel(__props, "sceneConfig");
		const modelConfig = useModel(__props, "modelConfig");
		const cameraConfig = useModel(__props, "cameraConfig");
		const lightConfig = useModel(__props, "lightConfig");
		const isMenuOpen = ref(false);
		const activeCategory = ref("scene");
		const categoryLabels = {
			scene: "load3d.scene",
			model: "load3d.model",
			camera: "load3d.camera",
			light: "load3d.light",
			export: "load3d.export"
		};
		const availableCategories = computed(() => {
			if (__props.isSplatModel) return [
				"scene",
				"model",
				"camera"
			];
			return [
				"scene",
				"model",
				"camera",
				"light",
				"export"
			];
		});
		const showSceneControls = computed(() => activeCategory.value === "scene" && !!sceneConfig.value);
		const showModelControls = computed(() => activeCategory.value === "model" && !!modelConfig.value);
		const showCameraControls = computed(() => activeCategory.value === "camera" && !!cameraConfig.value);
		const showLightControls = computed(() => activeCategory.value === "light" && !!lightConfig.value && !!modelConfig.value);
		const showExportControls = computed(() => activeCategory.value === "export");
		const toggleMenu = () => {
			isMenuOpen.value = !isMenuOpen.value;
		};
		const selectCategory = (category) => {
			activeCategory.value = category;
			isMenuOpen.value = false;
		};
		const getCategoryIcon = (category) => {
			return `${{
				scene: "pi pi-image",
				model: "pi pi-box",
				camera: "pi pi-camera",
				light: "pi pi-sun",
				export: "pi pi-download"
			}[category]} text-base-foreground text-lg`;
		};
		const emit = __emit;
		const handleBackgroundImageUpdate = (file) => {
			emit("updateBackgroundImage", file);
		};
		const handleExportModel = (format) => {
			emit("exportModel", format);
		};
		const closeSlider = (e) => {
			if (!e.target.closest(".show-menu")) isMenuOpen.value = false;
		};
		onMounted(() => {
			document.addEventListener("click", closeSlider);
		});
		onUnmounted(() => {
			document.removeEventListener("click", closeSlider);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "pointer-events-auto absolute top-12 left-2 z-20 flex flex-col rounded-lg bg-backdrop/30",
				onPointerdown: _cache[12] || (_cache[12] = withModifiers(() => {}, ["stop"])),
				onPointermove: _cache[13] || (_cache[13] = withModifiers(() => {}, ["stop"])),
				onPointerup: _cache[14] || (_cache[14] = withModifiers(() => {}, ["stop"])),
				onWheel: _cache[15] || (_cache[15] = withModifiers(() => {}, ["stop"]))
			}, [createBaseVNode("div", _hoisted_1, [createVNode(Button_default, {
				variant: "textonly",
				size: "icon",
				"aria-label": _ctx.$t("menu.showMenu"),
				class: "rounded-full",
				onClick: toggleMenu
			}, {
				default: withCtx(() => _cache[16] || (_cache[16] = [createBaseVNode("i", { class: "pi pi-bars text-lg text-base-foreground" }, null, -1)])),
				_: 1
			}, 8, ["aria-label"]), withDirectives(createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCategories.value, (category) => {
				return openBlock(), createBlock(Button_default, {
					key: category,
					variant: "textonly",
					class: normalizeClass(unref(cn)("flex w-full items-center justify-start", activeCategory.value === category && "bg-button-active-surface")),
					onClick: ($event) => selectCategory(category)
				}, {
					default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(getCategoryIcon(category)) }, null, 2), createBaseVNode("span", _hoisted_4, toDisplayString(_ctx.$t(categoryLabels[category])), 1)]),
					_: 2
				}, 1032, ["class", "onClick"]);
			}), 128))])], 512), [[vShow, isMenuOpen.value]])]), withDirectives(createBaseVNode("div", _hoisted_5, [
				showSceneControls.value ? (openBlock(), createBlock(SceneControls_default, {
					key: 0,
					"show-grid": sceneConfig.value.showGrid,
					"onUpdate:showGrid": _cache[0] || (_cache[0] = ($event) => sceneConfig.value.showGrid = $event),
					"background-color": sceneConfig.value.backgroundColor,
					"onUpdate:backgroundColor": _cache[1] || (_cache[1] = ($event) => sceneConfig.value.backgroundColor = $event),
					"background-image": sceneConfig.value.backgroundImage,
					"onUpdate:backgroundImage": _cache[2] || (_cache[2] = ($event) => sceneConfig.value.backgroundImage = $event),
					"background-render-mode": sceneConfig.value.backgroundRenderMode,
					"onUpdate:backgroundRenderMode": _cache[3] || (_cache[3] = ($event) => sceneConfig.value.backgroundRenderMode = $event),
					fov: cameraConfig.value.fov,
					"onUpdate:fov": _cache[4] || (_cache[4] = ($event) => cameraConfig.value.fov = $event),
					onUpdateBackgroundImage: handleBackgroundImageUpdate
				}, null, 8, [
					"show-grid",
					"background-color",
					"background-image",
					"background-render-mode",
					"fov"
				])) : createCommentVNode("", true),
				showModelControls.value ? (openBlock(), createBlock(ModelControls_default, {
					key: 1,
					"material-mode": modelConfig.value.materialMode,
					"onUpdate:materialMode": _cache[5] || (_cache[5] = ($event) => modelConfig.value.materialMode = $event),
					"up-direction": modelConfig.value.upDirection,
					"onUpdate:upDirection": _cache[6] || (_cache[6] = ($event) => modelConfig.value.upDirection = $event),
					"show-skeleton": modelConfig.value.showSkeleton,
					"onUpdate:showSkeleton": _cache[7] || (_cache[7] = ($event) => modelConfig.value.showSkeleton = $event),
					"hide-material-mode": _ctx.isSplatModel,
					"is-ply-model": _ctx.isPlyModel,
					"has-skeleton": _ctx.hasSkeleton
				}, null, 8, [
					"material-mode",
					"up-direction",
					"show-skeleton",
					"hide-material-mode",
					"is-ply-model",
					"has-skeleton"
				])) : createCommentVNode("", true),
				showCameraControls.value ? (openBlock(), createBlock(CameraControls_default, {
					key: 2,
					"camera-type": cameraConfig.value.cameraType,
					"onUpdate:cameraType": _cache[8] || (_cache[8] = ($event) => cameraConfig.value.cameraType = $event),
					fov: cameraConfig.value.fov,
					"onUpdate:fov": _cache[9] || (_cache[9] = ($event) => cameraConfig.value.fov = $event)
				}, null, 8, ["camera-type", "fov"])) : createCommentVNode("", true),
				showLightControls.value ? (openBlock(), createBlock(LightControls_default, {
					key: 3,
					"light-intensity": lightConfig.value.intensity,
					"onUpdate:lightIntensity": _cache[10] || (_cache[10] = ($event) => lightConfig.value.intensity = $event),
					"material-mode": modelConfig.value.materialMode,
					"onUpdate:materialMode": _cache[11] || (_cache[11] = ($event) => modelConfig.value.materialMode = $event)
				}, null, 8, ["light-intensity", "material-mode"])) : createCommentVNode("", true),
				showExportControls.value ? (openBlock(), createBlock(ExportControls_default, {
					key: 4,
					onExportModel: handleExportModel
				})) : createCommentVNode("", true)
			], 512), [[vShow, activeCategory.value]])], 32);
		};
	}
});
//#endregion
export { Load3DControls_default as t };

//# sourceMappingURL=Load3DControls-Cms-DfuQ.js.map