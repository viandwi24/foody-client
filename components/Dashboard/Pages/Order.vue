<script lang="ts" setup>
import { Menu } from '~/types'
import { useLoading } from '~/stores/loading'

// tables1
const columns = ref([
  { key: 'no', label: 'No', data: '$index' },
  { key: 'code', label: 'Transaction Code', data: 'code' },
  { key: 'name', label: 'Name', data: 'name' },
  { key: 'code', label: 'Total Price', data: 'totalPrice' },
  {
    key: 'action',
    label: '...',
  },
])
const rows = ref([
  { id: 1, code: ' 78asd0m28w12u12sef', name: 'test', totalPrice: 10000 },
  { id: 2, code: ' 7anwey78w981273y17', name: 'test2', totalPrice: 10000 },
])

// tables2
const columns2 = ref([
  { key: 'no', label: 'No', data: '$index' },
  { key: 'code', label: 'Transaction Code', data: 'code' },
  { key: 'name', label: 'Name', data: 'name' },
  { key: 'code', label: 'Total Price', data: 'totalPrice' },
  { key: 'status', label: 'Status', data: 'status' },
  {
    key: 'action',
    label: '...',
  },
])
const rows2 = ref([
  {
    id: 1,
    code: ' awn7asd7912e91827saf',
    name: 'test',
    totalPrice: 10000,
    status: 'processing',
  },
  {
    id: 2,
    code: ' wer7wernyawen123sy7',
    name: 'test2',
    totalPrice: 10000,
    status: 'processing',
  },
])

// modal
type ModalConfirmMode = 'decline' | 'cancel' | 'finish' | 'process'
const modalConfirmShow = ref(false)
const modalConfirmMode = ref<ModalConfirmMode>('decline')
const modalConfirmToggle = (mode: ModalConfirmMode) => {
  modalConfirmShow.value = !modalConfirmShow.value
  modalConfirmMode.value = mode || modalConfirmMode.value
}

// funcs
const detail = (item: Menu) => {
  console.log('detail', item)
}
const decline = (item: Menu) => {
  console.log('decline', item)
  modalConfirmToggle('decline')
}
const cancel = (item: Menu) => {
  console.log('cancel', item)
  modalConfirmToggle('cancel')
}
const process = (item: Menu) => {
  console.log('process', item)
  modalConfirmToggle('process')
}
const finish = (item: Menu) => {
  console.log('finish', item)
  modalConfirmToggle('finish')
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
    <Card class="mb-4">
      <CardContent class="pb-2">
        <CardTitle class="capitalize" text="New Order" />
      </CardContent>
      <Table :columns="columns" :rows="rows">
        <template #row-col-action="{ rawItem }">
          <div class="flex-1 flex">
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              type="secondary"
              @click="detail(rawItem)"
            >
              <IconFa:list class="text-xs" />
              <span class="ml-2">See Detail</span>
            </Button>
            <!-- <Button class="mr-2" size="xs" type="warning" @click="edit(rawItem)">
            <IconFa:pencil class="text-xs" />
          </Button> -->
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              @click="process(rawItem)"
            >
              <IconFa:check class="text-xs" />
              <span class="ml-2">Process</span>
            </Button>
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              type="danger"
              @click="decline(rawItem)"
            >
              <IconFa:times class="text-xs" />
              <span class="ml-2">Decline</span>
            </Button>
          </div>
        </template>
      </Table>
    </Card>
    <Card class="mb-4">
      <CardContent class="pb-2">
        <CardTitle class="capitalize" text="Processing Order" />
      </CardContent>
      <Table :columns="columns2" :rows="rows2">
        <template #row-col-action="{ rawItem }">
          <div class="flex-1 flex">
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              type="secondary"
              @click="detail(rawItem)"
            >
              <IconFa:list class="text-xs" />
              <span class="ml-2">See Detail</span>
            </Button>
            <!-- <Button class="mr-2" size="xs" type="warning" @click="edit(rawItem)">
            <IconFa:pencil class="text-xs" />
          </Button> -->
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              @click="finish(rawItem)"
            >
              <IconFa:check class="text-xs" />
              <span class="ml-2">Finish</span>
            </Button>
            <Button
              class="mr-2 flex items-center justify-center"
              size="xs"
              type="danger"
              @click="cancel(rawItem)"
            >
              <IconFa:times class="text-xs" />
              <span class="ml-2">Cancel</span>
            </Button>
          </div>
        </template>
      </Table>
    </Card>
    <ClientOnly>
      <Modal
        title="Confirm"
        :show="modalConfirmShow"
        @close="modalConfirmToggle(modalConfirmMode)"
      >
        <div class="mt-2">
          <p>
            Are you sure want to
            <span v-if="modalConfirmMode === 'decline'">Decline</span>
            <span v-else-if="modalConfirmMode === 'cancel'"
              >Cancel Processing</span
            >
            <span v-else-if="modalConfirmMode === 'finish'"
              >Finish Processing</span
            >
            <span v-else-if="modalConfirmMode === 'process'">Process</span>
            this order ?
          </p>
        </div>
        <div class="flex justify-end space-x-4 mt-4">
          <Button
            class="capitalize"
            size="sm"
            type="opposite"
            text="Cancel"
            @click="modalConfirmToggle(modalConfirmMode)"
          />
          <template v-if="['decline', 'cancel'].includes(modalConfirmMode)">
            <Button
              class="capitalize"
              size="sm"
              type="danger"
              :text="modalConfirmMode"
            />
          </template>
          <template v-else>
            <Button
              class="capitalize"
              size="sm"
              type="primary"
              :text="modalConfirmMode"
            />
          </template>
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>
