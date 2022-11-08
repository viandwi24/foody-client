import { defineStore } from 'pinia'

export interface LoadingState {
  state: boolean
}

export const useLoading = defineStore('loading', {
  state: (): LoadingState => ({
    state: false,
  }),
  actions: {
    show() {
      this.state = true
    },
    hide() {
      this.state = false
    },
    toggle(show?: boolean) {
      if (typeof show !== 'undefined') {
        show ? this.show() : this.hide()
      } else {
        this.state ? this.hide() : this.show()
      }
    },
  },
})
