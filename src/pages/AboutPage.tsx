import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { houSections } from '@/data/sections'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-white py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <span className="inline-block rounded-full bg-[hsl(var(--vn-red)/0.12)] px-4 py-1.5 text-sm font-semibold text-[hsl(var(--vn-red))]">
              HOU
            </span>
            <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Trường Đại học Mở Hà Nội
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nơi tri thức hội tụ, nơi tình yêu đất nước được nuôi dưỡng qua từng bài giảng.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
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
                  <div className="p-6">
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

        {/* Mission */}
        <section className="bg-zinc-950 py-16 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
              Sứ mệnh
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300">
              <p>
                Trường Đại học Mở Hà Nội mang sứ mệnh mở rộng cơ hội học tập cho mọi người,
                đào tạo nguồn nhân lực chất lượng cao phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.
              </p>
              <p>
                Dự án <span className="font-bold text-[hsl(var(--vn-gold))]">VIETNAMESE SOULS</span> là minh chứng cho tinh thần sáng tạo,
                yêu nước của sinh viên HOU — kết nối thế hệ trẻ với di sản văn hóa dân tộc.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
