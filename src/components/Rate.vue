<template>
  <div class="flex items-center gap-x-2 mb-4 mt-2">
    <UIcon
      v-for="i in 5"
      :key="i"
      name="i-heroicons-star-solid"
      class="dark:text-abr-50 size-8"
      :class="{ '!text-yellow-400': i - 1 < rate }"
      @click="handle(i)"
    />
  </div>
</template>

<script setup lang="ts">
const rate = defineModel<number>({ default: 0 })

const handle = (i: number) => {
  rate.value = i
}
</script>

<style scoped></style>
