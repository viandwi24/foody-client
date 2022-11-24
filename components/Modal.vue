<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
  },
})
const emit = defineEmits(['close'])
</script>
<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" class="relative z-10" @close="emit('close')">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800"
              :class="{
                'max-w-md': size == 'md',
                'max-w-xl': size == 'xl',
              }"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
              >
                {{ title }}
              </DialogTitle>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
