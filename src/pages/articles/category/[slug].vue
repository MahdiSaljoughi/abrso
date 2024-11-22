<script lang="ts" setup>
const route = useRoute() as any
const { getPostsByCategory } = await usePost()
const { postByCat } = await getPostsByCategory(route.params.slug)
</script>
<template>
  <NuxtLayout name="sub-pages">
    <template #container>
      <div class="mb-10">
        <MoleculesCategories />
      </div>
      <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-20">
          <MoleculesPostCard
            v-for="(post, index) in postByCat"
            :key="index"
            :index="index"
            :post="post"
          />
        </div>
      </section>
    </template>
  </NuxtLayout>
</template>
