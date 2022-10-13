<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Menu } from '~/types'
import { useCart } from '~/stores/cart'

// composable
// const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  titleTemplate: '',
  title: capitalize('Foody'),
}))

// data
const menus = ref<Menu[]>([
  {
    id: 1,
    name: 'Big Mac Kecil',
    price: 50000,
    description:
      'paket makan dan minum, 1 burger, 1 kentang goreng dan 1 soft drink',
    image:
      'https://asset-a.grid.id/crop/8x43:1064x782/x/photo/2021/11/24/cara-beli-bigmac-cuma-rp1-penci-20211124091449.jpg',
  },
  {
    id: 2,
    name: 'Big Mac Medium',
    price: 550000,
    description:
      'paket makan dan minum, 1 big burger, 1 kentang goreng dan 1 soft drink',
    image:
      'https://asset-a.grid.id/crop/8x43:1064x782/x/photo/2021/11/24/cara-beli-bigmac-cuma-rp1-penci-20211124091449.jpg',
  },
])

// cart
const cart = useCart()
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
