import "./rolldown-runtime-DBfy44LZ.js";
//#region src/components/curve/types.ts
var CURVE_INTERPOLATIONS = ["monotone_cubic", "linear"];
//#endregion
//#region src/components/curve/curveUtils.ts
function isCurveData(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
	const v = value;
	return Array.isArray(v.points) && v.points.every((p) => Array.isArray(p) && p.length === 2 && typeof p[0] === "number" && typeof p[1] === "number") && typeof v.interpolation === "string" && CURVE_INTERPOLATIONS.includes(v.interpolation);
}
/**
* Piecewise linear interpolation through sorted control points.
* Returns a function that evaluates y for any x in [0, 1].
*/
function createLinearInterpolator(points) {
	if (points.length === 0) return () => 0;
	if (points.length === 1) return () => points[0][1];
	const sorted = [...points].sort((a, b) => a[0] - b[0]);
	const n = sorted.length;
	const xs = sorted.map((p) => p[0]);
	const ys = sorted.map((p) => p[1]);
	return (x) => {
		if (x <= xs[0]) return ys[0];
		if (x >= xs[n - 1]) return ys[n - 1];
		let lo = 0;
		let hi = n - 1;
		while (lo < hi - 1) {
			const mid = lo + hi >> 1;
			if (xs[mid] <= x) lo = mid;
			else hi = mid;
		}
		const dx = xs[hi] - xs[lo];
		if (dx === 0) return ys[lo];
		const t = (x - xs[lo]) / dx;
		return ys[lo] + t * (ys[hi] - ys[lo]);
	};
}
/**
* Factory that dispatches to the correct interpolator based on type.
*/
function createInterpolator(points, interpolation) {
	return interpolation === "linear" ? createLinearInterpolator(points) : createMonotoneInterpolator(points);
}
/**
* Monotone cubic Hermite interpolation.
* Produces a smooth curve that passes through all control points
* without overshooting (monotone property).
*
* Returns a function that evaluates y for any x in [0, 1].
*/
function createMonotoneInterpolator(points) {
	if (points.length === 0) return () => 0;
	if (points.length === 1) return () => points[0][1];
	const sorted = [...points].sort((a, b) => a[0] - b[0]);
	const n = sorted.length;
	const xs = sorted.map((p) => p[0]);
	const ys = sorted.map((p) => p[1]);
	const deltas = [];
	const slopes = [];
	for (let i = 0; i < n - 1; i++) {
		const dx = xs[i + 1] - xs[i];
		deltas.push(dx === 0 ? 0 : (ys[i + 1] - ys[i]) / dx);
	}
	slopes.push(deltas[0] ?? 0);
	for (let i = 1; i < n - 1; i++) if (deltas[i - 1] * deltas[i] <= 0) slopes.push(0);
	else slopes.push((deltas[i - 1] + deltas[i]) / 2);
	slopes.push(deltas[n - 2] ?? 0);
	for (let i = 0; i < n - 1; i++) if (deltas[i] === 0) {
		slopes[i] = 0;
		slopes[i + 1] = 0;
	} else {
		const alpha = slopes[i] / deltas[i];
		const beta = slopes[i + 1] / deltas[i];
		const s = alpha * alpha + beta * beta;
		if (s > 9) {
			const t = 3 / Math.sqrt(s);
			slopes[i] = t * alpha * deltas[i];
			slopes[i + 1] = t * beta * deltas[i];
		}
	}
	return (x) => {
		if (x <= xs[0]) return ys[0];
		if (x >= xs[n - 1]) return ys[n - 1];
		let lo = 0;
		let hi = n - 1;
		while (lo < hi - 1) {
			const mid = lo + hi >> 1;
			if (xs[mid] <= x) lo = mid;
			else hi = mid;
		}
		const dx = xs[hi] - xs[lo];
		if (dx === 0) return ys[lo];
		const t = (x - xs[lo]) / dx;
		const t2 = t * t;
		const t3 = t2 * t;
		const h00 = 2 * t3 - 3 * t2 + 1;
		const h10 = t3 - 2 * t2 + t;
		const h01 = -2 * t3 + 3 * t2;
		const h11 = t3 - t2;
		return h00 * ys[lo] + h10 * dx * slopes[lo] + h01 * ys[hi] + h11 * dx * slopes[hi];
	};
}
/**
* Convert a histogram (arbitrary number of bins) into an SVG path string.
* Applies square-root scaling and normalizes using the 99.5th percentile
* to avoid outlier spikes.
*/
function histogramToPath(histogram) {
	const len = histogram.length;
	if (len === 0) return "";
	const sqrtValues = new Float32Array(len);
	for (let i = 0; i < len; i++) sqrtValues[i] = Math.sqrt(histogram[i]);
	const max = Array.from(sqrtValues).sort((a, b) => a - b)[Math.floor((len - 1) * .995)];
	if (max === 0) return "";
	const invMax = 1 / max;
	const lastIdx = len - 1;
	const parts = ["M0,1"];
	for (let i = 0; i < len; i++) {
		const x = lastIdx === 0 ? .5 : i / lastIdx;
		const y = 1 - Math.min(1, sqrtValues[i] * invMax);
		parts.push(`L${x},${y}`);
	}
	parts.push("L1,1 Z");
	return parts.join(" ");
}
function curveDataToFloatLUT(curve, size = 256) {
	const lut = new Float32Array(size);
	const interpolate = createInterpolator(curve.points, curve.interpolation);
	for (let i = 0; i < size; i++) lut[i] = interpolate(i / (size - 1));
	return lut;
}
//#endregion
export { CURVE_INTERPOLATIONS as a, isCurveData as i, curveDataToFloatLUT as n, histogramToPath as r, createInterpolator as t };

//# sourceMappingURL=curveUtils-DrOuXIbn.js.map