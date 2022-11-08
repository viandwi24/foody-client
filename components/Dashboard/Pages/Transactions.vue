<script lang="ts" setup>
import { Menu } from '~/types'
import { useLoading } from '~/stores/loading'
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
  { id: 2, code: ' 78asd0m28w12u12sef', name: 'test2', totalPrice: 10000 },
])

// funcs
const edit = (item: Menu) => {
  console.log('edit', item)
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
  <Card class="mb-4">
    <Table :columns="columns" :rows="rows">
      <template #row-col-action="{ rawItem }">
        <div class="flex">
          <Button
            class="mr-2 flex items-center justify-center"
            size="xs"
            type="secondary"
            @click="edit(rawItem)"
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
</template>
