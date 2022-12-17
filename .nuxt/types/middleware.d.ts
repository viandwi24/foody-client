import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/nuxt3@3.0.0-rc.12-27730995.2894a75_3qgq5m7bqj7palvvc4uezrk4iq/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}