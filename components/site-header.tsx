'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Inicio', href: '#top' },
  { label: 'El Palacete', href: '#historia' },
  { label: 'Chambres', href: '#habitaciones' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Gastronomía', href: '#gastronomia' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        solid
          ? 'bg-primary text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.08)]'
          : 'bg-transparent text-primary-foreground',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="transition-opacity hover:opacity-80">
          <Logo />
          <span className="sr-only">El Palacete, inicio</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-light uppercase tracking-[0.22em] text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden items-center gap-2 text-[0.7rem] font-light uppercase tracking-[0.2em] text-primary-foreground/85 transition-colors hover:text-accent md:flex"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
            Español
          </button>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-primary-foreground/10 bg-primary px-5 pb-8 pt-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-primary-foreground/10 py-4 font-serif text-2xl text-primary-foreground/90 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
