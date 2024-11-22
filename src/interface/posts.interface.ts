import { FilterOperations, StrapiParams } from './strapi.interface'

export type StrapiPostParams = StrapiParams & {
  filters: {
    categories?: { slug?: { [k in FilterOperations]?: string }; id?: { [k in FilterOperations]?: number } }
  }
}
