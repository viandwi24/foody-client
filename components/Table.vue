<script lang="ts" setup>
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
})

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
</script>

<template>
  <table class="border-collapse table-auto w-full">
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
    <tbody class="text-sm divide-y divide-gray-100 dark:divide-slate-700">
      <tr v-for="(row, rowIndex) in props.rows" :key="rowIndex">
        <td
          v-for="(col, colIndex) in props.columns"
          :key="colIndex"
          class="p-2 whitespace-nowrap"
          :class="`${col.class}`"
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
  </table>
</template>
