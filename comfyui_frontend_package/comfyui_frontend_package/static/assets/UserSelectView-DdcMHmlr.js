var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, onMounted, nextTick, openBlock, createElementBlock, normalizeClass, withDirectives, createElementVNode, vShow, unref, renderSlot, computed, createBlock, withCtx, toDisplayString, createVNode, withKeys, createTextVNode, createCommentVNode } from "vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Select from "primevue/select";
import { h as useRouter } from "./vendor-vue-SdQKVoRx.js";
import { R as isElectron, aV as electronAPI, bG as isNativeWindow, aZ as useUserStore } from "./index-D9cV32Ob.js";
import "./vendor-other-Bfb5Ofrh.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "vue-i18n";
import "primevue/checkbox";
import "primevue/scrollpanel";
import "primevue/usetoast";
import "primevue/card";
import "primevue/listbox";
import "primevue/skeleton";
import "primevue/multiselect";
import "primevue/progressbar";
import "primevue/floatlabel";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
import "primevue/progressspinner";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/tabpanel";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/radiobutton";
import "primevue/knob";
import "primevue/slider";
import "primevue/panel";
import "primevue/tabmenu";
import "primevue/popover";
import "primevue/tab";
import "primevue/tablist";
import "primevue";
import "./vendor-xterm-BZLod3g9.js";
import "primevue/galleria";
import "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "./vendor-three-JDoAqkQm.js";
import "primevue/autocomplete";
import "primevue/dropdown";
import "primevue/selectbutton";
import "primevue/dialog";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/confirmdialog";
import "primevue/tieredmenu";
import "primevue/chart";
import "primevue/imagecompare";
import "primevue/textarea";
import "primevue/treeselect";
import "./vendor-tiptap-Dvg9y4X0.js";
import "primevue/blockui";
const _hoisted_1$1 = { class: "flex w-full grow items-center justify-center overflow-auto" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseViewTemplate",
  props: {
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    const darkTheme = {
      color: "rgba(0, 0, 0, 0)",
      symbolColor: "#d4d4d4"
    };
    const lightTheme = {
      color: "rgba(0, 0, 0, 0)",
      symbolColor: "#171717"
    };
    const topMenuRef = ref(null);
    onMounted(async () => {
      if (isElectron()) {
        await nextTick();
        electronAPI().changeTheme({
          ...__props.dark ? darkTheme : lightTheme,
          height: topMenuRef.value?.getBoundingClientRect().height ?? 0
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["flex h-svh w-screen flex-col font-sans", [
          _ctx.dark ? "dark-theme bg-neutral-900 text-neutral-300" : "bg-neutral-300 text-neutral-900"
        ]])
      }, [
        withDirectives(createElementVNode("div", {
          ref_key: "topMenuRef",
          ref: topMenuRef,
          class: "app-drag h-(--comfy-topbar-height) w-full"
        }, null, 512), [
          [vShow, unref(isNativeWindow)()]
        ]),
        createElementVNode("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = {
  id: "comfy-user-selection",
  class: "relative min-w-84 rounded-lg bg-(--comfy-menu-bg) p-5 px-10 shadow-lg"
};
const _hoisted_2 = { class: "flex w-full flex-col items-center" };
const _hoisted_3 = { class: "flex w-full flex-col gap-2" };
const _hoisted_4 = { for: "new-user-input" };
const _hoisted_5 = { class: "flex w-full flex-col gap-2" };
const _hoisted_6 = { for: "existing-user-select" };
const _hoisted_7 = { class: "mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const login = /* @__PURE__ */ __name(async () => {
      try {
        const user = createNewUser.value ? await userStore.createUser(newUsername.value) : selectedUser.value;
        if (!user) {
          throw new Error("No user selected");
        }
        await userStore.login(user);
        await router.push("/");
      } catch (err) {
        loginError.value = err instanceof Error ? err.message : JSON.stringify(err);
      }
    }, "login");
    onMounted(async () => {
      if (!userStore.initialized) {
        await userStore.initialize();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("main", _hoisted_1, [
            _cache[2] || (_cache[2] = createElementVNode("h1", { class: "my-2.5 mb-7 font-normal" }, "ComfyUI", -1)),
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                createElementVNode("label", _hoisted_4, toDisplayString(_ctx.$t("userSelect.newUser")) + ":", 1),
                createVNode(unref(InputText), {
                  id: "new-user-input",
                  modelValue: newUsername.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newUsername.value = $event),
                  placeholder: _ctx.$t("userSelect.enterUsername"),
                  onKeyup: withKeys(login, ["enter"])
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              createVNode(unref(Divider)),
              createElementVNode("div", _hoisted_5, [
                createElementVNode("label", _hoisted_6, toDisplayString(_ctx.$t("userSelect.existingUser")) + ":", 1),
                createVNode(unref(Select), {
                  modelValue: selectedUser.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedUser.value = $event),
                  class: "w-full",
                  "input-id": "existing-user-select",
                  options: unref(userStore).users,
                  "option-label": "username",
                  placeholder: _ctx.$t("userSelect.selectUser"),
                  disabled: createNewUser.value
                }, null, 8, ["modelValue", "options", "placeholder", "disabled"]),
                error.value ? (openBlock(), createBlock(unref(Message), {
                  key: 0,
                  severity: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createElementVNode("footer", _hoisted_7, [
                createVNode(unref(Button), {
                  label: _ctx.$t("userSelect.next"),
                  onClick: login
                }, null, 8, ["label"])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=UserSelectView-DdcMHmlr.js.map
