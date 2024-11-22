<script setup lang="ts">
type props = {
  id: number
  image: Image
  responsiveImage?: Image
  isRounded: boolean
  align: string
}
const runtime = defineProps<{ metaData: props; header: boolean }>()
const responsiveImage = runtime.metaData.responsiveImage?.data
  ? runtime.metaData.responsiveImage
  : runtime.metaData.image
</script>

<template>
  <div>
    <nuxt-img
      v-if="metaData.image.data"
      :class="[
        metaData.isRounded && 'rounded-[15px]',
        header && 'w-full h-[458px] object-cover',
        metaData.align === 'center' && 'mx-auto',
      ]"
      class="hidden sm:block"
      :src="getStrapiMedia(metaData.image.data.attributes.url)"
      loading="lazy"
      :height="`${metaData.image.data.attributes.height}`"
      :width="`${metaData.image.data.attributes.width}`"
      :alt="`${metaData.image.data.attributes.alternativeText}`"
      format="webp"
    />

    <nuxt-img
      v-if="responsiveImage.data"
      :class="[
        metaData.isRounded && 'rounded-[15px]',
        header && 'w-full min-h-[300px] h-[300px] object-cover',
      ]"
      class="sm:hidden"
      :src="getStrapiMedia(responsiveImage.data.attributes.url)"
      loading="lazy"
      :height="`${responsiveImage.data.attributes.height}`"
      :width="`${responsiveImage.data.attributes.width}`"
      :alt="`${responsiveImage.data.attributes.alternativeText}`"
      format="webp"
    />
  </div>
</template>

<style scoped></style>
