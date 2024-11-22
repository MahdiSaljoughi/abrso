const usePost = async () => {
  const loading = false
  const postBySlug = useState()
  const allPosts = useState()

  const fetchPostsBySlug = async (slug: string) => {
    try {
      const { previewSecret } = useRoute().query
      const { data } = await useFetch(() => `/api/post/${slug}`, {
        query: {
          publicationState:
            useRuntimeConfig().previewSECRET && previewSecret === useRuntimeConfig().previewSECRET
              ? 'preview'
              : undefined,
        },
      })
      postBySlug.value = data
    } catch (error) {
      console.error('Data not published or problem in server')
    }
  }

  const fetchAllPosts = async () => {
    try {
      const { data, pending, refresh } = await useFetch(() => `/api/posts`)
      const dataValue = data.value as any

      allPosts.value = dataValue.data.map((d: any) => d.attributes)
    } catch (error) {
      console.error('Data not published or problem in server')
    }
  }

  const fetchPostsByPageNum = async (pageNum: string | number) => {
    try {
      const { data, pending, refresh } = await useFetch(`/api/posts/pageNum/${pageNum}`)
      const dataPosts = data.value.data.map((d: any) => d.attributes)
      const meta = data.value.meta
      return { dataPosts, meta }
    } catch (error) {
      console.error('fetchPostsByPageNum')
    }
  }

  const getPostsByCategory = async (slug: string) => {
    try {
      const { data, pending, refresh } = await useFetch<any>(() => `/api/posts/${slug}`)
      const postByCat = data.value.data.map((d: any) => d.attributes)
      return { postByCat }
    } catch (error) {
      console.error('fetchPostsByPageNum')
    }
  }

  return {
    fetchPostsBySlug,
    postBySlug,
    fetchAllPosts,
    allPosts,
    fetchPostsByPageNum,
    getPostsByCategory,
  }
}
export default usePost
