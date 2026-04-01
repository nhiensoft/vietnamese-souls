import { type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

export function CommunityForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
    setName('')
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-[hsl(var(--vn-red))] py-14 text-white">
      <div className="container mx-auto max-w-lg px-4 text-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Hãy tham gia cộng đồng của chúng tôi
        </h2>
        {submitted ? (
          <p className="mt-6 rounded-xl bg-white/20 px-6 py-4 font-medium">
            Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ và Tên"
              aria-label="Họ và Tên"
              className="h-12 w-full rounded-xl border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/60 focus:ring-2 focus:ring-white/30"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="h-12 w-full rounded-xl border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/60 focus:ring-2 focus:ring-white/30"
            />
            <Button
              type="submit"
              className="w-full rounded-full bg-[hsl(var(--vn-gold))] font-semibold text-[hsl(var(--vn-gold-fg))] hover:bg-[hsl(var(--vn-gold-hover))]"
              size="lg"
            >
              Tham gia
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
