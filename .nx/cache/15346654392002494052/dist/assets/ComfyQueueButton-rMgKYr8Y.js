import "./rolldown-runtime-DBfy44LZ.js";
import { Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, _ as vModelText, _t as withCtx, at as resolveDirective, b as withModifiers, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, nt as renderList, pt as watch, vt as withDirectives, y as withKeys } from "./vendor-vue-core-Ba0aGEmU.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { B as DropdownMenuItem_default, H as DropdownMenuRoot_default, R as DropdownMenuPortal_default, V as DropdownMenuContent_default, j as DropdownMenuTrigger_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Cn as isInstantRunningMode, H as useNodeDefStore, Ni as useCommandStore, Sn as isInstantMode, Tn as useQueueSettingsStore, Z as useWorkspaceStore, a as useSettingStore, s as app } from "./dialogService-DKx-VcuC.js";
import { n as ButtonGroup_default, t as graphHasMissingNodes } from "./graphHasMissingNodes-SVYS0Zxk.js";
//#endregion
//#region src/components/actionbar/TinyChevronIcon.vue
var TinyChevronIcon_default = /* @__PURE__ */ defineComponent({
	__name: "TinyChevronIcon",
	props: { rotateUp: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				class: normalizeClass(["h-[5px] min-h-[5px] w-[8px] min-w-[8px]", { "rotate-180": _ctx.rotateUp }]),
				xmlns: "http://www.w3.org/2000/svg",
				width: "8",
				height: "5",
				viewBox: "0 0 8 5",
				fill: "none",
				"aria-hidden": "true"
			}, _cache[0] || (_cache[0] = [createBaseVNode("path", {
				d: "M0.650391 0.649902L3.65039 3.6499L6.65039 0.649902",
				stroke: "currentColor",
				"stroke-width": "1.3",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]), 2);
		};
	}
});
//#endregion
//#region src/components/actionbar/BatchCountEdit.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var _hoisted_2 = { class: "flex h-full w-14 overflow-hidden rounded-l-lg bg-secondary-background" };
var _hoisted_3 = ["aria-label", "onKeydown"];
var _hoisted_4 = { class: "flex h-full w-6 flex-col" };
var minQueueCount = 1;
var inputClass = "h-full min-w-0 flex-1 border-none bg-secondary-background pl-1 pr-0 text-center text-sm font-normal tabular-nums text-base-foreground outline-none";
var stepButtonClass = "h-1/2 w-full rounded-none border-none p-0 text-muted-foreground hover:bg-secondary-background-hover disabled:cursor-not-allowed disabled:opacity-50";
var incrementButtonClass = "rounded-tr-none border-b border-border-subtle";
var decrementButtonClass = "rounded-br-none";
//#endregion
//#region src/components/actionbar/BatchCountEdit.vue
var BatchCountEdit_default = /* @__PURE__ */ defineComponent({
	__name: "BatchCountEdit",
	setup(__props) {
		const { t } = useI18n();
		const { batchCount } = storeToRefs(useQueueSettingsStore());
		const settingStore = useSettingStore();
		const maxQueueCount = computed(() => settingStore.get("Comfy.QueueButton.BatchCountLimit"));
		const batchCountInputRef = ref(null);
		const batchCountInput = ref(String(batchCount.value));
		const isEditing = ref(false);
		const isIncrementDisabled = computed(() => batchCount.value >= maxQueueCount.value);
		const isDecrementDisabled = computed(() => batchCount.value <= minQueueCount);
		watch(batchCount, (nextBatchCount) => {
			if (!isEditing.value) batchCountInput.value = String(nextBatchCount);
		});
		const clampBatchCount = (nextBatchCount) => Math.min(Math.max(nextBatchCount, minQueueCount), maxQueueCount.value);
		const setBatchCount = (nextBatchCount) => {
			batchCount.value = clampBatchCount(nextBatchCount);
			batchCountInput.value = String(batchCount.value);
		};
		const incrementBatchCount = () => {
			setBatchCount(batchCount.value * 2);
		};
		const decrementBatchCount = () => {
			setBatchCount(Math.floor(batchCount.value / 2));
		};
		const onInputFocus = () => {
			isEditing.value = true;
		};
		const onInput = (event) => {
			batchCountInput.value = event.target.value.replace(/[^0-9]/g, "");
		};
		const onInputBlur = () => {
			isEditing.value = false;
			const parsedInput = Number.parseInt(batchCountInput.value, 10);
			setBatchCount(Number.isNaN(parsedInput) ? minQueueCount : parsedInput);
		};
		const onInputEnter = () => {
			batchCountInputRef.value?.blur();
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createElementBlock("div", {
				class: "batch-count h-full",
				"aria-label": unref(t)("menu.batchCount")
			}, [createBaseVNode("div", _hoisted_2, [withDirectives(createBaseVNode("input", {
				ref_key: "batchCountInputRef",
				ref: batchCountInputRef,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => batchCountInput.value = $event),
				type: "text",
				inputmode: "numeric",
				"aria-label": unref(t)("menu.batchCount"),
				class: normalizeClass(inputClass),
				onFocus: onInputFocus,
				onInput,
				onBlur: onInputBlur,
				onKeydown: withKeys(withModifiers(onInputEnter, ["prevent"]), ["enter"])
			}, null, 40, _hoisted_3), [[vModelText, batchCountInput.value]]), createBaseVNode("div", _hoisted_4, [createVNode(Button_default, {
				variant: "secondary",
				size: "unset",
				"aria-label": unref(t)("g.increment"),
				class: normalizeClass(unref(cn)(stepButtonClass, incrementButtonClass)),
				disabled: isIncrementDisabled.value,
				onClick: incrementBatchCount
			}, {
				default: withCtx(() => [createVNode(TinyChevronIcon_default, { "rotate-up": "" })]),
				_: 1
			}, 8, [
				"aria-label",
				"class",
				"disabled"
			]), createVNode(Button_default, {
				variant: "secondary",
				size: "unset",
				"aria-label": unref(t)("g.decrement"),
				class: normalizeClass(unref(cn)(stepButtonClass, decrementButtonClass)),
				disabled: isDecrementDisabled.value,
				onClick: decrementBatchCount
			}, {
				default: withCtx(() => [createVNode(TinyChevronIcon_default)]),
				_: 1
			}, 8, [
				"aria-label",
				"class",
				"disabled"
			])])])], 8, _hoisted_1)), [[
				_directive_tooltip,
				{
					value: unref(t)("menu.batchCount"),
					showDelay: 600
				},
				void 0,
				{ bottom: true }
			]]);
		};
	}
});
//#endregion
//#region src/components/actionbar/ComfyRunButton/ComfyQueueButton.vue?vue&type=script&setup=true&lang.ts
var queueActionButtonClass = "h-full rounded-lg gap-1.5 px-4 font-light";
var queueMenuTriggerClass = "h-full w-6 rounded-l-none rounded-r-lg border-l border-border-subtle p-0 text-muted-foreground data-[state=open]:bg-secondary-background-hover";
var queueMenuItemButtonClass = "w-full justify-start font-normal";
//#endregion
//#region src/components/actionbar/ComfyRunButton/ComfyQueueButton.vue
var ComfyQueueButton_default = /* @__PURE__ */ defineComponent({
	__name: "ComfyQueueButton",
	setup(__props) {
		const workspaceStore = useWorkspaceStore();
		const { mode: queueMode, batchCount } = storeToRefs(useQueueSettingsStore());
		const nodeDefStore = useNodeDefStore();
		const hasMissingNodes = computed(() => graphHasMissingNodes(app.rootGraph, nodeDefStore.nodeDefsByName));
		const { t } = useI18n();
		const selectedQueueMode = computed(() => isInstantMode(queueMode.value) ? "instant-idle" : queueMode.value);
		const queueModeMenuItemLookup = computed(() => {
			const items = {
				disabled: {
					key: "disabled",
					label: t("menu.run"),
					tooltip: t("menu.disabledTooltip"),
					command: () => {
						queueMode.value = "disabled";
					}
				},
				change: {
					key: "change",
					label: `${t("menu.run")} (${t("menu.onChange")})`,
					tooltip: t("menu.onChangeTooltip"),
					command: () => {
						useTelemetry()?.trackUiButtonClicked({ button_id: "queue_mode_option_run_on_change_selected" });
						queueMode.value = "change";
					}
				}
			};
			if (!isCloud) items["instant-idle"] = {
				key: "instant-idle",
				label: `${t("menu.run")} (${t("menu.instant")})`,
				tooltip: t("menu.instantTooltip"),
				command: () => {
					useTelemetry()?.trackUiButtonClicked({ button_id: "queue_mode_option_run_instant_selected" });
					queueMode.value = "instant-idle";
				}
			};
			return items;
		});
		const activeQueueModeMenuItem = computed(() => {
			return queueModeMenuItemLookup.value[selectedQueueMode.value] || queueModeMenuItemLookup.value.disabled;
		});
		const queueModeMenuItems = computed(() => Object.values(queueModeMenuItemLookup.value));
		const isStopInstantAction = computed(() => isInstantRunningMode(queueMode.value));
		const queueButtonLabel = computed(() => isStopInstantAction.value ? t("menu.stopRunInstant") : String(activeQueueModeMenuItem.value?.label ?? ""));
		const queueButtonVariant = computed(() => isStopInstantAction.value ? "destructive" : "primary");
		const iconClass = computed(() => {
			if (isStopInstantAction.value) return "icon-[lucide--square]";
			if (hasMissingNodes.value) return "icon-[lucide--triangle-alert]";
			if (workspaceStore.shiftDown) return "icon-[lucide--list-start]";
			if (queueMode.value === "disabled") return "icon-[lucide--play]";
			if (isInstantMode(queueMode.value)) return "icon-[lucide--fast-forward]";
			if (queueMode.value === "change") return "icon-[lucide--step-forward]";
			return "icon-[lucide--play]";
		});
		const queueButtonTooltip = computed(() => {
			if (isStopInstantAction.value) return t("menu.stopRunInstantTooltip");
			if (hasMissingNodes.value) return t("menu.runWorkflowDisabled");
			if (workspaceStore.shiftDown) return t("menu.runWorkflowFront");
			return t("menu.runWorkflow");
		});
		const commandStore = useCommandStore();
		const queuePrompt = async (e) => {
			if (isStopInstantAction.value) {
				queueMode.value = "instant-idle";
				return;
			}
			const commandId = "shiftKey" in e && e.shiftKey ? "Comfy.QueuePromptFront" : "Comfy.QueuePrompt";
			if (isInstantMode(queueMode.value)) queueMode.value = "instant-running";
			if (batchCount.value > 1) useTelemetry()?.trackUiButtonClicked({ button_id: "queue_run_multiple_batches_submitted" });
			await commandStore.execute(commandId, { metadata: {
				subscribe_to_run: false,
				trigger_source: "button"
			} });
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createBlock(ButtonGroup_default, { class: "queue-button-group h-8 rounded-lg bg-secondary-background" }, {
				default: withCtx(() => [
					createVNode(BatchCountEdit_default),
					withDirectives((openBlock(), createBlock(Button_default, {
						variant: queueButtonVariant.value,
						size: "unset",
						class: normalizeClass(queueActionButtonClass),
						"data-testid": "queue-button",
						"data-variant": queueButtonVariant.value,
						onClick: queuePrompt
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(unref(cn)(iconClass.value, "size-4")) }, null, 2), createTextVNode(" " + toDisplayString(queueButtonLabel.value), 1)]),
						_: 1
					}, 8, ["variant", "data-variant"])), [[
						_directive_tooltip,
						{
							value: queueButtonTooltip.value,
							showDelay: 600
						},
						void 0,
						{ bottom: true }
					]]),
					createVNode(unref(DropdownMenuRoot_default), null, {
						default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [createVNode(Button_default, {
								variant: "secondary",
								size: "unset",
								class: normalizeClass(queueMenuTriggerClass),
								"aria-label": unref(t)("menu.run"),
								"data-testid": "queue-mode-menu-trigger"
							}, {
								default: withCtx(() => [createVNode(TinyChevronIcon_default)]),
								_: 1
							}, 8, ["aria-label"])]),
							_: 1
						}), createVNode(unref(DropdownMenuPortal_default), null, {
							default: withCtx(() => [createVNode(unref(DropdownMenuContent_default), {
								"side-offset": 4,
								class: "z-1000 min-w-44 rounded-lg border border-border-subtle bg-base-background p-1 shadow-interface"
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(queueModeMenuItems.value, (item) => {
									return openBlock(), createBlock(unref(DropdownMenuItem_default), {
										key: item.key,
										"as-child": "",
										onSelect: withModifiers(item.command, ["prevent"])
									}, {
										default: withCtx(() => [withDirectives((openBlock(), createBlock(Button_default, {
											variant: item.key === selectedQueueMode.value ? "primary" : "secondary",
											size: "sm",
											class: normalizeClass(queueMenuItemButtonClass)
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
											_: 2
										}, 1032, ["variant"])), [[_directive_tooltip, {
											value: item.tooltip,
											showDelay: 600
										}]])]),
										_: 2
									}, 1032, ["onSelect"]);
								}), 128))]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
});
//#endregion
export { ComfyQueueButton_default as t };

//# sourceMappingURL=ComfyQueueButton-rMgKYr8Y.js.map