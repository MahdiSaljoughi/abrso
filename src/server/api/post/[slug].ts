import QueryString from 'qs'
import type { StrapiPostParams } from '~/interface/posts.interface'

export const getPostBySlug = async (filters: {
  filter_slug?: string
  publicationState?: string
  secretToken?: string
}): Promise<any> => {
  const params: StrapiPostParams = {
    populate: 'deep,4',
    publicationState: filters.publicationState ?? 'live',
    filters: { slug: filters.filter_slug },
    secretToken: filters.secretToken ?? '',
  }
  const qs = QueryString.stringify(params, { encode: false })
  const url = `${useRuntimeConfig().public.strapiURL}/api/posts?${qs}`
  // console.log(filters,url);
  const { data } = (await $fetch(url)) as any
  // console.log(data);
  return data?.length? data[0].attributes:null
}

export default defineEventHandler(async (event: any) => {
  const slug = event.context.params.slug
  const query = getQuery(event) as any

  return await getPostBySlug({
    filter_slug: slug,
    publicationState: query.publicationState,
    secretToken: query.secretToken,
  })
})
