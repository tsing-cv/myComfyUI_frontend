const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ComfyQueueButton-z6rpVyjA.js","./vendor-vue-SdQKVoRx.js","./vendor-other-Bfb5Ofrh.js","./vendor-other-DODGPXtn.css","./index-D9cV32Ob.js","./vendor-xterm-BZLod3g9.js","./vendor-xterm-BKlWQB97.css","./vendor-three-JDoAqkQm.js","./vendor-tiptap-Dvg9y4X0.js","./index-C7Aw4Wf-.css","./ComfyQueueButton-2MDJ8iZi.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { shallowRef, ref, computed, defineComponent, mergeModels, useModel, watch, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, createVNode, unref, useSlots, inject, withDirectives, withCtx, vShow, Transition, renderSlot, createCommentVNode, createBlock, toDisplayString, Fragment, renderList, createTextVNode, mergeProps, useAttrs, createSlots, normalizeStyle, withModifiers, toValue, useId, resolveDirective, resolveDynamicComponent, withKeys, provide, isRef, onErrorCaptured, onBeforeUnmount, nextTick, watchEffect, defineAsyncComponent, readonly, onUpdated, onUnmounted, toRaw, markRaw, Teleport, createStaticVNode, toRefs, reactive, shallowReactive, getCurrentInstance } from "vue";
import { bb as Fuse, c7 as useDebounceFn, bX as useBreakpoints, c8 as useFuse, c9 as uniqWith, ca as useImage, bf as useAsyncState, aV as useLocalStorage, cb as useDraggable, bJ as watchDebounced, aR as useEventListener, aG as clamp, bg as debounce, cc as useMutationObserver, bq as useResizeObserver, aS as useElementBounding, aQ as whenever, cd as useThrottleFn, ce as useRafFn, cf as useMouse, cg as useMouseInElement, bt as refDebounced, aE as axios, bL as semver, bi as until, bY as breakpointsTailwind, bk as useScroll, ch as reactiveComputed, b7 as createSharedComposable, ci as computedWithControl, aP as toolkit, bp as tryOnScopeDispose, cj as useDevicePixelRatio, ck as useTitle, c5 as useFavicon, bR as useStorage } from "./vendor-other-Bfb5Ofrh.js";
import { useToast as useToast$1 } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import Button from "primevue/button";
import { s as st, n as normalizeI18nKey, a as api, i as i18n, b as isCloud, c as cn, t, _ as _sfc_main$1E, d as _export_sfc, g as getButtonSizeClasses, e as getBorderButtonTypeClasses, f as getButtonTypeClasses, h as getBaseButtonClasses, u as useSettingStore, j as d, k as useModelToNodeStore, l as assetService, m as useDialogStore, o as useNodeOutputStore, L as LODFallback, p as downloadFile, q as useCommandStore, r as __unplugin_components_0$2, v as app, w as useErrorHandling, x as useSubscription, y as useToastStore, z as useWorkspaceStore, A as showNativeSystemMenu, B as useWorkflowStore, C as useSidebarTabStore, D as useBottomPanelStore, E as __vitePreload, F as useDialogService, G as useWorkflowService, H as ComfyWorkflow, I as appendJsonExt, J as useSubgraphNavigationStore, K as useSubgraphStore, M as useCanvasStore, N as forEachSubgraphNode, O as useCurrentUser, P as useFirebaseAuthActions, Q as _sfc_main$1G, R as isElectron, S as useCanvasPositionConversion, T as isDOMWidget, U as isComponentWidget, V as useDomWidgetStore, W as useChainCallback, X as layoutStore, Y as MinimapDataSourceFactory, Z as renderMinimapToCanvas, $ as useColorPaletteStore, a0 as enforceMinimumBounds, a1 as calculateMinimapScale, a2 as useCanvasInteractions, a3 as LiteGraph, a4 as useNodeDefStore, a5 as isOverNodeInput, a6 as isOverNodeOutput, a7 as LGraphCanvas, a8 as adjustColor, a9 as isColorable, aa as getItemsColorOption, ab as showSubgraphNodeDialog, ac as useNodeHelpStore, ad as useNodeLibrarySidebarTab, ae as isLGraphNode, af as isImageNode, ag as SubgraphNode, ah as isLoad3dNode, ai as filterOutputNodes, aj as LGraphEventMode, ak as isOutputNode, al as useSelectedLiteGraphItems, am as useVueFeatureFlags, an as isLGraphGroup, ao as LGraphNode, ap as LGraphGroup, aq as useTitleEditorStore, ar as RenderShape, as as alignNodes, at as distributeNodes, au as useNodeBookmarkStore, av as useExtensionService, aw as EditableText, ax as useNodeFrequencyStore, ay as highlightQuery, az as formatNumberWithSuffix, aA as NodeSourceType, aB as NodePreview, aC as NodeSearchFilter, aD as SearchFilterChip, aE as useLitegraphService, aF as LinkReleaseTriggerAction, aG as _imports_0, aH as _sfc_main$1H, aI as useIntersectionObserver, aJ as _sfc_main$1I, aK as useMenuItemStore, aL as useColorPaletteService, aM as useManagerState, aN as SettingDialogHeader, aO as SettingDialogContent, aP as ManagerTab, aQ as getComfyApiBaseUrl, aR as isAbortError, aS as useSystemStatsStore, aT as stringToLocale, aU as useConflictAcknowledgment, aV as electronAPI, aW as formatVersionAnchor, aX as renderMarkdownToHtml, aY as useConflictDetection, aZ as useUserStore, a_ as useKeybindingStore, a$ as useExtensionStore, b0 as usePragmaticDraggable, b1 as usePragmaticDroppable, b2 as useWorkflowThumbnail, b3 as useWorkflowBookmarkStore, b4 as LayoutSource, b5 as NodeSlotType, b6 as useLayoutMutations, b7 as ensureCorrectLayoutScale, b8 as LGraphBadge, b9 as BadgePosition, ba as NodeBadgeMode, bb as useSharedCanvasPositionConversion, bc as ComfyNodeDefImpl, bd as ComfyModelDef, be as legacyMenuCompat, bf as te, bg as LGraph, bh as LLink, bi as DragAndScale, bj as ContextMenu$1, bk as isVideoNode, bl as isAudioNode, bm as CanvasPointer, bn as LinkMarkerShape, bo as setStorageValue, bp as getStorageValue, bq as snapPoint, br as isMiddlePointerInput, bs as syncNodeSlotLayoutsFromDOM, bt as useExecutionStore, bu as getLocatorIdFromNodeData, bv as applyLightThemeColor, bw as nonWidgetedInputs, bx as getNodeByLocatorId, by as _sfc_main$1J, bz as _sfc_main$1K, bA as _sfc_main$1L, bB as _sfc_main$1M, bC as IS_CONTROL_WIDGET, bD as updateControlWidgetLabel, bE as ChangeTracker, bF as UnauthorizedError, bG as isNativeWindow, bH as migrateLegacyRerouteNodes, bI as assetItemSchema, bJ as MODELS_TAG, bK as MISSING_TAG, bL as getAllNonIoNodesInSubgraph, bM as useQueueStore, bN as selectionBounds, bO as useQueueSettingsStore, bP as getExecutionIdsForSelectedNodes, bQ as ManagerUIState, bR as tryToggleWidgetPromotion, bS as DEFAULT_DARK_COLOR_PALETTE, bT as DEFAULT_LIGHT_COLOR_PALETTE, bU as config, bV as useQueuePendingTaskCountStore, bW as useAssetsStore, bX as useFirebaseAuthStore, bY as loadLocale, bZ as useModelStore } from "./index-D9cV32Ob.js";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";
import "primevue/message";
import Divider from "primevue/divider";
import ScrollPanel from "primevue/scrollpanel";
import "primevue/card";
import "primevue/listbox";
import "./vendor-xterm-BZLod3g9.js";
import ProgressSpinner from "primevue/progressspinner";
import Skeleton from "primevue/skeleton";
import "primevue/galleria";
import Popover from "primevue/popover";
import "primevue/iconfield";
import "primevue/inputicon";
import InputText from "primevue/inputtext";
import Badge from "primevue/badge";
import Chip from "primevue/chip";
import ContextMenu from "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/progressbar";
import { useToast, InputNumber } from "primevue";
import Select from "primevue/select";
import SelectButton from "primevue/selectbutton";
import Tag from "primevue/tag";
import Dialog from "primevue/dialog";
import "primevue/colorpicker";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/confirmdialog";
import "primevue/floatlabel";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
import "primevue/inputnumber";
import "primevue/tabpanels";
import Tabs from "primevue/tabs";
import "primevue/tabpanel";
import "primevue/toggleswitch";
import "primevue/radiobutton";
import "primevue/knob";
import "primevue/slider";
import "primevue/tabmenu";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import Breadcrumb from "primevue/breadcrumb";
import Menu from "primevue/menu";
import { _ as _sfc_main$1F } from "./UserAvatar.vue_vue_type_script_setup_true_lang-D2s8tnS2.js";
import { u as useTelemetry } from "./index-B4s3Fy_S.js";
import ButtonGroup from "primevue/buttongroup";
import { d as defineStore, s as storeToRefs, g as useRoute } from "./vendor-vue-SdQKVoRx.js";
import { c as computeUnionBounds } from "./mathUtil-CTARWQ-l.js";
import AutoComplete from "primevue/autocomplete";
import TieredMenu from "primevue/tieredmenu";
import MultiSelect from "primevue/multiselect";
import OverlayBadge from "primevue/overlaybadge";
import Toast from "primevue/toast";
import { u as useKeybindingService } from "./keybindingService-NuT6mRmK.js";
import { u as useServerConfigStore } from "./serverConfigStore-BOo8M-7s.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "./vendor-three-JDoAqkQm.js";
import "primevue/dropdown";
import "primevue/chart";
import "primevue/imagecompare";
import "primevue/textarea";
import "primevue/treeselect";
import "./vendor-tiptap-Dvg9y4X0.js";
import "primevue/blockui";
import "primevue/avatar";
const getCategoryIcon = /* @__PURE__ */ __name((categoryId) => {
  const iconMap = {
    // Main categories
    all: "icon-[lucide--list]",
    "getting-started": "icon-[lucide--graduation-cap]",
    // Generation types
    "generation-image": "icon-[lucide--image]",
    image: "icon-[lucide--image]",
    "generation-video": "icon-[lucide--film]",
    video: "icon-[lucide--film]",
    "generation-3d": "icon-[lucide--box]",
    "3d": "icon-[lucide--box]",
    "generation-audio": "icon-[lucide--volume-2]",
    audio: "icon-[lucide--volume-2]",
    "generation-llm": "icon-[lucide--message-square-text]",
    // API and models
    "api-nodes": "icon-[lucide--hand-coins]",
    "closed-models": "icon-[lucide--hand-coins]",
    // LLMs and AI
    llm: "icon-[lucide--message-square-text]",
    llms: "icon-[lucide--message-square-text]",
    "llm-api": "icon-[lucide--message-square-text]",
    // Performance and hardware
    "small-models": "icon-[lucide--zap]",
    performance: "icon-[lucide--zap]",
    "mac-compatible": "icon-[lucide--command]",
    "runs-on-mac": "icon-[lucide--command]",
    // Training
    "lora-training": "icon-[lucide--dumbbell]",
    training: "icon-[lucide--dumbbell]",
    // Extensions and tools
    extensions: "icon-[lucide--puzzle]",
    tools: "icon-[lucide--wrench]",
    // Fallbacks for common patterns
    upscaling: "icon-[lucide--maximize-2]",
    controlnet: "icon-[lucide--sliders-horizontal]",
    "area-composition": "icon-[lucide--layout-grid]"
  };
  return iconMap[categoryId.toLowerCase()] || "icon-[lucide--folder]";
}, "getCategoryIcon");
const useWorkflowTemplatesStore = defineStore(
  "workflowTemplates",
  () => {
    const customTemplates = shallowRef({});
    const coreTemplates = shallowRef([]);
    const englishTemplates = shallowRef([]);
    const isLoaded = ref(false);
    const knownTemplateNames = ref(/* @__PURE__ */ new Set());
    const getTemplateByName = /* @__PURE__ */ __name((name) => {
      return enhancedTemplates.value.find((template) => template.name === name);
    }, "getTemplateByName");
    const categoryFilters = ref(/* @__PURE__ */ new Map());
    const addLocalizedFieldsToTemplate = /* @__PURE__ */ __name((template, categoryTitle) => ({
      ...template,
      localizedTitle: st(
        `templateWorkflows.template.${normalizeI18nKey(categoryTitle)}.${normalizeI18nKey(template.name)}`,
        template.title ?? template.name
      ),
      localizedDescription: st(
        `templateWorkflows.templateDescription.${normalizeI18nKey(categoryTitle)}.${normalizeI18nKey(template.name)}`,
        template.description
      )
    }), "addLocalizedFieldsToTemplate");
    const localizeTemplateList = /* @__PURE__ */ __name((templates, categoryTitle) => templates.map(
      (template) => addLocalizedFieldsToTemplate(template, categoryTitle)
    ), "localizeTemplateList");
    const localizeTemplateCategory = /* @__PURE__ */ __name((templateCategory) => ({
      ...templateCategory,
      localizedTitle: st(
        `templateWorkflows.category.${normalizeI18nKey(templateCategory.title)}`,
        templateCategory.title ?? templateCategory.moduleName
      ),
      templates: localizeTemplateList(
        templateCategory.templates,
        templateCategory.title
      )
    }), "localizeTemplateCategory");
    const createAllCategory = /* @__PURE__ */ __name(() => {
      const coreTemplatesWithSourceModule = coreTemplates.value.flatMap(
        (category) => (
          // For each template in each category, add the sourceModule and pass through any localized fields
          category.templates.map((template) => {
            const localizedTemplate = addLocalizedFieldsToTemplate(
              template,
              category.title
            );
            return {
              ...localizedTemplate,
              sourceModule: category.moduleName
            };
          })
        )
      );
      const customTemplatesWithSourceModule = Object.entries(
        customTemplates.value
      ).flatMap(
        ([moduleName, templates]) => templates.map((name) => ({
          name,
          mediaType: "image",
          mediaSubtype: "jpg",
          description: name,
          sourceModule: moduleName
        }))
      );
      return {
        moduleName: "all",
        title: "All",
        localizedTitle: st("templateWorkflows.category.All", "All Templates"),
        templates: [
          ...coreTemplatesWithSourceModule,
          ...customTemplatesWithSourceModule
        ]
      };
    }, "createAllCategory");
    const groupedTemplates = computed(() => {
      const allTemplates = [
        ...coreTemplates.value.map(localizeTemplateCategory),
        ...Object.entries(customTemplates.value).map(
          ([moduleName, templates]) => ({
            moduleName,
            title: moduleName,
            localizedTitle: st(
              `templateWorkflows.category.${normalizeI18nKey(moduleName)}`,
              moduleName
            ),
            templates: templates.map((name) => ({
              name,
              mediaType: "image",
              mediaSubtype: "jpg",
              description: name
            }))
          })
        )
      ];
      const groupedByCategory = [
        {
          label: st(
            "templateWorkflows.category.ComfyUI Examples",
            "ComfyUI Examples"
          ),
          modules: [
            createAllCategory(),
            ...allTemplates.filter((t2) => t2.moduleName === "default")
          ]
        },
        ...Object.keys(customTemplates.value).length > 0 ? [
          {
            label: st(
              "templateWorkflows.category.Custom Nodes",
              "Custom Nodes"
            ),
            modules: allTemplates.filter((t2) => t2.moduleName !== "default")
          }
        ] : []
      ];
      return groupedByCategory;
    });
    const enhancedTemplates = computed(() => {
      const allTemplates = [];
      coreTemplates.value.forEach((category) => {
        category.templates.forEach((template) => {
          const enhancedTemplate = {
            ...template,
            sourceModule: category.moduleName,
            category: category.title,
            categoryType: category.type,
            categoryGroup: category.category,
            isEssential: category.isEssential,
            isPartnerNode: template.openSource === false,
            searchableText: [
              template.title || template.name,
              template.description || "",
              category.title,
              ...template.tags || [],
              ...template.models || []
            ].join(" ")
          };
          allTemplates.push(enhancedTemplate);
        });
      });
      Object.entries(customTemplates.value).forEach(
        ([moduleName, templates]) => {
          templates.forEach((name) => {
            const enhancedTemplate = {
              name,
              title: name,
              description: name,
              mediaType: "image",
              mediaSubtype: "jpg",
              sourceModule: moduleName,
              category: "Extensions",
              categoryType: "extension",
              searchableText: `${name} ${moduleName} extension`
            };
            allTemplates.push(enhancedTemplate);
          });
        }
      );
      return allTemplates;
    });
    const templateFuse = computed(() => {
      const fuseOptions = {
        keys: [
          { name: "searchableText", weight: 0.4 },
          { name: "title", weight: 0.3 },
          { name: "name", weight: 0.2 },
          { name: "tags", weight: 0.1 }
        ],
        threshold: 0.3,
        includeScore: true
      };
      return new Fuse(enhancedTemplates.value, fuseOptions);
    });
    const filterTemplatesByCategory = /* @__PURE__ */ __name((categoryId) => {
      if (categoryId === "all") {
        return enhancedTemplates.value;
      }
      if (categoryId === "basics") {
        return enhancedTemplates.value.filter((t2) => t2.isEssential);
      }
      if (categoryId === "partner-nodes") {
        return enhancedTemplates.value.filter((t2) => t2.isPartnerNode);
      }
      if (categoryId.startsWith("extension-")) {
        const moduleName = categoryId.replace("extension-", "");
        return enhancedTemplates.value.filter(
          (t2) => t2.sourceModule === moduleName
        );
      }
      const filter = categoryFilters.value.get(categoryId);
      if (!filter) {
        return enhancedTemplates.value;
      }
      return enhancedTemplates.value.filter((template) => {
        if (filter.category && template.category !== filter.category) {
          return false;
        }
        if (filter.categoryGroup && template.categoryGroup !== filter.categoryGroup) {
          return false;
        }
        return true;
      });
    }, "filterTemplatesByCategory");
    const navGroupedTemplates = computed(() => {
      if (!isLoaded.value) return [];
      const items = [];
      categoryFilters.value.clear();
      items.push({
        id: "all",
        label: st("templateWorkflows.category.All", "All Templates"),
        icon: getCategoryIcon("all")
      });
      let gettingStartedText = "Getting Started";
      const essentialCat = coreTemplates.value.find(
        (cat) => cat.isEssential && cat.templates.length > 0
      );
      const hasEssentialCategories = Boolean(essentialCat);
      if (essentialCat) {
        gettingStartedText = essentialCat.title;
      }
      if (hasEssentialCategories) {
        items.push({
          id: "basics",
          label: gettingStartedText,
          icon: "icon-[lucide--graduation-cap]"
        });
      }
      const categoryGroups = /* @__PURE__ */ new Map();
      coreTemplates.value.forEach((category) => {
        if (category.isEssential) return;
        const categoryGroup = category.category;
        const categoryIcon = category.icon;
        if (categoryGroup) {
          if (!categoryGroups.has(categoryGroup)) {
            categoryGroups.set(categoryGroup, {
              title: categoryGroup,
              items: []
            });
          }
          const group = categoryGroups.get(categoryGroup);
          const categoryId = `${categoryGroup.toLowerCase().replace(/\s+/g, "-")}-${category.title.toLowerCase().replace(/\s+/g, "-")}`;
          categoryFilters.value.set(categoryId, {
            category: category.title,
            categoryGroup
          });
          group.items.push({
            id: categoryId,
            label: st(
              `templateWorkflows.category.${normalizeI18nKey(category.title)}`,
              category.title
            ),
            icon: categoryIcon || getCategoryIcon(category.type || "default")
          });
        }
      });
      categoryGroups.forEach((group, groupName) => {
        if (group.items.length > 0) {
          items.push({
            title: st(
              `templateWorkflows.category.${normalizeI18nKey(groupName)}`,
              groupName.split(" ").map(
                (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              ).join(" ")
            ),
            items: group.items
          });
        }
      });
      const partnerNodeCount = enhancedTemplates.value.filter(
        (t2) => t2.isPartnerNode
      ).length;
      if (partnerNodeCount > 0) {
        items.push({
          id: "partner-nodes",
          label: st(
            "templateWorkflows.category.Partner Nodes",
            "Partner Nodes"
          ),
          icon: "icon-[lucide--handshake]"
        });
      }
      const extensionCounts = enhancedTemplates.value.filter(
        (t2) => t2.sourceModule !== "default"
      ).length;
      if (extensionCounts > 0) {
        const extensionModules = Array.from(
          new Set(
            enhancedTemplates.value.filter((t2) => t2.sourceModule !== "default").map((t2) => t2.sourceModule)
          )
        ).sort();
        const extensionItems = extensionModules.map(
          (moduleName) => ({
            id: `extension-${moduleName}`,
            label: st(
              `templateWorkflows.category.${normalizeI18nKey(moduleName)}`,
              moduleName
            ),
            icon: getCategoryIcon("extensions")
          })
        );
        items.push({
          title: st("templateWorkflows.category.Extensions", "Extensions"),
          items: extensionItems,
          collapsible: true
        });
      }
      return items;
    });
    async function loadWorkflowTemplates() {
      try {
        if (!isLoaded.value) {
          customTemplates.value = await api.getWorkflowTemplates();
          const locale = i18n.global.locale.value;
          const [coreResult, englishResult] = await Promise.all([
            api.getCoreWorkflowTemplates(locale),
            isCloud && locale !== "en" ? api.getCoreWorkflowTemplates("en") : Promise.resolve([])
          ]);
          coreTemplates.value = coreResult;
          englishTemplates.value = englishResult;
          const coreNames = coreTemplates.value.flatMap(
            (category) => category.templates.map((template) => template.name)
          );
          const customNames = Object.values(customTemplates.value).flat();
          knownTemplateNames.value = /* @__PURE__ */ new Set([...coreNames, ...customNames]);
          isLoaded.value = true;
        }
      } catch (error) {
        console.error("Error fetching workflow templates:", error);
      }
    }
    __name(loadWorkflowTemplates, "loadWorkflowTemplates");
    function getEnglishMetadata(templateName) {
      if (englishTemplates.value.length === 0) {
        return null;
      }
      for (const category of englishTemplates.value) {
        const template = category.templates.find((t2) => t2.name === templateName);
        if (template) {
          return {
            tags: template.tags,
            category: category.title,
            useCase: template.useCase,
            models: template.models,
            license: template.license
          };
        }
      }
      return null;
    }
    __name(getEnglishMetadata, "getEnglishMetadata");
    return {
      groupedTemplates,
      navGroupedTemplates,
      enhancedTemplates,
      templateFuse,
      filterTemplatesByCategory,
      isLoaded,
      loadWorkflowTemplates,
      knownTemplateNames,
      getTemplateByName,
      getEnglishMetadata
    };
  }
);
const SEARCH_DEBOUNCE_DELAY_MS = 300;
const _sfc_main$1D = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  props: /* @__PURE__ */ mergeModels({
    autofocus: { type: Boolean, default: false },
    placeholder: {},
    showBorder: { type: Boolean, default: false },
    size: { default: "md" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const searchQuery = useModel(__props, "modelValue");
    const internalSearchQuery = ref(searchQuery.value ?? "");
    const updateSearchQuery = useDebounceFn((value) => {
      searchQuery.value = value;
    }, SEARCH_DEBOUNCE_DELAY_MS);
    watch(internalSearchQuery, (newValue) => {
      void updateSearchQuery(newValue);
    });
    watch(searchQuery, (newValue) => {
      if (newValue !== internalSearchQuery.value) {
        internalSearchQuery.value = newValue || "";
      }
    });
    const input = ref();
    const focusInput = /* @__PURE__ */ __name(() => {
      if (input.value && input.value.$el) {
        input.value.$el.focus();
      }
    }, "focusInput");
    onMounted(() => __props.autofocus && focusInput());
    const wrapperStyle = computed(() => {
      const baseClasses2 = [
        "relative flex w-full items-center gap-2",
        "bg-white dark-theme:bg-zinc-800",
        "cursor-text"
      ];
      if (__props.showBorder) {
        return cn(
          ...baseClasses2,
          "rounded p-2",
          "border border-solid",
          "border-zinc-200 dark-theme:border-zinc-700"
        );
      }
      const sizeClasses = {
        md: "h-8 px-2 py-1.5",
        // Matches button sm size
        lg: "h-10 px-4 py-2"
        // Matches button md size
      }[__props.size];
      return cn(...baseClasses2, "rounded-lg", sizeClasses);
    });
    const inputStyle = computed(() => {
      return cn(
        "absolute inset-0 w-full h-full pl-11",
        "border-none outline-none bg-transparent",
        "text-sm text-neutral dark-theme:text-white"
      );
    });
    const iconColorStyle = computed(() => {
      return cn(
        !__props.showBorder ? "text-neutral" : ["text-zinc-300", "dark-theme:text-zinc-700"]
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(wrapperStyle.value),
        onClick: focusInput
      }, [
        createElementVNode("i", {
          class: normalizeClass(["icon-[lucide--search]", iconColorStyle.value])
        }, null, 2),
        createVNode(unref(InputText), {
          ref_key: "input",
          ref: input,
          modelValue: internalSearchQuery.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => internalSearchQuery.value = $event),
          "aria-label": _ctx.placeholder || unref(t)("templateWidgets.sort.searchPlaceholder", "Search..."),
          placeholder: _ctx.placeholder || unref(t)("templateWidgets.sort.searchPlaceholder", "Search..."),
          type: "text",
          unstyled: "",
          class: normalizeClass(inputStyle.value)
        }, null, 8, ["modelValue", "aria-label", "placeholder", "class"])
      ], 2);
    };
  }
});
const OnCloseKey = Symbol();
const _hoisted_1$10 = { class: "flex h-full w-full" };
const _hoisted_2$J = { class: "flex h-full w-full flex-col" };
const _hoisted_3$z = { class: "flex flex-1 shrink-0 gap-2" };
const _hoisted_4$q = {
  key: 0,
  class: "icon-[lucide--panel-left] text-sm"
};
const _hoisted_5$k = {
  key: 1,
  class: "icon-[lucide--panel-left-close] text-sm"
};
const _hoisted_6$h = { class: "flex min-h-0 flex-1 flex-col" };
const _hoisted_7$c = {
  key: 0,
  class: "text-xxl m-0 px-6 pt-2 pb-6 capitalize"
};
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "BaseModalLayout",
  props: {
    contentTitle: {}
  },
  setup(__props) {
    const BREAKPOINTS = { md: 880 };
    const PANEL_SIZES = {
      width: "w-1/3",
      minWidth: "min-w-40",
      maxWidth: "max-w-56"
    };
    const slots = useSlots();
    const closeDialog = inject(OnCloseKey, () => {
    });
    const breakpoints = useBreakpoints(BREAKPOINTS);
    const notMobile = breakpoints.greater("md");
    const isLeftPanelOpen = ref(true);
    const isRightPanelOpen = ref(false);
    const mobileMenuOpen = ref(false);
    const hasRightPanel = computed(() => !!slots.rightPanel);
    watch(notMobile, (isDesktop) => {
      if (!isDesktop) {
        mobileMenuOpen.value = false;
      }
    });
    const showLeftPanel = computed(() => {
      const shouldShow = notMobile.value ? isLeftPanelOpen.value : mobileMenuOpen.value;
      return shouldShow;
    });
    const toggleLeftPanel = /* @__PURE__ */ __name(() => {
      if (notMobile.value) {
        isLeftPanelOpen.value = !isLeftPanelOpen.value;
      } else {
        mobileMenuOpen.value = !mobileMenuOpen.value;
      }
    }, "toggleLeftPanel");
    const toggleRightPanel = /* @__PURE__ */ __name(() => {
      isRightPanelOpen.value = !isRightPanelOpen.value;
    }, "toggleRightPanel");
    const layoutClasses = cn(
      "base-widget-layout",
      "rounded-2xl overflow-hidden relative",
      "bg-gray-50 dark-theme:bg-smoke-800"
    );
    const rightPanelButtonClasses = computed(() => {
      return cn("absolute top-4 right-18 z-10", "transition-opacity duration-200", {
        "opacity-0 pointer-events-none": isRightPanelOpen.value || !hasRightPanel.value
      });
    });
    const closeButtonClasses = cn(
      "absolute top-4 right-6 z-10",
      "transition-opacity duration-200"
    );
    const mainContainerClasses = cn(
      "flex-1 flex",
      "bg-smoke-100 dark-theme:bg-neutral-900"
    );
    const headerClasses = cn(
      "w-full h-18 px-6",
      "flex items-center justify-between gap-2"
    );
    const rightAreaClasses = computed(() => {
      return cn(
        "flex justify-end gap-2 w-0",
        hasRightPanel.value && !isRightPanelOpen.value ? "min-w-22" : "min-w-10"
      );
    });
    const contentContainerClasses = computed(() => {
      return cn("min-h-0 px-6 pt-0 pb-10", "overflow-y-auto scrollbar-hide");
    });
    const rightPanelClasses = computed(() => {
      return cn("w-1/4 min-w-40 max-w-80");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(layoutClasses))
      }, [
        withDirectives(createVNode(_sfc_main$1E, {
          class: normalizeClass(rightPanelButtonClasses.value),
          onClick: toggleRightPanel
        }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode("i", { class: "icon-[lucide--panel-right] text-sm" }, null, -1)
          ])),
          _: 1
        }, 8, ["class"]), [
          [vShow, !isRightPanelOpen.value && hasRightPanel.value]
        ]),
        createVNode(_sfc_main$1E, {
          class: normalizeClass(unref(closeButtonClasses)),
          onClick: unref(closeDialog)
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createElementVNode("i", { class: "pi pi-times text-sm" }, null, -1)
          ])),
          _: 1
        }, 8, ["class", "onClick"]),
        createElementVNode("div", _hoisted_1$10, [
          createVNode(Transition, { name: "slide-panel" }, {
            default: withCtx(() => [
              _ctx.$slots.leftPanel && showLeftPanel.value ? (openBlock(), createElementBlock("nav", {
                key: 0,
                class: normalizeClass([
                  PANEL_SIZES.width,
                  PANEL_SIZES.minWidth,
                  PANEL_SIZES.maxWidth
                ])
              }, [
                renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          createElementVNode("div", {
            class: normalizeClass(unref(mainContainerClasses))
          }, [
            createElementVNode("div", _hoisted_2$J, [
              _ctx.$slots.header ? (openBlock(), createElementBlock("header", {
                key: 0,
                class: normalizeClass(unref(headerClasses))
              }, [
                createElementVNode("div", _hoisted_3$z, [
                  !unref(notMobile) ? (openBlock(), createBlock(_sfc_main$1E, {
                    key: 0,
                    onClick: toggleLeftPanel
                  }, {
                    default: withCtx(() => [
                      !showLeftPanel.value ? (openBlock(), createElementBlock("i", _hoisted_4$q)) : (openBlock(), createElementBlock("i", _hoisted_5$k))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "header", {}, void 0, true)
                ]),
                renderSlot(_ctx.$slots, "header-right-area", {}, void 0, true),
                createElementVNode("div", {
                  class: normalizeClass(rightAreaClasses.value)
                }, [
                  isRightPanelOpen.value && hasRightPanel.value ? (openBlock(), createBlock(_sfc_main$1E, {
                    key: 0,
                    onClick: toggleRightPanel
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createElementVNode("i", { class: "icon-[lucide--panel-right-close] text-sm" }, null, -1)
                    ])),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2)
              ], 2)) : createCommentVNode("", true),
              createElementVNode("main", _hoisted_6$h, [
                renderSlot(_ctx.$slots, "contentFilter", {}, void 0, true),
                !_ctx.$slots.leftPanel ? (openBlock(), createElementBlock("h2", _hoisted_7$c, toDisplayString(_ctx.contentTitle), 1)) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: normalizeClass(contentContainerClasses.value)
                }, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ], 2)
              ])
            ]),
            hasRightPanel.value && isRightPanelOpen.value ? (openBlock(), createElementBlock("aside", {
              key: 0,
              class: normalizeClass(rightPanelClasses.value)
            }, [
              renderSlot(_ctx.$slots, "rightPanel", {}, void 0, true)
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ])
      ], 2);
    };
  }
});
const BaseModalLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-3a439f7a"]]);
const _sfc_main$1B = /* @__PURE__ */ defineComponent({
  __name: "NavIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass([_ctx.icon, "text-neutral text-sm"])
      }, null, 2);
    };
  }
});
const _hoisted_1$$ = {
  key: 1,
  class: "text-neutral icon-[lucide--folder] text-xs"
};
const _hoisted_2$I = { class: "flex items-center" };
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "NavItem",
  props: {
    icon: {},
    active: { type: Boolean },
    onClick: { type: Function }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "flex cursor-pointer items-center gap-2 rounded-md px-4 py-3 text-sm transition-colors",
          _ctx.active ? "bg-smoke-400 dark-theme:bg-charcoal-300 text-neutral" : "text-neutral hover:bg-smoke-100 dark-theme:hover:bg-charcoal-300"
        ]),
        role: "button",
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        _ctx.icon ? (openBlock(), createBlock(_sfc_main$1B, {
          key: 0,
          icon: _ctx.icon
        }, null, 8, ["icon"])) : (openBlock(), createElementBlock("i", _hoisted_1$$)),
        createElementVNode("span", _hoisted_2$I, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
const _hoisted_1$_ = { class: "text-xs font-bold text-neutral-400 uppercase dark-theme:text-neutral-400" };
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  __name: "NavTitle",
  props: {
    title: {},
    modelValue: { type: Boolean, default: false },
    collapsible: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const isCollapsed = computed({
      get: /* @__PURE__ */ __name(() => __props.modelValue, "get"),
      set: /* @__PURE__ */ __name((value) => emit("update:modelValue", value), "set")
    });
    const toggleCollapse = /* @__PURE__ */ __name(() => {
      isCollapsed.value = !isCollapsed.value;
    }, "toggleCollapse");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(
          unref(cn)(
            "flex items-center justify-between m-0 px-3 py-0 pt-5",
            _ctx.collapsible && "cursor-pointer select-none"
          )
        ),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.collapsible && toggleCollapse())
      }, [
        createElementVNode("h3", _hoisted_1$_, toDisplayString(_ctx.title), 1),
        _ctx.collapsible ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(
            unref(cn)(
              "pi transition-transform duration-200 text-xs text-neutral-400 dark-theme:text-neutral-400",
              isCollapsed.value ? "pi-chevron-right" : "pi-chevron-down"
            )
          )
        }, null, 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _sfc_main$1y = {};
const _hoisted_1$Z = { class: "flex h-16 items-center justify-between px-6" };
const _hoisted_2$H = { class: "flex items-center gap-2 pl-1" };
const _hoisted_3$y = { class: "text-neutral text-base font-bold" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("header", _hoisted_1$Z, [
    createElementVNode("div", _hoisted_2$H, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _cache[0] || (_cache[0] = createElementVNode("i", { class: "text-neutral icon-[lucide--puzzle] text-base" }, null, -1))
      ]),
      createElementVNode("h2", _hoisted_3$y, [
        renderSlot(_ctx.$slots, "default")
      ])
    ])
  ]);
}
__name(_sfc_render$2, "_sfc_render$2");
const PanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["render", _sfc_render$2]]);
const _hoisted_1$Y = { class: "flex h-full w-full flex-col bg-white dark-theme:bg-charcoal-600" };
const _hoisted_2$G = { class: "flex scrollbar-hide flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" };
const _hoisted_3$x = {
  key: 0,
  class: "flex flex-col gap-2"
};
const _hoisted_4$p = {
  key: 1,
  class: "flex flex-col gap-2"
};
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "LeftSidePanel",
  props: {
    navItems: { default: /* @__PURE__ */ __name(() => [], "default") },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const collapsedGroups = ref({});
    const getFirstItemId = /* @__PURE__ */ __name(() => {
      if (!__props.navItems || __props.navItems.length === 0) {
        return null;
      }
      const firstEntry = __props.navItems[0];
      if ("items" in firstEntry && firstEntry.items.length > 0) {
        return firstEntry.items[0].id;
      }
      if ("id" in firstEntry) {
        return firstEntry.id;
      }
      return null;
    }, "getFirstItemId");
    const activeItem = computed({
      get: /* @__PURE__ */ __name(() => __props.modelValue ?? getFirstItemId(), "get"),
      set: /* @__PURE__ */ __name((value) => emit("update:modelValue", value), "set")
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$Y, [
        createVNode(PanelHeader, null, {
          icon: withCtx(() => [
            renderSlot(_ctx.$slots, "header-icon")
          ]),
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "header-title")
          ]),
          _: 3
        }),
        createElementVNode("nav", _hoisted_2$G, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.navItems, (item, index) => {
            return openBlock(), createElementBlock(Fragment, { key: index }, [
              "items" in item ? (openBlock(), createElementBlock("div", _hoisted_3$x, [
                createVNode(_sfc_main$1z, {
                  modelValue: collapsedGroups.value[item.title],
                  "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => collapsedGroups.value[item.title] = $event, "onUpdate:modelValue"),
                  title: item.title,
                  collapsible: item.collapsible
                }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "collapsible"]),
                !item.collapsible || !collapsedGroups.value[item.title] ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.items, (subItem) => {
                  return openBlock(), createBlock(_sfc_main$1A, {
                    key: subItem.id,
                    icon: subItem.icon,
                    active: activeItem.value === subItem.id,
                    onClick: /* @__PURE__ */ __name(($event) => activeItem.value = subItem.id, "onClick")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(subItem.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["icon", "active", "onClick"]);
                }), 128)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_4$p, [
                createVNode(_sfc_main$1A, {
                  icon: item.icon,
                  active: activeItem.value === item.id,
                  onClick: /* @__PURE__ */ __name(($event) => activeItem.value = item.id, "onClick")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "active", "onClick"])
              ]))
            ], 64);
          }), 128))
        ])
      ]);
    };
  }
});
function usePopoverSizing(options) {
  return computed(() => {
    const { minWidth, maxWidth } = options;
    const style = {};
    if (minWidth) {
      style.minWidth = minWidth;
    }
    if (maxWidth) {
      style.maxWidth = maxWidth;
    }
    return style;
  });
}
__name(usePopoverSizing, "usePopoverSizing");
const _sfc_main$1w = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TextButton",
  props: {
    label: {},
    onClick: { type: Function },
    size: { default: "md" },
    type: { default: "primary" },
    border: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    class: {}
  },
  setup(__props) {
    const buttonStyle = computed(() => {
      const baseClasses2 = getBaseButtonClasses();
      const sizeClasses = getButtonSizeClasses(__props.size);
      const typeClasses = __props.border ? getBorderButtonTypeClasses(__props.type) : getButtonTypeClasses(__props.type);
      return cn(baseClasses2, sizeClasses, typeClasses, __props.class);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), mergeProps(_ctx.$attrs, {
        unstyled: "",
        class: buttonStyle.value,
        disabled: _ctx.disabled,
        onClick: _ctx.onClick
      }), {
        default: withCtx(() => [
          createElementVNode("span", null, toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 16, ["class", "disabled", "onClick"]);
    };
  }
});
const _hoisted_1$X = { class: "flex flex-col px-2 pt-2 pb-0" };
const _hoisted_2$F = {
  key: 1,
  class: "mt-2 flex items-center justify-between"
};
const _hoisted_3$w = {
  key: 0,
  class: "px-1 text-sm text-neutral-400 dark-theme:text-zinc-500"
};
const _hoisted_4$o = { class: "text-sm text-zinc-700 dark-theme:text-smoke-200" };
const _hoisted_5$j = {
  key: 0,
  class: "pointer-events-none absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-xs font-semibold text-white dark-theme:bg-blue-500"
};
const _hoisted_6$g = {
  key: 0,
  class: "text-bold icon-[lucide--check] text-xs text-white"
};
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "MultiSelect",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    showSearchBox: { type: Boolean, default: false },
    showSelectedCount: { type: Boolean, default: false },
    showClearButton: { type: Boolean, default: false },
    searchPlaceholder: { default: "Search..." },
    listMaxHeight: { default: "28rem" },
    popoverMinWidth: {},
    popoverMaxWidth: {}
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {},
    "searchQuery": { default: "" },
    "searchQueryModifiers": {}
  }),
  emits: ["update:modelValue", "update:searchQuery"],
  setup(__props) {
    const selectedItems = useModel(__props, "modelValue");
    const searchQuery = useModel(__props, "searchQuery");
    const { t: t2 } = useI18n();
    const selectedCount = computed(() => selectedItems.value.length);
    const popoverStyle = usePopoverSizing({
      minWidth: __props.popoverMinWidth,
      maxWidth: __props.popoverMaxWidth
    });
    const attrs = useAttrs();
    const originalOptions = computed(() => attrs.options || []);
    const fuseOptions = {
      fuseOptions: {
        keys: ["name", "value"],
        threshold: 0.3,
        includeScore: false
      },
      matchAllWhenSearchEmpty: true
    };
    const { results } = useFuse(searchQuery, originalOptions, fuseOptions);
    const filteredOptions = computed(() => {
      if (!searchQuery.value || searchQuery.value.trim() === "") {
        return originalOptions.value;
      }
      const searchResults = results.value.map(
        (result) => result.item
      );
      const selectedButNotInResults = selectedItems.value.filter(
        (item) => !searchResults.some((result) => result.value === item.value)
      );
      return [...selectedButNotInResults, ...searchResults];
    });
    const pt = computed(() => ({
      root: /* @__PURE__ */ __name(({ props }) => ({
        class: cn(
          "h-10 relative inline-flex cursor-pointer select-none",
          "rounded-lg bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white",
          "transition-all duration-200 ease-in-out",
          "border-[2.5px] border-solid",
          selectedCount.value > 0 ? "border-blue-400 dark-theme:border-blue-500" : "border-transparent",
          "focus-within:border-blue-400 dark-theme:focus-within:border-blue-500",
          { "opacity-60 cursor-default": props.disabled }
        )
      }), "root"),
      labelContainer: {
        class: "flex-1 flex items-center overflow-hidden whitespace-nowrap pl-4 py-2 "
      },
      label: {
        class: "p-0"
      },
      dropdown: {
        class: "flex shrink-0 cursor-pointer items-center justify-center px-3"
      },
      header: /* @__PURE__ */ __name(() => ({
        class: __props.showSearchBox || __props.showSelectedCount || __props.showClearButton ? "block" : "hidden"
      }), "header"),
      // Overlay & list visuals unchanged
      overlay: {
        class: cn(
          "mt-2 rounded-lg py-2 px-2",
          "bg-white dark-theme:bg-zinc-800",
          "text-neutral dark-theme:text-white",
          "border border-solid border-neutral-200 dark-theme:border-zinc-700"
        )
      },
      listContainer: /* @__PURE__ */ __name(() => ({
        style: { maxHeight: `min(${__props.listMaxHeight}, 50vh)` },
        class: "scrollbar-custom"
      }), "listContainer"),
      list: {
        class: "flex flex-col gap-0 p-0 m-0 list-none border-none text-sm"
      },
      // Option row hover and focus tone
      option: /* @__PURE__ */ __name(({ context }) => ({
        class: [
          "flex gap-2 items-center h-10 px-2 rounded-lg",
          "hover:bg-neutral-100/50 dark-theme:hover:bg-zinc-700/50",
          // Add focus/highlight state for keyboard navigation
          {
            "bg-neutral-100/50 dark-theme:bg-zinc-700/50": context?.focused
          }
        ]
      }), "option"),
      // Hide built-in checkboxes entirely via PT (no :deep)
      pcHeaderCheckbox: {
        root: { class: "hidden" },
        style: { display: "none" }
      },
      pcOptionCheckbox: {
        root: { class: "hidden" },
        style: { display: "none" }
      }
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MultiSelect), mergeProps({
        modelValue: selectedItems.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedItems.value = $event)
      }, { ..._ctx.$attrs, options: filteredOptions.value }, {
        "option-label": "name",
        unstyled: "",
        "max-selected-labels": 0,
        pt: pt.value,
        "aria-label": _ctx.label || unref(t2)("g.multiSelectDropdown"),
        role: "combobox",
        "aria-expanded": false,
        "aria-haspopup": "listbox",
        tabindex: 0
      }), createSlots({
        value: withCtx(() => [
          createElementVNode("span", _hoisted_4$o, toDisplayString(_ctx.label), 1),
          selectedCount.value > 0 ? (openBlock(), createElementBlock("span", _hoisted_5$j, toDisplayString(selectedCount.value), 1)) : createCommentVNode("", true)
        ]),
        dropdownicon: withCtx(() => [
          _cache[4] || (_cache[4] = createElementVNode("i", { class: "icon-[lucide--chevron-down] text-lg text-neutral-400" }, null, -1))
        ]),
        option: withCtx((slotProps) => [
          createElementVNode("div", {
            class: "flex items-center gap-2",
            style: normalizeStyle(unref(popoverStyle))
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                "flex h-4 w-4 shrink-0 items-center justify-center rounded p-0.5 transition-all duration-200",
                slotProps.selected ? "bg-blue-400 dark-theme:border-blue-500 dark-theme:bg-blue-500" : "bg-neutral-100 dark-theme:bg-zinc-700"
              ])
            }, [
              slotProps.selected ? (openBlock(), createElementBlock("i", _hoisted_6$g)) : createCommentVNode("", true)
            ], 2),
            createVNode(unref(Button), {
              class: "border-none bg-transparent text-left outline-none",
              unstyled: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(slotProps.option.name), 1)
              ]),
              _: 2
            }, 1024)
          ], 4)
        ]),
        _: 2
      }, [
        _ctx.showSearchBox || _ctx.showSelectedCount || _ctx.showClearButton ? {
          name: "header",
          fn: withCtx(() => [
            createElementVNode("div", _hoisted_1$X, [
              _ctx.showSearchBox ? (openBlock(), createBlock(_sfc_main$1D, {
                key: 0,
                modelValue: searchQuery.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                class: normalizeClass(_ctx.showSelectedCount || _ctx.showClearButton ? "mb-2" : ""),
                "show-order": true,
                "show-border": true,
                "place-holder": _ctx.searchPlaceholder
              }, null, 8, ["modelValue", "class", "place-holder"])) : createCommentVNode("", true),
              _ctx.showSelectedCount || _ctx.showClearButton ? (openBlock(), createElementBlock("div", _hoisted_2$F, [
                _ctx.showSelectedCount ? (openBlock(), createElementBlock("span", _hoisted_3$w, toDisplayString(selectedCount.value > 0 ? _ctx.$t("g.itemsSelected", { selectedCount: selectedCount.value }) : _ctx.$t("g.itemSelected", { selectedCount: selectedCount.value })), 1)) : createCommentVNode("", true),
                _ctx.showClearButton ? (openBlock(), createBlock(_sfc_main$1w, {
                  key: 1,
                  label: _ctx.$t("g.clearAll"),
                  type: "transparent",
                  size: "fit-content",
                  class: "text-sm text-blue-500 dark-theme:text-blue-600",
                  onClick: _cache[1] || (_cache[1] = withModifiers(($event) => selectedItems.value = [], ["stop"]))
                }, null, 8, ["label"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              _cache[3] || (_cache[3] = createElementVNode("div", { class: "my-4 h-px bg-zinc-200 dark-theme:bg-zinc-700" }, null, -1))
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "pt", "aria-label"]);
    };
  }
});
const _hoisted_1$W = { class: "flex items-center gap-2 text-sm text-neutral-500" };
const _hoisted_2$E = {
  key: 0,
  class: "text-zinc-700 dark-theme:text-smoke-200"
};
const _hoisted_3$v = {
  key: 1,
  class: "text-zinc-700 dark-theme:text-smoke-200"
};
const _hoisted_4$n = { class: "truncate" };
const _hoisted_5$i = {
  key: 0,
  class: "icon-[lucide--check] text-neutral-600 dark-theme:text-white"
};
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SingleSelect",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    options: {},
    listMaxHeight: { default: "28rem" },
    popoverMinWidth: {},
    popoverMaxWidth: {}
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const selectedItem = useModel(__props, "modelValue");
    const { t: t2 } = useI18n();
    const getLabel = /* @__PURE__ */ __name((val) => {
      if (val == null) return __props.label ?? "";
      if (!__props.options) return __props.label ?? "";
      const found = __props.options.find((o) => o.value === val);
      return found ? found.name : __props.label ?? "";
    }, "getLabel");
    const optionStyle = computed(() => {
      if (!__props.popoverMinWidth && !__props.popoverMaxWidth) return void 0;
      const styles = [];
      if (__props.popoverMinWidth) styles.push(`min-width: ${__props.popoverMinWidth}`);
      if (__props.popoverMaxWidth) styles.push(`max-width: ${__props.popoverMaxWidth}`);
      return styles.join("; ");
    });
    const pt = computed(() => ({
      root: /* @__PURE__ */ __name(({ props }) => ({
        class: [
          // container
          "h-10 relative inline-flex cursor-pointer select-none items-center",
          // trigger surface
          "rounded-lg",
          "bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white",
          "border-[2.5px] border-solid border-transparent",
          "transition-all duration-200 ease-in-out",
          "focus-within:border-blue-400 dark-theme:focus-within:border-blue-500",
          // disabled
          { "opacity-60 cursor-default": props.disabled }
        ]
      }), "root"),
      label: {
        class: (
          // Align with MultiSelect labelContainer spacing
          "flex-1 flex items-center whitespace-nowrap pl-4 py-2 outline-hidden"
        )
      },
      dropdown: {
        class: (
          // Right chevron touch area
          "flex shrink-0 items-center justify-center px-3 py-2"
        )
      },
      overlay: {
        class: cn(
          "mt-2 p-2 rounded-lg",
          "bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white",
          "border border-solid border-neutral-200 dark-theme:border-zinc-700"
        )
      },
      listContainer: /* @__PURE__ */ __name(() => ({
        style: `max-height: min(${__props.listMaxHeight}, 50vh)`,
        class: "scrollbar-custom"
      }), "listContainer"),
      list: {
        class: (
          // Same list tone/size as MultiSelect
          "flex flex-col gap-0 p-0 m-0 list-none border-none text-sm"
        )
      },
      option: /* @__PURE__ */ __name(({ context }) => ({
        class: [
          // Row layout
          "flex items-center justify-between gap-3 px-2 py-3 rounded",
          "hover:bg-neutral-100/50 dark-theme:hover:bg-zinc-700/50",
          // Selected state + check icon
          { "bg-neutral-100/50 dark-theme:bg-zinc-700/50": context.selected },
          // Add focus state for keyboard navigation
          { "bg-neutral-100/50 dark-theme:bg-zinc-700/50": context.focused }
        ]
      }), "option"),
      optionLabel: {
        class: "truncate"
      },
      optionGroupLabel: {
        class: "px-3 py-2 text-xs uppercase tracking-wide text-zinc-500 dark-theme:text-zinc-400"
      },
      emptyMessage: {
        class: "px-3 py-2 text-sm text-zinc-500 dark-theme:text-zinc-400"
      }
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Select), mergeProps({
        modelValue: selectedItem.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedItem.value = $event)
      }, _ctx.$attrs, {
        options: _ctx.options,
        "option-label": "name",
        "option-value": "value",
        unstyled: "",
        pt: pt.value,
        "aria-label": _ctx.label || unref(t2)("g.singleSelectDropdown"),
        role: "combobox",
        "aria-expanded": false,
        "aria-haspopup": "listbox",
        tabindex: 0
      }), {
        value: withCtx((slotProps) => [
          createElementVNode("div", _hoisted_1$W, [
            renderSlot(_ctx.$slots, "icon"),
            slotProps.value !== null && slotProps.value !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_2$E, toDisplayString(getLabel(slotProps.value)), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$v, toDisplayString(_ctx.label), 1))
          ])
        ]),
        dropdownicon: withCtx(() => _cache[1] || (_cache[1] = [
          createElementVNode("i", { class: "icon-[lucide--chevron-down] text-base text-neutral-500" }, null, -1)
        ])),
        option: withCtx(({ option, selected }) => [
          createElementVNode("div", {
            class: "flex w-full items-center justify-between gap-3",
            style: normalizeStyle(optionStyle.value)
          }, [
            createElementVNode("span", _hoisted_4$n, toDisplayString(option.name), 1),
            selected ? (openBlock(), createElementBlock("i", _hoisted_5$i)) : createCommentVNode("", true)
          ], 4)
        ]),
        _: 3
      }, 16, ["modelValue", "options", "pt", "aria-label"]);
    };
  }
});
function useAssetFilterOptions(assets) {
  const availableFileFormats = computed(() => {
    const assetList = toValue(assets);
    const extensions = assetList.map((asset) => {
      const extension = asset.name.split(".").pop();
      return extension && extension !== asset.name ? extension : null;
    }).filter((extension) => extension !== null);
    const uniqueExtensions = uniqWith(extensions, (a, b) => a === b);
    return uniqueExtensions.sort().map((format) => ({
      name: `.${format}`,
      value: format
    }));
  });
  const availableBaseModels = computed(() => {
    const assetList = toValue(assets);
    const models = assetList.map((asset) => asset.user_metadata?.base_model).filter(
      (baseModel) => baseModel !== void 0 && typeof baseModel === "string"
    );
    const uniqueModels = uniqWith(models, (a, b) => a === b);
    return uniqueModels.sort().map((model) => ({
      name: model,
      value: model
    }));
  });
  return {
    availableFileFormats,
    availableBaseModels
  };
}
__name(useAssetFilterOptions, "useAssetFilterOptions");
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "AssetFilterBar",
  props: {
    assets: { default: /* @__PURE__ */ __name(() => [], "default") }
  },
  emits: ["filterChange"],
  setup(__props, { emit: __emit }) {
    const fileFormats = ref([]);
    const baseModels = ref([]);
    const sortBy = ref("name-asc");
    const { availableFileFormats, availableBaseModels } = useAssetFilterOptions(__props.assets);
    const sortOptions = [
      { name: t("assetBrowser.sortAZ"), value: "name-asc" },
      { name: t("assetBrowser.sortZA"), value: "name-desc" },
      { name: t("assetBrowser.sortRecent"), value: "recent" }
    ];
    const emit = __emit;
    const containerClasses = cn(
      "flex gap-4 items-center justify-between",
      "px-6 pt-2 pb-6"
    );
    const leftSideClasses = cn("flex gap-4 items-center");
    const rightSideClasses = cn("flex items-center");
    const selectClasses = cn("min-w-32");
    function handleFilterChange() {
      emit("filterChange", {
        fileFormats: fileFormats.value.map((option) => option.value),
        baseModels: baseModels.value.map((option) => option.value),
        sortBy: sortBy.value
      });
    }
    __name(handleFilterChange, "handleFilterChange");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(containerClasses)),
        "data-component-id": "asset-filter-bar"
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(leftSideClasses)),
          "data-component-id": "asset-filter-bar-left"
        }, [
          unref(availableFileFormats).length > 0 ? (openBlock(), createBlock(_sfc_main$1v, {
            key: 0,
            modelValue: fileFormats.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => fileFormats.value = $event),
              handleFilterChange
            ],
            label: _ctx.$t("assetBrowser.fileFormats"),
            options: unref(availableFileFormats),
            class: normalizeClass(unref(selectClasses)),
            "data-component-id": "asset-filter-file-formats"
          }, null, 8, ["modelValue", "label", "options", "class"])) : createCommentVNode("", true),
          unref(availableBaseModels).length > 0 ? (openBlock(), createBlock(_sfc_main$1v, {
            key: 1,
            modelValue: baseModels.value,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = ($event) => baseModels.value = $event),
              handleFilterChange
            ],
            label: _ctx.$t("assetBrowser.baseModels"),
            options: unref(availableBaseModels),
            class: normalizeClass(unref(selectClasses)),
            "data-component-id": "asset-filter-base-models"
          }, null, 8, ["modelValue", "label", "options", "class"])) : createCommentVNode("", true)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(rightSideClasses)),
          "data-component-id": "asset-filter-bar-right"
        }, [
          createVNode(_sfc_main$1u, {
            modelValue: sortBy.value,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => sortBy.value = $event),
              handleFilterChange
            ],
            label: _ctx.$t("assetBrowser.sortBy"),
            options: sortOptions,
            class: normalizeClass(unref(selectClasses)),
            "data-component-id": "asset-filter-sort"
          }, {
            icon: withCtx(() => _cache[3] || (_cache[3] = [
              createElementVNode("i", { class: "icon-[lucide--arrow-up-down] size-3" }, null, -1)
            ])),
            _: 1
          }, 8, ["modelValue", "label", "class"])
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1$V = { class: "absolute right-2 bottom-2 flex flex-wrap justify-end gap-1" };
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "AssetBadgeGroup",
  props: {
    badges: {}
  },
  setup(__props) {
    function getBadgeColor(type) {
      switch (type) {
        case "type":
          return "bg-azure-600/90 dark-theme:bg-azure-600/80";
        case "base":
          return "bg-jade-600/90 dark-theme:bg-jade-600/80";
        case "size":
          return "bg-ash-500/90 dark-theme:bg-charcoal-700/80";
        default:
          return "bg-ash-500/90 dark-theme:bg-charcoal-700/80";
      }
    }
    __name(getBadgeColor, "getBadgeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$V, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.badges, (badge) => {
          return openBlock(), createElementBlock("span", {
            key: badge.label,
            class: normalizeClass(
              unref(cn)(
                "px-2 py-1 rounded text-xs font-medium uppercase tracking-wider text-white",
                getBadgeColor(badge.type)
              )
            )
          }, toDisplayString(badge.label), 3);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$U = { class: "relative aspect-square w-full overflow-hidden rounded-xl" };
const _hoisted_2$D = ["src"];
const _hoisted_3$u = {
  key: 1,
  class: "flex h-full w-full items-center justify-center bg-gradient-to-br from-smoke-400 via-smoke-800 to-charcoal-400"
};
const _hoisted_4$m = ["id"];
const _hoisted_5$h = ["id"];
const _hoisted_6$f = {
  key: 0,
  class: "flex items-center gap-1"
};
const _hoisted_7$b = {
  key: 1,
  class: "flex items-center gap-1"
};
const _hoisted_8$8 = {
  key: 2,
  class: "flex items-center gap-1"
};
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "AssetCard",
  props: {
    asset: {},
    interactive: { type: Boolean }
  },
  emits: ["select"],
  setup(__props) {
    const props = __props;
    const settingStore = useSettingStore();
    const titleId = useId();
    const descId = useId();
    const tooltipDelay = computed(
      () => settingStore.get("LiteGraph.Node.TooltipDelay")
    );
    const { error } = useImage({
      src: props.asset.preview_url ?? "",
      alt: props.asset.name
    });
    const shouldShowImage = computed(() => props.asset.preview_url && !error.value);
    const cardClasses = computed(() => {
      const base = [
        "rounded-xl",
        "overflow-hidden",
        "transition-all",
        "duration-200"
      ];
      if (!props.interactive) {
        return cn(...base, "bg-smoke-100 dark-theme:bg-charcoal-800");
      }
      return cn(
        ...base,
        "group",
        "appearance-none bg-transparent p-0 m-0",
        "font-inherit text-inherit outline-none cursor-pointer text-left",
        "bg-smoke-100 dark-theme:bg-charcoal-800",
        "hover:bg-secondary-background",
        "border-none",
        "focus:outline-solid outline-azure-600 outline-4"
      );
    });
    const elementProps = computed(
      () => props.interactive ? {
        type: "button",
        "aria-labelledby": titleId,
        "aria-describedby": descId
      } : {
        "aria-labelledby": titleId,
        "aria-describedby": descId
      }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.interactive ? "button" : "div"), mergeProps({
        "data-component-id": "AssetCard",
        "data-asset-id": _ctx.asset.id
      }, elementProps.value, {
        class: cardClasses.value,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.interactive && _ctx.$emit("select", _ctx.asset)),
        onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => _ctx.interactive && _ctx.$emit("select", _ctx.asset), ["enter"]))
      }), {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$U, [
            shouldShowImage.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.asset.preview_url,
              class: "h-full w-full object-contain"
            }, null, 8, _hoisted_2$D)) : (openBlock(), createElementBlock("div", _hoisted_3$u)),
            createVNode(_sfc_main$1s, {
              badges: _ctx.asset.badges
            }, null, 8, ["badges"])
          ]),
          createElementVNode("div", {
            class: normalizeClass(unref(cn)("p-4 h-32 flex flex-col justify-between"))
          }, [
            createElementVNode("div", null, [
              withDirectives((openBlock(), createElementBlock("h3", {
                id: unref(titleId),
                class: normalizeClass(
                  unref(cn)(
                    "mb-2 m-0 text-base font-semibold line-clamp-2 wrap-anywhere",
                    "text-base-foreground"
                  )
                )
              }, [
                createTextVNode(toDisplayString(_ctx.asset.name), 1)
              ], 10, _hoisted_4$m)), [
                [
                  _directive_tooltip,
                  { value: _ctx.asset.name, showDelay: tooltipDelay.value },
                  void 0,
                  { top: true }
                ]
              ]),
              withDirectives((openBlock(), createElementBlock("p", {
                id: unref(descId),
                class: normalizeClass(
                  unref(cn)(
                    "m-0 text-sm leading-6 overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]",
                    "text-ash-500",
                    "dark-theme:text-slate-100"
                  )
                )
              }, [
                createTextVNode(toDisplayString(_ctx.asset.description), 1)
              ], 10, _hoisted_5$h)), [
                [
                  _directive_tooltip,
                  { value: _ctx.asset.description, showDelay: tooltipDelay.value },
                  void 0,
                  { top: true }
                ]
              ])
            ]),
            createElementVNode("div", {
              class: normalizeClass(
                unref(cn)("flex gap-4 text-xs", "text-stone-400", "dark-theme:text-ash-300")
              )
            }, [
              _ctx.asset.stats.stars ? (openBlock(), createElementBlock("span", _hoisted_6$f, [
                _cache[2] || (_cache[2] = createElementVNode("i", { class: "icon-[lucide--star] size-3" }, null, -1)),
                createTextVNode(" " + toDisplayString(_ctx.asset.stats.stars), 1)
              ])) : createCommentVNode("", true),
              _ctx.asset.stats.downloadCount ? (openBlock(), createElementBlock("span", _hoisted_7$b, [
                _cache[3] || (_cache[3] = createElementVNode("i", { class: "icon-[lucide--download] size-3" }, null, -1)),
                createTextVNode(" " + toDisplayString(_ctx.asset.stats.downloadCount), 1)
              ])) : createCommentVNode("", true),
              _ctx.asset.stats.formattedDate ? (openBlock(), createElementBlock("span", _hoisted_8$8, [
                _cache[4] || (_cache[4] = createElementVNode("i", { class: "icon-[lucide--clock] size-3" }, null, -1)),
                createTextVNode(" " + toDisplayString(_ctx.asset.stats.formattedDate), 1)
              ])) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 16, ["data-asset-id", "class"]);
    };
  }
});
function createGridStyle(options = {}) {
  const {
    minWidth = "15rem",
    maxWidth = "1fr",
    padding = "0",
    gap = "1rem",
    columns
  } = options;
  if (columns !== void 0 && columns < 1) {
    console.warn("createGridStyle: columns must be >= 1, defaulting to 1");
  }
  const gridTemplateColumns = columns ? `repeat(${Math.max(1, columns ?? 1)}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, ${maxWidth}))`;
  return {
    display: "grid",
    gridTemplateColumns,
    padding,
    gap
  };
}
__name(createGridStyle, "createGridStyle");
const _hoisted_1$T = ["aria-setsize"];
const _hoisted_2$C = { class: "mb-2 text-lg font-medium" };
const _hoisted_3$t = { class: "text-sm" };
const _hoisted_4$l = {
  key: 1,
  class: "col-span-full flex items-center justify-center py-20"
};
const _sfc_main$1q = /* @__PURE__ */ defineComponent({
  __name: "AssetGrid",
  props: {
    assets: {},
    loading: { type: Boolean }
  },
  emits: ["assetSelect"],
  setup(__props) {
    const gridStyle = computed(() => createGridStyle());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-component-id": "AssetGrid",
        style: normalizeStyle(gridStyle.value),
        role: "grid",
        "aria-label": "Asset collection",
        "aria-rowcount": -1,
        "aria-colcount": -1,
        "aria-setsize": _ctx.assets.length
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.assets, (asset) => {
          return openBlock(), createBlock(_sfc_main$1r, {
            key: asset.id,
            asset,
            interactive: true,
            role: "gridcell",
            onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("assetSelect", $event))
          }, null, 8, ["asset"]);
        }), 128)),
        _ctx.assets.length === 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(
            unref(cn)(
              "col-span-full flex flex-col items-center justify-center py-16",
              "text-ash-300 dark-theme:text-ash-800"
            )
          )
        }, [
          _cache[1] || (_cache[1] = createElementVNode("i", { class: "mb-4 icon-[lucide--search] size-10" }, null, -1)),
          createElementVNode("h3", _hoisted_2$C, toDisplayString(_ctx.$t("assetBrowser.noAssetsFound")), 1),
          createElementVNode("p", _hoisted_3$t, toDisplayString(_ctx.$t("assetBrowser.tryAdjustingFilters")), 1)
        ], 2)) : createCommentVNode("", true),
        _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_4$l, [
          createElementVNode("i", {
            class: normalizeClass([
              "icon-[lucide--loader]",
              unref(cn)("size-12 animate-spin", "text-ash-300 dark-theme:text-ash-800")
            ])
          }, null, 2)
        ])) : createCommentVNode("", true)
      ], 12, _hoisted_1$T);
    };
  }
});
function getAssetDescription(asset) {
  return typeof asset.user_metadata?.description === "string" ? asset.user_metadata.description : null;
}
__name(getAssetDescription, "getAssetDescription");
function getAssetBaseModel(asset) {
  return typeof asset.user_metadata?.base_model === "string" ? asset.user_metadata.base_model : null;
}
__name(getAssetBaseModel, "getAssetBaseModel");
function filterByCategory(category) {
  return (asset) => {
    return category === "all" || asset.tags.includes(category);
  };
}
__name(filterByCategory, "filterByCategory");
function filterByFileFormats(formats) {
  return (asset) => {
    if (formats.length === 0) return true;
    const formatSet = new Set(formats);
    const extension = asset.name.split(".").pop()?.toLowerCase();
    return extension ? formatSet.has(extension) : false;
  };
}
__name(filterByFileFormats, "filterByFileFormats");
function filterByBaseModels(models) {
  return (asset) => {
    if (models.length === 0) return true;
    const modelSet = new Set(models);
    const baseModel = getAssetBaseModel(asset);
    return baseModel ? modelSet.has(baseModel) : false;
  };
}
__name(filterByBaseModels, "filterByBaseModels");
function useAssetBrowser(assetsSource = ref([])) {
  const assets = computed(() => assetsSource.value ?? []);
  const searchQuery = ref("");
  const selectedCategory = ref("all");
  const filters = ref({
    sortBy: "name-asc",
    fileFormats: [],
    baseModels: []
  });
  function transformAssetForDisplay(asset) {
    const typeTag = asset.tags.find((tag) => tag !== "models");
    const description = getAssetDescription(asset) || `${typeTag || t("assetBrowser.unknown")} model`;
    const badges = [];
    if (typeTag) {
      badges.push({ label: typeTag, type: "type" });
    }
    const baseModel = getAssetBaseModel(asset);
    if (baseModel) {
      badges.push({
        label: baseModel,
        type: "base"
      });
    }
    const stats = {
      formattedDate: d(new Date(asset.created_at), { dateStyle: "short" }),
      downloadCount: void 0,
      // Not available in API
      stars: void 0
      // Not available in API
    };
    return {
      ...asset,
      description,
      badges,
      stats
    };
  }
  __name(transformAssetForDisplay, "transformAssetForDisplay");
  const availableCategories = computed(() => {
    const categories = assets.value.filter((asset) => asset.tags[0] === "models").map((asset) => asset.tags[1]).filter((tag) => typeof tag === "string" && tag.length > 0);
    const uniqueCategories = Array.from(new Set(categories)).sort().map((category) => ({
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      icon: "icon-[lucide--package]"
    }));
    return [
      {
        id: "all",
        label: t("assetBrowser.allModels"),
        icon: "icon-[lucide--folder]"
      },
      ...uniqueCategories
    ];
  });
  const contentTitle = computed(() => {
    if (selectedCategory.value === "all") {
      return t("assetBrowser.allModels");
    }
    const category = availableCategories.value.find(
      (cat) => cat.id === selectedCategory.value
    );
    return category?.label || t("assetBrowser.assets");
  });
  const categoryFilteredAssets = computed(() => {
    return assets.value.filter(filterByCategory(selectedCategory.value));
  });
  const fuseOptions = {
    fuseOptions: {
      keys: [
        { name: "name", weight: 0.4 },
        { name: "tags", weight: 0.3 }
      ],
      threshold: 0.4,
      // Higher threshold for typo tolerance (0.0 = exact, 1.0 = match all)
      ignoreLocation: true,
      // Search anywhere in the string, not just at the beginning
      includeScore: true
    },
    matchAllWhenSearchEmpty: true
  };
  const { results: fuseResults } = useFuse(
    searchQuery,
    categoryFilteredAssets,
    fuseOptions
  );
  const searchFiltered = computed(
    () => fuseResults.value.map((result) => result.item)
  );
  const filteredAssets = computed(() => {
    const filtered = searchFiltered.value.filter(filterByFileFormats(filters.value.fileFormats)).filter(filterByBaseModels(filters.value.baseModels));
    const sortedAssets = [...filtered];
    sortedAssets.sort((a, b) => {
      switch (filters.value.sortBy) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "recent":
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case "popular":
          return a.name.localeCompare(b.name);
        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });
    return sortedAssets.map(transformAssetForDisplay);
  });
  function updateFilters(newFilters) {
    filters.value = { ...newFilters };
  }
  __name(updateFilters, "updateFilters");
  return {
    searchQuery,
    selectedCategory,
    availableCategories,
    contentTitle,
    categoryFilteredAssets,
    filteredAssets,
    updateFilters
  };
}
__name(useAssetBrowser, "useAssetBrowser");
const ACRONYM_TAGS = /* @__PURE__ */ new Set(["VAE", "CLIP", "GLIGEN"]);
function formatCategoryLabel(raw) {
  if (!raw) return "Models";
  if (raw === "diffusion_models") return "Diffusion";
  return raw.split("_").map((segment) => {
    const upper = segment.toUpperCase();
    if (ACRONYM_TAGS.has(upper)) return upper;
    const lower = segment.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(" ");
}
__name(formatCategoryLabel, "formatCategoryLabel");
const _hoisted_1$S = { class: "capitalize" };
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "AssetBrowserModal",
  props: {
    nodeType: {},
    inputName: {},
    onSelect: { type: Function },
    onClose: { type: Function },
    showLeftPanel: { type: Boolean },
    title: {},
    assetType: {}
  },
  emits: ["asset-select", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t: t2 } = useI18n();
    const emit = __emit;
    provide(OnCloseKey, props.onClose ?? (() => {
    }));
    const fetchAssets = /* @__PURE__ */ __name(async () => {
      if (props.nodeType) {
        return await assetService.getAssetsForNodeType(props.nodeType) ?? [];
      }
      if (props.assetType) {
        return await assetService.getAssetsByTag(props.assetType) ?? [];
      }
      return [];
    }, "fetchAssets");
    const {
      state: fetchedAssets,
      isLoading,
      execute
    } = useAsyncState(fetchAssets, [], { immediate: false });
    watch(
      () => [props.nodeType, props.assetType],
      async () => {
        await execute();
      },
      { immediate: true }
    );
    const {
      searchQuery,
      selectedCategory,
      availableCategories,
      categoryFilteredAssets,
      filteredAssets,
      updateFilters
    } = useAssetBrowser(fetchedAssets);
    const modelToNodeStore = useModelToNodeStore();
    const primaryCategoryTag = computed(() => {
      const assets = fetchedAssets.value ?? [];
      const tagFromAssets = assets.map((asset) => asset.tags?.find((tag) => tag !== "models")).find((tag) => typeof tag === "string" && tag.length > 0);
      if (tagFromAssets) return tagFromAssets;
      if (props.nodeType) {
        const mapped = modelToNodeStore.getCategoryForNodeType(props.nodeType);
        if (mapped) return mapped;
      }
      if (props.assetType) return props.assetType;
      return "models";
    });
    const activeCategoryTag = computed(() => {
      if (selectedCategory.value !== "all") {
        return selectedCategory.value;
      }
      return primaryCategoryTag.value;
    });
    const displayTitle = computed(() => {
      if (props.title) return props.title;
      const label = formatCategoryLabel(activeCategoryTag.value);
      return t2("assetBrowser.allCategory", { category: label });
    });
    const shouldShowLeftPanel = computed(() => {
      return props.showLeftPanel ?? true;
    });
    function handleClose() {
      props.onClose?.();
      emit("close");
    }
    __name(handleClose, "handleClose");
    function handleAssetSelectAndEmit(asset) {
      emit("asset-select", asset);
      props.onSelect?.(asset);
    }
    __name(handleAssetSelectAndEmit, "handleAssetSelectAndEmit");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseModalLayout, {
        "data-component-id": "AssetBrowserModal",
        class: "size-full max-h-full max-w-full min-w-0",
        "content-title": displayTitle.value,
        onClose: handleClose
      }, createSlots({
        header: withCtx(() => [
          createVNode(_sfc_main$1D, {
            modelValue: unref(searchQuery),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
            autofocus: true,
            size: "lg",
            placeholder: _ctx.$t("assetBrowser.searchAssetsPlaceholder"),
            class: "max-w-96"
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        contentFilter: withCtx(() => [
          createVNode(_sfc_main$1t, {
            assets: unref(categoryFilteredAssets),
            onFilterChange: unref(updateFilters)
          }, null, 8, ["assets", "onFilterChange"])
        ]),
        content: withCtx(() => [
          createVNode(_sfc_main$1q, {
            assets: unref(filteredAssets),
            loading: unref(isLoading),
            onAssetSelect: handleAssetSelectAndEmit
          }, null, 8, ["assets", "loading"])
        ]),
        _: 2
      }, [
        shouldShowLeftPanel.value ? {
          name: "leftPanel",
          fn: withCtx(() => [
            createVNode(_sfc_main$1x, {
              modelValue: unref(selectedCategory),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null),
              "data-component-id": "AssetBrowserModal-LeftSidePanel",
              "nav-items": unref(availableCategories)
            }, {
              "header-icon": withCtx(() => _cache[2] || (_cache[2] = [
                createElementVNode("div", { class: "icon-[lucide--folder] size-4" }, null, -1)
              ])),
              "header-title": withCtx(() => [
                createElementVNode("span", _hoisted_1$S, toDisplayString(displayTitle.value), 1)
              ]),
              _: 1
            }, 8, ["modelValue", "nav-items"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["content-title"]);
    };
  }
});
const dialogComponentProps = {
  headless: true,
  modal: true,
  closable: true,
  pt: {
    root: {
      class: "rounded-2xl overflow-hidden asset-browser-dialog"
    },
    header: {
      class: "!p-0 hidden"
    },
    content: {
      class: "!p-0 !m-0 h-full w-full"
    }
  }
};
const useAssetBrowserDialog = /* @__PURE__ */ __name(() => {
  const dialogStore = useDialogStore();
  const dialogKey = "global-asset-browser";
  async function show(props) {
    const handleAssetSelected = /* @__PURE__ */ __name((asset) => {
      props.onAssetSelected?.(asset);
      dialogStore.closeDialog({ key: dialogKey });
    }, "handleAssetSelected");
    dialogStore.showDialog({
      key: dialogKey,
      component: _sfc_main$1p,
      props: {
        nodeType: props.nodeType,
        inputName: props.inputName,
        currentValue: props.currentValue,
        onSelect: handleAssetSelected,
        onClose: /* @__PURE__ */ __name(() => dialogStore.closeDialog({ key: dialogKey }), "onClose")
      },
      dialogComponentProps
    });
  }
  __name(show, "show");
  async function browse(options) {
    const handleAssetSelected = /* @__PURE__ */ __name((asset) => {
      options.onAssetSelected?.(asset);
      dialogStore.closeDialog({ key: dialogKey });
    }, "handleAssetSelected");
    dialogStore.showDialog({
      key: dialogKey,
      component: _sfc_main$1p,
      props: {
        showLeftPanel: true,
        assetType: options.assetType,
        title: options.title,
        onSelect: handleAssetSelected,
        onClose: /* @__PURE__ */ __name(() => dialogStore.closeDialog({ key: dialogKey }), "onClose")
      },
      dialogComponentProps
    });
  }
  __name(browse, "browse");
  return { show, browse };
}, "useAssetBrowserDialog");
const _hoisted_1$R = { class: "relative inline-flex items-center" };
const _hoisted_2$B = {
  key: 0,
  class: "icon-[lucide--ellipsis] text-sm"
};
const _hoisted_3$s = {
  key: 1,
  class: "icon-[lucide--more-vertical] text-sm"
};
const _hoisted_4$k = { class: "flex min-w-40 flex-col gap-2 p-2" };
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "MoreButton",
  props: {
    isVertical: { type: Boolean, default: false },
    size: { default: "md" },
    type: { default: "secondary" },
    border: { type: Boolean },
    disabled: { type: Boolean },
    class: {}
  },
  emits: ["menuOpened", "menuClosed"],
  setup(__props) {
    const popover = ref();
    const toggle = /* @__PURE__ */ __name((event) => {
      popover.value?.toggle(event);
    }, "toggle");
    const hide = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "hide");
    const pt = computed(() => ({
      root: {
        class: cn("absolute z-50")
      },
      content: {
        class: cn(
          "mt-1 rounded-lg",
          "bg-white dark-theme:bg-zinc-800",
          "text-neutral dark-theme:text-white",
          "shadow-lg",
          "border border-zinc-200 dark-theme:border-zinc-700"
        )
      }
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$R, [
        createVNode(_sfc_main$1E, {
          size: _ctx.size,
          type: _ctx.type,
          onClick: toggle
        }, {
          default: withCtx(() => [
            !_ctx.isVertical ? (openBlock(), createElementBlock("i", _hoisted_2$B)) : (openBlock(), createElementBlock("i", _hoisted_3$s))
          ]),
          _: 1
        }, 8, ["size", "type"]),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "append-to": "body",
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: pt.value,
          onShow: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("menuOpened")),
          onHide: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("menuClosed"))
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4$k, [
              renderSlot(_ctx.$slots, "default", { close: hide })
            ])
          ]),
          _: 3
        }, 8, ["pt"])
      ]);
    };
  }
});
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "CardBottom",
  props: {
    fullHeight: { type: Boolean, default: true }
  },
  setup(__props) {
    const containerClasses = computed(
      () => cn("flex-1 w-full", __props.fullHeight && "h-full")
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClasses.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const structureClasses = "flex flex-col overflow-hidden";
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "CardContainer",
  props: {
    size: { default: "regular" },
    variant: { default: "default" },
    rounded: { default: "md" },
    customAspectRatio: {},
    hasBorder: { type: Boolean, default: true },
    hasBackground: { type: Boolean, default: true },
    hasShadow: { type: Boolean, default: true },
    hasCursor: { type: Boolean, default: true },
    class: { default: "" }
  },
  setup(__props) {
    const roundedClasses = {
      none: "rounded-none",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl"
    };
    const containerClasses = computed(() => {
      const variantClasses = {
        default: cn(
          __props.hasBackground && "bg-white dark-theme:bg-zinc-800",
          __props.hasBorder && "border border-zinc-200 dark-theme:border-zinc-700",
          __props.hasShadow && "shadow-sm",
          __props.hasCursor && "cursor-pointer"
        ),
        ghost: cn(
          __props.hasCursor && "cursor-pointer",
          "p-2 transition-colors duration-200"
        ),
        outline: cn(
          __props.hasBorder && "border-2 border-zinc-300 dark-theme:border-zinc-600",
          __props.hasCursor && "cursor-pointer",
          "hover:border-zinc-400 dark-theme:hover:border-zinc-500 transition-colors"
        )
      };
      const aspectRatio = __props.customAspectRatio ? `aspect-[${__props.customAspectRatio}]` : {
        mini: "aspect-100/120",
        compact: "aspect-240/311",
        regular: "aspect-256/308",
        portrait: "aspect-256/325",
        tall: "aspect-256/353"
      }[__props.size];
      return cn(
        structureClasses,
        roundedClasses[__props.rounded],
        variantClasses[__props.variant],
        aspectRatio,
        __props.class
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClasses.value)
      }, [
        renderSlot(_ctx.$slots, "top"),
        renderSlot(_ctx.$slots, "bottom")
      ], 2);
    };
  }
});
const _sfc_main$1l = /* @__PURE__ */ defineComponent({
  __name: "CardTop",
  props: {
    ratio: { default: "square" },
    topLeftClass: {},
    topRightClass: {},
    centerLeftClass: {},
    centerRightClass: {},
    bottomLeftClass: {},
    bottomRightClass: {}
  },
  setup(__props) {
    const slots = useSlots();
    const topStyle = computed(() => {
      const baseClasses2 = "relative p-0 overflow-hidden";
      const ratioClasses = {
        square: "aspect-square",
        landscape: "aspect-48/27"
      };
      return `${baseClasses2} ${ratioClasses[__props.ratio]}`;
    });
    const defaultSlotClasses = {
      "top-left": "absolute top-2 left-2 flex flex-wrap justify-start gap-2",
      "top-right": "absolute top-2 right-2 flex flex-wrap justify-end gap-2",
      "center-left": "absolute top-1/2 left-2 flex -translate-y-1/2 flex-wrap justify-start gap-2",
      "center-right": "absolute top-1/2 right-2 flex -translate-y-1/2 flex-wrap justify-end gap-2",
      "bottom-left": "absolute bottom-2 left-2 flex flex-wrap justify-start gap-2",
      "bottom-right": "absolute right-2 bottom-2 flex flex-wrap justify-end gap-2"
    };
    const slotClasses = computed(() => ({
      "top-left": cn(defaultSlotClasses["top-left"], __props.topLeftClass),
      "top-right": cn(defaultSlotClasses["top-right"], __props.topRightClass),
      "center-left": cn(defaultSlotClasses["center-left"], __props.centerLeftClass),
      "center-right": cn(defaultSlotClasses["center-right"], __props.centerRightClass),
      "bottom-left": cn(defaultSlotClasses["bottom-left"], __props.bottomLeftClass),
      "bottom-right": cn(defaultSlotClasses["bottom-right"], __props.bottomRightClass)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(topStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default", { class: "absolute top-0 left-0 h-full w-full" }),
        unref(slots)["top-left"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(slotClasses.value["top-left"])
        }, [
          renderSlot(_ctx.$slots, "top-left")
        ], 2)) : createCommentVNode("", true),
        unref(slots)["top-right"] ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(slotClasses.value["top-right"])
        }, [
          renderSlot(_ctx.$slots, "top-right")
        ], 2)) : createCommentVNode("", true),
        unref(slots)["center-left"] ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(slotClasses.value["center-left"])
        }, [
          renderSlot(_ctx.$slots, "center-left")
        ], 2)) : createCommentVNode("", true),
        unref(slots)["center-right"] ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(slotClasses.value["center-right"])
        }, [
          renderSlot(_ctx.$slots, "center-right")
        ], 2)) : createCommentVNode("", true),
        unref(slots)["bottom-left"] ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass(slotClasses.value["bottom-left"])
        }, [
          renderSlot(_ctx.$slots, "bottom-left")
        ], 2)) : createCommentVNode("", true),
        unref(slots)["bottom-right"] ? (openBlock(), createElementBlock("div", {
          key: 5,
          class: normalizeClass(slotClasses.value["bottom-right"])
        }, [
          renderSlot(_ctx.$slots, "bottom-right")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const baseClasses = "inline-flex shrink-0 items-center justify-center gap-1 rounded px-2 py-1 text-xs font-bold";
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "SquareChip",
  props: {
    label: {},
    variant: { default: "dark" }
  },
  setup(__props) {
    const variantStyles = {
      dark: "bg-zinc-500/40 text-white/90",
      light: "backdrop-blur-[2px] bg-white/50 text-zinc-900 dark-theme:text-white"
    };
    const chipClasses = computed(() => {
      return cn(baseClasses, variantStyles[__props.variant]);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(chipClasses.value)
      }, [
        renderSlot(_ctx.$slots, "icon"),
        createElementVNode("span", null, toDisplayString(_ctx.label), 1)
      ], 2);
    };
  }
});
const _hoisted_1$Q = ["aria-label"];
const _hoisted_2$A = { class: "relative h-88 w-full grow overflow-hidden rounded-[5px] bg-node-component-surface" };
const _hoisted_3$r = {
  key: 0,
  class: "flex size-full flex-col items-center justify-center bg-smoke-800/50 text-center text-white"
};
const _hoisted_4$j = { class: "text-sm text-smoke-300" };
const _hoisted_5$g = { class: "mt-1 text-xs text-smoke-400" };
const _hoisted_6$e = ["src"];
const _hoisted_7$a = {
  key: 3,
  class: "actions absolute top-2 right-2 flex gap-1"
};
const _hoisted_8$7 = ["title", "aria-label"];
const _hoisted_9$5 = ["title", "aria-label"];
const _hoisted_10$5 = {
  key: 4,
  class: "absolute right-2 bottom-2 left-2 flex justify-center gap-1"
};
const _hoisted_11$4 = ["aria-label", "onClick"];
const _hoisted_12$3 = { class: "relative" };
const _hoisted_13$3 = { class: "mt-2 text-center text-xs text-white" };
const _hoisted_14$3 = {
  key: 0,
  class: "text-red-400"
};
const _hoisted_15$3 = {
  key: 1,
  class: "text-smoke-400"
};
const _hoisted_16$3 = { key: 2 };
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VideoPreview",
  props: {
    imageUrls: {},
    nodeId: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const nodeOutputStore = useNodeOutputStore();
    const currentIndex = ref(0);
    const isHovered = ref(false);
    const actualDimensions = ref(null);
    const videoError = ref(false);
    const isLoading = ref(false);
    const currentVideoUrl = computed(() => props.imageUrls[currentIndex.value]);
    const hasMultipleVideos = computed(() => props.imageUrls.length > 1);
    watch(
      () => props.imageUrls,
      (newUrls) => {
        if (currentIndex.value >= newUrls.length) {
          currentIndex.value = 0;
        }
        actualDimensions.value = null;
        videoError.value = false;
        isLoading.value = false;
      },
      { deep: true }
    );
    const handleVideoLoad = /* @__PURE__ */ __name((event) => {
      if (!event.target || !(event.target instanceof HTMLVideoElement)) return;
      const video = event.target;
      isLoading.value = false;
      videoError.value = false;
      if (video.videoWidth && video.videoHeight) {
        actualDimensions.value = `${video.videoWidth} x ${video.videoHeight}`;
      }
    }, "handleVideoLoad");
    const handleVideoError = /* @__PURE__ */ __name(() => {
      isLoading.value = false;
      videoError.value = true;
      actualDimensions.value = null;
    }, "handleVideoError");
    const handleDownload = /* @__PURE__ */ __name(() => {
      try {
        downloadFile(currentVideoUrl.value);
      } catch (error) {
        useToast().add({
          severity: "error",
          summary: "Error",
          detail: t2("g.failedToDownloadVideo"),
          life: 3e3,
          group: "video-preview"
        });
      }
    }, "handleDownload");
    const handleRemove = /* @__PURE__ */ __name(() => {
      if (!props.nodeId) return;
      nodeOutputStore.removeNodeOutputs(props.nodeId);
    }, "handleRemove");
    const setCurrentIndex = /* @__PURE__ */ __name((index) => {
      if (index >= 0 && index < props.imageUrls.length) {
        currentIndex.value = index;
        actualDimensions.value = null;
        isLoading.value = true;
        videoError.value = false;
      }
    }, "setCurrentIndex");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      isHovered.value = true;
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      isHovered.value = false;
    }, "handleMouseLeave");
    const getNavigationDotClass = /* @__PURE__ */ __name((index) => {
      return [
        "w-2 h-2 rounded-full transition-all duration-200 border-0 cursor-pointer",
        index === currentIndex.value ? "bg-white" : "bg-white/50 hover:bg-white/80"
      ];
    }, "getNavigationDotClass");
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      if (props.imageUrls.length <= 1) return;
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          setCurrentIndex(
            currentIndex.value > 0 ? currentIndex.value - 1 : props.imageUrls.length - 1
          );
          break;
        case "ArrowRight":
          event.preventDefault();
          setCurrentIndex(
            currentIndex.value < props.imageUrls.length - 1 ? currentIndex.value + 1 : 0
          );
          break;
        case "Home":
          event.preventDefault();
          setCurrentIndex(0);
          break;
        case "End":
          event.preventDefault();
          setCurrentIndex(props.imageUrls.length - 1);
          break;
      }
    }, "handleKeyDown");
    const getVideoFilename = /* @__PURE__ */ __name((url) => {
      try {
        return new URL(url).searchParams.get("filename") || "Unknown file";
      } catch {
        return "Invalid URL";
      }
    }, "getVideoFilename");
    return (_ctx, _cache) => {
      return _ctx.imageUrls.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "video-preview group relative flex size-full min-h-16 min-w-16 flex-col px-2",
        tabindex: "0",
        role: "region",
        "aria-label": _ctx.$t("g.videoPreview"),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onKeydown: handleKeyDown
      }, [
        createElementVNode("div", _hoisted_2$A, [
          videoError.value ? (openBlock(), createElementBlock("div", _hoisted_3$r, [
            _cache[0] || (_cache[0] = createElementVNode("i", { class: "mb-2 icon-[lucide--video-off] h-12 w-12 text-smoke-400" }, null, -1)),
            createElementVNode("p", _hoisted_4$j, toDisplayString(_ctx.$t("g.videoFailedToLoad")), 1),
            createElementVNode("p", _hoisted_5$g, toDisplayString(getVideoFilename(currentVideoUrl.value)), 1)
          ])) : isLoading.value ? (openBlock(), createBlock(unref(Skeleton), {
            key: 1,
            class: "size-full",
            "border-radius": "5px"
          })) : (openBlock(), createElementBlock("video", {
            key: 2,
            src: currentVideoUrl.value,
            class: "block size-full object-contain",
            controls: "",
            loop: "",
            playsinline: "",
            onLoadeddata: handleVideoLoad,
            onError: handleVideoError
          }, null, 40, _hoisted_6$e)),
          isHovered.value ? (openBlock(), createElementBlock("div", _hoisted_7$a, [
            createElementVNode("button", {
              class: "action-btn cursor-pointer rounded-lg border-0 bg-white p-2 text-black shadow-sm transition-all duration-200 hover:bg-smoke-100",
              title: _ctx.$t("g.downloadVideo"),
              "aria-label": _ctx.$t("g.downloadVideo"),
              onClick: handleDownload
            }, _cache[1] || (_cache[1] = [
              createElementVNode("i", { class: "icon-[lucide--download] h-4 w-4" }, null, -1)
            ]), 8, _hoisted_8$7),
            createElementVNode("button", {
              class: "action-btn cursor-pointer rounded-lg border-0 bg-white p-2 text-black shadow-sm transition-all duration-200 hover:bg-smoke-100",
              title: _ctx.$t("g.removeVideo"),
              "aria-label": _ctx.$t("g.removeVideo"),
              onClick: handleRemove
            }, _cache[2] || (_cache[2] = [
              createElementVNode("i", { class: "icon-[lucide--x] h-4 w-4" }, null, -1)
            ]), 8, _hoisted_9$5)
          ])) : createCommentVNode("", true),
          hasMultipleVideos.value ? (openBlock(), createElementBlock("div", _hoisted_10$5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imageUrls, (_, index) => {
              return openBlock(), createElementBlock("button", {
                key: index,
                class: normalizeClass(getNavigationDotClass(index)),
                "aria-label": _ctx.$t("g.viewVideoOfTotal", {
                  index: index + 1,
                  total: _ctx.imageUrls.length
                }),
                onClick: /* @__PURE__ */ __name(($event) => setCurrentIndex(index), "onClick")
              }, null, 10, _hoisted_11$4);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_12$3, [
          createElementVNode("div", _hoisted_13$3, [
            videoError.value ? (openBlock(), createElementBlock("span", _hoisted_14$3, toDisplayString(_ctx.$t("g.errorLoadingVideo")), 1)) : isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_15$3, toDisplayString(_ctx.$t("g.loading")) + "... ", 1)) : (openBlock(), createElementBlock("span", _hoisted_16$3, toDisplayString(actualDimensions.value || _ctx.$t("g.calculatingDimensions")), 1))
          ]),
          createVNode(LODFallback)
        ])
      ], 40, _hoisted_1$Q)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$P = ["aria-label"];
const _hoisted_2$z = { class: "min-h-88 w-full overflow-hidden rounded-[5px] bg-node-component-surface" };
const _hoisted_3$q = {
  key: 0,
  class: "flex size-full flex-col items-center justify-center bg-smoke-800/50 text-center text-white"
};
const _hoisted_4$i = { class: "text-sm text-smoke-300" };
const _hoisted_5$f = { class: "mt-1 text-xs text-smoke-400" };
const _hoisted_6$d = ["src", "alt"];
const _hoisted_7$9 = {
  key: 3,
  class: "actions absolute top-2 right-2 flex gap-2.5"
};
const _hoisted_8$6 = ["title", "aria-label"];
const _hoisted_9$4 = ["title", "aria-label"];
const _hoisted_10$4 = ["title", "aria-label"];
const _hoisted_11$3 = {
  key: 4,
  class: "absolute right-2 bottom-2 left-2 flex justify-center gap-1"
};
const _hoisted_12$2 = ["aria-label", "onClick"];
const _hoisted_13$2 = { class: "relative" };
const _hoisted_14$2 = { class: "mt-2 text-center text-xs text-white" };
const _hoisted_15$2 = {
  key: 0,
  class: "text-red-400"
};
const _hoisted_16$2 = {
  key: 1,
  class: "text-smoke-400"
};
const _hoisted_17$2 = { key: 2 };
const actionButtonClass = "flex h-8 min-h-8 items-center justify-center gap-2.5 rounded-lg border-0 bg-button-surface px-2 py-2 text-button-surface-contrast shadow-sm transition-colors duration-200 hover:bg-button-hover-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button-surface-contrast focus-visible:ring-offset-2 focus-visible:ring-offset-transparent cursor-pointer";
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "ImagePreview",
  props: {
    imageUrls: {},
    nodeId: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const nodeOutputStore = useNodeOutputStore();
    const currentIndex = ref(0);
    const isHovered = ref(false);
    const actualDimensions = ref(null);
    const imageError = ref(false);
    const isLoading = ref(false);
    const currentImageEl = ref();
    const currentImageUrl = computed(() => props.imageUrls[currentIndex.value]);
    const hasMultipleImages = computed(() => props.imageUrls.length > 1);
    const imageAltText = computed(() => `Node output ${currentIndex.value + 1}`);
    watch(
      () => props.imageUrls,
      (newUrls) => {
        if (currentIndex.value >= newUrls.length) {
          currentIndex.value = 0;
        }
        actualDimensions.value = null;
        imageError.value = false;
        isLoading.value = false;
      },
      { deep: true }
    );
    const handleImageLoad = /* @__PURE__ */ __name((event) => {
      if (!event.target || !(event.target instanceof HTMLImageElement)) return;
      const img = event.target;
      isLoading.value = false;
      imageError.value = false;
      if (img.naturalWidth && img.naturalHeight) {
        actualDimensions.value = `${img.naturalWidth} x ${img.naturalHeight}`;
      }
    }, "handleImageLoad");
    const handleImageError = /* @__PURE__ */ __name(() => {
      isLoading.value = false;
      imageError.value = true;
      actualDimensions.value = null;
    }, "handleImageError");
    const setupNodeForMaskEditor = /* @__PURE__ */ __name(() => {
      if (!props.nodeId || !currentImageEl.value) return;
      const node = app.rootGraph?.getNodeById(props.nodeId);
      if (!node) return;
      node.imageIndex = currentIndex.value;
      node.imgs = [currentImageEl.value];
      app.canvas?.select(node);
    }, "setupNodeForMaskEditor");
    const handleEditMask = /* @__PURE__ */ __name(() => {
      setupNodeForMaskEditor();
      void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
    }, "handleEditMask");
    const handleDownload = /* @__PURE__ */ __name(() => {
      try {
        downloadFile(currentImageUrl.value);
      } catch (error) {
        useToast().add({
          severity: "error",
          summary: "Error",
          detail: t2("g.failedToDownloadImage"),
          life: 3e3,
          group: "image-preview"
        });
      }
    }, "handleDownload");
    const handleRemove = /* @__PURE__ */ __name(() => {
      if (!props.nodeId) return;
      nodeOutputStore.removeNodeOutputs(props.nodeId);
    }, "handleRemove");
    const setCurrentIndex = /* @__PURE__ */ __name((index) => {
      if (index >= 0 && index < props.imageUrls.length) {
        currentIndex.value = index;
        actualDimensions.value = null;
        isLoading.value = false;
        imageError.value = false;
      }
    }, "setCurrentIndex");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      isHovered.value = true;
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      isHovered.value = false;
    }, "handleMouseLeave");
    const getNavigationDotClass = /* @__PURE__ */ __name((index) => {
      return [
        "w-2 h-2 rounded-full transition-all duration-200 border-0 cursor-pointer",
        index === currentIndex.value ? "bg-white" : "bg-white/50 hover:bg-white/80"
      ];
    }, "getNavigationDotClass");
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      if (props.imageUrls.length <= 1) return;
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          setCurrentIndex(
            currentIndex.value > 0 ? currentIndex.value - 1 : props.imageUrls.length - 1
          );
          break;
        case "ArrowRight":
          event.preventDefault();
          setCurrentIndex(
            currentIndex.value < props.imageUrls.length - 1 ? currentIndex.value + 1 : 0
          );
          break;
        case "Home":
          event.preventDefault();
          setCurrentIndex(0);
          break;
        case "End":
          event.preventDefault();
          setCurrentIndex(props.imageUrls.length - 1);
          break;
      }
    }, "handleKeyDown");
    const getImageFilename = /* @__PURE__ */ __name((url) => {
      try {
        return new URL(url).searchParams.get("filename") || "Unknown file";
      } catch {
        return "Invalid URL";
      }
    }, "getImageFilename");
    return (_ctx, _cache) => {
      const _component_i_comfy58mask = __unplugin_components_0$2;
      return _ctx.imageUrls.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "image-preview group relative flex size-full min-h-16 min-w-16 flex-col px-2 justify-center",
        tabindex: "0",
        role: "region",
        "aria-label": _ctx.$t("g.imagePreview"),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onKeydown: handleKeyDown
      }, [
        createElementVNode("div", _hoisted_2$z, [
          imageError.value ? (openBlock(), createElementBlock("div", _hoisted_3$q, [
            _cache[0] || (_cache[0] = createElementVNode("i", { class: "mb-2 icon-[lucide--image-off] h-12 w-12 text-smoke-400" }, null, -1)),
            createElementVNode("p", _hoisted_4$i, toDisplayString(_ctx.$t("g.imageFailedToLoad")), 1),
            createElementVNode("p", _hoisted_5$f, toDisplayString(getImageFilename(currentImageUrl.value)), 1)
          ])) : isLoading.value ? (openBlock(), createBlock(unref(Skeleton), {
            key: 1,
            class: "size-full",
            "border-radius": "5px"
          })) : (openBlock(), createElementBlock("img", {
            key: 2,
            ref_key: "currentImageEl",
            ref: currentImageEl,
            src: currentImageUrl.value,
            alt: imageAltText.value,
            class: "block size-full object-contain pointer-events-none",
            onLoad: handleImageLoad,
            onError: handleImageError
          }, null, 40, _hoisted_6$d)),
          isHovered.value ? (openBlock(), createElementBlock("div", _hoisted_7$9, [
            !hasMultipleImages.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: normalizeClass(actionButtonClass),
              title: _ctx.$t("g.editOrMaskImage"),
              "aria-label": _ctx.$t("g.editOrMaskImage"),
              onClick: handleEditMask
            }, [
              createVNode(_component_i_comfy58mask, { class: "h-4 w-4" })
            ], 8, _hoisted_8$6)) : createCommentVNode("", true),
            createElementVNode("button", {
              class: normalizeClass(actionButtonClass),
              title: _ctx.$t("g.downloadImage"),
              "aria-label": _ctx.$t("g.downloadImage"),
              onClick: handleDownload
            }, _cache[1] || (_cache[1] = [
              createElementVNode("i", { class: "icon-[lucide--download] h-4 w-4" }, null, -1)
            ]), 8, _hoisted_9$4),
            createElementVNode("button", {
              class: normalizeClass(actionButtonClass),
              title: _ctx.$t("g.removeImage"),
              "aria-label": _ctx.$t("g.removeImage"),
              onClick: handleRemove
            }, _cache[2] || (_cache[2] = [
              createElementVNode("i", { class: "icon-[lucide--x] h-4 w-4" }, null, -1)
            ]), 8, _hoisted_10$4)
          ])) : createCommentVNode("", true),
          hasMultipleImages.value ? (openBlock(), createElementBlock("div", _hoisted_11$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imageUrls, (_, index) => {
              return openBlock(), createElementBlock("button", {
                key: index,
                class: normalizeClass(getNavigationDotClass(index)),
                "aria-label": _ctx.$t("g.viewImageOfTotal", {
                  index: index + 1,
                  total: _ctx.imageUrls.length
                }),
                onClick: /* @__PURE__ */ __name(($event) => setCurrentIndex(index), "onClick")
              }, null, 10, _hoisted_12$2);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_13$2, [
          createElementVNode("div", _hoisted_14$2, [
            imageError.value ? (openBlock(), createElementBlock("span", _hoisted_15$2, toDisplayString(_ctx.$t("g.errorLoadingImage")), 1)) : isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_16$2, toDisplayString(_ctx.$t("g.loading")) + "... ", 1)) : (openBlock(), createElementBlock("span", _hoisted_17$2, toDisplayString(actualDimensions.value || _ctx.$t("g.calculatingDimensions")), 1))
          ]),
          createVNode(LODFallback)
        ])
      ], 40, _hoisted_1$P)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$O = {
  key: 0,
  class: "node-error p-2 text-sm text-red-500"
};
const _hoisted_2$y = {
  key: 1,
  class: "lg-node-content flex grow flex-col"
};
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "NodeContent",
  props: {
    nodeData: {},
    media: {}
  },
  setup(__props) {
    const props = __props;
    const hasMedia = computed(() => props.media && props.media.urls.length > 0);
    const nodeId = computed(() => props.nodeData?.id?.toString());
    const renderError = ref(null);
    const { toastErrorHandler } = useErrorHandling();
    onErrorCaptured((error) => {
      renderError.value = error.message;
      toastErrorHandler(error);
      return false;
    });
    return (_ctx, _cache) => {
      return renderError.value ? (openBlock(), createElementBlock("div", _hoisted_1$O, toDisplayString(_ctx.$t("Node Content Error")), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$y, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          hasMedia.value && _ctx.media?.type === "video" ? (openBlock(), createBlock(_sfc_main$1j, {
            key: 0,
            "image-urls": _ctx.media.urls,
            "node-id": nodeId.value,
            class: "mt-2"
          }, null, 8, ["image-urls", "node-id"])) : hasMedia.value && _ctx.media?.type === "image" ? (openBlock(), createBlock(_sfc_main$1i, {
            key: 1,
            "image-urls": _ctx.media.urls,
            "node-id": nodeId.value,
            class: "mt-2"
          }, null, 8, ["image-urls", "node-id"])) : createCommentVNode("", true)
        ])
      ]));
    };
  }
});
const _hoisted_1$N = { class: "flex max-w-xs min-w-40 flex-col gap-2 p-3" };
const _hoisted_2$x = { class: "text-sm font-inter" };
const _hoisted_3$p = {
  key: 1,
  class: "text-xs"
};
const _hoisted_4$h = { class: "flex max-w-xs min-w-40 flex-col gap-2 p-3" };
const _hoisted_5$e = { class: "text-sm font-inter" };
const _hoisted_6$c = {
  key: 1,
  class: "text-xs"
};
const clickableClasses = "cursor-pointer transition-opacity hover:opacity-80";
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "TopbarBadge",
  props: {
    badge: {},
    displayMode: { default: "full" },
    reverseOrder: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    backgroundColor: { default: "var(--comfy-menu-bg)" }
  },
  setup(__props) {
    const props = __props;
    const popover = ref();
    const togglePopover = /* @__PURE__ */ __name((event) => {
      popover.value?.toggle(event);
    }, "togglePopover");
    const variant = computed(() => props.badge.variant ?? "info");
    const menuBackgroundStyle = computed(() => ({
      backgroundColor: props.backgroundColor
    }));
    const labelClasses = computed(() => {
      switch (variant.value) {
        case "error":
          return "bg-danger-100 text-white";
        case "warning":
          return "bg-gold-600 text-black";
        case "info":
        default:
          return "bg-white text-black";
      }
    });
    const textClasses = computed(() => {
      switch (variant.value) {
        case "error":
          return "text-danger-100";
        case "warning":
          return "text-gold-600";
        case "info":
        default:
          return "text-text-primary";
      }
    });
    const iconColorClass = computed(() => textClasses.value);
    const iconClass = computed(() => {
      if (props.badge.icon) {
        return props.badge.icon;
      }
      switch (variant.value) {
        case "error":
          return "pi pi-exclamation-circle";
        case "warning":
          return "pi pi-exclamation-triangle";
        case "info":
        default:
          return void 0;
      }
    });
    const dotClasses = computed(() => {
      switch (variant.value) {
        case "error":
          return "bg-danger-100";
        case "warning":
          return "bg-gold-600";
        case "info":
        default:
          return "bg-slate-100";
      }
    });
    const popoverPt = computed(() => ({
      root: {
        class: cn("absolute z-50")
      },
      content: {
        class: cn(
          "mt-1 rounded-lg",
          "bg-white dark-theme:bg-zinc-800",
          "text-neutral dark-theme:text-white",
          "shadow-lg",
          "border border-zinc-200 dark-theme:border-zinc-700"
        )
      }
    }));
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return _ctx.displayMode === "icon-only" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["relative inline-flex h-full shrink-0 items-center justify-center px-2", clickableClasses]),
        style: normalizeStyle(menuBackgroundStyle.value),
        onClick: togglePopover
      }, [
        iconClass.value ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["shrink-0 text-base", iconClass.value, iconColorClass.value])
        }, null, 2)) : _ctx.badge.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-xxxs font-semibold", labelClasses.value])
        }, toDisplayString(_ctx.badge.label), 3)) : (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(["size-2 shrink-0 rounded-full", dotClasses.value])
        }, null, 2)),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "append-to": "body",
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: popoverPt.value
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$N, [
              _ctx.badge.label ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["w-fit rounded-full px-1.5 py-0.5 text-xxxs font-semibold", labelClasses.value])
              }, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_2$x, toDisplayString(_ctx.badge.text), 1),
              _ctx.badge.tooltip ? (openBlock(), createElementBlock("div", _hoisted_3$p, toDisplayString(_ctx.badge.tooltip), 1)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 4)) : _ctx.displayMode === "compact" ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "relative inline-flex h-full",
        style: normalizeStyle(menuBackgroundStyle.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["flex h-full shrink-0 items-center gap-2 whitespace-nowrap", [
            { "flex-row-reverse": _ctx.reverseOrder },
            _ctx.noPadding ? "" : "px-3",
            clickableClasses
          ]]),
          onClick: togglePopover
        }, [
          iconClass.value ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["shrink-0 text-base", iconClass.value, iconColorClass.value])
          }, null, 2)) : createCommentVNode("", true),
          _ctx.badge.label ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-xxxs font-semibold", labelClasses.value])
          }, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true)
        ], 2),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "append-to": "body",
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: popoverPt.value
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4$h, [
              _ctx.badge.label ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["w-fit rounded-full px-1.5 py-0.5 text-xxxs font-semibold", labelClasses.value])
              }, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_5$e, toDisplayString(_ctx.badge.text), 1),
              _ctx.badge.tooltip ? (openBlock(), createElementBlock("div", _hoisted_6$c, toDisplayString(_ctx.badge.tooltip), 1)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 4)) : withDirectives((openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(["flex h-full shrink-0 items-center gap-2 whitespace-nowrap", [{ "flex-row-reverse": _ctx.reverseOrder }, _ctx.noPadding ? "" : "px-3"]]),
        style: normalizeStyle(menuBackgroundStyle.value)
      }, [
        iconClass.value ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["shrink-0 text-base", iconClass.value, iconColorClass.value])
        }, null, 2)) : createCommentVNode("", true),
        _ctx.badge.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["shrink-0 rounded-full px-1.5 py-0.5 text-xxxs font-semibold", labelClasses.value])
        }, toDisplayString(_ctx.badge.label), 3)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["font-inter text-sm", textClasses.value])
        }, toDisplayString(_ctx.badge.text), 3)
      ], 6)), [
        [_directive_tooltip, _ctx.badge.tooltip]
      ]);
    };
  }
});
const POLL_INTERVAL_MS = 3e3;
const MAX_POLL_DURATION_MS = 5 * 60 * 1e3;
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "SubscribeButton",
  props: {
    label: {},
    size: { default: "large" },
    variant: { default: "default" },
    fluid: { type: Boolean, default: true }
  },
  emits: ["subscribed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const rootClass = computed(() => cn("font-bold", props.fluid && "w-full"));
    const emit = __emit;
    const { subscribe, isActiveSubscription: isActiveSubscription2, fetchStatus } = useSubscription();
    const telemetry = useTelemetry();
    const isLoading = ref(false);
    const isPolling = ref(false);
    let pollInterval = null;
    const startPollingSubscriptionStatus = /* @__PURE__ */ __name(() => {
      isPolling.value = true;
      isLoading.value = true;
      const startTime = Date.now();
      const poll = /* @__PURE__ */ __name(async () => {
        try {
          if (Date.now() - startTime > MAX_POLL_DURATION_MS) {
            stopPolling();
            return;
          }
          await fetchStatus();
          if (isActiveSubscription2.value) {
            stopPolling();
            telemetry?.trackMonthlySubscriptionSucceeded();
            emit("subscribed");
          }
        } catch (error) {
          console.error(
            "[SubscribeButton] Error polling subscription status:",
            error
          );
        }
      }, "poll");
      void poll();
      pollInterval = window.setInterval(poll, POLL_INTERVAL_MS);
    }, "startPollingSubscriptionStatus");
    const stopPolling = /* @__PURE__ */ __name(() => {
      if (pollInterval) {
        clearInterval(pollInterval);
        pollInterval = null;
      }
      isPolling.value = false;
      isLoading.value = false;
    }, "stopPolling");
    const handleSubscribe = /* @__PURE__ */ __name(async () => {
      isLoading.value = true;
      try {
        await subscribe();
        startPollingSubscriptionStatus();
      } catch (error) {
        console.error("[SubscribeButton] Error initiating subscription:", error);
        isLoading.value = false;
      }
    }, "handleSubscribe");
    onBeforeUnmount(() => {
      stopPolling();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        label: _ctx.label || _ctx.$t("subscription.required.subscribe"),
        size: _ctx.size,
        loading: isLoading.value,
        disabled: isPolling.value,
        severity: "primary",
        style: normalizeStyle(
          _ctx.variant === "gradient" ? {
            background: "var(--color-subscription-button-gradient)",
            color: "var(--color-white)"
          } : void 0
        ),
        pt: {
          root: {
            class: rootClass.value
          }
        },
        onClick: handleSubscribe
      }, null, 8, ["label", "size", "loading", "disabled", "style", "pt"]);
    };
  }
});
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "GlobalToast",
  setup(__props) {
    const toast = useToast$1();
    const toastStore = useToastStore();
    const settingStore = useSettingStore();
    watch(
      () => toastStore.messagesToAdd,
      (newMessages) => {
        if (newMessages.length === 0) {
          return;
        }
        newMessages.forEach((message) => {
          toast.add(message);
        });
        toastStore.messagesToAdd = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.messagesToRemove,
      (messagesToRemove) => {
        if (messagesToRemove.length === 0) {
          return;
        }
        messagesToRemove.forEach((message) => {
          toast.remove(message);
        });
        toastStore.messagesToRemove = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.removeAllRequested,
      (requested) => {
        if (requested) {
          toast.removeAllGroups();
          toastStore.removeAllRequested = false;
        }
      }
    );
    function updateToastPosition() {
      const styleElement = document.getElementById("dynamic-toast-style") || createStyleElement();
      const rect = document.querySelector(".graph-canvas-container")?.getBoundingClientRect();
      if (!rect) return;
      styleElement.textContent = `
    .p-toast.p-component.p-toast-top-right {
      top: ${rect.top + 100}px !important;
      right: ${window.innerWidth - (rect.left + rect.width) + 20}px !important;
       z-index: 10000 !important;
    }
  `;
    }
    __name(updateToastPosition, "updateToastPosition");
    function createStyleElement() {
      const style = document.createElement("style");
      style.id = "dynamic-toast-style";
      document.head.appendChild(style);
      return style;
    }
    __name(createStyleElement, "createStyleElement");
    watch(
      () => settingStore.get("Comfy.UseNewMenu"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    watch(
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast));
    };
  }
});
let _runWhenIdle;
let runWhenGlobalIdle;
(function() {
  const safeGlobal = globalThis;
  if (typeof safeGlobal.requestIdleCallback !== "function" || typeof safeGlobal.cancelIdleCallback !== "function") {
    _runWhenIdle = /* @__PURE__ */ __name((_targetWindow, runner, _timeout) => {
      setTimeout(() => {
        if (disposed) {
          return;
        }
        const end = Date.now() + 15;
        const deadline = {
          didTimeout: true,
          timeRemaining() {
            return Math.max(0, end - Date.now());
          }
        };
        runner(Object.freeze(deadline));
      });
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
        }
      };
    }, "_runWhenIdle");
  } else {
    _runWhenIdle = /* @__PURE__ */ __name((targetWindow, runner, timeout) => {
      const handle = targetWindow.requestIdleCallback(
        runner,
        typeof timeout === "number" ? { timeout } : void 0
      );
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          targetWindow.cancelIdleCallback(handle);
        }
      };
    }, "_runWhenIdle");
  }
  runWhenGlobalIdle = /* @__PURE__ */ __name((runner, timeout) => _runWhenIdle(globalThis, runner, timeout), "runWhenGlobalIdle");
})();
const _hoisted_1$M = { class: "comfy-menu-hamburger no-drag top-0 right-0" };
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "MenuHamburger",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const exitFocusMode = /* @__PURE__ */ __name(() => {
      workspaceState.focusMode = false;
    }, "exitFocusMode");
    watchEffect(() => {
      if (settingStore.get("Comfy.UseNewMenu") !== "Disabled") {
        return;
      }
      if (workspaceState.focusMode) {
        app.ui.menuContainer.style.display = "none";
      } else {
        app.ui.menuContainer.style.display = "block";
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$M, [
        withDirectives(createVNode(unref(Button), {
          icon: "pi pi-bars",
          severity: "secondary",
          text: "",
          size: "large",
          "aria-label": _ctx.$t("menu.showMenu"),
          "aria-live": "assertive",
          onClick: exitFocusMode,
          onContextmenu: unref(showNativeSystemMenu)
        }, null, 8, ["aria-label", "onContextmenu"]), [
          [_directive_tooltip, { value: _ctx.$t("menu.showMenu"), showDelay: 300 }]
        ]),
        _cache[0] || (_cache[0] = createElementVNode("div", { class: "window-actions-spacer" }, null, -1))
      ], 512)), [
        [vShow, unref(workspaceState).focusMode]
      ]);
    };
  }
});
const MenuHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-048d09e7"]]);
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "UnloadWindowConfirmDialog",
  setup(__props) {
    const settingStore = useSettingStore();
    const workflowStore = useWorkflowStore();
    const handleBeforeUnload = /* @__PURE__ */ __name((event) => {
      if (settingStore.get("Comfy.Window.UnloadConfirmation") && workflowStore.modifiedWorkflows.length > 0) {
        event.preventDefault();
        return true;
      }
      return void 0;
    }, "handleBeforeUnload");
    onMounted(() => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
const _hoisted_1$L = { class: "splitter-overlay-root pointer-events-none flex flex-col" };
const _hoisted_2$w = { class: "side-toolbar-container" };
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "LiteGraphCanvasSplitterOverlay",
  setup(__props) {
    const settingStore = useSettingStore();
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const unifiedWidth = computed(
      () => settingStore.get("Comfy.Sidebar.UnifiedWidth")
    );
    const sidebarPanelVisible = computed(
      () => useSidebarTabStore().activeSidebarTab !== null
    );
    const bottomPanelVisible = computed(
      () => useBottomPanelStore().bottomPanelVisible
    );
    const activeSidebarTabId = computed(
      () => useSidebarTabStore().activeSidebarTabId
    );
    const sidebarStateKey = computed(() => {
      if (unifiedWidth.value) {
        return "unified-sidebar";
      }
      return activeSidebarTabId.value ?? "default-sidebar";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$L, [
        renderSlot(_ctx.$slots, "workflow-tabs", {}, void 0, true),
        createElementVNode("div", {
          class: normalizeClass(["pointer-events-none flex flex-1 overflow-hidden", {
            "flex-row": sidebarLocation.value === "left",
            "flex-row-reverse": sidebarLocation.value === "right"
          }])
        }, [
          createElementVNode("div", _hoisted_2$w, [
            renderSlot(_ctx.$slots, "side-toolbar", {}, void 0, true)
          ]),
          createVNode(unref(Splitter), {
            key: "main-splitter-stable",
            class: "splitter-overlay flex-1 overflow-hidden",
            "pt:gutter": sidebarPanelVisible.value ? "" : "hidden",
            "state-key": sidebarStateKey.value || "main-splitter",
            "state-storage": "local"
          }, {
            default: withCtx(() => [
              sidebarLocation.value === "left" ? (openBlock(), createBlock(unref(SplitterPanel), {
                key: 0,
                class: "side-bar-panel pointer-events-auto",
                "min-size": 10,
                size: 20,
                style: normalizeStyle({
                  display: sidebarPanelVisible.value && sidebarLocation.value === "left" ? "flex" : "none"
                })
              }, {
                default: withCtx(() => [
                  sidebarPanelVisible.value && sidebarLocation.value === "left" ? renderSlot(_ctx.$slots, "side-bar-panel", { key: 0 }, void 0, true) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["style"])) : createCommentVNode("", true),
              createVNode(unref(SplitterPanel), {
                size: 80,
                class: "flex flex-col"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "topmenu", { sidebarPanelVisible: sidebarPanelVisible.value }, void 0, true),
                  createVNode(unref(Splitter), {
                    class: "splitter-overlay splitter-overlay-bottom mr-1 mb-1 ml-1 flex-1",
                    layout: "vertical",
                    "pt:gutter": "rounded-tl-lg rounded-tr-lg " + (bottomPanelVisible.value ? "" : "hidden"),
                    "state-key": "bottom-panel-splitter",
                    "state-storage": "local"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(SplitterPanel), { class: "graph-canvas-panel relative" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "graph-canvas-panel", {}, void 0, true)
                        ]),
                        _: 3
                      }),
                      withDirectives(createVNode(unref(SplitterPanel), { class: "bottom-panel pointer-events-auto rounded-lg" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "bottom-panel", {}, void 0, true)
                        ]),
                        _: 3
                      }, 512), [
                        [vShow, bottomPanelVisible.value]
                      ])
                    ]),
                    _: 3
                  }, 8, ["pt:gutter"])
                ]),
                _: 3
              }),
              sidebarLocation.value === "right" ? (openBlock(), createBlock(unref(SplitterPanel), {
                key: 1,
                class: "side-bar-panel pointer-events-auto",
                "min-size": 10,
                size: 20,
                style: normalizeStyle({
                  display: sidebarPanelVisible.value && sidebarLocation.value === "right" ? "flex" : "none"
                })
              }, {
                default: withCtx(() => [
                  sidebarPanelVisible.value && sidebarLocation.value === "right" ? renderSlot(_ctx.$slots, "side-bar-panel", { key: 0 }, void 0, true) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["style"])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["pt:gutter", "state-key"])
        ], 2)
      ]);
    };
  }
});
const LiteGraphCanvasSplitterOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-d3c440a8"]]);
const ComfyRunButton = defineAsyncComponent(() => __vitePreload(() => import("./ComfyQueueButton-z6rpVyjA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url));
const _hoisted_1$K = { class: "flex h-full items-center" };
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "ComfyActionbar",
  setup(__props) {
    const settingsStore = useSettingStore();
    const position = computed(() => settingsStore.get("Comfy.UseNewMenu"));
    const visible = computed(() => position.value !== "Disabled");
    const tabContainer = document.querySelector(".workflow-tabs-container");
    const panelRef = ref(null);
    const dragHandleRef = ref(null);
    const isDocked = useLocalStorage("Comfy.MenuPosition.Docked", true);
    const storedPosition = useLocalStorage("Comfy.MenuPosition.Floating", {
      x: 0,
      y: 0
    });
    const {
      x,
      y,
      style,
      isDragging
    } = useDraggable(panelRef, {
      initialValue: { x: 0, y: 0 },
      handle: dragHandleRef,
      containerElement: document.body,
      onMove: /* @__PURE__ */ __name((event) => {
        const minY = tabContainer?.getBoundingClientRect().bottom ?? 40;
        if (event.y < minY) {
          event.y = minY;
        }
      }, "onMove")
    });
    watchDebounced(
      [x, y],
      ([newX, newY]) => {
        storedPosition.value = { x: newX, y: newY };
      },
      { debounce: 300 }
    );
    const setInitialPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        if (menuWidth === 0 || menuHeight === 0) {
          return;
        }
        if (storedPosition.value.x !== 0 || storedPosition.value.y !== 0) {
          x.value = clamp(storedPosition.value.x, 0, screenWidth - menuWidth);
          y.value = clamp(storedPosition.value.y, 0, screenHeight - menuHeight);
          captureLastDragState();
          return;
        }
        if (x.value === 0 && y.value === 0) {
          x.value = clamp((screenWidth - menuWidth) / 2, 0, screenWidth - menuWidth);
          y.value = clamp(
            screenHeight - menuHeight - 10,
            0,
            screenHeight - menuHeight
          );
          captureLastDragState();
        }
      }
    }, "setInitialPosition");
    onMounted(setInitialPosition);
    watch(visible, async (newVisible) => {
      if (newVisible) {
        await nextTick(setInitialPosition);
      }
    });
    useEventListener(dragHandleRef, "mousedown", () => {
    });
    const lastDragState = ref({
      x: x.value,
      y: y.value,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    const captureLastDragState = /* @__PURE__ */ __name(() => {
      lastDragState.value = {
        x: x.value,
        y: y.value,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    }, "captureLastDragState");
    watch(
      isDragging,
      (newIsDragging) => {
        if (!newIsDragging) {
          captureLastDragState();
        }
      },
      { immediate: true }
    );
    const adjustMenuPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        const distanceLeft = lastDragState.value.x;
        const distanceRight = lastDragState.value.windowWidth - (lastDragState.value.x + menuWidth);
        const distanceTop = lastDragState.value.y;
        const distanceBottom = lastDragState.value.windowHeight - (lastDragState.value.y + menuHeight);
        const distances = [
          { edge: "left", distance: distanceLeft },
          { edge: "right", distance: distanceRight },
          { edge: "top", distance: distanceTop },
          { edge: "bottom", distance: distanceBottom }
        ];
        const closestEdge = distances.reduce(
          (min, curr) => curr.distance < min.distance ? curr : min
        );
        const verticalRatio = lastDragState.value.y / lastDragState.value.windowHeight;
        const horizontalRatio = lastDragState.value.x / lastDragState.value.windowWidth;
        if (closestEdge.edge === "left") {
          x.value = closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "right") {
          x.value = screenWidth - menuWidth - closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "top") {
          x.value = horizontalRatio * screenWidth;
          y.value = closestEdge.distance;
        } else {
          x.value = horizontalRatio * screenWidth;
          y.value = screenHeight - menuHeight - closestEdge.distance;
        }
        x.value = clamp(x.value, 0, screenWidth - menuWidth);
        y.value = clamp(y.value, 0, screenHeight - menuHeight);
      }
    }, "adjustMenuPosition");
    useEventListener(window, "resize", adjustMenuPosition);
    const isMouseOverDropZone = ref(false);
    const onMouseEnterDropZone = /* @__PURE__ */ __name(() => {
      if (isDragging.value) {
        isMouseOverDropZone.value = true;
      }
    }, "onMouseEnterDropZone");
    const onMouseLeaveDropZone = /* @__PURE__ */ __name(() => {
      if (isDragging.value) {
        isMouseOverDropZone.value = false;
      }
    }, "onMouseLeaveDropZone");
    watch(isDragging, (dragging) => {
      if (dragging) {
        if (isDocked.value) {
          isDocked.value = false;
        }
      } else {
        if (isMouseOverDropZone.value) {
          isDocked.value = true;
        }
        isMouseOverDropZone.value = false;
      }
    });
    const actionbarClass = computed(
      () => cn(
        "w-[265px] border-dashed border-blue-500 opacity-80",
        "m-1.5 flex items-center justify-center self-stretch",
        "rounded-md before:w-50 before:-ml-50 before:h-full",
        isMouseOverDropZone.value && "border-[3px] opacity-100 scale-105 shadow-[0_0_20px] shadow-blue-500"
      )
    );
    const panelClass = computed(
      () => cn(
        "actionbar pointer-events-auto z1000",
        isDragging.value && "select-none pointer-events-none",
        isDocked.value ? "p-0 static mr-2 border-none bg-transparent" : "fixed shadow-interface"
      )
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$K, [
        unref(isDragging) && !unref(isDocked) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(actionbarClass.value),
          onMouseenter: onMouseEnterDropZone,
          onMouseleave: onMouseLeaveDropZone
        }, toDisplayString(unref(t)("actionbar.dockToTop")), 35)) : createCommentVNode("", true),
        createVNode(unref(Panel), {
          class: normalizeClass(["pointer-events-auto z-1000", panelClass.value]),
          style: normalizeStyle(unref(style)),
          pt: {
            header: { class: "hidden" },
            content: { class: unref(isDocked) ? "p-0" : "p-1" }
          }
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              ref_key: "panelRef",
              ref: panelRef,
              class: "flex items-center select-none"
            }, [
              createElementVNode("span", {
                ref_key: "dragHandleRef",
                ref: dragHandleRef,
                class: normalizeClass(
                  unref(cn)(
                    "drag-handle cursor-grab w-3 h-max mr-2",
                    unref(isDragging) && "cursor-grabbing"
                  )
                )
              }, null, 2),
              createVNode(unref(ComfyRunButton))
            ], 512)
          ]),
          _: 1
        }, 8, ["style", "class", "pt"])
      ]);
    };
  }
});
const _hoisted_1$J = { class: "p-breadcrumb-item-label px-2" };
const _hoisted_2$v = {
  key: 1,
  class: "pi pi-angle-down text-[10px]"
};
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumbItem",
  props: {
    item: {},
    isActive: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const menu = ref();
    const dialogService = useDialogService();
    const workflowStore = useWorkflowStore();
    const workflowService = useWorkflowService();
    const isEditing = ref(false);
    const itemLabel = ref();
    const itemInputRef = ref();
    const wrapperRef = ref();
    const rename = /* @__PURE__ */ __name(async (newName, initialName) => {
      if (newName && newName !== initialName) {
        props.item.updateTitle?.(newName);
        if (workflowStore.activeSubgraph) {
          workflowStore.activeSubgraph.name = newName;
        } else if (workflowStore.activeWorkflow) {
          try {
            await workflowService.renameWorkflow(
              workflowStore.activeWorkflow,
              ComfyWorkflow.basePath + appendJsonExt(newName)
            );
          } catch (error) {
            console.error(error);
            dialogService.showErrorDialog(error);
            return;
          }
        }
        const navigationStore = useSubgraphNavigationStore();
        navigationStore.restoreState(navigationStore.exportState());
      }
    }, "rename");
    const isRoot = props.item.key === "root";
    const menuItems = computed(() => {
      return [
        {
          label: t2("g.rename"),
          icon: "pi pi-pencil",
          command: startRename
        },
        {
          label: t2("breadcrumbsMenu.duplicate"),
          icon: "pi pi-copy",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: isRoot && !props.item.isBlueprint
        },
        {
          separator: true,
          visible: isRoot
        },
        {
          label: t2("menuLabels.Save"),
          icon: "pi pi-save",
          command: /* @__PURE__ */ __name(async () => {
            await useCommandStore().execute("Comfy.SaveWorkflow");
          }, "command"),
          visible: isRoot
        },
        {
          label: t2("menuLabels.Save As"),
          icon: "pi pi-save",
          command: /* @__PURE__ */ __name(async () => {
            await useCommandStore().execute("Comfy.SaveWorkflowAs");
          }, "command"),
          visible: isRoot
        },
        {
          separator: true
        },
        {
          label: t2("breadcrumbsMenu.clearWorkflow"),
          icon: "pi pi-trash",
          command: /* @__PURE__ */ __name(async () => {
            await useCommandStore().execute("Comfy.ClearWorkflow");
          }, "command")
        },
        {
          separator: true,
          visible: props.item.key === "root" && props.item.isBlueprint
        },
        {
          label: t2("subgraphStore.publish"),
          icon: "pi pi-copy",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.saveWorkflowAs(workflowStore.activeWorkflow);
          }, "command"),
          visible: props.item.key === "root" && props.item.isBlueprint
        },
        {
          separator: true,
          visible: isRoot
        },
        {
          label: props.item.isBlueprint ? t2("breadcrumbsMenu.deleteBlueprint") : t2("breadcrumbsMenu.deleteWorkflow"),
          icon: "pi pi-times",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.deleteWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: isRoot
        }
      ];
    });
    const handleClick = /* @__PURE__ */ __name((event) => {
      if (isEditing.value) {
        return;
      }
      if (event.detail === 1) {
        if (props.isActive) {
          menu.value?.toggle(event);
        } else {
          props.item.command?.({ item: props.item, originalEvent: event });
        }
      } else if (props.isActive && event.detail === 2) {
        menu.value?.hide();
        event.stopPropagation();
        event.preventDefault();
        startRename();
      }
    }, "handleClick");
    const startRename = /* @__PURE__ */ __name(() => {
      isEditing.value = true;
      itemLabel.value = props.item.label;
      void nextTick(() => {
        if (itemInputRef.value?.$el) {
          itemInputRef.value.$el.focus();
          itemInputRef.value.$el.select();
          if (wrapperRef.value) {
            itemInputRef.value.$el.style.width = `${Math.max(200, wrapperRef.value.offsetWidth)}px`;
          }
        }
      });
    }, "startRename");
    const inputBlur = /* @__PURE__ */ __name(async (doRename) => {
      if (doRename) {
        await rename(itemLabel.value, props.item.label);
      }
      isEditing.value = false;
    }, "inputBlur");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives((openBlock(), createElementBlock("a", {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          draggable: "false",
          href: "#",
          class: normalizeClass(["p-breadcrumb-item-link h-12 cursor-pointer px-2", {
            "flex items-center gap-1": _ctx.isActive,
            "p-breadcrumb-item-link-menu-visible": menu.value?.overlayVisible,
            "p-breadcrumb-item-link-icon-visible": _ctx.isActive,
            "active-breadcrumb-item": _ctx.isActive
          }]),
          onClick: handleClick
        }, [
          createElementVNode("span", _hoisted_1$J, toDisplayString(_ctx.item.label), 1),
          _ctx.item.isBlueprint ? (openBlock(), createBlock(unref(Tag), {
            key: 0,
            value: "Blueprint",
            severity: "primary"
          })) : createCommentVNode("", true),
          _ctx.isActive ? (openBlock(), createElementBlock("i", _hoisted_2$v)) : createCommentVNode("", true)
        ], 2)), [
          [
            _directive_tooltip,
            {
              value: _ctx.item.label,
              showDelay: 512
            },
            void 0,
            { bottom: true }
          ]
        ]),
        _ctx.isActive ? (openBlock(), createBlock(unref(Menu), {
          key: 0,
          ref_key: "menu",
          ref: menu,
          model: menuItems.value,
          popup: true,
          pt: {
            root: {
              style: "background-color: var(--comfy-menu-bg)"
            },
            itemLink: {
              class: "py-2"
            }
          }
        }, null, 8, ["model"])) : createCommentVNode("", true),
        isEditing.value ? (openBlock(), createBlock(unref(InputText), {
          key: 1,
          ref_key: "itemInputRef",
          ref: itemInputRef,
          modelValue: itemLabel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => itemLabel.value = $event),
          class: "fixed z-10000 px-2 py-2 text-[.8rem]",
          onBlur: _cache[1] || (_cache[1] = ($event) => inputBlur(false)),
          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["stop"])),
          onKeydown: [
            _cache[3] || (_cache[3] = withKeys(($event) => inputBlur(true), ["enter"])),
            _cache[4] || (_cache[4] = withKeys(($event) => inputBlur(false), ["esc"]))
          ]
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SubgraphBreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-6028f498"]]);
const useOverflowObserver = /* @__PURE__ */ __name((element, options) => {
  options = {
    debounceTime: 25,
    useMutationObserver: true,
    useResizeObserver: true,
    ...options
  };
  const isOverflowing = ref(false);
  const disposeFns = [];
  const disposed = ref(false);
  const checkOverflowFn = /* @__PURE__ */ __name(() => {
    isOverflowing.value = element.scrollWidth > element.clientWidth;
    options.onCheck?.(isOverflowing.value);
  }, "checkOverflowFn");
  const checkOverflow = options.debounceTime ? debounce(checkOverflowFn, options.debounceTime) : checkOverflowFn;
  if (options.useMutationObserver) {
    disposeFns.push(
      useMutationObserver(element, checkOverflow, {
        subtree: true,
        childList: true
      }).stop
    );
  }
  if (options.useResizeObserver) {
    disposeFns.push(useResizeObserver(element, checkOverflow).stop);
  }
  return {
    isOverflowing: readonly(isOverflowing),
    disposed: readonly(disposed),
    checkOverflow,
    dispose: /* @__PURE__ */ __name(() => {
      disposed.value = true;
      disposeFns.forEach((fn) => fn());
    }, "dispose")
  };
}, "useOverflowObserver");
const MIN_WIDTH = 28;
const ITEM_GAP = 8;
const ITEM_PADDING = 8;
const ICON_WIDTH = 20;
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumb",
  setup(__props) {
    const workflowStore = useWorkflowStore();
    const navigationStore = useSubgraphNavigationStore();
    const breadcrumbRef = ref();
    const workflowName = computed(() => workflowStore.activeWorkflow?.filename);
    const isBlueprint = computed(
      () => useSubgraphStore().isSubgraphBlueprint(workflowStore.activeWorkflow)
    );
    const collapseTabs = ref(false);
    const overflowingTabs = ref(false);
    const breadcrumbElement = computed(() => {
      if (!breadcrumbRef.value) return null;
      const el = breadcrumbRef.value.$el;
      const list = el?.querySelector(".p-breadcrumb-list");
      return list;
    });
    const items = computed(() => {
      const items2 = navigationStore.navigationStack.map((subgraph) => ({
        label: subgraph.name,
        command: /* @__PURE__ */ __name(() => {
          const canvas = useCanvasStore().getCanvas();
          if (!canvas.graph) throw new TypeError("Canvas has no graph");
          canvas.setGraph(subgraph);
        }, "command"),
        updateTitle: /* @__PURE__ */ __name((title) => {
          const rootGraph = useCanvasStore().getCanvas().graph?.rootGraph;
          if (!rootGraph) return;
          forEachSubgraphNode(rootGraph, subgraph.id, (node) => {
            node.title = title;
          });
        }, "updateTitle")
      }));
      return [home.value, ...items2];
    });
    const home = computed(() => ({
      label: workflowName.value,
      icon: "pi pi-home",
      key: "root",
      isBlueprint: isBlueprint.value,
      command: /* @__PURE__ */ __name(() => {
        const canvas = useCanvasStore().getCanvas();
        if (!canvas.graph) throw new TypeError("Canvas has no graph");
        canvas.setGraph(canvas.graph.rootGraph);
      }, "command")
    }));
    let overflowObserver;
    watch(breadcrumbElement, (el) => {
      overflowObserver?.dispose();
      overflowObserver = void 0;
      if (!el) return;
      overflowObserver = useOverflowObserver(el, {
        onCheck: /* @__PURE__ */ __name((isOverflowing) => {
          overflowingTabs.value = isOverflowing;
          if (collapseTabs.value) {
            if (!isOverflowing) {
              const items2 = [
                ...el.querySelectorAll(".p-breadcrumb-item")
              ];
              if (items2.length < 3) return;
              const itemsWithIcon = items2.filter(
                (item) => item.querySelector(".p-breadcrumb-item-link-icon-visible")
              ).length;
              const separators = el.querySelectorAll(
                ".p-breadcrumb-separator"
              );
              const separator = separators[separators.length - 1];
              const separatorWidth = separator.offsetWidth;
              const itemsWidth = (MIN_WIDTH + ITEM_PADDING + ITEM_PADDING) * items2.length + itemsWithIcon * ICON_WIDTH;
              const separatorsWidth = (items2.length - 1) * separatorWidth;
              const gapsWidth = (items2.length - 1) * (ITEM_GAP * 2);
              const totalWidth = itemsWidth + separatorsWidth + gapsWidth;
              const containerWidth = el.clientWidth;
              if (totalWidth <= containerWidth) {
                collapseTabs.value = false;
              }
            }
          } else if (isOverflowing) {
            collapseTabs.value = true;
          }
        }, "onCheck")
      });
    });
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["subgraph-breadcrumb w-auto drop-shadow-[var(--interface-panel-drop-shadow)]", {
          "subgraph-breadcrumb-collapse": collapseTabs.value,
          "subgraph-breadcrumb-overflow": overflowingTabs.value
        }]),
        style: normalizeStyle({
          "--p-breadcrumb-gap": `0px`,
          "--p-breadcrumb-item-margin": `${ITEM_GAP / 2}px`,
          "--p-breadcrumb-item-min-width": `${MIN_WIDTH}px`,
          "--p-breadcrumb-item-padding": `${ITEM_PADDING}px`,
          "--p-breadcrumb-icon-width": `${ICON_WIDTH}px`
        })
      }, [
        createVNode(unref(Breadcrumb), {
          ref_key: "breadcrumbRef",
          ref: breadcrumbRef,
          class: "w-fit rounded-lg p-0",
          model: items.value,
          pt: { item: { class: "pointer-events-auto" } },
          "aria-label": _ctx.$t("g.graphNavigation")
        }, {
          item: withCtx(({ item }) => [
            createVNode(SubgraphBreadcrumbItem, {
              item,
              "is-active": item === items.value.at(-1)
            }, null, 8, ["item", "is-active"])
          ]),
          separator: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode("span", { style: { "transform": "scale(1.5)" } }, " / ", -1)
          ])),
          _: 1
        }, 8, ["model", "aria-label"])
      ], 6);
    };
  }
});
const SubgraphBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-0e6867de"]]);
const _hoisted_1$I = { class: "current-user-popover w-72" };
const _hoisted_2$u = { class: "p-3" };
const _hoisted_3$o = { class: "flex flex-col items-center" };
const _hoisted_4$g = { class: "my-0 mb-1 truncate text-lg font-semibold" };
const _hoisted_5$d = {
  key: 0,
  class: "my-0 truncate text-sm text-muted"
};
const _hoisted_6$b = {
  key: 0,
  class: "flex items-center justify-between"
};
const _hoisted_7$8 = { class: "flex flex-col gap-1" };
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserPopover",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const planSettingsLabel = "settingsCategories.Credits";
    const { userDisplayName, userEmail, userPhotoUrl, handleSignOut } = useCurrentUser();
    const authActions = useFirebaseAuthActions();
    const dialogService = useDialogService();
    const { isActiveSubscription: isActiveSubscription2, fetchStatus } = useSubscription();
    const handleOpenUserSettings = /* @__PURE__ */ __name(() => {
      dialogService.showSettingsDialog("user");
      emit("close");
    }, "handleOpenUserSettings");
    const handleOpenPlanAndCreditsSettings = /* @__PURE__ */ __name(() => {
      {
        dialogService.showSettingsDialog("credits");
      }
      emit("close");
    }, "handleOpenPlanAndCreditsSettings");
    const handleTopUp = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
      emit("close");
    }, "handleTopUp");
    const handleOpenPartnerNodesInfo = /* @__PURE__ */ __name(() => {
      window.open(
        "https://docs.comfy.org/tutorials/api-nodes/overview#api-nodes",
        "_blank"
      );
      emit("close");
    }, "handleOpenPartnerNodesInfo");
    const handleLogout = /* @__PURE__ */ __name(async () => {
      await handleSignOut();
      emit("close");
    }, "handleLogout");
    const handleSubscribed = /* @__PURE__ */ __name(async () => {
      await fetchStatus();
    }, "handleSubscribed");
    onMounted(() => {
      void authActions.fetchBalance();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$I, [
        createElementVNode("div", _hoisted_2$u, [
          createElementVNode("div", _hoisted_3$o, [
            createVNode(_sfc_main$1F, {
              class: "mb-3",
              "photo-url": unref(userPhotoUrl),
              "pt:icon:class": {
                "text-2xl!": !unref(userPhotoUrl)
              },
              size: "large"
            }, null, 8, ["photo-url", "pt:icon:class"]),
            createElementVNode("h3", _hoisted_4$g, toDisplayString(unref(userDisplayName) || _ctx.$t("g.user")), 1),
            unref(userEmail) ? (openBlock(), createElementBlock("p", _hoisted_5$d, toDisplayString(unref(userEmail)), 1)) : createCommentVNode("", true)
          ])
        ]),
        unref(isActiveSubscription2) ? (openBlock(), createElementBlock("div", _hoisted_6$b, [
          createElementVNode("div", _hoisted_7$8, [
            createVNode(_sfc_main$1G, { "text-class": "text-2xl" }),
            createVNode(unref(Button), {
              label: _ctx.$t("subscription.partnerNodesCredits"),
              severity: "secondary",
              text: "",
              size: "small",
              class: "pl-6 p-0 h-auto justify-start",
              pt: {
                root: {
                  class: "hover:bg-transparent active:bg-transparent"
                }
              },
              onClick: handleOpenPartnerNodesInfo
            }, null, 8, ["label"])
          ]),
          createVNode(unref(Button), {
            label: _ctx.$t("credits.topUp.topUp"),
            severity: "secondary",
            size: "small",
            onClick: handleTopUp
          }, null, 8, ["label"])
        ])) : (openBlock(), createBlock(_sfc_main$1f, {
          key: 1,
          label: _ctx.$t("subscription.subscribeToComfyCloud"),
          size: "small",
          variant: "gradient",
          onSubscribed: handleSubscribed
        }, null, 8, ["label"])),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("userSettings.title"),
          icon: "pi pi-cog",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenUserSettings
        }, null, 8, ["label"]),
        unref(isActiveSubscription2) ? (openBlock(), createBlock(unref(Button), {
          key: 2,
          class: "justify-start",
          label: _ctx.$t(unref(planSettingsLabel)),
          icon: "pi pi-receipt",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenPlanAndCreditsSettings
        }, null, 8, ["label"])) : createCommentVNode("", true),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("auth.signOut.signOut"),
          icon: "pi pi-sign-out",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleLogout
        }, null, 8, ["label"])
      ]);
    };
  }
});
const _hoisted_1$H = { class: "flex items-center gap-1 rounded-full hover:bg-interface-button-hover-surface" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserButton",
  setup(__props) {
    const { isLoggedIn, userPhotoUrl } = useCurrentUser();
    const popover = ref(null);
    const photoURL = computed(
      () => userPhotoUrl.value ?? void 0
    );
    const closePopover = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "closePopover");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isLoggedIn) ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          class: "user-profile-button p-1 hover:bg-transparent",
          severity: "secondary",
          text: "",
          "aria-label": _ctx.$t("g.currentUser"),
          onClick: _cache[0] || (_cache[0] = ($event) => popover.value?.toggle($event))
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$H, [
              createVNode(_sfc_main$1F, { "photo-url": photoURL.value }, null, 8, ["photo-url"]),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down px-1",
                style: { fontSize: "0.6rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        }, 8, ["aria-label"])) : createCommentVNode("", true),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "show-arrow": false
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$17, { onClose: closePopover })
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
const _hoisted_1$G = { class: "mb-1" };
const _hoisted_2$t = {
  href: "https://docs.comfy.org/tutorials/api-nodes/overview#api-nodes",
  target: "_blank",
  class: "text-neutral-500 hover:text-primary"
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "LoginButton",
  setup(__props) {
    const { isLoggedIn, handleSignIn } = useCurrentUser();
    const popoverRef = ref(null);
    let hideTimeout = null;
    let showTimeout = null;
    const showPopover = /* @__PURE__ */ __name((event) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      showTimeout = setTimeout(() => {
        if (popoverRef.value) {
          popoverRef.value.show(event, event.target);
        }
      }, 200);
    }, "showPopover");
    const cancelHidePopover = /* @__PURE__ */ __name(() => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    }, "cancelHidePopover");
    const hidePopover = /* @__PURE__ */ __name(() => {
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      hideTimeout = setTimeout(() => {
        if (popoverRef.value) {
          popoverRef.value.hide();
        }
      }, 150);
    }, "hidePopover");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !unref(isLoggedIn) ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          outlined: "",
          rounded: "",
          severity: "secondary",
          class: "size-8 border-black/50 bg-transparent text-black hover:bg-interface-panel-hover-surface dark-theme:border-white/50 dark-theme:text-white",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(handleSignIn)()),
          onMouseenter: showPopover,
          onMouseleave: hidePopover
        }, {
          icon: withCtx(() => _cache[1] || (_cache[1] = [
            createElementVNode("i", { class: "icon-[lucide--user] size-4" }, null, -1)
          ])),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(Popover), {
          ref_key: "popoverRef",
          ref: popoverRef,
          class: "p-2",
          onMouseout: hidePopover,
          onMouseover: cancelHidePopover
        }, {
          default: withCtx(() => [
            createElementVNode("div", null, [
              createElementVNode("div", _hoisted_1$G, toDisplayString(unref(t)("auth.loginButton.tooltipHelp")), 1),
              createElementVNode("a", _hoisted_2$t, toDisplayString(unref(t)("auth.loginButton.tooltipLearnMore")), 1)
            ])
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});
const _hoisted_1$F = {
  key: 0,
  class: "ml-1 flex gap-x-0.5 pt-1"
};
const _hoisted_2$s = { class: "min-w-0 flex-1" };
const _hoisted_3$n = { class: "actionbar-container pointer-events-auto flex h-12 items-center rounded-lg border border-[var(--interface-stroke)] px-2 shadow-interface" };
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "TopMenuSection",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const { isLoggedIn } = useCurrentUser();
    const isDesktop = isElectron();
    const legacyCommandsContainerRef = ref();
    onMounted(() => {
      if (legacyCommandsContainerRef.value) {
        app.menu.element.style.width = "fit-content";
        legacyCommandsContainerRef.value.appendChild(app.menu.element);
      }
    });
    return (_ctx, _cache) => {
      return !unref(workspaceStore).focusMode ? (openBlock(), createElementBlock("div", _hoisted_1$F, [
        createElementVNode("div", _hoisted_2$s, [
          createVNode(SubgraphBreadcrumb)
        ]),
        createElementVNode("div", _hoisted_3$n, [
          createElementVNode("div", {
            ref_key: "legacyCommandsContainerRef",
            ref: legacyCommandsContainerRef,
            class: "[&:not(:has(*>*:not(:empty)))]:hidden"
          }, null, 512),
          createVNode(_sfc_main$1a),
          unref(isLoggedIn) ? (openBlock(), createBlock(_sfc_main$16, {
            key: 0,
            class: "shrink-0"
          })) : unref(isDesktop) ? (openBlock(), createBlock(_sfc_main$15, { key: 1 })) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const TopMenuSection = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-8bcd0bf4"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "ExtensionSlot",
  props: {
    extension: {}
  },
  setup(__props) {
    const props = __props;
    const mountCustomExtension = /* @__PURE__ */ __name((extension, el) => {
      extension.render(el);
    }, "mountCustomExtension");
    onBeforeUnmount(() => {
      if (props.extension.type === "custom" && props.extension.destroy) {
        props.extension.destroy();
      }
    });
    return (_ctx, _cache) => {
      return _ctx.extension.type === "vue" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.extension.component), { key: 0 })) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: /* @__PURE__ */ __name((el) => {
          if (el)
            mountCustomExtension(
              props.extension,
              el
            );
        }, "ref")
      }, null, 512));
    };
  }
});
const _hoisted_1$E = { class: "flex h-full flex-col" };
const _hoisted_2$r = { class: "flex w-full justify-between" };
const _hoisted_3$m = { class: "tabs-container" };
const _hoisted_4$f = { class: "font-normal" };
const _hoisted_5$c = { class: "flex items-center gap-2" };
const _hoisted_6$a = { class: "h-0 grow" };
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "BottomPanel",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    const dialogService = useDialogService();
    const { t: t2 } = useI18n();
    const isShortcutsTabActive = computed(() => {
      const activeTabId = bottomPanelStore.activeBottomPanelTabId;
      return activeTabId === "shortcuts-essentials" || activeTabId === "shortcuts-view-controls";
    });
    const shouldCapitalizeTab = /* @__PURE__ */ __name((tabId) => {
      return tabId !== "shortcuts-essentials" && tabId !== "shortcuts-view-controls";
    }, "shouldCapitalizeTab");
    const getTabDisplayTitle = /* @__PURE__ */ __name((tab) => {
      const title = tab.titleKey ? t2(tab.titleKey) : tab.title || "";
      return shouldCapitalizeTab(tab.id) ? title.toUpperCase() : title;
    }, "getTabDisplayTitle");
    const openKeybindingSettings = /* @__PURE__ */ __name(async () => {
      dialogService.showSettingsDialog("keybinding");
    }, "openKeybindingSettings");
    const closeBottomPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.activePanel = null;
    }, "closeBottomPanel");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$E, [
        (openBlock(), createBlock(unref(Tabs), {
          key: _ctx.$i18n.locale,
          value: unref(bottomPanelStore).activeBottomPanelTabId,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(bottomPanelStore).activeBottomPanelTabId = $event),
          style: { "--p-tabs-tablist-background": "var(--comfy-menu-bg)" }
        }, {
          default: withCtx(() => [
            createVNode(unref(TabList), {
              "pt:tab-list": "border-none h-full flex items-center py-2 border-b-1 border-solid",
              class: "bg-transparent"
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2$r, [
                  createElementVNode("div", _hoisted_3$m, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(bottomPanelStore).bottomPanelTabs, (tab) => {
                      return openBlock(), createBlock(unref(Tab), {
                        key: tab.id,
                        value: tab.id,
                        class: normalizeClass(["m-1 mx-2 border-none", {
                          "tab-list-single-item": unref(bottomPanelStore).bottomPanelTabs.length === 1
                        }]),
                        "pt:root": /* @__PURE__ */ __name((x) => ({
                          class: {
                            "p-3 rounded-lg": true,
                            "pointer-events-none": unref(bottomPanelStore).bottomPanelTabs.length === 1
                          },
                          style: {
                            color: "var(--fg-color)",
                            backgroundColor: !x.context.active || unref(bottomPanelStore).bottomPanelTabs.length === 1 ? "" : "var(--bg-color)"
                          }
                        }), "pt:root")
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", _hoisted_4$f, toDisplayString(getTabDisplayTitle(tab)), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class", "pt:root"]);
                    }), 128))
                  ]),
                  createElementVNode("div", _hoisted_5$c, [
                    isShortcutsTabActive.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      label: _ctx.$t("shortcuts.manageShortcuts"),
                      icon: "pi pi-cog",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: openKeybindingSettings
                    }, null, 8, ["label"])) : createCommentVNode("", true),
                    createVNode(unref(Button), {
                      class: "justify-self-end",
                      icon: "pi pi-times",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: closeBottomPanel
                    })
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"])),
        createElementVNode("div", _hoisted_6$a, [
          unref(bottomPanelStore).bottomPanelVisible && unref(bottomPanelStore).activeBottomPanelTab ? (openBlock(), createBlock(_sfc_main$13, {
            key: 0,
            extension: unref(bottomPanelStore).activeBottomPanelTab
          }, null, 8, ["extension"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const BottomPanel = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-d5048ae1"]]);
function useAbsolutePosition(options = {}) {
  const { useTransform = false } = options;
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { canvasPosToClientPos, update: updateCanvasPosition } = useCanvasPositionConversion(lgCanvas.canvas, lgCanvas);
  const settingStore = useSettingStore();
  watch(
    [
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => settingStore.get("Comfy.Sidebar.Size"),
      () => settingStore.get("Comfy.UseNewMenu")
    ],
    () => updateCanvasPosition(),
    { flush: "post" }
  );
  const style = ref({});
  const computeStyle = /* @__PURE__ */ __name((position) => {
    const { pos, size, scale = lgCanvas.ds.scale } = position;
    const [left, top] = canvasPosToClientPos(pos);
    const [width, height] = size;
    return useTransform ? {
      position: "fixed",
      transformOrigin: "0 0",
      transform: `scale(${scale})`,
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    } : {
      position: "fixed",
      left: `${left}px`,
      top: `${top}px`,
      width: `${width * scale}px`,
      height: `${height * scale}px`
    };
  }, "computeStyle");
  const updatePosition = /* @__PURE__ */ __name((config2) => {
    style.value = computeStyle(config2);
  }, "updatePosition");
  return {
    style,
    updatePosition
  };
}
__name(useAbsolutePosition, "useAbsolutePosition");
function intersect(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  if (x1 >= x2 || y1 >= y2) {
    return null;
  }
  return [x1, y1, x2 - x1, y2 - y1];
}
__name(intersect, "intersect");
const useDomClipping = /* @__PURE__ */ __name((options = {}) => {
  const style = ref({});
  const { margin = 4 } = options;
  const calculateClipPath = /* @__PURE__ */ __name((elementRect, canvasRect, isSelected, selectedArea) => {
    if (!isSelected && selectedArea) {
      const { scale, offset } = selectedArea;
      const intersection = intersect(
        {
          x: elementRect.left - canvasRect.left,
          y: elementRect.top - canvasRect.top,
          width: elementRect.width,
          height: elementRect.height
        },
        {
          x: (selectedArea.x + offset[0] - margin) * scale,
          y: (selectedArea.y + offset[1] - margin) * scale,
          width: (selectedArea.width + 2 * margin) * scale,
          height: (selectedArea.height + 2 * margin) * scale
        }
      );
      if (!intersection) {
        return "";
      }
      const clipX = (intersection[0] - elementRect.left + canvasRect.left) / scale + "px";
      const clipY = (intersection[1] - elementRect.top + canvasRect.top) / scale + "px";
      const clipWidth = intersection[2] / scale + "px";
      const clipHeight = intersection[3] / scale + "px";
      return `polygon(0% 0%, 0% 100%, ${clipX} 100%, ${clipX} ${clipY}, calc(${clipX} + ${clipWidth}) ${clipY}, calc(${clipX} + ${clipWidth}) calc(${clipY} + ${clipHeight}), ${clipX} calc(${clipY} + ${clipHeight}), ${clipX} 100%, 100% 100%, 100% 0%)`;
    }
    return "";
  }, "calculateClipPath");
  const updateClipPath = /* @__PURE__ */ __name((element, canvasElement, isSelected, selectedArea) => {
    const elementRect = element.getBoundingClientRect();
    const canvasRect = canvasElement.getBoundingClientRect();
    const clipPath = calculateClipPath(
      elementRect,
      canvasRect,
      isSelected,
      selectedArea
    );
    style.value = {
      clipPath: clipPath || "none",
      willChange: "clip-path"
    };
  }, "updateClipPath");
  return {
    style,
    updateClipPath
  };
}, "useDomClipping");
const _hoisted_1$D = ["title"];
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "DomWidget",
  props: {
    widgetState: {}
  },
  emits: ["update:widgetValue"],
  setup(__props, { emit: __emit }) {
    const widget = __props.widgetState.widget;
    const emit = __emit;
    const widgetElement = ref();
    const style = ref({});
    const { style: positionStyle, updatePosition } = useAbsolutePosition({
      useTransform: true
    });
    const { style: clippingStyle, updateClipPath } = useDomClipping();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const enableDomClipping = computed(
      () => settingStore.get("Comfy.DOMClippingEnabled")
    );
    const updateDomClipping = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas || !widgetElement.value) return;
      const selectedNode = Object.values(lgCanvas.selected_nodes ?? {})[0];
      if (!selectedNode) {
        updateClipPath(widgetElement.value, lgCanvas.canvas, false, void 0);
        return;
      }
      const isSelected = selectedNode === __props.widgetState.widget.node;
      const renderArea = selectedNode?.renderArea;
      const offset = lgCanvas.ds.offset;
      const scale = lgCanvas.ds.scale;
      const selectedAreaConfig = renderArea ? {
        x: renderArea[0],
        y: renderArea[1],
        width: renderArea[2],
        height: renderArea[3],
        scale,
        offset: [offset[0], offset[1]]
      } : void 0;
      updateClipPath(
        widgetElement.value,
        lgCanvas.canvas,
        isSelected,
        selectedAreaConfig
      );
    }, "updateDomClipping");
    const { left, top } = useElementBounding(canvasStore.getCanvas().canvas);
    watch(
      [() => __props.widgetState, left, top],
      ([widgetState, _, __]) => {
        updatePosition(widgetState);
        if (enableDomClipping.value) {
          updateDomClipping();
        }
        style.value = {
          ...positionStyle.value,
          ...enableDomClipping.value ? clippingStyle.value : {},
          zIndex: widgetState.zIndex,
          pointerEvents: widgetState.readonly || widget.computedDisabled ? "none" : "auto",
          opacity: widget.computedDisabled ? 0.5 : 1
        };
      },
      { deep: true }
    );
    watch(
      () => __props.widgetState.visible,
      (newVisible, oldVisible) => {
        if (!newVisible && oldVisible) {
          widget.options.onHide?.(widget);
        }
      }
    );
    useEventListener(document, "mousedown", (event) => {
      if (!isDOMWidget(widget) || !__props.widgetState.visible || !widget.element.blur) {
        return;
      }
      if (!widget.element.contains(event.target)) {
        widget.element.blur();
      }
    });
    onMounted(() => {
      if (!isDOMWidget(widget)) {
        return;
      }
      useEventListener(
        widget.element,
        widget.options.selectOn ?? ["focus", "click"],
        () => {
          const lgCanvas = canvasStore.canvas;
          lgCanvas?.selectNode(__props.widgetState.widget.node);
          lgCanvas?.bringToFront(__props.widgetState.widget.node);
        }
      );
    });
    const inputSpec = widget.node.constructor.nodeData;
    const tooltip = inputSpec?.inputs?.[widget.name]?.tooltip;
    const mountElementIfVisible = /* @__PURE__ */ __name(() => {
      if (!(__props.widgetState.visible && isDOMWidget(widget) && widgetElement.value)) {
        return;
      }
      if (widgetElement.value.contains(widget.element)) {
        return;
      }
      widgetElement.value.appendChild(widget.element);
    }, "mountElementIfVisible");
    onMounted(() => {
      nextTick(() => {
        mountElementIfVisible();
      }).catch((error) => {
        console.error("Error mounting DOM widget element:", error);
      });
    });
    watch(
      () => __props.widgetState.visible,
      () => {
        mountElementIfVisible();
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "widgetElement",
        ref: widgetElement,
        class: "dom-widget",
        title: unref(tooltip),
        style: normalizeStyle(style.value)
      }, [
        unref(isComponentWidget)(unref(widget)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(widget).component), mergeProps({
          key: 0,
          "model-value": unref(widget).value,
          widget: unref(widget)
        }, unref(widget).props, {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:widgetValue", $event))
        }), null, 16, ["model-value", "widget"])) : createCommentVNode("", true)
      ], 12, _hoisted_1$D)), [
        [vShow, _ctx.widgetState.visible]
      ]);
    };
  }
});
const DomWidget = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-781496d2"]]);
const _hoisted_1$C = { class: "isolate" };
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "DomWidgets",
  setup(__props) {
    const domWidgetStore = useDomWidgetStore();
    const widgetStates = computed(() => [...domWidgetStore.widgetStates.values()]);
    const updateWidgets = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas) return;
      const lowQuality = lgCanvas.low_quality;
      const currentGraph = lgCanvas.graph;
      for (const widgetState of widgetStates.value) {
        const widget = widgetState.widget;
        if (!widget.isVisible() || !widgetState.active) {
          widgetState.visible = false;
          continue;
        }
        const node = widget.node;
        const isInCorrectGraph = currentGraph?.nodes.includes(node);
        widgetState.visible = !!isInCorrectGraph && lgCanvas.isNodeVisible(node) && !(widget.options.hideOnZoom && lowQuality);
        if (widgetState.visible && node) {
          const margin = widget.margin;
          widgetState.pos = [node.pos[0] + margin, node.pos[1] + margin + widget.y];
          widgetState.size = [
            (widget.width ?? node.width) - margin * 2,
            (widget.computedHeight ?? 50) - margin * 2
          ];
          widgetState.zIndex = lgCanvas.graph?.nodes.indexOf(node) ?? -1;
          widgetState.readonly = lgCanvas.read_only;
        }
      }
    }, "updateWidgets");
    const canvasStore = useCanvasStore();
    whenever(
      () => canvasStore.canvas,
      (canvas) => canvas.onDrawForeground = useChainCallback(
        canvas.onDrawForeground,
        updateWidgets
      ),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$C, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(widgetStates.value, (widgetState) => {
          return openBlock(), createBlock(DomWidget, {
            key: widgetState.widget.id,
            "widget-state": widgetState,
            "onUpdate:widgetValue": /* @__PURE__ */ __name(($event) => widgetState.widget.value = $event, "onUpdate:widgetValue")
          }, null, 8, ["widget-state", "onUpdate:widgetValue"]);
        }), 128))
      ]);
    };
  }
});
function useZoomControls() {
  const isModalVisible = ref(false);
  const showModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = true;
  }, "showModal");
  const hideModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = false;
  }, "hideModal");
  const toggleModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = !isModalVisible.value;
  }, "toggleModal");
  const hasActivePopup = computed(() => isModalVisible.value);
  return {
    isModalVisible,
    showModal,
    hideModal,
    toggleModal,
    hasActivePopup
  };
}
__name(useZoomControls, "useZoomControls");
function useMinimapGraph(graph, onGraphChanged) {
  const nodeStatesCache = /* @__PURE__ */ new Map();
  const linksCache = ref("");
  const lastNodeCount = ref(0);
  const updateFlags = ref({
    bounds: false,
    nodes: false,
    connections: false,
    viewport: false
  });
  const layoutStoreVersion = layoutStore.getVersion();
  const originalCallbacksMap = /* @__PURE__ */ new Map();
  const handleGraphChangedThrottled = useThrottleFn(() => {
    onGraphChanged();
  }, 500);
  const setupEventListeners = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!g) return;
    if (originalCallbacksMap.has(g.id)) {
      return;
    }
    const originalCallbacks = {
      onNodeAdded: g.onNodeAdded,
      onNodeRemoved: g.onNodeRemoved,
      onConnectionChange: g.onConnectionChange,
      onTrigger: g.onTrigger
    };
    originalCallbacksMap.set(g.id, originalCallbacks);
    g.onNodeAdded = function(node) {
      originalCallbacks.onNodeAdded?.call(this, node);
      void handleGraphChangedThrottled();
    };
    g.onNodeRemoved = function(node) {
      originalCallbacks.onNodeRemoved?.call(this, node);
      nodeStatesCache.delete(node.id);
      void handleGraphChangedThrottled();
    };
    g.onConnectionChange = function(node) {
      originalCallbacks.onConnectionChange?.call(this, node);
      void handleGraphChangedThrottled();
    };
    g.onTrigger = function(event) {
      originalCallbacks.onTrigger?.call(this, event);
      if (event.type === "node:property:changed" && (event.property === "mode" || event.property === "bgcolor" || event.property === "color")) {
        nodeStatesCache.delete(String(event.nodeId));
        void handleGraphChangedThrottled();
      }
    };
  }, "setupEventListeners");
  const cleanupEventListeners = /* @__PURE__ */ __name((oldGraph) => {
    const g = oldGraph || graph.value;
    if (!g) return;
    const originalCallbacks = originalCallbacksMap.get(g.id);
    if (!originalCallbacks) {
      console.error(
        "Attempted to cleanup event listeners for graph that was never set up"
      );
      return;
    }
    g.onNodeAdded = originalCallbacks.onNodeAdded;
    g.onNodeRemoved = originalCallbacks.onNodeRemoved;
    g.onConnectionChange = originalCallbacks.onConnectionChange;
    g.onTrigger = originalCallbacks.onTrigger;
    originalCallbacksMap.delete(g.id);
  }, "cleanupEventListeners");
  const checkForChangesInternal = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!g) return false;
    let structureChanged = false;
    let positionChanged = false;
    let connectionChanged = false;
    const dataSource = MinimapDataSourceFactory.create(g);
    const currentNodeCount = dataSource.getNodeCount();
    if (currentNodeCount !== lastNodeCount.value) {
      structureChanged = true;
      lastNodeCount.value = currentNodeCount;
    }
    const nodes = dataSource.getNodes();
    for (const node of nodes) {
      const nodeId = node.id;
      const currentState = `${node.x},${node.y},${node.width},${node.height}`;
      if (nodeStatesCache.get(nodeId) !== currentState) {
        positionChanged = true;
        nodeStatesCache.set(nodeId, currentState);
      }
    }
    const currentNodeIds = new Set(nodes.map((n) => n.id));
    for (const [nodeId] of nodeStatesCache) {
      if (!currentNodeIds.has(nodeId)) {
        nodeStatesCache.delete(nodeId);
        structureChanged = true;
      }
    }
    const currentLinks = JSON.stringify(g.links || {});
    if (currentLinks !== linksCache.value) {
      connectionChanged = true;
      linksCache.value = currentLinks;
    }
    if (structureChanged || positionChanged) {
      updateFlags.value.bounds = true;
      updateFlags.value.nodes = true;
    }
    if (connectionChanged) {
      updateFlags.value.connections = true;
    }
    return structureChanged || positionChanged || connectionChanged;
  }, "checkForChangesInternal");
  const init = /* @__PURE__ */ __name(() => {
    setupEventListeners();
    api.addEventListener("graphChanged", handleGraphChangedThrottled);
    watch(layoutStoreVersion, () => {
      void handleGraphChangedThrottled();
    });
  }, "init");
  const destroy = /* @__PURE__ */ __name(() => {
    cleanupEventListeners();
    api.removeEventListener("graphChanged", handleGraphChangedThrottled);
    nodeStatesCache.clear();
  }, "destroy");
  const clearCache = /* @__PURE__ */ __name(() => {
    nodeStatesCache.clear();
    linksCache.value = "";
    lastNodeCount.value = 0;
  }, "clearCache");
  return {
    updateFlags,
    setupEventListeners,
    cleanupEventListeners,
    checkForChanges: checkForChangesInternal,
    init,
    destroy,
    clearCache
  };
}
__name(useMinimapGraph, "useMinimapGraph");
function useMinimapInteraction(containerRef, bounds, scale, width, height, centerViewOn, canvas) {
  const isDragging = ref(false);
  const containerRect = ref({
    left: 0,
    top: 0,
    width,
    height
  });
  const updateContainerRect = /* @__PURE__ */ __name(() => {
    if (!containerRef.value) return;
    const rect = containerRef.value.getBoundingClientRect();
    containerRect.value = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
  }, "updateContainerRect");
  const handlePointerDown = /* @__PURE__ */ __name((e) => {
    isDragging.value = true;
    updateContainerRect();
    const target = e.currentTarget;
    if (target instanceof HTMLElement) {
      target.setPointerCapture(e.pointerId);
    }
    handlePointerMove(e);
  }, "handlePointerDown");
  const handlePointerMove = /* @__PURE__ */ __name((e) => {
    if (!isDragging.value || !canvas.value) return;
    const x = e.clientX - containerRect.value.left;
    const y = e.clientY - containerRect.value.top;
    const offsetX = (width - bounds.value.width * scale.value) / 2;
    const offsetY = (height - bounds.value.height * scale.value) / 2;
    const worldX = (x - offsetX) / scale.value + bounds.value.minX;
    const worldY = (y - offsetY) / scale.value + bounds.value.minY;
    centerViewOn(worldX, worldY);
  }, "handlePointerMove");
  const releasePointer = /* @__PURE__ */ __name((e) => {
    isDragging.value = false;
    if (!e) return;
    const target = e.currentTarget;
    if (target instanceof HTMLElement && target.hasPointerCapture(e.pointerId)) {
      target.releasePointerCapture(e.pointerId);
    }
  }, "releasePointer");
  const handlePointerUp = releasePointer;
  const handlePointerCancel = releasePointer;
  const handleWheel = /* @__PURE__ */ __name((e) => {
    e.preventDefault();
    const c = canvas.value;
    if (!c) return;
    if (containerRect.value.left === 0 && containerRect.value.top === 0 && containerRef.value) {
      updateContainerRect();
    }
    const ds = c.ds;
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = ds.scale * delta;
    const MIN_SCALE = 0.1;
    const MAX_SCALE = 10;
    if (newScale < MIN_SCALE || newScale > MAX_SCALE) return;
    const x = e.clientX - containerRect.value.left;
    const y = e.clientY - containerRect.value.top;
    const offsetX = (width - bounds.value.width * scale.value) / 2;
    const offsetY = (height - bounds.value.height * scale.value) / 2;
    const worldX = (x - offsetX) / scale.value + bounds.value.minX;
    const worldY = (y - offsetY) / scale.value + bounds.value.minY;
    ds.scale = newScale;
    centerViewOn(worldX, worldY);
  }, "handleWheel");
  return {
    isDragging,
    containerRect,
    updateContainerRect,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
    handleWheel
  };
}
__name(useMinimapInteraction, "useMinimapInteraction");
function useMinimapRenderer(canvasRef, graph, bounds, scale, updateFlags, settings, width, height) {
  const needsFullRedraw = ref(true);
  const needsBoundsUpdate = ref(true);
  const renderMinimap = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!canvasRef.value || !g) return;
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;
    if (!g._nodes || g._nodes.length === 0) {
      ctx.clearRect(0, 0, width, height);
      return;
    }
    const needsRedraw = needsFullRedraw.value || updateFlags.value.nodes || updateFlags.value.connections;
    if (needsRedraw) {
      renderMinimapToCanvas(canvasRef.value, g, {
        bounds: bounds.value,
        scale: scale.value,
        settings: {
          nodeColors: settings.nodeColors.value,
          showLinks: settings.showLinks.value,
          showGroups: settings.showGroups.value,
          renderBypass: settings.renderBypass.value,
          renderError: settings.renderError.value
        },
        width,
        height
      });
      needsFullRedraw.value = false;
      updateFlags.value.nodes = false;
      updateFlags.value.connections = false;
    }
  }, "renderMinimap");
  const updateMinimap = /* @__PURE__ */ __name((updateBounds, updateViewport) => {
    if (needsBoundsUpdate.value || updateFlags.value.bounds) {
      updateBounds();
      needsBoundsUpdate.value = false;
      updateFlags.value.bounds = false;
      needsFullRedraw.value = true;
      updateFlags.value.viewport = true;
    }
    if (needsFullRedraw.value || updateFlags.value.nodes || updateFlags.value.connections) {
      renderMinimap();
    }
    if (updateFlags.value.viewport) {
      updateViewport();
      updateFlags.value.viewport = false;
    }
  }, "updateMinimap");
  const forceFullRedraw = /* @__PURE__ */ __name(() => {
    needsFullRedraw.value = true;
    updateFlags.value.bounds = true;
    updateFlags.value.nodes = true;
    updateFlags.value.connections = true;
    updateFlags.value.viewport = true;
  }, "forceFullRedraw");
  return {
    needsFullRedraw,
    needsBoundsUpdate,
    renderMinimap,
    updateMinimap,
    forceFullRedraw
  };
}
__name(useMinimapRenderer, "useMinimapRenderer");
function useMinimapSettings() {
  const settingStore = useSettingStore();
  const colorPaletteStore = useColorPaletteStore();
  const nodeColors = computed(
    () => settingStore.get("Comfy.Minimap.NodeColors")
  );
  const showLinks = computed(() => settingStore.get("Comfy.Minimap.ShowLinks"));
  const showGroups = computed(
    () => settingStore.get("Comfy.Minimap.ShowGroups")
  );
  const renderBypass = computed(
    () => settingStore.get("Comfy.Minimap.RenderBypassState")
  );
  const renderError = computed(
    () => settingStore.get("Comfy.Minimap.RenderErrorState")
  );
  const width = 253;
  const height = 200;
  const isLightTheme = computed(
    () => colorPaletteStore.completedActivePalette.light_theme
  );
  const containerStyles = computed(() => ({
    width: `${width}px`,
    height: `${height}px`,
    border: "1px solid var(--interface-stroke)",
    borderRadius: "8px"
  }));
  const panelStyles = computed(() => ({
    width: `210px`,
    height: `${height}px`,
    border: "1px solid var(--interface-stroke)",
    borderRadius: "8px"
  }));
  return {
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    containerStyles,
    panelStyles,
    isLightTheme
  };
}
__name(useMinimapSettings, "useMinimapSettings");
function useMinimapViewport(canvas, graph, width, height) {
  const bounds = ref({
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    width: 0,
    height: 0
  });
  const scale = ref(1);
  const viewportTransform = ref({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const canvasDimensions = ref({
    width: 0,
    height: 0
  });
  const updateCanvasDimensions = /* @__PURE__ */ __name(() => {
    const c = canvas.value;
    if (!c) return;
    const canvasEl = c.canvas;
    const dpr = window.devicePixelRatio || 1;
    canvasDimensions.value = {
      width: canvasEl.clientWidth || canvasEl.width / dpr,
      height: canvasEl.clientHeight || canvasEl.height / dpr
    };
  }, "updateCanvasDimensions");
  const calculateGraphBounds = /* @__PURE__ */ __name(() => {
    const dataSource = MinimapDataSourceFactory.create(graph.value);
    if (!dataSource.hasData()) {
      return { minX: 0, minY: 0, maxX: 100, maxY: 100, width: 100, height: 100 };
    }
    const sourceBounds = dataSource.getBounds();
    return enforceMinimumBounds(sourceBounds);
  }, "calculateGraphBounds");
  const calculateScale = /* @__PURE__ */ __name(() => {
    return calculateMinimapScale(bounds.value, width, height);
  }, "calculateScale");
  const updateViewport = /* @__PURE__ */ __name(() => {
    const c = canvas.value;
    if (!c) return;
    if (canvasDimensions.value.width === 0 || canvasDimensions.value.height === 0) {
      updateCanvasDimensions();
    }
    const ds = c.ds;
    const viewportWidth = canvasDimensions.value.width / ds.scale;
    const viewportHeight = canvasDimensions.value.height / ds.scale;
    const worldX = -ds.offset[0];
    const worldY = -ds.offset[1];
    const centerOffsetX = (width - bounds.value.width * scale.value) / 2;
    const centerOffsetY = (height - bounds.value.height * scale.value) / 2;
    viewportTransform.value = {
      x: (worldX - bounds.value.minX) * scale.value + centerOffsetX,
      y: (worldY - bounds.value.minY) * scale.value + centerOffsetY,
      width: viewportWidth * scale.value,
      height: viewportHeight * scale.value
    };
  }, "updateViewport");
  const updateBounds = /* @__PURE__ */ __name(() => {
    bounds.value = calculateGraphBounds();
    scale.value = calculateScale();
  }, "updateBounds");
  const centerViewOn = /* @__PURE__ */ __name((worldX, worldY) => {
    const c = canvas.value;
    if (!c) return;
    if (canvasDimensions.value.width === 0 || canvasDimensions.value.height === 0) {
      updateCanvasDimensions();
    }
    const ds = c.ds;
    const viewportWidth = canvasDimensions.value.width / ds.scale;
    const viewportHeight = canvasDimensions.value.height / ds.scale;
    ds.offset[0] = -(worldX - viewportWidth / 2);
    ds.offset[1] = -(worldY - viewportHeight / 2);
    c.setDirty(true, true);
  }, "centerViewOn");
  const { resume: startViewportSync, pause: stopViewportSync } = useRafFn(updateViewport);
  return {
    bounds: computed(() => bounds.value),
    scale: computed(() => scale.value),
    viewportTransform: computed(() => viewportTransform.value),
    canvasDimensions: computed(() => canvasDimensions.value),
    updateCanvasDimensions,
    updateViewport,
    updateBounds,
    centerViewOn,
    startViewportSync,
    stopViewportSync
  };
}
__name(useMinimapViewport, "useMinimapViewport");
function useMinimap() {
  const canvasStore = useCanvasStore();
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const containerRef = ref();
  const canvasRef = ref();
  const minimapRef = ref(null);
  const visible = ref(true);
  const initialized = ref(false);
  const width = 250;
  const height = 200;
  const canvas = computed(() => canvasStore.canvas);
  const graph = computed(() => {
    const activeSubgraph = workflowStore.activeSubgraph;
    return activeSubgraph || canvas.value?.graph;
  });
  const settings = useMinimapSettings();
  const {
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    containerStyles,
    panelStyles
  } = settings;
  const updateOption = /* @__PURE__ */ __name(async (key, value) => {
    await settingStore.set(key, value);
    renderer.forceFullRedraw();
    renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
  }, "updateOption");
  const viewport = useMinimapViewport(canvas, graph, width, height);
  const interaction = useMinimapInteraction(
    containerRef,
    viewport.bounds,
    viewport.scale,
    width,
    height,
    viewport.centerViewOn,
    canvas
  );
  const graphManager = useMinimapGraph(graph, () => {
    renderer.forceFullRedraw();
    renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
  });
  const renderer = useMinimapRenderer(
    canvasRef,
    graph,
    viewport.bounds,
    viewport.scale,
    graphManager.updateFlags,
    settings,
    width,
    height
  );
  const { pause: pauseChangeDetection, resume: resumeChangeDetection } = useRafFn(
    async () => {
      if (visible.value) {
        const hasChanges = await graphManager.checkForChanges();
        if (hasChanges) {
          renderer.updateMinimap(
            viewport.updateBounds,
            viewport.updateViewport
          );
        }
      }
    },
    { immediate: false }
  );
  const init = /* @__PURE__ */ __name(async () => {
    if (initialized.value) return;
    visible.value = settingStore.get("Comfy.Minimap.Visible");
    if (canvas.value && graph.value) {
      graphManager.init();
      if (containerRef.value) {
        interaction.updateContainerRect();
      }
      viewport.updateCanvasDimensions();
      window.addEventListener("resize", interaction.updateContainerRect);
      window.addEventListener("scroll", interaction.updateContainerRect);
      window.addEventListener("resize", viewport.updateCanvasDimensions);
      renderer.forceFullRedraw();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
      viewport.updateViewport();
      if (visible.value) {
        resumeChangeDetection();
        viewport.startViewportSync();
      }
      initialized.value = true;
    }
  }, "init");
  const destroy = /* @__PURE__ */ __name(() => {
    pauseChangeDetection();
    viewport.stopViewportSync();
    graphManager.destroy();
    window.removeEventListener("resize", interaction.updateContainerRect);
    window.removeEventListener("scroll", interaction.updateContainerRect);
    window.removeEventListener("resize", viewport.updateCanvasDimensions);
    initialized.value = false;
  }, "destroy");
  watch(
    canvas,
    async (newCanvas, oldCanvas) => {
      if (oldCanvas) {
        graphManager.cleanupEventListeners();
        pauseChangeDetection();
        viewport.stopViewportSync();
        graphManager.destroy();
        window.removeEventListener("resize", interaction.updateContainerRect);
        window.removeEventListener("scroll", interaction.updateContainerRect);
        window.removeEventListener("resize", viewport.updateCanvasDimensions);
      }
      if (newCanvas && !initialized.value) {
        await init();
      }
    },
    { immediate: true, flush: "post" }
  );
  watch(graph, (newGraph, oldGraph) => {
    if (newGraph && newGraph !== oldGraph) {
      graphManager.cleanupEventListeners(oldGraph || void 0);
      graphManager.setupEventListeners();
      renderer.forceFullRedraw();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
    }
  });
  watch(visible, async (isVisible) => {
    if (isVisible) {
      if (containerRef.value) {
        interaction.updateContainerRect();
      }
      viewport.updateCanvasDimensions();
      renderer.forceFullRedraw();
      await nextTick();
      await nextTick();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
      viewport.updateViewport();
      resumeChangeDetection();
      viewport.startViewportSync();
    } else {
      pauseChangeDetection();
      viewport.stopViewportSync();
    }
  });
  const toggle = /* @__PURE__ */ __name(async () => {
    visible.value = !visible.value;
    await settingStore.set("Comfy.Minimap.Visible", visible.value);
  }, "toggle");
  const setMinimapRef = /* @__PURE__ */ __name((ref2) => {
    minimapRef.value = ref2;
  }, "setMinimapRef");
  const viewportStyles = computed(() => {
    const transform = viewport.viewportTransform.value;
    return {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
      width: `${transform.width}px`,
      height: `${transform.height}px`,
      border: `2px solid ${settings.isLightTheme.value ? "#E0E0E0" : "#FFF"}`,
      backgroundColor: `rgba(255, 255, 255, 0.2)`,
      willChange: "transform",
      backfaceVisibility: "hidden",
      perspective: "1000px",
      pointerEvents: "none"
    };
  });
  return {
    visible: computed(() => visible.value),
    initialized: computed(() => initialized.value),
    containerRef,
    canvasRef,
    containerStyles,
    viewportStyles,
    panelStyles,
    width,
    height,
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    init,
    destroy,
    toggle,
    renderMinimap: renderer.renderMinimap,
    handlePointerDown: interaction.handlePointerDown,
    handlePointerMove: interaction.handlePointerMove,
    handlePointerUp: interaction.handlePointerUp,
    handlePointerCancel: interaction.handlePointerCancel,
    handleWheel: interaction.handleWheel,
    setMinimapRef,
    updateOption
  };
}
__name(useMinimap, "useMinimap");
const _hoisted_1$B = { class: "flex items-center gap-1 pr-0.5" };
const _hoisted_2$q = { class: "rounded-lg bg-interface-panel-selected-surface p-2 group-hover:bg-interface-button-hover-surface" };
const _hoisted_3$l = { class: "flex flex-col gap-1" };
const _hoisted_4$e = { class: "flex items-center gap-2" };
const _hoisted_5$b = { class: "text-[9px] text-text-primary" };
const _hoisted_6$9 = { class: "flex items-center gap-2" };
const _hoisted_7$7 = { class: "text-[9px] text-text-primary" };
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "CanvasModeSelector",
  props: {
    buttonStyles: {}
  },
  setup(__props) {
    const buttonRef = ref();
    const popover = ref();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isCanvasReadOnly = computed(() => canvasStore.canvas?.read_only ?? false);
    const currentModeIcon = computed(
      () => isCanvasReadOnly.value ? "icon-[lucide--hand]" : "icon-[lucide--mouse-pointer-2]"
    );
    const unlockCommandText = computed(
      () => commandStore.formatKeySequence(commandStore.getCommand("Comfy.Canvas.Unlock")).toUpperCase()
    );
    const lockCommandText = computed(
      () => commandStore.formatKeySequence(commandStore.getCommand("Comfy.Canvas.Lock")).toUpperCase()
    );
    const toggle = /* @__PURE__ */ __name((event) => {
      const el = buttonRef.value?.$el || buttonRef.value;
      popover.value?.toggle(event, el);
    }, "toggle");
    const setMode = /* @__PURE__ */ __name((mode) => {
      if (mode === "select" && isCanvasReadOnly.value) {
        void commandStore.execute("Comfy.Canvas.Unlock");
      } else if (mode === "hand" && !isCanvasReadOnly.value) {
        void commandStore.execute("Comfy.Canvas.Lock");
      }
      popover.value?.hide();
    }, "setMode");
    const popoverPt = computed(() => ({
      root: {
        class: "absolute z-50 -translate-y-2"
      },
      content: {
        class: [
          "mb-2 text-text-primary",
          "shadow-lg border border-interface-stroke",
          "bg-nav-background",
          "rounded-lg",
          "p-2 px-3",
          "min-w-39",
          "select-none"
        ]
      }
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Button), {
          ref_key: "buttonRef",
          ref: buttonRef,
          severity: "secondary",
          class: "group h-8 rounded-none! bg-comfy-menu-bg p-0 transition-none! hover:rounded-lg! hover:bg-interface-button-hover-surface!",
          style: normalizeStyle(_ctx.buttonStyles),
          onClick: toggle
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$B, [
              createElementVNode("div", _hoisted_2$q, [
                createElementVNode("i", {
                  class: normalizeClass([currentModeIcon.value, "block h-4 w-4"])
                }, null, 2)
              ]),
              _cache[2] || (_cache[2] = createElementVNode("i", { class: "icon-[lucide--chevron-down] block h-4 w-4 pr-1.5" }, null, -1))
            ])
          ]),
          _: 1
        }, 8, ["style"]),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: popoverPt.value
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3$l, [
              createElementVNode("div", {
                class: "flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-node-component-surface-hovered",
                onClick: _cache[0] || (_cache[0] = ($event) => setMode("select"))
              }, [
                createElementVNode("div", _hoisted_4$e, [
                  _cache[3] || (_cache[3] = createElementVNode("i", { class: "icon-[lucide--mouse-pointer-2] h-4 w-4" }, null, -1)),
                  createElementVNode("span", null, toDisplayString(_ctx.$t("graphCanvasMenu.select")), 1)
                ]),
                createElementVNode("span", _hoisted_5$b, toDisplayString(unlockCommandText.value), 1)
              ]),
              createElementVNode("div", {
                class: "flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm hover:bg-node-component-surface-hovered",
                onClick: _cache[1] || (_cache[1] = ($event) => setMode("hand"))
              }, [
                createElementVNode("div", _hoisted_6$9, [
                  _cache[4] || (_cache[4] = createElementVNode("i", { class: "icon-[lucide--hand] h-4 w-4" }, null, -1)),
                  createElementVNode("span", null, toDisplayString(_ctx.$t("graphCanvasMenu.hand")), 1)
                ]),
                createElementVNode("span", _hoisted_7$7, toDisplayString(lockCommandText.value), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 64);
    };
  }
});
const _hoisted_1$A = {
  key: 0,
  class: "absolute right-0 bottom-[62px] z-1300 flex w-[250px] justify-center border-0! bg-inherit!"
};
const _hoisted_2$p = { class: "flex flex-col gap-1" };
const _hoisted_3$k = { class: "font-medium" };
const _hoisted_4$d = { class: "text-[9px] text-text-primary" };
const _hoisted_5$a = { class: "font-medium" };
const _hoisted_6$8 = { class: "text-[9px] text-text-primary" };
const _hoisted_7$6 = { class: "font-medium" };
const _hoisted_8$5 = { class: "text-[9px] text-text-primary" };
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "ZoomControlsModal",
  props: {
    visible: { type: Boolean }
  },
  setup(__props) {
    const minimap = useMinimap();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const { formatKeySequence } = useCommandStore();
    const props = __props;
    const interval = ref(null);
    const applyZoom = /* @__PURE__ */ __name((val) => {
      const inputValue = val.value;
      if (isNaN(inputValue) || inputValue < 1 || inputValue > 1e3) {
        return;
      }
      canvasStore.setAppZoomFromPercentage(inputValue);
    }, "applyZoom");
    const executeCommand = /* @__PURE__ */ __name((command) => {
      void commandStore.execute(command);
    }, "executeCommand");
    const startRepeat = /* @__PURE__ */ __name((command) => {
      if (interval.value) return;
      const cmd = /* @__PURE__ */ __name(() => commandStore.execute(command), "cmd");
      void cmd();
      interval.value = window.setInterval(cmd, 100);
    }, "startRepeat");
    const stopRepeat = /* @__PURE__ */ __name(() => {
      if (interval.value) {
        clearInterval(interval.value);
        interval.value = null;
      }
    }, "stopRepeat");
    const filteredMinimapStyles = computed(() => {
      return {
        ...minimap.containerStyles.value,
        height: void 0,
        width: void 0
      };
    });
    const zoomInCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.ZoomIn"))
    );
    const zoomOutCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.ZoomOut"))
    );
    const zoomToFitCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.FitView"))
    );
    const zoomInput = ref(null);
    const zoomInputContainer = ref(null);
    watch(
      () => props.visible,
      async (newVal) => {
        if (newVal) {
          await nextTick();
          const input = zoomInputContainer.value?.querySelector(
            "input"
          );
          input?.focus();
        }
      }
    );
    return (_ctx, _cache) => {
      return _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$A, [
        createElementVNode("div", {
          class: "w-4/5 rounded-lg border border-interface-stroke bg-interface-panel-surface p-2 text-text-primary shadow-lg select-none",
          style: normalizeStyle(filteredMinimapStyles.value),
          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("div", _hoisted_2$p, [
            createElementVNode("div", {
              class: "flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm hover:bg-node-component-surface-hovered",
              onMousedown: _cache[0] || (_cache[0] = ($event) => startRepeat("Comfy.Canvas.ZoomIn")),
              onMouseup: stopRepeat,
              onMouseleave: stopRepeat
            }, [
              createElementVNode("span", _hoisted_3$k, toDisplayString(_ctx.$t("graphCanvasMenu.zoomIn")), 1),
              createElementVNode("span", _hoisted_4$d, toDisplayString(zoomInCommandText.value), 1)
            ], 32),
            createElementVNode("div", {
              class: "flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm hover:bg-node-component-surface-hovered",
              onMousedown: _cache[1] || (_cache[1] = ($event) => startRepeat("Comfy.Canvas.ZoomOut")),
              onMouseup: stopRepeat,
              onMouseleave: stopRepeat
            }, [
              createElementVNode("span", _hoisted_5$a, toDisplayString(_ctx.$t("graphCanvasMenu.zoomOut")), 1),
              createElementVNode("span", _hoisted_6$8, toDisplayString(zoomOutCommandText.value), 1)
            ], 32),
            createElementVNode("div", {
              class: "flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm hover:bg-node-component-surface-hovered",
              onClick: _cache[2] || (_cache[2] = ($event) => executeCommand("Comfy.Canvas.FitView"))
            }, [
              createElementVNode("span", _hoisted_7$6, toDisplayString(_ctx.$t("zoomControls.zoomToFit")), 1),
              createElementVNode("span", _hoisted_8$5, toDisplayString(zoomToFitCommandText.value), 1)
            ]),
            createElementVNode("div", {
              ref_key: "zoomInputContainer",
              ref: zoomInputContainer,
              class: "zoomInputContainer flex items-center gap-1 rounded bg-input-surface p-2"
            }, [
              createVNode(unref(InputNumber), {
                ref_key: "zoomInput",
                ref: zoomInput,
                "default-value": unref(canvasStore).appScalePercentage,
                min: 1,
                max: 1e3,
                "show-buttons": false,
                "use-grouping": false,
                unstyled: true,
                "input-class": "bg-transparent border-none outline-hidden text-sm shadow-none my-0 w-full",
                fluid: "",
                onInput: applyZoom,
                onKeyup: withKeys(applyZoom, ["enter"])
              }, null, 8, ["default-value"]),
              _cache[4] || (_cache[4] = createElementVNode("span", { class: "flex-shrink-0 text-sm text-text-primary" }, "%", -1))
            ], 512)
          ])
        ], 4)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$z = { class: "inline-flex items-center gap-1 px-2 text-xs" };
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvasMenu",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const { formatKeySequence } = useCommandStore();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const canvasInteractions = useCanvasInteractions();
    const minimap = useMinimap();
    const { isModalVisible, toggleModal, hideModal, hasActivePopup } = useZoomControls();
    const stringifiedMinimapStyles = computed(() => {
      const buttonGroupKeys = ["borderRadius"];
      const buttonKeys = ["borderRadius"];
      const additionalButtonStyles = {
        border: "none"
      };
      const containerStyles = minimap.containerStyles.value;
      const buttonStyles = {
        ...Object.fromEntries(
          Object.entries(containerStyles).filter(
            ([key]) => buttonKeys.includes(key)
          )
        ),
        ...additionalButtonStyles
      };
      const buttonGroupStyles = Object.entries(containerStyles).filter(([key]) => buttonGroupKeys.includes(key)).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      return { buttonStyles, buttonGroupStyles };
    });
    const linkHidden = computed(
      () => settingStore.get("Comfy.LinkRenderMode") === LiteGraph.HIDDEN_LINK
    );
    const fitViewCommandText = computed(
      () => formatKeySequence(
        commandStore.getCommand("Comfy.Canvas.FitView")
      ).toUpperCase()
    );
    const minimapCommandText = computed(
      () => formatKeySequence(
        commandStore.getCommand("Comfy.Canvas.ToggleMinimap")
      ).toUpperCase()
    );
    const zoomButtonClass = computed(() => [
      "bg-comfy-menu-bg",
      isModalVisible.value ? "not-active:bg-interface-panel-selected-surface!" : "",
      "hover:bg-interface-button-hover-surface!",
      "p-0",
      "h-8",
      "w-15"
    ]);
    const minimapButtonClass = computed(() => ({
      "bg-comfy-menu-bg": true,
      "hover:bg-interface-button-hover-surface!": true,
      "not-active:bg-interface-panel-selected-surface!": settingStore.get(
        "Comfy.Minimap.Visible"
      ),
      "p-0": true,
      "w-8": true,
      "h-8": true
    }));
    const fitViewTooltip = computed(() => {
      const label = t2("graphCanvasMenu.fitView");
      const shortcut = fitViewCommandText.value;
      return shortcut ? `${label} (${shortcut})` : label;
    });
    const minimapTooltip = computed(() => {
      const label = settingStore.get("Comfy.Minimap.Visible") ? t2("zoomControls.hideMinimap") : t2("zoomControls.showMinimap");
      const shortcut = minimapCommandText.value;
      return shortcut ? `${label} (${shortcut})` : label;
    });
    const linkVisibilityTooltip = computed(
      () => linkHidden.value ? t2("graphCanvasMenu.showLinks") : t2("graphCanvasMenu.hideLinks")
    );
    const linkVisibilityAriaLabel = computed(
      () => linkHidden.value ? t2("graphCanvasMenu.showLinks") : t2("graphCanvasMenu.hideLinks")
    );
    const linkVisibleClass = computed(() => [
      "bg-comfy-menu-bg",
      linkHidden.value ? "not-active:bg-interface-panel-selected-surface!" : "",
      "hover:bg-interface-button-hover-surface!",
      "p-0",
      "w-8",
      "h-8"
    ]);
    onMounted(() => {
      canvasStore.initScaleSync();
    });
    const onMinimapToggleClick = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.Canvas.ToggleMinimap");
    }, "onMinimapToggleClick");
    const onLinkVisibilityToggleClick = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.Canvas.ToggleLinkVisibility");
    }, "onLinkVisibilityToggleClick");
    onBeforeUnmount(() => {
      canvasStore.cleanupScaleSync();
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$_, {
          visible: unref(isModalVisible),
          onClose: unref(hideModal)
        }, null, 8, ["visible", "onClose"]),
        unref(hasActivePopup) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-1200",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(hideModal) && unref(hideModal)(...args))
        })) : createCommentVNode("", true),
        createVNode(unref(ButtonGroup), {
          class: "absolute right-0 bottom-0 z-[1200] flex-row gap-1 border-[1px] border-interface-stroke bg-comfy-menu-bg p-2",
          style: normalizeStyle({
            ...stringifiedMinimapStyles.value.buttonGroupStyles
          }),
          onWheel: unref(canvasInteractions).handleWheel
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$$, {
              "button-styles": stringifiedMinimapStyles.value.buttonStyles
            }, null, 8, ["button-styles"]),
            _cache[6] || (_cache[6] = createElementVNode("div", { class: "h-[27px] w-[1px] self-center bg-node-divider" }, null, -1)),
            withDirectives((openBlock(), createBlock(unref(Button), {
              severity: "secondary",
              icon: "pi pi-expand",
              "aria-label": fitViewTooltip.value,
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              class: "h-8 w-8 bg-comfy-menu-bg p-0 hover:bg-interface-button-hover-surface!",
              onClick: _cache[1] || (_cache[1] = () => unref(commandStore).execute("Comfy.Canvas.FitView"))
            }, {
              icon: withCtx(() => _cache[2] || (_cache[2] = [
                createElementVNode("i", { class: "icon-[lucide--focus] h-4 w-4" }, null, -1)
              ])),
              _: 1
            }, 8, ["aria-label", "style"])), [
              [
                _directive_tooltip,
                fitViewTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            withDirectives((openBlock(), createBlock(unref(Button), {
              ref: "zoomButton",
              severity: "secondary",
              label: unref(t2)("zoomControls.label"),
              class: normalizeClass(zoomButtonClass.value),
              "aria-label": unref(t2)("zoomControls.label"),
              "data-testid": "zoom-controls-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              onClick: unref(toggleModal)
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_1$z, [
                  createElementVNode("span", null, toDisplayString(unref(canvasStore).appScalePercentage) + "%", 1),
                  _cache[3] || (_cache[3] = createElementVNode("i", { class: "icon-[lucide--chevron-down] h-4 w-4" }, null, -1))
                ])
              ]),
              _: 1
            }, 8, ["label", "class", "aria-label", "style", "onClick"])), [
              [
                _directive_tooltip,
                unref(t2)("zoomControls.label"),
                void 0,
                { top: true }
              ]
            ]),
            _cache[7] || (_cache[7] = createElementVNode("div", { class: "h-[27px] w-[1px] self-center bg-node-divider" }, null, -1)),
            withDirectives((openBlock(), createBlock(unref(Button), {
              ref: "minimapButton",
              severity: "secondary",
              "aria-label": minimapTooltip.value,
              "data-testid": "toggle-minimap-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              class: normalizeClass(minimapButtonClass.value),
              onClick: onMinimapToggleClick
            }, {
              icon: withCtx(() => _cache[4] || (_cache[4] = [
                createElementVNode("i", { class: "icon-[lucide--map] h-4 w-4" }, null, -1)
              ])),
              _: 1
            }, 8, ["aria-label", "style", "class"])), [
              [
                _directive_tooltip,
                minimapTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            withDirectives((openBlock(), createBlock(unref(Button), {
              severity: "secondary",
              class: normalizeClass(linkVisibleClass.value),
              "aria-label": linkVisibilityAriaLabel.value,
              "data-testid": "toggle-link-visibility-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              onClick: onLinkVisibilityToggleClick
            }, {
              icon: withCtx(() => _cache[5] || (_cache[5] = [
                createElementVNode("i", { class: "icon-[lucide--route-off] h-4 w-4" }, null, -1)
              ])),
              _: 1
            }, 8, ["class", "aria-label", "style"])), [
              [
                _directive_tooltip,
                {
                  value: linkVisibilityTooltip.value,
                  pt: {
                    root: {
                      style: "z-index: 2; transform: translateY(-20px);"
                    }
                  }
                },
                void 0,
                { top: true }
              ]
            ])
          ]),
          _: 1
        }, 8, ["style", "onWheel"])
      ]);
    };
  }
});
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "NodeTooltip",
  setup(__props) {
    let idleTimeout;
    const nodeDefStore = useNodeDefStore();
    const settingStore = useSettingStore();
    const tooltipRef = ref();
    const tooltipText = ref("");
    const left = ref();
    const top = ref();
    function hideTooltip() {
      return tooltipText.value = "";
    }
    __name(hideTooltip, "hideTooltip");
    async function showTooltip(tooltip) {
      if (!tooltip) return;
      left.value = app.canvas.mouse[0] + "px";
      top.value = app.canvas.mouse[1] + "px";
      tooltipText.value = tooltip;
      await nextTick();
      const rect = tooltipRef.value?.getBoundingClientRect();
      if (!rect) return;
      if (rect.right > window.innerWidth) {
        left.value = app.canvas.mouse[0] - rect.width + "px";
      }
      if (rect.top < 0) {
        top.value = app.canvas.mouse[1] + rect.height + "px";
      }
    }
    __name(showTooltip, "showTooltip");
    function onIdle() {
      const { canvas } = app;
      const node = canvas?.node_over;
      if (!node) return;
      const ctor = node.constructor;
      const nodeDef = nodeDefStore.nodeDefsByName[node.type ?? ""];
      if (ctor.title_mode !== LiteGraph.NO_TITLE && canvas.graph_mouse[1] < node.pos[1]) {
        return showTooltip(nodeDef?.description);
      }
      if (node.flags?.collapsed) return;
      const inputSlot = isOverNodeInput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (inputSlot !== -1) {
        const inputName = node.inputs[inputSlot].name;
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(inputName)}.tooltip`,
          nodeDef?.inputs[inputName]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const outputSlot = isOverNodeOutput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (outputSlot !== -1) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.outputs.${outputSlot}.tooltip`,
          nodeDef?.outputs[outputSlot]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const widget = app.canvas.getWidgetAtCursor();
      if (widget && !isDOMWidget(widget)) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(widget.name)}.tooltip`,
          nodeDef?.inputs[widget.name]?.tooltip ?? ""
        );
        return showTooltip(widget.tooltip ?? translatedTooltip);
      }
    }
    __name(onIdle, "onIdle");
    const onMouseMove = /* @__PURE__ */ __name((e) => {
      hideTooltip();
      clearTimeout(idleTimeout);
      if (e.target.nodeName !== "CANVAS") return;
      idleTimeout = window.setTimeout(
        onIdle,
        settingStore.get("LiteGraph.Node.TooltipDelay")
      );
    }, "onMouseMove");
    useEventListener(window, "mousemove", onMouseMove);
    useEventListener(window, "click", hideTooltip);
    return (_ctx, _cache) => {
      return tooltipText.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: tooltipRef,
        class: "node-tooltip",
        style: normalizeStyle({ left: left.value, top: top.value })
      }, toDisplayString(tooltipText.value), 5)) : createCommentVNode("", true);
    };
  }
});
const NodeTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-6c42a423"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "BypassButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const toggleBypass = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.Canvas.ToggleSelectedNodes.Bypass");
    }, "toggleBypass");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "data-testid": "bypass-button",
        class: "hover:bg-secondary-background",
        onClick: toggleBypass
      }, {
        icon: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--redo-dot] h-4 w-4" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Bypass.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$y = { class: "relative" };
const _hoisted_2$o = { class: "flex items-center gap-1 px-0" };
const _hoisted_3$j = {
  key: 0,
  class: "color-picker-container absolute -top-10 left-1/2"
};
const _hoisted_4$c = ["data-testid"];
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "ColorPickerButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const colorPaletteStore = useColorPaletteStore();
    const workflowStore = useWorkflowStore();
    const isLightTheme = computed(
      () => colorPaletteStore.completedActivePalette.light_theme
    );
    const toLightThemeColor = /* @__PURE__ */ __name((color) => adjustColor(color, { lightness: 0.5 }), "toLightThemeColor");
    const showColorPicker = ref(false);
    const NO_COLOR_OPTION = {
      name: "noColor",
      localizedName: t2("color.noColor"),
      value: {
        dark: LiteGraph.NODE_DEFAULT_BGCOLOR,
        light: toLightThemeColor(LiteGraph.NODE_DEFAULT_BGCOLOR)
      }
    };
    const colorOptions = [
      NO_COLOR_OPTION,
      ...Object.entries(LGraphCanvas.node_colors).map(([name, color]) => ({
        name,
        localizedName: t2(`color.${name}`),
        value: {
          dark: color.bgcolor,
          light: toLightThemeColor(color.bgcolor)
        }
      }))
    ];
    const selectedColorOption = ref(null);
    const applyColor = /* @__PURE__ */ __name((colorOption) => {
      const colorName = colorOption?.name ?? NO_COLOR_OPTION.name;
      const canvasColorOption = colorName === NO_COLOR_OPTION.name ? null : LGraphCanvas.node_colors[colorName];
      for (const item of canvasStore.selectedItems) {
        if (isColorable(item)) {
          item.setColorOption(canvasColorOption);
        }
      }
      canvasStore.canvas?.setDirty(true, true);
      currentColorOption.value = canvasColorOption;
      showColorPicker.value = false;
      workflowStore.activeWorkflow?.changeTracker.checkState();
    }, "applyColor");
    const currentColorOption = ref(null);
    const currentColor = computed(
      () => currentColorOption.value ? isLightTheme.value ? toLightThemeColor(currentColorOption.value?.bgcolor) : currentColorOption.value?.bgcolor : null
    );
    const localizedCurrentColorName = computed(() => {
      if (!currentColorOption.value?.bgcolor) return null;
      const colorOption = colorOptions.find(
        (option) => option.value.dark === currentColorOption.value?.bgcolor || option.value.light === currentColorOption.value?.bgcolor
      );
      return colorOption?.localizedName ?? NO_COLOR_OPTION.localizedName;
    });
    const updateColorSelectionFromNode = /* @__PURE__ */ __name((newSelectedItems) => {
      showColorPicker.value = false;
      selectedColorOption.value = null;
      currentColorOption.value = getItemsColorOption(newSelectedItems);
    }, "updateColorSelectionFromNode");
    watch(
      () => canvasStore.selectedItems,
      (newSelectedItems) => {
        updateColorSelectionFromNode(newSelectedItems);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$y, [
        withDirectives((openBlock(), createBlock(unref(Button), {
          "data-testid": "color-picker-button",
          severity: "secondary",
          text: "",
          onClick: _cache[0] || (_cache[0] = () => showColorPicker.value = !showColorPicker.value)
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2$o, [
              createElementVNode("i", {
                class: "pi pi-circle-fill h-4 w-4",
                style: normalizeStyle({ color: currentColor.value ?? "" })
              }, null, 4),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down h-4 w-4 py-1",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })), [
          [
            _directive_tooltip,
            {
              value: localizedCurrentColorName.value ?? unref(t2)("color.noColor"),
              showDelay: 1e3
            },
            void 0,
            { top: true }
          ]
        ]),
        showColorPicker.value ? (openBlock(), createElementBlock("div", _hoisted_3$j, [
          createVNode(unref(SelectButton), {
            "model-value": selectedColorOption.value,
            options: colorOptions,
            "option-label": "name",
            "data-key": "value",
            "onUpdate:modelValue": applyColor
          }, {
            option: withCtx(({ option }) => [
              withDirectives(createElementVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({
                  color: isLightTheme.value ? option.value.light : option.value.dark
                }),
                "data-testid": option.name
              }, null, 12, _hoisted_4$c), [
                [
                  _directive_tooltip,
                  option.localizedName,
                  void 0,
                  { top: true }
                ]
              ])
            ]),
            _: 1
          }, 8, ["model-value"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ColorPickerButton = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-ae10caa8"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "ConfigureSubgraph",
  setup(__props) {
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "icon-[lucide--settings-2]",
        onClick: unref(showSubgraphNodeDialog)
      }, null, 8, ["onClick"])), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("Edit Subgraph Widgets"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
function useSelectionState() {
  const canvasStore = useCanvasStore();
  const nodeDefStore = useNodeDefStore();
  const sidebarTabStore = useSidebarTabStore();
  const nodeHelpStore = useNodeHelpStore();
  const { id: nodeLibraryTabId } = useNodeLibrarySidebarTab();
  const { selectedItems } = storeToRefs(canvasStore);
  const selectedNodes = computed(() => {
    return selectedItems.value.filter(
      (i) => isLGraphNode(i)
    );
  });
  const nodeDef = computed(() => {
    if (selectedNodes.value.length !== 1) return null;
    return nodeDefStore.fromLGraphNode(selectedNodes.value[0]);
  });
  const hasAnySelection = computed(() => selectedItems.value.length > 0);
  const hasSingleSelection = computed(() => selectedItems.value.length === 1);
  const hasMultipleSelection = computed(() => selectedItems.value.length > 1);
  const isSingleNode = computed(
    () => hasSingleSelection.value && isLGraphNode(selectedItems.value[0])
  );
  const isSingleSubgraph = computed(
    () => isSingleNode.value && selectedItems.value[0]?.isSubgraphNode?.()
  );
  const isSingleImageNode = computed(
    () => isSingleNode.value && isImageNode(selectedItems.value[0])
  );
  const hasSubgraphs = computed(
    () => selectedItems.value.some((i) => i instanceof SubgraphNode)
  );
  const hasAny3DNodeSelected = computed(() => {
    const enable3DViewer = useSettingStore().get("Comfy.Load3D.3DViewerEnable");
    return selectedNodes.value.length === 1 && selectedNodes.value.some(isLoad3dNode) && enable3DViewer;
  });
  const hasImageNode = computed(() => isSingleImageNode.value);
  const hasOutputNodesSelected = computed(
    () => filterOutputNodes(selectedNodes.value).length > 0
  );
  const computeSelectionStatesFromNodes = /* @__PURE__ */ __name((nodes) => {
    if (!nodes.length)
      return { collapsed: false, pinned: false, bypassed: false };
    return {
      collapsed: nodes.some((n) => n.flags?.collapsed),
      pinned: nodes.some((n) => n.pinned),
      bypassed: nodes.some((n) => n.mode === LGraphEventMode.BYPASS)
    };
  }, "computeSelectionStatesFromNodes");
  const selectedNodesStates = computed(
    () => computeSelectionStatesFromNodes(selectedNodes.value)
  );
  const computeSelectionFlags = /* @__PURE__ */ __name(() => computeSelectionStatesFromNodes(selectedNodes.value), "computeSelectionFlags");
  const showNodeHelp = /* @__PURE__ */ __name(() => {
    const def = nodeDef.value;
    if (!def) return;
    const isSidebarActive = sidebarTabStore.activeSidebarTabId === nodeLibraryTabId;
    const currentHelpNode = nodeHelpStore.currentHelpNode;
    const isSameNodeHelpOpen = isSidebarActive && nodeHelpStore.isHelpOpen && currentHelpNode && currentHelpNode.nodePath === def.nodePath;
    if (isSameNodeHelpOpen) {
      nodeHelpStore.closeHelp();
      sidebarTabStore.toggleSidebarTab(nodeLibraryTabId);
      return;
    }
    if (!isSidebarActive) sidebarTabStore.toggleSidebarTab(nodeLibraryTabId);
    nodeHelpStore.openHelp(def);
  }, "showNodeHelp");
  return {
    selectedItems,
    selectedNodes,
    nodeDef,
    showNodeHelp,
    hasAny3DNodeSelected,
    hasAnySelection,
    hasSingleSelection,
    hasMultipleSelection,
    isSingleNode,
    isSingleSubgraph,
    isSingleImageNode,
    hasSubgraphs,
    hasImageNode,
    hasOutputNodesSelected,
    selectedNodesStates,
    computeSelectionFlags
  };
}
__name(useSelectionState, "useSelectionState");
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "ConvertToSubgraphButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const { isSingleSubgraph, hasAnySelection } = useSelectionState();
    const isUnpackVisible = isSingleSubgraph;
    const isConvertVisible = computed(
      () => hasAnySelection.value && !isSingleSubgraph.value
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return unref(isUnpackVisible) ? withDirectives((openBlock(), createBlock(unref(Button), {
        key: 0,
        severity: "secondary",
        "data-testid": "convert-to-subgraph-button",
        text: "",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Graph.UnpackSubgraph"))
      }, {
        icon: withCtx(() => _cache[2] || (_cache[2] = [
          createElementVNode("i", { class: "icon-[lucide--expand] h-4 w-4" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Graph_UnpackSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]) : isConvertVisible.value ? withDirectives((openBlock(), createBlock(unref(Button), {
        key: 1,
        severity: "secondary",
        "data-testid": "convert-to-subgraph-button",
        text: "",
        onClick: _cache[1] || (_cache[1] = () => unref(commandStore).execute("Comfy.Graph.ConvertToSubgraph"))
      }, {
        icon: withCtx(() => _cache[3] || (_cache[3] = [
          createElementVNode("i", { class: "icon-[lucide--shrink]" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Graph_ConvertToSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "DeleteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const { selectedItems } = useSelectionState();
    const isDeletable = computed(
      () => selectedItems.value.some((x) => x.removable !== false)
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "icon-class": "w-4 h-4",
        icon: "pi pi-trash",
        "data-testid": "delete-button",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.DeleteSelectedItems"))
      }, null, 512)), [
        [vShow, isDeletable.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_DeleteSelectedItems.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "ExecuteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const { selectedNodes } = useSelectionState();
    const canvas = canvasStore.getCanvas();
    const buttonHovered = ref(false);
    const selectedOutputNodes = computed(
      () => selectedNodes.value.filter(isLGraphNode).filter(isOutputNode)
    );
    function outputNodeStokeStyle() {
      if (this.selected && this.constructor.nodeData?.output_node && buttonHovered.value) {
        return { color: "orange", lineWidth: 2, padding: 10 };
      }
    }
    __name(outputNodeStokeStyle, "outputNodeStokeStyle");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      buttonHovered.value = true;
      for (const node of selectedOutputNodes.value) {
        node.strokeStyles["outputNode"] = outputNodeStokeStyle;
      }
      canvas.setDirty(true);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      buttonHovered.value = false;
      canvas.setDirty(true);
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.QueueSelectedOutputNodes");
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        class: "size-8 bg-azure-400 !p-0 dark-theme:bg-azure-600",
        text: "",
        onMouseenter: _cache[0] || (_cache[0] = () => handleMouseEnter()),
        onMouseleave: _cache[1] || (_cache[1] = () => handleMouseLeave()),
        onClick: handleClick
      }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createElementVNode("i", { class: "icon-[lucide--play] size-4 text-white" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("selectionToolbox.executeButton.tooltip"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "ExtensionCommandButton",
  props: {
    command: {}
  },
  setup(__props) {
    const commandStore = useCommandStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "icon-class": "w-4 h-4",
        icon: typeof _ctx.command.icon === "function" ? _ctx.command.icon() : _ctx.command.icon,
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute(_ctx.command.id))
      }, null, 8, ["icon"])), [
        [
          _directive_tooltip,
          {
            value: unref(st)(`commands.${unref(normalizeI18nKey)(_ctx.command.id)}.label`, "") || void 0,
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "InfoButton",
  setup(__props) {
    const { showNodeHelp: toggleHelp } = useSelectionState();
    const onInfoClick = /* @__PURE__ */ __name(() => {
      toggleHelp();
    }, "onInfoClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        "data-testid": "info-button",
        text: "",
        severity: "secondary",
        onClick: onInfoClick
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--info] h-4 w-4" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.info"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "Load3DViewerButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const open3DViewer = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.3DViewer.Open3DViewer");
    }, "open3DViewer");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        "icon-class": "w-4 h-4",
        onClick: open3DViewer
      }, null, 512)), [
        [
          _directive_tooltip,
          {
            value: unref(t)("commands.Comfy_3DViewer_Open3DViewer.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "MaskEditorButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const { isSingleImageNode } = useSelectionState();
    const openMaskEditor = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
    }, "openMaskEditor");
    return (_ctx, _cache) => {
      const _component_i_comfy58mask = __unplugin_components_0$2;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        onClick: openMaskEditor
      }, {
        default: withCtx(() => [
          createVNode(_component_i_comfy58mask, { class: "!h-4 !w-4" })
        ]),
        _: 1
      })), [
        [vShow, unref(isSingleImageNode)],
        [
          _directive_tooltip,
          {
            value: unref(t)("commands.Comfy_MaskEditor_OpenMaskEditor.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const isRefreshableWidget = /* @__PURE__ */ __name((widget) => widget != null && typeof widget === "object" && "refresh" in widget && typeof widget.refresh === "function", "isRefreshableWidget");
const useRefreshableSelection = /* @__PURE__ */ __name(() => {
  const graphStore = useCanvasStore();
  const selectedNodes = ref([]);
  watchEffect(() => {
    selectedNodes.value = graphStore.selectedItems.filter(isLGraphNode);
  });
  const refreshableWidgets = computed(
    () => selectedNodes.value.flatMap((node) => {
      if (!node.widgets) return [];
      const items = [];
      for (const widget of node.widgets) {
        if (isRefreshableWidget(widget)) {
          items.push(widget);
        }
      }
      return items;
    })
  );
  const isRefreshable = computed(() => refreshableWidgets.value.length > 0);
  async function refreshSelected() {
    if (!isRefreshable.value) return;
    await Promise.all(refreshableWidgets.value.map((item) => item.refresh()));
  }
  __name(refreshSelected, "refreshSelected");
  return {
    isRefreshable,
    refreshSelected
  };
}, "useRefreshableSelection");
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "RefreshSelectionButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const { isRefreshable, refreshSelected } = useRefreshableSelection();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "data-testid": "refresh-button",
        onClick: unref(refreshSelected)
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--refresh-cw] h-4 w-4" }, null, -1)
        ])),
        _: 1
      }, 8, ["onClick"])), [
        [vShow, unref(isRefreshable)],
        [
          _directive_tooltip,
          unref(t2)("g.refreshNode"),
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "SaveToSubgraphLibrary",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isVisible = computed(() => {
      return canvasStore.selectedItems?.length === 1 && canvasStore.selectedItems[0] instanceof SubgraphNode;
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.PublishSubgraph"))
      }, {
        icon: withCtx(() => _cache[1] || (_cache[1] = [
          createElementVNode("i", { class: "icon-[lucide--book-open]" }, null, -1)
        ])),
        _: 1
      })), [
        [vShow, isVisible.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_PublishSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const moreOptionsOpen = ref(false);
const forceCloseMoreOptionsSignal = ref(0);
const restoreMoreOptionsSignal = ref(0);
const moreOptionsRestorePending = ref(false);
let moreOptionsWasOpenBeforeDrag = false;
let moreOptionsSelectionSignature = null;
function buildSelectionSignature(store) {
  const c = store.canvas;
  if (!c) return null;
  const items = Array.from(c.selectedItems);
  if (items.length !== 1) return null;
  const item = items[0];
  if (isLGraphNode(item)) return `N:${item.id}`;
  if (isLGraphGroup(item)) return `G:${item.id}`;
  return null;
}
__name(buildSelectionSignature, "buildSelectionSignature");
function currentSelectionMatchesSignature(store) {
  if (!moreOptionsSelectionSignature) return false;
  return buildSelectionSignature(store) === moreOptionsSelectionSignature;
}
__name(currentSelectionMatchesSignature, "currentSelectionMatchesSignature");
function useSelectionToolboxPosition(toolboxRef) {
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { getSelectableItems } = useSelectedLiteGraphItems();
  const { shouldRenderVueNodes } = useVueFeatureFlags();
  const worldPosition = ref({ x: 0, y: 0 });
  const visible = ref(false);
  const { left: canvasLeft, top: canvasTop } = useElementBounding(
    lgCanvas.canvas
  );
  const updateSelectionBounds = /* @__PURE__ */ __name(() => {
    const selectableItems = getSelectableItems();
    if (!selectableItems.size) {
      visible.value = false;
      return;
    }
    visible.value = true;
    const allBounds = [];
    for (const item of selectableItems) {
      if (item.id == null) continue;
      if (shouldRenderVueNodes.value && typeof item.id === "string") {
        const layout = layoutStore.getNodeLayoutRef(item.id).value;
        if (layout) {
          allBounds.push([
            layout.bounds.x,
            layout.bounds.y,
            layout.bounds.width,
            layout.bounds.height
          ]);
        }
      } else {
        if (item instanceof LGraphNode || item instanceof LGraphGroup) {
          allBounds.push([
            item.pos[0],
            item.pos[1] - LiteGraph.NODE_TITLE_HEIGHT,
            item.size[0],
            item.size[1] + LiteGraph.NODE_TITLE_HEIGHT
          ]);
        }
      }
    }
    const unionBounds = computeUnionBounds(allBounds);
    if (!unionBounds) return;
    worldPosition.value = {
      x: unionBounds.x + unionBounds.width / 2,
      // createBounds() applied a default padding of 10px
      // so adjust Y to maintain visual consistency
      y: unionBounds.y - 10
    };
    updateTransform();
  }, "updateSelectionBounds");
  const updateTransform = /* @__PURE__ */ __name(() => {
    if (!visible.value) return;
    const { scale, offset } = lgCanvas.ds;
    const screenX = (worldPosition.value.x + offset[0]) * scale + canvasLeft.value;
    const screenY = (worldPosition.value.y + offset[1]) * scale + canvasTop.value;
    if (toolboxRef.value) {
      toolboxRef.value.style.setProperty("--tb-x", `${screenX}px`);
      toolboxRef.value.style.setProperty("--tb-y", `${screenY}px`);
    }
  }, "updateTransform");
  const { resume: startSync, pause: stopSync } = useRafFn(updateTransform);
  watch(
    () => canvasStore.getCanvas().state.selectionChanged,
    (changed) => {
      if (changed) {
        if (moreOptionsRestorePending.value || moreOptionsSelectionSignature) {
          moreOptionsRestorePending.value = false;
          moreOptionsWasOpenBeforeDrag = false;
          if (!moreOptionsOpen.value) {
            moreOptionsSelectionSignature = null;
          } else {
            moreOptionsSelectionSignature = buildSelectionSignature(canvasStore);
          }
        }
        updateSelectionBounds();
        canvasStore.getCanvas().state.selectionChanged = false;
        if (visible.value) {
          startSync();
        } else {
          stopSync();
        }
      }
    },
    { immediate: true }
  );
  watch(
    () => moreOptionsOpen.value,
    (v) => {
      if (v) {
        moreOptionsSelectionSignature = buildSelectionSignature(canvasStore);
      } else if (!canvasStore.canvas?.state?.draggingItems) {
        moreOptionsSelectionSignature = null;
        if (moreOptionsRestorePending.value)
          moreOptionsRestorePending.value = false;
      }
    }
  );
  const handleDragStateChange = /* @__PURE__ */ __name((dragging) => {
    if (dragging) {
      handleDragStart();
      return;
    }
    handleDragEnd();
  }, "handleDragStateChange");
  const handleDragStart = /* @__PURE__ */ __name(() => {
    visible.value = false;
    if (!moreOptionsOpen.value) {
      moreOptionsRestorePending.value = false;
      moreOptionsWasOpenBeforeDrag = false;
      return;
    }
    const currentSig = buildSelectionSignature(canvasStore);
    const selectionChanged = currentSig !== moreOptionsSelectionSignature;
    if (selectionChanged) {
      moreOptionsSelectionSignature = null;
    }
    moreOptionsOpen.value = false;
    moreOptionsWasOpenBeforeDrag = true;
    moreOptionsRestorePending.value = !!moreOptionsSelectionSignature;
    if (moreOptionsRestorePending.value) {
      forceCloseMoreOptionsSignal.value++;
      return;
    }
    moreOptionsWasOpenBeforeDrag = false;
  }, "handleDragStart");
  const handleDragEnd = /* @__PURE__ */ __name(() => {
    requestAnimationFrame(() => {
      updateSelectionBounds();
      const selectionMatches = currentSelectionMatchesSignature(canvasStore);
      const shouldRestore = moreOptionsWasOpenBeforeDrag && visible.value && moreOptionsRestorePending.value && selectionMatches;
      moreOptionsRestorePending.value = shouldRestore && moreOptionsRestorePending.value;
      moreOptionsWasOpenBeforeDrag = false;
      if (shouldRestore) {
        restoreMoreOptionsSignal.value++;
      }
    });
  }, "handleDragEnd");
  const isDragging = computed(() => {
    const litegraphDragging = canvasStore.canvas?.state?.draggingItems ?? false;
    const vueNodeDragging = shouldRenderVueNodes.value && layoutStore.isDraggingVueNodes.value;
    return litegraphDragging || vueNodeDragging;
  });
  watch(isDragging, handleDragStateChange);
  onUnmounted(() => {
    resetMoreOptionsState();
  });
  return {
    visible
  };
}
__name(useSelectionToolboxPosition, "useSelectionToolboxPosition");
function resetMoreOptionsState() {
  moreOptionsOpen.value = false;
  moreOptionsRestorePending.value = false;
  moreOptionsWasOpenBeforeDrag = false;
  moreOptionsSelectionSignature = null;
}
__name(resetMoreOptionsState, "resetMoreOptionsState");
function useFrameNodes() {
  const settingStore = useSettingStore();
  const titleEditorStore = useTitleEditorStore();
  const { hasMultipleSelection } = useSelectionState();
  const canFrame = computed(() => hasMultipleSelection.value);
  const frameNodes = /* @__PURE__ */ __name(() => {
    const { canvas } = app;
    if (!canvas.selectedItems?.size) return;
    const group = new LGraphGroup();
    const padding = settingStore.get("Comfy.GroupSelectedNodes.Padding");
    group.resizeTo(canvas.selectedItems, padding);
    canvas.graph?.add(group);
    titleEditorStore.titleEditorTarget = group;
  }, "frameNodes");
  return { frameNodes, canFrame };
}
__name(useFrameNodes, "useFrameNodes");
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "FrameNodes",
  setup(__props) {
    const { frameNodes } = useFrameNodes();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        class: "frame-nodes-button",
        text: "",
        severity: "secondary",
        onClick: unref(frameNodes)
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--frame] h-4 w-4" }, null, -1)
        ])),
        _: 1
      }, 8, ["onClick"])), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.frameNodes"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
function useCanvasRefresh() {
  const canvasStore = useCanvasStore();
  const workflowStore = useWorkflowStore();
  const refreshCanvas = /* @__PURE__ */ __name(() => {
    canvasStore.canvas?.emitBeforeChange();
    canvasStore.canvas?.setDirty(true, true);
    canvasStore.canvas?.graph?.afterChange();
    canvasStore.canvas?.emitAfterChange();
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "refreshCanvas");
  return {
    refreshCanvas
  };
}
__name(useCanvasRefresh, "useCanvasRefresh");
function useNodeCustomization() {
  const { t: t2 } = useI18n();
  const canvasStore = useCanvasStore();
  const colorPaletteStore = useColorPaletteStore();
  const canvasRefresh = useCanvasRefresh();
  const isLightTheme = computed(
    () => colorPaletteStore.completedActivePalette.light_theme
  );
  const toLightThemeColor = /* @__PURE__ */ __name((color) => adjustColor(color, { lightness: 0.5 }), "toLightThemeColor");
  const NO_COLOR_OPTION = {
    name: "noColor",
    localizedName: t2("color.noColor"),
    value: {
      dark: LiteGraph.NODE_DEFAULT_BGCOLOR,
      light: toLightThemeColor(LiteGraph.NODE_DEFAULT_BGCOLOR)
    }
  };
  const colorOptions = [
    NO_COLOR_OPTION,
    ...Object.entries(LGraphCanvas.node_colors).map(([name, color]) => ({
      name,
      localizedName: t2(`color.${name}`),
      value: {
        dark: color.bgcolor,
        light: toLightThemeColor(color.bgcolor)
      }
    }))
  ];
  const shapeOptions = [
    {
      name: "default",
      localizedName: t2("shape.default"),
      value: RenderShape.ROUND
    },
    {
      name: "box",
      localizedName: t2("shape.box"),
      value: RenderShape.BOX
    },
    {
      name: "card",
      localizedName: t2("shape.CARD"),
      value: RenderShape.CARD
    }
  ];
  const applyColor = /* @__PURE__ */ __name((colorOption) => {
    const colorName = colorOption?.name ?? NO_COLOR_OPTION.name;
    const canvasColorOption = colorName === NO_COLOR_OPTION.name ? null : LGraphCanvas.node_colors[colorName];
    for (const item of canvasStore.selectedItems) {
      if (isColorable(item)) {
        item.setColorOption(canvasColorOption);
      }
    }
    canvasRefresh.refreshCanvas();
  }, "applyColor");
  const applyShape = /* @__PURE__ */ __name((shapeOption) => {
    const selectedNodes = Array.from(canvasStore.selectedItems).filter(
      (item) => item instanceof LGraphNode
    );
    if (selectedNodes.length === 0) {
      return;
    }
    selectedNodes.forEach((node) => {
      node.shape = shapeOption.value;
    });
    canvasRefresh.refreshCanvas();
  }, "applyShape");
  const getCurrentColor = /* @__PURE__ */ __name(() => {
    const selectedItems = Array.from(canvasStore.selectedItems);
    if (selectedItems.length === 0) return null;
    const firstColorableItem = selectedItems.find((item) => isColorable(item));
    if (!firstColorableItem || !isColorable(firstColorableItem)) return null;
    const currentColorOption = firstColorableItem.getColorOption();
    const currentBgColor = currentColorOption?.bgcolor ?? null;
    return colorOptions.find(
      (option) => option.value.dark === currentBgColor || option.value.light === currentBgColor
    ) ?? NO_COLOR_OPTION;
  }, "getCurrentColor");
  const getCurrentShape = /* @__PURE__ */ __name(() => {
    const selectedNodes = Array.from(canvasStore.selectedItems).filter(
      (item) => item instanceof LGraphNode
    );
    if (selectedNodes.length === 0) return null;
    const firstNode = selectedNodes[0];
    const currentShape = firstNode.shape ?? RenderShape.ROUND;
    return shapeOptions.find((option) => option.value === currentShape) ?? shapeOptions[0];
  }, "getCurrentShape");
  return {
    colorOptions,
    shapeOptions,
    applyColor,
    applyShape,
    getCurrentColor,
    getCurrentShape,
    isLightTheme
  };
}
__name(useNodeCustomization, "useNodeCustomization");
function useGroupMenuOptions() {
  const { t: t2 } = useI18n();
  const canvasStore = useCanvasStore();
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const canvasRefresh = useCanvasRefresh();
  const { shapeOptions, colorOptions, isLightTheme } = useNodeCustomization();
  const getFitGroupToNodesOption = /* @__PURE__ */ __name((groupContext) => ({
    label: "Fit Group To Nodes",
    icon: "icon-[lucide--move-diagonal-2]",
    action: /* @__PURE__ */ __name(() => {
      try {
        groupContext.recomputeInsideNodes();
      } catch (e) {
        console.warn("Failed to recompute group nodes:", e);
        return;
      }
      const padding = settingStore.get("Comfy.GroupSelectedNodes.Padding");
      groupContext.resizeTo(groupContext.children, padding);
      groupContext.graph?.change();
      canvasStore.canvas?.setDirty(true, true);
      workflowStore.activeWorkflow?.changeTracker?.checkState();
    }, "action")
  }), "getFitGroupToNodesOption");
  const getGroupShapeOptions = /* @__PURE__ */ __name((groupContext, bump) => ({
    label: t2("contextMenu.Shape"),
    icon: "icon-[lucide--box]",
    hasSubmenu: true,
    submenu: shapeOptions.map((shape) => ({
      label: shape.localizedName,
      action: /* @__PURE__ */ __name(() => {
        const nodes = groupContext.nodes || [];
        nodes.forEach((node) => node.shape = shape.value);
        canvasRefresh.refreshCanvas();
        bump();
      }, "action")
    }))
  }), "getGroupShapeOptions");
  const getGroupColorOptions = /* @__PURE__ */ __name((groupContext, bump) => ({
    label: t2("contextMenu.Color"),
    icon: "icon-[lucide--palette]",
    hasSubmenu: true,
    submenu: colorOptions.map((colorOption) => ({
      label: colorOption.localizedName,
      color: isLightTheme.value ? colorOption.value.light : colorOption.value.dark,
      action: /* @__PURE__ */ __name(() => {
        groupContext.color = isLightTheme.value ? colorOption.value.light : colorOption.value.dark;
        canvasRefresh.refreshCanvas();
        bump();
      }, "action")
    }))
  }), "getGroupColorOptions");
  const getGroupModeOptions = /* @__PURE__ */ __name((groupContext, bump) => {
    const options = [];
    try {
      groupContext.recomputeInsideNodes();
    } catch (e) {
      console.warn("Failed to recompute group nodes for mode options:", e);
      return options;
    }
    const groupNodes = groupContext.nodes || [];
    if (!groupNodes.length) return options;
    let allSame = true;
    for (let i = 1; i < groupNodes.length; i++) {
      if (groupNodes[i].mode !== groupNodes[0].mode) {
        allSame = false;
        break;
      }
    }
    const createModeAction = /* @__PURE__ */ __name((label, mode) => ({
      label: t2(`selectionToolbox.${label}`),
      icon: mode === LGraphEventMode.BYPASS ? "icon-[lucide--ban]" : mode === LGraphEventMode.NEVER ? "icon-[lucide--zap-off]" : "icon-[lucide--play]",
      action: /* @__PURE__ */ __name(() => {
        groupNodes.forEach((n) => {
          n.mode = mode;
        });
        canvasStore.canvas?.setDirty(true, true);
        groupContext.graph?.change();
        workflowStore.activeWorkflow?.changeTracker?.checkState();
        bump();
      }, "action")
    }), "createModeAction");
    if (allSame) {
      const current = groupNodes[0].mode;
      switch (current) {
        case LGraphEventMode.ALWAYS:
          options.push(
            createModeAction("Set Group Nodes to Never", LGraphEventMode.NEVER)
          );
          options.push(
            createModeAction("Bypass Group Nodes", LGraphEventMode.BYPASS)
          );
          break;
        case LGraphEventMode.NEVER:
          options.push(
            createModeAction(
              "Set Group Nodes to Always",
              LGraphEventMode.ALWAYS
            )
          );
          options.push(
            createModeAction("Bypass Group Nodes", LGraphEventMode.BYPASS)
          );
          break;
        case LGraphEventMode.BYPASS:
          options.push(
            createModeAction(
              "Set Group Nodes to Always",
              LGraphEventMode.ALWAYS
            )
          );
          options.push(
            createModeAction("Set Group Nodes to Never", LGraphEventMode.NEVER)
          );
          break;
        default:
          options.push(
            createModeAction(
              "Set Group Nodes to Always",
              LGraphEventMode.ALWAYS
            )
          );
          options.push(
            createModeAction("Set Group Nodes to Never", LGraphEventMode.NEVER)
          );
          options.push(
            createModeAction("Bypass Group Nodes", LGraphEventMode.BYPASS)
          );
          break;
      }
    } else {
      options.push(
        createModeAction("Set Group Nodes to Always", LGraphEventMode.ALWAYS)
      );
      options.push(
        createModeAction("Set Group Nodes to Never", LGraphEventMode.NEVER)
      );
      options.push(
        createModeAction("Bypass Group Nodes", LGraphEventMode.BYPASS)
      );
    }
    return options;
  }, "getGroupModeOptions");
  return {
    getFitGroupToNodesOption,
    getGroupShapeOptions,
    getGroupColorOptions,
    getGroupModeOptions
  };
}
__name(useGroupMenuOptions, "useGroupMenuOptions");
function useImageMenuOptions() {
  const { t: t2 } = useI18n();
  const openMaskEditor = /* @__PURE__ */ __name(() => {
    const commandStore = useCommandStore();
    void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
  }, "openMaskEditor");
  const openImage = /* @__PURE__ */ __name((node) => {
    if (!node?.imgs?.length) return;
    const img = node.imgs[node.imageIndex ?? 0];
    if (!img) return;
    const url = new URL(img.src);
    url.searchParams.delete("preview");
    window.open(url.toString(), "_blank");
  }, "openImage");
  const copyImage = /* @__PURE__ */ __name(async (node) => {
    if (!node?.imgs?.length) return;
    const img = node.imgs[node.imageIndex ?? 0];
    if (!img) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    try {
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });
      if (!blob) {
        console.warn("Failed to create image blob");
        return;
      }
      if (!navigator.clipboard?.write) {
        console.warn("Clipboard API not available");
        return;
      }
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
    } catch (error) {
      console.error("Failed to copy image to clipboard:", error);
    }
  }, "copyImage");
  const saveImage = /* @__PURE__ */ __name((node) => {
    if (!node?.imgs?.length) return;
    const img = node.imgs[node.imageIndex ?? 0];
    if (!img) return;
    try {
      const url = new URL(img.src);
      url.searchParams.delete("preview");
      downloadFile(url.toString());
    } catch (error) {
      console.error("Failed to save image:", error);
    }
  }, "saveImage");
  const getImageMenuOptions = /* @__PURE__ */ __name((node) => {
    if (!node?.imgs?.length) return [];
    return [
      {
        label: t2("contextMenu.Open in Mask Editor"),
        action: /* @__PURE__ */ __name(() => openMaskEditor(), "action")
      },
      {
        label: t2("contextMenu.Open Image"),
        icon: "icon-[lucide--external-link]",
        action: /* @__PURE__ */ __name(() => openImage(node), "action")
      },
      {
        label: t2("contextMenu.Copy Image"),
        icon: "icon-[lucide--copy]",
        action: /* @__PURE__ */ __name(() => copyImage(node), "action")
      },
      {
        label: t2("contextMenu.Save Image"),
        icon: "icon-[lucide--download]",
        action: /* @__PURE__ */ __name(() => saveImage(node), "action")
      }
    ];
  }, "getImageMenuOptions");
  return {
    getImageMenuOptions
  };
}
__name(useImageMenuOptions, "useImageMenuOptions");
function useSelectedNodeActions() {
  const { getSelectedNodes, toggleSelectedNodesMode } = useSelectedLiteGraphItems();
  const commandStore = useCommandStore();
  const workflowStore = useWorkflowStore();
  const adjustNodeSize = /* @__PURE__ */ __name(() => {
    const selectedNodes = getSelectedNodes();
    selectedNodes.forEach((node) => {
      const optimalSize = node.computeSize();
      node.setSize([optimalSize[0], optimalSize[1]]);
    });
    app.canvas.setDirty(true, true);
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "adjustNodeSize");
  const toggleNodeCollapse = /* @__PURE__ */ __name(() => {
    const selectedNodes = getSelectedNodes();
    selectedNodes.forEach((node) => {
      node.collapse();
    });
    app.canvas.setDirty(true, true);
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "toggleNodeCollapse");
  const toggleNodePin = /* @__PURE__ */ __name(() => {
    const selectedNodes = getSelectedNodes();
    selectedNodes.forEach((node) => {
      node.pin(!node.pinned);
    });
    app.canvas.setDirty(true, true);
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "toggleNodePin");
  const toggleNodeBypass = /* @__PURE__ */ __name(() => {
    toggleSelectedNodesMode(LGraphEventMode.BYPASS);
    app.canvas.setDirty(true, true);
  }, "toggleNodeBypass");
  const runBranch = /* @__PURE__ */ __name(async () => {
    const selectedNodes = getSelectedNodes();
    const selectedOutputNodes = filterOutputNodes(selectedNodes);
    if (selectedOutputNodes.length === 0) return;
    await commandStore.execute("Comfy.QueueSelectedOutputNodes");
  }, "runBranch");
  return {
    adjustNodeSize,
    toggleNodeCollapse,
    toggleNodePin,
    toggleNodeBypass,
    runBranch
  };
}
__name(useSelectedNodeActions, "useSelectedNodeActions");
function useNodeMenuOptions() {
  const { t: t2 } = useI18n();
  const { shapeOptions, applyShape, applyColor, colorOptions, isLightTheme } = useNodeCustomization();
  const {
    adjustNodeSize,
    toggleNodeCollapse,
    toggleNodePin,
    toggleNodeBypass,
    runBranch
  } = useSelectedNodeActions();
  const shapeSubmenu = computed(
    () => shapeOptions.map((shape) => ({
      label: shape.localizedName,
      action: /* @__PURE__ */ __name(() => applyShape(shape), "action")
    }))
  );
  const colorSubmenu = computed(() => {
    return colorOptions.map((colorOption) => ({
      label: colorOption.localizedName,
      color: isLightTheme.value ? colorOption.value.light : colorOption.value.dark,
      action: /* @__PURE__ */ __name(() => applyColor(colorOption.name === "noColor" ? null : colorOption), "action")
    }));
  });
  const getAdjustSizeOption = /* @__PURE__ */ __name(() => ({
    label: t2("contextMenu.Adjust Size"),
    icon: "icon-[lucide--move-diagonal-2]",
    action: adjustNodeSize
  }), "getAdjustSizeOption");
  const getNodeVisualOptions = /* @__PURE__ */ __name((states, bump) => [
    {
      label: states.collapsed ? t2("contextMenu.Expand Node") : t2("contextMenu.Minimize Node"),
      icon: states.collapsed ? "icon-[lucide--maximize-2]" : "icon-[lucide--minimize-2]",
      action: /* @__PURE__ */ __name(() => {
        toggleNodeCollapse();
        bump();
      }, "action")
    },
    {
      label: t2("contextMenu.Shape"),
      icon: "icon-[lucide--box]",
      hasSubmenu: true,
      submenu: shapeSubmenu.value,
      action: /* @__PURE__ */ __name(() => {
      }, "action")
    },
    {
      label: t2("contextMenu.Color"),
      icon: "icon-[lucide--palette]",
      hasSubmenu: true,
      submenu: colorSubmenu.value,
      action: /* @__PURE__ */ __name(() => {
      }, "action")
    }
  ], "getNodeVisualOptions");
  const getPinOption = /* @__PURE__ */ __name((states, bump) => ({
    label: states.pinned ? t2("contextMenu.Unpin") : t2("contextMenu.Pin"),
    icon: states.pinned ? "icon-[lucide--pin-off]" : "icon-[lucide--pin]",
    action: /* @__PURE__ */ __name(() => {
      toggleNodePin();
      bump();
    }, "action")
  }), "getPinOption");
  const getBypassOption = /* @__PURE__ */ __name((states, bump) => ({
    label: states.bypassed ? t2("contextMenu.Remove Bypass") : t2("contextMenu.Bypass"),
    icon: states.bypassed ? "icon-[lucide--zap-off]" : "icon-[lucide--ban]",
    shortcut: "Ctrl+B",
    action: /* @__PURE__ */ __name(() => {
      toggleNodeBypass();
      bump();
    }, "action")
  }), "getBypassOption");
  const getRunBranchOption = /* @__PURE__ */ __name(() => ({
    label: t2("contextMenu.Run Branch"),
    icon: "icon-[lucide--play]",
    action: runBranch
  }), "getRunBranchOption");
  const getNodeInfoOption = /* @__PURE__ */ __name((showNodeHelp) => ({
    label: t2("contextMenu.Node Info"),
    icon: "icon-[lucide--info]",
    action: showNodeHelp
  }), "getNodeInfoOption");
  return {
    getNodeInfoOption,
    getAdjustSizeOption,
    getNodeVisualOptions,
    getPinOption,
    getBypassOption,
    getRunBranchOption,
    colorSubmenu
  };
}
__name(useNodeMenuOptions, "useNodeMenuOptions");
function useNodeArrangement() {
  const { t: t2 } = useI18n();
  const canvasStore = useCanvasStore();
  const canvasRefresh = useCanvasRefresh();
  const alignOptions = [
    {
      name: "top",
      localizedName: t2("contextMenu.Top"),
      value: "top",
      icon: "icon-[lucide--align-start-vertical]"
    },
    {
      name: "bottom",
      localizedName: t2("contextMenu.Bottom"),
      value: "bottom",
      icon: "icon-[lucide--align-end-vertical]"
    },
    {
      name: "left",
      localizedName: t2("contextMenu.Left"),
      value: "left",
      icon: "icon-[lucide--align-start-horizontal]"
    },
    {
      name: "right",
      localizedName: t2("contextMenu.Right"),
      value: "right",
      icon: "icon-[lucide--align-end-horizontal]"
    }
  ];
  const distributeOptions = [
    {
      name: "horizontal",
      localizedName: t2("contextMenu.Horizontal"),
      value: true,
      icon: "icon-[lucide--align-center-horizontal]"
    },
    {
      name: "vertical",
      localizedName: t2("contextMenu.Vertical"),
      value: false,
      icon: "icon-[lucide--align-center-vertical]"
    }
  ];
  const applyAlign = /* @__PURE__ */ __name((alignOption) => {
    const selectedNodes = Array.from(canvasStore.selectedItems).filter(
      (item) => isLGraphNode(item)
    );
    if (selectedNodes.length === 0) {
      return;
    }
    alignNodes(selectedNodes, alignOption.value);
    canvasRefresh.refreshCanvas();
  }, "applyAlign");
  const applyDistribute = /* @__PURE__ */ __name((distributeOption) => {
    const selectedNodes = Array.from(canvasStore.selectedItems).filter(
      (item) => isLGraphNode(item)
    );
    if (selectedNodes.length < 2) {
      return;
    }
    distributeNodes(selectedNodes, distributeOption.value);
    canvasRefresh.refreshCanvas();
  }, "applyDistribute");
  return {
    alignOptions,
    distributeOptions,
    applyAlign,
    applyDistribute
  };
}
__name(useNodeArrangement, "useNodeArrangement");
function useSelectionOperations() {
  const canvasStore = useCanvasStore();
  const toastStore = useToastStore();
  const dialogService = useDialogService();
  const titleEditorStore = useTitleEditorStore();
  const workflowStore = useWorkflowStore();
  const copySelection = /* @__PURE__ */ __name(() => {
    const canvas = app.canvas;
    if (!canvas.selectedItems || canvas.selectedItems.size === 0) {
      toastStore.add({
        severity: "warn",
        summary: t("g.nothingToCopy"),
        detail: t("g.selectItemsToCopy"),
        life: 3e3
      });
      return;
    }
    canvas.copyToClipboard();
    toastStore.add({
      severity: "success",
      summary: t("g.copied"),
      detail: t("g.itemsCopiedToClipboard"),
      life: 2e3
    });
  }, "copySelection");
  const pasteSelection = /* @__PURE__ */ __name(() => {
    const canvas = app.canvas;
    canvas.pasteFromClipboard({ connectInputs: false });
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "pasteSelection");
  const duplicateSelection = /* @__PURE__ */ __name(() => {
    const canvas = app.canvas;
    if (!canvas.selectedItems || canvas.selectedItems.size === 0) {
      toastStore.add({
        severity: "warn",
        summary: t("g.nothingToDuplicate"),
        detail: t("g.selectItemsToDuplicate"),
        life: 3e3
      });
      return;
    }
    canvas.copyToClipboard();
    canvas.selectedItems.clear();
    canvasStore.updateSelectedItems();
    canvas.pasteFromClipboard({ connectInputs: false });
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "duplicateSelection");
  const deleteSelection = /* @__PURE__ */ __name(() => {
    const canvas = app.canvas;
    if (!canvas.selectedItems || canvas.selectedItems.size === 0) {
      toastStore.add({
        severity: "warn",
        summary: t("g.nothingToDelete"),
        detail: t("g.selectItemsToDelete"),
        life: 3e3
      });
      return;
    }
    canvas.deleteSelected();
    canvas.setDirty(true, true);
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "deleteSelection");
  const renameSelection = /* @__PURE__ */ __name(async () => {
    const selectedItems = Array.from(canvasStore.selectedItems);
    if (selectedItems.length === 1) {
      const item = selectedItems[0];
      if (item instanceof LGraphNode) {
        titleEditorStore.titleEditorTarget = item;
        return;
      }
      const currentTitle = "title" in item ? item.title : "";
      const newTitle = await dialogService.prompt({
        title: t("g.rename"),
        message: t("g.enterNewName"),
        defaultValue: currentTitle
      });
      if (newTitle && newTitle !== currentTitle) {
        if ("title" in item) {
          const titledItem = item;
          titledItem.title = newTitle;
          app.canvas.setDirty(true, true);
          workflowStore.activeWorkflow?.changeTracker?.checkState();
        }
      }
      return;
    }
    if (selectedItems.length > 1) {
      const baseTitle = await dialogService.prompt({
        title: t("g.batchRename"),
        message: t("g.enterBaseName"),
        defaultValue: "Item"
      });
      if (baseTitle) {
        selectedItems.forEach((item, index) => {
          if ("title" in item) {
            const titledItem = item;
            titledItem.title = `${baseTitle} ${index + 1}`;
          }
        });
        app.canvas.setDirty(true, true);
        workflowStore.activeWorkflow?.changeTracker?.checkState();
      }
      return;
    }
    toastStore.add({
      severity: "warn",
      summary: t("g.nothingToRename"),
      detail: t("g.selectItemsToRename"),
      life: 3e3
    });
  }, "renameSelection");
  return {
    copySelection,
    pasteSelection,
    duplicateSelection,
    deleteSelection,
    renameSelection
  };
}
__name(useSelectionOperations, "useSelectionOperations");
function useSubgraphOperations() {
  const { getSelectedNodes } = useSelectedLiteGraphItems();
  const canvasStore = useCanvasStore();
  const workflowStore = useWorkflowStore();
  const nodeOutputStore = useNodeOutputStore();
  const nodeDefStore = useNodeDefStore();
  const nodeBookmarkStore = useNodeBookmarkStore();
  const convertToSubgraph = /* @__PURE__ */ __name(() => {
    const canvas = canvasStore.getCanvas();
    const graph = canvas.subgraph ?? canvas.graph;
    if (!graph) {
      return null;
    }
    const res = graph.convertToSubgraph(canvas.selectedItems);
    if (!res) {
      return;
    }
    const { node } = res;
    canvas.select(node);
    canvasStore.updateSelectedItems();
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "convertToSubgraph");
  const unpackSubgraph = /* @__PURE__ */ __name(() => {
    const canvas = canvasStore.getCanvas();
    const graph = canvas.subgraph ?? canvas.graph;
    if (!graph) {
      return;
    }
    const selectedItems = Array.from(canvas.selectedItems);
    const subgraphNodes = selectedItems.filter(
      (item) => item instanceof SubgraphNode
    );
    if (subgraphNodes.length === 0) {
      return;
    }
    subgraphNodes.forEach((subgraphNode) => {
      nodeOutputStore.revokeSubgraphPreviews(subgraphNode);
      graph.unpackSubgraph(subgraphNode);
    });
    workflowStore.activeWorkflow?.changeTracker?.checkState();
  }, "unpackSubgraph");
  const addSubgraphToLibrary = /* @__PURE__ */ __name(async () => {
    const selectedItems = Array.from(canvasStore.selectedItems);
    if (selectedItems.length === 1) {
      const item = selectedItems[0];
      if (isLGraphNode(item)) {
        const nodeDef = nodeDefStore.fromLGraphNode(item);
        if (nodeDef) {
          await nodeBookmarkStore.addBookmark(nodeDef.nodePath);
          return;
        }
      }
    }
    const selectedNodes = getSelectedNodes();
    if (selectedNodes.length === 0) {
      return;
    }
    const hasSubgraphs = selectedNodes.some(
      (node) => node instanceof SubgraphNode
    );
    if (!hasSubgraphs) {
      convertToSubgraph();
      return;
    }
    for (const node of selectedNodes) {
      if (node instanceof SubgraphNode) {
        const nodeDef = nodeDefStore.fromLGraphNode(node);
        if (nodeDef) {
          await nodeBookmarkStore.addBookmark(nodeDef.nodePath);
        }
      }
    }
  }, "addSubgraphToLibrary");
  const isSubgraphSelected = /* @__PURE__ */ __name(() => {
    const selectedItems = Array.from(canvasStore.selectedItems);
    return selectedItems.some((item) => item instanceof SubgraphNode);
  }, "isSubgraphSelected");
  const hasSelectableNodes = /* @__PURE__ */ __name(() => {
    return getSelectedNodes().length > 0;
  }, "hasSelectableNodes");
  return {
    convertToSubgraph,
    unpackSubgraph,
    addSubgraphToLibrary,
    isSubgraphSelected,
    hasSelectableNodes
  };
}
__name(useSubgraphOperations, "useSubgraphOperations");
function useSelectionMenuOptions() {
  const { t: t2 } = useI18n();
  const {
    copySelection,
    duplicateSelection,
    deleteSelection,
    renameSelection
  } = useSelectionOperations();
  const { alignOptions, distributeOptions, applyAlign, applyDistribute } = useNodeArrangement();
  const { convertToSubgraph, unpackSubgraph, addSubgraphToLibrary } = useSubgraphOperations();
  const { frameNodes } = useFrameNodes();
  const alignSubmenu = computed(
    () => alignOptions.map((align) => ({
      label: align.localizedName,
      icon: align.icon,
      action: /* @__PURE__ */ __name(() => applyAlign(align), "action")
    }))
  );
  const distributeSubmenu = computed(
    () => distributeOptions.map((distribute) => ({
      label: distribute.localizedName,
      icon: distribute.icon,
      action: /* @__PURE__ */ __name(() => applyDistribute(distribute), "action")
    }))
  );
  const getBasicSelectionOptions = /* @__PURE__ */ __name(() => [
    {
      label: t2("contextMenu.Rename"),
      action: renameSelection
    },
    {
      label: t2("contextMenu.Copy"),
      shortcut: "Ctrl+C",
      action: copySelection
    },
    {
      label: t2("contextMenu.Duplicate"),
      shortcut: "Ctrl+D",
      action: duplicateSelection
    }
  ], "getBasicSelectionOptions");
  const getSubgraphOptions = /* @__PURE__ */ __name((hasSubgraphs) => {
    if (hasSubgraphs) {
      return [
        {
          label: t2("contextMenu.Add Subgraph to Library"),
          icon: "icon-[lucide--folder-plus]",
          action: addSubgraphToLibrary
        },
        {
          label: t2("contextMenu.Unpack Subgraph"),
          icon: "icon-[lucide--expand]",
          action: unpackSubgraph
        }
      ];
    } else {
      return [
        {
          label: t2("contextMenu.Convert to Subgraph"),
          icon: "icon-[lucide--shrink]",
          action: convertToSubgraph,
          badge: BadgeVariant.NEW
        }
      ];
    }
  }, "getSubgraphOptions");
  const getMultipleNodesOptions = /* @__PURE__ */ __name(() => {
    const convertToGroupNodes = /* @__PURE__ */ __name(() => {
      const commandStore = useCommandStore();
      void commandStore.execute(
        "Comfy.GroupNode.ConvertSelectedNodesToGroupNode"
      );
    }, "convertToGroupNodes");
    return [
      {
        label: t2("contextMenu.Convert to Group Node"),
        icon: "icon-[lucide--group]",
        action: convertToGroupNodes,
        badge: BadgeVariant.DEPRECATED
      },
      {
        label: t2("g.frameNodes"),
        icon: "icon-[lucide--frame]",
        action: frameNodes
      }
    ];
  }, "getMultipleNodesOptions");
  const getAlignmentOptions = /* @__PURE__ */ __name(() => [
    {
      label: t2("contextMenu.Align Selected To"),
      icon: "icon-[lucide--align-start-horizontal]",
      hasSubmenu: true,
      submenu: alignSubmenu.value,
      action: /* @__PURE__ */ __name(() => {
      }, "action")
    },
    {
      label: t2("contextMenu.Distribute Nodes"),
      icon: "icon-[lucide--align-center-horizontal]",
      hasSubmenu: true,
      submenu: distributeSubmenu.value,
      action: /* @__PURE__ */ __name(() => {
      }, "action")
    }
  ], "getAlignmentOptions");
  const getDeleteOption = /* @__PURE__ */ __name(() => ({
    label: t2("contextMenu.Delete"),
    icon: "icon-[lucide--trash-2]",
    shortcut: "Delete",
    action: deleteSelection
  }), "getDeleteOption");
  return {
    getBasicSelectionOptions,
    getSubgraphOptions,
    getMultipleNodesOptions,
    getDeleteOption,
    getAlignmentOptions,
    alignSubmenu,
    distributeSubmenu
  };
}
__name(useSelectionMenuOptions, "useSelectionMenuOptions");
var BadgeVariant = /* @__PURE__ */ ((BadgeVariant2) => {
  BadgeVariant2["NEW"] = "new";
  BadgeVariant2["DEPRECATED"] = "deprecated";
  return BadgeVariant2;
})(BadgeVariant || {});
let nodeOptionsInstance = null;
function toggleNodeOptions(event, element, clickedFromToolbox = false) {
  if (nodeOptionsInstance?.toggle) {
    nodeOptionsInstance.toggle(event, element, clickedFromToolbox);
  }
}
__name(toggleNodeOptions, "toggleNodeOptions");
function registerNodeOptionsInstance(instance) {
  nodeOptionsInstance = instance;
}
__name(registerNodeOptionsInstance, "registerNodeOptionsInstance");
function useMoreOptionsMenu() {
  const {
    selectedItems,
    selectedNodes,
    nodeDef,
    showNodeHelp,
    hasSubgraphs: hasSubgraphsComputed,
    hasImageNode,
    hasOutputNodesSelected,
    hasMultipleSelection,
    computeSelectionFlags
  } = useSelectionState();
  const { getImageMenuOptions } = useImageMenuOptions();
  const {
    getNodeInfoOption,
    getAdjustSizeOption,
    getNodeVisualOptions,
    getPinOption,
    getBypassOption,
    getRunBranchOption
  } = useNodeMenuOptions();
  const {
    getFitGroupToNodesOption,
    getGroupShapeOptions,
    getGroupColorOptions,
    getGroupModeOptions
  } = useGroupMenuOptions();
  const {
    getBasicSelectionOptions,
    getSubgraphOptions,
    getMultipleNodesOptions,
    getDeleteOption,
    getAlignmentOptions
  } = useSelectionMenuOptions();
  const hasSubgraphs = hasSubgraphsComputed;
  const hasMultipleNodes = hasMultipleSelection;
  const optionsVersion = ref(0);
  const bump = /* @__PURE__ */ __name(() => {
    optionsVersion.value++;
  }, "bump");
  const menuOptions = computed(() => {
    optionsVersion.value;
    const states = computeSelectionFlags();
    const selectedGroups = selectedItems.value.filter(
      isLGraphGroup
    );
    const groupContext = selectedGroups.length === 1 && selectedNodes.value.length === 0 ? selectedGroups[0] : null;
    const hasSubgraphsSelected = hasSubgraphs.value;
    const options = [];
    options.push(...getBasicSelectionOptions());
    options.push({ type: "divider" });
    if (nodeDef.value) {
      options.push(getNodeInfoOption(showNodeHelp));
    }
    if (groupContext) {
      options.push(getFitGroupToNodesOption(groupContext));
    } else {
      options.push(getAdjustSizeOption());
    }
    if (groupContext) {
      options.push(getGroupShapeOptions(groupContext, bump));
      options.push(getGroupColorOptions(groupContext, bump));
      options.push({ type: "divider" });
    } else {
      options.push(...getNodeVisualOptions(states, bump));
      options.push({ type: "divider" });
    }
    if (hasImageNode.value && selectedNodes.value.length > 0) {
      options.push(...getImageMenuOptions(selectedNodes.value[0]));
    }
    options.push(...getSubgraphOptions(hasSubgraphsSelected));
    if (hasMultipleNodes.value) {
      options.push(...getMultipleNodesOptions());
    }
    options.push({ type: "divider" });
    if (!groupContext) {
      options.push(getPinOption(states, bump));
    }
    if (hasMultipleNodes.value) {
      options.push(...getAlignmentOptions());
    }
    if (groupContext) {
      options.push(...getGroupModeOptions(groupContext, bump));
    } else {
      options.push(getBypassOption(states, bump));
    }
    if (hasOutputNodesSelected.value) {
      options.push(getRunBranchOption());
    }
    options.push({ type: "divider" });
    options.push(getDeleteOption());
    return options;
  });
  const menuOptionsWithSubmenu = computed(
    () => menuOptions.value.filter((option) => option.hasSubmenu && option.submenu)
  );
  return {
    menuOptions,
    menuOptionsWithSubmenu,
    bump,
    hasSubgraphs,
    registerNodeOptionsInstance
  };
}
__name(useMoreOptionsMenu, "useMoreOptionsMenu");
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "NodeOptionsButton",
  setup(__props) {
    const buttonRef = ref(null);
    const handleClick = /* @__PURE__ */ __name((event) => {
      const el = buttonRef.value?.$el || buttonRef.value;
      const buttonEl = el instanceof HTMLElement ? el : null;
      if (buttonEl) {
        toggleNodeOptions(event, buttonEl, true);
      }
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        ref_key: "buttonRef",
        ref: buttonRef,
        "data-testid": "more-options-button",
        text: "",
        class: "h-8 w-8 px-0",
        severity: "secondary",
        onClick: handleClick
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--more-vertical] h-4 w-4" }, null, -1)
        ])),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.moreOptions"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$J = {};
const _hoisted_1$x = { class: "h-6 w-px self-center bg-smoke-300/10 dark-theme:bg-smoke-600/10" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$x);
}
__name(_sfc_render$1, "_sfc_render$1");
const VerticalDivider = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$1]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "SelectionToolbox",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const extensionService = useExtensionService();
    const canvasInteractions = useCanvasInteractions();
    const toolboxRef = ref();
    const { visible } = useSelectionToolboxPosition(toolboxRef);
    const extensionToolboxCommands = computed(() => {
      const commandIds = new Set(
        canvasStore.selectedItems.map(
          (item) => extensionService.invokeExtensions("getSelectionToolboxCommands", item).flat()
        ).flat()
      );
      return Array.from(commandIds).map((commandId) => commandStore.getCommand(commandId)).filter((command) => command !== void 0);
    });
    const {
      hasAnySelection,
      hasMultipleSelection,
      isSingleNode,
      isSingleSubgraph,
      isSingleImageNode,
      hasAny3DNodeSelected,
      hasOutputNodesSelected,
      nodeDef
    } = useSelectionState();
    const showInfoButton = computed(() => !!nodeDef.value);
    const showColorPicker = computed(() => hasAnySelection.value);
    const showConvertToSubgraph = computed(() => hasAnySelection.value);
    const showFrameNodes = computed(() => hasMultipleSelection.value);
    const showSubgraphButtons = computed(() => isSingleSubgraph.value);
    const showBypass = computed(
      () => isSingleNode.value || isSingleSubgraph.value || hasMultipleSelection.value
    );
    const showLoad3DViewer = computed(() => hasAny3DNodeSelected.value);
    const showMaskEditor = computed(() => isSingleImageNode.value);
    const showDelete = computed(() => hasAnySelection.value);
    const showRefresh = computed(() => hasAnySelection.value);
    const showExecute = computed(() => hasOutputNodesSelected.value);
    const showAnyPrimaryActions = computed(
      () => showColorPicker.value || showConvertToSubgraph.value || showFrameNodes.value || showSubgraphButtons.value
    );
    const showAnyControlActions = computed(() => showBypass.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "toolboxRef",
        ref: toolboxRef,
        style: { "transform": "translate(var(--tb-x), var(--tb-y))" },
        class: "pointer-events-none fixed top-0 left-0 z-40"
      }, [
        createVNode(Transition, { name: "slide-up" }, {
          default: withCtx(() => [
            unref(visible) ? (openBlock(), createBlock(unref(Panel), {
              key: 0,
              class: "selection-toolbox pointer-events-auto rounded-lg border border-interface-stroke bg-interface-panel-surface",
              pt: {
                header: "hidden",
                content: "p-2 h-12 flex flex-row gap-1"
              },
              onWheel: unref(canvasInteractions).forwardEventToCanvas
            }, {
              default: withCtx(() => [
                showDelete.value ? (openBlock(), createBlock(_sfc_main$T, { key: 0 })) : createCommentVNode("", true),
                showInfoButton.value && showAnyPrimaryActions.value ? (openBlock(), createBlock(VerticalDivider, { key: 1 })) : createCommentVNode("", true),
                showInfoButton.value ? (openBlock(), createBlock(_sfc_main$Q, { key: 2 })) : createCommentVNode("", true),
                showColorPicker.value ? (openBlock(), createBlock(ColorPickerButton, { key: 3 })) : createCommentVNode("", true),
                showFrameNodes.value ? (openBlock(), createBlock(_sfc_main$L, { key: 4 })) : createCommentVNode("", true),
                showConvertToSubgraph.value ? (openBlock(), createBlock(_sfc_main$U, { key: 5 })) : createCommentVNode("", true),
                showSubgraphButtons.value ? (openBlock(), createBlock(_sfc_main$V, { key: 6 })) : createCommentVNode("", true),
                showSubgraphButtons.value ? (openBlock(), createBlock(_sfc_main$M, { key: 7 })) : createCommentVNode("", true),
                showMaskEditor.value ? (openBlock(), createBlock(_sfc_main$O, { key: 8 })) : createCommentVNode("", true),
                showAnyPrimaryActions.value && showAnyControlActions.value ? (openBlock(), createBlock(VerticalDivider, { key: 9 })) : createCommentVNode("", true),
                showBypass.value ? (openBlock(), createBlock(_sfc_main$X, { key: 10 })) : createCommentVNode("", true),
                showRefresh.value ? (openBlock(), createBlock(_sfc_main$N, { key: 11 })) : createCommentVNode("", true),
                showLoad3DViewer.value ? (openBlock(), createBlock(_sfc_main$P, { key: 12 })) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(extensionToolboxCommands.value, (command) => {
                  return openBlock(), createBlock(_sfc_main$R, {
                    key: command.id,
                    command
                  }, null, 8, ["command"]);
                }), 128)),
                showExecute.value ? (openBlock(), createBlock(_sfc_main$S, { key: 13 })) : createCommentVNode("", true),
                createVNode(_sfc_main$K)
              ]),
              _: 1
            }, 8, ["onWheel"])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 512);
    };
  }
});
const SelectionToolbox = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-d1982b69"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "TitleEditor",
  setup(__props) {
    const settingStore = useSettingStore();
    const showInput = ref(false);
    const editedTitle = ref("");
    const { style: inputPositionStyle, updatePosition } = useAbsolutePosition();
    const inputFontStyle = ref({});
    const inputStyle = computed(() => ({
      ...inputPositionStyle.value,
      ...inputFontStyle.value
    }));
    const titleEditorStore = useTitleEditorStore();
    const canvasStore = useCanvasStore();
    const previousCanvasDraggable = ref(true);
    const onEdit = /* @__PURE__ */ __name((newValue) => {
      if (titleEditorStore.titleEditorTarget && newValue?.trim()) {
        const trimmedTitle = newValue.trim();
        titleEditorStore.titleEditorTarget.title = trimmedTitle;
        const target = titleEditorStore.titleEditorTarget;
        if (target instanceof LGraphNode && target.isSubgraphNode?.()) {
          target.subgraph.name = trimmedTitle;
        }
        app.graph.setDirtyCanvas(true, true);
      }
      showInput.value = false;
      titleEditorStore.titleEditorTarget = null;
      canvasStore.canvas.allow_dragcanvas = previousCanvasDraggable.value;
    }, "onEdit");
    watch(
      () => titleEditorStore.titleEditorTarget,
      (target) => {
        if (target === null) {
          return;
        }
        editedTitle.value = target.title;
        showInput.value = true;
        const canvas = canvasStore.canvas;
        previousCanvasDraggable.value = canvas.allow_dragcanvas;
        canvas.allow_dragcanvas = false;
        const scale = canvas.ds.scale;
        if (target instanceof LGraphGroup) {
          const group = target;
          updatePosition({
            pos: group.pos,
            size: [group.size[0], group.titleHeight]
          });
          inputFontStyle.value = { fontSize: `${group.font_size * scale}px` };
        } else if (target instanceof LGraphNode) {
          const node = target;
          const [x, y] = node.getBounding();
          updatePosition({
            pos: [x, y],
            size: [node.width, LiteGraph.NODE_TITLE_HEIGHT]
          });
          inputFontStyle.value = { fontSize: `${12 * scale}px` };
        }
      }
    );
    const canvasEventHandler = /* @__PURE__ */ __name((event) => {
      if (event.detail.subType === "group-double-click") {
        if (!settingStore.get("Comfy.Group.DoubleClickTitleToEdit")) {
          return;
        }
        const group = event.detail.group;
        const [_, y] = group.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= group.titleHeight) {
          titleEditorStore.titleEditorTarget = group;
        }
      } else if (event.detail.subType === "node-double-click") {
        if (!settingStore.get("Comfy.Node.DoubleClickTitleToEdit")) {
          return;
        }
        const node = event.detail.node;
        const [_, y] = node.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= 0) {
          titleEditorStore.titleEditorTarget = node;
        }
      }
    }, "canvasEventHandler");
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return showInput.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "group-title-editor node-title-editor",
        style: normalizeStyle(inputStyle.value)
      }, [
        createVNode(EditableText, {
          "is-editing": showInput.value,
          "model-value": editedTitle.value,
          onEdit
        }, null, 8, ["is-editing", "model-value"])
      ], 4)) : createCommentVNode("", true);
    };
  }
});
const TitleEditor = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-5a43f2bb"]]);
function useSubmenuPositioning() {
  const toggleSubmenu = /* @__PURE__ */ __name(async (option, event, submenu, currentSubmenu, menuOptionsWithSubmenu, submenuRefs) => {
    if (!option.label || !option.hasSubmenu) return;
    const isCurrentlyOpen = currentSubmenu.value === option.label;
    menuOptionsWithSubmenu.forEach((opt) => {
      const sm = submenuRefs[`submenu-${opt.label}`];
      if (sm) {
        sm.hide();
      }
    });
    currentSubmenu.value = null;
    if (!isCurrentlyOpen) {
      currentSubmenu.value = option.label;
      await nextTick();
      const menuItem = event.currentTarget;
      const menuItemRect = menuItem.getBoundingClientRect();
      const mainPopoverContent = menuItem.closest(
        '[data-pc-section="content"]'
      );
      if (mainPopoverContent) {
        const mainPopoverRect = mainPopoverContent.getBoundingClientRect();
        const tempTarget = createPositionedTarget(
          mainPopoverRect.right + 8,
          menuItemRect.top,
          `submenu-target-${option.label}`
        );
        const tempEvent = createMouseEvent(
          mainPopoverRect.right + 8,
          menuItemRect.top
        );
        submenu.show(tempEvent, tempTarget);
        cleanupTempTarget(tempTarget, 100);
      } else {
        const tempTarget = createPositionedTarget(
          menuItemRect.right + 8,
          menuItemRect.top,
          `submenu-fallback-target-${option.label}`
        );
        const tempEvent = createMouseEvent(
          menuItemRect.right + 8,
          menuItemRect.top
        );
        submenu.show(tempEvent, tempTarget);
        cleanupTempTarget(tempTarget, 100);
      }
    }
  }, "toggleSubmenu");
  const createPositionedTarget = /* @__PURE__ */ __name((left, top, id) => {
    const tempTarget = document.createElement("div");
    tempTarget.style.position = "absolute";
    tempTarget.style.left = `${left}px`;
    tempTarget.style.top = `${top}px`;
    tempTarget.style.width = "1px";
    tempTarget.style.height = "1px";
    tempTarget.style.pointerEvents = "none";
    tempTarget.style.visibility = "hidden";
    tempTarget.id = id;
    document.body.appendChild(tempTarget);
    return tempTarget;
  }, "createPositionedTarget");
  const createMouseEvent = /* @__PURE__ */ __name((clientX, clientY) => {
    return new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY
    });
  }, "createMouseEvent");
  const cleanupTempTarget = /* @__PURE__ */ __name((target, delay) => {
    setTimeout(() => {
      if (target.parentNode) {
        target.parentNode.removeChild(target);
      }
    }, delay);
  }, "cleanupTempTarget");
  const hideAllSubmenus = /* @__PURE__ */ __name((menuOptionsWithSubmenu, submenuRefs, currentSubmenu) => {
    menuOptionsWithSubmenu.forEach((option) => {
      const submenu = submenuRefs[`submenu-${option.label}`];
      if (submenu) {
        submenu.hide();
      }
    });
    currentSubmenu.value = null;
  }, "hideAllSubmenus");
  return {
    toggleSubmenu,
    hideAllSubmenus
  };
}
__name(useSubmenuPositioning, "useSubmenuPositioning");
const _hoisted_1$w = {
  key: 0,
  class: "my-1 h-px bg-smoke-200 dark-theme:bg-zinc-700"
};
const _hoisted_2$n = { class: "flex-1" };
const _hoisted_3$i = {
  key: 1,
  class: "flex h-3.5 min-w-3.5 items-center justify-center rounded bg-interface-menu-keybind-surface-default px-1 py-0 text-xxs"
};
const _hoisted_4$b = {
  key: 2,
  size: 14,
  class: "icon-[lucide--chevron-right] opacity-60"
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "MenuOptionItem",
  props: {
    option: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const { t: t2 } = useI18n();
    const props = __props;
    const emit = __emit;
    const handleClick = /* @__PURE__ */ __name((event) => {
      emit("click", props.option, event);
    }, "handleClick");
    return (_ctx, _cache) => {
      return _ctx.option.type === "divider" ? (openBlock(), createElementBlock("div", _hoisted_1$w)) : (openBlock(), createElementBlock("div", {
        key: 1,
        role: "button",
        class: "group flex cursor-pointer items-center gap-2 rounded px-3 py-1.5 text-left text-sm text-text-primary hover:bg-interface-menu-component-surface-hovered",
        onClick: handleClick
      }, [
        _ctx.option.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass([_ctx.option.icon, "h-4 w-4"])
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_2$n, toDisplayString(_ctx.option.label), 1),
        _ctx.option.shortcut ? (openBlock(), createElementBlock("span", _hoisted_3$i, toDisplayString(_ctx.option.shortcut), 1)) : createCommentVNode("", true),
        _ctx.option.hasSubmenu ? (openBlock(), createElementBlock("i", _hoisted_4$b)) : createCommentVNode("", true),
        _ctx.option.badge ? (openBlock(), createBlock(unref(Badge), {
          key: 3,
          severity: _ctx.option.badge === "new" ? "info" : "secondary",
          value: unref(t2)(_ctx.option.badge),
          class: normalizeClass({
            "rounded-4xl bg-azure-400 dark-theme:bg-azure-600": _ctx.option.badge === "new",
            "rounded-4xl bg-slate-100 dark-theme:bg-black": _ctx.option.badge === "deprecated",
            "h-4 gap-2.5 px-1 text-[9px] text-white uppercase": true
          })
        }, null, 8, ["severity", "value", "class"])) : createCommentVNode("", true)
      ]));
    };
  }
});
const _hoisted_1$v = ["title", "onClick"];
const _hoisted_2$m = {
  key: 0,
  class: "icon-[lucide--check] h-4 w-4 flex-shrink-0"
};
const _hoisted_3$h = {
  key: 1,
  class: "w-4 flex-shrink-0"
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "SubmenuPopover",
  props: {
    option: {}
  },
  emits: ["submenu-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getCurrentShape } = useNodeCustomization();
    const popover = ref();
    const show = /* @__PURE__ */ __name((event, target) => {
      popover.value?.show(event, target);
    }, "show");
    const hide = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "hide");
    __expose({
      show,
      hide
    });
    const handleSubmenuClick = /* @__PURE__ */ __name((subOption) => {
      emit("submenu-click", subOption);
    }, "handleSubmenuClick");
    const isShapeSelected = /* @__PURE__ */ __name((subOption) => {
      if (subOption.color) return false;
      const currentShape = getCurrentShape();
      if (!currentShape) return false;
      return currentShape.localizedName === subOption.label;
    }, "isShapeSelected");
    const isColorSubmenu = computed(() => {
      return props.option.submenu && props.option.submenu.length > 0 && props.option.submenu.every((item) => item.color && !item.icon);
    });
    const submenuPt = computed(() => ({
      root: {
        class: "absolute z-[60]"
      },
      content: {
        class: [
          "text-neutral dark-theme:text-white rounded-lg",
          "shadow-lg border border-zinc-200 dark-theme:border-zinc-700",
          "bg-interface-panel-surface"
        ]
      }
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Popover), {
        ref_key: "popover",
        ref: popover,
        "auto-z-index": true,
        "base-z-index": 1100,
        dismissable: true,
        "close-on-escape": true,
        unstyled: "",
        pt: submenuPt.value
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(
              isColorSubmenu.value ? "flex flex-col gap-1 p-2" : "flex flex-col p-2 min-w-40"
            )
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.option.submenu, (subOption) => {
              return openBlock(), createElementBlock("div", {
                key: subOption.label,
                class: normalizeClass(
                  isColorSubmenu.value ? "w-7 h-7 flex items-center justify-center hover:bg-smoke-100 dark-theme:hover:bg-zinc-700 rounded cursor-pointer" : "flex items-center gap-2 px-3 py-1.5 text-sm hover:bg-smoke-100 dark-theme:hover:bg-zinc-700 rounded cursor-pointer"
                ),
                title: subOption.label,
                onClick: /* @__PURE__ */ __name(($event) => handleSubmenuClick(subOption), "onClick")
              }, [
                subOption.color ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "h-5 w-5 rounded-full border border-smoke-300 dark-theme:border-zinc-600",
                  style: normalizeStyle({ backgroundColor: subOption.color })
                }, null, 4)) : !subOption.color ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  isShapeSelected(subOption) ? (openBlock(), createElementBlock("i", _hoisted_2$m)) : (openBlock(), createElementBlock("div", _hoisted_3$h)),
                  createElementVNode("span", null, toDisplayString(subOption.label), 1)
                ], 64)) : createCommentVNode("", true)
              ], 10, _hoisted_1$v);
            }), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["pt"]);
    };
  }
});
const _hoisted_1$u = { class: "flex min-w-48 flex-col p-2" };
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "NodeOptions",
  setup(__props, { expose: __expose }) {
    const popover = ref();
    const targetElement = ref(null);
    const isTriggeredByToolbox = ref(true);
    const isOpen = ref(false);
    const wasOpenBeforeHide = ref(false);
    const lastProgrammaticHideReason = ref(null);
    const submenuRefs = ref({});
    const currentSubmenu = ref(null);
    const { menuOptions, menuOptionsWithSubmenu, bump } = useMoreOptionsMenu();
    const { toggleSubmenu, hideAllSubmenus } = useSubmenuPositioning();
    const canvasInteractions = useCanvasInteractions();
    let overlayElCache = null;
    function resolveOverlayEl() {
      if (overlayElCache && overlayElCache.isConnected) return overlayElCache;
      const direct = popover.value?.$el;
      if (direct instanceof HTMLElement) {
        overlayElCache = direct;
        return direct;
      }
      const btn = targetElement.value;
      if (btn) {
        const candidates = Array.from(
          document.querySelectorAll("div.absolute.z-50")
        );
        const rect = btn.getBoundingClientRect();
        let best = null;
        for (const el of candidates) {
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.top - rect.bottom);
          if (!best || dist < best.dist) best = { el, dist };
        }
        if (best && best.el) {
          overlayElCache = best.el;
          return best.el;
        }
      }
      return null;
    }
    __name(resolveOverlayEl, "resolveOverlayEl");
    const repositionPopover = /* @__PURE__ */ __name(() => {
      if (!isOpen.value) return;
      const btn = targetElement.value;
      const overlayEl = resolveOverlayEl();
      if (!btn || !overlayEl) return;
      const rect = btn.getBoundingClientRect();
      const marginY = 8;
      const left = isTriggeredByToolbox.value ? rect.left + rect.width / 2 : rect.right - rect.width / 4;
      const top = isTriggeredByToolbox.value ? rect.bottom + marginY : rect.top - marginY - 6;
      try {
        overlayEl.style.position = "fixed";
        overlayEl.style.left = `${left}px`;
        overlayEl.style.top = `${top}px`;
        overlayEl.style.transform = "translate(-50%, 0)";
      } catch (e) {
        console.warn("[NodeOptions] Failed to set overlay style", e);
        return;
      }
      performance.now();
    }, "repositionPopover");
    const { resume: startSync, pause: stopSync } = useRafFn(repositionPopover);
    function openPopover(triggerEvent, element, clickedFromToolbox) {
      const el = element || targetElement.value;
      if (!el || !el.isConnected) return false;
      targetElement.value = el;
      if (clickedFromToolbox !== void 0)
        isTriggeredByToolbox.value = clickedFromToolbox;
      bump();
      popover.value?.show(triggerEvent ?? new Event("reopen"), el);
      isOpen.value = true;
      moreOptionsOpen.value = true;
      moreOptionsRestorePending.value = false;
      return true;
    }
    __name(openPopover, "openPopover");
    function closePopover(reason = "manual") {
      lastProgrammaticHideReason.value = reason;
      popover.value?.hide();
      isOpen.value = false;
      moreOptionsOpen.value = false;
      stopSync();
      hideAll();
      if (reason !== "drag") {
        wasOpenBeforeHide.value = false;
        moreOptionsRestorePending.value = false;
      } else {
        if (!moreOptionsRestorePending.value) {
          wasOpenBeforeHide.value = true;
          moreOptionsRestorePending.value = true;
        }
      }
    }
    __name(closePopover, "closePopover");
    let restoreAttempts = 0;
    function attemptRestore() {
      if (isOpen.value) return;
      if (!wasOpenBeforeHide.value && !moreOptionsRestorePending.value) return;
      if (openPopover(new Event("reopen"), targetElement.value || void 0)) {
        wasOpenBeforeHide.value = false;
        restoreAttempts = 0;
        return;
      }
      if (restoreAttempts >= 5) return;
      restoreAttempts++;
      requestAnimationFrame(() => attemptRestore());
    }
    __name(attemptRestore, "attemptRestore");
    const toggle = /* @__PURE__ */ __name((event, element, clickedFromToolbox) => {
      if (isOpen.value) closePopover("manual");
      else openPopover(event, element, clickedFromToolbox);
    }, "toggle");
    const hide = /* @__PURE__ */ __name((reason = "manual") => closePopover(reason), "hide");
    __expose({
      toggle,
      hide,
      isOpen
    });
    const hideAll = /* @__PURE__ */ __name(() => {
      hideAllSubmenus(
        menuOptionsWithSubmenu.value,
        submenuRefs.value,
        currentSubmenu
      );
    }, "hideAll");
    const handleOptionClick = /* @__PURE__ */ __name((option, event) => {
      if (!option.hasSubmenu && option.action) {
        option.action();
        hide();
      } else if (option.hasSubmenu) {
        event.stopPropagation();
        const submenuKey = `submenu-${option.label}`;
        const submenu = submenuRefs.value[submenuKey];
        if (submenu) {
          void toggleSubmenu(
            option,
            event,
            submenu,
            currentSubmenu,
            menuOptionsWithSubmenu.value,
            submenuRefs.value
          );
        }
      }
    }, "handleOptionClick");
    const handleSubmenuClick = /* @__PURE__ */ __name((subOption) => {
      subOption.action();
      hide("manual");
    }, "handleSubmenuClick");
    const setSubmenuRef = /* @__PURE__ */ __name((key, el) => {
      if (el) {
        submenuRefs.value[key] = el;
      } else {
        delete submenuRefs.value[key];
      }
    }, "setSubmenuRef");
    const pt = computed(() => ({
      root: {
        class: "absolute z-50 w-[300px] px-[12]"
      },
      content: {
        class: [
          "mt-2 text-neutral dark-theme:text-white rounded-lg",
          "shadow-lg border border-zinc-200 dark-theme:border-zinc-700",
          "bg-interface-panel-surface"
        ]
      }
    }));
    const onPopoverShow = /* @__PURE__ */ __name(() => {
      overlayElCache = resolveOverlayEl();
      requestAnimationFrame(() => repositionPopover());
      startSync();
    }, "onPopoverShow");
    const onPopoverHide = /* @__PURE__ */ __name(() => {
      if (lastProgrammaticHideReason.value == null) {
        isOpen.value = false;
        hideAll();
        wasOpenBeforeHide.value = false;
        moreOptionsOpen.value = false;
        moreOptionsRestorePending.value = false;
      }
      overlayElCache = null;
      stopSync();
      lastProgrammaticHideReason.value = null;
    }, "onPopoverHide");
    watch(
      () => forceCloseMoreOptionsSignal.value,
      () => {
        if (isOpen.value) hide("drag");
        else
          wasOpenBeforeHide.value = wasOpenBeforeHide.value || moreOptionsRestorePending.value;
      }
    );
    watch(
      () => restoreMoreOptionsSignal.value,
      () => attemptRestore()
    );
    onMounted(() => {
      registerNodeOptionsInstance({
        toggle,
        hide,
        isOpen
      });
      if (moreOptionsRestorePending.value && !isOpen.value) {
        requestAnimationFrame(() => attemptRestore());
      }
    });
    onUnmounted(() => {
      stopSync();
      registerNodeOptionsInstance(null);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "append-to": "body",
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: pt.value,
          onShow: onPopoverShow,
          onHide: onPopoverHide,
          onWheel: unref(canvasInteractions).forwardEventToCanvas
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$u, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(menuOptions), (option, index) => {
                return openBlock(), createBlock(_sfc_main$G, {
                  key: option.label || `divider-${index}`,
                  option,
                  onClick: handleOptionClick
                }, null, 8, ["option"]);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["pt", "onWheel"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(menuOptionsWithSubmenu), (option) => {
          return openBlock(), createBlock(_sfc_main$F, {
            key: `submenu-${option.label}`,
            ref_for: true,
            ref: /* @__PURE__ */ __name((el) => setSubmenuRef(`submenu-${option.label}`, el), "ref"),
            option,
            onSubmenuClick: handleSubmenuClick
          }, null, 8, ["option"]);
        }), 128))
      ]);
    };
  }
});
const useSearchBoxStore = defineStore("searchBox", () => {
  const settingStore = useSettingStore();
  const { x, y } = useMouse();
  const newSearchBoxEnabled = computed(
    () => settingStore.get("Comfy.NodeSearchBoxImpl") === "default"
  );
  const popoverRef = shallowRef(null);
  function setPopoverRef(popover) {
    popoverRef.value = popover;
  }
  __name(setPopoverRef, "setPopoverRef");
  const visible = ref(false);
  function toggleVisible() {
    if (newSearchBoxEnabled.value) {
      visible.value = !visible.value;
      return;
    }
    if (!popoverRef.value) return;
    popoverRef.value.showSearchBox(
      new MouseEvent("click", {
        clientX: x.value,
        clientY: y.value,
        // @ts-expect-error layerY is a nonstandard property
        layerY: y.value
      })
    );
  }
  __name(toggleVisible, "toggleVisible");
  return {
    newSearchBoxEnabled,
    setPopoverRef,
    toggleVisible,
    visible
  };
});
const _sfc_main$D = {
  name: "AutoCompletePlus",
  extends: AutoComplete,
  emits: ["focused-option-changed"],
  data() {
    return {
      // Flag to determine if IME is active
      isComposing: false
    };
  },
  mounted() {
    if (typeof AutoComplete.mounted === "function") {
      AutoComplete.mounted.call(this);
    }
    const inputEl = this.$el.querySelector("input");
    if (inputEl) {
      inputEl.addEventListener("compositionstart", () => {
        this.isComposing = true;
      });
      inputEl.addEventListener("compositionend", () => {
        this.isComposing = false;
      });
    }
    this.$watch(
      () => this.focusedOptionIndex,
      (newVal, oldVal) => {
        this.$emit("focused-option-changed", newVal);
      }
    );
  },
  methods: {
    // Override onKeyDown to block Enter when IME is active
    onKeyDown(event) {
      if (event.key === "Enter" && this.isComposing) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      AutoComplete.methods.onKeyDown.call(this, event);
    }
  }
};
const _hoisted_1$t = { class: "option-container flex w-full cursor-pointer items-center justify-between overflow-hidden px-2 py-0" };
const _hoisted_2$l = { class: "option-display-name flex flex-col font-semibold" };
const _hoisted_3$g = { key: 0 };
const _hoisted_4$a = ["innerHTML"];
const _hoisted_5$9 = ["innerHTML"];
const _hoisted_6$7 = {
  key: 0,
  class: "option-category truncate text-sm font-light text-muted"
};
const _hoisted_7$5 = { class: "option-badges" };
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchItem",
  props: {
    nodeDef: {},
    currentQuery: {}
  },
  setup(__props) {
    const settingStore = useSettingStore();
    const showCategory = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowCategory")
    );
    const showIdName = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowIdName")
    );
    const showNodeFrequency = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowNodeFrequency")
    );
    const nodeFrequencyStore = useNodeFrequencyStore();
    const nodeFrequency = computed(
      () => nodeFrequencyStore.getNodeFrequency(props.nodeDef)
    );
    const nodeBookmarkStore = useNodeBookmarkStore();
    const isBookmarked = computed(
      () => nodeBookmarkStore.isBookmarked(props.nodeDef)
    );
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createElementVNode("div", _hoisted_2$l, [
          createElementVNode("div", null, [
            isBookmarked.value ? (openBlock(), createElementBlock("span", _hoisted_3$g, _cache[0] || (_cache[0] = [
              createElementVNode("i", { class: "pi pi-bookmark-fill mr-1 text-sm" }, null, -1)
            ]))) : createCommentVNode("", true),
            createElementVNode("span", {
              innerHTML: unref(highlightQuery)(_ctx.nodeDef.display_name, _ctx.currentQuery)
            }, null, 8, _hoisted_4$a),
            _cache[1] || (_cache[1] = createElementVNode("span", null, " ", -1)),
            showIdName.value ? (openBlock(), createBlock(unref(Tag), {
              key: 1,
              severity: "secondary"
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  innerHTML: unref(highlightQuery)(_ctx.nodeDef.name, _ctx.currentQuery)
                }, null, 8, _hoisted_5$9)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          showCategory.value ? (openBlock(), createElementBlock("div", _hoisted_6$7, toDisplayString(_ctx.nodeDef.category.replaceAll("/", " > ")), 1)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_7$5, [
          _ctx.nodeDef.experimental ? (openBlock(), createBlock(unref(Tag), {
            key: 0,
            value: _ctx.$t("g.experimental"),
            severity: "primary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.deprecated ? (openBlock(), createBlock(unref(Tag), {
            key: 1,
            value: _ctx.$t("g.deprecated"),
            severity: "danger"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          showNodeFrequency.value && nodeFrequency.value > 0 ? (openBlock(), createBlock(unref(Tag), {
            key: 2,
            value: unref(formatNumberWithSuffix)(nodeFrequency.value, { roundToInt: true }),
            severity: "secondary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.nodeSource.type !== unref(NodeSourceType).Unknown ? (openBlock(), createBlock(unref(Chip), {
            key: 3,
            class: "text-sm font-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.nodeDef.nodeSource.displayText), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const NodeSearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-acda36a0"]]);
const _hoisted_1$s = { class: "comfy-vue-node-search-container flex w-full min-w-96 items-center justify-center" };
const _hoisted_2$k = {
  key: 0,
  class: "comfy-vue-node-preview-container absolute top-[50px] left-[-350px]"
};
const _hoisted_3$f = { class: "_dialog-body" };
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBox",
  props: {
    filters: {},
    searchLimit: { default: 64 }
  },
  emits: ["addFilter", "removeFilter", "addNode"],
  setup(__props, { emit: __emit }) {
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const enableNodePreview = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.NodePreview")
    );
    const autoCompletePlus = ref();
    const nodeSearchFilterVisible = ref(false);
    const inputId = `comfy-vue-node-search-box-input-${Math.random()}`;
    const suggestions = ref([]);
    const hoveredSuggestion = ref(null);
    const currentQuery = ref("");
    const placeholder = computed(() => {
      return __props.filters.length === 0 ? t2("g.searchNodes") + "..." : "";
    });
    const nodeDefStore = useNodeDefStore();
    const nodeFrequencyStore = useNodeFrequencyStore();
    const debouncedTrackSearch = debounce((query) => {
      if (query.trim()) ;
    }, 500);
    const search = /* @__PURE__ */ __name((query) => {
      const queryIsEmpty = query === "" && __props.filters.length === 0;
      currentQuery.value = query;
      suggestions.value = queryIsEmpty ? nodeFrequencyStore.topNodeDefs : [
        ...nodeDefStore.nodeSearchService.searchNode(query, __props.filters, {
          limit: __props.searchLimit
        })
      ];
      debouncedTrackSearch(query);
    }, "search");
    const emit = __emit;
    const onAddNode = /* @__PURE__ */ __name((nodeDef) => {
      emit("addNode", nodeDef);
    }, "onAddNode");
    let inputElement = null;
    const reFocusInput = /* @__PURE__ */ __name(async () => {
      inputElement ??= document.getElementById(inputId);
      if (inputElement) {
        inputElement.blur();
        await nextTick(() => inputElement?.focus());
      }
    }, "reFocusInput");
    onMounted(() => {
      inputElement ??= document.getElementById(inputId);
      if (inputElement) inputElement.focus();
      autoCompletePlus.value.hide = () => search("");
      search("");
      autoCompletePlus.value.show();
    });
    const onAddFilter = /* @__PURE__ */ __name((filterAndValue) => {
      nodeSearchFilterVisible.value = false;
      emit("addFilter", filterAndValue);
    }, "onAddFilter");
    const onRemoveFilter = /* @__PURE__ */ __name(async (event, filterAndValue) => {
      event.stopPropagation();
      event.preventDefault();
      emit("removeFilter", filterAndValue);
      await reFocusInput();
    }, "onRemoveFilter");
    const setHoverSuggestion = /* @__PURE__ */ __name((index) => {
      if (index === -1) {
        hoveredSuggestion.value = null;
        return;
      }
      const value = suggestions.value[index];
      hoveredSuggestion.value = value;
    }, "setHoverSuggestion");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        enableNodePreview.value ? (openBlock(), createElementBlock("div", _hoisted_2$k, [
          hoveredSuggestion.value ? (openBlock(), createBlock(NodePreview, {
            key: hoveredSuggestion.value?.name || "",
            "node-def": hoveredSuggestion.value
          }, null, 8, ["node-def"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(unref(Button), {
          icon: "pi pi-filter",
          severity: "secondary",
          class: "filter-button z-10",
          onClick: _cache[0] || (_cache[0] = ($event) => nodeSearchFilterVisible.value = true)
        }),
        createVNode(unref(Dialog), {
          visible: nodeSearchFilterVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => nodeSearchFilterVisible.value = $event),
          class: "min-w-96",
          "dismissable-mask": "",
          modal: "",
          onHide: reFocusInput
        }, {
          header: withCtx(() => [
            createElementVNode("h3", null, toDisplayString(_ctx.$t("g.addNodeFilterCondition")), 1)
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3$f, [
              createVNode(NodeSearchFilter, { onAddFilter })
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        createVNode(_sfc_main$D, {
          ref_key: "autoCompletePlus",
          ref: autoCompletePlus,
          "model-value": _ctx.filters,
          class: "comfy-vue-node-search-box z-10 grow",
          "scroll-height": "40vh",
          placeholder: placeholder.value,
          "input-id": inputId,
          "append-to": "self",
          suggestions: suggestions.value,
          delay: 100,
          loading: !unref(nodeFrequencyStore).isLoaded,
          "complete-on-focus": "",
          "auto-option-focus": "",
          "force-selection": "",
          multiple: "",
          "option-label": "display_name",
          onComplete: _cache[2] || (_cache[2] = ($event) => search($event.query)),
          onOptionSelect: _cache[3] || (_cache[3] = ($event) => onAddNode($event.value)),
          onFocusedOptionChanged: _cache[4] || (_cache[4] = ($event) => setHoverSuggestion($event))
        }, {
          option: withCtx(({ option }) => [
            createVNode(NodeSearchItem, {
              "node-def": option,
              "current-query": currentQuery.value
            }, null, 8, ["node-def", "current-query"])
          ]),
          chip: withCtx(({ value }) => [
            value.filterDef && value.value ? (openBlock(), createBlock(SearchFilterChip, {
              key: `${value.filterDef.id}-${value.value}`,
              text: value.value,
              badge: value.filterDef.invokeSequence.toUpperCase(),
              "badge-class": value.filterDef.invokeSequence + "-badge",
              onRemove: /* @__PURE__ */ __name(($event) => onRemoveFilter(
                $event,
                value
              ), "onRemove")
            }, null, 8, ["text", "badge", "badge-class", "onRemove"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "suggestions", "loading"])
      ]);
    };
  }
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBoxPopover",
  setup(__props, { expose: __expose }) {
    let triggerEvent = null;
    let listenerController = null;
    let disconnectOnReset = false;
    const settingStore = useSettingStore();
    const searchBoxStore = useSearchBoxStore();
    const litegraphService = useLitegraphService();
    const { visible, newSearchBoxEnabled } = storeToRefs(searchBoxStore);
    const dismissable = ref(true);
    function getNewNodeLocation() {
      return triggerEvent ? [triggerEvent.canvasX, triggerEvent.canvasY] : litegraphService.getCanvasCenter();
    }
    __name(getNewNodeLocation, "getNewNodeLocation");
    const nodeFilters = ref([]);
    function addFilter(filter) {
      nodeFilters.value.push(filter);
    }
    __name(addFilter, "addFilter");
    function removeFilter(filter) {
      nodeFilters.value = nodeFilters.value.filter(
        (f) => toRaw(f) !== toRaw(filter)
      );
    }
    __name(removeFilter, "removeFilter");
    function clearFilters() {
      nodeFilters.value = [];
    }
    __name(clearFilters, "clearFilters");
    function closeDialog() {
      visible.value = false;
    }
    __name(closeDialog, "closeDialog");
    const canvasStore = useCanvasStore();
    function addNode(nodeDef) {
      const node = litegraphService.addNodeOnGraph(nodeDef, {
        pos: getNewNodeLocation()
      });
      if (disconnectOnReset && triggerEvent) {
        canvasStore.getCanvas().linkConnector.connectToNode(node, triggerEvent);
      } else if (!triggerEvent) {
        console.warn("The trigger event was undefined when addNode was called.");
      }
      disconnectOnReset = false;
      useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
      window.requestAnimationFrame(closeDialog);
    }
    __name(addNode, "addNode");
    function showSearchBox(e) {
      if (newSearchBoxEnabled.value) {
        if (e?.pointerType === "touch") {
          setTimeout(() => {
            showNewSearchBox(e);
          }, 128);
        } else {
          showNewSearchBox(e);
        }
      } else {
        canvasStore.getCanvas().showSearchBox(e);
      }
    }
    __name(showSearchBox, "showSearchBox");
    function getFirstLink() {
      return canvasStore.getCanvas().linkConnector.renderLinks.at(0);
    }
    __name(getFirstLink, "getFirstLink");
    const nodeDefStore = useNodeDefStore();
    function showNewSearchBox(e) {
      const firstLink = getFirstLink();
      if (firstLink) {
        const filter = firstLink.toType === "input" ? nodeDefStore.nodeSearchService.inputTypeFilter : nodeDefStore.nodeSearchService.outputTypeFilter;
        const dataType = firstLink.fromSlot.type?.toString() ?? "";
        addFilter({
          filterDef: filter,
          value: dataType
        });
      }
      visible.value = true;
      triggerEvent = e;
      dismissable.value = false;
      setTimeout(() => {
        dismissable.value = true;
      }, 300);
    }
    __name(showNewSearchBox, "showNewSearchBox");
    function showContextMenu(e) {
      const firstLink = getFirstLink();
      if (!firstLink) return;
      const { node, fromSlot, toType } = firstLink;
      const commonOptions = {
        e,
        allow_searchbox: true,
        showSearchBox: /* @__PURE__ */ __name(() => {
          cancelResetOnContextClose();
          showSearchBox(e);
        }, "showSearchBox")
      };
      const afterRerouteId = firstLink.fromReroute?.id;
      const connectionOptions = toType === "input" ? { nodeFrom: node, slotFrom: fromSlot, afterRerouteId } : { nodeTo: node, slotTo: fromSlot, afterRerouteId };
      const canvas = canvasStore.getCanvas();
      const menu = canvas.showConnectionMenu({
        ...connectionOptions,
        ...commonOptions
      });
      if (!menu) {
        console.warn("No menu was returned from showConnectionMenu");
        return;
      }
      triggerEvent = e;
      listenerController = new AbortController();
      const { signal } = listenerController;
      const options = { once: true, signal };
      useEventListener(
        canvas.canvas,
        "connect-new-default-node",
        (createEvent) => {
          if (!(createEvent instanceof CustomEvent))
            throw new Error("Invalid event");
          const node2 = createEvent.detail?.node;
          if (!(node2 instanceof LGraphNode)) throw new Error("Invalid node");
          disconnectOnReset = false;
          createEvent.preventDefault();
          canvas.linkConnector.connectToNode(node2, e);
        },
        options
      );
      const cancelResetOnContextClose = useEventListener(
        menu.controller.signal,
        "abort",
        reset,
        options
      );
    }
    __name(showContextMenu, "showContextMenu");
    watchEffect(() => {
      const { canvas } = canvasStore;
      if (!canvas) return;
      LiteGraph.release_link_on_empty_shows_menu = false;
      canvas.allow_searchbox = false;
      useEventListener(
        canvas.linkConnector.events,
        "dropped-on-canvas",
        handleDroppedOnCanvas
      );
    });
    function canvasEventHandler(e) {
      if (e.detail.subType === "empty-double-click") {
        showSearchBox(e.detail.originalEvent);
      } else if (e.detail.subType === "group-double-click") {
        const group = e.detail.group;
        const [_, y] = group.pos;
        const relativeY = e.detail.originalEvent.canvasY - y;
        if (relativeY > group.titleHeight) {
          showSearchBox(e.detail.originalEvent);
        }
      }
    }
    __name(canvasEventHandler, "canvasEventHandler");
    const linkReleaseAction = computed(
      () => settingStore.get("Comfy.LinkRelease.Action")
    );
    const linkReleaseActionShift = computed(
      () => settingStore.get("Comfy.LinkRelease.ActionShift")
    );
    function preventDefault(e) {
      return e.preventDefault();
    }
    __name(preventDefault, "preventDefault");
    function cancelNextReset(e) {
      e.preventDefault();
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.state.snapLinksPos = [e.detail.canvasX, e.detail.canvasY];
      useEventListener(canvas.linkConnector.events, "reset", preventDefault, {
        once: true
      });
    }
    __name(cancelNextReset, "cancelNextReset");
    function handleDroppedOnCanvas(e) {
      disconnectOnReset = true;
      const action = e.detail.shiftKey ? linkReleaseActionShift.value : linkReleaseAction.value;
      switch (action) {
        case LinkReleaseTriggerAction.SEARCH_BOX:
          cancelNextReset(e);
          showSearchBox(e.detail);
          break;
        case LinkReleaseTriggerAction.CONTEXT_MENU:
          cancelNextReset(e);
          showContextMenu(e.detail);
          break;
        case LinkReleaseTriggerAction.NO_ACTION:
      }
    }
    __name(handleDroppedOnCanvas, "handleDroppedOnCanvas");
    function reset() {
      listenerController?.abort();
      listenerController = null;
      triggerEvent = null;
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.events.removeEventListener("reset", preventDefault);
      if (disconnectOnReset) canvas.linkConnector.disconnectLinks();
      canvas.linkConnector.reset();
      canvas.setDirty(true, true);
    }
    __name(reset, "reset");
    watch(visible, () => {
      if (!visible.value) reset();
    });
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    __expose({ showSearchBox });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Dialog), {
          visible: unref(visible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = $event : null),
          modal: "",
          "dismissable-mask": dismissable.value,
          pt: {
            root: {
              class: "invisible-dialog-root",
              role: "search"
            },
            mask: { class: "node-search-box-dialog-mask" },
            transition: {
              enterFromClass: "opacity-0 scale-75",
              // 100ms is the duration of the transition in the dialog component
              enterActiveClass: "transition-all duration-100 ease-out",
              leaveActiveClass: "transition-all duration-100 ease-in",
              leaveToClass: "opacity-0 scale-75"
            }
          },
          onHide: clearFilters
        }, {
          container: withCtx(() => [
            createVNode(_sfc_main$B, {
              filters: nodeFilters.value,
              onAddFilter: addFilter,
              onRemoveFilter: removeFilter,
              onAddNode: addNode
            }, null, 8, ["filters"])
          ]),
          _: 1
        }, 8, ["visible", "dismissable-mask"])
      ]);
    };
  }
});
const _hoisted_1$r = ["width", "height"];
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "ComfyLogo",
  props: {
    size: { default: 16 },
    color: { default: "currentColor" },
    class: {},
    mode: { default: "outline" }
  },
  setup(__props) {
    const iconClass = computed(() => __props.class || "");
    const attributes = computed(() => ({
      stroke: __props.mode === "outline" ? __props.color : void 0,
      strokeWidth: __props.mode === "outline" ? 1 : void 0,
      fill: __props.mode === "fill" ? __props.color : "none"
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: normalizeClass(iconClass.value),
        width: _ctx.size,
        height: _ctx.size,
        viewBox: "0 0 18 18",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        createElementVNode("path", mergeProps({ d: "M14.8193 0.600586C15.1248 0.600586 15.3296 0.70893 15.459 0.881836C15.5914 1.05888 15.6471 1.33774 15.5527 1.66895L14.8037 4.30176C14.7063 4.64386 14.4729 4.97024 14.1641 5.21191C13.8544 5.45415 13.496 5.58984 13.1699 5.58984H13.1689L9.5791 5.59668H7.90625C7.52654 5.59668 7.19496 5.84986 7.09082 6.21289L5.69434 11.0889C5.63007 11.3133 5.66134 11.5534 5.77734 11.7529L5.83203 11.8359C5.99177 12.0491 6.24252 12.1758 6.50977 12.1758H6.51074L8.88281 12.1709H11.4971C11.7643 12.171 11.9541 12.254 12.084 12.3906L12.1357 12.4521C12.2685 12.6295 12.3249 12.9089 12.2305 13.2402L11.4805 15.8721C11.383 16.2144 11.1498 16.5415 10.8408 16.7832C10.5314 17.0252 10.1736 17.161 9.84766 17.1611H9.84668L6.25684 17.168H3.64258C3.33762 17.1679 3.13349 17.0588 3.00391 16.8857C2.87135 16.7087 2.81482 16.43 2.90918 16.0986L3.39551 14.3887C3.46841 14.1327 3.41794 13.8576 3.25879 13.6445V13.6436C3.09901 13.4303 2.84745 13.3037 2.58008 13.3037H1.18066C0.875088 13.3037 0.670398 13.1953 0.541016 13.0225C0.408483 12.8451 0.351891 12.5655 0.446289 12.2344L2.11914 6.38965L2.30371 5.74707V5.74609C2.40139 5.40341 2.63456 5.07671 2.94336 4.83496C3.25302 4.59258 3.61143 4.45705 3.9375 4.45703H5.6123C5.94484 4.45703 6.24083 4.26316 6.37891 3.9707L6.42773 3.83984L6.98145 1.89551C7.07894 1.55317 7.31212 1.22614 7.62109 0.984375C7.93074 0.742127 8.2892 0.606445 8.61523 0.606445H8.61621L12.1982 0.600586H14.8193Z" }, attributes.value), null, 16)
      ], 10, _hoisted_1$r);
    };
  }
});
const _hoisted_1$q = { class: "relative aspect-square w-full overflow-hidden rounded-t-lg select-none" };
const _hoisted_2$j = {
  key: 1,
  class: "flex h-full w-full items-center justify-center"
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "BaseThumbnail",
  props: {
    hoverZoom: { default: 4 },
    isHovered: { type: Boolean }
  },
  setup(__props) {
    const error = ref(false);
    const contentRef = ref(null);
    onMounted(() => {
      const images = Array.from(contentRef.value?.getElementsByTagName("img") ?? []);
      images.forEach((img) => {
        useEventListener(img, "error", () => {
          error.value = true;
        });
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        !error.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "contentRef",
          ref: contentRef,
          class: "h-full w-full transform-gpu transition-transform duration-1000 ease-out",
          style: normalizeStyle(
            _ctx.isHovered ? { transform: `scale(${1 + _ctx.hoverZoom / 100})` } : void 0
          )
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : (openBlock(), createElementBlock("div", _hoisted_2$j, _cache[0] || (_cache[0] = [
          createElementVNode("img", {
            src: _imports_0,
            draggable: "false",
            class: "h-full w-full transform-gpu object-cover transition-transform duration-300 ease-out"
          }, null, -1)
        ])))
      ]);
    };
  }
});
const BaseThumbnail = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-c216f2c0"]]);
const _hoisted_1$p = {
  class: "flex h-full w-full items-center justify-center p-4",
  style: {
    backgroundImage: "url(/assets/images/default-template.png)",
    backgroundRepeat: "round"
  }
};
const _hoisted_2$i = ["src"];
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "AudioThumbnail",
  props: {
    src: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseThumbnail, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$p, [
            createElementVNode("audio", {
              controls: "",
              class: "relative w-full",
              src: _ctx.src,
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, _hoisted_2$i)
          ])
        ]),
        _: 1
      });
    };
  }
});
const SLIDER_START_POSITION = 50;
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "CompareSliderThumbnail",
  props: {
    baseImageSrc: {},
    overlayImageSrc: {},
    alt: {},
    isHovered: { type: Boolean },
    isVideo: { type: Boolean }
  },
  setup(__props) {
    const isVideoType = __props.isVideo || __props.baseImageSrc?.toLowerCase().endsWith(".webp") || __props.overlayImageSrc?.toLowerCase().endsWith(".webp") || false;
    const sliderPosition = ref(SLIDER_START_POSITION);
    const containerRef = ref(null);
    const { elementX, elementWidth, isOutside } = useMouseInElement(containerRef);
    watch(
      [() => __props.isHovered, elementX, elementWidth, isOutside],
      ([isHovered, x, width, outside]) => {
        if (!isHovered) return;
        if (!outside) {
          sliderPosition.value = x / width * 100;
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseThumbnail, { "is-hovered": _ctx.isHovered }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1H, {
            src: _ctx.baseImageSrc,
            alt: _ctx.alt,
            "image-class": unref(isVideoType) ? "w-full h-full object-cover" : "max-w-full max-h-64 object-contain"
          }, null, 8, ["src", "alt", "image-class"]),
          createElementVNode("div", {
            ref_key: "containerRef",
            ref: containerRef,
            class: "absolute inset-0"
          }, [
            createVNode(_sfc_main$1H, {
              src: _ctx.overlayImageSrc,
              alt: _ctx.alt,
              "image-class": unref(isVideoType) ? "w-full h-full object-cover" : "max-w-full max-h-64 object-contain",
              "image-style": {
                clipPath: `inset(0 ${100 - sliderPosition.value}% 0 0)`
              }
            }, null, 8, ["src", "alt", "image-class", "image-style"]),
            createElementVNode("div", {
              class: "pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/30 backdrop-blur-sm",
              style: normalizeStyle({
                left: `${sliderPosition.value}%`
              })
            }, null, 4)
          ], 512)
        ]),
        _: 1
      }, 8, ["is-hovered"]);
    };
  }
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "DefaultThumbnail",
  props: {
    src: {},
    alt: {},
    hoverZoom: {},
    isHovered: { type: Boolean },
    isVideo: { type: Boolean }
  },
  setup(__props) {
    const isVideoType = __props.isVideo ?? (__props.src?.toLowerCase().endsWith(".webp") || false);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseThumbnail, {
        "hover-zoom": _ctx.hoverZoom,
        "is-hovered": _ctx.isHovered
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1H, {
            src: _ctx.src,
            alt: _ctx.alt,
            "image-class": [
              "transform-gpu transition-transform duration-300 ease-out",
              unref(isVideoType) ? "w-full h-full object-cover" : "max-w-full max-h-64 object-contain"
            ],
            "image-style": _ctx.isHovered ? { transform: `scale(${1 + _ctx.hoverZoom / 100})` } : void 0
          }, null, 8, ["src", "alt", "image-class", "image-style"])
        ]),
        _: 1
      }, 8, ["hover-zoom", "is-hovered"]);
    };
  }
});
const _hoisted_1$o = { class: "relative h-full w-full" };
const _hoisted_2$h = { class: "absolute inset-0" };
const _hoisted_3$e = { class: "absolute inset-0 z-10" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "HoverDissolveThumbnail",
  props: {
    baseImageSrc: {},
    overlayImageSrc: {},
    alt: {},
    isHovered: { type: Boolean },
    isVideo: { type: Boolean }
  },
  setup(__props) {
    const isVideoType = __props.isVideo || __props.baseImageSrc?.toLowerCase().endsWith(".webp") || __props.overlayImageSrc?.toLowerCase().endsWith(".webp") || false;
    const baseImageClass = computed(() => {
      const sizeClasses = isVideoType ? "size-full object-cover" : "size-full object-contain";
      return sizeClasses;
    });
    const overlayImageClass = computed(() => {
      const baseClasses2 = "size-full transition-opacity duration-300";
      const sizeClasses = isVideoType ? "object-cover" : "object-contain";
      const opacityClasses = __props.isHovered ? "opacity-100" : "opacity-0";
      return `${baseClasses2} ${sizeClasses} ${opacityClasses}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseThumbnail, { "is-hovered": _ctx.isHovered }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$o, [
            createElementVNode("div", _hoisted_2$h, [
              createVNode(_sfc_main$1H, {
                src: _ctx.baseImageSrc,
                alt: _ctx.alt,
                "image-class": baseImageClass.value
              }, null, 8, ["src", "alt", "image-class"])
            ]),
            createElementVNode("div", _hoisted_3$e, [
              createVNode(_sfc_main$1H, {
                src: _ctx.overlayImageSrc,
                alt: _ctx.alt,
                "image-class": overlayImageClass.value
              }, null, 8, ["src", "alt", "image-class"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["is-hovered"]);
    };
  }
});
function useLazyPagination(items, options = {}) {
  const { itemsPerPage = 12, initialPage = 1 } = options;
  const currentPage = ref(initialPage);
  const isLoading = ref(false);
  const loadedPages = shallowRef(/* @__PURE__ */ new Set([]));
  const itemsArray = computed(() => {
    const itemData = "value" in items ? items.value : items;
    return Array.isArray(itemData) ? itemData : [];
  });
  const paginatedItems = computed(() => {
    const itemData = itemsArray.value;
    if (itemData.length === 0) {
      return [];
    }
    const loadedPageNumbers = Array.from(loadedPages.value).sort(
      (a, b) => a - b
    );
    const maxLoadedPage = Math.max(...loadedPageNumbers, 0);
    const endIndex = maxLoadedPage * itemsPerPage;
    return itemData.slice(0, endIndex);
  });
  const hasMoreItems = computed(() => {
    const itemData = itemsArray.value;
    if (itemData.length === 0) {
      return false;
    }
    const loadedPagesArray = Array.from(loadedPages.value);
    const maxLoadedPage = Math.max(...loadedPagesArray, 0);
    return maxLoadedPage * itemsPerPage < itemData.length;
  });
  const totalPages = computed(() => {
    const itemData = itemsArray.value;
    if (itemData.length === 0) {
      return 0;
    }
    return Math.ceil(itemData.length / itemsPerPage);
  });
  const loadNextPage = /* @__PURE__ */ __name(async () => {
    if (isLoading.value || !hasMoreItems.value) return;
    isLoading.value = true;
    const loadedPagesArray = Array.from(loadedPages.value);
    const nextPage = Math.max(...loadedPagesArray, 0) + 1;
    const newLoadedPages = new Set(loadedPages.value);
    newLoadedPages.add(nextPage);
    loadedPages.value = newLoadedPages;
    currentPage.value = nextPage;
    isLoading.value = false;
  }, "loadNextPage");
  watch(
    () => itemsArray.value.length,
    (length) => {
      if (length > 0 && loadedPages.value.size === 0) {
        loadedPages.value = /* @__PURE__ */ new Set([1]);
      }
    },
    { immediate: true }
  );
  const reset = /* @__PURE__ */ __name(() => {
    currentPage.value = initialPage;
    loadedPages.value = /* @__PURE__ */ new Set([]);
    isLoading.value = false;
    const itemData = itemsArray.value;
    if (itemData.length > 0) {
      loadedPages.value = /* @__PURE__ */ new Set([1]);
    }
  }, "reset");
  return {
    paginatedItems,
    isLoading,
    hasMoreItems,
    currentPage,
    totalPages,
    loadNextPage,
    reset
  };
}
__name(useLazyPagination, "useLazyPagination");
function useTemplateFiltering(templates) {
  const searchQuery = ref("");
  const selectedModels = ref([]);
  const selectedUseCases = ref([]);
  const selectedRunsOn = ref([]);
  const sortBy = ref("newest");
  const templatesArray = computed(() => {
    const templateData = "value" in templates ? templates.value : templates;
    return Array.isArray(templateData) ? templateData : [];
  });
  const fuseOptions = {
    keys: [
      { name: "name", weight: 0.3 },
      { name: "title", weight: 0.3 },
      { name: "description", weight: 0.2 },
      { name: "tags", weight: 0.1 },
      { name: "models", weight: 0.1 }
    ],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true
  };
  const fuse = computed(() => new Fuse(templatesArray.value, fuseOptions));
  const availableModels = computed(() => {
    const modelSet = /* @__PURE__ */ new Set();
    templatesArray.value.forEach((template) => {
      if (Array.isArray(template.models)) {
        template.models.forEach((model) => modelSet.add(model));
      }
    });
    return Array.from(modelSet).sort();
  });
  const availableUseCases = computed(() => {
    const tagSet = /* @__PURE__ */ new Set();
    templatesArray.value.forEach((template) => {
      if (template.tags && Array.isArray(template.tags)) {
        template.tags.forEach((tag) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });
  const availableRunsOn = computed(() => {
    return ["ComfyUI", "External or Remote API"];
  });
  const debouncedSearchQuery = refDebounced(searchQuery, 50);
  const filteredBySearch = computed(() => {
    if (!debouncedSearchQuery.value.trim()) {
      return templatesArray.value;
    }
    const results = fuse.value.search(debouncedSearchQuery.value);
    return results.map((result) => result.item);
  });
  const filteredByModels = computed(() => {
    if (selectedModels.value.length === 0) {
      return filteredBySearch.value;
    }
    return filteredBySearch.value.filter((template) => {
      if (!template.models || !Array.isArray(template.models)) {
        return false;
      }
      return selectedModels.value.some(
        (selectedModel) => template.models?.includes(selectedModel)
      );
    });
  });
  const filteredByUseCases = computed(() => {
    if (selectedUseCases.value.length === 0) {
      return filteredByModels.value;
    }
    return filteredByModels.value.filter((template) => {
      if (!template.tags || !Array.isArray(template.tags)) {
        return false;
      }
      return selectedUseCases.value.some(
        (selectedTag) => template.tags?.includes(selectedTag)
      );
    });
  });
  const filteredByRunsOn = computed(() => {
    if (selectedRunsOn.value.length === 0) {
      return filteredByUseCases.value;
    }
    return filteredByUseCases.value.filter((template) => {
      const isExternalAPI = template.openSource === false;
      const isComfyUI = template.openSource !== false;
      return selectedRunsOn.value.some((selectedRunsOn2) => {
        if (selectedRunsOn2 === "External or Remote API") {
          return isExternalAPI;
        } else if (selectedRunsOn2 === "ComfyUI") {
          return isComfyUI;
        }
        return false;
      });
    });
  });
  const getVramMetric = /* @__PURE__ */ __name((template) => {
    if (typeof template.vram === "number" && Number.isFinite(template.vram) && template.vram > 0) {
      return template.vram;
    }
    return Number.POSITIVE_INFINITY;
  }, "getVramMetric");
  const sortedTemplates = computed(() => {
    const templates2 = [...filteredByRunsOn.value];
    switch (sortBy.value) {
      case "alphabetical":
        return templates2.sort((a, b) => {
          const nameA = a.title || a.name || "";
          const nameB = b.title || b.name || "";
          return nameA.localeCompare(nameB);
        });
      case "newest":
        return templates2.sort((a, b) => {
          const dateA = new Date(a.date || "1970-01-01");
          const dateB = new Date(b.date || "1970-01-01");
          return dateB.getTime() - dateA.getTime();
        });
      case "vram-low-to-high":
        return templates2.sort((a, b) => {
          const vramA = getVramMetric(a);
          const vramB = getVramMetric(b);
          if (vramA === vramB) {
            const nameA = a.title || a.name || "";
            const nameB = b.title || b.name || "";
            return nameA.localeCompare(nameB);
          }
          if (vramA === Number.POSITIVE_INFINITY) return 1;
          if (vramB === Number.POSITIVE_INFINITY) return -1;
          return vramA - vramB;
        });
      case "model-size-low-to-high":
        return templates2.sort((a, b) => {
          const sizeA = typeof a.size === "number" ? a.size : Number.POSITIVE_INFINITY;
          const sizeB = typeof b.size === "number" ? b.size : Number.POSITIVE_INFINITY;
          if (sizeA === sizeB) return 0;
          return sizeA - sizeB;
        });
      case "default":
      default:
        return templates2;
    }
  });
  const filteredTemplates = computed(() => sortedTemplates.value);
  const resetFilters = /* @__PURE__ */ __name(() => {
    searchQuery.value = "";
    selectedModels.value = [];
    selectedUseCases.value = [];
    selectedRunsOn.value = [];
    sortBy.value = "default";
  }, "resetFilters");
  const removeModelFilter = /* @__PURE__ */ __name((model) => {
    selectedModels.value = selectedModels.value.filter((m) => m !== model);
  }, "removeModelFilter");
  const removeUseCaseFilter = /* @__PURE__ */ __name((tag) => {
    selectedUseCases.value = selectedUseCases.value.filter((t2) => t2 !== tag);
  }, "removeUseCaseFilter");
  const removeRunsOnFilter = /* @__PURE__ */ __name((runsOn) => {
    selectedRunsOn.value = selectedRunsOn.value.filter((r) => r !== runsOn);
  }, "removeRunsOnFilter");
  const filteredCount = computed(() => filteredTemplates.value.length);
  const totalCount = computed(() => templatesArray.value.length);
  const debouncedTrackFilterChange = debounce(() => {
  }, 500);
  watch(
    [searchQuery, selectedModels, selectedUseCases, selectedRunsOn, sortBy],
    () => {
      const hasActiveFilters = searchQuery.value.trim() !== "" || selectedModels.value.length > 0 || selectedUseCases.value.length > 0 || selectedRunsOn.value.length > 0 || sortBy.value !== "default";
      if (hasActiveFilters) {
        debouncedTrackFilterChange();
      }
    },
    { deep: true }
  );
  return {
    // State
    searchQuery,
    selectedModels,
    selectedUseCases,
    selectedRunsOn,
    sortBy,
    // Computed
    filteredTemplates,
    availableModels,
    availableUseCases,
    availableRunsOn,
    filteredCount,
    totalCount,
    // Methods
    resetFilters,
    removeModelFilter,
    removeUseCaseFilter,
    removeRunsOnFilter
  };
}
__name(useTemplateFiltering, "useTemplateFiltering");
function useTemplateWorkflows() {
  const { t: t2 } = useI18n();
  const workflowTemplatesStore = useWorkflowTemplatesStore();
  const dialogStore = useDialogStore();
  const selectedTemplate = ref(null);
  const loadingTemplateId = ref(null);
  const isTemplatesLoaded = computed(() => workflowTemplatesStore.isLoaded);
  const allTemplateGroups = computed(
    () => workflowTemplatesStore.groupedTemplates
  );
  const loadTemplates = /* @__PURE__ */ __name(async () => {
    if (!workflowTemplatesStore.isLoaded) {
      await workflowTemplatesStore.loadWorkflowTemplates();
    }
    return workflowTemplatesStore.isLoaded;
  }, "loadTemplates");
  const selectFirstTemplateCategory = /* @__PURE__ */ __name(() => {
    if (allTemplateGroups.value.length > 0) {
      const firstCategory = allTemplateGroups.value[0].modules[0];
      selectTemplateCategory(firstCategory);
    }
  }, "selectFirstTemplateCategory");
  const selectTemplateCategory = /* @__PURE__ */ __name((category) => {
    selectedTemplate.value = category;
    return category !== null;
  }, "selectTemplateCategory");
  const getTemplateThumbnailUrl = /* @__PURE__ */ __name((template, sourceModule, index = "1") => {
    const basePath = sourceModule === "default" ? api.fileURL(`/templates/${template.name}`) : api.apiURL(`/workflow_templates/${sourceModule}/${template.name}`);
    const indexSuffix = sourceModule === "default" && index ? `-${index}` : "";
    return `${basePath}${indexSuffix}.${template.mediaSubtype}`;
  }, "getTemplateThumbnailUrl");
  const getTemplateTitle = /* @__PURE__ */ __name((template, sourceModule) => {
    const fallback = template.title ?? template.name ?? `${sourceModule} Template`;
    return sourceModule === "default" ? template.localizedTitle ?? fallback : fallback;
  }, "getTemplateTitle");
  const getTemplateDescription = /* @__PURE__ */ __name((template) => {
    return (template.localizedDescription || template.description)?.replace(/[-_]/g, " ").trim() ?? "";
  }, "getTemplateDescription");
  const loadWorkflowTemplate = /* @__PURE__ */ __name(async (id, sourceModule) => {
    if (!isTemplatesLoaded.value) return false;
    loadingTemplateId.value = id;
    let json;
    try {
      if (sourceModule === "all") {
        const comfyExamplesGroup = allTemplateGroups.value.find(
          (g) => g.label === t2("templateWorkflows.category.ComfyUI Examples", "ComfyUI Examples")
        );
        const allCategory = comfyExamplesGroup?.modules.find(
          (m) => m.moduleName === "all"
        );
        const template = allCategory?.templates.find((t22) => t22.name === id);
        if (!template || !template.sourceModule) return false;
        const actualSourceModule = template.sourceModule;
        json = await fetchTemplateJson(id, actualSourceModule);
        const workflowName2 = actualSourceModule === "default" ? t2(`templateWorkflows.template.${id}`, id) : id;
        if (isCloud) ;
        dialogStore.closeDialog();
        await app.loadGraphData(json, true, true, workflowName2, {
          openSource: "template"
        });
        return true;
      }
      json = await fetchTemplateJson(id, sourceModule);
      const workflowName = sourceModule === "default" ? t2(`templateWorkflows.template.${id}`, id) : id;
      if (isCloud) ;
      dialogStore.closeDialog();
      await app.loadGraphData(json, true, true, workflowName, {
        openSource: "template"
      });
      return true;
    } catch (error) {
      console.error("Error loading workflow template:", error);
      return false;
    } finally {
      loadingTemplateId.value = null;
    }
  }, "loadWorkflowTemplate");
  const fetchTemplateJson = /* @__PURE__ */ __name(async (id, sourceModule) => {
    if (sourceModule === "default") {
      return fetch(api.fileURL(`/templates/${id}.json`)).then((r) => r.json());
    } else {
      return fetch(
        api.apiURL(`/workflow_templates/${sourceModule}/${id}.json`)
      ).then((r) => r.json());
    }
  }, "fetchTemplateJson");
  return {
    // State
    selectedTemplate,
    loadingTemplateId,
    // Computed
    isTemplatesLoaded,
    allTemplateGroups,
    // Methods
    loadTemplates,
    selectFirstTemplateCategory,
    selectTemplateCategory,
    getTemplateThumbnailUrl,
    getTemplateTitle,
    getTemplateDescription,
    loadWorkflowTemplate
  };
}
__name(useTemplateWorkflows, "useTemplateWorkflows");
const _hoisted_1$n = { class: "text-neutral text-base" };
const _hoisted_2$g = { class: "flex gap-2" };
const _hoisted_3$d = { class: "relative flex flex-wrap justify-between gap-2 px-6 pb-4" };
const _hoisted_4$9 = { class: "flex flex-wrap gap-2" };
const _hoisted_5$8 = {
  key: 0,
  class: "text-neutral px-6 pt-4 pb-2 text-2xl font-semibold"
};
const _hoisted_6$6 = {
  key: 0,
  class: "flex h-64 flex-col items-center justify-center text-neutral-500"
};
const _hoisted_7$4 = { class: "mb-2 text-lg" };
const _hoisted_8$4 = { class: "text-sm" };
const _hoisted_9$3 = { key: 1 };
const _hoisted_10$3 = {
  key: 0,
  class: "inline-block h-8 w-48 animate-pulse rounded bg-dialog-surface"
};
const _hoisted_11$2 = { class: "relative h-full w-full overflow-hidden rounded-lg" };
const _hoisted_12$1 = { class: "flex flex-col gap-2 pt-3" };
const _hoisted_13$1 = ["title"];
const _hoisted_14$1 = { class: "flex justify-between gap-2" };
const _hoisted_15$1 = { class: "flex-1" };
const _hoisted_16$1 = ["title"];
const _hoisted_17$1 = {
  key: 0,
  class: "flex flex-col-reverse justify-center"
};
const _hoisted_18$1 = {
  key: 0,
  class: "text-sm text-muted"
};
const _hoisted_19$1 = {
  key: 3,
  class: "mt-6 px-6 text-sm text-neutral-600 dark-theme:text-neutral-400"
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTemplateSelectorDialog",
  props: {
    onClose: { type: Function }
  },
  setup(__props) {
    const { t: t2 } = useI18n();
    const sessionStartTime = ref(0);
    const templateWasSelected = ref(false);
    onMounted(() => {
      sessionStartTime.value = Date.now();
    });
    const onClose = /* @__PURE__ */ __name(() => {
      __props.onClose();
    }, "onClose");
    provide(OnCloseKey, onClose);
    const workflowTemplatesStore = useWorkflowTemplatesStore();
    const {
      loadTemplates,
      loadWorkflowTemplate,
      getTemplateThumbnailUrl,
      getTemplateTitle,
      getTemplateDescription
    } = useTemplateWorkflows();
    const getEffectiveSourceModule = /* @__PURE__ */ __name((template) => template.sourceModule || "default", "getEffectiveSourceModule");
    const getBaseThumbnailSrc = /* @__PURE__ */ __name((template) => {
      const sm = getEffectiveSourceModule(template);
      return getTemplateThumbnailUrl(template, sm, sm === "default" ? "1" : "");
    }, "getBaseThumbnailSrc");
    const getOverlayThumbnailSrc = /* @__PURE__ */ __name((template) => {
      const sm = getEffectiveSourceModule(template);
      return getTemplateThumbnailUrl(template, sm, sm === "default" ? "2" : "");
    }, "getOverlayThumbnailSrc");
    const openTutorial = /* @__PURE__ */ __name((template) => {
      if (template.tutorialUrl) {
        window.open(template.tutorialUrl, "_blank");
      }
    }, "openTutorial");
    const navItems = computed(() => {
      if (isLoading.value) {
        return [
          {
            id: "skeleton-all",
            label: "All Templates",
            icon: "icon-[lucide--layout-grid]"
          },
          {
            id: "skeleton-basics",
            label: "Basics",
            icon: "icon-[lucide--graduation-cap]"
          },
          {
            title: "Generation Type",
            items: [
              { id: "skeleton-1", label: "...", icon: "icon-[lucide--loader-2]" },
              { id: "skeleton-2", label: "...", icon: "icon-[lucide--loader-2]" }
            ]
          },
          {
            title: "Closed Source Models",
            items: [
              { id: "skeleton-3", label: "...", icon: "icon-[lucide--loader-2]" }
            ]
          }
        ];
      }
      return workflowTemplatesStore.navGroupedTemplates;
    });
    const gridStyle = computed(() => createGridStyle());
    const allTemplates = computed(() => {
      return workflowTemplatesStore.enhancedTemplates;
    });
    const navigationFilteredTemplates = computed(() => {
      if (!selectedNavItem.value) {
        return allTemplates.value;
      }
      return workflowTemplatesStore.filterTemplatesByCategory(selectedNavItem.value);
    });
    const {
      searchQuery,
      selectedModels,
      selectedUseCases,
      selectedRunsOn,
      sortBy,
      filteredTemplates,
      availableModels,
      availableUseCases,
      availableRunsOn,
      filteredCount,
      totalCount,
      resetFilters
    } = useTemplateFiltering(navigationFilteredTemplates);
    const selectedModelObjects = computed({
      get() {
        return selectedModels.value.map((model) => ({ name: model, value: model }));
      },
      set(value) {
        selectedModels.value = value.map((item) => item.value);
      }
    });
    const selectedUseCaseObjects = computed({
      get() {
        return selectedUseCases.value.map((useCase) => ({
          name: useCase,
          value: useCase
        }));
      },
      set(value) {
        selectedUseCases.value = value.map((item) => item.value);
      }
    });
    const selectedRunsOnObjects = computed({
      get() {
        return selectedRunsOn.value.map((runsOn) => ({
          name: runsOn,
          value: runsOn
        }));
      },
      set(value) {
        selectedRunsOn.value = value.map((item) => item.value);
      }
    });
    const loadingTemplate = ref(null);
    const hoveredTemplate = ref(null);
    const cardRefs = ref([]);
    const templateListKey = ref(0);
    const selectedNavItem = ref("all");
    const modelSearchText = ref("");
    const modelOptions = computed(
      () => availableModels.value.map((model) => ({
        name: model,
        value: model
      }))
    );
    const useCaseOptions = computed(
      () => availableUseCases.value.map((useCase) => ({
        name: useCase,
        value: useCase
      }))
    );
    const runsOnOptions = computed(
      () => availableRunsOn.value.map((runsOn) => ({
        name: runsOn,
        value: runsOn
      }))
    );
    const modelFilterLabel = computed(() => {
      if (selectedModelObjects.value.length === 0) {
        return t2("templateWorkflows.modelFilter", "Model Filter");
      } else if (selectedModelObjects.value.length === 1) {
        return selectedModelObjects.value[0].name;
      } else {
        return t2("templateWorkflows.modelsSelected", {
          count: selectedModelObjects.value.length
        });
      }
    });
    const useCaseFilterLabel = computed(() => {
      if (selectedUseCaseObjects.value.length === 0) {
        return t2("templateWorkflows.useCaseFilter", "Use Case");
      } else if (selectedUseCaseObjects.value.length === 1) {
        return selectedUseCaseObjects.value[0].name;
      } else {
        return t2("templateWorkflows.useCasesSelected", {
          count: selectedUseCaseObjects.value.length
        });
      }
    });
    const runsOnFilterLabel = computed(() => {
      if (selectedRunsOnObjects.value.length === 0) {
        return t2("templateWorkflows.runsOnFilter", "Runs On");
      } else if (selectedRunsOnObjects.value.length === 1) {
        return selectedRunsOnObjects.value[0].name;
      } else {
        return t2("templateWorkflows.runsOnSelected", {
          count: selectedRunsOnObjects.value.length
        });
      }
    });
    const sortOptions = computed(() => [
      { name: t2("templateWorkflows.sort.newest", "Newest"), value: "newest" },
      {
        name: t2("templateWorkflows.sort.default", "Default"),
        value: "default"
      },
      {
        name: t2("templateWorkflows.sort.vramLowToHigh", "VRAM Usage (Low to High)"),
        value: "vram-low-to-high"
      },
      {
        name: t2(
          "templateWorkflows.sort.modelSizeLowToHigh",
          "Model Size (Low to High)"
        ),
        value: "model-size-low-to-high"
      },
      {
        name: t2("templateWorkflows.sort.alphabetical", "Alphabetical (A-Z)"),
        value: "alphabetical"
      }
    ]);
    const loadTrigger = ref(null);
    const shouldUsePagination = computed(() => !searchQuery.value.trim());
    const {
      paginatedItems: paginatedTemplates,
      isLoading: isLoadingMore,
      hasMoreItems: hasMoreTemplates,
      loadNextPage,
      reset: resetPagination
    } = useLazyPagination(filteredTemplates, { itemsPerPage: 24 });
    const displayTemplates = computed(() => {
      return shouldUsePagination.value ? paginatedTemplates.value : filteredTemplates.value;
    });
    useIntersectionObserver(loadTrigger, () => {
      if (shouldUsePagination.value && hasMoreTemplates.value && !isLoadingMore.value) {
        void loadNextPage();
      }
    });
    watch(
      [
        searchQuery,
        selectedNavItem,
        sortBy,
        selectedModels,
        selectedUseCases,
        selectedRunsOn
      ],
      () => {
        resetPagination();
        loadingTemplate.value = null;
        templateListKey.value++;
      }
    );
    const onLoadWorkflow = /* @__PURE__ */ __name(async (template) => {
      loadingTemplate.value = template.name;
      try {
        await loadWorkflowTemplate(
          template.name,
          getEffectiveSourceModule(template)
        );
        templateWasSelected.value = true;
        onClose();
      } finally {
        loadingTemplate.value = null;
      }
    }, "onLoadWorkflow");
    const pageTitle = computed(() => {
      const navItem = navItems.value.find(
        (item) => "id" in item ? item.id === selectedNavItem.value : item.items?.some((sub) => sub.id === selectedNavItem.value)
      );
      if (!navItem) {
        return t2("templateWorkflows.allTemplates", "All Templates");
      }
      return "id" in navItem ? navItem.label : navItem.items?.find((i) => i.id === selectedNavItem.value)?.label || t2("templateWorkflows.allTemplates", "All Templates");
    });
    const { isLoading } = useAsyncState(
      async () => {
        await Promise.all([
          loadTemplates(),
          workflowTemplatesStore.loadWorkflowTemplates()
        ]);
        return true;
      },
      false,
      // initial state
      {
        immediate: true
        // Start loading immediately
      }
    );
    onBeforeUnmount(() => {
      cardRefs.value = [];
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(BaseModalLayout, {
        "content-title": _ctx.$t("templateWorkflows.title", "Workflow Templates"),
        class: "workflow-template-selector-dialog"
      }, {
        leftPanel: withCtx(() => [
          createVNode(_sfc_main$1x, {
            modelValue: selectedNavItem.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedNavItem.value = $event),
            "nav-items": navItems.value
          }, {
            "header-icon": withCtx(() => _cache[8] || (_cache[8] = [
              createElementVNode("i", { class: "icon-[comfy--template]" }, null, -1)
            ])),
            "header-title": withCtx(() => [
              createElementVNode("span", _hoisted_1$n, toDisplayString(_ctx.$t("sideToolbar.templates", "Templates")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "nav-items"])
        ]),
        header: withCtx(() => [
          createVNode(_sfc_main$1D, {
            modelValue: unref(searchQuery),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
            size: "lg",
            class: "max-w-[384px]"
          }, null, 8, ["modelValue"])
        ]),
        "header-right-area": withCtx(() => [
          createElementVNode("div", _hoisted_2$g, [
            unref(filteredCount) !== unref(totalCount) ? (openBlock(), createBlock(_sfc_main$1I, {
              key: 0,
              type: "secondary",
              label: _ctx.$t("templateWorkflows.resetFilters", "Clear Filters"),
              onClick: unref(resetFilters)
            }, {
              icon: withCtx(() => _cache[9] || (_cache[9] = [
                createElementVNode("i", { class: "icon-[lucide--filter-x]" }, null, -1)
              ])),
              _: 1
            }, 8, ["label", "onClick"])) : createCommentVNode("", true)
          ])
        ]),
        contentFilter: withCtx(() => [
          createElementVNode("div", _hoisted_3$d, [
            createElementVNode("div", _hoisted_4$9, [
              createVNode(_sfc_main$1v, {
                modelValue: selectedModelObjects.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedModelObjects.value = $event),
                "search-query": modelSearchText.value,
                "onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => modelSearchText.value = $event),
                class: "w-[250px]",
                label: modelFilterLabel.value,
                options: modelOptions.value,
                "show-search-box": true,
                "show-selected-count": true,
                "show-clear-button": true
              }, {
                icon: withCtx(() => _cache[10] || (_cache[10] = [
                  createElementVNode("i", { class: "icon-[lucide--cpu]" }, null, -1)
                ])),
                _: 1
              }, 8, ["modelValue", "search-query", "label", "options"]),
              createVNode(_sfc_main$1v, {
                modelValue: selectedUseCaseObjects.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedUseCaseObjects.value = $event),
                label: useCaseFilterLabel.value,
                options: useCaseOptions.value,
                "show-search-box": true,
                "show-selected-count": true,
                "show-clear-button": true
              }, {
                icon: withCtx(() => _cache[11] || (_cache[11] = [
                  createElementVNode("i", { class: "icon-[lucide--target]" }, null, -1)
                ])),
                _: 1
              }, 8, ["modelValue", "label", "options"]),
              createVNode(_sfc_main$1v, {
                modelValue: selectedRunsOnObjects.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedRunsOnObjects.value = $event),
                label: runsOnFilterLabel.value,
                options: runsOnOptions.value,
                "show-search-box": true,
                "show-selected-count": true,
                "show-clear-button": true
              }, {
                icon: withCtx(() => _cache[12] || (_cache[12] = [
                  createElementVNode("i", { class: "icon-[lucide--server]" }, null, -1)
                ])),
                _: 1
              }, 8, ["modelValue", "label", "options"])
            ]),
            createElementVNode("div", null, [
              createVNode(_sfc_main$1u, {
                modelValue: unref(sortBy),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(sortBy) ? sortBy.value = $event : null),
                label: _ctx.$t("templateWorkflows.sorting", "Sort by"),
                options: sortOptions.value,
                class: "w-62.5"
              }, {
                icon: withCtx(() => _cache[13] || (_cache[13] = [
                  createElementVNode("i", { class: "icon-[lucide--arrow-up-down]" }, null, -1)
                ])),
                _: 1
              }, 8, ["modelValue", "label", "options"])
            ])
          ]),
          !unref(isLoading) ? (openBlock(), createElementBlock("div", _hoisted_5$8, [
            createElementVNode("span", null, toDisplayString(pageTitle.value), 1)
          ])) : createCommentVNode("", true)
        ]),
        content: withCtx(() => [
          !unref(isLoading) && unref(filteredTemplates).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6$6, [
            _cache[14] || (_cache[14] = createElementVNode("i", { class: "mb-4 icon-[lucide--search] h-12 w-12 opacity-50" }, null, -1)),
            createElementVNode("p", _hoisted_7$4, toDisplayString(_ctx.$t("templateWorkflows.noResults", "No templates found")), 1),
            createElementVNode("p", _hoisted_8$4, toDisplayString(_ctx.$t(
              "templateWorkflows.noResultsHint",
              "Try adjusting your search or filters"
            )), 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_9$3, [
            unref(isLoading) ? (openBlock(), createElementBlock("span", _hoisted_10$3)) : createCommentVNode("", true),
            (openBlock(), createElementBlock("div", {
              key: templateListKey.value,
              style: normalizeStyle(gridStyle.value),
              "data-testid": "template-workflows-content"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(isLoading) ? 12 : 0, (n) => {
                return openBlock(), createBlock(_sfc_main$1m, {
                  key: `initial-skeleton-${n}`,
                  size: "compact",
                  variant: "ghost",
                  rounded: "lg",
                  class: "hover:bg-base-background"
                }, {
                  top: withCtx(() => [
                    createVNode(_sfc_main$1l, { ratio: "landscape" }, {
                      default: withCtx(() => _cache[15] || (_cache[15] = [
                        createElementVNode("div", { class: "h-full w-full animate-pulse bg-dialog-surface" }, null, -1)
                      ])),
                      _: 1
                    })
                  ]),
                  bottom: withCtx(() => [
                    createVNode(_sfc_main$1n, null, {
                      default: withCtx(() => _cache[16] || (_cache[16] = [
                        createElementVNode("div", { class: "px-4 py-3" }, [
                          createElementVNode("div", { class: "mb-2 h-6 animate-pulse rounded bg-dialog-surface" }),
                          createElementVNode("div", { class: "h-4 animate-pulse rounded bg-dialog-surface" })
                        ], -1)
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(isLoading) ? [] : displayTemplates.value, (template) => {
                return openBlock(), createBlock(_sfc_main$1m, {
                  key: template.name,
                  ref_for: true,
                  ref_key: "cardRefs",
                  ref: cardRefs,
                  size: "compact",
                  variant: "ghost",
                  rounded: "lg",
                  "data-testid": `template-workflow-${template.name}`,
                  class: "hover:bg-base-background",
                  onMouseenter: /* @__PURE__ */ __name(($event) => hoveredTemplate.value = template.name, "onMouseenter"),
                  onMouseleave: _cache[7] || (_cache[7] = ($event) => hoveredTemplate.value = null),
                  onClick: /* @__PURE__ */ __name(($event) => onLoadWorkflow(template), "onClick")
                }, {
                  top: withCtx(() => [
                    createVNode(_sfc_main$1l, { ratio: "square" }, {
                      default: withCtx(() => [
                        createElementVNode("div", _hoisted_11$2, [
                          template.mediaType === "audio" ? (openBlock(), createBlock(_sfc_main$x, {
                            key: 0,
                            src: getBaseThumbnailSrc(template)
                          }, null, 8, ["src"])) : template.thumbnailVariant === "compareSlider" ? (openBlock(), createBlock(_sfc_main$w, {
                            key: 1,
                            "base-image-src": getBaseThumbnailSrc(template),
                            "overlay-image-src": getOverlayThumbnailSrc(template),
                            alt: unref(getTemplateTitle)(
                              template,
                              getEffectiveSourceModule(template)
                            ),
                            "is-hovered": hoveredTemplate.value === template.name,
                            "is-video": template.mediaType === "video" || template.mediaSubtype === "webp"
                          }, null, 8, ["base-image-src", "overlay-image-src", "alt", "is-hovered", "is-video"])) : template.thumbnailVariant === "hoverDissolve" ? (openBlock(), createBlock(_sfc_main$u, {
                            key: 2,
                            "base-image-src": getBaseThumbnailSrc(template),
                            "overlay-image-src": getOverlayThumbnailSrc(template),
                            alt: unref(getTemplateTitle)(
                              template,
                              getEffectiveSourceModule(template)
                            ),
                            "is-hovered": hoveredTemplate.value === template.name,
                            "is-video": template.mediaType === "video" || template.mediaSubtype === "webp"
                          }, null, 8, ["base-image-src", "overlay-image-src", "alt", "is-hovered", "is-video"])) : (openBlock(), createBlock(_sfc_main$v, {
                            key: 3,
                            src: getBaseThumbnailSrc(template),
                            alt: unref(getTemplateTitle)(
                              template,
                              getEffectiveSourceModule(template)
                            ),
                            "is-hovered": hoveredTemplate.value === template.name,
                            "is-video": template.mediaType === "video" || template.mediaSubtype === "webp",
                            "hover-zoom": template.thumbnailVariant === "zoomHover" ? 16 : 5
                          }, null, 8, ["src", "alt", "is-hovered", "is-video", "hover-zoom"])),
                          loadingTemplate.value === template.name ? (openBlock(), createBlock(unref(ProgressSpinner), {
                            key: 4,
                            class: "absolute inset-0 z-10 m-auto h-12 w-12"
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      "bottom-right": withCtx(() => [
                        template.tags && template.tags.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(template.tags, (tag) => {
                          return openBlock(), createBlock(_sfc_main$1k, {
                            key: tag,
                            label: tag
                          }, null, 8, ["label"]);
                        }), 128)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  bottom: withCtx(() => [
                    createVNode(_sfc_main$1n, null, {
                      default: withCtx(() => [
                        createElementVNode("div", _hoisted_12$1, [
                          createElementVNode("h3", {
                            class: "m-0 line-clamp-1 text-sm",
                            title: unref(getTemplateTitle)(
                              template,
                              getEffectiveSourceModule(template)
                            )
                          }, toDisplayString(unref(getTemplateTitle)(
                            template,
                            getEffectiveSourceModule(template)
                          )), 9, _hoisted_13$1),
                          createElementVNode("div", _hoisted_14$1, [
                            createElementVNode("div", _hoisted_15$1, [
                              createElementVNode("p", {
                                class: "m-0 line-clamp-2 text-sm text-muted",
                                title: unref(getTemplateDescription)(template)
                              }, toDisplayString(unref(getTemplateDescription)(template)), 9, _hoisted_16$1)
                            ]),
                            template.tutorialUrl ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
                              hoveredTemplate.value === template.name ? withDirectives((openBlock(), createBlock(_sfc_main$1E, mergeProps({
                                key: 0,
                                ref_for: true
                              }, _ctx.$attrs, {
                                type: "primary",
                                size: "sm",
                                onClick: withModifiers(($event) => openTutorial(template), ["stop"])
                              }), {
                                default: withCtx(() => _cache[17] || (_cache[17] = [
                                  createElementVNode("i", { class: "icon-[lucide--info] size-4" }, null, -1)
                                ])),
                                _: 2
                              }, 1040, ["onClick"])), [
                                [
                                  _directive_tooltip,
                                  _ctx.$t("g.seeTutorial"),
                                  void 0,
                                  { bottom: true }
                                ]
                              ]) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-testid", "onMouseenter", "onClick"]);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(isLoadingMore) ? 6 : 0, (n) => {
                return openBlock(), createBlock(_sfc_main$1m, {
                  key: `skeleton-${n}`,
                  size: "compact",
                  variant: "ghost",
                  rounded: "lg",
                  class: "hover:bg-base-background"
                }, {
                  top: withCtx(() => [
                    createVNode(_sfc_main$1l, { ratio: "square" }, {
                      default: withCtx(() => _cache[18] || (_cache[18] = [
                        createElementVNode("div", { class: "h-full w-full animate-pulse bg-dialog-surface" }, null, -1)
                      ])),
                      _: 1
                    })
                  ]),
                  bottom: withCtx(() => [
                    createVNode(_sfc_main$1n, null, {
                      default: withCtx(() => _cache[19] || (_cache[19] = [
                        createElementVNode("div", { class: "px-4 py-3" }, [
                          createElementVNode("div", { class: "mb-2 h-6 animate-pulse rounded bg-dialog-surface" }),
                          createElementVNode("div", { class: "h-4 animate-pulse rounded bg-dialog-surface" })
                        ], -1)
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ], 4))
          ])),
          !unref(isLoading) && unref(hasMoreTemplates) ? (openBlock(), createElementBlock("div", {
            key: 2,
            ref_key: "loadTrigger",
            ref: loadTrigger,
            class: "mt-4 flex h-4 w-full items-center justify-center"
          }, [
            unref(isLoadingMore) ? (openBlock(), createElementBlock("div", _hoisted_18$1, toDisplayString(_ctx.$t("templateWorkflows.loadingMore", "Loading more...")), 1)) : createCommentVNode("", true)
          ], 512)) : createCommentVNode("", true),
          !unref(isLoading) ? (openBlock(), createElementBlock("div", _hoisted_19$1, toDisplayString(_ctx.$t("templateWorkflows.resultsCount", {
            count: unref(filteredCount),
            total: unref(totalCount)
          })), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["content-title"]);
    };
  }
});
const DIALOG_KEY$1 = "global-workflow-template-selector";
const useWorkflowTemplateSelectorDialog = /* @__PURE__ */ __name(() => {
  const dialogService = useDialogService();
  const dialogStore = useDialogStore();
  function hide() {
    dialogStore.closeDialog({ key: DIALOG_KEY$1 });
  }
  __name(hide, "hide");
  function show(source = "command") {
    dialogService.showLayoutDialog({
      key: DIALOG_KEY$1,
      component: _sfc_main$t,
      props: {
        onClose: hide
      },
      dialogComponentProps: {
        pt: {
          content: { class: "!px-0 overflow-hidden h-full !py-0" },
          root: {
            style: "width: 90vw; height: 85vh; max-width: 1400px; display: flex;"
          }
        }
      }
    });
  }
  __name(show, "show");
  return {
    show,
    hide
  };
}, "useWorkflowTemplateSelectorDialog");
const whileMouseDown = /* @__PURE__ */ __name((elementOrEvent, callback, interval = 30) => {
  const element = elementOrEvent instanceof HTMLElement ? elementOrEvent : elementOrEvent.target;
  let iteration = 0;
  const intervalId = setInterval(() => {
    callback(iteration++);
  }, interval);
  const dispose = /* @__PURE__ */ __name(() => {
    clearInterval(intervalId);
    disposeGlobal();
    disposeLocal();
  }, "dispose");
  const disposeGlobal = useEventListener(document, "mouseup", dispose);
  const disposeLocal = useEventListener(element, "mouseup", dispose);
  return {
    dispose
  };
}, "whileMouseDown");
const _hoisted_1$m = { class: "flex h-8 w-8 items-center justify-center rounded-lg bg-black" };
const _hoisted_2$f = ["href", "onMousedown", "onClick"];
const _hoisted_3$c = { class: "p-menubar-item-label text-nowrap" };
const _hoisted_4$8 = {
  key: 3,
  class: "keybinding-tag ml-auto rounded border border-surface p-1 text-xs text-nowrap text-muted"
};
const _hoisted_5$7 = {
  key: 4,
  class: "pi pi-angle-right ml-auto"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "ComfyMenuButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const menuItemStore = useMenuItemStore();
    const colorPaletteStore = useColorPaletteStore();
    const colorPaletteService = useColorPaletteService();
    const dialogStore = useDialogStore();
    const managerState = useManagerState();
    const menuRef = ref(null);
    function onLogoMenuClick(event) {
      menuRef.value?.toggle(event);
    }
    __name(onLogoMenuClick, "onLogoMenuClick");
    const translateMenuItem = /* @__PURE__ */ __name((item) => {
      const label = typeof item.label === "function" ? item.label() : item.label;
      const translatedLabel = label ? t2(`menuLabels.${normalizeI18nKey(label)}`, label) : void 0;
      return {
        ...item,
        label: translatedLabel,
        items: item.items?.map(translateMenuItem)
      };
    }, "translateMenuItem");
    const showSettings = /* @__PURE__ */ __name((defaultPanel) => {
      dialogStore.showDialog({
        key: "global-settings",
        headerComponent: SettingDialogHeader,
        component: SettingDialogContent,
        props: {
          defaultPanel
        }
      });
    }, "showSettings");
    const showManageExtensions = /* @__PURE__ */ __name(async () => {
      await managerState.openManager({
        initialTab: ManagerTab.All,
        showToastOnLegacyError: false
      });
    }, "showManageExtensions");
    const themeMenuItems = computed(() => {
      return colorPaletteStore.palettes.map((palette) => ({
        key: `theme-${palette.id}`,
        label: palette.name,
        parentPath: "theme",
        comfyCommand: {
          active: /* @__PURE__ */ __name(() => colorPaletteStore.activePaletteId === palette.id, "active")
        },
        command: /* @__PURE__ */ __name(async () => {
          await colorPaletteService.loadColorPalette(palette.id);
        }, "command")
      }));
    });
    const extraMenuItems = computed(() => [
      { separator: true },
      {
        key: "theme",
        label: t2("menu.theme"),
        items: themeMenuItems.value
      },
      { separator: true },
      {
        key: "browse-templates",
        label: t2("menuLabels.Browse Templates"),
        icon: "icon-[comfy--template]",
        command: /* @__PURE__ */ __name(() => useWorkflowTemplateSelectorDialog().show("menu"), "command")
      },
      {
        key: "settings",
        label: t2("g.settings"),
        icon: "mdi mdi-cog-outline",
        command: /* @__PURE__ */ __name(() => {
          showSettings();
        }, "command")
      },
      {
        key: "manage-extensions",
        label: t2("menu.manageExtensions"),
        icon: "mdi mdi-puzzle-outline",
        command: showManageExtensions
      }
    ]);
    const translatedItems = computed(() => {
      const items = menuItemStore.menuItems.map(translateMenuItem);
      let helpIndex = items.findIndex((item) => item.key === "Help");
      let helpItem;
      if (helpIndex !== -1) {
        items[helpIndex].icon = "mdi mdi-help-circle-outline";
        const isLastItem = helpIndex !== items.length - 1;
        helpItem = items.splice(
          helpIndex,
          1,
          ...isLastItem ? [
            {
              separator: true
            }
          ] : []
        )[0];
      }
      helpIndex = items.length;
      items.splice(
        helpIndex,
        0,
        ...extraMenuItems.value,
        ...helpItem ? [
          {
            separator: true
          },
          helpItem
        ] : []
      );
      return items;
    });
    const onMenuShow = /* @__PURE__ */ __name(() => {
      void nextTick(() => {
        if (menuRef.value) {
          menuRef.value.dirty = true;
        }
      });
    }, "onMenuShow");
    const isZoomCommand = /* @__PURE__ */ __name((item) => {
      return item.comfyCommand?.id === "Comfy.Canvas.ZoomIn" || item.comfyCommand?.id === "Comfy.Canvas.ZoomOut";
    }, "isZoomCommand");
    const handleZoomMouseDown = /* @__PURE__ */ __name((item, event) => {
      if (item.comfyCommand) {
        whileMouseDown(
          event,
          async () => {
            await commandStore.execute(item.comfyCommand.id);
          },
          50
        );
      }
    }, "handleZoomMouseDown");
    const handleItemClick = /* @__PURE__ */ __name((item, event) => {
      if (isZoomCommand(item) || item.comfyCommand?.active) {
        event.preventDefault();
        event.stopPropagation();
        if (item.comfyCommand?.active) {
          item.command?.({
            item,
            originalEvent: event
          });
        }
        return false;
      }
    }, "handleItemClick");
    const hasActiveStateSiblings = /* @__PURE__ */ __name((item) => {
      return item.parentPath && (item.parentPath === "theme" || menuItemStore.menuItemHasActiveStateChildren[item.parentPath]);
    }, "hasActiveStateSiblings");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass(["comfy-menu-button-wrapper flex shrink-0 cursor-pointer flex-col items-center justify-center p-2 transition-colors", {
            "comfy-menu-button-active": menuRef.value?.visible
          }]),
          onClick: _cache[0] || (_cache[0] = ($event) => onLogoMenuClick($event))
        }, [
          createElementVNode("div", _hoisted_1$m, [
            createVNode(_sfc_main$z, {
              alt: "ComfyUI Logo",
              class: "comfyui-logo h-[18px] w-[18px] text-white",
              mode: "fill"
            })
          ])
        ], 2)), [
          [_directive_tooltip, {
            value: unref(t2)("sideToolbar.labels.menu"),
            showDelay: 300,
            hideDelay: 300
          }]
        ]),
        createVNode(unref(TieredMenu), {
          ref_key: "menuRef",
          ref: menuRef,
          model: translatedItems.value,
          popup: true,
          class: "comfy-command-menu",
          onShow: onMenuShow
        }, {
          item: withCtx(({ item, props }) => [
            createElementVNode("a", mergeProps({ class: "p-menubar-item-link px-4 py-2" }, props.action, {
              href: item.url,
              target: "_blank",
              class: typeof item.class === "function" ? item.class() : item.class,
              onMousedown: /* @__PURE__ */ __name(($event) => isZoomCommand(item) ? handleZoomMouseDown(item, $event) : void 0, "onMousedown"),
              onClick: /* @__PURE__ */ __name(($event) => handleItemClick(item, $event), "onClick")
            }), [
              hasActiveStateSiblings(item) ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["p-menubar-item-icon pi pi-check text-sm", { invisible: !item.comfyCommand?.active?.() }])
              }, null, 2)) : item.icon && item.comfyCommand?.id !== "Comfy.NewBlankWorkflow" ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(["p-menubar-item-icon text-sm", item.icon])
              }, null, 2)) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_3$c, toDisplayString(item.label), 1),
              item.comfyCommand?.id === "Comfy.NewBlankWorkflow" ? (openBlock(), createElementBlock("i", {
                key: 2,
                class: normalizeClass(["ml-auto", item.icon])
              }, null, 2)) : createCommentVNode("", true),
              item?.comfyCommand?.keybinding ? (openBlock(), createElementBlock("span", _hoisted_4$8, toDisplayString(item.comfyCommand.keybinding.combo.toString()), 1)) : createCommentVNode("", true),
              item.items ? (openBlock(), createElementBlock("i", _hoisted_5$7)) : createCommentVNode("", true)
            ], 16, _hoisted_2$f)
          ]),
          _: 1
        }, 8, ["model"])
      ], 64);
    };
  }
});
const ComfyMenuButton = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-5c21ad9a"]]);
const _hoisted_1$l = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18m96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24"
    }, null, -1)
  ]));
}
__name(render$1, "render$1");
const __unplugin_components_0$1 = markRaw({ name: "ph-terminal-bold", render: render$1 });
const _hoisted_1$k = { class: "side-bar-button-content" };
const _hoisted_2$e = {
  key: 0,
  class: "side-bar-button-label"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "SidebarIcon",
  props: {
    icon: { default: "" },
    selected: { type: Boolean, default: false },
    tooltip: { default: "" },
    tooltipSuffix: { default: "" },
    iconBadge: { type: [String, Function], default: "" },
    label: { default: "" },
    isSmall: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const { t: t2 } = useI18n();
    const emit = __emit;
    const overlayValue = computed(
      () => typeof __props.iconBadge === "function" ? __props.iconBadge() ?? "" : __props.iconBadge
    );
    const shouldShowBadge = computed(() => !!overlayValue.value);
    const computedTooltip = computed(() => t2(__props.tooltip) + __props.tooltipSuffix);
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        text: "",
        pt: {
          root: {
            class: `side-bar-button p-button-secondary ${_ctx.selected ? "side-bar-button-selected" : ""}`,
            "aria-label": computedTooltip.value
          }
        },
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
      }, {
        icon: withCtx(() => [
          createElementVNode("div", _hoisted_1$k, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              shouldShowBadge.value ? (openBlock(), createBlock(unref(OverlayBadge), {
                key: 0,
                value: overlayValue.value
              }, {
                default: withCtx(() => [
                  typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(_ctx.icon + " side-bar-button-icon")
                  }, null, 2)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
                    key: 1,
                    class: "side-bar-button-icon"
                  }))
                ]),
                _: 1
              }, 8, ["value"])) : typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("i", {
                key: 1,
                class: normalizeClass(_ctx.icon + " side-bar-button-icon")
              }, null, 2)) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
                key: 2,
                class: "side-bar-button-icon"
              })) : createCommentVNode("", true)
            ], true),
            _ctx.label && !_ctx.isSmall ? (openBlock(), createElementBlock("span", _hoisted_2$e, toDisplayString(unref(t2)(_ctx.label)), 1)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["pt"])), [
        [_directive_tooltip, {
          value: computedTooltip.value,
          showDelay: 300,
          hideDelay: 300
        }]
      ]);
    };
  }
});
const SidebarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-c90a38ba"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SidebarBottomPanelToggleButton",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    const toggleConsole = /* @__PURE__ */ __name(() => {
      bottomPanelStore.toggleBottomPanel();
    }, "toggleConsole");
    return (_ctx, _cache) => {
      const _component_i_ph58terminal_bold = __unplugin_components_0$1;
      return openBlock(), createBlock(SidebarIcon, {
        label: _ctx.$t("sideToolbar.labels.console"),
        tooltip: _ctx.$t("menu.toggleBottomPanel"),
        selected: unref(bottomPanelStore).activePanel == "terminal",
        onClick: toggleConsole
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_ph58terminal_bold)
        ]),
        _: 1
      }, 8, ["label", "tooltip", "selected"]);
    };
  }
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SidebarShortcutsToggleButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const bottomPanelStore = useBottomPanelStore();
    const commandStore = useCommandStore();
    const command = commandStore.getCommand("Workspace.ToggleBottomPanel.Shortcuts");
    const { formatKeySequence } = commandStore;
    const isShortcutsPanelVisible = computed(
      () => bottomPanelStore.activePanel === "shortcuts"
    );
    const tooltipText = computed(
      () => `${t2("shortcuts.keyboardShortcuts")} (${formatKeySequence(command)})`
    );
    const toggleShortcutsPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.togglePanel("shortcuts");
    }, "toggleShortcutsPanel");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        label: _ctx.$t("shortcuts.shortcuts"),
        tooltip: tooltipText.value,
        selected: isShortcutsPanelVisible.value,
        onClick: toggleShortcutsPanel
      }, {
        icon: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "icon-[lucide--keyboard]" }, null, -1)
        ])),
        _: 1
      }, 8, ["label", "tooltip", "selected"]);
    };
  }
});
const _hoisted_1$j = ["width", "height"];
const _hoisted_2$d = { "clip-path": "url(#clip0_1099_16244)" };
const _hoisted_3$b = ["stroke"];
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "PuzzleIcon",
  props: {
    size: { default: 16 },
    color: { default: "currentColor" },
    class: {}
  },
  setup(__props) {
    const iconClass = computed(() => __props.class || "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: _ctx.size,
        height: _ctx.size,
        viewBox: "0 0 16 16",
        fill: "none",
        class: normalizeClass(iconClass.value)
      }, [
        createElementVNode("g", _hoisted_2$d, [
          createElementVNode("path", {
            d: "M4.99992 3.00016C4.99992 2.07969 5.74611 1.3335 6.66658 1.3335C7.58706 1.3335 8.33325 2.07969 8.33325 3.00016V4.00016H8.99992C9.9318 4.00016 10.3977 4.00016 10.7653 4.1524C11.2553 4.35539 11.6447 4.74474 11.8477 5.2348C11.9999 5.60234 11.9999 6.06828 11.9999 7.00016H12.9999C13.9204 7.00016 14.6666 7.74635 14.6666 8.66683C14.6666 9.5873 13.9204 10.3335 12.9999 10.3335H11.9999V11.4668C11.9999 12.5869 11.9999 13.147 11.7819 13.5748C11.5902 13.9511 11.2842 14.2571 10.9079 14.4488C10.4801 14.6668 9.92002 14.6668 8.79992 14.6668H8.33325V13.5002C8.33325 12.6717 7.66168 12.0002 6.83325 12.0002C6.00482 12.0002 5.33325 12.6717 5.33325 13.5002V14.6668H4.53325C3.41315 14.6668 2.85309 14.6668 2.42527 14.4488C2.04895 14.2571 1.74299 13.9511 1.55124 13.5748C1.33325 13.147 1.33325 12.5869 1.33325 11.4668V10.3335H2.33325C3.25373 10.3335 3.99992 9.5873 3.99992 8.66683C3.99992 7.74635 3.25373 7.00016 2.33325 7.00016H1.33325C1.33325 6.06828 1.33325 5.60234 1.48549 5.2348C1.68848 4.74474 2.07783 4.35539 2.56789 4.1524C2.93543 4.00016 3.40137 4.00016 4.33325 4.00016H4.99992V3.00016Z",
            stroke: _ctx.color,
            "stroke-width": "1.2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, _hoisted_3$b)
        ]),
        _cache[0] || (_cache[0] = createElementVNode("defs", null, [
          createElementVNode("clipPath", { id: "clip0_1099_16244" }, [
            createElementVNode("rect", {
              width: "16",
              height: "16",
              fill: "white"
            })
          ])
        ], -1))
      ], 10, _hoisted_1$j);
    };
  }
});
const releaseApiClient = axios.create({
  baseURL: getComfyApiBaseUrl(),
  headers: {
    "Content-Type": "application/json"
  }
});
const useReleaseService = /* @__PURE__ */ __name(() => {
  const isLoading = ref(false);
  const error = ref(null);
  watch(
    () => getComfyApiBaseUrl(),
    (url) => {
      releaseApiClient.defaults.baseURL = url;
    }
  );
  const handleApiError = /* @__PURE__ */ __name((err, context, routeSpecificErrors) => {
    if (!axios.isAxiosError(err))
      return err instanceof Error ? `${context}: ${err.message}` : `${context}: Unknown error occurred`;
    const axiosError = err;
    if (axiosError.response) {
      const { status, data } = axiosError.response;
      if (routeSpecificErrors && routeSpecificErrors[status])
        return routeSpecificErrors[status];
      switch (status) {
        case 400:
          return `Bad request: ${data?.message || "Invalid input"}`;
        case 401:
          return "Unauthorized: Authentication required";
        case 403:
          return `Forbidden: ${data?.message || "Access denied"}`;
        case 404:
          return `Not found: ${data?.message || "Resource not found"}`;
        case 500:
          return `Server error: ${data?.message || "Internal server error"}`;
        default:
          return `${context}: ${data?.message || axiosError.message}`;
      }
    }
    return `${context}: ${axiosError.message}`;
  }, "handleApiError");
  const executeApiRequest = /* @__PURE__ */ __name(async (apiCall, errorContext, routeSpecificErrors) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiCall();
      return response.data;
    } catch (err) {
      if (isAbortError(err)) return null;
      error.value = handleApiError(err, errorContext, routeSpecificErrors);
      return null;
    } finally {
      isLoading.value = false;
    }
  }, "executeApiRequest");
  const getReleases = /* @__PURE__ */ __name(async (params, signal) => {
    const endpoint = "/releases";
    const errorContext = "Failed to get releases";
    const routeSpecificErrors = {
      400: "Invalid project or version parameter"
    };
    const apiResponse = await executeApiRequest(
      () => releaseApiClient.get(endpoint, {
        params,
        signal
      }),
      errorContext,
      routeSpecificErrors
    );
    return apiResponse;
  }, "getReleases");
  return {
    isLoading,
    error,
    getReleases
  };
}, "useReleaseService");
const useReleaseStore = defineStore("release", () => {
  const releases = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const releaseService = useReleaseService();
  const systemStatsStore = useSystemStatsStore();
  const settingStore = useSettingStore();
  const currentComfyUIVersion = computed(
    () => systemStatsStore?.systemStats?.system?.comfyui_version ?? ""
  );
  const locale = computed(() => settingStore.get("Comfy.Locale"));
  const releaseVersion = computed(
    () => settingStore.get("Comfy.Release.Version")
  );
  const releaseStatus = computed(() => settingStore.get("Comfy.Release.Status"));
  const releaseTimestamp = computed(
    () => settingStore.get("Comfy.Release.Timestamp")
  );
  const showVersionUpdates = computed(
    () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
  );
  const recentRelease = computed(() => {
    return releases.value[0] ?? null;
  });
  const recentReleases = computed(() => {
    return releases.value.slice(0, 3);
  });
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1e3;
  const isNewVersionAvailable = computed(
    () => !!recentRelease.value && semver.compare(
      recentRelease.value.version,
      currentComfyUIVersion.value || "0.0.0"
    ) > 0
  );
  const isLatestVersion = computed(
    () => !!recentRelease.value && semver.compare(
      recentRelease.value.version,
      currentComfyUIVersion.value || "0.0.0"
    ) === 0
  );
  const hasMediumOrHighAttention = computed(() => {
    const attention = recentRelease.value?.attention;
    return attention === "medium" || attention === "high";
  });
  const shouldShowToast = computed(() => {
    if (!isElectron() || isCloud) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    if (!hasMediumOrHighAttention.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value?.version && ["skipped", "changelog seen"].includes(releaseStatus.value)) {
      return false;
    }
    return true;
  });
  const shouldShowRedDot = computed(() => {
    if (!isElectron() || isCloud) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    const { version } = recentRelease.value;
    if (releaseVersion.value === version && releaseStatus.value === "changelog seen") {
      return false;
    }
    if (hasMediumOrHighAttention.value) {
      return true;
    }
    if (releaseVersion.value === version && releaseStatus.value === "skipped" && releaseTimestamp.value && Date.now() - releaseTimestamp.value >= THREE_DAYS_MS) {
      return false;
    }
    return true;
  });
  const shouldShowPopup = computed(() => {
    if (!isElectron() || isCloud) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isLatestVersion.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value.version && releaseStatus.value === "what's new seen") {
      return false;
    }
    return true;
  });
  async function handleSkipRelease(version) {
    if (version !== recentRelease.value?.version || releaseStatus.value === "changelog seen") {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "skipped");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleSkipRelease, "handleSkipRelease");
  async function handleShowChangelog(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "changelog seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleShowChangelog, "handleShowChangelog");
  async function handleWhatsNewSeen(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "what's new seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleWhatsNewSeen, "handleWhatsNewSeen");
  async function fetchReleases() {
    if (isLoading.value) {
      return;
    }
    if (!showVersionUpdates.value) {
      return;
    }
    if (systemStatsStore.systemStats?.system?.argv?.includes(
      "--disable-api-nodes"
    )) {
      return;
    }
    isLoading.value = true;
    error.value = null;
    try {
      if (!systemStatsStore.systemStats) {
        await until(systemStatsStore.isInitialized);
      }
      const fetchedReleases = await releaseService.getReleases({
        project: "comfyui",
        current_version: currentComfyUIVersion.value,
        form_factor: systemStatsStore.getFormFactor(),
        locale: stringToLocale(locale.value)
      });
      if (fetchedReleases !== null) {
        releases.value = fetchedReleases;
      } else if (releaseService.error.value) {
        error.value = releaseService.error.value;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error occurred";
    } finally {
      isLoading.value = false;
    }
  }
  __name(fetchReleases, "fetchReleases");
  async function initialize() {
    await fetchReleases();
  }
  __name(initialize, "initialize");
  return {
    releases,
    isLoading,
    error,
    recentRelease,
    recentReleases,
    shouldShowToast,
    shouldShowRedDot,
    shouldShowPopup,
    shouldShowUpdateButton: isNewVersionAvailable,
    handleSkipRelease,
    handleShowChangelog,
    handleWhatsNewSeen,
    fetchReleases,
    initialize
  };
});
const releaseStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useReleaseStore
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$i = ["aria-label"];
const _hoisted_2$c = {
  class: "help-menu-section",
  role: "menubar"
};
const _hoisted_3$a = ["onClick", "onMouseenter", "onMouseleave"];
const _hoisted_4$7 = { class: "help-menu-icon-container" };
const _hoisted_5$6 = { class: "help-menu-icon" };
const _hoisted_6$5 = {
  key: 0,
  class: "menu-red-dot"
};
const _hoisted_7$3 = { class: "menu-label" };
const _hoisted_8$3 = {
  key: 0,
  class: "pi pi-chevron-right"
};
const _hoisted_9$2 = {
  key: 0,
  class: "submenu-divider"
};
const _hoisted_10$2 = ["onClick"];
const _hoisted_11$1 = { class: "menu-label" };
const _hoisted_12 = {
  key: 0,
  class: "whats-new-section"
};
const _hoisted_13 = { class: "section-description" };
const _hoisted_14 = ["aria-label"];
const _hoisted_15 = ["onClick", "onKeydown"];
const _hoisted_16 = { class: "release-content" };
const _hoisted_17 = { class: "release-title" };
const _hoisted_18 = ["datetime"];
const _hoisted_19 = { class: "normal-state" };
const _hoisted_20 = { class: "hover-state" };
const _hoisted_21 = {
  key: 1,
  class: "help-menu-item",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_22 = {
  key: 2,
  class: "help-menu-item",
  role: "status"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "HelpCenterMenuContent",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const EXTERNAL_LINKS = {
      DOCS: "https://docs.comfy.org/",
      DISCORD: "https://www.comfy.org/discord",
      GITHUB: "https://github.com/comfyanonymous/ComfyUI",
      DESKTOP_GUIDE_WINDOWS: "https://docs.comfy.org/installation/desktop/windows",
      DESKTOP_GUIDE_MACOS: "https://docs.comfy.org/installation/desktop/macos",
      UPDATE_GUIDE: "https://docs.comfy.org/installation/update_comfyui"
    };
    const TIME_UNITS = {
      MINUTE: 60 * 1e3,
      HOUR: 60 * 60 * 1e3,
      DAY: 24 * 60 * 60 * 1e3,
      WEEK: 7 * 24 * 60 * 60 * 1e3,
      MONTH: 30 * 24 * 60 * 60 * 1e3,
      YEAR: 365 * 24 * 60 * 60 * 1e3
    };
    const SUBMENU_CONFIG = {
      DELAY_MS: 100,
      OFFSET_PX: 8,
      Z_INDEX: 10001
    };
    const { t: t2, locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const commandStore = useCommandStore();
    const settingStore = useSettingStore();
    const emit = __emit;
    const isSubmenuVisible = ref(false);
    const submenuRef = ref(null);
    const submenuStyle = ref({});
    let hoverTimeout = null;
    const openedAt = ref(Date.now());
    const hasReleases = computed(() => releaseStore2.releases.length > 0);
    const showVersionUpdates = computed(
      () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
    );
    const { shouldShowRedDot: shouldShowManagerRedDot } = useConflictAcknowledgment();
    const moreItems = computed(() => {
      const allMoreItems = [
        {
          key: "desktop-guide",
          type: "item",
          label: t2("helpCenter.desktopUserGuide"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            const docsUrl = electronAPI().getPlatform() === "darwin" ? EXTERNAL_LINKS.DESKTOP_GUIDE_MACOS : EXTERNAL_LINKS.DESKTOP_GUIDE_WINDOWS;
            openExternalLink(docsUrl);
            emit("close");
          }, "action")
        },
        {
          key: "dev-tools",
          type: "item",
          label: t2("helpCenter.openDevTools"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            openDevTools();
            emit("close");
          }, "action")
        },
        {
          key: "divider-1",
          type: "divider",
          visible: isElectron()
        },
        {
          key: "reinstall",
          type: "item",
          label: t2("helpCenter.reinstall"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            onReinstall();
            emit("close");
          }, "action")
        }
      ];
      return allMoreItems.filter((item) => item.visible !== false);
    });
    const hasVisibleMoreItems = computed(() => {
      return !!moreItems.value.length;
    });
    const moreMenuItem = computed(
      () => menuItems.value.find((item) => item.key === "more")
    );
    const menuItems = computed(() => {
      const items = [
        {
          key: "docs",
          type: "item",
          icon: "pi pi-book",
          label: t2("helpCenter.docs"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DOCS);
            emit("close");
          }, "action")
        },
        {
          key: "discord",
          type: "item",
          icon: "pi pi-discord",
          label: "Discord",
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DISCORD);
            emit("close");
          }, "action")
        },
        {
          key: "github",
          type: "item",
          icon: "pi pi-github",
          label: t2("helpCenter.github"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.GITHUB);
            emit("close");
          }, "action")
        },
        {
          key: "help",
          type: "item",
          icon: "pi pi-question-circle",
          label: t2("helpCenter.helpFeedback"),
          action: /* @__PURE__ */ __name(() => {
            void commandStore.execute("Comfy.ContactSupport");
            emit("close");
          }, "action")
        }
      ];
      {
        items.push({
          key: "manager",
          type: "item",
          icon: _sfc_main$o,
          label: t2("helpCenter.managerExtension"),
          showRedDot: shouldShowManagerRedDot.value,
          action: /* @__PURE__ */ __name(async () => {
            await useManagerState().openManager({
              initialTab: ManagerTab.All,
              showToastOnLegacyError: false
            });
            emit("close");
          }, "action")
        });
      }
      items.push({
        key: "more",
        type: "item",
        icon: "",
        label: t2("helpCenter.more"),
        visible: hasVisibleMoreItems.value,
        action: /* @__PURE__ */ __name(() => {
        }, "action"),
        // No action for more item
        items: moreItems.value
      });
      return items;
    });
    const openExternalLink = /* @__PURE__ */ __name((url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, "openExternalLink");
    const clearHoverTimeout = /* @__PURE__ */ __name(() => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    }, "clearHoverTimeout");
    const calculateSubmenuPosition = /* @__PURE__ */ __name((button) => {
      const rect = button.getBoundingClientRect();
      const submenuWidth = 210;
      const visibleItemCount = moreMenuItem.value?.items?.filter((item) => item.visible !== false).length || 0;
      const estimatedHeight = visibleItemCount * 48 + 16;
      const submenuHeight = submenuRef.value?.offsetHeight || estimatedHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let top = rect.top;
      let left = rect.right + SUBMENU_CONFIG.OFFSET_PX;
      if (left + submenuWidth > viewportWidth) {
        left = rect.left - submenuWidth - SUBMENU_CONFIG.OFFSET_PX;
      }
      if (top + submenuHeight > viewportHeight) {
        top = Math.max(
          SUBMENU_CONFIG.OFFSET_PX,
          // Minimum distance from top of viewport
          rect.bottom - submenuHeight
        );
      }
      if (top < SUBMENU_CONFIG.OFFSET_PX) {
        top = SUBMENU_CONFIG.OFFSET_PX;
      }
      top -= 8;
      return {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: SUBMENU_CONFIG.Z_INDEX
      };
    }, "calculateSubmenuPosition");
    const formatReleaseDate = /* @__PURE__ */ __name((dateString) => {
      if (!dateString) return "date";
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const timeUnits = [
        { unit: TIME_UNITS.YEAR, suffix: "y" },
        { unit: TIME_UNITS.MONTH, suffix: "mo" },
        { unit: TIME_UNITS.WEEK, suffix: "w" },
        { unit: TIME_UNITS.DAY, suffix: "d" },
        { unit: TIME_UNITS.HOUR, suffix: "h" },
        { unit: TIME_UNITS.MINUTE, suffix: "min" }
      ];
      for (const { unit, suffix } of timeUnits) {
        const value = Math.floor(diffTime / unit);
        if (value > 0) {
          return `${value}${suffix} ago`;
        }
      }
      return "now";
    }, "formatReleaseDate");
    const shouldShowUpdateButton = /* @__PURE__ */ __name((release) => {
      return releaseStore2.shouldShowUpdateButton && release === releaseStore2.recentReleases[0];
    }, "shouldShowUpdateButton");
    const onMenuItemHover = /* @__PURE__ */ __name(async (key, event) => {
      if (key !== "more" || !moreMenuItem.value?.items) return;
      const hasVisibleItems = moreMenuItem.value.items.some(
        (item) => item.visible !== false
      );
      if (!hasVisibleItems) return;
      clearHoverTimeout();
      const moreButton = event.currentTarget;
      submenuStyle.value = calculateSubmenuPosition(moreButton);
      isSubmenuVisible.value = true;
      await nextTick();
      if (submenuRef.value) {
        submenuStyle.value = calculateSubmenuPosition(moreButton);
      }
    }, "onMenuItemHover");
    const onMenuItemLeave = /* @__PURE__ */ __name((key) => {
      if (key !== "more") return;
      hoverTimeout = window.setTimeout(() => {
        isSubmenuVisible.value = false;
      }, SUBMENU_CONFIG.DELAY_MS);
    }, "onMenuItemLeave");
    const onSubmenuHover = /* @__PURE__ */ __name(() => {
      clearHoverTimeout();
    }, "onSubmenuHover");
    const onSubmenuLeave = /* @__PURE__ */ __name(() => {
      isSubmenuVisible.value = false;
    }, "onSubmenuLeave");
    const openDevTools = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        electronAPI().openDevTools();
      }
    }, "openDevTools");
    const onReinstall = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        void electronAPI().reinstall();
      }
    }, "onReinstall");
    const onReleaseClick = /* @__PURE__ */ __name((release) => {
      void releaseStore2.handleShowChangelog(release.version);
      const versionAnchor = formatVersionAnchor(release.version);
      const changelogUrl = `${getChangelogUrl()}#${versionAnchor}`;
      openExternalLink(changelogUrl);
      emit("close");
    }, "onReleaseClick");
    const onUpdate = /* @__PURE__ */ __name((_) => {
      openExternalLink(EXTERNAL_LINKS.UPDATE_GUIDE);
      emit("close");
    }, "onUpdate");
    const getChangelogUrl = /* @__PURE__ */ __name(() => {
      const isChineseLocale = locale.value === "zh";
      return isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
    }, "getChangelogUrl");
    onMounted(async () => {
      if (!hasReleases.value) {
        await releaseStore2.fetchReleases();
      }
    });
    onBeforeUnmount(() => {
      Math.round((Date.now() - openedAt.value) / 1e3);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "help-center-menu",
        role: "menu",
        "aria-label": _ctx.$t("helpCenter.helpFeedback")
      }, [
        createElementVNode("nav", _hoisted_2$c, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (menuItem) => {
            return withDirectives((openBlock(), createElementBlock("button", {
              key: menuItem.key,
              type: "button",
              class: normalizeClass(["help-menu-item", { "more-item": menuItem.key === "more" }]),
              role: "menuitem",
              onClick: menuItem.action,
              onMouseenter: /* @__PURE__ */ __name(($event) => onMenuItemHover(menuItem.key, $event), "onMouseenter"),
              onMouseleave: /* @__PURE__ */ __name(($event) => onMenuItemLeave(menuItem.key), "onMouseleave")
            }, [
              createElementVNode("div", _hoisted_4$7, [
                createElementVNode("div", _hoisted_5$6, [
                  typeof menuItem.icon === "object" ? (openBlock(), createBlock(resolveDynamicComponent(menuItem.icon), {
                    key: 0,
                    size: 16
                  })) : (openBlock(), createElementBlock("i", {
                    key: 1,
                    class: normalizeClass(menuItem.icon)
                  }, null, 2))
                ]),
                menuItem.showRedDot ? (openBlock(), createElementBlock("div", _hoisted_6$5)) : createCommentVNode("", true)
              ]),
              createElementVNode("span", _hoisted_7$3, toDisplayString(menuItem.label), 1),
              menuItem.key === "more" ? (openBlock(), createElementBlock("i", _hoisted_8$3)) : createCommentVNode("", true)
            ], 42, _hoisted_3$a)), [
              [vShow, menuItem.visible !== false]
            ]);
          }), 128))
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isSubmenuVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "submenuRef",
            ref: submenuRef,
            class: "more-submenu",
            style: normalizeStyle(submenuStyle.value),
            onMouseenter: onSubmenuHover,
            onMouseleave: onSubmenuLeave
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(moreMenuItem.value?.items, (submenuItem) => {
              return openBlock(), createElementBlock(Fragment, {
                key: submenuItem.key
              }, [
                submenuItem.type === "divider" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_9$2, null, 512)), [
                  [vShow, submenuItem.visible !== false]
                ]) : withDirectives((openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "help-menu-item submenu-item",
                  role: "menuitem",
                  onClick: submenuItem.action
                }, [
                  createElementVNode("span", _hoisted_11$1, toDisplayString(submenuItem.label), 1)
                ], 8, _hoisted_10$2)), [
                  [vShow, submenuItem.visible !== false]
                ])
              ], 64);
            }), 128))
          ], 36)) : createCommentVNode("", true)
        ])),
        showVersionUpdates.value ? (openBlock(), createElementBlock("section", _hoisted_12, [
          createElementVNode("h3", _hoisted_13, toDisplayString(_ctx.$t("helpCenter.whatsNew")), 1),
          hasReleases.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            role: "group",
            "aria-label": _ctx.$t("helpCenter.recentReleases")
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(releaseStore2).recentReleases, (release) => {
              return openBlock(), createElementBlock("article", {
                key: release.id || release.version,
                class: "help-menu-item release-menu-item",
                role: "button",
                tabindex: "0",
                onClick: /* @__PURE__ */ __name(($event) => onReleaseClick(release), "onClick"),
                onKeydown: [
                  withKeys(($event) => onReleaseClick(release), ["enter"]),
                  withKeys(withModifiers(($event) => onReleaseClick(release), ["prevent"]), ["space"])
                ]
              }, [
                _cache[0] || (_cache[0] = createElementVNode("i", {
                  class: "pi pi-refresh help-menu-icon",
                  "aria-hidden": "true"
                }, null, -1)),
                createElementVNode("div", _hoisted_16, [
                  createElementVNode("span", _hoisted_17, toDisplayString(_ctx.$t("g.releaseTitle", {
                    package: "Comfy",
                    version: release.version
                  })), 1),
                  createElementVNode("time", {
                    class: "release-date",
                    datetime: release.published_at
                  }, [
                    createElementVNode("span", _hoisted_19, toDisplayString(formatReleaseDate(release.published_at)), 1),
                    createElementVNode("span", _hoisted_20, toDisplayString(_ctx.$t("helpCenter.clickToLearnMore")), 1)
                  ], 8, _hoisted_18)
                ]),
                shouldShowUpdateButton(release) ? (openBlock(), createBlock(unref(Button), {
                  key: 0,
                  label: _ctx.$t("helpCenter.updateAvailable"),
                  size: "small",
                  class: "update-button",
                  onClick: withModifiers(($event) => onUpdate(), ["stop"])
                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
              ], 40, _hoisted_15);
            }), 128))
          ], 8, _hoisted_14)) : unref(releaseStore2).isLoading ? (openBlock(), createElementBlock("div", _hoisted_21, [
            _cache[1] || (_cache[1] = createElementVNode("i", {
              class: "pi pi-spin pi-spinner help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.loadingReleases")), 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
            _cache[2] || (_cache[2] = createElementVNode("i", {
              class: "pi pi-info-circle help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.noRecentReleases")), 1)
          ]))
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1$i);
    };
  }
});
const HelpCenterMenuContent = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-48916b25"]]);
const _hoisted_1$h = {
  key: 0,
  class: "release-toast-popup"
};
const _hoisted_2$b = { class: "release-notification-toast" };
const _hoisted_3$9 = { class: "toast-header" };
const _hoisted_4$6 = { class: "toast-text" };
const _hoisted_5$5 = { class: "toast-title" };
const _hoisted_6$4 = { class: "toast-version-badge" };
const _hoisted_7$2 = { class: "toast-actions-section" };
const _hoisted_8$2 = { class: "actions-row" };
const _hoisted_9$1 = { class: "left-actions" };
const _hoisted_10$1 = ["href"];
const _hoisted_11 = { class: "right-actions" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ReleaseNotificationToast",
  setup(__props) {
    const { locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowToast && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    let hideTimer = null;
    const startAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        dismissToast();
      }, 8e3);
    }, "startAutoHide");
    const clearAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    }, "clearAutoHide");
    const dismissToast = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
      clearAutoHide();
    }, "dismissToast");
    const handleSkip = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleSkipRelease(latestRelease.value.version);
      }
      dismissToast();
    }, "handleSkip");
    const handleLearnMore = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleShowChangelog(latestRelease.value.version);
      }
      dismissToast();
    }, "handleLearnMore");
    const handleUpdate = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/installation/update_comfyui", "_blank");
      dismissToast();
    }, "handleUpdate");
    watch(shouldShow, (isVisible) => {
      if (isVisible) {
        startAutoHide();
      } else {
        clearAutoHide();
      }
    });
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
        createElementVNode("div", _hoisted_2$b, [
          createElementVNode("div", _hoisted_3$9, [
            _cache[0] || (_cache[0] = createElementVNode("div", { class: "toast-icon" }, [
              createElementVNode("i", { class: "pi pi-download" })
            ], -1)),
            createElementVNode("div", _hoisted_4$6, [
              createElementVNode("div", _hoisted_5$5, toDisplayString(_ctx.$t("releaseToast.newVersionAvailable")), 1),
              createElementVNode("div", _hoisted_6$4, toDisplayString(latestRelease.value?.version), 1)
            ])
          ]),
          createElementVNode("div", _hoisted_7$2, [
            createElementVNode("div", _hoisted_8$2, [
              createElementVNode("div", _hoisted_9$1, [
                createElementVNode("a", {
                  class: "learn-more-link",
                  href: changelogUrl.value,
                  target: "_blank",
                  rel: "noopener,noreferrer",
                  onClick: handleLearnMore
                }, toDisplayString(_ctx.$t("releaseToast.whatsNew")), 9, _hoisted_10$1)
              ]),
              createElementVNode("div", _hoisted_11, [
                createElementVNode("button", {
                  class: "skip-button",
                  onClick: handleSkip
                }, toDisplayString(_ctx.$t("releaseToast.skip")), 1),
                createElementVNode("button", {
                  class: "cta-button",
                  onClick: handleUpdate
                }, toDisplayString(_ctx.$t("releaseToast.update")), 1)
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ReleaseNotificationToast = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-ed319362"]]);
const _hoisted_1$g = {
  key: 0,
  class: "whats-new-popup-container"
};
const _hoisted_2$a = ["aria-label"];
const _hoisted_3$8 = { class: "popup-content" };
const _hoisted_4$5 = ["innerHTML"];
const _hoisted_5$4 = { class: "popup-actions" };
const _hoisted_6$3 = ["href"];
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "WhatsNewPopup",
  emits: ["whats-new-dismissed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { locale, t: t2 } = useI18n();
    const releaseStore2 = useReleaseStore();
    const emit = __emit;
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowPopup && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    const formattedContent = computed(() => {
      if (!latestRelease.value?.content) {
        return `<p>${t2("whatsNewPopup.noReleaseNotes")}</p>`;
      }
      try {
        return renderMarkdownToHtml(latestRelease.value.content);
      } catch (error) {
        console.error("Error parsing markdown:", error);
        return latestRelease.value.content.replace(/\n/g, "<br>");
      }
    });
    const show = /* @__PURE__ */ __name(() => {
      isDismissed.value = false;
    }, "show");
    const hide = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
      emit("whats-new-dismissed");
    }, "hide");
    const closePopup = /* @__PURE__ */ __name(async () => {
      if (latestRelease.value) {
        await releaseStore2.handleWhatsNewSeen(latestRelease.value.version);
      }
      hide();
    }, "closePopup");
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    __expose({
      show,
      hide
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
        _cache[2] || (_cache[2] = createStaticVNode('<div class="help-center-arrow" data-v-87640056><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none" data-v-87640056><path d="M15.25 1.27246L15.25 17.7275L0.999023 9.5L15.25 1.27246Z" fill="#353535" data-v-87640056></path><path d="M15.25 1.27246L0.999023 9.5" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-87640056></path><path d="M0.999023 9.5L15.25 17.7275" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-87640056></path></svg></div>', 1)),
        createElementVNode("div", {
          class: "whats-new-popup",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("button", {
            class: "close-button",
            "aria-label": _ctx.$t("g.close"),
            onClick: closePopup
          }, _cache[1] || (_cache[1] = [
            createElementVNode("div", { class: "close-icon" }, null, -1)
          ]), 8, _hoisted_2$a),
          createElementVNode("div", _hoisted_3$8, [
            createElementVNode("div", {
              class: "content-text",
              innerHTML: formattedContent.value
            }, null, 8, _hoisted_4$5),
            createElementVNode("div", _hoisted_5$4, [
              createElementVNode("a", {
                class: "learn-more-link",
                href: changelogUrl.value,
                target: "_blank",
                rel: "noopener,noreferrer",
                onClick: closePopup
              }, toDisplayString(_ctx.$t("whatsNewPopup.learnMore")), 9, _hoisted_6$3)
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const WhatsNewPopup = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-87640056"]]);
const useHelpCenterStore = defineStore("helpCenter", () => {
  const isVisible = ref(false);
  const toggle = /* @__PURE__ */ __name(() => {
    isVisible.value = !isVisible.value;
  }, "toggle");
  const show = /* @__PURE__ */ __name(() => {
    isVisible.value = true;
  }, "show");
  const hide = /* @__PURE__ */ __name(() => {
    isVisible.value = false;
  }, "hide");
  return {
    isVisible,
    toggle,
    show,
    hide
  };
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SidebarHelpCenterIcon",
  props: {
    isSmall: { type: Boolean }
  },
  setup(__props) {
    const settingStore = useSettingStore();
    const releaseStore2 = useReleaseStore();
    const helpCenterStore = useHelpCenterStore();
    const { isVisible: isHelpCenterVisible } = storeToRefs(helpCenterStore);
    const { shouldShowRedDot: showReleaseRedDot } = storeToRefs(releaseStore2);
    const conflictDetection = useConflictDetection();
    const { showNodeConflictDialog } = useDialogService();
    const { shouldShowRedDot: shouldShowConflictRedDot, markConflictsAsSeen } = useConflictAcknowledgment();
    const props = __props;
    const { isSmall } = toRefs(props);
    const shouldShowRedDot = computed(() => {
      const releaseRedDot = showReleaseRedDot.value;
      return releaseRedDot || shouldShowConflictRedDot.value;
    });
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const toggleHelpCenter = /* @__PURE__ */ __name(() => {
      helpCenterStore.toggle();
    }, "toggleHelpCenter");
    const closeHelpCenter = /* @__PURE__ */ __name(() => {
      helpCenterStore.hide();
    }, "closeHelpCenter");
    const handleWhatsNewDismissed = /* @__PURE__ */ __name(async () => {
      try {
        const shouldShow = await conflictDetection.shouldShowConflictModalAfterUpdate();
        if (shouldShow) {
          showConflictModal();
        }
      } catch (error) {
        console.error("[HelpCenter] Error checking conflict modal:", error);
      }
    }, "handleWhatsNewDismissed");
    const showConflictModal = /* @__PURE__ */ __name(() => {
      showNodeConflictDialog({
        showAfterWhatsNew: true,
        dialogComponentProps: {
          onClose: /* @__PURE__ */ __name(() => {
            markConflictsAsSeen();
          }, "onClose")
        }
      });
    }, "showConflictModal");
    onMounted(async () => {
      await releaseStore2.initialize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(SidebarIcon, {
          icon: "pi pi-question-circle",
          class: "comfy-help-center-btn",
          label: _ctx.$t("menu.help"),
          tooltip: _ctx.$t("sideToolbar.helpCenter"),
          "icon-badge": shouldShowRedDot.value ? "•" : "",
          "is-small": unref(isSmall),
          onClick: toggleHelpCenter
        }, null, 8, ["label", "tooltip", "icon-badge", "is-small"]),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          unref(isHelpCenterVisible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["help-center-popup", {
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": unref(isSmall)
            }])
          }, [
            createVNode(HelpCenterMenuContent, { onClose: closeHelpCenter })
          ], 2)) : createCommentVNode("", true)
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(ReleaseNotificationToast, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": unref(isSmall)
            })
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(WhatsNewPopup, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": unref(isSmall)
            }),
            onWhatsNewDismissed: handleWhatsNewDismissed
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          unref(isHelpCenterVisible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "help-center-backdrop",
            onClick: closeHelpCenter
          })) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const SidebarHelpCenterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-91ae5559"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SidebarLogoutIcon",
  setup(__props) {
    const { t: t2 } = useI18n();
    const userStore = useUserStore();
    const tooltip = computed(
      () => `${t2("sideToolbar.logout")} (${userStore.currentUser?.username})`
    );
    const logout = /* @__PURE__ */ __name(async () => {
      await userStore.logout();
      window.location.reload();
    }, "logout");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "pi pi-sign-out",
        tooltip: tooltip.value,
        label: _ctx.$t("sideToolbar.logout"),
        onClick: logout
      }, null, 8, ["tooltip", "label"]);
    };
  }
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SidebarTemplatesButton",
  setup(__props) {
    const settingStore = useSettingStore();
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const openTemplates = /* @__PURE__ */ __name(() => {
      useWorkflowTemplateSelectorDialog().show("sidebar");
    }, "openTemplates");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "icon-[comfy--template]",
        tooltip: _ctx.$t("sideToolbar.templates"),
        label: _ctx.$t("sideToolbar.labels.templates"),
        "is-small": isSmall.value,
        class: "templates-tab-button",
        onClick: openTemplates
      }, null, 8, ["tooltip", "label", "is-small"]);
    };
  }
});
const ENTER_OVERFLOW_MARGIN = 20;
const EXIT_OVERFLOW_MARGIN = 50;
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SideToolbar",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const sideToolbarRef = ref();
    const contentMeasureRef = ref();
    const topToolbarRef = ref();
    const bottomToolbarRef = ref();
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const sidebarStyle = computed(() => settingStore.get("Comfy.Sidebar.Style"));
    const isConnected = computed(
      () => selectedTab.value || isOverflowing.value || sidebarStyle.value === "connected"
    );
    const tabs = computed(() => workspaceStore.getSidebarTabs());
    const selectedTab = computed(() => workspaceStore.sidebarTab.activeSidebarTab);
    const onTabClick = /* @__PURE__ */ __name(async (item) => {
      item.id === "node-library";
      item.id === "model-library";
      item.id === "workflows";
      item.id === "assets";
      await commandStore.commands.find((cmd) => cmd.id === `Workspace.ToggleSidebarTab.${item.id}`)?.function?.();
    }, "onTabClick");
    const keybindingStore = useKeybindingStore();
    const getTabTooltipSuffix = /* @__PURE__ */ __name((tab) => {
      const keybinding = keybindingStore.getKeybindingByCommandId(
        `Workspace.ToggleSidebarTab.${tab.id}`
      );
      return keybinding ? ` (${keybinding.combo.toString()})` : "";
    }, "getTabTooltipSuffix");
    const isOverflowing = ref(false);
    const groupClasses = computed(
      () => cn(
        "sidebar-item-group pointer-events-auto flex flex-col items-center overflow-hidden flex-shrink-0" + (isConnected.value ? "" : " rounded-lg shadow-interface")
      )
    );
    const checkOverflow = debounce(() => {
      if (!sideToolbarRef.value || !topToolbarRef.value || !bottomToolbarRef.value)
        return;
      const containerHeight = sideToolbarRef.value.clientHeight;
      const topHeight = topToolbarRef.value.scrollHeight;
      const bottomHeight = bottomToolbarRef.value.scrollHeight;
      const contentHeight = topHeight + bottomHeight;
      if (isOverflowing.value) {
        isOverflowing.value = containerHeight < contentHeight + EXIT_OVERFLOW_MARGIN;
      } else {
        isOverflowing.value = containerHeight < contentHeight + ENTER_OVERFLOW_MARGIN;
      }
    }, 16);
    onMounted(() => {
      if (!sideToolbarRef.value) return;
      const overflowObserver = useResizeObserver(
        sideToolbarRef.value,
        checkOverflow
      );
      checkOverflow();
      onBeforeUnmount(() => {
        overflowObserver.stop();
      });
      watch(
        [isSmall, sidebarLocation],
        async () => {
          if (canvasStore.canvas) {
            if (sidebarLocation.value === "left") {
              await nextTick();
              canvasStore.canvas.fpsInfoLocation = [
                sideToolbarRef.value?.getBoundingClientRect()?.right,
                null
              ];
            } else {
              canvasStore.canvas.fpsInfoLocation = null;
            }
            canvasStore.canvas.setDirty(false, true);
          }
        },
        { immediate: true }
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        ref_key: "sideToolbarRef",
        ref: sideToolbarRef,
        class: normalizeClass(["side-tool-bar-container flex h-full flex-col items-center bg-transparent [.floating-sidebar]:-mr-2", {
          "small-sidebar": isSmall.value,
          "connected-sidebar": isConnected.value,
          "floating-sidebar": !isConnected.value,
          "overflowing-sidebar": isOverflowing.value,
          "border-r border-[var(--interface-stroke)] shadow-interface": isConnected.value
        }])
      }, [
        createElementVNode("div", {
          ref_key: "contentMeasureRef",
          ref: contentMeasureRef,
          class: normalizeClass(
            isOverflowing.value ? "side-tool-bar-container overflow-y-auto" : "flex flex-col h-full"
          )
        }, [
          createElementVNode("div", {
            ref_key: "topToolbarRef",
            ref: topToolbarRef,
            class: normalizeClass(groupClasses.value)
          }, [
            createVNode(ComfyMenuButton),
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
              return openBlock(), createBlock(SidebarIcon, {
                key: tab.id,
                icon: tab.icon,
                "icon-badge": tab.iconBadge,
                tooltip: tab.tooltip,
                "tooltip-suffix": getTabTooltipSuffix(tab),
                label: tab.label || tab.title,
                "is-small": isSmall.value,
                selected: tab.id === selectedTab.value?.id,
                class: normalizeClass(tab.id + "-tab-button"),
                onClick: /* @__PURE__ */ __name(($event) => onTabClick(tab), "onClick")
              }, null, 8, ["icon", "icon-badge", "tooltip", "tooltip-suffix", "label", "is-small", "selected", "class", "onClick"]);
            }), 128)),
            createVNode(_sfc_main$i)
          ], 2),
          createElementVNode("div", {
            ref_key: "bottomToolbarRef",
            ref: bottomToolbarRef,
            class: normalizeClass(["mt-auto", groupClasses.value])
          }, [
            unref(userStore).isMultiUserServer ? (openBlock(), createBlock(_sfc_main$j, {
              key: 0,
              "is-small": isSmall.value
            }, null, 8, ["is-small"])) : createCommentVNode("", true),
            createVNode(SidebarHelpCenterIcon, { "is-small": isSmall.value }, null, 8, ["is-small"]),
            createVNode(_sfc_main$q, { "is-small": isSmall.value }, null, 8, ["is-small"]),
            createVNode(_sfc_main$p, { "is-small": isSmall.value }, null, 8, ["is-small"])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const SideToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-d983b4cd"]]);
const useTopbarBadgeStore = defineStore("topbarBadge", () => {
  const extensionStore = useExtensionStore();
  const badges = computed(
    () => extensionStore.extensions.flatMap((e) => e.topbarBadges ?? [])
  );
  return {
    badges
  };
});
const _hoisted_1$f = { class: "flex h-full shrink-0 items-center" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TopbarBadges",
  props: {
    reverseOrder: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false }
  },
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isXl = breakpoints.greaterOrEqual("xl");
    const isLg = breakpoints.greaterOrEqual("lg");
    const displayMode = computed(() => {
      if (isXl.value) return "full";
      if (isLg.value) return "compact";
      return "icon-only";
    });
    const topbarBadgeStore = useTopbarBadgeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(topbarBadgeStore).badges, (badge) => {
          return openBlock(), createBlock(_sfc_main$1g, {
            key: badge.text,
            badge,
            "display-mode": displayMode.value,
            "reverse-order": _ctx.reverseOrder,
            "no-padding": _ctx.noPadding
          }, null, 8, ["badge", "display-mode", "reverse-order", "no-padding"]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$e = { class: "workflow-preview-content" };
const _hoisted_2$9 = {
  key: 0,
  class: "workflow-preview-thumbnail relative"
};
const _hoisted_3$7 = ["src"];
const _hoisted_4$4 = { class: "workflow-preview-footer" };
const _hoisted_5$3 = { class: "workflow-preview-name" };
const POPOVER_WIDTH = 250;
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabPopover",
  props: {
    workflowFilename: {},
    thumbnailUrl: {},
    isActiveTab: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { thumbnailUrl, isActiveTab } = toRefs(props);
    const popoverRef = ref(null);
    const positionRef = ref(null);
    let hideTimeout = null;
    let showTimeout = null;
    const id = useId();
    const showPopover = /* @__PURE__ */ __name((event) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      showTimeout = setTimeout(async () => {
        if (popoverRef.value && positionRef.value) {
          popoverRef.value.show(event, positionRef.value);
          await nextTick();
          const el = document.querySelector(
            `.workflow-popover-fade[data-popover-id="${id}"]`
          );
          if (el) {
            const middle = positionRef.value.getBoundingClientRect().left;
            const popoverWidth = el.getBoundingClientRect().width;
            const halfWidth = popoverWidth / 2;
            let pos = middle - halfWidth;
            let shift = 0;
            if (pos < 0) {
              shift = pos - 8;
              pos = 8;
            } else if (pos + popoverWidth > window.innerWidth) {
              const newPos = window.innerWidth - popoverWidth - 16;
              shift = pos - newPos;
              pos = newPos;
            }
            if (shift + halfWidth < 0) {
              shift = -halfWidth + 24;
            }
            el.style.left = `${pos}px`;
            el.style.setProperty("--shift", `${shift}px`);
          }
        }
      }, 200);
    }, "showPopover");
    const cancelHidePopover = /* @__PURE__ */ __name(() => {
    }, "cancelHidePopover");
    const hidePopover = /* @__PURE__ */ __name(() => {
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      hideTimeout = setTimeout(() => {
        if (popoverRef.value) {
          popoverRef.value.hide();
        }
      }, 100);
    }, "hidePopover");
    const togglePopover = /* @__PURE__ */ __name((event) => {
      if (popoverRef.value) {
        popoverRef.value.toggle(event);
      }
    }, "togglePopover");
    __expose({
      showPopover,
      hidePopover,
      togglePopover
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          ref_key: "positionRef",
          ref: positionRef,
          class: "absolute bottom-0 left-1/2 -translate-x-1/2"
        }, null, 512),
        createVNode(unref(Popover), {
          ref_key: "popoverRef",
          ref: popoverRef,
          "append-to": "body",
          pt: {
            root: {
              class: "workflow-popover-fade fit-content",
              "data-popover-id": unref(id)
            }
          },
          onMouseenter: cancelHidePopover,
          onMouseleave: hidePopover
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$e, [
              unref(thumbnailUrl) && !unref(isActiveTab) ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
                createElementVNode("img", {
                  src: unref(thumbnailUrl),
                  class: "block h-[200px] rounded-lg object-cover p-2",
                  style: normalizeStyle({ width: `${POPOVER_WIDTH}px` })
                }, null, 12, _hoisted_3$7)
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_4$4, [
                createElementVNode("span", _hoisted_5$3, toDisplayString(_ctx.workflowFilename), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 64);
    };
  }
});
const WorkflowTabPopover = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-4c13cb50"]]);
const _hoisted_1$d = { class: "workflow-label inline-block max-w-[150px] truncate text-sm" };
const _hoisted_2$8 = { class: "relative" };
const _hoisted_3$6 = {
  key: 0,
  class: "absolute top-1/2 left-1/2 z-10 w-4 -translate-1/2 bg-(--comfy-menu-bg) text-2xl font-bold group-hover:hidden"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTab",
  props: {
    class: {},
    workflowOption: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const settingStore = useSettingStore();
    const workflowTabRef = ref(null);
    const popoverRef = ref(null);
    const workflowThumbnail = useWorkflowThumbnail();
    const autoSaveSetting = computed(
      () => settingStore.get("Comfy.Workflow.AutoSave")
    );
    const autoSaveDelay = computed(
      () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
    );
    const shouldShowStatusIndicator = computed(() => {
      if (workspaceStore.shiftDown) {
        return false;
      }
      if (!props.workflowOption.workflow.isPersisted) {
        return true;
      }
      if (props.workflowOption.workflow.isModified) {
        if (autoSaveSetting.value === "off") {
          return true;
        }
        if (autoSaveSetting.value === "after delay" && autoSaveDelay.value > 3e3) {
          return true;
        }
        return false;
      }
      return false;
    });
    const isActiveTab = computed(() => {
      return workflowStore.activeWorkflow?.key === props.workflowOption.workflow.key;
    });
    const thumbnailUrl = computed(() => {
      return workflowThumbnail.getThumbnail(props.workflowOption.workflow.key);
    });
    const handleMouseEnter = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.showPopover(event);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      popoverRef.value?.hidePopover();
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.togglePopover(event);
    }, "handleClick");
    const closeWorkflows = /* @__PURE__ */ __name(async (options) => {
      for (const opt of options) {
        if (!await useWorkflowService().closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown,
          hint: t2("sideToolbar.workflowTab.dirtyCloseHint")
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const tabGetter = /* @__PURE__ */ __name(() => workflowTabRef.value, "tabGetter");
    usePragmaticDraggable(tabGetter, {
      getInitialData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getInitialData")
    });
    usePragmaticDroppable(tabGetter, {
      getData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getData"),
      onDrop: /* @__PURE__ */ __name((e) => {
        const fromIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.source.data.workflowKey
        );
        const toIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.location.current.dropTargets[0]?.data.workflowKey
        );
        if (fromIndex !== toIndex) {
          workflowStore.reorderWorkflows(fromIndex, toIndex);
        }
      }, "onDrop")
    });
    onUnmounted(() => {
      popoverRef.value?.hidePopover();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", mergeProps({
          ref_key: "workflowTabRef",
          ref: workflowTabRef,
          class: "workflow-tab group flex gap-2 p-2"
        }, _ctx.$attrs, {
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave,
          onClick: handleClick
        }), [
          createElementVNode("span", _hoisted_1$d, toDisplayString(_ctx.workflowOption.workflow.filename), 1),
          createElementVNode("div", _hoisted_2$8, [
            shouldShowStatusIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_3$6, "•")) : createCommentVNode("", true),
            createVNode(unref(Button), {
              class: "close-button invisible w-auto p-0",
              icon: "pi pi-times",
              text: "",
              severity: "secondary",
              size: "small",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onCloseWorkflow(_ctx.workflowOption), ["stop"]))
            })
          ])
        ], 16),
        createVNode(WorkflowTabPopover, {
          ref_key: "popoverRef",
          ref: popoverRef,
          "workflow-filename": _ctx.workflowOption.workflow.filename,
          "thumbnail-url": thumbnailUrl.value,
          "is-active-tab": isActiveTab.value
        }, null, 8, ["workflow-filename", "thumbnail-url", "is-active-tab"])
      ], 64);
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "WorkflowOverflowMenu",
  props: {
    workflows: {},
    activeWorkflow: {}
  },
  setup(__props) {
    const props = __props;
    const menu = ref(null);
    const workflowService = useWorkflowService();
    const menuItems = computed(
      () => props.workflows.map((workflow) => ({
        label: workflow.filename,
        icon: props.activeWorkflow?.key === workflow.key ? "pi pi-check" : void 0,
        command: /* @__PURE__ */ __name(() => {
          void workflowService.openWorkflow(workflow);
        }, "command")
      }))
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", null, [
        withDirectives(createVNode(unref(Button), {
          class: "rounded-none",
          icon: "pi pi-ellipsis-h",
          text: "",
          severity: "secondary",
          "aria-label": _ctx.$t("g.moreWorkflows"),
          onClick: _cache[0] || (_cache[0] = ($event) => menu.value?.toggle($event))
        }, null, 8, ["aria-label"]), [
          [_directive_tooltip, { value: _ctx.$t("g.moreWorkflows"), showDelay: 300 }]
        ]),
        createVNode(unref(Menu), {
          ref_key: "menu",
          ref: menu,
          model: menuItems.value,
          popup: true,
          class: "max-h-[40vh] overflow-auto"
        }, null, 8, ["model"])
      ]);
    };
  }
});
const _hoisted_1$c = {
  key: 3,
  class: "window-actions-spacer app-drag shrink-0"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabs",
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const workflowBookmarkStore = useWorkflowBookmarkStore();
    const workflowService = useWorkflowService();
    const rightClickedTab = ref();
    const menu = ref();
    const containerRef = ref(null);
    const showOverflowArrows = ref(false);
    const leftArrowEnabled = ref(false);
    const rightArrowEnabled = ref(false);
    const isDesktop = isElectron();
    const workflowToOption = /* @__PURE__ */ __name((workflow) => ({
      value: workflow.path,
      workflow
    }), "workflowToOption");
    const options = computed(
      () => workflowStore.openWorkflows.map(workflowToOption)
    );
    const selectedWorkflow = computed(
      () => workflowStore.activeWorkflow ? workflowToOption(workflowStore.activeWorkflow) : null
    );
    const onWorkflowChange = /* @__PURE__ */ __name(async (option) => {
      if (!option) {
        return;
      }
      if (selectedWorkflow.value?.value === option.value) {
        return;
      }
      await workflowService.openWorkflow(option.workflow);
    }, "onWorkflowChange");
    const closeWorkflows = /* @__PURE__ */ __name(async (options2) => {
      for (const opt of options2) {
        if (!await workflowService.closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const showContextMenu = /* @__PURE__ */ __name((event, option) => {
      rightClickedTab.value = option;
      menu.value.show(event);
    }, "showContextMenu");
    const contextMenuItems = computed(() => {
      const tab = rightClickedTab.value;
      if (!tab) return [];
      const index = options.value.findIndex((v) => v.workflow === tab.workflow);
      return [
        {
          label: t2("tabMenu.duplicateTab"),
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(tab.workflow);
          }, "command")
        },
        {
          separator: true
        },
        {
          label: t2("tabMenu.closeTab"),
          command: /* @__PURE__ */ __name(() => onCloseWorkflow(tab), "command")
        },
        {
          label: t2("tabMenu.closeTabsToLeft"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(0, index)), "command"),
          disabled: index <= 0
        },
        {
          label: t2("tabMenu.closeTabsToRight"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(index + 1)), "command"),
          disabled: index === options.value.length - 1
        },
        {
          label: t2("tabMenu.closeOtherTabs"),
          command: /* @__PURE__ */ __name(() => closeWorkflows([
            ...options.value.slice(index + 1),
            ...options.value.slice(0, index)
          ]), "command"),
          disabled: options.value.length <= 1
        },
        {
          label: workflowBookmarkStore.isBookmarked(tab.workflow.path) ? t2("tabMenu.removeFromBookmarks") : t2("tabMenu.addToBookmarks"),
          command: /* @__PURE__ */ __name(() => workflowBookmarkStore.toggleBookmarked(tab.workflow.path), "command"),
          disabled: tab.workflow.isTemporary
        }
      ];
    });
    const commandStore = useCommandStore();
    const handleWheel = /* @__PURE__ */ __name((event) => {
      const scrollElement = event.currentTarget;
      const scrollAmount = event.deltaX || event.deltaY;
      scrollElement.scroll({
        left: scrollElement.scrollLeft + scrollAmount
      });
    }, "handleWheel");
    const scrollContent = computed(
      () => containerRef.value?.querySelector(
        ".p-scrollpanel-content"
      ) ?? null
    );
    const scroll = /* @__PURE__ */ __name((direction) => {
      const el = scrollContent.value;
      if (!el) return;
      el.scrollBy({ left: direction * 20 });
    }, "scroll");
    const ensureActiveTabVisible = /* @__PURE__ */ __name(async (options2 = {}) => {
      if (!selectedWorkflow.value) return;
      if (options2.waitForDom !== false) {
        await nextTick();
      }
      const containerElement = containerRef.value;
      if (!containerElement) return;
      const activeTabElement = containerElement.querySelector(
        ".p-togglebutton-checked"
      );
      if (!activeTabElement) return;
      activeTabElement.scrollIntoView({ block: "nearest", inline: "nearest" });
    }, "ensureActiveTabVisible");
    watch(
      () => workflowStore.activeWorkflow,
      () => {
        void ensureActiveTabVisible();
      },
      { immediate: true }
    );
    let overflowObserver = null;
    let stopArrivedWatch = null;
    let stopOverflowWatch = null;
    watch(
      scrollContent,
      (el, _prev, onCleanup) => {
        stopArrivedWatch?.();
        stopOverflowWatch?.();
        overflowObserver?.dispose();
        if (!el) return;
        const scrollState = useScroll(el);
        stopArrivedWatch = watch(
          [
            () => scrollState.arrivedState.left,
            () => scrollState.arrivedState.right
          ],
          ([atLeft, atRight]) => {
            leftArrowEnabled.value = !atLeft;
            rightArrowEnabled.value = !atRight;
          },
          { immediate: true }
        );
        overflowObserver = useOverflowObserver(el);
        stopOverflowWatch = watch(
          overflowObserver.isOverflowing,
          (isOverflow) => {
            showOverflowArrows.value = isOverflow;
            if (!isOverflow) return;
            void nextTick(() => {
              scrollState.measure();
              void ensureActiveTabVisible({ waitForDom: false });
            });
          },
          { immediate: true }
        );
        onCleanup(() => {
          stopArrivedWatch?.();
          stopOverflowWatch?.();
          overflowObserver?.dispose();
        });
      },
      { immediate: true }
    );
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["workflow-tabs-container flex h-full max-w-full flex-auto flex-row overflow-hidden border-b border-[var(--interface-stroke)] shadow-interface", { "workflow-tabs-container-desktop": unref(isDesktop) }])
      }, [
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          icon: "pi pi-chevron-left",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-left",
          disabled: !leftArrowEnabled.value,
          onMousedown: _cache[0] || (_cache[0] = ($event) => unref(whileMouseDown)($event, () => scroll(-1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        createVNode(unref(ScrollPanel), {
          class: "no-drag overflow-hidden",
          "pt:content": {
            class: "p-0 w-full flex",
            onwheel: handleWheel
          },
          "pt:bar-x": "h-1"
        }, {
          default: withCtx(() => [
            createVNode(unref(SelectButton), {
              class: normalizeClass(["workflow-tabs bg-transparent", props.class]),
              "model-value": selectedWorkflow.value,
              options: options.value,
              "option-label": "label",
              "data-key": "value",
              "onUpdate:modelValue": onWorkflowChange
            }, {
              option: withCtx(({ option }) => [
                createVNode(_sfc_main$e, {
                  "workflow-option": option,
                  onContextmenu: /* @__PURE__ */ __name(($event) => showContextMenu($event, option), "onContextmenu"),
                  onMouseup: withModifiers(($event) => onCloseWorkflow(option), ["middle"])
                }, null, 8, ["workflow-option", "onContextmenu", "onMouseup"])
              ]),
              _: 1
            }, 8, ["class", "model-value", "options"])
          ]),
          _: 1
        }, 8, ["pt:content"]),
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 1,
          icon: "pi pi-chevron-right",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-right",
          disabled: !rightArrowEnabled.value,
          onMousedown: _cache[1] || (_cache[1] = ($event) => unref(whileMouseDown)($event, () => scroll(1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        showOverflowArrows.value ? (openBlock(), createBlock(_sfc_main$d, {
          key: 2,
          workflows: unref(workflowStore).openWorkflows,
          "active-workflow": unref(workflowStore).activeWorkflow
        }, null, 8, ["workflows", "active-workflow"])) : createCommentVNode("", true),
        withDirectives(createVNode(unref(Button), {
          class: "new-blank-workflow-button no-drag shrink-0 rounded-none",
          icon: "pi pi-plus",
          text: "",
          severity: "secondary",
          "aria-label": _ctx.$t("sideToolbar.newBlankWorkflow"),
          onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.NewBlankWorkflow"))
        }, null, 8, ["aria-label"]), [
          [_directive_tooltip, { value: _ctx.$t("sideToolbar.newBlankWorkflow"), showDelay: 300 }]
        ]),
        createVNode(unref(ContextMenu), {
          ref_key: "menu",
          ref: menu,
          model: contextMenuItems.value
        }, null, 8, ["model"]),
        unref(isDesktop) ? (openBlock(), createElementBlock("div", _hoisted_1$c)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const WorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4cd2c75d"]]);
function useGraphNodeManager(graph) {
  const { createNode, deleteNode, setSource } = useLayoutMutations();
  const nodeDefStore = useNodeDefStore();
  const vueNodeData = reactive(/* @__PURE__ */ new Map());
  const nodeRefs = /* @__PURE__ */ new Map();
  const refreshNodeSlots = /* @__PURE__ */ __name((nodeId) => {
    const nodeRef = nodeRefs.get(nodeId);
    const currentData = vueNodeData.get(nodeId);
    if (!nodeRef || !currentData) return;
    const slotMetadata = /* @__PURE__ */ new Map();
    nodeRef.inputs?.forEach((input, index) => {
      if (!input?.widget?.name) return;
      slotMetadata.set(input.widget.name, {
        index,
        linked: input.link != null
      });
    });
    const updatedWidgets = currentData.widgets?.map((widget) => {
      const slotInfo = slotMetadata.get(widget.name);
      return slotInfo ? { ...widget, slotMetadata: slotInfo } : widget;
    });
    vueNodeData.set(nodeId, {
      ...currentData,
      widgets: updatedWidgets,
      inputs: nodeRef.inputs ? [...nodeRef.inputs] : void 0,
      outputs: nodeRef.outputs ? [...nodeRef.outputs] : void 0
    });
  }, "refreshNodeSlots");
  function extractVueNodeData(node) {
    const subgraphId = node.graph && "id" in node.graph && node.graph !== node.graph.rootGraph ? String(node.graph.id) : null;
    const slotMetadata = /* @__PURE__ */ new Map();
    const reactiveWidgets = shallowReactive(node.widgets ?? []);
    Object.defineProperty(node, "widgets", {
      get() {
        return reactiveWidgets;
      },
      set(v) {
        reactiveWidgets.splice(0, reactiveWidgets.length, ...v);
      }
    });
    const safeWidgets = reactiveComputed(() => {
      node.inputs?.forEach((input, index) => {
        if (!input?.widget?.name) return;
        slotMetadata.set(input.widget.name, {
          index,
          linked: input.link != null
        });
      });
      return node.widgets?.map((widget) => {
        try {
          let value = widget.value;
          if (value === void 0 && widget.type === "combo" && widget.options?.values && Array.isArray(widget.options.values) && widget.options.values.length > 0) {
            value = widget.options.values[0];
          }
          const spec = nodeDefStore.getInputSpecForWidget(node, widget.name);
          const slotInfo = slotMetadata.get(widget.name);
          return {
            name: widget.name,
            type: widget.type,
            value,
            label: widget.label,
            options: widget.options ? { ...widget.options } : void 0,
            callback: widget.callback,
            spec,
            slotMetadata: slotInfo,
            isDOMWidget: isDOMWidget(widget)
          };
        } catch (error) {
          return {
            name: widget.name || "unknown",
            type: widget.type || "text",
            value: void 0
          };
        }
      }) ?? [];
    });
    const nodeType = node.type || node.constructor?.comfyClass || node.constructor?.title || node.constructor?.name || "Unknown";
    const apiNode = node.constructor?.nodeData?.api_node ?? false;
    const badges = node.badges;
    return {
      id: String(node.id),
      title: typeof node.title === "string" ? node.title : "",
      type: nodeType,
      mode: node.mode || 0,
      selected: node.selected || false,
      executing: false,
      // Will be updated separately based on execution state
      subgraphId,
      apiNode,
      badges,
      hasErrors: !!node.has_errors,
      widgets: safeWidgets,
      inputs: node.inputs ? [...node.inputs] : void 0,
      outputs: node.outputs ? [...node.outputs] : void 0,
      flags: node.flags ? { ...node.flags } : void 0,
      color: node.color || void 0,
      bgcolor: node.bgcolor || void 0
    };
  }
  __name(extractVueNodeData, "extractVueNodeData");
  const getNode = /* @__PURE__ */ __name((id) => {
    return nodeRefs.get(id);
  }, "getNode");
  const validateWidgetValue = /* @__PURE__ */ __name((value) => {
    if (value === null || value === void 0 || value === void 0) {
      return void 0;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return value;
    }
    if (typeof value === "object") {
      if (Array.isArray(value) && value.length > 0 && value.every((item) => item instanceof File)) {
        return value;
      }
      return value;
    }
    console.warn(`Invalid widget value type: ${typeof value}`, value);
    return void 0;
  }, "validateWidgetValue");
  const updateVueWidgetState = /* @__PURE__ */ __name((nodeId, widgetName, value) => {
    try {
      const currentData = vueNodeData.get(nodeId);
      if (!currentData?.widgets) return;
      const updatedWidgets = currentData.widgets.map(
        (w) => w.name === widgetName ? { ...w, value: validateWidgetValue(value) } : w
      );
      const updatedData = {
        ...currentData,
        widgets: updatedWidgets
      };
      vueNodeData.set(nodeId, updatedData);
    } catch (error) {
    }
  }, "updateVueWidgetState");
  const createWrappedWidgetCallback = /* @__PURE__ */ __name((widget, originalCallback, nodeId) => {
    let updateInProgress = false;
    return (value) => {
      if (updateInProgress) return;
      updateInProgress = true;
      try {
        if (value !== null && value !== void 0 && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean" && typeof value !== "object") {
          console.warn(`Invalid widget value type: ${typeof value}`);
          updateInProgress = false;
          return;
        }
        widget.value = value;
        if (originalCallback) {
          originalCallback.call(widget, value);
        }
        updateVueWidgetState(nodeId, widget.name, value);
      } finally {
        updateInProgress = false;
      }
    };
  }, "createWrappedWidgetCallback");
  const setupNodeWidgetCallbacks = /* @__PURE__ */ __name((node) => {
    if (!node.widgets) return;
    const nodeId = String(node.id);
    node.widgets.forEach((widget) => {
      const originalCallback = widget.callback;
      widget.callback = createWrappedWidgetCallback(
        widget,
        originalCallback,
        nodeId
      );
    });
  }, "setupNodeWidgetCallbacks");
  const syncWithGraph = /* @__PURE__ */ __name(() => {
    if (!graph?._nodes) return;
    const currentNodes = new Set(graph._nodes.map((n) => String(n.id)));
    for (const id of Array.from(vueNodeData.keys())) {
      if (!currentNodes.has(id)) {
        nodeRefs.delete(id);
        vueNodeData.delete(id);
      }
    }
    graph._nodes.forEach((node) => {
      const id = String(node.id);
      nodeRefs.set(id, node);
      setupNodeWidgetCallbacks(node);
      vueNodeData.set(id, extractVueNodeData(node));
    });
  }, "syncWithGraph");
  const handleNodeAdded = /* @__PURE__ */ __name((node, originalCallback) => {
    const id = String(node.id);
    nodeRefs.set(id, node);
    setupNodeWidgetCallbacks(node);
    vueNodeData.set(id, extractVueNodeData(node));
    const initializeVueNodeLayout = /* @__PURE__ */ __name(() => {
      const nodePosition = { x: node.pos[0], y: node.pos[1] };
      const nodeSize = { width: node.size[0], height: node.size[1] };
      setSource(LayoutSource.Canvas);
      void createNode(id, {
        position: nodePosition,
        size: nodeSize,
        zIndex: node.order || 0,
        visible: true
      });
    }, "initializeVueNodeLayout");
    if (window.app?.configuringGraph) {
      node.onAfterGraphConfigured = useChainCallback(
        node.onAfterGraphConfigured,
        () => {
          vueNodeData.set(id, extractVueNodeData(node));
          initializeVueNodeLayout();
        }
      );
    } else {
      initializeVueNodeLayout();
    }
    if (originalCallback) {
      void originalCallback(node);
    }
  }, "handleNodeAdded");
  const handleNodeRemoved = /* @__PURE__ */ __name((node, originalCallback) => {
    const id = String(node.id);
    setSource(LayoutSource.Canvas);
    void deleteNode(id);
    nodeRefs.delete(id);
    vueNodeData.delete(id);
    if (originalCallback) {
      originalCallback(node);
    }
  }, "handleNodeRemoved");
  const createCleanupFunction = /* @__PURE__ */ __name((originalOnNodeAdded, originalOnNodeRemoved, originalOnTrigger) => {
    return () => {
      graph.onNodeAdded = originalOnNodeAdded || void 0;
      graph.onNodeRemoved = originalOnNodeRemoved || void 0;
      graph.onTrigger = originalOnTrigger || void 0;
      nodeRefs.clear();
      vueNodeData.clear();
    };
  }, "createCleanupFunction");
  const setupEventListeners = /* @__PURE__ */ __name(() => {
    const originalOnNodeAdded = graph.onNodeAdded;
    const originalOnNodeRemoved = graph.onNodeRemoved;
    const originalOnTrigger = graph.onTrigger;
    graph.onNodeAdded = (node) => {
      handleNodeAdded(node, originalOnNodeAdded);
    };
    graph.onNodeRemoved = (node) => {
      handleNodeRemoved(node, originalOnNodeRemoved);
    };
    const triggerHandlers = {
      "node:property:changed": /* @__PURE__ */ __name((propertyEvent) => {
        const nodeId = String(propertyEvent.nodeId);
        const currentData = vueNodeData.get(nodeId);
        if (currentData) {
          switch (propertyEvent.property) {
            case "title":
              vueNodeData.set(nodeId, {
                ...currentData,
                title: String(propertyEvent.newValue)
              });
              break;
            case "flags.collapsed":
              vueNodeData.set(nodeId, {
                ...currentData,
                flags: {
                  ...currentData.flags,
                  collapsed: Boolean(propertyEvent.newValue)
                }
              });
              break;
            case "flags.pinned":
              vueNodeData.set(nodeId, {
                ...currentData,
                flags: {
                  ...currentData.flags,
                  pinned: Boolean(propertyEvent.newValue)
                }
              });
              break;
            case "mode":
              vueNodeData.set(nodeId, {
                ...currentData,
                mode: typeof propertyEvent.newValue === "number" ? propertyEvent.newValue : 0
              });
              break;
            case "color":
              vueNodeData.set(nodeId, {
                ...currentData,
                color: typeof propertyEvent.newValue === "string" ? propertyEvent.newValue : void 0
              });
              break;
            case "bgcolor":
              vueNodeData.set(nodeId, {
                ...currentData,
                bgcolor: typeof propertyEvent.newValue === "string" ? propertyEvent.newValue : void 0
              });
          }
        }
      }, "node:property:changed"),
      "node:slot-errors:changed": /* @__PURE__ */ __name((slotErrorsEvent) => {
        refreshNodeSlots(String(slotErrorsEvent.nodeId));
      }, "node:slot-errors:changed"),
      "node:slot-links:changed": /* @__PURE__ */ __name((slotLinksEvent) => {
        if (slotLinksEvent.slotType === NodeSlotType.INPUT) {
          refreshNodeSlots(String(slotLinksEvent.nodeId));
        }
      }, "node:slot-links:changed")
    };
    graph.onTrigger = (event) => {
      switch (event.type) {
        case "node:property:changed":
          triggerHandlers["node:property:changed"](event);
          break;
        case "node:slot-errors:changed":
          triggerHandlers["node:slot-errors:changed"](event);
          break;
        case "node:slot-links:changed":
          triggerHandlers["node:slot-links:changed"](event);
          break;
      }
      originalOnTrigger?.(event);
    };
    syncWithGraph();
    return createCleanupFunction(
      originalOnNodeAdded || void 0,
      originalOnNodeRemoved || void 0,
      originalOnTrigger || void 0
    );
  }, "setupEventListeners");
  const cleanup = setupEventListeners();
  if (graph._nodes && graph._nodes.length > 0) {
    graph._nodes.forEach((node) => {
      if (graph.onNodeAdded) {
        graph.onNodeAdded(node);
      }
    });
  }
  return {
    vueNodeData,
    getNode,
    cleanup
  };
}
__name(useGraphNodeManager, "useGraphNodeManager");
const useVueNodesMigrationDismissed = createSharedComposable(
  () => useLocalStorage("comfy.vueNodesMigration.dismissed", false)
);
function useLayoutSync() {
  const unsubscribe = ref();
  function startSync(canvas) {
    if (!canvas?.graph) return;
    stopSync();
    unsubscribe.value = layoutStore.onChange((change) => {
      for (const nodeId of change.nodeIds) {
        const layout = layoutStore.getNodeLayoutRef(nodeId).value;
        if (!layout) continue;
        const liteNode = canvas.graph?.getNodeById(parseInt(nodeId));
        if (!liteNode) continue;
        if (liteNode.pos[0] !== layout.position.x || liteNode.pos[1] !== layout.position.y) {
          liteNode.pos[0] = layout.position.x;
          liteNode.pos[1] = layout.position.y;
        }
        if (liteNode.size[0] !== layout.size.width || liteNode.size[1] !== layout.size.height) {
          liteNode.setSize([layout.size.width, layout.size.height]);
        }
      }
      canvas.setDirty(true, true);
    });
  }
  __name(startSync, "startSync");
  function stopSync() {
    unsubscribe.value?.();
    unsubscribe.value = void 0;
  }
  __name(stopSync, "stopSync");
  onUnmounted(stopSync);
  return {
    startSync,
    stopSync
  };
}
__name(useLayoutSync, "useLayoutSync");
function useVueNodeLifecycleIndividual() {
  const canvasStore = useCanvasStore();
  const layoutMutations = useLayoutMutations();
  const { shouldRenderVueNodes } = useVueFeatureFlags();
  const nodeManager = shallowRef(null);
  const { startSync } = useLayoutSync();
  const isVueNodeToastDismissed = useVueNodesMigrationDismissed();
  const initializeNodeManager = /* @__PURE__ */ __name(() => {
    const activeGraph = app.canvas?.graph;
    if (!activeGraph || nodeManager.value) return;
    const manager = useGraphNodeManager(activeGraph);
    nodeManager.value = manager;
    const nodes = activeGraph._nodes.map((node) => ({
      id: node.id.toString(),
      pos: [node.pos[0], node.pos[1]],
      size: [node.size[0], node.size[1]]
    }));
    layoutStore.initializeFromLiteGraph(nodes);
    for (const reroute of activeGraph.reroutes.values()) {
      const [x, y] = reroute.pos;
      const parent = reroute.parentId ?? void 0;
      const linkIds = Array.from(reroute.linkIds);
      layoutMutations.createReroute(reroute.id, { x, y }, parent, linkIds);
    }
    for (const link of activeGraph._links.values()) {
      layoutMutations.createLink(
        link.id,
        link.origin_id,
        link.origin_slot,
        link.target_id,
        link.target_slot
      );
    }
    startSync(canvasStore.canvas);
  }, "initializeNodeManager");
  const disposeNodeManagerAndSyncs = /* @__PURE__ */ __name(() => {
    if (!nodeManager.value) return;
    try {
      nodeManager.value.cleanup();
    } catch {
    }
    nodeManager.value = null;
  }, "disposeNodeManagerAndSyncs");
  watch(
    () => shouldRenderVueNodes.value && Boolean(app.canvas?.graph),
    (enabled, wasEnabled) => {
      if (enabled) {
        initializeNodeManager();
        ensureCorrectLayoutScale();
        if (!wasEnabled && !isVueNodeToastDismissed.value) {
          useToastStore().add({
            group: "vue-nodes-migration",
            severity: "info",
            life: 0
          });
        }
      } else {
        app.canvas?.setDirty(true, true);
        disposeNodeManagerAndSyncs();
      }
    },
    { immediate: true }
  );
  watch(
    () => shouldRenderVueNodes.value,
    (vueMode, oldVueMode) => {
      const modeChanged = vueMode !== oldVueMode;
      if (modeChanged) {
        layoutStore.clearAllSlotLayouts();
      }
    },
    { immediate: true, flush: "sync" }
  );
  const setupEmptyGraphListener = /* @__PURE__ */ __name(() => {
    const activeGraph = app.canvas?.graph;
    if (!shouldRenderVueNodes.value || nodeManager.value || activeGraph?._nodes.length !== 0) {
      return;
    }
    const originalOnNodeAdded = activeGraph.onNodeAdded;
    activeGraph.onNodeAdded = function(node) {
      activeGraph.onNodeAdded = originalOnNodeAdded;
      if (shouldRenderVueNodes.value && !nodeManager.value) {
        initializeNodeManager();
      }
      if (originalOnNodeAdded) {
        originalOnNodeAdded.call(this, node);
      }
    };
  }, "setupEmptyGraphListener");
  const cleanup = /* @__PURE__ */ __name(() => {
    if (nodeManager.value) {
      nodeManager.value.cleanup();
      nodeManager.value = null;
    }
  }, "cleanup");
  return {
    nodeManager,
    // Lifecycle methods
    initializeNodeManager,
    disposeNodeManagerAndSyncs,
    setupEmptyGraphListener,
    cleanup
  };
}
__name(useVueNodeLifecycleIndividual, "useVueNodeLifecycleIndividual");
const useVueNodeLifecycle = createSharedComposable(
  useVueNodeLifecycleIndividual
);
function getNodeBounds(node) {
  const [nodeLeft, nodeTop] = node.pos;
  const nodeRight = nodeLeft + node.size[0];
  const nodeBottom = nodeTop + node.size[1];
  return [nodeLeft, nodeRight, nodeTop, nodeBottom];
}
__name(getNodeBounds, "getNodeBounds");
function viewportEdges(canvas) {
  if (!canvas) {
    return;
  }
  const ds = canvas.ds;
  const viewport_width = canvas.canvas.width;
  const viewport_height = canvas.canvas.height;
  const margin = 500 * ds.scale;
  const [xOffset, yOffset] = ds.offset;
  const leftEdge = -margin / ds.scale - xOffset;
  const rightEdge = (viewport_width + margin) / ds.scale - xOffset;
  const topEdge = -margin / ds.scale - yOffset;
  const bottomEdge = (viewport_height + margin) / ds.scale - yOffset;
  return [leftEdge, rightEdge, topEdge, bottomEdge];
}
__name(viewportEdges, "viewportEdges");
function boundsIntersect(boxA, boxB) {
  const [aLeft, aRight, aTop, aBottom] = boxA;
  const [bLeft, bRight, bTop, bBottom] = boxB;
  const leftOf = aRight < bLeft;
  const rightOf = aLeft > bRight;
  const above = aBottom < bTop;
  const below = aTop > bBottom;
  return !(leftOf || rightOf || above || below);
}
__name(boundsIntersect, "boundsIntersect");
function useViewportCullingIndividual() {
  const canvasStore = useCanvasStore();
  const { nodeManager } = useVueNodeLifecycle();
  const viewport = computed(() => viewportEdges(canvasStore.canvas));
  function inViewport(node) {
    if (!viewport.value || !node) {
      return true;
    }
    const nodeBounds = getNodeBounds(node);
    return boundsIntersect(nodeBounds, viewport.value);
  }
  __name(inViewport, "inViewport");
  function updateVisibility() {
    if (!nodeManager.value || !app.canvas) return;
    const nodeElements = document.querySelectorAll("[data-node-id]");
    for (const element of nodeElements) {
      const nodeId = element.getAttribute("data-node-id");
      if (!nodeId) continue;
      const node = nodeManager.value.getNode(nodeId);
      if (!node) continue;
      const displayValue = inViewport(node) ? "" : "none";
      if (element instanceof HTMLElement && element.style.display !== displayValue) {
        element.style.display = displayValue;
      }
    }
  }
  __name(updateVisibility, "updateVisibility");
  const handleTransformUpdate = useThrottleFn(() => updateVisibility, 100, true);
  return { handleTransformUpdate };
}
__name(useViewportCullingIndividual, "useViewportCullingIndividual");
const useViewportCulling = createSharedComposable(
  useViewportCullingIndividual
);
function safePricingExecution(fn, node, fallback = "") {
  try {
    return fn(node);
  } catch (error) {
    return fallback;
  }
}
__name(safePricingExecution, "safePricingExecution");
const calculateRunwayDurationPrice = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration"
  );
  if (!durationWidget) return "$0.05/second";
  const duration = Number(durationWidget.value);
  const validDuration = isNaN(duration) ? 5 : duration;
  const cost = (0.05 * validDuration).toFixed(2);
  return `$${cost}/Run`;
}, "calculateRunwayDurationPrice");
const pixversePricingCalculator = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration_seconds"
  );
  const qualityWidget = node.widgets?.find(
    (w) => w.name === "quality"
  );
  const motionModeWidget = node.widgets?.find(
    (w) => w.name === "motion_mode"
  );
  if (!durationWidget || !qualityWidget) {
    return "$0.45-1.2/Run (varies with duration, quality & motion mode)";
  }
  const duration = String(durationWidget.value);
  const quality = String(qualityWidget.value);
  const motionMode = String(motionModeWidget?.value);
  if (duration.includes("5")) {
    if (quality.includes("1080p")) return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$0.6/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  } else if (duration.includes("8")) {
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  }
  return "$0.9/Run";
}, "pixversePricingCalculator");
const byteDanceVideoPricingCalculator = /* @__PURE__ */ __name((node) => {
  const modelWidget = node.widgets?.find(
    (w) => w.name === "model"
  );
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration"
  );
  const resolutionWidget = node.widgets?.find(
    (w) => w.name === "resolution"
  );
  if (!modelWidget || !durationWidget || !resolutionWidget) return "Token-based";
  const model = String(modelWidget.value).toLowerCase();
  const resolution = String(resolutionWidget.value).toLowerCase();
  const seconds = parseFloat(String(durationWidget.value));
  const priceByModel = {
    "seedance-1-0-pro": {
      "480p": [0.23, 0.24],
      "720p": [0.51, 0.56],
      "1080p": [1.18, 1.22]
    },
    "seedance-1-0-lite": {
      "480p": [0.17, 0.18],
      "720p": [0.37, 0.41],
      "1080p": [0.85, 0.88]
    }
  };
  const modelKey = model.includes("seedance-1-0-pro") ? "seedance-1-0-pro" : model.includes("seedance-1-0-lite") ? "seedance-1-0-lite" : "";
  const resKey = resolution.includes("1080") ? "1080p" : resolution.includes("720") ? "720p" : resolution.includes("480") ? "480p" : "";
  const baseRange = modelKey && resKey ? priceByModel[modelKey]?.[resKey] : void 0;
  if (!baseRange) return "Token-based";
  const [min10s, max10s] = baseRange;
  const scale = seconds / 10;
  const minCost = min10s * scale;
  const maxCost = max10s * scale;
  const minStr = `$${minCost.toFixed(2)}/Run`;
  const maxStr = `$${maxCost.toFixed(2)}/Run`;
  return minStr === maxStr ? minStr : `$${minCost.toFixed(2)}-$${maxCost.toFixed(2)}/Run`;
}, "byteDanceVideoPricingCalculator");
const ltxvPricingCalculator = /* @__PURE__ */ __name((node) => {
  const modelWidget = node.widgets?.find(
    (w) => w.name === "model"
  );
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration"
  );
  const resolutionWidget = node.widgets?.find(
    (w) => w.name === "resolution"
  );
  const fallback = "$0.04-0.24/second";
  if (!modelWidget || !durationWidget || !resolutionWidget) return fallback;
  const model = String(modelWidget.value).toLowerCase();
  const resolution = String(resolutionWidget.value).toLowerCase();
  const seconds = parseFloat(String(durationWidget.value));
  const priceByModel = {
    "ltx-2 (pro)": {
      "1920x1080": 0.06,
      "2560x1440": 0.12,
      "3840x2160": 0.24
    },
    "ltx-2 (fast)": {
      "1920x1080": 0.04,
      "2560x1440": 0.08,
      "3840x2160": 0.16
    }
  };
  const modelTable = priceByModel[model];
  if (!modelTable) return fallback;
  const pps = modelTable[resolution];
  if (!pps) return fallback;
  const cost = (pps * seconds).toFixed(2);
  return `$${cost}/Run`;
}, "ltxvPricingCalculator");
const SORA_SIZES = {
  BASIC: /* @__PURE__ */ new Set(["720x1280", "1280x720"]),
  PRO: /* @__PURE__ */ new Set(["1024x1792", "1792x1024"])
};
const ALL_SIZES = /* @__PURE__ */ new Set([...SORA_SIZES.BASIC, ...SORA_SIZES.PRO]);
function validateSora2Selection(modelRaw, duration, sizeRaw) {
  const model = modelRaw?.toLowerCase() ?? "";
  const size = sizeRaw?.toLowerCase() ?? "";
  if (!duration || Number.isNaN(duration)) return "Set duration (4s / 8s / 12s)";
  if (!size) return "Set size (720x1280, 1280x720, 1024x1792, 1792x1024)";
  if (!ALL_SIZES.has(size))
    return "Invalid size. Must be 720x1280, 1280x720, 1024x1792, or 1792x1024.";
  if (model.includes("sora-2-pro")) return void 0;
  if (model.includes("sora-2") && !SORA_SIZES.BASIC.has(size))
    return "sora-2 supports only 720x1280 or 1280x720";
  if (!model.includes("sora-2")) return "Unsupported model";
  return void 0;
}
__name(validateSora2Selection, "validateSora2Selection");
function perSecForSora2(modelRaw, sizeRaw) {
  const model = modelRaw?.toLowerCase() ?? "";
  const size = sizeRaw?.toLowerCase() ?? "";
  if (model.includes("sora-2-pro")) {
    return SORA_SIZES.PRO.has(size) ? 0.5 : 0.3;
  }
  if (model.includes("sora-2")) return 0.1;
  return SORA_SIZES.PRO.has(size) ? 0.5 : 0.1;
}
__name(perSecForSora2, "perSecForSora2");
function formatRunPrice(perSec, duration) {
  return `$${(perSec * duration).toFixed(2)}/Run`;
}
__name(formatRunPrice, "formatRunPrice");
const sora2PricingCalculator = /* @__PURE__ */ __name((node) => {
  const getWidgetValue = /* @__PURE__ */ __name((name) => String(node.widgets?.find((w) => w.name === name)?.value ?? ""), "getWidgetValue");
  const model = getWidgetValue("model");
  const size = getWidgetValue("size");
  const duration = Number(
    node.widgets?.find((w) => ["duration", "duration_s"].includes(w.name))?.value
  );
  if (!model || !size || !duration) return "Set model, duration & size";
  const validationError = validateSora2Selection(model, duration, size);
  if (validationError) return validationError;
  const perSec = perSecForSora2(model, size);
  return formatRunPrice(perSec, duration);
}, "sora2PricingCalculator");
const apiNodeCosts = {
  FluxProCannyNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProDepthNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProExpandNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProFillNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProUltraImageNode: {
    displayPrice: "$0.06/Run"
  },
  FluxProKontextProNode: {
    displayPrice: "$0.04/Run"
  },
  FluxProKontextMaxNode: {
    displayPrice: "$0.08/Run"
  },
  OpenAIVideoSora2: {
    displayPrice: sora2PricingCalculator
  },
  IdeogramV1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.02-0.06 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.02 : 0.06;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.05-0.08 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.05 : 0.08;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const renderingSpeedWidget = node.widgets?.find(
        (w) => w.name === "rendering_speed"
      );
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const characterInput = node.inputs?.find(
        (i) => i.name === "character_image"
      );
      const hasCharacter = typeof characterInput?.link !== "undefined" && characterInput.link != null;
      if (!renderingSpeedWidget)
        return "$0.03-0.08 x num_images/Run (varies with rendering speed & num_images)";
      const numImages = Number(numImagesWidget?.value) || 1;
      let basePrice = 0.06;
      const renderingSpeed = String(renderingSpeedWidget.value);
      if (renderingSpeed.toLowerCase().includes("quality")) {
        if (hasCharacter) {
          basePrice = 0.2;
        } else {
          basePrice = 0.09;
        }
      } else if (renderingSpeed.toLowerCase().includes("default")) {
        if (hasCharacter) {
          basePrice = 0.15;
        } else {
          basePrice = 0.06;
        }
      } else if (renderingSpeed.toLowerCase().includes("turbo")) {
        if (hasCharacter) {
          basePrice = 0.1;
        } else {
          basePrice = 0.03;
        }
      }
      const totalCost = (basePrice * numImages).toFixed(2);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingCameraControlI2VNode: {
    displayPrice: "$0.49/Run"
  },
  KlingCameraControlT2VNode: {
    displayPrice: "$0.14/Run"
  },
  KlingDualCharacterVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget || !modelWidget || !durationWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      if (modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImage2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget) {
        if (!modelWidget)
          return "$0.14-2.80/Run (varies with model, mode & duration)";
        const modelValue2 = String(modelWidget.value);
        if (modelValue2.includes("v2-1-master") || modelValue2.includes("v2-master")) {
          return "$1.40/Run";
        } else if (modelValue2.includes("v1-6") || modelValue2.includes("v1-5")) {
          return "$0.28/Run";
        }
        return "$0.14/Run";
      }
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      if (modelValue.includes("v2-5-turbo")) {
        if (durationValue.includes("10")) {
          return "$0.70/Run";
        }
        return "$0.35/Run";
      } else if (modelValue.includes("v2-1-master") || modelValue.includes("v2-master")) {
        if (durationValue.includes("10")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modelValue.includes("v2-1") || modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImageGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const imageInputWidget = node.inputs?.find((i) => i.name === "image");
      const modality = imageInputWidget?.link ? "image to image" : "text to image";
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!modelWidget)
        return "$0.0035-0.028 x n/Run (varies with modality & model)";
      const model = String(modelWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.014;
      if (modality.includes("text to image")) {
        if (model.includes("kling-v1-5") || model.includes("kling-v2")) {
          basePrice = 0.014;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      } else if (modality.includes("image to image")) {
        if (model.includes("kling-v1-5")) {
          basePrice = 0.028;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      }
      const totalCost = (basePrice * n).toFixed(4);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingLipSyncAudioToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingLipSyncTextToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingSingleImageVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const effectSceneWidget = node.widgets?.find(
        (w) => w.name === "effect_scene"
      );
      if (!effectSceneWidget)
        return "$0.28-0.49/Run (varies with effect scene)";
      const effectScene = String(effectSceneWidget.value);
      if (effectScene.includes("fuzzyfuzzy") || effectScene.includes("squish")) {
        return "$0.28/Run";
      } else if (effectScene.includes("dizzydizzy")) {
        return "$0.49/Run";
      } else if (effectScene.includes("bloombloom")) {
        return "$0.49/Run";
      } else if (effectScene.includes("expansion")) {
        return "$0.28/Run";
      }
      return "$0.28/Run";
    }, "displayPrice")
  },
  KlingStartEndFrameNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-1")) {
        if (modeValue.includes("10s")) {
          return "$0.98/Run";
        }
        return "$0.49/Run";
      } else if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingTextToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-5-turbo")) {
        if (modeValue.includes("10")) {
          return "$0.70/Run";
        }
        return "$0.35/Run";
      } else if (modeValue.includes("v2-1-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingVideoExtendNode: {
    displayPrice: "$0.28/Run"
  },
  KlingVirtualTryOnNode: {
    displayPrice: "$0.07/Run"
  },
  LumaImageToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1.6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  LumaVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1-6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  MinimaxImageToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  MinimaxTextToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  MinimaxHailuoVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!resolutionWidget || !durationWidget) {
        return "$0.28-0.56/Run (varies with resolution & duration)";
      }
      const resolution = String(resolutionWidget.value);
      const duration = String(durationWidget.value);
      if (resolution.includes("768P")) {
        if (duration.includes("6")) return "$0.28/Run";
        if (duration.includes("10")) return "$0.56/Run";
      } else if (resolution.includes("1080P")) {
        if (duration.includes("6")) return "$0.49/Run";
      }
      return "$0.43/Run";
    }, "displayPrice")
  },
  OpenAIDalle2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!sizeWidget) return "$0.016-0.02 x n/Run (varies with size & n)";
      const size = String(sizeWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.02;
      if (size.includes("1024x1024")) {
        basePrice = 0.02;
      } else if (size.includes("512x512")) {
        basePrice = 0.018;
      } else if (size.includes("256x256")) {
        basePrice = 0.016;
      }
      const totalCost = (basePrice * n).toFixed(3);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  OpenAIDalle3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      if (!sizeWidget || !qualityWidget)
        return "$0.04-0.12/Run (varies with size & quality)";
      const size = String(sizeWidget.value);
      const quality = String(qualityWidget.value);
      if (size.includes("1024x1024")) {
        return quality.includes("hd") ? "$0.08/Run" : "$0.04/Run";
      } else if (size.includes("1792x1024") || size.includes("1024x1792")) {
        return quality.includes("hd") ? "$0.12/Run" : "$0.08/Run";
      }
      return "$0.04/Run";
    }, "displayPrice")
  },
  OpenAIGPTImage1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!qualityWidget)
        return "$0.011-0.30 x n/Run (varies with quality & n)";
      const quality = String(qualityWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePriceRange = "$0.046-0.07";
      if (quality.includes("high")) {
        basePriceRange = "$0.167-0.30";
      } else if (quality.includes("medium")) {
        basePriceRange = "$0.046-0.07";
      } else if (quality.includes("low")) {
        basePriceRange = "$0.011-0.02";
      }
      if (n === 1) {
        return `${basePriceRange}/Run`;
      } else {
        return `${basePriceRange} x ${n}/Run`;
      }
    }, "displayPrice")
  },
  PikaImageToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaScenesV2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.3/Run";
        if (resolution.includes("1080p")) return "$0.5/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.4/Run";
        if (resolution.includes("1080p")) return "$1.5/Run";
      }
      return "$0.3/Run";
    }, "displayPrice")
  },
  PikaStartEndFrameNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.2/Run";
        if (resolution.includes("1080p")) return "$0.3/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.25/Run";
        if (resolution.includes("1080p")) return "$1.0/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaTextToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.5/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.45/Run";
    }, "displayPrice")
  },
  Pikadditions: {
    displayPrice: "$0.3/Run"
  },
  Pikaffects: {
    displayPrice: "$0.45/Run"
  },
  Pikaswaps: {
    displayPrice: "$0.3/Run"
  },
  PixverseImageToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTextToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTransitionVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  RecraftCreativeUpscaleNode: {
    displayPrice: "$0.25/Run"
  },
  RecraftCrispUpscaleNode: {
    displayPrice: "$0.004/Run"
  },
  RecraftGenerateColorFromImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateVectorImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageInpaintingNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftRemoveBackgroundNode: {
    displayPrice: "$0.01/Run"
  },
  RecraftReplaceBackgroundNode: {
    displayPrice: "$0.04/Run"
  },
  RecraftTextToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftTextToVectorNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftVectorizeImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.01 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.01 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  StabilityStableImageSD_3_5Node: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "$0.035-0.065/Run (varies with model)";
      const model = String(modelWidget.value).toLowerCase();
      if (model.includes("large")) {
        return "$0.065/Run";
      } else if (model.includes("medium")) {
        return "$0.035/Run";
      }
      return "$0.035/Run";
    }, "displayPrice")
  },
  StabilityStableImageUltraNode: {
    displayPrice: "$0.08/Run"
  },
  StabilityUpscaleConservativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleCreativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleFastNode: {
    displayPrice: "$0.01/Run"
  },
  StabilityTextToAudio: {
    displayPrice: "$0.20/Run"
  },
  StabilityAudioToAudio: {
    displayPrice: "$0.20/Run"
  },
  StabilityAudioInpaint: {
    displayPrice: "$0.20/Run"
  },
  VeoVideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration_seconds"
      );
      if (!durationWidget) return "$2.50-5.0/Run (varies with duration)";
      const price = 0.5 * Number(durationWidget.value);
      return `$${price.toFixed(2)}/Run`;
    }, "displayPrice")
  },
  Veo3VideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const generateAudioWidget = node.widgets?.find(
        (w) => w.name === "generate_audio"
      );
      if (!modelWidget || !generateAudioWidget) {
        return "$0.80-3.20/Run (varies with model & audio generation)";
      }
      const model = String(modelWidget.value);
      const generateAudio = String(generateAudioWidget.value).toLowerCase() === "true";
      if (model.includes("veo-3.0-fast-generate-001") || model.includes("veo-3.1-fast-generate")) {
        return generateAudio ? "$1.20/Run" : "$0.80/Run";
      } else if (model.includes("veo-3.0-generate-001") || model.includes("veo-3.1-generate")) {
        return generateAudio ? "$3.20/Run" : "$1.60/Run";
      }
      return "$0.80-3.20/Run";
    }, "displayPrice")
  },
  LumaImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const aspectRatioWidget = node.widgets?.find(
        (w) => w.name === "aspect_ratio"
      );
      if (!modelWidget || !aspectRatioWidget) {
        return "$0.0045-0.0182/Run (varies with model & aspect ratio)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  LumaImageModifyNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) {
        return "$0.0019-0.0073/Run (varies with model)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  MoonvalleyTxt2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyImg2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyVideo2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$2.25/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$2.25/Run";
      } else if (length === "10s") {
        return "$4.00/Run";
      }
      return "$2.25/Run";
    }, "displayPrice")
  },
  // Runway nodes - using actual node names from ComfyUI
  RunwayTextToImageNode: {
    displayPrice: "$0.08/Run"
  },
  RunwayImageToVideoNodeGen3a: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayImageToVideoNodeGen4: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayFirstLastFrameNode: {
    displayPrice: calculateRunwayDurationPrice
  },
  // Rodin nodes - all have the same pricing structure
  Rodin3D_Regular: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Detail: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Smooth: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Sketch: {
    displayPrice: "$0.4/Run"
  },
  // Tripo nodes - using actual node names from ComfyUI
  TripoTextToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.1-0.4/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.10/Run";
          else return "$0.15/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          } else {
            if (!texture) return "$0.20/Run";
            else return "$0.25/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.15/Run";
          else return "$0.20/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          } else {
            if (!texture) return "$0.25/Run";
            else return "$0.30/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoImageToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoRefineNode: {
    displayPrice: "$0.3/Run"
  },
  TripoTextureNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!textureQualityWidget) return "$0.1-0.2/Run (varies with quality)";
      const textureQuality = String(textureQualityWidget.value);
      return textureQuality.includes("detailed") ? "$0.2/Run" : "$0.1/Run";
    }, "displayPrice")
  },
  TripoConvertModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoRetargetRiggedModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoMultiviewToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  // Google/Gemini nodes
  GeminiNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("veo-2.0")) {
        return "$0.5/second";
      } else if (model.includes("gemini-2.5-flash-preview-04-17")) {
        return "$0.0003/$0.0025 per 1K tokens";
      } else if (model.includes("gemini-2.5-flash")) {
        return "$0.0003/$0.0025 per 1K tokens";
      } else if (model.includes("gemini-2.5-pro-preview-05-06")) {
        return "$0.00125/$0.01 per 1K tokens";
      } else if (model.includes("gemini-2.5-pro")) {
        return "$0.00125/$0.01 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  },
  GeminiImageNode: {
    displayPrice: "$0.03 per 1K tokens"
  },
  // OpenAI nodes
  OpenAIChatNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("o4-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o1-pro")) {
        return "$0.15/$0.60 per 1K tokens";
      } else if (model.includes("o1")) {
        return "$0.015/$0.06 per 1K tokens";
      } else if (model.includes("o3-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o3")) {
        return "$0.01/$0.04 per 1K tokens";
      } else if (model.includes("gpt-4o")) {
        return "$0.0025/$0.01 per 1K tokens";
      } else if (model.includes("gpt-4.1-nano")) {
        return "$0.0001/$0.0004 per 1K tokens";
      } else if (model.includes("gpt-4.1-mini")) {
        return "$0.0004/$0.0016 per 1K tokens";
      } else if (model.includes("gpt-4.1")) {
        return "$0.002/$0.008 per 1K tokens";
      } else if (model.includes("gpt-5-nano")) {
        return "$0.00005/$0.0004 per 1K tokens";
      } else if (model.includes("gpt-5-mini")) {
        return "$0.00025/$0.002 per 1K tokens";
      } else if (model.includes("gpt-5")) {
        return "$0.00125/$0.01 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  },
  ViduTextToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduImageToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduReferenceVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduStartEndToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ByteDanceImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("seedream-3-0-t2i")) {
        return "$0.03/Run";
      }
      return "Token-based";
    }, "displayPrice")
  },
  ByteDanceImageEditNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("seededit-3-0-i2i")) {
        return "$0.03/Run";
      }
      return "Token-based";
    }, "displayPrice")
  },
  ByteDanceSeedreamNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sequentialGenerationWidget = node.widgets?.find(
        (w) => w.name === "sequential_image_generation"
      );
      const maxImagesWidget = node.widgets?.find(
        (w) => w.name === "max_images"
      );
      if (!sequentialGenerationWidget || !maxImagesWidget)
        return "$0.03/Run ($0.03 for one output image)";
      if (String(sequentialGenerationWidget.value).toLowerCase() === "disabled") {
        return "$0.03/Run";
      }
      const maxImages = Number(maxImagesWidget.value);
      if (maxImages === 1) {
        return "$0.03/Run";
      }
      const cost = (0.03 * maxImages).toFixed(2);
      return `$${cost}/Run ($0.03 for one output image)`;
    }, "displayPrice")
  },
  ByteDanceTextToVideoNode: {
    displayPrice: byteDanceVideoPricingCalculator
  },
  ByteDanceImageToVideoNode: {
    displayPrice: byteDanceVideoPricingCalculator
  },
  ByteDanceFirstLastFrameNode: {
    displayPrice: byteDanceVideoPricingCalculator
  },
  ByteDanceImageReferenceNode: {
    displayPrice: byteDanceVideoPricingCalculator
  },
  WanTextToVideoApi: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      if (!durationWidget || !resolutionWidget) return "$0.05-0.15/second";
      const seconds = parseFloat(String(durationWidget.value));
      const resolutionStr = String(resolutionWidget.value).toLowerCase();
      const resKey = resolutionStr.includes("1080") ? "1080p" : resolutionStr.includes("720") ? "720p" : resolutionStr.includes("480") ? "480p" : resolutionStr.match(/^\s*(\d{3,4}p)/)?.[1] ?? "";
      const pricePerSecond = {
        "480p": 0.05,
        "720p": 0.1,
        "1080p": 0.15
      };
      const pps = pricePerSecond[resKey];
      if (isNaN(seconds) || !pps) return "$0.05-0.15/second";
      const cost = (pps * seconds).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  WanImageToVideoApi: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) return "$0.05-0.15/second";
      const seconds = parseFloat(String(durationWidget.value));
      const resolution = String(resolutionWidget.value).trim().toLowerCase();
      const pricePerSecond = {
        "480p": 0.05,
        "720p": 0.1,
        "1080p": 0.15
      };
      const pps = pricePerSecond[resolution];
      if (isNaN(seconds) || !pps) return "$0.05-0.15/second";
      const cost = (pps * seconds).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  WanTextToImageApi: {
    displayPrice: "$0.03/Run"
  },
  WanImageToImageApi: {
    displayPrice: "$0.03/Run"
  },
  LtxvApiTextToVideo: {
    displayPrice: ltxvPricingCalculator
  },
  LtxvApiImageToVideo: {
    displayPrice: ltxvPricingCalculator
  }
};
const useNodePricing = /* @__PURE__ */ __name(() => {
  const getNodeDisplayPrice = /* @__PURE__ */ __name((node) => {
    if (!node.constructor?.nodeData?.api_node) return "";
    const nodeName = node.constructor.nodeData.name;
    const priceConfig = apiNodeCosts[nodeName];
    if (!priceConfig) return "";
    if (typeof priceConfig.displayPrice === "function") {
      return safePricingExecution(priceConfig.displayPrice, node, "");
    }
    return priceConfig.displayPrice;
  }, "getNodeDisplayPrice");
  const getNodePricingConfig = /* @__PURE__ */ __name((node) => apiNodeCosts[node.constructor.nodeData?.name ?? ""], "getNodePricingConfig");
  const getRelevantWidgetNames = /* @__PURE__ */ __name((nodeType) => {
    const widgetMap = {
      KlingTextToVideoNode: ["mode", "model_name", "duration"],
      KlingImage2VideoNode: ["mode", "model_name", "duration"],
      KlingImageGenerationNode: ["modality", "model_name", "n"],
      KlingDualCharacterVideoEffectNode: ["mode", "model_name", "duration"],
      KlingSingleImageVideoEffectNode: ["effect_scene"],
      KlingStartEndFrameNode: ["mode", "model_name", "duration"],
      MinimaxHailuoVideoNode: ["resolution", "duration"],
      OpenAIDalle3: ["size", "quality"],
      OpenAIDalle2: ["size", "n"],
      OpenAIVideoSora2: ["model", "size", "duration"],
      OpenAIGPTImage1: ["quality", "n"],
      IdeogramV1: ["num_images", "turbo"],
      IdeogramV2: ["num_images", "turbo"],
      IdeogramV3: ["rendering_speed", "num_images", "character_image"],
      FluxProKontextProNode: [],
      FluxProKontextMaxNode: [],
      VeoVideoGenerationNode: ["duration_seconds"],
      Veo3VideoGenerationNode: ["model", "generate_audio"],
      LumaVideoNode: ["model", "resolution", "duration"],
      LumaImageToVideoNode: ["model", "resolution", "duration"],
      LumaImageNode: ["model", "aspect_ratio"],
      LumaImageModifyNode: ["model", "aspect_ratio"],
      PikaTextToVideoNode2_2: ["duration", "resolution"],
      PikaImageToVideoNode2_2: ["duration", "resolution"],
      PikaScenesV2_2: ["duration", "resolution"],
      PikaStartEndFrameNode2_2: ["duration", "resolution"],
      PixverseTextToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      PixverseTransitionVideoNode: [
        "duration_seconds",
        "motion_mode",
        "quality"
      ],
      PixverseImageToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      StabilityStableImageSD_3_5Node: ["model"],
      RecraftTextToImageNode: ["n"],
      RecraftImageToImageNode: ["n"],
      RecraftImageInpaintingNode: ["n"],
      RecraftTextToVectorNode: ["n"],
      RecraftVectorizeImageNode: ["n"],
      RecraftGenerateColorFromImageNode: ["n"],
      RecraftGenerateImageNode: ["n"],
      RecraftGenerateVectorImageNode: ["n"],
      MoonvalleyTxt2VideoNode: ["length"],
      MoonvalleyImg2VideoNode: ["length"],
      MoonvalleyVideo2VideoNode: ["length"],
      // Runway nodes
      RunwayImageToVideoNodeGen3a: ["duration"],
      RunwayImageToVideoNodeGen4: ["duration"],
      RunwayFirstLastFrameNode: ["duration"],
      // Tripo nodes
      TripoTextToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoImageToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoTextureNode: ["texture_quality"],
      // Google/Gemini nodes
      GeminiNode: ["model"],
      // OpenAI nodes
      OpenAIChatNode: ["model"],
      // ByteDance
      ByteDanceImageNode: ["model"],
      ByteDanceImageEditNode: ["model"],
      ByteDanceSeedreamNode: [
        "model",
        "sequential_image_generation",
        "max_images"
      ],
      ByteDanceTextToVideoNode: ["model", "duration", "resolution"],
      ByteDanceImageToVideoNode: ["model", "duration", "resolution"],
      ByteDanceFirstLastFrameNode: ["model", "duration", "resolution"],
      ByteDanceImageReferenceNode: ["model", "duration", "resolution"],
      WanTextToVideoApi: ["duration", "size"],
      WanImageToVideoApi: ["duration", "resolution"],
      LtxvApiTextToVideo: ["model", "duration", "resolution"],
      LtxvApiImageToVideo: ["model", "duration", "resolution"]
    };
    return widgetMap[nodeType] || [];
  }, "getRelevantWidgetNames");
  return {
    getNodeDisplayPrice,
    getNodePricingConfig,
    getRelevantWidgetNames
  };
}, "useNodePricing");
const usePriceBadge = /* @__PURE__ */ __name(() => {
  function updateSubgraphCredits(node) {
    if (!node.isSubgraphNode()) return;
    node.badges = node.badges.filter((b) => !isCreditsBadge(b));
    const newBadges = collectCreditsBadges(node.subgraph);
    if (newBadges.length > 1) {
      node.badges.push(getCreditsBadge("Partner Nodes x " + newBadges.length));
    } else {
      node.badges.push(...newBadges);
    }
  }
  __name(updateSubgraphCredits, "updateSubgraphCredits");
  function collectCreditsBadges(graph, visited = /* @__PURE__ */ new Set()) {
    if (visited.has(graph.id)) return [];
    visited.add(graph.id);
    const badges = [];
    for (const node of graph.nodes) {
      badges.push(
        ...node.isSubgraphNode() ? collectCreditsBadges(node.subgraph, visited) : node.badges.filter((b) => isCreditsBadge(b))
      );
    }
    return badges;
  }
  __name(collectCreditsBadges, "collectCreditsBadges");
  function isCreditsBadge(badge) {
    return (typeof badge === "function" ? badge() : badge).icon?.unicode === "";
  }
  __name(isCreditsBadge, "isCreditsBadge");
  const colorPaletteStore = useColorPaletteStore();
  function getCreditsBadge(price) {
    const isLightTheme = colorPaletteStore.completedActivePalette.light_theme;
    return new LGraphBadge({
      text: price,
      iconOptions: {
        unicode: "",
        fontFamily: "PrimeIcons",
        color: isLightTheme ? adjustColor("#FABC25", { lightness: 0.5 }) : "#FABC25",
        bgColor: isLightTheme ? adjustColor("#654020", { lightness: 0.5 }) : "#654020",
        fontSize: 8
      },
      fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
      bgColor: isLightTheme ? adjustColor("#8D6932", { lightness: 0.5 }) : "#8D6932"
    });
  }
  __name(getCreditsBadge, "getCreditsBadge");
  return {
    getCreditsBadge,
    updateSubgraphCredits
  };
}, "usePriceBadge");
const useComputedWithWidgetWatch = /* @__PURE__ */ __name((node, options = {}) => {
  const { widgetNames, triggerCanvasRedraw = false } = options;
  const widgetValues = ref({});
  if (node.widgets) {
    const widgetsToObserve = widgetNames ? node.widgets.filter((widget) => widgetNames.includes(widget.name)) : node.widgets;
    const currentValues = {};
    widgetsToObserve.forEach((widget) => {
      currentValues[widget.name] = widget.value;
    });
    widgetValues.value = currentValues;
    widgetsToObserve.forEach((widget) => {
      widget.callback = useChainCallback(widget.callback, () => {
        widgetValues.value = {
          ...widgetValues.value,
          [widget.name]: widget.value
        };
        if (triggerCanvasRedraw) {
          node.graph?.setDirtyCanvas(true, true);
        }
      });
    });
    if (widgetNames && widgetNames.length > widgetsToObserve.length) {
      const indexesToObserve = widgetNames.map(
        (name) => widgetsToObserve.some((w) => w.name == name) ? -1 : node.inputs.findIndex((i) => i.name == name)
      ).filter((i) => i >= 0);
      node.onConnectionsChange = useChainCallback(
        node.onConnectionsChange,
        (_type, index, isConnected) => {
          if (!indexesToObserve.includes(index)) return;
          widgetValues.value = {
            ...widgetValues.value,
            [indexesToObserve[index]]: isConnected
          };
          if (triggerCanvasRedraw) {
            node.graph?.setDirtyCanvas(true, true);
          }
        }
      );
    }
  }
  return (computeFn) => {
    return computedWithControl(widgetValues, computeFn);
  };
}, "useComputedWithWidgetWatch");
const useNodeBadge = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const extensionStore = useExtensionStore();
  const colorPaletteStore = useColorPaletteStore();
  const priceBadge = usePriceBadge();
  const nodeSourceBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeSourceBadgeMode")
  );
  const nodeIdBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeIdBadgeMode")
  );
  const nodeLifeCycleBadgeMode = computed(
    () => settingStore.get(
      "Comfy.NodeBadge.NodeLifeCycleBadgeMode"
    )
  );
  const showApiPricingBadge = computed(
    () => settingStore.get("Comfy.NodeBadge.ShowApiPricing")
  );
  watch(
    [
      nodeSourceBadgeMode,
      nodeIdBadgeMode,
      nodeLifeCycleBadgeMode,
      showApiPricingBadge
    ],
    () => {
      app.graph?.setDirtyCanvas(true, true);
    }
  );
  const nodeDefStore = useNodeDefStore();
  function badgeTextVisible(nodeDef, badgeMode) {
    return !(badgeMode === NodeBadgeMode.None || nodeDef?.isCoreNode && badgeMode === NodeBadgeMode.HideBuiltIn);
  }
  __name(badgeTextVisible, "badgeTextVisible");
  onMounted(() => {
    const nodePricing = useNodePricing();
    extensionStore.registerExtension({
      name: "Comfy.NodeBadge",
      nodeCreated(node) {
        node.badgePosition = BadgePosition.TopRight;
        const badge = computed(() => {
          const nodeDef = nodeDefStore.fromLGraphNode(node);
          return new LGraphBadge({
            text: toolkit.truncate(
              [
                badgeTextVisible(nodeDef, nodeIdBadgeMode.value) ? `#${node.id}` : "",
                badgeTextVisible(nodeDef, nodeLifeCycleBadgeMode.value) ? nodeDef?.nodeLifeCycleBadgeText ?? "" : "",
                badgeTextVisible(nodeDef, nodeSourceBadgeMode.value) ? nodeDef?.nodeSource?.badgeText ?? "" : ""
              ].filter((s) => s.length > 0).join(" "),
              {
                length: 31
              }
            ),
            fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
            bgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_BG_COLOR
          });
        });
        node.badges.push(() => badge.value);
        if (node.constructor.nodeData?.api_node && showApiPricingBadge.value) {
          const pricingConfig = nodePricing.getNodePricingConfig(node);
          const hasDynamicPricing = typeof pricingConfig?.displayPrice === "function";
          let creditsBadge;
          const createBadge = /* @__PURE__ */ __name(() => {
            const price = nodePricing.getNodeDisplayPrice(node);
            return priceBadge.getCreditsBadge(price);
          }, "createBadge");
          if (hasDynamicPricing) {
            const relevantWidgetNames = nodePricing.getRelevantWidgetNames(
              node.constructor.nodeData?.name
            );
            const computedWithWidgetWatch = useComputedWithWidgetWatch(node, {
              widgetNames: relevantWidgetNames,
              triggerCanvasRedraw: true
            });
            creditsBadge = computedWithWidgetWatch(createBadge);
          } else {
            creditsBadge = computed(createBadge);
          }
          node.badges.push(() => creditsBadge.value);
        }
      },
      init() {
        app.canvas.canvas.addEventListener(
          "litegraph:set-graph",
          () => {
            for (const node of app.canvas.graph?.nodes ?? [])
              priceBadge.updateSubgraphCredits(node);
          }
        );
        app.canvas.canvas.addEventListener(
          "subgraph-converted",
          (e) => priceBadge.updateSubgraphCredits(e.detail.subgraphNode)
        );
      },
      afterConfigureGraph() {
        for (const node of app.canvas.graph?.nodes ?? [])
          priceBadge.updateSubgraphCredits(node);
      }
    });
  });
}, "useNodeBadge");
const useCanvasDrop = /* @__PURE__ */ __name((canvasRef) => {
  const modelToNodeStore = useModelToNodeStore();
  const litegraphService = useLitegraphService();
  const workflowService = useWorkflowService();
  usePragmaticDroppable(() => canvasRef.value, {
    getDropEffect: /* @__PURE__ */ __name((args) => args.source.data.type === "tree-explorer-node" ? "copy" : "move", "getDropEffect"),
    onDrop: /* @__PURE__ */ __name(async (event) => {
      const loc = event.location.current.input;
      const dndData = event.source.data;
      if (dndData.type === "tree-explorer-node") {
        const node = dndData.data;
        const conv = useSharedCanvasPositionConversion();
        const basePos = conv.clientPosToCanvasPos([loc.clientX, loc.clientY]);
        if (node.data instanceof ComfyNodeDefImpl) {
          const nodeDef = node.data;
          const pos = [...basePos];
          pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
          litegraphService.addNodeOnGraph(nodeDef, { pos });
        } else if (node.data instanceof ComfyModelDef) {
          const model = node.data;
          const pos = basePos;
          const nodeAtPos = app.graph.getNodeOnPos(pos[0], pos[1]);
          let targetProvider = null;
          let targetGraphNode = null;
          if (nodeAtPos) {
            const providers = modelToNodeStore.getAllNodeProviders(
              model.directory
            );
            for (const provider of providers) {
              if (provider.nodeDef.name === nodeAtPos.comfyClass) {
                targetGraphNode = nodeAtPos;
                targetProvider = provider;
              }
            }
          }
          if (!targetGraphNode) {
            const provider = modelToNodeStore.getNodeProvider(model.directory);
            if (provider) {
              targetGraphNode = litegraphService.addNodeOnGraph(
                provider.nodeDef,
                {
                  pos
                }
              );
              targetProvider = provider;
            }
          }
          if (targetGraphNode) {
            const widget = targetGraphNode.widgets?.find(
              (widget2) => widget2.name === targetProvider?.key
            );
            if (widget) {
              widget.value = model.file_name;
            }
          }
        } else if (node.data instanceof ComfyWorkflow) {
          const workflow = node.data;
          await workflowService.insertWorkflow(workflow, { position: basePos });
        }
      }
    }, "onDrop")
  });
}, "useCanvasDrop");
const useContextMenuTranslation = /* @__PURE__ */ __name(() => {
  legacyMenuCompat.install(LGraphCanvas.prototype, "getCanvasMenuOptions");
  const { getCanvasMenuOptions } = LGraphCanvas.prototype;
  const getCanvasCenterMenuOptions = /* @__PURE__ */ __name(function(...args) {
    const res = getCanvasMenuOptions.apply(this, args);
    const newApiItems = app.collectCanvasMenuItems(this);
    for (const item of newApiItems) {
      res.push(item);
    }
    const legacyItems = legacyMenuCompat.extractLegacyItems(
      "getCanvasMenuOptions",
      this,
      ...args
    );
    for (const item of legacyItems) {
      res.push(item);
    }
    for (const item of res) {
      if (item?.content) {
        item.content = st(`contextMenu.${item.content}`, item.content);
      }
    }
    return res;
  }, "getCanvasCenterMenuOptions");
  LGraphCanvas.prototype.getCanvasMenuOptions = getCanvasCenterMenuOptions;
  legacyMenuCompat.registerWrapper(
    "getCanvasMenuOptions",
    getCanvasCenterMenuOptions,
    getCanvasMenuOptions,
    LGraphCanvas.prototype
  );
  const nodeMenuFn = LGraphCanvas.prototype.getNodeMenuOptions;
  const getNodeMenuOptionsWithExtensions = /* @__PURE__ */ __name(function(...args) {
    const res = nodeMenuFn.apply(this, args);
    const node = args[0];
    const newApiItems = app.collectNodeMenuItems(node);
    for (const item of newApiItems) {
      res.push(item);
    }
    return res;
  }, "getNodeMenuOptionsWithExtensions");
  LGraphCanvas.prototype.getNodeMenuOptions = getNodeMenuOptionsWithExtensions;
  function translateMenus(values, options) {
    if (!values) return;
    const reInput = /Convert (.*) to input/;
    const reWidget = /Convert (.*) to widget/;
    const cvt = st("contextMenu.Convert ", "Convert ");
    const tinp = st("contextMenu. to input", " to input");
    const twgt = st("contextMenu. to widget", " to widget");
    for (const value of values) {
      if (typeof value === "string") continue;
      translateMenus(value?.submenu?.options, options);
      if (!value?.content) {
        continue;
      }
      if (te(`contextMenu.${value.content}`)) {
        value.content = st(`contextMenu.${value.content}`, value.content);
      }
      const extraInfo = options.extra || options.parentMenu?.options?.extra;
      const matchInput = value.content?.match(reInput);
      if (matchInput) {
        let match = matchInput[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + tinp;
        continue;
      }
      const matchWidget = value.content?.match(reWidget);
      if (matchWidget) {
        let match = matchWidget[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + twgt;
        continue;
      }
    }
  }
  __name(translateMenus, "translateMenus");
  const OriginalContextMenu = LiteGraph.ContextMenu;
  function ContextMenu2(values, options) {
    if (options.title) {
      options.title = st(
        `nodeDefs.${normalizeI18nKey(options.title)}.display_name`,
        options.title
      );
    }
    translateMenus(values, options);
    const ctx = new OriginalContextMenu(values, options);
    return ctx;
  }
  __name(ContextMenu2, "ContextMenu");
  LiteGraph.ContextMenu = ContextMenu2;
  LiteGraph.ContextMenu.prototype = OriginalContextMenu.prototype;
}, "useContextMenuTranslation");
function shouldIgnoreCopyPaste(target) {
  return target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement && ![
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "search",
    "submit"
  ].includes(target.type);
}
__name(shouldIgnoreCopyPaste, "shouldIgnoreCopyPaste");
const clipboardHTMLWrapper = [
  '<meta charset="utf-8"><div><span data-metadata="',
  '"></span></div><span style="white-space:pre-wrap;">Text</span>'
];
const useCopy = /* @__PURE__ */ __name(() => {
  const canvasStore = useCanvasStore();
  useEventListener(document, "copy", (e) => {
    if (shouldIgnoreCopyPaste(e.target)) {
      return;
    }
    const canvas = canvasStore.canvas;
    if (canvas?.selectedItems) {
      const serializedData = canvas.copyToClipboard();
      e.clipboardData?.setData(
        "text/html",
        clipboardHTMLWrapper.join(btoa(serializedData))
      );
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  });
}, "useCopy");
const useGlobalLitegraph = /* @__PURE__ */ __name(() => {
  window["LiteGraph"] = LiteGraph;
  window["LGraph"] = LGraph;
  window["LLink"] = LLink;
  window["LGraphNode"] = LGraphNode;
  window["LGraphGroup"] = LGraphGroup;
  window["DragAndScale"] = DragAndScale;
  window["LGraphCanvas"] = LGraphCanvas;
  window["ContextMenu"] = ContextMenu$1;
  window["LGraphBadge"] = LGraphBadge;
}, "useGlobalLitegraph");
function pasteClipboardItems(data) {
  const rawData = data.getData("text/html");
  const match = rawData.match(/data-metadata="([A-Za-z0-9+/=]+)"/)?.[1];
  if (!match) return false;
  try {
    useCanvasStore().getCanvas()._deserializeItems(JSON.parse(atob(match)), {});
    return true;
  } catch (err) {
    console.error(err);
  }
  return false;
}
__name(pasteClipboardItems, "pasteClipboardItems");
const usePaste = /* @__PURE__ */ __name(() => {
  const workspaceStore = useWorkspaceStore();
  const canvasStore = useCanvasStore();
  const pasteItemsOnNode = /* @__PURE__ */ __name((items, node, contentType) => {
    if (!node) return;
    const filteredItems = Array.from(items).filter(
      (item) => item.type.startsWith(contentType)
    );
    const blob = filteredItems[0]?.getAsFile();
    if (!blob) return;
    node.pasteFile?.(blob);
    node.pasteFiles?.(
      Array.from(filteredItems).map((i) => i.getAsFile()).filter((f) => f !== null)
    );
  }, "pasteItemsOnNode");
  useEventListener(document, "paste", async (e) => {
    if (shouldIgnoreCopyPaste(e.target)) {
      return;
    }
    if (workspaceStore.shiftDown) return;
    const { canvas } = canvasStore;
    if (!canvas) return;
    const { graph } = canvas;
    let data = e.clipboardData;
    if (!data) throw new Error("No clipboard data on clipboard event");
    const { items } = data;
    const currentNode = canvas.current_node;
    const isNodeSelected = currentNode?.is_selected;
    const isImageNodeSelected = isNodeSelected && isImageNode(currentNode);
    const isVideoNodeSelected = isNodeSelected && isVideoNode(currentNode);
    const isAudioNodeSelected = isNodeSelected && isAudioNode(currentNode);
    let imageNode = isImageNodeSelected ? currentNode : null;
    let audioNode = isAudioNodeSelected ? currentNode : null;
    const videoNode = isVideoNodeSelected ? currentNode : null;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        if (!imageNode) {
          const newNode = LiteGraph.createNode("LoadImage");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            imageNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, imageNode, "image");
        return;
      } else if (item.type.startsWith("video/")) {
        if (!videoNode) ;
        else {
          pasteItemsOnNode(items, videoNode, "video");
          return;
        }
      } else if (item.type.startsWith("audio/")) {
        if (!audioNode) {
          const newNode = LiteGraph.createNode("LoadAudio");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            audioNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, audioNode, "audio");
        return;
      }
    }
    if (pasteClipboardItems(data)) return;
    data = data.getData("text/plain");
    let workflow = null;
    try {
      data = data.slice(data.indexOf("{"));
      workflow = JSON.parse(data);
    } catch (err) {
      try {
        data = data.slice(data.indexOf("workflow\n"));
        data = data.slice(data.indexOf("{"));
        workflow = JSON.parse(data);
      } catch (error) {
        workflow = null;
      }
    }
    if (workflow && workflow.version && workflow.nodes && workflow.extra) {
      await app.loadGraphData(workflow);
    } else {
      if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
        return;
      }
      canvas.pasteFromClipboard();
    }
  });
}, "usePaste");
const useLitegraphSettings = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const canvasStore = useCanvasStore();
  watchEffect(() => {
    const canvasInfoEnabled = settingStore.get("Comfy.Graph.CanvasInfo");
    if (canvasStore.canvas) {
      canvasStore.canvas.show_info = canvasInfoEnabled;
      canvasStore.canvas.draw(false, true);
    }
  });
  watchEffect(() => {
    const zoomSpeed = settingStore.get("Comfy.Graph.ZoomSpeed");
    if (canvasStore.canvas) {
      canvasStore.canvas.zoom_speed = zoomSpeed;
    }
  });
  watchEffect(() => {
    LiteGraph.snaps_for_comfy = settingStore.get(
      "Comfy.Node.AutoSnapLinkToSlot"
    );
  });
  watchEffect(() => {
    LiteGraph.snap_highlights_node = settingStore.get(
      "Comfy.Node.SnapHighlightsNode"
    );
  });
  watchEffect(() => {
    LGraphNode.keepAllLinksOnBypass = settingStore.get(
      "Comfy.Node.BypassAllLinksOnDelete"
    );
  });
  watchEffect(() => {
    LiteGraph.middle_click_slot_add_default_node = settingStore.get(
      "Comfy.Node.MiddleClickRerouteNode"
    );
  });
  watchEffect(() => {
    const linkRenderMode = settingStore.get("Comfy.LinkRenderMode");
    if (canvasStore.canvas) {
      canvasStore.canvas.links_render_mode = linkRenderMode;
      canvasStore.canvas.setDirty(
        /* fg */
        false,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const minFontSizeForLOD = settingStore.get(
      "LiteGraph.Canvas.MinFontSizeForLOD"
    );
    if (canvasStore.canvas) {
      canvasStore.canvas.min_font_size_for_lod = minFontSizeForLOD;
      canvasStore.canvas.setDirty(
        /* fg */
        true,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const linkMarkerShape = settingStore.get("Comfy.Graph.LinkMarkers");
    const { canvas } = canvasStore;
    if (canvas) {
      canvas.linkMarkerShape = linkMarkerShape;
      canvas.setDirty(false, true);
    }
  });
  watchEffect(() => {
    const maximumFps = settingStore.get("LiteGraph.Canvas.MaximumFps");
    const { canvas } = canvasStore;
    if (canvas) canvas.maximumFps = maximumFps;
  });
  watchEffect(() => {
    const dragZoomEnabled = settingStore.get("Comfy.Graph.CtrlShiftZoom");
    const { canvas } = canvasStore;
    if (canvas) canvas.dragZoomEnabled = dragZoomEnabled;
  });
  watchEffect(() => {
    CanvasPointer.doubleClickTime = settingStore.get(
      "Comfy.Pointer.DoubleClickTime"
    );
  });
  watchEffect(() => {
    CanvasPointer.bufferTime = settingStore.get("Comfy.Pointer.ClickBufferTime");
  });
  watchEffect(() => {
    CanvasPointer.maxClickDrift = settingStore.get("Comfy.Pointer.ClickDrift");
  });
  watchEffect(() => {
    LiteGraph.CANVAS_GRID_SIZE = settingStore.get("Comfy.SnapToGrid.GridSize");
  });
  watchEffect(() => {
    LiteGraph.alwaysSnapToGrid = settingStore.get("pysssss.SnapToGrid");
  });
  watchEffect(() => {
    LiteGraph.context_menu_scaling = settingStore.get(
      "LiteGraph.ContextMenu.Scaling"
    );
  });
  watchEffect(() => {
    LiteGraph.Reroute.maxSplineOffset = settingStore.get(
      "LiteGraph.Reroute.SplineOffset"
    );
  });
  watchEffect(() => {
    const navigationMode = settingStore.get("Comfy.Canvas.NavigationMode");
    LiteGraph.canvasNavigationMode = navigationMode;
    LiteGraph.macTrackpadGestures = navigationMode === "standard";
  });
  watchEffect(() => {
    const leftMouseBehavior = settingStore.get(
      "Comfy.Canvas.LeftMouseClickBehavior"
    );
    LiteGraph.leftMouseClickBehavior = leftMouseBehavior;
  });
  watchEffect(() => {
    const mouseWheelScroll = settingStore.get(
      "Comfy.Canvas.MouseWheelScroll"
    );
    LiteGraph.mouseWheelScroll = mouseWheelScroll;
  });
  watchEffect(() => {
    LiteGraph.saveViewportWithGraph = settingStore.get(
      "Comfy.EnableWorkflowViewRestore"
    );
  });
}, "useLitegraphSettings");
const CORE_SETTINGS = [
  {
    id: "Comfy.Memory.AllowManualUnload",
    name: "Allow manual unload of models and execution cache via user command",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.18.0"
  },
  {
    id: "Comfy.Validation.Workflows",
    name: "Validate workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl",
    category: ["Comfy", "Node Search Box", "Implementation"],
    experimental: true,
    name: "Node search box implementation",
    type: "combo",
    options: ["default", "litegraph (legacy)"],
    defaultValue: "default"
  },
  {
    id: "Comfy.LinkRelease.Action",
    category: ["LiteGraph", "LinkRelease", "Action"],
    name: "Action on link release (No modifier)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.CONTEXT_MENU,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.SEARCH_BOX
    }
  },
  {
    id: "Comfy.LinkRelease.ActionShift",
    category: ["LiteGraph", "LinkRelease", "ActionShift"],
    name: "Action on link release (Shift)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.SEARCH_BOX,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.CONTEXT_MENU
    }
  },
  {
    id: "Comfy.NodeSearchBoxImpl.NodePreview",
    category: ["Comfy", "Node Search Box", "NodePreview"],
    name: "Node preview",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowCategory",
    category: ["Comfy", "Node Search Box", "ShowCategory"],
    name: "Show node category in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowIdName",
    category: ["Comfy", "Node Search Box", "ShowIdName"],
    name: "Show node id name in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowNodeFrequency",
    category: ["Comfy", "Node Search Box", "ShowNodeFrequency"],
    name: "Show node frequency in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Sidebar.Location",
    category: ["Appearance", "Sidebar", "Location"],
    name: "Sidebar location",
    type: "combo",
    options: ["left", "right"],
    defaultValue: "left"
  },
  {
    id: "Comfy.Sidebar.Size",
    category: ["Appearance", "Sidebar", "Size"],
    name: "Sidebar size",
    type: "combo",
    options: ["normal", "small"],
    // Default to small if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "small" : "normal", "defaultValue")
  },
  {
    id: "Comfy.Sidebar.UnifiedWidth",
    category: ["Appearance", "Sidebar", "UnifiedWidth"],
    name: "Unified sidebar width",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.18.1"
  },
  {
    id: "Comfy.Sidebar.Style",
    category: ["Appearance", "Sidebar", "Style"],
    name: "Sidebar style",
    type: "combo",
    options: ["floating", "connected"],
    defaultValue: "connected"
  },
  {
    id: "Comfy.TextareaWidget.FontSize",
    category: ["Appearance", "Node Widget", "TextareaWidget", "FontSize"],
    name: "Textarea widget font size",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 8,
      max: 24
    }
  },
  {
    id: "Comfy.TextareaWidget.Spellcheck",
    category: ["Comfy", "Node Widget", "TextareaWidget", "Spellcheck"],
    name: "Textarea widget spellcheck",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Workflow.SortNodeIdOnSave",
    name: "Sort node IDs when saving workflow",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Canvas.NavigationMode",
    category: ["LiteGraph", "Canvas Navigation", "NavigationMode"],
    name: "Navigation Mode",
    defaultValue: "legacy",
    type: "combo",
    sortOrder: 100,
    options: [
      { value: "standard", text: "Standard (New)" },
      { value: "legacy", text: "Drag Navigation" },
      { value: "custom", text: "Custom" }
    ],
    versionAdded: "1.25.0",
    defaultsByInstallVersion: {
      "1.25.0": "legacy"
    },
    onChange: /* @__PURE__ */ __name(async (newValue, oldValue) => {
      if (!oldValue) return;
      const settingStore = useSettingStore();
      if (newValue === "standard") {
        await settingStore.set("Comfy.Canvas.LeftMouseClickBehavior", "select");
        await settingStore.set("Comfy.Canvas.MouseWheelScroll", "panning");
      } else if (newValue === "legacy") {
        await settingStore.set("Comfy.Canvas.LeftMouseClickBehavior", "panning");
        await settingStore.set("Comfy.Canvas.MouseWheelScroll", "zoom");
      }
    }, "onChange")
  },
  {
    id: "Comfy.Canvas.LeftMouseClickBehavior",
    category: ["LiteGraph", "Canvas Navigation", "LeftMouseClickBehavior"],
    name: "Left Mouse Click Behavior",
    defaultValue: "panning",
    type: "radio",
    sortOrder: 50,
    options: [
      { value: "panning", text: "Panning" },
      { value: "select", text: "Select" }
    ],
    versionAdded: "1.27.4",
    onChange: /* @__PURE__ */ __name(async (newValue) => {
      const settingStore = useSettingStore();
      const navigationMode = settingStore.get("Comfy.Canvas.NavigationMode");
      if (navigationMode !== "custom") {
        if (newValue === "select" && navigationMode === "standard" || newValue === "panning" && navigationMode === "legacy") {
          return;
        }
        await settingStore.set("Comfy.Canvas.NavigationMode", "custom");
      }
    }, "onChange")
  },
  {
    id: "Comfy.Canvas.MouseWheelScroll",
    category: ["LiteGraph", "Canvas Navigation", "MouseWheelScroll"],
    name: "Mouse Wheel Scroll",
    defaultValue: "zoom",
    type: "radio",
    options: [
      { value: "panning", text: "Panning" },
      { value: "zoom", text: "Zoom in/out" }
    ],
    versionAdded: "1.27.4",
    onChange: /* @__PURE__ */ __name(async (newValue) => {
      const settingStore = useSettingStore();
      const navigationMode = settingStore.get("Comfy.Canvas.NavigationMode");
      if (navigationMode !== "custom") {
        if (newValue === "panning" && navigationMode === "standard" || newValue === "zoom" && navigationMode === "legacy") {
          return;
        }
        await settingStore.set("Comfy.Canvas.NavigationMode", "custom");
      }
    }, "onChange")
  },
  {
    id: "Comfy.Graph.CanvasInfo",
    category: ["LiteGraph", "Canvas", "CanvasInfo"],
    name: "Show canvas info on bottom left corner (fps, etc.)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.ShowDeprecated",
    name: "Show deprecated nodes in search",
    tooltip: "Deprecated nodes are hidden by default in the UI, but remain functional in existing workflows that use them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Node.ShowExperimental",
    name: "Show experimental nodes in search",
    tooltip: "Experimental nodes are marked as such in the UI and may be subject to significant changes or removal in future versions. Use with caution in production workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.Opacity",
    category: ["Appearance", "Node", "Opacity"],
    name: "Node opacity",
    type: "slider",
    defaultValue: 1,
    attrs: {
      min: 0.01,
      max: 1,
      step: 0.01
    }
  },
  {
    id: "Comfy.Workflow.ShowMissingNodesWarning",
    name: "Show missing nodes warning",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Workflow.ShowMissingModelsWarning",
    name: "Show missing models warning",
    type: "boolean",
    defaultValue: true,
    experimental: true
  },
  {
    id: "Comfy.Workflow.WarnBlueprintOverwrite",
    name: "Require confirmation to overwrite an existing subgraph blueprint",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Graph.ZoomSpeed",
    category: ["LiteGraph", "Canvas", "ZoomSpeed"],
    name: "Canvas zoom speed",
    type: "slider",
    defaultValue: 1.1,
    attrs: {
      min: 1.01,
      max: 2.5,
      step: 0.01
    }
  },
  // Bookmarks are stored in the settings store.
  // Bookmarks are in format of category/display_name. e.g. "conditioning/CLIPTextEncode"
  {
    id: "Comfy.NodeLibrary.Bookmarks",
    name: "Node library bookmarks with display name (deprecated)",
    type: "hidden",
    defaultValue: [],
    deprecated: true
  },
  {
    id: "Comfy.NodeLibrary.Bookmarks.V2",
    name: "Node library bookmarks v2 with unique name",
    type: "hidden",
    defaultValue: []
  },
  // Stores mapping from bookmark folder name to its customization.
  {
    id: "Comfy.NodeLibrary.BookmarksCustomization",
    name: "Node library bookmarks customization",
    type: "hidden",
    defaultValue: {}
  },
  // Hidden setting used by the queue for how to fit images
  {
    id: "Comfy.Queue.ImageFit",
    name: "Queue image fit",
    type: "hidden",
    defaultValue: "cover"
  },
  {
    id: "Comfy.GroupSelectedNodes.Padding",
    category: ["LiteGraph", "Group", "Padding"],
    name: "Group selected nodes padding",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 0,
      max: 100
    }
  },
  {
    id: "Comfy.Node.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Node", "DoubleClickTitleToEdit"],
    name: "Double click node title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.AllowImageSizeDraw",
    category: ["LiteGraph", "Node Widget", "AllowImageSizeDraw"],
    name: "Show width × height below the image preview",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Group.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Group", "DoubleClickTitleToEdit"],
    name: "Double click group title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Window.UnloadConfirmation",
    name: "Show confirmation when closing window",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.7.12"
  },
  {
    id: "Comfy.TreeExplorer.ItemPadding",
    category: ["Appearance", "Tree Explorer", "ItemPadding"],
    name: "Tree explorer item padding",
    type: "slider",
    defaultValue: 2,
    attrs: {
      min: 0,
      max: 8,
      step: 1
    }
  },
  {
    id: "Comfy.ModelLibrary.AutoLoadAll",
    name: "Automatically load all model folders",
    tooltip: "If true, all folders will load as soon as you open the model library (this may cause delays while it loads). If false, root level model folders will only load once you click on them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.ModelLibrary.NameFormat",
    name: "What name to display in the model library tree view",
    tooltip: 'Select "filename" to render a simplified view of the raw filename (without directory or ".safetensors" extension) in the model list. Select "title" to display the configurable model metadata title.',
    type: "combo",
    options: ["filename", "title"],
    defaultValue: "title"
  },
  {
    id: "Comfy.Locale",
    name: "Language",
    type: "combo",
    options: [
      { value: "en", text: "English" },
      { value: "zh", text: "中文" },
      { value: "zh-TW", text: "繁體中文" },
      { value: "ru", text: "Русский" },
      { value: "ja", text: "日本語" },
      { value: "ko", text: "한국어" },
      { value: "fr", text: "Français" },
      { value: "es", text: "Español" },
      { value: "ar", text: "عربي" },
      { value: "tr", text: "Türkçe" }
    ],
    defaultValue: /* @__PURE__ */ __name(() => navigator.language.split("-")[0] || "en", "defaultValue")
  },
  {
    id: "Comfy.NodeBadge.NodeSourceBadgeMode",
    category: ["LiteGraph", "Node", "NodeSourceBadgeMode"],
    name: "Node source badge mode",
    type: "combo",
    options: Object.values(NodeBadgeMode),
    defaultValue: NodeBadgeMode.HideBuiltIn
  },
  {
    id: "Comfy.NodeBadge.NodeIdBadgeMode",
    category: ["LiteGraph", "Node", "NodeIdBadgeMode"],
    name: "Node ID badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.None
  },
  {
    id: "Comfy.NodeBadge.NodeLifeCycleBadgeMode",
    category: ["LiteGraph", "Node", "NodeLifeCycleBadgeMode"],
    name: "Node life cycle badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.ShowAll
  },
  {
    id: "Comfy.NodeBadge.ShowApiPricing",
    category: ["Comfy", "API Nodes"],
    name: "Show API node pricing badge",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.20.3"
  },
  {
    id: "Comfy.Notification.ShowVersionUpdates",
    category: ["Comfy", "Notification Preferences"],
    name: "Show version updates",
    tooltip: "Show updates for new models, and major new features.",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.ConfirmClear",
    category: ["Comfy", "Workflow", "ConfirmClear"],
    name: "Require confirmation when clearing workflow",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.PromptFilename",
    category: ["Comfy", "Workflow", "PromptFilename"],
    name: "Prompt for filename when saving workflow",
    type: "boolean",
    defaultValue: true
  },
  /**
   * file format for preview
   *
   * format;quality
   *
   * ex)
   * webp;50 -> webp, quality 50
   * jpeg;80 -> rgb, jpeg, quality 80
   *
   * @type {string}
   */
  {
    id: "Comfy.PreviewFormat",
    category: ["LiteGraph", "Node Widget", "PreviewFormat"],
    name: "Preview image format",
    tooltip: "When displaying a preview in the image widget, convert it to a lightweight image, e.g. webp, jpeg, webp;50, etc.",
    type: "text",
    defaultValue: ""
  },
  {
    id: "Comfy.DisableSliders",
    category: ["LiteGraph", "Node Widget", "DisableSliders"],
    name: "Disable node widget sliders",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.DisableFloatRounding",
    category: ["LiteGraph", "Node Widget", "DisableFloatRounding"],
    name: "Disable default float widget rounding.",
    tooltip: "(requires page reload) Cannot disable round when round is set by the node in the backend.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.FloatRoundingPrecision",
    category: ["LiteGraph", "Node Widget", "FloatRoundingPrecision"],
    name: "Float widget rounding decimal places [0 = auto].",
    tooltip: "(requires page reload)",
    type: "slider",
    attrs: {
      min: 0,
      max: 6,
      step: 1
    },
    defaultValue: 0
  },
  {
    id: "LiteGraph.Node.TooltipDelay",
    name: "Tooltip Delay",
    type: "number",
    attrs: {
      min: 100,
      max: 3e3,
      step: 50
    },
    defaultValue: 500,
    versionAdded: "1.9.0"
  },
  {
    id: "Comfy.EnableTooltips",
    category: ["LiteGraph", "Node", "EnableTooltips"],
    name: "Enable Tooltips",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.DevMode",
    name: "Enable dev mode options (API save, etc.)",
    type: "boolean",
    defaultValue: false,
    onChange: /* @__PURE__ */ __name((value) => {
      const element = document.getElementById("comfy-dev-save-api-button");
      if (element) {
        element.style.display = value ? "flex" : "none";
      }
    }, "onChange")
  },
  {
    id: "Comfy.UseNewMenu",
    category: ["Comfy", "Menu", "UseNewMenu"],
    defaultValue: "Top",
    name: "Use new menu",
    type: "combo",
    options: ["Disabled", "Top"],
    tooltip: "Menu bar position. On mobile devices, the menu is always shown at the top.",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      if (value === "Floating") {
        return "Top";
      } else if (value === "Bottom") {
        return "Top";
      }
      return value;
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Workflow.WorkflowTabsPosition",
    name: "Opened workflows position",
    type: "combo",
    options: ["Sidebar", "Topbar"],
    defaultValue: "Topbar",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      if (value === "Topbar (2nd-row)") {
        return "Topbar";
      }
      return value;
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Graph.CanvasMenu",
    category: ["LiteGraph", "Canvas", "CanvasMenu"],
    name: "Show graph canvas menu",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.QueueButton.BatchCountLimit",
    name: "Batch count limit",
    tooltip: "The maximum number of tasks added to the queue at one button click",
    type: "number",
    defaultValue: 100,
    versionAdded: "1.3.5"
  },
  {
    id: "Comfy.Keybinding.UnsetBindings",
    name: "Keybindings unset by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7",
    versionModified: "1.7.3",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      return value.map((keybinding) => {
        if (keybinding["targetSelector"] === "#graph-canvas") {
          keybinding["targetElementId"] = "graph-canvas-container";
        }
        return keybinding;
      });
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Keybinding.NewBindings",
    name: "Keybindings set by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7"
  },
  {
    id: "Comfy.Extension.Disabled",
    name: "Disabled extension names",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.11"
  },
  {
    id: "Comfy.LinkRenderMode",
    category: ["LiteGraph", "Graph", "LinkRenderMode"],
    name: "Link Render Mode",
    defaultValue: 2,
    type: "combo",
    options: [
      { value: LiteGraph.STRAIGHT_LINK, text: "Straight" },
      { value: LiteGraph.LINEAR_LINK, text: "Linear" },
      { value: LiteGraph.SPLINE_LINK, text: "Spline" },
      { value: LiteGraph.HIDDEN_LINK, text: "Hidden" }
    ]
  },
  {
    id: "Comfy.Node.AutoSnapLinkToSlot",
    category: ["LiteGraph", "Node", "AutoSnapLinkToSlot"],
    name: "Auto snap link to node slot",
    tooltip: "When dragging a link over a node, the link automatically snap to a viable input slot on the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.SnapHighlightsNode",
    category: ["LiteGraph", "Node", "SnapHighlightsNode"],
    name: "Snap highlights node",
    tooltip: "When dragging a link over a node with viable input slot, highlight the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.BypassAllLinksOnDelete",
    category: ["LiteGraph", "Node", "BypassAllLinksOnDelete"],
    name: "Keep all links when deleting nodes",
    tooltip: "When deleting a node, attempt to reconnect all of its input and output links (bypassing the deleted node)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.40"
  },
  {
    id: "Comfy.Node.MiddleClickRerouteNode",
    category: ["LiteGraph", "Node", "MiddleClickRerouteNode"],
    name: "Middle-click creates a new Reroute node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.Graph.LinkMarkers",
    category: ["LiteGraph", "Link", "LinkMarkers"],
    name: "Link midpoint markers",
    defaultValue: LinkMarkerShape.Circle,
    type: "combo",
    options: [
      { value: LinkMarkerShape.None, text: "None" },
      { value: LinkMarkerShape.Circle, text: "Circle" },
      { value: LinkMarkerShape.Arrow, text: "Arrow" }
    ],
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.DOMClippingEnabled",
    category: ["LiteGraph", "Node", "DOMClippingEnabled"],
    name: "Enable DOM element clipping (enabling may reduce performance)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Graph.CtrlShiftZoom",
    category: ["LiteGraph", "Canvas", "CtrlShiftZoom"],
    name: "Enable fast-zoom shortcut (Ctrl + Shift + Drag)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.4.0"
  },
  {
    id: "Comfy.Pointer.ClickDrift",
    category: ["LiteGraph", "Pointer", "ClickDrift"],
    name: "Pointer click drift (maximum distance)",
    tooltip: "If the pointer moves more than this distance while holding a button down, it is considered dragging (rather than clicking).\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 20,
      step: 1
    },
    defaultValue: 6,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.ClickBufferTime",
    category: ["LiteGraph", "Pointer", "ClickBufferTime"],
    name: "Pointer click drift delay",
    tooltip: "After pressing a pointer button down, this is the maximum time (in milliseconds) that pointer movement can be ignored for.\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 1e3,
      step: 25
    },
    defaultValue: 150,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.DoubleClickTime",
    category: ["LiteGraph", "Pointer", "DoubleClickTime"],
    name: "Double click interval (maximum)",
    tooltip: "The maximum time in milliseconds between the two clicks of a double-click.  Increasing this value may assist if double-clicks are sometimes not registered.",
    type: "slider",
    attrs: {
      min: 100,
      max: 1e3,
      step: 50
    },
    defaultValue: 300,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.SnapToGrid.GridSize",
    category: ["LiteGraph", "Canvas", "GridSize"],
    name: "Snap to grid size",
    type: "slider",
    attrs: {
      min: 1,
      max: 500
    },
    tooltip: "When dragging and resizing nodes while holding shift they will be aligned to the grid, this controls the size of that grid.",
    defaultValue: LiteGraph.CANVAS_GRID_SIZE
  },
  // Keep the 'pysssss.SnapToGrid' setting id so we don't need to migrate setting values.
  // Using a new setting id can cause existing users to lose their existing settings.
  {
    id: "pysssss.SnapToGrid",
    category: ["LiteGraph", "Canvas", "AlwaysSnapToGrid"],
    name: "Always snap to grid",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.3.13"
  },
  {
    id: "Comfy.Server.ServerConfigValues",
    name: "Server config values for frontend display",
    tooltip: "Server config values used for frontend display only",
    type: "hidden",
    // Mapping from server config id to value.
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Server.LaunchArgs",
    name: "Server launch arguments",
    tooltip: "These are the actual arguments that are passed to the server when it is launched.",
    type: "hidden",
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Queue.MaxHistoryItems",
    name: "Queue history size",
    tooltip: "The maximum number of tasks that show in the queue history.",
    type: "slider",
    attrs: {
      min: 2,
      max: 256,
      step: 2
    },
    defaultValue: 64,
    versionAdded: "1.4.12"
  },
  {
    id: "LiteGraph.Canvas.MaximumFps",
    name: "Maximum FPS",
    tooltip: "The maximum frames per second that the canvas is allowed to render. Caps GPU usage at the cost of smoothness. If 0, the screen refresh rate is used. Default: 0",
    type: "slider",
    attrs: {
      min: 0,
      max: 120
    },
    defaultValue: 0,
    versionAdded: "1.5.1"
  },
  {
    id: "Comfy.EnableWorkflowViewRestore",
    category: ["Comfy", "Workflow", "EnableWorkflowViewRestore"],
    name: "Save and restore canvas position and zoom level in workflows",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.5.4"
  },
  {
    id: "Comfy.Workflow.ConfirmDelete",
    name: "Show confirmation when deleting workflows",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.5.6"
  },
  {
    id: "Comfy.ColorPalette",
    name: "The active color palette id",
    type: "hidden",
    defaultValue: "dark",
    versionModified: "1.6.7",
    migrateDeprecatedValue(value) {
      return value.startsWith("custom_") ? value.replace("custom_", "") : value;
    }
  },
  {
    id: "Comfy.CustomColorPalettes",
    name: "Custom color palettes",
    type: "hidden",
    defaultValue: {},
    versionModified: "1.6.7"
  },
  {
    id: "Comfy.WidgetControlMode",
    category: ["Comfy", "Node Widget", "WidgetControlMode"],
    name: "Widget control mode",
    tooltip: "Controls when widget values are updated (randomize/increment/decrement), either before the prompt is queued or after.",
    type: "combo",
    defaultValue: "after",
    options: ["before", "after"],
    versionModified: "1.6.10"
  },
  {
    id: "Comfy.TutorialCompleted",
    name: "Tutorial completed",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.8.7"
  },
  {
    id: "Comfy.InstalledVersion",
    name: "The frontend version that was running when the user first installed ComfyUI",
    type: "hidden",
    defaultValue: null,
    versionAdded: "1.24.0"
  },
  {
    id: "LiteGraph.ContextMenu.Scaling",
    name: "Scale node combo widget menus (lists) when zoomed in",
    defaultValue: false,
    type: "boolean",
    versionAdded: "1.8.8"
  },
  {
    id: "LiteGraph.Canvas.LowQualityRenderingZoomThreshold",
    type: "hidden",
    deprecated: true,
    name: "Low quality rendering zoom threshold (deprecated)",
    tooltip: "Zoom level threshold for performance mode. Lower values (0.1) = quality at all zoom levels. Higher values (1.0) = performance mode even when zoomed in. Performance mode simplifies rendering by hiding text labels, shadows, and details.",
    attrs: {
      min: 0.1,
      max: 1,
      step: 0.01
    },
    defaultValue: 0.6,
    versionAdded: "1.9.1",
    versionModified: "1.26.7"
  },
  {
    id: "LiteGraph.Canvas.MinFontSizeForLOD",
    name: "Zoom Node Level of Detail - font size threshold",
    tooltip: "Controls when the nodes switch to low quality LOD rendering. Uses font size in pixels to determine when to switch. Set to 0 to disable. Values 1-24 set the minimum font size threshold for LOD - higher values (24px) = switch nodes to simplified rendering sooner when zooming out, lower values (1px) = maintain full node quality longer.",
    type: "slider",
    attrs: {
      min: 0,
      max: 24,
      step: 1
    },
    defaultValue: 8,
    versionAdded: "1.26.7"
  },
  {
    id: "Comfy.Canvas.SelectionToolbox",
    category: ["LiteGraph", "Canvas", "SelectionToolbox"],
    name: "Show selection toolbox",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.10.5"
  },
  {
    id: "LiteGraph.Reroute.SplineOffset",
    name: "Reroute spline offset",
    tooltip: "The bezier control point offset from the reroute centre point",
    type: "slider",
    defaultValue: 20,
    attrs: {
      min: 0,
      max: 400
    },
    versionAdded: "1.15.7"
  },
  {
    id: "Comfy.Toast.DisableReconnectingToast",
    name: "Disable toasts when reconnecting or reconnected",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.15.12"
  },
  {
    id: "Comfy.Minimap.Visible",
    name: "Display minimap on canvas",
    type: "hidden",
    defaultValue: window.innerWidth >= breakpointsTailwind.lg,
    versionAdded: "1.25.0"
  },
  {
    id: "Comfy.Minimap.NodeColors",
    name: "Display node with its original color on minimap",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.ShowLinks",
    name: "Display links on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.ShowGroups",
    name: "Display node groups on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.RenderBypassState",
    name: "Render bypass state on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.RenderErrorState",
    name: "Render error state on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Workflow.AutoSaveDelay",
    name: "Auto Save Delay (ms)",
    defaultValue: 1e3,
    type: "number",
    tooltip: 'Only applies if Auto Save is set to "after delay".',
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.AutoSave",
    name: "Auto Save",
    type: "combo",
    options: ["off", "after delay"],
    // Room for other options like on focus change, tab change, window change
    defaultValue: "off",
    // Popular request by users (https://github.com/Comfy-Org/ComfyUI_frontend/issues/1584#issuecomment-2536610154)
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.Persist",
    name: "Persist workflow state and restore on page (re)load",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.16.1"
  },
  {
    id: "LiteGraph.Node.DefaultPadding",
    name: "Always shrink new nodes",
    tooltip: "Resize nodes to the smallest possible size when created. When disabled, a newly added node will be widened slightly to show widget values.",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.18.0"
  },
  {
    id: "Comfy.Canvas.BackgroundImage",
    category: ["Appearance", "Canvas", "Background"],
    name: "Canvas background image",
    type: "backgroundImage",
    tooltip: 'Image URL for the canvas background. You can right-click an image in the outputs panel and select "Set as Background" to use it, or upload your own image using the upload button.',
    defaultValue: "",
    versionAdded: "1.20.4",
    versionModified: "1.20.5"
  },
  // Release data stored in settings
  {
    id: "Comfy.Release.Version",
    name: "Last seen release version",
    type: "hidden",
    defaultValue: ""
  },
  {
    id: "Comfy.Release.Status",
    name: "Release status",
    type: "hidden",
    defaultValue: "skipped"
  },
  {
    id: "Comfy.Release.Timestamp",
    name: "Release seen timestamp",
    type: "hidden",
    defaultValue: 0
  },
  /**
   * Vue Node System Settings
   */
  {
    id: "Comfy.VueNodes.Enabled",
    name: "Modern Node Design (Vue Nodes)",
    type: "boolean",
    tooltip: "Modern: DOM-based rendering with enhanced interactivity, native browser features, and updated visual design. Classic: Traditional canvas rendering.",
    defaultValue: false,
    experimental: true,
    versionAdded: "1.27.1"
  },
  {
    id: "Comfy.VueNodes.AutoScaleLayout",
    name: "Auto-scale layout (Vue nodes)",
    tooltip: "Automatically scale node positions when switching to Vue rendering to prevent overlap",
    type: "boolean",
    experimental: true,
    defaultValue: false,
    versionAdded: "1.30.3"
  },
  {
    id: "Comfy.Assets.UseAssetAPI",
    name: "Use Asset API for model library",
    type: "hidden",
    tooltip: "Use new Asset API for model browsing",
    defaultValue: false,
    experimental: true
  }
];
function useWorkflowAutoSave() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowService = useWorkflowService();
  const autoSaveSetting = computed(
    () => settingStore.get("Comfy.Workflow.AutoSave")
  );
  const autoSaveDelay = computed(
    () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
  );
  let autoSaveTimeout = null;
  let isSaving = false;
  let needsAutoSave = false;
  const scheduleAutoSave = /* @__PURE__ */ __name(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    if (autoSaveSetting.value === "after delay") {
      if (isSaving) {
        needsAutoSave = true;
        return;
      }
      const delay = autoSaveDelay.value;
      autoSaveTimeout = setTimeout(async () => {
        const activeWorkflow = workflowStore.activeWorkflow;
        if (activeWorkflow?.isModified && activeWorkflow.isPersisted) {
          try {
            isSaving = true;
            await workflowService.saveWorkflow(activeWorkflow);
          } catch (err) {
            console.error("Auto save failed:", err);
          } finally {
            isSaving = false;
            if (needsAutoSave) {
              needsAutoSave = false;
              scheduleAutoSave();
            }
          }
        }
      }, delay);
    }
  }, "scheduleAutoSave");
  watch(
    autoSaveSetting,
    (newSetting) => {
      if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = null;
      }
      if (newSetting === "after delay" && workflowStore.activeWorkflow?.isModified) {
        scheduleAutoSave();
      }
    },
    { immediate: true }
  );
  const onGraphChanged = /* @__PURE__ */ __name(() => {
    scheduleAutoSave();
  }, "onGraphChanged");
  api.addEventListener("graphChanged", onGraphChanged);
  onUnmounted(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    api.removeEventListener("graphChanged", onGraphChanged);
  });
}
__name(useWorkflowAutoSave, "useWorkflowAutoSave");
function useWorkflowPersistence() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowPersistenceEnabled = computed(
    () => settingStore.get("Comfy.Workflow.Persist")
  );
  const persistCurrentWorkflow = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const workflow = JSON.stringify(app.graph.serialize());
    localStorage.setItem("workflow", workflow);
    if (api.clientId) {
      sessionStorage.setItem(`workflow:${api.clientId}`, workflow);
    }
  }, "persistCurrentWorkflow");
  const loadWorkflowFromStorage = /* @__PURE__ */ __name(async (json, workflowName) => {
    if (!json) return false;
    const workflow = JSON.parse(json);
    await app.loadGraphData(workflow, true, true, workflowName);
    return true;
  }, "loadWorkflowFromStorage");
  const loadPreviousWorkflowFromStorage = /* @__PURE__ */ __name(async () => {
    const workflowName = getStorageValue("Comfy.PreviousWorkflow");
    const clientId = api.initialClientId ?? api.clientId;
    if (clientId) {
      const sessionWorkflow = sessionStorage.getItem(`workflow:${clientId}`);
      if (await loadWorkflowFromStorage(sessionWorkflow, workflowName)) {
        return true;
      }
    }
    const localWorkflow = localStorage.getItem("workflow");
    return await loadWorkflowFromStorage(localWorkflow, workflowName);
  }, "loadPreviousWorkflowFromStorage");
  const loadDefaultWorkflow = /* @__PURE__ */ __name(async () => {
    if (!settingStore.get("Comfy.TutorialCompleted")) {
      await settingStore.set("Comfy.TutorialCompleted", true);
      await useWorkflowService().loadBlankWorkflow();
      await useCommandStore().execute("Comfy.BrowseTemplates");
    } else {
      await app.loadGraphData();
    }
  }, "loadDefaultWorkflow");
  const restorePreviousWorkflow = /* @__PURE__ */ __name(async () => {
    if (!workflowPersistenceEnabled.value) return;
    try {
      const restored = await loadPreviousWorkflowFromStorage();
      if (!restored) {
        await loadDefaultWorkflow();
      }
    } catch (err) {
      console.error("Error loading previous workflow", err);
      await loadDefaultWorkflow();
    }
  }, "restorePreviousWorkflow");
  watch(
    () => workflowStore.activeWorkflow?.key,
    (activeWorkflowKey) => {
      if (!activeWorkflowKey) return;
      setStorageValue("Comfy.PreviousWorkflow", activeWorkflowKey);
      persistCurrentWorkflow();
    }
  );
  api.addEventListener("graphChanged", persistCurrentWorkflow);
  tryOnScopeDispose(() => {
    api.removeEventListener("graphChanged", persistCurrentWorkflow);
  });
  const openWorkflows = computed(() => workflowStore.openWorkflows);
  const activeWorkflow = computed(() => workflowStore.activeWorkflow);
  const restoreState = computed(
    () => {
      if (!openWorkflows.value || !activeWorkflow.value) {
        return { paths: [], activeIndex: -1 };
      }
      const paths = openWorkflows.value.filter((workflow) => workflow?.isPersisted).map((workflow) => workflow.path);
      const activeIndex = openWorkflows.value.findIndex(
        (workflow) => workflow.path === activeWorkflow.value?.path
      );
      return { paths, activeIndex };
    }
  );
  const storedWorkflows = JSON.parse(
    getStorageValue("Comfy.OpenWorkflowsPaths") || "[]"
  );
  const storedActiveIndex = JSON.parse(
    getStorageValue("Comfy.ActiveWorkflowIndex") || "-1"
  );
  watch(restoreState, ({ paths, activeIndex }) => {
    if (workflowPersistenceEnabled.value) {
      setStorageValue("Comfy.OpenWorkflowsPaths", JSON.stringify(paths));
      setStorageValue("Comfy.ActiveWorkflowIndex", JSON.stringify(activeIndex));
    }
  });
  const restoreWorkflowTabsState = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const isRestorable = storedWorkflows?.length > 0 && storedActiveIndex >= 0;
    if (isRestorable) {
      workflowStore.openWorkflowsInBackground({
        left: storedWorkflows.slice(0, storedActiveIndex),
        right: storedWorkflows.slice(storedActiveIndex)
      });
    }
  }, "restoreWorkflowTabsState");
  return {
    restorePreviousWorkflow,
    restoreWorkflowTabsState
  };
}
__name(useWorkflowPersistence, "useWorkflowPersistence");
const TransformStateKey = Symbol("transformState");
function useTransformSettling(target, options = {}) {
  const { settleDelay = 200, passive = true } = options;
  const isTransforming = ref(false);
  const markTransformActive = /* @__PURE__ */ __name(() => {
    isTransforming.value = true;
  }, "markTransformActive");
  const markTransformSettled = useDebounceFn(() => {
    isTransforming.value = false;
  }, settleDelay);
  const handleWheel = /* @__PURE__ */ __name(() => {
    markTransformActive();
    void markTransformSettled();
  }, "handleWheel");
  useEventListener(target, "wheel", handleWheel, {
    capture: true,
    passive
  });
  return {
    isTransforming
  };
}
__name(useTransformSettling, "useTransformSettling");
const useTransformState = /* @__PURE__ */ __name(() => {
  const camera = reactive({
    x: 0,
    y: 0,
    z: 1
  });
  const transformStyle = computed(() => ({
    // Match LiteGraph DragAndScale.toCanvasContext():
    // ctx.scale(scale); ctx.translate(offset)
    // CSS applies right-to-left, so "scale() translate()" -> translate first, then scale
    // Effective mapping: screen = (canvas + offset) * scale
    transform: `scale(${camera.z}) translate(${camera.x}px, ${camera.y}px)`,
    transformOrigin: "0 0"
  }));
  const syncWithCanvas = /* @__PURE__ */ __name((canvas) => {
    if (!canvas || !canvas.ds) return;
    camera.x = canvas.ds.offset[0];
    camera.y = canvas.ds.offset[1];
    camera.z = canvas.ds.scale || 1;
  }, "syncWithCanvas");
  const canvasToScreen = /* @__PURE__ */ __name((point) => {
    return {
      x: (point.x + camera.x) * camera.z,
      y: (point.y + camera.y) * camera.z
    };
  }, "canvasToScreen");
  const screenToCanvas = /* @__PURE__ */ __name((point) => {
    return {
      x: point.x / camera.z - camera.x,
      y: point.y / camera.z - camera.y
    };
  }, "screenToCanvas");
  const getNodeScreenBounds = /* @__PURE__ */ __name((pos, size) => {
    const topLeft = canvasToScreen({ x: pos[0], y: pos[1] });
    const width = size[0] * camera.z;
    const height = size[1] * camera.z;
    return new DOMRect(topLeft.x, topLeft.y, width, height);
  }, "getNodeScreenBounds");
  const calculateAdjustedMargin = /* @__PURE__ */ __name((baseMargin) => {
    if (camera.z < 0.1) return Math.min(baseMargin * 5, 2);
    if (camera.z > 3) return Math.max(baseMargin * 0.5, 0.05);
    return baseMargin;
  }, "calculateAdjustedMargin");
  const isNodeTooSmall = /* @__PURE__ */ __name((nodeSize) => {
    const nodeScreenSize = Math.max(nodeSize[0], nodeSize[1]) * camera.z;
    return nodeScreenSize < 4;
  }, "isNodeTooSmall");
  const getExpandedViewportBounds = /* @__PURE__ */ __name((viewport, margin) => {
    const marginX = viewport.width * margin;
    const marginY = viewport.height * margin;
    return {
      left: -marginX,
      right: viewport.width + marginX,
      top: -marginY,
      bottom: viewport.height + marginY
    };
  }, "getExpandedViewportBounds");
  const testViewportIntersection = /* @__PURE__ */ __name((screenPos, nodeSize, bounds) => {
    const nodeRight = screenPos.x + nodeSize[0] * camera.z;
    const nodeBottom = screenPos.y + nodeSize[1] * camera.z;
    return !(nodeRight < bounds.left || screenPos.x > bounds.right || nodeBottom < bounds.top || screenPos.y > bounds.bottom);
  }, "testViewportIntersection");
  const isNodeInViewport = /* @__PURE__ */ __name((nodePos, nodeSize, viewport, margin = 0.2) => {
    if (isNodeTooSmall(nodeSize)) return false;
    const screenPos = canvasToScreen({ x: nodePos[0], y: nodePos[1] });
    const adjustedMargin = calculateAdjustedMargin(margin);
    const bounds = getExpandedViewportBounds(viewport, adjustedMargin);
    return testViewportIntersection(screenPos, nodeSize, bounds);
  }, "isNodeInViewport");
  const getViewportBounds = /* @__PURE__ */ __name((viewport, margin = 0.2) => {
    const marginX = viewport.width * margin;
    const marginY = viewport.height * margin;
    const topLeft = screenToCanvas({ x: -marginX, y: -marginY });
    const bottomRight = screenToCanvas({
      x: viewport.width + marginX,
      y: viewport.height + marginY
    });
    return {
      x: topLeft.x,
      y: topLeft.y,
      width: bottomRight.x - topLeft.x,
      height: bottomRight.y - topLeft.y
    };
  }, "getViewportBounds");
  return {
    camera: readonly(camera),
    transformStyle,
    syncWithCanvas,
    canvasToScreen,
    screenToCanvas,
    getNodeScreenBounds,
    isNodeInViewport,
    getViewportBounds
  };
}, "useTransformState");
function useLOD(camera) {
  const isLOD = computed(() => {
    const { pixelRatio } = useDevicePixelRatio();
    const baseFontSize = 14;
    const dprAdjustment = Math.sqrt(pixelRatio.value);
    const settingStore = useSettingStore();
    const minFontSize = settingStore.get("LiteGraph.Canvas.MinFontSizeForLOD");
    const threshold = Math.round(minFontSize / (baseFontSize * dprAdjustment) * 100) / 100;
    return camera.z < threshold;
  });
  return { isLOD };
}
__name(useLOD, "useLOD");
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TransformPane",
  props: {
    canvas: {}
  },
  emits: ["transformUpdate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const {
      camera,
      transformStyle,
      syncWithCanvas,
      canvasToScreen,
      screenToCanvas,
      isNodeInViewport
    } = useTransformState();
    const { isLOD } = useLOD(camera);
    const canvasElement = computed(() => props.canvas?.canvas);
    const { isTransforming: isInteracting } = useTransformSettling(canvasElement, {
      settleDelay: 512
    });
    provide(TransformStateKey, {
      camera,
      canvasToScreen,
      screenToCanvas,
      isNodeInViewport
    });
    const emit = __emit;
    useRafFn(
      () => {
        if (!props.canvas) {
          return;
        }
        syncWithCanvas(props.canvas);
        emit("transformUpdate");
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-testid": "transform-pane",
        class: normalizeClass(
          unref(cn)(
            "absolute inset-0 w-full h-full pointer-events-none",
            unref(isInteracting) ? "transform-pane--interacting" : "will-change-auto",
            unref(isLOD) && "isLOD"
          )
        ),
        style: normalizeStyle(unref(transformStyle))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
const TransformPane = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-f76f8040"]]);
const _hoisted_1$b = { class: "flex items-center gap-2" };
const _hoisted_2$7 = { for: "node-colors" };
const _hoisted_3$5 = { class: "flex items-center gap-2" };
const _hoisted_4$3 = { for: "show-links" };
const _hoisted_5$2 = { class: "flex items-center gap-2" };
const _hoisted_6$2 = { for: "show-groups" };
const _hoisted_7$1 = { class: "flex items-center gap-2" };
const _hoisted_8$1 = { for: "render-bypass" };
const _hoisted_9 = { class: "flex items-center gap-2" };
const _hoisted_10 = { for: "render-error" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MiniMapPanel",
  props: {
    panelStyles: {},
    nodeColors: { type: Boolean },
    showLinks: { type: Boolean },
    showGroups: { type: Boolean },
    renderBypass: { type: Boolean },
    renderError: { type: Boolean }
  },
  emits: ["updateOption"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "minimap-panel mr-2 flex flex-col gap-2 bg-comfy-menu-bg p-3 text-sm shadow-interface",
        style: normalizeStyle(_ctx.panelStyles)
      }, [
        createElementVNode("div", _hoisted_1$b, [
          createVNode(unref(Checkbox), {
            "input-id": "node-colors",
            name: "node-colors",
            "model-value": _ctx.nodeColors,
            binary: "",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.NodeColors", value))
          }, null, 8, ["model-value"]),
          _cache[5] || (_cache[5] = createElementVNode("i", { class: "icon-[lucide--palette]" }, null, -1)),
          createElementVNode("label", _hoisted_2$7, toDisplayString(_ctx.$t("minimap.nodeColors")), 1)
        ]),
        createElementVNode("div", _hoisted_3$5, [
          createVNode(unref(Checkbox), {
            "input-id": "show-links",
            name: "show-links",
            "model-value": _ctx.showLinks,
            binary: "",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.ShowLinks", value))
          }, null, 8, ["model-value"]),
          _cache[6] || (_cache[6] = createElementVNode("i", { class: "icon-[lucide--route]" }, null, -1)),
          createElementVNode("label", _hoisted_4$3, toDisplayString(_ctx.$t("minimap.showLinks")), 1)
        ]),
        createElementVNode("div", _hoisted_5$2, [
          createVNode(unref(Checkbox), {
            "input-id": "show-groups",
            name: "show-groups",
            "model-value": _ctx.showGroups,
            binary: "",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.ShowGroups", value))
          }, null, 8, ["model-value"]),
          _cache[7] || (_cache[7] = createElementVNode("i", { class: "icon-[lucide--frame]" }, null, -1)),
          createElementVNode("label", _hoisted_6$2, toDisplayString(_ctx.$t("minimap.showGroups")), 1)
        ]),
        createElementVNode("div", _hoisted_7$1, [
          createVNode(unref(Checkbox), {
            "input-id": "render-bypass",
            name: "render-bypass",
            "model-value": _ctx.renderBypass,
            binary: "",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.RenderBypassState", value))
          }, null, 8, ["model-value"]),
          _cache[8] || (_cache[8] = createElementVNode("i", { class: "icon-[lucide--circle-slash-2]" }, null, -1)),
          createElementVNode("label", _hoisted_8$1, toDisplayString(_ctx.$t("minimap.renderBypassState")), 1)
        ]),
        createElementVNode("div", _hoisted_9, [
          createVNode(unref(Checkbox), {
            "input-id": "render-error",
            name: "render-error",
            "model-value": _ctx.renderError,
            binary: "",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.RenderErrorState", value))
          }, null, 8, ["model-value"]),
          _cache[9] || (_cache[9] = createElementVNode("i", { class: "icon-[lucide--message-circle-warning]" }, null, -1)),
          createElementVNode("label", _hoisted_10, toDisplayString(_ctx.$t("minimap.renderErrorState")), 1)
        ])
      ], 4);
    };
  }
});
const _hoisted_1$a = ["width", "height"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MiniMap",
  setup(__props) {
    const commandStore = useCommandStore();
    const minimapRef = ref();
    const {
      initialized,
      visible,
      containerRef,
      canvasRef,
      containerStyles,
      viewportStyles,
      width,
      height,
      panelStyles,
      nodeColors,
      showLinks,
      showGroups,
      renderBypass,
      renderError,
      updateOption,
      destroy,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      handlePointerCancel,
      handleWheel,
      setMinimapRef
    } = useMinimap();
    const showOptionsPanel = ref(false);
    const toggleOptionsPanel = /* @__PURE__ */ __name(() => {
      showOptionsPanel.value = !showOptionsPanel.value;
    }, "toggleOptionsPanel");
    onMounted(() => {
      if (minimapRef.value) {
        setMinimapRef(minimapRef.value);
      }
    });
    onUnmounted(() => {
      destroy();
    });
    return (_ctx, _cache) => {
      return unref(visible) && unref(initialized) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "minimapRef",
        ref: minimapRef,
        class: "minimap-main-container absolute right-0 bottom-[54px] z-1000 flex"
      }, [
        showOptionsPanel.value ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          "panel-styles": unref(panelStyles),
          "node-colors": unref(nodeColors),
          "show-links": unref(showLinks),
          "show-groups": unref(showGroups),
          "render-bypass": unref(renderBypass),
          "render-error": unref(renderError),
          onUpdateOption: unref(updateOption)
        }, null, 8, ["panel-styles", "node-colors", "show-links", "show-groups", "render-bypass", "render-error", "onUpdateOption"])) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: containerRef,
          class: "litegraph-minimap relative border border-interface-stroke bg-comfy-menu-bg shadow-interface",
          style: normalizeStyle(unref(containerStyles))
        }, [
          createVNode(unref(Button), {
            class: "absolute top-1 left-1 z-10 hover:bg-interface-button-hover-surface!",
            size: "small",
            text: "",
            severity: "secondary",
            onClick: withModifiers(toggleOptionsPanel, ["stop"])
          }, {
            icon: withCtx(() => _cache[7] || (_cache[7] = [
              createElementVNode("i", { class: "icon-[lucide--settings-2]" }, null, -1)
            ])),
            _: 1
          }),
          createVNode(unref(Button), {
            class: "absolute top-1 right-1 z-10 hover:bg-interface-button-hover-surface!",
            size: "small",
            text: "",
            severity: "secondary",
            "data-testid": "close-minmap-button",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => unref(commandStore).execute("Comfy.Canvas.ToggleMinimap"), ["stop"]))
          }, {
            icon: withCtx(() => _cache[8] || (_cache[8] = [
              createElementVNode("i", { class: "icon-[lucide--x]" }, null, -1)
            ])),
            _: 1
          }),
          createElementVNode("hr", {
            class: "absolute top-7 h-px border-0 bg-node-component-border",
            style: normalizeStyle({
              width: unref(containerStyles).width
            })
          }, null, 4),
          createElementVNode("canvas", {
            ref_key: "canvasRef",
            ref: canvasRef,
            width: unref(width),
            height: unref(height),
            class: "minimap-canvas"
          }, null, 8, _hoisted_1$a),
          createElementVNode("div", {
            class: "minimap-viewport",
            style: normalizeStyle(unref(viewportStyles))
          }, null, 4),
          createElementVNode("div", {
            class: "absolute inset-0 touch-none",
            onPointerdown: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => unref(handlePointerDown) && unref(handlePointerDown)(...args)),
            onPointermove: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => unref(handlePointerMove) && unref(handlePointerMove)(...args)),
            onPointerup: _cache[3] || (_cache[3] = //@ts-ignore
            (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
            onPointerleave: _cache[4] || (_cache[4] = //@ts-ignore
            (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
            onPointercancel: _cache[5] || (_cache[5] = //@ts-ignore
            (...args) => unref(handlePointerCancel) && unref(handlePointerCancel)(...args)),
            onWheel: _cache[6] || (_cache[6] = //@ts-ignore
            (...args) => unref(handleWheel) && unref(handleWheel)(...args))
          }, null, 32)
        ], 4)
      ], 512)) : createCommentVNode("", true);
    };
  }
});
const MiniMap = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-fdf41881"]]);
function useNodeZIndex(options = {}) {
  const { layoutSource = LayoutSource.Vue } = options;
  const layoutMutations = useLayoutMutations();
  function bringNodeToFront(nodeId, source) {
    layoutMutations.setSource(source ?? layoutSource);
    layoutMutations.bringNodeToFront(nodeId);
  }
  __name(bringNodeToFront, "bringNodeToFront");
  return {
    bringNodeToFront
  };
}
__name(useNodeZIndex, "useNodeZIndex");
function hasMultipleNodesSelected(selectedItems) {
  let count = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    if (isLGraphNode(selectedItems[i])) {
      count++;
      if (count >= 2) {
        return true;
      }
    }
  }
  return false;
}
__name(hasMultipleNodesSelected, "hasMultipleNodesSelected");
function useNodeEventHandlersIndividual() {
  const canvasStore = useCanvasStore();
  const { nodeManager } = useVueNodeLifecycle();
  const { bringNodeToFront } = useNodeZIndex();
  const { shouldHandleNodePointerEvents } = useCanvasInteractions();
  const handleNodeSelect = /* @__PURE__ */ __name((event, nodeData) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeData.id);
    if (!node) return;
    const isMultiSelect = event.ctrlKey || event.metaKey || event.shiftKey;
    if (isMultiSelect) {
      if (node.selected) {
        canvasStore.canvas.deselect(node);
      } else {
        canvasStore.canvas.select(node);
      }
    } else {
      const selectedMultipleNodes = hasMultipleNodesSelected(
        canvasStore.selectedItems
      );
      if (!selectedMultipleNodes) {
        canvasStore.canvas.deselectAll();
        canvasStore.canvas.select(node);
      }
    }
    if (!node.flags?.pinned) {
      bringNodeToFront(nodeData.id);
    }
    canvasStore.updateSelectedItems();
  }, "handleNodeSelect");
  const handleNodeCollapse = /* @__PURE__ */ __name((nodeId, collapsed) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeId);
    if (!node) return;
    const currentCollapsed = node.flags?.collapsed ?? false;
    if (currentCollapsed !== collapsed) {
      node.collapse();
    }
  }, "handleNodeCollapse");
  const handleNodeTitleUpdate = /* @__PURE__ */ __name((nodeId, newTitle) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeId);
    if (!node) return;
    node.title = newTitle;
  }, "handleNodeTitleUpdate");
  const handleNodeDoubleClick = /* @__PURE__ */ __name((event, nodeData) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeData.id);
    if (!node) return;
    event.preventDefault();
    if (!node.selected) {
      handleNodeSelect(event, nodeData);
    }
  }, "handleNodeDoubleClick");
  const handleNodeRightClick = /* @__PURE__ */ __name((event, nodeData) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeData.id);
    if (!node) return;
    event.preventDefault();
    if (!node.selected) {
      handleNodeSelect(event, nodeData);
    }
  }, "handleNodeRightClick");
  const handleNodeDragStart = /* @__PURE__ */ __name((event, nodeData) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    const node = nodeManager.value.getNode(nodeData.id);
    if (!node) return;
    if (!node.selected) {
      const syntheticEvent = new PointerEvent("pointerdown", {
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        bubbles: true
      });
      handleNodeSelect(syntheticEvent, nodeData);
    }
    if (event.dataTransfer) {
      event.dataTransfer.setData("application/comfy-node-id", nodeData.id);
      event.dataTransfer.effectAllowed = "move";
    }
  }, "handleNodeDragStart");
  const selectNodes = /* @__PURE__ */ __name((nodeIds, addToSelection = false) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    if (!addToSelection) {
      canvasStore.canvas.deselectAll();
    }
    nodeIds.forEach((nodeId) => {
      const node = nodeManager.value?.getNode(nodeId);
      if (node && canvasStore.canvas) {
        canvasStore.canvas.select(node);
      }
    });
    canvasStore.updateSelectedItems();
  }, "selectNodes");
  const deselectNodes = /* @__PURE__ */ __name((nodeIds) => {
    if (!shouldHandleNodePointerEvents.value) return;
    if (!canvasStore.canvas || !nodeManager.value) return;
    nodeIds.forEach((nodeId) => {
      const node = nodeManager.value?.getNode(nodeId);
      if (node) {
        node.selected = false;
      }
    });
    canvasStore.updateSelectedItems();
  }, "deselectNodes");
  return {
    // Core event handlers
    handleNodeSelect,
    handleNodeCollapse,
    handleNodeTitleUpdate,
    handleNodeDoubleClick,
    handleNodeRightClick,
    handleNodeDragStart,
    // Batch operations
    selectNodes,
    deselectNodes
  };
}
__name(useNodeEventHandlersIndividual, "useNodeEventHandlersIndividual");
const useNodeEventHandlers = createSharedComposable(
  useNodeEventHandlersIndividual
);
function useNodeSnap() {
  const settingStore = useSettingStore();
  const gridSize = computed(() => settingStore.get("Comfy.SnapToGrid.GridSize"));
  const alwaysSnap = computed(() => settingStore.get("pysssss.SnapToGrid"));
  function shouldSnap(event) {
    return event.shiftKey || alwaysSnap.value;
  }
  __name(shouldSnap, "shouldSnap");
  function applySnapToPosition(position) {
    const size = gridSize.value;
    if (!size) return { ...position };
    const posArray = [position.x, position.y];
    if (snapPoint(posArray, size)) {
      return { x: posArray[0], y: posArray[1] };
    }
    return { ...position };
  }
  __name(applySnapToPosition, "applySnapToPosition");
  function applySnapToSize(size) {
    const gridSizeValue = gridSize.value;
    if (!gridSizeValue) return { ...size };
    const sizeArray = [size.width, size.height];
    if (snapPoint(sizeArray, gridSizeValue)) {
      return { width: sizeArray[0], height: sizeArray[1] };
    }
    return { ...size };
  }
  __name(applySnapToSize, "applySnapToSize");
  return {
    gridSize,
    alwaysSnap,
    shouldSnap,
    applySnapToPosition,
    applySnapToSize
  };
}
__name(useNodeSnap, "useNodeSnap");
function useShiftKeySync() {
  const shiftKeyState = shallowRef(false);
  let canvasEl = null;
  function syncShiftState(isShiftPressed) {
    if (isShiftPressed === shiftKeyState.value) return;
    if (!canvasEl) {
      canvasEl = app.canvas?.canvas ?? null;
      if (!canvasEl) return;
    }
    shiftKeyState.value = isShiftPressed;
    canvasEl.dispatchEvent(
      new KeyboardEvent(isShiftPressed ? "keydown" : "keyup", {
        key: "Shift",
        shiftKey: isShiftPressed,
        bubbles: true
      })
    );
  }
  __name(syncShiftState, "syncShiftState");
  function trackShiftKey(initialEvent) {
    syncShiftState(initialEvent.shiftKey);
    const handleKeyEvent = /* @__PURE__ */ __name((e) => {
      if (e.key !== "Shift") return;
      syncShiftState(e.shiftKey);
    }, "handleKeyEvent");
    const stopKeydown = useEventListener(window, "keydown", handleKeyEvent, {
      passive: true
    });
    const stopKeyup = useEventListener(window, "keyup", handleKeyEvent, {
      passive: true
    });
    return () => {
      stopKeydown();
      stopKeyup();
    };
  }
  __name(trackShiftKey, "trackShiftKey");
  tryOnScopeDispose(() => {
    shiftKeyState.value = false;
    canvasEl = null;
  });
  return { trackShiftKey };
}
__name(useShiftKeySync, "useShiftKeySync");
function useNodeLayout(nodeIdMaybe) {
  const nodeId = toValue(nodeIdMaybe);
  const mutations = useLayoutMutations();
  const { selectedNodeIds } = storeToRefs(useCanvasStore());
  const transformState = inject(TransformStateKey);
  const { shouldSnap, applySnapToPosition } = useNodeSnap();
  const { trackShiftKey } = useShiftKeySync();
  const layoutRef = layoutStore.getNodeLayoutRef(nodeId);
  const position = computed(() => {
    const layout = layoutRef.value;
    const pos = layout?.position ?? { x: 0, y: 0 };
    return pos;
  });
  const size = computed(
    () => layoutRef.value?.size ?? { width: 200, height: 100 }
  );
  const bounds = computed(
    () => layoutRef.value?.bounds ?? {
      x: position.value.x,
      y: position.value.y,
      width: size.value.width,
      height: size.value.height
    }
  );
  const isVisible = computed(() => layoutRef.value?.visible ?? true);
  const zIndex = computed(() => layoutRef.value?.zIndex ?? 0);
  const isDragging = ref(false);
  let dragStartPos = null;
  let dragStartMouse = null;
  let otherSelectedNodesStartPositions = null;
  let rafId = null;
  let stopShiftSync = null;
  function startDrag(event) {
    if (!layoutRef.value || !transformState) return;
    stopShiftSync = trackShiftKey(event);
    isDragging.value = true;
    dragStartPos = { ...position.value };
    dragStartMouse = { x: event.clientX, y: event.clientY };
    if (selectedNodeIds?.value?.has(nodeId) && selectedNodeIds.value.size > 1) {
      otherSelectedNodesStartPositions = /* @__PURE__ */ new Map();
      for (const id of selectedNodeIds.value) {
        if (id === nodeId) continue;
        const nodeLayout = layoutStore.getNodeLayoutRef(id).value;
        if (nodeLayout) {
          otherSelectedNodesStartPositions.set(id, { ...nodeLayout.position });
        }
      }
    } else {
      otherSelectedNodesStartPositions = null;
    }
    mutations.setSource(LayoutSource.Vue);
    if (!(event.target instanceof HTMLElement)) return;
    event.target.setPointerCapture(event.pointerId);
  }
  __name(startDrag, "startDrag");
  const handleDrag = /* @__PURE__ */ __name((event) => {
    if (!isDragging.value || !dragStartPos || !dragStartMouse || !transformState) {
      return;
    }
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      if (!dragStartPos || !dragStartMouse || !transformState) return;
      const mouseDelta = {
        x: event.clientX - dragStartMouse.x,
        y: event.clientY - dragStartMouse.y
      };
      const canvasOrigin = transformState.screenToCanvas({ x: 0, y: 0 });
      const canvasWithDelta = transformState.screenToCanvas(mouseDelta);
      const canvasDelta = {
        x: canvasWithDelta.x - canvasOrigin.x,
        y: canvasWithDelta.y - canvasOrigin.y
      };
      const newPosition = {
        x: dragStartPos.x + canvasDelta.x,
        y: dragStartPos.y + canvasDelta.y
      };
      mutations.moveNode(nodeId, newPosition);
      if (otherSelectedNodesStartPositions && otherSelectedNodesStartPositions.size > 0) {
        for (const [
          otherNodeId,
          startPos
        ] of otherSelectedNodesStartPositions) {
          const newOtherPosition = {
            x: startPos.x + canvasDelta.x,
            y: startPos.y + canvasDelta.y
          };
          mutations.moveNode(otherNodeId, newOtherPosition);
        }
      }
    });
  }, "handleDrag");
  function endDrag(event) {
    if (!isDragging.value) return;
    if (shouldSnap(event)) {
      const boundsUpdates = [];
      const currentLayout = layoutStore.getNodeLayoutRef(nodeId).value;
      if (currentLayout) {
        const currentPos = currentLayout.position;
        const snappedPos = applySnapToPosition({ ...currentPos });
        if (snappedPos.x !== currentPos.x || snappedPos.y !== currentPos.y) {
          boundsUpdates.push({
            nodeId,
            bounds: {
              x: snappedPos.x,
              y: snappedPos.y,
              width: currentLayout.size.width,
              height: currentLayout.size.height
            }
          });
        }
      }
      if (otherSelectedNodesStartPositions && otherSelectedNodesStartPositions.size > 0) {
        for (const otherNodeId of otherSelectedNodesStartPositions.keys()) {
          const nodeLayout = layoutStore.getNodeLayoutRef(otherNodeId).value;
          if (nodeLayout) {
            const currentPos = { ...nodeLayout.position };
            const snappedPos = applySnapToPosition(currentPos);
            if (snappedPos.x !== currentPos.x || snappedPos.y !== currentPos.y) {
              boundsUpdates.push({
                nodeId: otherNodeId,
                bounds: {
                  x: snappedPos.x,
                  y: snappedPos.y,
                  width: nodeLayout.size.width,
                  height: nodeLayout.size.height
                }
              });
            }
          }
        }
      }
      if (boundsUpdates.length > 0) {
        layoutStore.batchUpdateNodeBounds(boundsUpdates);
      }
    }
    isDragging.value = false;
    dragStartPos = null;
    dragStartMouse = null;
    otherSelectedNodesStartPositions = null;
    stopShiftSync?.();
    stopShiftSync = null;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (!(event.target instanceof HTMLElement)) return;
    event.target.releasePointerCapture(event.pointerId);
  }
  __name(endDrag, "endDrag");
  function moveNodeTo(position2) {
    mutations.setSource(LayoutSource.Vue);
    mutations.moveNode(nodeId, position2);
  }
  __name(moveNodeTo, "moveNodeTo");
  return {
    // Reactive state (via customRef)
    layoutRef,
    position,
    size,
    bounds,
    isVisible,
    zIndex,
    isDragging,
    // Mutations
    moveNodeTo,
    // Drag handlers
    startDrag,
    handleDrag,
    endDrag,
    // Computed styles for Vue templates
    nodeStyle: computed(
      () => ({
        position: "absolute",
        left: `${position.value.x}px`,
        top: `${position.value.y}px`,
        width: `${size.value.width}px`,
        height: `${size.value.height}px`,
        zIndex: zIndex.value,
        cursor: isDragging.value ? "grabbing" : "grab"
      })
    )
  };
}
__name(useNodeLayout, "useNodeLayout");
function useNodePointerInteractions(nodeDataMaybe, onNodeSelect) {
  const nodeData = computed(() => {
    const value = toValue(nodeDataMaybe);
    if (!value) {
      console.warn(
        "useNodePointerInteractions: nodeDataMaybe resolved to null/undefined"
      );
      return null;
    }
    return value;
  });
  const nodeIdComputed = computed(() => nodeData.value?.id ?? "");
  const { startDrag, endDrag, handleDrag } = useNodeLayout(nodeIdComputed);
  const { forwardEventToCanvas, shouldHandleNodePointerEvents } = useCanvasInteractions();
  const forwardMiddlePointerIfNeeded = /* @__PURE__ */ __name((event) => {
    if (!isMiddlePointerInput(event)) return false;
    forwardEventToCanvas(event);
    return true;
  }, "forwardMiddlePointerIfNeeded");
  const isDragging = ref(false);
  const dragStyle = computed(() => {
    if (nodeData.value?.flags?.pinned) {
      return { cursor: "default" };
    }
    return { cursor: isDragging.value ? "grabbing" : "grab" };
  });
  const startPosition = ref({ x: 0, y: 0 });
  const handlePointerDown = /* @__PURE__ */ __name((event) => {
    if (!nodeData.value) {
      console.warn(
        "LGraphNode: nodeData is null/undefined in handlePointerDown"
      );
      return;
    }
    if (forwardMiddlePointerIfNeeded(event)) return;
    if (event.button !== 0) {
      return;
    }
    if (!shouldHandleNodePointerEvents.value) {
      forwardEventToCanvas(event);
      return;
    }
    startPosition.value = { x: event.clientX, y: event.clientY };
    onNodeSelect(event, nodeData.value);
    if (nodeData.value.flags?.pinned) {
      return;
    }
    isDragging.value = true;
    layoutStore.isDraggingVueNodes.value = true;
    startDrag(event);
  }, "handlePointerDown");
  const handlePointerMove = /* @__PURE__ */ __name((event) => {
    if (forwardMiddlePointerIfNeeded(event)) return;
    if (isDragging.value) {
      void handleDrag(event);
    }
  }, "handlePointerMove");
  const cleanupDragState = /* @__PURE__ */ __name(() => {
    isDragging.value = false;
    layoutStore.isDraggingVueNodes.value = false;
  }, "cleanupDragState");
  const safeDragEnd = /* @__PURE__ */ __name(async (event) => {
    try {
      await endDrag(event);
    } catch (error) {
      console.error("Error during endDrag:", error);
    } finally {
      cleanupDragState();
    }
  }, "safeDragEnd");
  const handleDragTermination = /* @__PURE__ */ __name((event, errorContext) => {
    safeDragEnd(event).catch((error) => {
      console.error(`Failed to complete ${errorContext}:`, error);
      cleanupDragState();
    });
  }, "handleDragTermination");
  const handlePointerUp = /* @__PURE__ */ __name((event) => {
    if (forwardMiddlePointerIfNeeded(event)) return;
    if (isDragging.value) {
      handleDragTermination(event, "drag end");
    }
    if (!shouldHandleNodePointerEvents.value) {
      forwardEventToCanvas(event);
      return;
    }
  }, "handlePointerUp");
  const handlePointerCancel = /* @__PURE__ */ __name((event) => {
    if (!isDragging.value) return;
    handleDragTermination(event, "drag cancellation");
  }, "handlePointerCancel");
  const handleContextMenu = /* @__PURE__ */ __name((event) => {
    if (!isDragging.value) return;
    event.preventDefault();
    cleanupDragState();
  }, "handleContextMenu");
  onUnmounted(() => {
    if (!isDragging.value) return;
    cleanupDragState();
  });
  const pointerHandlers = {
    onPointerdown: handlePointerDown,
    onPointermove: handlePointerMove,
    onPointerup: handlePointerUp,
    onPointercancel: handlePointerCancel,
    onContextmenu: handleContextMenu
  };
  return {
    isDragging,
    dragStyle,
    pointerHandlers
  };
}
__name(useNodePointerInteractions, "useNodePointerInteractions");
const trackingConfigs = /* @__PURE__ */ new Map([
  [
    "node",
    {
      dataAttribute: "nodeId",
      updateHandler: /* @__PURE__ */ __name((updates) => {
        const nodeUpdates = updates.map(({ id, bounds }) => ({
          nodeId: id,
          bounds
        }));
        layoutStore.batchUpdateNodeBounds(nodeUpdates);
      }, "updateHandler")
    }
  ]
]);
const resizeObserver = new ResizeObserver((entries) => {
  const conv = useSharedCanvasPositionConversion();
  const updatesByType = /* @__PURE__ */ new Map();
  const nodesNeedingSlotResync = /* @__PURE__ */ new Set();
  for (const entry of entries) {
    if (!(entry.target instanceof HTMLElement)) continue;
    const element = entry.target;
    let elementType;
    let elementId;
    for (const [type, config2] of trackingConfigs) {
      const id = element.dataset[config2.dataAttribute];
      if (id) {
        elementType = type;
        elementId = id;
        break;
      }
    }
    if (!elementType || !elementId) continue;
    const contentBox = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : {
      inlineSize: entry.contentRect.width,
      blockSize: entry.contentRect.height
    };
    const width = contentBox.inlineSize;
    const height = contentBox.blockSize;
    const rect = element.getBoundingClientRect();
    const [cx, cy] = conv.clientPosToCanvasPos([rect.left, rect.top]);
    const topLeftCanvas = { x: cx, y: cy };
    const bounds = {
      x: topLeftCanvas.x,
      y: topLeftCanvas.y + LiteGraph.NODE_TITLE_HEIGHT,
      width: Math.max(0, width),
      height: Math.max(0, height - LiteGraph.NODE_TITLE_HEIGHT)
    };
    let updates = updatesByType.get(elementType);
    if (!updates) {
      updates = [];
      updatesByType.set(elementType, updates);
    }
    updates.push({ id: elementId, bounds });
    if (elementType === "node" && elementId) {
      nodesNeedingSlotResync.add(elementId);
    }
  }
  layoutStore.setSource(LayoutSource.Vue);
  for (const [type, updates] of updatesByType) {
    const config2 = trackingConfigs.get(type);
    if (config2 && updates.length) config2.updateHandler(updates);
  }
  if (nodesNeedingSlotResync.size > 0) {
    for (const nodeId of nodesNeedingSlotResync) {
      syncNodeSlotLayoutsFromDOM(nodeId);
    }
  }
});
function useVueElementTracking(appIdentifierMaybe, trackingType) {
  const appIdentifier = toValue(appIdentifierMaybe);
  onMounted(() => {
    const element = getCurrentInstance()?.proxy?.$el;
    if (!(element instanceof HTMLElement) || !appIdentifier) return;
    const config2 = trackingConfigs.get(trackingType);
    if (!config2) return;
    element.dataset[config2.dataAttribute] = appIdentifier;
    resizeObserver.observe(element);
  });
  onUnmounted(() => {
    const element = getCurrentInstance()?.proxy?.$el;
    if (!(element instanceof HTMLElement)) return;
    const config2 = trackingConfigs.get(trackingType);
    if (!config2) return;
    delete element.dataset[config2.dataAttribute];
    resizeObserver.unobserve(element);
  });
}
__name(useVueElementTracking, "useVueElementTracking");
const useNodeExecutionState = /* @__PURE__ */ __name((nodeLocatorIdMaybe) => {
  const locatorId = computed(() => toValue(nodeLocatorIdMaybe) ?? "");
  const { nodeLocationProgressStates, isIdle } = storeToRefs(useExecutionStore());
  const progressState = computed(() => {
    const id = locatorId.value;
    return id ? nodeLocationProgressStates.value[id] : void 0;
  });
  const executing = computed(
    () => !isIdle.value && progressState.value?.state === "running"
  );
  const progress = computed(() => {
    const state = progressState.value;
    return state && state.max > 0 ? state.value / state.max : void 0;
  });
  const progressPercentage = computed(() => {
    const prog = progress.value;
    return prog !== void 0 ? Math.round(prog * 100) : void 0;
  });
  const executionState = computed(() => {
    const state = progressState.value;
    if (!state) return "idle";
    return state.state;
  });
  return {
    executing,
    progress,
    progressPercentage,
    progressState,
    executionState
  };
}, "useNodeExecutionState");
const useNodePreviewState = /* @__PURE__ */ __name((nodeIdMaybe, options) => {
  const nodeId = toValue(nodeIdMaybe);
  const workflowStore = useWorkflowStore();
  const { nodePreviewImages } = storeToRefs(useNodeOutputStore());
  const locatorId = computed(() => workflowStore.nodeIdToNodeLocatorId(nodeId));
  const previewUrls = computed(() => {
    const key = locatorId.value;
    if (!key) return void 0;
    const urls = nodePreviewImages.value[key];
    return urls?.length ? urls : void 0;
  });
  const hasPreview = computed(() => !!previewUrls.value?.length);
  const latestPreviewUrl = computed(() => {
    const urls = previewUrls.value;
    return urls?.length ? urls.at(-1) : "";
  });
  const shouldShowPreviewImg = computed(() => {
    if (!options?.isCollapsed) {
      return hasPreview.value;
    }
    return !options.isCollapsed.value && hasPreview.value;
  });
  return {
    locatorId,
    previewUrls,
    hasPreview,
    latestPreviewUrl,
    shouldShowPreviewImg
  };
}, "useNodePreviewState");
function applyHandleDelta(startSize, delta, handle) {
  const horizontalMultiplier = handle.horizontal === "right" ? 1 : -1;
  const verticalMultiplier = handle.vertical === "bottom" ? 1 : -1;
  return {
    width: startSize.width + delta.x * horizontalMultiplier,
    height: startSize.height + delta.y * verticalMultiplier
  };
}
__name(applyHandleDelta, "applyHandleDelta");
function computeAdjustedPosition(startPosition, startSize, nextSize, handle) {
  const widthDelta = startSize.width - nextSize.width;
  const heightDelta = startSize.height - nextSize.height;
  return {
    x: handle.horizontal === "left" ? startPosition.x + widthDelta : startPosition.x,
    y: handle.vertical === "top" ? startPosition.y + heightDelta : startPosition.y
  };
}
__name(computeAdjustedPosition, "computeAdjustedPosition");
function computeResizeOutcome({
  startSize,
  startPosition,
  delta,
  handle,
  snapFn
}) {
  const resized = applyHandleDelta(startSize, delta, handle);
  const snapped = snapFn?.(resized) ?? resized;
  const position = computeAdjustedPosition(
    startPosition,
    startSize,
    snapped,
    handle
  );
  return {
    size: snapped,
    position
  };
}
__name(computeResizeOutcome, "computeResizeOutcome");
function createResizeSession(config2) {
  const startSize = { ...config2.startSize };
  const startPosition = { ...config2.startPosition };
  const handle = config2.handle;
  return (delta, snapFn) => computeResizeOutcome({
    startSize,
    startPosition,
    handle,
    delta,
    snapFn
  });
}
__name(createResizeSession, "createResizeSession");
function toCanvasDelta(startPointer, currentPointer, scale) {
  const safeScale = scale === 0 ? 1 : scale;
  return {
    x: (currentPointer.x - startPointer.x) / safeScale,
    y: (currentPointer.y - startPointer.y) / safeScale
  };
}
__name(toCanvasDelta, "toCanvasDelta");
function useNodeResize(resizeCallback, options) {
  const { transformState } = options;
  const isResizing = ref(false);
  const resizeStartPointer = ref(null);
  const resizeSession = ref(null);
  const { shouldSnap, applySnapToSize } = useNodeSnap();
  const { trackShiftKey } = useShiftKeySync();
  const startResize = /* @__PURE__ */ __name((event, handle, startPosition) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget;
    if (!(target instanceof HTMLElement)) return;
    const nodeElement = target.closest("[data-node-id]");
    if (!(nodeElement instanceof HTMLElement)) return;
    const rect = nodeElement.getBoundingClientRect();
    const scale = transformState.camera.z;
    const startSize = {
      width: rect.width / scale,
      height: rect.height / scale
    };
    const stopShiftSync = trackShiftKey(event);
    target.setPointerCapture(event.pointerId);
    isResizing.value = true;
    resizeStartPointer.value = { x: event.clientX, y: event.clientY };
    resizeSession.value = createResizeSession({
      startSize,
      startPosition: { ...startPosition },
      handle
    });
    const handlePointerMove = /* @__PURE__ */ __name((moveEvent) => {
      if (!isResizing.value || !resizeStartPointer.value || !resizeSession.value)
        return;
      const startPointer = resizeStartPointer.value;
      const session = resizeSession.value;
      const delta = toCanvasDelta(
        startPointer,
        { x: moveEvent.clientX, y: moveEvent.clientY },
        transformState.camera.z
      );
      const nodeElement2 = target.closest("[data-node-id]");
      if (nodeElement2 instanceof HTMLElement) {
        const outcome = session(
          delta,
          shouldSnap(moveEvent) ? applySnapToSize : void 0
        );
        resizeCallback(outcome, nodeElement2);
      }
    }, "handlePointerMove");
    const handlePointerUp = /* @__PURE__ */ __name((upEvent) => {
      if (isResizing.value) {
        isResizing.value = false;
        resizeStartPointer.value = null;
        resizeSession.value = null;
        stopShiftSync();
        target.releasePointerCapture(upEvent.pointerId);
        stopMoveListen();
        stopUpListen();
      }
    }, "handlePointerUp");
    const stopMoveListen = useEventListener("pointermove", handlePointerMove);
    const stopUpListen = useEventListener("pointerup", handlePointerUp);
  }, "startResize");
  return {
    startResize,
    isResizing
  };
}
__name(useNodeResize, "useNodeResize");
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "m2 2l20 20M10.41 10.41a2 2 0 1 1-2.83-2.83m5.92 5.92L6 21m12-9l3 3" }),
      createElementVNode("path", { d: "M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59M21 15V5a2 2 0 0 0-2-2H9" })
    ], -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "lucide-image-off", render });
const _hoisted_1$8 = {
  key: 0,
  class: "flex h-full min-h-16 w-full min-w-16 flex-col"
};
const _hoisted_2$6 = { class: "relative h-88 w-full grow overflow-hidden rounded-[5px] bg-node-component-surface" };
const _hoisted_3$4 = {
  key: 0,
  class: "text-pure-white flex h-full w-full flex-col items-center justify-center text-center"
};
const _hoisted_4$2 = { class: "text-xs text-smoke-400" };
const _hoisted_5$1 = ["src", "alt"];
const _hoisted_6$1 = { class: "text-node-component-header-text mt-1 text-center text-xs" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LivePreview",
  props: {
    imageUrl: {}
  },
  setup(__props) {
    const props = __props;
    const actualDimensions = ref(null);
    const imageError = ref(false);
    watch(
      () => props.imageUrl,
      () => {
        actualDimensions.value = null;
        imageError.value = false;
      }
    );
    const handleImageLoad = /* @__PURE__ */ __name((event) => {
      if (!event.target || !(event.target instanceof HTMLImageElement)) return;
      const img = event.target;
      imageError.value = false;
      if (img.naturalWidth && img.naturalHeight) {
        actualDimensions.value = `${img.naturalWidth} x ${img.naturalHeight}`;
      }
    }, "handleImageLoad");
    const handleImageError = /* @__PURE__ */ __name(() => {
      imageError.value = true;
      actualDimensions.value = null;
    }, "handleImageError");
    return (_ctx, _cache) => {
      const _component_i_lucide58image_off = __unplugin_components_0;
      return _ctx.imageUrl ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$6, [
          imageError.value ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
            createVNode(_component_i_lucide58image_off, { class: "mb-1 size-8 text-smoke-500" }),
            createElementVNode("p", _hoisted_4$2, toDisplayString(_ctx.$t("g.imageFailedToLoad")), 1)
          ])) : (openBlock(), createElementBlock("img", {
            key: 1,
            src: _ctx.imageUrl,
            alt: _ctx.$t("g.liveSamplingPreview"),
            class: "pointer-events-none h-full w-full object-contain object-center",
            onLoad: handleImageLoad,
            onError: handleImageError
          }, null, 40, _hoisted_5$1))
        ]),
        createElementVNode("div", _hoisted_6$1, toDisplayString(imageError.value ? _ctx.$t("g.errorLoadingImage") : actualDimensions.value || _ctx.$t("g.calculatingDimensions")), 1)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$7 = {
  key: 0,
  class: "node-error p-2 text-sm text-red-500"
};
const _hoisted_2$5 = ["data-node-id"];
const _hoisted_3$3 = { class: "flex flex-col justify-center items-center relative" };
const _hoisted_4$1 = { class: "relative mb-4" };
const _hoisted_5 = ["data-testid"];
const _hoisted_6 = {
  key: 1,
  class: "min-h-0 flex-1 flex"
};
const _hoisted_7 = {
  key: 2,
  class: "min-h-0 flex-1 px-4"
};
const _hoisted_8 = ["aria-label", "onPointerdown"];
const baseResizeHandleClasses = "absolute h-3 w-3 opacity-0 pointer-events-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40";
const POSITION_EPSILON = 0.01;
const separatorClasses = "bg-component-node-border h-px mx-0 w-full lod-toggle";
const progressClasses = "h-2 bg-primary-500 transition-all duration-300";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LGraphNode",
  props: {
    nodeData: {},
    error: { default: null },
    zoomLevel: {}
  },
  setup(__props) {
    const { t: t2 } = useI18n();
    const {
      handleNodeCollapse,
      handleNodeTitleUpdate,
      handleNodeSelect,
      handleNodeRightClick
    } = useNodeEventHandlers();
    useVueElementTracking(() => __props.nodeData.id, "node");
    const transformState = inject(TransformStateKey);
    if (!transformState) {
      throw new Error(
        "TransformState must be provided for node resize functionality"
      );
    }
    const { selectedNodeIds } = storeToRefs(useCanvasStore());
    const isSelected = computed(() => {
      return selectedNodeIds.value.has(__props.nodeData.id);
    });
    const nodeLocatorId = computed(() => getLocatorIdFromNodeData(__props.nodeData));
    const { executing, progress } = useNodeExecutionState(nodeLocatorId);
    const executionStore = useExecutionStore();
    const hasExecutionError = computed(
      () => executionStore.lastExecutionErrorNodeId === __props.nodeData.id
    );
    const hasAnyError = computed(() => {
      return !!(hasExecutionError.value || __props.nodeData.hasErrors || __props.error || (executionStore.lastNodeErrors?.[__props.nodeData.id]?.errors.length ?? 0) > 0);
    });
    const isCollapsed = computed(() => __props.nodeData.flags?.collapsed ?? false);
    const bypassed = computed(
      () => __props.nodeData.mode === LGraphEventMode.BYPASS
    );
    const muted = computed(() => __props.nodeData.mode === LGraphEventMode.NEVER);
    const nodeBodyBackgroundColor = computed(() => {
      const colorPaletteStore = useColorPaletteStore();
      if (!__props.nodeData.bgcolor) {
        return "";
      }
      return applyLightThemeColor(
        __props.nodeData.bgcolor,
        Boolean(colorPaletteStore.completedActivePalette.light_theme)
      );
    });
    const nodeOpacity = computed(() => {
      const globalOpacity = useSettingStore().get("Comfy.Node.Opacity") ?? 1;
      if (bypassed.value || muted.value) {
        return globalOpacity * 0.5;
      }
      return globalOpacity;
    });
    const hasInputs = computed(() => nonWidgetedInputs(__props.nodeData).length > 0);
    const hasOutputs = computed(() => !!__props.nodeData.outputs?.length);
    const { handleWheel, shouldHandleNodePointerEvents } = useCanvasInteractions();
    const renderError = ref(null);
    const { toastErrorHandler } = useErrorHandling();
    onErrorCaptured((error) => {
      renderError.value = error.message;
      toastErrorHandler(error);
      return false;
    });
    const { position, size, zIndex, moveNodeTo } = useNodeLayout(() => __props.nodeData.id);
    const { pointerHandlers, isDragging, dragStyle } = useNodePointerInteractions(
      () => __props.nodeData,
      handleNodeSelect
    );
    const handleContextMenu = /* @__PURE__ */ __name((event) => {
      event.preventDefault();
      event.stopPropagation();
      handleNodeRightClick(event, __props.nodeData);
      const targetElement = event.currentTarget;
      if (targetElement) {
        toggleNodeOptions(event, targetElement, false);
      }
    }, "handleContextMenu");
    onMounted(() => {
      if (size.value && nodeContainerRef.value) {
        nodeContainerRef.value.style.setProperty(
          "--node-width",
          `${size.value.width}px`
        );
        nodeContainerRef.value.style.setProperty(
          "--node-height",
          `${size.value.height}px`
        );
      }
    });
    const cornerResizeHandles = [
      {
        id: "se",
        direction: { horizontal: "right", vertical: "bottom" },
        classes: "right-0 bottom-0 cursor-se-resize",
        ariaLabel: t2("g.resizeFromBottomRight")
      },
      {
        id: "ne",
        direction: { horizontal: "right", vertical: "top" },
        classes: "right-0 top-0 cursor-ne-resize",
        ariaLabel: t2("g.resizeFromTopRight")
      },
      {
        id: "sw",
        direction: { horizontal: "left", vertical: "bottom" },
        classes: "left-0 bottom-0 cursor-sw-resize",
        ariaLabel: t2("g.resizeFromBottomLeft")
      },
      {
        id: "nw",
        direction: { horizontal: "left", vertical: "top" },
        classes: "left-0 top-0 cursor-nw-resize",
        ariaLabel: t2("g.resizeFromTopLeft")
      }
    ];
    const { startResize } = useNodeResize(
      (result, element) => {
        if (isCollapsed.value) return;
        element.style.setProperty("--node-width", `${result.size.width}px`);
        element.style.setProperty("--node-height", `${result.size.height}px`);
        const currentPosition = position.value;
        const deltaX = Math.abs(result.position.x - currentPosition.x);
        const deltaY = Math.abs(result.position.y - currentPosition.y);
        if (deltaX > POSITION_EPSILON || deltaY > POSITION_EPSILON) {
          moveNodeTo(result.position);
        }
      },
      {
        transformState
      }
    );
    const handleResizePointerDown = /* @__PURE__ */ __name((direction) => {
      return (event) => {
        if (__props.nodeData.flags?.pinned) return;
        startResize(event, direction, { ...position.value });
      };
    }, "handleResizePointerDown");
    whenever(isCollapsed, () => {
      const element = nodeContainerRef.value;
      if (!element) return;
      element.style.setProperty("--node-width", "");
      element.style.setProperty("--node-height", "");
    });
    const hasCustomContent = computed(() => {
      return !!nodeMedia.value && nodeMedia.value.urls.length > 0;
    });
    const { latestPreviewUrl, shouldShowPreviewImg } = useNodePreviewState(
      () => __props.nodeData.id,
      {
        isCollapsed
      }
    );
    const borderClass = computed(() => {
      if (hasAnyError.value) return "border-node-stroke-error";
      if (executing.value) return "border-node-stroke-executing";
      return "border-node-stroke";
    });
    const outlineClass = computed(() => {
      return cn(
        isSelected.value && (hasAnyError.value && "outline-error " || executing.value && "outline-node-executing" || "outline-node-component-outline")
      );
    });
    const handleCollapse = /* @__PURE__ */ __name(() => {
      handleNodeCollapse(__props.nodeData.id, !isCollapsed.value);
    }, "handleCollapse");
    const handleHeaderTitleUpdate = /* @__PURE__ */ __name((newTitle) => {
      handleNodeTitleUpdate(__props.nodeData.id, newTitle);
    }, "handleHeaderTitleUpdate");
    const handleEnterSubgraph = /* @__PURE__ */ __name(() => {
      const graph = app.graph?.rootGraph || app.graph;
      if (!graph) {
        console.warn("LGraphNode: No graph available for subgraph navigation");
        return;
      }
      const locatorId = getLocatorIdFromNodeData(__props.nodeData);
      const litegraphNode = getNodeByLocatorId(graph, locatorId);
      if (!litegraphNode?.isSubgraphNode() || !("subgraph" in litegraphNode)) {
        console.warn("LGraphNode: Node is not a valid subgraph node", litegraphNode);
        return;
      }
      const canvas = app.canvas;
      if (!canvas || typeof canvas.openSubgraph !== "function") {
        console.warn("LGraphNode: Canvas or openSubgraph method not available");
        return;
      }
      canvas.openSubgraph(litegraphNode.subgraph, litegraphNode);
    }, "handleEnterSubgraph");
    const nodeOutputs = useNodeOutputStore();
    const nodeOutputLocatorId = computed(
      () => __props.nodeData.subgraphId ? `${__props.nodeData.subgraphId}:${__props.nodeData.id}` : __props.nodeData.id
    );
    const lgraphNode = computed(() => {
      const locatorId = getLocatorIdFromNodeData(__props.nodeData);
      const rootGraph = app.graph?.rootGraph || app.graph;
      if (!rootGraph) return null;
      return getNodeByLocatorId(rootGraph, locatorId);
    });
    const nodeMedia = computed(() => {
      const newOutputs = nodeOutputs.nodeOutputs[nodeOutputLocatorId.value];
      const node = lgraphNode.value;
      if (!node || !newOutputs?.images?.length) return void 0;
      const urls = nodeOutputs.getNodeImageUrls(node);
      if (!urls?.length) return void 0;
      const hasVideoInput = node.inputs?.some((input) => input.type === "VIDEO");
      const type = node.previewMediaType === "video" || !node.previewMediaType && hasVideoInput ? "video" : "image";
      return { type, urls };
    });
    const nodeContainerRef = ref();
    const isDraggingOver = ref(false);
    function handleDragOver(event) {
      const node = lgraphNode.value;
      if (!node || !node.onDragOver) {
        isDraggingOver.value = false;
        return;
      }
      const canDrop = node.onDragOver(event);
      isDraggingOver.value = canDrop;
    }
    __name(handleDragOver, "handleDragOver");
    function handleDragLeave() {
      isDraggingOver.value = false;
    }
    __name(handleDragLeave, "handleDragLeave");
    async function handleDrop(event) {
      isDraggingOver.value = false;
      const node = lgraphNode.value;
      if (!node || !node.onDragDrop) {
        return;
      }
      await node.onDragDrop(event);
    }
    __name(handleDrop, "handleDrop");
    return (_ctx, _cache) => {
      return renderError.value ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString(_ctx.$t("Node Render Error")), 1)) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        ref_key: "nodeContainerRef",
        ref: nodeContainerRef,
        "data-node-id": _ctx.nodeData.id,
        class: unref(cn)(
          "bg-component-node-background lg-node absolute",
          "h-min w-min contain-style contain-layout min-h-(--node-height) min-w-(--node-width)",
          "rounded-2xl touch-none flex flex-col",
          "border-1 border-solid border-component-node-border",
          // hover (only when node should handle events)
          unref(shouldHandleNodePointerEvents) && "hover:ring-7 ring-node-component-ring",
          "outline-transparent outline-2",
          borderClass.value,
          outlineClass.value,
          {
            "before:rounded-2xl before:pointer-events-none before:absolute before:bg-bypass/60 before:inset-0": bypassed.value,
            "before:rounded-2xl before:pointer-events-none before:absolute before:inset-0": muted.value,
            "will-change-transform": unref(isDragging),
            "ring-4 ring-primary-500 bg-primary-500/10": isDraggingOver.value
          },
          unref(shouldHandleNodePointerEvents) ? "pointer-events-auto" : "pointer-events-none"
        ),
        style: [
          {
            transform: `translate(${unref(position).x ?? 0}px, ${(unref(position).y ?? 0) - unref(LiteGraph).NODE_TITLE_HEIGHT}px)`,
            zIndex: unref(zIndex),
            opacity: nodeOpacity.value,
            "--component-node-background": nodeBodyBackgroundColor.value
          },
          unref(dragStyle)
        ]
      }, unref(pointerHandlers), {
        onWheel: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(handleWheel) && unref(handleWheel)(...args)),
        onContextmenu: handleContextMenu,
        onDragover: withModifiers(handleDragOver, ["prevent"]),
        onDragleave: handleDragLeave,
        onDrop: withModifiers(handleDrop, ["stop", "prevent"])
      }), [
        createElementVNode("div", _hoisted_3$3, [
          isCollapsed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            hasInputs.value ? (openBlock(), createBlock(_sfc_main$1J, {
              key: 0,
              multi: "",
              class: "absolute left-0 -translate-x-1/2"
            })) : createCommentVNode("", true),
            hasOutputs.value ? (openBlock(), createBlock(_sfc_main$1J, {
              key: 1,
              multi: "",
              class: "absolute right-0 translate-x-1/2"
            })) : createCommentVNode("", true),
            createVNode(_sfc_main$1K, {
              "node-data": _ctx.nodeData,
              unified: ""
            }, null, 8, ["node-data"])
          ], 64)) : createCommentVNode("", true),
          createVNode(_sfc_main$1L, {
            "node-data": _ctx.nodeData,
            collapsed: isCollapsed.value,
            onCollapse: handleCollapse,
            "onUpdate:title": handleHeaderTitleUpdate,
            onEnterSubgraph: handleEnterSubgraph
          }, null, 8, ["node-data", "collapsed"])
        ]),
        isCollapsed.value && unref(executing) && unref(progress) !== void 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(
            unref(cn)(
              "absolute inset-x-4 -bottom-[1px] translate-y-1/2 rounded-full",
              progressClasses
            )
          ),
          style: normalizeStyle({ width: `${Math.min(unref(progress) * 100, 100)}%` })
        }, null, 6)) : createCommentVNode("", true),
        !isCollapsed.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createElementVNode("div", _hoisted_4$1, [
            createElementVNode("div", {
              class: normalizeClass(separatorClasses)
            }),
            unref(executing) && unref(progress) !== void 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(
                unref(cn)(
                  "absolute inset-x-0 top-1/2 -translate-y-1/2",
                  !!(unref(progress) < 1) && "rounded-r-full",
                  progressClasses
                )
              ),
              style: normalizeStyle({ width: `${Math.min(unref(progress) * 100, 100)}%` })
            }, null, 6)) : createCommentVNode("", true)
          ]),
          createElementVNode("div", {
            class: "flex min-h-min min-w-min flex-1 flex-col gap-4 pb-4",
            "data-testid": `node-body-${_ctx.nodeData.id}`
          }, [
            createVNode(_sfc_main$1K, { "node-data": _ctx.nodeData }, null, 8, ["node-data"]),
            _ctx.nodeData.widgets?.length ? (openBlock(), createBlock(_sfc_main$1M, {
              key: 0,
              "node-data": _ctx.nodeData
            }, null, 8, ["node-data"])) : createCommentVNode("", true),
            hasCustomContent.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createVNode(_sfc_main$1h, {
                "node-data": _ctx.nodeData,
                media: nodeMedia.value
              }, null, 8, ["node-data", "media"])
            ])) : createCommentVNode("", true),
            unref(shouldShowPreviewImg) ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createVNode(_sfc_main$8, {
                "image-url": unref(latestPreviewUrl) || null
              }, null, 8, ["image-url"])
            ])) : createCommentVNode("", true)
          ], 8, _hoisted_5)
        ], 64)) : createCommentVNode("", true),
        !isCollapsed.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, renderList(cornerResizeHandles, (handle) => {
          return createElementVNode("div", {
            key: handle.id,
            role: "button",
            "aria-label": handle.ariaLabel,
            class: normalizeClass(unref(cn)(baseResizeHandleClasses, handle.classes)),
            onPointerdown: withModifiers(($event) => handleResizePointerDown(handle.direction)($event), ["stop"])
          }, null, 42, _hoisted_8);
        }), 64)) : createCommentVNode("", true)
      ], 16, _hoisted_2$5));
    };
  }
});
let pendingCallbacks = [];
let isNewUserDetermined = false;
let isNewUserCached = null;
const newUserService = /* @__PURE__ */ __name(() => {
  function checkIsNewUser(settingStore) {
    const isNewUserSettings = Object.keys(settingStore.settingValues).length === 0 || !settingStore.get("Comfy.TutorialCompleted");
    const hasNoWorkflow = !localStorage.getItem("workflow");
    const hasNoPreviousWorkflow = !localStorage.getItem(
      "Comfy.PreviousWorkflow"
    );
    return isNewUserSettings && hasNoWorkflow && hasNoPreviousWorkflow;
  }
  __name(checkIsNewUser, "checkIsNewUser");
  async function registerInitCallback(callback) {
    if (isNewUserDetermined) {
      if (isNewUserCached) {
        try {
          await callback();
        } catch (error) {
          console.error("New user initialization callback failed:", error);
        }
      }
    } else {
      pendingCallbacks.push(callback);
    }
  }
  __name(registerInitCallback, "registerInitCallback");
  async function initializeIfNewUser(settingStore) {
    if (isNewUserDetermined) return;
    isNewUserCached = checkIsNewUser(settingStore);
    isNewUserDetermined = true;
    if (!isNewUserCached) {
      pendingCallbacks = [];
      return;
    }
    await settingStore.set(
      "Comfy.InstalledVersion",
      "1.32.2"
    );
    for (const callback of pendingCallbacks) {
      try {
        await callback();
      } catch (error) {
        console.error("New user initialization callback failed:", error);
      }
    }
    pendingCallbacks = [];
  }
  __name(initializeIfNewUser, "initializeIfNewUser");
  function isNewUser() {
    return isNewUserDetermined ? isNewUserCached : null;
  }
  __name(isNewUser, "isNewUser");
  return {
    registerInitCallback,
    initializeIfNewUser,
    isNewUser
  };
}, "newUserService");
const _hoisted_1$6 = {
  key: 0,
  class: "pointer-events-auto relative w-full h-10 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center px-4"
};
const _hoisted_2$4 = { class: "flex items-center" };
const _hoisted_3$2 = { class: "pl-2" };
const STORAGE_KEY = "vueNodesBannerDismissed";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TryVueNodeBanner",
  setup(__props) {
    const settingStore = useSettingStore();
    const bannerDismissed = useLocalStorage(STORAGE_KEY, false);
    const vueNodesEnabled = computed(() => {
      try {
        return settingStore.get("Comfy.VueNodes.Enabled") ?? false;
      } catch {
        return false;
      }
    });
    const showVueNodesBanner = computed(() => {
      if (vueNodesEnabled.value) {
        return false;
      }
      if (bannerDismissed.value) {
        return false;
      }
      return true;
    });
    const handleDismiss = /* @__PURE__ */ __name(() => {
      bannerDismissed.value = true;
    }, "handleDismiss");
    const handleTryItOut = /* @__PURE__ */ __name(async () => {
      try {
        await settingStore.set("Comfy.VueNodes.Enabled", true);
      } catch (error) {
        console.error("Failed to enable Vue nodes:", error);
      } finally {
        handleDismiss();
      }
    }, "handleTryItOut");
    return (_ctx, _cache) => {
      return showVueNodesBanner.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("div", _hoisted_2$4, [
          _cache[0] || (_cache[0] = createElementVNode("i", { class: "icon-[lucide--sparkles]" }, null, -1)),
          createElementVNode("span", _hoisted_3$2, toDisplayString(_ctx.$t("vueNodesBanner.message")), 1),
          createVNode(unref(Button), {
            class: "cursor-pointer bg-transparent rounded h-7 px-3 border border-white text-white ml-4 text-xs",
            onClick: handleTryItOut
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("vueNodesBanner.tryItOut")), 1)
            ]),
            _: 1
          })
        ]),
        createVNode(unref(Button), {
          class: "cursor-pointer bg-transparent border-0 outline-0 grid place-items-center absolute right-4",
          unstyled: "",
          onClick: handleDismiss
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createElementVNode("i", { class: "w-5 h-5 icon-[lucide--x]" }, null, -1)
          ])),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "workflow-tabs-container pointer-events-auto relative h-9.5 w-full"
};
const _hoisted_2$3 = {
  key: 0,
  class: "app-drag fixed top-0 left-0 z-10 h-[var(--comfy-topbar-height)] w-full"
};
const _hoisted_3$1 = { class: "flex h-full items-center" };
const _hoisted_4 = { class: "sidebar-content-container h-full w-full overflow-x-hidden overflow-y-auto" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvas",
  emits: ["ready"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const canvasRef = ref(null);
    const nodeSearchboxPopoverRef = shallowRef(null);
    const settingStore = useSettingStore();
    const nodeDefStore = useNodeDefStore();
    const workspaceStore = useWorkspaceStore();
    const canvasStore = useCanvasStore();
    const executionStore = useExecutionStore();
    const toastStore = useToastStore();
    const colorPaletteStore = useColorPaletteStore();
    const colorPaletteService = useColorPaletteService();
    const canvasInteractions = useCanvasInteractions();
    const betaMenuEnabled = computed(
      () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const canvasMenuEnabled = computed(
      () => settingStore.get("Comfy.Graph.CanvasMenu")
    );
    const tooltipEnabled = computed(() => settingStore.get("Comfy.EnableTooltips"));
    const selectionToolboxEnabled = computed(
      () => settingStore.get("Comfy.Canvas.SelectionToolbox")
    );
    const activeSidebarTab = computed(() => {
      return workspaceStore.sidebarTab.activeSidebarTab;
    });
    const showUI = computed(
      () => !workspaceStore.focusMode && betaMenuEnabled.value
    );
    const minimapEnabled = computed(() => settingStore.get("Comfy.Minimap.Visible"));
    const { shouldRenderVueNodes } = useVueFeatureFlags();
    const vueNodeLifecycle = useVueNodeLifecycle();
    const { handleTransformUpdate } = useViewportCulling();
    const handleVueNodeLifecycleReset = /* @__PURE__ */ __name(async () => {
      if (shouldRenderVueNodes.value) {
        vueNodeLifecycle.disposeNodeManagerAndSyncs();
        await nextTick();
        vueNodeLifecycle.initializeNodeManager();
      }
    }, "handleVueNodeLifecycleReset");
    watch(() => canvasStore.currentGraph, handleVueNodeLifecycleReset);
    watch(
      () => canvasStore.isInSubgraph,
      async (newValue, oldValue) => {
        if (oldValue && !newValue) {
          useWorkflowStore().updateActiveGraph();
        }
        await handleVueNodeLifecycleReset();
      }
    );
    const allNodes = computed(
      () => Array.from(vueNodeLifecycle.nodeManager.value?.vueNodeData?.values() ?? [])
    );
    watchEffect(() => {
      LiteGraph.nodeOpacity = settingStore.get("Comfy.Node.Opacity");
    });
    watchEffect(() => {
      LiteGraph.nodeLightness = colorPaletteStore.completedActivePalette.light_theme ? 0.5 : void 0;
    });
    watchEffect(() => {
      nodeDefStore.showDeprecated = settingStore.get("Comfy.Node.ShowDeprecated");
    });
    watchEffect(() => {
      nodeDefStore.showExperimental = settingStore.get(
        "Comfy.Node.ShowExperimental"
      );
    });
    watchEffect(() => {
      const spellcheckEnabled = settingStore.get("Comfy.TextareaWidget.Spellcheck");
      const textareas = document.querySelectorAll(
        "textarea.comfy-multiline-input"
      );
      textareas.forEach((textarea) => {
        textarea.spellcheck = spellcheckEnabled;
        textarea.focus();
        textarea.blur();
      });
    });
    watch(
      () => settingStore.get("Comfy.WidgetControlMode"),
      () => {
        if (!canvasStore.canvas) return;
        for (const n of app.graph.nodes) {
          if (!n.widgets) continue;
          for (const w of n.widgets) {
            if (w[IS_CONTROL_WIDGET]) {
              updateControlWidgetLabel(w);
              if (w.linkedWidgets) {
                for (const l of w.linkedWidgets) {
                  updateControlWidgetLabel(l);
                }
              }
            }
          }
        }
        app.graph.setDirtyCanvas(true);
      }
    );
    watch(
      [() => canvasStore.canvas, () => settingStore.get("Comfy.ColorPalette")],
      async ([canvas, currentPaletteId]) => {
        if (!canvas) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
      }
    );
    watch(
      () => settingStore.get("Comfy.Canvas.BackgroundImage"),
      async () => {
        if (!canvasStore.canvas) return;
        const currentPaletteId = colorPaletteStore.activePaletteId;
        if (!currentPaletteId) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
        canvasStore.canvas.setDirty(false, true);
      }
    );
    watch(
      () => colorPaletteStore.activePaletteId,
      async (newValue) => {
        await settingStore.set("Comfy.ColorPalette", newValue);
      }
    );
    watch(
      () => [executionStore.nodeLocationProgressStates, canvasStore.canvas],
      ([nodeLocationProgressStates, canvas]) => {
        if (!canvas?.graph) return;
        for (const node of canvas.graph.nodes) {
          const nodeLocatorId = useWorkflowStore().nodeIdToNodeLocatorId(node.id);
          const progressState = nodeLocationProgressStates[nodeLocatorId];
          if (progressState && progressState.state === "running") {
            node.progress = progressState.value / progressState.max;
          } else {
            node.progress = void 0;
          }
        }
        canvas.graph.setDirtyCanvas(true, false);
      },
      { deep: true }
    );
    watch(
      () => executionStore.lastNodeErrors,
      (lastNodeErrors) => {
        if (!app.graph) return;
        for (const node of app.graph.nodes) {
          for (const slot of node.inputs) {
            delete slot.hasErrors;
          }
          for (const slot of node.outputs) {
            delete slot.hasErrors;
          }
          const nodeErrors = lastNodeErrors?.[node.id];
          if (!nodeErrors) continue;
          const validErrors = nodeErrors.errors.filter(
            (error) => error.extra_info?.input_name !== void 0
          );
          validErrors.forEach((error) => {
            const inputName = error.extra_info.input_name;
            const inputIndex = node.findInputSlot(inputName);
            if (inputIndex !== -1) {
              node.inputs[inputIndex].hasErrors = true;
            }
          });
        }
        app.canvas.draw(true, true);
      }
    );
    useEventListener(
      canvasRef,
      "litegraph:no-items-selected",
      () => {
        toastStore.add({
          severity: "warn",
          summary: t("toastMessages.nothingSelected"),
          life: 2e3
        });
      },
      { passive: true }
    );
    const loadCustomNodesI18n = /* @__PURE__ */ __name(async () => {
      try {
        const i18nData = await api.getCustomNodesI18n();
        Object.entries(i18nData).forEach(([locale, message]) => {
          i18n.global.mergeLocaleMessage(locale, message);
        });
      } catch (error) {
        console.error("Failed to load custom nodes i18n", error);
      }
    }, "loadCustomNodesI18n");
    const comfyAppReady = ref(false);
    const workflowPersistence = useWorkflowPersistence();
    useCanvasDrop(canvasRef);
    useLitegraphSettings();
    useNodeBadge();
    onMounted(async () => {
      useGlobalLitegraph();
      useContextMenuTranslation();
      useCopy();
      usePaste();
      useWorkflowAutoSave();
      useVueFeatureFlags();
      app.vueAppReady = true;
      workspaceStore.spinner = true;
      ChangeTracker.init();
      await loadCustomNodesI18n();
      try {
        await settingStore.loadSettingValues();
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          localStorage.removeItem("Comfy.userId");
          localStorage.removeItem("Comfy.userName");
          window.location.reload();
        } else {
          throw error;
        }
      }
      CORE_SETTINGS.forEach(settingStore.addSetting);
      await newUserService().initializeIfNewUser(settingStore);
      await app.setup(canvasRef.value);
      canvasStore.canvas = app.canvas;
      canvasStore.canvas.render_canvas_border = false;
      workspaceStore.spinner = false;
      useSearchBoxStore().setPopoverRef(nodeSearchboxPopoverRef.value);
      window.app = app;
      window.graph = app.graph;
      comfyAppReady.value = true;
      vueNodeLifecycle.setupEmptyGraphListener();
      app.canvas.onSelectionChange = useChainCallback(
        app.canvas.onSelectionChange,
        () => canvasStore.updateSelectedItems()
      );
      colorPaletteStore.customPalettes = settingStore.get(
        "Comfy.CustomColorPalettes"
      );
      await workflowPersistence.restorePreviousWorkflow();
      workflowPersistence.restoreWorkflowTabsState();
      const { useReleaseStore: useReleaseStore2 } = await __vitePreload(async () => {
        const { useReleaseStore: useReleaseStore3 } = await Promise.resolve().then(() => releaseStore);
        return { useReleaseStore: useReleaseStore3 };
      }, true ? void 0 : void 0, import.meta.url);
      const releaseStore$1 = useReleaseStore2();
      void releaseStore$1.initialize();
      watch(
        () => settingStore.get("Comfy.Locale"),
        async () => {
          await useCommandStore().execute("Comfy.RefreshNodeDefinitions");
          await useWorkflowService().reloadCurrentWorkflow();
        }
      );
      whenever(
        () => useCanvasStore().canvas,
        (canvas) => {
          useEventListener(canvas.canvas, "litegraph:set-graph", () => {
            useWorkflowStore().updateActiveGraph();
          });
        },
        { immediate: true }
      );
      emit("ready");
    });
    onUnmounted(() => {
      vueNodeLifecycle.cleanup();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        comfyAppReady.value ? (openBlock(), createBlock(LiteGraphCanvasSplitterOverlay, { key: 0 }, createSlots({
          "graph-canvas-panel": withCtx(() => [
            canvasMenuEnabled.value ? (openBlock(), createBlock(_sfc_main$Z, {
              key: 0,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true),
            comfyAppReady.value && minimapEnabled.value && showUI.value ? (openBlock(), createBlock(MiniMap, {
              key: 1,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true)
          ]),
          _: 2
        }, [
          showUI.value ? {
            name: "workflow-tabs",
            fn: withCtx(() => [
              createVNode(_sfc_main$6),
              workflowTabsPosition.value === "Topbar" ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
                unref(isNativeWindow)() && workflowTabsPosition.value !== "Topbar" ? (openBlock(), createElementBlock("div", _hoisted_2$3)) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_3$1, [
                  createVNode(WorkflowTabs),
                  createVNode(_sfc_main$g)
                ])
              ])) : createCommentVNode("", true)
            ]),
            key: "0"
          } : void 0,
          showUI.value ? {
            name: "side-toolbar",
            fn: withCtx(() => [
              createVNode(SideToolbar)
            ]),
            key: "1"
          } : void 0,
          showUI.value ? {
            name: "side-bar-panel",
            fn: withCtx(() => [
              createElementVNode("div", _hoisted_4, [
                activeSidebarTab.value ? (openBlock(), createBlock(_sfc_main$13, {
                  key: 0,
                  extension: activeSidebarTab.value
                }, null, 8, ["extension"])) : createCommentVNode("", true)
              ])
            ]),
            key: "2"
          } : void 0,
          showUI.value ? {
            name: "topmenu",
            fn: withCtx(() => [
              createVNode(TopMenuSection)
            ]),
            key: "3"
          } : void 0,
          showUI.value ? {
            name: "bottom-panel",
            fn: withCtx(() => [
              createVNode(BottomPanel)
            ]),
            key: "4"
          } : void 0
        ]), 1024)) : createCommentVNode("", true),
        createElementVNode("canvas", {
          id: "graph-canvas",
          ref_key: "canvasRef",
          ref: canvasRef,
          tabindex: "1",
          class: "absolute inset-0 size-full touch-none"
        }, null, 512),
        unref(shouldRenderVueNodes) && unref(app).canvas && comfyAppReady.value ? (openBlock(), createBlock(TransformPane, {
          key: 1,
          canvas: unref(app).canvas,
          onTransformUpdate: unref(handleTransformUpdate),
          onWheelCapture: unref(canvasInteractions).forwardEventToCanvas
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(allNodes.value, (nodeData) => {
              return openBlock(), createBlock(_sfc_main$7, {
                key: nodeData.id,
                "node-data": nodeData,
                error: unref(executionStore).lastExecutionError?.node_id === nodeData.id ? "Execution error" : null,
                "zoom-level": unref(canvasStore).canvas?.ds?.scale || 1,
                "data-node-id": nodeData.id
              }, null, 8, ["node-data", "error", "zoom-level", "data-node-id"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["canvas", "onTransformUpdate", "onWheelCapture"])) : createCommentVNode("", true),
        tooltipEnabled.value ? (openBlock(), createBlock(NodeTooltip, { key: 2 })) : createCommentVNode("", true),
        createVNode(_sfc_main$A, {
          ref_key: "nodeSearchboxPopoverRef",
          ref: nodeSearchboxPopoverRef
        }, null, 512),
        comfyAppReady.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(TitleEditor),
          selectionToolboxEnabled.value ? (openBlock(), createBlock(SelectionToolbox, { key: 0 })) : createCommentVNode("", true),
          createVNode(_sfc_main$E),
          !unref(shouldRenderVueNodes) ? (openBlock(), createBlock(_sfc_main$10, { key: 1 })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$4 = { class: "flex flex-auto flex-col items-start" };
const _hoisted_2$2 = { class: "my-4 text-lg font-medium" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "RerouteMigrationToast",
  setup(__props) {
    const { t: t2 } = useI18n();
    const toast = useToast();
    const workflowStore = useWorkflowStore();
    const migrateToLitegraphReroute = /* @__PURE__ */ __name(async () => {
      const workflowJSON = app.graph.serialize();
      const migratedWorkflowJSON = migrateLegacyRerouteNodes(workflowJSON);
      await app.loadGraphData(
        migratedWorkflowJSON,
        false,
        false,
        workflowStore.activeWorkflow
      );
      toast.removeGroup("reroute-migration");
    }, "migrateToLitegraphReroute");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast), { group: "reroute-migration" }, {
        message: withCtx(() => [
          createElementVNode("div", _hoisted_1$4, [
            createElementVNode("div", _hoisted_2$2, toDisplayString(unref(t2)("toastMessages.migrateToLitegraphReroute")), 1),
            createVNode(unref(Button), {
              class: "self-end",
              size: "small",
              label: unref(t2)("g.migrate"),
              severity: "warn",
              onClick: migrateToLitegraphReroute
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$3 = { class: "flex flex-auto items-center justify-between gap-4" };
const _hoisted_2$1 = { class: "whitespace-nowrap" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VueNodesMigrationToast",
  setup(__props) {
    const { t: t2 } = useI18n();
    const toast = useToast();
    const dialogService = useDialogService();
    const isDismissed = useVueNodesMigrationDismissed();
    const handleOpenSettings = /* @__PURE__ */ __name(() => {
      dialogService.showSettingsDialog();
      toast.removeGroup("vue-nodes-migration");
      isDismissed.value = true;
    }, "handleOpenSettings");
    const handleClose = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
    }, "handleClose");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast), {
        group: "vue-nodes-migration",
        position: "bottom-center",
        class: "w-auto",
        onClose: handleClose
      }, {
        message: withCtx(() => [
          createElementVNode("div", _hoisted_1$3, [
            createElementVNode("span", _hoisted_2$1, toDisplayString(unref(t2)("vueNodesMigration.message")), 1),
            createVNode(unref(Button), {
              class: "whitespace-nowrap",
              size: "small",
              label: unref(t2)("vueNodesMigration.button"),
              text: "",
              onClick: handleOpenSettings
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const DEFAULT_TITLE = "ComfyUI";
const TITLE_SUFFIX = " - ComfyUI";
const useBrowserTabTitle = /* @__PURE__ */ __name(() => {
  const executionStore = useExecutionStore();
  const settingStore = useSettingStore();
  const workflowStore = useWorkflowStore();
  const executionText = computed(
    () => executionStore.isIdle ? "" : `[${Math.round(executionStore.executionProgress * 100)}%]`
  );
  const newMenuEnabled = computed(
    () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
  );
  const isUnsavedText = computed(
    () => workflowStore.activeWorkflow?.isModified || !workflowStore.activeWorkflow?.isPersisted ? " *" : ""
  );
  const workflowNameText = computed(() => {
    const workflowName = workflowStore.activeWorkflow?.filename;
    return workflowName ? isUnsavedText.value + workflowName + TITLE_SUFFIX : DEFAULT_TITLE;
  });
  const nodeExecutionTitle = computed(() => {
    const nodeProgressEntries = Object.entries(
      executionStore.nodeProgressStates
    );
    const runningNodes = nodeProgressEntries.filter(
      ([_, state2]) => state2.state === "running"
    );
    if (runningNodes.length === 0) {
      return "";
    }
    if (runningNodes.length > 1) {
      return `${executionText.value}[${runningNodes.length} ${t("g.nodesRunning", "nodes running")}]`;
    }
    const [nodeId, state] = runningNodes[0];
    const progress = Math.round(state.value / state.max * 100);
    const nodeType = executionStore.activePrompt?.workflow?.changeTracker?.activeState.nodes.find(
      (n) => String(n.id) === nodeId
    )?.type || "Node";
    return `${executionText.value}[${progress}%] ${nodeType}`;
  });
  const workflowTitle = computed(
    () => executionText.value + (newMenuEnabled.value ? workflowNameText.value : DEFAULT_TITLE)
  );
  const title = computed(() => nodeExecutionTitle.value || workflowTitle.value);
  useTitle(title);
}, "useBrowserTabTitle");
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "h-full w-full bg-white pr-6 pb-8 pl-4 dark-theme:bg-charcoal-600" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
__name(_sfc_render, "_sfc_render");
const RightSidePanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = { class: "text-neutral text-base" };
const _hoisted_2 = { class: "flex gap-2" };
const _hoisted_3 = { class: "relative flex gap-2 px-6 pb-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SampleModelSelector",
  props: {
    onClose: { type: Function }
  },
  setup(__props) {
    const frameworkOptions = ref([
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Angular", value: "angular" },
      { name: "Svelte", value: "svelte" }
    ]);
    const projectOptions = ref([
      { name: "Project A", value: "proj-a" },
      { name: "Project B", value: "proj-b" },
      { name: "Project C", value: "proj-c" }
    ]);
    const sortOptions = ref([
      { name: "Popular", value: "popular" },
      { name: "Latest", value: "latest" },
      { name: "A → Z", value: "az" }
    ]);
    const tempNavigation = ref([
      { id: "installed", label: "Installed", icon: "icon-[lucide--download]" },
      {
        title: "TAGS",
        items: [
          { id: "tag-sd15", label: "SD 1.5", icon: "icon-[lucide--tag]" },
          { id: "tag-sdxl", label: "SDXL", icon: "icon-[lucide--tag]" },
          { id: "tag-utility", label: "Utility", icon: "icon-[lucide--tag]" }
        ]
      },
      {
        title: "CATEGORIES",
        items: [
          { id: "cat-models", label: "Models", icon: "icon-[lucide--layers]" },
          { id: "cat-nodes", label: "Nodes", icon: "icon-[lucide--grid-3x3]" }
        ]
      }
    ]);
    const { t: t2 } = useI18n();
    provide(OnCloseKey, __props.onClose);
    const searchQuery = ref("");
    const searchText = ref("");
    const selectedFrameworks = ref([]);
    const selectedProjects = ref([]);
    const selectedSort = ref("popular");
    const selectedNavItem = ref("installed");
    const gridStyle = computed(() => createGridStyle());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseModalLayout, {
        "content-title": _ctx.$t("Checkpoints")
      }, {
        leftPanel: withCtx(() => [
          createVNode(_sfc_main$1x, {
            modelValue: selectedNavItem.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedNavItem.value = $event),
            "nav-items": tempNavigation.value
          }, {
            "header-icon": withCtx(() => _cache[6] || (_cache[6] = [
              createElementVNode("i", { class: "text-neutral icon-[lucide--puzzle]" }, null, -1)
            ])),
            "header-title": withCtx(() => [
              createElementVNode("span", _hoisted_1$1, toDisplayString(unref(t2)("g.title")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "nav-items"])
        ]),
        header: withCtx(() => [
          createVNode(_sfc_main$1D, {
            modelValue: searchQuery.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
            size: "lg",
            class: "max-w-[384px]"
          }, null, 8, ["modelValue"])
        ]),
        "header-right-area": withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            createVNode(_sfc_main$1I, {
              type: "primary",
              label: _ctx.$t("g.upload"),
              onClick: /* @__PURE__ */ __name(() => {
              }, "onClick")
            }, {
              icon: withCtx(() => _cache[7] || (_cache[7] = [
                createElementVNode("i", { class: "icon-[lucide--upload]" }, null, -1)
              ])),
              _: 1
            }, 8, ["label"]),
            createVNode(_sfc_main$1o, null, {
              default: withCtx(({ close }) => [
                createVNode(_sfc_main$1I, {
                  type: "secondary",
                  label: "Settings",
                  onClick: /* @__PURE__ */ __name(() => {
                    close();
                  }, "onClick")
                }, {
                  icon: withCtx(() => _cache[8] || (_cache[8] = [
                    createElementVNode("i", { class: "icon-[lucide--download]" }, null, -1)
                  ])),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_sfc_main$1I, {
                  type: "primary",
                  label: "Profile",
                  onClick: /* @__PURE__ */ __name(() => {
                    close();
                  }, "onClick")
                }, {
                  icon: withCtx(() => _cache[9] || (_cache[9] = [
                    createElementVNode("i", { class: "icon-[lucide--scroll]" }, null, -1)
                  ])),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 1
            })
          ])
        ]),
        contentFilter: withCtx(() => [
          createElementVNode("div", _hoisted_3, [
            createVNode(_sfc_main$1v, {
              modelValue: selectedFrameworks.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedFrameworks.value = $event),
              "search-query": searchText.value,
              "onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => searchText.value = $event),
              class: "w-[250px]",
              label: "Select Frameworks",
              options: frameworkOptions.value,
              "show-search-box": true,
              "show-selected-count": true,
              "show-clear-button": true
            }, null, 8, ["modelValue", "search-query", "options"]),
            createVNode(_sfc_main$1v, {
              modelValue: selectedProjects.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedProjects.value = $event),
              label: "Select Projects",
              options: projectOptions.value
            }, null, 8, ["modelValue", "options"]),
            createVNode(_sfc_main$1u, {
              modelValue: selectedSort.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSort.value = $event),
              label: "Sorting Type",
              options: sortOptions.value,
              class: "w-[135px]"
            }, {
              icon: withCtx(() => _cache[10] || (_cache[10] = [
                createElementVNode("i", { class: "icon-[lucide--filter]" }, null, -1)
              ])),
              _: 1
            }, 8, ["modelValue", "options"])
          ])
        ]),
        content: withCtx(() => [
          createElementVNode("div", {
            style: normalizeStyle(gridStyle.value)
          }, [
            (openBlock(), createElementBlock(Fragment, null, renderList(100, (i) => {
              return createVNode(_sfc_main$1m, {
                key: i,
                size: "regular"
              }, {
                top: withCtx(() => [
                  createVNode(_sfc_main$1l, { ratio: "landscape" }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createElementVNode("div", { class: "h-full w-full bg-blue-500" }, null, -1)
                    ])),
                    "top-right": withCtx(() => [
                      createVNode(_sfc_main$1E, {
                        class: "!bg-white !text-neutral-900",
                        onClick: /* @__PURE__ */ __name(() => {
                        }, "onClick")
                      }, {
                        default: withCtx(() => _cache[12] || (_cache[12] = [
                          createElementVNode("i", { class: "icon-[lucide--info]" }, null, -1)
                        ])),
                        _: 1
                      })
                    ]),
                    "bottom-right": withCtx(() => [
                      createVNode(_sfc_main$1k, { label: "png" }),
                      createVNode(_sfc_main$1k, { label: "1.2 MB" }),
                      createVNode(_sfc_main$1k, { label: "LoRA" }, {
                        icon: withCtx(() => _cache[13] || (_cache[13] = [
                          createElementVNode("i", { class: "icon-[lucide--folder]" }, null, -1)
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                bottom: withCtx(() => [
                  createVNode(_sfc_main$1n)
                ]),
                _: 2
              }, 1024);
            }), 64))
          ], 4)
        ]),
        rightPanel: withCtx(() => [
          createVNode(RightSidePanel)
        ]),
        _: 1
      }, 8, ["content-title"]);
    };
  }
});
const DIALOG_KEY = "global-model-selector";
const useModelSelectorDialog = /* @__PURE__ */ __name(() => {
  const dialogService = useDialogService();
  const dialogStore = useDialogStore();
  function hide() {
    dialogStore.closeDialog({ key: DIALOG_KEY });
  }
  __name(hide, "hide");
  function show() {
    dialogService.showLayoutDialog({
      key: DIALOG_KEY,
      component: _sfc_main$1,
      props: {
        onClose: hide
      }
    });
  }
  __name(show, "show");
  return {
    show,
    hide
  };
}, "useModelSelectorDialog");
function createModelNodeFromAsset(asset, options) {
  const validatedAsset = assetItemSchema.safeParse(asset);
  if (!validatedAsset.success) {
    const errorMessage = validatedAsset.error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
    console.error("Invalid asset item:", errorMessage);
    return {
      success: false,
      error: {
        code: "INVALID_ASSET",
        message: "Asset schema validation failed",
        assetId: asset.id,
        details: { validationErrors: errorMessage }
      }
    };
  }
  const validAsset = validatedAsset.data;
  const userMetadata = validAsset.user_metadata;
  if (!userMetadata) {
    console.error(`Asset ${validAsset.id} missing required user_metadata`);
    return {
      success: false,
      error: {
        code: "INVALID_ASSET",
        message: "Asset missing required user_metadata",
        assetId: validAsset.id
      }
    };
  }
  const filename = userMetadata.filename;
  if (typeof filename !== "string" || filename.length === 0) {
    console.error(
      `Asset ${validAsset.id} has invalid user_metadata.filename (expected non-empty string, got ${typeof filename})`
    );
    return {
      success: false,
      error: {
        code: "INVALID_ASSET",
        message: `Invalid filename (expected non-empty string, got ${typeof filename})`,
        assetId: validAsset.id
      }
    };
  }
  if (validAsset.tags.length === 0) {
    console.error(
      `Asset ${validAsset.id} has no tags defined (expected at least one category tag)`
    );
    return {
      success: false,
      error: {
        code: "INVALID_ASSET",
        message: "Asset has no tags defined",
        assetId: validAsset.id
      }
    };
  }
  const category = validAsset.tags.find(
    (tag) => tag !== MODELS_TAG && tag !== MISSING_TAG
  );
  if (!category) {
    console.error(
      `Asset ${validAsset.id} has no valid category tag. Available tags: ${validAsset.tags.join(", ")} (expected tag other than '${MODELS_TAG}' or '${MISSING_TAG}')`
    );
    return {
      success: false,
      error: {
        code: "INVALID_ASSET",
        message: "Asset has no valid category tag",
        assetId: validAsset.id,
        details: { availableTags: validAsset.tags }
      }
    };
  }
  const modelToNodeStore = useModelToNodeStore();
  const provider = modelToNodeStore.getNodeProvider(category);
  if (!provider) {
    console.error(`No node provider registered for category: ${category}`);
    return {
      success: false,
      error: {
        code: "NO_PROVIDER",
        message: `No node provider registered for category: ${category}`,
        assetId: validAsset.id,
        details: { category }
      }
    };
  }
  const litegraphService = useLitegraphService();
  const pos = litegraphService.getCanvasCenter();
  const node = LiteGraph.createNode(
    provider.nodeDef.name,
    provider.nodeDef.display_name,
    { pos }
  );
  if (!node) {
    console.error(`Failed to create node for type: ${provider.nodeDef.name}`);
    return {
      success: false,
      error: {
        code: "NODE_CREATION_FAILED",
        message: `Failed to create node for type: ${provider.nodeDef.name}`,
        assetId: validAsset.id,
        details: { nodeType: provider.nodeDef.name }
      }
    };
  }
  const workflowStore = useWorkflowStore();
  const targetGraph = workflowStore.isSubgraphActive ? workflowStore.activeSubgraph : app.canvas.graph;
  if (!targetGraph) {
    console.error("No active graph available");
    return {
      success: false,
      error: {
        code: "NO_GRAPH",
        message: "No active graph available",
        assetId: validAsset.id
      }
    };
  }
  const widget = node.widgets?.find((w) => w.name === provider.key);
  if (!widget) {
    console.error(
      `Widget ${provider.key} not found on node ${provider.nodeDef.name}`
    );
    return {
      success: false,
      error: {
        code: "MISSING_WIDGET",
        message: `Widget ${provider.key} not found on node ${provider.nodeDef.name}`,
        assetId: validAsset.id,
        details: { widgetName: provider.key, nodeType: provider.nodeDef.name }
      }
    };
  }
  targetGraph.add(node);
  widget.value = filename;
  return { success: true, value: node };
}
__name(createModelNodeFromAsset, "createModelNodeFromAsset");
const ZENDESK_FIELDS = {
  /** Distribution tag (cloud vs OSS) */
  DISTRIBUTION: "tf_42243568391700",
  /** User email (anonymous requester) */
  ANONYMOUS_EMAIL: "tf_anonymous_requester_email",
  /** User email (authenticated) */
  EMAIL: "tf_40029135130388",
  /** User ID */
  USER_ID: "tf_42515251051412"
};
const SUPPORT_BASE_URL = "https://support.comfy.org/hc/en-us/requests/new";
function buildSupportUrl(params) {
  const searchParams = new URLSearchParams({
    [ZENDESK_FIELDS.DISTRIBUTION]: "oss"
  });
  if (params?.userEmail) {
    searchParams.append(ZENDESK_FIELDS.ANONYMOUS_EMAIL, params.userEmail);
    searchParams.append(ZENDESK_FIELDS.EMAIL, params.userEmail);
  }
  if (params?.userId) {
    searchParams.append(ZENDESK_FIELDS.USER_ID, params.userId);
  }
  return `${SUPPORT_BASE_URL}?${searchParams.toString()}`;
}
__name(buildSupportUrl, "buildSupportUrl");
const { isActiveSubscription, showSubscriptionDialog } = useSubscription();
const moveSelectedNodesVersionAdded = "1.22.2";
function useCoreCommands() {
  const workflowService = useWorkflowService();
  const workflowStore = useWorkflowStore();
  const dialogService = useDialogService();
  const colorPaletteStore = useColorPaletteStore();
  const firebaseAuthActions = useFirebaseAuthActions();
  const toastStore = useToastStore();
  const canvasStore = useCanvasStore();
  const executionStore = useExecutionStore();
  const bottomPanelStore = useBottomPanelStore();
  const { getSelectedNodes, toggleSelectedNodesMode } = useSelectedLiteGraphItems();
  const getTracker = /* @__PURE__ */ __name(() => workflowStore.activeWorkflow?.changeTracker, "getTracker");
  const moveSelectedNodes = /* @__PURE__ */ __name((positionUpdater) => {
    const selectedNodes = getSelectedNodes();
    if (selectedNodes.length === 0) return;
    const gridSize = useSettingStore().get("Comfy.SnapToGrid.GridSize");
    selectedNodes.forEach((node) => {
      node.pos = positionUpdater(node.pos, gridSize);
    });
    app.canvas.state.selectionChanged = true;
    app.canvas.setDirty(true, true);
  }, "moveSelectedNodes");
  const commands = [
    {
      id: "Comfy.NewBlankWorkflow",
      icon: "pi pi-plus",
      label: "New Blank Workflow",
      menubarLabel: "New",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        app.graph._nodes.length > 0;
        await workflowService.loadBlankWorkflow();
      }, "function")
    },
    {
      id: "Comfy.OpenWorkflow",
      icon: "pi pi-folder-open",
      label: "Open Workflow",
      menubarLabel: "Open",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        app.ui.loadFile();
      }, "function")
    },
    {
      id: "Comfy.LoadDefaultWorkflow",
      icon: "pi pi-code",
      label: "Load Default Workflow",
      function: /* @__PURE__ */ __name(async () => {
        app.graph._nodes.length > 0;
        await workflowService.loadDefaultWorkflow();
      }, "function")
    },
    {
      id: "Comfy.SaveWorkflow",
      icon: "pi pi-save",
      label: "Save Workflow",
      menubarLabel: "Save",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflow(workflow);
      }, "function")
    },
    {
      id: "Comfy.PublishSubgraph",
      icon: "pi pi-save",
      label: "Publish Subgraph",
      menubarLabel: "Publish",
      function: /* @__PURE__ */ __name(async () => {
        await useSubgraphStore().publishSubgraph();
      }, "function")
    },
    {
      id: "Comfy.SaveWorkflowAs",
      icon: "pi pi-save",
      label: "Save Workflow As",
      menubarLabel: "Save As",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflowAs(workflow);
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflow",
      icon: "pi pi-download",
      label: "Export Workflow",
      menubarLabel: "Export",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow", "workflow");
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflowAPI",
      icon: "pi pi-download",
      label: "Export Workflow (API Format)",
      menubarLabel: "Export (API)",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow_api", "output");
      }, "function")
    },
    {
      id: "Comfy.Undo",
      icon: "pi pi-undo",
      label: "Undo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.undo?.();
      }, "function")
    },
    {
      id: "Comfy.Redo",
      icon: "pi pi-refresh",
      label: "Redo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.redo?.();
      }, "function")
    },
    {
      id: "Comfy.ClearWorkflow",
      icon: "pi pi-trash",
      label: "Clear Workflow",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const settingStore = useSettingStore();
        if (!settingStore.get("Comfy.ConfirmClear") || confirm("Clear workflow?")) {
          app.clean();
          if (app.canvas.subgraph) {
            const subgraph = app.canvas.subgraph;
            const nonIoNodes = getAllNonIoNodesInSubgraph(subgraph);
            nonIoNodes.forEach((node) => subgraph.remove(node));
          }
          api.dispatchCustomEvent("graphCleared");
        }
      }, "function")
    },
    {
      id: "Comfy.Canvas.ResetView",
      icon: "pi pi-expand",
      label: "Reset View",
      function: /* @__PURE__ */ __name(() => {
        useLitegraphService().resetView();
      }, "function")
    },
    {
      id: "Comfy.OpenClipspace",
      icon: "pi pi-clipboard",
      label: "Clipspace",
      function: /* @__PURE__ */ __name(() => {
        app.openClipspace();
      }, "function")
    },
    {
      id: "Comfy.RefreshNodeDefinitions",
      icon: "pi pi-refresh",
      label: "Refresh Node Definitions",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await app.refreshComboInNodes();
      }, "function")
    },
    {
      id: "Comfy.Interrupt",
      icon: "pi pi-stop",
      label: "Interrupt",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await api.interrupt(executionStore.activePromptId);
        toastStore.add({
          severity: "info",
          summary: t("g.interrupted"),
          detail: t("toastMessages.interrupted"),
          life: 1e3
        });
      }, "function")
    },
    {
      id: "Comfy.ClearPendingTasks",
      icon: "pi pi-stop",
      label: "Clear Pending Tasks",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await useQueueStore().clear(["queue"]);
        toastStore.add({
          severity: "info",
          summary: t("g.confirmed"),
          detail: t("toastMessages.pendingTasksDeleted"),
          life: 3e3
        });
      }, "function")
    },
    {
      id: "Comfy.BrowseTemplates",
      icon: "pi pi-folder-open",
      label: "Browse Templates",
      function: /* @__PURE__ */ __name(() => {
        useWorkflowTemplateSelectorDialog().show();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomIn",
      icon: "pi pi-plus",
      label: "Zoom In",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale * 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomOut",
      icon: "pi pi-minus",
      label: "Zoom Out",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale / 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Experimental.ToggleVueNodes",
      label: /* @__PURE__ */ __name(() => `Experimental: ${useSettingStore().get("Comfy.VueNodes.Enabled") ? "Disable" : "Enable"} Vue Nodes`, "label"),
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        const current = settingStore.get("Comfy.VueNodes.Enabled") ?? false;
        await settingStore.set("Comfy.VueNodes.Enabled", !current);
      }, "function")
    },
    {
      id: "Comfy.Canvas.FitView",
      icon: "pi pi-expand",
      label: "Fit view to selected nodes",
      menubarLabel: "Zoom to fit",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const vueNodesEnabled = useSettingStore().get("Comfy.VueNodes.Enabled");
        if (vueNodesEnabled) {
          const canvasStore2 = useCanvasStore();
          const selectedNodeIds = canvasStore2.selectedNodeIds;
          const allNodes = layoutStore.getAllNodes().value;
          const nodesToFit = selectedNodeIds.size > 0 ? Array.from(selectedNodeIds).map((id) => allNodes.get(id)).filter((node) => node != null) : Array.from(allNodes.values());
          const bounds = selectionBounds(nodesToFit);
          if (!bounds) {
            toastStore.add({
              severity: "error",
              summary: t("toastMessages.emptyCanvas"),
              life: 3e3
            });
            return;
          }
          const lgBounds = [
            bounds.x,
            bounds.y,
            bounds.width,
            bounds.height
          ];
          const setDirty = /* @__PURE__ */ __name(() => app.canvas.setDirty(true, true), "setDirty");
          app.canvas.ds.animateToBounds(lgBounds, setDirty);
        } else {
          if (app.canvas.empty) {
            toastStore.add({
              severity: "error",
              summary: t("toastMessages.emptyCanvas"),
              life: 3e3
            });
            return;
          }
          app.canvas.fitViewToSelectionAnimated();
        }
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLock",
      icon: "pi pi-lock",
      label: "Canvas Toggle Lock",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = !app.canvas.state.readOnly;
      }, "function")
    },
    {
      id: "Comfy.Canvas.Lock",
      icon: "pi pi-lock",
      label: "Lock Canvas",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = true;
      }, "function")
    },
    {
      id: "Comfy.Canvas.Unlock",
      icon: "pi pi-lock-open",
      label: "Unlock Canvas",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = false;
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLinkVisibility",
      icon: "pi pi-eye",
      label: "Canvas Toggle Link Visibility",
      menubarLabel: "Node Links",
      versionAdded: "1.3.6",
      function: (() => {
        const settingStore = useSettingStore();
        let lastLinksRenderMode = LiteGraph.SPLINE_LINK;
        return async () => {
          const currentMode = settingStore.get("Comfy.LinkRenderMode");
          if (currentMode === LiteGraph.HIDDEN_LINK) {
            await settingStore.set("Comfy.LinkRenderMode", lastLinksRenderMode);
          } else {
            lastLinksRenderMode = currentMode;
            await settingStore.set(
              "Comfy.LinkRenderMode",
              LiteGraph.HIDDEN_LINK
            );
          }
        };
      })(),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.LinkRenderMode") !== LiteGraph.HIDDEN_LINK, "active")
    },
    {
      id: "Comfy.Canvas.ToggleMinimap",
      icon: "pi pi-map",
      label: "Canvas Toggle Minimap",
      menubarLabel: "Minimap",
      versionAdded: "1.24.1",
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        await settingStore.set(
          "Comfy.Minimap.Visible",
          !settingStore.get("Comfy.Minimap.Visible")
        );
      }, "function"),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.Minimap.Visible"), "active")
    },
    {
      id: "Comfy.QueuePrompt",
      icon: "pi pi-play",
      label: "Queue Prompt",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async (metadata) => {
        if (!isActiveSubscription.value) {
          showSubscriptionDialog();
          return;
        }
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(0, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueuePromptFront",
      icon: "pi pi-play",
      label: "Queue Prompt (Front)",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async (metadata) => {
        if (!isActiveSubscription.value) {
          showSubscriptionDialog();
          return;
        }
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(-1, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueueSelectedOutputNodes",
      icon: "pi pi-play",
      label: "Queue Selected Output Nodes",
      versionAdded: "1.19.6",
      function: /* @__PURE__ */ __name(async (metadata) => {
        if (!isActiveSubscription.value) {
          showSubscriptionDialog();
          return;
        }
        const batchCount = useQueueSettingsStore().batchCount;
        const selectedNodes = getSelectedNodes();
        const selectedOutputNodes = filterOutputNodes(selectedNodes);
        if (selectedOutputNodes.length === 0) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.nothingToQueue"),
            detail: t("toastMessages.pleaseSelectOutputNodes"),
            life: 3e3
          });
          return;
        }
        const executionIds = getExecutionIdsForSelectedNodes(selectedOutputNodes);
        if (executionIds.length === 0) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.failedToQueue"),
            detail: t("toastMessages.failedExecutionPathResolution"),
            life: 3e3
          });
          return;
        }
        await app.queuePrompt(0, batchCount, executionIds);
      }, "function")
    },
    {
      id: "Comfy.ShowSettingsDialog",
      icon: "pi pi-cog",
      label: "Show Settings Dialog",
      versionAdded: "1.3.7",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog();
      }, "function")
    },
    {
      id: "Comfy.Graph.GroupSelectedNodes",
      icon: "pi pi-sitemap",
      label: "Group Selected Nodes",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const { canvas } = app;
        if (!canvas.selectedItems?.size) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.nothingToGroup"),
            detail: t("toastMessages.pleaseSelectNodesToGroup"),
            life: 3e3
          });
          return;
        }
        const group = new LGraphGroup();
        const padding = useSettingStore().get(
          "Comfy.GroupSelectedNodes.Padding"
        );
        group.resizeTo(canvas.selectedItems, padding);
        canvas.graph?.add(group);
        group.recomputeInsideNodes();
        useTitleEditorStore().titleEditorTarget = group;
      }, "function")
    },
    {
      id: "Workspace.NextOpenedWorkflow",
      icon: "pi pi-step-forward",
      label: "Next Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadNextOpenedWorkflow();
      }, "function")
    },
    {
      id: "Workspace.PreviousOpenedWorkflow",
      icon: "pi pi-step-backward",
      label: "Previous Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadPreviousOpenedWorkflow();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Mute",
      icon: "pi pi-volume-off",
      label: "Mute/Unmute Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.NEVER);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
      icon: "pi pi-shield",
      label: "Bypass/Unbypass Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.BYPASS);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.pin(!node.pinned);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelected.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Items",
      versionAdded: "1.3.33",
      function: /* @__PURE__ */ __name(() => {
        for (const item of app.canvas.selectedItems) {
          if (item instanceof LGraphNode || item instanceof LGraphGroup) {
            item.pin(!item.pinned);
          }
        }
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.Resize",
      icon: "pi pi-minus",
      label: "Resize Selected Nodes",
      versionAdded: "",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          const optimalSize = node.computeSize();
          node.setSize([optimalSize[0], optimalSize[1]]);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
      icon: "pi pi-minus",
      label: "Collapse/Expand Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.collapse();
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.ToggleTheme",
      icon: "pi pi-moon",
      label: "Toggle Theme (Dark/Light)",
      versionAdded: "1.3.12",
      function: (() => {
        let previousDarkTheme = DEFAULT_DARK_COLOR_PALETTE.id;
        let previousLightTheme = DEFAULT_LIGHT_COLOR_PALETTE.id;
        return async () => {
          const settingStore = useSettingStore();
          const theme = colorPaletteStore.completedActivePalette;
          if (theme.light_theme) {
            previousLightTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousDarkTheme);
          } else {
            previousDarkTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousLightTheme);
          }
        };
      })()
    },
    {
      id: "Workspace.ToggleBottomPanel",
      icon: "pi pi-list",
      label: "Toggle Bottom Panel",
      menubarLabel: "Bottom Panel",
      versionAdded: "1.3.22",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.toggleBottomPanel();
      }, "function"),
      active: /* @__PURE__ */ __name(() => bottomPanelStore.bottomPanelVisible, "active")
    },
    {
      id: "Workspace.ToggleFocusMode",
      icon: "pi pi-eye",
      label: "Toggle Focus Mode",
      menubarLabel: "Focus Mode",
      versionAdded: "1.3.27",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        useWorkspaceStore().toggleFocusMode();
      }, "function"),
      active: /* @__PURE__ */ __name(() => useWorkspaceStore().focusMode, "active")
    },
    {
      id: "Comfy.Graph.FitGroupToContents",
      icon: "pi pi-expand",
      label: "Fit Group To Contents",
      versionAdded: "1.4.9",
      function: /* @__PURE__ */ __name(() => {
        for (const group of app.canvas.selectedItems) {
          if (group instanceof LGraphGroup) {
            group.recomputeInsideNodes();
            const padding = useSettingStore().get(
              "Comfy.GroupSelectedNodes.Padding"
            );
            group.resizeTo(group.children, padding);
            app.graph.change();
          }
        }
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIIssues",
      icon: "pi pi-github",
      label: "Open ComfyUI Issues",
      menubarLabel: "ComfyUI Issues",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open(
          "https://github.com/comfyanonymous/ComfyUI/issues",
          "_blank"
        );
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIDocs",
      icon: "pi pi-info-circle",
      label: "Open ComfyUI Docs",
      menubarLabel: "ComfyUI Docs",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://docs.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyOrgDiscord",
      icon: "pi pi-discord",
      label: "Open Comfy-Org Discord",
      menubarLabel: "Comfy-Org Discord",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://www.comfy.org/discord", "_blank");
      }, "function")
    },
    {
      id: "Workspace.SearchBox.Toggle",
      icon: "pi pi-search",
      label: "Toggle Search Box",
      versionAdded: "1.5.7",
      function: /* @__PURE__ */ __name(() => {
        useSearchBoxStore().toggleVisible();
      }, "function")
    },
    {
      id: "Comfy.Help.AboutComfyUI",
      icon: "pi pi-info-circle",
      label: "Open About ComfyUI",
      menubarLabel: "About ComfyUI",
      versionAdded: "1.6.4",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog("about");
      }, "function")
    },
    {
      id: "Comfy.DuplicateWorkflow",
      icon: "pi pi-clone",
      label: "Duplicate Current Workflow",
      versionAdded: "1.6.15",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Workspace.CloseWorkflow",
      icon: "pi pi-times",
      label: "Close Current Workflow",
      versionAdded: "1.7.3",
      function: /* @__PURE__ */ __name(async () => {
        if (workflowStore.activeWorkflow)
          await workflowService.closeWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Comfy.ContactSupport",
      icon: "pi pi-question",
      label: "Contact Support",
      versionAdded: "1.17.8",
      function: /* @__PURE__ */ __name(() => {
        const { userEmail, resolvedUserInfo } = useCurrentUser();
        const supportUrl = buildSupportUrl({
          userEmail: userEmail.value,
          userId: resolvedUserInfo.value?.id
        });
        window.open(supportUrl, "_blank");
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIForum",
      icon: "pi pi-comments",
      label: "Open ComfyUI Forum",
      menubarLabel: "ComfyUI Forum",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://forum.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Canvas.DeleteSelectedItems",
      icon: "pi pi-trash",
      label: "Delete Selected Items",
      versionAdded: "1.10.5",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.deleteSelected();
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu",
      icon: "pi pi-puzzle",
      label: "Custom Nodes Manager",
      versionAdded: "1.12.10",
      function: /* @__PURE__ */ __name(async () => {
        await useManagerState().openManager({
          showToastOnLegacyError: true
        });
      }, "function")
    },
    {
      id: "Comfy.Manager.ShowUpdateAvailablePacks",
      icon: "pi pi-sync",
      label: "Check for Custom Node Updates",
      versionAdded: "1.17.0",
      function: /* @__PURE__ */ __name(async () => {
        const managerState = useManagerState();
        const state = managerState.managerUIState.value;
        if (state === ManagerUIState.DISABLED) {
          toastStore.add({
            severity: "error",
            summary: t("g.error"),
            detail: t("manager.notAvailable"),
            life: 3e3
          });
          return;
        }
        await managerState.openManager({
          initialTab: ManagerTab.UpdateAvailable,
          showToastOnLegacyError: false
        });
      }, "function")
    },
    {
      id: "Comfy.Manager.ShowMissingPacks",
      icon: "pi pi-exclamation-circle",
      label: "Install Missing Custom Nodes",
      versionAdded: "1.17.0",
      function: /* @__PURE__ */ __name(async () => {
        await useManagerState().openManager({
          initialTab: ManagerTab.Missing,
          showToastOnLegacyError: false
        });
      }, "function")
    },
    {
      id: "Comfy.Manager.ToggleManagerProgressDialog",
      icon: "pi pi-spinner",
      label: "Toggle the Custom Nodes Manager Progress Bar",
      versionAdded: "1.13.9",
      function: /* @__PURE__ */ __name(() => {
        dialogService.toggleManagerProgressDialog();
      }, "function")
    },
    {
      id: "Comfy.User.OpenSignInDialog",
      icon: "pi pi-user",
      label: "Open Sign In Dialog",
      versionAdded: "1.17.6",
      function: /* @__PURE__ */ __name(async () => {
        await dialogService.showSignInDialog();
      }, "function")
    },
    {
      id: "Comfy.User.SignOut",
      icon: "pi pi-sign-out",
      label: "Sign Out",
      versionAdded: "1.18.1",
      function: /* @__PURE__ */ __name(async () => {
        await firebaseAuthActions.logout();
      }, "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Up",
      icon: "pi pi-arrow-up",
      label: "Move Selected Nodes Up",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y - gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Down",
      icon: "pi pi-arrow-down",
      label: "Move Selected Nodes Down",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y + gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Left",
      icon: "pi pi-arrow-left",
      label: "Move Selected Nodes Left",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x - gridSize, y]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Right",
      icon: "pi pi-arrow-right",
      label: "Move Selected Nodes Right",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x + gridSize, y]), "function")
    },
    {
      id: "Comfy.Graph.ConvertToSubgraph",
      icon: "icon-[lucide--shrink]",
      label: "Convert Selection to Subgraph",
      versionAdded: "1.20.1",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const canvas = canvasStore.getCanvas();
        const graph = canvas.subgraph ?? canvas.graph;
        if (!graph) throw new TypeError("Canvas has no graph or subgraph set.");
        const res = graph.convertToSubgraph(canvas.selectedItems);
        if (!res) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.cannotCreateSubgraph"),
            detail: t("toastMessages.failedToConvertToSubgraph"),
            life: 3e3
          });
          return;
        }
        const { node } = res;
        canvas.select(node);
        canvasStore.updateSelectedItems();
      }, "function")
    },
    {
      id: "Comfy.Graph.UnpackSubgraph",
      icon: "icon-[lucide--expand]",
      label: "Unpack the selected Subgraph",
      versionAdded: "1.26.3",
      function: /* @__PURE__ */ __name(() => {
        const canvas = canvasStore.getCanvas();
        const graph = canvas.subgraph ?? canvas.graph;
        if (!graph) throw new TypeError("Canvas has no graph or subgraph set.");
        const subgraphNode = app.canvas.selectedItems.values().next().value;
        if (!(subgraphNode instanceof SubgraphNode)) return;
        useNodeOutputStore().revokeSubgraphPreviews(subgraphNode);
        graph.unpackSubgraph(subgraphNode);
      }, "function")
    },
    {
      id: "Comfy.Graph.EditSubgraphWidgets",
      label: "Edit Subgraph Widgets",
      icon: "icon-[lucide--settings-2]",
      versionAdded: "1.28.5",
      function: showSubgraphNodeDialog
    },
    {
      id: "Comfy.Graph.ToggleWidgetPromotion",
      icon: "icon-[lucide--arrow-left-right]",
      label: "Toggle promotion of hovered widget",
      versionAdded: "1.30.1",
      function: tryToggleWidgetPromotion
    },
    {
      id: "Comfy.OpenManagerDialog",
      icon: "mdi mdi-puzzle-outline",
      label: "Manager",
      function: /* @__PURE__ */ __name(async () => {
        await useManagerState().openManager({
          initialTab: ManagerTab.All,
          showToastOnLegacyError: false
        });
      }, "function")
    },
    {
      id: "Comfy.ToggleHelpCenter",
      icon: "pi pi-question-circle",
      label: "Help Center",
      function: /* @__PURE__ */ __name(() => {
        useHelpCenterStore().toggle();
      }, "function"),
      active: /* @__PURE__ */ __name(() => useHelpCenterStore().isVisible, "active")
    },
    {
      id: "Comfy.ToggleCanvasInfo",
      icon: "pi pi-info-circle",
      label: "Canvas Performance",
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        const currentValue = settingStore.get("Comfy.Graph.CanvasInfo");
        await settingStore.set("Comfy.Graph.CanvasInfo", !currentValue);
      }, "function"),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.Graph.CanvasInfo"), "active")
    },
    {
      id: "Workspace.ToggleBottomPanel.Shortcuts",
      icon: "pi pi-key",
      label: "Show Keybindings Dialog",
      versionAdded: "1.24.1",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.togglePanel("shortcuts");
      }, "function")
    },
    {
      id: "Comfy.Graph.ExitSubgraph",
      icon: "pi pi-arrow-up",
      label: "Exit Subgraph",
      versionAdded: "1.20.1",
      function: /* @__PURE__ */ __name(() => {
        const canvas = useCanvasStore().getCanvas();
        const navigationStore = useSubgraphNavigationStore();
        if (!canvas.graph) return;
        canvas.setGraph(
          navigationStore.navigationStack.at(-2) ?? canvas.graph.rootGraph
        );
      }, "function")
    },
    {
      id: "Comfy.Dev.ShowModelSelector",
      icon: "pi pi-box",
      label: "Show Model Selector (Dev)",
      versionAdded: "1.26.2",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const modelSelectorDialog = useModelSelectorDialog();
        modelSelectorDialog.show();
      }, "function")
    },
    {
      id: "Comfy.Manager.CustomNodesManager.ShowLegacyCustomNodesMenu",
      icon: "pi pi-bars",
      label: "Custom Nodes (Legacy)",
      versionAdded: "1.16.4",
      function: /* @__PURE__ */ __name(async () => {
        await useManagerState().openManager({
          legacyCommand: "Comfy.Manager.CustomNodesManager.ToggleVisibility",
          showToastOnLegacyError: true,
          isLegacyOnly: true
        });
      }, "function")
    },
    {
      id: "Comfy.Manager.ShowLegacyManagerMenu",
      icon: "mdi mdi-puzzle",
      label: "Manager Menu (Legacy)",
      versionAdded: "1.16.4",
      function: /* @__PURE__ */ __name(async () => {
        await useManagerState().openManager({
          showToastOnLegacyError: true,
          isLegacyOnly: true
        });
      }, "function")
    },
    {
      id: "Comfy.Memory.UnloadModels",
      icon: "mdi mdi-vacuum-outline",
      label: "Unload Models",
      versionAdded: "1.16.4",
      function: /* @__PURE__ */ __name(async () => {
        if (!useSettingStore().get("Comfy.Memory.AllowManualUnload")) {
          useToastStore().add({
            severity: "error",
            summary: t("g.error"),
            detail: t("g.commandProhibited", {
              command: "Comfy.Memory.UnloadModels"
            }),
            life: 3e3
          });
          return;
        }
        await api.freeMemory({ freeExecutionCache: false });
      }, "function")
    },
    {
      id: "Comfy.Memory.UnloadModelsAndExecutionCache",
      icon: "mdi mdi-vacuum-outline",
      label: "Unload Models and Execution Cache",
      versionAdded: "1.16.4",
      function: /* @__PURE__ */ __name(async () => {
        if (!useSettingStore().get("Comfy.Memory.AllowManualUnload")) {
          useToastStore().add({
            severity: "error",
            summary: t("g.error"),
            detail: t("g.commandProhibited", {
              command: "Comfy.Memory.UnloadModelsAndExecutionCache"
            }),
            life: 3e3
          });
          return;
        }
        await api.freeMemory({ freeExecutionCache: true });
      }, "function")
    },
    {
      id: "Comfy.BrowseModelAssets",
      icon: "pi pi-folder-open",
      label: "Experimental: Browse Model Assets",
      versionAdded: "1.28.3",
      function: /* @__PURE__ */ __name(async () => {
        if (!useSettingStore().get("Comfy.Assets.UseAssetAPI")) {
          const confirmed = await dialogService.confirm({
            title: "Enable Asset API",
            message: "The Asset API is currently disabled. Would you like to enable it?",
            type: "default"
          });
          if (!confirmed) return;
          const settingStore = useSettingStore();
          await settingStore.set("Comfy.Assets.UseAssetAPI", true);
          await workflowService.reloadCurrentWorkflow();
        }
        const assetBrowserDialog = useAssetBrowserDialog();
        await assetBrowserDialog.browse({
          assetType: "models",
          title: t("sideToolbar.modelLibrary"),
          onAssetSelected: /* @__PURE__ */ __name((asset) => {
            const result = createModelNodeFromAsset(asset);
            if (!result.success) {
              toastStore.add({
                severity: "error",
                summary: t("g.error"),
                detail: t("assetBrowser.failedToCreateNode")
              });
              console.error("Node creation failed:", result.error);
            }
          }, "onAssetSelected")
        });
      }, "function")
    },
    {
      id: "Comfy.ToggleAssetAPI",
      icon: "pi pi-database",
      label: /* @__PURE__ */ __name(() => `Experimental: ${useSettingStore().get("Comfy.Assets.UseAssetAPI") ? "Disable" : "Enable"} AssetAPI`, "label"),
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        const current = settingStore.get("Comfy.Assets.UseAssetAPI") ?? false;
        await settingStore.set("Comfy.Assets.UseAssetAPI", !current);
        await useWorkflowService().reloadCurrentWorkflow();
      }, "function")
    }
  ];
  return commands.map((command) => ({ ...command, source: "System" }));
}
__name(useCoreCommands, "useCoreCommands");
const useProgressFavicon = /* @__PURE__ */ __name(() => {
  const defaultFavicon = "/assets/images/favicon_progress_16x16/frame_9.png";
  const favicon = useFavicon(defaultFavicon);
  const executionStore = useExecutionStore();
  const totalFrames = 10;
  watch(
    [() => executionStore.executionProgress, () => executionStore.isIdle],
    ([progress, isIdle]) => {
      if (isIdle) {
        favicon.value = defaultFavicon;
      } else {
        const frame = Math.min(
          Math.max(0, Math.floor(progress * totalFrames)),
          totalFrames - 1
        );
        favicon.value = `/assets/images/favicon_progress_16x16/frame_${frame}.png`;
      }
    }
  );
}, "useProgressFavicon");
var LatentPreviewMethod = /* @__PURE__ */ ((LatentPreviewMethod2) => {
  LatentPreviewMethod2["NoPreviews"] = "none";
  LatentPreviewMethod2["Auto"] = "auto";
  LatentPreviewMethod2["Latent2RGB"] = "latent2rgb";
  LatentPreviewMethod2["TAESD"] = "taesd";
  return LatentPreviewMethod2;
})(LatentPreviewMethod || {});
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["DEBUG"] = "DEBUG";
  LogLevel2["INFO"] = "INFO";
  LogLevel2["WARNING"] = "WARNING";
  LogLevel2["ERROR"] = "ERROR";
  LogLevel2["CRITICAL"] = "CRITICAL";
  return LogLevel2;
})(LogLevel || {});
var HashFunction = /* @__PURE__ */ ((HashFunction2) => {
  HashFunction2["MD5"] = "md5";
  HashFunction2["SHA1"] = "sha1";
  HashFunction2["SHA256"] = "sha256";
  HashFunction2["SHA512"] = "sha512";
  return HashFunction2;
})(HashFunction || {});
var CudaMalloc = /* @__PURE__ */ ((CudaMalloc2) => {
  CudaMalloc2["Auto"] = "auto";
  CudaMalloc2["Disable"] = "disable";
  CudaMalloc2["Enable"] = "enable";
  return CudaMalloc2;
})(CudaMalloc || {});
var FloatingPointPrecision = /* @__PURE__ */ ((FloatingPointPrecision2) => {
  FloatingPointPrecision2["AUTO"] = "auto";
  FloatingPointPrecision2["FP64"] = "fp64";
  FloatingPointPrecision2["FP32"] = "fp32";
  FloatingPointPrecision2["FP16"] = "fp16";
  FloatingPointPrecision2["BF16"] = "bf16";
  FloatingPointPrecision2["FP8E4M3FN"] = "fp8_e4m3fn";
  FloatingPointPrecision2["FP8E5M2"] = "fp8_e5m2";
  return FloatingPointPrecision2;
})(FloatingPointPrecision || {});
var CrossAttentionMethod = /* @__PURE__ */ ((CrossAttentionMethod2) => {
  CrossAttentionMethod2["Auto"] = "auto";
  CrossAttentionMethod2["Split"] = "split";
  CrossAttentionMethod2["Quad"] = "quad";
  CrossAttentionMethod2["Pytorch"] = "pytorch";
  return CrossAttentionMethod2;
})(CrossAttentionMethod || {});
var VramManagement = /* @__PURE__ */ ((VramManagement2) => {
  VramManagement2["Auto"] = "auto";
  VramManagement2["GPUOnly"] = "gpu-only";
  VramManagement2["HighVram"] = "highvram";
  VramManagement2["NormalVram"] = "normalvram";
  VramManagement2["LowVram"] = "lowvram";
  VramManagement2["NoVram"] = "novram";
  VramManagement2["CPU"] = "cpu";
  return VramManagement2;
})(VramManagement || {});
const SERVER_CONFIG_ITEMS = [
  // Network settings
  {
    id: "listen",
    name: "Host: The IP address to listen on",
    category: ["Network"],
    type: "text",
    defaultValue: "127.0.0.1"
  },
  {
    id: "port",
    name: "Port: The port to listen on",
    category: ["Network"],
    type: "number",
    // The default launch port for desktop app is 8000 instead of 8188.
    defaultValue: 8e3
  },
  {
    id: "tls-keyfile",
    name: "TLS Key File: Path to TLS key file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "tls-certfile",
    name: "TLS Certificate File: Path to TLS certificate file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "enable-cors-header",
    name: 'Enable CORS header: Use "*" for all origins or specify domain',
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "max-upload-size",
    name: "Maximum upload size (MB)",
    category: ["Network"],
    type: "number",
    defaultValue: 100
  },
  // CUDA settings
  {
    id: "cuda-device",
    name: "CUDA device index to use",
    category: ["CUDA"],
    type: "number",
    defaultValue: null
  },
  {
    id: "cuda-malloc",
    name: "Use CUDA malloc for memory allocation",
    category: ["CUDA"],
    type: "combo",
    options: Object.values(CudaMalloc),
    defaultValue: CudaMalloc.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CudaMalloc.Auto:
          return {};
        case CudaMalloc.Enable:
          return {
            ["cuda-malloc"]: true
          };
        case CudaMalloc.Disable:
          return {
            ["disable-cuda-malloc"]: true
          };
      }
    }, "getValue")
  },
  // Precision settings
  {
    id: "global-precision",
    name: "Global floating point precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Global floating point precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        case FloatingPointPrecision.FP32:
          return {
            ["force-fp32"]: true
          };
        case FloatingPointPrecision.FP16:
          return {
            ["force-fp16"]: true
          };
        default:
          return {};
      }
    }, "getValue")
  },
  // UNET precision
  {
    id: "unet-precision",
    name: "UNET precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP64,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.BF16,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "UNET precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-unet`]: true
          };
      }
    }, "getValue")
  },
  // VAE settings
  {
    id: "vae-precision",
    name: "VAE precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.BF16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "VAE precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-vae`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "cpu-vae",
    name: "Run VAE on CPU",
    category: ["Inference"],
    type: "boolean",
    defaultValue: false
  },
  // Text Encoder settings
  {
    id: "text-encoder-precision",
    name: "Text Encoder precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Text Encoder precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-text-enc`]: true
          };
      }
    }, "getValue")
  },
  // Memory and performance settings
  {
    id: "force-channels-last",
    name: "Force channels-last memory format",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "directml",
    name: "DirectML device index",
    category: ["Memory"],
    type: "number",
    defaultValue: null
  },
  {
    id: "disable-ipex-optimize",
    name: "Disable IPEX optimization",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  // Preview settings
  {
    id: "preview-method",
    name: "Method used for latent previews",
    category: ["Preview"],
    type: "combo",
    options: Object.values(LatentPreviewMethod),
    defaultValue: LatentPreviewMethod.NoPreviews
  },
  {
    id: "preview-size",
    name: "Size of preview images",
    category: ["Preview"],
    type: "slider",
    defaultValue: 512,
    attrs: {
      min: 128,
      max: 2048,
      step: 128
    }
  },
  // Cache settings
  {
    id: "cache-classic",
    name: "Use classic cache system",
    category: ["Cache"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "cache-lru",
    name: "Use LRU caching with a maximum of N node results cached.",
    category: ["Cache"],
    type: "number",
    defaultValue: null,
    tooltip: "May use more RAM/VRAM."
  },
  // Attention settings
  {
    id: "cross-attention-method",
    name: "Cross attention method",
    category: ["Attention"],
    type: "combo",
    options: Object.values(CrossAttentionMethod),
    defaultValue: CrossAttentionMethod.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CrossAttentionMethod.Auto:
          return {};
        default:
          return {
            [`use-${value.toLowerCase()}-cross-attention`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "disable-xformers",
    name: "Disable xFormers optimization",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "force-upcast-attention",
    name: "Force attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-upcast-attention",
    name: "Prevent attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  // VRAM management
  {
    id: "vram-management",
    name: "VRAM management mode",
    category: ["Memory"],
    type: "combo",
    options: Object.values(VramManagement),
    defaultValue: VramManagement.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case VramManagement.Auto:
          return {};
        default:
          return {
            [value]: true
          };
      }
    }, "getValue")
  },
  {
    id: "reserve-vram",
    name: "Reserved VRAM (GB)",
    category: ["Memory"],
    type: "number",
    defaultValue: null,
    tooltip: "Set the amount of vram in GB you want to reserve for use by your OS/other software. By default some amount is reserved depending on your OS."
  },
  // Misc settings
  {
    id: "default-hashing-function",
    name: "Default hashing function for model files",
    type: "combo",
    options: Object.values(HashFunction),
    defaultValue: HashFunction.SHA256
  },
  {
    id: "disable-smart-memory",
    name: "Disable smart memory management",
    tooltip: "Force ComfyUI to aggressively offload to regular ram instead of keeping models in vram when it can.",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "deterministic",
    name: "Make pytorch use slower deterministic algorithms when it can.",
    type: "boolean",
    defaultValue: false,
    tooltip: "Note that this might not make images deterministic in all cases."
  },
  {
    id: "fast",
    name: "Enable some untested and potentially quality deteriorating optimizations.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-print-server",
    name: "Don't print server output to console.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-metadata",
    name: "Disable saving prompt metadata in files.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-all-custom-nodes",
    name: "Disable loading all custom nodes.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "log-level",
    name: "Logging verbosity level",
    type: "combo",
    options: Object.values(LogLevel),
    defaultValue: LogLevel.INFO,
    getValue: /* @__PURE__ */ __name((value) => {
      return {
        verbose: value
      };
    }, "getValue")
  },
  // Directories
  {
    id: "input-directory",
    name: "Input directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "output-directory",
    name: "Output directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  }
];
const DISMISSAL_DURATION_MS = 7 * 24 * 60 * 60 * 1e3;
const useVersionCompatibilityStore = defineStore(
  "versionCompatibility",
  () => {
    const systemStatsStore = useSystemStatsStore();
    const frontendVersion = computed(() => config.app_version);
    const backendVersion = computed(
      () => systemStatsStore.systemStats?.system?.comfyui_version ?? ""
    );
    const requiredFrontendVersion = computed(
      () => systemStatsStore.systemStats?.system?.required_frontend_version ?? ""
    );
    const isFrontendOutdated = computed(() => {
      if (!frontendVersion.value || !requiredFrontendVersion.value || !semver.valid(frontendVersion.value) || !semver.valid(requiredFrontendVersion.value)) {
        return false;
      }
      return semver.gt(requiredFrontendVersion.value, frontendVersion.value);
    });
    const isFrontendNewer = computed(() => {
      return false;
    });
    const hasVersionMismatch = computed(() => {
      return isFrontendOutdated.value;
    });
    const versionKey = computed(() => {
      if (!frontendVersion.value || !backendVersion.value || !requiredFrontendVersion.value) {
        return null;
      }
      return `${frontendVersion.value}-${backendVersion.value}-${requiredFrontendVersion.value}`;
    });
    const dismissalStorage = useStorage(
      "comfy.versionMismatch.dismissals",
      {},
      localStorage,
      {
        serializer: {
          read: /* @__PURE__ */ __name((value) => {
            try {
              return JSON.parse(value);
            } catch {
              return {};
            }
          }, "read"),
          write: /* @__PURE__ */ __name((value) => JSON.stringify(value), "write")
        }
      }
    );
    const isDismissed = computed(() => {
      if (!versionKey.value) return false;
      const dismissedUntil = dismissalStorage.value[versionKey.value];
      if (!dismissedUntil) return false;
      return Date.now() < dismissedUntil;
    });
    const shouldShowWarning = computed(() => {
      return hasVersionMismatch.value && !isDismissed.value;
    });
    const warningMessage = computed(() => {
      if (isFrontendOutdated.value) {
        return {
          type: "outdated",
          frontendVersion: frontendVersion.value,
          requiredVersion: requiredFrontendVersion.value
        };
      }
      return null;
    });
    async function checkVersionCompatibility() {
      if (!systemStatsStore.systemStats) {
        await until(systemStatsStore.isInitialized);
      }
    }
    __name(checkVersionCompatibility, "checkVersionCompatibility");
    function dismissWarning() {
      if (!versionKey.value) return;
      const dismissUntil = Date.now() + DISMISSAL_DURATION_MS;
      dismissalStorage.value = {
        ...dismissalStorage.value,
        [versionKey.value]: dismissUntil
      };
    }
    __name(dismissWarning, "dismissWarning");
    async function initialize() {
      await checkVersionCompatibility();
    }
    __name(initialize, "initialize");
    return {
      frontendVersion,
      backendVersion,
      requiredFrontendVersion,
      hasVersionMismatch,
      shouldShowWarning,
      warningMessage,
      isFrontendOutdated,
      isFrontendNewer,
      checkVersionCompatibility,
      dismissWarning,
      initialize
    };
  }
);
function useFrontendVersionMismatchWarning(options = {}) {
  const { immediate = false } = options;
  const { t: t2 } = useI18n();
  const toastStore = useToastStore();
  const versionCompatibilityStore = useVersionCompatibilityStore();
  let hasShownWarning = false;
  const showWarning = /* @__PURE__ */ __name(() => {
    if (hasShownWarning) return;
    const message = versionCompatibilityStore.warningMessage;
    if (!message) return;
    const detailMessage = t2("g.frontendOutdated", {
      frontendVersion: message.frontendVersion,
      requiredVersion: message.requiredVersion
    });
    const fullMessage = t2("g.versionMismatchWarningMessage", {
      warning: t2("g.versionMismatchWarning"),
      detail: detailMessage
    });
    toastStore.addAlert(fullMessage);
    hasShownWarning = true;
    versionCompatibilityStore.dismissWarning();
  }, "showWarning");
  onMounted(() => {
    if (immediate) {
      whenever(
        () => versionCompatibilityStore.shouldShowWarning,
        () => {
          showWarning();
        },
        {
          immediate: true,
          once: true
        }
      );
    }
  });
  return {
    showWarning,
    shouldShowWarning: computed(
      () => versionCompatibilityStore.shouldShowWarning
    ),
    dismissWarning: versionCompatibilityStore.dismissWarning,
    hasVersionMismatch: computed(
      () => versionCompatibilityStore.hasVersionMismatch
    )
  };
}
__name(useFrontendVersionMismatchWarning, "useFrontendVersionMismatchWarning");
function useTemplateUrlLoader() {
  const route = useRoute();
  const { t: t2 } = useI18n();
  const toast = useToast$1();
  const templateWorkflows = useTemplateWorkflows();
  const isValidParameter = /* @__PURE__ */ __name((param) => {
    return /^[a-zA-Z0-9_-]+$/.test(param);
  }, "isValidParameter");
  const loadTemplateFromUrl = /* @__PURE__ */ __name(async () => {
    const templateParam = route.query.template;
    if (!templateParam || typeof templateParam !== "string") {
      return;
    }
    if (!isValidParameter(templateParam)) {
      console.warn(
        `[useTemplateUrlLoader] Invalid template parameter format: ${templateParam}`
      );
      return;
    }
    const sourceParam = route.query.source || "default";
    if (!isValidParameter(sourceParam)) {
      console.warn(
        `[useTemplateUrlLoader] Invalid source parameter format: ${sourceParam}`
      );
      return;
    }
    try {
      await templateWorkflows.loadTemplates();
      const success = await templateWorkflows.loadWorkflowTemplate(
        templateParam,
        sourceParam
      );
      if (!success) {
        toast.add({
          severity: "error",
          summary: t2("g.error"),
          detail: t2("templateWorkflows.error.templateNotFound", {
            templateName: templateParam
          }),
          life: 3e3
        });
      }
    } catch (error) {
      console.error(
        "[useTemplateUrlLoader] Failed to load template from URL:",
        error
      );
      toast.add({
        severity: "error",
        summary: t2("g.error"),
        detail: t2("g.errorLoadingTemplate"),
        life: 3e3
      });
    }
  }, "loadTemplateFromUrl");
  return {
    loadTemplateFromUrl
  };
}
__name(useTemplateUrlLoader, "useTemplateUrlLoader");
function setupAutoQueueHandler() {
  const queueCountStore = useQueuePendingTaskCountStore();
  const queueSettingsStore = useQueueSettingsStore();
  let graphHasChanged = false;
  let internalCount = 0;
  api.addEventListener("graphChanged", () => {
    if (queueSettingsStore.mode === "change") {
      if (internalCount) {
        graphHasChanged = true;
      } else {
        graphHasChanged = false;
        void app.queuePrompt(0, queueSettingsStore.batchCount);
        internalCount++;
      }
    }
  });
  queueCountStore.$subscribe(
    async () => {
      internalCount = queueCountStore.count;
      if (!internalCount && !app.lastExecutionError) {
        if (queueSettingsStore.mode === "instant" || queueSettingsStore.mode === "change" && graphHasChanged) {
          graphHasChanged = false;
          await app.queuePrompt(0, queueSettingsStore.batchCount);
        }
      }
    },
    { detached: true }
  );
}
__name(setupAutoQueueHandler, "setupAutoQueueHandler");
const _hoisted_1 = { class: "comfyui-body grid h-full w-full overflow-hidden" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GraphView",
  setup(__props) {
    setupAutoQueueHandler();
    useProgressFavicon();
    useBrowserTabTitle();
    const { loadTemplateFromUrl } = useTemplateUrlLoader();
    const { t: t2 } = useI18n();
    const toast = useToast$1();
    const settingStore = useSettingStore();
    const executionStore = useExecutionStore();
    const colorPaletteStore = useColorPaletteStore();
    const queueStore = useQueueStore();
    const assetsStore = useAssetsStore();
    const versionCompatibilityStore = useVersionCompatibilityStore();
    const graphCanvasContainerRef = ref(null);
    useFirebaseAuthStore();
    watch(
      () => colorPaletteStore.completedActivePalette,
      (newTheme) => {
        const DARK_THEME_CLASS = "dark-theme";
        if (newTheme.light_theme) {
          document.body.classList.remove(DARK_THEME_CLASS);
        } else {
          document.body.classList.add(DARK_THEME_CLASS);
        }
        if (isElectron()) {
          electronAPI().changeTheme({
            color: "rgba(0, 0, 0, 0)",
            symbolColor: newTheme.colors.comfy_base["input-text"]
          });
        }
      },
      { immediate: true }
    );
    if (isElectron()) {
      watch(
        () => queueStore.tasks,
        (newTasks, oldTasks) => {
          const oldRunningTaskIds = new Set(
            oldTasks.filter((task) => task.isRunning).map((task) => task.promptId)
          );
          newTasks.filter(
            (task) => oldRunningTaskIds.has(task.promptId) && task.isHistory
          ).forEach((task) => {
            electronAPI().Events.incrementUserProperty(
              `execution:${task.displayStatus.toLowerCase()}`,
              1
            );
            electronAPI().Events.trackEvent("execution", {
              status: task.displayStatus.toLowerCase()
            });
          });
        },
        { deep: true }
      );
    }
    watchEffect(() => {
      const fontSize = settingStore.get("Comfy.TextareaWidget.FontSize");
      document.documentElement.style.setProperty(
        "--comfy-textarea-font-size",
        `${fontSize}px`
      );
    });
    watchEffect(() => {
      const padding = settingStore.get("Comfy.TreeExplorer.ItemPadding");
      document.documentElement.style.setProperty(
        "--comfy-tree-explorer-item-padding",
        `${padding}px`
      );
    });
    watchEffect(async () => {
      const locale = settingStore.get("Comfy.Locale");
      if (locale) {
        try {
          await loadLocale(locale);
          i18n.global.locale.value = locale;
        } catch (error) {
          console.error(`Failed to switch to locale "${locale}":`, error);
        }
      }
    });
    const useNewMenu = computed(() => {
      return settingStore.get("Comfy.UseNewMenu");
    });
    watchEffect(() => {
      if (useNewMenu.value === "Disabled") {
        app.ui.menuContainer.style.setProperty("display", "block");
        app.ui.restoreMenuPosition();
      } else {
        app.ui.menuContainer.style.setProperty("display", "none");
      }
    });
    watchEffect(() => {
      queueStore.maxHistoryItems = settingStore.get("Comfy.Queue.MaxHistoryItems");
    });
    const init = /* @__PURE__ */ __name(() => {
      const coreCommands = useCoreCommands();
      useCommandStore().registerCommands(coreCommands);
      useMenuItemStore().registerCoreMenuCommands();
      useKeybindingService().registerCoreKeybindings();
      useSidebarTabStore().registerCoreSidebarTabs();
      useBottomPanelStore().registerCoreBottomPanelTabs();
      app.extensionManager = useWorkspaceStore();
    }, "init");
    const queuePendingTaskCountStore = useQueuePendingTaskCountStore();
    const onStatus = /* @__PURE__ */ __name(async (e) => {
      queuePendingTaskCountStore.update(e);
      await Promise.all([
        queueStore.update(),
        assetsStore.updateHistory()
        // Update history assets when status changes
      ]);
    }, "onStatus");
    const onExecutionSuccess = /* @__PURE__ */ __name(async () => {
      await Promise.all([
        queueStore.update(),
        assetsStore.updateHistory()
        // Update history assets on execution success
      ]);
    }, "onExecutionSuccess");
    const reconnectingMessage = {
      severity: "error",
      summary: t2("g.reconnecting")
    };
    const onReconnecting = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add(reconnectingMessage);
      }
    }, "onReconnecting");
    const onReconnected = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add({
          severity: "success",
          summary: t2("g.reconnected"),
          life: 2e3
        });
      }
    }, "onReconnected");
    onMounted(() => {
      api.addEventListener("status", onStatus);
      api.addEventListener("execution_success", onExecutionSuccess);
      api.addEventListener("reconnecting", onReconnecting);
      api.addEventListener("reconnected", onReconnected);
      executionStore.bindExecutionEvents();
      try {
        init();
        graphCanvasContainerRef.value?.prepend(app.ui.menuContainer);
      } catch (e) {
        console.error("Failed to init ComfyUI frontend", e);
      }
    });
    onBeforeUnmount(() => {
      api.removeEventListener("status", onStatus);
      api.removeEventListener("execution_success", onExecutionSuccess);
      api.removeEventListener("reconnecting", onReconnecting);
      api.removeEventListener("reconnected", onReconnected);
      executionStore.unbindExecutionEvents();
    });
    useEventListener(window, "keydown", useKeybindingService().keybindHandler);
    const { wrapWithErrorHandling, wrapWithErrorHandlingAsync } = useErrorHandling();
    useFrontendVersionMismatchWarning({ immediate: true });
    void nextTick(() => {
      versionCompatibilityStore.initialize().catch((error) => {
        console.warn("Version compatibility check failed:", error);
      });
    });
    const onGraphReady = /* @__PURE__ */ __name(() => {
      runWhenGlobalIdle(() => {
        void loadTemplateFromUrl();
        wrapWithErrorHandling(useKeybindingService().registerUserKeybindings)();
        wrapWithErrorHandling(useServerConfigStore().loadServerConfig)(
          SERVER_CONFIG_ITEMS,
          settingStore.get("Comfy.Server.ServerConfigValues")
        );
        void wrapWithErrorHandlingAsync(useModelStore().loadModelFolders)();
        void wrapWithErrorHandlingAsync(
          useNodeFrequencyStore().loadNodeFrequencies
        )();
        useNodeDefStore().nodeSearchService.searchNode("");
      }, 1e3);
    }, "onGraphReady");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createElementVNode("div", {
            id: "comfyui-body-top",
            class: "comfyui-body-top"
          }, null, -1)),
          _cache[1] || (_cache[1] = createElementVNode("div", {
            id: "comfyui-body-bottom",
            class: "comfyui-body-bottom"
          }, null, -1)),
          _cache[2] || (_cache[2] = createElementVNode("div", {
            id: "comfyui-body-left",
            class: "comfyui-body-left"
          }, null, -1)),
          _cache[3] || (_cache[3] = createElementVNode("div", {
            id: "comfyui-body-right",
            class: "comfyui-body-right"
          }, null, -1)),
          createElementVNode("div", {
            id: "graph-canvas-container",
            ref_key: "graphCanvasContainerRef",
            ref: graphCanvasContainerRef,
            class: "graph-canvas-container"
          }, [
            createVNode(_sfc_main$5, { onReady: onGraphReady })
          ], 512)
        ]),
        createVNode(_sfc_main$1e),
        createVNode(_sfc_main$4),
        createVNode(_sfc_main$3),
        !unref(isElectron)() ? (openBlock(), createBlock(_sfc_main$1c, { key: 0 })) : createCommentVNode("", true),
        createVNode(MenuHamburger)
      ], 64);
    };
  }
});
const GraphView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f26e2194"]]);
export {
  GraphView as default
};
//# sourceMappingURL=GraphView-Cw7m7RT2.js.map
