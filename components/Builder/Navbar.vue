<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { IApp } from '~/utils/app'

// state
const app = useState<IApp>('app')
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

  // on show on mobile
  setInterval(() => {
    // must in mobile
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}

const { $auth } = useNuxtApp()
const router = useRouter()

const logout = () => $auth.logout()
const home = () => router.push(getHomeRoute.value)

const getHomeRoute = computed(() => {
  if ($auth.isLoggedIn) return { name: 'owner' }
  return { name: 'index' }
})
</script>

<template>
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-30 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
  >
    <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div>
    <div class="max-w-8xl w-full mx-auto">
      <div class="py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title">
            <NuxtLink
              tag="a"
              class="mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200"
              :to="getHomeRoute"
            >
              <span class="sr-only">home</span>
              <span class="flex items-center">
                <!-- <IconSimpleIcons:nuxtdotjs
                  class="inline-block mr-2 text-lg text-primary-500"
                /> -->
                <img
                  src="/assets/icons/foody.png"
                  :alt="app.name"
                  class="h-6 mr-2"
                />
                {{ app.name }}
              </span>
            </NuxtLink>
          </slot>
          <!-- menu -->
          <div
            v-if="$auth.isLoggedIn"
            class="flex-1 flex items-center justify-end"
          >
            <Menu>
              <MenuButton>{{ $auth.user?.name || '' }}</MenuButton>
              <MenuItems
                class="absolute z-50 flex flex-col space-y-3 top-0 mt-8 bg-gray-100 dark:bg-slate-800 pl-4 pr-8 py-4 rounded-lg items-start justify-start text-sm"
              >
                <MenuItem>
                  <button class="flex space-x-2 items-center" @click="home()">
                    <IconFa:home class="text-xs" />
                    <span>Home</span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button class="flex space-x-2 items-center" @click="logout()">
                    <IconFa:sign-out class="text-xs" />
                    <span>Logout</span>
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            <!-- <div class="text-sm">
              {{ $auth.user?.name || '' }}
            </div> -->
          </div>
          <slot name="menu" />
          <!-- options:toggle -->
          <div
            v-if="$slots['options']"
            class="flex-1 flex justify-end lg:hidden"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                aria-hidden="true"
              >
                <icon-fa-solid:ellipsis-v />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <slot name="drawer" :toggle-drawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <!-- options -->
        <div v-if="showOptions && $slots['options']">
          <slot
            name="options"
            :toggle-options="toggleOptions"
            :show-options="showOptions"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: theme('colors.slate.900');
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
