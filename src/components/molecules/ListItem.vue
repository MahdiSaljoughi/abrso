<script setup lang="ts">
type props = {
  numberPerRow: number
  itemsHasNumber: boolean
  theme: string | 'card-photo'
  gridItems: {
    id: number
    title: string
    description: string
    tag: string
    image: Image
  }[]
}
const runtime = defineProps<{ metaData: props }>()
</script>

<template>
  <ul
    class="md:grid gap-x-5 mx-auto p-1"
    :class="[
      `grid-cols-${metaData.numberPerRow}`,
      metaData.numberPerRow === 4 && 'md:grid-cols-4',
      metaData.numberPerRow === 5 && 'md:grid-cols-5',
      metaData.numberPerRow === 1 ? 'w-full md:w-2/3 space-y-5' : 'overflow-auto flex flex-row gap-y-5',
    ]"
  >
    <li
      v-for="(item, index) in metaData.gridItems"
      :key="index"
      :index="index"
      class="text-granite-black dark:text-granite-black dark:bg-plantium-silver rounded-md text-center py-[6px] px-[15px] shadow-title flex-none flex items-center"
    >
      <span class="mx-auto">{{ item.title }}</span>
    </li>
  </ul>
</template>

<style scoped>
.shadow-title {
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.2);
}
</style>
