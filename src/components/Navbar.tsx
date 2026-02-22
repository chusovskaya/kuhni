import { useState, useEffect } from 'react'

const links = [
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#prices', label: 'Прайслист' },
  { href: '#contacts', label: 'Контакты' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className={`font-semibold text-sm tracking-wide uppercase transition-colors duration-300 ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
          Сборка Мебели Новороссийск
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#c8a96e] ${
                  scrolled ? 'text-[#1a1a1a]' : 'text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Меню"
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e0d8] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-[#1a1a1a] hover:text-[#c8a96e] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
