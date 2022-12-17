import { f as useHead, g as __nuxt_component_3, j as __nuxt_component_4, k as _sfc_main$1, l as __nuxt_component_6, p as _sfc_main$2, m as __nuxt_component_7, q as _sfc_main$3, r as __unplugin_components_0 } from "../server.mjs";
import { u as useLang } from "./useLang.bab5a5c4.js";
import { openBlock, createElementBlock, createElementVNode, defineComponent, withCtx, createVNode, toDisplayString, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_1 = { name: "ic-baseline-arrow-right-alt", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    useHead(() => ({
      title: capitalize(t("pages.post.title")),
      meta: [
        {
          name: "description",
          content: t("pages.post.description")
        }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageHeader = __nuxt_component_4;
      const _component_PageTitle = _sfc_main$1;
      const _component_PageBody = __nuxt_component_6;
      const _component_ContentList = _sfc_main$2;
      const _component_PageSection = __nuxt_component_7;
      const _component_Anchor = _sfc_main$3;
      const _component_icon_mdi58github_face = __unplugin_components_0;
      const _component_icon58ic58baseline_arrow_right_alt = __unplugin_components_1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: _ctx.$t("pages.post.title"),
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: _ctx.$t("pages.post.title"),
                      class: "capitalize"
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ContentList, { path: "/post" }, {
                    default: withCtx(({ list }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(list, (article) => {
                          _push4(ssrRenderComponent(_component_PageSection, {
                            key: article._path
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId4}><div class="mt-1 text-slate-600 dark:text-gray-400 text-right"${_scopeId4}><div${_scopeId4}>${ssrInterpolate(article.date)}</div>`);
                                _push5(ssrRenderComponent(_component_Anchor, {
                                  class: "text-sm flex items-center justify-end space-x-1",
                                  href: `https://www.github.com/${article.author}`
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_icon_mdi58github_face, { class: "text-xs" }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(article.author)}</span>`);
                                    } else {
                                      return [
                                        createVNode(_component_icon_mdi58github_face, { class: "text-xs" }),
                                        createVNode("span", null, toDisplayString(article.author), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="flex flex-col"${_scopeId4}><div class="text-xl font-semibold text-slate-800 dark:text-gray-50"${_scopeId4}>${ssrInterpolate(article.title)}</div><div class="text-slate-700 dark:text-gray-300 mb-1"${_scopeId4}>${ssrInterpolate(article.description)}</div><div class="flex"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Anchor, {
                                  class: "text-sm flex space-x-1 items-center text-primary-500",
                                  to: article._path
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(_ctx.$t("others.learn_more"))}</span>`);
                                      _push6(ssrRenderComponent(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("span", null, toDisplayString(_ctx.$t("others.learn_more")), 1),
                                        createVNode(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]" }, [
                                    createVNode("div", { class: "mt-1 text-slate-600 dark:text-gray-400 text-right" }, [
                                      createVNode("div", null, toDisplayString(article.date), 1),
                                      createVNode(_component_Anchor, {
                                        class: "text-sm flex items-center justify-end space-x-1",
                                        href: `https://www.github.com/${article.author}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_icon_mdi58github_face, { class: "text-xs" }),
                                          createVNode("span", null, toDisplayString(article.author), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("div", { class: "text-xl font-semibold text-slate-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                                      createVNode("div", { class: "text-slate-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                                      createVNode("div", { class: "flex" }, [
                                        createVNode(_component_Anchor, {
                                          class: "text-sm flex space-x-1 items-center text-primary-500",
                                          to: article._path
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(_ctx.$t("others.learn_more")), 1),
                                            createVNode(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                            return openBlock(), createBlock(_component_PageSection, {
                              key: article._path
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]" }, [
                                  createVNode("div", { class: "mt-1 text-slate-600 dark:text-gray-400 text-right" }, [
                                    createVNode("div", null, toDisplayString(article.date), 1),
                                    createVNode(_component_Anchor, {
                                      class: "text-sm flex items-center justify-end space-x-1",
                                      href: `https://www.github.com/${article.author}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_icon_mdi58github_face, { class: "text-xs" }),
                                        createVNode("span", null, toDisplayString(article.author), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("div", { class: "text-xl font-semibold text-slate-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                                    createVNode("div", { class: "text-slate-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                                    createVNode("div", { class: "flex" }, [
                                      createVNode(_component_Anchor, {
                                        class: "text-sm flex space-x-1 items-center text-primary-500",
                                        to: article._path
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(_ctx.$t("others.learn_more")), 1),
                                          createVNode(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" })
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ContentList, { path: "/post" }, {
                      default: withCtx(({ list }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                          return openBlock(), createBlock(_component_PageSection, {
                            key: article._path
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]" }, [
                                createVNode("div", { class: "mt-1 text-slate-600 dark:text-gray-400 text-right" }, [
                                  createVNode("div", null, toDisplayString(article.date), 1),
                                  createVNode(_component_Anchor, {
                                    class: "text-sm flex items-center justify-end space-x-1",
                                    href: `https://www.github.com/${article.author}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_icon_mdi58github_face, { class: "text-xs" }),
                                      createVNode("span", null, toDisplayString(article.author), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("div", { class: "text-xl font-semibold text-slate-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                                  createVNode("div", { class: "text-slate-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                                  createVNode("div", { class: "flex" }, [
                                    createVNode(_component_Anchor, {
                                      class: "text-sm flex space-x-1 items-center text-primary-500",
                                      to: article._path
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(_ctx.$t("others.learn_more")), 1),
                                        createVNode(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ])
                                ])
                              ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    text: _ctx.$t("pages.post.title"),
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentList, { path: "/post" }, {
                    default: withCtx(({ list }) => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                        return openBlock(), createBlock(_component_PageSection, {
                          key: article._path
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]" }, [
                              createVNode("div", { class: "mt-1 text-slate-600 dark:text-gray-400 text-right" }, [
                                createVNode("div", null, toDisplayString(article.date), 1),
                                createVNode(_component_Anchor, {
                                  class: "text-sm flex items-center justify-end space-x-1",
                                  href: `https://www.github.com/${article.author}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_icon_mdi58github_face, { class: "text-xs" }),
                                    createVNode("span", null, toDisplayString(article.author), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("div", { class: "text-xl font-semibold text-slate-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                                createVNode("div", { class: "text-slate-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                                createVNode("div", { class: "flex" }, [
                                  createVNode(_component_Anchor, {
                                    class: "text-sm flex space-x-1 items-center text-primary-500",
                                    to: article._path
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(_ctx.$t("others.learn_more")), 1),
                                      createVNode(_component_icon58ic58baseline_arrow_right_alt, { class: "text-sm" })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bak/post/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.faae69b5.js.map
