import "./rolldown-runtime-DBfy44LZ.js";
import { M as script$1, nt as script$2, rt as script, st as script$3 } from "./vendor-primevue-Dnp2bJ8y.js";
import { A as createCommentVNode, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, Ut as toDisplayString, Z as onMounted, _t as withCtx, et as openBlock, k as createBlock, kt as ref, o as useRouter, y as withKeys } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import "./i18n-CEjiKAGw.js";
import "./vendor-reka-ui-D-_wwtHz.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { t as useUserStore } from "./userStore-DKB2Qhsc.js";
import { t as BaseViewTemplate_default } from "./BaseViewTemplate-DU0C8qed.js";
//#region src/views/UserSelectView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	id: "comfy-user-selection",
	class: "relative min-w-84 rounded-lg bg-(--comfy-menu-bg) p-5 px-10 shadow-lg"
};
var _hoisted_2 = { class: "flex w-full flex-col items-center" };
var _hoisted_3 = { class: "flex w-full flex-col gap-2" };
var _hoisted_4 = { for: "new-user-input" };
var _hoisted_5 = { class: "flex w-full flex-col gap-2" };
var _hoisted_6 = { for: "existing-user-select" };
var _hoisted_7 = { class: "mt-5" };
//#endregion
//#region src/views/UserSelectView.vue
var UserSelectView_default = /* @__PURE__ */ defineComponent({
	__name: "UserSelectView",
	setup(__props) {
		const userStore = useUserStore();
		const router = useRouter();
		const selectedUser = ref(null);
		const newUsername = ref("");
		const loginError = ref("");
		const createNewUser = computed(() => newUsername.value.trim() !== "");
		const newUserExistsError = computed(() => {
			return userStore.users.find((user) => user.username === newUsername.value) ? `User "${newUsername.value}" already exists` : "";
		});
		const error = computed(() => newUserExistsError.value || loginError.value);
		const login = async () => {
			try {
				const user = createNewUser.value ? await userStore.createUser(newUsername.value) : selectedUser.value;
				if (!user) throw new Error("No user selected");
				await userStore.login(user);
				await router.push("/");
			} catch (err) {
				loginError.value = err instanceof Error ? err.message : JSON.stringify(err);
			}
		};
		onMounted(async () => {
			document.getElementById("splash-loader")?.remove();
			if (!userStore.initialized) await userStore.initialize();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseViewTemplate_default, { dark: "" }, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1, [_cache[2] || (_cache[2] = createBaseVNode("h1", { class: "my-2.5 mb-7 font-normal" }, "ComfyUI", -1)), createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [createBaseVNode("label", _hoisted_4, toDisplayString(_ctx.$t("userSelect.newUser")) + ":", 1), createVNode(unref(script), {
						id: "new-user-input",
						modelValue: newUsername.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newUsername.value = $event),
						placeholder: _ctx.$t("userSelect.enterUsername"),
						onKeyup: withKeys(login, ["enter"])
					}, null, 8, ["modelValue", "placeholder"])]),
					createVNode(unref(script$1)),
					createBaseVNode("div", _hoisted_5, [
						createBaseVNode("label", _hoisted_6, toDisplayString(_ctx.$t("userSelect.existingUser")) + ":", 1),
						createVNode(unref(script$2), {
							modelValue: selectedUser.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedUser.value = $event),
							class: "w-full",
							"input-id": "existing-user-select",
							options: unref(userStore).users,
							"option-label": "username",
							placeholder: _ctx.$t("userSelect.selectUser"),
							disabled: createNewUser.value
						}, null, 8, [
							"modelValue",
							"options",
							"placeholder",
							"disabled"
						]),
						error.value ? (openBlock(), createBlock(unref(script$3), {
							key: 0,
							severity: "error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					createBaseVNode("footer", _hoisted_7, [createVNode(Button_default, { onClick: login }, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("userSelect.next")), 1)]),
						_: 1
					})])
				])])]),
				_: 1
			});
		};
	}
});
//#endregion
export { UserSelectView_default as default };

//# sourceMappingURL=UserSelectView-BL802hLH.js.map