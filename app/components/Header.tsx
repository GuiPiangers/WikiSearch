import Link from 'next/link'
import Search from './Search'

function Header() {
  return (
    <header className="sticky top-0 flex flex-col items-center justify-between gap-2 bg-slate-600 px-4 py-2 md:flex-row">
      <h1 className="grid place-content-center text-3xl font-bold text-white">
        <Link href="/">WikiRocked!</Link>
      </h1>
      <Search />
    </header>
  )
}

export default Header
