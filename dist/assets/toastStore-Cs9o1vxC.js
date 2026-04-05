import "./rolldown-runtime-DBfy44LZ.js";
import { c as defineStore, kt as ref } from "./vendor-vue-core-Ba0aGEmU.js";
//#region src/platform/updates/common/toastStore.ts
var useToastStore = defineStore("toast", () => {
	const messagesToAdd = ref([]);
	const messagesToRemove = ref([]);
	const removeAllRequested = ref(false);
	function add(message) {
		messagesToAdd.value = [...messagesToAdd.value, message];
	}
	function remove(message) {
		messagesToRemove.value = [...messagesToRemove.value, message];
	}
	function removeAll() {
		removeAllRequested.value = true;
	}
	function addAlert(message) {
		add({
			severity: "warn",
			summary: "Alert",
			detail: message
		});
	}
	return {
		messagesToAdd,
		messagesToRemove,
		removeAllRequested,
		add,
		remove,
		removeAll,
		addAlert
	};
});
//#endregion
export { useToastStore as t };

//# sourceMappingURL=toastStore-Cs9o1vxC.js.map