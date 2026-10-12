'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, CheckCircle2 } from 'lucide-react'

const STORAGE_KEY = 'el_palacete_newsletter_popup_dismissed'

export function WelcomeDiscountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    cumpleanos: '',
  })

  useEffect(() => {
    // Verificar si ya fue visto o cerrado previamente
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      // Pequeño delay de cortesía para una entrada suave al cargar la página
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Marcamos como enviado y persistimos en localStorage para que no vuelva a aparecer
    setIsSubmitted(true)
    localStorage.setItem(STORAGE_KEY, 'true')
    setTimeout(() => {
      setIsOpen(false)
    }, 2800)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop con desenfoque elegante */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal / Carta */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-sm bg-card shadow-2xl border border-border animate-in zoom-in-95 fade-in duration-300"
      >
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Cerrar modal"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground/70 backdrop-blur-sm transition-all hover:bg-background hover:text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Columna Izquierda: Formulario e Información */}
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10 order-2 md:order-1">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-light text-foreground">
                  ¡Bienvenido a El Palacete!
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Hemos registrado tus datos. Recibirás tu código de 10% OFF y novedades exclusivas en tu correo.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center md:text-left">
                  <span className="text-[0.65rem] font-light uppercase tracking-[0.3em] text-accent">
                    Círculo Exclusivo
                  </span>
                  <h2
                    id="modal-headline"
                    className="mt-2 font-serif text-2xl sm:text-3xl font-light tracking-wide text-foreground"
                  >
                    ¡Tenés 10% OFF esperándote!
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Sumate a nuestra comunidad y accedé antes a lanzamientos, beneficios de estadía y experiencias exclusivas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <div className="p-field">
                    <label className="sr-only" htmlFor="popup-email">
                      Email
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      required
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-field">
                      <label className="sr-only" htmlFor="popup-name">
                        Nombre
                      </label>
                      <input
                        id="popup-name"
                        type="text"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                    <div className="p-field">
                      <label className="sr-only" htmlFor="popup-lastname">
                        Apellido
                      </label>
                      <input
                        id="popup-lastname"
                        type="text"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                        className="w-full border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="p-field">
                    <label className="sr-only" htmlFor="popup-birthday">
                      Cumpleaños (DD/MM)
                    </label>
                    <input
                      id="popup-birthday"
                      type="text"
                      maxLength={5}
                      placeholder="Cumpleaños (DD/MM)"
                      value={formData.cumpleanos}
                      onChange={(e) => setFormData({ ...formData, cumpleanos: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 border border-primary bg-primary py-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-accent hover:border-accent hover:text-accent-foreground active:scale-[0.99]"
                  >
                    Suscribirme
                  </button>

                  <p className="pt-1 text-center text-[0.65rem] text-muted-foreground/80">
                    Vas a recibir un correo para validar tu email.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Columna Derecha: Imagen Temática de El Palacete */}
          <div className="relative min-h-[200px] md:min-h-full bg-muted order-1 md:order-2">
            <Image
              src="/images/suite Antigona, la tragédie imperiale (coleccion haut de game).png"
              alt="El Palacete Suite"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-black/20 md:to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
