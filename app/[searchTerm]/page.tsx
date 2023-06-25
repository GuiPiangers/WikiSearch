/* eslint-disable no-undef */
import getWikiResults from '@/lib/getWikiResolts'
import Item from './components/Item'

type SearchTermProps = {
  params: {
    searchTerm: string
  }
}

export async function genereteMetada({
  params: { searchTerm },
}: SearchTermProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return { title: `${displayTerm} Not Found` }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

async function SearchTerm({ params: { searchTerm } }: SearchTermProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  return (
    <main className="min-h-screentext-black mx-auto max-w-lg bg-slate-200 py-1 text-black">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  )
}

export default SearchTerm
