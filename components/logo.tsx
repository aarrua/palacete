import { cn } from '@/lib/utils'

export function Logo({
  className,
  subtitle = true,
}: {
  className?: string
  subtitle?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3 leading-none', className)}>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current font-serif text-[0.9rem] font-semibold tracking-tight"
      >
        EP
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-lg font-semibold tracking-[0.22em]">
          EL PALACETE
        </span>
        {subtitle && (
          <span className="text-[0.6rem] font-light uppercase tracking-[0.34em] opacity-70">
            Hotel Boutique
          </span>
        )}
      </span>
    </span>
  )
}
