import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { q as nextTick } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import { r as api } from "./api-kFdESQTE.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { o as t } from "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { Er as isLoad3dNode, ca as ComponentWidgetImpl, kn as useExtensionService, o as ComfyApp, s as app, ua as addWidget } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
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
import "./Load3DControls-Cms-DfuQ.js";
import { n as SUPPORTED_EXTENSIONS_ACCEPT } from "./constants-CWGvtpeq.js";
import { t as Load3dViewerContent_default } from "./Load3dViewerContent-Dx_rPCvK.js";
import { t as Load3D_default } from "./Load3D-7FPJ72iI.js";
import "./AnimationControls-dEDCTTQj.js";
import { r as Load3dUtils, t as useLoad3dService } from "./load3dService-Rc9DS8S1.js";
import "./useLoad3dViewer-DlfK7Bns.js";
import "./assetPreviewUtil-9V8Vrv_O.js";
import { n as useLoad3d, t as nodeToLoad3dMap } from "./useLoad3d-CYb_XTwg.js";
import { n as createExportMenuItems, t as Load3DConfiguration } from "./Load3DConfiguration-BqZMsN3v.js";
//#region src/extensions/core/load3d.ts
var inputSpecLoad3D = {
	name: "image",
	type: "Load3D",
	isPreview: false
};
var inputSpecPreview3D = {
	name: "image",
	type: "Preview3D",
	isPreview: true
};
async function handleModelUpload(files, node) {
	if (!files?.length) return;
	const modelWidget = node.widgets?.find((w) => w.name === "model_file");
	try {
		const resourceFolder = node.properties["Resource Folder"] || "";
		const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
		const uploadPath = await Load3dUtils.uploadFile(files[0], subfolder);
		if (!uploadPath) {
			useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
			return;
		}
		const modelUrl = api.apiURL(Load3dUtils.getResourceURL(...Load3dUtils.splitFilePath(uploadPath), "input"));
		useLoad3d(node).waitForLoad3d((load3d) => {
			try {
				load3d.loadModel(modelUrl);
			} catch (error) {
				useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
			}
		});
		if (uploadPath && modelWidget) {
			if (!modelWidget.options?.values?.includes(uploadPath)) modelWidget.options?.values?.push(uploadPath);
			modelWidget.value = uploadPath;
		}
	} catch (error) {
		console.error("Model upload failed:", error);
		useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
	}
}
async function handleResourcesUpload(files, node) {
	if (!files?.length) return;
	try {
		const resourceFolder = node.properties["Resource Folder"] || "";
		const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
		await Load3dUtils.uploadMultipleFiles(files, subfolder);
	} catch (error) {
		console.error("Extra resources upload failed:", error);
		useToastStore().addAlert(t("toastMessages.extraResourcesUploadFailed"));
	}
}
function createFileInput(accept, multiple = false) {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = accept;
	input.multiple = multiple;
	input.style.display = "none";
	return input;
}
useExtensionService().registerExtension({
	name: "Comfy.Load3D",
	settings: [
		{
			id: "Comfy.Load3D.ShowGrid",
			category: [
				"3D",
				"Scene",
				"Initial Grid Visibility"
			],
			name: "Initial Grid Visibility",
			tooltip: "Controls whether the grid is visible by default when a new 3D widget is created. This default can still be toggled individually for each widget after creation.",
			type: "boolean",
			defaultValue: true,
			experimental: true
		},
		{
			id: "Comfy.Load3D.BackgroundColor",
			category: [
				"3D",
				"Scene",
				"Initial Background Color"
			],
			name: "Initial Background Color",
			tooltip: "Controls the default background color of the 3D scene. This setting determines the background appearance when a new 3D widget is created, but can be adjusted individually for each widget after creation.",
			type: "color",
			defaultValue: "282828",
			experimental: true
		},
		{
			id: "Comfy.Load3D.CameraType",
			category: [
				"3D",
				"Camera",
				"Initial Camera Type"
			],
			name: "Initial Camera Type",
			tooltip: "Controls whether the camera is perspective or orthographic by default when a new 3D widget is created. This default can still be toggled individually for each widget after creation.",
			type: "combo",
			options: ["perspective", "orthographic"],
			defaultValue: "perspective",
			experimental: true
		},
		{
			id: "Comfy.Load3D.LightIntensity",
			category: [
				"3D",
				"Light",
				"Initial Light Intensity"
			],
			name: "Initial Light Intensity",
			tooltip: "Sets the default brightness level of lighting in the 3D scene. This value determines how intensely lights illuminate objects when a new 3D widget is created, but can be adjusted individually for each widget after creation.",
			type: "number",
			defaultValue: 3,
			experimental: true
		},
		{
			id: "Comfy.Load3D.LightIntensityMaximum",
			category: [
				"3D",
				"Light",
				"Light Intensity Maximum"
			],
			name: "Light Intensity Maximum",
			tooltip: "Sets the maximum allowable light intensity value for 3D scenes. This defines the upper brightness limit that can be set when adjusting lighting in any 3D widget.",
			type: "number",
			defaultValue: 10,
			experimental: true
		},
		{
			id: "Comfy.Load3D.LightIntensityMinimum",
			category: [
				"3D",
				"Light",
				"Light Intensity Minimum"
			],
			name: "Light Intensity Minimum",
			tooltip: "Sets the minimum allowable light intensity value for 3D scenes. This defines the lower brightness limit that can be set when adjusting lighting in any 3D widget.",
			type: "number",
			defaultValue: 1,
			experimental: true
		},
		{
			id: "Comfy.Load3D.LightAdjustmentIncrement",
			category: [
				"3D",
				"Light",
				"Light Adjustment Increment"
			],
			name: "Light Adjustment Increment",
			tooltip: "Controls the increment size when adjusting light intensity in 3D scenes. A smaller step value allows for finer control over lighting adjustments, while a larger value results in more noticeable changes per adjustment.",
			type: "slider",
			attrs: {
				min: .1,
				max: 1,
				step: .1
			},
			defaultValue: .5,
			experimental: true
		},
		{
			id: "Comfy.Load3D.3DViewerEnable",
			category: [
				"3D",
				"3DViewer",
				"Enable"
			],
			name: "Enable 3D Viewer (Beta)",
			tooltip: "Enables the 3D Viewer (Beta) for selected nodes. This feature allows you to visualize and interact with 3D models directly within the full size 3d viewer.",
			type: "boolean",
			defaultValue: false,
			experimental: true
		},
		{
			id: "Comfy.Load3D.PLYEngine",
			category: [
				"3D",
				"PLY",
				"PLY Engine"
			],
			name: "PLY Engine",
			tooltip: "Select the engine for loading PLY files. \"threejs\" uses the native Three.js PLYLoader (best for mesh PLY files). \"fastply\" uses an optimized loader for ASCII point cloud PLY files. \"sparkjs\" uses Spark.js for 3D Gaussian Splatting PLY files.",
			type: "combo",
			options: [
				"threejs",
				"fastply",
				"sparkjs"
			],
			defaultValue: "threejs",
			experimental: true
		}
	],
	commands: [{
		id: "Comfy.3DViewer.Open3DViewer",
		icon: "pi pi-pencil",
		label: "Open 3D Viewer (Beta) for Selected Node",
		function: () => {
			const selectedNodes = app.canvas.selected_nodes;
			if (!selectedNodes || Object.keys(selectedNodes).length !== 1) return;
			const selectedNode = selectedNodes[Object.keys(selectedNodes)[0]];
			if (!isLoad3dNode(selectedNode)) return;
			ComfyApp.copyToClipspace(selectedNode);
			ComfyApp.clipspace_return_node = selectedNode;
			const props = { node: selectedNode };
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
		}
	}],
	getCustomWidgets() {
		return { LOAD_3D(node) {
			const fileInput = createFileInput(SUPPORTED_EXTENSIONS_ACCEPT, false);
			node.properties["Resource Folder"] = "";
			fileInput.onchange = async () => {
				await handleModelUpload(fileInput.files, node);
			};
			node.addWidget("button", "upload 3d model", "upload3dmodel", () => {
				fileInput.click();
			});
			const resourcesInput = createFileInput("*", true);
			resourcesInput.onchange = async () => {
				await handleResourcesUpload(resourcesInput.files, node);
				resourcesInput.value = "";
			};
			node.addWidget("button", "upload extra resources", "uploadExtraResources", () => {
				resourcesInput.click();
			});
			node.addWidget("button", "clear", "clear", () => {
				useLoad3d(node).waitForLoad3d((load3d) => {
					load3d.clearModel();
				});
				const modelWidget = node.widgets?.find((w) => w.name === "model_file");
				if (modelWidget) modelWidget.value = "";
			});
			const widget = new ComponentWidgetImpl({
				node,
				name: "image",
				component: Load3D_default,
				inputSpec: inputSpecLoad3D,
				options: {}
			});
			widget.type = "load3D";
			addWidget(node, widget);
			return { widget };
		} };
	},
	getNodeMenuItems(node) {
		if (node.constructor.comfyClass !== "Load3D") return [];
		const load3d = useLoad3dService().getLoad3d(node);
		if (!load3d) return [];
		if (load3d.isSplatModel()) return [];
		return createExportMenuItems(load3d);
	},
	async nodeCreated(node) {
		if (node.constructor.comfyClass !== "Load3D") return;
		const [oldWidth, oldHeight] = node.size;
		node.setSize([Math.max(oldWidth, 300), Math.max(oldHeight, 600)]);
		await nextTick();
		useLoad3d(node).waitForLoad3d((load3d) => {
			const cameraState = node.properties["Camera Config"]?.state;
			const config = new Load3DConfiguration(load3d, node.properties);
			const modelWidget = node.widgets?.find((w) => w.name === "model_file");
			const width = node.widgets?.find((w) => w.name === "width");
			const height = node.widgets?.find((w) => w.name === "height");
			const sceneWidget = node.widgets?.find((w) => w.name === "image");
			if (modelWidget && width && height && sceneWidget) {
				const settings = {
					loadFolder: "input",
					modelWidget,
					cameraState,
					width,
					height
				};
				config.configure(settings);
				sceneWidget.serializeValue = async () => {
					const currentLoad3d = nodeToLoad3dMap.get(node);
					if (!currentLoad3d) {
						console.error("No load3d instance found for node");
						return null;
					}
					const cameraConfig = node.properties["Camera Config"] || {
						cameraType: currentLoad3d.getCurrentCameraType(),
						fov: currentLoad3d.cameraManager.perspectiveCamera.fov
					};
					cameraConfig.state = currentLoad3d.getCameraState();
					node.properties["Camera Config"] = cameraConfig;
					currentLoad3d.stopRecording();
					const { scene: imageData, mask: maskData, normal: normalData } = await currentLoad3d.captureScene(width.value, height.value);
					const [data, dataMask, dataNormal] = await Promise.all([
						Load3dUtils.uploadTempImage(imageData, "scene"),
						Load3dUtils.uploadTempImage(maskData, "scene_mask"),
						Load3dUtils.uploadTempImage(normalData, "scene_normal")
					]);
					currentLoad3d.handleResize();
					const returnVal = {
						image: `threed/${data.name} [temp]`,
						mask: `threed/${dataMask.name} [temp]`,
						normal: `threed/${dataNormal.name} [temp]`,
						camera_info: node.properties["Camera Config"]?.state || null,
						recording: ""
					};
					const recordingData = currentLoad3d.getRecordingData();
					if (recordingData) {
						const [recording] = await Promise.all([Load3dUtils.uploadTempImage(recordingData, "recording", "mp4")]);
						returnVal["recording"] = `threed/${recording.name} [temp]`;
					}
					return returnVal;
				};
			}
		});
	}
});
useExtensionService().registerExtension({
	name: "Comfy.Preview3D",
	async beforeRegisterNodeDef(_nodeType, nodeData) {
		if ("Preview3D" === nodeData.name) nodeData.input.required.image = ["PREVIEW_3D"];
	},
	getNodeMenuItems(node) {
		if (node.constructor.comfyClass !== "Preview3D") return [];
		const load3d = useLoad3dService().getLoad3d(node);
		if (!load3d) return [];
		if (load3d.isSplatModel()) return [];
		return createExportMenuItems(load3d);
	},
	getCustomWidgets() {
		return { PREVIEW_3D(node) {
			const widget = new ComponentWidgetImpl({
				node,
				name: inputSpecPreview3D.name,
				component: Load3D_default,
				inputSpec: inputSpecPreview3D,
				options: {}
			});
			widget.type = "load3D";
			addWidget(node, widget);
			return { widget };
		} };
	},
	async nodeCreated(node) {
		if (node.constructor.comfyClass !== "Preview3D") return;
		const [oldWidth, oldHeight] = node.size;
		node.setSize([Math.max(oldWidth, 400), Math.max(oldHeight, 550)]);
		await nextTick();
		const onExecuted = node.onExecuted;
		useLoad3d(node).waitForLoad3d((load3d) => {
			const config = new Load3DConfiguration(load3d, node.properties);
			const modelWidget = node.widgets?.find((w) => w.name === "model_file");
			if (modelWidget) {
				const lastTimeModelFile = node.properties["Last Time Model File"];
				if (lastTimeModelFile) {
					modelWidget.value = lastTimeModelFile;
					const settings = {
						loadFolder: "output",
						modelWidget,
						cameraState: node.properties["Camera Config"]?.state
					};
					config.configure(settings);
				}
				node.onExecuted = function(output) {
					onExecuted?.call(this, output);
					const result = output.result;
					const filePath = result?.[0];
					if (!filePath) {
						const msg = t("toastMessages.unableToGetModelFilePath");
						console.error(msg);
						useToastStore().addAlert(msg);
					}
					const cameraState = result?.[1];
					const bgImagePath = result?.[2];
					modelWidget.value = filePath?.replaceAll("\\", "/");
					node.properties["Last Time Model File"] = modelWidget.value;
					const settings = {
						loadFolder: "output",
						modelWidget,
						cameraState,
						bgImagePath
					};
					config.configure(settings);
					if (bgImagePath) load3d.setBackgroundImage(bgImagePath);
				};
			}
		});
	}
});
//#endregion

//# sourceMappingURL=load3d-CanahfQQ.js.map