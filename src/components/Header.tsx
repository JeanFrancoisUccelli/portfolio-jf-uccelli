import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experiences', label: 'Expériences' },
  { href: '#skills', label: 'Compétences' },
  { href: '#education', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" aria-label="Retour en haut">
          <span className="site-header__mark">JF</span>
          <span className="site-header__name">Uccelli</span>
        </a>

        <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`site-header__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
