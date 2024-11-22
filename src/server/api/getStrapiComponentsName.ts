export default defineEventHandler(async (event) => {
  const res = await fetch(`${useRuntimeConfig().public.strapiURL}/api/content-type-builder/components`)
  return await res.json()
})
