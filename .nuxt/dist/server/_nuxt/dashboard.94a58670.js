import { Y as _export_sfc, Z as _sfc_main$1, $ as _sfc_main$2 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageNavbar = _sfc_main$1;
  const _component_PageFooter = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "app-before", {}, null, _push, _parent);
  _push(`<div id="app-before"></div><div class="flex flex-col min-h-screen">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, () => {
    _push(ssrRenderComponent(_component_PageNavbar, null, null, _parent));
  }, _push, _parent);
  _push(`<div class="flex-1 w-full flex flex-col"><div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
    _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
  }, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "app-after", {}, null, _push, _parent);
  _push(`<div id="app-after"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard.94a58670.js.map
