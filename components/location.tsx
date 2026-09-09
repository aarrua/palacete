import { MapPin, Phone, Mail, AtSign } from 'lucide-react'

export function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Ubicación & contacto
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            En el corazón de Santa Fe
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base font-light leading-relaxed text-muted-foreground">
            A pasos del casco histórico, la costanera y la vida cultural de la
            ciudad. Con cochera subterránea propia para nuestros huéspedes.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <span className="text-sm font-light leading-relaxed text-foreground">
                Santa Fe, Argentina
                <span className="block text-muted-foreground">
                  Entrada por cochera subterránea
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <a
                href="tel:+5434123456"
                className="text-sm font-light text-foreground transition-colors hover:text-accent"
              >
                342 412 3456
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <a
                href="mailto:elpalacetesantafe@gmail.com"
                className="text-sm font-light text-foreground transition-colors hover:text-accent"
              >
                elpalacetesantafe@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <AtSign className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <a
                href="https://www.instagram.com/palacetesantafe/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-foreground transition-colors hover:text-accent"
              >
                @elpalacetesantafe
              </a>
            </li>
          </ul>
        </div>

        <div className="min-h-80 w-full overflow-hidden border border-border">
          <iframe
            title="Mapa de El Palacete en Santa Fe"
            src="https://www.google.com/maps?q=Santa+Fe+Argentina&output=embed"
            className="h-full min-h-80 w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
