import "./rolldown-runtime-DBfy44LZ.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
//#region src/utils/envUtil.ts
function electronAPI() {
	return window.electronAPI;
}
function showNativeSystemMenu() {
	electronAPI()?.showContextMenu();
}
function isNativeWindow() {
	return isDesktop && !!window.navigator.windowControlsOverlay?.visible;
}
//#endregion
export { isNativeWindow as n, showNativeSystemMenu as r, electronAPI as t };

//# sourceMappingURL=envUtil-iYCo4Y6R.js.map