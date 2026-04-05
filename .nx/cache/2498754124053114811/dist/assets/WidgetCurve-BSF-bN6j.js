import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, G as mergeModels, I as createVNode, O as createBaseVNode, Pt as toRef, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Y as onBeforeUnmount, _t as withCtx, b as withModifiers, et as openBlock, ft as useTemplateRef, j as createElementBlock, k as createBlock, kt as ref, nt as renderList, pt as watch, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import "./Button-BDFSC50t.js";
import { M as useNodeOutputStore } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bx34DVM6.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
import { n as singleValueExtractor, r as useUpstreamValue } from "./useUpstreamValue-DXPp0F2N.js";
import { a as CURVE_INTERPOLATIONS, i as isCurveData, r as histogramToPath, t as createInterpolator } from "./curveUtils-DrOuXIbn.js";
//#region src/composables/useCurveEditor.ts
function useCurveEditor({ svgRef, modelValue, interpolation }) {
	const dragIndex = ref(-1);
	let cleanupDrag = null;
	const curvePath = computed(() => {
		const points = modelValue.value;
		if (points.length < 2) return "";
		const sorted = [...points].sort((a, b) => a[0] - b[0]);
		if (interpolation.value === "linear") return sorted.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${1 - p[1]}`).join("");
		const interpolate = createInterpolator(sorted, interpolation.value);
		const xMin = sorted[0][0];
		const xMax = sorted[sorted.length - 1][0];
		const segments = 128;
		const range = xMax - xMin;
		const parts = [];
		for (let i = 0; i <= segments; i++) {
			const x = xMin + range * (i / segments);
			const y = 1 - interpolate(x);
			parts.push(`${i === 0 ? "M" : "L"}${x},${y}`);
		}
		return parts.join("");
	});
	function svgCoords(e) {
		const svg = svgRef.value;
		if (!svg) return [0, 0];
		const ctm = svg.getScreenCTM();
		if (!ctm) return [0, 0];
		const svgPt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
		return [Math.max(0, Math.min(1, svgPt.x)), Math.max(0, Math.min(1, 1 - svgPt.y))];
	}
	function findNearestPoint(x, y) {
		const threshold2 = .04 * .04;
		let nearest = -1;
		let minDist2 = threshold2;
		for (let i = 0; i < modelValue.value.length; i++) {
			const dx = modelValue.value[i][0] - x;
			const dy = modelValue.value[i][1] - y;
			const dist2 = dx * dx + dy * dy;
			if (dist2 < minDist2) {
				minDist2 = dist2;
				nearest = i;
			}
		}
		return nearest;
	}
	function handleSvgPointerDown(e) {
		if (e.button !== 0) return;
		const [x, y] = svgCoords(e);
		const nearby = findNearestPoint(x, y);
		if (nearby >= 0) {
			startDrag(nearby, e);
			return;
		}
		if (e.ctrlKey) return;
		const newPoint = [x, y];
		const newPoints = [...modelValue.value, newPoint];
		newPoints.sort((a, b) => a[0] - b[0]);
		modelValue.value = newPoints;
		startDrag(newPoints.indexOf(newPoint), e);
	}
	function startDrag(index, e) {
		cleanupDrag?.();
		if (e.button === 2 || e.button === 0 && e.ctrlKey) {
			if (modelValue.value.length > 2) {
				const newPoints = [...modelValue.value];
				newPoints.splice(index, 1);
				modelValue.value = newPoints;
			}
			return;
		}
		dragIndex.value = index;
		const svg = svgRef.value;
		if (!svg) return;
		svg.setPointerCapture(e.pointerId);
		const onMove = (ev) => {
			if (dragIndex.value < 0) return;
			const [x, y] = svgCoords(ev);
			const movedPoint = [x, y];
			const newPoints = [...modelValue.value];
			newPoints[dragIndex.value] = movedPoint;
			newPoints.sort((a, b) => a[0] - b[0]);
			modelValue.value = newPoints;
			dragIndex.value = newPoints.indexOf(movedPoint);
		};
		const endDrag = () => {
			if (dragIndex.value < 0) return;
			dragIndex.value = -1;
			svg.removeEventListener("pointermove", onMove);
			svg.removeEventListener("pointerup", endDrag);
			svg.removeEventListener("lostpointercapture", endDrag);
			cleanupDrag = null;
		};
		cleanupDrag = endDrag;
		svg.addEventListener("pointermove", onMove);
		svg.addEventListener("pointerup", endDrag);
		svg.addEventListener("lostpointercapture", endDrag);
	}
	onBeforeUnmount(() => {
		cleanupDrag?.();
	});
	return {
		curvePath,
		handleSvgPointerDown,
		startDrag
	};
}
//#endregion
//#region src/components/curve/CurveEditor.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["y1", "y2"];
var _hoisted_2 = ["x1", "x2"];
var _hoisted_3 = ["d", "fill"];
var _hoisted_4 = [
	"d",
	"stroke",
	"opacity"
];
var _hoisted_5 = [
	"cx",
	"cy",
	"fill",
	"onPointerdown"
];
//#endregion
//#region src/components/curve/CurveEditor.vue
var CurveEditor_default = /* @__PURE__ */ defineComponent({
	__name: "CurveEditor",
	props: /* @__PURE__ */ mergeModels({
		curveColor: { default: "white" },
		histogram: {},
		disabled: {
			type: Boolean,
			default: false
		},
		interpolation: { default: "monotone_cubic" }
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const svgRef = useTemplateRef("svgRef");
		const { curvePath, handleSvgPointerDown, startDrag } = useCurveEditor({
			svgRef,
			modelValue,
			interpolation: toRef(() => __props.interpolation)
		});
		function onSvgPointerDown(e) {
			if (!__props.disabled) handleSvgPointerDown(e);
		}
		const histogramPath = computed(() => __props.histogram ? histogramToPath(__props.histogram) : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				ref_key: "svgRef",
				ref: svgRef,
				viewBox: "-0.04 -0.04 1.08 1.08",
				preserveAspectRatio: "xMidYMid meet",
				class: normalizeClass(unref(cn)("aspect-square w-full rounded-[5px] bg-node-component-surface", _ctx.disabled ? "cursor-default" : "cursor-crosshair")),
				onPointerdown: withModifiers(onSvgPointerDown, ["stop"]),
				onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent", "stop"]))
			}, [
				(openBlock(), createElementBlock(Fragment, null, renderList([
					.25,
					.5,
					.75
				], (v) => {
					return createBaseVNode("line", {
						key: "h" + v,
						x1: 0,
						y1: v,
						x2: 1,
						y2: v,
						stroke: "currentColor",
						"stroke-opacity": "0.1",
						"stroke-width": "0.003"
					}, null, 8, _hoisted_1$1);
				}), 64)),
				(openBlock(), createElementBlock(Fragment, null, renderList([
					.25,
					.5,
					.75
				], (v) => {
					return createBaseVNode("line", {
						key: "v" + v,
						x1: v,
						y1: 0,
						x2: v,
						y2: 1,
						stroke: "currentColor",
						"stroke-opacity": "0.1",
						"stroke-width": "0.003"
					}, null, 8, _hoisted_2);
				}), 64)),
				_cache[1] || (_cache[1] = createBaseVNode("line", {
					x1: "0",
					y1: "1",
					x2: "1",
					y2: "0",
					stroke: "currentColor",
					"stroke-opacity": "0.15",
					"stroke-width": "0.003"
				}, null, -1)),
				histogramPath.value ? (openBlock(), createElementBlock("path", {
					key: 0,
					"data-testid": "histogram-path",
					d: histogramPath.value,
					fill: _ctx.curveColor,
					"fill-opacity": "0.15",
					stroke: "none"
				}, null, 8, _hoisted_3)) : createCommentVNode("", true),
				createBaseVNode("path", {
					"data-testid": "curve-path",
					d: unref(curvePath),
					fill: "none",
					stroke: _ctx.curveColor,
					"stroke-width": "0.008",
					"stroke-linecap": "round",
					opacity: _ctx.disabled ? .5 : 1
				}, null, 8, _hoisted_4),
				!_ctx.disabled ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(modelValue.value, (point, i) => {
					return openBlock(), createElementBlock("circle", {
						key: i,
						cx: point[0],
						cy: 1 - point[1],
						r: "0.02",
						fill: _ctx.curveColor,
						stroke: "white",
						"stroke-width": "0.004",
						class: "cursor-grab",
						onPointerdown: withModifiers(($event) => unref(startDrag)(i, $event), ["stop"])
					}, null, 40, _hoisted_5);
				}), 128)) : createCommentVNode("", true)
			], 34);
		};
	}
});
//#endregion
//#region src/components/curve/WidgetCurve.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-1" };
//#endregion
//#region src/components/curve/WidgetCurve.vue
var WidgetCurve_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetCurve",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default: () => ({
			points: [[0, 0], [1, 1]],
			interpolation: "monotone_cubic"
		}) },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const isDisabled = computed(() => !!__props.widget.options?.disabled);
		const nodeOutputStore = useNodeOutputStore();
		const histogram = computed(() => {
			const locatorId = __props.widget.nodeLocatorId;
			if (!locatorId) return null;
			const data = nodeOutputStore.nodeOutputs[locatorId]?.histogram;
			if (!Array.isArray(data) || data.length === 0) return null;
			return new Uint32Array(data);
		});
		const upstreamValue = useUpstreamValue(() => __props.widget.linkedUpstream, singleValueExtractor(isCurveData));
		watch(upstreamValue, (upstream) => {
			if (isDisabled.value && upstream) modelValue.value = upstream;
		});
		const effectiveCurve = computed(() => isDisabled.value && upstreamValue.value ? upstreamValue.value : modelValue.value);
		function onPointsChange(points) {
			modelValue.value = {
				...modelValue.value,
				points
			};
		}
		function onInterpolationChange(value) {
			if (typeof value !== "string") return;
			modelValue.value = {
				...modelValue.value,
				interpolation: value
			};
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [!isDisabled.value ? (openBlock(), createBlock(Select_default, {
				key: 0,
				"model-value": modelValue.value.interpolation,
				"onUpdate:modelValue": onInterpolationChange
			}, {
				default: withCtx(() => [createVNode(SelectTrigger_default, { size: "md" }, {
					default: withCtx(() => [createVNode(SelectValue_default)]),
					_: 1
				}), createVNode(SelectContent_default, null, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(CURVE_INTERPOLATIONS), (interp) => {
						return openBlock(), createBlock(SelectItem_default, {
							key: interp,
							value: interp
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t(`curveWidget.${interp}`)), 1)]),
							_: 2
						}, 1032, ["value"]);
					}), 128))]),
					_: 1
				})]),
				_: 1
			}, 8, ["model-value"])) : createCommentVNode("", true), createVNode(CurveEditor_default, {
				"model-value": effectiveCurve.value.points,
				disabled: isDisabled.value,
				interpolation: effectiveCurve.value.interpolation,
				histogram: histogram.value,
				"onUpdate:modelValue": onPointsChange
			}, null, 8, [
				"model-value",
				"disabled",
				"interpolation",
				"histogram"
			])]);
		};
	}
});
//#endregion
export { WidgetCurve_default as default };

//# sourceMappingURL=WidgetCurve-BSF-bN6j.js.map