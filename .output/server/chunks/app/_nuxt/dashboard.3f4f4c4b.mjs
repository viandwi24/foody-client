import { Y as _export_sfc, Z as _sfc_main$v, $ as _sfc_main$w } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import '@vue/shared';
import 'property-information';
import 'cookie-es';
import '@intlify/message-compiler';
import 'axios';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageNavbar = _sfc_main$v;
  const _component_PageFooter = _sfc_main$w;
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

export { dashboard as default };
//# sourceMappingURL=dashboard.3f4f4c4b.mjs.map
