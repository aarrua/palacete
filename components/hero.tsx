import Image from 'next/image'
import { BookingBar } from '@/components/booking-bar'

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/facade.png"
        alt="Fachada neoclásica de El Palacete al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/25 to-primary/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-10 pt-32 lg:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center text-primary-foreground">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.4em] text-accent">
            Santa Fe · Argentina
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            El Palacete
          </h1>
          <p className="mt-4 font-serif text-2xl font-light italic text-primary-foreground/85 sm:text-3xl">
            Entre Tertulias
          </p>
          <div className="mt-8 h-px w-16 bg-accent" />
          <p className="mt-8 max-w-xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            Un antiguo cine europeo devenido hotel boutique. Historia, cultura y
            hospitalidad de otra época, en el corazón de la ciudad.
          </p>
        </div>

        <BookingBar />
      </div>
    </section>
  )
}
