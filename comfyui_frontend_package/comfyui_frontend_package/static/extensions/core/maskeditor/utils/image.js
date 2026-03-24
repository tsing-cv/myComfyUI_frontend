// Shim for extensions/core/maskeditor/utils/image.ts
console.warn('[ComfyUI Notice] "extensions/core/maskeditor/utils/image.js" is an internal module, not part of the public API. Future updates may break this import.');
export const ensureImageFullyLoaded = window.comfyAPI.image.ensureImageFullyLoaded;
export const removeImageRgbValuesAndInvertAlpha = window.comfyAPI.image.removeImageRgbValuesAndInvertAlpha;
export const toRef = window.comfyAPI.image.toRef;
export const mkFileUrl = window.comfyAPI.image.mkFileUrl;
export const requestWithRetries = window.comfyAPI.image.requestWithRetries;
