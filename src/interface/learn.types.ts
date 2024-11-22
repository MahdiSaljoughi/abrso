export interface LearnContentBanner {
  src?: string
  alt?: string
  iframe?: string
}

export interface LearnStep {
  title: string
  description?: string
  src?: string
  alt?: string
}

export interface LearnPageContent {
  title: string
  path?: string
  body: {
    header?: string
    footer?: string
    banner?: LearnContentBanner
    steps?: LearnStep[]
    isStepNumric?: boolean
  }
}

export interface LearnPage {
  title: string
  path: string
  contents: LearnPageContent[]
}