import "./rolldown-runtime-DBfy44LZ.js";
import { X as memoize } from "./vendor-other-BMn-xt1e.js";
//#region src/utils/colorUtil.ts
function isTransparent(color) {
	if (color === "transparent") return true;
	if (color[0] === "#") {
		if (color.length === 5) return color[4] === "0";
		if (color.length === 9) return color.substring(7) === "00";
	}
	return false;
}
function rgbToHsl({ r, g, b }) {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;
	if (max !== min) {
		const d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return {
		h,
		s,
		l
	};
}
function hexToRgb(hex) {
	let r = 0;
	let g = 0;
	let b = 0;
	if (hex.length === 4 || hex.length === 5) {
		r = parseInt(hex[1] + hex[1], 16);
		g = parseInt(hex[2] + hex[2], 16);
		b = parseInt(hex[3] + hex[3], 16);
	} else if (hex.length === 7 || hex.length === 9) {
		r = parseInt(hex.slice(1, 3), 16);
		g = parseInt(hex.slice(3, 5), 16);
		b = parseInt(hex.slice(5, 7), 16);
	}
	return {
		r,
		g,
		b
	};
}
function rgbToHex({ r, g, b }) {
	const toHex = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function hsbToRgb({ h, s, b }) {
	const hh = (h % 360 + 360) % 360;
	const ss = Math.max(0, Math.min(100, s)) / 100;
	const vv = Math.max(0, Math.min(100, b)) / 100;
	const c = vv * ss;
	const x = c * (1 - Math.abs(hh / 60 % 2 - 1));
	const m = vv - c;
	let rp = 0;
	let gp = 0;
	let bp = 0;
	if (hh < 60) {
		rp = c;
		gp = x;
		bp = 0;
	} else if (hh < 120) {
		rp = x;
		gp = c;
		bp = 0;
	} else if (hh < 180) {
		rp = 0;
		gp = c;
		bp = x;
	} else if (hh < 240) {
		rp = 0;
		gp = x;
		bp = c;
	} else if (hh < 300) {
		rp = x;
		gp = 0;
		bp = c;
	} else {
		rp = c;
		gp = 0;
		bp = x;
	}
	return {
		r: Math.floor((rp + m) * 255),
		g: Math.floor((gp + m) * 255),
		b: Math.floor((bp + m) * 255)
	};
}
/**
* Normalize various color inputs (hex, rgb/rgba, hsl/hsla, hsb string/object)
* into lowercase #rrggbb. Falls back to #000000 on invalid inputs.
*/
function parseToRgb(color) {
	const format = identifyColorFormat(color);
	if (!format) return {
		r: 0,
		g: 0,
		b: 0
	};
	const hsla = parseToHSLA(color, format);
	if (!isHSLA(hsla)) return {
		r: 0,
		g: 0,
		b: 0
	};
	const h = hsla.h / 360;
	const s = hsla.s / 100;
	const l = hsla.l / 100;
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(h * 6 % 2 - 1));
	const m = l - c / 2;
	let r = 0;
	let g = 0;
	let b = 0;
	if (h < 1 / 6) {
		r = c;
		g = x;
		b = 0;
	} else if (h < 2 / 6) {
		r = x;
		g = c;
		b = 0;
	} else if (h < 3 / 6) {
		r = 0;
		g = c;
		b = x;
	} else if (h < 4 / 6) {
		r = 0;
		g = x;
		b = c;
	} else if (h < 5 / 6) {
		r = x;
		g = 0;
		b = c;
	} else {
		r = c;
		g = 0;
		b = x;
	}
	return {
		r: Math.round((r + m) * 255),
		g: Math.round((g + m) * 255),
		b: Math.round((b + m) * 255)
	};
}
var identifyColorFormat = (color) => {
	if (!color) return null;
	if (color.startsWith("#") && (color.length === 4 || color.length === 5 || color.length === 7 || color.length === 9)) return "hex";
	if (/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*/.test(color)) return color.includes("rgba") ? "rgba" : "rgb";
	if (/hsla?\(\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?%\s*,\s*\d+(\.\d+)?%/.test(color)) return color.includes("hsla") ? "hsla" : "hsl";
	return null;
};
var isHSLA = (color) => {
	if (typeof color !== "object" || color === null) return false;
	return [
		"h",
		"s",
		"l",
		"a"
	].every((key) => typeof color[key] === "number" && !isNaN(color[key]));
};
function isColorFormat(v) {
	return v === "hex" || v === "rgb" || v === "hsb";
}
function isHSBObject(v) {
	if (!v || typeof v !== "object") return false;
	const rec = v;
	return typeof rec.h === "number" && Number.isFinite(rec.h) && typeof rec.s === "number" && Number.isFinite(rec.s) && typeof rec.b === "number" && Number.isFinite(rec.b);
}
function isHSVObject(v) {
	if (!v || typeof v !== "object") return false;
	const rec = v;
	return typeof rec.h === "number" && Number.isFinite(rec.h) && typeof rec.s === "number" && Number.isFinite(rec.s) && typeof rec.v === "number" && Number.isFinite(rec.v);
}
function toHexFromFormat(val, format) {
	if (format === "hex" && typeof val === "string") {
		const raw = val.trim().toLowerCase();
		if (!raw) return "#000000";
		if (/^[0-9a-f]{3,4}$/.test(raw)) return `#${raw}`;
		if (/^#[0-9a-f]{3,4}$/.test(raw)) return raw;
		if (/^[0-9a-f]{6}$/.test(raw)) return `#${raw}`;
		if (/^#[0-9a-f]{6}$/.test(raw)) return raw;
		if (/^[0-9a-f]{8}$/.test(raw)) return `#${raw}`;
		if (/^#[0-9a-f]{8}$/.test(raw)) return raw;
		return "#000000";
	}
	if (format === "rgb" && typeof val === "string") return rgbToHex(parseToRgb(val)).toLowerCase();
	if (format === "hsb") {
		if (isHSBObject(val)) return rgbToHex(hsbToRgb(val)).toLowerCase();
		if (isHSVObject(val)) {
			const { h, s, v } = val;
			return rgbToHex(hsbToRgb({
				h,
				s,
				b: v
			})).toLowerCase();
		}
		if (typeof val === "string") {
			const nums = val.match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
			if (nums.length >= 3) return rgbToHex(hsbToRgb({
				h: nums[0],
				s: nums[1],
				b: nums[2]
			})).toLowerCase();
		}
	}
	return "#000000";
}
function parseToHSLA(color, format) {
	let match;
	switch (format) {
		case "hex": {
			let a = 1;
			let hexColor = color;
			if (color.length === 9) {
				a = parseInt(color.slice(7, 9), 16) / 255;
				hexColor = color.slice(0, 7);
			} else if (color.length === 5) {
				const aChar = color[4];
				a = parseInt(aChar + aChar, 16) / 255;
				hexColor = color.slice(0, 4);
			}
			const hsl = rgbToHsl(hexToRgb(hexColor));
			return {
				h: Math.round(hsl.h * 360),
				s: +(hsl.s * 100).toFixed(1),
				l: +(hsl.l * 100).toFixed(1),
				a
			};
		}
		case "rgb":
		case "rgba": {
			match = color.match(/\d+(\.\d+)?/g);
			if (!match || match.length < 3) return null;
			const [r, g, b] = match.map(Number);
			const hsl = rgbToHsl({
				r,
				g,
				b
			});
			const a = format === "rgba" && match[3] ? parseFloat(match[3]) : 1;
			return {
				h: Math.round(hsl.h * 360),
				s: +(hsl.s * 100).toFixed(1),
				l: +(hsl.l * 100).toFixed(1),
				a
			};
		}
		case "hsl":
		case "hsla": {
			match = color.match(/\d+(\.\d+)?/g);
			if (!match || match.length < 3) return null;
			const [h, s, l] = match.map(Number);
			return {
				h,
				s,
				l,
				a: format === "hsla" && match[3] ? parseFloat(match[3]) : 1
			};
		}
		default: return null;
	}
}
function rgbToHsv({ r, g, b }) {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const d = max - Math.min(r, g, b);
	let h = 0;
	const s = max === 0 ? 0 : d / max * 100;
	const v = max * 100;
	if (d !== 0) switch (max) {
		case r:
			h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
			break;
		case g:
			h = ((b - r) / d + 2) * 60;
			break;
		case b:
			h = ((r - g) / d + 4) * 60;
			break;
	}
	return {
		h,
		s,
		v
	};
}
function hexToHsva(hex) {
	const normalized = hex.startsWith("#") ? hex : `#${hex}`;
	let a = 100;
	let hexColor = normalized;
	if (normalized.length === 9) {
		a = Math.round(parseInt(normalized.slice(7, 9), 16) / 255 * 100);
		hexColor = normalized.slice(0, 7);
	} else if (normalized.length === 5) {
		const aChar = normalized[4];
		a = Math.round(parseInt(aChar + aChar, 16) / 255 * 100);
		hexColor = normalized.slice(0, 4);
	}
	return {
		...rgbToHsv(hexToRgb(hexColor)),
		a
	};
}
function hsvaToHex(hsva) {
	const hex = rgbToHex(hsbToRgb({
		h: hsva.h,
		s: hsva.s,
		b: hsva.v
	}));
	if (hsva.a >= 100) return hex.toLowerCase();
	return `${hex}${Math.round(hsva.a / 100 * 255).toString(16).padStart(2, "0")}`.toLowerCase();
}
var applyColorAdjustments = (color, options) => {
	if (!Object.keys(options).length) return color;
	const format = identifyColorFormat(color);
	if (!format) {
		console.warn(`Unsupported color format in color palette: ${color}`);
		return color;
	}
	const hsla = parseToHSLA(color, format);
	if (!isHSLA(hsla)) {
		console.warn(`Invalid color values in color palette: ${color}`);
		return color;
	}
	if (options.lightness) hsla.l = Math.max(0, Math.min(100, hsla.l + options.lightness * 100));
	if (options.opacity) hsla.a = Math.max(0, Math.min(1, options.opacity));
	return `hsla(${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a})`;
};
var adjustColor = memoize(applyColorAdjustments, (color, options) => `${color}-${JSON.stringify(options)}`);
//#endregion
export { hsvaToHex as a, parseToRgb as c, hsbToRgb as i, rgbToHex as l, hexToHsva as n, isColorFormat as o, hexToRgb as r, isTransparent as s, adjustColor as t, toHexFromFormat as u };

//# sourceMappingURL=colorUtil-D_gLWYA0.js.map