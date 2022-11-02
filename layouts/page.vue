<script lang="ts" setup>
import { useCart } from '~/stores/cart'

// cart
const cart = useCart()

// funcs
const { reset } = cart
const checkout = () => {}
</script>

<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>

    <!-- cart -->
    <div class="fixed flex bottom-0 right-0 w-96 mb-6 mr-6">
      <div
        class="flex-1 relative bg-slate-800 rounded-lg shadow-xl border border-primary-600"
      >
        <div class="text-2xl font-bold px-6 py-4">Cart</div>
        <div class="px-6 pb-4 flex flex-col space-y-4">
          <div class="flex flex-col space-y-1">
            <div
              v-for="item in cart.menus"
              :key="item.menu.id"
              class="flex justify-between"
            >
              <div>
                <span class="mr-2">{{ item.menu.name }}</span>
                <span v-if="item.quantity > 1" class="text-xs"
                  >x {{ item.quantity }}</span
                >
              </div>
              <div>
                {{ $getCurrentCurrency().symbol + cart.getPriceMenuItem(item) }}
              </div>
            </div>
            <div v-if="cart.menus.length === 0">
              <div class="text-center">Cart is empty</div>
            </div>
          </div>
          <div class="flex space-x-2 justify-end">
            <Button size="sm" type="danger" text="Reset" @click="reset" />
            <Button size="sm" text="Checkout" @click="checkout" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
