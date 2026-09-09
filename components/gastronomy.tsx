import Image from 'next/image'

const GASTRONOMY = [
  {
    name: 'Petit-Déjeuner a la carta',
    img: '/images/Desayuno a la carta.png',
    desc: 'El desayuno se prepara a la carta y puede programarse la noche anterior. Disfrutalo en tu habitación, La Bohème, Galería o Le Jardin. Incluye cafetería de especialidad, viennoiserie fina y crêpes de estación.',
  },
  {
    name: 'Tarde de Té',
    img: '/images/Tarde de té.png',
    desc: 'Una reinterpretación de las tradicionales tardes de té, pensada como un momento de pausa y elegancia. Incluye blends en hebras, pastelería fina, scones, macarons y finger sandwiches en vajilla de tres niveles.',
  },
  {
    name: 'Ritual de las Tertulias',
    img: '/images/Tertulias .png',
    desc: 'Experiencia de tarde-noche para recuperar el placer de reunirse. Vinos, jerez, cognac, quesos maduros, jamón crudo y bocados salados de hojaldre diseñados para compartir.',
  },
  {
    name: 'Intermédiaire',
    img: '/images/Intermédiaire.png',
    desc: 'Intermedio creativo. Propuesta informal y práctica como estación de recarga durante jornadas extensas. Incluye yogur con granola, frutas, barras artesanales y cafetería.',
  },
  {
    name: 'Service de Chambre 24 hs',
    img: '/images/Service de chambre 24 hs.png',
    desc: 'La experiencia gastronómica en la privacidad de tu habitación durante todo el día, y una selección reducida disponible durante la madrugada para mantener el servicio activo.',
  },
]

export function Gastronomy() {
  return (
    <section id="gastronomia" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Servicios Gastronómicos
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Sabores con historia
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            La propuesta gastronómica de El Palacete acompaña distintos momentos de la estadía. Desde un desayuno personalizado hasta encuentros de tarde o servicio privado en la habitación, cada experiencia mantiene la identidad elegante y teatral del hotel.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {GASTRONOMY.map((item) => (
            <article key={item.name} className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={item.img || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-light text-foreground">
                  {item.name}
                </h3>
                <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
