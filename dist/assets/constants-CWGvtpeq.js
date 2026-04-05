//#region src/extensions/core/load3d/constants.ts
/**
* Load3D constants that don't require THREE.js
* This file can be imported without pulling in the entire THREE.js bundle
*/
var SUPPORTED_EXTENSIONS = new Set([
	".gltf",
	".glb",
	".obj",
	".fbx",
	".stl",
	".spz",
	".splat",
	".ply",
	".ksplat"
]);
var SUPPORTED_EXTENSIONS_ACCEPT = [...SUPPORTED_EXTENSIONS].join(",");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.constants = window.comfyAPI.constants || {};
window.comfyAPI.constants.SUPPORTED_EXTENSIONS = SUPPORTED_EXTENSIONS;
window.comfyAPI.constants.SUPPORTED_EXTENSIONS_ACCEPT = SUPPORTED_EXTENSIONS_ACCEPT;
//#endregion
export { SUPPORTED_EXTENSIONS_ACCEPT as n, SUPPORTED_EXTENSIONS as t };

//# sourceMappingURL=constants-CWGvtpeq.js.map