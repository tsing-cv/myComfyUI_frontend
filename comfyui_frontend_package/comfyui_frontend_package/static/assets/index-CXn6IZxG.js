var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { v as app, c0 as ComfyApp, c1 as ComfyDialog, c2 as $el, a3 as LiteGraph, a7 as LGraphCanvas, c3 as isComboWidget, av as useExtensionService, c4 as processDynamicPrompt, c5 as isValidUrl, aV as electronAPI, R as isElectron, B as useWorkflowStore, y as useToastStore, t, F as useDialogService, c6 as ExecutableNodeDTO, c7 as ComfyDialog$1, c8 as PREFIX, c9 as SEPARATOR, ca as DraggableList, cb as getInputSpecType, cc as isIntInputSpec, cd as isFloatInputSpec, ce as isComboInputSpec, cf as getComboSpecComboOptions, W as useChainCallback, cg as GET_CONFIG, ch as ComfyWidgets, ao as LGraphNode, ci as applyTextReplacements, cj as CONFIG, ck as addValueControlWidgets, cl as GROUP, a4 as useNodeDefStore, cm as useWidgetStore, bt as useExecutionStore, a as api, cn as deserialiseAndCreate, ag as SubgraphNode, co as serialise, ap as LGraphGroup, u as useSettingStore, cp as Load3dUtils, ah as isLoad3dNode, m as useDialogStore, cq as Load3DViewerContent, cr as useLoad3dService, cs as useLoad3d, ct as ComponentWidgetImpl, cu as _sfc_main, cv as addWidget, cw as nodeToLoad3dMap, bo as setStorageValue, bp as getStorageValue, cx as hexToRgb, cy as parseToRgb, cz as downloadBlob, cA as createBounds, cB as getResourceURL, bx as getNodeByLocatorId, cC as useNodeFileInput, cD as useNodeDragAndDrop, cE as useNodePaste, cF as useAudioService, cG as splitFilePath, cH as isComboInputSpecV1 } from "./index-D9cV32Ob.js";
import { aI as log, aP as toolkit, bg as debounce, b9 as QuickLRU, bG as mediaRecorderConstructor } from "./vendor-other-Bfb5Ofrh.js";
import { l as lcm } from "./mathUtil-CTARWQ-l.js";
import { nextTick } from "vue";
import "@primevue/themes";
import "@primevue/themes/aura";
import "./vendor-vue-SdQKVoRx.js";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/button";
import "vue-i18n";
import "primevue/checkbox";
import "primevue/message";
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
class ClipspaceDialog extends ComfyDialog {
  static {
    __name(this, "ClipspaceDialog");
  }
  static items = [];
  static instance = null;
  static registerButton(name, contextPredicate, callback) {
    const item = $el("button", {
      type: "button",
      textContent: name,
      contextPredicate,
      onclick: callback
    });
    ClipspaceDialog.items.push(item);
  }
  static invalidatePreview() {
    if (ComfyApp.clipspace && ComfyApp.clipspace.imgs && ComfyApp.clipspace.imgs.length > 0) {
      const img_preview = document.getElementById(
        "clipspace_preview"
      );
      if (img_preview) {
        img_preview.src = ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]].src;
        img_preview.style.maxHeight = "100%";
        img_preview.style.maxWidth = "100%";
      }
    }
  }
  static invalidate() {
    if (ClipspaceDialog.instance) {
      const self = ClipspaceDialog.instance;
      const children = $el("div.comfy-modal-content", [
        self.createImgSettings(),
        ...self.createButtons()
      ]);
      if (self.element) {
        if (self.element.firstChild) {
          self.element.removeChild(self.element.firstChild);
        }
        self.element.appendChild(children);
      } else {
        self.element = $el("div.comfy-modal", { parent: document.body }, [
          children
        ]);
      }
      if (self.element.children[0].children.length <= 1) {
        self.element.children[0].appendChild(
          $el("p", {}, [
            "Unable to find the features to edit content of a format stored in the current Clipspace."
          ])
        );
      }
      ClipspaceDialog.invalidatePreview();
    }
  }
  constructor() {
    super();
  }
  createButtons() {
    const buttons = [];
    for (let idx in ClipspaceDialog.items) {
      const item = ClipspaceDialog.items[idx];
      if (!item.contextPredicate || item.contextPredicate())
        buttons.push(ClipspaceDialog.items[idx]);
    }
    buttons.push(
      $el("button", {
        type: "button",
        textContent: "Close",
        onclick: /* @__PURE__ */ __name(() => {
          this.close();
        }, "onclick")
      })
    );
    return buttons;
  }
  createImgSettings() {
    if (ComfyApp.clipspace?.imgs) {
      const combo_items = [];
      const imgs = ComfyApp.clipspace.imgs;
      for (let i = 0; i < imgs.length; i++) {
        combo_items.push($el("option", { value: i }, [`${i}`]));
      }
      const combo1 = $el(
        "select",
        {
          id: "clipspace_img_selector",
          onchange: /* @__PURE__ */ __name((event) => {
            if (event.target && ComfyApp.clipspace) {
              ComfyApp.clipspace["selectedIndex"] = event.target.selectedIndex;
              ClipspaceDialog.invalidatePreview();
            }
          }, "onchange")
        },
        combo_items
      );
      const row1 = $el("tr", {}, [
        $el("td", {}, [$el("font", { color: "white" }, ["Select Image"])]),
        $el("td", {}, [combo1])
      ]);
      const combo2 = $el(
        "select",
        {
          id: "clipspace_img_paste_mode",
          onchange: /* @__PURE__ */ __name((event) => {
            if (event.target && ComfyApp.clipspace) {
              ComfyApp.clipspace["img_paste_mode"] = event.target.value;
            }
          }, "onchange")
        },
        [
          $el("option", { value: "selected" }, "selected"),
          $el("option", { value: "all" }, "all")
        ]
      );
      combo2.value = ComfyApp.clipspace["img_paste_mode"];
      const row2 = $el("tr", {}, [
        $el("td", {}, [$el("font", { color: "white" }, ["Paste Mode"])]),
        $el("td", {}, [combo2])
      ]);
      const td = $el(
        "td",
        { align: "center", width: "100px", height: "100px", colSpan: "2" },
        [$el("img", { id: "clipspace_preview", ondragstart: /* @__PURE__ */ __name(() => false, "ondragstart") }, [])]
      );
      const row3 = $el("tr", {}, [td]);
      return $el("table", {}, [row1, row2, row3]);
    } else {
      return [];
    }
  }
  createImgPreview() {
    if (ComfyApp.clipspace?.imgs) {
      return $el("img", { id: "clipspace_preview", ondragstart: /* @__PURE__ */ __name(() => false, "ondragstart") });
    } else return [];
  }
  show() {
    ClipspaceDialog.invalidate();
    this.element.style.display = "block";
  }
}
app.registerExtension({
  name: "Comfy.Clipspace",
  init(app2) {
    app2.openClipspace = function() {
      if (!ClipspaceDialog.instance) {
        ClipspaceDialog.instance = new ClipspaceDialog();
        ComfyApp.clipspace_invalidate_handler = ClipspaceDialog.invalidate;
      }
      if (ComfyApp.clipspace) {
        ClipspaceDialog.instance.show();
      } else app2.ui.dialog.show("Clipspace is Empty!");
    };
  }
});
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.clipspace = window.comfyAPI.clipspace || {};
window.comfyAPI.clipspace.ClipspaceDialog = ClipspaceDialog;
const ext$4 = {
  name: "Comfy.ContextMenuFilter",
  init() {
    const ctxMenu = LiteGraph.ContextMenu;
    LiteGraph.ContextMenu = function(values, options) {
      const ctx = new ctxMenu(values, options);
      if (options?.className === "dark" && values?.length > 4) {
        const filter = document.createElement("input");
        filter.classList.add("comfy-context-menu-filter");
        filter.placeholder = "Filter list";
        ctx.root.prepend(filter);
        const items = Array.from(
          ctx.root.querySelectorAll(".litemenu-entry")
        );
        let displayedItems = [...items];
        let itemCount = displayedItems.length;
        requestAnimationFrame(() => {
          const currentNode = LGraphCanvas.active_canvas.current_node;
          const clickedComboValue = currentNode?.widgets?.filter(
            (w) => isComboWidget(w) && w.options.values?.length === values.length
          ).find(
            (w) => (
              // @ts-expect-error Poorly typed; filter above "should" mitigate exceptions
              w.options.values?.every((v, i) => v === values[i])
            )
          )?.value;
          let selectedIndex = clickedComboValue ? values.findIndex((v) => v === clickedComboValue) : 0;
          if (selectedIndex < 0) {
            selectedIndex = 0;
          }
          let selectedItem = displayedItems[selectedIndex];
          updateSelected();
          function updateSelected() {
            selectedItem?.style.setProperty("background-color", "");
            selectedItem?.style.setProperty("color", "");
            selectedItem = displayedItems[selectedIndex];
            selectedItem?.style.setProperty(
              "background-color",
              "#ccc",
              "important"
            );
            selectedItem?.style.setProperty("color", "#000", "important");
          }
          __name(updateSelected, "updateSelected");
          const positionList = /* @__PURE__ */ __name(() => {
            const rect = ctx.root.getBoundingClientRect();
            if (rect.top < 0) {
              const scale = 1 - ctx.root.getBoundingClientRect().height / ctx.root.clientHeight;
              const shift = ctx.root.clientHeight * scale / 2;
              ctx.root.style.top = -shift + "px";
            }
          }, "positionList");
          filter.addEventListener("keydown", (event) => {
            switch (event.key) {
              case "ArrowUp":
                event.preventDefault();
                if (selectedIndex === 0) {
                  selectedIndex = itemCount - 1;
                } else {
                  selectedIndex--;
                }
                updateSelected();
                break;
              case "ArrowRight":
                event.preventDefault();
                selectedIndex = itemCount - 1;
                updateSelected();
                break;
              case "ArrowDown":
                event.preventDefault();
                if (selectedIndex === itemCount - 1) {
                  selectedIndex = 0;
                } else {
                  selectedIndex++;
                }
                updateSelected();
                break;
              case "ArrowLeft":
                event.preventDefault();
                selectedIndex = 0;
                updateSelected();
                break;
              case "Enter":
                selectedItem?.click();
                break;
              case "Escape":
                ctx.close();
                break;
            }
          });
          filter.addEventListener("input", () => {
            const term = filter.value.toLocaleLowerCase();
            displayedItems = items.filter((item) => {
              const isVisible = !term || item.textContent?.toLocaleLowerCase().includes(term);
              item.style.display = isVisible ? "block" : "none";
              return isVisible;
            });
            selectedIndex = 0;
            if (displayedItems.includes(selectedItem)) {
              selectedIndex = displayedItems.findIndex(
                (d) => d === selectedItem
              );
            }
            itemCount = displayedItems.length;
            updateSelected();
            if (options.event) {
              let top = options.event.clientY - 10;
              const bodyRect = document.body.getBoundingClientRect();
              const rootRect = ctx.root.getBoundingClientRect();
              if (bodyRect.height && top > bodyRect.height - rootRect.height - 10) {
                top = Math.max(0, bodyRect.height - rootRect.height - 10);
              }
              ctx.root.style.top = top + "px";
              positionList();
            }
          });
          requestAnimationFrame(() => {
            filter.focus();
            positionList();
          });
        });
      }
      return ctx;
    };
    LiteGraph.ContextMenu.prototype = ctxMenu.prototype;
  }
};
app.registerExtension(ext$4);
useExtensionService().registerExtension({
  name: "Comfy.DynamicPrompts",
  nodeCreated(node) {
    if (node.widgets) {
      const widgets = node.widgets.filter((w) => w.dynamicPrompts);
      for (const widget of widgets) {
        widget.serializeValue = (workflowNode, widgetIndex) => {
          if (typeof widget.value !== "string") return widget.value;
          const prompt = processDynamicPrompt(widget.value);
          if (workflowNode?.widgets_values)
            workflowNode.widgets_values[widgetIndex] = prompt;
          return prompt;
        };
      }
    }
  }
});
app.registerExtension({
  name: "Comfy.EditAttention",
  init() {
    const editAttentionDelta = app.ui.settings.addSetting({
      id: "Comfy.EditAttention.Delta",
      category: ["Comfy", "EditTokenWeight", "Delta"],
      name: "Ctrl+up/down precision",
      type: "slider",
      attrs: {
        min: 0.01,
        max: 0.5,
        step: 0.01
      },
      defaultValue: 0.05
    });
    function incrementWeight(weight, delta) {
      const floatWeight = parseFloat(weight);
      if (isNaN(floatWeight)) return weight;
      const newWeight = floatWeight + delta;
      return String(Number(newWeight.toFixed(10)));
    }
    __name(incrementWeight, "incrementWeight");
    function findNearestEnclosure(text, cursorPos) {
      let start = cursorPos, end = cursorPos;
      let openCount = 0, closeCount = 0;
      while (start >= 0) {
        start--;
        if (text[start] === "(" && openCount === closeCount) break;
        if (text[start] === "(") openCount++;
        if (text[start] === ")") closeCount++;
      }
      if (start < 0) return null;
      openCount = 0;
      closeCount = 0;
      while (end < text.length) {
        if (text[end] === ")" && openCount === closeCount) break;
        if (text[end] === "(") openCount++;
        if (text[end] === ")") closeCount++;
        end++;
      }
      if (end === text.length) return null;
      return { start: start + 1, end };
    }
    __name(findNearestEnclosure, "findNearestEnclosure");
    function addWeightToParentheses(text) {
      const parenRegex = /^\((.*)\)$/;
      const parenMatch = text.match(parenRegex);
      const floatRegex = /:([+-]?(\d*\.)?\d+([eE][+-]?\d+)?)/;
      const floatMatch = text.match(floatRegex);
      if (parenMatch && !floatMatch) {
        return `(${parenMatch[1]}:1.0)`;
      } else {
        return text;
      }
    }
    __name(addWeightToParentheses, "addWeightToParentheses");
    function editAttention(event) {
      const inputField = event.composedPath()[0];
      const delta = parseFloat(editAttentionDelta.value);
      if (inputField.tagName !== "TEXTAREA") return;
      if (!(event.key === "ArrowUp" || event.key === "ArrowDown")) return;
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      let start = inputField.selectionStart;
      let end = inputField.selectionEnd;
      let selectedText = inputField.value.substring(start, end);
      if (!selectedText) {
        const nearestEnclosure = findNearestEnclosure(inputField.value, start);
        if (nearestEnclosure) {
          start = nearestEnclosure.start;
          end = nearestEnclosure.end;
          selectedText = inputField.value.substring(start, end);
        } else {
          const delimiters = " .,\\/!?%^*;:{}=-_`~()\r\n	";
          while (!delimiters.includes(inputField.value[start - 1]) && start > 0) {
            start--;
          }
          while (!delimiters.includes(inputField.value[end]) && end < inputField.value.length) {
            end++;
          }
          selectedText = inputField.value.substring(start, end);
          if (!selectedText) return;
        }
      }
      if (selectedText[selectedText.length - 1] === " ") {
        selectedText = selectedText.substring(0, selectedText.length - 1);
        end -= 1;
      }
      if (inputField.value[start - 1] === "(" && inputField.value[end] === ")") {
        start -= 1;
        end += 1;
        selectedText = inputField.value.substring(start, end);
      }
      if (selectedText[0] !== "(" || selectedText[selectedText.length - 1] !== ")") {
        selectedText = `(${selectedText})`;
      }
      selectedText = addWeightToParentheses(selectedText);
      const weightDelta = event.key === "ArrowUp" ? delta : -delta;
      const updatedText = selectedText.replace(
        /\((.*):([+-]?\d+(?:\.\d+)?)\)/,
        (_, text, weight) => {
          weight = incrementWeight(weight, weightDelta);
          if (weight == 1) {
            return text;
          } else {
            return `(${text}:${weight})`;
          }
        }
      );
      inputField.setSelectionRange(start, end);
      document.execCommand("insertText", false, updatedText);
      inputField.setSelectionRange(start, start + updatedText.length);
    }
    __name(editAttention, "editAttention");
    window.addEventListener("keydown", editAttention);
  }
});
const PYTHON_MIRROR = {
  settingId: "Comfy-Desktop.UV.PythonInstallMirror",
  mirror: "https://github.com/astral-sh/python-build-standalone/releases/download",
  fallbackMirror: "https://python-standalone.org/mirror/astral-sh/python-build-standalone",
  validationPathSuffix: "/20250115/cpython-3.10.16+20250115-aarch64-apple-darwin-debug-full.tar.zst.sha256"
};
const checkMirrorReachable = /* @__PURE__ */ __name(async (mirror) => {
  return isValidUrl(mirror) && await electronAPI().NetWork.canAccessUrl(mirror);
}, "checkMirrorReachable");
const DESKTOP_DOCS = {
  WINDOWS: "https://docs.comfy.org/installation/desktop/windows",
  MACOS: "https://docs.comfy.org/installation/desktop/macos"
};
(async () => {
  if (!isElectron()) return;
  const electronAPI$1 = electronAPI();
  const desktopAppVersion = await electronAPI$1.getElectronVersion();
  const workflowStore = useWorkflowStore();
  const toastStore = useToastStore();
  const onChangeRestartApp = /* @__PURE__ */ __name((newValue, oldValue) => {
    if (oldValue !== void 0 && newValue !== oldValue) {
      electronAPI$1.restartApp("Restart ComfyUI to apply changes.", 1500);
    }
  }, "onChangeRestartApp");
  app.registerExtension({
    name: "Comfy.ElectronAdapter",
    settings: [
      {
        id: "Comfy-Desktop.AutoUpdate",
        category: ["Comfy-Desktop", "General", "AutoUpdate"],
        name: "Automatically check for updates",
        type: "boolean",
        defaultValue: true,
        onChange: onChangeRestartApp
      },
      {
        id: "Comfy-Desktop.SendStatistics",
        category: ["Comfy-Desktop", "General", "Send Statistics"],
        name: "Send anonymous usage metrics",
        type: "boolean",
        defaultValue: true,
        onChange: onChangeRestartApp
      },
      {
        id: "Comfy-Desktop.WindowStyle",
        category: ["Comfy-Desktop", "General", "Window Style"],
        name: "Window Style",
        tooltip: "Custom: Replace the system title bar with ComfyUI's Top menu",
        type: "combo",
        experimental: true,
        defaultValue: "default",
        options: ["default", "custom"],
        onChange: /* @__PURE__ */ __name((newValue, oldValue) => {
          if (!oldValue) return;
          electronAPI$1.Config.setWindowStyle(newValue);
        }, "onChange")
      },
      {
        id: "Comfy-Desktop.UV.PythonInstallMirror",
        name: "Python Install Mirror",
        tooltip: `Managed Python installations are downloaded from the Astral python-build-standalone project. This variable can be set to a mirror URL to use a different source for Python installations. The provided URL will replace https://github.com/astral-sh/python-build-standalone/releases/download in, e.g., https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz. Distributions can be read from a local directory by using the file:// URL scheme.`,
        type: "url",
        defaultValue: "",
        attrs: {
          validateUrlFn(mirror) {
            return checkMirrorReachable(
              mirror + PYTHON_MIRROR.validationPathSuffix
            );
          }
        }
      },
      {
        id: "Comfy-Desktop.UV.PypiInstallMirror",
        name: "Pypi Install Mirror",
        tooltip: `Default pip install mirror`,
        type: "url",
        defaultValue: "",
        attrs: {
          validateUrlFn: checkMirrorReachable
        }
      },
      {
        id: "Comfy-Desktop.UV.TorchInstallMirror",
        name: "Torch Install Mirror",
        tooltip: `Pip install mirror for pytorch`,
        type: "url",
        defaultValue: "",
        attrs: {
          validateUrlFn: checkMirrorReachable
        }
      }
    ],
    commands: [
      {
        id: "Comfy-Desktop.Folders.OpenLogsFolder",
        label: "Open Logs Folder",
        icon: "pi pi-folder-open",
        function() {
          electronAPI$1.openLogsFolder();
        }
      },
      {
        id: "Comfy-Desktop.Folders.OpenModelsFolder",
        label: "Open Models Folder",
        icon: "pi pi-folder-open",
        function() {
          electronAPI$1.openModelsFolder();
        }
      },
      {
        id: "Comfy-Desktop.Folders.OpenOutputsFolder",
        label: "Open Outputs Folder",
        icon: "pi pi-folder-open",
        function() {
          electronAPI$1.openOutputsFolder();
        }
      },
      {
        id: "Comfy-Desktop.Folders.OpenInputsFolder",
        label: "Open Inputs Folder",
        icon: "pi pi-folder-open",
        function() {
          electronAPI$1.openInputsFolder();
        }
      },
      {
        id: "Comfy-Desktop.Folders.OpenCustomNodesFolder",
        label: "Open Custom Nodes Folder",
        icon: "pi pi-folder-open",
        function() {
          electronAPI$1.openCustomNodesFolder();
        }
      },
      {
        id: "Comfy-Desktop.Folders.OpenModelConfig",
        label: "Open extra_model_paths.yaml",
        icon: "pi pi-file",
        function() {
          electronAPI$1.openModelConfig();
        }
      },
      {
        id: "Comfy-Desktop.OpenDevTools",
        label: "Open DevTools",
        icon: "pi pi-code",
        function() {
          electronAPI$1.openDevTools();
        }
      },
      {
        id: "Comfy-Desktop.OpenUserGuide",
        label: "Desktop User Guide",
        icon: "pi pi-book",
        function() {
          const docsUrl = electronAPI$1.getPlatform() === "darwin" ? DESKTOP_DOCS.MACOS : DESKTOP_DOCS.WINDOWS;
          window.open(docsUrl, "_blank");
        }
      },
      {
        id: "Comfy-Desktop.CheckForUpdates",
        label: "Check for Updates",
        icon: "pi pi-sync",
        async function() {
          try {
            const updateInfo = await electronAPI$1.checkForUpdates({
              disableUpdateReadyAction: true
            });
            if (!updateInfo.isUpdateAvailable) {
              toastStore.add({
                severity: "info",
                summary: t("desktopUpdate.noUpdateFound"),
                life: 5e3
              });
              return;
            }
            const proceed = await useDialogService().confirm({
              title: t("desktopUpdate.updateFoundTitle", {
                version: updateInfo.version
              }),
              message: t("desktopUpdate.updateAvailableMessage"),
              type: "default"
            });
            if (proceed) {
              try {
                electronAPI$1.restartAndInstall();
              } catch (error) {
                log.error("Error installing update:", error);
                toastStore.add({
                  severity: "error",
                  summary: t("g.error"),
                  detail: t("desktopUpdate.errorInstallingUpdate"),
                  life: 1e4
                });
              }
            }
          } catch (error) {
            log.error("Error checking for updates:", error);
            toastStore.add({
              severity: "error",
              summary: t("g.error"),
              detail: t("desktopUpdate.errorCheckingUpdate"),
              life: 1e4
            });
          }
        }
      },
      {
        id: "Comfy-Desktop.Reinstall",
        label: "Reinstall",
        icon: "pi pi-refresh",
        async function() {
          const proceed = await useDialogService().confirm({
            message: t("desktopMenu.confirmReinstall"),
            title: t("desktopMenu.reinstall"),
            type: "reinstall"
          });
          if (proceed) electronAPI$1.reinstall();
        }
      },
      {
        id: "Comfy-Desktop.Restart",
        label: "Restart",
        icon: "pi pi-refresh",
        function() {
          electronAPI$1.restartApp();
        }
      },
      {
        id: "Comfy-Desktop.Quit",
        label: "Quit",
        icon: "pi pi-sign-out",
        async function() {
          if (workflowStore.modifiedWorkflows.length > 0) {
            const confirmed = await useDialogService().confirm({
              message: t("desktopMenu.confirmQuit"),
              title: t("desktopMenu.quit"),
              type: "default"
            });
            if (!confirmed) return;
          }
          electronAPI$1.quit();
        }
      }
    ],
    menuCommands: [
      {
        path: ["Help"],
        commands: ["Comfy-Desktop.OpenUserGuide"]
      },
      {
        path: ["Help"],
        commands: ["Comfy-Desktop.OpenDevTools"]
      },
      {
        path: ["Help", "Open Folder"],
        commands: [
          "Comfy-Desktop.Folders.OpenLogsFolder",
          "Comfy-Desktop.Folders.OpenModelsFolder",
          "Comfy-Desktop.Folders.OpenOutputsFolder",
          "Comfy-Desktop.Folders.OpenInputsFolder",
          "Comfy-Desktop.Folders.OpenCustomNodesFolder",
          "Comfy-Desktop.Folders.OpenModelConfig"
        ]
      },
      {
        path: ["Help"],
        commands: ["Comfy-Desktop.CheckForUpdates", "Comfy-Desktop.Reinstall"]
      }
    ],
    keybindings: [
      {
        commandId: "Workspace.CloseWorkflow",
        combo: {
          key: "w",
          ctrl: true
        }
      }
    ],
    aboutPageBadges: [
      {
        label: "ComfyUI_desktop v" + desktopAppVersion,
        url: "https://github.com/Comfy-Org/electron",
        icon: "pi pi-github"
      }
    ]
  });
})();
class ExecutableGroupNodeChildDTO extends ExecutableNodeDTO {
  static {
    __name(this, "ExecutableGroupNodeChildDTO");
  }
  groupNodeHandler;
  constructor(node, subgraphNodePath, nodesByExecutionId, subgraphNode, groupNodeHandler) {
    super(node, subgraphNodePath, nodesByExecutionId, subgraphNode);
    this.groupNodeHandler = groupNodeHandler;
  }
  resolveInput(slot) {
    if (this.id.split(":").length > 2) {
      throw new Error(
        "Group nodes inside subgraphs are not supported. Please convert the group node to a subgraph instead."
      );
    }
    const inputNode = this.node.getInputNode(slot);
    if (!inputNode) return;
    const link = this.node.getInputLink(slot);
    if (!link) throw new Error("Failed to get input link");
    const inputNodeId = String(inputNode.id);
    let inputNodeDto = this.nodesByExecutionId?.get(inputNodeId);
    if (!inputNodeDto) {
      const id2 = inputNodeId.split(":").at(-1);
      if (id2 !== void 0) {
        inputNodeDto = this.nodesByExecutionId?.get(id2);
      }
    }
    if (!inputNodeDto) {
      throw new Error(
        `Failed to get input node ${inputNodeId} for group node child ${this.id} with slot ${slot}`
      );
    }
    return {
      node: inputNodeDto,
      origin_id: inputNodeId,
      origin_slot: link.origin_slot
    };
  }
}
const ORDER = Symbol();
function merge(target, source) {
  if (typeof target === "object" && typeof source === "object") {
    for (const key in source) {
      const sv = source[key];
      if (typeof sv === "object") {
        let tv = target[key];
        if (!tv) tv = target[key] = {};
        merge(tv, source[key]);
      } else {
        target[key] = sv;
      }
    }
  }
  return target;
}
__name(merge, "merge");
class ManageGroupDialog extends ComfyDialog$1 {
  static {
    __name(this, "ManageGroupDialog");
  }
  // @ts-expect-error fixme ts strict error
  tabs;
  selectedNodeIndex;
  selectedTab = "Inputs";
  selectedGroup;
  modifications = {};
  // @ts-expect-error fixme ts strict error
  nodeItems;
  app;
  // @ts-expect-error fixme ts strict error
  groupNodeType;
  groupNodeDef;
  groupData;
  // @ts-expect-error fixme ts strict error
  innerNodesList;
  // @ts-expect-error fixme ts strict error
  widgetsPage;
  // @ts-expect-error fixme ts strict error
  inputsPage;
  // @ts-expect-error fixme ts strict error
  outputsPage;
  draggable;
  get selectedNodeInnerIndex() {
    return +this.nodeItems[this.selectedNodeIndex].dataset.nodeindex;
  }
  // @ts-expect-error fixme ts strict error
  constructor(app2) {
    super();
    this.app = app2;
    this.element = $el("dialog.comfy-group-manage", {
      parent: document.body
    });
  }
  // @ts-expect-error fixme ts strict error
  changeTab(tab) {
    this.tabs[this.selectedTab].tab.classList.remove("active");
    this.tabs[this.selectedTab].page.classList.remove("active");
    this.tabs[tab].tab.classList.add("active");
    this.tabs[tab].page.classList.add("active");
    this.selectedTab = tab;
  }
  // @ts-expect-error fixme ts strict error
  changeNode(index, force) {
    if (!force && this.selectedNodeIndex === index) return;
    if (this.selectedNodeIndex != null) {
      this.nodeItems[this.selectedNodeIndex].classList.remove("selected");
    }
    this.nodeItems[index].classList.add("selected");
    this.selectedNodeIndex = index;
    if (!this.buildInputsPage() && this.selectedTab === "Inputs") {
      this.changeTab("Widgets");
    }
    if (!this.buildWidgetsPage() && this.selectedTab === "Widgets") {
      this.changeTab("Outputs");
    }
    if (!this.buildOutputsPage() && this.selectedTab === "Outputs") {
      this.changeTab("Inputs");
    }
    this.changeTab(this.selectedTab);
  }
  getGroupData() {
    this.groupNodeType = LiteGraph.registered_node_types[`${PREFIX}${SEPARATOR}` + this.selectedGroup];
    this.groupNodeDef = this.groupNodeType.nodeData;
    this.groupData = GroupNodeHandler.getGroupData(this.groupNodeType);
  }
  // @ts-expect-error fixme ts strict error
  changeGroup(group, reset = true) {
    this.selectedGroup = group;
    this.getGroupData();
    const nodes = this.groupData.nodeData.nodes;
    this.nodeItems = nodes.map(
      (n, i) => $el(
        "li.draggable-item",
        {
          dataset: {
            nodeindex: n.index + ""
          },
          onclick: /* @__PURE__ */ __name(() => {
            this.changeNode(i);
          }, "onclick")
        },
        [
          $el("span.drag-handle"),
          $el(
            "div",
            {
              textContent: n.title ?? n.type
            },
            n.title ? $el("span", {
              textContent: n.type
            }) : []
          )
        ]
      )
    );
    this.innerNodesList.replaceChildren(...this.nodeItems);
    if (reset) {
      this.selectedNodeIndex = null;
      this.changeNode(0);
    } else {
      const items = this.draggable.getAllItems();
      let index = items.findIndex((item) => item.classList.contains("selected"));
      if (index === -1) index = this.selectedNodeIndex;
      this.changeNode(index, true);
    }
    const ordered = [...nodes];
    this.draggable?.dispose();
    this.draggable = new DraggableList(this.innerNodesList, "li");
    this.draggable.addEventListener(
      "dragend",
      // @ts-expect-error fixme ts strict error
      ({ detail: { oldPosition, newPosition } }) => {
        if (oldPosition === newPosition) return;
        ordered.splice(newPosition, 0, ordered.splice(oldPosition, 1)[0]);
        for (let i = 0; i < ordered.length; i++) {
          this.storeModification({
            nodeIndex: ordered[i].index,
            section: ORDER,
            prop: "order",
            value: i
          });
        }
      }
    );
  }
  storeModification(props) {
    const { nodeIndex, section, prop, value } = props;
    const groupMod = this.modifications[this.selectedGroup] ??= {};
    const nodesMod = groupMod.nodes ??= {};
    const nodeMod = nodesMod[nodeIndex ?? this.selectedNodeInnerIndex] ??= {};
    const typeMod = nodeMod[section] ??= {};
    if (typeof value === "object") {
      const objMod = typeMod[prop] ??= {};
      Object.assign(objMod, value);
    } else {
      typeMod[prop] = value;
    }
  }
  // @ts-expect-error fixme ts strict error
  getEditElement(section, prop, value, placeholder, checked, checkable = true) {
    if (value === placeholder) value = "";
    const mods = (
      // @ts-expect-error fixme ts strict error
      this.modifications[this.selectedGroup]?.nodes?.[this.selectedNodeInnerIndex]?.[section]?.[prop]
    );
    if (mods) {
      if (mods.name != null) {
        value = mods.name;
      }
      if (mods.visible != null) {
        checked = mods.visible;
      }
    }
    return $el("div", [
      $el("input", {
        value,
        placeholder,
        type: "text",
        // @ts-expect-error fixme ts strict error
        onchange: /* @__PURE__ */ __name((e) => {
          this.storeModification({
            section,
            prop,
            value: { name: e.target.value }
          });
        }, "onchange")
      }),
      $el("label", { textContent: "Visible" }, [
        $el("input", {
          type: "checkbox",
          checked,
          disabled: !checkable,
          // @ts-expect-error fixme ts strict error
          onchange: /* @__PURE__ */ __name((e) => {
            this.storeModification({
              section,
              prop,
              value: { visible: !!e.target.checked }
            });
          }, "onchange")
        })
      ])
    ]);
  }
  buildWidgetsPage() {
    const widgets = this.groupData.oldToNewWidgetMap[this.selectedNodeInnerIndex];
    const items = Object.keys(widgets ?? {});
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.input;
    this.widgetsPage.replaceChildren(
      ...items.map((oldName) => {
        return this.getEditElement(
          "input",
          oldName,
          widgets[oldName],
          oldName,
          config?.[oldName]?.visible !== false
        );
      })
    );
    return !!items.length;
  }
  buildInputsPage() {
    const inputs = this.groupData.nodeInputs[this.selectedNodeInnerIndex];
    const items = Object.keys(inputs ?? {});
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.input;
    this.inputsPage.replaceChildren(
      ...items.map((oldName) => {
        let value = inputs[oldName];
        if (!value) {
          return;
        }
        return this.getEditElement(
          "input",
          oldName,
          value,
          oldName,
          config?.[oldName]?.visible !== false
        );
      }).filter(Boolean)
    );
    return !!items.length;
  }
  buildOutputsPage() {
    const nodes = this.groupData.nodeData.nodes;
    const innerNodeDef = this.groupData.getNodeDef(
      nodes[this.selectedNodeInnerIndex]
    );
    const outputs = innerNodeDef?.output ?? [];
    const groupOutputs = this.groupData.oldToNewOutputMap[this.selectedNodeInnerIndex];
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.output;
    const node = this.groupData.nodeData.nodes[this.selectedNodeInnerIndex];
    const checkable = node.type !== "PrimitiveNode";
    this.outputsPage.replaceChildren(
      ...outputs.map((type2, slot) => {
        const groupOutputIndex = groupOutputs?.[slot];
        const oldName = innerNodeDef.output_name?.[slot] ?? type2;
        let value = config?.[slot]?.name;
        const visible = config?.[slot]?.visible || groupOutputIndex != null;
        if (!value || value === oldName) {
          value = "";
        }
        return this.getEditElement(
          "output",
          slot,
          value,
          oldName,
          visible,
          checkable
        );
      }).filter(Boolean)
    );
    return !!outputs.length;
  }
  // @ts-expect-error fixme ts strict error
  show(type) {
    const groupNodes = Object.keys(app.graph.extra?.groupNodes ?? {}).sort(
      (a, b) => a.localeCompare(b)
    );
    this.innerNodesList = $el(
      "ul.comfy-group-manage-list-items"
    );
    this.widgetsPage = $el("section.comfy-group-manage-node-page");
    this.inputsPage = $el("section.comfy-group-manage-node-page");
    this.outputsPage = $el("section.comfy-group-manage-node-page");
    const pages = $el("div", [
      this.widgetsPage,
      this.inputsPage,
      this.outputsPage
    ]);
    this.tabs = [
      ["Inputs", this.inputsPage],
      ["Widgets", this.widgetsPage],
      ["Outputs", this.outputsPage]
      // @ts-expect-error fixme ts strict error
    ].reduce((p, [name, page]) => {
      p[name] = {
        tab: $el("a", {
          onclick: /* @__PURE__ */ __name(() => {
            this.changeTab(name);
          }, "onclick"),
          textContent: name
        }),
        page
      };
      return p;
    }, {});
    const outer = $el("div.comfy-group-manage-outer", [
      $el("header", [
        $el("h2", "Group Nodes"),
        $el(
          "select",
          {
            // @ts-expect-error fixme ts strict error
            onchange: /* @__PURE__ */ __name((e) => {
              this.changeGroup(e.target.value);
            }, "onchange")
          },
          groupNodes.map(
            (g) => $el("option", {
              textContent: g,
              selected: `${PREFIX}${SEPARATOR}${g}` === type,
              value: g
            })
          )
        )
      ]),
      $el("main", [
        $el("section.comfy-group-manage-list", this.innerNodesList),
        $el("section.comfy-group-manage-node", [
          $el(
            "header",
            Object.values(this.tabs).map((t2) => t2.tab)
          ),
          pages
        ])
      ]),
      $el("footer", [
        $el(
          "button.comfy-btn",
          {
            onclick: /* @__PURE__ */ __name(() => {
              const node = app.graph.nodes.find(
                (n) => n.type === `${PREFIX}${SEPARATOR}` + this.selectedGroup
              );
              if (node) {
                useToastStore().addAlert(
                  "This group node is in use in the current workflow, please first remove these."
                );
                return;
              }
              if (confirm(
                `Are you sure you want to remove the node: "${this.selectedGroup}"`
              )) {
                delete app.graph.extra.groupNodes[this.selectedGroup];
                LiteGraph.unregisterNodeType(
                  `${PREFIX}${SEPARATOR}` + this.selectedGroup
                );
              }
              this.show();
            }, "onclick")
          },
          "Delete Group Node"
        ),
        $el(
          "button.comfy-btn",
          {
            onclick: /* @__PURE__ */ __name(async () => {
              let nodesByType;
              let recreateNodes = [];
              const types = {};
              for (const g in this.modifications) {
                const type2 = app.graph.extra.groupNodes[g];
                let config = type2.config ??= {};
                let nodeMods = this.modifications[g]?.nodes;
                if (nodeMods) {
                  const keys = Object.keys(nodeMods);
                  if (nodeMods[keys[0]][ORDER]) {
                    const orderedNodes = [];
                    const orderedMods = {};
                    const orderedConfig = {};
                    for (const n of keys) {
                      const order = nodeMods[n][ORDER].order;
                      orderedNodes[order] = type2.nodes[+n];
                      orderedMods[order] = nodeMods[n];
                      orderedNodes[order].index = order;
                    }
                    for (const l of type2.links) {
                      if (l[0] != null) l[0] = type2.nodes[l[0]].index;
                      if (l[2] != null) l[2] = type2.nodes[l[2]].index;
                    }
                    if (type2.external) {
                      for (const ext2 of type2.external) {
                        ext2[0] = type2.nodes[ext2[0]];
                      }
                    }
                    for (const id2 of keys) {
                      if (config[id2]) {
                        orderedConfig[type2.nodes[id2].index] = config[id2];
                      }
                      delete config[id2];
                    }
                    type2.nodes = orderedNodes;
                    nodeMods = orderedMods;
                    type2.config = config = orderedConfig;
                  }
                  merge(config, nodeMods);
                }
                types[g] = type2;
                if (!nodesByType) {
                  nodesByType = app.graph.nodes.reduce((p, n) => {
                    p[n.type] ??= [];
                    p[n.type].push(n);
                    return p;
                  }, {});
                }
                const nodes = nodesByType[`${PREFIX}${SEPARATOR}` + g];
                if (nodes) recreateNodes.push(...nodes);
              }
              await GroupNodeConfig.registerFromWorkflow(types, {});
              for (const node of recreateNodes) {
                node.recreate();
              }
              this.modifications = {};
              this.app.graph.setDirtyCanvas(true, true);
              this.changeGroup(this.selectedGroup, false);
            }, "onclick")
          },
          "Save"
        ),
        $el(
          "button.comfy-btn",
          { onclick: /* @__PURE__ */ __name(() => this.element.close(), "onclick") },
          "Close"
        )
      ])
    ]);
    this.element.replaceChildren(outer);
    this.changeGroup(
      type ? groupNodes.find((g) => `${PREFIX}${SEPARATOR}${g}` === type) ?? groupNodes[0] : groupNodes[0]
    );
    this.element.showModal();
    this.element.addEventListener("close", () => {
      this.draggable?.dispose();
      this.element.remove();
    });
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNodeManage = window.comfyAPI.groupNodeManage || {};
window.comfyAPI.groupNodeManage.ManageGroupDialog = ManageGroupDialog;
const IGNORE_KEYS = /* @__PURE__ */ new Set([
  "default",
  "forceInput",
  "defaultInput",
  "control_after_generate",
  "multiline",
  "tooltip",
  "dynamicPrompts"
]);
const getRange = /* @__PURE__ */ __name((options) => {
  const min = options.min ?? -Infinity;
  const max = options.max ?? Infinity;
  return { min, max };
}, "getRange");
const mergeNumericInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type = spec1[0];
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const range1 = getRange(options1);
  const range2 = getRange(options2);
  if (range1.min > range2.max || range1.max < range2.min) {
    return null;
  }
  const step1 = options1.step ?? 1;
  const step2 = options2.step ?? 1;
  const mergedOptions = {
    // Take intersection of ranges
    min: Math.max(range1.min, range2.min),
    max: Math.min(range1.max, range2.max),
    step: lcm(step1, step2)
  };
  return mergeCommonInputSpec(
    [type, { ...options1, ...mergedOptions }],
    [type, { ...options2, ...mergedOptions }]
  );
}, "mergeNumericInputSpec");
const mergeComboInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const comboOptions1 = getComboSpecComboOptions(spec1);
  const comboOptions2 = getComboSpecComboOptions(spec2);
  const intersection = toolkit.intersection(comboOptions1, comboOptions2);
  if (intersection.length === 0) {
    return null;
  }
  return mergeCommonInputSpec(
    ["COMBO", { ...options1, options: intersection }],
    ["COMBO", { ...options2, options: intersection }]
  );
}, "mergeComboInputSpec");
const mergeCommonInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type = getInputSpecType(spec1);
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const compareKeys = toolkit.union(toolkit.keys(options1), toolkit.keys(options2)).filter(
    (key) => !IGNORE_KEYS.has(key)
  );
  const mergeIsValid = compareKeys.every((key) => {
    const value1 = options1[key];
    const value2 = options2[key];
    return value1 === value2 || toolkit.isNil(value1) && toolkit.isNil(value2);
  });
  return mergeIsValid ? [type, { ...options1, ...options2 }] : null;
}, "mergeCommonInputSpec");
const mergeInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type1 = getInputSpecType(spec1);
  const type2 = getInputSpecType(spec2);
  if (type1 !== type2) {
    return null;
  }
  if (isIntInputSpec(spec1) || isFloatInputSpec(spec1)) {
    return mergeNumericInputSpec(spec1, spec2);
  }
  if (isComboInputSpec(spec1)) {
    return mergeComboInputSpec(spec1, spec2);
  }
  return mergeCommonInputSpec(spec1, spec2);
}, "mergeInputSpec");
const isPrimitiveNode = /* @__PURE__ */ __name((node) => node.type === "PrimitiveNode", "isPrimitiveNode");
const replacePropertyName = "Run widget replace on values";
class PrimitiveNode extends LGraphNode {
  static {
    __name(this, "PrimitiveNode");
  }
  controlValues;
  lastType;
  static category;
  constructor(title) {
    super(title);
    this.addOutput("connect to widget input", "*");
    this.serialize_widgets = true;
    this.isVirtualNode = true;
    if (!this.properties || !(replacePropertyName in this.properties)) {
      this.addProperty(replacePropertyName, false, "boolean");
    }
  }
  applyToGraph(extraLinks = []) {
    if (!this.outputs[0].links?.length) return;
    const links = [
      ...this.outputs[0].links.map((l) => app.graph.links[l]),
      ...extraLinks
    ];
    let v = this.widgets?.[0].value;
    if (v && this.properties[replacePropertyName]) {
      v = applyTextReplacements(app.graph, v);
    }
    for (const linkInfo of links) {
      const node = this.graph?.getNodeById(linkInfo.target_id);
      const input = node?.inputs[linkInfo.target_slot];
      if (!input) {
        console.warn("Unable to resolve node or input for link", linkInfo);
        continue;
      }
      const widgetName = input.widget?.name;
      if (!widgetName) {
        console.warn("Invalid widget or widget name", input.widget);
        continue;
      }
      const widget = node.widgets?.find((w) => w.name === widgetName);
      if (!widget) {
        console.warn(
          `Unable to find widget "${widgetName}" on node [${node.id}]`
        );
        continue;
      }
      widget.value = v;
      widget.callback?.(
        widget.value,
        app.canvas,
        node,
        app.canvas.graph_mouse,
        {}
      );
    }
  }
  refreshComboInNode() {
    const widget = this.widgets?.[0];
    if (widget?.type === "combo") {
      widget.options.values = this.outputs[0].widget[GET_CONFIG]()[0];
      if (!widget.options.values.includes(widget.value)) {
        widget.value = widget.options.values[0];
        widget.callback(widget.value);
      }
    }
  }
  onAfterGraphConfigured() {
    if (this.outputs[0].links?.length && !this.widgets?.length) {
      this.#onFirstConnection();
      if (this.widgets && this.widgets_values) {
        for (let i = 0; i < this.widgets_values.length; i++) {
          const w = this.widgets[i];
          if (w) {
            w.value = this.widgets_values[i];
          }
        }
      }
      this.#mergeWidgetConfig();
    }
  }
  onConnectionsChange(_type, _index, connected) {
    if (app.configuringGraph) {
      return;
    }
    const links = this.outputs[0].links;
    if (connected) {
      if (links?.length && !this.widgets?.length) {
        this.#onFirstConnection();
      }
    } else {
      this.#mergeWidgetConfig();
      if (!links?.length) {
        this.onLastDisconnect();
      }
    }
  }
  onConnectOutput(slot, _type, input, target_node, target_slot) {
    if (!input.widget && !(input.type in ComfyWidgets)) {
      return false;
    }
    if (this.outputs[slot].links?.length) {
      const valid = this.#isValidConnection(input);
      if (valid) {
        this.applyToGraph([{ target_id: target_node.id, target_slot }]);
      }
      return valid;
    }
    return true;
  }
  #onFirstConnection(recreating) {
    if (!this.outputs[0].links) {
      this.onLastDisconnect();
      return;
    }
    const linkId = this.outputs[0].links[0];
    const link = this.graph.links[linkId];
    if (!link) return;
    const theirNode = this.graph.getNodeById(link.target_id);
    if (!theirNode || !theirNode.inputs) return;
    const input = theirNode.inputs[link.target_slot];
    if (!input) return;
    let widget;
    if (!input.widget) {
      if (!(input.type in ComfyWidgets)) return;
      widget = { name: input.name, [GET_CONFIG]: () => [input.type, {}] };
    } else {
      widget = input.widget;
    }
    const config = widget[GET_CONFIG]?.();
    if (!config) return;
    const { type } = getWidgetType(config);
    this.outputs[0].type = type;
    this.outputs[0].name = type;
    this.outputs[0].widget = widget;
    this.#createWidget(
      widget[CONFIG] ?? config,
      theirNode,
      widget.name,
      // @ts-expect-error fixme ts strict error
      recreating
    );
  }
  #createWidget(inputData, node, widgetName, recreating) {
    let type = inputData[0];
    if (type instanceof Array) {
      type = "COMBO";
    }
    const [oldWidth, oldHeight] = this.size;
    let widget;
    if (type in ComfyWidgets) {
      widget = (ComfyWidgets[type](this, "value", inputData, app) || {}).widget;
    } else {
      widget = this.addWidget(type, "value", null, () => {
      }, {});
    }
    if (node?.widgets && widget) {
      const theirWidget = node.widgets.find((w) => w.name === widgetName);
      if (theirWidget) {
        widget.value = theirWidget.value;
      }
    }
    if (!inputData?.[1]?.control_after_generate && (widget.type === "number" || widget.type === "combo")) {
      let control_value = this.widgets_values?.[1];
      if (!control_value) {
        control_value = "fixed";
      }
      addValueControlWidgets(
        this,
        widget,
        control_value,
        void 0,
        inputData
      );
      let filter = this.widgets_values?.[2];
      if (filter && this.widgets && this.widgets.length === 3) {
        this.widgets[2].value = filter;
      }
    }
    const controlValues = this.controlValues;
    if (this.widgets && this.lastType === this.widgets[0]?.type && controlValues?.length === this.widgets.length - 1) {
      for (let i = 0; i < controlValues.length; i++) {
        this.widgets[i + 1].value = controlValues[i];
      }
    }
    widget.callback = useChainCallback(widget.callback, () => {
      this.applyToGraph();
    });
    this.setSize([
      Math.max(this.size[0], oldWidth),
      Math.max(this.size[1], oldHeight)
    ]);
    if (!recreating) {
      const sz = this.computeSize();
      if (this.size[0] < sz[0]) {
        this.size[0] = sz[0];
      }
      if (this.size[1] < sz[1]) {
        this.size[1] = sz[1];
      }
      requestAnimationFrame(() => {
        this.onResize?.(this.size);
      });
    }
  }
  recreateWidget() {
    const values = this.widgets?.map((w) => w.value);
    this.#removeWidgets();
    this.#onFirstConnection(true);
    if (values?.length && this.widgets) {
      for (let i = 0; i < this.widgets.length; i++)
        this.widgets[i].value = values[i];
    }
    return this.widgets?.[0];
  }
  #mergeWidgetConfig() {
    const output = this.outputs[0];
    const links = output.links ?? [];
    const hasConfig = !!output.widget?.[CONFIG];
    if (hasConfig) {
      delete output.widget?.[CONFIG];
    }
    if (links?.length < 2 && hasConfig) {
      if (links.length) {
        this.recreateWidget();
      }
      return;
    }
    const config1 = output.widget?.[GET_CONFIG]?.();
    if (!config1) return;
    const isNumber = config1[0] === "INT" || config1[0] === "FLOAT";
    if (!isNumber) return;
    for (const linkId of links) {
      const link = app.graph.links[linkId];
      if (!link) continue;
      const theirNode = app.graph.getNodeById(link.target_id);
      if (!theirNode) continue;
      const theirInput = theirNode.inputs[link.target_slot];
      this.#isValidConnection(theirInput, hasConfig);
    }
  }
  #isValidConnection(input, forceUpdate) {
    const output = this.outputs?.[0];
    const config2 = input.widget?.[GET_CONFIG]?.();
    if (!config2) return false;
    return !!mergeIfValid.call(
      this,
      output,
      config2,
      forceUpdate,
      this.recreateWidget
    );
  }
  #removeWidgets() {
    if (this.widgets) {
      for (const w of this.widgets) {
        if (w.onRemove) {
          w.onRemove();
        }
      }
      this.controlValues = [];
      this.lastType = this.widgets[0]?.type;
      for (let i = 1; i < this.widgets.length; i++) {
        this.controlValues.push(this.widgets[i].value);
      }
      setTimeout(() => {
        delete this.lastType;
        delete this.controlValues;
      }, 15);
      this.widgets.length = 0;
    }
  }
  onLastDisconnect() {
    this.outputs[0].type = "*";
    this.outputs[0].name = "connect to widget input";
    delete this.outputs[0].widget;
    this.#removeWidgets();
  }
}
function getWidgetConfig(slot) {
  return slot.widget?.[CONFIG] ?? slot.widget?.[GET_CONFIG]?.() ?? [
    "*",
    {}
  ];
}
__name(getWidgetConfig, "getWidgetConfig");
function getConfig(widgetName) {
  const { nodeData } = this.constructor;
  return nodeData?.input?.required?.[widgetName] ?? nodeData?.input?.optional?.[widgetName];
}
__name(getConfig, "getConfig");
function convertToInput(node, widget) {
  console.warn(
    "Please remove call to convertToInput. Widget to socket conversion is no longer necessary, as they co-exist now."
  );
  return node.inputs.find((slot) => slot.widget?.name === widget.name);
}
__name(convertToInput, "convertToInput");
function getWidgetType(config) {
  let type = config[0];
  if (type instanceof Array) {
    type = "COMBO";
  }
  return { type };
}
__name(getWidgetType, "getWidgetType");
function setWidgetConfig(slot, config) {
  if (!slot.widget) return;
  if (config) {
    slot.widget[GET_CONFIG] = () => config;
  } else {
    delete slot.widget;
  }
  if ("link" in slot) {
    const link = app.graph.links[slot.link ?? -1];
    if (link) {
      const originNode = app.graph.getNodeById(link.origin_id);
      if (originNode && isPrimitiveNode(originNode)) {
        if (config) {
          originNode.recreateWidget();
        } else if (!app.configuringGraph) {
          originNode.disconnectOutput(0);
          originNode.onLastDisconnect();
        }
      }
    }
  }
}
__name(setWidgetConfig, "setWidgetConfig");
function mergeIfValid(output, config2, forceUpdate, recreateWidget, config1) {
  if (!config1) {
    config1 = getWidgetConfig(output);
  }
  const customSpec = mergeInputSpec(config1, config2);
  if (customSpec || forceUpdate) {
    if (customSpec) {
      output.widget[CONFIG] = customSpec;
    }
    const widget = recreateWidget?.call(this);
    if (widget) {
      const min = widget.options.min;
      const max = widget.options.max;
      if (min != null && widget.value < min) widget.value = min;
      if (max != null && widget.value > max) widget.value = max;
      widget.callback(widget.value);
    }
  }
  return { customConfig: customSpec?.[1] ?? {} };
}
__name(mergeIfValid, "mergeIfValid");
app.registerExtension({
  name: "Comfy.WidgetInputs",
  async beforeRegisterNodeDef(nodeType, _nodeData, app2) {
    nodeType.prototype.convertWidgetToInput = function() {
      console.warn(
        "Please remove call to convertWidgetToInput. Widget to socket conversion is no longer necessary, as they co-exist now."
      );
      return false;
    };
    nodeType.prototype.onGraphConfigured = useChainCallback(
      nodeType.prototype.onGraphConfigured,
      function() {
        if (!this.inputs) return;
        this.widgets ??= [];
        for (const input of this.inputs) {
          if (input.widget) {
            const name = input.widget.name;
            if (!input.widget[GET_CONFIG]) {
              input.widget[GET_CONFIG] = () => getConfig.call(this, name);
            }
            const w = this.widgets?.find((w2) => w2.name === name);
            if (!w) {
              this.removeInput(this.inputs.findIndex((i) => i === input));
            }
          }
        }
      }
    );
    nodeType.prototype.onConfigure = useChainCallback(
      nodeType.prototype.onConfigure,
      function() {
        if (!app2.configuringGraph && this.inputs) {
          for (const input of this.inputs) {
            if (input.widget && !input.widget[GET_CONFIG]) {
              const name = input.widget.name;
              input.widget[GET_CONFIG] = () => getConfig.call(this, name);
            }
          }
        }
      }
    );
    function isNodeAtPos(pos) {
      for (const n of app2.graph.nodes) {
        if (n.pos[0] === pos[0] && n.pos[1] === pos[1]) {
          return true;
        }
      }
      return false;
    }
    __name(isNodeAtPos, "isNodeAtPos");
    const origOnInputDblClick = nodeType.prototype.onInputDblClick;
    nodeType.prototype.onInputDblClick = function(...[slot, ...args]) {
      const r = origOnInputDblClick?.apply(this, [slot, ...args]);
      const input = this.inputs[slot];
      if (!input.widget) {
        if (!(input.type in ComfyWidgets) && !(input.widget?.[GET_CONFIG]?.()?.[0] instanceof Array)) {
          return r;
        }
      }
      const node = LiteGraph.createNode("PrimitiveNode");
      if (!node) return r;
      this.graph?.add(node);
      const pos = [
        this.pos[0] - node.size[0] - 30,
        this.pos[1]
      ];
      while (isNodeAtPos(pos)) {
        pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
      }
      node.pos = pos;
      node.connect(0, this, slot);
      node.title = input.name;
      return r;
    };
  },
  registerCustomNodes() {
    LiteGraph.registerNodeType(
      "PrimitiveNode",
      Object.assign(PrimitiveNode, {
        title: "Primitive"
      })
    );
    PrimitiveNode.category = "utils";
  }
});
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.widgetInputs = window.comfyAPI.widgetInputs || {};
window.comfyAPI.widgetInputs.PrimitiveNode = PrimitiveNode;
window.comfyAPI.widgetInputs.getWidgetConfig = getWidgetConfig;
window.comfyAPI.widgetInputs.convertToInput = convertToInput;
window.comfyAPI.widgetInputs.setWidgetConfig = setWidgetConfig;
window.comfyAPI.widgetInputs.mergeIfValid = mergeIfValid;
const Workflow = {
  InUse: {
    Free: 0,
    Registered: 1,
    InWorkflow: 2
  },
  // @ts-expect-error fixme ts strict error
  isInUseGroupNode(name) {
    const id2 = `${PREFIX}${SEPARATOR}${name}`;
    if (app.graph.extra?.groupNodes?.[name]) {
      if (app.graph.nodes.find((n) => n.type === id2)) {
        return Workflow.InUse.InWorkflow;
      } else {
        return Workflow.InUse.Registered;
      }
    }
    return Workflow.InUse.Free;
  },
  storeGroupNode(name, data) {
    let extra = app.graph.extra;
    if (!extra) app.graph.extra = extra = {};
    let groupNodes = extra.groupNodes;
    if (!groupNodes) extra.groupNodes = groupNodes = {};
    groupNodes[name] = data;
  }
};
class GroupNodeBuilder {
  static {
    __name(this, "GroupNodeBuilder");
  }
  nodes;
  // @ts-expect-error fixme ts strict error
  nodeData;
  constructor(nodes) {
    this.nodes = nodes;
  }
  async build() {
    const name = await this.getName();
    if (!name) return;
    this.sortNodes();
    this.nodeData = this.getNodeData();
    Workflow.storeGroupNode(name, this.nodeData);
    return { name, nodeData: this.nodeData };
  }
  async getName() {
    const name = await useDialogService().prompt({
      title: t("groupNode.create"),
      message: t("groupNode.enterName"),
      defaultValue: ""
    });
    if (!name) return;
    const used = Workflow.isInUseGroupNode(name);
    switch (used) {
      case Workflow.InUse.InWorkflow:
        useToastStore().addAlert(
          "An in use group node with this name already exists embedded in this workflow, please remove any instances or use a new name."
        );
        return;
      case Workflow.InUse.Registered:
        if (!confirm(
          "A group node with this name already exists embedded in this workflow, are you sure you want to overwrite it?"
        )) {
          return;
        }
        break;
    }
    return name;
  }
  sortNodes() {
    const nodesInOrder = app.graph.computeExecutionOrder(false);
    this.nodes = this.nodes.map((node) => ({ index: nodesInOrder.indexOf(node), node })).sort((a, b) => a.index - b.index || a.node.id - b.node.id).map(({ node }) => node);
  }
  getNodeData() {
    const storeLinkTypes = /* @__PURE__ */ __name((config) => {
      for (const link of config.links) {
        const origin = app.graph.getNodeById(link[4]);
        const type = origin.outputs[link[1]].type;
        link.push(type);
      }
    }, "storeLinkTypes");
    const storeExternalLinks = /* @__PURE__ */ __name((config) => {
      config.external = [];
      for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        if (!node.outputs?.length) continue;
        for (let slot = 0; slot < node.outputs.length; slot++) {
          let hasExternal = false;
          const output = node.outputs[slot];
          let type = output.type;
          if (!output.links?.length) continue;
          for (const l of output.links) {
            const link = app.graph.links[l];
            if (!link) continue;
            if (type === "*") type = link.type;
            if (!app.canvas.selected_nodes[link.target_id]) {
              hasExternal = true;
              break;
            }
          }
          if (hasExternal) {
            config.external.push([i, slot, type]);
          }
        }
      }
    }, "storeExternalLinks");
    try {
      const serialised = serialise(this.nodes, app.canvas?.graph);
      const config = JSON.parse(serialised);
      storeLinkTypes(config);
      storeExternalLinks(config);
      return config;
    } finally {
    }
  }
}
class GroupNodeConfig {
  static {
    __name(this, "GroupNodeConfig");
  }
  name;
  nodeData;
  inputCount;
  oldToNewOutputMap;
  newToOldOutputMap;
  oldToNewInputMap;
  oldToNewWidgetMap;
  newToOldWidgetMap;
  primitiveDefs;
  widgetToPrimitive;
  primitiveToWidget;
  nodeInputs;
  outputVisibility;
  // @ts-expect-error fixme ts strict error
  nodeDef;
  // @ts-expect-error fixme ts strict error
  inputs;
  // @ts-expect-error fixme ts strict error
  linksFrom;
  // @ts-expect-error fixme ts strict error
  linksTo;
  // @ts-expect-error fixme ts strict error
  externalFrom;
  // @ts-expect-error fixme ts strict error
  constructor(name, nodeData) {
    this.name = name;
    this.nodeData = nodeData;
    this.getLinks();
    this.inputCount = 0;
    this.oldToNewOutputMap = {};
    this.newToOldOutputMap = {};
    this.oldToNewInputMap = {};
    this.oldToNewWidgetMap = {};
    this.newToOldWidgetMap = {};
    this.primitiveDefs = {};
    this.widgetToPrimitive = {};
    this.primitiveToWidget = {};
    this.nodeInputs = {};
    this.outputVisibility = [];
  }
  async registerType(source = PREFIX) {
    this.nodeDef = {
      output: [],
      output_name: [],
      output_is_list: [],
      // @ts-expect-error Unused, doesn't exist
      output_is_hidden: [],
      name: source + SEPARATOR + this.name,
      display_name: this.name,
      category: "group nodes" + (SEPARATOR + source),
      input: { required: {} },
      description: `Group node combining ${this.nodeData.nodes.map((n) => n.type).join(", ")}`,
      python_module: "custom_nodes." + this.name,
      [GROUP]: this
    };
    this.inputs = [];
    const seenInputs = {};
    const seenOutputs = {};
    for (let i = 0; i < this.nodeData.nodes.length; i++) {
      const node = this.nodeData.nodes[i];
      node.index = i;
      this.processNode(node, seenInputs, seenOutputs);
    }
    for (const p of this.#convertedToProcess) {
      p();
    }
    this.#convertedToProcess = null;
    await app.registerNodeDef(`${PREFIX}${SEPARATOR}` + this.name, this.nodeDef);
    useNodeDefStore().addNodeDef(this.nodeDef);
  }
  getLinks() {
    this.linksFrom = {};
    this.linksTo = {};
    this.externalFrom = {};
    for (const l of this.nodeData.links) {
      const [sourceNodeId, sourceNodeSlot, targetNodeId, targetNodeSlot] = l;
      if (sourceNodeId == null) continue;
      if (!this.linksFrom[sourceNodeId]) {
        this.linksFrom[sourceNodeId] = {};
      }
      if (!this.linksFrom[sourceNodeId][sourceNodeSlot]) {
        this.linksFrom[sourceNodeId][sourceNodeSlot] = [];
      }
      this.linksFrom[sourceNodeId][sourceNodeSlot].push(l);
      if (!this.linksTo[targetNodeId]) {
        this.linksTo[targetNodeId] = {};
      }
      this.linksTo[targetNodeId][targetNodeSlot] = l;
    }
    if (this.nodeData.external) {
      for (const ext2 of this.nodeData.external) {
        if (!this.externalFrom[ext2[0]]) {
          this.externalFrom[ext2[0]] = { [ext2[1]]: ext2[2] };
        } else {
          this.externalFrom[ext2[0]][ext2[1]] = ext2[2];
        }
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  processNode(node, seenInputs, seenOutputs) {
    const def = this.getNodeDef(node);
    if (!def) return;
    const inputs = { ...def.input?.required, ...def.input?.optional };
    this.inputs.push(this.processNodeInputs(node, seenInputs, inputs));
    if (def.output?.length) this.processNodeOutputs(node, seenOutputs, def);
  }
  // @ts-expect-error fixme ts strict error
  getNodeDef(node) {
    const def = globalDefs[node.type];
    if (def) return def;
    const linksFrom = this.linksFrom[node.index];
    if (node.type === "PrimitiveNode") {
      if (!linksFrom) return;
      let type = linksFrom["0"][0][5];
      if (type === "COMBO") {
        const source = node.outputs[0].widget.name;
        const fromTypeName = this.nodeData.nodes[linksFrom["0"][0][2]].type;
        const fromType = globalDefs[fromTypeName];
        const input = fromType.input.required[source] ?? fromType.input.optional[source];
        type = input[0];
      }
      const def2 = this.primitiveDefs[node.index] = {
        input: {
          required: {
            value: [type, {}]
          }
        },
        output: [type],
        output_name: [],
        output_is_list: []
      };
      return def2;
    } else if (node.type === "Reroute") {
      const linksTo = this.linksTo[node.index];
      if (linksTo && linksFrom && !this.externalFrom[node.index]?.[0]) {
        return null;
      }
      let config = {};
      let rerouteType = "*";
      if (linksFrom) {
        for (const [, , id2, slot] of linksFrom["0"]) {
          const node2 = this.nodeData.nodes[id2];
          const input = node2.inputs[slot];
          if (rerouteType === "*") {
            rerouteType = input.type;
          }
          if (input.widget) {
            const targetDef = globalDefs[node2.type];
            const targetWidget = targetDef.input.required[input.widget.name] ?? targetDef.input.optional[input.widget.name];
            const widget = [targetWidget[0], config];
            const res = mergeIfValid(
              {
                // @ts-expect-error fixme ts strict error
                widget
              },
              targetWidget,
              false,
              null,
              widget
            );
            config = res?.customConfig ?? config;
          }
        }
      } else if (linksTo) {
        const [id2, slot] = linksTo["0"];
        rerouteType = this.nodeData.nodes[id2].outputs[slot].type;
      } else {
        for (const l of this.nodeData.links) {
          if (l[2] === node.index) {
            rerouteType = l[5];
            break;
          }
        }
        if (rerouteType === "*") {
          const t2 = this.externalFrom[node.index]?.[0];
          if (t2) {
            rerouteType = t2;
          }
        }
      }
      config.forceInput = true;
      return {
        input: {
          required: {
            [rerouteType]: [rerouteType, config]
          }
        },
        output: [rerouteType],
        output_name: [],
        output_is_list: []
      };
    }
    console.warn(
      "Skipping virtual node " + node.type + " when building group node " + this.name
    );
  }
  // @ts-expect-error fixme ts strict error
  getInputConfig(node, inputName, seenInputs, config, extra) {
    const customConfig = this.nodeData.config?.[node.index]?.input?.[inputName];
    let name = customConfig?.name ?? // @ts-expect-error fixme ts strict error
    node.inputs?.find((inp) => inp.name === inputName)?.label ?? inputName;
    let key = name;
    let prefix = "";
    if (node.type === "PrimitiveNode" && node.title || name in seenInputs) {
      prefix = `${node.title ?? node.type} `;
      key = name = `${prefix}${inputName}`;
      if (name in seenInputs) {
        name = `${prefix}${seenInputs[name]} ${inputName}`;
      }
    }
    seenInputs[key] = (seenInputs[key] ?? 1) + 1;
    if (inputName === "seed" || inputName === "noise_seed") {
      if (!extra) extra = {};
      extra.control_after_generate = `${prefix}control_after_generate`;
    }
    if (config[0] === "IMAGEUPLOAD") {
      if (!extra) extra = {};
      extra.widget = // @ts-expect-error fixme ts strict error
      this.oldToNewWidgetMap[node.index]?.[config[1]?.widget ?? "image"] ?? "image";
    }
    if (extra) {
      config = [config[0], { ...config[1], ...extra }];
    }
    return { name, config, customConfig };
  }
  // @ts-expect-error fixme ts strict error
  processWidgetInputs(inputs, node, inputNames, seenInputs) {
    const slots = [];
    const converted = /* @__PURE__ */ new Map();
    const widgetMap = this.oldToNewWidgetMap[node.index] = {};
    for (const inputName of inputNames) {
      if (useWidgetStore().inputIsWidget(inputs[inputName])) {
        const convertedIndex = node.inputs?.findIndex(
          // @ts-expect-error fixme ts strict error
          (inp) => inp.name === inputName && inp.widget?.name === inputName
        );
        if (convertedIndex > -1) {
          converted.set(convertedIndex, inputName);
          widgetMap[inputName] = null;
        } else {
          const { name, config } = this.getInputConfig(
            node,
            inputName,
            seenInputs,
            inputs[inputName]
          );
          this.nodeDef.input.required[name] = config;
          widgetMap[inputName] = name;
          this.newToOldWidgetMap[name] = { node, inputName };
        }
      } else {
        slots.push(inputName);
      }
    }
    return { converted, slots };
  }
  // @ts-expect-error fixme ts strict error
  checkPrimitiveConnection(link, inputName, inputs) {
    const sourceNode = this.nodeData.nodes[link[0]];
    if (sourceNode.type === "PrimitiveNode") {
      const [sourceNodeId, _, targetNodeId, __] = link;
      const primitiveDef = this.primitiveDefs[sourceNodeId];
      const targetWidget = inputs[inputName];
      const primitiveConfig = primitiveDef.input.required.value;
      const output = { widget: primitiveConfig };
      const config = mergeIfValid(
        // @ts-expect-error invalid slot type
        output,
        targetWidget,
        false,
        null,
        primitiveConfig
      );
      primitiveConfig[1] = config?.customConfig ?? inputs[inputName][1] ? { ...inputs[inputName][1] } : {};
      let name = this.oldToNewWidgetMap[sourceNodeId]["value"];
      name = name.substr(0, name.length - 6);
      primitiveConfig[1].control_after_generate = true;
      primitiveConfig[1].control_prefix = name;
      let toPrimitive = this.widgetToPrimitive[targetNodeId];
      if (!toPrimitive) {
        toPrimitive = this.widgetToPrimitive[targetNodeId] = {};
      }
      if (toPrimitive[inputName]) {
        toPrimitive[inputName].push(sourceNodeId);
      }
      toPrimitive[inputName] = sourceNodeId;
      let toWidget = this.primitiveToWidget[sourceNodeId];
      if (!toWidget) {
        toWidget = this.primitiveToWidget[sourceNodeId] = [];
      }
      toWidget.push({ nodeId: targetNodeId, inputName });
    }
  }
  // @ts-expect-error fixme ts strict error
  processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs) {
    this.nodeInputs[node.index] = {};
    for (let i = 0; i < slots.length; i++) {
      const inputName = slots[i];
      if (linksTo[i]) {
        this.checkPrimitiveConnection(linksTo[i], inputName, inputs);
        continue;
      }
      const { name, config, customConfig } = this.getInputConfig(
        node,
        inputName,
        seenInputs,
        inputs[inputName]
      );
      this.nodeInputs[node.index][inputName] = name;
      if (customConfig?.visible === false) continue;
      this.nodeDef.input.required[name] = config;
      inputMap[i] = this.inputCount++;
    }
  }
  processConvertedWidgets(inputs, node, slots, converted, linksTo, inputMap, seenInputs) {
    const convertedSlots = [...converted.keys()].sort().map((k) => converted.get(k));
    for (let i = 0; i < convertedSlots.length; i++) {
      const inputName = convertedSlots[i];
      if (linksTo[slots.length + i]) {
        this.checkPrimitiveConnection(
          linksTo[slots.length + i],
          inputName,
          inputs
        );
        continue;
      }
      const { name, config } = this.getInputConfig(
        node,
        inputName,
        seenInputs,
        inputs[inputName],
        {
          defaultInput: true
        }
      );
      this.nodeDef.input.required[name] = config;
      this.newToOldWidgetMap[name] = { node, inputName };
      if (!this.oldToNewWidgetMap[node.index]) {
        this.oldToNewWidgetMap[node.index] = {};
      }
      this.oldToNewWidgetMap[node.index][inputName] = name;
      inputMap[slots.length + i] = this.inputCount++;
    }
  }
  #convertedToProcess = [];
  // @ts-expect-error fixme ts strict error
  processNodeInputs(node, seenInputs, inputs) {
    const inputMapping = [];
    const inputNames = Object.keys(inputs);
    if (!inputNames.length) return;
    const { converted, slots } = this.processWidgetInputs(
      inputs,
      node,
      inputNames,
      seenInputs
    );
    const linksTo = this.linksTo[node.index] ?? {};
    const inputMap = this.oldToNewInputMap[node.index] = {};
    this.processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs);
    this.#convertedToProcess.push(
      () => this.processConvertedWidgets(
        inputs,
        node,
        slots,
        converted,
        linksTo,
        inputMap,
        seenInputs
      )
    );
    return inputMapping;
  }
  // @ts-expect-error fixme ts strict error
  processNodeOutputs(node, seenOutputs, def) {
    const oldToNew = this.oldToNewOutputMap[node.index] = {};
    for (let outputId = 0; outputId < def.output.length; outputId++) {
      const linksFrom = this.linksFrom[node.index];
      const hasLink = (
        // @ts-expect-error fixme ts strict error
        linksFrom?.[outputId] && !this.externalFrom[node.index]?.[outputId]
      );
      const customConfig = this.nodeData.config?.[node.index]?.output?.[outputId];
      const visible = customConfig?.visible ?? !hasLink;
      this.outputVisibility.push(visible);
      if (!visible) {
        continue;
      }
      oldToNew[outputId] = this.nodeDef.output.length;
      this.newToOldOutputMap[this.nodeDef.output.length] = {
        node,
        slot: outputId
      };
      this.nodeDef.output.push(def.output[outputId]);
      this.nodeDef.output_is_list.push(def.output_is_list[outputId]);
      let label = customConfig?.name;
      if (!label) {
        label = def.output_name?.[outputId] ?? def.output[outputId];
        const output = node.outputs.find((o) => o.name === label);
        if (output?.label) {
          label = output.label;
        }
      }
      let name = label;
      if (name in seenOutputs) {
        const prefix = `${node.title ?? node.type} `;
        name = `${prefix}${label}`;
        if (name in seenOutputs) {
          name = `${prefix}${node.index} ${label}`;
        }
      }
      seenOutputs[name] = 1;
      this.nodeDef.output_name.push(name);
    }
  }
  // @ts-expect-error fixme ts strict error
  static async registerFromWorkflow(groupNodes, missingNodeTypes) {
    for (const g in groupNodes) {
      const groupData = groupNodes[g];
      let hasMissing = false;
      for (const n of groupData.nodes) {
        if (!(n.type in LiteGraph.registered_node_types)) {
          missingNodeTypes.push({
            type: n.type,
            hint: ` (In group node '${PREFIX}${SEPARATOR}${g}')`
          });
          missingNodeTypes.push({
            type: `${PREFIX}${SEPARATOR}` + g,
            action: {
              text: "Remove from workflow",
              // @ts-expect-error fixme ts strict error
              callback: /* @__PURE__ */ __name((e) => {
                delete groupNodes[g];
                e.target.textContent = "Removed";
                e.target.style.pointerEvents = "none";
                e.target.style.opacity = 0.7;
              }, "callback")
            }
          });
          hasMissing = true;
        }
      }
      if (hasMissing) continue;
      const config = new GroupNodeConfig(g, groupData);
      await config.registerType();
    }
  }
}
class GroupNodeHandler {
  static {
    __name(this, "GroupNodeHandler");
  }
  node;
  groupData;
  innerNodes;
  constructor(node) {
    this.node = node;
    this.groupData = node.constructor?.nodeData?.[GROUP];
    this.node.setInnerNodes = (innerNodes) => {
      this.innerNodes = innerNodes;
      for (let innerNodeIndex = 0; innerNodeIndex < this.innerNodes.length; innerNodeIndex++) {
        const innerNode = this.innerNodes[innerNodeIndex];
        innerNode.graph ??= this.node.graph;
        for (const w of innerNode.widgets ?? []) {
          if (w.type === "converted-widget") {
            w.serializeValue = w.origSerializeValue;
          }
        }
        innerNode.index = innerNodeIndex;
        innerNode.getInputNode = (slot) => {
          const externalSlot = this.groupData.oldToNewInputMap[innerNode.index]?.[slot];
          if (externalSlot != null) {
            return this.node.getInputNode(externalSlot);
          }
          const innerLink = this.groupData.linksTo[innerNode.index]?.[slot];
          if (!innerLink) return null;
          const inputNode = innerNodes[innerLink[0]];
          if (inputNode.type === "PrimitiveNode") return null;
          return inputNode;
        };
        innerNode.getInputLink = (slot) => {
          const externalSlot = this.groupData.oldToNewInputMap[innerNode.index]?.[slot];
          if (externalSlot != null) {
            const linkId = this.node.inputs[externalSlot].link;
            let link2 = app.graph.links[linkId];
            link2 = {
              ...link2,
              target_id: innerNode.id,
              target_slot: +slot
            };
            return link2;
          }
          let link = this.groupData.linksTo[innerNode.index]?.[slot];
          if (!link) return null;
          link = {
            origin_id: innerNodes[link[0]].id,
            origin_slot: link[1],
            target_id: innerNode.id,
            target_slot: +slot
          };
          return link;
        };
      }
    };
    this.node.updateLink = (link) => {
      link = { ...link };
      const output = this.groupData.newToOldOutputMap[link.origin_slot];
      let innerNode = this.innerNodes[output.node.index];
      let l;
      while (innerNode?.type === "Reroute") {
        l = innerNode.getInputLink(0);
        innerNode = innerNode.getInputNode(0);
      }
      if (!innerNode) {
        return null;
      }
      if (l && GroupNodeHandler.isGroupNode(innerNode)) {
        return innerNode.updateLink(l);
      }
      link.origin_id = innerNode.id;
      link.origin_slot = l?.origin_slot ?? output.slot;
      return link;
    };
    this.node.getInnerNodes = (computedNodeDtos, subgraphNodePath = [], nodes = [], visited = /* @__PURE__ */ new Set()) => {
      if (visited.has(this.node))
        throw new Error("RecursionError: while flattening subgraph");
      visited.add(this.node);
      if (!this.innerNodes) {
        this.node.setInnerNodes(
          // @ts-expect-error fixme ts strict error
          this.groupData.nodeData.nodes.map((n, i) => {
            const innerNode = LiteGraph.createNode(n.type);
            innerNode.configure(n);
            innerNode.id = `${this.node.id}:${i}`;
            innerNode.graph = this.node.graph;
            return innerNode;
          })
        );
      }
      this.updateInnerWidgets();
      const subgraphInstanceIdPath = [...subgraphNodePath, this.node.id];
      const subgraphNode = this.node.graph?.getNodeById(
        subgraphNodePath.at(-1)
      ) ?? void 0;
      for (const node2 of this.innerNodes) {
        node2.graph ??= this.node.graph;
        const currentId = String(node2.id);
        node2.id = currentId.split(":").at(-1);
        const aVeryRealNode = new ExecutableGroupNodeChildDTO(
          node2,
          subgraphInstanceIdPath,
          computedNodeDtos,
          subgraphNode
        );
        node2.id = currentId;
        aVeryRealNode.groupNodeHandler = this;
        nodes.push(aVeryRealNode);
      }
      return nodes;
    };
    this.node.recreate = async () => {
      const id2 = this.node.id;
      const sz = this.node.size;
      const nodes = this.node.convertToNodes();
      const groupNode = LiteGraph.createNode(this.node.type);
      groupNode.id = id2;
      groupNode.setInnerNodes(nodes);
      groupNode[GROUP].populateWidgets();
      app.graph.add(groupNode);
      groupNode.setSize([
        // @ts-expect-error fixme ts strict error
        Math.max(groupNode.size[0], sz[0]),
        // @ts-expect-error fixme ts strict error
        Math.max(groupNode.size[1], sz[1])
      ]);
      const builder = new GroupNodeBuilder(nodes);
      const nodeData = builder.getNodeData();
      groupNode[GROUP].groupData.nodeData.links = nodeData.links;
      groupNode[GROUP].replaceNodes(nodes);
      return groupNode;
    };
    this.node.convertToNodes = () => {
      const addInnerNodes = /* @__PURE__ */ __name(() => {
        const c = { ...this.groupData.nodeData };
        c.nodes = [...c.nodes];
        const innerNodes = this.node.getInnerNodes();
        let ids = [];
        for (let i = 0; i < c.nodes.length; i++) {
          let id2 = innerNodes?.[i]?.id;
          if (id2 == null || isNaN(id2)) {
            id2 = void 0;
          } else {
            ids.push(id2);
          }
          c.nodes[i] = { ...c.nodes[i], id: id2 };
        }
        deserialiseAndCreate(JSON.stringify(c), app.canvas);
        const [x, y] = this.node.pos;
        let top;
        let left;
        const selectedIds = ids.length ? ids : Object.keys(app.canvas.selected_nodes);
        const newNodes = [];
        for (let i = 0; i < selectedIds.length; i++) {
          const id2 = selectedIds[i];
          const newNode = app.graph.getNodeById(id2);
          const innerNode = innerNodes[i];
          newNodes.push(newNode);
          if (left == null || newNode.pos[0] < left) {
            left = newNode.pos[0];
          }
          if (top == null || newNode.pos[1] < top) {
            top = newNode.pos[1];
          }
          if (!newNode.widgets) continue;
          const map = this.groupData.oldToNewWidgetMap[innerNode.index];
          if (map) {
            const widgets = Object.keys(map);
            for (const oldName of widgets) {
              const newName = map[oldName];
              if (!newName) continue;
              const widgetIndex = this.node.widgets.findIndex(
                (w) => w.name === newName
              );
              if (widgetIndex === -1) continue;
              if (innerNode.type === "PrimitiveNode") {
                for (let i2 = 0; i2 < newNode.widgets.length; i2++) {
                  newNode.widgets[i2].value = // @ts-expect-error fixme ts strict error
                  this.node.widgets[widgetIndex + i2].value;
                }
              } else {
                const outerWidget = this.node.widgets[widgetIndex];
                const newWidget = newNode.widgets.find(
                  (w) => w.name === oldName
                );
                if (!newWidget) continue;
                newWidget.value = outerWidget.value;
                for (let w = 0; w < outerWidget.linkedWidgets?.length; w++) {
                  newWidget.linkedWidgets[w].value = // @ts-expect-error fixme ts strict error
                  outerWidget.linkedWidgets[w].value;
                }
              }
            }
          }
        }
        for (const newNode of newNodes) {
          newNode.pos[0] -= left - x;
          newNode.pos[1] -= top - y;
        }
        return { newNodes, selectedIds };
      }, "addInnerNodes");
      const reconnectInputs = /* @__PURE__ */ __name((selectedIds) => {
        for (const innerNodeIndex in this.groupData.oldToNewInputMap) {
          const id2 = selectedIds[innerNodeIndex];
          const newNode = app.graph.getNodeById(id2);
          const map = this.groupData.oldToNewInputMap[innerNodeIndex];
          for (const innerInputId in map) {
            const groupSlotId = map[innerInputId];
            if (groupSlotId == null) continue;
            const slot = node.inputs[groupSlotId];
            if (slot.link == null) continue;
            const link = app.graph.links[slot.link];
            if (!link) continue;
            const originNode = app.graph.getNodeById(link.origin_id);
            originNode.connect(link.origin_slot, newNode, +innerInputId);
          }
        }
      }, "reconnectInputs");
      const reconnectOutputs = /* @__PURE__ */ __name((selectedIds) => {
        for (let groupOutputId = 0; groupOutputId < node.outputs?.length; groupOutputId++) {
          const output = node.outputs[groupOutputId];
          if (!output.links) continue;
          const links = [...output.links];
          for (const l of links) {
            const slot = this.groupData.newToOldOutputMap[groupOutputId];
            const link = app.graph.links[l];
            const targetNode = app.graph.getNodeById(link.target_id);
            const newNode = app.graph.getNodeById(selectedIds[slot.node.index]);
            newNode.connect(slot.slot, targetNode, link.target_slot);
          }
        }
      }, "reconnectOutputs");
      app.canvas.emitBeforeChange();
      try {
        const { newNodes, selectedIds } = addInnerNodes();
        reconnectInputs(selectedIds);
        reconnectOutputs(selectedIds);
        app.graph.remove(this.node);
        return newNodes;
      } finally {
        app.canvas.emitAfterChange();
      }
    };
    const getExtraMenuOptions = this.node.getExtraMenuOptions;
    this.node.getExtraMenuOptions = function(_, options) {
      getExtraMenuOptions?.apply(this, arguments);
      let optionIndex = options.findIndex((o) => o?.content === "Outputs");
      if (optionIndex === -1) optionIndex = options.length;
      else optionIndex++;
      options.splice(
        optionIndex,
        0,
        null,
        {
          content: "Convert to nodes",
          // @ts-expect-error
          callback: /* @__PURE__ */ __name(() => {
            return this.convertToNodes();
          }, "callback")
        },
        {
          content: "Manage Group Node",
          callback: /* @__PURE__ */ __name(() => manageGroupNodes(this.type), "callback")
        }
      );
    };
    const onDrawTitleBox = this.node.onDrawTitleBox;
    this.node.onDrawTitleBox = function(ctx, height) {
      onDrawTitleBox?.apply(this, arguments);
      const fill = ctx.fillStyle;
      ctx.beginPath();
      ctx.rect(11, -height + 11, 2, 2);
      ctx.rect(14, -height + 11, 2, 2);
      ctx.rect(17, -height + 11, 2, 2);
      ctx.rect(11, -height + 14, 2, 2);
      ctx.rect(14, -height + 14, 2, 2);
      ctx.rect(17, -height + 14, 2, 2);
      ctx.rect(11, -height + 17, 2, 2);
      ctx.rect(14, -height + 17, 2, 2);
      ctx.rect(17, -height + 17, 2, 2);
      ctx.fillStyle = this.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
      ctx.fill();
      ctx.fillStyle = fill;
    };
    const onDrawForeground = node.onDrawForeground;
    const groupData = this.groupData.nodeData;
    node.onDrawForeground = function(ctx) {
      onDrawForeground?.apply?.(this, arguments);
      const progressState = useExecutionStore().nodeProgressStates[this.id];
      if (progressState && progressState.state === "running" && this.runningInternalNodeId !== null) {
        const n = groupData.nodes[this.runningInternalNodeId];
        if (!n) return;
        const message = `Running ${n.title || n.type} (${this.runningInternalNodeId}/${groupData.nodes.length})`;
        ctx.save();
        ctx.font = "12px sans-serif";
        const sz = ctx.measureText(message);
        ctx.fillStyle = node.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
        ctx.beginPath();
        ctx.roundRect(
          0,
          -LiteGraph.NODE_TITLE_HEIGHT - 20,
          sz.width + 12,
          20,
          5
        );
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.fillText(message, 6, -LiteGraph.NODE_TITLE_HEIGHT - 6);
        ctx.restore();
      }
    };
    const onExecutionStart = this.node.onExecutionStart;
    this.node.onExecutionStart = function() {
      this.resetExecution = true;
      return onExecutionStart?.apply(this, arguments);
    };
    const self = this;
    const onNodeCreated = this.node.onNodeCreated;
    this.node.onNodeCreated = function() {
      if (!this.widgets) {
        return;
      }
      const config = self.groupData.nodeData.config;
      if (config) {
        for (const n in config) {
          const inputs = config[n]?.input;
          for (const w in inputs) {
            if (inputs[w].visible !== false) continue;
            const widgetName = self.groupData.oldToNewWidgetMap[n][w];
            const widget = this.widgets.find((w2) => w2.name === widgetName);
            if (widget) {
              widget.type = "hidden";
              widget.computeSize = () => [0, -4];
            }
          }
        }
      }
      return onNodeCreated?.apply(this, arguments);
    };
    function handleEvent(type, getId, getEvent) {
      const handler = /* @__PURE__ */ __name(({ detail }) => {
        const id2 = getId(detail);
        if (!id2) return;
        const node2 = app.graph.getNodeById(id2);
        if (node2) return;
        const innerNodeIndex = this.innerNodes?.findIndex((n) => n.id == id2);
        if (innerNodeIndex > -1) {
          this.node.runningInternalNodeId = innerNodeIndex;
          api.dispatchCustomEvent(
            type,
            // @ts-expect-error fixme ts strict error
            getEvent(detail, `${this.node.id}`, this.node)
          );
        }
      }, "handler");
      api.addEventListener(type, handler);
      return handler;
    }
    __name(handleEvent, "handleEvent");
    const executing = handleEvent.call(
      this,
      "executing",
      // @ts-expect-error fixme ts strict error
      (d) => d,
      // @ts-expect-error fixme ts strict error
      (_, id2) => id2
    );
    const executed = handleEvent.call(
      this,
      "executed",
      // @ts-expect-error fixme ts strict error
      (d) => d?.display_node || d?.node,
      // @ts-expect-error fixme ts strict error
      (d, id2, node2) => ({
        ...d,
        node: id2,
        display_node: id2,
        merge: !node2.resetExecution
      })
    );
    const onRemoved = node.onRemoved;
    this.node.onRemoved = function() {
      onRemoved?.apply(this, arguments);
      api.removeEventListener("executing", executing);
      api.removeEventListener("executed", executed);
    };
    this.node.refreshComboInNode = (defs) => {
      for (const widgetName in this.groupData.newToOldWidgetMap) {
        const widget = this.node.widgets.find((w) => w.name === widgetName);
        if (widget?.type === "combo") {
          const old = this.groupData.newToOldWidgetMap[widgetName];
          const def = defs[old.node.type];
          const input = def?.input?.required?.[old.inputName] ?? def?.input?.optional?.[old.inputName];
          if (!input) continue;
          widget.options.values = input[0];
          if (old.inputName !== "image" && // @ts-expect-error Widget values
          !widget.options.values.includes(widget.value)) {
            widget.value = widget.options.values[0];
            widget.callback(widget.value);
          }
        }
      }
    };
  }
  updateInnerWidgets() {
    for (const newWidgetName in this.groupData.newToOldWidgetMap) {
      const newWidget = this.node.widgets.find((w) => w.name === newWidgetName);
      if (!newWidget) continue;
      const newValue = newWidget.value;
      const old = this.groupData.newToOldWidgetMap[newWidgetName];
      let innerNode = this.innerNodes[old.node.index];
      if (innerNode.type === "PrimitiveNode") {
        innerNode.primitiveValue = newValue;
        const primitiveLinked = this.groupData.primitiveToWidget[old.node.index];
        for (const linked of primitiveLinked ?? []) {
          const node = this.innerNodes[linked.nodeId];
          const widget2 = node.widgets.find((w) => w.name === linked.inputName);
          if (widget2) {
            widget2.value = newValue;
          }
        }
        continue;
      } else if (innerNode.type === "Reroute") {
        const rerouteLinks = this.groupData.linksFrom[old.node.index];
        if (rerouteLinks) {
          for (const [_, , targetNodeId, targetSlot] of rerouteLinks["0"]) {
            const node = this.innerNodes[targetNodeId];
            const input = node.inputs[targetSlot];
            if (input.widget) {
              const widget2 = node.widgets?.find(
                // @ts-expect-error fixme ts strict error
                (w) => w.name === input.widget.name
              );
              if (widget2) {
                widget2.value = newValue;
              }
            }
          }
        }
      }
      const widget = innerNode.widgets?.find((w) => w.name === old.inputName);
      if (widget) {
        widget.value = newValue;
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  populatePrimitive(_node, nodeId, oldName) {
    const primitiveId = this.groupData.widgetToPrimitive[nodeId]?.[oldName];
    if (primitiveId == null) return;
    const targetWidgetName = this.groupData.oldToNewWidgetMap[primitiveId]["value"];
    const targetWidgetIndex = this.node.widgets.findIndex(
      (w) => w.name === targetWidgetName
    );
    if (targetWidgetIndex > -1) {
      const primitiveNode = this.innerNodes[primitiveId];
      let len = primitiveNode.widgets.length;
      if (len - 1 !== // @ts-expect-error fixme ts strict error
      this.node.widgets[targetWidgetIndex].linkedWidgets?.length) {
        len = 1;
      }
      for (let i = 0; i < len; i++) {
        this.node.widgets[targetWidgetIndex + i].value = primitiveNode.widgets[i].value;
      }
    }
    return true;
  }
  // @ts-expect-error fixme ts strict error
  populateReroute(node, nodeId, map) {
    if (node.type !== "Reroute") return;
    const link = this.groupData.linksFrom[nodeId]?.[0]?.[0];
    if (!link) return;
    const [, , targetNodeId, targetNodeSlot] = link;
    const targetNode = this.groupData.nodeData.nodes[targetNodeId];
    const inputs = targetNode.inputs;
    const targetWidget = inputs?.[targetNodeSlot]?.widget;
    if (!targetWidget) return;
    const offset = inputs.length - (targetNode.widgets_values?.length ?? 0);
    const v = targetNode.widgets_values?.[targetNodeSlot - offset];
    if (v == null) return;
    const widgetName = Object.values(map)[0];
    const widget = this.node.widgets.find((w) => w.name === widgetName);
    if (widget) {
      widget.value = v;
    }
  }
  populateWidgets() {
    if (!this.node.widgets) return;
    for (let nodeId = 0; nodeId < this.groupData.nodeData.nodes.length; nodeId++) {
      const node = this.groupData.nodeData.nodes[nodeId];
      const map = this.groupData.oldToNewWidgetMap[nodeId] ?? {};
      const widgets = Object.keys(map);
      if (!node.widgets_values?.length) {
        this.populateReroute(node, nodeId, map);
        continue;
      }
      let linkedShift = 0;
      for (let i = 0; i < widgets.length; i++) {
        const oldName = widgets[i];
        const newName = map[oldName];
        const widgetIndex = this.node.widgets.findIndex(
          (w) => w.name === newName
        );
        const mainWidget = this.node.widgets[widgetIndex];
        if (this.populatePrimitive(node, nodeId, oldName) || widgetIndex === -1) {
          const innerWidget = this.innerNodes[nodeId].widgets?.find(
            // @ts-expect-error fixme ts strict error
            (w) => w.name === oldName
          );
          linkedShift += innerWidget?.linkedWidgets?.length ?? 0;
        }
        if (widgetIndex === -1) {
          continue;
        }
        mainWidget.value = node.widgets_values[i + linkedShift];
        for (let w = 0; w < mainWidget.linkedWidgets?.length; w++) {
          this.node.widgets[widgetIndex + w + 1].value = node.widgets_values[i + ++linkedShift];
        }
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  replaceNodes(nodes) {
    let top;
    let left;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (left == null || node.pos[0] < left) {
        left = node.pos[0];
      }
      if (top == null || node.pos[1] < top) {
        top = node.pos[1];
      }
      this.linkOutputs(node, i);
      app.graph.remove(node);
      node.id = `${this.node.id}:${i}`;
    }
    this.linkInputs();
    this.node.pos = [left, top];
  }
  // @ts-expect-error fixme ts strict error
  linkOutputs(originalNode, nodeId) {
    if (!originalNode.outputs) return;
    for (const output of originalNode.outputs) {
      if (!output.links) continue;
      const links = [...output.links];
      for (const l of links) {
        const link = app.graph.links[l];
        if (!link) continue;
        const targetNode = app.graph.getNodeById(link.target_id);
        const newSlot = this.groupData.oldToNewOutputMap[nodeId]?.[link.origin_slot];
        if (newSlot != null) {
          this.node.connect(newSlot, targetNode, link.target_slot);
        }
      }
    }
  }
  linkInputs() {
    for (const link of this.groupData.nodeData.links ?? []) {
      const [, originSlot, targetId, targetSlot, actualOriginId] = link;
      const originNode = app.graph.getNodeById(actualOriginId);
      if (!originNode) continue;
      originNode.connect(
        originSlot,
        // @ts-expect-error Valid - uses deprecated interface.  Required check: if (graph.getNodeById(this.node.id) !== this.node) report()
        this.node.id,
        this.groupData.oldToNewInputMap[targetId][targetSlot]
      );
    }
  }
  // @ts-expect-error fixme ts strict error
  static getGroupData(node) {
    return (node.nodeData ?? node.constructor?.nodeData)?.[GROUP];
  }
  static isGroupNode(node) {
    return !!node.constructor?.nodeData?.[GROUP];
  }
  static async fromNodes(nodes) {
    const builder = new GroupNodeBuilder(nodes);
    const res = await builder.build();
    if (!res) return;
    const { name, nodeData } = res;
    const config = new GroupNodeConfig(name, nodeData);
    await config.registerType();
    const groupNode = LiteGraph.createNode(`${PREFIX}${SEPARATOR}${name}`);
    groupNode.setInnerNodes(builder.nodes);
    groupNode[GROUP].populateWidgets();
    app.graph.add(groupNode);
    groupNode[GROUP].replaceNodes(builder.nodes);
    return groupNode;
  }
}
const replaceLegacySeparators = /* @__PURE__ */ __name((nodes) => {
  for (const node of nodes) {
    if (typeof node.type === "string" && node.type.startsWith("workflow/")) {
      node.type = node.type.replace(/^workflow\//, `${PREFIX}${SEPARATOR}`);
    }
  }
}, "replaceLegacySeparators");
async function convertSelectedNodesToGroupNode() {
  const nodes = Object.values(app.canvas.selected_nodes ?? {});
  if (nodes.length === 0) {
    throw new Error("No nodes selected");
  }
  if (nodes.length === 1) {
    throw new Error("Please select multiple nodes to convert to group node");
  }
  for (const node of nodes) {
    if (node instanceof SubgraphNode) {
      throw new Error("Selected nodes contain a subgraph node");
    }
    if (GroupNodeHandler.isGroupNode(node)) {
      throw new Error("Selected nodes contain a group node");
    }
  }
  return await GroupNodeHandler.fromNodes(nodes);
}
__name(convertSelectedNodesToGroupNode, "convertSelectedNodesToGroupNode");
const convertDisabled = /* @__PURE__ */ __name((selected) => selected.length < 2 || !!selected.find((n) => GroupNodeHandler.isGroupNode(n)), "convertDisabled");
function ungroupSelectedGroupNodes() {
  const nodes = Object.values(app.canvas.selected_nodes ?? {});
  for (const node of nodes) {
    if (GroupNodeHandler.isGroupNode(node)) {
      node.convertToNodes?.();
    }
  }
}
__name(ungroupSelectedGroupNodes, "ungroupSelectedGroupNodes");
function manageGroupNodes(type) {
  new ManageGroupDialog(app).show(type);
}
__name(manageGroupNodes, "manageGroupNodes");
const id$1 = "Comfy.GroupNode";
let globalDefs;
const ext$3 = {
  name: id$1,
  commands: [
    {
      id: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
      label: "Convert selected nodes to group node",
      icon: "pi pi-sitemap",
      versionAdded: "1.3.17",
      function: /* @__PURE__ */ __name(() => convertSelectedNodesToGroupNode(), "function")
    },
    {
      id: "Comfy.GroupNode.UngroupSelectedGroupNodes",
      label: "Ungroup selected group nodes",
      icon: "pi pi-sitemap",
      versionAdded: "1.3.17",
      function: /* @__PURE__ */ __name(() => ungroupSelectedGroupNodes(), "function")
    },
    {
      id: "Comfy.GroupNode.ManageGroupNodes",
      label: "Manage group nodes",
      icon: "pi pi-cog",
      versionAdded: "1.3.17",
      function: /* @__PURE__ */ __name((...args) => manageGroupNodes(args[0]), "function")
    }
  ],
  keybindings: [
    {
      commandId: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
      combo: {
        alt: true,
        key: "g"
      }
    },
    {
      commandId: "Comfy.GroupNode.UngroupSelectedGroupNodes",
      combo: {
        alt: true,
        shift: true,
        key: "G"
      }
    }
  ],
  getCanvasMenuItems(canvas) {
    const items = [];
    const selected = Object.values(canvas.selected_nodes ?? {});
    const convertEnabled = !convertDisabled(selected);
    items.push({
      content: `Convert to Group Node (Deprecated)`,
      disabled: !convertEnabled,
      // @ts-expect-error fixme ts strict error - async callback
      callback: /* @__PURE__ */ __name(() => convertSelectedNodesToGroupNode(), "callback")
    });
    const groups = canvas.graph?.extra?.groupNodes;
    const manageDisabled = !groups || !Object.keys(groups).length;
    items.push({
      content: `Manage Group Nodes`,
      disabled: manageDisabled,
      callback: /* @__PURE__ */ __name(() => manageGroupNodes(), "callback")
    });
    return items;
  },
  getNodeMenuItems(node) {
    if (GroupNodeHandler.isGroupNode(node)) {
      return [];
    }
    const selected = Object.values(app.canvas.selected_nodes ?? {});
    const convertEnabled = !convertDisabled(selected);
    return [
      {
        content: `Convert to Group Node (Deprecated)`,
        disabled: !convertEnabled,
        // @ts-expect-error fixme ts strict error - async callback
        callback: /* @__PURE__ */ __name(() => convertSelectedNodesToGroupNode(), "callback")
      }
    ];
  },
  async beforeConfigureGraph(graphData, missingNodeTypes) {
    const nodes = graphData?.extra?.groupNodes;
    if (nodes) {
      replaceLegacySeparators(graphData.nodes);
      await GroupNodeConfig.registerFromWorkflow(nodes, missingNodeTypes);
    }
  },
  addCustomNodeDefs(defs) {
    globalDefs = defs;
  },
  nodeCreated(node) {
    if (GroupNodeHandler.isGroupNode(node)) {
      node[GROUP] = new GroupNodeHandler(node);
      if (node.title && node[GROUP]?.groupData?.nodeData) {
        Workflow.storeGroupNode(node.title, node[GROUP].groupData.nodeData);
      }
    }
  },
  // @ts-expect-error fixme ts strict error
  async refreshComboInNodes(defs) {
    Object.assign(globalDefs, defs);
    const nodes = app.graph.extra?.groupNodes;
    if (nodes) {
      await GroupNodeConfig.registerFromWorkflow(nodes, {});
    }
  }
};
app.registerExtension(ext$3);
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNode = window.comfyAPI.groupNode || {};
window.comfyAPI.groupNode.GroupNodeConfig = GroupNodeConfig;
window.comfyAPI.groupNode.GroupNodeHandler = GroupNodeHandler;
function setNodeMode(node, mode) {
  node.mode = mode;
  node.graph?.change();
}
__name(setNodeMode, "setNodeMode");
function addNodesToGroup(group, items) {
  const padding = useSettingStore().get("Comfy.GroupSelectedNodes.Padding");
  group.resizeTo([...group.children, ...items], padding);
}
__name(addNodesToGroup, "addNodesToGroup");
const ext$2 = {
  name: "Comfy.GroupOptions",
  getCanvasMenuItems(canvas) {
    const items = [];
    const group = canvas.graph.getGroupOnPos(
      canvas.graph_mouse[0],
      canvas.graph_mouse[1]
    );
    if (!group) {
      if (canvas.selectedItems.size > 0) {
        items.push({
          content: "Add Group For Selected Nodes",
          callback: /* @__PURE__ */ __name(() => {
            const group2 = new LGraphGroup();
            addNodesToGroup(group2, canvas.selectedItems);
            canvas.graph.add(group2);
            canvas.graph.change();
            group2.recomputeInsideNodes();
          }, "callback")
        });
      }
      return items;
    }
    group.recomputeInsideNodes();
    const nodesInGroup = group.nodes;
    items.push({
      content: "Add Selected Nodes To Group",
      disabled: !canvas.selectedItems?.size,
      callback: /* @__PURE__ */ __name(() => {
        addNodesToGroup(group, canvas.selectedItems);
        canvas.graph.change();
      }, "callback")
    });
    if (nodesInGroup.length === 0) {
      return items;
    } else {
      items.push(null);
    }
    let allNodesAreSameMode = true;
    for (let i = 1; i < nodesInGroup.length; i++) {
      if (nodesInGroup[i].mode !== nodesInGroup[0].mode) {
        allNodesAreSameMode = false;
        break;
      }
    }
    items.push({
      content: "Fit Group To Nodes",
      callback: /* @__PURE__ */ __name(() => {
        group.recomputeInsideNodes();
        const padding = useSettingStore().get(
          "Comfy.GroupSelectedNodes.Padding"
        );
        group.resizeTo(group.children, padding);
        canvas.graph.change();
      }, "callback")
    });
    items.push({
      content: "Select Nodes",
      callback: /* @__PURE__ */ __name(() => {
        canvas.selectNodes(nodesInGroup);
        canvas.graph.change();
        canvas.canvas.focus();
      }, "callback")
    });
    if (allNodesAreSameMode) {
      const mode = nodesInGroup[0].mode;
      switch (mode) {
        case 0:
          items.push({
            content: "Set Group Nodes to Never",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 2);
              }
            }, "callback")
          });
          items.push({
            content: "Bypass Group Nodes",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 4);
              }
            }, "callback")
          });
          break;
        case 2:
          items.push({
            content: "Set Group Nodes to Always",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 0);
              }
            }, "callback")
          });
          items.push({
            content: "Bypass Group Nodes",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 4);
              }
            }, "callback")
          });
          break;
        case 4:
          items.push({
            content: "Set Group Nodes to Always",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 0);
              }
            }, "callback")
          });
          items.push({
            content: "Set Group Nodes to Never",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 2);
              }
            }, "callback")
          });
          break;
        default:
          items.push({
            content: "Set Group Nodes to Always",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 0);
              }
            }, "callback")
          });
          items.push({
            content: "Set Group Nodes to Never",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 2);
              }
            }, "callback")
          });
          items.push({
            content: "Bypass Group Nodes",
            callback: /* @__PURE__ */ __name(() => {
              for (const node of nodesInGroup) {
                setNodeMode(node, 4);
              }
            }, "callback")
          });
          break;
      }
    } else {
      items.push({
        content: "Set Group Nodes to Always",
        callback: /* @__PURE__ */ __name(() => {
          for (const node of nodesInGroup) {
            setNodeMode(node, 0);
          }
        }, "callback")
      });
      items.push({
        content: "Set Group Nodes to Never",
        callback: /* @__PURE__ */ __name(() => {
          for (const node of nodesInGroup) {
            setNodeMode(node, 2);
          }
        }, "callback")
      });
      items.push({
        content: "Bypass Group Nodes",
        callback: /* @__PURE__ */ __name(() => {
          for (const node of nodesInGroup) {
            setNodeMode(node, 4);
          }
        }, "callback")
      });
    }
    return items;
  }
};
app.registerExtension(ext$2);
const EXPORT_FORMATS = [
  { label: "GLB", value: "glb" },
  { label: "OBJ", value: "obj" },
  { label: "STL", value: "stl" }
];
function createExportMenuItems(load3d) {
  return [
    null,
    // Separator
    {
      content: "Save",
      has_submenu: true,
      callback: /* @__PURE__ */ __name((_value, _options, event, prev_menu) => {
        const submenuOptions = EXPORT_FORMATS.map(
          (format) => ({
            content: format.label,
            callback: /* @__PURE__ */ __name(() => {
              void (async () => {
                try {
                  await load3d.exportModel(format.value);
                  useToastStore().add({
                    severity: "success",
                    summary: t("toastMessages.exportSuccess", {
                      format: format.label
                    })
                  });
                } catch (error) {
                  console.error("Export failed:", error);
                  useToastStore().addAlert(
                    t("toastMessages.failedToExportModel", {
                      format: format.label
                    })
                  );
                }
              })();
            }, "callback")
          })
        );
        new LiteGraph.ContextMenu(submenuOptions, {
          event,
          parentMenu: prev_menu
        });
      }, "callback")
    }
  ];
}
__name(createExportMenuItems, "createExportMenuItems");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.exportMenuHelper = window.comfyAPI.exportMenuHelper || {};
window.comfyAPI.exportMenuHelper.createExportMenuItems = createExportMenuItems;
class Load3DConfiguration {
  static {
    __name(this, "Load3DConfiguration");
  }
  constructor(load3d) {
    this.load3d = load3d;
  }
  configureForSaveMesh(loadFolder, filePath) {
    this.setupModelHandlingForSaveMesh(filePath, loadFolder);
    this.setupDefaultProperties();
  }
  configure(setting) {
    this.setupModelHandling(
      setting.modelWidget,
      setting.loadFolder,
      setting.cameraState
    );
    this.setupTargetSize(setting.width, setting.height);
    this.setupDefaultProperties(setting.bgImagePath);
  }
  setupTargetSize(width, height) {
    if (width && height) {
      this.load3d.setTargetSize(width.value, height.value);
      width.callback = (value) => {
        this.load3d.setTargetSize(value, height.value);
      };
      height.callback = (value) => {
        this.load3d.setTargetSize(width.value, value);
      };
    }
  }
  setupModelHandlingForSaveMesh(filePath, loadFolder) {
    const onModelWidgetUpdate = this.createModelUpdateHandler(loadFolder);
    if (filePath) {
      onModelWidgetUpdate(filePath);
    }
  }
  setupModelHandling(modelWidget, loadFolder, cameraState) {
    const onModelWidgetUpdate = this.createModelUpdateHandler(
      loadFolder,
      cameraState
    );
    if (modelWidget.value) {
      onModelWidgetUpdate(modelWidget.value);
    }
    const originalCallback = modelWidget.callback;
    let currentValue = modelWidget.value;
    Object.defineProperty(modelWidget, "value", {
      get() {
        return currentValue;
      },
      set(newValue) {
        currentValue = newValue;
        if (modelWidget.callback && newValue !== void 0 && newValue !== "") {
          modelWidget.callback(newValue);
        }
      },
      enumerable: true,
      configurable: true
    });
    modelWidget.callback = (value) => {
      onModelWidgetUpdate(value);
      if (originalCallback) {
        originalCallback(value);
      }
    };
  }
  setupDefaultProperties(bgImagePath) {
    const sceneConfig = this.loadSceneConfig();
    this.applySceneConfig(sceneConfig, bgImagePath);
    const cameraConfig = this.loadCameraConfig();
    this.applyCameraConfig(cameraConfig);
    const lightConfig = this.loadLightConfig();
    this.applyLightConfig(lightConfig);
  }
  loadSceneConfig() {
    const defaultConfig = {
      showGrid: useSettingStore().get("Comfy.Load3D.ShowGrid"),
      backgroundColor: "#" + useSettingStore().get("Comfy.Load3D.BackgroundColor"),
      backgroundImage: ""
    };
    const config = this.load3d.loadNodeProperty("Scene Config", defaultConfig);
    this.load3d.node.properties["Scene Config"] = config;
    return config;
  }
  loadCameraConfig() {
    const defaultConfig = {
      cameraType: useSettingStore().get("Comfy.Load3D.CameraType"),
      fov: 35
    };
    const config = this.load3d.loadNodeProperty("Camera Config", defaultConfig);
    this.load3d.node.properties["Camera Config"] = config;
    return config;
  }
  loadLightConfig() {
    const defaultConfig = {
      intensity: useSettingStore().get("Comfy.Load3D.LightIntensity")
    };
    const config = this.load3d.loadNodeProperty("Light Config", defaultConfig);
    this.load3d.node.properties["Light Config"] = config;
    return config;
  }
  loadModelConfig() {
    const defaultConfig = {
      upDirection: "original",
      materialMode: "original"
    };
    const config = this.load3d.loadNodeProperty("Model Config", defaultConfig);
    this.load3d.node.properties["Model Config"] = config;
    return config;
  }
  applySceneConfig(config, bgImagePath) {
    this.load3d.toggleGrid(config.showGrid);
    this.load3d.setBackgroundColor(config.backgroundColor);
    if (config.backgroundImage) {
      if (bgImagePath && bgImagePath != config.backgroundImage) {
        return;
      }
      this.load3d.setBackgroundImage(config.backgroundImage);
    }
  }
  applyCameraConfig(config) {
    this.load3d.toggleCamera(config.cameraType);
    this.load3d.setFOV(config.fov);
    if (config.state) {
      this.load3d.setCameraState(config.state);
    }
  }
  applyLightConfig(config) {
    this.load3d.setLightIntensity(config.intensity);
  }
  applyModelConfig(config) {
    this.load3d.setUpDirection(config.upDirection);
    this.load3d.setMaterialMode(config.materialMode);
  }
  createModelUpdateHandler(loadFolder, cameraState) {
    let isFirstLoad = true;
    return async (value) => {
      if (!value) return;
      const filename = value;
      this.setResourceFolder(filename);
      const modelUrl = api.apiURL(
        Load3dUtils.getResourceURL(
          ...Load3dUtils.splitFilePath(filename),
          loadFolder
        )
      );
      await this.load3d.loadModel(modelUrl, filename);
      const modelConfig = this.loadModelConfig();
      this.applyModelConfig(modelConfig);
      if (isFirstLoad && cameraState && typeof cameraState === "object") {
        try {
          this.load3d.setCameraState(cameraState);
        } catch (error) {
          console.warn("Failed to restore camera state:", error);
        }
        isFirstLoad = false;
      }
    };
  }
  setResourceFolder(filename) {
    const pathParts = filename.split("/").filter((part) => part.trim());
    if (pathParts.length <= 2) {
      return;
    }
    const subfolderParts = pathParts.slice(1, -1);
    const subfolder = subfolderParts.join("/");
    if (subfolder) {
      this.load3d.node.properties["Resource Folder"] = subfolder;
    }
  }
}
const inputSpecLoad3D = {
  name: "image",
  type: "Load3D",
  isPreview: false
};
const inputSpecPreview3D = {
  name: "image",
  type: "Preview3D",
  isPreview: true
};
async function handleModelUpload(files, node) {
  if (!files?.length) return;
  const modelWidget = node.widgets?.find(
    (w) => w.name === "model_file"
  );
  try {
    const resourceFolder = node.properties["Resource Folder"] || "";
    const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
    const uploadPath = await Load3dUtils.uploadFile(files[0], subfolder);
    if (!uploadPath) {
      useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
      return;
    }
    const modelUrl = api.apiURL(
      Load3dUtils.getResourceURL(
        ...Load3dUtils.splitFilePath(uploadPath),
        "input"
      )
    );
    useLoad3d(node).waitForLoad3d((load3d) => {
      try {
        load3d.loadModel(modelUrl);
      } catch (error) {
        useToastStore().addAlert(t("toastMessages.failedToLoadModel"));
      }
    });
    if (uploadPath && modelWidget) {
      if (!modelWidget.options?.values?.includes(uploadPath)) {
        modelWidget.options?.values?.push(uploadPath);
      }
      modelWidget.value = uploadPath;
    }
  } catch (error) {
    console.error("Model upload failed:", error);
    useToastStore().addAlert(t("toastMessages.fileUploadFailed"));
  }
}
__name(handleModelUpload, "handleModelUpload");
async function handleResourcesUpload(files, node) {
  if (!files?.length) return;
  try {
    const resourceFolder = node.properties["Resource Folder"] || "";
    const subfolder = resourceFolder.trim() ? `3d/${resourceFolder.trim()}` : "3d";
    await Load3dUtils.uploadMultipleFiles(files, subfolder);
  } catch (error) {
    console.error("Extra resources upload failed:", error);
    useToastStore().addAlert(t("toastMessages.extraResourcesUploadFailed"));
  }
}
__name(handleResourcesUpload, "handleResourcesUpload");
function createFileInput(accept, multiple = false) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = accept;
  input.multiple = multiple;
  input.style.display = "none";
  return input;
}
__name(createFileInput, "createFileInput");
useExtensionService().registerExtension({
  name: "Comfy.Load3D",
  settings: [
    {
      id: "Comfy.Load3D.ShowGrid",
      category: ["3D", "Scene", "Initial Grid Visibility"],
      name: "Initial Grid Visibility",
      tooltip: "Controls whether the grid is visible by default when a new 3D widget is created. This default can still be toggled individually for each widget after creation.",
      type: "boolean",
      defaultValue: true,
      experimental: true
    },
    {
      id: "Comfy.Load3D.BackgroundColor",
      category: ["3D", "Scene", "Initial Background Color"],
      name: "Initial Background Color",
      tooltip: "Controls the default background color of the 3D scene. This setting determines the background appearance when a new 3D widget is created, but can be adjusted individually for each widget after creation.",
      type: "color",
      defaultValue: "282828",
      experimental: true
    },
    {
      id: "Comfy.Load3D.CameraType",
      category: ["3D", "Camera", "Initial Camera Type"],
      name: "Initial Camera Type",
      tooltip: "Controls whether the camera is perspective or orthographic by default when a new 3D widget is created. This default can still be toggled individually for each widget after creation.",
      type: "combo",
      options: ["perspective", "orthographic"],
      defaultValue: "perspective",
      experimental: true
    },
    {
      id: "Comfy.Load3D.LightIntensity",
      category: ["3D", "Light", "Initial Light Intensity"],
      name: "Initial Light Intensity",
      tooltip: "Sets the default brightness level of lighting in the 3D scene. This value determines how intensely lights illuminate objects when a new 3D widget is created, but can be adjusted individually for each widget after creation.",
      type: "number",
      defaultValue: 3,
      experimental: true
    },
    {
      id: "Comfy.Load3D.LightIntensityMaximum",
      category: ["3D", "Light", "Light Intensity Maximum"],
      name: "Light Intensity Maximum",
      tooltip: "Sets the maximum allowable light intensity value for 3D scenes. This defines the upper brightness limit that can be set when adjusting lighting in any 3D widget.",
      type: "number",
      defaultValue: 10,
      experimental: true
    },
    {
      id: "Comfy.Load3D.LightIntensityMinimum",
      category: ["3D", "Light", "Light Intensity Minimum"],
      name: "Light Intensity Minimum",
      tooltip: "Sets the minimum allowable light intensity value for 3D scenes. This defines the lower brightness limit that can be set when adjusting lighting in any 3D widget.",
      type: "number",
      defaultValue: 1,
      experimental: true
    },
    {
      id: "Comfy.Load3D.LightAdjustmentIncrement",
      category: ["3D", "Light", "Light Adjustment Increment"],
      name: "Light Adjustment Increment",
      tooltip: "Controls the increment size when adjusting light intensity in 3D scenes. A smaller step value allows for finer control over lighting adjustments, while a larger value results in more noticeable changes per adjustment.",
      type: "slider",
      attrs: {
        min: 0.1,
        max: 1,
        step: 0.1
      },
      defaultValue: 0.5,
      experimental: true
    },
    {
      id: "Comfy.Load3D.3DViewerEnable",
      category: ["3D", "3DViewer", "Enable"],
      name: "Enable 3D Viewer (Beta)",
      tooltip: "Enables the 3D Viewer (Beta) for selected nodes. This feature allows you to visualize and interact with 3D models directly within the full size 3d viewer.",
      type: "boolean",
      defaultValue: false,
      experimental: true
    }
  ],
  commands: [
    {
      id: "Comfy.3DViewer.Open3DViewer",
      icon: "pi pi-pencil",
      label: "Open 3D Viewer (Beta) for Selected Node",
      function: /* @__PURE__ */ __name(() => {
        const selectedNodes = app.canvas.selected_nodes;
        if (!selectedNodes || Object.keys(selectedNodes).length !== 1) return;
        const selectedNode = selectedNodes[Object.keys(selectedNodes)[0]];
        if (!isLoad3dNode(selectedNode)) return;
        ComfyApp.copyToClipspace(selectedNode);
        ComfyApp.clipspace_return_node = selectedNode;
        const props = { node: selectedNode };
        useDialogStore().showDialog({
          key: "global-load3d-viewer",
          title: t("load3d.viewer.title"),
          component: Load3DViewerContent,
          props,
          dialogComponentProps: {
            style: "width: 80vw; height: 80vh;",
            maximizable: true,
            onClose: /* @__PURE__ */ __name(async () => {
              await useLoad3dService().handleViewerClose(props.node);
            }, "onClose")
          }
        });
      }, "function")
    }
  ],
  getCustomWidgets() {
    return {
      LOAD_3D(node) {
        const fileInput = createFileInput(".gltf,.glb,.obj,.fbx,.stl", false);
        node.properties["Resource Folder"] = "";
        fileInput.onchange = async () => {
          await handleModelUpload(fileInput.files, node);
        };
        node.addWidget("button", "upload 3d model", "upload3dmodel", () => {
          fileInput.click();
        });
        const resourcesInput = createFileInput("*", true);
        resourcesInput.onchange = async () => {
          await handleResourcesUpload(resourcesInput.files, node);
          resourcesInput.value = "";
        };
        node.addWidget(
          "button",
          "upload extra resources",
          "uploadExtraResources",
          () => {
            resourcesInput.click();
          }
        );
        node.addWidget("button", "clear", "clear", () => {
          useLoad3d(node).waitForLoad3d((load3d) => {
            load3d.clearModel();
          });
          const modelWidget = node.widgets?.find((w) => w.name === "model_file");
          if (modelWidget) {
            modelWidget.value = "";
          }
        });
        const widget = new ComponentWidgetImpl({
          node,
          name: "image",
          component: _sfc_main,
          inputSpec: inputSpecLoad3D,
          options: {}
        });
        widget.type = "load3D";
        addWidget(node, widget);
        return { widget };
      }
    };
  },
  getNodeMenuItems(node) {
    if (node.constructor.comfyClass !== "Load3D") return [];
    const load3d = useLoad3dService().getLoad3d(node);
    if (!load3d) return [];
    return createExportMenuItems(load3d);
  },
  async nodeCreated(node) {
    if (node.constructor.comfyClass !== "Load3D") return;
    const [oldWidth, oldHeight] = node.size;
    node.setSize([Math.max(oldWidth, 300), Math.max(oldHeight, 600)]);
    await nextTick();
    useLoad3d(node).waitForLoad3d((load3d) => {
      const cameraConfig = node.properties["Camera Config"];
      const cameraState = cameraConfig?.state;
      const config = new Load3DConfiguration(load3d);
      const modelWidget = node.widgets?.find((w) => w.name === "model_file");
      const width = node.widgets?.find((w) => w.name === "width");
      const height = node.widgets?.find((w) => w.name === "height");
      const sceneWidget = node.widgets?.find((w) => w.name === "image");
      if (modelWidget && width && height && sceneWidget) {
        const settings = {
          loadFolder: "input",
          modelWidget,
          cameraState,
          width,
          height
        };
        config.configure(settings);
        sceneWidget.serializeValue = async () => {
          const currentLoad3d = nodeToLoad3dMap.get(node);
          if (!currentLoad3d) {
            console.error("No load3d instance found for node");
            return null;
          }
          const cameraConfig2 = node.properties["Camera Config"] || {
            cameraType: currentLoad3d.getCurrentCameraType(),
            fov: currentLoad3d.cameraManager.perspectiveCamera.fov
          };
          cameraConfig2.state = currentLoad3d.getCameraState();
          node.properties["Camera Config"] = cameraConfig2;
          currentLoad3d.stopRecording();
          const {
            scene: imageData,
            mask: maskData,
            normal: normalData
          } = await currentLoad3d.captureScene(
            width.value,
            height.value
          );
          const [data, dataMask, dataNormal] = await Promise.all([
            Load3dUtils.uploadTempImage(imageData, "scene"),
            Load3dUtils.uploadTempImage(maskData, "scene_mask"),
            Load3dUtils.uploadTempImage(normalData, "scene_normal")
          ]);
          currentLoad3d.handleResize();
          const returnVal = {
            image: `threed/${data.name} [temp]`,
            mask: `threed/${dataMask.name} [temp]`,
            normal: `threed/${dataNormal.name} [temp]`,
            camera_info: node.properties["Camera Config"]?.state || null,
            recording: ""
          };
          const recordingData = currentLoad3d.getRecordingData();
          if (recordingData) {
            const [recording] = await Promise.all([
              Load3dUtils.uploadTempImage(recordingData, "recording", "mp4")
            ]);
            returnVal["recording"] = `threed/${recording.name} [temp]`;
          }
          return returnVal;
        };
      }
    });
  }
});
useExtensionService().registerExtension({
  name: "Comfy.Preview3D",
  async beforeRegisterNodeDef(_nodeType, nodeData) {
    if ("Preview3D" === nodeData.name) {
      nodeData.input.required.image = ["PREVIEW_3D"];
    }
  },
  getNodeMenuItems(node) {
    if (node.constructor.comfyClass !== "Preview3D") return [];
    const load3d = useLoad3dService().getLoad3d(node);
    if (!load3d) return [];
    return createExportMenuItems(load3d);
  },
  getCustomWidgets() {
    return {
      PREVIEW_3D(node) {
        const widget = new ComponentWidgetImpl({
          node,
          name: inputSpecPreview3D.name,
          component: _sfc_main,
          inputSpec: inputSpecPreview3D,
          options: {}
        });
        widget.type = "load3D";
        addWidget(node, widget);
        return { widget };
      }
    };
  },
  async nodeCreated(node) {
    if (node.constructor.comfyClass !== "Preview3D") return;
    const [oldWidth, oldHeight] = node.size;
    node.setSize([Math.max(oldWidth, 400), Math.max(oldHeight, 550)]);
    await nextTick();
    const onExecuted = node.onExecuted;
    useLoad3d(node).waitForLoad3d((load3d) => {
      const config = new Load3DConfiguration(load3d);
      const modelWidget = node.widgets?.find((w) => w.name === "model_file");
      if (modelWidget) {
        const lastTimeModelFile = node.properties["Last Time Model File"];
        if (lastTimeModelFile) {
          modelWidget.value = lastTimeModelFile;
          const cameraConfig = node.properties["Camera Config"];
          const cameraState = cameraConfig?.state;
          const settings = {
            loadFolder: "output",
            modelWidget,
            cameraState
          };
          config.configure(settings);
        }
        node.onExecuted = function(message) {
          onExecuted?.apply(this, arguments);
          let filePath = message.result[0];
          if (!filePath) {
            const msg = t("toastMessages.unableToGetModelFilePath");
            console.error(msg);
            useToastStore().addAlert(msg);
          }
          let cameraState = message.result[1];
          let bgImagePath = message.result[2];
          modelWidget.value = filePath.replaceAll("\\", "/");
          node.properties["Last Time Model File"] = modelWidget.value;
          const settings = {
            loadFolder: "output",
            modelWidget,
            cameraState,
            bgImagePath
          };
          config.configure(settings);
          if (bgImagePath) {
            load3d.setBackgroundImage(bgImagePath);
          }
        };
      }
    });
  }
});
const paintedMaskedImagePrefix = "clipspace-painted-masked-";
const imageLayerFilenamesByTimestamp = /* @__PURE__ */ __name((timestamp) => ({
  maskedImage: `clipspace-mask-${timestamp}.png`,
  paint: `clipspace-paint-${timestamp}.png`,
  paintedImage: `clipspace-painted-${timestamp}.png`,
  paintedMaskedImage: `${paintedMaskedImagePrefix}${timestamp}.png`
}), "imageLayerFilenamesByTimestamp");
const imageLayerFilenamesIfApplicable = /* @__PURE__ */ __name((inputImageFilename) => {
  const isPaintedMaskedImageFilename = inputImageFilename.startsWith(
    paintedMaskedImagePrefix
  );
  if (!isPaintedMaskedImageFilename) return void 0;
  const suffix = inputImageFilename.slice(paintedMaskedImagePrefix.length);
  const timestamp = parseInt(suffix.split(".")[0], 10);
  return imageLayerFilenamesByTimestamp(timestamp);
}, "imageLayerFilenamesIfApplicable");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.maskEditorLayerFilenames = window.comfyAPI.maskEditorLayerFilenames || {};
window.comfyAPI.maskEditorLayerFilenames.imageLayerFilenamesByTimestamp = imageLayerFilenamesByTimestamp;
window.comfyAPI.maskEditorLayerFilenames.imageLayerFilenamesIfApplicable = imageLayerFilenamesIfApplicable;
class CanvasHistory {
  static {
    __name(this, "CanvasHistory");
  }
  // @ts-expect-error unused variable
  maskEditor;
  messageBroker;
  canvas;
  ctx;
  rgbCanvas;
  rgbCtx;
  states = [];
  currentStateIndex = -1;
  maxStates = 20;
  initialized = false;
  constructor(maskEditor, maxStates = 20) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.maxStates = maxStates;
    this.createListeners();
  }
  async pullCanvas() {
    this.canvas = await this.messageBroker.pull("maskCanvas");
    this.ctx = await this.messageBroker.pull("maskCtx");
    this.rgbCanvas = await this.messageBroker.pull("rgbCanvas");
    this.rgbCtx = await this.messageBroker.pull("rgbCtx");
  }
  createListeners() {
    this.messageBroker.subscribe("saveState", () => this.saveState());
    this.messageBroker.subscribe("undo", () => this.undo());
    this.messageBroker.subscribe("redo", () => this.redo());
  }
  clearStates() {
    this.states = [];
    this.currentStateIndex = -1;
    this.initialized = false;
  }
  async saveInitialState() {
    await this.pullCanvas();
    if (!this.canvas.width || !this.canvas.height || !this.rgbCanvas.width || !this.rgbCanvas.height) {
      requestAnimationFrame(() => this.saveInitialState());
      return;
    }
    this.clearStates();
    const maskState = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    const rgbState = this.rgbCtx.getImageData(
      0,
      0,
      this.rgbCanvas.width,
      this.rgbCanvas.height
    );
    this.states.push({ mask: maskState, rgb: rgbState });
    this.currentStateIndex = 0;
    this.initialized = true;
  }
  saveState() {
    if (!this.initialized || this.currentStateIndex === -1) {
      this.saveInitialState();
      return;
    }
    this.states = this.states.slice(0, this.currentStateIndex + 1);
    const maskState = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    const rgbState = this.rgbCtx.getImageData(
      0,
      0,
      this.rgbCanvas.width,
      this.rgbCanvas.height
    );
    this.states.push({ mask: maskState, rgb: rgbState });
    this.currentStateIndex++;
    if (this.states.length > this.maxStates) {
      this.states.shift();
      this.currentStateIndex--;
    }
  }
  undo() {
    if (this.states.length > 1 && this.currentStateIndex > 0) {
      this.currentStateIndex--;
      this.restoreState(this.states[this.currentStateIndex]);
    } else {
      alert("No more undo states available");
    }
  }
  redo() {
    if (this.states.length > 1 && this.currentStateIndex < this.states.length - 1) {
      this.currentStateIndex++;
      this.restoreState(this.states[this.currentStateIndex]);
    } else {
      alert("No more redo states available");
    }
  }
  restoreState(state) {
    if (state && this.initialized) {
      this.ctx.putImageData(state.mask, 0, 0);
      this.rgbCtx.putImageData(state.rgb, 0, 0);
    }
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.CanvasHistory = window.comfyAPI.CanvasHistory || {};
window.comfyAPI.CanvasHistory.CanvasHistory = CanvasHistory;
var BrushShape = /* @__PURE__ */ ((BrushShape2) => {
  BrushShape2["Arc"] = "arc";
  BrushShape2["Rect"] = "rect";
  return BrushShape2;
})(BrushShape || {});
var Tools = /* @__PURE__ */ ((Tools2) => {
  Tools2["MaskPen"] = "pen";
  Tools2["PaintPen"] = "rgbPaint";
  Tools2["Eraser"] = "eraser";
  Tools2["MaskBucket"] = "paintBucket";
  Tools2["MaskColorFill"] = "colorSelect";
  return Tools2;
})(Tools || {});
const allTools = [
  "pen",
  "rgbPaint",
  "eraser",
  "paintBucket",
  "colorSelect"
  /* MaskColorFill */
];
const allImageLayers = ["mask", "rgb"];
var CompositionOperation = /* @__PURE__ */ ((CompositionOperation2) => {
  CompositionOperation2["SourceOver"] = "source-over";
  CompositionOperation2["DestinationOut"] = "destination-out";
  return CompositionOperation2;
})(CompositionOperation || {});
var MaskBlendMode = /* @__PURE__ */ ((MaskBlendMode2) => {
  MaskBlendMode2["Black"] = "black";
  MaskBlendMode2["White"] = "white";
  MaskBlendMode2["Negative"] = "negative";
  return MaskBlendMode2;
})(MaskBlendMode || {});
var ColorComparisonMethod = /* @__PURE__ */ ((ColorComparisonMethod2) => {
  ColorComparisonMethod2["Simple"] = "simple";
  ColorComparisonMethod2["HSL"] = "hsl";
  ColorComparisonMethod2["LAB"] = "lab";
  return ColorComparisonMethod2;
})(ColorComparisonMethod || {});
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.types = window.comfyAPI.types || {};
window.comfyAPI.types.BrushShape = BrushShape;
window.comfyAPI.types.Tools = Tools;
window.comfyAPI.types.allTools = allTools;
window.comfyAPI.types.allImageLayers = allImageLayers;
window.comfyAPI.types.CompositionOperation = CompositionOperation;
window.comfyAPI.types.MaskBlendMode = MaskBlendMode;
window.comfyAPI.types.ColorComparisonMethod = ColorComparisonMethod;
class MessageBroker {
  static {
    __name(this, "MessageBroker");
  }
  pushTopics = {};
  pullTopics = {};
  constructor() {
    this.registerListeners();
  }
  // Push
  registerListeners() {
    this.createPushTopic("panStart");
    this.createPushTopic("paintBucketFill");
    this.createPushTopic("saveState");
    this.createPushTopic("brushAdjustmentStart");
    this.createPushTopic("drawStart");
    this.createPushTopic("panMove");
    this.createPushTopic("updateBrushPreview");
    this.createPushTopic("brushAdjustment");
    this.createPushTopic("draw");
    this.createPushTopic("paintBucketCursor");
    this.createPushTopic("panCursor");
    this.createPushTopic("drawEnd");
    this.createPushTopic("zoom");
    this.createPushTopic("undo");
    this.createPushTopic("redo");
    this.createPushTopic("cursorPoint");
    this.createPushTopic("panOffset");
    this.createPushTopic("zoomRatio");
    this.createPushTopic("getMaskCanvas");
    this.createPushTopic("getCanvasContainer");
    this.createPushTopic("screenToCanvas");
    this.createPushTopic("isKeyPressed");
    this.createPushTopic("isCombinationPressed");
    this.createPushTopic("setPaintBucketTolerance");
    this.createPushTopic("setBrushSize");
    this.createPushTopic("setBrushHardness");
    this.createPushTopic("setBrushOpacity");
    this.createPushTopic("setBrushShape");
    this.createPushTopic("initZoomPan");
    this.createPushTopic("setTool");
    this.createPushTopic("setActiveLayer");
    this.createPushTopic("pointerDown");
    this.createPushTopic("pointerMove");
    this.createPushTopic("pointerUp");
    this.createPushTopic("wheel");
    this.createPushTopic("initPaintBucketTool");
    this.createPushTopic("setBrushVisibility");
    this.createPushTopic("setBrushPreviewGradientVisibility");
    this.createPushTopic("handleTouchStart");
    this.createPushTopic("handleTouchMove");
    this.createPushTopic("handleTouchEnd");
    this.createPushTopic("colorSelectFill");
    this.createPushTopic("setColorSelectTolerance");
    this.createPushTopic("setLivePreview");
    this.createPushTopic("updateCursor");
    this.createPushTopic("setColorComparisonMethod");
    this.createPushTopic("clearLastPoint");
    this.createPushTopic("setWholeImage");
    this.createPushTopic("setMaskBoundary");
    this.createPushTopic("setMaskTolerance");
    this.createPushTopic("setBrushSmoothingPrecision");
    this.createPushTopic("setZoomText");
    this.createPushTopic("resetZoom");
    this.createPushTopic("invert");
    this.createPushTopic("setRGBColor");
    this.createPushTopic("paintedurl");
    this.createPushTopic("setSelectionOpacity");
    this.createPushTopic("setFillOpacity");
  }
  /**
   * Creates a new push topic (listener is notified)
   *
   * @param {string} topicName - The name of the topic to create.
   * @throws {Error} If the topic already exists.
   */
  createPushTopic(topicName) {
    if (this.topicExists(this.pushTopics, topicName)) {
      throw new Error("Topic already exists");
    }
    this.pushTopics[topicName] = [];
  }
  /**
   * Subscribe a callback function to the given topic.
   *
   * @param {string} topicName - The name of the topic to subscribe to.
   * @param {Callback} callback - The callback function to be subscribed.
   * @throws {Error} If the topic does not exist.
   */
  subscribe(topicName, callback) {
    if (!this.topicExists(this.pushTopics, topicName)) {
      throw new Error(`Topic "${topicName}" does not exist!`);
    }
    this.pushTopics[topicName].push(callback);
  }
  /**
   * Removes a callback function from the list of subscribers for a given topic.
   *
   * @param {string} topicName - The name of the topic to unsubscribe from.
   * @param {Callback} callback - The callback function to remove from the subscribers list.
   * @throws {Error} If the topic does not exist in the list of topics.
   */
  unsubscribe(topicName, callback) {
    if (!this.topicExists(this.pushTopics, topicName)) {
      throw new Error("Topic does not exist");
    }
    const index = this.pushTopics[topicName].indexOf(callback);
    if (index > -1) {
      this.pushTopics[topicName].splice(index, 1);
    }
  }
  /**
   * Publishes data to a specified topic with variable number of arguments.
   * @param {string} topicName - The name of the topic to publish to.
   * @param {...any[]} args - Variable number of arguments to pass to subscribers
   * @throws {Error} If the specified topic does not exist.
   */
  publish(topicName, ...args) {
    if (!this.topicExists(this.pushTopics, topicName)) {
      throw new Error(`Topic "${topicName}" does not exist!`);
    }
    this.pushTopics[topicName].forEach((callback) => {
      callback(...args);
    });
  }
  // Pull
  /**
   * Creates a new pull topic (listener must request data)
   *
   * @param {string} topicName - The name of the topic to create.
   * @param {() => Promise<any>} callBack - The callback function to be called when data is requested.
   * @throws {Error} If the topic already exists.
   */
  createPullTopic(topicName, callBack) {
    if (this.topicExists(this.pullTopics, topicName)) {
      throw new Error("Topic already exists");
    }
    this.pullTopics[topicName] = callBack;
  }
  /**
   * Requests data from a specified pull topic.
   * @param {string} topicName - The name of the topic to request data from.
   * @returns {Promise<any>} - The data from the pull topic.
   * @throws {Error} If the specified topic does not exist.
   */
  async pull(topicName, data) {
    if (!this.topicExists(this.pullTopics, topicName)) {
      throw new Error("Topic does not exist");
    }
    const callBack = this.pullTopics[topicName];
    try {
      const result = await callBack(data);
      return result;
    } catch (error) {
      console.error(`Error pulling data from topic "${topicName}":`, error);
      throw error;
    }
  }
  // Helper Methods
  /**
   * Checks if a topic exists in the given topics object.
   * @param {Record<string, any>} topics - The topics object to check.
   * @param {string} topicName - The name of the topic to check.
   * @returns {boolean} - True if the topic exists, false otherwise.
   */
  topicExists(topics, topicName) {
    return topics.hasOwnProperty(topicName);
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.MessageBroker = window.comfyAPI.MessageBroker || {};
window.comfyAPI.MessageBroker.MessageBroker = MessageBroker;
const iconsHtml = {
  [Tools.MaskPen]: `
    <svg viewBox="0 0 44 44">
      <path class="cls-1" d="M10.97,15.98v14.04c0,.825.675,1.5,1.5,1.5h23.07c.825,0,1.5-.675,1.5-1.5V15.98c0-.825-.675-1.5-1.5-1.5H12.47c-.825,0-1.5.675-1.5,1.5ZM25.79,28.16c-4.365,1.41-8.355-2.58-6.945-6.945.51-1.575,1.785-2.85,3.36-3.36,4.365-1.41,8.355,2.58,6.945,6.945-.51,1.575-1.785,2.85-3.36,3.36Z"/>
    </svg>
  `,
  [Tools.Eraser]: `
    <svg viewBox="0 0 44 44">
      <g>
        <rect class="cls-2" x="16.68" y="10" width="10.63" height="24" rx="1.16" ry="1.16" transform="translate(22 -9.11) rotate(45)"/>
        <path class="cls-1" d="M17.27,34.27c-.42,0-.85-.16-1.17-.48l-5.88-5.88c-.31-.31-.48-.73-.48-1.17s.17-.86.48-1.17l15.34-15.34c.62-.62,1.72-.62,2.34,0l5.88,5.88c.65.65.65,1.7,0,2.34l-15.34,15.34c-.32.32-.75.48-1.17.48ZM26.73,10.73c-.18,0-.34.07-.46.19l-15.34,15.34c-.12.12-.19.29-.19.46s.07.34.19.46l5.88,5.88c.26.26.67.26.93,0l15.34-15.34c.26-.26.26-.67,0-.93l-5.88-5.88c-.12-.12-.29-.19-.46-.19Z"/>
      </g>
      <path class="cls-3" d="M20.33,11.03h8.32c.64,0,1.16.52,1.16,1.16v15.79h-10.63v-15.79c0-.64.52-1.16,1.16-1.16Z" transform="translate(20.97 -11.61) rotate(45)"/>
    </svg>
  `,
  [Tools.MaskBucket]: `
    <svg viewBox="0 0 44 44">
      <path class="cls-1" d="M33.4,21.76l-11.42,11.41-.04.05c-.61.61-1.6.61-2.21,0l-8.91-8.91c-.61-.61-.61-1.6,0-2.21l.04-.05.3-.29h22.24Z"/>
      <path class="cls-1" d="M20.83,34.17c-.55,0-1.07-.21-1.46-.6l-8.91-8.91c-.8-.8-.8-2.11,0-2.92l11.31-11.31c.8-.8,2.11-.8,2.92,0l8.91,8.91c.39.39.6.91.6,1.46s-.21,1.07-.6,1.46l-11.31,11.31c-.39.39-.91.6-1.46.6ZM23.24,10.83c-.27,0-.54.1-.75.31l-11.31,11.31c-.41.41-.41,1.09,0,1.5l8.91,8.91c.4.4,1.1.4,1.5,0l11.31-11.31c.2-.2.31-.47.31-.75s-.11-.55-.31-.75l-8.91-8.91c-.21-.21-.48-.31-.75-.31Z"/>
      <path class="cls-1" d="M34.28,26.85c0,.84-.68,1.52-1.52,1.52s-1.52-.68-1.52-1.52,1.52-2.86,1.52-2.86c0,0,1.52,2.02,1.52,2.86Z"/>
    </svg>
  `,
  [Tools.MaskColorFill]: `
    <svg viewBox="0 0 44 44">
      <path class="cls-1" d="M30.29,13.72c-1.09-1.1-2.85-1.09-3.94,0l-2.88,2.88-.75-.75c-.2-.19-.51-.19-.71,0-.19.2-.19.51,0,.71l1.4,1.4-9.59,9.59c-.35.36-.54.82-.54,1.32,0,.14,0,.28.05.41-.05.04-.1.08-.15.13-.39.39-.39,1.01,0,1.4.38.39,1.01.39,1.4,0,.04-.04.08-.09.11-.13.14.04.3.06.45.06.5,0,.97-.19,1.32-.55l9.59-9.59,1.38,1.38c.1.09.22.14.35.14s.26-.05.35-.14c.2-.2.2-.52,0-.71l-.71-.72,2.88-2.89c1.08-1.08,1.08-2.85-.01-3.94ZM19.43,25.82h-2.46l7.15-7.15,1.23,1.23-5.92,5.92Z"/>
    </svg>
  `,
  [Tools.PaintPen]: `
    <svg viewBox="0 0 44 44">
      <path class="cls-1" d="M34,13.93c0,.47-.19.94-.55,1.31l-13.02,13.04c-.09.07-.18.15-.27.22-.07-1.39-1.21-2.48-2.61-2.49.07-.12.16-.24.27-.34l13.04-13.04c.72-.72,1.89-.72,2.6,0,.35.35.55.83.55,1.3Z"/>
      <path class="cls-1" d="M19.64,29.03c0,4.46-6.46,3.18-9.64,0,3.3-.47,4.75-2.58,7.06-2.58,1.43,0,2.58,1.16,2.58,2.58Z"/>
    </svg>
  `
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.constants = window.comfyAPI.constants || {};
window.comfyAPI.constants.iconsHtml = iconsHtml;
const ensureImageFullyLoaded = /* @__PURE__ */ __name((src) => new Promise((resolve, reject) => {
  const maskImage = new Image();
  maskImage.src = src;
  maskImage.onload = () => resolve();
  maskImage.onerror = reject;
}), "ensureImageFullyLoaded");
const isAlphaValue = /* @__PURE__ */ __name((index) => index % 4 === 3, "isAlphaValue");
const removeImageRgbValuesAndInvertAlpha = /* @__PURE__ */ __name((imageData) => imageData.map((val, i) => isAlphaValue(i) ? 255 - val : 0), "removeImageRgbValuesAndInvertAlpha");
const toRef = /* @__PURE__ */ __name((filename) => ({
  filename,
  subfolder: "clipspace",
  type: "input"
}), "toRef");
const mkFileUrl = /* @__PURE__ */ __name((props) => {
  const pathPlusQueryParams = api.apiURL(
    "/view?" + new URLSearchParams(props.ref).toString() + app.getPreviewFormatParam() + app.getRandParam()
  );
  const imageElement = new Image();
  imageElement.src = pathPlusQueryParams;
  return imageElement.src;
}, "mkFileUrl");
const requestWithRetries = /* @__PURE__ */ __name(async (mkRequest, maxRetries = 3) => {
  let attempt = 0;
  let success = false;
  while (attempt < maxRetries && !success) {
    try {
      const response = await mkRequest();
      if (response.ok) {
        success = true;
      } else {
        console.log("Failed to upload mask:", response);
      }
    } catch (error) {
      console.error(`Upload attempt ${attempt + 1} failed:`, error);
      attempt++;
      if (attempt < maxRetries) {
        console.log("Retrying upload...");
      } else {
        console.log("Max retries reached. Upload failed.");
      }
    }
  }
  return { success };
}, "requestWithRetries");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.image = window.comfyAPI.image || {};
window.comfyAPI.image.ensureImageFullyLoaded = ensureImageFullyLoaded;
window.comfyAPI.image.removeImageRgbValuesAndInvertAlpha = removeImageRgbValuesAndInvertAlpha;
window.comfyAPI.image.toRef = toRef;
window.comfyAPI.image.mkFileUrl = mkFileUrl;
window.comfyAPI.image.requestWithRetries = requestWithRetries;
const getCanvas2dContext = /* @__PURE__ */ __name((canvas) => {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Failed to get 2D context from canvas");
  return ctx;
}, "getCanvas2dContext");
const createCanvasCopy = /* @__PURE__ */ __name((canvas) => {
  const newCanvas = document.createElement("canvas");
  const newCanvasCtx = getCanvas2dContext(newCanvas);
  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;
  newCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  newCanvasCtx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
  return [newCanvas, newCanvasCtx];
}, "createCanvasCopy");
const combineOriginalImageAndPaint = /* @__PURE__ */ __name((canvases) => {
  const { originalImage, paint } = canvases;
  const [resultCanvas, resultCanvasCtx] = createCanvasCopy(originalImage);
  resultCanvasCtx.drawImage(paint, 0, 0);
  return [resultCanvas, resultCanvasCtx];
}, "combineOriginalImageAndPaint");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.canvas = window.comfyAPI.canvas || {};
window.comfyAPI.canvas.getCanvas2dContext = getCanvas2dContext;
window.comfyAPI.canvas.createCanvasCopy = createCanvasCopy;
window.comfyAPI.canvas.combineOriginalImageAndPaint = combineOriginalImageAndPaint;
const replaceClipspaceImages = /* @__PURE__ */ __name((newMainOutput, otherImagesInClipspace) => {
  try {
    if (!ComfyApp?.clipspace?.widgets?.length) return;
    const firstImageWidgetIndex = ComfyApp.clipspace.widgets.findIndex(
      (obj) => obj?.name === "image"
    );
    const firstImageWidget = ComfyApp.clipspace.widgets[firstImageWidgetIndex];
    if (!firstImageWidget) return;
    ComfyApp.clipspace.widgets[firstImageWidgetIndex].value = newMainOutput;
    otherImagesInClipspace?.forEach((extraImage, extraImageIndex) => {
      const extraImageWidgetIndex = firstImageWidgetIndex + extraImageIndex + 1;
      ComfyApp.clipspace.widgets[extraImageWidgetIndex].value = extraImage;
    });
  } catch (err) {
    console.warn("Failed to set widget value:", err);
  }
}, "replaceClipspaceImages");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.clipspace = window.comfyAPI.clipspace || {};
window.comfyAPI.clipspace.replaceClipspaceImages = replaceClipspaceImages;
class UIManager {
  static {
    __name(this, "UIManager");
  }
  rootElement;
  brush;
  brushPreviewGradient;
  maskCtx;
  rgbCtx;
  imageCtx;
  maskCanvas;
  rgbCanvas;
  imgCanvas;
  brushSettingsHTML;
  paintBucketSettingsHTML;
  colorSelectSettingsHTML;
  // @ts-expect-error unused variable
  maskOpacitySlider;
  brushHardnessSlider;
  brushSizeSlider;
  // @ts-expect-error unused variable
  brushOpacitySlider;
  sidebarImage;
  saveButton;
  toolPanel;
  // @ts-expect-error unused variable
  sidePanel;
  pointerZone;
  canvasBackground;
  canvasContainer;
  image;
  paint_image;
  imageURL;
  darkMode = true;
  maskLayerContainer = null;
  paintLayerContainer = null;
  createColorPicker() {
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = "maskEditor_colorPicker";
    colorPicker.value = "#FF0000";
    colorPicker.addEventListener("input", (event) => {
      const color = event.target.value;
      this.messageBroker.publish("setRGBColor", color);
    });
    return colorPicker;
  }
  maskEditor;
  messageBroker;
  mask_opacity = 0.8;
  maskBlendMode = MaskBlendMode.Black;
  zoomTextHTML;
  dimensionsTextHTML;
  constructor(rootElement, maskEditor) {
    this.rootElement = rootElement;
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.addListeners();
    this.addPullTopics();
  }
  addListeners() {
    this.messageBroker.subscribe(
      "updateBrushPreview",
      async () => this.updateBrushPreview()
    );
    this.messageBroker.subscribe(
      "paintBucketCursor",
      (isPaintBucket) => this.handlePaintBucketCursor(isPaintBucket)
    );
    this.messageBroker.subscribe(
      "panCursor",
      (isPan) => this.handlePanCursor(isPan)
    );
    this.messageBroker.subscribe(
      "setBrushVisibility",
      (isVisible) => this.setBrushVisibility(isVisible)
    );
    this.messageBroker.subscribe(
      "setBrushPreviewGradientVisibility",
      (isVisible) => this.setBrushPreviewGradientVisibility(isVisible)
    );
    this.messageBroker.subscribe("updateCursor", () => this.updateCursor());
    this.messageBroker.subscribe(
      "setZoomText",
      (text) => this.setZoomText(text)
    );
  }
  addPullTopics() {
    this.messageBroker.createPullTopic(
      "maskCanvas",
      async () => this.maskCanvas
    );
    this.messageBroker.createPullTopic("maskCtx", async () => this.maskCtx);
    this.messageBroker.createPullTopic("imageCtx", async () => this.imageCtx);
    this.messageBroker.createPullTopic("imgCanvas", async () => this.imgCanvas);
    this.messageBroker.createPullTopic("rgbCtx", async () => this.rgbCtx);
    this.messageBroker.createPullTopic("rgbCanvas", async () => this.rgbCanvas);
    this.messageBroker.createPullTopic(
      "screenToCanvas",
      async (coords) => this.screenToCanvas(coords)
    );
    this.messageBroker.createPullTopic(
      "getCanvasContainer",
      async () => this.canvasContainer
    );
    this.messageBroker.createPullTopic(
      "getMaskColor",
      async () => this.getMaskColor()
    );
  }
  async setlayout() {
    this.detectLightMode();
    var user_ui = await this.createUI();
    var canvasContainer = this.createBackgroundUI();
    var brush = await this.createBrush();
    await this.setBrushBorderRadius();
    this.setBrushOpacity(1);
    this.rootElement.appendChild(canvasContainer);
    this.rootElement.appendChild(user_ui);
    document.body.appendChild(brush);
  }
  async createUI() {
    var ui_container = document.createElement("div");
    ui_container.id = "maskEditor_uiContainer";
    var top_bar = await this.createTopBar();
    var ui_horizontal_container = document.createElement("div");
    ui_horizontal_container.id = "maskEditor_uiHorizontalContainer";
    var side_panel_container = await this.createSidePanel();
    var pointer_zone = this.createPointerZone();
    var tool_panel = this.createToolPanel();
    ui_horizontal_container.appendChild(tool_panel);
    ui_horizontal_container.appendChild(pointer_zone);
    ui_horizontal_container.appendChild(side_panel_container);
    ui_container.appendChild(top_bar);
    ui_container.appendChild(ui_horizontal_container);
    return ui_container;
  }
  createBackgroundUI() {
    const canvasContainer = document.createElement("div");
    canvasContainer.id = "maskEditorCanvasContainer";
    const imgCanvas = document.createElement("canvas");
    imgCanvas.id = "imageCanvas";
    const maskCanvas = document.createElement("canvas");
    maskCanvas.id = "maskCanvas";
    const rgbCanvas = document.createElement("canvas");
    rgbCanvas.id = "rgbCanvas";
    const canvas_background = document.createElement("div");
    canvas_background.id = "canvasBackground";
    canvasContainer.appendChild(imgCanvas);
    canvasContainer.appendChild(rgbCanvas);
    canvasContainer.appendChild(maskCanvas);
    canvasContainer.appendChild(canvas_background);
    this.imgCanvas = imgCanvas;
    this.rgbCanvas = rgbCanvas;
    this.maskCanvas = maskCanvas;
    this.canvasContainer = canvasContainer;
    this.canvasBackground = canvas_background;
    let maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
    if (maskCtx) {
      this.maskCtx = maskCtx;
    }
    let rgbCtx = rgbCanvas.getContext("2d", { willReadFrequently: true });
    if (rgbCtx) {
      this.rgbCtx = rgbCtx;
    }
    let imgCtx = imgCanvas.getContext("2d", { willReadFrequently: true });
    if (imgCtx) {
      this.imageCtx = imgCtx;
    }
    this.setEventHandler();
    this.imgCanvas.style.position = "absolute";
    this.rgbCanvas.style.position = "absolute";
    this.maskCanvas.style.position = "absolute";
    this.imgCanvas.style.top = "200";
    this.imgCanvas.style.left = "0";
    this.rgbCanvas.style.top = this.imgCanvas.style.top;
    this.rgbCanvas.style.left = this.imgCanvas.style.left;
    this.maskCanvas.style.top = this.imgCanvas.style.top;
    this.maskCanvas.style.left = this.imgCanvas.style.left;
    const maskCanvasStyle = this.getMaskCanvasStyle();
    this.maskCanvas.style.mixBlendMode = maskCanvasStyle.mixBlendMode;
    this.maskCanvas.style.opacity = maskCanvasStyle.opacity.toString();
    return canvasContainer;
  }
  async setBrushBorderRadius() {
    const brushSettings = await this.messageBroker.pull("brushSettings");
    if (brushSettings.type === BrushShape.Rect) {
      this.brush.style.borderRadius = "0%";
      this.brush.style.MozBorderRadius = "0%";
      this.brush.style.WebkitBorderRadius = "0%";
    } else {
      this.brush.style.borderRadius = "50%";
      this.brush.style.MozBorderRadius = "50%";
      this.brush.style.WebkitBorderRadius = "50%";
    }
  }
  async initUI() {
    this.saveButton.innerText = t("g.save");
    this.saveButton.disabled = false;
    await this.setImages(this.imgCanvas);
  }
  async createSidePanel() {
    const sidePanelWrapper = this.createContainer(true);
    const side_panel = document.createElement("div");
    sidePanelWrapper.id = "maskEditor_sidePanel";
    side_panel.id = "maskEditor_sidePanelContent";
    const brush_settings = await this.createBrushSettings();
    brush_settings.id = "maskEditor_brushSettings";
    this.brushSettingsHTML = brush_settings;
    const paint_bucket_settings = await this.createPaintBucketSettings();
    paint_bucket_settings.id = "maskEditor_paintBucketSettings";
    this.paintBucketSettingsHTML = paint_bucket_settings;
    const color_select_settings = await this.createColorSelectSettings();
    color_select_settings.id = "maskEditor_colorSelectSettings";
    this.colorSelectSettingsHTML = color_select_settings;
    const image_layer_settings = await this.createImageLayerSettings();
    const separator = this.createSeparator();
    side_panel.appendChild(brush_settings);
    side_panel.appendChild(paint_bucket_settings);
    side_panel.appendChild(color_select_settings);
    side_panel.appendChild(separator);
    side_panel.appendChild(image_layer_settings);
    sidePanelWrapper.appendChild(side_panel);
    return sidePanelWrapper;
  }
  async createBrushSettings() {
    const shapeColor = this.darkMode ? "maskEditor_brushShape_dark" : "maskEditor_brushShape_light";
    const brush_settings_container = this.createContainer(true);
    const brush_settings_title = this.createHeadline(
      t("maskEditor.Brush Settings")
    );
    const brush_shape_outer_container = this.createContainer(true);
    const brush_shape_title = this.createContainerTitle(
      t("maskEditor.Brush Shape")
    );
    const brush_shape_container = this.createContainer(false);
    const accentColor = this.darkMode ? "maskEditor_accent_bg_dark" : "maskEditor_accent_bg_light";
    brush_shape_container.classList.add(accentColor);
    brush_shape_container.classList.add("maskEditor_layerRow");
    const circle_shape = document.createElement("div");
    circle_shape.id = "maskEditor_sidePanelBrushShapeCircle";
    circle_shape.classList.add(shapeColor);
    circle_shape.addEventListener("click", () => {
      this.messageBroker.publish("setBrushShape", BrushShape.Arc);
      this.setBrushBorderRadius();
      circle_shape.style.background = "var(--p-button-text-primary-color)";
      square_shape.style.background = "";
    });
    const square_shape = document.createElement("div");
    square_shape.id = "maskEditor_sidePanelBrushShapeSquare";
    square_shape.classList.add(shapeColor);
    square_shape.addEventListener("click", () => {
      this.messageBroker.publish("setBrushShape", BrushShape.Rect);
      this.setBrushBorderRadius();
      square_shape.style.background = "var(--p-button-text-primary-color)";
      circle_shape.style.background = "";
    });
    if ((await this.messageBroker.pull("brushSettings")).type === BrushShape.Arc) {
      circle_shape.style.background = "var(--p-button-text-primary-color)";
      square_shape.style.background = "";
    } else {
      circle_shape.style.background = "";
      square_shape.style.background = "var(--p-button-text-primary-color)";
    }
    brush_shape_container.appendChild(circle_shape);
    brush_shape_container.appendChild(square_shape);
    brush_shape_outer_container.appendChild(brush_shape_title);
    brush_shape_outer_container.appendChild(brush_shape_container);
    const thicknesSliderObj = this.createSlider(
      t("maskEditor.Thickness"),
      1,
      100,
      1,
      (await this.messageBroker.pull("brushSettings")).size,
      (_, value) => {
        this.messageBroker.publish("setBrushSize", parseInt(value));
        this.updateBrushPreview();
      }
    );
    this.brushSizeSlider = thicknesSliderObj.slider;
    const opacitySliderObj = this.createSlider(
      t("maskEditor.Opacity"),
      0,
      1,
      0.01,
      (await this.messageBroker.pull("brushSettings")).opacity,
      (_, value) => {
        this.messageBroker.publish("setBrushOpacity", parseFloat(value));
        this.updateBrushPreview();
      }
    );
    this.brushOpacitySlider = opacitySliderObj.slider;
    const hardnessSliderObj = this.createSlider(
      t("maskEditor.Hardness"),
      0,
      1,
      0.01,
      (await this.messageBroker.pull("brushSettings")).hardness,
      (_, value) => {
        this.messageBroker.publish("setBrushHardness", parseFloat(value));
        this.updateBrushPreview();
      }
    );
    this.brushHardnessSlider = hardnessSliderObj.slider;
    const brushSmoothingPrecisionSliderObj = this.createSlider(
      t("maskEditor.Smoothing Precision"),
      1,
      100,
      1,
      (await this.messageBroker.pull("brushSettings")).smoothingPrecision,
      (_, value) => {
        this.messageBroker.publish(
          "setBrushSmoothingPrecision",
          parseInt(value)
        );
      }
    );
    const resetBrushSettingsButton = document.createElement("button");
    resetBrushSettingsButton.id = "resetBrushSettingsButton";
    resetBrushSettingsButton.innerText = t("maskEditor.Reset to Default");
    resetBrushSettingsButton.addEventListener("click", () => {
      this.messageBroker.publish("setBrushShape", BrushShape.Arc);
      this.messageBroker.publish("setBrushSize", 20);
      this.messageBroker.publish("setBrushOpacity", 1);
      this.messageBroker.publish("setBrushHardness", 1);
      this.messageBroker.publish("setBrushSmoothingPrecision", 60);
      circle_shape.style.background = "var(--p-button-text-primary-color)";
      square_shape.style.background = "";
      thicknesSliderObj.slider.value = "20";
      opacitySliderObj.slider.value = "1";
      hardnessSliderObj.slider.value = "1";
      brushSmoothingPrecisionSliderObj.slider.value = "60";
      this.setBrushBorderRadius();
      this.updateBrushPreview();
    });
    brush_settings_container.appendChild(brush_settings_title);
    brush_settings_container.appendChild(resetBrushSettingsButton);
    brush_settings_container.appendChild(brush_shape_outer_container);
    const color_picker_container = this.createContainer(true);
    const colorPickerTitle = document.createElement("span");
    colorPickerTitle.innerText = "Color Selector";
    colorPickerTitle.classList.add("maskEditor_sidePanelSubTitle");
    color_picker_container.appendChild(colorPickerTitle);
    const colorPicker = this.createColorPicker();
    color_picker_container.appendChild(colorPicker);
    brush_settings_container.appendChild(color_picker_container);
    brush_settings_container.appendChild(thicknesSliderObj.container);
    brush_settings_container.appendChild(opacitySliderObj.container);
    brush_settings_container.appendChild(hardnessSliderObj.container);
    brush_settings_container.appendChild(
      brushSmoothingPrecisionSliderObj.container
    );
    return brush_settings_container;
  }
  async createPaintBucketSettings() {
    const paint_bucket_settings_container = this.createContainer(true);
    const paint_bucket_settings_title = this.createHeadline(
      t("maskEditor.Paint Bucket Settings")
    );
    const tolerance = await this.messageBroker.pull("getTolerance");
    const paintBucketToleranceSliderObj = this.createSlider(
      t("maskEditor.Tolerance"),
      0,
      255,
      1,
      tolerance,
      (_, value) => {
        this.messageBroker.publish("setPaintBucketTolerance", parseInt(value));
      }
    );
    const fillOpacity = await this.messageBroker.pull("getFillOpacity") || 100;
    const fillOpacitySliderObj = this.createSlider(
      t("maskEditor.Fill Opacity"),
      0,
      100,
      1,
      fillOpacity,
      (_, value) => {
        this.messageBroker.publish("setFillOpacity", parseInt(value));
      }
    );
    paint_bucket_settings_container.appendChild(paint_bucket_settings_title);
    paint_bucket_settings_container.appendChild(
      paintBucketToleranceSliderObj.container
    );
    paint_bucket_settings_container.appendChild(fillOpacitySliderObj.container);
    return paint_bucket_settings_container;
  }
  async createColorSelectSettings() {
    const color_select_settings_container = this.createContainer(true);
    const color_select_settings_title = this.createHeadline(
      t("maskEditor.Color Select Settings")
    );
    var tolerance = await this.messageBroker.pull("getTolerance");
    const colorSelectToleranceSliderObj = this.createSlider(
      t("maskEditor.Tolerance"),
      0,
      255,
      1,
      tolerance,
      (_, value) => {
        this.messageBroker.publish("setColorSelectTolerance", parseInt(value));
      }
    );
    const selectionOpacitySliderObj = this.createSlider(
      t("maskEditor.Selection Opacity"),
      0,
      100,
      1,
      100,
      // Default to 100%
      (_, value) => {
        this.messageBroker.publish("setSelectionOpacity", parseInt(value));
      }
    );
    const livePreviewToggle = this.createToggle(
      t("maskEditor.Live Preview"),
      (_, value) => {
        this.messageBroker.publish("setLivePreview", value);
      }
    );
    const wholeImageToggle = this.createToggle(
      t("maskEditor.Apply to Whole Image"),
      (_, value) => {
        this.messageBroker.publish("setWholeImage", value);
      }
    );
    const methodOptions = Object.values(ColorComparisonMethod);
    const methodSelect = this.createDropdown(
      t("maskEditor.Method"),
      methodOptions,
      (_, value) => {
        this.messageBroker.publish("setColorComparisonMethod", value);
      }
    );
    const maskBoundaryToggle = this.createToggle(
      t("maskEditor.Stop at mask"),
      (_, value) => {
        this.messageBroker.publish("setMaskBoundary", value);
      }
    );
    const maskToleranceSliderObj = this.createSlider(
      t("maskEditor.Mask Tolerance"),
      0,
      255,
      1,
      0,
      (_, value) => {
        this.messageBroker.publish("setMaskTolerance", parseInt(value));
      }
    );
    color_select_settings_container.appendChild(color_select_settings_title);
    color_select_settings_container.appendChild(
      colorSelectToleranceSliderObj.container
    );
    color_select_settings_container.appendChild(
      selectionOpacitySliderObj.container
    );
    color_select_settings_container.appendChild(livePreviewToggle);
    color_select_settings_container.appendChild(wholeImageToggle);
    color_select_settings_container.appendChild(methodSelect);
    color_select_settings_container.appendChild(maskBoundaryToggle);
    color_select_settings_container.appendChild(
      maskToleranceSliderObj.container
    );
    return color_select_settings_container;
  }
  activeLayer = "mask";
  layerButtons = {
    mask: (() => {
      const btn = document.createElement("button");
      btn.style.fontSize = "12px";
      return btn;
    })(),
    rgb: (() => {
      const btn = document.createElement("button");
      btn.style.fontSize = "12px";
      return btn;
    })()
  };
  updateButtonsVisibility() {
    allImageLayers.forEach((layer) => {
      const button = this.layerButtons[layer];
      if (layer === this.activeLayer) {
        button.style.opacity = "0.5";
        button.disabled = true;
      } else {
        button.style.opacity = "1";
        button.disabled = false;
      }
    });
  }
  async updateLayerButtonsForTool() {
    const currentTool = await this.messageBroker.pull("currentTool");
    const isEraserTool = currentTool === Tools.Eraser;
    Object.values(this.layerButtons).forEach((button) => {
      if (isEraserTool) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }
  async setActiveLayer(layer) {
    this.messageBroker.publish("setActiveLayer", layer);
    this.activeLayer = layer;
    this.updateButtonsVisibility();
    const currentTool = await this.messageBroker.pull("currentTool");
    const maskOnlyTools = [Tools.MaskPen, Tools.MaskBucket, Tools.MaskColorFill];
    if (maskOnlyTools.includes(currentTool) && layer === "rgb") {
      this.setToolTo(Tools.PaintPen);
    }
    if (currentTool === Tools.PaintPen && layer === "mask") {
      this.setToolTo(Tools.MaskPen);
    }
    this.updateActiveLayerHighlight();
  }
  updateActiveLayerHighlight() {
    if (this.maskLayerContainer) {
      this.maskLayerContainer.style.border = "none";
    }
    if (this.paintLayerContainer) {
      this.paintLayerContainer.style.border = "none";
    }
    if (this.activeLayer === "mask" && this.maskLayerContainer) {
      this.maskLayerContainer.style.border = "2px solid #007acc";
    } else if (this.activeLayer === "rgb" && this.paintLayerContainer) {
      this.paintLayerContainer.style.border = "2px solid #007acc";
    }
  }
  async createImageLayerSettings() {
    const accentColor = this.darkMode ? "maskEditor_accent_bg_dark" : "maskEditor_accent_bg_light";
    const image_layer_settings_container = this.createContainer(true);
    const image_layer_settings_title = this.createHeadline(
      t("maskEditor.Layers")
    );
    const layer_selection_container = this.createContainer(false);
    layer_selection_container.classList.add(accentColor);
    layer_selection_container.classList.add("maskEditor_layerRow");
    this.layerButtons.mask.innerText = "Activate Layer";
    this.layerButtons.mask.addEventListener("click", async () => {
      this.setActiveLayer("mask");
    });
    this.layerButtons.rgb.innerText = "Activate Layer";
    this.layerButtons.rgb.addEventListener("click", async () => {
      this.setActiveLayer("rgb");
    });
    this.layerButtons.mask.style.display = "none";
    this.layerButtons.rgb.style.display = "none";
    this.setActiveLayer("mask");
    const mask_layer_title = this.createContainerTitle("Mask Layer");
    const mask_layer_container = this.createContainer(false);
    mask_layer_container.classList.add(accentColor);
    mask_layer_container.classList.add("maskEditor_layerRow");
    const mask_layer_visibility_checkbox = document.createElement("input");
    mask_layer_visibility_checkbox.setAttribute("type", "checkbox");
    mask_layer_visibility_checkbox.checked = true;
    mask_layer_visibility_checkbox.classList.add(
      "maskEditor_sidePanelLayerCheckbox"
    );
    mask_layer_visibility_checkbox.addEventListener("change", (event) => {
      if (!event.target.checked) {
        this.maskCanvas.style.opacity = "0";
      } else {
        this.maskCanvas.style.opacity = String(this.mask_opacity);
      }
    });
    var mask_layer_image_container = document.createElement("div");
    mask_layer_image_container.classList.add(
      "maskEditor_sidePanelLayerPreviewContainer"
    );
    mask_layer_image_container.innerHTML = '<svg viewBox="0 0 20 20" style="">   <path class="cls-1" d="M1.31,5.32v9.36c0,.55.45,1,1,1h15.38c.55,0,1-.45,1-1V5.32c0-.55-.45-1-1-1H2.31c-.55,0-1,.45-1,1ZM11.19,13.44c-2.91.94-5.57-1.72-4.63-4.63.34-1.05,1.19-1.9,2.24-2.24,2.91-.94,5.57,1.72,4.63,4.63-.34,1.05-1.19-1.9-2.24,2.24Z"/> </svg>';
    mask_layer_container.appendChild(mask_layer_visibility_checkbox);
    mask_layer_container.appendChild(mask_layer_image_container);
    mask_layer_container.appendChild(this.layerButtons.mask);
    this.maskLayerContainer = mask_layer_container;
    const mask_blending_options_title = this.createContainerTitle(
      "Mask Blending Options"
    );
    const mask_blending_options_container = this.createContainer(false);
    mask_blending_options_container.classList.add("maskEditor_layerRow");
    mask_blending_options_container.style.marginTop = "-9px";
    mask_blending_options_container.style.marginBottom = "-6px";
    var blending_options = ["black", "white", "negative"];
    const sidePanelDropdownAccent = this.darkMode ? "maskEditor_sidePanelDropdown_dark" : "maskEditor_sidePanelDropdown_light";
    var mask_layer_dropdown = document.createElement("select");
    mask_layer_dropdown.classList.add(sidePanelDropdownAccent);
    blending_options.forEach((option) => {
      var option_element = document.createElement("option");
      option_element.value = option;
      option_element.innerText = option;
      mask_layer_dropdown.appendChild(option_element);
      if (option == this.maskBlendMode) {
        option_element.selected = true;
      }
    });
    mask_layer_dropdown.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      this.maskBlendMode = selectedValue;
      this.updateMaskColor();
    });
    mask_blending_options_container.appendChild(mask_layer_dropdown);
    const mask_layer_opacity_sliderObj = this.createSlider(
      t("maskEditor.Mask Opacity"),
      0,
      1,
      0.01,
      this.mask_opacity,
      (_, value) => {
        this.mask_opacity = parseFloat(value);
        this.maskCanvas.style.opacity = String(this.mask_opacity);
        if (this.mask_opacity == 0) {
          mask_layer_visibility_checkbox.checked = false;
        } else {
          mask_layer_visibility_checkbox.checked = true;
        }
      }
    );
    this.maskOpacitySlider = mask_layer_opacity_sliderObj.slider;
    const paint_layer_title = this.createContainerTitle("Paint Layer");
    const paint_layer_container = this.createContainer(false);
    paint_layer_container.classList.add(accentColor);
    paint_layer_container.classList.add("maskEditor_layerRow");
    const paint_layer_checkbox = document.createElement("input");
    paint_layer_checkbox.setAttribute("type", "checkbox");
    paint_layer_checkbox.classList.add("maskEditor_sidePanelLayerCheckbox");
    paint_layer_checkbox.checked = true;
    paint_layer_checkbox.addEventListener("change", (event) => {
      if (!event.target.checked) {
        this.rgbCanvas.style.opacity = "0";
      } else {
        this.rgbCanvas.style.opacity = "1";
      }
    });
    const paint_layer_image_container = document.createElement("div");
    paint_layer_image_container.classList.add(
      "maskEditor_sidePanelLayerPreviewContainer"
    );
    paint_layer_image_container.innerHTML = `
      <svg viewBox="0 0 20 20">
        <path class="cls-1" d="M 17 6.965 c 0 0.235 -0.095 0.47 -0.275 0.655 l -6.51 6.52 c -0.045 0.035 -0.09 0.075 -0.135 0.11 c -0.035 -0.695 -0.605 -1.24 -1.305 -1.245 c 0.035 -0.06 0.08 -0.12 0.135 -0.17 l 6.52 -6.52 c 0.36 -0.36 0.945 -0.36 1.3 0 c 0.175 0.175 0.275 0.415 0.275 0.65 Z"/>
        <path class="cls-1" d="M 9.82 14.515 c 0 2.23 -3.23 1.59 -4.82 0 c 1.65 -0.235 2.375 -1.29 3.53 -1.29 c 0.715 0 1.29 0.58 1.29 1.29 Z"/>
      </svg>
    `;
    paint_layer_container.appendChild(paint_layer_checkbox);
    paint_layer_container.appendChild(paint_layer_image_container);
    paint_layer_container.appendChild(this.layerButtons.rgb);
    this.paintLayerContainer = paint_layer_container;
    const base_image_layer_title = this.createContainerTitle("Base Image Layer");
    const base_image_layer_container = this.createContainer(false);
    base_image_layer_container.classList.add(accentColor);
    base_image_layer_container.classList.add("maskEditor_layerRow");
    const base_image_layer_visibility_checkbox = document.createElement("input");
    base_image_layer_visibility_checkbox.setAttribute("type", "checkbox");
    base_image_layer_visibility_checkbox.classList.add(
      "maskEditor_sidePanelLayerCheckbox"
    );
    base_image_layer_visibility_checkbox.checked = true;
    base_image_layer_visibility_checkbox.addEventListener("change", (event) => {
      if (!event.target.checked) {
        this.imgCanvas.style.opacity = "0";
      } else {
        this.imgCanvas.style.opacity = "1";
      }
    });
    const base_image_layer_image_container = document.createElement("div");
    base_image_layer_image_container.classList.add(
      "maskEditor_sidePanelLayerPreviewContainer"
    );
    const base_image_layer_image = document.createElement("img");
    base_image_layer_image.id = "maskEditor_sidePanelImageLayerImage";
    base_image_layer_image.src = ComfyApp.clipspace?.imgs?.[ComfyApp.clipspace?.selectedIndex ?? 0]?.src ?? "";
    this.sidebarImage = base_image_layer_image;
    base_image_layer_image_container.appendChild(base_image_layer_image);
    base_image_layer_container.appendChild(base_image_layer_visibility_checkbox);
    base_image_layer_container.appendChild(base_image_layer_image_container);
    image_layer_settings_container.appendChild(image_layer_settings_title);
    image_layer_settings_container.appendChild(
      mask_layer_opacity_sliderObj.container
    );
    image_layer_settings_container.appendChild(mask_blending_options_title);
    image_layer_settings_container.appendChild(mask_blending_options_container);
    image_layer_settings_container.appendChild(mask_layer_title);
    image_layer_settings_container.appendChild(mask_layer_container);
    image_layer_settings_container.appendChild(paint_layer_title);
    image_layer_settings_container.appendChild(paint_layer_container);
    image_layer_settings_container.appendChild(base_image_layer_title);
    image_layer_settings_container.appendChild(base_image_layer_container);
    this.updateActiveLayerHighlight();
    this.updateLayerButtonsForTool();
    return image_layer_settings_container;
  }
  // Method to be called when tool changes
  async onToolChange() {
    await this.updateLayerButtonsForTool();
  }
  createHeadline(title) {
    var headline = document.createElement("h3");
    headline.classList.add("maskEditor_sidePanelTitle");
    headline.innerText = title;
    return headline;
  }
  createContainer(flexDirection) {
    var container = document.createElement("div");
    if (flexDirection) {
      container.classList.add("maskEditor_sidePanelContainerColumn");
    } else {
      container.classList.add("maskEditor_sidePanelContainerRow");
    }
    return container;
  }
  createContainerTitle(title) {
    var container_title = document.createElement("span");
    container_title.classList.add("maskEditor_sidePanelSubTitle");
    container_title.innerText = title;
    return container_title;
  }
  createSlider(title, min, max, step, value, callback) {
    var slider_container = this.createContainer(true);
    var slider_title = this.createContainerTitle(title);
    var slider = document.createElement("input");
    slider.classList.add("maskEditor_sidePanelBrushRange");
    slider.setAttribute("type", "range");
    slider.setAttribute("min", String(min));
    slider.setAttribute("max", String(max));
    slider.setAttribute("step", String(step));
    slider.setAttribute("value", String(value));
    slider.addEventListener("input", (event) => {
      callback(event, event.target.value);
    });
    slider_container.appendChild(slider_title);
    slider_container.appendChild(slider);
    return { container: slider_container, slider };
  }
  createToggle(title, callback) {
    var outer_Container = this.createContainer(false);
    var toggle_title = this.createContainerTitle(title);
    var toggle_container = document.createElement("label");
    toggle_container.classList.add("maskEditor_sidePanelToggleContainer");
    var toggle_checkbox = document.createElement("input");
    toggle_checkbox.setAttribute("type", "checkbox");
    toggle_checkbox.classList.add("maskEditor_sidePanelToggleCheckbox");
    toggle_checkbox.addEventListener("change", (event) => {
      callback(event, event.target.checked);
    });
    var toggleAccentColor = this.darkMode ? "maskEditor_toggle_bg_dark" : "maskEditor_toggle_bg_light";
    var toggle_switch = document.createElement("div");
    toggle_switch.classList.add("maskEditor_sidePanelToggleSwitch");
    toggle_switch.classList.add(toggleAccentColor);
    toggle_container.appendChild(toggle_checkbox);
    toggle_container.appendChild(toggle_switch);
    outer_Container.appendChild(toggle_title);
    outer_Container.appendChild(toggle_container);
    return outer_Container;
  }
  createDropdown(title, options, callback) {
    const sidePanelDropdownAccent = this.darkMode ? "maskEditor_sidePanelDropdown_dark" : "maskEditor_sidePanelDropdown_light";
    var dropdown_container = this.createContainer(false);
    var dropdown_title = this.createContainerTitle(title);
    var dropdown = document.createElement("select");
    dropdown.classList.add(sidePanelDropdownAccent);
    dropdown.classList.add("maskEditor_containerDropdown");
    options.forEach((option) => {
      var option_element = document.createElement("option");
      option_element.value = option;
      option_element.innerText = option;
      dropdown.appendChild(option_element);
    });
    dropdown.addEventListener("change", (event) => {
      callback(event, event.target.value);
    });
    dropdown_container.appendChild(dropdown_title);
    dropdown_container.appendChild(dropdown);
    return dropdown_container;
  }
  createSeparator() {
    var separator = document.createElement("div");
    separator.classList.add("maskEditor_sidePanelSeparator");
    return separator;
  }
  //----------------
  async createTopBar() {
    const buttonAccentColor = this.darkMode ? "maskEditor_topPanelButton_dark" : "maskEditor_topPanelButton_light";
    const iconButtonAccentColor = this.darkMode ? "maskEditor_topPanelIconButton_dark" : "maskEditor_topPanelIconButton_light";
    var top_bar = document.createElement("div");
    top_bar.id = "maskEditor_topBar";
    var top_bar_title_container = document.createElement("div");
    top_bar_title_container.id = "maskEditor_topBarTitleContainer";
    var top_bar_title = document.createElement("h1");
    top_bar_title.id = "maskEditor_topBarTitle";
    top_bar_title.innerText = "ComfyUI";
    top_bar_title_container.appendChild(top_bar_title);
    var top_bar_shortcuts_container = document.createElement("div");
    top_bar_shortcuts_container.id = "maskEditor_topBarShortcutsContainer";
    var top_bar_undo_button = document.createElement("div");
    top_bar_undo_button.id = "maskEditor_topBarUndoButton";
    top_bar_undo_button.classList.add(iconButtonAccentColor);
    top_bar_undo_button.innerHTML = '<svg viewBox="0 0 15 15"><path d="M8.77,12.18c-.25,0-.46-.2-.46-.46s.2-.46.46-.46c1.47,0,2.67-1.2,2.67-2.67,0-1.57-1.34-2.67-3.26-2.67h-3.98l1.43,1.43c.18.18.18.47,0,.64-.18.18-.47.18-.64,0l-2.21-2.21c-.18-.18-.18-.47,0-.64l2.21-2.21c.18-.18.47-.18.64,0,.18.18.18.47,0,.64l-1.43,1.43h3.98c2.45,0,4.17,1.47,4.17,3.58,0,1.97-1.61,3.58-3.58,3.58Z"></path> </svg>';
    top_bar_undo_button.addEventListener("click", () => {
      this.messageBroker.publish("undo");
    });
    var top_bar_redo_button = document.createElement("div");
    top_bar_redo_button.id = "maskEditor_topBarRedoButton";
    top_bar_redo_button.classList.add(iconButtonAccentColor);
    top_bar_redo_button.innerHTML = '<svg viewBox="0 0 15 15"> <path class="cls-1" d="M6.23,12.18c-1.97,0-3.58-1.61-3.58-3.58,0-2.11,1.71-3.58,4.17-3.58h3.98l-1.43-1.43c-.18-.18-.18-.47,0-.64.18-.18.46-.18.64,0l2.21,2.21c.09.09.13.2.13.32s-.05.24-.13.32l-2.21,2.21c-.18.18-.47.18-.64,0-.18-.18-.18-.47,0-.64l1.43-1.43h-3.98c-1.92,0-3.26,1.1-3.26,2.67,0,1.47,1.2,2.67,2.67,2.67.25,0,.46.2.46.46s-.2.46-.46.46Z"/></svg>';
    top_bar_redo_button.addEventListener("click", () => {
      this.messageBroker.publish("redo");
    });
    var top_bar_invert_button = document.createElement("button");
    top_bar_invert_button.id = "maskEditor_topBarInvertButton";
    top_bar_invert_button.classList.add(buttonAccentColor);
    top_bar_invert_button.innerText = t("maskEditor.Invert");
    top_bar_invert_button.addEventListener("click", () => {
      this.messageBroker.publish("invert");
    });
    var top_bar_clear_button = document.createElement("button");
    top_bar_clear_button.id = "maskEditor_topBarClearButton";
    top_bar_clear_button.classList.add(buttonAccentColor);
    top_bar_clear_button.innerText = t("maskEditor.Clear");
    top_bar_clear_button.addEventListener("click", () => {
      this.maskCtx.clearRect(
        0,
        0,
        this.maskCanvas.width,
        this.maskCanvas.height
      );
      this.rgbCtx.clearRect(0, 0, this.rgbCanvas.width, this.rgbCanvas.height);
      this.messageBroker.publish("saveState");
    });
    var top_bar_save_button = document.createElement("button");
    top_bar_save_button.id = "maskEditor_topBarSaveButton";
    top_bar_save_button.classList.add(buttonAccentColor);
    top_bar_save_button.innerText = t("g.save");
    this.saveButton = top_bar_save_button;
    top_bar_save_button.addEventListener("click", () => {
      this.maskEditor.save();
    });
    var top_bar_cancel_button = document.createElement("button");
    top_bar_cancel_button.id = "maskEditor_topBarCancelButton";
    top_bar_cancel_button.classList.add(buttonAccentColor);
    top_bar_cancel_button.innerText = t("g.cancel");
    top_bar_cancel_button.addEventListener("click", () => {
      this.maskEditor.destroy();
    });
    top_bar_shortcuts_container.appendChild(top_bar_undo_button);
    top_bar_shortcuts_container.appendChild(top_bar_redo_button);
    top_bar_shortcuts_container.appendChild(top_bar_invert_button);
    top_bar_shortcuts_container.appendChild(top_bar_clear_button);
    top_bar_shortcuts_container.appendChild(top_bar_save_button);
    top_bar_shortcuts_container.appendChild(top_bar_cancel_button);
    top_bar.appendChild(top_bar_title_container);
    top_bar.appendChild(top_bar_shortcuts_container);
    return top_bar;
  }
  toolElements = [];
  toolSettings = {
    [Tools.MaskPen]: {
      container: document.createElement("div"),
      newActiveLayerOnSet: "mask"
    },
    [Tools.Eraser]: {
      container: document.createElement("div")
    },
    [Tools.PaintPen]: {
      container: document.createElement("div"),
      newActiveLayerOnSet: "rgb"
    },
    [Tools.MaskBucket]: {
      container: document.createElement("div"),
      cursor: "url('/cursor/paintBucket.png') 30 25, auto",
      newActiveLayerOnSet: "mask"
    },
    [Tools.MaskColorFill]: {
      container: document.createElement("div"),
      cursor: "url('/cursor/colorSelect.png') 15 25, auto",
      newActiveLayerOnSet: "mask"
    }
  };
  setToolTo(tool) {
    this.messageBroker.publish("setTool", tool);
    for (let toolElement of this.toolElements) {
      if (toolElement != this.toolSettings[tool].container) {
        toolElement.classList.remove("maskEditor_toolPanelContainerSelected");
      } else {
        toolElement.classList.add("maskEditor_toolPanelContainerSelected");
        this.brushSettingsHTML.style.display = "flex";
        this.colorSelectSettingsHTML.style.display = "none";
        this.paintBucketSettingsHTML.style.display = "none";
      }
    }
    if (tool === Tools.MaskColorFill) {
      this.brushSettingsHTML.style.display = "none";
      this.colorSelectSettingsHTML.style.display = "flex";
      this.paintBucketSettingsHTML.style.display = "none";
    } else if (tool === Tools.MaskBucket) {
      this.brushSettingsHTML.style.display = "none";
      this.colorSelectSettingsHTML.style.display = "none";
      this.paintBucketSettingsHTML.style.display = "flex";
    } else {
      this.brushSettingsHTML.style.display = "flex";
      this.colorSelectSettingsHTML.style.display = "none";
      this.paintBucketSettingsHTML.style.display = "none";
    }
    this.messageBroker.publish("setTool", tool);
    this.onToolChange();
    const newActiveLayer = this.toolSettings[tool].newActiveLayerOnSet;
    if (newActiveLayer) {
      this.setActiveLayer(newActiveLayer);
    }
    const cursor = this.toolSettings[tool].cursor;
    this.pointerZone.style.cursor = cursor ?? "none";
    if (cursor) {
      this.brush.style.opacity = "0";
    }
  }
  createToolPanel() {
    var tool_panel = document.createElement("div");
    tool_panel.id = "maskEditor_toolPanel";
    this.toolPanel = tool_panel;
    var toolPanelHoverAccent = this.darkMode ? "maskEditor_toolPanelContainerDark" : "maskEditor_toolPanelContainerLight";
    this.toolElements = [];
    const setupToolContainer = /* @__PURE__ */ __name((tool) => {
      this.toolSettings[tool].container = document.createElement("div");
      this.toolSettings[tool].container.classList.add(
        "maskEditor_toolPanelContainer"
      );
      if (tool == Tools.MaskPen)
        this.toolSettings[tool].container.classList.add(
          "maskEditor_toolPanelContainerSelected"
        );
      this.toolSettings[tool].container.classList.add(toolPanelHoverAccent);
      this.toolSettings[tool].container.innerHTML = iconsHtml[tool];
      this.toolElements.push(this.toolSettings[tool].container);
      this.toolSettings[tool].container.addEventListener("click", () => {
        this.setToolTo(tool);
      });
      const activeIndicator = document.createElement("div");
      activeIndicator.classList.add("maskEditor_toolPanelIndicator");
      this.toolSettings[tool].container.appendChild(activeIndicator);
      tool_panel.appendChild(this.toolSettings[tool].container);
    }, "setupToolContainer");
    allTools.forEach(setupToolContainer);
    const setupZoomIndicatorContainer = /* @__PURE__ */ __name(() => {
      var toolPanel_zoomIndicator = document.createElement("div");
      toolPanel_zoomIndicator.classList.add("maskEditor_toolPanelZoomIndicator");
      toolPanel_zoomIndicator.classList.add(toolPanelHoverAccent);
      var toolPanel_zoomText = document.createElement("span");
      toolPanel_zoomText.id = "maskEditor_toolPanelZoomText";
      toolPanel_zoomText.innerText = "100%";
      this.zoomTextHTML = toolPanel_zoomText;
      var toolPanel_DimensionsText = document.createElement("span");
      toolPanel_DimensionsText.id = "maskEditor_toolPanelDimensionsText";
      toolPanel_DimensionsText.innerText = " ";
      this.dimensionsTextHTML = toolPanel_DimensionsText;
      toolPanel_zoomIndicator.appendChild(toolPanel_zoomText);
      toolPanel_zoomIndicator.appendChild(toolPanel_DimensionsText);
      toolPanel_zoomIndicator.addEventListener("click", () => {
        this.messageBroker.publish("resetZoom");
      });
      tool_panel.appendChild(toolPanel_zoomIndicator);
    }, "setupZoomIndicatorContainer");
    setupZoomIndicatorContainer();
    return tool_panel;
  }
  createPointerZone() {
    const pointer_zone = document.createElement("div");
    pointer_zone.id = "maskEditor_pointerZone";
    this.pointerZone = pointer_zone;
    pointer_zone.addEventListener("pointerdown", (event) => {
      this.messageBroker.publish("pointerDown", event);
    });
    pointer_zone.addEventListener("pointermove", (event) => {
      this.messageBroker.publish("pointerMove", event);
    });
    pointer_zone.addEventListener("pointerup", (event) => {
      this.messageBroker.publish("pointerUp", event);
    });
    pointer_zone.addEventListener("pointerleave", () => {
      this.brush.style.opacity = "0";
      this.pointerZone.style.cursor = "";
    });
    pointer_zone.addEventListener("touchstart", (event) => {
      this.messageBroker.publish("handleTouchStart", event);
    });
    pointer_zone.addEventListener("touchmove", (event) => {
      this.messageBroker.publish("handleTouchMove", event);
    });
    pointer_zone.addEventListener("touchend", (event) => {
      this.messageBroker.publish("handleTouchEnd", event);
    });
    pointer_zone.addEventListener(
      "wheel",
      (event) => this.messageBroker.publish("wheel", event)
    );
    pointer_zone.addEventListener("pointerenter", async () => {
      this.updateCursor();
    });
    return pointer_zone;
  }
  async screenToCanvas(clientPoint) {
    const zoomRatio = await this.messageBroker.pull("zoomRatio");
    const maskCanvasRect = this.maskCanvas.getBoundingClientRect();
    const rgbCanvasRect = this.rgbCanvas.getBoundingClientRect();
    const currentTool = await this.messageBroker.pull("currentTool");
    const isUsingRGBCanvas = currentTool === Tools.PaintPen;
    const canvasRect = isUsingRGBCanvas ? rgbCanvasRect : maskCanvasRect;
    const offsetX = clientPoint.x - canvasRect.left + this.toolPanel.clientWidth;
    const offsetY = clientPoint.y - canvasRect.top + 44;
    const x = offsetX / zoomRatio;
    const y = offsetY / zoomRatio;
    return { x, y };
  }
  setEventHandler() {
    this.maskCanvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    this.rgbCanvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    this.rootElement.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    this.rootElement.addEventListener("dragstart", (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    });
  }
  async createBrush() {
    var brush = document.createElement("div");
    await this.messageBroker.pull("brushSettings");
    brush.id = "maskEditor_brush";
    var brush_preview_gradient = document.createElement("div");
    brush_preview_gradient.id = "maskEditor_brushPreviewGradient";
    brush.appendChild(brush_preview_gradient);
    this.brush = brush;
    this.brushPreviewGradient = brush_preview_gradient;
    return brush;
  }
  async setImages(imgCanvas) {
    const imgCtx = imgCanvas.getContext("2d", { willReadFrequently: true });
    const maskCtx = this.maskCtx;
    const maskCanvas = this.maskCanvas;
    const rgbCanvas = this.rgbCanvas;
    imgCtx.clearRect(0, 0, this.imgCanvas.width, this.imgCanvas.height);
    maskCtx.clearRect(0, 0, this.maskCanvas.width, this.maskCanvas.height);
    const mainImageUrl = ComfyApp.clipspace?.imgs?.[ComfyApp.clipspace?.selectedIndex ?? 0]?.src;
    if (!mainImageUrl) {
      throw new Error(
        "Unable to access image source - clipspace or image is null"
      );
    }
    const mainImageFilename = new URL(mainImageUrl).searchParams.get("filename") ?? void 0;
    let combinedImageFilename;
    if (ComfyApp.clipspace?.combinedIndex !== void 0 && ComfyApp.clipspace?.imgs && ComfyApp.clipspace.combinedIndex < ComfyApp.clipspace.imgs.length && ComfyApp.clipspace.imgs[ComfyApp.clipspace.combinedIndex]?.src) {
      combinedImageFilename = new URL(
        ComfyApp.clipspace.imgs[ComfyApp.clipspace.combinedIndex].src
      ).searchParams.get("filename");
    } else {
      combinedImageFilename = void 0;
    }
    const imageLayerFilenames = mainImageFilename !== void 0 ? imageLayerFilenamesIfApplicable(
      combinedImageFilename ?? mainImageFilename
    ) : void 0;
    const inputUrls = {
      baseImagePlusMask: imageLayerFilenames?.maskedImage ? mkFileUrl({ ref: toRef(imageLayerFilenames.maskedImage) }) : mainImageUrl,
      paintLayer: imageLayerFilenames?.paint ? mkFileUrl({ ref: toRef(imageLayerFilenames.paint) }) : void 0
    };
    const alpha_url = new URL(inputUrls.baseImagePlusMask);
    alpha_url.searchParams.delete("channel");
    alpha_url.searchParams.delete("preview");
    alpha_url.searchParams.set("channel", "a");
    let mask_image = await this.loadImage(alpha_url);
    const rgb_url = new URL(inputUrls.baseImagePlusMask);
    this.imageURL = rgb_url;
    rgb_url.searchParams.delete("channel");
    rgb_url.searchParams.set("channel", "rgb");
    this.image = new Image();
    this.image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = rgb_url.toString();
    });
    if (inputUrls.paintLayer) {
      const paintURL = new URL(inputUrls.paintLayer);
      this.paint_image = new Image();
      this.paint_image = await new Promise(
        (resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = paintURL.toString();
        }
      );
    }
    maskCanvas.width = this.image.width;
    maskCanvas.height = this.image.height;
    rgbCanvas.width = this.image.width;
    rgbCanvas.height = this.image.height;
    this.dimensionsTextHTML.innerText = `${this.image.width}x${this.image.height}`;
    await this.invalidateCanvas(this.image, mask_image, this.paint_image);
    this.messageBroker.publish("initZoomPan", [this.image, this.rootElement]);
  }
  async invalidateCanvas(orig_image, mask_image, paint_image) {
    this.imgCanvas.width = orig_image.width;
    this.imgCanvas.height = orig_image.height;
    this.maskCanvas.width = orig_image.width;
    this.maskCanvas.height = orig_image.height;
    this.rgbCanvas.width = orig_image.width;
    this.rgbCanvas.height = orig_image.height;
    let imgCtx = this.imgCanvas.getContext("2d", { willReadFrequently: true });
    let maskCtx = this.maskCanvas.getContext("2d", {
      willReadFrequently: true
    });
    let rgbCtx = this.rgbCanvas.getContext("2d", {
      willReadFrequently: true
    });
    imgCtx.drawImage(orig_image, 0, 0, orig_image.width, orig_image.height);
    if (paint_image) {
      rgbCtx.drawImage(
        paint_image,
        0,
        0,
        paint_image.width,
        paint_image.height
      );
    }
    await this.prepare_mask(
      mask_image,
      this.maskCanvas,
      maskCtx,
      await this.getMaskColor()
    );
  }
  async prepare_mask(image, maskCanvas, maskCtx, maskColor) {
    maskCtx.drawImage(image, 0, 0, maskCanvas.width, maskCanvas.height);
    const maskData = maskCtx.getImageData(
      0,
      0,
      maskCanvas.width,
      maskCanvas.height
    );
    for (let i = 0; i < maskData.data.length; i += 4) {
      const alpha = maskData.data[i + 3];
      maskData.data[i] = maskColor.r;
      maskData.data[i + 1] = maskColor.g;
      maskData.data[i + 2] = maskColor.b;
      maskData.data[i + 3] = 255 - alpha;
    }
    maskCtx.globalCompositeOperation = "source-over";
    maskCtx.putImageData(maskData, 0, 0);
  }
  async updateMaskColor() {
    const maskCanvasStyle = this.getMaskCanvasStyle();
    this.maskCanvas.style.mixBlendMode = maskCanvasStyle.mixBlendMode;
    this.maskCanvas.style.opacity = maskCanvasStyle.opacity.toString();
    const maskColor = await this.getMaskColor();
    this.maskCtx.fillStyle = `rgb(${maskColor.r}, ${maskColor.g}, ${maskColor.b})`;
    this.setCanvasBackground();
    const maskData = this.maskCtx.getImageData(
      0,
      0,
      this.maskCanvas.width,
      this.maskCanvas.height
    );
    for (let i = 0; i < maskData.data.length; i += 4) {
      maskData.data[i] = maskColor.r;
      maskData.data[i + 1] = maskColor.g;
      maskData.data[i + 2] = maskColor.b;
    }
    this.maskCtx.putImageData(maskData, 0, 0);
  }
  getMaskCanvasStyle() {
    if (this.maskBlendMode === MaskBlendMode.Negative) {
      return {
        mixBlendMode: "difference",
        opacity: "1"
      };
    } else {
      return {
        mixBlendMode: "initial",
        opacity: this.mask_opacity
      };
    }
  }
  detectLightMode() {
    this.darkMode = document.body.classList.contains("dark-theme");
  }
  loadImage(imagePath) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = function() {
        resolve(image);
      };
      image.onerror = function(error) {
        reject(error);
      };
      image.src = imagePath.href;
    });
  }
  async updateBrushPreview() {
    const cursorPoint = await this.messageBroker.pull("cursorPoint");
    const pan_offset = await this.messageBroker.pull("panOffset");
    const brushSettings = await this.messageBroker.pull("brushSettings");
    const zoom_ratio = await this.messageBroker.pull("zoomRatio");
    const centerX = cursorPoint.x + pan_offset.x;
    const centerY = cursorPoint.y + pan_offset.y;
    const brush = this.brush;
    const hardness = brushSettings.hardness;
    const brushRadius = brushSettings.size * zoom_ratio;
    const previewSize = brushRadius * 2;
    this.brushSizeSlider.value = String(brushSettings.size);
    this.brushHardnessSlider.value = String(hardness);
    brush.style.width = previewSize + "px";
    brush.style.height = previewSize + "px";
    brush.style.left = centerX - brushRadius + "px";
    brush.style.top = centerY - brushRadius + "px";
    if (hardness === 1) {
      this.brushPreviewGradient.style.background = "rgba(255, 0, 0, 0.5)";
      return;
    }
    const midStop = hardness * 100;
    const outerStop = 100;
    this.brushPreviewGradient.style.background = `
      radial-gradient(
        circle,
        rgba(255, 0, 0, 0.5) 0%,
        rgba(255, 0, 0, 0.25) ${midStop}%,
        rgba(255, 0, 0, 0) ${outerStop}%
      )
    `;
  }
  getMaskBlendMode() {
    return this.maskBlendMode;
  }
  setSidebarImage() {
    this.sidebarImage.src = this.imageURL.href;
  }
  async getMaskColor() {
    if (this.maskBlendMode === MaskBlendMode.Black) {
      return { r: 0, g: 0, b: 0 };
    }
    if (this.maskBlendMode === MaskBlendMode.White) {
      return { r: 255, g: 255, b: 255 };
    }
    if (this.maskBlendMode === MaskBlendMode.Negative) {
      return { r: 255, g: 255, b: 255 };
    }
    return { r: 0, g: 0, b: 0 };
  }
  async getMaskFillStyle() {
    const maskColor = await this.getMaskColor();
    return "rgb(" + maskColor.r + "," + maskColor.g + "," + maskColor.b + ")";
  }
  async setCanvasBackground() {
    if (this.maskBlendMode === MaskBlendMode.White) {
      this.canvasBackground.style.background = "black";
    } else {
      this.canvasBackground.style.background = "white";
    }
  }
  getMaskCanvas() {
    return this.maskCanvas;
  }
  getImgCanvas() {
    return this.imgCanvas;
  }
  getRgbCanvas() {
    return this.rgbCanvas;
  }
  getImage() {
    return this.image;
  }
  setBrushOpacity(opacity) {
    this.brush.style.opacity = String(opacity);
  }
  setSaveButtonEnabled(enabled) {
    this.saveButton.disabled = !enabled;
  }
  setSaveButtonText(text) {
    this.saveButton.innerText = text;
  }
  handlePaintBucketCursor(isPaintBucket) {
    if (isPaintBucket) {
      this.pointerZone.style.cursor = "url('/cursor/paintBucket.png') 30 25, auto";
    } else {
      this.pointerZone.style.cursor = "none";
    }
  }
  handlePanCursor(isPanning) {
    if (isPanning) {
      this.pointerZone.style.cursor = "grabbing";
    } else {
      this.pointerZone.style.cursor = "none";
    }
  }
  setBrushVisibility(visible) {
    this.brush.style.opacity = visible ? "1" : "0";
  }
  setBrushPreviewGradientVisibility(visible) {
    this.brushPreviewGradient.style.display = visible ? "block" : "none";
  }
  async updateCursor() {
    const currentTool = await this.messageBroker.pull("currentTool");
    if (currentTool === Tools.MaskBucket) {
      this.pointerZone.style.cursor = "url('/cursor/paintBucket.png') 30 25, auto";
      this.setBrushOpacity(0);
    } else if (currentTool === Tools.MaskColorFill) {
      this.pointerZone.style.cursor = "url('/cursor/colorSelect.png') 15 25, auto";
      this.setBrushOpacity(0);
    } else {
      this.pointerZone.style.cursor = "none";
      this.setBrushOpacity(1);
    }
    this.updateBrushPreview();
    this.setBrushPreviewGradientVisibility(false);
  }
  setZoomText(zoomText) {
    this.zoomTextHTML.innerText = zoomText;
  }
  setDimensionsText(dimensionsText) {
    this.dimensionsTextHTML.innerText = dimensionsText;
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.UIManager = window.comfyAPI.UIManager || {};
window.comfyAPI.UIManager.UIManager = UIManager;
class ToolManager {
  static {
    __name(this, "ToolManager");
  }
  maskEditor;
  messageBroker;
  mouseDownPoint = null;
  currentTool = Tools.MaskPen;
  isAdjustingBrush = false;
  // is user adjusting brush size or hardness with alt + right mouse button
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.addListeners();
    this.addPullTopics();
  }
  addListeners() {
    this.messageBroker.subscribe("setTool", async (tool) => {
      this.setTool(tool);
    });
    this.messageBroker.subscribe("pointerDown", async (event) => {
      this.handlePointerDown(event);
    });
    this.messageBroker.subscribe("pointerMove", async (event) => {
      this.handlePointerMove(event);
    });
    this.messageBroker.subscribe("pointerUp", async (event) => {
      this.handlePointerUp(event);
    });
    this.messageBroker.subscribe("wheel", async (event) => {
      this.handleWheelEvent(event);
    });
  }
  async addPullTopics() {
    this.messageBroker.createPullTopic(
      "currentTool",
      async () => this.getCurrentTool()
    );
  }
  //tools
  setTool(tool) {
    this.currentTool = tool;
    if (tool != Tools.MaskColorFill) {
      this.messageBroker.publish("clearLastPoint");
    }
  }
  getCurrentTool() {
    return this.currentTool;
  }
  async handlePointerDown(event) {
    event.preventDefault();
    if (event.pointerType == "touch") return;
    var isSpacePressed = await this.messageBroker.pull("isKeyPressed", " ");
    if (event.buttons === 4 || event.buttons === 1 && isSpacePressed) {
      this.messageBroker.publish("panStart", event);
      this.messageBroker.publish("setBrushVisibility", false);
      return;
    }
    if (this.currentTool === Tools.PaintPen && event.button === 0) {
      this.messageBroker.publish("drawStart", event);
      this.messageBroker.publish("saveState");
      return;
    }
    if (this.currentTool === Tools.PaintPen && event.buttons === 1) {
      this.messageBroker.publish("draw", event);
      return;
    }
    if (this.currentTool === Tools.MaskBucket && event.button === 0) {
      const offset = { x: event.offsetX, y: event.offsetY };
      const coords_canvas = await this.messageBroker.pull(
        "screenToCanvas",
        offset
      );
      this.messageBroker.publish("paintBucketFill", coords_canvas);
      this.messageBroker.publish("saveState");
      return;
    }
    if (this.currentTool === Tools.MaskColorFill && event.button === 0) {
      const offset = { x: event.offsetX, y: event.offsetY };
      const coords_canvas = await this.messageBroker.pull(
        "screenToCanvas",
        offset
      );
      this.messageBroker.publish("colorSelectFill", coords_canvas);
      return;
    }
    if (event.altKey && event.button === 2) {
      this.isAdjustingBrush = true;
      this.messageBroker.publish("brushAdjustmentStart", event);
      return;
    }
    var isDrawingTool = [Tools.MaskPen, Tools.Eraser, Tools.PaintPen].includes(
      this.currentTool
    );
    if ([0, 2].includes(event.button) && isDrawingTool) {
      this.messageBroker.publish("drawStart", event);
      return;
    }
  }
  async handlePointerMove(event) {
    event.preventDefault();
    if (event.pointerType == "touch") return;
    const newCursorPoint = { x: event.clientX, y: event.clientY };
    this.messageBroker.publish("cursorPoint", newCursorPoint);
    var isSpacePressed = await this.messageBroker.pull("isKeyPressed", " ");
    this.messageBroker.publish("updateBrushPreview");
    if (event.buttons === 4 || event.buttons === 1 && isSpacePressed) {
      this.messageBroker.publish("panMove", event);
      return;
    }
    var isDrawingTool = [Tools.MaskPen, Tools.Eraser, Tools.PaintPen].includes(
      this.currentTool
    );
    if (!isDrawingTool) return;
    if (this.isAdjustingBrush && (this.currentTool === Tools.MaskPen || this.currentTool === Tools.Eraser) && event.altKey && event.buttons === 2) {
      this.messageBroker.publish("brushAdjustment", event);
      return;
    }
    if (event.buttons == 1 || event.buttons == 2) {
      this.messageBroker.publish("draw", event);
      return;
    }
  }
  handlePointerUp(event) {
    this.messageBroker.publish("panCursor", false);
    if (event.pointerType === "touch") return;
    this.messageBroker.publish("updateCursor");
    this.isAdjustingBrush = false;
    this.messageBroker.publish("drawEnd", event);
    this.mouseDownPoint = null;
  }
  handleWheelEvent(event) {
    this.messageBroker.publish("zoom", event);
    const newCursorPoint = { x: event.clientX, y: event.clientY };
    this.messageBroker.publish("cursorPoint", newCursorPoint);
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.ToolManager = window.comfyAPI.ToolManager || {};
window.comfyAPI.ToolManager.ToolManager = ToolManager;
class PanAndZoomManager {
  static {
    __name(this, "PanAndZoomManager");
  }
  maskEditor;
  messageBroker;
  DOUBLE_TAP_DELAY = 300;
  lastTwoFingerTap = 0;
  isTouchZooming = false;
  lastTouchZoomDistance = 0;
  lastTouchMidPoint = { x: 0, y: 0 };
  lastTouchPoint = { x: 0, y: 0 };
  zoom_ratio = 1;
  interpolatedZoomRatio = 1;
  pan_offset = { x: 0, y: 0 };
  mouseDownPoint = null;
  initialPan = { x: 0, y: 0 };
  canvasContainer = null;
  maskCanvas = null;
  rgbCanvas = null;
  rootElement = null;
  image = null;
  imageRootWidth = 0;
  imageRootHeight = 0;
  cursorPoint = { x: 0, y: 0 };
  penPointerIdList = [];
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.addListeners();
    this.addPullTopics();
  }
  addListeners() {
    this.messageBroker.subscribe(
      "initZoomPan",
      async (args) => {
        await this.initializeCanvasPanZoom(args[0], args[1]);
      }
    );
    this.messageBroker.subscribe("panStart", async (event) => {
      this.handlePanStart(event);
    });
    this.messageBroker.subscribe("panMove", async (event) => {
      this.handlePanMove(event);
    });
    this.messageBroker.subscribe("zoom", async (event) => {
      this.zoom(event);
    });
    this.messageBroker.subscribe("cursorPoint", async (point) => {
      this.updateCursorPosition(point);
    });
    this.messageBroker.subscribe("pointerDown", async (event) => {
      if (event.pointerType === "pen")
        this.penPointerIdList.push(event.pointerId);
    });
    this.messageBroker.subscribe("pointerUp", async (event) => {
      if (event.pointerType === "pen") {
        const index = this.penPointerIdList.indexOf(event.pointerId);
        if (index > -1) this.penPointerIdList.splice(index, 1);
      }
    });
    this.messageBroker.subscribe(
      "handleTouchStart",
      async (event) => {
        this.handleTouchStart(event);
      }
    );
    this.messageBroker.subscribe(
      "handleTouchMove",
      async (event) => {
        this.handleTouchMove(event);
      }
    );
    this.messageBroker.subscribe(
      "handleTouchEnd",
      async (event) => {
        this.handleTouchEnd(event);
      }
    );
    this.messageBroker.subscribe("resetZoom", async () => {
      if (this.interpolatedZoomRatio === 1) return;
      await this.smoothResetView();
    });
  }
  addPullTopics() {
    this.messageBroker.createPullTopic(
      "cursorPoint",
      async () => this.cursorPoint
    );
    this.messageBroker.createPullTopic("zoomRatio", async () => this.zoom_ratio);
    this.messageBroker.createPullTopic("panOffset", async () => this.pan_offset);
  }
  handleTouchStart(event) {
    event.preventDefault();
    if (this.penPointerIdList.length > 0) return;
    this.messageBroker.publish("setBrushVisibility", false);
    if (event.touches.length === 2) {
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      const tapTimeDiff = currentTime - this.lastTwoFingerTap;
      if (tapTimeDiff < this.DOUBLE_TAP_DELAY) {
        this.handleDoubleTap();
        this.lastTwoFingerTap = 0;
      } else {
        this.lastTwoFingerTap = currentTime;
        this.isTouchZooming = true;
        this.lastTouchZoomDistance = this.getTouchDistance(event.touches);
        const midpoint = this.getTouchMidpoint(event.touches);
        this.lastTouchMidPoint = midpoint;
      }
    } else if (event.touches.length === 1) {
      this.lastTouchPoint = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    }
  }
  async handleTouchMove(event) {
    event.preventDefault();
    if (this.penPointerIdList.length > 0) return;
    this.lastTwoFingerTap = 0;
    if (this.isTouchZooming && event.touches.length === 2) {
      const newDistance = this.getTouchDistance(event.touches);
      const zoomFactor = newDistance / this.lastTouchZoomDistance;
      const oldZoom = this.zoom_ratio;
      this.zoom_ratio = Math.max(
        0.2,
        Math.min(10, this.zoom_ratio * zoomFactor)
      );
      const newZoom = this.zoom_ratio;
      const midpoint = this.getTouchMidpoint(event.touches);
      if (this.lastTouchMidPoint) {
        const deltaX = midpoint.x - this.lastTouchMidPoint.x;
        const deltaY = midpoint.y - this.lastTouchMidPoint.y;
        this.pan_offset.x += deltaX;
        this.pan_offset.y += deltaY;
      }
      if (this.maskCanvas === null) {
        this.maskCanvas = await this.messageBroker.pull("maskCanvas");
      }
      const rect = this.maskCanvas.getBoundingClientRect();
      const touchX = midpoint.x - rect.left;
      const touchY = midpoint.y - rect.top;
      const scaleFactor = newZoom / oldZoom;
      this.pan_offset.x += touchX - touchX * scaleFactor;
      this.pan_offset.y += touchY - touchY * scaleFactor;
      this.invalidatePanZoom();
      this.lastTouchZoomDistance = newDistance;
      this.lastTouchMidPoint = midpoint;
    } else if (event.touches.length === 1) {
      this.handleSingleTouchPan(event.touches[0]);
    }
  }
  handleTouchEnd(event) {
    event.preventDefault();
    const lastTouch = event.touches[0];
    if (lastTouch) {
      this.lastTouchPoint = {
        x: lastTouch.clientX,
        y: lastTouch.clientY
      };
    } else {
      this.isTouchZooming = false;
      this.lastTouchMidPoint = { x: 0, y: 0 };
    }
  }
  getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  getTouchMidpoint(touches) {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2
    };
  }
  async handleSingleTouchPan(touch) {
    if (this.lastTouchPoint === null) {
      this.lastTouchPoint = { x: touch.clientX, y: touch.clientY };
      return;
    }
    const deltaX = touch.clientX - this.lastTouchPoint.x;
    const deltaY = touch.clientY - this.lastTouchPoint.y;
    this.pan_offset.x += deltaX;
    this.pan_offset.y += deltaY;
    await this.invalidatePanZoom();
    this.lastTouchPoint = { x: touch.clientX, y: touch.clientY };
  }
  updateCursorPosition(clientPoint) {
    var cursorX = clientPoint.x - this.pan_offset.x;
    var cursorY = clientPoint.y - this.pan_offset.y;
    this.cursorPoint = { x: cursorX, y: cursorY };
  }
  //prob redundant
  handleDoubleTap() {
    this.messageBroker.publish("undo");
  }
  async zoom(event) {
    const cursorPoint = { x: event.clientX, y: event.clientY };
    const oldZoom = this.zoom_ratio;
    const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9;
    this.zoom_ratio = Math.max(
      0.2,
      Math.min(10, this.zoom_ratio * zoomFactor)
    );
    const newZoom = this.zoom_ratio;
    const maskCanvas = await this.messageBroker.pull("maskCanvas");
    const rect = maskCanvas.getBoundingClientRect();
    const mouseX = cursorPoint.x - rect.left;
    const mouseY = cursorPoint.y - rect.top;
    console.log(oldZoom, newZoom);
    const scaleFactor = newZoom / oldZoom;
    this.pan_offset.x += mouseX - mouseX * scaleFactor;
    this.pan_offset.y += mouseY - mouseY * scaleFactor;
    await this.invalidatePanZoom();
    const newImageWidth = maskCanvas.clientWidth;
    const zoomRatio = newImageWidth / this.imageRootWidth;
    this.interpolatedZoomRatio = zoomRatio;
    this.messageBroker.publish("setZoomText", `${Math.round(zoomRatio * 100)}%`);
    this.updateCursorPosition(cursorPoint);
    requestAnimationFrame(() => {
      this.messageBroker.publish("updateBrushPreview");
    });
  }
  async smoothResetView(duration = 500) {
    const startZoom = this.zoom_ratio;
    const startPan = { ...this.pan_offset };
    const sidePanelWidth = 220;
    const toolPanelWidth = 64;
    const topBarHeight = 44;
    const availableWidth = this.rootElement.clientWidth - sidePanelWidth - toolPanelWidth;
    const availableHeight = this.rootElement.clientHeight - topBarHeight;
    const zoomRatioWidth = availableWidth / this.image.width;
    const zoomRatioHeight = availableHeight / this.image.height;
    const targetZoom = Math.min(zoomRatioWidth, zoomRatioHeight);
    const aspectRatio = this.image.width / this.image.height;
    let finalWidth = 0;
    let finalHeight = 0;
    const targetPan = { x: toolPanelWidth, y: topBarHeight };
    if (zoomRatioHeight > zoomRatioWidth) {
      finalWidth = availableWidth;
      finalHeight = finalWidth / aspectRatio;
      targetPan.y = (availableHeight - finalHeight) / 2 + topBarHeight;
    } else {
      finalHeight = availableHeight;
      finalWidth = finalHeight * aspectRatio;
      targetPan.x = (availableWidth - finalWidth) / 2 + toolPanelWidth;
    }
    const startTime = performance.now();
    const animate = /* @__PURE__ */ __name((currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentZoom = startZoom + (targetZoom - startZoom) * eased;
      this.zoom_ratio = currentZoom;
      this.pan_offset.x = startPan.x + (targetPan.x - startPan.x) * eased;
      this.pan_offset.y = startPan.y + (targetPan.y - startPan.y) * eased;
      this.invalidatePanZoom();
      const interpolatedZoomRatio = startZoom + (1 - startZoom) * eased;
      this.messageBroker.publish(
        "setZoomText",
        `${Math.round(interpolatedZoomRatio * 100)}%`
      );
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }, "animate");
    requestAnimationFrame(animate);
    this.interpolatedZoomRatio = 1;
  }
  async initializeCanvasPanZoom(image, rootElement) {
    let sidePanelWidth = 220;
    const toolPanelWidth = 64;
    let topBarHeight = 44;
    this.rootElement = rootElement;
    let availableWidth = rootElement.clientWidth - sidePanelWidth - toolPanelWidth;
    let availableHeight = rootElement.clientHeight - topBarHeight;
    let zoomRatioWidth = availableWidth / image.width;
    let zoomRatioHeight = availableHeight / image.height;
    let aspectRatio = image.width / image.height;
    let finalWidth = 0;
    let finalHeight = 0;
    let pan_offset = { x: toolPanelWidth, y: topBarHeight };
    if (zoomRatioHeight > zoomRatioWidth) {
      finalWidth = availableWidth;
      finalHeight = finalWidth / aspectRatio;
      pan_offset.y = (availableHeight - finalHeight) / 2 + topBarHeight;
    } else {
      finalHeight = availableHeight;
      finalWidth = finalHeight * aspectRatio;
      pan_offset.x = (availableWidth - finalWidth) / 2 + toolPanelWidth;
    }
    if (this.image === null) {
      this.image = image;
    }
    this.imageRootWidth = finalWidth;
    this.imageRootHeight = finalHeight;
    this.zoom_ratio = Math.min(zoomRatioWidth, zoomRatioHeight);
    this.pan_offset = pan_offset;
    this.penPointerIdList = [];
    await this.invalidatePanZoom();
  }
  async invalidatePanZoom() {
    if (!this.image?.width || !this.image?.height || !this.pan_offset || !this.zoom_ratio) {
      console.warn("Missing required properties for pan/zoom");
      return;
    }
    const raw_width = this.image.width * this.zoom_ratio;
    const raw_height = this.image.height * this.zoom_ratio;
    this.canvasContainer ??= await this.messageBroker?.pull("getCanvasContainer");
    if (!this.canvasContainer) return;
    Object.assign(this.canvasContainer.style, {
      width: `${raw_width}px`,
      height: `${raw_height}px`,
      left: `${this.pan_offset.x}px`,
      top: `${this.pan_offset.y}px`
    });
    this.rgbCanvas = await this.messageBroker.pull("rgbCanvas");
    if (this.rgbCanvas) {
      if (this.rgbCanvas.width !== this.image.width || this.rgbCanvas.height !== this.image.height) {
        this.rgbCanvas.width = this.image.width;
        this.rgbCanvas.height = this.image.height;
      }
      this.rgbCanvas.style.width = `${raw_width}px`;
      this.rgbCanvas.style.height = `${raw_height}px`;
    }
  }
  handlePanStart(event) {
    this.messageBroker.pull("screenToCanvas", {
      x: event.offsetX,
      y: event.offsetY
    });
    this.mouseDownPoint = { x: event.clientX, y: event.clientY };
    this.messageBroker.publish("panCursor", true);
    this.initialPan = this.pan_offset;
    return;
  }
  handlePanMove(event) {
    if (this.mouseDownPoint === null) throw new Error("mouseDownPoint is null");
    let deltaX = this.mouseDownPoint.x - event.clientX;
    let deltaY = this.mouseDownPoint.y - event.clientY;
    let pan_x = this.initialPan.x - deltaX;
    let pan_y = this.initialPan.y - deltaY;
    this.pan_offset = { x: pan_x, y: pan_y };
    this.invalidatePanZoom();
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.PanAndZoomManager = window.comfyAPI.PanAndZoomManager || {};
window.comfyAPI.PanAndZoomManager.PanAndZoomManager = PanAndZoomManager;
class KeyboardManager {
  static {
    __name(this, "KeyboardManager");
  }
  keysDown = [];
  // @ts-expect-error unused variable
  maskEditor;
  messageBroker;
  // Bound functions, for use in addListeners and removeListeners
  handleKeyDownBound = this.handleKeyDown.bind(this);
  handleKeyUpBound = this.handleKeyUp.bind(this);
  clearKeysBound = this.clearKeys.bind(this);
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.addPullTopics();
  }
  addPullTopics() {
    this.messageBroker.createPullTopic(
      "isKeyPressed",
      (key) => Promise.resolve(this.isKeyDown(key))
    );
  }
  addListeners() {
    document.addEventListener("keydown", this.handleKeyDownBound);
    document.addEventListener("keyup", this.handleKeyUpBound);
    window.addEventListener("blur", this.clearKeysBound);
  }
  removeListeners() {
    document.removeEventListener("keydown", this.handleKeyDownBound);
    document.removeEventListener("keyup", this.handleKeyUpBound);
    window.removeEventListener("blur", this.clearKeysBound);
  }
  clearKeys() {
    this.keysDown = [];
  }
  handleKeyDown(event) {
    if (!this.keysDown.includes(event.key)) {
      this.keysDown.push(event.key);
    }
    if ((event.ctrlKey || event.metaKey) && !event.altKey) {
      const key = event.key.toUpperCase();
      if (key === "Y" && !event.shiftKey || key == "Z" && event.shiftKey) {
        this.messageBroker.publish("redo");
      } else if (key === "Z" && !event.shiftKey) {
        this.messageBroker.publish("undo");
      }
    }
  }
  handleKeyUp(event) {
    this.keysDown = this.keysDown.filter((key) => key !== event.key);
  }
  isKeyDown(key) {
    return this.keysDown.includes(key);
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.KeyboardManager = window.comfyAPI.KeyboardManager || {};
window.comfyAPI.KeyboardManager.KeyboardManager = KeyboardManager;
class PaintBucketTool {
  static {
    __name(this, "PaintBucketTool");
  }
  maskEditor;
  messageBroker;
  canvas;
  ctx;
  width = null;
  height = null;
  imageData = null;
  data = null;
  tolerance = 5;
  fillOpacity = 255;
  // Add opacity property (default 100%)
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.createListeners();
    this.addPullTopics();
  }
  initPaintBucketTool() {
    this.pullCanvas();
  }
  async pullCanvas() {
    this.canvas = await this.messageBroker.pull("maskCanvas");
    this.ctx = await this.messageBroker.pull("maskCtx");
  }
  createListeners() {
    this.messageBroker.subscribe(
      "setPaintBucketTolerance",
      (tolerance) => this.setTolerance(tolerance)
    );
    this.messageBroker.subscribe(
      "paintBucketFill",
      (point) => this.floodFill(point)
    );
    this.messageBroker.subscribe("invert", () => this.invertMask());
    this.messageBroker.subscribe(
      "setFillOpacity",
      (opacity) => this.setFillOpacity(opacity)
    );
  }
  addPullTopics() {
    this.messageBroker.createPullTopic(
      "getTolerance",
      async () => this.tolerance
    );
    this.messageBroker.createPullTopic(
      "getFillOpacity",
      async () => this.fillOpacity / 255 * 100
    );
  }
  // Add method to set opacity
  setFillOpacity(opacity) {
    this.fillOpacity = Math.floor(opacity / 100 * 255);
  }
  getPixel(x, y) {
    return this.data[(y * this.width + x) * 4 + 3];
  }
  setPixel(x, y, alpha, color) {
    const index = (y * this.width + x) * 4;
    this.data[index] = color.r;
    this.data[index + 1] = color.g;
    this.data[index + 2] = color.b;
    this.data[index + 3] = alpha;
  }
  shouldProcessPixel(currentAlpha, targetAlpha, tolerance, isFillMode) {
    if (currentAlpha === -1) return false;
    if (isFillMode) {
      return currentAlpha !== 255 && Math.abs(currentAlpha - targetAlpha) <= tolerance;
    } else {
      return currentAlpha === 255 || Math.abs(currentAlpha - targetAlpha) <= tolerance;
    }
  }
  async floodFill(point) {
    let startX = Math.floor(point.x);
    let startY = Math.floor(point.y);
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    if (startX < 0 || startX >= this.width || startY < 0 || startY >= this.height) {
      return;
    }
    this.imageData = this.ctx.getImageData(0, 0, this.width, this.height);
    this.data = this.imageData.data;
    const targetAlpha = this.getPixel(startX, startY);
    const isFillMode = targetAlpha !== 255;
    if (targetAlpha === -1) return;
    const maskColor = await this.messageBroker.pull("getMaskColor");
    const stack = [];
    const visited = new Uint8Array(this.width * this.height);
    if (this.shouldProcessPixel(
      targetAlpha,
      targetAlpha,
      this.tolerance,
      isFillMode
    )) {
      stack.push([startX, startY]);
    }
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      const visitedIndex = y * this.width + x;
      if (visited[visitedIndex]) continue;
      const currentAlpha = this.getPixel(x, y);
      if (!this.shouldProcessPixel(
        currentAlpha,
        targetAlpha,
        this.tolerance,
        isFillMode
      )) {
        continue;
      }
      visited[visitedIndex] = 1;
      this.setPixel(x, y, isFillMode ? this.fillOpacity : 0, maskColor);
      const checkNeighbor = /* @__PURE__ */ __name((nx, ny) => {
        if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) return;
        if (!visited[ny * this.width + nx]) {
          const alpha = this.getPixel(nx, ny);
          if (this.shouldProcessPixel(
            alpha,
            targetAlpha,
            this.tolerance,
            isFillMode
          )) {
            stack.push([nx, ny]);
          }
        }
      }, "checkNeighbor");
      checkNeighbor(x - 1, y);
      checkNeighbor(x + 1, y);
      checkNeighbor(x, y - 1);
      checkNeighbor(x, y + 1);
    }
    this.ctx.putImageData(this.imageData, 0, 0);
    this.imageData = null;
    this.data = null;
  }
  setTolerance(tolerance) {
    this.tolerance = tolerance;
  }
  getTolerance() {
    return this.tolerance;
  }
  //invert mask
  invertMask() {
    const imageData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    const data = imageData.data;
    let maskR = 0, maskG = 0, maskB = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 0) {
        maskR = data[i];
        maskG = data[i + 1];
        maskB = data[i + 2];
        break;
      }
    }
    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3];
      data[i + 3] = 255 - alpha;
      if (alpha === 0) {
        data[i] = maskR;
        data[i + 1] = maskG;
        data[i + 2] = maskB;
      }
    }
    this.ctx.putImageData(imageData, 0, 0);
    this.messageBroker.publish("saveState");
  }
}
class ColorSelectTool {
  static {
    __name(this, "ColorSelectTool");
  }
  // @ts-expect-error unused variable
  maskEditor;
  messageBroker;
  width = null;
  height = null;
  canvas;
  maskCTX;
  imageCTX;
  maskData = null;
  imageData = null;
  tolerance = 20;
  livePreview = false;
  lastPoint = null;
  colorComparisonMethod = ColorComparisonMethod.Simple;
  applyWholeImage = false;
  maskBoundry = false;
  maskTolerance = 0;
  selectOpacity = 255;
  // Add opacity property (default 100%)
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.createListeners();
    this.addPullTopics();
  }
  async initColorSelectTool() {
    await this.pullCanvas();
  }
  async pullCanvas() {
    this.canvas = await this.messageBroker.pull("imgCanvas");
    this.maskCTX = await this.messageBroker.pull("maskCtx");
    this.imageCTX = await this.messageBroker.pull("imageCtx");
  }
  createListeners() {
    this.messageBroker.subscribe(
      "colorSelectFill",
      (point) => this.fillColorSelection(point)
    );
    this.messageBroker.subscribe(
      "setColorSelectTolerance",
      (tolerance) => this.setTolerance(tolerance)
    );
    this.messageBroker.subscribe(
      "setLivePreview",
      (livePreview) => this.setLivePreview(livePreview)
    );
    this.messageBroker.subscribe(
      "setColorComparisonMethod",
      (method) => this.setComparisonMethod(method)
    );
    this.messageBroker.subscribe("clearLastPoint", () => this.clearLastPoint());
    this.messageBroker.subscribe(
      "setWholeImage",
      (applyWholeImage) => this.setApplyWholeImage(applyWholeImage)
    );
    this.messageBroker.subscribe(
      "setMaskBoundary",
      (maskBoundry) => this.setMaskBoundary(maskBoundry)
    );
    this.messageBroker.subscribe(
      "setMaskTolerance",
      (maskTolerance) => this.setMaskTolerance(maskTolerance)
    );
    this.messageBroker.subscribe(
      "setSelectionOpacity",
      (opacity) => this.setSelectOpacity(opacity)
    );
  }
  async addPullTopics() {
    this.messageBroker.createPullTopic(
      "getLivePreview",
      async () => this.livePreview
    );
  }
  getPixel(x, y) {
    const index = (y * this.width + x) * 4;
    return {
      r: this.imageData[index],
      g: this.imageData[index + 1],
      b: this.imageData[index + 2]
    };
  }
  getMaskAlpha(x, y) {
    return this.maskData[(y * this.width + x) * 4 + 3];
  }
  isPixelInRange(pixel, target) {
    switch (this.colorComparisonMethod) {
      case ColorComparisonMethod.Simple:
        return this.isPixelInRangeSimple(pixel, target);
      case ColorComparisonMethod.HSL:
        return this.isPixelInRangeHSL(pixel, target);
      case ColorComparisonMethod.LAB:
        return this.isPixelInRangeLab(pixel, target);
      default:
        return this.isPixelInRangeSimple(pixel, target);
    }
  }
  isPixelInRangeSimple(pixel, target) {
    const distance = Math.sqrt(
      Math.pow(pixel.r - target.r, 2) + Math.pow(pixel.g - target.g, 2) + Math.pow(pixel.b - target.b, 2)
    );
    return distance <= this.tolerance;
  }
  isPixelInRangeHSL(pixel, target) {
    const pixelHSL = this.rgbToHSL(pixel.r, pixel.g, pixel.b);
    const targetHSL = this.rgbToHSL(target.r, target.g, target.b);
    const hueDiff = Math.abs(pixelHSL.h - targetHSL.h);
    const satDiff = Math.abs(pixelHSL.s - targetHSL.s);
    const lightDiff = Math.abs(pixelHSL.l - targetHSL.l);
    const distance = Math.sqrt(
      Math.pow(hueDiff / 360 * 255, 2) + Math.pow(satDiff / 100 * 255, 2) + Math.pow(lightDiff / 100 * 255, 2)
    );
    return distance <= this.tolerance;
  }
  rgbToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h * 360,
      s: s * 100,
      l: l * 100
    };
  }
  isPixelInRangeLab(pixel, target) {
    const pixelLab = this.rgbToLab(pixel);
    const targetLab = this.rgbToLab(target);
    const deltaE = Math.sqrt(
      Math.pow(pixelLab.l - targetLab.l, 2) + Math.pow(pixelLab.a - targetLab.a, 2) + Math.pow(pixelLab.b - targetLab.b, 2)
    );
    const normalizedDeltaE = deltaE / 100 * 255;
    return normalizedDeltaE <= this.tolerance;
  }
  rgbToLab(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    r *= 100;
    g *= 100;
    b *= 100;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    const xn = 95.047;
    const yn = 100;
    const zn = 108.883;
    const xyz = [x / xn, y / yn, z / zn];
    for (let i = 0; i < xyz.length; i++) {
      xyz[i] = xyz[i] > 8856e-6 ? Math.pow(xyz[i], 1 / 3) : 7.787 * xyz[i] + 16 / 116;
    }
    return {
      l: 116 * xyz[1] - 16,
      a: 500 * (xyz[0] - xyz[1]),
      b: 200 * (xyz[1] - xyz[2])
    };
  }
  setPixel(x, y, alpha, color) {
    const index = (y * this.width + x) * 4;
    this.maskData[index] = color.r;
    this.maskData[index + 1] = color.g;
    this.maskData[index + 2] = color.b;
    this.maskData[index + 3] = alpha;
  }
  async fillColorSelection(point) {
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.lastPoint = point;
    const maskData = this.maskCTX.getImageData(0, 0, this.width, this.height);
    this.maskData = maskData.data;
    this.imageData = this.imageCTX.getImageData(
      0,
      0,
      this.width,
      this.height
    ).data;
    if (this.applyWholeImage) {
      const targetPixel = this.getPixel(
        Math.floor(point.x),
        Math.floor(point.y)
      );
      const maskColor = await this.messageBroker.pull("getMaskColor");
      const width = this.width;
      const height = this.height;
      const CHUNK_SIZE = 1e4;
      for (let i = 0; i < width * height; i += CHUNK_SIZE) {
        const endIndex = Math.min(i + CHUNK_SIZE, width * height);
        for (let pixelIndex = i; pixelIndex < endIndex; pixelIndex++) {
          const x = pixelIndex % width;
          const y = Math.floor(pixelIndex / width);
          if (this.isPixelInRange(this.getPixel(x, y), targetPixel)) {
            this.setPixel(x, y, this.selectOpacity, maskColor);
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    } else {
      let startX = Math.floor(point.x);
      let startY = Math.floor(point.y);
      if (startX < 0 || startX >= this.width || startY < 0 || startY >= this.height) {
        return;
      }
      const pixel = this.getPixel(startX, startY);
      const stack = [];
      const visited = new Uint8Array(this.width * this.height);
      stack.push([startX, startY]);
      const maskColor = await this.messageBroker.pull("getMaskColor");
      while (stack.length > 0) {
        const [x, y] = stack.pop();
        const visitedIndex = y * this.width + x;
        if (visited[visitedIndex] || !this.isPixelInRange(this.getPixel(x, y), pixel)) {
          continue;
        }
        visited[visitedIndex] = 1;
        this.setPixel(x, y, this.selectOpacity, maskColor);
        if (x > 0 && !visited[y * this.width + (x - 1)] && this.isPixelInRange(this.getPixel(x - 1, y), pixel)) {
          if (!this.maskBoundry || 255 - this.getMaskAlpha(x - 1, y) > this.maskTolerance) {
            stack.push([x - 1, y]);
          }
        }
        if (x < this.width - 1 && !visited[y * this.width + (x + 1)] && this.isPixelInRange(this.getPixel(x + 1, y), pixel)) {
          if (!this.maskBoundry || 255 - this.getMaskAlpha(x + 1, y) > this.maskTolerance) {
            stack.push([x + 1, y]);
          }
        }
        if (y > 0 && !visited[(y - 1) * this.width + x] && this.isPixelInRange(this.getPixel(x, y - 1), pixel)) {
          if (!this.maskBoundry || 255 - this.getMaskAlpha(x, y - 1) > this.maskTolerance) {
            stack.push([x, y - 1]);
          }
        }
        if (y < this.height - 1 && !visited[(y + 1) * this.width + x] && this.isPixelInRange(this.getPixel(x, y + 1), pixel)) {
          if (!this.maskBoundry || 255 - this.getMaskAlpha(x, y + 1) > this.maskTolerance) {
            stack.push([x, y + 1]);
          }
        }
      }
    }
    this.maskCTX.putImageData(maskData, 0, 0);
    this.messageBroker.publish("saveState");
    this.maskData = null;
    this.imageData = null;
  }
  setTolerance(tolerance) {
    this.tolerance = tolerance;
    if (this.lastPoint && this.livePreview) {
      this.messageBroker.publish("undo");
      this.fillColorSelection(this.lastPoint);
    }
  }
  setLivePreview(livePreview) {
    this.livePreview = livePreview;
  }
  setComparisonMethod(method) {
    this.colorComparisonMethod = method;
    if (this.lastPoint && this.livePreview) {
      this.messageBroker.publish("undo");
      this.fillColorSelection(this.lastPoint);
    }
  }
  clearLastPoint() {
    this.lastPoint = null;
  }
  setApplyWholeImage(applyWholeImage) {
    this.applyWholeImage = applyWholeImage;
  }
  setMaskBoundary(maskBoundry) {
    this.maskBoundry = maskBoundry;
  }
  setMaskTolerance(maskTolerance) {
    this.maskTolerance = maskTolerance;
  }
  // Add method to set opacity
  setSelectOpacity(opacity) {
    this.selectOpacity = Math.floor(opacity / 100 * 255);
    if (this.lastPoint && this.livePreview) {
      this.messageBroker.publish("undo");
      this.fillColorSelection(this.lastPoint);
    }
  }
}
const saveBrushToCache = debounce(function(key, brush) {
  try {
    const brushString = JSON.stringify(brush);
    setStorageValue(key, brushString);
  } catch (error) {
    console.error("Failed to save brush to cache:", error);
  }
}, 300);
function loadBrushFromCache(key) {
  try {
    const brushString = getStorageValue(key);
    if (brushString) {
      const brush = JSON.parse(brushString);
      console.log("Loaded brush from cache:", brush);
      return brush;
    } else {
      console.log("No brush found in cache.");
      return null;
    }
  } catch (error) {
    console.error("Failed to load brush from cache:", error);
    return null;
  }
}
__name(loadBrushFromCache, "loadBrushFromCache");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.brushCache = window.comfyAPI.brushCache || {};
window.comfyAPI.brushCache.saveBrushToCache = saveBrushToCache;
window.comfyAPI.brushCache.loadBrushFromCache = loadBrushFromCache;
class BrushTool {
  static {
    __name(this, "BrushTool");
  }
  brushSettings;
  //this saves the current brush settings
  maskBlendMode;
  isDrawing = false;
  isDrawingLine = false;
  lineStartPoint = null;
  smoothingPrecision = 10;
  smoothingCordsArray = [];
  smoothingLastDrawTime;
  maskCtx = null;
  rgbCtx = null;
  initialDraw = true;
  static brushTextureCache = new QuickLRU({
    maxSize: 8
    // Reasonable limit for brush texture variations?
  });
  brushStrokeCanvas = null;
  brushStrokeCtx = null;
  static SMOOTHING_MAX_STEPS = 30;
  static SMOOTHING_MIN_STEPS = 2;
  //brush adjustment
  isBrushAdjusting = false;
  brushPreviewGradient = null;
  initialPoint = null;
  useDominantAxis = false;
  brushAdjustmentSpeed = 1;
  maskEditor;
  messageBroker;
  rgbColor = "#FF0000";
  // Default color
  activeLayer = "mask";
  constructor(maskEditor) {
    this.maskEditor = maskEditor;
    this.messageBroker = maskEditor.getMessageBroker();
    this.createListeners();
    this.addPullTopics();
    this.useDominantAxis = app.extensionManager.setting.get(
      "Comfy.MaskEditor.UseDominantAxis"
    );
    this.brushAdjustmentSpeed = app.extensionManager.setting.get(
      "Comfy.MaskEditor.BrushAdjustmentSpeed"
    );
    const cachedBrushSettings = loadBrushFromCache("maskeditor_brush_settings");
    if (cachedBrushSettings) {
      this.brushSettings = cachedBrushSettings;
    } else {
      this.brushSettings = {
        type: BrushShape.Arc,
        size: 10,
        opacity: 0.7,
        hardness: 1,
        smoothingPrecision: 10
      };
    }
    this.maskBlendMode = MaskBlendMode.Black;
  }
  createListeners() {
    this.messageBroker.subscribe(
      "setBrushSize",
      (size) => this.setBrushSize(size)
    );
    this.messageBroker.subscribe(
      "setBrushOpacity",
      (opacity) => this.setBrushOpacity(opacity)
    );
    this.messageBroker.subscribe(
      "setBrushHardness",
      (hardness) => this.setBrushHardness(hardness)
    );
    this.messageBroker.subscribe(
      "setBrushShape",
      (type) => this.setBrushType(type)
    );
    this.messageBroker.subscribe(
      "setActiveLayer",
      (layer) => this.activeLayer = layer
    );
    this.messageBroker.subscribe(
      "setBrushSmoothingPrecision",
      (precision) => this.setBrushSmoothingPrecision(precision)
    );
    this.messageBroker.subscribe("setRGBColor", (color) => {
      this.rgbColor = color;
    });
    this.messageBroker.subscribe(
      "brushAdjustmentStart",
      (event) => this.startBrushAdjustment(event)
    );
    this.messageBroker.subscribe(
      "brushAdjustment",
      (event) => this.handleBrushAdjustment(event)
    );
    this.messageBroker.subscribe(
      "drawStart",
      (event) => this.startDrawing(event)
    );
    this.messageBroker.subscribe(
      "draw",
      (event) => this.handleDrawing(event)
    );
    this.messageBroker.subscribe(
      "drawEnd",
      (event) => this.drawEnd(event)
    );
  }
  addPullTopics() {
    this.messageBroker.createPullTopic(
      "brushSize",
      async () => this.brushSettings.size
    );
    this.messageBroker.createPullTopic(
      "brushOpacity",
      async () => this.brushSettings.opacity
    );
    this.messageBroker.createPullTopic(
      "brushHardness",
      async () => this.brushSettings.hardness
    );
    this.messageBroker.createPullTopic(
      "brushType",
      async () => this.brushSettings.type
    );
    this.messageBroker.createPullTopic(
      "brushSmoothingPrecision",
      async () => this.brushSettings.smoothingPrecision
    );
    this.messageBroker.createPullTopic(
      "maskBlendMode",
      async () => this.maskBlendMode
    );
    this.messageBroker.createPullTopic(
      "brushSettings",
      async () => this.brushSettings
    );
  }
  async createBrushStrokeCanvas() {
    if (this.brushStrokeCanvas !== null) {
      return;
    }
    const maskCanvas = await this.messageBroker.pull("maskCanvas");
    const canvas = document.createElement("canvas");
    canvas.width = maskCanvas.width;
    canvas.height = maskCanvas.height;
    this.brushStrokeCanvas = canvas;
    this.brushStrokeCtx = canvas.getContext("2d");
  }
  async startDrawing(event) {
    this.isDrawing = true;
    let compositionOp;
    let currentTool = await this.messageBroker.pull("currentTool");
    let coords = { x: event.offsetX, y: event.offsetY };
    let coords_canvas = await this.messageBroker.pull(
      "screenToCanvas",
      coords
    );
    await this.createBrushStrokeCanvas();
    if (currentTool === Tools.Eraser || event.buttons == 2) {
      compositionOp = CompositionOperation.DestinationOut;
    } else {
      compositionOp = CompositionOperation.SourceOver;
    }
    if (event.shiftKey && this.lineStartPoint) {
      this.isDrawingLine = true;
      this.drawLine(this.lineStartPoint, coords_canvas, compositionOp);
    } else {
      this.isDrawingLine = false;
      this.init_shape(compositionOp);
      this.draw_shape(coords_canvas);
    }
    this.lineStartPoint = coords_canvas;
    this.smoothingCordsArray = [coords_canvas];
    this.smoothingLastDrawTime = /* @__PURE__ */ new Date();
  }
  async handleDrawing(event) {
    var diff = performance.now() - this.smoothingLastDrawTime.getTime();
    let coords = { x: event.offsetX, y: event.offsetY };
    let coords_canvas = await this.messageBroker.pull(
      "screenToCanvas",
      coords
    );
    let currentTool = await this.messageBroker.pull("currentTool");
    if (diff > 20 && !this.isDrawing)
      requestAnimationFrame(() => {
        this.init_shape(CompositionOperation.SourceOver);
        this.draw_shape(coords_canvas);
        this.smoothingCordsArray.push(coords_canvas);
      });
    else
      requestAnimationFrame(() => {
        if (currentTool === Tools.Eraser || event.buttons == 2) {
          this.init_shape(CompositionOperation.DestinationOut);
        } else {
          this.init_shape(CompositionOperation.SourceOver);
        }
        this.drawWithBetterSmoothing(coords_canvas);
      });
    this.smoothingLastDrawTime = /* @__PURE__ */ new Date();
  }
  async drawEnd(event) {
    const coords = { x: event.offsetX, y: event.offsetY };
    const coords_canvas = await this.messageBroker.pull(
      "screenToCanvas",
      coords
    );
    if (this.isDrawing) {
      this.isDrawing = false;
      this.messageBroker.publish("saveState");
      this.lineStartPoint = coords_canvas;
      this.initialDraw = true;
    }
  }
  clampSmoothingPrecision(value) {
    return Math.min(Math.max(value, 1), 100);
  }
  drawWithBetterSmoothing(point) {
    if (!this.smoothingCordsArray) {
      this.smoothingCordsArray = [];
    }
    const opacityConstant = 1 / (1 + Math.exp(3));
    const interpolatedOpacity = 1 / (1 + Math.exp(-6 * (this.brushSettings.opacity - 0.5))) - opacityConstant;
    this.smoothingCordsArray.push(point);
    const POINTS_NR = 5;
    if (this.smoothingCordsArray.length < POINTS_NR) {
      return;
    }
    let totalLength = 0;
    const points = this.smoothingCordsArray;
    const len = points.length - 1;
    let dx, dy;
    for (let i = 0; i < len; i++) {
      dx = points[i + 1].x - points[i].x;
      dy = points[i + 1].y - points[i].y;
      totalLength += Math.sqrt(dx * dx + dy * dy);
    }
    const maxSteps = BrushTool.SMOOTHING_MAX_STEPS;
    const minSteps = BrushTool.SMOOTHING_MIN_STEPS;
    const smoothing = this.clampSmoothingPrecision(
      this.brushSettings.smoothingPrecision
    );
    const normalizedSmoothing = (smoothing - 1) / 99;
    const stepNr = Math.round(
      Math.round(minSteps + (maxSteps - minSteps) * normalizedSmoothing)
    );
    const distanceBetweenPoints = totalLength / stepNr;
    let interpolatedPoints = points;
    if (stepNr > 0) {
      interpolatedPoints = this.generateEquidistantPoints(
        this.smoothingCordsArray,
        distanceBetweenPoints
        // Distance between interpolated points
      );
    }
    if (!this.initialDraw) {
      const spliceIndex = interpolatedPoints.findIndex(
        (point2) => point2.x === this.smoothingCordsArray[2].x && point2.y === this.smoothingCordsArray[2].y
      );
      if (spliceIndex !== -1) {
        interpolatedPoints = interpolatedPoints.slice(spliceIndex + 1);
      }
    }
    for (const point2 of interpolatedPoints) {
      this.draw_shape(point2, interpolatedOpacity);
    }
    if (!this.initialDraw) {
      this.smoothingCordsArray = this.smoothingCordsArray.slice(2);
    } else {
      this.initialDraw = false;
    }
  }
  async drawLine(p1, p2, compositionOp) {
    const brush_size = await this.messageBroker.pull("brushSize");
    const distance = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    const steps = Math.ceil(
      distance / (brush_size / this.brushSettings.smoothingPrecision * 4)
    );
    const interpolatedOpacity = 1 / (1 + Math.exp(-6 * (this.brushSettings.opacity - 0.5))) - 1 / (1 + Math.exp(3));
    this.init_shape(compositionOp);
    for (let i = 0; i <= steps; i++) {
      const t2 = i / steps;
      const x = p1.x + (p2.x - p1.x) * t2;
      const y = p1.y + (p2.y - p1.y) * t2;
      const point = { x, y };
      this.draw_shape(point, interpolatedOpacity);
    }
  }
  //brush adjustment
  async startBrushAdjustment(event) {
    event.preventDefault();
    const coords = { x: event.offsetX, y: event.offsetY };
    let coords_canvas = await this.messageBroker.pull(
      "screenToCanvas",
      coords
    );
    this.messageBroker.publish("setBrushPreviewGradientVisibility", true);
    this.initialPoint = coords_canvas;
    this.isBrushAdjusting = true;
    return;
  }
  async handleBrushAdjustment(event) {
    const coords = { x: event.offsetX, y: event.offsetY };
    const brushDeadZone = 5;
    let coords_canvas = await this.messageBroker.pull(
      "screenToCanvas",
      coords
    );
    const delta_x = coords_canvas.x - this.initialPoint.x;
    const delta_y = coords_canvas.y - this.initialPoint.y;
    const effectiveDeltaX = Math.abs(delta_x) < brushDeadZone ? 0 : delta_x;
    const effectiveDeltaY = Math.abs(delta_y) < brushDeadZone ? 0 : delta_y;
    let finalDeltaX = effectiveDeltaX;
    let finalDeltaY = effectiveDeltaY;
    console.log(this.useDominantAxis);
    if (this.useDominantAxis) {
      const ratio = Math.abs(effectiveDeltaX) / Math.abs(effectiveDeltaY);
      const threshold = 2;
      if (ratio > threshold) {
        finalDeltaY = 0;
      } else if (ratio < 1 / threshold) {
        finalDeltaX = 0;
      }
    }
    const cappedDeltaX = Math.max(-100, Math.min(100, finalDeltaX));
    const cappedDeltaY = Math.max(-100, Math.min(100, finalDeltaY));
    const newSize = Math.max(
      1,
      Math.min(
        100,
        this.brushSettings.size + cappedDeltaX / 35 * this.brushAdjustmentSpeed
      )
    );
    const newHardness = Math.max(
      0,
      Math.min(
        1,
        this.brushSettings.hardness - cappedDeltaY / 4e3 * this.brushAdjustmentSpeed
      )
    );
    this.brushSettings.size = newSize;
    this.brushSettings.hardness = newHardness;
    this.messageBroker.publish("updateBrushPreview");
  }
  //helper functions
  async draw_shape(point, overrideOpacity) {
    const brushSettings = this.brushSettings;
    const maskCtx = this.maskCtx || await this.messageBroker.pull("maskCtx");
    const rgbCtx = this.rgbCtx || await this.messageBroker.pull("rgbCtx");
    const brushType = await this.messageBroker.pull("brushType");
    const maskColor = await this.messageBroker.pull("getMaskColor");
    const size = brushSettings.size;
    const brushSettingsSliderOpacity = brushSettings.opacity;
    const opacity = overrideOpacity == void 0 ? brushSettingsSliderOpacity : overrideOpacity;
    const hardness = brushSettings.hardness;
    const x = point.x;
    const y = point.y;
    const brushRadius = size;
    const isErasing = maskCtx.globalCompositeOperation === "destination-out";
    const currentTool = await this.messageBroker.pull("currentTool");
    const getCachedBrushTexture = /* @__PURE__ */ __name((radius, hardness2, color, opacity2) => {
      const cacheKey = `${radius}_${hardness2}_${color}_${opacity2}`;
      if (BrushTool.brushTextureCache.has(cacheKey)) {
        return BrushTool.brushTextureCache.get(cacheKey);
      }
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      const size2 = radius * 2;
      tempCanvas.width = size2;
      tempCanvas.height = size2;
      const centerX = size2 / 2;
      const centerY = size2 / 2;
      const hardRadius = radius * hardness2;
      const imageData = tempCtx.createImageData(size2, size2);
      const data = imageData.data;
      const { r, g, b } = parseToRgb(color);
      const fadeRange = radius - hardRadius;
      for (let y2 = 0; y2 < size2; y2++) {
        const dy = y2 - centerY;
        for (let x2 = 0; x2 < size2; x2++) {
          const dx = x2 - centerX;
          const index = (y2 * size2 + x2) * 4;
          const distFromEdge = Math.max(Math.abs(dx), Math.abs(dy));
          let pixelOpacity = 0;
          if (distFromEdge <= hardRadius) {
            pixelOpacity = opacity2;
          } else if (distFromEdge <= radius) {
            const fadeProgress = (distFromEdge - hardRadius) / fadeRange;
            pixelOpacity = opacity2 * (1 - fadeProgress);
          }
          data[index] = r;
          data[index + 1] = g;
          data[index + 2] = b;
          data[index + 3] = pixelOpacity * 255;
        }
      }
      tempCtx.putImageData(imageData, 0, 0);
      BrushTool.brushTextureCache.set(cacheKey, tempCanvas);
      return tempCanvas;
    }, "getCachedBrushTexture");
    if (this.activeLayer === "rgb" && (currentTool === Tools.Eraser || currentTool === Tools.PaintPen)) {
      const rgbaColor = this.formatRgba(this.rgbColor, opacity);
      if (brushType === BrushShape.Rect && hardness < 1) {
        const brushTexture = getCachedBrushTexture(
          brushRadius,
          hardness,
          rgbaColor,
          opacity
        );
        rgbCtx.drawImage(brushTexture, x - brushRadius, y - brushRadius);
        return;
      }
      if (hardness === 1) {
        rgbCtx.fillStyle = rgbaColor;
        rgbCtx.beginPath();
        if (brushType === BrushShape.Rect) {
          rgbCtx.rect(
            x - brushRadius,
            y - brushRadius,
            brushRadius * 2,
            brushRadius * 2
          );
        } else {
          rgbCtx.arc(x, y, brushRadius, 0, Math.PI * 2, false);
        }
        rgbCtx.fill();
        return;
      }
      let gradient2 = rgbCtx.createRadialGradient(x, y, 0, x, y, brushRadius);
      gradient2.addColorStop(0, rgbaColor);
      gradient2.addColorStop(
        hardness,
        this.formatRgba(this.rgbColor, opacity * 0.5)
      );
      gradient2.addColorStop(1, this.formatRgba(this.rgbColor, 0));
      rgbCtx.fillStyle = gradient2;
      rgbCtx.beginPath();
      if (brushType === BrushShape.Rect) {
        rgbCtx.rect(
          x - brushRadius,
          y - brushRadius,
          brushRadius * 2,
          brushRadius * 2
        );
      } else {
        rgbCtx.arc(x, y, brushRadius, 0, Math.PI * 2, false);
      }
      rgbCtx.fill();
      return;
    }
    if (brushType === BrushShape.Rect && hardness < 1) {
      const baseColor = isErasing ? `rgba(255, 255, 255, ${opacity})` : `rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${opacity})`;
      const brushTexture = getCachedBrushTexture(
        brushRadius,
        hardness,
        baseColor,
        opacity
      );
      maskCtx.drawImage(brushTexture, x - brushRadius, y - brushRadius);
      return;
    }
    if (hardness === 1) {
      const solidColor = isErasing ? `rgba(255, 255, 255, ${opacity})` : `rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${opacity})`;
      maskCtx.fillStyle = solidColor;
      maskCtx.beginPath();
      if (brushType === BrushShape.Rect) {
        maskCtx.rect(
          x - brushRadius,
          y - brushRadius,
          brushRadius * 2,
          brushRadius * 2
        );
      } else {
        maskCtx.arc(x, y, brushRadius, 0, Math.PI * 2, false);
      }
      maskCtx.fill();
      return;
    }
    let gradient = maskCtx.createRadialGradient(x, y, 0, x, y, brushRadius);
    if (isErasing) {
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      gradient.addColorStop(hardness, `rgba(255, 255, 255, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
    } else {
      gradient.addColorStop(
        0,
        `rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${opacity})`
      );
      gradient.addColorStop(
        hardness,
        `rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${opacity * 0.5})`
      );
      gradient.addColorStop(
        1,
        `rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, 0)`
      );
    }
    maskCtx.fillStyle = gradient;
    maskCtx.beginPath();
    if (brushType === BrushShape.Rect) {
      maskCtx.rect(
        x - brushRadius,
        y - brushRadius,
        brushRadius * 2,
        brushRadius * 2
      );
    } else {
      maskCtx.arc(x, y, brushRadius, 0, Math.PI * 2, false);
    }
    maskCtx.fill();
  }
  formatRgba(hex, alpha) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  async init_shape(compositionOperation) {
    const maskBlendMode = await this.messageBroker.pull("maskBlendMode");
    const maskCtx = this.maskCtx || await this.messageBroker.pull("maskCtx");
    const rgbCtx = this.rgbCtx || await this.messageBroker.pull("rgbCtx");
    maskCtx.beginPath();
    rgbCtx.beginPath();
    if (compositionOperation == CompositionOperation.SourceOver) {
      maskCtx.fillStyle = maskBlendMode;
      maskCtx.globalCompositeOperation = CompositionOperation.SourceOver;
      rgbCtx.globalCompositeOperation = CompositionOperation.SourceOver;
    } else if (compositionOperation == CompositionOperation.DestinationOut) {
      maskCtx.globalCompositeOperation = CompositionOperation.DestinationOut;
      rgbCtx.globalCompositeOperation = CompositionOperation.DestinationOut;
    }
  }
  generateEquidistantPoints(points, distance) {
    const result = [];
    const cumulativeDistances = [0];
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      const dist = Math.hypot(dx, dy);
      cumulativeDistances[i] = cumulativeDistances[i - 1] + dist;
    }
    const totalLength = cumulativeDistances[cumulativeDistances.length - 1];
    const numPoints = Math.floor(totalLength / distance);
    for (let i = 0; i <= numPoints; i++) {
      const targetDistance = i * distance;
      let idx = 0;
      while (idx < cumulativeDistances.length - 1 && cumulativeDistances[idx + 1] < targetDistance) {
        idx++;
      }
      if (idx >= points.length - 1) {
        result.push(points[points.length - 1]);
        continue;
      }
      const d0 = cumulativeDistances[idx];
      const d1 = cumulativeDistances[idx + 1];
      const t2 = (targetDistance - d0) / (d1 - d0);
      const x = points[idx].x + t2 * (points[idx + 1].x - points[idx].x);
      const y = points[idx].y + t2 * (points[idx + 1].y - points[idx].y);
      result.push({ x, y });
    }
    return result;
  }
  setBrushSize(size) {
    this.brushSettings.size = size;
    saveBrushToCache("maskeditor_brush_settings", this.brushSettings);
  }
  setBrushOpacity(opacity) {
    this.brushSettings.opacity = opacity;
    saveBrushToCache("maskeditor_brush_settings", this.brushSettings);
  }
  setBrushHardness(hardness) {
    this.brushSettings.hardness = hardness;
    saveBrushToCache("maskeditor_brush_settings", this.brushSettings);
  }
  setBrushType(type) {
    this.brushSettings.type = type;
    saveBrushToCache("maskeditor_brush_settings", this.brushSettings);
  }
  setBrushSmoothingPrecision(precision) {
    this.brushSettings.smoothingPrecision = precision;
    saveBrushToCache("maskeditor_brush_settings", this.brushSettings);
  }
}
class MaskEditorDialog extends ComfyDialog {
  static {
    __name(this, "MaskEditorDialog");
  }
  static instance = null;
  //new
  uiManager;
  // @ts-expect-error unused variable
  toolManager;
  // @ts-expect-error unused variable
  panAndZoomManager;
  // @ts-expect-error unused variable
  brushTool;
  paintBucketTool;
  colorSelectTool;
  canvasHistory;
  messageBroker;
  keyboardManager;
  rootElement;
  imageURL;
  isLayoutCreated = false;
  isOpen = false;
  //variables needed?
  last_display_style = null;
  constructor() {
    super();
    this.rootElement = $el(
      "div.maskEditor_hidden",
      { parent: document.body },
      []
    );
    this.element = this.rootElement;
  }
  static getInstance() {
    if (!ComfyApp.clipspace || !ComfyApp.clipspace.imgs) {
      throw new Error("No clipspace images found");
    }
    const currentSrc = ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]].src;
    if (!MaskEditorDialog.instance || currentSrc !== MaskEditorDialog.instance.imageURL) {
      if (MaskEditorDialog.instance) MaskEditorDialog.instance.destroy();
      MaskEditorDialog.instance = new MaskEditorDialog();
      MaskEditorDialog.instance.imageURL = currentSrc;
    }
    return MaskEditorDialog.instance;
  }
  async show() {
    this.cleanup();
    if (!this.isLayoutCreated) {
      this.messageBroker = new MessageBroker();
      this.canvasHistory = new CanvasHistory(this, 20);
      this.paintBucketTool = new PaintBucketTool(this);
      this.brushTool = new BrushTool(this);
      this.panAndZoomManager = new PanAndZoomManager(this);
      this.toolManager = new ToolManager(this);
      this.keyboardManager = new KeyboardManager(this);
      this.uiManager = new UIManager(this.rootElement, this);
      this.colorSelectTool = new ColorSelectTool(this);
      const self = this;
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === "attributes" && mutation.attributeName === "style") {
            if (self.last_display_style && self.last_display_style != "none" && self.element.style.display == "none") {
              ComfyApp.onClipspaceEditorClosed();
            }
            self.last_display_style = self.element.style.display;
          }
        });
      });
      const config = { attributes: true };
      observer.observe(this.rootElement, config);
      this.isLayoutCreated = true;
      await this.uiManager.setlayout();
    }
    this.rootElement.id = "maskEditor";
    this.rootElement.style.display = "flex";
    this.element.style.display = "flex";
    await this.uiManager.initUI();
    this.paintBucketTool.initPaintBucketTool();
    this.colorSelectTool.initColorSelectTool();
    await this.canvasHistory.saveInitialState();
    this.isOpen = true;
    if (ComfyApp.clipspace && ComfyApp.clipspace.imgs) {
      this.uiManager.setSidebarImage();
    }
    this.keyboardManager.addListeners();
  }
  cleanup() {
    const maskEditors = document.querySelectorAll('[id^="maskEditor"]');
    maskEditors.forEach((element) => element.remove());
    const brushElements = document.querySelectorAll("#maskEditor_brush");
    brushElements.forEach((element) => element.remove());
  }
  destroy() {
    this.isLayoutCreated = false;
    this.isOpen = false;
    this.canvasHistory.clearStates();
    this.keyboardManager.removeListeners();
    this.cleanup();
    this.close();
    MaskEditorDialog.instance = null;
  }
  isOpened() {
    return this.isOpen;
  }
  async save() {
    const imageCanvas = this.uiManager.getImgCanvas();
    const maskCanvas = this.uiManager.getMaskCanvas();
    const maskCanvasCtx = getCanvas2dContext(maskCanvas);
    const paintCanvas = this.uiManager.getRgbCanvas();
    const image = this.uiManager.getImage();
    try {
      await ensureImageFullyLoaded(maskCanvas.toDataURL());
    } catch (error) {
      console.error("Error loading mask image:", error);
      return;
    }
    const unrefinedMaskImageData = maskCanvasCtx.getImageData(
      0,
      0,
      maskCanvas.width,
      maskCanvas.height
    );
    const refinedMaskOnlyData = new ImageData(
      removeImageRgbValuesAndInvertAlpha(unrefinedMaskImageData.data),
      unrefinedMaskImageData.width,
      unrefinedMaskImageData.height
    );
    const [refinedMaskCanvas, refinedMaskCanvasCtx] = createCanvasCopy(maskCanvas);
    refinedMaskCanvasCtx.globalCompositeOperation = CompositionOperation.SourceOver;
    refinedMaskCanvasCtx.putImageData(refinedMaskOnlyData, 0, 0);
    const timestamp = Math.round(performance.now());
    const filenames = imageLayerFilenamesByTimestamp(timestamp);
    const refs = {
      maskedImage: toRef(filenames.maskedImage),
      paint: toRef(filenames.paint),
      paintedImage: toRef(filenames.paintedImage),
      paintedMaskedImage: toRef(filenames.paintedMaskedImage)
    };
    const [paintedImageCanvas] = combineOriginalImageAndPaint({
      originalImage: imageCanvas,
      paint: paintCanvas
    });
    replaceClipspaceImages(refs.paintedMaskedImage, [refs.paint]);
    const originalImageUrl = new URL(image.src);
    this.uiManager.setBrushOpacity(0);
    const originalImageFilename = originalImageUrl.searchParams.get("filename");
    if (!originalImageFilename)
      throw new Error(
        "Expected original image URL to have a `filename` query parameter, but couldn't find it."
      );
    const originalImageRef = {
      filename: originalImageFilename,
      subfolder: originalImageUrl.searchParams.get("subfolder") ?? void 0,
      type: originalImageUrl.searchParams.get("type") ?? void 0
    };
    const mkFormData = /* @__PURE__ */ __name((blob, filename, originalImageRefOverride) => {
      const formData = new FormData();
      formData.append("image", blob, filename);
      formData.append(
        "original_ref",
        JSON.stringify(originalImageRefOverride ?? originalImageRef)
      );
      formData.append("type", "input");
      formData.append("subfolder", "clipspace");
      return formData;
    }, "mkFormData");
    const canvasToFormData = /* @__PURE__ */ __name((canvas, filename, originalImageRefOverride) => {
      const blob = this.dataURLToBlob(canvas.toDataURL());
      return mkFormData(blob, filename, originalImageRefOverride);
    }, "canvasToFormData");
    const formDatas = {
      // Note: this canvas only contains mask data (no image), but during the upload process, the backend combines the mask with the original_image. Refer to the backend repo's `server.py`, search for `@routes.post("/upload/mask")`
      maskedImage: canvasToFormData(refinedMaskCanvas, filenames.maskedImage),
      paint: canvasToFormData(paintCanvas, filenames.paint),
      paintedImage: canvasToFormData(
        paintedImageCanvas,
        filenames.paintedImage
      ),
      paintedMaskedImage: canvasToFormData(
        refinedMaskCanvas,
        filenames.paintedMaskedImage,
        refs.paintedImage
      )
    };
    this.uiManager.setSaveButtonText(t("g.saving"));
    this.uiManager.setSaveButtonEnabled(false);
    this.keyboardManager.removeListeners();
    try {
      await this.uploadMask(
        refs.maskedImage,
        formDatas.maskedImage,
        "selectedIndex"
      );
      await this.uploadImage(refs.paint, formDatas.paint);
      await this.uploadImage(refs.paintedImage, formDatas.paintedImage, false);
      await this.uploadMask(
        refs.paintedMaskedImage,
        formDatas.paintedMaskedImage,
        "combinedIndex"
      );
      ComfyApp.onClipspaceEditorSave();
      this.destroy();
    } catch (error) {
      console.error("Error during upload:", error);
      this.uiManager.setSaveButtonText(t("g.save"));
      this.uiManager.setSaveButtonEnabled(true);
      this.keyboardManager.addListeners();
    }
  }
  getMessageBroker() {
    return this.messageBroker;
  }
  // Helper function to convert a data URL to a Blob object
  dataURLToBlob(dataURL) {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const byteString = atob(parts[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: contentType });
  }
  async uploadImage(filepath, formData, isPaintLayer = true) {
    const success = await requestWithRetries(
      () => api.fetchApi("/upload/image", {
        method: "POST",
        body: formData
      })
    );
    if (!success) {
      throw new Error("Upload failed.");
    }
    if (!isPaintLayer) {
      ClipspaceDialog.invalidatePreview();
      return success;
    }
    try {
      const paintedIndex = ComfyApp.clipspace?.paintedIndex;
      if (ComfyApp.clipspace?.imgs && paintedIndex !== void 0) {
        const newImage = new Image();
        newImage.crossOrigin = "anonymous";
        newImage.src = mkFileUrl({ ref: filepath, preview: true });
        ComfyApp.clipspace.imgs[paintedIndex] = newImage;
        if (ComfyApp.clipspace.images) {
          ComfyApp.clipspace.images[paintedIndex] = filepath;
        }
      }
    } catch (err) {
      console.warn("Failed to update clipspace image:", err);
    }
    ClipspaceDialog.invalidatePreview();
  }
  async uploadMask(filepath, formData, clipspaceLocation) {
    const success = await requestWithRetries(
      () => api.fetchApi("/upload/mask", {
        method: "POST",
        body: formData
      })
    );
    if (!success) {
      throw new Error("Upload failed.");
    }
    try {
      const nameOfIndexToSaveTo = {
        selectedIndex: "selectedIndex",
        combinedIndex: "combinedIndex"
      }[clipspaceLocation];
      if (!nameOfIndexToSaveTo) return;
      const indexToSaveTo = ComfyApp.clipspace?.[nameOfIndexToSaveTo];
      if (!ComfyApp.clipspace?.imgs || indexToSaveTo === void 0) return;
      const newImage = new Image();
      newImage.crossOrigin = "anonymous";
      newImage.src = mkFileUrl({ ref: filepath, preview: true });
      ComfyApp.clipspace.imgs[indexToSaveTo] = newImage;
      if (ComfyApp.clipspace.images) {
        ComfyApp.clipspace.images[indexToSaveTo] = filepath;
      }
    } catch (err) {
      console.warn("Failed to update clipspace image:", err);
    }
    ClipspaceDialog.invalidatePreview();
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.MaskEditorDialog = window.comfyAPI.MaskEditorDialog || {};
window.comfyAPI.MaskEditorDialog.MaskEditorDialog = MaskEditorDialog;
function dataURLToBlob(dataURL) {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const byteString = atob(parts[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: contentType });
}
__name(dataURLToBlob, "dataURLToBlob");
function loadImage(imagePath) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.src = imagePath;
  });
}
__name(loadImage, "loadImage");
async function uploadMask(filepath, formData) {
  await api.fetchApi("/upload/mask", {
    method: "POST",
    body: formData
  }).catch((error) => {
    console.error("Error:", error);
  });
  ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]] = new Image();
  ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]].src = api.apiURL(
    "/view?" + new URLSearchParams(filepath).toString() + app.getPreviewFormatParam() + app.getRandParam()
  );
  if (ComfyApp.clipspace.images)
    ComfyApp.clipspace.images[ComfyApp.clipspace["selectedIndex"]] = filepath;
  ClipspaceDialog.invalidatePreview();
}
__name(uploadMask, "uploadMask");
function prepare_mask(image, maskCanvas, maskCtx, maskColor) {
  maskCtx.drawImage(image, 0, 0, maskCanvas.width, maskCanvas.height);
  const maskData = maskCtx.getImageData(
    0,
    0,
    maskCanvas.width,
    maskCanvas.height
  );
  for (let i = 0; i < maskData.data.length; i += 4) {
    if (maskData.data[i + 3] == 255) maskData.data[i + 3] = 0;
    else maskData.data[i + 3] = 255;
    maskData.data[i] = maskColor.r;
    maskData.data[i + 1] = maskColor.g;
    maskData.data[i + 2] = maskColor.b;
  }
  maskCtx.globalCompositeOperation = "source-over";
  maskCtx.putImageData(maskData, 0, 0);
}
__name(prepare_mask, "prepare_mask");
class MaskEditorDialogOld extends ComfyDialog {
  static {
    __name(this, "MaskEditorDialogOld");
  }
  static instance = null;
  static mousedown_x = null;
  static mousedown_y = null;
  // @ts-expect-error fixme ts strict error
  brush;
  maskCtx;
  // @ts-expect-error fixme ts strict error
  maskCanvas;
  // @ts-expect-error fixme ts strict error
  brush_size_slider;
  // @ts-expect-error fixme ts strict error
  brush_opacity_slider;
  // @ts-expect-error fixme ts strict error
  colorButton;
  // @ts-expect-error fixme ts strict error
  saveButton;
  // @ts-expect-error fixme ts strict error
  zoom_ratio;
  // @ts-expect-error fixme ts strict error
  pan_x;
  // @ts-expect-error fixme ts strict error
  pan_y;
  // @ts-expect-error fixme ts strict error
  imgCanvas;
  // @ts-expect-error fixme ts strict error
  last_display_style;
  // @ts-expect-error fixme ts strict error
  is_visible;
  // @ts-expect-error fixme ts strict error
  image;
  // @ts-expect-error fixme ts strict error
  handler_registered;
  // @ts-expect-error fixme ts strict error
  brush_slider_input;
  // @ts-expect-error fixme ts strict error
  cursorX;
  // @ts-expect-error fixme ts strict error
  cursorY;
  // @ts-expect-error fixme ts strict error
  mousedown_pan_x;
  // @ts-expect-error fixme ts strict error
  mousedown_pan_y;
  // @ts-expect-error fixme ts strict error
  last_pressure;
  // @ts-expect-error fixme ts strict error
  pointer_type;
  // @ts-expect-error fixme ts strict error
  brush_pointer_type_select;
  static getInstance() {
    if (!MaskEditorDialogOld.instance) {
      MaskEditorDialogOld.instance = new MaskEditorDialogOld();
    }
    return MaskEditorDialogOld.instance;
  }
  is_layout_created = false;
  constructor() {
    super();
    this.element = $el("div.comfy-modal", { parent: document.body }, [
      $el("div.comfy-modal-content", [...this.createButtons()])
    ]);
  }
  createButtons() {
    return [];
  }
  // @ts-expect-error fixme ts strict error
  createButton(name, callback) {
    var button = document.createElement("button");
    button.style.pointerEvents = "auto";
    button.innerText = name;
    button.addEventListener("click", callback);
    return button;
  }
  // @ts-expect-error fixme ts strict error
  createLeftButton(name, callback) {
    var button = this.createButton(name, callback);
    button.style.cssFloat = "left";
    button.style.marginRight = "4px";
    return button;
  }
  // @ts-expect-error fixme ts strict error
  createRightButton(name, callback) {
    var button = this.createButton(name, callback);
    button.style.cssFloat = "right";
    button.style.marginLeft = "4px";
    return button;
  }
  // @ts-expect-error fixme ts strict error
  createLeftSlider(self, name, callback) {
    const divElement = document.createElement("div");
    divElement.id = "maskeditor-slider";
    divElement.style.cssFloat = "left";
    divElement.style.fontFamily = "sans-serif";
    divElement.style.marginRight = "4px";
    divElement.style.color = "var(--input-text)";
    divElement.style.backgroundColor = "var(--comfy-input-bg)";
    divElement.style.borderRadius = "8px";
    divElement.style.borderColor = "var(--border-color)";
    divElement.style.borderStyle = "solid";
    divElement.style.fontSize = "15px";
    divElement.style.height = "25px";
    divElement.style.padding = "1px 6px";
    divElement.style.display = "flex";
    divElement.style.position = "relative";
    divElement.style.top = "2px";
    divElement.style.pointerEvents = "auto";
    self.brush_slider_input = document.createElement("input");
    self.brush_slider_input.setAttribute("type", "range");
    self.brush_slider_input.setAttribute("min", "1");
    self.brush_slider_input.setAttribute("max", "100");
    self.brush_slider_input.setAttribute("value", "10");
    const labelElement = document.createElement("label");
    labelElement.textContent = name;
    divElement.appendChild(labelElement);
    divElement.appendChild(self.brush_slider_input);
    self.brush_slider_input.addEventListener("change", callback);
    return divElement;
  }
  // @ts-expect-error fixme ts strict error
  createOpacitySlider(self, name, callback) {
    const divElement = document.createElement("div");
    divElement.id = "maskeditor-opacity-slider";
    divElement.style.cssFloat = "left";
    divElement.style.fontFamily = "sans-serif";
    divElement.style.marginRight = "4px";
    divElement.style.color = "var(--input-text)";
    divElement.style.backgroundColor = "var(--comfy-input-bg)";
    divElement.style.borderRadius = "8px";
    divElement.style.borderColor = "var(--border-color)";
    divElement.style.borderStyle = "solid";
    divElement.style.fontSize = "15px";
    divElement.style.height = "25px";
    divElement.style.padding = "1px 6px";
    divElement.style.display = "flex";
    divElement.style.position = "relative";
    divElement.style.top = "2px";
    divElement.style.pointerEvents = "auto";
    self.opacity_slider_input = document.createElement("input");
    self.opacity_slider_input.setAttribute("type", "range");
    self.opacity_slider_input.setAttribute("min", "0.1");
    self.opacity_slider_input.setAttribute("max", "1.0");
    self.opacity_slider_input.setAttribute("step", "0.01");
    self.opacity_slider_input.setAttribute("value", "0.7");
    const labelElement = document.createElement("label");
    labelElement.textContent = name;
    divElement.appendChild(labelElement);
    divElement.appendChild(self.opacity_slider_input);
    self.opacity_slider_input.addEventListener("input", callback);
    return divElement;
  }
  createPointerTypeSelect(self) {
    const divElement = document.createElement("div");
    divElement.id = "maskeditor-pointer-type";
    divElement.style.cssFloat = "left";
    divElement.style.fontFamily = "sans-serif";
    divElement.style.marginRight = "4px";
    divElement.style.color = "var(--input-text)";
    divElement.style.backgroundColor = "var(--comfy-input-bg)";
    divElement.style.borderRadius = "8px";
    divElement.style.borderColor = "var(--border-color)";
    divElement.style.borderStyle = "solid";
    divElement.style.fontSize = "15px";
    divElement.style.height = "25px";
    divElement.style.padding = "1px 6px";
    divElement.style.display = "flex";
    divElement.style.position = "relative";
    divElement.style.top = "2px";
    divElement.style.pointerEvents = "auto";
    const labelElement = document.createElement("label");
    labelElement.textContent = "Pointer Type:";
    const selectElement = document.createElement("select");
    selectElement.style.borderRadius = "0";
    selectElement.style.borderColor = "transparent";
    selectElement.style.borderStyle = "unset";
    selectElement.style.fontSize = "0.9em";
    const optionArc = document.createElement("option");
    optionArc.value = "arc";
    optionArc.text = "Circle";
    optionArc.selected = true;
    const optionRect = document.createElement("option");
    optionRect.value = "rect";
    optionRect.text = "Square";
    selectElement.appendChild(optionArc);
    selectElement.appendChild(optionRect);
    selectElement.addEventListener("change", (event) => {
      const target = event.target;
      self.pointer_type = target.value;
      this.setBrushBorderRadius(self);
    });
    divElement.appendChild(labelElement);
    divElement.appendChild(selectElement);
    return divElement;
  }
  setBrushBorderRadius(self) {
    if (self.pointer_type === "rect") {
      this.brush.style.borderRadius = "0%";
      this.brush.style.MozBorderRadius = "0%";
      this.brush.style.WebkitBorderRadius = "0%";
    } else {
      this.brush.style.borderRadius = "50%";
      this.brush.style.MozBorderRadius = "50%";
      this.brush.style.WebkitBorderRadius = "50%";
    }
  }
  setlayout(imgCanvas, maskCanvas) {
    const self = this;
    self.pointer_type = "arc";
    var bottom_panel = document.createElement("div");
    bottom_panel.style.position = "absolute";
    bottom_panel.style.bottom = "0px";
    bottom_panel.style.left = "20px";
    bottom_panel.style.right = "20px";
    bottom_panel.style.height = "50px";
    bottom_panel.style.pointerEvents = "none";
    var brush = document.createElement("div");
    brush.id = "brush";
    brush.style.backgroundColor = "transparent";
    brush.style.outline = "1px dashed black";
    brush.style.boxShadow = "0 0 0 1px white";
    brush.style.position = "absolute";
    brush.style.zIndex = "8889";
    brush.style.pointerEvents = "none";
    this.brush = brush;
    this.setBrushBorderRadius(self);
    this.element.appendChild(imgCanvas);
    this.element.appendChild(maskCanvas);
    this.element.appendChild(bottom_panel);
    document.body.appendChild(brush);
    var clearButton = this.createLeftButton("Clear", () => {
      self.maskCtx.clearRect(
        0,
        0,
        self.maskCanvas.width,
        self.maskCanvas.height
      );
    });
    this.brush_size_slider = this.createLeftSlider(
      self,
      "Thickness",
      // @ts-expect-error fixme ts strict error
      (event) => {
        self.brush_size = event.target.value;
        self.updateBrushPreview(self);
      }
    );
    this.brush_opacity_slider = this.createOpacitySlider(
      self,
      "Opacity",
      // @ts-expect-error fixme ts strict error
      (event) => {
        self.brush_opacity = event.target.value;
        if (self.brush_color_mode !== "negative") {
          self.maskCanvas.style.opacity = self.brush_opacity.toString();
        }
      }
    );
    this.brush_pointer_type_select = this.createPointerTypeSelect(self);
    this.colorButton = this.createLeftButton(this.getColorButtonText(), () => {
      if (self.brush_color_mode === "black") {
        self.brush_color_mode = "white";
      } else if (self.brush_color_mode === "white") {
        self.brush_color_mode = "negative";
      } else {
        self.brush_color_mode = "black";
      }
      self.updateWhenBrushColorModeChanged();
    });
    var cancelButton = this.createRightButton("Cancel", () => {
      document.removeEventListener("keydown", MaskEditorDialogOld.handleKeyDown);
      self.close();
    });
    this.saveButton = this.createRightButton("Save", () => {
      document.removeEventListener("keydown", MaskEditorDialogOld.handleKeyDown);
      self.save();
    });
    this.element.appendChild(imgCanvas);
    this.element.appendChild(maskCanvas);
    this.element.appendChild(bottom_panel);
    bottom_panel.appendChild(clearButton);
    bottom_panel.appendChild(this.saveButton);
    bottom_panel.appendChild(cancelButton);
    bottom_panel.appendChild(this.brush_size_slider);
    bottom_panel.appendChild(this.brush_opacity_slider);
    bottom_panel.appendChild(this.brush_pointer_type_select);
    bottom_panel.appendChild(this.colorButton);
    imgCanvas.style.position = "absolute";
    maskCanvas.style.position = "absolute";
    imgCanvas.style.top = "200";
    imgCanvas.style.left = "0";
    maskCanvas.style.top = imgCanvas.style.top;
    maskCanvas.style.left = imgCanvas.style.left;
    const maskCanvasStyle = this.getMaskCanvasStyle();
    maskCanvas.style.mixBlendMode = maskCanvasStyle.mixBlendMode;
    maskCanvas.style.opacity = maskCanvasStyle.opacity.toString();
  }
  async show() {
    this.zoom_ratio = 1;
    this.pan_x = 0;
    this.pan_y = 0;
    if (!this.is_layout_created) {
      const imgCanvas = document.createElement("canvas");
      const maskCanvas = document.createElement("canvas");
      imgCanvas.id = "imageCanvas";
      maskCanvas.id = "maskCanvas";
      this.setlayout(imgCanvas, maskCanvas);
      this.imgCanvas = imgCanvas;
      this.maskCanvas = maskCanvas;
      this.maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      this.setEventHandler(maskCanvas);
      this.is_layout_created = true;
      const self = this;
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === "attributes" && mutation.attributeName === "style") {
            if (self.last_display_style && self.last_display_style != "none" && self.element.style.display == "none") {
              self.brush.style.display = "none";
              ComfyApp.onClipspaceEditorClosed();
            }
            self.last_display_style = self.element.style.display;
          }
        });
      });
      const config = { attributes: true };
      observer.observe(this.element, config);
    }
    document.addEventListener("keydown", MaskEditorDialogOld.handleKeyDown);
    if (ComfyApp.clipspace_return_node) {
      this.saveButton.innerText = "Save to node";
    } else {
      this.saveButton.innerText = "Save";
    }
    this.saveButton.disabled = false;
    this.element.style.display = "block";
    this.element.style.width = "85%";
    this.element.style.margin = "0 7.5%";
    this.element.style.height = "100vh";
    this.element.style.top = "50%";
    this.element.style.left = "42%";
    this.element.style.zIndex = "8888";
    await this.setImages(this.imgCanvas);
    this.is_visible = true;
  }
  isOpened() {
    return this.element.style.display == "block";
  }
  // @ts-expect-error fixme ts strict error
  invalidateCanvas(orig_image, mask_image) {
    this.imgCanvas.width = orig_image.width;
    this.imgCanvas.height = orig_image.height;
    this.maskCanvas.width = orig_image.width;
    this.maskCanvas.height = orig_image.height;
    let imgCtx = this.imgCanvas.getContext("2d", { willReadFrequently: true });
    let maskCtx = this.maskCanvas.getContext("2d", {
      willReadFrequently: true
    });
    imgCtx.drawImage(orig_image, 0, 0, orig_image.width, orig_image.height);
    prepare_mask(mask_image, this.maskCanvas, maskCtx, this.getMaskColor());
  }
  // @ts-expect-error fixme ts strict error
  async setImages(imgCanvas) {
    let self = this;
    const imgCtx = imgCanvas.getContext("2d", { willReadFrequently: true });
    const maskCtx = this.maskCtx;
    const maskCanvas = this.maskCanvas;
    imgCtx.clearRect(0, 0, this.imgCanvas.width, this.imgCanvas.height);
    maskCtx.clearRect(0, 0, this.maskCanvas.width, this.maskCanvas.height);
    const alpha_url = new URL(
      // @ts-expect-error fixme ts strict error
      ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]].src
    );
    alpha_url.searchParams.delete("channel");
    alpha_url.searchParams.delete("preview");
    alpha_url.searchParams.set("channel", "a");
    let mask_image = await loadImage(alpha_url);
    const rgb_url = new URL(
      // @ts-expect-error fixme ts strict error
      ComfyApp.clipspace.imgs[ComfyApp.clipspace["selectedIndex"]].src
    );
    rgb_url.searchParams.delete("channel");
    rgb_url.searchParams.set("channel", "rgb");
    this.image = new Image();
    this.image.onload = function() {
      maskCanvas.width = self.image.width;
      maskCanvas.height = self.image.height;
      self.invalidateCanvas(self.image, mask_image);
      self.initializeCanvasPanZoom();
    };
    this.image.src = rgb_url.toString();
  }
  initializeCanvasPanZoom() {
    let drawWidth = this.image.width;
    let drawHeight = this.image.height;
    let width = this.element.clientWidth;
    let height = this.element.clientHeight;
    if (this.image.width > width) {
      drawWidth = width;
      drawHeight = drawWidth / this.image.width * this.image.height;
    }
    if (drawHeight > height) {
      drawHeight = height;
      drawWidth = drawHeight / this.image.height * this.image.width;
    }
    this.zoom_ratio = drawWidth / this.image.width;
    const canvasX = (width - drawWidth) / 2;
    const canvasY = (height - drawHeight) / 2;
    this.pan_x = canvasX;
    this.pan_y = canvasY;
    this.invalidatePanZoom();
  }
  invalidatePanZoom() {
    let raw_width = this.image.width * this.zoom_ratio;
    let raw_height = this.image.height * this.zoom_ratio;
    if (this.pan_x + raw_width < 10) {
      this.pan_x = 10 - raw_width;
    }
    if (this.pan_y + raw_height < 10) {
      this.pan_y = 10 - raw_height;
    }
    let width = `${raw_width}px`;
    let height = `${raw_height}px`;
    let left = `${this.pan_x}px`;
    let top = `${this.pan_y}px`;
    this.maskCanvas.style.width = width;
    this.maskCanvas.style.height = height;
    this.maskCanvas.style.left = left;
    this.maskCanvas.style.top = top;
    this.imgCanvas.style.width = width;
    this.imgCanvas.style.height = height;
    this.imgCanvas.style.left = left;
    this.imgCanvas.style.top = top;
  }
  // @ts-expect-error fixme ts strict error
  setEventHandler(maskCanvas) {
    const self = this;
    if (!this.handler_registered) {
      maskCanvas.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
      this.element.addEventListener(
        "wheel",
        (event) => this.handleWheelEvent(self, event)
      );
      this.element.addEventListener(
        "pointermove",
        (event) => this.pointMoveEvent(self, event)
      );
      this.element.addEventListener(
        "touchmove",
        (event) => this.pointMoveEvent(self, event)
      );
      this.element.addEventListener("dragstart", (event) => {
        if (event.ctrlKey) {
          event.preventDefault();
        }
      });
      maskCanvas.addEventListener(
        "pointerdown",
        (event) => this.handlePointerDown(self, event)
      );
      maskCanvas.addEventListener(
        "pointermove",
        (event) => this.draw_move(self, event)
      );
      maskCanvas.addEventListener(
        "touchmove",
        (event) => this.draw_move(self, event)
      );
      maskCanvas.addEventListener("pointerover", () => {
        this.brush.style.display = "block";
      });
      maskCanvas.addEventListener("pointerleave", () => {
        this.brush.style.display = "none";
      });
      document.addEventListener(
        "pointerup",
        MaskEditorDialogOld.handlePointerUp
      );
      this.handler_registered = true;
    }
  }
  getMaskCanvasStyle() {
    if (this.brush_color_mode === "negative") {
      return {
        mixBlendMode: "difference",
        opacity: "1"
      };
    } else {
      return {
        mixBlendMode: "initial",
        opacity: this.brush_opacity
      };
    }
  }
  getMaskColor() {
    if (this.brush_color_mode === "black") {
      return { r: 0, g: 0, b: 0 };
    }
    if (this.brush_color_mode === "white") {
      return { r: 255, g: 255, b: 255 };
    }
    if (this.brush_color_mode === "negative") {
      return { r: 255, g: 255, b: 255 };
    }
    return { r: 0, g: 0, b: 0 };
  }
  getMaskFillStyle() {
    const maskColor = this.getMaskColor();
    return "rgb(" + maskColor.r + "," + maskColor.g + "," + maskColor.b + ")";
  }
  getColorButtonText() {
    let colorCaption = "unknown";
    if (this.brush_color_mode === "black") {
      colorCaption = "black";
    } else if (this.brush_color_mode === "white") {
      colorCaption = "white";
    } else if (this.brush_color_mode === "negative") {
      colorCaption = "negative";
    }
    return "Color: " + colorCaption;
  }
  updateWhenBrushColorModeChanged() {
    this.colorButton.innerText = this.getColorButtonText();
    const maskCanvasStyle = this.getMaskCanvasStyle();
    this.maskCanvas.style.mixBlendMode = maskCanvasStyle.mixBlendMode;
    this.maskCanvas.style.opacity = maskCanvasStyle.opacity.toString();
    const maskColor = this.getMaskColor();
    const maskData = this.maskCtx.getImageData(
      0,
      0,
      this.maskCanvas.width,
      this.maskCanvas.height
    );
    for (let i = 0; i < maskData.data.length; i += 4) {
      maskData.data[i] = maskColor.r;
      maskData.data[i + 1] = maskColor.g;
      maskData.data[i + 2] = maskColor.b;
    }
    this.maskCtx.putImageData(maskData, 0, 0);
  }
  brush_opacity = 0.7;
  brush_size = 10;
  brush_color_mode = "black";
  drawing_mode = false;
  lastx = -1;
  lasty = -1;
  lasttime = 0;
  // @ts-expect-error fixme ts strict error
  static handleKeyDown(event) {
    const self = MaskEditorDialogOld.instance;
    if (event.key === "]") {
      self.brush_size = Math.min(self.brush_size + 2, 100);
      self.brush_slider_input.value = self.brush_size;
    } else if (event.key === "[") {
      self.brush_size = Math.max(self.brush_size - 2, 1);
      self.brush_slider_input.value = self.brush_size;
    } else if (event.key === "Enter") {
      self.save();
    }
    self.updateBrushPreview(self);
  }
  // @ts-expect-error fixme ts strict error
  static handlePointerUp(event) {
    event.preventDefault();
    this.mousedown_x = null;
    this.mousedown_y = null;
    MaskEditorDialogOld.instance.drawing_mode = false;
  }
  // @ts-expect-error fixme ts strict error
  updateBrushPreview(self) {
    const brush = self.brush;
    var centerX = self.cursorX;
    var centerY = self.cursorY;
    brush.style.width = self.brush_size * 2 * this.zoom_ratio + "px";
    brush.style.height = self.brush_size * 2 * this.zoom_ratio + "px";
    brush.style.left = centerX - self.brush_size * this.zoom_ratio + "px";
    brush.style.top = centerY - self.brush_size * this.zoom_ratio + "px";
  }
  // @ts-expect-error fixme ts strict error
  handleWheelEvent(_, event) {
    event.preventDefault();
    if (event.ctrlKey) {
      if (event.deltaY < 0) {
        this.zoom_ratio = Math.min(10, this.zoom_ratio + 0.2);
      } else {
        this.zoom_ratio = Math.max(0.2, this.zoom_ratio - 0.2);
      }
      this.invalidatePanZoom();
    } else {
      if (event.deltaY < 0) this.brush_size = Math.min(this.brush_size + 2, 100);
      else this.brush_size = Math.max(this.brush_size - 2, 1);
      this.brush_slider_input.value = this.brush_size.toString();
      this.updateBrushPreview(this);
    }
  }
  // @ts-expect-error fixme ts strict error
  pointMoveEvent(self, event) {
    this.cursorX = event.pageX;
    this.cursorY = event.pageY;
    self.updateBrushPreview(self);
    if (event.ctrlKey) {
      event.preventDefault();
      self.pan_move(self, event);
    }
    let left_button_down = window.TouchEvent && event instanceof TouchEvent || event.buttons == 1;
    if (event.shiftKey && left_button_down) {
      self.drawing_mode = false;
      const y = event.clientY;
      let delta = (self.zoom_lasty - y) * 5e-3;
      self.zoom_ratio = Math.max(
        Math.min(10, self.last_zoom_ratio - delta),
        0.2
      );
      this.invalidatePanZoom();
      return;
    }
  }
  // @ts-expect-error fixme ts strict error
  pan_move(self, event) {
    if (event.buttons == 1) {
      if (MaskEditorDialogOld.mousedown_x) {
        let deltaX = MaskEditorDialogOld.mousedown_x - event.clientX;
        let deltaY = MaskEditorDialogOld.mousedown_y - event.clientY;
        self.pan_x = this.mousedown_pan_x - deltaX;
        self.pan_y = this.mousedown_pan_y - deltaY;
        self.invalidatePanZoom();
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  draw_move(self, event) {
    if (event.ctrlKey || event.shiftKey) {
      return;
    }
    event.preventDefault();
    this.cursorX = event.pageX;
    this.cursorY = event.pageY;
    self.updateBrushPreview(self);
    let left_button_down = window.TouchEvent && event instanceof TouchEvent || event.buttons == 1;
    let right_button_down = [2, 5, 32].includes(event.buttons);
    if (!event.altKey && left_button_down) {
      var diff = performance.now() - self.lasttime;
      const maskRect = self.maskCanvas.getBoundingClientRect();
      var x = event.offsetX;
      var y = event.offsetY;
      if (event.offsetX == null) {
        x = event.targetTouches[0].clientX - maskRect.left;
      }
      if (event.offsetY == null) {
        y = event.targetTouches[0].clientY - maskRect.top;
      }
      x /= self.zoom_ratio;
      y /= self.zoom_ratio;
      var brush_size = this.brush_size;
      if (event instanceof PointerEvent && event.pointerType == "pen") {
        brush_size *= event.pressure;
        this.last_pressure = event.pressure;
      } else if (window.TouchEvent && event instanceof TouchEvent && diff < 20) {
        brush_size *= this.last_pressure;
      } else {
        brush_size = this.brush_size;
      }
      if (diff > 20 && !this.drawing_mode)
        requestAnimationFrame(() => {
          self.init_shape(
            self,
            "source-over"
            /* SourceOver */
          );
          self.draw_shape(self, x, y, brush_size);
          self.lastx = x;
          self.lasty = y;
        });
      else
        requestAnimationFrame(() => {
          self.init_shape(
            self,
            "source-over"
            /* SourceOver */
          );
          var dx = x - self.lastx;
          var dy = y - self.lasty;
          var distance = Math.sqrt(dx * dx + dy * dy);
          var directionX = dx / distance;
          var directionY = dy / distance;
          for (var i = 0; i < distance; i += 5) {
            var px = self.lastx + directionX * i;
            var py = self.lasty + directionY * i;
            self.draw_shape(self, px, py, brush_size);
          }
          self.lastx = x;
          self.lasty = y;
        });
      self.lasttime = performance.now();
    } else if (event.altKey && left_button_down || right_button_down) {
      const maskRect = self.maskCanvas.getBoundingClientRect();
      const x2 = (event.offsetX || event.targetTouches[0].clientX - maskRect.left) / self.zoom_ratio;
      const y2 = (event.offsetY || event.targetTouches[0].clientY - maskRect.top) / self.zoom_ratio;
      var brush_size = this.brush_size;
      if (event instanceof PointerEvent && event.pointerType == "pen") {
        brush_size *= event.pressure;
        this.last_pressure = event.pressure;
      } else if (window.TouchEvent && event instanceof TouchEvent && // @ts-expect-error fixme ts strict error
      diff < 20) {
        brush_size *= this.last_pressure;
      } else {
        brush_size = this.brush_size;
      }
      if (diff > 20 && !this.drawing_mode)
        requestAnimationFrame(() => {
          self.init_shape(
            self,
            "destination-out"
            /* DestinationOut */
          );
          self.draw_shape(self, x2, y2, brush_size);
          self.lastx = x2;
          self.lasty = y2;
        });
      else
        requestAnimationFrame(() => {
          self.init_shape(
            self,
            "destination-out"
            /* DestinationOut */
          );
          var dx = x2 - self.lastx;
          var dy = y2 - self.lasty;
          var distance = Math.sqrt(dx * dx + dy * dy);
          var directionX = dx / distance;
          var directionY = dy / distance;
          for (var i = 0; i < distance; i += 5) {
            var px = self.lastx + directionX * i;
            var py = self.lasty + directionY * i;
            self.draw_shape(self, px, py, brush_size);
          }
          self.lastx = x2;
          self.lasty = y2;
        });
      self.lasttime = performance.now();
    }
  }
  // @ts-expect-error fixme ts strict error
  handlePointerDown(self, event) {
    if (event.ctrlKey) {
      if (event.buttons == 1) {
        MaskEditorDialogOld.mousedown_x = event.clientX;
        MaskEditorDialogOld.mousedown_y = event.clientY;
        this.mousedown_pan_x = this.pan_x;
        this.mousedown_pan_y = this.pan_y;
      }
      return;
    }
    var brush_size = this.brush_size;
    if (event instanceof PointerEvent && event.pointerType == "pen") {
      brush_size *= event.pressure;
      this.last_pressure = event.pressure;
    }
    if ([0, 2, 5].includes(event.button)) {
      self.drawing_mode = true;
      event.preventDefault();
      if (event.shiftKey) {
        self.zoom_lasty = event.clientY;
        self.last_zoom_ratio = self.zoom_ratio;
        return;
      }
      const maskRect = self.maskCanvas.getBoundingClientRect();
      const x = (event.offsetX || event.targetTouches[0].clientX - maskRect.left) / self.zoom_ratio;
      const y = (event.offsetY || event.targetTouches[0].clientY - maskRect.top) / self.zoom_ratio;
      if (!event.altKey && event.button == 0) {
        self.init_shape(
          self,
          "source-over"
          /* SourceOver */
        );
      } else {
        self.init_shape(
          self,
          "destination-out"
          /* DestinationOut */
        );
      }
      self.draw_shape(self, x, y, brush_size);
      self.lastx = x;
      self.lasty = y;
      self.lasttime = performance.now();
    }
  }
  // @ts-expect-error fixme ts strict error
  init_shape(self, compositionOperation) {
    self.maskCtx.beginPath();
    if (compositionOperation == "source-over") {
      self.maskCtx.fillStyle = this.getMaskFillStyle();
      self.maskCtx.globalCompositeOperation = "source-over";
    } else if (compositionOperation == "destination-out") {
      self.maskCtx.globalCompositeOperation = "destination-out";
    }
  }
  // @ts-expect-error fixme ts strict error
  draw_shape(self, x, y, brush_size) {
    if (self.pointer_type === "rect") {
      self.maskCtx.rect(
        x - brush_size,
        y - brush_size,
        brush_size * 2,
        brush_size * 2
      );
    } else {
      self.maskCtx.arc(x, y, brush_size, 0, Math.PI * 2, false);
    }
    self.maskCtx.fill();
  }
  async save() {
    const backupCanvas = document.createElement("canvas");
    const backupCtx = backupCanvas.getContext("2d", {
      willReadFrequently: true
    });
    backupCanvas.width = this.image.width;
    backupCanvas.height = this.image.height;
    backupCtx.clearRect(0, 0, backupCanvas.width, backupCanvas.height);
    backupCtx.drawImage(
      this.maskCanvas,
      0,
      0,
      this.maskCanvas.width,
      this.maskCanvas.height,
      0,
      0,
      backupCanvas.width,
      backupCanvas.height
    );
    const backupData = backupCtx.getImageData(
      0,
      0,
      backupCanvas.width,
      backupCanvas.height
    );
    for (let i = 0; i < backupData.data.length; i += 4) {
      if (backupData.data[i + 3] == 255) backupData.data[i + 3] = 0;
      else backupData.data[i + 3] = 255;
      backupData.data[i] = 0;
      backupData.data[i + 1] = 0;
      backupData.data[i + 2] = 0;
    }
    backupCtx.globalCompositeOperation = "source-over";
    backupCtx.putImageData(backupData, 0, 0);
    const formData = new FormData();
    const filename = "clipspace-mask-" + performance.now() + ".png";
    const item = {
      filename,
      subfolder: "clipspace",
      type: "input"
    };
    if (ComfyApp.clipspace.images) ComfyApp.clipspace.images[0] = item;
    if (ComfyApp.clipspace.widgets) {
      const index = ComfyApp.clipspace.widgets.findIndex(
        (obj) => obj.name === "image"
      );
      if (index >= 0) ComfyApp.clipspace.widgets[index].value = item;
    }
    const dataURL = backupCanvas.toDataURL();
    const blob = dataURLToBlob(dataURL);
    let original_url = new URL(this.image.src);
    const original_ref = {
      // @ts-expect-error fixme ts strict error
      filename: original_url.searchParams.get("filename")
    };
    let original_subfolder = original_url.searchParams.get("subfolder");
    if (original_subfolder) original_ref.subfolder = original_subfolder;
    let original_type = original_url.searchParams.get("type");
    if (original_type) original_ref.type = original_type;
    formData.append("image", blob, filename);
    formData.append("original_ref", JSON.stringify(original_ref));
    formData.append("type", "input");
    formData.append("subfolder", "clipspace");
    this.saveButton.innerText = "Saving...";
    this.saveButton.disabled = true;
    await uploadMask(item, formData);
    ComfyApp.onClipspaceEditorSave();
    this.close();
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.maskEditorOld = window.comfyAPI.maskEditorOld || {};
window.comfyAPI.maskEditorOld.MaskEditorDialogOld = MaskEditorDialogOld;
const styles = `
  #maskEditorContainer {
    display: fixed;
  }
  #maskEditor_brush {
    position: absolute;
    backgroundColor: transparent;
    z-index: 8889;
    pointer-events: none;
    border-radius: 50%;
    overflow: visible;
    outline: 1px dashed black;
    box-shadow: 0 0 0 1px white;
  }
  #maskEditor_brushPreviewGradient {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: none;
  }
  #maskEditor {
    display: block;
    width: 100%;
    height: 100vh;
    left: 0;
    z-index: 8888;
    position: fixed;
    background: rgba(50,50,50,0.75);
    backdrop-filter: blur(10px);
    overflow: hidden;
    user-select: none;
    --mask-editor-top-bar-height: 44px;
  }
  #maskEditor_sidePanelContainer {
    height: 100%;
    width: 220px;
    z-index: 8888;
    display: flex;
    flex-direction: column;
  }
  #maskEditor_sidePanel {
    background: var(--comfy-menu-bg);
    height: 100%;
    display: flex;
    align-items: center;
    overflow-y: auto;
    width: 220px;
    padding: 0 10px;
  }
  #maskEditor_sidePanelContent {
    width: 100%;
  }
  #maskEditor_sidePanelShortcuts {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    gap: 10px;
    justify-content: center;
  }
  .maskEditor_sidePanelIconButton {
    width: 40px;
    height: 40px;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s;
  }
  .maskEditor_sidePanelIconButton:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  #maskEditor_sidePanelBrushSettings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px;
  }
  .maskEditor_sidePanelTitle {
    text-align: center;
    font-size: 15px;
    font-family: sans-serif;
    color: var(--descrip-text);
    margin-top: 10px;
  }
  #maskEditor_sidePanelBrushShapeContainer {
    display: flex;
    width: 180px;
    height: 50px;
    border: 1px solid var(--border-color);
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.2);
  }
  #maskEditor_sidePanelBrushShapeCircle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    pointer-events: auto;
    transition: background 0.1s;
    margin-left: 7.5px;
  }
  .maskEditor_sidePanelBrushRange {
    width: 180px;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }
  .maskEditor_sidePanelBrushRange::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: grab;
    margin-top: -8px;
    background: var(--p-surface-700);
    border: 1px solid var(--border-color);
  }
  .maskEditor_sidePanelBrushRange::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: grab;
    background: var(--p-surface-800);
    border: 1px solid var(--border-color);
  }
  .maskEditor_sidePanelBrushRange::-webkit-slider-runnable-track {
    background: var(--p-surface-700);
    height: 3px;
  }
  .maskEditor_sidePanelBrushRange::-moz-range-track {
    background: var(--p-surface-700);
    height: 3px;
  }

  #maskEditor_sidePanelBrushShapeSquare {
    width: 35px;
    height: 35px;
    margin: 5px;
    border: 1px solid var(--border-color);
    pointer-events: auto;
    transition: background 0.1s;
  }

  .maskEditor_brushShape_dark {
    background: transparent;
  }

  .maskEditor_brushShape_dark:hover {
    background: var(--p-surface-900);
  }

  .maskEditor_brushShape_light {
    background: transparent;
  }

  .maskEditor_brushShape_light:hover {
    background: var(--comfy-menu-bg);
  }

  #maskEditor_sidePanelImageLayerSettings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  .maskEditor_sidePanelLayer {
    display: flex;
    width: 100%;
    height: 50px;
  }
  .maskEditor_sidePanelLayerVisibilityContainer {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .maskEditor_sidePanelVisibilityToggle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    pointer-events: auto;
  }
  .maskEditor_sidePanelLayerIconContainer {
    width: 60px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: var(--input-text);
  }
  .maskEditor_sidePanelLayerIconContainer svg {
    width: 30px;
    height: 30px;
  }
  #maskEditor_sidePanelMaskLayerBlendingContainer {
    width: 80px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #maskEditor_sidePanelMaskLayerBlendingSelect {
    width: 80px;
    height: 30px;
    border: 1px solid var(--border-color);
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--input-text);
    font-family: sans-serif;
    font-size: 15px;
    pointer-events: auto;
    transition: background-color border 0.1s;
  }
  #maskEditor_sidePanelClearCanvasButton:hover {
    background-color: var(--p-overlaybadge-outline-color);
    border: none;
  }
  #maskEditor_sidePanelClearCanvasButton {
    width: 180px;
    height: 30px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--border-color);
    color: var(--input-text);
    font-family: sans-serif;
    font-size: 15px;
    pointer-events: auto;
    transition: background-color 0.1s;
  }
  #maskEditor_sidePanelClearCanvasButton:hover {
    background-color: var(--p-overlaybadge-outline-color);
  }
  #maskEditor_sidePanelHorizontalButtonContainer {
    display: flex;
    gap: 10px;
    height: 40px;
  }
  .maskEditor_sidePanelBigButton {
    width: 85px;
    height: 30px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--border-color);
    color: var(--input-text);
    font-family: sans-serif;
    font-size: 15px;
    pointer-events: auto;
    transition: background-color border 0.1s;
  }
  .maskEditor_sidePanelBigButton:hover {
    background-color: var(--p-overlaybadge-outline-color);
    border: none;
  }
  #maskEditor_toolPanel {
    height: 100%;
    width: 4rem;
    z-index: 8888;
    background: var(--comfy-menu-bg);
    display: flex;
    flex-direction: column;
  }
  .maskEditor_toolPanelContainer {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color 0.2s;
  }
  .maskEditor_toolPanelContainerSelected svg {
    fill: var(--p-button-text-primary-color) !important;
  }
  .maskEditor_toolPanelContainerSelected .maskEditor_toolPanelIndicator {
    display: block;
  }
  .maskEditor_toolPanelContainer svg {
    width: 75%;
    aspect-ratio: 1/1;
    fill: var(--p-button-text-secondary-color);
  }

  .maskEditor_toolPanelContainerDark:hover {
    background-color: var(--p-surface-800);
  }

  .maskEditor_toolPanelContainerLight:hover {
    background-color: var(--p-surface-300);
  }

  .maskEditor_toolPanelIndicator {
    display: none;
    height: 100%;
    width: 4px;
    position: absolute;
    left: 0;
    background: var(--p-button-text-primary-color);
  }
  #maskEditor_sidePanelPaintBucketSettings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px;
  }
  #canvasBackground {
    background: white;
    width: 100%;
    height: 100%;
  }
  #maskEditor_sidePanelButtonsContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
  .maskEditor_sidePanelSeparator {
    width: 100%;
    height: 2px;
    background: var(--border-color);
    margin-top: 1.5em;
    margin-bottom: 5px;
  }
  #maskEditor_pointerZone {
    width: calc(100% - 4rem - 220px);
    height: 100%;
  }
  #maskEditor_uiContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 8888;
    display: flex;
    flex-direction: column;
  }
  #maskEditorCanvasContainer {
    position: absolute;
    width: 1000px;
    height: 667px;
    left: 359px;
    top: 280px;
  }
  #imageCanvas {
    width: 100%;
    height: 100%;
  }
  #maskCanvas {
    width: 100%;
    height: 100%;
  }
  #maskEditor_uiHorizontalContainer {
    width: 100%;
    height: calc(100% - var(--mask-editor-top-bar-height));
    display: flex;
  }
  #maskEditor_topBar {
    display: flex;
    height: var(--mask-editor-top-bar-height);
    align-items: center;
    background: var(--comfy-menu-bg);
    shrink: 0;
  }
  #maskEditor_topBarTitle {
    margin: 0;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.2em;
  }
  #maskEditor_topBarButtonContainer {
    display: flex;
    gap: 10px;
    margin-right: 0.5rem;
    position: absolute;
    right: 0;
    width: 100%;
  }
  #maskEditor_topBarShortcutsContainer {
    display: flex;
    gap: 10px;
    margin-left: 5px;
  }

  .maskEditor_topPanelIconButton_dark {
    width: 50px;
    height: 30px;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s;
    background: var(--p-surface-800);
    border: 1px solid var(--p-form-field-border-color);
    border-radius: 10px;
  }

  .maskEditor_topPanelIconButton_dark:hover {
      background-color: var(--p-surface-900);
  }

  .maskEditor_topPanelIconButton_dark svg {
    width: 25px;
    height: 25px;
    pointer-events: none;
    fill: var(--input-text);
  }

  .maskEditor_topPanelIconButton_light {
    width: 50px;
    height: 30px;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s;
    background: var(--comfy-menu-bg);
    border: 1px solid var(--p-form-field-border-color);
    border-radius: 10px;
  }

  .maskEditor_topPanelIconButton_light:hover {
      background-color: var(--p-surface-300);
  }

  .maskEditor_topPanelIconButton_light svg {
    width: 25px;
    height: 25px;
    pointer-events: none;
    fill: var(--input-text);
  }

  .maskEditor_topPanelButton_dark {
    height: 30px;
    background: var(--p-surface-800);
    border: 1px solid var(--p-form-field-border-color);
    border-radius: 10px;
    color: var(--input-text);
    font-family: sans-serif;
    pointer-events: auto;
    transition: 0.1s;
    width: 60px;
  }

  .maskEditor_topPanelButton_dark:hover {
    background-color: var(--p-surface-900);
  }

  .maskEditor_topPanelButton_light {
    height: 30px;
    background: var(--comfy-menu-bg);
    border: 1px solid var(--p-form-field-border-color);
    border-radius: 10px;
    color: var(--input-text);
    font-family: sans-serif;
    pointer-events: auto;
    transition: 0.1s;
    width: 60px;
  }

  .maskEditor_topPanelButton_light:hover {
    background-color: var(--p-surface-300);
  }


  #maskEditor_sidePanelColorSelectSettings {
    flex-direction: column;
  }

  .maskEditor_sidePanel_paintBucket_Container {
    width: 180px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .maskEditor_sidePanel_colorSelect_Container {
    display: flex;
    width: 180px;
    align-items: center;
    gap: 5px;
    height: 30px;
  }

  #maskEditor_sidePanelVisibilityToggle {
    position: absolute;
    right: 0;
  }

  #maskEditor_sidePanelColorSelectMethodSelect {
    position: absolute;
    right: 0;
    height: 30px;
    border-radius: 0;
    border: 1px solid var(--border-color);
    background: rgba(0,0,0,0.2);
  }

  #maskEditor_sidePanelVisibilityToggle {
    position: absolute;
    right: 0;
  }

  .maskEditor_sidePanel_colorSelect_tolerance_container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .maskEditor_sidePanelContainerColumn {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 12px;
  }

  .maskEditor_sidePanelContainerRow {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    min-height: 24px;
    position: relative;
  }

  .maskEditor_accent_bg_dark {
    background: var(--p-surface-800);
  }

  .maskEditor_accent_bg_very_dark {
    background: var(--p-surface-900);
  }

  .maskEditor_accent_bg_light {
    background: var(--p-surface-300);
  }

  .maskEditor_accent_bg_very_light {
    background: var(--comfy-menu-bg);
  }

  #maskEditor_paintBucketSettings {
    display: none;
  }

  #maskEditor_colorSelectSettings {
    display: none;
  }

  .maskEditor_sidePanelToggleContainer {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0;
  }

  .maskEditor_toggle_bg_dark {
    background: var(--p-surface-700);
  }

  .maskEditor_toggle_bg_light {
    background: var(--p-surface-300);
  }

  .maskEditor_sidePanelToggleSwitch {
    display: inline-block;
    border-radius: 16px;
    width: 40px;
    height: 24px;
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
  }
  .maskEditor_sidePanelToggleSwitch:before, .maskEditor_sidePanelToggleSwitch:after {
    content: "";
  }
  .maskEditor_sidePanelToggleSwitch:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: ease 0.2s;
  }
  .maskEditor_sidePanelToggleContainer:hover .maskEditor_sidePanelToggleSwitch:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  }
  .maskEditor_sidePanelToggleCheckbox:checked + .maskEditor_sidePanelToggleSwitch {
    background: var(--p-button-text-primary-color);
  }
  .maskEditor_sidePanelToggleCheckbox:checked + .maskEditor_toggle_bg_dark:before {
    background: var(--p-surface-900);
  }
  .maskEditor_sidePanelToggleCheckbox:checked + .maskEditor_toggle_bg_light:before {
    background: var(--comfy-menu-bg);
  }
  .maskEditor_sidePanelToggleCheckbox:checked + .maskEditor_sidePanelToggleSwitch:before {
    left: 20px;
  }

  .maskEditor_sidePanelToggleCheckbox {
    position: absolute;
    visibility: hidden;
  }

  .maskEditor_sidePanelDropdown_dark {
    border: 1px solid var(--p-form-field-border-color);
    background: var(--p-surface-900);
    height: 24px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 6px;
    transition: background 0.1s;
  }

  .maskEditor_sidePanelDropdown_dark option {
    background: var(--p-surface-900);
  }

  .maskEditor_sidePanelDropdown_dark:focus {
    outline: 1px solid var(--p-button-text-primary-color);
  }

  .maskEditor_sidePanelDropdown_dark option:hover {
    background: white;
  }
  .maskEditor_sidePanelDropdown_dark option:active {
    background: var(--p-highlight-background);
  }

  .maskEditor_sidePanelDropdown_light {
    border: 1px solid var(--p-form-field-border-color);
    background: var(--comfy-menu-bg);
    height: 24px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 6px;
    transition: background 0.1s;
  }

  .maskEditor_sidePanelDropdown_light option {
    background: var(--comfy-menu-bg);
  }

  .maskEditor_sidePanelDropdown_light:focus {
    outline: 1px solid var(--p-surface-300);
  }

  .maskEditor_sidePanelDropdown_light option:hover {
    background: white;
  }
  .maskEditor_sidePanelDropdown_light option:active {
    background: var(--p-surface-300);
  }

  .maskEditor_layerRow {
    height: 50px;
    width: 100%;
    border-radius: 10px;
  }

  .maskEditor_sidePanelLayerPreviewContainer {
    width: 40px;
    height: 30px;
  }

  .maskEditor_sidePanelLayerPreviewContainer > svg{
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--p-surface-100);
  }

  #maskEditor_sidePanelImageLayerImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .maskEditor_sidePanelSubTitle {
    text-align: left;
    font-size: 12px;
    font-family: sans-serif;
    color: var(--descrip-text);
  }

  .maskEditor_containerDropdown {
    position: absolute;
    right: 0;
  }

  .maskEditor_sidePanelLayerCheckbox {
    margin-left: 15px;
  }

  .maskEditor_toolPanelZoomIndicator {
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: var(--p-button-text-secondary-color);
    position: absolute;
    bottom: 0;
    transition: background-color 0.2s;
  }

  #maskEditor_toolPanelDimensionsText {
    font-size: 12px;
  }

  #maskEditor_topBarSaveButton {
    background: var(--p-primary-color) !important;
    color: var(--p-button-primary-color) !important;
  }

  #maskEditor_topBarSaveButton:hover {
    background: var(--p-primary-hover-color) !important;
  }

`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
function openMaskEditor() {
  const useNewEditor = app.extensionManager.setting.get(
    "Comfy.MaskEditor.UseNewEditor"
  );
  if (useNewEditor) {
    const dlg = MaskEditorDialog.getInstance();
    if (dlg?.isOpened && !dlg.isOpened()) {
      dlg.show();
    }
  } else {
    const dlg = MaskEditorDialogOld.getInstance();
    if (dlg?.isOpened && !dlg.isOpened()) {
      dlg.show();
    }
  }
}
__name(openMaskEditor, "openMaskEditor");
function isOpened() {
  const useNewEditor = app.extensionManager.setting.get(
    "Comfy.MaskEditor.UseNewEditor"
  );
  if (useNewEditor) {
    return MaskEditorDialog.instance?.isOpened?.() ?? false;
  } else {
    return MaskEditorDialogOld.instance?.isOpened?.() ?? false;
  }
}
__name(isOpened, "isOpened");
const context_predicate = /* @__PURE__ */ __name(() => {
  return !!(ComfyApp.clipspace && ComfyApp.clipspace.imgs && ComfyApp.clipspace.imgs.length > 0);
}, "context_predicate");
app.registerExtension({
  name: "Comfy.MaskEditor",
  settings: [
    {
      id: "Comfy.MaskEditor.UseNewEditor",
      category: ["Mask Editor", "NewEditor"],
      name: "Use new mask editor",
      tooltip: "Switch to the new mask editor interface",
      type: "boolean",
      defaultValue: true,
      experimental: true
    },
    {
      id: "Comfy.MaskEditor.BrushAdjustmentSpeed",
      category: ["Mask Editor", "BrushAdjustment", "Sensitivity"],
      name: "Brush adjustment speed multiplier",
      tooltip: "Controls how quickly the brush size and hardness change when adjusting. Higher values mean faster changes.",
      experimental: true,
      type: "slider",
      attrs: {
        min: 0.1,
        max: 2,
        step: 0.1
      },
      defaultValue: 1,
      versionAdded: "1.0.0"
    },
    {
      id: "Comfy.MaskEditor.UseDominantAxis",
      category: ["Mask Editor", "BrushAdjustment", "UseDominantAxis"],
      name: "Lock brush adjustment to dominant axis",
      tooltip: "When enabled, brush adjustments will only affect size OR hardness based on which direction you move more",
      type: "boolean",
      defaultValue: true,
      experimental: true
    }
  ],
  commands: [
    {
      id: "Comfy.MaskEditor.OpenMaskEditor",
      icon: "pi pi-pencil",
      label: "Open Mask Editor for Selected Node",
      function: /* @__PURE__ */ __name(() => {
        const selectedNodes = app.canvas.selected_nodes;
        if (!selectedNodes || Object.keys(selectedNodes).length !== 1) return;
        const selectedNode = selectedNodes[Object.keys(selectedNodes)[0]];
        if (!selectedNode.imgs?.length && selectedNode.previewMediaType !== "image")
          return;
        ComfyApp.copyToClipspace(selectedNode);
        ComfyApp.clipspace_return_node = selectedNode;
        openMaskEditor();
      }, "function")
    },
    {
      id: "Comfy.MaskEditor.BrushSize.Increase",
      icon: "pi pi-plus-circle",
      label: "Increase Brush Size in MaskEditor",
      function: /* @__PURE__ */ __name(() => changeBrushSize((old) => toolkit.clamp(old + 4, 1, 100)), "function")
    },
    {
      id: "Comfy.MaskEditor.BrushSize.Decrease",
      icon: "pi pi-minus-circle",
      label: "Decrease Brush Size in MaskEditor",
      function: /* @__PURE__ */ __name(() => changeBrushSize((old) => toolkit.clamp(old - 4, 1, 100)), "function")
    }
  ],
  init() {
    ComfyApp.open_maskeditor = openMaskEditor;
    ComfyApp.maskeditor_is_opended = isOpened;
    ClipspaceDialog.registerButton(
      "MaskEditor",
      context_predicate,
      openMaskEditor
    );
  }
});
const changeBrushSize = /* @__PURE__ */ __name(async (sizeChanger) => {
  if (!isOpened()) return;
  const maskEditor = MaskEditorDialog.getInstance();
  if (!maskEditor) return;
  const messageBroker = maskEditor.getMessageBroker();
  const oldBrushSize = (await messageBroker.pull("brushSettings")).size;
  const newBrushSize = sizeChanger(oldBrushSize);
  messageBroker.publish("setBrushSize", newBrushSize);
  messageBroker.publish("updateBrushPreview");
}, "changeBrushSize");
const id = "Comfy.NodeTemplates";
const file = "comfy.templates.json";
class ManageTemplates extends ComfyDialog {
  static {
    __name(this, "ManageTemplates");
  }
  // @ts-expect-error fixme ts strict error
  templates;
  draggedEl;
  saveVisualCue;
  emptyImg;
  importInput;
  constructor() {
    super();
    this.load().then((v) => {
      this.templates = v;
    });
    this.element.classList.add("comfy-manage-templates");
    this.draggedEl = null;
    this.saveVisualCue = null;
    this.emptyImg = new Image();
    this.emptyImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    this.importInput = $el("input", {
      type: "file",
      accept: ".json",
      multiple: true,
      style: { display: "none" },
      parent: document.body,
      onchange: /* @__PURE__ */ __name(() => this.importAll(), "onchange")
    });
  }
  createButtons() {
    const btns = super.createButtons();
    btns[0].textContent = "Close";
    btns[0].onclick = () => {
      clearTimeout(this.saveVisualCue);
      this.close();
    };
    btns.unshift(
      $el("button", {
        type: "button",
        textContent: "Export",
        onclick: /* @__PURE__ */ __name(() => this.exportAll(), "onclick")
      })
    );
    btns.unshift(
      $el("button", {
        type: "button",
        textContent: "Import",
        onclick: /* @__PURE__ */ __name(() => {
          this.importInput.click();
        }, "onclick")
      })
    );
    return btns;
  }
  async load() {
    let templates = [];
    const res = await api.getUserData(file);
    if (res.status === 200) {
      try {
        templates = await res.json();
      } catch (error) {
      }
    } else if (res.status !== 404) {
      console.error(res.status + " " + res.statusText);
    }
    return templates ?? [];
  }
  async store() {
    const templates = JSON.stringify(this.templates, void 0, 4);
    try {
      await api.storeUserData(file, templates, { stringify: false });
    } catch (error) {
      console.error(error);
      useToastStore().addAlert(error.message);
    }
  }
  async importAll() {
    for (const file2 of this.importInput.files) {
      if (file2.type === "application/json" || file2.name.endsWith(".json")) {
        const reader = new FileReader();
        reader.onload = async () => {
          const importFile = JSON.parse(reader.result);
          if (importFile?.templates) {
            for (const template of importFile.templates) {
              if (template?.name && template?.data) {
                this.templates.push(template);
              }
            }
            await this.store();
          }
        };
        await reader.readAsText(file2);
      }
    }
    this.importInput.value = null;
    this.close();
  }
  exportAll() {
    if (this.templates.length == 0) {
      useToastStore().addAlert(t("toastMessages.noTemplatesToExport"));
      return;
    }
    const json = JSON.stringify({ templates: this.templates }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    downloadBlob("node_templates.json", blob);
  }
  show() {
    super.show(
      $el(
        "div",
        {},
        this.templates.flatMap((t2, i) => {
          let nameInput;
          return [
            $el(
              "div",
              {
                dataset: { id: i.toString() },
                className: "templateManagerRow",
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  border: "1px dashed transparent",
                  gap: "5px",
                  backgroundColor: "var(--comfy-menu-bg)"
                },
                // @ts-expect-error fixme ts strict error
                ondragstart: /* @__PURE__ */ __name((e) => {
                  this.draggedEl = e.currentTarget;
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.border = "1px dashed yellow";
                  e.dataTransfer.effectAllowed = "move";
                  e.dataTransfer.setDragImage(this.emptyImg, 0, 0);
                }, "ondragstart"),
                // @ts-expect-error fixme ts strict error
                ondragend: /* @__PURE__ */ __name((e) => {
                  e.target.style.opacity = "1";
                  e.currentTarget.style.border = "1px dashed transparent";
                  e.currentTarget.removeAttribute("draggable");
                  this.element.querySelectorAll(".templateManagerRow").forEach((el, i2) => {
                    var prev_i = Number.parseInt(el.dataset.id);
                    if (el == this.draggedEl && prev_i != i2) {
                      this.templates.splice(
                        i2,
                        0,
                        this.templates.splice(prev_i, 1)[0]
                      );
                    }
                    el.dataset.id = i2.toString();
                  });
                  this.store();
                }, "ondragend"),
                // @ts-expect-error fixme ts strict error
                ondragover: /* @__PURE__ */ __name((e) => {
                  e.preventDefault();
                  if (e.currentTarget == this.draggedEl) return;
                  let rect = e.currentTarget.getBoundingClientRect();
                  if (e.clientY > rect.top + rect.height / 2) {
                    e.currentTarget.parentNode.insertBefore(
                      this.draggedEl,
                      e.currentTarget.nextSibling
                    );
                  } else {
                    e.currentTarget.parentNode.insertBefore(
                      this.draggedEl,
                      e.currentTarget
                    );
                  }
                }, "ondragover")
              },
              [
                $el(
                  "label",
                  {
                    textContent: "Name: ",
                    style: {
                      cursor: "grab"
                    },
                    // @ts-expect-error fixme ts strict error
                    onmousedown: /* @__PURE__ */ __name((e) => {
                      if (e.target.localName == "label")
                        e.currentTarget.parentNode.draggable = "true";
                    }, "onmousedown")
                  },
                  [
                    $el("input", {
                      value: t2.name,
                      dataset: { name: t2.name },
                      style: {
                        transitionProperty: "background-color",
                        transitionDuration: "0s"
                      },
                      // @ts-expect-error fixme ts strict error
                      onchange: /* @__PURE__ */ __name((e) => {
                        clearTimeout(this.saveVisualCue);
                        var el = e.target;
                        var row = el.parentNode.parentNode;
                        this.templates[row.dataset.id].name = el.value.trim() || "untitled";
                        this.store();
                        el.style.backgroundColor = "rgb(40, 95, 40)";
                        el.style.transitionDuration = "0s";
                        this.saveVisualCue = setTimeout(function() {
                          el.style.transitionDuration = ".7s";
                          el.style.backgroundColor = "var(--comfy-input-bg)";
                        }, 15);
                      }, "onchange"),
                      // @ts-expect-error fixme ts strict error
                      onkeypress: /* @__PURE__ */ __name((e) => {
                        var el = e.target;
                        clearTimeout(this.saveVisualCue);
                        el.style.transitionDuration = "0s";
                        el.style.backgroundColor = "var(--comfy-input-bg)";
                      }, "onkeypress"),
                      $: /* @__PURE__ */ __name((el) => nameInput = el, "$")
                    })
                  ]
                ),
                $el("div", {}, [
                  $el("button", {
                    textContent: "Export",
                    style: {
                      fontSize: "12px",
                      fontWeight: "normal"
                    },
                    onclick: /* @__PURE__ */ __name(() => {
                      const json = JSON.stringify({ templates: [t2] }, null, 2);
                      const blob = new Blob([json], {
                        type: "application/json"
                      });
                      const name = (nameInput.value || t2.name) + ".json";
                      downloadBlob(name, blob);
                    }, "onclick")
                  }),
                  $el("button", {
                    textContent: "Delete",
                    style: {
                      fontSize: "12px",
                      color: "red",
                      fontWeight: "normal"
                    },
                    // @ts-expect-error fixme ts strict error
                    onclick: /* @__PURE__ */ __name((e) => {
                      const item = e.target.parentNode.parentNode;
                      item.parentNode.removeChild(item);
                      this.templates.splice(item.dataset.id * 1, 1);
                      this.store();
                      var that = this;
                      setTimeout(function() {
                        that.element.querySelectorAll(".templateManagerRow").forEach((el, i2) => {
                          el.dataset.id = i2.toString();
                        });
                      }, 0);
                    }, "onclick")
                  })
                ])
              ]
            )
          ];
        })
      )
    );
  }
}
const manage = new ManageTemplates();
const clipboardAction = /* @__PURE__ */ __name(async (cb) => {
  const old = localStorage.getItem("litegrapheditor_clipboard");
  await cb();
  localStorage.setItem("litegrapheditor_clipboard", old);
}, "clipboardAction");
const ext$1 = {
  name: id,
  getCanvasMenuItems(_canvas) {
    const items = [];
    items.push(null);
    items.push({
      content: `Save Selected as Template`,
      disabled: !Object.keys(app.canvas.selected_nodes || {}).length,
      callback: /* @__PURE__ */ __name(async () => {
        const name = await useDialogService().prompt({
          title: t("nodeTemplates.saveAsTemplate"),
          message: t("nodeTemplates.enterName"),
          defaultValue: ""
        });
        if (!name?.trim()) return;
        clipboardAction(() => {
          app.canvas.copyToClipboard();
          let data = localStorage.getItem("litegrapheditor_clipboard");
          data = JSON.parse(data || "{}");
          const nodeIds = Object.keys(app.canvas.selected_nodes);
          for (let i = 0; i < nodeIds.length; i++) {
            const node = app.graph.getNodeById(nodeIds[i]);
            const nodeData = node?.constructor.nodeData;
            let groupData = GroupNodeHandler.getGroupData(node);
            if (groupData) {
              groupData = groupData.nodeData;
              if (!data.groupNodes) {
                data.groupNodes = {};
              }
              if (nodeData == null) throw new TypeError("nodeData is not set");
              data.groupNodes[nodeData.name] = groupData;
              data.nodes[i].type = nodeData.name;
            }
          }
          manage.templates.push({
            name,
            data: JSON.stringify(data)
          });
          manage.store();
        });
      }, "callback")
    });
    const subItems = manage.templates.map((t2) => {
      return {
        content: t2.name,
        callback: /* @__PURE__ */ __name(() => {
          clipboardAction(async () => {
            const data = JSON.parse(t2.data);
            await GroupNodeConfig.registerFromWorkflow(data.groupNodes, {});
            if (!data.reroutes) {
              deserialiseAndCreate(t2.data, app.canvas);
            } else {
              localStorage.setItem("litegrapheditor_clipboard", t2.data);
              app.canvas.pasteFromClipboard();
            }
          });
        }, "callback")
      };
    });
    subItems.push(null, {
      content: "Manage",
      callback: /* @__PURE__ */ __name(() => manage.show(), "callback")
    });
    items.push({
      content: "Node Templates",
      submenu: {
        options: subItems
      }
    });
    return items;
  }
};
app.registerExtension(ext$1);
app.registerExtension({
  name: "Comfy.NoteNode",
  registerCustomNodes() {
    class NoteNode extends LGraphNode {
      static {
        __name(this, "NoteNode");
      }
      static category;
      static collapsable;
      static title_mode;
      color = LGraphCanvas.node_colors.yellow.color;
      bgcolor = LGraphCanvas.node_colors.yellow.bgcolor;
      groupcolor = LGraphCanvas.node_colors.yellow.groupcolor;
      isVirtualNode;
      constructor(title) {
        super(title);
        if (!this.properties) {
          this.properties = { text: "" };
        }
        ComfyWidgets.STRING(
          this,
          "text",
          ["STRING", { default: this.properties.text, multiline: true }],
          app
        );
        this.serialize_widgets = true;
        this.isVirtualNode = true;
      }
    }
    LiteGraph.registerNodeType(
      "Note",
      Object.assign(NoteNode, {
        title_mode: LiteGraph.NORMAL_TITLE,
        title: "Note",
        collapsable: true
      })
    );
    NoteNode.category = "utils";
    class MarkdownNoteNode extends LGraphNode {
      static {
        __name(this, "MarkdownNoteNode");
      }
      static title = "Markdown Note";
      color = LGraphCanvas.node_colors.yellow.color;
      bgcolor = LGraphCanvas.node_colors.yellow.bgcolor;
      groupcolor = LGraphCanvas.node_colors.yellow.groupcolor;
      constructor(title) {
        super(title);
        if (!this.properties) {
          this.properties = { text: "" };
        }
        ComfyWidgets.MARKDOWN(
          this,
          "text",
          ["STRING", { default: this.properties.text }],
          app
        );
        this.serialize_widgets = true;
        this.isVirtualNode = true;
      }
    }
    LiteGraph.registerNodeType("MarkdownNote", MarkdownNoteNode);
    MarkdownNoteNode.category = "utils";
  }
});
useExtensionService().registerExtension({
  name: "Comfy.PreviewAny",
  async beforeRegisterNodeDef(nodeType, nodeData) {
    if (nodeData.name === "PreviewAny") {
      const onNodeCreated = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function() {
        onNodeCreated ? onNodeCreated.apply(this, []) : void 0;
        const showValueWidget = ComfyWidgets["STRING"](
          this,
          "preview",
          ["STRING", { multiline: true }],
          app
        ).widget;
        showValueWidget.element.readOnly = true;
        showValueWidget.serialize = false;
      };
      const onExecuted = nodeType.prototype.onExecuted;
      nodeType.prototype.onExecuted = function(message) {
        onExecuted === null || onExecuted === void 0 ? void 0 : onExecuted.apply(this, [message]);
        const previewWidget = this.widgets?.find((w) => w.name === "preview");
        if (previewWidget) {
          previewWidget.value = message.text[0];
        }
      };
    }
  }
});
app.registerExtension({
  name: "Comfy.RerouteNode",
  registerCustomNodes(app2) {
    class RerouteNode extends LGraphNode {
      static {
        __name(this, "RerouteNode");
      }
      static category;
      static defaultVisibility = false;
      constructor(title) {
        super(title);
        if (!this.properties) {
          this.properties = {};
        }
        this.properties.showOutputText = RerouteNode.defaultVisibility;
        this.properties.horizontal = false;
        this.addInput("", "*");
        this.addOutput(this.properties.showOutputText ? "*" : "", "*");
        this.onAfterGraphConfigured = function() {
          requestAnimationFrame(() => {
            this.onConnectionsChange(LiteGraph.INPUT, null, true, null);
          });
        };
        this.onConnectionsChange = (type, _index, connected) => {
          if (app2.configuringGraph) return;
          if (connected && type === LiteGraph.OUTPUT) {
            const types = new Set(
              // @ts-expect-error fixme ts strict error
              this.outputs[0].links.map((l) => app2.graph.links[l].type).filter((t2) => t2 !== "*")
            );
            if (types.size > 1) {
              const linksToDisconnect = [];
              for (let i = 0; i < this.outputs[0].links.length - 1; i++) {
                const linkId = this.outputs[0].links[i];
                const link = app2.graph.links[linkId];
                linksToDisconnect.push(link);
              }
              for (const link of linksToDisconnect) {
                const node = app2.graph.getNodeById(link.target_id);
                node.disconnectInput(link.target_slot);
              }
            }
          }
          let currentNode = this;
          let updateNodes = [];
          let inputType = null;
          let inputNode = null;
          while (currentNode) {
            updateNodes.unshift(currentNode);
            const linkId = currentNode.inputs[0].link;
            if (linkId !== null) {
              const link = app2.graph.links[linkId];
              if (!link) return;
              const node = app2.graph.getNodeById(link.origin_id);
              const type2 = node.constructor.type;
              if (type2 === "Reroute") {
                if (node === this) {
                  currentNode.disconnectInput(link.target_slot);
                  currentNode = null;
                } else {
                  currentNode = node;
                }
              } else {
                inputNode = currentNode;
                inputType = node.outputs[link.origin_slot]?.type ?? null;
                break;
              }
            } else {
              currentNode = null;
              break;
            }
          }
          const nodes = [this];
          let outputType = null;
          while (nodes.length) {
            currentNode = nodes.pop();
            const outputs = (
              // @ts-expect-error fixme ts strict error
              (currentNode.outputs ? currentNode.outputs[0].links : []) || []
            );
            if (outputs.length) {
              for (const linkId of outputs) {
                const link = app2.graph.links[linkId];
                if (!link) continue;
                const node = app2.graph.getNodeById(link.target_id);
                const type2 = node.constructor.type;
                if (type2 === "Reroute") {
                  nodes.push(node);
                  updateNodes.push(node);
                } else {
                  const nodeOutType = (
                    // @ts-expect-error fixme ts strict error
                    node.inputs && // @ts-expect-error fixme ts strict error
                    node.inputs[link?.target_slot] && // @ts-expect-error fixme ts strict error
                    node.inputs[link.target_slot].type ? (
                      // @ts-expect-error fixme ts strict error
                      node.inputs[link.target_slot].type
                    ) : null
                  );
                  if (inputType && // @ts-expect-error fixme ts strict error
                  !LiteGraph.isValidConnection(inputType, nodeOutType)) {
                    node.disconnectInput(link.target_slot);
                  } else {
                    outputType = nodeOutType;
                  }
                }
              }
            }
          }
          const displayType = inputType || outputType || "*";
          const color = LGraphCanvas.link_type_colors[displayType];
          let widgetConfig;
          let widgetType;
          for (const node of updateNodes) {
            node.outputs[0].type = inputType || "*";
            node.__outputType = displayType;
            node.outputs[0].name = node.properties.showOutputText ? displayType : "";
            node.setSize(node.computeSize());
            for (const l of node.outputs[0].links || []) {
              const link = app2.graph.links[l];
              if (link) {
                link.color = color;
                if (app2.configuringGraph) continue;
                const targetNode = app2.graph.getNodeById(link.target_id);
                const targetInput = targetNode.inputs?.[link.target_slot];
                if (targetInput?.widget) {
                  const config = getWidgetConfig(targetInput);
                  if (!widgetConfig) {
                    widgetConfig = config[1] ?? {};
                    widgetType = config[0];
                  }
                  const merged = mergeIfValid(targetInput, [
                    config[0],
                    widgetConfig
                  ]);
                  if (merged.customConfig) {
                    widgetConfig = merged.customConfig;
                  }
                }
              }
            }
          }
          for (const node of updateNodes) {
            if (widgetConfig && outputType) {
              node.inputs[0].widget = { name: "value" };
              setWidgetConfig(node.inputs[0], [
                // @ts-expect-error fixme ts strict error
                widgetType ?? displayType,
                widgetConfig
              ]);
            } else {
              setWidgetConfig(node.inputs[0], null);
            }
          }
          if (inputNode) {
            const link = app2.graph.links[inputNode.inputs[0].link];
            if (link) {
              link.color = color;
            }
          }
        };
        this.clone = function() {
          const cloned = RerouteNode.prototype.clone.apply(this);
          cloned.removeOutput(0);
          cloned.addOutput(this.properties.showOutputText ? "*" : "", "*");
          cloned.setSize(cloned.computeSize());
          return cloned;
        };
        this.isVirtualNode = true;
      }
      // @ts-expect-error fixme ts strict error
      getExtraMenuOptions(_, options) {
        options.unshift(
          {
            content: (this.properties.showOutputText ? "Hide" : "Show") + " Type",
            callback: /* @__PURE__ */ __name(() => {
              this.properties.showOutputText = !this.properties.showOutputText;
              if (this.properties.showOutputText) {
                this.outputs[0].name = this.__outputType || this.outputs[0].type;
              } else {
                this.outputs[0].name = "";
              }
              this.setSize(this.computeSize());
              app2.graph.setDirtyCanvas(true, true);
            }, "callback")
          },
          {
            content: (RerouteNode.defaultVisibility ? "Hide" : "Show") + " Type By Default",
            callback: /* @__PURE__ */ __name(() => {
              RerouteNode.setDefaultTextVisibility(
                !RerouteNode.defaultVisibility
              );
            }, "callback")
          }
        );
        return [];
      }
      computeSize() {
        return [
          this.properties.showOutputText && this.outputs && this.outputs.length ? Math.max(
            75,
            LiteGraph.NODE_TEXT_SIZE * this.outputs[0].name.length * 0.6 + 40
          ) : 75,
          26
        ];
      }
      // @ts-expect-error fixme ts strict error
      static setDefaultTextVisibility(visible) {
        RerouteNode.defaultVisibility = visible;
        if (visible) {
          localStorage["Comfy.RerouteNode.DefaultVisibility"] = "true";
        } else {
          delete localStorage["Comfy.RerouteNode.DefaultVisibility"];
        }
      }
    }
    RerouteNode.setDefaultTextVisibility(
      !!localStorage["Comfy.RerouteNode.DefaultVisibility"]
    );
    LiteGraph.registerNodeType(
      "Reroute",
      Object.assign(RerouteNode, {
        title_mode: LiteGraph.NO_TITLE,
        title: "Reroute",
        collapsable: false
      })
    );
    RerouteNode.category = "utils";
  }
});
const saveNodeTypes = /* @__PURE__ */ new Set([
  "SaveImage",
  "SaveAnimatedWEBP",
  "SaveWEBM",
  "SaveAudio",
  "SaveGLB",
  "SaveAnimatedPNG",
  "CLIPSave",
  "VAESave",
  "ModelSave",
  "LoraSave",
  "SaveLatent"
]);
app.registerExtension({
  name: "Comfy.SaveImageExtraOutput",
  async beforeRegisterNodeDef(nodeType, nodeData, app2) {
    if (saveNodeTypes.has(nodeData.name)) {
      const onNodeCreated = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function() {
        const r = onNodeCreated ? (
          // @ts-expect-error fixme ts strict error
          onNodeCreated.apply(this, arguments)
        ) : void 0;
        const widget = this.widgets.find((w) => w.name === "filename_prefix");
        widget.serializeValue = () => {
          return applyTextReplacements(app2.graph, widget.value);
        };
        return r;
      };
    } else {
      const onNodeCreated = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function() {
        const r = onNodeCreated ? (
          // @ts-expect-error fixme ts strict error
          onNodeCreated.apply(this, arguments)
        ) : void 0;
        if (!this.properties || !("Node name for S&R" in this.properties)) {
          this.addProperty("Node name for S&R", this.constructor.type, "string");
        }
        return r;
      };
    }
  }
});
const inputSpec = {
  name: "image",
  type: "Preview3D",
  isPreview: true
};
useExtensionService().registerExtension({
  name: "Comfy.SaveGLB",
  async beforeRegisterNodeDef(_nodeType, nodeData) {
    if ("SaveGLB" === nodeData.name) {
      nodeData.input.required.image = ["PREVIEW_3D"];
    }
  },
  getCustomWidgets() {
    return {
      PREVIEW_3D(node) {
        const widget = new ComponentWidgetImpl({
          node,
          name: inputSpec.name,
          component: _sfc_main,
          inputSpec,
          options: {}
        });
        widget.type = "load3D";
        addWidget(node, widget);
        return { widget };
      }
    };
  },
  getNodeMenuItems(node) {
    if (node.constructor.comfyClass !== "SaveGLB") return [];
    const load3d = useLoad3dService().getLoad3d(node);
    if (!load3d) return [];
    return createExportMenuItems(load3d);
  },
  async nodeCreated(node) {
    if (node.constructor.comfyClass !== "SaveGLB") return;
    const [oldWidth, oldHeight] = node.size;
    node.setSize([Math.max(oldWidth, 400), Math.max(oldHeight, 550)]);
    await nextTick();
    const onExecuted = node.onExecuted;
    node.onExecuted = function(message) {
      onExecuted?.apply(this, arguments);
      const fileInfo = message["3d"][0];
      useLoad3d(node).waitForLoad3d((load3d) => {
        const modelWidget = node.widgets?.find((w) => w.name === "image");
        if (load3d && modelWidget) {
          const filePath = fileInfo["subfolder"] + "/" + fileInfo["filename"];
          modelWidget.value = filePath;
          const config = new Load3DConfiguration(load3d);
          config.configureForSaveMesh(fileInfo["type"], filePath);
        }
      });
    };
  }
});
function drawSelectionBorder(ctx, canvas) {
  const selectedItems = canvas.selectedItems;
  if (selectedItems.size <= 1) return;
  const bounds = createBounds(selectedItems, 10);
  if (!bounds) return;
  const [x, y, width, height] = bounds;
  ctx.save();
  const borderWidth = 2 / canvas.ds.scale;
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border-color").trim() || "#ffffff66";
  const dashSize = 5 / canvas.ds.scale;
  ctx.setLineDash([dashSize, dashSize]);
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 8 / canvas.ds.scale);
  ctx.stroke();
  ctx.restore();
}
__name(drawSelectionBorder, "drawSelectionBorder");
const ext = {
  name: "Comfy.SelectionBorder",
  async init() {
    const originalDrawForeground = app.canvas.onDrawForeground;
    app.canvas.onDrawForeground = function(ctx, visibleArea) {
      originalDrawForeground?.call(this, ctx, visibleArea);
      drawSelectionBorder(ctx, app.canvas);
    };
  }
};
app.registerExtension(ext);
let touchZooming = false;
let touchCount = 0;
app.registerExtension({
  name: "Comfy.SimpleTouchSupport",
  setup() {
    let touchDist = null;
    let touchTime = null;
    let lastTouch = null;
    let lastScale = null;
    function getMultiTouchPos(e) {
      return Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
    __name(getMultiTouchPos, "getMultiTouchPos");
    function getMultiTouchCenter(e) {
      return {
        clientX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        clientY: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };
    }
    __name(getMultiTouchCenter, "getMultiTouchCenter");
    app.canvasEl.parentElement?.addEventListener(
      "touchstart",
      (e) => {
        touchCount += e.changedTouches.length;
        lastTouch = null;
        lastScale = null;
        if (e.touches?.length === 1) {
          touchTime = /* @__PURE__ */ new Date();
          lastTouch = e.touches[0];
        } else {
          touchTime = null;
          if (e.touches?.length === 2) {
            lastScale = app.canvas.ds.scale;
            lastTouch = getMultiTouchCenter(e);
            touchDist = getMultiTouchPos(e);
            app.canvas.pointer.isDown = false;
          }
        }
      },
      true
    );
    app.canvasEl.parentElement?.addEventListener(
      "touchend",
      (e) => {
        touchCount -= e.changedTouches.length;
        if (e.touches?.length !== 1) touchZooming = false;
        if (touchTime && !e.touches?.length) {
          if ((/* @__PURE__ */ new Date()).getTime() - touchTime.getTime() > 600) {
            if (e.target === app.canvasEl) {
              const touch = {
                button: 2,
                // Right click
                clientX: e.changedTouches[0].clientX,
                clientY: e.changedTouches[0].clientY,
                pointerId: 1,
                // changedTouches' id is 0, set it to any number
                isPrimary: true
                // changedTouches' isPrimary is false, so set it to true
              };
              app.canvasEl.dispatchEvent(new PointerEvent("pointerdown", touch));
              setTimeout(() => {
                app.canvasEl.dispatchEvent(new PointerEvent("pointerup", touch));
              });
              e.preventDefault();
            }
          }
          touchTime = null;
        }
      }
    );
    app.canvasEl.parentElement?.addEventListener(
      "touchmove",
      (e) => {
        if (touchTime && lastTouch && e.touches?.length === 1) {
          const onlyTouch = e.touches[0];
          const deltaX = onlyTouch.clientX - lastTouch.clientX;
          const deltaY = onlyTouch.clientY - lastTouch.clientY;
          if (deltaX * deltaX + deltaY * deltaY > 30) {
            touchTime = null;
          }
        }
        if (e.touches?.length === 2 && lastTouch && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          app.canvas.pointer.isDown = false;
          touchZooming = true;
          LiteGraph.closeAllContextMenus(window);
          app.canvas.search_box?.close();
          const newTouchDist = getMultiTouchPos(e);
          const center = getMultiTouchCenter(e);
          if (lastScale === null || touchDist === null) return;
          let scale = lastScale * newTouchDist / touchDist;
          const newX = (center.clientX - lastTouch.clientX) / scale;
          const newY = (center.clientY - lastTouch.clientY) / scale;
          if (scale < app.canvas.ds.min_scale) {
            scale = app.canvas.ds.min_scale;
          } else if (scale > app.canvas.ds.max_scale) {
            scale = app.canvas.ds.max_scale;
          }
          const oldScale = app.canvas.ds.scale;
          app.canvas.ds.scale = scale;
          if (Math.abs(app.canvas.ds.scale - 1) < 0.01) {
            app.canvas.ds.scale = 1;
          }
          const newScale = app.canvas.ds.scale;
          const convertScaleToOffset = /* @__PURE__ */ __name((scale2) => [
            center.clientX / scale2 - app.canvas.ds.offset[0],
            center.clientY / scale2 - app.canvas.ds.offset[1]
          ], "convertScaleToOffset");
          var oldCenter = convertScaleToOffset(oldScale);
          var newCenter = convertScaleToOffset(newScale);
          app.canvas.ds.offset[0] += newX + newCenter[0] - oldCenter[0];
          app.canvas.ds.offset[1] += newY + newCenter[1] - oldCenter[1];
          lastTouch.clientX = center.clientX;
          lastTouch.clientY = center.clientY;
          app.canvas.setDirty(true, true);
        }
      },
      true
    );
  }
});
const processMouseDown = LGraphCanvas.prototype.processMouseDown;
LGraphCanvas.prototype.processMouseDown = function(e) {
  if (touchZooming || touchCount) {
    return;
  }
  app.canvas.pointer.isDown = false;
  return processMouseDown.apply(this, [e]);
};
const processMouseMove = LGraphCanvas.prototype.processMouseMove;
LGraphCanvas.prototype.processMouseMove = function(e) {
  if (touchZooming || touchCount > 1) {
    return;
  }
  return processMouseMove.apply(this, [e]);
};
app.registerExtension({
  name: "Comfy.SlotDefaults",
  suggestionsNumber: null,
  init() {
    LiteGraph.search_filter_enabled = true;
    LiteGraph.middle_click_slot_add_default_node = true;
    this.suggestionsNumber = app.ui.settings.addSetting({
      id: "Comfy.NodeSuggestions.number",
      category: ["Comfy", "Node Search Box", "NodeSuggestions"],
      name: "Number of nodes suggestions",
      tooltip: "Only for litegraph searchbox/context menu",
      type: "slider",
      attrs: {
        min: 1,
        max: 100,
        step: 1
      },
      defaultValue: 5,
      onChange: /* @__PURE__ */ __name((newVal) => {
        this.setDefaults(newVal);
      }, "onChange")
    });
  },
  slot_types_default_out: {},
  slot_types_default_in: {},
  async beforeRegisterNodeDef(nodeType, nodeData) {
    var nodeId = nodeData.name;
    const inputs = nodeData["input"]?.["required"];
    for (const inputKey in inputs) {
      var input = inputs[inputKey];
      if (typeof input[0] !== "string") continue;
      var type = input[0];
      if (type in ComfyWidgets) {
        var customProperties = input[1];
        if (!customProperties?.forceInput) continue;
      }
      if (!(type in this.slot_types_default_out)) {
        this.slot_types_default_out[type] = ["Reroute"];
      }
      if (this.slot_types_default_out[type].includes(nodeId)) continue;
      this.slot_types_default_out[type].push(nodeId);
      const lowerType = type.toLocaleLowerCase();
      if (!(lowerType in LiteGraph.registered_slot_in_types)) {
        LiteGraph.registered_slot_in_types[lowerType] = { nodes: [] };
      }
      LiteGraph.registered_slot_in_types[lowerType].nodes.push(
        // @ts-expect-error ComfyNode
        nodeType.comfyClass
      );
    }
    var outputs = nodeData["output"] ?? [];
    for (const el of outputs) {
      const type2 = el;
      if (!(type2 in this.slot_types_default_in)) {
        this.slot_types_default_in[type2] = ["Reroute"];
      }
      if (this.slot_types_default_in[type2].includes(nodeId)) continue;
      this.slot_types_default_in[type2].push(nodeId);
      if (!(type2 in LiteGraph.registered_slot_out_types)) {
        LiteGraph.registered_slot_out_types[type2] = { nodes: [] };
      }
      LiteGraph.registered_slot_out_types[type2].nodes.push(nodeType.comfyClass);
      if (!LiteGraph.slot_types_out.includes(type2)) {
        LiteGraph.slot_types_out.push(type2);
      }
    }
    var maxNum = this.suggestionsNumber.value;
    this.setDefaults(maxNum);
  },
  setDefaults(maxNum) {
    LiteGraph.slot_types_default_out = {};
    LiteGraph.slot_types_default_in = {};
    for (const type in this.slot_types_default_out) {
      LiteGraph.slot_types_default_out[type] = this.slot_types_default_out[type].slice(0, maxNum);
    }
    for (const type in this.slot_types_default_in) {
      LiteGraph.slot_types_default_in[type] = this.slot_types_default_in[type].slice(0, maxNum);
    }
  }
});
async function uploadFile(audioWidget, audioUIWidget, file2, updateNode, pasted = false) {
  try {
    const body = new FormData();
    body.append("image", file2);
    if (pasted) body.append("subfolder", "pasted");
    const resp = await api.fetchApi("/upload/image", {
      method: "POST",
      body
    });
    if (resp.status === 200) {
      const data = await resp.json();
      let path = data.name;
      if (data.subfolder) path = data.subfolder + "/" + path;
      if (!audioWidget.options.values.includes(path)) {
        audioWidget.options.values.push(path);
      }
      if (updateNode) {
        audioUIWidget.element.src = api.apiURL(
          getResourceURL(...splitFilePath(path))
        );
        audioWidget.value = path;
        audioWidget.callback?.(path);
      }
    } else {
      useToastStore().addAlert(resp.status + " - " + resp.statusText);
    }
  } catch (error) {
    useToastStore().addAlert(error);
  }
}
__name(uploadFile, "uploadFile");
app.registerExtension({
  name: "Comfy.AudioWidget",
  async beforeRegisterNodeDef(nodeType, nodeData) {
    if ([
      "LoadAudio",
      "SaveAudio",
      "PreviewAudio",
      "SaveAudioMP3",
      "SaveAudioOpus"
    ].includes(
      // @ts-expect-error fixme ts strict error
      nodeType.prototype.comfyClass
    )) {
      nodeData.input.required.audioUI = ["AUDIO_UI", {}];
    }
  },
  getCustomWidgets() {
    return {
      AUDIO_UI(node, inputName) {
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.classList.add("comfy-audio");
        audio.setAttribute("name", "media");
        const audioUIWidget = node.addDOMWidget(
          inputName,
          /* name=*/
          "audioUI",
          audio
        );
        audioUIWidget.serialize = false;
        const { nodeData } = node.constructor;
        if (nodeData == null) throw new TypeError("nodeData is null");
        const isOutputNode = nodeData.output_node;
        if (isOutputNode) {
          audioUIWidget.element.classList.add("empty-audio-widget");
          const onExecuted = node.onExecuted;
          node.onExecuted = function(message) {
            onExecuted?.apply(this, arguments);
            const audios = message.audio;
            if (!audios) return;
            const audio2 = audios[0];
            audioUIWidget.element.src = api.apiURL(
              getResourceURL(audio2.subfolder, audio2.filename, audio2.type)
            );
            audioUIWidget.element.classList.remove("empty-audio-widget");
          };
        }
        audioUIWidget.onRemove = useChainCallback(
          audioUIWidget.onRemove,
          () => {
            if (!audioUIWidget.element) return;
            audioUIWidget.element.pause();
            audioUIWidget.element.src = "";
            audioUIWidget.element.remove();
          }
        );
        return { widget: audioUIWidget };
      }
    };
  },
  onNodeOutputsUpdated(nodeOutputs) {
    for (const [nodeLocatorId, output] of Object.entries(nodeOutputs)) {
      if ("audio" in output) {
        const node = getNodeByLocatorId(app.graph, nodeLocatorId);
        if (!node) continue;
        const audioUIWidget = node.widgets.find(
          (w) => w.name === "audioUI"
        );
        const audio = output.audio[0];
        audioUIWidget.element.src = api.apiURL(
          getResourceURL(audio.subfolder, audio.filename, audio.type)
        );
        audioUIWidget.element.classList.remove("empty-audio-widget");
      }
    }
  }
});
app.registerExtension({
  name: "Comfy.UploadAudio",
  async beforeRegisterNodeDef(_nodeType, nodeData) {
    if (nodeData?.input?.required?.audio?.[1]?.audio_upload === true) {
      nodeData.input.required.upload = ["AUDIOUPLOAD", {}];
    }
  },
  getCustomWidgets() {
    return {
      AUDIOUPLOAD(node, inputName) {
        const audioWidget = node.widgets.find(
          (w) => w.name === "audio"
        );
        const audioUIWidget = node.widgets.find(
          (w) => w.name === "audioUI"
        );
        audioUIWidget.options.canvasOnly = true;
        const onAudioWidgetUpdate = /* @__PURE__ */ __name(() => {
          if (typeof audioWidget.value !== "string") return;
          audioUIWidget.element.src = api.apiURL(
            getResourceURL(...splitFilePath(audioWidget.value))
          );
        }, "onAudioWidgetUpdate");
        if (audioWidget.value) {
          onAudioWidgetUpdate();
        }
        audioWidget.callback = onAudioWidgetUpdate;
        const onGraphConfigured = node.onGraphConfigured;
        node.onGraphConfigured = function() {
          onGraphConfigured?.apply(this, arguments);
          if (audioWidget.value) {
            onAudioWidgetUpdate();
          }
        };
        const handleUpload = /* @__PURE__ */ __name(async (files) => {
          if (files?.length) {
            uploadFile(audioWidget, audioUIWidget, files[0], true);
          }
          return files;
        }, "handleUpload");
        const isAudioFile = /* @__PURE__ */ __name((file2) => file2.type.startsWith("audio/"), "isAudioFile");
        const { openFileSelection } = useNodeFileInput(node, {
          accept: "audio/*",
          onSelect: handleUpload
        });
        const uploadWidget = node.addWidget(
          "button",
          inputName,
          "",
          openFileSelection,
          { serialize: false, canvasOnly: true }
        );
        uploadWidget.label = t("g.choose_file_to_upload");
        useNodeDragAndDrop(node, {
          fileFilter: isAudioFile,
          onDrop: handleUpload
        });
        useNodePaste(node, {
          fileFilter: isAudioFile,
          onPaste: handleUpload
        });
        node.previewMediaType = "audio";
        return { widget: uploadWidget };
      }
    };
  }
});
app.registerExtension({
  name: "Comfy.RecordAudio",
  getCustomWidgets() {
    return {
      AUDIO_RECORD(node, inputName) {
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.classList.add("comfy-audio");
        audio.setAttribute("name", "media");
        const audioUIWidget = node.addDOMWidget(
          inputName,
          /* name=*/
          "audioUI",
          audio
        );
        audioUIWidget.options.canvasOnly = false;
        let mediaRecorder = null;
        let isRecording = false;
        let audioChunks = [];
        let currentStream = null;
        let recordWidget = null;
        let stopPromise = null;
        let stopResolve = null;
        audioUIWidget.serializeValue = async () => {
          if (isRecording && mediaRecorder) {
            stopPromise = new Promise((resolve) => {
              stopResolve = resolve;
            });
            mediaRecorder.stop();
            await stopPromise;
          }
          const audioSrc = audioUIWidget.element.src;
          if (!audioSrc) {
            useToastStore().addAlert(t("g.noAudioRecorded"));
            return "";
          }
          const blob = await fetch(audioSrc).then((r) => r.blob());
          return await useAudioService().convertBlobToFileAndSubmit(blob);
        };
        recordWidget = node.addWidget(
          "button",
          inputName,
          "",
          async () => {
            if (!isRecording) {
              try {
                currentStream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                mediaRecorder = new mediaRecorderConstructor(currentStream, {
                  mimeType: "audio/wav"
                });
                audioChunks = [];
                mediaRecorder.ondataavailable = (event) => {
                  audioChunks.push(event.data);
                };
                mediaRecorder.onstop = async () => {
                  const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
                  useAudioService().stopAllTracks(currentStream);
                  if (audioUIWidget.element.src && audioUIWidget.element.src.startsWith("blob:")) {
                    URL.revokeObjectURL(audioUIWidget.element.src);
                  }
                  audioUIWidget.element.src = URL.createObjectURL(audioBlob);
                  isRecording = false;
                  if (recordWidget) {
                    recordWidget.label = t("g.startRecording");
                  }
                  if (stopResolve) {
                    stopResolve();
                    stopResolve = null;
                    stopPromise = null;
                  }
                };
                mediaRecorder.onerror = (event) => {
                  console.error("MediaRecorder error:", event);
                  useAudioService().stopAllTracks(currentStream);
                  isRecording = false;
                  if (recordWidget) {
                    recordWidget.label = t("g.startRecording");
                  }
                  if (stopResolve) {
                    stopResolve();
                    stopResolve = null;
                    stopPromise = null;
                  }
                };
                mediaRecorder.start();
                isRecording = true;
                if (recordWidget) {
                  recordWidget.label = t("g.stopRecording");
                }
              } catch (err) {
                console.error("Error accessing microphone:", err);
                useToastStore().addAlert(t("g.micPermissionDenied"));
                if (mediaRecorder) {
                  try {
                    mediaRecorder.stop();
                  } catch {
                  }
                }
                useAudioService().stopAllTracks(currentStream);
                currentStream = null;
                isRecording = false;
                if (recordWidget) {
                  recordWidget.label = t("g.startRecording");
                }
              }
            } else if (mediaRecorder && isRecording) {
              mediaRecorder.stop();
            }
          },
          { serialize: false, canvasOnly: false }
        );
        recordWidget.label = t("g.startRecording");
        recordWidget.type = "audiorecord";
        const originalOnRemoved = node.onRemoved;
        node.onRemoved = function() {
          if (isRecording && mediaRecorder) {
            mediaRecorder.stop();
          }
          useAudioService().stopAllTracks(currentStream);
          if (audioUIWidget.element.src?.startsWith("blob:")) {
            URL.revokeObjectURL(audioUIWidget.element.src);
          }
          originalOnRemoved?.call(this);
        };
        return { widget: recordWidget };
      }
    };
  },
  async nodeCreated(node) {
    if (node.constructor.comfyClass !== "RecordAudio") return;
    await useAudioService().registerWavEncoder();
  }
});
const isMediaUploadComboInput = /* @__PURE__ */ __name((inputSpec2) => {
  const [inputName, inputOptions] = inputSpec2;
  if (!inputOptions) return false;
  const isUploadInput = inputOptions["image_upload"] === true || inputOptions["video_upload"] === true || inputOptions["animated_image_upload"] === true;
  return isUploadInput && (isComboInputSpecV1(inputSpec2) || inputName === "COMBO");
}, "isMediaUploadComboInput");
const createUploadInput = /* @__PURE__ */ __name((imageInputName, imageInputOptions) => [
  "IMAGEUPLOAD",
  {
    ...imageInputOptions[1],
    imageInputName
  }
], "createUploadInput");
app.registerExtension({
  name: "Comfy.UploadImage",
  beforeRegisterNodeDef(_nodeType, nodeData) {
    const { input } = nodeData ?? {};
    const { required } = input ?? {};
    if (!required) return;
    const found = Object.entries(required).find(
      ([_, input2]) => isMediaUploadComboInput(input2)
    );
    if (found) {
      const [inputName, inputSpec2] = found;
      required.upload = createUploadInput(inputName, inputSpec2);
    }
  }
});
const WEBCAM_READY = Symbol();
app.registerExtension({
  name: "Comfy.WebcamCapture",
  getCustomWidgets() {
    return {
      WEBCAM(node, inputName) {
        let res;
        node[WEBCAM_READY] = new Promise((resolve) => res = resolve);
        const container = document.createElement("div");
        container.style.background = "rgba(0,0,0,0.25)";
        container.style.textAlign = "center";
        const video = document.createElement("video");
        video.style.height = video.style.width = "100%";
        const loadVideo = /* @__PURE__ */ __name(async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: true,
              audio: false
            });
            container.replaceChildren(video);
            setTimeout(() => res(video), 500);
            video.addEventListener("loadedmetadata", () => res(video), false);
            video.srcObject = stream;
            video.play();
          } catch (error) {
            const label = document.createElement("div");
            label.style.color = "red";
            label.style.overflow = "auto";
            label.style.maxHeight = "100%";
            label.style.whiteSpace = "pre-wrap";
            if (window.isSecureContext) {
              label.textContent = "Unable to load webcam, please ensure access is granted:\n" + // @ts-expect-error fixme ts strict error
              error.message;
            } else {
              label.textContent = "Unable to load webcam. A secure context is required, if you are not accessing ComfyUI on localhost (127.0.0.1) you will have to enable TLS (https)\n\n" + // @ts-expect-error fixme ts strict error
              error.message;
            }
            container.replaceChildren(label);
          }
        }, "loadVideo");
        loadVideo();
        return { widget: node.addDOMWidget(inputName, "WEBCAM", container) };
      }
    };
  },
  nodeCreated(node) {
    if (node.type, node.constructor.comfyClass !== "WebcamCapture") return;
    let video;
    const camera = node.widgets.find((w2) => w2.name === "image");
    const w = node.widgets.find((w2) => w2.name === "width");
    const h = node.widgets.find((w2) => w2.name === "height");
    const captureOnQueue = node.widgets.find(
      (w2) => w2.name === "capture_on_queue"
    );
    const canvas = document.createElement("canvas");
    const capture = /* @__PURE__ */ __name(() => {
      canvas.width = w.value;
      canvas.height = h.value;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, w.value, h.value);
      const data = canvas.toDataURL("image/png");
      const img = new Image();
      img.onload = () => {
        node.imgs = [img];
        app.graph.setDirtyCanvas(true);
      };
      img.src = data;
    }, "capture");
    const btn = node.addWidget(
      "button",
      "waiting for camera...",
      "capture",
      capture,
      { canvasOnly: true }
    );
    btn.disabled = true;
    btn.serializeValue = () => void 0;
    camera.serializeValue = async () => {
      if (captureOnQueue.value) {
        capture();
      } else if (!node.imgs?.length) {
        const err = `No webcam image captured`;
        useToastStore().addAlert(err);
        throw new Error(err);
      }
      const blob = await new Promise((r) => canvas.toBlob(r));
      const name = `${+/* @__PURE__ */ new Date()}.png`;
      const file2 = new File([blob], name);
      const body = new FormData();
      body.append("image", file2);
      body.append("subfolder", "webcam");
      body.append("type", "temp");
      const resp = await api.fetchApi("/upload/image", {
        method: "POST",
        body
      });
      if (resp.status !== 200) {
        const err = `Error uploading camera image: ${resp.status} - ${resp.statusText}`;
        useToastStore().addAlert(err);
        throw new Error(err);
      }
      return `webcam/${name} [temp]`;
    };
    node[WEBCAM_READY].then((v) => {
      video = v;
      if (!w.value) {
        w.value = video.videoWidth || 640;
        h.value = video.videoHeight || 480;
      }
      btn.disabled = false;
      btn.label = t("g.capture");
    });
  }
});
//# sourceMappingURL=index-CXn6IZxG.js.map
