import { U as useAuth, g as __nuxt_component_3, l as __nuxt_component_6, m as __nuxt_component_7, t as _sfc_main$W, v as __nuxt_component_4, w as _sfc_main$U, x as _sfc_main$T, z as _sfc_main$17 } from '../server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const data = ref({
      email: "owner@example.com",
      password: "password"
    });
    const login = () => {
      auth.login(data.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageBody = __nuxt_component_6;
      const _component_PageSection = __nuxt_component_7;
      const _component_Card = _sfc_main$W;
      const _component_CardContent = __nuxt_component_4;
      const _component_CardTitle = _sfc_main$U;
      const _component_FormTextInput = _sfc_main$T;
      const _component_Button = _sfc_main$17;
      _push(ssrRenderComponent(_component_PageWrapper, mergeProps({ class: "flex-1 flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageBody, { class: "flex-1 flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageSection, { class: "flex-1 flex justify-center items-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="max-w-sm w-full mx-auto"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Card, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_CardTitle, { text: "LOGIN" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="flex flex-col space-y-4 mt-2"${_scopeId5}><div class="flex flex-col space-y-2"${_scopeId5}><label${_scopeId5}>Email</label>`);
                                    _push6(ssrRenderComponent(_component_FormTextInput, {
                                      modelValue: data.value.email,
                                      "onUpdate:modelValue": ($event) => data.value.email = $event,
                                      type: "email"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="flex flex-col space-y-2"${_scopeId5}><label${_scopeId5}>Password</label>`);
                                    _push6(ssrRenderComponent(_component_FormTextInput, {
                                      modelValue: data.value.password,
                                      "onUpdate:modelValue": ($event) => data.value.password = $event,
                                      type: "password"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Button, {
                                      class: "w-full",
                                      type: "primary",
                                      text: "Login",
                                      onClick: login
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode(_component_CardTitle, { text: "LOGIN" }),
                                      createVNode("div", { class: "flex flex-col space-y-4 mt-2" }, [
                                        createVNode("div", { class: "flex flex-col space-y-2" }, [
                                          createVNode("label", null, "Email"),
                                          createVNode(_component_FormTextInput, {
                                            modelValue: data.value.email,
                                            "onUpdate:modelValue": ($event) => data.value.email = $event,
                                            type: "email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "flex flex-col space-y-2" }, [
                                          createVNode("label", null, "Password"),
                                          createVNode(_component_FormTextInput, {
                                            modelValue: data.value.password,
                                            "onUpdate:modelValue": ($event) => data.value.password = $event,
                                            type: "password"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", null, [
                                          createVNode(_component_Button, {
                                            class: "w-full",
                                            type: "primary",
                                            text: "Login",
                                            onClick: login
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CardTitle, { text: "LOGIN" }),
                                    createVNode("div", { class: "flex flex-col space-y-4 mt-2" }, [
                                      createVNode("div", { class: "flex flex-col space-y-2" }, [
                                        createVNode("label", null, "Email"),
                                        createVNode(_component_FormTextInput, {
                                          modelValue: data.value.email,
                                          "onUpdate:modelValue": ($event) => data.value.email = $event,
                                          type: "email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "flex flex-col space-y-2" }, [
                                        createVNode("label", null, "Password"),
                                        createVNode(_component_FormTextInput, {
                                          modelValue: data.value.password,
                                          "onUpdate:modelValue": ($event) => data.value.password = $event,
                                          type: "password"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_Button, {
                                          class: "w-full",
                                          type: "primary",
                                          text: "Login",
                                          onClick: login
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "max-w-sm w-full mx-auto" }, [
                            createVNode(_component_Card, null, {
                              default: withCtx(() => [
                                createVNode(_component_CardContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CardTitle, { text: "LOGIN" }),
                                    createVNode("div", { class: "flex flex-col space-y-4 mt-2" }, [
                                      createVNode("div", { class: "flex flex-col space-y-2" }, [
                                        createVNode("label", null, "Email"),
                                        createVNode(_component_FormTextInput, {
                                          modelValue: data.value.email,
                                          "onUpdate:modelValue": ($event) => data.value.email = $event,
                                          type: "email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "flex flex-col space-y-2" }, [
                                        createVNode("label", null, "Password"),
                                        createVNode(_component_FormTextInput, {
                                          modelValue: data.value.password,
                                          "onUpdate:modelValue": ($event) => data.value.password = $event,
                                          type: "password"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_Button, {
                                          class: "w-full",
                                          type: "primary",
                                          text: "Login",
                                          onClick: login
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, { class: "flex-1 flex justify-center items-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "max-w-sm w-full mx-auto" }, [
                          createVNode(_component_Card, null, {
                            default: withCtx(() => [
                              createVNode(_component_CardContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_CardTitle, { text: "LOGIN" }),
                                  createVNode("div", { class: "flex flex-col space-y-4 mt-2" }, [
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode("label", null, "Email"),
                                      createVNode(_component_FormTextInput, {
                                        modelValue: data.value.email,
                                        "onUpdate:modelValue": ($event) => data.value.email = $event,
                                        type: "email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode("label", null, "Password"),
                                      createVNode(_component_FormTextInput, {
                                        modelValue: data.value.password,
                                        "onUpdate:modelValue": ($event) => data.value.password = $event,
                                        type: "password"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode(_component_Button, {
                                        class: "w-full",
                                        type: "primary",
                                        text: "Login",
                                        onClick: login
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
              createVNode(_component_PageBody, { class: "flex-1 flex" }, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, { class: "flex-1 flex justify-center items-center" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "max-w-sm w-full mx-auto" }, [
                        createVNode(_component_Card, null, {
                          default: withCtx(() => [
                            createVNode(_component_CardContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_CardTitle, { text: "LOGIN" }),
                                createVNode("div", { class: "flex flex-col space-y-4 mt-2" }, [
                                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                                    createVNode("label", null, "Email"),
                                    createVNode(_component_FormTextInput, {
                                      modelValue: data.value.email,
                                      "onUpdate:modelValue": ($event) => data.value.email = $event,
                                      type: "email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                                    createVNode("label", null, "Password"),
                                    createVNode(_component_FormTextInput, {
                                      modelValue: data.value.password,
                                      "onUpdate:modelValue": ($event) => data.value.password = $event,
                                      type: "password"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_Button, {
                                      class: "w-full",
                                      type: "primary",
                                      text: "Login",
                                      onClick: login
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/owner/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.3fcb1f1b.mjs.map
