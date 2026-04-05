import { r as __name } from "./rolldown-runtime-DBfy44LZ.js";
import { C as script$2, I as script$6, M as script$4, d as script$3, pt as useConfirm, q as script, rt as script$1, tt as script$5 } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, Dt as reactive, F as createTextVNode, G as mergeModels, I as createVNode, It as toValue, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _t as withCtx, at as resolveDirective, b as withModifiers, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, ut as useModel, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import { ot as whenever } from "./vendor-vueuse--4MZqvDu.js";
import { r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bx34DVM6.js";
//#region src/platform/secrets/types.ts
var SECRET_ERROR_CODES = [
	"INVALID_REQUEST",
	"INVALID_PROVIDER",
	"DUPLICATE_NAME",
	"DUPLICATE_PROVIDER",
	"FORBIDDEN",
	"NOT_FOUND"
];
//#endregion
//#region src/platform/secrets/api/secretsApi.ts
var SecretsApiError = class extends Error {
	constructor(message, status, code) {
		super(message);
		this.status = status;
		this.code = code;
		this.name = "SecretsApiError";
	}
};
async function handleResponse(response) {
	if (!response.ok) {
		let errorData = {};
		try {
			errorData = await response.json();
		} catch {}
		const code = SECRET_ERROR_CODES.includes(errorData.code) ? errorData.code : void 0;
		throw new SecretsApiError(errorData.message ?? response.statusText, response.status, code);
	}
	return response.json();
}
async function listSecrets() {
	return (await handleResponse(await api.fetchApi("/secrets"))).data;
}
async function createSecret(payload) {
	return handleResponse(await api.fetchApi("/secrets", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	}));
}
async function updateSecret(id, payload) {
	return handleResponse(await api.fetchApi(`/secrets/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	}));
}
async function deleteSecret(id) {
	const response = await api.fetchApi(`/secrets/${id}`, { method: "DELETE" });
	if (!response.ok) await handleResponse(response);
}
//#endregion
//#region src/platform/secrets/composables/useSecrets.ts
function useSecrets() {
	const { t } = useI18n();
	const toastStore = useToastStore();
	const loading = ref(false);
	const secrets = ref([]);
	const operatingSecretId = ref(null);
	const existingProviders = computed(() => secrets.value.map((s) => s.provider).filter((p) => p !== void 0));
	async function fetchSecrets() {
		loading.value = true;
		try {
			secrets.value = await listSecrets();
		} catch (err) {
			if (err instanceof SecretsApiError) toastStore.add({
				severity: "error",
				summary: t("g.error"),
				detail: err.message
			});
			else {
				console.error("Unexpected error fetching secrets:", err);
				toastStore.add({
					severity: "error",
					summary: t("g.error"),
					detail: t("g.unknownError")
				});
			}
		} finally {
			loading.value = false;
		}
	}
	async function deleteSecret$1(secret) {
		operatingSecretId.value = secret.id;
		try {
			await deleteSecret(secret.id);
			secrets.value = secrets.value.filter((s) => s.id !== secret.id);
		} catch (err) {
			if (err instanceof SecretsApiError) toastStore.add({
				severity: "error",
				summary: t("g.error"),
				detail: err.message
			});
			else {
				console.error("Unexpected error deleting secret:", err);
				toastStore.add({
					severity: "error",
					summary: t("g.error"),
					detail: t("g.unknownError")
				});
			}
		} finally {
			operatingSecretId.value = null;
		}
	}
	__name(deleteSecret$1, "deleteSecret");
	return {
		loading,
		secrets,
		operatingSecretId,
		existingProviders,
		fetchSecrets,
		deleteSecret: deleteSecret$1
	};
}
//#endregion
//#region src/platform/secrets/providers.ts
var SECRET_PROVIDERS = [{
	value: "huggingface",
	label: "HuggingFace",
	logo: "/assets/images/hf-logo.svg"
}, {
	value: "civitai",
	label: "Civitai",
	logo: "/assets/images/civitai.svg"
}];
function getProviderLabel(provider) {
	if (!provider) return "";
	return SECRET_PROVIDERS.find((p) => p.value === provider)?.label ?? provider;
}
function getProviderLogo(provider) {
	if (!provider) return void 0;
	return SECRET_PROVIDERS.find((p) => p.value === provider)?.logo;
}
//#endregion
//#region src/platform/secrets/composables/useSecretForm.ts
function useSecretForm(options) {
	const { t } = useI18n();
	const { mode, secret: secretRef, existingProviders, visible, onSaved } = options;
	const loading = ref(false);
	const apiErrorCode = ref(null);
	const apiErrorMessage = ref(null);
	const form = reactive({
		name: "",
		secretValue: "",
		provider: null
	});
	const errors = reactive({
		name: "",
		secretValue: "",
		provider: ""
	});
	const providerOptions = computed(() => SECRET_PROVIDERS.map((p) => ({
		label: p.label,
		value: p.value,
		disabled: mode === "edit" ? false : toValue(existingProviders).includes(p.value)
	})));
	const apiError = computed(() => {
		if (!apiErrorCode.value && !apiErrorMessage.value) return null;
		switch (apiErrorCode.value) {
			case "DUPLICATE_NAME": return t("secrets.errors.duplicateName");
			case "DUPLICATE_PROVIDER": return t("secrets.errors.duplicateProvider");
			default: return apiErrorMessage.value;
		}
	});
	function resetForm() {
		const secret = toValue(secretRef);
		if (mode === "edit" && secret) {
			form.name = secret.name;
			form.provider = secret.provider ?? null;
			form.secretValue = "";
		} else {
			form.name = "";
			form.secretValue = "";
			form.provider = null;
		}
		errors.name = "";
		errors.secretValue = "";
		errors.provider = "";
		apiErrorCode.value = null;
		apiErrorMessage.value = null;
	}
	whenever(() => visible.value, resetForm);
	function validate() {
		errors.name = "";
		errors.secretValue = "";
		errors.provider = "";
		if (!form.name.trim()) {
			errors.name = t("secrets.errors.nameRequired");
			return false;
		}
		if (form.name.length > 255) {
			errors.name = t("secrets.errors.nameTooLong");
			return false;
		}
		if (!form.provider) {
			errors.provider = t("secrets.errors.providerRequired");
			return false;
		}
		if (mode === "create" && !form.secretValue) {
			errors.secretValue = t("secrets.errors.secretValueRequired");
			return false;
		}
		return true;
	}
	async function handleSubmit() {
		if (!validate()) return;
		loading.value = true;
		apiErrorCode.value = null;
		apiErrorMessage.value = null;
		try {
			const secret = toValue(secretRef);
			if (mode === "create") await createSecret({
				name: form.name.trim(),
				secret_value: form.secretValue,
				provider: form.provider
			});
			else if (secret) {
				const updatePayload = { name: form.name.trim() };
				if (form.secretValue) updatePayload.secret_value = form.secretValue;
				await updateSecret(secret.id, updatePayload);
			}
			onSaved();
			visible.value = false;
		} catch (err) {
			if (err instanceof SecretsApiError) {
				apiErrorCode.value = err.code ?? null;
				apiErrorMessage.value = err.message;
			}
		} finally {
			loading.value = false;
		}
	}
	return {
		form,
		errors,
		loading,
		apiError,
		providerOptions,
		handleSubmit
	};
}
//#endregion
//#region src/platform/secrets/components/SecretFormDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex flex-col gap-1" };
var _hoisted_2$2 = {
	for: "secret-provider",
	class: "text-sm font-medium"
};
var _hoisted_3$2 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_4$2 = { class: "flex flex-col gap-1" };
var _hoisted_5$2 = {
	for: "secret-name",
	class: "text-sm font-medium"
};
var _hoisted_6$2 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_7$2 = { class: "flex flex-col gap-1" };
var _hoisted_8$2 = {
	for: "secret-value",
	class: "text-sm font-medium"
};
var _hoisted_9$2 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_10$1 = {
	key: 1,
	class: "text-muted"
};
var _hoisted_11 = {
	key: 0,
	class: "text-destructive text-sm"
};
var _hoisted_12 = { class: "flex justify-end gap-2 pt-2" };
//#endregion
//#region src/platform/secrets/components/SecretFormDialog.vue
var SecretFormDialog_default = /* @__PURE__ */ defineComponent({
	__name: "SecretFormDialog",
	props: /* @__PURE__ */ mergeModels({
		secret: {},
		existingProviders: { default: () => [] },
		mode: { default: "create" }
	}, {
		"visible": {
			type: Boolean,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["saved"], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "visible");
		const emit = __emit;
		const { form, errors, loading, apiError, providerOptions, handleSubmit } = useSecretForm({
			mode: __props.mode,
			secret: () => __props.secret,
			existingProviders: () => __props.existingProviders,
			visible,
			onSaved: () => emit("saved")
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				visible: visible.value,
				"onUpdate:visible": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
				header: _ctx.mode === "create" ? _ctx.$t("secrets.addSecret") : _ctx.$t("secrets.editSecret"),
				modal: "",
				class: "w-full max-w-md"
			}, {
				default: withCtx(() => [createBaseVNode("form", {
					class: "flex flex-col gap-4",
					onSubmit: _cache[4] || (_cache[4] = withModifiers((...args) => unref(handleSubmit) && unref(handleSubmit)(...args), ["prevent"]))
				}, [
					createBaseVNode("div", _hoisted_1$2, [
						createBaseVNode("label", _hoisted_2$2, toDisplayString(_ctx.$t("secrets.provider")), 1),
						createVNode(Select_default, {
							modelValue: unref(form).provider,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).provider = $event),
							disabled: _ctx.mode === "edit"
						}, {
							default: withCtx(() => [createVNode(SelectTrigger_default, {
								id: "secret-provider",
								class: "w-full",
								autofocus: ""
							}, {
								default: withCtx(() => [createVNode(SelectValue_default, { placeholder: _ctx.$t("g.none") }, null, 8, ["placeholder"])]),
								_: 1
							}), createVNode(SelectContent_default, { "disable-portal": "" }, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(providerOptions), (option) => {
									return openBlock(), createBlock(SelectItem_default, {
										key: option.value || "none",
										value: option.value,
										disabled: option.disabled
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
										_: 2
									}, 1032, ["value", "disabled"]);
								}), 128))]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue", "disabled"]),
						unref(errors).provider ? (openBlock(), createElementBlock("small", _hoisted_3$2, toDisplayString(unref(errors).provider), 1)) : createCommentVNode("", true)
					]),
					createBaseVNode("div", _hoisted_4$2, [
						createBaseVNode("label", _hoisted_5$2, toDisplayString(_ctx.$t("secrets.name")), 1),
						createVNode(unref(script$1), {
							id: "secret-name",
							modelValue: unref(form).name,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).name = $event),
							placeholder: _ctx.$t("secrets.namePlaceholder"),
							class: normalizeClass({ "p-invalid": unref(errors).name })
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						]),
						unref(errors).name ? (openBlock(), createElementBlock("small", _hoisted_6$2, toDisplayString(unref(errors).name), 1)) : createCommentVNode("", true)
					]),
					createBaseVNode("div", _hoisted_7$2, [
						createBaseVNode("label", _hoisted_8$2, toDisplayString(_ctx.$t("secrets.secretValue")), 1),
						createVNode(unref(script$2), {
							id: "secret-value",
							modelValue: unref(form).secretValue,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).secretValue = $event),
							placeholder: _ctx.mode === "edit" ? _ctx.$t("secrets.secretValuePlaceholderEdit") : _ctx.$t("secrets.secretValuePlaceholder"),
							feedback: false,
							"toggle-mask": "",
							fluid: "",
							class: normalizeClass({ "p-invalid": unref(errors).secretValue })
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						]),
						unref(errors).secretValue ? (openBlock(), createElementBlock("small", _hoisted_9$2, toDisplayString(unref(errors).secretValue), 1)) : (openBlock(), createElementBlock("small", _hoisted_10$1, toDisplayString(_ctx.mode === "edit" ? _ctx.$t("secrets.secretValueHintEdit") : _ctx.$t("secrets.secretValueHint")), 1))
					]),
					unref(apiError) ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(unref(apiError)), 1)) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_12, [createVNode(Button_default, {
						variant: "secondary",
						type: "button",
						tabindex: "0",
						onClick: _cache[3] || (_cache[3] = ($event) => visible.value = false)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
						_: 1
					}), createVNode(Button_default, {
						type: "submit",
						tabindex: "0",
						loading: unref(loading)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.save")), 1)]),
						_: 1
					}, 8, ["loading"])])
				], 32)]),
				_: 1
			}, 8, ["visible", "header"]);
		};
	}
});
//#endregion
//#region src/platform/secrets/components/SecretListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "bg-base-raised-surface flex items-center justify-between rounded-lg border border-border-default p-4" };
var _hoisted_2$1 = { class: "flex flex-col gap-1" };
var _hoisted_3$1 = { class: "flex items-center gap-2" };
var _hoisted_4$1 = { class: "font-medium text-base-foreground" };
var _hoisted_5$1 = ["src", "alt"];
var _hoisted_6$1 = {
	key: 1,
	class: "bg-base-surface rounded-sm px-2 py-0.5 text-xs text-muted"
};
var _hoisted_7$1 = { class: "flex gap-3 text-xs text-muted" };
var _hoisted_8$1 = { key: 0 };
var _hoisted_9$1 = { class: "flex items-center gap-2" };
var _hoisted_10 = {
	key: 0,
	class: "pi pi-spinner pi-spin text-muted"
};
//#endregion
//#region src/platform/secrets/components/SecretListItem.vue
var SecretListItem_default = /* @__PURE__ */ defineComponent({
	__name: "SecretListItem",
	props: {
		secret: {},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const providerLabel = computed(() => getProviderLabel(__props.secret.provider));
		const providerLogo = computed(() => getProviderLogo(__props.secret.provider));
		function formatDateString(dateString) {
			return new Date(dateString).toLocaleDateString();
		}
		const createdDate = computed(() => formatDateString(__props.secret.created_at));
		const lastUsedDate = computed(() => __props.secret.last_used_at ? formatDateString(__props.secret.last_used_at) : "");
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("span", _hoisted_4$1, toDisplayString(_ctx.secret.name), 1), providerLogo.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: providerLogo.value,
				alt: providerLabel.value,
				class: "size-5"
			}, null, 8, _hoisted_5$1)) : _ctx.secret.provider ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(providerLabel.value), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_7$1, [createBaseVNode("span", null, toDisplayString(_ctx.$t("secrets.createdAt", { date: createdDate.value })), 1), _ctx.secret.last_used_at ? (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(_ctx.$t("secrets.lastUsed", { date: lastUsedDate.value })), 1)) : createCommentVNode("", true)])]), createBaseVNode("div", _hoisted_9$1, [_ctx.loading ? (openBlock(), createElementBlock("i", _hoisted_10)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [withDirectives((openBlock(), createBlock(Button_default, {
				variant: "muted-textonly",
				size: "icon-sm",
				"aria-label": _ctx.$t("g.edit"),
				disabled: _ctx.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("edit"))
			}, {
				default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-pen-to-square" }, null, -1)])),
				_: 1
			}, 8, ["aria-label", "disabled"])), [[_directive_tooltip, {
				value: _ctx.$t("g.edit"),
				showDelay: 300
			}]]), withDirectives((openBlock(), createBlock(Button_default, {
				variant: "muted-textonly",
				size: "icon-sm",
				"aria-label": _ctx.$t("g.delete"),
				disabled: _ctx.disabled,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("delete"))
			}, {
				default: withCtx(() => _cache[3] || (_cache[3] = [createBaseVNode("i", { class: "pi pi-trash" }, null, -1)])),
				_: 1
			}, 8, ["aria-label", "disabled"])), [[_directive_tooltip, {
				value: _ctx.$t("g.delete"),
				showDelay: 300
			}]])], 64))])]);
		};
	}
});
//#endregion
//#region src/platform/secrets/components/SecretsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-full flex-col" };
var _hoisted_2 = { class: "text-2xl font-bold" };
var _hoisted_3 = { class: "mt-1 text-sm text-muted" };
var _hoisted_4 = { class: "mt-1 text-sm text-muted" };
var _hoisted_5 = { class: "my-4 flex items-center justify-between" };
var _hoisted_6 = { class: "my-0 text-lg font-semibold" };
var _hoisted_7 = {
	key: 0,
	class: "flex items-center justify-center py-8"
};
var _hoisted_8 = {
	key: 1,
	class: "py-4 text-center text-sm text-muted"
};
var _hoisted_9 = {
	key: 2,
	class: "flex flex-col gap-3"
};
//#endregion
//#region src/platform/secrets/components/SecretsPanel.vue
var SecretsPanel_default = /* @__PURE__ */ defineComponent({
	__name: "SecretsPanel",
	setup(__props) {
		const { t } = useI18n();
		const confirm = useConfirm();
		const { loading, secrets, operatingSecretId, existingProviders, fetchSecrets, deleteSecret } = useSecrets();
		const createDialogVisible = ref(false);
		const editDialogVisible = ref(false);
		const selectedSecret = ref();
		function openCreateDialog() {
			createDialogVisible.value = true;
		}
		function openEditDialog(secret) {
			selectedSecret.value = secret;
			editDialogVisible.value = true;
		}
		function confirmDelete(secret) {
			confirm.require({
				group: "secrets",
				header: t("secrets.deleteConfirmTitle"),
				message: t("secrets.deleteConfirmMessage", { name: secret.name }),
				acceptClass: "p-button-danger",
				accept: () => deleteSecret(secret)
			});
		}
		fetchSecrets();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script$3), {
				value: "Secrets",
				class: "h-full"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					createBaseVNode("div", null, [
						createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("secrets.title")), 1),
						createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("secrets.description")), 1),
						createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("secrets.descriptionUsage")), 1)
					]),
					createVNode(unref(script$4), { class: "my-4" }),
					createBaseVNode("div", _hoisted_5, [createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.$t("secrets.modelProviders")), 1), createVNode(Button_default, { onClick: openCreateDialog }, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-plus mr-1" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("secrets.addSecret")), 1)]),
						_: 1
					})]),
					unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(script$5), { class: "size-8" })])) : unref(secrets).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.$t("secrets.noSecrets")), 1)) : (openBlock(), createElementBlock("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(secrets), (secret) => {
						return openBlock(), createBlock(SecretListItem_default, {
							key: secret.id,
							secret,
							loading: unref(operatingSecretId) === secret.id,
							disabled: unref(operatingSecretId) !== null,
							onEdit: ($event) => openEditDialog(secret),
							onDelete: ($event) => confirmDelete(secret)
						}, null, 8, [
							"secret",
							"loading",
							"disabled",
							"onEdit",
							"onDelete"
						]);
					}), 128))])),
					createVNode(SecretFormDialog_default, {
						visible: createDialogVisible.value,
						"onUpdate:visible": _cache[0] || (_cache[0] = ($event) => createDialogVisible.value = $event),
						mode: "create",
						"existing-providers": unref(existingProviders),
						onSaved: unref(fetchSecrets)
					}, null, 8, [
						"visible",
						"existing-providers",
						"onSaved"
					]),
					createVNode(SecretFormDialog_default, {
						visible: editDialogVisible.value,
						"onUpdate:visible": _cache[1] || (_cache[1] = ($event) => editDialogVisible.value = $event),
						mode: "edit",
						secret: selectedSecret.value,
						"existing-providers": unref(existingProviders),
						onSaved: unref(fetchSecrets)
					}, null, 8, [
						"visible",
						"secret",
						"existing-providers",
						"onSaved"
					]),
					createVNode(unref(script$6), { group: "secrets" })
				])]),
				_: 1
			});
		};
	}
});
//#endregion
export { SecretsPanel_default as default };

//# sourceMappingURL=SecretsPanel-BGR8OP-E.js.map