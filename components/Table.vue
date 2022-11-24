<script lang="ts" setup>
import { ApiContract } from '~~/services/api'

export interface Column {
  key: string
  label: string
  data?: string
  builder?: (row: any) => string
  class?: string
}
const props = defineProps({
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  rows: {
    type: Array,
    default: () => [],
  },
  api: {
    type: Object as () => ApiContract,
    required: false,
  },
})
// const emit = defineEmits(['update:rows'])
const rowsD = ref(props.rows)
// fetchs apis
const ap = useApi()
const loading = ref(false)
const fetch = async () => {
  if (!props.api) return
  loading.value = true

  try {
    const res = await ap.create(props.api)
    if (res.status === 200) {
      // if (res.data && res.data instanceof Array) {
      //   rows.value = res.data.data
      // }
      // console.log('res', res.data, rows)
      rowsD.value = res.data.data
    }
  } catch (error) {}

  await new Promise((resolve) => setTimeout(resolve, 1000))

  loading.value = false
}

// funcs
const getObjNotation = (obj: any, path: string) => {
  try {
    const pathArr = path.split('.')
    return pathArr.reduce((acc, curr) => acc[curr], obj)
  } catch (err) {
    return undefined
  }
}
const getFormattedData = (index: number, row: any, col: Column) => {
  if (col.data && typeof col.data === 'string') {
    if (col.data === '$index') {
      return index + 1
    } else {
      return getObjNotation(row, col.data) || '-'
    }
  } else if (col.builder) {
    return col.builder(row)
  }
  return '-'
}

// lifecycle
onMounted(() => {
  if (props.api) fetch()
})
watch(
  () => props.api,
  () => {
    fetch()
  }
)

// defines
defineExpose({
  fetch,
})
</script>

<template>
  <div class="flex">
    <table class="border-collapse table flex-1">
      <thead
        class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-slate-800"
      >
        <tr>
          <th
            v-for="item in props.columns"
            :key="item.key"
            class="px-6 py-4 whitespace-nowrap"
          >
            <div class="font-semibold text-left">{{ item.label }}</div>
          </th>
        </tr>
      </thead>
      <!-- loading -->
      <tbody
        v-if="loading"
        class="text-sm divide-y divide-gray-100 dark:divide-slate-700"
      >
        <tr>
          <td colspan="100%" class="p-2 whitespace-nowrap">
            <div class="flex justify-center items-center space-x-2">
              <IconEosIcons:loading class="text-primary" />
              <div>Loading data...</div>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody
        v-else-if="!loading && rowsD.length !== 0"
        class="text-sm divide-y divide-gray-100 dark:divide-slate-700"
      >
        <tr v-for="(row, rowIndex) in rowsD" :key="rowIndex">
          <td
            v-for="(col, colIndex) in props.columns"
            :key="colIndex"
            class="p-2 whitespace-nowrap"
            :class="`${col.class} break-all`"
          >
            <slot
              :name="`row-col-${col.key}`"
              :raw-item="row"
              :col="col"
              :item="getFormattedData(rowIndex, row, col)"
            >
              {{ getFormattedData(rowIndex, row, col) }}
            </slot>
          </td>
        </tr>
      </tbody>
      <tbody
        v-if="!loading && rowsD.length === 0"
        class="text-sm divide-y divide-gray-100 dark:divide-slate-700"
      >
        <tr>
          <td colspan="100%" class="p-2 whitespace-nowrap">
            <div class="flex justify-center">No data found</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
