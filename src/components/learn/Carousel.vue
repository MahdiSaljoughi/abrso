<template>
  <UCarousel
    ref="carouselRef"
    dir="ltr"
    :items="items.filter((i) => Boolean(i.src))"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
    }"
    arrows
    class="w-72 md:w-80 relative h-[500px] md:h-[600px]"
  >
    <template #default="{ item }">
      <div class="mx-auto">
        <NuxtImg :src="item.src" class="w-96" :alt="item.alt" />
      </div>
    </template>
    <template #prev="{ onClick, disabled }">
      <div
        :disabled="disabled"
        @click="onClick"
        class="absolute top-[50%] -left-4 sm:-left-8 cursor-pointer flex justify-center items-center"
        :class="carouselRef?.page === 1 ? 'hidden' : ''"
      >
        <UIcon name="i-heroicons-chevron-left-solid" class="size-6" />
      </div>
    </template>

    <template #next="{ onClick, disabled }">
      <div
        :disabled="disabled"
        @click="onClick"
        class="absolute top-[50%] -right-2 sm:-right-6 cursor-pointer flex justify-center items-center"
        :class="carouselRef?.page === carouselRef?.pages ? 'hidden' : ''"
      >
        <UIcon name="i-heroicons-chevron-right-solid" class="size-6" />
      </div>
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
const props = defineProps<{ items: { src?: string; alt?: string }[] }>()
const carouselRef = defineModel<{ page: number; select: (n: number) => void }>('carouselRef')
</script>
