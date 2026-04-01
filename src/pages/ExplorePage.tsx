import { useMemo, useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { PromoBanners } from '@/components/PromoBanners'
import { GameWarzone } from '@/components/GameWarzone'
import { articles, ARTICLE_CATEGORIES, type Article } from '@/data/articles'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

function ArticleCard({ article }: { article: Article }) {
  return (
    <article
      className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-[hsl(var(--vn-red)/0.35)] hover:shadow-md"
    >
      <span className="mb-2 inline-flex w-fit rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
        {article.category}
      </span>
      <h3 className="text-lg font-semibold tracking-tight group-hover:text-[hsl(var(--vn-red))]">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
      <time className="mt-4 text-xs text-muted-foreground" dateTime={article.date}>
        {article.date}
      </time>
    </article>
  )
}

export function ExplorePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('Tất cả')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const catOk = category === 'Tất cả' || a.category === category
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      return catOk && qOk
    })
  }, [query, category])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto max-w-5xl space-y-10 px-4 py-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Khám phá</h1>
          <p className="max-w-2xl text-muted-foreground">
            Bài viết theo chủ đề — lọc nhanh và tìm kiếm theo từ khóa.
          </p>
        </header>

        <PromoBanners />

        <GameWarzone />

        <section aria-labelledby="explore-filter-heading" className="space-y-6">
          <h2 id="explore-filter-heading" className="sr-only">
            Lọc và tìm kiếm
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm theo tiêu đề hoặc nội dung..."
                className="h-11 w-full rounded-full border border-input bg-background pl-10 pr-4 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {ARTICLE_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition',
                  category === c
                    ? 'bg-[hsl(var(--vn-red))] text-white shadow'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {filtered.length} bài phù hợp
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-dashed py-12 text-center text-muted-foreground">
              Không có bài viết phù hợp. Thử đổi từ khóa hoặc thể loại.
            </p>
          )}
        </section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} VIETNAMESE SOULS — Đại học Mở Hà Nội
      </footer>
    </div>
  )
}
