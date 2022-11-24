import { useLoading } from '~/stores/loading'
import { formatCurrency, getCurrentCurrency } from '~~/utils/curr'

export default defineNuxtPlugin(({ provide }) => {
  provide('getCurrentCurrency', getCurrentCurrency)
  provide('formatCurrency', formatCurrency)

  // loading
  const loading = useLoading()
  const { show, hide, toggle } = loading
  provide('loading', {
    show,
    hide,
    toggle,
  })
})

export interface UtilsGetCurrentCurrencyReturn {
  symbol: string
  code: string
}

export interface LoadingReturn {
  show: () => void
  hide: () => void
  toggle: (show?: boolean) => void
}

declare module '#app' {
  interface NuxtApp {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
    $formatCurrency(value: number): string
    $loading: LoadingReturn
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
    $formatCurrency(value: number): string
    $loading: LoadingReturn
  }
}
