<script lang="ts" setup>
const route = useRoute()
const slug = useState() as any
const type = useState()
const seoData = useState() as any
const { fetchPageBySlug } = await usePage()
const { fetchPostsBySlug, postBySlug } = await usePost()
const { categoryData } = await useCategory()

if (route.name === 'articles-category-slug') {
  slug.value = route.params.slug
  type.value = 'categories'
  seoData.value = await categoryData(slug.value)
} else if (route.name === 'articles-slug') {
  slug.value = route.params.slug
  type.value = 'posts'
  await fetchPostsBySlug(slug.value)
  seoData.value = postBySlug
} else {
  slug.value = route.name
  type.value = 'pages'
  seoData.value = await fetchPageBySlug(slug.value)
}
</script>
<template>
  <div>
    <SeoHead
      v-if="seoData?.seo"
      :seo="seoData.seo"
    />
    <Title v-if="!seoData?.title">
      {{ seoData.title }}
    </Title>

    <main class="text-granite-black bg-white dark:bg-gradient-bg dark:text-plantium-silver">
      <OrganismsNavbar />
      <div class="bg-lines-complete">
        <TemplateContainer>
          <slot name="container" />
        </TemplateContainer>
      </div>
    </main>
    <OrganismsFooter />
  </div>
</template>

<style scoped>
.bg-lines-complete {
  height: auto;
  background-image: url('~/assets/images/bg-complete.png');
  background-repeat: no-repeat;
  background-size: 80% 70rem;
  background-position-y: -150px;
  background-position-x: -15rem;
}
</style>
