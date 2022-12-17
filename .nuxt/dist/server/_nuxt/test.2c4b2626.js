import { f as useHead, K as useCounter, L as useIdentity, g as __nuxt_component_3, j as __nuxt_component_4, k as _sfc_main$1, l as __nuxt_component_6, m as __nuxt_component_7, N as _sfc_main$2, z as _sfc_main$3, x as _sfc_main$4 } from "../server.mjs";
import { u as useLang } from "./useLang.50d30bd4.js";
import { defineComponent, withCtx, createVNode, unref, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    useHead(() => ({
      title: capitalize(t("pages.test.title")),
      meta: [
        {
          name: "description",
          content: t("pages.test.description")
        }
      ]
    }));
    const counter = useCounter();
    const identity = useIdentity();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageHeader = __nuxt_component_4;
      const _component_PageTitle = _sfc_main$1;
      const _component_PageBody = __nuxt_component_6;
      const _component_PageSection = __nuxt_component_7;
      const _component_PageSectionTitle = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      const _component_FormTextInput = _sfc_main$4;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: _ctx.$t("pages.test.title"),
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: _ctx.$t("pages.test.title"),
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
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.counter"),
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class=""${_scopeId3}><div class="mb-2"${_scopeId3}>Counter : ${ssrInterpolate(unref(counter).count)}</div><div class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.increment"),
                          onClick: unref(counter).increment
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto",
                          type: "secondary",
                          size: "sm",
                          text: `${_ctx.$t("pages.test.increment")} 2x`,
                          onClick: unref(counter).increment2x
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.decrement"),
                          onClick: unref(counter).decrement
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.reset"),
                          onClick: unref(counter).reset
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode(_component_PageSectionTitle, {
                            text: _ctx.$t("pages.test.counter"),
                            class: "capitalize"
                          }, null, 8, ["text"]),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                            createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.increment"),
                                onClick: withModifiers(unref(counter).increment, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto",
                                type: "secondary",
                                size: "sm",
                                text: `${_ctx.$t("pages.test.increment")} 2x`,
                                onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.decrement"),
                                onClick: withModifiers(unref(counter).decrement, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.reset"),
                                onClick: withModifiers(unref(counter).reset, ["prevent"])
                              }, null, 8, ["text", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.identity"),
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="mb-2"${_scopeId3}><span class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("pages.test.full_name"))} : </span><span${_scopeId3}>${ssrInterpolate(unref(identity).fullName)}</span></div><div class="mb-2"${_scopeId3}><div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_FormTextInput, {
                          modelValue: unref(identity).firstName,
                          "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormTextInput, {
                          modelValue: unref(identity).lastName,
                          "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "capitalize w-full md:w-auto",
                          text: _ctx.$t("pages.test.reset"),
                          type: "secondary",
                          size: "md",
                          onClick: unref(identity).reset
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode(_component_PageSectionTitle, {
                            text: _ctx.$t("pages.test.identity"),
                            class: "capitalize"
                          }, null, 8, ["text"]),
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                            createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                          ]),
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                              createVNode(_component_FormTextInput, {
                                modelValue: unref(identity).firstName,
                                "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                                size: "md",
                                class: "w-full md:w-1/3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_FormTextInput, {
                                modelValue: unref(identity).lastName,
                                "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                                size: "md",
                                class: "w-full md:w-1/3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_Button, {
                                class: "capitalize w-full md:w-auto",
                                text: _ctx.$t("pages.test.reset"),
                                type: "secondary",
                                size: "md",
                                onClick: withModifiers(unref(identity).reset, ["prevent"])
                              }, null, 8, ["text", "onClick"])
                            ])
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
                        createVNode(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.counter"),
                          class: "capitalize"
                        }, null, 8, ["text"]),
                        createVNode("div", { class: "" }, [
                          createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                          createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.increment"),
                              onClick: withModifiers(unref(counter).increment, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto",
                              type: "secondary",
                              size: "sm",
                              text: `${_ctx.$t("pages.test.increment")} 2x`,
                              onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.decrement"),
                              onClick: withModifiers(unref(counter).decrement, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.reset"),
                              onClick: withModifiers(unref(counter).reset, ["prevent"])
                            }, null, 8, ["text", "onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.identity"),
                          class: "capitalize"
                        }, null, 8, ["text"]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                          createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                        ]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                            createVNode(_component_FormTextInput, {
                              modelValue: unref(identity).firstName,
                              "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                              size: "md",
                              class: "w-full md:w-1/3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_FormTextInput, {
                              modelValue: unref(identity).lastName,
                              "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                              size: "md",
                              class: "w-full md:w-1/3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Button, {
                              class: "capitalize w-full md:w-auto",
                              text: _ctx.$t("pages.test.reset"),
                              type: "secondary",
                              size: "md",
                              onClick: withModifiers(unref(identity).reset, ["prevent"])
                            }, null, 8, ["text", "onClick"])
                          ])
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
                    text: _ctx.$t("pages.test.title"),
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_PageSectionTitle, {
                        text: _ctx.$t("pages.test.counter"),
                        class: "capitalize"
                      }, null, 8, ["text"]),
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                        createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.increment"),
                            onClick: withModifiers(unref(counter).increment, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto",
                            type: "secondary",
                            size: "sm",
                            text: `${_ctx.$t("pages.test.increment")} 2x`,
                            onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.decrement"),
                            onClick: withModifiers(unref(counter).decrement, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.reset"),
                            onClick: withModifiers(unref(counter).reset, ["prevent"])
                          }, null, 8, ["text", "onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_PageSectionTitle, {
                        text: _ctx.$t("pages.test.identity"),
                        class: "capitalize"
                      }, null, 8, ["text"]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                        createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_FormTextInput, {
                            modelValue: unref(identity).firstName,
                            "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_FormTextInput, {
                            modelValue: unref(identity).lastName,
                            "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Button, {
                            class: "capitalize w-full md:w-auto",
                            text: _ctx.$t("pages.test.reset"),
                            type: "secondary",
                            size: "md",
                            onClick: withModifiers(unref(identity).reset, ["prevent"])
                          }, null, 8, ["text", "onClick"])
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bak/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=test.2c4b2626.js.map
