import { Logo } from '@/components/logo'

const COLS = [
  {
    title: 'Explorar',
    links: [
      { label: 'Habitaciones', href: '#habitaciones' },
      { label: 'Gastronomía', href: '#espacios' },
      { label: 'Experiencias', href: '#experiencias' },
      { label: 'Ofertas', href: '#ofertas' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '342 412 3456', href: 'tel:+543424123456' },
      { label: 'elpalacetesantafe@gmail.com', href: 'mailto:elpalacetesantafe@gmail.com' },
      { label: '@elpalacetesantafe', href: 'https://www.instagram.com/palacetesantafe/hl=es' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-pretty text-sm font-light leading-relaxed text-primary-foreground/70">
              Hotel boutique en Santa Fe. Un antiguo cine europeo transformado en
              una experiencia de hospitalidad entre tertulias.
            </p>
            <a
              href="#reservar"
              className="mt-8 inline-block border border-accent px-8 py-3 text-[0.7rem] font-light uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Reservar estancia
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.66rem] font-light uppercase tracking-[0.28em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-primary-foreground/75 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.68rem] font-light uppercase tracking-[0.16em] text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} El Palacete · Entre Tertulias</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
