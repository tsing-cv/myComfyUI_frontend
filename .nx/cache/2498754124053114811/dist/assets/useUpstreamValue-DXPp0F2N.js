import "./rolldown-runtime-DBfy44LZ.js";
import { D as computed } from "./vendor-vue-core-Ba0aGEmU.js";
import { Ot as useWidgetValueStore } from "./api-kFdESQTE.js";
import { C as useCanvasStore } from "./dialogService-ClaKHdWI.js";
//#region src/composables/useUpstreamValue.ts
function useUpstreamValue(getLinkedUpstream, extractValue) {
	const canvasStore = useCanvasStore();
	const widgetValueStore = useWidgetValueStore();
	return computed(() => {
		const upstream = getLinkedUpstream();
		if (!upstream) return void 0;
		const graphId = canvasStore.canvas?.graph?.rootGraph.id;
		if (!graphId) return void 0;
		return extractValue(widgetValueStore.getNodeWidgets(graphId, upstream.nodeId), upstream.outputName);
	});
}
function singleValueExtractor(isValid) {
	return (widgets, outputName) => {
		if (outputName) {
			const matched = widgets.find((w) => w.name === outputName);
			if (matched && isValid(matched.value)) return matched.value;
		}
		const validValues = widgets.map((w) => w.value).filter(isValid);
		return validValues.length === 1 ? validValues[0] : void 0;
	};
}
function isBoundsObject(value) {
	if (typeof value !== "object" || value === null) return false;
	const v = value;
	return typeof v.x === "number" && typeof v.y === "number" && typeof v.width === "number" && typeof v.height === "number";
}
function boundsExtractor() {
	const single = singleValueExtractor(isBoundsObject);
	return (widgets, outputName) => {
		const singleResult = single(widgets, outputName);
		if (singleResult) return singleResult;
		const getNum = (name) => {
			const w = widgets.find((w) => w.name === name);
			return typeof w?.value === "number" ? w.value : void 0;
		};
		const x = getNum("x");
		const y = getNum("y");
		const width = getNum("width");
		const height = getNum("height");
		if (x !== void 0 && y !== void 0 && width !== void 0 && height !== void 0) return {
			x,
			y,
			width,
			height
		};
	};
}
//#endregion
export { singleValueExtractor as n, useUpstreamValue as r, boundsExtractor as t };

//# sourceMappingURL=useUpstreamValue-DXPp0F2N.js.map