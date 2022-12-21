import { O as useLoading, f as useHead, Q as useCart, S as useSocket, g as __nuxt_component_3, j as __nuxt_component_4, k as _sfc_main$1, l as __nuxt_component_6, m as __nuxt_component_7, T as _sfc_main$2 } from "../server.mjs";
import { defineComponent, ref, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
import "socket.io-client";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useLoading();
    useHead(() => ({
      titleTemplate: "",
      title: capitalize("Foody")
    }));
    const menus = ref([]);
    const cart = useCart();
    useSocket();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageHeader = __nuxt_component_4;
      const _component_PageTitle = _sfc_main$1;
      const _component_PageBody = __nuxt_component_6;
      const _component_PageSection = __nuxt_component_7;
      const _component_FoodCard = _sfc_main$2;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: "Menu",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: "Menu",
                      class: "capitalize"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-6 gap-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(menus.value, (menu, i) => {
                          _push4(ssrRenderComponent(_component_FoodCard, {
                            key: i,
                            menu,
                            class: "h-42",
                            onClick: ($event) => unref(cart).addMenu(menu, 1)
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-6 gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(menus.value, (menu, i) => {
                              return openBlock(), createBlock(_component_FoodCard, {
                                key: i,
                                menu,
                                class: "h-42",
                                onClick: ($event) => unref(cart).addMenu(menu, 1)
                              }, null, 8, ["menu", "onClick"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-6 gap-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(menus.value, (menu, i) => {
                            return openBlock(), createBlock(_component_FoodCard, {
                              key: i,
                              menu,
                              class: "h-42",
                              onClick: ($event) => unref(cart).addMenu(menu, 1)
                            }, null, 8, ["menu", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    text: "Menu",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-6 gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(menus.value, (menu, i) => {
                          return openBlock(), createBlock(_component_FoodCard, {
                            key: i,
                            menu,
                            class: "h-42",
                            onClick: ($event) => unref(cart).addMenu(menu, 1)
                          }, null, 8, ["menu", "onClick"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.2a0531d8.js.map
