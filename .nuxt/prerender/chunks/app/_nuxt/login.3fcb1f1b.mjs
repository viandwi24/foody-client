import { U as useAuth, g as __nuxt_component_3, l as __nuxt_component_6, m as __nuxt_component_7, t as _sfc_main$W, v as __nuxt_component_4, w as _sfc_main$U, x as _sfc_main$T, z as _sfc_main$17 } from '../server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/server-renderer/index.mjs';
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
