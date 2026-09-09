import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CLASSIQUE_ROOMS = [
  {
    name: 'Ámbar',
    type: 'Chambre Classique · Doble',
    img: '/images/ambar.png',
    size: 'Beige, ocre y madera oscura',
    guests: 'Doble',
    desc: 'Una habitación de calidez profunda, inspirada en los reflejos dorados del ámbar.',
  },
  {
    name: 'Morganita',
    type: 'Chambre Classique · Doble',
    img: '/images/Chambre clasique morganita doble.png',
    size: 'Blanco hueso y rosa pastel',
    guests: 'Doble',
    desc: 'Delicada y luminosa, combina blanco hueso, rosa pastel y tonos salmón con detalles en bronce.',
  },
  {
    name: 'Esmeralda',
    type: 'Chambre Classique · Doble',
    img: '/images/Cambre clasique esmeralda doble.png',
    size: 'Verde esmeralda y mármol',
    guests: 'Doble',
    desc: 'Una interpretación de la sofisticación clásica a través del verde esmeralda y el terciopelo.',
  },
  {
    name: 'Topacio',
    type: 'Chambre Classique · Doble',
    img: '/images/Cambre Clasique Topacio doble.png',
    size: 'Azul cristalino y seda',
    guests: 'Doble',
    desc: 'Serena y elegante, combina tonos azul cristalino, textiles delicados y detalles dorados.',
  },
  {
    name: 'Aquamarina',
    type: 'Chambre Classique · Triple',
    img: '/images/chambre clasique Acuamarina triple.png',
    size: 'Celeste y maderas claras',
    guests: 'Triple',
    desc: 'Una habitación fresca y luminosa inspirada en los tonos del agua.',
  },
  {
    name: 'Rubí',
    type: 'Chambre Classique · Triple',
    img: '/images/Cambre clasique Rubi triple.png',
    size: 'Rojo profundo y pana',
    guests: 'Triple',
    desc: 'La más teatral de la colección. Combina rojos profundos, textiles envolventes e iluminación íntima.',
  },
]

const HAUT_DE_GAMME_ROOMS = [
  {
    name: 'Suite Junior Juliette',
    type: 'Suite Junior · Haut de Gamme',
    img: '/images/Suite junior juliette 8coleccion haut de game).png',
    size: 'Cama King Size',
    guests: 'Doble',
    desc: 'Pensada especialmente para escapadas románticas. Se inspira en el romance clásico y en Verona.',
  },
  {
    name: 'Suite Executive Ophelia',
    type: 'Suite Executive · Haut de Gamme',
    img: '/images/Suite Executive Ophelia.png',
    size: 'Cama King Size',
    guests: 'Doble',
    desc: 'Una suite de perfil intelectual, lírico y sofisticado, con sector de living y escritorio integrado.',
  },
  {
    name: 'Suite Presidencial Antígona',
    type: 'Suite Presidencial · Haut de Gamme',
    img: '/images/suite Antigona, la tragédie imperiale (coleccion haut de game).png',
    size: 'Cama King Size',
    guests: 'Doble',
    desc: 'La suite de mayor jerarquía. Concebida para huéspedes que buscan privacidad y una experiencia excepcional.',
  },
]

export function Rooms() {
  return (
    <section id="habitaciones" className="scroll-mt-24 bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Chambres
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Diez habitaciones. Dos colecciones. Una experiencia diferente en cada puerta.
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            El Palacete ofrece espacios únicos, diseñados con identidad propia.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="mb-10 font-serif text-3xl font-light text-foreground border-b border-border pb-4">
            Chambre Classique
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CLASSIQUE_ROOMS.map((room) => (
              <article key={room.name} className="group flex flex-col bg-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={room.img || '/placeholder.svg'}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[0.62rem] font-light uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{room.type}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">
                    {room.name}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                    {room.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-end border-t border-border pt-5">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent-foreground/0"
                    >
                      <span className="text-primary transition-colors group-hover:text-accent">
                        Descubrir habitación
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-primary transition-all group-hover:translate-x-1 group-hover:text-accent" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 border-b border-border pb-4">
            <h3 className="font-serif text-3xl font-light text-foreground">
              Chambre Haut de Gamme
            </h3>
            <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
              La colección Haut de Gamme reúne las suites de mayor jerarquía de El Palacete. Inspiradas en grandes figuras de la literatura y la dramaturgia clásica, cada una propone un universo propio.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {HAUT_DE_GAMME_ROOMS.map((room) => (
              <article key={room.name} className="group flex flex-col bg-card shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={room.img || '/placeholder.svg'}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3 text-[0.62rem] font-light uppercase tracking-[0.2em] text-accent">
                    <span>{room.type}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl font-light text-foreground">
                    {room.name}
                  </h3>
                  <p className="mt-4 flex-1 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                    {room.desc}
                  </p>
                  <div className="mt-8 flex items-center justify-end border-t border-border pt-5">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent-foreground/0"
                    >
                      <span className="text-primary transition-colors group-hover:text-accent">
                        Descubrir habitación
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-primary transition-all group-hover:translate-x-1 group-hover:text-accent" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
