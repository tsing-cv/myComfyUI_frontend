import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { q as nextTick } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { ca as ComponentWidgetImpl, kn as useExtensionService, ua as addWidget } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import "./vendor-three-BgyUnc8C.js";
import "./Load3DControls-DKF_Lg66.js";
import "./constants-CWGvtpeq.js";
import "./Load3dViewerContent-CP4eDf5B.js";
import { t as Load3D_default } from "./Load3D-EqxKHmii.js";
import "./AnimationControls-dEDCTTQj.js";
import { t as useLoad3dService } from "./load3dService-DBqNe2jy.js";
import "./useLoad3dViewer-rP5gDjML.js";
import { n as isAssetPreviewSupported, r as persistThumbnail } from "./assetPreviewUtil-b8QgVY6y.js";
import { n as useLoad3d } from "./useLoad3d-By_zxv6R.js";
import { n as createExportMenuItems, t as Load3DConfiguration } from "./Load3DConfiguration-XhjsE5s8.js";
//#region src/extensions/core/saveMesh.ts
var inputSpec = {
	name: "image",
	type: "Preview3D",
	isPreview: true
};
useExtensionService().registerExtension({
	name: "Comfy.SaveGLB",
	async beforeRegisterNodeDef(_nodeType, nodeData) {
		if ("SaveGLB" === nodeData.name) nodeData.input.required.image = ["PREVIEW_3D"];
	},
	getCustomWidgets() {
		return { PREVIEW_3D(node) {
			const widget = new ComponentWidgetImpl({
				node,
				name: inputSpec.name,
				component: Load3D_default,
				inputSpec,
				options: {}
			});
			widget.type = "load3D";
			addWidget(node, widget);
			return { widget };
		} };
	},
	getNodeMenuItems(node) {
		if (node.constructor.comfyClass !== "SaveGLB") return [];
		const load3d = useLoad3dService().getLoad3d(node);
		if (!load3d) return [];
		if (load3d.isSplatModel()) return [];
		return createExportMenuItems(load3d);
	},
	async nodeCreated(node) {
		if (node.constructor.comfyClass !== "SaveGLB") return;
		const [oldWidth, oldHeight] = node.size;
		node.setSize([Math.max(oldWidth, 400), Math.max(oldHeight, 550)]);
		await nextTick();
		const onExecuted = node.onExecuted;
		node.onExecuted = function(output) {
			onExecuted?.call(this, output);
			const fileInfo = output["3d"]?.[0];
			if (!fileInfo) return;
			useLoad3d(node).waitForLoad3d((load3d) => {
				const modelWidget = node.widgets?.find((w) => w.name === "image");
				if (load3d && modelWidget) {
					const filePath = (fileInfo.subfolder ?? "") + "/" + (fileInfo.filename ?? "");
					modelWidget.value = filePath;
					const config = new Load3DConfiguration(load3d, node.properties);
					const loadFolder = fileInfo.type;
					config.configureForSaveMesh(loadFolder, filePath);
					if (isAssetPreviewSupported()) {
						const filename = fileInfo.filename ?? "";
						const onModelLoaded = () => {
							load3d.removeEventListener("modelLoadingEnd", onModelLoaded);
							load3d.captureThumbnail(256, 256).then((dataUrl) => fetch(dataUrl).then((r) => r.blob())).then((blob) => persistThumbnail(filename, blob)).catch(() => {});
						};
						load3d.addEventListener("modelLoadingEnd", onModelLoaded);
					}
				}
			});
		};
	}
});
//#endregion

//# sourceMappingURL=saveMesh-B4wx08bb.js.map