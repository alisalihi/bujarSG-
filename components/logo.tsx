import { TranslatedText } from '@/components/translated-text'
import { cn } from '@/lib/utils'

function BujarMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="44"
        height="44"
        rx="13"
        className="fill-primary"
      />
      <path
        d="M15 42V14h13c5.4 0 8.8 2.9 8.8 7.2 0 2.9-1.4 5-3.8 6 3.3 1 5.2 3.5 5.2 6.8 0 5-4 8-10.2 8H15Zm7.1-17.3h4.6c1.9 0 3-1 3-2.7 0-1.6-1.1-2.7-3-2.7h-4.6v5.4Zm0 12h5.6c2.1 0 3.4-1.2 3.4-3.2s-1.3-3.2-3.4-3.2h-5.6v6.4Z"
        fill="white"
      />
      <path
        d="M12 10h32"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative flex size-11 shrink-0 items-center justify-center">
        <BujarMark className="size-11 drop-shadow-sm" />
      </span>
      <span
        className={cn(
          'flex flex-col leading-none',
          textClassName,
        )}
      >
        <span className="text-lg font-extrabold">Bujar SG</span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
          <TranslatedText id="logo.tagline" />
        </span>
      </span>
    </span>
  )
}
