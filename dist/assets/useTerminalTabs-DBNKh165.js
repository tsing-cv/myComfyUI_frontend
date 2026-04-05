import "./rolldown-runtime-DBfy44LZ.js";
import { tt as script } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, I as createVNode, O as createBaseVNode, Q as onUnmounted, R as defineComponent, Rt as unref, Ut as toDisplayString, Z as onMounted, _t as withCtx, at as resolveDirective, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, v as vShow, vt as withDirectives, wt as markRaw } from "./vendor-vue-core-Ba0aGEmU.js";
import { Z as debounce } from "./vendor-other-BMn-xt1e.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import { $ as until, _ as useElementHover, y as useEventListener } from "./vendor-vueuse--4MZqvDu.js";
import { r as api } from "./api-DZnjKRFN.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { j as useExecutionStore } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import "./downloadUtil-DifTE-W9.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { n as require_addon_fit, t as require_xterm } from "./vendor-xterm-r8rHkirJ.js";
//#region src/composables/bottomPanelTabs/useTerminal.ts
var import_addon_fit = require_addon_fit();
var import_xterm = require_xterm();
function useTerminal(element) {
	const fitAddon = new import_addon_fit.FitAddon();
	const terminal = markRaw(new import_xterm.Terminal({
		convertEol: true,
		theme: isDesktop ? { background: "#171717" } : void 0
	}));
	terminal.loadAddon(fitAddon);
	terminal.attachCustomKeyEventHandler((event) => {
		if (event.type === "keydown" && (event.ctrlKey || event.metaKey) && (event.key === "c" && terminal.hasSelection() || event.key === "v")) return false;
		return true;
	});
	onMounted(async () => {
		if (element.value) terminal.open(element.value);
	});
	onUnmounted(() => {
		terminal.dispose();
	});
	return {
		terminal,
		useAutoSize({ root, autoRows = true, autoCols = true, minCols = Number.NEGATIVE_INFINITY, minRows = Number.NEGATIVE_INFINITY, onResize }) {
			const ensureValidRows = (rows) => {
				if (rows == null || isNaN(rows)) return (root.value?.clientHeight ?? 80) / 20;
				return rows;
			};
			const ensureValidCols = (cols) => {
				if (cols == null || isNaN(cols)) return (root.value?.clientWidth ?? 80) / 8;
				return cols;
			};
			const resize = () => {
				const dims = fitAddon.proposeDimensions();
				terminal.resize(Math.max(autoCols ? ensureValidCols(dims?.cols) : terminal.cols, minCols), Math.max(autoRows ? ensureValidRows(dims?.rows) : terminal.rows, minRows));
				onResize?.();
			};
			const resizeObserver = new ResizeObserver(debounce(resize, 25));
			onMounted(async () => {
				if (root.value) {
					resizeObserver.observe(root.value);
					resize();
				}
			});
			onUnmounted(() => {
				resizeObserver.disconnect();
			});
			return { resize };
		}
	};
}
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "p-terminal size-full rounded-none p-2" };
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue
var BaseTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BaseTerminal",
	emits: ["created", "unmounted"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const terminalEl = ref();
		const rootEl = ref();
		const hasSelection = ref(false);
		const isHovered = useElementHover(rootEl);
		const terminalData = useTerminal(terminalEl);
		emit("created", terminalData, ref(rootEl));
		const { terminal } = terminalData;
		let selectionDisposable;
		const tooltipText = computed(() => {
			return hasSelection.value ? t("serverStart.copySelectionTooltip") : t("serverStart.copyAllTooltip");
		});
		const handleCopy = async () => {
			const existingSelection = terminal.getSelection();
			const shouldSelectAll = !existingSelection;
			if (shouldSelectAll) terminal.selectAll();
			const selectedText = shouldSelectAll ? terminal.getSelection() : existingSelection;
			if (selectedText) {
				await navigator.clipboard.writeText(selectedText);
				if (shouldSelectAll) terminal.clearSelection();
			}
		};
		const showContextMenu = (event) => {
			event.preventDefault();
			electronAPI()?.showContextMenu({ type: "text" });
		};
		if (isDesktop) useEventListener(terminalEl, "contextmenu", showContextMenu);
		onMounted(() => {
			selectionDisposable = terminal.onSelectionChange(() => {
				hasSelection.value = terminal.hasSelection();
			});
		});
		onUnmounted(() => {
			selectionDisposable?.dispose();
			emit("unmounted");
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				ref_key: "rootEl",
				ref: rootEl,
				class: "relative size-full overflow-hidden bg-neutral-900"
			}, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", {
				ref_key: "terminalEl",
				ref: terminalEl,
				class: "terminal-host h-full"
			}, null, 512)]), withDirectives((openBlock(), createBlock(Button_default, {
				variant: "secondary",
				size: "sm",
				class: normalizeClass(unref(cn)("absolute top-2 right-8 transition-opacity", { "pointer-events-none opacity-0 select-none": !unref(isHovered) })),
				"aria-label": tooltipText.value,
				onClick: handleCopy
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-copy" }, null, -1)])),
				_: 1
			}, 8, ["class", "aria-label"])), [[
				_directive_tooltip,
				{
					value: tooltipText.value,
					showDelay: 300
				},
				void 0,
				{ left: true }
			]])], 512);
		};
	}
}), [["__scopeId", "data-v-df290087"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "size-full bg-transparent" };
var _hoisted_2 = {
	key: 0,
	class: "p-4 text-center"
};
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue
var LogsTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LogsTerminal",
	setup(__props) {
		const errorMessage = ref("");
		const loading = ref(true);
		const terminalCreated = ({ terminal, useAutoSize }, root) => {
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				minCols: 80
			});
			const update = (entries) => {
				terminal.write(entries.map((e) => e.m).join(""));
			};
			const logReceived = (e) => {
				update(e.detail.entries);
			};
			const loadLogEntries = async () => {
				update((await api.getRawLogs()).entries);
			};
			const watchLogs = async () => {
				const { clientId } = storeToRefs(useExecutionStore());
				if (!clientId.value) await until(clientId).not.toBeNull();
				await api.subscribeLogs(true);
				api.addEventListener("logs", logReceived);
			};
			onMounted(async () => {
				try {
					await loadLogEntries();
				} catch (err) {
					console.error("Error loading logs", err);
					errorMessage.value = "Unable to load logs, please ensure you have updated your ComfyUI backend.";
					return;
				}
				await watchLogs();
				loading.value = false;
			});
			onUnmounted(async () => {
				if (api.clientId) await api.subscribeLogs(false);
				api.removeEventListener("logs", logReceived);
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [errorMessage.value ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(errorMessage.value), 1)) : loading.value ? (openBlock(), createBlock(unref(script), {
				key: 1,
				class: "relative inset-0 z-10 flex h-full items-center justify-center"
			})) : createCommentVNode("", true), withDirectives(createVNode(BaseTerminal_default, { onCreated: terminalCreated }, null, 512), [[vShow, !loading.value]])]);
		};
	}
}), [["__scopeId", "data-v-a37adc34"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/CommandTerminal.vue
var CommandTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CommandTerminal",
	setup(__props) {
		const terminalCreated = ({ terminal, useAutoSize }, root) => {
			const terminalApi = electronAPI().Terminal;
			let offData;
			let offOutput;
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				onResize: async () => {
					if (!terminal.element?.offsetParent) return;
					await terminalApi.resize(terminal.cols, terminal.rows);
				}
			});
			onMounted(async () => {
				offData = terminal.onData(async (message) => {
					await terminalApi.write(message);
				});
				offOutput = terminalApi.onOutput((message) => {
					terminal.write(message);
				});
				const restore = await terminalApi.restore();
				setTimeout(() => {
					if (restore.buffer.length) {
						terminal.resize(restore.size.cols, restore.size.rows);
						terminal.write(restore.buffer.join(""));
					}
				}, 500);
			});
			onUnmounted(() => {
				offData?.dispose();
				offOutput?.();
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseTerminal_default, { onCreated: terminalCreated });
		};
	}
}), [["__scopeId", "data-v-49782f06"]]);
//#endregion
//#region src/composables/bottomPanelTabs/useTerminalTabs.ts
function useLogsTerminalTab() {
	return {
		id: "logs-terminal",
		title: "Logs",
		titleKey: "g.logs",
		component: markRaw(LogsTerminal_default),
		type: "vue"
	};
}
function useCommandTerminalTab() {
	return {
		id: "command-terminal",
		title: "Terminal",
		titleKey: "g.terminal",
		component: markRaw(CommandTerminal_default),
		type: "vue"
	};
}
//#endregion
export { useCommandTerminalTab, useLogsTerminalTab };

//# sourceMappingURL=useTerminalTabs-DBNKh165.js.map