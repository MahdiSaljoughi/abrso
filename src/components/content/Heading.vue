<script setup lang="ts">
type props = {
  title: string
  tag: string
  itemNumber?: number
}

const runtime = defineProps<{ metaData: props }>()
</script>

<template>
  <component
    :is="metaData.tag"
    class="text-sky-blue text-xl font-semibold text-teal-blue"
  >
    <span
      v-if="metaData.itemNumber"
      class="ml-1"
    >{{ metaData.itemNumber.toLocaleString('fa-IR') }}-</span>
    <span> {{ metaData.title }}</span>
  </component>
</template>

<style scoped></style>
