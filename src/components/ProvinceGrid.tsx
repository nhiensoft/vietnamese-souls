import { provinces } from '@/data/provinces'

export function ProvinceGrid() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[hsl(var(--vn-red))] sm:text-3xl md:text-4xl">
            Vùng trời nào cũng là vùng trời Tổ quốc
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-[hsl(var(--vn-gold-fg)/0.7)]">
            Bộ sưu tập 34 tỉnh thành
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {provinces.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.landmark}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-8">
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">
                  {p.name}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/80">
                  {p.landmark}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
