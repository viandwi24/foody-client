import { f as useHead, g as __nuxt_component_3, m as __nuxt_component_7, s as _sfc_main$1, j as __nuxt_component_4, k as _sfc_main$2, l as __nuxt_component_6, t as _sfc_main$3, v as __nuxt_component_4$1, w as _sfc_main$4, x as _sfc_main$5, y as __nuxt_component_10, q as _sfc_main$6, z as _sfc_main$7, A as _sfc_main$8 } from "../server.mjs";
import { u as useLang } from "./useLang.a3d07337.js";
import { u as useScreen, l as le, S as Size, a as ae, n as ne, r as re, b as ue } from "./useScreen.8f29b22a.js";
import { openBlock, createElementBlock, createElementVNode, defineComponent, ref, withCtx, createVNode, unref, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "ic-baseline-content-copy", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    const screen = useScreen();
    useHead(() => ({
      title: capitalize(t("pages.setting.title")),
      meta: [
        {
          name: "description",
          content: t("pages.setting.description")
        }
      ]
    }));
    const randomToken = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let token = "";
      for (let i = 0; i < 255; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return token;
    };
    const username = ref("viandwi24");
    const id = ref(randomToken());
    const enableSpamProtection = ref(false);
    const enableDirList = ref(false);
    const enableAdvancedSetting = ref(false);
    const validate = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username.value}`
        );
        if (response.status !== 200)
          throw new Error(
            `error when fetching username : ${response.statusText} (${response.status})`
          );
        const data = await response.json();
        alert(`Found Accout Name ${data.name} with id : ${data.id}`);
      } catch (err) {
        alert(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageSection = __nuxt_component_7;
      const _component_Alert = _sfc_main$1;
      const _component_PageHeader = __nuxt_component_4;
      const _component_PageTitle = _sfc_main$2;
      const _component_PageBody = __nuxt_component_6;
      const _component_Card = _sfc_main$3;
      const _component_CardContent = __nuxt_component_4$1;
      const _component_CardTitle = _sfc_main$4;
      const _component_FormTextInput = _sfc_main$5;
      const _component_CardFooter = __nuxt_component_10;
      const _component_Anchor = _sfc_main$6;
      const _component_Button = _sfc_main$7;
      const _component_icon_ic58baseline_content_copy = __unplugin_components_0;
      const _component_FormSwitch = _sfc_main$8;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageSection, { class: "mb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Alert, {
                    type: "success",
                    title: "This is a page for testing purposes",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    class: "mb-6"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Alert, {
                      type: "success",
                      title: "This is a page for testing purposes",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      class: "mb-6"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: _ctx.$t("pages.setting.title"),
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: _ctx.$t("pages.setting.title"),
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
                        _push4(ssrRenderComponent(unref(le), {
                          as: "div",
                          class: "flex flex-col md:flex-row md:space-x-4",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> General </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " General ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> Protection </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " Protection ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> Advanced </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " Advanced ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " General ", 2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " Protection ", 2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " Advanced ", 2)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(re), { class: "flex-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.validate_username.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormTextInput, {
                                                        modelValue: username.value,
                                                        "onUpdate:modelValue": ($event) => username.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        "prefix-disabled": withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="flex-1 px-4 py-2"${_scopeId9}>github.com/</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormTextInput, {
                                                            modelValue: username.value,
                                                            "onUpdate:modelValue": ($event) => username.value = $event,
                                                            class: "w-full md:w-1/3"
                                                          }, {
                                                            "prefix-disabled": withCtx(() => [
                                                              createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.validate_username.footer"))} `);
                                                      _push9(ssrRenderComponent(_component_Anchor, {
                                                        class: "underline font-bold capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_link"
                                                        ),
                                                        href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`</p>`);
                                                      _push9(ssrRenderComponent(_component_Button, {
                                                        class: "capitalize",
                                                        size: "sm",
                                                        type: "opposite",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_button"
                                                        ),
                                                        onClick: validate
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode("p", null, [
                                                          createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                          createVNode(_component_Anchor, {
                                                            class: "underline font-bold capitalize",
                                                            text: _ctx.$t(
                                                              "pages.setting.sections.validate_username.footer_link"
                                                            ),
                                                            href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                          }, null, 8, ["text"])
                                                        ]),
                                                        createVNode(_component_Button, {
                                                          class: "capitalize",
                                                          size: "sm",
                                                          type: "opposite",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.validate_username.footer_button"
                                                          ),
                                                          onClick: validate
                                                        }, null, 8, ["text"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormTextInput, {
                                                          modelValue: username.value,
                                                          "onUpdate:modelValue": ($event) => username.value = $event,
                                                          class: "w-full md:w-1/3"
                                                        }, {
                                                          "prefix-disabled": withCtx(() => [
                                                            createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, [
                                                        createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                        createVNode(_component_Anchor, {
                                                          class: "underline font-bold capitalize",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.validate_username.footer_link"
                                                          ),
                                                          href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                        }, null, 8, ["text"])
                                                      ]),
                                                      createVNode(_component_Button, {
                                                        class: "capitalize",
                                                        size: "sm",
                                                        type: "opposite",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_button"
                                                        ),
                                                        onClick: validate
                                                      }, null, 8, ["text"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.bot_id.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormTextInput, {
                                                        modelValue: id.value,
                                                        "onUpdate:modelValue": ($event) => id.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        suffix: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_Button, {
                                                              type: "opposite",
                                                              class: "flex space-x-1 border-none"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_icon_ic58baseline_content_copy, null, null, _parent11, _scopeId10));
                                                                  _push11(`<span${_scopeId10}>${ssrInterpolate(_ctx.$t("others.copy"))}</span>`);
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_icon_ic58baseline_content_copy),
                                                                    createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_Button, {
                                                                type: "opposite",
                                                                class: "flex space-x-1 border-none"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_icon_ic58baseline_content_copy),
                                                                  createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormTextInput, {
                                                            modelValue: id.value,
                                                            "onUpdate:modelValue": ($event) => id.value = $event,
                                                            class: "w-full md:w-1/3"
                                                          }, {
                                                            suffix: withCtx(() => [
                                                              createVNode(_component_Button, {
                                                                type: "opposite",
                                                                class: "flex space-x-1 border-none"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_icon_ic58baseline_content_copy),
                                                                  createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.bot_id.footer"))}</p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormTextInput, {
                                                          modelValue: id.value,
                                                          "onUpdate:modelValue": ($event) => id.value = $event,
                                                          class: "w-full md:w-1/3"
                                                        }, {
                                                          suffix: withCtx(() => [
                                                            createVNode(_component_Button, {
                                                              type: "opposite",
                                                              class: "flex space-x-1 border-none"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_icon_ic58baseline_content_copy),
                                                                createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormTextInput, {
                                                        modelValue: username.value,
                                                        "onUpdate:modelValue": ($event) => username.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        "prefix-disabled": withCtx(() => [
                                                          createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, [
                                                      createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                      createVNode(_component_Anchor, {
                                                        class: "underline font-bold capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_link"
                                                        ),
                                                        href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                      }, null, 8, ["text"])
                                                    ]),
                                                    createVNode(_component_Button, {
                                                      class: "capitalize",
                                                      size: "sm",
                                                      type: "opposite",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.validate_username.footer_button"
                                                      ),
                                                      onClick: validate
                                                    }, null, 8, ["text"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormTextInput, {
                                                        modelValue: id.value,
                                                        "onUpdate:modelValue": ($event) => id.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        suffix: withCtx(() => [
                                                          createVNode(_component_Button, {
                                                            type: "opposite",
                                                            class: "flex space-x-1 border-none"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_icon_ic58baseline_content_copy),
                                                              createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, {
                                            class: {
                                              "mb-4": true,
                                              "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                            }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.protection_spam.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableSpamProtection.value,
                                                        "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableSpamProtection.value,
                                                            "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.protection_spam.footer"))}</p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableSpamProtection.value,
                                                          "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, {
                                              class: {
                                                "mb-4": true,
                                                "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                              }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableSpamProtection.value,
                                                        "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.title"
                                                        )
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.description"
                                                      ))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableAdvancedSetting.value,
                                                        "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.advanced_enable_advanced.title"
                                                          )
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.description"
                                                        )), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableAdvancedSetting.value,
                                                            "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.title"
                                                        )
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.description"
                                                      )), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableAdvancedSetting.value,
                                                          "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_Card, {
                                            class: "mb-4",
                                            disabled: !enableAdvancedSetting.value
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t(
                                                        "pages.setting.sections.advanced_dir_listing.description"
                                                      ))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableDirList.value,
                                                        "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                        on: ""
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                          "pages.setting.sections.advanced_dir_listing.description"
                                                        )), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableDirList.value,
                                                            "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                            on: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                        "pages.setting.sections.advanced_dir_listing.description"
                                                      )), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableDirList.value,
                                                          "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                          on: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.title"
                                                      )
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                      "pages.setting.sections.advanced_enable_advanced.description"
                                                    )), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableAdvancedSetting.value,
                                                        "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Card, {
                                              class: "mb-4",
                                              disabled: !enableAdvancedSetting.value
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                      "pages.setting.sections.advanced_dir_listing.description"
                                                    )), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableDirList.value,
                                                        "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                        on: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormTextInput, {
                                                      modelValue: username.value,
                                                      "onUpdate:modelValue": ($event) => username.value = $event,
                                                      class: "w-full md:w-1/3"
                                                    }, {
                                                      "prefix-disabled": withCtx(() => [
                                                        createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, [
                                                    createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                    createVNode(_component_Anchor, {
                                                      class: "underline font-bold capitalize",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.validate_username.footer_link"
                                                      ),
                                                      href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                    }, null, 8, ["text"])
                                                  ]),
                                                  createVNode(_component_Button, {
                                                    class: "capitalize",
                                                    size: "sm",
                                                    type: "opposite",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.validate_username.footer_button"
                                                    ),
                                                    onClick: validate
                                                  }, null, 8, ["text"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormTextInput, {
                                                      modelValue: id.value,
                                                      "onUpdate:modelValue": ($event) => id.value = $event,
                                                      class: "w-full md:w-1/3"
                                                    }, {
                                                      suffix: withCtx(() => [
                                                        createVNode(_component_Button, {
                                                          type: "opposite",
                                                          class: "flex space-x-1 border-none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_icon_ic58baseline_content_copy),
                                                            createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, {
                                            class: {
                                              "mb-4": true,
                                              "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableSpamProtection.value,
                                                      "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.advanced_enable_advanced.title"
                                                    )
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                    "pages.setting.sections.advanced_enable_advanced.description"
                                                  )), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableAdvancedSetting.value,
                                                      "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Card, {
                                            class: "mb-4",
                                            disabled: !enableAdvancedSetting.value
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                    "pages.setting.sections.advanced_dir_listing.description"
                                                  )), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableDirList.value,
                                                      "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                      on: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " General ", 2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " Protection ", 2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " Advanced ", 2)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(re), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormTextInput, {
                                                    modelValue: username.value,
                                                    "onUpdate:modelValue": ($event) => username.value = $event,
                                                    class: "w-full md:w-1/3"
                                                  }, {
                                                    "prefix-disabled": withCtx(() => [
                                                      createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, [
                                                  createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                  createVNode(_component_Anchor, {
                                                    class: "underline font-bold capitalize",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.validate_username.footer_link"
                                                    ),
                                                    href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                  }, null, 8, ["text"])
                                                ]),
                                                createVNode(_component_Button, {
                                                  class: "capitalize",
                                                  size: "sm",
                                                  type: "opposite",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.validate_username.footer_button"
                                                  ),
                                                  onClick: validate
                                                }, null, 8, ["text"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormTextInput, {
                                                    modelValue: id.value,
                                                    "onUpdate:modelValue": ($event) => id.value = $event,
                                                    class: "w-full md:w-1/3"
                                                  }, {
                                                    suffix: withCtx(() => [
                                                      createVNode(_component_Button, {
                                                        type: "opposite",
                                                        class: "flex space-x-1 border-none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_icon_ic58baseline_content_copy),
                                                          createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, {
                                          class: {
                                            "mb-4": true,
                                            "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableSpamProtection.value,
                                                    "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["class"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.advanced_enable_advanced.title"
                                                  )
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                  "pages.setting.sections.advanced_enable_advanced.description"
                                                )), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableAdvancedSetting.value,
                                                    "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Card, {
                                          class: "mb-4",
                                          disabled: !enableAdvancedSetting.value
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                  "pages.setting.sections.advanced_dir_listing.description"
                                                )), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableDirList.value,
                                                    "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                    on: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(le), {
                            as: "div",
                            class: "flex flex-col md:flex-row md:space-x-4",
                            vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " General ", 2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " Protection ", 2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " Advanced ", 2)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(re), { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.validate_username.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormTextInput, {
                                                  modelValue: username.value,
                                                  "onUpdate:modelValue": ($event) => username.value = $event,
                                                  class: "w-full md:w-1/3"
                                                }, {
                                                  "prefix-disabled": withCtx(() => [
                                                    createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, [
                                                createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                createVNode(_component_Anchor, {
                                                  class: "underline font-bold capitalize",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.validate_username.footer_link"
                                                  ),
                                                  href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                }, null, 8, ["text"])
                                              ]),
                                              createVNode(_component_Button, {
                                                class: "capitalize",
                                                size: "sm",
                                                type: "opposite",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.validate_username.footer_button"
                                                ),
                                                onClick: validate
                                              }, null, 8, ["text"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.bot_id.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormTextInput, {
                                                  modelValue: id.value,
                                                  "onUpdate:modelValue": ($event) => id.value = $event,
                                                  class: "w-full md:w-1/3"
                                                }, {
                                                  suffix: withCtx(() => [
                                                    createVNode(_component_Button, {
                                                      type: "opposite",
                                                      class: "flex space-x-1 border-none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_icon_ic58baseline_content_copy),
                                                        createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, {
                                        class: {
                                          "mb-4": true,
                                          "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableSpamProtection.value,
                                                  "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.advanced_enable_advanced.title"
                                                )
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                "pages.setting.sections.advanced_enable_advanced.description"
                                              )), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableAdvancedSetting.value,
                                                  "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Card, {
                                        class: "mb-4",
                                        disabled: !enableAdvancedSetting.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                "pages.setting.sections.advanced_dir_listing.description"
                                              )), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableDirList.value,
                                                  "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                  on: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
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
                          class: "flex flex-col md:flex-row md:space-x-4",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " General ", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " Protection ", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " Advanced ", 2)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(re), { class: "flex-1" }, {
                              default: withCtx(() => [
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.validate_username.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormTextInput, {
                                                modelValue: username.value,
                                                "onUpdate:modelValue": ($event) => username.value = $event,
                                                class: "w-full md:w-1/3"
                                              }, {
                                                "prefix-disabled": withCtx(() => [
                                                  createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, [
                                              createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                              createVNode(_component_Anchor, {
                                                class: "underline font-bold capitalize",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.validate_username.footer_link"
                                                ),
                                                href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                              }, null, 8, ["text"])
                                            ]),
                                            createVNode(_component_Button, {
                                              class: "capitalize",
                                              size: "sm",
                                              type: "opposite",
                                              text: _ctx.$t(
                                                "pages.setting.sections.validate_username.footer_button"
                                              ),
                                              onClick: validate
                                            }, null, 8, ["text"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.bot_id.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormTextInput, {
                                                modelValue: id.value,
                                                "onUpdate:modelValue": ($event) => id.value = $event,
                                                class: "w-full md:w-1/3"
                                              }, {
                                                suffix: withCtx(() => [
                                                  createVNode(_component_Button, {
                                                    type: "opposite",
                                                    class: "flex space-x-1 border-none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_icon_ic58baseline_content_copy),
                                                      createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, {
                                      class: {
                                        "mb-4": true,
                                        "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableSpamProtection.value,
                                                "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["class"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t(
                                                "pages.setting.sections.advanced_enable_advanced.title"
                                              )
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                              "pages.setting.sections.advanced_enable_advanced.description"
                                            )), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableAdvancedSetting.value,
                                                "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Card, {
                                      class: "mb-4",
                                      disabled: !enableAdvancedSetting.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                              "pages.setting.sections.advanced_dir_listing.description"
                                            )), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableDirList.value,
                                                "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                on: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                })
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
              createVNode(_component_PageSection, { class: "mb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Alert, {
                    type: "success",
                    title: "This is a page for testing purposes",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    class: "mb-6"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    text: _ctx.$t("pages.setting.title"),
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(unref(le), {
                        as: "div",
                        class: "flex flex-col md:flex-row md:space-x-4",
                        vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " General ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " Protection ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " Advanced ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(re), { class: "flex-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.validate_username.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormTextInput, {
                                              modelValue: username.value,
                                              "onUpdate:modelValue": ($event) => username.value = $event,
                                              class: "w-full md:w-1/3"
                                            }, {
                                              "prefix-disabled": withCtx(() => [
                                                createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, [
                                            createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                            createVNode(_component_Anchor, {
                                              class: "underline font-bold capitalize",
                                              text: _ctx.$t(
                                                "pages.setting.sections.validate_username.footer_link"
                                              ),
                                              href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                            }, null, 8, ["text"])
                                          ]),
                                          createVNode(_component_Button, {
                                            class: "capitalize",
                                            size: "sm",
                                            type: "opposite",
                                            text: _ctx.$t(
                                              "pages.setting.sections.validate_username.footer_button"
                                            ),
                                            onClick: validate
                                          }, null, 8, ["text"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.bot_id.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormTextInput, {
                                              modelValue: id.value,
                                              "onUpdate:modelValue": ($event) => id.value = $event,
                                              class: "w-full md:w-1/3"
                                            }, {
                                              suffix: withCtx(() => [
                                                createVNode(_component_Button, {
                                                  type: "opposite",
                                                  class: "flex space-x-1 border-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_icon_ic58baseline_content_copy),
                                                    createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, {
                                    class: {
                                      "mb-4": true,
                                      "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableSpamProtection.value,
                                              "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t(
                                              "pages.setting.sections.advanced_enable_advanced.title"
                                            )
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                            "pages.setting.sections.advanced_enable_advanced.description"
                                          )), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableAdvancedSetting.value,
                                              "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Card, {
                                    class: "mb-4",
                                    disabled: !enableAdvancedSetting.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                            "pages.setting.sections.advanced_dir_listing.description"
                                          )), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableDirList.value,
                                              "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                              on: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                _: 1
                              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bak/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=setting.374d3ab3.js.map
