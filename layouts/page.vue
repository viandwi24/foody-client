<script lang="ts" setup>
import { useCart } from '~/stores/cart'
import { useLoading } from '~/stores/loading'

// cart
const cart = useCart()

// funcs
const { reset, increment, decrement } = cart

// modal checkout
const isShowModalCheckout = ref(false)
const toggleCheckout = () => {
  isShowModalCheckout.value = !isShowModalCheckout.value
}

// checkout
const checkout = () => {
  useLoading().show()
}
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
    <div>
      <div
        v-if="isShowModalCheckout"
        class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/80"
      />
      <div
        class="transition-all duration-300 fixed block w-96 z-50"
        :class="{
          'bottom-0 right-0 mb-6 mr-6': !isShowModalCheckout,
        }"
        :style="`${
          isShowModalCheckout
            ? 'top: 50%; left: 50%; transform: translate(-50%, -50%);'
            : ''
        }`"
      >
        <div
          class="flex-1 relative bg-slate-800 rounded-lg shadow-xl border border-primary-600"
        >
          <div class="text-2xl font-bold px-6 py-4 flex justify-between">
            <span>Cart</span>
            <span
              v-if="isShowModalCheckout"
              class="transform rotate-45 text-4xl cursor-pointer hover:text-red-500"
              @click="toggleCheckout"
            >
              +
            </span>
          </div>
          <div class="px-6 pb-4 flex flex-col space-y-4">
            <div class="flex flex-col space-y-1">
              <div
                v-for="item in cart.menus"
                :key="item.menu.id"
                class="flex justify-between"
              >
                <div class="flex items-center">
                  <span class="mr-2 truncate max-w-full">{{
                    item.menu.name
                  }}</span>
                  <!-- <span v-if="item.quantity > 1" class="text-xs">
                    x {{ item.quantity }}
                  </span> -->
                  <span class="flex space-x-2 text-xs">
                    <button
                      class="rounded-full w-5 h-5 flex justify-center items-center bg-slate-700"
                      @click="decrement(item)"
                    >
                      -
                    </button>
                    <div>{{ item.quantity }}</div>
                    <button
                      class="rounded-full w-5 h-5 flex justify-center items-center bg-slate-700"
                      @click="increment(item)"
                    >
                      +
                    </button>
                  </span>
                </div>
                <div>
                  {{
                    $getCurrentCurrency().symbol + cart.getPriceMenuItem(item)
                  }}
                </div>
              </div>
              <div v-if="cart.menus.length === 0">
                <div class="text-center">Cart is empty</div>
              </div>
            </div>
            <div v-if="!isShowModalCheckout" class="flex space-x-2 justify-end">
              <Button size="sm" type="danger" text="Reset" @click="reset" />
              <Button size="sm" text="Checkout" @click="toggleCheckout" />
            </div>
            <div v-else class="flex space-x-2 justify-end">
              <Button size="sm" text="Checkout Now" @click="checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
