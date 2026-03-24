import { defineComponent, resolveDirective, openBlock, createBlock, unref, withCtx, createElementVNode, toDisplayString, createVNode, createElementBlock, createCommentVNode, normalizeClass, createTextVNode, withDirectives } from "vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
import ProgressSpinner from "primevue/progressspinner";
import TabPanel from "primevue/tabpanel";
import { _ as _sfc_main$1 } from "./UserAvatar.vue_vue_type_script_setup_true_lang-D2s8tnS2.js";
import { F as useDialogService, O as useCurrentUser } from "./index-D9cV32Ob.js";
import "primevue/avatar";
import "@primevue/themes";
import "@primevue/themes/aura";
import "./vendor-other-Bfb5Ofrh.js";
import "./vendor-vue-SdQKVoRx.js";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "vue-i18n";
import "primevue/checkbox";
import "primevue/message";
import "primevue/scrollpanel";
import "primevue/usetoast";
import "primevue/card";
import "primevue/listbox";
import "primevue/skeleton";
import "primevue/multiselect";
import "primevue/inputtext";
import "primevue/select";
import "primevue/progressbar";
import "primevue/floatlabel";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
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
const _hoisted_1 = { class: "flex h-full flex-col" };
const _hoisted_2 = { class: "mb-2 text-2xl font-bold" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-col gap-2"
};
const _hoisted_4 = { class: "flex flex-col gap-0.5" };
const _hoisted_5 = { class: "font-medium" };
const _hoisted_6 = { class: "text-muted" };
const _hoisted_7 = { class: "flex flex-col gap-0.5" };
const _hoisted_8 = { class: "font-medium" };
const _hoisted_9 = { class: "text-muted" };
const _hoisted_10 = { class: "flex flex-col gap-0.5" };
const _hoisted_11 = { class: "font-medium" };
const _hoisted_12 = { class: "flex items-center gap-1 text-muted" };
const _hoisted_13 = {
  key: 2,
  class: "mt-4 flex flex-col gap-2"
};
const _hoisted_14 = {
  key: 1,
  class: "flex flex-col gap-4"
};
const _hoisted_15 = { class: "text-smoke-600" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserPanel",
  setup(__props) {
    const dialogService = useDialogService();
    const {
      loading,
      isLoggedIn,
      isApiKeyLogin,
      isEmailProvider,
      userDisplayName,
      userEmail,
      userPhotoUrl,
      providerName,
      providerIcon,
      handleSignOut,
      handleSignIn,
      handleDeleteAccount
    } = useCurrentUser();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(unref(TabPanel), {
        value: "User",
        class: "user-settings-container h-full"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("userSettings.title")), 1),
            createVNode(unref(Divider), { class: "mb-3" }),
            unref(isLoggedIn) ? (openBlock(), createElementBlock("div", _hoisted_3, [
              unref(userPhotoUrl) ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                "photo-url": unref(userPhotoUrl),
                shape: "circle",
                size: "large"
              }, null, 8, ["photo-url"])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_4, [
                createElementVNode("h3", _hoisted_5, toDisplayString(_ctx.$t("userSettings.name")), 1),
                createElementVNode("div", _hoisted_6, toDisplayString(unref(userDisplayName) || _ctx.$t("userSettings.notSet")), 1)
              ]),
              createElementVNode("div", _hoisted_7, [
                createElementVNode("h3", _hoisted_8, toDisplayString(_ctx.$t("userSettings.email")), 1),
                createElementVNode("span", _hoisted_9, toDisplayString(unref(userEmail)), 1)
              ]),
              createElementVNode("div", _hoisted_10, [
                createElementVNode("h3", _hoisted_11, toDisplayString(_ctx.$t("userSettings.provider")), 1),
                createElementVNode("div", _hoisted_12, [
                  createElementVNode("i", {
                    class: normalizeClass(unref(providerIcon))
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(unref(providerName)) + " ", 1),
                  unref(isEmailProvider) ? withDirectives((openBlock(), createBlock(unref(Button), {
                    key: 0,
                    icon: "pi pi-pen-to-square",
                    severity: "secondary",
                    text: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(dialogService).showUpdatePasswordDialog())
                  }, null, 512)), [
                    [_directive_tooltip, {
                      value: _ctx.$t("userSettings.updatePassword"),
                      showDelay: 300
                    }]
                  ]) : createCommentVNode("", true)
                ])
              ]),
              unref(loading) ? (openBlock(), createBlock(unref(ProgressSpinner), {
                key: 1,
                class: "mt-4 h-8 w-8",
                style: { "--pc-spinner-color": "#000" }
              })) : (openBlock(), createElementBlock("div", _hoisted_13, [
                createVNode(unref(Button), {
                  class: "w-32",
                  severity: "secondary",
                  label: _ctx.$t("auth.signOut.signOut"),
                  icon: "pi pi-sign-out",
                  onClick: unref(handleSignOut)
                }, null, 8, ["label", "onClick"]),
                !unref(isApiKeyLogin) ? (openBlock(), createBlock(unref(Button), {
                  key: 0,
                  class: "w-fit",
                  variant: "text",
                  severity: "danger",
                  label: _ctx.$t("auth.deleteAccount.deleteAccount"),
                  onClick: unref(handleDeleteAccount)
                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
              ]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createElementVNode("p", _hoisted_15, toDisplayString(_ctx.$t("auth.login.title")), 1),
              createVNode(unref(Button), {
                class: "w-52",
                severity: "primary",
                loading: unref(loading),
                label: _ctx.$t("auth.login.signInOrSignUp"),
                icon: "pi pi-user",
                onClick: unref(handleSignIn)
              }, null, 8, ["loading", "label", "onClick"])
            ]))
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
//# sourceMappingURL=UserPanel-CBYjN-Pa.js.map
