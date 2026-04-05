import "./rolldown-runtime-DBfy44LZ.js";
import { l as storeToRefs } from "./vendor-vue-core-Ba0aGEmU.js";
import { Li as useTeamWorkspaceStore } from "./dialogService-ClaKHdWI.js";
//#region src/platform/workspace/composables/useWorkspaceSwitch.ts
function useWorkspaceSwitch() {
	const workspaceStore = useTeamWorkspaceStore();
	const { activeWorkspace } = storeToRefs(workspaceStore);
	async function switchWorkspace(workspaceId) {
		if (activeWorkspace.value?.id === workspaceId) return true;
		try {
			await workspaceStore.switchWorkspace(workspaceId);
			return true;
		} catch {
			return false;
		}
	}
	return { switchWorkspace };
}
//#endregion
export { useWorkspaceSwitch as t };

//# sourceMappingURL=useWorkspaceSwitch-BhMNLSt3.js.map