import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const ROOMS = [
  {
    name: 'Suite El Palacete',
    img: '/images/suite-deluxe.png',
    size: '48 m²',
    guests: '2 huéspedes',
    price: 'Desde $185.000 / noche',
    desc: 'Nuestra suite insignia, con living independiente, ventanales al frente histórico y detalles en bronce y terciopelo.',
  },
  {
    name: 'Junior Suite Bohème',
    img: '/images/room-junior.png',
    size: '36 m²',
    guests: '2 huéspedes',
    price: 'Desde $145.000 / noche',
    desc: 'Un rincón íntimo con sala de estar, inspirado en la calidez de las antiguas salas de proyección.',
  },
  {
    name: 'Habitación Tertulia',
    img: '/images/room-classic.png',
    size: '28 m²',
    guests: '2 huéspedes',
    price: 'Desde $110.000 / noche',
    desc: 'Elegancia clásica y confort silencioso, pensada para el descanso después de un día de ciudad.',
  },
]

export function Rooms() {
  return (
    <section id="habitaciones" className="scroll-mt-24 bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Habitaciones & Suites
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Estancias con historia
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            Cada habitación combina el carácter patrimonial del edificio con el
            confort contemporáneo. Pocas llaves, mucha dedicación.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
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
                  <span>{room.size}</span>
                  <span className="h-3 w-px bg-border" />
                  <span>{room.guests}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">
                  {room.name}
                </h3>
                <p className="mt-3 flex-1 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                  {room.desc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-[0.72rem] font-light uppercase tracking-[0.14em] text-primary">
                    {room.price}
                  </span>
                  <a
                    href="#reservar"
                    className="flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent-foreground/0"
                  >
                    <span className="text-primary transition-colors group-hover:text-accent">
                      Reservar
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-primary transition-all group-hover:translate-x-1 group-hover:text-accent" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
