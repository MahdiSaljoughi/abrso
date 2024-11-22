<script setup lang="ts">
const route = useRoute() as any
///
const { strapiComponents, getAllStrapiComponents } = useStrapiComponent()
await getAllStrapiComponents()
///
const { fetchPageBySlug } = await usePage()
const page = (await fetchPageBySlug(route.name)).value as any

//page blocks
const componentsPage = page.blocks
const components = useComponents(componentsPage, strapiComponents.value)
</script>

<template>
  <NuxtLayout name="sub-pages">
    <template #container>
      <div class="border-gradient-gray w-full mx-auto md:w-96">
        <div class="space-y-7">
          <component
            :is="comp.name"
            v-for="comp in components"
            :key="comp"
            :meta-data="comp"
          />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
