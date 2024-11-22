<script lang="ts" setup>
import { formatDistance } from 'date-fns-jalali'
const runtime = defineProps<{ post: Post }>()
</script>
<template>
  <NuxtLink
    :to="`/articles/${post.slug}`"
    class="card dark:bg-blackPallete-800 bg-white rounded-2xl shadow-blog-card flex flex-col"
  >
    <div class="card__img relative h-[220px]">
      <nuxt-img
        :src="getStrapiMedia(post?.previewImage.data.attributes?.url)"
        :alt="post?.previewImage.data.attributes.alternativeText"
        height="220"
        class="rounded-t-2xl w-full object-cover h-[220px]"
        sizes="sm:100vw md:50vw lg:400px"
        format="webp"
      />
      <div class="absolute top-3 left-3 space-y-1">
        <p
          v-for="cat in post?.categories.data"
          :key="cat?.id"
          class="w-auto border px-2 text-plantium-silver bg-granite-black font-semibold rounded-md text-[12px]"
        >
          {{ cat.attributes.title }}
        </p>
      </div>
    </div>

    <div
      class="card__content px-3 pt-5 space-y-2 flex flex-col h-full justify-items-stretch items-stretch justify-start"
    >
      <div class="card__header">
        <h5 class="text-xl font-bold">
          {{ post?.title }}
        </h5>
      </div>
      <div class="card__body">
        <p class="text-sm font-light leading-6">
          {{ post?.shortDescription }}
        </p>
      </div>
    </div>
    <div class="card__footer">
      <div class="flex justify-between px-3 pb-5 pt-3">
        <div class="author">
          <p
            v-for="author in post?.authors.data"
            :key="author.id"
            class="text-[10px] font-medium"
          >
            {{ author.attributes.name }}
          </p>
        </div>
        <p class="text-[10px] font-light day-distance">
          {{ formatDistance(new Date(post?.createdAt), new Date(), { addSuffix: true }) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
