export enum FilterOperations {
  EQ = '$eq',
  EQI = '$eqi', //Equal (case-insensitive)
}

export interface StrapiParams {
  sort?: string[]
  filters?: { [k in string]: unknown }
  populate?: string
  fields?: []
  pagination?: {
    pageSize: number
    page: number
  }
  publicationState?: string
  locale?: string[]
  secretToken?: string
}
