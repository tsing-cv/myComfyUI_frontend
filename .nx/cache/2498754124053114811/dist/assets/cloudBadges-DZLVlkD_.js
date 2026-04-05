import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { D as computed, pt as watch } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { i as remoteConfig } from "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { o as t } from "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { C as useCanvasStore, kn as useExtensionService } from "./dialogService-ClaKHdWI.js";
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
//#region src/extensions/core/cloudBadges.ts
var badges = computed(() => {
	const result = [];
	const alert = remoteConfig.value.server_health_alert;
	if (alert) result.push({
		text: alert.message,
		label: alert.badge,
		variant: alert.severity ?? "error",
		tooltip: alert.tooltip
	});
	return result;
});
var canvasStore = useCanvasStore();
watch(() => canvasStore.canvas, (canvas) => {
	if (canvas) canvas.info_text = t("g.comfyCloud");
}, { immediate: true });
useExtensionService().registerExtension({
	name: "Comfy.Cloud.Badges",
	get topbarBadges() {
		return badges.value;
	}
});
//#endregion

//# sourceMappingURL=cloudBadges-DZLVlkD_.js.map