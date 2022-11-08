import { useLoading } from '~/stores/loading'

export default defineNuxtPlugin(({ provide }) => {
  provide('getCurrentCurrency', () => {
    return {
      symbol: 'Rp',
      code: 'IDR',
    }
  })

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
    $loading: LoadingReturn
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
    $loading: LoadingReturn
  }
}
