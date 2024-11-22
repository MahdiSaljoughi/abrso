<script lang="ts" setup>
const { data: categories } = await useFetch('/api/categories')
</script>

<template>
  <ul class="overflow-auto md:overflow-visible flex space-x-2 space-x-reverse">
    <li class="cursor-pointer text-base py-1">
      <NuxtLink
        active-class="bg-plantium-silver text-granite-black "
        to="/articles"
        class="w-full px-2 border-plantium-silver border rounded-lg hover:bg-plantium-silver hover:text-granite-black"
      >
        همه مقالات
      </NuxtLink>
    </li>
    <li
      v-for="(cat, index) in categories"
      :key="index"
      :index="index"
      class="py-1"
    >
      <NuxtLink
        active-class="  bg-plantium-silver text-granite-black "
        :to="`/articles/category/${cat.attributes.slug}`"
        class="w-full px-2 border-plantium-silver border rounded-lg hover:bg-plantium-silver hover:text-granite-black"
      >
        {{ cat.attributes.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
