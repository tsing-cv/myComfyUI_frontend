const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CloudLayoutView-Cu5vnBML.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./rolldown-runtime-DBfy44LZ.js","./vendor-primevue-Dnp2bJ8y.js","./vendor-vue-core-Ba0aGEmU.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-i18n-CQIJzQYM.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-ClaKHdWI.js","./vendor-sentry-Dn2jSJwd.js","./vendor-vueuse--4MZqvDu.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-B-Ajm1fy.js","./i18n-CEjiKAGw.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-CHCY451S.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./api-kFdESQTE.js","./vendor-yjs-CLwSweDd.js","./widget-W78njY6p.js","./colorUtil-D_gLWYA0.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-BfoO2Yv1.js","./useErrorHandling-BWjixeIq.js","./useExternalLink-CjbQfKLB.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BHjH2vt1.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-DKB2Qhsc.js","./widgetTypes-DxLkDLQG.js","./markdownRendererUtil-uFQ2wi0y.js","./GlobalToast-hDGeUiGy.js","./BaseViewTemplate-DU0C8qed.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css","./CloudLayoutView-DROL9oAr.css","./CloudLoginView-DWY3eo-I.js","./previousFullPath-CW2bPFiz.js","./signInSchema-1WKqWTIy.js","./CloudLoginView-K9ms0jc0.css","./useCurrentUser-ChrnAbK4.js","./CloudSignupView-Bs2saEn5.js","./PasswordFields-CrcBZL3E.js","./SignUpForm-G5PrbH2z.js","./CloudSignupView-BlUYDr6L.css","./CloudForgotPasswordView-Cwkr2JKH.js","./CloudForgotPasswordView-DBj5Yxev.css","./CloudSurveyView-CzfDHssd.js","./auth-DsUzMF2I.js","./CloudSurveyView-CJ05EnUH.css","./UserCheckView-DajK9QBs.js","./CloudSorryContactSupportView-Zo6nvFzV.js","./CloudSorryContactSupportView-Cg1Fm-bz.css","./CloudAuthTimeoutView-Brdn87Of.js","./CloudSubscriptionRedirectView-C6jV-Bg3.js","./subscriptionCheckoutUtil-DTVEEs1_.js","./comfy-logo-single-Busbi-nj.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-Dnp2bJ8y.js";
//#region src/platform/cloud/onboarding/onboardingCloudRoutes.ts
var cloudOnboardingRoutes = [{
	path: "/cloud",
	component: () => __vitePreload(() => import("./CloudLayoutView-Cu5vnBML.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), import.meta.url),
	children: [
		{
			path: "login",
			name: "cloud-login",
			component: () => __vitePreload(() => import("./CloudLoginView-DWY3eo-I.js"), __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,52,53,48,49,54]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-ChrnAbK4.js");
						return { useCurrentUser };
					}, __vite__mapDeps([55,3,2,4,5,6,7,8,9,11,12,13,1,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next({ name: "cloud-user-check" });
				}
				next();
			}
		},
		{
			path: "signup",
			name: "cloud-signup",
			component: () => __vitePreload(() => import("./CloudSignupView-Bs2saEn5.js"), __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,57,58,53,52,48,49,59]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-ChrnAbK4.js");
						return { useCurrentUser };
					}, __vite__mapDeps([55,3,2,4,5,6,7,8,9,11,12,13,1,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next({ name: "cloud-user-check" });
				}
				next();
			}
		},
		{
			path: "forgot-password",
			name: "cloud-forgot-password",
			component: () => __vitePreload(() => import("./CloudForgotPasswordView-Cwkr2JKH.js"), __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,61]), import.meta.url)
		},
		{
			path: "survey",
			name: "cloud-survey",
			component: () => __vitePreload(() => import("./CloudSurveyView-CzfDHssd.js"), __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,10,11,24,18,26,15,16,27,17,20,28,21,22,29,37,63,14,40,48,64]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "user-check",
			name: "cloud-user-check",
			component: () => __vitePreload(() => import("./UserCheckView-DajK9QBs.js"), __vite__mapDeps([65,2,3,4,5,6,7,8,9,15,11,24,18,26,16,27,17,20,10,28,21,22,29,34,37,63,14,48]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "sorry-contact-support",
			name: "cloud-sorry-contact-support",
			component: () => __vitePreload(() => import("./CloudSorryContactSupportView-Zo6nvFzV.js"), __vite__mapDeps([66,1,2,10,4,67]), import.meta.url)
		},
		{
			path: "auth-timeout",
			name: "cloud-auth-timeout",
			component: () => __vitePreload(() => import("./CloudAuthTimeoutView-Brdn87Of.js"), __vite__mapDeps([68,2,3,4,5,6,7,8,9,11,12,13,1,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url),
			props: true
		},
		{
			path: "subscribe",
			name: "cloud-subscribe",
			component: () => __vitePreload(() => import("./CloudSubscriptionRedirectView-C6jV-Bg3.js"), __vite__mapDeps([69,2,3,4,5,6,7,8,9,10,11,12,13,1,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,70,71,48,49]), import.meta.url),
			meta: { requiresAuth: true }
		}
	]
}];
//#endregion
export { cloudOnboardingRoutes };

//# sourceMappingURL=onboardingCloudRoutes-N1hQJ-TL.js.map