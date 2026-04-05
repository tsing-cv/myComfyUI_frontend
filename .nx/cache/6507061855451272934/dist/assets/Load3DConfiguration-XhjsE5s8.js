import "./rolldown-runtime-DBfy44LZ.js";
import { b as LiteGraph, r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import { a as useSettingStore } from "./dialogService-DKx-VcuC.js";
import { r as Load3dUtils } from "./load3dService-DBqNe2jy.js";
//#region src/extensions/core/load3d/exportMenuHelper.ts
var EXPORT_FORMATS = [
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
/**
* Creates export menu items for a 3D node using the new extension API.
* Returns an array of context menu items including a separator and export submenu.
*/
function createExportMenuItems(load3d) {
	return [null, {
		content: "Save",
		has_submenu: true,
		callback: (_value, _options, event, prev_menu) => {
			const submenuOptions = EXPORT_FORMATS.map((format) => ({
				content: format.label,
				callback: () => {
					(async () => {
						try {
							await load3d.exportModel(format.value);
							useToastStore().add({
								severity: "success",
								summary: t("toastMessages.exportSuccess", { format: format.label })
							});
						} catch (error) {
							console.error("Export failed:", error);
							useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: format.label }));
						}
					})();
				}
			}));
			new LiteGraph.ContextMenu(submenuOptions, {
				event,
				parentMenu: prev_menu
			});
		}
	}];
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.exportMenuHelper = window.comfyAPI.exportMenuHelper || {};
window.comfyAPI.exportMenuHelper.createExportMenuItems = createExportMenuItems;
//#endregion
//#region src/extensions/core/load3d/Load3DConfiguration.ts
var Load3DConfiguration = class {
	constructor(load3d, properties) {
		this.load3d = load3d;
		this.properties = properties;
	}
	configureForSaveMesh(loadFolder, filePath) {
		this.setupModelHandlingForSaveMesh(filePath, loadFolder);
		this.setupDefaultProperties();
	}
	configure(setting) {
		this.setupModelHandling(setting.modelWidget, setting.loadFolder, setting.cameraState);
		this.setupTargetSize(setting.width, setting.height);
		this.setupDefaultProperties(setting.bgImagePath);
	}
	setupTargetSize(width, height) {
		if (width && height) {
			this.load3d.setTargetSize(width.value, height.value);
			width.callback = (value) => {
				this.load3d.setTargetSize(value, height.value);
			};
			height.callback = (value) => {
				this.load3d.setTargetSize(width.value, value);
			};
		}
	}
	setupModelHandlingForSaveMesh(filePath, loadFolder) {
		const onModelWidgetUpdate = this.createModelUpdateHandler(loadFolder);
		if (filePath) onModelWidgetUpdate(filePath);
	}
	setupModelHandling(modelWidget, loadFolder, cameraState) {
		const onModelWidgetUpdate = this.createModelUpdateHandler(loadFolder, cameraState);
		if (modelWidget.value) onModelWidgetUpdate(modelWidget.value);
		const originalCallback = modelWidget.callback;
		let currentValue = modelWidget.value;
		Object.defineProperty(modelWidget, "value", {
			get() {
				return currentValue;
			},
			set(newValue) {
				currentValue = newValue;
				if (modelWidget.callback && newValue !== void 0 && newValue !== "") modelWidget.callback(newValue);
			},
			enumerable: true,
			configurable: true
		});
		modelWidget.callback = (value) => {
			onModelWidgetUpdate(value);
			if (originalCallback) originalCallback(value);
		};
	}
	setupDefaultProperties(bgImagePath) {
		const sceneConfig = this.loadSceneConfig();
		this.applySceneConfig(sceneConfig, bgImagePath);
		const cameraConfig = this.loadCameraConfig();
		this.applyCameraConfig(cameraConfig);
		const lightConfig = this.loadLightConfig();
		this.applyLightConfig(lightConfig);
	}
	loadSceneConfig() {
		if (this.properties && "Scene Config" in this.properties) return this.properties["Scene Config"];
		return {
			showGrid: useSettingStore().get("Comfy.Load3D.ShowGrid"),
			backgroundColor: "#" + useSettingStore().get("Comfy.Load3D.BackgroundColor"),
			backgroundImage: ""
		};
	}
	loadCameraConfig() {
		if (this.properties && "Camera Config" in this.properties) return this.properties["Camera Config"];
		return {
			cameraType: useSettingStore().get("Comfy.Load3D.CameraType"),
			fov: 35
		};
	}
	loadLightConfig() {
		if (this.properties && "Light Config" in this.properties) return this.properties["Light Config"];
		return { intensity: useSettingStore().get("Comfy.Load3D.LightIntensity") };
	}
	loadModelConfig() {
		if (this.properties && "Model Config" in this.properties) return this.properties["Model Config"];
		return {
			upDirection: "original",
			materialMode: "original",
			showSkeleton: false
		};
	}
	applySceneConfig(config, bgImagePath) {
		this.load3d.toggleGrid(config.showGrid);
		this.load3d.setBackgroundColor(config.backgroundColor);
		if (config.backgroundImage) {
			if (bgImagePath && bgImagePath != config.backgroundImage) return;
			this.load3d.setBackgroundImage(config.backgroundImage);
			if (config.backgroundRenderMode) this.load3d.setBackgroundRenderMode(config.backgroundRenderMode);
		}
	}
	applyCameraConfig(config) {
		this.load3d.toggleCamera(config.cameraType);
		this.load3d.setFOV(config.fov);
		if (config.state) this.load3d.setCameraState(config.state);
	}
	applyLightConfig(config) {
		this.load3d.setLightIntensity(config.intensity);
	}
	applyModelConfig(config) {
		this.load3d.setUpDirection(config.upDirection);
		this.load3d.setMaterialMode(config.materialMode);
	}
	createModelUpdateHandler(loadFolder, cameraState) {
		let isFirstLoad = true;
		return async (value) => {
			if (!value) return;
			const filename = value;
			this.setResourceFolder(filename);
			const modelUrl = api.apiURL(Load3dUtils.getResourceURL(...Load3dUtils.splitFilePath(filename), loadFolder));
			await this.load3d.loadModel(modelUrl, filename);
			const modelConfig = this.loadModelConfig();
			this.applyModelConfig(modelConfig);
			if (isFirstLoad && cameraState) {
				try {
					this.load3d.setCameraState(cameraState);
				} catch (error) {
					console.warn("Failed to restore camera state:", error);
				}
				isFirstLoad = false;
			}
		};
	}
	setResourceFolder(filename) {
		const pathParts = filename.split("/").filter((part) => part.trim());
		if (pathParts.length <= 2) return;
		const subfolder = pathParts.slice(1, -1).join("/");
		if (subfolder && this.properties) this.properties["Resource Folder"] = subfolder;
	}
};
//#endregion
export { createExportMenuItems as n, Load3DConfiguration as t };

//# sourceMappingURL=Load3DConfiguration-XhjsE5s8.js.map