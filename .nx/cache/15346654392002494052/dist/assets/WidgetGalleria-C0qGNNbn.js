import "./rolldown-runtime-DBfy44LZ.js";
import { k as script } from "./vendor-primevue-Dnp2bJ8y.js";
import { D as computed, G as mergeModels, I as createVNode, K as mergeProps, O as createBaseVNode, R as defineComponent, Rt as unref, _t as withCtx, et as openBlock, j as createElementBlock, kt as ref, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import { n as GALLERIA_EXCLUDED_PROPS, o as filterWidgetProps } from "./widgetPropFilter-nQfJwFQD.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetGalleria.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-1" };
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = { class: "size-full p-1" };
var _hoisted_4 = ["src", "alt"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetGalleria.vue
var WidgetGalleria_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WidgetGalleria",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const value = useModel(__props, "modelValue");
		const props = __props;
		const activeIndex = ref(0);
		const { t } = useI18n();
		const filteredProps = computed(() => filterWidgetProps(props.widget.options, GALLERIA_EXCLUDED_PROPS));
		const galleryImages = computed(() => {
			if (!value.value || !Array.isArray(value.value)) return [];
			return value.value.filter((item) => item !== null && item !== void 0).map((item, index) => {
				if (typeof item === "string") return {
					itemImageSrc: item,
					thumbnailImageSrc: item,
					alt: `Image ${index}`
				};
				return item ?? {};
			});
		});
		const showThumbnails = computed(() => {
			return props.widget.options?.showThumbnails !== false && galleryImages.value.length > 1;
		});
		const showNavButtons = computed(() => {
			return props.widget.options?.showItemNavigators !== false && galleryImages.value.length > 1;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(script), mergeProps({
				"active-index": activeIndex.value,
				"onUpdate:activeIndex": _cache[0] || (_cache[0] = ($event) => activeIndex.value = $event),
				value: galleryImages.value
			}, filteredProps.value, {
				"show-thumbnails": showThumbnails.value,
				"show-item-navigators": showNavButtons.value,
				class: "max-w-full",
				pt: {
					thumbnails: { class: "overflow-hidden" },
					thumbnailContent: { class: "py-4 px-2" },
					thumbnailPrevButton: { class: "m-0" },
					thumbnailNextButton: { class: "m-0" }
				}
			}), {
				item: withCtx(({ item }) => [createBaseVNode("img", {
					src: item?.itemImageSrc || item?.src || "",
					alt: item?.alt || `${unref(t)("g.galleryImage")} ${activeIndex.value + 1} of ${galleryImages.value.length}`,
					class: "h-auto max-h-64 w-full object-contain"
				}, null, 8, _hoisted_2)]),
				thumbnail: withCtx(({ item }) => [createBaseVNode("div", _hoisted_3, [createBaseVNode("img", {
					src: item?.thumbnailImageSrc || item?.src || "",
					alt: item?.alt || `${unref(t)("g.galleryThumbnail")} ${galleryImages.value.findIndex((img) => img === item) + 1} of ${galleryImages.value.length}`,
					class: "size-full rounded-lg object-cover"
				}, null, 8, _hoisted_4)])]),
				_: 1
			}, 16, [
				"active-index",
				"value",
				"show-thumbnails",
				"show-item-navigators"
			])]);
		};
	}
}), [["__scopeId", "data-v-d1100a6b"]]);
//#endregion
export { WidgetGalleria_default as default };

//# sourceMappingURL=WidgetGalleria-C0qGNNbn.js.map