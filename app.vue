<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <div
        v-if="loading.state"
        class="fixed z-60 top-0 left-0 w-screen h-screen flex bg-black/70"
      >
        <div class="flex-1 flex justify-center items-center relative">
          <div
            class="h-40 w-40 rounded bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100 flex flex-col justify-center items-center space-y-4"
          >
            <IconEosIcons:loading class="text-6xl text-primary" />
            <div>LOADING...</div>
          </div>
        </div>
      </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
import { useLoading } from '~/stores/loading'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const loading = useLoading()
</script>
