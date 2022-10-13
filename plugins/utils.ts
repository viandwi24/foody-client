export default defineNuxtPlugin(({ provide }) => {
  provide('getCurrentCurrency', () => {
    return {
      symbol: '$',
      code: 'USD',
    }
  })
})

export interface UtilsGetCurrentCurrencyReturn {
  symbol: string
  code: string
}

declare module '#app' {
  interface NuxtApp {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
  }
}
