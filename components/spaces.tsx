import Image from 'next/image'

const SPACES = [
  {
    tag: 'Terraza',
    name: 'Piscina & Terraza',
    img: '/images/Piscina.jfif',
    desc: 'La terraza corona El Palacete con vistas abiertas sobre la ciudad y reúne algunos de sus principales espacios de recreación y bienestar. La piscina invita a disfrutar momentos de descanso al aire libre en un entorno íntimo.',
  },
  {
    tag: 'Terraza',
    name: 'Spa',
    img: '/images/Spa.jpeg',
    desc: 'Un espacio dedicado al bienestar, la pausa y la desconexión. El Spa de El Palacete complementa la experiencia de alojamiento con un ambiente sereno y reservado, integrado al sector de terraza.',
  },
  {
    tag: 'Primer Piso',
    name: 'Sala de Estar Atenea',
    img: '/images/Foyer.jpeg',
    desc: 'Atenea es uno de los rincones más tranquilos de El Palacete. Concebida para la lectura, el descanso y la conversación, recupera el espíritu de los antiguos salones literarios europeos.',
  },
  {
    tag: 'Exterior',
    name: 'Le Jardin',
    img: '/images/Jardin.jpeg',
    desc: 'El jardín de El Palacete funciona como un refugio exterior dentro de la ciudad. Inspirado en los jardines románticos franceses, combina vegetación, senderos y rincones pensados para detenerse, conversar y disfrutar del entorno.',
  },
  {
    tag: 'Planta Baja',
    name: 'La Bohème · Café-Concert',
    img: '/images/Cafe - Concert la Bohéme.jpeg',
    desc: 'La Bohème es el corazón social y cultural de El Palacete. Inspirado en los cafés-concert de la Belle Époque, combina gastronomía, espectáculos y encuentros artísticos dentro de un mismo espacio.',
  },
  {
    tag: 'Planta Baja',
    name: 'Galería La Petit Bohème',
    img: '/images/Galeria peit-bohéme.jfif',
    desc: 'Una galería vidriada que prolonga la experiencia de La Bohème hacia el exterior y establece una transición entre el restaurante y el jardín.',
  },
  {
    tag: 'Terraza',
    name: 'Bar Nácar',
    img: '/images/Terraza.png',
    desc: 'Bar Nácar es el refugio nocturno de El Palacete. Ubicado en la terraza, propone un ambiente íntimo, sofisticado y relajado, con vistas abiertas sobre la ciudad y una atmósfera pensada para disfrutar el final del día.',
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
            Ambientes con historia
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            Cada espacio de El Palacete propone una manera diferente de vivir la estadía. Desde rincones pensados para la calma y la lectura hasta ambientes destinados al encuentro, la gastronomía y el bienestar.
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
