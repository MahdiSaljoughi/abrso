export default defineEventHandler(async (event) => {
  const res = await fetch(`${useRuntimeConfig().public.strapiURL}/api/categories`)
  const data: ICategories = await res.json()
  return data.data
})
