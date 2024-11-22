<script lang="ts" setup>
const route = useRoute()
const pageNum = route.query?.page ? Number(route.query?.page) : 1
const { fetchPostsByPageNum } = await usePost()
const { dataPosts, meta } = await fetchPostsByPageNum(pageNum)
</script>
<template>
  <NuxtLayout name="sub-pages">
    <template #container>
      <div class="mb-10">
        <MoleculesCategories />
      </div>
      <!-- all posts -->
      <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-20">
          <MoleculesPostCard
            v-for="(post, index) in dataPosts"
            :key="index"
            :index="index"
            :post="post"
          />
        </div>
        <MoleculesPagination :pagination="meta.pagination" />
      </section>
    </template>
  </NuxtLayout>
</template>
