<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { AxiosError } from 'axios'
import { Menu } from '~~/type'
import { useLoading } from '~/stores/loading'
import { Api } from '~~/services/api'
import { formatCurrency } from '~~/utils/curr'
import Table from '~~/components/Table.vue'

// composables
const loading = useLoading()
const api = useApi()
const toast = useToast()

// tables
const table = ref<InstanceType<typeof Table> | null>(null)
const apiGetMenu = Api.Menu.All()
const columns = ref([
  // { key: 'no', label: 'No', data: '$index' },
  { key: 'image', label: 'image' },
  { key: 'menu', label: 'Menu' },
  {
    key: 'price',
    label: 'Price',
    builder: (data: any) => formatCurrency(data.price || ''),
  },
  {
    key: 'action',
    label: '...',
  },
])

// funcs
const newItem = () => {
  menuModel.value = {
    id: 0,
    name: '',
    description: '',
    image: '',
    price: 0,
  }
  modaMenuToggle('add')
}
const edit = (item: Menu) => {
  console.log('edit', item)
  menuModel.value = {
    id: item.id,
    name: item.name,
    description: item.description,
    image: item.image,
    price: item.price,
  }
  modaMenuToggle('edit')
}
const confirmDelete = (item: Menu) => {
  console.log('delete', item)
  menuModel.value = {
    id: item.id,
    name: item.name,
    description: item.description,
    image: item.image,
    price: item.price,
  }
  modalDeleteToggle()
}
const saveItem = async () => {
  loading.show()

  try {
    if (modalMenuMode.value === 'add') {
      const res = await api.create(Api.Menu.Create(menuModel.value))
      if (res.status === 201) {
        toast.success('Menu created successfully')
        table.value?.fetch()
      }
    } else if (modalMenuMode.value === 'edit') {
      const res = await api.create(
        Api.Menu.Update(menuModel.value.id, menuModel.value)
      )
      if (res.status === 200) {
        toast.success(`Menu ${menuModel.value.name} updated successfully`)
        table.value?.fetch()
      }
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const cause = error.response?.data?.message || 'Unknown error'
      toast.error(`cant save data : ${cause}`)
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))
  modaMenuToggle()
  loading.hide()
}
const deleteItem = async () => {
  loading.show()
  try {
    const res = await api.create(Api.Menu.Delete(menuModel.value.id))
    if (res.status === 200) {
      toast.success(`Menu ${menuModel.value.name} deleted`)
      table.value?.fetch()
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const cause = error.response?.data?.message || 'Unknown error'
      toast.error(`cant save data : ${cause}`)
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000))
  modalDeleteToggle()
  loading.hide()
}

// modal
type ModalMenuMode = 'add' | 'edit'
const modalMenuMode = ref<ModalMenuMode>('add')
const modalMenuShow = ref(false)
const menuModel = ref<Menu>({
  id: 0,
  name: '',
  description: '',
  image: '',
  price: 0,
})
const modaMenuToggle = (mode: ModalMenuMode = 'add') => {
  modalMenuShow.value = !modalMenuShow.value
  modalMenuMode.value = mode
}

// modal
const modalDeleteShow = ref(false)
const modalDeleteToggle = () => {
  modalDeleteShow.value = !modalDeleteShow.value
}

// lifecycle
onMounted(() => {
  // console.log('mounted', table.value)
  // loading.show()
  // setTimeout(() => {
  //   loading.hide()
  // }, 1000)
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
        @click="newItem"
      />
    </div>
    <Card class="mb-4">
      <Table ref="table" :columns="columns" :api="apiGetMenu">
        <template #row-col-menu="{ rawItem }">
          <div class="flex flex-col space-y-2">
            <div>{{ rawItem.name }}</div>
            <div class="text-xs text-gray-500 truncate">
              {{ rawItem.description }}
            </div>
          </div>
        </template>
        <template #row-col-image="{ rawItem }">
          <img :src="rawItem.image" class="w-20 h-20" />
        </template>
        <template #row-col-action="{ rawItem }">
          <div class="flex">
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
              @click="confirmDelete(rawItem)"
            >
              <IconFa:trash class="text-xs" />
            </Button>
          </div>
        </template>
      </Table>
    </Card>
    <ClientOnly>
      <Modal
        :title="`${modalMenuMode === 'add' ? 'Add' : 'Edit'} Menu`"
        :show="modalMenuShow"
      >
        <div class="flex flex-col space-y-4 mt-2">
          <div class="flex flex-col space-y-2">
            <label>Name</label>
            <FormTextInput v-model="menuModel.name" />
          </div>
          <div class="flex flex-col space-y-2">
            <label>Description</label>
            <FormTextAreaInput v-model="menuModel.description" />
          </div>
          <div class="flex flex-col space-y-2">
            <label>Price</label>
            <FormTextInput v-model="menuModel.price" type="number">
              <template #prefix-disabled>
                <span class="flex-1 px-4 py-2">{{
                  $getCurrentCurrency().symbol
                }}</span>
              </template>
            </FormTextInput>
          </div>
          <div class="flex flex-col space-y-2">
            <label>Image</label>
            <FormTextInput v-model="menuModel.image" />
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
            @click="saveItem"
          />
        </div>
      </Modal>
      <Modal title="Confirm" :show="modalDeleteShow">
        <div class="mt-2">
          <p>Are you sure want to delete this menu ({{ menuModel.name }})?</p>
        </div>
        <div class="flex justify-end space-x-4 mt-4">
          <Button
            class="capitalize"
            size="sm"
            type="opposite"
            text="Cancel"
            @click="modalDeleteToggle"
          />
          <Button
            class="capitalize"
            size="sm"
            type="danger"
            text="Delete"
            @click="deleteItem"
          />
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>
