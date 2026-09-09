import { ArrowRight } from 'lucide-react'

const OFFERS = [
  {
    label: 'Escapada',
    title: 'Fin de semana entre tertulias',
    desc: 'Dos noches con desayuno en Le Jardin, late check-out y una cena de bienvenida en La Bohème.',
    note: 'Mínimo 2 noches',
  },
  {
    label: 'Romance',
    title: 'Noche de nácar',
    desc: 'Suite con espumante de recepción, coctelería para dos en Bar Nácar y desayuno tardío en la habitación.',
    note: 'Sujeto a disponibilidad',
  },
  {
    label: 'Cultura',
    title: 'Butaca reservada',
    desc: 'Estancia con entradas al ciclo de cine de la temporada y visita guiada por la historia del edificio.',
    note: 'Fechas seleccionadas',
  },
]

export function Offers() {
  return (
    <section id="ofertas" className="scroll-mt-24 bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
              Ofertas
            </p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Motivos para volver
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm font-light leading-relaxed text-muted-foreground">
            Experiencias diseñadas para quienes buscan algo más que una noche de
            hotel. Reservá directo y obtené la mejor tarifa.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article
              key={offer.title}
              className="group flex flex-col border border-border bg-card p-9 transition-colors hover:border-accent"
            >
              <p className="text-[0.64rem] font-light uppercase tracking-[0.26em] text-accent">
                {offer.label}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-foreground">
                {offer.title}
              </h3>
              <p className="mt-4 flex-1 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                {offer.desc}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <span className="text-[0.62rem] font-light uppercase tracking-[0.16em] text-muted-foreground">
                  {offer.note}
                </span>
                <a
                  href="#reservar"
                  className="flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary transition-colors group-hover:text-accent"
                >
                  Reservar
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
