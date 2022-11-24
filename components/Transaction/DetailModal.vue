<script lang="ts" setup>
import { Transaction } from '~~/type'
import { formatCurrency } from '~~/utils/curr'

const emit = defineEmits(['close'])
const props = defineProps<{
  show: boolean
  transaction?: Transaction
}>()
const close = () => {
  emit('close', true)
}

const cols = computed(() => {
  return [
    { key: 'no', label: 'No', data: '$index' },
    { key: 'menu', label: 'Name', data: 'name' },
    { key: 'qty', label: 'Qty', data: 'pivot.quantity' },
    {
      key: 'price',
      label: 'Price',
      builder: (data: any) => formatCurrency(data.pivot.price),
    },
    {
      key: 'total',
      label: 'Total',
      builder: (data: any) => formatCurrency(data.pivot.total),
    },
  ]
})

watch(
  () => props.transaction,
  (val) => {
    if (!val) emit('close', true)
  }
)
</script>

<template>
  <Teleport to="body">
    <ClientOnly>
      <Modal title="Detail Transaction" :show="props.show" size="xl">
        <div v-if="props.transaction">
          <div class="mt-2">
            <table>
              <tr>
                <td class="font-bold pr-4">ID</td>
                <td>: {{ props.transaction.id }}</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Code</td>
                <td>: {{ props.transaction.code }}</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Name</td>
                <td>: {{ props.transaction.user_name }}</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Status</td>
                <td>: {{ props.transaction.status }}</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Total</td>
                <td>: {{ $formatCurrency(props.transaction.total) }}</td>
              </tr>
            </table>
            <div class="mt-4">
              <div class="font-bold text-xl">Menu List</div>
              <Table :columns="cols" :rows="transaction?.menus || []" />
            </div>
          </div>
          <div class="flex justify-end space-x-4 mt-4">
            <Button
              class="capitalize"
              size="sm"
              type="opposite"
              text="Back"
              @click="close"
            />
          </div>
        </div>
      </Modal>
    </ClientOnly>
  </Teleport>
</template>
