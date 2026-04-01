import { houSections } from '@/data/sections'

export function AboutHOU() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[hsl(var(--vn-red)/0.12)] px-4 py-1.5 text-sm font-semibold text-[hsl(var(--vn-red))]">
            HOU
          </span>
          <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            Trường Đại học Mở Hà Nội
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {houSections.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
