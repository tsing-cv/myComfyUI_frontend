import "./rolldown-runtime-DBfy44LZ.js";
import { L as script$2, N as script$1, c as script, dt as useToast, ht as FilterMatchMode } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, Dt as reactive, F as createTextVNode, I as createVNode, Nt as toRaw, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, at as resolveDirective, b as withModifiers, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, pt as watch, vt as withDirectives, w as Teleport } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import { p as zKeybindingPreset, r as api } from "./api-kFdESQTE.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { t as fromZodError } from "./vendor-zod-Dg3yaIzQ.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { o as t } from "./i18n-CEjiKAGw.js";
import { $ as ContextMenuSeparator_default, Q as ContextMenuTrigger_default, et as ContextMenuPortal_default, nt as ContextMenuContent_default, rt as ContextMenuRoot_default, tt as ContextMenuItem_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Fi as KeybindingImpl, Ii as KeyComboImpl, N as uploadFile, Ni as useCommandStore, Pi as useKeybindingStore, a as useSettingStore, ia as SearchInput_default, sr as showConfirmDialog, t as useDialogService } from "./dialogService-ClaKHdWI.js";
import { w as normalizeI18nKey } from "./formatUtil-CKufMkDg.js";
import { t as useDialogStore } from "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import { t as useErrorHandling } from "./useErrorHandling-BWjixeIq.js";
import { t as downloadBlob } from "./downloadUtil-B-Ajm1fy.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bx34DVM6.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
import { n as DropdownMenu_default, t as useKeybindingService } from "./keybindingService-qjxmsz2c.js";
//#region src/components/dialog/content/setting/keybinding/EditKeybindingContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { class: "flex w-96 flex-col border-t border-border-default px-4" };
var _hoisted_2$5 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_3$3 = { class: "mb-4 text-sm text-base-foreground" };
var _hoisted_4$2 = [
	"value",
	"placeholder",
	"aria-label"
];
var _hoisted_5$1 = { class: "min-h-12" };
var _hoisted_6$1 = {
	key: 0,
	class: "m-0 text-sm text-destructive-background"
};
var _hoisted_7$1 = {
	key: 1,
	class: "m-0 text-sm text-destructive-background"
};
//#endregion
//#region src/components/dialog/content/setting/keybinding/EditKeybindingContent.vue
var EditKeybindingContent_default = /* @__PURE__ */ defineComponent({
	__name: "EditKeybindingContent",
	props: {
		dialogState: {},
		commandLabel: {},
		onUpdateCombo: { type: Function },
		existingKeybindingOnCombo: {}
	},
	setup(__props) {
		function captureKeybinding(event) {
			if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
				if (event.key === "Escape") return;
			}
			__props.onUpdateCombo(KeyComboImpl.fromEvent(event));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$7, [
				createBaseVNode("p", _hoisted_2$5, toDisplayString(_ctx.$t("g.setAKeybindingForTheFollowing")), 1),
				createBaseVNode("div", _hoisted_3$3, toDisplayString(_ctx.commandLabel), 1),
				createBaseVNode("input", {
					class: "text-foreground mb-4 w-full rounded-sm border border-border-default bg-secondary-background px-3 py-2 text-center shadow-none focus:outline-none",
					value: _ctx.dialogState.newCombo?.toString() ?? "",
					placeholder: _ctx.$t("g.enterYourKeybind"),
					"aria-label": _ctx.$t("g.enterYourKeybind"),
					autocomplete: "off",
					autofocus: "",
					onKeydown: withModifiers(captureKeybinding, ["stop", "prevent"])
				}, null, 40, _hoisted_4$2),
				createBaseVNode("div", _hoisted_5$1, [_ctx.dialogState.newCombo?.isBrowserReserved ? (openBlock(), createElementBlock("p", _hoisted_6$1, toDisplayString(_ctx.$t("g.browserReservedKeybinding")), 1)) : _ctx.existingKeybindingOnCombo ? (openBlock(), createElementBlock("p", _hoisted_7$1, toDisplayString(_ctx.$t("g.keybindingAlreadyExists")) + " " + toDisplayString(_ctx.existingKeybindingOnCombo.commandId), 1)) : createCommentVNode("", true)])
			]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/keybinding/EditKeybindingFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = { class: "flex w-full justify-end gap-2 px-4 py-2" };
//#endregion
//#region src/components/dialog/content/setting/keybinding/EditKeybindingFooter.vue
var EditKeybindingFooter_default = /* @__PURE__ */ defineComponent({
	__name: "EditKeybindingFooter",
	props: {
		dialogState: {},
		existingKeybindingOnCombo: {}
	},
	setup(__props) {
		const keybindingStore = useKeybindingStore();
		const keybindingService = useKeybindingService();
		const dialogStore = useDialogStore();
		function handleCancel() {
			dialogStore.closeDialog({ key: DIALOG_KEY });
		}
		async function handleSave() {
			const combo = __props.dialogState.newCombo;
			const commandId = __props.dialogState.commandId;
			if (!combo || !commandId) return;
			dialogStore.closeDialog({ key: DIALOG_KEY });
			if (__props.dialogState.mode === "add") keybindingStore.addUserKeybinding(new KeybindingImpl({
				commandId,
				combo
			}));
			else if (__props.dialogState.existingBinding) keybindingStore.updateSpecificKeybinding(__props.dialogState.existingBinding, new KeybindingImpl({
				commandId,
				combo
			}));
			else keybindingStore.updateKeybindingOnCommand(new KeybindingImpl({
				commandId,
				combo
			}));
			await keybindingService.persistUserKeybindings();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$6, [createVNode(Button_default, {
				variant: "textonly",
				size: "md",
				class: "text-muted-foreground",
				onClick: handleCancel
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
				_: 1
			}), createVNode(Button_default, {
				variant: _ctx.existingKeybindingOnCombo ? "destructive" : _ctx.dialogState.newCombo?.isBrowserReserved ? "secondary" : "primary",
				size: "md",
				disabled: !_ctx.dialogState.newCombo,
				class: "px-4 py-2",
				onClick: handleSave
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.existingKeybindingOnCombo ? _ctx.$t("g.overwrite") : _ctx.dialogState.newCombo?.isBrowserReserved ? _ctx.$t("g.saveAnyway") : _ctx.$t("g.save")), 1)]),
				_: 1
			}, 8, ["variant", "disabled"])]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/keybinding/EditKeybindingHeader.vue
var _sfc_main = {};
var _hoisted_1$5 = { class: "flex w-full items-center gap-2 p-4" };
var _hoisted_2$4 = { class: "m-0 font-semibold" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$5, [createBaseVNode("p", _hoisted_2$4, toDisplayString(_ctx.$t("g.modifyKeybinding")), 1)]);
}
var EditKeybindingHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/composables/useEditKeybindingDialog.ts
var DIALOG_KEY = "edit-keybinding";
function useEditKeybindingDialog() {
	const { showSmallLayoutDialog } = useDialogService();
	const keybindingStore = useKeybindingStore();
	function show(options) {
		const dialogState = reactive({
			commandId: options.commandId,
			newCombo: options.currentCombo,
			currentCombo: options.currentCombo,
			mode: options.mode ?? "edit",
			existingBinding: options.existingBinding ?? null
		});
		const existingKeybindingOnCombo = computed(() => {
			if (!dialogState.newCombo) return null;
			if (dialogState.currentCombo?.equals(dialogState.newCombo)) return null;
			return keybindingStore.getKeybinding(dialogState.newCombo);
		});
		function onUpdateCombo(combo) {
			dialogState.newCombo = combo;
		}
		showSmallLayoutDialog({
			key: DIALOG_KEY,
			headerComponent: EditKeybindingHeader_default,
			footerComponent: EditKeybindingFooter_default,
			component: EditKeybindingContent_default,
			props: {
				dialogState,
				onUpdateCombo,
				commandLabel: options.commandLabel,
				existingKeybindingOnCombo
			},
			headerProps: {},
			footerProps: {
				dialogState,
				existingKeybindingOnCombo
			}
		});
	}
	return { show };
}
//#endregion
//#region src/components/dialog/content/setting/keybinding/UnsavedChangesContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "flex w-full max-w-[420px] flex-col border-t border-border-default" };
var _hoisted_2$3 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_3$2 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_4$1 = { class: "flex justify-end gap-2" };
//#endregion
//#region src/components/dialog/content/setting/keybinding/UnsavedChangesContent.vue
var UnsavedChangesContent_default = /* @__PURE__ */ defineComponent({
	__name: "UnsavedChangesContent",
	props: { onResult: { type: Function } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$3, [createBaseVNode("p", _hoisted_3$2, toDisplayString(_ctx.$t("g.keybindingPresets.unsavedChangesMessage")), 1), createBaseVNode("div", _hoisted_4$1, [
				createVNode(Button_default, {
					variant: "textonly",
					class: "text-muted-foreground",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onResult(null))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}),
				createVNode(Button_default, {
					variant: "secondary",
					class: "bg-secondary-background",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onResult(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.keybindingPresets.discardAndSwitch")), 1)]),
					_: 1
				}),
				createVNode(Button_default, {
					variant: "secondary",
					class: "bg-base-foreground text-base-background",
					onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onResult(true))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.keybindingPresets.saveAndSwitch")), 1)]),
					_: 1
				})
			])])]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/keybinding/UnsavedChangesHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "flex w-full items-center p-4" };
var _hoisted_2$2 = { class: "m-0 text-sm font-medium" };
//#endregion
//#region src/components/dialog/content/setting/keybinding/UnsavedChangesHeader.vue
var UnsavedChangesHeader_default = /* @__PURE__ */ defineComponent({
	__name: "UnsavedChangesHeader",
	props: { presetName: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("p", _hoisted_2$2, toDisplayString(_ctx.$t("g.keybindingPresets.unsavedChangesTo", { name: _ctx.presetName })), 1)]);
		};
	}
});
//#endregion
//#region src/platform/keybindings/presetService.ts
var PRESETS_DIR = "keybindings";
function presetFilePath(name) {
	const trimmed = name.trim();
	if (!trimmed || trimmed === "default" || trimmed.toLowerCase().endsWith(".json") || trimmed.includes("/") || trimmed.includes("\\") || trimmed.includes("..") || trimmed.startsWith(".")) throw new Error(t("g.keybindingPresets.invalidPresetName"));
	return `${PRESETS_DIR}/${trimmed}.json`;
}
function buildPresetFromStore(name, keybindingStore) {
	return {
		name,
		newBindings: Object.values(toRaw(keybindingStore.getUserKeybindings())),
		unsetBindings: Object.values(toRaw(keybindingStore.getUserUnsetKeybindings()))
	};
}
function useKeybindingPresetService() {
	const keybindingStore = useKeybindingStore();
	const keybindingService = useKeybindingService();
	const settingStore = useSettingStore();
	const dialogService = useDialogService();
	const dialogStore = useDialogStore();
	const toast = useToastStore();
	const { wrapWithErrorHandlingAsync } = useErrorHandling();
	async function switchToDefaultPreset({ resetBindings = true } = {}) {
		if (resetBindings) keybindingStore.resetAllKeybindings();
		keybindingStore.currentPresetName = "default";
		keybindingStore.savedPresetData = null;
		await keybindingService.persistUserKeybindings();
		await settingStore.set("Comfy.Keybinding.CurrentPreset", "default");
	}
	const UNSAVED_DIALOG_KEY = "unsaved-keybinding-changes";
	function showUnsavedChangesDialog(presetName) {
		return new Promise((resolve) => {
			dialogService.showSmallLayoutDialog({
				key: UNSAVED_DIALOG_KEY,
				headerComponent: UnsavedChangesHeader_default,
				headerProps: { presetName },
				component: UnsavedChangesContent_default,
				props: { onResult: (result) => {
					resolve(result);
					dialogStore.closeDialog({ key: UNSAVED_DIALOG_KEY });
				} },
				dialogComponentProps: { onClose: () => resolve(null) }
			});
		});
	}
	async function listPresets() {
		return (await api.listUserDataFullInfo(PRESETS_DIR)).map((f) => f.path.replace(/\.json$/, "")).filter((name) => name.length > 0);
	}
	async function loadPreset(name) {
		const resp = await api.getUserData(presetFilePath(name));
		if (!resp.ok) throw new Error(t("g.keybindingPresets.loadPresetFailed", { name }));
		const data = await resp.json();
		const result = zKeybindingPreset.safeParse(data);
		if (!result.success) throw new Error(t("g.keybindingPresets.invalidPresetFile") + ": " + fromZodError(result.error).message);
		return {
			...result.data,
			name
		};
	}
	function applyPreset(preset) {
		keybindingStore.resetAllKeybindings();
		for (const binding of preset.unsetBindings) keybindingStore.unsetKeybinding(new KeybindingImpl(binding));
		for (const binding of preset.newBindings) keybindingStore.addUserKeybinding(new KeybindingImpl(binding));
		keybindingStore.savedPresetData = buildPresetFromStore(preset.name, keybindingStore);
		keybindingStore.currentPresetName = preset.name;
	}
	async function savePreset(name) {
		const preset = buildPresetFromStore(name, keybindingStore);
		await api.storeUserData(presetFilePath(name), JSON.stringify(preset), {
			overwrite: true,
			stringify: false
		});
		keybindingStore.savedPresetData = preset;
		keybindingStore.currentPresetName = name;
		await keybindingService.persistUserKeybindings();
		await settingStore.set("Comfy.Keybinding.CurrentPreset", name);
		toast.add({
			severity: "success",
			summary: t("g.keybindingPresets.presetSaved", { name }),
			life: 3e3
		});
	}
	async function deletePreset(name) {
		if (!await dialogService.confirm({
			title: t("g.keybindingPresets.deletePresetTitle"),
			message: t("g.keybindingPresets.deletePresetWarning"),
			type: "delete"
		})) return;
		if (!(await api.deleteUserData(presetFilePath(name))).ok) throw new Error(t("g.keybindingPresets.deletePresetFailed", { name }));
		if (keybindingStore.currentPresetName === name) await switchToDefaultPreset();
		toast.add({
			severity: "info",
			summary: t("g.keybindingPresets.presetDeleted", { name }),
			life: 3e3
		});
	}
	function exportPreset() {
		const preset = buildPresetFromStore(keybindingStore.currentPresetName, keybindingStore);
		downloadBlob(`${preset.name}.json`, new Blob([JSON.stringify(preset, null, 2)], { type: "application/json" }));
	}
	async function importPreset() {
		const text = await (await uploadFile("application/json")).text();
		let data;
		try {
			data = JSON.parse(text);
		} catch {
			throw new Error(t("g.keybindingPresets.invalidPresetFile"));
		}
		const result = zKeybindingPreset.safeParse(data);
		if (!result.success) throw new Error(t("g.keybindingPresets.invalidPresetFile") + ": " + fromZodError(result.error).message);
		const preset = result.data;
		await api.storeUserData(presetFilePath(preset.name), JSON.stringify(preset), {
			overwrite: true,
			stringify: false
		});
		await switchPreset(preset.name);
		toast.add({
			severity: "success",
			summary: t("g.keybindingPresets.presetImported"),
			life: 3e3
		});
	}
	async function promptAndSaveNewPreset() {
		const name = await dialogService.prompt({
			title: t("g.keybindingPresets.saveAsNewPreset"),
			message: t("g.keybindingPresets.presetNamePrompt"),
			defaultValue: ""
		});
		if (!name) return false;
		const trimmedName = name.trim();
		if (!trimmedName) return false;
		if ((await listPresets()).includes(trimmedName)) {
			if (!await dialogService.confirm({
				title: t("g.keybindingPresets.overwritePresetTitle"),
				message: t("g.keybindingPresets.overwritePresetMessage", { name: trimmedName }),
				type: "overwrite"
			})) return false;
		}
		await savePreset(trimmedName);
		return true;
	}
	async function switchPreset(targetName) {
		if (keybindingStore.isCurrentPresetModified) {
			const result = await showUnsavedChangesDialog(keybindingStore.currentPresetName === "default" ? t("g.keybindingPresets.default") : keybindingStore.currentPresetName);
			if (result === null) return;
			if (result) {
				if (keybindingStore.currentPresetName !== "default") await savePreset(keybindingStore.currentPresetName);
				else if (!await promptAndSaveNewPreset()) return;
			}
		}
		if (targetName === "default") {
			await switchToDefaultPreset();
			return;
		}
		applyPreset(await loadPreset(targetName));
		await keybindingService.persistUserKeybindings();
		await settingStore.set("Comfy.Keybinding.CurrentPreset", targetName);
	}
	return {
		listPresets: wrapWithErrorHandlingAsync(listPresets),
		loadPreset: wrapWithErrorHandlingAsync(loadPreset),
		savePreset: wrapWithErrorHandlingAsync(savePreset),
		deletePreset: wrapWithErrorHandlingAsync(deletePreset),
		exportPreset,
		importPreset: wrapWithErrorHandlingAsync(importPreset),
		switchPreset: wrapWithErrorHandlingAsync(switchPreset),
		switchToDefaultPreset: wrapWithErrorHandlingAsync(switchToDefaultPreset),
		promptAndSaveNewPreset: wrapWithErrorHandlingAsync(promptAndSaveNewPreset),
		applyPreset
	};
}
//#endregion
//#region src/components/dialog/content/setting/keybinding/KeybindingPresetToolbar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex items-center gap-2" };
var _hoisted_2$1 = { class: "max-w-60" };
var _hoisted_3$1 = { class: "truncate" };
//#endregion
//#region src/components/dialog/content/setting/keybinding/KeybindingPresetToolbar.vue
var KeybindingPresetToolbar_default = /* @__PURE__ */ defineComponent({
	__name: "KeybindingPresetToolbar",
	props: { presetNames: {} },
	emits: ["presets-changed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		const keybindingStore = useKeybindingStore();
		const presetService = useKeybindingPresetService();
		const selectedPreset = ref(keybindingStore.currentPresetName);
		const displayLabel = computed(() => {
			const name = selectedPreset.value === "default" ? t("g.keybindingPresets.default") : selectedPreset.value;
			return keybindingStore.isCurrentPresetModified ? `${name} *` : name;
		});
		watch(selectedPreset, async (newValue) => {
			if (newValue !== keybindingStore.currentPresetName) {
				await presetService.switchPreset(newValue);
				selectedPreset.value = keybindingStore.currentPresetName;
				emit("presets-changed");
			}
		});
		watch(() => keybindingStore.currentPresetName, (name) => {
			selectedPreset.value = name;
		});
		const showSaveButton = computed(() => keybindingStore.currentPresetName !== "default" && keybindingStore.isCurrentPresetModified);
		async function handleSavePreset() {
			await presetService.savePreset(keybindingStore.currentPresetName);
		}
		async function handleImportFromDropdown() {
			await presetService.importPreset();
			emit("presets-changed");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [showSaveButton.value ? (openBlock(), createBlock(Button_default, {
				key: 0,
				size: "lg",
				onClick: handleSavePreset
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.keybindingPresets.saveChanges")), 1)]),
				_: 1
			})) : createCommentVNode("", true), createVNode(Select_default, {
				modelValue: selectedPreset.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedPreset.value = $event)
			}, {
				default: withCtx(() => [createVNode(SelectTrigger_default, { class: "w-64" }, {
					default: withCtx(() => [createVNode(SelectValue_default, { placeholder: _ctx.$t("g.keybindingPresets.default") }, {
						default: withCtx(() => [createTextVNode(toDisplayString(displayLabel.value), 1)]),
						_: 1
					}, 8, ["placeholder"])]),
					_: 1
				}), createVNode(SelectContent_default, { class: "max-w-64 min-w-0 **:[[role=listbox]]:gap-1" }, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_2$1, [
						createVNode(SelectItem_default, {
							value: "default",
							class: "max-w-60 p-2 data-[state=checked]:bg-transparent"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.keybindingPresets.default")), 1)]),
							_: 1
						}),
						(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presetNames, (name) => {
							return openBlock(), createBlock(SelectItem_default, {
								key: name,
								value: name,
								class: "max-w-60 p-2 data-[state=checked]:bg-transparent"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(name), 1)]),
								_: 2
							}, 1032, ["value"]);
						}), 128)),
						_cache[2] || (_cache[2] = createBaseVNode("hr", { class: "h-px max-w-60 border border-border-default" }, null, -1)),
						createBaseVNode("button", {
							class: "relative flex w-full max-w-60 cursor-pointer items-center justify-between gap-3 rounded-sm border-none bg-transparent p-2 text-sm outline-none select-none hover:bg-secondary-background-hover focus:bg-secondary-background-hover",
							onClick: withModifiers(handleImportFromDropdown, ["stop"])
						}, [createBaseVNode("span", _hoisted_3$1, toDisplayString(_ctx.$t("g.keybindingPresets.importKeybindingPreset")), 1), _cache[1] || (_cache[1] = createBaseVNode("i", {
							class: "icon-[lucide--file-input] shrink-0 text-base-foreground",
							"aria-hidden": "true"
						}, null, -1))])
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue"])]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/keybinding/KeyComboDisplay.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "px-2"
};
//#endregion
//#region src/components/dialog/content/setting/keybinding/KeyComboDisplay.vue
var KeyComboDisplay_default = /* @__PURE__ */ defineComponent({
	__name: "KeyComboDisplay",
	props: {
		keyCombo: {},
		isModified: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const keySequences = computed(() => __props.keyCombo.getKeySequences());
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(keySequences.value, (sequence, index) => {
				return openBlock(), createElementBlock(Fragment, { key: index }, [createVNode(unref(script), {
					class: "bg-interface-menu-keybind-surface-default text-base-foreground",
					severity: _ctx.isModified ? "info" : "secondary"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sequence), 1)]),
					_: 2
				}, 1032, ["severity"]), index < keySequences.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1$1, "+")) : createCommentVNode("", true)], 64);
			}), 128))]);
		};
	}
});
//#endregion
//#region src/components/dialog/content/setting/KeybindingPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "keybinding-panel flex flex-col gap-2" };
var _hoisted_2 = { class: "flex items-center gap-2" };
var _hoisted_3 = ["title"];
var _hoisted_4 = {
	key: 1,
	class: "icon-[lucide--triangle-alert] shrink-0 text-warning-background"
};
var _hoisted_5 = {
	key: 0,
	class: "flex items-center gap-1"
};
var _hoisted_6 = {
	key: 0,
	class: "text-muted-foreground"
};
var _hoisted_7 = {
	key: 0,
	class: "rounded-sm px-1.5 py-0.5 text-xs text-muted-foreground"
};
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { class: "overflow-hidden text-ellipsis" };
var _hoisted_10 = { class: "actions flex flex-row justify-end" };
var _hoisted_11 = { class: "pl-4" };
var _hoisted_12 = { class: "flex items-center gap-4" };
var _hoisted_13 = { class: "text-muted-foreground" };
var _hoisted_14 = { class: "flex flex-row" };
//#endregion
//#region src/components/dialog/content/setting/KeybindingPanel.vue
var KeybindingPanel_default = /* @__PURE__ */ defineComponent({
	__name: "KeybindingPanel",
	setup(__props) {
		const filters = ref({ global: {
			value: "",
			matchMode: FilterMatchMode.CONTAINS
		} });
		const keybindingStore = useKeybindingStore();
		const keybindingService = useKeybindingService();
		const presetService = useKeybindingPresetService();
		const settingStore = useSettingStore();
		const commandStore = useCommandStore();
		const dialogStore = useDialogStore();
		const { t } = useI18n();
		const presetNames = ref([]);
		async function refreshPresetList() {
			presetNames.value = await presetService.listPresets() ?? [];
		}
		async function initPresets() {
			await refreshPresetList();
			const currentName = settingStore.get("Comfy.Keybinding.CurrentPreset");
			if (currentName !== "default") {
				const preset = await presetService.loadPreset(currentName);
				if (preset) {
					keybindingStore.savedPresetData = preset;
					keybindingStore.currentPresetName = currentName;
				} else await presetService.switchToDefaultPreset();
			}
		}
		onMounted(() => initPresets());
		async function saveAsNewPreset() {
			await presetService.promptAndSaveNewPreset();
			refreshPresetList();
		}
		async function handleDeletePreset() {
			await presetService.deletePreset(keybindingStore.currentPresetName);
			refreshPresetList();
		}
		async function handleImportPreset() {
			await presetService.importPreset();
			refreshPresetList();
		}
		const showSaveAsNew = computed(() => keybindingStore.currentPresetName !== "default" || keybindingStore.isCurrentPresetModified);
		const menuEntries = computed(() => [
			...showSaveAsNew.value ? [{
				label: t("g.keybindingPresets.saveAsNewPreset"),
				icon: "icon-[lucide--save]",
				command: saveAsNewPreset
			}] : [],
			{
				label: t("g.keybindingPresets.resetToDefault"),
				icon: "icon-[lucide--rotate-cw]",
				command: () => presetService.switchPreset("default").then(() => refreshPresetList())
			},
			{
				label: t("g.keybindingPresets.deletePreset"),
				icon: "icon-[lucide--trash-2]",
				disabled: keybindingStore.currentPresetName === "default",
				command: handleDeletePreset
			},
			{
				label: t("g.keybindingPresets.importPreset"),
				icon: "icon-[lucide--file-input]",
				command: handleImportPreset
			},
			{
				label: t("g.keybindingPresets.exportPreset"),
				icon: "icon-[lucide--file-output]",
				command: () => presetService.exportPreset()
			}
		]);
		const commandsData = computed(() => {
			return Object.values(commandStore.commands).map((command) => ({
				id: command.id,
				label: t(`commands.${normalizeI18nKey(command.id)}.label`, command.label ?? ""),
				keybindings: keybindingStore.getKeybindingsByCommandId(command.id),
				source: command.source,
				isModified: keybindingStore.isCommandKeybindingModified(command.id)
			}));
		});
		const expandedCommandIds = ref(/* @__PURE__ */ new Set());
		const expandedRows = computed({
			get() {
				const result = {};
				for (const id of expandedCommandIds.value) result[id] = true;
				return result;
			},
			set(value) {
				expandedCommandIds.value = new Set(Object.keys(value));
			}
		});
		function toggleExpanded(commandId) {
			if (expandedCommandIds.value.has(commandId)) expandedCommandIds.value.delete(commandId);
			else expandedCommandIds.value.add(commandId);
		}
		watch(filters, () => expandedCommandIds.value.clear(), { deep: true });
		const selectedCommandData = ref(null);
		const editKeybindingDialog = useEditKeybindingDialog();
		const contextMenuTarget = ref(null);
		function editKeybinding(commandData, binding) {
			editKeybindingDialog.show({
				commandId: commandData.id,
				commandLabel: commandData.label,
				currentCombo: binding.combo,
				mode: "edit",
				existingBinding: binding
			});
		}
		function addKeybinding(commandData) {
			editKeybindingDialog.show({
				commandId: commandData.id,
				commandLabel: commandData.label,
				currentCombo: null,
				mode: "add"
			});
		}
		function handleRowClick(event) {
			if (event.originalEvent.target.closest(".actions")) return;
			const commandData = event.data;
			if (commandData.keybindings.length >= 2 || expandedCommandIds.value.has(commandData.id)) toggleExpanded(commandData.id);
		}
		function handleRowDblClick(commandData) {
			if (commandData.keybindings.length === 0) addKeybinding(commandData);
			else if (commandData.keybindings.length === 1) editKeybinding(commandData, commandData.keybindings[0]);
		}
		function handleRowContextMenu(event) {
			contextMenuTarget.value = event.data;
		}
		function clearContextMenuTarget() {
			contextMenuTarget.value = null;
		}
		async function removeSingleKeybinding(commandData, index) {
			const binding = commandData.keybindings[index];
			if (binding) {
				keybindingStore.unsetKeybinding(binding);
				if (commandData.keybindings.length <= 2) expandedCommandIds.value.delete(commandData.id);
				await keybindingService.persistUserKeybindings();
			}
		}
		function handleRemoveAllKeybindings(commandData) {
			const dialog = showConfirmDialog({
				headerProps: { title: t("g.removeAllKeybindingsTitle") },
				props: { promptText: t("g.removeAllKeybindingsMessage") },
				footerProps: {
					confirmText: t("g.removeAll"),
					confirmVariant: "destructive",
					onCancel: () => dialogStore.closeDialog(dialog),
					onConfirm: async () => {
						keybindingStore.removeAllKeybindingsForCommand(commandData.id);
						await keybindingService.persistUserKeybindings();
						dialogStore.closeDialog(dialog);
					}
				}
			});
		}
		function handleRemoveKeybindingFromMenu(commandData) {
			if (commandData.keybindings.length >= 2) handleRemoveAllKeybindings(commandData);
			else removeSingleKeybinding(commandData, 0);
		}
		function ctxChangeKeybinding() {
			if (!contextMenuTarget.value) return;
			const target = contextMenuTarget.value;
			if (target.keybindings.length === 1) editKeybinding(target, target.keybindings[0]);
			else if (target.keybindings.length >= 2) {
				if (!expandedCommandIds.value.has(target.id)) toggleExpanded(target.id);
			}
		}
		function ctxAddKeybinding() {
			if (contextMenuTarget.value) addKeybinding(contextMenuTarget.value);
		}
		function ctxResetToDefault() {
			if (contextMenuTarget.value) resetKeybinding(contextMenuTarget.value);
		}
		function ctxRemoveKeybinding() {
			if (contextMenuTarget.value && contextMenuTarget.value.keybindings.length > 0) handleRemoveKeybindingFromMenu(contextMenuTarget.value);
		}
		async function resetKeybinding(commandData) {
			if (keybindingStore.resetKeybindingForCommand(commandData.id)) {
				expandedCommandIds.value.delete(commandData.id);
				await keybindingService.persistUserKeybindings();
			} else console.warn(`No changes made when resetting keybinding for command: ${commandData.id}`);
		}
		const toast = useToast();
		function resetAllKeybindings() {
			const dialog = showConfirmDialog({
				headerProps: { title: t("g.resetAllKeybindingsTitle") },
				props: { promptText: t("g.resetAllKeybindingsMessage") },
				footerProps: {
					confirmText: t("g.resetAll"),
					confirmVariant: "destructive",
					onCancel: () => {
						dialogStore.closeDialog(dialog);
					},
					onConfirm: async () => {
						keybindingStore.resetAllKeybindings();
						await keybindingService.persistUserKeybindings();
						dialogStore.closeDialog(dialog);
						toast.add({
							severity: "info",
							summary: t("g.info"),
							detail: t("g.allKeybindingsReset"),
							life: 3e3
						});
					}
				}
			});
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				(openBlock(), createBlock(Teleport, {
					defer: "",
					to: "#keybinding-panel-header"
				}, [createVNode(SearchInput_default, {
					modelValue: filters.value["global"].value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value["global"].value = $event),
					class: "max-w-96",
					size: "lg",
					placeholder: _ctx.$t("g.searchPlaceholder", { subject: _ctx.$t("g.keybindings") })
				}, null, 8, ["modelValue", "placeholder"])])),
				(openBlock(), createBlock(Teleport, {
					defer: "",
					to: "#keybinding-panel-actions"
				}, [createBaseVNode("div", _hoisted_2, [createVNode(KeybindingPresetToolbar_default, {
					"preset-names": presetNames.value,
					onPresetsChanged: refreshPresetList
				}, null, 8, ["preset-names"]), createVNode(DropdownMenu_default, {
					entries: menuEntries.value,
					icon: "icon-[lucide--ellipsis]",
					"item-class": "text-sm gap-2",
					"button-size": "unset",
					"button-class": "size-10"
				}, {
					button: withCtx(() => [createVNode(Button_default, {
						size: "unset",
						class: "size-10",
						"data-testid": "keybinding-preset-menu"
					}, {
						default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("i", { class: "icon-[lucide--ellipsis]" }, null, -1)])),
						_: 1
					})]),
					_: 1
				}, 8, ["entries"])])])),
				createVNode(unref(ContextMenuRoot_default), null, {
					default: withCtx(() => [createVNode(unref(ContextMenuTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("div", { onContextmenuCapture: clearContextMenuTarget }, [createVNode(unref(script$1), {
							selection: selectedCommandData.value,
							"onUpdate:selection": _cache[1] || (_cache[1] = ($event) => selectedCommandData.value = $event),
							"expanded-rows": expandedRows.value,
							"onUpdate:expandedRows": _cache[2] || (_cache[2] = ($event) => expandedRows.value = $event),
							value: commandsData.value,
							"data-key": "id",
							"global-filter-fields": ["id", "label"],
							filters: filters.value,
							paginator: true,
							rows: 50,
							"rows-per-page-options": [
								25,
								50,
								100
							],
							"selection-mode": "single",
							"context-menu": "",
							"striped-rows": "",
							pt: { header: "px-0" },
							onRowClick: _cache[3] || (_cache[3] = ($event) => handleRowClick($event)),
							onRowDblclick: _cache[4] || (_cache[4] = ($event) => handleRowDblClick($event.data)),
							onRowContextmenu: _cache[5] || (_cache[5] = ($event) => handleRowContextMenu($event))
						}, {
							expansion: withCtx((slotProps) => [createBaseVNode("div", _hoisted_11, [(openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.data.keybindings, (binding, idx) => {
								return openBlock(), createElementBlock("div", {
									key: binding.combo.serialize(),
									class: "flex items-center justify-between border-b border-border-subtle py-1.5 last:border-b-0"
								}, [createBaseVNode("div", _hoisted_12, [createBaseVNode("span", _hoisted_13, toDisplayString(slotProps.data.label), 1), createVNode(KeyComboDisplay_default, {
									"key-combo": binding.combo,
									"is-modified": slotProps.data.isModified
								}, null, 8, ["key-combo", "is-modified"])]), createBaseVNode("div", _hoisted_14, [withDirectives((openBlock(), createBlock(Button_default, {
									variant: "textonly",
									size: "icon",
									"aria-label": _ctx.$t("g.edit"),
									onClick: ($event) => editKeybinding(slotProps.data, binding)
								}, {
									default: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("i", { class: "icon-[lucide--pencil]" }, null, -1)])),
									_: 2
								}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, _ctx.$t("g.edit")]]), withDirectives((openBlock(), createBlock(Button_default, {
									variant: "textonly",
									size: "icon",
									"aria-label": _ctx.$t("g.removeKeybinding"),
									onClick: ($event) => removeSingleKeybinding(slotProps.data, idx)
								}, {
									default: withCtx(() => _cache[12] || (_cache[12] = [createBaseVNode("i", { class: "icon-[lucide--trash-2]" }, null, -1)])),
									_: 2
								}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, _ctx.$t("g.removeKeybinding")]])])]);
							}), 128))])]),
							default: withCtx(() => [
								createVNode(unref(script$2), {
									field: "id",
									header: _ctx.$t("g.command"),
									sortable: "",
									class: "max-w-64 2xl:max-w-full",
									pt: { bodyCell: "p-1 min-h-8" }
								}, {
									body: withCtx((slotProps) => [createBaseVNode("div", {
										class: normalizeClass(["flex items-center gap-1 truncate", slotProps.data.keybindings.length < 2 && "pl-5"]),
										title: slotProps.data.id
									}, [
										slotProps.data.keybindings.length >= 2 ? (openBlock(), createElementBlock("i", {
											key: 0,
											class: normalizeClass(["icon-[lucide--chevron-right] size-4 shrink-0 text-muted-foreground transition-transform", expandedCommandIds.value.has(slotProps.data.id) && "rotate-90"])
										}, null, 2)) : createCommentVNode("", true),
										slotProps.data.keybindings.some((b) => b.combo.isBrowserReserved) ? withDirectives((openBlock(), createElementBlock("i", _hoisted_4, null, 512)), [[_directive_tooltip, _ctx.$t("g.browserReservedKeybindingTooltip")]]) : createCommentVNode("", true),
										createTextVNode(" " + toDisplayString(slotProps.data.label), 1)
									], 10, _hoisted_3)]),
									_: 1
								}, 8, ["header"]),
								createVNode(unref(script$2), {
									field: "keybindings",
									header: _ctx.$t("g.keybinding"),
									pt: { bodyCell: "p-1 min-h-8" }
								}, {
									body: withCtx((slotProps) => [slotProps.data.keybindings.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.data.keybindings.slice(0, 2), (binding, idx) => {
										return openBlock(), createElementBlock(Fragment, { key: binding.combo.serialize() }, [idx > 0 ? (openBlock(), createElementBlock("span", _hoisted_6, ",")) : createCommentVNode("", true), createVNode(KeyComboDisplay_default, {
											"key-combo": binding.combo,
											"is-modified": slotProps.data.isModified
										}, null, 8, ["key-combo", "is-modified"])], 64);
									}), 128)), slotProps.data.keybindings.length > 2 ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(_ctx.$t("g.nMoreKeybindings", { count: slotProps.data.keybindings.length - 2 })), 1)) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("span", _hoisted_8, "-"))]),
									_: 1
								}, 8, ["header"]),
								createVNode(unref(script$2), {
									field: "source",
									header: _ctx.$t("g.source"),
									pt: { bodyCell: "p-1 min-h-8" }
								}, {
									body: withCtx((slotProps) => [createBaseVNode("span", _hoisted_9, toDisplayString(slotProps.data.source || "-"), 1)]),
									_: 1
								}, 8, ["header"]),
								createVNode(unref(script$2), {
									field: "actions",
									header: "",
									pt: { bodyCell: "p-1 min-h-8" }
								}, {
									body: withCtx((slotProps) => [createBaseVNode("div", _hoisted_10, [
										slotProps.data.keybindings.length === 1 ? withDirectives((openBlock(), createBlock(Button_default, {
											key: 0,
											variant: "textonly",
											size: "icon",
											"aria-label": _ctx.$t("g.edit"),
											onClick: ($event) => editKeybinding(slotProps.data, slotProps.data.keybindings[0])
										}, {
											default: withCtx(() => _cache[7] || (_cache[7] = [createBaseVNode("i", { class: "icon-[lucide--pencil]" }, null, -1)])),
											_: 2
										}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, _ctx.$t("g.edit")]]) : createCommentVNode("", true),
										withDirectives((openBlock(), createBlock(Button_default, {
											variant: "textonly",
											size: "icon",
											"aria-label": _ctx.$t("g.addNewKeybinding"),
											onClick: ($event) => addKeybinding(slotProps.data)
										}, {
											default: withCtx(() => _cache[8] || (_cache[8] = [createBaseVNode("i", { class: "icon-[lucide--plus]" }, null, -1)])),
											_: 2
										}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, _ctx.$t("g.addNewKeybinding")]]),
										withDirectives((openBlock(), createBlock(Button_default, {
											variant: "textonly",
											size: "icon",
											"aria-label": _ctx.$t("g.reset"),
											disabled: !slotProps.data.isModified,
											onClick: ($event) => resetKeybinding(slotProps.data)
										}, {
											default: withCtx(() => _cache[9] || (_cache[9] = [createBaseVNode("i", { class: "icon-[lucide--rotate-ccw]" }, null, -1)])),
											_: 2
										}, 1032, [
											"aria-label",
											"disabled",
											"onClick"
										])), [[_directive_tooltip, _ctx.$t("g.reset")]]),
										withDirectives((openBlock(), createBlock(Button_default, {
											variant: "textonly",
											size: "icon",
											"aria-label": _ctx.$t("g.delete"),
											disabled: slotProps.data.keybindings.length === 0,
											onClick: ($event) => handleRemoveKeybindingFromMenu(slotProps.data)
										}, {
											default: withCtx(() => _cache[10] || (_cache[10] = [createBaseVNode("i", { class: "icon-[lucide--trash-2]" }, null, -1)])),
											_: 2
										}, 1032, [
											"aria-label",
											"disabled",
											"onClick"
										])), [[_directive_tooltip, _ctx.$t("g.delete")]])
									])]),
									_: 1
								})
							]),
							_: 1
						}, 8, [
							"selection",
							"expanded-rows",
							"value",
							"filters"
						])], 32)]),
						_: 1
					}), createVNode(unref(ContextMenuPortal_default), null, {
						default: withCtx(() => [createVNode(unref(ContextMenuContent_default), { class: "z-1200 min-w-56 rounded-lg border border-border-subtle bg-base-background px-2 py-3 shadow-interface" }, {
							default: withCtx(() => [
								createVNode(unref(ContextMenuItem_default), {
									class: "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm text-text-primary outline-none select-none hover:bg-node-component-surface-hovered focus:bg-node-component-surface-hovered data-disabled:cursor-default data-disabled:opacity-50",
									disabled: !contextMenuTarget.value || contextMenuTarget.value.keybindings.length === 0,
									onSelect: ctxChangeKeybinding
								}, {
									default: withCtx(() => [_cache[13] || (_cache[13] = createBaseVNode("i", { class: "icon-[lucide--pencil] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.changeKeybinding")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								createVNode(unref(ContextMenuItem_default), {
									class: "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm text-text-primary outline-none select-none hover:bg-node-component-surface-hovered focus:bg-node-component-surface-hovered",
									onSelect: ctxAddKeybinding
								}, {
									default: withCtx(() => [_cache[14] || (_cache[14] = createBaseVNode("i", { class: "icon-[lucide--plus] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.addNewKeybinding")), 1)]),
									_: 1
								}),
								createVNode(unref(ContextMenuSeparator_default), { class: "my-1 h-px bg-border-subtle" }),
								createVNode(unref(ContextMenuItem_default), {
									class: "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm text-text-primary outline-none select-none hover:bg-node-component-surface-hovered focus:bg-node-component-surface-hovered data-disabled:cursor-default data-disabled:opacity-50",
									disabled: !contextMenuTarget.value?.isModified,
									onSelect: ctxResetToDefault
								}, {
									default: withCtx(() => [_cache[15] || (_cache[15] = createBaseVNode("i", { class: "icon-[lucide--rotate-ccw] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.resetToDefault")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								createVNode(unref(ContextMenuItem_default), {
									class: "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm text-text-primary outline-none select-none hover:bg-node-component-surface-hovered focus:bg-node-component-surface-hovered data-disabled:cursor-default data-disabled:opacity-50",
									disabled: !contextMenuTarget.value || contextMenuTarget.value.keybindings.length === 0,
									onSelect: ctxRemoveKeybinding
								}, {
									default: withCtx(() => [_cache[16] || (_cache[16] = createBaseVNode("i", { class: "icon-[lucide--trash-2] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.removeKeybinding")), 1)]),
									_: 1
								}, 8, ["disabled"])
							]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}),
				withDirectives((openBlock(), createBlock(Button_default, {
					class: "mt-4 w-full",
					variant: "destructive-textonly",
					onClick: resetAllKeybindings
				}, {
					default: withCtx(() => [_cache[17] || (_cache[17] = createBaseVNode("i", { class: "icon-[lucide--rotate-ccw]" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.resetAll")), 1)]),
					_: 1
				})), [[_directive_tooltip, _ctx.$t("g.resetAllKeybindingsTooltip")]])
			]);
		};
	}
});
//#endregion
export { KeybindingPanel_default as default };

//# sourceMappingURL=KeybindingPanel-CpkfGYk2.js.map