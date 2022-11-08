<script lang="ts" setup>
import { Menu } from '~/types'
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
</script>

<template>
  <Card class="mb-4">
    <Table :columns="columns" :rows="rows">
      <template #row-col-action="{ rawItem }">
        <div class="flex">
          <!-- <Button class="mr-2" size="sm" @click="edit(rawItem)">
            <IconFa:pencil class="text-xs" />
          </Button> -->
          <Button class="mr-2" size="xs" type="warning" @click="edit(rawItem)">
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
</template>
