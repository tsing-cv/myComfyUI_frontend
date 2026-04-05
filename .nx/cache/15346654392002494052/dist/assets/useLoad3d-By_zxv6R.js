import "./rolldown-runtime-DBfy44LZ.js";
import { Nt as toRaw, kt as ref, pt as watch, q as nextTick } from "./vendor-vue-core-Ba0aGEmU.js";
import { Z as toRef } from "./vendor-vueuse--4MZqvDu.js";
import { b as LiteGraph, r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import { s as app } from "./dialogService-DKx-VcuC.js";
import { n as Load3d, r as Load3dUtils, t as useLoad3dService } from "./load3dService-DBqNe2jy.js";
import { n as isAssetPreviewSupported, r as persistThumbnail } from "./assetPreviewUtil-b8QgVY6y.js";
//#region src/composables/useLoad3d.ts
var nodeToLoad3dMap = /* @__PURE__ */ new Map();
var pendingCallbacks = /* @__PURE__ */ new Map();
var useLoad3d = (nodeOrRef) => {
	const nodeRef = toRef(nodeOrRef);
	let load3d = null;
	const sceneConfig = ref({
		showGrid: true,
		backgroundColor: "#000000",
		backgroundImage: "",
		backgroundRenderMode: "tiled"
	});
	const modelConfig = ref({
		upDirection: "original",
		materialMode: "original",
		showSkeleton: false
	});
	const hasSkeleton = ref(false);
	const cameraConfig = ref({
		cameraType: "perspective",
		fov: 75
	});
	const lightConfig = ref({ intensity: 5 });
	const isRecording = ref(false);
	const hasRecording = ref(false);
	const recordingDuration = ref(0);
	const animations = ref([]);
	const playing = ref(false);
	const selectedSpeed = ref(1);
	const selectedAnimation = ref(0);
	const animationProgress = ref(0);
	const animationDuration = ref(0);
	const loading = ref(false);
	const loadingMessage = ref("");
	const isPreview = ref(false);
	const isSplatModel = ref(false);
	const isPlyModel = ref(false);
	const initializeLoad3d = async (containerRef) => {
		const rawNode = toRaw(nodeRef.value);
		if (!containerRef || !rawNode) return;
		const node = rawNode;
		try {
			const widthWidget = node.widgets?.find((w) => w.name === "width");
			const heightWidget = node.widgets?.find((w) => w.name === "height");
			if (!(widthWidget && heightWidget)) isPreview.value = true;
			load3d = new Load3d(containerRef, {
				width: widthWidget?.value,
				height: heightWidget?.value,
				getDimensions: widthWidget && heightWidget ? () => ({
					width: widthWidget.value,
					height: heightWidget.value
				}) : void 0,
				onContextMenu: (event) => {
					const menuOptions = app.canvas.getNodeMenuOptions(node);
					new LiteGraph.ContextMenu(menuOptions, {
						event,
						title: node.type,
						extra: node
					});
				}
			});
			await restoreConfigurationsFromNode(node);
			node.onMouseEnter = function() {
				load3d?.refreshViewport();
				load3d?.updateStatusMouseOnNode(true);
			};
			node.onMouseLeave = function() {
				load3d?.updateStatusMouseOnNode(false);
			};
			node.onResize = function() {
				load3d?.handleResize();
			};
			node.onDrawBackground = function() {
				if (load3d) load3d.renderer.domElement.hidden = this.flags.collapsed ?? false;
			};
			node.onRemoved = function() {
				useLoad3dService().removeLoad3d(node);
				pendingCallbacks.delete(node);
			};
			nodeToLoad3dMap.set(node, load3d);
			const callbacks = pendingCallbacks.get(node);
			if (callbacks && load3d) {
				callbacks.forEach((callback) => {
					if (load3d) callback(load3d);
				});
				pendingCallbacks.delete(node);
			}
			handleEvents("add");
		} catch (error) {
			console.error("Error initializing Load3d:", error);
			useToastStore().addAlert(t("toastMessages.failedToInitializeLoad3d"));
		}
	};
	const restoreConfigurationsFromNode = async (node) => {
		if (!load3d) return;
		const savedSceneConfig = node.properties["Scene Config"];
		if (savedSceneConfig) sceneConfig.value = {
			...sceneConfig.value,
			...savedSceneConfig,
			backgroundRenderMode: savedSceneConfig.backgroundRenderMode || "tiled"
		};
		const savedModelConfig = node.properties["Model Config"];
		if (savedModelConfig) modelConfig.value = savedModelConfig;
		const savedCameraConfig = node.properties["Camera Config"];
		const cameraStateToRestore = savedCameraConfig?.state;
		if (savedCameraConfig) cameraConfig.value = savedCameraConfig;
		const savedLightConfig = node.properties["Light Config"];
		if (savedLightConfig) lightConfig.value = savedLightConfig;
		const modelWidget = node.widgets?.find((w) => w.name === "model_file");
		if (modelWidget?.value) {
			const modelUrl = getModelUrl(modelWidget.value);
			if (modelUrl) {
				loading.value = true;
				loadingMessage.value = t("load3d.reloadingModel");
				try {
					await load3d.loadModel(modelUrl);
					if (cameraStateToRestore) {
						await nextTick();
						load3d.setCameraState(cameraStateToRestore);
					}
				} catch (error) {
					console.error("Failed to reload model:", error);
					useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
				} finally {
					loading.value = false;
					loadingMessage.value = "";
				}
			}
		} else if (cameraStateToRestore) load3d.setCameraState(cameraStateToRestore);
	};
	const getModelUrl = (modelPath) => {
		if (!modelPath) return null;
		try {
			if (modelPath.startsWith("http")) return modelPath;
			const trimmed = modelPath.trim();
			const hasOutputSuffix = trimmed.endsWith("[output]");
			const cleanPath = hasOutputSuffix ? trimmed.replace(/\s*\[output\]$/, "") : trimmed;
			const type = hasOutputSuffix || isPreview.value ? "output" : "input";
			const [subfolder, filename] = Load3dUtils.splitFilePath(cleanPath);
			return api.apiURL(Load3dUtils.getResourceURL(subfolder, filename, type));
		} catch (error) {
			console.error("Failed to construct model URL:", error);
			return null;
		}
	};
	const waitForLoad3d = (callback) => {
		const rawNode = toRaw(nodeRef.value);
		if (!rawNode) return;
		const node = rawNode;
		const existingInstance = nodeToLoad3dMap.get(node);
		if (existingInstance) {
			callback(existingInstance);
			return;
		}
		if (!pendingCallbacks.has(node)) pendingCallbacks.set(node, []);
		pendingCallbacks.get(node).push(callback);
	};
	watch(sceneConfig, async (newValue) => {
		if (load3d && nodeRef.value) {
			nodeRef.value.properties["Scene Config"] = newValue;
			load3d.toggleGrid(newValue.showGrid);
			load3d.setBackgroundColor(newValue.backgroundColor);
			await load3d.setBackgroundImage(newValue.backgroundImage || "");
			if (newValue.backgroundRenderMode) load3d.setBackgroundRenderMode(newValue.backgroundRenderMode);
		}
	}, { deep: true });
	watch(modelConfig, (newValue) => {
		if (load3d && nodeRef.value) {
			nodeRef.value.properties["Model Config"] = newValue;
			load3d.setUpDirection(newValue.upDirection);
			load3d.setMaterialMode(newValue.materialMode);
			load3d.setShowSkeleton(newValue.showSkeleton);
		}
	}, { deep: true });
	watch(cameraConfig, (newValue) => {
		if (load3d && nodeRef.value) {
			nodeRef.value.properties["Camera Config"] = newValue;
			load3d.toggleCamera(newValue.cameraType);
			load3d.setFOV(newValue.fov);
		}
	}, { deep: true });
	watch(lightConfig, (newValue) => {
		if (load3d && nodeRef.value) {
			nodeRef.value.properties["Light Config"] = newValue;
			load3d.setLightIntensity(newValue.intensity);
		}
	}, { deep: true });
	watch(playing, (newValue) => {
		if (load3d) load3d.toggleAnimation(newValue);
	});
	watch(selectedSpeed, (newValue) => {
		if (load3d && newValue) load3d.setAnimationSpeed(newValue);
	});
	watch(selectedAnimation, (newValue) => {
		if (load3d && newValue !== void 0) load3d.updateSelectedAnimation(newValue);
	});
	const handleMouseEnter = () => {
		load3d?.updateStatusMouseOnScene(true);
	};
	const handleMouseLeave = () => {
		load3d?.updateStatusMouseOnScene(false);
	};
	const handleStartRecording = async () => {
		if (load3d) {
			await load3d.startRecording();
			isRecording.value = true;
		}
	};
	const handleStopRecording = () => {
		if (load3d) {
			load3d.stopRecording();
			isRecording.value = false;
			recordingDuration.value = load3d.getRecordingDuration();
			hasRecording.value = recordingDuration.value > 0;
		}
	};
	const handleExportRecording = () => {
		if (load3d) {
			const filename = `${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}-scene-recording.mp4`;
			load3d.exportRecording(filename);
		}
	};
	const handleClearRecording = () => {
		if (load3d) {
			load3d.clearRecording();
			hasRecording.value = false;
			recordingDuration.value = 0;
		}
	};
	const handleSeek = (progress) => {
		if (load3d && animationDuration.value > 0) {
			const time = progress / 100 * animationDuration.value;
			load3d.setAnimationTime(time);
		}
	};
	const handleBackgroundImageUpdate = async (file) => {
		if (!file) {
			sceneConfig.value.backgroundImage = "";
			await load3d?.setBackgroundImage("");
			return;
		}
		const resourceFolder = nodeRef.value?.properties["Resource Folder"] || "";
		const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
		const uploadedPath = await Load3dUtils.uploadFile(file, subfolder);
		sceneConfig.value.backgroundImage = uploadedPath;
		await load3d?.setBackgroundImage(uploadedPath);
	};
	const handleExportModel = async (format) => {
		if (!load3d) {
			useToastStore().addAlert(t("toastMessages.no3dSceneToExport"));
			return;
		}
		try {
			await load3d.exportModel(format);
		} catch (error) {
			console.error("Error exporting model:", error);
			useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: format.toUpperCase() }));
		}
	};
	const handleModelDrop = async (file) => {
		if (!load3d) {
			useToastStore().addAlert(t("toastMessages.no3dScene"));
			return;
		}
		const node = toRaw(nodeRef.value);
		if (!node) return;
		try {
			const resourceFolder = node.properties["Resource Folder"] || "";
			const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
			loading.value = true;
			loadingMessage.value = t("load3d.uploadingModel");
			const uploadedPath = await Load3dUtils.uploadFile(file, subfolder);
			if (!uploadedPath) {
				useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
				return;
			}
			const modelUrl = api.apiURL(Load3dUtils.getResourceURL(...Load3dUtils.splitFilePath(uploadedPath), isPreview.value ? "output" : "input"));
			loadingMessage.value = t("load3d.loadingModel");
			await load3d.loadModel(modelUrl);
			const modelWidget = node.widgets?.find((w) => w.name === "model_file");
			if (modelWidget) {
				const options = modelWidget.options;
				if (options?.values && !options.values.includes(uploadedPath)) options.values.push(uploadedPath);
				modelWidget.value = uploadedPath;
			}
		} catch (error) {
			console.error("Model drop failed:", error);
			useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
		} finally {
			loading.value = false;
			loadingMessage.value = "";
		}
	};
	const eventConfig = {
		materialModeChange: (value) => {
			modelConfig.value.materialMode = value;
		},
		backgroundColorChange: (value) => {
			sceneConfig.value.backgroundColor = value;
		},
		backgroundRenderModeChange: (value) => {
			sceneConfig.value.backgroundRenderMode = value;
		},
		lightIntensityChange: (value) => {
			lightConfig.value.intensity = value;
		},
		fovChange: (value) => {
			cameraConfig.value.fov = value;
		},
		cameraTypeChange: (value) => {
			cameraConfig.value.cameraType = value;
		},
		showGridChange: (value) => {
			sceneConfig.value.showGrid = value;
		},
		upDirectionChange: (value) => {
			modelConfig.value.upDirection = value;
		},
		backgroundImageChange: (value) => {
			sceneConfig.value.backgroundImage = value;
		},
		backgroundImageLoadingStart: () => {
			loadingMessage.value = t("load3d.loadingBackgroundImage");
			loading.value = true;
		},
		backgroundImageLoadingEnd: () => {
			loadingMessage.value = "";
			loading.value = false;
		},
		modelLoadingStart: () => {
			loadingMessage.value = t("load3d.loadingModel");
			loading.value = true;
		},
		modelLoadingEnd: () => {
			loadingMessage.value = "";
			loading.value = false;
			isSplatModel.value = load3d?.isSplatModel() ?? false;
			isPlyModel.value = load3d?.isPlyModel() ?? false;
			hasSkeleton.value = load3d?.hasSkeleton() ?? false;
			modelConfig.value.showSkeleton = false;
			if (load3d && isAssetPreviewSupported()) {
				const value = (nodeRef.value?.widgets?.find((w) => w.name === "model_file" || w.name === "image"))?.value;
				if (typeof value === "string" && value) {
					const filename = value.trim().replace(/\s*\[output\]$/, "");
					const modelName = Load3dUtils.splitFilePath(filename)[1];
					load3d.captureThumbnail(256, 256).then((dataUrl) => fetch(dataUrl).then((r) => r.blob())).then((blob) => persistThumbnail(modelName, blob)).catch(() => {});
				}
			}
		},
		skeletonVisibilityChange: (value) => {
			modelConfig.value.showSkeleton = value;
		},
		exportLoadingStart: (message) => {
			loadingMessage.value = message || t("load3d.exportingModel");
			loading.value = true;
		},
		exportLoadingEnd: () => {
			loadingMessage.value = "";
			loading.value = false;
		},
		recordingStatusChange: (value) => {
			isRecording.value = value;
			if (!value && load3d) {
				recordingDuration.value = load3d.getRecordingDuration();
				hasRecording.value = recordingDuration.value > 0;
			}
		},
		animationListChange: (newValue) => {
			animations.value = newValue;
		},
		animationProgressChange: (data) => {
			animationProgress.value = data.progress;
			animationDuration.value = data.duration;
		},
		cameraChanged: (cameraState) => {
			const rawNode = toRaw(nodeRef.value);
			if (rawNode) {
				const node = rawNode;
				if (!node.properties) node.properties = {};
				const cameraConfigProp = node.properties["Camera Config"];
				if (cameraConfigProp) cameraConfigProp.state = cameraState;
				else node.properties["Camera Config"] = {
					cameraType: cameraConfig.value.cameraType,
					fov: cameraConfig.value.fov,
					state: cameraState
				};
			}
		}
	};
	const handleEvents = (action) => {
		Object.entries(eventConfig).forEach(([event, handler]) => {
			const method = `${action}EventListener`;
			load3d?.[method](event, handler);
		});
	};
	const cleanup = () => {
		handleEvents("remove");
		const rawNode = toRaw(nodeRef.value);
		if (!rawNode) return;
		const node = rawNode;
		if (nodeToLoad3dMap.get(node) === load3d) nodeToLoad3dMap.delete(node);
		load3d?.remove();
		load3d = null;
	};
	return {
		load3d,
		sceneConfig,
		modelConfig,
		cameraConfig,
		lightConfig,
		isRecording,
		isPreview,
		isSplatModel,
		isPlyModel,
		hasSkeleton,
		hasRecording,
		recordingDuration,
		animations,
		playing,
		selectedSpeed,
		selectedAnimation,
		animationProgress,
		animationDuration,
		loading,
		loadingMessage,
		initializeLoad3d,
		waitForLoad3d,
		handleMouseEnter,
		handleMouseLeave,
		handleStartRecording,
		handleStopRecording,
		handleExportRecording,
		handleClearRecording,
		handleSeek,
		handleBackgroundImageUpdate,
		handleExportModel,
		handleModelDrop,
		cleanup
	};
};
//#endregion
export { useLoad3d as n, nodeToLoad3dMap as t };

//# sourceMappingURL=useLoad3d-By_zxv6R.js.map