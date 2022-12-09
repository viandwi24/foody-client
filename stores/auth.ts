import { defineStore } from 'pinia'
import { Api } from '~~/services/api'

export interface User {
  id: number
  email: string
  name: string
}

export interface IAuthState {
  user?: User
  isLoggedIn: boolean
}

export const useAuth = defineStore('auth', {
  state: (): IAuthState => ({
    user: undefined,
    isLoggedIn: false,
  }),
  actions: {
    async login(data: { email: string; password: string }) {
      // composables
      const router = useRouter()
      const api = useApi()
      try {
        const res = await api.create(Api.Auth.Login({ ...data }))
        if (res.status === 200 && res.data.token) {
          console.log('res.data.token', res.data.token)
          this.updateWithToken(res.data.token)
          console.log(res, await this.fetchMe())
          this.isLoggedIn = true
        }
        router.push('/owner')
      } catch (err) {
        console.log(err)
        return false
      }
      return true
    },
    async fetchMe() {
      // composables
      const api = useApi()
      try {
        const res = await api.create(Api.Auth.Me())
        if (res.status === 200 && res.data.email) {
          this.user = res.data
        }
        this.isLoggedIn = true
        return res.data
      } catch (err) {
        console.log(err)
      }
    },
    updateWithToken(token: string) {
      const api = useApi()
      api.http.defaults.headers.common.Authorization = `Bearer ${token}`
      console.log(
        'updated token',
        api.http.defaults.headers.common.Authorization
      )
    },
    clearToken() {
      const api = useApi()
      api.http.defaults.headers.common.Authorization = ''
      console.log(
        'updated token',
        api.http.defaults.headers.common.Authorization
      )
    },
    logout() {
      const router = useRouter()
      console.log('logging out')
      this.clearToken()
      this.user = undefined
      this.isLoggedIn = false
      router.push('/owner/auth/login')
      console.log('logged out')
    },
  },
})
