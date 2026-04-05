import { a as __toESM } from "./rolldown-runtime-DBfy44LZ.js";
import { Nt as toRaw, kt as ref, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import { D as require_quick_lru } from "./vendor-other-BMn-xt1e.js";
import { r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import { n as Load3d, r as Load3dUtils, t as useLoad3dService } from "./load3dService-DBqNe2jy.js";
//#region src/composables/useLoad3dViewer.ts
var import_quick_lru = /* @__PURE__ */ __toESM(require_quick_lru(), 1);
var DEFAULT_STANDALONE_CONFIG = {
	backgroundColor: "#282828",
	showGrid: true,
	cameraType: "perspective",
	fov: 75,
	lightIntensity: 1,
	cameraState: null,
	backgroundImage: "",
	backgroundRenderMode: "tiled",
	upDirection: "original",
	materialMode: "original"
};
var standaloneConfigCache = new import_quick_lru.default({ maxSize: 50 });
/**
* Composable for managing a 3D viewer instance.
* Supports both node-based mode (applied to a LiteGraph node)
* and standalone mode (for asset previews).
*
* @param node Optional LiteGraph node to sync state with
*/
var useLoad3dViewer = (node) => {
	const backgroundColor = ref("");
	const showGrid = ref(true);
	const cameraType = ref("perspective");
	const fov = ref(75);
	const lightIntensity = ref(1);
	const backgroundImage = ref("");
	const hasBackgroundImage = ref(false);
	const backgroundRenderMode = ref("tiled");
	const upDirection = ref("original");
	const materialMode = ref("original");
	const needApplyChanges = ref(true);
	const isPreview = ref(false);
	const isStandaloneMode = ref(false);
	const isSplatModel = ref(false);
	const isPlyModel = ref(false);
	const animations = ref([]);
	const playing = ref(false);
	const selectedSpeed = ref(1);
	const selectedAnimation = ref(0);
	const animationProgress = ref(0);
	const animationDuration = ref(0);
	let load3d = null;
	let sourceLoad3d = null;
	let currentModelUrl = null;
	const initialState = ref({
		backgroundColor: "#282828",
		showGrid: true,
		cameraType: "perspective",
		fov: 75,
		lightIntensity: 1,
		cameraState: null,
		backgroundImage: "",
		backgroundRenderMode: "tiled",
		upDirection: "original",
		materialMode: "original"
	});
	watch(backgroundColor, (newColor) => {
		if (!load3d) return;
		try {
			load3d.setBackgroundColor(newColor);
		} catch (error) {
			console.error("Error updating background color:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateBackgroundColor", { color: newColor }));
		}
	});
	watch(showGrid, (newValue) => {
		if (!load3d) return;
		try {
			load3d.toggleGrid(newValue);
		} catch (error) {
			console.error("Error toggling grid:", error);
			useToastStore().addAlert(t("toastMessages.failedToToggleGrid", { show: newValue ? "on" : "off" }));
		}
	});
	watch(cameraType, (newCameraType) => {
		if (!load3d) return;
		try {
			load3d.toggleCamera(newCameraType);
		} catch (error) {
			console.error("Error toggling camera:", error);
			useToastStore().addAlert(t("toastMessages.failedToToggleCamera", { camera: newCameraType }));
		}
	});
	watch(fov, (newFov) => {
		if (!load3d) return;
		try {
			load3d.setFOV(Number(newFov));
		} catch (error) {
			console.error("Error updating FOV:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateFOV", { fov: newFov }));
		}
	});
	watch(lightIntensity, (newValue) => {
		if (!load3d) return;
		try {
			load3d.setLightIntensity(Number(newValue));
		} catch (error) {
			console.error("Error updating light intensity:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateLightIntensity", { intensity: newValue }));
		}
	});
	watch(backgroundImage, async (newValue) => {
		if (!load3d) return;
		try {
			await load3d.setBackgroundImage(newValue);
			hasBackgroundImage.value = !!newValue;
		} catch (error) {
			console.error("Error updating background image:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateBackgroundImage"));
		}
	});
	watch(backgroundRenderMode, (newValue) => {
		if (!load3d) return;
		try {
			load3d.setBackgroundRenderMode(newValue);
		} catch (error) {
			console.error("Error updating background render mode:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateBackgroundRenderMode", { mode: newValue }));
		}
	});
	watch(upDirection, (newValue) => {
		if (!load3d) return;
		try {
			load3d.setUpDirection(newValue);
		} catch (error) {
			console.error("Error updating up direction:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateUpDirection", { direction: newValue }));
		}
	});
	watch(materialMode, (newValue) => {
		if (!load3d) return;
		try {
			load3d.setMaterialMode(newValue);
		} catch (error) {
			console.error("Error updating material mode:", error);
			useToastStore().addAlert(t("toastMessages.failedToUpdateMaterialMode", { mode: newValue }));
		}
	});
	watch(playing, (newValue) => {
		if (load3d) load3d.toggleAnimation(newValue);
	});
	watch(selectedSpeed, (newValue) => {
		if (load3d && newValue) load3d.setAnimationSpeed(newValue);
	});
	watch(selectedAnimation, (newValue) => {
		if (load3d && newValue !== void 0) load3d.updateSelectedAnimation(newValue);
	});
	/**
	* Seeks to a specific progress point in the current animation.
	*
	* @param progress Progress percentage (0-100)
	*/
	const handleSeek = (progress) => {
		if (load3d && animationDuration.value > 0) {
			const time = progress / 100 * animationDuration.value;
			load3d.setAnimationTime(time);
		}
	};
	/**
	* Sets up event listeners for animation-related events from the Load3d instance.
	*/
	const setupAnimationEvents = () => {
		if (!load3d) return;
		load3d.addEventListener("animationListChange", (newValue) => {
			animations.value = newValue;
		});
		load3d.addEventListener("animationProgressChange", (data) => {
			animationProgress.value = data.progress;
			animationDuration.value = data.duration;
		});
		if (load3d.hasAnimations()) {
			animations.value = load3d.animationManager.animationClips.map((clip, index) => ({
				name: clip.name || `Animation ${index + 1}`,
				index
			}));
			animationDuration.value = load3d.getAnimationDuration();
		}
	};
	/**
	* Initializes the viewer in node mode using a source Load3d instance.
	*
	* @param containerRef The HTML element to mount the viewer in
	* @param source The source Load3d instance to copy state from
	*/
	const initializeViewer = async (containerRef, source) => {
		if (!containerRef || !node) return;
		sourceLoad3d = source;
		try {
			const width = node.widgets?.find((w) => w.name === "width");
			const height = node.widgets?.find((w) => w.name === "height");
			const hasTargetDimensions = !!(width && height);
			load3d = new Load3d(containerRef, {
				width: width ? toRaw(width).value : void 0,
				height: height ? toRaw(height).value : void 0,
				getDimensions: hasTargetDimensions ? () => ({
					width: width.value,
					height: height.value
				}) : void 0,
				isViewerMode: hasTargetDimensions
			});
			await useLoad3dService().copyLoad3dState(source, load3d);
			const sourceCameraState = source.getCameraState();
			const sceneConfig = node.properties["Scene Config"];
			const modelConfig = node.properties["Model Config"];
			const cameraConfig = node.properties["Camera Config"];
			const lightConfig = node.properties["Light Config"];
			isPreview.value = node.type === "Preview3D";
			if (sceneConfig) {
				backgroundColor.value = sceneConfig.backgroundColor || source.sceneManager.currentBackgroundColor;
				showGrid.value = sceneConfig.showGrid ?? source.sceneManager.gridHelper.visible;
				backgroundRenderMode.value = sceneConfig.backgroundRenderMode || source.sceneManager.backgroundRenderMode || "tiled";
				if (source.sceneManager.getCurrentBackgroundInfo().type === "image" && sceneConfig.backgroundImage) {
					backgroundImage.value = sceneConfig.backgroundImage;
					hasBackgroundImage.value = true;
				} else {
					backgroundImage.value = "";
					hasBackgroundImage.value = false;
				}
			}
			if (cameraConfig) {
				cameraType.value = cameraConfig.cameraType || source.getCurrentCameraType();
				fov.value = cameraConfig.fov || source.cameraManager.perspectiveCamera.fov;
			}
			if (lightConfig) lightIntensity.value = lightConfig.intensity || 1;
			else lightIntensity.value = 1;
			if (modelConfig) {
				upDirection.value = modelConfig.upDirection || source.modelManager.currentUpDirection;
				materialMode.value = modelConfig.materialMode || source.modelManager.materialMode;
			}
			isSplatModel.value = source.isSplatModel();
			isPlyModel.value = source.isPlyModel();
			initialState.value = {
				backgroundColor: backgroundColor.value,
				showGrid: showGrid.value,
				cameraType: cameraType.value,
				fov: fov.value,
				lightIntensity: lightIntensity.value,
				cameraState: sourceCameraState,
				backgroundImage: backgroundImage.value,
				backgroundRenderMode: backgroundRenderMode.value,
				upDirection: upDirection.value,
				materialMode: materialMode.value
			};
			setupAnimationEvents();
		} catch (error) {
			console.error("Error initializing Load3d viewer:", error);
			useToastStore().addAlert(t("toastMessages.failedToInitializeLoad3dViewer"));
		}
	};
	/**
	* Initializes the viewer in standalone mode for asset preview.
	* Creates the Load3d instance once; subsequent calls reuse it.
	*
	* @param containerRef The HTML element to mount the viewer in
	* @param modelUrl URL of the model to load
	*/
	const initializeStandaloneViewer = async (containerRef, modelUrl) => {
		if (!containerRef) return;
		try {
			if (load3d) {
				await loadStandaloneModel(modelUrl);
				return;
			}
			isStandaloneMode.value = true;
			load3d = new Load3d(containerRef, {
				width: 800,
				height: 600,
				isViewerMode: true
			});
			await load3d.loadModel(modelUrl);
			currentModelUrl = modelUrl;
			restoreStandaloneConfig(modelUrl);
			isSplatModel.value = load3d.isSplatModel();
			isPlyModel.value = load3d.isPlyModel();
			isPreview.value = true;
			setupAnimationEvents();
		} catch (error) {
			console.error("Error initializing standalone 3D viewer:", error);
			useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
		}
	};
	/**
	* Load a new model into an existing standalone viewer,
	* reusing the same WebGLRenderer.
	*/
	const loadStandaloneModel = async (modelUrl) => {
		if (!load3d) return;
		try {
			saveStandaloneConfig();
			await load3d.loadModel(modelUrl);
			currentModelUrl = modelUrl;
			restoreStandaloneConfig(modelUrl);
			isSplatModel.value = load3d.isSplatModel();
			isPlyModel.value = load3d.isPlyModel();
		} catch (error) {
			console.error("Error loading model in standalone viewer:", error);
			useToastStore().addAlert("Failed to load 3D model");
		}
	};
	/**
	* Saves the current viewer configuration to the standalone cache.
	*/
	function saveStandaloneConfig() {
		if (!currentModelUrl) return;
		standaloneConfigCache.set(currentModelUrl, {
			backgroundColor: backgroundColor.value,
			showGrid: showGrid.value,
			cameraType: cameraType.value,
			fov: fov.value,
			lightIntensity: lightIntensity.value,
			cameraState: load3d?.getCameraState() ?? null,
			backgroundImage: backgroundImage.value,
			backgroundRenderMode: backgroundRenderMode.value,
			upDirection: upDirection.value,
			materialMode: materialMode.value
		});
	}
	/**
	* Restores the viewer configuration from the standalone cache for the given model URL.
	*
	* @param modelUrl URL of the model to restore config for
	*/
	function restoreStandaloneConfig(modelUrl) {
		const cached = standaloneConfigCache.get(modelUrl);
		const config = cached ?? DEFAULT_STANDALONE_CONFIG;
		backgroundColor.value = config.backgroundColor;
		showGrid.value = config.showGrid;
		cameraType.value = config.cameraType;
		fov.value = config.fov;
		lightIntensity.value = config.lightIntensity;
		backgroundImage.value = config.backgroundImage;
		hasBackgroundImage.value = !!config.backgroundImage;
		backgroundRenderMode.value = config.backgroundRenderMode;
		upDirection.value = config.upDirection;
		materialMode.value = config.materialMode;
		if (cached?.cameraState && load3d) load3d.setCameraState(cached.cameraState);
	}
	/**
	* Exports the current model in the specified format.
	*
	* @param format The export format (e.g., 'glb', 'obj')
	*/
	const exportModel = async (format) => {
		if (!load3d) return;
		try {
			await load3d.exportModel(format);
		} catch (error) {
			console.error("Error exporting model:", error);
			useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: format.toUpperCase() }));
		}
	};
	/**
	* Handles resizing the 3D viewer.
	*/
	const handleResize = () => {
		load3d?.handleResize();
	};
	/**
	* Notifies the viewer that the mouse has entered the viewer area.
	*/
	const handleMouseEnter = () => {
		load3d?.updateStatusMouseOnViewer(true);
	};
	/**
	* Notifies the viewer that the mouse has left the viewer area.
	*/
	const handleMouseLeave = () => {
		load3d?.updateStatusMouseOnViewer(false);
	};
	/**
	* Restores the viewer state to its initial values when the viewer was opened.
	*/
	const restoreInitialState = () => {
		if (!node) return;
		const nodeValue = node;
		needApplyChanges.value = false;
		if (nodeValue.properties) {
			nodeValue.properties["Scene Config"] = {
				showGrid: initialState.value.showGrid,
				backgroundColor: initialState.value.backgroundColor,
				backgroundImage: initialState.value.backgroundImage,
				backgroundRenderMode: initialState.value.backgroundRenderMode
			};
			nodeValue.properties["Camera Config"] = {
				cameraType: initialState.value.cameraType,
				fov: initialState.value.fov
			};
			nodeValue.properties["Light Config"] = { intensity: initialState.value.lightIntensity };
			nodeValue.properties["Model Config"] = {
				upDirection: initialState.value.upDirection,
				materialMode: initialState.value.materialMode
			};
			const currentCameraConfig = nodeValue.properties["Camera Config"];
			nodeValue.properties["Camera Config"] = {
				...currentCameraConfig,
				state: initialState.value.cameraState
			};
		}
	};
	/**
	* Applies the current viewer changes back to the source node and its properties.
	*
	* @returns Promise resolving to true if changes were applied successfully
	*/
	const applyChanges = async () => {
		if (!node || !sourceLoad3d || !load3d) return false;
		const viewerCameraState = load3d.getCameraState();
		const nodeValue = node;
		if (nodeValue.properties) {
			nodeValue.properties["Scene Config"] = {
				showGrid: showGrid.value,
				backgroundColor: backgroundColor.value,
				backgroundImage: backgroundImage.value,
				backgroundRenderMode: backgroundRenderMode.value
			};
			nodeValue.properties["Camera Config"] = {
				cameraType: cameraType.value,
				fov: fov.value,
				state: viewerCameraState
			};
			nodeValue.properties["Light Config"] = { intensity: lightIntensity.value };
			nodeValue.properties["Model Config"] = {
				upDirection: upDirection.value,
				materialMode: materialMode.value
			};
		}
		await useLoad3dService().copyLoad3dState(load3d, sourceLoad3d);
		await sourceLoad3d.setBackgroundImage(backgroundImage.value);
		sourceLoad3d.setBackgroundRenderMode(backgroundRenderMode.value);
		sourceLoad3d.forceRender();
		if (nodeValue.graph) nodeValue.graph.setDirtyCanvas(true, true);
		return true;
	};
	/**
	* Refreshes the viewport of the current Load3d instance.
	*/
	const refreshViewport = () => {
		useLoad3dService().handleViewportRefresh(load3d);
	};
	/**
	* Returns the subfolder path for file uploads based on the node properties.
	*
	* @returns The subfolder string
	*/
	const getUploadSubfolder = () => {
		const resourceFolder = String(node?.properties?.["Resource Folder"] ?? "").trim();
		return resourceFolder ? `3d/${resourceFolder}` : "3d";
	};
	/**
	* Handles updating the background image either by clearing it or uploading a new file.
	*
	* @param file The image file to upload, or null to clear the background
	*/
	const handleBackgroundImageUpdate = async (file) => {
		if (!file) {
			backgroundImage.value = "";
			hasBackgroundImage.value = false;
			return;
		}
		if (!load3d) {
			useToastStore().addAlert(t("toastMessages.no3dScene"));
			return;
		}
		try {
			const uploadPath = await Load3dUtils.uploadFile(file, getUploadSubfolder());
			if (uploadPath) {
				backgroundImage.value = uploadPath;
				hasBackgroundImage.value = true;
			}
		} catch (error) {
			console.error("Error uploading background image:", error);
			useToastStore().addAlert(t("toastMessages.failedToUploadBackgroundImage"));
		}
	};
	/**
	* Handles dropping a new model file into the viewer.
	*
	* @param file The 3D model file to load
	*/
	const handleModelDrop = async (file) => {
		if (!load3d) {
			useToastStore().addAlert(t("toastMessages.no3dScene"));
			return;
		}
		try {
			const uploadedPath = await Load3dUtils.uploadFile(file, getUploadSubfolder());
			if (!uploadedPath) {
				useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
				return;
			}
			const modelUrl = api.apiURL(Load3dUtils.getResourceURL(...Load3dUtils.splitFilePath(uploadedPath), "input"));
			await load3d.loadModel(modelUrl);
			const modelWidget = node?.widgets?.find((w) => w.name === "model_file");
			if (modelWidget) {
				const options = modelWidget.options;
				if (options?.values && !options.values.includes(uploadedPath)) options.values.push(uploadedPath);
				modelWidget.value = uploadedPath;
			}
		} catch (error) {
			console.error("Model drop failed:", error);
			useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
		}
	};
	/**
	* Cleans up the viewer resources and saves the current standalone config if applicable.
	*/
	const cleanup = () => {
		if (isStandaloneMode.value) saveStandaloneConfig();
		load3d?.remove();
		load3d = null;
		sourceLoad3d = null;
		currentModelUrl = null;
	};
	return {
		backgroundColor,
		showGrid,
		cameraType,
		fov,
		lightIntensity,
		backgroundImage,
		hasBackgroundImage,
		backgroundRenderMode,
		upDirection,
		materialMode,
		needApplyChanges,
		isPreview,
		isStandaloneMode,
		isSplatModel,
		isPlyModel,
		animations,
		playing,
		selectedSpeed,
		selectedAnimation,
		animationProgress,
		animationDuration,
		initializeViewer,
		initializeStandaloneViewer,
		exportModel,
		handleResize,
		handleMouseEnter,
		handleMouseLeave,
		restoreInitialState,
		applyChanges,
		refreshViewport,
		handleBackgroundImageUpdate,
		handleModelDrop,
		handleSeek,
		cleanup,
		hasSkeleton: false,
		intensity: lightIntensity,
		showSkeleton: false
	};
};
//#endregion
export { useLoad3dViewer as t };

//# sourceMappingURL=useLoad3dViewer-rP5gDjML.js.map