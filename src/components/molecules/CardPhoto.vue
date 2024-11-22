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
    class="text-midnight-blue grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-y-8 gap-x-8 md:gap-x-0 overflow-auto md mx-auto"
    :class="`md:w-[756px]`"
  >
    <li
      v-for="(item, index) in metaData.gridItems"
      :key="index"
      :index="index"
      class="flex flex-col items-center space-y-2 bg-silver-sand text-midnight-blue rounded-lg relative w-44"
    >
      <div class="space-y-3 flex flex-col items-center border-bottom-item py-3 px-6">
        <nuxt-img
          v-if="item.image.data"
          class="rounded-lg w-full h-20 object-cover"
          :src="getStrapiMedia(item.image.data.attributes.url)"
          loading="lazy"
          :height="`${item.image.data.attributes.height}`"
          :width="`${item.image.data.attributes.width}`"
          :alt="`${item.image.data.attributes.alternativeText}`"
          format="webp"
        />
        <span class="">{{ item.title }}</span>
        <span class="text-center">{{ item.description }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.border-bottom-item::after {
  border-bottom: 7px solid;
  bottom: 0;
  width: 70%;
  content: '';
  position: absolute;
}
</style>
