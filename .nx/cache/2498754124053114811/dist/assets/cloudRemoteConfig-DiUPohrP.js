import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import { at as watchDebounced } from "./vendor-vueuse--4MZqvDu.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { Mi as useCurrentUser, ki as useBillingContext, kn as useExtensionService } from "./dialogService-ClaKHdWI.js";
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
import { t as refreshRemoteConfig } from "./refreshRemoteConfig-BkrXrlc_.js";
//#region src/extensions/core/cloudRemoteConfig.ts
/**
* Cloud-only extension that polls for remote config updates
* Initial config load happens in main.ts before any other imports
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.RemoteConfig",
	setup: async () => {
		const { isLoggedIn } = useCurrentUser();
		const { isActiveSubscription } = useBillingContext();
		watchDebounced([isLoggedIn, isActiveSubscription], () => {
			if (!isLoggedIn.value) return;
			refreshRemoteConfig();
		}, {
			debounce: 256,
			immediate: true
		});
		setInterval(() => void refreshRemoteConfig(), 6e5);
	}
});
//#endregion

//# sourceMappingURL=cloudRemoteConfig-DiUPohrP.js.map