export default defineEventHandler(async (event) => {
  try {
    const { data } = (await $fetch(`${useRuntimeConfig().public.strapiURL}/api/pages?sort[id]=asc`)) as any
    return data.map((d: any) => d.attributes)
  } catch (error) {
    console.error(error);
  }
})
