var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, computed, openBlock, createBlock, unref } from "vue";
import Avatar from "primevue/avatar";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserAvatar",
  props: {
    photoUrl: {},
    ariaLabel: {}
  },
  setup(__props) {
    const imageError = ref(false);
    const handleImageError = /* @__PURE__ */ __name(() => {
      imageError.value = true;
    }, "handleImageError");
    const hasAvatar = computed(() => __props.photoUrl && !imageError.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Avatar), {
        class: "bg-interface-panel-selected-surface",
        image: _ctx.photoUrl ?? void 0,
        icon: hasAvatar.value ? void 0 : "icon-[lucide--user]",
        "pt:icon:class": { "size-4": !hasAvatar.value },
        shape: "circle",
        "aria-label": _ctx.ariaLabel ?? _ctx.$t("auth.login.userAvatar"),
        onError: handleImageError
      }, null, 8, ["image", "icon", "pt:icon:class", "aria-label"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=UserAvatar.vue_vue_type_script_setup_true_lang-D2s8tnS2.js.map
