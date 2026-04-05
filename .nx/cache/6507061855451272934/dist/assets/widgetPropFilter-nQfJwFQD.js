import "./rolldown-runtime-DBfy44LZ.js";
//#region src/utils/widgetPropFilter.ts
/**
* Widget prop filtering utilities
* Filters out style-related and customization props from PrimeVue components
* to maintain consistent widget appearance across the application
*/
var STANDARD_EXCLUDED_PROPS = [
	"style",
	"class",
	"dt",
	"pt",
	"ptOptions",
	"unstyled"
];
var INPUT_EXCLUDED_PROPS = [
	...STANDARD_EXCLUDED_PROPS,
	"inputClass",
	"inputStyle",
	"read_only"
];
var PANEL_EXCLUDED_PROPS = [
	...STANDARD_EXCLUDED_PROPS,
	"panelClass",
	"panelStyle",
	"overlayClass"
];
var GALLERIA_EXCLUDED_PROPS = [
	...STANDARD_EXCLUDED_PROPS,
	"thumbnailsPosition",
	"verticalThumbnailViewPortHeight",
	"indicatorsPosition",
	"maskClass",
	"containerStyle",
	"containerClass",
	"galleriaClass"
];
var BADGE_EXCLUDED_PROPS = [...STANDARD_EXCLUDED_PROPS, "badgeClass"];
/**
* Filters widget props by excluding specified properties
* @param props - The props object to filter
* @param excludeList - List of property names to exclude
* @returns Filtered props object
*/
function filterWidgetProps(props, excludeList) {
	if (!props) return {};
	const filtered = {};
	for (const [key, value] of Object.entries(props)) if (!excludeList.includes(key)) filtered[key] = value;
	return filtered;
}
//#endregion
export { STANDARD_EXCLUDED_PROPS as a, PANEL_EXCLUDED_PROPS as i, GALLERIA_EXCLUDED_PROPS as n, filterWidgetProps as o, INPUT_EXCLUDED_PROPS as r, BADGE_EXCLUDED_PROPS as t };

//# sourceMappingURL=widgetPropFilter-nQfJwFQD.js.map