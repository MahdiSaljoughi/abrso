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
  <div>
    <NuxtLayout name="sub-pages">
      <template #container>
        <div class="w-full flex flex-col justify-center">
          <div class="flex justify-center">
            <!-- <img src="/assets/images/Component.png" alt="سوالات متداول" class="w-full md:w-1/2" > -->
            <component :is="components[1].name" :meta-data="components[1]" />
          </div>
          <div class="w-full">
            <div class="mt-16 mb-10">
              <h1 class="text-3xl md:text-4xl font-semibold">
                {{ page?.title }}
              </h1>
            </div>
            <component :is="components[0].name" :meta-data="components[0]" />
          </div>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
