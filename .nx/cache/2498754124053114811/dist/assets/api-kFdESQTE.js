const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./authStore-D_v8_OOv.js","./vendor-primevue-Dnp2bJ8y.js","./rolldown-runtime-DBfy44LZ.js","./vendor-vue-core-Ba0aGEmU.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-ClaKHdWI.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-i18n-CQIJzQYM.js","./vendor-sentry-Dn2jSJwd.js","./vendor-vueuse--4MZqvDu.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-B-Ajm1fy.js","./i18n-CEjiKAGw.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-CHCY451S.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-BfoO2Yv1.js","./useErrorHandling-BWjixeIq.js","./useExternalLink-CjbQfKLB.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BHjH2vt1.js","./widget-W78njY6p.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-DKB2Qhsc.js","./widgetTypes-DxLkDLQG.js","./colorUtil-D_gLWYA0.js","./markdownRendererUtil-uFQ2wi0y.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css"])))=>i.map(i=>d[i]);
import { a as __toESM, r as __name } from "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-Dnp2bJ8y.js";
import { D as computed, Dt as reactive, It as toValue, bt as customRef, c as defineStore, kt as ref, l as storeToRefs, wt as markRaw } from "./vendor-vue-core-Ba0aGEmU.js";
import { $ as without, B as trimEnd, M as require_loglevel, Y as toString, it as clamp, ot as remove, st as pull, vt as get } from "./vendor-other-BMn-xt1e.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { $ as until, I as useRafFn, K as promiseTimeout } from "./vendor-vueuse--4MZqvDu.js";
import { t as axios } from "./vendor-axios-B-zaJ78_.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { _ as tupleType, a as arrayType, b as ZodIssueCode, c as enumType, d as nativeEnumType, f as numberType, g as stringType, h as recordType, i as anyType, l as lazyType, o as booleanType, p as objectType, t as fromZodError, u as literalType, v as unionType, y as unknownType } from "./vendor-zod-Dg3yaIzQ.js";
import { r as purify } from "./vendor-markdown-Cwvpr7zF.js";
import { i as encodeStateAsUpdate, n as YMap, r as applyUpdate, t as Doc } from "./vendor-yjs-CLwSweDd.js";
import { t as adjustColor } from "./colorUtil-D_gLWYA0.js";
import { o as t } from "./i18n-CEjiKAGw.js";
import { n as getWidgetStep, t as evaluateInput } from "./widget-W78njY6p.js";
var clientFeatureFlags_default = {
	supports_preview_metadata: true,
	supports_manager_v4_ui: true,
	supports_progress_text_metadata: true
};
//#endregion
//#region src/utils/devFeatureFlagOverride.ts
/**
* Gets a dev-time feature flag override from localStorage.
* Stripped from production builds via import.meta.env.DEV tree-shaking.
*
* Returns undefined (not null) as the "no override" sentinel because
* null is a valid JSON value — JSON.parse('null') returns null.
* Using undefined avoids ambiguity between "no override set" and
* "override explicitly set to null".
*
* Usage in browser console:
*   localStorage.setItem('ff:team_workspaces_enabled', 'true')
*   localStorage.removeItem('ff:team_workspaces_enabled')
*/
function getDevOverride(flagKey) {}
//#endregion
//#region src/lib/litegraph/src/ContextMenu.ts
var ALLOWED_TAGS = [
	"span",
	"b",
	"i",
	"em",
	"strong"
];
var ALLOWED_STYLE_PROPS = new Set([
	"display",
	"color",
	"background-color",
	"padding-left",
	"border-left"
]);
purify.addHook("uponSanitizeAttribute", (_node, data) => {
	if (data.attrName === "style") data.attrValue = data.attrValue.split(";").map((s) => s.trim()).filter((s) => {
		const colonIdx = s.indexOf(":");
		if (colonIdx === -1) return false;
		const prop = s.slice(0, colonIdx).trim().toLowerCase();
		return ALLOWED_STYLE_PROPS.has(prop);
	}).join("; ");
});
function sanitizeMenuHTML(html) {
	return purify.sanitize(html, {
		ALLOWED_TAGS,
		ALLOWED_ATTR: ["style"]
	});
}
/**
* ContextMenu from LiteGUI
*/
var ContextMenu = class ContextMenu {
	options;
	parentMenu;
	root;
	current_submenu;
	lock;
	controller = new AbortController();
	/**
	* @todo Interface for values requires functionality change - currently accepts
	* an array of strings, functions, objects, nulls, or undefined.
	* @param values (allows object { title: "Nice text", callback: function ... })
	* @param options [optional] Some options:\
	* - title: title to show on top of the menu
	* - callback: function to call when an option is clicked, it receives the item information
	* - ignore_item_callbacks: ignores the callback inside the item, it just calls the options.callback
	* - event: you can pass a MouseEvent, this way the ContextMenu appears in that position
	*/
	constructor(values, options) {
		options ||= {};
		this.options = options;
		const parent = options.parentMenu;
		if (parent) {
			if (!(parent instanceof ContextMenu)) {
				console.error("parentMenu must be of class ContextMenu, ignoring it");
				options.parentMenu = void 0;
			} else {
				this.parentMenu = parent;
				this.parentMenu.lock = true;
				this.parentMenu.current_submenu = this;
			}
			if (parent.options?.className === "dark") options.className = "dark";
		}
		const eventClass = options.event ? options.event.constructor.name : null;
		if (eventClass !== "MouseEvent" && eventClass !== "CustomEvent" && eventClass !== "PointerEvent") {
			console.error(`Event passed to ContextMenu is not of type MouseEvent or CustomEvent. Ignoring it. (${eventClass})`);
			options.event = void 0;
		}
		const root = document.createElement("div");
		let classes = "litegraph litecontextmenu litemenubar-panel";
		if (options.className) classes += ` ${options.className}`;
		root.className = classes;
		root.style.minWidth = "100";
		root.style.minHeight = "100";
		const { signal } = this.controller;
		const eventOptions = {
			capture: true,
			signal
		};
		if (!this.parentMenu) document.addEventListener("pointerdown", (e) => {
			if (e.target instanceof Node && !this.containsNode(e.target)) this.close();
		}, eventOptions);
		root.addEventListener("pointerup", (e) => e.preventDefault(), eventOptions);
		root.addEventListener("contextmenu", (e) => {
			if (e.button === 2) e.preventDefault();
		}, eventOptions);
		root.addEventListener("pointerdown", (e) => {
			if (e.button == 2) {
				this.close();
				e.preventDefault();
			}
		}, eventOptions);
		this.root = root;
		if (options.title) {
			const element = document.createElement("div");
			element.className = "litemenu-title";
			element.textContent = options.title;
			root.append(element);
		}
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			let name = Array.isArray(values) ? value : String(i);
			if (typeof name !== "string") name = name != null ? name.content === void 0 ? String(name) : name.content : name;
			this.addItem(name, value, options);
		}
		const root_document = (options.event?.target)?.ownerDocument || document;
		if (root_document.fullscreenElement) root_document.fullscreenElement.append(root);
		else root_document.body.append(root);
		let left = options.left || 0;
		let top = options.top || 0;
		if (options.event) {
			left = options.event.clientX - 10;
			top = options.event.clientY - 10;
			if (options.title) top -= 20;
			if (parent) {
				const rect = parent.root.getBoundingClientRect();
				left = rect.left + rect.width;
			}
			const body_rect = document.body.getBoundingClientRect();
			const root_rect = root.getBoundingClientRect();
			if (body_rect.height == 0) console.error("document.body height is 0. That is dangerous, set html,body { height: 100%; }");
			if (body_rect.width && left > body_rect.width - root_rect.width - 10) left = body_rect.width - root_rect.width - 10;
			if (body_rect.height && top > body_rect.height - root_rect.height - 10) top = body_rect.height - root_rect.height - 10;
		}
		root.style.left = `${left}px`;
		root.style.top = `${top}px`;
		if (LiteGraph.context_menu_scaling && options.scale) root.style.transform = `scale(${Math.round(options.scale * 4) * .25})`;
	}
	/**
	* Checks if {@link node} is inside this context menu or any of its submenus
	* @param node The {@link Node} to check
	* @param visited A set of visited menus to avoid circular references
	* @returns `true` if {@link node} is inside this context menu or any of its submenus
	*/
	containsNode(node, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(this)) return false;
		visited.add(this);
		return this.current_submenu?.containsNode(node, visited) || this.root.contains(node);
	}
	addItem(name, value, options) {
		options ||= {};
		const element = document.createElement("div");
		element.className = "litemenu-entry submenu";
		let disabled = false;
		if (value === null) element.classList.add("separator");
		else {
			const label = name === null ? "" : String(name);
			if (typeof value === "string") element.textContent = label;
			else {
				if (value?.content !== void 0 && /<[a-z][\s\S]*>/i.test(value.content)) element.innerHTML = sanitizeMenuHTML(value.content);
				else element.textContent = value?.title ?? label;
				if (value.disabled) {
					disabled = true;
					element.classList.add("disabled");
					element.setAttribute("aria-disabled", "true");
				}
				if (value.submenu || value.has_submenu) {
					element.classList.add("has_submenu");
					element.setAttribute("aria-haspopup", "true");
					element.setAttribute("aria-expanded", "false");
				}
				if (value.className) element.className += ` ${value.className}`;
			}
			element.value = value;
			element.setAttribute("role", "menuitem");
			if (typeof value === "function") {
				element.dataset["value"] = String(name);
				element.onclick_callback = value;
			} else element.dataset["value"] = String(value);
		}
		this.root.append(element);
		if (!disabled) element.addEventListener("click", inner_onclick);
		if (!disabled && options.autoopen) element.addEventListener("pointerenter", inner_over);
		const setAriaExpanded = () => {
			const entries = this.root.querySelectorAll("div.litemenu-entry.has_submenu");
			if (entries) for (const entry of entries) entry.setAttribute("aria-expanded", "false");
			element.setAttribute("aria-expanded", "true");
		};
		function inner_over(e) {
			const value = this.value;
			if (!value || !value.has_submenu) return;
			inner_onclick.call(this, e);
			setAriaExpanded();
		}
		const that = this;
		function inner_onclick(e) {
			const value = this.value;
			let close_parent = true;
			that.current_submenu?.close(e);
			if (value?.has_submenu || value?.submenu) setAriaExpanded();
			if (options.callback) {
				if (options.callback.call(this, value, options, e, that, options.node) === true) close_parent = false;
			}
			if (typeof value === "object") {
				if (value.callback && !options.ignore_item_callbacks && value.disabled !== true) {
					if (value.callback.call(this, value, options, e, that, options.extra) === true) close_parent = false;
				}
				if (value.submenu) {
					if (!value.submenu.options) throw "ContextMenu submenu needs options";
					new that.constructor(value.submenu.options, {
						callback: value.submenu.callback,
						event: e,
						parentMenu: that,
						ignore_item_callbacks: value.submenu.ignore_item_callbacks,
						title: value.submenu.title,
						extra: value.submenu.extra,
						autoopen: options.autoopen
					});
					close_parent = false;
				}
			}
			if (close_parent && !that.lock) that.close();
		}
		return element;
	}
	close(e, ignore_parent_menu) {
		this.controller.abort();
		this.root.remove();
		if (this.parentMenu && !ignore_parent_menu) {
			this.parentMenu.lock = false;
			this.parentMenu.current_submenu = void 0;
			if (e === void 0) this.parentMenu.close();
			else if (e && !ContextMenu.isCursorOverElement(e, this.parentMenu.root)) ContextMenu.trigger(this.parentMenu.root, `${LiteGraph.pointerevents_method}leave`, e);
		}
		this.current_submenu?.close(e, true);
	}
	/** @deprecated Likely unused, however code search was inconclusive (too many results to check by hand). */
	static trigger(element, event_name, params) {
		const evt = document.createEvent("CustomEvent");
		evt.initCustomEvent(event_name, true, true, params);
		if (element.dispatchEvent) element.dispatchEvent(evt);
		return evt;
	}
	getTopMenu() {
		return this.options.parentMenu ? this.options.parentMenu.getTopMenu() : this;
	}
	getFirstEvent() {
		return this.options.parentMenu ? this.options.parentMenu.getFirstEvent() : this.options.event;
	}
	/** @deprecated Unused. */
	static isCursorOverElement(event, element) {
		const left = event.clientX;
		const top = event.clientY;
		const rect = element.getBoundingClientRect();
		if (!rect) return false;
		if (top > rect.top && top < rect.top + rect.height && left > rect.left && left < rect.left + rect.width) return true;
		return false;
	}
};
//#endregion
//#region src/lib/litegraph/src/types/globalEnums.ts
/** Node slot type - input or output */
var NodeSlotType = /* @__PURE__ */ function(NodeSlotType) {
	NodeSlotType[NodeSlotType["INPUT"] = 1] = "INPUT";
	NodeSlotType[NodeSlotType["OUTPUT"] = 2] = "OUTPUT";
	return NodeSlotType;
}({});
/** Shape that an object will render as - used by nodes and slots */
var RenderShape = /* @__PURE__ */ function(RenderShape) {
	/** Rectangle with square corners */
	RenderShape[RenderShape["BOX"] = 1] = "BOX";
	/** Rounded rectangle */
	RenderShape[RenderShape["ROUND"] = 2] = "ROUND";
	/** Circle is circle */
	RenderShape[RenderShape["CIRCLE"] = 3] = "CIRCLE";
	/** Two rounded corners: top left & bottom right */
	RenderShape[RenderShape["CARD"] = 4] = "CARD";
	/** Slot shape: Arrow */
	RenderShape[RenderShape["ARROW"] = 5] = "ARROW";
	/** Slot shape: Grid */
	RenderShape[RenderShape["GRID"] = 6] = "GRID";
	/** Slot shape: Hollow circle  */
	RenderShape[RenderShape["HollowCircle"] = 7] = "HollowCircle";
	return RenderShape;
}({});
/** Bit flags used to indicate what the pointer is currently hovering over. */
var CanvasItem = /* @__PURE__ */ function(CanvasItem) {
	/** No items / none */
	CanvasItem[CanvasItem["Nothing"] = 0] = "Nothing";
	/** At least one node */
	CanvasItem[CanvasItem["Node"] = 1] = "Node";
	/** At least one group */
	CanvasItem[CanvasItem["Group"] = 2] = "Group";
	/** A reroute (not its path) */
	CanvasItem[CanvasItem["Reroute"] = 4] = "Reroute";
	/** The path of a link */
	CanvasItem[CanvasItem["Link"] = 8] = "Link";
	/** A reroute slot */
	CanvasItem[CanvasItem["RerouteSlot"] = 32] = "RerouteSlot";
	/** A subgraph input or output node */
	CanvasItem[CanvasItem["SubgraphIoNode"] = 64] = "SubgraphIoNode";
	/** A subgraph input or output slot */
	CanvasItem[CanvasItem["SubgraphIoSlot"] = 128] = "SubgraphIoSlot";
	return CanvasItem;
}({});
/** The direction that a link point will flow towards - e.g. horizontal outputs are right by default */
var LinkDirection = /* @__PURE__ */ function(LinkDirection) {
	LinkDirection[LinkDirection["NONE"] = 0] = "NONE";
	LinkDirection[LinkDirection["UP"] = 1] = "UP";
	LinkDirection[LinkDirection["DOWN"] = 2] = "DOWN";
	LinkDirection[LinkDirection["LEFT"] = 3] = "LEFT";
	LinkDirection[LinkDirection["RIGHT"] = 4] = "RIGHT";
	LinkDirection[LinkDirection["CENTER"] = 5] = "CENTER";
	return LinkDirection;
}({});
/** The path calculation that links follow */
var LinkRenderType = /* @__PURE__ */ function(LinkRenderType) {
	LinkRenderType[LinkRenderType["HIDDEN_LINK"] = -1] = "HIDDEN_LINK";
	/** Juts out from the input & output a little @see LinkDirection, then a straight line between them */
	LinkRenderType[LinkRenderType["STRAIGHT_LINK"] = 0] = "STRAIGHT_LINK";
	/** 90° angles, clean and box-like */
	LinkRenderType[LinkRenderType["LINEAR_LINK"] = 1] = "LINEAR_LINK";
	/** Smooth curved links - default */
	LinkRenderType[LinkRenderType["SPLINE_LINK"] = 2] = "SPLINE_LINK";
	return LinkRenderType;
}({});
/** The marker in the middle of a link */
var LinkMarkerShape = /* @__PURE__ */ function(LinkMarkerShape) {
	/** Do not display markers */
	LinkMarkerShape[LinkMarkerShape["None"] = 0] = "None";
	/** Circles (default) */
	LinkMarkerShape[LinkMarkerShape["Circle"] = 1] = "Circle";
	/** Directional arrows */
	LinkMarkerShape[LinkMarkerShape["Arrow"] = 2] = "Arrow";
	return LinkMarkerShape;
}({});
var TitleMode = /* @__PURE__ */ function(TitleMode) {
	TitleMode[TitleMode["NORMAL_TITLE"] = 0] = "NORMAL_TITLE";
	TitleMode[TitleMode["NO_TITLE"] = 1] = "NO_TITLE";
	TitleMode[TitleMode["TRANSPARENT_TITLE"] = 2] = "TRANSPARENT_TITLE";
	TitleMode[TitleMode["AUTOHIDE_TITLE"] = 3] = "AUTOHIDE_TITLE";
	return TitleMode;
}({});
var LGraphEventMode = /* @__PURE__ */ function(LGraphEventMode) {
	LGraphEventMode[LGraphEventMode["ALWAYS"] = 0] = "ALWAYS";
	LGraphEventMode[LGraphEventMode["ON_EVENT"] = 1] = "ON_EVENT";
	LGraphEventMode[LGraphEventMode["NEVER"] = 2] = "NEVER";
	LGraphEventMode[LGraphEventMode["ON_TRIGGER"] = 3] = "ON_TRIGGER";
	LGraphEventMode[LGraphEventMode["BYPASS"] = 4] = "BYPASS";
	return LGraphEventMode;
}({});
var EaseFunction = /* @__PURE__ */ function(EaseFunction) {
	EaseFunction["EASE_IN_OUT_QUAD"] = "easeInOutQuad";
	return EaseFunction;
}({});
/** Bit flags used to indicate what the pointer is currently hovering over. */
var Alignment = /* @__PURE__ */ function(Alignment) {
	/** No items / none */
	Alignment[Alignment["None"] = 0] = "None";
	/** Top */
	Alignment[Alignment["Top"] = 1] = "Top";
	/** Bottom */
	Alignment[Alignment["Bottom"] = 2] = "Bottom";
	/** Vertical middle */
	Alignment[Alignment["Middle"] = 4] = "Middle";
	/** Left */
	Alignment[Alignment["Left"] = 8] = "Left";
	/** Right */
	Alignment[Alignment["Right"] = 16] = "Right";
	/** Horizontal centre */
	Alignment[Alignment["Centre"] = 32] = "Centre";
	/** Top left */
	Alignment[Alignment["TopLeft"] = 9] = "TopLeft";
	/** Top side, horizontally centred */
	Alignment[Alignment["TopCentre"] = 33] = "TopCentre";
	/** Top right */
	Alignment[Alignment["TopRight"] = 17] = "TopRight";
	/** Left side, vertically centred */
	Alignment[Alignment["MidLeft"] = 12] = "MidLeft";
	/** Middle centre */
	Alignment[Alignment["MidCentre"] = 36] = "MidCentre";
	/** Right side, vertically centred */
	Alignment[Alignment["MidRight"] = 20] = "MidRight";
	/** Bottom left */
	Alignment[Alignment["BottomLeft"] = 10] = "BottomLeft";
	/** Bottom side, horizontally centred */
	Alignment[Alignment["BottomCentre"] = 34] = "BottomCentre";
	/** Bottom right */
	Alignment[Alignment["BottomRight"] = 18] = "BottomRight";
	return Alignment;
}({});
/**
* Checks if the bitwise {@link flag} is set in the {@link flagSet}.
* @param flagSet The unknown set of flags - will be checked for the presence of {@link flag}
* @param flag The flag to check for
* @returns `true` if the flag is set, `false` otherwise.
*/
function hasFlag(flagSet, flag) {
	return (flagSet & flag) === flag;
}
//#endregion
//#region src/lib/litegraph/src/measure.ts
/**
* Calculates the distance between two points (2D vector)
* @param a Point a as `x, y`
* @param b Point b as `x, y`
* @returns Distance between point {@link a} & {@link b}
*/
function distance(a, b) {
	return Math.sqrt((b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1]));
}
/**
* Calculates the distance2 (squared) between two points (2D vector).
* Much faster when only comparing distances (closest/furthest point).
* @param x1 Origin point X
* @param y1 Origin point Y
* @param x2 Destination point X
* @param y2 Destination point Y
* @returns Distance2 (squared) between point [{@link x1}, {@link y1}] & [{@link x2}, {@link y2}]
*/
function dist2(x1, y1, x2, y2) {
	return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
/**
* Determines whether a point is inside a rectangle.
*
* Otherwise identical to {@link isInsideRectangle}, it also returns `true` if `x` equals `left` or `y` equals `top`.
* @param x Point x
* @param y Point y
* @param left Rect x
* @param top Rect y
* @param width Rect width
* @param height Rect height
* @returns `true` if the point is inside the rect, otherwise `false`
*/
function isInRectangle(x, y, left, top, width, height) {
	return x >= left && x < left + width && y >= top && y < top + height;
}
/**
* Determines whether a {@link Point} is inside a {@link Rect}.
* @param point The point to check, as `x, y`
* @param rect The rectangle, as `x, y, width, height`
* @returns `true` if the point is inside the rect, otherwise `false`
*/
function isPointInRect(point, rect) {
	return point[0] >= rect[0] && point[0] < rect[0] + rect[2] && point[1] >= rect[1] && point[1] < rect[1] + rect[3];
}
/**
* Determines whether the point represented by {@link x}, {@link y} is inside a {@link Rect}.
* @param x X co-ordinate of the point to check
* @param y Y co-ordinate of the point to check
* @param rect The rectangle, as `x, y, width, height`
* @returns `true` if the point is inside the rect, otherwise `false`
*/
function isInRect(x, y, rect) {
	return x >= rect[0] && x < rect[0] + rect[2] && y >= rect[1] && y < rect[1] + rect[3];
}
/**
* Determines whether a point (`x, y`) is inside a rectangle.
*
* This is the original litegraph implementation.  It returns `false` if `x` is equal to `left`, or `y` is equal to `top`.
* @deprecated
* Use {@link isInRectangle} to match inclusive of top left.
* This function returns a false negative when an integer point (e.g. pixel) is on the leftmost or uppermost edge of a rectangle.
* @param x Point x
* @param y Point y
* @param left Rect x
* @param top Rect y
* @param width Rect width
* @param height Rect height
* @returns `true` if the point is inside the rect, otherwise `false`
*/
function isInsideRectangle(x, y, left, top, width, height) {
	return left < x && left + width > x && top < y && top + height > y;
}
/**
* Determines if two rectangles have any overlap
* @param a Rectangle A as `x, y, width, height`
* @param b Rectangle B as `x, y, width, height`
* @returns `true` if rectangles overlap, otherwise `false`
*/
function overlapBounding(a, b) {
	const aRight = a[0] + a[2];
	const aBottom = a[1] + a[3];
	const bRight = b[0] + b[2];
	const bBottom = b[1] + b[3];
	return a[0] > bRight || a[1] > bBottom || aRight < b[0] || aBottom < b[1] ? false : true;
}
/**
* Returns the centre of a rectangle.
* @param rect The rectangle, as `x, y, width, height`
* @returns The centre of the rectangle, as `x, y`
*/
function getCentre(rect) {
	return [rect[0] + rect[2] * .5, rect[1] + rect[3] * .5];
}
/**
* Determines if rectangle {@link a} contains the centre point of rectangle {@link b}.
* @param a Container rectangle A as `x, y, width, height`
* @param b Sub-rectangle B as `x, y, width, height`
* @returns `true` if {@link a} contains most of {@link b}, otherwise `false`
*/
function containsCentre(a, b) {
	return isInRect(b[0] + b[2] * .5, b[1] + b[3] * .5, a);
}
/**
* Determines if rectangle {@link a} wholly contains rectangle {@link b}.
* @param a Container rectangle A as `x, y, width, height`
* @param b Sub-rectangle B as `x, y, width, height`
* @returns `true` if {@link a} wholly contains {@link b}, otherwise `false`
*/
function containsRect(a, b) {
	const aRight = a[0] + a[2];
	const aBottom = a[1] + a[3];
	const bRight = b[0] + b[2];
	const bBottom = b[1] + b[3];
	return !(a[0] === b[0] && a[1] === b[1] && aRight === bRight && aBottom === bBottom) && a[0] <= b[0] && a[1] <= b[1] && aRight >= bRight && aBottom >= bBottom;
}
function createBounds(objects, padding = 10) {
	const bounds = [
		Infinity,
		Infinity,
		-Infinity,
		-Infinity
	];
	for (const obj of objects) {
		const rect = obj.boundingRect;
		bounds[0] = Math.min(bounds[0], rect[0]);
		bounds[1] = Math.min(bounds[1], rect[1]);
		bounds[2] = Math.max(bounds[2], rect[0] + rect[2]);
		bounds[3] = Math.max(bounds[3], rect[1] + rect[3]);
	}
	if (!bounds.every((x) => isFinite(x))) return null;
	return [
		bounds[0] - padding,
		bounds[1] - padding,
		bounds[2] - bounds[0] + 2 * padding,
		bounds[3] - bounds[1] + 2 * padding
	];
}
/**
* Snaps the provided {@link Point} or {@link Rect} ({@link pos}) to a grid of size {@link snapTo}.
* @param pos The point that will be snapped
* @param snapTo The value to round up/down by (multiples thereof)
* @returns `true` if snapTo is truthy, otherwise `false`
* @remarks `NaN` propagates through this function and does not affect return value.
*/
function snapPoint(pos, snapTo, method = "round") {
	if (!snapTo) return false;
	pos[0] = snapTo * Math[method](pos[0] / snapTo);
	pos[1] = snapTo * Math[method](pos[1] / snapTo);
	return true;
}
/**
* Aligns a {@link Rect} relative to the edges or centre of a {@link container} rectangle.
*
* With no {@link inset}, the element will be placed on the interior of the {@link container},
* with their edges lined up on the {@link anchors}.  A positive {@link inset} moves the element towards the centre,
* negative will push it outside the {@link container}.
* @param rect The bounding rect of the element to align.
* If using the element's pos/size backing store, this function will move the element.
* @param anchors The direction(s) to anchor the element to
* @param container The rectangle inside which to align the element
* @param inset Relative offset from each {@link anchors} edge, with positive always leading to the centre, as an `[x, y]` point
* @returns The original {@link rect}, modified in place.
*/
function alignToContainer(rect, anchors, [containerX, containerY, containerWidth, containerHeight], [insetX, insetY] = [0, 0]) {
	if (hasFlag(anchors, Alignment.Left)) rect[0] = containerX + insetX;
	else if (hasFlag(anchors, Alignment.Right)) rect[0] = containerX + containerWidth - insetX - rect[2];
	else if (hasFlag(anchors, Alignment.Centre)) rect[0] = containerX + containerWidth * .5 - rect[2] * .5;
	if (hasFlag(anchors, Alignment.Top)) rect[1] = containerY + insetY;
	else if (hasFlag(anchors, Alignment.Bottom)) rect[1] = containerY + containerHeight - insetY - rect[3];
	else if (hasFlag(anchors, Alignment.Middle)) rect[1] = containerY + containerHeight * .5 - rect[3] * .5;
	return rect;
}
/**
* Aligns a {@link Rect} relative to the edges of {@link other}.
*
* With no {@link outset}, the element will be placed on the exterior of the {@link other},
* with their edges lined up on the {@link anchors}.  A positive {@link outset} moves the element away from the {@link other},
* negative will push it inside the {@link other}.
* @param rect The bounding rect of the element to align.
* If using the element's pos/size backing store, this function will move the element.
* @param anchors The direction(s) to anchor the element to
* @param other The rectangle to align {@link rect} to
* @param outset Relative offset from each {@link anchors} edge, with positive always moving away from the centre of the {@link other}, as an `[x, y]` point
* @returns The original {@link rect}, modified in place.
*/
function alignOutsideContainer(rect, anchors, [otherX, otherY, otherWidth, otherHeight], [outsetX, outsetY] = [0, 0]) {
	if (hasFlag(anchors, Alignment.Left)) rect[0] = otherX - outsetX - rect[2];
	else if (hasFlag(anchors, Alignment.Right)) rect[0] = otherX + otherWidth + outsetX;
	else if (hasFlag(anchors, Alignment.Centre)) rect[0] = otherX + otherWidth * .5 - rect[2] * .5;
	if (hasFlag(anchors, Alignment.Top)) rect[1] = otherY - outsetY - rect[3];
	else if (hasFlag(anchors, Alignment.Bottom)) rect[1] = otherY + otherHeight + outsetY;
	else if (hasFlag(anchors, Alignment.Middle)) rect[1] = otherY + otherHeight * .5 - rect[3] * .5;
	return rect;
}
//#endregion
//#region src/lib/litegraph/src/CurveEditor.ts
var CurveEditor = class {
	points;
	selected;
	nearest;
	size;
	must_update;
	margin;
	_nearest;
	constructor(points) {
		this.points = points;
		this.selected = -1;
		this.nearest = -1;
		this.size = null;
		this.must_update = true;
		this.margin = 5;
	}
	static sampleCurve(f, points) {
		if (!points) return;
		for (let i = 0; i < points.length - 1; ++i) {
			const p = points[i];
			const pn = points[i + 1];
			if (pn[0] < f) continue;
			const r = pn[0] - p[0];
			if (Math.abs(r) < 1e-5) return p[1];
			const local_f = (f - p[0]) / r;
			return p[1] * (1 - local_f) + pn[1] * local_f;
		}
		return 0;
	}
	draw(ctx, size, graphcanvas, background_color, line_color, inactive = false) {
		const points = this.points;
		if (!points) return;
		this.size = size;
		const w = size[0] - this.margin * 2;
		const h = size[1] - this.margin * 2;
		line_color = line_color || "#666";
		ctx.save();
		ctx.translate(this.margin, this.margin);
		if (background_color) {
			ctx.fillStyle = "#111";
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = "#222";
			ctx.fillRect(w * .5, 0, 1, h);
			ctx.strokeStyle = "#333";
			ctx.strokeRect(0, 0, w, h);
		}
		ctx.strokeStyle = line_color;
		if (inactive) ctx.globalAlpha = .5;
		ctx.beginPath();
		for (const p of points) ctx.lineTo(p[0] * w, (1 - p[1]) * h);
		ctx.stroke();
		ctx.globalAlpha = 1;
		if (!inactive) for (const [i, p] of points.entries()) {
			ctx.fillStyle = this.selected == i ? "#FFF" : this.nearest == i ? "#DDD" : "#AAA";
			ctx.beginPath();
			ctx.arc(p[0] * w, (1 - p[1]) * h, 2, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.restore();
	}
	onMouseDown(localpos, graphcanvas) {
		const points = this.points;
		if (!points) return;
		if (localpos[1] < 0) return;
		if (this.size == null) throw new Error("CurveEditor.size was null or undefined.");
		const w = this.size[0] - this.margin * 2;
		const h = this.size[1] - this.margin * 2;
		const x = localpos[0] - this.margin;
		const y = localpos[1] - this.margin;
		const pos = [x, y];
		const max_dist = 30 / graphcanvas.ds.scale;
		this.selected = this.getCloserPoint(pos, max_dist);
		if (this.selected == -1) {
			const point = [x / w, 1 - y / h];
			points.push(point);
			points.sort(function(a, b) {
				return a[0] - b[0];
			});
			this.selected = points.indexOf(point);
			this.must_update = true;
		}
		if (this.selected != -1) return true;
	}
	onMouseMove(localpos, graphcanvas) {
		const points = this.points;
		if (!points) return;
		const s = this.selected;
		if (s < 0) return;
		if (this.size == null) throw new Error("CurveEditor.size was null or undefined.");
		const x = (localpos[0] - this.margin) / (this.size[0] - this.margin * 2);
		const y = (localpos[1] - this.margin) / (this.size[1] - this.margin * 2);
		const curvepos = [localpos[0] - this.margin, localpos[1] - this.margin];
		const max_dist = 30 / graphcanvas.ds.scale;
		this._nearest = this.getCloserPoint(curvepos, max_dist);
		const point = points[s];
		if (point) {
			const is_edge_point = s == 0 || s == points.length - 1;
			if (!is_edge_point && (localpos[0] < -10 || localpos[0] > this.size[0] + 10 || localpos[1] < -10 || localpos[1] > this.size[1] + 10)) {
				points.splice(s, 1);
				this.selected = -1;
				return;
			}
			if (!is_edge_point) point[0] = clamp(x, 0, 1);
			else point[0] = s == 0 ? 0 : 1;
			point[1] = 1 - clamp(y, 0, 1);
			points.sort(function(a, b) {
				return a[0] - b[0];
			});
			this.selected = points.indexOf(point);
			this.must_update = true;
		}
	}
	onMouseUp() {
		this.selected = -1;
		return false;
	}
	getCloserPoint(pos, max_dist) {
		const points = this.points;
		if (!points) return -1;
		max_dist = max_dist || 30;
		if (this.size == null) throw new Error("CurveEditor.size was null or undefined.");
		const w = this.size[0] - this.margin * 2;
		const h = this.size[1] - this.margin * 2;
		const num = points.length;
		const p2 = [0, 0];
		let min_dist = 1e6;
		let closest = -1;
		for (let i = 0; i < num; ++i) {
			const p = points[i];
			p2[0] = p[0] * w;
			p2[1] = (1 - p[1]) * h;
			const dist = distance(pos, p2);
			if (dist > min_dist || dist > max_dist) continue;
			closest = i;
			min_dist = dist;
		}
		return closest;
	}
};
//#endregion
//#region src/lib/litegraph/src/DragAndScale.ts
var DragAndScale = class {
	/**
	* The state of this DragAndScale instance.
	*
	* Implemented as a POCO that can be proxied without side-effects.
	*/
	state;
	lastState = {
		offset: [0, 0],
		scale: 0
	};
	/** Maximum scale (zoom in) */
	max_scale;
	/** Minimum scale (zoom out) */
	min_scale;
	enabled;
	last_mouse;
	element;
	visible_area;
	dragging;
	viewport;
	get offset() {
		return this.state.offset;
	}
	set offset(value) {
		this.state.offset[0] = value[0];
		this.state.offset[1] = value[1];
	}
	get scale() {
		return this.state.scale;
	}
	set scale(value) {
		this.state.scale = value;
	}
	constructor(element) {
		this.state = {
			offset: [0, 0],
			scale: 1
		};
		this.max_scale = 10;
		this.min_scale = .1;
		this.enabled = true;
		this.last_mouse = [0, 0];
		this.visible_area = new Rectangle();
		this.element = element;
	}
	/**
	* Returns `true` if the current state has changed from the previous state.
	* @returns `true` if the current state has changed from the previous state, otherwise `false`.
	*/
	_stateHasChanged() {
		const current = this.state;
		const previous = this.lastState;
		return current.scale !== previous.scale || current.offset[0] !== previous.offset[0] || current.offset[1] !== previous.offset[1];
	}
	computeVisibleArea(viewport) {
		const { scale, offset, visible_area } = this;
		if (this._stateHasChanged()) {
			this.onChanged?.(scale, offset);
			copyState(this.state, this.lastState);
		}
		if (!this.element) {
			visible_area[0] = visible_area[1] = visible_area[2] = visible_area[3] = 0;
			return;
		}
		let { width, height } = this.element;
		let startx = -offset[0];
		let starty = -offset[1];
		if (viewport) {
			startx += viewport[0] / scale;
			starty += viewport[1] / scale;
			width = viewport[2];
			height = viewport[3];
		}
		const endx = startx + width / scale;
		const endy = starty + height / scale;
		visible_area[0] = startx;
		visible_area[1] = starty;
		visible_area.resizeBottomRight(endx, endy);
	}
	toCanvasContext(ctx) {
		ctx.scale(this.scale, this.scale);
		ctx.translate(this.offset[0], this.offset[1]);
	}
	convertOffsetToCanvas(pos) {
		return [(pos[0] + this.offset[0]) * this.scale, (pos[1] + this.offset[1]) * this.scale];
	}
	convertCanvasToOffset(pos, out) {
		out = out || [0, 0];
		out[0] = pos[0] / this.scale - this.offset[0];
		out[1] = pos[1] / this.scale - this.offset[1];
		return out;
	}
	/** @deprecated Has not been kept up to date */
	mouseDrag(x, y) {
		this.offset[0] += x / this.scale;
		this.offset[1] += y / this.scale;
		this.onredraw?.(this);
	}
	changeScale(value, zooming_center, roundToScaleOne = true) {
		if (value < this.min_scale) value = this.min_scale;
		else if (value > this.max_scale) value = this.max_scale;
		if (value == this.scale) return;
		const rect = this.element.getBoundingClientRect();
		if (!rect) return;
		zooming_center = zooming_center ?? [rect.width * .5, rect.height * .5];
		const normalizedCenter = [zooming_center[0] - rect.x, zooming_center[1] - rect.y];
		const center = this.convertCanvasToOffset(normalizedCenter);
		this.scale = value;
		if (roundToScaleOne && Math.abs(this.scale - 1) < .01) this.scale = 1;
		const new_center = this.convertCanvasToOffset(normalizedCenter);
		const delta_offset = [new_center[0] - center[0], new_center[1] - center[1]];
		this.offset[0] += delta_offset[0];
		this.offset[1] += delta_offset[1];
		this.onredraw?.(this);
	}
	changeDeltaScale(value, zooming_center) {
		this.changeScale(this.scale * value, zooming_center);
	}
	/**
	* Fits the view to the specified bounds.
	* @param bounds The bounds to fit the view to, defined by a rectangle.
	*/
	fitToBounds(bounds, { zoom = .75 } = {}) {
		const [width, height] = this.element.width === 300 && this.element.height === 150 ? [1920, 1080] : [this.element.width, this.element.height];
		const cw = width / window.devicePixelRatio;
		const ch = height / window.devicePixelRatio;
		let targetScale = this.scale;
		if (zoom > 0) {
			const targetScaleX = zoom * cw / Math.max(bounds[2], 300);
			const targetScaleY = zoom * ch / Math.max(bounds[3], 300);
			targetScale = Math.min(targetScaleX, targetScaleY, this.max_scale);
		}
		const scaledWidth = cw / targetScale;
		const scaledHeight = ch / targetScale;
		const targetX = -bounds[0] - bounds[2] * .5 + scaledWidth * .5;
		const targetY = -bounds[1] - bounds[3] * .5 + scaledHeight * .5;
		this.offset[0] = targetX;
		this.offset[1] = targetY;
		this.scale = targetScale;
	}
	/**
	* Starts an animation to fit the view around the specified selection of nodes.
	* @param bounds The bounds to animate the view to, defined by a rectangle.
	*/
	animateToBounds(bounds, setDirty, { duration = 350, zoom = .75, easing = EaseFunction.EASE_IN_OUT_QUAD } = {}) {
		if (!(duration > 0)) throw new RangeError("Duration must be greater than 0");
		const easeFunctions = {
			linear: (t) => t,
			easeInQuad: (t) => t * t,
			easeOutQuad: (t) => t * (2 - t),
			easeInOutQuad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
		};
		const easeFunction = easeFunctions[easing] ?? easeFunctions.linear;
		const startTimestamp = performance.now();
		const cw = this.element.width / window.devicePixelRatio;
		const ch = this.element.height / window.devicePixelRatio;
		const startX = this.offset[0];
		const startY = this.offset[1];
		const startX2 = startX - cw / this.scale;
		const startY2 = startY - ch / this.scale;
		let targetScale = this.scale;
		if (zoom > 0) {
			const targetScaleX = zoom * cw / Math.max(bounds[2], 300);
			const targetScaleY = zoom * ch / Math.max(bounds[3], 300);
			targetScale = Math.min(targetScaleX, targetScaleY, this.max_scale);
		}
		const scaledWidth = cw / targetScale;
		const scaledHeight = ch / targetScale;
		const targetX = -bounds[0] - bounds[2] * .5 + scaledWidth * .5;
		const targetY = -bounds[1] - bounds[3] * .5 + scaledHeight * .5;
		const targetX2 = targetX - scaledWidth;
		const targetY2 = targetY - scaledHeight;
		const animate = (timestamp) => {
			const elapsed = timestamp - startTimestamp;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeFunction(progress);
			const currentX = startX + (targetX - startX) * easedProgress;
			const currentY = startY + (targetY - startY) * easedProgress;
			this.offset[0] = currentX;
			this.offset[1] = currentY;
			if (zoom > 0) {
				const currentX2 = startX2 + (targetX2 - startX2) * easedProgress;
				const currentY2 = startY2 + (targetY2 - startY2) * easedProgress;
				const currentWidth = Math.abs(currentX2 - currentX);
				const currentHeight = Math.abs(currentY2 - currentY);
				this.scale = Math.min(cw / currentWidth, ch / currentHeight);
			}
			setDirty();
			if (progress < 1) animationId = requestAnimationFrame(animate);
			else cancelAnimationFrame(animationId);
		};
		let animationId = requestAnimationFrame(animate);
	}
	reset() {
		this.scale = 1;
		this.offset[0] = 0;
		this.offset[1] = 0;
	}
};
/**
* Copies the values of one state into another, preserving references.
* @param from The state to copy values from.
* @param to The state to copy values into.
*/
function copyState(from, to) {
	to.scale = from.scale;
	to.offset[0] = from.offset[0];
	to.offset[1] = from.offset[1];
}
//#endregion
//#region src/lib/litegraph/src/utils/type.ts
/**
* Converts a plain object to a class instance if it is not already an instance of the class.
*
* Requires specific constructor signature; first parameter must be the object to convert.
* @param cls The class to convert to
* @param args The object to convert, followed by any other constructor arguments
* @returns The class instance
*/
function toClass(cls, ...args) {
	return args[0] instanceof cls ? args[0] : new cls(...args);
}
/**
* Checks if an object is an instance of {@link IColorable}.
*/
function isColorable(obj) {
	return typeof obj === "object" && obj !== null && "setColorOption" in obj && "getColorOption" in obj;
}
function isNodeBindable(widget) {
	return typeof widget === "object" && widget !== null && "setNodeId" in widget && typeof widget.setNodeId === "function";
}
function commonType(...types) {
	if (!isStrings(types)) return void 0;
	const withoutWildcards = without(types, "*");
	if (withoutWildcards.length === 0) return "*";
	const combinedTypes = intersection(...withoutWildcards.map((type) => type.split(",")));
	if (combinedTypes.length === 0) return void 0;
	return combinedTypes.join(",");
}
function intersection(...sets) {
	const itemCounts = {};
	for (const set of sets) for (const item of new Set(set)) itemCounts[item] = (itemCounts[item] ?? 0) + 1;
	return Object.entries(itemCounts).filter(([, count]) => count === sets.length).map(([key]) => key);
}
function isStrings(types) {
	return types.every((t) => typeof t === "string");
}
//#endregion
//#region src/lib/litegraph/src/utils/uuid.ts
/** Special-case zero-UUID, consisting entirely of zeros. Used as a default value. */
var zeroUuid = "00000000-0000-0000-0000-000000000000";
/** Pre-allocated storage for uuid random values. */
var randomStorage = new Uint32Array(31);
/**
* Creates a UUIDv4 string.
* @returns A new UUIDv4 string
* @remarks
* Original implementation from https://gist.github.com/jed/982883?permalink_comment_id=852670#gistcomment-852670
*
* Prefers the {@link crypto.randomUUID} method if available, falling back to
* {@link crypto.getRandomValues}, then finally the legacy {@link Math.random} method.
*/
function createUuidv4() {
	if (typeof crypto?.randomUUID === "function") return crypto.randomUUID();
	if (typeof crypto?.getRandomValues === "function") {
		const random = crypto.getRandomValues(randomStorage);
		let i = 0;
		return "10000000-1000-4000-8000-100000000000".replaceAll(/[018]/g, (a) => (Number(a) ^ random[i++] * 3.725290298461914e-9 >> Number(a) * .25).toString(16));
	}
	return "10000000-1000-4000-8000-100000000000".replaceAll(/[018]/g, (a) => (Number(a) ^ Math.random() * 16 >> Number(a) * .25).toString(16));
}
//#endregion
//#region src/renderer/core/layout/utils/nodeSizeUtil.ts
var removeNodeTitleHeight = (height) => Math.max(0, height - (LiteGraph.NODE_TITLE_HEIGHT || 0));
//#endregion
//#region src/renderer/core/layout/types.ts
var LayoutSource = /* @__PURE__ */ function(LayoutSource) {
	LayoutSource["Canvas"] = "canvas";
	LayoutSource["Vue"] = "vue";
	LayoutSource["DOM"] = "dom";
	LayoutSource["External"] = "external";
	return LayoutSource;
}({});
//#endregion
//#region src/renderer/core/layout/constants.ts
/**
* Layout System Constants
*
* Centralized configuration values for the layout system.
* These values control spatial indexing, performance, and behavior.
*/
/**
* QuadTree configuration for spatial indexing
*/
var QUADTREE_CONFIG = {
	DEFAULT_BOUNDS: {
		x: -1e4,
		y: -1e4,
		width: 2e4,
		height: 2e4
	},
	MAX_DEPTH: 6,
	MAX_ITEMS_PER_NODE: 4
};
/**
* Performance and optimization settings
*/
var PERFORMANCE_CONFIG = {
	CHANGE_DETECTION_INTERVAL: 16,
	SPATIAL_CACHE_TTL: 1e3,
	SPATIAL_CACHE_MAX_SIZE: 100,
	BATCH_UPDATE_DELAY: 4
};
/**
* Actor and source identifiers
*/
var ACTOR_CONFIG = {
	USER_PREFIX: "user-",
	ID_LENGTH: 9,
	DEFAULT_SOURCE: LayoutSource.External
};
//#endregion
//#region src/renderer/core/layout/utils/geometry.ts
function toPoint(x, y) {
	return {
		x,
		y
	};
}
function isPointEqual(a, b) {
	return a.x === b.x && a.y === b.y;
}
function isBoundsEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function isSizeEqual(a, b) {
	return a.width === b.width && a.height === b.height;
}
//#endregion
//#region src/renderer/core/layout/utils/layoutMath.ts
function pointInBounds(point, bounds) {
	return point.x >= bounds.x && point.x <= bounds.x + bounds.width && point.y >= bounds.y && point.y <= bounds.y + bounds.height;
}
function boundsIntersect(a, b) {
	return !(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y);
}
//#endregion
//#region src/renderer/core/layout/utils/layoutUtils.ts
/**
* Creates a unique key for identifying link segments in spatial indexes
*/
function makeLinkSegmentKey(linkId, rerouteId) {
	return `${linkId}:${rerouteId ?? "final"}`;
}
//#endregion
//#region src/renderer/core/layout/utils/mappers.ts
var NODE_LAYOUT_DEFAULTS = {
	id: "unknown-node",
	position: {
		x: 0,
		y: 0
	},
	size: {
		width: 100,
		height: 50
	},
	zIndex: 0,
	visible: true,
	bounds: {
		x: 0,
		y: 0,
		width: 100,
		height: 50
	}
};
function layoutToYNode(layout) {
	const ynode = new YMap();
	ynode.set("id", layout.id);
	ynode.set("position", layout.position);
	ynode.set("size", layout.size);
	ynode.set("zIndex", layout.zIndex);
	ynode.set("visible", layout.visible);
	ynode.set("bounds", layout.bounds);
	return ynode;
}
function getOr(map, key, fallback) {
	return map.get(key) ?? fallback;
}
function yNodeToLayout(ynode) {
	return {
		id: getOr(ynode, "id", NODE_LAYOUT_DEFAULTS.id),
		position: getOr(ynode, "position", NODE_LAYOUT_DEFAULTS.position),
		size: getOr(ynode, "size", NODE_LAYOUT_DEFAULTS.size),
		zIndex: getOr(ynode, "zIndex", NODE_LAYOUT_DEFAULTS.zIndex),
		visible: getOr(ynode, "visible", NODE_LAYOUT_DEFAULTS.visible),
		bounds: getOr(ynode, "bounds", NODE_LAYOUT_DEFAULTS.bounds)
	};
}
//#endregion
//#region src/renderer/core/spatial/QuadTree.ts
var QuadNode = class QuadNode {
	bounds;
	depth;
	maxDepth;
	maxItems;
	items = [];
	children = null;
	divided = false;
	constructor(bounds, depth = 0, maxDepth = 5, maxItems = 4) {
		this.bounds = bounds;
		this.depth = depth;
		this.maxDepth = maxDepth;
		this.maxItems = maxItems;
	}
	insert(item) {
		if (!this.contains(item.bounds)) return false;
		if (this.items.length < this.maxItems && !this.divided) {
			this.items.push(item);
			return true;
		}
		if (!this.divided && this.depth < this.maxDepth) this.subdivide();
		if (this.divided && this.children) {
			for (const child of this.children) if (child.insert(item)) return true;
		}
		this.items.push(item);
		return true;
	}
	remove(item) {
		const index = this.items.findIndex((i) => i.id === item.id);
		if (index !== -1) {
			this.items.splice(index, 1);
			return true;
		}
		if (this.divided && this.children) {
			for (const child of this.children) if (child.remove(item)) return true;
		}
		return false;
	}
	query(searchBounds, found = []) {
		if (!this.intersects(searchBounds)) return found;
		for (const item of this.items) if (this.boundsIntersect(item.bounds, searchBounds)) found.push(item);
		if (this.divided && this.children) for (const child of this.children) child.query(searchBounds, found);
		return found;
	}
	subdivide() {
		const { x, y, width, height } = this.bounds;
		const halfWidth = width / 2;
		const halfHeight = height / 2;
		this.children = [
			new QuadNode({
				x,
				y,
				width: halfWidth,
				height: halfHeight
			}, this.depth + 1, this.maxDepth, this.maxItems),
			new QuadNode({
				x: x + halfWidth,
				y,
				width: halfWidth,
				height: halfHeight
			}, this.depth + 1, this.maxDepth, this.maxItems),
			new QuadNode({
				x,
				y: y + halfHeight,
				width: halfWidth,
				height: halfHeight
			}, this.depth + 1, this.maxDepth, this.maxItems),
			new QuadNode({
				x: x + halfWidth,
				y: y + halfHeight,
				width: halfWidth,
				height: halfHeight
			}, this.depth + 1, this.maxDepth, this.maxItems)
		];
		this.divided = true;
		const itemsToRedistribute = [...this.items];
		this.items = [];
		for (const item of itemsToRedistribute) {
			let inserted = false;
			for (const child of this.children) if (child.insert(item)) {
				inserted = true;
				break;
			}
			if (!inserted) this.items.push(item);
		}
	}
	contains(itemBounds) {
		return itemBounds.x >= this.bounds.x && itemBounds.y >= this.bounds.y && itemBounds.x + itemBounds.width <= this.bounds.x + this.bounds.width && itemBounds.y + itemBounds.height <= this.bounds.y + this.bounds.height;
	}
	intersects(searchBounds) {
		return this.boundsIntersect(this.bounds, searchBounds);
	}
	boundsIntersect(a, b) {
		return !(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y);
	}
	getDebugInfo() {
		return {
			bounds: this.bounds,
			depth: this.depth,
			itemCount: this.items.length,
			divided: this.divided,
			children: this.children?.map((child) => child.getDebugInfo())
		};
	}
};
var QuadTree = class {
	root;
	itemMap = /* @__PURE__ */ new Map();
	options;
	constructor(bounds, options = {}) {
		this.options = {
			maxDepth: options.maxDepth ?? 5,
			maxItemsPerNode: options.maxItemsPerNode ?? 4,
			minNodeSize: options.minNodeSize ?? 50
		};
		this.root = new QuadNode(bounds, 0, this.options.maxDepth, this.options.maxItemsPerNode);
	}
	insert(id, bounds, data) {
		const item = {
			id,
			bounds,
			data
		};
		if (this.itemMap.has(id)) this.remove(id);
		const success = this.root.insert(item);
		if (success) this.itemMap.set(id, item);
		return success;
	}
	remove(id) {
		const item = this.itemMap.get(id);
		if (!item) return false;
		const success = this.root.remove(item);
		if (success) this.itemMap.delete(id);
		return success;
	}
	update(id, newBounds) {
		const item = this.itemMap.get(id);
		if (!item) return false;
		const data = item.data;
		this.remove(id);
		return this.insert(id, newBounds, data);
	}
	query(searchBounds) {
		return this.root.query(searchBounds).map((item) => item.data);
	}
	clear() {
		this.root = new QuadNode(this.root["bounds"], 0, this.options.maxDepth, this.options.maxItemsPerNode);
		this.itemMap.clear();
	}
	get size() {
		return this.itemMap.size;
	}
	getDebugInfo() {
		return {
			size: this.size,
			tree: this.root.getDebugInfo()
		};
	}
};
//#endregion
//#region src/renderer/core/spatial/SpatialIndex.ts
/**
* Spatial Index Manager
*
* Manages spatial indexing for efficient node queries based on bounds.
* Uses QuadTree for fast spatial lookups with caching for performance.
*/
/**
* Spatial index manager using QuadTree
*/
var SpatialIndexManager = class {
	quadTree;
	queryCache;
	cacheSize = 0;
	constructor(bounds) {
		this.quadTree = new QuadTree(bounds ?? QUADTREE_CONFIG.DEFAULT_BOUNDS, {
			maxDepth: QUADTREE_CONFIG.MAX_DEPTH,
			maxItemsPerNode: QUADTREE_CONFIG.MAX_ITEMS_PER_NODE
		});
		this.queryCache = /* @__PURE__ */ new Map();
	}
	/**
	* Insert a node into the spatial index
	*/
	insert(nodeId, bounds) {
		this.quadTree.insert(nodeId, bounds, nodeId);
		this.invalidateCache();
	}
	/**
	* Update a node's bounds in the spatial index
	*/
	update(nodeId, bounds) {
		this.quadTree.update(nodeId, bounds);
		this.invalidateCache();
	}
	/**
	* Batch update multiple nodes' bounds in the spatial index
	* More efficient than calling update() multiple times as it only invalidates cache once
	*/
	batchUpdate(updates) {
		for (const { nodeId, bounds } of updates) this.quadTree.update(nodeId, bounds);
		this.invalidateCache();
	}
	/**
	* Remove a node from the spatial index
	*/
	remove(nodeId) {
		this.quadTree.remove(nodeId);
		this.invalidateCache();
	}
	/**
	* Query nodes within the given bounds
	*/
	query(bounds) {
		const cacheKey = this.getCacheKey(bounds);
		const cached = this.queryCache.get(cacheKey);
		if (cached) {
			if (Date.now() - cached.timestamp < PERFORMANCE_CONFIG.SPATIAL_CACHE_TTL) return cached.result;
			this.queryCache.delete(cacheKey);
			this.cacheSize--;
		}
		const result = this.quadTree.query(bounds);
		this.addToCache(cacheKey, result);
		return result;
	}
	/**
	* Clear all nodes from the spatial index
	*/
	clear() {
		this.quadTree.clear();
		this.invalidateCache();
	}
	/**
	* Get the current size of the index
	*/
	get size() {
		return this.quadTree.size;
	}
	/**
	* Get debug information about the spatial index
	*/
	getDebugInfo() {
		return {
			quadTreeInfo: this.quadTree.getDebugInfo(),
			cacheSize: this.cacheSize,
			cacheEntries: this.queryCache.size
		};
	}
	/**
	* Generate cache key for bounds
	*/
	getCacheKey(bounds) {
		return `${bounds.x},${bounds.y},${bounds.width},${bounds.height}`;
	}
	/**
	* Add result to cache with LRU eviction
	*/
	addToCache(key, result) {
		if (this.cacheSize >= PERFORMANCE_CONFIG.SPATIAL_CACHE_MAX_SIZE) {
			const oldestKey = this.findOldestCacheEntry();
			if (oldestKey) {
				this.queryCache.delete(oldestKey);
				this.cacheSize--;
			}
		}
		this.queryCache.set(key, {
			result,
			timestamp: Date.now()
		});
		this.cacheSize++;
	}
	/**
	* Find oldest cache entry for LRU eviction
	*/
	findOldestCacheEntry() {
		let oldestKey = null;
		let oldestTime = Infinity;
		for (const [key, entry] of this.queryCache) if (entry.timestamp < oldestTime) {
			oldestTime = entry.timestamp;
			oldestKey = key;
		}
		return oldestKey;
	}
	/**
	* Invalidate all cached queries
	*/
	invalidateCache() {
		this.queryCache.clear();
		this.cacheSize = 0;
	}
};
//#endregion
//#region src/renderer/core/layout/store/layoutStore.ts
var import_loglevel = /* @__PURE__ */ __toESM(require_loglevel(), 1);
var logger$1 = import_loglevel.default.getLogger("LayoutStore");
function asRerouteId(id) {
	return Number(id);
}
function asLinkId(id) {
	return Number(id);
}
var layoutStore = new class LayoutStoreImpl {
	static REROUTE_DEFAULTS = {
		id: 0,
		position: {
			x: 0,
			y: 0
		},
		parentId: 0,
		linkIds: []
	};
	ydoc = new Doc();
	ynodes;
	ylinks;
	yreroutes;
	yoperations;
	version = 0;
	currentSource = ACTOR_CONFIG.DEFAULT_SOURCE;
	currentActor = `${ACTOR_CONFIG.USER_PREFIX}${Math.random().toString(36).substring(2, 2 + ACTOR_CONFIG.ID_LENGTH)}`;
	changeListeners = /* @__PURE__ */ new Set();
	nodeChangeListeners = /* @__PURE__ */ new Map();
	pendingGlobalChanges = [];
	isGlobalDispatchQueued = false;
	nodeRefs = /* @__PURE__ */ new Map();
	nodeTriggers = /* @__PURE__ */ new Map();
	linkLayouts = /* @__PURE__ */ new Map();
	linkSegmentLayouts = /* @__PURE__ */ new Map();
	slotLayouts = /* @__PURE__ */ new Map();
	rerouteLayouts = /* @__PURE__ */ new Map();
	spatialIndex;
	linkSegmentSpatialIndex;
	slotSpatialIndex;
	rerouteSpatialIndex;
	isDraggingVueNodes = ref(false);
	isResizingVueNodes = ref(false);
	/**
	* Flag indicating slot positions are pending sync after graph reconfiguration.
	* When true, link rendering should be skipped to avoid drawing with stale positions.
	*/
	_pendingSlotSync = false;
	get pendingSlotSync() {
		return this._pendingSlotSync;
	}
	get hasSlotLayouts() {
		return this.slotLayouts.size > 0;
	}
	setPendingSlotSync(value) {
		this._pendingSlotSync = value;
	}
	constructor() {
		this.ynodes = this.ydoc.getMap("nodes");
		this.ylinks = this.ydoc.getMap("links");
		this.yreroutes = this.ydoc.getMap("reroutes");
		this.yoperations = this.ydoc.getArray("operations");
		this.spatialIndex = new SpatialIndexManager();
		this.linkSegmentSpatialIndex = new SpatialIndexManager();
		this.slotSpatialIndex = new SpatialIndexManager();
		this.rerouteSpatialIndex = new SpatialIndexManager();
		this.ynodes.observe((event) => {
			this.version++;
			event.changes.keys.forEach((_change, key) => {
				const trigger = this.nodeTriggers.get(key);
				if (trigger) trigger();
			});
		});
		this.ylinks.observe((event) => {
			this.version++;
			event.changes.keys.forEach((change, linkIdStr) => {
				this.handleLinkChange(change, linkIdStr);
			});
		});
		this.yreroutes.observe((event) => {
			this.version++;
			event.changes.keys.forEach((change, rerouteIdStr) => {
				this.handleRerouteChange(change, rerouteIdStr);
			});
		});
	}
	getLinkField(ylink, field) {
		return ylink.get(field);
	}
	getRerouteField(yreroute, field, defaultValue = LayoutStoreImpl.REROUTE_DEFAULTS[field]) {
		return yreroute.get(field) ?? defaultValue;
	}
	/**
	* Get or create a customRef for a node layout
	*/
	getNodeLayoutRef(nodeId) {
		let nodeRef = this.nodeRefs.get(nodeId);
		if (!nodeRef) {
			nodeRef = customRef((track, trigger) => {
				this.nodeTriggers.set(nodeId, trigger);
				return {
					get: () => {
						track();
						const ynode = this.ynodes.get(nodeId);
						return ynode ? yNodeToLayout(ynode) : null;
					},
					set: (newLayout) => {
						if (newLayout === null) {
							const existing = this.ynodes.get(nodeId);
							if (existing) this.applyOperation({
								type: "deleteNode",
								entity: "node",
								nodeId,
								timestamp: Date.now(),
								source: this.currentSource,
								actor: this.currentActor,
								previousLayout: yNodeToLayout(existing)
							});
						} else {
							const existing = this.ynodes.get(nodeId);
							if (!existing) this.applyOperation({
								type: "createNode",
								entity: "node",
								nodeId,
								layout: newLayout,
								timestamp: Date.now(),
								source: this.currentSource,
								actor: this.currentActor
							});
							else {
								const existingLayout = yNodeToLayout(existing);
								if (existingLayout.position.x !== newLayout.position.x || existingLayout.position.y !== newLayout.position.y) this.applyOperation({
									type: "moveNode",
									entity: "node",
									nodeId,
									position: newLayout.position,
									previousPosition: existingLayout.position,
									timestamp: Date.now(),
									source: this.currentSource,
									actor: this.currentActor
								});
								if (existingLayout.size.width !== newLayout.size.width || existingLayout.size.height !== newLayout.size.height) this.applyOperation({
									type: "resizeNode",
									entity: "node",
									nodeId,
									size: newLayout.size,
									previousSize: existingLayout.size,
									timestamp: Date.now(),
									source: this.currentSource,
									actor: this.currentActor
								});
								if (existingLayout.zIndex !== newLayout.zIndex) this.applyOperation({
									type: "setNodeZIndex",
									entity: "node",
									nodeId,
									zIndex: newLayout.zIndex,
									previousZIndex: existingLayout.zIndex,
									timestamp: Date.now(),
									source: this.currentSource,
									actor: this.currentActor
								});
							}
						}
						trigger();
					}
				};
			});
			this.nodeRefs.set(nodeId, nodeRef);
		}
		return nodeRef;
	}
	/**
	* Get nodes within bounds (reactive)
	*/
	getNodesInBounds(bounds) {
		return computed(() => {
			this.version;
			const result = [];
			for (const [nodeId] of this.ynodes) {
				const ynode = this.ynodes.get(nodeId);
				if (ynode) {
					const layout = yNodeToLayout(ynode);
					if (layout && boundsIntersect(layout.bounds, bounds)) result.push(nodeId);
				}
			}
			return result;
		});
	}
	/**
	* Get all nodes as a reactive map
	*/
	getAllNodes() {
		return computed(() => {
			this.version;
			const result = /* @__PURE__ */ new Map();
			for (const [nodeId] of this.ynodes) {
				const ynode = this.ynodes.get(nodeId);
				if (ynode) {
					const layout = yNodeToLayout(ynode);
					if (layout) result.set(nodeId, layout);
				}
			}
			return result;
		});
	}
	/**
	* Get current version for change detection
	*/
	getVersion() {
		return computed(() => this.version);
	}
	/**
	* Query node at point (non-reactive for performance)
	*/
	queryNodeAtPoint(point) {
		const nodes = [];
		for (const [nodeId] of this.ynodes) {
			const ynode = this.ynodes.get(nodeId);
			if (ynode) {
				const layout = yNodeToLayout(ynode);
				if (layout) nodes.push([nodeId, layout]);
			}
		}
		nodes.sort(([, a], [, b]) => b.zIndex - a.zIndex);
		for (const [nodeId, layout] of nodes) if (pointInBounds(point, layout.bounds)) return nodeId;
		return null;
	}
	/**
	* Query nodes in bounds (non-reactive for performance)
	*/
	queryNodesInBounds(bounds) {
		return this.spatialIndex.query(bounds);
	}
	/**
	* Update link layout data (for geometry/debug, no separate spatial index)
	*/
	updateLinkLayout(linkId, layout) {
		const existing = this.linkLayouts.get(linkId);
		if (existing && isBoundsEqual(existing.bounds, layout.bounds) && isPointEqual(existing.centerPos, layout.centerPos)) {
			if (layout.path) existing.path = layout.path;
			return;
		}
		this.linkLayouts.set(linkId, layout);
	}
	/**
	* Delete link layout data
	*/
	deleteLinkLayout(linkId) {
		if (this.linkLayouts.delete(linkId)) {
			const keysToDelete = [];
			for (const [key] of this.linkSegmentLayouts) if (key.startsWith(`${linkId}:`)) keysToDelete.push(key);
			for (const key of keysToDelete) {
				this.linkSegmentLayouts.delete(key);
				this.linkSegmentSpatialIndex.remove(key);
			}
		}
	}
	/**
	* Update slot layout data
	*/
	updateSlotLayout(key, layout) {
		const existing = this.slotLayouts.get(key);
		if (existing) {
			if (isPointEqual(existing.position, layout.position) && isBoundsEqual(existing.bounds, layout.bounds)) return;
			this.slotSpatialIndex.update(key, layout.bounds);
		} else this.slotSpatialIndex.insert(key, layout.bounds);
		this.slotLayouts.set(key, layout);
	}
	/**
	* Batch update slot layouts and spatial index in one pass
	*/
	batchUpdateSlotLayouts(updates) {
		if (!updates.length) return;
		for (const { key, layout } of updates) {
			const existing = this.slotLayouts.get(key);
			if (existing) {
				if (isPointEqual(existing.position, layout.position) && isBoundsEqual(existing.bounds, layout.bounds)) continue;
				this.slotSpatialIndex.update(key, layout.bounds);
			} else this.slotSpatialIndex.insert(key, layout.bounds);
			this.slotLayouts.set(key, layout);
		}
	}
	/**
	* Delete slot layout data
	*/
	deleteSlotLayout(key) {
		if (this.slotLayouts.delete(key)) this.slotSpatialIndex.remove(key);
	}
	/**
	* Clear all slot layouts and their spatial index (O(1) operations)
	* Used when switching rendering modes (Vue ↔ LiteGraph)
	*/
	clearAllSlotLayouts() {
		this.slotLayouts.clear();
		this.slotSpatialIndex.clear();
	}
	/**
	* Update reroute layout data
	*/
	updateRerouteLayout(rerouteId, layout) {
		const existing = this.rerouteLayouts.get(rerouteId);
		if (!existing) logger$1.debug("Adding reroute layout:", {
			rerouteId,
			position: layout.position,
			bounds: layout.bounds
		});
		if (existing) this.rerouteSpatialIndex.update(String(rerouteId), layout.bounds);
		else this.rerouteSpatialIndex.insert(String(rerouteId), layout.bounds);
		this.rerouteLayouts.set(rerouteId, layout);
	}
	/**
	* Delete reroute layout data
	*/
	deleteRerouteLayout(rerouteId) {
		if (this.rerouteLayouts.delete(rerouteId)) this.rerouteSpatialIndex.remove(String(rerouteId));
	}
	/**
	* Get link layout data
	*/
	getLinkLayout(linkId) {
		return this.linkLayouts.get(linkId) || null;
	}
	/**
	* Get slot layout data
	*/
	getSlotLayout(key) {
		return this.slotLayouts.get(key) || null;
	}
	/**
	* Get reroute layout data
	*/
	getRerouteLayout(rerouteId) {
		return this.rerouteLayouts.get(rerouteId) || null;
	}
	/**
	* Returns all slot layout keys currently tracked by the store.
	* Useful for global passes without relying on spatial queries.
	*/
	getAllSlotKeys() {
		return Array.from(this.slotLayouts.keys());
	}
	/**
	* Update link segment layout data
	*/
	updateLinkSegmentLayout(linkId, rerouteId, layout) {
		const key = makeLinkSegmentKey(linkId, rerouteId);
		const existing = this.linkSegmentLayouts.get(key);
		if (existing && isBoundsEqual(existing.bounds, layout.bounds) && isPointEqual(existing.centerPos, layout.centerPos)) {
			if (layout.path) existing.path = layout.path;
			return;
		}
		const fullLayout = {
			...layout,
			linkId,
			rerouteId
		};
		if (!existing) logger$1.debug("Adding link segment:", {
			linkId,
			rerouteId,
			bounds: layout.bounds,
			hasPath: !!layout.path
		});
		if (existing) this.linkSegmentSpatialIndex.update(key, layout.bounds);
		else this.linkSegmentSpatialIndex.insert(key, layout.bounds);
		this.linkSegmentLayouts.set(key, fullLayout);
	}
	/**
	* Delete link segment layout data
	*/
	deleteLinkSegmentLayout(linkId, rerouteId) {
		const key = makeLinkSegmentKey(linkId, rerouteId);
		if (this.linkSegmentLayouts.delete(key)) this.linkSegmentSpatialIndex.remove(key);
	}
	/**
	* Query link segment at point (returns structured data)
	*/
	queryLinkSegmentAtPoint(point, ctx) {
		const hitWidth = ctx?.lineWidth ?? 10;
		const halfSize = Math.max(10, hitWidth);
		const searchArea = {
			x: point.x - halfSize,
			y: point.y - halfSize,
			width: halfSize * 2,
			height: halfSize * 2
		};
		const candidateKeys = this.linkSegmentSpatialIndex.query(searchArea);
		if (candidateKeys.length > 0) logger$1.debug("Checking link segments at point:", {
			point,
			candidateCount: candidateKeys.length,
			tolerance: hitWidth
		});
		for (const key of candidateKeys) {
			const segmentLayout = this.linkSegmentLayouts.get(key);
			if (!segmentLayout) continue;
			if (ctx && segmentLayout.path) {
				const dpi = typeof window !== "undefined" && window?.devicePixelRatio || 1;
				if (ctx.isPointInStroke(segmentLayout.path, point.x * dpi, point.y * dpi)) {
					logger$1.debug("Link segment hit:", {
						linkId: segmentLayout.linkId,
						rerouteId: segmentLayout.rerouteId,
						point
					});
					return {
						linkId: segmentLayout.linkId,
						rerouteId: segmentLayout.rerouteId
					};
				}
			} else if (pointInBounds(point, segmentLayout.bounds)) return {
				linkId: segmentLayout.linkId,
				rerouteId: segmentLayout.rerouteId
			};
		}
		return null;
	}
	/**
	* Query link at point (derived from segment query)
	*/
	queryLinkAtPoint(point, ctx) {
		const segment = this.queryLinkSegmentAtPoint(point, ctx);
		return segment ? segment.linkId : null;
	}
	/**
	* Query slot at point
	*/
	querySlotAtPoint(point) {
		const searchArea = {
			x: point.x - 10,
			y: point.y - 10,
			width: 20,
			height: 20
		};
		const candidateSlotKeys = this.slotSpatialIndex.query(searchArea);
		for (const key of candidateSlotKeys) {
			const slotLayout = this.slotLayouts.get(key);
			if (slotLayout && pointInBounds(point, slotLayout.bounds)) return slotLayout;
		}
		return null;
	}
	/**
	* Query reroute at point
	*/
	queryRerouteAtPoint(point) {
		const maxRadius = 20;
		const searchArea = {
			x: point.x - maxRadius,
			y: point.y - maxRadius,
			width: maxRadius * 2,
			height: maxRadius * 2
		};
		const candidateRerouteKeys = this.rerouteSpatialIndex.query(searchArea);
		if (candidateRerouteKeys.length > 0) logger$1.debug("Checking reroutes at point:", {
			point,
			candidateCount: candidateRerouteKeys.length
		});
		for (const rerouteKey of candidateRerouteKeys) {
			const rerouteId = asRerouteId(rerouteKey);
			const rerouteLayout = this.rerouteLayouts.get(rerouteId);
			if (rerouteLayout) {
				const dx = point.x - rerouteLayout.position.x;
				const dy = point.y - rerouteLayout.position.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance <= rerouteLayout.radius) {
					logger$1.debug("Reroute hit:", {
						rerouteId: rerouteLayout.id,
						position: rerouteLayout.position,
						distance
					});
					return rerouteLayout;
				}
			}
		}
		return null;
	}
	/**
	* Query all items in bounds
	*/
	queryItemsInBounds(bounds) {
		const segmentKeys = this.linkSegmentSpatialIndex.query(bounds);
		const linkIds = /* @__PURE__ */ new Set();
		for (const key of segmentKeys) {
			const segment = this.linkSegmentLayouts.get(key);
			if (segment) linkIds.add(segment.linkId);
		}
		return {
			nodes: this.queryNodesInBounds(bounds),
			links: Array.from(linkIds),
			slots: this.slotSpatialIndex.query(bounds),
			reroutes: this.rerouteSpatialIndex.query(bounds).map((key) => asRerouteId(key))
		};
	}
	/**
	* Apply a layout operation using Yjs transactions
	*/
	applyOperation(operation) {
		const change = {
			type: "update",
			nodeIds: [],
			timestamp: operation.timestamp,
			source: operation.source,
			operation
		};
		this.ydoc.transact(() => {
			this.yoperations.push([operation]);
			this.applyOperationInTransaction(operation, change);
		}, this.currentActor);
		this.finalizeOperation(change);
	}
	/**
	* Apply operation within a transaction
	*/
	applyOperationInTransaction(operation, change) {
		switch (operation.type) {
			case "moveNode":
				this.handleMoveNode(operation, change);
				break;
			case "resizeNode":
				this.handleResizeNode(operation, change);
				break;
			case "setNodeZIndex":
				this.handleSetNodeZIndex(operation, change);
				break;
			case "createNode":
				this.handleCreateNode(operation, change);
				break;
			case "deleteNode":
				this.handleDeleteNode(operation, change);
				break;
			case "batchUpdateBounds":
				this.handleBatchUpdateBounds(operation, change);
				break;
			case "createLink":
				this.handleCreateLink(operation, change);
				break;
			case "deleteLink":
				this.handleDeleteLink(operation, change);
				break;
			case "createReroute":
				this.handleCreateReroute(operation, change);
				break;
			case "deleteReroute":
				this.handleDeleteReroute(operation, change);
				break;
			case "moveReroute":
				this.handleMoveReroute(operation, change);
				break;
		}
	}
	/**
	* Finalize operation after transaction
	*/
	finalizeOperation(change) {
		this.version++;
		change.nodeIds.forEach((nodeId) => {
			const trigger = this.nodeTriggers.get(nodeId);
			if (trigger) trigger();
		});
		this.notifyNodeChange(change);
		this.queueGlobalChange(change);
	}
	/**
	* Subscribe to layout changes
	*/
	onChange(callback) {
		this.changeListeners.add(callback);
		return () => this.changeListeners.delete(callback);
	}
	onNodeChange(nodeId, callback) {
		const listenersForNode = this.nodeChangeListeners.get(nodeId) ?? /* @__PURE__ */ new Set();
		listenersForNode.add(callback);
		this.nodeChangeListeners.set(nodeId, listenersForNode);
		return () => {
			const existingListeners = this.nodeChangeListeners.get(nodeId);
			if (!existingListeners) return;
			existingListeners.delete(callback);
			if (existingListeners.size === 0) this.nodeChangeListeners.delete(nodeId);
		};
	}
	/**
	* Set the current operation source
	*/
	setSource(source) {
		this.currentSource = source;
	}
	/**
	* Set the current actor (for CRDT)
	*/
	setActor(actor) {
		this.currentActor = actor;
	}
	/**
	* Get the current operation source
	*/
	getCurrentSource() {
		return this.currentSource;
	}
	/**
	* Get the current actor
	*/
	getCurrentActor() {
		return this.currentActor;
	}
	/**
	* Clean up refs and triggers for a node when its Vue component unmounts.
	* This should be called from the component's onUnmounted hook.
	*/
	cleanupNodeRef(nodeId) {
		this.nodeRefs.delete(nodeId);
		this.nodeTriggers.delete(nodeId);
	}
	/**
	* Initialize store with existing nodes
	*/
	initializeFromLiteGraph(nodes) {
		this.ydoc.transact(() => {
			this.ynodes.clear();
			this.nodeChangeListeners.clear();
			this.spatialIndex.clear();
			this.linkSegmentSpatialIndex.clear();
			this.slotSpatialIndex.clear();
			this.rerouteSpatialIndex.clear();
			this.linkLayouts.clear();
			this.linkSegmentLayouts.clear();
			this.slotLayouts.clear();
			this.rerouteLayouts.clear();
			this.pendingGlobalChanges = [];
			this.isGlobalDispatchQueued = false;
			nodes.forEach((node, index) => {
				const layout = {
					id: node.id.toString(),
					position: {
						x: node.pos[0],
						y: node.pos[1]
					},
					size: {
						width: node.size[0],
						height: node.size[1]
					},
					zIndex: index,
					visible: true,
					bounds: {
						x: node.pos[0],
						y: node.pos[1],
						width: node.size[0],
						height: node.size[1]
					}
				};
				this.ynodes.set(layout.id, layoutToYNode(layout));
				this.spatialIndex.insert(layout.id, layout.bounds);
			});
			this.nodeTriggers.forEach((trigger) => trigger());
		}, "initialization");
	}
	handleMoveNode(operation, change) {
		const ynode = this.ynodes.get(operation.nodeId);
		if (!ynode) return;
		const size = yNodeToLayout(ynode).size;
		const newBounds = {
			x: operation.position.x,
			y: operation.position.y,
			width: size.width,
			height: size.height
		};
		this.spatialIndex.update(operation.nodeId, newBounds);
		ynode.set("position", operation.position);
		this.updateNodeBounds(ynode, operation.position, size);
		change.nodeIds.push(operation.nodeId);
	}
	handleResizeNode(operation, change) {
		const ynode = this.ynodes.get(operation.nodeId);
		if (!ynode) return;
		const position = yNodeToLayout(ynode).position;
		const newBounds = {
			x: position.x,
			y: position.y,
			width: operation.size.width,
			height: operation.size.height
		};
		this.spatialIndex.update(operation.nodeId, newBounds);
		ynode.set("size", operation.size);
		this.updateNodeBounds(ynode, position, operation.size);
		change.nodeIds.push(operation.nodeId);
	}
	handleSetNodeZIndex(operation, change) {
		const ynode = this.ynodes.get(operation.nodeId);
		if (!ynode) return;
		ynode.set("zIndex", operation.zIndex);
		change.nodeIds.push(operation.nodeId);
	}
	handleCreateNode(operation, change) {
		const ynode = layoutToYNode(operation.layout);
		this.ynodes.set(operation.nodeId, ynode);
		this.spatialIndex.insert(operation.nodeId, operation.layout.bounds);
		change.type = "create";
		change.nodeIds.push(operation.nodeId);
	}
	handleDeleteNode(operation, change) {
		if (!this.ynodes.has(operation.nodeId)) return;
		this.ynodes.delete(operation.nodeId);
		this.spatialIndex.remove(operation.nodeId);
		const linksToDelete = this.findLinksConnectedToNode(operation.nodeId);
		for (const linkId of linksToDelete) {
			this.ylinks.delete(String(linkId));
			this.linkLayouts.delete(linkId);
			this.cleanupLinkSegments(linkId);
		}
		change.type = "delete";
		change.nodeIds.push(operation.nodeId);
	}
	handleBatchUpdateBounds(operation, change) {
		const spatialUpdates = [];
		for (const nodeId of operation.nodeIds) {
			const data = operation.bounds[nodeId];
			const ynode = this.ynodes.get(nodeId);
			if (!ynode || !data) continue;
			ynode.set("position", {
				x: data.bounds.x,
				y: data.bounds.y
			});
			ynode.set("size", {
				width: data.bounds.width,
				height: data.bounds.height
			});
			ynode.set("bounds", data.bounds);
			spatialUpdates.push({
				nodeId,
				bounds: data.bounds
			});
			change.nodeIds.push(nodeId);
		}
		if (spatialUpdates.length > 0) this.spatialIndex.batchUpdate(spatialUpdates);
		if (change.nodeIds.length) change.type = "update";
	}
	handleCreateLink(operation, change) {
		const linkData = new YMap();
		linkData.set("id", operation.linkId);
		linkData.set("sourceNodeId", operation.sourceNodeId);
		linkData.set("sourceSlot", operation.sourceSlot);
		linkData.set("targetNodeId", operation.targetNodeId);
		linkData.set("targetSlot", operation.targetSlot);
		this.ylinks.set(String(operation.linkId), linkData);
		change.type = "create";
	}
	handleDeleteLink(operation, change) {
		if (!this.ylinks.has(String(operation.linkId))) return;
		this.ylinks.delete(String(operation.linkId));
		this.linkLayouts.delete(operation.linkId);
		this.cleanupLinkSegments(operation.linkId);
		change.type = "delete";
	}
	handleCreateReroute(operation, change) {
		const rerouteData = new YMap();
		rerouteData.set("id", operation.rerouteId);
		rerouteData.set("position", operation.position);
		rerouteData.set("parentId", operation.parentId);
		rerouteData.set("linkIds", operation.linkIds);
		this.yreroutes.set(String(operation.rerouteId), rerouteData);
		change.type = "create";
	}
	handleDeleteReroute(operation, change) {
		if (!this.yreroutes.has(String(operation.rerouteId))) return;
		this.yreroutes.delete(String(operation.rerouteId));
		this.rerouteLayouts.delete(operation.rerouteId);
		this.rerouteSpatialIndex.remove(String(operation.rerouteId));
		change.type = "delete";
	}
	handleMoveReroute(operation, change) {
		const yreroute = this.yreroutes.get(String(operation.rerouteId));
		if (!yreroute) return;
		yreroute.set("position", operation.position);
		const pos = operation.position;
		const layout = {
			id: operation.rerouteId,
			position: pos,
			radius: 8,
			bounds: {
				x: pos.x - 8,
				y: pos.y - 8,
				width: 16,
				height: 16
			}
		};
		this.updateRerouteLayout(operation.rerouteId, layout);
		change.type = "update";
	}
	/**
	* Update node bounds helper
	*/
	updateNodeBounds(ynode, position, size) {
		ynode.set("bounds", {
			x: position.x,
			y: position.y,
			width: size.width,
			height: size.height
		});
	}
	/**
	* Find all links connected to a specific node
	*/
	findLinksConnectedToNode(nodeId) {
		const connectedLinks = [];
		this.ylinks.forEach((linkData, linkIdStr) => {
			const linkId = asLinkId(linkIdStr);
			const sourceNodeId = this.getLinkField(linkData, "sourceNodeId");
			const targetNodeId = this.getLinkField(linkData, "targetNodeId");
			if (sourceNodeId === nodeId || targetNodeId === nodeId) connectedLinks.push(linkId);
		});
		return connectedLinks;
	}
	/**
	* Handle link change events
	*/
	handleLinkChange(change, linkIdStr) {
		if (change.action === "delete") {
			const linkId = asLinkId(linkIdStr);
			this.cleanupLinkData(linkId);
		}
	}
	/**
	* Clean up all data associated with a link
	*/
	cleanupLinkData(linkId) {
		this.linkLayouts.delete(linkId);
		this.cleanupLinkSegments(linkId);
	}
	/**
	* Clean up all segment layouts for a link
	*/
	cleanupLinkSegments(linkId) {
		const keysToDelete = [];
		for (const [key] of this.linkSegmentLayouts) if (key.startsWith(`${linkId}:`)) keysToDelete.push(key);
		for (const key of keysToDelete) {
			this.linkSegmentLayouts.delete(key);
			this.linkSegmentSpatialIndex.remove(key);
		}
	}
	/**
	* Handle reroute change events
	*/
	handleRerouteChange(change, rerouteIdStr) {
		const rerouteId = asRerouteId(rerouteIdStr);
		if (change.action === "delete") this.handleRerouteDelete(rerouteId);
		else this.handleRerouteUpsert(rerouteId);
	}
	/**
	* Handle reroute deletion
	*/
	handleRerouteDelete(rerouteId) {
		this.rerouteLayouts.delete(rerouteId);
		this.rerouteSpatialIndex.remove(String(rerouteId));
	}
	/**
	* Handle reroute upsert (update if exists, create if not)
	*/
	handleRerouteUpsert(rerouteId) {
		const rerouteData = this.yreroutes.get(String(rerouteId));
		if (!rerouteData) return;
		const position = this.getRerouteField(rerouteData, "position");
		if (!position) return;
		const layout = this.createRerouteLayout(rerouteId, position);
		this.updateRerouteLayout(rerouteId, layout);
	}
	/**
	* Create reroute layout from position
	*/
	createRerouteLayout(rerouteId, position) {
		return {
			id: rerouteId,
			position,
			radius: 8,
			bounds: {
				x: position.x - 8,
				y: position.y - 8,
				width: 16,
				height: 16
			}
		};
	}
	queueGlobalChange(change) {
		if (this.changeListeners.size === 0) return;
		this.pendingGlobalChanges.push(change);
		if (this.isGlobalDispatchQueued) return;
		this.isGlobalDispatchQueued = true;
		queueMicrotask(() => {
			this.flushQueuedGlobalChanges();
		});
	}
	flushQueuedGlobalChanges() {
		this.isGlobalDispatchQueued = false;
		if (this.pendingGlobalChanges.length === 0) return;
		const queuedChanges = this.pendingGlobalChanges;
		this.pendingGlobalChanges = [];
		queuedChanges.forEach((queuedChange) => {
			this.notifyChange(queuedChange);
		});
	}
	notifyChange(change) {
		this.changeListeners.forEach((listener) => {
			try {
				listener(change);
			} catch (error) {
				console.error("Error in layout change listener:", error);
			}
		});
	}
	notifyNodeChange(change) {
		for (const nodeId of new Set(change.nodeIds)) {
			const listeners = this.nodeChangeListeners.get(nodeId);
			if (!listeners) continue;
			listeners.forEach((listener) => {
				try {
					listener(change);
				} catch (error) {
					console.error("Error in node-scoped layout change listener:", error);
				}
			});
		}
	}
	getOperationsSince(timestamp) {
		const operations = [];
		this.yoperations.forEach((op) => {
			if (op && op.timestamp > timestamp) operations.push(op);
		});
		return operations;
	}
	getOperationsByActor(actor) {
		const operations = [];
		this.yoperations.forEach((op) => {
			if (op && op.actor === actor) operations.push(op);
		});
		return operations;
	}
	/**
	* Get the Yjs document for network sync (future feature)
	*/
	getYDoc() {
		return this.ydoc;
	}
	/**
	* Apply updates from remote peers (future feature)
	*/
	applyUpdate(update) {
		applyUpdate(this.ydoc, update);
	}
	/**
	* Get state as update for sending to peers (future feature)
	*/
	getStateAsUpdate() {
		return encodeStateAsUpdate(this.ydoc);
	}
	/**
	* Batch update node bounds using Yjs transaction for atomicity.
	*/
	batchUpdateNodeBounds(updates) {
		if (updates.length === 0) return;
		const originalSource = this.currentSource;
		const shouldNormalizeHeights = originalSource === LayoutSource.DOM;
		this.currentSource = LayoutSource.Vue;
		const nodeIds = [];
		const boundsRecord = {};
		for (const { nodeId, bounds } of updates) {
			const ynode = this.ynodes.get(nodeId);
			if (!ynode) continue;
			const currentLayout = yNodeToLayout(ynode);
			boundsRecord[nodeId] = {
				bounds: shouldNormalizeHeights ? {
					...bounds,
					height: removeNodeTitleHeight(bounds.height)
				} : bounds,
				previousBounds: currentLayout.bounds
			};
			nodeIds.push(nodeId);
		}
		if (!nodeIds.length) {
			this.currentSource = originalSource;
			return;
		}
		const operation = {
			type: "batchUpdateBounds",
			entity: "node",
			nodeIds,
			bounds: boundsRecord,
			timestamp: Date.now(),
			source: this.currentSource,
			actor: this.currentActor
		};
		this.applyOperation(operation);
		this.currentSource = originalSource;
	}
}();
//#endregion
//#region src/renderer/core/layout/operations/layoutMutations.ts
/**
* Layout Mutations - Simplified Direct Operations
*
* Provides a clean API for layout operations that are CRDT-ready.
* Operations are synchronous and applied directly to the store.
*/
var logger = import_loglevel.default.getLogger("LayoutMutations");
/**
* Composable for accessing layout mutations with clean destructuring API
*/
function useLayoutMutations() {
	/**
	* Set the current mutation source
	*/
	const setSource = (source) => {
		layoutStore.setSource(source);
	};
	/**
	* Set the current actor (for CRDT)
	*/
	const setActor = (actor) => {
		layoutStore.setActor(actor);
	};
	/**
	* Move a node to a new position
	*/
	const moveNode = (nodeId, position) => {
		const normalizedNodeId = String(nodeId);
		const existing = layoutStore.getNodeLayoutRef(normalizedNodeId).value;
		if (!existing) return;
		layoutStore.applyOperation({
			type: "moveNode",
			entity: "node",
			nodeId: normalizedNodeId,
			position,
			previousPosition: existing.position,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	function batchMoveNodes(updates) {
		if (updates.length === 0) return;
		const nodeBoundsUpdates = updates.flatMap(({ nodeId, position }) => {
			const normalizedNodeId = String(nodeId);
			const existing = layoutStore.getNodeLayoutRef(normalizedNodeId).value;
			if (!existing) return [];
			return [{
				nodeId: normalizedNodeId,
				bounds: {
					x: position.x,
					y: position.y,
					width: existing.size.width,
					height: existing.size.height
				}
			}];
		});
		if (nodeBoundsUpdates.length === 0) return;
		layoutStore.batchUpdateNodeBounds(nodeBoundsUpdates);
	}
	/**
	* Resize a node
	*/
	const resizeNode = (nodeId, size) => {
		const normalizedNodeId = String(nodeId);
		const existing = layoutStore.getNodeLayoutRef(normalizedNodeId).value;
		if (!existing) return;
		layoutStore.applyOperation({
			type: "resizeNode",
			entity: "node",
			nodeId: normalizedNodeId,
			size,
			previousSize: existing.size,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Set node z-index
	*/
	const setNodeZIndex = (nodeId, zIndex) => {
		const normalizedNodeId = String(nodeId);
		const existing = layoutStore.getNodeLayoutRef(normalizedNodeId).value;
		if (!existing) return;
		layoutStore.applyOperation({
			type: "setNodeZIndex",
			entity: "node",
			nodeId: normalizedNodeId,
			zIndex,
			previousZIndex: existing.zIndex,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Create a new node
	*/
	const createNode = (nodeId, layout) => {
		const normalizedNodeId = String(nodeId);
		const fullLayout = {
			id: normalizedNodeId,
			position: layout.position ?? {
				x: 0,
				y: 0
			},
			size: layout.size ?? {
				width: 200,
				height: 100
			},
			zIndex: layout.zIndex ?? 0,
			visible: layout.visible ?? true,
			bounds: {
				x: layout.position?.x ?? 0,
				y: layout.position?.y ?? 0,
				width: layout.size?.width ?? 200,
				height: layout.size?.height ?? 100
			}
		};
		layoutStore.applyOperation({
			type: "createNode",
			entity: "node",
			nodeId: normalizedNodeId,
			layout: fullLayout,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Delete a node
	*/
	const deleteNode = (nodeId) => {
		const normalizedNodeId = String(nodeId);
		const existing = layoutStore.getNodeLayoutRef(normalizedNodeId).value;
		if (!existing) return;
		layoutStore.applyOperation({
			type: "deleteNode",
			entity: "node",
			nodeId: normalizedNodeId,
			previousLayout: existing,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Bring a node to the front (highest z-index)
	*/
	const bringNodeToFront = (nodeId) => {
		const allNodes = layoutStore.getAllNodes().value;
		let maxZIndex = 0;
		for (const [, layout] of allNodes) if (layout.zIndex > maxZIndex) maxZIndex = layout.zIndex;
		setNodeZIndex(nodeId, maxZIndex + 1);
	};
	/**
	* Create a new link
	*/
	const createLink = (linkId, sourceNodeId, sourceSlot, targetNodeId, targetSlot) => {
		const normalizedSourceNodeId = String(sourceNodeId);
		const normalizedTargetNodeId = String(targetNodeId);
		logger.debug("Creating link:", {
			linkId,
			from: `${normalizedSourceNodeId}[${sourceSlot}]`,
			to: `${normalizedTargetNodeId}[${targetSlot}]`
		});
		layoutStore.applyOperation({
			type: "createLink",
			entity: "link",
			linkId,
			sourceNodeId: normalizedSourceNodeId,
			sourceSlot,
			targetNodeId: normalizedTargetNodeId,
			targetSlot,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Delete a link
	*/
	const deleteLink = (linkId) => {
		logger.debug("Deleting link:", linkId);
		layoutStore.applyOperation({
			type: "deleteLink",
			entity: "link",
			linkId,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Create a new reroute
	*/
	const createReroute = (rerouteId, position, parentId, linkIds = []) => {
		logger.debug("Creating reroute:", {
			rerouteId,
			position,
			parentId,
			linkCount: linkIds.length
		});
		layoutStore.applyOperation({
			type: "createReroute",
			entity: "reroute",
			rerouteId,
			position,
			parentId,
			linkIds,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Delete a reroute
	*/
	const deleteReroute = (rerouteId) => {
		logger.debug("Deleting reroute:", rerouteId);
		layoutStore.applyOperation({
			type: "deleteReroute",
			entity: "reroute",
			rerouteId,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	/**
	* Move a reroute
	*/
	const moveReroute = (rerouteId, position, previousPosition) => {
		logger.debug("Moving reroute:", {
			rerouteId,
			from: previousPosition,
			to: position
		});
		layoutStore.applyOperation({
			type: "moveReroute",
			entity: "reroute",
			rerouteId,
			position,
			previousPosition,
			timestamp: Date.now(),
			source: layoutStore.getCurrentSource(),
			actor: layoutStore.getCurrentActor()
		});
	};
	return {
		setSource,
		setActor,
		moveNode,
		batchMoveNodes,
		resizeNode,
		setNodeZIndex,
		createNode,
		deleteNode,
		bringNodeToFront,
		createLink,
		deleteLink,
		createReroute,
		deleteReroute,
		moveReroute
	};
}
//#endregion
//#region src/stores/promotionStore.ts
var EMPTY_PROMOTIONS = [];
function makePromotionEntryKey(source) {
	const base = `${source.sourceNodeId}:${source.sourceWidgetName}`;
	return source.disambiguatingSourceNodeId ? `${base}:${source.disambiguatingSourceNodeId}` : base;
}
var usePromotionStore = defineStore("promotion", () => {
	const graphPromotions = ref(/* @__PURE__ */ new Map());
	const graphRefCounts = ref(/* @__PURE__ */ new Map());
	function _getPromotionsForGraph(graphId) {
		const promotions = graphPromotions.value.get(graphId);
		if (promotions) return promotions;
		const nextPromotions = /* @__PURE__ */ new Map();
		graphPromotions.value.set(graphId, nextPromotions);
		return nextPromotions;
	}
	function _getRefCountsForGraph(graphId) {
		const refCounts = graphRefCounts.value.get(graphId);
		if (refCounts) return refCounts;
		const nextRefCounts = /* @__PURE__ */ new Map();
		graphRefCounts.value.set(graphId, nextRefCounts);
		return nextRefCounts;
	}
	function _incrementKeys(graphId, entries) {
		const refCounts = _getRefCountsForGraph(graphId);
		for (const e of entries) {
			const key = makePromotionEntryKey(e);
			refCounts.set(key, (refCounts.get(key) ?? 0) + 1);
		}
	}
	function _decrementKeys(graphId, entries) {
		const refCounts = _getRefCountsForGraph(graphId);
		for (const e of entries) {
			const key = makePromotionEntryKey(e);
			const count = (refCounts.get(key) ?? 1) - 1;
			if (count <= 0) refCounts.delete(key);
			else refCounts.set(key, count);
		}
	}
	function getPromotionsRef(graphId, subgraphNodeId) {
		return _getPromotionsForGraph(graphId).get(subgraphNodeId) ?? EMPTY_PROMOTIONS;
	}
	function getPromotions(graphId, subgraphNodeId) {
		return [...getPromotionsRef(graphId, subgraphNodeId)];
	}
	function isPromoted(graphId, subgraphNodeId, source) {
		return getPromotionsRef(graphId, subgraphNodeId).some((e) => e.sourceNodeId === source.sourceNodeId && e.sourceWidgetName === source.sourceWidgetName && e.disambiguatingSourceNodeId === source.disambiguatingSourceNodeId);
	}
	function isPromotedByAny(graphId, source) {
		return (_getRefCountsForGraph(graphId).get(makePromotionEntryKey(source)) ?? 0) > 0;
	}
	function setPromotions(graphId, subgraphNodeId, entries) {
		const promotions = _getPromotionsForGraph(graphId);
		_decrementKeys(graphId, promotions.get(subgraphNodeId) ?? []);
		_incrementKeys(graphId, entries);
		if (entries.length === 0) promotions.delete(subgraphNodeId);
		else promotions.set(subgraphNodeId, [...entries]);
	}
	function promote(graphId, subgraphNodeId, source) {
		if (isPromoted(graphId, subgraphNodeId, source)) return;
		const entries = getPromotionsRef(graphId, subgraphNodeId);
		const entry = {
			sourceNodeId: source.sourceNodeId,
			sourceWidgetName: source.sourceWidgetName
		};
		if (source.disambiguatingSourceNodeId) entry.disambiguatingSourceNodeId = source.disambiguatingSourceNodeId;
		setPromotions(graphId, subgraphNodeId, [...entries, entry]);
	}
	function demote(graphId, subgraphNodeId, source) {
		setPromotions(graphId, subgraphNodeId, getPromotionsRef(graphId, subgraphNodeId).filter((e) => !(e.sourceNodeId === source.sourceNodeId && e.sourceWidgetName === source.sourceWidgetName && e.disambiguatingSourceNodeId === source.disambiguatingSourceNodeId)));
	}
	function movePromotion(graphId, subgraphNodeId, fromIndex, toIndex) {
		const promotions = _getPromotionsForGraph(graphId);
		const currentEntries = promotions.get(subgraphNodeId);
		if (!currentEntries?.length) return;
		const entries = [...currentEntries];
		if (fromIndex < 0 || fromIndex >= entries.length || toIndex < 0 || toIndex >= entries.length || fromIndex === toIndex) return;
		const [entry] = entries.splice(fromIndex, 1);
		entries.splice(toIndex, 0, entry);
		promotions.set(subgraphNodeId, entries);
	}
	function clearGraph(graphId) {
		graphPromotions.value.delete(graphId);
		graphRefCounts.value.delete(graphId);
	}
	return {
		getPromotionsRef,
		getPromotions,
		isPromoted,
		isPromotedByAny,
		setPromotions,
		promote,
		demote,
		movePromotion,
		clearGraph
	};
});
//#endregion
//#region src/stores/widgetValueStore.ts
/**
* Strips graph/subgraph prefixes from a scoped node ID to get the bare node ID.
* e.g., "graph1:subgraph2:42" → "42"
*/
function stripGraphPrefix(scopedId) {
	return String(scopedId).replace(/^(.*:)+/, "");
}
var useWidgetValueStore = defineStore("widgetValue", () => {
	const graphWidgetStates = ref(/* @__PURE__ */ new Map());
	function getWidgetStateMap(graphId) {
		const widgetStates = graphWidgetStates.value.get(graphId);
		if (widgetStates) return widgetStates;
		const nextWidgetStates = reactive(/* @__PURE__ */ new Map());
		graphWidgetStates.value.set(graphId, nextWidgetStates);
		return nextWidgetStates;
	}
	function makeKey(nodeId, widgetName) {
		return `${nodeId}:${widgetName}`;
	}
	function registerWidget(graphId, state) {
		const widgetStates = getWidgetStateMap(graphId);
		const key = makeKey(state.nodeId, state.name);
		widgetStates.set(key, state);
		return widgetStates.get(key);
	}
	function getNodeWidgets(graphId, nodeId) {
		const widgetStates = getWidgetStateMap(graphId);
		const prefix = `${nodeId}:`;
		return [...widgetStates].filter(([key]) => key.startsWith(prefix)).map(([, state]) => state);
	}
	function getWidget(graphId, nodeId, widgetName) {
		return getWidgetStateMap(graphId).get(makeKey(nodeId, widgetName));
	}
	function clearGraph(graphId) {
		graphWidgetStates.value.delete(graphId);
	}
	return {
		registerWidget,
		getWidget,
		getNodeWidgets,
		clearGraph
	};
});
//#endregion
//#region src/types/nodeIdentification.ts
/**
* Type guard to check if a value is a NodeLocatorId
*/
function isNodeLocatorId(value) {
	if (typeof value !== "string") return false;
	const parts = value.split(":");
	if (parts.length === 1) return value.length > 0;
	if (parts.length !== 2) return false;
	if (!parts[1]) return false;
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parts[0]);
}
/**
* Type guard to check if a value is a NodeExecutionId
*/
function isNodeExecutionId(value) {
	if (typeof value !== "string") return false;
	return value.includes(":");
}
/**
* Parse a NodeLocatorId into its components
* @param id The NodeLocatorId to parse
* @returns The subgraph UUID and local node ID, or null if invalid
*/
function parseNodeLocatorId(id) {
	if (!isNodeLocatorId(id)) return null;
	const parts = id.split(":");
	if (parts.length === 1) return {
		subgraphUuid: null,
		localNodeId: isNaN(Number(id)) ? id : Number(id)
	};
	const [subgraphUuid, localNodeId] = parts;
	return {
		subgraphUuid,
		localNodeId: isNaN(Number(localNodeId)) ? localNodeId : Number(localNodeId)
	};
}
/**
* Create a NodeLocatorId from components
* @param subgraphUuid The UUID of the immediate containing subgraph
* @param localNodeId The local node ID within that subgraph
* @returns A properly formatted NodeLocatorId
*/
function createNodeLocatorId(subgraphUuid, localNodeId) {
	return `${subgraphUuid}:${localNodeId}`;
}
/**
* Parse a NodeExecutionId into its component node IDs
* @param id The NodeExecutionId to parse
* @returns Array of node IDs from root to target, or null if not an execution ID
*/
function parseNodeExecutionId(id) {
	if (!isNodeExecutionId(id)) return null;
	return id.split(":").map((part) => isNaN(Number(part)) ? part : Number(part));
}
/**
* Create a NodeExecutionId from an array of node IDs
* @param nodeIds Array of node IDs from root to target
* @returns A properly formatted NodeExecutionId
*/
function createNodeExecutionId(nodeIds) {
	return nodeIds.join(":");
}
/**
* Returns all ancestor execution IDs for a given execution ID, including itself.
*
* Example: "65:70:63" → ["65", "65:70", "65:70:63"]
*/
function getAncestorExecutionIds(executionId) {
	const parts = executionId.split(":");
	return Array.from({ length: parts.length }, (_, i) => parts.slice(0, i + 1).join(":"));
}
/**
* Returns all ancestor execution IDs for a given execution ID, excluding itself.
*
* Example: "65:70:63" → ["65", "65:70"]
*/
function getParentExecutionIds(executionId) {
	return getAncestorExecutionIds(executionId).slice(0, -1);
}
/**
* Compare two NodeExecutionIds for ascending numeric sort order.
* Splits each ID by ":" and compares segments numerically left to right.
*
* Example order: "1" < "1:20" < "2" < "10:11:12"
*/
function compareExecutionId(a, b) {
	const parse = (id) => (id ?? "").split(":").map(Number);
	const idA = parse(a);
	const idB = parse(b);
	for (let i = 0; i < Math.max(idA.length, idB.length); i++) {
		const segA = idA[i] ?? 0;
		const segB = idB[i] ?? 0;
		const diff = (Number.isNaN(segA) ? 0 : segA) - (Number.isNaN(segB) ? 0 : segB);
		if (diff !== 0) return diff;
	}
	return 0;
}
//#endregion
//#region src/utils/typeGuardUtil.ts
/**
* Check if an error is an AbortError triggered by `AbortController#abort`
* when cancelling a request.
*/
var isAbortError = (err) => err instanceof DOMException && err.name === "AbortError";
var isSubgraph = (item) => item?.isRootGraph === false;
/**
* Check if an item is non-nullish.
*/
var isNonNullish = (item) => item != null;
/**
* Type guard to check if a node is a subgraph input/output node.
* These nodes are essential to subgraph structure and should not be removed.
*/
var isSubgraphIoNode = (node) => {
	const nodeClass = node.constructor?.comfyClass;
	return nodeClass === "SubgraphInputNode" || nodeClass === "SubgraphOutputNode";
};
/**
* Type guard for slot objects (inputs/outputs)
*/
var isSlotObject = (obj) => {
	return obj !== null && typeof obj === "object" && "name" in obj && "type" in obj && "boundingRect" in obj;
};
/**
* Type guard to check if a string is a valid ResultItemType
* ResultItemType is used for asset categorization (input/output/temp)
*/
var isResultItemType = (value) => {
	return value === "input" || value === "output" || value === "temp";
};
//#endregion
//#region src/utils/graphTraversalUtil.ts
/**
* Constructs a locator ID from node data with optional subgraph context.
*
* @param nodeData - Node data containing id and optional subgraphId
* @returns The locator ID string
*/
function getLocatorIdFromNodeData(nodeData) {
	return nodeData.subgraphId ? `${nodeData.subgraphId}:${String(nodeData.id)}` : String(nodeData.id);
}
/**
* Parses an execution ID into its component parts.
*
* @param executionId - The execution ID (e.g., "123:456:789" or "789")
* @returns Array of node IDs in the path, or null if invalid
*/
function parseExecutionId(executionId) {
	if (!executionId || typeof executionId !== "string") return null;
	return executionId.split(":").filter((part) => part.length > 0);
}
/**
* Extracts the local node ID from an execution ID.
*
* @param executionId - The execution ID (e.g., "123:456:789" or "789")
* @returns The local node ID or null if invalid
*/
function getLocalNodeIdFromExecutionId(executionId) {
	const parts = parseExecutionId(executionId);
	return parts ? parts[parts.length - 1] : null;
}
/**
* Extracts the subgraph path from an execution ID.
*
* @param executionId - The execution ID (e.g., "123:456:789" or "789")
* @returns Array of subgraph node IDs (excluding the final node ID), or empty array
*/
function getSubgraphPathFromExecutionId(executionId) {
	const parts = parseExecutionId(executionId);
	return parts ? parts.slice(0, -1) : [];
}
/**
* Visits each node in a graph (non-recursive, single level).
*
* @param graph - The graph to visit nodes from
* @param visitor - Function called for each node
*/
function visitGraphNodes(graph, visitor) {
	for (const node of graph.nodes) visitor(node);
}
/**
* Traverses a path of subgraphs to reach a target graph.
*
* @param startGraph - The graph to start from
* @param path - Array of subgraph node IDs to traverse
* @returns The target graph or null if path is invalid
*/
function traverseSubgraphPath(startGraph, path) {
	let currentGraph = startGraph;
	for (const nodeId of path) {
		const node = currentGraph.getNodeById(nodeId);
		if (!node?.isSubgraphNode?.() || !node.subgraph) return null;
		currentGraph = node.subgraph;
	}
	return currentGraph;
}
/**
* Traverses all nodes in a graph hierarchy (including subgraphs) and invokes
* a callback on each node that has the specified property.
*
* @param graph - The root graph to start traversal from
* @param callbackProperty - The name of the callback property to invoke on each node
*/
function triggerCallbackOnAllNodes(graph, callbackProperty) {
	forEachNode(graph, (node) => {
		const callback = node[callbackProperty];
		if (typeof callback === "function") callback.call(node);
	});
}
/**
* Maps a function over all nodes in a graph hierarchy (including subgraphs).
* This is a pure functional traversal that doesn't mutate the graph.
*
* @param graph - The root graph to traverse
* @param mapFn - Function to apply to each node
* @returns Array of mapped results (excluding undefined values)
*/
function mapAllNodes(graph, mapFn) {
	const results = [];
	visitGraphNodes(graph, (node) => {
		if (node.isSubgraphNode?.() && node.subgraph) results.push(...mapAllNodes(node.subgraph, mapFn));
		const result = mapFn(node);
		if (result !== void 0) results.push(result);
	});
	return results;
}
/**
* Executes a side-effect function on all nodes in a graph hierarchy.
* This is for operations that modify nodes or perform side effects.
*
* @param graph - The root graph to traverse
* @param fn - Function to execute on each node
*/
function forEachNode(graph, fn) {
	visitGraphNodes(graph, (node) => {
		if (node.isSubgraphNode?.() && node.subgraph) forEachNode(node.subgraph, fn);
		fn(node);
	});
}
/**
* Collects all nodes in a graph hierarchy (including subgraphs) into a flat array.
*
* @param graph - The root graph to collect nodes from
* @param filter - Optional filter function to include only specific nodes
* @returns Array of all nodes in the graph hierarchy
*/
function collectAllNodes(graph, filter) {
	return mapAllNodes(graph, (node) => {
		if (!filter || filter(node)) return node;
	});
}
/**
* Find a subgraph by its UUID anywhere in the graph hierarchy.
*
* @param graph - The root graph to search
* @param targetUuid - The UUID of the subgraph to find
* @returns The subgraph if found, null otherwise
*/
function findSubgraphByUuid(graph, targetUuid) {
	if ("subgraphs" in graph && graph.subgraphs instanceof Map) return graph.subgraphs.get(targetUuid) ?? null;
	for (const node of graph.nodes) if (node.isSubgraphNode?.() && node.subgraph) {
		if (node.subgraph.id === targetUuid) return node.subgraph;
		const found = findSubgraphByUuid(node.subgraph, targetUuid);
		if (found) return found;
	}
	return null;
}
/**
* Iteratively finds the path of subgraph IDs to a target subgraph.
* @param rootGraph The graph to start searching from.
* @param targetId The ID of the subgraph to find.
* @returns An array of subgraph IDs representing the path, or `null` if not found.
*/
function findSubgraphPathById(rootGraph, targetId) {
	const stack = [{
		graph: rootGraph,
		path: []
	}];
	while (stack.length > 0) {
		const { graph, path } = stack.pop();
		if (!graph || !graph._nodes || !Array.isArray(graph._nodes)) continue;
		for (const node of graph._nodes) if (node.isSubgraphNode?.() && node.subgraph) {
			const newPath = [...path, String(node.subgraph.id)];
			if (node.subgraph.id === targetId) return newPath;
			stack.push({
				graph: node.subgraph,
				path: newPath
			});
		}
	}
	return null;
}
/**
* Gets the root parent node associated with a hierarchical execution ID.
* Both Group Nodes and Subgraph Nodes use hierarchical IDs (e.g. "rootId:childId:...").
* The root parent is always located in the rootGraph.
*
* @param rootGraph - The root graph to search from
* @param executionId - The execution ID (e.g., "123:456")
* @returns The root parent node if found, null otherwise
*/
function getRootParentNode(rootGraph, executionId) {
	const parts = parseExecutionId(executionId);
	if (!parts || parts.length < 2) return null;
	const parentId = parts[0];
	if (!rootGraph) return null;
	return rootGraph.getNodeById(Number(parentId)) || null;
}
/**
* Get a node by its execution ID from anywhere in the graph hierarchy.
* Execution IDs use hierarchical format like "123:456:789" for nested nodes.
*
* @param rootGraph - The root graph to search from
* @param executionId - The execution ID (e.g., "123:456:789" or "789")
* @returns The node if found, null otherwise
*/
function getNodeByExecutionId(rootGraph, executionId) {
	if (!rootGraph) return null;
	const localNodeId = getLocalNodeIdFromExecutionId(executionId);
	if (!localNodeId) return null;
	const subgraphPath = getSubgraphPathFromExecutionId(executionId);
	if (subgraphPath.length === 0) return rootGraph.getNodeById(localNodeId) || null;
	const targetGraph = traverseSubgraphPath(rootGraph, subgraphPath);
	if (!targetGraph) return null;
	return targetGraph.getNodeById(localNodeId) || null;
}
/**
* Returns the execution ID for a node relative to the root graph.
*
* Root-level nodes return their ID directly (e.g. "42").
* Nodes inside subgraphs return a colon-separated chain (e.g. "65:70:63").
*
* @param rootGraph - The root graph to resolve from
* @param node - The node whose execution ID to compute
* @returns The execution ID string, or null if the node has no graph
*/
function getExecutionIdByNode(rootGraph, node) {
	if (!node.graph) return null;
	if (node.graph === rootGraph || node.graph.isRootGraph) return String(node.id);
	const parentPath = findPartialExecutionPathToGraph(node.graph, rootGraph);
	if (parentPath === void 0) return null;
	return `${parentPath}:${node.id}`;
}
/**
* Returns the execution ID for a node described by plain data (id + subgraphId),
* without requiring a pre-existing {@link LGraphNode} reference.
* Subgraph nodes return the full colon-separated path (e.g. `"65:70:63"`).
* Falls back to `String(nodeData.id)` if the node cannot be resolved.
*
* @param rootGraph - The root graph to resolve from
* @param nodeData  - Object with `id` (local node ID) and optional `subgraphId` (UUID)
*/
function getExecutionIdFromNodeData(rootGraph, nodeData) {
	const node = getNodeByLocatorId(rootGraph, getLocatorIdFromNodeData(nodeData));
	return node ? getExecutionIdByNode(rootGraph, node) ?? String(nodeData.id) : String(nodeData.id);
}
/**
* Get a node by its locator ID from anywhere in the graph hierarchy.
* Locator IDs use UUID format like "uuid:nodeId" for subgraph nodes.
*
* @param rootGraph - The root graph to search from
* @param locatorId - The locator ID (e.g., "uuid:123" or "123")
* @returns The node if found, null otherwise
*/
function getNodeByLocatorId(rootGraph, locatorId) {
	if (!rootGraph) return null;
	const parsedIds = parseNodeLocatorId(locatorId);
	if (!parsedIds) return null;
	const { subgraphUuid, localNodeId } = parsedIds;
	if (!subgraphUuid) return rootGraph.getNodeById(localNodeId) || null;
	const targetSubgraph = findSubgraphByUuid(rootGraph, subgraphUuid);
	if (!targetSubgraph) return null;
	return targetSubgraph.getNodeById(localNodeId) || null;
}
/**
* Convert execution context node IDs to NodeLocatorIds.
* Uses traverseSubgraphPath to resolve the subgraph chain.
*
* @param rootGraph - The root graph to resolve against
* @param nodeId - The node ID from execution context (could be execution ID like "123:456:789")
* @returns The NodeLocatorId, or undefined if resolution fails
*/
function executionIdToNodeLocatorId(rootGraph, nodeId) {
	const nodeIdStr = String(nodeId);
	if (!nodeIdStr.includes(":")) return nodeIdStr;
	const parts = nodeIdStr.split(":");
	const localNodeId = parts.at(-1);
	const targetGraph = traverseSubgraphPath(rootGraph, parts.slice(0, -1));
	if (!targetGraph) return void 0;
	return createNodeLocatorId(targetGraph.id, localNodeId);
}
/**
* Applies a function to all nodes whose type matches a subgraph ID.
* Operates on the entire graph hierarchy starting from the root.
*
* @param rootGraph - The root graph to search in
* @param subgraphId - The ID/type of the subgraph to match nodes against
* @param fn - Function to apply to each matching node
*/
function forEachSubgraphNode(rootGraph, subgraphId, fn) {
	if (!rootGraph || !subgraphId) return;
	forEachNode(rootGraph, (node) => {
		if (node.type === subgraphId) fn(node);
	});
}
/**
* Gets all non-IO nodes from a subgraph (excludes SubgraphInputNode and SubgraphOutputNode).
* These are the user-created nodes that can be safely removed when clearing a subgraph.
*
* @param subgraph - The subgraph to get non-IO nodes from
* @returns Array of non-IO nodes (user-created nodes)
*/
function getAllNonIoNodesInSubgraph(subgraph) {
	return subgraph.nodes.filter((node) => !isSubgraphIoNode(node));
}
/**
* Performs depth-first traversal of nodes and their subgraphs.
* Generic visitor pattern that can be used for various node processing tasks.
*
* @param nodes - Starting nodes for traversal
* @param options - Optional traversal configuration
*/
function traverseNodesDepthFirst(nodes, options) {
	const { visitor = () => void 0, initialContext = void 0, expandSubgraphs = true } = options || {};
	const stack = [];
	for (const node of nodes) stack.push({
		node,
		context: initialContext
	});
	while (stack.length > 0) {
		const { node, context } = stack.pop();
		const childContext = visitor(node, context);
		if (expandSubgraphs && node.isSubgraphNode?.() && node.subgraph) {
			const children = node.subgraph.nodes;
			for (let i = children.length - 1; i >= 0; i--) stack.push({
				node: children[i],
				context: childContext
			});
		}
	}
}
/**
* Collects nodes with custom data during depth-first traversal.
* Generic collector that can gather any type of data per node.
*
* @param nodes - Starting nodes for traversal
* @param options - Optional collection configuration
* @returns Array of collected data
*/
function collectFromNodes(nodes, options) {
	const { collector = (node) => node, contextBuilder = () => void 0, initialContext = void 0, expandSubgraphs = true } = options || {};
	const results = [];
	traverseNodesDepthFirst(nodes, {
		visitor: (node, context) => {
			const data = collector(node, context);
			if (data !== null) results.push(data);
			return contextBuilder(node, context);
		},
		initialContext,
		expandSubgraphs
	});
	return results;
}
/**
* Collects execution IDs for selected nodes and all their descendants.
* Uses the generic DFS traversal with optimized string building.
*
* @param selectedNodes - The selected nodes to process
* @returns Array of execution IDs for selected nodes and all nodes within selected subgraphs
*/
function getExecutionIdsForSelectedNodes(selectedNodes, startGraph = selectedNodes[0]?.graph) {
	if (!startGraph) return [];
	const rootGraph = startGraph.rootGraph;
	const parentPath = startGraph.isRootGraph ? "" : findPartialExecutionPathToGraph(startGraph, rootGraph);
	if (parentPath === void 0) return [];
	const buildExecId = (node, parentExecutionId) => {
		const nodeId = String(node.id);
		return parentExecutionId ? `${parentExecutionId}:${nodeId}` : nodeId;
	};
	return collectFromNodes(selectedNodes, {
		collector: buildExecId,
		contextBuilder: buildExecId,
		initialContext: parentPath,
		expandSubgraphs: true
	});
}
/**
* Returns the set of local graph node IDs (as strings) for nodes that live in
* `activeGraph` and whose execution ID appears in `executionIds`.
*
* @param rootGraph - The root graph used to resolve execution IDs
* @param activeGraph - The currently-visible graph scope
* @param executionIds - Set of execution IDs to look up
* @returns Set of stringified local node IDs belonging to activeGraph
*/
function getActiveGraphNodeIds(rootGraph, activeGraph, executionIds) {
	const ids = /* @__PURE__ */ new Set();
	for (const executionId of executionIds) {
		const graphNode = getNodeByExecutionId(rootGraph, executionId);
		if (graphNode?.graph === activeGraph) ids.add(String(graphNode.id));
	}
	return ids;
}
function findPartialExecutionPathToGraph(target, root) {
	for (const node of root.nodes) {
		if (!node.isSubgraphNode()) continue;
		if (node.subgraph === target) return `${node.id}`;
		const subpath = findPartialExecutionPathToGraph(target, node.subgraph);
		if (subpath !== void 0) return node.id + ":" + subpath;
	}
}
//#endregion
//#region src/lib/litegraph/src/linkDeduplication.ts
/** Generates a unique string key for a link's connection tuple. */
function linkTupleKey(link) {
	return `${link.origin_id}\0${link.origin_slot}\0${link.target_id}\0${link.target_slot}`;
}
/** Groups all link IDs by their connection tuple key. */
function groupLinksByTuple(links) {
	const groups = /* @__PURE__ */ new Map();
	for (const [id, link] of links) {
		const key = linkTupleKey(link);
		if (!groups.has(key)) groups.set(key, []);
		groups.get(key).push(id);
	}
	return groups;
}
/**
* Finds the link ID actually referenced by an input on the target node.
* Cannot rely on target_slot index because widget-to-input conversions
* during configure() can shift slot indices.
*/
function selectSurvivorLink(ids, node) {
	if (!node) return ids[0];
	for (const input of node.inputs ?? []) {
		if (!input) continue;
		const match = ids.find((id) => input.link === id);
		if (match != null) return match;
	}
	return ids[0];
}
/** Removes duplicate links from origin outputs and the graph's link map. */
function purgeOrphanedLinks(ids, keepId, links, getNodeById) {
	for (const id of ids) {
		if (id === keepId) continue;
		const link = links.get(id);
		if (!link) continue;
		const output = getNodeById(link.origin_id)?.outputs?.[link.origin_slot];
		if (output?.links) {
			for (let i = output.links.length - 1; i >= 0; i--) if (output.links[i] === id) output.links.splice(i, 1);
		}
		links.delete(id);
	}
}
/** Ensures input.link on the target node points to the surviving link. */
function repairInputLinks(ids, keepId, node) {
	if (!node) return;
	const duplicateIds = new Set(ids);
	for (const input of node.inputs ?? []) {
		if (input?.link == null || input.link === keepId) continue;
		if (duplicateIds.has(input.link)) input.link = keepId;
	}
}
//#endregion
//#region src/constants/groupNodeConstants.ts
/**
* Constants for group node type prefixes and separators
*
* v1 Prefix + Separator: workflow/
* v2 Prefix + Separator: workflow> (ComfyUI_frontend v1.2.63)
*/
var PREFIX = "workflow";
//#endregion
//#region src/lib/litegraph/src/canvas/MovingLinkBase.ts
/**
* Represents an existing link that is currently being dragged by the user from one slot to another.
*
* This is a heavier, but short-lived convenience data structure.
* All refs to {@link MovingInputLink} and {@link MovingOutputLink} should be discarded on drop.
* @remarks
* At time of writing, Litegraph is using several different styles and methods to handle link dragging.
*
* Once the library has undergone more substantial changes to the way links are managed,
* many properties of this class will be superfluous and removable.
*/
var MovingLinkBase = class {
	outputNodeId;
	outputNode;
	outputSlot;
	outputIndex;
	outputPos;
	inputNodeId;
	inputNode;
	inputSlot;
	inputIndex;
	inputPos;
	constructor(network, link, toType, fromReroute, dragDirection = LinkDirection.CENTER) {
		this.network = network;
		this.link = link;
		this.toType = toType;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const { origin_id: outputNodeId, target_id: inputNodeId, origin_slot: outputIndex, target_slot: inputIndex } = link;
		const outputNode = network.getNodeById(outputNodeId) ?? void 0;
		if (!outputNode) throw new Error(`Creating MovingRenderLink for link [${link.id}] failed: Output node [${outputNodeId}] not found.`);
		const outputSlot = outputNode.outputs.at(outputIndex);
		if (!outputSlot) throw new Error(`Creating MovingRenderLink for link [${link.id}] failed: Output slot [${outputIndex}] not found.`);
		this.outputNodeId = outputNodeId;
		this.outputNode = outputNode;
		this.outputSlot = outputSlot;
		this.outputIndex = outputIndex;
		this.outputPos = outputNode.getOutputPos(outputIndex);
		const inputNode = network.getNodeById(inputNodeId) ?? void 0;
		if (!inputNode) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Input node [${inputNodeId}] not found.`);
		const inputSlot = inputNode.inputs.at(inputIndex);
		if (!inputSlot) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Input slot [${inputIndex}] not found.`);
		this.inputNodeId = inputNodeId;
		this.inputNode = inputNode;
		this.inputSlot = inputSlot;
		this.inputIndex = inputIndex;
		this.inputPos = inputNode.getInputPos(inputIndex);
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/MovingInputLink.ts
var MovingInputLink = class extends MovingLinkBase {
	toType = "input";
	node;
	fromSlot;
	fromPos;
	fromDirection;
	fromSlotIndex;
	disconnectOnDrop;
	disconnectOrigin;
	constructor(network, link, fromReroute, dragDirection = LinkDirection.CENTER, startPoint) {
		super(network, link, "input", fromReroute, dragDirection);
		this.node = this.outputNode;
		this.fromSlot = this.outputSlot;
		this.fromPos = fromReroute?.pos ?? this.outputPos;
		this.fromDirection = LinkDirection.NONE;
		this.fromSlotIndex = this.outputIndex;
		this.disconnectOnDrop = true;
		this.disconnectOrigin = startPoint ?? this.inputPos;
	}
	canConnectToInput(inputNode, input) {
		return this.node.canConnectTo(inputNode, input, this.outputSlot);
	}
	canConnectToOutput() {
		return false;
	}
	canConnectToReroute(reroute) {
		return reroute.origin_id !== this.inputNode.id;
	}
	connectToInput(inputNode, input, events) {
		if (input === this.inputSlot) return;
		this.inputNode.disconnectInput(this.inputIndex, true);
		const link = this.outputNode.connectSlots(this.outputSlot, inputNode, input, this.fromReroute?.id);
		if (link) events.dispatch("input-moved", this);
		return link;
	}
	connectToOutput() {
		throw new Error("MovingInputLink cannot connect to an output.");
	}
	connectToSubgraphInput() {
		throw new Error("MovingInputLink cannot connect to a subgraph input.");
	}
	connectToSubgraphOutput(output, events) {
		const newLink = output.connect(this.fromSlot, this.node, this.fromReroute?.id);
		events?.dispatch("link-created", newLink);
	}
	connectToRerouteInput(reroute, { node: inputNode, input, link: existingLink }, events, originalReroutes) {
		const { outputNode, outputSlot, fromReroute } = this;
		for (const reroute of originalReroutes) {
			if (reroute.id === this.link.parentId) break;
			if (reroute.totalLinks === 1) reroute.remove();
		}
		reroute.parentId = fromReroute?.id;
		if (outputNode.connectSlots(outputSlot, inputNode, input, existingLink.parentId)) events.dispatch("input-moved", this);
	}
	connectToRerouteOutput() {
		throw new Error("MovingInputLink cannot connect to an output.");
	}
	disconnect() {
		return this.inputNode.disconnectInput(this.inputIndex, true);
	}
	drawConnectionCircle(ctx, to) {
		if (!this.disconnectOnDrop) return;
		const [originX, originY] = this.disconnectOrigin;
		const radius = 35;
		const distSquared = (originX - to[0]) ** 2 + (originY - to[1]) ** 2;
		ctx.save();
		ctx.strokeStyle = LiteGraph.WIDGET_OUTLINE_COLOR;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(originX + radius, originY);
		ctx.arc(originX, originY, radius, 0, Math.PI * 2);
		ctx.stroke();
		ctx.restore();
		this.disconnectOnDrop = distSquared < radius ** 2;
	}
};
//#endregion
//#region src/renderer/core/canvas/useAutoPan.ts
var EDGE_THRESHOLD = 50;
/**
* Calculates the pan speed for a single axis based on distance from the edge.
* Returns negative speed for left/top edges, positive for right/bottom edges,
* or 0 if the pointer is not near any edge. Pans at max speed when the
* pointer is outside the bounds (e.g. dragged outside the window).
*/
function calculateEdgePanSpeed(pointerPos, minBound, maxBound, scale, maxPanSpeed) {
	if (maxPanSpeed <= 0) return 0;
	const distFromMin = pointerPos - minBound;
	const distFromMax = maxBound - pointerPos;
	if (distFromMin < 0) return -maxPanSpeed / scale;
	if (distFromMax < 0) return maxPanSpeed / scale;
	if (distFromMin < EDGE_THRESHOLD) return -maxPanSpeed * (1 - distFromMin / EDGE_THRESHOLD) / scale;
	if (distFromMax < EDGE_THRESHOLD) return maxPanSpeed * (1 - distFromMax / EDGE_THRESHOLD) / scale;
	return 0;
}
var AutoPanController = class {
	pointerX = 0;
	pointerY = 0;
	canvas;
	ds;
	maxPanSpeed;
	onPan;
	raf;
	constructor(options) {
		this.canvas = options.canvas;
		this.ds = options.ds;
		this.maxPanSpeed = options.maxPanSpeed;
		this.onPan = options.onPan;
		this.raf = useRafFn(() => this.tick(), { immediate: false });
	}
	updatePointer(screenX, screenY) {
		this.pointerX = screenX;
		this.pointerY = screenY;
	}
	start() {
		this.raf.resume();
	}
	stop() {
		this.raf.pause();
	}
	tick() {
		const rect = this.canvas.getBoundingClientRect();
		const scale = this.ds.scale;
		const panX = calculateEdgePanSpeed(this.pointerX, rect.left, rect.right, scale, this.maxPanSpeed);
		const panY = calculateEdgePanSpeed(this.pointerY, rect.top, rect.bottom, scale, this.maxPanSpeed);
		if (panX === 0 && panY === 0) return;
		this.ds.offset[0] -= panX;
		this.ds.offset[1] -= panY;
		this.onPan(panX, panY);
	}
};
//#endregion
//#region src/renderer/core/canvas/pathRenderer.ts
var CanvasPathRenderer = class {
	/**
	* Draw a link between two points
	* Returns a Path2D object for hit detection
	*/
	drawLink(ctx, link, context) {
		const path = new Path2D();
		const isHighlighted = context.highlightedIds?.has(link.id) ?? false;
		const color = this.determineLinkColor(link, context, isHighlighted);
		ctx.save();
		if (link.disabled && context.patterns?.disabled) ctx.strokeStyle = context.patterns.disabled;
		else ctx.strokeStyle = color;
		ctx.lineWidth = context.style.connectionWidth;
		ctx.lineJoin = "round";
		if (context.style.borderWidth && !context.style.lowQuality) this.drawLinkPath(ctx, path, link, context, context.style.connectionWidth + context.style.borderWidth, "rgba(0,0,0,0.5)");
		this.drawLinkPath(ctx, path, link, context, context.style.connectionWidth, color);
		this.calculateCenterPoint(link, context);
		if (context.style.showArrows) this.drawArrows(ctx, link, context, color);
		if (context.style.showCenterMarker && context.scale && context.scale >= .6 && context.style.highQuality) this.drawCenterMarker(ctx, link, context, color);
		if (link.flow && context.animation) this.drawFlowAnimation(ctx, path, link, context);
		ctx.restore();
		return path;
	}
	determineLinkColor(link, context, isHighlighted) {
		if (isHighlighted) return context.colors.highlighted;
		if (link.color) return link.color;
		if (link.type && context.colors.byType[link.type]) return context.colors.byType[link.type];
		return context.colors.default;
	}
	drawLinkPath(ctx, path, link, context, lineWidth, color) {
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		const start = link.startPoint;
		const end = link.endPoint;
		if (context.style.mode === "linear") this.buildLinearPath(path, start, end, link.startDirection, link.endDirection);
		else if (context.style.mode === "straight") this.buildStraightPath(path, start, end, link.startDirection, link.endDirection);
		else this.buildSplinePath(path, start, end, link.startDirection, link.endDirection, link.controlPoints);
		ctx.stroke(path);
	}
	buildLinearPath(path, start, end, startDir, endDir) {
		const l = 15;
		const innerA = {
			x: start.x,
			y: start.y
		};
		const innerB = {
			x: end.x,
			y: end.y
		};
		switch (startDir) {
			case "left":
				innerA.x -= l;
				break;
			case "right":
				innerA.x += l;
				break;
			case "up":
				innerA.y -= l;
				break;
			case "down":
				innerA.y += l;
				break;
			case "none": break;
		}
		switch (endDir) {
			case "left":
				innerB.x -= l;
				break;
			case "right":
				innerB.x += l;
				break;
			case "up":
				innerB.y -= l;
				break;
			case "down":
				innerB.y += l;
				break;
			case "none": break;
		}
		path.moveTo(start.x, start.y);
		path.lineTo(innerA.x, innerA.y);
		path.lineTo(innerB.x, innerB.y);
		path.lineTo(end.x, end.y);
	}
	buildStraightPath(path, start, end, startDir, endDir) {
		const l = 10;
		const innerA = {
			x: start.x,
			y: start.y
		};
		const innerB = {
			x: end.x,
			y: end.y
		};
		switch (startDir) {
			case "left":
				innerA.x -= l;
				break;
			case "right":
				innerA.x += l;
				break;
			case "up":
				innerA.y -= l;
				break;
			case "down":
				innerA.y += l;
				break;
			case "none": break;
		}
		switch (endDir) {
			case "left":
				innerB.x -= l;
				break;
			case "right":
				innerB.x += l;
				break;
			case "up":
				innerB.y -= l;
				break;
			case "down":
				innerB.y += l;
				break;
			case "none": break;
		}
		const midX = (innerA.x + innerB.x) * .5;
		path.moveTo(start.x, start.y);
		path.lineTo(innerA.x, innerA.y);
		path.lineTo(midX, innerA.y);
		path.lineTo(midX, innerB.y);
		path.lineTo(innerB.x, innerB.y);
		path.lineTo(end.x, end.y);
	}
	buildSplinePath(path, start, end, startDir, endDir, controlPoints) {
		path.moveTo(start.x, start.y);
		const controls = controlPoints || this.calculateControlPoints(start, end, startDir, endDir);
		if (controls.length >= 2) path.bezierCurveTo(controls[0].x, controls[0].y, controls[1].x, controls[1].y, end.x, end.y);
		else if (controls.length === 1) path.quadraticCurveTo(controls[0].x, controls[0].y, end.x, end.y);
		else path.lineTo(end.x, end.y);
	}
	calculateControlPoints(start, end, startDir, endDir) {
		const dist = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
		const controlDist = Math.max(30, dist * .25);
		const startControl = this.getDirectionOffset(startDir, controlDist);
		const endControl = this.getDirectionOffset(endDir, controlDist);
		return [{
			x: start.x + startControl.x,
			y: start.y + startControl.y
		}, {
			x: end.x + endControl.x,
			y: end.y + endControl.y
		}];
	}
	getDirectionOffset(direction, distance) {
		switch (direction) {
			case "left": return {
				x: -distance,
				y: 0
			};
			case "right": return {
				x: distance,
				y: 0
			};
			case "up": return {
				x: 0,
				y: -distance
			};
			case "down": return {
				x: 0,
				y: distance
			};
			default: return {
				x: 0,
				y: 0
			};
		}
	}
	drawArrows(ctx, link, context, color) {
		if (!context.style.showArrows) return;
		for (const t of [.25, .75]) {
			const posA = this.computeConnectionPoint(link, t, context);
			const posB = this.computeConnectionPoint(link, t + .01, context);
			const angle = Math.atan2(posB.y - posA.y, posB.x - posA.x);
			const transform = ctx.getTransform();
			ctx.translate(posA.x, posA.y);
			ctx.rotate(angle);
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(-5, -3);
			ctx.lineTo(0, 7);
			ctx.lineTo(5, -3);
			ctx.fill();
			ctx.setTransform(transform);
		}
	}
	/**
	* Compute a point along the link path at position t (0 to 1)
	* For backward compatibility with original litegraph, this always uses
	* bezier calculation with spline offsets, regardless of render mode.
	* This ensures arrow positions match the original implementation.
	*/
	computeConnectionPoint(link, t, _context) {
		const { startPoint, endPoint, startDirection, endDirection } = link;
		const dist = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
		const factor = .25;
		const pa = {
			x: startPoint.x,
			y: startPoint.y
		};
		const pb = {
			x: endPoint.x,
			y: endPoint.y
		};
		switch (startDirection) {
			case "left":
				pa.x -= dist * factor;
				break;
			case "right":
				pa.x += dist * factor;
				break;
			case "up":
				pa.y -= dist * factor;
				break;
			case "down":
				pa.y += dist * factor;
				break;
			case "none": break;
		}
		switch (endDirection) {
			case "left":
				pb.x -= dist * factor;
				break;
			case "right":
				pb.x += dist * factor;
				break;
			case "up":
				pb.y -= dist * factor;
				break;
			case "down":
				pb.y += dist * factor;
				break;
			case "none": break;
		}
		const c1 = (1 - t) * (1 - t) * (1 - t);
		const c2 = 3 * ((1 - t) * (1 - t)) * t;
		const c3 = 3 * (1 - t) * (t * t);
		const c4 = t * t * t;
		return {
			x: c1 * startPoint.x + c2 * pa.x + c3 * pb.x + c4 * endPoint.x,
			y: c1 * startPoint.y + c2 * pa.y + c3 * pb.y + c4 * endPoint.y
		};
	}
	drawFlowAnimation(ctx, _path, link, context) {
		if (!context.animation) return;
		const time = context.animation.time;
		const linkColor = this.determineLinkColor(link, context, false);
		ctx.save();
		ctx.fillStyle = linkColor;
		for (let i = 0; i < 5; ++i) {
			const f = (time + i * .2) % 1;
			const flowPos = this.computeConnectionPoint(link, f, context);
			ctx.beginPath();
			ctx.arc(flowPos.x, flowPos.y, 5, 0, 2 * Math.PI);
			ctx.fill();
		}
		ctx.restore();
	}
	/**
	* Utility to find a point on a bezier curve (for hit detection)
	*/
	findPointOnBezier(t, p0, p1, p2, p3) {
		const mt = 1 - t;
		const mt2 = mt * mt;
		const mt3 = mt2 * mt;
		const t2 = t * t;
		const t3 = t2 * t;
		return {
			x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
			y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y
		};
	}
	/**
	* Draw a link being dragged from a slot to the mouse position
	* Returns a Path2D object for potential hit detection
	*/
	drawDraggingLink(ctx, dragData, context) {
		const linkData = dragData.fromInput ? {
			id: "dragging",
			startPoint: dragData.dragPoint,
			endPoint: dragData.fixedPoint,
			startDirection: dragData.dragDirection || this.getOppositeDirection(dragData.fixedDirection),
			endDirection: dragData.fixedDirection,
			color: dragData.color,
			type: dragData.type,
			disabled: dragData.disabled
		} : {
			id: "dragging",
			startPoint: dragData.fixedPoint,
			endPoint: dragData.dragPoint,
			startDirection: dragData.fixedDirection,
			endDirection: dragData.dragDirection || this.getOppositeDirection(dragData.fixedDirection),
			color: dragData.color,
			type: dragData.type,
			disabled: dragData.disabled
		};
		return this.drawLink(ctx, linkData, context);
	}
	/**
	* Get the opposite direction (for drag preview)
	*/
	getOppositeDirection(direction) {
		switch (direction) {
			case "left": return "right";
			case "right": return "left";
			case "up": return "down";
			case "down": return "up";
			default: return "none";
		}
	}
	/**
	* Get the center point of a link (useful for labels, debugging)
	*/
	getLinkCenter(link) {
		return {
			x: (link.startPoint.x + link.endPoint.x) / 2,
			y: (link.startPoint.y + link.endPoint.y) / 2
		};
	}
	/**
	* Calculate and store the center point and angle of a link
	* Mimics the original litegraph center point calculation
	*/
	calculateCenterPoint(link, context) {
		const { startPoint, endPoint, controlPoints } = link;
		if (context.style.mode === "spline" && controlPoints && controlPoints.length >= 2) {
			const centerPos = this.findPointOnBezier(.5, startPoint, controlPoints[0], controlPoints[1], endPoint);
			link.centerPos = centerPos;
			if (context.style.centerMarkerShape === "arrow") {
				const justPastCenter = this.findPointOnBezier(.51, startPoint, controlPoints[0], controlPoints[1], endPoint);
				link.centerAngle = Math.atan2(justPastCenter.y - centerPos.y, justPastCenter.x - centerPos.x);
			}
		} else if (context.style.mode === "linear") {
			const l = 15;
			const innerA = {
				x: startPoint.x,
				y: startPoint.y
			};
			const innerB = {
				x: endPoint.x,
				y: endPoint.y
			};
			switch (link.startDirection) {
				case "left":
					innerA.x -= l;
					break;
				case "right":
					innerA.x += l;
					break;
				case "up":
					innerA.y -= l;
					break;
				case "down":
					innerA.y += l;
					break;
			}
			switch (link.endDirection) {
				case "left":
					innerB.x -= l;
					break;
				case "right":
					innerB.x += l;
					break;
				case "up":
					innerB.y -= l;
					break;
				case "down":
					innerB.y += l;
					break;
			}
			link.centerPos = {
				x: (innerA.x + innerB.x) * .5,
				y: (innerA.y + innerB.y) * .5
			};
			if (context.style.centerMarkerShape === "arrow") link.centerAngle = Math.atan2(innerB.y - innerA.y, innerB.x - innerA.x);
		} else if (context.style.mode === "straight") {
			const l = 10;
			const innerA = {
				x: startPoint.x,
				y: startPoint.y
			};
			const innerB = {
				x: endPoint.x,
				y: endPoint.y
			};
			switch (link.startDirection) {
				case "left":
					innerA.x -= l;
					break;
				case "right":
					innerA.x += l;
					break;
				case "up":
					innerA.y -= l;
					break;
				case "down":
					innerA.y += l;
					break;
			}
			switch (link.endDirection) {
				case "left":
					innerB.x -= l;
					break;
				case "right":
					innerB.x += l;
					break;
				case "up":
					innerB.y -= l;
					break;
				case "down":
					innerB.y += l;
					break;
			}
			link.centerPos = {
				x: (innerA.x + innerB.x) * .5,
				y: (innerA.y + innerB.y) * .5
			};
			if (context.style.centerMarkerShape === "arrow") {
				const diff = innerB.y - innerA.y;
				if (Math.abs(diff) < 4) link.centerAngle = 0;
				else if (diff > 0) link.centerAngle = Math.PI * .5;
				else link.centerAngle = -(Math.PI * .5);
			}
		} else {
			link.centerPos = this.getLinkCenter(link);
			if (context.style.centerMarkerShape === "arrow") link.centerAngle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
		}
	}
	/**
	* Draw the center marker on a link (for menu interaction)
	* Matches the original litegraph center marker rendering
	*/
	drawCenterMarker(ctx, link, context, color) {
		if (!link.centerPos) return;
		ctx.beginPath();
		if (context.style.centerMarkerShape === "arrow" && link.centerAngle !== void 0) {
			const transform = ctx.getTransform();
			ctx.translate(link.centerPos.x, link.centerPos.y);
			ctx.rotate(link.centerAngle);
			ctx.moveTo(-3.2, -5);
			ctx.lineTo(7, 0);
			ctx.lineTo(-3.2, 5);
			ctx.setTransform(transform);
		} else ctx.arc(link.centerPos.x, link.centerPos.y, 5, 0, Math.PI * 2);
		if (link.disabled && context.patterns?.disabled) {
			const { fillStyle, globalAlpha } = ctx;
			ctx.fillStyle = context.patterns.disabled;
			ctx.globalAlpha = .75;
			ctx.fill();
			ctx.globalAlpha = globalAlpha;
			ctx.fillStyle = fillStyle;
		} else {
			ctx.fillStyle = color;
			ctx.fill();
		}
	}
};
//#endregion
//#region src/renderer/core/canvas/litegraph/litegraphLinkAdapter.ts
var LitegraphLinkAdapter = class {
	pathRenderer = new CanvasPathRenderer();
	constructor(enableLayoutStoreWrites = true) {
		this.enableLayoutStoreWrites = enableLayoutStoreWrites;
	}
	/**
	* Convert LinkDirection enum to Direction string
	*/
	convertDirection(dir) {
		switch (dir) {
			case LinkDirection.LEFT: return "left";
			case LinkDirection.RIGHT: return "right";
			case LinkDirection.UP: return "up";
			case LinkDirection.DOWN: return "down";
			case LinkDirection.CENTER:
			case LinkDirection.NONE: return "none";
			default: return "right";
		}
	}
	/**
	* Convert LinkRenderContext to PathRenderContext
	*/
	convertToPathRenderContext(context) {
		const shouldShowArrows = context.scale >= .6 && context.highQualityRender && context.renderConnectionArrows;
		const shouldShowCenterMarker = context.linkMarkerShape !== LinkMarkerShape.None;
		return {
			style: {
				mode: this.convertRenderMode(context.renderMode),
				connectionWidth: context.connectionWidth,
				borderWidth: context.renderBorder ? 4 : void 0,
				arrowShape: this.convertArrowShape(context.linkMarkerShape),
				showArrows: shouldShowArrows,
				lowQuality: context.lowQuality,
				showCenterMarker: shouldShowCenterMarker,
				centerMarkerShape: context.linkMarkerShape === LinkMarkerShape.Arrow ? "arrow" : "circle",
				highQuality: context.highQualityRender
			},
			colors: {
				default: String(context.defaultLinkColor),
				byType: this.convertColorMap(context.linkTypeColors),
				highlighted: "#FFF"
			},
			patterns: { disabled: context.disabledPattern },
			animation: { time: LiteGraph.getTime() * .001 },
			scale: context.scale,
			highlightedIds: new Set(Array.from(context.highlightedLinks).map(String))
		};
	}
	/**
	* Convert LinkRenderType to RenderMode
	*/
	convertRenderMode(mode) {
		switch (mode) {
			case LinkRenderType.LINEAR_LINK: return "linear";
			case LinkRenderType.STRAIGHT_LINK: return "straight";
			case LinkRenderType.SPLINE_LINK:
			default: return "spline";
		}
	}
	/**
	* Convert LinkMarkerShape to ArrowShape
	*/
	convertArrowShape(shape) {
		switch (shape) {
			case LinkMarkerShape.Circle: return "circle";
			case LinkMarkerShape.Arrow:
			default: return "triangle";
		}
	}
	/**
	* Convert color map to ensure all values are strings
	*/
	convertColorMap(colors) {
		const result = {};
		for (const [key, value] of Object.entries(colors)) result[key] = String(value);
		return result;
	}
	/**
	* Apply spline offset to a point, mimicking original #addSplineOffset behavior
	* Critically: does nothing for CENTER/NONE directions (no case for them)
	*/
	applySplineOffset(point, direction, distance) {
		switch (direction) {
			case LinkDirection.LEFT:
				point.x -= distance;
				break;
			case LinkDirection.RIGHT:
				point.x += distance;
				break;
			case LinkDirection.UP:
				point.y -= distance;
				break;
			case LinkDirection.DOWN:
				point.y += distance;
				break;
		}
	}
	/**
	* Direct rendering method compatible with LGraphCanvas
	* Converts data and delegates to pure renderer
	*/
	renderLinkDirect(ctx, a, b, link, skip_border, flow, color, start_dir, end_dir, context, extras = {}) {
		const startDir = start_dir || LinkDirection.RIGHT;
		const endDir = end_dir || LinkDirection.LEFT;
		const flowBool = flow === true || typeof flow === "number" && flow > 0;
		const linkData = {
			id: link ? String(link.id) : "temp",
			startPoint: {
				x: a[0],
				y: a[1]
			},
			endPoint: {
				x: b[0],
				y: b[1]
			},
			startDirection: this.convertDirection(startDir),
			endDirection: this.convertDirection(endDir),
			color: color !== null && color !== void 0 ? String(color) : void 0,
			type: link?.type !== void 0 ? String(link.type) : void 0,
			flow: flowBool,
			disabled: extras.disabled || false
		};
		if (context.renderMode === LinkRenderType.SPLINE_LINK) {
			const hasStartCtrl = !!extras.startControl;
			const hasEndCtrl = !!extras.endControl;
			const dist = Math.sqrt((b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1]));
			const factor = .25;
			const cps = [];
			if (hasStartCtrl && hasEndCtrl) {
				cps.push({
					x: a[0] + (extras.startControl[0] || 0),
					y: a[1] + (extras.startControl[1] || 0)
				}, {
					x: b[0] + (extras.endControl[0] || 0),
					y: b[1] + (extras.endControl[1] || 0)
				});
				linkData.controlPoints = cps;
			} else if (hasStartCtrl && !hasEndCtrl) {
				const start = {
					x: a[0] + (extras.startControl[0] || 0),
					y: a[1] + (extras.startControl[1] || 0)
				};
				const end = {
					x: b[0],
					y: b[1]
				};
				this.applySplineOffset(end, endDir, dist * factor);
				cps.push(start, end);
				linkData.controlPoints = cps;
			} else if (!hasStartCtrl && hasEndCtrl) {
				const start = {
					x: a[0],
					y: a[1]
				};
				this.applySplineOffset(start, startDir, dist * factor);
				const end = {
					x: b[0] + (extras.endControl[0] || 0),
					y: b[1] + (extras.endControl[1] || 0)
				};
				cps.push(start, end);
				linkData.controlPoints = cps;
			} else {
				const start = {
					x: a[0],
					y: a[1]
				};
				const end = {
					x: b[0],
					y: b[1]
				};
				this.applySplineOffset(start, startDir, dist * factor);
				this.applySplineOffset(end, endDir, dist * factor);
				cps.push(start, end);
				linkData.controlPoints = cps;
			}
		}
		const pathContext = this.convertToPathRenderContext(context);
		if (skip_border) pathContext.style.borderWidth = void 0;
		const path = this.pathRenderer.drawLink(ctx, linkData, pathContext);
		const linkSegment = extras.reroute ?? link;
		if (linkSegment) {
			linkSegment.path = path;
			if (linkData.centerPos) {
				linkSegment._pos = linkSegment._pos || [0, 0];
				linkSegment._pos[0] = linkData.centerPos.x;
				linkSegment._pos[1] = linkData.centerPos.y;
				if (linkData.centerAngle !== void 0) linkSegment._centreAngle = linkData.centerAngle;
			}
			if (this.enableLayoutStoreWrites && link && link.id !== -1) {
				const bounds = this.calculateLinkBounds([linkData.startPoint.x, linkData.startPoint.y], [linkData.endPoint.x, linkData.endPoint.y], linkData);
				const centerPos = linkData.centerPos || {
					x: (linkData.startPoint.x + linkData.endPoint.x) / 2,
					y: (linkData.startPoint.y + linkData.endPoint.y) / 2
				};
				if (!extras.reroute) layoutStore.updateLinkLayout(link.id, {
					id: link.id,
					path,
					bounds,
					centerPos,
					sourceNodeId: String(link.origin_id),
					targetNodeId: String(link.target_id),
					sourceSlot: link.origin_slot,
					targetSlot: link.target_slot
				});
				const rerouteId = extras.reroute ? extras.reroute.id : null;
				layoutStore.updateLinkSegmentLayout(link.id, rerouteId, {
					path,
					bounds,
					centerPos
				});
			}
		}
	}
	renderDraggingLink(ctx, from, to, colour, startDir, endDir, context) {
		this.renderLinkDirect(ctx, from, to, null, false, null, colour, startDir, endDir, {
			...context,
			linkMarkerShape: LinkMarkerShape.None
		}, { disabled: false });
	}
	/**
	* Calculate bounding box for a link
	* Includes padding for line width and control points
	*/
	calculateLinkBounds(startPos, endPos, linkData) {
		let minX = Math.min(startPos[0], endPos[0]);
		let maxX = Math.max(startPos[0], endPos[0]);
		let minY = Math.min(startPos[1], endPos[1]);
		let maxY = Math.max(startPos[1], endPos[1]);
		if (linkData.controlPoints) for (const cp of linkData.controlPoints) {
			minX = Math.min(minX, cp.x);
			maxX = Math.max(maxX, cp.x);
			minY = Math.min(minY, cp.y);
			maxY = Math.max(maxY, cp.y);
		}
		const padding = 20;
		return {
			x: minX - padding,
			y: minY - padding,
			width: maxX - minX + 2 * padding,
			height: maxY - minY + 2 * padding
		};
	}
};
//#endregion
//#region src/lib/litegraph/src/node/slotUtils.ts
function shallowCloneCommonProps(slot) {
	const { color_off, color_on, dir, label, localized_name, locked, name, nameLocked, removable, shape, type } = slot;
	return {
		color_off,
		color_on,
		dir,
		label,
		localized_name,
		locked,
		name,
		nameLocked,
		removable,
		shape,
		type
	};
}
function inputAsSerialisable(slot) {
	const { link } = slot;
	const widgetOrPos = slot.widget ? { widget: { name: slot.widget.name } } : { pos: slot.pos };
	return {
		...shallowCloneCommonProps(slot),
		...widgetOrPos,
		link
	};
}
function outputAsSerialisable(slot) {
	const { pos, slot_index, links, widget } = slot;
	const outputWidget = widget ? { widget: { name: widget.name } } : null;
	return {
		...shallowCloneCommonProps(slot),
		...outputWidget,
		pos,
		slot_index,
		links: links ? [...links] : links
	};
}
function isINodeInputSlot(slot) {
	return "link" in slot;
}
/**
* Type guard: Whether this input slot is attached to a widget.
* @param slot The slot to check.
*/
function isWidgetInputSlot(slot) {
	return !!slot.widget;
}
//#endregion
//#region src/renderer/core/layout/slots/slotIdentifier.ts
function getSlotKey(nodeIdOrIdentifier, index, isInput) {
	if (typeof nodeIdOrIdentifier === "object") {
		const { nodeId, index, isInput } = nodeIdOrIdentifier;
		return `${nodeId}-${isInput ? "in" : "out"}-${index}`;
	}
	if (index === void 0 || isInput === void 0) throw new Error("Missing required parameters for slot key generation");
	return `${nodeIdOrIdentifier}-${isInput ? "in" : "out"}-${index}`;
}
//#endregion
//#region src/renderer/core/canvas/litegraph/slotCalculations.ts
/**
* Calculate the position of an input slot in graph coordinates
* @param context Node context containing position and slot data
* @param slot The input slot index
* @returns Position of the input slot center in graph coordinates
*/
function calculateInputSlotPos(context, slot) {
	const input = context.inputs[slot];
	if (!input) return [context.nodeX, context.nodeY];
	return calculateInputSlotPosFromSlot(context, input);
}
/**
* Calculate the position of an input slot in graph coordinates
* @param context Node context containing position and slot data
* @param input The input slot object
* @returns Position of the input slot center in graph coordinates
*/
function calculateInputSlotPosFromSlot(context, input) {
	const { nodeX, nodeY, collapsed } = context;
	if (collapsed) return [nodeX, nodeY - LiteGraph.NODE_TITLE_HEIGHT * .5];
	const { pos } = input;
	if (pos) return [nodeX + pos[0], nodeY + pos[1]];
	const offsetX = LiteGraph.NODE_SLOT_HEIGHT * .5;
	const nodeOffsetY = context.slotStartY || 0;
	const slotY = (getDefaultVerticalInputs(context).indexOf(input) + .7) * LiteGraph.NODE_SLOT_HEIGHT;
	return [nodeX + offsetX, nodeY + slotY + nodeOffsetY];
}
/**
* Calculate the position of an output slot in graph coordinates
* @param context Node context containing position and slot data
* @param slot The output slot index
* @returns Position of the output slot center in graph coordinates
*/
function calculateOutputSlotPos(context, slot) {
	const { nodeX, nodeY, nodeWidth, collapsed, collapsedWidth, outputs } = context;
	if (collapsed) {
		const width = collapsedWidth || LiteGraph.NODE_COLLAPSED_WIDTH;
		const halfTitle = LiteGraph.NODE_TITLE_HEIGHT * .5;
		return [nodeX + width, nodeY - halfTitle];
	}
	const outputSlot = outputs[slot];
	if (!outputSlot) return [nodeX + nodeWidth, nodeY];
	const outputPos = outputSlot.pos;
	if (outputPos) return [nodeX + outputPos[0], nodeY + outputPos[1]];
	const offsetX = LiteGraph.NODE_SLOT_HEIGHT * .5;
	const nodeOffsetY = context.slotStartY || 0;
	const slotY = (getDefaultVerticalOutputs(context).indexOf(outputSlot) + .7) * LiteGraph.NODE_SLOT_HEIGHT;
	return [nodeX + nodeWidth + 1 - offsetX, nodeY + slotY + nodeOffsetY];
}
/**
* Get slot position using layout tree if available, fallback to node's position
* Unified implementation used by both LitegraphLinkAdapter and useLinkLayoutSync
* @param node The LGraphNode
* @param slotIndex The slot index
* @param isInput Whether this is an input slot
* @returns Position of the slot center in graph coordinates
*/
function getSlotPosition(node, slotIndex, isInput) {
	if (LiteGraph.vueNodesMode) {
		const slotKey = getSlotKey(String(node.id), slotIndex, isInput);
		const slotLayout = layoutStore.getSlotLayout(slotKey);
		if (slotLayout) return [slotLayout.position.x, slotLayout.position.y];
		const nodeLayout = layoutStore.getNodeLayoutRef(String(node.id)).value;
		if (nodeLayout) {
			const context = {
				nodeX: nodeLayout.position.x,
				nodeY: nodeLayout.position.y,
				nodeWidth: nodeLayout.size.width,
				nodeHeight: nodeLayout.size.height,
				collapsed: node.flags.collapsed || false,
				collapsedWidth: node._collapsed_width,
				slotStartY: node.constructor.slot_start_y,
				inputs: node.inputs,
				outputs: node.outputs,
				widgets: node.widgets
			};
			return isInput ? calculateInputSlotPos(context, slotIndex) : calculateOutputSlotPos(context, slotIndex);
		}
	}
	const context = {
		nodeX: node.pos[0],
		nodeY: node.pos[1],
		nodeWidth: node.size[0],
		nodeHeight: node.size[1],
		collapsed: node.flags.collapsed || false,
		collapsedWidth: node._collapsed_width,
		slotStartY: node.constructor.slot_start_y,
		inputs: node.inputs,
		outputs: node.outputs,
		widgets: node.widgets
	};
	return isInput ? calculateInputSlotPos(context, slotIndex) : calculateOutputSlotPos(context, slotIndex);
}
/**
* Get the inputs that are not positioned with absolute coordinates
*/
function getDefaultVerticalInputs(context) {
	return context.inputs.filter((slot) => !slot.pos && !(context.widgets?.length && isWidgetInputSlot(slot)));
}
/**
* Get the outputs that are not positioned with absolute coordinates
*/
function getDefaultVerticalOutputs(context) {
	return context.outputs.filter((slot) => !slot.pos);
}
//#endregion
//#region src/lib/litegraph/src/CanvasPointer.ts
/**
* Allows click and drag actions to be declared ahead of time during a pointerdown event.
*
* By default, it retains the most recent event of each type until it is reset (on pointerup).
* - {@link eDown}
* - {@link eMove}
* - {@link eUp}
*
* Depending on whether the user clicks or drags the pointer, only the appropriate callbacks are called:
* - {@link onClick}
* - {@link onDoubleClick}
* - {@link onDragStart}
* - {@link onDrag}
* - {@link onDragEnd}
* - {@link finally}
* @see
* - {@link LGraphCanvas.processMouseDown}
* - {@link LGraphCanvas.processMouseMove}
* - {@link LGraphCanvas.processMouseUp}
*/
var CanvasPointer = class CanvasPointer {
	/** Maximum time in milliseconds to ignore click drift */
	static bufferTime = 150;
	/** Maximum gap between pointerup and pointerdown events to be considered as a double click */
	static doubleClickTime = 300;
	/** Maximum offset from click location */
	static get maxClickDrift() {
		return this._maxClickDrift;
	}
	static set maxClickDrift(value) {
		this._maxClickDrift = value;
		this._maxClickDrift2 = value * value;
	}
	static _maxClickDrift = 6;
	/** {@link maxClickDrift} squared.  Used to calculate click drift without `sqrt`. */
	static _maxClickDrift2 = this._maxClickDrift ** 2;
	/** Assume that "wheel" events with both deltaX and deltaY less than this value are trackpad gestures. */
	static trackpadThreshold = 60;
	/**
	* The minimum time between "wheel" events to allow switching between trackpad
	* and mouse modes.
	*
	* This prevents trackpad "flick" panning from registering as regular mouse wheel.
	* After a flick gesture is complete, the automatic wheel events are sent with
	* reduced frequency, but much higher deltaX and deltaY values.
	*/
	static trackpadMaxGap = 500;
	/** The maximum time in milliseconds to buffer a high-res wheel event. */
	static maxHighResBufferTime = 10;
	/** The element this PointerState should capture input against when dragging. */
	element;
	/** Pointer ID used by drag capture. */
	pointerId;
	/** Set to true when if the pointer moves far enough after a down event, before the corresponding up event is fired. */
	dragStarted = false;
	/** The {@link eUp} from the last successful click */
	eLastDown;
	/** Used downstream for touch event support. */
	isDouble = false;
	/** Used downstream for touch event support. */
	isDown = false;
	/** The resize handle currently being hovered or dragged */
	resizeDirection;
	/**
	* If `true`, {@link eDown}, {@link eMove}, and {@link eUp} will be set to
	* `undefined` when {@link reset} is called.
	*
	* Default: `true`
	*/
	clearEventsOnReset = true;
	/** The last pointerdown event for the primary button */
	eDown;
	/** The last pointermove event for the primary button */
	eMove;
	/** The last pointerup event for the primary button */
	eUp;
	/** Currently detected input device type */
	detectedDevice = "mouse";
	/** Timestamp of last wheel event for cooldown tracking */
	lastWheelEventTime = 0;
	/** Flag to track if we've received the first wheel event */
	hasReceivedWheelEvent = false;
	/** Buffered Linux wheel event awaiting confirmation */
	bufferedLinuxEvent;
	/** Timestamp when Linux event was buffered */
	bufferedLinuxEventTime = 0;
	/** Timer ID for Linux buffer clearing */
	linuxBufferTimeoutId;
	/**
	* Run-once callback, called at the end of any click or drag, whether or not it was successful in any way.
	*
	* The setter of this callback will call the existing value before replacing it.
	* Therefore, simply setting this value twice will execute the first callback.
	*/
	get finally() {
		return this._finally;
	}
	set finally(value) {
		try {
			this._finally?.();
		} finally {
			this._finally = value;
		}
	}
	_finally;
	constructor(element) {
		this.element = element;
	}
	/**
	* Callback for `pointerdown` events.  To be used as the event handler (or called by it).
	* @param e The `pointerdown` event
	*/
	down(e) {
		this.reset();
		this.eDown = e;
		this.pointerId = e.pointerId;
		this.element.setPointerCapture(e.pointerId);
	}
	/**
	* Callback for `pointermove` events.  To be used as the event handler (or called by it).
	* @param e The `pointermove` event
	*/
	move(e) {
		const { eDown } = this;
		if (!eDown) return;
		if (!e.buttons) {
			this.reset();
			return;
		}
		if (!(e.buttons & eDown.buttons)) {
			this._completeClick(e);
			this.reset();
			return;
		}
		this.eMove = e;
		this.onDrag?.(e);
		if (this.dragStarted) return;
		if (e.timeStamp - eDown.timeStamp > CanvasPointer.bufferTime || !this._hasSamePosition(e, eDown)) this._setDragStarted(e);
	}
	/**
	* Callback for `pointerup` events.  To be used as the event handler (or called by it).
	* @param e The `pointerup` event
	*/
	up(e) {
		if (e.button !== this.eDown?.button) return false;
		this._completeClick(e);
		const { dragStarted } = this;
		this.reset();
		return !dragStarted;
	}
	_completeClick(e) {
		const { eDown } = this;
		if (!eDown) return;
		this.eUp = e;
		if (this.dragStarted) this.onDragEnd?.(e);
		else if (!this._hasSamePosition(e, eDown)) {
			this._setDragStarted();
			this.onDragEnd?.(e);
		} else if (this.onDoubleClick && this._isDoubleClick()) {
			this.onDoubleClick(e);
			this.eLastDown = void 0;
		} else {
			this.onClick?.(e);
			this.eLastDown = eDown;
		}
	}
	/**
	* Checks if two events occurred near each other - not further apart than the maximum click drift.
	* @param a The first event to compare
	* @param b The second event to compare
	* @param tolerance2 The maximum distance (squared) before the positions are considered different
	* @returns `true` if the two events were no more than {@link maxClickDrift} apart, otherwise `false`
	*/
	_hasSamePosition(a, b, tolerance2 = CanvasPointer._maxClickDrift2) {
		return dist2(a.clientX, a.clientY, b.clientX, b.clientY) <= tolerance2;
	}
	/**
	* Checks whether the pointer is currently past the max click drift threshold.
	* @returns `true` if the latest pointer event is past the the click drift threshold
	*/
	_isDoubleClick() {
		const { eDown, eLastDown } = this;
		if (!eDown || !eLastDown) return false;
		const tolerance2 = (3 * CanvasPointer._maxClickDrift) ** 2;
		const diff = eDown.timeStamp - eLastDown.timeStamp;
		return diff > 0 && diff < CanvasPointer.doubleClickTime && this._hasSamePosition(eDown, eLastDown, tolerance2);
	}
	_setDragStarted(eMove) {
		this.dragStarted = true;
		this.onDragStart?.(this, eMove);
		delete this.onDragStart;
	}
	/**
	* Checks if the given wheel event is part of a trackpad gesture.
	* This method now uses the new device detection internally for improved accuracy.
	* @param e The wheel event to check
	* @returns `true` if the event is part of a trackpad gesture, otherwise `false`
	*/
	isTrackpadGesture(e) {
		const now = performance.now();
		const timeSinceLastEvent = Math.max(0, now - this.lastWheelEventTime);
		this.lastWheelEventTime = now;
		if (this._isHighResWheelEvent(e, now)) this.detectedDevice = "mouse";
		else if (this._isWithinCooldown(timeSinceLastEvent)) {
			if (this._shouldBufferLinuxEvent(e)) this._bufferLinuxEvent(e, now);
		} else {
			this._updateDeviceMode(e, now);
			this.hasReceivedWheelEvent = true;
		}
		return this.detectedDevice === "trackpad";
	}
	/**
	* Validates buffered high res wheel events and switches to mouse mode if pattern matches.
	* @returns `true` if switched to mouse mode
	*/
	_isHighResWheelEvent(event, now) {
		if (!this.bufferedLinuxEvent || this.bufferedLinuxEventTime <= 0) return false;
		if (now - this.bufferedLinuxEventTime > CanvasPointer.maxHighResBufferTime) {
			this._clearLinuxBuffer();
			return false;
		}
		if (event.deltaX === 0 && this._isLinuxWheelPattern(this.bufferedLinuxEvent.deltaY, event.deltaY)) {
			this._clearLinuxBuffer();
			return true;
		}
		return false;
	}
	/**
	* Checks if we're within the cooldown period where mode switching is disabled.
	*/
	_isWithinCooldown(timeSinceLastEvent) {
		const isFirstEvent = !this.hasReceivedWheelEvent;
		const cooldownExpired = timeSinceLastEvent >= CanvasPointer.trackpadMaxGap;
		return !isFirstEvent && !cooldownExpired;
	}
	/**
	* Updates the device mode based on event patterns.
	*/
	_updateDeviceMode(event, now) {
		if (this._isTrackpadPattern(event)) this.detectedDevice = "trackpad";
		else if (this._isMousePattern(event)) this.detectedDevice = "mouse";
		else if (this.detectedDevice === "trackpad" && this._shouldBufferLinuxEvent(event)) this._bufferLinuxEvent(event, now);
	}
	/**
	* Clears the buffered Linux wheel event and associated timer.
	*/
	_clearLinuxBuffer() {
		this.bufferedLinuxEvent = void 0;
		this.bufferedLinuxEventTime = 0;
		if (this.linuxBufferTimeoutId !== void 0) {
			clearTimeout(this.linuxBufferTimeoutId);
			this.linuxBufferTimeoutId = void 0;
		}
	}
	/**
	* Checks if the event matches trackpad input patterns.
	* @param event The wheel event to check
	*/
	_isTrackpadPattern(event) {
		if (event.deltaX !== 0 && event.deltaY !== 0) return true;
		if (event.ctrlKey && Math.abs(event.deltaY) < 10) return true;
		return false;
	}
	/**
	* Checks if the event matches mouse wheel input patterns.
	* @param event The wheel event to check
	*/
	_isMousePattern(event) {
		const absoluteDeltaY = Math.abs(event.deltaY);
		if (absoluteDeltaY > 80) return true;
		return absoluteDeltaY >= 60 && event.deltaX === 0 && this.detectedDevice === "mouse";
	}
	/**
	* Checks if the event should be buffered as a potential Linux wheel event.
	* @param event The wheel event to check
	*/
	_shouldBufferLinuxEvent(event) {
		const absoluteDeltaY = Math.abs(event.deltaY);
		const isInLinuxRange = absoluteDeltaY >= 10 && absoluteDeltaY < 60;
		const isVerticalOnly = event.deltaX === 0;
		const hasIntegerDelta = Number.isInteger(event.deltaY);
		return this.detectedDevice === "trackpad" && isInLinuxRange && isVerticalOnly && hasIntegerDelta;
	}
	/**
	* Buffers a potential Linux wheel event for later confirmation.
	* @param event The event to buffer
	* @param now The current timestamp
	*/
	_bufferLinuxEvent(event, now) {
		if (this.linuxBufferTimeoutId !== void 0) clearTimeout(this.linuxBufferTimeoutId);
		this.bufferedLinuxEvent = event;
		this.bufferedLinuxEventTime = now;
		this.linuxBufferTimeoutId = setTimeout(() => {
			this._clearLinuxBuffer();
		}, CanvasPointer.maxHighResBufferTime);
	}
	/**
	* Checks if two deltaY values follow a Linux wheel pattern (divisibility).
	* @param deltaY1 The first deltaY value
	* @param deltaY2 The second deltaY value
	*/
	_isLinuxWheelPattern(deltaY1, deltaY2) {
		const absolute1 = Math.abs(deltaY1);
		const absolute2 = Math.abs(deltaY2);
		if (absolute1 === 0 || absolute2 === 0) return false;
		if (absolute1 === absolute2) return true;
		return absolute1 % absolute2 === 0 || absolute2 % absolute1 === 0;
	}
	/**
	* Resets the state of this {@link CanvasPointer} instance.
	*
	* The {@link finally} callback is first executed, then all callbacks and intra-click
	* state is cleared.
	*/
	reset() {
		this.finally = void 0;
		delete this.onClick;
		delete this.onDoubleClick;
		delete this.onDragStart;
		delete this.onDrag;
		delete this.onDragEnd;
		this.isDown = false;
		this.isDouble = false;
		this.dragStarted = false;
		this.resizeDirection = void 0;
		if (this.clearEventsOnReset) {
			this.eDown = void 0;
			this.eMove = void 0;
			this.eUp = void 0;
		}
		const { element, pointerId } = this;
		this.pointerId = void 0;
		if (typeof pointerId === "number" && element.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
	}
};
//#endregion
//#region src/lib/litegraph/src/cursorCache.ts
function createCursorCache(element) {
	let lastCursor = "";
	return function setCursor(cursor) {
		if (cursor === lastCursor) return;
		lastCursor = cursor;
		element.style.cursor = cursor;
	};
}
//#endregion
//#region src/lib/litegraph/src/infrastructure/NullGraphError.ts
var NullGraphError = class extends Error {
	constructor(message = "Attempted to access LGraph reference that was null or undefined.", cause) {
		super(message, { cause });
		this.name = "NullGraphError";
	}
};
//#endregion
//#region src/lib/litegraph/src/LGraphNodeProperties.ts
function isRecord(value) {
	return typeof value === "object" && value !== null;
}
/**
* Default properties to track
*/
var DEFAULT_TRACKED_PROPERTIES = [
	"title",
	"flags.collapsed",
	"flags.pinned",
	"mode",
	"color",
	"bgcolor",
	"shape",
	"showAdvanced"
];
/**
* Manages node properties with optional change tracking and instrumentation.
*/
var LGraphNodeProperties = class {
	/** The node this property manager belongs to */
	node;
	/** Set of property paths that have been instrumented */
	_instrumentedPaths = /* @__PURE__ */ new Set();
	constructor(node) {
		this.node = node;
		this._setupInstrumentation();
	}
	/**
	* Sets up property instrumentation for all tracked properties
	*/
	_setupInstrumentation() {
		for (const path of DEFAULT_TRACKED_PROPERTIES) this._instrumentProperty(path);
	}
	_resolveTargetObject(parts) {
		let targetObject = this.node;
		if (parts.length === 1) return {
			targetObject,
			propertyName: parts[0]
		};
		for (let i = 0; i < parts.length - 1; i++) {
			const key = parts[i];
			const next = targetObject[key];
			if (isRecord(next)) targetObject = next;
		}
		return {
			targetObject,
			propertyName: parts[parts.length - 1]
		};
	}
	/**
	* Instruments a single property to track changes
	*/
	_instrumentProperty(path) {
		const parts = path.split(".");
		if (parts.length > 1) this._ensureNestedPath(path);
		const { targetObject, propertyName } = this._resolveTargetObject(parts);
		const hasProperty = Object.prototype.hasOwnProperty.call(targetObject, propertyName);
		const currentValue = targetObject[propertyName];
		if (!hasProperty) {
			let value = void 0;
			Object.defineProperty(targetObject, propertyName, {
				get: () => value,
				set: (newValue) => {
					const oldValue = value;
					value = newValue;
					this._emitPropertyChange(path, oldValue, newValue);
					const shouldBeEnumerable = newValue !== void 0;
					const currentDescriptor = Object.getOwnPropertyDescriptor(targetObject, propertyName);
					if (currentDescriptor && currentDescriptor.enumerable !== shouldBeEnumerable) Object.defineProperty(targetObject, propertyName, {
						...currentDescriptor,
						enumerable: shouldBeEnumerable
					});
				},
				enumerable: false,
				configurable: true
			});
		} else Object.defineProperty(targetObject, propertyName, this._createInstrumentedDescriptor(path, currentValue));
		this._instrumentedPaths.add(path);
	}
	/**
	* Creates a property descriptor that emits change events
	*/
	_createInstrumentedDescriptor(propertyPath, initialValue) {
		return this._createInstrumentedDescriptorTyped(propertyPath, initialValue);
	}
	_createInstrumentedDescriptorTyped(propertyPath, initialValue) {
		let value = initialValue;
		return {
			get: () => value,
			set: (newValue) => {
				const oldValue = value;
				value = newValue;
				this._emitPropertyChange(propertyPath, oldValue, newValue);
			},
			enumerable: true,
			configurable: true
		};
	}
	/**
	* Emits a property change event if the node is connected to a graph
	*/
	_emitPropertyChange(propertyPath, oldValue, newValue) {
		this._emitPropertyChangeTyped(propertyPath, oldValue, newValue);
	}
	_emitPropertyChangeTyped(propertyPath, oldValue, newValue) {
		this.node.graph?.trigger("node:property:changed", {
			nodeId: this.node.id,
			property: propertyPath,
			oldValue,
			newValue
		});
	}
	/**
	* Ensures parent objects exist for nested properties
	*/
	_ensureNestedPath(path) {
		const parts = path.split(".");
		let current = this.node;
		for (let i = 0; i < parts.length - 1; i++) {
			const part = parts[i];
			if (!current[part]) current[part] = {};
			const next = current[part];
			if (isRecord(next)) current = next;
		}
	}
	/**
	* Checks if a property is being tracked
	*/
	isTracked(path) {
		return this._instrumentedPaths.has(path);
	}
	/**
	* Gets the list of tracked properties
	*/
	getTrackedProperties() {
		return [...DEFAULT_TRACKED_PROPERTIES];
	}
	/**
	* Custom toJSON method for JSON.stringify
	* Returns undefined to exclude from serialization since we only use defaults
	*/
	toJSON() {}
};
//#endregion
//#region src/lib/litegraph/src/utils/textMeasureCache.ts
var cache = /* @__PURE__ */ new Map();
function cachedMeasureText(ctx, text) {
	const key = `${ctx.font}\0${text}`;
	const cached = cache.get(key);
	if (cached !== void 0) return cached;
	const width = ctx.measureText(text).width;
	cache.set(key, width);
	return width;
}
function clearTextMeasureCache() {
	cache.clear();
}
//#endregion
//#region src/lib/litegraph/src/LGraphIcon.ts
var LGraphIcon = class {
	unicode;
	fontFamily;
	image;
	color;
	bgColor;
	fontSize;
	size;
	circlePadding;
	xOffset;
	yOffset;
	constructor({ unicode, fontFamily = "PrimeIcons", image, color = "#e6c200", bgColor, fontSize = 16, size, circlePadding = 2, xOffset = 0, yOffset = 0 }) {
		this.unicode = unicode;
		this.fontFamily = fontFamily;
		this.image = image;
		this.color = color;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
		this.size = size ?? fontSize;
		this.circlePadding = circlePadding;
		this.xOffset = xOffset;
		this.yOffset = yOffset;
	}
	draw(ctx, x, y) {
		x += this.xOffset;
		y += this.yOffset;
		if (this.image) {
			const iconSize = this.size;
			const iconRadius = iconSize / 2 + this.circlePadding;
			if (this.bgColor) {
				const { fillStyle } = ctx;
				ctx.beginPath();
				ctx.arc(x + iconRadius, y, iconRadius, 0, 2 * Math.PI);
				ctx.fillStyle = this.bgColor;
				ctx.fill();
				ctx.fillStyle = fillStyle;
			}
			const imageX = x + this.circlePadding;
			const imageY = y - iconSize / 2;
			ctx.drawImage(this.image, imageX, imageY, iconSize, iconSize);
		} else if (this.unicode) {
			const { font, textBaseline, textAlign, fillStyle } = ctx;
			ctx.font = `${this.fontSize}px '${this.fontFamily}'`;
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			const iconRadius = this.fontSize / 2 + this.circlePadding;
			if (this.bgColor) {
				ctx.beginPath();
				ctx.arc(x + iconRadius, y, iconRadius, 0, 2 * Math.PI);
				ctx.fillStyle = this.bgColor;
				ctx.fill();
			}
			ctx.fillStyle = this.color;
			ctx.fillText(this.unicode, x + iconRadius, y);
			ctx.font = font;
			ctx.textBaseline = textBaseline;
			ctx.textAlign = textAlign;
			ctx.fillStyle = fillStyle;
		}
	}
};
//#endregion
//#region src/lib/litegraph/src/LGraphBadge.ts
var BadgePosition = /* @__PURE__ */ function(BadgePosition) {
	BadgePosition["TopLeft"] = "top-left";
	BadgePosition["TopRight"] = "top-right";
	return BadgePosition;
}({});
var LGraphBadge = class {
	text;
	fgColor;
	bgColor;
	fontSize;
	padding;
	height;
	cornerRadius;
	icon;
	onClick;
	xOffset;
	yOffset;
	_boundingRect = [
		0,
		0,
		0,
		0
	];
	get boundingRect() {
		return this._boundingRect;
	}
	constructor({ text, fgColor = "white", bgColor = "#0F1F0F", fontSize = 12, padding = 6, height = 20, cornerRadius = 5, iconOptions, onClick, xOffset = 0, yOffset = 0 }) {
		this.text = text;
		this.fgColor = fgColor;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
		this.padding = padding;
		this.height = height;
		this.cornerRadius = cornerRadius;
		if (iconOptions) this.icon = new LGraphIcon(iconOptions);
		this.onClick = onClick;
		this.xOffset = xOffset;
		this.yOffset = yOffset;
	}
	get visible() {
		return (this.text?.length ?? 0) > 0 || !!this.icon;
	}
	getWidth(ctx) {
		if (!this.visible) return 0;
		const { font } = ctx;
		let iconWidth = 0;
		if (this.icon) {
			if (this.icon.image) iconWidth = this.icon.size + this.padding;
			else if (this.icon.unicode) {
				ctx.font = `${this.icon.fontSize}px '${this.icon.fontFamily}'`;
				iconWidth = cachedMeasureText(ctx, this.icon.unicode) + this.padding;
			}
		}
		ctx.font = `${this.fontSize}px sans-serif`;
		const textWidth = this.text ? cachedMeasureText(ctx, this.text) : 0;
		ctx.font = font;
		return iconWidth + textWidth + this.padding * 2;
	}
	draw(ctx, x, y) {
		if (!this.visible) return;
		x += this.xOffset;
		y += this.yOffset;
		const { font, fillStyle, textBaseline, textAlign } = ctx;
		ctx.font = `${this.fontSize}px sans-serif`;
		const badgeWidth = this.getWidth(ctx);
		const badgeX = 0;
		this._boundingRect.splice(0, 4, x, y, badgeWidth, this.height);
		ctx.fillStyle = this.bgColor;
		ctx.beginPath();
		if (ctx.roundRect) ctx.roundRect(x + badgeX, y, badgeWidth, this.height, this.cornerRadius);
		else ctx.rect(x + badgeX, y, badgeWidth, this.height);
		ctx.fill();
		let drawX = x + badgeX + this.padding;
		const centerY = y + this.height / 2;
		if (this.icon) {
			this.icon.draw(ctx, drawX, centerY);
			const iconWidth = this.icon.image ? this.icon.size : this.icon.fontSize;
			drawX += iconWidth + this.padding / 2 + 4;
		}
		if (this.text) {
			ctx.fillStyle = this.fgColor;
			ctx.textBaseline = "middle";
			ctx.textAlign = "left";
			ctx.fillText(this.text, drawX, centerY + 1);
		}
		ctx.font = font;
		ctx.fillStyle = fillStyle;
		ctx.textBaseline = textBaseline;
		ctx.textAlign = textAlign;
	}
};
//#endregion
//#region src/lib/litegraph/src/infrastructure/Rectangle.ts
/**
* A rectangle, represented as a float64 array of 4 numbers: [x, y, width, height].
*
* This class is a subclass of Float64Array, and so has all the methods of that class.  Notably,
* {@link Rectangle.from} can be used to convert a {@link ReadOnlyRect}. Typing of this however,
* is broken due to the base TS lib returning Float64Array rather than `this`.
*
* Sub-array properties ({@link Float64Array.subarray}):
* - {@link pos}: The position of the top-left corner of the rectangle.
* - {@link size}: The size of the rectangle.
*/
var Rectangle = class Rectangle extends Float64Array {
	_pos;
	_size;
	constructor(x = 0, y = 0, width = 0, height = 0) {
		super(4);
		this[0] = x;
		this[1] = y;
		this[2] = width;
		this[3] = height;
	}
	static from([x, y, width, height]) {
		return new Rectangle(x, y, width, height);
	}
	/**
	* Creates a new rectangle positioned at the given centre, with the given width/height.
	* @param centre The centre of the rectangle, as an `[x, y]` point
	* @param width The width of the rectangle
	* @param height The height of the rectangle.  Default: {@link width}
	* @returns A new rectangle whose centre is at {@link x}
	*/
	static fromCentre([x, y], width, height = width) {
		return new Rectangle(x - width * .5, y - height * .5, width, height);
	}
	static ensureRect(rect) {
		return rect instanceof Rectangle ? rect : new Rectangle(rect[0], rect[1], rect[2], rect[3]);
	}
	subarray(begin = 0, end) {
		const byteOffset = begin << 3;
		const length = end === void 0 ? end : end - begin;
		return new Float64Array(this.buffer, byteOffset, length);
	}
	/**
	* A reference to the position of the top-left corner of this rectangle.
	*
	* Updating the values of the returned object will update this rectangle.
	*/
	get pos() {
		this._pos ??= this.subarray(0, 2);
		return this._pos;
	}
	set pos(value) {
		this[0] = value[0];
		this[1] = value[1];
	}
	/**
	* A reference to the size of this rectangle.
	*
	* Updating the values of the returned object will update this rectangle.
	*/
	get size() {
		this._size ??= this.subarray(2, 4);
		return this._size;
	}
	set size(value) {
		this[2] = value[0];
		this[3] = value[1];
	}
	/** The x co-ordinate of the top-left corner of this rectangle. */
	get x() {
		return this[0];
	}
	set x(value) {
		this[0] = value;
	}
	/** The y co-ordinate of the top-left corner of this rectangle. */
	get y() {
		return this[1];
	}
	set y(value) {
		this[1] = value;
	}
	/** The width of this rectangle. */
	get width() {
		return this[2];
	}
	set width(value) {
		this[2] = value;
	}
	/** The height of this rectangle. */
	get height() {
		return this[3];
	}
	set height(value) {
		this[3] = value;
	}
	/** The x co-ordinate of the left edge of this rectangle. */
	get left() {
		return this[0];
	}
	set left(value) {
		this[0] = value;
	}
	/** The y co-ordinate of the top edge of this rectangle. */
	get top() {
		return this[1];
	}
	set top(value) {
		this[1] = value;
	}
	/** The x co-ordinate of the right edge of this rectangle. */
	get right() {
		return this[0] + this[2];
	}
	set right(value) {
		this[0] = value - this[2];
	}
	/** The y co-ordinate of the bottom edge of this rectangle. */
	get bottom() {
		return this[1] + this[3];
	}
	set bottom(value) {
		this[1] = value - this[3];
	}
	/** The x co-ordinate of the centre of this rectangle. */
	get centreX() {
		return this[0] + this[2] * .5;
	}
	/** The y co-ordinate of the centre of this rectangle. */
	get centreY() {
		return this[1] + this[3] * .5;
	}
	/**
	* Updates the rectangle to the values of {@link rect}.
	* @param rect The rectangle to update to.
	*/
	updateTo(rect) {
		this[0] = rect[0];
		this[1] = rect[1];
		this[2] = rect[2];
		this[3] = rect[3];
	}
	/**
	* Checks if the point [{@link x}, {@link y}] is inside this rectangle.
	* @param x The x-coordinate to check
	* @param y The y-coordinate to check
	* @returns `true` if the point is inside this rectangle, otherwise `false`.
	*/
	containsXy(x, y) {
		const [left, top, width, height] = this;
		return x >= left && x < left + width && y >= top && y < top + height;
	}
	/**
	* Checks if {@link point} is inside this rectangle.
	* @param point The point to check
	* @returns `true` if {@link point} is inside this rectangle, otherwise `false`.
	*/
	containsPoint([x, y]) {
		const [left, top, width, height] = this;
		return x >= left && x < left + width && y >= top && y < top + height;
	}
	/**
	* Checks if {@link other} is a smaller rectangle inside this rectangle.
	* One **must** be larger than the other; identical rectangles are not considered to contain each other.
	* @param other The rectangle to check
	* @returns `true` if {@link other} is inside this rectangle, otherwise `false`.
	*/
	containsRect(other) {
		const { right, bottom } = this;
		const otherRight = other[0] + other[2];
		const otherBottom = other[1] + other[3];
		return !(this.x === other[0] && this.y === other[1] && right === otherRight && bottom === otherBottom) && this.x <= other[0] && this.y <= other[1] && right >= otherRight && bottom >= otherBottom;
	}
	/**
	* Checks if {@link rect} overlaps with this rectangle.
	* @param rect The rectangle to check
	* @returns `true` if {@link rect} overlaps with this rectangle, otherwise `false`.
	*/
	overlaps(rect) {
		return this.x < rect[0] + rect[2] && this.y < rect[1] + rect[3] && this.x + this.width > rect[0] && this.y + this.height > rect[1];
	}
	/**
	* Finds the corner (if any) of this rectangle that contains the point [{@link x}, {@link y}].
	* @param x The x-coordinate to check
	* @param y The y-coordinate to check
	* @param cornerSize Each corner is treated as an inset square with this width and height.
	* @returns The compass direction of the corner that contains the point, or `undefined` if the point is not in any corner.
	*/
	findContainingCorner(x, y, cornerSize) {
		if (this.isInTopLeftCorner(x, y, cornerSize)) return "NW";
		if (this.isInTopRightCorner(x, y, cornerSize)) return "NE";
		if (this.isInBottomLeftCorner(x, y, cornerSize)) return "SW";
		if (this.isInBottomRightCorner(x, y, cornerSize)) return "SE";
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the top-left corner of this rectangle, otherwise `false`. */
	isInTopLeftCorner(x, y, cornerSize) {
		return isInRectangle(x, y, this.x, this.y, cornerSize, cornerSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the top-right corner of this rectangle, otherwise `false`. */
	isInTopRightCorner(x, y, cornerSize) {
		return isInRectangle(x, y, this.right - cornerSize, this.y, cornerSize, cornerSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the bottom-left corner of this rectangle, otherwise `false`. */
	isInBottomLeftCorner(x, y, cornerSize) {
		return isInRectangle(x, y, this.x, this.bottom - cornerSize, cornerSize, cornerSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the bottom-right corner of this rectangle, otherwise `false`. */
	isInBottomRightCorner(x, y, cornerSize) {
		return isInRectangle(x, y, this.right - cornerSize, this.bottom - cornerSize, cornerSize, cornerSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the top edge of this rectangle, otherwise `false`. */
	isInTopEdge(x, y, edgeSize) {
		return isInRectangle(x, y, this.x, this.y, this.width, edgeSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the bottom edge of this rectangle, otherwise `false`. */
	isInBottomEdge(x, y, edgeSize) {
		return isInRectangle(x, y, this.x, this.bottom - edgeSize, this.width, edgeSize);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the left edge of this rectangle, otherwise `false`. */
	isInLeftEdge(x, y, edgeSize) {
		return isInRectangle(x, y, this.x, this.y, edgeSize, this.height);
	}
	/** @returns `true` if the point [{@link x}, {@link y}] is in the right edge of this rectangle, otherwise `false`. */
	isInRightEdge(x, y, edgeSize) {
		return isInRectangle(x, y, this.right - edgeSize, this.y, edgeSize, this.height);
	}
	/** @returns The centre point of this rectangle, as a new {@link Point}. */
	getCentre() {
		return [this.centreX, this.centreY];
	}
	/** @returns The area of this rectangle. */
	getArea() {
		return this.width * this.height;
	}
	/** @returns The perimeter of this rectangle. */
	getPerimeter() {
		return 2 * (this.width + this.height);
	}
	/** @returns The top-left corner of this rectangle, as a new {@link Point}. */
	getTopLeft() {
		return [this[0], this[1]];
	}
	/** @returns The bottom-right corner of this rectangle, as a new {@link Point}. */
	getBottomRight() {
		return [this.right, this.bottom];
	}
	/** @returns The width and height of this rectangle, as a new {@link Size}. */
	getSize() {
		return [this[2], this[3]];
	}
	/** @returns The offset from the top-left of this rectangle to the point [{@link x}, {@link y}], as a new {@link Point}. */
	getOffsetTo([x, y]) {
		return [x - this[0], y - this[1]];
	}
	/** @returns The offset from the point [{@link x}, {@link y}] to the top-left of this rectangle, as a new {@link Point}. */
	getOffsetFrom([x, y]) {
		return [this[0] - x, this[1] - y];
	}
	/** Resizes the rectangle without moving it, setting its top-left corner to [{@link x}, {@link y}]. */
	resizeTopLeft(x1, y1) {
		this[2] += this[0] - x1;
		this[3] += this[1] - y1;
		this[0] = x1;
		this[1] = y1;
	}
	/** Resizes the rectangle without moving it, setting its bottom-left corner to [{@link x}, {@link y}]. */
	resizeBottomLeft(x1, y2) {
		this[2] += this[0] - x1;
		this[3] = y2 - this[1];
		this[0] = x1;
	}
	/** Resizes the rectangle without moving it, setting its top-right corner to [{@link x}, {@link y}]. */
	resizeTopRight(x2, y1) {
		this[2] = x2 - this[0];
		this[3] += this[1] - y1;
		this[1] = y1;
	}
	/** Resizes the rectangle without moving it, setting its bottom-right corner to [{@link x}, {@link y}]. */
	resizeBottomRight(x2, y2) {
		this[2] = x2 - this[0];
		this[3] = y2 - this[1];
	}
	/** Sets the width without moving the right edge (changes position) */
	setWidthRightAnchored(width) {
		const currentWidth = this[2];
		this[2] = width;
		this[0] += currentWidth - width;
	}
	/** Sets the height without moving the bottom edge (changes position) */
	setHeightBottomAnchored(height) {
		const currentHeight = this[3];
		this[3] = height;
		this[1] += currentHeight - height;
	}
	clone() {
		return new Rectangle(this[0], this[1], this[2], this[3]);
	}
	/** Alias of {@link export}. */
	toArray() {
		return this.export();
	}
	/** @returns A new, untyped array (serializable) containing the values of this rectangle. */
	export() {
		return [
			this[0],
			this[1],
			this[2],
			this[3]
		];
	}
	/**
	* Draws a debug outline of this rectangle.
	* @internal Convenience debug/development interface; not for production use.
	*/
	_drawDebug(ctx, colour = "red") {
		const { strokeStyle, lineWidth } = ctx;
		try {
			ctx.strokeStyle = colour;
			ctx.lineWidth = .5;
			ctx.beginPath();
			ctx.strokeRect(this[0], this[1], this[2], this[3]);
		} finally {
			ctx.strokeStyle = strokeStyle;
			ctx.lineWidth = lineWidth;
		}
	}
};
//#endregion
//#region src/lib/litegraph/src/LGraphButton.ts
var LGraphButton = class extends LGraphBadge {
	name;
	_last_area = new Rectangle();
	constructor(options) {
		super(options);
		this.name = options.name;
	}
	getWidth(ctx) {
		if (!this.visible) return 0;
		const { font } = ctx;
		ctx.font = `${this.fontSize}px 'PrimeIcons'`;
		const textWidth = this.text ? cachedMeasureText(ctx, this.text) : 0;
		ctx.font = font;
		return textWidth;
	}
	/**
	* @internal
	*
	* Draws the button and updates its last rendered area for hit detection.
	* @param ctx The canvas rendering context.
	* @param x The x-coordinate to draw the button at.
	* @param y The y-coordinate to draw the button at.
	*/
	draw(ctx, x, y) {
		if (!this.visible) return;
		const width = this.getWidth(ctx);
		this._last_area[0] = x + this.xOffset;
		this._last_area[1] = y + this.yOffset;
		this._last_area[2] = width;
		this._last_area[3] = this.height;
		const adjustedX = x + this.xOffset;
		const adjustedY = y + this.yOffset;
		const { font, fillStyle, textBaseline, textAlign } = ctx;
		const titleTextColor = ctx.fillStyle || "white";
		ctx.font = `${this.fontSize}px 'PrimeIcons'`;
		ctx.fillStyle = titleTextColor;
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		const centerX = adjustedX + width / 2;
		const centerY = adjustedY + this.height / 2;
		if (this.text) ctx.fillText(this.text, centerX, centerY);
		ctx.font = font;
		ctx.fillStyle = fillStyle;
		ctx.textBaseline = textBaseline;
		ctx.textAlign = textAlign;
	}
	/**
	* Checks if a point is inside the button's last rendered area.
	* @param x The x-coordinate of the point.
	* @param y The y-coordinate of the point.
	* @returns `true` if the point is inside the button, otherwise `false`.
	*/
	isPointInside(x, y) {
		return this._last_area.containsPoint([x, y]);
	}
};
//#endregion
//#region src/lib/litegraph/src/LLink.ts
var layoutMutations$1 = useLayoutMutations();
var LLink = class LLink {
	static _drawDebug = false;
	/** Link ID */
	id;
	parentId;
	type;
	/** Output node ID */
	origin_id;
	/** Output slot index */
	origin_slot;
	/** Input node ID */
	target_id;
	/** Input slot index */
	target_slot;
	data;
	_data;
	/** Centre point of the link, calculated during render only - can be inaccurate */
	_pos;
	/** @todo Clean up - never implemented in comfy. */
	_last_time;
	/** The last canvas 2D path that was used to render this link */
	path;
	/** @inheritdoc */
	_centreAngle;
	/** @inheritdoc */
	_dragging;
	_color;
	/** Custom colour for this link only */
	get color() {
		return this._color;
	}
	set color(value) {
		this._color = value === "" ? null : value;
	}
	get isFloatingOutput() {
		return this.origin_id === -1 && this.origin_slot === -1;
	}
	get isFloatingInput() {
		return this.target_id === -1 && this.target_slot === -1;
	}
	get isFloating() {
		return this.isFloatingOutput || this.isFloatingInput;
	}
	/** `true` if this link is connected to a subgraph input node (the actual origin is in a different graph). */
	get originIsIoNode() {
		return this.origin_id === -10;
	}
	/** `true` if this link is connected to a subgraph output node (the actual target is in a different graph). */
	get targetIsIoNode() {
		return this.target_id === -20;
	}
	constructor(id, type, origin_id, origin_slot, target_id, target_slot, parentId) {
		this.id = id;
		this.type = type;
		this.origin_id = origin_id;
		this.origin_slot = origin_slot;
		this.target_id = target_id;
		this.target_slot = target_slot;
		this.parentId = parentId;
		this._data = null;
		this._pos = [0, 0];
	}
	/** @deprecated Use {@link LLink.create} */
	static createFromArray(data) {
		return new LLink(data[0], data[5], data[1], data[2], data[3], data[4]);
	}
	/**
	* LLink static factory: creates a new LLink from the provided data.
	* @param data Serialised LLink data to create the link from
	* @returns A new LLink
	*/
	static create(data) {
		return new LLink(data.id, data.type, data.origin_id, data.origin_slot, data.target_id, data.target_slot, data.parentId);
	}
	/**
	* Gets all reroutes from the output slot to this segment.  If this segment is a reroute, it will not be included.
	* @returns An ordered array of all reroutes from the node output to
	* this reroute or the reroute before it.  Otherwise, an empty array.
	*/
	static getReroutes(network, linkSegment) {
		if (linkSegment.parentId === void 0) return [];
		return network.reroutes.get(linkSegment.parentId)?.getReroutes() ?? [];
	}
	static getFirstReroute(network, linkSegment) {
		return LLink.getReroutes(network, linkSegment).at(0);
	}
	/**
	* Finds the reroute in the chain after the provided reroute ID.
	* @param network The network this link belongs to
	* @param linkSegment The starting point of the search (input side).
	* Typically the LLink object itself, but can be any link segment.
	* @param rerouteId The matching reroute will have this set as its {@link parentId}.
	* @returns The reroute that was found, `undefined` if no reroute was found, or `null` if an infinite loop was detected.
	*/
	static findNextReroute(network, linkSegment, rerouteId) {
		if (linkSegment.parentId === void 0) return;
		return network.reroutes.get(linkSegment.parentId)?.findNextReroute(rerouteId);
	}
	/**
	* Gets the origin node of a link.
	* @param network The network to search
	* @param linkId The ID of the link to get the origin node of
	* @returns The origin node of the link, or `undefined` if the link is not found or the origin node is not found
	*/
	static getOriginNode(network, linkId) {
		const id = network.links.get(linkId)?.origin_id;
		return network.getNodeById(id) ?? void 0;
	}
	/**
	* Gets the target node of a link.
	* @param network The network to search
	* @param linkId The ID of the link to get the target node of
	* @returns The target node of the link, or `undefined` if the link is not found or the target node is not found
	*/
	static getTargetNode(network, linkId) {
		const id = network.links.get(linkId)?.target_id;
		return network.getNodeById(id) ?? void 0;
	}
	/**
	* Resolves a link ID to the link, node, and slot objects.
	* @param linkId The {@link id} of the link to resolve
	* @param network The link network to search
	* @returns An object containing the input and output nodes, as well as the input and output slots.
	* @remarks This method is heavier than others; it will always resolve all objects.
	* Whilst the performance difference should in most cases be negligible,
	* it is recommended to use simpler methods where appropriate.
	*/
	static resolve(linkId, network) {
		return network.getLink(linkId)?.resolve(network);
	}
	/**
	* Resolves a list of link IDs to the link, node, and slot objects.
	* Discards invalid link IDs.
	* @param linkIds An iterable of link {@link id}s to resolve
	* @param network The link network to search
	* @returns An array of resolved connections.  If a link is not found, it is not included in the array.
	* @see {@link LLink.resolve}
	*/
	static resolveMany(linkIds, network) {
		const resolved = [];
		for (const id of linkIds) {
			const r = network.getLink(id)?.resolve(network);
			if (r) resolved.push(r);
		}
		return resolved;
	}
	/**
	* Resolves the primitive ID values stored in the link to the referenced objects.
	* @param network The link network to search
	* @returns An object containing the input and output nodes, as well as the input and output slots.
	* @remarks This method is heavier than others; it will always resolve all objects.
	* Whilst the performance difference should in most cases be negligible,
	* it is recommended to use simpler methods where appropriate.
	*/
	resolve(network) {
		const inputNode = this.target_id === -1 ? void 0 : network.getNodeById(this.target_id) ?? void 0;
		const input = inputNode?.inputs[this.target_slot];
		const subgraphInput = this.originIsIoNode ? network.inputNode?.slots[this.origin_slot] : void 0;
		if (subgraphInput) return {
			inputNode,
			input,
			subgraphInput,
			link: this
		};
		const outputNode = this.origin_id === -1 ? void 0 : network.getNodeById(this.origin_id) ?? void 0;
		const output = outputNode?.outputs[this.origin_slot];
		const subgraphOutput = this.targetIsIoNode ? network.outputNode?.slots[this.target_slot] : void 0;
		if (subgraphOutput) return {
			outputNode,
			output,
			subgraphInput: void 0,
			subgraphOutput,
			link: this
		};
		return {
			inputNode,
			outputNode,
			input,
			output,
			subgraphInput,
			subgraphOutput,
			link: this
		};
	}
	configure(o) {
		if (Array.isArray(o)) {
			this.id = o[0];
			this.origin_id = o[1];
			this.origin_slot = o[2];
			this.target_id = o[3];
			this.target_slot = o[4];
			this.type = o[5];
		} else {
			this.id = o.id;
			this.type = o.type;
			this.origin_id = o.origin_id;
			this.origin_slot = o.origin_slot;
			this.target_id = o.target_id;
			this.target_slot = o.target_slot;
			this.parentId = o.parentId;
		}
	}
	/**
	* Checks if the specified node id and output index are this link's origin (output side).
	* @param nodeId ID of the node to check
	* @param outputIndex The array index of the node output
	* @returns `true` if the origin matches, otherwise `false`.
	*/
	hasOrigin(nodeId, outputIndex) {
		return this.origin_id === nodeId && this.origin_slot === outputIndex;
	}
	/**
	* Checks if the specified node id and input index are this link's target (input side).
	* @param nodeId ID of the node to check
	* @param inputIndex The array index of the node input
	* @returns `true` if the target matches, otherwise `false`.
	*/
	hasTarget(nodeId, inputIndex) {
		return this.target_id === nodeId && this.target_slot === inputIndex;
	}
	/**
	* Creates a floating link from this link.
	* @param slotType The side of the link that is still connected
	* @param parentId The parent reroute ID of the link
	* @returns A new LLink that is floating
	*/
	toFloating(slotType, parentId) {
		const exported = this.asSerialisable();
		exported.id = -1;
		exported.parentId = parentId;
		if (slotType === "input") {
			exported.origin_id = -1;
			exported.origin_slot = -1;
		} else {
			exported.target_id = -1;
			exported.target_slot = -1;
		}
		return LLink.create(exported);
	}
	/**
	* Disconnects a link and removes it from the graph, cleaning up any reroutes that are no longer used
	* @param network The container (LGraph) where reroutes should be updated
	* @param keepReroutes If `undefined`, reroutes will be automatically removed if no links remain.
	* If `input` or `output`, reroutes will not be automatically removed, and retain a connection to the input or output, respectively.
	*/
	disconnect(network, keepReroutes) {
		const reroutes = LLink.getReroutes(network, this);
		const lastReroute = reroutes.at(-1);
		if (keepReroutes === "output" && lastReroute?.linkIds.size === 1 && lastReroute.floatingLinkIds.size === 0 || keepReroutes === "input" && lastReroute) {
			const newLink = LLink.create(this);
			newLink.id = -1;
			if (keepReroutes === "input") {
				newLink.origin_id = -1;
				newLink.origin_slot = -1;
				lastReroute.floating = { slotType: "input" };
			} else {
				newLink.target_id = -1;
				newLink.target_slot = -1;
				lastReroute.floating = { slotType: "output" };
			}
			network.addFloatingLink(newLink);
		}
		for (const reroute of reroutes) {
			reroute.linkIds.delete(this.id);
			if (!keepReroutes && !reroute.totalLinks) {
				network.reroutes.delete(reroute.id);
				layoutMutations$1.setSource(LayoutSource.Canvas);
				layoutMutations$1.deleteReroute(reroute.id);
			}
		}
		network.links.delete(this.id);
		layoutMutations$1.setSource(LayoutSource.Canvas);
		layoutMutations$1.deleteLink(this.id);
	}
	/**
	* @deprecated Prefer {@link LLink.asSerialisable} (returns an object, not an array)
	* @returns An array representing this LLink
	*/
	serialize() {
		return [
			this.id,
			this.origin_id,
			this.origin_slot,
			this.target_id,
			this.target_slot,
			this.type
		];
	}
	asSerialisable() {
		const copy = {
			id: this.id,
			origin_id: this.origin_id,
			origin_slot: this.origin_slot,
			target_id: this.target_id,
			target_slot: this.target_slot,
			type: this.type
		};
		if (this.parentId !== void 0) copy.parentId = this.parentId;
		return copy;
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/measureSlots.ts
function getNodeInputOnPos(node, x, y) {
	const { inputs } = node;
	if (!inputs) return;
	for (const [index, input] of inputs.entries()) {
		const pos = node.getInputPos(index);
		const width = 20 + ((input.label?.length ?? input.localized_name?.length ?? input.name?.length) || 3) * 7;
		if (isInRectangle(x, y, pos[0] - 10, pos[1] - 10, width, 20)) return {
			index,
			input,
			pos
		};
	}
}
function getNodeOutputOnPos(node, x, y) {
	const { outputs } = node;
	if (!outputs) return;
	for (const [index, output] of outputs.entries()) {
		const pos = node.getOutputPos(index);
		if (isInRectangle(x, y, pos[0] - 10, pos[1] - 10, 40, 20)) return {
			index,
			output,
			pos
		};
	}
}
/**
* Returns the input slot index if the given position (in graph space) is on top of a node input slot.
* A helper function - originally on the prototype of LGraphCanvas.
*/
function isOverNodeInput(node, canvasx, canvasy, slot_pos) {
	const result = getNodeInputOnPos(node, canvasx, canvasy);
	if (!result) return -1;
	if (slot_pos) {
		slot_pos[0] = result.pos[0];
		slot_pos[1] = result.pos[1];
	}
	return result.index;
}
/**
* Returns the output slot index if the given position (in graph space) is on top of a node output slot.
* A helper function - originally on the prototype of LGraphCanvas.
*/
function isOverNodeOutput(node, canvasx, canvasy, slot_pos) {
	const result = getNodeOutputOnPos(node, canvasx, canvasy);
	if (!result) return -1;
	if (slot_pos) {
		slot_pos[0] = result.pos[0];
		slot_pos[1] = result.pos[1];
	}
	return result.index;
}
//#endregion
//#region src/lib/litegraph/src/draw.ts
var ELLIPSIS = "…";
var TWO_DOT_LEADER = "‥";
var ONE_DOT_LEADER = "․";
var SlotType = /* @__PURE__ */ function(SlotType) {
	SlotType["Array"] = "array";
	SlotType[SlotType["Event"] = -1] = "Event";
	return SlotType;
}({});
/** @see RenderShape */
var SlotShape = /* @__PURE__ */ function(SlotShape) {
	SlotShape[SlotShape["Box"] = RenderShape.BOX] = "Box";
	SlotShape[SlotShape["Arrow"] = RenderShape.ARROW] = "Arrow";
	SlotShape[SlotShape["Grid"] = RenderShape.GRID] = "Grid";
	SlotShape[SlotShape["Circle"] = RenderShape.CIRCLE] = "Circle";
	SlotShape[SlotShape["HollowCircle"] = RenderShape.HollowCircle] = "HollowCircle";
	return SlotShape;
}({});
/** @see LinkDirection */
var SlotDirection = /* @__PURE__ */ function(SlotDirection) {
	return SlotDirection;
}({});
var LabelPosition = /* @__PURE__ */ function(LabelPosition) {
	LabelPosition["Left"] = "left";
	LabelPosition["Right"] = "right";
	return LabelPosition;
}({});
/**
* Draws only the path of a shape on the canvas, without filling.
* Used to draw indicators for node status, e.g. "selected".
* @param ctx The 2D context to draw on
* @param area The position and size of the shape to render
*/
function strokeShape(ctx, area, { shape = RenderShape.BOX, round_radius, title_height, title_mode = TitleMode.NORMAL_TITLE, color, padding = 6, collapsed = false, lineWidth: thickness = 1 } = {}) {
	round_radius ??= LiteGraph.ROUND_RADIUS;
	color ??= LiteGraph.NODE_BOX_OUTLINE_COLOR;
	if (title_mode === TitleMode.TRANSPARENT_TITLE) {
		const height = title_height ?? LiteGraph.NODE_TITLE_HEIGHT;
		area[1] -= height;
		area[3] += height;
	}
	const { lineWidth, strokeStyle } = ctx;
	ctx.lineWidth = thickness;
	ctx.globalAlpha = .8;
	ctx.strokeStyle = color;
	ctx.beginPath();
	const [x, y, width, height] = area;
	switch (shape) {
		case RenderShape.BOX:
			ctx.rect(x - padding, y - padding, width + 2 * padding, height + 2 * padding);
			break;
		case RenderShape.ROUND:
		case RenderShape.CARD: {
			const radius = round_radius + padding;
			const cornerRadii = shape === RenderShape.CARD && collapsed || shape === RenderShape.ROUND ? [radius] : [
				radius,
				2,
				radius,
				2
			];
			ctx.roundRect(x - padding, y - padding, width + 2 * padding, height + 2 * padding, cornerRadii);
			break;
		}
		case RenderShape.CIRCLE: {
			const centerX = x + width / 2;
			const centerY = y + height / 2;
			const radius = Math.max(width, height) / 2 + padding;
			ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
			break;
		}
	}
	ctx.stroke();
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = strokeStyle;
	ctx.globalAlpha = 1;
}
/**
* Truncates text using binary search to fit within a given width, appending an ellipsis if needed.
* @param ctx The canvas rendering context.
* @param text The text to truncate.
* @param maxWidth The maximum width the text (plus ellipsis) can occupy.
* @returns The truncated text, or the original text if it fits.
*/
function truncateTextToWidth(ctx, text, maxWidth) {
	if (!(maxWidth > 0)) return "";
	if (cachedMeasureText(ctx, text) <= maxWidth) return text;
	const ellipsisWidth = cachedMeasureText(ctx, ELLIPSIS) * .75;
	if (ellipsisWidth > maxWidth) {
		if (cachedMeasureText(ctx, TWO_DOT_LEADER) * .75 < maxWidth) return TWO_DOT_LEADER;
		return cachedMeasureText(ctx, ONE_DOT_LEADER) * .75 < maxWidth ? ONE_DOT_LEADER : "";
	}
	let min = 0;
	let max = text.length;
	let bestLen = 0;
	while (min <= max) {
		const mid = Math.floor((min + max) * .5);
		if (mid === 0) {
			min = mid + 1;
			continue;
		}
		if (cachedMeasureText(ctx, text.substring(0, mid)) + ellipsisWidth <= maxWidth) {
			bestLen = mid;
			min = mid + 1;
		} else max = mid - 1;
	}
	return bestLen === 0 ? ELLIPSIS : text.substring(0, bestLen) + ELLIPSIS;
}
/**
* Draws text within an area, truncating it and adding an ellipsis if necessary.
*/
function drawTextInArea({ ctx, text, area, align = "left" }) {
	const { left, right, bottom, width, centreX } = area;
	if (cachedMeasureText(ctx, text) <= width) {
		ctx.textAlign = align;
		const x = align === "left" ? left : align === "right" ? right : centreX;
		ctx.fillText(text, x, bottom);
		return;
	}
	const truncated = truncateTextToWidth(ctx, text, width);
	if (truncated.length === 0) return;
	ctx.textAlign = "left";
	ctx.fillText(truncated.slice(0, -1), left, bottom);
	ctx.rect(left, bottom, width, 1);
	ctx.textAlign = "right";
	const ellipsis = truncated.at(-1);
	ctx.fillText(ellipsis, right, bottom, cachedMeasureText(ctx, ellipsis) * .75);
}
//#endregion
//#region src/lib/litegraph/src/node/SlotBase.ts
/** Base class for all input & output slots. */
var SlotBase = class {
	name;
	localized_name;
	label;
	type;
	dir;
	removable;
	shape;
	color_off;
	color_on;
	locked;
	nameLocked;
	widget;
	_floatingLinks;
	hasErrors;
	boundingRect;
	constructor(name, type, boundingRect) {
		this.name = name;
		this.type = type;
		this.boundingRect = boundingRect ?? new Rectangle();
	}
	renderingColor(colorContext) {
		return this.isConnected ? this.color_on || colorContext.getConnectedColor(this.type) : this.color_off || colorContext.getDisconnectedColor(this.type);
	}
};
//#endregion
//#region src/lib/litegraph/src/node/NodeSlot.ts
var ROTATION_OFFSET = -Math.PI;
/** Shared base class for {@link LGraphNode} input and output slots. */
var NodeSlot = class extends SlotBase {
	pos;
	/** The offset from the parent node to the centre point of this slot. */
	get _centreOffset() {
		const nodePos = this.node.pos;
		const { boundingRect } = this;
		const diameter = boundingRect[3];
		return getCentre([
			boundingRect[0] - nodePos[0],
			boundingRect[1] - nodePos[1],
			diameter,
			diameter
		]);
	}
	_node;
	get node() {
		return this._node;
	}
	get highlightColor() {
		return LiteGraph.NODE_TEXT_HIGHLIGHT_COLOR ?? LiteGraph.NODE_SELECTED_TITLE_COLOR ?? LiteGraph.NODE_TEXT_COLOR;
	}
	constructor(slot, node) {
		const { boundingRect, name, type, _listenerController, ...rest } = slot;
		const rectangle = boundingRect ? Rectangle.ensureRect(boundingRect) : new Rectangle();
		super(name, type, rectangle);
		Object.assign(this, rest);
		this._node = node;
	}
	/**
	* The label to display in the UI.
	*/
	get renderingLabel() {
		return this.label || this.localized_name || this.name || "";
	}
	draw(ctx, { colorContext, labelPosition = LabelPosition.Right, lowQuality = false, highlight = false, doStroke = false }) {
		const originalFillStyle = ctx.fillStyle;
		const originalStrokeStyle = ctx.strokeStyle;
		const originalLineWidth = ctx.lineWidth;
		const labelColor = highlight ? this.highlightColor : LiteGraph.NODE_TEXT_COLOR;
		const pos = this._centreOffset;
		const slot_type = this.type;
		const slot_shape = slot_type === SlotType.Array ? SlotShape.Grid : this.shape;
		ctx.save();
		ctx.beginPath();
		let doFill = true;
		ctx.fillStyle = this.renderingColor(colorContext);
		ctx.lineWidth = 1;
		if (slot_type === SlotType.Event || slot_shape === SlotShape.Box) ctx.rect(pos[0] - 6 + .5, pos[1] - 5 + .5, 14, 10);
		else if (slot_shape === SlotShape.Arrow) {
			ctx.moveTo(pos[0] + 8, pos[1] + .5);
			ctx.lineTo(pos[0] - 4, pos[1] + 6 + .5);
			ctx.lineTo(pos[0] - 4, pos[1] - 6 + .5);
			ctx.closePath();
		} else if (slot_shape === SlotShape.Grid) {
			const gridSize = 3;
			const cellSize = 2;
			const spacing = 3;
			for (let x = 0; x < gridSize; x++) for (let y = 0; y < gridSize; y++) ctx.rect(pos[0] - 4 + x * spacing, pos[1] - 4 + y * spacing, cellSize, cellSize);
			doStroke = false;
		} else if (lowQuality) ctx.rect(pos[0] - 4, pos[1] - 4, 8, 8);
		else {
			if (slot_shape === SlotShape.HollowCircle) {
				const path = new Path2D();
				path.arc(pos[0], pos[1], 10, 0, Math.PI * 2);
				path.arc(pos[0], pos[1], highlight ? 2.5 : 1.5, 0, Math.PI * 2);
				ctx.clip(path, "evenodd");
			}
			const radius = highlight ? 5 : 4;
			const types = [...new Set(`${this.type}`.split(",").map(this.isConnected ? (type) => colorContext.getConnectedColor(type) : (type) => colorContext.getDisconnectedColor(type)))].slice(0, 3);
			if (types.length > 1) {
				doFill = false;
				const arcLen = Math.PI * 2 / types.length;
				types.forEach((type, idx) => {
					ctx.moveTo(pos[0], pos[1]);
					ctx.fillStyle = type;
					ctx.arc(pos[0], pos[1], radius, arcLen * idx + ROTATION_OFFSET, Math.PI * 2 + ROTATION_OFFSET);
					ctx.fill();
					ctx.beginPath();
				});
				ctx.save();
				ctx.strokeStyle = "black";
				ctx.lineWidth = .5;
				types.forEach((_, idx) => {
					ctx.moveTo(pos[0], pos[1]);
					const xOffset = Math.cos(arcLen * idx + ROTATION_OFFSET) * radius;
					const yOffset = Math.sin(arcLen * idx + ROTATION_OFFSET) * radius;
					ctx.lineTo(pos[0] + xOffset, pos[1] + yOffset);
				});
				ctx.stroke();
				ctx.restore();
				ctx.beginPath();
			}
			ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
		}
		if (doFill) ctx.fill();
		if (!lowQuality && doStroke) ctx.stroke();
		ctx.restore();
		if (!(lowQuality || this.isWidgetInputSlot)) {
			const text = this.renderingLabel;
			if (text) {
				ctx.fillStyle = labelColor;
				if (labelPosition === LabelPosition.Right) if (this.dir == LinkDirection.UP) ctx.fillText(text, pos[0], pos[1] - 10);
				else ctx.fillText(text, pos[0] + 10, pos[1] + 5);
				else if (this.dir == LinkDirection.DOWN) ctx.fillText(text, pos[0], pos[1] - 8);
				else ctx.fillText(text, pos[0] - 10, pos[1] + 5);
			}
		}
		if (this.hasErrors) {
			ctx.lineWidth = 2;
			ctx.strokeStyle = "red";
			ctx.beginPath();
			ctx.arc(pos[0], pos[1], 12, 0, Math.PI * 2);
			ctx.stroke();
		}
		ctx.fillStyle = originalFillStyle;
		ctx.strokeStyle = originalStrokeStyle;
		ctx.lineWidth = originalLineWidth;
	}
	/**
	* Custom JSON serialization to prevent circular reference errors.
	* Returns only serializable slot properties without the node back-reference.
	*/
	toJSON() {
		return {
			name: this.name,
			type: this.type,
			label: this.label,
			color_on: this.color_on,
			color_off: this.color_off,
			shape: this.shape,
			dir: this.dir,
			localized_name: this.localized_name,
			pos: this.pos,
			boundingRect: [...this.boundingRect]
		};
	}
	drawCollapsed(ctx) {
		const [x, y] = this.collapsedPos;
		const { fillStyle } = ctx;
		ctx.fillStyle = "#686";
		ctx.beginPath();
		if (this.type === SlotType.Event || this.shape === RenderShape.BOX) ctx.rect(x - 7 + .5, y - 4, 14, 8);
		else if (this.shape === RenderShape.ARROW) {
			if (this instanceof NodeInputSlot) {
				ctx.moveTo(x + 8, y);
				ctx.lineTo(x - 4, y - 4);
				ctx.lineTo(x - 4, y + 4);
			} else {
				ctx.moveTo(x + 6, y);
				ctx.lineTo(x - 6, y - 4);
				ctx.lineTo(x - 6, y + 4);
			}
			ctx.closePath();
		} else ctx.arc(x, y, 4, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = fillStyle;
	}
};
//#endregion
//#region src/lib/litegraph/src/Reroute.ts
var layoutMutations = useLayoutMutations();
/**
* Represents an additional point on the graph that a link path will travel through.  Used for visual organisation only.
*
* Requires no disposal or clean up.
* Stores only primitive values (IDs) to reference other items in its network,
* and a `WeakRef` to a {@link LinkNetwork} to resolve them.
*/
var Reroute = class Reroute {
	static radius = 10;
	/** Maximum distance from reroutes to their bezier curve control points. */
	static maxSplineOffset = 80;
	static drawIdBadge = false;
	static slotRadius = 5;
	/** Distance from reroute centre to slot centre. */
	static get slotOffset() {
		const gap = Reroute.slotRadius * .33;
		return Reroute.radius + gap + Reroute.slotRadius;
	}
	/** The network this reroute belongs to.  Contains all valid links and reroutes. */
	network;
	parentIdInternal;
	get parentId() {
		return this.parentIdInternal;
	}
	/** Ignores attempts to create an infinite loop. @inheritdoc */
	set parentId(value) {
		if (value === this.id) return;
		if (this.getReroutes() === null) return;
		this.parentIdInternal = value;
	}
	get parent() {
		return this.network.deref()?.getReroute(this.parentIdInternal);
	}
	/** This property is only defined on the last reroute of a floating reroute chain (closest to input end). */
	floating;
	posInternal = [0, 0];
	/** @inheritdoc */
	get pos() {
		return this.posInternal;
	}
	set pos(value) {
		if (!(value?.length >= 2)) throw new TypeError("Reroute.pos is an x,y point, and expects an indexable with at least two values.");
		this.posInternal[0] = value[0];
		this.posInternal[1] = value[1];
	}
	/** @inheritdoc */
	get boundingRect() {
		const { radius } = Reroute;
		const [x, y] = this.posInternal;
		return [
			x - radius,
			y - radius,
			2 * radius,
			2 * radius
		];
	}
	/**
	* Slightly over-sized rectangle, guaranteed to contain the entire surface area for hover detection.
	* Eliminates most hover positions using an extremely cheap check.
	*/
	get hoverArea() {
		const xOffset = 2 * Reroute.slotOffset;
		const yOffset = 2 * Math.max(Reroute.radius, Reroute.slotRadius);
		const [x, y] = this.posInternal;
		return [
			x - xOffset,
			y - yOffset,
			2 * xOffset,
			2 * yOffset
		];
	}
	/** The total number of links & floating links using this reroute */
	get totalLinks() {
		return this.linkIds.size + this.floatingLinkIds.size;
	}
	/** @inheritdoc */
	selected;
	/** The ID ({@link LLink.id}) of every link using this reroute */
	linkIds;
	/** The ID ({@link LLink.id}) of every floating link using this reroute */
	floatingLinkIds;
	/** Cached cos */
	cos = 0;
	sin = 0;
	/** Bezier curve control point for the "target" (input) side of the link */
	controlPoint = [0, 0];
	/** @inheritdoc */
	path;
	/** @inheritdoc */
	_centreAngle;
	/** @inheritdoc */
	_pos = [0, 0];
	/** @inheritdoc */
	_dragging;
	/** Colour of the first link that rendered this reroute */
	_colour;
	/** Colour of the first link that rendered this reroute */
	get colour() {
		return this._colour ?? "#18184d";
	}
	/**
	* Used to ensure reroute angles are only executed once per frame.
	* @todo Calculate on change instead.
	*/
	lastRenderTime = -Infinity;
	inputSlot = new RerouteSlot(this, true);
	outputSlot = new RerouteSlot(this, false);
	get isSlotHovered() {
		return this.isInputHovered || this.isOutputHovered;
	}
	get isInputHovered() {
		return this.inputSlot.hovering;
	}
	get isOutputHovered() {
		return this.outputSlot.hovering;
	}
	get firstLink() {
		const linkId = this.linkIds.values().next().value;
		return linkId === void 0 ? void 0 : this.network.deref()?.links.get(linkId);
	}
	get firstFloatingLink() {
		const linkId = this.floatingLinkIds.values().next().value;
		return linkId === void 0 ? void 0 : this.network.deref()?.floatingLinks.get(linkId);
	}
	/** @inheritdoc */
	get origin_id() {
		return this.firstLink?.origin_id;
	}
	/** @inheritdoc */
	get origin_slot() {
		return this.firstLink?.origin_slot;
	}
	/**
	* Initialises a new link reroute object.
	* @param id Unique identifier for this reroute
	* @param network The network of links this reroute belongs to.  Internally converted to a WeakRef.
	* @param pos Position in graph coordinates
	* @param linkIds Link IDs ({@link LLink.id}) of all links that use this reroute
	*/
	constructor(id, network, pos, parentId, linkIds, floatingLinkIds) {
		this.id = id;
		this.network = new WeakRef(network);
		this.parentId = parentId;
		if (pos) this.pos = pos;
		this.linkIds = new Set(linkIds);
		this.floatingLinkIds = new Set(floatingLinkIds);
	}
	/**
	* Applies a new parentId to the reroute, and optinoally a new position and linkId.
	* Primarily used for deserialisation.
	* @param parentId The ID of the reroute prior to this reroute, or
	* `undefined` if it is the first reroute connected to a nodes output
	* @param pos The position of this reroute
	* @param linkIds All link IDs that pass through this reroute
	*/
	update(parentId, pos, linkIds, floating) {
		this.parentId = parentId;
		if (pos) this.pos = pos;
		if (linkIds) this.linkIds = new Set(linkIds);
		this.floating = floating;
	}
	/**
	* Validates the linkIds this reroute has.  Removes broken links.
	* @param links Collection of valid links
	* @returns true if any links remain after validation
	*/
	validateLinks(links, floatingLinks) {
		const { linkIds, floatingLinkIds } = this;
		for (const linkId of linkIds) if (!links.has(linkId)) linkIds.delete(linkId);
		for (const linkId of floatingLinkIds) if (!floatingLinks.has(linkId)) floatingLinkIds.delete(linkId);
		return linkIds.size > 0 || floatingLinkIds.size > 0;
	}
	/**
	* Retrieves an ordered array of all reroutes from the node output.
	* @param visited Internal.  A set of reroutes that this function
	* has already visited whilst recursing up the chain.
	* @returns An ordered array of all reroutes from the node output to this reroute, inclusive.
	* `null` if an infinite loop is detected.
	* `undefined` if the reroute chain or {@link LinkNetwork} are invalid.
	*/
	getReroutes(visited = /* @__PURE__ */ new Set()) {
		if (this.parentIdInternal === void 0) return [this];
		if (visited.has(this)) return null;
		visited.add(this);
		const parent = this.network.deref()?.reroutes.get(this.parentIdInternal);
		if (!parent) {
			this.parentIdInternal = void 0;
			return [this];
		}
		const reroutes = parent.getReroutes(visited);
		reroutes?.push(this);
		return reroutes;
	}
	/**
	* Internal.  Called by {@link LLink.findNextReroute}.  Not intended for use by itself.
	* @param withParentId The rerouteId to look for
	* @param visited A set of reroutes that have already been visited
	* @returns The reroute that was found, `undefined` if no reroute was found, or `null` if an infinite loop was detected.
	*/
	findNextReroute(withParentId, visited = /* @__PURE__ */ new Set()) {
		if (this.parentIdInternal === withParentId) return this;
		if (visited.has(this)) return null;
		visited.add(this);
		if (this.parentIdInternal === void 0) return;
		return this.network.deref()?.reroutes.get(this.parentIdInternal)?.findNextReroute(withParentId, visited);
	}
	/**
	* Finds the output node and output slot of the first link passing through this reroute.
	* @returns The output node and output slot of the first link passing through this reroute, or `undefined` if no link is found.
	*/
	findSourceOutput() {
		const link = this.firstLink ?? this.firstFloatingLink;
		if (!link) return;
		const node = this.network.deref()?.getNodeById(link.origin_id);
		if (!node) return;
		return {
			node,
			output: node.outputs[link.origin_slot]
		};
	}
	/**
	* Finds the inputs and nodes of (floating) links passing through this reroute.
	* @returns An array of objects containing the node and input slot of each link passing through this reroute.
	*/
	findTargetInputs() {
		const network = this.network.deref();
		if (!network) return;
		const results = [];
		addAllResults(network, this.linkIds, network.links);
		addAllResults(network, this.floatingLinkIds, network.floatingLinks);
		return results;
		function addAllResults(network, linkIds, links) {
			for (const linkId of linkIds) {
				const link = links.get(linkId);
				if (!link) continue;
				const node = network.getNodeById(link.target_id);
				const input = node?.inputs[link.target_slot];
				if (!input) continue;
				results.push({
					node,
					input,
					link
				});
			}
		}
	}
	/**
	* Retrieves all floating links passing through this reroute.
	* @param from Filters the links by the currently connected link side.
	* @returns An array of floating links
	*/
	getFloatingLinks(from) {
		const floatingLinks = this.network.deref()?.floatingLinks;
		if (!floatingLinks) return;
		const idProp = from === "input" ? "origin_id" : "target_id";
		const out = [];
		for (const linkId of this.floatingLinkIds) {
			const link = floatingLinks.get(linkId);
			if (link?.[idProp] === -1) out.push(link);
		}
		return out;
	}
	/**
	* Changes the origin node/output of all floating links that pass through this reroute.
	* @param node The new origin node
	* @param output The new origin output slot
	* @param index The slot index of {@link output}
	*/
	setFloatingLinkOrigin(node, output, index) {
		const network = this.network.deref();
		const floatingOutLinks = this.getFloatingLinks("output");
		if (!floatingOutLinks) throw new Error("[setFloatingLinkOrigin]: Invalid network.");
		if (!floatingOutLinks.length) return;
		output._floatingLinks ??= /* @__PURE__ */ new Set();
		for (const link of floatingOutLinks) {
			output._floatingLinks.add(link);
			network?.getNodeById(link.origin_id)?.outputs[link.origin_slot]?._floatingLinks?.delete(link);
			link.origin_id = node.id;
			link.origin_slot = index;
		}
	}
	/** @inheritdoc */
	move(deltaX, deltaY) {
		const previousPos = {
			x: this.posInternal[0],
			y: this.posInternal[1]
		};
		this.posInternal[0] += deltaX;
		this.posInternal[1] += deltaY;
		layoutMutations.setSource(LayoutSource.Canvas);
		layoutMutations.moveReroute(this.id, {
			x: this.posInternal[0],
			y: this.posInternal[1]
		}, previousPos);
	}
	/** @inheritdoc */
	snapToGrid(snapTo) {
		if (!snapTo) return false;
		const offsetY = LiteGraph.NODE_SLOT_HEIGHT * .7;
		const { pos } = this;
		pos[0] = snapTo * Math.round(pos[0] / snapTo);
		pos[1] = snapTo * Math.round((pos[1] - offsetY) / snapTo) + offsetY;
		return true;
	}
	removeAllFloatingLinks() {
		for (const linkId of this.floatingLinkIds) this.removeFloatingLink(linkId);
	}
	removeFloatingLink(linkId) {
		const network = this.network.deref();
		if (!network) return;
		const floatingLink = network.floatingLinks.get(linkId);
		if (!floatingLink) {
			console.warn(`[Reroute.removeFloatingLink] Floating link not found: ${linkId}, ignoring and discarding ID.`);
			this.floatingLinkIds.delete(linkId);
			return;
		}
		network.removeFloatingLink(floatingLink);
	}
	/**
	* Removes a link or floating link from this reroute, by matching link object instance equality.
	* @param link The link to remove.
	* @remarks Does not remove the link from the network.
	*/
	removeLink(link) {
		const network = this.network.deref();
		if (!network) return;
		if (link === network.floatingLinks.get(link.id)) this.floatingLinkIds.delete(link.id);
		else this.linkIds.delete(link.id);
	}
	remove() {
		const network = this.network.deref();
		if (!network) return;
		network.removeReroute(this.id);
	}
	calculateAngle(lastRenderTime, network, linkStart) {
		if (!(lastRenderTime > this.lastRenderTime)) return;
		this.lastRenderTime = lastRenderTime;
		const { id, pos: thisPos } = this;
		const angles = [];
		let sum = 0;
		calculateAngles(this.linkIds, network.links);
		calculateAngles(this.floatingLinkIds, network.floatingLinks);
		if (!angles.length) {
			this.cos = 0;
			this.sin = 0;
			this.controlPoint[0] = 0;
			this.controlPoint[1] = 0;
			return;
		}
		sum /= angles.length;
		const originToReroute = Math.atan2(this.posInternal[1] - linkStart[1], this.posInternal[0] - linkStart[0]);
		let diff = (originToReroute - sum) * .5;
		if (Math.abs(diff) > Math.PI * .5) diff += Math.PI;
		const dist = Math.min(Reroute.maxSplineOffset, distance(linkStart, this.posInternal) * .25);
		const originDiff = originToReroute - diff;
		const cos = Math.cos(originDiff);
		const sin = Math.sin(originDiff);
		this.cos = cos;
		this.sin = sin;
		this.controlPoint[0] = dist * -cos;
		this.controlPoint[1] = dist * -sin;
		/**
		* Calculates the direction of each link and adds it to the array.
		* @param linkIds The IDs of the links to calculate
		* @param links The link container from the link network.
		*/
		function calculateAngles(linkIds, links) {
			for (const linkId of linkIds) {
				const pos = getNextPos(network, links.get(linkId), id);
				if (!pos) continue;
				const angle = getDirection(thisPos, pos);
				angles.push(angle);
				sum += angle;
			}
		}
	}
	/**
	* Renders the reroute on the canvas.
	* @param ctx Canvas context to draw on
	* @param backgroundPattern The canvas background pattern; used to make floating reroutes appear washed out.
	* @remarks Leaves {@link ctx}.fillStyle, strokeStyle, and lineWidth dirty (perf.).
	*/
	draw(ctx, backgroundPattern) {
		const { globalAlpha } = ctx;
		const { pos } = this;
		ctx.beginPath();
		ctx.arc(pos[0], pos[1], Reroute.radius, 0, 2 * Math.PI);
		if (this.linkIds.size === 0) {
			ctx.fillStyle = backgroundPattern ?? "#797979";
			ctx.fill();
			ctx.globalAlpha = globalAlpha * .33;
		}
		ctx.fillStyle = this.colour;
		ctx.lineWidth = Reroute.radius * .1;
		ctx.strokeStyle = "rgb(0,0,0,0.5)";
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "#ffffff55";
		ctx.strokeStyle = "rgb(0,0,0,0.3)";
		ctx.beginPath();
		ctx.arc(pos[0], pos[1], Reroute.radius * .8, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		if (this.selected) {
			ctx.strokeStyle = "#fff";
			ctx.beginPath();
			ctx.arc(pos[0], pos[1], Reroute.radius * 1.2, 0, 2 * Math.PI);
			ctx.stroke();
		}
		if (Reroute.drawIdBadge) {
			const idBadge = new LGraphBadge({ text: this.id.toString() });
			const x = pos[0] - idBadge.getWidth(ctx) * .5;
			const y = pos[1] - idBadge.height - Reroute.radius - 2;
			idBadge.draw(ctx, x, y);
		}
		ctx.globalAlpha = globalAlpha;
	}
	/**
	* Draws the input and output slots on the canvas, if the slots are visible.
	* @param ctx The canvas context to draw on.
	*/
	drawSlots(ctx) {
		this.inputSlot.draw(ctx);
		this.outputSlot.draw(ctx);
	}
	drawHighlight(ctx, colour) {
		const { pos } = this;
		const { strokeStyle, lineWidth } = ctx;
		ctx.strokeStyle = colour;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(pos[0], pos[1], Reroute.radius * 1.5, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.strokeStyle = strokeStyle;
		ctx.lineWidth = lineWidth;
	}
	/**
	* Updates visibility of the input and output slots, based on the position of the pointer.
	* @param pos The position of the pointer.
	* @returns `true` if any changes require a redraw.
	*/
	updateVisibility(pos) {
		const input = this.inputSlot;
		const output = this.outputSlot;
		input.dirty = false;
		output.dirty = false;
		const { firstFloatingLink } = this;
		const hasLink = !!this.firstLink;
		const showInput = hasLink || firstFloatingLink?.isFloatingOutput;
		const showOutput = hasLink || firstFloatingLink?.isFloatingInput;
		if ((showInput || showOutput) && isPointInRect(pos, this.hoverArea)) {
			const outlineOnly = this.contains(pos);
			if (showInput) input.update(pos, outlineOnly);
			if (showOutput) output.update(pos, outlineOnly);
		} else this.hideSlots();
		return input.dirty || output.dirty;
	}
	/** Prevents rendering of the input and output slots. */
	hideSlots() {
		this.inputSlot.hide();
		this.outputSlot.hide();
	}
	/**
	* Precisely determines if {@link pos} is inside this reroute.
	* @param pos The position to check (canvas space)
	* @returns `true` if {@link pos} is within the reroute's radius.
	*/
	containsPoint(pos) {
		return isPointInRect(pos, this.hoverArea) && this.contains(pos);
	}
	contains(pos) {
		return distance(this.pos, pos) <= Reroute.radius;
	}
	/** @inheritdoc */
	asSerialisable() {
		const { id, parentId, pos, linkIds } = this;
		return {
			id,
			parentId,
			pos: [pos[0], pos[1]],
			linkIds: [...linkIds],
			floating: this.floating ? { slotType: this.floating.slotType } : void 0
		};
	}
};
/**
* Represents a slot on a reroute.
* @private Designed for internal use within this module.
*/
var RerouteSlot = class {
	/** The reroute that the slot belongs to. */
	reroute;
	offsetMultiplier;
	/** Centre point of this slot. */
	get pos() {
		const [x, y] = this.reroute.pos;
		return [x + Reroute.slotOffset * this.offsetMultiplier, y];
	}
	/** Whether any changes require a redraw. */
	dirty = false;
	hoveringInternal = false;
	/** Whether the pointer is hovering over the slot itself. */
	get hovering() {
		return this.hoveringInternal;
	}
	set hovering(value) {
		if (!Object.is(this.hoveringInternal, value)) {
			this.hoveringInternal = value;
			this.dirty = true;
		}
	}
	showOutlineInternal = false;
	/** Whether the slot outline / faint background is visible. */
	get showOutline() {
		return this.showOutlineInternal;
	}
	set showOutline(value) {
		if (!Object.is(this.showOutlineInternal, value)) {
			this.showOutlineInternal = value;
			this.dirty = true;
		}
	}
	constructor(reroute, isInput) {
		this.reroute = reroute;
		this.offsetMultiplier = isInput ? -1 : 1;
	}
	/**
	* Updates the slot's visibility based on the position of the pointer.
	* @param pos The position of the pointer.
	* @param outlineOnly If `true`, slot will display with the faded outline only ({@link showOutline}).
	*/
	update(pos, outlineOnly) {
		if (outlineOnly) {
			this.hovering = false;
			this.showOutline = true;
		} else {
			const dist = distance(this.pos, pos);
			this.hovering = dist <= 2 * Reroute.slotRadius;
			this.showOutline = dist <= 5 * Reroute.slotRadius;
		}
	}
	/** Hides the slot. */
	hide() {
		this.hovering = false;
		this.showOutline = false;
	}
	/**
	* Draws the slot on the canvas.
	* @param ctx The canvas context to draw on.
	*/
	draw(ctx) {
		const { fillStyle, strokeStyle, lineWidth } = ctx;
		const { showOutline, hovering, pos: [x, y] } = this;
		if (!showOutline) return;
		try {
			ctx.fillStyle = hovering ? this.reroute.colour : "rgba(127,127,127,0.3)";
			ctx.strokeStyle = "rgb(0,0,0,0.5)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.arc(x, y, Reroute.slotRadius, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
		} finally {
			ctx.fillStyle = fillStyle;
			ctx.strokeStyle = strokeStyle;
			ctx.lineWidth = lineWidth;
		}
	}
};
/**
* Retrieves the position of the next reroute in the chain, or the destination input slot on this link.
* @param network The network of links
* @param link The link representing the current reroute chain
* @param id The ID of "this" reroute
* @returns The position of the next reroute or the input slot target, otherwise `undefined`.
*/
function getNextPos(network, link, id) {
	if (!link) return;
	const linkPos = LLink.findNextReroute(network, link, id)?.pos;
	if (linkPos) return linkPos;
	if (link.target_id === -1 || link.target_slot === -1) return;
	return network.getNodeById(link.target_id)?.getInputPos(link.target_slot);
}
/** Returns the direction from one point to another in radians. */
function getDirection(fromPos, toPos) {
	return Math.atan2(toPos[1] - fromPos[1], toPos[0] - fromPos[0]);
}
//#endregion
//#region src/lib/litegraph/src/strings.ts
function parseSlotTypes(type) {
	return type == "" || type == "0" ? ["*"] : String(type).toLowerCase().split(",");
}
/**
* Creates a unique name by appending an underscore and a number to the end of the name
* if it already exists.
* @param name The name to make unique
* @param existingNames The names that already exist. Default: an empty array
* @returns The name, or a unique name if it already exists.
* @remark Used by SubgraphInputNode to deduplicate input names when promoting
* the same widget name from multiple node instances (e.g. `seed` → `seed_1`).
* Extensions matching by slot name should account for the `_N` suffix.
*/
function nextUniqueName(name, existingNames = []) {
	let i = 1;
	const baseName = name;
	while (existingNames.includes(name)) name = `${baseName}_${i++}`;
	return name;
}
//#endregion
//#region src/lib/litegraph/src/utils/collections.ts
/**
* Creates a flat set of all positionable items by recursively iterating through all child items.
*
* Does not include or recurse into pinned items.
* @param items The original set of items to iterate through
* @returns All unpinned items in the original set, and recursively, their children
*/
function getAllNestedItems(items) {
	const allItems = /* @__PURE__ */ new Set();
	if (items) for (const item of items) addRecursively(item, allItems);
	return allItems;
	function addRecursively(item, flatSet) {
		if (flatSet.has(item) || item.pinned) return;
		flatSet.add(item);
		if (item.children) for (const child of item.children) addRecursively(child, flatSet);
	}
}
/**
* Iterates through a collection of {@link Positionable} items, returning the first {@link LGraphNode}.
* @param items The items to search through
* @returns The first node found in {@link items}, otherwise `undefined`
*/
function findFirstNode(items) {
	for (const item of items) if (item instanceof LGraphNode) return item;
}
/**
* Finds the first free in/out slot with any of the comma-delimited types in {@link type}.
*
* If no slots are free, falls back in order to:
* - The first free wildcard slot
* - The first occupied slot
* - The first occupied wildcard slot
* @param slots The iterable of node slots slots to search through
* @param type The {@link ISlotType type} of slot to find
* @param hasNoLinks A predicate that returns `true` if the slot is free.
* @returns The index and slot if found, otherwise `undefined`.
*/
function findFreeSlotOfType(slots, type, hasNoLinks) {
	if (!slots?.length) return;
	let occupiedSlot;
	let wildSlot;
	let occupiedWildSlot;
	const validTypes = parseSlotTypes(type);
	for (const [index, slot] of slots.entries()) {
		const slotTypes = parseSlotTypes(slot.type);
		for (const validType of validTypes) for (const slotType of slotTypes) if (slotType === validType) {
			if (hasNoLinks(slot)) return {
				index,
				slot
			};
			occupiedSlot ??= {
				index,
				slot
			};
		} else if (!wildSlot && (validType === "*" || slotType === "*")) if (hasNoLinks(slot)) wildSlot = {
			index,
			slot
		};
		else occupiedWildSlot ??= {
			index,
			slot
		};
	}
	return wildSlot ?? occupiedSlot ?? occupiedWildSlot;
}
//#endregion
//#region src/lib/litegraph/src/infrastructure/CustomEventTarget.ts
/**
* A strongly-typed, custom {@link EventTarget} that can dispatch and listen for events.
*
* 1. Define an event map
*    ```ts
*    export interface CustomEventMap {
*      "my-event": { message: string }
*      "simple-event": never
*    }
*    ```
*
* 2. Create an event emitter
*    ```ts
*    // By subclassing
*    class MyClass extends CustomEventTarget<CustomEventMap> {
*      // ...
*    }
*
*    // Or simply create an instance:
*    const events = new CustomEventTarget<CustomEventMap>()
*    ```
*
* 3. Dispatch events
*    ```ts
*    // Extended class
*    const myClass = new MyClass()
*    myClass.dispatch("my-event", { message: "Hello, world!" })
*    myClass.dispatch("simple-event")
*
*    // Instance
*    const events = new CustomEventTarget<CustomEventMap>()
*    events.dispatch("my-event", { message: "Hello, world!" })
*    events.dispatch("simple-event")
*    ```
*/
var CustomEventTarget = class extends EventTarget {
	dispatch(type, detail) {
		const event = new CustomEvent(type, {
			detail,
			cancelable: true
		});
		return super.dispatchEvent(event);
	}
	addEventListener(type, listener, options) {
		super.addEventListener(type, listener, options);
	}
	removeEventListener(type, listener, options) {
		super.removeEventListener(type, listener, options);
	}
	/** @deprecated Use {@link dispatch}. */
	dispatchEvent(event) {
		return super.dispatchEvent(event);
	}
};
//#endregion
//#region src/lib/litegraph/src/infrastructure/ConstrainedSize.ts
/**
* Basic width and height, with min/max constraints.
*
* - The {@link width} and {@link height} properties are readonly
* - Size is set via {@link desiredWidth} and {@link desiredHeight} properties
* - Width and height are then updated, clamped to min/max values
*/
var ConstrainedSize = class ConstrainedSize {
	_width = 0;
	_height = 0;
	_desiredWidth = 0;
	_desiredHeight = 0;
	minWidth = 0;
	minHeight = 0;
	maxWidth = Infinity;
	maxHeight = Infinity;
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get desiredWidth() {
		return this._desiredWidth;
	}
	set desiredWidth(value) {
		this._desiredWidth = value;
		this._width = clamp(value, this.minWidth, this.maxWidth);
	}
	get desiredHeight() {
		return this._desiredHeight;
	}
	set desiredHeight(value) {
		this._desiredHeight = value;
		this._height = clamp(value, this.minHeight, this.maxHeight);
	}
	constructor(width, height) {
		this.desiredWidth = width;
		this.desiredHeight = height;
	}
	static fromSize(size) {
		return new ConstrainedSize(size[0], size[1]);
	}
	static fromRect(rect) {
		return new ConstrainedSize(rect[2], rect[3]);
	}
	setSize(size) {
		this.desiredWidth = size[0];
		this.desiredHeight = size[1];
	}
	setValues(width, height) {
		this.desiredWidth = width;
		this.desiredHeight = height;
	}
	toSize() {
		return [this._width, this._height];
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphSlotBase.ts
/** Shared base class for the slots used on Subgraph . */
var SubgraphSlot = class SubgraphSlot extends SlotBase {
	static get defaultHeight() {
		return LiteGraph.NODE_SLOT_HEIGHT;
	}
	_pos = [0, 0];
	measurement = new ConstrainedSize(SubgraphSlot.defaultHeight, SubgraphSlot.defaultHeight);
	id;
	parent;
	type;
	linkIds = [];
	boundingRect = new Rectangle(0, 0, 0, SubgraphSlot.defaultHeight);
	get pos() {
		return this._pos;
	}
	set pos(value) {
		if (!value || value.length < 2) return;
		this._pos[0] = value[0];
		this._pos[1] = value[1];
	}
	/** Whether this slot is connected to another slot. */
	get isConnected() {
		return this.linkIds.length > 0;
	}
	/** The display name of this slot. */
	get displayName() {
		return this.label ?? this.localized_name ?? this.name;
	}
	constructor(slot, parent) {
		super(slot.name, slot.type);
		Object.assign(this, slot);
		this.id = slot.id ?? createUuidv4();
		this.type = slot.type;
		this.parent = parent;
	}
	isPointerOver = false;
	containsPoint(point) {
		return this.boundingRect.containsPoint(point);
	}
	onPointerMove(e) {
		this.isPointerOver = this.boundingRect.containsXy(e.canvasX, e.canvasY);
	}
	getLinks() {
		const links = [];
		const { subgraph } = this.parent;
		for (const id of this.linkIds) {
			const link = subgraph.getLink(id);
			if (link) links.push(link);
		}
		return links;
	}
	decrementSlots(inputsOrOutputs) {
		const { links } = this.parent.subgraph;
		const linkProperty = inputsOrOutputs === "inputs" ? "origin_slot" : "target_slot";
		for (const linkId of this.linkIds) {
			const link = links.get(linkId);
			if (link) link[linkProperty]--;
			else console.warn("decrementSlots: link ID not found", linkId);
		}
	}
	measure() {
		const width = LGraphCanvas._measureText?.(this.displayName) ?? 0;
		const { defaultHeight } = SubgraphSlot;
		this.measurement.setValues(width + defaultHeight, defaultHeight);
		return this.measurement.toSize();
	}
	/**
	* Disconnects all links connected to this slot.
	*/
	disconnect() {
		const { subgraph } = this.parent;
		for (const linkId of this.linkIds) subgraph.removeLink(linkId);
		this.linkIds.length = 0;
	}
	/** @remarks Leaves the context dirty. */
	draw({ ctx, colorContext, lowQuality, fromSlot, editorAlpha = 1 }) {
		const shape = this.shape;
		const { isPointerOver, pos: [x, y] } = this;
		const isValidTarget = fromSlot ? this.isValidTarget(fromSlot) : true;
		const isValid = !fromSlot || isValidTarget;
		const highlight = isValid && isPointerOver;
		const previousAlpha = ctx.globalAlpha;
		ctx.globalAlpha = isValid ? editorAlpha : .4 * editorAlpha;
		ctx.beginPath();
		const color = this.renderingColor(colorContext);
		if (lowQuality) {
			ctx.fillStyle = color;
			ctx.rect(x - 4, y - 4, 8, 8);
			ctx.fill();
		} else if (shape === SlotShape.HollowCircle) {
			ctx.lineWidth = 3;
			ctx.strokeStyle = color;
			const radius = highlight ? 4 : 3;
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.stroke();
		} else {
			ctx.fillStyle = color;
			const radius = highlight ? 5 : 4;
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.fill();
		}
		if (this.displayName) {
			const [labelX, labelY] = this.labelPos;
			ctx.fillStyle = highlight ? "white" : LiteGraph.NODE_TEXT_COLOR || "#AAA";
			ctx.fillText(this.displayName, labelX, labelY);
		}
		ctx.globalAlpha = previousAlpha;
	}
	asSerialisable() {
		const { id, name, type, linkIds, localized_name, label, dir, shape, color_off, color_on, pos } = this;
		return {
			id,
			name,
			type,
			linkIds,
			localized_name,
			label,
			dir,
			shape,
			color_off,
			color_on,
			pos
		};
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphInput.ts
/**
* An input "slot" from a parent graph into a subgraph.
*
* IMPORTANT: A subgraph "input" is both an input AND an output.  It creates an extra link connection point between
* a parent graph and a subgraph, so is conceptually similar to a reroute.
*
* This can be a little confusing, but is easier to visualise when imagining editing a subgraph.
* You have "Subgraph Inputs", because they are coming into the subgraph, which then connect to "node inputs".
*
* Functionally, however, when editing a subgraph, that "subgraph input" is the "origin" or "output side" of a link.
*/
var SubgraphInput = class extends SubgraphSlot {
	events = new CustomEventTarget();
	/** The linked widget that this slot is connected to. */
	_widgetRef;
	get _widget() {
		return this._widgetRef?.deref();
	}
	set _widget(widget) {
		this._widgetRef = widget ? new WeakRef(widget) : void 0;
	}
	connect(slot, node, afterRerouteId) {
		const { subgraph } = this.parent;
		const inputIndex = node.inputs.indexOf(slot);
		if (node.onConnectInput?.(inputIndex, this.type, this, this.parent, -1) === false) return;
		if (slot.link != null) {
			subgraph.beforeChange();
			const link = subgraph.getLink(slot.link);
			this.parent._disconnectNodeInput(node, slot, link);
		}
		const inputWidget = node.getWidgetFromSlot(slot);
		if (inputWidget) {
			if (!this.matchesWidget(inputWidget)) {
				console.warn("Target input has invalid widget.", slot, node);
				return;
			}
			this._widget = inputWidget;
			this.events.dispatch("input-connected", {
				input: slot,
				widget: inputWidget,
				node
			});
		} else this.events.dispatch("input-connected", { input: slot });
		const link = new LLink(++subgraph.state.lastLinkId, slot.type, this.parent.id, this.parent.slots.indexOf(this), node.id, inputIndex, afterRerouteId);
		subgraph._links.set(link.id, link);
		this.linkIds.push(link.id);
		slot.link = link.id;
		const reroutes = LLink.getReroutes(subgraph, link);
		for (const reroute of reroutes) {
			reroute.linkIds.add(link.id);
			if (reroute.floating) delete reroute.floating;
			reroute._dragging = void 0;
		}
		const lastReroute = reroutes.at(-1);
		if (lastReroute) for (const linkId of lastReroute.floatingLinkIds) {
			const link = subgraph.floatingLinks.get(linkId);
			if (link?.parentId === lastReroute.id) subgraph.removeFloatingLink(link);
		}
		subgraph._version++;
		node.onConnectionsChange?.(NodeSlotType.INPUT, inputIndex, true, link, slot);
		subgraph.afterChange();
		return link;
	}
	get labelPos() {
		const [x, y, , height] = this.boundingRect;
		return [x, y + height * .5];
	}
	getConnectedWidgets() {
		const { subgraph } = this.parent;
		const widgets = [];
		for (const linkId of this.linkIds) {
			const link = subgraph.getLink(linkId);
			if (!link) {
				console.error("Link not found", linkId);
				continue;
			}
			const resolved = link.resolve(subgraph);
			if (resolved.input && resolved.inputNode?.widgets) {
				const widgetNamePojo = resolved.input.widget;
				if (!widgetNamePojo) continue;
				if (!widgetNamePojo.name) {
					console.warn("Invalid widget name", widgetNamePojo);
					continue;
				}
				const widget = resolved.inputNode.widgets.find((w) => w.name === widgetNamePojo.name);
				if (!widget) {
					console.warn("Widget not found", widgetNamePojo);
					continue;
				}
				widgets.push(widget);
			}
		}
		return widgets;
	}
	/**
	* Validates that the connection between the new slot and the existing widget is valid.
	* Used to prevent connections between widgets that are not of the same type.
	* @param otherWidget The widget to compare to.
	* @returns `true` if the connection is valid, otherwise `false`.
	*/
	matchesWidget(otherWidget) {
		const widget = this._widgetRef?.deref();
		if (!widget) return true;
		if (otherWidget.type !== widget.type || otherWidget.options.min !== widget.options.min || otherWidget.options.max !== widget.options.max || otherWidget.options.step !== widget.options.step || otherWidget.options.step2 !== widget.options.step2 || otherWidget.options.precision !== widget.options.precision) return false;
		return true;
	}
	disconnect() {
		super.disconnect();
		this._widget = void 0;
		this.events.dispatch("input-disconnected", { input: this });
	}
	/** For inputs, x is the right edge of the input node. */
	arrange(rect) {
		const [right, top, width, height] = rect;
		const { boundingRect: b, pos } = this;
		b[0] = right - width;
		b[1] = top;
		b[2] = width;
		b[3] = height;
		pos[0] = right - height * .5;
		pos[1] = top + height * .5;
	}
	/**
	* Checks if this slot is a valid target for a connection from the given slot.
	* For SubgraphInput (which acts as an output inside the subgraph),
	* the fromSlot should be an input slot.
	*/
	isValidTarget(fromSlot) {
		if (isNodeSlot(fromSlot)) return "link" in fromSlot && LiteGraph.isValidConnection(this.type, fromSlot.type);
		if (isSubgraphOutput(fromSlot)) return LiteGraph.isValidConnection(this.type, fromSlot.type);
		return false;
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/EmptySubgraphInput.ts
/**
* A virtual slot that simply creates a new input slot when connected to.
*/
var EmptySubgraphInput = class extends SubgraphInput {
	constructor(parent) {
		super({
			id: zeroUuid,
			name: "",
			type: ""
		}, parent);
	}
	connect(slot, node, afterRerouteId) {
		const { subgraph } = this.parent;
		const existingNames = subgraph.inputs.map((x) => x.name);
		const name = nextUniqueName(slot.name, existingNames);
		return subgraph.addInput(name, String(slot.type)).connect(slot, node, afterRerouteId);
	}
	get labelPos() {
		const [x, y, , height] = this.boundingRect;
		return [x, y + height * .5];
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphIONodeBase.ts
var SubgraphIONodeBase = class SubgraphIONodeBase {
	static margin = 10;
	static minWidth = 100;
	static roundedRadius = 14;
	_boundingRect = new Rectangle();
	get boundingRect() {
		return this._boundingRect;
	}
	selected = false;
	pinned = false;
	removable = false;
	isPointerOver = false;
	get pos() {
		return this.boundingRect.pos;
	}
	set pos(value) {
		this.boundingRect.pos = value;
	}
	get size() {
		return this.boundingRect.size;
	}
	set size(value) {
		this.boundingRect.size = value;
	}
	get sideLineWidth() {
		return this.isPointerOver ? 2.5 : 2;
	}
	get sideStrokeStyle() {
		return this.isPointerOver ? "white" : "#efefef";
	}
	constructor(subgraph) {
		this.subgraph = subgraph;
	}
	move(deltaX, deltaY) {
		this.pos[0] += deltaX;
		this.pos[1] += deltaY;
	}
	/** @inheritdoc */
	snapToGrid(snapTo) {
		return this.pinned ? false : snapPoint(this.pos, snapTo);
	}
	containsPoint(point) {
		return this.boundingRect.containsPoint(point);
	}
	onPointerMove(e) {
		const containsPoint = this.boundingRect.containsXy(e.canvasX, e.canvasY);
		let underPointer = containsPoint ? CanvasItem.SubgraphIoNode : CanvasItem.Nothing;
		if (containsPoint) {
			if (!this.isPointerOver) this.onPointerEnter();
			for (const slot of this.allSlots) {
				slot.onPointerMove(e);
				if (slot.isPointerOver) underPointer |= CanvasItem.SubgraphIoSlot;
			}
		} else if (this.isPointerOver) this.onPointerLeave();
		return underPointer;
	}
	onPointerEnter() {
		this.isPointerOver = true;
	}
	onPointerLeave() {
		this.isPointerOver = false;
		for (const slot of this.slots) slot.isPointerOver = false;
	}
	/**
	* Gets the slot at a given position in canvas space.
	* @param x The x coordinate of the position.
	* @param y The y coordinate of the position.
	* @returns The slot at the given position, otherwise `undefined`.
	*/
	getSlotInPosition(x, y) {
		for (const slot of this.allSlots) if (slot.boundingRect.containsXy(x, y)) return slot;
	}
	/**
	* Handles double-click on an IO slot to rename it.
	* @param slot The slot that was double-clicked.
	* @param event The event that triggered the double-click.
	*/
	handleSlotDoubleClick(slot, event) {
		if (slot !== this.emptySlot) this._promptForSlotRename(slot, event);
	}
	/**
	* Shows the context menu for an IO slot.
	* @param slot The slot to show the context menu for.
	* @param event The event that triggered the context menu.
	*/
	showSlotContextMenu(slot, event) {
		const options = this._getSlotMenuOptions(slot);
		if (!(options.length > 0)) return;
		new LiteGraph.ContextMenu(options, {
			event,
			title: slot.name || "Subgraph Output",
			callback: (item) => {
				this._onSlotMenuAction(item, slot, event);
			}
		});
	}
	/**
	* Gets the context menu options for an IO slot.
	* @param slot The slot to get the context menu options for.
	* @returns The context menu options.
	*/
	_getSlotMenuOptions(slot) {
		const options = [];
		if (slot !== this.emptySlot && slot.linkIds.length > 0) options.push({
			content: "Disconnect Links",
			value: "disconnect"
		});
		if (slot !== this.emptySlot) options.push({
			content: "Rename Slot",
			value: "rename"
		});
		if (slot !== this.emptySlot) {
			options.push(null);
			options.push({
				content: "Remove Slot",
				value: "remove",
				className: "danger"
			});
		}
		return options;
	}
	/**
	* Handles the action for an IO slot context menu.
	* @param selectedItem The item that was selected from the context menu.
	* @param slot The slot
	* @param event The event that triggered the context menu.
	*/
	_onSlotMenuAction(selectedItem, slot, event) {
		switch (selectedItem.value) {
			case "disconnect":
				slot.disconnect();
				break;
			case "remove":
				if (slot !== this.emptySlot) this.removeSlot(slot);
				break;
			case "rename":
				if (slot !== this.emptySlot) this._promptForSlotRename(slot, event);
				break;
		}
		this.subgraph.setDirtyCanvas(true);
	}
	/**
	* Prompts the user to rename a slot.
	* @param slot The slot to rename.
	* @param event The event that triggered the rename.
	*/
	_promptForSlotRename(slot, event) {
		this.subgraph.canvasAction((c) => c.prompt("Slot name", slot.displayName, (newName) => {
			if (newName) this.renameSlot(slot, newName);
		}, event));
	}
	/** Arrange the slots in this node. */
	arrange() {
		const { minWidth, roundedRadius } = SubgraphIONodeBase;
		const [, y] = this.boundingRect;
		const x = this.slotAnchorX;
		const { size } = this;
		let maxWidth = minWidth;
		let currentY = y + roundedRadius;
		for (const slot of this.allSlots) {
			const [slotWidth, slotHeight] = slot.measure();
			slot.arrange([
				x,
				currentY,
				slotWidth,
				slotHeight
			]);
			currentY += slotHeight;
			if (slotWidth > maxWidth) maxWidth = slotWidth;
		}
		size[0] = maxWidth + 2 * roundedRadius;
		size[1] = currentY - y + roundedRadius;
	}
	draw(ctx, colorContext, fromSlot, editorAlpha) {
		const { lineWidth, strokeStyle, fillStyle, font, textBaseline } = ctx;
		this.drawProtected(ctx, colorContext, fromSlot, editorAlpha);
		Object.assign(ctx, {
			lineWidth,
			strokeStyle,
			fillStyle,
			font,
			textBaseline
		});
	}
	/** @internal Leaves {@link ctx} dirty. */
	drawSlots(ctx, colorContext, fromSlot, editorAlpha) {
		ctx.fillStyle = "#AAA";
		ctx.font = "12px Inter, sans-serif";
		ctx.textBaseline = "middle";
		for (const slot of this.allSlots) slot.draw({
			ctx,
			colorContext,
			fromSlot,
			editorAlpha
		});
	}
	configure(data) {
		this._boundingRect.set(data.bounding);
		this.pinned = data.pinned ?? false;
	}
	asSerialisable() {
		return {
			id: this.id,
			bounding: this.boundingRect.export(),
			pinned: this.pinned ? true : void 0
		};
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphInputNode.ts
var SubgraphInputNode = class extends SubgraphIONodeBase {
	id = -10;
	emptySlot = new EmptySubgraphInput(this);
	get slots() {
		return this.subgraph.inputs;
	}
	get allSlots() {
		return [...this.slots, this.emptySlot];
	}
	get slotAnchorX() {
		const [x, , width] = this.boundingRect;
		return x + width - SubgraphIONodeBase.roundedRadius;
	}
	onPointerDown(e, pointer, linkConnector) {
		if (e.button === 0) {
			for (const slot of this.allSlots) if (slot.boundingRect.containsXy(e.canvasX, e.canvasY)) {
				pointer.onDragStart = () => {
					linkConnector.dragNewFromSubgraphInput(this.subgraph, this, slot);
				};
				pointer.onDragEnd = (eUp) => {
					linkConnector.dropLinks(this.subgraph, eUp);
				};
				pointer.onDoubleClick = () => {
					this.handleSlotDoubleClick(slot, e);
				};
				pointer.finally = () => {
					linkConnector.reset(true);
				};
			}
		} else if (e.button === 2) {
			const slot = this.getSlotInPosition(e.canvasX, e.canvasY);
			if (slot) this.showSlotContextMenu(slot, e);
		}
	}
	/** @inheritdoc */
	renameSlot(slot, name) {
		this.subgraph.renameInput(slot, name);
	}
	/** @inheritdoc */
	removeSlot(slot) {
		this.subgraph.removeInput(slot);
	}
	canConnectTo(inputNode, input, fromSlot) {
		return inputNode.canConnectTo(this, input, fromSlot);
	}
	connectSlots(fromSlot, inputNode, input, afterRerouteId) {
		const { subgraph } = this;
		const outputIndex = this.slots.indexOf(fromSlot);
		const inputIndex = inputNode.inputs.indexOf(input);
		if (outputIndex === -1 || inputIndex === -1) throw new Error("Invalid slot indices.");
		return new LLink(++subgraph.state.lastLinkId, input.type || fromSlot.type, this.id, outputIndex, inputNode.id, inputIndex, afterRerouteId);
	}
	connectByType(slot, target_node, target_slotType, optsIn) {
		const inputSlot = target_node.findInputByType(target_slotType);
		if (!inputSlot) return;
		if (slot === -1) {
			const existingNames = this.subgraph.inputs.map((input) => input.name);
			const uniqueName = nextUniqueName(inputSlot.slot.name, existingNames);
			const newSubgraphInput = this.subgraph.addInput(uniqueName, String(inputSlot.slot.type ?? ""));
			const newSlotIndex = this.slots.indexOf(newSubgraphInput);
			if (newSlotIndex === -1) {
				console.error("Could not find newly created subgraph input slot.");
				return;
			}
			slot = newSlotIndex;
		}
		return this.slots[slot].connect(inputSlot.slot, target_node, optsIn?.afterRerouteId);
	}
	findOutputSlot(name) {
		return this.slots.find((output) => output.name === name);
	}
	findOutputByType(type) {
		return findFreeSlotOfType(this.slots, type, (slot) => slot.linkIds.length > 0)?.slot;
	}
	_disconnectNodeInput(node, input, link) {
		const { subgraph } = this;
		if (input._floatingLinks?.size) for (const link of input._floatingLinks) subgraph.removeFloatingLink(link);
		input.link = null;
		subgraph.setDirtyCanvas(false, true);
		if (!link) return;
		const subgraphInputIndex = link.origin_slot;
		link.disconnect(subgraph, "output");
		subgraph._version++;
		const subgraphInput = this.slots.at(subgraphInputIndex);
		if (!subgraphInput) {
			console.warn("disconnectNodeInput: subgraphInput not found", this, subgraphInputIndex);
			return;
		}
		const index = subgraphInput.linkIds.indexOf(link.id);
		if (index !== -1) subgraphInput.linkIds.splice(index, 1);
		else console.warn("disconnectNodeInput: link ID not found in subgraphInput linkIds", link.id);
		if (subgraphInput.linkIds.length === 0) subgraphInput._widget = void 0;
		subgraphInput.events.dispatch("input-disconnected", { input: subgraphInput });
		const slotIndex = node.inputs.findIndex((inp) => inp === input);
		if (slotIndex !== -1) node.onConnectionsChange?.(NodeSlotType.INPUT, slotIndex, false, link, subgraphInput);
	}
	drawProtected(ctx, colorContext, fromSlot, editorAlpha) {
		const { roundedRadius } = SubgraphIONodeBase;
		const transform = ctx.getTransform();
		const [x, y, width, height] = this.boundingRect;
		ctx.translate(x, y);
		ctx.strokeStyle = this.sideStrokeStyle;
		ctx.lineWidth = this.sideLineWidth;
		ctx.beginPath();
		ctx.arc(width - roundedRadius, roundedRadius, roundedRadius, Math.PI * 1.5, 0);
		ctx.moveTo(width, roundedRadius);
		ctx.lineTo(width, height - roundedRadius);
		ctx.arc(width - roundedRadius, height - roundedRadius, roundedRadius, 0, Math.PI * .5);
		ctx.stroke();
		ctx.setTransform(transform);
		this.drawSlots(ctx, colorContext, fromSlot, editorAlpha);
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphOutput.ts
/**
* An output "slot" from a subgraph to a parent graph.
*
* IMPORTANT: A subgraph "output" is both an output AND an input.  It creates an extra link connection point between
* a parent graph and a subgraph, so is conceptually similar to a reroute.
*
* This can be a little confusing, but is easier to visualise when imagining editing a subgraph.
* You have "Subgraph Outputs", because they go from inside the subgraph and out, but links to them come from "node outputs".
*
* Functionally, however, when editing a subgraph, that "subgraph output" is the "target" or "input side" of a link.
*/
var SubgraphOutput = class extends SubgraphSlot {
	connect(slot, node, afterRerouteId) {
		const { subgraph } = this.parent;
		if (!LiteGraph.isValidConnection(slot.type, this.type)) return;
		const outputIndex = node.outputs.indexOf(slot);
		if (outputIndex === -1) throw new Error("Slot is not an output of the given node");
		if (node.onConnectOutput?.(outputIndex, this.type, this, this.parent, -1) === false) return;
		const existingLink = this.getLinks().at(0);
		if (existingLink != null) {
			subgraph.beforeChange();
			existingLink.disconnect(subgraph, "input");
			const links = existingLink.resolve(subgraph).output?.links;
			if (links) pull(links, existingLink.id);
		}
		const link = new LLink(++subgraph.state.lastLinkId, slot.type, node.id, outputIndex, this.parent.id, this.parent.slots.indexOf(this), afterRerouteId);
		subgraph._links.set(link.id, link);
		this.linkIds[0] = link.id;
		slot.links ??= [];
		slot.links.push(link.id);
		const reroutes = LLink.getReroutes(subgraph, link);
		for (const reroute of reroutes) {
			reroute.linkIds.add(link.id);
			if (reroute.floating) delete reroute.floating;
			reroute._dragging = void 0;
		}
		const lastReroute = reroutes.at(-1);
		if (lastReroute) for (const linkId of lastReroute.floatingLinkIds) {
			const link = subgraph.floatingLinks.get(linkId);
			if (link?.parentId === lastReroute.id) subgraph.removeFloatingLink(link);
		}
		subgraph._version++;
		node.onConnectionsChange?.(NodeSlotType.OUTPUT, outputIndex, true, link, slot);
		subgraph.afterChange();
		return link;
	}
	get labelPos() {
		const [x, y, , height] = this.boundingRect;
		return [x + height, y + height * .5];
	}
	arrange(rect) {
		const [left, top, width, height] = rect;
		const { boundingRect: b, pos } = this;
		b[0] = left;
		b[1] = top;
		b[2] = width;
		b[3] = height;
		pos[0] = left + height * .5;
		pos[1] = top + height * .5;
	}
	/**
	* Checks if this slot is a valid target for a connection from the given slot.
	* For SubgraphOutput (which acts as an input inside the subgraph),
	* the fromSlot should be an output slot.
	*/
	isValidTarget(fromSlot) {
		if (isNodeSlot(fromSlot)) return "links" in fromSlot && LiteGraph.isValidConnection(fromSlot.type, this.type);
		if (isSubgraphInput(fromSlot)) return LiteGraph.isValidConnection(fromSlot.type, this.type);
		return false;
	}
	disconnect() {
		const { subgraph } = this.parent;
		for (const linkId of this.linkIds) {
			const link = subgraph.links[linkId];
			if (!link) continue;
			subgraph.removeLink(linkId);
			const { output, outputNode } = link.resolve(subgraph);
			if (output) output.links = output.links?.filter((id) => id !== linkId) ?? null;
			outputNode?.onConnectionsChange?.(NodeSlotType.OUTPUT, link.origin_slot, false, link, this);
		}
		this.linkIds.length = 0;
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/EmptySubgraphOutput.ts
/**
* A virtual slot that simply creates a new output slot when connected to.
*/
var EmptySubgraphOutput = class extends SubgraphOutput {
	constructor(parent) {
		super({
			id: zeroUuid,
			name: "",
			type: ""
		}, parent);
	}
	connect(slot, node, afterRerouteId) {
		const { subgraph } = this.parent;
		const existingNames = subgraph.outputs.map((x) => x.name);
		const name = nextUniqueName(slot.name, existingNames);
		return subgraph.addOutput(name, String(slot.type)).connect(slot, node, afterRerouteId);
	}
	get labelPos() {
		const [x, y, , height] = this.boundingRect;
		return [x, y + height * .5];
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphOutputNode.ts
var SubgraphOutputNode = class extends SubgraphIONodeBase {
	id = -20;
	emptySlot = new EmptySubgraphOutput(this);
	get slots() {
		return this.subgraph.outputs;
	}
	get allSlots() {
		return [...this.slots, this.emptySlot];
	}
	get slotAnchorX() {
		const [x] = this.boundingRect;
		return x + SubgraphIONodeBase.roundedRadius;
	}
	onPointerDown(e, pointer, linkConnector) {
		if (e.button === 0) {
			for (const slot of this.allSlots) if (slot.boundingRect.containsXy(e.canvasX, e.canvasY)) {
				pointer.onDragStart = () => {
					linkConnector.dragNewFromSubgraphOutput(this.subgraph, this, slot);
				};
				pointer.onDragEnd = (eUp) => {
					linkConnector.dropLinks(this.subgraph, eUp);
				};
				pointer.onDoubleClick = () => {
					this.handleSlotDoubleClick(slot, e);
				};
				pointer.finally = () => {
					linkConnector.reset(true);
				};
			}
		} else if (e.button === 2) {
			const slot = this.getSlotInPosition(e.canvasX, e.canvasY);
			if (slot) this.showSlotContextMenu(slot, e);
		}
	}
	/** @inheritdoc */
	renameSlot(slot, name) {
		this.subgraph.renameOutput(slot, name);
	}
	/** @inheritdoc */
	removeSlot(slot) {
		this.subgraph.removeOutput(slot);
	}
	canConnectTo(outputNode, fromSlot, output) {
		return outputNode.canConnectTo(this, fromSlot, output);
	}
	connectByTypeOutput(slot, target_node, target_slotType, optsIn) {
		const outputSlot = target_node.findOutputByType(target_slotType);
		if (!outputSlot) return;
		return this.slots[slot].connect(outputSlot.slot, target_node, optsIn?.afterRerouteId);
	}
	findInputByType(type) {
		return findFreeSlotOfType(this.slots, type, (slot) => slot.linkIds.length > 0)?.slot;
	}
	drawProtected(ctx, colorContext, fromSlot, editorAlpha) {
		const { roundedRadius } = SubgraphIONodeBase;
		const transform = ctx.getTransform();
		const [x, y, , height] = this.boundingRect;
		ctx.translate(x, y);
		ctx.strokeStyle = this.sideStrokeStyle;
		ctx.lineWidth = this.sideLineWidth;
		ctx.beginPath();
		ctx.arc(roundedRadius, roundedRadius, roundedRadius, Math.PI, Math.PI * 1.5);
		ctx.moveTo(0, roundedRadius);
		ctx.lineTo(0, height - roundedRadius);
		ctx.arc(roundedRadius, height - roundedRadius, roundedRadius, Math.PI, Math.PI * .5, true);
		ctx.stroke();
		ctx.setTransform(transform);
		this.drawSlots(ctx, colorContext, fromSlot, editorAlpha);
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/subgraphUtils.ts
function splitPositionables(items) {
	const nodes = /* @__PURE__ */ new Set();
	const reroutes = /* @__PURE__ */ new Set();
	const groups = /* @__PURE__ */ new Set();
	const subgraphInputNodes = /* @__PURE__ */ new Set();
	const subgraphOutputNodes = /* @__PURE__ */ new Set();
	const unknown = /* @__PURE__ */ new Set();
	for (const item of items) switch (true) {
		case item instanceof LGraphNode:
			nodes.add(item);
			break;
		case item instanceof LGraphGroup:
			groups.add(item);
			break;
		case item instanceof Reroute:
			reroutes.add(item);
			break;
		case item instanceof SubgraphInputNode:
			subgraphInputNodes.add(item);
			break;
		case item instanceof SubgraphOutputNode:
			subgraphOutputNodes.add(item);
			break;
		default:
			unknown.add(item);
			break;
	}
	return {
		nodes,
		reroutes,
		groups,
		subgraphInputNodes,
		subgraphOutputNodes,
		unknown
	};
}
function getBoundaryLinks(graph, items) {
	const internalLinks = [];
	const boundaryLinks = [];
	const boundaryInputLinks = [];
	const boundaryOutputLinks = [];
	const boundaryFloatingLinks = [];
	const visited = /* @__PURE__ */ new WeakSet();
	for (const item of items) {
		if (visited.has(item)) continue;
		visited.add(item);
		if (item instanceof LGraphNode) {
			const node = item;
			if (node.inputs) for (const input of node.inputs) {
				addFloatingLinks(input._floatingLinks);
				if (input.link == null) continue;
				const resolved = LLink.resolve(input.link, graph);
				if (!resolved) {
					console.warn(`Failed to resolve link ID [${input.link}]`);
					continue;
				}
				const { link, outputNode } = resolved;
				if (outputNode) if (!items.has(outputNode)) boundaryInputLinks.push(link);
				else internalLinks.push(link);
				else if (link.origin_id === -10) boundaryInputLinks.push(link);
			}
			if (node.outputs) for (const output of node.outputs) {
				addFloatingLinks(output._floatingLinks);
				if (!output.links) continue;
				const many = LLink.resolveMany(output.links, graph);
				for (const { link, inputNode } of many) if (link.target_id === -20 || inputNode && !items.has(inputNode)) boundaryOutputLinks.push(link);
			}
		} else if (item instanceof Reroute) {
			const reroute = item;
			const results = LLink.resolveMany(reroute.linkIds, graph);
			for (const { link } of results) {
				const reroutesOutside = LLink.getReroutes(graph, link).filter((reroute) => !items.has(reroute));
				const { inputNode, outputNode } = link.resolve(graph);
				if (reroutesOutside.length || inputNode && !items.has(inputNode) || outputNode && !items.has(outputNode)) boundaryLinks.push(link);
			}
		}
	}
	return {
		boundaryLinks,
		boundaryFloatingLinks,
		internalLinks,
		boundaryInputLinks,
		boundaryOutputLinks
	};
	/**
	* Adds any floating links that cross the boundary.
	* @param floatingLinks The floating links to check
	*/
	function addFloatingLinks(floatingLinks) {
		if (!floatingLinks) return;
		for (const link of floatingLinks) if (LLink.getReroutes(graph, link).some((reroute) => !items.has(reroute))) boundaryFloatingLinks.push(link);
	}
}
function multiClone(nodes) {
	const clonedNodes = [];
	for (const node of nodes) {
		const newNode = LiteGraph.createNode(node.type);
		if (!newNode) {
			console.warn("Failed to create node", node.type);
			const serializedData = structuredClone(node.serialize());
			clonedNodes.push(serializedData);
			continue;
		}
		const data = structuredClone(node.serialize());
		newNode.configure(data);
		clonedNodes.push(newNode.serialize());
	}
	return clonedNodes;
}
/**
* Groups resolved connections by output object. If the output is nullish, the connection will be in its own group.
* @param resolvedConnections The resolved connections to group
* @returns A map of grouped connections.
*/
function groupResolvedByOutput(resolvedConnections) {
	const groupedByOutput = /* @__PURE__ */ new Map();
	for (const resolved of resolvedConnections) {
		const groupBy = resolved.subgraphInput ?? resolved.output ?? {};
		const group = groupedByOutput.get(groupBy);
		if (group) group.push(resolved);
		else groupedByOutput.set(groupBy, [resolved]);
	}
	return groupedByOutput;
}
function mapReroutes(link, reroutes) {
	let child = link;
	let nextReroute = child.parentId === void 0 ? void 0 : reroutes.get(child.parentId);
	while (child.parentId !== void 0 && nextReroute) {
		child = nextReroute;
		nextReroute = child.parentId === void 0 ? void 0 : reroutes.get(child.parentId);
	}
	const lastId = child.parentId;
	child.parentId = void 0;
	return lastId;
}
function mapSubgraphInputsAndLinks(resolvedInputLinks, links, reroutes) {
	const groupedByOutput = groupResolvedByOutput(resolvedInputLinks);
	const inputs = [];
	for (const [, connections] of groupedByOutput) {
		const inputLinks = [];
		for (const resolved of connections) {
			const { link, input } = resolved;
			if (!input) continue;
			const linkData = link.asSerialisable();
			link.parentId = mapReroutes(link, reroutes);
			linkData.origin_id = -10;
			linkData.origin_slot = inputs.length;
			links.push(linkData);
			inputLinks.push(linkData);
		}
		const { input } = connections[0];
		if (!input) continue;
		const { color_off, color_on, dir, hasErrors, label, localized_name, name, shape, type } = input;
		const uniqueName = nextUniqueName(name, inputs.map((input) => input.name));
		const uniqueLocalizedName = localized_name ? nextUniqueName(localized_name, inputs.map((input) => input.localized_name ?? "")) : void 0;
		const inputData = {
			id: createUuidv4(),
			type: String(type),
			linkIds: inputLinks.map((link) => link.id),
			name: uniqueName,
			color_off,
			color_on,
			dir,
			label,
			localized_name: uniqueLocalizedName,
			hasErrors,
			shape
		};
		inputs.push(inputData);
	}
	return inputs;
}
/**
* Clones the output slots, and updates existing links, when converting items to a subgraph.
* @param resolvedOutputLinks The resolved output links.
* @param links The links to add to the subgraph.
* @returns The subgraph output slots.
*/
function mapSubgraphOutputsAndLinks(resolvedOutputLinks, links, reroutes) {
	const groupedByOutput = groupResolvedByOutput(resolvedOutputLinks);
	const outputs = [];
	for (const [, connections] of groupedByOutput) {
		const outputLinks = [];
		for (const resolved of connections) {
			const { link, output } = resolved;
			if (!output) continue;
			const linkData = link.asSerialisable();
			linkData.parentId = mapReroutes(link, reroutes);
			linkData.target_id = -20;
			linkData.target_slot = outputs.length;
			links.push(linkData);
			outputLinks.push(linkData);
		}
		const { output } = connections[0];
		if (!output) continue;
		const { color_off, color_on, dir, hasErrors, label, localized_name, name, shape, type } = output;
		const uniqueName = nextUniqueName(name, outputs.map((output) => output.name));
		const uniqueLocalizedName = localized_name ? nextUniqueName(localized_name, outputs.map((output) => output.localized_name ?? "")) : void 0;
		const outputData = {
			id: createUuidv4(),
			type: String(type),
			linkIds: outputLinks.map((link) => link.id),
			name: uniqueName,
			color_off,
			color_on,
			dir,
			label,
			localized_name: uniqueLocalizedName,
			hasErrors,
			shape
		};
		outputs.push(structuredClone(outputData));
	}
	return outputs;
}
/**
* Collects all subgraph IDs used directly in a single graph (non-recursive).
* @param graph The graph to check for subgraph nodes
* @returns Set of subgraph IDs used in this graph
*/
function getDirectSubgraphIds(graph) {
	const subgraphIds = /* @__PURE__ */ new Set();
	for (const node of graph._nodes) if (node.isSubgraphNode()) subgraphIds.add(node.type);
	return subgraphIds;
}
/**
* Collects all subgraph IDs referenced in a graph hierarchy using BFS.
* @param rootGraph The graph to start from
* @param subgraphRegistry Map of all available subgraphs
* @returns Set of all subgraph IDs found
*/
function findUsedSubgraphIds(rootGraph, subgraphRegistry) {
	const usedSubgraphIds = /* @__PURE__ */ new Set();
	const toVisit = [rootGraph];
	while (toVisit.length > 0) {
		const directIds = getDirectSubgraphIds(toVisit.shift());
		for (const id of directIds) if (!usedSubgraphIds.has(id)) {
			usedSubgraphIds.add(id);
			const subgraph = subgraphRegistry.get(id);
			if (subgraph) toVisit.push(subgraph);
		}
	}
	return usedSubgraphIds;
}
/**
* Type guard to check if a slot is a SubgraphInput.
* @param slot The slot to check
* @returns true if the slot is a SubgraphInput
*/
function isSubgraphInput(slot) {
	return slot != null && typeof slot === "object" && "parent" in slot && slot.parent instanceof SubgraphInputNode;
}
/**
* Type guard to check if a slot is a SubgraphOutput.
* @param slot The slot to check
* @returns true if the slot is a SubgraphOutput
*/
function isSubgraphOutput(slot) {
	return slot != null && typeof slot === "object" && "parent" in slot && slot.parent instanceof SubgraphOutputNode;
}
/**
* Type guard to check if a slot is a regular node slot (INodeInputSlot or INodeOutputSlot).
* @param slot The slot to check
* @returns true if the slot is a regular node slot
*/
function isNodeSlot(slot) {
	return slot != null && typeof slot === "object" && ("link" in slot || "links" in slot);
}
//#endregion
//#region src/lib/litegraph/src/node/NodeInputSlot.ts
var NodeInputSlot = class extends NodeSlot {
	link;
	alwaysVisible;
	get isWidgetInputSlot() {
		return !!this.widget;
	}
	_widgetRef;
	/** Internal use only; API is not finalised and may change at any time. */
	get _widget() {
		return this._widgetRef?.deref();
	}
	set _widget(widget) {
		this._widgetRef = widget ? new WeakRef(widget) : void 0;
	}
	get collapsedPos() {
		return [0, LiteGraph.NODE_TITLE_HEIGHT * -.5];
	}
	constructor(slot, node) {
		super(slot, node);
		this.link = slot.link;
	}
	get isConnected() {
		return this.link != null;
	}
	isValidTarget(fromSlot) {
		if ("links" in fromSlot) return LiteGraph.isValidConnection(fromSlot.type, this.type);
		if (isSubgraphInput(fromSlot)) return LiteGraph.isValidConnection(fromSlot.type, this.type);
		return false;
	}
	draw(ctx, options) {
		const { textAlign } = ctx;
		ctx.textAlign = "left";
		super.draw(ctx, {
			...options,
			labelPosition: LabelPosition.Right,
			doStroke: false
		});
		ctx.textAlign = textAlign;
	}
	toJSON() {
		return {
			...super.toJSON(),
			link: this.link,
			widget: this.widget
		};
	}
};
//#endregion
//#region src/lib/litegraph/src/node/NodeOutputSlot.ts
var NodeOutputSlot = class extends NodeSlot {
	links;
	_data;
	slot_index;
	get isWidgetInputSlot() {
		return false;
	}
	get collapsedPos() {
		return [this._node._collapsed_width ?? LiteGraph.NODE_COLLAPSED_WIDTH, LiteGraph.NODE_TITLE_HEIGHT * -.5];
	}
	constructor(slot, node) {
		super(slot, node);
		this.links = slot.links;
		this._data = slot._data;
		this.slot_index = slot.slot_index;
	}
	isValidTarget(fromSlot) {
		if ("link" in fromSlot) return LiteGraph.isValidConnection(this.type, fromSlot.type);
		if (isSubgraphOutput(fromSlot)) return LiteGraph.isValidConnection(this.type, fromSlot.type);
		return false;
	}
	get isConnected() {
		return this.links != null && this.links.length > 0;
	}
	draw(ctx, options) {
		const { textAlign, strokeStyle } = ctx;
		ctx.textAlign = "right";
		ctx.strokeStyle = "black";
		super.draw(ctx, {
			...options,
			labelPosition: LabelPosition.Left,
			doStroke: true
		});
		ctx.textAlign = textAlign;
		ctx.strokeStyle = strokeStyle;
	}
	toJSON() {
		return {
			...super.toJSON(),
			links: this.links,
			slot_index: this.slot_index
		};
	}
};
//#endregion
//#region src/lib/litegraph/src/utils/feedback.ts
/** Guard against unbound allocation. */
var UNIQUE_MESSAGE_LIMIT = 1e4;
var sentWarnings = /* @__PURE__ */ new Set();
/**
* Warns that a deprecated function has been used via the public
* {@link onDeprecationWarning} / {@link onEveryDeprecationWarning} callback arrays.
* @param message Plain-language detail about what has been deprecated. This **should not** include unique data; use {@link source}.
* @param source A reference object to include alongside the message, e.g. `this`.
*/
function warnDeprecated(message, source) {
	if (!LiteGraph.alwaysRepeatWarnings) {
		if (sentWarnings.has(message)) return;
		if (sentWarnings.size > UNIQUE_MESSAGE_LIMIT) return;
		sentWarnings.add(message);
	}
	for (const callback of LiteGraph.onDeprecationWarning) callback(message, source);
}
/**
* Defines a deprecated property alias that proxies to a current property,
* logging a deprecation warning on first access.
*
* Warning is deduplicated by {@link warnDeprecated} (once per unique message per session).
*
* @param target The object to define the deprecated property on.
* @param deprecatedKey The old property name to deprecate.
* @param currentKey The new property name to proxy to.
* @param message The deprecation warning message.
*/
function defineDeprecatedProperty(target, deprecatedKey, currentKey, message) {
	Object.defineProperty(target, deprecatedKey, {
		get() {
			warnDeprecated(message);
			return this[currentKey];
		},
		set(value) {
			warnDeprecated(message);
			this[currentKey] = value;
		},
		configurable: true,
		enumerable: false
	});
}
//#endregion
//#region src/lib/litegraph/src/utils/spaceDistribution.ts
/**
* Distributes available space among items with min/max size constraints
* @param totalSpace Total space available to distribute
* @param requests Array of space requests with size constraints
* @returns Array of space allocations
*/
function distributeSpace(totalSpace, requests) {
	if (requests.length === 0) return [];
	const totalMinSize = requests.reduce((sum, req) => sum + req.minSize, 0);
	if (totalSpace < totalMinSize) return requests.map((req) => req.minSize);
	let allocations = requests.map((req) => ({
		computedSize: req.minSize,
		maxSize: req.maxSize ?? Infinity,
		remaining: (req.maxSize ?? Infinity) - req.minSize
	}));
	let remainingSpace = totalSpace - totalMinSize;
	while (remainingSpace > 0 && allocations.some((alloc) => alloc.remaining > 0)) {
		const growableItems = allocations.filter((alloc) => alloc.remaining > 0).length;
		if (growableItems === 0) break;
		const sharePerItem = remainingSpace / growableItems;
		let spaceUsedThisRound = 0;
		allocations = allocations.map((alloc) => {
			if (alloc.remaining <= 0) return alloc;
			const growth = Math.min(sharePerItem, alloc.remaining);
			spaceUsedThisRound += growth;
			return {
				...alloc,
				computedSize: alloc.computedSize + growth,
				remaining: alloc.remaining - growth
			};
		});
		remainingSpace -= spaceUsedThisRound;
		if (spaceUsedThisRound === 0) break;
	}
	return allocations.map(({ computedSize }) => computedSize);
}
//#endregion
//#region src/lib/litegraph/src/utils/textUtils.ts
/**
* Truncates text to fit within a given width using binary search for optimal performance.
* @param ctx The canvas rendering context used for text measurement
* @param text The text to truncate
* @param maxWidth The maximum width the text should occupy
* @param ellipsis The ellipsis string to append (default: "...")
* @returns The truncated text with ellipsis if needed
*/
function truncateText(ctx, text, maxWidth, ellipsis = "...") {
	if (cachedMeasureText(ctx, text) <= maxWidth || maxWidth <= 0) return text;
	const availableWidth = maxWidth - cachedMeasureText(ctx, ellipsis);
	if (availableWidth <= 0) return ellipsis;
	let low = 0;
	let high = text.length;
	let bestFit = 0;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (cachedMeasureText(ctx, text.substring(0, mid)) <= availableWidth) {
			bestFit = mid;
			low = mid + 1;
		} else high = mid - 1;
	}
	return text.substring(0, bestFit) + ellipsis;
}
//#endregion
//#region src/lib/litegraph/src/widgets/BaseWidget.ts
var BaseWidget = class BaseWidget {
	/** From node edge to widget edge */
	static margin = 15;
	/** From widget edge to tip of arrow button */
	static arrowMargin = 6;
	/** Arrow button width */
	static arrowWidth = 10;
	/** Absolute minimum display width of widget values */
	static minValueWidth = 42;
	/** Minimum gap between label and value */
	static labelValueGap = 5;
	_node;
	/** The node that this widget belongs to. */
	get node() {
		return this._node;
	}
	linkedWidgets;
	name;
	options;
	type;
	y = 0;
	last_y;
	width;
	computedDisabled;
	tooltip;
	_state;
	get label() {
		return this._state.label;
	}
	set label(value) {
		this._state.label = value;
	}
	hidden;
	advanced;
	get disabled() {
		return this._state.disabled;
	}
	set disabled(value) {
		this._state.disabled = value ?? false;
	}
	element;
	get value() {
		return this._state.value;
	}
	set value(value) {
		this._state.value = value;
	}
	/**
	* Associates this widget with a node ID and registers it in the WidgetValueStore.
	* Once set, value reads/writes will be delegated to the store.
	*/
	setNodeId(nodeId) {
		const graphId = this.node.graph?.rootGraph.id;
		if (!graphId) return;
		this._state = useWidgetValueStore().registerWidget(graphId, {
			...this._state,
			value: this.value,
			nodeId
		});
	}
	constructor(widget, node) {
		this._node = node ?? widget.node;
		this.name = widget.name;
		this.options = widget.options;
		this.type = widget.type;
		const { node: _, outline_color, background_color, height, text_color, secondary_text_color, disabledTextColor, displayName, displayValue, labelBaseline, label, disabled, value, linkedWidgets, ...safeValues } = widget;
		Object.assign(this, safeValues);
		this._state = {
			name: this.name,
			type: this.type,
			value,
			label,
			disabled: disabled ?? false,
			serialize: this.serialize,
			options: this.options
		};
	}
	getOutlineColor(suppressPromotedOutline = false) {
		const graphId = this.node.graph?.rootGraph.id;
		if (graphId && !suppressPromotedOutline && usePromotionStore().isPromotedByAny(graphId, {
			sourceNodeId: String(this.node.id),
			sourceWidgetName: this.name
		})) return LiteGraph.WIDGET_PROMOTED_OUTLINE_COLOR;
		return this.advanced ? LiteGraph.WIDGET_ADVANCED_OUTLINE_COLOR : LiteGraph.WIDGET_OUTLINE_COLOR;
	}
	get outline_color() {
		return this.getOutlineColor();
	}
	get background_color() {
		return LiteGraph.WIDGET_BGCOLOR;
	}
	get height() {
		return LiteGraph.NODE_WIDGET_HEIGHT;
	}
	get text_color() {
		return LiteGraph.WIDGET_TEXT_COLOR;
	}
	get secondary_text_color() {
		return LiteGraph.WIDGET_SECONDARY_TEXT_COLOR;
	}
	get disabledTextColor() {
		return LiteGraph.WIDGET_DISABLED_TEXT_COLOR;
	}
	get displayName() {
		return this.label || this.name;
	}
	get _displayValue() {
		return this.computedDisabled ? "" : String(this.value);
	}
	get labelBaseline() {
		return this.y + this.height * .7;
	}
	/**
	* Draws the standard widget shape - elongated capsule. The path of the widget shape is not
	* cleared, and may be used for further drawing.
	* @param ctx The canvas context
	* @param options The options for drawing the widget
	* @remarks Leaves {@link ctx} dirty.
	*/
	drawWidgetShape(ctx, { width, showText, suppressPromotedOutline }) {
		const { height, y } = this;
		const { margin } = BaseWidget;
		ctx.textAlign = "left";
		ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
		ctx.fillStyle = this.background_color;
		ctx.beginPath();
		if (showText) ctx.roundRect(margin, y, width - margin * 2, height, [height * .5]);
		else ctx.rect(margin, y, width - margin * 2, height);
		ctx.fill();
		if (showText && !this.computedDisabled) ctx.stroke();
	}
	/**
	* Draws a placeholder for widgets that only have a Vue implementation.
	* @param ctx The canvas context
	* @param options The options for drawing the widget
	* @param label The label to display (e.g., "ImageCrop", "BoundingBox")
	*/
	drawVueOnlyWarning(ctx, { width, suppressPromotedOutline }, label) {
		const { y, height } = this;
		ctx.save();
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(`${label}: ${t("widgets.node2only")}`, width / 2, y + height / 2);
		ctx.restore();
	}
	/**
	* A shared routine for drawing a label and value as text, truncated
	* if they exceed the available width.
	*/
	drawTruncatingText({ ctx, width, leftPadding = 5, rightPadding = 20 }) {
		const { height, y } = this;
		const { margin } = BaseWidget;
		const { displayName, _displayValue } = this;
		const labelWidth = cachedMeasureText(ctx, displayName);
		const valueWidth = cachedMeasureText(ctx, _displayValue);
		const gap = BaseWidget.labelValueGap;
		const x = margin * 2 + leftPadding;
		const totalWidth = width - x - 2 * margin - rightPadding;
		const requiredWidth = labelWidth + gap + valueWidth;
		const area = new Rectangle(x, y, totalWidth, height * .7);
		ctx.fillStyle = this.secondary_text_color;
		if (requiredWidth <= totalWidth) drawTextInArea({
			ctx,
			text: displayName,
			area,
			align: "left"
		});
		else if (LiteGraph.truncateWidgetTextEvenly) {
			const scale = (totalWidth - gap) / (requiredWidth - gap);
			area.width = labelWidth * scale;
			drawTextInArea({
				ctx,
				text: displayName,
				area,
				align: "left"
			});
			area.right = x + totalWidth;
			area.setWidthRightAnchored(valueWidth * scale);
		} else if (LiteGraph.truncateWidgetValuesFirst) {
			const cappedLabelWidth = Math.min(labelWidth, totalWidth);
			area.width = cappedLabelWidth;
			drawTextInArea({
				ctx,
				text: displayName,
				area,
				align: "left"
			});
			area.right = x + totalWidth;
			area.setWidthRightAnchored(Math.max(totalWidth - gap - cappedLabelWidth, 0));
		} else {
			const cappedValueWidth = Math.min(valueWidth, totalWidth);
			area.width = Math.max(totalWidth - gap - cappedValueWidth, 0);
			drawTextInArea({
				ctx,
				text: displayName,
				area,
				align: "left"
			});
			area.right = x + totalWidth;
			area.setWidthRightAnchored(cappedValueWidth);
		}
		ctx.fillStyle = this.text_color;
		drawTextInArea({
			ctx,
			text: _displayValue,
			area,
			align: "right"
		});
	}
	/**
	* Sets the value of the widget
	* @param value The value to set
	* @param options The options for setting the value
	*/
	setValue(value, { e, node, canvas }) {
		const oldValue = this.value;
		if (value === this.value) return;
		const v = this.type === "number" ? Number(value) : value;
		this.value = v;
		if (this.options?.property && node.properties[this.options.property] !== void 0) node.setProperty(this.options.property, v);
		const pos = canvas.graph_mouse;
		this.callback?.(this.value, canvas, node, pos, e);
		node.onWidgetChanged?.(this.name ?? "", v, oldValue, this);
		if (node.graph) node.graph._version++;
	}
	/**
	* Clones the widget.
	* @param node The node that will own the cloned widget.
	* @returns A new widget with the same properties as the original
	* @remarks Subclasses with custom constructors must override this method.
	*
	* Correctly and safely typing this is currently not possible (practical?) in TypeScript 5.8.
	*/
	createCopyForNode(node) {
		const cloned = new this.constructor(this, node);
		cloned.value = this.value;
		return cloned;
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/AssetWidget.ts
var AssetWidget = class extends BaseWidget {
	constructor(widget, node) {
		super(widget, node);
		this.type ??= "asset";
		this.value = widget.value?.toString() ?? "";
	}
	set value(value) {
		const oldValue = this.value;
		super.value = value;
		if (oldValue !== value && this.node.graph?.list_of_graphcanvas) for (const canvas of this.node.graph.list_of_graphcanvas) canvas.setDirty(true);
	}
	get value() {
		return super.value;
	}
	get _displayValue() {
		return String(this.value);
	}
	drawWidget(ctx, options) {
		const { width, showText = true } = options;
		const { fillStyle, strokeStyle, textAlign } = ctx;
		this.drawWidgetShape(ctx, options);
		if (showText) this.drawTruncatingText({
			ctx,
			width,
			leftPadding: 0,
			rightPadding: 0
		});
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	onClick() {
		this.options.openModal(this);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/BooleanWidget.ts
var BooleanWidget = class extends BaseWidget {
	type = "toggle";
	drawWidget(ctx, options) {
		const { width, showText = true } = options;
		const { height, y } = this;
		const { margin } = BaseWidget;
		this.drawWidgetShape(ctx, options);
		ctx.fillStyle = this.value ? "#89A" : "#333";
		ctx.beginPath();
		ctx.arc(width - margin * 2, y + height * .5, height * .36, 0, Math.PI * 2);
		ctx.fill();
		if (showText) {
			this.drawLabel(ctx, margin * 2);
			this.drawValue(ctx, width - 40);
		}
	}
	drawLabel(ctx, x) {
		ctx.fillStyle = this.secondary_text_color;
		const { displayName } = this;
		if (displayName) ctx.fillText(displayName, x, this.labelBaseline);
	}
	drawValue(ctx, x) {
		ctx.fillStyle = this.value ? this.text_color : this.secondary_text_color;
		ctx.textAlign = "right";
		const value = this.value ? this.options.on || "true" : this.options.off || "false";
		ctx.fillText(value, x, this.labelBaseline);
	}
	onClick(options) {
		this.setValue(!this.value, options);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/BoundingBoxWidget.ts
/**
* Widget for defining bounding box regions.
* This widget only has a Vue implementation.
*/
var BoundingBoxWidget = class extends BaseWidget {
	type = "boundingbox";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "BoundingBox");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ButtonWidget.ts
var ButtonWidget = class extends BaseWidget {
	type = "button";
	clicked;
	constructor(widget, node) {
		super(widget, node);
		this.clicked ??= false;
	}
	/**
	* Draws the widget
	* @param ctx The canvas context
	* @param options The options for drawing the widget
	*/
	drawWidget(ctx, { width, showText = true, suppressPromotedOutline }) {
		const { fillStyle, strokeStyle, textAlign } = ctx;
		const { height, y } = this;
		const { margin } = BaseWidget;
		ctx.fillStyle = this.background_color;
		if (this.clicked) {
			ctx.fillStyle = "#AAA";
			this.clicked = false;
		}
		ctx.fillRect(margin, y, width - margin * 2, height);
		if (showText && !this.computedDisabled) {
			ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
			ctx.strokeRect(margin, y, width - margin * 2, height);
		}
		if (showText) this.drawLabel(ctx, width * .5);
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	drawLabel(ctx, x) {
		ctx.textAlign = "center";
		ctx.fillStyle = this.text_color;
		ctx.fillText(this.displayName, x, this.y + this.height * .7);
	}
	onClick({ e, node, canvas }) {
		const pos = canvas.graph_mouse;
		this.clicked = true;
		canvas.setDirty(true);
		this.callback?.(this.value, canvas, node, pos, e);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ChartWidget.ts
/**
* Widget for displaying charts and data visualizations
* This is a widget that only has a Vue widgets implementation
*/
var ChartWidget = class extends BaseWidget {
	type = "chart";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `Chart: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ColorWidget.ts
var colorInput = null;
function getColorInput() {
	if (!colorInput) {
		colorInput = document.createElement("input");
		colorInput.type = "color";
		colorInput.style.position = "absolute";
		colorInput.style.opacity = "0";
		colorInput.style.pointerEvents = "none";
		colorInput.style.zIndex = "-999";
		document.body.appendChild(colorInput);
	}
	return colorInput;
}
/**
* Widget for displaying a color picker using native HTML color input
*/
var ColorWidget = class extends BaseWidget {
	type = "color";
	drawWidget(ctx, options) {
		const { fillStyle, strokeStyle, textAlign } = ctx;
		this.drawWidgetShape(ctx, options);
		const { width } = options;
		const { height, y } = this;
		const { margin } = BaseWidget;
		const swatchWidth = 40;
		const swatchHeight = height - 6;
		const swatchRadius = swatchHeight / 2;
		const swatchX = width - margin - 10 - swatchWidth;
		const swatchY = y + 3;
		ctx.beginPath();
		ctx.roundRect(swatchX, swatchY, swatchWidth, swatchHeight, swatchRadius);
		ctx.fillStyle = this.value || "#000000";
		ctx.fill();
		ctx.fillStyle = this.secondary_text_color;
		ctx.textAlign = "left";
		ctx.fillText(this.displayName, margin * 2 + 5, y + height * .7);
		ctx.fillStyle = this.text_color;
		ctx.textAlign = "right";
		ctx.fillText(this.value || "#000000", swatchX - 8, y + height * .7);
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	onClick({ e, node, canvas }) {
		const input = getColorInput();
		input.value = this.value || "#000000";
		input.style.left = `${e.clientX}px`;
		input.style.top = `${e.clientY}px`;
		input.addEventListener("change", () => {
			this.setValue(input.value, {
				e,
				node,
				canvas
			});
			canvas.setDirty(true);
		}, { once: true });
		requestAnimationFrame(() => input.click());
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/BaseSteppedWidget.ts
/**
* Base class for widgets that have increment and decrement buttons.
*/
var BaseSteppedWidget = class extends BaseWidget {
	/**
	* Draw the arrow buttons for the widget
	* @param ctx The canvas rendering context
	* @param width The width of the widget
	*/
	drawArrowButtons(ctx, width) {
		const { height, text_color, disabledTextColor, y } = this;
		const { arrowMargin, arrowWidth, margin } = BaseWidget;
		const arrowTipX = margin + arrowMargin;
		const arrowInnerX = arrowTipX + arrowWidth;
		ctx.fillStyle = this.canDecrement() ? text_color : disabledTextColor;
		ctx.beginPath();
		ctx.moveTo(arrowInnerX, y + 5);
		ctx.lineTo(arrowTipX, y + height * .5);
		ctx.lineTo(arrowInnerX, y + height - 5);
		ctx.fill();
		ctx.fillStyle = this.canIncrement() ? text_color : disabledTextColor;
		ctx.beginPath();
		ctx.moveTo(width - arrowInnerX, y + 5);
		ctx.lineTo(width - arrowTipX, y + height * .5);
		ctx.lineTo(width - arrowInnerX, y + height - 5);
		ctx.fill();
	}
	drawWidget(ctx, options) {
		const { fillStyle, strokeStyle, textAlign } = ctx;
		this.drawWidgetShape(ctx, options);
		if (options.showText) {
			if (!this.computedDisabled) this.drawArrowButtons(ctx, options.width);
			this.drawTruncatingText({
				ctx,
				width: options.width
			});
		}
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ComboWidget.ts
function toArray(values) {
	return Array.isArray(values) ? values : Object.keys(values);
}
var ComboWidget = class extends BaseSteppedWidget {
	type = "combo";
	get _displayValue() {
		if (this.computedDisabled) return "";
		const getOptionLabel = this.options.getOptionLabel;
		if (getOptionLabel) try {
			return getOptionLabel(this.value ? String(this.value) : null);
		} catch (e) {
			console.error("Failed to map value:", e);
			return this.value ? String(this.value) : "";
		}
		const { values: rawValues } = this.options;
		if (rawValues) {
			const values = typeof rawValues === "function" ? rawValues() : rawValues;
			if (values && !Array.isArray(values)) return values[this.value];
		}
		return typeof this.value === "number" ? String(this.value) : this.value;
	}
	getValues(node) {
		const { values } = this.options;
		if (values == null) throw new Error("[ComboWidget]: values is required");
		return typeof values === "function" ? values(this, node) : values;
	}
	/**
	* Checks if the value is {@link Array.at at} the given index in the combo list.
	* @param increment `true` if checking the use of the increment button, `false` for decrement
	* @returns `true` if the value is at the given index, otherwise `false`.
	*/
	canUseButton(increment) {
		const { values } = this.options;
		if (typeof values === "function") return false;
		const valuesArray = toArray(values);
		if (!(valuesArray.length > 1)) return false;
		const firstValue = valuesArray.at(0);
		const lastValue = valuesArray.at(-1);
		if (firstValue === lastValue) return true;
		return this.value !== (increment ? lastValue : firstValue);
	}
	/**
	* Returns `true` if the current value is not the last value in the list.
	* Handles edge case where the value is both the first and last item in the list.
	*/
	canIncrement() {
		return this.canUseButton(true);
	}
	canDecrement() {
		return this.canUseButton(false);
	}
	incrementValue(options) {
		this.tryChangeValue(1, options);
	}
	decrementValue(options) {
		this.tryChangeValue(-1, options);
	}
	tryChangeValue(delta, options) {
		const values = this.getValues(options.node);
		const indexedValues = toArray(values);
		options.canvas.last_mouseclick = 0;
		const index = clamp(typeof values === "object" ? indexedValues.indexOf(String(this.value)) + delta : indexedValues.indexOf(this.value) + delta, 0, indexedValues.length - 1);
		const value = Array.isArray(values) ? values[index] : index;
		this.setValue(value, options);
	}
	onClick({ e, node, canvas }) {
		const x = e.canvasX - node.pos[0];
		const width = this.width || node.size[0];
		if (typeof this.options.values === "function") warnDeprecated("Using a function for values is deprecated. Use an array of unique values instead.");
		if (x < 40) return this.decrementValue({
			e,
			node,
			canvas
		});
		if (x > width - 40) return this.incrementValue({
			e,
			node,
			canvas
		});
		const values = this.getValues(node);
		const values_list = toArray(values);
		if (this.options.getOptionLabel) {
			const menuOptions = {
				scale: Math.max(1, canvas.ds.scale),
				event: e,
				className: "dark",
				callback: (value) => {
					this.setValue(value, {
						e,
						node,
						canvas
					});
				}
			};
			const menu = new LiteGraph.ContextMenu([], menuOptions);
			const getOptionLabel = this.options.getOptionLabel;
			for (const value of values_list) try {
				const label = getOptionLabel ? getOptionLabel(String(value)) : String(value);
				menu.addItem(label, value, menuOptions);
			} catch (err) {
				console.error("Failed to map value:", err);
				menu.addItem(String(value), value, menuOptions);
			}
			return;
		}
		const text_values = values != values_list ? Object.values(values) : values;
		new LiteGraph.ContextMenu(text_values, {
			scale: Math.max(1, canvas.ds.scale),
			event: e,
			className: "dark",
			callback: (value) => {
				this.setValue(values != values_list ? text_values.indexOf(value) : value, {
					e,
					node,
					canvas
				});
			}
		});
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/CurveWidget.ts
var CurveWidget = class extends BaseWidget {
	type = "curve";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "Curve");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/FileUploadWidget.ts
/**
* Widget for handling file uploads
* This is a widget that only has a Vue widgets implementation
*/
var FileUploadWidget = class extends BaseWidget {
	type = "fileupload";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `Fileupload: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/GalleriaWidget.ts
/**
* Widget for displaying image galleries
* This is a widget that only has a Vue widgets implementation
*/
var GalleriaWidget = class extends BaseWidget {
	type = "galleria";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `Galleria: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/GradientSliderWidget.ts
var GradientSliderWidget = class extends BaseWidget {
	type = "gradientslider";
	drawWidget(ctx, { width, showText = true }) {
		ctx.save();
		const { height, y } = this;
		const { margin } = BaseWidget;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(margin, y, width - margin * 2, height);
		const range = this.options.max - this.options.min;
		let nvalue = (this.value - this.options.min) / range;
		nvalue = clamp(nvalue, 0, 1);
		ctx.fillStyle = "#678";
		ctx.fillRect(margin, y, nvalue * (width - margin * 2), height);
		if (showText && !this.computedDisabled) {
			ctx.strokeStyle = this.outline_color;
			ctx.strokeRect(margin, y, width - margin * 2, height);
		}
		if (showText) {
			ctx.textAlign = "center";
			ctx.fillStyle = this.text_color;
			const fixedValue = Number(this.value).toFixed(this.options.precision ?? 3);
			ctx.fillText(`${this.label || this.name}  ${fixedValue}`, width * .5, y + height * .7);
		}
		ctx.restore();
	}
	onClick(options) {
		if (this.options.read_only) return;
		const { e, node } = options;
		const width = this.width || node.size[0];
		const x = e.canvasX - node.pos[0];
		const { margin } = BaseWidget;
		const slideFactor = clamp((x - margin) / (width - margin * 2), 0, 1);
		const newValue = this.options.min + (this.options.max - this.options.min) * slideFactor;
		if (newValue !== this.value) this.setValue(newValue, options);
	}
	onDrag(options) {
		if (this.options.read_only) return false;
		const { e, node } = options;
		const width = this.width || node.size[0];
		const x = e.canvasX - node.pos[0];
		const { margin } = BaseWidget;
		const slideFactor = clamp((x - margin) / (width - margin * 2), 0, 1);
		const newValue = this.options.min + (this.options.max - this.options.min) * slideFactor;
		if (newValue !== this.value) this.setValue(newValue, options);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ImageCompareWidget.ts
/**
* Widget for comparing two images side by side
* This is a widget that only has a Vue widgets implementation
*/
var ImageCompareWidget = class extends BaseWidget {
	type = "imagecompare";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `ImageCompare: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/PainterWidget.ts
/**
* Widget for the Painter node canvas drawing tool.
* This is a widget that only has a Vue widgets implementation.
*/
var PainterWidget = class extends BaseWidget {
	type = "painter";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "Painter");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/ImageCropWidget.ts
/**
* Widget for displaying an image crop preview.
* This widget only has a Vue implementation.
*/
var ImageCropWidget = class extends BaseWidget {
	type = "imagecrop";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "ImageCrop");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/KnobWidget.ts
var KnobWidget = class extends BaseWidget {
	type = "knob";
	/**
	* Compute the layout size of the widget.
	* @returns The layout size of the widget.
	*/
	computeLayoutSize() {
		return {
			minHeight: 60,
			minWidth: 20,
			maxHeight: 1e6,
			maxWidth: 1e6
		};
	}
	get height() {
		return this.computedHeight || super.height;
	}
	drawWidget(ctx, { width, showText = true, suppressPromotedOutline }) {
		const { fillStyle, strokeStyle, textAlign } = ctx;
		const { y } = this;
		const { margin } = BaseWidget;
		const { gradient_stops = "rgb(14, 182, 201); rgb(0, 216, 72)" } = this.options;
		const effective_height = this.computedHeight || this.height;
		const size_modifier = Math.min(this.computedHeight || this.height, this.width || 20) / 20;
		const arc_center = {
			x: width / 2,
			y: effective_height / 2 + y
		};
		ctx.lineWidth = (Math.min(width, effective_height) - margin * size_modifier) / 6;
		const arc_size = (Math.min(width, effective_height) - margin * size_modifier - ctx.lineWidth) / 2;
		{
			const gradient = ctx.createRadialGradient(arc_center.x, arc_center.y, arc_size + ctx.lineWidth, 0, 0, arc_size + ctx.lineWidth);
			gradient.addColorStop(0, "rgb(29, 29, 29)");
			gradient.addColorStop(1, "rgb(116, 116, 116)");
			ctx.fillStyle = gradient;
		}
		ctx.beginPath();
		ctx.arc(arc_center.x, arc_center.y, arc_size + ctx.lineWidth / 2, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.closePath();
		const arc = {
			start_angle: Math.PI * .6,
			end_angle: Math.PI * 2.4
		};
		ctx.beginPath();
		{
			const gradient = ctx.createRadialGradient(arc_center.x, arc_center.y, arc_size + ctx.lineWidth, 0, 0, arc_size + ctx.lineWidth);
			gradient.addColorStop(0, "rgb(99, 99, 99)");
			gradient.addColorStop(1, "rgb(36, 36, 36)");
			ctx.strokeStyle = gradient;
		}
		ctx.arc(arc_center.x, arc_center.y, arc_size, arc.start_angle, arc.end_angle, false);
		ctx.stroke();
		ctx.closePath();
		const range = this.options.max - this.options.min;
		let nvalue = (this.value - this.options.min) / range;
		nvalue = clamp(nvalue, 0, 1);
		ctx.beginPath();
		const gradient = ctx.createConicGradient(arc.start_angle, arc_center.x, arc_center.y);
		const gs = gradient_stops.split(";");
		for (const [index, stop] of gs.entries()) gradient.addColorStop(index, stop.trim());
		ctx.strokeStyle = gradient;
		const value_end_angle = (arc.end_angle - arc.start_angle) * nvalue + arc.start_angle;
		ctx.arc(arc_center.x, arc_center.y, arc_size, arc.start_angle, value_end_angle, false);
		ctx.stroke();
		ctx.closePath();
		if (showText && !this.computedDisabled) {
			ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
			ctx.beginPath();
			ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
			ctx.arc(arc_center.x, arc_center.y, arc_size + ctx.lineWidth / 2, 0, Math.PI * 2, false);
			ctx.lineWidth = 1;
			ctx.stroke();
			ctx.closePath();
		}
		if (showText) {
			ctx.textAlign = "center";
			ctx.fillStyle = this.text_color;
			const fixedValue = Number(this.value).toFixed(this.options.precision ?? 3);
			ctx.fillText(`${this.label || this.name}\n${fixedValue}`, width * .5, y + effective_height * .5);
		}
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	onClick() {
		this.current_drag_offset = 0;
	}
	current_drag_offset = 0;
	onDrag(options) {
		if (this.options.read_only) return;
		const { e } = options;
		const step = getWidgetStep(this.options);
		const range = this.options.max - this.options.min;
		const range_10_percent = range / 10;
		const range_1_percent = range / 100;
		const step_for = {
			delta_x: step,
			shift: range_10_percent > step ? range_10_percent - range_10_percent % step : step,
			delta_y: range_1_percent > step ? range_1_percent - range_1_percent % step : step
		};
		const use_y = Math.abs(e.movementY) > Math.abs(e.movementX);
		const delta = use_y ? -e.movementY : e.movementX;
		const drag_threshold = 15;
		this.current_drag_offset += delta;
		let adjustment = 0;
		if (this.current_drag_offset > drag_threshold) {
			adjustment += 1;
			this.current_drag_offset -= drag_threshold;
		} else if (this.current_drag_offset < -drag_threshold) {
			adjustment -= 1;
			this.current_drag_offset += drag_threshold;
		}
		const step_with_shift_modifier = e.shiftKey ? step_for.shift : use_y ? step_for.delta_y : step;
		const deltaValue = adjustment * step_with_shift_modifier;
		const newValue = clamp(this.value + deltaValue, this.options.min, this.options.max);
		if (newValue !== this.value) this.setValue(newValue, options);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/LegacyWidget.ts
/**
* Wraps a legacy POJO custom widget, so that all widgets may be called via the same internal interface.
*
* Support will eventually be removed.
* @remarks Expect this class to undergo breaking changes without warning.
*/
var LegacyWidget = class extends BaseWidget {
	drawWidget(ctx, options) {
		const H = LiteGraph.NODE_WIDGET_HEIGHT;
		this.draw?.(ctx, this.node, options.width, this.y, H, !!options.showText);
	}
	onClick() {
		console.warn("Custom widget wrapper onClick was just called. Handling for third party widgets is done via LGraphCanvas - the mouse callback.");
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/MarkdownWidget.ts
/**
* Widget for displaying markdown formatted text
* This is a widget that only has a Vue widgets implementation
*/
var MarkdownWidget = class extends BaseWidget {
	type = "markdown";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `Markdown: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/MultiSelectWidget.ts
/**
* Widget for selecting multiple options
* This is a widget that only has a Vue widgets implementation
*/
var MultiSelectWidget = class extends BaseWidget {
	type = "multiselect";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `MultiSelect: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/NumberWidget.ts
var NumberWidget = class extends BaseSteppedWidget {
	type = "number";
	get _displayValue() {
		if (this.computedDisabled) return "";
		return Number(this.value).toFixed(this.options.precision !== void 0 ? this.options.precision : 3);
	}
	canIncrement() {
		const { max } = this.options;
		return max == null || this.value < max;
	}
	canDecrement() {
		const { min } = this.options;
		return min == null || this.value > min;
	}
	incrementValue(options) {
		this.setValue(this.value + getWidgetStep(this.options), options);
	}
	decrementValue(options) {
		this.setValue(this.value - getWidgetStep(this.options), options);
	}
	setValue(value, options) {
		let newValue = value;
		if (this.options.min != null && newValue < this.options.min) newValue = this.options.min;
		if (this.options.max != null && newValue > this.options.max) newValue = this.options.max;
		super.setValue(newValue, options);
	}
	onClick({ e, node, canvas }) {
		const x = e.canvasX - node.pos[0];
		const width = this.width || node.size[0];
		const delta = x < 40 ? -1 : x > width - 40 ? 1 : 0;
		if (delta) {
			this.setValue(this.value + delta * getWidgetStep(this.options), {
				e,
				node,
				canvas
			});
			return;
		}
		canvas.prompt("Value", this.value, (v) => {
			const parsed = evaluateInput(v);
			if (parsed !== void 0) this.setValue(parsed, {
				e,
				node,
				canvas
			});
		}, e);
	}
	/**
	* Handles drag events for the number widget
	* @param options The options for handling the drag event
	*/
	onDrag({ e, node, canvas }) {
		const width = this.width || node.width;
		const x = e.canvasX - node.pos[0];
		if ((x < 40 ? -1 : x > width - 40 ? 1 : 0) && x > -3 && x < width + 3) return;
		this.setValue(this.value + (e.deltaX ?? 0) * getWidgetStep(this.options), {
			e,
			node,
			canvas
		});
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/SelectButtonWidget.ts
/**
* Widget for selecting from a group of buttons
* This is a widget that only has a Vue widgets implementation
*/
var SelectButtonWidget = class extends BaseWidget {
	type = "selectbutton";
	drawWidget(ctx, options) {
		const { width } = options;
		const { y, height } = this;
		const { fillStyle, strokeStyle, textAlign, textBaseline, font } = ctx;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(15, y, width - 30, height);
		ctx.strokeStyle = this.getOutlineColor(options.suppressPromotedOutline);
		ctx.strokeRect(15, y, width - 30, height);
		ctx.fillStyle = this.text_color;
		ctx.font = "11px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const text = `SelectButton: ${t("widgets.node2only")}`;
		ctx.fillText(text, width / 2, y + height / 2);
		Object.assign(ctx, {
			fillStyle,
			strokeStyle,
			textAlign,
			textBaseline,
			font
		});
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/SliderWidget.ts
var SliderWidget = class extends BaseWidget {
	type = "slider";
	marker;
	/**
	* Draws the widget
	* @param ctx The canvas context
	* @param options The options for drawing the widget
	*/
	drawWidget(ctx, { width, showText = true, suppressPromotedOutline }) {
		const { fillStyle, strokeStyle, textAlign } = ctx;
		const { height, y } = this;
		const { margin } = BaseWidget;
		ctx.fillStyle = this.background_color;
		ctx.fillRect(margin, y, width - margin * 2, height);
		const range = this.options.max - this.options.min;
		let nvalue = (this.value - this.options.min) / range;
		nvalue = clamp(nvalue, 0, 1);
		ctx.fillStyle = this.options.slider_color ?? "#678";
		ctx.fillRect(margin, y, nvalue * (width - margin * 2), height);
		if (showText && !this.computedDisabled) {
			ctx.strokeStyle = this.getOutlineColor(suppressPromotedOutline);
			ctx.strokeRect(margin, y, width - margin * 2, height);
		}
		if (this.marker != null) {
			let marker_nvalue = (this.marker - this.options.min) / range;
			marker_nvalue = clamp(marker_nvalue, 0, 1);
			ctx.fillStyle = this.options.marker_color ?? "#AA9";
			ctx.fillRect(margin + marker_nvalue * (width - margin * 2), y, 2, height);
		}
		if (showText) {
			ctx.textAlign = "center";
			ctx.fillStyle = this.text_color;
			const fixedValue = Number(this.value).toFixed(this.options.precision ?? 3);
			ctx.fillText(`${this.label || this.name}  ${fixedValue}`, width * .5, y + height * .7);
		}
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	/**
	* Handles click events for the slider widget
	*/
	onClick(options) {
		if (this.options.read_only) return;
		const { e, node } = options;
		const width = this.width || node.size[0];
		const slideFactor = clamp((e.canvasX - node.pos[0] - 15) / (width - 30), 0, 1);
		const newValue = this.options.min + (this.options.max - this.options.min) * slideFactor;
		if (newValue !== this.value) this.setValue(newValue, options);
	}
	/**
	* Handles drag events for the slider widget
	*/
	onDrag(options) {
		if (this.options.read_only) return false;
		const { e, node } = options;
		const width = this.width || node.size[0];
		const slideFactor = clamp((e.canvasX - node.pos[0] - 15) / (width - 30), 0, 1);
		const newValue = this.options.min + (this.options.max - this.options.min) * slideFactor;
		if (newValue !== this.value) this.setValue(newValue, options);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/TextWidget.ts
var TextWidget = class extends BaseWidget {
	constructor(widget, node) {
		super(widget, node);
		this.type ??= "string";
		this.value = widget.value?.toString() ?? "";
	}
	/**
	* Draws the widget
	* @param ctx The canvas context
	* @param options The options for drawing the widget
	*/
	drawWidget(ctx, options) {
		const { width, showText = true } = options;
		const { fillStyle, strokeStyle, textAlign } = ctx;
		this.drawWidgetShape(ctx, options);
		if (showText) this.drawTruncatingText({
			ctx,
			width,
			leftPadding: 0,
			rightPadding: 0
		});
		Object.assign(ctx, {
			textAlign,
			strokeStyle,
			fillStyle
		});
	}
	onClick({ e, node, canvas }) {
		canvas.prompt("Value", this.value, (v) => {
			if (v !== null) this.setValue(v, {
				e,
				node,
				canvas
			});
		}, e, this.options?.multiline ?? false);
	}
};
//#endregion
//#region src/lib/litegraph/src/widgets/TextareaWidget.ts
/**
* Widget for multi-line text input.
* This widget only has a Vue implementation.
*/
var TextareaWidget = class extends BaseWidget {
	type = "textarea";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "Textarea");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/TreeSelectWidget.ts
/**
* Widget for hierarchical tree selection.
* This widget only has a Vue implementation.
*/
var TreeSelectWidget = class extends BaseWidget {
	type = "treeselect";
	drawWidget(ctx, options) {
		this.drawVueOnlyWarning(ctx, options, "TreeSelect");
	}
	onClick(_options) {}
};
//#endregion
//#region src/lib/litegraph/src/widgets/widgetMap.ts
function toConcreteWidget(widget, node, wrapLegacyWidgets = true) {
	if (widget instanceof BaseWidget) return widget;
	const narrowedWidget = widget;
	switch (narrowedWidget.type) {
		case "button": return toClass(ButtonWidget, narrowedWidget, node);
		case "toggle": return toClass(BooleanWidget, narrowedWidget, node);
		case "slider": return toClass(SliderWidget, narrowedWidget, node);
		case "gradientslider": return toClass(GradientSliderWidget, narrowedWidget, node);
		case "knob": return toClass(KnobWidget, narrowedWidget, node);
		case "combo": return toClass(ComboWidget, narrowedWidget, node);
		case "number": return toClass(NumberWidget, narrowedWidget, node);
		case "string": return toClass(TextWidget, narrowedWidget, node);
		case "text": return toClass(TextWidget, narrowedWidget, node);
		case "fileupload": return toClass(FileUploadWidget, narrowedWidget, node);
		case "color": return toClass(ColorWidget, narrowedWidget, node);
		case "markdown": return toClass(MarkdownWidget, narrowedWidget, node);
		case "treeselect": return toClass(TreeSelectWidget, narrowedWidget, node);
		case "multiselect": return toClass(MultiSelectWidget, narrowedWidget, node);
		case "chart": return toClass(ChartWidget, narrowedWidget, node);
		case "galleria": return toClass(GalleriaWidget, narrowedWidget, node);
		case "imagecompare": return toClass(ImageCompareWidget, narrowedWidget, node);
		case "selectbutton": return toClass(SelectButtonWidget, narrowedWidget, node);
		case "textarea": return toClass(TextareaWidget, narrowedWidget, node);
		case "asset": return toClass(AssetWidget, narrowedWidget, node);
		case "imagecrop": return toClass(ImageCropWidget, narrowedWidget, node);
		case "boundingbox": return toClass(BoundingBoxWidget, narrowedWidget, node);
		case "curve": return toClass(CurveWidget, narrowedWidget, node);
		case "painter": return toClass(PainterWidget, narrowedWidget, node);
		default: if (wrapLegacyWidgets) return toClass(LegacyWidget, widget, node);
	}
}
/** Type guard: Narrow **from {@link IBaseWidget}** to {@link IComboWidget}. */
function isComboWidget(widget) {
	return widget.type === "combo";
}
//#endregion
//#region src/lib/litegraph/src/LGraphNode.ts
/**
* Base class for all nodes
* @param title a name for the node
* @param type a type for the node
*/
var LGraphNode = class LGraphNode {
	static title;
	static MAX_CONSOLE;
	static type;
	static category;
	static description;
	static filter;
	static skip_list;
	static nodeData;
	static resizeHandleSize = 15;
	static resizeEdgeSize = 5;
	/** Default setting for {@link LGraphNode.connectInputToOutput}. @see {@link INodeFlags.keepAllLinksOnBypass} */
	static keepAllLinksOnBypass = false;
	/** The title text of the node. */
	title;
	/**
	* The font style used to render the node's title text.
	*/
	get titleFontStyle() {
		return `${LiteGraph.NODE_TEXT_SIZE}px ${LiteGraph.NODE_FONT}`;
	}
	get innerFontStyle() {
		return `normal ${LiteGraph.NODE_SUBTEXT_SIZE}px ${LiteGraph.NODE_FONT}`;
	}
	get displayType() {
		return this.type;
	}
	graph = null;
	id;
	type = "";
	inputs = [];
	outputs = [];
	_concreteInputs = [];
	_concreteOutputs = [];
	properties = {};
	properties_info = [];
	flags = {};
	widgets;
	/** Property manager for this node */
	changeTracker;
	/**
	* The amount of space available for widgets to grow into.
	* @see {@link layoutWidgets}
	*/
	freeWidgetSpace;
	/**
	* Set to true when widget-backed input slot positions need recalculation.
	* Cleared after arrange() runs. Avoids per-frame O(N) scans in drawConnections.
	*/
	_widgetSlotsDirty = false;
	locked;
	/** Execution order, automatically computed during run @see {@link LGraph.computeExecutionOrder} */
	order = 0;
	mode = LGraphEventMode.ALWAYS;
	last_serialization;
	serialize_widgets;
	/**
	* The overridden fg color used to render the node.
	* @see {@link renderingColor}
	*/
	color;
	/**
	* The overridden bg color used to render the node.
	* @see {@link renderingBgColor}
	*/
	bgcolor;
	/**
	* The overridden box color used to render the node.
	* @see {@link renderingBoxColor}
	*/
	boxcolor;
	/** The fg color used to render the node. */
	get renderingColor() {
		return adjustColor(this.color || this.constructor.color || LiteGraph.NODE_DEFAULT_COLOR, { lightness: LiteGraph.nodeLightness });
	}
	/** The bg color used to render the node. */
	get renderingBgColor() {
		const baseBgColor = this.bgcolor || this.constructor.bgcolor || LiteGraph.NODE_DEFAULT_BGCOLOR;
		const adjustments = {
			opacity: LiteGraph.nodeOpacity,
			lightness: LiteGraph.nodeLightness
		};
		return adjustColor(this.mode === LGraphEventMode.BYPASS ? LiteGraph.NODE_DEFAULT_BYPASS_COLOR : baseBgColor, adjustments);
	}
	/** The box color used to render the node. */
	get renderingBoxColor() {
		if (this.boxcolor) return this.boxcolor;
		if (LiteGraph.node_box_coloured_when_on) {
			if (this.action_triggered) return "#FFF";
			if (this.execute_triggered) return "#AAA";
		}
		if (LiteGraph.node_box_coloured_by_mode) {
			const modeColour = LiteGraph.NODE_MODES_COLORS[this.mode ?? LGraphEventMode.ALWAYS];
			if (modeColour) return modeColour;
		}
		return LiteGraph.NODE_DEFAULT_BOXCOLOR;
	}
	/** @inheritdoc {@link IColorable.setColorOption} */
	setColorOption(colorOption) {
		if (colorOption == null) {
			this.color = void 0;
			this.bgcolor = void 0;
		} else {
			this.color = colorOption.color;
			this.bgcolor = colorOption.bgcolor;
		}
	}
	/** @inheritdoc {@link IColorable.getColorOption} */
	getColorOption() {
		return Object.values(LGraphCanvas.node_colors).find((colorOption) => colorOption.color === this.color && colorOption.bgcolor === this.bgcolor) ?? null;
	}
	/**
	* The stroke styles that should be applied to the node.
	*/
	strokeStyles;
	/**
	* The progress of node execution. Used to render a progress bar. Value between 0 and 1.
	*/
	progress;
	exec_version;
	action_call;
	execute_triggered;
	action_triggered;
	/**
	* @deprecated This property is unsupported and will be removed in a future release.
	* Use `widgets_start_y` or a custom `arrange()` override instead.
	*/
	widgets_up;
	widgets_start_y;
	lostFocusAt;
	gotFocusAt;
	badges = [];
	title_buttons = [];
	badgePosition = BadgePosition.TopLeft;
	/**
	* The width of the node when collapsed.
	* Updated by {@link LGraphCanvas.drawNode}
	*/
	_collapsed_width;
	console;
	_level;
	_shape;
	mouseOver;
	redraw_on_mouse;
	resizable;
	clonable;
	_relative_id;
	clip_area;
	ignore_remove;
	has_errors;
	removable;
	block_delete;
	selected;
	showAdvanced;
	isSubgraphNode() {
		return false;
	}
	/** @inheritdoc {@link renderArea} */
	_renderArea = new Rectangle();
	/**
	* Rect describing the node area, including shadows and any protrusions.
	* Determines if the node is visible.  Calculated once at the start of every frame.
	*/
	get renderArea() {
		return this._renderArea;
	}
	/** @inheritdoc {@link boundingRect} */
	_boundingRect = new Rectangle();
	/**
	* Cached node position & area as `x, y, width, height`.  Includes changes made by {@link onBounding}, if present.
	*
	* Determines the node hitbox and other rendering effects.  Calculated once at the start of every frame.
	*/
	get boundingRect() {
		return this._boundingRect;
	}
	/** The offset from {@link pos} to the top-left of {@link boundingRect}. */
	get boundingOffset() {
		const { pos: [posX, posY], boundingRect: [bX, bY] } = this;
		return [posX - bX, posY - bY];
	}
	/** {@link pos} and {@link size} values are backed by this {@link Rectangle}. */
	_posSize = new Rectangle();
	_pos = this._posSize.pos;
	_size = this._posSize.size;
	get pos() {
		return this._pos;
	}
	/** Node position does not necessarily correlate to the top-left corner. */
	set pos(value) {
		if (!value || value.length < 2) return;
		this._pos[0] = value[0];
		this._pos[1] = value[1];
		const mutations = useLayoutMutations();
		mutations.setSource(LayoutSource.Canvas);
		mutations.moveNode(String(this.id), {
			x: value[0],
			y: value[1]
		});
	}
	/**
	* Set the node position to an absolute location.
	*/
	setPos(x, y) {
		this.pos = [x, y];
	}
	get size() {
		return this._size;
	}
	set size(value) {
		if (!value || value.length < 2) return;
		this._size[0] = value[0];
		this._size[1] = value[1];
		const mutations = useLayoutMutations();
		mutations.setSource(LayoutSource.Canvas);
		mutations.resizeNode(String(this.id), {
			width: value[0],
			height: value[1]
		});
	}
	/**
	* The size of the node used for rendering.
	*/
	get renderingSize() {
		return this.flags.collapsed ? [this._collapsed_width ?? 0, 0] : this._size;
	}
	get shape() {
		return this._shape;
	}
	set shape(v) {
		const oldValue = this._shape;
		switch (v) {
			case "default":
				this._shape = void 0;
				break;
			case "box":
				this._shape = RenderShape.BOX;
				break;
			case "round":
				this._shape = RenderShape.ROUND;
				break;
			case "circle":
				this._shape = RenderShape.CIRCLE;
				break;
			case "card":
				this._shape = RenderShape.CARD;
				break;
			default: this._shape = v;
		}
		if (oldValue !== this._shape) this.graph?.trigger("node:property:changed", {
			nodeId: this.id,
			property: "shape",
			oldValue,
			newValue: this._shape
		});
	}
	/**
	* The shape of the node used for rendering. @see {@link RenderShape}
	*/
	get renderingShape() {
		return this._shape || this.constructor.shape || LiteGraph.NODE_DEFAULT_SHAPE;
	}
	get is_selected() {
		return this.selected;
	}
	set is_selected(value) {
		this.selected = value;
	}
	get title_mode() {
		return this.constructor.title_mode ?? TitleMode.NORMAL_TITLE;
	}
	_getErrorStrokeStyle() {
		if (this.has_errors) return {
			padding: 12,
			lineWidth: 10,
			color: LiteGraph.NODE_ERROR_COLOUR
		};
	}
	_getSelectedStrokeStyle() {
		if (this.selected) return { padding: this.has_errors ? 20 : void 0 };
	}
	constructor(title, type) {
		this.id = LiteGraph.use_uuids ? LiteGraph.uuidv4() : -1;
		this.title = title || "Unnamed";
		this.type = type ?? "";
		this.size = [LiteGraph.NODE_WIDTH, 60];
		this.pos = [10, 10];
		this.strokeStyles = {
			error: this._getErrorStrokeStyle,
			selected: this._getSelectedStrokeStyle
		};
		this.changeTracker = new LGraphNodeProperties(this);
	}
	/**
	* configure a node from an object containing the serialized info
	*/
	configure(info) {
		if (this.graph) this.graph._version++;
		if (info.id === -1) info.id = this.id;
		for (const j in info) {
			if (j == "properties") {
				for (const k in info.properties) {
					this.properties[k] = info.properties[k];
					this.onPropertyChanged?.(k, info.properties[k]);
				}
				continue;
			}
			if (info[j] == null) continue;
			else if (typeof info[j] == "object") if (this[j]?.configure) this[j]?.configure(info[j]);
			else this[j] = LiteGraph.cloneObject(info[j], this[j]);
			else this[j] = info[j];
		}
		if (!info.title) this.title = this.constructor.title;
		this.inputs ??= [];
		this.inputs = this.inputs.map((input) => toClass(NodeInputSlot, input, this));
		for (const [i, input] of this.inputs.entries()) {
			const link = this.graph && input.link != null ? this.graph._links.get(input.link) : null;
			this.onConnectionsChange?.(NodeSlotType.INPUT, i, true, link, input);
			this.onInputAdded?.(input);
		}
		this.outputs ??= [];
		this.outputs = this.outputs.map((output) => toClass(NodeOutputSlot, output, this));
		for (const [i, output] of this.outputs.entries()) {
			if (!output.links) continue;
			for (const linkId of output.links) {
				const link = this.graph ? this.graph._links.get(linkId) : null;
				this.onConnectionsChange?.(NodeSlotType.OUTPUT, i, true, link, output);
			}
			this.onOutputAdded?.(output);
		}
		this._internalConfigureAfterSlots?.();
		if (this.widgets) {
			for (const w of this.widgets) {
				if (!w) continue;
				const input = this.inputs.find((i) => i.widget?.name === w.name);
				if (input?.label) w.label = input.label;
				if (w.options?.property && this.properties[w.options.property] != void 0) w.value = JSON.parse(JSON.stringify(this.properties[w.options.property]));
			}
			if (info.widgets_values) {
				let i = 0;
				for (const widget of this.widgets ?? []) {
					if (widget.serialize === false) continue;
					if (i >= info.widgets_values.length) break;
					widget.value = info.widgets_values[i++];
				}
			}
		}
		if (this.pinned) this.resizable = false;
		if (this.widgets_up) console.warn(`[LiteGraph] Node type "${this.type}" uses deprecated property "widgets_up". This property is unsupported and will be removed. Use "widgets_start_y" or a custom arrange() override instead.`);
		this.onConfigure?.(info);
	}
	/**
	* serialize the content
	*/
	serialize() {
		const o = {
			id: this.id,
			type: this.type,
			pos: [this.pos[0], this.pos[1]],
			size: [this.size[0], this.size[1]],
			flags: LiteGraph.cloneObject(this.flags),
			order: this.order,
			mode: this.mode,
			showAdvanced: this.showAdvanced
		};
		if (this.constructor === LGraphNode && this.last_serialization) return {
			...this.last_serialization,
			mode: o.mode,
			pos: o.pos
		};
		if (this.inputs) o.inputs = this.inputs.map((input) => inputAsSerialisable(input));
		if (this.outputs) o.outputs = this.outputs.map((output) => outputAsSerialisable(output));
		if (this.title && this.title != this.constructor.title) o.title = this.title;
		if (this.properties) o.properties = LiteGraph.cloneObject(this.properties);
		const { widgets } = this;
		if (widgets && this.serialize_widgets) {
			o.widgets_values = [];
			for (const [i, widget] of widgets.entries()) {
				if (widget.serialize === false) continue;
				const val = widget?.value;
				o.widgets_values[i] = val != null && typeof val === "object" ? JSON.parse(JSON.stringify(val)) : val ?? null;
			}
		}
		if (!o.type && this.constructor.type) o.type = this.constructor.type;
		if (this.color) o.color = this.color;
		if (this.bgcolor) o.bgcolor = this.bgcolor;
		if (this.boxcolor) o.boxcolor = this.boxcolor;
		if (this.shape) o.shape = this.shape;
		if (this.onSerialize?.(o)) console.warn("node onSerialize shouldn't return anything, data should be stored in the object pass in the first parameter");
		return o;
	}
	clone() {
		if (this.type == null) return null;
		const node = LiteGraph.createNode(this.type);
		if (!node) return null;
		const data = LiteGraph.cloneObject(this.serialize());
		const { inputs, outputs } = data;
		if (inputs) for (const input of inputs) input.link = null;
		if (outputs) {
			for (const { links } of outputs) if (links) links.length = 0;
		}
		data.id = void 0;
		if (LiteGraph.use_uuids) data.id = LiteGraph.uuidv4();
		node.configure(data);
		return node;
	}
	/**
	* serialize and stringify
	*/
	toString() {
		return JSON.stringify(this.serialize());
	}
	/**
	* get the title string
	*/
	getTitle() {
		return this.title || this.constructor.title;
	}
	/**
	* sets the value of a property
	* @param name
	* @param value
	*/
	setProperty(name, value) {
		this.properties ||= {};
		if (value === this.properties[name]) return;
		const prev_value = this.properties[name];
		this.properties[name] = value;
		if (this.onPropertyChanged?.(name, value, prev_value) === false) this.properties[name] = prev_value;
		if (this.widgets) for (const w of this.widgets) {
			if (!w) continue;
			if (w.options.property == name) {
				w.value = value;
				break;
			}
		}
	}
	/**
	* sets the output data
	* @param slot
	* @param data
	*/
	setOutputData(slot, data) {
		const { outputs } = this;
		if (!outputs) return;
		if (slot == -1 || slot >= outputs.length) return;
		const output_info = outputs[slot];
		if (!output_info) return;
		output_info._data = data;
		if (!this.graph) throw new NullGraphError();
		const { links } = outputs[slot];
		if (links) for (const id of links) {
			const link = this.graph._links.get(id);
			if (link) link.data = data;
		}
	}
	/**
	* sets the output data type, useful when you want to be able to overwrite the data type
	*/
	setOutputDataType(slot, type) {
		const { outputs } = this;
		if (!outputs || slot == -1 || slot >= outputs.length) return;
		const output_info = outputs[slot];
		if (!output_info) return;
		output_info.type = type;
		if (!this.graph) throw new NullGraphError();
		const { links } = outputs[slot];
		if (links) for (const id of links) {
			const link = this.graph._links.get(id);
			if (link) link.type = type;
		}
	}
	/**
	* Retrieves the input data (data traveling through the connection) from one slot
	* @param slot
	* @param force_update if set to true it will force the connected node of this slot to output data into this link
	* @returns data or if it is not connected returns undefined
	*/
	getInputData(slot, force_update) {
		if (!this.inputs) return;
		if (slot >= this.inputs.length || this.inputs[slot].link == null) return;
		if (!this.graph) throw new NullGraphError();
		const link_id = this.inputs[slot].link;
		const link = this.graph._links.get(link_id);
		if (!link) return null;
		if (!force_update) return link.data;
		const node = this.graph.getNodeById(link.origin_id);
		if (!node) return link.data;
		if (node.updateOutputData) node.updateOutputData(link.origin_slot);
		else node.onExecute?.();
		return link.data;
	}
	/**
	* Retrieves the input data type (in case this supports multiple input types)
	* @param slot
	* @returns datatype in string format
	*/
	getInputDataType(slot) {
		if (!this.inputs) return null;
		if (slot >= this.inputs.length || this.inputs[slot].link == null) return null;
		if (!this.graph) throw new NullGraphError();
		const link_id = this.inputs[slot].link;
		const link = this.graph._links.get(link_id);
		if (!link) return null;
		const node = this.graph.getNodeById(link.origin_id);
		if (!node) return link.type;
		const output_info = node.outputs[link.origin_slot];
		return output_info ? output_info.type : null;
	}
	/**
	* Retrieves the input data from one slot using its name instead of slot number
	* @param slot_name
	* @param force_update if set to true it will force the connected node of this slot to output data into this link
	* @returns data or if it is not connected returns null
	*/
	getInputDataByName(slot_name, force_update) {
		const slot = this.findInputSlot(slot_name);
		return slot == -1 ? null : this.getInputData(slot, force_update);
	}
	/**
	* tells you if there is a connection in one input slot
	* @param slot The 0-based index of the input to check
	* @returns `true` if the input slot has a link ID (does not perform validation)
	*/
	isInputConnected(slot) {
		if (!this.inputs) return false;
		return slot < this.inputs.length && this.inputs[slot].link != null;
	}
	/**
	* tells you info about an input connection (which node, type, etc)
	* @returns object or null { link: id, name: string, type: string or 0 }
	*/
	getInputInfo(slot) {
		return !this.inputs || !(slot < this.inputs.length) ? null : this.inputs[slot];
	}
	/**
	* Returns the link info in the connection of an input slot
	* @returns object or null
	*/
	getInputLink(slot) {
		if (!this.inputs) return null;
		if (slot < this.inputs.length) {
			if (!this.graph) throw new NullGraphError();
			const input = this.inputs[slot];
			if (input.link != null) return this.graph._links.get(input.link) ?? null;
		}
		return null;
	}
	/**
	* returns the node connected in the input slot
	* @returns node or null
	*/
	getInputNode(slot) {
		if (!this.inputs) return null;
		if (slot >= this.inputs.length) return null;
		const input = this.inputs[slot];
		if (!input || input.link === null) return null;
		if (!this.graph) throw new NullGraphError();
		const link_info = this.graph._links.get(input.link);
		if (!link_info) return null;
		return this.graph.getNodeById(link_info.origin_id);
	}
	/**
	* returns the value of an input with this name, otherwise checks if there is a property with that name
	* @returns value
	*/
	getInputOrProperty(name) {
		const { inputs } = this;
		if (!inputs?.length) return this.properties ? this.properties[name] : null;
		if (!this.graph) throw new NullGraphError();
		for (const input of inputs) if (name == input.name && input.link != null) {
			const link = this.graph._links.get(input.link);
			if (link) return link.data;
		}
		return this.properties[name];
	}
	/**
	* tells you the last output data that went in that slot
	* @returns object or null
	*/
	getOutputData(slot) {
		if (!this.outputs) return null;
		if (slot >= this.outputs.length) return null;
		return this.outputs[slot]._data;
	}
	/**
	* tells you info about an output connection (which node, type, etc)
	* @returns object or null { name: string, type: string, links: [ ids of links in number ] }
	*/
	getOutputInfo(slot) {
		return !this.outputs || !(slot < this.outputs.length) ? null : this.outputs[slot];
	}
	/**
	* tells you if there is a connection in one output slot
	*/
	isOutputConnected(slot) {
		if (!this.outputs) return false;
		return slot < this.outputs.length && Number(this.outputs[slot].links?.length) > 0;
	}
	/**
	* tells you if there is any connection in the output slots
	*/
	isAnyOutputConnected() {
		const { outputs } = this;
		if (!outputs) return false;
		for (const output of outputs) if (output.links?.length) return true;
		return false;
	}
	/**
	* retrieves all the nodes connected to this output slot
	*/
	getOutputNodes(slot) {
		const { outputs } = this;
		if (!outputs || outputs.length == 0) return null;
		if (slot >= outputs.length) return null;
		const { links } = outputs[slot];
		if (!links || links.length == 0) return null;
		if (!this.graph) throw new NullGraphError();
		const r = [];
		for (const id of links) {
			const link = this.graph._links.get(id);
			if (link) {
				const target_node = this.graph.getNodeById(link.target_id);
				if (target_node) r.push(target_node);
			}
		}
		return r;
	}
	addOnTriggerInput() {
		const trigS = this.findInputSlot("onTrigger");
		if (trigS == -1) {
			this.addInput("onTrigger", LiteGraph.EVENT, { nameLocked: true });
			return this.findInputSlot("onTrigger");
		}
		return trigS;
	}
	addOnExecutedOutput() {
		const trigS = this.findOutputSlot("onExecuted");
		if (trigS == -1) {
			this.addOutput("onExecuted", LiteGraph.ACTION, { nameLocked: true });
			return this.findOutputSlot("onExecuted");
		}
		return trigS;
	}
	onAfterExecuteNode(param, options) {
		const trigS = this.findOutputSlot("onExecuted");
		if (trigS != -1) this.triggerSlot(trigS, param, null, options);
	}
	changeMode(modeTo) {
		switch (modeTo) {
			case LGraphEventMode.ON_EVENT: break;
			case LGraphEventMode.ON_TRIGGER:
				this.addOnTriggerInput();
				this.addOnExecutedOutput();
				break;
			case LGraphEventMode.NEVER: break;
			case LGraphEventMode.ALWAYS: break;
			case LiteGraph.ON_REQUEST: break;
			default: return false;
		}
		this.mode = modeTo;
		return true;
	}
	/**
	* Triggers the node code execution, place a boolean/counter to mark the node as being executed
	*/
	doExecute(param, options) {
		options = options || {};
		if (this.onExecute) {
			options.action_call ||= `${this.id}_exec_${Math.floor(Math.random() * 9999)}`;
			if (!this.graph) throw new NullGraphError();
			this.graph.nodes_executing[this.id] = true;
			this.onExecute(param, options);
			this.graph.nodes_executing[this.id] = false;
			this.exec_version = this.graph.iteration;
			if (options?.action_call) {
				this.action_call = options.action_call;
				this.graph.nodes_executedAction[this.id] = options.action_call;
			}
		}
		this.execute_triggered = 2;
		this.onAfterExecuteNode?.(param, options);
	}
	/**
	* Triggers an action, wrapped by logics to control execution flow
	* @param action name
	*/
	actionDo(action, param, options) {
		options = options || {};
		if (this.onAction) {
			options.action_call ||= `${this.id}_${action || "action"}_${Math.floor(Math.random() * 9999)}`;
			if (!this.graph) throw new NullGraphError();
			this.graph.nodes_actioning[this.id] = action || "actioning";
			this.onAction(action, param, options);
			this.graph.nodes_actioning[this.id] = false;
			if (options?.action_call) {
				this.action_call = options.action_call;
				this.graph.nodes_executedAction[this.id] = options.action_call;
			}
		}
		this.action_triggered = 2;
		this.onAfterExecuteNode?.(param, options);
	}
	/**
	* Triggers an event in this node, this will trigger any output with the same name
	* @param action name ( "on_play", ... ) if action is equivalent to false then the event is send to all
	*/
	trigger(action, param, options) {
		const { outputs } = this;
		if (!outputs || !outputs.length) return;
		if (this.graph) this.graph._last_trigger_time = LiteGraph.getTime();
		for (const [i, output] of outputs.entries()) {
			if (!output || output.type !== LiteGraph.EVENT || action && output.name != action) continue;
			this.triggerSlot(i, param, null, options);
		}
	}
	/**
	* Triggers a slot event in this node: cycle output slots and launch execute/action on connected nodes
	* @param slot the index of the output slot
	* @param link_id [optional] in case you want to trigger and specific output link in a slot
	*/
	triggerSlot(slot, param, link_id, options) {
		options = options || {};
		if (!this.outputs) return;
		if (slot == null) {
			console.error("slot must be a number");
			return;
		}
		if (typeof slot !== "number") console.warn("slot must be a number, use node.trigger('name') if you want to use a string");
		const output = this.outputs[slot];
		if (!output) return;
		const links = output.links;
		if (!links || !links.length) return;
		if (!this.graph) throw new NullGraphError();
		this.graph._last_trigger_time = LiteGraph.getTime();
		for (const id of links) {
			if (link_id != null && link_id != id) continue;
			const link_info = this.graph._links.get(id);
			if (!link_info) continue;
			link_info._last_time = LiteGraph.getTime();
			const node = this.graph.getNodeById(link_info.target_id);
			if (!node) continue;
			if (node.mode === LGraphEventMode.ON_TRIGGER) {
				if (!options.action_call) options.action_call = `${this.id}_trigg_${Math.floor(Math.random() * 9999)}`;
				node.doExecute?.(param, options);
			} else if (node.onAction) {
				if (!options.action_call) options.action_call = `${this.id}_act_${Math.floor(Math.random() * 9999)}`;
				const target_connection = node.inputs[link_info.target_slot];
				node.actionDo(target_connection.name, param, options);
			}
		}
	}
	/**
	* clears the trigger slot animation
	* @param slot the index of the output slot
	* @param link_id [optional] in case you want to trigger and specific output link in a slot
	*/
	clearTriggeredSlot(slot, link_id) {
		if (!this.outputs) return;
		const output = this.outputs[slot];
		if (!output) return;
		const links = output.links;
		if (!links || !links.length) return;
		if (!this.graph) throw new NullGraphError();
		for (const id of links) {
			if (link_id != null && link_id != id) continue;
			const link_info = this.graph._links.get(id);
			if (!link_info) continue;
			link_info._last_time = 0;
		}
	}
	/**
	* changes node size and triggers callback
	*/
	setSize(size) {
		this.size = size;
		this.onResize?.(this.size);
	}
	/**
	* Expands the node size to fit its content.
	*/
	expandToFitContent() {
		const newSize = this.computeSize();
		this.setSize([Math.max(this.size[0], newSize[0]), Math.max(this.size[1], newSize[1])]);
	}
	/**
	* add a new property to this node
	* @param type string defining the output type ("vec3","number",...)
	* @param extra_info this can be used to have special properties of the property (like values, etc)
	*/
	addProperty(name, default_value, type, extra_info) {
		const o = {
			name,
			type,
			default_value
		};
		if (extra_info) Object.assign(o, extra_info);
		this.properties_info ||= [];
		this.properties_info.push(o);
		this.properties ||= {};
		this.properties[name] = default_value;
		return o;
	}
	/**
	* add a new output slot to use in this node
	* @param type string defining the output type ("vec3","number",...)
	* @param extra_info this can be used to have special properties of an output (label, special color, position, etc)
	*/
	addOutput(name, type, extra_info) {
		const output = Object.assign(new NodeOutputSlot({
			name,
			type,
			links: null
		}, this), extra_info);
		this.outputs ||= [];
		this.outputs.push(output);
		this.onOutputAdded?.(output);
		if (LiteGraph.auto_load_slot_types) LiteGraph.registerNodeAndSlotType(this, type, true);
		this.expandToFitContent();
		this.setDirtyCanvas(true, true);
		return output;
	}
	/**
	* remove an existing output slot
	*/
	removeOutput(slot) {
		if (this.graph) this.disconnectOutput(slot);
		const { outputs } = this;
		outputs.splice(slot, 1);
		for (let i = slot; i < outputs.length; ++i) {
			const output = outputs[i];
			if (!output || !output.links) continue;
			if (this.graph) for (const linkId of output.links) {
				const link = this.graph._links.get(linkId);
				if (link) link.origin_slot--;
			}
		}
		this.onOutputRemoved?.(slot);
		this.setDirtyCanvas(true, true);
	}
	/**
	* add a new input slot to use in this node
	* @param type string defining the input type ("vec3","number",...), it its a generic one use 0
	* @param extra_info this can be used to have special properties of an input (label, color, position, etc)
	*/
	addInput(name, type, extra_info) {
		type ||= 0;
		const input = Object.assign(new NodeInputSlot({
			name,
			type,
			link: null
		}, this), extra_info);
		this.inputs ||= [];
		this.inputs.push(input);
		this.expandToFitContent();
		this.onInputAdded?.(input);
		LiteGraph.registerNodeAndSlotType(this, type);
		this.setDirtyCanvas(true, true);
		return input;
	}
	/**
	* remove an existing input slot
	*/
	removeInput(slot) {
		if (this.graph) this.disconnectInput(slot, true);
		const { inputs } = this;
		const slot_info = inputs.splice(slot, 1);
		for (let i = slot; i < inputs.length; ++i) {
			const input = inputs[i];
			if (!input?.link) continue;
			if (this.graph) {
				const link = this.graph._links.get(input.link);
				if (link) link.target_slot--;
			}
		}
		this.onInputRemoved?.(slot, slot_info[0]);
		this.setDirtyCanvas(true, true);
	}
	/**
	* computes the minimum size of a node according to its inputs and output slots
	* @returns the total size
	*/
	computeSize(out) {
		const ctorSize = this.constructor.size;
		if (ctorSize) return [ctorSize[0], ctorSize[1]];
		const { inputs, outputs, widgets } = this;
		let rows = Math.max(inputs ? inputs.filter((input) => !isWidgetInputSlot(input)).length : 1, outputs ? outputs.length : 1);
		const size = out ?? [0, 0];
		rows = Math.max(rows, 1);
		const font_size = LiteGraph.NODE_TEXT_SIZE;
		const padLeft = LiteGraph.NODE_TITLE_HEIGHT;
		const padRight = padLeft * .33;
		const title_width = padLeft + compute_text_size(this.title, this.titleFontStyle) + padRight;
		let input_width = 0;
		let widgetWidth = 0;
		let output_width = 0;
		if (inputs) for (const input of inputs) {
			const text_width = compute_text_size(input.label || input.localized_name || input.name || "", this.innerFontStyle);
			if (isWidgetInputSlot(input)) {
				const widget = this.getWidgetFromSlot(input);
				if (widget && !this.isWidgetVisible(widget)) continue;
				if (text_width > widgetWidth) widgetWidth = text_width;
			} else if (text_width > input_width) input_width = text_width;
		}
		if (outputs) for (const output of outputs) {
			const text_width = compute_text_size(output.label || output.localized_name || output.name || "", this.innerFontStyle);
			if (output_width < text_width) output_width = text_width;
		}
		const minWidth = LiteGraph.NODE_WIDTH * (widgets?.length ? 1.5 : 1);
		const centrePadding = input_width && output_width ? 5 : 0;
		const slotsWidth = input_width + output_width + 2 * LiteGraph.NODE_SLOT_HEIGHT + centrePadding;
		const widgetMargin = BaseWidget.margin + BaseWidget.arrowMargin + BaseWidget.arrowWidth;
		const widgetPadding = BaseWidget.minValueWidth + 2 * widgetMargin;
		if (widgetWidth) widgetWidth += widgetPadding;
		size[0] = Math.max(slotsWidth, widgetWidth, title_width, minWidth);
		size[1] = (this.constructor.slot_start_y || 0) + rows * LiteGraph.NODE_SLOT_HEIGHT;
		let widgets_height = 0;
		if (widgets?.length) {
			for (const widget of widgets) {
				if (!this.isWidgetVisible(widget)) continue;
				let widget_height = 0;
				if (widget.computeSize) widget_height += widget.computeSize(size[0])[1];
				else if (widget.computeLayoutSize) {
					const { minHeight, minWidth } = widget.computeLayoutSize(this);
					const widgetWidth = minWidth + widgetPadding;
					if (widgetWidth > size[0]) size[0] = widgetWidth;
					widget_height += minHeight;
				} else widget_height += LiteGraph.NODE_WIDGET_HEIGHT;
				widgets_height += widget_height + 4;
			}
			widgets_height += 8;
		}
		if (this.widgets_up) size[1] = Math.max(size[1], widgets_height);
		else if (this.widgets_start_y != null) size[1] = Math.max(size[1], widgets_height + this.widgets_start_y);
		else size[1] += widgets_height;
		function compute_text_size(text, fontStyle) {
			return LGraphCanvas._measureText?.(text, fontStyle) ?? font_size * (text?.length ?? 0) * .6;
		}
		if (this.constructor.min_height && size[1] < this.constructor.min_height) size[1] = this.constructor.min_height;
		size[1] += 6;
		return size;
	}
	inResizeCorner(canvasX, canvasY) {
		const rows = this.outputs ? this.outputs.length : 1;
		const outputs_offset = (this.constructor.slot_start_y || 0) + rows * LiteGraph.NODE_SLOT_HEIGHT;
		return isInRectangle(canvasX, canvasY, this.pos[0] + this.size[0] - 15, this.pos[1] + Math.max(this.size[1] - 15, outputs_offset), 20, 20);
	}
	/**
	* Returns which resize corner the point is over, if any.
	* @param canvasX X position in canvas coordinates
	* @param canvasY Y position in canvas coordinates
	* @returns The compass corner the point is in, otherwise `undefined`.
	*/
	findResizeDirection(canvasX, canvasY) {
		if (this.resizable === false) return;
		const { boundingRect } = this;
		if (!boundingRect.containsXy(canvasX, canvasY)) return;
		return boundingRect.findContainingCorner(canvasX, canvasY, LGraphNode.resizeHandleSize);
	}
	/**
	* returns all the info available about a property of this node.
	* @param property name of the property
	* @returns the object with all the available info
	*/
	getPropertyInfo(property) {
		let info = null;
		const { properties_info } = this;
		if (properties_info) {
			for (const propInfo of properties_info) if (propInfo.name == property) {
				info = propInfo;
				break;
			}
		}
		if (this.constructor[`@${property}`]) info = this.constructor[`@${property}`];
		if (this.constructor.widgets_info?.[property]) info = this.constructor.widgets_info[property];
		if (!info && this.onGetPropertyInfo) info = this.onGetPropertyInfo(property);
		info ||= {};
		info.type ||= typeof this.properties[property];
		if (info.widget == "combo") info.type = "enum";
		return info;
	}
	/**
	* Defines a widget inside the node, it will be rendered on top of the node, you can control lots of properties
	* @param type the widget type
	* @param name the text to show on the widget
	* @param value the default value
	* @param callback function to call when it changes (optionally, it can be the name of the property to modify)
	* @param options the object that contains special properties of this widget
	* @returns the created widget object
	*/
	addWidget(type, name, value, callback, options) {
		this.widgets ||= [];
		if (!options && callback && typeof callback === "object") {
			options = callback;
			callback = null;
		}
		options ||= {};
		if (typeof options === "string") options = { property: options };
		if (callback && typeof callback === "string") {
			options.property = callback;
			callback = null;
		}
		const w = {
			type: type.toLowerCase(),
			name,
			value,
			callback: typeof callback !== "function" ? void 0 : callback,
			options,
			y: 0
		};
		if (w.options.y !== void 0) w.y = w.options.y;
		if (!callback && !w.options.callback && !w.options.property) console.warn("LiteGraph addWidget(...) without a callback or property assigned");
		if (type == "combo" && !w.options.values) throw "LiteGraph addWidget('combo',...) requires to pass values in options: { values:['red','blue'] }";
		const widget = this.addCustomWidget(w);
		this.expandToFitContent();
		return widget;
	}
	addCustomWidget(custom_widget) {
		this.widgets ||= [];
		const widget = toConcreteWidget(custom_widget, this, false) ?? custom_widget;
		this.widgets.push(widget);
		this._widgetSlotsDirty = true;
		if (this.id !== -1 && isNodeBindable(widget)) widget.setNodeId(this.id);
		return widget;
	}
	addTitleButton(options) {
		this.title_buttons ||= [];
		const button = new LGraphButton(options);
		this.title_buttons.push(button);
		return button;
	}
	onTitleButtonClick(button, canvas) {
		canvas.dispatch("litegraph:node-title-button-clicked", {
			node: this,
			button
		});
	}
	removeWidget(widget) {
		if (!this.widgets) throw new Error("removeWidget called on node without widgets");
		const widgetIndex = this.widgets.indexOf(widget);
		if (widgetIndex === -1) throw new Error("Widget not found on this node");
		if (this.inputs) {
			for (const input of this.inputs) if (input._widget === widget) {
				input._widget = void 0;
				input.widget = void 0;
				input.pos = void 0;
			}
		}
		this._widgetSlotsDirty = true;
		widget.onRemove?.();
		this.widgets.splice(widgetIndex, 1);
	}
	ensureWidgetRemoved(widget) {
		try {
			this.removeWidget(widget);
		} catch (error) {
			console.error("Failed to remove widget", error);
		}
	}
	move(deltaX, deltaY) {
		if (this.pinned) return;
		if (LiteGraph.vueNodesMode) return;
		this.pos = [this._pos[0] + deltaX, this._pos[1] + deltaY];
	}
	/**
	* Internal method to measure the node for rendering.  Prefer {@link boundingRect} where possible.
	*
	* Populates {@link out} with the results in graph space.
	* Populates {@link _collapsed_width} with the collapsed width if the node is collapsed.
	* Adjusts for title and collapsed status, but does not call {@link onBounding}.
	* @param out `x, y, width, height` are written to this array.
	* @param ctx The canvas context to use for measuring text.
	*/
	measure(out, ctx) {
		const titleMode = this.title_mode;
		const titleHeight = titleMode != TitleMode.TRANSPARENT_TITLE && titleMode != TitleMode.NO_TITLE ? LiteGraph.NODE_TITLE_HEIGHT : 0;
		out[0] = this.pos[0];
		out[1] = this.pos[1] + -titleHeight;
		if (!this.flags?.collapsed) {
			out[2] = this.size[0];
			out[3] = this.size[1] + titleHeight;
		} else {
			if (ctx) ctx.font = this.innerFontStyle;
			this._collapsed_width = Math.min(this.size[0], ctx ? cachedMeasureText(ctx, this.getTitle() ?? "") + LiteGraph.NODE_TITLE_HEIGHT * 2 : 0);
			out[2] = this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH;
			out[3] = LiteGraph.NODE_TITLE_HEIGHT;
		}
	}
	/**
	* returns the bounding of the object, used for rendering purposes
	* @param out {Rect?} [optional] a place to store the output, to free garbage
	* @param includeExternal {boolean?} [optional] set to true to
	* include the shadow and connection points in the bounding calculation
	* @returns the bounding box in format of [topleft_cornerx, topleft_cornery, width, height]
	*/
	getBounding(out, includeExternal) {
		out ||= [
			0,
			0,
			0,
			0
		];
		const rect = includeExternal ? this.renderArea : this.boundingRect;
		out[0] = rect[0];
		out[1] = rect[1];
		out[2] = rect[2];
		out[3] = rect[3];
		return out;
	}
	/**
	* Calculates the render area of this node, populating both {@link boundingRect} and {@link renderArea}.
	* Called automatically at the start of every frame.
	*/
	updateArea(ctx) {
		const bounds = this._boundingRect;
		this.measure(bounds, ctx);
		this.onBounding?.(bounds);
		const renderArea = this._renderArea;
		renderArea.set(bounds);
		renderArea[0] -= 4;
		renderArea[1] -= 4;
		renderArea[2] += 10;
		renderArea[3] += 9;
	}
	/**
	* checks if a point is inside the shape of a node
	*/
	isPointInside(x, y) {
		if (isInRect(x, y, this.boundingRect)) return true;
		for (const badge of this.badges.map(toValue).filter((b) => b.onClick)) if (isInRect(x - this.pos[0], y - this.pos[1], badge.boundingRect)) return true;
		return false;
	}
	/**
	* Checks if the provided point is inside this node's collapse button area.
	* @param x X co-ordinate to check
	* @param y Y co-ordinate to check
	* @returns true if the x,y point is in the collapse button area, otherwise false
	*/
	isPointInCollapse(x, y) {
		const squareLength = LiteGraph.NODE_TITLE_HEIGHT;
		return isInRectangle(x, y, this.pos[0], this.pos[1] - squareLength, squareLength, squareLength);
	}
	/**
	* Returns the input slot at the given position. Uses full 20 height, and approximates the label length.
	* @param pos The graph co-ordinates to check
	* @returns The input slot at the given position if found, otherwise `undefined`.
	*/
	getInputOnPos(pos) {
		return getNodeInputOnPos(this, pos[0], pos[1])?.input;
	}
	/**
	* Returns the output slot at the given position. Uses full 20x20 box for the slot.
	* @param pos The graph co-ordinates to check
	* @returns The output slot at the given position if found, otherwise `undefined`.
	*/
	getOutputOnPos(pos) {
		return getNodeOutputOnPos(this, pos[0], pos[1])?.output;
	}
	/**
	* Returns the input or output slot at the given position.
	*
	* Tries {@link getNodeInputOnPos} first, then {@link getNodeOutputOnPos}.
	* @param pos The graph co-ordinates to check
	* @returns The input or output slot at the given position if found, otherwise `undefined`.
	*/
	getSlotOnPos(pos) {
		if (!isPointInRect(pos, this.boundingRect)) return;
		return this.getInputOnPos(pos) ?? this.getOutputOnPos(pos);
	}
	/**
	* @deprecated Use {@link getSlotOnPos} instead.
	* checks if a point is inside a node slot, and returns info about which slot
	* @param x
	* @param y
	* @returns if found the object contains { input|output: slot object, slot: number, link_pos: [x,y] }
	*/
	getSlotInPosition(x, y) {
		const { inputs, outputs } = this;
		if (inputs) for (const [i, input] of inputs.entries()) {
			const pos = this.getInputPos(i);
			if (isInRectangle(x, y, pos[0] - 10, pos[1] - 10, 20, 20)) return {
				input,
				slot: i,
				link_pos: pos
			};
		}
		if (outputs) for (const [i, output] of outputs.entries()) {
			const pos = this.getOutputPos(i);
			if (isInRectangle(x, y, pos[0] - 10, pos[1] - 10, 20, 20)) return {
				output,
				slot: i,
				link_pos: pos
			};
		}
		return null;
	}
	/**
	* Gets the widget on this node at the given co-ordinates.
	* @param canvasX X co-ordinate in graph space
	* @param canvasY Y co-ordinate in graph space
	* @returns The widget found, otherwise `null`
	*/
	getWidgetOnPos(canvasX, canvasY, includeDisabled = false) {
		const { widgets, pos, size } = this;
		if (!widgets?.length) return;
		const x = canvasX - pos[0];
		const y = canvasY - pos[1];
		const nodeWidth = size[0];
		for (const widget of widgets) {
			if (widget.computedDisabled && !includeDisabled || !this.isWidgetVisible(widget)) continue;
			const h = widget.computedHeight ?? widget.computeSize?.(nodeWidth)[1] ?? LiteGraph.NODE_WIDGET_HEIGHT;
			const maybeDOMWidget = widget;
			const mtop = maybeDOMWidget.margin ?? -2;
			const mbot = maybeDOMWidget.margin ?? 2;
			const mx = maybeDOMWidget.margin ?? 6;
			const w = widget.width || nodeWidth;
			if (widget.last_y !== void 0 && isInRectangle(x, y, mx, widget.last_y + mtop, w - 2 * mx, h - mtop - mbot)) return widget;
		}
	}
	findInputSlot(name, returnObj = false) {
		const { inputs } = this;
		if (!inputs) return -1;
		for (const [i, input] of inputs.entries()) if (name == input.name) return !returnObj ? i : input;
		return -1;
	}
	findOutputSlot(name, returnObj = false) {
		const { outputs } = this;
		if (!outputs) return -1;
		for (const [i, output] of outputs.entries()) if (name == output.name) return !returnObj ? i : output;
		return -1;
	}
	findInputSlotFree(optsIn) {
		return this._findFreeSlot(this.inputs, optsIn);
	}
	findOutputSlotFree(optsIn) {
		return this._findFreeSlot(this.outputs, optsIn);
	}
	/**
	* Finds the next free slot
	* @param slots The slots to search, i.e. this.inputs or this.outputs
	*/
	_findFreeSlot(slots, options) {
		const opts = Object.assign({
			returnObj: false,
			typesNotAccepted: []
		}, options || {});
		const length = slots?.length;
		if (!(length > 0)) return -1;
		for (let i = 0; i < length; ++i) {
			const slot = slots[i];
			if (!slot || slot.link || slot.links?.length) continue;
			if (opts.typesNotAccepted?.includes?.(slot.type)) continue;
			return !opts.returnObj ? i : slot;
		}
		return -1;
	}
	findInputSlotByType(type, returnObj, preferFreeSlot, doNotUseOccupied) {
		return this._findSlotByType(this.inputs, type, returnObj, preferFreeSlot, doNotUseOccupied);
	}
	findOutputSlotByType(type, returnObj, preferFreeSlot, doNotUseOccupied) {
		return this._findSlotByType(this.outputs, type, returnObj, preferFreeSlot, doNotUseOccupied);
	}
	findSlotByType(input, type, returnObj, preferFreeSlot, doNotUseOccupied) {
		return input ? this._findSlotByType(this.inputs, type, returnObj, preferFreeSlot, doNotUseOccupied) : this._findSlotByType(this.outputs, type, returnObj, preferFreeSlot, doNotUseOccupied);
	}
	/**
	* Finds a matching slot from those provided, returning the slot itself or its index in {@link slots}.
	* @param slots Slots to search (this.inputs or this.outputs)
	* @param type Type of slot to look for
	* @param returnObj If true, returns the slot itself.  Otherwise, the index.
	* @param preferFreeSlot Prefer a free slot, but if none are found, fall back to an occupied slot.
	* @param doNotUseOccupied Do not fall back to occupied slots.
	* @see {findSlotByType}
	* @see {findOutputSlotByType}
	* @see {findInputSlotByType}
	* @returns If a match is found, the slot if returnObj is true, otherwise the index.  If no matches are found, -1
	*/
	_findSlotByType(slots, type, returnObj, preferFreeSlot, doNotUseOccupied) {
		const length = slots?.length;
		if (!length) return -1;
		if (type == "" || type == "*") type = 0;
		const sourceTypes = String(type).toLowerCase().split(",");
		let occupiedSlot = null;
		for (let i = 0; i < length; ++i) {
			const slot = slots[i];
			const destTypes = slot.type == "0" || slot.type == "*" ? ["0"] : String(slot.type).toLowerCase().split(",");
			for (const sourceType of sourceTypes) {
				const source = sourceType == "_event_" ? LiteGraph.EVENT : sourceType;
				for (const destType of destTypes) {
					const dest = destType == "_event_" ? LiteGraph.EVENT : destType;
					if (source == dest || source === "*" || dest === "*") {
						if (preferFreeSlot && (slot.links?.length || slot.link != null)) {
							occupiedSlot ??= returnObj ? slot : i;
							continue;
						}
						return returnObj ? slot : i;
					}
				}
			}
		}
		return doNotUseOccupied ? -1 : occupiedSlot ?? -1;
	}
	/**
	* Determines the slot index to connect to when attempting to connect by type.
	* @param findInputs If true, searches for an input.  Otherwise, an output.
	* @param node The node at the other end of the connection.
	* @param slotType The type of slot at the other end of the connection.
	* @param options Search restrictions to adhere to.
	* @see {connectByType}
	* @see {connectByTypeOutput}
	*/
	findConnectByTypeSlot(findInputs, node, slotType, options) {
		if (options && typeof options === "object") {
			if ("firstFreeIfInputGeneralInCase" in options) options.wildcardToTyped = !!options.firstFreeIfInputGeneralInCase;
			if ("firstFreeIfOutputGeneralInCase" in options) options.wildcardToTyped = !!options.firstFreeIfOutputGeneralInCase;
			if ("generalTypeInCase" in options) options.typedToWildcard = !!options.generalTypeInCase;
		}
		const opts = Object.assign({
			createEventInCase: true,
			wildcardToTyped: true,
			typedToWildcard: true
		}, options);
		if (!this.graph) throw new NullGraphError();
		if (node && typeof node === "number") {
			const nodeById = this.graph.getNodeById(node);
			if (!nodeById) return;
			node = nodeById;
		}
		const slot = node.findSlotByType(findInputs, slotType, false, true);
		if (slot >= 0 && slot !== null) return slot;
		if (opts.createEventInCase && slotType == LiteGraph.EVENT) {
			if (findInputs) return -1;
			if (LiteGraph.do_add_triggers_slots) return node.addOnExecutedOutput();
		}
		if (opts.typedToWildcard) {
			const generalSlot = node.findSlotByType(findInputs, 0, false, true, true);
			if (generalSlot >= 0) return generalSlot;
		}
		if (opts.wildcardToTyped && (slotType == 0 || slotType == "*" || slotType == "")) {
			const opt = { typesNotAccepted: [LiteGraph.EVENT] };
			const nonEventSlot = findInputs ? node.findInputSlotFree(opt) : node.findOutputSlotFree(opt);
			if (nonEventSlot >= 0) return nonEventSlot;
		}
	}
	/**
	* Finds the first free output slot with any of the comma-delimited types in {@link type}.
	*
	* If no slots are free, falls back in order to:
	* - The first free wildcard slot
	* - The first occupied slot
	* - The first occupied wildcard slot
	* @param type The {@link ISlotType type} of slot to find
	* @returns The index and slot if found, otherwise `undefined`.
	*/
	findOutputByType(type) {
		return findFreeSlotOfType(this.outputs, type, (output) => !output.links?.length);
	}
	/**
	* Finds the first free input slot with any of the comma-delimited types in {@link type}.
	*
	* If no slots are free, falls back in order to:
	* - The first free wildcard slot
	* - The first occupied slot
	* - The first occupied wildcard slot
	* @param type The {@link ISlotType type} of slot to find
	* @returns The index and slot if found, otherwise `undefined`.
	*/
	findInputByType(type) {
		return findFreeSlotOfType(this.inputs, type, (input) => input.link == null || !!this.graph?.getLink(input.link)?._dragging);
	}
	/**
	* connect this node output to the input of another node BY TYPE
	* @param slot (could be the number of the slot or the string with the name of the slot)
	* @param target_node the target node
	* @param target_slotType the input slot type of the target node
	* @returns the link_info is created, otherwise null
	*/
	connectByType(slot, target_node, target_slotType, optsIn) {
		const slotIndex = this.findConnectByTypeSlot(true, target_node, target_slotType, optsIn);
		if (slotIndex !== void 0) return this.connect(slot, target_node, slotIndex, optsIn?.afterRerouteId);
		return null;
	}
	/**
	* connect this node input to the output of another node BY TYPE
	* @param slot (could be the number of the slot or the string with the name of the slot)
	* @param source_node the target node
	* @param source_slotType the output slot type of the target node
	* @returns the link_info is created, otherwise null
	*/
	connectByTypeOutput(slot, source_node, source_slotType, optsIn) {
		if (typeof optsIn === "object") {
			if ("firstFreeIfInputGeneralInCase" in optsIn) optsIn.wildcardToTyped = !!optsIn.firstFreeIfInputGeneralInCase;
			if ("generalTypeInCase" in optsIn) optsIn.typedToWildcard = !!optsIn.generalTypeInCase;
		}
		const slotIndex = this.findConnectByTypeSlot(false, source_node, source_slotType, optsIn);
		if (slotIndex !== void 0) return source_node.connect(slotIndex, this, slot, optsIn?.afterRerouteId);
		console.error("[connectByType]: no way to connect type:", source_slotType, "to node:", source_node);
		return null;
	}
	canConnectTo(node, toSlot, fromSlot) {
		return this.id !== node.id && LiteGraph.isValidConnection(fromSlot.type, toSlot.type);
	}
	/**
	* Connect an output of this node to an input of another node
	* @param slot (could be the number of the slot or the string with the name of the slot)
	* @param target_node the target node
	* @param target_slot the input slot of the target node (could be the number of the slot or the string with the name of the slot, or -1 to connect a trigger)
	* @returns the link_info is created, otherwise null
	*/
	connect(slot, target_node, target_slot, afterRerouteId) {
		let targetIndex;
		const { graph, outputs } = this;
		if (!graph) {
			console.error("Connect: Error, node doesn't belong to any graph. Nodes must be added first to a graph before connecting them.");
			return null;
		}
		if (typeof slot === "string") {
			slot = this.findOutputSlot(slot);
			if (slot == -1) {
				if (LiteGraph.debug) console.error(`Connect: Error, no slot of name ${slot}`);
				return null;
			}
		} else if (!outputs || slot >= outputs.length) {
			if (LiteGraph.debug) console.error("Connect: Error, slot number not found");
			return null;
		}
		if (target_node && typeof target_node === "number") {
			const nodeById = graph.getNodeById(target_node);
			if (!nodeById) throw "target node is null";
			target_node = nodeById;
		}
		if (!target_node) throw "target node is null";
		if (target_node == this) return null;
		if (typeof target_slot === "string") {
			targetIndex = target_node.findInputSlot(target_slot);
			if (targetIndex == -1) {
				if (LiteGraph.debug) console.error(`Connect: Error, no slot of name ${targetIndex}`);
				return null;
			}
		} else if (target_slot === LiteGraph.EVENT) if (LiteGraph.do_add_triggers_slots) {
			target_node.changeMode(LGraphEventMode.ON_TRIGGER);
			targetIndex = target_node.findInputSlot("onTrigger");
		} else return null;
		else if (typeof target_slot === "number") targetIndex = target_slot;
		else targetIndex = 0;
		if (target_node.onBeforeConnectInput) {
			const requestedIndex = target_node.onBeforeConnectInput(targetIndex, target_slot);
			targetIndex = typeof requestedIndex === "number" ? requestedIndex : null;
		}
		if (targetIndex === null || !target_node.inputs || targetIndex >= target_node.inputs.length) {
			if (LiteGraph.debug) console.error("Connect: Error, slot number not found");
			return null;
		}
		const input = target_node.inputs[targetIndex];
		const output = outputs[slot];
		if (!output) return null;
		if (output.links?.length) {
			if (output.type === LiteGraph.EVENT && !LiteGraph.allow_multi_output_for_events) {
				graph.beforeChange();
				this.disconnectOutput(slot);
			}
		}
		return this.connectSlots(output, target_node, input, afterRerouteId) ?? null;
	}
	/**
	* Connect two slots between two nodes
	* @param output The output slot to connect
	* @param inputNode The node that the input slot is on
	* @param input The input slot to connect
	* @param afterRerouteId The reroute ID to use for the link
	* @returns The link that was created, or null if the connection was blocked
	*/
	connectSlots(output, inputNode, input, afterRerouteId) {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		const layoutMutations = useLayoutMutations();
		const outputIndex = this.outputs.indexOf(output);
		if (outputIndex === -1) {
			console.warn("connectSlots: output not found");
			return;
		}
		const inputIndex = inputNode.inputs.indexOf(input);
		if (inputIndex === -1) {
			console.warn("connectSlots: input not found");
			return;
		}
		if (!LiteGraph.isValidConnection(output.type, input.type)) {
			this.setDirtyCanvas(false, true);
			return null;
		}
		if (inputNode.onConnectInput?.(inputIndex, output.type, output, this, outputIndex) === false) return null;
		if (this.onConnectOutput?.(outputIndex, input.type, input, inputNode, inputIndex) === false) return null;
		if (inputNode.inputs[inputIndex]?.link != null) {
			graph.beforeChange();
			inputNode.disconnectInput(inputIndex, true);
		}
		const maybeCommonType = input.type && output.type && commonType(input.type, output.type);
		const link = new LLink(++graph.state.lastLinkId, maybeCommonType || input.type || output.type, this.id, outputIndex, inputNode.id, inputIndex, afterRerouteId);
		graph._links.set(link.id, link);
		layoutMutations.setSource(LayoutSource.Canvas);
		layoutMutations.createLink(link.id, this.id, outputIndex, inputNode.id, inputIndex);
		output.links ??= [];
		output.links.push(link.id);
		const targetInput = inputNode.inputs[inputIndex];
		targetInput.link = link.id;
		if (targetInput.widget) graph.trigger("node:slot-links:changed", {
			nodeId: inputNode.id,
			slotType: NodeSlotType.INPUT,
			slotIndex: inputIndex,
			connected: true,
			linkId: link.id
		});
		const reroutes = LLink.getReroutes(graph, link);
		for (const reroute of reroutes) {
			reroute.linkIds.add(link.id);
			if (reroute.floating) reroute.floating = void 0;
			reroute._dragging = void 0;
		}
		const lastReroute = reroutes.at(-1);
		if (lastReroute) for (const linkId of lastReroute.floatingLinkIds) {
			const link = graph.floatingLinks.get(linkId);
			if (link?.parentId === lastReroute.id) graph.removeFloatingLink(link);
		}
		graph._version++;
		this.onConnectionsChange?.(NodeSlotType.OUTPUT, outputIndex, true, link, output);
		inputNode.onConnectionsChange?.(NodeSlotType.INPUT, inputIndex, true, link, input);
		this.setDirtyCanvas(false, true);
		graph.afterChange();
		return link;
	}
	connectFloatingReroute(pos, slot, afterRerouteId) {
		const { graph, id } = this;
		if (!graph) throw new NullGraphError();
		const inputIndex = this.inputs.indexOf(slot);
		const outputIndex = this.outputs.indexOf(slot);
		if (inputIndex === -1 && outputIndex === -1) throw new Error("Invalid slot");
		const slotType = outputIndex === -1 ? "input" : "output";
		const reroute = graph.setReroute({
			pos,
			parentId: afterRerouteId,
			linkIds: [],
			floating: { slotType }
		});
		const parentReroute = graph.getReroute(afterRerouteId);
		const fromLastFloatingReroute = parentReroute?.floating?.slotType === "output";
		if (afterRerouteId == null || !fromLastFloatingReroute) {
			const link = new LLink(-1, slot.type, outputIndex === -1 ? -1 : id, outputIndex, inputIndex === -1 ? -1 : id, inputIndex);
			link.parentId = reroute.id;
			graph.addFloatingLink(link);
			return reroute;
		}
		if (!parentReroute) throw new Error("[connectFloatingReroute] Parent reroute not found");
		const link = parentReroute.getFloatingLinks("output")?.[0];
		if (!link) throw new Error("[connectFloatingReroute] Floating link not found");
		reroute.floatingLinkIds.add(link.id);
		link.parentId = reroute.id;
		parentReroute.floating = void 0;
		return reroute;
	}
	/**
	* disconnect one output to an specific node
	* @param slot (could be the number of the slot or the string with the name of the slot)
	* @param target_node the target node to which this slot is connected [Optional,
	* if not target_node is specified all nodes will be disconnected]
	* @returns if it was disconnected successfully
	*/
	disconnectOutput(slot, target_node) {
		if (typeof slot === "string") {
			slot = this.findOutputSlot(slot);
			if (slot == -1) {
				if (LiteGraph.debug) console.error(`Connect: Error, no slot of name ${slot}`);
				return false;
			}
		} else if (!this.outputs || slot >= this.outputs.length) {
			if (LiteGraph.debug) console.error("Connect: Error, slot number not found");
			return false;
		}
		const output = this.outputs[slot];
		if (!output) return false;
		if (output._floatingLinks) {
			for (const link of output._floatingLinks) if (link.hasOrigin(this.id, slot)) this.graph?.removeFloatingLink(link);
		}
		if (!output.links || output.links.length == 0) return false;
		const { links } = output;
		const graph = this.graph;
		if (!graph) throw new NullGraphError();
		if (target_node) {
			const target = typeof target_node === "number" ? graph.getNodeById(target_node) : target_node;
			if (!target) throw "Target Node not found";
			for (const [i, link_id] of links.entries()) {
				const link_info = graph._links.get(link_id);
				if (link_info?.target_id != target.id) continue;
				links.splice(i, 1);
				const input = target.inputs[link_info.target_slot];
				input.link = null;
				if (input.widget) graph.trigger("node:slot-links:changed", {
					nodeId: target.id,
					slotType: NodeSlotType.INPUT,
					slotIndex: link_info.target_slot,
					connected: false,
					linkId: link_info.id
				});
				link_info.disconnect(graph, "input");
				graph._version++;
				target.onConnectionsChange?.(NodeSlotType.INPUT, link_info.target_slot, false, link_info, input);
				this.onConnectionsChange?.(NodeSlotType.OUTPUT, slot, false, link_info, output);
				break;
			}
		} else {
			for (const link_id of links) {
				const link_info = graph._links.get(link_id);
				if (!link_info) continue;
				if (link_info.target_id === -20 && graph instanceof Subgraph) {
					const targetSlot = graph.outputNode.slots[link_info.target_slot];
					if (targetSlot) targetSlot.linkIds.length = 0;
					else console.error("Missing subgraphOutput slot when disconnecting link");
				}
				const target = graph.getNodeById(link_info.target_id);
				graph._version++;
				if (target) {
					const input = target.inputs[link_info.target_slot];
					input.link = null;
					if (input.widget) graph.trigger("node:slot-links:changed", {
						nodeId: target.id,
						slotType: NodeSlotType.INPUT,
						slotIndex: link_info.target_slot,
						connected: false,
						linkId: link_info.id
					});
					target.onConnectionsChange?.(NodeSlotType.INPUT, link_info.target_slot, false, link_info, input);
				}
				link_info.disconnect(graph, "input");
				this.onConnectionsChange?.(NodeSlotType.OUTPUT, slot, false, link_info, output);
			}
			output.links = null;
		}
		this.setDirtyCanvas(false, true);
		return true;
	}
	/**
	* Disconnect one input
	* @param slot Input slot index, or the name of the slot
	* @param keepReroutes If `true`, reroutes will not be garbage collected.
	* @returns true if disconnected successfully or already disconnected, otherwise false
	*/
	disconnectInput(slot, keepReroutes) {
		if (typeof slot === "string") {
			slot = this.findInputSlot(slot);
			if (slot == -1) {
				if (LiteGraph.debug) console.error(`Connect: Error, no slot of name ${slot}`);
				return false;
			}
		} else if (!this.inputs || slot >= this.inputs.length) {
			if (LiteGraph.debug) console.error("Connect: Error, slot number not found");
			return false;
		}
		const input = this.inputs[slot];
		if (!input) {
			console.error("disconnectInput: input not found", slot, this.inputs);
			return false;
		}
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		if (input._floatingLinks?.size) for (const link of input._floatingLinks) graph.removeFloatingLink(link);
		const link_id = this.inputs[slot].link;
		if (link_id != null) {
			this.inputs[slot].link = null;
			if (input.widget) graph.trigger("node:slot-links:changed", {
				nodeId: this.id,
				slotType: NodeSlotType.INPUT,
				slotIndex: slot,
				connected: false,
				linkId: link_id
			});
			const link_info = graph._links.get(link_id);
			if (link_info) {
				if (link_info.origin_id === -10 && "inputNode" in graph) {
					graph.inputNode._disconnectNodeInput(this, input, link_info);
					return true;
				}
				const target_node = graph.getNodeById(link_info.origin_id);
				if (!target_node) {
					console.error("disconnectInput: output not found", link_info.origin_slot);
					return false;
				}
				const output = target_node.outputs[link_info.origin_slot];
				if (!output?.links?.length) return false;
				let i = 0;
				for (const l = output.links.length; i < l; i++) if (output.links[i] == link_id) {
					output.links.splice(i, 1);
					break;
				}
				link_info.disconnect(graph, keepReroutes ? "output" : void 0);
				if (graph) graph._version++;
				this.onConnectionsChange?.(NodeSlotType.INPUT, slot, false, link_info, input);
				target_node.onConnectionsChange?.(NodeSlotType.OUTPUT, i, false, link_info, output);
			}
		}
		this.setDirtyCanvas(false, true);
		return true;
	}
	/**
	* @deprecated Use {@link getInputPos} or {@link getOutputPos} instead.
	* returns the center of a connection point in canvas coords
	* @param is_input true if if a input slot, false if it is an output
	* @param slot_number (could be the number of the slot or the string with the name of the slot)
	* @param out [optional] a place to store the output, to free garbage
	* @returns the position
	*/
	getConnectionPos(is_input, slot_number, out) {
		out ||= [0, 0];
		const { pos: [nodeX, nodeY], inputs, outputs } = this;
		if (this.flags.collapsed) {
			const w = this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH;
			out[0] = is_input ? nodeX : nodeX + w;
			out[1] = nodeY - LiteGraph.NODE_TITLE_HEIGHT * .5;
			return out;
		}
		if (is_input && slot_number == -1) {
			out[0] = nodeX + LiteGraph.NODE_TITLE_HEIGHT * .5;
			out[1] = nodeY + LiteGraph.NODE_TITLE_HEIGHT * .5;
			return out;
		}
		const inputPos = inputs?.[slot_number]?.pos;
		const outputPos = outputs?.[slot_number]?.pos;
		if (is_input && inputPos) {
			out[0] = nodeX + inputPos[0];
			out[1] = nodeY + inputPos[1];
			return out;
		} else if (!is_input && outputPos) {
			out[0] = nodeX + outputPos[0];
			out[1] = nodeY + outputPos[1];
			return out;
		}
		const offset = LiteGraph.NODE_SLOT_HEIGHT * .5;
		const slotIndex = is_input ? this._defaultVerticalInputs.indexOf(this.inputs[slot_number]) : this._defaultVerticalOutputs.indexOf(this.outputs[slot_number]);
		out[0] = is_input ? nodeX + offset : nodeX + this.size[0] + 1 - offset;
		out[1] = nodeY + (slotIndex + .7) * LiteGraph.NODE_SLOT_HEIGHT + (this.constructor.slot_start_y || 0);
		return out;
	}
	/**
	* @internal The inputs that are not positioned with absolute coordinates.
	*/
	get _defaultVerticalInputs() {
		return this.inputs.filter((slot) => !slot.pos && !(this.widgets?.length && isWidgetInputSlot(slot)));
	}
	/**
	* @internal The outputs that are not positioned with absolute coordinates.
	*/
	get _defaultVerticalOutputs() {
		return this.outputs.filter((slot) => !slot.pos);
	}
	/**
	* Get the context needed for slot position calculations
	* @internal
	*/
	_getSlotPositionContext() {
		return {
			nodeX: this.pos[0],
			nodeY: this.pos[1],
			nodeWidth: this.size[0],
			nodeHeight: this.size[1],
			collapsed: this.flags.collapsed ?? false,
			collapsedWidth: this._collapsed_width,
			slotStartY: this.constructor.slot_start_y,
			inputs: this.inputs,
			outputs: this.outputs,
			widgets: this.widgets
		};
	}
	/**
	* Gets the position of an input slot, in graph co-ordinates.
	*
	* This method is preferred over the legacy {@link getConnectionPos} method.
	* @param slot Input slot index
	* @returns Position of the input slot
	*/
	getInputPos(slot) {
		return getSlotPosition(this, slot, true);
	}
	/**
	* Gets the position of an input slot, in graph co-ordinates.
	* @param input The actual node input object
	* @returns Position of the centre of the input slot in graph co-ordinates.
	*/
	getInputSlotPos(input) {
		return calculateInputSlotPosFromSlot(this._getSlotPositionContext(), input);
	}
	/**
	* Gets the position of an output slot, in graph co-ordinates.
	*
	* This method is preferred over the legacy {@link getConnectionPos} method.
	* @param outputSlotIndex Output slot index
	* @returns Position of the output slot
	*/
	getOutputPos(outputSlotIndex) {
		return getSlotPosition(this, outputSlotIndex, false);
	}
	/**
	* Get slot position using layout tree if available, fallback to node's position * Unified implementation used by both LitegraphLinkAdapter and useLinkLayoutSync
	* @param slotIndex The slot index
	* @param isInput Whether this is an input slot
	* @returns Position of the slot center in graph coordinates
	*/
	getSlotPosition(slotIndex, isInput) {
		return getSlotPosition(this, slotIndex, isInput);
	}
	/** @inheritdoc */
	snapToGrid(snapTo) {
		return this.pinned ? false : snapPoint(this.pos, snapTo);
	}
	/** @see {@link snapToGrid} */
	alignToGrid() {
		this.snapToGrid(LiteGraph.CANVAS_GRID_SIZE);
	}
	trace(msg) {
		this.console ||= [];
		this.console.push(msg);
		if (this.console.length > LGraphNode.MAX_CONSOLE) this.console.shift();
	}
	setDirtyCanvas(dirty_foreground, dirty_background) {
		this.graph?.canvasAction((c) => c.setDirty(dirty_foreground, dirty_background));
	}
	loadImage(url) {
		const img = new Image();
		img.src = LiteGraph.node_images_path + url;
		img.ready = false;
		const dirty = () => this.setDirtyCanvas(true);
		img.addEventListener("load", function() {
			this.ready = true;
			dirty();
		});
		return img;
	}
	/**
	* Allows to get onMouseMove and onMouseUp events even if the mouse is out of focus
	* @deprecated Use {@link LGraphCanvas.pointer} instead.
	*/
	captureInput(v) {
		warnDeprecated("[DEPRECATED] captureInput will be removed in a future version. Please use LGraphCanvas.pointer (CanvasPointer) instead.");
		if (!this.graph || !this.graph.list_of_graphcanvas) return;
		const list = this.graph.list_of_graphcanvas;
		for (const c of list) {
			if (!v && c.node_capturing_input != this) continue;
			c.node_capturing_input = v ? this : null;
		}
	}
	get collapsed() {
		return !!this.flags.collapsed;
	}
	get collapsible() {
		return !this.pinned && this.constructor.collapsable !== false;
	}
	/**
	* Toggle node collapse (makes it smaller on the canvas)
	*/
	collapse(force) {
		if (!this.collapsible && !force) return;
		if (!this.graph) throw new NullGraphError();
		this.graph._version++;
		this.flags.collapsed = !this.flags.collapsed;
		this.setDirtyCanvas(true, true);
	}
	/**
	* Toggles advanced mode of the node, showing advanced widgets
	*/
	toggleAdvanced() {
		if (!this.hasAdvancedWidgets()) return;
		if (!this.graph) throw new NullGraphError();
		this.graph._version++;
		this.showAdvanced = !this.showAdvanced;
		this.expandToFitContent();
		this.setDirtyCanvas(true, true);
	}
	get pinned() {
		return !!this.flags.pinned;
	}
	/**
	* Prevents the node being accidentally moved or resized by mouse interaction.
	* Toggles pinned state if no value is provided.
	*/
	pin(v) {
		if (!this.graph) throw new NullGraphError();
		this.graph._version++;
		this.flags.pinned = v ?? !this.flags.pinned;
		this.resizable = !this.pinned;
		if (!this.pinned) this.flags.pinned = void 0;
	}
	unpin() {
		this.pin(false);
	}
	localToScreen(x, y, dragAndScale) {
		return [(x + this.pos[0]) * dragAndScale.scale + dragAndScale.offset[0], (y + this.pos[1]) * dragAndScale.scale + dragAndScale.offset[1]];
	}
	get width() {
		return this.collapsed ? this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH : this.size[0];
	}
	/**
	* Returns the height of the node, including the title bar.
	*/
	get height() {
		return LiteGraph.NODE_TITLE_HEIGHT + this.bodyHeight;
	}
	/**
	* Returns the height of the node, excluding the title bar.
	*/
	get bodyHeight() {
		return this.collapsed ? 0 : this.size[1];
	}
	drawBadges(ctx, { gap = 2 } = {}) {
		const badgeInstances = this.badges.map((badge) => badge instanceof LGraphBadge ? badge : badge());
		let currentX = this.badgePosition === BadgePosition.TopLeft ? 0 : this.width - badgeInstances.reduce((acc, badge) => acc + badge.getWidth(ctx) + gap, 0);
		const y = -(LiteGraph.NODE_TITLE_HEIGHT + gap);
		for (const badge of badgeInstances) {
			badge.draw(ctx, currentX, y - badge.height);
			currentX += badge.getWidth(ctx) + gap;
		}
	}
	/**
	* Renders the node's title bar background
	*/
	drawTitleBarBackground(ctx, { scale, title_height = LiteGraph.NODE_TITLE_HEIGHT, low_quality = false }) {
		const fgcolor = this.renderingColor;
		const shape = this.renderingShape;
		const size = this.renderingSize;
		if (this.onDrawTitleBar) {
			this.onDrawTitleBar(ctx, title_height, size, scale, fgcolor);
			return;
		}
		if (this.title_mode === TitleMode.TRANSPARENT_TITLE) return;
		if (this.collapsed) ctx.shadowColor = LiteGraph.DEFAULT_SHADOW_COLOR;
		ctx.fillStyle = this.constructor.title_color || fgcolor;
		ctx.beginPath();
		if (shape == RenderShape.BOX || low_quality) ctx.rect(0, -title_height, size[0], title_height);
		else if (shape == RenderShape.ROUND || shape == RenderShape.CARD) ctx.roundRect(0, -title_height, size[0], title_height, this.collapsed ? [LiteGraph.ROUND_RADIUS] : [
			LiteGraph.ROUND_RADIUS,
			LiteGraph.ROUND_RADIUS,
			0,
			0
		]);
		ctx.fill();
		ctx.shadowColor = "transparent";
	}
	/**
	* Renders the node's title box, i.e. the dot in front of the title text that
	* when clicked toggles the node's collapsed state. The term `title box` comes
	* from the original LiteGraph implementation.
	*/
	drawTitleBox(ctx, { scale, low_quality = false, title_height = LiteGraph.NODE_TITLE_HEIGHT, box_size = 10 }) {
		const size = this.renderingSize;
		const shape = this.renderingShape;
		if (this.onDrawTitleBox) {
			this.onDrawTitleBox(ctx, title_height, size, scale);
			return;
		}
		if ([
			RenderShape.ROUND,
			RenderShape.CIRCLE,
			RenderShape.CARD
		].includes(shape)) {
			if (low_quality) {
				ctx.fillStyle = "black";
				ctx.beginPath();
				ctx.arc(title_height * .5, title_height * -.5, box_size * .5 + 1, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.fillStyle = this.renderingBoxColor;
			if (low_quality) ctx.fillRect(title_height * .5 - box_size * .5, title_height * -.5 - box_size * .5, box_size, box_size);
			else {
				ctx.beginPath();
				ctx.arc(title_height * .5, title_height * -.5, box_size * .5, 0, Math.PI * 2);
				ctx.fill();
			}
		} else {
			if (low_quality) {
				ctx.fillStyle = "black";
				ctx.fillRect((title_height - box_size) * .5 - 1, (title_height + box_size) * -.5 - 1, box_size + 2, box_size + 2);
			}
			ctx.fillStyle = this.renderingBoxColor;
			ctx.fillRect((title_height - box_size) * .5, (title_height + box_size) * -.5, box_size, box_size);
		}
	}
	/**
	* Renders the node's title text.
	*/
	drawTitleText(ctx, { scale, default_title_color, low_quality = false, title_height = LiteGraph.NODE_TITLE_HEIGHT }) {
		const size = this.renderingSize;
		const selected = this.selected;
		if (this.onDrawTitleText) {
			this.onDrawTitleText(ctx, title_height, size, scale, this.titleFontStyle, selected);
			return;
		}
		if (low_quality) return;
		ctx.font = this.titleFontStyle;
		const rawTitle = this.getTitle() ?? `❌ ${this.type}`;
		const title = String(rawTitle) + (this.pinned ? "📌" : "");
		if (title) {
			if (selected) ctx.fillStyle = LiteGraph.NODE_SELECTED_TITLE_COLOR;
			else ctx.fillStyle = this.constructor.title_text_color || default_title_color;
			let availableWidth = size[0] - title_height * 2;
			if (this.title_buttons?.length > 0) {
				let buttonsWidth = 0;
				const savedFont = ctx.font;
				for (const button of this.title_buttons) if (button.visible) buttonsWidth += button.getWidth(ctx) + 2;
				ctx.font = savedFont;
				if (buttonsWidth > 0) {
					buttonsWidth -= 20;
					availableWidth -= buttonsWidth;
				}
			}
			let displayTitle = title;
			if (this.collapsed) displayTitle = title.substr(0, 20);
			else if (availableWidth > 0) displayTitle = truncateText(ctx, title, availableWidth);
			ctx.textAlign = "left";
			ctx.fillText(displayTitle, title_height, LiteGraph.NODE_TITLE_TEXT_Y - title_height);
		}
	}
	/**
	* Attempts to gracefully bypass this node in all of its connections by reconnecting all links.
	*
	* Each input is checked against each output.  This is done on a matching index basis, i.e. input 3 -> output 3.
	* If there are any input links remaining,
	* and {@link flags}.{@link INodeFlags.keepAllLinksOnBypass keepAllLinksOnBypass} is `true`,
	* each input will check for outputs that match, and take the first one that matches
	* `true`: Try the index matching first, then every input to every output.
	* `false`: Only matches indexes, e.g. input 3 to output 3.
	*
	* If {@link flags}.{@link INodeFlags.keepAllLinksOnBypass keepAllLinksOnBypass} is `undefined`, it will fall back to
	* the static {@link keepAllLinksOnBypass}.
	* @returns `true` if any new links were established, otherwise `false`.
	* @todo Decision: Change API to return array of new links instead?
	*/
	connectInputToOutput() {
		const { inputs, outputs, graph } = this;
		if (!inputs || !outputs) return;
		if (!graph) throw new NullGraphError();
		const { _links } = graph;
		let madeAnyConnections = false;
		for (const [index, input] of inputs.entries()) {
			if (input.link == null) continue;
			const output = outputs[index];
			if (!output || !LiteGraph.isValidConnection(input.type, output.type)) continue;
			const inLink = _links.get(input.link);
			if (!inLink) continue;
			const inNode = graph.getNodeById(inLink?.origin_id);
			if (!inNode) continue;
			bypassAllLinks(output, inNode, inLink, graph);
		}
		if (!(this.flags.keepAllLinksOnBypass ?? LGraphNode.keepAllLinksOnBypass)) return madeAnyConnections;
		for (const input of inputs) {
			if (input.link == null) continue;
			const inLink = _links.get(input.link);
			if (!inLink) continue;
			const inNode = graph.getNodeById(inLink?.origin_id);
			if (!inNode) continue;
			for (const output of outputs) {
				if (!LiteGraph.isValidConnection(input.type, output.type)) continue;
				bypassAllLinks(output, inNode, inLink, graph);
				break;
			}
		}
		return madeAnyConnections;
		function bypassAllLinks(output, inNode, inLink, graph) {
			const outLinks = output.links?.map((x) => _links.get(x)).filter((x) => !!x);
			if (!outLinks?.length) return;
			for (const outLink of outLinks) {
				const outNode = graph.getNodeById(outLink.target_id);
				if (!outNode) continue;
				const result = inNode.connect(inLink.origin_slot, outNode, outLink.target_slot, inLink.parentId);
				madeAnyConnections ||= !!result;
			}
		}
	}
	/**
	* Returns `true` if the widget is visible, otherwise `false`.
	*/
	isWidgetVisible(widget) {
		return !(this.collapsed || widget.hidden || widget.advanced && !this.showAdvanced);
	}
	/**
	* Returns all widgets that should participate in layout calculations.
	* Filters out hidden widgets only (not collapsed/advanced).
	*/
	getLayoutWidgets() {
		return this.widgets?.filter((w) => !w.hidden) ?? [];
	}
	/**
	* Returns `true` if the node has any advanced widgets.
	*/
	hasAdvancedWidgets() {
		return this.widgets?.some((w) => w.advanced) ?? false;
	}
	updateComputedDisabled() {
		if (!this.widgets) return;
		for (const widget of this.widgets) widget.computedDisabled = widget.disabled || this.getSlotFromWidget(widget)?.link != null;
	}
	drawWidgets(ctx, { lowQuality = false, editorAlpha = 1 }) {
		if (!this.widgets) return;
		const nodeWidth = this.size[0];
		const { widgets } = this;
		const H = LiteGraph.NODE_WIDGET_HEIGHT;
		const showText = !lowQuality;
		ctx.save();
		ctx.globalAlpha = editorAlpha;
		this.updateComputedDisabled();
		for (const widget of widgets) {
			if (!this.isWidgetVisible(widget)) continue;
			const { y } = widget;
			const outlineColour = widget.advanced ? LiteGraph.WIDGET_ADVANCED_OUTLINE_COLOR : LiteGraph.WIDGET_OUTLINE_COLOR;
			widget.last_y = y;
			ctx.strokeStyle = outlineColour;
			ctx.fillStyle = "#222";
			ctx.textAlign = "left";
			if (widget.computedDisabled) ctx.globalAlpha *= .5;
			const width = widget.width || nodeWidth;
			if (typeof widget.draw === "function") widget.draw(ctx, this, width, y, H, lowQuality);
			else toConcreteWidget(widget, this, false)?.drawWidget(ctx, {
				width,
				showText
			});
			ctx.globalAlpha = editorAlpha;
		}
		ctx.restore();
	}
	/**
	* When {@link LGraphNode.collapsed} is `true`, this method draws the node's collapsed slots.
	*/
	drawCollapsedSlots(ctx) {
		for (const slot of this._concreteInputs) if (slot.link != null) {
			slot.drawCollapsed(ctx);
			break;
		}
		for (const slot of this._concreteOutputs) if (slot.links?.length) {
			slot.drawCollapsed(ctx);
			break;
		}
	}
	get slots() {
		return [...this.inputs, ...this.outputs];
	}
	_measureSlot(slot, slotIndex, isInput) {
		const pos = isInput ? this.getInputPos(slotIndex) : this.getOutputPos(slotIndex);
		slot.boundingRect[0] = pos[0] - LiteGraph.NODE_SLOT_HEIGHT * .5;
		slot.boundingRect[1] = pos[1] - LiteGraph.NODE_SLOT_HEIGHT * .5;
		slot.boundingRect[2] = slot.isWidgetInputSlot ? BaseWidget.margin : LiteGraph.NODE_SLOT_HEIGHT;
		slot.boundingRect[3] = LiteGraph.NODE_SLOT_HEIGHT;
	}
	_measureSlots() {
		const slots = [];
		for (const [slotIndex, slot] of this._concreteInputs.entries()) {
			/** Widget input slots are handled in {@link layoutWidgetInputSlots} */
			if (this.widgets?.length && isWidgetInputSlot(slot)) continue;
			this._measureSlot(slot, slotIndex, true);
			slots.push(slot);
		}
		for (const [slotIndex, slot] of this._concreteOutputs.entries()) {
			this._measureSlot(slot, slotIndex, false);
			slots.push(slot);
		}
		return slots.length ? createBounds(slots, 0) : null;
	}
	_getMouseOverSlot(slot) {
		const isInput = isINodeInputSlot(slot);
		const mouseOverId = this.mouseOver?.[isInput ? "inputId" : "outputId"] ?? -1;
		if (mouseOverId === -1) return null;
		return isInput ? this.inputs[mouseOverId] : this.outputs[mouseOverId];
	}
	_isMouseOverSlot(slot) {
		return this._getMouseOverSlot(slot) === slot;
	}
	_isMouseOverWidget(widget) {
		if (!widget) return false;
		return this.mouseOver?.overWidget === widget;
	}
	/**
	* Returns the input slot that is associated with the given widget.
	*/
	getSlotFromWidget(widget) {
		if (widget) return this.inputs.find((slot) => isWidgetInputSlot(slot) && slot.widget.name === widget.name);
	}
	/**
	* Returns the widget that is associated with the given input slot.
	*/
	getWidgetFromSlot(slot) {
		if (!isWidgetInputSlot(slot)) return;
		return this.widgets?.find((w) => w.name === slot.widget.name);
	}
	/**
	* Draws the node's input and output slots.
	*/
	drawSlots(ctx, { fromSlot, colorContext, editorAlpha, lowQuality }) {
		for (const slot of [...this._concreteInputs, ...this._concreteOutputs]) {
			const isValidTarget = fromSlot && slot.isValidTarget(fromSlot);
			const isMouseOverSlot = this._isMouseOverSlot(slot);
			const isValid = !fromSlot || isValidTarget;
			const highlight = isValid && isMouseOverSlot;
			if (isMouseOverSlot || isValidTarget || !slot.isWidgetInputSlot || this._isMouseOverWidget(this.getWidgetFromSlot(slot)) || slot.isConnected || slot.alwaysVisible) {
				ctx.globalAlpha = isValid ? editorAlpha : .4 * editorAlpha;
				slot.draw(ctx, {
					colorContext,
					lowQuality,
					highlight
				});
			}
		}
	}
	/**
	* Arranges the node's widgets vertically.
	* Sets following properties on each widget:
	* -  {@link IBaseWidget.computedHeight}
	* -  {@link IBaseWidget.y}
	* @param widgetStartY The y-coordinate of the first widget
	*/
	_arrangeWidgets(widgetStartY) {
		if (!this.widgets || !this.widgets.length) return;
		const bodyHeight = this.bodyHeight;
		const startY = this.widgets_start_y ?? (this.widgets_up ? 0 : widgetStartY) + 2;
		let freeSpace = bodyHeight - startY;
		let fixedWidgetHeight = 0;
		const growableWidgets = [];
		const visibleWidgets = this.getLayoutWidgets();
		for (const w of visibleWidgets) if (w.computeSize) {
			const height = w.computeSize()[1] + 4;
			w.computedHeight = height;
			fixedWidgetHeight += height;
		} else if (w.computeLayoutSize) {
			const { minHeight, maxHeight } = w.computeLayoutSize(this);
			growableWidgets.push({
				minHeight,
				prefHeight: maxHeight,
				w
			});
		} else {
			const height = LiteGraph.NODE_WIDGET_HEIGHT + 4;
			w.computedHeight = height;
			fixedWidgetHeight += height;
		}
		freeSpace -= fixedWidgetHeight;
		this.freeWidgetSpace = freeSpace;
		const spaceRequests = growableWidgets.map((d) => ({
			minSize: d.minHeight,
			maxSize: d.prefHeight
		}));
		const allocations = distributeSpace(Math.max(0, freeSpace), spaceRequests);
		for (const [i, d] of growableWidgets.entries()) d.w.computedHeight = allocations[i];
		let y = startY;
		for (const w of visibleWidgets) {
			w.y = y;
			y += w.computedHeight ?? 0;
		}
		if (!this.graph) throw new NullGraphError();
		if (!LiteGraph.vueNodesMode && y > bodyHeight) {
			this.setSize([this.size[0], y]);
			this.graph.setDirtyCanvas(false, true);
		}
	}
	/**
	* Arranges the layout of the node's widget input slots.
	*/
	_arrangeWidgetInputSlots() {
		if (!this.widgets?.length) return;
		const widgetByName = /* @__PURE__ */ new Map();
		for (const w of this.widgets) widgetByName.set(w.name, w);
		for (const [i, slot] of this._concreteInputs.entries()) {
			if (!isWidgetInputSlot(slot)) continue;
			const widget = slot._widget ?? widgetByName.get(slot.widget.name);
			if (!widget) continue;
			const offset = LiteGraph.NODE_SLOT_HEIGHT * .5;
			slot.pos = [offset, widget.y + offset];
			this._measureSlot(slot, i, true);
		}
	}
	/**
	* @internal Sets the internal concrete slot arrays, ensuring they are instances of
	* {@link NodeInputSlot} or {@link NodeOutputSlot}.
	*
	* A temporary workaround until duck-typed inputs and outputs
	* have been removed from the ecosystem.
	*/
	_setConcreteSlots() {
		this._concreteInputs = this.inputs.map((slot) => toClass(NodeInputSlot, slot, this));
		this._concreteOutputs = this.outputs.map((slot) => toClass(NodeOutputSlot, slot, this));
	}
	/**
	* Arranges node elements in preparation for rendering (slots & widgets).
	*/
	arrange() {
		const slotsBounds = this._measureSlots();
		const widgetStartY = slotsBounds ? slotsBounds[1] + slotsBounds[3] - this.pos[1] : 0;
		this._arrangeWidgets(widgetStartY);
		this._arrangeWidgetInputSlots();
		this._widgetSlotsDirty = false;
	}
	/**
	* Draws a progress bar on the node.
	* @param ctx The canvas context to draw on
	*/
	drawProgressBar(ctx) {
		if (!this.progress) return;
		const originalFillStyle = ctx.fillStyle;
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, this.width * this.progress, 6);
		ctx.fillStyle = originalFillStyle;
	}
};
//#endregion
//#region src/lib/litegraph/src/LGraphGroup.ts
var LGraphGroup = class LGraphGroup {
	static minWidth = 140;
	static minHeight = 80;
	static resizeLength = 10;
	static padding = 4;
	static defaultColour = "#335";
	id;
	color;
	title;
	font;
	font_size = LiteGraph.GROUP_TEXT_SIZE;
	_bounding = new Rectangle(10, 10, LGraphGroup.minWidth, LGraphGroup.minHeight);
	_pos = this._bounding.pos;
	_size = this._bounding.size;
	/** @deprecated See {@link _children} */
	_nodes = [];
	_children = /* @__PURE__ */ new Set();
	graph;
	flags = {};
	selected;
	constructor(title, id) {
		this.id = id ?? -1;
		this.title = title || "Group";
		const { pale_blue } = LGraphCanvas.node_colors;
		this.color = pale_blue ? pale_blue.groupcolor : "#AAA";
	}
	/** @inheritdoc {@link IColorable.setColorOption} */
	setColorOption(colorOption) {
		if (colorOption == null) delete this.color;
		else this.color = colorOption.groupcolor;
	}
	/** @inheritdoc {@link IColorable.getColorOption} */
	getColorOption() {
		return Object.values(LGraphCanvas.node_colors).find((colorOption) => colorOption.groupcolor === this.color) ?? null;
	}
	/** Position of the group, as x,y co-ordinates in graph space */
	get pos() {
		return this._pos;
	}
	set pos(v) {
		if (!v || v.length < 2) return;
		this._pos[0] = v[0];
		this._pos[1] = v[1];
	}
	/** Size of the group, as width,height in graph units */
	get size() {
		return this._size;
	}
	set size(v) {
		if (!v || v.length < 2) return;
		this._size[0] = Math.max(LGraphGroup.minWidth, v[0]);
		this._size[1] = Math.max(LGraphGroup.minHeight, v[1]);
	}
	get boundingRect() {
		return this._bounding;
	}
	getBounding() {
		return this._bounding;
	}
	get nodes() {
		return this._nodes;
	}
	get titleHeight() {
		return LiteGraph.NODE_TITLE_HEIGHT;
	}
	get children() {
		return this._children;
	}
	get pinned() {
		return !!this.flags.pinned;
	}
	/**
	* Prevents the group being accidentally moved or resized by mouse interaction.
	* Toggles pinned state if no value is provided.
	*/
	pin(value) {
		if (value === void 0 ? !this.pinned : value) this.flags.pinned = true;
		else delete this.flags.pinned;
	}
	unpin() {
		this.pin(false);
	}
	configure(o) {
		this.id = o.id;
		this.title = o.title;
		this._bounding.set(o.bounding);
		this.color = o.color;
		this.flags = o.flags || this.flags;
	}
	serialize() {
		const b = this._bounding;
		return {
			id: this.id,
			title: this.title,
			bounding: [...b],
			color: this.color,
			flags: this.flags
		};
	}
	/**
	* Draws the group on the canvas
	* @param graphCanvas
	* @param ctx
	*/
	draw(graphCanvas, ctx) {
		const { padding, resizeLength, defaultColour } = LGraphGroup;
		const font_size = LiteGraph.GROUP_TEXT_SIZE;
		const [x, y] = this._pos;
		const [width, height] = this._size;
		const color = this.color || defaultColour;
		ctx.globalAlpha = .25 * graphCanvas.editor_alpha;
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.rect(x + .5, y + .5, width, LiteGraph.NODE_TITLE_HEIGHT);
		ctx.fill();
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.rect(x + .5, y + .5, width, height);
		ctx.fill();
		ctx.globalAlpha = graphCanvas.editor_alpha;
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(x + width, y + height);
		ctx.lineTo(x + width - resizeLength, y + height);
		ctx.lineTo(x + width, y + height - resizeLength);
		ctx.fill();
		ctx.font = `${font_size}px ${LiteGraph.GROUP_FONT}`;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillText(this.title + (this.pinned ? "📌" : ""), x + font_size / 2, y + LiteGraph.NODE_TITLE_HEIGHT / 2 + 1);
		ctx.textBaseline = "alphabetic";
		if (LiteGraph.highlight_selected_group && this.selected) strokeShape(ctx, this._bounding, {
			title_height: this.titleHeight,
			padding
		});
	}
	resize(width, height) {
		if (this.pinned) return false;
		this._size[0] = Math.max(LGraphGroup.minWidth, width);
		this._size[1] = Math.max(LGraphGroup.minHeight, height);
		return true;
	}
	move(deltaX, deltaY, skipChildren = false) {
		if (this.pinned) return;
		this._pos[0] += deltaX;
		this._pos[1] += deltaY;
		if (skipChildren === true) return;
		for (const item of this._children) item.move(deltaX, deltaY);
	}
	/** @inheritdoc */
	snapToGrid(snapTo) {
		return this.pinned ? false : snapPoint(this.pos, snapTo);
	}
	/**
	* Recomputes which items (nodes, reroutes, nested groups) are inside this group.
	* Recursively processes nested groups to ensure their children are also computed.
	* @param maxDepth Maximum recursion depth for nested groups. Use 1 to skip nested group computation.
	* @param visited Set of already visited group IDs to prevent redundant computation.
	*/
	recomputeInsideNodes(maxDepth = 100, visited = /* @__PURE__ */ new Set()) {
		if (!this.graph) throw new NullGraphError();
		if (maxDepth <= 0 || visited.has(this.id)) return;
		visited.add(this.id);
		const { nodes, reroutes, groups } = this.graph;
		const children = this._children;
		this._nodes.length = 0;
		children.clear();
		for (const node of nodes) if (containsCentre(this._bounding, node.boundingRect)) {
			this._nodes.push(node);
			children.add(node);
		}
		for (const reroute of reroutes.values()) if (isPointInRect(reroute.pos, this._bounding)) children.add(reroute);
		const containedGroups = [];
		for (const group of groups) if (group !== this && containsRect(this._bounding, group._bounding)) {
			children.add(group);
			containedGroups.push(group);
		}
		for (const group of containedGroups) group.recomputeInsideNodes(maxDepth - 1, visited);
		groups.sort((a, b) => {
			if (a === this) return children.has(b) ? -1 : 0;
			else if (b === this) return children.has(a) ? 1 : 0;
			else return 0;
		});
	}
	/**
	* Resizes and moves the group to neatly fit all given {@link objects}.
	* @param objects All objects that should be inside the group
	* @param padding Value in graph units to add to all sides of the group.  Default: 10
	*/
	resizeTo(objects, padding = 10) {
		const boundingBox = createBounds(objects, padding);
		if (boundingBox === null) return;
		this.pos[0] = boundingBox[0];
		this.pos[1] = boundingBox[1] - this.titleHeight;
		this.size[0] = boundingBox[2];
		this.size[1] = boundingBox[3] + this.titleHeight;
	}
	/**
	* Add nodes to the group and adjust the group's position and size accordingly
	* @param nodes The nodes to add to the group
	* @param padding The padding around the group
	*/
	addNodes(nodes, padding = 10) {
		if (!this._nodes && nodes.length === 0) return;
		this.resizeTo([
			...this.children,
			...this._nodes,
			...nodes
		], padding);
	}
	getMenuOptions() {
		return [
			{
				content: this.pinned ? "Unpin" : "Pin",
				callback: () => {
					if (this.pinned) this.unpin();
					else this.pin();
					this.setDirtyCanvas(false, true);
				}
			},
			null,
			{
				content: "Title",
				callback: LGraphCanvas.onShowPropertyEditor
			},
			{
				content: "Color",
				has_submenu: true,
				callback: LGraphCanvas.onMenuNodeColors
			},
			{
				content: "Font size",
				property: "font_size",
				type: "Number",
				callback: LGraphCanvas.onShowPropertyEditor
			},
			null,
			{
				content: "Remove",
				callback: LGraphCanvas.onMenuNodeRemove
			}
		];
	}
	isPointInTitlebar(x, y) {
		const b = this.boundingRect;
		return isInRectangle(x, y, b[0], b[1], b[2], this.titleHeight);
	}
	isInResize(x, y) {
		const b = this.boundingRect;
		const right = b[0] + b[2];
		const bottom = b[1] + b[3];
		return x < right && y < bottom && x - right + (y - bottom) > -LGraphGroup.resizeLength;
	}
	isPointInside(x, y) {
		return isInRect(x, y, this.boundingRect);
	}
	setDirtyCanvas = LGraphNode.prototype.setDirtyCanvas;
};
//#endregion
//#region src/lib/litegraph/src/canvas/FloatingRenderLink.ts
/**
* Represents a floating link that is currently being dragged from one slot to another.
*
* This is a heavier, but short-lived convenience data structure. All refs to FloatingRenderLinks should be discarded on drop.
* @remarks
* At time of writing, Litegraph is using several different styles and methods to handle link dragging.
*
* Once the library has undergone more substantial changes to the way links are managed,
* many properties of this class will be superfluous and removable.
*/
var FloatingRenderLink = class {
	node;
	fromSlot;
	fromPos;
	fromDirection;
	fromSlotIndex;
	outputNodeId = -1;
	outputNode;
	outputSlot;
	outputIndex = -1;
	outputPos;
	inputNodeId = -1;
	inputNode;
	inputSlot;
	inputIndex = -1;
	inputPos;
	constructor(network, link, toType, fromReroute, dragDirection = LinkDirection.CENTER) {
		this.network = network;
		this.link = link;
		this.toType = toType;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const { origin_id: outputNodeId, target_id: inputNodeId, origin_slot: outputIndex, target_slot: inputIndex } = link;
		if (outputNodeId !== -1) {
			const outputNode = network.getNodeById(outputNodeId) ?? void 0;
			if (!outputNode) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Output node [${outputNodeId}] not found.`);
			const outputSlot = outputNode?.outputs.at(outputIndex);
			if (!outputSlot) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Output slot [${outputIndex}] not found.`);
			this.outputNodeId = outputNodeId;
			this.outputNode = outputNode;
			this.outputSlot = outputSlot;
			this.outputIndex = outputIndex;
			this.outputPos = outputNode.getOutputPos(outputIndex);
			this.node = outputNode;
			this.fromSlot = outputSlot;
			this.fromPos = fromReroute?.pos ?? this.outputPos;
			this.fromDirection = LinkDirection.LEFT;
			this.dragDirection = LinkDirection.RIGHT;
			this.fromSlotIndex = outputIndex;
		} else {
			const inputNode = network.getNodeById(inputNodeId) ?? void 0;
			if (!inputNode) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Input node [${inputNodeId}] not found.`);
			const inputSlot = inputNode?.inputs.at(inputIndex);
			if (!inputSlot) throw new Error(`Creating DraggingRenderLink for link [${link.id}] failed: Input slot [${inputIndex}] not found.`);
			this.inputNodeId = inputNodeId;
			this.inputNode = inputNode;
			this.inputSlot = inputSlot;
			this.inputIndex = inputIndex;
			this.inputPos = inputNode.getInputPos(inputIndex);
			this.node = inputNode;
			this.fromSlot = inputSlot;
			this.fromDirection = LinkDirection.RIGHT;
			this.fromSlotIndex = inputIndex;
		}
		this.fromPos = fromReroute.pos;
	}
	canConnectToInput() {
		return this.toType === "input";
	}
	canConnectToOutput() {
		return this.toType === "output";
	}
	canConnectToReroute(reroute) {
		if (this.toType === "input") {
			if (reroute.origin_id === this.inputNode?.id) return false;
		} else if (reroute.origin_id === this.outputNode?.id) return false;
		return true;
	}
	canConnectToSubgraphInput(input) {
		return this.toType === "output" && input.isValidTarget(this.fromSlot);
	}
	connectToInput(node, input, _events) {
		const floatingLink = this.link;
		floatingLink.target_id = node.id;
		floatingLink.target_slot = node.inputs.indexOf(input);
		node.disconnectInput(node.inputs.indexOf(input));
		this.fromSlot._floatingLinks?.delete(floatingLink);
		input._floatingLinks ??= /* @__PURE__ */ new Set();
		input._floatingLinks.add(floatingLink);
	}
	connectToOutput(node, output, _events) {
		const floatingLink = this.link;
		floatingLink.origin_id = node.id;
		floatingLink.origin_slot = node.outputs.indexOf(output);
		this.fromSlot._floatingLinks?.delete(floatingLink);
		output._floatingLinks ??= /* @__PURE__ */ new Set();
		output._floatingLinks.add(floatingLink);
	}
	connectToSubgraphInput(input, _events) {
		const floatingLink = this.link;
		floatingLink.origin_id = -10;
		floatingLink.origin_slot = input.parent.slots.indexOf(input);
		this.fromSlot._floatingLinks?.delete(floatingLink);
		input._floatingLinks ??= /* @__PURE__ */ new Set();
		input._floatingLinks.add(floatingLink);
	}
	connectToSubgraphOutput(output, _events) {
		const floatingLink = this.link;
		floatingLink.origin_id = -20;
		floatingLink.origin_slot = output.parent.slots.indexOf(output);
		this.fromSlot._floatingLinks?.delete(floatingLink);
		output._floatingLinks ??= /* @__PURE__ */ new Set();
		output._floatingLinks.add(floatingLink);
	}
	connectToRerouteInput(reroute, { node: inputNode, input }, events) {
		const floatingLink = this.link;
		floatingLink.target_id = inputNode.id;
		floatingLink.target_slot = inputNode.inputs.indexOf(input);
		this.fromSlot._floatingLinks?.delete(floatingLink);
		input._floatingLinks ??= /* @__PURE__ */ new Set();
		input._floatingLinks.add(floatingLink);
		events.dispatch("input-moved", this);
	}
	connectToRerouteOutput(reroute, outputNode, output, events) {
		const floatingLink = this.link;
		floatingLink.origin_id = outputNode.id;
		floatingLink.origin_slot = outputNode.outputs.indexOf(output);
		this.fromSlot._floatingLinks?.delete(floatingLink);
		output._floatingLinks ??= /* @__PURE__ */ new Set();
		output._floatingLinks.add(floatingLink);
		events.dispatch("output-moved", this);
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/MovingOutputLink.ts
var MovingOutputLink = class extends MovingLinkBase {
	toType = "output";
	node;
	fromSlot;
	fromPos;
	fromDirection;
	fromSlotIndex;
	constructor(network, link, fromReroute, dragDirection = LinkDirection.CENTER) {
		super(network, link, "output", fromReroute, dragDirection);
		this.node = this.inputNode;
		this.fromSlot = this.inputSlot;
		this.fromPos = fromReroute?.pos ?? this.inputPos;
		this.fromDirection = LinkDirection.LEFT;
		this.fromSlotIndex = this.inputIndex;
	}
	canConnectToInput() {
		return false;
	}
	canConnectToOutput(outputNode, output) {
		return outputNode.canConnectTo(this.node, this.inputSlot, output);
	}
	canConnectToReroute(reroute) {
		return reroute.origin_id !== this.outputNode.id;
	}
	canConnectToSubgraphInput(input) {
		return input.isValidTarget(this.fromSlot);
	}
	connectToInput() {
		throw new Error("MovingOutputLink cannot connect to an input.");
	}
	connectToOutput(outputNode, output, events) {
		if (output === this.outputSlot) return;
		const link = outputNode.connectSlots(output, this.inputNode, this.inputSlot, this.link.parentId);
		if (link) events.dispatch("output-moved", this);
		return link;
	}
	connectToSubgraphInput(input, events) {
		const newLink = input.connect(this.fromSlot, this.node, this.fromReroute?.id);
		events?.dispatch("link-created", newLink);
	}
	connectToSubgraphOutput() {
		throw new Error("MovingOutputLink cannot connect to a subgraph output.");
	}
	connectToRerouteInput() {
		throw new Error("MovingOutputLink cannot connect to an input.");
	}
	connectToRerouteOutput(reroute, outputNode, output, events) {
		const { inputNode, inputSlot, fromReroute } = this;
		const floatingTerminus = reroute?.floating?.slotType === "output";
		if (fromReroute) fromReroute.parentId = reroute.id;
		else this.link.parentId = reroute.id;
		outputNode.connectSlots(output, inputNode, inputSlot, this.link.parentId);
		if (floatingTerminus) reroute.removeAllFloatingLinks();
		events.dispatch("output-moved", this);
	}
	disconnect() {
		return this.outputNode.disconnectOutput(this.outputIndex, this.inputNode);
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/ToInputFromIoNodeLink.ts
/** Connecting TO an input slot. */
var ToInputFromIoNodeLink = class {
	toType = "input";
	fromSlotIndex;
	fromPos;
	fromDirection = LinkDirection.RIGHT;
	existingLink;
	constructor(network, node, fromSlot, fromReroute, dragDirection = LinkDirection.CENTER, existingLink) {
		this.network = network;
		this.node = node;
		this.fromSlot = fromSlot;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const outputIndex = node.slots.indexOf(fromSlot);
		if (outputIndex === -1 && fromSlot !== node.emptySlot) throw new Error(`Creating render link for node [${this.node.id}] failed: Slot index not found.`);
		this.fromSlotIndex = outputIndex;
		this.fromPos = fromReroute ? fromReroute.pos : fromSlot.pos;
		this.existingLink = existingLink;
	}
	canConnectToInput(inputNode, input) {
		return this.node.canConnectTo(inputNode, input, this.fromSlot);
	}
	canConnectToOutput() {
		return false;
	}
	connectToInput(node, input, events) {
		const { fromSlot, fromReroute, existingLink } = this;
		if (existingLink && node.id === existingLink.target_id && node.inputs[existingLink.target_slot] === input) return;
		const newLink = fromSlot.connect(input, node, fromReroute?.id);
		if (existingLink) {
			const { input, inputNode } = existingLink.resolve(this.network);
			if (inputNode && input) this.node._disconnectNodeInput(inputNode, input, existingLink);
			events.dispatch("input-moved", this);
			fromSlot.events.dispatch("input-disconnected", { input: fromSlot });
		} else events.dispatch("link-created", newLink);
	}
	connectToSubgraphOutput() {
		throw new Error("Not implemented");
	}
	connectToRerouteInput(reroute, { node: inputNode, input, link }, events, originalReroutes) {
		const { fromSlot, fromReroute } = this;
		const floatingTerminus = fromReroute?.floating?.slotType === "output";
		reroute.parentId = fromReroute?.id;
		const newLink = fromSlot.connect(input, inputNode, link.parentId);
		if (floatingTerminus) fromReroute.removeAllFloatingLinks();
		for (const reroute of originalReroutes) {
			if (reroute.id === fromReroute?.id) break;
			reroute.removeLink(link);
			if (reroute.totalLinks === 0) if (link.isFloating) reroute.remove();
			else {
				const cl = link.toFloating("output", reroute.id);
				this.network.addFloatingLink(cl);
				reroute.floating = { slotType: "output" };
			}
		}
		if (this.existingLink) events.dispatch("input-moved", this);
		else events.dispatch("link-created", newLink);
	}
	connectToOutput() {
		throw new Error("ToInputRenderLink cannot connect to an output.");
	}
	connectToSubgraphInput() {
		throw new Error("ToInputRenderLink cannot connect to a subgraph input.");
	}
	connectToRerouteOutput() {
		throw new Error("ToInputRenderLink cannot connect to an output.");
	}
	disconnect() {
		if (!this.existingLink) return false;
		const { input, inputNode, subgraphInput } = this.existingLink.resolve(this.network);
		if (!inputNode || !input) return false;
		this.node._disconnectNodeInput(inputNode, input, this.existingLink);
		if (subgraphInput) subgraphInput.events.dispatch("input-disconnected", { input: subgraphInput });
		return true;
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/ToInputRenderLink.ts
/** Connecting TO an input slot. */
var ToInputRenderLink = class {
	toType = "input";
	fromPos;
	fromSlotIndex;
	fromDirection = LinkDirection.RIGHT;
	constructor(network, node, fromSlot, fromReroute, dragDirection = LinkDirection.CENTER) {
		this.network = network;
		this.node = node;
		this.fromSlot = fromSlot;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const outputIndex = node.outputs.indexOf(fromSlot);
		if (outputIndex === -1) throw new Error(`Creating render link for node [${this.node.id}] failed: Slot index not found.`);
		this.fromSlotIndex = outputIndex;
		this.fromPos = fromReroute ? fromReroute.pos : this.node.getOutputPos(outputIndex);
	}
	canConnectToInput(inputNode, input) {
		return this.node.canConnectTo(inputNode, input, this.fromSlot);
	}
	canConnectToOutput() {
		return false;
	}
	connectToInput(node, input, events) {
		const { node: outputNode, fromSlot, fromReroute } = this;
		if (node === outputNode) return;
		const newLink = outputNode.connectSlots(fromSlot, node, input, fromReroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToSubgraphOutput(output, events) {
		const newLink = output.connect(this.fromSlot, this.node, this.fromReroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToRerouteInput(reroute, { node: inputNode, input, link }, events, originalReroutes) {
		const { node: outputNode, fromSlot, fromReroute } = this;
		const floatingTerminus = fromReroute?.floating?.slotType === "output";
		reroute.parentId = fromReroute?.id;
		const newLink = outputNode.connectSlots(fromSlot, inputNode, input, link.parentId);
		if (floatingTerminus) fromReroute.removeAllFloatingLinks();
		for (const reroute of originalReroutes) {
			if (reroute.id === fromReroute?.id) break;
			reroute.removeLink(link);
			if (reroute.totalLinks === 0) if (link.isFloating) reroute.remove();
			else {
				const cl = link.toFloating("output", reroute.id);
				this.network.addFloatingLink(cl);
				reroute.floating = { slotType: "output" };
			}
		}
		events.dispatch("link-created", newLink);
	}
	connectToOutput() {
		throw new Error("ToInputRenderLink cannot connect to an output.");
	}
	connectToSubgraphInput() {
		throw new Error("ToInputRenderLink cannot connect to a subgraph input.");
	}
	connectToRerouteOutput() {
		throw new Error("ToInputRenderLink cannot connect to an output.");
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/ToOutputFromIoNodeLink.ts
/** Connecting TO an output slot. */
var ToOutputFromIoNodeLink = class {
	toType = "output";
	fromPos;
	fromSlotIndex;
	fromDirection = LinkDirection.LEFT;
	constructor(network, node, fromSlot, fromReroute, dragDirection = LinkDirection.CENTER) {
		this.network = network;
		this.node = node;
		this.fromSlot = fromSlot;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const inputIndex = node.slots.indexOf(fromSlot);
		if (inputIndex === -1 && fromSlot !== node.emptySlot) throw new Error(`Creating render link for node [${this.node.id}] failed: Slot index not found.`);
		this.fromSlotIndex = inputIndex;
		this.fromPos = fromReroute ? fromReroute.pos : fromSlot.pos;
	}
	canConnectToInput() {
		return false;
	}
	canConnectToOutput(outputNode, output) {
		return this.node.canConnectTo(outputNode, this.fromSlot, output);
	}
	canConnectToReroute(reroute) {
		if (reroute.origin_id === this.node.id) return false;
		return true;
	}
	connectToOutput(node, output, events) {
		const { fromSlot, fromReroute } = this;
		const newLink = fromSlot.connect(output, node, fromReroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToSubgraphInput() {
		throw new Error("Not implemented");
	}
	connectToRerouteOutput(reroute, outputNode, output, events) {
		const { fromSlot } = this;
		const newLink = fromSlot.connect(output, outputNode, reroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToInput() {
		throw new Error("ToOutputRenderLink cannot connect to an input.");
	}
	connectToSubgraphOutput() {
		throw new Error("ToOutputRenderLink cannot connect to a subgraph output.");
	}
	connectToRerouteInput() {
		throw new Error("ToOutputRenderLink cannot connect to an input.");
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/ToOutputRenderLink.ts
/** Connecting TO an output slot. */
var ToOutputRenderLink = class {
	toType = "output";
	fromPos;
	fromSlotIndex;
	fromDirection = LinkDirection.LEFT;
	constructor(network, node, fromSlot, fromReroute, dragDirection = LinkDirection.CENTER) {
		this.network = network;
		this.node = node;
		this.fromSlot = fromSlot;
		this.fromReroute = fromReroute;
		this.dragDirection = dragDirection;
		const inputIndex = node.inputs.indexOf(fromSlot);
		if (inputIndex === -1) throw new Error(`Creating render link for node [${this.node.id}] failed: Slot index not found.`);
		this.fromSlotIndex = inputIndex;
		this.fromPos = fromReroute ? fromReroute.pos : this.node.getInputPos(inputIndex);
	}
	canConnectToInput() {
		return false;
	}
	canConnectToOutput(outputNode, output) {
		return this.node.canConnectTo(outputNode, this.fromSlot, output);
	}
	canConnectToReroute(reroute) {
		if (reroute.origin_id === this.node.id) return false;
		return true;
	}
	canConnectToSubgraphInput(input) {
		return input.isValidTarget(this.fromSlot);
	}
	connectToOutput(node, output, events) {
		const { node: inputNode, fromSlot, fromReroute } = this;
		if (!inputNode) return;
		const newLink = node.connectSlots(output, inputNode, fromSlot, fromReroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToSubgraphInput(input, events) {
		const newLink = input.connect(this.fromSlot, this.node, this.fromReroute?.id);
		events?.dispatch("link-created", newLink);
	}
	connectToRerouteOutput(reroute, outputNode, output, events) {
		const { node: inputNode, fromSlot } = this;
		const newLink = outputNode.connectSlots(output, inputNode, fromSlot, reroute?.id);
		events.dispatch("link-created", newLink);
	}
	connectToInput() {
		throw new Error("ToOutputRenderLink cannot connect to an input.");
	}
	connectToSubgraphOutput() {
		throw new Error("ToOutputRenderLink cannot connect to a subgraph output.");
	}
	connectToRerouteInput() {
		throw new Error("ToOutputRenderLink cannot connect to an input.");
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/ToOutputFromRerouteLink.ts
/**
* @internal A workaround class to support connecting to reroutes to node outputs.
*/
var ToOutputFromRerouteLink = class extends ToOutputRenderLink {
	constructor(network, node, fromSlot, fromReroute, linkConnector) {
		super(network, node, fromSlot, fromReroute);
		this.fromReroute = fromReroute;
		this.linkConnector = linkConnector;
	}
	canConnectToReroute() {
		return false;
	}
	connectToOutput(node, output) {
		const nuRenderLink = new ToInputRenderLink(this.network, node, output);
		this.linkConnector._connectOutputToReroute(this.fromReroute, nuRenderLink);
	}
};
//#endregion
//#region src/lib/litegraph/src/canvas/LinkConnector.ts
/**
* Component of {@link LGraphCanvas} that handles connecting and moving links.
* @see {@link LLink}
*/
var LinkConnector = class {
	/**
	* Link connection state POJO. Source of truth for state of link drag operations.
	*
	* Can be replaced or proxied to allow notifications.
	* Is always dereferenced at the start of an operation.
	*/
	state = {
		connectingTo: void 0,
		multi: false,
		draggingExistingLinks: false,
		snapLinksPos: void 0
	};
	events = new CustomEventTarget();
	/** Contains information for rendering purposes only. */
	renderLinks = [];
	/** Existing links that are being moved **to** a new input slot. */
	inputLinks = [];
	/** Existing links that are being moved **to** a new output slot. */
	outputLinks = [];
	/** Existing floating links that are being moved to a new slot. */
	floatingLinks = [];
	hiddenReroutes = /* @__PURE__ */ new Set();
	/** The widget beneath the pointer, if it is a valid connection target. */
	overWidget;
	/** The type (returned by downstream callback) for {@link overWidget} */
	overWidgetType;
	/** The reroute beneath the pointer, if it is a valid connection target. */
	overReroute;
	_setConnectingLinks;
	constructor(setConnectingLinks) {
		this._setConnectingLinks = setConnectingLinks;
	}
	get isConnecting() {
		return this.state.connectingTo !== void 0;
	}
	get draggingExistingLinks() {
		return this.state.draggingExistingLinks;
	}
	/** Drag an existing link to a different input. */
	moveInputLink(network, input, opts) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const { state, inputLinks, renderLinks } = this;
		const linkId = input.link;
		if (linkId == null) {
			const floatingLink = input._floatingLinks?.values().next().value;
			if (floatingLink?.parentId == null) return;
			try {
				const reroute = network.reroutes.get(floatingLink.parentId);
				if (!reroute) throw new Error(`Invalid reroute id: [${floatingLink.parentId}] for floating link id: [${floatingLink.id}].`);
				const renderLink = new FloatingRenderLink(network, floatingLink, "input", reroute);
				if (this.events.dispatch("before-move-input", renderLink) === false) return;
				renderLinks.push(renderLink);
			} catch (error) {
				console.warn(`Could not create render link for link id: [${floatingLink.id}].`, floatingLink, error);
			}
			floatingLink._dragging = true;
			this.floatingLinks.push(floatingLink);
		} else {
			const link = network.links.get(linkId);
			if (!link) return;
			if (link.origin_id === -10) {
				const subgraphInput = network.inputNode?.slots[link.origin_slot];
				if (!subgraphInput) {
					console.warn(`Could not find subgraph input for slot [${link.origin_slot}]`);
					return;
				}
				try {
					const reroute = network.getReroute(link.parentId);
					const renderLink = new ToInputFromIoNodeLink(network, network.inputNode, subgraphInput, reroute, LinkDirection.CENTER, link);
					renderLinks.push(renderLink);
					this.listenUntilReset("input-moved", () => {
						link.disconnect(network, "input");
					});
				} catch (error) {
					console.warn(`Could not create render link for subgraph input link id: [${link.id}].`, link, error);
					return;
				}
				link._dragging = true;
				inputLinks.push(link);
			} else {
				try {
					const renderLink = new MovingInputLink(network, link, network.getReroute(link.parentId), void 0, opts?.startPoint);
					if (this.events.dispatch("before-move-input", renderLink) === false) return;
					renderLinks.push(renderLink);
					this.listenUntilReset("input-moved", (e) => {
						if ("link" in e.detail && e.detail.link) e.detail.link.disconnect(network, "output");
					});
				} catch (error) {
					console.warn(`Could not create render link for link id: [${link.id}].`, link, error);
					return;
				}
				link._dragging = true;
				inputLinks.push(link);
			}
		}
		state.connectingTo = "input";
		state.draggingExistingLinks = true;
		this._setLegacyLinks(false);
	}
	/** Drag all links from an output to a new output. */
	moveOutputLink(network, output) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const { state, renderLinks } = this;
		if (output._floatingLinks?.size) for (const floatingLink of output._floatingLinks.values()) try {
			const reroute = LLink.getFirstReroute(network, floatingLink);
			if (!reroute) throw new Error(`Invalid reroute id: [${floatingLink.parentId}] for floating link id: [${floatingLink.id}].`);
			const renderLink = new FloatingRenderLink(network, floatingLink, "output", reroute);
			if (this.events.dispatch("before-move-output", renderLink) === false) continue;
			renderLinks.push(renderLink);
			this.floatingLinks.push(floatingLink);
		} catch (error) {
			console.warn(`Could not create render link for link id: [${floatingLink.id}].`, floatingLink, error);
		}
		if (output.links?.length) for (const linkId of output.links) {
			const link = network.links.get(linkId);
			if (!link) continue;
			const firstReroute = LLink.getFirstReroute(network, link);
			if (firstReroute) {
				firstReroute._dragging = true;
				this.hiddenReroutes.add(firstReroute);
			} else link._dragging = true;
			this.outputLinks.push(link);
			try {
				if (link.target_id === -20) {
					if (!(network instanceof Subgraph)) {
						console.warn("Subgraph output link found in non-subgraph network.");
						continue;
					}
					const output = network.outputs.at(link.target_slot);
					if (!output) throw new Error("No subgraph output found for link.");
					const renderLink = new ToOutputFromIoNodeLink(network, network.outputNode, output);
					renderLink.fromDirection = LinkDirection.NONE;
					renderLinks.push(renderLink);
					continue;
				}
				const renderLink = new MovingOutputLink(network, link, firstReroute, LinkDirection.RIGHT);
				if (this.events.dispatch("before-move-output", renderLink) === false) continue;
				renderLinks.push(renderLink);
			} catch (error) {
				console.warn(`Could not create render link for link id: [${link.id}].`, link, error);
				continue;
			}
		}
		if (renderLinks.length === 0) return;
		state.draggingExistingLinks = true;
		state.multi = true;
		state.connectingTo = "output";
		this._setLegacyLinks(true);
	}
	/**
	* Drags a new link from an output slot to an input slot.
	* @param network The network that the link being connected belongs to
	* @param node The node the link is being dragged from
	* @param output The output slot that the link is being dragged from
	*/
	dragNewFromOutput(network, node, output, fromReroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const { state } = this;
		const renderLink = new ToInputRenderLink(network, node, output, fromReroute);
		this.renderLinks.push(renderLink);
		state.connectingTo = "input";
		this._setLegacyLinks(false);
	}
	/**
	* Drags a new link from an input slot to an output slot.
	* @param network The network that the link being connected belongs to
	* @param node The node the link is being dragged from
	* @param input The input slot that the link is being dragged from
	*/
	dragNewFromInput(network, node, input, fromReroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const { state } = this;
		const renderLink = new ToOutputRenderLink(network, node, input, fromReroute);
		this.renderLinks.push(renderLink);
		state.connectingTo = "output";
		this._setLegacyLinks(true);
	}
	dragNewFromSubgraphInput(network, inputNode, input, fromReroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const renderLink = new ToInputFromIoNodeLink(network, inputNode, input, fromReroute);
		this.renderLinks.push(renderLink);
		this.state.connectingTo = "input";
		this._setLegacyLinks(false);
	}
	dragNewFromSubgraphOutput(network, outputNode, output, fromReroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const renderLink = new ToOutputFromIoNodeLink(network, outputNode, output, fromReroute);
		this.renderLinks.push(renderLink);
		this.state.connectingTo = "output";
		this._setLegacyLinks(true);
	}
	/**
	* Drags a new link from a reroute to an input slot.
	* @param network The network that the link being connected belongs to
	* @param reroute The reroute that the link is being dragged from
	*/
	dragFromReroute(network, reroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const link = reroute.firstLink ?? reroute.firstFloatingLink;
		if (!link) {
			console.warn("No link found for reroute.");
			return;
		}
		if (link.origin_id === -10) {
			if (!(network instanceof Subgraph)) {
				console.warn("Subgraph input link found in non-subgraph network.");
				return;
			}
			const input = network.inputs.at(link.origin_slot);
			if (!input) throw new Error("No subgraph input found for link.");
			const renderLink = new ToInputFromIoNodeLink(network, network.inputNode, input, reroute);
			renderLink.fromDirection = LinkDirection.NONE;
			this.renderLinks.push(renderLink);
			this.state.connectingTo = "input";
			this._setLegacyLinks(false);
			return;
		}
		const outputNode = network.getNodeById(link.origin_id);
		if (!outputNode) {
			console.warn("No output node found for link.", link);
			return;
		}
		const outputSlot = outputNode.outputs.at(link.origin_slot);
		if (!outputSlot) {
			console.warn("No output slot found for link.", link);
			return;
		}
		const renderLink = new ToInputRenderLink(network, outputNode, outputSlot, reroute);
		renderLink.fromDirection = LinkDirection.NONE;
		this.renderLinks.push(renderLink);
		this.state.connectingTo = "input";
		this._setLegacyLinks(false);
	}
	/**
	* Drags a new link from a reroute to an output slot.
	* @param network The network that the link being connected belongs to
	* @param reroute The reroute that the link is being dragged from
	*/
	dragFromRerouteToOutput(network, reroute) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const link = reroute.firstLink ?? reroute.firstFloatingLink;
		if (!link) {
			console.warn("No link found for reroute.");
			return;
		}
		if (link.target_id === -20) {
			if (!(network instanceof Subgraph)) {
				console.warn("Subgraph output link found in non-subgraph network.");
				return;
			}
			const output = network.outputs.at(link.target_slot);
			if (!output) throw new Error("No subgraph output found for link.");
			const renderLink = new ToOutputFromIoNodeLink(network, network.outputNode, output, reroute);
			renderLink.fromDirection = LinkDirection.NONE;
			this.renderLinks.push(renderLink);
			this.state.connectingTo = "output";
			this._setLegacyLinks(false);
			return;
		}
		const inputNode = network.getNodeById(link.target_id);
		if (!inputNode) {
			console.warn("No input node found for link.", link);
			return;
		}
		const inputSlot = inputNode.inputs.at(link.target_slot);
		if (!inputSlot) {
			console.warn("No input slot found for link.", link);
			return;
		}
		const renderLink = new ToOutputFromRerouteLink(network, inputNode, inputSlot, reroute, this);
		renderLink.fromDirection = LinkDirection.LEFT;
		this.renderLinks.push(renderLink);
		this.state.connectingTo = "output";
		this._setLegacyLinks(true);
	}
	dragFromLinkSegment(network, linkSegment) {
		if (this.isConnecting) throw new Error("Already dragging links.");
		const { state } = this;
		if (linkSegment.origin_id == null || linkSegment.origin_slot == null) return;
		const node = network.getNodeById(linkSegment.origin_id);
		if (!node) return;
		const slot = node.outputs.at(linkSegment.origin_slot);
		if (!slot) return;
		const renderLink = new ToInputRenderLink(network, node, slot, network.getReroute(linkSegment.parentId));
		renderLink.fromDirection = LinkDirection.NONE;
		this.renderLinks.push(renderLink);
		state.connectingTo = "input";
		this._setLegacyLinks(false);
	}
	/**
	* Connects the links being dropped
	* @param event Contains the drop location, in canvas space
	*/
	dropLinks(locator, event) {
		if (!this.isConnecting) {
			if (this.events.dispatch("before-drop-links", {
				renderLinks: this.renderLinks,
				event
			}) === false) return;
		}
		try {
			const { canvasX, canvasY } = event;
			const ioNode = locator.getIoNodeOnPos?.(canvasX, canvasY);
			if (ioNode) {
				this.dropOnIoNode(ioNode, event);
				return;
			}
			const node = locator.getNodeOnPos(canvasX, canvasY) ?? void 0;
			if (node) this.dropOnNode(node, event);
			else {
				const reroute = locator.getRerouteOnPos(canvasX, canvasY);
				if (reroute && this.isRerouteValidDrop(reroute)) this.dropOnReroute(reroute, event);
				else this.dropOnNothing(event);
			}
		} finally {
			this.events.dispatch("after-drop-links", {
				renderLinks: this.renderLinks,
				event
			});
		}
	}
	dropOnIoNode(ioNode, event) {
		const { renderLinks, state } = this;
		const { connectingTo } = state;
		const { canvasX, canvasY } = event;
		if (connectingTo === "input" && ioNode instanceof SubgraphOutputNode) {
			const output = ioNode.getSlotInPosition(canvasX, canvasY);
			if (!output) {
				this.dropOnNothing(event);
				return;
			}
			let targetSlot = output;
			for (const link of renderLinks) {
				link.connectToSubgraphOutput(targetSlot, this.events);
				if (output instanceof EmptySubgraphOutput && ioNode.slots.length > 0) {
					const createdSlot = ioNode.slots[ioNode.slots.length - 1];
					const nextLink = renderLinks[renderLinks.indexOf(link) + 1];
					if (nextLink && link.fromSlot.type === nextLink.fromSlot.type) targetSlot = createdSlot;
					else targetSlot = output;
				}
			}
		} else if (connectingTo === "output" && ioNode instanceof SubgraphInputNode) {
			const input = ioNode.getSlotInPosition(canvasX, canvasY);
			if (!input) {
				this.dropOnNothing(event);
				return;
			}
			let targetSlot = input;
			for (const link of renderLinks) {
				if ("canConnectToSubgraphInput" in link && !link.canConnectToSubgraphInput(targetSlot)) {
					console.warn("Invalid connection type", link.fromSlot.type, "->", targetSlot.type);
					continue;
				}
				link.connectToSubgraphInput(targetSlot, this.events);
				if (input instanceof EmptySubgraphInput && ioNode.slots.length > 0) {
					const createdSlot = ioNode.slots[ioNode.slots.length - 1];
					const nextLink = renderLinks[renderLinks.indexOf(link) + 1];
					if (nextLink && link.fromSlot.type === nextLink.fromSlot.type) targetSlot = createdSlot;
					else targetSlot = input;
				}
			}
		} else console.error("Invalid connectingTo state &/ ioNode", connectingTo, ioNode);
	}
	dropOnNode(node, event) {
		const { renderLinks, state } = this;
		const { connectingTo } = state;
		const { canvasX, canvasY } = event;
		if (renderLinks.every((link) => link.node === node)) return;
		if (connectingTo === "output") {
			const output = node.getOutputOnPos([canvasX, canvasY]);
			if (output) this._dropOnOutput(node, output);
			else this.connectToNode(node, event);
		} else if (connectingTo === "input") {
			const inputOrSocket = node.getInputOnPos([canvasX, canvasY]) ?? node.getSlotFromWidget(this.overWidget);
			if (inputOrSocket) this._dropOnInput(node, inputOrSocket);
			else this.connectToNode(node, event);
		}
	}
	dropOnReroute(reroute, event) {
		if (this.events.dispatch("dropped-on-reroute", {
			reroute,
			event
		}) === false) return;
		if (this.state.connectingTo === "input") {
			if (this.renderLinks.length !== 1) throw new Error(`Attempted to connect ${this.renderLinks.length} input links to a reroute.`);
			const renderLink = this.renderLinks[0];
			this._connectOutputToReroute(reroute, renderLink);
			return;
		}
		for (const link of this.renderLinks) {
			if (link.toType !== "output") continue;
			const result = reroute.findSourceOutput();
			if (!result) continue;
			const { node, output } = result;
			if (!link.canConnectToOutput(node, output)) continue;
			link.connectToRerouteOutput(reroute, node, output, this.events);
		}
	}
	/** @internal Temporary workaround - requires refactor. */
	_connectOutputToReroute(reroute, renderLink) {
		const results = reroute.findTargetInputs();
		if (!results?.length) return;
		const maybeReroutes = reroute.getReroutes();
		if (maybeReroutes === null) throw new Error("Reroute loop detected.");
		const originalReroutes = maybeReroutes.slice(0, -1).reverse();
		if (renderLink instanceof ToInputRenderLink) {
			const { node, fromSlot, fromSlotIndex, fromReroute } = renderLink;
			reroute.setFloatingLinkOrigin(node, fromSlot, fromSlotIndex);
			if (fromReroute != null) for (const originalReroute of originalReroutes) {
				if (originalReroute.id === fromReroute.id) break;
				for (const linkId of reroute.floatingLinkIds) originalReroute.floatingLinkIds.delete(linkId);
			}
		}
		const filtered = results.filter((result) => renderLink.toType === "input" && canConnectInputLinkToReroute(renderLink, result.node, result.input, reroute));
		for (const result of filtered) renderLink.connectToRerouteInput(reroute, result, this.events, originalReroutes);
	}
	dropOnNothing(event) {
		remove(this.renderLinks, (link) => link instanceof MovingInputLink && link.disconnectOnDrop).forEach((link) => link.disconnect());
		if (this.renderLinks.length === 0) return;
		if (this.events.dispatch("dropped-on-canvas", event) === false) return;
		this.disconnectLinks();
	}
	/**
	* Disconnects all moving links.
	* @remarks This is called when the links are dropped on the canvas.
	* May be called by consumers to e.g. drag links into a bin / void.
	*/
	disconnectLinks() {
		for (const link of this.renderLinks) if (link instanceof MovingLinkBase || link instanceof ToInputFromIoNodeLink) link.disconnect();
	}
	/**
	* Connects the links being dropped onto a node to the first matching slot.
	* @param node The node that the links are being dropped on
	* @param event Contains the drop location, in canvas space
	*/
	connectToNode(node, event) {
		const { state: { connectingTo } } = this;
		if (this.events.dispatch("dropped-on-node", {
			node,
			event
		}) === false) return;
		const firstLink = this.renderLinks[0];
		if (!firstLink) return;
		if (connectingTo === "output") {
			const output = node.findOutputByType(firstLink.fromSlot.type)?.slot;
			if (output === void 0) {
				console.warn(`Could not find slot for link type: [${firstLink.fromSlot.type}].`);
				return;
			}
			this._dropOnOutput(node, output);
		} else if (connectingTo === "input") {
			const input = node.findInputByType(firstLink.fromSlot.type)?.slot;
			if (input === void 0) {
				console.warn(`Could not find slot for link type: [${firstLink.fromSlot.type}].`);
				return;
			}
			this._dropOnInput(node, input);
		}
	}
	_dropOnInput(node, input) {
		for (const link of this.renderLinks) {
			if (!link.canConnectToInput(node, input)) continue;
			link.connectToInput(node, input, this.events);
		}
	}
	_dropOnOutput(node, output) {
		for (const link of this.renderLinks) {
			if (!link.canConnectToOutput(node, output)) {
				if (link instanceof MovingOutputLink && link.link.parentId !== void 0) link.outputNode.connectSlots(link.outputSlot, link.inputNode, link.inputSlot, void 0);
				continue;
			}
			link.connectToOutput(node, output, this.events);
		}
	}
	isInputValidDrop(node, input) {
		return this.renderLinks.some((link) => link.canConnectToInput(node, input));
	}
	isNodeValidDrop(node) {
		if (this.state.connectingTo === "output") return node.outputs.some((output) => this.renderLinks.some((link) => link.canConnectToOutput(node, output)));
		return node.inputs.some((input) => this.renderLinks.some((link) => link.canConnectToInput(node, input)));
	}
	isSubgraphInputValidDrop(input) {
		return this.renderLinks.some((link) => "canConnectToSubgraphInput" in link && link.canConnectToSubgraphInput(input));
	}
	/**
	* Checks if a reroute is a valid drop target for any of the links being connected.
	* @param reroute The reroute that would be dropped on.
	* @returns `true` if any of the current links being connected are valid for the given reroute.
	*/
	isRerouteValidDrop(reroute) {
		if (this.state.connectingTo === "input") {
			const results = reroute.findTargetInputs();
			if (!results?.length) return false;
			for (const { node, input } of results) for (const renderLink of this.renderLinks) {
				if (renderLink.toType !== "input") continue;
				if (canConnectInputLinkToReroute(renderLink, node, input, reroute)) return true;
			}
		} else {
			const result = reroute.findSourceOutput();
			if (!result) return false;
			const { node, output } = result;
			for (const renderLink of this.renderLinks) {
				if (renderLink.toType !== "output") continue;
				if (!renderLink.canConnectToReroute(reroute)) continue;
				if (renderLink.canConnectToOutput(node, output)) return true;
			}
		}
		return false;
	}
	/** Sets connecting_links, used by some extensions still. */
	_setLegacyLinks(fromSlotIsInput) {
		const links = this.renderLinks.map((link) => {
			const input = fromSlotIsInput ? link.fromSlot : null;
			const output = fromSlotIsInput ? null : link.fromSlot;
			const afterRerouteId = link instanceof MovingLinkBase ? link.link?.parentId : link.fromReroute?.id;
			return {
				node: link.node,
				slot: link.fromSlotIndex,
				input,
				output,
				pos: link.fromPos,
				afterRerouteId
			};
		});
		this._setConnectingLinks(links);
	}
	/**
	* Exports the current state of the link connector.
	* @param network The network that the links being connected belong to.
	* @returns A POJO with the state of the link connector, links being connected, and their network.
	* @remarks Other than {@link network}, all properties are shallow cloned.
	*/
	export(network) {
		return {
			renderLinks: [...this.renderLinks],
			inputLinks: [...this.inputLinks],
			outputLinks: [...this.outputLinks],
			floatingLinks: [...this.floatingLinks],
			state: { ...this.state },
			network
		};
	}
	/**
	* Adds an event listener that will be automatically removed when the reset event is fired.
	* @param eventName The event to listen for.
	* @param listener The listener to call when the event is fired.
	*/
	listenUntilReset(eventName, listener, options) {
		this.events.addEventListener(eventName, listener, options);
		this.events.addEventListener("reset", () => this.events.removeEventListener(eventName, listener), { once: true });
	}
	/**
	* Resets everything to its initial state.
	*
	* Effectively cancels moving or connecting links.
	*/
	reset(force = false) {
		if (this.events.dispatch("reset", force) === false) return;
		const { state, outputLinks, inputLinks, hiddenReroutes, renderLinks, floatingLinks } = this;
		if (!force && state.connectingTo === void 0) return;
		state.connectingTo = void 0;
		for (const link of outputLinks) delete link._dragging;
		for (const link of inputLinks) delete link._dragging;
		for (const link of floatingLinks) delete link._dragging;
		for (const reroute of hiddenReroutes) delete reroute._dragging;
		renderLinks.length = 0;
		inputLinks.length = 0;
		outputLinks.length = 0;
		floatingLinks.length = 0;
		hiddenReroutes.clear();
		state.multi = false;
		state.draggingExistingLinks = false;
		state.snapLinksPos = void 0;
	}
};
/** Validates that a single {@link RenderLink} can be dropped on the specified reroute. */
function canConnectInputLinkToReroute(link, inputNode, input, reroute) {
	const { fromReroute } = link;
	if (!link.canConnectToInput(inputNode, input) || fromReroute?.id === reroute.id || fromReroute?.getReroutes()?.includes(reroute)) return false;
	if (link instanceof ToInputRenderLink) {
		if (reroute.parentId == null) {
			if (reroute.firstLink?.hasOrigin(link.node.id, link.fromSlotIndex)) return false;
		} else if (link.fromReroute?.id === reroute.parentId) return false;
	}
	return true;
}
//#endregion
//#region src/lib/litegraph/src/infrastructure/RecursionError.ts
/**
* Error thrown when infinite recursion is detected.
*/
var RecursionError = class extends Error {
	constructor(subject) {
		super(subject);
		this.name = "RecursionError";
	}
};
//#endregion
//#region src/stores/domWidgetStore.ts
/**
* Stores all DOM widgets that are used in the canvas.
*/
var useDomWidgetStore = defineStore("domWidget", () => {
	const widgetStates = ref(/* @__PURE__ */ new Map());
	const activeWidgetStates = computed(() => [...widgetStates.value.values()].filter((state) => state.active));
	const inactiveWidgetStates = computed(() => [...widgetStates.value.values()].filter((state) => !state.active));
	function registerWidget(widget) {
		widgetStates.value.set(widget.id, {
			widget: markRaw(widget),
			visible: true,
			readonly: false,
			zIndex: 0,
			pos: [0, 0],
			size: [0, 0],
			active: true
		});
	}
	function unregisterWidget(widgetId) {
		widgetStates.value.delete(widgetId);
	}
	function activateWidget(widgetId) {
		const state = widgetStates.value.get(widgetId);
		if (state) state.active = true;
	}
	function deactivateWidget(widgetId) {
		const state = widgetStates.value.get(widgetId);
		if (state) state.active = false;
	}
	function setWidget(widget) {
		const state = widgetStates.value.get(widget.id);
		if (!state) return;
		state.active = true;
		state.widget = widget;
	}
	function setPositionOverride(widgetId, override) {
		const state = widgetStates.value.get(widgetId);
		if (!state) return;
		const current = state.positionOverride;
		if (current && current.node === override.node && current.widget === override.widget) return;
		state.positionOverride = {
			node: markRaw(override.node),
			widget: markRaw(override.widget)
		};
	}
	function clearPositionOverride(widgetId) {
		const state = widgetStates.value.get(widgetId);
		if (state) state.positionOverride = void 0;
	}
	function clear() {
		widgetStates.value.clear();
	}
	return {
		widgetStates,
		activeWidgetStates,
		inactiveWidgetStates,
		registerWidget,
		unregisterWidget,
		activateWidget,
		deactivateWidget,
		setWidget,
		setPositionOverride,
		clearPositionOverride,
		clear
	};
});
//#endregion
//#region src/core/graph/subgraph/promotedWidgetTypes.ts
function isPromotedWidgetView(widget) {
	return "sourceNodeId" in widget && "sourceWidgetName" in widget;
}
//#endregion
//#region src/core/graph/subgraph/resolveConcretePromotedWidget.ts
var MAX_PROMOTED_WIDGET_CHAIN_DEPTH = 100;
function traversePromotedWidgetChain(hostNode, nodeId, widgetName, sourceNodeId) {
	const visited = /* @__PURE__ */ new Set();
	const hostUidByObject = /* @__PURE__ */ new WeakMap();
	let nextHostUid = 0;
	let currentHost = hostNode;
	let currentNodeId = nodeId;
	let currentWidgetName = widgetName;
	let currentSourceNodeId = sourceNodeId;
	for (let depth = 0; depth < MAX_PROMOTED_WIDGET_CHAIN_DEPTH; depth++) {
		let hostUid = hostUidByObject.get(currentHost);
		if (hostUid === void 0) {
			hostUid = nextHostUid;
			nextHostUid += 1;
			hostUidByObject.set(currentHost, hostUid);
		}
		const key = `${hostUid}:${currentNodeId}:${currentWidgetName}:${currentSourceNodeId ?? ""}`;
		if (visited.has(key)) return {
			status: "failure",
			failure: "cycle"
		};
		visited.add(key);
		const sourceNode = currentHost.subgraph.getNodeById(currentNodeId);
		if (!sourceNode) return {
			status: "failure",
			failure: "missing-node"
		};
		const sourceWidget = findWidgetByIdentity(sourceNode.widgets, currentWidgetName, currentSourceNodeId);
		if (!sourceWidget) return {
			status: "failure",
			failure: "missing-widget"
		};
		if (!isPromotedWidgetView(sourceWidget)) return {
			status: "resolved",
			resolved: {
				node: sourceNode,
				widget: sourceWidget
			}
		};
		if (!sourceWidget.node?.isSubgraphNode()) return {
			status: "failure",
			failure: "missing-node"
		};
		currentHost = sourceWidget.node;
		currentNodeId = sourceWidget.sourceNodeId;
		currentWidgetName = sourceWidget.sourceWidgetName;
		currentSourceNodeId = void 0;
	}
	return {
		status: "failure",
		failure: "max-depth-exceeded"
	};
}
function findWidgetByIdentity(widgets, widgetName, sourceNodeId) {
	if (!widgets) return void 0;
	if (sourceNodeId) return widgets.find((entry) => isPromotedWidgetView(entry) && (entry.disambiguatingSourceNodeId ?? entry.sourceNodeId) === sourceNodeId && (entry.sourceWidgetName === widgetName || entry.name === widgetName));
	return widgets.find((entry) => entry.name === widgetName);
}
function resolvePromotedWidgetAtHost(hostNode, nodeId, widgetName, sourceNodeId) {
	const node = hostNode.subgraph.getNodeById(nodeId);
	if (!node) return void 0;
	const widget = findWidgetByIdentity(node.widgets, widgetName, sourceNodeId);
	if (!widget) return void 0;
	return {
		node,
		widget
	};
}
function resolveConcretePromotedWidget(hostNode, nodeId, widgetName, sourceNodeId) {
	if (!hostNode.isSubgraphNode()) return {
		status: "failure",
		failure: "invalid-host"
	};
	return traversePromotedWidgetChain(hostNode, nodeId, widgetName, sourceNodeId);
}
//#endregion
//#region src/core/graph/subgraph/matchPromotedInput.ts
function matchPromotedInput(inputs, widget) {
	if (!inputs) return void 0;
	const exactMatch = inputs.find((input) => input._widget === widget);
	if (exactMatch) return exactMatch;
	const sameNameMatches = inputs.filter((input) => input.name === widget.name);
	return sameNameMatches.length === 1 ? sameNameMatches[0] : void 0;
}
//#endregion
//#region src/core/graph/subgraph/widgetNodeTypeGuard.ts
function hasWidgetNode(widget) {
	return "node" in widget && !!widget.node;
}
//#endregion
//#region src/core/graph/subgraph/promotedWidgetView.ts
function isWidgetValue(value) {
	if (value === void 0) return true;
	if (typeof value === "string") return true;
	if (typeof value === "number") return true;
	if (typeof value === "boolean") return true;
	return value !== null && typeof value === "object";
}
function hasLegacyMouse(widget) {
	return "mouse" in widget && typeof widget.mouse === "function";
}
var designTokenCache = /* @__PURE__ */ new Map();
function createPromotedWidgetView(subgraphNode, nodeId, widgetName, displayName, disambiguatingSourceNodeId, identityName) {
	return new PromotedWidgetView(subgraphNode, nodeId, widgetName, displayName, disambiguatingSourceNodeId, identityName);
}
var PromotedWidgetView = class {
	sourceNodeId;
	sourceWidgetName;
	serialize = false;
	last_y;
	computedHeight;
	graphId;
	yValue = 0;
	_computedDisabled = false;
	projectedSourceNode;
	projectedSourceWidget;
	projectedSourceWidgetType;
	projectedWidget;
	cachedDeepestByFrame;
	cachedDeepestFrame = -1;
	/** Cached reference to the bound subgraph slot, set at construction. */
	_boundSlot;
	_boundSlotVersion = -1;
	constructor(subgraphNode, nodeId, widgetName, displayName, disambiguatingSourceNodeId, identityName) {
		this.subgraphNode = subgraphNode;
		this.displayName = displayName;
		this.disambiguatingSourceNodeId = disambiguatingSourceNodeId;
		this.identityName = identityName;
		this.sourceNodeId = nodeId;
		this.sourceWidgetName = widgetName;
		this.graphId = subgraphNode.rootGraph.id;
	}
	get node() {
		return this.subgraphNode;
	}
	get name() {
		return this.identityName ?? this.sourceWidgetName;
	}
	get y() {
		return this.yValue;
	}
	set y(value) {
		this.yValue = value;
		this.syncDomOverride();
	}
	get computedDisabled() {
		return this._computedDisabled;
	}
	set computedDisabled(value) {
		this._computedDisabled = value ?? false;
	}
	get type() {
		return this.resolveDeepest()?.widget.type ?? "button";
	}
	get options() {
		return this.resolveDeepest()?.widget.options ?? {};
	}
	get tooltip() {
		return this.resolveDeepest()?.widget.tooltip;
	}
	get linkedWidgets() {
		return this.resolveDeepest()?.widget.linkedWidgets;
	}
	get value() {
		const state = this.getWidgetState();
		if (state && isWidgetValue(state.value)) return state.value;
		return this.resolveAtHost()?.widget.value;
	}
	set value(value) {
		const linkedWidgets = this.getLinkedInputWidgets();
		if (linkedWidgets.length > 0) {
			const widgetStore = useWidgetValueStore();
			let didUpdateState = false;
			for (const linkedWidget of linkedWidgets) {
				const state = widgetStore.getWidget(this.graphId, linkedWidget.nodeId, linkedWidget.widgetName);
				if (state) {
					state.value = value;
					didUpdateState = true;
				}
			}
			const resolved = this.resolveDeepest();
			if (resolved) {
				const resolvedState = widgetStore.getWidget(this.graphId, stripGraphPrefix(String(resolved.node.id)), resolved.widget.name);
				if (resolvedState) {
					resolvedState.value = value;
					didUpdateState = true;
				}
			}
			if (didUpdateState) return;
		}
		const state = this.getWidgetState();
		if (state) {
			state.value = value;
			return;
		}
		const resolved = this.resolveAtHost();
		if (resolved && isWidgetValue(value)) resolved.widget.value = value;
	}
	get label() {
		const slot = this.getBoundSubgraphSlot();
		if (slot) return slot.label ?? slot.displayName ?? slot.name;
		return this.getWidgetState()?.label ?? this.displayName;
	}
	set label(value) {
		const slot = this.getBoundSubgraphSlot();
		if (slot) slot.label = value || void 0;
		const state = this.getWidgetState();
		if (state) state.label = value;
	}
	/**
	* Returns the cached bound subgraph slot reference, refreshing only when
	* the subgraph node's input list has changed (length mismatch).
	*
	* Note: Using length as the cache key works because the returned reference
	* is the same mutable slot object. When slot properties (label, name) change,
	* the caller reads fresh values from that reference.  The cache only needs
	* to invalidate when slots are added or removed, which changes length.
	*/
	getBoundSubgraphSlot() {
		const version = this.subgraphNode.inputs?.length ?? 0;
		if (this._boundSlotVersion === version) return this._boundSlot;
		this._boundSlot = this.findBoundSubgraphSlot();
		this._boundSlotVersion = version;
		return this._boundSlot;
	}
	findBoundSubgraphSlot() {
		for (const input of this.subgraphNode.inputs ?? []) {
			const slot = input._subgraphSlot;
			if (!slot) continue;
			const w = input._widget;
			if (w && isPromotedWidgetView(w) && w.sourceNodeId === this.sourceNodeId && w.sourceWidgetName === this.sourceWidgetName) return slot;
		}
	}
	get hidden() {
		return this.resolveDeepest()?.widget.hidden ?? false;
	}
	get computeLayoutSize() {
		const resolved = this.resolveDeepest();
		const computeLayoutSize = resolved?.widget.computeLayoutSize;
		if (!computeLayoutSize) return void 0;
		return (node) => computeLayoutSize.call(resolved.widget, node);
	}
	get computeSize() {
		const resolved = this.resolveDeepest();
		const computeSize = resolved?.widget.computeSize;
		if (!computeSize) return void 0;
		return (width) => computeSize.call(resolved.widget, width);
	}
	draw(ctx, _node, widgetWidth, y, H, lowQuality) {
		const resolved = this.resolveDeepest();
		if (!resolved) {
			drawDisconnectedPlaceholder(ctx, widgetWidth, y, H);
			return;
		}
		if (isBaseDOMWidget(resolved.widget)) return this.syncDomOverride(resolved);
		const projected = this.getProjectedWidget(resolved);
		if (!projected || typeof projected.drawWidget !== "function") return;
		const originalY = projected.y;
		const originalComputedHeight = projected.computedHeight;
		const originalComputedDisabled = projected.computedDisabled;
		const originalLabel = projected.label;
		projected.y = this.y;
		projected.computedHeight = this.computedHeight;
		projected.computedDisabled = this.computedDisabled;
		projected.value = this.value;
		projected.label = this.label;
		try {
			projected.drawWidget(ctx, {
				width: widgetWidth,
				showText: !lowQuality,
				suppressPromotedOutline: true,
				previewImages: resolved.node.imgs
			});
		} finally {
			projected.y = originalY;
			projected.computedHeight = originalComputedHeight;
			projected.computedDisabled = originalComputedDisabled;
			projected.label = originalLabel;
		}
	}
	onPointerDown(pointer, _node, canvas) {
		const resolved = this.resolveAtHost();
		if (!resolved) return false;
		const interior = resolved.widget;
		if (typeof interior.onPointerDown === "function") {
			if (interior.onPointerDown(pointer, this.subgraphNode, canvas)) return true;
		}
		const concrete = toConcreteWidget(interior, this.subgraphNode, false);
		if (concrete) return this.bindConcretePointerHandlers(pointer, canvas, concrete);
		if (hasLegacyMouse(interior)) return this.handleLegacyMouse(pointer, interior);
		return false;
	}
	callback(value, canvas, node, pos, e) {
		this.resolveAtHost()?.widget.callback?.(value, canvas, node, pos, e);
	}
	resolveAtHost() {
		return resolvePromotedWidgetAtHost(this.subgraphNode, this.sourceNodeId, this.sourceWidgetName, this.disambiguatingSourceNodeId);
	}
	resolveDeepest() {
		const frame = this.subgraphNode.rootGraph.primaryCanvas?.frame;
		if (frame !== void 0 && this.cachedDeepestFrame === frame) return this.cachedDeepestByFrame;
		const result = resolveConcretePromotedWidget(this.subgraphNode, this.sourceNodeId, this.sourceWidgetName, this.disambiguatingSourceNodeId);
		const resolved = result.status === "resolved" ? result.resolved : void 0;
		if (frame !== void 0) {
			this.cachedDeepestFrame = frame;
			this.cachedDeepestByFrame = resolved;
		}
		return resolved;
	}
	getWidgetState() {
		const linkedState = this.getLinkedInputWidgetStates()[0];
		if (linkedState) return linkedState;
		const resolved = this.resolveDeepest();
		if (!resolved) return void 0;
		return useWidgetValueStore().getWidget(this.graphId, stripGraphPrefix(String(resolved.node.id)), resolved.widget.name);
	}
	getLinkedInputWidgets() {
		const linkedInput = this.subgraphNode.inputs.find((input) => {
			if (!input._subgraphSlot) return false;
			if (matchPromotedInput([input], this) !== input) return false;
			const boundWidget = input._widget;
			if (boundWidget === this) return true;
			if (boundWidget && isPromotedWidgetView(boundWidget)) return boundWidget.sourceNodeId === this.sourceNodeId && boundWidget.sourceWidgetName === this.sourceWidgetName && boundWidget.disambiguatingSourceNodeId === this.disambiguatingSourceNodeId;
			return input._subgraphSlot.getConnectedWidgets().filter(hasWidgetNode).some((widget) => String(widget.node.id) === this.sourceNodeId && widget.name === this.sourceWidgetName);
		})?._subgraphSlot;
		if (!linkedInput) return [];
		return linkedInput.getConnectedWidgets().filter(hasWidgetNode).map((widget) => ({
			nodeId: stripGraphPrefix(String(widget.node.id)),
			widgetName: widget.name,
			widget
		}));
	}
	getLinkedInputWidgetStates() {
		const widgetStore = useWidgetValueStore();
		return this.getLinkedInputWidgets().map(({ nodeId, widgetName }) => widgetStore.getWidget(this.graphId, nodeId, widgetName)).filter((state) => state !== void 0);
	}
	getProjectedWidget(resolved) {
		if (!(!this.projectedWidget || this.projectedSourceNode !== resolved.node || this.projectedSourceWidget !== resolved.widget || this.projectedSourceWidgetType !== resolved.widget.type)) return this.projectedWidget;
		const concrete = toConcreteWidget(resolved.widget, resolved.node, false);
		if (!concrete) {
			this.projectedWidget = void 0;
			this.projectedSourceNode = void 0;
			this.projectedSourceWidget = void 0;
			this.projectedSourceWidgetType = void 0;
			return;
		}
		this.projectedWidget = concrete.createCopyForNode(this.subgraphNode);
		this.projectedSourceNode = resolved.node;
		this.projectedSourceWidget = resolved.widget;
		this.projectedSourceWidgetType = resolved.widget.type;
		return this.projectedWidget;
	}
	bindConcretePointerHandlers(pointer, canvas, concrete) {
		const downEvent = pointer.eDown;
		if (!downEvent) return false;
		pointer.onClick = () => concrete.onClick({
			e: downEvent,
			node: this.subgraphNode,
			canvas
		});
		pointer.onDrag = (eMove) => concrete.onDrag?.({
			e: eMove,
			node: this.subgraphNode,
			canvas
		});
		return true;
	}
	handleLegacyMouse(pointer, interior) {
		const downEvent = pointer.eDown;
		if (!downEvent) return false;
		const downPosition = [downEvent.canvasX - this.subgraphNode.pos[0], downEvent.canvasY - this.subgraphNode.pos[1]];
		interior.mouse(downEvent, downPosition, this.subgraphNode);
		pointer.finally = () => {
			const upEvent = pointer.eUp;
			if (!upEvent) return;
			const upPosition = [upEvent.canvasX - this.subgraphNode.pos[0], upEvent.canvasY - this.subgraphNode.pos[1]];
			interior.mouse(upEvent, upPosition, this.subgraphNode);
		};
		return true;
	}
	syncDomOverride(resolved = this.resolveAtHost()) {
		if (!resolved || !isBaseDOMWidget(resolved.widget)) return;
		useDomWidgetStore().setPositionOverride(resolved.widget.id, {
			node: this.subgraphNode,
			widget: this
		});
	}
};
/** Checks if a widget is a BaseDOMWidget (DOMWidget or ComponentWidget). */
function isBaseDOMWidget(widget) {
	return "id" in widget && ("element" in widget || "component" in widget);
}
function drawDisconnectedPlaceholder(ctx, width, y, H) {
	const backgroundColor = readDesignToken("--color-secondary-background", "#333");
	const textColor = readDesignToken("--color-text-secondary", "#999");
	const fontSize = readDesignToken("--text-2xs", "11px");
	const fontFamily = readDesignToken("--font-inter", "sans-serif");
	ctx.save();
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(15, y, width - 30, H);
	ctx.fillStyle = textColor;
	ctx.font = `${fontSize} ${fontFamily}`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(t("subgraphStore.disconnected"), width / 2, y + H / 2);
	ctx.restore();
}
function readDesignToken(token, fallback) {
	if (typeof document === "undefined") return fallback;
	const cachedValue = designTokenCache.get(token);
	if (cachedValue) return cachedValue;
	const resolvedValue = getComputedStyle(document.documentElement).getPropertyValue(token).trim() || fallback;
	designTokenCache.set(token, resolvedValue);
	return resolvedValue;
}
//#endregion
//#region src/core/graph/subgraph/legacyProxyWidgetNormalization.ts
var LEGACY_PROXY_WIDGET_PREFIX_PATTERN = /^\s*(\d+)\s*:\s*(.+)$/;
function canResolve(hostNode, sourceNodeId, widgetName, disambiguator) {
	return resolveConcretePromotedWidget(hostNode, sourceNodeId, widgetName, disambiguator).status === "resolved";
}
function tryResolveCandidate(hostNode, sourceNodeId, widgetName, disambiguator) {
	if (!canResolve(hostNode, sourceNodeId, widgetName, disambiguator)) return void 0;
	return {
		sourceWidgetName: widgetName,
		...disambiguator && { disambiguatingSourceNodeId: disambiguator }
	};
}
function resolveLegacyPrefixedEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId) {
	let remaining = sourceWidgetName;
	while (true) {
		const match = LEGACY_PROXY_WIDGET_PREFIX_PATTERN.exec(remaining);
		if (!match) return void 0;
		const [, legacySourceNodeId, unprefixed] = match;
		remaining = unprefixed;
		const disambiguators = [
			legacySourceNodeId,
			...disambiguatingSourceNodeId ? [disambiguatingSourceNodeId] : [],
			void 0
		];
		for (const disambiguator of disambiguators) {
			const resolved = tryResolveCandidate(hostNode, sourceNodeId, remaining, disambiguator);
			if (resolved) return resolved;
		}
	}
}
function normalizeLegacyProxyWidgetEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId) {
	if (canResolve(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId)) return {
		sourceNodeId,
		sourceWidgetName,
		...disambiguatingSourceNodeId && { disambiguatingSourceNodeId }
	};
	const patch = resolveLegacyPrefixedEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId);
	const patchDisambiguatingSourceNodeId = patch?.disambiguatingSourceNodeId ?? disambiguatingSourceNodeId;
	return {
		sourceNodeId,
		sourceWidgetName: patch?.sourceWidgetName ?? sourceWidgetName,
		...patchDisambiguatingSourceNodeId && { disambiguatingSourceNodeId: patchDisambiguatingSourceNodeId }
	};
}
//#endregion
//#region src/core/graph/subgraph/resolveSubgraphInputLink.ts
function resolveSubgraphInputLink(node, inputName, resolve) {
	if (!node.isSubgraphNode()) return void 0;
	const inputSlot = node.subgraph.inputNode.slots.find((slot) => slot.name === inputName);
	if (!inputSlot) return void 0;
	for (const linkId of inputSlot.linkIds) {
		const link = node.subgraph.getLink(linkId);
		if (!link) continue;
		const { inputNode } = link.resolve(node.subgraph);
		if (!inputNode) continue;
		if (!Array.isArray(inputNode.inputs)) continue;
		const targetInput = inputNode.inputs.find((entry) => entry.link === linkId);
		if (!targetInput) continue;
		let cachedTargetWidget;
		let hasCachedTargetWidget = false;
		const resolved = resolve({
			inputNode,
			targetInput,
			getTargetWidget: () => {
				if (!hasCachedTargetWidget) {
					cachedTargetWidget = inputNode.getWidgetFromSlot(targetInput);
					hasCachedTargetWidget = true;
				}
				return cachedTargetWidget;
			}
		});
		if (resolved !== void 0) return resolved;
	}
}
//#endregion
//#region src/core/graph/subgraph/resolveSubgraphInputTarget.ts
function resolveSubgraphInputTarget(node, inputName) {
	return resolveSubgraphInputLink(node, inputName, ({ inputNode, targetInput, getTargetWidget }) => {
		if (inputNode.isSubgraphNode()) {
			const targetWidget = getTargetWidget();
			if (!targetWidget) return void 0;
			if (isPromotedWidgetView(targetWidget)) return {
				nodeId: String(inputNode.id),
				widgetName: targetWidget.sourceWidgetName,
				sourceNodeId: targetWidget.disambiguatingSourceNodeId ?? targetWidget.sourceNodeId
			};
			return {
				nodeId: String(inputNode.id),
				widgetName: targetInput.name
			};
		}
		const targetWidget = getTargetWidget();
		if (!targetWidget) return void 0;
		return {
			nodeId: String(inputNode.id),
			widgetName: targetWidget.name
		};
	});
}
//#endregion
//#region src/composables/node/canvasImagePreviewTypes.ts
var CANVAS_IMAGE_PREVIEW_WIDGET = "$$canvas-image-preview";
var CANVAS_IMAGE_PREVIEW_NODE_TYPES = new Set([
	"PreviewImage",
	"SaveImage",
	"GLSLShader"
]);
function supportsVirtualCanvasImagePreview(node) {
	return CANVAS_IMAGE_PREVIEW_NODE_TYPES.has(node.type);
}
var proxyWidgetsPropertySchema = arrayType(unionType([tupleType([
	stringType(),
	stringType(),
	stringType()
]), tupleType([stringType(), stringType()])]));
function parseProxyWidgets(property) {
	try {
		if (typeof property === "string") property = JSON.parse(property);
		const result = proxyWidgetsPropertySchema.safeParse(typeof property === "string" ? JSON.parse(property) : property);
		if (result.success) return result.data;
		const error = fromZodError(result.error);
		console.warn(`Invalid assignment for properties.proxyWidgets:\n${error}`);
	} catch (e) {
		console.warn("Failed to parse properties.proxyWidgets:", e);
	}
	return [];
}
//#endregion
//#region src/lib/litegraph/src/infrastructure/InvalidLinkError.ts
var InvalidLinkError = class extends Error {
	constructor(message = "Attempted to access a link that was invalid.", cause) {
		super(message, { cause });
		this.name = "InvalidLinkError";
	}
};
//#endregion
//#region src/lib/litegraph/src/infrastructure/SlotIndexError.ts
var SlotIndexError = class extends Error {
	constructor(message = "Attempted to access a slot that was out of bounds.", cause) {
		super(message, { cause });
		this.name = "SlotIndexError";
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/ExecutableNodeDTO.ts
/**
* Concrete implementation of {@link ExecutableLGraphNode}.
* @remarks This is the class that is used to create the data transfer objects for executable nodes.
*/
var ExecutableNodeDTO = class ExecutableNodeDTO {
	/** The graph that this node is a part of. */
	graph;
	inputs;
	/** Backing field for {@link id}. */
	_id;
	/**
	* The path to the actual node through subgraph instances, represented as a list of all subgraph node IDs (instances),
	* followed by the actual original node ID within the subgraph. Each segment is separated by `:`.
	*
	* e.g. `1:2:3`:
	* - `1` is the node ID of the first subgraph node in the parent workflow
	* - `2` is the node ID of the second subgraph node in the first subgraph
	* - `3` is the node ID of the actual node in the subgraph definition
	*/
	get id() {
		return this._id;
	}
	get type() {
		return this.node.type;
	}
	get title() {
		return this.node.title;
	}
	get mode() {
		return this.node.mode;
	}
	get comfyClass() {
		return this.node.comfyClass;
	}
	get isVirtualNode() {
		return this.node.isVirtualNode;
	}
	get widgets() {
		return this.node.widgets;
	}
	get subgraphId() {
		return this.subgraphNode?.subgraph.id;
	}
	constructor(node, subgraphNodePath, nodesByExecutionId, subgraphNode) {
		this.node = node;
		this.subgraphNodePath = subgraphNodePath;
		this.nodesByExecutionId = nodesByExecutionId;
		this.subgraphNode = subgraphNode;
		if (!node.graph) throw new NullGraphError();
		this._id = [...this.subgraphNodePath, this.node.id].join(":");
		this.graph = node.graph;
		this.inputs = this.node.inputs.map((x) => ({
			linkId: x.link,
			name: x.name,
			type: x.type
		}));
		if (this.node.applyToGraph) this.applyToGraph = (...args) => this.node.applyToGraph?.(...args);
	}
	/** Returns either the DTO itself, or the DTOs of the inner nodes of the subgraph. */
	getInnerNodes() {
		return this.node.isSubgraphNode() ? this.node.getInnerNodes(this.nodesByExecutionId, this.subgraphNodePath) : [this];
	}
	/**
	* Resolves the executable node & link IDs for a given input slot.
	* @param slot The slot index of the input.
	* @param visited Leave empty unless overriding this method.
	* A set of unique IDs, used to guard against infinite recursion.
	* If overriding, ensure that the set is passed on all recursive calls.
	* @returns The node and the origin ID / slot index of the output.
	*/
	resolveInput(slot, visited = /* @__PURE__ */ new Set(), type) {
		const uniqueId = `${this.subgraphNode?.subgraph.id}:${this.node.id}[I]${slot}`;
		if (visited.has(uniqueId)) throw new RecursionError(`Circular reference detected while resolving input ${slot} of node ${`${this.node.id}${this.node.title ? ` (${this.node.title})` : ""}`}${this.subgraphNodePath.length > 0 ? ` at path ${this.subgraphNodePath.join(":")}` : ""}. This creates an infinite loop in link resolution. UniqueID: [${uniqueId}]`);
		visited.add(uniqueId);
		const input = this.inputs.at(slot);
		if (!input) throw new SlotIndexError(`No input found for flattened id [${this.id}] slot [${slot}]`);
		if (input.linkId == null) return;
		const link = this.graph.getLink(input.linkId);
		if (!link) throw new InvalidLinkError(`No link found in parent graph for id [${this.id}] slot [${slot}] ${input.name}`);
		const { subgraphNode } = this;
		if (subgraphNode && link.originIsIoNode) {
			const subgraphNodeInput = subgraphNode.inputs.at(link.origin_slot);
			if (!subgraphNodeInput) throw new SlotIndexError(`No input found for slot [${link.origin_slot}] ${input.name}`);
			const linkId = subgraphNodeInput.link;
			if (linkId == null) {
				const widget = subgraphNode.getWidgetFromSlot(subgraphNodeInput);
				if (!widget) return;
				return {
					node: this,
					origin_id: this.id,
					origin_slot: -1,
					widgetInfo: { value: widget.value }
				};
			}
			if (!subgraphNode.graph) throw new NullGraphError(`SubgraphNode ${subgraphNode.id} has no graph during input resolution`);
			const outerLink = subgraphNode.graph.getLink(linkId);
			if (!outerLink) throw new InvalidLinkError(`No outer link found for slot [${link.origin_slot}] ${input.name}`);
			const subgraphNodeExecutionId = this.subgraphNodePath.join(":");
			const subgraphNodeDto = this.nodesByExecutionId.get(subgraphNodeExecutionId);
			if (!subgraphNodeDto) throw new Error(`No subgraph node DTO found for id [${subgraphNodeExecutionId}]`);
			return subgraphNodeDto.resolveInput(outerLink.target_slot, visited);
		}
		const outputNode = this.graph.getNodeById(link.origin_id);
		if (!outputNode) throw new InvalidLinkError(`No input node found for id [${this.id}] slot [${slot}] ${input.name}`);
		const outputNodeExecutionId = [...this.subgraphNodePath, outputNode.id].join(":");
		const outputNodeDto = this.nodesByExecutionId.get(outputNodeExecutionId);
		if (!outputNodeDto) throw new Error(`No output node DTO found for id [${outputNodeExecutionId}]`);
		return outputNodeDto.resolveOutput(link.origin_slot, type ?? input.type, visited);
	}
	/**
	* Determines whether this output is a valid endpoint for a link (non-virtual, non-bypass).
	* @param slot The slot index of the output.
	* @param type The type of the input
	* @param visited A set of unique IDs to guard against infinite recursion. See {@link resolveInput}.
	* @returns The node and the origin ID / slot index of the output.
	*/
	resolveOutput(slot, type, visited) {
		const uniqueId = `${this.subgraphNode?.subgraph.id}:${this.node.id}[O]${slot}`;
		if (visited.has(uniqueId)) throw new RecursionError(`Circular reference detected while resolving output ${slot} of node ${`${this.node.id}${this.node.title ? ` (${this.node.title})` : ""}`}${this.subgraphNodePath.length > 0 ? ` at path ${this.subgraphNodePath.join(":")}` : ""}. This creates an infinite loop in link resolution. UniqueID: [${uniqueId}]`);
		visited.add(uniqueId);
		if (this.mode === LGraphEventMode.NEVER) return;
		if (this.mode === LGraphEventMode.BYPASS) {
			const matchingIndex = this._getBypassSlotIndex(slot, type);
			if (matchingIndex === -1) {
				console.warn(`[ExecutableNodeDTO.resolveOutput] No input types match type [${type}] for id [${this.id}] slot [${slot}]`, this);
				return;
			}
			return this.resolveInput(matchingIndex, visited);
		}
		const { node } = this;
		if (node.isSubgraphNode()) return this._resolveSubgraphOutput(slot, type, visited);
		if (node.isVirtualNode) {
			const virtualSource = this.node.resolveVirtualOutput?.(slot);
			if (virtualSource) {
				const inputNodeDto = [...this.nodesByExecutionId.values()].find((dto) => dto instanceof ExecutableNodeDTO && dto.node === virtualSource.node);
				if (!inputNodeDto) throw new Error(`No DTO found for virtual source node [${virtualSource.node.id}]`);
				return inputNodeDto.resolveOutput(virtualSource.slot, type, visited);
			}
			const virtualLink = this.node.getInputLink(slot);
			if (virtualLink) {
				const { inputNode } = virtualLink.resolve(this.graph);
				if (!inputNode) throw new InvalidLinkError(`Virtual node failed to resolve parent [${this.id}] slot [${slot}]`);
				const inputNodeExecutionId = [...this.subgraphNodePath, inputNode.id].join(":");
				const inputNodeDto = this.nodesByExecutionId.get(inputNodeExecutionId);
				if (!inputNodeDto) throw new Error(`No input node DTO found for id [${inputNode.id}]`);
				return inputNodeDto.resolveInput(virtualLink.target_slot, visited, type);
			}
			return;
		}
		return {
			node: this,
			origin_id: this.id,
			origin_slot: slot
		};
	}
	/**
	* Finds the index of the input slot on this node that matches the given output {@link slot} index.
	* Used when bypassing nodes.
	* @param slot The output slot index on this node
	* @param type The type of the final target input (so type list matches are accurate)
	* @returns The index of the input slot on this node, otherwise `-1`.
	*/
	_getBypassSlotIndex(slot, type) {
		const { inputs } = this;
		const oppositeInput = inputs[slot];
		const outputType = this.node.outputs[slot].type;
		if (type === "*" || type === "") return inputs.length > slot ? slot : 0;
		if (oppositeInput && LiteGraph.isValidConnection(oppositeInput.type, outputType) && LiteGraph.isValidConnection(oppositeInput.type, type)) return slot;
		const exactMatch = inputs.findIndex((input) => input.type === type);
		if (exactMatch !== -1) return exactMatch;
		return inputs.findIndex((input) => LiteGraph.isValidConnection(input.type, outputType) && LiteGraph.isValidConnection(input.type, type));
	}
	/**
	* Resolves the link inside a subgraph node, from the subgraph IO node to the node inside the subgraph.
	* @param slot The slot index of the output on the subgraph node.
	* @param visited A set of unique IDs to guard against infinite recursion. See {@link resolveInput}.
	* @returns A DTO for the node, and the origin ID / slot index of the output.
	*/
	_resolveSubgraphOutput(slot, type, visited) {
		const { node } = this;
		const output = node.outputs.at(slot);
		if (!output) throw new SlotIndexError(`No output found for flattened id [${this.id}] slot [${slot}]`);
		if (!node.isSubgraphNode()) throw new TypeError(`Node is not a subgraph node: ${node.id}`);
		const innerResolved = node.resolveSubgraphOutputLink(slot);
		if (!innerResolved) return;
		const innerNode = innerResolved.outputNode;
		if (!innerNode) throw new Error(`No output node found for id [${this.id}] slot [${slot}] ${output.name}`);
		const innerNodeExecutionId = [
			...this.subgraphNodePath,
			node.id,
			innerNode.id
		].join(":");
		const innerNodeDto = this.nodesByExecutionId.get(innerNodeExecutionId);
		if (!innerNodeDto) throw new Error(`No inner node DTO found for id [${innerNodeExecutionId}]`);
		return innerNodeDto.resolveOutput(innerResolved.link.origin_slot, type, visited);
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/PromotedWidgetViewManager.ts
/**
* Reconciles promoted widget entries to stable view instances.
*
* Keeps object identity stable by key while preserving the current
* promotion order and deduplicating duplicate entries by first occurrence.
*/
var PromotedWidgetViewManager = class {
	viewCache = /* @__PURE__ */ new Map();
	cachedViews = null;
	cachedEntryKeys = null;
	reconcile(entries, createView) {
		const entryKeys = entries.map((entry) => this.makeKey(entry.sourceNodeId, entry.sourceWidgetName, entry.viewKey));
		if (this.cachedViews && this.areEntryKeysEqual(entryKeys)) return this.cachedViews;
		const views = [];
		const seenKeys = /* @__PURE__ */ new Set();
		for (const entry of entries) {
			const key = this.makeKey(entry.sourceNodeId, entry.sourceWidgetName, entry.viewKey);
			if (seenKeys.has(key)) continue;
			seenKeys.add(key);
			const existing = this.viewCache.get(key);
			if (existing) {
				views.push(existing);
				continue;
			}
			const nextView = createView(entry);
			this.viewCache.set(key, nextView);
			views.push(nextView);
		}
		for (const key of this.viewCache.keys()) if (!seenKeys.has(key)) this.viewCache.delete(key);
		this.cachedViews = views;
		this.cachedEntryKeys = entryKeys;
		return views;
	}
	getOrCreate(sourceNodeId, sourceWidgetName, createView, viewKey) {
		const key = this.makeKey(sourceNodeId, sourceWidgetName, viewKey);
		const cached = this.viewCache.get(key);
		if (cached) return cached;
		const view = createView();
		this.viewCache.set(key, view);
		return view;
	}
	remove(sourceNodeId, sourceWidgetName) {
		this.viewCache.delete(this.makeKey(sourceNodeId, sourceWidgetName));
		this.invalidateMemoizedList();
	}
	removeByViewKey(sourceNodeId, sourceWidgetName, viewKey) {
		this.viewCache.delete(this.makeKey(sourceNodeId, sourceWidgetName, viewKey));
		this.invalidateMemoizedList();
	}
	clear() {
		this.viewCache.clear();
		this.invalidateMemoizedList();
	}
	invalidateMemoizedList() {
		this.cachedViews = null;
		this.cachedEntryKeys = null;
	}
	areEntryKeysEqual(entryKeys) {
		if (!this.cachedEntryKeys) return false;
		if (this.cachedEntryKeys.length !== entryKeys.length) return false;
		for (let index = 0; index < entryKeys.length; index += 1) if (this.cachedEntryKeys[index] !== entryKeys[index]) return false;
		return true;
	}
	makeKey(sourceNodeId, sourceWidgetName, viewKey) {
		const baseKey = `${sourceNodeId}:${sourceWidgetName}`;
		return viewKey ? `${baseKey}:${viewKey}` : baseKey;
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/svgBitmapCache.ts
function createBitmapCache(svg, bitmapSize) {
	let bitmap = null;
	return { get() {
		if (bitmap) return bitmap;
		if (!svg.complete || svg.naturalWidth === 0) return svg;
		const canvas = document.createElement("canvas");
		canvas.width = bitmapSize;
		canvas.height = bitmapSize;
		const ctx = canvas.getContext("2d");
		if (!ctx) return svg;
		try {
			ctx.drawImage(svg, 0, 0, bitmapSize, bitmapSize);
		} catch {
			return svg;
		}
		bitmap = canvas;
		return bitmap;
	} };
}
//#endregion
//#region src/lib/litegraph/src/subgraph/SubgraphNode.ts
var workflowSvg = new Image();
workflowSvg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-width='1.3' d='M9.18613 3.09999H6.81377M9.18613 12.9H7.55288c-3.08678 0-5.35171-2.99581-4.60305-6.08843l.3054-1.26158M14.7486 2.1721l-.5931 2.45c-.132.54533-.6065.92789-1.1508.92789h-2.2993c-.77173 0-1.33797-.74895-1.1508-1.5221l.5931-2.45c.132-.54533.6065-.9279 1.1508-.9279h2.2993c.7717 0 1.3379.74896 1.1508 1.52211Zm-8.3033 0-.59309 2.45c-.13201.54533-.60646.92789-1.15076.92789H2.4021c-.7717 0-1.33793-.74895-1.15077-1.5221l.59309-2.45c.13201-.54533.60647-.9279 1.15077-.9279h2.29935c.77169 0 1.33792.74896 1.15076 1.52211Zm8.3033 9.8-.5931 2.45c-.132.5453-.6065.9279-1.1508.9279h-2.2993c-.77173 0-1.33797-.749-1.1508-1.5221l.5931-2.45c.132-.5453.6065-.9279 1.1508-.9279h2.2993c.7717 0 1.3379.7489 1.1508 1.5221Z'/%3E%3C/svg%3E %3C/svg%3E";
var workflowBitmapCache = createBitmapCache(workflowSvg, 32);
/**
* An instance of a {@link Subgraph}, displayed as a node on the containing (parent) graph.
*/
var SubgraphNode = class extends LGraphNode {
	type;
	isVirtualNode = true;
	graph;
	get rootGraph() {
		if (!this.graph) throw new NullGraphError(`SubgraphNode ${this.id} has no graph`);
		return this.graph.rootGraph;
	}
	get displayType() {
		return "Subgraph node";
	}
	isSubgraphNode() {
		return true;
	}
	_promotedViewManager = new PromotedWidgetViewManager();
	/**
	* Promotions buffered before this node is attached to a graph (`id === -1`).
	* They are flushed in `_flushPendingPromotions()` from `_setWidget()` and
	* `onAdded()`, so construction-time promotions require normal add-to-graph
	* lifecycle to persist.
	*/
	_pendingPromotions = [];
	_cacheVersion = 0;
	_linkedEntriesCache;
	_promotedViewsCache;
	_resolveLinkedPromotionBySubgraphInput(subgraphInput) {
		for (const linkId of subgraphInput.linkIds) {
			const link = this.subgraph.getLink(linkId);
			if (!link) continue;
			const { inputNode } = link.resolve(this.subgraph);
			if (!inputNode || !Array.isArray(inputNode.inputs)) continue;
			const targetInput = inputNode.inputs.find((entry) => entry.link === linkId);
			if (!targetInput) continue;
			const targetWidget = inputNode.getWidgetFromSlot(targetInput);
			if (!targetWidget) continue;
			if (inputNode.isSubgraphNode()) {
				if (isPromotedWidgetView(targetWidget)) return {
					sourceNodeId: String(inputNode.id),
					sourceWidgetName: targetWidget.sourceWidgetName,
					disambiguatingSourceNodeId: targetWidget.disambiguatingSourceNodeId ?? targetWidget.sourceNodeId
				};
				return {
					sourceNodeId: String(inputNode.id),
					sourceWidgetName: targetInput.name
				};
			}
			return {
				sourceNodeId: String(inputNode.id),
				sourceWidgetName: targetWidget.name
			};
		}
	}
	_getLinkedPromotionEntries(cache = true) {
		const hasMissingBoundSourceWidget = this._hasMissingBoundSourceWidget();
		const cached = this._linkedEntriesCache;
		if (cache && cached?.version === this._cacheVersion && cached.hasMissingBoundSourceWidget === hasMissingBoundSourceWidget) return cached.entries;
		const linkedEntries = [];
		for (const input of this.inputs) {
			const subgraphInput = input._subgraphSlot;
			if (!subgraphInput) continue;
			const boundWidget = input._widget && isPromotedWidgetView(input._widget) ? input._widget : void 0;
			if (boundWidget) {
				if (this.subgraph.getNodeById(boundWidget.sourceNodeId)?.widgets?.some((widget) => widget.name === boundWidget.sourceWidgetName) === true) {
					linkedEntries.push({
						inputName: input.label ?? input.name,
						inputKey: String(subgraphInput.id),
						slotName: subgraphInput.name,
						sourceNodeId: boundWidget.sourceNodeId,
						sourceWidgetName: boundWidget.sourceWidgetName
					});
					continue;
				}
			}
			const resolved = this._resolveLinkedPromotionBySubgraphInput(subgraphInput);
			if (!resolved) continue;
			linkedEntries.push({
				inputName: input.label ?? input.name,
				inputKey: String(subgraphInput.id),
				slotName: subgraphInput.name,
				...resolved
			});
		}
		const seenEntryKeys = /* @__PURE__ */ new Set();
		const deduplicatedEntries = linkedEntries.filter((entry) => {
			const entryKey = this._makePromotionViewKey(entry.inputKey, entry.sourceNodeId, entry.sourceWidgetName, entry.inputName, entry.disambiguatingSourceNodeId);
			if (seenEntryKeys.has(entryKey)) return false;
			seenEntryKeys.add(entryKey);
			return true;
		});
		if (cache) this._linkedEntriesCache = {
			version: this._cacheVersion,
			hasMissingBoundSourceWidget,
			entries: deduplicatedEntries
		};
		return deduplicatedEntries;
	}
	_hasMissingBoundSourceWidget() {
		return this.inputs.some((input) => {
			const boundWidget = input._widget && isPromotedWidgetView(input._widget) ? input._widget : void 0;
			if (!boundWidget) return false;
			return this.subgraph.getNodeById(boundWidget.sourceNodeId)?.widgets?.some((widget) => widget.name === boundWidget.sourceWidgetName) !== true;
		});
	}
	_getPromotedViews() {
		const entries = usePromotionStore().getPromotionsRef(this.rootGraph.id, this.id);
		const hasMissingBoundSourceWidget = this._hasMissingBoundSourceWidget();
		const cachedViews = this._promotedViewsCache;
		if (cachedViews?.version === this._cacheVersion && cachedViews.entriesRef === entries && cachedViews.hasMissingBoundSourceWidget === hasMissingBoundSourceWidget) return cachedViews.views;
		const linkedEntries = this._getLinkedPromotionEntries();
		const { displayNameByViewKey, reconcileEntries } = this._buildPromotionReconcileState(entries, linkedEntries);
		const views = this._promotedViewManager.reconcile(reconcileEntries, (entry) => createPromotedWidgetView(this, entry.sourceNodeId, entry.sourceWidgetName, entry.viewKey ? displayNameByViewKey.get(entry.viewKey) : void 0, entry.disambiguatingSourceNodeId, entry.slotName));
		this._promotedViewsCache = {
			version: this._cacheVersion,
			entriesRef: entries,
			hasMissingBoundSourceWidget,
			views
		};
		return views;
	}
	_invalidatePromotedViewsCache() {
		this._cacheVersion++;
	}
	_syncPromotions() {
		if (this.id === -1) return;
		const store = usePromotionStore();
		const entries = store.getPromotionsRef(this.rootGraph.id, this.id);
		const linkedEntries = this._getLinkedPromotionEntries(false);
		const { mergedEntries } = this._buildPromotionPersistenceState(entries, linkedEntries);
		if (!(mergedEntries.length !== entries.length || mergedEntries.some((entry, index) => entry.sourceNodeId !== entries[index]?.sourceNodeId || entry.sourceWidgetName !== entries[index]?.sourceWidgetName || entry.disambiguatingSourceNodeId !== entries[index]?.disambiguatingSourceNodeId))) return;
		store.setPromotions(this.rootGraph.id, this.id, mergedEntries);
	}
	_buildPromotionReconcileState(entries, linkedEntries) {
		const { fallbackStoredEntries } = this._collectLinkedAndFallbackEntries(entries, linkedEntries);
		const linkedReconcileEntries = this._buildLinkedReconcileEntries(linkedEntries);
		const shouldPersistLinkedOnly = this._shouldPersistLinkedOnly(linkedEntries, fallbackStoredEntries);
		const fallbackReconcileEntries = fallbackStoredEntries.map((e) => e.disambiguatingSourceNodeId ? {
			sourceNodeId: e.sourceNodeId,
			sourceWidgetName: e.sourceWidgetName,
			disambiguatingSourceNodeId: e.disambiguatingSourceNodeId,
			viewKey: `src:${e.sourceNodeId}:${e.sourceWidgetName}:${e.disambiguatingSourceNodeId}`
		} : e);
		const reconcileEntries = shouldPersistLinkedOnly ? linkedReconcileEntries : [...linkedReconcileEntries, ...fallbackReconcileEntries];
		return {
			displayNameByViewKey: this._buildDisplayNameByViewKey(linkedEntries),
			reconcileEntries
		};
	}
	_buildPromotionPersistenceState(entries, linkedEntries) {
		const { linkedPromotionEntries, fallbackStoredEntries } = this._collectLinkedAndFallbackEntries(entries, linkedEntries);
		return { mergedEntries: this._shouldPersistLinkedOnly(linkedEntries, fallbackStoredEntries) ? linkedPromotionEntries : [...linkedPromotionEntries, ...fallbackStoredEntries] };
	}
	_collectLinkedAndFallbackEntries(entries, linkedEntries) {
		const linkedPromotionEntries = this._toPromotionEntries(linkedEntries);
		const excludedEntryKeys = new Set(linkedPromotionEntries.map((entry) => this._makePromotionEntryKey(entry.sourceNodeId, entry.sourceWidgetName, entry.disambiguatingSourceNodeId)));
		const connectedEntryKeys = this._getConnectedPromotionEntryKeys();
		for (const key of connectedEntryKeys) excludedEntryKeys.add(key);
		const prePruneFallbackStoredEntries = this._getFallbackStoredEntries(entries, excludedEntryKeys);
		return {
			linkedPromotionEntries,
			fallbackStoredEntries: this._pruneStaleAliasFallbackEntries(prePruneFallbackStoredEntries, linkedPromotionEntries)
		};
	}
	_shouldPersistLinkedOnly(linkedEntries, fallbackStoredEntries) {
		if (!(this.inputs.length > 0 && linkedEntries.length === this.inputs.length)) return false;
		const linkedEntryKeys = new Set(linkedEntries.map((entry) => this._makePromotionEntryKey(entry.sourceNodeId, entry.sourceWidgetName)));
		const linkedWidgetNames = new Set(linkedEntries.map((entry) => entry.sourceWidgetName));
		return !fallbackStoredEntries.some((entry) => {
			const sourceNode = this.subgraph.getNodeById(entry.sourceNodeId);
			if (!sourceNode) return linkedWidgetNames.has(entry.sourceWidgetName);
			if (sourceNode.widgets?.some((widget) => widget.name === entry.sourceWidgetName) === true) return true;
			return linkedEntryKeys.has(this._makePromotionEntryKey(entry.sourceNodeId, entry.sourceWidgetName));
		});
	}
	_toPromotionEntries(linkedEntries) {
		return linkedEntries.map(({ sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId }) => ({
			sourceNodeId,
			sourceWidgetName,
			...disambiguatingSourceNodeId && { disambiguatingSourceNodeId }
		}));
	}
	_getFallbackStoredEntries(entries, excludedEntryKeys) {
		return entries.filter((entry) => !excludedEntryKeys.has(this._makePromotionEntryKey(entry.sourceNodeId, entry.sourceWidgetName, entry.disambiguatingSourceNodeId)));
	}
	_pruneStaleAliasFallbackEntries(fallbackStoredEntries, linkedPromotionEntries) {
		if (fallbackStoredEntries.length === 0 || linkedPromotionEntries.length === 0) return fallbackStoredEntries;
		const linkedConcreteKeys = new Set(linkedPromotionEntries.map((entry) => this._resolveConcretePromotionEntryKey(entry)).filter((key) => key !== void 0));
		if (linkedConcreteKeys.size === 0) return fallbackStoredEntries;
		const prunedEntries = [];
		for (const entry of fallbackStoredEntries) {
			if (!this.subgraph.getNodeById(entry.sourceNodeId)) continue;
			const concreteKey = this._resolveConcretePromotionEntryKey(entry);
			if (concreteKey && linkedConcreteKeys.has(concreteKey)) continue;
			prunedEntries.push(entry);
		}
		return prunedEntries;
	}
	_resolveConcretePromotionEntryKey(entry) {
		const result = resolveConcretePromotedWidget(this, entry.sourceNodeId, entry.sourceWidgetName, entry.disambiguatingSourceNodeId);
		if (result.status !== "resolved") return void 0;
		return this._makePromotionEntryKey(String(result.resolved.node.id), result.resolved.widget.name);
	}
	_getConnectedPromotionEntryKeys() {
		const connectedEntryKeys = /* @__PURE__ */ new Set();
		for (const input of this.inputs) {
			const subgraphInput = input._subgraphSlot;
			if (!subgraphInput) continue;
			const connectedWidgets = subgraphInput.getConnectedWidgets();
			for (const widget of connectedWidgets) {
				if (!hasWidgetNode(widget)) continue;
				connectedEntryKeys.add(this._makePromotionEntryKey(String(widget.node.id), widget.name));
			}
		}
		return connectedEntryKeys;
	}
	_buildLinkedReconcileEntries(linkedEntries) {
		return linkedEntries.map(({ inputKey, inputName, slotName, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId }) => ({
			sourceNodeId,
			sourceWidgetName,
			slotName,
			disambiguatingSourceNodeId,
			viewKey: this._makePromotionViewKey(inputKey, sourceNodeId, sourceWidgetName, inputName, disambiguatingSourceNodeId)
		}));
	}
	_buildDisplayNameByViewKey(linkedEntries) {
		return new Map(linkedEntries.map((entry) => [this._makePromotionViewKey(entry.inputKey, entry.sourceNodeId, entry.sourceWidgetName, entry.inputName, entry.disambiguatingSourceNodeId), entry.inputName]));
	}
	_makePromotionEntryKey(sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId) {
		return makePromotionEntryKey({
			sourceNodeId,
			sourceWidgetName,
			disambiguatingSourceNodeId
		});
	}
	_makePromotionViewKey(inputKey, sourceNodeId, sourceWidgetName, inputName = "", disambiguatingSourceNodeId) {
		return disambiguatingSourceNodeId ? JSON.stringify([
			inputKey,
			sourceNodeId,
			sourceWidgetName,
			inputName,
			disambiguatingSourceNodeId
		]) : JSON.stringify([
			inputKey,
			sourceNodeId,
			sourceWidgetName,
			inputName
		]);
	}
	_serializeEntries(entries) {
		return entries.map((e) => e.disambiguatingSourceNodeId ? [
			e.sourceNodeId,
			e.sourceWidgetName,
			e.disambiguatingSourceNodeId
		] : [e.sourceNodeId, e.sourceWidgetName]);
	}
	_resolveLegacyEntry(widgetName) {
		const input = this.inputs.find((i) => i.name === widgetName);
		if (!input?._widget) {
			const resolvedTarget = resolveSubgraphInputTarget(this, widgetName);
			if (!resolvedTarget) return void 0;
			return [resolvedTarget.nodeId, resolvedTarget.widgetName];
		}
		const widget = input._widget;
		if (isPromotedWidgetView(widget)) return [widget.sourceNodeId, widget.sourceWidgetName];
		const resolvedTarget = resolveSubgraphInputTarget(this, widgetName);
		if (!resolvedTarget) return void 0;
		return [resolvedTarget.nodeId, resolvedTarget.widgetName];
	}
	/** Manages lifecycle of all subgraph event listeners */
	_eventAbortController = new AbortController();
	constructor(graph, subgraph, instanceData) {
		super(subgraph.name, subgraph.id);
		this.subgraph = subgraph;
		this.graph = graph;
		Object.defineProperty(this, "widgets", {
			get: () => this._getPromotedViews(),
			set: () => {},
			configurable: true,
			enumerable: true
		});
		const subgraphEvents = this.subgraph.events;
		const { signal } = this._eventAbortController;
		subgraphEvents.addEventListener("input-added", (e) => {
			const subgraphInput = e.detail.input;
			const { name, type } = subgraphInput;
			const existingInput = this.inputs.find((input) => input._subgraphSlot === subgraphInput || input._subgraphSlot && input._subgraphSlot.id === subgraphInput.id);
			if (existingInput) {
				this._addSubgraphInputListeners(subgraphInput, existingInput);
				const linkId = subgraphInput.linkIds[0];
				if (linkId === void 0) return;
				const link = this.subgraph.getLink(linkId);
				if (!link) return;
				const { inputNode, input } = link.resolve(subgraph);
				if (!inputNode || !input) return;
				const widget = inputNode.getWidgetFromSlot(input);
				if (widget) this._setWidget(subgraphInput, existingInput, widget, input.widget, inputNode);
				return;
			}
			const input = this.addInput(name, type, { _subgraphSlot: subgraphInput });
			this._invalidatePromotedViewsCache();
			this._addSubgraphInputListeners(subgraphInput, input);
		}, { signal });
		subgraphEvents.addEventListener("removing-input", (e) => {
			const widget = e.detail.input._widget;
			if (widget) this.ensureWidgetRemoved(widget);
			this.removeInput(e.detail.index);
			this._invalidatePromotedViewsCache();
			this._syncPromotions();
			this.setDirtyCanvas(true, true);
		}, { signal });
		subgraphEvents.addEventListener("output-added", (e) => {
			const { name, type } = e.detail.output;
			this.addOutput(name, type);
		}, { signal });
		subgraphEvents.addEventListener("removing-output", (e) => {
			this.removeOutput(e.detail.index);
			this.setDirtyCanvas(true, true);
		}, { signal });
		subgraphEvents.addEventListener("renaming-input", (e) => {
			const { index, newName } = e.detail;
			const input = this.inputs.at(index);
			if (!input) throw new Error("Subgraph input not found");
			input.label = newName;
			if (input._widget) input._widget.label = newName;
			this._invalidatePromotedViewsCache();
			this.graph?.trigger("node:slot-label:changed", {
				nodeId: this.id,
				slotType: NodeSlotType.INPUT
			});
		}, { signal });
		subgraphEvents.addEventListener("renaming-output", (e) => {
			const { index, newName } = e.detail;
			const output = this.outputs.at(index);
			if (!output) throw new Error("Subgraph output not found");
			output.label = newName;
			this.graph?.trigger("node:slot-label:changed", {
				nodeId: this.id,
				slotType: NodeSlotType.OUTPUT
			});
		}, { signal });
		this.type = subgraph.id;
		this.configure(instanceData);
		this.addTitleButton({
			name: "enter_subgraph",
			text: "",
			yOffset: 0,
			xOffset: -10,
			fontSize: 16
		});
	}
	onTitleButtonClick(button, canvas) {
		if (button.name === "enter_subgraph") canvas.openSubgraph(this.subgraph, this);
		else super.onTitleButtonClick(button, canvas);
	}
	_addSubgraphInputListeners(subgraphInput, input) {
		input._subgraphSlot = subgraphInput;
		if (input._listenerController && typeof input._listenerController.abort === "function") input._listenerController.abort();
		input._listenerController = new AbortController();
		const { signal } = input._listenerController;
		subgraphInput.events.addEventListener("input-connected", (e) => {
			this._invalidatePromotedViewsCache();
			input.shape = this.getSlotShape(subgraphInput, e.detail.input);
			if (!e.detail.widget || !e.detail.node) return;
			const source = {
				sourceNodeId: String(e.detail.node.id),
				sourceWidgetName: e.detail.widget.name
			};
			if (usePromotionStore().isPromoted(this.rootGraph.id, this.id, source)) usePromotionStore().demote(this.rootGraph.id, this.id, source);
			const boundWidget = input._widget && isPromotedWidgetView(input._widget) ? input._widget : void 0;
			const hasStaleBoundWidget = boundWidget && this.subgraph.getNodeById(boundWidget.sourceNodeId)?.widgets?.some((widget) => widget.name === boundWidget.sourceWidgetName) !== true;
			if (!input._widget || hasStaleBoundWidget) this._setWidget(subgraphInput, input, e.detail.widget, e.detail.input.widget, e.detail.node);
			this._syncPromotions();
		}, { signal });
		subgraphInput.events.addEventListener("input-disconnected", () => {
			this._invalidatePromotedViewsCache();
			input.shape = this.getSlotShape(subgraphInput);
			if (subgraphInput.getConnectedWidgets().length > 0) {
				this._resolveInputWidget(subgraphInput, input);
				this._syncPromotions();
				return;
			}
			if (input._widget) this.ensureWidgetRemoved(input._widget);
			delete input.pos;
			delete input.widget;
			input._widget = void 0;
			this._syncPromotions();
		}, { signal });
	}
	_rebindInputSubgraphSlots() {
		this._invalidatePromotedViewsCache();
		const subgraphSlots = [...this.subgraph.inputNode.slots];
		const slotsBySignature = /* @__PURE__ */ new Map();
		const slotsByName = /* @__PURE__ */ new Map();
		for (const slot of subgraphSlots) {
			const signature = `${slot.name}:${String(slot.type)}`;
			const signatureSlots = slotsBySignature.get(signature);
			if (signatureSlots) signatureSlots.push(slot);
			else slotsBySignature.set(signature, [slot]);
			const nameSlots = slotsByName.get(slot.name);
			if (nameSlots) nameSlots.push(slot);
			else slotsByName.set(slot.name, [slot]);
		}
		const assignedSlotIds = /* @__PURE__ */ new Set();
		const takeUnassignedSlot = (slots) => {
			if (!slots) return void 0;
			return slots.find((slot) => !assignedSlotIds.has(String(slot.id)));
		};
		for (const input of this.inputs) {
			const existingSlot = input._subgraphSlot;
			if (existingSlot && this.subgraph.inputNode.slots.some((slot) => slot === existingSlot)) {
				assignedSlotIds.add(String(existingSlot.id));
				continue;
			}
			const signature = `${input.name}:${String(input.type)}`;
			const matchedSlot = takeUnassignedSlot(slotsBySignature.get(signature)) ?? takeUnassignedSlot(slotsByName.get(input.name));
			if (matchedSlot) {
				input._subgraphSlot = matchedSlot;
				assignedSlotIds.add(String(matchedSlot.id));
			} else delete input._subgraphSlot;
		}
	}
	configure(info) {
		for (const input of this.inputs) if (input._listenerController && typeof input._listenerController.abort === "function") input._listenerController.abort();
		this.inputs.length = 0;
		this.inputs.push(...this.subgraph.inputNode.slots.map((slot) => Object.assign(new NodeInputSlot({
			name: slot.name,
			localized_name: slot.localized_name,
			label: slot.label,
			shape: this.getSlotShape(slot),
			type: slot.type,
			link: null
		}, this), { _subgraphSlot: slot })));
		this.outputs.length = 0;
		this.outputs.push(...this.subgraph.outputNode.slots.map((slot) => new NodeOutputSlot({
			name: slot.name,
			localized_name: slot.localized_name,
			label: slot.label,
			type: slot.type,
			links: null
		}, this)));
		super.configure(info);
	}
	_internalConfigureAfterSlots() {
		this._rebindInputSubgraphSlots();
		this.inputs = this.inputs.filter((input) => input._subgraphSlot);
		this.properties.proxyWidgets ??= [];
		this._promotedViewManager.clear();
		this._invalidatePromotedViewsCache();
		const raw = parseProxyWidgets(this.properties.proxyWidgets);
		const store = usePromotionStore();
		const entries = raw.map(([nodeId, widgetName, sourceNodeId]) => {
			if (nodeId === "-1") {
				const resolved = this._resolveLegacyEntry(widgetName);
				if (resolved) return {
					sourceNodeId: resolved[0],
					sourceWidgetName: resolved[1]
				};
				return null;
			}
			if (!this.subgraph.getNodeById(nodeId)) return null;
			return normalizeLegacyProxyWidgetEntry(this, nodeId, widgetName, sourceNodeId);
		}).filter((e) => e !== null);
		store.setPromotions(this.rootGraph.id, this.id, entries);
		const serialized = this._serializeEntries(entries);
		if (JSON.stringify(serialized) !== JSON.stringify(raw)) this.properties.proxyWidgets = serialized;
		for (const input of this.inputs) {
			const subgraphInput = input._subgraphSlot;
			if (!subgraphInput) {
				console.warn(`[SubgraphNode.configure] No subgraph input found for input ${input.name}, skipping`);
				continue;
			}
			this._addSubgraphInputListeners(subgraphInput, input);
			this._resolveInputWidget(subgraphInput, input);
		}
		this._syncPromotions();
		for (const node of this.subgraph.nodes) {
			if (!supportsVirtualCanvasImagePreview(node)) continue;
			const source = {
				sourceNodeId: String(node.id),
				sourceWidgetName: CANVAS_IMAGE_PREVIEW_WIDGET
			};
			if (store.isPromoted(this.rootGraph.id, this.id, source)) continue;
			store.promote(this.rootGraph.id, this.id, source);
		}
	}
	/**
	* Clears all cached promoted widget views and re-resolves `input._widget`
	* bindings from the current subgraph connections.  Called after ancestor
	* promotions are repointed during nested subgraph packing.
	*/
	rebuildInputWidgetBindings() {
		this._promotedViewManager.clear();
		this._invalidatePromotedViewsCache();
		for (const input of this.inputs) {
			delete input.widget;
			delete input.pos;
			input._widget = void 0;
			const subgraphInput = input._subgraphSlot;
			if (!subgraphInput) continue;
			this._resolveInputWidget(subgraphInput, input);
		}
		this._syncPromotions();
	}
	_resolveInputWidget(subgraphInput, input) {
		for (const linkId of subgraphInput.linkIds) {
			const link = this.subgraph.getLink(linkId);
			if (!link) {
				console.warn(`[SubgraphNode.configure] No link found for link ID ${linkId}`, this);
				continue;
			}
			const { inputNode } = link.resolve(this.subgraph);
			if (!inputNode) {
				console.warn("Failed to resolve inputNode", link, this);
				continue;
			}
			const targetInput = inputNode.inputs.find((inp) => inp.link === linkId);
			if (!targetInput) {
				console.warn("Failed to find corresponding input", link, inputNode);
				continue;
			}
			const widget = inputNode.getWidgetFromSlot(targetInput);
			if (!widget) continue;
			this._setWidget(subgraphInput, input, widget, targetInput.widget, inputNode);
			break;
		}
	}
	/**
	* Binds a promoted widget view to a subgraph input slot.
	*
	* Creates or retrieves a {@link PromotedWidgetView}, registers it in the
	* promotion store, sets up the prototype chain for multi-level subgraph
	* nesting, and dispatches the `widget-promoted` event.
	*/
	_setWidget(subgraphInput, input, interiorWidget, inputWidget, interiorNode) {
		this._invalidatePromotedViewsCache();
		this._flushPendingPromotions();
		const nodeId = String(interiorNode.id);
		const widgetName = interiorWidget.name;
		const sourceNodeId = interiorNode.isSubgraphNode() && isPromotedWidgetView(interiorWidget) ? interiorWidget.sourceNodeId : void 0;
		const previousView = input._widget;
		if (previousView && isPromotedWidgetView(previousView) && (previousView.sourceNodeId !== nodeId || previousView.sourceWidgetName !== widgetName)) {
			usePromotionStore().demote(this.rootGraph.id, this.id, previousView);
			this._removePromotedView(previousView);
		}
		if (this.id === -1) {
			if (!this._pendingPromotions.some((entry) => entry.sourceNodeId === nodeId && entry.sourceWidgetName === widgetName && entry.disambiguatingSourceNodeId === sourceNodeId)) this._pendingPromotions.push({
				sourceNodeId: nodeId,
				sourceWidgetName: widgetName,
				...sourceNodeId && { disambiguatingSourceNodeId: sourceNodeId }
			});
		} else usePromotionStore().promote(this.rootGraph.id, this.id, {
			sourceNodeId: nodeId,
			sourceWidgetName: widgetName,
			disambiguatingSourceNodeId: sourceNodeId
		});
		const view = this._promotedViewManager.getOrCreate(nodeId, widgetName, () => createPromotedWidgetView(this, nodeId, widgetName, input.label ?? subgraphInput.name, sourceNodeId, subgraphInput.name), this._makePromotionViewKey(String(subgraphInput.id), nodeId, widgetName, input.label ?? input.name, sourceNodeId));
		input.widget ??= { name: subgraphInput.name };
		input.widget.name = subgraphInput.name;
		if (inputWidget) Object.setPrototypeOf(input.widget, inputWidget);
		input._widget = view;
		this.subgraph.events.dispatch("widget-promoted", {
			widget: view,
			subgraphNode: this
		});
	}
	_flushPendingPromotions() {
		if (this.id === -1 || this._pendingPromotions.length === 0) return;
		for (const entry of this._pendingPromotions) usePromotionStore().promote(this.rootGraph.id, this.id, entry);
		this._pendingPromotions = [];
	}
	onAdded(_graph) {
		this._flushPendingPromotions();
		this._syncPromotions();
	}
	/**
	* Ensures the subgraph slot is in the params before adding the input as normal.
	* @param name The name of the input slot.
	* @param type The type of the input slot.
	* @param inputProperties Properties that are directly assigned to the created input. Default: a new, empty object.
	* @returns The new input slot.
	* @remarks Assertion is required to instantiate empty generic POJO.
	*/
	addInput(name, type, inputProperties = {}) {
		return super.addInput(name, type, inputProperties);
	}
	getSlotFromWidget(widget) {
		if (!widget || !isPromotedWidgetView(widget)) return super.getSlotFromWidget(widget);
		return this.inputs.find((input) => input._widget === widget);
	}
	getWidgetFromSlot(slot) {
		if (slot._widget) return slot._widget;
		return super.getWidgetFromSlot(slot);
	}
	getInputLink(slot) {
		const innerLink = this.subgraph.outputNode.slots[slot].getLinks().at(0);
		if (!innerLink) {
			console.warn(`SubgraphNode.getInputLink: no inner link found for slot ${slot}`);
			return null;
		}
		const newLink = LLink.create(innerLink);
		newLink.origin_id = `${this.id}:${innerLink.origin_id}`;
		newLink.origin_slot = innerLink.origin_slot;
		return newLink;
	}
	/**
	* Finds the internal links connected to the given input slot inside the subgraph, and resolves the nodes / slots.
	* @param slot The slot index
	* @returns The resolved connections, or undefined if no input node is found.
	* @remarks This is used to resolve the input links when dragging a link from a subgraph input slot.
	*/
	resolveSubgraphInputLinks(slot) {
		const inputSlot = this.subgraph.inputNode.slots[slot];
		const innerLinks = inputSlot.getLinks();
		if (innerLinks.length === 0) {
			console.warn(`[SubgraphNode.resolveSubgraphInputLinks] No inner links found for input slot [${slot}] ${inputSlot.name}`, this);
			return [];
		}
		return innerLinks.map((link) => link.resolve(this.subgraph));
	}
	/**
	* Finds the internal link connected to the given output slot inside the subgraph, and resolves the nodes / slots.
	* @param slot The slot index
	* @returns The output node if found, otherwise undefined.
	*/
	resolveSubgraphOutputLink(slot) {
		const outputSlot = this.subgraph.outputNode.slots[slot];
		const innerLink = outputSlot.getLinks().at(0);
		if (innerLink) return innerLink.resolve(this.subgraph);
		console.warn(`[SubgraphNode.resolveSubgraphOutputLink] No inner link found for output slot [${slot}] ${outputSlot.name}`, this);
	}
	/** @internal Used to flatten the subgraph before execution. */
	getInnerNodes(executableNodes, subgraphNodePath = [], nodes = [], visited = /* @__PURE__ */ new Set()) {
		if (visited.has(this)) {
			const nodeInfo = `${this.id}${this.title ? ` (${this.title})` : ""}`;
			const subgraphInfo = `'${this.subgraph.name || "Unnamed Subgraph"}'`;
			const depth = subgraphNodePath.length;
			throw new RecursionError(`Circular reference detected at depth ${depth} in node ${nodeInfo} of subgraph ${subgraphInfo}. This creates an infinite loop in the subgraph hierarchy.`);
		}
		visited.add(this);
		const subgraphInstanceIdPath = [...subgraphNodePath, this.id];
		const parentSubgraphNode = this.rootGraph.resolveSubgraphIdPath(subgraphNodePath).at(-1);
		const subgraphNodeDto = new ExecutableNodeDTO(this, subgraphNodePath, executableNodes, parentSubgraphNode);
		executableNodes.set(subgraphNodeDto.id, subgraphNodeDto);
		for (const node of this.subgraph.nodes) if ("getInnerNodes" in node && node.getInnerNodes) node.getInnerNodes(executableNodes, subgraphInstanceIdPath, nodes, new Set(visited));
		else {
			const aVeryRealNode = new ExecutableNodeDTO(node, subgraphInstanceIdPath, executableNodes, this);
			executableNodes.set(aVeryRealNode.id, aVeryRealNode);
			nodes.push(aVeryRealNode);
		}
		return nodes;
	}
	/** Clear the DOM position override for a promoted view's interior widget. */
	_clearDomOverrideForView(view) {
		const resolved = resolveConcretePromotedWidget(this, view.sourceNodeId, view.sourceWidgetName, view.disambiguatingSourceNodeId);
		if (resolved.status !== "resolved") return;
		const interiorWidget = resolved.resolved.widget;
		if (interiorWidget && "id" in interiorWidget && ("element" in interiorWidget || "component" in interiorWidget)) useDomWidgetStore().clearPositionOverride(String(interiorWidget.id));
	}
	_removePromotedView(view) {
		this._invalidatePromotedViewsCache();
		this._promotedViewManager.remove(view.sourceNodeId, view.sourceWidgetName);
		for (const input of this.inputs) {
			if (input._widget !== view || !input._subgraphSlot) continue;
			const inputName = input.label ?? input.name;
			this._promotedViewManager.removeByViewKey(view.sourceNodeId, view.sourceWidgetName, this._makePromotionViewKey(String(input._subgraphSlot.id), view.sourceNodeId, view.sourceWidgetName, inputName, view.disambiguatingSourceNodeId));
		}
	}
	removeWidget(widget) {
		this.ensureWidgetRemoved(widget);
	}
	ensureWidgetRemoved(widget) {
		if (isPromotedWidgetView(widget)) {
			this._clearDomOverrideForView(widget);
			usePromotionStore().demote(this.rootGraph.id, this.id, widget);
			this._removePromotedView(widget);
		}
		for (const input of this.inputs) if (input._widget === widget) {
			input._widget = void 0;
			input.widget = void 0;
		}
		this.subgraph.events.dispatch("widget-demoted", {
			widget,
			subgraphNode: this
		});
		this._syncPromotions();
	}
	onRemoved() {
		this._eventAbortController.abort();
		this._invalidatePromotedViewsCache();
		for (const widget of this.widgets) {
			if (isPromotedWidgetView(widget)) this._clearDomOverrideForView(widget);
			this.subgraph.events.dispatch("widget-demoted", {
				widget,
				subgraphNode: this
			});
		}
		usePromotionStore().setPromotions(this.rootGraph.id, this.id, []);
		this._promotedViewManager.clear();
		for (const input of this.inputs) if (input._listenerController && typeof input._listenerController.abort === "function") input._listenerController.abort();
	}
	drawTitleBox(ctx, { scale, low_quality = false, title_height = LiteGraph.NODE_TITLE_HEIGHT, box_size = 10 }) {
		if (this.onDrawTitleBox) {
			this.onDrawTitleBox(ctx, title_height, this.renderingSize, scale);
			return;
		}
		ctx.save();
		ctx.fillStyle = "#3b82f6";
		ctx.beginPath();
		ctx.roundRect(6, -24.5, 22, 20, 5);
		ctx.fill();
		if (!low_quality) {
			ctx.translate(25, 23);
			ctx.scale(-1.5, 1.5);
			ctx.drawImage(workflowBitmapCache.get(), 0, -title_height, box_size, box_size);
		}
		ctx.restore();
	}
	/**
	* Synchronizes widget values from this SubgraphNode instance to the
	* corresponding widgets in the subgraph definition before serialization.
	* This ensures nested subgraph widget values are preserved when saving.
	*/
	serialize() {
		for (const input of this.inputs) {
			if (!input._widget) continue;
			const subgraphInput = input._subgraphSlot ?? this.subgraph.inputNode.slots.find((slot) => slot.name === input.name);
			if (!subgraphInput) continue;
			const connectedWidgets = subgraphInput.getConnectedWidgets();
			for (const connectedWidget of connectedWidgets) connectedWidget.value = input._widget.value;
		}
		const entries = usePromotionStore().getPromotions(this.rootGraph.id, this.id);
		this.properties.proxyWidgets = this._serializeEntries(entries);
		return super.serialize();
	}
	clone() {
		return super.clone();
	}
	getSlotShape(slot, extraInput) {
		const shapes = slot.linkIds.map((id) => this.subgraph.links[id]?.resolve(this.subgraph)?.input?.shape);
		if (extraInput) shapes.push(extraInput.shape);
		return shapes.every((shape) => shape === shapes[0]) ? shapes[0] : void 0;
	}
};
//#endregion
//#region src/lib/litegraph/src/utils/arrange.ts
/**
* Finds the nodes that are farthest in all four directions, representing the boundary of the nodes.
* @param nodes The nodes to check the edges of
* @returns An object listing the furthest node (edge) in all four directions.
* `null` if no nodes were supplied or the first node was falsy.
*/
function getBoundaryNodes(nodes) {
	const valid = nodes?.find((x) => x);
	if (!valid) return null;
	let top = valid;
	let right = valid;
	let bottom = valid;
	let left = valid;
	for (const node of nodes) {
		if (!node) continue;
		const [x, y] = node.pos;
		const [width, height] = node.size;
		if (y < top.pos[1]) top = node;
		if (x + width > right.pos[0] + right.size[0]) right = node;
		if (y + height > bottom.pos[1] + bottom.size[1]) bottom = node;
		if (x < left.pos[0]) left = node;
	}
	return {
		top,
		right,
		bottom,
		left
	};
}
/**
* Distributes nodes evenly along a horizontal or vertical plane.
* @param nodes The nodes to distribute
* @param horizontal If true, distributes along the horizontal plane.  Otherwise, the vertical plane.
*/
function distributeNodes(nodes, horizontal) {
	const nodeCount = nodes?.length;
	if (!(nodeCount > 1)) return [];
	const index = horizontal ? 0 : 1;
	let total = 0;
	let highest = -Infinity;
	for (const node of nodes) {
		total += node.size[index];
		const high = node.pos[index] + node.size[index];
		if (high > highest) highest = high;
	}
	const sorted = [...nodes].sort((a, b) => a.pos[index] - b.pos[index]);
	const lowest = sorted[0].pos[index];
	const gap = (highest - lowest - total) / (nodeCount - 1);
	let startAt = lowest;
	for (let i = 0; i < nodeCount; i++) {
		const node = sorted[i];
		node.pos[index] = startAt + gap * i;
		startAt += node.size[index];
	}
	return sorted.map((node) => ({
		node,
		newPos: {
			x: node.pos[0],
			y: node.pos[1]
		}
	}));
}
/**
* Aligns all nodes along the edge of a node.
* @param nodes The nodes to align
* @param direction The edge to align nodes on
* @param align_to The node to align all other nodes to.  If undefined, the farthest node will be used.
*/
function alignNodes(nodes, direction, align_to) {
	if (!nodes) return [];
	const boundary = align_to === void 0 ? getBoundaryNodes(nodes) : {
		top: align_to,
		right: align_to,
		bottom: align_to,
		left: align_to
	};
	if (boundary === null) return [];
	const nodePositions = nodes.map((node) => {
		switch (direction) {
			case "right": return {
				node,
				newPos: {
					x: boundary.right.pos[0] + boundary.right.size[0] - node.size[0],
					y: node.pos[1]
				}
			};
			case "left": return {
				node,
				newPos: {
					x: boundary.left.pos[0],
					y: node.pos[1]
				}
			};
			case "top": return {
				node,
				newPos: {
					x: node.pos[0],
					y: boundary.top.pos[1]
				}
			};
			case "bottom": return {
				node,
				newPos: {
					x: node.pos[0],
					y: boundary.bottom.pos[1] + boundary.bottom.size[1] - node.size[1]
				}
			};
		}
	});
	for (const { node, newPos } of nodePositions) node.setPos(newPos.x, newPos.y);
	return nodePositions;
}
//#endregion
//#region src/lib/litegraph/src/utils/linkColors.ts
/**
* Resolve the colour used while rendering or previewing a connection of a given slot type.
*/
function resolveConnectingLinkColor(type) {
	return type === LiteGraph.EVENT ? LiteGraph.EVENT_LINK_COLOR : LiteGraph.CONNECTING_LINK_COLOR;
}
//#endregion
//#region src/lib/litegraph/src/LGraphCanvas.ts
var cursors = {
	NE: "nesw-resize",
	SE: "nwse-resize",
	SW: "nesw-resize",
	NW: "nwse-resize"
};
var temp = new Rectangle();
var temp_vec2 = [0, 0];
var tmp_area = new Rectangle();
var margin_area = new Rectangle();
var link_bounding = new Rectangle();
/**
* This class is in charge of rendering one graph inside a canvas. And provides all the interaction required.
* Valid callbacks are: onNodeSelected, onNodeDeselected, onShowNodePanel, onNodeDblClicked
*/
var LGraphCanvas = class LGraphCanvas {
	static DEFAULT_BACKGROUND_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNrs1rEKwjAUhlETUkj3vP9rdmr1Ysammk2w5wdxuLgcMHyptfawuZX4pJSWZTnfnu/lnIe/jNNxHHGNn//HNbbv+4dr6V+11uF527arU7+u63qfa/bnmh8sWLBgwYJlqRf8MEptXPBXJXa37BSl3ixYsGDBMliwFLyCV/DeLIMFCxYsWLBMwSt4Be/NggXLYMGCBUvBK3iNruC9WbBgwYJlsGApeAWv4L1ZBgsWLFiwYJmCV/AK3psFC5bBggULloJX8BpdwXuzYMGCBctgwVLwCl7Be7MMFixYsGDBsu8FH1FaSmExVfAxBa/gvVmwYMGCZbBg/W4vAQYA5tRF9QYlv/QAAAAASUVORK5CYII=";
	static DEFAULT_EVENT_LINK_COLOR = "#A86";
	/** Link type to colour dictionary. */
	static link_type_colors = {
		"-1": LGraphCanvas.DEFAULT_EVENT_LINK_COLOR,
		number: "#AAA",
		node: "#DCA"
	};
	static gradients = {};
	static search_limit = -1;
	static node_colors = {
		red: {
			color: "#322",
			bgcolor: "#533",
			groupcolor: "#A88"
		},
		brown: {
			color: "#332922",
			bgcolor: "#593930",
			groupcolor: "#b06634"
		},
		green: {
			color: "#232",
			bgcolor: "#353",
			groupcolor: "#8A8"
		},
		blue: {
			color: "#223",
			bgcolor: "#335",
			groupcolor: "#88A"
		},
		pale_blue: {
			color: "#2a363b",
			bgcolor: "#3f5159",
			groupcolor: "#3f789e"
		},
		cyan: {
			color: "#233",
			bgcolor: "#355",
			groupcolor: "#8AA"
		},
		purple: {
			color: "#323",
			bgcolor: "#535",
			groupcolor: "#a1309b"
		},
		yellow: {
			color: "#432",
			bgcolor: "#653",
			groupcolor: "#b58b2a"
		},
		black: {
			color: "#222",
			bgcolor: "#000",
			groupcolor: "#444"
		}
	};
	/**
	* @internal Exclusively a workaround for design limitation in {@link LGraphNode.computeSize}.
	*/
	static _measureText;
	/**
	* The state of this canvas, e.g. whether it is being dragged, or read-only.
	*
	* Implemented as a POCO that can be proxied without side-effects.
	*/
	state = {
		draggingItems: false,
		draggingCanvas: false,
		readOnly: false,
		hoveringOver: CanvasItem.Nothing,
		shouldSetCursor: true,
		selectionChanged: false,
		ghostNodeId: null
	};
	_subgraph;
	get subgraph() {
		return this._subgraph;
	}
	set subgraph(value) {
		if (value !== this._subgraph) {
			this._subgraph = value;
			if (value) this.dispatch("litegraph:set-graph", {
				oldGraph: this._subgraph,
				newGraph: value
			});
		}
	}
	/**
	* The location of the fps info widget. Leaving an element unset will use the default position for that element.
	*/
	fpsInfoLocation;
	dispatch(type, detail) {
		const event = new CustomEvent(type, {
			detail,
			bubbles: true
		});
		return this.canvas.dispatchEvent(event);
	}
	dispatchEvent(type, detail) {
		this.canvas.dispatchEvent(new CustomEvent(type, { detail }));
	}
	_setCursor;
	_updateCursorStyle() {
		if (!this.state.shouldSetCursor) return;
		const crosshairItems = CanvasItem.Node | CanvasItem.RerouteSlot | CanvasItem.SubgraphIoNode | CanvasItem.SubgraphIoSlot;
		let cursor = "default";
		if (this.state.draggingCanvas) cursor = "grabbing";
		else if (this.state.readOnly) cursor = "grab";
		else if (this.pointer.resizeDirection) cursor = cursors[this.pointer.resizeDirection] ?? cursors.SE;
		else if (this.state.hoveringOver & crosshairItems) cursor = "crosshair";
		else if (this.state.hoveringOver & CanvasItem.Reroute) cursor = "grab";
		this._setCursor(cursor);
	}
	_previously_dragging_canvas = null;
	/** @deprecated @inheritdoc {@link LGraphCanvasState.readOnly} */
	get read_only() {
		return this.state.readOnly;
	}
	set read_only(value) {
		this.state.readOnly = value;
		this._updateCursorStyle();
	}
	get isDragging() {
		return this.state.draggingItems;
	}
	set isDragging(value) {
		this.state.draggingItems = value;
	}
	get hoveringOver() {
		return this.state.hoveringOver;
	}
	set hoveringOver(value) {
		this.state.hoveringOver = value;
		this._updateCursorStyle();
	}
	/** @deprecated Replace all references with {@link pointer}.{@link CanvasPointer.isDown isDown}. */
	get pointer_is_down() {
		return this.pointer.isDown;
	}
	/** @deprecated Replace all references with {@link pointer}.{@link CanvasPointer.isDouble isDouble}. */
	get pointer_is_double() {
		return this.pointer.isDouble;
	}
	/** @deprecated @inheritdoc {@link LGraphCanvasState.draggingCanvas} */
	get dragging_canvas() {
		return this.state.draggingCanvas;
	}
	set dragging_canvas(value) {
		this.state.draggingCanvas = value;
		this._updateCursorStyle();
	}
	/**
	* @deprecated Use {@link LGraphNode.titleFontStyle} instead.
	*/
	get title_text_font() {
		return `${LiteGraph.NODE_TEXT_SIZE}px ${LiteGraph.NODE_FONT}`;
	}
	get inner_text_font() {
		return `normal ${LiteGraph.NODE_SUBTEXT_SIZE}px ${LiteGraph.NODE_FONT}`;
	}
	_maximumFrameGap = 0;
	/** Maximum frames per second to render. 0: unlimited. Default: 0 */
	get maximumFps() {
		return this._maximumFrameGap > Number.EPSILON ? this._maximumFrameGap / 1e3 : 0;
	}
	set maximumFps(value) {
		this._maximumFrameGap = value > Number.EPSILON ? 1e3 / value : 0;
	}
	/**
	* @deprecated Use {@link LiteGraphGlobal.ROUND_RADIUS} instead.
	*/
	get round_radius() {
		return LiteGraph.ROUND_RADIUS;
	}
	/**
	* @deprecated Use {@link LiteGraphGlobal.ROUND_RADIUS} instead.
	*/
	set round_radius(value) {
		LiteGraph.ROUND_RADIUS = value;
	}
	_lowQualityZoomThreshold = 0;
	_isLowQuality = false;
	/**
	* Updates the low quality zoom threshold based on current settings.
	* Called when min_font_size_for_lod or DPR changes.
	*/
	updateLowQualityThreshold() {
		if (this._min_font_size_for_lod === 0) {
			this._lowQualityZoomThreshold = 0;
			this._isLowQuality = false;
			return;
		}
		const baseFontSize = LiteGraph.NODE_TEXT_SIZE;
		const dprAdjustment = Math.sqrt(window.devicePixelRatio || 1);
		this._lowQualityZoomThreshold = this._min_font_size_for_lod / (baseFontSize * dprAdjustment);
		this._isLowQuality = this.ds.scale < this._lowQualityZoomThreshold;
	}
	/**
	* Render low quality when zoomed out based on minimum readable font size.
	*/
	get low_quality() {
		return this._isLowQuality;
	}
	options;
	background_image;
	ds;
	pointer;
	zoom_modify_alpha;
	zoom_speed;
	auto_pan_speed;
	node_title_color;
	default_link_color;
	default_connection_color;
	default_connection_color_byType;
	default_connection_color_byTypeOff;
	/** Gets link colours. Extremely basic impl. until the legacy object dictionaries are removed. */
	colourGetter = {
		getConnectedColor: (type) => this.default_connection_color_byType[type] || this.default_connection_color.output_on,
		getDisconnectedColor: (type) => this.default_connection_color_byTypeOff[type] || this.default_connection_color_byType[type] || this.default_connection_color.output_off
	};
	highquality_render;
	use_gradients;
	editor_alpha;
	pause_rendering;
	clear_background;
	clear_background_color;
	render_only_selected;
	show_info;
	/** Additional text appended to the canvas info overlay (rendered by {@link renderInfo}). */
	info_text;
	allow_dragcanvas;
	allow_dragnodes;
	allow_interaction;
	multi_select;
	groupSelectChildren;
	allow_searchbox;
	allow_reconnect_links;
	align_to_grid;
	drag_mode;
	dragging_rectangle;
	filter;
	set_canvas_dirty_on_mouse_event;
	always_render_background;
	render_shadows;
	render_canvas_border;
	render_connections_shadows;
	render_connections_border;
	render_curved_connections;
	render_connection_arrows;
	render_collapsed_slots;
	render_execution_order;
	render_link_tooltip;
	/** Shape of the markers shown at the midpoint of links.  Default: Circle */
	linkMarkerShape = LinkMarkerShape.Circle;
	links_render_mode;
	/** Minimum font size in pixels before switching to low quality rendering.
	* This initializes first and if we can't get the value from the settings we default to 8px
	*/
	_min_font_size_for_lod = 8;
	get min_font_size_for_lod() {
		return this._min_font_size_for_lod;
	}
	set min_font_size_for_lod(value) {
		if (this._min_font_size_for_lod !== value) {
			this._min_font_size_for_lod = value;
			this.updateLowQualityThreshold();
		}
	}
	/** mouse in canvas coordinates, where 0,0 is the top-left corner of the blue rectangle */
	mouse;
	/** mouse in graph coordinates, where 0,0 is the top-left corner of the blue rectangle */
	graph_mouse;
	/** @deprecated LEGACY: REMOVE THIS, USE {@link graph_mouse} INSTEAD */
	canvas_mouse;
	/** to personalize the search box */
	onSearchBox;
	onSearchBoxSelection;
	onMouse;
	/** to render background objects (behind nodes and connections) in the canvas affected by transform */
	onDrawBackground;
	/** to render foreground objects (above nodes and connections) in the canvas affected by transform */
	onDrawForeground;
	connections_width;
	/** The current node being drawn by {@link drawNode}.  This should NOT be used to determine the currently selected node.  See {@link selectedItems} */
	current_node;
	/** used for widgets */
	node_widget;
	/** The link to draw a tooltip for. */
	over_link_center;
	last_mouse_position;
	/** The visible area of this canvas.  Tightly coupled with {@link ds}. */
	visible_area;
	/** Contains all links and reroutes that were rendered.  Repopulated every render cycle. */
	renderedPaths = /* @__PURE__ */ new Set();
	/** @deprecated Replaced by {@link renderedPaths}, but length is set to 0 by some extensions. */
	visible_links = [];
	/** @deprecated This array is populated and cleared to support legacy extensions. The contents are ignored by Litegraph. */
	connecting_links;
	linkConnector = new LinkConnector((links) => this.connecting_links = links);
	/** The viewport of this canvas.  Tightly coupled with {@link ds}. */
	viewport;
	autoresize;
	static active_canvas;
	frame = 0;
	last_draw_time = 0;
	render_time = 0;
	fps = 0;
	/** @deprecated See {@link LGraphCanvas.selectedItems} */
	selected_nodes = {};
	/** All selected nodes, groups, and reroutes */
	selectedItems = /* @__PURE__ */ new Set();
	/** The group currently being resized. */
	resizingGroup = null;
	/** @deprecated See {@link LGraphCanvas.selectedItems} */
	selected_group = null;
	/** The nodes that are currently visible on the canvas. */
	visible_nodes = [];
	/**
	* The IDs of the nodes that are currently visible on the canvas. More
	* performant than {@link visible_nodes} for visibility checks.
	*/
	_visible_node_ids = /* @__PURE__ */ new Set();
	node_over;
	node_capturing_input;
	highlighted_links = {};
	_visibleReroutes = /* @__PURE__ */ new Set();
	_autoPan = null;
	_ghostPointerHandler = null;
	dirty_canvas = true;
	dirty_bgcanvas = true;
	/** A map of nodes that require selective-redraw */
	dirty_nodes = /* @__PURE__ */ new Map();
	dirty_area;
	/** @deprecated Unused */
	node_in_panel;
	last_mouse = [0, 0];
	last_mouseclick = 0;
	graph;
	get _graph() {
		if (!this.graph) throw new NullGraphError();
		return this.graph;
	}
	canvas;
	bgcanvas;
	overlayCanvas = null;
	overlayCtx = null;
	ctx;
	_events_binded;
	bgctx;
	is_rendering;
	/** @deprecated Panels */
	block_click;
	/** @deprecated Panels */
	last_click_position;
	resizing_node;
	/** @deprecated See {@link LGraphCanvas.resizingGroup} */
	selected_group_resizing;
	/** @deprecated See {@link pointer}.{@link CanvasPointer.dragStarted dragStarted} */
	last_mouse_dragging;
	onMouseDown;
	_highlight_pos;
	_highlight_input;
	/** @deprecated Panels */
	node_panel;
	/** @deprecated Panels */
	options_panel;
	_bg_img;
	_pattern;
	_pattern_img;
	bg_tint;
	prompt_box;
	search_box;
	/** @deprecated Panels */
	SELECTED_NODE;
	/** @deprecated Panels */
	NODEPANEL_IS_OPEN;
	/** Once per frame check of snap to grid value.  @todo Update on change. */
	_snapToGrid;
	/** Set on keydown, keyup. @todo */
	_shiftDown = false;
	/** Link rendering adapter for litegraph-to-canvas integration */
	linkRenderer = null;
	/** If true, enable drag zoom. Ctrl+Shift+Drag Up/Down: zoom canvas. */
	dragZoomEnabled = false;
	/** The start position of the drag zoom and original read-only state. */
	_dragZoomStart = null;
	/** If true, enable live selection during drag. Nodes are selected/deselected in real-time. */
	liveSelection = false;
	static active_node;
	onClear;
	/** called after moving a node @deprecated Does not handle multi-node move, and can return the wrong node. */
	onNodeMoved;
	/** @deprecated Called with the deprecated {@link selected_nodes} when the selection changes. Replacement not yet impl. */
	onSelectionChange;
	/** called when rendering a tooltip */
	onDrawLinkTooltip;
	/** to render foreground objects not affected by transform (for GUIs) */
	onDrawOverlay;
	onRenderBackground;
	onNodeDblClicked;
	onShowNodePanel;
	onNodeSelected;
	onNodeDeselected;
	onRender;
	/**
	* Creates a new instance of LGraphCanvas.
	* @param canvas The canvas HTML element (or its id) to use, or null / undefined to leave blank.
	* @param graph The graph that owns this canvas.
	* @param options
	*/
	constructor(canvas, graph, options) {
		options ||= {};
		this.options = options;
		this.background_image = LGraphCanvas.DEFAULT_BACKGROUND_IMAGE;
		this.ds = new DragAndScale(canvas);
		this.pointer = new CanvasPointer(canvas);
		this.ds.onChanged = (scale, _offset) => {
			if (this._lowQualityZoomThreshold > 0) this._isLowQuality = scale < this._lowQualityZoomThreshold;
		};
		if (graph) this.linkRenderer = new LitegraphLinkAdapter(false);
		this.linkConnector.events.addEventListener("link-created", () => this._dirty());
		this.linkConnector.events.addEventListener("reset", () => {
			if (this.state.ghostNodeId == null) {
				this._autoPan?.stop();
				this._autoPan = null;
			}
			this.connecting_links = null;
			this.dirty_bgcanvas = true;
		});
		this.linkConnector.events.addEventListener("dropped-on-canvas", (customEvent) => {
			if (!this.connecting_links) return;
			const e = customEvent.detail;
			this.emitEvent({
				subType: "empty-release",
				originalEvent: e,
				linkReleaseContext: { links: this.connecting_links }
			});
			const firstLink = this.linkConnector.renderLinks[0];
			if (LiteGraph.release_link_on_empty_shows_menu) {
				const linkReleaseContext = this.linkConnector.state.connectingTo === "input" ? {
					node_from: firstLink.node,
					slot_from: firstLink.fromSlot,
					type_filter_in: firstLink.fromSlot.type
				} : {
					node_to: firstLink.node,
					slot_to: firstLink.fromSlot,
					type_filter_out: firstLink.fromSlot.type
				};
				const afterRerouteId = firstLink.fromReroute?.id;
				if ("shiftKey" in e && e.shiftKey) {
					if (this.allow_searchbox) this.showSearchBox(e, linkReleaseContext);
				} else if (this.linkConnector.state.connectingTo === "input") this.showConnectionMenu({
					nodeFrom: firstLink.node,
					slotFrom: firstLink.fromSlot,
					e,
					afterRerouteId
				});
				else this.showConnectionMenu({
					nodeTo: firstLink.node,
					slotTo: firstLink.fromSlot,
					e,
					afterRerouteId
				});
			}
		});
		this.zoom_modify_alpha = true;
		this.zoom_speed = 1.1;
		this.auto_pan_speed = 15;
		this.node_title_color = LiteGraph.NODE_TITLE_COLOR;
		this.default_link_color = LiteGraph.LINK_COLOR;
		this.default_connection_color = {
			input_off: "#778",
			input_on: "#7F7",
			output_off: "#778",
			output_on: "#7F7"
		};
		this.default_connection_color_byType = {};
		this.default_connection_color_byTypeOff = {};
		this.highquality_render = true;
		this.use_gradients = false;
		this.editor_alpha = 1;
		this.pause_rendering = false;
		this.clear_background = true;
		this.clear_background_color = "#222";
		this.render_only_selected = true;
		this.show_info = true;
		this.allow_dragcanvas = true;
		this.allow_dragnodes = true;
		this.allow_interaction = true;
		this.multi_select = false;
		this.groupSelectChildren = false;
		this.allow_searchbox = true;
		this.allow_reconnect_links = true;
		this.align_to_grid = false;
		this.drag_mode = false;
		this.dragging_rectangle = null;
		this.filter = null;
		this.set_canvas_dirty_on_mouse_event = true;
		this.always_render_background = false;
		this.render_shadows = true;
		this.render_canvas_border = true;
		this.render_connections_shadows = false;
		this.render_connections_border = true;
		this.render_curved_connections = false;
		this.render_connection_arrows = false;
		this.render_collapsed_slots = true;
		this.render_execution_order = false;
		this.render_link_tooltip = true;
		this.links_render_mode = LinkRenderType.SPLINE_LINK;
		this.mouse = [0, 0];
		this.graph_mouse = [0, 0];
		this.canvas_mouse = this.graph_mouse;
		this.connections_width = 3;
		this.current_node = null;
		this.node_widget = null;
		this.last_mouse_position = [0, 0];
		this.visible_area = this.ds.visible_area;
		this.connecting_links = null;
		this.viewport = options.viewport;
		this.graph = graph;
		graph?.attachCanvas(this);
		this.canvas = void 0;
		this.bgcanvas = void 0;
		this.ctx = void 0;
		this.setCanvas(canvas, options.skip_events);
		this.clear();
		LGraphCanvas._measureText = (text, fontStyle = this.inner_text_font) => {
			const { ctx } = this;
			const { font } = ctx;
			try {
				ctx.font = fontStyle;
				return ctx.measureText(text).width;
			} finally {
				ctx.font = font;
			}
		};
		if (!options.skip_render) this.startRendering();
		this.autoresize = options.autoresize ?? false;
		this.updateLowQualityThreshold();
	}
	static onGroupAdd(_info, _entry, mouse_event) {
		const canvas = LGraphCanvas.active_canvas;
		const group = new LiteGraph.LGraphGroup();
		group.pos = canvas.convertEventToCanvasOffset(mouse_event);
		if (!canvas.graph) throw new NullGraphError();
		canvas.graph.add(group);
	}
	/**
	* @deprecated Functionality moved to {@link getBoundaryNodes}.  The new function returns null on failure, instead of an object with all null properties.
	* Determines the furthest nodes in each direction
	* @param nodes the nodes to from which boundary nodes will be extracted
	* @returns
	*/
	static getBoundaryNodes(nodes) {
		return getBoundaryNodes(Array.isArray(nodes) ? nodes : Object.values(nodes)) ?? {
			top: null,
			right: null,
			bottom: null,
			left: null
		};
	}
	/**
	* @deprecated Functionality moved to {@link alignNodes}.  The new function does not set dirty canvas.
	* @param nodes a list of nodes
	* @param direction Direction to align the nodes
	* @param align_to Node to align to (if null, align to the furthest node in the given direction)
	*/
	static alignNodes(nodes, direction, align_to) {
		const newPositions = alignNodes(Object.values(nodes), direction, align_to);
		LGraphCanvas.active_canvas.repositionNodesVueMode(newPositions);
		LGraphCanvas.active_canvas.setDirty(true, true);
	}
	static onNodeAlign(_value, _options, event, prev_menu, node) {
		new LiteGraph.ContextMenu([
			"Top",
			"Bottom",
			"Left",
			"Right"
		], {
			event,
			callback: inner_clicked,
			parentMenu: prev_menu
		});
		function inner_clicked(value) {
			const newPositions = alignNodes(Object.values(LGraphCanvas.active_canvas.selected_nodes), value.toLowerCase(), node);
			LGraphCanvas.active_canvas.repositionNodesVueMode(newPositions);
			LGraphCanvas.active_canvas.setDirty(true, true);
		}
	}
	static onGroupAlign(_value, _options, event, prev_menu) {
		new LiteGraph.ContextMenu([
			"Top",
			"Bottom",
			"Left",
			"Right"
		], {
			event,
			callback: inner_clicked,
			parentMenu: prev_menu
		});
		function inner_clicked(value) {
			const newPositions = alignNodes(Object.values(LGraphCanvas.active_canvas.selected_nodes), value.toLowerCase());
			LGraphCanvas.active_canvas.repositionNodesVueMode(newPositions);
			LGraphCanvas.active_canvas.setDirty(true, true);
		}
	}
	static createDistributeMenu(_value, _options, event, prev_menu) {
		new LiteGraph.ContextMenu(["Vertically", "Horizontally"], {
			event,
			callback: inner_clicked,
			parentMenu: prev_menu
		});
		function inner_clicked(value) {
			const canvas = LGraphCanvas.active_canvas;
			const newPositions = distributeNodes(Object.values(canvas.selected_nodes), value === "Horizontally");
			canvas.repositionNodesVueMode(newPositions);
			canvas.setDirty(true, true);
		}
	}
	static onMenuAdd(_value, _options, e, prev_menu, callback) {
		const canvas = LGraphCanvas.active_canvas;
		const { graph } = canvas;
		if (!graph) return;
		inner_onMenuAdded("", prev_menu);
		return false;
		function inner_onMenuAdded(base_category, prev_menu) {
			if (!graph) return;
			const categories = LiteGraph.getNodeTypesCategories(canvas.filter || graph.filter).filter((category) => category.startsWith(base_category));
			const entries = [];
			for (const category of categories) {
				if (!category) continue;
				const base_category_regex = new RegExp(`^(${base_category})`);
				const category_name = category.replace(base_category_regex, "").split("/", 1)[0];
				const category_path = base_category === "" ? `${category_name}/` : `${base_category}${category_name}/`;
				let name = category_name;
				if (name.includes("::")) name = name.split("::", 2)[1];
				if (entries.findIndex((entry) => entry.value === category_path) === -1) entries.push({
					value: category_path,
					content: name,
					has_submenu: true,
					callback: function(value, _event, _mouseEvent, contextMenu) {
						inner_onMenuAdded(value.value, contextMenu);
					}
				});
			}
			const nodes = LiteGraph.getNodeTypesInCategory(base_category.slice(0, -1), canvas.filter || graph.filter);
			for (const node of nodes) {
				if (node.skip_list) continue;
				const entry = {
					value: node.type,
					content: node.title,
					has_submenu: false,
					callback: function(value, _event, _mouseEvent, contextMenu) {
						if (!canvas.graph) throw new NullGraphError();
						const first_event = contextMenu.getFirstEvent();
						canvas.graph.beforeChange();
						const node = LiteGraph.createNode(value.value);
						if (node) {
							if (!first_event) throw new TypeError("Context menu event was null. This should not occur in normal usage.");
							node.pos = canvas.convertEventToCanvasOffset(first_event);
							canvas.graph.add(node);
						} else console.warn("Failed to create node of type:", value.value);
						callback?.(node);
						canvas.graph.afterChange();
					}
				};
				entries.push(entry);
			}
			new LiteGraph.ContextMenu(entries, {
				event: e,
				parentMenu: prev_menu
			});
		}
	}
	static onMenuCollapseAll() {}
	static onMenuNodeEdit() {}
	/** @param _options Parameter is never used */
	static showMenuNodeOptionalOutputs(_v, _options, e, prev_menu, node) {
		if (!node) return;
		const canvas = LGraphCanvas.active_canvas;
		let entries = [];
		if (LiteGraph.do_add_triggers_slots && node.findOutputSlot("onExecuted") == -1) entries.push({
			content: "On Executed",
			value: [
				"onExecuted",
				LiteGraph.EVENT,
				{ nameLocked: true }
			],
			className: "event"
		});
		const retEntries = node.onMenuNodeOutputs?.(entries);
		if (retEntries) entries = retEntries;
		if (!entries.length) return;
		new LiteGraph.ContextMenu(entries, {
			event: e,
			callback: inner_clicked,
			parentMenu: prev_menu,
			node
		});
		function inner_clicked(v, _options, e, prev) {
			if (!node) return;
			if (!v || typeof v === "string") return;
			if (v.callback) v.callback.call(this, node, v, e, prev);
			if (!v.value) return;
			const value = v.value[1];
			if (value && (typeof value === "object" || Array.isArray(value))) {
				const entries = [];
				for (const i in value) entries.push({
					content: i,
					value: value[i]
				});
				new LiteGraph.ContextMenu(entries, {
					event: e,
					callback: inner_clicked,
					parentMenu: prev_menu,
					node
				});
				return false;
			}
			const { graph } = node;
			if (!graph) throw new NullGraphError();
			graph.beforeChange();
			node.addOutput(v.value[0], v.value[1], v.value[2]);
			node.onNodeOutputAdd?.(v.value);
			canvas.setDirty(true, true);
			graph.afterChange();
		}
		return false;
	}
	/** @param value Parameter is never used */
	static onShowMenuNodeProperties(value, _options, e, prev_menu, node) {
		if (!node || !node.properties) return;
		const canvas = LGraphCanvas.active_canvas;
		const entries = [];
		for (const i in node.properties) {
			value = node.properties[i] !== void 0 ? node.properties[i] : " ";
			if (typeof value == "object") value = JSON.stringify(value);
			const info = node.getPropertyInfo(i);
			if (info.type == "enum" || info.type == "combo") value = LGraphCanvas.getPropertyPrintableValue(value, info.values);
			value = LGraphCanvas.decodeHTML(toString(value));
			entries.push({
				content: `<span class='property_name'>${info.label || i}</span><span class='property_value'>${value}</span>`,
				value: i
			});
		}
		if (!entries.length) return;
		new LiteGraph.ContextMenu(entries, {
			event: e,
			callback: inner_clicked,
			parentMenu: prev_menu,
			node
		});
		function inner_clicked(v) {
			if (!node || typeof v === "string" || !v?.value) return;
			const rect = this.getBoundingClientRect();
			canvas.showEditPropertyValue(node, v.value, { position: [rect.left, rect.top] });
		}
		return false;
	}
	/** @deprecated */
	static decodeHTML(str) {
		const e = document.createElement("div");
		e.textContent = str;
		return e.innerHTML;
	}
	static onMenuResizeNode(_value, _options, _e, _menu, node) {
		if (!node) return;
		const fApplyMultiNode = function(node) {
			node.setSize(node.computeSize());
		};
		const canvas = LGraphCanvas.active_canvas;
		if (!canvas.selected_nodes || Object.keys(canvas.selected_nodes).length <= 1) fApplyMultiNode(node);
		else for (const i in canvas.selected_nodes) fApplyMultiNode(canvas.selected_nodes[i]);
		canvas.setDirty(true, true);
	}
	static onShowPropertyEditor(item, _options, e, _menu, node) {
		const property = item.property || "title";
		const value = node[property];
		const title = document.createElement("span");
		title.className = "name";
		title.textContent = property;
		const input = document.createElement("input");
		Object.assign(input, {
			type: "text",
			className: "value",
			autofocus: true
		});
		const button = document.createElement("button");
		button.textContent = "OK";
		const dialog = Object.assign(document.createElement("div"), {
			is_modified: false,
			className: "graphdialog",
			close: () => dialog.remove()
		});
		dialog.append(title, input, button);
		input.value = String(value);
		input.addEventListener("blur", function() {
			this.focus();
		});
		input.addEventListener("keydown", (e) => {
			dialog.is_modified = true;
			if (e.key == "Escape") dialog.close();
			else if (e.key == "Enter") inner();
			else if (!e.target || !("localName" in e.target) || e.target.localName != "textarea") return;
			e.preventDefault();
			e.stopPropagation();
		});
		const canvas = LGraphCanvas.active_canvas;
		const canvasEl = canvas.canvas;
		const rect = canvasEl.getBoundingClientRect();
		const offsetx = rect ? -20 - rect.left : -20;
		const offsety = rect ? -20 - rect.top : -20;
		if (e) {
			dialog.style.left = `${e.clientX + offsetx}px`;
			dialog.style.top = `${e.clientY + offsety}px`;
		} else {
			dialog.style.left = `${canvasEl.width * .5 + offsetx}px`;
			dialog.style.top = `${canvasEl.height * .5 + offsety}px`;
		}
		button.addEventListener("click", inner);
		if (canvasEl.parentNode == null) throw new TypeError("canvasEl.parentNode was null");
		canvasEl.parentNode.append(dialog);
		input.focus();
		let dialogCloseTimer;
		dialog.addEventListener("mouseleave", function() {
			if (LiteGraph.dialog_close_on_mouse_leave) {
				if (!dialog.is_modified && LiteGraph.dialog_close_on_mouse_leave) dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay);
			}
		});
		dialog.addEventListener("mouseenter", function() {
			if (LiteGraph.dialog_close_on_mouse_leave) {
				if (dialogCloseTimer) clearTimeout(dialogCloseTimer);
			}
		});
		function inner() {
			if (input) setValue(input.value);
		}
		function setValue(value) {
			if (item.type == "Number") value = Number(value);
			else if (item.type == "Boolean") value = Boolean(value);
			node[property] = value;
			dialog.remove();
			canvas.setDirty(true, true);
		}
	}
	static getPropertyPrintableValue(value, values) {
		if (!values) return String(value);
		if (Array.isArray(values)) return String(value);
		if (typeof values === "object") {
			let desc_value = "";
			for (const k in values) {
				if (values[k] != value) continue;
				desc_value = k;
				break;
			}
			return `${String(value)} (${desc_value})`;
		}
	}
	static onMenuNodeCollapse(_value, _options, _e, _menu, node) {
		if (!node.graph) throw new NullGraphError();
		node.graph.beforeChange();
		const fApplyMultiNode = function(node) {
			node.collapse();
		};
		const graphcanvas = LGraphCanvas.active_canvas;
		if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) fApplyMultiNode(node);
		else for (const i in graphcanvas.selected_nodes) fApplyMultiNode(graphcanvas.selected_nodes[i]);
		node.graph.afterChange();
	}
	static onMenuToggleAdvanced(_value, _options, _e, _menu, node) {
		if (!node.graph) throw new NullGraphError();
		node.graph.beforeChange();
		const fApplyMultiNode = function(node) {
			node.toggleAdvanced();
		};
		const graphcanvas = LGraphCanvas.active_canvas;
		if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) fApplyMultiNode(node);
		else for (const i in graphcanvas.selected_nodes) fApplyMultiNode(graphcanvas.selected_nodes[i]);
		node.graph.afterChange();
	}
	static onMenuNodeMode(_value, _options, e, menu, node) {
		new LiteGraph.ContextMenu(LiteGraph.NODE_MODES, {
			event: e,
			callback: inner_clicked,
			parentMenu: menu,
			node
		});
		function inner_clicked(v) {
			if (!node) return;
			const kV = Object.values(LiteGraph.NODE_MODES).indexOf(v);
			const fApplyMultiNode = function(node) {
				if (kV !== -1 && LiteGraph.NODE_MODES[kV]) node.changeMode(kV);
				else {
					console.warn(`unexpected mode: ${v}`);
					node.changeMode(LGraphEventMode.ALWAYS);
				}
			};
			const graphcanvas = LGraphCanvas.active_canvas;
			if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) fApplyMultiNode(node);
			else for (const i in graphcanvas.selected_nodes) fApplyMultiNode(graphcanvas.selected_nodes[i]);
		}
		return false;
	}
	/** @param value Parameter is never used */
	static onMenuNodeColors(value, _options, e, menu, node) {
		if (!node) throw "no node for color";
		const values = [];
		values.push({
			value: null,
			content: "<span style='display: block; padding-left: 4px;'>No color</span>"
		});
		for (const i in LGraphCanvas.node_colors) {
			const color = LGraphCanvas.node_colors[i];
			value = {
				value: i,
				content: `<span style='display: block; color: #999; padding-left: 4px; border-left: 8px solid ${color.color}; background-color:${color.bgcolor}'>${i}</span>`
			};
			values.push(value);
		}
		new LiteGraph.ContextMenu(values, {
			event: e,
			callback: inner_clicked,
			parentMenu: menu,
			node
		});
		function inner_clicked(v) {
			if (!node) return;
			const fApplyColor = function(item) {
				const colorOption = v.value ? LGraphCanvas.node_colors[v.value] : null;
				item.setColorOption(colorOption);
			};
			const canvas = LGraphCanvas.active_canvas;
			if (!canvas.selected_nodes || Object.keys(canvas.selected_nodes).length <= 1) fApplyColor(node);
			else for (const i in canvas.selected_nodes) fApplyColor(canvas.selected_nodes[i]);
			canvas.setDirty(true, true);
		}
		return false;
	}
	static onMenuNodeShapes(_value, _options, e, menu, node) {
		if (!node) throw "no node passed";
		new LiteGraph.ContextMenu(LiteGraph.VALID_SHAPES, {
			event: e,
			callback: inner_clicked,
			parentMenu: menu,
			node
		});
		function inner_clicked(v) {
			if (!node) return;
			if (!node.graph) throw new NullGraphError();
			node.graph.beforeChange();
			const fApplyMultiNode = function(node) {
				node.shape = v;
			};
			const canvas = LGraphCanvas.active_canvas;
			if (!canvas.selected_nodes || Object.keys(canvas.selected_nodes).length <= 1) fApplyMultiNode(node);
			else for (const i in canvas.selected_nodes) fApplyMultiNode(canvas.selected_nodes[i]);
			node.graph.afterChange();
			canvas.setDirty(true);
		}
		return false;
	}
	static onMenuNodeRemove() {
		LGraphCanvas.active_canvas.deleteSelected();
	}
	static onMenuNodeClone(_value, _options, _e, _menu, node) {
		const canvas = LGraphCanvas.active_canvas;
		const nodes = canvas.selectedItems.size ? [...canvas.selectedItems] : [node];
		if (nodes.length) LGraphCanvas.cloneNodes(nodes);
	}
	static cloneNodes(nodes) {
		const canvas = LGraphCanvas.active_canvas;
		let offsetX = Infinity;
		let offsetY = Infinity;
		for (const item of nodes) {
			if (item.pos == null) throw new TypeError("Invalid node encountered on clone.  `pos` was null.");
			offsetX = Math.min(offsetX, item.pos[0]);
			offsetY = Math.min(offsetY, item.pos[1]);
		}
		return canvas._deserializeItems(canvas._serializeItems(nodes), { position: [offsetX + 5, offsetY + 5] });
	}
	/**
	* clears all the data inside
	*
	*/
	clear() {
		this.frame = 0;
		this.last_draw_time = 0;
		this.render_time = 0;
		this.fps = 0;
		this.dragging_rectangle = null;
		this.selected_nodes = {};
		this.selected_group = null;
		this.selectedItems.clear();
		this.state.selectionChanged = true;
		this.onSelectionChange?.(this.selected_nodes);
		this.visible_nodes = [];
		this.node_over = void 0;
		this.node_capturing_input = null;
		this.connecting_links = null;
		this.highlighted_links = {};
		this.dragging_canvas = false;
		this._dirty();
		this.dirty_area = null;
		this.node_in_panel = null;
		this.node_widget = null;
		this.last_mouse = [0, 0];
		this.last_mouseclick = 0;
		this.pointer.reset();
		this.visible_area.set([
			0,
			0,
			0,
			0
		]);
		this.onClear?.();
	}
	/**
	* Assigns a new graph to this canvas.
	*/
	setGraph(newGraph) {
		const { graph } = this;
		if (newGraph === graph) return;
		this.clear();
		newGraph.attachCanvas(this);
		this.linkRenderer = new LitegraphLinkAdapter(false);
		this.dispatch("litegraph:set-graph", {
			newGraph,
			oldGraph: graph
		});
		this._dirty();
	}
	openSubgraph(subgraph, fromNode) {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		const options = {
			bubbles: true,
			detail: {
				subgraph,
				closingGraph: graph,
				fromNode
			},
			cancelable: true
		};
		if (!this.canvas.dispatchEvent(new CustomEvent("subgraph-opening", options))) return;
		this.clear();
		this.subgraph = subgraph;
		this.setGraph(subgraph);
		this.canvas.dispatchEvent(new CustomEvent("subgraph-opened", options));
	}
	/**
	* @returns the visually active graph (in case there are more in the stack)
	*/
	getCurrentGraph() {
		return this.graph;
	}
	/**
	* Finds the canvas if required, throwing on failure.
	* @param canvas Canvas element, or its element ID
	* @returns The canvas element
	* @throws If {@link canvas} is an element ID that does not belong to a valid HTML canvas element
	*/
	_validateCanvas(canvas) {
		if (typeof canvas === "string") {
			const el = document.getElementById(canvas);
			if (!(el instanceof HTMLCanvasElement)) throw "Error validating LiteGraph canvas: Canvas element not found";
			return el;
		}
		return canvas;
	}
	/**
	* Sets the current HTML canvas element.
	* Calls bindEvents to add input event listeners, and (re)creates the background canvas.
	* @param canvas The canvas element to assign, or its HTML element ID.  If null or undefined, the current reference is cleared.
	* @param skip_events If true, events on the previous canvas will not be removed.  Has no effect on the first invocation.
	*/
	setCanvas(canvas, skip_events) {
		const element = this._validateCanvas(canvas);
		if (element === this.canvas) return;
		if (!element && this.canvas && !skip_events) this.unbindEvents();
		this.canvas = element;
		this.ds.element = element;
		this.pointer.element = element;
		if (!element) return;
		this._setCursor = createCursorCache(element);
		element.className += " lgraphcanvas";
		Object.defineProperty(element, "data", {
			value: this,
			writable: true,
			configurable: true,
			enumerable: false
		});
		this.bgcanvas = document.createElement("canvas");
		this.bgcanvas.width = this.canvas.width;
		this.bgcanvas.height = this.canvas.height;
		const ctx = element.getContext?.("2d");
		if (ctx == null) {
			if (element.localName != "canvas") throw `Element supplied for LGraphCanvas must be a <canvas> element, you passed a ${element.localName}`;
			throw "This browser doesn't support Canvas";
		}
		this.ctx = ctx;
		if (!skip_events) this.bindEvents();
	}
	/** Captures an event and prevents default - returns false. */
	_doNothing(e) {
		e.preventDefault();
		return false;
	}
	/** Prevents default for middle-click auxclick only. */
	_preventMiddleAuxClick(e) {
		if (e.button === 1) e.preventDefault();
	}
	/** Captures an event and prevents default - returns true. */
	_doReturnTrue(e) {
		e.preventDefault();
		return true;
	}
	/**
	* binds mouse, keyboard, touch and drag events to the canvas
	*/
	bindEvents() {
		if (this._events_binded) {
			console.warn("LGraphCanvas: events already bound");
			return;
		}
		const { canvas } = this;
		const { document } = this.getCanvasWindow();
		this._mousedown_callback = this.processMouseDown.bind(this);
		this._mousewheel_callback = this.processMouseWheel.bind(this);
		this._mousemove_callback = this.processMouseMove.bind(this);
		this._mouseup_callback = this.processMouseUp.bind(this);
		this._mouseout_callback = this.processMouseOut.bind(this);
		this._mousecancel_callback = this.processMouseCancel.bind(this);
		canvas.addEventListener("pointerdown", this._mousedown_callback, true);
		canvas.addEventListener("wheel", this._mousewheel_callback, false);
		canvas.addEventListener("pointerup", this._mouseup_callback, true);
		canvas.addEventListener("pointermove", this._mousemove_callback);
		canvas.addEventListener("pointerout", this._mouseout_callback);
		canvas.addEventListener("pointercancel", this._mousecancel_callback, true);
		canvas.addEventListener("contextmenu", this._doNothing);
		canvas.addEventListener("auxclick", this._preventMiddleAuxClick);
		this._key_callback = this.processKey.bind(this);
		canvas.addEventListener("keydown", this._key_callback, true);
		document.addEventListener("keyup", this._key_callback, true);
		canvas.addEventListener("dragover", this._doNothing, false);
		canvas.addEventListener("dragend", this._doNothing, false);
		canvas.addEventListener("dragenter", this._doReturnTrue, false);
		this._events_binded = true;
	}
	/**
	* unbinds mouse events from the canvas
	*/
	unbindEvents() {
		if (!this._events_binded) {
			console.warn("LGraphCanvas: no events bound");
			return;
		}
		const { document } = this.getCanvasWindow();
		const { canvas } = this;
		canvas.removeEventListener("pointercancel", this._mousecancel_callback);
		canvas.removeEventListener("pointerout", this._mouseout_callback);
		canvas.removeEventListener("pointermove", this._mousemove_callback);
		canvas.removeEventListener("pointerup", this._mouseup_callback);
		canvas.removeEventListener("pointerdown", this._mousedown_callback);
		canvas.removeEventListener("wheel", this._mousewheel_callback);
		canvas.removeEventListener("keydown", this._key_callback);
		document.removeEventListener("keyup", this._key_callback);
		canvas.removeEventListener("contextmenu", this._doNothing);
		canvas.removeEventListener("auxclick", this._preventMiddleAuxClick);
		canvas.removeEventListener("dragenter", this._doReturnTrue);
		this._mousedown_callback = void 0;
		this._mousewheel_callback = void 0;
		this._key_callback = void 0;
		this._events_binded = false;
	}
	/**
	* Ensures the canvas will be redrawn on the next frame by setting the dirty flag(s).
	* Without parameters, this function does nothing.
	* @todo Impl. `setDirty()` or similar as shorthand to redraw everything.
	* @param fgcanvas If true, marks the foreground canvas as dirty (nodes and anything drawn on top of them).  Default: false
	* @param bgcanvas If true, mark the background canvas as dirty (background, groups, links).  Default: false
	*/
	setDirty(fgcanvas, bgcanvas) {
		if (fgcanvas) this.dirty_canvas = true;
		if (bgcanvas) this.dirty_bgcanvas = true;
	}
	/** Marks the entire canvas as dirty. */
	_dirty() {
		this.dirty_canvas = true;
		this.dirty_bgcanvas = true;
	}
	_linkConnectorDrop() {
		const { graph, linkConnector, pointer } = this;
		if (!graph) throw new NullGraphError();
		pointer.onDragEnd = (upEvent) => linkConnector.dropLinks(graph, upEvent);
		pointer.finally = () => {
			this._autoPan?.stop();
			this._autoPan = null;
			this.linkConnector.reset(true);
		};
		this._autoPan = new AutoPanController({
			canvas: this.canvas,
			ds: this.ds,
			maxPanSpeed: this.auto_pan_speed,
			onPan: () => {
				const rect = this.canvas.getBoundingClientRect();
				const { scale } = this.ds;
				this.graph_mouse[0] = (this.mouse[0] - rect.left) / scale - this.ds.offset[0];
				this.graph_mouse[1] = (this.mouse[1] - rect.top) / scale - this.ds.offset[1];
				this._dirty();
			}
		});
		this._autoPan.updatePointer(this.mouse[0], this.mouse[1]);
		this._autoPan.start();
	}
	/**
	* Used to attach the canvas in a popup
	* @returns returns the window where the canvas is attached (the DOM root node)
	*/
	getCanvasWindow() {
		if (!this.canvas) return window;
		const doc = this.canvas.ownerDocument;
		return doc.defaultView || doc.parentWindow;
	}
	/**
	* starts rendering the content of the canvas when needed
	*
	*/
	startRendering() {
		if (this.is_rendering) return;
		this.is_rendering = true;
		renderFrame.call(this);
		/** Render loop */
		function renderFrame() {
			if (!this.pause_rendering) this.draw();
			const window = this.getCanvasWindow();
			if (this.is_rendering) if (this._maximumFrameGap > 0) {
				const gap = this._maximumFrameGap - (LiteGraph.getTime() - this.last_draw_time);
				setTimeout(renderFrame.bind(this), Math.max(1, gap));
			} else window.requestAnimationFrame(renderFrame.bind(this));
		}
	}
	/**
	* stops rendering the content of the canvas (to save resources)
	*
	*/
	stopRendering() {
		this.is_rendering = false;
	}
	blockClick() {
		this.block_click = true;
		this.last_mouseclick = 0;
	}
	/**
	* Gets the widget at the current cursor position.
	* @param node Optional node to check for widgets under cursor
	* @returns The widget located at the current cursor position, if any is found.
	* @deprecated Use {@link LGraphNode.getWidgetOnPos} instead.
	* ```ts
	* const [x, y] = canvas.graph_mouse
	* const widget = canvas.node_over?.getWidgetOnPos(x, y, true)
	* ```
	*/
	getWidgetAtCursor(node) {
		node ??= this.node_over;
		return node?.getWidgetOnPos(this.graph_mouse[0], this.graph_mouse[1], true);
	}
	/**
	* Clears highlight and mouse-over information from nodes that should not have it.
	*
	* Intended to be called when the pointer moves away from a node.
	* @param node The node that the mouse is now over
	* @param e MouseEvent that is triggering this
	*/
	updateMouseOverNodes(node, e) {
		if (!this.graph) throw new NullGraphError();
		const { pointer } = this;
		const nodes = this.graph._nodes;
		for (const otherNode of nodes) if (otherNode.mouseOver && node != otherNode) {
			if (!pointer.eDown) pointer.resizeDirection = void 0;
			otherNode.mouseOver = void 0;
			this._highlight_input = void 0;
			this._highlight_pos = void 0;
			this.linkConnector.overWidget = void 0;
			otherNode.lostFocusAt = LiteGraph.getTime();
			this.node_over?.onMouseLeave?.(e);
			this.node_over = void 0;
			this.dirty_canvas = true;
		}
	}
	processMouseDown(e) {
		if (this.state.ghostNodeId != null) {
			if (e.button === 0) this.finalizeGhostPlacement(false);
			if (e.button === 2) this.finalizeGhostPlacement(true);
			e.stopPropagation();
			e.preventDefault();
			return;
		}
		if (this.dragZoomEnabled && e.ctrlKey && e.shiftKey && !e.altKey && e.buttons) {
			this._dragZoomStart = {
				pos: [e.x, e.y],
				scale: this.ds.scale,
				readOnly: this.read_only
			};
			this.read_only = true;
			return;
		}
		const { graph, pointer } = this;
		this.adjustMouseEvent(e);
		if (e.isPrimary) pointer.down(e);
		if (this.set_canvas_dirty_on_mouse_event) this.dirty_canvas = true;
		if (!graph) return;
		const ref_window = this.getCanvasWindow();
		LGraphCanvas.active_canvas = this;
		const x = e.clientX;
		const y = e.clientY;
		this.ds.viewport = this.viewport;
		if (!(!this.viewport || isInRect(x, y, this.viewport))) return;
		let node = graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes) ?? void 0;
		if (!node && LiteGraph.vueNodesMode) {
			const slotLayout = layoutStore.querySlotAtPoint({
				x: e.canvasX,
				y: e.canvasY
			});
			if (slotLayout) node = graph.getNodeById(slotLayout.nodeId) ?? void 0;
		}
		this.mouse[0] = x;
		this.mouse[1] = y;
		this.graph_mouse[0] = e.canvasX;
		this.graph_mouse[1] = e.canvasY;
		this.last_click_position = [this.mouse[0], this.mouse[1]];
		pointer.isDouble = pointer.isDown && e.isPrimary;
		pointer.isDown = true;
		this.canvas.focus();
		LiteGraph.closeAllContextMenus(ref_window);
		if (this.onMouse?.(e) == true) return;
		if (e.button === 0 && !pointer.isDouble) this._processPrimaryButton(e, node);
		else if (e.button === 1) this._processMiddleButton(e, node);
		else if ((e.button === 2 || pointer.isDouble) && this.allow_interaction && !this.read_only) {
			const { linkConnector, subgraph } = this;
			if (subgraph?.inputNode.containsPoint(this.graph_mouse)) {
				this.processSelect(subgraph.inputNode, e, true);
				subgraph.inputNode.onPointerDown(e, pointer, linkConnector);
			} else if (subgraph?.outputNode.containsPoint(this.graph_mouse)) {
				this.processSelect(subgraph.outputNode, e, true);
				subgraph.outputNode.onPointerDown(e, pointer, linkConnector);
			} else {
				if (node) this.processSelect(node, e, true);
				else if (this.links_render_mode !== LinkRenderType.HIDDEN_LINK) {
					const rerouteLayout = layoutStore.queryRerouteAtPoint({
						x: e.canvasX,
						y: e.canvasY
					});
					let reroute;
					if (rerouteLayout) reroute = graph.getReroute(rerouteLayout.id);
					else reroute = graph.getRerouteOnPos(e.canvasX, e.canvasY, this._visibleReroutes);
					if (reroute) if (e.altKey) pointer.onClick = (upEvent) => {
						if (upEvent.altKey) {
							if (reroute.selected) {
								this.deselect(reroute);
								this.onSelectionChange?.(this.selected_nodes);
							}
							reroute.remove();
						}
					};
					else this.processSelect(reroute, e, true);
				}
				pointer.onClick ??= () => this.processContextMenu(node, e);
			}
		}
		this.last_mouse = [x, y];
		this.last_mouseclick = LiteGraph.getTime();
		this.last_mouse_dragging = true;
		graph.change();
		if (!ref_window.document.activeElement || ref_window.document.activeElement.nodeName.toLowerCase() != "input" && ref_window.document.activeElement.nodeName.toLowerCase() != "textarea") e.preventDefault();
		e.stopPropagation();
		this.onMouseDown?.(e);
	}
	/**
	* Returns the first matching positionable item at the given co-ordinates.
	*
	* Order of preference:
	* - Subgraph IO Nodes
	* - Reroutes
	* - Group titlebars
	* @param x The x coordinate in canvas space
	* @param y The y coordinate in canvas space
	* @returns The positionable item or undefined
	*/
	_getPositionableOnPos(x, y) {
		const ioNode = this.subgraph?.getIoNodeOnPos(x, y);
		if (ioNode) return ioNode;
		for (const reroute of this._visibleReroutes) if (reroute.containsPoint([x, y])) return reroute;
		return this.graph?.getGroupTitlebarOnPos(x, y);
	}
	_processPrimaryButton(e, node) {
		const { pointer, graph, linkConnector, subgraph } = this;
		if (!graph) throw new NullGraphError();
		const x = e.canvasX;
		const y = e.canvasY;
		const ctrlOrMeta = e.ctrlKey || e.metaKey;
		if (ctrlOrMeta && !e.altKey && LiteGraph.leftMouseClickBehavior === "panning") {
			this._setupNodeSelectionDrag(e, pointer, node);
			return;
		}
		if (this.read_only) {
			pointer.finally = () => this.dragging_canvas = false;
			this.dragging_canvas = true;
			return;
		}
		if (!LiteGraph.vueNodesMode && LiteGraph.alt_drag_do_clone_nodes && e.altKey && !e.ctrlKey && node && this.allow_interaction) {
			const cloned = this._deserializeItems(this._serializeItems([node]), { position: node.pos })?.created[0];
			if (!cloned) return;
			cloned.setPos(cloned.pos[0] + 5, cloned.pos[1] + 5);
			if (this.allow_dragnodes) {
				pointer.onDragStart = (pointer) => {
					this._startDraggingItems(cloned, pointer);
				};
				pointer.onDragEnd = (e) => this._processDraggedItems(e);
			}
			return;
		}
		if (node && (this.allow_interaction || node.flags.allow_interaction)) this._processNodeClick(e, ctrlOrMeta, node);
		else {
			if (subgraph) {
				const { inputNode, outputNode } = subgraph;
				if (processSubgraphIONode(this, inputNode)) return;
				if (processSubgraphIONode(this, outputNode)) return;
				function processSubgraphIONode(canvas, ioNode) {
					if (!ioNode.containsPoint([x, y])) return false;
					ioNode.onPointerDown(e, pointer, linkConnector);
					pointer.onClick ??= () => canvas.processSelect(ioNode, e);
					pointer.onDragStart ??= () => canvas._startDraggingItems(ioNode, pointer, true);
					pointer.onDragEnd ??= (eUp) => canvas._processDraggedItems(eUp);
					return true;
				}
			}
			if (this.links_render_mode !== LinkRenderType.HIDDEN_LINK) {
				const rerouteLayout = layoutStore.queryRerouteAtPoint({
					x,
					y
				});
				let foundReroute;
				if (rerouteLayout) foundReroute = graph.getReroute(rerouteLayout.id);
				for (const reroute of this._visibleReroutes) {
					const overReroute = foundReroute === reroute || reroute.containsPoint([x, y]);
					if (!reroute.isSlotHovered && !overReroute) continue;
					if (overReroute) {
						pointer.onClick = () => this.processSelect(reroute, e);
						if (!e.shiftKey) {
							pointer.onDragStart = (pointer) => this._startDraggingItems(reroute, pointer, true);
							pointer.onDragEnd = (e) => this._processDraggedItems(e);
						}
					}
					if (reroute.isOutputHovered || overReroute && e.shiftKey) {
						linkConnector.dragFromReroute(graph, reroute);
						this._linkConnectorDrop();
					}
					if (reroute.isInputHovered) {
						linkConnector.dragFromRerouteToOutput(graph, reroute);
						this._linkConnectorDrop();
					}
					reroute.hideSlots();
					this.dirty_bgcanvas = true;
					return;
				}
			}
			const { lineWidth } = this.ctx;
			this.ctx.lineWidth = this.connections_width + 7;
			const dpi = Math.max(window?.devicePixelRatio ?? 1, 1);
			const hitSegment = layoutStore.queryLinkSegmentAtPoint({
				x,
				y
			}, this.ctx);
			for (const linkSegment of this.renderedPaths) {
				const centre = linkSegment._pos;
				if (!centre) continue;
				let isLinkHit = hitSegment && linkSegment.id === (linkSegment instanceof Reroute ? hitSegment.rerouteId : hitSegment.linkId);
				if (!isLinkHit && linkSegment.path) isLinkHit = this.ctx.isPointInStroke(linkSegment.path, x * dpi, y * dpi);
				if ((e.shiftKey || e.altKey) && isLinkHit) {
					this.ctx.lineWidth = lineWidth;
					if (e.shiftKey && !e.altKey) {
						linkConnector.dragFromLinkSegment(graph, linkSegment);
						this._linkConnectorDrop();
						return;
					} else if (e.altKey && !e.shiftKey) {
						const newReroute = graph.createReroute([x, y], linkSegment);
						pointer.onDragStart = (pointer) => this._startDraggingItems(newReroute, pointer);
						pointer.onDragEnd = (e) => this._processDraggedItems(e);
						return;
					}
				} else if (this.linkMarkerShape !== LinkMarkerShape.None && isInRectangle(x, y, centre[0] - 4, centre[1] - 4, 8, 8)) {
					this.ctx.lineWidth = lineWidth;
					pointer.onClick = () => this.showLinkMenu(linkSegment, e);
					pointer.onDragStart = () => this.dragging_canvas = true;
					pointer.finally = () => this.dragging_canvas = false;
					this.over_link_center = void 0;
					return;
				}
			}
			this.ctx.lineWidth = lineWidth;
			const group = graph.getGroupOnPos(x, y);
			this.selected_group = group ?? null;
			if (group) {
				if (group.isInResize(x, y)) {
					const b = group.boundingRect;
					const offsetX = x - (b[0] + b[2]);
					const offsetY = y - (b[1] + b[3]);
					pointer.onDragStart = () => this.resizingGroup = group;
					pointer.onDrag = (eMove) => {
						if (this.read_only) return;
						const pos = [eMove.canvasX - group.pos[0] - offsetX, eMove.canvasY - group.pos[1] - offsetY];
						if (this._snapToGrid) snapPoint(pos, this._snapToGrid);
						if (group.resize(pos[0], pos[1])) this.dirty_bgcanvas = true;
					};
					pointer.finally = () => this.resizingGroup = null;
				} else {
					const headerHeight = LiteGraph.NODE_TITLE_HEIGHT;
					if (isInRectangle(x, y, group.pos[0], group.pos[1], group.size[0], headerHeight)) {
						pointer.onClick = () => this.processSelect(group, e);
						pointer.onDragStart = (pointer) => {
							group.recomputeInsideNodes();
							this._startDraggingItems(group, pointer, true);
						};
						pointer.onDragEnd = (e) => this._processDraggedItems(e);
					}
				}
				pointer.onDoubleClick = () => {
					this.emitEvent({
						subType: "group-double-click",
						originalEvent: e,
						group
					});
				};
			} else pointer.onDoubleClick = () => {
				if (this.allow_searchbox) {
					this.showSearchBox(e);
					e.preventDefault();
				}
				this.emitEvent({
					subType: "empty-double-click",
					originalEvent: e
				});
			};
		}
		if (!pointer.onDragStart && !pointer.onClick && !pointer.onDrag && this.allow_dragcanvas) if (LiteGraph.leftMouseClickBehavior === "panning" || this.read_only) {
			pointer.onClick = () => this.processSelect(null, e);
			pointer.finally = () => this.dragging_canvas = false;
			this.dragging_canvas = true;
		} else this._setupNodeSelectionDrag(e, pointer);
	}
	_setupNodeSelectionDrag(e, pointer, node) {
		const dragRect = [
			0,
			0,
			0,
			0
		];
		dragRect[0] = e.canvasX;
		dragRect[1] = e.canvasY;
		dragRect[2] = 1;
		dragRect[3] = 1;
		pointer.onClick = (eUp) => {
			const clickedItem = node ?? this._getPositionableOnPos(eUp.canvasX, eUp.canvasY);
			this.processSelect(clickedItem, eUp);
		};
		pointer.onDragStart = () => this.dragging_rectangle = dragRect;
		if (this.liveSelection) {
			const initialSelection = new Set(this.selectedItems);
			pointer.onDrag = (eMove) => this.handleLiveSelect(eMove, dragRect, initialSelection);
			pointer.onDragEnd = () => this.finalizeLiveSelect();
		} else pointer.onDragEnd = (upEvent) => this._handleMultiSelect(upEvent, dragRect);
		pointer.finally = () => this.dragging_rectangle = null;
	}
	/**
	* Processes a pointerdown event inside the bounds of a node.  Part of {@link processMouseDown}.
	* @param e The pointerdown event
	* @param ctrlOrMeta Ctrl or meta key is pressed
	* @param node The node to process a click event for
	*/
	_processNodeClick(e, ctrlOrMeta, node) {
		if (LiteGraph.vueNodesMode) return;
		const { pointer, graph, linkConnector } = this;
		if (!graph) throw new NullGraphError();
		const x = e.canvasX;
		const y = e.canvasY;
		pointer.onClick = () => this.processSelect(node, e);
		if (!node.flags.pinned) this.bringToFront(node);
		const inCollapse = node.isPointInCollapse(x, y);
		if (inCollapse) pointer.onClick = () => {
			node.collapse();
			this.setDirty(true, true);
		};
		else if (!node.flags.collapsed) {
			const { inputs, outputs } = node;
			function hasRelevantOutputLinks(output, network) {
				return [...output.links ?? [], ...[...output._floatingLinks ?? /* @__PURE__ */ new Set()]].some((linkId) => typeof linkId === "number" && network.getLink(linkId) !== void 0);
			}
			if (outputs) for (const [i, output] of outputs.entries()) {
				const link_pos = node.getOutputPos(i);
				if (isInRectangle(x, y, link_pos[0] - 15, link_pos[1] - 10, 30, 20)) {
					if (e.shiftKey && hasRelevantOutputLinks(output, graph)) {
						linkConnector.moveOutputLink(graph, output);
						this._linkConnectorDrop();
						return;
					}
					linkConnector.dragNewFromOutput(graph, node, output);
					this._linkConnectorDrop();
					if (LiteGraph.shift_click_do_break_link_from) {
						if (e.shiftKey) node.disconnectOutput(i);
					} else if (LiteGraph.ctrl_alt_click_do_break_link) {
						if (ctrlOrMeta && e.altKey && !e.shiftKey) node.disconnectOutput(i);
					}
					pointer.onDoubleClick = () => node.onOutputDblClick?.(i, e);
					pointer.onClick = () => node.onOutputClick?.(i, e);
					return;
				}
			}
			if (inputs) for (const [i, input] of inputs.entries()) {
				const link_pos = node.getInputPos(i);
				if (input instanceof NodeInputSlot ? isInRect(x, y, input.boundingRect) : isInRectangle(x, y, link_pos[0] - 15, link_pos[1] - 10, 30, 20)) {
					pointer.onDoubleClick = () => node.onInputDblClick?.(i, e);
					pointer.onClick = () => node.onInputClick?.(i, e);
					const shouldBreakLink = LiteGraph.ctrl_alt_click_do_break_link && ctrlOrMeta && e.altKey && !e.shiftKey;
					if (input.link !== null || input._floatingLinks?.size) {
						if (shouldBreakLink || LiteGraph.click_do_break_link_to) node.disconnectInput(i, true);
						else if (e.shiftKey || this.allow_reconnect_links) linkConnector.moveInputLink(graph, input);
					}
					if (!linkConnector.isConnecting) linkConnector.dragNewFromInput(graph, node, input);
					this._linkConnectorDrop();
					this.dirty_bgcanvas = true;
					return;
				}
			}
		}
		const pos = [x - node.pos[0], y - node.pos[1]];
		const widget = node.getWidgetOnPos(x, y);
		if (widget) {
			this.processWidgetClick(e, node, widget);
			this.node_widget = [node, widget];
		} else {
			pointer.onDoubleClick = () => {
				if (pos[1] < 0 && !inCollapse) node.onNodeTitleDblClick?.(e, pos, this);
				else if (node instanceof SubgraphNode) this.openSubgraph(node.subgraph, node);
				node.onDblClick?.(e, pos, this);
				this.emitEvent({
					subType: "node-double-click",
					originalEvent: e,
					node
				});
				this.processNodeDblClicked(node);
			};
			if (node.title_buttons?.length && !node.flags.collapsed) {
				const nodeRelativeX = pos[0];
				const nodeRelativeY = pos[1];
				for (let i = 0; i < node.title_buttons.length; i++) {
					const button = node.title_buttons[i];
					if (button.visible && button.isPointInside(nodeRelativeX, nodeRelativeY)) {
						node.onTitleButtonClick(button, this);
						pointer.onClick = () => {};
						return;
					}
				}
			}
			for (const badge of node.badges.map(toValue).filter((b) => b.onClick)) if (isInRect(pos[0], pos[1], badge.boundingRect)) {
				pointer.onClick = badge.onClick;
				return;
			}
			if (node.onMouseDown?.(e, pos, this)) {
				pointer.onClick = () => {};
				return;
			}
			if (!this.allow_dragnodes) return;
			if (!node.flags.collapsed) {
				const resizeDirection = node.findResizeDirection(x, y);
				if (resizeDirection) {
					pointer.resizeDirection = resizeDirection;
					const startBounds = new Rectangle(node.pos[0], node.pos[1], node.size[0], node.size[1]);
					pointer.onDragStart = () => {
						graph.beforeChange();
						this.resizing_node = node;
					};
					pointer.onDrag = (eMove) => {
						if (this.read_only) return;
						const deltaX = eMove.canvasX - x;
						const deltaY = eMove.canvasY - y;
						const newBounds = new Rectangle(startBounds.x, startBounds.y, startBounds.width, startBounds.height);
						switch (resizeDirection) {
							case "NE":
								newBounds.y = startBounds.y + deltaY;
								newBounds.width = startBounds.width + deltaX;
								newBounds.height = startBounds.height - deltaY;
								break;
							case "SE":
								newBounds.width = startBounds.width + deltaX;
								newBounds.height = startBounds.height + deltaY;
								break;
							case "SW":
								newBounds.x = startBounds.x + deltaX;
								newBounds.width = startBounds.width - deltaX;
								newBounds.height = startBounds.height + deltaY;
								break;
							case "NW":
								newBounds.x = startBounds.x + deltaX;
								newBounds.y = startBounds.y + deltaY;
								newBounds.width = startBounds.width - deltaX;
								newBounds.height = startBounds.height - deltaY;
								break;
						}
						if (this._snapToGrid) {
							if (resizeDirection.includes("N") || resizeDirection.includes("W")) {
								const originalX = newBounds.x;
								const originalY = newBounds.y;
								snapPoint(newBounds.pos, this._snapToGrid);
								if (resizeDirection.includes("N")) newBounds.height += originalY - newBounds.y;
								if (resizeDirection.includes("W")) newBounds.width += originalX - newBounds.x;
							}
							snapPoint(newBounds.size, this._snapToGrid);
						}
						const min = node.computeSize();
						if (this._snapToGrid) snapPoint(min, this._snapToGrid, "ceil");
						if (newBounds.width < min[0]) {
							if (resizeDirection.includes("W")) newBounds.x = startBounds.x + startBounds.width - min[0];
							newBounds.width = min[0];
						}
						if (newBounds.height < min[1]) {
							if (resizeDirection.includes("N")) newBounds.y = startBounds.y + startBounds.height - min[1];
							newBounds.height = min[1];
						}
						node.pos = newBounds.pos;
						node.setSize(newBounds.size);
						this._dirty();
					};
					pointer.onDragEnd = () => {
						this._dirty();
						graph.afterChange(node);
					};
					pointer.finally = () => {
						this.resizing_node = null;
						pointer.resizeDirection = void 0;
					};
					this._setCursor(cursors[resizeDirection]);
					return;
				}
			}
			pointer.onDragStart = (pointer) => this._startDraggingItems(node, pointer, true);
			pointer.onDragEnd = (e) => this._processDraggedItems(e);
		}
		this.dirty_canvas = true;
	}
	processWidgetClick(e, node, widget, pointer = this.pointer) {
		if (typeof widget.onPointerDown === "function") {
			if (widget.onPointerDown(pointer, node, this)) return;
		}
		const oldValue = widget.value;
		const pos = this.graph_mouse;
		const x = pos[0] - node.pos[0];
		const y = pos[1] - node.pos[1];
		const widgetInstance = toConcreteWidget(widget, node, false);
		if (widgetInstance) {
			pointer.onClick = () => widgetInstance.onClick({
				e,
				node,
				canvas: this
			});
			pointer.onDrag = (eMove) => widgetInstance.onDrag?.({
				e: eMove,
				node,
				canvas: this
			});
		} else if (widget.mouse) {
			const result = widget.mouse(e, [x, y], node);
			if (result != null) this.dirty_canvas = result;
		}
		if (oldValue != widget.value) {
			node.onWidgetChanged?.(widget.name, widget.value, oldValue, widget);
			if (!node.graph) throw new NullGraphError();
			node.graph._version++;
		}
		pointer.finally = () => {
			if (widget.mouse) {
				const { eUp } = pointer;
				if (!eUp) return;
				const { canvasX, canvasY } = eUp;
				widget.mouse(eUp, [canvasX - node.pos[0], canvasY - node.pos[1]], node);
			}
			this.node_widget = null;
		};
	}
	/**
	* Pointer middle button click processing.  Part of {@link processMouseDown}.
	* @param e The pointerdown event
	* @param node The node to process a click event for
	*/
	_processMiddleButton(e, node) {
		const { pointer } = this;
		if (LiteGraph.middle_click_slot_add_default_node && node && this.allow_interaction && !this.read_only && !this.connecting_links && !node.flags.collapsed) {
			let mClikSlot = false;
			let mClikSlot_index = false;
			let mClikSlot_isOut = false;
			const { inputs, outputs } = node;
			if (outputs) for (const [i, output] of outputs.entries()) {
				const link_pos = node.getOutputPos(i);
				if (isInRectangle(e.canvasX, e.canvasY, link_pos[0] - 15, link_pos[1] - 10, 30, 20)) {
					mClikSlot = output;
					mClikSlot_index = i;
					mClikSlot_isOut = true;
					break;
				}
			}
			if (inputs) for (const [i, input] of inputs.entries()) {
				const link_pos = node.getInputPos(i);
				if (isInRectangle(e.canvasX, e.canvasY, link_pos[0] - 15, link_pos[1] - 10, 30, 20)) {
					mClikSlot = input;
					mClikSlot_index = i;
					mClikSlot_isOut = false;
					break;
				}
			}
			if (mClikSlot && mClikSlot_index !== false) {
				const alphaPosY = .5 - (mClikSlot_index + 1) / (mClikSlot_isOut ? outputs.length : inputs.length);
				const node_bounding = node.getBounding();
				const posRef = [!mClikSlot_isOut ? node_bounding[0] : node_bounding[0] + node_bounding[2], e.canvasY - 80];
				pointer.onClick = () => this.createDefaultNodeForSlot({
					nodeFrom: !mClikSlot_isOut ? null : node,
					slotFrom: !mClikSlot_isOut ? null : mClikSlot_index,
					nodeTo: !mClikSlot_isOut ? node : null,
					slotTo: !mClikSlot_isOut ? mClikSlot_index : null,
					position: posRef,
					nodeType: "AUTO",
					posAdd: [!mClikSlot_isOut ? -30 : 30, -alphaPosY * 130],
					posSizeFix: [!mClikSlot_isOut ? -1 : 0, 0]
				});
			}
		}
		if (this.allow_dragcanvas) {
			pointer.onDragStart = () => this.dragging_canvas = true;
			pointer.finally = () => this.dragging_canvas = false;
		}
	}
	_processDragZoom(e) {
		if (!e.buttons) {
			this._finishDragZoom();
			return;
		}
		const start = this._dragZoomStart;
		if (!start) throw new TypeError("Drag-zoom state object was null");
		if (!this.graph) throw new NullGraphError();
		const deltaY = e.y - start.pos[1];
		const scale = start.scale - deltaY / 100;
		this.ds.changeScale(scale, start.pos);
		this.graph.change();
	}
	_finishDragZoom() {
		const start = this._dragZoomStart;
		if (!start) return;
		this._dragZoomStart = null;
		this.read_only = start.readOnly;
	}
	/**
	* Called when a mouse move event has to be processed
	*/
	processMouseMove(e) {
		if (this.dragZoomEnabled && e.ctrlKey && e.shiftKey && this._dragZoomStart) {
			this._processDragZoom(e);
			return;
		}
		if (this.autoresize) this.resize();
		if (this.set_canvas_dirty_on_mouse_event) this.dirty_canvas = true;
		const { graph, resizingGroup, linkConnector, pointer, subgraph } = this;
		if (!graph) return;
		LGraphCanvas.active_canvas = this;
		this.adjustMouseEvent(e);
		const mouse = [e.clientX, e.clientY];
		this.mouse[0] = mouse[0];
		this.mouse[1] = mouse[1];
		const delta = [mouse[0] - this.last_mouse[0], mouse[1] - this.last_mouse[1]];
		this.last_mouse = mouse;
		const { canvasX: x, canvasY: y } = e;
		this.graph_mouse[0] = x;
		this.graph_mouse[1] = y;
		if (e.isPrimary) pointer.move(e);
		/** See {@link state}.{@link LGraphCanvasState.hoveringOver hoveringOver} */
		let underPointer = CanvasItem.Nothing;
		if (subgraph) {
			underPointer |= subgraph.inputNode.onPointerMove(e);
			underPointer |= subgraph.outputNode.onPointerMove(e);
		}
		if (this.block_click) {
			e.preventDefault();
			return;
		}
		e.dragging = this.last_mouse_dragging;
		if (this.node_widget) {
			const [node, widget] = this.node_widget;
			if (widget?.mouse) {
				const relativeX = x - node.pos[0];
				const relativeY = y - node.pos[1];
				const result = widget.mouse(e, [relativeX, relativeY], node);
				if (result != null) this.dirty_canvas = result;
			}
		}
		const node = LiteGraph.vueNodesMode ? null : graph.getNodeOnPos(x, y, this.visible_nodes);
		const dragRect = this.dragging_rectangle;
		if (dragRect) {
			dragRect[2] = x - dragRect[0];
			dragRect[3] = y - dragRect[1];
			this.dirty_canvas = true;
		} else if (resizingGroup) {
			underPointer |= CanvasItem.Group;
			pointer.resizeDirection = "SE";
		} else if (this.dragging_canvas) {
			this.ds.offset[0] += delta[0] / this.ds.scale;
			this.ds.offset[1] += delta[1] / this.ds.scale;
			this._dirty();
		} else if ((this.allow_interaction || node?.flags.allow_interaction) && !this.read_only) {
			if (linkConnector.isConnecting) {
				this._autoPan?.updatePointer(e.clientX, e.clientY);
				this.dirty_canvas = true;
			}
			this.updateMouseOverNodes(node, e);
			if (node) {
				underPointer |= CanvasItem.Node;
				if (node.redraw_on_mouse) this.dirty_canvas = true;
				const pos = [0, 0];
				let inputId = -1;
				let outputId = -1;
				const slotLayout = layoutStore.querySlotAtPoint({
					x,
					y
				});
				if (slotLayout && slotLayout.nodeId === String(node.id)) if (slotLayout.type === "input") {
					inputId = slotLayout.index;
					pos[0] = slotLayout.position.x;
					pos[1] = slotLayout.position.y;
				} else {
					outputId = slotLayout.index;
					pos[0] = slotLayout.position.x;
					pos[1] = slotLayout.position.y;
				}
				else {
					inputId = isOverNodeInput(node, x, y, pos);
					outputId = isOverNodeOutput(node, x, y, pos);
				}
				const overWidget = node.getWidgetOnPos(x, y, true) ?? void 0;
				if (!node.mouseOver) {
					node.mouseOver = {};
					this.node_over = node;
					this.dirty_canvas = true;
					for (const reroute of this._visibleReroutes) {
						reroute.hideSlots();
						this.dirty_bgcanvas = true;
					}
					node.onMouseEnter?.(e);
				}
				node.onMouseMove?.(e, [x - node.pos[0], y - node.pos[1]], this);
				const { mouseOver } = node;
				if (mouseOver.inputId !== inputId || mouseOver.outputId !== outputId || mouseOver.overWidget !== overWidget) {
					mouseOver.inputId = inputId;
					mouseOver.outputId = outputId;
					mouseOver.overWidget = overWidget;
					linkConnector.overWidget = void 0;
					if (linkConnector.isConnecting) {
						const firstLink = linkConnector.renderLinks.at(0);
						let highlightPos;
						let highlightInput;
						if (!firstLink || !linkConnector.isNodeValidDrop(node)) {} else if (linkConnector.state.connectingTo === "input") {
							if (overWidget) {
								const slot = node.getSlotFromWidget(overWidget);
								if (slot && linkConnector.isInputValidDrop(node, slot)) {
									highlightInput = slot;
									if (LiteGraph.vueNodesMode) {
										const idx = node.inputs.indexOf(slot);
										highlightPos = idx !== -1 ? getSlotPosition(node, idx, true) : node.getInputSlotPos(slot);
									} else highlightPos = node.getInputSlotPos(slot);
									linkConnector.overWidget = overWidget;
								}
							}
							if (!linkConnector.overWidget) {
								if (inputId === -1 && outputId === -1) {
									const result = node.findInputByType(firstLink.fromSlot.type);
									if (result) {
										highlightInput = result.slot;
										highlightPos = LiteGraph.vueNodesMode ? getSlotPosition(node, result.index, true) : node.getInputSlotPos(result.slot);
									}
								} else if (inputId != -1 && node.inputs[inputId] && LiteGraph.isValidConnection(firstLink.fromSlot.type, node.inputs[inputId].type)) {
									highlightPos = pos;
									highlightInput = node.inputs[inputId];
								}
								if (highlightInput) {
									const widget = node.getWidgetFromSlot(highlightInput);
									if (widget) linkConnector.overWidget = widget;
								}
							}
						} else if (linkConnector.state.connectingTo === "output") {
							if (inputId === -1 && outputId === -1) {
								const result = node.findOutputByType(firstLink.fromSlot.type);
								if (result) highlightPos = LiteGraph.vueNodesMode ? getSlotPosition(node, result.index, false) : node.getOutputPos(result.index);
							} else if (outputId != -1 && node.outputs[outputId] && LiteGraph.isValidConnection(firstLink.fromSlot.type, node.outputs[outputId].type)) highlightPos = pos;
						}
						this._highlight_pos = highlightPos;
						this._highlight_input = highlightInput;
					}
					this.dirty_canvas = true;
				}
				if (!pointer.eDown) if (inputId === -1 && outputId === -1 && !overWidget) pointer.resizeDirection = node.findResizeDirection(x, y);
				else pointer.resizeDirection &&= void 0;
			} else {
				underPointer = this._updateReroutes(underPointer);
				const segment = this._getLinkCentreOnPos(e);
				if (this.over_link_center !== segment) {
					underPointer |= CanvasItem.Link;
					this.over_link_center = segment;
					this.dirty_bgcanvas = true;
				}
				if (this.canvas) {
					const group = graph.getGroupOnPos(x, y);
					if (group && !e.ctrlKey && !this.read_only && group.isInResize(x, y)) pointer.resizeDirection = "SE";
					else pointer.resizeDirection &&= void 0;
				}
			}
			if (this.node_capturing_input && this.node_capturing_input != node) this.node_capturing_input.onMouseMove?.(e, [x - this.node_capturing_input.pos[0], y - this.node_capturing_input.pos[1]], this);
			if (this.isDragging) {
				this._autoPan?.updatePointer(e.clientX, e.clientY);
				const selected = this.selectedItems;
				const allItems = e.ctrlKey ? selected : getAllNestedItems(selected);
				const deltaX = delta[0] / this.ds.scale;
				const deltaY = delta[1] / this.ds.scale;
				if (LiteGraph.vueNodesMode) this.moveChildNodesInGroupVueMode(allItems, deltaX, deltaY);
				else for (const item of allItems) item.move(deltaX, deltaY, true);
				this._dirty();
			}
		}
		this.hoveringOver = underPointer;
		e.preventDefault();
	}
	/**
	* Updates the hover / snap state of all visible reroutes.
	* @returns The original value of {@link underPointer}, with any found reroute items added.
	*/
	_updateReroutes(underPointer) {
		const { graph, pointer, linkConnector } = this;
		if (!graph) throw new NullGraphError();
		if (!pointer.isDown) {
			let anyChanges = false;
			for (const reroute of this._visibleReroutes) {
				anyChanges ||= reroute.updateVisibility(this.graph_mouse);
				if (reroute.isSlotHovered) underPointer |= CanvasItem.RerouteSlot;
			}
			if (anyChanges) this.dirty_bgcanvas = true;
		} else if (linkConnector.isConnecting) {
			for (const reroute of this._visibleReroutes) if (reroute.containsPoint(this.graph_mouse)) {
				if (linkConnector.isRerouteValidDrop(reroute)) {
					linkConnector.overReroute = reroute;
					this._highlight_pos = reroute.pos;
				}
				return underPointer |= CanvasItem.RerouteSlot;
			}
		}
		this._highlight_pos &&= void 0;
		linkConnector.overReroute &&= void 0;
		return underPointer;
	}
	/**
	* Start dragging an item, optionally including all other selected items.
	*
	* ** This function sets the {@link CanvasPointer.finally}() callback. **
	* @param item The item that the drag event started on
	* @param pointer The pointer event that initiated the drag, e.g. pointerdown
	* @param sticky If `true`, the item is added to the selection - see {@link processSelect}
	*/
	_startDraggingItems(item, pointer, sticky = false) {
		this.emitBeforeChange();
		this.graph?.beforeChange();
		pointer.finally = () => {
			this.isDragging = false;
			this._autoPan?.stop();
			this._autoPan = null;
			this.graph?.afterChange();
			this.emitAfterChange();
		};
		this.processSelect(item, pointer.eDown, sticky);
		this.isDragging = true;
		this._startNodeAutoPan();
	}
	_startNodeAutoPan() {
		this._autoPan = new AutoPanController({
			canvas: this.canvas,
			ds: this.ds,
			maxPanSpeed: this.auto_pan_speed,
			onPan: (panX, panY) => {
				const selected = this.selectedItems;
				const allItems = getAllNestedItems(selected);
				if (LiteGraph.vueNodesMode) this.moveChildNodesInGroupVueMode(allItems, panX, panY);
				else for (const item of allItems) item.move(panX, panY, true);
				this._dirty();
			}
		});
		this._autoPan.updatePointer(this.mouse[0], this.mouse[1]);
		this._autoPan.start();
	}
	/**
	* Handles shared clean up and placement after items have been dragged.
	* @param e The event that completed the drag, e.g. pointerup, pointermove
	*/
	_processDraggedItems(e) {
		const { graph } = this;
		if (e.shiftKey || LiteGraph.alwaysSnapToGrid) graph?.snapToGrid(this.selectedItems);
		this.dirty_canvas = true;
		this.dirty_bgcanvas = true;
		this.onNodeMoved?.(findFirstNode(this.selectedItems));
	}
	/**
	* Starts ghost placement mode for a node.
	* The node will be semi-transparent and follow the cursor until the user
	* clicks to place it, or presses Escape/right-clicks to cancel.
	* @param node The node to place
	* @param dragEvent Optional mouse event for positioning under cursor
	*/
	startGhostPlacement(node, dragEvent) {
		this.emitBeforeChange();
		this.graph?.beforeChange();
		if (dragEvent) {
			this.adjustMouseEvent(dragEvent);
			const e = dragEvent;
			node.setPos(e.canvasX - node.size[0] / 2, e.canvasY + 10);
			this.last_mouse = [e.clientX, e.clientY];
		} else node.setPos(this.graph_mouse[0] - node.size[0] / 2, this.graph_mouse[1] + 10);
		this.state.ghostNodeId = node.id;
		this.deselectAll();
		this.select(node);
		this.isDragging = true;
		this._startNodeAutoPan();
		this._ghostPointerHandler = (e) => {
			this.processMouseMove(e);
		};
		document.addEventListener("pointermove", this._ghostPointerHandler);
		document.documentElement.addEventListener("pointerleave", this._ghostPointerHandler);
	}
	/**
	* Finalizes ghost placement mode.
	* @param cancelled If true, the node is removed; otherwise it's placed
	*/
	finalizeGhostPlacement(cancelled) {
		const nodeId = this.state.ghostNodeId;
		if (nodeId == null) return;
		this.state.ghostNodeId = null;
		this.isDragging = false;
		this._autoPan?.stop();
		this._autoPan = null;
		if (this._ghostPointerHandler) {
			document.removeEventListener("pointermove", this._ghostPointerHandler);
			document.documentElement.removeEventListener("pointerleave", this._ghostPointerHandler);
			this._ghostPointerHandler = null;
		}
		const node = this.graph?.getNodeById(nodeId);
		if (!node) return;
		if (cancelled) {
			this.deselect(node);
			this.graph?.remove(node);
		} else {
			delete node.flags.ghost;
			this.graph?.trigger("node:property:changed", {
				nodeId: node.id,
				property: "flags.ghost",
				oldValue: true,
				newValue: false
			});
			this.state.selectionChanged = true;
			this.onSelectionChange?.(this.selected_nodes);
		}
		this.dirty_canvas = true;
		this.dirty_bgcanvas = true;
		this.graph?.afterChange();
		this.emitAfterChange();
	}
	/**
	* Called when a mouse up event has to be processed
	*/
	processMouseUp(e) {
		if (e.isPrimary === false) return;
		const { graph, pointer } = this;
		if (!graph) return;
		this._finishDragZoom();
		LGraphCanvas.active_canvas = this;
		this.adjustMouseEvent(e);
		e.click_time = LiteGraph.getTime() - this.last_mouseclick;
		if (pointer.up(e) === true) {
			pointer.isDown = false;
			pointer.isDouble = false;
			this.connecting_links = null;
			this.dragging_canvas = false;
			graph.change();
			e.stopPropagation();
			e.preventDefault();
			return;
		}
		this.last_mouse_dragging = false;
		this.last_click_position = null;
		this.block_click &&= false;
		if (e.button === 0) {
			this.selected_group = null;
			this.isDragging = false;
			const x = e.canvasX;
			const y = e.canvasY;
			if (!this.linkConnector.isConnecting) {
				this.dirty_canvas = true;
				this.node_over?.onMouseUp?.(e, [x - this.node_over.pos[0], y - this.node_over.pos[1]], this);
				this.node_capturing_input?.onMouseUp?.(e, [x - this.node_capturing_input.pos[0], y - this.node_capturing_input.pos[1]], this);
			}
		} else if (e.button === 1) {
			this.dirty_canvas = true;
			this.dragging_canvas = false;
		} else if (e.button === 2) this.dirty_canvas = true;
		pointer.isDown = false;
		pointer.isDouble = false;
		graph.change();
		e.stopPropagation();
		e.preventDefault();
	}
	/**
	* Called when the mouse moves off the canvas.  Clears all node hover states.
	* @param e
	*/
	processMouseOut(e) {
		this.adjustMouseEvent(e);
		this.updateMouseOverNodes(null, e);
	}
	processMouseCancel() {
		console.warn("Pointer cancel!");
		this.pointer.reset();
	}
	/**
	* Called when a mouse wheel event has to be processed
	*/
	processMouseWheel(e) {
		if (!this.graph || !this.allow_dragcanvas) return;
		this.adjustMouseEvent(e);
		const pos = [e.clientX, e.clientY];
		if (this.viewport && !isPointInRect(pos, this.viewport)) return;
		let { scale } = this.ds;
		const isTrackpad = this.pointer.isTrackpadGesture(e);
		if ((e.ctrlKey || e.metaKey && navigator.platform.includes("Mac")) && !e.altKey && !e.shiftKey || LiteGraph.mouseWheelScroll === "zoom") if (isTrackpad) {
			scale *= 1 + e.deltaY * (1 - this.zoom_speed) * .18;
			this.ds.changeScale(scale, [e.clientX, e.clientY], false);
		} else {
			if (e.deltaY < 0) scale *= this.zoom_speed;
			else if (e.deltaY > 0) scale *= 1 / this.zoom_speed;
			this.ds.changeScale(scale, [e.clientX, e.clientY]);
		}
		else {
			const factor = isTrackpad ? .18 : .008333;
			if (!isTrackpad && e.shiftKey && e.deltaX === 0) this.ds.offset[0] -= e.deltaY * (1 + factor) * (1 / scale);
			else {
				this.ds.offset[0] -= e.deltaX * (1 + factor) * (1 / scale);
				this.ds.offset[1] -= e.deltaY * (1 + factor) * (1 / scale);
			}
		}
		this.graph.change();
		e.preventDefault();
	}
	/**
	* process a key event
	*/
	processKey(e) {
		this._shiftDown = e.shiftKey;
		const { graph } = this;
		if (!graph) return;
		if ((e.key === "Escape" || e.key === "Delete" || e.key === "Backspace") && this.state.ghostNodeId != null) {
			this.finalizeGhostPlacement(true);
			e.stopPropagation();
			e.preventDefault();
			return;
		}
		let block_default = false;
		if (e.target.localName == "input") return;
		if (e.type == "keydown") {
			if (e.key === " ") {
				this.read_only = true;
				if (this._previously_dragging_canvas === null) this._previously_dragging_canvas = this.dragging_canvas;
				this.dragging_canvas = this.pointer.isDown;
				block_default = true;
			} else if (e.key === "Escape") {
				if (this.linkConnector.isConnecting) {
					this.linkConnector.reset();
					e.preventDefault();
					return;
				}
				this.node_panel?.close();
				this.options_panel?.close();
				if (this.node_panel || this.options_panel) block_default = true;
			}
			for (const node of Object.values(this.selected_nodes)) node.onKeyDown?.(e);
		} else if (e.type == "keyup") {
			if (e.key === " ") {
				this.read_only = false;
				this.dragging_canvas = (this._previously_dragging_canvas ?? false) && this.pointer.isDown;
				this._previously_dragging_canvas = null;
			}
			for (const node of Object.values(this.selected_nodes)) node.onKeyUp?.(e);
		}
		graph.change();
		if (block_default) {
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}
	_serializeItems(items) {
		const serialisable = {
			nodes: [],
			groups: [],
			reroutes: [],
			links: [],
			subgraphs: []
		};
		const subgraphs = /* @__PURE__ */ new Set();
		for (const item of items ?? this.selectedItems) if (item instanceof LGraphNode) {
			if (item.clonable === false) continue;
			const cloned = item.clone()?.serialize();
			if (!cloned) continue;
			cloned.id = item.id;
			serialisable.nodes.push(cloned);
			if (item.inputs) for (const { link: linkId } of item.inputs) {
				if (linkId == null) continue;
				const link = this.graph?._links.get(linkId)?.asSerialisable();
				if (link) serialisable.links.push(link);
			}
			if (item instanceof SubgraphNode) subgraphs.add(item.subgraph);
		} else if (item instanceof LGraphGroup) serialisable.groups.push(item.serialize());
		else if (item instanceof Reroute) serialisable.reroutes.push(item.asSerialisable());
		for (const subgraph of subgraphs) {
			for (const node of subgraph.nodes) if (node instanceof SubgraphNode) subgraphs.add(node.subgraph);
			const cloned = subgraph.clone(true).asSerialisable();
			serialisable.subgraphs.push(cloned);
		}
		return serialisable;
	}
	/**
	* Copies canvas items to an internal, app-specific clipboard backed by local storage.
	* When called without parameters, it copies {@link selectedItems}.
	* @param items The items to copy.  If nullish, all selected items are copied.
	*/
	copyToClipboard(items) {
		const serializedData = JSON.stringify(this._serializeItems(items));
		localStorage.setItem("litegrapheditor_clipboard", serializedData);
		return serializedData;
	}
	emitEvent(detail) {
		this.canvas.dispatchEvent(new CustomEvent("litegraph:canvas", {
			bubbles: true,
			detail
		}));
	}
	/** @todo Refactor to where it belongs - e.g. Deleting / creating nodes is not actually canvas event. */
	emitBeforeChange() {
		this.emitEvent({ subType: "before-change" });
	}
	/** @todo See {@link emitBeforeChange} */
	emitAfterChange() {
		this.emitEvent({ subType: "after-change" });
	}
	/**
	* Pastes the items from the canvas "clipbaord" - a local storage variable.
	*/
	_pasteFromClipboard(options = {}) {
		const data = localStorage.getItem("litegrapheditor_clipboard");
		if (!data) return;
		return this._deserializeItems(JSON.parse(data), options);
	}
	_deserializeItems(parsed, options) {
		const { connectInputs = false, position = this.graph_mouse } = options;
		if (!LiteGraph.ctrl_shift_v_paste_connect_unselected_outputs && connectInputs) return;
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		graph.beforeChange();
		this.emitBeforeChange();
		parsed.nodes ??= [];
		parsed.groups ??= [];
		parsed.reroutes ??= [];
		parsed.links ??= [];
		parsed.subgraphs ??= [];
		let offsetX = Infinity;
		let offsetY = Infinity;
		for (const item of [...parsed.nodes, ...parsed.reroutes]) {
			if (item.pos == null) throw new TypeError("Invalid node encountered on paste.  `pos` was null.");
			if (item.pos[0] < offsetX) offsetX = item.pos[0];
			if (item.pos[1] < offsetY) offsetY = item.pos[1];
		}
		if (parsed.groups) for (const group of parsed.groups) {
			if (group.bounding[0] < offsetX) offsetX = group.bounding[0];
			if (group.bounding[1] < offsetY) offsetY = group.bounding[1];
		}
		const results = {
			created: [],
			nodes: /* @__PURE__ */ new Map(),
			links: /* @__PURE__ */ new Map(),
			reroutes: /* @__PURE__ */ new Map(),
			subgraphs: /* @__PURE__ */ new Map()
		};
		const { created, nodes, links, reroutes } = results;
		const subgraphIdMap = {};
		for (const subgraphInfo of parsed.subgraphs) subgraphInfo.id = subgraphIdMap[subgraphInfo.id] = createUuidv4();
		const allNodeInfo = [parsed.nodes ? [parsed.nodes] : [], parsed.subgraphs ? parsed.subgraphs.map((s) => s.nodes ?? []) : []].flat(2);
		for (const nodeInfo of allNodeInfo) if (nodeInfo.type in subgraphIdMap) nodeInfo.type = subgraphIdMap[nodeInfo.type];
		remapClipboardSubgraphNodeIds(parsed, graph.rootGraph);
		for (const info of parsed.subgraphs) {
			const subgraph = graph.createSubgraph(info);
			results.subgraphs.set(info.id, subgraph);
		}
		for (const info of parsed.subgraphs) results.subgraphs.get(info.id)?.configure(info);
		for (const info of parsed.groups) {
			info.id = -1;
			const group = new LGraphGroup();
			group.configure(info);
			graph.add(group);
			created.push(group);
		}
		for (const info of parsed.nodes) {
			const node = info.type == null ? null : LiteGraph.createNode(info.type);
			if (!node) continue;
			nodes.set(info.id, node);
			info.id = -1;
			graph.add(node);
			node.configure(info);
			created.push(node);
		}
		for (const info of parsed.reroutes) {
			const { id, ...rerouteInfo } = info;
			const reroute = graph.setReroute(rerouteInfo);
			created.push(reroute);
			reroutes.set(id, reroute);
		}
		for (const reroute of reroutes.values()) {
			if (reroute.parentId == null) continue;
			const mapped = reroutes.get(reroute.parentId);
			if (mapped) reroute.parentId = mapped.id;
		}
		for (const info of parsed.links) {
			let outNode = nodes.get(info.origin_id);
			let afterRerouteId;
			if (info.parentId != null) afterRerouteId = reroutes.get(info.parentId)?.id;
			if (connectInputs && LiteGraph.ctrl_shift_v_paste_connect_unselected_outputs) {
				outNode ??= graph.getNodeById(info.origin_id);
				afterRerouteId ??= info.parentId;
			}
			const inNode = nodes.get(info.target_id);
			if (inNode) {
				const link = outNode?.connect(info.origin_slot, inNode, info.target_slot, afterRerouteId);
				if (link) links.set(info.id, link);
			}
		}
		for (const reroute of reroutes.values()) {
			const ids = [...reroute.linkIds].map((x) => links.get(x)?.id ?? x);
			reroute.update(reroute.parentId, void 0, ids, reroute.floating);
			if (!reroute.validateLinks(graph.links, graph.floatingLinks)) graph.removeReroute(reroute.id);
		}
		const dx = position[0] - offsetX;
		const dy = position[1] - offsetY;
		for (const item of created) if (item instanceof LGraphNode) item.setPos(item.pos[0] + dx, item.pos[1] + dy);
		else if (item instanceof Reroute) item.move(dx, dy);
		else if (item instanceof LGraphGroup) item.move(dx, dy, true);
		const newPositions = created.filter((item) => item instanceof LGraphNode).map((node) => ({
			nodeId: String(node.id),
			bounds: {
				x: node.pos[0],
				y: node.pos[1],
				width: node.size?.[0] ?? 100,
				height: node.size?.[1] ?? 200
			}
		}));
		if (newPositions.length) layoutStore.setSource(LayoutSource.Canvas);
		layoutStore.batchUpdateNodeBounds(newPositions);
		this.selectItems(created);
		forEachNode(graph, (n) => n.onGraphConfigured?.());
		forEachNode(graph, (n) => n.onAfterGraphConfigured?.());
		graph.afterChange();
		this.emitAfterChange();
		return results;
	}
	pasteFromClipboard(options = {}) {
		this.emitBeforeChange();
		try {
			this._pasteFromClipboard(options);
		} finally {
			this.emitAfterChange();
		}
	}
	processNodeDblClicked(n) {
		this.onShowNodePanel?.(n);
		this.onNodeDblClicked?.(n);
		this.setDirty(true);
	}
	/**
	* Normalizes a drag rectangle to have positive width and height.
	* @param dragRect The drag rectangle to normalize (modified in place)
	* @returns The normalized rectangle
	*/
	_normalizeDragRect(dragRect) {
		const w = Math.abs(dragRect[2]);
		const h = Math.abs(dragRect[3]);
		if (dragRect[2] < 0) dragRect[0] -= w;
		if (dragRect[3] < 0) dragRect[1] -= h;
		dragRect[2] = w;
		dragRect[3] = h;
		return dragRect;
	}
	/**
	* Gets all positionable items that overlap with the given rectangle.
	* @param rect The rectangle to check against
	* @returns Set of positionable items that overlap with the rectangle
	*/
	_getItemsInRect(rect) {
		const { graph, subgraph } = this;
		if (!graph) throw new NullGraphError();
		const items = /* @__PURE__ */ new Set();
		if (subgraph) {
			const { inputNode, outputNode } = subgraph;
			if (overlapBounding(rect, inputNode.boundingRect)) items.add(inputNode);
			if (overlapBounding(rect, outputNode.boundingRect)) items.add(outputNode);
		}
		for (const node of graph._nodes) if (overlapBounding(rect, node.boundingRect)) items.add(node);
		for (const group of graph.groups) if (containsRect(rect, group._bounding)) {
			group.recomputeInsideNodes();
			items.add(group);
		}
		for (const reroute of graph.reroutes.values()) if (isPointInRect(reroute.pos, rect)) items.add(reroute);
		return items;
	}
	/**
	* Handles live selection updates during drag. Called on each pointer move.
	* @param e The pointer move event
	* @param dragRect The current drag rectangle
	* @param initialSelection The selection state before the drag started
	*/
	handleLiveSelect(e, dragRect, initialSelection) {
		dragRect[2] = e.canvasX - dragRect[0];
		dragRect[3] = e.canvasY - dragRect[1];
		const normalizedRect = [
			dragRect[0],
			dragRect[1],
			dragRect[2],
			dragRect[3]
		];
		this._normalizeDragRect(normalizedRect);
		const itemsInRect = this._getItemsInRect(normalizedRect);
		const desired = /* @__PURE__ */ new Set();
		if (e.shiftKey && !e.altKey) {
			for (const item of initialSelection) desired.add(item);
			for (const item of itemsInRect) desired.add(item);
		} else if (e.altKey && !e.shiftKey) {
			for (const item of initialSelection) if (!itemsInRect.has(item)) desired.add(item);
		} else for (const item of itemsInRect) desired.add(item);
		let changed = false;
		for (const item of [...this.selectedItems]) if (!desired.has(item)) {
			this.deselect(item);
			changed = true;
		}
		for (const item of desired) if (!this.selectedItems.has(item)) {
			this.select(item);
			changed = true;
		}
		if (changed) {
			this.onSelectionChange?.(this.selected_nodes);
			this.setDirty(true);
		}
	}
	/**
	* Finalizes the live selection when drag ends.
	*/
	finalizeLiveSelect() {
		this.onSelectionChange?.(this.selected_nodes);
	}
	/**
	* Handles multi-select when drag ends (classic mode).
	* @param e The pointer up event
	* @param dragRect The drag rectangle
	*/
	_handleMultiSelect(e, dragRect) {
		const normalizedRect = [
			dragRect[0],
			dragRect[1],
			dragRect[2],
			dragRect[3]
		];
		this._normalizeDragRect(normalizedRect);
		const itemsInRect = this._getItemsInRect(normalizedRect);
		const { selectedItems } = this;
		if (e.shiftKey) for (const item of itemsInRect) this.select(item);
		else if (e.altKey) for (const item of itemsInRect) this.deselect(item);
		else {
			for (const item of selectedItems.values()) if (!itemsInRect.has(item)) this.deselect(item);
			for (const item of itemsInRect) this.select(item);
		}
		this.onSelectionChange?.(this.selected_nodes);
	}
	/**
	* Determines whether to select or deselect an item that has received a pointer event.  Will deselect other nodes if
	* @param item Canvas item to select/deselect
	* @param e The MouseEvent to handle
	* @param sticky Prevents deselecting individual nodes (as used by aux/right-click)
	* @remarks
	* Accessibility: anyone using {@link mutli_select} always deselects when clicking empty space.
	*/
	processSelect(item, e, sticky = false) {
		const addModifier = e?.shiftKey;
		const subtractModifier = e != null && (e.metaKey || e.ctrlKey);
		const eitherModifier = addModifier || subtractModifier;
		const modifySelection = eitherModifier || this.multi_select;
		if (!item) {
			if (!eitherModifier || this.multi_select) this.deselectAll();
		} else if (!item.selected || !this.selectedItems.has(item)) {
			if (!modifySelection) this.deselectAll(item);
			this.select(item);
		} else if (modifySelection && !sticky) if (item instanceof LGraphGroup && this.groupSelectChildren) {
			item.selected = false;
			this.selectedItems.delete(item);
			this.state.selectionChanged = true;
		} else this.deselect(item);
		else if (!sticky) this.deselectAll(item);
		else return;
		this.onSelectionChange?.(this.selected_nodes);
		this.setDirty(true);
	}
	/**
	* Selects a {@link Positionable} item.
	* @param item The canvas item to add to the selection.
	*/
	select(item) {
		if (item.selected && this.selectedItems.has(item)) return;
		item.selected = true;
		this.selectedItems.add(item);
		this.state.selectionChanged = true;
		if (item instanceof LGraphGroup) {
			item.recomputeInsideNodes();
			if (this.groupSelectChildren) this.#traverseGroupChildren(item, (child) => {
				if (!child.selected || !this.selectedItems.has(child)) {
					child.selected = true;
					this.selectedItems.add(child);
					this.state.selectionChanged = true;
				}
			}, (child) => this.select(child));
			return;
		}
		if (!(item instanceof LGraphNode)) return;
		item.onSelected?.();
		this.selected_nodes[item.id] = item;
		this.onNodeSelected?.(item);
		if (item.inputs) for (const input of item.inputs) {
			if (input.link == null) continue;
			this.highlighted_links[input.link] = true;
		}
		if (item.outputs) for (const id of item.outputs.flatMap((x) => x.links)) {
			if (id == null) continue;
			this.highlighted_links[id] = true;
		}
	}
	/**
	* Deselects a {@link Positionable} item.
	* @param item The canvas item to remove from the selection.
	*/
	deselect(item) {
		if (!item.selected && !this.selectedItems.has(item)) return;
		item.selected = false;
		this.selectedItems.delete(item);
		this.state.selectionChanged = true;
		if (item instanceof LGraphGroup && this.groupSelectChildren) {
			this.#traverseGroupChildren(item, (child) => {
				if (child.selected || this.selectedItems.has(child)) {
					child.selected = false;
					this.selectedItems.delete(child);
					this.state.selectionChanged = true;
				}
			}, (child) => this.deselect(child));
			return;
		}
		if (!(item instanceof LGraphNode)) return;
		item.onDeselected?.();
		delete this.selected_nodes[item.id];
		this.onNodeDeselected?.(item);
		const { graph } = this;
		if (!graph) return;
		if (item.inputs) for (const input of item.inputs) {
			if (input.link == null) continue;
			const node = LLink.getOriginNode(graph, input.link);
			if (node && this.selectedItems.has(node)) continue;
			delete this.highlighted_links[input.link];
		}
		if (item.outputs) for (const id of item.outputs.flatMap((x) => x.links)) {
			if (id == null) continue;
			const node = LLink.getTargetNode(graph, id);
			if (node && this.selectedItems.has(node)) continue;
			delete this.highlighted_links[id];
		}
	}
	/**
	* Iterative traversal of a group's descendants.
	* Calls {@link groupAction} on nested groups and {@link leafAction} on
	* non-group children.  Always recurses into nested groups regardless of
	* their current selection state.
	*/
	#traverseGroupChildren(group, groupAction, leafAction) {
		const stack = [...group._children];
		while (stack.length > 0) {
			const child = stack.pop();
			if (child instanceof LGraphGroup) {
				groupAction(child);
				for (const nested of child._children) stack.push(nested);
			} else leafAction(child);
		}
	}
	/** @deprecated See {@link LGraphCanvas.processSelect} */
	processNodeSelected(item, e) {
		this.processSelect(item, e, e && (e.shiftKey || e.metaKey || e.ctrlKey || this.multi_select));
	}
	/** @deprecated See {@link LGraphCanvas.select} */
	selectNode(node, add_to_current_selection) {
		if (node == null) this.deselectAll();
		else this.selectNodes([node], add_to_current_selection);
	}
	get empty() {
		if (!this.graph) throw new NullGraphError();
		return this.graph.empty;
	}
	get positionableItems() {
		if (!this.graph) throw new NullGraphError();
		return this.graph.positionableItems();
	}
	/**
	* Selects several items.
	* @param items Items to select - if falsy, all items on the canvas will be selected
	* @param add_to_current_selection If set, the items will be added to the current selection instead of replacing it
	*/
	selectItems(items, add_to_current_selection) {
		const itemsToSelect = items ?? this.positionableItems;
		if (!add_to_current_selection) this.deselectAll();
		for (const item of itemsToSelect) this.select(item);
		this.onSelectionChange?.(this.selected_nodes);
		this.setDirty(true);
	}
	/**
	* selects several nodes (or adds them to the current selection)
	* @deprecated See {@link LGraphCanvas.selectItems}
	*/
	selectNodes(nodes, add_to_current_selection) {
		this.selectItems(nodes, add_to_current_selection);
	}
	/** @deprecated See {@link LGraphCanvas.deselect} */
	deselectNode(node) {
		this.deselect(node);
	}
	/**
	* Deselects all items on the canvas.
	* @param keepSelected If set, this item will not be removed from the selection.
	*/
	deselectAll(keepSelected) {
		if (!this.graph) return;
		const selected = this.selectedItems;
		if (!selected.size) return;
		const initialSelectionSize = selected.size;
		let wasSelected;
		for (const sel of selected) {
			if (sel === keepSelected) {
				wasSelected = sel;
				continue;
			}
			sel.onDeselected?.();
			sel.selected = false;
		}
		selected.clear();
		if (wasSelected) selected.add(wasSelected);
		this.setDirty(true);
		const oldNode = keepSelected?.id == null ? null : this.selected_nodes[keepSelected.id];
		this.selected_nodes = {};
		this.current_node = null;
		this.highlighted_links = {};
		if (keepSelected instanceof LGraphNode) {
			if (oldNode) this.selected_nodes[oldNode.id] = oldNode;
			if (keepSelected.inputs) for (const input of keepSelected.inputs) {
				if (input.link == null) continue;
				this.highlighted_links[input.link] = true;
			}
			if (keepSelected.outputs) for (const id of keepSelected.outputs.flatMap((x) => x.links)) {
				if (id == null) continue;
				this.highlighted_links[id] = true;
			}
		}
		if (initialSelectionSize !== selected.size) {
			this.state.selectionChanged = true;
			this.onSelectionChange?.(this.selected_nodes);
		}
	}
	/** @deprecated See {@link LGraphCanvas.deselectAll} */
	deselectAllNodes() {
		this.deselectAll();
	}
	/**
	* Deletes all selected items from the graph.
	* @todo Refactor deletion task to LGraph.  Selection is a canvas property, delete is a graph action.
	*/
	deleteSelected() {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		this.emitBeforeChange();
		graph.beforeChange();
		const toDelete = [...this.selectedItems];
		for (const item of toDelete) if (item instanceof LGraphNode) {
			const node = item;
			if (node.block_delete) continue;
			node.connectInputToOutput();
			graph.remove(node);
			this.onNodeDeselected?.(node);
		} else if (item instanceof LGraphGroup) graph.remove(item);
		else if (item instanceof Reroute) graph.removeReroute(item.id);
		this.selected_nodes = {};
		this.selectedItems.clear();
		this.current_node = null;
		this.highlighted_links = {};
		this.state.selectionChanged = true;
		this.onSelectionChange?.(this.selected_nodes);
		this.setDirty(true);
		graph.afterChange();
		this.emitAfterChange();
	}
	/**
	* deletes all nodes in the current selection from the graph
	* @deprecated See {@link LGraphCanvas.deleteSelected}
	*/
	deleteSelectedNodes() {
		this.deleteSelected();
	}
	/**
	* centers the camera on a given node
	*/
	centerOnNode(node) {
		const dpi = window?.devicePixelRatio || 1;
		this.ds.offset[0] = -node.pos[0] - node.size[0] * .5 + this.canvas.width * .5 / (this.ds.scale * dpi);
		this.ds.offset[1] = -node.pos[1] - node.size[1] * .5 + this.canvas.height * .5 / (this.ds.scale * dpi);
		this.setDirty(true, true);
	}
	/**
	* adds some useful properties to a mouse event, like the position in graph coordinates
	*/
	adjustMouseEvent(e) {
		let clientX_rel = e.clientX;
		let clientY_rel = e.clientY;
		if (this.canvas) {
			const b = this.canvas.getBoundingClientRect();
			clientX_rel -= b.left;
			clientY_rel -= b.top;
		}
		e.safeOffsetX = clientX_rel;
		e.safeOffsetY = clientY_rel;
		if (e.deltaX === void 0) e.deltaX = clientX_rel - this.last_mouse_position[0];
		if (e.deltaY === void 0) e.deltaY = clientY_rel - this.last_mouse_position[1];
		this.last_mouse_position[0] = clientX_rel;
		this.last_mouse_position[1] = clientY_rel;
		e.canvasX = clientX_rel / this.ds.scale - this.ds.offset[0];
		e.canvasY = clientY_rel / this.ds.scale - this.ds.offset[1];
	}
	/**
	* changes the zoom level of the graph (default is 1), you can pass also a place used to pivot the zoom
	*/
	setZoom(value, zooming_center) {
		this.ds.changeScale(value, zooming_center);
		this._dirty();
	}
	/**
	* converts a coordinate from graph coordinates to canvas2D coordinates
	*/
	convertOffsetToCanvas(pos, _out) {
		return this.ds.convertOffsetToCanvas(pos);
	}
	/**
	* converts a coordinate from Canvas2D coordinates to graph space
	*/
	convertCanvasToOffset(pos, out) {
		return this.ds.convertCanvasToOffset(pos, out);
	}
	convertEventToCanvasOffset(e) {
		const rect = this.canvas.getBoundingClientRect();
		return this.convertCanvasToOffset([e.clientX - rect.left, e.clientY - rect.top]);
	}
	/**
	* brings a node to front (above all other nodes)
	*/
	bringToFront(node) {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		const i = graph._nodes.indexOf(node);
		if (i == -1) return;
		graph._nodes.splice(i, 1);
		graph._nodes.push(node);
	}
	/**
	* sends a node to the back (below all other nodes)
	*/
	sendToBack(node) {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		const i = graph._nodes.indexOf(node);
		if (i == -1) return;
		graph._nodes.splice(i, 1);
		graph._nodes.unshift(node);
	}
	/**
	* Determines which nodes are visible and populates {@link out} with the results.
	* @param nodes The list of nodes to check - if falsy, all nodes in the graph will be checked
	* @param out Array to write visible nodes into - if falsy, a new array is created instead
	* @returns Array passed ({@link out}), or a new array containing all visible nodes
	*/
	computeVisibleNodes(nodes, out) {
		const visible_nodes = out || [];
		visible_nodes.length = 0;
		if (!this.graph) throw new NullGraphError();
		const _nodes = nodes || this.graph._nodes;
		for (const node of _nodes) {
			node.updateArea(this.ctx);
			if (!overlapBounding(this.visible_area, node.renderArea)) continue;
			visible_nodes.push(node);
		}
		return visible_nodes;
	}
	/**
	* Checks if a node is visible on the canvas.
	* @param node The node to check
	* @returns `true` if the node is visible, otherwise `false`
	*/
	isNodeVisible(node) {
		return this._visible_node_ids.has(node.id);
	}
	/**
	* renders the whole canvas content, by rendering in two separated canvas, one containing the background grid and the connections, and one containing the nodes)
	*/
	draw(force_canvas, force_bgcanvas) {
		if (!this.canvas || this.canvas.width == 0 || this.canvas.height == 0) return;
		const now = LiteGraph.getTime();
		this.render_time = (now - this.last_draw_time) * .001;
		this.last_draw_time = now;
		if (this.graph) this.ds.computeVisibleArea(this.viewport);
		if (this.dirty_canvas || force_canvas) {
			this.computeVisibleNodes(void 0, this.visible_nodes);
			this._visible_node_ids = new Set(this.visible_nodes.map((node) => node.id));
			const { subgraph } = this;
			if (subgraph) {
				subgraph.inputNode.arrange();
				subgraph.outputNode.arrange();
			}
		}
		if (this.dirty_bgcanvas || force_bgcanvas || this.always_render_background || this.graph?._last_trigger_time && now - this.graph._last_trigger_time < 1e3) this.drawBackCanvas();
		if (this.dirty_canvas || force_canvas) this.drawFrontCanvas();
		this.fps = this.render_time ? 1 / this.render_time : 0;
		this.frame++;
	}
	/**
	* draws the front canvas (the one containing all the nodes)
	*/
	drawFrontCanvas() {
		clearTextMeasureCache();
		this.dirty_canvas = false;
		const { ctx, canvas, graph } = this;
		if (ctx.start2D && !this.viewport) {
			ctx.start2D();
			ctx.restore();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
		}
		const area = this.viewport || this.dirty_area;
		if (area) {
			ctx.save();
			ctx.beginPath();
			ctx.rect(area[0], area[1], area[2], area[3]);
			ctx.clip();
		}
		this._snapToGrid = this._shiftDown || LiteGraph.alwaysSnapToGrid ? this.graph?.getSnapToGridSize() : void 0;
		if (this.clear_background) if (area) ctx.clearRect(area[0], area[1], area[2], area[3]);
		else ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (this.bgcanvas == this.canvas) this.drawBackCanvas();
		else {
			const scale = window.devicePixelRatio;
			ctx.drawImage(this.bgcanvas, 0, 0, this.bgcanvas.width / scale, this.bgcanvas.height / scale);
		}
		this.onRender?.(canvas, ctx);
		if (this.show_info) {
			const pos = this.fpsInfoLocation ?? area;
			this.renderInfo(ctx, pos?.[0] ?? 0, pos?.[1] ?? 0);
		}
		if (graph) {
			ctx.save();
			this.ds.toCanvasContext(ctx);
			const { visible_nodes } = this;
			const drawSnapGuides = this._snapToGrid && (this.isDragging || layoutStore.isDraggingVueNodes.value);
			for (const node of visible_nodes) {
				ctx.save();
				if (drawSnapGuides && this.selectedItems.has(node)) this.drawSnapGuide(ctx, node);
				ctx.translate(node.pos[0], node.pos[1]);
				this.drawNode(node, ctx);
				ctx.restore();
			}
			this.subgraph?.draw(ctx, this.colourGetter, this.linkConnector.renderLinks[0]?.fromSlot, this.editor_alpha);
			if (this.render_execution_order) this.drawExecutionOrder(ctx);
			if (graph.config.links_ontop) this.drawConnections(ctx);
			if (!LiteGraph.vueNodesMode || !this.overlayCtx) this._drawConnectingLinks(ctx);
			else this._drawOverlayLinks();
			this._drawLinkTooltip(ctx);
			this.onDrawForeground?.(ctx, this.visible_area);
			ctx.restore();
		}
		this.onDrawOverlay?.(ctx);
		if (area) ctx.restore();
	}
	_getLinkCentreOnPos(e) {
		if (this.linkMarkerShape === LinkMarkerShape.None) return;
		for (const linkSegment of this.renderedPaths) {
			const centre = linkSegment._pos;
			if (!centre) continue;
			if (isInRectangle(e.canvasX, e.canvasY, centre[0] - 4, centre[1] - 4, 8, 8)) return linkSegment;
		}
	}
	_drawConnectingLinks(ctx) {
		const { linkConnector } = this;
		if (!linkConnector.isConnecting) return;
		const { renderLinks } = linkConnector;
		const highlightPos = this._getHighlightPosition();
		ctx.lineWidth = this.connections_width;
		for (const renderLink of renderLinks) {
			const { fromSlot, fromPos: pos, fromDirection, dragDirection } = renderLink;
			const connShape = fromSlot.shape;
			const connType = fromSlot.type;
			const colour = resolveConnectingLinkColor(connType);
			if (this.linkRenderer) this.linkRenderer.renderDraggingLink(ctx, pos, highlightPos, colour, fromDirection, dragDirection, {
				...this.buildLinkRenderContext(),
				linkMarkerShape: LinkMarkerShape.None
			});
			if (renderLink instanceof MovingInputLink) this.setDirty(false, true);
			ctx.fillStyle = colour;
			ctx.beginPath();
			if (connType === LiteGraph.EVENT || connShape === RenderShape.BOX) {
				ctx.rect(pos[0] - 6 + .5, pos[1] - 5 + .5, 14, 10);
				ctx.rect(highlightPos[0] - 6 + .5, highlightPos[1] - 5 + .5, 14, 10);
			} else if (connShape === RenderShape.ARROW) {
				ctx.moveTo(pos[0] + 8, pos[1] + .5);
				ctx.lineTo(pos[0] - 4, pos[1] + 6 + .5);
				ctx.lineTo(pos[0] - 4, pos[1] - 6 + .5);
				ctx.closePath();
			} else {
				ctx.arc(pos[0], pos[1], 4, 0, Math.PI * 2);
				ctx.arc(highlightPos[0], highlightPos[1], 4, 0, Math.PI * 2);
			}
			ctx.fill();
		}
		this._renderSnapHighlight(ctx, highlightPos);
	}
	_drawLinkTooltip(ctx) {
		if (!this.isDragging && this.over_link_center && this.render_link_tooltip) this.drawLinkTooltip(ctx, this.over_link_center);
		else this.onDrawLinkTooltip?.(ctx, null);
	}
	_drawOverlayLinks() {
		const octx = this.overlayCtx;
		const overlayCanvas = this.overlayCanvas;
		if (!octx || !overlayCanvas) return;
		octx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
		if (!this.linkConnector.isConnecting) return;
		octx.save();
		const scale = overlayCanvas.width / (overlayCanvas.clientWidth || 1);
		octx.setTransform(scale, 0, 0, scale, 0, 0);
		this.ds.toCanvasContext(octx);
		this._drawConnectingLinks(octx);
		octx.restore();
	}
	/** Get the target snap / highlight point in graph space */
	_getHighlightPosition() {
		return LiteGraph.snaps_for_comfy ? this.linkConnector.state.snapLinksPos ?? this._highlight_pos ?? this.graph_mouse : this.graph_mouse;
	}
	/**
	* Renders indicators showing where a link will connect if released.
	* Partial border over target node and a highlight over the slot itself.
	* @param ctx Canvas 2D context
	*/
	_renderSnapHighlight(ctx, highlightPos) {
		const linkConnectorSnap = !!this.linkConnector.state.snapLinksPos;
		if (!this._highlight_pos && !linkConnectorSnap) return;
		ctx.fillStyle = "#ffcc00";
		ctx.beginPath();
		if (this._highlight_input?.shape === RenderShape.ARROW) {
			ctx.moveTo(highlightPos[0] + 8, highlightPos[1] + .5);
			ctx.lineTo(highlightPos[0] - 4, highlightPos[1] + 6 + .5);
			ctx.lineTo(highlightPos[0] - 4, highlightPos[1] - 6 + .5);
			ctx.closePath();
		} else ctx.arc(highlightPos[0], highlightPos[1], 6, 0, Math.PI * 2);
		ctx.fill();
		const { linkConnector } = this;
		const { overReroute, overWidget } = linkConnector;
		if (!LiteGraph.snap_highlights_node || !linkConnector.isConnecting || linkConnectorSnap) return;
		overReroute?.drawHighlight(ctx, "#ffcc00aa");
		const node = this.node_over;
		if (!node) return;
		const { strokeStyle, lineWidth } = ctx;
		const area = node.boundingRect;
		const gap = 3;
		const radius = LiteGraph.ROUND_RADIUS + gap;
		const x = area[0] - gap;
		const y = area[1] - gap;
		const width = area[2] + gap * 2;
		const height = area[3] + gap * 2;
		ctx.beginPath();
		ctx.roundRect(x, y, width, height, radius);
		const start = linkConnector.state.connectingTo === "output" ? 0 : 1;
		const inverter = start ? -1 : 1;
		const hx = highlightPos[0];
		const hy = highlightPos[1];
		const gRadius = width < height ? width : width * Math.max(height / width, .5);
		const gradient = ctx.createRadialGradient(hx, hy, 0, hx, hy, gRadius);
		gradient.addColorStop(1, "#00000000");
		gradient.addColorStop(0, "#ffcc00aa");
		const linearGradient = ctx.createLinearGradient(x, y, x + width, y);
		linearGradient.addColorStop(.5, "#00000000");
		linearGradient.addColorStop(start + .67 * inverter, "#ddeeff33");
		linearGradient.addColorStop(start + inverter, "#ffcc0055");
		/**
		* Workaround for a canvas render issue.
		* In Chromium 129 (2024-10-15), rounded corners can be rendered with the wrong part of a gradient colour.
		* Occurs only at certain thicknesses / arc sizes.
		*/
		ctx.setLineDash([radius, radius * .001]);
		ctx.lineWidth = 1;
		ctx.strokeStyle = linearGradient;
		ctx.stroke();
		if (overWidget) {
			const { computedHeight } = overWidget;
			ctx.beginPath();
			const { pos: [nodeX, nodeY] } = node;
			const height = LiteGraph.NODE_WIDGET_HEIGHT;
			if (overWidget.type.startsWith("custom") && computedHeight != null && computedHeight > height * 2) ctx.rect(nodeX + 9, nodeY + overWidget.y + 9, (overWidget.width ?? area[2]) - 18, computedHeight - 18);
			else ctx.roundRect(nodeX + BaseWidget.margin, nodeY + overWidget.y, overWidget.width ?? area[2], height, height * .5);
			ctx.stroke();
		}
		ctx.strokeStyle = gradient;
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeStyle;
	}
	/**
	* draws some useful stats in the corner of the canvas
	*/
	renderInfo(ctx, x, y) {
		const lineHeight = 13;
		const lineCount = (this.graph ? 5 : 1) + (this.info_text ? 1 : 0);
		x = x || 10;
		y = y || this.canvas.height / ((this.canvas.ownerDocument.defaultView ?? window).devicePixelRatio || 1) - (lineCount + 1) * lineHeight;
		ctx.save();
		ctx.translate(x, y);
		ctx.font = `10px ${LiteGraph.DEFAULT_FONT}`;
		ctx.fillStyle = "#888";
		ctx.textAlign = "left";
		let line = 1;
		if (this.graph) {
			ctx.fillText(`T: ${this.graph.globaltime.toFixed(2)}s`, 5, lineHeight * line++);
			ctx.fillText(`I: ${this.graph.iteration}`, 5, lineHeight * line++);
			ctx.fillText(`N: ${this.graph._nodes.length} [${this.visible_nodes.length}]`, 5, lineHeight * line++);
			ctx.fillText(`V: ${this.graph._version}`, 5, lineHeight * line++);
			ctx.fillText(`FPS:${this.fps.toFixed(2)}`, 5, lineHeight * line++);
		} else ctx.fillText("No graph selected", 5, lineHeight * line++);
		if (this.info_text) ctx.fillText(this.info_text, 5, lineHeight * line++);
		ctx.restore();
	}
	/**
	* draws the back canvas (the one containing the background and the connections)
	*/
	drawBackCanvas() {
		const canvas = this.bgcanvas;
		if (canvas.width != this.canvas.width || canvas.height != this.canvas.height) {
			canvas.width = this.canvas.width;
			canvas.height = this.canvas.height;
		}
		if (!this.bgctx) this.bgctx = this.bgcanvas.getContext("2d");
		const ctx = this.bgctx;
		if (!ctx) throw new TypeError("Background canvas context was null.");
		const viewport = this.viewport || [
			0,
			0,
			ctx.canvas.width,
			ctx.canvas.height
		];
		if (this.clear_background) ctx.clearRect(viewport[0], viewport[1], viewport[2], viewport[3]);
		const bg_already_painted = this.onRenderBackground ? this.onRenderBackground(canvas, ctx) : false;
		if (!this.viewport) {
			const scale = window.devicePixelRatio;
			ctx.restore();
			ctx.setTransform(scale, 0, 0, scale, 0, 0);
		}
		if (this.graph) {
			ctx.save();
			this.ds.toCanvasContext(ctx);
			if (this.ds.scale < 1.5 && !bg_already_painted && this.clear_background_color) {
				ctx.fillStyle = this.clear_background_color;
				ctx.fillRect(this.visible_area[0], this.visible_area[1], this.visible_area[2], this.visible_area[3]);
			}
			if (this.background_image && this.ds.scale > .5 && !bg_already_painted) {
				if (this.zoom_modify_alpha) ctx.globalAlpha = (1 - .5 / this.ds.scale) * this.editor_alpha;
				else ctx.globalAlpha = this.editor_alpha;
				ctx.imageSmoothingEnabled = false;
				if (!this._bg_img || this._bg_img.name != this.background_image) {
					this._bg_img = new Image();
					this._bg_img.name = this.background_image;
					this._bg_img.src = this.background_image;
					this._bg_img.addEventListener("load", () => {
						this.draw(true, true);
					});
				}
				let pattern = this._pattern;
				if (pattern == null && this._bg_img.width > 0) {
					pattern = ctx.createPattern(this._bg_img, "repeat") ?? void 0;
					this._pattern_img = this._bg_img;
					this._pattern = pattern;
				}
				if (pattern) {
					ctx.fillStyle = pattern;
					ctx.fillRect(this.visible_area[0], this.visible_area[1], this.visible_area[2], this.visible_area[3]);
					ctx.fillStyle = "transparent";
				}
				ctx.globalAlpha = 1;
				ctx.imageSmoothingEnabled = true;
			}
			if (this.bg_tint) {
				ctx.fillStyle = this.bg_tint;
				ctx.fillRect(this.visible_area[0], this.visible_area[1], this.visible_area[2], this.visible_area[3]);
				ctx.fillStyle = "transparent";
			}
			if (this.graph._groups.length) this.drawGroups(canvas, ctx);
			this.onDrawBackground?.(ctx, this.visible_area);
			if (this.render_canvas_border) {
				ctx.strokeStyle = "#235";
				ctx.strokeRect(0, 0, canvas.width, canvas.height);
			}
			if (this.render_connections_shadows) {
				ctx.shadowColor = "#000";
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 6;
			} else ctx.shadowColor = "rgba(0,0,0,0)";
			this.drawConnections(ctx);
			ctx.shadowColor = "rgba(0,0,0,0)";
			ctx.restore();
		}
		this.dirty_bgcanvas = false;
		this.dirty_canvas = true;
	}
	/**
	* draws the given node inside the canvas
	*/
	drawNode(node, ctx) {
		this.current_node = node;
		if (LiteGraph.vueNodesMode) {
			node._setConcreteSlots();
			if (!node.collapsed) node.arrange();
			return;
		}
		const color = node.renderingColor;
		const bgcolor = node.renderingBgColor;
		ctx.globalAlpha = this.getNodeModeAlpha(node);
		if (this.render_shadows && !this.low_quality) {
			ctx.shadowColor = LiteGraph.DEFAULT_SHADOW_COLOR;
			ctx.shadowOffsetX = 2 * this.ds.scale;
			ctx.shadowOffsetY = 2 * this.ds.scale;
			ctx.shadowBlur = 3 * this.ds.scale;
		} else ctx.shadowColor = "transparent";
		if (node.flags.collapsed && node.onDrawCollapsed?.(ctx, this) == true) return;
		const shape = node._shape || RenderShape.BOX;
		const size = temp_vec2;
		size[0] = node.renderingSize[0];
		size[1] = node.renderingSize[1];
		if (node.collapsed) ctx.font = this.inner_text_font;
		if (node.clip_area) {
			ctx.save();
			ctx.beginPath();
			if (shape == RenderShape.BOX) ctx.rect(0, 0, size[0], size[1]);
			else if (shape == RenderShape.ROUND) ctx.roundRect(0, 0, size[0], size[1], [10]);
			else if (shape == RenderShape.CIRCLE) ctx.arc(size[0] * .5, size[1] * .5, size[0] * .5, 0, Math.PI * 2);
			ctx.clip();
		}
		this.drawNodeShape(node, ctx, size, color, bgcolor, !!node.selected);
		if (node.title_buttons && !node.flags.collapsed) {
			const title_height = LiteGraph.NODE_TITLE_HEIGHT;
			let current_x = size[0];
			for (let i = 0; i < node.title_buttons.length; i++) {
				const button = node.title_buttons[i];
				if (!button.visible) continue;
				const button_width = button.getWidth(ctx);
				current_x -= button_width;
				const button_y = -title_height + (title_height - button.height) / 2;
				button.draw(ctx, current_x, button_y);
				current_x -= 2;
			}
		}
		if (!this.low_quality) node.drawBadges(ctx);
		ctx.shadowColor = "transparent";
		ctx.strokeStyle = LiteGraph.NODE_BOX_OUTLINE_COLOR;
		node.onDrawForeground?.(ctx, this, this.canvas);
		ctx.font = this.inner_text_font;
		node._setConcreteSlots();
		if (!node.collapsed) {
			node.arrange();
			node.drawSlots(ctx, {
				fromSlot: this.linkConnector.renderLinks[0]?.fromSlot,
				colorContext: this.colourGetter,
				editorAlpha: this.editor_alpha,
				lowQuality: this.low_quality
			});
			ctx.textAlign = "left";
			ctx.globalAlpha = 1;
			this.drawNodeWidgets(node, null, ctx);
		} else if (this.render_collapsed_slots) node.drawCollapsedSlots(ctx);
		if (node.clip_area) ctx.restore();
		ctx.globalAlpha = 1;
	}
	/**
	* Draws the link mouseover effect and tooltip.
	* @param ctx Canvas 2D context to draw on
	* @param link The link to render the mouseover effect for
	* @remarks
	* Called against {@link LGraphCanvas.over_link_center}.
	* @todo Split tooltip from hover, so it can be drawn / eased separately
	*/
	drawLinkTooltip(ctx, link) {
		const pos = link._pos;
		ctx.fillStyle = "black";
		ctx.beginPath();
		if (this.linkMarkerShape === LinkMarkerShape.Arrow) {
			const transform = ctx.getTransform();
			ctx.translate(pos[0], pos[1]);
			if (Number.isFinite(link._centreAngle)) ctx.rotate(link._centreAngle);
			ctx.moveTo(-2, -3);
			ctx.lineTo(4, 0);
			ctx.lineTo(-2, 3);
			ctx.setTransform(transform);
		} else if (this.linkMarkerShape == null || this.linkMarkerShape === LinkMarkerShape.Circle) ctx.arc(pos[0], pos[1], 3, 0, Math.PI * 2);
		ctx.fill();
		const { data } = link;
		if (data == null) return;
		if (this.onDrawLinkTooltip?.(ctx, link, this) == true) return;
		let text = null;
		if (typeof data === "number") text = data.toFixed(2);
		else if (typeof data === "string") text = `"${data}"`;
		else if (typeof data === "boolean") text = String(data);
		else if (data.toToolTip) text = data.toToolTip();
		else text = `[${data.constructor.name}]`;
		if (text == null) return;
		text = text.substring(0, 30);
		ctx.font = "14px Courier New";
		const w = cachedMeasureText(ctx, text) + 20;
		const h = 24;
		ctx.shadowColor = "black";
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.fillStyle = "#454";
		ctx.beginPath();
		ctx.roundRect(pos[0] - w * .5, pos[1] - 15 - h, w, h, [3]);
		ctx.moveTo(pos[0] - 10, pos[1] - 15);
		ctx.lineTo(pos[0] + 10, pos[1] - 15);
		ctx.lineTo(pos[0], pos[1] - 5);
		ctx.fill();
		ctx.shadowColor = "transparent";
		ctx.textAlign = "center";
		ctx.fillStyle = "#CEC";
		ctx.fillText(text, pos[0], pos[1] - 15 - h * .3);
	}
	/**
	* Draws the shape of the given node on the canvas
	* @param node The node to draw
	* @param ctx 2D canvas rendering context used to draw
	* @param size Size of the background to draw, in graph units.  Differs from node size if collapsed, etc.
	* @param fgcolor Foreground colour - used for text
	* @param bgcolor Background colour of the node
	* @param _selected Whether to render the node as selected.  Likely to be removed in future, as current usage is simply the selected property of the node.
	*/
	drawNodeShape(node, ctx, size, fgcolor, bgcolor, _selected) {
		ctx.strokeStyle = fgcolor;
		ctx.fillStyle = bgcolor;
		const title_height = LiteGraph.NODE_TITLE_HEIGHT;
		const { low_quality } = this;
		const { collapsed } = node.flags;
		const shape = node.renderingShape;
		const { title_mode } = node;
		const render_title = title_mode == TitleMode.TRANSPARENT_TITLE || title_mode == TitleMode.NO_TITLE ? false : true;
		const area = tmp_area;
		area.set(node.boundingRect);
		area[0] -= node.pos[0];
		area[1] -= node.pos[1];
		const old_alpha = ctx.globalAlpha;
		ctx.beginPath();
		if (shape == RenderShape.BOX || low_quality) ctx.rect(area[0], area[1], area[2], area[3]);
		else if (shape == RenderShape.ROUND || shape == RenderShape.CARD) ctx.roundRect(area[0], area[1], area[2], area[3], shape == RenderShape.CARD ? [
			LiteGraph.ROUND_RADIUS,
			LiteGraph.ROUND_RADIUS,
			0,
			0
		] : [LiteGraph.ROUND_RADIUS]);
		else if (shape == RenderShape.CIRCLE) ctx.arc(size[0] * .5, size[1] * .5, size[0] * .5, 0, Math.PI * 2);
		ctx.fill();
		if (!collapsed && render_title) {
			ctx.shadowColor = "transparent";
			ctx.fillStyle = "rgba(0,0,0,0.2)";
			ctx.fillRect(0, -1, area[2], 2);
		}
		ctx.shadowColor = "transparent";
		node.onDrawBackground?.(ctx);
		if (render_title || title_mode == TitleMode.TRANSPARENT_TITLE) {
			node.drawTitleBarBackground(ctx, {
				scale: this.ds.scale,
				low_quality
			});
			node.drawTitleBox(ctx, {
				scale: this.ds.scale,
				low_quality,
				box_size: 10
			});
			ctx.globalAlpha = old_alpha;
			node.drawTitleText(ctx, {
				scale: this.ds.scale,
				default_title_color: this.node_title_color,
				low_quality
			});
			node.onDrawTitle?.(ctx);
		}
		for (const getStyle of Object.values(node.strokeStyles)) {
			const strokeStyle = getStyle.call(node);
			if (strokeStyle) strokeShape(ctx, area, {
				shape,
				title_height,
				title_mode,
				collapsed,
				...strokeStyle
			});
		}
		node.drawProgressBar(ctx);
		if (node.execute_triggered != null && node.execute_triggered > 0) node.execute_triggered--;
		if (node.action_triggered != null && node.action_triggered > 0) node.action_triggered--;
	}
	/**
	* Draws a snap guide for a {@link Positionable} item.
	*
	* Initial design was a simple white rectangle representing the location the
	* item would land if dropped.
	* @param ctx The 2D canvas context to draw on
	* @param item The item to draw a snap guide for
	* @param shape The shape of the snap guide to draw
	* @todo Update to align snapping with boundingRect
	* @todo Shapes
	*/
	drawSnapGuide(ctx, item, shape = RenderShape.ROUND, { offsetToSlot } = {}) {
		const snapGuide = temp;
		snapGuide.set(item.boundingRect);
		const { pos } = item;
		const offsetX = pos[0] - snapGuide[0];
		const offsetY = pos[1] - snapGuide[1] - (offsetToSlot ? LiteGraph.NODE_SLOT_HEIGHT * .7 : 0);
		snapGuide[0] += offsetX;
		snapGuide[1] += offsetY;
		if (this._snapToGrid) snapPoint(snapGuide, this._snapToGrid);
		snapGuide[0] -= offsetX;
		snapGuide[1] -= offsetY;
		const { globalAlpha } = ctx;
		ctx.globalAlpha = 1;
		ctx.beginPath();
		const [x, y, w, h] = snapGuide;
		if (shape === RenderShape.CIRCLE) {
			const midX = x + w * .5;
			const midY = y + h * .5;
			const radius = Math.min(w * .5, h * .5);
			ctx.arc(midX, midY, radius, 0, Math.PI * 2);
		} else ctx.rect(x, y, w, h);
		ctx.lineWidth = .5;
		ctx.strokeStyle = "#FFFFFF66";
		ctx.fillStyle = "#FFFFFF22";
		ctx.fill();
		ctx.stroke();
		ctx.globalAlpha = globalAlpha;
	}
	drawConnections(ctx) {
		this.renderedPaths.clear();
		if (this.links_render_mode === LinkRenderType.HIDDEN_LINK) return;
		if (LiteGraph.vueNodesMode && layoutStore.pendingSlotSync) {
			this._visibleReroutes.clear();
			return;
		}
		const { graph, subgraph } = this;
		if (!graph) throw new NullGraphError();
		const visibleReroutes = [];
		const now = LiteGraph.getTime();
		const { visible_area } = this;
		margin_area[0] = visible_area[0] - 20;
		margin_area[1] = visible_area[1] - 20;
		margin_area[2] = visible_area[2] + 40;
		margin_area[3] = visible_area[3] + 40;
		ctx.lineWidth = this.connections_width;
		ctx.fillStyle = "#AAA";
		ctx.strokeStyle = "#AAA";
		ctx.globalAlpha = this.editor_alpha;
		const nodes = graph._nodes;
		for (const node of nodes) {
			if (node.flags.collapsed || !node._widgetSlotsDirty) continue;
			node._setConcreteSlots();
			node.arrange();
		}
		for (const node of nodes) {
			const { inputs } = node;
			if (!inputs?.length) continue;
			for (const [i, input] of inputs.entries()) {
				if (!input || input.link == null) continue;
				const link_id = input.link;
				const link = graph._links.get(link_id);
				if (!link) continue;
				const endPos = LiteGraph.vueNodesMode ? getSlotPosition(node, i, true) : node.getInputPos(i);
				const start_node = graph.getNodeById(link.origin_id);
				if (start_node == null) continue;
				const outputId = link.origin_slot;
				const startPos = outputId === -1 ? [start_node.pos[0] + 10, start_node.pos[1] + 10] : LiteGraph.vueNodesMode ? getSlotPosition(start_node, outputId, false) : start_node.getOutputPos(outputId);
				const output = start_node.outputs[outputId];
				if (!output) continue;
				this._renderAllLinkSegments(ctx, link, startPos, endPos, visibleReroutes, now, output.dir, input.dir);
			}
		}
		if (subgraph) {
			for (const output of subgraph.inputNode.slots) {
				if (!output.linkIds.length) continue;
				for (const linkId of output.linkIds) {
					const resolved = LLink.resolve(linkId, graph);
					if (!resolved) continue;
					const { link, inputNode, input } = resolved;
					if (!inputNode || !input) continue;
					const endPos = LiteGraph.vueNodesMode ? getSlotPosition(inputNode, link.target_slot, true) : inputNode.getInputPos(link.target_slot);
					this._renderAllLinkSegments(ctx, link, output.pos, endPos, visibleReroutes, now, input.dir, input.dir);
				}
			}
			for (const input of subgraph.outputNode.slots) {
				if (!input.linkIds.length) continue;
				const resolved = LLink.resolve(input.linkIds[0], graph);
				if (!resolved) continue;
				const { link, outputNode, output } = resolved;
				if (!outputNode || !output) continue;
				const startPos = LiteGraph.vueNodesMode ? getSlotPosition(outputNode, link.origin_slot, false) : outputNode.getOutputPos(link.origin_slot);
				this._renderAllLinkSegments(ctx, link, startPos, input.pos, visibleReroutes, now, output.dir, input.dir);
			}
		}
		if (graph.floatingLinks.size > 0) this._renderFloatingLinks(ctx, graph, visibleReroutes, now);
		const rerouteSet = this._visibleReroutes;
		rerouteSet.clear();
		visibleReroutes.sort((a, b) => a.linkIds.size - b.linkIds.size);
		for (const reroute of visibleReroutes) {
			rerouteSet.add(reroute);
			if (this._snapToGrid && this.isDragging && this.selectedItems.has(reroute)) this.drawSnapGuide(ctx, reroute, RenderShape.CIRCLE, { offsetToSlot: true });
			reroute.draw(ctx, this._pattern);
			if (!this.pointer.isDown) reroute.drawSlots(ctx);
		}
		const highlightPos = this._getHighlightPosition();
		this.linkConnector.renderLinks.filter((rl) => rl instanceof MovingInputLink).forEach((rl) => rl.drawConnectionCircle(ctx, highlightPos));
		ctx.globalAlpha = 1;
	}
	getNodeModeAlpha(node) {
		if (node.flags.ghost) return .3;
		return node.mode === LGraphEventMode.BYPASS ? .2 : node.mode === LGraphEventMode.NEVER ? .4 : this.editor_alpha;
	}
	_renderFloatingLinks(ctx, graph, visibleReroutes, now) {
		const { globalAlpha } = ctx;
		ctx.globalAlpha = globalAlpha * .33;
		for (const link of graph.floatingLinks.values()) {
			const reroutes = LLink.getReroutes(graph, link);
			const firstReroute = reroutes[0];
			const reroute = reroutes.at(-1);
			if (!firstReroute || !reroute?.floating) continue;
			if (reroute.floating.slotType === "input") {
				const node = graph.getNodeById(link.target_id);
				if (!node) continue;
				const startPos = firstReroute.pos;
				const endPos = LiteGraph.vueNodesMode ? getSlotPosition(node, link.target_slot, true) : node.getInputPos(link.target_slot);
				const endDirection = node.inputs[link.target_slot]?.dir;
				firstReroute._dragging = true;
				this._renderAllLinkSegments(ctx, link, startPos, endPos, visibleReroutes, now, LinkDirection.CENTER, endDirection, true);
			} else {
				const node = graph.getNodeById(link.origin_id);
				if (!node) continue;
				const startPos = LiteGraph.vueNodesMode ? getSlotPosition(node, link.origin_slot, false) : node.getOutputPos(link.origin_slot);
				const endPos = reroute.pos;
				const startDirection = node.outputs[link.origin_slot]?.dir;
				link._dragging = true;
				this._renderAllLinkSegments(ctx, link, startPos, endPos, visibleReroutes, now, startDirection, LinkDirection.CENTER, true);
			}
		}
		ctx.globalAlpha = globalAlpha;
	}
	_renderAllLinkSegments(ctx, link, startPos, endPos, visibleReroutes, now, startDirection, endDirection, disabled = false) {
		const { graph, renderedPaths } = this;
		if (!graph) return;
		const reroutes = LLink.getReroutes(graph, link);
		const points = [
			startPos,
			...reroutes.map((x) => x.pos),
			endPos
		];
		const pointsX = points.map((x) => x[0]);
		const pointsY = points.map((x) => x[1]);
		link_bounding[0] = Math.min(...pointsX);
		link_bounding[1] = Math.min(...pointsY);
		link_bounding[2] = Math.max(...pointsX) - link_bounding[0];
		link_bounding[3] = Math.max(...pointsY) - link_bounding[1];
		if (!overlapBounding(link_bounding, margin_area)) return;
		const start_dir = startDirection || LinkDirection.RIGHT;
		const end_dir = endDirection || LinkDirection.LEFT;
		if (reroutes.length) {
			let startControl;
			const l = reroutes.length;
			for (let j = 0; j < l; j++) {
				const reroute = reroutes[j];
				if (!renderedPaths.has(reroute)) {
					renderedPaths.add(reroute);
					visibleReroutes.push(reroute);
					reroute._colour = link.color || LGraphCanvas.link_type_colors[link.type] || this.default_link_color;
					const rerouteStartPos = graph.getReroute(reroute.parentId)?.pos ?? startPos;
					reroute.calculateAngle(this.last_draw_time, graph, rerouteStartPos);
					if (!reroute._dragging) this.renderLink(ctx, rerouteStartPos, reroute.pos, link, false, 0, null, startControl === void 0 ? start_dir : LinkDirection.CENTER, LinkDirection.CENTER, {
						startControl,
						endControl: reroute.controlPoint,
						reroute,
						disabled
					});
				}
				if (!startControl && reroutes.at(-1)?.floating?.slotType === "input") startControl = [0, 0];
				else {
					const nextPos = reroutes[j + 1]?.pos ?? endPos;
					const dist = Math.min(Reroute.maxSplineOffset, distance(reroute.pos, nextPos) * .25);
					startControl = [dist * reroute.cos, dist * reroute.sin];
				}
			}
			if (link._dragging) return;
			const segmentStartPos = points.at(-2) ?? startPos;
			this.renderLink(ctx, segmentStartPos, endPos, link, false, 0, null, LinkDirection.CENTER, end_dir, {
				startControl,
				disabled
			});
		} else if (!link._dragging) this.renderLink(ctx, startPos, endPos, link, false, 0, null, start_dir, end_dir);
		renderedPaths.add(link);
		if (link?._last_time && now - link._last_time < 1e3) {
			const f = 2 - (now - link._last_time) * .002;
			const tmp = ctx.globalAlpha;
			ctx.globalAlpha = tmp * f;
			this.renderLink(ctx, startPos, endPos, link, true, f, "white", start_dir, end_dir);
			ctx.globalAlpha = tmp;
		}
	}
	/**
	* Build LinkRenderContext from canvas properties
	* Helper method for using LitegraphLinkAdapter
	*/
	buildLinkRenderContext() {
		return {
			renderMode: this.links_render_mode,
			connectionWidth: this.connections_width,
			renderBorder: this.render_connections_border,
			lowQuality: this.low_quality,
			highQualityRender: this.highquality_render,
			scale: this.ds.scale,
			linkMarkerShape: this.linkMarkerShape,
			renderConnectionArrows: this.render_connection_arrows,
			highlightedLinks: new Set(Object.keys(this.highlighted_links)),
			defaultLinkColor: this.default_link_color,
			linkTypeColors: LGraphCanvas.link_type_colors,
			disabledPattern: this._pattern
		};
	}
	/**
	* draws a link between two points
	* @param ctx Canvas 2D rendering context
	* @param a start pos
	* @param b end pos
	* @param link the link object with all the link info
	* @param skip_border ignore the shadow of the link
	* @param flow show flow animation (for events)
	* @param color the color for the link
	* @param start_dir the direction enum
	* @param end_dir the direction enum
	*/
	renderLink(ctx, a, b, link, skip_border, flow, color, start_dir, end_dir, { startControl, endControl, reroute, num_sublines = 1, disabled = false } = {}) {
		if (this.linkRenderer) {
			const context = this.buildLinkRenderContext();
			this.linkRenderer.renderLinkDirect(ctx, a, b, link, skip_border, flow, color, start_dir, end_dir, context, {
				reroute,
				startControl,
				endControl,
				num_sublines,
				disabled
			});
		}
	}
	drawExecutionOrder(ctx) {
		ctx.shadowColor = "transparent";
		ctx.globalAlpha = .25;
		ctx.textAlign = "center";
		ctx.strokeStyle = "white";
		ctx.globalAlpha = .75;
		const { visible_nodes } = this;
		for (const node of visible_nodes) {
			ctx.fillStyle = "black";
			ctx.fillRect(node.pos[0] - LiteGraph.NODE_TITLE_HEIGHT, node.pos[1] - LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT);
			if (node.order == 0) ctx.strokeRect(node.pos[0] - LiteGraph.NODE_TITLE_HEIGHT + .5, node.pos[1] - LiteGraph.NODE_TITLE_HEIGHT + .5, LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT);
			ctx.fillStyle = "#FFF";
			ctx.fillText(toString(node.order), node.pos[0] + LiteGraph.NODE_TITLE_HEIGHT * -.5, node.pos[1] - 6);
		}
		ctx.globalAlpha = 1;
	}
	/**
	* draws the widgets stored inside a node
	* @deprecated Use {@link LGraphNode.drawWidgets} instead.
	* @remarks Currently there are extensions hijacking this function, so we cannot remove it.
	*/
	drawNodeWidgets(node, _posY, ctx) {
		node.drawWidgets(ctx, {
			lowQuality: this.low_quality,
			editorAlpha: this.getNodeModeAlpha(node)
		});
	}
	/**
	* draws every group area in the background
	*/
	drawGroups(_canvas, ctx) {
		if (!this.graph) return;
		const groups = this.graph._groups;
		ctx.save();
		ctx.globalAlpha = .5 * this.editor_alpha;
		const drawSnapGuides = this._snapToGrid && (this.isDragging || layoutStore.isDraggingVueNodes.value);
		for (const group of groups) {
			if (!overlapBounding(this.visible_area, group._bounding)) continue;
			if (drawSnapGuides && this.selectedItems.has(group)) this.drawSnapGuide(ctx, group);
			group.draw(this, ctx);
		}
		ctx.restore();
	}
	/**
	* resizes the canvas to a given size, if no size is passed, then it tries to fill the parentNode
	* @todo Remove or rewrite
	*/
	resize(width, height) {
		if (!width && !height) {
			const parent = this.canvas.parentElement;
			if (!parent) throw new TypeError("Attempted to resize canvas, but parent element was null.");
			width = parent.offsetWidth;
			height = parent.offsetHeight;
		}
		if (this.canvas.width == width && this.canvas.height == height) return;
		this.canvas.width = width ?? 0;
		this.canvas.height = height ?? 0;
		this.bgcanvas.width = this.canvas.width;
		this.bgcanvas.height = this.canvas.height;
		this.setDirty(true, true);
	}
	onNodeSelectionChange() {}
	/**
	* Determines the furthest nodes in each direction for the currently selected nodes
	*/
	boundaryNodesForSelection() {
		return LGraphCanvas.getBoundaryNodes(this.selected_nodes);
	}
	showLinkMenu(segment, e) {
		const { graph } = this;
		if (!graph) throw new NullGraphError();
		const title = "data" in segment && segment.data != null ? segment.data.constructor.name : void 0;
		const { origin_id, origin_slot } = segment;
		if (origin_id == null || origin_slot == null) {
			new LiteGraph.ContextMenu(["Link has no origin"], {
				event: e,
				title
			});
			return false;
		}
		const node_left = graph.getNodeById(origin_id);
		const fromType = node_left?.outputs?.[origin_slot]?.type;
		const menu = new LiteGraph.ContextMenu([
			"Add Node",
			"Add Reroute",
			null,
			"Delete",
			null
		], {
			event: e,
			title,
			callback: inner_clicked.bind(this)
		});
		return false;
		function inner_clicked(v, _options, e) {
			if (!graph) throw new NullGraphError();
			switch (v) {
				case "Add Node":
					LGraphCanvas.onMenuAdd(null, null, e, menu, (node) => {
						if (!node?.inputs?.length || !node?.outputs?.length || origin_slot == null) return;
						const options = { afterRerouteId: segment.parentId };
						if (node_left?.connectByType(origin_slot, node, fromType ?? "*", options)) node.setPos(node.pos[0] - node.size[0] * .5, node.pos[1]);
					});
					break;
				case "Add Reroute":
					try {
						this.emitBeforeChange();
						this.adjustMouseEvent(e);
						graph.createReroute(segment._pos, segment);
						this.setDirty(false, true);
					} catch (error) {
						console.error(error);
					} finally {
						this.emitAfterChange();
					}
					break;
				case "Delete": {
					const linkId = segment instanceof Reroute ? segment.linkIds.values().next().value : segment.id;
					if (linkId !== void 0) {
						graph.removeLink(linkId);
						layoutStore.deleteLinkLayout(linkId);
					}
					break;
				}
				default:
			}
		}
	}
	createDefaultNodeForSlot(optPass) {
		const opts = Object.assign({
			nodeFrom: null,
			slotFrom: null,
			nodeTo: null,
			slotTo: null,
			position: [0, 0],
			nodeType: void 0,
			posAdd: [0, 0],
			posSizeFix: [0, 0]
		}, optPass);
		const { afterRerouteId } = opts;
		const isFrom = opts.nodeFrom && opts.slotFrom !== null;
		const isTo = !isFrom && opts.nodeTo && opts.slotTo !== null;
		if (!isFrom && !isTo) {
			console.warn(`No data passed to createDefaultNodeForSlot`, opts.nodeFrom, opts.slotFrom, opts.nodeTo, opts.slotTo);
			return false;
		}
		if (!opts.nodeType) {
			console.warn("No type to createDefaultNodeForSlot");
			return false;
		}
		const nodeX = isFrom ? opts.nodeFrom : opts.nodeTo;
		if (!nodeX) throw new TypeError("nodeX was null when creating default node for slot.");
		let slotX = isFrom ? opts.slotFrom : opts.slotTo;
		let iSlotConn = false;
		if (nodeX instanceof SubgraphIONodeBase) {
			if (typeof slotX !== "object" || !slotX) {
				console.warn("Cant get slot information", slotX);
				return false;
			}
			const { name } = slotX;
			iSlotConn = nodeX.slots.findIndex((s) => s.name === name);
			slotX = nodeX.slots[iSlotConn];
			if (!slotX) {
				console.warn("Cant get slot information", slotX);
				return false;
			}
		} else switch (typeof slotX) {
			case "string":
				iSlotConn = isFrom ? nodeX.findOutputSlot(slotX, false) : nodeX.findInputSlot(slotX, false);
				slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
				break;
			case "object":
				if (slotX === null) {
					console.warn("Cant get slot information", slotX);
					return false;
				}
				iSlotConn = isFrom ? nodeX.findOutputSlot(slotX.name) : nodeX.findInputSlot(slotX.name);
				break;
			case "number":
				iSlotConn = slotX;
				slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
				break;
			default:
				console.warn("Cant get slot information", slotX);
				return false;
		}
		const fromSlotType = slotX.type == LiteGraph.EVENT ? "_event_" : slotX.type;
		const slotTypesDefault = isFrom ? LiteGraph.slot_types_default_out : LiteGraph.slot_types_default_in;
		if (slotTypesDefault?.[fromSlotType]) {
			let nodeNewType = false;
			if (typeof slotTypesDefault[fromSlotType] == "object") {
				for (const typeX in slotTypesDefault[fromSlotType]) if (opts.nodeType == slotTypesDefault[fromSlotType][typeX] || opts.nodeType == "AUTO") {
					nodeNewType = slotTypesDefault[fromSlotType][typeX];
					break;
				}
			} else if (opts.nodeType == slotTypesDefault[fromSlotType] || opts.nodeType == "AUTO") nodeNewType = slotTypesDefault[fromSlotType];
			if (nodeNewType) {
				let nodeNewOpts;
				let nodeTypeStr;
				if (typeof nodeNewType == "object") {
					nodeNewOpts = nodeNewType;
					nodeTypeStr = nodeNewOpts.node ?? "";
				} else nodeTypeStr = nodeNewType;
				const xSizeFix = opts.posSizeFix[0] * LiteGraph.NODE_WIDTH;
				const ySizeFix = opts.posSizeFix[1] * LiteGraph.NODE_SLOT_HEIGHT;
				const pos = [opts.position[0] + opts.posAdd[0] + xSizeFix, opts.position[1] + opts.posAdd[1] + ySizeFix];
				const newNode = LiteGraph.createNode(nodeTypeStr, nodeNewOpts?.title, { pos });
				if (newNode) {
					if (nodeNewOpts) {
						if (nodeNewOpts.properties) for (const i in nodeNewOpts.properties) newNode.addProperty(i, nodeNewOpts.properties[i]);
						if (nodeNewOpts.inputs) {
							newNode.inputs = [];
							for (const input of nodeNewOpts.inputs) newNode.addInput(input[0], input[1]);
						}
						if (nodeNewOpts.outputs) {
							newNode.outputs = [];
							for (const output of nodeNewOpts.outputs) newNode.addOutput(output[0], output[1]);
						}
						if (nodeNewOpts.json) newNode.configure(nodeNewOpts.json);
					}
					if (!this.graph) throw new NullGraphError();
					this.graph.add(newNode);
					const detail = {
						node: newNode,
						opts
					};
					if (!this.canvas.dispatchEvent(new CustomEvent("connect-new-default-node", {
						detail,
						cancelable: true
					}))) return true;
					if (isFrom) {
						if (!opts.nodeFrom) throw new TypeError("createDefaultNodeForSlot - nodeFrom was null");
						opts.nodeFrom.connectByType(iSlotConn, newNode, fromSlotType, { afterRerouteId });
					} else {
						if (!opts.nodeTo) throw new TypeError("createDefaultNodeForSlot - nodeTo was null");
						opts.nodeTo.connectByTypeOutput(iSlotConn, newNode, fromSlotType, { afterRerouteId });
					}
					if (isFrom && isTo) {}
					return true;
				}
				console.error(`failed creating ${nodeNewType}`);
			}
		}
		return false;
	}
	showConnectionMenu(optPass) {
		const opts = Object.assign({
			nodeFrom: null,
			slotFrom: null,
			nodeTo: null,
			slotTo: null,
			e: void 0,
			allow_searchbox: this.allow_searchbox,
			showSearchBox: this.showSearchBox
		}, optPass || {});
		const dirty = () => this._dirty();
		const that = this;
		const { graph } = this;
		const { afterRerouteId } = opts;
		const isFrom = opts.nodeFrom && opts.slotFrom;
		const isTo = !isFrom && opts.nodeTo && opts.slotTo;
		if (!isFrom && !isTo) {
			console.warn("No data passed to showConnectionMenu");
			return;
		}
		const nodeX = isFrom ? opts.nodeFrom : opts.nodeTo;
		if (!nodeX) throw new TypeError("nodeX was null when creating default node for slot.");
		let slotX = isFrom ? opts.slotFrom : opts.slotTo;
		let iSlotConn;
		if (nodeX instanceof SubgraphIONodeBase) {
			if (typeof slotX !== "object" || !slotX) {
				console.warn("Cant get slot information", slotX);
				return;
			}
			const { name } = slotX;
			iSlotConn = nodeX.slots.findIndex((s) => s.name === name);
			if (iSlotConn !== -1) slotX = nodeX.slots[iSlotConn];
			if (!slotX) {
				console.warn("Cant get slot information", slotX);
				return;
			}
		} else switch (typeof slotX) {
			case "string":
				iSlotConn = isFrom ? nodeX.findOutputSlot(slotX, false) : nodeX.findInputSlot(slotX, false);
				slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
				break;
			case "object":
				if (slotX === null) {
					console.warn("Cant get slot information", slotX);
					return;
				}
				iSlotConn = isFrom ? nodeX.findOutputSlot(slotX.name) : nodeX.findInputSlot(slotX.name);
				break;
			case "number":
				iSlotConn = slotX;
				slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
				break;
			default:
				console.warn("Cant get slot information", slotX);
				return;
		}
		const options = [
			"Add Node",
			"Add Reroute",
			null
		];
		if (opts.allow_searchbox) options.push("Search", null);
		const fromSlotType = slotX.type == LiteGraph.EVENT ? "_event_" : slotX.type;
		const slotTypesDefault = isFrom ? LiteGraph.slot_types_default_out : LiteGraph.slot_types_default_in;
		if (slotTypesDefault?.[fromSlotType]) if (typeof slotTypesDefault[fromSlotType] == "object") for (const typeX in slotTypesDefault[fromSlotType]) options.push(slotTypesDefault[fromSlotType][typeX]);
		else options.push(slotTypesDefault[fromSlotType]);
		const menu = new LiteGraph.ContextMenu(options, {
			event: opts.e,
			extra: slotX,
			title: (slotX && slotX.name != "" ? slotX.name + (fromSlotType ? " | " : "") : "") + (slotX && fromSlotType ? fromSlotType : ""),
			callback: inner_clicked
		});
		return menu;
		function inner_clicked(v, options, e) {
			switch (v) {
				case "Add Node":
					LGraphCanvas.onMenuAdd(null, null, e, menu, function(node) {
						if (!node) return;
						if (isFrom) {
							if (!opts.nodeFrom) throw new TypeError("Cannot add node to SubgraphInputNode: nodeFrom was null");
							if (!opts.nodeFrom.connectByType(iSlotConn, node, fromSlotType, { afterRerouteId })) console.warn("Failed to make new connection.");
						} else {
							if (!opts.nodeTo) throw new TypeError("Cannot add node to SubgraphInputNode: nodeTo was null");
							opts.nodeTo.connectByTypeOutput(iSlotConn, node, fromSlotType, { afterRerouteId });
						}
					});
					break;
				case "Add Reroute": {
					const node = isFrom ? opts.nodeFrom : opts.nodeTo;
					const slot = options.extra;
					if (!graph) throw new NullGraphError();
					if (!node) throw new TypeError("Cannot add reroute: node was null");
					if (!slot) throw new TypeError("Cannot add reroute: slot was null");
					if (!opts.e) throw new TypeError("Cannot add reroute: CanvasPointerEvent was null");
					if (node instanceof SubgraphIONodeBase) throw new TypeError("Cannot add floating reroute to Subgraph IO Nodes");
					else if (!node.connectFloatingReroute([opts.e.canvasX, opts.e.canvasY], slot, afterRerouteId)) throw new Error("Failed to create reroute");
					dirty();
					break;
				}
				case "Search":
					if (isFrom) opts.showSearchBox(e, {
						node_from: opts.nodeFrom,
						slot_from: slotX,
						type_filter_in: fromSlotType
					});
					else opts.showSearchBox(e, {
						node_to: opts.nodeTo,
						slot_from: slotX,
						type_filter_out: fromSlotType
					});
					break;
				default: {
					const customProps = {
						position: [opts.e?.canvasX ?? 0, opts.e?.canvasY ?? 0],
						nodeType: v,
						afterRerouteId
					};
					const options = Object.assign(opts, customProps);
					if (!that.createDefaultNodeForSlot(options)) break;
				}
			}
		}
	}
	prompt(title, value, callback, event, multiline) {
		const that = this;
		title = title || "";
		const customProperties = {
			is_modified: false,
			className: "graphdialog rounded",
			innerHTML: multiline ? "<span class='name'></span> <textarea autofocus class='value'></textarea><button class='rounded'>OK</button>" : "<span class='name'></span> <input autofocus type='text' class='value'/><button class='rounded'>OK</button>",
			close() {
				that.prompt_box = null;
				if (dialog.parentNode) dialog.remove();
			}
		};
		const div = document.createElement("div");
		const dialog = Object.assign(div, customProperties);
		const { canvas } = LGraphCanvas.active_canvas;
		if (!canvas.parentNode) throw new TypeError("canvas element parentNode was null when opening a prompt.");
		canvas.parentNode.append(dialog);
		if (this.ds.scale > 1) dialog.style.transform = `scale(${this.ds.scale})`;
		let dialogCloseTimer;
		let prevent_timeout = 0;
		LiteGraph.pointerListenerAdd(dialog, "leave", function() {
			if (prevent_timeout) return;
			if (LiteGraph.dialog_close_on_mouse_leave) {
				if (!dialog.is_modified && LiteGraph.dialog_close_on_mouse_leave) dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay);
			}
		});
		LiteGraph.pointerListenerAdd(dialog, "enter", function() {
			if (LiteGraph.dialog_close_on_mouse_leave && dialogCloseTimer) clearTimeout(dialogCloseTimer);
		});
		const selInDia = dialog.querySelectorAll("select");
		if (selInDia) for (const selIn of selInDia) {
			selIn.addEventListener("click", function() {
				prevent_timeout++;
			});
			selIn.addEventListener("blur", function() {
				prevent_timeout = 0;
			});
			selIn.addEventListener("change", function() {
				prevent_timeout = -1;
			});
		}
		this.prompt_box?.close();
		this.prompt_box = dialog;
		const name_element = dialog.querySelector(".name");
		if (!name_element) throw new TypeError("name_element was null");
		name_element.textContent = title;
		const value_element = dialog.querySelector(".value");
		if (!value_element) throw new TypeError("value_element was null");
		value_element.value = String(value);
		value_element.select();
		const input = value_element;
		input.addEventListener("keydown", function(e) {
			dialog.is_modified = true;
			if (e.key == "Escape") dialog.close();
			else if (e.key == "Enter" && e.target.localName != "textarea") {
				if (callback) callback(this.value);
				dialog.close();
			} else return;
			e.preventDefault();
			e.stopPropagation();
		});
		const button = dialog.querySelector("button");
		if (!button) throw new TypeError("button was null when opening prompt");
		button.addEventListener("click", function() {
			callback?.(input.value);
			that.setDirty(true);
			dialog.close();
		});
		const rect = canvas.getBoundingClientRect();
		let offsetx = -20;
		let offsety = -20;
		if (rect) {
			offsetx -= rect.left;
			offsety -= rect.top;
		}
		if (event) {
			dialog.style.left = `${event.clientX + offsetx}px`;
			dialog.style.top = `${event.clientY + offsety}px`;
		} else {
			dialog.style.left = `${canvas.width * .5 + offsetx}px`;
			dialog.style.top = `${canvas.height * .5 + offsety}px`;
		}
		setTimeout(function() {
			input.focus();
			const clickTime = Date.now();
			function handleOutsideClick(e) {
				if (e.target === canvas && Date.now() - clickTime > 256) {
					dialog.close();
					canvas.parentElement?.removeEventListener("click", handleOutsideClick);
					canvas.parentElement?.removeEventListener("touchend", handleOutsideClick);
				}
			}
			canvas.parentElement?.addEventListener("click", handleOutsideClick);
			canvas.parentElement?.addEventListener("touchend", handleOutsideClick);
		}, 10);
		return dialog;
	}
	showSearchBox(event, searchOptions) {
		const options = {
			slot_from: null,
			node_from: null,
			node_to: null,
			do_type_filter: LiteGraph.search_filter_enabled,
			type_filter_in: false,
			type_filter_out: false,
			show_general_if_none_on_typefilter: true,
			show_general_after_typefiltered: true,
			hide_on_mouse_leave: LiteGraph.search_hide_on_mouse_leave,
			show_all_if_empty: true,
			show_all_on_open: LiteGraph.search_show_all_on_open
		};
		Object.assign(options, searchOptions);
		const that = this;
		const graphcanvas = LGraphCanvas.active_canvas;
		const { canvas } = graphcanvas;
		const root_document = canvas.ownerDocument || document;
		const div = document.createElement("div");
		const dialog = Object.assign(div, { close() {
			that.search_box = void 0;
			this.blur();
			canvas.focus();
			root_document.body.style.overflow = "";
			setTimeout(() => canvas.focus(), 20);
			dialog.remove();
		} });
		dialog.className = "litegraph litesearchbox graphdialog rounded";
		dialog.innerHTML = "<span class='name'>Search</span> <input autofocus type='text' class='value rounded'/>";
		if (options.do_type_filter) {
			dialog.innerHTML += "<select class='slot_in_type_filter'><option value=''></option></select>";
			dialog.innerHTML += "<select class='slot_out_type_filter'><option value=''></option></select>";
		}
		const helper = document.createElement("div");
		helper.className = "helper";
		dialog.append(helper);
		if (root_document.fullscreenElement) root_document.fullscreenElement.append(dialog);
		else {
			root_document.body.append(dialog);
			root_document.body.style.overflow = "hidden";
		}
		let selIn;
		let selOut;
		if (options.do_type_filter) {
			selIn = dialog.querySelector(".slot_in_type_filter");
			selOut = dialog.querySelector(".slot_out_type_filter");
		}
		if (this.ds.scale > 1) dialog.style.transform = `scale(${this.ds.scale})`;
		if (options.hide_on_mouse_leave) {
			let prevent_timeout = 0;
			let timeout_close = null;
			LiteGraph.pointerListenerAdd(dialog, "enter", function() {
				if (timeout_close) {
					clearTimeout(timeout_close);
					timeout_close = null;
				}
			});
			dialog.addEventListener("pointerleave", function() {
				if (prevent_timeout) return;
				const hideDelay = options.hide_on_mouse_leave;
				const delay = typeof hideDelay === "number" ? hideDelay : 500;
				timeout_close = setTimeout(dialog.close, delay);
			});
			if (options.do_type_filter) {
				if (!selIn) throw new TypeError("selIn was null when showing search box");
				if (!selOut) throw new TypeError("selOut was null when showing search box");
				selIn.addEventListener("click", function() {
					prevent_timeout++;
				});
				selIn.addEventListener("blur", function() {
					prevent_timeout = 0;
				});
				selIn.addEventListener("change", function() {
					prevent_timeout = -1;
				});
				selOut.addEventListener("click", function() {
					prevent_timeout++;
				});
				selOut.addEventListener("blur", function() {
					prevent_timeout = 0;
				});
				selOut.addEventListener("change", function() {
					prevent_timeout = -1;
				});
			}
		}
		that.search_box?.close();
		that.search_box = dialog;
		let first = null;
		let timeout = null;
		let selected = null;
		const maybeInput = dialog.querySelector("input");
		if (!maybeInput) throw new TypeError("Could not create search input box.");
		const input = maybeInput;
		if (input) {
			input.addEventListener("blur", function() {
				this.focus();
			});
			input.addEventListener("keydown", function(e) {
				if (e.key == "ArrowUp") changeSelection(false);
				else if (e.key == "ArrowDown") changeSelection(true);
				else if (e.key == "Escape") dialog.close();
				else if (e.key == "Enter") if (selected instanceof HTMLElement) select(unescape(String(selected.dataset["type"])));
				else if (first) select(first);
				else dialog.close();
				else {
					if (timeout) clearInterval(timeout);
					timeout = setTimeout(refreshHelper, 10);
					return;
				}
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				return true;
			});
		}
		if (options.do_type_filter) {
			if (selIn) {
				const aSlots = LiteGraph.slot_types_in;
				const nSlots = aSlots.length;
				if (options.type_filter_in == LiteGraph.EVENT || options.type_filter_in == LiteGraph.ACTION) options.type_filter_in = "_event_";
				for (let iK = 0; iK < nSlots; iK++) {
					const opt = document.createElement("option");
					opt.value = aSlots[iK];
					opt.innerHTML = aSlots[iK];
					selIn.append(opt);
					if (options.type_filter_in !== false && String(options.type_filter_in).toLowerCase() == String(aSlots[iK]).toLowerCase()) opt.selected = true;
				}
				selIn.addEventListener("change", function() {
					refreshHelper();
				});
			}
			if (selOut) {
				const aSlots = LiteGraph.slot_types_out;
				if (options.type_filter_out == LiteGraph.EVENT || options.type_filter_out == LiteGraph.ACTION) options.type_filter_out = "_event_";
				for (const aSlot of aSlots) {
					const opt = document.createElement("option");
					opt.value = aSlot;
					opt.innerHTML = aSlot;
					selOut.append(opt);
					if (options.type_filter_out !== false && String(options.type_filter_out).toLowerCase() == String(aSlot).toLowerCase()) opt.selected = true;
				}
				selOut.addEventListener("change", function() {
					refreshHelper();
				});
			}
		}
		const rect = canvas.getBoundingClientRect();
		const safeEvent = event ?? new MouseEvent("click", {
			clientX: rect.left + rect.width * .5,
			clientY: rect.top + rect.height * .5,
			layerY: rect.top + rect.height * .5
		});
		const left = safeEvent.clientX - 80;
		const top = safeEvent.clientY - 20;
		dialog.style.left = `${left}px`;
		dialog.style.top = `${top}px`;
		if (safeEvent.layerY > rect.height - 200) helper.style.maxHeight = `${rect.height - safeEvent.layerY - 20}px`;
		requestAnimationFrame(function() {
			input.focus();
		});
		if (options.show_all_on_open) refreshHelper();
		function select(name) {
			if (name) if (that.onSearchBoxSelection) that.onSearchBoxSelection(name, safeEvent, graphcanvas);
			else {
				if (!graphcanvas.graph) throw new NullGraphError();
				graphcanvas.graph.beforeChange();
				const node = LiteGraph.createNode(name);
				if (node) {
					node.pos = graphcanvas.convertEventToCanvasOffset(safeEvent);
					graphcanvas.graph.add(node, false);
				}
				if (options.node_from) {
					let iS = false;
					switch (typeof options.slot_from) {
						case "string":
							iS = options.node_from.findOutputSlot(options.slot_from);
							break;
						case "object":
							if (options.slot_from == null) throw new TypeError("options.slot_from was null when showing search box");
							iS = options.slot_from.name ? options.node_from.findOutputSlot(options.slot_from.name) : -1;
							if (iS == -1 && options.slot_from.slot_index !== void 0) iS = options.slot_from.slot_index;
							break;
						case "number":
							iS = options.slot_from;
							break;
						default: iS = 0;
					}
					if (iS !== false && options.node_from.outputs[iS] !== void 0) {
						if (iS > -1) {
							if (node == null) throw new TypeError("options.slot_from was null when showing search box");
							options.node_from.connectByType(iS, node, options.node_from.outputs[iS].type);
						}
					}
				}
				if (options.node_to) {
					let iS = false;
					switch (typeof options.slot_from) {
						case "string":
							iS = options.node_to.findInputSlot(options.slot_from);
							break;
						case "object":
							if (options.slot_from == null) throw new TypeError("options.slot_from was null when showing search box");
							iS = options.slot_from.name ? options.node_to.findInputSlot(options.slot_from.name) : -1;
							if (iS == -1 && options.slot_from.slot_index !== void 0) iS = options.slot_from.slot_index;
							break;
						case "number":
							iS = options.slot_from;
							break;
						default: iS = 0;
					}
					if (iS !== false && options.node_to.inputs[iS] !== void 0) {
						if (iS > -1) {
							if (node == null) throw new TypeError("options.slot_from was null when showing search box");
							options.node_to.connectByTypeOutput(iS, node, options.node_to.inputs[iS].type);
						}
					}
				}
				graphcanvas.graph.afterChange();
			}
			dialog.close();
		}
		function changeSelection(forward) {
			const prev = selected;
			if (!selected) selected = forward ? helper.childNodes[0] : helper.childNodes[helper.childNodes.length];
			else if (selected instanceof Element) {
				selected.classList.remove("selected");
				selected = forward ? selected.nextSibling : selected.previousSibling;
				selected ||= prev;
			}
			if (selected instanceof Element) {
				selected.classList.add("selected");
				selected.scrollIntoView({
					block: "end",
					behavior: "smooth"
				});
			}
		}
		function refreshHelper() {
			timeout = null;
			let str = input.value;
			first = null;
			helper.innerHTML = "";
			if (!str && !options.show_all_if_empty) return;
			if (that.onSearchBox) {
				const list = that.onSearchBox(helper, str, graphcanvas);
				if (list) for (const item of list) addResult(item);
			} else {
				let c = 0;
				str = str.toLowerCase();
				if (!graphcanvas.graph) throw new NullGraphError();
				const filter = graphcanvas.filter || graphcanvas.graph.filter;
				let sIn = null;
				let sOut = null;
				if (options.do_type_filter && that.search_box) {
					sIn = that.search_box.querySelector(".slot_in_type_filter");
					sOut = that.search_box.querySelector(".slot_out_type_filter");
				}
				const filtered = Object.keys(LiteGraph.registered_node_types).filter((x) => inner_test_filter(x));
				for (const item of filtered) {
					addResult(item);
					if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) break;
				}
				if (options.show_general_after_typefiltered && (sIn?.value || sOut?.value)) {
					const filtered_extra = [];
					for (const i in LiteGraph.registered_node_types) if (inner_test_filter(i, {
						inTypeOverride: sIn && sIn.value ? "*" : false,
						outTypeOverride: sOut && sOut.value ? "*" : false
					})) filtered_extra.push(i);
					for (const extraItem of filtered_extra) {
						addResult(extraItem, "generic_type");
						if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) break;
					}
				}
				if ((sIn?.value || sOut?.value) && helper.childNodes.length == 0 && options.show_general_if_none_on_typefilter) {
					const filtered_extra = [];
					for (const i in LiteGraph.registered_node_types) if (inner_test_filter(i, { skipFilter: true })) filtered_extra.push(i);
					for (const extraItem of filtered_extra) {
						addResult(extraItem, "not_in_filter");
						if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) break;
					}
				}
				function inner_test_filter(type, optsIn) {
					optsIn = optsIn || {};
					const opts = Object.assign({
						skipFilter: false,
						inTypeOverride: false,
						outTypeOverride: false
					}, optsIn);
					const ctor = LiteGraph.registered_node_types[type];
					if (filter && ctor.filter != filter) return false;
					if ((!options.show_all_if_empty || str) && !type.toLowerCase().includes(str) && (!ctor.title || !ctor.title.toLowerCase().includes(str))) return false;
					if (options.do_type_filter && !opts.skipFilter) {
						const sType = type;
						let sV = typeof opts.inTypeOverride === "string" ? opts.inTypeOverride : sIn?.value;
						if (sIn && sV && LiteGraph.registered_slot_in_types[sV]?.nodes) {
							if (LiteGraph.registered_slot_in_types[sV].nodes.includes(sType) === false) return false;
						}
						sV = sOut?.value;
						if (typeof opts.outTypeOverride === "string") sV = opts.outTypeOverride;
						if (sOut && sV && LiteGraph.registered_slot_out_types[sV]?.nodes) {
							if (LiteGraph.registered_slot_out_types[sV].nodes.includes(sType) === false) return false;
						}
					}
					return true;
				}
			}
			function addResult(type, className) {
				const help = document.createElement("div");
				first ||= type;
				const nodeType = LiteGraph.registered_node_types[type];
				if (nodeType?.title) {
					help.textContent = nodeType?.title;
					const typeEl = document.createElement("span");
					typeEl.className = "litegraph lite-search-item-type";
					typeEl.textContent = type;
					help.append(typeEl);
				} else help.textContent = type;
				help.dataset["type"] = escape(type);
				help.className = "litegraph lite-search-item";
				if (className) help.className += ` ${className}`;
				help.addEventListener("click", function() {
					select(unescape(String(this.dataset["type"])));
				});
				helper.append(help);
			}
		}
		return dialog;
	}
	showEditPropertyValue(node, property, options) {
		if (!node || node.properties[property] === void 0) return;
		options = options || {};
		const info = node.getPropertyInfo(property);
		const { type } = info;
		let input_html = "";
		if (type == "string" || type == "number" || type == "array" || type == "object") input_html = "<input autofocus type='text' class='value'/>";
		else if ((type == "enum" || type == "combo") && info.values) {
			input_html = "<select autofocus type='text' class='value'>";
			for (const i in info.values) {
				const v = Array.isArray(info.values) ? info.values[i] : i;
				const selected = v == node.properties[property] ? "selected" : "";
				input_html += `<option value='${v}' ${selected}>${info.values[i]}</option>`;
			}
			input_html += "</select>";
		} else if (type == "boolean" || type == "toggle") input_html = `<input autofocus type='checkbox' class='value' ${node.properties[property] ? "checked" : ""}/>`;
		else {
			console.warn(`unknown type: ${type}`);
			return;
		}
		const dialog = this.createDialog(`<span class='name'>${info.label || property}</span>${input_html}<button>OK</button>`, options);
		let input;
		if ((type == "enum" || type == "combo") && info.values) {
			input = dialog.querySelector("select");
			input?.addEventListener("change", function(e) {
				dialog.modified();
				setValue(e.target?.value);
			});
		} else if (type == "boolean" || type == "toggle") {
			input = dialog.querySelector("input");
			input?.addEventListener("click", function() {
				dialog.modified();
				setValue(!!input.checked);
			});
		} else {
			input = dialog.querySelector("input");
			if (input) {
				input.addEventListener("blur", function() {
					this.focus();
				});
				let v = node.properties[property] !== void 0 ? node.properties[property] : "";
				if (type !== "string") v = JSON.stringify(v);
				input.value = v;
				input.addEventListener("keydown", function(e) {
					if (e.key == "Escape") dialog.close();
					else if (e.key == "Enter") inner();
					else {
						dialog.modified();
						return;
					}
					e.preventDefault();
					e.stopPropagation();
				});
			}
		}
		input?.focus();
		const button = dialog.querySelector("button");
		if (!button) throw new TypeError("Show edit property value button was null.");
		button.addEventListener("click", inner);
		function inner() {
			setValue(input?.value);
		}
		const dirty = () => this._dirty();
		function setValue(value) {
			if (info?.values && typeof info.values === "object" && info.values[value] != void 0) value = info.values[value];
			if (typeof node.properties[property] == "number") value = Number(value);
			if (type == "array" || type == "object") value = JSON.parse(value);
			node.properties[property] = value;
			if (node.graph) node.graph._version++;
			node.onPropertyChanged?.(property, value);
			options.onclose?.();
			dialog.close();
			dirty();
		}
		return dialog;
	}
	createDialog(html, options) {
		options = Object.assign({
			checkForInput: false,
			closeOnLeave: true,
			closeOnLeave_checkModified: true
		}, options || {});
		const customProperties = {
			className: "graphdialog",
			innerHTML: html,
			is_modified: false,
			modified() {
				this.is_modified = true;
			},
			close() {
				this.remove();
			}
		};
		const div = document.createElement("div");
		const dialog = Object.assign(div, customProperties);
		const rect = this.canvas.getBoundingClientRect();
		let offsetx = -20;
		let offsety = -20;
		if (rect) {
			offsetx -= rect.left;
			offsety -= rect.top;
		}
		if (options.position) {
			offsetx += options.position[0];
			offsety += options.position[1];
		} else if (options.event) {
			offsetx += options.event.clientX;
			offsety += options.event.clientY;
		} else {
			offsetx += this.canvas.width * .5;
			offsety += this.canvas.height * .5;
		}
		dialog.style.left = `${offsetx}px`;
		dialog.style.top = `${offsety}px`;
		if (!this.canvas.parentNode) throw new TypeError("Canvas parent element was null.");
		this.canvas.parentNode.append(dialog);
		if (options.checkForInput) {
			const aI = dialog.querySelectorAll("input");
			if (aI) for (const iX of aI) {
				iX.addEventListener("keydown", function(e) {
					dialog.modified();
					if (e.key == "Escape") dialog.close();
					else if (e.key != "Enter") return;
					e.preventDefault();
					e.stopPropagation();
				});
				iX.focus();
			}
		}
		let dialogCloseTimer;
		let prevent_timeout = 0;
		dialog.addEventListener("mouseleave", function() {
			if (prevent_timeout) return;
			if (!dialog.is_modified && LiteGraph.dialog_close_on_mouse_leave) dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay);
		});
		dialog.addEventListener("mouseenter", function() {
			if (options.closeOnLeave || LiteGraph.dialog_close_on_mouse_leave) {
				if (dialogCloseTimer) clearTimeout(dialogCloseTimer);
			}
		});
		const selInDia = dialog.querySelectorAll("select");
		if (selInDia) for (const selIn of selInDia) {
			selIn.addEventListener("click", function() {
				prevent_timeout++;
			});
			selIn.addEventListener("blur", function() {
				prevent_timeout = 0;
			});
			selIn.addEventListener("change", function() {
				prevent_timeout = -1;
			});
		}
		return dialog;
	}
	createPanel(title, options) {
		options = options || {};
		const root = document.createElement("div");
		root.className = "litegraph dialog";
		root.innerHTML = "<div class='dialog-header'><span class='dialog-title'></span></div><div class='dialog-content'></div><div style='display:none;' class='dialog-alt-content'></div><div class='dialog-footer'></div>";
		root.header = root.querySelector(".dialog-header");
		if (options.width) root.style.width = options.width + (typeof options.width === "number" ? "px" : "");
		if (options.height) root.style.height = options.height + (typeof options.height === "number" ? "px" : "");
		if (options.closable) {
			const close = document.createElement("span");
			close.innerHTML = "&#10005;";
			close.classList.add("close");
			close.addEventListener("click", function() {
				root.close();
			});
			root.header.append(close);
		}
		root.title_element = root.querySelector(".dialog-title");
		root.title_element.textContent = title;
		root.content = root.querySelector(".dialog-content");
		root.alt_content = root.querySelector(".dialog-alt-content");
		root.footer = root.querySelector(".dialog-footer");
		root.footer.style.marginTop = "-96px";
		root.close = function() {
			if (typeof root.onClose == "function") root.onClose();
			root.remove();
			this.remove();
		};
		root.toggleAltContent = function(force) {
			let vTo;
			let vAlt;
			if (force !== void 0) {
				vTo = force ? "block" : "none";
				vAlt = force ? "none" : "block";
			} else {
				vTo = root.alt_content.style.display != "block" ? "block" : "none";
				vAlt = root.alt_content.style.display != "block" ? "none" : "block";
			}
			root.alt_content.style.display = vTo;
			root.content.style.display = vAlt;
		};
		root.toggleFooterVisibility = function(force) {
			let vTo;
			if (force !== void 0) vTo = force ? "block" : "none";
			else vTo = root.footer.style.display != "block" ? "block" : "none";
			root.footer.style.display = vTo;
		};
		root.clear = function() {
			this.content.innerHTML = "";
		};
		root.addHTML = function(code, classname, on_footer) {
			const elem = document.createElement("div");
			if (classname) elem.className = classname;
			elem.innerHTML = code;
			if (on_footer) root.footer.append(elem);
			else root.content.append(elem);
			return elem;
		};
		root.addButton = function(name, callback, options) {
			const elem = document.createElement("button");
			elem.textContent = name;
			elem.options = options;
			elem.classList.add("btn");
			elem.addEventListener("click", callback);
			root.footer.append(elem);
			return elem;
		};
		root.addSeparator = function() {
			const elem = document.createElement("div");
			elem.className = "separator";
			root.content.append(elem);
		};
		root.addWidget = function(type, name, value, options, callback) {
			options = options || {};
			let str_value = String(value);
			type = type.toLowerCase();
			if (type == "number" && typeof value === "number") str_value = value.toFixed(3);
			const elem = document.createElement("div");
			elem.className = "property";
			elem.innerHTML = "<span class='property_name'></span><span class='property_value'></span>";
			const nameSpan = elem.querySelector(".property_name");
			if (!nameSpan) throw new TypeError("Property name element was null.");
			nameSpan.textContent = options.label || name;
			const value_element = elem.querySelector(".property_value");
			if (!value_element) throw new TypeError("Property name element was null.");
			value_element.textContent = str_value;
			elem.dataset["property"] = name;
			elem.dataset["type"] = options.type || type;
			elem.options = options;
			elem.value = value;
			if (type == "code") elem.addEventListener("click", function() {
				const property = this.dataset["property"];
				if (property) root.inner_showCodePad?.(property);
			});
			else if (type == "boolean") {
				elem.classList.add("boolean");
				if (value) elem.classList.add("bool-on");
				elem.addEventListener("click", () => {
					const propname = elem.dataset["property"];
					elem.value = !elem.value;
					elem.classList.toggle("bool-on");
					if (!value_element) throw new TypeError("Property name element was null.");
					value_element.textContent = elem.value ? "true" : "false";
					innerChange(propname, elem.value);
				});
			} else if (type == "string" || type == "number") {
				if (!value_element) throw new TypeError("Property name element was null.");
				value_element.setAttribute("contenteditable", "true");
				value_element.addEventListener("keydown", function(e) {
					if (e.code == "Enter" && (type != "string" || !e.shiftKey)) {
						e.preventDefault();
						this.blur();
					}
				});
				value_element.addEventListener("blur", function() {
					let v = this.textContent;
					const propname = this.parentElement?.dataset["property"];
					if (this.parentElement?.dataset["type"] == "number") v = Number(v);
					innerChange(propname, v);
				});
			} else if (type == "enum" || type == "combo") {
				const str_value = LGraphCanvas.getPropertyPrintableValue(value, options.values);
				if (!value_element) throw new TypeError("Property name element was null.");
				value_element.textContent = str_value ?? "";
				value_element.addEventListener("click", function(event) {
					const values = options?.values || [];
					const propname = this.parentElement?.dataset["property"];
					const inner_clicked = (v) => {
						this.textContent = v ?? null;
						innerChange(propname, v);
						return false;
					};
					new LiteGraph.ContextMenu(values, {
						event,
						className: "dark",
						callback: inner_clicked
					});
				});
			}
			root.content.append(elem);
			function innerChange(name, value) {
				const opts = options || {};
				opts.callback?.(name, value, opts);
				callback?.(name, value, opts);
			}
			return elem;
		};
		if (typeof root.onOpen == "function") root.onOpen();
		return root;
	}
	closePanels() {
		document.querySelector("#node-panel")?.close?.();
		document.querySelector("#option-panel")?.close?.();
	}
	showShowNodePanel(node) {
		this.SELECTED_NODE = node;
		this.closePanels();
		const ref_window = this.getCanvasWindow();
		const panel = this.createPanel(node.title || "", {
			closable: true,
			window: ref_window,
			onOpen: () => {
				this.NODEPANEL_IS_OPEN = true;
			},
			onClose: () => {
				this.NODEPANEL_IS_OPEN = false;
				this.node_panel = void 0;
			}
		});
		this.node_panel = panel;
		panel.id = "node-panel";
		panel.node = node;
		panel.classList.add("settings");
		panel.style.position = "absolute";
		panel.style.top = "96px";
		panel.style.left = "65px";
		const inner_refresh = () => {
			panel.content.innerHTML = "";
			panel.addHTML(`<span class='node_type'>${node.type}</span><span class='node_desc'>${node.constructor.desc || ""}</span><span class='separator'></span>`);
			panel.addHTML("<h3>Properties</h3>");
			const fUpdate = (name, value) => {
				if (!this.graph) throw new NullGraphError();
				if (!name) return;
				this.graph.beforeChange(node);
				switch (name) {
					case "Title":
						if (typeof value !== "string") throw new TypeError("Attempting to set title to non-string value.");
						node.title = value;
						break;
					case "Mode": {
						if (typeof value !== "string") throw new TypeError("Attempting to set mode to non-string value.");
						const kV = Object.values(LiteGraph.NODE_MODES).indexOf(value);
						if (kV !== -1 && LiteGraph.NODE_MODES[kV]) node.changeMode(kV);
						else console.warn(`unexpected mode: ${value}`);
						break;
					}
					case "Color":
						if (typeof value !== "string") throw new TypeError("Attempting to set colour to non-string value.");
						if (LGraphCanvas.node_colors[value]) {
							node.color = LGraphCanvas.node_colors[value].color;
							node.bgcolor = LGraphCanvas.node_colors[value].bgcolor;
						} else console.warn(`unexpected color: ${value}`);
						break;
					default:
						node.setProperty(name, value);
						break;
				}
				this.graph.afterChange();
				this.dirty_canvas = true;
			};
			panel.addWidget("string", "Title", node.title, {}, fUpdate);
			const mode = node.mode == null ? void 0 : LiteGraph.NODE_MODES[node.mode];
			panel.addWidget("combo", "Mode", mode, { values: LiteGraph.NODE_MODES }, fUpdate);
			const nodeCol = node.color !== void 0 ? Object.keys(LGraphCanvas.node_colors).filter(function(nK) {
				return LGraphCanvas.node_colors[nK].color == node.color;
			}) : "";
			panel.addWidget("combo", "Color", nodeCol, { values: Object.keys(LGraphCanvas.node_colors) }, fUpdate);
			for (const pName in node.properties) {
				const value = node.properties[pName];
				const info = node.getPropertyInfo(pName);
				if (node.onAddPropertyToPanel?.(pName, panel)) continue;
				panel.addWidget(info.widget || info.type, pName, value, info, fUpdate);
			}
			panel.addSeparator();
			node.onShowCustomPanelInfo?.(panel);
			panel.footer.innerHTML = "";
			panel.addButton("Delete", function() {
				if (node.block_delete) return;
				if (!node.graph) throw new NullGraphError();
				node.graph.remove(node);
				panel.close();
			}).classList.add("delete");
		};
		panel.inner_showCodePad = function(propname) {
			panel.classList.remove("settings");
			panel.classList.add("centered");
			panel.alt_content.innerHTML = "<textarea class='code'></textarea>";
			const textarea = panel.alt_content.querySelector("textarea");
			const fDoneWith = function() {
				panel.toggleAltContent(false);
				panel.toggleFooterVisibility(true);
				textarea.remove();
				panel.classList.add("settings");
				panel.classList.remove("centered");
				inner_refresh();
			};
			textarea.value = String(node.properties[propname]);
			textarea.addEventListener("keydown", function(e) {
				if (e.code == "Enter" && e.ctrlKey) {
					node.setProperty(propname, textarea.value);
					fDoneWith();
				}
			});
			panel.toggleAltContent(true);
			panel.toggleFooterVisibility(false);
			textarea.style.height = "calc(100% - 40px)";
			const assign = panel.addButton("Assign", function() {
				node.setProperty(propname, textarea.value);
				fDoneWith();
			});
			panel.alt_content.append(assign);
			const button = panel.addButton("Close", fDoneWith);
			button.style.float = "right";
			panel.alt_content.append(button);
		};
		inner_refresh();
		if (!this.canvas.parentNode) throw new TypeError("showNodePanel - this.canvas.parentNode was null");
		this.canvas.parentNode.append(panel);
	}
	checkPanels() {
		if (!this.canvas) return;
		if (!this.canvas.parentNode) throw new TypeError("checkPanels - this.canvas.parentNode was null");
		const panels = this.canvas.parentNode.querySelectorAll(".litegraph.dialog");
		for (const panel of panels) {
			if (!panel.node) continue;
			if (!panel.node.graph || panel.graph != this.graph) panel.close();
		}
	}
	getCanvasMenuOptions() {
		let options;
		if (this.getMenuOptions) options = this.getMenuOptions();
		else {
			options = [
				{
					content: "Add Node",
					has_submenu: true,
					callback: LGraphCanvas.onMenuAdd
				},
				{
					content: "Add Group",
					callback: LGraphCanvas.onGroupAdd
				},
				{
					content: "Paste",
					callback: () => {
						this.pasteFromClipboard();
					}
				}
			];
			if (Object.keys(this.selected_nodes).length > 1) options.push({
				content: "Convert to Subgraph",
				callback: () => {
					if (!this.selectedItems.size) throw new Error("Convert to Subgraph: Nothing selected.");
					this._graph.convertToSubgraph(this.selectedItems);
				}
			}, {
				content: "Align",
				has_submenu: true,
				callback: LGraphCanvas.onGroupAlign
			});
		}
		const extra = this.getExtraMenuOptions?.(this, options);
		return Array.isArray(extra) ? options.concat(extra) : options;
	}
	getNodeMenuOptions(node) {
		let options;
		if (node.getMenuOptions) options = node.getMenuOptions(this);
		else {
			options = [
				{
					content: "Convert to Subgraph",
					callback: () => {
						if (this.selectedItems.size) {
							let hasGroups = false;
							for (const item of this.selectedItems) {
								const node = item;
								if (typeof node.type === "string" && node.type.startsWith(`workflow>`) && node.convertToNodes) {
									hasGroups = true;
									const nodes = node.convertToNodes();
									requestAnimationFrame(() => {
										this.selectItems(nodes, true);
										if (!this.selectedItems.size) throw new Error("Convert to Subgraph: Nothing selected.");
										this._graph.convertToSubgraph(this.selectedItems);
									});
									return;
								}
							}
							if (!hasGroups) {
								if (!this.selectedItems.size) throw new Error("Convert to Subgraph: Nothing selected.");
								this._graph.convertToSubgraph(this.selectedItems);
							}
						} else throw new Error("Convert to Subgraph: Nothing selected.");
					}
				},
				{
					content: "Properties",
					has_submenu: true,
					callback: LGraphCanvas.onShowMenuNodeProperties
				},
				{
					content: "Properties Panel",
					callback: function(_item, _options, _e, _menu, node) {
						LGraphCanvas.active_canvas.showShowNodePanel(node);
					}
				},
				null,
				{
					content: "Title",
					callback: LGraphCanvas.onShowPropertyEditor
				},
				{
					content: "Mode",
					has_submenu: true,
					callback: LGraphCanvas.onMenuNodeMode
				}
			];
			if (node.resizable !== false) options.push({
				content: "Resize",
				callback: LGraphCanvas.onMenuResizeNode
			});
			if (node.collapsible) options.push({
				content: node.collapsed ? "Expand" : "Collapse",
				callback: LGraphCanvas.onMenuNodeCollapse
			});
			if (node.hasAdvancedWidgets()) options.push({
				content: node.showAdvanced ? "Hide Advanced" : "Show Advanced",
				callback: LGraphCanvas.onMenuToggleAdvanced
			});
			options.push({
				content: node.pinned ? "Unpin" : "Pin",
				callback: () => {
					for (const i in this.selected_nodes) this.selected_nodes[i].pin();
					this.setDirty(true, true);
				}
			}, {
				content: "Colors",
				has_submenu: true,
				callback: LGraphCanvas.onMenuNodeColors
			}, {
				content: "Shapes",
				has_submenu: true,
				callback: LGraphCanvas.onMenuNodeShapes
			}, null);
		}
		const extra = node.getExtraMenuOptions?.(this, options);
		if (Array.isArray(extra) && extra.length > 0) {
			extra.push(null);
			options = extra.concat(options);
		}
		if (node.clonable !== false) options.push({
			content: "Clone",
			callback: LGraphCanvas.onMenuNodeClone
		});
		if (Object.keys(this.selected_nodes).length > 1) options.push({
			content: "Align Selected To",
			has_submenu: true,
			callback: LGraphCanvas.onNodeAlign
		}, {
			content: "Distribute Nodes",
			has_submenu: true,
			callback: LGraphCanvas.createDistributeMenu
		});
		options.push(null, {
			content: "Remove",
			disabled: !(node.removable !== false && !node.block_delete),
			callback: LGraphCanvas.onMenuNodeRemove
		});
		node.graph?.onGetNodeMenuOptions?.(options, node);
		return options;
	}
	/** @deprecated */
	getGroupMenuOptions(group) {
		console.warn("LGraphCanvas.getGroupMenuOptions is deprecated, use LGraphGroup.getMenuOptions instead");
		return group.getMenuOptions();
	}
	processContextMenu(node, event) {
		let menu_info;
		const options = {
			event,
			callback: inner_option_clicked,
			extra: node
		};
		if (node) {
			options.title = node.displayType ?? node.type ?? void 0;
			LGraphCanvas.active_node = node;
			const slot = node.getSlotInPosition(event.canvasX, event.canvasY);
			if (slot) {
				menu_info = [];
				if (node.getSlotMenuOptions) menu_info = node.getSlotMenuOptions(slot);
				else {
					if (slot.output?.links?.length || slot.input?.link != null) menu_info.push({
						content: "Disconnect Links",
						slot
					});
					const _slot = slot.input || slot.output;
					if (!_slot) throw new TypeError("Both in put and output slots were null when processing context menu.");
					if (!_slot.nameLocked && !("link" in _slot && _slot.widget)) menu_info.push({
						content: "Rename Slot",
						slot
					});
					if (_slot.removable) {
						menu_info.push(null);
						menu_info.push(_slot.locked ? "Cannot remove" : {
							content: "Remove Slot",
							slot,
							className: "danger"
						});
					}
					if (node.getExtraSlotMenuOptions) menu_info.push(...node.getExtraSlotMenuOptions(slot));
				}
				options.title = (slot.input ? slot.input.type : slot.output.type) || "*";
				if (slot.input && slot.input.type == LiteGraph.ACTION) options.title = "Action";
				if (slot.output && slot.output.type == LiteGraph.EVENT) options.title = "Event";
			} else menu_info = this.getNodeMenuOptions(node);
		} else {
			menu_info = this.getCanvasMenuOptions();
			if (!this.graph) throw new NullGraphError();
			if (this.links_render_mode !== LinkRenderType.HIDDEN_LINK) {
				const rerouteLayout = layoutStore.queryRerouteAtPoint({
					x: event.canvasX,
					y: event.canvasY
				});
				let reroute;
				if (rerouteLayout) reroute = this.graph.getReroute(rerouteLayout.id);
				else reroute = this.graph.getRerouteOnPos(event.canvasX, event.canvasY, this._visibleReroutes);
				if (reroute) menu_info.unshift({
					content: "Delete Reroute",
					callback: () => {
						if (!this.graph) throw new NullGraphError();
						this.graph.removeReroute(reroute.id);
					}
				}, null);
			}
			const group = this.graph.getGroupOnPos(event.canvasX, event.canvasY);
			if (group) menu_info.push(null, {
				content: "Edit Group",
				has_submenu: true,
				submenu: {
					title: "Group",
					extra: group,
					options: group.getMenuOptions()
				}
			});
		}
		if (!menu_info) return;
		new LiteGraph.ContextMenu(menu_info, options);
		const createDialog = (options) => this.createDialog("<span class='name'>Name</span><input autofocus type='text'/><button>OK</button>", options);
		const setDirty = () => this.setDirty(true);
		function inner_option_clicked(v, options) {
			if (!v) return;
			if (v.content == "Remove Slot") {
				if (!node?.graph) throw new NullGraphError();
				const info = v.slot;
				if (!info) throw new TypeError("Found-slot info was null when processing context menu.");
				node.graph.beforeChange();
				if (info.input) node.removeInput(info.slot);
				else if (info.output) node.removeOutput(info.slot);
				node.graph.afterChange();
				return;
			} else if (v.content == "Disconnect Links") {
				if (!node?.graph) throw new NullGraphError();
				const info = v.slot;
				if (!info) throw new TypeError("Found-slot info was null when processing context menu.");
				node.graph.beforeChange();
				if (info.output) node.disconnectOutput(info.slot);
				else if (info.input) node.disconnectInput(info.slot, true);
				node.graph.afterChange();
				return;
			} else if (v.content == "Rename Slot") {
				if (!node) throw new TypeError("`node` was null when processing the context menu.");
				const info = v.slot;
				if (!info) throw new TypeError("Found-slot info was null when processing context menu.");
				const slot_info = info.input ? node.getInputInfo(info.slot) : node.getOutputInfo(info.slot);
				const dialog = createDialog(options);
				const input = dialog.querySelector("input");
				if (input && slot_info) input.value = slot_info.label || "";
				const inner = function() {
					if (!node.graph) throw new NullGraphError();
					node.graph.beforeChange();
					if (input?.value) {
						if (slot_info) slot_info.label = input.value;
						setDirty();
					}
					dialog.close();
					node.graph.afterChange();
				};
				dialog.querySelector("button")?.addEventListener("click", inner);
				if (!input) throw new TypeError("Input element was null when processing context menu.");
				input.addEventListener("keydown", function(e) {
					dialog.is_modified = true;
					if (e.key == "Escape") dialog.close();
					else if (e.key == "Enter") inner();
					else if (e.target.localName != "textarea") return;
					e.preventDefault();
					e.stopPropagation();
				});
				input.focus();
			}
		}
	}
	/**
	* Starts an animation to fit the view around the specified selection of nodes.
	* @param bounds The bounds to animate the view to, defined by a rectangle.
	*/
	animateToBounds(bounds, options = {}) {
		const setDirty = () => this.setDirty(true, true);
		this.ds.animateToBounds(bounds, setDirty, options);
	}
	/**
	* Fits the view to the selected nodes with animation.
	* If nothing is selected, the view is fitted around all items in the graph.
	*/
	fitViewToSelectionAnimated(options = {}) {
		const bounds = createBounds(this.selectedItems.size ? Array.from(this.selectedItems) : this.positionableItems);
		if (!bounds) throw new TypeError("Attempted to fit to view but could not calculate bounds.");
		const setDirty = () => this.setDirty(true, true);
		this.ds.animateToBounds(bounds, setDirty, options);
	}
	/**
	* Calculate new position with delta
	*/
	calculateNewPosition(node, deltaX, deltaY) {
		return {
			x: node.pos[0] + deltaX,
			y: node.pos[1] + deltaY
		};
	}
	/**
	* Apply batched node position updates
	*/
	applyNodePositionUpdates(nodesToMove) {
		for (const { node, newPos } of nodesToMove) node.setPos(newPos.x, newPos.y);
	}
	/**
	* Collect all nodes that are children of groups in the selection
	*/
	collectNodesInGroups(items) {
		const nodesInGroups = /* @__PURE__ */ new Set();
		for (const item of items) if (item instanceof LGraphGroup) {
			for (const child of item._children) if (child instanceof LGraphNode) nodesInGroups.add(child);
		}
		return nodesInGroups;
	}
	/**
	* Move group children (both nodes and non-nodes)
	*/
	moveGroupChildren(group, deltaX, deltaY, nodesToMove) {
		for (const child of group._children) if (child instanceof LGraphNode) {
			const node = child;
			nodesToMove.push({
				node,
				newPos: this.calculateNewPosition(node, deltaX, deltaY)
			});
		} else if (!(child instanceof LGraphGroup)) child.move(deltaX, deltaY, true);
	}
	moveChildNodesInGroupVueMode(allItems, deltaX, deltaY) {
		const nodesInMovingGroups = this.collectNodesInGroups(allItems);
		const nodesToMove = [];
		for (const item of allItems) if (item instanceof LGraphNode) {
			const node = item;
			if (nodesInMovingGroups.has(node)) continue;
			nodesToMove.push({
				node,
				newPos: this.calculateNewPosition(node, deltaX, deltaY)
			});
		} else if (item instanceof LGraphGroup) {
			item.move(deltaX, deltaY, true);
			this.moveGroupChildren(item, deltaX, deltaY, nodesToMove);
		} else item.move(deltaX, deltaY, true);
		this.applyNodePositionUpdates(nodesToMove);
	}
	repositionNodesVueMode(nodesToReposition) {
		this.applyNodePositionUpdates(nodesToReposition);
	}
	/**
	* Custom JSON serialization to prevent circular reference errors.
	* LGraphCanvas should not be serialized directly - serialize the graph instead.
	*/
	toJSON() {
		return { ds: {
			scale: this.ds.scale,
			offset: [...this.ds.offset]
		} };
	}
};
function patchLinkNodeIds$1(links, remappedIds) {
	if (!links?.length) return;
	for (const link of links) {
		const newOriginId = remappedIds.get(link.origin_id);
		if (newOriginId !== void 0) link.origin_id = newOriginId;
		const newTargetId = remappedIds.get(link.target_id);
		if (newTargetId !== void 0) link.target_id = newTargetId;
	}
}
__name(patchLinkNodeIds$1, "patchLinkNodeIds");
function remapNodeId(nodeId, remappedIds) {
	const directMatch = remappedIds.get(nodeId);
	if (directMatch !== void 0) return directMatch;
	if (!/^-?\d+$/.test(nodeId)) return void 0;
	const numericId = Number(nodeId);
	if (!Number.isSafeInteger(numericId)) return void 0;
	return remappedIds.get(numericId);
}
function remapProxyWidgets(info, remappedIds) {
	if (!remappedIds || remappedIds.size === 0) return;
	const proxyWidgets = info.properties?.proxyWidgets;
	if (!Array.isArray(proxyWidgets)) return;
	for (const entry of proxyWidgets) {
		if (!Array.isArray(entry)) continue;
		const [nodeId] = entry;
		if (typeof nodeId !== "string" || nodeId === "-1") continue;
		const remappedNodeId = remapNodeId(nodeId, remappedIds);
		if (remappedNodeId !== void 0) entry[0] = String(remappedNodeId);
	}
}
/**
* Remaps pasted subgraph interior node IDs that would collide with existing
* node IDs in the root graph. Also patches subgraph link node IDs and
* SubgraphNode `properties.proxyWidgets` references so promoted widget
* associations stay aligned with remapped interior IDs.
*/
function remapClipboardSubgraphNodeIds(parsed, rootGraph) {
	const usedNodeIds = /* @__PURE__ */ new Set();
	forEachNode(rootGraph, (node) => {
		if (typeof node.id !== "number") return;
		usedNodeIds.add(node.id);
		if (rootGraph.state.lastNodeId < node.id) rootGraph.state.lastNodeId = node.id;
	});
	function nextUniqueNodeId() {
		while (usedNodeIds.has(++rootGraph.state.lastNodeId));
		const nextId = rootGraph.state.lastNodeId;
		usedNodeIds.add(nextId);
		return nextId;
	}
	const subgraphNodeIdMap = /* @__PURE__ */ new Map();
	for (const subgraphInfo of parsed.subgraphs ?? []) {
		const remappedIds = /* @__PURE__ */ new Map();
		const interiorNodes = subgraphInfo.nodes ?? [];
		for (const nodeInfo of interiorNodes) {
			if (typeof nodeInfo.id !== "number") continue;
			if (usedNodeIds.has(nodeInfo.id)) {
				const oldId = nodeInfo.id;
				const newId = nextUniqueNodeId();
				remappedIds.set(oldId, newId);
				nodeInfo.id = newId;
				continue;
			}
			usedNodeIds.add(nodeInfo.id);
			if (rootGraph.state.lastNodeId < nodeInfo.id) rootGraph.state.lastNodeId = nodeInfo.id;
		}
		if (remappedIds.size > 0) {
			patchLinkNodeIds$1(subgraphInfo.links, remappedIds);
			subgraphNodeIdMap.set(subgraphInfo.id, remappedIds);
		}
	}
	const allNodeInfo = [parsed.nodes ? [parsed.nodes] : [], parsed.subgraphs ? parsed.subgraphs.map((s) => s.nodes ?? []) : []].flat(2);
	for (const nodeInfo of allNodeInfo) {
		if (typeof nodeInfo.type !== "string") continue;
		remapProxyWidgets(nodeInfo, subgraphNodeIdMap.get(nodeInfo.type));
	}
}
//#endregion
//#region src/lib/litegraph/src/MapProxyHandler.ts
/**
* Temporary workaround until downstream consumers migrate to Map.
* A brittle wrapper with many flaws, but should be fine for simple maps using int indexes.
*/
var MapProxyHandler = class {
	getOwnPropertyDescriptor(target, p) {
		const value = this.get(target, p);
		if (value) return {
			configurable: true,
			enumerable: true,
			value
		};
	}
	has(target, p) {
		if (typeof p === "symbol") return false;
		const int = parseInt(p, 10);
		return target.has(!isNaN(int) ? int : p);
	}
	ownKeys(target) {
		return [...target.keys()].map(String);
	}
	get(target, p) {
		if (p in target) return Reflect.get(target, p, target);
		if (typeof p === "symbol") return;
		const int = parseInt(p, 10);
		return target.get(!isNaN(int) ? int : p);
	}
	set(target, p, newValue) {
		if (typeof p === "symbol") return false;
		const int = parseInt(p, 10);
		target.set(!isNaN(int) ? int : p, newValue);
		return true;
	}
	deleteProperty(target, p) {
		return target.delete(p);
	}
	static bindAllMethods(map) {
		map.clear = map.clear.bind(map);
		map.delete = map.delete.bind(map);
		map.forEach = map.forEach.bind(map);
		map.get = map.get.bind(map);
		map.has = map.has.bind(map);
		map.set = map.set.bind(map);
		map.entries = map.entries.bind(map);
		map.keys = map.keys.bind(map);
		map.values = map.values.bind(map);
		map[Symbol.iterator] = map[Symbol.iterator].bind(map);
	}
};
//#endregion
//#region src/lib/litegraph/src/subgraph/subgraphDeduplication.ts
var MAX_NODE_ID = 1e8;
/**
* Pre-deduplicates node IDs across serialized subgraph definitions before
* they are configured. This prevents widget store key collisions when
* multiple subgraph copies contain nodes with the same IDs.
*
* Also patches proxyWidgets in root-level nodes that reference the
* remapped inner node IDs.
*
* Returns deep clones of the inputs — the originals are never mutated.
*
* @param subgraphs - Serialized subgraph definitions to deduplicate
* @param reservedNodeIds - Node IDs already in use by root-level nodes
* @param state - Graph state containing the `lastNodeId` counter (mutated)
* @param rootNodes - Optional root-level nodes with proxyWidgets to patch
*/
function deduplicateSubgraphNodeIds(subgraphs, reservedNodeIds, state, rootNodes) {
	const clonedSubgraphs = structuredClone(subgraphs);
	const clonedRootNodes = rootNodes ? structuredClone(rootNodes) : void 0;
	const usedNodeIds = new Set(reservedNodeIds);
	const subgraphIdSet = new Set(clonedSubgraphs.map((sg) => sg.id));
	const remapBySubgraph = /* @__PURE__ */ new Map();
	for (const subgraph of clonedSubgraphs) {
		const remappedIds = remapNodeIds(subgraph.nodes ?? [], usedNodeIds, state);
		if (remappedIds.size === 0) continue;
		remapBySubgraph.set(subgraph.id, remappedIds);
		patchSerialisedLinks(subgraph.links ?? [], remappedIds);
		patchPromotedWidgets(subgraph.widgets ?? [], remappedIds);
	}
	for (const subgraph of clonedSubgraphs) patchProxyWidgets(subgraph.nodes ?? [], subgraphIdSet, remapBySubgraph);
	if (clonedRootNodes) patchProxyWidgets(clonedRootNodes, subgraphIdSet, remapBySubgraph);
	return {
		subgraphs: clonedSubgraphs,
		rootNodes: clonedRootNodes
	};
}
/**
* Remaps duplicate node IDs to unique values, updating `usedNodeIds`
* and `state.lastNodeId` as new IDs are allocated.
*
* @returns A map of old ID → new ID for nodes that were remapped.
*/
function remapNodeIds(nodes, usedNodeIds, state) {
	const remappedIds = /* @__PURE__ */ new Map();
	for (const node of nodes) {
		const id = node.id;
		if (typeof id !== "number") continue;
		if (usedNodeIds.has(id)) {
			const newId = findNextAvailableId(usedNodeIds, state);
			remappedIds.set(id, newId);
			node.id = newId;
			usedNodeIds.add(newId);
			console.warn(`LiteGraph: duplicate subgraph node ID ${id} remapped to ${newId}`);
		} else {
			usedNodeIds.add(id);
			if (id > state.lastNodeId) state.lastNodeId = id;
		}
	}
	return remappedIds;
}
/**
* Finds the next unused node ID by incrementing `state.lastNodeId`.
* Throws if the ID space is exhausted.
*/
function findNextAvailableId(usedNodeIds, state) {
	while (true) {
		const nextId = state.lastNodeId + 1;
		if (nextId > MAX_NODE_ID) throw new Error("Node ID space exhausted");
		state.lastNodeId = nextId;
		if (!usedNodeIds.has(nextId)) return nextId;
	}
}
/** Patches origin_id / target_id in serialized links. */
function patchSerialisedLinks(links, remappedIds) {
	for (const link of links) {
		const newOrigin = remappedIds.get(link.origin_id);
		if (newOrigin !== void 0) link.origin_id = newOrigin;
		const newTarget = remappedIds.get(link.target_id);
		if (newTarget !== void 0) link.target_id = newTarget;
	}
}
/** Patches promoted widget node references. */
function patchPromotedWidgets(widgets, remappedIds) {
	for (const widget of widgets) {
		const newId = remappedIds.get(widget.id);
		if (newId !== void 0) widget.id = newId;
	}
}
/**
* Topologically sorts subgraph definitions so that leaf subgraphs (those
* that no other subgraph depends on) are configured first. This ensures
* that when a SubgraphNode is configured, the subgraph definition it
* references already has its nodes, links, and inputs populated.
*
* Falls back to the original order if no reordering is needed or if the
* dependency graph contains cycles.
*/
function topologicalSortSubgraphs(subgraphs) {
	const subgraphIds = new Set(subgraphs.map((sg) => sg.id));
	const byId = new Map(subgraphs.map((sg) => [sg.id, sg]));
	const dependents = /* @__PURE__ */ new Map();
	const inDegree = /* @__PURE__ */ new Map();
	for (const id of subgraphIds) {
		dependents.set(id, /* @__PURE__ */ new Set());
		inDegree.set(id, 0);
	}
	for (const sg of subgraphs) for (const node of sg.nodes ?? []) if (subgraphIds.has(node.type)) {
		dependents.get(node.type).add(sg.id);
		inDegree.set(sg.id, (inDegree.get(sg.id) ?? 0) + 1);
	}
	const queue = [];
	for (const [id, degree] of inDegree) if (degree === 0) queue.push(id);
	const sorted = [];
	while (queue.length > 0) {
		const id = queue.shift();
		sorted.push(byId.get(id));
		for (const dependent of dependents.get(id) ?? []) {
			const newDegree = (inDegree.get(dependent) ?? 1) - 1;
			inDegree.set(dependent, newDegree);
			if (newDegree === 0) queue.push(dependent);
		}
	}
	if (sorted.length !== subgraphs.length) return subgraphs;
	return sorted;
}
/** Patches proxyWidgets in root-level SubgraphNode instances. */
function patchProxyWidgets(rootNodes, subgraphIdSet, remapBySubgraph) {
	for (const node of rootNodes) {
		if (!subgraphIdSet.has(node.type)) continue;
		const remappedIds = remapBySubgraph.get(node.type);
		if (!remappedIds) continue;
		const proxyWidgets = node.properties?.proxyWidgets;
		if (!Array.isArray(proxyWidgets)) continue;
		for (const entry of proxyWidgets) {
			if (!Array.isArray(entry)) continue;
			const oldId = Number(entry[0]);
			const newId = remappedIds.get(oldId);
			if (newId !== void 0) entry[0] = String(newId);
		}
	}
}
//#endregion
//#region src/lib/litegraph/src/LGraph.ts
/**
* LGraph is the class that contain a full graph. We instantiate one and add nodes to it, and then we can run the execution loop.
* supported callbacks:
* + onNodeAdded: when a new node is added to the graph
* + onNodeRemoved: when a node inside this graph is removed
*/
var LGraph = class LGraph {
	static serialisedSchemaVersion = 1;
	static STATUS_STOPPED = 1;
	static STATUS_RUNNING = 2;
	/** List of LGraph properties that are manually handled by {@link LGraph.configure}. */
	static ConfigureProperties = new Set([
		"nodes",
		"groups",
		"links",
		"state",
		"reroutes",
		"floatingLinks",
		"id",
		"subgraphs",
		"definitions",
		"inputs",
		"outputs",
		"widgets",
		"inputNode",
		"outputNode",
		"extra"
	]);
	id = zeroUuid;
	revision = 0;
	_version = -1;
	/** The backing store for links.  Keys are wrapped in String() */
	_links = /* @__PURE__ */ new Map();
	/**
	* Indexed property access is deprecated.
	* Backwards compatibility with a Proxy has been added, but will eventually be removed.
	*
	* Use {@link Map} methods:
	* ```
	* const linkId = 123
	* const link = graph.links.get(linkId)
	* // Deprecated: const link = graph.links[linkId]
	* ```
	*/
	links;
	list_of_graphcanvas;
	status = LGraph.STATUS_STOPPED;
	_state = {
		lastGroupId: 0,
		lastNodeId: 0,
		lastLinkId: 0,
		lastRerouteId: 0
	};
	get state() {
		return this._state;
	}
	set state(value) {
		this._state = value;
	}
	events = new CustomEventTarget();
	_subgraphs = /* @__PURE__ */ new Map();
	_nodes = [];
	_nodes_by_id = {};
	_nodes_in_order = [];
	_nodes_executable = null;
	_groups = [];
	iteration = 0;
	globaltime = 0;
	/** @deprecated Unused */
	runningtime = 0;
	fixedtime = 0;
	fixedtime_lapse = .01;
	elapsed_time = .01;
	last_update_time = 0;
	starttime = 0;
	catch_errors = true;
	execution_timer_id;
	errors_in_execution;
	/** @deprecated Unused */
	execution_time;
	_last_trigger_time;
	filter;
	/** Must contain serialisable values, e.g. primitive types */
	config = {};
	vars = {};
	nodes_executing = [];
	nodes_actioning = [];
	nodes_executedAction = [];
	extra = {};
	/** @deprecated Deserialising a workflow sets this unused property. */
	version;
	/** @returns Whether the graph has no items */
	get empty() {
		return this._nodes.length + this._groups.length + this.reroutes.size === 0;
	}
	/** @returns All items on the canvas that can be selected */
	*positionableItems() {
		for (const node of this._nodes) yield node;
		for (const group of this._groups) yield group;
		for (const reroute of this.reroutes.values()) yield reroute;
	}
	/** Internal only.  Not required for serialisation; calculated on deserialise. */
	_lastFloatingLinkId = 0;
	floatingLinksInternal = /* @__PURE__ */ new Map();
	get floatingLinks() {
		return this.floatingLinksInternal;
	}
	reroutesInternal = /* @__PURE__ */ new Map();
	/** All reroutes in this graph. */
	get reroutes() {
		return this.reroutesInternal;
	}
	get rootGraph() {
		return this;
	}
	get isRootGraph() {
		return this.rootGraph === this;
	}
	/** @deprecated See {@link state}.{@link LGraphState.lastNodeId lastNodeId} */
	get last_node_id() {
		return this.state.lastNodeId;
	}
	set last_node_id(value) {
		this.state.lastNodeId = value;
	}
	/** @deprecated See {@link state}.{@link LGraphState.lastLinkId lastLinkId} */
	get last_link_id() {
		return this.state.lastLinkId;
	}
	set last_link_id(value) {
		this.state.lastLinkId = value;
	}
	onTrigger;
	_input_nodes;
	/**
	* See {@link LGraph}
	* @param o data from previous serialization [optional]
	*/
	constructor(o) {
		/** @see MapProxyHandler */
		const links = this._links;
		MapProxyHandler.bindAllMethods(links);
		const handler = new MapProxyHandler();
		this.links = new Proxy(links, handler);
		this.list_of_graphcanvas = null;
		this.clear();
		if (o) this.configure(o);
	}
	/**
	* Removes all nodes from this graph
	*/
	clear() {
		this.stop();
		this.status = LGraph.STATUS_STOPPED;
		const graphId = this.id;
		if (this.isRootGraph && graphId !== "00000000-0000-0000-0000-000000000000") {
			usePromotionStore().clearGraph(graphId);
			useWidgetValueStore().clearGraph(graphId);
		}
		this.id = zeroUuid;
		this.revision = 0;
		this.state = {
			lastGroupId: 0,
			lastNodeId: 0,
			lastLinkId: 0,
			lastRerouteId: 0
		};
		this._version = -1;
		this._subgraphs.clear();
		if (this._nodes) for (const _node of this._nodes) {
			_node.onRemoved?.();
			this.onNodeRemoved?.(_node);
		}
		this._nodes = [];
		this._nodes_by_id = {};
		this._nodes_in_order = [];
		this._nodes_executable = null;
		this._links.clear();
		this.reroutes.clear();
		this.floatingLinksInternal.clear();
		this._lastFloatingLinkId = 0;
		this._groups = [];
		this.iteration = 0;
		this.config = {};
		this.vars = {};
		this.extra = {};
		this.globaltime = 0;
		this.runningtime = 0;
		this.fixedtime = 0;
		this.fixedtime_lapse = .01;
		this.elapsed_time = .01;
		this.last_update_time = 0;
		this.starttime = 0;
		this.catch_errors = true;
		this.nodes_executing = [];
		this.nodes_actioning = [];
		this.nodes_executedAction = [];
		this.change();
		this.canvasAction((c) => c.clear());
	}
	get subgraphs() {
		return this.rootGraph._subgraphs;
	}
	get nodes() {
		return this._nodes;
	}
	get groups() {
		return this._groups;
	}
	/**
	* Attach Canvas to this graph
	*/
	attachCanvas(canvas) {
		if (!(canvas instanceof LGraphCanvas)) throw new TypeError("attachCanvas expects an LGraphCanvas instance");
		this.primaryCanvas = canvas;
		this.list_of_graphcanvas ??= [];
		if (!this.list_of_graphcanvas.includes(canvas)) this.list_of_graphcanvas.push(canvas);
		if (canvas.graph === this) return;
		canvas.graph?.detachCanvas(canvas);
		canvas.graph = this;
		canvas.subgraph = void 0;
	}
	/**
	* Detach Canvas from this graph
	*/
	detachCanvas(canvas) {
		canvas.graph = null;
		const canvases = this.list_of_graphcanvas;
		if (canvases) {
			const pos = canvases.indexOf(canvas);
			if (pos !== -1) canvases.splice(pos, 1);
		}
	}
	/**
	* @deprecated Will be removed in 0.9
	* Starts running this graph every interval milliseconds.
	* @param interval amount of milliseconds between executions, if 0 then it renders to the monitor refresh rate
	*/
	start(interval) {
		if (this.status == LGraph.STATUS_RUNNING) return;
		this.status = LGraph.STATUS_RUNNING;
		this.onPlayEvent?.();
		this.sendEventToAllNodes("onStart");
		this.starttime = LiteGraph.getTime();
		this.last_update_time = this.starttime;
		interval ||= 0;
		if (interval == 0 && typeof window != "undefined" && window.requestAnimationFrame) {
			const on_frame = () => {
				if (this.execution_timer_id != -1) return;
				window.requestAnimationFrame(on_frame);
				this.onBeforeStep?.();
				this.runStep(1, !this.catch_errors);
				this.onAfterStep?.();
			};
			this.execution_timer_id = -1;
			on_frame();
		} else this.execution_timer_id = setInterval(() => {
			this.onBeforeStep?.();
			this.runStep(1, !this.catch_errors);
			this.onAfterStep?.();
		}, interval);
	}
	/**
	* @deprecated Will be removed in 0.9
	* Stops the execution loop of the graph
	*/
	stop() {
		if (this.status == LGraph.STATUS_STOPPED) return;
		this.status = LGraph.STATUS_STOPPED;
		this.onStopEvent?.();
		if (this.execution_timer_id != null) {
			if (this.execution_timer_id != -1) clearInterval(this.execution_timer_id);
			this.execution_timer_id = null;
		}
		this.sendEventToAllNodes("onStop");
	}
	/**
	* Run N steps (cycles) of the graph
	* @param num number of steps to run, default is 1
	* @param do_not_catch_errors [optional] if you want to try/catch errors
	* @param limit max number of nodes to execute (used to execute from start to a node)
	*/
	runStep(num, do_not_catch_errors, limit) {
		num = num || 1;
		const start = LiteGraph.getTime();
		this.globaltime = .001 * (start - this.starttime);
		const nodes = this._nodes_executable || this._nodes;
		if (!nodes) return;
		limit = limit || nodes.length;
		if (do_not_catch_errors) {
			for (let i = 0; i < num; i++) {
				for (let j = 0; j < limit; ++j) {
					const node = nodes[j];
					if (node.mode == LGraphEventMode.ALWAYS && node.onExecute) node.doExecute?.();
				}
				this.fixedtime += this.fixedtime_lapse;
				this.onExecuteStep?.();
			}
			this.onAfterExecute?.();
		} else try {
			for (let i = 0; i < num; i++) {
				for (let j = 0; j < limit; ++j) {
					const node = nodes[j];
					if (node.mode == LGraphEventMode.ALWAYS) node.onExecute?.();
				}
				this.fixedtime += this.fixedtime_lapse;
				this.onExecuteStep?.();
			}
			this.onAfterExecute?.();
			this.errors_in_execution = false;
		} catch (error) {
			this.errors_in_execution = true;
			if (LiteGraph.throw_errors) throw error;
			if (LiteGraph.debug) console.error("Error during execution:", error);
			this.stop();
		}
		const now = LiteGraph.getTime();
		let elapsed = now - start;
		if (elapsed == 0) elapsed = 1;
		this.execution_time = .001 * elapsed;
		this.globaltime += .001 * elapsed;
		this.iteration += 1;
		this.elapsed_time = (now - this.last_update_time) * .001;
		this.last_update_time = now;
		this.nodes_executing = [];
		this.nodes_actioning = [];
		this.nodes_executedAction = [];
	}
	/**
	* Updates the graph execution order according to relevance of the nodes (nodes with only outputs have more relevance than
	* nodes with only inputs.
	*/
	updateExecutionOrder() {
		this._nodes_in_order = this.computeExecutionOrder(false);
		this._nodes_executable = [];
		for (const node of this._nodes_in_order) if (node.onExecute) this._nodes_executable.push(node);
	}
	computeExecutionOrder(only_onExecute, set_level) {
		const L = [];
		const S = [];
		const M = {};
		const visited_links = {};
		const remaining_links = {};
		for (const node of this._nodes) {
			if (only_onExecute && !node.onExecute) continue;
			M[node.id] = node;
			let num = 0;
			if (node.inputs) {
				for (const input of node.inputs) if (input?.link != null) num += 1;
			}
			if (num == 0) {
				S.push(node);
				if (set_level) node._level = 1;
			} else {
				if (set_level) node._level = 0;
				remaining_links[node.id] = num;
			}
		}
		while (true) {
			const node = S.shift();
			if (node === void 0) break;
			L.push(node);
			delete M[node.id];
			if (!node.outputs) continue;
			for (const output of node.outputs) {
				if (output?.links == null || output.links.length == 0) continue;
				for (const link_id of output.links) {
					const link = this._links.get(link_id);
					if (!link) continue;
					if (visited_links[link.id]) continue;
					const target_node = this.getNodeById(link.target_id);
					if (target_node == null) {
						visited_links[link.id] = true;
						continue;
					}
					if (set_level) {
						node._level ??= 0;
						if (!target_node._level || target_node._level <= node._level) target_node._level = node._level + 1;
					}
					visited_links[link.id] = true;
					remaining_links[target_node.id] -= 1;
					if (remaining_links[target_node.id] == 0) S.push(target_node);
				}
			}
		}
		for (const i in M) L.push(M[i]);
		if (L.length != this._nodes.length && LiteGraph.debug) console.warn("something went wrong, nodes missing");
		/** Sets the order property of each provided node to its index in {@link nodes}. */
		function setOrder(nodes) {
			const l = nodes.length;
			for (let i = 0; i < l; ++i) nodes[i].order = i;
		}
		setOrder(L);
		L.sort(function(A, B) {
			const Ap = A.constructor.priority || A.priority || 0;
			const Bp = B.constructor.priority || B.priority || 0;
			return Ap == Bp ? A.order - B.order : Ap - Bp;
		});
		setOrder(L);
		return L;
	}
	/**
	* Positions every node in a more readable manner
	*/
	arrange(margin, layout) {
		margin = margin || 100;
		const nodes = this.computeExecutionOrder(false, true);
		const columns = [];
		for (const node of nodes) {
			const col = node._level || 1;
			columns[col] ||= [];
			columns[col].push(node);
		}
		let x = margin;
		for (const column of columns) {
			if (!column) continue;
			let max_size = 100;
			let y = margin + LiteGraph.NODE_TITLE_HEIGHT;
			for (const node of column) {
				node.setPos(layout == LiteGraph.VERTICAL_LAYOUT ? y : x, layout == LiteGraph.VERTICAL_LAYOUT ? x : y);
				const max_size_index = layout == LiteGraph.VERTICAL_LAYOUT ? 1 : 0;
				if (node.size[max_size_index] > max_size) max_size = node.size[max_size_index];
				const node_size_index = layout == LiteGraph.VERTICAL_LAYOUT ? 0 : 1;
				y += node.size[node_size_index] + margin + LiteGraph.NODE_TITLE_HEIGHT;
			}
			x += max_size + margin;
		}
		this.setDirtyCanvas(true, true);
	}
	/**
	* Returns the amount of time the graph has been running in milliseconds
	* @returns number of milliseconds the graph has been running
	*/
	getTime() {
		return this.globaltime;
	}
	/**
	* Returns the amount of time accumulated using the fixedtime_lapse var.
	* This is used in context where the time increments should be constant
	* @returns number of milliseconds the graph has been running
	*/
	getFixedTime() {
		return this.fixedtime;
	}
	/**
	* Returns the amount of time it took to compute the latest iteration.
	* Take into account that this number could be not correct
	* if the nodes are using graphical actions
	* @returns number of milliseconds it took the last cycle
	*/
	getElapsedTime() {
		return this.elapsed_time;
	}
	/**
	* @deprecated Will be removed in 0.9
	* Sends an event to all the nodes, useful to trigger stuff
	* @param eventname the name of the event (function to be called)
	* @param params parameters in array format
	*/
	sendEventToAllNodes(eventname, params, mode) {
		mode = mode || LGraphEventMode.ALWAYS;
		const nodes = this._nodes_in_order || this._nodes;
		if (!nodes) return;
		for (const node of nodes) {
			if (!node[eventname] || node.mode != mode) continue;
			if (params === void 0) node[eventname]();
			else if (params && params.constructor === Array) node[eventname].apply(node, params);
			else node[eventname](params);
		}
	}
	/**
	* Runs an action on every canvas registered to this graph.
	* @param action Action to run for every canvas
	*/
	canvasAction(action) {
		const canvases = this.list_of_graphcanvas;
		if (!canvases) return;
		for (const canvas of canvases) action(canvas);
	}
	/** @deprecated See {@link LGraph.canvasAction} */
	sendActionToCanvas(action, params) {
		const { list_of_graphcanvas } = this;
		if (!list_of_graphcanvas) return;
		for (const c of list_of_graphcanvas) {
			const method = c[action];
			if (typeof method === "function") {
				const args = params == null ? [] : Array.isArray(params) ? params : [params];
				method.apply(c, args);
			}
		}
	}
	add(node, skipComputeOrderOrOptions) {
		if (!node) return;
		const opts = typeof skipComputeOrderOrOptions === "object" ? skipComputeOrderOrOptions : { skipComputeOrder: skipComputeOrderOrOptions ?? false };
		const shouldSkipComputeOrder = opts.skipComputeOrder ?? false;
		const { state } = this;
		if (LiteGraph.alwaysSnapToGrid) {
			const snapTo = this.getSnapToGridSize();
			if (snapTo) node.snapToGrid(snapTo);
		}
		if (node instanceof LGraphGroup) {
			if (node.id == null || node.id === -1) node.id = ++state.lastGroupId;
			if (node.id > state.lastGroupId) state.lastGroupId = node.id;
			this._groups.push(node);
			this.setDirtyCanvas(true);
			this.change();
			node.graph = this;
			this._version++;
			return;
		}
		if (node.id != -1 && this._nodes_by_id[node.id] != null) {
			console.warn("LiteGraph: there is already a node with this ID, changing it");
			node.id = LiteGraph.use_uuids ? LiteGraph.uuidv4() : ++state.lastNodeId;
		}
		if (this._nodes.length >= LiteGraph.MAX_NUMBER_OF_NODES) throw "LiteGraph: max number of nodes in a graph reached";
		if (LiteGraph.use_uuids) {
			if (node.id == null || node.id == -1) node.id = LiteGraph.uuidv4();
		} else if (node.id == null || node.id == -1) node.id = ++state.lastNodeId;
		else if (typeof node.id === "number" && state.lastNodeId < node.id) state.lastNodeId = node.id;
		if (opts.ghost) node.flags.ghost = true;
		node.graph = this;
		this._version++;
		if (node.widgets) {
			for (const widget of node.widgets) if (isNodeBindable(widget)) widget.setNodeId(node.id);
		}
		this._nodes.push(node);
		this._nodes_by_id[node.id] = node;
		node.onAdded?.(this);
		if (this.config.align_to_grid) node.alignToGrid();
		if (!shouldSkipComputeOrder) this.updateExecutionOrder();
		this.onNodeAdded?.(node);
		this.setDirtyCanvas(true);
		this.change();
		if (opts.ghost) this.canvasAction((c) => c.startGhostPlacement(node, opts.dragEvent));
		if (node.isSubgraphNode?.()) forEachNode(node.subgraph, (innerNode) => {
			if (innerNode.isSubgraphNode()) this.subgraphs.set(innerNode.subgraph.id, innerNode.subgraph);
		});
		return node;
	}
	/**
	* Removes a node from the graph
	* @param node the instance of the node
	*/
	remove(node) {
		if (node instanceof LGraphGroup) {
			this.canvasAction((c) => c.deselect(node));
			const index = this._groups.indexOf(node);
			if (index != -1) this._groups.splice(index, 1);
			node.graph = void 0;
			this._version++;
			this.setDirtyCanvas(true, true);
			this.change();
			return;
		}
		if (this._nodes_by_id[node.id] == null) {
			console.warn("LiteGraph: node not found", node);
			return;
		}
		if (node.ignore_remove) {
			console.warn("LiteGraph: node cannot be removed", node);
			return;
		}
		this.beforeChange();
		const { inputs, outputs } = node;
		if (inputs) {
			for (const [i, slot] of inputs.entries()) if (slot.link != null) node.disconnectInput(i, true);
		}
		if (outputs) {
			for (const [i, slot] of outputs.entries()) if (slot.links?.length) node.disconnectOutput(i);
		}
		for (const link of this.floatingLinks.values()) if (link.origin_id === node.id || link.target_id === node.id) this.removeFloatingLink(link);
		if (node.isSubgraphNode()) {
			if (![this.rootGraph, ...this.rootGraph.subgraphs.values()].some((graph) => graph.nodes.some((candidate) => candidate !== node && candidate.isSubgraphNode() && candidate.type === node.subgraph.id))) {
				forEachNode(node.subgraph, (innerNode) => {
					innerNode.onRemoved?.();
					innerNode.graph?.onNodeRemoved?.(innerNode);
				});
				this.rootGraph.subgraphs.delete(node.subgraph.id);
			}
		}
		node.onRemoved?.();
		node.graph = null;
		this._version++;
		const { list_of_graphcanvas } = this;
		if (list_of_graphcanvas) for (const canvas of list_of_graphcanvas) {
			if (canvas.selected_nodes[node.id]) delete canvas.selected_nodes[node.id];
			canvas.deselect(node);
		}
		const pos = this._nodes.indexOf(node);
		if (pos != -1) this._nodes.splice(pos, 1);
		delete this._nodes_by_id[node.id];
		this.onNodeRemoved?.(node);
		this.canvasAction((c) => c.checkPanels());
		this.setDirtyCanvas(true, true);
		this.afterChange();
		this.change();
		this.updateExecutionOrder();
	}
	/**
	* Returns a node by its id.
	*/
	getNodeById(id) {
		return id != null ? this._nodes_by_id[id] : null;
	}
	/**
	* Returns a list of nodes that matches a class
	* @param classObject the class itself (not an string)
	* @returns a list with all the nodes of this type
	*/
	findNodesByClass(classObject, result) {
		result = result || [];
		result.length = 0;
		const { _nodes } = this;
		for (const node of _nodes) if (node.constructor === classObject) result.push(node);
		return result;
	}
	/**
	* Returns a list of nodes that matches a type
	* @param type the name of the node type
	* @returns a list with all the nodes of this type
	*/
	findNodesByType(type, result) {
		const matchType = type.toLowerCase();
		result = result || [];
		result.length = 0;
		const { _nodes } = this;
		for (const node of _nodes) if (node.type?.toLowerCase() == matchType) result.push(node);
		return result;
	}
	/**
	* Returns the first node that matches a name in its title
	* @param title the name of the node to search
	* @returns the node or null
	*/
	findNodeByTitle(title) {
		const { _nodes } = this;
		for (const node of _nodes) if (node.title == title) return node;
		return null;
	}
	/**
	* Returns a list of nodes that matches a name
	* @param title the name of the node to search
	* @returns a list with all the nodes with this name
	*/
	findNodesByTitle(title) {
		const result = [];
		const { _nodes } = this;
		for (const node of _nodes) if (node.title == title) result.push(node);
		return result;
	}
	/**
	* Returns the top-most node in this position of the canvas
	* @param x the x coordinate in canvas space
	* @param y the y coordinate in canvas space
	* @param nodeList a list with all the nodes to search from, by default is all the nodes in the graph
	* @returns the node at this position or null
	*/
	getNodeOnPos(x, y, nodeList) {
		const nodes = nodeList || this._nodes;
		let i = nodes.length;
		while (--i >= 0) {
			const node = nodes[i];
			if (node.isPointInside(x, y)) return node;
		}
		return null;
	}
	/**
	* Returns the top-most group in that position
	* @param x The x coordinate in canvas space
	* @param y The y coordinate in canvas space
	* @returns The group or null
	*/
	getGroupOnPos(x, y) {
		for (let i = this._groups.length - 1; i >= 0; i--) {
			const group = this._groups[i];
			if (group.isPointInside(x, y)) return group;
		}
	}
	/**
	* Returns the top-most group with a titlebar in the provided position.
	* @param x The x coordinate in canvas space
	* @param y The y coordinate in canvas space
	* @returns The group or null
	*/
	getGroupTitlebarOnPos(x, y) {
		for (let i = this._groups.length - 1; i >= 0; i--) {
			const group = this._groups[i];
			if (group.isPointInTitlebar(x, y)) return group;
		}
	}
	/**
	* Finds a reroute a the given graph point
	* @param x X co-ordinate in graph space
	* @param y Y co-ordinate in graph space
	* @returns The first reroute under the given co-ordinates, or undefined
	*/
	getRerouteOnPos(x, y, reroutes) {
		for (const reroute of reroutes ?? this.reroutes.values()) if (reroute.containsPoint([x, y])) return reroute;
	}
	/**
	* Snaps the provided items to a grid.
	*
	* Item positions are rounded to the nearest multiple of {@link LiteGraph.CANVAS_GRID_SIZE}.
	*
	* When {@link LiteGraph.alwaysSnapToGrid} is enabled
	* and the grid size is falsy, a default of 1 is used.
	* @param items The items to be snapped to the grid
	* @todo Currently only snaps nodes.
	*/
	snapToGrid(items) {
		const snapTo = this.getSnapToGridSize();
		if (!snapTo) return;
		for (const item of getAllNestedItems(items)) if (!item.pinned) item.snapToGrid(snapTo);
	}
	/**
	* Finds the size of the grid that items should be snapped to when moved.
	* @returns The size of the grid that items should be snapped to
	*/
	getSnapToGridSize() {
		return LiteGraph.alwaysSnapToGrid ? LiteGraph.CANVAS_GRID_SIZE || 1 : LiteGraph.CANVAS_GRID_SIZE;
	}
	/**
	* @deprecated Will be removed in 0.9
	* Checks that the node type matches the node type registered,
	* used when replacing a nodetype by a newer version during execution
	* this replaces the ones using the old version with the new version
	*/
	checkNodeTypes() {
		const { _nodes } = this;
		for (const [i, node] of _nodes.entries()) {
			const ctor = LiteGraph.registered_node_types[node.type];
			if (node.constructor == ctor) continue;
			console.warn("node being replaced by newer version:", node.type);
			const newnode = LiteGraph.createNode(node.type);
			if (!newnode) continue;
			_nodes[i] = newnode;
			newnode.configure(node.serialize());
			newnode.graph = this;
			this._nodes_by_id[newnode.id] = newnode;
			if (node.inputs) newnode.inputs = [...node.inputs];
			if (node.outputs) newnode.outputs = [...node.outputs];
		}
		this.updateExecutionOrder();
	}
	trigger(action, param) {
		if (new Set([
			"node:slot-links:changed",
			"node:slot-errors:changed",
			"node:property:changed",
			"node:slot-label:changed"
		]).has(action) && param && typeof param === "object") this.onTrigger?.({
			type: action,
			...param
		});
	}
	/** @todo Clean up - never implemented. */
	triggerInput(name, value) {
		const nodes = this.findNodesByTitle(name);
		for (const node of nodes) node.onTrigger(value);
	}
	/** @todo Clean up - never implemented. */
	setCallback(name, func) {
		const nodes = this.findNodesByTitle(name);
		for (const node of nodes) node.setTrigger(func);
	}
	beforeChange(info) {
		this.onBeforeChange?.(this, info);
		this.canvasAction((c) => c.onBeforeChange?.(this));
	}
	afterChange(info) {
		this.onAfterChange?.(this, info);
		this.canvasAction((c) => c.onAfterChange?.(this));
	}
	/**
	* clears the triggered slot animation in all links (stop visual animation)
	*/
	clearTriggeredSlots() {
		for (const link_info of this._links.values()) {
			if (!link_info) continue;
			if (link_info._last_time) link_info._last_time = 0;
		}
	}
	change() {
		this.canvasAction((c) => c.setDirty(true, true));
		this.on_change?.(this);
	}
	setDirtyCanvas(fg, bg) {
		this.canvasAction((c) => c.setDirty(fg, bg));
	}
	addFloatingLink(link) {
		if (link.id === -1) link.id = ++this._lastFloatingLinkId;
		this.floatingLinksInternal.set(link.id, link);
		const slot = link.target_id !== -1 ? this.getNodeById(link.target_id)?.inputs?.[link.target_slot] : this.getNodeById(link.origin_id)?.outputs?.[link.origin_slot];
		if (slot) {
			slot._floatingLinks ??= /* @__PURE__ */ new Set();
			slot._floatingLinks.add(link);
		} else console.warn(`Adding invalid floating link: target/slot: [${link.target_id}/${link.target_slot}] origin/slot: [${link.origin_id}/${link.origin_slot}]`);
		const reroutes = LLink.getReroutes(this, link);
		for (const reroute of reroutes) reroute.floatingLinkIds.add(link.id);
		return link;
	}
	removeFloatingLink(link) {
		this.floatingLinksInternal.delete(link.id);
		const slot = link.target_id !== -1 ? this.getNodeById(link.target_id)?.inputs?.[link.target_slot] : this.getNodeById(link.origin_id)?.outputs?.[link.origin_slot];
		if (slot) slot._floatingLinks?.delete(link);
		const reroutes = LLink.getReroutes(this, link);
		for (const reroute of reroutes) {
			reroute.floatingLinkIds.delete(link.id);
			if (reroute.floatingLinkIds.size === 0) delete reroute.floating;
			if (reroute.totalLinks === 0) this.removeReroute(reroute.id);
		}
	}
	getLink(id) {
		return id == null ? void 0 : this._links.get(id);
	}
	getReroute(id) {
		return id == null ? void 0 : this.reroutes.get(id);
	}
	/**
	* Configures a reroute on the graph where ID is already known (probably deserialisation).
	* Creates the object if it does not exist.
	* @param serialisedReroute See {@link SerialisableReroute}
	*/
	setReroute({ id, parentId, pos, linkIds, floating }) {
		id ??= ++this.state.lastRerouteId;
		if (id > this.state.lastRerouteId) this.state.lastRerouteId = id;
		const reroute = this.reroutes.get(id) ?? new Reroute(id, this);
		reroute.update(parentId, pos, linkIds, floating);
		this.reroutes.set(id, reroute);
		return reroute;
	}
	/**
	* Creates a new reroute and adds it to the graph.
	* @param pos Position in graph space
	* @param before The existing link segment (reroute, link) that will be after this reroute,
	* going from the node output to input.
	* @returns The newly created reroute - typically ignored.
	*/
	createReroute(pos, before) {
		const layoutMutations = useLayoutMutations();
		const rerouteId = ++this.state.lastRerouteId;
		const linkIds = before instanceof Reroute ? before.linkIds : [before.id];
		const floatingLinkIds = before instanceof Reroute ? before.floatingLinkIds : [before.id];
		const reroute = new Reroute(rerouteId, this, pos, before.parentId, linkIds, floatingLinkIds);
		this.reroutes.set(rerouteId, reroute);
		layoutMutations.setSource(LayoutSource.Canvas);
		layoutMutations.createReroute(rerouteId, {
			x: pos[0],
			y: pos[1]
		}, before.parentId, Array.from(linkIds));
		for (const linkId of linkIds) {
			const link = this._links.get(linkId);
			if (!link) continue;
			if (link.parentId === before.parentId) link.parentId = rerouteId;
			const reroutes = LLink.getReroutes(this, link);
			for (const x of reroutes.filter((x) => x.parentId === before.parentId)) x.parentId = rerouteId;
		}
		for (const linkId of floatingLinkIds) {
			const link = this.floatingLinks.get(linkId);
			if (!link) continue;
			if (link.parentId === before.parentId) link.parentId = rerouteId;
			const reroutes = LLink.getReroutes(this, link);
			for (const x of reroutes.filter((x) => x.parentId === before.parentId)) x.parentId = rerouteId;
		}
		return reroute;
	}
	/**
	* Removes a reroute from the graph
	* @param id ID of reroute to remove
	*/
	removeReroute(id) {
		const layoutMutations = useLayoutMutations();
		const { reroutes } = this;
		const reroute = reroutes.get(id);
		if (!reroute) return;
		this.canvasAction((c) => c.deselect(reroute));
		const { parentId, linkIds, floatingLinkIds } = reroute;
		for (const reroute of reroutes.values()) if (reroute.parentId === id) reroute.parentId = parentId;
		for (const linkId of linkIds) {
			const link = this._links.get(linkId);
			if (link && link.parentId === id) link.parentId = parentId;
		}
		for (const linkId of floatingLinkIds) {
			const link = this.floatingLinks.get(linkId);
			if (!link) {
				console.warn(`Removed reroute had floating link ID that did not exist [${linkId}]`);
				continue;
			}
			const floatingReroutes = LLink.getReroutes(this, link);
			const lastReroute = floatingReroutes.at(-1);
			const secondLastReroute = floatingReroutes.at(-2);
			if (reroute !== lastReroute) continue;
			else if (secondLastReroute?.totalLinks !== 1) this.removeFloatingLink(link);
			else if (link.parentId === id) {
				link.parentId = parentId;
				secondLastReroute.floating = reroute.floating;
			}
		}
		reroutes.delete(id);
		layoutMutations.setSource(LayoutSource.Canvas);
		layoutMutations.deleteReroute(id);
		this.setDirtyCanvas(false, true);
	}
	/**
	* Destroys a link
	*/
	removeLink(link_id) {
		const link = this._links.get(link_id);
		if (!link) return;
		this.getNodeById(link.target_id)?.disconnectInput(link.target_slot, false);
		link.disconnect(this);
	}
	/**
	* Removes duplicate links that share the same connection tuple
	* (origin_id, origin_slot, target_id, target_slot). Keeps the link
	* referenced by input.link and removes orphaned duplicates from
	* output.links and the graph's _links map.
	*
	* Three phases: group links by tuple, select the survivor, purge duplicates.
	*/
	_removeDuplicateLinks() {
		const groups = groupLinksByTuple(this._links);
		for (const ids of groups.values()) {
			if (ids.length <= 1) continue;
			const sampleLink = this._links.get(ids[0]);
			const node = this.getNodeById(sampleLink.target_id);
			const keepId = selectSurvivorLink(ids, node);
			purgeOrphanedLinks(ids, keepId, this._links, (id) => this.getNodeById(id));
			repairInputLinks(ids, keepId, node);
		}
	}
	/**
	* Creates a new subgraph definition, and adds it to the graph.
	* @param data Exported data (typically serialised) to configure the new subgraph with
	* @returns The newly created subgraph definition.
	*/
	createSubgraph(data) {
		const { id } = data;
		const subgraph = new Subgraph(this.rootGraph, data);
		this.subgraphs.set(id, subgraph);
		this.rootGraph.events.dispatch("subgraph-created", {
			subgraph,
			data
		});
		return subgraph;
	}
	convertToSubgraph(items) {
		if (items.size === 0) throw new Error("Cannot convert to subgraph: nothing to convert");
		this.beforeChange();
		try {
			return this._convertToSubgraphImpl(items);
		} finally {
			this.afterChange();
		}
	}
	_convertToSubgraphImpl(items) {
		const { state, revision, config } = this;
		const firstChild = [...items][0];
		if (items.size === 1 && firstChild instanceof LGraphGroup) {
			items = new Set([firstChild]);
			firstChild.recomputeInsideNodes();
			firstChild.children.forEach((n) => items.add(n));
		}
		const { boundaryLinks, boundaryFloatingLinks, internalLinks, boundaryInputLinks, boundaryOutputLinks } = getBoundaryLinks(this, items);
		const { nodes, reroutes, groups } = splitPositionables(items);
		const boundingRect = createBounds(items);
		if (!boundingRect) throw new Error("Failed to create bounding rect for subgraph");
		const resolvedInputLinks = boundaryInputLinks.map((x) => x.resolve(this));
		const resolvedOutputLinks = boundaryOutputLinks.map((x) => x.resolve(this));
		const clonedNodes = multiClone(nodes);
		const links = internalLinks.map((x) => x.asSerialisable());
		const internalReroutes = new Map([...reroutes].map((r) => [r.id, r]));
		const externalReroutes = new Map([...this.reroutes].filter(([id]) => !internalReroutes.has(id)));
		const inputs = mapSubgraphInputsAndLinks(resolvedInputLinks, links, internalReroutes);
		const outputs = mapSubgraphOutputsAndLinks(resolvedOutputLinks, links, externalReroutes);
		const data = {
			id: createUuidv4(),
			name: "New Subgraph",
			inputNode: {
				id: -10,
				bounding: [
					0,
					0,
					75,
					100
				]
			},
			outputNode: {
				id: -20,
				bounding: [
					0,
					0,
					75,
					100
				]
			},
			inputs,
			outputs,
			widgets: [],
			version: LGraph.serialisedSchemaVersion,
			state,
			revision,
			config,
			links,
			nodes: clonedNodes,
			reroutes: structuredClone([...reroutes].map((reroute) => reroute.asSerialisable())),
			groups: structuredClone([...groups].map((group) => group.serialize()))
		};
		const subgraph = this.createSubgraph(data);
		subgraph.configure(data);
		for (const node of subgraph.nodes) node.onGraphConfigured?.();
		for (const node of subgraph.nodes) node.onAfterGraphConfigured?.();
		subgraph.inputNode.arrange();
		subgraph.outputNode.arrange();
		const { boundingRect: inputRect } = subgraph.inputNode;
		const { boundingRect: outputRect } = subgraph.outputNode;
		alignOutsideContainer(inputRect, Alignment.MidLeft, boundingRect, [50, 0]);
		alignOutsideContainer(outputRect, Alignment.MidRight, boundingRect, [50, 0]);
		for (const resolved of resolvedInputLinks) resolved.inputNode?.disconnectInput(resolved.inputNode.inputs.indexOf(resolved.input), true);
		for (const resolved of resolvedOutputLinks) resolved.outputNode?.disconnectOutput(resolved.outputNode.outputs.indexOf(resolved.output), resolved.inputNode);
		for (const node of nodes) this.remove(node);
		for (const reroute of reroutes) this.removeReroute(reroute.id);
		for (const group of groups) this.remove(group);
		this.rootGraph.events.dispatch("convert-to-subgraph", {
			subgraph,
			bounds: boundingRect,
			exportedSubgraph: data,
			boundaryLinks,
			resolvedInputLinks,
			resolvedOutputLinks,
			boundaryFloatingLinks,
			internalLinks
		});
		const subgraphNode = LiteGraph.createNode(subgraph.id, subgraph.name, { outputs: structuredClone(outputs) });
		if (!subgraphNode) throw new Error("Failed to create subgraph node");
		for (let i = 0; i < inputs.length; i++) Object.assign(subgraphNode.inputs[i], inputs[i]);
		subgraphNode.setSize(subgraphNode.computeSize());
		alignToContainer(subgraphNode._posSize, Alignment.Centre | Alignment.Middle, boundingRect);
		subgraphNode.setPos(subgraphNode.pos[0], subgraphNode.pos[1] + LiteGraph.NODE_TITLE_HEIGHT / 2);
		this.add(subgraphNode);
		const groupedByOutput = groupResolvedByOutput(resolvedInputLinks);
		let i = 0;
		for (const [, connections] of groupedByOutput.entries()) {
			const [firstResolved, ...others] = connections;
			const { output, outputNode, link, subgraphInput } = firstResolved;
			i++;
			if (link.origin_id === -10) {
				link.target_id = subgraphNode.id;
				link.target_slot = i - 1;
				if (subgraphInput instanceof SubgraphInput) subgraphInput.connect(subgraphNode.findInputSlotByType(link.type, true, true), subgraphNode, link.parentId);
				else throw new TypeError("Subgraph input node is not a SubgraphInput");
				for (const resolved of others) resolved.link.disconnect(this);
				continue;
			}
			if (!output || !outputNode) {
				console.warn("Convert to Subgraph reconnect: Failed to resolve input link", connections[0]);
				continue;
			}
			const input = subgraphNode.inputs[i - 1];
			outputNode.connectSlots(output, subgraphNode, input, link.parentId);
		}
		const outputsGroupedByOutput = groupResolvedByOutput(resolvedOutputLinks);
		i = 0;
		for (const [, connections] of outputsGroupedByOutput.entries()) {
			i++;
			for (const connection of connections) {
				const { input, inputNode, link, subgraphOutput } = connection;
				if (link.target_id === -20) {
					link.origin_id = subgraphNode.id;
					link.origin_slot = i - 1;
					this.links.set(link.id, link);
					if (subgraphOutput instanceof SubgraphOutput) subgraphOutput.connect(subgraphNode.findOutputSlotByType(link.type, true, true), subgraphNode, link.parentId);
					else throw new TypeError("Subgraph input node is not a SubgraphInput");
					continue;
				}
				if (!input || !inputNode) {
					console.warn("Convert to Subgraph reconnect: Failed to resolve output link", connection);
					continue;
				}
				const output = subgraphNode.outputs[i - 1];
				subgraphNode.connectSlots(output, inputNode, input, link.parentId);
			}
		}
		subgraphNode._setConcreteSlots();
		subgraphNode.arrange();
		if (!this.isRootGraph) this._repointAncestorPromotions(nodes, subgraphNode);
		this.canvasAction((c) => c.canvas.dispatchEvent(new CustomEvent("subgraph-converted", {
			bubbles: true,
			detail: { subgraphNode }
		})));
		return {
			subgraph,
			node: subgraphNode
		};
	}
	/**
	* After packing nodes into a nested subgraph, repoint any ancestor
	* SubgraphNode promotions that referenced the moved nodes so they
	* chain through the newly created nested SubgraphNode.
	*/
	_repointAncestorPromotions(movedNodes, nestedSubgraphNode) {
		const movedNodeIds = new Set([...movedNodes].map((n) => String(n.id)));
		const store = usePromotionStore();
		const nestedNodeId = String(nestedSubgraphNode.id);
		const graphId = this.rootGraph.id;
		const nestedEntries = store.getPromotions(graphId, nestedSubgraphNode.id);
		const nextNestedEntries = [...nestedEntries];
		const nestedEntryKeys = new Set(nestedEntries.map((entry) => makePromotionEntryKey(entry)));
		const hostUpdates = [];
		const allGraphs = [this.rootGraph, ...this.rootGraph._subgraphs.values()];
		for (const graph of allGraphs) for (const node of graph._nodes) {
			if (!node.isSubgraphNode() || node.type !== this.id) continue;
			const entries = store.getPromotions(graphId, node.id);
			const movedEntries = entries.filter((entry) => movedNodeIds.has(entry.sourceNodeId));
			if (movedEntries.length === 0) continue;
			for (const entry of movedEntries) {
				const key = makePromotionEntryKey(entry);
				if (nestedEntryKeys.has(key)) continue;
				nestedEntryKeys.add(key);
				nextNestedEntries.push(entry);
			}
			const nextEntries = entries.map((entry) => {
				if (!movedNodeIds.has(entry.sourceNodeId)) return entry;
				return {
					sourceNodeId: nestedNodeId,
					sourceWidgetName: entry.sourceWidgetName,
					disambiguatingSourceNodeId: entry.disambiguatingSourceNodeId ?? entry.sourceNodeId
				};
			});
			hostUpdates.push({
				node,
				entries: nextEntries
			});
		}
		if (nextNestedEntries.length !== nestedEntries.length) store.setPromotions(graphId, nestedSubgraphNode.id, nextNestedEntries);
		for (const { node, entries } of hostUpdates) {
			store.setPromotions(graphId, node.id, entries);
			node.rebuildInputWidgetBindings();
		}
	}
	unpackSubgraph(subgraphNode, options) {
		if (!(subgraphNode instanceof SubgraphNode)) throw new Error("Can only unpack Subgraph Nodes");
		this.beforeChange();
		try {
			this._unpackSubgraphImpl(subgraphNode, options);
		} finally {
			this.afterChange();
		}
	}
	_unpackSubgraphImpl(subgraphNode, options) {
		const skipMissingNodes = options?.skipMissingNodes ?? false;
		const bounds = createBounds([
			...subgraphNode.subgraph.nodes,
			...subgraphNode.subgraph.reroutes.values(),
			...subgraphNode.subgraph.groups
		].map((p) => {
			return { boundingRect: [
				p.pos[0],
				p.pos[1],
				p.size?.[0] ?? 0,
				p.size?.[1] ?? 0
			] };
		})) ?? [
			0,
			0,
			0,
			0
		];
		const center = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];
		const toSelect = [];
		const offsetX = subgraphNode.pos[0] - center[0] + subgraphNode.size[0] / 2;
		const offsetY = subgraphNode.pos[1] - center[1] + subgraphNode.size[1] / 2;
		const movedNodes = multiClone(subgraphNode.subgraph.nodes);
		const nodeIdMap = /* @__PURE__ */ new Map();
		for (const n_info of movedNodes) {
			let node = LiteGraph.createNode(String(n_info.type), n_info.title);
			if (!node) if (skipMissingNodes) {
				console.warn(`Cannot unpack node of type "${n_info.type}" - node type not found. Creating placeholder node.`);
				node = new LGraphNode(n_info.title || n_info.type || "Missing Node");
				node.last_serialization = n_info;
				node.has_errors = true;
				node.type = String(n_info.type);
			} else throw new Error(`Cannot unpack: node type "${n_info.type}" is not registered`);
			nodeIdMap.set(n_info.id, ++this.last_node_id);
			node.id = this.last_node_id;
			n_info.id = this.last_node_id;
			for (const input of n_info.inputs ?? []) input.link = null;
			for (const output of n_info.outputs ?? []) output.links = [];
			this.add(node, true);
			node.configure(n_info);
			node.setPos(node.pos[0] + offsetX, node.pos[1] + offsetY);
			toSelect.push(node);
		}
		const groups = structuredClone([...subgraphNode.subgraph.groups].map((g) => g.serialize()));
		for (const g_info of groups) {
			const group = new LGraphGroup(g_info.title, g_info.id);
			this.add(group, true);
			group.configure(g_info);
			group.pos[0] += offsetX;
			group.pos[1] += offsetY;
			toSelect.push(group);
		}
		for (const islot of subgraphNode.inputs) {
			if (!islot.link) continue;
			const link = this.links.get(islot.link);
			if (!link) {
				console.warn("Broken link", islot, islot.link);
				continue;
			}
			for (const reroute of LLink.getReroutes(this, link)) reroute.linkIds.delete(link.id);
		}
		for (const oslot of subgraphNode.outputs) for (const linkId of oslot.links ?? []) {
			const link = this.links.get(linkId);
			if (!link) {
				console.warn("Broken link", oslot, linkId);
				continue;
			}
			for (const reroute of LLink.getReroutes(this, link)) reroute.linkIds.delete(link.id);
		}
		const newLinks = [];
		for (const [, link] of subgraphNode.subgraph._links) {
			let externalParentId;
			if (link.origin_id === -10) {
				const outerLinkId = subgraphNode.inputs[link.origin_slot].link;
				if (!outerLinkId) {
					console.error("Missing Link ID when unpacking");
					continue;
				}
				const outerLink = this.links[outerLinkId];
				link.origin_id = outerLink.origin_id;
				link.origin_slot = outerLink.origin_slot;
				externalParentId = outerLink.parentId;
			} else {
				const origin_id = nodeIdMap.get(link.origin_id);
				if (!origin_id) {
					console.error("Missing Link ID when unpacking");
					continue;
				}
				link.origin_id = origin_id;
			}
			if (link.target_id === -20) {
				for (const linkId of subgraphNode.outputs[link.target_slot].links ?? []) {
					const sublink = this.links[linkId];
					newLinks.push({
						oid: link.origin_id,
						oslot: link.origin_slot,
						tid: sublink.target_id,
						tslot: sublink.target_slot,
						id: link.id,
						iparent: link.parentId,
						eparent: sublink.parentId,
						externalFirst: true
					});
					sublink.parentId = void 0;
				}
				continue;
			} else {
				const target_id = nodeIdMap.get(link.target_id);
				if (!target_id) {
					console.error("Missing Link ID when unpacking");
					continue;
				}
				link.target_id = target_id;
			}
			newLinks.push({
				oid: link.origin_id,
				oslot: link.origin_slot,
				tid: link.target_id,
				tslot: link.target_slot,
				id: link.id,
				iparent: link.parentId,
				eparent: externalParentId,
				externalFirst: false
			});
		}
		this.remove(subgraphNode);
		const seenLinks = /* @__PURE__ */ new Set();
		const dedupedNewLinks = newLinks.filter((link) => {
			const key = `${link.oid}\0${link.oslot}\0${link.tid}\0${link.tslot}`;
			if (seenLinks.has(key)) return false;
			seenLinks.add(key);
			return true;
		});
		const linkIdMap = /* @__PURE__ */ new Map();
		for (const newLink of dedupedNewLinks) {
			let created;
			if (newLink.oid == -10) {
				if (!(this instanceof Subgraph)) {
					console.error("Ignoring link to subgraph outside subgraph");
					continue;
				}
				const tnode = this._nodes_by_id[newLink.tid];
				created = this.inputNode.slots[newLink.oslot].connect(tnode.inputs[newLink.tslot], tnode);
			} else if (newLink.tid == -20) {
				if (!(this instanceof Subgraph)) {
					console.error("Ignoring link to subgraph outside subgraph");
					continue;
				}
				const tnode = this._nodes_by_id[newLink.oid];
				created = this.outputNode.slots[newLink.tslot].connect(tnode.outputs[newLink.oslot], tnode);
			} else created = this._nodes_by_id[newLink.oid].connect(newLink.oslot, this._nodes_by_id[newLink.tid], newLink.tslot);
			if (!created) {
				console.error("Failed to create link");
				continue;
			}
			const linkIds = linkIdMap.get(newLink.id) ?? [];
			linkIds.push(created.id);
			if (!linkIdMap.has(newLink.id)) linkIdMap.set(newLink.id, linkIds);
			newLink.id = created.id;
		}
		const rerouteIdMap = /* @__PURE__ */ new Map();
		for (const reroute of subgraphNode.subgraph.reroutes.values()) {
			if (reroute.parentId !== void 0 && rerouteIdMap.get(reroute.parentId) === void 0) console.error("Missing Parent ID");
			const migratedReroute = new Reroute(++this.state.lastRerouteId, this, [reroute.pos[0] + offsetX, reroute.pos[1] + offsetY]);
			rerouteIdMap.set(reroute.id, migratedReroute.id);
			this.reroutes.set(migratedReroute.id, migratedReroute);
			toSelect.push(migratedReroute);
		}
		for (const newLink of dedupedNewLinks) {
			const linkInstance = this.links.get(newLink.id);
			if (!linkInstance) continue;
			let instance = linkInstance;
			let parentId = void 0;
			if (newLink.externalFirst) {
				parentId = newLink.eparent;
				while (parentId) {
					instance.parentId = parentId;
					instance = this.reroutes.get(parentId);
					if (!instance) {
						console.error("Broken Id link when unpacking");
						break;
					}
					if (instance.linkIds.has(linkInstance.id)) throw new Error("Infinite parentId loop");
					instance.linkIds.add(linkInstance.id);
					parentId = instance.parentId;
				}
			}
			if (!instance) continue;
			parentId = newLink.iparent;
			while (parentId) {
				const migratedId = rerouteIdMap.get(parentId);
				if (!migratedId) {
					console.error("Broken Id link when unpacking");
					break;
				}
				instance.parentId = migratedId;
				instance = this.reroutes.get(migratedId);
				if (!instance) {
					console.error("Broken Id link when unpacking");
					break;
				}
				if (instance.linkIds.has(linkInstance.id)) throw new Error("Infinite parentId loop");
				instance.linkIds.add(linkInstance.id);
				const oldReroute = subgraphNode.subgraph.reroutes.get(parentId);
				if (!oldReroute) {
					console.error("Broken Id link when unpacking");
					break;
				}
				parentId = oldReroute.parentId;
			}
			if (!instance) break;
			if (!newLink.externalFirst) {
				parentId = newLink.eparent;
				while (parentId) {
					instance.parentId = parentId;
					instance = this.reroutes.get(parentId);
					if (!instance) {
						console.error("Broken Id link when unpacking");
						break;
					}
					if (instance.linkIds.has(linkInstance.id)) throw new Error("Infinite parentId loop");
					instance.linkIds.add(linkInstance.id);
					parentId = instance.parentId;
				}
			}
		}
		for (const nodeId of nodeIdMap.values()) {
			const node = this._nodes_by_id[nodeId];
			node._setConcreteSlots();
			node.arrange();
		}
		this.canvasAction((c) => c.selectItems(toSelect));
	}
	/**
	* Resolve a path of subgraph node IDs into a list of subgraph nodes.
	* Not intended to be run from subgraphs.
	* @param nodeIds An ordered list of node IDs, from the root graph to the most nested subgraph node
	* @returns An ordered list of nested subgraph nodes.
	*/
	resolveSubgraphIdPath(nodeIds) {
		const result = [];
		let currentGraph = this.rootGraph;
		for (const nodeId of nodeIds) {
			const node = currentGraph.getNodeById(nodeId);
			if (!node) throw new Error(`Node [${nodeId}] not found.  ID Path: ${nodeIds.join(":")}`);
			if (!node.isSubgraphNode()) throw new Error(`Node [${nodeId}] is not a SubgraphNode.  ID Path: ${nodeIds.join(":")}`);
			result.push(node);
			currentGraph = node.subgraph;
		}
		return result;
	}
	/**
	* Creates a Object containing all the info about this graph, it can be serialized
	* @deprecated Use {@link asSerialisable}, which returns the newer schema version.
	* @returns value of the node
	*/
	serialize(option) {
		const { config, state, groups, nodes, reroutes, extra, floatingLinks, definitions } = this.asSerialisable(option);
		const linkArray = [...this._links.values()];
		const links = linkArray.map((x) => x.serialize());
		if (reroutes?.length) extra.linkExtensions = linkArray.filter((x) => x.parentId !== void 0).map((x) => ({
			id: x.id,
			parentId: x.parentId
		}));
		extra.reroutes = reroutes?.length ? reroutes : void 0;
		return {
			id: this.id,
			revision: this.revision,
			last_node_id: state.lastNodeId,
			last_link_id: state.lastLinkId,
			nodes,
			links,
			floatingLinks,
			groups,
			definitions,
			config,
			extra,
			version: LiteGraph.VERSION
		};
	}
	/**
	* Custom JSON serialization to prevent circular reference errors.
	* Called automatically by JSON.stringify().
	*/
	toJSON() {
		return this.serialize();
	}
	/** @returns The drag and scale state of the first attached canvas, otherwise `undefined`. */
	_getDragAndScale() {
		const ds = this.list_of_graphcanvas?.at(0)?.ds;
		if (ds) return {
			scale: ds.scale,
			offset: ds.offset
		};
	}
	/**
	* Prepares a shallow copy of this object for immediate serialisation or structuredCloning.
	* The return value should be discarded immediately.
	* @param options Serialise options = currently `sortNodes: boolean`, whether to sort nodes by ID.
	* @returns A shallow copy of parts of this graph, with shallow copies of its serialisable objects.
	* Mutating the properties of the return object may result in changes to your graph.
	* It is intended for use with {@link structuredClone} or {@link JSON.stringify}.
	*/
	asSerialisable(options) {
		const { id, revision, config, state } = this;
		const nodes = (!LiteGraph.use_uuids && options?.sortNodes ? [...this._nodes].sort((a, b) => a.id - b.id) : this._nodes).map((node) => node.serialize());
		const groups = this._groups.map((x) => x.serialize());
		const links = this._links.size ? [...this._links.values()].map((x) => x.asSerialisable()) : void 0;
		const floatingLinks = this.floatingLinks.size ? [...this.floatingLinks.values()].map((x) => x.asSerialisable()) : void 0;
		const reroutes = this.reroutes.size ? [...this.reroutes.values()].map((x) => x.asSerialisable()) : void 0;
		const extra = { ...this.extra };
		if (LiteGraph.saveViewportWithGraph) extra.ds = this._getDragAndScale();
		if (!extra.ds) delete extra.ds;
		const data = {
			id,
			revision,
			version: LGraph.serialisedSchemaVersion,
			config,
			state,
			groups,
			nodes,
			links,
			floatingLinks,
			reroutes,
			extra
		};
		if (this.isRootGraph && this._subgraphs.size) {
			const usedSubgraphIds = findUsedSubgraphIds(this, this._subgraphs);
			const usedSubgraphs = [...this._subgraphs.values()].filter((subgraph) => usedSubgraphIds.has(subgraph.id)).map((x) => x.asSerialisable());
			if (usedSubgraphs.length > 0) data.definitions = { subgraphs: usedSubgraphs };
		}
		this.onSerialize?.(data);
		return data;
	}
	_configureBase(data) {
		const { id, extra } = data;
		if (id) this.id = id;
		else if (this.id === "00000000-0000-0000-0000-000000000000") this.id = createUuidv4();
		this.extra = extra ? structuredClone(extra) : {};
		delete this.extra.linkExtensions;
	}
	/**
	* Configure a graph from a JSON string
	* @param data The deserialised object to configure this graph from
	* @param keep_old If `true`, the graph will not be cleared prior to
	* adding the configuration.
	*/
	configure(data, keep_old) {
		const layoutMutations = useLayoutMutations();
		const options = {
			data,
			clearGraph: !keep_old
		};
		if (!this.events.dispatch("configuring", options)) return;
		try {
			if (!data) return;
			if (options.clearGraph) this.clear();
			this._configureBase(data);
			let reroutes;
			if (data.version === .4) {
				const { extra } = data;
				if (Array.isArray(data.links)) for (const linkData of data.links) {
					const link = LLink.createFromArray(linkData);
					this._links.set(link.id, link);
				}
				if (Array.isArray(extra?.linkExtensions)) for (const linkEx of extra.linkExtensions) {
					const link = this._links.get(linkEx.id);
					if (link) link.parentId = linkEx.parentId;
				}
				reroutes = extra?.reroutes;
			} else {
				if (data.state) {
					const { lastGroupId, lastLinkId, lastNodeId, lastRerouteId } = data.state;
					const { state } = this;
					if (lastGroupId != null) state.lastGroupId = Math.max(state.lastGroupId, lastGroupId);
					if (lastLinkId != null) state.lastLinkId = Math.max(state.lastLinkId, lastLinkId);
					if (lastNodeId != null) state.lastNodeId = Math.max(state.lastNodeId, lastNodeId);
					if (lastRerouteId != null) state.lastRerouteId = Math.max(state.lastRerouteId, lastRerouteId);
				}
				if (Array.isArray(data.links)) for (const linkData of data.links) {
					const link = LLink.create(linkData);
					this._links.set(link.id, link);
				}
				reroutes = data.reroutes;
			}
			if (Array.isArray(reroutes)) for (const rerouteData of reroutes) this.setReroute(rerouteData);
			const nodesData = data.nodes;
			for (const i in data) {
				if (LGraph.ConfigureProperties.has(i)) continue;
				this[i] = data[i];
			}
			const subgraphs = data.definitions?.subgraphs;
			let effectiveNodesData = nodesData;
			if (subgraphs) {
				const reservedNodeIds = /* @__PURE__ */ new Set();
				for (const node of this._nodes) if (typeof node.id === "number") reservedNodeIds.add(node.id);
				for (const sg of this.subgraphs.values()) for (const node of sg.nodes) if (typeof node.id === "number") reservedNodeIds.add(node.id);
				for (const n of nodesData ?? []) if (typeof n.id === "number") reservedNodeIds.add(n.id);
				const deduplicated = this.isRootGraph ? deduplicateSubgraphNodeIds(subgraphs, reservedNodeIds, this.state, nodesData) : void 0;
				const finalSubgraphs = deduplicated?.subgraphs ?? subgraphs;
				effectiveNodesData = deduplicated?.rootNodes ?? nodesData;
				for (const subgraph of finalSubgraphs) this.createSubgraph(subgraph);
				const configureOrder = topologicalSortSubgraphs(finalSubgraphs);
				for (const subgraph of configureOrder) this.subgraphs.get(subgraph.id)?.configure(subgraph);
			}
			let error = false;
			const nodeDataMap = /* @__PURE__ */ new Map();
			this._nodes = [];
			if (effectiveNodesData) {
				for (const n_info of effectiveNodesData) {
					let node = LiteGraph.createNode(String(n_info.type), n_info.title);
					if (!node) {
						if (LiteGraph.debug) console.warn("Node not found or has errors:", n_info.type);
						node = new LGraphNode("");
						node.last_serialization = n_info;
						node.has_errors = true;
						error = true;
					}
					node.id = n_info.id;
					this.add(node, true);
					nodeDataMap.set(node.id, n_info);
				}
				for (const [id, nodeData] of nodeDataMap) {
					const node = this.getNodeById(id);
					node?.configure(nodeData);
					if (LiteGraph.alwaysSnapToGrid && node) {
						const snapTo = this.getSnapToGridSize();
						if (node.snapToGrid(snapTo)) node.pos = [node.pos[0], node.pos[1]];
						snapPoint(node.size, snapTo, "ceil");
					}
				}
			}
			if (Array.isArray(data.floatingLinks)) for (const linkData of data.floatingLinks) {
				const floatingLink = LLink.create(linkData);
				this.addFloatingLink(floatingLink);
				if (floatingLink.id > this._lastFloatingLinkId) this._lastFloatingLinkId = floatingLink.id;
			}
			for (const reroute of this.reroutes.values()) if (!reroute.validateLinks(this._links, this.floatingLinks)) {
				this.reroutes.delete(reroute.id);
				layoutMutations.setSource(LayoutSource.Canvas);
				layoutMutations.deleteReroute(reroute.id);
			}
			this._removeDuplicateLinks();
			this._groups.length = 0;
			const groupData = data.groups;
			if (groupData) for (const data of groupData) {
				const group = new LiteGraph.LGraphGroup();
				group.configure(data);
				this.add(group);
			}
			this.updateExecutionOrder();
			this.onConfigure?.(data);
			this._version++;
			const { primaryCanvas } = this;
			const subgraphId = primaryCanvas?.subgraph?.id;
			if (subgraphId) {
				const subgraph = this.subgraphs.get(subgraphId);
				if (subgraph) primaryCanvas.setGraph(subgraph);
				else primaryCanvas.setGraph(this);
			}
			this.setDirtyCanvas(true, true);
			return error;
		} finally {
			this.events.dispatch("configured");
		}
	}
	/**
	* Ensures all node IDs are globally unique across the root graph and all
	* subgraphs. Reassigns any colliding IDs found in subgraphs, preserving
	* root graph IDs as canonical. Updates link references (`origin_id`,
	* `target_id`) within the affected graph to match the new node IDs.
	*/
	ensureGlobalIdUniqueness(reservedNodeIds) {
		const { state } = this;
		const allGraphs = [this, ...this._subgraphs.values()];
		const usedNodeIds = new Set(reservedNodeIds);
		for (const graph of allGraphs) {
			const remappedIds = /* @__PURE__ */ new Map();
			for (const node of graph._nodes) {
				if (typeof node.id !== "number") continue;
				if (usedNodeIds.has(node.id)) {
					const oldId = node.id;
					while (usedNodeIds.has(++state.lastNodeId));
					const newId = state.lastNodeId;
					delete graph._nodes_by_id[oldId];
					node.id = newId;
					graph._nodes_by_id[newId] = node;
					usedNodeIds.add(newId);
					remappedIds.set(oldId, newId);
					console.warn(`LiteGraph: duplicate node ID ${oldId} reassigned to ${newId} in graph ${graph.id}`);
				} else {
					usedNodeIds.add(node.id);
					if (node.id > state.lastNodeId) state.lastNodeId = node.id;
				}
			}
			if (remappedIds.size > 0) {
				patchLinkNodeIds(graph._links, remappedIds);
				patchLinkNodeIds(graph.floatingLinksInternal, remappedIds);
			}
		}
	}
	_canvas;
	get primaryCanvas() {
		return this.rootGraph._canvas;
	}
	set primaryCanvas(canvas) {
		this.rootGraph._canvas = canvas;
	}
	load(url, callback) {
		if (url instanceof Blob || url instanceof File) {
			const reader = new FileReader();
			reader.addEventListener("load", (event) => {
				const result = toString(event.target?.result);
				const data = JSON.parse(result);
				this.configure(data);
				callback?.();
			});
			reader.readAsText(url);
			return;
		}
		const req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.send(null);
		req.addEventListener("load", () => {
			if (req.status !== 200) {
				console.error("Error loading graph:", req.status, req.response);
				return;
			}
			const data = JSON.parse(req.response);
			this.configure(data);
			callback?.();
		});
		req.addEventListener("error", (err) => {
			console.error("Error loading graph:", err);
		});
	}
};
/** A subgraph definition. */
var Subgraph = class Subgraph extends LGraph {
	events = new CustomEventTarget();
	/** Limits the number of levels / depth that subgraphs may be nested.  Prevents uncontrolled programmatic nesting. */
	static MAX_NESTED_SUBGRAPHS = 1e3;
	/** The display name of the subgraph. */
	name = "Unnamed Subgraph";
	/** Optional description shown as tooltip when hovering over the subgraph node. */
	description;
	inputNode = new SubgraphInputNode(this);
	outputNode = new SubgraphOutputNode(this);
	/** Ordered list of inputs to the subgraph itself. Similar to a reroute, with the input side in the graph, and the output side in the subgraph. */
	inputs = [];
	/** Ordered list of outputs from the subgraph itself. Similar to a reroute, with the input side in the subgraph, and the output side in the graph. */
	outputs = [];
	/** A list of node widgets displayed in the parent graph, on the subgraph object. */
	widgets = [];
	_rootGraph;
	get rootGraph() {
		return this._rootGraph;
	}
	get state() {
		return this._rootGraph.state;
	}
	set state(_value) {}
	constructor(rootGraph, data) {
		if (!rootGraph) throw new Error("Root graph is required");
		super();
		this._rootGraph = rootGraph;
		const cloned = structuredClone(data);
		this._configureBase(cloned);
		this._configureSubgraph(cloned);
	}
	getIoNodeOnPos(x, y) {
		const { inputNode, outputNode } = this;
		if (inputNode.containsPoint([x, y])) return inputNode;
		if (outputNode.containsPoint([x, y])) return outputNode;
	}
	_configureSubgraph(data) {
		const { name, description, inputs, outputs, widgets } = data;
		this.name = name;
		this.description = description;
		if (inputs) {
			this.inputs.length = 0;
			for (const input of inputs) {
				const subgraphInput = new SubgraphInput(input, this.inputNode);
				this.inputs.push(subgraphInput);
				this.events.dispatch("input-added", { input: subgraphInput });
			}
		}
		if (outputs) {
			this.outputs.length = 0;
			for (const output of outputs) this.outputs.push(new SubgraphOutput(output, this.outputNode));
		}
		this._repairIOSlotLinkIds();
		if (widgets) {
			this.widgets.length = 0;
			for (const widget of widgets) this.widgets.push(widget);
		}
		this.inputNode.configure(data.inputNode);
		this.outputNode.configure(data.outputNode);
		for (const node of this.nodes) node.updateComputedDisabled();
	}
	configure(data, keep_old) {
		const r = super.configure(data, keep_old);
		this._configureSubgraph(data);
		return r;
	}
	/**
	* Repairs SubgraphInput/Output `linkIds` that reference links removed
	* by `_removeDuplicateLinks` during `super.configure()`.
	*
	* For each stale link ID, finds the surviving link that connects to the
	* same IO node and slot index, and substitutes it.
	*/
	_repairIOSlotLinkIds() {
		for (const [slotIndex, slot] of this.inputs.entries()) this._repairSlotLinkIds(slot.linkIds, -10, slotIndex);
		for (const [slotIndex, slot] of this.outputs.entries()) this._repairSlotLinkIds(slot.linkIds, -20, slotIndex);
	}
	_repairSlotLinkIds(linkIds, ioNodeId, slotIndex) {
		linkIds.map((id) => this._links.has(id) ? id : this._findLinkBySlot(ioNodeId, slotIndex)?.id ?? id).forEach((id, i) => {
			linkIds[i] = id;
		});
	}
	_findLinkBySlot(nodeId, slotIndex) {
		for (const link of this._links.values()) if (link.origin_id === nodeId && link.origin_slot === slotIndex || link.target_id === nodeId && link.target_slot === slotIndex) return link;
	}
	attachCanvas(canvas) {
		super.attachCanvas(canvas);
		canvas.subgraph = this;
	}
	addInput(name, type) {
		if (name === null || type === null) throw new Error("Name and type are required for subgraph input");
		this.events.dispatch("adding-input", {
			name,
			type
		});
		const input = new SubgraphInput({
			id: createUuidv4(),
			name,
			type
		}, this.inputNode);
		this.inputs.push(input);
		this.events.dispatch("input-added", { input });
		return input;
	}
	addOutput(name, type) {
		if (name === null || type === null) throw new Error("Name and type are required for subgraph output");
		this.events.dispatch("adding-output", {
			name,
			type
		});
		const output = new SubgraphOutput({
			id: createUuidv4(),
			name,
			type
		}, this.outputNode);
		this.outputs.push(output);
		this.events.dispatch("output-added", { output });
		return output;
	}
	/**
	* Renames an input slot in the subgraph.
	* @param input The input slot to rename.
	* @param name The new name for the input slot.
	*/
	renameInput(input, name) {
		const index = this.inputs.indexOf(input);
		if (index === -1) throw new Error("Input not found");
		const oldName = input.displayName;
		this.events.dispatch("renaming-input", {
			input,
			index,
			oldName,
			newName: name
		});
		input.label = name;
	}
	/**
	* Renames an output slot in the subgraph.
	* @param output The output slot to rename.
	* @param name The new name for the output slot.
	*/
	renameOutput(output, name) {
		const index = this.outputs.indexOf(output);
		if (index === -1) throw new Error("Output not found");
		const oldName = output.displayName;
		this.events.dispatch("renaming-output", {
			output,
			index,
			oldName,
			newName: name
		});
		output.label = name;
	}
	/**
	* Removes an input slot from the subgraph.
	* @param input The input slot to remove.
	*/
	removeInput(input) {
		const index = this.inputs.indexOf(input);
		if (index === -1) throw new Error("Input not found");
		if (!this.events.dispatch("removing-input", {
			input,
			index
		})) return;
		input.disconnect();
		this.inputs.splice(index, 1);
		const { length } = this.inputs;
		for (let i = index; i < length; i++) this.inputs[i].decrementSlots("inputs");
	}
	/**
	* Removes an output slot from the subgraph.
	* @param output The output slot to remove.
	*/
	removeOutput(output) {
		const index = this.outputs.indexOf(output);
		if (index === -1) throw new Error("Output not found");
		if (!this.events.dispatch("removing-output", {
			output,
			index
		})) return;
		output.disconnect();
		this.outputs.splice(index, 1);
		const { length } = this.outputs;
		for (let i = index; i < length; i++) this.outputs[i].decrementSlots("outputs");
	}
	draw(ctx, colorContext, fromSlot, editorAlpha) {
		this.inputNode.draw(ctx, colorContext, fromSlot, editorAlpha);
		this.outputNode.draw(ctx, colorContext, fromSlot, editorAlpha);
	}
	/**
	* Clones the subgraph, creating an identical copy with a new ID.
	* @returns A new subgraph with the same configuration, but a new ID.
	*/
	clone(keepId = false) {
		const exported = this.asSerialisable();
		if (!keepId) exported.id = createUuidv4();
		const subgraph = new Subgraph(this.rootGraph, exported);
		subgraph.configure(exported);
		return subgraph;
	}
	asSerialisable() {
		return {
			id: this.id,
			version: LGraph.serialisedSchemaVersion,
			state: this.state,
			revision: this.revision,
			config: this.config,
			name: this.name,
			...this.description && { description: this.description },
			inputNode: this.inputNode.asSerialisable(),
			outputNode: this.outputNode.asSerialisable(),
			inputs: this.inputs.map((x) => x.asSerialisable()),
			outputs: this.outputs.map((x) => x.asSerialisable()),
			widgets: [...this.widgets],
			nodes: this.nodes.map((node) => node.serialize()),
			groups: this.groups.map((group) => group.serialize()),
			links: [...this.links.values()].map((x) => x.asSerialisable()),
			reroutes: this.reroutes.size ? [...this.reroutes.values()].map((x) => x.asSerialisable()) : void 0,
			extra: this.extra
		};
	}
};
function patchLinkNodeIds(links, remappedIds) {
	for (const link of links.values()) {
		const newOrigin = remappedIds.get(link.origin_id);
		if (newOrigin !== void 0) link.origin_id = newOrigin;
		const newTarget = remappedIds.get(link.target_id);
		if (newTarget !== void 0) link.target_id = newTarget;
	}
}
//#endregion
//#region src/lib/litegraph/src/canvas/InputIndicators.ts
/**
* A class that can be added to the render cycle to show pointer / keyboard status symbols.
*
* Used to create videos of feature changes.
*
* Example usage with ComfyUI_frontend, via console / devtools:
*
* ```ts
* const inputIndicators = new InputIndicators(canvas)
* // Dispose:
* inputIndicators.dispose()
* ```
*/
var InputIndicators = class {
	radius = 8;
	startAngle = 0;
	endAngle = Math.PI * 2;
	inactiveColour = "#ffffff10";
	colour1 = "#ff5f00";
	colour2 = "#00ff7c";
	colour3 = "#dea7ff";
	fontString = "bold 12px Inter, sans-serif";
	enabled = true;
	shiftDown = false;
	undoDown = false;
	redoDown = false;
	ctrlDown = false;
	altDown = false;
	mouse0Down = false;
	mouse1Down = false;
	mouse2Down = false;
	x = 0;
	y = 0;
	controller;
	constructor(canvas) {
		this.canvas = canvas;
		this.controller = new AbortController();
		const { signal } = this.controller;
		const element = canvas.canvas;
		const options = {
			capture: true,
			signal
		};
		element.addEventListener("pointerdown", this._onPointerDownOrMove, options);
		element.addEventListener("pointermove", this._onPointerDownOrMove, options);
		element.addEventListener("pointerup", this._onPointerUp, options);
		element.addEventListener("keydown", this._onKeyDownOrUp, options);
		document.addEventListener("keyup", this._onKeyDownOrUp, options);
		const origDrawFrontCanvas = canvas.drawFrontCanvas.bind(canvas);
		signal.addEventListener("abort", () => {
			canvas.drawFrontCanvas = origDrawFrontCanvas;
		});
		canvas.drawFrontCanvas = () => {
			origDrawFrontCanvas();
			this.draw();
		};
	}
	_onPointerDownOrMove = this.onPointerDownOrMove.bind(this);
	onPointerDownOrMove(e) {
		this.mouse0Down = (e.buttons & 1) === 1;
		this.mouse1Down = (e.buttons & 4) === 4;
		this.mouse2Down = (e.buttons & 2) === 2;
		this.x = e.clientX;
		this.y = e.clientY;
		this.canvas.setDirty(true);
	}
	_onPointerUp = this.onPointerUp.bind(this);
	onPointerUp() {
		this.mouse0Down = false;
		this.mouse1Down = false;
		this.mouse2Down = false;
	}
	_onKeyDownOrUp = this.onKeyDownOrUp.bind(this);
	onKeyDownOrUp(e) {
		this.ctrlDown = e.ctrlKey;
		this.altDown = e.altKey;
		this.shiftDown = e.shiftKey;
		this.undoDown = e.ctrlKey && e.code === "KeyZ" && e.type === "keydown";
		this.redoDown = e.ctrlKey && e.code === "KeyY" && e.type === "keydown";
	}
	draw() {
		const { canvas: { ctx }, radius, startAngle, endAngle, x, y, inactiveColour, colour1, colour2, colour3, fontString } = this;
		const { fillStyle, font } = ctx;
		const mouseDotX = x;
		const mouseDotY = y - 80;
		const textX = mouseDotX;
		const textY = mouseDotY - 15;
		ctx.font = fontString;
		textMarker(textX + 0, textY, "Shift", this.shiftDown ? colour1 : inactiveColour);
		textMarker(textX + 45, textY + 20, "Alt", this.altDown ? colour2 : inactiveColour);
		textMarker(textX + 30, textY, "Control", this.ctrlDown ? colour3 : inactiveColour);
		textMarker(textX - 30, textY, "↩️", this.undoDown ? "#000" : "transparent");
		textMarker(textX + 45, textY, "↪️", this.redoDown ? "#000" : "transparent");
		ctx.beginPath();
		drawDot(mouseDotX, mouseDotY);
		drawDot(mouseDotX + 15, mouseDotY);
		drawDot(mouseDotX + 30, mouseDotY);
		ctx.fillStyle = inactiveColour;
		ctx.fill();
		const leftButtonColour = this.mouse0Down ? colour1 : inactiveColour;
		const middleButtonColour = this.mouse1Down ? colour2 : inactiveColour;
		const rightButtonColour = this.mouse2Down ? colour3 : inactiveColour;
		if (this.mouse0Down) mouseMarker(mouseDotX, mouseDotY, leftButtonColour);
		if (this.mouse1Down) mouseMarker(mouseDotX + 15, mouseDotY, middleButtonColour);
		if (this.mouse2Down) mouseMarker(mouseDotX + 30, mouseDotY, rightButtonColour);
		ctx.fillStyle = fillStyle;
		ctx.font = font;
		function textMarker(x, y, text, colour) {
			ctx.fillStyle = colour;
			ctx.fillText(text, x, y);
		}
		function mouseMarker(x, y, colour) {
			ctx.beginPath();
			ctx.fillStyle = colour;
			drawDot(x, y);
			ctx.fill();
		}
		function drawDot(x, y) {
			ctx.arc(x, y, radius, startAngle, endAngle);
		}
	}
	dispose() {
		this.controller?.abort();
		this.controller = void 0;
	}
	[Symbol.dispose]() {
		this.dispose();
	}
};
//#endregion
//#region src/lib/litegraph/src/LiteGraphGlobal.ts
/**
* The Global Scope. It contains all the registered node classes.
*/
var LiteGraphGlobal = class {
	SlotShape = SlotShape;
	SlotDirection = SlotDirection;
	SlotType = SlotType;
	LabelPosition = LabelPosition;
	/** Used in serialised graphs at one point. */
	VERSION = .4;
	CANVAS_GRID_SIZE = 10;
	NODE_TITLE_HEIGHT = 30;
	NODE_TITLE_TEXT_Y = 20;
	NODE_SLOT_HEIGHT = 20;
	NODE_WIDGET_HEIGHT = 20;
	NODE_WIDTH = 140;
	NODE_MIN_WIDTH = 50;
	NODE_COLLAPSED_RADIUS = 10;
	NODE_COLLAPSED_WIDTH = 80;
	NODE_TITLE_COLOR = "#999";
	NODE_SELECTED_TITLE_COLOR = "#FFF";
	NODE_TEXT_SIZE = 14;
	NODE_TEXT_COLOR = "#AAA";
	NODE_TEXT_HIGHLIGHT_COLOR = "#EEE";
	NODE_SUBTEXT_SIZE = 12;
	NODE_DEFAULT_COLOR = "#333";
	NODE_DEFAULT_BGCOLOR = "#353535";
	NODE_DEFAULT_BOXCOLOR = "#666";
	NODE_DEFAULT_SHAPE = RenderShape.ROUND;
	NODE_BOX_OUTLINE_COLOR = "#FFF";
	NODE_ERROR_COLOUR = "#E00";
	NODE_FONT = "Inter";
	NODE_DEFAULT_BYPASS_COLOR = "#FF00FF";
	NODE_OPACITY = .9;
	DEFAULT_FONT = "Inter";
	DEFAULT_SHADOW_COLOR = "rgba(0,0,0,0.5)";
	GROUP_TEXT_SIZE = 20;
	GROUP_FONT = "Inter";
	WIDGET_BGCOLOR = "#222";
	WIDGET_OUTLINE_COLOR = "#666";
	WIDGET_PROMOTED_OUTLINE_COLOR = "#BF00FF";
	WIDGET_ADVANCED_OUTLINE_COLOR = "rgba(56, 139, 253, 0.8)";
	WIDGET_TEXT_COLOR = "#DDD";
	WIDGET_SECONDARY_TEXT_COLOR = "#999";
	WIDGET_DISABLED_TEXT_COLOR = "#666";
	LINK_COLOR = "#9A9";
	EVENT_LINK_COLOR = "#A86";
	CONNECTING_LINK_COLOR = "#AFA";
	/** avoid infinite loops */
	MAX_NUMBER_OF_NODES = 1e4;
	/** default node position */
	DEFAULT_POSITION = [100, 100];
	/** ,"circle" */
	VALID_SHAPES = [
		"default",
		"box",
		"round",
		"card"
	];
	ROUND_RADIUS = 8;
	BOX_SHAPE = RenderShape.BOX;
	ROUND_SHAPE = RenderShape.ROUND;
	CIRCLE_SHAPE = RenderShape.CIRCLE;
	CARD_SHAPE = RenderShape.CARD;
	ARROW_SHAPE = RenderShape.ARROW;
	/** intended for slot arrays */
	GRID_SHAPE = RenderShape.GRID;
	INPUT = NodeSlotType.INPUT;
	OUTPUT = NodeSlotType.OUTPUT;
	/** for outputs */
	EVENT = -1;
	/** for inputs */
	ACTION = -1;
	/** helper, will add "On Request" and more in the future */
	NODE_MODES = [
		"Always",
		"On Event",
		"Never",
		"On Trigger"
	];
	/** use with node_box_coloured_by_mode */
	NODE_MODES_COLORS = [
		"#666",
		"#422",
		"#333",
		"#224",
		"#626"
	];
	ALWAYS = LGraphEventMode.ALWAYS;
	ON_EVENT = LGraphEventMode.ON_EVENT;
	NEVER = LGraphEventMode.NEVER;
	ON_TRIGGER = LGraphEventMode.ON_TRIGGER;
	UP = LinkDirection.UP;
	DOWN = LinkDirection.DOWN;
	LEFT = LinkDirection.LEFT;
	RIGHT = LinkDirection.RIGHT;
	CENTER = LinkDirection.CENTER;
	/** helper */
	LINK_RENDER_MODES = [
		"Straight",
		"Linear",
		"Spline"
	];
	HIDDEN_LINK = LinkRenderType.HIDDEN_LINK;
	STRAIGHT_LINK = LinkRenderType.STRAIGHT_LINK;
	LINEAR_LINK = LinkRenderType.LINEAR_LINK;
	SPLINE_LINK = LinkRenderType.SPLINE_LINK;
	NORMAL_TITLE = TitleMode.NORMAL_TITLE;
	NO_TITLE = TitleMode.NO_TITLE;
	TRANSPARENT_TITLE = TitleMode.TRANSPARENT_TITLE;
	AUTOHIDE_TITLE = TitleMode.AUTOHIDE_TITLE;
	/** arrange nodes vertically */
	VERTICAL_LAYOUT = "vertical";
	/** used to redirect calls */
	proxy = null;
	node_images_path = "";
	debug = false;
	catch_exceptions = true;
	throw_errors = true;
	/** if set to true some nodes like Formula would be allowed to evaluate code that comes from unsafe sources (like node configuration), which could lead to exploits */
	allow_scripts = false;
	/** nodetypes by string */
	registered_node_types = {};
	/** @deprecated used for dropping files in the canvas.  It appears the code that enables this was removed, but the object remains and is references by built-in drag drop. */
	node_types_by_file_extension = {};
	/** node types by classname */
	Nodes = {};
	/** used to store vars between graphs */
	Globals = {};
	/** @deprecated Unused and will be deleted. */
	searchbox_extras = {};
	/** [true!] this make the nodes box (top left circle) coloured when triggered (execute/action), visual feedback */
	node_box_coloured_when_on = false;
	/** [true!] nodebox based on node mode, visual feedback */
	node_box_coloured_by_mode = false;
	/** [false on mobile] better true if not touch device, TODO add an helper/listener to close if false */
	dialog_close_on_mouse_leave = false;
	dialog_close_on_mouse_leave_delay = 500;
	/** [false!] prefer false if results too easy to break links - implement with ALT or TODO custom keys */
	shift_click_do_break_link_from = false;
	/** [false!]prefer false, way too easy to break links */
	click_do_break_link_to = false;
	/** [true!] who accidentally ctrl-alt-clicks on an in/output? nobody! that's who! */
	ctrl_alt_click_do_break_link = true;
	/** [true!] snaps links when dragging connections over valid targets */
	snaps_for_comfy = true;
	/** [true!] renders a partial border to highlight when a dragged link is snapped to a node */
	snap_highlights_node = true;
	/**
	* If `true`, items always snap to the grid - modifier keys are ignored.
	* When {@link snapToGrid} is falsy, a value of `1` is used.
	* Default: `false`
	*/
	alwaysSnapToGrid;
	/**
	* When set to a positive number, when nodes are moved their positions will
	* be rounded to the nearest multiple of this value.  Half up.
	* Default: `undefined`
	* @todo Not implemented - see {@link LiteGraph.CANVAS_GRID_SIZE}
	*/
	snapToGrid;
	/** [false on mobile] better true if not touch device, TODO add an helper/listener to close if false */
	search_hide_on_mouse_leave = true;
	/**
	* [true!] enable filtering slots type in the search widget
	* !requires auto_load_slot_types or manual set registered_slot_[in/out]_types and slot_types_[in/out]
	*/
	search_filter_enabled = false;
	/** [true!] opens the results list when opening the search widget */
	search_show_all_on_open = true;
	/**
	* [if want false, use true, run, get vars values to be statically set, than disable]
	* nodes types and nodeclass association with node types need to be calculated,
	* if dont want this, calculate once and set registered_slot_[in/out]_types and slot_types_[in/out]
	*/
	auto_load_slot_types = false;
	/** slot types for nodeclass */
	registered_slot_in_types = {};
	/** slot types for nodeclass */
	registered_slot_out_types = {};
	/** slot types IN */
	slot_types_in = [];
	/** slot types OUT */
	slot_types_out = [];
	/**
	* specify for each IN slot type a(/many) default node(s), use single string, array, or object
	* (with node, title, parameters, ..) like for search
	*/
	slot_types_default_in = {};
	/**
	* specify for each OUT slot type a(/many) default node(s), use single string, array, or object
	* (with node, title, parameters, ..) like for search
	*/
	slot_types_default_out = {};
	/** [true!] very handy, ALT click to clone and drag the new node */
	alt_drag_do_clone_nodes = false;
	/**
	* [true!] will create and connect event slots when using action/events connections,
	* !WILL CHANGE node mode when using onTrigger (enable mode colors), onExecuted does not need this
	*/
	do_add_triggers_slots = false;
	/** [false!] being events, it is strongly recommended to use them sequentially, one by one */
	allow_multi_output_for_events = true;
	/** [true!] allows to create and connect a node clicking with the third button (wheel) */
	middle_click_slot_add_default_node = false;
	/** [true!] dragging a link to empty space will open a menu, add from list, search or defaults */
	release_link_on_empty_shows_menu = false;
	/** "mouse"|"pointer" use mouse for retrocompatibility issues? (none found @ now) */
	pointerevents_method = "pointer";
	/**
	* [true!] allows ctrl + shift + v to paste nodes with the outputs of the unselected nodes connected
	* with the inputs of the newly pasted nodes
	*/
	ctrl_shift_v_paste_connect_unselected_outputs = true;
	use_uuids = false;
	highlight_selected_group = true;
	/** Whether to scale context with the graph when zooming in.  Zooming out never makes context menus smaller. */
	context_menu_scaling = false;
	/**
	* Debugging flag. Repeats deprecation warnings every time they are reported.
	* May impact performance.
	*/
	alwaysRepeatWarnings = false;
	/**
	* Array of callbacks to execute when Litegraph first reports a deprecated API being used.
	* @see alwaysRepeatWarnings By default, will not repeat identical messages.
	*/
	onDeprecationWarning = [console.warn];
	/**
	* @deprecated Removed; has no effect.
	* If `true`, mouse wheel events will be interpreted as trackpad gestures.
	* Tested on MacBook M4 Pro.
	* @default false
	* @see macGesturesRequireMac
	*/
	macTrackpadGestures = false;
	/**
	* @deprecated Removed; has no effect.
	* If both this setting and {@link macTrackpadGestures} are `true`, trackpad gestures will
	* only be enabled when the browser user agent includes "Mac".
	* @default true
	* @see macTrackpadGestures
	*/
	macGesturesRequireMac = true;
	/**
	* "standard": change the dragging on left mouse button click to select, enable middle-click or spacebar+left-click dragging
	* "legacy": Enable dragging on left-click (original behavior)
	* "custom": Use leftMouseClickBehavior and mouseWheelScroll settings
	* @default "legacy"
	*/
	canvasNavigationMode = "legacy";
	leftMouseClickBehavior = "panning";
	mouseWheelScroll = "panning";
	/**
	* If `true`, widget labels and values will both be truncated (proportionally to size),
	* until they fit within the widget.
	*
	* Otherwise, the label will be truncated completely before the value is truncated.
	* @default false
	*/
	truncateWidgetTextEvenly = false;
	/**
	* If `true`, widget values will be completely truncated when shrinking a widget,
	* before truncating widget labels.  {@link truncateWidgetTextEvenly} must be `false`.
	* @default false
	*/
	truncateWidgetValuesFirst = false;
	/**
	* If `true`, the current viewport scale & offset of the first attached canvas will be included with the graph when exporting.
	* @default true
	*/
	saveViewportWithGraph = true;
	/**
	* Enable Vue nodes mode for rendering and positioning.
	* When true:
	* - Nodes will calculate slot positions using Vue component dimensions
	* - LiteGraph will skip rendering node bodies entirely
	* - Vue components will handle all node rendering
	* - LiteGraph continues to render connections, links, and graph background
	* This should be set by the frontend when the Vue nodes feature is enabled.
	* @default false
	*/
	vueNodesMode = false;
	nodeOpacity = 1;
	nodeLightness = void 0;
	LGraph = LGraph;
	LLink = LLink;
	LGraphNode = LGraphNode;
	LGraphGroup = LGraphGroup;
	DragAndScale = DragAndScale;
	LGraphCanvas = LGraphCanvas;
	ContextMenu = ContextMenu;
	CurveEditor = CurveEditor;
	Reroute = Reroute;
	constructor() {
		Object.defineProperty(this, "Classes", { writable: false });
	}
	Classes = {
		get SubgraphSlot() {
			return SubgraphSlot;
		},
		get SubgraphIONodeBase() {
			return SubgraphIONodeBase;
		},
		get Rectangle() {
			return Rectangle;
		},
		get InputIndicators() {
			return InputIndicators;
		}
	};
	/**
	* Register a node class so it can be listed when the user wants to create a new one
	* @param type name of the node and path
	* @param base_class class containing the structure of a node
	*/
	registerNodeType(type, base_class) {
		if (!base_class.prototype) throw "Cannot register a simple object, it must be a class with a prototype";
		base_class.type = type;
		const classname = base_class.name;
		const pos = type.lastIndexOf("/");
		base_class.category = type.substring(0, pos);
		base_class.title ||= classname;
		for (const i in LGraphNode.prototype) base_class.prototype[i] ||= LGraphNode.prototype[i];
		const prev = this.registered_node_types[type];
		if (prev && this.debug) console.warn("replacing node type:", type);
		this.registered_node_types[type] = base_class;
		if (base_class.constructor.name) this.Nodes[classname] = base_class;
		this.onNodeTypeRegistered?.(type, base_class);
		if (prev) this.onNodeTypeReplaced?.(type, base_class, prev);
		if (base_class.prototype.onPropertyChange) console.warn(`LiteGraph node class ${type} has onPropertyChange method, it must be called onPropertyChanged with d at the end`);
		if (this.auto_load_slot_types) new base_class(base_class.title || "tmpnode");
	}
	/**
	* removes a node type from the system
	* @param type name of the node or the node constructor itself
	*/
	unregisterNodeType(type) {
		const base_class = typeof type === "string" ? this.registered_node_types[type] : type;
		if (!base_class) throw `node type not found: ${String(type)}`;
		delete this.registered_node_types[String(base_class.type)];
		const name = base_class.constructor.name;
		if (name) delete this.Nodes[name];
	}
	/**
	* Save a slot type and his node
	* @param type name of the node or the node constructor itself
	* @param slot_type name of the slot type (variable type), eg. string, number, array, boolean, ..
	*/
	registerNodeAndSlotType(type, slot_type, out) {
		out ||= false;
		const class_type = (typeof type === "string" && this.registered_node_types[type] !== "anonymous" ? this.registered_node_types[type] : type).constructor.type;
		let allTypes = [];
		if (typeof slot_type === "string") allTypes = slot_type.split(",");
		else if (slot_type == this.EVENT || slot_type == this.ACTION) allTypes = ["_event_"];
		else allTypes = ["*"];
		for (let slotType of allTypes) {
			if (slotType === "") slotType = "*";
			const register = out ? this.registered_slot_out_types : this.registered_slot_in_types;
			register[slotType] ??= { nodes: [] };
			const { nodes } = register[slotType];
			if (!nodes.includes(class_type)) nodes.push(class_type);
			const types = out ? this.slot_types_out : this.slot_types_in;
			const type = slotType.toLowerCase();
			if (!types.includes(type)) {
				types.push(type);
				types.sort();
			}
		}
	}
	/**
	* Removes all previously registered node's types
	*/
	clearRegisteredTypes() {
		this.registered_node_types = {};
		this.node_types_by_file_extension = {};
		this.Nodes = {};
		this.searchbox_extras = {};
	}
	/**
	* Create a node of a given type with a name. The node is not attached to any graph yet.
	* @param type full name of the node class. p.e. "math/sin"
	* @param title a name to distinguish from other nodes
	* @param options to set options
	*/
	createNode(type, title, options) {
		const base_class = this.registered_node_types[type];
		if (!base_class) {
			if (this.debug) console.warn(`GraphNode type "${type}" not registered.`);
			return null;
		}
		title = title || base_class.title || type;
		let node = null;
		if (this.catch_exceptions) try {
			node = new base_class(title);
		} catch (error) {
			console.error(error);
			return null;
		}
		else node = new base_class(title);
		node.type = type;
		if (!node.title && title) node.title = title;
		node.properties ||= {};
		node.properties_info ||= [];
		node.flags ||= {};
		node.size ||= node.computeSize();
		node.pos ||= [this.DEFAULT_POSITION[0], this.DEFAULT_POSITION[1]];
		node.mode ||= LGraphEventMode.ALWAYS;
		if (options) Object.assign(node, options);
		node.onNodeCreated?.();
		return node;
	}
	/**
	* Returns a registered node type with a given name
	* @param type full name of the node class. p.e. "math/sin"
	* @returns the node class
	*/
	getNodeType(type) {
		return this.registered_node_types[type];
	}
	/**
	* Returns a list of node types matching one category
	* @param category category name
	* @returns array with all the node classes
	*/
	getNodeTypesInCategory(category, filter) {
		const r = [];
		for (const i in this.registered_node_types) {
			const type = this.registered_node_types[i];
			if (type.filter != filter) continue;
			if (category == "") {
				if (type.category == null) r.push(type);
			} else if (type.category == category) r.push(type);
		}
		return r;
	}
	/**
	* Returns a list with all the node type categories
	* @param filter only nodes with ctor.filter equal can be shown
	* @returns array with all the names of the categories
	*/
	getNodeTypesCategories(filter) {
		const categories = { "": 1 };
		for (const i in this.registered_node_types) {
			const type = this.registered_node_types[i];
			if (type.category && !type.skip_list) {
				if (type.filter != filter) continue;
				categories[type.category] = 1;
			}
		}
		const result = [];
		for (const i in categories) result.push(i);
		return result;
	}
	reloadNodes(folder_wildcard) {
		const tmp = document.getElementsByTagName("script");
		const script_files = [];
		for (const element of tmp) script_files.push(element);
		const docHeadObj = document.getElementsByTagName("head")[0];
		folder_wildcard = document.location.href + folder_wildcard;
		for (const script_file of script_files) {
			const src = script_file.src;
			if (!src || src.substr(0, folder_wildcard.length) != folder_wildcard) continue;
			try {
				const dynamicScript = document.createElement("script");
				dynamicScript.type = "text/javascript";
				dynamicScript.src = src;
				docHeadObj.append(dynamicScript);
				script_file.remove();
			} catch (error) {
				if (this.throw_errors) throw error;
				if (this.debug) console.error("Error while reloading", src);
			}
		}
	}
	/** @deprecated Prefer {@link structuredClone} */
	cloneObject(obj, target) {
		if (obj == null) return null;
		const r = JSON.parse(JSON.stringify(obj));
		if (!target) return r;
		for (const i in r) target[i] = r[i];
		return target;
	}
	/** @see {@link createUuidv4} @inheritdoc */
	uuidv4 = createUuidv4;
	/**
	* Returns if the types of two slots are compatible (taking into account wildcards, etc)
	* @param type_a output
	* @param type_b input
	* @returns true if they can be connected
	*/
	isValidConnection(type_a, type_b) {
		if (type_a == "" || type_a === "*") type_a = 0;
		if (type_b == "" || type_b === "*") type_b = 0;
		if (!type_a || !type_b || type_a == type_b || type_a == this.EVENT && type_b == this.ACTION) return true;
		type_a = String(type_a);
		type_b = String(type_b);
		type_a = type_a.toLowerCase();
		type_b = type_b.toLowerCase();
		if (!type_a.includes(",") && !type_b.includes(",")) return type_a == type_b;
		const supported_types_a = type_a.split(",");
		const supported_types_b = type_b.split(",");
		for (const a of supported_types_a) for (const b of supported_types_b) if (this.isValidConnection(a, b)) return true;
		return false;
	}
	getParameterNames(func) {
		return String(func).replaceAll(/\/\/.*$/gm, "").replaceAll(/\s+/g, "").replaceAll(/\/\*[^*/]*\*\//g, "").split("){", 1)[0].replace(/^[^(]*\(/, "").replaceAll(/=[^,]+/g, "").split(",").filter(Boolean);
	}
	pointerListenerAdd(oDOM, sEvIn, fCall, capture = false) {
		if (!oDOM || !oDOM.addEventListener || !sEvIn || typeof fCall !== "function") return;
		let sMethod = this.pointerevents_method;
		let sEvent = sEvIn;
		if (sMethod == "pointer" && !window.PointerEvent) {
			console.warn("sMethod=='pointer' && !window.PointerEvent");
			console.warn(`Converting pointer[${sEvent}] : down move up cancel enter TO touchstart touchmove touchend, etc ..`);
			switch (sEvent) {
				case "down":
					sMethod = "touch";
					sEvent = "start";
					break;
				case "move":
					sMethod = "touch";
					break;
				case "up":
					sMethod = "touch";
					sEvent = "end";
					break;
				case "cancel":
					sMethod = "touch";
					break;
				case "enter": break;
				default: console.warn(`PointerEvent not available in this browser ? The event ${sEvent} would not be called`);
			}
		}
		switch (sEvent) {
			case "down":
			case "up":
			case "move":
			case "over":
			case "out":
			case "enter": oDOM.addEventListener(sMethod + sEvent, fCall, capture);
			case "leave":
			case "cancel":
			case "gotpointercapture":
			case "lostpointercapture": if (sMethod != "mouse") return oDOM.addEventListener(sMethod + sEvent, fCall, capture);
			default: return oDOM.addEventListener(sEvent, fCall, capture);
		}
	}
	pointerListenerRemove(oDOM, sEvent, fCall, capture = false) {
		if (!oDOM || !oDOM.removeEventListener || !sEvent || typeof fCall !== "function") return;
		switch (sEvent) {
			case "down":
			case "up":
			case "move":
			case "over":
			case "out":
			case "enter": if (this.pointerevents_method == "pointer" || this.pointerevents_method == "mouse") oDOM.removeEventListener(this.pointerevents_method + sEvent, fCall, capture);
			case "leave":
			case "cancel":
			case "gotpointercapture":
			case "lostpointercapture": if (this.pointerevents_method == "pointer") return oDOM.removeEventListener(this.pointerevents_method + sEvent, fCall, capture);
			default: return oDOM.removeEventListener(sEvent, fCall, capture);
		}
	}
	getTime() {
		return performance.now();
	}
	distance = distance;
	colorToString(c) {
		return `rgba(${Math.round(c[0] * 255).toFixed()},${Math.round(c[1] * 255).toFixed()},${Math.round(c[2] * 255).toFixed()},${c.length == 4 ? c[3].toFixed(2) : "1.0"})`;
	}
	isInsideRectangle = isInsideRectangle;
	growBounding(bounding, x, y) {
		if (x < bounding[0]) bounding[0] = x;
		else if (x > bounding[2]) bounding[2] = x;
		if (y < bounding[1]) bounding[1] = y;
		else if (y > bounding[3]) bounding[3] = y;
	}
	overlapBounding = overlapBounding;
	isInsideBounding(p, bb) {
		if (p[0] < bb[0][0] || p[1] < bb[0][1] || p[0] > bb[1][0] || p[1] > bb[1][1]) return false;
		return true;
	}
	hex2num(hex) {
		if (hex.charAt(0) == "#") hex = hex.slice(1);
		hex = hex.toUpperCase();
		const hex_alphabets = "0123456789ABCDEF";
		const value = new Array(3);
		let k = 0;
		let int1;
		let int2;
		for (let i = 0; i < 6; i += 2) {
			int1 = hex_alphabets.indexOf(hex.charAt(i));
			int2 = hex_alphabets.indexOf(hex.charAt(i + 1));
			value[k] = int1 * 16 + int2;
			k++;
		}
		return value;
	}
	num2hex(triplet) {
		const hex_alphabets = "0123456789ABCDEF";
		let hex = "#";
		let int1;
		let int2;
		for (let i = 0; i < 3; i++) {
			int1 = triplet[i] / 16;
			int2 = triplet[i] % 16;
			hex += hex_alphabets.charAt(int1) + hex_alphabets.charAt(int2);
		}
		return hex;
	}
	closeAllContextMenus(ref_window = window) {
		const elements = [...ref_window.document.querySelectorAll(".litecontextmenu")];
		if (!elements.length) return;
		for (const element of elements) if ("close" in element && typeof element.close === "function") element.close();
		else element.remove();
	}
	extendClass(target, origin) {
		for (const i in origin) {
			if (target.hasOwnProperty(i)) continue;
			target[i] = origin[i];
		}
		if (origin.prototype && target.prototype) {
			const originProto = origin.prototype;
			const targetProto = target.prototype;
			for (const i in originProto) {
				if (!originProto.hasOwnProperty(i)) continue;
				if (targetProto.hasOwnProperty(i)) continue;
				const descriptor = Object.getOwnPropertyDescriptor(originProto, i);
				if (descriptor) Object.defineProperty(targetProto, i, descriptor);
			}
		}
	}
};
//#endregion
//#region src/lib/litegraph/src/polyfills.ts
Symbol.dispose ??= Symbol("Symbol.dispose");
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
function loadPolyfills() {
	if (typeof window != "undefined" && window.CanvasRenderingContext2D && !window.CanvasRenderingContext2D.prototype.roundRect) window.CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, radius, radius_low) {
		let top_left_radius = 0;
		let top_right_radius = 0;
		let bottom_left_radius = 0;
		let bottom_right_radius = 0;
		if (radius === 0) {
			this.rect(x, y, w, h);
			return;
		}
		if (radius_low === void 0) radius_low = radius;
		if (Array.isArray(radius)) if (radius.length == 1) top_left_radius = top_right_radius = bottom_left_radius = bottom_right_radius = radius[0];
		else if (radius.length == 2) {
			top_left_radius = bottom_right_radius = radius[0];
			top_right_radius = bottom_left_radius = radius[1];
		} else if (radius.length == 4) {
			top_left_radius = radius[0];
			top_right_radius = radius[1];
			bottom_left_radius = radius[2];
			bottom_right_radius = radius[3];
		} else return;
		else {
			top_left_radius = radius || 0;
			top_right_radius = radius || 0;
			const low = !Array.isArray(radius_low) && radius_low ? radius_low : 0;
			bottom_left_radius = low;
			bottom_right_radius = low;
		}
		this.moveTo(x + top_left_radius, y);
		this.lineTo(x + w - top_right_radius, y);
		this.quadraticCurveTo(x + w, y, x + w, y + top_right_radius);
		this.lineTo(x + w, y + h - bottom_right_radius);
		this.quadraticCurveTo(x + w, y + h, x + w - bottom_right_radius, y + h);
		this.lineTo(x + bottom_right_radius, y + h);
		this.quadraticCurveTo(x, y + h, x, y + h - bottom_left_radius);
		this.lineTo(x, y + bottom_left_radius);
		this.quadraticCurveTo(x, y, x + top_left_radius, y);
	};
	if (typeof window != "undefined" && !window["requestAnimationFrame"]) window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
		window.setTimeout(callback, 1e3 / 60);
	};
}
//#endregion
//#region src/lib/litegraph/src/litegraph.ts
var LiteGraph = new LiteGraphGlobal();
loadPolyfills();
//#endregion
//#region src/platform/workflow/validation/schemas/workflowSchema.ts
var zRendererType = enumType([
	"LG",
	"Vue",
	"Vue-corrected"
]);
var zNodeId = unionType([numberType().int(), stringType()]);
var zNodeInputName = stringType();
var zSlotIndex = unionType([numberType().int(), stringType().transform((val) => parseInt(val)).refine((val) => !isNaN(val), { message: "Invalid number" })]);
var zDataType = unionType([
	stringType(),
	arrayType(stringType()),
	numberType()
]);
var zVector2 = unionType([objectType({
	0: numberType(),
	1: numberType()
}).passthrough().transform((v) => [v[0], v[1]]), tupleType([numberType(), numberType()])]);
var zModelFile = objectType({
	name: stringType(),
	url: stringType().url(),
	hash: stringType().optional(),
	hash_type: stringType().optional(),
	directory: stringType()
});
var zGraphState = objectType({
	lastGroupId: numberType(),
	lastNodeId: numberType(),
	lastLinkId: numberType(),
	lastRerouteId: numberType()
}).passthrough();
var zComfyLink = tupleType([
	numberType(),
	zNodeId,
	zSlotIndex,
	zNodeId,
	zSlotIndex,
	zDataType
]);
/** Extension to 0.4 schema (links as arrays): parent reroute ID */
var zComfyLinkExtension = objectType({
	id: numberType(),
	parentId: numberType()
}).passthrough();
var zComfyLinkObject = objectType({
	id: numberType(),
	origin_id: zNodeId,
	origin_slot: zSlotIndex,
	target_id: zNodeId,
	target_slot: zSlotIndex,
	type: zDataType,
	parentId: numberType().optional()
}).passthrough();
var zReroute = objectType({
	id: numberType(),
	parentId: numberType().optional(),
	pos: zVector2,
	linkIds: arrayType(numberType()).nullish(),
	floating: objectType({ slotType: enumType(["input", "output"]) }).optional()
}).passthrough();
var zNodeOutput = objectType({
	name: stringType(),
	type: zDataType,
	links: arrayType(numberType()).nullable().optional(),
	slot_index: zSlotIndex.optional()
}).passthrough();
var zNodeInput = objectType({
	name: zNodeInputName,
	type: zDataType,
	link: numberType().nullable().optional(),
	slot_index: zSlotIndex.optional()
}).passthrough();
var zFlags = objectType({
	collapsed: booleanType().optional(),
	pinned: booleanType().optional(),
	allow_interaction: booleanType().optional(),
	horizontal: booleanType().optional(),
	skip_repeated_outputs: booleanType().optional()
}).passthrough();
var repoLikeIdPattern = /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?$/;
var githubUsernamePattern = /^(?!-)(?!.*--)[a-zA-Z0-9-]+(?<!-)$/;
var gitHashPattern = /^[0-9a-f]{4,40}$/i;
var semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([\da-z-]+(?:\.[\da-z-]+)*))?(?:\+([\da-z-]+(?:\.[\da-z-]+)*))?$/;
var zRepoLikeId = stringType().min(1).max(100).regex(repoLikeIdPattern, { message: "ID can only contain ASCII letters, digits, '_', '-', and '.'" }).refine((id) => !/^[_\-.]|[_\-.]$/.test(id), { message: "ID must not start or end with '_', '-', or '.'" });
var zCnrId = zRepoLikeId;
var zGithubRepoName = zRepoLikeId;
var zGithubUsername = stringType().min(1).max(39).regex(githubUsernamePattern, "Invalid GitHub username/org");
var zAuxId = stringType().regex(/^[^/]+\/[^/]+$/, "Invalid format. Must be 'github-user/repo-name'").transform((id) => id.split("/")).refine(([username, repo]) => zGithubUsername.safeParse(username).success && zGithubRepoName.safeParse(repo).success, "Invalid aux_id: Must be valid 'github-username/github-repo-name'").transform(([username, repo]) => `${username}/${repo}`);
var zGitHash = stringType().superRefine((val, ctx) => {
	if (!gitHashPattern.test(val)) ctx.addIssue({
		code: ZodIssueCode.custom,
		message: `Node pack version has invalid Git commit hash: "${val}"`
	});
});
var zSemVer = stringType().superRefine((val, ctx) => {
	if (!semverPattern.test(val)) ctx.addIssue({
		code: ZodIssueCode.custom,
		message: `Node pack version has invalid semantic version: "${val}"`
	});
});
var zVersion = unionType([stringType().transform((ver) => ver.replace(/^v/, "")).pipe(unionType([zSemVer, zGitHash])), literalType("unknown")]);
var zProperties = objectType({
	["Node name for S&R"]: stringType().optional(),
	cnr_id: zCnrId.optional(),
	aux_id: zAuxId.optional(),
	ver: zVersion.optional(),
	models: arrayType(zModelFile).optional()
}).passthrough();
var zWidgetValues = unionType([arrayType(anyType()), recordType(anyType())]);
var zComfyNode = objectType({
	id: zNodeId,
	type: stringType(),
	pos: zVector2,
	size: zVector2,
	flags: zFlags,
	order: numberType(),
	mode: numberType(),
	inputs: arrayType(zNodeInput).optional(),
	outputs: arrayType(zNodeOutput).optional(),
	properties: zProperties,
	widgets_values: zWidgetValues.optional(),
	color: stringType().optional(),
	bgcolor: stringType().optional()
}).passthrough();
var zSubgraphIO = zNodeInput.extend({
	id: stringType().uuid(),
	type: stringType(),
	linkIds: arrayType(numberType()).optional()
});
var zSubgraphInstance = objectType({
	id: zNodeId,
	type: stringType().uuid(),
	pos: zVector2,
	size: zVector2,
	flags: zFlags,
	order: numberType(),
	mode: numberType(),
	inputs: arrayType(zSubgraphIO).optional(),
	outputs: arrayType(zSubgraphIO).optional(),
	widgets_values: zWidgetValues.optional(),
	color: stringType().optional(),
	bgcolor: stringType().optional()
}).passthrough();
var zGroup = objectType({
	id: numberType().optional(),
	title: stringType(),
	bounding: tupleType([
		numberType(),
		numberType(),
		numberType(),
		numberType()
	]),
	color: stringType().optional(),
	font_size: numberType().optional(),
	locked: booleanType().optional()
}).passthrough();
var zDS = objectType({
	scale: numberType(),
	offset: zVector2
}).passthrough();
var zConfig = objectType({
	links_ontop: booleanType().optional(),
	align_to_grid: booleanType().optional()
}).passthrough();
var zExtra = objectType({
	ds: zDS.optional(),
	frontendVersion: stringType().optional(),
	linkExtensions: arrayType(zComfyLinkExtension).optional(),
	reroutes: arrayType(zReroute).optional(),
	workflowRendererVersion: zRendererType.optional(),
	BlueprintDescription: stringType().optional(),
	BlueprintSearchAliases: arrayType(stringType()).optional(),
	linearMode: booleanType().optional(),
	linearData: objectType({
		inputs: arrayType(tupleType([zNodeId, stringType()])).optional(),
		outputs: arrayType(zNodeId).optional()
	}).optional()
}).passthrough();
var zGraphDefinitions = objectType({ subgraphs: lazyType(() => arrayType(zSubgraphDefinition)) });
var zBaseExportableGraph = objectType({
	id: stringType().uuid().optional(),
	revision: numberType().optional(),
	config: zConfig.optional().nullable(),
	subgraphs: arrayType(zSubgraphInstance).optional()
});
/** Schema version 0.4 */
var zComfyWorkflow = zBaseExportableGraph.extend({
	id: stringType().uuid().optional(),
	revision: numberType().optional(),
	last_node_id: zNodeId,
	last_link_id: numberType(),
	nodes: arrayType(zComfyNode),
	links: arrayType(zComfyLink),
	floatingLinks: arrayType(zComfyLinkObject).optional(),
	groups: arrayType(zGroup).optional(),
	config: zConfig.optional().nullable(),
	extra: zExtra.optional().nullable(),
	version: numberType(),
	models: arrayType(zModelFile).optional(),
	definitions: zGraphDefinitions.optional()
}).passthrough();
/** Schema version 1 */
var zComfyWorkflow1 = zBaseExportableGraph.extend({
	id: stringType().uuid().optional(),
	revision: numberType().optional(),
	version: literalType(1),
	config: zConfig.optional().nullable(),
	state: zGraphState,
	groups: arrayType(zGroup).optional(),
	nodes: arrayType(zComfyNode),
	links: arrayType(zComfyLinkObject).optional(),
	floatingLinks: arrayType(zComfyLinkObject).optional(),
	reroutes: arrayType(zReroute).optional(),
	extra: zExtra.optional().nullable(),
	models: arrayType(zModelFile).optional(),
	definitions: objectType({ subgraphs: lazyType(() => arrayType(zSubgraphDefinition)) }).optional()
}).passthrough();
var zExportedSubgraphIONode = objectType({
	id: zNodeId,
	bounding: tupleType([
		numberType(),
		numberType(),
		numberType(),
		numberType()
	]),
	pinned: booleanType().optional()
});
var zExposedWidget = objectType({
	id: stringType(),
	name: stringType()
});
/** A subgraph definition `worfklow.definitions.subgraphs` */
var zSubgraphDefinition = zComfyWorkflow1.extend({
	id: stringType().uuid(),
	revision: numberType(),
	name: stringType(),
	description: stringType().optional(),
	category: stringType().optional(),
	essentials_category: stringType().optional(),
	inputNode: zExportedSubgraphIONode,
	outputNode: zExportedSubgraphIONode,
	inputs: arrayType(zSubgraphIO).optional(),
	outputs: arrayType(zSubgraphIO).optional(),
	widgets: arrayType(zExposedWidget).optional(),
	definitions: objectType({ subgraphs: lazyType(() => zSubgraphDefinition.array()) }).optional()
}).passthrough();
/**
* Type guard to check if an object is a SubgraphDefinition.
* This helps TypeScript understand the type when z.lazy() breaks inference.
*/
function isSubgraphDefinition(obj) {
	return obj !== null && typeof obj === "object" && "id" in obj && "name" in obj && "nodes" in obj && Array.isArray(obj.nodes) && "inputNode" in obj && "outputNode" in obj;
}
var zWorkflowVersion = objectType({ version: numberType() });
async function validateComfyWorkflow(data, onError = console.warn) {
	const versionResult = zWorkflowVersion.safeParse(data);
	let result;
	if (!versionResult.success) {
		onError(`Workflow does not contain a valid version.  Zod error:\n${fromZodError(versionResult.error)}`);
		return null;
	} else if (versionResult.data.version === 1) result = await zComfyWorkflow1.safeParseAsync(data);
	else result = await zComfyWorkflow.safeParseAsync(data);
	if (result.success) return result.data;
	onError(`Invalid workflow against zod schema:\n${fromZodError(result.error)}`);
	return null;
}
recordType(zNodeId, objectType({
	inputs: recordType(zNodeInputName, unionType([anyType(), tupleType([zNodeId, zSlotIndex])])),
	class_type: stringType(),
	_meta: objectType({ title: stringType() })
}));
/**
* Builds a map from subgraph definition ID to all execution path prefixes
* where that definition is instantiated in the workflow.
*
* "def-A" → ["5", "10"] for each container node instantiating that subgraph definition.
*/
function buildSubgraphExecutionPaths(rootNodes, allSubgraphDefs) {
	const subgraphDefMap = new Map(allSubgraphDefs.filter(isSubgraphDefinition).map((s) => [s.id, s]));
	const pathMap = /* @__PURE__ */ new Map();
	const visited = /* @__PURE__ */ new Set();
	const build = (nodes, parentPrefix) => {
		for (const n of nodes ?? []) {
			if (typeof n.type !== "string" || !subgraphDefMap.has(n.type)) continue;
			const path = parentPrefix ? `${parentPrefix}:${n.id}` : String(n.id);
			const existing = pathMap.get(n.type);
			if (existing) existing.push(path);
			else pathMap.set(n.type, [path]);
			if (visited.has(n.type)) continue;
			visited.add(n.type);
			const innerDef = subgraphDefMap.get(n.type);
			if (innerDef) build(innerDef.nodes, path);
			visited.delete(n.type);
		}
	};
	build(rootNodes, "");
	return pathMap;
}
/**
* Recursively collect all subgraph definitions from root and nested levels.
*/
function collectAllSubgraphDefs(rootDefs) {
	const result = [];
	const seen = /* @__PURE__ */ new Set();
	function collect(defs) {
		for (const def of defs) {
			if (!isSubgraphDefinition(def)) continue;
			if (seen.has(def.id)) continue;
			seen.add(def.id);
			result.push(def);
			if (def.definitions?.subgraphs?.length) collect(def.definitions.subgraphs);
		}
	}
	collect(rootDefs);
	return result;
}
/**
* Flatten all workflow nodes (root + subgraphs) into a single array.
* Each node's `id` is prefixed with its execution path (e.g. node "3" inside container "11" → "11:3").
*/
function flattenWorkflowNodes(graphData) {
	const rootNodes = graphData.nodes ?? [];
	const allDefs = collectAllSubgraphDefs(graphData.definitions?.subgraphs ?? []);
	const pathMap = buildSubgraphExecutionPaths(rootNodes, allDefs);
	const allNodes = [...rootNodes];
	const subgraphDefMap = new Map(allDefs.map((s) => [s.id, s]));
	for (const [defId, paths] of pathMap.entries()) {
		const def = subgraphDefMap.get(defId);
		if (!def?.nodes) continue;
		for (const prefix of paths) for (const node of def.nodes) allNodes.push({
			...node,
			id: `${prefix}:${node.id}`
		});
	}
	return allNodes;
}
//#endregion
//#region src/schemas/colorPaletteSchema.ts
var nodeSlotSchema = objectType({
	CLIP: stringType(),
	CLIP_VISION: stringType(),
	CLIP_VISION_OUTPUT: stringType(),
	CONDITIONING: stringType(),
	CONTROL_NET: stringType(),
	IMAGE: stringType(),
	LATENT: stringType(),
	MASK: stringType(),
	MODEL: stringType(),
	STYLE_MODEL: stringType(),
	VAE: stringType(),
	NOISE: stringType(),
	GUIDER: stringType(),
	SAMPLER: stringType(),
	SIGMAS: stringType(),
	TAESD: stringType()
});
var litegraphBaseSchema = objectType({
	BACKGROUND_IMAGE: stringType(),
	CLEAR_BACKGROUND_COLOR: stringType(),
	NODE_TITLE_COLOR: stringType(),
	NODE_SELECTED_TITLE_COLOR: stringType(),
	NODE_TEXT_COLOR: stringType(),
	NODE_TEXT_HIGHLIGHT_COLOR: stringType(),
	NODE_DEFAULT_COLOR: stringType(),
	NODE_DEFAULT_BGCOLOR: stringType(),
	NODE_DEFAULT_BOXCOLOR: stringType(),
	NODE_DEFAULT_SHAPE: unionType([
		literalType(LiteGraph.BOX_SHAPE),
		literalType(LiteGraph.ROUND_SHAPE),
		literalType(LiteGraph.CARD_SHAPE),
		stringType()
	]),
	NODE_BOX_OUTLINE_COLOR: stringType(),
	NODE_BYPASS_BGCOLOR: stringType(),
	NODE_ERROR_COLOUR: stringType(),
	DEFAULT_SHADOW_COLOR: stringType(),
	WIDGET_BGCOLOR: stringType(),
	WIDGET_OUTLINE_COLOR: stringType(),
	WIDGET_TEXT_COLOR: stringType(),
	WIDGET_SECONDARY_TEXT_COLOR: stringType(),
	WIDGET_DISABLED_TEXT_COLOR: stringType(),
	LINK_COLOR: stringType(),
	EVENT_LINK_COLOR: stringType(),
	CONNECTING_LINK_COLOR: stringType(),
	BADGE_FG_COLOR: stringType(),
	BADGE_BG_COLOR: stringType()
});
var comfyBaseSchema = objectType({
	["fg-color"]: stringType(),
	["bg-color"]: stringType(),
	["bg-img"]: stringType().optional(),
	["comfy-menu-bg"]: stringType(),
	["comfy-menu-secondary-bg"]: stringType(),
	["comfy-input-bg"]: stringType(),
	["input-text"]: stringType(),
	["descrip-text"]: stringType(),
	["drag-text"]: stringType(),
	["error-text"]: stringType(),
	["border-color"]: stringType(),
	["tr-even-bg-color"]: stringType(),
	["tr-odd-bg-color"]: stringType(),
	["content-bg"]: stringType(),
	["content-fg"]: stringType(),
	["content-hover-bg"]: stringType(),
	["content-hover-fg"]: stringType(),
	["bar-shadow"]: stringType(),
	["contrast-mix-color"]: stringType().optional(),
	["interface-stroke"]: stringType().optional(),
	["interface-panel-surface"]: stringType().optional(),
	["interface-panel-box-shadow"]: stringType().optional(),
	["interface-panel-drop-shadow"]: stringType().optional(),
	["interface-panel-hover-surface"]: stringType().optional(),
	["interface-panel-selected-surface"]: stringType().optional(),
	["interface-button-hover-surface"]: stringType().optional()
});
var colorsSchema = objectType({
	node_slot: nodeSlotSchema,
	litegraph_base: litegraphBaseSchema,
	comfy_base: comfyBaseSchema
});
var partialColorsSchema = objectType({
	node_slot: nodeSlotSchema.partial(),
	litegraph_base: litegraphBaseSchema.partial(),
	comfy_base: comfyBaseSchema.partial()
});
var paletteSchema = objectType({
	id: stringType(),
	name: stringType(),
	colors: partialColorsSchema,
	light_theme: booleanType().optional()
}).passthrough();
objectType({
	id: stringType(),
	name: stringType(),
	colors: colorsSchema
}).passthrough();
var colorPalettesSchema = recordType(paletteSchema);
//#endregion
//#region src/platform/keybindings/types.ts
var zKeyCombo = objectType({
	key: stringType(),
	ctrl: booleanType().optional(),
	alt: booleanType().optional(),
	shift: booleanType().optional(),
	meta: booleanType().optional()
});
var zKeybinding = objectType({
	commandId: stringType(),
	combo: zKeyCombo,
	targetElementId: stringType().optional()
});
var zKeybindingPreset = objectType({
	name: stringType().trim().min(1, "Preset name cannot be empty"),
	newBindings: arrayType(zKeybinding),
	unsetBindings: arrayType(zKeybinding)
});
//#endregion
//#region src/types/nodeSource.ts
var NodeSourceType = /* @__PURE__ */ function(NodeSourceType) {
	NodeSourceType["Core"] = "core";
	NodeSourceType["CustomNodes"] = "custom_nodes";
	NodeSourceType["Blueprint"] = "blueprint";
	NodeSourceType["Essentials"] = "essentials";
	NodeSourceType["Unknown"] = "unknown";
	return NodeSourceType;
}({});
var CORE_NODE_MODULES = [
	"nodes",
	"comfy_extras",
	"comfy_api_nodes"
];
var UNKNOWN_NODE_SOURCE = {
	type: NodeSourceType.Unknown,
	className: "comfy-unknown",
	displayText: "Unknown",
	badgeText: "?"
};
function shortenNodeName(name) {
	return name.replace(/^(ComfyUI-|ComfyUI_|Comfy-|Comfy_)/, "").replace(/(-ComfyUI|_ComfyUI|-Comfy|_Comfy)$/, "");
}
function getNodeSource(python_module, essentials_category) {
	if (!python_module) return UNKNOWN_NODE_SOURCE;
	const modules = python_module.split(".");
	if (essentials_category) {
		const displayName = shortenNodeName((modules[1] ?? modules[0] ?? "essentials").split("@")[0]);
		return {
			type: NodeSourceType.Essentials,
			className: "comfy-essentials",
			displayText: displayName,
			badgeText: displayName
		};
	} else if (CORE_NODE_MODULES.includes(modules[0])) return {
		type: NodeSourceType.Core,
		className: "comfy-core",
		displayText: "Comfy Core",
		badgeText: "🦊"
	};
	else if (modules[0] === "blueprint") return {
		type: NodeSourceType.Blueprint,
		className: "blueprint",
		displayText: "Blueprint",
		badgeText: "bp"
	};
	else if (modules[0] === "custom_nodes") {
		const moduleName = modules[1];
		if (!moduleName) return UNKNOWN_NODE_SOURCE;
		const customNodeName = moduleName.split("@")[0];
		const displayName = shortenNodeName(customNodeName);
		return {
			type: NodeSourceType.CustomNodes,
			className: "comfy-custom-nodes",
			displayText: displayName,
			badgeText: displayName
		};
	} else return UNKNOWN_NODE_SOURCE;
}
var NodeBadgeMode = /* @__PURE__ */ function(NodeBadgeMode) {
	NodeBadgeMode["None"] = "None";
	NodeBadgeMode["ShowAll"] = "Show all";
	NodeBadgeMode["HideBuiltIn"] = "Hide built-in";
	return NodeBadgeMode;
}({});
//#endregion
//#region src/types/searchBoxTypes.ts
var LinkReleaseTriggerAction = /* @__PURE__ */ function(LinkReleaseTriggerAction) {
	LinkReleaseTriggerAction["CONTEXT_MENU"] = "context menu";
	LinkReleaseTriggerAction["SEARCH_BOX"] = "search box";
	LinkReleaseTriggerAction["NO_ACTION"] = "no action";
	return LinkReleaseTriggerAction;
}({});
//#endregion
//#region src/schemas/apiSchema.ts
var zNodeType = stringType();
var zJobId = stringType();
var resultItemType = enumType([
	"input",
	"output",
	"temp"
]);
recordType(stringType(), unknownType());
var zResultItem = objectType({
	filename: stringType().optional(),
	subfolder: stringType().optional(),
	type: resultItemType.optional(),
	display_name: stringType().optional()
});
var zOutputs = objectType({
	audio: arrayType(zResultItem).optional(),
	images: arrayType(zResultItem).optional(),
	video: arrayType(zResultItem).optional(),
	animated: arrayType(booleanType()).optional(),
	text: unionType([stringType(), arrayType(stringType())]).optional()
}).passthrough();
objectType({
	status: objectType({ exec_info: objectType({ queue_remaining: numberType().int() }) }).nullish(),
	sid: stringType().nullish()
});
objectType({
	value: numberType().int(),
	max: numberType().int(),
	prompt_id: zJobId,
	node: zNodeId
});
objectType({
	prompt_id: zJobId,
	nodes: recordType(zNodeId, objectType({
		value: numberType(),
		max: numberType(),
		state: enumType([
			"pending",
			"running",
			"finished",
			"error"
		]),
		node_id: zNodeId,
		prompt_id: zJobId,
		display_node_id: zNodeId.optional(),
		parent_node_id: zNodeId.optional(),
		real_node_id: zNodeId.optional()
	}))
});
objectType({
	node: zNodeId,
	display_node: zNodeId,
	prompt_id: zJobId
}).extend({
	output: zOutputs,
	merge: booleanType().optional()
});
var zExecutionWsMessageBase = objectType({
	prompt_id: zJobId,
	timestamp: numberType().int()
});
zExecutionWsMessageBase.extend({ nodes: arrayType(zNodeId) });
zExecutionWsMessageBase.extend({
	node_id: zNodeId,
	node_type: zNodeType,
	executed: arrayType(zNodeId)
});
zExecutionWsMessageBase.extend({
	node_id: zNodeId,
	node_type: zNodeType,
	executed: arrayType(zNodeId),
	exception_message: stringType(),
	exception_type: stringType(),
	traceback: arrayType(stringType()),
	current_inputs: anyType(),
	current_outputs: anyType()
});
objectType({
	nodeId: zNodeId,
	text: stringType(),
	prompt_id: stringType().optional()
});
objectType({
	value: stringType(),
	id: stringType().optional()
});
var zTerminalSize = objectType({
	cols: numberType(),
	row: numberType()
});
var zLogEntry = objectType({
	t: stringType(),
	m: stringType()
});
objectType({
	size: zTerminalSize.optional(),
	entries: arrayType(zLogEntry)
});
objectType({
	size: zTerminalSize,
	entries: arrayType(zLogEntry)
});
recordType(stringType(), anyType());
objectType({
	task_id: stringType(),
	asset_name: stringType(),
	bytes_total: numberType(),
	bytes_downloaded: numberType(),
	progress: numberType(),
	status: enumType([
		"created",
		"running",
		"completed",
		"failed"
	]),
	asset_id: stringType().optional(),
	error: stringType().optional()
});
objectType({
	task_id: stringType(),
	export_name: stringType().optional(),
	assets_total: numberType(),
	assets_attempted: numberType(),
	assets_failed: numberType(),
	bytes_total: numberType(),
	bytes_processed: numberType(),
	progress: numberType(),
	status: enumType([
		"created",
		"running",
		"completed",
		"failed"
	]),
	error: stringType().optional()
});
var zTaskOutput = recordType(zNodeId, zOutputs);
arrayType(stringType());
arrayType(stringType());
var zError = objectType({
	type: stringType(),
	message: stringType(),
	details: stringType(),
	extra_info: objectType({ input_name: stringType().optional() }).passthrough().optional()
});
objectType({
	node_errors: recordType(zNodeId, objectType({
		errors: arrayType(zError),
		class_type: stringType(),
		dependent_outputs: arrayType(anyType())
	})).optional(),
	prompt_id: stringType().optional(),
	exec_info: objectType({ queue_remaining: numberType().optional() }).optional(),
	error: unionType([stringType(), zError])
});
objectType({
	type: stringType(),
	message: stringType(),
	details: stringType()
});
var zDeviceStats = objectType({
	name: stringType(),
	type: stringType(),
	index: numberType(),
	vram_total: numberType(),
	vram_free: numberType(),
	torch_vram_total: numberType(),
	torch_vram_free: numberType()
});
objectType({
	system: objectType({
		os: stringType(),
		python_version: stringType(),
		embedded_python: booleanType(),
		comfyui_version: stringType(),
		pytorch_version: stringType(),
		required_frontend_version: stringType().optional(),
		argv: arrayType(stringType()),
		ram_total: numberType(),
		ram_free: numberType(),
		cloud_version: stringType().optional(),
		comfyui_frontend_version: stringType().optional(),
		workflow_templates_version: stringType().optional(),
		installed_templates_version: stringType().optional(),
		required_templates_version: stringType().optional()
	}),
	devices: arrayType(zDeviceStats)
});
objectType({
	storage: enumType(["server"]),
	migrated: booleanType().optional(),
	users: recordType(stringType(), stringType()).optional()
});
arrayType(arrayType(stringType(), stringType()));
objectType({
	path: stringType(),
	size: numberType(),
	modified: numberType()
});
var zBookmarkCustomization = objectType({
	icon: stringType().optional(),
	color: stringType().optional()
});
var zLinkReleaseTriggerAction = enumType(Object.values(LinkReleaseTriggerAction));
var zNodeBadgeMode = enumType(Object.values(NodeBadgeMode));
var zPreviewMethod = enumType([
	"default",
	"none",
	"auto",
	"latent2rgb",
	"taesd"
]);
objectType({
	"Comfy.ColorPalette": stringType(),
	"Comfy.CustomColorPalettes": colorPalettesSchema,
	"Comfy.Canvas.BackgroundImage": stringType().optional(),
	"Comfy.ConfirmClear": booleanType(),
	"Comfy.DevMode": booleanType(),
	"Comfy.Appearance.DisableAnimations": booleanType(),
	"Comfy.UI.TabBarLayout": enumType(["Default", "Legacy"]),
	"Comfy.Workflow.ShowMissingModelsWarning": booleanType(),
	"Comfy.Workflow.WarnBlueprintOverwrite": booleanType(),
	"Comfy.Desktop.CloudNotificationShown": booleanType(),
	"Comfy.DisableFloatRounding": booleanType(),
	"Comfy.DisableSliders": booleanType(),
	"Comfy.DOMClippingEnabled": booleanType(),
	"Comfy.EditAttention.Delta": numberType(),
	"Comfy.EnableTooltips": booleanType(),
	"Comfy.EnableWorkflowViewRestore": booleanType(),
	"Comfy.FloatRoundingPrecision": numberType(),
	"Comfy.Graph.AutoPanSpeed": numberType(),
	"Comfy.Graph.CanvasInfo": booleanType(),
	"Comfy.Graph.CanvasMenu": booleanType(),
	"Comfy.Graph.CtrlShiftZoom": booleanType(),
	"Comfy.Graph.DeduplicateSubgraphNodeIds": booleanType(),
	"Comfy.Graph.LiveSelection": booleanType(),
	"Comfy.Graph.LinkMarkers": nativeEnumType(LinkMarkerShape),
	"Comfy.Graph.ZoomSpeed": numberType(),
	"Comfy.Group.DoubleClickTitleToEdit": booleanType(),
	"Comfy.GroupSelectedNodes.Padding": numberType(),
	"Comfy.Locale": stringType(),
	"Comfy.NodeLibrary.NewDesign": booleanType(),
	"Comfy.NodeLibrary.Bookmarks": arrayType(stringType()),
	"Comfy.NodeLibrary.Bookmarks.V2": arrayType(stringType()),
	"Comfy.NodeLibrary.BookmarksCustomization": recordType(stringType(), zBookmarkCustomization),
	"Comfy.LinkRelease.Action": zLinkReleaseTriggerAction,
	"Comfy.LinkRelease.ActionShift": zLinkReleaseTriggerAction,
	"Comfy.ModelLibrary.AutoLoadAll": booleanType(),
	"Comfy.ModelLibrary.NameFormat": enumType(["filename", "title"]),
	"Comfy.NodeSearchBoxImpl.NodePreview": booleanType(),
	"Comfy.NodeSearchBoxImpl": enumType([
		"default",
		"v1 (legacy)",
		"litegraph (legacy)"
	]),
	"Comfy.NodeSearchBoxImpl.ShowCategory": booleanType(),
	"Comfy.NodeSearchBoxImpl.ShowIdName": booleanType(),
	"Comfy.NodeSearchBoxImpl.ShowNodeFrequency": booleanType(),
	"Comfy.NodeSuggestions.number": numberType(),
	"Comfy.Node.BypassAllLinksOnDelete": booleanType(),
	"Comfy.Node.Opacity": numberType(),
	"Comfy.Node.MiddleClickRerouteNode": booleanType(),
	"Comfy.Node.ShowDeprecated": booleanType(),
	"Comfy.Node.ShowExperimental": booleanType(),
	"Comfy.NodeReplacement.Enabled": booleanType(),
	"Comfy.Pointer.ClickBufferTime": numberType(),
	"Comfy.Pointer.ClickDrift": numberType(),
	"Comfy.Pointer.DoubleClickTime": numberType(),
	"Comfy.PreviewFormat": stringType(),
	"Comfy.PromptFilename": booleanType(),
	"Comfy.Sidebar.Location": enumType(["left", "right"]),
	"Comfy.Sidebar.Size": enumType(["small", "normal"]),
	"Comfy.Sidebar.UnifiedWidth": booleanType(),
	"Comfy.Sidebar.Style": enumType(["floating", "connected"]),
	"Comfy.SnapToGrid.GridSize": numberType(),
	"Comfy.TextareaWidget.FontSize": numberType(),
	"Comfy.TextareaWidget.Spellcheck": booleanType(),
	"Comfy.UseNewMenu": enumType(["Disabled", "Top"]),
	"Comfy.TreeExplorer.ItemPadding": numberType(),
	"Comfy.Validation.Workflows": booleanType(),
	"Comfy.Workflow.SortNodeIdOnSave": booleanType(),
	"Comfy.Execution.PreviewMethod": zPreviewMethod,
	"Comfy.Workflow.WorkflowTabsPosition": enumType(["Sidebar", "Topbar"]),
	"Comfy.Node.DoubleClickTitleToEdit": booleanType(),
	"Comfy.WidgetControlMode": enumType(["before", "after"]),
	"Comfy.Window.UnloadConfirmation": booleanType(),
	"Comfy.NodeBadge.NodeSourceBadgeMode": zNodeBadgeMode,
	"Comfy.NodeBadge.NodeIdBadgeMode": zNodeBadgeMode,
	"Comfy.NodeBadge.NodeLifeCycleBadgeMode": zNodeBadgeMode,
	"Comfy.NodeBadge.ShowApiPricing": booleanType(),
	"Comfy.Notification.ShowVersionUpdates": booleanType(),
	"Comfy.QueueButton.BatchCountLimit": numberType(),
	"Comfy.Queue.MaxHistoryItems": numberType(),
	"Comfy.Queue.History.Expanded": booleanType(),
	"Comfy.WorkflowActions.SeenItems": arrayType(stringType()),
	"Comfy.Keybinding.UnsetBindings": arrayType(zKeybinding),
	"Comfy.Keybinding.NewBindings": arrayType(zKeybinding),
	"Comfy.Keybinding.CurrentPreset": stringType(),
	"Comfy.Extension.Disabled": arrayType(stringType()),
	"Comfy.LinkRenderMode": numberType(),
	"Comfy.Node.AutoSnapLinkToSlot": booleanType(),
	"Comfy.Node.SnapHighlightsNode": booleanType(),
	"Comfy.Server.ServerConfigValues": recordType(stringType(), anyType()),
	"Comfy.Server.LaunchArgs": recordType(stringType(), stringType()),
	"LiteGraph.Canvas.MaximumFps": numberType(),
	"Comfy.Workflow.ConfirmDelete": booleanType(),
	"Comfy.Workflow.AutoSaveDelay": numberType(),
	"Comfy.Workflow.AutoSave": enumType(["off", "after delay"]),
	"Comfy.RerouteBeta": booleanType(),
	"LiteGraph.Canvas.MinFontSizeForLOD": numberType(),
	"Comfy.Canvas.SelectionToolbox": booleanType(),
	"LiteGraph.Node.TooltipDelay": numberType(),
	"LiteGraph.ContextMenu.Scaling": booleanType(),
	"LiteGraph.Reroute.SplineOffset": numberType(),
	"LiteGraph.Canvas.LowQualityRenderingZoomThreshold": numberType(),
	"Comfy.Toast.DisableReconnectingToast": booleanType(),
	"Comfy.Workflow.Persist": booleanType(),
	"Comfy.TutorialCompleted": booleanType(),
	"Comfy.InstalledVersion": stringType().nullable(),
	"Comfy.Node.AllowImageSizeDraw": booleanType(),
	"Comfy.Minimap.Visible": booleanType(),
	"Comfy.Minimap.NodeColors": booleanType(),
	"Comfy.Minimap.ShowLinks": booleanType(),
	"Comfy.Minimap.ShowGroups": booleanType(),
	"Comfy.Minimap.RenderBypassState": booleanType(),
	"Comfy.Minimap.RenderErrorState": booleanType(),
	"Comfy.Canvas.NavigationMode": stringType(),
	"Comfy.Canvas.LeftMouseClickBehavior": stringType(),
	"Comfy.Canvas.MouseWheelScroll": stringType(),
	"Comfy.VueNodes.Enabled": booleanType(),
	"Comfy.AppBuilder.VueNodeSwitchDismissed": booleanType(),
	"Comfy.VueNodes.AutoScaleLayout": booleanType(),
	"Comfy.Assets.UseAssetAPI": booleanType(),
	"Comfy.Queue.QPOV2": booleanType(),
	"Comfy.Queue.ShowRunProgressBar": booleanType(),
	"Comfy-Desktop.AutoUpdate": booleanType(),
	"Comfy-Desktop.SendStatistics": booleanType(),
	"Comfy-Desktop.WindowStyle": stringType(),
	"Comfy-Desktop.UV.PythonInstallMirror": stringType(),
	"Comfy-Desktop.UV.PypiInstallMirror": stringType(),
	"Comfy-Desktop.UV.TorchInstallMirror": stringType(),
	"Comfy.MaskEditor.BrushAdjustmentSpeed": numberType(),
	"Comfy.MaskEditor.UseDominantAxis": booleanType(),
	"Comfy.Load3D.ShowGrid": booleanType(),
	"Comfy.Load3D.BackgroundColor": stringType(),
	"Comfy.Load3D.LightIntensity": numberType(),
	"Comfy.Load3D.LightIntensityMaximum": numberType(),
	"Comfy.Load3D.LightIntensityMinimum": numberType(),
	"Comfy.Load3D.LightAdjustmentIncrement": numberType(),
	"Comfy.Load3D.CameraType": enumType(["perspective", "orthographic"]),
	"Comfy.Load3D.3DViewerEnable": booleanType(),
	"Comfy.Load3D.PLYEngine": enumType([
		"threejs",
		"fastply",
		"sparkjs"
	]),
	"Comfy.Memory.AllowManualUnload": booleanType(),
	"pysssss.SnapToGrid": booleanType(),
	"VHS.AdvancedPreviews": stringType(),
	"Comfy.Release.Version": stringType(),
	"Comfy.Release.Status": enumType([
		"skipped",
		"changelog seen",
		"what's new seen"
	]),
	"Comfy.Release.Timestamp": numberType(),
	"Comfy.Templates.SelectedModels": arrayType(stringType()),
	"Comfy.Templates.SelectedUseCases": arrayType(stringType()),
	"Comfy.Templates.SelectedRunsOn": arrayType(stringType()),
	"Comfy.Templates.SortBy": enumType([
		"default",
		"recommended",
		"popular",
		"alphabetical",
		"newest",
		"vram-low-to-high",
		"model-size-low-to-high"
	]),
	"test.setting": anyType(),
	"main.sub.setting.name": anyType(),
	"single.setting": anyType(),
	"LiteGraph.Node.DefaultPadding": booleanType(),
	"LiteGraph.Pointer.TrackpadGestures": booleanType(),
	"Comfy.VersionCompatibility.DisableWarnings": booleanType(),
	"Comfy.RightSidePanel.IsOpen": booleanType(),
	"Comfy.RightSidePanel.ShowErrorsTab": booleanType(),
	"Comfy.Node.AlwaysShowAdvancedWidgets": booleanType(),
	"LiteGraph.Group.SelectChildrenOnClick": booleanType()
});
var zComfyHubProfile = objectType({
	username: stringType(),
	name: stringType().optional(),
	description: stringType().optional(),
	coverImageUrl: stringType().nullish(),
	profilePictureUrl: stringType().nullish()
});
var zAssetInfo = objectType({
	id: stringType(),
	name: stringType(),
	preview_url: stringType(),
	storage_url: stringType(),
	model: booleanType(),
	public: booleanType(),
	in_library: booleanType()
});
var zShareableAssetsResponse = objectType({ assets: arrayType(zAssetInfo) });
//#endregion
//#region src/platform/remote/comfyui/jobs/jobTypes.ts
/**
* @fileoverview Jobs API types - Backend job API format
* @module platform/remote/comfyui/jobs/jobTypes
*
* These types represent the jobs API format returned by the backend.
* Jobs API provides a memory-optimized alternative to history API.
*/
var zJobStatus = enumType([
	"pending",
	"in_progress",
	"completed",
	"failed",
	"cancelled"
]);
var zPreviewOutput = objectType({
	filename: stringType().optional(),
	subfolder: stringType().optional(),
	type: resultItemType.optional(),
	nodeId: stringType(),
	mediaType: stringType(),
	display_name: stringType().optional()
}).passthrough();
/**
* Execution error from Jobs API.
* Similar to ExecutionErrorWsMessage but with optional prompt_id/timestamp/executed
* since these may not be present in stored errors or infrastructure-generated errors.
*/
var zExecutionError = objectType({
	prompt_id: stringType().optional(),
	timestamp: numberType().optional(),
	node_id: stringType(),
	node_type: stringType(),
	executed: arrayType(stringType()).optional(),
	exception_message: stringType(),
	exception_type: stringType(),
	traceback: arrayType(stringType()),
	current_inputs: unknownType(),
	current_outputs: unknownType()
}).passthrough();
/**
* Raw job from API - uses passthrough to allow extra fields
*/
var zRawJobListItem = objectType({
	id: stringType(),
	status: zJobStatus,
	create_time: numberType(),
	execution_start_time: numberType().nullable().optional(),
	execution_end_time: numberType().nullable().optional(),
	preview_output: zPreviewOutput.nullable().optional(),
	outputs_count: numberType().nullable().optional(),
	execution_error: zExecutionError.nullable().optional(),
	workflow_id: stringType().nullable().optional(),
	priority: numberType().optional()
}).passthrough();
/**
* Job detail - returned by GET /api/jobs/{job_id} (detail endpoint)
* Includes full workflow and outputs for re-execution and downloads
*/
var zJobDetail = zRawJobListItem.extend({
	workflow: unknownType().optional(),
	outputs: zTaskOutput.optional(),
	update_time: numberType().optional(),
	execution_status: unknownType().optional(),
	execution_meta: unknownType().optional()
}).passthrough();
var zPaginationInfo = objectType({
	offset: numberType(),
	limit: numberType(),
	total: numberType(),
	has_more: booleanType()
});
var zJobsListResponse = objectType({
	jobs: arrayType(zRawJobListItem),
	pagination: zPaginationInfo
});
/** Schema for workflow container structure in job detail responses */
var zWorkflowContainer = objectType({ extra_data: objectType({ extra_pnginfo: objectType({ workflow: unknownType() }).optional() }).optional() });
//#endregion
//#region src/platform/remote/comfyui/jobs/fetchJobs.ts
/**
* Fetches raw jobs from /jobs endpoint
* @internal
*/
async function fetchJobsRaw(fetchApi, statuses, maxItems = 200, offset = 0) {
	const url = `/jobs?status=${statuses.join(",")}&limit=${maxItems}&offset=${offset}`;
	try {
		const res = await fetchApi(url);
		if (!res.ok) {
			console.error(`[Jobs API] Failed to fetch jobs: ${res.status}`);
			return {
				jobs: [],
				total: 0,
				offset: 0
			};
		}
		const data = zJobsListResponse.parse(await res.json());
		return {
			jobs: data.jobs,
			total: data.pagination.total,
			offset
		};
	} catch (error) {
		console.error("[Jobs API] Error fetching jobs:", error);
		return {
			jobs: [],
			total: 0,
			offset: 0
		};
	}
}
var QUEUE_PRIORITY_BASE = 1e6;
/**
* Assigns synthetic priority to jobs.
* Only assigns if job doesn't already have a server-provided priority.
*/
function assignPriority(jobs, basePriority) {
	return jobs.map((job, index) => ({
		...job,
		priority: job.priority ?? basePriority - index
	}));
}
/**
* Fetches history (terminal state jobs: completed, failed, cancelled)
* Assigns synthetic priority starting from total (lower than queue jobs).
*/
async function fetchHistory(fetchApi, maxItems = 200, offset = 0) {
	const { jobs, total } = await fetchJobsRaw(fetchApi, [
		"completed",
		"failed",
		"cancelled"
	], maxItems, offset);
	return assignPriority(jobs, total - offset);
}
/**
* Fetches queue (in_progress + pending jobs)
* Pending jobs get highest priority, then running jobs.
*/
async function fetchQueue(fetchApi) {
	const { jobs } = await fetchJobsRaw(fetchApi, ["in_progress", "pending"], 200, 0);
	const running = jobs.filter((j) => j.status === "in_progress");
	const pending = jobs.filter((j) => j.status === "pending");
	return {
		Running: assignPriority(running, QUEUE_PRIORITY_BASE + running.length),
		Pending: assignPriority(pending, QUEUE_PRIORITY_BASE + running.length + pending.length)
	};
}
/**
* Fetches full job details from /jobs/{job_id}
*/
async function fetchJobDetail(fetchApi, jobId) {
	try {
		const res = await fetchApi(`/jobs/${encodeURIComponent(jobId)}`);
		if (!res.ok) {
			console.warn(`Job not found for job ${jobId}`);
			return;
		}
		return zJobDetail.parse(await res.json());
	} catch (error) {
		console.error(`Failed to fetch job detail for job ${jobId}:`, error);
		return;
	}
}
/**
* Extracts and validates workflow from job detail response.
* The workflow is nested at: workflow.extra_data.extra_pnginfo.workflow
*
* Uses Zod validation via validateComfyWorkflow to ensure the workflow
* conforms to the expected schema. Logs validation failures for debugging
* but still returns undefined to allow graceful degradation.
*/
async function extractWorkflow(job) {
	const parsed = zWorkflowContainer.safeParse(job?.workflow);
	if (!parsed.success) return void 0;
	const rawWorkflow = parsed.data.extra_data?.extra_pnginfo?.workflow;
	if (!rawWorkflow) return void 0;
	return await validateComfyWorkflow(rawWorkflow, (error) => {
		console.warn("[extractWorkflow] Workflow validation failed:", error);
	}) ?? void 0;
}
//#endregion
//#region src/scripts/api.ts
var UnauthorizedError = class extends Error {};
function addHeaderEntry(headers, key, value) {
	if (Array.isArray(headers)) headers.push([key, value]);
	else if (headers instanceof Headers) headers.set(key, value);
	else headers[key] = value;
}
var PromptExecutionError = class extends Error {
	response;
	status;
	constructor(response, status) {
		super("Prompt execution failed");
		this.response = response;
		this.status = status;
	}
	toString() {
		let message = "";
		if (typeof this.response.error === "string") message += this.response.error;
		else if (this.response.error) message += this.response.error.message + ": " + this.response.error.details;
		for (const [_, nodeError] of Object.entries(this.response.node_errors ?? [])) {
			message += "\n" + nodeError.class_type + ":";
			for (const errorReason of nodeError.errors) message += "\n    - " + errorReason.message + ": " + errorReason.details;
		}
		return message;
	}
};
var ComfyApi = class extends EventTarget {
	_registered = /* @__PURE__ */ new Set();
	api_host;
	api_base;
	/**
	* The client id from the initial session storage.
	*/
	initialClientId;
	/**
	* The current client id from websocket status updates.
	*/
	clientId;
	/**
	* The current user id.
	*/
	user;
	socket = null;
	/**
	* Cache Firebase auth store composable function.
	*/
	authStoreComposable;
	reportedUnknownMessageTypes = /* @__PURE__ */ new Set();
	/**
	* Get feature flags supported by this frontend client.
	* Returns a copy to prevent external modification.
	*/
	getClientFeatureFlags() {
		return { ...clientFeatureFlags_default };
	}
	/**
	* Feature flags received from the backend server.
	*/
	serverFeatureFlags = ref({});
	/**
	* The auth token for the comfy org account if the user is logged in.
	* This is only used for {@link queuePrompt} now. It is not directly
	* passed as parameter to the function because some custom nodes are hijacking
	* {@link queuePrompt} improperly, which causes extra parameters to be lost
	* in the function call chain.
	*
	* Ref: https://cs.comfy.org/search?q=context:global+%22api.queuePrompt+%3D%22&patternType=keyword&sm=0
	*
	* TODO: Move this field to parameter of {@link queuePrompt} once all
	* custom nodes are patched.
	*/
	authToken;
	/**
	* The API key for the comfy org account if the user logged in via API key.
	*/
	apiKey;
	constructor() {
		super();
		this.user = "";
		this.api_host = location.host;
		this.api_base = isCloud ? "" : location.pathname.split("/").slice(0, -1).join("/");
		this.initialClientId = sessionStorage.getItem("clientId");
	}
	internalURL(route) {
		return this.api_base + "/internal" + route;
	}
	apiURL(route) {
		if (route.startsWith("/api")) return this.api_base + route;
		return this.api_base + "/api" + route;
	}
	fileURL(route) {
		return this.api_base + route;
	}
	/**
	* Gets the Firebase auth store instance using cached composable function.
	* Caches the composable function on first call, then reuses it.
	* Returns null for non-cloud distributions.
	* @returns The Firebase auth store instance, or null if not in cloud
	*/
	async getAuthStore() {
		if (isCloud) {
			if (!this.authStoreComposable) this.authStoreComposable = (await __vitePreload(() => import("./authStore-D_v8_OOv.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]), import.meta.url)).useAuthStore;
			return this.authStoreComposable();
		}
	}
	/**
	* Waits for Firebase auth to be initialized before proceeding.
	* Includes 10-second timeout to prevent infinite hanging.
	*/
	async waitForAuthInitialization() {
		if (isCloud) {
			const authStore = await this.getAuthStore();
			if (!authStore) return;
			if (authStore.isInitialized) return;
			const { isInitialized } = storeToRefs(authStore);
			try {
				await Promise.race([until(isInitialized).toBe(true), promiseTimeout(1e4)]);
			} catch {
				console.warn("Firebase auth initialization timeout after 10 seconds");
			}
		}
	}
	async fetchApi(route, options) {
		const headers = options?.headers ?? {};
		if (isCloud) {
			await this.waitForAuthInitialization();
			const getAuthHeaderIfAvailable = async () => {
				try {
					const authStore = await this.getAuthStore();
					return authStore ? await authStore.getAuthHeader() : null;
				} catch (error) {
					console.warn("Failed to get auth header:", error);
					return null;
				}
			};
			const authHeader = await getAuthHeaderIfAvailable();
			if (authHeader) for (const [key, value] of Object.entries(authHeader)) addHeaderEntry(headers, key, value);
		}
		addHeaderEntry(headers, "Comfy-User", this.user);
		return fetch(this.apiURL(route), {
			cache: "no-cache",
			...options,
			headers
		});
	}
	addEventListener(type, callback, options) {
		super.addEventListener(type, callback, options);
		this._registered.add(type);
	}
	removeEventListener(type, callback, options) {
		super.removeEventListener(type, callback, options);
	}
	addCustomEventListener(type, callback, options) {
		super.addEventListener(type, callback, options);
		this._registered.add(type);
	}
	removeCustomEventListener(type, callback, options) {
		super.removeEventListener(type, callback, options);
	}
	dispatchCustomEvent(type, detail) {
		const event = detail === void 0 ? new CustomEvent(type) : new CustomEvent(type, { detail });
		return super.dispatchEvent(event);
	}
	/** @deprecated Use {@link dispatchCustomEvent}. */
	dispatchEvent(event) {
		return super.dispatchEvent(event);
	}
	/**
	* Poll status  for colab and other things that don't support websockets.
	*/
	_pollQueue() {
		setInterval(async () => {
			try {
				const status = await (await this.fetchApi("/prompt")).json();
				this.dispatchCustomEvent("status", status);
			} catch (error) {
				this.dispatchCustomEvent("status", null);
			}
		}, 1e3);
	}
	/**
	* Creates and connects a WebSocket for realtime updates
	* @param {boolean} isReconnect If the socket is connection is a reconnect attempt
	*/
	async createSocket(isReconnect) {
		if (this.socket) return;
		let opened = false;
		let existingSession = window.name;
		const params = new URLSearchParams();
		if (existingSession) params.set("clientId", existingSession);
		if (isCloud) try {
			const authToken = await (await this.getAuthStore())?.getAuthToken();
			if (authToken) params.set("token", authToken);
		} catch (error) {
			console.warn("Could not get auth token for WebSocket connection:", error);
		}
		const baseUrl = `${window.location.protocol === "https:" ? "wss" : "ws"}://${this.api_host}${this.api_base}/ws`;
		const query = params.toString();
		const wsUrl = query ? `${baseUrl}?${query}` : baseUrl;
		this.socket = new WebSocket(wsUrl);
		this.socket.binaryType = "arraybuffer";
		this.socket.addEventListener("open", () => {
			opened = true;
			this.socket.send(JSON.stringify({
				type: "feature_flags",
				data: this.getClientFeatureFlags()
			}));
			if (isReconnect) this.dispatchCustomEvent("reconnected");
		});
		this.socket.addEventListener("error", () => {
			if (this.socket) this.socket.close();
			if (!isReconnect && !opened) this._pollQueue();
		});
		this.socket.addEventListener("close", () => {
			setTimeout(async () => {
				this.socket = null;
				await this.createSocket(true);
			}, 300);
			if (opened) {
				this.dispatchCustomEvent("status", null);
				this.dispatchCustomEvent("reconnecting");
			}
		});
		this.socket.addEventListener("message", (event) => {
			try {
				if (event.data instanceof ArrayBuffer) {
					const view = new DataView(event.data);
					const eventType = view.getUint32(0);
					let imageMime;
					switch (eventType) {
						case 3:
							try {
								const decoder3 = new TextDecoder();
								const rawData = event.data.slice(4);
								const rawView = new DataView(rawData);
								let offset = 0;
								let promptId;
								if (this.getClientFeatureFlags()?.supports_progress_text_metadata) {
									const promptIdLength = rawView.getUint32(offset);
									offset += 4;
									promptId = decoder3.decode(rawData.slice(offset, offset + promptIdLength));
									offset += promptIdLength;
								}
								const nodeIdLength = rawView.getUint32(offset);
								offset += 4;
								const nodeId = decoder3.decode(rawData.slice(offset, offset + nodeIdLength));
								offset += nodeIdLength;
								const text = decoder3.decode(rawData.slice(offset));
								this.dispatchCustomEvent("progress_text", {
									nodeId,
									text,
									...promptId !== void 0 && { prompt_id: promptId }
								});
							} catch (e) {
								console.warn("Failed to parse progress_text binary message", e);
							}
							break;
						case 1:
							const imageType = view.getUint32(4);
							const imageData = event.data.slice(8);
							switch (imageType) {
								case 2:
									imageMime = "image/png";
									break;
								default:
									imageMime = "image/jpeg";
									break;
							}
							const imageBlob = new Blob([imageData], { type: imageMime });
							this.dispatchCustomEvent("b_preview", imageBlob);
							break;
						case 4:
							const decoder4 = new TextDecoder();
							const metadataLength = view.getUint32(4);
							const metadataBytes = event.data.slice(8, 8 + metadataLength);
							const metadata = JSON.parse(decoder4.decode(metadataBytes));
							const imageData4 = event.data.slice(8 + metadataLength);
							let imageMime4 = metadata.image_type;
							const imageBlob4 = new Blob([imageData4], { type: imageMime4 });
							this.dispatchCustomEvent("b_preview_with_metadata", {
								blob: imageBlob4,
								nodeId: metadata.node_id,
								displayNodeId: metadata.display_node_id,
								parentNodeId: metadata.parent_node_id,
								realNodeId: metadata.real_node_id,
								jobId: metadata.prompt_id
							});
							this.dispatchCustomEvent("b_preview", imageBlob4);
							break;
						default: throw new Error(`Unknown binary websocket message of type ${eventType}`);
					}
				} else {
					const msg = JSON.parse(event.data);
					switch (msg.type) {
						case "status":
							if (msg.data.sid) {
								const clientId = msg.data.sid;
								this.clientId = clientId;
								window.name = clientId;
								sessionStorage.setItem("clientId", clientId);
							}
							this.dispatchCustomEvent("status", msg.data.status ?? null);
							break;
						case "executing":
							this.dispatchCustomEvent("executing", msg.data.display_node || msg.data.node);
							break;
						case "execution_start":
						case "execution_error":
						case "execution_interrupted":
						case "execution_cached":
						case "execution_success":
						case "progress":
						case "progress_state":
						case "executed":
						case "graphChanged":
						case "promptQueued":
						case "logs":
						case "b_preview":
						case "notification":
							this.dispatchCustomEvent(msg.type, msg.data);
							break;
						case "feature_flags":
							this.serverFeatureFlags.value = msg.data;
							this.serverFeatureFlags.value;
							this.dispatchCustomEvent("feature_flags", msg.data);
							break;
						default: if (this._registered.has(msg.type)) super.dispatchEvent(new CustomEvent(msg.type, { detail: msg.data }));
						else if (!this.reportedUnknownMessageTypes.has(msg.type)) {
							this.reportedUnknownMessageTypes.add(msg.type);
							throw new Error(`Unknown message type ${msg.type}`);
						}
					}
				}
			} catch (error) {
				console.warn("Unhandled message:", event.data, error);
			}
		});
	}
	/**
	* Initialises sockets and realtime updates
	*/
	init() {
		this.createSocket();
	}
	/**
	* Gets a list of extension urls
	*/
	async getExtensions() {
		return await (await this.fetchApi("/extensions", { cache: "no-store" })).json();
	}
	/**
	* Gets the available workflow templates from custom nodes.
	* @returns A map of custom_node names and associated template workflow names.
	*/
	async getWorkflowTemplates() {
		return await (await this.fetchApi("/workflow_templates")).json();
	}
	/**
	* Gets the index of core workflow templates.
	* @param locale Optional locale code (e.g., 'en', 'fr', 'zh') to load localized templates
	*/
	async getCoreWorkflowTemplates(locale) {
		const fileName = locale && locale !== "en" ? `index.${locale}.json` : "index.json";
		try {
			const res = await axios.get(this.fileURL(`/templates/${fileName}`));
			return res.headers["content-type"]?.includes("application/json") ? res.data : [];
		} catch (error) {
			if (locale && locale !== "en") {
				console.warn(`Localized templates for '${locale}' not found, falling back to English`);
				return this.getCoreWorkflowTemplates();
			}
			console.error("Error loading core workflow templates:", error);
			return [];
		}
	}
	/**
	* Gets a list of embedding names
	*/
	async getEmbeddings() {
		return await (await this.fetchApi("/embeddings", { cache: "no-store" })).json();
	}
	/**
	* Loads node object definitions for the graph
	* @returns The node definitions
	*/
	async getNodeDefs() {
		return await (await this.fetchApi("/object_info", { cache: "no-store" })).json();
	}
	/**
	* Queues a prompt to be executed
	* @param {number} number The index at which to queue the prompt, passing -1 will insert the prompt at the front of the queue
	* @param {object} data The prompt data to queue
	* @param {QueuePromptOptions} options Optional execution options
	* @throws {PromptExecutionError} If the prompt fails to execute
	*/
	async queuePrompt(number, data, options) {
		const { output: prompt, workflow } = data;
		const body = {
			client_id: this.clientId ?? "",
			prompt,
			...options?.partialExecutionTargets && { partial_execution_targets: options.partialExecutionTargets },
			extra_data: {
				auth_token_comfy_org: this.authToken,
				api_key_comfy_org: this.apiKey,
				extra_pnginfo: { workflow },
				...options?.previewMethod && options.previewMethod !== "default" && { preview_method: options.previewMethod }
			}
		};
		if (number === -1) body.front = true;
		else if (number != 0) body.number = number;
		const res = await this.fetchApi("/prompt", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		if (res.status !== 200) {
			const text = await res.text();
			let errorResponse;
			try {
				errorResponse = JSON.parse(text);
			} catch {
				errorResponse = { error: {
					type: "server_error",
					message: `${res.status} ${res.statusText}`,
					details: text
				} };
			}
			throw new PromptExecutionError(errorResponse, res.status);
		}
		return await res.json();
	}
	/**
	* Gets the list of assets and models referenced by a prompt that would
	* need user consent before sharing.
	*/
	async getShareableAssets(prompt, options) {
		const body = { workflow_api_json: prompt };
		if (options?.owned !== void 0) body.owned = options.owned;
		const res = await this.fetchApi("/assets/from-workflow", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		if (res.status !== 200) throw new Error(`Failed to fetch shareable assets: ${res.status}`);
		const data = await res.json();
		return zShareableAssetsResponse.parse(data);
	}
	/**
	* Gets a list of model folder keys (eg ['checkpoints', 'loras', ...])
	* @returns The list of model folder keys
	*/
	async getModelFolders() {
		const res = await this.fetchApi(`/experiment/models`);
		if (res.status === 404) return [];
		const folderBlacklist = ["configs", "custom_nodes"];
		return (await res.json()).filter((folder) => !folderBlacklist.includes(folder.name));
	}
	/**
	* Gets a list of models in the specified folder
	* @param {string} folder The folder to list models from, such as 'checkpoints'
	* @returns The list of model filenames within the specified folder
	*/
	async getModels(folder) {
		const res = await this.fetchApi(`/experiment/models/${folder}`);
		if (res.status === 404) return [];
		return await res.json();
	}
	/**
	* Gets the metadata for a model
	* @param {string} folder The folder containing the model
	* @param {string} model The model to get metadata for
	* @returns The metadata for the model
	*/
	async viewMetadata(folder, model) {
		const res = await this.fetchApi(`/view_metadata/${folder}?filename=${encodeURIComponent(model)}`);
		const rawResponse = await res.text();
		if (!rawResponse) return null;
		try {
			return JSON.parse(rawResponse);
		} catch (error) {
			console.error("Error viewing metadata", res.status, res.statusText, rawResponse, error);
			return null;
		}
	}
	/**
	* Loads a list of items (queue or history)
	* @param {string} type The type of items to load, queue or history
	* @returns The items of the specified type grouped by their status
	*/
	async getItems(type) {
		if (type === "queue") return this.getQueue();
		return this.getHistory();
	}
	/**
	* Gets the current state of the queue
	* @returns The currently running and queued items
	*/
	async getQueue() {
		try {
			return await fetchQueue(this.fetchApi.bind(this));
		} catch (error) {
			console.error("Failed to fetch queue:", error);
			return {
				Running: [],
				Pending: []
			};
		}
	}
	/**
	* Gets the prompt execution history
	* @returns Prompt history including node outputs
	*/
	async getHistory(max_items = 200, options) {
		try {
			return await fetchHistory(this.fetchApi.bind(this), max_items, options?.offset);
		} catch (error) {
			console.error(error);
			return [];
		}
	}
	/**
	* Gets detailed job info including outputs and workflow
	* @param jobId The job ID
	* @returns Full job details or undefined if not found
	*/
	async getJobDetail(jobId) {
		return fetchJobDetail(this.fetchApi.bind(this), jobId);
	}
	/**
	* Gets system & device stats
	* @returns System stats such as python version, OS, per device info
	*/
	async getSystemStats() {
		return await (await this.fetchApi("/system_stats")).json();
	}
	/**
	* Sends a POST request to the API
	* @param {*} type The endpoint to post to
	* @param {*} body Optional POST data
	*/
	async _postItem(type, body) {
		try {
			await this.fetchApi("/" + type, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: body ? JSON.stringify(body) : void 0
			});
		} catch (error) {
			console.error(error);
		}
	}
	/**
	* Deletes an item from the specified list
	* @param {string} type The type of item to delete, queue or history
	* @param {number} id The id of the item to delete
	*/
	async deleteItem(type, id) {
		await this._postItem(type, { delete: [id] });
	}
	/**
	* Clears the specified list
	* @param {string} type The type of list to clear, queue or history
	*/
	async clearItems(type) {
		await this._postItem(type, { clear: true });
	}
	/**
	* Interrupts the execution of the running job. If runningJobId is provided,
	* it is included in the payload as a helpful hint to the backend.
	* @param {string | null} [runningJobId] Optional Running Job ID to interrupt
	*/
	async interrupt(runningJobId) {
		await this._postItem("interrupt", runningJobId ? { prompt_id: runningJobId } : void 0);
	}
	/**
	* Gets user configuration data and where data should be stored
	*/
	async getUserConfig() {
		return (await this.fetchApi("/users")).json();
	}
	/**
	* Creates a new user
	* @param { string } username
	* @returns The fetch response
	*/
	createUser(username) {
		return this.fetchApi("/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username })
		});
	}
	/**
	* Gets all setting values for the current user
	* @returns { Promise<string, unknown> } A dictionary of id -> value
	*/
	async getSettings() {
		const resp = await this.fetchApi("/settings");
		if (resp.status == 401) throw new UnauthorizedError(resp.statusText);
		return await resp.json();
	}
	/**
	* Gets a setting for the current user
	* @param { string } id The id of the setting to fetch
	* @returns { Promise<unknown> } The setting value
	*/
	async getSetting(id) {
		return (await this.fetchApi(`/settings/${encodeURIComponent(id)}`)).json();
	}
	/**
	* Stores a dictionary of settings for the current user
	*/
	async storeSettings(settings) {
		return this.fetchApi(`/settings`, {
			method: "POST",
			body: JSON.stringify(settings)
		});
	}
	/**
	* Stores a setting for the current user
	*/
	async storeSetting(id, value) {
		return this.fetchApi(`/settings/${encodeURIComponent(id)}`, {
			method: "POST",
			body: JSON.stringify(value)
		});
	}
	/**
	* Gets a user data file for the current user
	*/
	async getUserData(file, options) {
		return this.fetchApi(`/userdata/${encodeURIComponent(file)}`, options);
	}
	/**
	* Stores a user data file for the current user
	* @param { string } file The name of the userdata file to save
	* @param { unknown } data The data to save to the file
	* @param { RequestInit & { stringify?: boolean, throwOnError?: boolean } } [options]
	* @returns { Promise<Response> }
	*/
	async storeUserData(file, data, options = {
		overwrite: true,
		stringify: true,
		throwOnError: true,
		full_info: false
	}) {
		const resp = await this.fetchApi(`/userdata/${encodeURIComponent(file)}?overwrite=${options.overwrite}&full_info=${options.full_info}`, {
			method: "POST",
			body: options?.stringify ? JSON.stringify(data) : data,
			...options
		});
		if (resp.status !== 200 && options.throwOnError !== false) throw new Error(`Error storing user data file '${file}': ${resp.status} ${(await resp).statusText}`);
		return resp;
	}
	/**
	* Deletes a user data file for the current user
	* @param { string } file The name of the userdata file to delete
	*/
	async deleteUserData(file) {
		return await this.fetchApi(`/userdata/${encodeURIComponent(file)}`, { method: "DELETE" });
	}
	/**
	* Move a user data file for the current user
	* @param { string } source The userdata file to move
	* @param { string } dest The destination for the file
	*/
	async moveUserData(source, dest, options = { overwrite: false }) {
		return await this.fetchApi(`/userdata/${encodeURIComponent(source)}/move/${encodeURIComponent(dest)}?overwrite=${options?.overwrite}`, { method: "POST" });
	}
	async listUserDataFullInfo(dir) {
		const trimmedDir = trimEnd(dir, "/");
		const resp = await this.fetchApi(`/userdata?dir=${encodeURIComponent(trimmedDir)}&recurse=true&split=false&full_info=true`);
		if (resp.status === 404) return [];
		if (resp.status !== 200) throw new Error(`Error getting user data list '${trimmedDir}': ${resp.status} ${resp.statusText}`);
		return resp.json();
	}
	async getGlobalSubgraphData(id) {
		const resp = await api.fetchApi("/global_subgraphs/" + id);
		if (resp.status !== 200) throw new Error(`Failed to fetch global subgraph '${id}': ${resp.status} ${resp.statusText}`);
		const subgraph = await resp.json();
		if (!subgraph?.data) throw new Error(`Global subgraph '${id}' returned empty data`);
		return subgraph.data;
	}
	async getGlobalSubgraphs() {
		const resp = await api.fetchApi("/global_subgraphs");
		if (resp.status !== 200) return {};
		const subgraphs = await resp.json();
		for (const [k, v] of Object.entries(subgraphs)) if (!v.data) v.data = this.getGlobalSubgraphData(k);
		return subgraphs;
	}
	async getLogs() {
		const url = isCloud ? this.apiURL("/logs") : this.internalURL("/logs");
		return (await axios.get(url)).data;
	}
	async getRawLogs() {
		const url = isCloud ? this.apiURL("/logs/raw") : this.internalURL("/logs/raw");
		return (await axios.get(url)).data;
	}
	async subscribeLogs(enabled) {
		const url = isCloud ? this.apiURL("/logs/subscribe") : this.internalURL("/logs/subscribe");
		return await axios.patch(url, {
			enabled,
			clientId: this.clientId
		});
	}
	async getFolderPaths() {
		const response = await axios.get(this.internalURL("/folder_paths")).catch(() => null);
		if (!response) return {};
		return response.data;
	}
	async freeMemory(options) {
		try {
			let mode = "";
			if (options.freeExecutionCache) mode = "{\"unload_models\": true, \"free_memory\": true}";
			else mode = "{\"unload_models\": true}";
			if ((await this.fetchApi(`/free`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: mode
			})).status === 200) if (options.freeExecutionCache) useToastStore().add({
				severity: "success",
				summary: "Models and Execution Cache have been cleared.",
				life: 3e3
			});
			else useToastStore().add({
				severity: "success",
				summary: "Models have been unloaded.",
				life: 3e3
			});
			else useToastStore().add({
				severity: "error",
				summary: "Unloading of models failed. Installed ComfyUI may be an outdated version."
			});
		} catch (error) {
			useToastStore().add({
				severity: "error",
				summary: "An error occurred while trying to unload models."
			});
		}
	}
	/**
	* Gets the custom nodes i18n data from the server.
	*
	* @returns The custom nodes i18n data
	*/
	async getCustomNodesI18n() {
		return (await axios.get(this.apiURL("/i18n"))).data;
	}
	/**
	* Checks if the server supports a specific feature.
	* @param featureName The name of the feature to check (supports dot notation for nested values)
	* @returns true if the feature is supported, false otherwise
	*/
	serverSupportsFeature(featureName) {
		const override = /* @__PURE__ */ getDevOverride(featureName);
		if (override !== void 0) return override;
		return get(this.serverFeatureFlags.value, featureName) === true;
	}
	/**
	* Gets a server feature flag value.
	* @param featureName The name of the feature to get (supports dot notation for nested values)
	* @param defaultValue The default value if the feature is not found
	* @returns The feature value or default
	*/
	getServerFeature(featureName, defaultValue) {
		const override = /* @__PURE__ */ getDevOverride(featureName);
		if (override !== void 0) return override;
		return get(this.serverFeatureFlags.value, featureName, defaultValue);
	}
	/**
	* Gets all server feature flags.
	* @returns Copy of all server feature flags
	*/
	getServerFeatures() {
		return { ...this.serverFeatureFlags.value };
	}
	async getFuseOptions() {
		try {
			const res = await axios.get(this.fileURL("/templates/fuse_options.json"), { headers: { "Content-Type": "application/json" } });
			return res.headers["content-type"]?.includes("application/json") ? res.data : null;
		} catch (error) {
			console.error("Error loading fuse options:", error);
			return null;
		}
	}
};
var api = new ComfyApi();
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.api = window.comfyAPI.api || {};
window.comfyAPI.api.UnauthorizedError = UnauthorizedError;
window.comfyAPI.api.PromptExecutionError = PromptExecutionError;
window.comfyAPI.api.ComfyApi = ComfyApi;
window.comfyAPI.api.api = api;
//#endregion
export { executionIdToNodeLocatorId as $, matchPromotedInput as A, useLayoutMutations as At, Reroute as B, DragAndScale as Bt, alignNodes as C, getParentExecutionIds as Ct, CANVAS_IMAGE_PREVIEW_WIDGET as D, stripGraphPrefix as Dt, ExecutableNodeDTO as E, parseNodeLocatorId as Et, LGraphNode as F, toPoint as Ft, BadgePosition as G, LGraphEventMode as Gt, isOverNodeInput as H, containsRect as Ht, isComboWidget as I, LayoutSource as It, getSlotKey as J, NodeSlotType as Jt, LGraphBadge as K, LinkDirection as Kt, LegacyWidget as L, removeNodeTitleHeight as Lt, isPromotedWidgetView as M, isBoundsEqual as Mt, useDomWidgetStore as N, isPointEqual as Nt, supportsVirtualCanvasImagePreview as O, useWidgetValueStore as Ot, LGraphGroup as P, isSizeEqual as Pt, collectFromNodes as Q, getDevOverride as Qt, BaseWidget as R, commonType as Rt, LGraphCanvas as S, getAncestorExecutionIds as St, SubgraphNode as T, parseNodeExecutionId as Tt, isOverNodeOutput as U, createBounds as Ut, NodeSlot as V, containsCentre as Vt, LLink as W, snapPoint as Wt, PREFIX as X, TitleMode as Xt, AutoPanController as Y, RenderShape as Yt, collectAllNodes as Z, ContextMenu as Zt, flattenWorkflowNodes as _, isSlotObject as _t, resultItemType as a, getExecutionIdByNode as at, LiteGraph as b, createNodeExecutionId as bt, LinkReleaseTriggerAction as c, getLocatorIdFromNodeData as ct, NodeSourceType as d, getRootParentNode as dt, findSubgraphPathById as et, getNodeSource as f, mapAllNodes as ft, buildSubgraphExecutionPaths as g, isResultItemType as gt, paletteSchema as h, isNonNullish as ht, extractWorkflow as i, getAllNonIoNodesInSubgraph as it, resolveConcretePromotedWidget as j, layoutStore as jt, resolveSubgraphInputTarget as k, usePromotionStore as kt, CORE_NODE_MODULES as l, getNodeByExecutionId as lt, comfyBaseSchema as m, isAbortError as mt, UnauthorizedError as n, forEachSubgraphNode as nt, zAssetInfo as o, getExecutionIdFromNodeData as ot, zKeybindingPreset as p, triggerCallbackOnAllNodes as pt, CanvasPointer as q, LinkMarkerShape as qt, api as r, getActiveGraphNodeIds as rt, zComfyHubProfile as s, getExecutionIdsForSelectedNodes as st, PromptExecutionError as t, forEachNode as tt, NodeBadgeMode as u, getNodeByLocatorId as ut, isSubgraphDefinition as v, isSubgraph as vt, distributeNodes as w, isNodeExecutionId as wt, LGraph as x, createNodeLocatorId as xt, validateComfyWorkflow as y, compareExecutionId as yt, defineDeprecatedProperty as z, isColorable as zt };

//# sourceMappingURL=api-kFdESQTE.js.map