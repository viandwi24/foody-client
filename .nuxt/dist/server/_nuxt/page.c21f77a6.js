import { a0 as useState, Q as useCart, O as useLoading, a1 as useApi, a2 as Api, Z as _sfc_main$1, $ as _sfc_main$2, z as _sfc_main$3 } from "../server.mjs";
import { defineComponent, ref, unref, useSSRContext } from "vue";
import "vue-router";
import "destr";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import QrcodeVue from "qrcode.vue";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
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
      const _component_PageNavbar = _sfc_main$1;
      const _component_PageFooter = _sfc_main$2;
      const _component_Button = _sfc_main$3;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=page.c21f77a6.js.map
