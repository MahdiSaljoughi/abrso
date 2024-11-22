const useCategory = async () => {
  const categoryData = async (slug: string) => {
    try {
      const { data, pending, refresh } = await useFetch<any>(() => `/api/categories/${slug}`)
      return data.value[0].attributes
    } catch (error) {
      console.log(error)
    }
  }
  return {
    categoryData,
  }
}
export default useCategory
