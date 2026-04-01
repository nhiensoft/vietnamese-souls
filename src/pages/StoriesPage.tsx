import { type FormEvent, useMemo, useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { PromoBanners } from '@/components/PromoBanners'
import { stories, STORY_CATEGORIES, type Story } from '@/data/stories'
import { Search, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export type StoryComment = {
  id: string
  storyId: string
  author: string
  body: string
  createdAt: string
}

function StoryBlock({
  story,
  comments,
  onAddComment,
}: {
  story: Story
  comments: StoryComment[]
  onAddComment: (storyId: string, author: string, body: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!body.trim()) return
    onAddComment(story.id, author.trim() || 'Ẩn danh', body.trim())
    setBody('')
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-col gap-2 p-5 text-left transition hover:bg-muted/40"
      >
        <span className="inline-flex w-fit rounded-full bg-[hsl(var(--vn-red)/0.12)] px-2.5 py-0.5 text-xs font-semibold text-[hsl(var(--vn-red))]">
          {story.category}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{story.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{story.excerpt}</p>
        <time className="text-xs text-muted-foreground" dateTime={story.date}>
          {story.date}
        </time>
        <span className="text-xs font-medium text-[hsl(var(--vn-red))]">
          {open ? 'Thu gọn bình luận' : 'Xem & bình luận'}
        </span>
      </button>
      {open && (
        <div className="space-y-4 border-t bg-muted/20 px-5 py-5">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Bình luận</h4>
            {comments.length === 0 && (
              <p className="text-sm text-muted-foreground">Chưa có bình luận — hãy là người đầu tiên.</p>
            )}
            <ul className="space-y-3">
              {comments.map((c) => (
                <li key={c.id} className="rounded-xl bg-background p-3 text-sm shadow-sm">
                  <p className="font-medium text-foreground">{c.author}</p>
                  <p className="mt-1 text-muted-foreground">{c.body}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.createdAt}</p>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Tên hiển thị (tuỳ chọn)"
              className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.4)]"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Viết bình luận..."
              rows={3}
              className="w-full resize-y rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.4)]"
            />
            <Button
              type="submit"
              className="rounded-full bg-[hsl(var(--vn-red))] hover:bg-[hsl(var(--vn-red)/0.9)]"
            >
              <Send className="size-4" />
              Gửi bình luận
            </Button>
          </form>
        </div>
      )}
    </article>
  )
}

export function StoriesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('Tất cả')
  const [comments, setComments] = useState<StoryComment[]>([])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return stories.filter((s) => {
      const catOk = category === 'Tất cả' || s.category === category
      const qOk =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.excerpt.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      return catOk && qOk
    })
  }, [query, category])

  const addComment = (storyId: string, author: string, body: string) => {
    const id = `c-${Date.now()}`
    const createdAt = new Date().toLocaleString('vi-VN')
    setComments((prev) => [...prev, { id, storyId, author, body, createdAt }])
  }

  const commentsByStory = (id: string) => comments.filter((c) => c.storyId === id)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto max-w-3xl space-y-10 px-4 py-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Mẩu chuyện</h1>
          <p className="text-muted-foreground">
            Sắp xếp theo chủ đề, tìm kiếm nhanh và chia sẻ cảm nghĩ bên dưới từng câu chuyện.
          </p>
        </header>

        <PromoBanners />

        <section aria-labelledby="stories-filter-heading" className="space-y-6">
          <h2 id="stories-filter-heading" className="sr-only">
            Lọc mẩu chuyện
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm theo tiêu đề hoặc nội dung..."
              className="h-11 w-full rounded-full border border-input bg-background pl-10 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {STORY_CATEGORIES.map((c) => (
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
          <p className="text-sm text-muted-foreground">{filtered.length} mẩu chuyện</p>
          <div className="space-y-5">
            {filtered.map((story) => (
              <StoryBlock
                key={story.id}
                story={story}
                comments={commentsByStory(story.id)}
                onAddComment={addComment}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-dashed py-12 text-center text-muted-foreground">
              Không có mẩu chuyện phù hợp.
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
