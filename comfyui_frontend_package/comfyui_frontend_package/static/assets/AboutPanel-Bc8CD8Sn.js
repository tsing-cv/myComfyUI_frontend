var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, computed, createVNode, unref, createBlock, withCtx, normalizeClass, createTextVNode, createCommentVNode } from "vue";
import Divider from "primevue/divider";
import Tag from "primevue/tag";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import { cI as formatSize, a$ as useExtensionStore, aS as useSystemStatsStore, R as isElectron, aV as electronAPI, cJ as _sfc_main$3 } from "./index-D9cV32Ob.js";
import { d as defineStore } from "./vendor-vue-SdQKVoRx.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "./vendor-other-Bfb5Ofrh.js";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/button";
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
import "primevue/progressspinner";
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
const _hoisted_1$2 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_2$2 = { class: "font-medium" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeviceInfo",
  props: {
    device: {}
  },
  setup(__props) {
    const props = __props;
    const deviceColumns = [
      { field: "name", header: "Name" },
      { field: "type", header: "Type" },
      { field: "vram_total", header: "VRAM Total" },
      { field: "vram_free", header: "VRAM Free" },
      { field: "torch_vram_total", header: "Torch VRAM Total" },
      { field: "torch_vram_free", header: "Torch VRAM Free" }
    ];
    const formatValue = /* @__PURE__ */ __name((value, field) => {
      if (["vram_total", "vram_free", "torch_vram_total", "torch_vram_free"].includes(
        field
      )) {
        return formatSize(value);
      }
      return value;
    }, "formatValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(deviceColumns, (col) => {
          return openBlock(), createElementBlock(Fragment, {
            key: col.field
          }, [
            createElementVNode("div", _hoisted_2$2, toDisplayString(col.header), 1),
            createElementVNode("div", null, toDisplayString(formatValue(props.device[col.field], col.field)), 1)
          ], 64);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "system-stats" };
const _hoisted_2$1 = { class: "mb-6" };
const _hoisted_3$1 = { class: "mb-4 text-2xl font-semibold" };
const _hoisted_4 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_5 = { class: "font-medium" };
const _hoisted_6 = { class: "mb-4 text-2xl font-semibold" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemStatsPanel",
  props: {
    stats: {}
  },
  setup(__props) {
    const props = __props;
    const systemInfo = computed(() => ({
      ...props.stats.system,
      argv: props.stats.system.argv.join(" ")
    }));
    const systemColumns = [
      { field: "os", header: "OS" },
      { field: "python_version", header: "Python Version" },
      { field: "embedded_python", header: "Embedded Python" },
      { field: "pytorch_version", header: "Pytorch Version" },
      { field: "argv", header: "Arguments" },
      { field: "ram_total", header: "RAM Total" },
      { field: "ram_free", header: "RAM Free" }
    ];
    const formatValue = /* @__PURE__ */ __name((value, field) => {
      if (["ram_total", "ram_free"].includes(field)) {
        return formatSize(value);
      }
      return value;
    }, "formatValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("h2", _hoisted_3$1, toDisplayString(_ctx.$t("g.systemInfo")), 1),
          createElementVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(Fragment, null, renderList(systemColumns, (col) => {
              return openBlock(), createElementBlock(Fragment, {
                key: col.field
              }, [
                createElementVNode("div", _hoisted_5, toDisplayString(col.header), 1),
                createElementVNode("div", null, toDisplayString(formatValue(systemInfo.value[col.field], col.field)), 1)
              ], 64);
            }), 64))
          ])
        ]),
        createVNode(unref(Divider)),
        createElementVNode("div", null, [
          createElementVNode("h2", _hoisted_6, toDisplayString(_ctx.$t("g.devices")), 1),
          props.stats.devices.length > 1 ? (openBlock(), createBlock(unref(TabView), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.stats.devices, (device) => {
                return openBlock(), createBlock(unref(TabPanel), {
                  key: device.index,
                  header: device.name,
                  value: device.index
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, { device }, null, 8, ["device"])
                  ]),
                  _: 2
                }, 1032, ["header", "value"]);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_sfc_main$2, {
            key: 1,
            device: props.stats.devices[0]
          }, null, 8, ["device"]))
        ])
      ]);
    };
  }
});
const useAboutPanelStore = defineStore("aboutPanel", () => {
  const frontendVersion = "1.32.2";
  const extensionStore = useExtensionStore();
  const systemStatsStore = useSystemStatsStore();
  const coreVersion = computed(
    () => systemStatsStore?.systemStats?.system?.comfyui_version ?? ""
  );
  const coreBadges = computed(() => [
    // In electron, the ComfyUI is packaged without the git repo,
    // so the python server's API doesn't have the version info.
    {
      label: `ComfyUI ${isElectron() ? "v" + electronAPI().getComfyUIVersion() : coreVersion.value}`,
      url: "https://github.com/comfyanonymous/ComfyUI",
      icon: "pi pi-github"
    },
    {
      label: `ComfyUI_frontend v${frontendVersion}`,
      url: "https://github.com/Comfy-Org/ComfyUI_frontend",
      icon: "pi pi-github"
    },
    {
      label: "Discord",
      url: "https://www.comfy.org/discord",
      icon: "pi pi-discord"
    },
    { label: "ComfyOrg", url: "https://www.comfy.org/", icon: "pi pi-globe" }
  ]);
  const allBadges = computed(() => [
    ...coreBadges.value,
    ...extensionStore.extensions.flatMap((e) => e.aboutPageBadges ?? [])
  ]);
  return {
    badges: allBadges
  };
});
const _hoisted_1 = { class: "mb-2 text-2xl font-bold" };
const _hoisted_2 = { class: "space-y-2" };
const _hoisted_3 = ["href", "title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AboutPanel",
  setup(__props) {
    const systemStatsStore = useSystemStatsStore();
    const aboutPanelStore = useAboutPanelStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, {
        value: "About",
        class: "about-container"
      }, {
        default: withCtx(() => [
          createElementVNode("h2", _hoisted_1, toDisplayString(_ctx.$t("g.about")), 1),
          createElementVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(aboutPanelStore).badges, (badge) => {
              return openBlock(), createElementBlock("a", {
                key: badge.url,
                href: badge.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "about-badge inline-flex items-center no-underline",
                title: badge.url
              }, [
                createVNode(unref(Tag), { class: "mr-2" }, {
                  icon: withCtx(() => [
                    createElementVNode("i", {
                      class: normalizeClass([badge.icon, "mr-2 text-xl"])
                    }, null, 2)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(badge.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ], 8, _hoisted_3);
            }), 128))
          ]),
          createVNode(unref(Divider)),
          unref(systemStatsStore).systemStats ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            stats: unref(systemStatsStore).systemStats
          }, null, 8, ["stats"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=AboutPanel-Bc8CD8Sn.js.map
