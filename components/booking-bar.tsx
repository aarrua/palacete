'use client'

import { useState } from 'react'
import { CalendarDays, Users, ChevronDown } from 'lucide-react'

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-1 items-center gap-3 px-5 py-4 text-left">
      <span className="text-accent">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[0.6rem] font-light uppercase tracking-[0.24em] text-primary-foreground/60">
          {label}
        </span>
        {children}
      </span>
    </label>
  )
}

export function BookingBar() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 huéspedes')

  const inputClass =
    'bg-transparent font-serif text-lg text-primary-foreground outline-none placeholder:text-primary-foreground/50 [color-scheme:dark]'

  return (
    <div
      id="reservar"
      className="mx-auto w-full max-w-5xl scroll-mt-28 border border-primary-foreground/15 bg-primary/85 backdrop-blur-md"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col divide-y divide-primary-foreground/15 md:flex-row md:divide-x md:divide-y-0"
      >
        <Field icon={<CalendarDays className="h-5 w-5" strokeWidth={1.5} />} label="Llegada">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={<CalendarDays className="h-5 w-5" strokeWidth={1.5} />} label="Salida">
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={<Users className="h-5 w-5" strokeWidth={1.5} />} label="Huéspedes">
          <div className="relative flex items-center">
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={`${inputClass} appearance-none pr-6`}
            >
              <option>1 huésped</option>
              <option>2 huéspedes</option>
              <option>3 huéspedes</option>
              <option>4 huéspedes</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-primary-foreground/60" />
          </div>
        </Field>
        <button
          type="submit"
          className="bg-accent px-10 py-5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-colors hover:bg-accent/85 md:py-0"
        >
          Ver disponibilidad
        </button>
      </form>
    </div>
  )
}
