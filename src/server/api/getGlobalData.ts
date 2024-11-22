export default defineEventHandler(async (event) => {
  const res = await fetch(`${useRuntimeConfig().public.strapiURL}/api/global?populate=deep,4`)
  const jsonData = await res.json()
  return jsonData.data.attributes
})
