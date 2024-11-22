import QueryString from 'qs'
import { StrapiPostParams } from '~/interface/posts.interface'

export const getAllPosts = async (pageNum: number): Promise<any> => {
  const params: StrapiPostParams = {
    populate: '*',
    sort: ['id:desc'],
    filters: {},
    pagination: { pageSize: 8, page: pageNum },
  }
  const query = QueryString.stringify(params, { encode: false })
  const url = `${useRuntimeConfig().public.strapiURL}/api/posts?${query}`
  const res = await $fetch(url)
  return res
}

export default defineEventHandler(async (event: any) => {
  const pageNum = event.context.params.pageNum
  const posts = await getAllPosts(pageNum)
  return posts
})
