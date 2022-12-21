<script lang="ts" setup>
import { AxiosError } from 'axios'
import { useToast } from 'vue-toastification'
import { Transaction } from '~/type'
import { useLoading } from '~/stores/loading'
import { formatCurrency } from '~~/utils/curr'
import { Api } from '~~/services/api'
import Table from '~~/components/Table.vue'

// composables
const loading = useLoading()
const toast = useToast()
const api = useApi()
const { socket } = useSocket()

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

// refs
const transactionModel = ref<Transaction | undefined>()

// modal
type ModalConfirmMode = 'decline' | 'cancel' | 'finish' | 'process' | 'detail'
const modalConfirmShow = ref(false)
const modalConfirmMode = ref<ModalConfirmMode>('decline')
const modalConfirmToggle = (mode: ModalConfirmMode) => {
  modalConfirmShow.value = !modalConfirmShow.value
  modalConfirmMode.value = mode || modalConfirmMode.value
}

// funcs
const detail = (item: Transaction) => {
  console.log('detail', item)
  transactionModel.value = item
  modalConfirmMode.value = 'detail'
}
const process = (item: Transaction) => {
  console.log('process', item)
  transactionModel.value = item
  modalConfirmToggle('process')
}
const decline = (item: Transaction) => {
  console.log('decline', item)
  transactionModel.value = item
  modalConfirmToggle('decline')
}
const cancel = (item: Transaction) => {
  console.log('cancel', item)
  transactionModel.value = item
  modalConfirmToggle('cancel')
}
const finish = (item: Transaction) => {
  console.log('finish', item)
  transactionModel.value = item
  modalConfirmToggle('finish')
}
const modalConfirm = async () => {
  const mode = modalConfirmMode.value
  const item = transactionModel.value
  if (!item) return

  loading.show()
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    if (
      (
        ['process', 'cancel', 'decline', 'finish'] as ModalConfirmMode[]
      ).includes(mode)
    ) {
      let status: 'pending' | 'processing' | 'finished' | 'declined' = 'pending'
      let msg = ''

      if (mode === 'process') {
        status = 'processing'
        msg = `Transaction ${item.code} has been processed`
      } else if (mode === 'cancel') {
        status = 'pending'
        msg = `Transaction ${item.code} process has been canceled`
      } else if (mode === 'decline') {
        status = 'declined'
        msg = `Transaction ${item.code} has been declined`
      } else if (mode === 'finish') {
        status = 'finished'
        msg = `Transaction ${item.code} has been finished`
      }

      const res = await api.create(Api.Transaction.Update(item.id, { status }))
      if (res.status === 200) {
        toast.success(msg)
      }
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const msg = error.response?.data?.message || 'Something went wrong'
      toast.error(msg)
    }
  }

  modalConfirmToggle(modalConfirmMode.value)
  loading.hide()
  table1.value?.fetch()
  table2.value?.fetch()
}

const onNewOrderNotif = () => {
  table1.value?.fetch()
  table2.value?.fetch()
}

// lifecycle
onMounted(() => {
  // useLoading().show()
  // setTimeout(() => {
  //   useLoading().hide()
  // }, 1000)
  socket.value?.on('new:order', onNewOrderNotif)
})

onBeforeUnmount(() => {
  socket.value?.off('new:order', onNewOrderNotif)
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
          <TransactionDetailModal
            :show="
              transactionModel &&
              modalConfirmMode === 'detail' &&
              transactionModel.id === rawItem.id
                ? true
                : false
            "
            :transaction="transactionModel"
            @close="
              () => {
                transactionModel = undefined
              }
            "
          />
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
          <TransactionDetailModal
            :show="
              transactionModel &&
              modalConfirmMode === 'detail' &&
              transactionModel.id === rawItem.id
                ? true
                : false
            "
            :transaction="transactionModel"
            @close="
              () => {
                transactionModel = undefined
              }
            "
          />
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
            text="Back"
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
