import { Store } from '@pinia/nuxt/dist/runtime/composables'
import { useLoading } from '~/stores/loading'
import { IAuthState, useAuth } from '~~/stores/auth'
import { formatCurrency, getCurrentCurrency } from '~~/utils/curr'

export default defineNuxtPlugin(({ provide }) => {
  const auth = useAuth()

  // provide
  provide('getCurrentCurrency', getCurrentCurrency)
  provide('formatCurrency', formatCurrency)
  provide('auth', auth)

  // loading
  const loading = useLoading()
  const { show, hide, toggle } = loading
  provide('loading', {
    show,
    hide,
    toggle,
  })

  // middleware
  addRouteMiddleware('auth', () => {
    if (!auth.$state.user) {
      return '/owner/auth/login'
    } else {
      return true
    }
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

export type auth = Store<
  'auth',
  IAuthState,
  {},
  {
    login(data: { email: string; password: string }): Promise<any>
    fetchMe(): Promise<any>
    updateWithToken(token: string): void
    clearToken(): void
  }
>

declare module '#app' {
  interface NuxtApp {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
    $formatCurrency(value: number): string
    $loading: LoadingReturn
    $auth: auth
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getCurrentCurrency(): UtilsGetCurrentCurrencyReturn
    $formatCurrency(value: number): string
    $loading: LoadingReturn
    $auth: auth
  }
}
