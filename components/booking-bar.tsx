'use client'

import { useState, useRef, useEffect } from 'react'
import {
  CalendarDays,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Minus,
  Sparkles,
  Tag,
} from 'lucide-react'

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

const DAYS_OF_WEEK = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

function formatDisplayDate(date: Date | null): string {
  if (!date) return ''
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isBetween(target: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false
  const t = new Date(target.getFullYear(), target.getMonth(), target.getDate()).getTime()
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime()
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime()
  return t > s && t < e
}

export function BookingBar() {
  // Fechas iniciales por defecto: hoy + 1 día de estancia
  const today = new Date()
  const defaultCheckIn = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)
  const defaultCheckOut = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4)

  const [checkIn, setCheckIn] = useState<Date | null>(defaultCheckIn)
  const [checkOut, setCheckOut] = useState<Date | null>(defaultCheckOut)
  const [adults, setAdults] = useState<number>(2)
  const [children, setChildren] = useState<number>(0)
  const [promoCode, setPromoCode] = useState<string>('')

  // Control de paneles desplegables
  const [activePanel, setActivePanel] = useState<'dates' | 'guests' | null>(null)

  // Mes visible en el calendario (mostramos dos meses en desktop)
  const [calendarMonth, setCalendarMonth] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )

  const containerRef = useRef<HTMLDivElement>(null)

  // Cerrar paneles al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActivePanel(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Selección de fecha en el calendario
  const handleDateSelect = (date: Date) => {
    // Si no hay check-in o ya hay un rango completo seleccionado, iniciamos uno nuevo
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date)
      setCheckOut(null)
    } else if (checkIn && !checkOut) {
      if (date.getTime() < checkIn.getTime()) {
        // Si clickea una fecha anterior a check-in, la convertimos en nuevo check-in
        setCheckIn(date)
      } else if (date.getTime() === checkIn.getTime()) {
        // Mismo día: no hace nada o lo mantiene
        setCheckOut(null)
      } else {
        setCheckOut(date)
        // Opcional: cerrar calendario automáticamente al completar el rango tras breve lapso
        setTimeout(() => setActivePanel(null), 300)
      }
    }
  }

  // Navegar meses en el calendario
  const nextMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))
  }

  // Función constructora de mes para la grilla
  const renderMonth = (monthOffset: number) => {
    const monthDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + monthOffset, 1)
    const year = monthDate.getFullYear()
    const month = monthDate.getMonth()

    const firstDayIndex = (monthDate.getDay() + 6) % 7 // Lunes = 0, Domingo = 6
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    // Espacios vacíos antes del día 1
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null)
    }
    // Días del mes
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d))
    }

    return (
      <div className="flex-1 min-w-[280px] p-2 sm:p-3">
        <div className="text-center font-serif text-lg font-normal text-foreground mb-4">
          {MONTH_NAMES[month]} {year}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-3">
          {DAYS_OF_WEEK.map((d) => (
            <span key={d} className="py-1">
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1.5 gap-x-0 text-center">
          {days.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="h-10 w-10 sm:h-11 sm:w-11" />
            }

            const isStart = isSameDay(date, checkIn)
            const isEnd = isSameDay(date, checkOut)
            const inRange = isBetween(date, checkIn, checkOut)
            const isPast =
              new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() <
              new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()

            let buttonClasses = 'h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center font-serif text-sm sm:text-base transition-all rounded-sm mx-auto '

            if (isPast) {
              buttonClasses += 'text-muted-foreground/30 cursor-not-allowed'
            } else if (isStart || isEnd) {
              buttonClasses += 'bg-accent text-accent-foreground font-semibold shadow-md scale-105'
            } else if (inRange) {
              buttonClasses += 'bg-accent/20 text-foreground font-medium rounded-none'
            } else {
              buttonClasses += 'text-foreground hover:bg-muted/80 hover:text-accent font-normal cursor-pointer'
            }

            return (
              <div
                key={date.toISOString()}
                className={`py-0.5 ${inRange ? 'bg-accent/15' : ''} ${isStart && checkOut ? 'rounded-l-sm' : ''} ${isEnd ? 'rounded-r-sm' : ''}`}
              >
                <button
                  type="button"
                  disabled={isPast}
                  onClick={() => handleDateSelect(date)}
                  className={buttonClasses}
                >
                  {date.getDate()}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Redirigir a Chambres / Habitaciones
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setActivePanel(null)
    const target = document.getElementById('habitaciones')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = '#habitaciones'
    }
  }

  return (
    <div
      ref={containerRef}
      id="reservar"
      className="relative z-30 mx-auto w-full max-w-6xl px-4 -mt-10 sm:-mt-14 mb-12"
    >
      {/* Barra principal */}
      <div className="bg-card/95 backdrop-blur-md rounded-sm border border-border/80 shadow-2xl overflow-visible">
        {/* Sub-header de cortesía / beneficios */}
        <div className="hidden sm:flex items-center justify-between border-b border-border/60 px-6 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground bg-muted/30">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>El Palacete · Entre Tertulias</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Mejor tarifa garantizada</span>
            <span className="text-accent">10% OFF código de bienvenida</span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 items-stretch divide-y md:divide-y-0 md:divide-x divide-border/70 relative">
          {/* Campo Check-in / Check-out (5 columnas) */}
          <button
            type="button"
            onClick={() => setActivePanel(activePanel === 'dates' ? null : 'dates')}
            className={`md:col-span-5 p-5 sm:px-7 sm:py-5 text-left flex flex-col justify-center transition-all hover:bg-muted/40 cursor-pointer ${
              activePanel === 'dates' ? 'bg-muted/50 ring-2 ring-inset ring-accent' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-accent">
                Check-in / Check-out
              </span>
              <CalendarDays className="h-4 w-4 text-accent" />
            </div>
            <div className="font-serif text-base sm:text-lg text-foreground font-normal tracking-wide">
              {checkIn && checkOut
                ? `${formatDisplayDate(checkIn)} — ${formatDisplayDate(checkOut)}`
                : checkIn
                  ? `${formatDisplayDate(checkIn)} — Seleccionar salida`
                  : 'Seleccionar fechas de estadía'}
            </div>
            <span className="text-xs text-muted-foreground mt-1 font-light">
              {checkIn && checkOut
                ? `${Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} noche(s) seleccionadas`
                : 'Mínimo 1 noche'}
            </span>
          </button>

          {/* Campo Huéspedes (3 columnas) con su Popover flotante directo */}
          <div className="md:col-span-3 relative flex flex-col">
            <button
              type="button"
              onClick={() => setActivePanel(activePanel === 'guests' ? null : 'guests')}
              className={`w-full h-full p-5 sm:px-6 sm:py-5 text-left flex flex-col justify-center transition-all hover:bg-muted/40 cursor-pointer ${
                activePanel === 'guests' ? 'bg-muted/50 ring-2 ring-inset ring-accent' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-accent">
                  Huéspedes
                </span>
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div className="font-serif text-base sm:text-lg text-foreground font-normal tracking-wide">
                {adults} {adults === 1 ? 'Adulto' : 'Adultos'}
                {children > 0 ? `, ${children} ${children === 1 ? 'Niño' : 'Niños'}` : ''}
              </div>
              <span className="text-xs text-muted-foreground mt-1 font-light">
                Suites y habitaciones
              </span>
            </button>

            {/* Popover flotante acoplado a la columna de Huéspedes */}
            {activePanel === 'guests' && (
              <div className="absolute top-full left-0 right-0 sm:min-w-[310px] sm:w-[320px] z-50 mt-1 bg-card border border-border shadow-2xl p-5 sm:p-6 rounded-sm animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-border/60 mb-4">
                  <div>
                    <h4 className="font-serif text-base font-light text-foreground">
                      Huéspedes
                    </h4>
                    <p className="text-[0.68rem] text-muted-foreground">
                      Capacidad de habitación
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePanel(null)}
                    className="flex items-center gap-1 text-[0.68rem] uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <span>Cerrar</span>
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Contador Adultos */}
                  <div className="flex items-center justify-between py-1.5">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-foreground font-medium block">
                        Adultos
                      </span>
                      <span className="text-[0.7rem] text-muted-foreground">
                        Mayores de 12 años
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-serif text-lg text-foreground font-semibold">
                        {adults}
                      </span>
                      <button
                        type="button"
                        disabled={adults >= 4}
                        onClick={() => setAdults((prev) => Math.min(4, prev + 1))}
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Contador Niños */}
                  <div className="flex items-center justify-between py-1.5 border-t border-border/40">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-foreground font-medium block">
                        Niños
                      </span>
                      <span className="text-[0.7rem] text-muted-foreground">
                        Hasta 11 años
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={children <= 0}
                        onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-serif text-lg text-foreground font-semibold">
                        {children}
                      </span>
                      <button
                        type="button"
                        disabled={children >= 3}
                        onClick={() => setChildren((prev) => Math.min(3, prev + 1))}
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60">
                  <button
                    type="button"
                    onClick={() => setActivePanel(null)}
                    className="w-full bg-primary text-primary-foreground py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm font-medium cursor-pointer"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Campo Código Promocional (2 columnas) */}
          <div className="md:col-span-2 p-5 sm:px-5 sm:py-5 flex flex-col justify-center">
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-1.5 mb-1">
              <Tag className="h-3.5 w-3.5 text-accent" /> Código Promo
            </span>
            <input
              type="text"
              placeholder="Ej. TERTULIA"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full bg-transparent font-serif text-sm sm:text-base uppercase text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
            <span className="text-[0.68rem] text-accent/80 mt-1 font-light">
              Opcional
            </span>
          </div>

          {/* Botón Buscar / Ver Chambres (2 columnas) */}
          <div className="md:col-span-2 p-4 sm:p-5 flex items-center justify-center">
            <button
              type="submit"
              className="w-full h-full min-h-[52px] border border-primary bg-primary py-3.5 px-6 text-xs sm:text-[0.78rem] font-medium uppercase tracking-[0.24em] text-primary-foreground transition-all hover:bg-accent hover:border-accent hover:text-accent-foreground active:scale-[0.98] shadow-md rounded-sm cursor-pointer"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Panel Desplegable: Selector de Fechas (Calendario) */}
        {activePanel === 'dates' && (
          <div className="border-t border-border bg-card p-5 sm:p-7 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
              <div>
                <h4 className="font-serif text-xl font-light text-foreground">
                  Selecciona tus fechas de estadía
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Llegada y salida para calcular la disponibilidad en El Palacete
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePanel(null)}
                className="flex items-center gap-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground hover:text-foreground p-1 cursor-pointer"
              >
                <span>Cerrar</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navegación y Grilla de Meses */}
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  aria-label="Mes anterior"
                  className="p-2 border border-border rounded-full hover:bg-muted text-foreground transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-xs font-serif text-accent uppercase tracking-widest font-medium">
                  El Palacete · Reservas
                </div>
                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Mes siguiente"
                  className="p-2 border border-border rounded-full hover:bg-muted text-foreground transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:divide-x divide-border/60">
                {renderMonth(0)}
                <div className="hidden md:block flex-1 pl-8">
                  {renderMonth(1)}
                </div>
              </div>
            </div>

            {/* Footer de Calendario con selección y botón listo */}
            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-serif text-foreground font-medium">Fechas seleccionadas: </span>
                {checkIn ? formatDisplayDate(checkIn) : '—'} al {checkOut ? formatDisplayDate(checkOut) : '—'}
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setCheckIn(null)
                    setCheckOut(null)
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground underline px-2 py-1 cursor-pointer"
                >
                  Restablecer
                </button>
                <button
                  type="button"
                  onClick={() => setActivePanel(null)}
                  className="flex-1 sm:flex-initial bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm cursor-pointer"
                >
                  Aplicar fechas
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

