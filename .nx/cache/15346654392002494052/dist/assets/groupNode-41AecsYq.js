import "./rolldown-runtime-DBfy44LZ.js";
import { R as toolkit } from "./vendor-other-BMn-xt1e.js";
import { E as ExecutableNodeDTO, F as LGraphNode, T as SubgraphNode, V as NodeSlot, X as PREFIX, b as LiteGraph, r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import { Ci as isComboInputSpec, Fn as isValidWidgetType, H as useNodeDefStore, Hn as createAssetWidget, I as ComfyDialog, Mn as ComfyWidgets, P as $el, Pn as addValueControlWidgets, Si as getInputSpecType, Ti as isIntInputSpec, d as DraggableList, dr as CONFIG, f as deserialiseAndCreate, fr as GET_CONFIG, g as lcm, j as useExecutionStore, jn as useWidgetStore, p as serialise, pa as useChainCallback, s as app, sa as applyTextReplacements, t as useDialogService, ti as assetService, wi as isFloatInputSpec, xi as getComboSpecComboOptions, y as GROUP } from "./dialogService-DKx-VcuC.js";
//#region src/utils/executableGroupNodeChildDTO.ts
var ExecutableGroupNodeChildDTO = class extends ExecutableNodeDTO {
	groupNodeHandler;
	constructor(node, subgraphNodePath, nodesByExecutionId, subgraphNode, groupNodeHandler) {
		super(node, subgraphNodePath, nodesByExecutionId, subgraphNode);
		this.groupNodeHandler = groupNodeHandler;
	}
	resolveInput(slot) {
		if (this.id.split(":").length > 2) throw new Error("Group nodes inside subgraphs are not supported. Please convert the group node to a subgraph instead.");
		const inputNode = this.node.getInputNode(slot);
		if (!inputNode) return;
		const link = this.node.getInputLink(slot);
		if (!link) throw new Error("Failed to get input link");
		const inputNodeId = String(inputNode.id);
		let inputNodeDto = this.nodesByExecutionId?.get(inputNodeId);
		if (!inputNodeDto) {
			const id = inputNodeId.split(":").at(-1);
			if (id !== void 0) inputNodeDto = this.nodesByExecutionId?.get(id);
		}
		if (!inputNodeDto) throw new Error(`Failed to get input node ${inputNodeId} for group node child ${this.id} with slot ${slot}`);
		return {
			node: inputNodeDto,
			origin_id: inputNodeId,
			origin_slot: link.origin_slot
		};
	}
};
//#endregion
//#region src/extensions/core/groupNodeManage.ts
var ORDER = Symbol();
function merge(target, source) {
	for (const key in source) {
		const sv = source[key];
		if (typeof sv === "object" && sv !== null) {
			let tv = target[key];
			if (!tv) tv = target[key] = {};
			merge(tv, sv);
		} else target[key] = sv;
	}
	return target;
}
var ManageGroupDialog = class extends ComfyDialog {
	tabs;
	selectedNodeIndex;
	selectedTab = "Inputs";
	selectedGroup;
	modifications = {};
	nodeItems;
	app;
	groupNodeType;
	groupData;
	innerNodesList;
	widgetsPage;
	inputsPage;
	outputsPage;
	draggable;
	get selectedNodeInnerIndex() {
		const index = this.selectedNodeIndex;
		if (index == null) throw new Error("No node selected");
		const item = this.nodeItems[index];
		if (!item?.dataset.nodeindex) throw new Error("Invalid node item");
		return +item.dataset.nodeindex;
	}
	constructor(app) {
		super();
		this.app = app;
		this.element = $el("dialog.comfy-group-manage", { parent: document.body });
	}
	changeTab(tab) {
		this.tabs[this.selectedTab].tab.classList.remove("active");
		this.tabs[this.selectedTab].page.classList.remove("active");
		this.tabs[tab].tab.classList.add("active");
		this.tabs[tab].page.classList.add("active");
		this.selectedTab = tab;
	}
	changeNode(index, force) {
		if (!force && this.selectedNodeIndex === index) return;
		if (this.selectedNodeIndex != null) this.nodeItems[this.selectedNodeIndex].classList.remove("selected");
		this.nodeItems[index].classList.add("selected");
		this.selectedNodeIndex = index;
		if (!this.buildInputsPage() && this.selectedTab === "Inputs") this.changeTab("Widgets");
		if (!this.buildWidgetsPage() && this.selectedTab === "Widgets") this.changeTab("Outputs");
		if (!this.buildOutputsPage() && this.selectedTab === "Outputs") this.changeTab("Inputs");
		this.changeTab(this.selectedTab);
	}
	getGroupData() {
		this.groupNodeType = LiteGraph.registered_node_types[`${PREFIX}>` + this.selectedGroup];
		this.groupData = GroupNodeHandler.getGroupData(this.groupNodeType);
	}
	changeGroup(group, reset = true) {
		this.selectedGroup = group;
		this.getGroupData();
		const nodes = this.groupData.nodeData.nodes;
		this.nodeItems = nodes.map((n, i) => $el("li.draggable-item", {
			dataset: { nodeindex: n.index + "" },
			onclick: () => {
				this.changeNode(i);
			}
		}, [$el("span.drag-handle"), $el("div", { textContent: n.title ?? n.type }, n.title ? $el("span", { textContent: n.type }) : [])]));
		this.innerNodesList.replaceChildren(...this.nodeItems);
		if (reset) {
			this.selectedNodeIndex = null;
			this.changeNode(0);
		} else {
			let index = this.draggable.getAllItems().findIndex((item) => item.classList.contains("selected"));
			if (index === -1) index = this.selectedNodeIndex;
			this.changeNode(index, true);
		}
		const ordered = [...nodes];
		this.draggable?.dispose();
		this.draggable = new DraggableList(this.innerNodesList, "li");
		this.draggable.addEventListener("dragend", (e) => {
			const { oldPosition, newPosition } = e.detail;
			if (oldPosition === newPosition) return;
			ordered.splice(newPosition, 0, ordered.splice(oldPosition, 1)[0]);
			for (let i = 0; i < ordered.length; i++) this.storeModification({
				nodeIndex: ordered[i].index,
				section: ORDER,
				prop: "order",
				value: i
			});
		});
	}
	storeModification(props) {
		const { nodeIndex, section, prop, value } = props;
		const groupKey = this.selectedGroup;
		const groupMod = this.modifications[groupKey] ??= {};
		const nodesMod = groupMod.nodes ??= {};
		const nodeMod = nodesMod[nodeIndex ?? this.selectedNodeInnerIndex] ??= {};
		const typeMod = nodeMod[section] ??= {};
		if (typeof value === "object" && value !== null) {
			const objMod = typeMod[prop] ??= {};
			Object.assign(objMod, value);
		} else typeMod[prop] = value;
	}
	getEditElement(section, prop, value, placeholder, checked, checkable = true) {
		let displayValue = value === placeholder ? "" : value;
		const groupKey = this.selectedGroup;
		const modEntry = (this.modifications[groupKey]?.nodes)?.[this.selectedNodeInnerIndex]?.[section]?.[prop];
		if (modEntry) {
			if (modEntry.name != null) displayValue = modEntry.name;
			if (modEntry.visible != null) checked = modEntry.visible;
		}
		return $el("div", [$el("input", {
			value: displayValue,
			placeholder,
			type: "text",
			onchange: (e) => {
				this.storeModification({
					section,
					prop: String(prop),
					value: { name: e.target.value }
				});
			}
		}), $el("label", { textContent: "Visible" }, [$el("input", {
			type: "checkbox",
			checked,
			disabled: !checkable,
			onchange: (e) => {
				this.storeModification({
					section,
					prop: String(prop),
					value: { visible: !!e.target.checked }
				});
			}
		})])]);
	}
	buildWidgetsPage() {
		const widgets = this.groupData.oldToNewWidgetMap[this.selectedNodeInnerIndex];
		const items = Object.keys(widgets ?? {});
		const config = app.rootGraph.extra.groupNodes[this.selectedGroup].config?.[this.selectedNodeInnerIndex]?.input;
		this.widgetsPage.replaceChildren(...items.map((oldName) => {
			return this.getEditElement("input", oldName, widgets[oldName], oldName, config?.[oldName]?.visible !== false);
		}));
		return !!items.length;
	}
	buildInputsPage() {
		const inputs = this.groupData.nodeInputs[this.selectedNodeInnerIndex];
		const items = Object.keys(inputs ?? {});
		const config = app.rootGraph.extra.groupNodes[this.selectedGroup].config?.[this.selectedNodeInnerIndex]?.input;
		const elements = items.map((oldName) => {
			const value = inputs[oldName];
			if (!value) return null;
			return this.getEditElement("input", oldName, value, oldName, config?.[oldName]?.visible !== false);
		}).filter((el) => el !== null);
		this.inputsPage.replaceChildren(...elements);
		return !!items.length;
	}
	buildOutputsPage() {
		const nodes = this.groupData.nodeData.nodes;
		const innerNodeDef = this.groupData.getNodeDef(nodes[this.selectedNodeInnerIndex]);
		const outputs = innerNodeDef?.output ?? [];
		const groupOutputs = this.groupData.oldToNewOutputMap[this.selectedNodeInnerIndex];
		const config = app.rootGraph.extra.groupNodes[this.selectedGroup].config?.[this.selectedNodeInnerIndex]?.output;
		const checkable = this.groupData.nodeData.nodes[this.selectedNodeInnerIndex].type !== "PrimitiveNode";
		const elements = outputs.map((outputType, slot) => {
			const groupOutputIndex = groupOutputs?.[slot];
			const oldName = innerNodeDef?.output_name?.[slot] ?? String(outputType);
			let value = config?.[slot]?.name;
			const visible = config?.[slot]?.visible || groupOutputIndex != null;
			if (!value || value === oldName) value = "";
			return this.getEditElement("output", slot, value, oldName, visible, checkable);
		});
		this.outputsPage.replaceChildren(...elements);
		return !!outputs.length;
	}
	show(groupNodeType) {
		const nodeType = typeof groupNodeType === "string" ? groupNodeType : void 0;
		const groupNodes = Object.keys(app.rootGraph.extra?.groupNodes ?? {}).sort((a, b) => a.localeCompare(b));
		this.innerNodesList = $el("ul.comfy-group-manage-list-items");
		this.widgetsPage = $el("section.comfy-group-manage-node-page");
		this.inputsPage = $el("section.comfy-group-manage-node-page");
		this.outputsPage = $el("section.comfy-group-manage-node-page");
		const pages = $el("div", [
			this.widgetsPage,
			this.inputsPage,
			this.outputsPage
		]);
		this.tabs = [
			["Inputs", this.inputsPage],
			["Widgets", this.widgetsPage],
			["Outputs", this.outputsPage]
		].reduce((p, [name, page]) => {
			p[name] = {
				tab: $el("a", {
					onclick: () => {
						this.changeTab(name);
					},
					textContent: name
				}),
				page
			};
			return p;
		}, {});
		const outer = $el("div.comfy-group-manage-outer", [
			$el("header", [$el("h2", "Group Nodes"), $el("select", { onchange: (e) => {
				this.changeGroup(e.target.value);
			} }, groupNodes.map((g) => $el("option", {
				textContent: g,
				selected: `${PREFIX}>${g}` === nodeType,
				value: g
			})))]),
			$el("main", [$el("section.comfy-group-manage-list", this.innerNodesList), $el("section.comfy-group-manage-node", [$el("header", Object.values(this.tabs).map((t) => t.tab)), pages])]),
			$el("footer", [
				$el("button.comfy-btn", { onclick: () => {
					if (app.rootGraph.nodes.find((n) => n.type === `workflow>` + this.selectedGroup)) {
						useToastStore().addAlert("This group node is in use in the current workflow, please first remove these.");
						return;
					}
					if (confirm(`Are you sure you want to remove the node: "${this.selectedGroup}"`)) {
						delete app.rootGraph.extra.groupNodes[this.selectedGroup];
						LiteGraph.unregisterNodeType(`${PREFIX}>` + this.selectedGroup);
					}
					this.show();
				} }, "Delete Group Node"),
				$el("button.comfy-btn", { onclick: async () => {
					let nodesByType;
					const recreateNodes = [];
					const types = {};
					for (const g in this.modifications) {
						const groupNodeData = app.rootGraph.extra.groupNodes[g];
						let config = groupNodeData.config ??= {};
						let nodeMods = this.modifications[g]?.nodes;
						if (nodeMods) {
							const keys = Object.keys(nodeMods);
							if (nodeMods[keys[0]]?.[ORDER]) {
								const orderedNodes = [];
								const orderedMods = {};
								const orderedConfig = {};
								for (const n of keys) {
									const order = nodeMods[n][ORDER].order;
									orderedNodes[order] = groupNodeData.nodes[+n];
									orderedMods[order] = nodeMods[n];
									orderedNodes[order].index = order;
								}
								const nodesLen = groupNodeData.nodes.length;
								for (const l of groupNodeData.links) {
									const srcIdx = l[0];
									const dstIdx = l[2];
									if (srcIdx != null && srcIdx < nodesLen) l[0] = groupNodeData.nodes[srcIdx].index;
									if (dstIdx != null && dstIdx < nodesLen) l[2] = groupNodeData.nodes[dstIdx].index;
								}
								if (groupNodeData.external) for (const ext of groupNodeData.external) {
									const extIdx = ext[0];
									if (extIdx != null && extIdx < nodesLen) ext[0] = groupNodeData.nodes[extIdx].index;
								}
								for (const id of keys) {
									if (config[+id]) orderedConfig[groupNodeData.nodes[+id].index] = config[+id];
									delete config[+id];
								}
								groupNodeData.nodes = orderedNodes;
								nodeMods = orderedMods;
								groupNodeData.config = config = orderedConfig;
							}
							merge(config, nodeMods);
						}
						types[g] = groupNodeData;
						if (!nodesByType) nodesByType = app.rootGraph.nodes.reduce((p, n) => {
							const nodeType = n.type ?? "";
							p[nodeType] ??= [];
							p[nodeType].push(n);
							return p;
						}, {});
						const groupTypeNodes = nodesByType[`${PREFIX}>` + g];
						if (groupTypeNodes) recreateNodes.push(...groupTypeNodes);
					}
					await GroupNodeConfig.registerFromWorkflow(types, []);
					for (const node of recreateNodes) node.recreate?.();
					this.modifications = {};
					this.app.canvas.setDirty(true, true);
					this.changeGroup(this.selectedGroup, false);
				} }, "Save"),
				$el("button.comfy-btn", { onclick: () => this.element.close() }, "Close")
			])
		]);
		this.element.replaceChildren(outer);
		this.changeGroup(nodeType ? groupNodes.find((g) => `workflow>${g}` === nodeType) ?? groupNodes[0] : groupNodes[0]);
		this.element.showModal();
		this.element.addEventListener("close", () => {
			this.draggable?.dispose();
			this.element.remove();
		});
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNodeManage = window.comfyAPI.groupNodeManage || {};
window.comfyAPI.groupNodeManage.ManageGroupDialog = ManageGroupDialog;
//#endregion
//#region src/renderer/utils/nodeTypeGuards.ts
var isPrimitiveNode = (node) => node.type === "PrimitiveNode";
//#endregion
//#region src/utils/nodeDefUtil.ts
var IGNORE_KEYS = new Set([
	"default",
	"forceInput",
	"defaultInput",
	"control_after_generate",
	"multiline",
	"tooltip",
	"dynamicPrompts"
]);
var getRange = (options) => {
	return {
		min: options.min ?? -Infinity,
		max: options.max ?? Infinity
	};
};
var mergeNumericInputSpec = (spec1, spec2) => {
	const type = spec1[0];
	const options1 = spec1[1] ?? {};
	const options2 = spec2[1] ?? {};
	const range1 = getRange(options1);
	const range2 = getRange(options2);
	if (range1.min > range2.max || range1.max < range2.min) return null;
	const step1 = options1.step ?? 1;
	const step2 = options2.step ?? 1;
	const mergedOptions = {
		min: Math.max(range1.min, range2.min),
		max: Math.min(range1.max, range2.max),
		step: lcm(step1, step2)
	};
	return mergeCommonInputSpec([type, {
		...options1,
		...mergedOptions
	}], [type, {
		...options2,
		...mergedOptions
	}]);
};
var mergeComboInputSpec = (spec1, spec2) => {
	const options1 = spec1[1] ?? {};
	const options2 = spec2[1] ?? {};
	const comboOptions1 = getComboSpecComboOptions(spec1);
	const comboOptions2 = getComboSpecComboOptions(spec2);
	const intersection = toolkit.intersection(comboOptions1, comboOptions2);
	if (intersection.length === 0) return null;
	return mergeCommonInputSpec(["COMBO", {
		...options1,
		options: intersection
	}], ["COMBO", {
		...options2,
		options: intersection
	}]);
};
var mergeCommonInputSpec = (spec1, spec2) => {
	const type = getInputSpecType(spec1);
	const options1 = spec1[1] ?? {};
	const options2 = spec2[1] ?? {};
	return toolkit.union(toolkit.keys(options1), toolkit.keys(options2)).filter((key) => !IGNORE_KEYS.has(key)).every((key) => {
		const value1 = options1[key];
		const value2 = options2[key];
		return value1 === value2 || toolkit.isNil(value1) && toolkit.isNil(value2);
	}) ? [type, {
		...options1,
		...options2
	}] : null;
};
/**
* Merges two input specs.
*
* @param spec1 - The first input spec.
* @param spec2 - The second input spec.
* @returns The merged input spec, or null if the specs are not mergeable.
*/
var mergeInputSpec = (spec1, spec2) => {
	if (getInputSpecType(spec1) !== getInputSpecType(spec2)) return null;
	if (isIntInputSpec(spec1) || isFloatInputSpec(spec1)) return mergeNumericInputSpec(spec1, spec2);
	if (isComboInputSpec(spec1)) return mergeComboInputSpec(spec1, spec2);
	return mergeCommonInputSpec(spec1, spec2);
};
//#endregion
//#region src/extensions/core/widgetInputs.ts
var replacePropertyName = "Run widget replace on values";
var PrimitiveNode = class extends LGraphNode {
	controlValues;
	lastType;
	static category;
	constructor(title) {
		super(title);
		this.addOutput("connect to widget input", "*");
		this.serialize_widgets = true;
		this.isVirtualNode = true;
		if (!this.properties || !(replacePropertyName in this.properties)) this.addProperty(replacePropertyName, false, "boolean");
	}
	applyToGraph(extraLinks = []) {
		if (!this.outputs[0].links?.length || !this.graph) return;
		const links = [...this.outputs[0].links.map((l) => this.graph.links[l]), ...extraLinks];
		let v = this.widgets?.[0].value;
		if (v && this.properties[replacePropertyName]) v = applyTextReplacements(this.graph, v);
		for (const linkInfo of links) {
			const node = this.graph?.getNodeById(linkInfo.target_id);
			const input = node?.inputs[linkInfo.target_slot];
			if (!input) {
				console.warn("Unable to resolve node or input for link", linkInfo);
				continue;
			}
			const widgetName = input.widget?.name;
			if (!widgetName) {
				console.warn("Invalid widget or widget name", input.widget);
				continue;
			}
			const widget = node.widgets?.find((w) => w.name === widgetName);
			if (!widget) {
				console.warn(`Unable to find widget "${widgetName}" on node [${node.id}]`);
				continue;
			}
			widget.value = v;
			widget.callback?.(widget.value, app.canvas, node, app.canvas.graph_mouse, {});
		}
	}
	refreshComboInNode() {
		const widget = this.widgets?.[0];
		if (widget?.type === "combo") {
			widget.options.values = this.outputs[0].widget[GET_CONFIG]()[0];
			if (!widget.options.values.includes(widget.value)) {
				widget.value = widget.options.values[0];
				widget.callback(widget.value);
			}
		}
	}
	onAfterGraphConfigured() {
		if (this.outputs[0].links?.length && !this.widgets?.length) {
			this._onFirstConnection();
			if (this.widgets && this.widgets_values) for (let i = 0; i < this.widgets_values.length; i++) {
				const w = this.widgets[i];
				if (w) w.value = this.widgets_values[i];
			}
			this._mergeWidgetConfig();
		}
	}
	onConnectionsChange(_type, _index, connected) {
		if (app.configuringGraph) return;
		const links = this.outputs[0].links;
		if (connected) {
			if (links?.length && !this.widgets?.length) this._onFirstConnection();
		} else {
			this._mergeWidgetConfig();
			if (!links?.length) this.onLastDisconnect();
		}
	}
	onConnectOutput(slot, _type, input, target_node, target_slot) {
		if (!input.widget && !(input.type in ComfyWidgets)) return false;
		if (this.outputs[slot].links?.length) {
			const valid = this._isValidConnection(input);
			if (valid) this.applyToGraph([{
				target_id: target_node.id,
				target_slot
			}]);
			return valid;
		}
		return true;
	}
	_onFirstConnection(recreating) {
		if (!this.outputs[0].links || !this.graph) {
			this.onLastDisconnect();
			return;
		}
		const linkId = this.outputs[0].links[0];
		const link = this.graph.links[linkId];
		if (!link) return;
		const theirNode = this.graph.getNodeById(link.target_id);
		if (!theirNode || !theirNode.inputs) return;
		const input = theirNode.inputs[link.target_slot];
		if (!input) return;
		let widget;
		if (!input.widget) {
			if (!(input.type in ComfyWidgets)) return;
			widget = {
				name: input.name,
				[GET_CONFIG]: () => [input.type, {}]
			};
		} else widget = input.widget;
		const config = widget[GET_CONFIG]?.();
		if (!config) return;
		const { type } = getWidgetType(config);
		this.outputs[0].type = type;
		this.outputs[0].name = type;
		this.outputs[0].widget = widget;
		this._createWidget(widget[CONFIG] ?? config, theirNode, widget.name, recreating);
	}
	_createWidget(inputData, node, widgetName, recreating) {
		let type = inputData[0];
		if (type instanceof Array) type = "COMBO";
		const [oldWidth, oldHeight] = this.size;
		let widget;
		if (type === "COMBO" && assetService.shouldUseAssetBrowser(node.comfyClass, widgetName)) {
			widget = this._createAssetWidget(node, widgetName, inputData);
			const theirWidget = node.widgets?.find((w) => w.name === widgetName);
			if (theirWidget) widget.value = theirWidget.value;
			this._finalizeWidget(widget, oldWidth, oldHeight, recreating);
			return;
		}
		if (isValidWidgetType(type)) widget = (ComfyWidgets[type](this, "value", inputData, app) || {}).widget;
		else widget = this.addWidget(type, "value", null, () => {}, {});
		if (node?.widgets && widget) {
			const theirWidget = node.widgets.find((w) => w.name === widgetName);
			if (theirWidget) widget.value = theirWidget.value;
		}
		if (!inputData?.[1]?.control_after_generate && (widget.type === "number" || widget.type === "combo")) {
			let control_value = this.widgets_values?.[1];
			if (!control_value) control_value = "fixed";
			addValueControlWidgets(this, widget, control_value, void 0, inputData);
			if (this.widgets?.[1]) widget.linkedWidgets = [this.widgets[1]];
			let filter = this.widgets_values?.[2];
			if (filter && this.widgets && this.widgets.length === 3) this.widgets[2].value = filter;
		}
		const controlValues = this.controlValues;
		if (this.widgets && this.lastType === this.widgets[0]?.type && controlValues?.length === this.widgets.length - 1) for (let i = 0; i < controlValues.length; i++) this.widgets[i + 1].value = controlValues[i];
		this._finalizeWidget(widget, oldWidth, oldHeight, recreating);
	}
	_createAssetWidget(targetNode, targetInputName, inputData) {
		const defaultValue = inputData[1]?.default;
		return createAssetWidget({
			node: this,
			widgetName: "value",
			nodeTypeForBrowser: targetNode.comfyClass ?? "",
			inputNameForBrowser: targetInputName,
			defaultValue,
			onValueChange: (widget, newValue, oldValue) => {
				widget.callback?.(widget.value, app.canvas, this, app.canvas.graph_mouse, {});
				this.onWidgetChanged?.(widget.name, newValue, oldValue, widget);
			}
		});
	}
	_finalizeWidget(widget, oldWidth, oldHeight, recreating) {
		widget.callback = useChainCallback(widget.callback, () => {
			this.applyToGraph();
		});
		this.setSize([Math.max(this.size[0], oldWidth), Math.max(this.size[1], oldHeight)]);
		if (!recreating) {
			const sz = this.computeSize();
			if (this.size[0] < sz[0]) this.size[0] = sz[0];
			if (this.size[1] < sz[1]) this.size[1] = sz[1];
			requestAnimationFrame(() => {
				this.onResize?.(this.size);
			});
		}
	}
	recreateWidget() {
		const values = this.widgets?.map((w) => w.value);
		this._removeWidgets();
		this._onFirstConnection(true);
		if (values?.length && this.widgets) for (let i = 0; i < this.widgets.length; i++) this.widgets[i].value = values[i];
		return this.widgets?.[0];
	}
	_mergeWidgetConfig() {
		const output = this.outputs[0];
		const links = output.links ?? [];
		const hasConfig = !!output.widget?.[CONFIG];
		if (hasConfig) delete output.widget?.[CONFIG];
		if (links?.length < 2 && hasConfig) {
			if (links.length) this.recreateWidget();
			return;
		}
		const config1 = (output.widget?.[GET_CONFIG])?.();
		if (!config1) return;
		if (!(config1[0] === "INT" || config1[0] === "FLOAT") || !this.graph) return;
		for (const linkId of links) {
			const link = this.graph.links[linkId];
			if (!link) continue;
			const theirNode = this.graph.getNodeById(link.target_id);
			if (!theirNode) continue;
			const theirInput = theirNode.inputs[link.target_slot];
			this._isValidConnection(theirInput, hasConfig);
		}
	}
	_isValidConnection(input, forceUpdate) {
		const output = this.outputs?.[0];
		const config2 = (input.widget?.[GET_CONFIG])?.();
		if (!config2) return false;
		return !!mergeIfValid.call(this, output, config2, forceUpdate, this.recreateWidget);
	}
	_removeWidgets() {
		if (this.widgets) {
			for (const w of this.widgets) if (w.onRemove) w.onRemove();
			this.controlValues = [];
			this.lastType = this.widgets[0]?.type;
			for (let i = 1; i < this.widgets.length; i++) this.controlValues.push(this.widgets[i].value);
			setTimeout(() => {
				delete this.lastType;
				delete this.controlValues;
			}, 15);
			this.widgets.length = 0;
		}
	}
	onLastDisconnect() {
		this.outputs[0].type = "*";
		this.outputs[0].name = "connect to widget input";
		delete this.outputs[0].widget;
		this._removeWidgets();
	}
};
function getWidgetConfig(slot) {
	return slot.widget?.[CONFIG] ?? (slot.widget?.[GET_CONFIG])?.() ?? ["*", {}];
}
function getConfig(widgetName) {
	const { nodeData } = this.constructor;
	return nodeData?.input?.required?.[widgetName] ?? nodeData?.input?.optional?.[widgetName];
}
/**
* Convert a widget to an input slot.
* @deprecated Widget to socket conversion is no longer necessary, as they co-exist now.
* @param node The node to convert the widget to an input slot for.
* @param widget The widget to convert to an input slot.
* @returns The input slot that was converted from the widget or undefined if the widget is not found.
* @knipIgnoreUnusedButUsedByCustomNodes
*/
function convertToInput(node, widget) {
	console.warn("Please remove call to convertToInput. Widget to socket conversion is no longer necessary, as they co-exist now.");
	return node.inputs.find((slot) => slot.widget?.name === widget.name);
}
function getWidgetType(config) {
	let type = config[0];
	if (type instanceof Array) type = "COMBO";
	return { type };
}
function setWidgetConfig(slot, config) {
	if (!slot.widget) return;
	if (config) slot.widget[GET_CONFIG] = () => config;
	else delete slot.widget;
	if (!(slot instanceof NodeSlot)) return;
	const graph = slot.node.graph;
	if (!graph) return;
	const link = graph.links[slot.link ?? -1];
	if (!link) return;
	const originNode = graph.getNodeById(link.origin_id);
	if (!originNode || !isPrimitiveNode(originNode)) return;
	if (config) originNode.recreateWidget();
	else if (!app.configuringGraph) {
		originNode.disconnectOutput(0);
		originNode.onLastDisconnect();
	}
}
function mergeIfValid(output, config2, forceUpdate, recreateWidget, config1) {
	if (!config1) config1 = getWidgetConfig(output);
	const customSpec = mergeInputSpec(config1, config2);
	if (customSpec || forceUpdate) {
		if (customSpec) output.widget[CONFIG] = customSpec;
		const widget = recreateWidget?.call(this);
		if (widget) {
			const min = widget.options.min;
			const max = widget.options.max;
			if (min != null && widget.value < min) widget.value = min;
			if (max != null && widget.value > max) widget.value = max;
			widget.callback(widget.value);
		}
	}
	return { customConfig: customSpec?.[1] ?? {} };
}
app.registerExtension({
	name: "Comfy.WidgetInputs",
	async beforeRegisterNodeDef(nodeType, _nodeData) {
		nodeType.prototype.convertWidgetToInput = function() {
			console.warn("Please remove call to convertWidgetToInput. Widget to socket conversion is no longer necessary, as they co-exist now.");
			return false;
		};
		nodeType.prototype.onGraphConfigured = useChainCallback(nodeType.prototype.onGraphConfigured, function() {
			if (!this.inputs) return;
			this.widgets ??= [];
			for (const input of this.inputs) if (input.widget) {
				const name = input.widget.name;
				if (!input.widget[GET_CONFIG]) input.widget[GET_CONFIG] = () => getConfig.call(this, name);
				if (!this.widgets?.find((w) => w.name === name)) this.removeInput(this.inputs.findIndex((i) => i === input));
			}
		});
		nodeType.prototype.onConfigure = useChainCallback(nodeType.prototype.onConfigure, function() {
			if (!app.configuringGraph && this.inputs) {
				for (const input of this.inputs) if (input.widget && !input.widget[GET_CONFIG]) {
					const name = input.widget.name;
					input.widget[GET_CONFIG] = () => getConfig.call(this, name);
				}
			}
		});
		const origOnInputDblClick = nodeType.prototype.onInputDblClick;
		nodeType.prototype.onInputDblClick = function(...[slot, ...args]) {
			const r = origOnInputDblClick?.apply(this, [slot, ...args]);
			const input = this.inputs[slot];
			if (!input.widget) {
				if (!(input.type in ComfyWidgets) && !((input.widget?.[GET_CONFIG])?.()?.[0] instanceof Array)) return r;
			}
			const node = LiteGraph.createNode("PrimitiveNode");
			const graph = app.canvas.graph;
			if (!node || !graph) return r;
			graph?.add(node);
			const pos = [this.pos[0] - node.size[0] - 30, this.pos[1]];
			while (graph.getNodeOnPos(pos[0], pos[1], graph.nodes)) pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
			node.pos = pos;
			node.connect(0, this, slot);
			node.title = input.name;
			return r;
		};
	},
	registerCustomNodes() {
		LiteGraph.registerNodeType("PrimitiveNode", Object.assign(PrimitiveNode, { title: "Primitive" }));
		PrimitiveNode.category = "utils";
	}
});
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.widgetInputs = window.comfyAPI.widgetInputs || {};
window.comfyAPI.widgetInputs.PrimitiveNode = PrimitiveNode;
window.comfyAPI.widgetInputs.getWidgetConfig = getWidgetConfig;
window.comfyAPI.widgetInputs.convertToInput = convertToInput;
window.comfyAPI.widgetInputs.setWidgetConfig = setWidgetConfig;
window.comfyAPI.widgetInputs.mergeIfValid = mergeIfValid;
//#endregion
//#region src/extensions/core/groupNode.ts
var Workflow = {
	InUse: {
		Free: 0,
		Registered: 1,
		InWorkflow: 2
	},
	isInUseGroupNode(name) {
		const id = `${PREFIX}>${name}`;
		if (app.rootGraph.extra?.groupNodes?.[name]) if (app.rootGraph.nodes.find((n) => n.type === id)) return Workflow.InUse.InWorkflow;
		else return Workflow.InUse.Registered;
		return Workflow.InUse.Free;
	},
	storeGroupNode(name, data) {
		let extra = app.rootGraph.extra;
		if (!extra) app.rootGraph.extra = extra = {};
		let groupNodes = extra.groupNodes;
		if (!groupNodes) extra.groupNodes = groupNodes = {};
		groupNodes[name] = data;
	}
};
var GroupNodeBuilder = class {
	nodes;
	nodeData;
	constructor(nodes) {
		this.nodes = nodes;
	}
	async build() {
		const name = await this.getName();
		if (!name) return;
		this.sortNodes();
		this.nodeData = this.getNodeData();
		Workflow.storeGroupNode(name, this.nodeData);
		return {
			name,
			nodeData: this.nodeData
		};
	}
	async getName() {
		const name = await useDialogService().prompt({
			title: t("groupNode.create"),
			message: t("groupNode.enterName"),
			defaultValue: ""
		});
		if (!name) return;
		switch (Workflow.isInUseGroupNode(name)) {
			case Workflow.InUse.InWorkflow:
				useToastStore().addAlert("An in use group node with this name already exists embedded in this workflow, please remove any instances or use a new name.");
				return;
			case Workflow.InUse.Registered:
				if (!confirm("A group node with this name already exists embedded in this workflow, are you sure you want to overwrite it?")) return;
				break;
		}
		return name;
	}
	sortNodes() {
		const nodesInOrder = app.rootGraph.computeExecutionOrder(false);
		this.nodes = this.nodes.map((node) => ({
			index: nodesInOrder.indexOf(node),
			node
		})).sort((a, b) => a.index - b.index || String(a.node.id).localeCompare(String(b.node.id))).map(({ node }) => node);
	}
	getNodeData() {
		const storeLinkTypes = (config) => {
			for (const link of config.links) {
				const type = app.rootGraph.getNodeById(link[4])?.outputs?.[Number(link[1])]?.type;
				if (type !== void 0) link.push(type);
			}
		};
		const storeExternalLinks = (config) => {
			config.external = [];
			for (let i = 0; i < this.nodes.length; i++) {
				const node = this.nodes[i];
				if (!node.outputs?.length) continue;
				for (let slot = 0; slot < node.outputs.length; slot++) {
					let hasExternal = false;
					const output = node.outputs[slot];
					let type = output.type;
					if (!output.links?.length) continue;
					for (const l of output.links) {
						const link = app.rootGraph.links[l];
						if (!link) continue;
						if (type === "*") type = link.type;
						if (!app.canvas.selected_nodes[link.target_id]) {
							hasExternal = true;
							break;
						}
					}
					if (hasExternal) config.external.push([
						i,
						slot,
						String(type)
					]);
				}
			}
		};
		const graph = app.canvas?.graph;
		if (!graph) return {
			nodes: [],
			links: [],
			external: []
		};
		const serialised = serialise(this.nodes, graph);
		const config = JSON.parse(serialised);
		config.external = [];
		storeLinkTypes(config);
		storeExternalLinks(config);
		return config;
	}
};
var GroupNodeConfig = class GroupNodeConfig {
	name;
	nodeData;
	inputCount;
	oldToNewOutputMap;
	newToOldOutputMap;
	oldToNewInputMap;
	oldToNewWidgetMap;
	newToOldWidgetMap;
	primitiveDefs;
	widgetToPrimitive;
	primitiveToWidget;
	nodeInputs;
	outputVisibility;
	nodeDef;
	inputs;
	linksFrom;
	linksTo;
	externalFrom;
	constructor(name, nodeData) {
		this.name = name;
		this.nodeData = nodeData;
		this.getLinks();
		this.inputCount = 0;
		this.oldToNewOutputMap = {};
		this.newToOldOutputMap = {};
		this.oldToNewInputMap = {};
		this.oldToNewWidgetMap = {};
		this.newToOldWidgetMap = {};
		this.primitiveDefs = {};
		this.widgetToPrimitive = {};
		this.primitiveToWidget = {};
		this.nodeInputs = {};
		this.outputVisibility = [];
	}
	async registerType(source = PREFIX) {
		this.nodeDef = {
			output: [],
			output_name: [],
			output_is_list: [],
			output_node: false,
			name: source + ">" + this.name,
			display_name: this.name,
			category: "group nodes" + (">" + source),
			input: { required: {} },
			description: `Group node combining ${this.nodeData.nodes.map((n) => n.type).join(", ")}`,
			python_module: "custom_nodes." + this.name,
			[GROUP]: this
		};
		this.inputs = [];
		const seenInputs = {};
		const seenOutputs = {};
		for (let i = 0; i < this.nodeData.nodes.length; i++) {
			const node = this.nodeData.nodes[i];
			node.index = i;
			this.processNode(node, seenInputs, seenOutputs);
		}
		for (const p of this._convertedToProcess) p();
		this._convertedToProcess = [];
		if (!this.nodeDef) return;
		await app.registerNodeDef(`${PREFIX}>` + this.name, this.nodeDef);
		useNodeDefStore().addNodeDef(this.nodeDef);
	}
	getLinks() {
		this.linksFrom = {};
		this.linksTo = {};
		this.externalFrom = {};
		for (const link of this.nodeData.links) {
			const [sourceNodeId, sourceNodeSlot, targetNodeId, targetNodeSlot] = link;
			if (sourceNodeId == null || sourceNodeSlot == null || targetNodeId == null || targetNodeSlot == null) continue;
			const srcId = Number(sourceNodeId);
			const srcSlot = Number(sourceNodeSlot);
			const tgtId = Number(targetNodeId);
			const tgtSlot = Number(targetNodeSlot);
			if (!this.linksFrom[srcId]) this.linksFrom[srcId] = {};
			if (!this.linksFrom[srcId][srcSlot]) this.linksFrom[srcId][srcSlot] = [];
			this.linksFrom[srcId][srcSlot].push(link);
			if (!this.linksTo[tgtId]) this.linksTo[tgtId] = {};
			this.linksTo[tgtId][tgtSlot] = link;
		}
		if (this.nodeData.external) for (const ext of this.nodeData.external) {
			const nodeIdx = Number(ext[0]);
			const slotIdx = Number(ext[1]);
			const typeVal = ext[2];
			if (typeVal == null) continue;
			if (!this.externalFrom[nodeIdx]) this.externalFrom[nodeIdx] = { [slotIdx]: typeVal };
			else this.externalFrom[nodeIdx][slotIdx] = typeVal;
		}
	}
	processNode(node, seenInputs, seenOutputs) {
		const def = this.getNodeDef(node);
		if (!def) return;
		const inputs = {
			...def.input?.required,
			...def.input?.optional
		};
		this.inputs.push(this.processNodeInputs(node, seenInputs, inputs));
		if (def.output?.length) this.processNodeOutputs(node, seenOutputs, def);
	}
	getNodeDef(node) {
		if (node.type) {
			const def = globalDefs[node.type];
			if (def) return def;
		}
		const nodeIndex = node.index;
		if (nodeIndex == null) return void 0;
		const linksFrom = this.linksFrom[nodeIndex];
		if (node.type === "PrimitiveNode") {
			if (!linksFrom) return;
			let type = linksFrom[0]?.[0]?.[5] ?? null;
			if (type === "COMBO") {
				const source = (node.outputs?.[0])?.widget?.name;
				const nodeIdx = linksFrom[0]?.[0]?.[2];
				if (source && nodeIdx != null) {
					const fromTypeName = this.nodeData.nodes[Number(nodeIdx)]?.type;
					if (fromTypeName) {
						const fromType = globalDefs[fromTypeName];
						const inputType = (fromType?.input?.required?.[source] ?? fromType?.input?.optional?.[source])?.[0];
						type = typeof inputType === "string" || typeof inputType === "number" ? inputType : null;
					}
				}
			}
			return this.primitiveDefs[nodeIndex] = {
				input: { required: { value: [type, {}] } },
				output: [type],
				output_name: [],
				output_is_list: []
			};
		} else if (node.type === "Reroute") {
			const linksTo = this.linksTo[nodeIndex];
			if (linksTo && linksFrom && !this.externalFrom[nodeIndex]?.[0]) return null;
			let config = {};
			let rerouteType = "*";
			if (linksFrom) {
				const links = linksFrom[0] ?? [];
				for (const link of links) {
					const id = link[2];
					const slot = link[3];
					if (id == null || slot == null) continue;
					const targetNode = this.nodeData.nodes[Number(id)];
					const input = targetNode?.inputs?.[Number(slot)];
					if (input?.type && rerouteType === "*") rerouteType = input.type;
					if (input?.widget && targetNode?.type) {
						const targetDef = globalDefs[targetNode.type];
						const targetWidget = targetDef?.input?.required?.[input.widget.name] ?? targetDef?.input?.optional?.[input.widget.name];
						if (targetWidget) {
							const widgetSpec = [targetWidget[0], config];
							config = mergeIfValid({ widget: widgetSpec }, targetWidget, false, void 0, widgetSpec)?.customConfig ?? config;
						}
					}
				}
			} else if (linksTo) {
				const link = linksTo[0];
				if (link) {
					const id = link[0];
					const slot = link[1];
					if (id != null && slot != null) {
						const outputType = this.nodeData.nodes[Number(id)]?.outputs?.[Number(slot)];
						if (outputType && typeof outputType === "object" && "type" in outputType) rerouteType = String(outputType.type ?? "*");
					}
				}
			} else {
				for (const l of this.nodeData.links) if (l[2] === node.index) {
					const linkType = l[5];
					if (linkType != null) rerouteType = String(linkType);
					break;
				}
				if (rerouteType === "*") {
					const t = this.externalFrom[nodeIndex]?.[0];
					if (t) rerouteType = String(t);
				}
			}
			config.forceInput = true;
			return {
				input: { required: { [rerouteType]: [rerouteType, config] } },
				output: [rerouteType],
				output_name: [],
				output_is_list: []
			};
		}
		console.warn("Skipping virtual node " + node.type + " when building group node " + this.name);
	}
	getInputConfig(node, inputName, seenInputs, config, extra) {
		const customConfig = (this.nodeData.config?.[node.index ?? -1])?.input?.[inputName];
		let name = customConfig?.name ?? node.inputs?.find((inp) => inp.name === inputName)?.label ?? inputName;
		let key = name;
		let prefix = "";
		if (node.type === "PrimitiveNode" && node.title || name in seenInputs) {
			prefix = `${node.title ?? node.type} `;
			key = name = `${prefix}${inputName}`;
			if (name in seenInputs) name = `${prefix}${seenInputs[name]} ${inputName}`;
		}
		seenInputs[key] = (seenInputs[key] ?? 1) + 1;
		if (inputName === "seed" || inputName === "noise_seed") {
			if (!extra) extra = {};
			extra.control_after_generate = `${prefix}control_after_generate`;
		}
		if (config[0] === "IMAGEUPLOAD") {
			if (!extra) extra = {};
			const nodeIndex = node.index ?? -1;
			const configOptions = typeof config[1] === "object" && config[1] !== null ? config[1] : {};
			const widgetKey = "widget" in configOptions && typeof configOptions.widget === "string" ? configOptions.widget : "image";
			extra.widget = this.oldToNewWidgetMap[nodeIndex]?.[widgetKey] ?? "image";
		}
		if (extra) {
			const configObj = typeof config[1] === "object" && config[1] ? config[1] : {};
			config = [config[0], {
				...configObj,
				...extra
			}];
		}
		return {
			name,
			config,
			customConfig
		};
	}
	processWidgetInputs(inputs, node, inputNames, seenInputs) {
		const slots = [];
		const converted = /* @__PURE__ */ new Map();
		const nodeIndex = node.index ?? -1;
		const widgetMap = this.oldToNewWidgetMap[nodeIndex] = {};
		for (const inputName of inputNames) {
			const inputSpec = inputs[inputName];
			if (Array.isArray(inputSpec) && inputSpec.length >= 1 && typeof inputSpec[0] === "string" && useWidgetStore().inputIsWidget(inputSpec)) {
				const convertedIndex = node.inputs?.findIndex((inp) => inp.name === inputName && inp.widget?.name === inputName) ?? -1;
				if (convertedIndex > -1) {
					converted.set(convertedIndex, inputName);
					widgetMap[inputName] = null;
				} else {
					const { name, config } = this.getInputConfig(node, inputName, seenInputs, inputs[inputName]);
					if (this.nodeDef?.input?.required) this.nodeDef.input.required[name] = config;
					widgetMap[inputName] = name;
					this.newToOldWidgetMap[name] = {
						node,
						inputName
					};
				}
			} else slots.push(inputName);
		}
		return {
			converted,
			slots
		};
	}
	checkPrimitiveConnection(link, inputName, inputs) {
		const linkSourceIdx = link[0];
		if (linkSourceIdx == null) return;
		if (this.nodeData.nodes[Number(linkSourceIdx)]?.type === "PrimitiveNode") {
			const sourceNodeId = Number(link[0]);
			const targetNodeId = Number(link[2]);
			const primitiveDef = this.primitiveDefs[sourceNodeId];
			if (!primitiveDef) return;
			const targetWidget = inputs[inputName];
			const primitiveConfig = primitiveDef.input.required.value;
			const config = mergeIfValid({ widget: primitiveConfig }, targetWidget, false, void 0, primitiveConfig);
			const inputConfig = inputs[inputName]?.[1];
			primitiveConfig[1] = config?.customConfig ?? inputConfig ? { ...typeof inputConfig === "object" ? inputConfig : {} } : {};
			const widgetName = this.oldToNewWidgetMap[sourceNodeId]?.["value"];
			if (widgetName) {
				const name = widgetName.substring(0, widgetName.length - 6);
				primitiveConfig[1].control_after_generate = true;
				primitiveConfig[1].control_prefix = name;
			}
			let toPrimitive = this.widgetToPrimitive[targetNodeId];
			if (!toPrimitive) toPrimitive = this.widgetToPrimitive[targetNodeId] = {};
			const existing = toPrimitive[inputName];
			if (Array.isArray(existing)) existing.push(sourceNodeId);
			else if (typeof existing === "number") toPrimitive[inputName] = [existing, sourceNodeId];
			else toPrimitive[inputName] = sourceNodeId;
			let toWidget = this.primitiveToWidget[sourceNodeId];
			if (!toWidget) toWidget = this.primitiveToWidget[sourceNodeId] = [];
			toWidget.push({
				nodeId: targetNodeId,
				inputName
			});
		}
	}
	processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs) {
		const nodeIdx = node.index ?? -1;
		this.nodeInputs[nodeIdx] = {};
		for (let i = 0; i < slots.length; i++) {
			const inputName = slots[i];
			if (linksTo[i]) {
				this.checkPrimitiveConnection(linksTo[i], inputName, inputs);
				continue;
			}
			const { name, config, customConfig } = this.getInputConfig(node, inputName, seenInputs, inputs[inputName]);
			this.nodeInputs[nodeIdx][inputName] = name;
			if (customConfig?.visible === false) continue;
			if (this.nodeDef?.input?.required) this.nodeDef.input.required[name] = config;
			inputMap[i] = this.inputCount++;
		}
	}
	processConvertedWidgets(inputs, node, slots, converted, linksTo, inputMap, seenInputs) {
		const convertedSlots = [...converted.keys()].sort().map((k) => converted.get(k));
		for (let i = 0; i < convertedSlots.length; i++) {
			const inputName = convertedSlots[i];
			if (!inputName) continue;
			if (linksTo[slots.length + i]) {
				this.checkPrimitiveConnection(linksTo[slots.length + i], inputName, inputs);
				continue;
			}
			const { name, config } = this.getInputConfig(node, inputName, seenInputs, inputs[inputName], { defaultInput: true });
			if (this.nodeDef?.input?.required) this.nodeDef.input.required[name] = config;
			this.newToOldWidgetMap[name] = {
				node,
				inputName
			};
			const nodeIndex = node.index ?? -1;
			if (!this.oldToNewWidgetMap[nodeIndex]) this.oldToNewWidgetMap[nodeIndex] = {};
			this.oldToNewWidgetMap[nodeIndex][inputName] = name;
			inputMap[slots.length + i] = this.inputCount++;
		}
	}
	_convertedToProcess = [];
	processNodeInputs(node, seenInputs, inputs) {
		const inputMapping = [];
		const inputNames = Object.keys(inputs);
		if (!inputNames.length) return;
		const { converted, slots } = this.processWidgetInputs(inputs, node, inputNames, seenInputs);
		const nodeIndex = node.index ?? -1;
		const linksTo = this.linksTo[nodeIndex] ?? {};
		const inputMap = this.oldToNewInputMap[nodeIndex] = {};
		this.processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs);
		this._convertedToProcess.push(() => this.processConvertedWidgets(inputs, node, slots, converted, linksTo, inputMap, seenInputs));
		return inputMapping;
	}
	processNodeOutputs(node, seenOutputs, def) {
		const nodeIndex = node.index ?? -1;
		const oldToNew = this.oldToNewOutputMap[nodeIndex] = {};
		const defOutput = def.output ?? [];
		for (let outputId = 0; outputId < defOutput.length; outputId++) {
			const hasLink = this.linksFrom[nodeIndex]?.[outputId] && !this.externalFrom[nodeIndex]?.[outputId];
			const customConfig = (this.nodeData.config?.[node.index ?? -1])?.output?.[outputId];
			const visible = customConfig?.visible ?? !hasLink;
			this.outputVisibility.push(visible);
			if (!visible) continue;
			if (this.nodeDef?.output) {
				oldToNew[outputId] = this.nodeDef.output.length;
				this.newToOldOutputMap[this.nodeDef.output.length] = {
					node,
					slot: outputId
				};
				this.nodeDef.output.push(defOutput[outputId]);
				this.nodeDef.output_is_list?.push(def.output_is_list?.[outputId] ?? false);
			}
			let label = customConfig?.name;
			if (!label) {
				const outputVal = defOutput[outputId];
				label = def.output_name?.[outputId] ?? (typeof outputVal === "string" ? outputVal : void 0);
				const output = node.outputs?.find((o) => o.name === label);
				if (output?.label) label = output.label;
			}
			let name = String(label ?? `output_${outputId}`);
			if (name in seenOutputs) {
				const prefix = `${node.title ?? node.type} `;
				name = `${prefix}${label ?? outputId}`;
				if (name in seenOutputs) name = `${prefix}${node.index} ${label ?? outputId}`;
			}
			seenOutputs[name] = 1;
			this.nodeDef?.output_name?.push(name);
		}
	}
	static async registerFromWorkflow(groupNodes, missingNodeTypes) {
		for (const g in groupNodes) {
			const groupData = groupNodes[g];
			let hasMissing = false;
			for (const n of groupData.nodes) if (!n.type || !(n.type in LiteGraph.registered_node_types)) {
				missingNodeTypes.push({
					type: n.type ?? "unknown",
					hint: ` (In group node '${PREFIX}>${g}')`
				});
				missingNodeTypes.push({
					type: `${PREFIX}>` + g,
					action: {
						text: "Remove from workflow",
						callback: (e) => {
							delete groupNodes[g];
							const target = e.target;
							target.textContent = "Removed";
							target.style.pointerEvents = "none";
							target.style.opacity = "0.7";
						}
					}
				});
				hasMissing = true;
			}
			if (hasMissing) continue;
			await new GroupNodeConfig(g, groupData).registerType();
		}
	}
};
var GroupNodeHandler = class GroupNodeHandler {
	node;
	groupData;
	innerNodes = null;
	constructor(node) {
		this.node = node;
		this.groupData = node.constructor?.nodeData?.[GROUP];
		this.node.setInnerNodes = (innerNodes) => {
			this.innerNodes = innerNodes;
			for (let innerNodeIndex = 0; innerNodeIndex < this.innerNodes.length; innerNodeIndex++) {
				const innerNode = this.innerNodes[innerNodeIndex];
				innerNode.graph ??= this.node.graph;
				for (const w of innerNode.widgets ?? []) if (w.type === "converted-widget") w.serializeValue = w.origSerializeValue;
				innerNode.index = innerNodeIndex;
				innerNode.getInputNode = (slot) => {
					const nodeIdx = innerNode.index ?? 0;
					const externalSlot = this.groupData.oldToNewInputMap[nodeIdx]?.[slot];
					if (externalSlot != null) return this.node.getInputNode(externalSlot);
					const innerLink = this.groupData.linksTo[nodeIdx]?.[slot];
					if (!innerLink) return null;
					const linkSrcIdx = innerLink[0];
					if (linkSrcIdx == null) return null;
					const inputNode = innerNodes[Number(linkSrcIdx)];
					if (inputNode.type === "PrimitiveNode") return null;
					return inputNode;
				};
				innerNode.getInputLink = (slot) => {
					const nodeIdx = innerNode.index ?? 0;
					const externalSlot = this.groupData.oldToNewInputMap[nodeIdx]?.[slot];
					if (externalSlot != null) {
						const linkId = this.node.inputs[externalSlot].link;
						if (linkId == null) return null;
						const existingLink = app.rootGraph.links[linkId];
						if (!existingLink) return null;
						return {
							...existingLink,
							target_id: innerNode.id,
							target_slot: +slot
						};
					}
					const innerLink = this.groupData.linksTo[nodeIdx]?.[slot];
					if (!innerLink) return null;
					const linkSrcIdx = innerLink[0];
					if (linkSrcIdx == null) return null;
					return {
						origin_id: innerNodes[Number(linkSrcIdx)].id,
						origin_slot: innerLink[1],
						target_id: innerNode.id,
						target_slot: +slot
					};
				};
			}
		};
		this.node.updateLink = (link) => {
			link = { ...link };
			const output = this.groupData.newToOldOutputMap[link.origin_slot];
			if (!output || !this.innerNodes) return null;
			const nodeIdx = output.node.index ?? 0;
			let innerNode = this.innerNodes[nodeIdx];
			let l;
			while (innerNode?.type === "Reroute") {
				l = innerNode.getInputLink(0);
				innerNode = innerNode.getInputNode(0);
			}
			if (!innerNode) return null;
			if (l && GroupNodeHandler.isGroupNode(innerNode) && innerNode.updateLink) return innerNode.updateLink(l);
			link.origin_id = innerNode.id;
			link.origin_slot = l?.origin_slot ?? output.slot;
			return link;
		};
		/** @internal Used to flatten the subgraph before execution. Recursive; call with no args. */
		this.node.getInnerNodes = (computedNodeDtos, subgraphNodePath = [], nodes = [], visited = /* @__PURE__ */ new Set()) => {
			if (visited.has(this.node)) throw new Error("RecursionError: while flattening subgraph");
			visited.add(this.node);
			if (!this.innerNodes) {
				const createdNodes = this.groupData.nodeData.nodes.map((n, i) => {
					if (!n.type) return null;
					const innerNode = LiteGraph.createNode(n.type);
					if (!innerNode) return null;
					innerNode.configure(n);
					innerNode.id = `${this.node.id}:${i}`;
					innerNode.graph = this.node.graph;
					return innerNode;
				}).filter((n) => n !== null);
				this.node.setInnerNodes?.(createdNodes);
			}
			this.updateInnerWidgets();
			const subgraphInstanceIdPath = [...subgraphNodePath, this.node.id];
			const subgraphNode = this.node.graph?.getNodeById(subgraphNodePath.at(-1)) ?? void 0;
			for (const node of this.innerNodes ?? []) {
				node.graph ??= this.node.graph;
				const currentId = String(node.id);
				node.id = currentId.split(":").at(-1);
				const aVeryRealNode = new ExecutableGroupNodeChildDTO(node, subgraphInstanceIdPath, computedNodeDtos, subgraphNode);
				node.id = currentId;
				aVeryRealNode.groupNodeHandler = this;
				nodes.push(aVeryRealNode);
			}
			return nodes;
		};
		this.node.recreate = async () => {
			const id = this.node.id;
			const sz = this.node.size;
			const nodes = this.node.convertToNodes?.();
			if (!nodes) return null;
			const groupNode = LiteGraph.createNode(this.node.type);
			if (!groupNode) return null;
			groupNode.id = id;
			groupNode.setInnerNodes?.(nodes);
			const handler = GroupNodeHandler.getHandler(groupNode);
			handler?.populateWidgets();
			app.rootGraph.add(groupNode);
			groupNode.setSize?.([Math.max(groupNode.size[0], sz[0]), Math.max(groupNode.size[1], sz[1])]);
			const nodeData = new GroupNodeBuilder(nodes).getNodeData();
			if (handler) {
				handler.groupData.nodeData.links = nodeData.links;
				handler.replaceNodes(nodes);
			}
			return groupNode;
		};
		this.node.convertToNodes = () => {
			const addInnerNodes = () => {
				const c = { ...this.groupData.nodeData };
				c.nodes = [...c.nodes];
				const innerNodes = this.node.getInnerNodes?.();
				const ids = [];
				for (let i = 0; i < c.nodes.length; i++) {
					let id = innerNodes?.[i]?.id;
					if (id == null || typeof id === "number" && isNaN(id)) id = void 0;
					else ids.push(id);
					c.nodes[i] = {
						...c.nodes[i],
						id
					};
				}
				deserialiseAndCreate(JSON.stringify(c), app.canvas);
				const [x, y] = this.node.pos;
				let top;
				let left;
				const selectedIds = ids.length ? ids : Object.keys(app.canvas.selected_nodes);
				const newNodes = [];
				for (let i = 0; i < selectedIds.length; i++) {
					const id = selectedIds[i];
					const newNode = app.rootGraph.getNodeById(id);
					const innerNode = innerNodes?.[i];
					if (!newNode) continue;
					newNodes.push(newNode);
					if (left == null || newNode.pos[0] < left) left = newNode.pos[0];
					if (top == null || newNode.pos[1] < top) top = newNode.pos[1];
					if (!newNode.widgets || !innerNode) continue;
					const map = this.groupData.oldToNewWidgetMap[innerNode.index ?? 0];
					if (map) {
						const widgets = Object.keys(map);
						for (const oldName of widgets) {
							const newName = map[oldName];
							if (!newName) continue;
							const widgetIndex = this.node.widgets?.findIndex((w) => w.name === newName) ?? -1;
							if (widgetIndex === -1) continue;
							if (innerNode.type === "PrimitiveNode") for (let i = 0; i < newNode.widgets.length; i++) {
								const srcWidget = this.node.widgets?.[widgetIndex + i];
								if (srcWidget) newNode.widgets[i].value = srcWidget.value;
							}
							else {
								const outerWidget = this.node.widgets?.[widgetIndex];
								const newWidget = newNode.widgets.find((w) => w.name === oldName);
								if (!newWidget || !outerWidget) continue;
								newWidget.value = outerWidget.value;
								const linkedWidgets = outerWidget.linkedWidgets ?? [];
								for (let w = 0; w < linkedWidgets.length; w++) {
									const newLinked = newWidget.linkedWidgets?.[w];
									if (newLinked && linkedWidgets[w]) newLinked.value = linkedWidgets[w].value;
								}
							}
						}
					}
				}
				for (const newNode of newNodes) {
					newNode.pos[0] -= (left ?? 0) - x;
					newNode.pos[1] -= (top ?? 0) - y;
				}
				return {
					newNodes,
					selectedIds
				};
			};
			const reconnectInputs = (selectedIds) => {
				for (const innerNodeIndex in this.groupData.oldToNewInputMap) {
					const id = selectedIds[Number(innerNodeIndex)];
					const newNode = app.rootGraph.getNodeById(id);
					if (!newNode) continue;
					const map = this.groupData.oldToNewInputMap[Number(innerNodeIndex)];
					for (const innerInputId in map) {
						const groupSlotId = map[Number(innerInputId)];
						if (groupSlotId == null) continue;
						const slot = node.inputs[groupSlotId];
						if (slot.link == null) continue;
						const link = app.rootGraph.links[slot.link];
						if (!link) continue;
						app.rootGraph.getNodeById(link.origin_id)?.connect(link.origin_slot, newNode, +innerInputId);
					}
				}
			};
			const reconnectOutputs = (selectedIds) => {
				for (let groupOutputId = 0; groupOutputId < node.outputs?.length; groupOutputId++) {
					const output = node.outputs[groupOutputId];
					if (!output.links) continue;
					const links = [...output.links];
					for (const l of links) {
						const slot = this.groupData.newToOldOutputMap[groupOutputId];
						if (!slot) continue;
						const link = app.rootGraph.links[l];
						if (!link) continue;
						const targetNode = app.rootGraph.getNodeById(link.target_id);
						const newNode = app.rootGraph.getNodeById(selectedIds[slot.node.index ?? 0]);
						if (targetNode) newNode?.connect(slot.slot, targetNode, link.target_slot);
					}
				}
			};
			app.canvas.emitBeforeChange();
			try {
				const { newNodes, selectedIds } = addInnerNodes();
				reconnectInputs(selectedIds);
				reconnectOutputs(selectedIds);
				app.rootGraph.remove(this.node);
				return newNodes;
			} finally {
				app.canvas.emitAfterChange();
			}
		};
		const getExtraMenuOptions = this.node.getExtraMenuOptions;
		const handlerNode = this.node;
		this.node.getExtraMenuOptions = function(_canvas, options) {
			getExtraMenuOptions?.call(this, _canvas, options);
			let optionIndex = options.findIndex((o) => o?.content === "Outputs");
			if (optionIndex === -1) optionIndex = options.length;
			else optionIndex++;
			options.splice(optionIndex, 0, null, {
				content: "Convert to nodes",
				callback: async () => {
					const convertFn = handlerNode.convertToNodes;
					return convertFn?.();
				}
			}, {
				content: "Manage Group Node",
				callback: () => manageGroupNodes(this.type)
			});
			return [];
		};
		const onDrawTitleBox = this.node.onDrawTitleBox;
		this.node.onDrawTitleBox = function(ctx, height, size, scale) {
			onDrawTitleBox?.call(this, ctx, height, size, scale);
			const fill = ctx.fillStyle;
			ctx.beginPath();
			ctx.rect(11, -height + 11, 2, 2);
			ctx.rect(14, -height + 11, 2, 2);
			ctx.rect(17, -height + 11, 2, 2);
			ctx.rect(11, -height + 14, 2, 2);
			ctx.rect(14, -height + 14, 2, 2);
			ctx.rect(17, -height + 14, 2, 2);
			ctx.rect(11, -height + 17, 2, 2);
			ctx.rect(14, -height + 17, 2, 2);
			ctx.rect(17, -height + 17, 2, 2);
			ctx.fillStyle = this.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
			ctx.fill();
			ctx.fillStyle = fill;
		};
		const onDrawForeground = node.onDrawForeground;
		const groupData = this.groupData.nodeData;
		node.onDrawForeground = function(ctx, canvas, canvasElement) {
			onDrawForeground?.call(this, ctx, canvas, canvasElement);
			const progressState = useExecutionStore().nodeProgressStates[this.id];
			if (progressState && progressState.state === "running" && this.runningInternalNodeId !== null) {
				const nodeIdx = typeof this.runningInternalNodeId === "number" ? this.runningInternalNodeId : parseInt(String(this.runningInternalNodeId), 10);
				const n = groupData.nodes[nodeIdx];
				if (!n) return;
				const message = `Running ${n.title || n.type} (${this.runningInternalNodeId}/${groupData.nodes.length})`;
				ctx.save();
				ctx.font = "12px sans-serif";
				const sz = ctx.measureText(message);
				ctx.fillStyle = node.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
				ctx.beginPath();
				ctx.roundRect(0, -LiteGraph.NODE_TITLE_HEIGHT - 20, sz.width + 12, 20, 5);
				ctx.fill();
				ctx.fillStyle = "#fff";
				ctx.fillText(message, 6, -LiteGraph.NODE_TITLE_HEIGHT - 6);
				ctx.restore();
			}
		};
		const onExecutionStart = this.node.onExecutionStart;
		this.node.onExecutionStart = function() {
			this.resetExecution = true;
			return onExecutionStart?.call(this);
		};
		const onNodeCreated = this.node.onNodeCreated;
		const handlerGroupData = this.groupData;
		this.node.onNodeCreated = function() {
			if (!this.widgets) return;
			const config = handlerGroupData.nodeData.config;
			if (config) for (const n in config) {
				const inputs = config[n]?.input;
				if (!inputs) continue;
				for (const w in inputs) {
					if (inputs[w]?.visible !== false) continue;
					const widgetName = handlerGroupData.oldToNewWidgetMap[Number(n)]?.[w];
					const widget = this.widgets.find((wg) => wg.name === widgetName);
					if (widget) {
						widget.hidden = true;
						widget.computeSize = () => [0, -4];
					}
				}
			}
			return onNodeCreated?.call(this);
		};
		const handleEvent = (type, getId, getEvent) => {
			const handler = ({ detail }) => {
				const id = getId(detail);
				if (!id) return;
				if (app.rootGraph.getNodeById(id)) return;
				const innerNodeIndex = this.innerNodes?.findIndex((n) => n.id == id) ?? -1;
				if (innerNodeIndex > -1) {
					this.node.runningInternalNodeId = innerNodeIndex;
					api.dispatchCustomEvent(type, getEvent(detail, `${this.node.id}`, this.node));
				}
			};
			api.addEventListener(type, handler);
			return handler;
		};
		const executing = handleEvent("executing", (d) => typeof d === "string" ? d : void 0, (_d, id) => id);
		const executed = handleEvent("executed", (d) => typeof d === "object" ? d?.display_node || d?.node : void 0, (d, id, node) => ({
			...typeof d === "object" ? d : {},
			node: id,
			display_node: id,
			merge: !node.resetExecution
		}));
		const onRemoved = node.onRemoved;
		this.node.onRemoved = function() {
			onRemoved?.call(this);
			api.removeEventListener("executing", executing);
			api.removeEventListener("executed", executed);
		};
		this.node.refreshComboInNode = (defs) => {
			for (const widgetName in this.groupData.newToOldWidgetMap) {
				const widget = this.node.widgets?.find((w) => w.name === widgetName);
				if (widget?.type === "combo") {
					const old = this.groupData.newToOldWidgetMap[widgetName];
					if (!old.node.type) continue;
					const def = defs[old.node.type];
					const input = def?.input?.required?.[old.inputName] ?? def?.input?.optional?.[old.inputName];
					if (!input) continue;
					widget.options.values = input[0];
					const values = widget.options.values;
					if (old.inputName !== "image" && !values.includes(widget.value)) {
						widget.value = values[0];
						widget.callback?.(widget.value);
					}
				}
			}
		};
	}
	updateInnerWidgets() {
		if (!this.innerNodes) return;
		for (const newWidgetName in this.groupData.newToOldWidgetMap) {
			const newWidget = this.node.widgets?.find((w) => w.name === newWidgetName);
			if (!newWidget) continue;
			const newValue = newWidget.value;
			const old = this.groupData.newToOldWidgetMap[newWidgetName];
			const nodeIdx = old.node.index ?? 0;
			const innerNode = this.innerNodes[nodeIdx];
			if (!innerNode) continue;
			if (innerNode.type === "PrimitiveNode") {
				innerNode.primitiveValue = newValue;
				const primitiveLinked = this.groupData.primitiveToWidget[nodeIdx];
				for (const linked of primitiveLinked ?? []) {
					const linkedNodeId = typeof linked.nodeId === "number" ? linked.nodeId : Number(linked.nodeId);
					const widget = this.innerNodes[linkedNodeId]?.widgets?.find((w) => w.name === linked.inputName);
					if (widget) widget.value = newValue;
				}
				continue;
			} else if (innerNode.type === "Reroute") {
				const rerouteLinks = this.groupData.linksFrom[nodeIdx];
				if (rerouteLinks) for (const [, , targetNodeId, targetSlot] of rerouteLinks[0] ?? []) {
					if (targetNodeId == null || targetSlot == null) continue;
					const targetNode = this.innerNodes[Number(targetNodeId)];
					if (!targetNode) continue;
					const input = targetNode.inputs?.[Number(targetSlot)];
					if (input?.widget) {
						const widgetName = input.widget.name;
						const widget = targetNode.widgets?.find((w) => w.name === widgetName);
						if (widget) widget.value = newValue;
					}
				}
			}
			const widget = innerNode.widgets?.find((w) => w.name === old.inputName);
			if (widget) widget.value = newValue;
		}
	}
	populatePrimitive(_node, nodeId, oldName) {
		const primitiveId = this.groupData.widgetToPrimitive[nodeId]?.[oldName];
		if (primitiveId == null) return false;
		const targetWidgetName = this.groupData.oldToNewWidgetMap[Array.isArray(primitiveId) ? primitiveId[0] : primitiveId]?.["value"];
		if (!targetWidgetName) return false;
		const targetWidgetIndex = this.node.widgets?.findIndex((w) => w.name === targetWidgetName) ?? -1;
		if (targetWidgetIndex > -1 && this.innerNodes) {
			const primIdx = Array.isArray(primitiveId) ? primitiveId[0] : primitiveId;
			const primitiveNode = this.innerNodes[primIdx];
			if (!primitiveNode?.widgets) return true;
			let len = primitiveNode.widgets.length;
			if (len - 1 !== (this.node.widgets?.[targetWidgetIndex]?.linkedWidgets?.length ?? 0)) len = 1;
			for (let i = 0; i < len; i++) {
				const targetWidget = this.node.widgets?.[targetWidgetIndex + i];
				const srcWidget = primitiveNode.widgets[i];
				if (targetWidget && srcWidget) targetWidget.value = srcWidget.value;
			}
		}
		return true;
	}
	populateReroute(node, nodeId, map) {
		if (node.type !== "Reroute") return;
		const link = this.groupData.linksFrom[nodeId]?.[0]?.[0];
		if (!link) return;
		const targetNodeId = link[2];
		const targetNodeSlot = link[3];
		if (targetNodeId == null || targetNodeSlot == null) return;
		const targetNode = this.groupData.nodeData.nodes[Number(targetNodeId)];
		const inputs = targetNode?.inputs;
		if (!inputs?.[Number(targetNodeSlot)]?.widget) return;
		const offset = (inputs?.length ?? 0) - (targetNode?.widgets_values?.length ?? 0);
		const v = targetNode?.widgets_values?.[Number(targetNodeSlot) - offset];
		if (v == null) return;
		const widgetName = Object.values(map)[0];
		const widget = this.node.widgets?.find((w) => w.name === widgetName);
		if (widget) widget.value = v;
	}
	populateWidgets() {
		if (!this.node.widgets) return;
		for (let nodeId = 0; nodeId < this.groupData.nodeData.nodes.length; nodeId++) {
			const node = this.groupData.nodeData.nodes[nodeId];
			const map = this.groupData.oldToNewWidgetMap[nodeId] ?? {};
			const widgets = Object.keys(map);
			if (!node.widgets_values?.length) {
				this.populateReroute(node, nodeId, map);
				continue;
			}
			let linkedShift = 0;
			for (let i = 0; i < widgets.length; i++) {
				const oldName = widgets[i];
				const newName = map[oldName];
				const widgetIndex = this.node.widgets.findIndex((w) => w.name === newName);
				const mainWidget = this.node.widgets[widgetIndex];
				if (this.populatePrimitive(node, nodeId, oldName) || widgetIndex === -1) {
					const innerWidget = this.innerNodes?.[nodeId]?.widgets?.find((w) => w.name === oldName);
					linkedShift += innerWidget?.linkedWidgets?.length ?? 0;
				}
				if (widgetIndex === -1) continue;
				mainWidget.value = node.widgets_values?.[i + linkedShift];
				const linkedWidgets = mainWidget.linkedWidgets ?? [];
				for (let w = 0; w < linkedWidgets.length; w++) this.node.widgets[widgetIndex + w + 1].value = node.widgets_values?.[i + ++linkedShift];
			}
		}
	}
	replaceNodes(nodes) {
		let top;
		let left;
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i];
			if (left == null || node.pos[0] < left) left = node.pos[0];
			if (top == null || node.pos[1] < top) top = node.pos[1];
			this.linkOutputs(node, i);
			app.rootGraph.remove(node);
			node.id = `${this.node.id}:${i}`;
		}
		this.linkInputs();
		this.node.pos = [left ?? 0, top ?? 0];
	}
	linkOutputs(originalNode, nodeId) {
		if (!originalNode.outputs) return;
		for (const output of originalNode.outputs) {
			if (!output.links) continue;
			const links = [...output.links];
			for (const l of links) {
				const link = app.rootGraph.links[l];
				if (!link) continue;
				const targetNode = app.rootGraph.getNodeById(link.target_id);
				const newSlot = this.groupData.oldToNewOutputMap[nodeId]?.[link.origin_slot];
				if (newSlot != null && targetNode) this.node.connect(newSlot, targetNode, link.target_slot);
			}
		}
	}
	linkInputs() {
		for (const link of this.groupData.nodeData.links ?? []) {
			const [, originSlot, targetId, targetSlot, actualOriginId] = link;
			if (actualOriginId == null || typeof actualOriginId === "object") continue;
			const originNode = app.rootGraph.getNodeById(actualOriginId);
			if (!originNode) continue;
			if (targetId == null || targetSlot == null) continue;
			const mappedSlot = this.groupData.oldToNewInputMap[Number(targetId)]?.[Number(targetSlot)];
			if (mappedSlot == null) continue;
			if (typeof originSlot === "number" || typeof originSlot === "string") originNode.connect(originSlot, this.node.id, mappedSlot);
		}
	}
	static getGroupData(node) {
		if (typeof node === "function") return node.nodeData?.[GROUP];
		const instanceData = node.nodeData;
		if (instanceData?.[GROUP]) return instanceData[GROUP];
		return (node.constructor?.nodeData)?.[GROUP];
	}
	static getHandler(node) {
		let handler = node[GROUP];
		if (!handler && GroupNodeHandler.isGroupNode(node)) {
			handler = new GroupNodeHandler(node);
			node[GROUP] = handler;
		}
		return handler;
	}
	static isGroupNode(node) {
		return !!node.constructor?.nodeData?.[GROUP];
	}
	static async fromNodes(nodes) {
		const builder = new GroupNodeBuilder(nodes);
		const res = await builder.build();
		if (!res) return;
		const { name, nodeData } = res;
		await new GroupNodeConfig(name, nodeData).registerType();
		const groupNode = LiteGraph.createNode(`${PREFIX}>${name}`);
		if (!groupNode) return;
		groupNode.setInnerNodes?.(builder.nodes);
		const handler = GroupNodeHandler.getHandler(groupNode);
		handler?.populateWidgets();
		app.rootGraph.add(groupNode);
		handler?.replaceNodes(builder.nodes);
		return groupNode;
	}
};
var replaceLegacySeparators = (nodes) => {
	for (const node of nodes) if (typeof node.type === "string" && node.type.startsWith("workflow/")) node.type = node.type.replace(/^workflow\//, `${PREFIX}>`);
};
/**
* Convert selected nodes to a group node
* @throws {Error} if no nodes are selected
* @throws {Error} if a group node is already selected
* @throws {Error} if a group node is selected
*
* The context menu item should not be available if any of the above conditions are met.
* The error is automatically handled by the commandStore when the command is executed.
*/
async function convertSelectedNodesToGroupNode() {
	const nodes = Object.values(app.canvas.selected_nodes ?? {});
	if (nodes.length === 0) throw new Error("No nodes selected");
	if (nodes.length === 1) throw new Error("Please select multiple nodes to convert to group node");
	for (const node of nodes) {
		if (node instanceof SubgraphNode) throw new Error("Selected nodes contain a subgraph node");
		if (GroupNodeHandler.isGroupNode(node)) throw new Error("Selected nodes contain a group node");
	}
	return await GroupNodeHandler.fromNodes(nodes);
}
var convertDisabled = (selected) => selected.length < 2 || !!selected.find((n) => GroupNodeHandler.isGroupNode(n));
function ungroupSelectedGroupNodes() {
	const nodes = Object.values(app.canvas.selected_nodes ?? {});
	for (const node of nodes) if (GroupNodeHandler.isGroupNode(node)) node.convertToNodes?.();
}
function manageGroupNodes(type) {
	new ManageGroupDialog(app).show(type);
}
var id = "Comfy.GroupNode";
/**
* Global node definitions cache, populated and mutated by extension callbacks.
*
* **Initialization**: Set by `addCustomNodeDefs` during extension initialization.
* This callback runs early in the app lifecycle, before any code that reads
* `globalDefs` is executed.
*
* **Mutation**: `refreshComboInNodes` merges updated definitions into this object
* when combo options are refreshed (e.g., after model files change).
*
* **Usage Notes**:
* - Functions reading `globalDefs` (e.g., `getNodeDef`, `checkPrimitiveConnection`)
*   must only be called after `addCustomNodeDefs` has run.
* - Not thread-safe; assumes single-threaded JS execution model.
* - The object reference is stable after initialization; only contents are mutated.
*/
var globalDefs;
var ext = {
	name: id,
	commands: [
		{
			id: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
			label: "Convert selected nodes to group node",
			icon: "pi pi-sitemap",
			versionAdded: "1.3.17",
			function: () => convertSelectedNodesToGroupNode()
		},
		{
			id: "Comfy.GroupNode.UngroupSelectedGroupNodes",
			label: "Ungroup selected group nodes",
			icon: "pi pi-sitemap",
			versionAdded: "1.3.17",
			function: () => ungroupSelectedGroupNodes()
		},
		{
			id: "Comfy.GroupNode.ManageGroupNodes",
			label: "Manage group nodes",
			icon: "pi pi-cog",
			versionAdded: "1.3.17",
			function: (...args) => manageGroupNodes(args[0])
		}
	],
	keybindings: [{
		commandId: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
		combo: {
			alt: true,
			key: "g"
		}
	}, {
		commandId: "Comfy.GroupNode.UngroupSelectedGroupNodes",
		combo: {
			alt: true,
			shift: true,
			key: "G"
		}
	}],
	getCanvasMenuItems(canvas) {
		const items = [];
		const convertEnabled = !convertDisabled(Object.values(canvas.selected_nodes ?? {}));
		items.push({
			content: `Convert to Group Node (Deprecated)`,
			disabled: !convertEnabled,
			callback: async () => convertSelectedNodesToGroupNode()
		});
		const groups = canvas.graph?.extra?.groupNodes;
		const manageDisabled = !groups || !Object.keys(groups).length;
		items.push({
			content: `Manage Group Nodes`,
			disabled: manageDisabled,
			callback: () => manageGroupNodes()
		});
		return items;
	},
	getNodeMenuItems(node) {
		if (GroupNodeHandler.isGroupNode(node)) return [];
		return [{
			content: `Convert to Group Node (Deprecated)`,
			disabled: !!convertDisabled(Object.values(app.canvas.selected_nodes ?? {})),
			callback: async () => convertSelectedNodesToGroupNode()
		}];
	},
	async beforeConfigureGraph(graphData, missingNodeTypes) {
		const nodes = graphData?.extra?.groupNodes;
		if (nodes) {
			replaceLegacySeparators(graphData.nodes);
			await GroupNodeConfig.registerFromWorkflow(nodes, missingNodeTypes);
		}
	},
	addCustomNodeDefs(defs) {
		globalDefs = defs;
	},
	nodeCreated(node) {
		if (GroupNodeHandler.isGroupNode(node)) {
			node[GROUP] = new GroupNodeHandler(node);
			const handler = GroupNodeHandler.getHandler(node);
			if (node.title && handler?.groupData?.nodeData) Workflow.storeGroupNode(node.title, handler.groupData.nodeData);
		}
	},
	async refreshComboInNodes(defs) {
		Object.assign(globalDefs, defs);
		const nodes = app.rootGraph.extra?.groupNodes;
		if (nodes) await GroupNodeConfig.registerFromWorkflow(nodes, []);
	}
};
app.registerExtension(ext);
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNode = window.comfyAPI.groupNode || {};
window.comfyAPI.groupNode.GroupNodeConfig = GroupNodeConfig;
window.comfyAPI.groupNode.GroupNodeHandler = GroupNodeHandler;
//#endregion
export { setWidgetConfig as a, mergeIfValid as i, GroupNodeHandler as n, getWidgetConfig as r, GroupNodeConfig as t };

//# sourceMappingURL=groupNode-41AecsYq.js.map