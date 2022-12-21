globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, useQuery, useCookie, getQuery, defineLazyEventHandler, useBody, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { promises } from 'fs';
import { dirname, resolve, extname } from 'pathe';
import { fileURLToPath } from 'url';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import slugify from 'slugify';
import { visit } from 'unist-util-visit';
import { getHighlighter, BUNDLED_LANGUAGES, BUNDLED_THEMES } from 'shiki-es';
import consola from 'unenv/runtime/npm/consola';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":{"theme":"github-dark","apiURL":"/api/_content/highlight"},"wsUrl":"","documentDriven":{"page":true,"navigation":true,"surround":true,"globals":{},"layoutFallbacks":["theme"],"injectPage":true}}},"content":{"cacheVersion":2,"cacheIntegrity":"JMjsBs74iJ","transformers":["/home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/@nuxt+content@2.1.1/node_modules/@nuxt/content/dist/runtime/transformers/shiki.mjs"],"base":"_content","watch":{"ws":{"port":4000,"showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"highlight":{"theme":"github-dark","apiURL":"/api/_content/highlight"},"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"mdc":true,"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":["layout"]},"documentDriven":true}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject$2(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$2(obj[key])) {
      if (isObject$2(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"b7-e2m1kPZV6+v7fqkKuQtIOoOn0hM\"","mtime":"2022-12-21T14:48:57.454Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"129-IbeJokTVuBgqe+hpxztXyQTnOxc\"","mtime":"2022-12-21T14:48:57.454Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:page:getting-started.md"]: {
    import: () => import('../raw/getting-started.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2417-BsWPYg9d8tlh9Uwu/5qQCc/kZNc\"","mtime":"2022-12-21T14:48:57.454Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:post:hello-world.md"]: {
    import: () => import('../raw/hello-world.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10a0-MflRnD8MDvV7Rww6jHj3gSeITBE\"","mtime":"2022-12-21T14:48:57.454Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:post:lorem.md"]: {
    import: () => import('../raw/lorem.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"44cc-Ct+vwMcJFXphztVRZXZOSsT1eos\"","mtime":"2022-12-21T14:48:57.454Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:post:test.md"]: {
    import: () => import('../raw/test.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"280-fLn3N+5TRY/KFIuChUquykFUJD0\"","mtime":"2022-12-21T14:48:57.454Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-C55WuIAyh7hKQVer/LFA+m9aKYY\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/404.540dfb71.js": {
    "type": "application/javascript",
    "etag": "\"248-xeSsySW3A8LyQ4y992R5CvvMcrE\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 584,
    "path": "../public/_nuxt/404.540dfb71.js"
  },
  "/_nuxt/Alert.0f5a4ce3.js": {
    "type": "application/javascript",
    "etag": "\"101-s+OgULxniGN08JWDGXDfvB0wE2k\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 257,
    "path": "../public/_nuxt/Alert.0f5a4ce3.js"
  },
  "/_nuxt/Alert.vue_vue_type_script_setup_true_lang.73391abd.js": {
    "type": "application/javascript",
    "etag": "\"f0e-dOZk/1lWfzuiHERHwUrhl7+wwBc\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 3854,
    "path": "../public/_nuxt/Alert.vue_vue_type_script_setup_true_lang.73391abd.js"
  },
  "/_nuxt/Anchor.682ea0da.js": {
    "type": "application/javascript",
    "etag": "\"c0-/BF2MozfUX06f3Sjpsvxc2HxbMg\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 192,
    "path": "../public/_nuxt/Anchor.682ea0da.js"
  },
  "/_nuxt/Anchor.vue_vue_type_script_setup_true_lang.3d8b7658.js": {
    "type": "application/javascript",
    "etag": "\"2f9-n0hhfn0XU845bL5jVruhPB5Asms\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 761,
    "path": "../public/_nuxt/Anchor.vue_vue_type_script_setup_true_lang.3d8b7658.js"
  },
  "/_nuxt/Body.5cc3e52d.js": {
    "type": "application/javascript",
    "etag": "\"13b-d9APSn50f+TJxXyGX+SK1KB1bSo\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 315,
    "path": "../public/_nuxt/Body.5cc3e52d.js"
  },
  "/_nuxt/Body.d03422f3.js": {
    "type": "application/javascript",
    "etag": "\"b1-cNvjlH3+EI/wvUkRsXhyCg6C2a0\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 177,
    "path": "../public/_nuxt/Body.d03422f3.js"
  },
  "/_nuxt/Button.3e5aed60.js": {
    "type": "application/javascript",
    "etag": "\"c0-rxYASqioovOs2HTTUdSeFKhCvoo\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 192,
    "path": "../public/_nuxt/Button.3e5aed60.js"
  },
  "/_nuxt/Button.vue_vue_type_script_setup_true_lang.4815a5e4.js": {
    "type": "application/javascript",
    "etag": "\"7b3-9wRBMNoCVcilqmC3Z4IgU9yj0Zc\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 1971,
    "path": "../public/_nuxt/Button.vue_vue_type_script_setup_true_lang.4815a5e4.js"
  },
  "/_nuxt/Card.e2c5d546.js": {
    "type": "application/javascript",
    "etag": "\"fc-DF+ioT+R2o7482lGE4s47OjWIEI\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 252,
    "path": "../public/_nuxt/Card.e2c5d546.js"
  },
  "/_nuxt/Card.vue_vue_type_script_setup_true_lang.a709c56f.js": {
    "type": "application/javascript",
    "etag": "\"5c6-93nMeeQhZ9IPXvvstSg3E8ZiF/4\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 1478,
    "path": "../public/_nuxt/Card.vue_vue_type_script_setup_true_lang.a709c56f.js"
  },
  "/_nuxt/Content.44c60870.js": {
    "type": "application/javascript",
    "etag": "\"df-zrECunkCx4K1mfCniyHKBgvCh2M\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 223,
    "path": "../public/_nuxt/Content.44c60870.js"
  },
  "/_nuxt/DetailModal.f78eee55.js": {
    "type": "application/javascript",
    "etag": "\"25b-dmFO1SW6gn7ahRi5IC4e+ojRe0o\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 603,
    "path": "../public/_nuxt/DetailModal.f78eee55.js"
  },
  "/_nuxt/DetailModal.vue_vue_type_script_setup_true_lang.03996a47.js": {
    "type": "application/javascript",
    "etag": "\"7b8-dkzQfkTk9638n2CyuRPujqGI2Qc\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 1976,
    "path": "../public/_nuxt/DetailModal.vue_vue_type_script_setup_true_lang.03996a47.js"
  },
  "/_nuxt/Doc.57b72bf7.js": {
    "type": "application/javascript",
    "etag": "\"371-4+qSkWD5d/GfZd/7MB3sYQ8zaVo\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 881,
    "path": "../public/_nuxt/Doc.57b72bf7.js"
  },
  "/_nuxt/Error.6cfeda82.js": {
    "type": "application/javascript",
    "etag": "\"11d-+hZOwMAHqZFyia5/izVrbHW0gz8\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 285,
    "path": "../public/_nuxt/Error.6cfeda82.js"
  },
  "/_nuxt/Error.vue_vue_type_script_setup_true_lang.912ee7a6.js": {
    "type": "application/javascript",
    "etag": "\"374-TtpUj/j5yNfp/X7mEmmwsWMoPEQ\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 884,
    "path": "../public/_nuxt/Error.vue_vue_type_script_setup_true_lang.912ee7a6.js"
  },
  "/_nuxt/Footer.63cf1407.js": {
    "type": "application/javascript",
    "etag": "\"133-HMyws5lPL3O3tY0jakVwo49mqFw\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 307,
    "path": "../public/_nuxt/Footer.63cf1407.js"
  },
  "/_nuxt/Footer.86fde888.js": {
    "type": "application/javascript",
    "etag": "\"c0-1gL8NvzD2MLq07XmKDp+yrrclVU\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 192,
    "path": "../public/_nuxt/Footer.86fde888.js"
  },
  "/_nuxt/Footer.vue_vue_type_script_setup_true_lang.87a1a78b.js": {
    "type": "application/javascript",
    "etag": "\"2cc-r6Vw+wdSsa8IKq9MLleEvmSfEI0\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 716,
    "path": "../public/_nuxt/Footer.vue_vue_type_script_setup_true_lang.87a1a78b.js"
  },
  "/_nuxt/GLTFLoader.a7b4ceb6.js": {
    "type": "application/javascript",
    "etag": "\"b371-jozkTuQCHkDCy9HrJplJf+aRv1M\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 45937,
    "path": "../public/_nuxt/GLTFLoader.a7b4ceb6.js"
  },
  "/_nuxt/Gem.7039b823.js": {
    "type": "application/javascript",
    "etag": "\"78f-tDyJl9+Amu+44DXy+NuR3gqQi8o\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 1935,
    "path": "../public/_nuxt/Gem.7039b823.js"
  },
  "/_nuxt/Header.1bcc8791.js": {
    "type": "application/javascript",
    "etag": "\"c0-QfSKVi1dlKFyozRm0CFBvseAYX8\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 192,
    "path": "../public/_nuxt/Header.1bcc8791.js"
  },
  "/_nuxt/Header.76066d36.js": {
    "type": "application/javascript",
    "etag": "\"db-snE0j2HXD6v0b9pPiNbnEZIZ21Y\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 219,
    "path": "../public/_nuxt/Header.76066d36.js"
  },
  "/_nuxt/Header.vue_vue_type_script_setup_true_lang.3a65bba7.js": {
    "type": "application/javascript",
    "etag": "\"120-nmXLB3MChydmHW5qWWljAGUId+Q\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 288,
    "path": "../public/_nuxt/Header.vue_vue_type_script_setup_true_lang.3a65bba7.js"
  },
  "/_nuxt/LanguageSwitcher.682cc584.js": {
    "type": "application/javascript",
    "etag": "\"1db-+fqJMq229ioaB8Irk6ElM9/Pn9k\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 475,
    "path": "../public/_nuxt/LanguageSwitcher.682cc584.js"
  },
  "/_nuxt/LanguageSwitcher.vue_vue_type_script_setup_true_lang.4f0fd29b.js": {
    "type": "application/javascript",
    "etag": "\"b04-vCw5HWNgPDGYLaikBW8vY3M5i0M\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 2820,
    "path": "../public/_nuxt/LanguageSwitcher.vue_vue_type_script_setup_true_lang.4f0fd29b.js"
  },
  "/_nuxt/Menu.936b059d.js": {
    "type": "application/javascript",
    "etag": "\"358-Jx6qMhQ130d8Dyv/KUFLoUEi8Ck\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 856,
    "path": "../public/_nuxt/Menu.936b059d.js"
  },
  "/_nuxt/Menu.vue_vue_type_script_setup_true_lang.fd5759bf.js": {
    "type": "application/javascript",
    "etag": "\"180d-ajOTPgzx6c5Yr3mpNMBBzMhQcwQ\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 6157,
    "path": "../public/_nuxt/Menu.vue_vue_type_script_setup_true_lang.fd5759bf.js"
  },
  "/_nuxt/Modal.14040f17.js": {
    "type": "application/javascript",
    "etag": "\"18e-oSmZpX8+g0H2/j4QR9bv/e29sc0\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 398,
    "path": "../public/_nuxt/Modal.14040f17.js"
  },
  "/_nuxt/Modal.vue_vue_type_script_setup_true_lang.f5b130c5.js": {
    "type": "application/javascript",
    "etag": "\"371e-FBhAwOZvzKQfRZkNmOgKIl/30aU\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 14110,
    "path": "../public/_nuxt/Modal.vue_vue_type_script_setup_true_lang.f5b130c5.js"
  },
  "/_nuxt/Navbar.a01f0063.js": {
    "type": "application/javascript",
    "etag": "\"18c-ExhXWfOLJLxf37sgCQVgTI8Oq3I\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 396,
    "path": "../public/_nuxt/Navbar.a01f0063.js"
  },
  "/_nuxt/Navbar.aa793281.js": {
    "type": "application/javascript",
    "etag": "\"c2b-hUr9Ro8KOPRAQCnwwu/dE5mDIWc\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 3115,
    "path": "../public/_nuxt/Navbar.aa793281.js"
  },
  "/_nuxt/Navbar.c24d4c0e.js": {
    "type": "application/javascript",
    "etag": "\"3ad-DzIqbdtSADMDNHGveANSMPUWGqg\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 941,
    "path": "../public/_nuxt/Navbar.c24d4c0e.js"
  },
  "/_nuxt/Navbar.vue_vue_type_script_setup_true_lang.75ffadd4.js": {
    "type": "application/javascript",
    "etag": "\"36ea-ZT3aXDTe8CtZPzeOzd1EeI4Ibp4\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 14058,
    "path": "../public/_nuxt/Navbar.vue_vue_type_script_setup_true_lang.75ffadd4.js"
  },
  "/_nuxt/Navbar.vue_vue_type_script_setup_true_lang.e787e696.js": {
    "type": "application/javascript",
    "etag": "\"bd0-w76fQXjPzHNkYFNwRy03ofSl85A\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 3024,
    "path": "../public/_nuxt/Navbar.vue_vue_type_script_setup_true_lang.e787e696.js"
  },
  "/_nuxt/OrbitControls.8b9ebc34.js": {
    "type": "application/javascript",
    "etag": "\"2a35-sILgUGxGg5bqW3Z16JmxTMFZuDU\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 10805,
    "path": "../public/_nuxt/OrbitControls.8b9ebc34.js"
  },
  "/_nuxt/Order.4106871d.js": {
    "type": "application/javascript",
    "etag": "\"38a-1D0aDVJf01+RZDoHi+xb1zqzEWI\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 906,
    "path": "../public/_nuxt/Order.4106871d.js"
  },
  "/_nuxt/Order.vue_vue_type_script_setup_true_lang.45a0ac09.js": {
    "type": "application/javascript",
    "etag": "\"1a90-WMWqfI1Dckbhqi/fdGTeN4xhwps\"",
    "mtime": "2022-12-21T14:48:53.293Z",
    "size": 6800,
    "path": "../public/_nuxt/Order.vue_vue_type_script_setup_true_lang.45a0ac09.js"
  },
  "/_nuxt/Overlay.0d8a2dc1.js": {
    "type": "application/javascript",
    "etag": "\"e3-OjourQB5hcvO6Lqs0v+N+IbjunY\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 227,
    "path": "../public/_nuxt/Overlay.0d8a2dc1.js"
  },
  "/_nuxt/ProseA.bc4d69a2.js": {
    "type": "application/javascript",
    "etag": "\"138-zbJ89BULhm517aWW0HYxUOt30MI\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 312,
    "path": "../public/_nuxt/ProseA.bc4d69a2.js"
  },
  "/_nuxt/ProseBlockquote.cca4a1d4.js": {
    "type": "application/javascript",
    "etag": "\"c2-8N71i+k6zB0KcmLA7DZOt37Yans\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 194,
    "path": "../public/_nuxt/ProseBlockquote.cca4a1d4.js"
  },
  "/_nuxt/ProseCodeInline.618d9739.js": {
    "type": "application/javascript",
    "etag": "\"bc-2kTJV0uRoe/wrTW1DIMB4QRouhE\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 188,
    "path": "../public/_nuxt/ProseCodeInline.618d9739.js"
  },
  "/_nuxt/ProseEm.6dfcdd73.js": {
    "type": "application/javascript",
    "etag": "\"b5-mPyO2MqB3cJUbtFKcHwRREl9X1c\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseEm.6dfcdd73.js"
  },
  "/_nuxt/ProseH1.3fc5483a.js": {
    "type": "application/javascript",
    "etag": "\"b5-jcBw0jomft/zm0XsoqnHrNa558U\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH1.3fc5483a.js"
  },
  "/_nuxt/ProseH2.0f5a8961.js": {
    "type": "application/javascript",
    "etag": "\"106-o/e1IpQi6qnbeiOd0RjmugDwTMs\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH2.0f5a8961.js"
  },
  "/_nuxt/ProseH3.04de9c31.js": {
    "type": "application/javascript",
    "etag": "\"106-zBdcs5FTuc3+ZS0bMYm+BbzxygA\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH3.04de9c31.js"
  },
  "/_nuxt/ProseH4.661965c5.js": {
    "type": "application/javascript",
    "etag": "\"106-CZaeZ5h0+8eqllDsxYzFmy8k/ek\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH4.661965c5.js"
  },
  "/_nuxt/ProseH5.f3b6980c.js": {
    "type": "application/javascript",
    "etag": "\"b5-MwoSp+UukgkujPZkeLyghjuKxb0\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH5.f3b6980c.js"
  },
  "/_nuxt/ProseH6.b48ef977.js": {
    "type": "application/javascript",
    "etag": "\"b5-Dl3qFYqVXH1r49QMQKK37j58CQ4\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH6.b48ef977.js"
  },
  "/_nuxt/ProseHr.524baa6c.js": {
    "type": "application/javascript",
    "etag": "\"96-r76LZq/fZNav8G/7ufThzxvSL0w\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 150,
    "path": "../public/_nuxt/ProseHr.524baa6c.js"
  },
  "/_nuxt/ProseImg.66d2c9e9.js": {
    "type": "application/javascript",
    "etag": "\"18a-U4HdddPnwzr7SpCPFKCv6tfNfwQ\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 394,
    "path": "../public/_nuxt/ProseImg.66d2c9e9.js"
  },
  "/_nuxt/ProseLi.ed1469f1.js": {
    "type": "application/javascript",
    "etag": "\"b5-PTIMI7bfB044jjBBOI3KTHQ27ac\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseLi.ed1469f1.js"
  },
  "/_nuxt/ProseOl.ca385ebe.js": {
    "type": "application/javascript",
    "etag": "\"ba-LVH99esw0V/mAwJnkMD24xkC5GE\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 186,
    "path": "../public/_nuxt/ProseOl.ca385ebe.js"
  },
  "/_nuxt/ProseP.6ef9fc1b.js": {
    "type": "application/javascript",
    "etag": "\"b4-JMgt4RTCgyrnsMaZ7a8Be3tOY6E\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 180,
    "path": "../public/_nuxt/ProseP.6ef9fc1b.js"
  },
  "/_nuxt/ProseStrong.f65836c9.js": {
    "type": "application/javascript",
    "etag": "\"b9-Y98LDWEjWanFnUlVi4Z1JDCzQD4\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 185,
    "path": "../public/_nuxt/ProseStrong.f65836c9.js"
  },
  "/_nuxt/ProseTable.ee2223a8.js": {
    "type": "application/javascript",
    "etag": "\"b8-Fuzw58C4PehadkjpY9Emh+N0Tkg\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 184,
    "path": "../public/_nuxt/ProseTable.ee2223a8.js"
  },
  "/_nuxt/ProseTbody.dd1c044b.js": {
    "type": "application/javascript",
    "etag": "\"bd-D50uBIQO7Zvp0AYQNK59IPT734c\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.dd1c044b.js"
  },
  "/_nuxt/ProseTd.29c9c275.js": {
    "type": "application/javascript",
    "etag": "\"b5-EvZncXjF1tW//PfyIrVTp+eOlRw\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTd.29c9c275.js"
  },
  "/_nuxt/ProseTh.80cc2246.js": {
    "type": "application/javascript",
    "etag": "\"b5-Ju1+RP5fFaStIWSMFUNihiJMtHM\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTh.80cc2246.js"
  },
  "/_nuxt/ProseThead.ba2b8339.js": {
    "type": "application/javascript",
    "etag": "\"b8-fb/aGnJJotCOYm2LWAQzbxkW33M\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 184,
    "path": "../public/_nuxt/ProseThead.ba2b8339.js"
  },
  "/_nuxt/ProseTr.da70b6c0.js": {
    "type": "application/javascript",
    "etag": "\"b5-303rYqafMqCJ054QoXh8YDBtn1E\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTr.da70b6c0.js"
  },
  "/_nuxt/ProseUl.ccca8ad5.js": {
    "type": "application/javascript",
    "etag": "\"b5-fYyDUewtAgucUAAjHl9vUG2j2vo\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 181,
    "path": "../public/_nuxt/ProseUl.ccca8ad5.js"
  },
  "/_nuxt/Renderer.7dea120e.js": {
    "type": "application/javascript",
    "etag": "\"34a-oLTSXRxckHavMRwD4HLGe3mNgXA\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 842,
    "path": "../public/_nuxt/Renderer.7dea120e.js"
  },
  "/_nuxt/Sidebar.17cd5514.js": {
    "type": "application/javascript",
    "etag": "\"792-JXr83k+p/IqZo0qYrPzN6CuhRvI\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 1938,
    "path": "../public/_nuxt/Sidebar.17cd5514.js"
  },
  "/_nuxt/Switch.7b49ed17.js": {
    "type": "application/javascript",
    "etag": "\"e3-/t7+mdZvO57t5eDk9mWWCYZ4eRE\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 227,
    "path": "../public/_nuxt/Switch.7b49ed17.js"
  },
  "/_nuxt/Switch.vue_vue_type_script_setup_true_lang.78806a6e.js": {
    "type": "application/javascript",
    "etag": "\"553-tRNtDL5Ovjjy2tlK6evlFIc/Kwg\"",
    "mtime": "2022-12-21T14:48:53.283Z",
    "size": 1363,
    "path": "../public/_nuxt/Switch.vue_vue_type_script_setup_true_lang.78806a6e.js"
  },
  "/_nuxt/Tab.2ea78987.js": {
    "type": "application/javascript",
    "etag": "\"16f-mOMoA+baJgeUmRGFdXeDGo2aTnI\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 367,
    "path": "../public/_nuxt/Tab.2ea78987.js"
  },
  "/_nuxt/Table.c93da2d8.js": {
    "type": "application/javascript",
    "etag": "\"be-X2yDYJk1C05EE6D6nB/qlSg6gT0\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 190,
    "path": "../public/_nuxt/Table.c93da2d8.js"
  },
  "/_nuxt/Table.vue_vue_type_script_setup_true_lang.d5a03b9c.js": {
    "type": "application/javascript",
    "etag": "\"866-CYDU57cd+tT2vmM5XVdoduWEZOk\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 2150,
    "path": "../public/_nuxt/Table.vue_vue_type_script_setup_true_lang.d5a03b9c.js"
  },
  "/_nuxt/Tabs.9236f301.js": {
    "type": "application/javascript",
    "etag": "\"6ca-Ij/QKfsFf8ERID81fdSPqVUd4UA\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1738,
    "path": "../public/_nuxt/Tabs.9236f301.js"
  },
  "/_nuxt/TextAreaInput.d20bb9c0.js": {
    "type": "application/javascript",
    "etag": "\"f1-ZFjNGr2CvdM8sl3kSTVE5BEZoEI\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 241,
    "path": "../public/_nuxt/TextAreaInput.d20bb9c0.js"
  },
  "/_nuxt/TextAreaInput.vue_vue_type_script_setup_true_lang.e1352ed0.js": {
    "type": "application/javascript",
    "etag": "\"667-EWt0YrClemoN9s0hnWak44eyGdY\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1639,
    "path": "../public/_nuxt/TextAreaInput.vue_vue_type_script_setup_true_lang.e1352ed0.js"
  },
  "/_nuxt/TextInput.169bfec9.js": {
    "type": "application/javascript",
    "etag": "\"e9-J1SNvkX75ZbwP3BC5wkl0HrBAWQ\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 233,
    "path": "../public/_nuxt/TextInput.169bfec9.js"
  },
  "/_nuxt/TextInput.vue_vue_type_script_setup_true_lang.94abf3c1.js": {
    "type": "application/javascript",
    "etag": "\"6ab-pkVHRzCgY/b8QxaeOXHu6YC4bm8\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1707,
    "path": "../public/_nuxt/TextInput.vue_vue_type_script_setup_true_lang.94abf3c1.js"
  },
  "/_nuxt/ThemeSwitcher.3c555709.js": {
    "type": "application/javascript",
    "etag": "\"1d5-yvRdUE2mI9YbKVcMVhayeEesXzw\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 469,
    "path": "../public/_nuxt/ThemeSwitcher.3c555709.js"
  },
  "/_nuxt/ThemeSwitcher.vue_vue_type_script_setup_true_lang.dbdae7ff.js": {
    "type": "application/javascript",
    "etag": "\"1171-A44yKqHck+kZyMzcmgX2nokDHX0\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 4465,
    "path": "../public/_nuxt/ThemeSwitcher.vue_vue_type_script_setup_true_lang.dbdae7ff.js"
  },
  "/_nuxt/Title.076fcdb8.js": {
    "type": "application/javascript",
    "etag": "\"be-J0p98Hf7P3V5X6YK+cmVM84SO0E\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 190,
    "path": "../public/_nuxt/Title.076fcdb8.js"
  },
  "/_nuxt/Title.31f22138.js": {
    "type": "application/javascript",
    "etag": "\"be-xbbI5Grqs5M9SsfRwP/vJNsdwag\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 190,
    "path": "../public/_nuxt/Title.31f22138.js"
  },
  "/_nuxt/Title.668e1714.js": {
    "type": "application/javascript",
    "etag": "\"be-88izf2XqxJXljyTWkKXR2+ITIxg\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 190,
    "path": "../public/_nuxt/Title.668e1714.js"
  },
  "/_nuxt/Title.vue_vue_type_script_setup_true_lang.8766396f.js": {
    "type": "application/javascript",
    "etag": "\"11d-7/4j9H/svASFZaerBuZip/aYZQw\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 285,
    "path": "../public/_nuxt/Title.vue_vue_type_script_setup_true_lang.8766396f.js"
  },
  "/_nuxt/Title.vue_vue_type_script_setup_true_lang.be9391ed.js": {
    "type": "application/javascript",
    "etag": "\"11c-v24bQuzDGF3PsEGq8P5IPbVkCjY\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 284,
    "path": "../public/_nuxt/Title.vue_vue_type_script_setup_true_lang.be9391ed.js"
  },
  "/_nuxt/Title.vue_vue_type_script_setup_true_lang.e3b6d23a.js": {
    "type": "application/javascript",
    "etag": "\"114-lLJKLZxWXQqnVK8HmMnheZeN994\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 276,
    "path": "../public/_nuxt/Title.vue_vue_type_script_setup_true_lang.e3b6d23a.js"
  },
  "/_nuxt/Transactions.25a6df4d.js": {
    "type": "application/javascript",
    "etag": "\"2fe-MG34oEDzF9Lmuxepdq4797D5hFA\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 766,
    "path": "../public/_nuxt/Transactions.25a6df4d.js"
  },
  "/_nuxt/Transactions.vue_vue_type_script_setup_true_lang.d6e06d92.js": {
    "type": "application/javascript",
    "etag": "\"810-o6wb5TOl0KSBcH5bmZDWqn/z888\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 2064,
    "path": "../public/_nuxt/Transactions.vue_vue_type_script_setup_true_lang.d6e06d92.js"
  },
  "/_nuxt/Wrapper.32c82d9d.js": {
    "type": "application/javascript",
    "etag": "\"d4-uwDhaxq6QAk2rM1dZOMfTGhNt6U\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 212,
    "path": "../public/_nuxt/Wrapper.32c82d9d.js"
  },
  "/_nuxt/_slut_.c6eb09a9.js": {
    "type": "application/javascript",
    "etag": "\"238-Pfp2mY8xE6txQZ0CO/3FREloFrk\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 568,
    "path": "../public/_nuxt/_slut_.c6eb09a9.js"
  },
  "/_nuxt/blank.7dedc627.js": {
    "type": "application/javascript",
    "etag": "\"3c8-6U3E/cb4bEaz5BixdHBpH7tOq+w\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 968,
    "path": "../public/_nuxt/blank.7dedc627.js"
  },
  "/_nuxt/calculate-active-index.613dc462.js": {
    "type": "application/javascript",
    "etag": "\"335-M4Ep5FtT23eljsgA7eXLYV8lv1U\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 821,
    "path": "../public/_nuxt/calculate-active-index.613dc462.js"
  },
  "/_nuxt/dashboard.06c707eb.js": {
    "type": "application/javascript",
    "etag": "\"5e2-uSj3mZdcsRSq8dhxs3hC1JXTPBE\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1506,
    "path": "../public/_nuxt/dashboard.06c707eb.js"
  },
  "/_nuxt/document-driven.dc004260.js": {
    "type": "application/javascript",
    "etag": "\"215-HTxAroZHFYbQS6JzRo8KzyaM5NA\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 533,
    "path": "../public/_nuxt/document-driven.dc004260.js"
  },
  "/_nuxt/entry.3260849a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d6e2-6Qsp4mzvDqvi6fKKcc/P5CgSGkk\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 55010,
    "path": "../public/_nuxt/entry.3260849a.css"
  },
  "/_nuxt/entry.fd4c3c58.js": {
    "type": "application/javascript",
    "etag": "\"5e321-Ax/8azfHQJRspFkeH+rAvcTic7Y\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 385825,
    "path": "../public/_nuxt/entry.fd4c3c58.js"
  },
  "/_nuxt/error-404.2286c3c1.js": {
    "type": "application/javascript",
    "etag": "\"8af-/6nhCZxuZMol6OzDkq7Zu1u3fWw\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 2223,
    "path": "../public/_nuxt/error-404.2286c3c1.js"
  },
  "/_nuxt/error-404.eac13d93.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-z4FmjT6V+NiGXmPANAjf7kIiTvo\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.eac13d93.css"
  },
  "/_nuxt/error-500.886423d2.js": {
    "type": "application/javascript",
    "etag": "\"758-1tP90EgN2EyYuyQarrU33IpBRPM\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1880,
    "path": "../public/_nuxt/error-500.886423d2.js"
  },
  "/_nuxt/error-500.a37da814.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-iq+AEyZ8RZl/2cVg9LNkvdpGuhA\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.a37da814.css"
  },
  "/_nuxt/error-component.65d8a746.js": {
    "type": "application/javascript",
    "etag": "\"465-ceK0D6dgmjiNI27ZFF6SQSwAy3g\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.65d8a746.js"
  },
  "/_nuxt/focus-management.3eebab14.js": {
    "type": "application/javascript",
    "etag": "\"b7e-YoeRoIDFLk/yWLMVH4WuZ3LuZT8\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 2942,
    "path": "../public/_nuxt/focus-management.3eebab14.js"
  },
  "/_nuxt/getting-started.ad4dca15.js": {
    "type": "application/javascript",
    "etag": "\"2c8-seVqyKpoz3ZE2J/LqlACWlDlx8k\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 712,
    "path": "../public/_nuxt/getting-started.ad4dca15.js"
  },
  "/_nuxt/github-face.dd59c9df.js": {
    "type": "application/javascript",
    "etag": "\"39e-A9sSQnP6tGqCP+V/kKP/ZDhAG8w\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 926,
    "path": "../public/_nuxt/github-face.dd59c9df.js"
  },
  "/_nuxt/hidden.831d2366.js": {
    "type": "application/javascript",
    "etag": "\"29c-QIc72wHqD0ynBrgKiv2Hvoqa95c\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 668,
    "path": "../public/_nuxt/hidden.831d2366.js"
  },
  "/_nuxt/index.091769df.js": {
    "type": "application/javascript",
    "etag": "\"da-qMaUg4M7tsMCRvCif0kZUNzKroE\"",
    "mtime": "2022-12-21T14:48:53.273Z",
    "size": 218,
    "path": "../public/_nuxt/index.091769df.js"
  },
  "/_nuxt/index.0c776a22.js": {
    "type": "application/javascript",
    "etag": "\"528-QXBlRBLfsgsBZGWNMN/pjP5Bzr4\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 1320,
    "path": "../public/_nuxt/index.0c776a22.js"
  },
  "/_nuxt/index.0f480573.js": {
    "type": "application/javascript",
    "etag": "\"11a-wuKbe2MI3anwm0QGpFHfaxhEra8\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 282,
    "path": "../public/_nuxt/index.0f480573.js"
  },
  "/_nuxt/index.89ffe49e.js": {
    "type": "application/javascript",
    "etag": "\"d3e-pWrou2Z8SmyTiQTXvJ50QJQ3QUY\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 3390,
    "path": "../public/_nuxt/index.89ffe49e.js"
  },
  "/_nuxt/index.93c80631.js": {
    "type": "application/javascript",
    "etag": "\"8a7-lyuvcEyLWG81CCe+XupnjXMdwBU\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 2215,
    "path": "../public/_nuxt/index.93c80631.js"
  },
  "/_nuxt/index.b992b5a8.js": {
    "type": "application/javascript",
    "etag": "\"da-JpJE2XSlMGCKTGxg6dhiCwUQAJU\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 218,
    "path": "../public/_nuxt/index.b992b5a8.js"
  },
  "/_nuxt/index.d36f2e8b.js": {
    "type": "application/javascript",
    "etag": "\"be-7wvkABm+VXlc7ljbffVDBVMg9pU\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 190,
    "path": "../public/_nuxt/index.d36f2e8b.js"
  },
  "/_nuxt/index.da76f1f7.js": {
    "type": "application/javascript",
    "etag": "\"404-2XdWu2V4u0ej+U32YECxWYYcEo8\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 1028,
    "path": "../public/_nuxt/index.da76f1f7.js"
  },
  "/_nuxt/index.vue_vue_type_script_setup_true_lang.053779e7.js": {
    "type": "application/javascript",
    "etag": "\"3e0-NFcWKoNxH3b6ZBkQRMZFM7QU2WU\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 992,
    "path": "../public/_nuxt/index.vue_vue_type_script_setup_true_lang.053779e7.js"
  },
  "/_nuxt/index.vue_vue_type_script_setup_true_lang.77ac5100.js": {
    "type": "application/javascript",
    "etag": "\"20a-BjB7w3AO4UJGZUhG8UlcPGFKZp4\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 522,
    "path": "../public/_nuxt/index.vue_vue_type_script_setup_true_lang.77ac5100.js"
  },
  "/_nuxt/list.4dce8f16.js": {
    "type": "application/javascript",
    "etag": "\"4b0-uFNXJzpHEyFDX1FZUG1RcM6Gl+A\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 1200,
    "path": "../public/_nuxt/list.4dce8f16.js"
  },
  "/_nuxt/listbox.d0b4cbce.js": {
    "type": "application/javascript",
    "etag": "\"2ac9-aGfyOR/cF/e6fUl6nUVS7/skgio\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 10953,
    "path": "../public/_nuxt/listbox.d0b4cbce.js"
  },
  "/_nuxt/login.6ec3da94.js": {
    "type": "application/javascript",
    "etag": "\"670-sI3m16+xtH/lzTPRbKSVmz647Js\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 1648,
    "path": "../public/_nuxt/login.6ec3da94.js"
  },
  "/_nuxt/micro-task.22f8fa92.js": {
    "type": "application/javascript",
    "etag": "\"90-L+vmpYXKtWfVvfoQuvT0iSCG5+I\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 144,
    "path": "../public/_nuxt/micro-task.22f8fa92.js"
  },
  "/_nuxt/open-closed.d177c8e6.js": {
    "type": "application/javascript",
    "etag": "\"c28-cT2WjxQjvcy48lUBm1XSwRoK/lM\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 3112,
    "path": "../public/_nuxt/open-closed.d177c8e6.js"
  },
  "/_nuxt/page.ce43c9c9.js": {
    "type": "application/javascript",
    "etag": "\"1697-BqrbbofKoxXo54cmRTjqgjnfMLQ\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 5783,
    "path": "../public/_nuxt/page.ce43c9c9.js"
  },
  "/_nuxt/setting.d7b71a88.js": {
    "type": "application/javascript",
    "etag": "\"1ebc-LwobM2BUmm7C/mjQ5bYKSVzLCfo\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 7868,
    "path": "../public/_nuxt/setting.d7b71a88.js"
  },
  "/_nuxt/str.e3d4e921.js": {
    "type": "application/javascript",
    "etag": "\"70-CByL+mGbHpXq1xHSXi37+2HNEGw\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 112,
    "path": "../public/_nuxt/str.e3d4e921.js"
  },
  "/_nuxt/test.86b50a88.js": {
    "type": "application/javascript",
    "etag": "\"b65-g8MN9icVPX+J1qPY1ugtz+XsLcw\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 2917,
    "path": "../public/_nuxt/test.86b50a88.js"
  },
  "/_nuxt/three.module.13605705.js": {
    "type": "application/javascript",
    "etag": "\"921f0-NJg8/B8L2lzCR4q0XAuQJVregC4\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 598512,
    "path": "../public/_nuxt/three.module.13605705.js"
  },
  "/_nuxt/transition.b42055ea.js": {
    "type": "application/javascript",
    "etag": "\"187d-SBzP+hJUanLED6mKKy8bQ0r0vPE\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 6269,
    "path": "../public/_nuxt/transition.b42055ea.js"
  },
  "/_nuxt/use-outside-click.55d6e230.js": {
    "type": "application/javascript",
    "etag": "\"3c3-wtld3sK46q9uNirrfQ4aSQbGtOE\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 963,
    "path": "../public/_nuxt/use-outside-click.55d6e230.js"
  },
  "/_nuxt/use-resolve-button-type.0c4cb0cf.js": {
    "type": "application/javascript",
    "etag": "\"1d5-L/92dJiNy6m7IO7bIhI4yMmCx4o\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 469,
    "path": "../public/_nuxt/use-resolve-button-type.0c4cb0cf.js"
  },
  "/_nuxt/useLang.45f198c8.js": {
    "type": "application/javascript",
    "etag": "\"61-Mj9LFNlZh+XyYRn/sKpFin9H20k\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 97,
    "path": "../public/_nuxt/useLang.45f198c8.js"
  },
  "/_nuxt/useScreen.11596765.js": {
    "type": "application/javascript",
    "etag": "\"190a-V3qIRVtMkuLRr2KkyHcxVOUrETA\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 6410,
    "path": "../public/_nuxt/useScreen.11596765.js"
  },
  "/_nuxt/useSocket.263359d4.js": {
    "type": "application/javascript",
    "etag": "\"1ba-ngC2c9H4J7XPW9ZylXZsoo+I8kU\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 442,
    "path": "../public/_nuxt/useSocket.263359d4.js"
  },
  "/_nuxt/useSyncProps.23073ba0.js": {
    "type": "application/javascript",
    "etag": "\"7c-f6uTzmtKgAeVSxNd6OnF668EVLc\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 124,
    "path": "../public/_nuxt/useSyncProps.23073ba0.js"
  },
  "/_nuxt/web-socket.215ddb3e.js": {
    "type": "application/javascript",
    "etag": "\"329-fju70X6PVYCWPQdf3+aChbtB+SA\"",
    "mtime": "2022-12-21T14:48:53.263Z",
    "size": 809,
    "path": "../public/_nuxt/web-socket.215ddb3e.js"
  },
  "/_nuxt/welcome.e653932a.js": {
    "type": "application/javascript",
    "etag": "\"2e63-qyKGWyai7KgmrKFD4fp+84rENA4\"",
    "mtime": "2022-12-21T14:48:53.253Z",
    "size": 11875,
    "path": "../public/_nuxt/welcome.e653932a.js"
  },
  "/api/_content/cache": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"30-697b2ZEDZleffUG92aOqol2frT8\"",
    "mtime": "2022-12-21T14:48:57.444Z",
    "size": 48,
    "path": "../public/api/_content/cache"
  },
  "/assets/gem/gem.gltf": {
    "type": "model/gltf+json",
    "etag": "\"110749-1GN9iIUMOjMyfvoL74c4OkTP8W8\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 1115977,
    "path": "../public/assets/gem/gem.gltf"
  },
  "/assets/gem/roughness.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8da04-G+tH2LcY/L0u0+bny8RdV9AZ54Q\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 580100,
    "path": "../public/assets/gem/roughness.jpeg"
  },
  "/assets/icons/foody.png": {
    "type": "image/png",
    "etag": "\"5640-5RdJswQWqs8G/4L97ZCNUmJ1pOc\"",
    "mtime": "2022-12-21T14:48:53.303Z",
    "size": 22080,
    "path": "../public/assets/icons/foody.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$1(value) && isObject$1(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
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
  const $set = (key, fn = (v) => v) => {
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
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
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

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (query) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, query.params()) || $data, data);
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

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

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)] || {};
    return cur.transform(next, transformOptions);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await serverQueryContent(event).find();
    contentIndex = data.reduce((acc, item) => {
      if (!acc[item._path]) {
        acc[item._path] = item._id;
      } else if (item._id.startsWith("content:")) {
        acc[item._path] = item._id;
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).map((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_transformers_shiki_mjs_U73RjzbrO3 = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const tokenColors = {};
    const codeBlocks = [];
    const inlineCodes = [];
    visit(
      content.body,
      (node) => node.tag === "code" && node?.props.code || node.tag === "code-inline" && (node.props?.lang || node.props?.language),
      (node) => {
        if (node.tag === "code") {
          codeBlocks.push(node);
        } else if (node.tag === "code-inline") {
          inlineCodes.push(node);
        }
      }
    );
    await Promise.all(codeBlocks.map(highlightBlock));
    await Promise.all(inlineCodes.map(highlightInline));
    if (Object.values(tokenColors).length) {
      const colors = [];
      for (const colorClass of Object.values(tokenColors)) {
        Object.entries(colorClass.colors).forEach(([variant, color]) => {
          if (variant === "default") {
            colors.unshift(`.${colorClass.className}{color:${color}}`);
          } else {
            colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
          }
        });
      }
      content.body.children.push({
        type: "element",
        tag: "style",
        children: [{ type: "text", value: colors.join("") }]
      });
    }
    return content;
    async function highlightInline(node) {
      const code = node.children[0].value;
      const lines = await $fetch(options.apiURL, {
        method: "POST",
        body: {
          code,
          lang: node.props.lang || node.props.language,
          theme: options.theme
        }
      });
      node.children = lines[0].map(tokenSpan);
      node.props = node.props || {};
      node.props.class = "colored";
      return node;
    }
    async function highlightBlock(node) {
      const { code, language: lang, highlights = [] } = node.props;
      const lines = await $fetch(options.apiURL, {
        method: "POST",
        body: {
          code,
          lang,
          theme: options.theme
        }
      });
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = lines.map((line, lineIndex) => ({
        type: "element",
        tag: "span",
        props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
        children: line.map(tokenSpan)
      }));
      return node;
    }
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!tokenColors[key]) {
        tokenColors[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
        };
      }
      return { class: tokenColors[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  }
});

const transformers = [node_modules__pnpm__64nuxt_43content_642_1_1_node_modules__64nuxt_content_dist_runtime_transformers_shiki_mjs_U73RjzbrO3];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  return query;
};

const _eh3bkp = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _yuwxpB = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch("/api/_content/navigation");
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _Oancok = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

var information_for_contributors = [
	"This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
var version = "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json";
var name = "markdown";
var injectionSelector = "L:text.html.markdown";
var scopeName = "text.markdown.mdc";
var patterns = [
	{
		include: "text.html.markdown#frontMatter"
	},
	{
		include: "#component_block"
	},
	{
		include: "#block"
	}
];
var repository = {
	block: {
		comment: "Same as `text.html.markdown#block`, but without `raw_block`",
		patterns: [
			{
				include: "#component_block"
			},
			{
				include: "text.html.markdown#separator"
			},
			{
				include: "#heading"
			},
			{
				include: "#blockquote"
			},
			{
				include: "#lists"
			},
			{
				include: "#paragraph"
			},
			{
				include: "text.html.markdown#fenced_code_block"
			},
			{
				include: "text.html.markdown#link-def"
			},
			{
				include: "text.html.markdown#html"
			}
		]
	},
	inline: {
		patterns: [
			{
				include: "#component_inline"
			},
			{
				include: "#span"
			},
			{
				include: "#markdown_attributes"
			}
		]
	},
	markdown_attributes: {
		match: "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.component.attribute",
		captures: {
			"4": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	span: {
		match: "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
		name: "markup.component.span",
		captures: {
			"2": {
				name: "string.other.link.description.title.markdown"
			},
			"4": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	attributes: {
		match: "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.attributes",
		captures: {
			"3": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	component_inline: {
		match: "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
		name: "markup.component.inline",
		captures: {
			"2": {
				name: "punctuation.definition.tag.start.component"
			},
			"3": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			},
			"6": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"7": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"8": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	component_block: {
		begin: "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
		name: "markup.component.block",
		end: "(^|\\G)(\\2)(\\3)\\s*$",
		beginCaptures: {
			"4": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		},
		patterns: [
			{
				include: "#content"
			}
		]
	},
	content: {
		begin: "(^|\\G)(\\s*)(.*)",
		"while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
		contentName: "meta.embedded.block.component",
		patterns: [
			{
				begin: "(^|\\G)(\\s*)(-{3})(\\s*)$",
				end: "(^|\\G)(\\s*(-{3})(\\s*)$)",
				patterns: [
					{
						include: "source.yaml"
					}
				]
			},
			{
				match: "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						name: "comment.block.html"
					}
				}
			},
			{
				comment: "Block Repository created to disable 4-space raw block inside components",
				include: "#block"
			}
		]
	},
	attribute: {
		patterns: [
			{
				match: "(?x)\n  (\n    ([^=><\\s]*)  # attribute name\n    (             # attribute value\n        =[\"]([^\"]*)([\"])|[']([^']*)(['])\n      | =[^\\s'\"]*\n    )?\n    \\s*\n  )",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						patterns: [
							{
								include: "#attribute-interior"
							}
						]
					}
				}
			}
		]
	},
	"attribute-interior": {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
		patterns: [
			{
				begin: "=",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.key-value.html"
					}
				},
				end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
				patterns: [
					{
						match: "([^\\s\"'=<>`/]|/(?!>))+",
						name: "string.unquoted.html"
					},
					{
						begin: "\"",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "\"",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.double.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.single.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						match: "=",
						name: "invalid.illegal.unexpected-equals-sign.html"
					}
				]
			}
		]
	},
	entities: {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"912": {
						name: "punctuation.definition.entity.html"
					}
				},
				comment: "Yes this is a bit ridiculous, there are quite a lot of these",
				match: "(?x)\n\t\t\t\t\t\t(&)\t(?=[a-zA-Z])\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n\t\t\t\t\t\t  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n\t\t\t\t\t\t  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n\t\t\t\t\t\t  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n\t\t\t\t\t\t  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n\t\t\t\t\t\t  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n\t\t\t\t\t\t  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n\t\t\t\t\t\t  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n\t\t\t\t\t\t  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n\t\t\t\t\t\t  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n\t\t\t\t\t\t  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n\t\t\t\t\t\t  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n\t\t\t\t\t\t  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n\t\t\t\t\t\t  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n\t\t\t\t\t\t  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n\t\t\t\t\t\t  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n\t\t\t\t\t\t  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n\t\t\t\t\t\t  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n\t\t\t\t\t\t  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n\t\t\t\t\t\t  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n\t\t\t\t\t\t  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n\t\t\t\t\t\t  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n\t\t\t\t\t\t  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n\t\t\t\t\t\t  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n\t\t\t\t\t\t  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n\t\t\t\t\t\t  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(;)\n\t\t\t\t\t",
				name: "constant.character.entity.named.$2.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[0-9]+(;)",
				name: "constant.character.entity.numeric.decimal.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[xX][0-9a-fA-F]+(;)",
				name: "constant.character.entity.numeric.hexadecimal.html"
			},
			{
				match: "&(?=[a-zA-Z0-9]+;)",
				name: "invalid.illegal.ambiguous-ampersand.html"
			}
		]
	},
	heading: {
		match: "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
		captures: {
			"1": {
				patterns: [
					{
						match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.6.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.5.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.4.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.3.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.2.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.1.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					}
				]
			}
		},
		name: "markup.heading.markdown",
		patterns: [
			{
				include: "text.html.markdown#inline"
			}
		]
	},
	"heading-setext": {
		patterns: [
			{
				match: "^(={3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.1.markdown"
			},
			{
				match: "^(-{3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.2.markdown"
			}
		]
	},
	lists: {
		patterns: [
			{
				begin: "(^|\\G)([ ]*)([*+-])([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				comment: "Currently does not support un-indented second lines.",
				name: "markup.list.unnumbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			},
			{
				begin: "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				name: "markup.list.numbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			}
		]
	},
	paragraph: {
		begin: "(^|\\G)[ ]*(?=\\S)",
		name: "meta.paragraph.markdown",
		patterns: [
			{
				include: "#inline"
			},
			{
				include: "text.html.markdown#inline"
			},
			{
				include: "text.html.derivative"
			},
			{
				include: "#heading-setext"
			}
		],
		"while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
	},
	blockquote: {
		begin: "(^|\\G)[ ]*(>) ?",
		captures: {
			"2": {
				name: "punctuation.definition.quote.begin.markdown"
			}
		},
		name: "markup.quote.markdown",
		patterns: [
			{
				include: "#block"
			}
		],
		"while": "(^|\\G)\\s*(>) ?"
	}
};
const mdcTMLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	injectionSelector: injectionSelector,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

const logger = consola.withScope("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang))?.id;
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const resolveBody = (body) => {
  if (typeof body.code !== "string") {
    body.code = "";
  }
  return {
    code: body.code.replace(/\n+$/, ""),
    lang: resolveLang(body.lang || ""),
    theme: resolveTheme(body.theme || "")
  };
};
const _azuc1f = defineLazyEventHandler(async () => {
  const { theme, preload } = useRuntimeConfig().content.highlight;
  const highlighter = await getHighlighter({
    theme: theme?.default || theme || "dark-plus",
    langs: [
      ...preload || [],
      "diff",
      "json",
      "js",
      "ts",
      "css",
      "shell",
      "html",
      "md",
      "yaml",
      {
        id: "md",
        scopeName: "text.markdown.mdc",
        path: "mdc.tmLanguage.json",
        aliases: ["markdown"],
        grammar: mdcTMLanguage
      }
    ]
  });
  return async (event) => {
    const params = await useBody(event);
    const { code, lang, theme: theme2 = { default: highlighter.getTheme() } } = resolveBody(params);
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      let message = "Content Highlighter Error\n\n";
      message = message + `Language "${lang}" is not loaded Shiki. Falling back to plain code.

`;
      message = message + `Please make sure you add "${lang}" to the 'preload' list in your Nuxt config.

`;
      message = message + "See: https://content.nuxtjs.org/api/configuration#highlight";
      logger.warn(message);
      return [[{ content: code }]];
    }
    await Promise.all(
      Object.values(theme2).map(async (theme3) => {
        if (!highlighter.getLoadedThemes().includes(theme3)) {
          await highlighter.loadTheme(theme3);
        }
      })
    );
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3);
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const [big, small] = line1.tokens.length > line2.tokens.length ? [line1, line2] : [line2, line1];
  let targetToken = 0;
  let targetTokenCharIndex = 0;
  big.tokens.forEach((t, i) => {
    if (targetTokenCharIndex === 0) {
      if (t.content === small.tokens[i]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, i)
          }
        });
        targetToken = i + 1;
        return;
      }
      if (t.content === small.tokens[targetToken]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, targetToken)
          }
        });
        targetToken += 1;
        return;
      }
    }
    if (small.tokens[targetToken]?.content?.substring(targetTokenCharIndex, targetTokenCharIndex + t.content.length) === t.content) {
      targetTokenCharIndex += t.content.length;
      mergedTokens.push({
        content: t.content,
        color: {
          ...getColors(big, i),
          ...getColors(small, targetToken)
        }
      });
    }
    if (small.tokens[targetToken]?.content.length <= targetTokenCharIndex) {
      targetToken += 1;
      targetTokenCharIndex = 0;
    }
  });
  return mergedTokens;
}

const _lazy_dZsQWP = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_dZsQWP, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _eh3bkp, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _eh3bkp, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _yuwxpB, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _Oancok, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _Oancok, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/highlight', handler: _azuc1f, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_dZsQWP, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, defu as b, defuFn as d, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
