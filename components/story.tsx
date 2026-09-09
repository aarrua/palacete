import Image from 'next/image'

export function Story() {
  return (
    <section id="historia" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/imagen nuestra historia.png"
            alt="Interior histórico de El Palacete"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[0.7rem] font-light uppercase tracking-[0.34em] text-accent">
            Nuestra historia
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            El edificio que dará vida a El Palacete
          </h2>
          <div className="mt-7 space-y-5 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            <p>
              El edificio que dará vida a El Palacete fue originalmente la sede del Sindicato de Luz y Fuerza de Santa Fe. En su interior funcionó un cine de inspiración europea dedicado al cine de arte y a producciones europeas, convirtiéndose en un espacio vinculado a la vida cultural de la ciudad.
            </p>
            <p>
              El Palacete recupera hoy esa memoria para transformarla en una nueva experiencia de hospitalidad, arte y encuentro.
            </p>
          </div>
          <p className="mt-10 font-serif text-2xl font-light italic text-primary">
            «Un lugar hecho para conversar, demorarse y volver.»
          </p>
        </div>
      </div>
    </section>
  )
}
