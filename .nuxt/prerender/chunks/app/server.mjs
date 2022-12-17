import { toRef, isRef, computed, defineAsyncComponent, defineComponent, inject, provide, h as h$2, Suspense, Transition, reactive, Text, resolveComponent, useSSRContext, watch, useSlots, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString as toDisplayString$1, createVNode, resolveDynamicComponent, getCurrentInstance, onUnmounted, shallowRef, ref, withAsyncContext, toRefs, cloneVNode, Fragment as Fragment$1, onMounted, watchEffect, Teleport, nextTick, toRaw, openBlock, createBlock, createCommentVNode, createElementBlock, renderList, withModifiers, onErrorCaptured, onServerPrefetch, markRaw, createApp, effectScope, isReactive, createElementVNode } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import { withoutTrailingSlash, joinURL, hasProtocol, isEqual, withLeadingSlash, parseURL, withBase } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import { createHooks } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/unctx@2.1.0/node_modules/unctx/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.39/node_modules/vue-router/dist/vue-router.node.mjs';
import destr from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import { createError as createError$1, sendRedirect, appendHeader } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import defu, { defuFn } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/defu@6.1.1/node_modules/defu/dist/defu.mjs';
import { isFunction as isFunction$1 } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@vue+shared@3.2.39/node_modules/@vue/shared/index.js';
import { pascalCase } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/scule@0.3.2/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js';
import htmlTags from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderVNode, ssrRenderClass, ssrRenderDynamicModel, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle, ssrRenderTeleport, ssrRenderSuspense } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue@3.2.39/node_modules/vue/server-renderer/index.mjs';
import { hash, isEqual as isEqual$1 } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import { parse as parse$1, serialize } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import { CompileErrorCodes, createCompileError } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@intlify+message-compiler@9.3.0-beta.10/node_modules/@intlify/message-compiler/dist/message-compiler.mjs';
import { VueDevToolsLabels, VueDevToolsPlaceholders, VueDevToolsTimelineColors } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@intlify+vue-devtools@9.2.2/node_modules/@intlify/vue-devtools/index.mjs';
import axios from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/axios@1.2.0/node_modules/axios/index.js';
import Toast, { useToast, POSITION } from 'file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/vue-toastification@2.0.0-rc.5_vue@3.2.39/node_modules/vue-toastification/dist/index.cjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_d = (_c = options.lazy) != null ? _c : options.defer) != null ? _d : false;
  options.initialCache = (_e2 = options.initialCache) != null ? _e2 : true;
  options.immediate = (_f = options.immediate) != null ? _f : true;
  const nuxt = useNuxtApp();
  const useInitialCache = () => (nuxt.isHydrating || options.initialCache) && nuxt.payload.data[key] !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(useInitialCache() ? nuxt.payload.data[key] : (_h = (_g = options.default) == null ? void 0 : _g.call(options)) != null ? _h : null),
      pending: ref(!useInitialCache()),
      error: ref((_i = nuxt.payload._errors[key]) != null ? _i : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual$1(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse$1(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h$2(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h$2("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = defineNuxtLink({ componentName: "NuxtLink" });
const nuxtLink = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineNuxtLink,
  default: __nuxt_component_0$2
}, Symbol.toStringTag, { value: "Module" }));
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction$1(meta2) ? computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
function useMeta(meta2) {
  return useHead(meta2);
}
const components = {
  Tab: defineAsyncComponent(() => Promise.resolve().then(() => Tab).then((c2) => c2.default || c2)),
  Tabs: defineAsyncComponent(() => Promise.resolve().then(() => Tabs).then((c2) => c2.default || c2)),
  ContentDoc: defineAsyncComponent(() => Promise.resolve().then(() => ContentDoc).then((c2) => c2.default || c2)),
  ContentList: defineAsyncComponent(() => Promise.resolve().then(() => ContentList).then((c2) => c2.default || c2)),
  ContentNavigation: defineAsyncComponent(() => Promise.resolve().then(() => ContentNavigation).then((c2) => c2.default || c2)),
  ContentQuery: defineAsyncComponent(() => Promise.resolve().then(() => ContentQuery).then((c2) => c2.default || c2)),
  ContentRenderer: defineAsyncComponent(() => Promise.resolve().then(() => ContentRenderer).then((c2) => c2.default || c2)),
  ContentRendererMarkdown: defineAsyncComponent(() => Promise.resolve().then(() => ContentRendererMarkdown).then((c2) => c2.default || c2)),
  ContentSlot: defineAsyncComponent(() => Promise.resolve().then(() => ContentSlot).then((c2) => c2.default || c2)),
  DocumentDrivenEmpty: defineAsyncComponent(() => Promise.resolve().then(() => DocumentDrivenEmpty).then((c2) => c2.default || c2)),
  DocumentDrivenNotFound: defineAsyncComponent(() => Promise.resolve().then(() => DocumentDrivenNotFound).then((c2) => c2.default || c2)),
  Markdown: defineAsyncComponent(() => Promise.resolve().then(() => Markdown).then((c2) => c2.default || c2)),
  ProseA: defineAsyncComponent(() => Promise.resolve().then(() => ProseA).then((c2) => c2.default || c2)),
  ProseBlockquote: defineAsyncComponent(() => Promise.resolve().then(() => ProseBlockquote$1).then((c2) => c2.default || c2)),
  ProseCode: defineAsyncComponent(() => Promise.resolve().then(() => ProseCode$1).then((c2) => c2.default || c2)),
  ProseCodeInline: defineAsyncComponent(() => Promise.resolve().then(() => ProseCodeInline$1).then((c2) => c2.default || c2)),
  ProseEm: defineAsyncComponent(() => Promise.resolve().then(() => ProseEm$1).then((c2) => c2.default || c2)),
  ProseH1: defineAsyncComponent(() => Promise.resolve().then(() => ProseH1$1).then((c2) => c2.default || c2)),
  ProseH2: defineAsyncComponent(() => Promise.resolve().then(() => ProseH2).then((c2) => c2.default || c2)),
  ProseH3: defineAsyncComponent(() => Promise.resolve().then(() => ProseH3).then((c2) => c2.default || c2)),
  ProseH4: defineAsyncComponent(() => Promise.resolve().then(() => ProseH4).then((c2) => c2.default || c2)),
  ProseH5: defineAsyncComponent(() => Promise.resolve().then(() => ProseH5$1).then((c2) => c2.default || c2)),
  ProseH6: defineAsyncComponent(() => Promise.resolve().then(() => ProseH6$1).then((c2) => c2.default || c2)),
  ProseHr: defineAsyncComponent(() => Promise.resolve().then(() => ProseHr$1).then((c2) => c2.default || c2)),
  ProseImg: defineAsyncComponent(() => Promise.resolve().then(() => ProseImg).then((c2) => c2.default || c2)),
  ProseLi: defineAsyncComponent(() => Promise.resolve().then(() => ProseLi$1).then((c2) => c2.default || c2)),
  ProseOl: defineAsyncComponent(() => Promise.resolve().then(() => ProseOl$1).then((c2) => c2.default || c2)),
  ProseP: defineAsyncComponent(() => Promise.resolve().then(() => ProseP$1).then((c2) => c2.default || c2)),
  ProseStrong: defineAsyncComponent(() => Promise.resolve().then(() => ProseStrong$1).then((c2) => c2.default || c2)),
  ProseTable: defineAsyncComponent(() => Promise.resolve().then(() => ProseTable$1).then((c2) => c2.default || c2)),
  ProseTbody: defineAsyncComponent(() => Promise.resolve().then(() => ProseTbody$1).then((c2) => c2.default || c2)),
  ProseTd: defineAsyncComponent(() => Promise.resolve().then(() => ProseTd$1).then((c2) => c2.default || c2)),
  ProseTh: defineAsyncComponent(() => Promise.resolve().then(() => ProseTh$1).then((c2) => c2.default || c2)),
  ProseThead: defineAsyncComponent(() => Promise.resolve().then(() => ProseThead$1).then((c2) => c2.default || c2)),
  ProseTr: defineAsyncComponent(() => Promise.resolve().then(() => ProseTr$1).then((c2) => c2.default || c2)),
  ProseUl: defineAsyncComponent(() => Promise.resolve().then(() => ProseUl$1).then((c2) => c2.default || c2))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "renderPriority" || key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagDeduper = (tag) => {
  if (!["meta", "base", "script", "link"].includes(tag.tag)) {
    return false;
  }
  const { props, tag: tagName } = tag;
  if (tagName === "base") {
    return true;
  }
  if (tagName === "link" && props.rel === "canonical") {
    return { propValue: "canonical" };
  }
  if (props.charset) {
    return { propKey: "charset" };
  }
  const name = ["key", "id", "name", "property", "http-equiv"];
  for (const n2 of name) {
    let value = void 0;
    if (typeof props.getAttribute === "function" && props.hasAttribute(n2)) {
      value = props.getAttribute(n2);
    } else {
      value = props[n2];
    }
    if (value !== void 0) {
      return { propValue: n2 };
    }
  }
  return false;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: { key: "default", ...obj[key] } });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: unref(item) });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i2 = 0; i2 < bodyMetaElements.length; i2++) {
      if (bodyMetaElements[i2] && ((_a = bodyMetaElements[i2].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i2]);
      }
    }
  }
  if (headCountEl) {
    for (let i2 = 0, j2 = headCountEl.previousElementSibling; i2 < headCount; i2++, j2 = (j2 == null ? void 0 : j2.previousElementSibling) || null) {
      if (((_b = j2 == null ? void 0 : j2.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j2);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i2 = 0; i2 < oldHeadElements.length; i2++) {
      const oldEl = oldHeadElements[i2];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i2, 1);
        return false;
      }
    }
    for (let i2 = 0; i2 < oldBodyElements.length; i2++) {
      const oldEl = oldBodyElements[i2];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i2, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t2) => {
    var _a2;
    return (_a2 = t2.parentNode) == null ? void 0 : _a2.removeChild(t2);
  });
  oldHeadElements.forEach((t2) => {
    var _a2;
    return (_a2 = t2.parentNode) == null ? void 0 : _a2.removeChild(t2);
  });
  newElements.forEach((t2) => {
    if (t2.body === true) {
      body.insertAdjacentElement("beforeend", t2.element);
    } else {
      head.insertBefore(t2.element, headCountEl);
    }
  });
  headCountEl.setAttribute(
    "content",
    "" + (headCount - oldHeadElements.length + newElements.filter((t2) => !t2.body).length)
  );
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app2) {
      app2.config.globalProperties.$head = head;
      app2.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i2) => unref(i2).titleTemplate).reverse().find((i2) => i2 != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(unref(objs));
        tags.forEach((tag) => {
          const dedupe = getTagDeduper(tag);
          if (dedupe) {
            let index2 = -1;
            for (let i2 = 0; i2 < deduped.length; i2++) {
              const prev = deduped[i2];
              if (prev.tag !== tag.tag) {
                continue;
              }
              if (dedupe === true) {
                index2 = i2;
              } else if (dedupe.propValue && unref(prev.props[dedupe.propValue]) === unref(tag.props[dedupe.propValue])) {
                index2 = i2;
              } else if (dedupe.propKey && prev.props[dedupe.propKey] && tag.props[dedupe.propKey]) {
                index2 = i2;
              }
              if (index2 !== -1) {
                break;
              }
            }
            if (index2 !== -1) {
              deduped.splice(index2, 1);
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(
              titleTemplate,
              tag.props.children
            );
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags.sort(sortTags)) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i2) => previousTags.add(i2));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  if (tag.props.renderPriority) {
    delete tag.props.renderPriority;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    if (tag.props.renderPriority) {
      return tag.props.renderPriority;
    }
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset) {
          return -2;
        }
        if (tag.props["http-equiv"] === "content-security-policy") {
          return 0;
        }
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags.sort(sortTags)) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs({
        ...htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return stringifyAttrs({
        ...bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_head_runtime_lib_vueuse_head_plugin_mjs_nzKSmV8JZs = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title$3 = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_2, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((props) => {
    const meta2 = { ...props };
    if (meta2.httpEquiv) {
      meta2["http-equiv"] = meta2.httpEquiv;
      delete meta2.httpEquiv;
    }
    return {
      meta: [meta2]
    };
  })
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body$2 = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title: Title$3,
  Meta,
  Style,
  Head,
  Html,
  Body: Body$2
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [{ "hid": "description", "name": "description", "content": "Foody" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }], "style": [], "script": [], "noscript": [], "title": "Foody", "titleTemplate": "%s - Foody", "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_head_runtime_plugin_mjs_WViAl4E7Ge = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r2) => {
    var _a;
    return ((_a = route.params[r2.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m2) => {
    var _a2;
    return ((_a2 = m2.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h$2(component, props === true ? {} : props, slots) : h$2(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h$2(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              isNested && nuxtApp.isHydrating ? h$2(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h$2(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h$2(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h$2(props.routeProps.Component);
    };
  }
});
const layouts = {
  dashboard: defineAsyncComponent(() => import('./_nuxt/dashboard.424a27d7.mjs').then((m2) => m2.default || m2)),
  page: defineAsyncComponent(() => import('./_nuxt/page.a507b876.mjs').then((m2) => m2.default || m2))
};
const __nuxt_component_0$1 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout2 = (_b = (_a = isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout2 && layout2 in layouts;
      const transitionProps = (_c = route.meta.layoutTransition) != null ? _c : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => {
          return _wrapIf(layouts[layout2], hasLayout, context.slots).default();
        }
      }).default();
    };
  }
});
const layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$1
}, Symbol.toStringTag, { value: "Module" }));
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const _sfc_main$1c = defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    components: {
      type: Object,
      default: () => ({})
    }
  },
  async setup(props) {
    var _a;
    const { content: { tags = {} } } = useRuntimeConfig().public;
    await resolveContentComponents(props.value.body, {
      tags: {
        ...tags,
        ...((_a = props.value) == null ? void 0 : _a._components) || {},
        ...props.components
      }
    });
    return { tags };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, components: components2 } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (ctx.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta2 = {
      ...value,
      tags: {
        ...tags,
        ...(value == null ? void 0 : value._components) || {},
        ...components2
      }
    };
    let component = meta2.component || tag;
    if (typeof meta2.component === "object") {
      component = meta2.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, h$2, meta2));
    return h$2(
      component,
      {
        ...(_a = meta2.component) == null ? void 0 : _a.props,
        ...this.$attrs
      },
      {
        default: createSlotFunction(children)
      }
    );
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  var _a;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[originalTag] || originalTag;
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    renderSlots(node, h2, documentMeta, { ...parentScope, ...props })
  );
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a;
  const data = {
    ...parentScope,
    $route: () => useRoute(),
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return {};
  }, data);
  return h2(Text, value);
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta, parentProps));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...(node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = (node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slotEntries = Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]);
  return Object.fromEntries(slotEntries);
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v2) => typeof v2 === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number2 = (d2) => +d2;
  const trim = (d2) => d2.trim();
  const noop2 = (d2) => d2;
  const mods = key.replace(rxModel, "").split(".").filter((d2) => d2).reduce((d2, k2) => {
    d2[k2] = true;
    return d2;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number2 : mods.trim ? trim : noop2;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e2) => documentMeta[value] = processor(e2);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code2, context) {
  const result = code2.split(".").reduce((o2, k2) => typeof o2 === "object" ? o2[k2] : void 0, context);
  return typeof result === "undefined" ? destr(code2) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => mergeTextNodes(nodes) : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta2) {
  const components2 = Array.from(new Set(loadComponents(body, meta2)));
  await Promise.all(components2.map(async (c2) => {
    const resolvedComponent = resolveComponent(c2);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    var _a;
    if (node.type === "text" || node.tag === "binding") {
      return [];
    }
    const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
    const components22 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components22.push(renderTag);
    }
    for (const child of node.children || []) {
      components22.push(...loadComponents(child, documentMeta));
    }
    return components22;
  }
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const ContentRendererMarkdown = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1b = defineComponent({
  name: "ContentRenderer",
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        var _a, _b, _c;
        if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
          console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    if (!value && (slots == null ? void 0 : slots.empty)) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if (value && (value == null ? void 0 : value._type) === "markdown" && ((_b = (_a = value == null ? void 0 : value.body) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) {
      return h$2(
        _sfc_main$1c,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h$2(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const ContentRenderer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1a = defineComponent({
  name: "DocumentDrivenEmpty",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  render({ value }) {
    return h$2("div", void 0, [
      h$2("p", "Document is empty"),
      h$2("p", `Add content to it by opening ${value._source}/${value._file} file.`)
    ]);
  }
});
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const DocumentDrivenEmpty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$19 = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h$2("div", "Document not found");
  }
});
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const DocumentDrivenNotFound = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$19
}, Symbol.toStringTag, { value: "Module" }));
const useContentState = () => {
  const pages = useState("dd-pages", () => ({}));
  const surrounds = useState("dd-surrounds", () => ({}));
  const navigation = useState("dd-navigation");
  const globals = useState("dd-globals", () => ({}));
  return {
    pages,
    surrounds,
    navigation,
    globals
  };
};
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState();
  const _path = computed(() => withoutTrailingSlash(useRoute().path));
  const page = computed(() => pages.value[_path.value]);
  const surround = computed(() => surrounds.value[_path.value]);
  const toc = computed(() => {
    var _a, _b;
    return (_b = (_a = page == null ? void 0 : page.value) == null ? void 0 : _a.body) == null ? void 0 : _b.toc;
  });
  const type = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.type;
  });
  const excerpt = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.excerpt;
  });
  const layout2 = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.layout;
  });
  const next = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[1];
  });
  const prev = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[0];
  });
  return {
    globals,
    navigation,
    surround,
    page,
    excerpt,
    toc,
    type,
    layout: layout2,
    next,
    prev
  };
};
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
    }
    head.meta = [...head.meta || []];
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m2) => m2.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m2) => m2.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          content: image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            head.meta.push({
              property: "og:image",
              content: image[key]
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const meta$b = void 0;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$18 = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 relative py-8" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Wrapper.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$u]]);
const Wrapper = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const defaultStyle = `
  cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
`;
    const styles = reactive({
      none: "",
      primary: "text-white bg-primary-500 hover:bg-primary-400 border-primary-500",
      secondary: "text-slate-700 bg-blue-500 hover:bg-blue-400 border-blue-500 dark:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-600",
      danger: "text-white bg-red-500 border-red-500 hover:bg-red-400 dark:text-white dark:border-red-500 dark:bg-red-500 dark:hover:bg-red-400",
      warning: "text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-400 dark:text-white dark:border-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400",
      opposite: "text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white"
    });
    const sizes = reactive({
      lg: "h-13 px-8 text-lg rounded-lg",
      md: "h-10 px-6 text-base rounded",
      sm: "h-9 px-4 text-sm rounded",
      xs: "h-6 px-2 text-xs rounded"
    });
    const selectedStyle = computed(() => styles[props.type] || styles.primary);
    const selectedSize = computed(() => sizes[props.size] || sizes.lg);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: __props.to,
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`
        }, _attrs), {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString$1(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`,
          href: __props.href
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$17
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "Error",
  __ssrInlineRender: true,
  props: {
    code: {
      type: Number,
      default: 400
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const PageWrapper = __nuxt_component_3;
    const errorsMap = {
      "400": "Bad Request",
      "401": "Unauthorized",
      "403": "Forbidden",
      "404": "Not Found"
    };
    const error = computed(() => {
      const { code: code2 } = props;
      return {
        code: code2,
        message: errorsMap[code2.toString()] || "Unknown Error"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$17;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.wrap ? unref(PageWrapper) : "div"), mergeProps({
        class: props.wrap ? "flex flex-col items-center justify-center" : ""
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center mb-6 leading-3"${_scopeId}><span class="font-bold text-8xl block"${_scopeId}>${ssrInterpolate(unref(error).code)}</span><span class="block italic"${_scopeId}>${ssrInterpolate(unref(error).message)}</span></h1>`);
            _push2(ssrRenderComponent(_component_Button, {
              text: "Home",
              to: "/",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-center mb-6 leading-3" }, [
                createVNode("span", { class: "font-bold text-8xl block" }, toDisplayString$1(unref(error).code), 1),
                createVNode("span", { class: "block italic" }, toDisplayString$1(unref(error).message), 1)
              ]),
              createVNode(_component_Button, {
                text: "Home",
                to: "/",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Error.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const Error$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$16
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign$1 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject$1(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i2 = 0; i2 < lines.length; i2++) {
    count += lines[i2].length + 1;
    if (count >= start) {
      for (let j2 = i2 - RANGE; j2 <= i2 + RANGE || end > count; j2++) {
        if (j2 < 0 || j2 >= lines.length)
          continue;
        const line = j2 + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j2]}`);
        const lineLength = lines[j2].length;
        if (j2 === i2) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j2 > i2) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers2 = events.get(event);
      const added = handlers2 && handlers2.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers2 = events.get(event);
      if (handlers2) {
        handlers2.splice(handlers2.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b2 = str.charCodeAt(str.length - 1);
  return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c2;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c2 = path[index2];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache$1 = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache$1.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache$1.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages2) => {
    return messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject$1(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject$1(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    let msg = message(key)(ctx);
    if (type2 === "vnode" && isArray(msg) && modifier) {
      msg = msg[0];
    }
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: linked,
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version, meta2) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version,
    meta: meta2
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`
};
function getWarnMessage$1(code2, ...args) {
  return format(warnMessages$1[code2], ...args);
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject$1(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale = block[i2];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.2";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta2) => {
  _additionalMeta = meta2;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const version = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages2 = isPlainObject$1(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign$1({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$1(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale,
        key,
        type,
        groupId: `${type}:${key}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    if (isTranslateMissingWarn(missingWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
    }
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = () => ++code$2;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  INVALID_DATE_ARGUMENT: inc$2(),
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  __EXTEND_POINT__: inc$2()
};
function createCoreError(code2) {
  return createCompileError(code2, null, { messages: errorMessages$1 } );
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
};
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages2[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  if (isString(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
    return key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign$1({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    message = messages2[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isFunction(format2))
      break;
    const missingRet = handleMissing(
      context,
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format2 = missingRet;
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$1(arg3)) {
    assign$1(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("compile-error", {
            message: source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (!Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject$1(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject$1(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign$1({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e2) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (!Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject$1(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject$1(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign$1({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e2) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e2) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.2";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
let code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  NOT_SUPPORTED_PRESERVE: inc$1(),
  NOT_SUPPORTED_FORMATTER: inc$1(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  NOT_FOUND_PARENT_SCOPE: inc$1()
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`
};
function getWarnMessage(code2, ...args) {
  return format(warnMessages[code2], ...args);
}
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, { messages: errorMessages, args } );
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSLALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        currentObj = currentObj[subKeys[i2]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject$1(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages2 = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(globalThis.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages2[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta2 = null;
  return instance && (meta2 = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta2 } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$1(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject$1(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject$1(_context) ? _context.__numberFormatters : void 0;
    }
    {
      ctxOptions.__v_emitter = isPlainObject$1(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType
          }));
        }
        {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key,
              to: "global",
              groupId: `${warnType}:${key}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d2(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      (root) => root[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages3 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages3 = messageValue;
        break;
      }
    }
    return messages3;
  }
  function tm(key) {
    const messages3 = resolveMessages(key);
    return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign$1(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign$1(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d2;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject$1(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  if (options.formatter) {
    warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
  }
  if (options.preserveDirectiveContent) {
    warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  }
  let messages2 = options.messages;
  if (isPlainObject$1(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages3, locale2) => {
      const message = messages3[locale2] || (messages3[locale2] = {});
      assign$1(message, sharedMessages[locale2]);
      return messages3;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject$1(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject$1(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject$1(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject$1(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX));
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment$1;
}
const Translation = {
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h$2(tag, assignedAttrs, children);
    };
  }
};
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index2}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h$2(tag, assignedAttrs, children);
  };
}
const NumberFormat = {
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DatetimeFormat = {
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    if (modifiers.preserve) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
    }
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject$1(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app2, i18n, ...options) {
  const pluginOptions = isPlainObject$1(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall && useI18nComponentName) {
    warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    app2.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app2.component(NumberFormat.name, NumberFormat);
    app2.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app2.directive("t", vTDirective(i18n));
  }
}
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app2, i18n) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app: app2
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app2 && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app2 && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app2 && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels["vue-i18n-timeline"],
          color: VueDevToolsTimelineColors["vue-i18n-timeline"]
        });
        resolve(true);
      });
    } catch (e2) {
      console.error(e2);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages2) {
  const value = {};
  Object.keys(messages2).forEach((key) => {
    const v2 = messages2[key];
    if (isFunction(v2) && "source" in v2) {
      value[key] = getMessageFunctionDetails(v2);
    } else if (isObject(v2)) {
      value[key] = getLocaleMessageValue(v2);
    } else {
      value[key] = v2;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s2) {
  return s2.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a2) {
  return ESC[a2] || a2;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>\u0192</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
      if (this.$el && this.$i18n) {
        this.$el.__VUE_I18N__ = this.$i18n.__composer;
        const emitter = this.__v_emitter = createEmitter();
        const _vueI18n = this.$i18n;
        _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
        emitter.on("*", addTimelineEvent);
      }
    },
    unmounted() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      if (this.$el && this.$el.__VUE_I18N__) {
        if (this.__v_emitter) {
          this.__v_emitter.off("*", addTimelineEvent);
          delete this.__v_emitter;
        }
        if (this.$i18n) {
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages2 = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = __legacyMode ? !!options.allowComposition : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = makeSymbol("vue-i18n" );
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app2, ...options2) {
        {
          app2.__VUE_I18N__ = i18n;
        }
        app2.__VUE_I18N_SYMBOL__ = symbol;
        app2.provide(app2.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app2, i18n.global);
        }
        {
          apply(app2, i18n, ...options2);
        }
        if (__legacyMode) {
          app2.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        const unmountApp = app2.unmount;
        app2.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
        {
          const ret = await enableDevTools(app2, i18n);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  {
    if (i18n.mode === "legacy" && !options.__useComponent) {
      if (!i18n.allowComposition) {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
      }
      return useI18nForLegacy(instance, scope, global2, options);
    }
  }
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n.__deleteInstance(target);
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root, options = {}) {
  const isLocale = scope === "local";
  const _composer = shallowRef(null);
  if (isLocale && instance.proxy && !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    isLocale && _inheritLocale ? root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    isLocale && _inheritLocale ? root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  const _missingWarn = isLocale ? root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const _fallbackWarn = isLocale ? root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const _fallbackRoot = isLocale ? root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const _fallbackFormat = !!options.fallbackFormat;
  const _missing = isFunction(options.missing) ? options.missing : null;
  const _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const _warnHtmlMessage = isLocale ? root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  const _modifiers = isLocale ? root.modifiers : isPlainObject$1(options.modifiers) ? options.modifiers : {};
  const _pluralRules = options.pluralRules || isLocale && root.pluralRules;
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  const fallbackLocale = computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  const messages2 = computed(() => {
    if (_composer.value) {
      return _composer.value.messages.value;
    } else {
      return _messages.value;
    }
  });
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => "");
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : "";
  }
  function d2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => "");
  }
  function n2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => "");
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te(key, locale2) {
    return _composer.value ? _composer.value.te(key, locale2) : false;
  }
  function getLocaleMessage(locale2) {
    return _composer.value ? _composer.value.getLocaleMessage(locale2) : {};
  }
  function setLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale2, message);
      _messages.value[locale2] = message;
    }
  }
  function mergeLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale2, message);
    }
  }
  function getDateTimeFormat(locale2) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale2) : {};
  }
  function setDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale2, format2);
      _datetimeFormats.value[locale2] = format2;
    }
  }
  function mergeDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale2, format2);
    }
  }
  function getNumberFormat(locale2) {
    return _composer.value ? _composer.value.getNumberFormat(locale2) : {};
  }
  function setNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale2, format2);
      _numberFormats.value[locale2] = format2;
    }
  }
  function mergeNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale2, format2);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages: messages2,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t: t2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d: d2,
    n: n2,
    tm,
    te,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  return wrapper;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app2, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app2.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app2.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const meta$a = {
  layout: "page"
};
const _sfc_main$15 = defineComponent({
  layout: "dashboard"
});
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:px-8 px-4 mb-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Header.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$t]]);
const Header$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_4$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-4xl font-bold" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Title.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const Title$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$14
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$13 = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Body.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender$s]]);
const Body$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$12 = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "lg:px-8 px-4 mb-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</section>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Section/index.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$r]]);
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_7
}, Symbol.toStringTag, { value: "Module" }));
const meta$9 = {
  layout: "page"
};
const meta$8 = {
  layout: "dashboard"
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v2) => v2) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v2) => parseInt(String(v2), 10)),
    skip: $set("skip", (v2) => parseInt(String(v2), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, "/api/" + useRuntimeConfig().public.content.base);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.res.setHeader(
    "x-nitro-prerender",
    [
      event.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const createQueryFetch = (path) => (query) => {
  var _a;
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!((_a = query.params().sort) == null ? void 0 : _a.length)) {
    query.sort({ _file: 1, $numeric: true });
  }
  const params = query.params();
  const apiPath = withContentBase(`/query/${hash(params)}.json`);
  {
    addPrerenderPath(apiPath);
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    return createQuery(createQueryFetch(withLeadingSlash(joinURL(query, ...pathParts))));
  }
  return createQuery(createQueryFetch(), query);
}
const _sfc_main$11 = {
  __name: "Renderer",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      required: true
    },
    pageTitle: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      props.path,
      () => queryContent(props.path).findOne(),
      "$j3im94qGwg"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_3;
      const _component_PageHeader = __nuxt_component_4$1;
      const _component_PageTitle = _sfc_main$14;
      const _component_PageBody = __nuxt_component_6;
      const _component_PageSection = __nuxt_component_7;
      const _component_ContentRenderer = _sfc_main$1b;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: __props.pageTitle,
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: __props.pageTitle,
                      class: "capitalize"
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageBody, null, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ContentRenderer, { value: unref(data) }, null, 8, ["value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(_component_ContentRenderer, { value: unref(data) }, null, 8, ["value"])
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
                    text: __props.pageTitle,
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_ContentRenderer, { value: unref(data) }, null, 8, ["value"])
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
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Content/Renderer.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const Renderer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$11
}, Symbol.toStringTag, { value: "Module" }));
const meta$7 = {
  layout: "page"
};
const _sfc_main$10 = defineComponent({
  name: "ContentQuery",
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = toRefs(props);
    const isPartial = computed(() => {
      var _a;
      return (_a = path.value) == null ? void 0 : _a.includes("/_");
    });
    const { data, refresh } = await useAsyncData(
      `content-query-${hash(props)}`,
      () => {
        let queryBuilder;
        if (path.value) {
          queryBuilder = queryContent(path.value);
        } else {
          queryBuilder = queryContent();
        }
        if (only.value) {
          queryBuilder = queryBuilder.only(only.value);
        }
        if (without.value) {
          queryBuilder = queryBuilder.without(without.value);
        }
        if (where.value) {
          queryBuilder = queryBuilder.where(where.value);
        }
        if (sort.value) {
          queryBuilder = queryBuilder.sort(sort.value);
        }
        if (limit.value) {
          queryBuilder = queryBuilder.limit(limit.value);
        }
        if (skip.value) {
          queryBuilder = queryBuilder.skip(skip.value);
        }
        if (locale.value) {
          queryBuilder = queryBuilder.where({ _locale: locale.value });
        }
        if (find2.value === "one") {
          return queryBuilder.findOne();
        }
        if (find2.value === "surround") {
          if (!path.value) {
            console.warn("[Content] Surround queries requires `path` prop to be set.");
            console.warn("[Content] Query without `path` will return regular `find()` results.");
            return queryBuilder.find();
          }
          return queryBuilder.findSurround(path);
        }
        return queryBuilder.find();
      }
    );
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if ((data == null ? void 0 : data._type) === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h$2("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const ContentQuery = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$$ = defineComponent({
  name: "ContentDoc",
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    },
    head: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  render(ctx) {
    const slots = useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => h$2("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return h$2(
      _sfc_main$10,
      contentQueryProps,
      {
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
          var _a;
          if (head) {
            useContentHead(data);
          }
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { doc: data, refresh, isPartial, excerpt, ...this.$attrs });
        } : ({ data }) => {
          if (head) {
            useContentHead(data);
          }
          return h$2(
            _sfc_main$1b,
            { value: data, excerpt, tag, ...this.$attrs },
            { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) }
          );
        },
        empty: (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h$2("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
        },
        "not-found": (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h$2("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
        }
      }
    );
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const ContentDoc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$$
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$$;
  const _component_PageHeader = __nuxt_component_4$1;
  const _component_PageTitle = _sfc_main$14;
  const _component_PageBody = __nuxt_component_6;
  const _component_PageSection = __nuxt_component_7;
  const _component_ContentRenderer = _sfc_main$1b;
  const _component_Error = _sfc_main$16;
  _push(ssrRenderComponent(_component_ContentDoc, _attrs, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_PageTitle, {
                text: doc.title
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_PageTitle, {
                  text: doc.title
                }, null, 8, ["text"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PageBody, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_PageSection, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_PageSection, null, {
                  default: withCtx(() => [
                    createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PageHeader, null, {
            default: withCtx(() => [
              createVNode(_component_PageTitle, {
                text: doc.title
              }, null, 8, ["text"])
            ]),
            _: 2
          }, 1024),
          createVNode(_component_PageBody, null, {
            default: withCtx(() => [
              createVNode(_component_PageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    empty: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>Post in empty</h1>`);
      } else {
        return [
          createVNode("h1", null, "Post in empty")
        ];
      }
    }),
    "not-found": withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Error, {
          code: 404,
          wrap: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Error, {
            code: 404,
            wrap: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Content/Doc.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$q]]);
const Doc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = {
  layout: "page"
};
const _sfc_main$Z = defineComponent({
  name: "ContentList",
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => h$2("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return h$2(
      _sfc_main$10,
      contentQueryProps,
      {
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots == null ? void 0 : slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
        empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
        "not-found": (bindings) => {
          var _a;
          return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : ({ data }) => emptyNode("not-found", data);
        }
      }
    );
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const ContentList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "Anchor",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const href = toRef(props, "href");
    const to = toRef(props, "to");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      if (unref(to)) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: unref(to),
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`
        }, _attrs), {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString$1(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`,
          href: unref(href)
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Anchor.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const Anchor = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Y
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = {
  layout: "page"
};
const _hoisted_1$m = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",
  class: "clr-i-outline clr-i-outline-path-1"
}, null, -1);
const _hoisted_3$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  d: "M0 0h36v36H0z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$m,
  _hoisted_3$m
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_4$2);
}
const __unplugin_components_3$2 = { name: "clarity-times-line", render: render$m };
const _hoisted_1$l = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$l
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$l);
}
const __unplugin_components_2$3 = { name: "bi-exclamation-circle-fill", render: render$l };
const _hoisted_1$k = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z",
  class: "clr-i-solid clr-i-solid-path-1"
}, null, -1);
const _hoisted_3$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  d: "M0 0h36v36H0z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$k,
  _hoisted_3$k
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_4$1);
}
const __unplugin_components_1$4 = { name: "clarity-times-circle-solid", render: render$k };
const _hoisted_1$j = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$j);
}
const __unplugin_components_0$9 = { name: "mdi-check-circle", render: render$j };
function u$4(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$4), t2;
}
var R$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(R$1 || {}), O$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(O$1 || {});
function V$1({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = k$1(o2, e2), s2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return p$3(s2);
  if (t2 & 1) {
    let l2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$4(l2, { [0]() {
      return null;
    }, [1]() {
      return p$3({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return p$3(s2);
}
function p$3({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var y2;
  let { as: n2, ...s2 } = w$2(r2, ["unmount", "static"]), a2 = (y2 = e2.default) == null ? void 0 : y2.call(e2, o2), l2 = {};
  if (o2) {
    let f2 = false, u2 = [];
    for (let [d2, c2] of Object.entries(o2))
      typeof c2 == "boolean" && (f2 = true), c2 === true && u2.push(d2);
    f2 && (l2["data-headlessui-state"] = u2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = g$3(a2), Object.keys(s2).length > 0 || Object.keys(t2).length > 0) {
      let [f2, ...u2] = a2 != null ? a2 : [];
      if (!x$2(f2) || u2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s2).concat(Object.keys(t2)).sort((d2, c2) => d2.localeCompare(c2)).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
      return cloneVNode(f2, Object.assign({}, s2, l2));
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$2(n2, Object.assign({}, s2, l2), a2);
}
function g$3(r2) {
  return r2.flatMap((t2) => t2.type === Fragment$1 ? g$3(t2.children) : [t2]);
}
function k$1(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...s2) {
      let a2 = e2[i2];
      for (let l2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        l2(n2, ...s2);
      }
    } });
  return t2;
}
function P$3(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function w$2(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function x$2(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let e$3 = 0;
function n$2() {
  return ++e$3;
}
function t$1() {
  return n$2();
}
var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
function f$3(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$1 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$1 || {});
function x$1(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i2, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$3(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function o$1(n2) {
  var l2;
  return n2 == null || n2.value == null ? null : (l2 = n2.value.$el) != null ? l2 : n2.value;
}
let n$1 = Symbol("Context");
var l$2 = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(l$2 || {});
function f$2() {
  return p$2() !== null;
}
function p$2() {
  return inject(n$1, null);
}
function c$1(o2) {
  provide(n$1, o2);
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function b$2(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o2;
    n2.value || !o$1(e2) || o$1(e2) instanceof HTMLButtonElement && !((o2 = o$1(e2)) != null && o2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function m$2(r2) {
  return null;
}
function p$1({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = m$2();
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
let m$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M || {}), N = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(N || {}), b$1 = ((r2) => (r2[r2.Previous = -1] = "Previous", r2[r2.Next = 1] = "Next", r2))(b$1 || {});
function E$1(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(m$1));
}
var F$2 = ((r2) => (r2[r2.Strict = 0] = "Strict", r2[r2.Loose = 1] = "Loose", r2))(F$2 || {});
function h$1(e2, t2 = 0) {
  var r2;
  return e2 === ((r2 = m$2()) == null ? void 0 : r2.body) ? false : u$4(t2, { [0]() {
    return e2.matches(m$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(m$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function D$1(e2) {
  let t2 = m$2();
  nextTick(() => {
    t2 && !h$1(t2.activeElement, 0) && w$1(e2);
  });
}
function w$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$1 = ["textarea", "input"].join(",");
function S$2(e2) {
  var t2, r2;
  return (r2 = (t2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : t2.call(e2, H$1)) != null ? r2 : false;
}
function O(e2, t2 = (r2) => r2) {
  return e2.slice().sort((r2, l2) => {
    let o2 = t2(r2), s2 = t2(l2);
    if (o2 === null || s2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(s2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$2(e2, t2) {
  return P$2(E$1(), t2, true, e2);
}
function P$2(e2, t2, r2 = true, l2 = null) {
  var c2;
  let o2 = (c2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? c2 : document, s2 = Array.isArray(e2) ? r2 ? O(e2) : e2 : E$1(e2);
  l2 = l2 != null ? l2 : o2.activeElement;
  let n2 = (() => {
    if (t2 & 5)
      return 1;
    if (t2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (t2 & 1)
      return 0;
    if (t2 & 2)
      return Math.max(0, s2.indexOf(l2)) - 1;
    if (t2 & 4)
      return Math.max(0, s2.indexOf(l2)) + 1;
    if (t2 & 8)
      return s2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = t2 & 32 ? { preventScroll: true } : {}, a2 = 0, i2 = s2.length, u2;
  do {
    if (a2 >= i2 || a2 + i2 <= 0)
      return 0;
    let f2 = x2 + a2;
    if (t2 & 16)
      f2 = (f2 + i2) % i2;
    else {
      if (f2 < 0)
        return 3;
      if (f2 >= i2)
        return 1;
    }
    u2 = s2[f2], u2 == null || u2.focus(p2), a2 += n2;
  } while (u2 !== o2.activeElement);
  return t2 & 6 && S$2(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
function y(a2, f2, l2 = computed(() => true)) {
  ref(null);
}
var a = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return V$1({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function e$1(n2 = {}, r2 = null, t2 = []) {
  for (let [i2, o2] of Object.entries(n2))
    f(t2, s$2(r2, i2), o2);
  return t2;
}
function s$2(n2, r2) {
  return n2 ? n2 + "[" + r2 + "]" : r2;
}
function f(n2, r2, t2) {
  if (Array.isArray(t2))
    for (let [i2, o2] of t2.entries())
      f(n2, s$2(r2, i2.toString()), o2);
  else
    t2 instanceof Date ? n2.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n2.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n2.push([r2, t2]) : typeof t2 == "number" ? n2.push([r2, `${t2}`]) : t2 == null ? n2.push([r2, ""]) : e$1(t2, r2, n2);
}
function d$3(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
var d$2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$2 || {});
function n() {
  let o2 = ref(0);
  return o2;
}
function E(n2, e2, o2, r2) {
}
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
var h = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(h || {});
let ee = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(u2, { attrs: a$12, slots: t2, expose: r2 }) {
  let n$12 = ref(null);
  r2({ el: n$12, $el: n$12 });
  let o2 = computed(() => m$2());
  A$1({ ownerDocument: o2 }, computed(() => Boolean(u2.features & 16)));
  let e2 = C({ ownerDocument: o2, container: n$12, initialFocus: computed(() => u2.initialFocus) }, computed(() => Boolean(u2.features & 2)));
  _$1({ ownerDocument: o2, container: n$12, containers: u2.containers, previousActiveElement: e2 }, computed(() => Boolean(u2.features & 8)));
  let s2 = n();
  function i2() {
    let l2 = o$1(n$12);
    !l2 || u$4(s2.value, { [d$2.Forwards]: () => P$2(l2, M.First), [d$2.Backwards]: () => P$2(l2, M.Last) });
  }
  return () => {
    let l2 = {}, c2 = { ref: n$12 }, { features: f2, initialFocus: p2, containers: U, ...y2 } = u2;
    return h$2(Fragment$1, [Boolean(f2 & 4) && h$2(f$1, { as: "button", type: "button", onFocus: i2, features: a.Focusable }), V$1({ ourProps: c2, theirProps: { ...a$12, ...y2 }, slot: l2, attrs: a$12, slots: t2, name: "FocusTrap" }), Boolean(f2 & 4) && h$2(f$1, { as: "button", type: "button", onFocus: i2, features: a.Focusable })]);
  };
} }), { features: h });
function A$1({ ownerDocument: u2 }, a2) {
  let t2 = ref(null);
  function r2() {
    var o2;
    t2.value || (t2.value = (o2 = u2.value) == null ? void 0 : o2.activeElement);
  }
  function n2() {
    !t2.value || (w$1(t2.value), t2.value = null);
  }
  onMounted(() => {
    watch(a2, (o2, e2) => {
      o2 !== e2 && (o2 ? r2() : n2());
    }, { immediate: true });
  }), onUnmounted(n2);
}
function C({ ownerDocument: u2, container: a2, initialFocus: t$12 }, r2) {
  let n2 = ref(null), o2 = ref(false);
  return onMounted(() => o2.value = true), onUnmounted(() => o2.value = false), onMounted(() => {
    watch([a2, t$12, r2], (e2, s2) => {
      if (e2.every((l2, c2) => (s2 == null ? void 0 : s2[c2]) === l2) || !r2.value)
        return;
      let i2 = o$1(a2);
      !i2 || t(() => {
        var f2, p2;
        if (!o2.value)
          return;
        let l2 = o$1(t$12), c2 = (f2 = u2.value) == null ? void 0 : f2.activeElement;
        if (l2) {
          if (l2 === c2) {
            n2.value = c2;
            return;
          }
        } else if (i2.contains(c2)) {
          n2.value = c2;
          return;
        }
        l2 ? w$1(l2) : P$2(i2, M.First | M.NoScroll) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n2.value = (p2 = u2.value) == null ? void 0 : p2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), n2;
}
function _$1({ ownerDocument: u2, container: a2, containers: t2, previousActiveElement: r2 }, n2) {
  var o2;
  E((o2 = u2.value) == null ? void 0 : o2.defaultView);
}
let l$1 = "body > *", i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
function u$3(t2) {
  t2.setAttribute("aria-hidden", "true"), t2.inert = true;
}
function s$1(t2) {
  let n2 = r.get(t2);
  !n2 || (n2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", n2["aria-hidden"]), t2.inert = n2.inert);
}
function g$2(t2, n2 = ref(true)) {
  watchEffect((d2) => {
    if (!n2.value || !t2.value)
      return;
    let a2 = t2.value, o2 = m$2();
    if (!!o2) {
      i.add(a2);
      for (let e2 of r.keys())
        e2.contains(a2) && (s$1(e2), r.delete(e2));
      o2.querySelectorAll(l$1).forEach((e2) => {
        if (e2 instanceof HTMLElement) {
          for (let f2 of i)
            if (e2.contains(f2))
              return;
          i.size === 1 && (r.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), u$3(e2));
        }
      }), d2(() => {
        if (i.delete(a2), i.size > 0)
          o2.querySelectorAll(l$1).forEach((e2) => {
            if (e2 instanceof HTMLElement && !r.has(e2)) {
              for (let f2 of i)
                if (e2.contains(f2))
                  return;
              r.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), u$3(e2);
            }
          });
        else
          for (let e2 of r.keys())
            s$1(e2), r.delete(e2);
      });
    }
  });
}
let e = Symbol("ForcePortalRootContext");
function u$2() {
  return inject(e, false);
}
let P$1 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return V$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
function c(t2) {
  let r2 = m$2();
  if (!r2) {
    if (t2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t2}`);
  }
  let o2 = r2.getElementById("headlessui-portal-root");
  if (o2)
    return o2;
  let e2 = r2.createElement("div");
  return e2.setAttribute("id", "headlessui-portal-root"), r2.body.appendChild(e2);
}
let R = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t2, { slots: r2, attrs: o2 }) {
  let e2 = ref(null), p2 = computed(() => m$2()), n2 = u$2(), u2 = inject(g$1, null), l2 = ref(n2 === true || u2 == null ? c(e2.value) : u2.resolveTarget());
  return watchEffect(() => {
    n2 || u2 != null && (l2.value = u2.resolveTarget());
  }), onUnmounted(() => {
    var i2, m2;
    let a2 = (i2 = p2.value) == null ? void 0 : i2.getElementById("headlessui-portal-root");
    !a2 || l2.value === a2 && l2.value.children.length <= 0 && ((m2 = l2.value.parentElement) == null || m2.removeChild(l2.value));
  }), () => {
    if (l2.value === null)
      return null;
    let a2 = { ref: e2, "data-headlessui-portal": "" };
    return h$2(Teleport, { to: l2.value }, V$1({ ourProps: a2, theirProps: t2, slot: {}, attrs: o2, slots: r2, name: "Portal" }));
  };
} }), g$1 = Symbol("PortalGroupContext"), L$1 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t2, { attrs: r2, slots: o2 }) {
  let e2 = reactive({ resolveTarget() {
    return t2.target;
  } });
  return provide(g$1, e2), () => {
    let { target: p2, ...n2 } = t2;
    return V$1({ theirProps: n2, ourProps: {}, slot: {}, attrs: r2, slots: o2, name: "PortalGroup" });
  };
} });
let u$1 = Symbol("StackContext");
var p = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(p || {});
function v() {
  return inject(u$1, () => {
  });
}
function S$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = v();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function b() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function P({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e2 = ref([]);
  function n2(r2) {
    return e2.value.push(r2), () => {
      let i2 = e2.value.indexOf(r2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: n2, slot: t2, name: o2, props: s2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(t2, { attrs: o2, slots: s2 }) {
  let e2 = b(), n2 = `headlessui-description-${t$1()}`;
  return onMounted(() => onUnmounted(e2.register(n2))), () => {
    let { name: r2 = "Description", slot: i2 = ref({}), props: l2 = {} } = e2, c2 = t2, d2 = { ...Object.entries(l2).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: n2 };
    return V$1({ ourProps: d2, theirProps: c2, slot: i2.value, attrs: o2, slots: s2, name: r2 });
  };
} });
function s() {
  let a2 = [], i2 = [], t2 = { enqueue(e2) {
    i2.push(e2);
  }, addEventListener(e2, n2, o2, r2) {
    return e2.addEventListener(n2, o2, r2), t2.add(() => e2.removeEventListener(n2, o2, r2));
  }, requestAnimationFrame(...e2) {
    let n2 = requestAnimationFrame(...e2);
    t2.add(() => cancelAnimationFrame(n2));
  }, nextFrame(...e2) {
    t2.requestAnimationFrame(() => {
      t2.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let n2 = setTimeout(...e2);
    t2.add(() => clearTimeout(n2));
  }, add(e2) {
    a2.push(e2);
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  }, async workQueue() {
    for (let e2 of i2.splice(0))
      await e2();
  } };
  return t2;
}
function o() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var De = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(De || {});
let j = Symbol("DialogContext");
function T(a2) {
  let u2 = inject(j, null);
  if (u2 === null) {
    let t2 = new Error(`<${a2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, T), t2;
  }
  return u2;
}
let k = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ne = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: k }, initialFocus: { type: Object, default: null } }, emits: { close: (a2) => true }, setup(a$12, { emit: u2, attrs: t2, slots: s$12, expose: i2 }) {
  var A2;
  let g2 = ref(false);
  onMounted(() => {
    g2.value = true;
  });
  let r2 = ref(0), d2 = p$2(), S2 = computed(() => a$12.open === k && d2 !== null ? u$4(d2.value, { [l$2.Open]: true, [l$2.Closed]: false }) : a$12.open), x2 = ref(/* @__PURE__ */ new Set()), m2 = ref(null), B2 = ref(null), I = computed(() => m$2());
  if (i2({ el: m2, $el: m2 }), !(a$12.open !== k || d2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof S2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${S2.value === k ? void 0 : a$12.open}`);
  let f2 = computed(() => g2.value && S2.value ? 0 : 1), H2 = computed(() => f2.value === 0), C2 = computed(() => r2.value > 1), G2 = inject(j, null) !== null, z = computed(() => C2.value ? "parent" : "leaf");
  g$2(m2, computed(() => C2.value ? H2.value : false)), S$1({ type: "Dialog", enabled: computed(() => f2.value === 0), element: m2, onUpdate: (o2, l2, n2) => {
    if (l2 === "Dialog")
      return u$4(o2, { [p.Add]() {
        x2.value.add(n2), r2.value += 1;
      }, [p.Remove]() {
        x2.value.delete(n2), r2.value -= 1;
      } });
  } });
  let J = P({ name: "DialogDescription", slot: computed(() => ({ open: S2.value })) }), Q = `headlessui-dialog-${t$1()}`, E$12 = ref(null), O2 = { titleId: E$12, panelRef: ref(null), dialogState: f2, setTitleId(o2) {
    E$12.value !== o2 && (E$12.value = o2);
  }, close() {
    u2("close", false);
  } };
  return provide(j, O2), y(() => {
    var l2, n2, p2;
    return [...Array.from((n2 = (l2 = I.value) == null ? void 0 : l2.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? n2 : []).filter((e2) => !(!(e2 instanceof HTMLElement) || e2.contains(o$1(B2)) || O2.panelRef.value && e2.contains(O2.panelRef.value))), (p2 = O2.panelRef.value) != null ? p2 : m2.value];
  }, (o2, l2) => {
    O2.close(), nextTick(() => l2 == null ? void 0 : l2.focus());
  }, computed(() => f2.value === 0 && !C2.value)), E((A2 = I.value) == null ? void 0 : A2.defaultView), watchEffect((o$12) => {
    var W;
    if (f2.value !== 0 || G2)
      return;
    let l2 = I.value;
    if (!l2)
      return;
    let n2 = s();
    function p2(v2, b2, X2) {
      let Z = v2.style.getPropertyValue(b2);
      return Object.assign(v2.style, { [b2]: X2 }), n2.add(() => {
        Object.assign(v2.style, { [b2]: Z });
      });
    }
    let e2 = l2 == null ? void 0 : l2.documentElement, L2 = ((W = l2.defaultView) != null ? W : window).innerWidth - e2.clientWidth;
    if (p2(e2, "overflow", "hidden"), L2 > 0) {
      let v2 = e2.clientWidth - e2.offsetWidth, b2 = L2 - v2;
      p2(e2, "paddingRight", `${b2}px`);
    }
    if (o()) {
      let v2 = window.pageYOffset;
      p2(e2, "position", "fixed"), p2(e2, "marginTop", `-${v2}px`), p2(e2, "width", "100%"), n2.add(() => window.scrollTo(0, v2));
    }
    o$12(n2.dispose);
  }), watchEffect((o2) => {
    if (f2.value !== 0)
      return;
    let l2 = o$1(m2);
    if (!l2)
      return;
    let n2 = new IntersectionObserver((p2) => {
      for (let e2 of p2)
        e2.boundingClientRect.x === 0 && e2.boundingClientRect.y === 0 && e2.boundingClientRect.width === 0 && e2.boundingClientRect.height === 0 && O2.close();
    });
    n2.observe(l2), o2(() => n2.disconnect());
  }), () => {
    let o2 = { ...t2, ref: m2, id: Q, role: "dialog", "aria-modal": f2.value === 0 ? true : void 0, "aria-labelledby": E$12.value, "aria-describedby": J.value }, { open: l2, initialFocus: n2, ...p2 } = a$12, e2 = { open: f2.value === 0 };
    return h$2(P$1, { force: true }, () => [h$2(R, () => h$2(L$1, { target: m2.value }, () => h$2(P$1, { force: false }, () => h$2(ee, { initialFocus: n2, containers: x2, features: H2.value ? u$4(z.value, { parent: ee.features.RestoreFocus, leaf: ee.features.All & ~ee.features.FocusLock }) : ee.features.None }, () => V$1({ ourProps: o2, theirProps: p2, slot: e2, attrs: t2, slots: s$12, visible: f2.value === 0, features: R$1.RenderStrategy | R$1.Static, name: "Dialog" }))))), h$2(f$1, { features: a.Hidden, ref: B2 })]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: u2, slots: t2 }) {
  let s2 = T("DialogOverlay"), i2 = `headlessui-dialog-overlay-${t$1()}`;
  function g2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s2.close());
  }
  return () => V$1({ ourProps: { id: i2, "aria-hidden": true, onClick: g2 }, theirProps: a2, slot: { open: s2.dialogState.value === 0 }, attrs: u2, slots: t2, name: "DialogOverlay" });
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: false, setup(a2, { attrs: u2, slots: t2, expose: s2 }) {
  let i2 = T("DialogBackdrop"), g2 = `headlessui-dialog-backdrop-${t$1()}`, r2 = ref(null);
  return s2({ el: r2, $el: r2 }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let d2 = a2, S2 = { id: g2, ref: r2, "aria-hidden": true };
    return h$2(P$1, { force: true }, () => h$2(R, () => V$1({ ourProps: S2, theirProps: { ...u2, ...d2 }, slot: { open: i2.dialogState.value === 0 }, attrs: u2, slots: t2, name: "DialogBackdrop" })));
  };
} });
let _e = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: u2, slots: t2, expose: s2 }) {
  let i2 = T("DialogPanel"), g2 = `headlessui-dialog-panel-${t$1()}`;
  s2({ el: i2.panelRef, $el: i2.panelRef });
  function r2(d2) {
    d2.stopPropagation();
  }
  return () => {
    let d2 = { id: g2, ref: i2.panelRef, onClick: r2 };
    return V$1({ ourProps: d2, theirProps: a2, slot: { open: i2.dialogState.value === 0 }, attrs: u2, slots: t2, name: "DialogPanel" });
  };
} }), Ue = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(a2, { attrs: u2, slots: t2 }) {
  let s2 = T("DialogTitle"), i2 = `headlessui-dialog-title-${t$1()}`;
  return onMounted(() => {
    s2.setTitleId(i2), onUnmounted(() => s2.setTitleId(null));
  }), () => V$1({ ourProps: { id: i2 }, theirProps: a2, slot: { open: s2.dialogState.value === 0 }, attrs: u2, slots: t2, name: "DialogTitle" });
} });
function ue$1(o2, m2) {
  return o2 === m2;
}
var re = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(re || {}), se$1 = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(se$1 || {}), de = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(de || {});
function fe$1(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let H = Symbol("ListboxContext");
function V(o2) {
  let m2 = inject(H, null);
  if (m2 === null) {
    let l2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, V), l2;
  }
  return m2;
}
let Me = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => ue$1 }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: m2, attrs: l2, emit: L2 }) {
  let e2 = ref(1), p2 = ref(null), s2 = ref(null), O$12 = ref(null), d2 = ref([]), S2 = ref(""), t2 = ref(null), i2 = ref(1);
  function k2(a2 = (n2) => n2) {
    let n2 = t2.value !== null ? d2.value[t2.value] : null, u2 = O(a2(d2.value.slice()), (y2) => o$1(y2.dataRef.domRef)), c2 = n2 ? u2.indexOf(n2) : null;
    return c2 === -1 && (c2 = null), { options: u2, activeOptionIndex: c2 };
  }
  let h2 = computed(() => o2.multiple ? 1 : 0), [w2, r2] = d$3(computed(() => o2.modelValue), (a2) => L2("update:modelValue", a2), computed(() => o2.defaultValue)), f2 = { listboxState: e2, value: w2, mode: h2, compare(a2, n2) {
    if (typeof o2.by == "string") {
      let u2 = o2.by;
      return (a2 == null ? void 0 : a2[u2]) === (n2 == null ? void 0 : n2[u2]);
    }
    return o2.by(a2, n2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: p2, buttonRef: s2, optionsRef: O$12, disabled: computed(() => o2.disabled), options: d2, searchQuery: S2, activeOptionIndex: t2, activationTrigger: i2, closeListbox() {
    o2.disabled || e2.value !== 1 && (e2.value = 1, t2.value = null);
  }, openListbox() {
    o2.disabled || e2.value !== 0 && (e2.value = 0);
  }, goToOption(a2, n2, u2) {
    if (o2.disabled || e2.value === 1)
      return;
    let c2 = k2(), y2 = x$1(a2 === a$1.Specific ? { focus: a$1.Specific, id: n2 } : { focus: a2 }, { resolveItems: () => c2.options, resolveActiveIndex: () => c2.activeOptionIndex, resolveId: (T2) => T2.id, resolveDisabled: (T2) => T2.dataRef.disabled });
    S2.value = "", t2.value = y2, i2.value = u2 != null ? u2 : 1, d2.value = c2.options;
  }, search(a2) {
    if (o2.disabled || e2.value === 1)
      return;
    let u2 = S2.value !== "" ? 0 : 1;
    S2.value += a2.toLowerCase();
    let y2 = (t2.value !== null ? d2.value.slice(t2.value + u2).concat(d2.value.slice(0, t2.value + u2)) : d2.value).find((A2) => A2.dataRef.textValue.startsWith(S2.value) && !A2.dataRef.disabled), T2 = y2 ? d2.value.indexOf(y2) : -1;
    T2 === -1 || T2 === t2.value || (t2.value = T2, i2.value = 1);
  }, clearSearch() {
    o2.disabled || e2.value !== 1 && S2.value !== "" && (S2.value = "");
  }, registerOption(a2, n2) {
    let u2 = k2((c2) => [...c2, { id: a2, dataRef: n2 }]);
    d2.value = u2.options, t2.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n2 = k2((u2) => {
      let c2 = u2.findIndex((y2) => y2.id === a2);
      return c2 !== -1 && u2.splice(c2, 1), u2;
    });
    d2.value = n2.options, t2.value = n2.activeOptionIndex, i2.value = 1;
  }, select(a2) {
    o2.disabled || r2(u$4(h2.value, { [0]: () => a2, [1]: () => {
      let n2 = toRaw(f2.value.value).slice(), u2 = toRaw(a2), c2 = n2.findIndex((y2) => f2.compare(u2, toRaw(y2)));
      return c2 === -1 ? n2.push(u2) : n2.splice(c2, 1), n2;
    } }));
  } };
  return y([s2, O$12], (a2, n2) => {
    var u2;
    f2.closeListbox(), h$1(n2, F$2.Loose) || (a2.preventDefault(), (u2 = o$1(s2)) == null || u2.focus());
  }, computed(() => e2.value === 0)), provide(H, f2), c$1(computed(() => u$4(e2.value, { [0]: l$2.Open, [1]: l$2.Closed }))), () => {
    let { name: a$12, modelValue: n2, disabled: u2, ...c2 } = o2, y2 = { open: e2.value === 0, disabled: u2, value: w2.value };
    return h$2(Fragment$1, [...a$12 != null && w2.value != null ? e$1({ [a$12]: w2.value }).map(([T2, A2]) => h$2(f$1, P$3({ features: a.Hidden, key: T2, as: "input", type: "hidden", hidden: true, readOnly: true, name: T2, value: A2 }))) : [], V$1({ ourProps: {}, theirProps: { ...l2, ...w$2(c2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: y2, slots: m2, attrs: l2, name: "Listbox" })]);
  };
} }), Pe = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(o2, { attrs: m2, slots: l2 }) {
  let L2 = V("ListboxLabel"), e2 = `headlessui-listbox-label-${t$1()}`;
  function p2() {
    var s2;
    (s2 = o$1(L2.buttonRef)) == null || s2.focus({ preventScroll: true });
  }
  return () => {
    let s2 = { open: L2.listboxState.value === 0, disabled: L2.disabled.value }, O2 = { id: e2, ref: L2.labelRef, onClick: p2 };
    return V$1({ ourProps: O2, theirProps: o2, slot: s2, attrs: m2, slots: l2, name: "ListboxLabel" });
  };
} }), Ie$1 = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(o2, { attrs: m2, slots: l2, expose: L2 }) {
  let e2 = V("ListboxButton"), p2 = `headlessui-listbox-button-${t$1()}`;
  L2({ el: e2.buttonRef, $el: e2.buttonRef });
  function s2(t2) {
    switch (t2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        t2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$1(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.First);
        });
        break;
      case o$2.ArrowUp:
        t2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$1(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.Last);
        });
        break;
    }
  }
  function O2(t2) {
    switch (t2.key) {
      case o$2.Space:
        t2.preventDefault();
        break;
    }
  }
  function d2(t2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })) : (t2.preventDefault(), e2.openListbox(), fe$1(() => {
      var i2;
      return (i2 = o$1(e2.optionsRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })));
  }
  let S2 = b$2(computed(() => ({ as: o2.as, type: m2.type })), e2.buttonRef);
  return () => {
    var k2, h2;
    let t2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, i2 = { ref: e2.buttonRef, id: p2, type: S2.value, "aria-haspopup": true, "aria-controls": (k2 = o$1(e2.optionsRef)) == null ? void 0 : k2.id, "aria-expanded": e2.disabled.value ? void 0 : e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o$1(e2.labelRef)) == null ? void 0 : h2.id, p2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: s2, onKeyup: O2, onClick: d2 };
    return V$1({ ourProps: i2, theirProps: o2, slot: t2, attrs: m2, slots: l2, name: "ListboxButton" });
  };
} }), Ve = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(o2, { attrs: m2, slots: l2, expose: L2 }) {
  let e2 = V("ListboxOptions"), p2 = `headlessui-listbox-options-${t$1()}`, s2 = ref(null);
  L2({ el: e2.optionsRef, $el: e2.optionsRef });
  function O2(t2) {
    switch (s2.value && clearTimeout(s2.value), t2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$2.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        }));
        break;
      case u$4(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a$1.Next);
      case u$4(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a$1.First);
      case o$2.End:
      case o$2.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a$1.Last);
      case o$2.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        t2.preventDefault(), t2.stopPropagation();
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), s2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let d2 = p$2(), S2 = computed(() => d2 !== null ? d2.value === l$2.Open : e2.listboxState.value === 0);
  return () => {
    var h2, w2, r2, f2;
    let t2 = { open: e2.listboxState.value === 0 }, i2 = { "aria-activedescendant": e2.activeOptionIndex.value === null || (h2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : h2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (f2 = (w2 = o$1(e2.labelRef)) == null ? void 0 : w2.id) != null ? f2 : (r2 = o$1(e2.buttonRef)) == null ? void 0 : r2.id, "aria-orientation": e2.orientation.value, id: p2, onKeydown: O2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return V$1({ ourProps: i2, theirProps: o2, slot: t2, attrs: m2, slots: l2, features: R$1.RenderStrategy | R$1.Static, visible: S2.value, name: "ListboxOptions" });
  };
} }), Ae = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(o2, { slots: m2, attrs: l2, expose: L2 }) {
  let e2 = V("ListboxOption"), p2 = `headlessui-listbox-option-${t$1()}`, s2 = ref(null);
  L2({ el: s2, $el: s2 });
  let O2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === p2 : false), d2 = computed(() => u$4(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((r2) => e2.compare(toRaw(r2), toRaw(o2.value))) })), S2 = computed(() => u$4(e2.mode.value, { [1]: () => {
    var f2;
    let r2 = toRaw(e2.value.value);
    return ((f2 = e2.options.value.find((a2) => r2.some((n2) => e2.compare(toRaw(n2), toRaw(a2.dataRef.value))))) == null ? void 0 : f2.id) === p2;
  }, [0]: () => d2.value })), t2 = computed(() => ({ disabled: o2.disabled, value: o2.value, textValue: "", domRef: s2 }));
  onMounted(() => {
    var f2, a2;
    let r2 = (a2 = (f2 = o$1(s2)) == null ? void 0 : f2.textContent) == null ? void 0 : a2.toLowerCase().trim();
    r2 !== void 0 && (t2.value.textValue = r2);
  }), onMounted(() => e2.registerOption(p2, t2)), onUnmounted(() => e2.unregisterOption(p2)), onMounted(() => {
    watch([e2.listboxState, d2], () => {
      e2.listboxState.value === 0 && (!d2.value || u$4(e2.mode.value, { [1]: () => {
        S2.value && e2.goToOption(a$1.Specific, p2);
      }, [0]: () => {
        e2.goToOption(a$1.Specific, p2);
      } }));
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && (!O2.value || e2.activationTrigger.value !== 0 && nextTick(() => {
      var r2, f2;
      return (f2 = (r2 = o$1(s2)) == null ? void 0 : r2.scrollIntoView) == null ? void 0 : f2.call(r2, { block: "nearest" });
    }));
  });
  function i2(r2) {
    if (o2.disabled)
      return r2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var f2;
      return (f2 = o$1(e2.buttonRef)) == null ? void 0 : f2.focus({ preventScroll: true });
    }));
  }
  function k2() {
    if (o2.disabled)
      return e2.goToOption(a$1.Nothing);
    e2.goToOption(a$1.Specific, p2);
  }
  function h2() {
    o2.disabled || O2.value || e2.goToOption(a$1.Specific, p2, 0);
  }
  function w2() {
    o2.disabled || !O2.value || e2.goToOption(a$1.Nothing);
  }
  return () => {
    let { disabled: r2 } = o2, f2 = { active: O2.value, selected: d2.value, disabled: r2 }, a2 = { id: p2, ref: s2, role: "option", tabIndex: r2 === true ? void 0 : -1, "aria-disabled": r2 === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: i2, onFocus: k2, onPointermove: h2, onMousemove: h2, onPointerleave: w2, onMouseleave: w2 };
    return V$1({ ourProps: a2, theirProps: w$2(o2, ["value", "disabled"]), slot: f2, attrs: l2, slots: m2, name: "ListboxOption" });
  };
} });
var G = ((i2) => (i2[i2.Open = 0] = "Open", i2[i2.Closed = 1] = "Closed", i2))(G || {}), X = ((i2) => (i2[i2.Pointer = 0] = "Pointer", i2[i2.Other = 1] = "Other", i2))(X || {});
function Y(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let A = Symbol("MenuContext");
function D(o2) {
  let S2 = inject(A, null);
  if (S2 === null) {
    let i2 = new Error(`<${o2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i2, D), i2;
  }
  return S2;
}
let ve = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(o2, { slots: S2, attrs: i2 }) {
  let v2 = ref(1), e2 = ref(null), p2 = ref(null), u2 = ref([]), m2 = ref(""), d2 = ref(null), I = ref(1);
  function l2(r2 = (a2) => a2) {
    let a2 = d2.value !== null ? u2.value[d2.value] : null, n2 = O(r2(u2.value.slice()), (b2) => o$1(b2.dataRef.domRef)), s2 = a2 ? n2.indexOf(a2) : null;
    return s2 === -1 && (s2 = null), { items: n2, activeItemIndex: s2 };
  }
  let t2 = { menuState: v2, buttonRef: e2, itemsRef: p2, items: u2, searchQuery: m2, activeItemIndex: d2, activationTrigger: I, closeMenu: () => {
    v2.value = 1, d2.value = null;
  }, openMenu: () => v2.value = 0, goToItem(r2, a2, n2) {
    let s2 = l2(), b2 = x$1(r2 === a$1.Specific ? { focus: a$1.Specific, id: a2 } : { focus: r2 }, { resolveItems: () => s2.items, resolveActiveIndex: () => s2.activeItemIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m2.value = "", d2.value = b2, I.value = n2 != null ? n2 : 1, u2.value = s2.items;
  }, search(r2) {
    let n2 = m2.value !== "" ? 0 : 1;
    m2.value += r2.toLowerCase();
    let b2 = (d2.value !== null ? u2.value.slice(d2.value + n2).concat(u2.value.slice(0, d2.value + n2)) : u2.value).find((w2) => w2.dataRef.textValue.startsWith(m2.value) && !w2.dataRef.disabled), h2 = b2 ? u2.value.indexOf(b2) : -1;
    h2 === -1 || h2 === d2.value || (d2.value = h2, I.value = 1);
  }, clearSearch() {
    m2.value = "";
  }, registerItem(r2, a2) {
    let n2 = l2((s2) => [...s2, { id: r2, dataRef: a2 }]);
    u2.value = n2.items, d2.value = n2.activeItemIndex, I.value = 1;
  }, unregisterItem(r2) {
    let a2 = l2((n2) => {
      let s2 = n2.findIndex((b2) => b2.id === r2);
      return s2 !== -1 && n2.splice(s2, 1), n2;
    });
    u2.value = a2.items, d2.value = a2.activeItemIndex, I.value = 1;
  } };
  return y([e2, p2], (r2, a2) => {
    var n2;
    t2.closeMenu(), h$1(a2, F$2.Loose) || (r2.preventDefault(), (n2 = o$1(e2)) == null || n2.focus());
  }, computed(() => v2.value === 0)), provide(A, t2), c$1(computed(() => u$4(v2.value, { [0]: l$2.Open, [1]: l$2.Closed }))), () => {
    let r2 = { open: v2.value === 0 };
    return V$1({ ourProps: {}, theirProps: o2, slot: r2, slots: S2, attrs: i2, name: "Menu" });
  };
} }), Ie = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" } }, setup(o2, { attrs: S2, slots: i2, expose: v2 }) {
  let e2 = D("MenuButton"), p2 = `headlessui-menu-button-${t$1()}`;
  v2({ el: e2.buttonRef, $el: e2.buttonRef });
  function u2(l2) {
    switch (l2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$1(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(a$1.First);
        });
        break;
      case o$2.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$1(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(a$1.Last);
        });
        break;
    }
  }
  function m2(l2) {
    switch (l2.key) {
      case o$2.Space:
        l2.preventDefault();
        break;
    }
  }
  function d2(l2) {
    o2.disabled || (e2.menuState.value === 0 ? (e2.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$1(e2.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e2.openMenu(), Y(() => {
      var t2;
      return (t2 = o$1(e2.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let I = b$2(computed(() => ({ as: o2.as, type: S2.type })), e2.buttonRef);
  return () => {
    var a2;
    let l2 = { open: e2.menuState.value === 0 }, t2 = { ref: e2.buttonRef, id: p2, type: I.value, "aria-haspopup": true, "aria-controls": (a2 = o$1(e2.itemsRef)) == null ? void 0 : a2.id, "aria-expanded": o2.disabled ? void 0 : e2.menuState.value === 0, onKeydown: u2, onKeyup: m2, onClick: d2 };
    return V$1({ ourProps: t2, theirProps: o2, slot: l2, attrs: S2, slots: i2, name: "MenuButton" });
  };
} }), ge = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(o2, { attrs: S2, slots: i2, expose: v2 }) {
  let e2 = D("MenuItems"), p2 = `headlessui-menu-items-${t$1()}`, u2 = ref(null);
  v2({ el: e2.itemsRef, $el: e2.itemsRef }), p$1({ container: computed(() => o$1(e2.itemsRef)), enabled: computed(() => e2.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function m2(t2) {
    var r2;
    switch (u2.value && clearTimeout(u2.value), t2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$2.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeItemIndex.value !== null) {
          let n2 = e2.items.value[e2.activeItemIndex.value];
          (r2 = o$1(n2.dataRef.domRef)) == null || r2.click();
        }
        e2.closeMenu(), D$1(o$1(e2.buttonRef));
        break;
      case o$2.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(a$1.Next);
      case o$2.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(a$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(a$1.First);
      case o$2.End:
      case o$2.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(a$1.Last);
      case o$2.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => {
          var a2;
          return (a2 = o$1(e2.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => v$2(o$1(e2.buttonRef), t2.shiftKey ? M.Previous : M.Next));
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), u2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  function d2(t2) {
    switch (t2.key) {
      case o$2.Space:
        t2.preventDefault();
        break;
    }
  }
  let I = p$2(), l2 = computed(() => I !== null ? I.value === l$2.Open : e2.menuState.value === 0);
  return () => {
    var n2, s2;
    let t2 = { open: e2.menuState.value === 0 }, r2 = { "aria-activedescendant": e2.activeItemIndex.value === null || (n2 = e2.items.value[e2.activeItemIndex.value]) == null ? void 0 : n2.id, "aria-labelledby": (s2 = o$1(e2.buttonRef)) == null ? void 0 : s2.id, id: p2, onKeydown: m2, onKeyup: d2, role: "menu", tabIndex: 0, ref: e2.itemsRef };
    return V$1({ ourProps: r2, theirProps: o2, slot: t2, attrs: S2, slots: i2, features: R$1.RenderStrategy | R$1.Static, visible: l2.value, name: "MenuItems" });
  };
} }), Se = defineComponent({ name: "MenuItem", props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false } }, setup(o2, { slots: S2, attrs: i2, expose: v2 }) {
  let e2 = D("MenuItem"), p2 = `headlessui-menu-item-${t$1()}`, u2 = ref(null);
  v2({ el: u2, $el: u2 });
  let m2 = computed(() => e2.activeItemIndex.value !== null ? e2.items.value[e2.activeItemIndex.value].id === p2 : false), d2 = computed(() => ({ disabled: o2.disabled, textValue: "", domRef: u2 }));
  onMounted(() => {
    var n2, s2;
    let a2 = (s2 = (n2 = o$1(u2)) == null ? void 0 : n2.textContent) == null ? void 0 : s2.toLowerCase().trim();
    a2 !== void 0 && (d2.value.textValue = a2);
  }), onMounted(() => e2.registerItem(p2, d2)), onUnmounted(() => e2.unregisterItem(p2)), watchEffect(() => {
    e2.menuState.value === 0 && (!m2.value || e2.activationTrigger.value !== 0 && nextTick(() => {
      var a2, n2;
      return (n2 = (a2 = o$1(u2)) == null ? void 0 : a2.scrollIntoView) == null ? void 0 : n2.call(a2, { block: "nearest" });
    }));
  });
  function I(a2) {
    if (o2.disabled)
      return a2.preventDefault();
    e2.closeMenu(), D$1(o$1(e2.buttonRef));
  }
  function l2() {
    if (o2.disabled)
      return e2.goToItem(a$1.Nothing);
    e2.goToItem(a$1.Specific, p2);
  }
  function t2() {
    o2.disabled || m2.value || e2.goToItem(a$1.Specific, p2, 0);
  }
  function r2() {
    o2.disabled || !m2.value || e2.goToItem(a$1.Nothing);
  }
  return () => {
    let { disabled: a2 } = o2, n2 = { active: m2.value, disabled: a2 };
    return V$1({ ourProps: { id: p2, ref: u2, role: "menuitem", tabIndex: a2 === true ? void 0 : -1, "aria-disabled": a2 === true ? true : void 0, onClick: I, onFocus: l2, onPointermove: t2, onMousemove: t2, onPointerleave: r2, onMouseleave: r2 }, theirProps: o2, slot: n2, attrs: i2, slots: S2, name: "MenuItem" });
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d$1(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g || {});
function F$1(e2, t2) {
  let i2 = s();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s$12] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s$12) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L(e2, t2, i2, n2, a2, l$12) {
  let s$12 = s(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d$1(e2, ...a2), m(e2, ...t2, ...i2), s$12.nextFrame(() => {
    d$1(e2, ...i2), m(e2, ...n2), s$12.add(F$1(e2, (u2) => (d$1(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s$12.add(() => d$1(e2, ...t2, ...i2, ...n2, ...a2)), s$12.add(() => o2("cancelled")), s$12.dispose;
}
function d(e2 = "") {
  return e2.split(" ").filter((t2) => t2.trim().length > 1);
}
let B = Symbol("TransitionContext");
var ae = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(ae || {});
function le() {
  return inject(B, null) !== null;
}
function ie() {
  let e2 = inject(B, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function se() {
  let e2 = inject(F, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let F = Symbol("NestingContext");
function w(e2) {
  return "children" in e2 ? w(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function K(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(r2, n2 = O$1.Hidden) {
    let l2 = t2.value.findIndex(({ id: i2 }) => i2 === r2);
    l2 !== -1 && (u$4(n2, { [O$1.Unmount]() {
      t2.value.splice(l2, 1);
    }, [O$1.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !w(t2) && a2.value && (e2 == null || e2()));
  }
  function v2(r2) {
    let n2 = t2.value.find(({ id: l2 }) => l2 === r2);
    return n2 ? n2.state !== "visible" && (n2.state = "visible") : t2.value.push({ id: r2, state: "visible" }), () => s2(r2, O$1.Unmount);
  }
  return { children: t2, register: v2, unregister: s2 };
}
let _ = R$1.RenderStrategy, oe = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2, expose: v2 }) {
  if (!le() && f$2())
    return () => h$2(fe, { ...e2, onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave") }, s2);
  let r2 = ref(null), n2 = ref("visible"), l2 = computed(() => e2.unmount ? O$1.Unmount : O$1.Hidden);
  v2({ el: r2, $el: r2 });
  let { show: i2, appear: x2 } = ie(), { register: g$12, unregister: p2 } = se(), R2 = { value: true }, m2 = t$1(), S2 = { value: false }, N2 = K(() => {
    S2.value || (n2.value = "hidden", p2(m2), t2("afterLeave"));
  });
  onMounted(() => {
    let o2 = g$12(m2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (l2.value === O$1.Hidden && !!m2) {
      if (i2 && n2.value !== "visible") {
        n2.value = "visible";
        return;
      }
      u$4(n2.value, { ["hidden"]: () => p2(m2), ["visible"]: () => g$12(m2) });
    }
  });
  let k2 = d(e2.enter), $ = d(e2.enterFrom), q = d(e2.enterTo), O2 = d(e2.entered), z = d(e2.leave), G2 = d(e2.leaveFrom), J = d(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (n2.value === "visible") {
        let o2 = o$1(r2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Q(o2) {
    let c2 = R2.value && !x2.value, u2 = o$1(r2);
    !u2 || !(u2 instanceof HTMLElement) || c2 || (S2.value = true, i2.value && t2("beforeEnter"), i2.value || t2("beforeLeave"), o2(i2.value ? L(u2, k2, $, q, O2, (C2) => {
      S2.value = false, C2 === g.Finished && t2("afterEnter");
    }) : L(u2, z, G2, J, O2, (C2) => {
      S2.value = false, C2 === g.Finished && (w(N2) || (n2.value = "hidden", p2(m2), t2("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([i2], (o2, c2, u2) => {
      Q(u2), R2.value = false;
    }, { immediate: true });
  }), provide(F, N2), c$1(computed(() => u$4(n2.value, { ["visible"]: l$2.Open, ["hidden"]: l$2.Closed }))), () => {
    let { appear: o2, show: c2, enter: u2, enterFrom: C2, enterTo: de2, entered: ve2, leave: pe, leaveFrom: me, leaveTo: Te, ...W } = e2;
    return V$1({ theirProps: W, ourProps: { ref: r2 }, slot: {}, slots: s2, attrs: a2, features: _, visible: n2.value === "visible", name: "TransitionChild" });
  };
} }), ue = oe, fe = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2 }) {
  let v2 = p$2(), r2 = computed(() => e2.show === null && v2 !== null ? u$4(v2.value, { [l$2.Open]: true, [l$2.Closed]: false }) : e2.show);
  watchEffect(() => {
    if (![true, false].includes(r2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let n2 = ref(r2.value ? "visible" : "hidden"), l2 = K(() => {
    n2.value = "hidden";
  }), i2 = ref(true), x2 = { show: r2, appear: computed(() => e2.appear || !i2.value) };
  return onMounted(() => {
    watchEffect(() => {
      i2.value = false, r2.value ? n2.value = "visible" : w(l2) || (n2.value = "hidden");
    });
  }), provide(F, l2), provide(B, x2), () => {
    let g2 = w$2(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p2 = { unmount: e2.unmount };
    return V$1({ ourProps: { ...p2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h$2(ue, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...p2, ...g2 }, s2.default)] }, attrs: {}, features: _, visible: n2.value === "visible", name: "Transition" });
  };
} });
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    text: {
      type: String,
      default: void 0
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    const styles = reactive({
      primary: "",
      success: "dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800",
      warning: "dark:from-yellow-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800",
      danger: "dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800"
    });
    const textStyles = reactive({
      primary: "text-white",
      success: "text-green-500",
      warning: "text-orange-500",
      danger: "text-red-500"
    });
    const isDestroyed = ref(false);
    const selectedType = computed(() => {
      if (["primary", "success", "warning", "danger"].includes(props.type))
        return props.type;
      return "primary";
    });
    const selectedStyle = computed(() => styles[selectedType.value]);
    const selectedTextStyle = computed(() => textStyles[selectedType.value]);
    const close = () => {
      isDestroyed.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconMdi58checkCircle = __unplugin_components_0$9;
      const _component_icon_clarity58times_circle_solid = __unplugin_components_1$4;
      const _component_icon_bi58exclamation_circle_fill = __unplugin_components_2$3;
      const _component_icon_clarity58times_line = __unplugin_components_3$2;
      _push(ssrRenderComponent(unref(fe), mergeProps({
        show: !isDestroyed.value,
        appear: ""
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(oe), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-300 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(`bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`)}"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    if (unref(selectedType) === "success") {
                      _push3(ssrRenderComponent(_component_IconMdi58checkCircle, {
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "danger") {
                      _push3(ssrRenderComponent(_component_icon_clarity58times_circle_solid, {
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "warning") {
                      _push3(ssrRenderComponent(_component_icon_bi58exclamation_circle_fill, {
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="flex-1"${_scopeId2}><div class="${ssrRenderClass(`font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="text-gray-700 dark:text-gray-100"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.text)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div></div><div${_scopeId2}><button class="text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon_clarity58times_line, null, null, _parent3, _scopeId2));
                  _push3(`</button></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: `bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                    }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        renderSlot(_ctx.$slots, "icon", {}, () => [
                          unref(selectedType) === "success" ? (openBlock(), createBlock(_component_IconMdi58checkCircle, {
                            key: 0,
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_icon_clarity58times_circle_solid, {
                            key: 1,
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_icon_bi58exclamation_circle_fill, {
                            key: 2,
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("div", {
                          class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString$1(props.title), 1)
                          ])
                        ], 2),
                        createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString$1(props.text), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("button", {
                          class: "text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold",
                          onClick: close
                        }, [
                          createVNode(_component_icon_clarity58times_line)
                        ])
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(oe), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: `bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                  }, [
                    createVNode("div", { class: "flex items-center justify-center" }, [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        unref(selectedType) === "success" ? (openBlock(), createBlock(_component_IconMdi58checkCircle, {
                          key: 0,
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_icon_clarity58times_circle_solid, {
                          key: 1,
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_icon_bi58exclamation_circle_fill, {
                          key: 2,
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", {
                        class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString$1(props.title), 1)
                        ])
                      ], 2),
                      createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString$1(props.text), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("button", {
                        class: "text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold",
                        onClick: close
                      }, [
                        createVNode(_component_icon_clarity58times_line)
                      ])
                    ])
                  ], 2)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alert.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white dark:bg-slate-900 border border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}>`);
      if (__props.disabled) {
        _push(`<div class="absolute z-10 top-0 left-0 w-full h-full bg-slate-800/[0.75] cursor-not-allowed"></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/index.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$W
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-content px-4 py-4 relative" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Content.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$p]]);
const Content = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xl font-semibold mb-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Title.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Title$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$U
}, Symbol.toStringTag, { value: "Module" }));
const useSyncProps = (props, key, emit) => {
  return computed({
    get() {
      return props[key];
    },
    set(value) {
      emit(`update:${key}`, value);
    }
  });
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const paddingStyles = reactive({
      xs: "px-1 py-0.5",
      sm: "px-2 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-3"
    });
    const fontSizeStyles = reactive({
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    });
    const modelValue = useSyncProps(props, "modelValue", emit);
    const havePreEl = computed(
      () => typeof slots.prefix !== "undefined" || typeof slots["prefix-disabled"] !== "undefined"
    );
    const haveSuEl = computed(() => typeof slots.suffix !== "undefined");
    const selectedBorderStyle = computed(
      () => "border-gray-900/10 dark:border-gray-50/[0.2]"
    );
    const selectedOnHoverBorderStyle = computed(
      () => "dark:focus:border-white focus:border-gray-900"
    );
    const selectedPaddingStyle = computed(
      () => paddingStyles[props.size] || paddingStyles.md
    );
    const selectedFontSizeStyle = computed(
      () => fontSizeStyles[props.size] || fontSizeStyles.md
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: `text-input-container relative flex` }, _attrs))}>`);
      if (unref(slots)["prefix-disabled"]) {
        _push(`<div class="${ssrRenderClass(`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix-disabled", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slots).prefix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-l border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-input-wrapper relative flex flex-1"><input${ssrRenderDynamicModel(__props.type, unref(modelValue), null)} class="${ssrRenderClass(`text-input w-full flex-1 bg-transparent outline-none border ${unref(havePreEl) ? "" : "rounded-l"} ${unref(haveSuEl) ? "" : "rounded-r"} ${unref(selectedBorderStyle)} ${unref(selectedOnHoverBorderStyle)} ${unref(selectedPaddingStyle)} ${unref(selectedFontSizeStyle)}`)}"${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}></div>`);
      if (unref(slots).suffix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-r border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/TextInput.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$T
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-footer px-6 py-2 text-sm bg-white dark:bg-slate-800 border-t border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Footer.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$o]]);
const Footer$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    on: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const randomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const id = ref(props.id || randomId());
    ref();
    const checked = useSyncProps(props, "modelValue", emit);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: id.value,
        class: "flex cursor-pointer"
      }, _attrs))}><label${ssrRenderAttr("for", id.value)} class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"><input${ssrRenderAttr("id", id.value)} type="checkbox" class="switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 appearance-none cursor-pointer"${ssrIncludeBooleanAttr(unref(checked)) ? " checked" : ""}><label${ssrRenderAttr("for", id.value)} class="switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer border border-slate-300 dark:border-slate-500"></label></label>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Switch.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const Switch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$R
}, Symbol.toStringTag, { value: "Module" }));
const meta$4 = {
  layout: "page"
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-2xl font-semibold mb-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Section/Title.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Title = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Q
}, Symbol.toStringTag, { value: "Module" }));
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol("pinia") ;
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app2) {
      setActivePinia(pinia);
      {
        pinia._a = app2;
        app2.provide(piniaSymbol, pinia);
        app2.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration") ;
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = () => {
    throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
  } ;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? computed(() => {
          setActivePinia(pinia);
          return getter.call(store, store);
        }) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useCounter = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    increment2x() {
      this.count *= 2;
    }
  }
});
const useIdentity = defineStore("identity", {
  state: () => ({
    firstName: "Alfian",
    lastName: "Dwi"
  }),
  actions: {
    setFirstName(firstName) {
      this.firstName = firstName;
    },
    setLastName(lastName) {
      this.lastName = lastName;
    },
    reset() {
      this.firstName = "Alfian";
      this.lastName = "Dwi";
    }
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
const meta$3 = {
  layout: "page"
};
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "Tab",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const activeTab = inject("activeTab");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(activeTab) === __props.name ? null : { display: "none" },
        class: "relative overflow-auto px-6 py-2"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Tab.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const Tab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_5$1 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_2, { slots }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const cache = /* @__PURE__ */ new WeakMap();
function createClientOnly(component) {
  if (cache.has(component)) {
    return cache.get(component);
  }
  const clone = { ...component };
  if (clone.render) {
    clone.render = (ctx, ...args) => {
      var _a, _b;
      return ctx.mounted$ ? h$2(Fragment$1, (_a = ctx.$attrs) != null ? _a : ctx._.attrs, component.render(ctx, ...args)) : h$2("div", (_b = ctx.$attrs) != null ? _b : ctx._.attrs);
    };
  } else if (clone.template) {
    clone.template = `
      <template v-if="mounted$">${component.template}</template>
      <template v-else><div></div></template>
    `;
  }
  clone.setup = (props, ctx) => {
    var _a;
    const mounted$ = ref(false);
    return Promise.resolve(((_a = component.setup) == null ? void 0 : _a.call(component, props, ctx)) || {}).then((setupState) => {
      return typeof setupState !== "function" ? { ...setupState, mounted$ } : (...args) => {
        return mounted$.value ? h$2(Fragment$1, ctx.attrs, setupState(...args)) : h$2("div", ctx.attrs);
      };
    });
  };
  cache.set(component, clone);
  return clone;
}
const clientOnly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_5$1,
  createClientOnly
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    useSlots();
    const tabs = ref();
    const tabHeaderIndicator = ref();
    const tabItems = ref([]);
    const activeTab = ref();
    watch(tabItems, () => updateIndicator());
    watch(activeTab, () => updateIndicator());
    provide("activeTab", activeTab);
    const updateIndicator = () => {
      if (!tabs.value || !tabHeaderIndicator.value)
        return;
      const dom = tabHeaderIndicator.value;
      const currentActiveIndex = tabItems.value.findIndex(
        ({ name }) => name === activeTab.value
      );
      const tabItem = tabs.value.querySelectorAll(".tabs-header-item")[currentActiveIndex];
      if (!tabItem)
        return;
      const padding = 24;
      const diff = 30;
      dom.style.width = `${tabItem.offsetWidth + diff}px`;
      dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "tabs",
        ref: tabs,
        class: "tabs"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`<div class="tabs-body relative text-slate-800 dark:text-white bg-gray-200 dark:bg-slate-800 shadow rounded-b-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Tabs.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Tabs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100/[0.8] dark:bg-slate-800/[0.8] backdrop-blur supports-backdrop-blur:bg-white/60 p-4 rounded overflow-y-auto" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Body.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$n]]);
const Body = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs font-bold text-center mb-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Header.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$M
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bg-black opacity-70 z-50 top-0 left-0 w-screen h-screen" }, _attrs))}></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Overlay.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$m]]);
const Overlay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["onClose"],
  setup(__props, { emit }) {
    const show = ref(false);
    const close = () => {
      show.value = false;
      setTimeout(() => emit("onClose"), 100);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSheetOverlay = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(fe), {
          show: show.value,
          appear: ""
        }, {
          default: withCtx((_2, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div${_scopeId}>`);
              _push3(ssrRenderComponent(_component_ActionSheetOverlay, { onClick: close }, null, _parent2, _scopeId));
              _push3(ssrRenderComponent(unref(oe), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_22, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`<div class="fixed bottom-0 w-screen z-50 flex" style="${ssrRenderStyle({ "max-height": "66.666667%" })}"${_scopeId2}><div class="relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent3, _scopeId2);
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_ActionSheetOverlay, { onClick: close }),
                  createVNode(unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-300 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ]),
                    _: 3
                  })
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/index.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$K
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$i = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 192 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$i);
}
const __unplugin_components_4 = { name: "fa-solid-ellipsis-v", render: render$i };
const _hoisted_1$h = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1568 1280",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 1184q0 4 1 20t.5 26.5t-3 23.5t-10 19.5t-20.5 6.5H288q-119 0-203.5-84.5T0 992V288Q0 169 84.5 84.5T288 0h320q13 0 22.5 9.5T640 32q0 4 1 20t.5 26.5t-3 23.5t-10 19.5T608 128H288q-66 0-113 47t-47 113v704q0 66 47 113t113 47h312l11.5 1l11.5 3l8 5.5l7 9l2 13.5zm928-544q0 26-19 45l-544 544q-19 19-45 19t-45-19t-19-45V896H448q-26 0-45-19t-19-45V448q0-26 19-45t45-19h448V96q0-26 19-45t45-19t45 19l544 544q19 19 19 45z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$h);
}
const __unplugin_components_3$1 = { name: "fa-sign-out", render: render$h };
const _hoisted_1$g = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1664 1312",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$g
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$g);
}
const __unplugin_components_2$2 = { name: "fa-home", render: render$g };
const _hoisted_1$f = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$f);
}
const __unplugin_components_1$3 = { name: "uil-times", render: render$f };
const _hoisted_1$e = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$e);
}
const __unplugin_components_0$8 = { name: "uil-bars", render: render$e };
const _imports_0 = "" + globalThis.__publicAssetsURL("assets/icons/foody.png");
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const app2 = useState("app");
    const navbar = ref(null);
    const showDrawer = useState("navbar.showDrawer", () => false);
    useState("navbar.showOptions", () => false);
    const { $auth } = useNuxtApp();
    const router = useRouter();
    const logout = () => $auth.logout();
    const home = () => router.push(getHomeRoute.value);
    const getHomeRoute = computed(() => {
      if ($auth.isLoggedIn)
        return { name: "owner" };
      return { name: "index" };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUil58bars = __unplugin_components_0$8;
      const _component_IconUil58times = __unplugin_components_1$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_IconFa58home = __unplugin_components_2$2;
      const _component_IconFa58sign_out = __unplugin_components_3$1;
      const _component_icon_fa_solid58ellipsis_v = __unplugin_components_4;
      const _component_ClientOnly = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "backdrop-filter backdrop-blur-md top-0 z-30 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
      }, _attrs))}><div id="navbar-banner" class="banner">`);
      ssrRenderSlot(_ctx.$slots, "banner", {}, null, _push, _parent);
      _push(`</div><div class="max-w-8xl w-full mx-auto"><div class="py-3 lg:px-8 mx-4 lg:mx-0"><div class="relative flex items-center">`);
      if (_ctx.$slots["drawer"]) {
        _push(`<div class="lg:hidden flex items-center self-center justify-center mr-2"><button class="flex items-center focus:outline-none" aria-label="Toggle Drawer Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-lg" aria-hidden="true">`);
        if (!unref(showDrawer)) {
          _push(ssrRenderComponent(_component_IconUil58bars, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_IconUil58times, null, null, _parent));
        }
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          tag: "a",
          class: "mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200",
          to: unref(getHomeRoute)
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>home</span><span class="flex items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", unref(app2).name)} class="h-6 mr-2"${_scopeId}> ${ssrInterpolate(unref(app2).name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, "home"),
                createVNode("span", { class: "flex items-center" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: unref(app2).name,
                    class: "h-6 mr-2"
                  }, null, 8, ["alt"]),
                  createTextVNode(" " + toDisplayString$1(unref(app2).name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      if (unref($auth).isLoggedIn) {
        _push(`<div class="flex-1 flex items-center justify-end">`);
        _push(ssrRenderComponent(unref(ve), null, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Ie), null, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`${ssrInterpolate(((_a = unref($auth).user) == null ? void 0 : _a.name) || "")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString$1(((_b = unref($auth).user) == null ? void 0 : _b.name) || ""), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ge), { class: "absolute z-50 flex flex-col space-y-3 top-0 mt-8 bg-gray-100 dark:bg-slate-800 pl-4 pr-8 py-4 rounded-lg items-start justify-start text-sm" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Se), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class="flex space-x-2 items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_IconFa58home, { class: "text-xs" }, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>Home</span></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: "flex space-x-2 items-center",
                              onClick: ($event) => home()
                            }, [
                              createVNode(_component_IconFa58home, { class: "text-xs" }),
                              createVNode("span", null, "Home")
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Se), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class="flex space-x-2 items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_IconFa58sign_out, { class: "text-xs" }, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>Logout</span></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: "flex space-x-2 items-center",
                              onClick: ($event) => logout()
                            }, [
                              createVNode(_component_IconFa58sign_out, { class: "text-xs" }),
                              createVNode("span", null, "Logout")
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Se), null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: "flex space-x-2 items-center",
                            onClick: ($event) => home()
                          }, [
                            createVNode(_component_IconFa58home, { class: "text-xs" }),
                            createVNode("span", null, "Home")
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Se), null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: "flex space-x-2 items-center",
                            onClick: ($event) => logout()
                          }, [
                            createVNode(_component_IconFa58sign_out, { class: "text-xs" }),
                            createVNode("span", null, "Logout")
                          ], 8, ["onClick"])
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
                createVNode(unref(Ie), null, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createTextVNode(toDisplayString$1(((_a = unref($auth).user) == null ? void 0 : _a.name) || ""), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(unref(ge), { class: "absolute z-50 flex flex-col space-y-3 top-0 mt-8 bg-gray-100 dark:bg-slate-800 pl-4 pr-8 py-4 rounded-lg items-start justify-start text-sm" }, {
                  default: withCtx(() => [
                    createVNode(unref(Se), null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "flex space-x-2 items-center",
                          onClick: ($event) => home()
                        }, [
                          createVNode(_component_IconFa58home, { class: "text-xs" }),
                          createVNode("span", null, "Home")
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Se), null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "flex space-x-2 items-center",
                          onClick: ($event) => logout()
                        }, [
                          createVNode(_component_IconFa58sign_out, { class: "text-xs" }),
                          createVNode("span", null, "Logout")
                        ], 8, ["onClick"])
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "menu", {}, null, _push, _parent);
      if (_ctx.$slots["options"]) {
        _push(`<div class="flex-1 flex justify-end lg:hidden"><button class="flex items-center focus:outline-none" aria-label="Toggle Options Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-sm" aria-hidden="true">`);
        _push(ssrRenderComponent(_component_icon_fa_solid58ellipsis_v, null, null, _parent));
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Builder/Navbar.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const Navbar$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$J
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$d = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M4 4v18h6v6h18V10h-6V4zm2 2h14v4.563L10.562 20H6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.544 4.544 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.267 8.267 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156c.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8zm10.438 4H26v14H12v-4.563zM20 13.844l-.938 2.844l-2 6l-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157l-2-6zm0 6.281l.281.875h-.562z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$d);
}
const __unplugin_components_0$7 = { name: "la-language", render: render$d };
const availableLocales = {
  en: {
    name: "English",
    iso: "en",
    flag: "\u{1F1FA}\u{1F1F8}"
  },
  id: {
    name: "Bahasa",
    iso: "id",
    flag: "\u{1F1EE}\u{1F1E9}"
  },
  ja: {
    name: "\u65E5\u672C\u8A9E",
    iso: "ja",
    flag: "\u{1F1EF}\u{1F1F5}"
  },
  ko: {
    name: "\uD55C\uAD6D\uC5B4",
    iso: "ko",
    flag: "\u{1F1F0}\u{1F1F7}"
  }
};
function LanguageManager() {
  const { locale } = useI18n();
  const localeUserSetting = useCookie("locale");
  const getSystemLocale = () => {
    try {
      const foundLang = window ? window.navigator.language.substring(0, 2) : "en";
      return availableLocales[foundLang] ? foundLang : "en";
    } catch (error) {
      return "en";
    }
  };
  const getUserLocale = () => localeUserSetting.value || getSystemLocale();
  const localeSetting = useState(
    "locale.setting",
    () => getUserLocale()
  );
  watch(localeSetting, (localeSetting2) => {
    localeUserSetting.value = localeSetting2;
    locale.value = localeSetting2;
  });
  const init = () => {
    localeSetting.value = getUserLocale();
  };
  locale.value = localeSetting.value;
  return {
    localeSetting,
    init
  };
}
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const currentStyle = toRef(props, "type");
    const localeSetting = useState("locale.setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconLa58language = __unplugin_components_0$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(unref(Me), {
          modelValue: unref(localeSetting),
          "onUpdate:modelValue": ($event) => isRef(localeSetting) ? localeSetting.value = $event : null,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Pe), { class: "sr-only" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Theme`);
                  } else {
                    return [
                      createTextVNode("Theme")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ie$1), {
                type: "button",
                title: "Change Language",
                class: "transition-colors duration-300"
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="justify-center items-center flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconLa58language, null, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "justify-center items-center flex" }, [
                        createVNode(_component_IconLa58language)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(availableLocales), (lang) => {
                      _push3(ssrRenderComponent(unref(Ae), {
                        key: lang.iso,
                        value: lang.iso,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2"${_scopeId3}>${ssrInterpolate(lang.flag)}</span><span class="flex-1 truncate"${_scopeId3}>${ssrInterpolate(lang.name)} <span class="text-xs"${_scopeId3}>(${ssrInterpolate(lang.iso)})</span></span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2" }, toDisplayString$1(lang.flag), 1),
                              createVNode("span", { class: "flex-1 truncate" }, [
                                createTextVNode(toDisplayString$1(lang.name) + " ", 1),
                                createVNode("span", { class: "text-xs" }, "(" + toDisplayString$1(lang.iso) + ")", 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment$1, null, renderList(unref(availableLocales), (lang) => {
                        return openBlock(), createBlock(unref(Ae), {
                          key: lang.iso,
                          value: lang.iso,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2" }, toDisplayString$1(lang.flag), 1),
                            createVNode("span", { class: "flex-1 truncate" }, [
                              createTextVNode(toDisplayString$1(lang.name) + " ", 1),
                              createVNode("span", { class: "text-xs" }, "(" + toDisplayString$1(lang.iso) + ")", 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Pe), { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode("Theme")
                  ]),
                  _: 1
                }),
                createVNode(unref(Ie$1), {
                  type: "button",
                  title: "Change Language",
                  class: "transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "justify-center items-center flex" }, [
                      createVNode(_component_IconLa58language)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment$1, null, renderList(unref(availableLocales), (lang) => {
                      return openBlock(), createBlock(unref(Ae), {
                        key: lang.iso,
                        value: lang.iso,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2" }, toDisplayString$1(lang.flag), 1),
                          createVNode("span", { class: "flex-1 truncate" }, [
                            createTextVNode(toDisplayString$1(lang.name) + " ", 1),
                            createVNode("span", { class: "text-xs" }, "(" + toDisplayString$1(lang.iso) + ")", 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(unref(availableLocales), (lang) => {
          _push(`<option${ssrRenderAttr("value", lang.iso)} class="flex items-center space-x-2">${ssrInterpolate(lang.flag)} ${ssrInterpolate(lang.name)} (${ssrInterpolate(lang.iso)}) </option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageSwitcher.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const LanguageSwitcher = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$I
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$c = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$c);
}
const __unplugin_components_3 = { name: "uil-clock", render: render$c };
const _hoisted_1$b = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b);
}
const __unplugin_components_2$1 = { name: "uil-laptop", render: render$b };
const _hoisted_1$a = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
const __unplugin_components_1$2 = { name: "uil-moon", render: render$a };
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
const __unplugin_components_0$6 = { name: "uil-sun", render: render$9 };
const availableThemes = [
  { key: "light", text: "Light" },
  { key: "dark", text: "Dark" },
  { key: "system", text: "System" },
  { key: "realtime", text: "Realtime" }
];
function ThemeManager() {
  const themeUserSetting = useCookie("theme");
  const getUserSetting = () => themeUserSetting.value || "system";
  const getSystemTheme = () => {
    try {
      return window ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "dark";
    } catch (error) {
      return "dark";
    }
  };
  const getRealtimeTheme = () => {
    const now2 = new Date();
    const hour = now2.getHours();
    const isNight = hour >= 17 || hour <= 5;
    return isNight ? "dark" : "light";
  };
  const themeSetting = useState(
    "theme.setting",
    () => getUserSetting()
  );
  const themeCurrent = useState(
    "theme.current",
    () => "light"
  );
  const onThemeSettingChange = (themeSetting2) => {
    themeUserSetting.value = themeSetting2;
    if (themeSetting2 === "realtime") {
      themeCurrent.value = getRealtimeTheme();
    } else if (themeSetting2 === "system") {
      themeCurrent.value = getSystemTheme();
    } else {
      themeCurrent.value = themeSetting2;
    }
  };
  watch(themeSetting, (val) => onThemeSettingChange(val));
  onThemeSettingChange(themeSetting.value);
  return {
    themeSetting,
    themeCurrent,
    getUserSetting,
    getSystemTheme,
    getRealtimeTheme
  };
}
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const themeSetting = useState("theme.setting");
    const currentStyle = toRef(props, "type");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUil58sun = __unplugin_components_0$6;
      const _component_IconUil58moon = __unplugin_components_1$2;
      const _component_IconUil58laptop = __unplugin_components_2$1;
      const _component_IconUil58clock = __unplugin_components_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(unref(Me), {
          modelValue: unref(themeSetting),
          "onUpdate:modelValue": ($event) => isRef(themeSetting) ? themeSetting.value = $event : null,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Pe), { class: "sr-only" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("components.theme_switcher.theme"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString$1(_ctx.$t("components.theme_switcher.theme")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ie$1), {
                type: "button",
                title: _ctx.$t("components.theme_switcher.change_theme"),
                class: "transition-colors duration-300"
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="flex justify-center items-center dark:hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconUil58sun, null, null, _parent3, _scopeId2));
                    _push3(`</span><span class="justify-center items-center hidden dark:flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconUil58moon, null, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                        createVNode(_component_IconUil58sun)
                      ]),
                      createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                        createVNode(_component_IconUil58moon)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(availableThemes), (theme) => {
                      _push3(ssrRenderComponent(unref(Ae), {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2 flex items-center"${_scopeId3}>`);
                            if (theme.key === "light") {
                              _push4(ssrRenderComponent(_component_IconUil58sun, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "dark") {
                              _push4(ssrRenderComponent(_component_IconUil58moon, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "system") {
                              _push4(ssrRenderComponent(_component_IconUil58laptop, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "realtime") {
                              _push4(ssrRenderComponent(_component_IconUil58clock, null, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</span> ${ssrInterpolate(theme.text)}`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                                theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString$1(theme.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment$1, null, renderList(unref(availableThemes), (theme) => {
                        return openBlock(), createBlock(unref(Ae), {
                          key: theme.key,
                          value: theme.key,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                              theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString$1(theme.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Pe), { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString$1(_ctx.$t("components.theme_switcher.theme")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(Ie$1), {
                  type: "button",
                  title: _ctx.$t("components.theme_switcher.change_theme"),
                  class: "transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                      createVNode(_component_IconUil58sun)
                    ]),
                    createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                      createVNode(_component_IconUil58moon)
                    ])
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment$1, null, renderList(unref(availableThemes), (theme) => {
                      return openBlock(), createBlock(unref(Ae), {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                            theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" " + toDisplayString$1(theme.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(unref(availableThemes), (theme) => {
          _push(`<option${ssrRenderAttr("value", theme.key)}>${ssrInterpolate(theme.text)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeSwitcher.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const ThemeSwitcher = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const __unplugin_components_0$5 = { name: "mdi-github-face", render: render$8 };
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const __unplugin_components_0$4 = { name: "uil-angle-down", render: render$7 };
const _sfc_main$G = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  const _component_BuilderNavbar = _sfc_main$J;
  const _component_IconUil58angle_down = __unplugin_components_0$4;
  const _component_LanguageSwitcher = _sfc_main$I;
  const _component_ThemeSwitcher = _sfc_main$H;
  const _component_Anchor = _sfc_main$Y;
  const _component_IconMdi58github_face = __unplugin_components_0$5;
  const _component_ActionSheet = _sfc_main$K;
  const _component_ActionSheetBody = __nuxt_component_5;
  const _component_ActionSheetHeader = _sfc_main$M;
  const _component_Button = _sfc_main$17;
  _push(ssrRenderComponent(_component_BuilderNavbar, _attrs, {
    menu: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative hidden lg:flex items-center ml-auto"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><img class="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="Avatar of Jonathan Reinink"${_scopeId}><span class="ml-2 text-sm font-semibold"${_scopeId}>Alfian</span>`);
        _push2(ssrRenderComponent(_component_IconUil58angle_down, null, null, _parent2, _scopeId));
        _push2(`</div><div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LanguageSwitcher, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ThemeSwitcher, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Anchor, {
          class: "hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center",
          href: "https://github.com/viandwi24/nuxt3-awesome-starter",
          title: "Github"
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_IconMdi58github_face, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_IconMdi58github_face)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative hidden lg:flex items-center ml-auto" }, [
            createVNode("div", { class: "flex items-center justify-center" }, [
              createVNode("img", {
                class: "w-6 h-6 rounded-full",
                src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                alt: "Avatar of Jonathan Reinink"
              }),
              createVNode("span", { class: "ml-2 text-sm font-semibold" }, "Alfian"),
              createVNode(_component_IconUil58angle_down)
            ]),
            createVNode("div", { class: "flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]" }, [
              createVNode(_component_LanguageSwitcher),
              createVNode(_component_ThemeSwitcher),
              createVNode(_component_Anchor, {
                class: "hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter",
                title: "Github"
              }, {
                default: withCtx(() => [
                  createVNode(_component_IconMdi58github_face)
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    options: withCtx(({ toggleOptions }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ActionSheet, {
          onOnClose: ($event) => toggleOptions(false)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ActionSheetBody, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ActionSheetHeader, { text: "Menu" }, null, _parent4, _scopeId3));
                    _push4(`<div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.theme_switcher.change_theme"))}</div><div class="mt-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_ThemeSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.language_switcher.change_language"))}</div><div class="mt-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_LanguageSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_ThemeSwitcher, { type: "select-box" })
                      ]),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_LanguageSwitcher, { type: "select-box" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Button, {
                type: "secondary",
                title: "Github",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_IconMdi58github_face, null, null, _parent4, _scopeId3));
                    _push4(`<span class="ml-1"${_scopeId3}>Github</span>`);
                  } else {
                    return [
                      createVNode(_component_IconMdi58github_face),
                      createVNode("span", { class: "ml-1" }, "Github")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Button, {
                text: "Close",
                type: "secondary",
                onClick: ($event) => toggleOptions(false)
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ActionSheetBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                    createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode(_component_ThemeSwitcher, { type: "select-box" })
                    ]),
                    createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode(_component_LanguageSwitcher, { type: "select-box" })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_Button, {
                  type: "secondary",
                  title: "Github",
                  href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_IconMdi58github_face),
                    createVNode("span", { class: "ml-1" }, "Github")
                  ]),
                  _: 1
                }),
                createVNode(_component_Button, {
                  text: "Close",
                  type: "secondary",
                  onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ActionSheet, {
            onOnClose: ($event) => toggleOptions(false)
          }, {
            default: withCtx(() => [
              createVNode(_component_ActionSheetBody, null, {
                default: withCtx(() => [
                  createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                  createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_ThemeSwitcher, { type: "select-box" })
                  ]),
                  createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_LanguageSwitcher, { type: "select-box" })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_Button, {
                type: "secondary",
                title: "Github",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter"
              }, {
                default: withCtx(() => [
                  createVNode(_component_IconMdi58github_face),
                  createVNode("span", { class: "ml-1" }, "Github")
                ]),
                _: 1
              }),
              createVNode(_component_Button, {
                text: "Close",
                type: "secondary",
                onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
              }, null, 8, ["onClick"])
            ]),
            _: 2
          }, 1032, ["onOnClose"])
        ];
      }
    }),
    drawer: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "drawer", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "drawer")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Navbar.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Navbar$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$l]]);
const Navbar$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Navbar$1
}, Symbol.toStringTag, { value: "Module" }));
const ax = axios.create({
  baseURL: "http://103.13.207.24/api"
});
const useHttp = () => {
  return ax;
};
const useApi = () => {
  const http = useHttp();
  const create = (api) => new Promise((resolve, reject) => {
    try {
      console.log("api", api);
      http(api.config).then(async (res) => {
        try {
          let newRes = res;
          if (api.onResponse) {
            newRes = await api.onResponse(res);
          }
          resolve(newRes);
        } catch (error) {
          reject(error);
        }
      }).catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
  return {
    http,
    create
  };
};
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1408 1536",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 1248V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM480 256h448l-48-117q-7-9-17-11H546q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5H288q-66 0-113-58.5T128 1336V384H32q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const __unplugin_components_1$1 = { name: "fa-trash", render: render$6 };
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1536 1536",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m363 1408l91-91l-235-235l-91 91v107h128v128h107zm523-928q0-22-22-22q-10 0-17 7l-542 542q-7 7-7 17q0 22 22 22q10 0 17-7l542-542q7-7 7-17zm-54-192l416 416l-832 832H0v-416zm683 96q0 53-37 90l-166 166l-416-416l166-165q36-38 90-38q53 0 91 38l235 234q37 39 37 91z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const __unplugin_components_0$3 = { name: "fa-pencil", render: render$5 };
const useLoading = defineStore("loading", {
  state: () => ({
    state: false
  }),
  actions: {
    show() {
      this.state = true;
    },
    hide() {
      this.state = false;
    },
    toggle(show) {
      if (typeof show !== "undefined") {
        show ? this.show() : this.hide();
      } else {
        this.state ? this.hide() : this.show();
      }
    }
  }
});
const ClearUndefinedAndEmptyProp = (obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    if (newObj[key] && typeof newObj[key] === "object") {
      ClearUndefinedAndEmptyProp(newObj[key]);
    } else if (newObj[key] === void 0 || newObj[key] === "") {
      delete newObj[key];
    }
  });
  return newObj;
};
var Api;
((Api2) => {
  ((Menu2) => {
    Menu2.All = () => ({
      config: {
        method: "GET",
        url: "menu"
      }
    });
    Menu2.Create = (data) => ({
      config: {
        method: "POST",
        url: "menu",
        data: ClearUndefinedAndEmptyProp(data)
      }
    });
    Menu2.Update = (id, data) => ({
      config: {
        method: "PUT",
        url: `menu/${id}`,
        data: ClearUndefinedAndEmptyProp(data)
      }
    });
    Menu2.Delete = (id) => ({
      config: {
        method: "DELETE",
        url: `menu/${id}`
      }
    });
  })(Api2.Menu || (Api2.Menu = {}));
  ((Transaction2) => {
    Transaction2.All = (opts) => ({
      config: {
        method: "GET",
        url: "transaction",
        params: {
          ...opts
        }
      }
    });
    Transaction2.Create = (data) => ({
      config: {
        method: "POST",
        url: "transaction",
        data
      }
    });
    Transaction2.Update = (id, data) => ({
      config: {
        method: "PUT",
        url: `transaction/${id}`,
        data
      }
    });
  })(Api2.Transaction || (Api2.Transaction = {}));
  ((Auth2) => {
    Auth2.Login = (data) => ({
      config: {
        method: "POST",
        url: "auth/login",
        data
      }
    });
    Auth2.Logout = () => ({
      config: {
        method: "POST",
        url: "auth/logout"
      }
    });
    Auth2.Me = () => ({
      config: {
        method: "GET",
        url: "auth/user"
      }
    });
  })(Api2.Auth || (Api2.Auth = {}));
})(Api || (Api = {}));
const getCurrentCurrency = () => {
  return {
    symbol: "Rp",
    code: "IDR"
  };
};
const formatCurrency = (value) => {
  const { symbol } = getCurrentCurrency();
  return formatRupiah(value.toString(), symbol);
};
function formatRupiah(angka, prefix) {
  const numberString = angka.replace(/[^,\d]/g, "").toString();
  const split = numberString.split(",");
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let separator = "";
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  rupiah = split[1] !== void 0 ? rupiah + "," + split[1] : rupiah;
  return prefix === void 0 ? rupiah : rupiah ? "Rp. " + rupiah : "";
}
const _hoisted_1$4 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",
  opacity: ".5"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
}, [
  /* @__PURE__ */ createElementVNode("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    from: "0 12 12",
    repeatCount: "indefinite",
    to: "360 12 12",
    type: "rotate"
  })
], -1);
const _hoisted_4 = [
  _hoisted_2$4,
  _hoisted_3$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4);
}
const __unplugin_components_0$2 = { name: "eos-icons-loading", render: render$4 };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      default: () => []
    },
    api: {
      type: Object,
      required: false
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const rowsD = ref(props.rows);
    const ap = useApi();
    const loading = ref(false);
    const fetch = async () => {
      if (!props.api)
        return;
      loading.value = true;
      try {
        const res = await ap.create(props.api);
        if (res.status === 200) {
          rowsD.value = res.data.data;
        }
      } catch (error) {
      }
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      loading.value = false;
    };
    const getObjNotation = (obj, path) => {
      try {
        const pathArr = path.split(".");
        return pathArr.reduce((acc, curr) => acc[curr], obj);
      } catch (err) {
        return void 0;
      }
    };
    const getFormattedData = (index2, row, col) => {
      if (col.data && typeof col.data === "string") {
        if (col.data === "$index") {
          return index2 + 1;
        } else {
          return getObjNotation(row, col.data) || "-";
        }
      } else if (col.builder) {
        return col.builder(row);
      }
      return "-";
    };
    watch(
      () => props.api,
      () => {
        fetch();
      }
    );
    expose({
      fetch
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconEosIcons58loading = __unplugin_components_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><table class="border-collapse table flex-1"><thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-slate-800"><tr><!--[-->`);
      ssrRenderList(props.columns, (item) => {
        _push(`<th class="px-6 py-4 whitespace-nowrap"><div class="font-semibold text-left">${ssrInterpolate(item.label)}</div></th>`);
      });
      _push(`<!--]--></tr></thead>`);
      if (loading.value) {
        _push(`<tbody class="text-sm divide-y divide-gray-100 dark:divide-slate-700"><tr><td colspan="100%" class="p-2 whitespace-nowrap"><div class="flex justify-center items-center space-x-2">`);
        _push(ssrRenderComponent(_component_IconEosIcons58loading, { class: "text-primary" }, null, _parent));
        _push(`<div>Loading data...</div></div></td></tr></tbody>`);
      } else if (!loading.value && rowsD.value.length !== 0) {
        _push(`<tbody class="text-sm divide-y divide-gray-100 dark:divide-slate-700"><!--[-->`);
        ssrRenderList(rowsD.value, (row, rowIndex) => {
          _push(`<tr><!--[-->`);
          ssrRenderList(props.columns, (col, colIndex) => {
            _push(`<td class="${ssrRenderClass([`${col.class} break-all`, "p-2 whitespace-nowrap"])}">`);
            ssrRenderSlot(_ctx.$slots, `row-col-${col.key}`, {
              rawItem: row,
              col,
              item: getFormattedData(rowIndex, row, col)
            }, () => {
              _push(`${ssrInterpolate(getFormattedData(rowIndex, row, col))}`);
            }, _push, _parent);
            _push(`</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && rowsD.value.length === 0) {
        _push(`<tbody class="text-sm divide-y divide-gray-100 dark:divide-slate-700"><tr><td colspan="100%" class="p-2 whitespace-nowrap"><div class="flex justify-center">No data found</div></td></tr></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    useLoading();
    useToast();
    const table = ref(null);
    const apiGetMenu = Api.Menu.All();
    const columns = ref([
      { key: "image", label: "image" },
      { key: "menu", label: "Menu" },
      {
        key: "price",
        label: "Price",
        builder: (data) => formatCurrency(data.price || "")
      },
      {
        key: "action",
        label: "..."
      }
    ]);
    const newItem = () => {
      menuModel.value = {
        id: 0,
        name: "",
        description: "",
        image: "",
        price: 0
      };
      modaMenuToggle("add");
    };
    const edit = (item) => {
      console.log("edit", item);
      menuModel.value = {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price
      };
      modaMenuToggle("edit");
    };
    const confirmDelete = (item) => {
      console.log("delete", item);
      menuModel.value = {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price
      };
      modalDeleteToggle();
    };
    const modalMenuMode = ref("add");
    const modalMenuShow = ref(false);
    const menuModel = ref({
      id: 0,
      name: "",
      description: "",
      image: "",
      price: 0
    });
    const modaMenuToggle = (mode = "add") => {
      modalMenuShow.value = !modalMenuShow.value;
      modalMenuMode.value = mode;
    };
    const modalDeleteShow = ref(false);
    const modalDeleteToggle = () => {
      modalDeleteShow.value = !modalDeleteShow.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$17;
      const _component_Card = _sfc_main$W;
      const _component_IconFa58pencil = __unplugin_components_0$3;
      const _component_IconFa58trash = __unplugin_components_1$1;
      const _component_ClientOnly = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-end mb-4">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "capitalize",
        size: "sm",
        type: "primary",
        text: "New Product",
        onClick: newItem
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$F, {
              ref_key: "table",
              ref: table,
              columns: columns.value,
              api: unref(apiGetMenu)
            }, {
              "row-col-menu": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col space-y-2"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(rawItem.name)}</div><div class="text-xs text-gray-500 truncate"${_scopeId2}>${ssrInterpolate(rawItem.description)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode("div", null, toDisplayString$1(rawItem.name), 1),
                      createVNode("div", { class: "text-xs text-gray-500 truncate" }, toDisplayString$1(rawItem.description), 1)
                    ])
                  ];
                }
              }),
              "row-col-image": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", rawItem.image)} class="w-20 h-20"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: rawItem.image,
                      class: "w-20 h-20"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              "row-col-action": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2",
                    size: "xs",
                    type: "warning",
                    onClick: ($event) => edit(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58pencil, { class: "text-xs" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_IconFa58pencil, { class: "text-xs" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2",
                    size: "xs",
                    type: "danger",
                    onClick: ($event) => confirmDelete(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58trash, { class: "text-xs" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_IconFa58trash, { class: "text-xs" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_Button, {
                        class: "mr-2",
                        size: "xs",
                        type: "warning",
                        onClick: ($event) => edit(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58pencil, { class: "text-xs" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        class: "mr-2",
                        size: "xs",
                        type: "danger",
                        onClick: ($event) => confirmDelete(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58trash, { class: "text-xs" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$F, {
                ref_key: "table",
                ref: table,
                columns: columns.value,
                api: unref(apiGetMenu)
              }, {
                "row-col-menu": withCtx(({ rawItem }) => [
                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                    createVNode("div", null, toDisplayString$1(rawItem.name), 1),
                    createVNode("div", { class: "text-xs text-gray-500 truncate" }, toDisplayString$1(rawItem.description), 1)
                  ])
                ]),
                "row-col-image": withCtx(({ rawItem }) => [
                  createVNode("img", {
                    src: rawItem.image,
                    class: "w-20 h-20"
                  }, null, 8, ["src"])
                ]),
                "row-col-action": withCtx(({ rawItem }) => [
                  createVNode("div", { class: "flex" }, [
                    createVNode(_component_Button, {
                      class: "mr-2",
                      size: "xs",
                      type: "warning",
                      onClick: ($event) => edit(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58pencil, { class: "text-xs" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      class: "mr-2",
                      size: "xs",
                      type: "danger",
                      onClick: ($event) => confirmDelete(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58trash, { class: "text-xs" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["columns", "api"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Pages/Menu.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "DetailModal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    transaction: null
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    computed(() => {
      return [
        { key: "no", label: "No", data: "$index" },
        { key: "menu", label: "Name", data: "name" },
        { key: "qty", label: "Qty", data: "pivot.quantity" },
        {
          key: "price",
          label: "Price",
          builder: (data) => formatCurrency(data.pivot.price)
        },
        {
          key: "total",
          label: "Total",
          builder: (data) => formatCurrency(data.pivot.total)
        }
      ];
    });
    watch(
      () => props.transaction,
      (val) => {
        if (!val)
          emit("close", true);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_5$1;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Transaction/DetailModal.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const DetailModal = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$D
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1216 1312",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_2 = { name: "fa-times", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1600 1280",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M1575 310q0 40-28 68l-724 724l-136 136q-28 28-68 28t-68-28l-136-136L53 740q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295l656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_1 = { name: "fa-check", render: render$2 };
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1792 1408",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 1184v192q0 13-9.5 22.5T224 1408H32q-13 0-22.5-9.5T0 1376v-192q0-13 9.5-22.5T32 1152h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5T224 1024H32q-13 0-22.5-9.5T0 992V800q0-13 9.5-22.5T32 768h192q13 0 22.5 9.5T256 800zm0-384v192q0 13-9.5 22.5T224 640H32q-13 0-22.5-9.5T0 608V416q0-13 9.5-22.5T32 384h192q13 0 22.5 9.5T256 416zm1536 768v192q0 13-9.5 22.5t-22.5 9.5H416q-13 0-22.5-9.5T384 1376v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 32v192q0 13-9.5 22.5T224 256H32q-13 0-22.5-9.5T0 224V32Q0 19 9.5 9.5T32 0h192q13 0 22.5 9.5T256 32zm1536 768v192q0 13-9.5 22.5t-22.5 9.5H416q-13 0-22.5-9.5T384 992V800q0-13 9.5-22.5T416 768h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5T1760 640H416q-13 0-22.5-9.5T384 608V416q0-13 9.5-22.5T416 384h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5T1760 256H416q-13 0-22.5-9.5T384 224V32q0-13 9.5-22.5T416 0h1344q13 0 22.5 9.5T1792 32z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0$1 = { name: "fa-list", render: render$1 };
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "Order",
  __ssrInlineRender: true,
  setup(__props) {
    useLoading();
    useToast();
    const table1 = ref(null);
    const api1 = Api.Transaction.All({ filter: { status: "pending" } });
    const columns = ref([
      { key: "no", label: "No", data: "$index" },
      { key: "code", label: "Transaction Code", data: "code" },
      { key: "name", label: "Name", data: "user_name" },
      {
        key: "total",
        label: "Total",
        builder: (data) => formatCurrency(data.total || "")
      },
      {
        key: "action",
        label: "..."
      }
    ]);
    const table2 = ref(null);
    const api2 = Api.Transaction.All({ filter: { status: "processing" } });
    const columns2 = ref([
      { key: "no", label: "No", data: "$index" },
      { key: "code", label: "Transaction Code", data: "code" },
      { key: "name", label: "Name", data: "user_name" },
      {
        key: "total",
        label: "Total",
        builder: (data) => formatCurrency(data.total || "")
      },
      { key: "status", label: "Status", data: "status" },
      {
        key: "action",
        label: "..."
      }
    ]);
    const transactionModel = ref();
    const modalConfirmShow = ref(false);
    const modalConfirmMode = ref("decline");
    const modalConfirmToggle = (mode) => {
      modalConfirmShow.value = !modalConfirmShow.value;
      modalConfirmMode.value = mode || modalConfirmMode.value;
    };
    const detail = (item) => {
      console.log("detail", item);
      transactionModel.value = item;
      modalConfirmMode.value = "detail";
    };
    const process2 = (item) => {
      console.log("process", item);
      transactionModel.value = item;
      modalConfirmToggle("process");
    };
    const decline = (item) => {
      console.log("decline", item);
      transactionModel.value = item;
      modalConfirmToggle("decline");
    };
    const cancel = (item) => {
      console.log("cancel", item);
      transactionModel.value = item;
      modalConfirmToggle("cancel");
    };
    const finish = (item) => {
      console.log("finish", item);
      transactionModel.value = item;
      modalConfirmToggle("finish");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$W;
      const _component_CardContent = __nuxt_component_4;
      const _component_CardTitle = _sfc_main$U;
      const _component_TransactionDetailModal = _sfc_main$D;
      const _component_Button = _sfc_main$17;
      const _component_IconFa58list = __unplugin_components_0$1;
      const _component_IconFa58check = __unplugin_components_1;
      const _component_IconFa58times = __unplugin_components_2;
      const _component_ClientOnly = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardContent, { class: "pb-2" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, {
                    class: "capitalize",
                    text: "New Order"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, {
                      class: "capitalize",
                      text: "New Order"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              ref_key: "table1",
              ref: table1,
              columns: columns.value,
              api: unref(api1)
            }, {
              "row-col-action": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TransactionDetailModal, {
                    show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex-1 flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    type: "secondary",
                    onClick: ($event) => detail(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58list, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>See Detail</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    onClick: ($event) => process2(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58check, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>Process</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58check, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Process")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    type: "danger",
                    onClick: ($event) => decline(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58times, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>Decline</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58times, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Decline")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_TransactionDetailModal, {
                      show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                      transaction: transactionModel.value,
                      onClose: () => {
                        transactionModel.value = void 0;
                      }
                    }, null, 8, ["show", "transaction", "onClose"]),
                    createVNode("div", { class: "flex-1 flex" }, [
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        type: "secondary",
                        onClick: ($event) => detail(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        onClick: ($event) => process2(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58check, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Process")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        type: "danger",
                        onClick: ($event) => decline(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58times, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Decline")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardContent, { class: "pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, {
                    class: "capitalize",
                    text: "New Order"
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$F, {
                ref_key: "table1",
                ref: table1,
                columns: columns.value,
                api: unref(api1)
              }, {
                "row-col-action": withCtx(({ rawItem }) => [
                  createVNode(_component_TransactionDetailModal, {
                    show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, 8, ["show", "transaction", "onClose"]),
                  createVNode("div", { class: "flex-1 flex" }, [
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      type: "secondary",
                      onClick: ($event) => detail(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58list, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "See Detail")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      onClick: ($event) => process2(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58check, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "Process")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      type: "danger",
                      onClick: ($event) => decline(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58times, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "Decline")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["columns", "api"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardContent, { class: "pb-2" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, {
                    class: "capitalize",
                    text: "Processing Order"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, {
                      class: "capitalize",
                      text: "Processing Order"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              ref_key: "table2",
              ref: table2,
              columns: columns2.value,
              api: unref(api2)
            }, {
              "row-col-action": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TransactionDetailModal, {
                    show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex-1 flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    type: "secondary",
                    onClick: ($event) => detail(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58list, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>See Detail</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    onClick: ($event) => finish(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58check, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>Finish</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58check, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Finish")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    type: "danger",
                    onClick: ($event) => cancel(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58times, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>Cancel</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58times, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Cancel")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_TransactionDetailModal, {
                      show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                      transaction: transactionModel.value,
                      onClose: () => {
                        transactionModel.value = void 0;
                      }
                    }, null, 8, ["show", "transaction", "onClose"]),
                    createVNode("div", { class: "flex-1 flex" }, [
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        type: "secondary",
                        onClick: ($event) => detail(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        onClick: ($event) => finish(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58check, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Finish")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        type: "danger",
                        onClick: ($event) => cancel(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58times, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "Cancel")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardContent, { class: "pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, {
                    class: "capitalize",
                    text: "Processing Order"
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$F, {
                ref_key: "table2",
                ref: table2,
                columns: columns2.value,
                api: unref(api2)
              }, {
                "row-col-action": withCtx(({ rawItem }) => [
                  createVNode(_component_TransactionDetailModal, {
                    show: transactionModel.value && modalConfirmMode.value === "detail" && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, 8, ["show", "transaction", "onClose"]),
                  createVNode("div", { class: "flex-1 flex" }, [
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      type: "secondary",
                      onClick: ($event) => detail(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58list, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "See Detail")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      onClick: ($event) => finish(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58check, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "Finish")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      type: "danger",
                      onClick: ($event) => cancel(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58times, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "Cancel")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["columns", "api"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Pages/Order.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Order = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "Transactions",
  __ssrInlineRender: true,
  setup(__props) {
    const filter = reactive({ status: "finished" });
    const api = computed(() => {
      return Api.Transaction.All({ filter: { status: filter.status } });
    });
    watch(filter, () => {
      console.log("filter", filter);
    });
    watch(api, () => {
      console.log("api", api);
    });
    const columns = ref([
      { key: "no", label: "No", data: "$index" },
      { key: "code", label: "Transaction Code", data: "code" },
      { key: "name", label: "Name", data: "user_name" },
      {
        key: "total",
        label: "Total",
        builder: (data) => formatCurrency(data.total || "")
      },
      { key: "status", label: "Status", data: "status" },
      {
        key: "action",
        label: "..."
      }
    ]);
    const transactionModel = ref();
    const detail = (item) => {
      console.log("edit", item);
      transactionModel.value = item;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$W;
      const _component_Table = _sfc_main$F;
      const _component_TransactionDetailModal = _sfc_main$D;
      const _component_Button = _sfc_main$17;
      const _component_IconFa58list = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-end mb-4 space-x-4"><div class="flex space-x-4 items-center"><div>FIlter Status :</div><select class="px-2 py-1 border bg-slate-800 text-white rounded"><option value="finished">Finished</option><option value="declined">Declined</option></select></div></div>`);
      _push(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Table, {
              api: unref(api),
              "onUpdate:api": ($event) => isRef(api) ? api.value = $event : null,
              columns: columns.value
            }, {
              "row-col-action": withCtx(({ rawItem }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TransactionDetailModal, {
                    show: transactionModel.value && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mr-2 flex items-center justify-center",
                    size: "xs",
                    type: "secondary",
                    onClick: ($event) => detail(rawItem)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFa58list, { class: "text-xs" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2"${_scopeId3}>See Detail</span>`);
                      } else {
                        return [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_TransactionDetailModal, {
                      show: transactionModel.value && transactionModel.value.id === rawItem.id ? true : false,
                      transaction: transactionModel.value,
                      onClose: () => {
                        transactionModel.value = void 0;
                      }
                    }, null, 8, ["show", "transaction", "onClose"]),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_Button, {
                        class: "mr-2 flex items-center justify-center",
                        size: "xs",
                        type: "secondary",
                        onClick: ($event) => detail(rawItem)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFa58list, { class: "text-xs" }),
                          createVNode("span", { class: "ml-2" }, "See Detail")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Table, {
                api: unref(api),
                "onUpdate:api": ($event) => isRef(api) ? api.value = $event : null,
                columns: columns.value
              }, {
                "row-col-action": withCtx(({ rawItem }) => [
                  createVNode(_component_TransactionDetailModal, {
                    show: transactionModel.value && transactionModel.value.id === rawItem.id ? true : false,
                    transaction: transactionModel.value,
                    onClose: () => {
                      transactionModel.value = void 0;
                    }
                  }, null, 8, ["show", "transaction", "onClose"]),
                  createVNode("div", { class: "flex" }, [
                    createVNode(_component_Button, {
                      class: "mr-2 flex items-center justify-center",
                      size: "xs",
                      type: "secondary",
                      onClick: ($event) => detail(rawItem)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFa58list, { class: "text-xs" }),
                        createVNode("span", { class: "ml-2" }, "See Detail")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["api", "onUpdate:api", "columns"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Pages/Transactions.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const Transactions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "uil-apps", render };
const _sfc_main$A = defineComponent({
  props: {
    mode: {
      type: String,
      default: "normal"
    }
  },
  setup() {
    const sidebar = ref(null);
    return {
      sidebar
    };
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Anchor = _sfc_main$Y;
  const _component_IconUil58apps = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "sidebar",
    class: {
      "fixed top-0 hidden pt-12 lg:flex lg:w-60 xl:w-80 h-screen": _ctx.mode === "normal",
      "relative flex-1 flex flex-col w-full": _ctx.mode === "mobile"
    }
  }, _attrs))}><div class="flex-1 overflow-y-auto pl-4 lg:pl-0 pr-4 py-4"><ul><!--[-->`);
  ssrRenderList(29, (i2) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_Anchor, {
      to: { name: "dashboard" },
      class: "group flex items-center mb-4 hover:no-underline"
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([{
            "text-white dark:text-white group-hover:bg-sky-500 bg-sky-500": i2 === 1,
            "text-slate-500 dark:text-gray-100 group-hover:bg-gray-200 bg-gray-100 dark:group-hover:bg-slate-600 dark:bg-slate-700": i2 !== 1
          }, "flex items-center mr-4 px-2 py-2 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"])}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_IconUil58apps, { class: "text-xs" }, null, _parent2, _scopeId));
          _push2(`</div><span class="${ssrRenderClass([{
            "font-extrabold text-sky-500 dark:text-sky-400": i2 === 1
          }, "text-sm font-semibold capitalize"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("pages.dashboard.index.nav"))}</span>`);
        } else {
          return [
            createVNode("div", {
              class: ["flex items-center mr-4 px-2 py-2 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10", {
                "text-white dark:text-white group-hover:bg-sky-500 bg-sky-500": i2 === 1,
                "text-slate-500 dark:text-gray-100 group-hover:bg-gray-200 bg-gray-100 dark:group-hover:bg-slate-600 dark:bg-slate-700": i2 !== 1
              }]
            }, [
              createVNode(_component_IconUil58apps, { class: "text-xs" })
            ], 2),
            createVNode("span", {
              class: ["text-sm font-semibold capitalize", {
                "font-extrabold text-sky-500 dark:text-sky-400": i2 === 1
              }]
            }, toDisplayString$1(_ctx.$t("pages.dashboard.index.nav")), 3)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Sidebar.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$k]]);
const Sidebar$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sidebar
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "TextAreaInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const paddingStyles = reactive({
      xs: "px-1 py-0.5",
      sm: "px-2 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-3"
    });
    const fontSizeStyles = reactive({
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    });
    const modelValue = useSyncProps(props, "modelValue", emit);
    const havePreEl = computed(
      () => typeof slots.prefix !== "undefined" || typeof slots["prefix-disabled"] !== "undefined"
    );
    const haveSuEl = computed(() => typeof slots.suffix !== "undefined");
    const selectedBorderStyle = computed(
      () => "border-gray-900/10 dark:border-gray-50/[0.2]"
    );
    const selectedOnHoverBorderStyle = computed(
      () => "dark:focus:border-white focus:border-gray-900"
    );
    const selectedPaddingStyle = computed(
      () => paddingStyles[props.size] || paddingStyles.md
    );
    const selectedFontSizeStyle = computed(
      () => fontSizeStyles[props.size] || fontSizeStyles.md
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: `text-input-container relative flex` }, _attrs))}>`);
      if (unref(slots)["prefix-disabled"]) {
        _push(`<div class="${ssrRenderClass(`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix-disabled", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slots).prefix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-l border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-input-wrapper relative flex flex-1"><textarea class="${ssrRenderClass(`text-input w-full flex-1 bg-transparent outline-none border ${unref(havePreEl) ? "" : "rounded-l"} ${unref(haveSuEl) ? "" : "rounded-r"} ${unref(selectedBorderStyle)} ${unref(selectedOnHoverBorderStyle)} ${unref(selectedPaddingStyle)} ${unref(selectedFontSizeStyle)}`)}"${ssrRenderAttr("placeholder", __props.placeholder)}>${ssrInterpolate(unref(modelValue))}</textarea></div>`);
      if (unref(slots).suffix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-r border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/TextAreaInput.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const TextAreaInput = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  data() {
    return {
      ready: false
    };
  },
  async mounted() {
    const THREE = await import('file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/three@0.143.0/node_modules/three/build/three.module.js').then((m2) => m2.default || m2);
    const { OrbitControls } = await import('file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/three@0.143.0/node_modules/three/examples/jsm/controls/OrbitControls.js').then((m2) => m2.default || m2);
    const { GLTFLoader } = await import('file:///home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/three@0.143.0/node_modules/three/examples/jsm/loaders/GLTFLoader.js').then((m2) => m2.default || m2);
    let canvas = document.querySelector("canvas.webgl");
    while (!canvas) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      canvas = document.querySelector("canvas.webgl");
    }
    const scene = new THREE.Scene();
    let gem;
    let light;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/assets/gem/gem.gltf", (gltf) => {
      gem = gltf.scene.children[6];
      gem.material.displacementScale = 0.15;
      gem.material.emissiveIntensity = 0.4;
      gem.material.refractionRatio = 1;
      gem.rotation.z = 0;
      scene.add(gem);
      light = gltf.scene.children[0];
      scene.add(light);
      this.ready = true;
    });
    const ambientLight = new THREE.AmbientLight(16777215, 2);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(16777215, 3);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(16777215, 3);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    const sizes = {
      width: 500,
      height: 500
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(2, 2, 6);
    scene.add(camera);
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.target.set(0, 0.75, 0);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    const renderer = new THREE.WebGLRenderer({
      antialiasing: true,
      canvas,
      alpha: true
    });
    renderer.setClearColor(0, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      if (gem) {
        gem.rotation.y = 1.1 * elapsedTime;
      }
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<canvas${ssrRenderAttrs(mergeProps({
    class: "webgl",
    style: { opacity: $data.ready ? 1 : 0 }
  }, _attrs))} data-v-9fa2f2ec></canvas>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gem.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Gem = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-9fa2f2ec"]]);
const Gem$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gem
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "md",
      validator: (val) => ["sm", "md", "lg"].includes(val)
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(fe), mergeProps({
        appear: "",
        show: __props.show,
        as: "template"
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ne), {
              as: "div",
              class: "relative z-10",
              onClose: ($event) => emit("close")
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_e), {
                          class: ["w-full transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800", {
                            "max-w-md": __props.size == "md",
                            "max-w-xl": __props.size == "xl"
                          }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Ue), {
                                as: "h3",
                                class: "text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.title)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString$1(__props.title), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                createVNode(unref(Ue), {
                                  as: "h3",
                                  class: "text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString$1(__props.title), 1)
                                  ]),
                                  _: 1
                                }),
                                renderSlot(_ctx.$slots, "default")
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_e), {
                            class: ["w-full transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800", {
                              "max-w-md": __props.size == "md",
                              "max-w-xl": __props.size == "xl"
                            }]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Ue), {
                                as: "h3",
                                class: "text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString$1(__props.title), 1)
                                ]),
                                _: 1
                              }),
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(oe), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                        createVNode(unref(oe), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_e), {
                              class: ["w-full transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800", {
                                "max-w-md": __props.size == "md",
                                "max-w-xl": __props.size == "xl"
                              }]
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Ue), {
                                  as: "h3",
                                  class: "text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString$1(__props.title), 1)
                                  ]),
                                  _: 1
                                }),
                                renderSlot(_ctx.$slots, "default")
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ne), {
                as: "div",
                class: "relative z-10",
                onClose: ($event) => emit("close")
              }, {
                default: withCtx(() => [
                  createVNode(unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                      createVNode(unref(oe), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_e), {
                            class: ["w-full transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800", {
                              "max-w-md": __props.size == "md",
                              "max-w-xl": __props.size == "xl"
                            }]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Ue), {
                                as: "h3",
                                class: "text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString$1(__props.title), 1)
                                ]),
                                _: 1
                              }),
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ]),
                        _: 3
                      })
                    ])
                  ])
                ]),
                _: 3
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const app2 = useState("app");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"><div class="w-full py-4 text-center md:text-left"><div class="mb-1">${ssrInterpolate(unref(app2).name)}</div><div class="text-xs text-gray-600 dark:text-gray-400"> Copyright \xA9 2022 <a${ssrRenderAttr("href", unref(app2).author.link)}>${ssrInterpolate(unref(app2).author.name)}</a>. All rights reserved. Made with <span class="text-red-500">\u2764</span></div></div></section></footer>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Footer.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const app2 = useState("app");
    const menus = computed(() => []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BuilderNavbar = _sfc_main$J;
      const _component_Anchor = _sfc_main$Y;
      const _component_Button = _sfc_main$17;
      const _component_ThemeSwitcher = _sfc_main$H;
      const _component_ActionSheet = _sfc_main$K;
      const _component_ActionSheetBody = __nuxt_component_5;
      const _component_ActionSheetHeader = _sfc_main$M;
      _push(ssrRenderComponent(_component_BuilderNavbar, _attrs, {
        banner: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"${_scopeId}><span class="mr-1"${_scopeId}>${ssrInterpolate(_ctx.$t("banners.welcome", { app_name: unref(app2).name }))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize" }, [
                createVNode("span", { class: "mr-1" }, toDisplayString$1(_ctx.$t("banners.welcome", { app_name: unref(app2).name })), 1)
              ])
            ];
          }
        }),
        menu: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative hidden lg:flex items-center ml-auto"${_scopeId}><nav class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300" role="navigation"${_scopeId}><ul class="flex items-center space-x-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(menus), (item, i2) => {
              _push2(`<li${_scopeId}>`);
              if (item.type === "link") {
                _push2(ssrRenderComponent(_component_Anchor, {
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0,
                  class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                }, {
                  default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString$1(item.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (item.type === "button") {
                _push2(ssrRenderComponent(_component_Button, {
                  text: item.text,
                  size: "xs",
                  class: "font-extrabold capitalize",
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></nav><div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ThemeSwitcher, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative hidden lg:flex items-center ml-auto" }, [
                createVNode("nav", {
                  class: "text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300",
                  role: "navigation"
                }, [
                  createVNode("ul", { class: "flex items-center space-x-8" }, [
                    (openBlock(true), createBlock(Fragment$1, null, renderList(unref(menus), (item, i2) => {
                      return openBlock(), createBlock("li", { key: i2 }, [
                        item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                          key: 0,
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0,
                          class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString$1(item.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                          key: 1,
                          text: item.text,
                          size: "xs",
                          class: "font-extrabold capitalize",
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0
                        }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]" }, [
                  createVNode(_component_ThemeSwitcher)
                ])
              ])
            ];
          }
        }),
        options: withCtx(({ toggleOptions }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionSheet, {
              onOnClose: ($event) => toggleOptions(false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ActionSheetBody, null, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ActionSheetHeader, { text: "Menu" }, null, _parent4, _scopeId3));
                        _push4(`<nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300"${_scopeId3}><ul class="flex flex-col"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(menus), (item, i2) => {
                          _push4(`<li class="${ssrRenderClass([{
                            "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                          }, "flex w-full"])}"${_scopeId3}>`);
                          if (item.type === "link") {
                            _push4(ssrRenderComponent(_component_Anchor, {
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0,
                              class: "flex-1 hover:no-underline capitalize"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString$1(item.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (item.type === "button") {
                            _push4(ssrRenderComponent(_component_Button, {
                              text: item.text,
                              size: "xs",
                              class: "flex-1 font-extrabold capitalize",
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul></nav><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.theme_switcher.change_theme"))}</div><div class="mt-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ThemeSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.language_switcher.change_language"))}</div>`);
                      } else {
                        return [
                          createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                          createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                            createVNode("ul", { class: "flex flex-col" }, [
                              (openBlock(true), createBlock(Fragment$1, null, renderList(unref(menus), (item, i2) => {
                                return openBlock(), createBlock("li", {
                                  key: i2,
                                  class: ["flex w-full", {
                                    "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                  }]
                                }, [
                                  item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                    key: 0,
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0,
                                    class: "flex-1 hover:no-underline capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString$1(item.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                    key: 1,
                                    text: item.text,
                                    size: "xs",
                                    class: "flex-1 font-extrabold capitalize",
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0
                                  }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                                ], 2);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode(_component_ThemeSwitcher, { type: "select-box" })
                          ]),
                          createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    text: "Close",
                    type: "secondary",
                    onClick: ($event) => toggleOptions(false)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ActionSheetBody, null, {
                      default: withCtx(() => [
                        createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                        createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                          createVNode("ul", { class: "flex flex-col" }, [
                            (openBlock(true), createBlock(Fragment$1, null, renderList(unref(menus), (item, i2) => {
                              return openBlock(), createBlock("li", {
                                key: i2,
                                class: ["flex w-full", {
                                  "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                }]
                              }, [
                                item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                  key: 0,
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0,
                                  class: "flex-1 hover:no-underline capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString$1(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                  key: 1,
                                  text: item.text,
                                  size: "xs",
                                  class: "flex-1 font-extrabold capitalize",
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0
                                }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                              ], 2);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                        createVNode("div", { class: "mt-2" }, [
                          createVNode(_component_ThemeSwitcher, { type: "select-box" })
                        ]),
                        createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      text: "Close",
                      type: "secondary",
                      onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionSheet, {
                onOnClose: ($event) => toggleOptions(false)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ActionSheetBody, null, {
                    default: withCtx(() => [
                      createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                      createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                        createVNode("ul", { class: "flex flex-col" }, [
                          (openBlock(true), createBlock(Fragment$1, null, renderList(unref(menus), (item, i2) => {
                            return openBlock(), createBlock("li", {
                              key: i2,
                              class: ["flex w-full", {
                                "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                              }]
                            }, [
                              item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                key: 0,
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0,
                                class: "flex-1 hover:no-underline capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString$1(item.text), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                key: 1,
                                text: item.text,
                                size: "xs",
                                class: "flex-1 font-extrabold capitalize",
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0
                              }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                            ], 2);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.theme_switcher.change_theme")), 1),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_ThemeSwitcher, { type: "select-box" })
                      ]),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString$1(_ctx.$t("components.language_switcher.change_language")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    text: "Close",
                    type: "secondary",
                    onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1032, ["onOnClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Navbar.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const fetchContentNavigation = (queryBuilder) => {
  let params = queryBuilder;
  if (typeof (params == null ? void 0 : params.params) === "function") {
    params = params.params();
  }
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}.json` : "/navigation");
  {
    addPrerenderPath(apiPath);
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const _sfc_main$u = defineComponent({
  name: "ContentNavigation",
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContent();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h$2(__nuxt_component_0$2, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h$2(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h$2("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h$2("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const ContentNavigation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = defineComponent({
  name: "ContentSlot",
  functional: true,
  props: {
    use: {
      type: Function,
      default: void 0
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap: unwrap2, fallbackSlot, between, tags, parent }) {
    var _a;
    try {
      let slot = use;
      if (typeof use === "string") {
        slot = (parent == null ? void 0 : parent.slots[use]) || ((_a = parent == null ? void 0 : parent.parent) == null ? void 0 : _a.slots[use]);
        console.warn(`Please set :use="$slots.${use}" in <ContentSlot> component to enable reactivity`);
      }
      if (!slot) {
        return fallbackSlot ? fallbackSlot() : h$2("div");
      }
      if (!unwrap2) {
        return [slot()];
      }
      const { flatUnwrap: flatUnwrap2 } = useUnwrap();
      const unwrapped = flatUnwrap2(slot(), tags);
      if (between) {
        return unwrapped.flatMap(
          (vnode, index2) => index2 === 0 ? [vnode] : [between(), vnode]
        );
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e2) {
      return h$2("div");
    }
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const ContentSlot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = defineComponent({
  name: "Markdown",
  extends: _sfc_main$t,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Markdown = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ href: __props.href }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const ProseA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</blockquote>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const ProseBlockquote = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$i]]);
const ProseBlockquote$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseBlockquote
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ProseCode = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$h]]);
const ProseCode$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseCode
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<code${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</code>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const ProseCodeInline = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$g]]);
const ProseCodeInline$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseCodeInline
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<em${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</em>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const ProseEm = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$f]]);
const ProseEm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseEm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const ProseH1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$e]]);
const ProseH1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseH1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))}><a${ssrRenderAttr("href", `#${__props.id}`)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a></h2>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ProseH2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))}><a${ssrRenderAttr("href", `#${__props.id}`)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a></h3>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const ProseH3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))}><a${ssrRenderAttr("href", `#${__props.id}`)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a></h4>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ProseH4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<h5${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h5>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const ProseH5 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$d]]);
const ProseH5$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseH5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<h6${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h6>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ProseH6 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$c]]);
const ProseH6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseH6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<hr${ssrRenderAttrs(_attrs)}>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ProseHr = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$b]]);
const ProseHr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseHr
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: __props.src,
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const ProseImg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ProseLi = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$a]]);
const ProseLi$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseLi
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<ol${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ol>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ProseOl = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const ProseOl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseOl
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ProseP = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const ProseP$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseP
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<strong${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</strong>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ProseStrong = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const ProseStrong$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseStrong
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<table${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</table>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ProseTable = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const ProseTable$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseTable
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tbody>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ProseTbody = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const ProseTbody$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseTbody
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<td${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ProseTd = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const ProseTd$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseTd
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<th${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</th>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProseTh = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const ProseTh$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseTh
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<thead${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</thead>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProseThead = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const ProseThead$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseThead
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<tr${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tr>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProseTr = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const ProseTr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseTr
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProseUl = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const ProseUl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProseUl
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "welcome",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Welcome to Nuxt 3!"
    },
    readDocs: {
      type: String,
      default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
    },
    followTwitter: {
      type: String,
      default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
    },
    starGitHub: {
      type: String,
      default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.title}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2{margin:0}h1,h2{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base" }, _attrs))} data-v-94cecdbb><div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20" data-v-94cecdbb><div class="flex justify-between items-end col-span-3" data-v-94cecdbb><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="nuxt-logo" data-v-94cecdbb><svg viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-40 text-black dark:text-white" data-v-94cecdbb><g clip-path="url(#a)" data-v-94cecdbb><path fill="currentColor" d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z" data-v-94cecdbb></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z" fill="#80EEC0" data-v-94cecdbb></path><path d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z" fill="#00DC82" data-v-94cecdbb></path></g><defs data-v-94cecdbb><clipPath id="a" data-v-94cecdbb><path fill="#fff" d="M0 0h221v65H0z" data-v-94cecdbb></path></clipPath></defs></svg></a><a${ssrRenderAttr("href", `https://github.com/nuxt/framework/releases/tag/${__props.version}`)} target="_blank" rel="noopener" class="flex justify-end pb-1 sm:pb-2" data-v-94cecdbb>${ssrInterpolate(__props.version)}</a><div class="spotlight-wrapper" data-v-94cecdbb><div class="fixed z-10 left-0 right-0 spotlight" data-v-94cecdbb></div></div></div><div class="col-span-3 rounded p-4 flex flex-col gradient-border" data-v-94cecdbb><div class="flex justify-between items-center mb-4" data-v-94cecdbb><h1 class="font-medium text-2xl" data-v-94cecdbb>Get Started</h1><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94cecdbb><path d="M29.4284 31.095C26.9278 33.5955 23.5364 35.0003 20.0001 35.0003C16.4637 35.0003 13.0723 33.5955 10.5717 31.095C8.07118 28.5944 6.66638 25.203 6.66638 21.6667C6.66638 18.1304 8.07118 14.7389 10.5717 12.2383C10.5717 12.2383 11.6667 15 15.0001 16.6667C15.0001 13.3333 15.8334 8.33333 19.9767 5C23.3334 8.33333 26.8167 9.62833 29.4267 12.2383C30.667 13.475 31.6506 14.9446 32.321 16.5626C32.9915 18.1806 33.3355 19.9152 33.3334 21.6667C33.3357 23.418 32.9919 25.1525 32.3218 26.7705C31.6516 28.3886 30.6683 29.8582 29.4284 31.095V31.095Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-94cecdbb></path><path d="M16.465 26.8683C17.0456 27.4491 17.7604 27.878 18.5462 28.1169C19.3319 28.3559 20.1644 28.3976 20.9701 28.2385C21.7758 28.0793 22.5299 27.7241 23.1657 27.2043C23.8015 26.6845 24.2995 26.016 24.6157 25.2581C24.9318 24.5001 25.0564 23.6759 24.9784 22.8584C24.9004 22.0408 24.6222 21.2551 24.1684 20.5705C23.7146 19.886 23.0992 19.3238 22.3766 18.9336C21.6539 18.5434 20.8463 18.3373 20.025 18.3333L18.3333 23.3333H15C15 24.6133 15.4883 25.8933 16.465 26.8683Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-94cecdbb></path></svg></div><p class="mb-2" data-v-94cecdbb>Remove this welcome page by replacing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-94cecdbb>&lt;NuxtWelcome /&gt;</a> in <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-94cecdbb>app.vue</a> with your own code.</p></div><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="gradient-border cursor-pointer col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-94cecdbb><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94cecdbb><path d="M20 10.4217C21.9467 9.12833 24.59 8.33333 27.5 8.33333C30.4117 8.33333 33.0533 9.12833 35 10.4217V32.0883C33.0533 30.795 30.4117 30 27.5 30C24.59 30 21.9467 30.795 20 32.0883M20 10.4217V32.0883V10.4217ZM20 10.4217C18.0533 9.12833 15.41 8.33333 12.5 8.33333C9.59 8.33333 6.94667 9.12833 5 10.4217V32.0883C6.94667 30.795 9.59 30 12.5 30C15.41 30 18.0533 30.795 20 32.0883V10.4217Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-94cecdbb></path><rect x="23.3334" y="13.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-94cecdbb></rect><rect x="8.33337" y="13.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-94cecdbb></rect><rect x="8.33337" y="18.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-94cecdbb></rect><rect x="8.33337" y="23.3333" width="8.33333" height="1.66667" rx="0.833334" fill="currentColor" data-v-94cecdbb></rect><rect x="23.3334" y="18.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-94cecdbb></rect><rect x="23.3334" y="23.3333" width="8.33334" height="1.66667" rx="0.833334" fill="currentColor" data-v-94cecdbb></rect></svg><h2 class="font-semibold text-xl mt-4" data-v-94cecdbb>Documentation</h2><p class="mt-2" data-v-94cecdbb>${ssrInterpolate(__props.readDocs)}</p></a><a href="https://github.com/nuxt/framework" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-94cecdbb><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94cecdbb><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.33333C10.795 3.33333 3.33337 10.8067 3.33337 20.0283C3.33337 27.4033 8.10837 33.6617 14.7317 35.8683C15.565 36.0217 15.8684 35.5067 15.8684 35.0633C15.8684 34.6683 15.855 33.6167 15.8467 32.225C11.21 33.2333 10.2317 29.9867 10.2317 29.9867C9.47504 28.0567 8.38171 27.5433 8.38171 27.5433C6.86837 26.51 8.49671 26.53 8.49671 26.53C10.1684 26.6467 11.0484 28.25 11.0484 28.25C12.535 30.8 14.95 30.0633 15.8984 29.6367C16.0517 28.5583 16.4817 27.8233 16.9584 27.4067C13.2584 26.985 9.36671 25.5517 9.36671 19.155C9.36671 17.3333 10.0167 15.8417 11.0817 14.675C10.91 14.2533 10.3384 12.555 11.245 10.2583C11.245 10.2583 12.645 9.80833 15.8284 11.9683C17.188 11.5975 18.5908 11.4087 20 11.4067C21.4167 11.4133 22.8417 11.5983 24.1734 11.9683C27.355 9.80833 28.7517 10.2567 28.7517 10.2567C29.6617 12.555 29.0884 14.2533 28.9184 14.675C29.985 15.8417 30.6317 17.3333 30.6317 19.155C30.6317 25.5683 26.7334 26.98 23.0217 27.3933C23.62 27.9083 24.1517 28.9267 24.1517 30.485C24.1517 32.715 24.1317 34.5167 24.1317 35.0633C24.1317 35.51 24.4317 36.03 25.2784 35.8667C28.5972 34.7535 31.4823 32.6255 33.5258 29.7834C35.5694 26.9413 36.6681 23.5289 36.6667 20.0283C36.6667 10.8067 29.2034 3.33333 20 3.33333Z" fill="currentColor" data-v-94cecdbb></path></svg><h2 class="font-semibold text-xl mt-4" data-v-94cecdbb>GitHub</h2><p class="mt-2" data-v-94cecdbb>${ssrInterpolate(__props.starGitHub)}</p></a><a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-94cecdbb><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94cecdbb><path d="M13.8167 33.7557C26.395 33.7557 33.275 23.334 33.275 14.2973C33.275 14.0007 33.275 13.7057 33.255 13.414C34.5937 12.4449 35.7489 11.245 36.6667 9.87066C35.4185 10.424 34.0943 10.7869 32.7384 10.9473C34.1661 10.0924 35.2346 8.74791 35.745 7.164C34.4029 7.96048 32.9345 8.52188 31.4034 8.824C30.3724 7.72694 29.0084 7.00039 27.5228 6.75684C26.0371 6.51329 24.5126 6.76633 23.1852 7.47678C21.8579 8.18723 20.8018 9.31545 20.1805 10.6868C19.5592 12.0581 19.4073 13.596 19.7484 15.0623C17.0294 14.9261 14.3694 14.2195 11.9411 12.9886C9.51285 11.7577 7.37059 10.0299 5.65337 7.91733C4.7789 9.42267 4.51102 11.2047 4.90427 12.9006C5.29751 14.5965 6.32232 16.0788 7.77004 17.0457C6.68214 17.0142 5.61776 16.7215 4.66671 16.1923V16.279C4.66736 17.8578 5.21403 19.3878 6.21404 20.6096C7.21404 21.8313 8.60582 22.6696 10.1534 22.9823C9.14639 23.2569 8.08986 23.2968 7.06504 23.099C7.50198 24.4581 8.35284 25.6467 9.49859 26.4984C10.6443 27.35 12.0277 27.8223 13.455 27.849C12.0369 28.9633 10.413 29.7871 8.67625 30.2732C6.93948 30.7594 5.12391 30.8984 3.33337 30.6823C6.46105 32.6896 10.1004 33.7542 13.8167 33.749" fill="currentColor" data-v-94cecdbb></path></svg><h2 class="font-semibold text-xl mt-4" data-v-94cecdbb>Twitter</h2><p class="mt-2" data-v-94cecdbb>${ssrInterpolate(__props.followTwitter)}</p></a></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.4.0/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const welcome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-94cecdbb"]]);
const welcome$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: welcome
}, Symbol.toStringTag, { value: "Module" }));
const nuxtErrorBoundary = defineComponent({
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    onErrorCaptured((err) => {
    });
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});
const nuxtErrorBoundary$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nuxtErrorBoundary
}, Symbol.toStringTag, { value: "Module" }));
const serverPlaceholder = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const serverPlaceholder$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: serverPlaceholder
}, Symbol.toStringTag, { value: "Module" }));
const nuxtLoadingIndicator = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h$2("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: `${indicator.progress.value}%`,
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transition: "width 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    });
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    isLoading.value = true;
    if (opts.throttle)
      ;
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const nuxtLoadingIndicator$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nuxtLoadingIndicator
}, Symbol.toStringTag, { value: "Module" }));
defineAsyncComponent(() => Promise.resolve().then(() => Tab).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Tabs).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Body).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Header).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Overlay).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => index$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Alert).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Anchor).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Navbar$3).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Button).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Content).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Footer$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Title$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => index$2).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Navbar$2).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Menu).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Order).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Transactions).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Sidebar$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Error$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Card).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Switch).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => TextAreaInput).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => TextInput).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Gem$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => LanguageSwitcher).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Modal).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Body$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Doc).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Renderer).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Footer).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Header$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Navbar).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Title).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => index$3).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Title$2).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Wrapper).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Table).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ThemeSwitcher).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => DetailModal).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentDoc).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentList).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentNavigation).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentQuery).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentRenderer).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentRendererMarkdown).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ContentSlot).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => DocumentDrivenEmpty).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => DocumentDrivenNotFound).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => Markdown).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseA).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseBlockquote$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseCode$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseCodeInline$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseEm$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH1$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH2).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH3).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH4).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH5$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseH6$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseHr$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseImg).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseLi$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseOl$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseP$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseStrong$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseTable$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseTbody$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseTd$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseTh$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseThead$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseTr$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => ProseUl$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => welcome$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => layout).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => nuxtErrorBoundary$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => clientOnly).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => serverPlaceholder$1).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => nuxtLink).then((c2) => c2.default || c2));
defineAsyncComponent(() => Promise.resolve().then(() => nuxtLoadingIndicator$1).then((c2) => c2.default || c2));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const hasFoodInCart = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "group hover:no-underline flex h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$W), {
        class: ["h-full flex flex-col relative overflow-hidden bg-gray-200 shadow-lg dark:group-hover:border-primary-200", {
          "dark:border-primary-200": hasFoodInCart.value
        }]
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full relative overflow-hidden"${_scopeId}><div class="transition-all flex justify-center items-center transform duration-300 absolute z-10 bg-slate-900/30 group-hover:bg-slate-900/50 w-full h-full"${_scopeId}><div class="text-xl font-extrabold text-gray-100 drop-shadow-xl group-hover:animate-pulse text-center"${_scopeId}>${ssrInterpolate(__props.menu.name)}</div></div><div class="transition-all transform duration-300 group-hover:scale-110" style="${ssrRenderStyle({
              backgroundImage: `url(${__props.menu.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%"
            })}"${_scopeId}></div></div><div class="text-sm p-2 flex justify-between items-center bg-slate-800"${_scopeId}><div class="font-bold flex items-center"${_scopeId}>${ssrInterpolate(_ctx.$formatCurrency(__props.menu.price))}</div><div class="rounded bg-primary-500 p-0.5"${_scopeId}>`);
            if (hasFoodInCart.value) {
              _push2(`<div class="w-4 h-4"${_scopeId}>+1</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full relative overflow-hidden" }, [
                createVNode("div", { class: "transition-all flex justify-center items-center transform duration-300 absolute z-10 bg-slate-900/30 group-hover:bg-slate-900/50 w-full h-full" }, [
                  createVNode("div", { class: "text-xl font-extrabold text-gray-100 drop-shadow-xl group-hover:animate-pulse text-center" }, toDisplayString$1(__props.menu.name), 1)
                ]),
                createVNode("div", {
                  class: "transition-all transform duration-300 group-hover:scale-110",
                  style: {
                    backgroundImage: `url(${__props.menu.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%"
                  }
                }, null, 4)
              ]),
              createVNode("div", { class: "text-sm p-2 flex justify-between items-center bg-slate-800" }, [
                createVNode("div", { class: "font-bold flex items-center" }, toDisplayString$1(_ctx.$formatCurrency(__props.menu.price)), 1),
                createVNode("div", { class: "rounded bg-primary-500 p-0.5" }, [
                  hasFoodInCart.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-4 h-4"
                  }, "+1")) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Food/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const useCart = defineStore("cart", {
  state: () => ({
    menus: []
  }),
  actions: {
    addMenu(menu, quantity) {
      const index2 = this.menus.findIndex((m2) => m2.menu.id === menu.id);
      if (index2 === -1) {
        this.menus.push({ menu, quantity });
      } else {
        this.menus[index2].quantity += quantity;
      }
    },
    getPriceMenuItem(item) {
      return item.menu.price * item.quantity;
    },
    reset() {
      this.menus = [];
    },
    increment(item) {
      this.menus.find((m2) => m2.menu.id === item.menu.id).quantity++;
    },
    decrement(item) {
      const index2 = this.menus.findIndex((m2) => m2.menu.id === item.menu.id);
      if (this.menus[index2].quantity > 1) {
        this.menus[index2].quantity--;
      } else {
        this.menus.splice(index2, 1);
      }
    }
  }
});
const meta$2 = {
  layout: "page"
};
const useAuth = defineStore("auth", {
  state: () => ({
    user: void 0,
    isLoggedIn: false
  }),
  actions: {
    async login(data) {
      const router = useRouter();
      const api = useApi();
      try {
        const res = await api.create(Api.Auth.Login({ ...data }));
        if (res.status === 200 && res.data.token) {
          console.log("res.data.token", res.data.token);
          this.updateWithToken(res.data.token);
          console.log(res, await this.fetchMe());
          this.isLoggedIn = true;
        }
        router.push("/owner");
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
    async fetchMe() {
      const api = useApi();
      try {
        const res = await api.create(Api.Auth.Me());
        if (res.status === 200 && res.data.email) {
          this.user = res.data;
        }
        this.isLoggedIn = true;
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
    updateWithToken(token) {
      const api = useApi();
      api.http.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(
        "updated token",
        api.http.defaults.headers.common.Authorization
      );
    },
    clearToken() {
      const api = useApi();
      api.http.defaults.headers.common.Authorization = "";
      console.log(
        "updated token",
        api.http.defaults.headers.common.Authorization
      );
    },
    logout() {
      const router = useRouter();
      console.log("logging out");
      this.clearToken();
      this.user = void 0;
      this.isLoggedIn = false;
      router.push("/owner/auth/login");
      console.log("logged out");
    }
  }
});
const meta$1 = {
  layout: "dashboard"
};
const meta = {
  layout: "dashboard",
  middleware: ["auth"]
};
const _routes = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    file: "/home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue",
    children: [],
    meta: meta$b,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/document-driven.9056d590.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-404",
    path: "/bak/404",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/404.vue",
    children: [],
    meta: meta$a,
    alias: (meta$a == null ? void 0 : meta$a.alias) || [],
    redirect: (meta$a == null ? void 0 : meta$a.redirect) || void 0,
    component: () => import('./_nuxt/404.13d15aaa.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-blank",
    path: "/bak/blank",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/blank.vue",
    children: [],
    meta: meta$9,
    alias: (meta$9 == null ? void 0 : meta$9.alias) || [],
    redirect: (meta$9 == null ? void 0 : meta$9.redirect) || void 0,
    component: () => import('./_nuxt/blank.82c24d8a.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-dashboard",
    path: "/bak/dashboard",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/dashboard/index.vue",
    children: [],
    meta: meta$8,
    alias: (meta$8 == null ? void 0 : meta$8.alias) || [],
    redirect: (meta$8 == null ? void 0 : meta$8.redirect) || void 0,
    component: () => import('./_nuxt/index.af2c2847.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-getting-started",
    path: "/bak/getting-started",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/getting-started.vue",
    children: [],
    meta: meta$7,
    alias: (meta$7 == null ? void 0 : meta$7.alias) || [],
    redirect: (meta$7 == null ? void 0 : meta$7.redirect) || void 0,
    component: () => import('./_nuxt/getting-started.7176e9eb.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-post-slut",
    path: "/bak/post/:slut",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/post/[slut].vue",
    children: [],
    meta: meta$6,
    alias: (meta$6 == null ? void 0 : meta$6.alias) || [],
    redirect: (meta$6 == null ? void 0 : meta$6.redirect) || void 0,
    component: () => import('./_nuxt/_slut_.08aec233.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-post",
    path: "/bak/post",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/post/index.vue",
    children: [],
    meta: meta$5,
    alias: (meta$5 == null ? void 0 : meta$5.alias) || [],
    redirect: (meta$5 == null ? void 0 : meta$5.redirect) || void 0,
    component: () => import('./_nuxt/index.c74cee44.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-setting",
    path: "/bak/setting",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/setting.vue",
    children: [],
    meta: meta$4,
    alias: (meta$4 == null ? void 0 : meta$4.alias) || [],
    redirect: (meta$4 == null ? void 0 : meta$4.redirect) || void 0,
    component: () => import('./_nuxt/setting.c038ee61.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "bak-test",
    path: "/bak/test",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/bak/test.vue",
    children: [],
    meta: meta$3,
    alias: (meta$3 == null ? void 0 : meta$3.alias) || [],
    redirect: (meta$3 == null ? void 0 : meta$3.redirect) || void 0,
    component: () => import('./_nuxt/test.c87fdd20.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "index",
    path: "/",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    redirect: (meta$2 == null ? void 0 : meta$2.redirect) || void 0,
    component: () => import('./_nuxt/index.876a7552.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "owner-auth-login",
    path: "/owner/auth/login",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/owner/auth/login.vue",
    children: [],
    meta: meta$1,
    alias: (meta$1 == null ? void 0 : meta$1.alias) || [],
    redirect: (meta$1 == null ? void 0 : meta$1.redirect) || void 0,
    component: () => import('./_nuxt/login.f056f7da.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "owner",
    path: "/owner",
    file: "/home/viandwi24/Project/Learn/foody-client/pages/owner/index.vue",
    children: [],
    meta,
    alias: (meta == null ? void 0 : meta.alias) || [],
    redirect: (meta == null ? void 0 : meta.redirect) || void 0,
    component: () => import('./_nuxt/index.6a306a89.mjs').then((m2) => m2.default || m2)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const globalMiddleware = [];
const namedMiddleware = {};
const node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_pages_runtime_router_mjs_ZUrnqv0E3k = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r2) => r2.default || r2)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if (path2.startsWith(file._path) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
const node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_plugins_documentDriven_mjs_LvAtC8NY0h = defineNuxtPlugin((nuxt) => {
  var _a, _b;
  const { documentDriven: moduleOptions } = (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.public) == null ? void 0 : _b.content;
  const findLayout = (to, page, navigation, globals) => {
    var _a2;
    if (page && (page == null ? void 0 : page.layout)) {
      return page.layout;
    }
    if (to.matched.length && ((_a2 = to.matched[0].meta) == null ? void 0 : _a2.layout)) {
      return to.matched[0].meta.layout;
    }
    if (navigation && page) {
      const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
      const layoutFromNav = navKeyFromPath2(page._path, "layout", navigation);
      if (layoutFromNav) {
        return layoutFromNav;
      }
    }
    if (moduleOptions.layoutFallbacks && globals) {
      let layoutFallback;
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals[fallback] && globals[fallback].layout) {
          layoutFallback = globals[fallback].layout;
          break;
        }
      }
      if (layoutFallback) {
        return layoutFallback;
      }
    }
    return "default";
  };
  const refresh = async (to, force = false) => {
    const routeConfig = to.meta.documentDriven || {};
    if (to.meta.documentDriven === false) {
      return;
    }
    !force && nuxt.callHook("content:middleware:start");
    const { navigation, pages, globals, surrounds } = useContentState();
    const _path = withoutTrailingSlash(to.path);
    const promises = [];
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState();
        if (navigation2.value && !force) {
          return navigation2.value;
        }
        return fetchContentNavigation().then((_navigation) => {
          navigation2.value = _navigation;
          return _navigation;
        }).catch((_2) => {
        });
      };
      promises.push(navigationQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState();
        if (typeof moduleOptions.globals === "object" && Array.isArray(moduleOptions.globals)) {
          console.log("Globals must be a list of keys with QueryBuilderParams as a value.");
          return;
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(
            ([key, query]) => {
              if (!force && globals2.value[key]) {
                return globals2.value[key];
              }
              let type = "findOne";
              if (query == null ? void 0 : query.type) {
                type = query.type;
              }
              return queryContent(query)[type]().catch(() => {
              });
            }
          )
        ).then(
          (values) => {
            return values.reduce(
              (acc, value, index2) => {
                const key = Object.keys(moduleOptions.globals)[index2];
                acc[key] = value;
                return acc;
              },
              {}
            );
          }
        );
      };
      promises.push(globalsQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path };
      if (typeof routeConfig.page === "string") {
        where = { _path: routeConfig.page };
      }
      if (typeof routeConfig.page === "object") {
        where = routeConfig.page;
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState();
        if (!force && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path];
        }
        return queryContent().where(where).findOne().catch(() => {
        });
      };
      promises.push(pageQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path;
      if (["string", "object"].includes(typeof routeConfig.page)) {
        surround = routeConfig.page;
      }
      if (["string", "object"].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround;
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState();
        if (!force && surrounds2.value[_path]) {
          return surrounds2.value[_path];
        }
        return queryContent().where({
          _partial: { $not: true },
          navigation: { $not: false }
        }).without(["body"]).findSurround(surround).catch(() => {
        });
      };
      promises.push(surroundQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    return await Promise.all(promises.map((promise) => promise())).then(async ([
      _navigation,
      _globals,
      _page,
      _surround
    ]) => {
      if (_navigation) {
        navigation.value = _navigation;
      }
      if (_globals) {
        globals.value = _globals;
      }
      if (_page == null ? void 0 : _page.redirect) {
        return _page == null ? void 0 : _page.redirect;
      }
      if (_page) {
        const layoutName = findLayout(to, _page, _navigation, _globals);
        const layout2 = layouts[layoutName];
        if (layout2 && (layout2 == null ? void 0 : layout2.__asyncLoader) && !layout2.__asyncResolved) {
          await layout2.__asyncLoader();
        }
        to.meta.layout = layoutName;
        _page.layout = layoutName;
        pages.value[_path] = _page;
      }
      if (_surround) {
        surrounds.value[_path] = _surround;
      }
    });
  };
  addRouteMiddleware(async (to, from) => {
    if (to.path.includes("favicon.ico")) {
      return;
    }
    const redirect = await refresh(to, false);
    if (redirect) {
      return redirect;
    }
  });
  {
    delete nuxt.payload.prerenderedAt;
  }
  nuxt.hook("app:data:refresh", async () => false);
});
const node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_NQlgzIsbpr = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const node_modules__pnpm__64pinia_43nuxt_640_4_2_arz4dztosvwy2ghjrlh2wdhejm_node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_pVE3b3T53c = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const optionsLoader = () => Promise.resolve({ "locale": "en", "fallbackLocale": "en", "availableLocales": ["en", "id", "ja", "ko"] });
const locale_en = {
  "components": {
    "language_switcher": {
      "change_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["change language"]);
      }
    },
    "theme_switcher": {
      "theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["theme"]);
      },
      "change_theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["change theme"]);
      }
    }
  },
  "pages": {
    "index": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["nuxt 3[]awesome[]starter"]);
      }
    },
    404: {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["page not found"]);
      }
    },
    "blank": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["blank"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["blank page"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["this is a blank page"]);
      },
      "just_blank_page_with_title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["just blank page with title"]);
      }
    },
    "post": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["post"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["post"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["this is a post page"]);
      }
    },
    "test": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["test"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["testing"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["this is a test page"]);
      },
      "counter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["counter"]);
      },
      "increment": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["increment"]);
      },
      "decrement": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["decrement"]);
      },
      "reset": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["reset"]);
      },
      "identity": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["identity"]);
      },
      "full_name": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["fullName"]);
      }
    },
    "getting-started": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["getting started"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["getting started"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["this is a getting started page"]);
      }
    },
    "setting": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["setting"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["setting"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["this is a setting page"]);
      },
      "sections": {
        "validate_username": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["validate github profile"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["type your github username and click the button to validate."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Learn more about"]);
          },
          "footer_button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["validate"]);
          },
          "footer_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github users api"]);
          }
        },
        "bot_id": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["bot id"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["This is your bot ID."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Used when interacting with the bot."]);
          }
        },
        "protection_spam": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["spam protection"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["toggle enable to remove the red border"]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["if enable we will secure your comments from spam"]);
          }
        },
        "advanced_enable_advanced": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["enable advanced settings"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["you can enable advanced settings to change the settings"]);
          }
        },
        "advanced_dir_listing": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["directory listing"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["if no index file is present within a directory, the directory contents will be displayed."]);
          }
        }
      }
    },
    "dashboard": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["dashboard"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["dashboard"]);
      },
      "index": {
        "nav": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["home"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["home"]);
        }
      }
    }
  },
  "banners": {
    "welcome": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["hello, welcome to ", _interpolate(_named("app_name")), "!"]);
    }
  },
  "others": {
    "learn_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["learn more"]);
    },
    "copy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["copy"]);
    },
    "enabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["enabled"]);
    },
    "disabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["disabled"]);
    }
  }
};
const locale_id = {
  "components": {
    "language_switcher": {
      "change_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ganti bahasa"]);
      }
    },
    "theme_switcher": {
      "theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["tema"]);
      },
      "change_theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ganti tema"]);
      }
    }
  },
  "pages": {
    "404": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["halaman tidak ditemukan"]);
      }
    },
    "index": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["nuxt 3[]luar biasa[]pemula"]);
      }
    },
    "blank": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["kosong"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["halaman kosong"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ini adalah halaman kosong"]);
      },
      "just_blank_page_with_title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["hanya halaman kosong dengan judul"]);
      }
    },
    "post": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pos"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pos"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ini adalah halaman posting"]);
      }
    },
    "test": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["uji"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pengujian"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ini adalah halaman percobaan"]);
      },
      "counter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["menangkal"]);
      },
      "increment": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["kenaikan"]);
      },
      "decrement": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pengurangan"]);
      },
      "reset": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["mengatur ulang"]);
      },
      "identity": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["identitas"]);
      },
      "full_name": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["nama lengkap"]);
      }
    },
    "getting-started": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["mulai"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["mulai"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ini adalah halaman memulai"]);
      }
    },
    "setting": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pengaturan"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["pengaturan"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ini adalah halaman pengaturan"]);
      },
      "sections": {
        "validate_username": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["validasi profil github"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ketik nama pengguna github anda dan klik tombol untuk memvalidasi."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["belajar lebih tentang"]);
          },
          "footer_button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["mengesahkan"]);
          },
          "footer_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["pengguna github api"]);
          }
        },
        "bot_id": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["id bot"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ini adalah id bot anda."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["digunakan saat berinteraksi dengan bot."]);
          }
        },
        "protection_spam": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["proteksi spam"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["alihkan aktifkan untuk menghapus batas merah"]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["jika memungkinkan kami akan mengamankan komentar anda dari spam"]);
          }
        },
        "advanced_enable_advanced": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["aktifkan pengaturan lanjutan"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["anda dapat mengaktifkan pengaturan lanjutan untuk mengubah pengaturan"]);
          }
        },
        "advanced_dir_listing": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["daftar direktori"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["jika tidak ada file indeks dalam direktori, isi direktori akan ditampilkan."]);
          }
        }
      }
    },
    "dashboard": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["dasbor"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["dasbor"]);
      },
      "index": {
        "nav": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["rumah"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["rumah"]);
        }
      }
    }
  },
  "banners": {
    "welcome": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["halo, selamat datang di ", _interpolate(_named("app_name")), "!"]);
    }
  },
  "others": {
    "learn_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["belajarlah lagi"]);
    },
    "copy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["salinan"]);
    },
    "enabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["diaktifkan"]);
    },
    "disabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["dengan disabilitas"]);
    }
  }
};
const locale_ja = {
  "components": {
    "language_switcher": {
      "change_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A00\u8A9E\u3092\u5909\u66F4"]);
      }
    },
    "theme_switcher": {
      "theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C6\u30FC\u30DE"]);
      },
      "change_theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C6\u30FC\u30DE\u3092\u5909\u66F4"]);
      }
    }
  },
  "pages": {
    "404": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"]);
      }
    },
    "index": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["nuxt 3[]\u7D20\u6674\u3089\u3057\u3044[]\u30B9\u30BF\u30FC\u30BF\u30FC"]);
      }
    },
    "blank": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7A7A\u6B04"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7A7A\u767D\u30DA\u30FC\u30B8"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u308C\u306F\u7A7A\u767D\u306E\u30DA\u30FC\u30B8\u3067\u3059"]);
      },
      "just_blank_page_with_title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30BF\u30A4\u30C8\u30EB\u306E\u3042\u308B\u7A7A\u767D\u306E\u30DA\u30FC\u30B8"]);
      }
    },
    "post": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5F79\u8077"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5F79\u8077"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u308C\u306F\u6295\u7A3F\u30DA\u30FC\u30B8\u3067\u3059"]);
      }
    },
    "test": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C6\u30B9\u30C8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C6\u30B9\u30C8"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u308C\u306F\u30C6\u30B9\u30C8\u30DA\u30FC\u30B8\u3067\u3059"]);
      },
      "counter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AB\u30A6\u30F3\u30BF\u30FC"]);
      },
      "increment": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8"]);
      },
      "decrement": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C7\u30AF\u30EA\u30E1\u30F3\u30C8"]);
      },
      "reset": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30EA\u30BB\u30C3\u30C8"]);
      },
      "identity": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8EAB\u5143"]);
      },
      "full_name": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D5\u30EB\u30CD\u30FC\u30E0"]);
      }
    },
    "getting-started": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5165\u9580"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5165\u9580"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u308C\u306F\u5165\u9580\u30DA\u30FC\u30B8\u3067\u3059"]);
      }
    },
    "setting": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A2D\u5B9A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A2D\u5B9A"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A2D\u5B9A\u30DA\u30FC\u30B8\u3067\u3059"]);
      },
      "sections": {
        "validate_username": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u8A3C\u3059\u308B"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3001\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u691C\u8A3C\u3057\u307E\u3059\u3002"]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8A73\u3057\u304F\u306F\u3053\u3061\u3089"]);
          },
          "footer_button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u691C\u8A3C"]);
          },
          "footer_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \u30E6\u30FC\u30B6\u30FC api"]);
          }
        },
        "bot_id": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30DC\u30C3\u30C8id"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u3053\u308C\u304C\u30DC\u30C3\u30C8 id \u3067\u3059\u3002"]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30DC\u30C3\u30C8\u3068\u5BFE\u8A71\u3059\u308B\u3068\u304D\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]);
          }
        },
        "protection_spam": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30B9\u30D1\u30E0\u4FDD\u8B77"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6709\u52B9\u306B\u5207\u308A\u66FF\u3048\u3066\u3001\u8D64\u3044\u67A0\u3092\u524A\u9664\u3057\u307E\u3059"]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u30B3\u30E1\u30F3\u30C8\u3092\u30B9\u30D1\u30E0\u304B\u3089\u4FDD\u8B77\u3057\u307E\u3059"]);
          }
        },
        "advanced_enable_advanced": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8A73\u7D30\u8A2D\u5B9A\u3092\u6709\u52B9\u306B\u3059\u308B"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8A73\u7D30\u8A2D\u5B9A\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059"]);
          }
        },
        "advanced_dir_listing": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u4E00\u89A7"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u5185\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 \u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u5185\u5BB9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]);
          }
        }
      }
    },
    "dashboard": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9"]);
      },
      "index": {
        "nav": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BB6"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BB6"]);
        }
      }
    }
  },
  "banners": {
    "welcome": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u3053\u3093\u306B\u3061\u306F\u3001", _interpolate(_named("app_name")), " \u3078\u3088\u3046\u3053\u305D!"]);
    }
  },
  "others": {
    "learn_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3082\u3063\u3068\u8A73\u3057\u304F\u77E5\u308B"]);
    },
    "copy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B3\u30D4\u30FC"]);
    },
    "enabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6709\u52B9"]);
    },
    "disabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7121\u52B9"]);
    }
  }
};
const locale_ko = {
  "components": {
    "language_switcher": {
      "change_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC5B8\uC5B4 \uBCC0\uACBD"]);
      }
    },
    "theme_switcher": {
      "theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC8FC\uC81C"]);
      },
      "change_theme": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD14C\uB9C8 \uBCC0\uACBD"]);
      }
    }
  },
  "pages": {
    "404": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
      }
    },
    "index": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["nuxt 3[]\uBA4B\uC9C4[]\uC2A4\uD0C0\uD130"]);
      }
    },
    "blank": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uACF5\uBC31"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBE48 \uD398\uC774\uC9C0"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC774\uAC83\uC740 \uBE48 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"]);
      },
      "just_blank_page_with_title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC81C\uBAA9\uC774 \uC788\uB294 \uBE48 \uD398\uC774\uC9C0"]);
      }
    },
    "post": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC8C\uC2DC\uD558\uB2E4"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC8C\uC2DC\uD558\uB2E4"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC774\uAC83\uC740 \uAC8C\uC2DC\uBB3C \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"]);
      }
    },
    "test": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD14C\uC2A4\uD2B8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD14C\uC2A4\uD2B8"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC774\uAC83\uC740 \uD14C\uC2A4\uD2B8 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"]);
      },
      "counter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCE74\uC6B4\uD130"]);
      },
      "increment": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC99D\uAC00"]);
      },
      "decrement": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC10\uC18C"]);
      },
      "reset": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCD08\uAE30\uD654"]);
      },
      "identity": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2E0\uC6D0"]);
      },
      "full_name": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC804\uCCB4 \uC774\uB984"]);
      }
    },
    "getting-started": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2DC\uC791\uD558\uAE30"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2DC\uC791\uD558\uAE30"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC774\uAC83\uC740 \uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"]);
      }
    },
    "setting": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD658\uACBD"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD658\uACBD"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC774\uAC83\uC740 \uC124\uC815 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"]);
      },
      "sections": {
        "validate_username": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \uD504\uB85C\uD544 \uD655\uC778"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \uC0AC\uC6A9\uC790 \uC774\uB984\uC744 \uC785\uB825\uD558\uACE0 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uD655\uC778\uD558\uC2ED\uC2DC\uC624."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30"]);
          },
          "footer_button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uD655\uC778"]);
          },
          "footer_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["github \uC0AC\uC6A9\uC790 api"]);
          }
        },
        "bot_id": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uBD07 \uC544\uC774\uB514"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC774\uAC83\uC740 \uBD07 id\uC785\uB2C8\uB2E4."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uBD07\uACFC \uC0C1\uD638 \uC791\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4."]);
          }
        },
        "protection_spam": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC2A4\uD338 \uBC29\uC9C0"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uD65C\uC131\uD654\uB97C \uD1A0\uAE00\uD558\uC5EC \uBE68\uAC04\uC0C9 \uD14C\uB450\uB9AC\uB97C \uC81C\uAC70\uD569\uB2C8\uB2E4."]);
          },
          "footer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uD65C\uC131\uD654\uD558\uBA74 \uC2A4\uD338\uC73C\uB85C\uBD80\uD130 \uB313\uAE00\uC744 \uBCF4\uD638\uD569\uB2C8\uB2E4."]);
          }
        },
        "advanced_enable_advanced": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uACE0\uAE09 \uC124\uC815 \uD65C\uC131\uD654"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uACE0\uAE09 \uC124\uC815\uC744 \uD65C\uC131\uD654\uD558\uC5EC \uC124\uC815\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"]);
          }
        },
        "advanced_dir_listing": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB514\uB809\uD1A0\uB9AC \uBAA9\uB85D"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB514\uB809\uD1A0\uB9AC \uB0B4\uC5D0 \uC778\uB371\uC2A4 \uD30C\uC77C\uC774 \uC5C6\uC73C\uBA74 \uB514\uB809\uD1A0\uB9AC \uB0B4\uC6A9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."]);
          }
        }
      }
    },
    "dashboard": {
      "nav": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uACC4\uAE30\uBC18"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uACC4\uAE30\uBC18"]);
      },
      "index": {
        "nav": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC9D1"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC9D1"]);
        }
      }
    }
  },
  "banners": {
    "welcome": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\uC548\uB155\uD558\uC138\uC694, ", _interpolate(_named("app_name")), "\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!"]);
    }
  },
  "others": {
    "learn_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB354 \uC54C\uC544\uBCF4\uAE30"]);
    },
    "copy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBCF5\uC0AC"]);
    },
    "enabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD65C\uC131\uD654"]);
    },
    "disabled": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC7A5\uC560\uAC00 \uC788\uB294"]);
    }
  }
};
const messages = { "en": locale_en, "id": locale_id, "ja": locale_ja, "ko": locale_ko };
const isEmpty = (obj) => Object.keys(obj).length === 0;
const _nuxt_plugin_mjs_FRmGFsEaPh = defineNuxtPlugin(async (nuxt) => {
  const { vueApp: app2 } = nuxt;
  const loadedOptions = await optionsLoader();
  if (!isEmpty(messages)) {
    loadedOptions.messages = messages;
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    ...loadedOptions
  });
  app2.use(i18n);
});
const plugins_navbar_ts_qw38FjZisw = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const showDrawer = useState("navbar.showDrawer", () => false);
    const showOptions = useState("navbar.showOptions", () => false);
    showDrawer.value = false;
    showOptions.value = false;
  });
});
const plugins_utils_ts_EEhlE5KdlH = defineNuxtPlugin(({ provide: provide2 }) => {
  const auth = useAuth();
  provide2("getCurrentCurrency", getCurrentCurrency);
  provide2("formatCurrency", formatCurrency);
  provide2("auth", auth);
  const loading = useLoading();
  const { show, hide, toggle } = loading;
  provide2("loading", {
    show,
    hide,
    toggle
  });
  addRouteMiddleware("auth", () => {
    if (!auth.$state.user) {
      return "/owner/auth/login";
    } else {
      return true;
    }
  });
});
const plugins_toast_ts_ysMjUcU7eJ = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: POSITION.BOTTOM_RIGHT,
    timeout: 5e3,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  });
});
function identity(arg) {
  return arg;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
setSSRHandler("getDefaultStorage", () => {
  const cookieMap = /* @__PURE__ */ new Map();
  const get = (key) => {
    if (!cookieMap.get(key))
      cookieMap.set(key, useCookie(key, { maxAge: 2147483646 }));
    return cookieMap.get(key);
  };
  return {
    getItem: (key) => get(key).value,
    setItem: (key, value) => get(key).value = value,
    removeItem: (key) => get(key).value = void 0
  };
});
{
  setSSRHandler("updateHTMLAttrs", (selector, attr, value) => {
    if (selector === "html") {
      useMeta({
        htmlAttrs: {
          [attr]: value
        }
      });
    } else if (selector === "body") {
      useMeta({
        bodyAttrs: {
          [attr]: value
        }
      });
    } else {
      throw new Error(`Unsupported meta selector "${selector}" in SSR`);
    }
  });
}
const node_modules__pnpm__64vueuse_43nuxt_649_2_0_uoha5i64nd4wvsebc4dv5d66zm_node_modules__64vueuse_nuxt_ssr_plugin_mjs_ivBWgfmkU8 = () => {
};
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_head_runtime_lib_vueuse_head_plugin_mjs_nzKSmV8JZs,
  node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_head_runtime_plugin_mjs_WViAl4E7Ge,
  node_modules__pnpm_nuxt3_643_0_0_rc_12_27730995_2894a75_3qgq5m7bqj7palvvc4uezrk4iq_node_modules_nuxt3_dist_pages_runtime_router_mjs_ZUrnqv0E3k,
  node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_plugins_documentDriven_mjs_LvAtC8NY0h,
  node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_NQlgzIsbpr,
  node_modules__pnpm__64pinia_43nuxt_640_4_2_arz4dztosvwy2ghjrlh2wdhejm_node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_pVE3b3T53c,
  _nuxt_plugin_mjs_FRmGFsEaPh,
  plugins_navbar_ts_qw38FjZisw,
  plugins_utils_ts_EEhlE5KdlH,
  plugins_toast_ts_ysMjUcU7eJ,
  node_modules__pnpm__64vueuse_43nuxt_649_2_0_uoha5i64nd4wvsebc4dv5d66zm_node_modules__64vueuse_nuxt_ssr_plugin_mjs_ivBWgfmkU8
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.abf7113f.mjs').then((r2) => r2.default || r2));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt3@3.0.0-rc.12-27730995.2894a75_3qgq5m7bqj7palvvc4uezrk4iq/node_modules/nuxt3/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function AppSetup() {
  const app2 = {
    name: "Foody",
    author: {
      name: "kelompok2",
      link: "https://github.com/viandwi24/foody-client"
    }
  };
  useState("app", () => app2);
  const themeManager = ThemeManager();
  const languageManager = LanguageManager();
  return {
    app: app2,
    themeManager,
    languageManager
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    AppSetup();
    const theme = useState("theme.current");
    const locale = useState("locale.setting");
    const loading = useLoading();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = resolveComponent("Html");
      const _component_Body = resolveComponent("Body");
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      const _component_IconEosIcons58loading = __unplugin_components_0$2;
      _push(ssrRenderComponent(_component_Html, mergeProps({
        class: `${unref(theme) === "dark" ? "dark" : ""}`,
        lang: unref(locale)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Body, { class: "antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtPage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(loading).state) {
                    _push3(`<div class="fixed z-60 top-0 left-0 w-screen h-screen flex bg-black/70"${_scopeId2}><div class="flex-1 flex justify-center items-center relative"${_scopeId2}><div class="h-40 w-40 rounded bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100 flex flex-col justify-center items-center space-y-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconEosIcons58loading, { class: "text-6xl text-primary" }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}>LOADING...</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_NuxtLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage)
                      ]),
                      _: 1
                    }),
                    unref(loading).state ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "fixed z-60 top-0 left-0 w-screen h-screen flex bg-black/70"
                    }, [
                      createVNode("div", { class: "flex-1 flex justify-center items-center relative" }, [
                        createVNode("div", { class: "h-40 w-40 rounded bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100 flex flex-col justify-center items-center space-y-4" }, [
                          createVNode(_component_IconEosIcons58loading, { class: "text-6xl text-primary" }),
                          createVNode("div", null, "LOADING...")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Body, { class: "antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLayout, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtPage)
                    ]),
                    _: 1
                  }),
                  unref(loading).state ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed z-60 top-0 left-0 w-screen h-screen flex bg-black/70"
                  }, [
                    createVNode("div", { class: "flex-1 flex justify-center items-center relative" }, [
                      createVNode("div", { class: "h-40 w-40 rounded bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100 flex flex-col justify-center items-center space-y-4" }, [
                        createVNode(_component_IconEosIcons58loading, { class: "text-6xl text-primary" }),
                        createVNode("div", null, "LOADING...")
                      ])
                    ])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _sfc_main$w as $, _sfc_main$R as A, f$1 as B, a as C, o$1 as D, w$2 as E, t$1 as F, b$2 as G, o$2 as H, u$4 as I, t as J, useCounter as K, useIdentity as L, M, _sfc_main$Q as N, useLoading as O, P$2 as P, useCart as Q, R$1 as R, _sfc_main$2 as S, useAuth as T, _sfc_main$E as U, V$1 as V, _sfc_main$C as W, _sfc_main$B as X, _export_sfc as Y, _sfc_main$v as Z, __nuxt_component_0$1 as _, useRequestEvent as a, useState as a0, useApi as a1, Api as a2, __nuxt_component_0$2 as a3, useContentHead as b, _sfc_main$1b as c, _sfc_main$1a as d, entry$1 as default, _sfc_main$19 as e, useHead as f, __nuxt_component_3 as g, _sfc_main$16 as h, useI18n as i, __nuxt_component_4$1 as j, _sfc_main$14 as k, __nuxt_component_6 as l, __nuxt_component_7 as m, _sfc_main$11 as n, __nuxt_component_1 as o, _sfc_main$Z as p, _sfc_main$Y as q, __unplugin_components_0$5 as r, _sfc_main$X as s, _sfc_main$W as t, useContent as u, __nuxt_component_4 as v, _sfc_main$U as w, _sfc_main$T as x, __nuxt_component_10 as y, _sfc_main$17 as z };
//# sourceMappingURL=server.mjs.map
