import QueryString from 'qs'
import { StrapiPostParams } from '~/interface/posts.interface'

export const getAllPosts = async (): Promise<any> => {
  const params: StrapiPostParams = {
    populate: '*',
    sort: ['id:desc'],
    filters: {},
  }
  const query = QueryString.stringify(params, { encode: false })

  const url = `${useRuntimeConfig().public.strapiURL}/api/posts?${query}`
  const res = await $fetch(url)
  return res
}

export default defineEventHandler(async () => {
  const posts: IPosts = await getAllPosts()
  return posts
})
