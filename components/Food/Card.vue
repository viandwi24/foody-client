<script lang="ts" setup>
import { Card } from '#components'
import { Menu } from '~~/type'

defineProps({
  menu: {
    type: Object as () => Menu,
    required: true,
  },
})

const hasFoodInCart = ref(false)
</script>

<template>
  <button class="group hover:no-underline flex h-full">
    <Card
      class="h-full flex flex-col relative overflow-hidden bg-gray-200 shadow-lg dark:group-hover:border-primary-200"
      :class="{
        'dark:border-primary-200': hasFoodInCart,
      }"
    >
      <div class="w-full h-full relative overflow-hidden">
        <div
          class="transition-all flex justify-center items-center transform duration-300 absolute z-10 bg-slate-900/30 group-hover:bg-slate-900/50 w-full h-full"
        >
          <div
            class="text-xl font-extrabold text-gray-100 drop-shadow-xl group-hover:animate-pulse text-center"
          >
            {{ menu.name }}
          </div>
        </div>
        <div
          class="transition-all transform duration-300 group-hover:scale-110"
          :style="{
            backgroundImage: `url(${menu.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }"
        />
      </div>
      <div class="text-sm p-2 flex justify-between items-center bg-slate-800">
        <div class="font-bold flex items-center">
          {{ $formatCurrency(menu.price) }}
        </div>
        <div class="rounded bg-primary-500 p-0.5">
          <div v-if="hasFoodInCart" class="w-4 h-4">+1</div>
        </div>
        <!-- <div class="font-light">{{ menu.avearageTime }} min</div> -->
      </div>
    </Card>
  </button>
</template>
