<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { AxiosError } from 'axios'
import { Menu, Transaction } from '~~/type'
import { useLoading } from '~/stores/loading'
import { Api } from '~~/services/api'
import { formatCurrency } from '~~/utils/curr'
import { Table } from '~~/.nuxt/components'

// composables
const loading = useLoading()
const api = useApi()
const toast = useToast()

// refs
const transactionModel = ref<Transaction | undefined>()

// tables1
const table1 = ref<InstanceType<typeof Table> | null>(null)
const api1 = Api.Transaction.All({ filter: { status: 'pending' } })
const columns = ref([
  { key: 'no', label: 'No', data: '$index' },
  { key: 'code', label: 'Transaction Code', data: 'code' },
  { key: 'name', label: 'Name', data: 'user_name' },
  {
    key: 'total',
    label: 'Total',
    builder: (data: any) => formatCurrency(data.total || ''),
  },
  {
    key: 'action',
    label: '...',
  },
])

// tables2
const table2 = ref<InstanceType<typeof Table> | null>(null)
const api2 = Api.Transaction.All({ filter: { status: 'processing' } })
const columns2 = ref([
  { key: 'no', label: 'No', data: '$index' },
  { key: 'code', label: 'Transaction Code', data: 'code' },
  { key: 'name', label: 'Name', data: 'user_name' },
  {
    key: 'total',
    label: 'Total',
    builder: (data: any) => formatCurrency(data.total || ''),
  },
  { key: 'status', label: 'Status', data: 'status' },
  {
    key: 'action',
    label: '...',
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
const process = (item: Menu) => {
  console.log('process', item)
  modalConfirmToggle('process')
}
const decline = (item: Menu) => {
  console.log('decline', item)
  modalConfirmToggle('decline')
}
const cancel = (item: Menu) => {
  console.log('cancel', item)
  modalConfirmToggle('cancel')
}
const finish = (item: Menu) => {
  console.log('finish', item)
  modalConfirmToggle('finish')
}
const modalConfirm = async () => {
  const mode = modalConfirmMode.value
  const item = transactionModel.value
  if (!item) return

  loading.show()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (mode === 'process') {
    // try {
    //   const res = await api.create(
    //     Api.Transaction.Update(item.id, { status: 'processing' })
    //   )
    //   if (res.status === 200) {
    //     table1.value?.fetch()
    //     table2.value?.fetch()
    //     toast.success(`Transaction ${item.code} has been processed`)
    //   }
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     const msg = error.response?.data?.message || 'Something went wrong'
    //     toast.error(msg)
    //   }
    // }
  }

  loading.hide()
}

// lifecycle
onMounted(() => {
  loading.show()
  setTimeout(() => {
    loading.hide()
  }, 1000)
})
</script>

<template>
  <div>
    <Card class="mb-4">
      <CardContent class="pb-2">
        <CardTitle class="capitalize" text="New Order" />
      </CardContent>
      <Table ref="table1" :columns="columns" :api="api1">
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
      <Table ref="table2" :columns="columns2" :api="api2">
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
              @click="modalConfirm"
            />
          </template>
          <template v-else>
            <Button
              class="capitalize"
              size="sm"
              type="primary"
              :text="modalConfirmMode"
              @click="modalConfirm"
            />
          </template>
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>
