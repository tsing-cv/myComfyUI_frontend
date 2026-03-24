// Shim for extensions/core/maskeditor/utils/canvas.ts
console.warn('[ComfyUI Notice] "extensions/core/maskeditor/utils/canvas.js" is an internal module, not part of the public API. Future updates may break this import.');
export const getCanvas2dContext = window.comfyAPI.canvas.getCanvas2dContext;
export const createCanvasCopy = window.comfyAPI.canvas.createCanvasCopy;
export const combineOriginalImageAndPaint = window.comfyAPI.canvas.combineOriginalImageAndPaint;
