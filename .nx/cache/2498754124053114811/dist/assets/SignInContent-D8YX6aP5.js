import "./rolldown-runtime-DBfy44LZ.js";
import { C as script$3, M as script$5, dt as useToast, i as script, n as zodResolver, rt as script$2, st as script$1, tt as script$4 } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, Q as onUnmounted, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, j as createElementBlock, k as createBlock, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { i as remoteConfig, r as configValueOrDefault } from "./useFeatureFlags-BHjH2vt1.js";
import { nt as useThrottleFn } from "./vendor-vueuse--4MZqvDu.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Bi as useAuthStore, Oi as useAuthActions, Ui as getComfyPlatformBaseUrl, Vi as useApiKeyAuthStore, z as isInChina } from "./dialogService-ClaKHdWI.js";
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
import { n as signInSchema, t as apiKeySchema } from "./signInSchema-1WKqWTIy.js";
import "./PasswordFields-CrcBZL3E.js";
import { t as SignUpForm_default } from "./SignUpForm-G5PrbH2z.js";
//#region ../../../../../assets/images/comfy-logo-mono.svg
var comfy_logo_mono_default = "" + new URL("images/comfy-logo-mono.svg", import.meta.url).href;
//#endregion
//#region src/utils/hostWhitelist.ts
/**
* Whitelisting helper for enabling SSO on safe, local-only hosts.
*
* Built-ins (always allowed):
*   • 'localhost' and any subdomain of '.localhost' (e.g., app.localhost)
*   • IPv4 loopback 127.0.0.0/8 (e.g., 127.0.0.1, 127.1.2.3)
*   • IPv6 loopback ::1 (supports compressed/expanded textual forms)
*
* No environment variables are used. To add more exact hostnames,
* edit HOST_WHITELIST below.
*/
var HOST_WHITELIST = ["localhost"];
/** Normalize for comparison: lowercase, strip port/brackets, trim trailing dot. */
function normalizeHost(input) {
	let h = (input || "").trim().toLowerCase();
	h = h.replace(/\.$/, "");
	const mBracket = h.match(/^\[([^\]]+)\]:(\d+)$/);
	if (mBracket) h = mBracket[1];
	else {
		const mPort = h.match(/^([^:]+):(\d+)$/);
		if (mPort) h = mPort[1];
	}
	h = h.replace(/^\[|\]$/g, "");
	return h;
}
/** Public check used by the UI. */
function isHostWhitelisted(rawHost) {
	const host = normalizeHost(rawHost);
	if (isLocalhostLabel(host)) return true;
	if (isIPv4Loopback(host)) return true;
	if (isIPv6Loopback(host)) return true;
	if (isComfyOrgHost(host)) return true;
	return HOST_WHITELIST.map(normalizeHost).includes(host);
}
function isLocalhostLabel(h) {
	return h === "localhost" || h.endsWith(".localhost");
}
var V4_LOOPBACK_RE = /* @__PURE__ */ new RegExp("^127\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)$");
function isIPv4Loopback(h) {
	return V4_LOOPBACK_RE.test(h);
}
var V6_FULL_LOOPBACK_RE = /^(?:0{1,4}:){7}0{0,3}1$/i;
var V6_COMPRESSED_LOOPBACK_RE = /^((?:0{1,4}(?::0{1,4}){0,6})?)::((?:0{1,4}:){0,6})0{0,3}1$/i;
function isIPv6Loopback(h) {
	if (V6_FULL_LOOPBACK_RE.test(h)) return true;
	const m = h.match(V6_COMPRESSED_LOOPBACK_RE);
	if (!m) return false;
	return (m[1] ? m[1].match(/0{1,4}:/gi)?.length ?? 0 : 0) + (m[2] ? m[2].match(/0{1,4}:/gi)?.length ?? 0 : 0) <= 6;
}
var COMFY_ORG_HOST = /\.comfy\.org$/;
function isComfyOrgHost(h) {
	return COMFY_ORG_HOST.test(h);
}
//#endregion
//#region src/components/dialog/content/signin/ApiKeyForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex flex-col gap-6" };
var _hoisted_2$2 = { class: "mb-8 flex flex-col gap-4" };
var _hoisted_3$2 = { class: "my-0 text-2xl/normal font-medium" };
var _hoisted_4$2 = { class: "flex flex-col gap-2" };
var _hoisted_5$2 = { class: "my-0 text-base text-muted" };
var _hoisted_6$2 = {
	href: "https://docs.comfy.org/interface/user#logging-in-with-an-api-key",
	target: "_blank",
	class: "cursor-pointer text-blue-500"
};
var _hoisted_7$2 = { class: "flex flex-col gap-2" };
var _hoisted_8$1 = {
	class: "mb-2 text-base font-medium opacity-80",
	for: "comfy-org-api-key"
};
var _hoisted_9$1 = { class: "flex flex-col gap-2" };
var _hoisted_10$1 = { class: "text-muted" };
var _hoisted_11$1 = ["href"];
var _hoisted_12$1 = {
	href: "https://docs.comfy.org/tutorials/api-nodes/overview#log-in-with-api-key-on-non-whitelisted-websites",
	target: "_blank",
	class: "cursor-pointer text-blue-500"
};
var _hoisted_13$1 = { class: "mt-4 flex items-center justify-between" };
//#endregion
//#region src/components/dialog/content/signin/ApiKeyForm.vue
var ApiKeyForm_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyForm",
	emits: ["back", "success"],
	setup(__props, { emit: __emit }) {
		const authStore = useAuthStore();
		const apiKeyStore = useApiKeyAuthStore();
		const loading = computed(() => authStore.loading);
		const comfyPlatformBaseUrl = computed(() => configValueOrDefault(remoteConfig.value, "comfy_platform_base_url", getComfyPlatformBaseUrl()));
		const { t } = useI18n();
		const emit = __emit;
		const onSubmit = async (event) => {
			if (event.valid) {
				await apiKeyStore.storeApiKey(event.values.apiKey);
				emit("success");
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("h1", _hoisted_3$2, toDisplayString(unref(t)("auth.apiKey.title")), 1), createBaseVNode("div", _hoisted_4$2, [createBaseVNode("p", _hoisted_5$2, toDisplayString(unref(t)("auth.apiKey.description")), 1), createBaseVNode("a", _hoisted_6$2, toDisplayString(unref(t)("g.learnMore")), 1)])]), createVNode(unref(script), {
				class: "flex flex-col gap-6",
				resolver: unref(zodResolver)(unref(apiKeySchema)),
				onSubmit
			}, {
				default: withCtx(($form) => [
					$form.apiKey?.invalid ? (openBlock(), createBlock(unref(script$1), {
						key: 0,
						severity: "error",
						class: "mb-4"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString($form.apiKey.error.message), 1)]),
						_: 2
					}, 1024)) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_7$2, [createBaseVNode("label", _hoisted_8$1, toDisplayString(unref(t)("auth.apiKey.label")), 1), createBaseVNode("div", _hoisted_9$1, [createVNode(unref(script$2), {
						"pt:root:id": "comfy-org-api-key",
						"pt:root:autocomplete": "off",
						class: "h-10",
						name: "apiKey",
						type: "password",
						placeholder: unref(t)("auth.apiKey.placeholder"),
						invalid: $form.apiKey?.invalid
					}, null, 8, ["placeholder", "invalid"]), createBaseVNode("small", _hoisted_10$1, [
						createTextVNode(toDisplayString(unref(t)("auth.apiKey.helpText")) + " ", 1),
						createBaseVNode("a", {
							href: `${comfyPlatformBaseUrl.value}/login`,
							target: "_blank",
							class: "cursor-pointer text-blue-500"
						}, toDisplayString(unref(t)("auth.apiKey.generateKey")), 9, _hoisted_11$1),
						_cache[1] || (_cache[1] = createBaseVNode("span", { class: "mx-1" }, "•", -1)),
						createBaseVNode("a", _hoisted_12$1, toDisplayString(unref(t)("auth.apiKey.whitelistInfo")), 1)
					])])]),
					createBaseVNode("div", _hoisted_13$1, [createVNode(Button_default, {
						type: "button",
						variant: "textonly",
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("back"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.back")), 1)]),
						_: 1
					}), createVNode(Button_default, {
						type: "submit",
						variant: "primary",
						loading: loading.value,
						disabled: loading.value
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.save")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"])])
				]),
				_: 1
			}, 8, ["resolver"])]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/signin/SignInForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex flex-col gap-2" };
