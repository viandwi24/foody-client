<script lang="ts" setup>
import {
  TabGroup,
  TabList,
  Tab as HeadlessUiTab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
import { capitalize } from '~/utils/str'
const screen = useScreen()

// composable
// const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'dashboard',
})
useHead(() => ({
  titleTemplate: '',
  title: capitalize('Foody Owner'),
}))

// menus
const subpages = shallowRef([
  {
    key: 'menu',
    name: 'Menu',
    component: resolveComponent('DashboardPagesMenu'),
  },
  {
    key: 'order',
    name: 'Orders',
    component: resolveComponent('DashboardPagesOrder'),
  },
  {
    key: 'transaction',
    name: 'Transactions',
    component: resolveComponent('DashboardPagesTransactions'),
  },
])
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Owner Dashboard" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <TabGroup
          as="div"
          class="flex flex-col"
          :vertical="screen.higherThan(Size.MEDIUM)"
        >
          <TabList class="w-auto md:w-1/6 flex space-x-4 rounded-lg mb-2">
            <HeadlessUiTab
              v-for="page in subpages"
              :key="page.key"
              v-slot="{ selected }"
              as="template"
            >
              <button
                :class="[
                  'md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white',
                  selected
                    ? 'font-extrabold bg-gray-200 dark:bg-white/[0.12]'
                    : 'text-slate-800 dark:text-gray-400',
                ]"
              >
                {{ page.name }}
              </button>
            </HeadlessUiTab>
          </TabList>
          <TabPanels class="flex-1 max-w-full">
            <TabPanel
              v-for="item in subpages"
              :key="item.key"
              class="max-w-full"
            >
              <component :is="item.component" />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
