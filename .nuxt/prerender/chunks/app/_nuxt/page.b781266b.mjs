import { a0 as useState, Q as useCart, O as useLoading, a1 as useApi, a2 as Api, Z as _sfc_main$v, $ as _sfc_main$w, z as _sfc_main$17 } from '../server.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/server-renderer/index.mjs';
import QrcodeVue from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/qrcode.vue@3.3.3_vue@3.2.39/node_modules/qrcode.vue/dist/qrcode.vue.cjs.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unctx@2.1.0/node_modules/unctx/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.39/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/defu@6.1.1/node_modules/defu/dist/defu.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@vue+shared@3.2.39/node_modules/@vue/shared/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/scule@0.3.2/node_modules/scule/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@intlify+message-compiler@9.3.0-beta.10/node_modules/@intlify/message-compiler/dist/message-compiler.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@intlify+vue-devtools@9.2.2/node_modules/@intlify/vue-devtools/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/axios@1.2.0/node_modules/axios/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/node-fetch-native@0.1.7/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unstorage@0.5.6/node_modules/unstorage/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unstorage@0.5.6/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/pathe@0.3.8/node_modules/pathe/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/mdast-util-to-string@3.1.0/node_modules/mdast-util-to-string/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/preprocess.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/postprocess.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unist-util-stringify-position@3.0.2/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/rehype-external-links@2.0.1/node_modules/rehype-external-links/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-mdc@1.0.7/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/mdast-util-to-hast@12.2.2/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/npm/consola.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useState("app");
    const cart = useCart();
    const loading = useLoading();
    const api = useApi();
    const { reset, increment, decrement } = cart;
    const isShowModalCheckout = ref(false);
    const toggleCheckout = () => {
      isShowModalCheckout.value = !isShowModalCheckout.value;
    };
    const transaction = ref();
    ref();
    const ticketElmRotate = ref({
      x: 0,
      y: 0
    });
    const isCheckoutSuccess = ref(false);
    const checkout = async () => {
      loading.show();
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      try {
        const res = await api.create(
          Api.Transaction.Create({
            user_name: "guest",
            menus: [
              ...cart.menus.map((menu) => ({
                id: menu.menu.id,
                qty: menu.quantity
              }))
            ]
          })
        );
        if (res.status === 201) {
          transaction.value = res.data.data;
          isCheckoutSuccess.value = true;
          reset();
        }
      } catch (error) {
      }
      loading.hide();
    };
    const close = () => {
      isCheckoutSuccess.value = false;
      toggleCheckout();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageNavbar = _sfc_main$v;
      const _component_PageFooter = _sfc_main$w;
      const _component_Button = _sfc_main$17;
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
      _push(`<div id="app-after"></div><div>`);
      if (isShowModalCheckout.value) {
        _push(`<div class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/80"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "bottom-0 right-0 mb-6 mr-6": !isShowModalCheckout.value
      }, "transition-all duration-300 fixed block w-96 z-50"])}" style="${ssrRenderStyle(`${isShowModalCheckout.value ? "top: 50%; left: 50%; transform: translate(-50%, -50%);" : ""}`)}"><div class="flex-1 relative bg-slate-800 rounded-lg shadow-xl border border-primary-600"><div class="text-2xl font-bold px-6 py-4 flex justify-between"><span>Cart</span>`);
      if (isShowModalCheckout.value) {
        _push(`<span class="transform rotate-45 text-4xl cursor-pointer hover:text-red-500"> + </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-6 pb-4 flex flex-col space-y-8"><div class="flex flex-col space-y-1"><!--[-->`);
      ssrRenderList(unref(cart).menus, (item) => {
        _push(`<div class="flex justify-between"><div class="flex items-center"><span class="mr-2 truncate max-w-full">${ssrInterpolate(item.menu.name)}</span><span class="flex space-x-2 text-xs"><button class="rounded-full w-5 h-5 flex justify-center items-center bg-slate-700"> - </button><div>${ssrInterpolate(item.quantity)}</div><button class="rounded-full w-5 h-5 flex justify-center items-center bg-slate-700"> + </button></span></div><div>${ssrInterpolate(_ctx.$getCurrentCurrency().symbol + unref(cart).getPriceMenuItem(item))}</div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(cart).menus.length === 0) {
        _push(`<div><div class="text-center">Cart is empty</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isShowModalCheckout.value) {
        _push(`<div class="flex space-x-2 justify-end">`);
        _push(ssrRenderComponent(_component_Button, {
          size: "sm",
          type: "danger",
          text: "Reset",
          onClick: unref(reset)
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          size: "sm",
          text: "Checkout",
          onClick: toggleCheckout
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex space-x-2 justify-end">`);
        _push(ssrRenderComponent(_component_Button, {
          size: "sm",
          type: "danger",
          text: "Cancel",
          onClick: toggleCheckout
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          size: "sm",
          text: "Checkout Now",
          onClick: checkout
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div>`);
      if (isCheckoutSuccess.value && transaction.value) {
        _push(`<div class="fixed top-0 left-0 flex w-screen h-screen z-50 bg-primary-600"><div class="flex-1 relative flex flex-col justify-center items-center space-y-8"><div class="text-4xl font-bold text-center"> YOUR CHECKOUT SUCCESS CREATE!!! </div><div class="w-120 h-50 rounded-lg shadow bg-white text-slate-800 flex px-6 py-4 relative" style="${ssrRenderStyle({
          transform: `perspective(1000px) rotateX(${ticketElmRotate.value.x}deg) rotateY(${ticketElmRotate.value.y}deg)`
        })}"><div class="flex-1 flex flex-col justify-between"><div><div class="font-mono font-bold text-xl">CHECKOUT TICKET</div><div class="font-semibold">${ssrInterpolate(unref(app).name)}</div></div><div class="flex flex-col"><div><span class="font-semibold mr-2">Name :</span><span class="font-mono">${ssrInterpolate(transaction.value.user_name)}</span></div><div><span class="font-semibold mr-2">Total :</span><span>${ssrInterpolate(_ctx.$formatCurrency(transaction.value.total))}</span></div></div></div><div class="pr-2 flex mr-4 items-center">`);
        _push(ssrRenderComponent(QrcodeVue, {
          value: `#${transaction.value.code}`,
          size: 142,
          level: "H"
        }, null, _parent));
        _push(`</div><div class="absolute right-0 transform mr-7 font-bold font-mono text-gray-600" style="${ssrRenderStyle({
          top: "50%",
          transform: "translate(50%, -50%) rotate(90deg)"
        })}"> #${ssrInterpolate(transaction.value.code)}</div></div><div>`);
        _push(ssrRenderComponent(_component_Button, {
          size: "sm",
          text: "Back to Catalog",
          onClick: close
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page.b781266b.mjs.map
