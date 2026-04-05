import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BaQ5ErdO.js";
import { r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import "./Button-BDFSC50t.js";
import { F as ComfyDialog, P as $el, f as deserialiseAndCreate, s as app, t as useDialogService } from "./dialogService-DKx-VcuC.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-Xq2eOfQ2.js";
import "./useErrorHandling-DtKxKYzs.js";
import { t as downloadBlob } from "./downloadUtil-DifTE-W9.js";
import "./useCopyToClipboard-MPqv8vkx.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-mBVaC-eN.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-DB_su3zs.js";
import { n as GroupNodeHandler, t as GroupNodeConfig } from "./groupNode-41AecsYq.js";
//#region src/extensions/core/nodeTemplates.ts
var id = "Comfy.NodeTemplates";
var file = "comfy.templates.json";
var ManageTemplates = class extends ComfyDialog {
	templates = [];
	draggedEl;
	saveVisualCue;
	emptyImg;
	importInput;
	constructor() {
		super();
		this.load().then((v) => {
			this.templates = v;
		});
		this.element.classList.add("comfy-manage-templates");
		this.draggedEl = null;
		this.saveVisualCue = null;
		this.emptyImg = new Image();
		this.emptyImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
		this.importInput = $el("input", {
			type: "file",
			accept: ".json",
			multiple: true,
			style: { display: "none" },
			parent: document.body,
			onchange: () => this.importAll()
		});
	}
	createButtons() {
		const btns = super.createButtons();
		btns[0].textContent = "Close";
		btns[0].onclick = () => {
			clearTimeout(this.saveVisualCue);
			this.close();
		};
		btns.unshift($el("button", {
			type: "button",
			textContent: "Export",
			onclick: () => this.exportAll()
		}));
		btns.unshift($el("button", {
			type: "button",
			textContent: "Import",
			onclick: () => {
				this.importInput.click();
			}
		}));
		return btns;
	}
	async load() {
		let templates = [];
		const res = await api.getUserData(file);
		if (res.status === 200) try {
			templates = await res.json();
		} catch (error) {}
		else if (res.status !== 404) console.error(res.status + " " + res.statusText);
		return templates ?? [];
	}
	async store() {
		const templates = JSON.stringify(this.templates, void 0, 4);
		try {
			await api.storeUserData(file, templates, { stringify: false });
		} catch (error) {
			console.error(error);
			useToastStore().addAlert(error.message);
		}
	}
	async importAll() {
		for (const file of this.importInput.files) if (file.type === "application/json" || file.name.endsWith(".json")) {
			const reader = new FileReader();
			reader.onload = async () => {
				const importFile = JSON.parse(reader.result);
				if (importFile?.templates) {
					for (const template of importFile.templates) if (template?.name && template?.data) this.templates.push(template);
					await this.store();
				}
			};
			await reader.readAsText(file);
		}
		this.importInput.value = null;
		this.close();
	}
	exportAll() {
		if (this.templates.length == 0) {
			useToastStore().addAlert(t("toastMessages.noTemplatesToExport"));
			return;
		}
		const json = JSON.stringify({ templates: this.templates }, null, 2);
		downloadBlob("node_templates.json", new Blob([json], { type: "application/json" }));
	}
	show() {
		super.show($el("div", {}, this.templates.flatMap((t, i) => {
			let nameInput;
			return [$el("div", {
				dataset: { id: i.toString() },
				className: "templateManagerRow",
				style: {
					display: "grid",
					gridTemplateColumns: "1fr auto",
					border: "1px dashed transparent",
					gap: "5px",
					backgroundColor: "var(--comfy-menu-bg)"
				},
				ondragstart: (e) => {
					this.draggedEl = e.currentTarget;
					e.currentTarget.style.opacity = "0.6";
					e.currentTarget.style.border = "1px dashed yellow";
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.setDragImage(this.emptyImg, 0, 0);
				},
				ondragend: (e) => {
					e.target.style.opacity = "1";
					e.currentTarget.style.border = "1px dashed transparent";
					e.currentTarget.removeAttribute("draggable");
					this.element.querySelectorAll(".templateManagerRow").forEach((el, i) => {
						var prev_i = Number.parseInt(el.dataset.id);
						if (el == this.draggedEl && prev_i != i) this.templates.splice(i, 0, this.templates.splice(prev_i, 1)[0]);
						el.dataset.id = i.toString();
					});
					this.store();
				},
				ondragover: (e) => {
					e.preventDefault();
					if (e.currentTarget == this.draggedEl) return;
					let rect = e.currentTarget.getBoundingClientRect();
					if (e.clientY > rect.top + rect.height / 2) e.currentTarget.parentNode.insertBefore(this.draggedEl, e.currentTarget.nextSibling);
					else e.currentTarget.parentNode.insertBefore(this.draggedEl, e.currentTarget);
				}
			}, [$el("label", {
				textContent: "Name: ",
				style: { cursor: "grab" },
				onmousedown: (e) => {
					if (e.target.localName == "label") e.currentTarget.parentNode.draggable = "true";
				}
			}, [$el("input", {
				value: t.name,
				dataset: { name: t.name },
				style: {
					transitionProperty: "background-color",
					transitionDuration: "0s"
				},
				onchange: (e) => {
					clearTimeout(this.saveVisualCue);
					var el = e.target;
					var row = el.parentNode.parentNode;
					this.templates[row.dataset.id].name = el.value.trim() || "untitled";
					this.store();
					el.style.backgroundColor = "rgb(40, 95, 40)";
					el.style.transitionDuration = "0s";
					this.saveVisualCue = setTimeout(function() {
						el.style.transitionDuration = ".7s";
						el.style.backgroundColor = "var(--comfy-input-bg)";
					}, 15);
				},
				onkeypress: (e) => {
					var el = e.target;
					clearTimeout(this.saveVisualCue);
					el.style.transitionDuration = "0s";
					el.style.backgroundColor = "var(--comfy-input-bg)";
				},
				$: (el) => nameInput = el
			})]), $el("div", {}, [$el("button", {
				textContent: "Export",
				style: {
					fontSize: "12px",
					fontWeight: "normal"
				},
				onclick: () => {
					const json = JSON.stringify({ templates: [t] }, null, 2);
					const blob = new Blob([json], { type: "application/json" });
					downloadBlob((nameInput.value || t.name) + ".json", blob);
				}
			}), $el("button", {
				textContent: "Delete",
				style: {
					fontSize: "12px",
					color: "red",
					fontWeight: "normal"
				},
				onclick: (e) => {
					const item = e.target.parentNode.parentNode;
					item.parentNode.removeChild(item);
					this.templates.splice(item.dataset.id * 1, 1);
					this.store();
					var that = this;
					setTimeout(function() {
						that.element.querySelectorAll(".templateManagerRow").forEach((el, i) => {
							el.dataset.id = i.toString();
						});
					}, 0);
				}
			})])])];
		})));
	}
};
var manage = new ManageTemplates();
var clipboardAction = async (cb) => {
	const old = localStorage.getItem("litegrapheditor_clipboard");
	await cb();
	localStorage.setItem("litegrapheditor_clipboard", old);
};
var ext = {
	name: id,
	getCanvasMenuItems(_canvas) {
		const items = [];
		items.push(null);
		items.push({
			content: `Save Selected as Template`,
			disabled: !Object.keys(app.canvas.selected_nodes || {}).length,
			callback: async () => {
				const name = await useDialogService().prompt({
					title: t("nodeTemplates.saveAsTemplate"),
					message: t("nodeTemplates.enterName"),
					defaultValue: ""
				});
				if (!name?.trim()) return;
				clipboardAction(() => {
					app.canvas.copyToClipboard();
					let data = localStorage.getItem("litegrapheditor_clipboard");
					data = JSON.parse(data || "{}");
					const nodeIds = Object.keys(app.canvas.selected_nodes);
					for (let i = 0; i < nodeIds.length; i++) {
						const node = app.canvas.graph?.getNodeById(nodeIds[i]);
						const nodeData = node?.constructor.nodeData;
						if (!node) continue;
						const groupConfig = GroupNodeHandler.getGroupData(node);
						if (groupConfig) {
							const groupData = groupConfig.nodeData;
							if (!data.groupNodes) data.groupNodes = {};
							if (nodeData == null) throw new TypeError("nodeData is not set");
							data.groupNodes[nodeData.name] = groupData;
							data.nodes[i].type = nodeData.name;
						}
					}
					manage.templates.push({
						name,
						data: JSON.stringify(data)
					});
					manage.store();
				});
			}
		});
		const subItems = manage.templates.map((t) => {
			return {
				content: t.name,
				callback: () => {
					clipboardAction(async () => {
						const data = JSON.parse(t.data);
						await GroupNodeConfig.registerFromWorkflow(data.groupNodes ?? {}, []);
						if (!data.reroutes) deserialiseAndCreate(t.data, app.canvas);
						else {
							localStorage.setItem("litegrapheditor_clipboard", t.data);
							app.canvas.pasteFromClipboard();
						}
					});
				}
			};
		});
		subItems.push(null, {
			content: "Manage",
			callback: () => manage.show()
		});
		items.push({
			content: "Node Templates",
			submenu: { options: subItems }
		});
		return items;
	}
};
app.registerExtension(ext);
//#endregion

//# sourceMappingURL=nodeTemplates-Cs9T9JyH.js.map