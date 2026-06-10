import { Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Truck className="size-5" aria-hidden="true" />
      </span>
      <span
        className={cn(
          'flex flex-col leading-none',
          textClassName,
        )}
      >
        <span className="text-lg font-extrabold tracking-tight">Bujar SG</span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
          Vehicle Transport
        </span>
      </span>
    </span>
  )
}
