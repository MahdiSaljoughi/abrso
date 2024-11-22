const useGlobalData = async () => {
  const loading = false
  const data = useState()
  const globalData = async () => {
    try {
      const { data: fetchData, error, execute, pending, refresh } = await useFetch<any>(`/api/getGlobalData`)
      if (error.value) {
        // 500: draft || problem in server
        // null: publish
        throw createError({ message: 'Data not published or problem in server' })
      }
      return (data.value = fetchData)
    } catch (error) {
      console.log(error)
    }
  }

  await globalData()

  return {
    globalData,
    data,
  }
}
export default useGlobalData
