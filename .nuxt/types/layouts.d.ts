import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "page"
declare module "/home/viandwi24/Project/Learn/foody-client/node_modules/.pnpm/nuxt3@3.0.0-rc.12-27730995.2894a75_3qgq5m7bqj7palvvc4uezrk4iq/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}