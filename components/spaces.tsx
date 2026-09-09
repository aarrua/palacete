import Image from 'next/image'

const SPACES = [
  {
    tag: 'El Restaurante',
    name: 'La Bohème',
    img: '/images/restaurant.png',
    desc: 'Cocina de autor en un salón que recupera el aura del antiguo cine: manteles impecables, luz cálida y arte de época. Un escenario para las mejores tertulias.',
  },
  {
    tag: 'Nuestro jardín',
    name: 'Le Jardin',
    img: '/images/garden.png',
    desc: 'Un patio íntimo entre hiedras y cítricos, con mesas a la luz de las velas. El refugio verde para desayunos lentos y sobremesas interminables.',
  },
  {
    tag: 'En terraza',
    name: 'Bar Nácar',
    img: '/images/terrace-bar.png',
    desc: 'Coctelería de altura al atardecer, con barra de bronce y nácar y vistas a los tejados de Santa Fe. El brindis perfecto para cerrar el día.',
  },
]

export function Spaces() {
  return (
    <section id="espacios" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Nuestros espacios
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Gastronomía & encuentro
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            Cinco ambientes con nombre propio. Junto a La Bohème, Le Jardin y Bar
            Nácar, El Palacete abre su recepción{' '}
            <span className="italic text-primary">Le Foyer</span> y el anexo{' '}
            <span className="italic text-primary">La Petit Bohème</span>.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-20 lg:gap-28">
          {SPACES.map((space, i) => (
            <article
              key={space.name}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-[5/4] w-full overflow-hidden ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={space.img || '/placeholder.svg'}
                  alt={`${space.name}, ${space.tag}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-[0.68rem] font-light uppercase tracking-[0.3em] text-accent">
                  {space.tag}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
                  {space.name}
                </h3>
                <div className="mt-6 h-px w-12 bg-accent" />
                <p className="mt-6 max-w-md text-pretty text-base font-light leading-relaxed text-muted-foreground">
                  {space.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
