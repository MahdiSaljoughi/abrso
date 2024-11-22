export const getPageByRoute = async (slug: string) => {
  try {
    const { data } = (await $fetch(
      `${useRuntimeConfig().public.strapiURL}/api/pages?[populate]=deep,4&filters[slug][$eq]=` + slug,
    )) as any
    return data[0].attributes
  } catch (error) {
    console.error('Data not published or problem in server')
  }
}

export default defineEventHandler(async (event: any) => {
  const pageData = await getPageByRoute(event.context.params.slug)
  return pageData
})
