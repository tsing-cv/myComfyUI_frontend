var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, computed, resolveDirective, withDirectives, openBlock, createElementBlock, createVNode, unref, isRef, createBlock, withCtx, createCommentVNode } from "vue";
import { s as storeToRefs } from "./vendor-vue-SdQKVoRx.js";
import Button from "primevue/button";
import ButtonGroup from "primevue/buttongroup";
import SplitButton from "primevue/splitbutton";
import { useI18n } from "vue-i18n";
import "./vendor-other-Bfb5Ofrh.js";
import { bO as useQueueSettingsStore, u as useSettingStore, d as _export_sfc, z as useWorkspaceStore, bV as useQueuePendingTaskCountStore, q as useCommandStore } from "./index-D9cV32Ob.js";
import "primevue/checkbox";
import "primevue/message";
import "primevue/divider";
import "primevue/scrollpanel";
import "primevue/usetoast";
import "primevue/card";
import "primevue/listbox";
import "primevue/skeleton";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/inputtext";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
import "primevue/progressspinner";
import "primevue/tag";
import InputNumber from "primevue/inputnumber";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/tabpanel";
import "primevue/select";
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
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/multiselect";
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
const _hoisted_1$1 = ["aria-label"];
const minQueueCount = 1;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BatchCountEdit",
  setup(__props) {
    const queueSettingsStore = useQueueSettingsStore();
    const { batchCount } = storeToRefs(queueSettingsStore);
    const settingStore = useSettingStore();
    const maxQueueCount = computed(
      () => settingStore.get("Comfy.QueueButton.BatchCountLimit")
    );
    const handleClick = /* @__PURE__ */ __name((increment) => {
      let newCount;
      if (increment) {
        const originalCount = batchCount.value - 1;
        newCount = Math.min(originalCount * 2, maxQueueCount.value);
      } else {
        const originalCount = batchCount.value + 1;
        newCount = Math.floor(originalCount / 2);
      }
      batchCount.value = newCount;
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "batch-count",
        "aria-label": _ctx.$t("menu.batchCount")
      }, [
        createVNode(unref(InputNumber), {
          modelValue: unref(batchCount),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(batchCount) ? batchCount.value = $event : null),
          class: "w-14",
          min: minQueueCount,
          max: maxQueueCount.value,
          fluid: "",
          "show-buttons": "",
          pt: {
            incrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(true);
              }, "onmousedown")
            },
            decrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(false);
              }, "onmousedown")
            }
          }
        }, null, 8, ["modelValue", "max", "pt"])
      ], 8, _hoisted_1$1)), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("menu.batchCount"),
            showDelay: 600
          },
          void 0,
          { bottom: true }
        ]
      ]);
    };
  }
});
const BatchCountEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-19217ad4"]]);
const _hoisted_1 = { class: "queue-button-group flex" };
const _hoisted_2 = {
  key: 0,
  class: "icon-[lucide--list-start]"
};
const _hoisted_3 = {
  key: 1,
  class: "icon-[lucide--play]"
};
const _hoisted_4 = {
  key: 2,
  class: "icon-[lucide--fast-forward]"
};
const _hoisted_5 = {
  key: 3,
  class: "icon-[lucide--step-forward]"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComfyQueueButton",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const queueCountStore = storeToRefs(useQueuePendingTaskCountStore());
    const { mode: queueMode, batchCount } = storeToRefs(useQueueSettingsStore());
    const { t } = useI18n();
    const queueModeMenuItemLookup = computed(() => {
      const items = {
        disabled: {
          key: "disabled",
          label: t("menu.run"),
          tooltip: t("menu.disabledTooltip"),
          command: /* @__PURE__ */ __name(() => {
            queueMode.value = "disabled";
          }, "command")
        },
        change: {
          key: "change",
          label: `${t("menu.run")} (${t("menu.onChange")})`,
          tooltip: t("menu.onChangeTooltip"),
          command: /* @__PURE__ */ __name(() => {
            queueMode.value = "change";
          }, "command")
        }
      };
      {
        items.instant = {
          key: "instant",
          label: `${t("menu.run")} (${t("menu.instant")})`,
          tooltip: t("menu.instantTooltip"),
          command: /* @__PURE__ */ __name(() => {
            queueMode.value = "instant";
          }, "command")
        };
      }
      return items;
    });
    const activeQueueModeMenuItem = computed(() => {
      return queueModeMenuItemLookup.value[queueMode.value] || queueModeMenuItemLookup.value.disabled;
    });
    const queueModeMenuItems = computed(
      () => Object.values(queueModeMenuItemLookup.value)
    );
    const executingPrompt = computed(() => !!queueCountStore.count.value);
    const hasPendingTasks = computed(
      () => queueCountStore.count.value > 1 || queueMode.value !== "disabled"
    );
    const commandStore = useCommandStore();
    const queuePrompt = /* @__PURE__ */ __name(async (e) => {
      const isShiftPressed = "shiftKey" in e && e.shiftKey;
      const commandId = isShiftPressed ? "Comfy.QueuePromptFront" : "Comfy.QueuePrompt";
      if (batchCount.value > 1) ;
      await commandStore.execute(commandId, {
        metadata: {
          subscribe_to_run: false,
          trigger_source: "button"
        }
      });
    }, "queuePrompt");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        withDirectives((openBlock(), createBlock(unref(SplitButton), {
          class: "comfyui-queue-button",
          label: String(activeQueueModeMenuItem.value?.label ?? ""),
          severity: "primary",
          size: "small",
          model: queueModeMenuItems.value,
          "data-testid": "queue-button",
          onClick: queuePrompt
        }, {
          icon: withCtx(() => [
            unref(workspaceStore).shiftDown ? (openBlock(), createElementBlock("i", _hoisted_2)) : unref(queueMode) === "disabled" ? (openBlock(), createElementBlock("i", _hoisted_3)) : unref(queueMode) === "instant" ? (openBlock(), createElementBlock("i", _hoisted_4)) : unref(queueMode) === "change" ? (openBlock(), createElementBlock("i", _hoisted_5)) : createCommentVNode("", true)
          ]),
          item: withCtx(({ item }) => [
            withDirectives(createVNode(unref(Button), {
              label: String(item.label ?? ""),
              icon: item.icon,
              severity: item.key === unref(queueMode) ? "primary" : "secondary",
              size: "small",
              text: ""
            }, null, 8, ["label", "icon", "severity"]), [
              [_directive_tooltip, {
                value: item.tooltip,
                showDelay: 600
              }]
            ])
          ]),
          _: 1
        }, 8, ["label", "model"])), [
          [
            _directive_tooltip,
            {
              value: unref(workspaceStore).shiftDown ? _ctx.$t("menu.runWorkflowFront") : _ctx.$t("menu.runWorkflow"),
              showDelay: 600
            },
            void 0,
            { bottom: true }
          ]
        ]),
        createVNode(BatchCountEdit),
        createVNode(unref(ButtonGroup), { class: "execution-actions flex flex-nowrap" }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-times",
              severity: executingPrompt.value ? "danger" : "secondary",
              disabled: !executingPrompt.value,
              text: "",
              "aria-label": _ctx.$t("menu.interrupt"),
              onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Interrupt"))
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("menu.interrupt"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ]),
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-stop",
              severity: hasPendingTasks.value ? "danger" : "secondary",
              disabled: !hasPendingTasks.value,
              text: "",
              "aria-label": _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
              onClick: _cache[1] || (_cache[1] = () => {
                if (unref(queueCountStore).count.value > 1) {
                  unref(commandStore).execute("Comfy.ClearPendingTasks");
                }
                queueMode.value = "disabled";
              })
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ComfyQueueButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1089c976"]]);
export {
  ComfyQueueButton as default
};
//# sourceMappingURL=ComfyQueueButton-z6rpVyjA.js.map
