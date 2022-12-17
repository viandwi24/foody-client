import { f as useHead, U as _sfc_main$E, W as _sfc_main$C, X as _sfc_main$B, g as __nuxt_component_3, j as __nuxt_component_4$1, k as _sfc_main$14, l as __nuxt_component_6, m as __nuxt_component_7 } from '../server.mjs';
import { u as useScreen, l as le, S as Size, a as ae, n as ne, r as re, b as ue } from './useScreen.5767efb0.mjs';
import { defineComponent, shallowRef, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const screen = useScreen();
    useHead(() => ({
      titleTemplate: "",
      title: capitalize("Foody Owner")
    }));
    const subpages = shallowRef([
      {
        key: "menu",
        name: "Menu",
        component: _sfc_main$E
      },
      {
        key: "order",
        name: "Orders",
        component: _sfc_main$C
      },
      {
        key: "transaction",
        name: "Transactions",
        component: _sfc_main$B
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageHeader = __nuxt_component_4$1;
      const _component_PageTitle = _sfc_main$14;
      const _component_PageBody = __nuxt_component_6;
      const _component_PageSection = __nuxt_component_7;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: "Owner Dashboard",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: "Owner Dashboard",
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
                        _push4(ssrRenderComponent(unref(le), {
                          as: "div",
                          class: "flex flex-col",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ae), { class: "w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(subpages), (page) => {
                                      _push6(ssrRenderComponent(unref(ne), {
                                        key: page.key,
                                        as: "template"
                                      }, {
                                        default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<button class="${ssrRenderClass([
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                            ])}"${_scopeId6}>${ssrInterpolate(page.name)}</button>`);
                                          } else {
                                            return [
                                              createVNode("button", {
                                                class: [
                                                  "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                  selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                                ]
                                              }, toDisplayString(page.name), 3)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (page) => {
                                        return openBlock(), createBlock(unref(ne), {
                                          key: page.key,
                                          as: "template"
                                        }, {
                                          default: withCtx(({ selected }) => [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, toDisplayString(page.name), 3)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(re), { class: "flex-1 max-w-full" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(subpages), (item) => {
                                      _push6(ssrRenderComponent(unref(ue), {
                                        key: item.key,
                                        class: "max-w-full"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.component), null, null), _parent7, _scopeId6);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (item) => {
                                        return openBlock(), createBlock(unref(ue), {
                                          key: item.key,
                                          class: "max-w-full"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ae), { class: "w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (page) => {
                                      return openBlock(), createBlock(unref(ne), {
                                        key: page.key,
                                        as: "template"
                                      }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, toDisplayString(page.name), 3)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(re), { class: "flex-1 max-w-full" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (item) => {
                                      return openBlock(), createBlock(unref(ue), {
                                        key: item.key,
                                        class: "max-w-full"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(le), {
                            as: "div",
                            class: "flex flex-col",
                            vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ae), { class: "w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (page) => {
                                    return openBlock(), createBlock(unref(ne), {
                                      key: page.key,
                                      as: "template"
                                    }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, toDisplayString(page.name), 3)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode(unref(re), { class: "flex-1 max-w-full" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (item) => {
                                    return openBlock(), createBlock(unref(ue), {
                                      key: item.key,
                                      class: "max-w-full"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["vertical"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(unref(le), {
                          as: "div",
                          class: "flex flex-col",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ae), { class: "w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (page) => {
                                  return openBlock(), createBlock(unref(ne), {
                                    key: page.key,
                                    as: "template"
                                  }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, toDisplayString(page.name), 3)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(unref(re), { class: "flex-1 max-w-full" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (item) => {
                                  return openBlock(), createBlock(unref(ue), {
                                    key: item.key,
                                    class: "max-w-full"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["vertical"])
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
                    text: "Owner Dashboard",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(unref(le), {
                        as: "div",
                        class: "flex flex-col",
                        vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ae), { class: "w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (page) => {
                                return openBlock(), createBlock(unref(ne), {
                                  key: page.key,
                                  as: "template"
                                }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold bg-gray-200 dark:bg-white/[0.12]" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, toDisplayString(page.name), 3)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(re), { class: "flex-1 max-w-full" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(subpages), (item) => {
                                return openBlock(), createBlock(unref(ue), {
                                  key: item.key,
                                  class: "max-w-full"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["vertical"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/owner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.96808dd8.mjs.map
