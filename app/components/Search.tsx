'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

function Search() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center space-x-2 md:justify-between"
    >
      <input
        className="rounded-md px-2 py-1 text-slate-900"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <button className="rounded-md bg-slate-300 p-2">
        <FiSearch size={16} />
      </button>
    </form>
  )
}

export default Search
