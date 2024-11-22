export const usePersianNum = (n: number | string) => {
  return Number(n).toLocaleString('fa-IR')
}

export const getStrapiMedia = (url: string | undefined | null) => {
  // Check if URL is a local path
  if (url) {
    if (url.startsWith('/')) {
      // Prepend Strapi address
      return `${useRuntimeConfig().public.strapiURL}${url}`
    }
    // Otherwise return full URL
    return url
  }
}

export const useComponents = (compData: any, componentNamesInStrapi: any) => {
  return compData.map((i: any) => ({
    ...i,
    name: Object.values(componentNamesInStrapi.find((x: any) => x[i.__component]))[0],
  }))
}