var _hoisted_2$1 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_3$1 = { class: "flex flex-col gap-2" };
var _hoisted_4$1 = { class: "mb-2 flex items-center justify-between" };
var _hoisted_5$1 = {
	class: "text-base font-medium opacity-80",
	for: "comfy-org-sign-in-password"
};
var _hoisted_6$1 = ["onClick"];
var _hoisted_7$1 = {
	key: 0,
	class: "text-red-500"
};
var emailInputId = "comfy-org-sign-in-email";
//#endregion
//#region src/components/dialog/content/signin/SignInForm.vue
var SignInForm_default = /* @__PURE__ */ defineComponent({
	__name: "SignInForm",
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const authStore = useAuthStore();
		const authActions = useAuthActions();
		const loading = computed(() => authStore.loading);
		const toast = useToast();
		const { t } = useI18n();
		const emit = __emit;
		const onSubmit = useThrottleFn((event) => {
			if (event.valid) emit("submit", event.values);
		}, 1500);
		const handleForgotPassword = async (email, isValid) => {
			if (!email || !isValid) {
				toast.add({
					severity: "warn",
					summary: t("auth.login.emailPlaceholder"),
					life: 5e3
				});
				document.getElementById(emailInputId)?.focus?.();
				return;
			}
			await authActions.sendPasswordReset(email);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				class: "flex flex-col gap-6",
				resolver: unref(zodResolver)(unref(signInSchema)),
				onSubmit: unref(onSubmit)
			}, {
				default: withCtx(($form) => [
					createBaseVNode("div", _hoisted_1$1, [
						createBaseVNode("label", {
							class: "mb-2 text-base font-medium opacity-80",
							for: emailInputId
						}, toDisplayString(unref(t)("auth.login.emailLabel")), 1),
						createVNode(unref(script$2), {
							id: emailInputId,
							autocomplete: "email",
							class: "h-10",
							name: "email",
							type: "text",
							placeholder: unref(t)("auth.login.emailPlaceholder"),
							invalid: $form.email?.invalid
						}, null, 8, ["placeholder", "invalid"]),
						$form.email?.invalid ? (openBlock(), createElementBlock("small", _hoisted_2$1, toDisplayString($form.email.error.message), 1)) : createCommentVNode("", true)
					]),
					createBaseVNode("div", _hoisted_3$1, [
						createBaseVNode("div", _hoisted_4$1, [createBaseVNode("label", _hoisted_5$1, toDisplayString(unref(t)("auth.login.passwordLabel")), 1), createBaseVNode("span", {
							class: normalizeClass(unref(cn)("text-base font-medium text-muted select-none", {
								"cursor-not-allowed opacity-50": !$form.email?.value || $form.email?.invalid,
								"cursor-pointer": $form.email?.value && !$form.email?.invalid
							})),
							onClick: ($event) => handleForgotPassword($form.email?.value, $form.email?.valid)
						}, toDisplayString(unref(t)("auth.login.forgotPassword")), 11, _hoisted_6$1)]),
						createVNode(unref(script$3), {
							"input-id": "comfy-org-sign-in-password",
							"pt:pc-input-text:root:autocomplete": "current-password",
							name: "password",
							feedback: false,
							"toggle-mask": "",
							placeholder: unref(t)("auth.login.passwordPlaceholder"),
							class: normalizeClass([{ "p-invalid": $form.password?.invalid }, "h-10"]),
							fluid: ""
						}, null, 8, ["placeholder", "class"]),
						$form.password?.invalid ? (openBlock(), createElementBlock("small", _hoisted_7$1, toDisplayString($form.password.error.message), 1)) : createCommentVNode("", true)
					]),
					loading.value ? (openBlock(), createBlock(unref(script$4), {
						key: 0,
						class: "mx-auto size-8"
					})) : (openBlock(), createBlock(Button_default, {
						key: 1,
						type: "submit",
						class: "mt-4 h-10 font-medium",
						disabled: !$form.valid
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.login.loginButton")), 1)]),
						_: 2
					}, 1032, ["disabled"]))
				]),
				_: 1
			}, 8, ["resolver", "onSubmit"]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/SignInContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "w-96 overflow-x-hidden p-2" };
var _hoisted_2 = { class: "mb-8 flex flex-col gap-4" };
var _hoisted_3 = { class: "my-0 text-2xl/normal font-medium" };
var _hoisted_4 = { class: "my-0 text-base" };
var _hoisted_5 = { class: "text-muted" };
var _hoisted_6 = { class: "text-muted" };
var _hoisted_7 = { class: "flex flex-col gap-6" };
var _hoisted_8 = ["alt"];
var _hoisted_9 = { class: "text-center text-muted" };
var _hoisted_10 = ["href"];
var _hoisted_11 = { class: "mt-8 text-xs text-muted" };
var _hoisted_12 = {
	href: "https://www.comfy.org/terms-of-service",
	target: "_blank",
	class: "cursor-pointer text-blue-500"
};
var _hoisted_13 = {
	href: "https://www.comfy.org/privacy",
	target: "_blank",
	class: "cursor-pointer text-blue-500"
};
//#endregion
//#region src/components/dialog/content/SignInContent.vue
var SignInContent_default = /* @__PURE__ */ defineComponent({
	__name: "SignInContent",
	props: { onSuccess: { type: Function } },
	setup(__props) {
		const { t } = useI18n();
		const authActions = useAuthActions();
		const isSecureContext = window.isSecureContext;
		const isSignIn = ref(true);
		const showApiKeyForm = ref(false);
		const ssoAllowed = isHostWhitelisted(normalizeHost(window.location.hostname));
		const comfyPlatformBaseUrl = computed(() => configValueOrDefault(remoteConfig.value, "comfy_platform_base_url", getComfyPlatformBaseUrl()));
		const toggleState = () => {
			isSignIn.value = !isSignIn.value;
			showApiKeyForm.value = false;
		};
		const signInWithGoogle = async () => {
			if (await authActions.signInWithGoogle({ isNewUser: !isSignIn.value })) __props.onSuccess();
		};
		const signInWithGithub = async () => {
			if (await authActions.signInWithGithub({ isNewUser: !isSignIn.value })) __props.onSuccess();
		};
		const signInWithEmail = async (values) => {
			if (await authActions.signInWithEmail(values.email, values.password)) __props.onSuccess();
		};
		const signUpWithEmail = async (values) => {
			if (await authActions.signUpWithEmail(values.email, values.password)) __props.onSuccess();
		};
		const userIsInChina = ref(false);
		onMounted(async () => {
			userIsInChina.value = await isInChina();
		});
		onUnmounted(() => {
			authActions.accessError.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [showApiKeyForm.value ? (openBlock(), createBlock(ApiKeyForm_default, {
				key: 0,
				onBack: _cache[0] || (_cache[0] = ($event) => showApiKeyForm.value = false),
				onSuccess: _ctx.onSuccess
			}, null, 8, ["onSuccess"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h1", _hoisted_3, toDisplayString(isSignIn.value ? unref(t)("auth.login.title") : unref(t)("auth.signup.title")), 1), createBaseVNode("p", _hoisted_4, [createBaseVNode("span", _hoisted_5, toDisplayString(isSignIn.value ? unref(t)("auth.login.newUser") : unref(t)("auth.signup.alreadyHaveAccount")), 1), createBaseVNode("span", {
					class: "ml-1 cursor-pointer text-blue-500",
					onClick: toggleState
				}, toDisplayString(isSignIn.value ? unref(t)("auth.login.signUp") : unref(t)("auth.signup.signIn")), 1)])]),
				!unref(isSecureContext) ? (openBlock(), createBlock(unref(script$1), {
					key: 0,
					severity: "warn",
					class: "mb-4"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.login.insecureContextWarning")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				isSignIn.value ? (openBlock(), createBlock(SignInForm_default, {
					key: 1,
					onSubmit: signInWithEmail
				})) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [userIsInChina.value ? (openBlock(), createBlock(unref(script$1), {
					key: 0,
					severity: "warn",
					class: "mb-4"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.signup.regionRestrictionChina")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(SignUpForm_default, {
					key: 1,
					onSubmit: signUpWithEmail
				}))], 64)),
				createVNode(unref(script$5), {
					align: "center",
					layout: "horizontal",
					class: "my-8"
				}, {
					default: withCtx(() => [createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("auth.login.orContinueWith")), 1)]),
					_: 1
				}),
				createBaseVNode("div", _hoisted_7, [
					unref(ssoAllowed) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(Button_default, {
						type: "button",
						class: "h-10",
						variant: "secondary",
						onClick: signInWithGoogle
					}, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-google mr-2" }, null, -1)), createTextVNode(" " + toDisplayString(isSignIn.value ? unref(t)("auth.login.loginWithGoogle") : unref(t)("auth.signup.signUpWithGoogle")), 1)]),
						_: 1
					}), createVNode(Button_default, {
						type: "button",
						class: "h-10",
						variant: "secondary",
						onClick: signInWithGithub
					}, {
						default: withCtx(() => [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "pi pi-github mr-2" }, null, -1)), createTextVNode(" " + toDisplayString(isSignIn.value ? unref(t)("auth.login.loginWithGithub") : unref(t)("auth.signup.signUpWithGithub")), 1)]),
						_: 1
					})], 64)) : createCommentVNode("", true),
					!unref(isCloud) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(Button_default, {
						type: "button",
						class: "h-10",
						variant: "secondary",
						onClick: _cache[1] || (_cache[1] = ($event) => showApiKeyForm.value = true)
					}, {
						default: withCtx(() => [createBaseVNode("img", {
							src: comfy_logo_mono_default,
							class: "mr-2 size-5",
							alt: _ctx.$t("g.comfy")
						}, null, 8, _hoisted_8), createTextVNode(" " + toDisplayString(unref(t)("auth.login.useApiKey")), 1)]),
						_: 1
					}), createBaseVNode("small", _hoisted_9, [createTextVNode(toDisplayString(unref(t)("auth.apiKey.helpText")) + " ", 1), createBaseVNode("a", {
						href: `${comfyPlatformBaseUrl.value}/login`,
						target: "_blank",
						class: "cursor-pointer text-blue-500"
					}, toDisplayString(unref(t)("auth.apiKey.generateKey")), 9, _hoisted_10)])], 64)) : createCommentVNode("", true),
					unref(authActions).accessError.value ? (openBlock(), createBlock(unref(script$1), {
						key: 2,
						severity: "info",
						icon: "pi pi-info-circle",
						variant: "outlined",
						closable: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("toastMessages.useApiKeyTip")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				]),
				createBaseVNode("p", _hoisted_11, [
					createTextVNode(toDisplayString(unref(t)("auth.login.termsText")) + " ", 1),
					createBaseVNode("a", _hoisted_12, toDisplayString(unref(t)("auth.login.termsLink")), 1),
					createTextVNode(" " + toDisplayString(unref(t)("auth.login.andText")) + " ", 1),
					createBaseVNode("a", _hoisted_13, toDisplayString(unref(t)("auth.login.privacyLink")), 1),
					createTextVNode(". " + toDisplayString(unref(t)("auth.login.questionsContactPrefix")) + " ", 1),
					_cache[4] || (_cache[4] = createBaseVNode("a", {
						href: "mailto:hello@comfy.org",
						class: "cursor-pointer text-blue-500"
					}, " hello@comfy.org", -1)),
					_cache[5] || (_cache[5] = createTextVNode(". "))
				])
			], 64))]);
		};
	}
});
//#endregion
export { SignInContent_default as default };

//# sourceMappingURL=SignInContent-D8YX6aP5.js.map