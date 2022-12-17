import { f as useHead, n as _sfc_main$1 } from "../server.mjs";
import { u as useLang } from "./useLang.463b3e78.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
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
import "vue-toastification";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "getting-started",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    useHead(() => ({
      title: capitalize(t("pages.getting-started.title")),
      meta: [
        {
          name: "description",
          content: t("pages.getting-started.description")
        }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContentRenderer = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageContentRenderer, mergeProps({
        path: "/page/getting-started",
        "page-title": _ctx.$t("pages.getting-started.title")
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bak/getting-started.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=getting-started.7176e9eb.js.map
