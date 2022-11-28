<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import { useCart } from '~/stores/cart'
import { useLoading } from '~/stores/loading'
import { IApp } from '~/utils/app'
import { Api } from '~~/services/api'
import { Transaction } from '~/type'

// state
const app = useState<IApp>('app')

// composables
const cart = useCart()
const loading = useLoading()
const api = useApi()

// funcs
const { reset, increment, decrement } = cart

// modal checkout
const isShowModalCheckout = ref(false)
const toggleCheckout = () => {
  isShowModalCheckout.value = !isShowModalCheckout.value
}

// checkout
const transaction = ref<Transaction | undefined>()
const ticketElm = ref<HTMLDivElement>()
const ticketElmRotate = ref({
  x: 0,
  y: 0,
})
const isCheckoutSuccess = ref(false)
const checkout = async () => {
  loading.show()

  await new Promise((resolve) => setTimeout(resolve, 2000))

  try {
    const res = await api.create(
      Api.Transaction.Create({
        user_name: 'guest',
        menus: [
          ...cart.menus.map((menu) => ({
            id: menu.menu.id,
            qty: menu.quantity,
          })),
        ],
      })
    )
    if (res.status === 201) {
      transaction.value = res.data.data
      isCheckoutSuccess.value = true
      reset()
    }
  } catch (error) {}

  loading.hide()
}
const close = () => {
  isCheckoutSuccess.value = false
  toggleCheckout()
}
const onMouseMove = function (e: { clientY: number; clientX: number }) {
  if (ticketElm.value && isCheckoutSuccess.value) {
    const { x, y, width, height } = ticketElm.value.getBoundingClientRect()
    const centerPoint = { x: x + width / 2, y: y + height / 2 }
    const rotateX = (e.clientY - centerPoint.y) * 0.008
    const rotateY = (e.clientX - centerPoint.x) * -0.008
    ticketElmRotate.value = { x: rotateX, y: rotateY }
  }
}

// lifecycle
onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove)
})
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
          <div class="px-6 pb-4 flex flex-col space-y-8">
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
              <Button
                size="sm"
                type="danger"
                text="Cancel"
                @click="toggleCheckout"
              />
              <Button size="sm" text="Checkout Now" @click="checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- checkout -->
    <div
      v-if="isCheckoutSuccess && transaction"
      class="fixed top-0 left-0 flex w-screen h-screen z-50 bg-primary-600"
    >
      <div
        class="flex-1 relative flex flex-col justify-center items-center space-y-8"
      >
        <div class="text-4xl font-bold text-center">
          YOUR CHECKOUT SUCCESS CREATE!!!
        </div>
        <!-- ticket -->
        <div
          ref="ticketElm"
          class="w-120 h-50 rounded-lg shadow bg-white text-slate-800 flex px-6 py-4 relative"
          :style="{
            transform: `perspective(1000px) rotateX(${ticketElmRotate.x}deg) rotateY(${ticketElmRotate.y}deg)`,
          }"
        >
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="font-mono font-bold text-xl">CHECKOUT TICKET</div>
              <div class="font-semibold">{{ app.name }}</div>
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold mr-2">Name :</span>
                <span class="font-mono">{{ transaction.user_name }}</span>
              </div>
              <div>
                <span class="font-semibold mr-2">Total :</span>
                <span>{{ $formatCurrency(transaction.total) }}</span>
              </div>
            </div>
          </div>
          <div class="pr-2 flex mr-4 items-center">
            <!-- <img
              src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.example.com&chs=180x180&choe=UTF-8&chld=L|2"
              alt="Qrcode"
              class="inline-block"
            /> -->
            <QrcodeVue :value="`#${transaction.code}`" :size="142" level="H" />
          </div>
          <div
            class="absolute right-0 transform mr-7 font-bold font-mono text-gray-600"
            :style="{
              top: '50%',
              transform: 'translate(50%, -50%) rotate(90deg)',
            }"
          >
            #{{ transaction.code }}
          </div>
        </div>
        <div>
          <Button size="sm" text="Back to Catalog" @click="close" />
        </div>
      </div>
    </div>
  </div>
</template>
