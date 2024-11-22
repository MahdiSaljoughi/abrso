interface IHeader {
  data: {
    id: number
    attributes: {
      slogan: string
      shortDescription: string
      longDescription: string
    }
  }
}

type Post = {
  header
  blocks
  postTemplate
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
    canonicalURL: string
    metaSocial: any
    metaImage: Image
    structuredData: string
  }
  seoTitle: string
  pageZone: any
  title: string
  description: string
  shortDescription?: string
  createdAt: any | Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  previewImage: Image
  horizentalImage: Image
  categories: ICategories
  trend: boolean
  authors: ICategories
  createdBy: {
    data: {
      attributes: {
        firstname: string
        lastname: string
        username: string
      }
    }
  }
}
interface IPost {
  data: {
    id: number
    attributes: Post
  }
}

interface IPosts {
  data: {
    id: number
    attributes: Post
  }[]
  meta: Meta
}

type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
  pageSize: number
}

type Meta = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
interface ICategories {
  data: {
    id: number
    attributes: {
      name: string
      title: string
      slug: string
    }
  }[]
}

interface IPdf {
  data: {
    attributes: {
      mainTitle: string
      pdf: {
        id: number
        pdfTitle: string
        pdf: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }[]
    }
  }
}

type Image = {
  data: {
    id: number
    attributes: {
      url: string
      alternativeText
      height
      width
    }
  }
}
