import Image from 'next/image'

const ITEMS = [
  {
    title: 'Ciclos de cine',
    desc: 'Proyecciones de cine de arte y clásicos europeos, honrando la vocación original de la casa.',
  },
  {
    title: 'Noches de tertulia',
    desc: 'Encuentros de música, literatura y conversación con artistas locales en La Bohème.',
  },
  {
    title: 'Catas & maridajes',
    desc: 'Selección de vinos de la región acompañados por la cocina del chef en mesas íntimas.',
  },
  {
    title: 'City tour cultural',
    desc: 'Recorridos guiados por el casco histórico de Santa Fe y sus rincones patrimoniales.',
  },
]

export function Experiences() {
  return (
    <section
      id="experiencias"
      className="relative scroll-mt-24 overflow-hidden py-28 lg:py-36"
    >
      <Image
        src="/images/experience.png"
        alt="Sala de cine íntima de El Palacete"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-primary-foreground lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Experiencias
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
            El arte de demorarse
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-primary-foreground/80">
            Vivir El Palacete es sumarse a una agenda cultural que mantiene vivo
            el espíritu del viejo cine y de las buenas conversaciones.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item.title} className="bg-primary p-9">
              <h3 className="font-serif text-2xl font-light text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-primary-foreground/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
