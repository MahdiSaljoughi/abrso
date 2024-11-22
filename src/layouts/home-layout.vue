<script lang="ts" setup>
const seoData = useState() as any
const { fetchPageBySlug } = await usePage()
seoData.value = (await fetchPageBySlug('-')).value as any
</script>
<template>
  <div>
    <SeoHead
      v-if="seoData?.seo"
      :seo="seoData.seo"
    />

    <div class="text-granite-black bg-white dark:bg-gradient-bg dark:text-plantium-silver">
      <OrganismsNavbar />
      <slot name="home" />
    </div>
    <OrganismsFooter />
  </div>
</template>
