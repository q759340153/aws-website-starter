import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    'px-3 py-2 rounded-xl text-sm ' + (isActive ? 'bg-slate-900 text-white' : 'hover:bg-slate-100')

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">YourBrand</Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <button className="md:hidden p-2 rounded-xl border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass} end>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
