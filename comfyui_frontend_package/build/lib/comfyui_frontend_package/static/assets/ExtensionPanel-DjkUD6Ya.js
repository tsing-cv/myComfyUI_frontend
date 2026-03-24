var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, computed, onMounted, openBlock, createBlock, withCtx, createVNode, unref, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode } from "vue";
import { F as FilterMatchMode } from "./vendor-primevue-PESgPnbc.js";
import Button from "primevue/button";
import Column from "primevue/column";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import Message from "primevue/message";
import SelectButton from "primevue/selectbutton";
import Tag from "primevue/tag";
import ToggleSwitch from "primevue/toggleswitch";
import { a$ as useExtensionStore, u as useSettingStore, cJ as _sfc_main$1, cL as SearchBox } from "./index-D9cV32Ob.js";
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
import "primevue/divider";
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
import "primevue/progressspinner";
import "primevue/inputnumber";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/tabpanel";
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
import "primevue/tree";
import "primevue/toolbar";
import "./vendor-three-JDoAqkQm.js";
import "primevue/autocomplete";
import "primevue/dropdown";
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
const _hoisted_1 = { class: "flex justify-end" };
const _hoisted_2 = { class: "mb-3 flex gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExtensionPanel",
  setup(__props) {
    const filterTypes = ["All", "Core", "Custom"];
    const filterType = ref("All");
    const selectedExtensions = ref([]);
    const filters = ref({
      global: { value: "", matchMode: FilterMatchMode.CONTAINS }
    });
    const extensionStore = useExtensionStore();
    const settingStore = useSettingStore();
    const editingEnabledExtensions = ref({});
    const filteredExtensions = computed(() => {
      const extensions = extensionStore.extensions;
      switch (filterType.value) {
        case "Core":
          return extensions.filter(
            (ext) => extensionStore.isCoreExtension(ext.name)
          );
        case "Custom":
          return extensions.filter(
            (ext) => !extensionStore.isCoreExtension(ext.name)
          );
        default:
          return extensions;
      }
    });
    onMounted(() => {
      extensionStore.extensions.forEach((ext) => {
        editingEnabledExtensions.value[ext.name] = extensionStore.isExtensionEnabled(ext.name);
      });
    });
    const changedExtensions = computed(() => {
      return extensionStore.extensions.filter(
        (ext) => editingEnabledExtensions.value[ext.name] !== extensionStore.isExtensionEnabled(ext.name)
      );
    });
    const hasChanges = computed(() => {
      return changedExtensions.value.length > 0;
    });
    const updateExtensionStatus = /* @__PURE__ */ __name(async () => {
      const editingDisabledExtensionNames = Object.entries(
        editingEnabledExtensions.value
      ).filter(([_, enabled]) => !enabled).map(([name]) => name);
      await settingStore.set("Comfy.Extension.Disabled", [
        ...extensionStore.inactiveDisabledExtensionNames,
        ...editingDisabledExtensionNames
      ]);
    }, "updateExtensionStatus");
    const enableAllExtensions = /* @__PURE__ */ __name(async () => {
      extensionStore.extensions.forEach((ext) => {
        if (extensionStore.isExtensionReadOnly(ext.name)) return;
        editingEnabledExtensions.value[ext.name] = true;
      });
      await updateExtensionStatus();
    }, "enableAllExtensions");
    const disableAllExtensions = /* @__PURE__ */ __name(async () => {
      extensionStore.extensions.forEach((ext) => {
        if (extensionStore.isExtensionReadOnly(ext.name)) return;
        editingEnabledExtensions.value[ext.name] = false;
      });
      await updateExtensionStatus();
    }, "disableAllExtensions");
    const disableThirdPartyExtensions = /* @__PURE__ */ __name(async () => {
      extensionStore.extensions.forEach((ext) => {
        if (extensionStore.isCoreExtension(ext.name)) return;
        editingEnabledExtensions.value[ext.name] = false;
      });
      await updateExtensionStatus();
    }, "disableThirdPartyExtensions");
    const applyChanges = /* @__PURE__ */ __name(() => {
      window.location.reload();
    }, "applyChanges");
    const menu = ref();
    const contextMenuItems = [
      {
        label: "Enable Selected",
        icon: "pi pi-check",
        command: /* @__PURE__ */ __name(async () => {
          selectedExtensions.value.forEach((ext) => {
            if (!extensionStore.isExtensionReadOnly(ext.name)) {
              editingEnabledExtensions.value[ext.name] = true;
            }
          });
          await updateExtensionStatus();
        }, "command")
      },
      {
        label: "Disable Selected",
        icon: "pi pi-times",
        command: /* @__PURE__ */ __name(async () => {
          selectedExtensions.value.forEach((ext) => {
            if (!extensionStore.isExtensionReadOnly(ext.name)) {
              editingEnabledExtensions.value[ext.name] = false;
            }
          });
          await updateExtensionStatus();
        }, "command")
      },
      {
        separator: true
      },
      {
        label: "Enable All",
        icon: "pi pi-check",
        command: enableAllExtensions
      },
      {
        label: "Disable All",
        icon: "pi pi-times",
        command: disableAllExtensions
      },
      {
        label: "Disable 3rd Party",
        icon: "pi pi-times",
        command: disableThirdPartyExtensions,
        disabled: !extensionStore.hasThirdPartyExtensions
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        value: "Extension",
        class: "extension-panel"
      }, {
        header: withCtx(() => [
          createVNode(SearchBox, {
            modelValue: filters.value["global"].value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value["global"].value = $event),
            placeholder: _ctx.$t("g.searchExtensions") + "..."
          }, null, 8, ["modelValue", "placeholder"]),
          hasChanges.value ? (openBlock(), createBlock(unref(Message), {
            key: 0,
            severity: "info",
            "pt:text": "w-full",
            class: "max-h-96 overflow-y-auto"
          }, {
            default: withCtx(() => [
              createElementVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(changedExtensions.value, (ext) => {
                  return openBlock(), createElementBlock("li", {
                    key: ext.name
                  }, [
                    createElementVNode("span", null, toDisplayString(unref(extensionStore).isExtensionEnabled(ext.name) ? "[-]" : "[+]"), 1),
                    createTextVNode(" " + toDisplayString(ext.name), 1)
                  ]);
                }), 128))
              ]),
              createElementVNode("div", _hoisted_1, [
                createVNode(unref(Button), {
                  label: _ctx.$t("g.reloadToApplyChanges"),
                  outlined: "",
                  severity: "danger",
                  onClick: applyChanges
                }, null, 8, ["label"])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            createVNode(unref(SelectButton), {
              modelValue: filterType.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterType.value = $event),
              options: filterTypes
            }, null, 8, ["modelValue"])
          ]),
          createVNode(unref(DataTable), {
            selection: selectedExtensions.value,
            "onUpdate:selection": _cache[3] || (_cache[3] = ($event) => selectedExtensions.value = $event),
            value: filteredExtensions.value,
            "striped-rows": "",
            size: "small",
            filters: filters.value,
            "selection-mode": "multiple",
            "data-key": "name"
          }, {
            default: withCtx(() => [
              createVNode(unref(Column), {
                "selection-mode": "multiple",
                frozen: true,
                style: { "width": "3rem" }
              }),
              createVNode(unref(Column), {
                header: _ctx.$t("g.extensionName"),
                sortable: "",
                field: "name"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(slotProps.data.name) + " ", 1),
                  unref(extensionStore).isCoreExtension(slotProps.data.name) ? (openBlock(), createBlock(unref(Tag), {
                    key: 0,
                    value: "Core"
                  })) : (openBlock(), createBlock(unref(Tag), {
                    key: 1,
                    value: "Custom",
                    severity: "info"
                  }))
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(unref(Column), { pt: {
                headerCell: "flex items-center justify-end",
                bodyCell: "flex items-center justify-end"
              } }, {
                header: withCtx(() => [
                  createVNode(unref(Button), {
                    icon: "pi pi-ellipsis-h",
                    text: "",
                    severity: "secondary",
                    onClick: _cache[2] || (_cache[2] = ($event) => menu.value?.show($event))
                  }),
                  createVNode(unref(ContextMenu), {
                    ref_key: "menu",
                    ref: menu,
                    model: contextMenuItems
                  }, null, 512)
                ]),
                body: withCtx((slotProps) => [
                  createVNode(unref(ToggleSwitch), {
                    modelValue: editingEnabledExtensions.value[slotProps.data.name],
                    "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => editingEnabledExtensions.value[slotProps.data.name] = $event, "onUpdate:modelValue"),
                    disabled: unref(extensionStore).isExtensionReadOnly(slotProps.data.name),
                    onChange: updateExtensionStatus
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["selection", "value", "filters"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ExtensionPanel-DjkUD6Ya.js.map
