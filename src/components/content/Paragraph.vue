<script setup lang="ts">
type props = {
  paragraph: string
}
const runtime = defineProps<{ metaData: props }>()
</script>

<template>
  <div
    class="text-base pargraph-post-typography-style"
    v-html="metaData.paragraph"
  />
</template>

<style>
.pargraph-post-typography-style {
  line-height: 36px;
}
</style>
