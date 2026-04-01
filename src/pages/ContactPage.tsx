import { type FormEvent, useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [patriotism, setPatriotism] = useState('')
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setPatriotism('')
    setRating(0)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-14 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Thảo luận
            </h1>
            <p className="mt-3 text-lg text-red-100">
              Hãy cho <span className="font-bold">VIETNAMESE SOULS</span> biết được cảm nhận của bạn về web của chúng mình nhé!
            </p>
            <p className="mt-1 text-sm text-red-200">
              Cảm ơn các bạn đã ghé thăm!
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-8 py-12 text-center">
                  <p className="text-lg font-semibold text-green-700">Cảm ơn bạn đã chia sẻ!</p>
                  <p className="mt-2 text-sm text-green-600">Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="ct-name" className="text-sm font-medium">Họ và Tên *</label>
                    <input
                      id="ct-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 flex h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
                      placeholder="Họ và Tên"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-email" className="text-sm font-medium">Email *</label>
                    <input
                      id="ct-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 flex h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
                      placeholder="example@domain.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-phone" className="text-sm font-medium">Điện thoại</label>
                    <input
                      id="ct-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1.5 flex h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-patriot" className="text-sm font-medium">
                      Trong trái tim bạn, tình yêu Tổ quốc là gì?
                    </label>
                    <textarea
                      id="ct-patriot"
                      value={patriotism}
                      onChange={(e) => setPatriotism(e.target.value)}
                      rows={3}
                      className="mt-1.5 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
                      placeholder="Chia sẻ suy nghĩ của bạn..."
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-msg" className="text-sm font-medium">
                      Làm thế nào để thể hiện lòng yêu nước?
                    </label>
                    <textarea
                      id="ct-msg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="mt-1.5 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
                      placeholder="Chia sẻ suy nghĩ của bạn..."
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Đánh giá sao cho chúng mình nhé!</p>
                    <div className="mt-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="text-2xl transition-colors"
                          aria-label={`${star} sao`}
                        >
                          <span className={star <= rating ? 'text-amber-400' : 'text-zinc-300'}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-[hsl(var(--vn-red))] font-semibold hover:bg-[hsl(var(--vn-red)/0.9)]"
                  >
                    Gửi ngay nào!
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6 md:col-span-2">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold">Thông tin liên hệ</h2>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-[hsl(var(--vn-red))]" />
                    <div>
                      <p>024 3868 2299</p>
                      <p>024 6297 4545</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-[hsl(var(--vn-red))]" />
                    <a href="mailto:daotao@hou.edu.vn" className="hover:text-foreground">
                      daotao@hou.edu.vn
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[hsl(var(--vn-red))]" />
                    <p>Trường Đại học Mở Hà Nội</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold">Theo dõi chúng tôi</h2>
                <div className="mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
