var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { a_ as useKeybindingStore, q as useCommandStore, u as useSettingStore, m as useDialogStore, b_ as KeyComboImpl, v as app, b$ as KeybindingImpl } from "./index-D9cV32Ob.js";
const CORE_KEYBINDINGS = [
  {
    combo: {
      ctrl: true,
      key: "Enter"
    },
    commandId: "Comfy.QueuePrompt"
  },
  {
    combo: {
      ctrl: true,
      shift: true,
      key: "Enter"
    },
    commandId: "Comfy.QueuePromptFront"
  },
  {
    combo: {
      ctrl: true,
      alt: true,
      key: "Enter"
    },
    commandId: "Comfy.Interrupt"
  },
  {
    combo: {
      key: "r"
    },
    commandId: "Comfy.RefreshNodeDefinitions"
  },
  {
    combo: {
      key: "q"
    },
    commandId: "Workspace.ToggleSidebarTab.queue"
  },
  {
    combo: {
      key: "w"
    },
    commandId: "Workspace.ToggleSidebarTab.workflows"
  },
  {
    combo: {
      key: "n"
    },
    commandId: "Workspace.ToggleSidebarTab.node-library"
  },
  {
    combo: {
      key: "m"
    },
    commandId: "Workspace.ToggleSidebarTab.model-library"
  },
  {
    combo: {
      key: "s",
      ctrl: true
    },
    commandId: "Comfy.SaveWorkflow"
  },
  {
    combo: {
      key: "o",
      ctrl: true
    },
    commandId: "Comfy.OpenWorkflow"
  },
  {
    combo: {
      key: "g",
      ctrl: true
    },
    commandId: "Comfy.Graph.GroupSelectedNodes"
  },
  {
    combo: {
      key: ",",
      ctrl: true
    },
    commandId: "Comfy.ShowSettingsDialog"
  },
  // For '=' both holding shift and not holding shift
  {
    combo: {
      key: "=",
      alt: true
    },
    commandId: "Comfy.Canvas.ZoomIn",
    targetElementId: "graph-canvas"
  },
  {
    combo: {
      key: "+",
      alt: true,
      shift: true
    },
    commandId: "Comfy.Canvas.ZoomIn",
    targetElementId: "graph-canvas"
  },
  // For number pad '+'
  {
    combo: {
      key: "+",
      alt: true
    },
    commandId: "Comfy.Canvas.ZoomIn",
    targetElementId: "graph-canvas"
  },
  {
    combo: {
      key: "-",
      alt: true
    },
    commandId: "Comfy.Canvas.ZoomOut",
    targetElementId: "graph-canvas"
  },
  {
    combo: {
      key: "."
    },
    commandId: "Comfy.Canvas.FitView",
    targetElementId: "graph-canvas-container"
  },
  {
    combo: {
      key: "p"
    },
    commandId: "Comfy.Canvas.ToggleSelected.Pin",
    targetElementId: "graph-canvas-container"
  },
  {
    combo: {
      key: "c",
      alt: true
    },
    commandId: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
    targetElementId: "graph-canvas-container"
  },
  {
    combo: {
      key: "b",
      ctrl: true
    },
    commandId: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
    targetElementId: "graph-canvas-container"
  },
  {
    combo: {
      key: "m",
      ctrl: true
    },
    commandId: "Comfy.Canvas.ToggleSelectedNodes.Mute",
    targetElementId: "graph-canvas-container"
  },
  {
    combo: {
      key: "`",
      ctrl: true
    },
    commandId: "Workspace.ToggleBottomPanelTab.logs-terminal"
  },
  {
    combo: {
      key: "e",
      ctrl: true,
      shift: true
    },
    commandId: "Comfy.Graph.ConvertToSubgraph"
  },
  {
    combo: {
      key: "m",
      alt: true
    },
    commandId: "Comfy.Canvas.ToggleMinimap"
  },
  {
    combo: {
      ctrl: true,
      shift: true,
      key: "k"
    },
    commandId: "Workspace.ToggleBottomPanel.Shortcuts"
  },
  {
    combo: {
      key: "v"
    },
    commandId: "Comfy.Canvas.Unlock"
  },
  {
    combo: {
      key: "h"
    },
    commandId: "Comfy.Canvas.Lock"
  },
  {
    combo: {
      key: "Escape"
    },
    commandId: "Comfy.Graph.ExitSubgraph"
  }
];
const useKeybindingService = /* @__PURE__ */ __name(() => {
  const keybindingStore = useKeybindingStore();
  const commandStore = useCommandStore();
  const settingStore = useSettingStore();
  const dialogStore = useDialogStore();
  const shouldForwardToCanvas = /* @__PURE__ */ __name((event) => {
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return false;
    }
    const canvasKeys = ["Delete", "Backspace"];
    return canvasKeys.includes(event.key);
  }, "shouldForwardToCanvas");
  const keybindHandler = /* @__PURE__ */ __name(async function(event) {
    const keyCombo = KeyComboImpl.fromEvent(event);
    if (keyCombo.isModifier) {
      return;
    }
    const target = event.composedPath()[0];
    if (keyCombo.isReservedByTextInput && (target.tagName === "TEXTAREA" || target.tagName === "INPUT" || target.contentEditable === "true" || target.tagName === "SPAN" && target.classList.contains("property_value"))) {
      return;
    }
    const keybinding = keybindingStore.getKeybinding(keyCombo);
    if (keybinding && keybinding.targetElementId !== "graph-canvas") {
      if (event.key === "Escape" && !event.ctrlKey && !event.altKey && !event.metaKey) {
        if (dialogStore.dialogStack.length > 0) {
          return;
        }
      }
      event.preventDefault();
      const runCommandIds = /* @__PURE__ */ new Set([
        "Comfy.QueuePrompt",
        "Comfy.QueuePromptFront",
        "Comfy.QueueSelectedOutputNodes"
      ]);
      if (runCommandIds.has(keybinding.commandId)) {
        await commandStore.execute(keybinding.commandId, {
          metadata: {
            trigger_source: "keybinding"
          }
        });
      } else {
        await commandStore.execute(keybinding.commandId);
      }
      return;
    }
    if (!keybinding && shouldForwardToCanvas(event)) {
      const canvas = app.canvas;
      if (canvas && canvas.processKey && typeof canvas.processKey === "function") {
        canvas.processKey(event);
        return;
      }
    }
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }
    if (event.key === "Escape") {
      const modals = document.querySelectorAll(".comfy-modal");
      for (const modal of modals) {
        const modalDisplay = window.getComputedStyle(modal).getPropertyValue("display");
        if (modalDisplay !== "none") {
          modal.style.display = "none";
          break;
        }
      }
      for (const d of document.querySelectorAll("dialog")) d.close();
    }
  }, "keybindHandler");
  const registerCoreKeybindings = /* @__PURE__ */ __name(() => {
    for (const keybinding of CORE_KEYBINDINGS) {
      keybindingStore.addDefaultKeybinding(new KeybindingImpl(keybinding));
    }
  }, "registerCoreKeybindings");
  function registerUserKeybindings() {
    const unsetBindings = settingStore.get("Comfy.Keybinding.UnsetBindings");
    for (const keybinding of unsetBindings) {
      keybindingStore.unsetKeybinding(new KeybindingImpl(keybinding));
    }
    const newBindings = settingStore.get("Comfy.Keybinding.NewBindings");
    for (const keybinding of newBindings) {
      keybindingStore.addUserKeybinding(new KeybindingImpl(keybinding));
    }
  }
  __name(registerUserKeybindings, "registerUserKeybindings");
  async function persistUserKeybindings() {
    await settingStore.set(
      "Comfy.Keybinding.NewBindings",
      Object.values(keybindingStore.getUserKeybindings())
    );
    await settingStore.set(
      "Comfy.Keybinding.UnsetBindings",
      Object.values(keybindingStore.getUserUnsetKeybindings())
    );
  }
  __name(persistUserKeybindings, "persistUserKeybindings");
  return {
    keybindHandler,
    registerCoreKeybindings,
    registerUserKeybindings,
    persistUserKeybindings
  };
}, "useKeybindingService");
export {
  useKeybindingService as u
};
//# sourceMappingURL=keybindingService-NuT6mRmK.js.map
