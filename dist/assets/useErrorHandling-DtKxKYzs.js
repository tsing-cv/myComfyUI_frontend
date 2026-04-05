import "./rolldown-runtime-DBfy44LZ.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
//#region src/composables/useErrorHandling.ts
function useErrorHandling() {
	const toast = useToastStore();
	const toastErrorHandler = (error) => {
		const message = error instanceof TypeError && /failed to fetch|networkerror|load failed/i.test(error.message) ? t("g.disconnectedFromBackend") : error instanceof Error ? error.message : t("g.unknownError");
		toast.add({
			severity: "error",
			summary: t("g.error"),
			detail: message
		});
		console.error(error);
	};
	const wrapWithErrorHandling = (action, errorHandler, finallyHandler) => (...args) => {
		try {
			return action(...args);
		} catch (e) {
			(errorHandler ?? toastErrorHandler)(e);
		} finally {
			finallyHandler?.();
		}
	};
	const wrapWithErrorHandlingAsync = (action, errorHandler, finallyHandler, recoveryStrategies = []) => async (...args) => {
		try {
			return await action(...args);
		} catch (e) {
			for (const strategy of recoveryStrategies) if (strategy.shouldHandle(e)) try {
				await strategy.recover(e, action, args);
				return;
			} catch (recoveryError) {
				console.error("Recovery strategy failed:", recoveryError);
			}
			(errorHandler ?? toastErrorHandler)(e);
		} finally {
			finallyHandler?.();
		}
	};
	return {
		wrapWithErrorHandling,
		wrapWithErrorHandlingAsync,
		toastErrorHandler
	};
}
//#endregion
export { useErrorHandling as t };

//# sourceMappingURL=useErrorHandling-DtKxKYzs.js.map