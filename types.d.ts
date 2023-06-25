type Result = {
  pageid: string
  title: string
  extract: string
  thumbnail?: {
    source: string
    width: number
    height: number
  }
}

// eslint-disable-next-line no-unused-vars
type SearchResult = {
  query?: {
    pages?: Result[]
  }
}
