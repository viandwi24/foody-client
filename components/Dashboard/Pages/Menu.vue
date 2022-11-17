<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { Menu } from '~/types'
import { useLoading } from '~/stores/loading'
const columns = ref([
  { key: 'no', label: 'No', data: '$index' },
  { key: 'name', label: 'Name', data: 'name' },
  {
    key: 'desc',
    label: 'Description',
    builder: (data: any) => data.description,
  },
  {
    key: 'action',
    label: '...',
  },
])
const rows = ref<Menu[]>([
  { id: 1, name: 'test', description: 'test', image: '', price: 0 },
  { id: 2, name: 'test2', description: 'test2', image: '', price: 0 },
])

// funcs
const edit = (item: Menu) => {
  console.log('edit', item)
}

// modal
const modalMenuShow = ref(false)
const modaMenuToggle = () => (modalMenuShow.value = !modalMenuShow.value)

// lifecycle
onMounted(() => {
  useLoading().show()
  setTimeout(() => {
    useLoading().hide()
  }, 1000)
})
</script>

<template>
  <div>
    <div class="flex justify-end mb-4">
      <Button
        class="capitalize"
        size="sm"
        type="primary"
        text="New Product"
        @click="modaMenuToggle"
      />
    </div>
    <Card class="mb-4">
      <Table :columns="columns" :rows="rows">
        <template #row-col-action="{ rawItem }">
          <div class="flex">
            <!-- <Button class="mr-2" size="sm" @click="edit(rawItem)">
              <IconFa:pencil class="text-xs" />
            </Button> -->
            <Button
              class="mr-2"
              size="xs"
              type="warning"
              @click="edit(rawItem)"
            >
              <IconFa:pencil class="text-xs" />
            </Button>
            <Button class="mr-2" size="xs" type="danger" @click="edit(rawItem)">
              <IconFa:trash class="text-xs" />
            </Button>
          </div>
        </template>
      </Table>
      <!-- <CardContent>
        <CardTitle
          class="capitalize"
          :text="$t('pages.setting.sections.validate_username.title')"
        />
        <p class="mb-2">
          {{ $t('pages.setting.sections.validate_username.description') }}
        </p>
      </CardContent> -->
      <!-- <CardFooter
        class="flex flex-col space-y-2 md:space-y-0 md:space-y md:flex-row items-center md:justify-between"
      >
        <p>
          {{ $t('pages.setting.sections.validate_username.footer') }}
          <Anchor
            class="underline font-bold capitalize"
            :text="$t('pages.setting.sections.validate_username.footer_link')"
            href="https://docs.github.com/en/rest/users/users#get-a-user"
          />
        </p>
        <Button
          class="capitalize"
          size="sm"
          type="opposite"
          :text="$t('pages.setting.sections.validate_username.footer_button')"
        />
      </CardFooter> -->
    </Card>
    <ClientOnly>
      <TransitionRoot appear :show="modalMenuShow" as="template">
        <Dialog as="div" class="relative z-10" @close="modaMenuToggle">
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
                  class="w-full max-w-md transform overflow-hidden rounded-lg px-8 py-8 text-left align-middle shadow-xl transition-all bg-white dark:bg-slate-800"
                >
                  <DialogTitle
                    as="h3"
                    class="text-xl font-medium font-bold leading-6 text-gray-900 dark:text-white mt-0"
                  >
                    New Menu
                  </DialogTitle>
                  <div class="flex flex-col space-y-4 mt-2">
                    <div class="flex flex-col space-y-2">
                      <label>Name</label>
                      <FormTextInput />
                    </div>
                    <div class="flex flex-col space-y-2">
                      <label>Description</label>
                      <FormTextAreaInput />
                    </div>
                    <div class="flex flex-col space-y-2">
                      <label>Price</label>
                      <FormTextInput type="number">
                        <template #prefix-disabled>
                          <span class="flex-1 px-4 py-2">{{
                            $getCurrentCurrency().symbol
                          }}</span>
                        </template>
                      </FormTextInput>
                    </div>
                  </div>
                  <div class="flex justify-end space-x-4 mt-4">
                    <Button
                      class="capitalize"
                      size="sm"
                      type="danger"
                      text="Cancel"
                      @click="modaMenuToggle"
                    />
                    <Button
                      class="capitalize"
                      size="sm"
                      type="primary"
                      text="Save"
                      @click="modaMenuToggle"
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </div>
</template>
