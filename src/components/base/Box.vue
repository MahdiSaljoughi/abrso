<script setup lang="ts">
type props = {
  paragraph: string
  image: Image
}
const runtime = defineProps<{ metaData: props }>()
</script>

<template>
  <div class="flex justify-between flex-col md:flex-row space-y-4">
    <div
      class="text-base pargraph-post-typography-style paragraph-color"
      v-html="metaData.paragraph"
    />
    <nuxt-img
      v-if="metaData.image.data"
      class="rounded-[15px] mx-auto image-response"
      :src="getStrapiMedia(metaData.image.data.attributes.url)"
      loading="lazy"
      format="webp"
      :height="`${metaData.image.data.attributes.height}`"
      :width="`${metaData.image.data.attributes.width}`"
      :alt="`${metaData.image.data.attributes.alternativeText}`"
    />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .image-response {
    max-width: 50%;
    height: 50% !important;
  }
}
</style>
