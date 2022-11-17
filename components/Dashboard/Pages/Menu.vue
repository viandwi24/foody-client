<script lang="ts" setup>
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
  modaMenuToggle('edit')
}
const deleteItem = (item: Menu) => {
  console.log('delete', item)
  modaDeleteToggle()
}

// modal
type ModalMenuMode = 'add' | 'edit'
const modalMenuMode = ref<ModalMenuMode>('add')
const modalMenuShow = ref(false)
const modaMenuToggle = (mode: ModalMenuMode = 'add') => {
  modalMenuShow.value = !modalMenuShow.value
  modalMenuMode.value = mode
}

// modal
const modalDeleteShow = ref(false)
const modaDeleteToggle = () => {
  modalDeleteShow.value = !modalDeleteShow.value
}

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
        @click="modaMenuToggle('add')"
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
            <Button
              class="mr-2"
              size="xs"
              type="danger"
              @click="deleteItem(rawItem)"
            >
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
      <Modal
        :title="`${modalMenuMode === 'add' ? 'Add' : 'Edit'} Menu`"
        :show="modalMenuShow"
      >
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
      </Modal>
      <Modal title="Confirm" :show="modalDeleteShow">
        <div class="mt-2">
          <p>Are you sure want to delete this item?</p>
        </div>
        <div class="flex justify-end space-x-4 mt-4">
          <Button
            class="capitalize"
            size="sm"
            type="opposite"
            text="Cancel"
            @click="modaDeleteToggle"
          />
          <Button class="capitalize" size="sm" type="danger" text="Delete" />
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>
