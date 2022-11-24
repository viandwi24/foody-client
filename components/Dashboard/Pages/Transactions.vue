<script lang="ts" setup>
import { Transaction } from '~~/type'
import { useLoading } from '~/stores/loading'
import { Api } from '~~/services/api'
import { formatCurrency } from '~~/utils/curr'

// tables1
const filter = reactive({ status: 'finished' })
const api = computed(() => {
  return Api.Transaction.All({ filter: { status: filter.status } })
})
watch(filter, () => {
  console.log('filter', filter)
})
watch(api, () => {
  console.log('api', api)
})
const columns = ref([
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

// funcs
const transactionModel = ref<Transaction | undefined>()
const detail = (item: Transaction) => {
  console.log('edit', item)
  transactionModel.value = item
}

// lifecycle
onMounted(() => {
  // useLoading().show()
  // setTimeout(() => {
  //   useLoading().hide()
  // }, 1000)
})
</script>

<template>
  <div>
    <div class="flex justify-end mb-4 space-x-4">
      <div class="flex space-x-4 items-center">
        <div>FIlter Status :</div>
        <select
          v-model="filter.status"
          class="px-2 py-1 border bg-slate-800 text-white rounded"
        >
          <option value="finished">Finished</option>
          <option value="declined">Declined</option>
        </select>
      </div>
    </div>
    <Card class="mb-4">
      <Table v-model:api="api" :columns="columns">
        <template #row-col-action="{ rawItem }">
          <TransactionDetailModal
            :show="
              transactionModel && transactionModel.id === rawItem.id
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
          <div class="flex">
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
            </Button>
            <Button class="mr-2" size="xs" type="danger" @click="edit(rawItem)">
              <IconFa:trash class="text-xs" />
            </Button> -->
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
  </div>
</template>
