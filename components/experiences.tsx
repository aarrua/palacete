import Image from 'next/image'

const EXPERIENCIAS = [
  {
    title: 'EVENTOS',
    subtitle: 'Cuando El Palacete se convierte en escenario.',
    items: ['Noches de jazz', 'Música en vivo', 'Tango', 'Ciclos de cine', 'Presentaciones de libros', 'Catas de vino'],
  },
  {
    title: 'TALLERES',
    subtitle: 'Crear, aprender y compartir.',
    items: ['Pintura al óleo', 'Cerámica', 'Baile', 'Yoga', 'Meditación', 'Encuentros creativos'],
  },
  {
    title: 'ACTIVIDADES',
    subtitle: 'Una estadía que se vive de muchas maneras.',
    items: ['Sesiones de fotografía', 'Tertulias literarias', 'Encuentros con artistas', 'Calma y bienestar'],
  },
]

export function Experiences() {
  return (
    <section id="experiencias" className="relative scroll-mt-24 overflow-hidden py-28 lg:py-36 bg-secondary">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Experiencias
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl text-foreground">
            El arte de demorarse
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            El Palacete fue pensado para que la estadía continúe mucho más allá de la habitación. El arte, la cultura, el bienestar y el encuentro forman parte de una agenda de experiencias que transforma al hotel en un espacio vivo.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {EXPERIENCIAS.map((exp) => (
            <div key={exp.title} className="flex flex-col">
              <h3 className="font-sans text-[0.8rem] font-medium tracking-[0.2em] text-accent uppercase mb-2">
                {exp.title}
              </h3>
              <p className="font-serif text-2xl text-foreground mb-6">
                {exp.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block border border-border px-3 py-1 text-[0.7rem] font-light text-muted-foreground uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-light text-foreground mb-4">
              Descubrir Santa Fe
            </h3>
            <p className="text-base font-light text-muted-foreground mb-6">
              El Palacete también funciona como nexo entre el huésped y distintas experiencias de la ciudad. Ofrecemos información y coordinación con operadores locales.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Visitas al casco histórico', 'Museos', 'Cervecería Santa Fe', 'Bus turístico', 'Ruta del Liso'].map((item) => (
                <span
                  key={item}
                  className="inline-block bg-primary text-primary-foreground px-4 py-1.5 text-[0.7rem] font-light uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
