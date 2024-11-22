export default defineEventHandler(async (event: any) => {
  const slug = event.context.params.slug
  const { data, error } = (await $fetch(
    `${useRuntimeConfig().public.strapiURL}/api/categories?[populate]=*&filters[slug][$eq]=` + slug,
  )) as any
  return data
})
