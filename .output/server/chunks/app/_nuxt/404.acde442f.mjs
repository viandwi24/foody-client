import { f as useHead, g as __nuxt_component_3, h as _sfc_main$16 } from '../server.mjs';
import { u as useLang } from './useLang.cfdef868.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as capitalize } from './str.e3d4e921.mjs';
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
import 'vue-toastification';

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
      const _component_Error = _sfc_main$16;
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

export { _sfc_main as default };
//# sourceMappingURL=404.acde442f.mjs.map
