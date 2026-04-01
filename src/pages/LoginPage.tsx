import { Link } from 'react-router-dom'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'

export function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-bold tracking-tight">Đăng nhập</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Khu vực đăng nhập dành cho thành viên dự án. Tích hợp SSO hoặc tài khoản nội bộ sẽ được
          bổ sung sau.
        </p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-1.5 flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-1.5 flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--vn-red)/0.45)]"
            />
          </div>
          <Button type="submit" className="w-full rounded-full bg-[hsl(var(--vn-red))]">
            Đăng nhập
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="font-medium text-[hsl(var(--vn-red))] hover:underline">
            ← Về trang chính
          </Link>
        </p>
      </main>
    </div>
  )
}
