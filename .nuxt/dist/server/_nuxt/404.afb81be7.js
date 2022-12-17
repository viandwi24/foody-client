import { f as useHead, g as __nuxt_component_3, h as _sfc_main$1 } from "../server.mjs";
import { u as useLang } from "./useLang.50d30bd4.js";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { c as capitalize } from "./str.e3d4e921.js";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "scule";
import "property-information";
import "html-tags";
import "ohash";
import "cookie-es";
import "@intlify/message-compiler";
import "@intlify/vue-devtools";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    useHead(() => ({
      title: capitalize(t("pages.404.title"))
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_Error = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageWrapper, mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Error, { code: 404 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Error, { code: 404 })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bak/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=404.afb81be7.js.map
