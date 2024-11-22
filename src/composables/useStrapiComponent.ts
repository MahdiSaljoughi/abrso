import pkg from 'case'
const { pascal } = pkg
const useStrapiComponent = () => {
  const strapiComponents = useState()

  const getAllStrapiComponents = async () => {
    const { data, pending, refresh } = await useFetch(() => `/api/getStrapiComponentsName`)
    const componenets = data.value.data.map((i: any) => ({ [i.uid]: pascal(i.uid) }))
    strapiComponents.value = componenets
  }

  return {
    getAllStrapiComponents,
    strapiComponents,
  }
}

export default useStrapiComponent
