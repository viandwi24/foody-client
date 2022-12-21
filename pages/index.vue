<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Menu } from '~~/type'
import { useCart } from '~/stores/cart'
import { Api } from '~~/services/api'
import { useLoading } from '~~/stores/loading'

// composable
// const { t } = useLang()
const api = useApi()
const loading = useLoading()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  titleTemplate: '',
  title: capitalize('Foody'),
}))

// data
const menus = ref<Menu[]>([])

// cart
const cart = useCart()
const { socket } = useSocket()

// funcs
const fetch = async () => {
  loading.show()
  const data = await api.create(Api.Menu.All())
  menus.value = (data.data?.data as unknown as Menu[]) || []
  loading.hide()
}

// lifecycle
onMounted(() => {
  fetch()
  console.log('socket', socket)
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Menu" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="grid grid-cols-6 gap-4">
          <FoodCard
            v-for="(menu, i) in menus"
            :key="i"
            :menu="menu"
            class="h-42"
            @click="cart.addMenu(menu, 1)"
          />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
