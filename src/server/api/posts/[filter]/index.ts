import QueryString from 'qs'
import { StrapiPostParams } from '~/interface/posts.interface'
import { FilterOperations } from '~/interface/strapi.interface'

export const findPostsByCategoryName = async (filters: { filter_cat_name?: string }) => {
  const params: StrapiPostParams = {
    populate: '*',
    sort: ['id:desc'],
    filters: {},
  }
  params.filters.categories = { slug: { [FilterOperations.EQ]: filters.filter_cat_name } }

  const qs = QueryString.stringify(params, { encode: false })
  const url = `${useRuntimeConfig().public.strapiURL}/api/posts?${qs}`
  const { data, meta } = (await $fetch(url)) as any
  return { data, meta }
}

export default defineEventHandler(async (event: any) => {
  const filter = event.context.params.filter
  return await findPostsByCategoryName({ filter_cat_name: filter })
})
