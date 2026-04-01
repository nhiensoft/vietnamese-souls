import { contentSections } from '@/data/sections'
import { cn } from '@/lib/utils'

export function ContentSections() {
  return (
    <section className="space-y-0">
      {contentSections.map((s) => (
        <div
          key={s.id}
          className={cn(
            'relative overflow-hidden',
            s.reverse ? 'bg-zinc-900 text-white' : 'bg-zinc-950 text-white'
          )}
        >
          <div
            className={cn(
              'container mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2',
              s.reverse && 'md:[direction:rtl]'
            )}
          >
            <div className="aspect-square overflow-hidden md:aspect-auto md:h-full">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={cn('space-y-4 p-8 sm:p-12 md:p-16', s.reverse && 'md:[direction:ltr]')}>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                {s.title}
              </h2>
              {s.subtitle && (
                <p className="text-lg font-semibold text-amber-400">{s.subtitle}</p>
              )}
              <p className="max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
                {s.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
