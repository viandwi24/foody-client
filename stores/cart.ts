import { defineStore } from 'pinia'
import { Menu } from '~/types'

export interface CartStateMenu {
  menu: Menu
  quantity: number
}

export interface CartState {
  menus: CartStateMenu[]
}

export const useCart = defineStore('cart', {
  state: (): CartState => ({
    menus: [],
  }),
  actions: {
    addMenu(menu: Menu, quantity: number) {
      const index = this.menus.findIndex((m) => m.menu.id === menu.id)
      if (index === -1) {
        this.menus.push({ menu, quantity })
      } else {
        this.menus[index].quantity += quantity
      }
    },
    getPriceMenuItem(item: CartStateMenu) {
      return item.menu.price * item.quantity
    },
    reset() {
      this.menus = []
    },
    increment(item: CartStateMenu) {
      this.menus.find((m) => m.menu.id === item.menu.id)!.quantity++
    },
    decrement(item: CartStateMenu) {
      const index = this.menus.findIndex((m) => m.menu.id === item.menu.id)
      if (this.menus[index].quantity > 1) {
        this.menus[index].quantity--
      } else {
        this.menus.splice(index, 1)
      }
    },
  },
})
