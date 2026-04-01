import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const nav = [
  { to: '/', label: 'Trang chủ' },
  { to: '/explore', label: 'Khám phá' },
  { to: '/stories', label: 'Mẩu chuyện' },
  { to: '/about', label: 'Về HOU' },
  { to: '/contact', label: 'Liên hệ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[hsl(var(--vn-red))] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Bỏ qua đến nội dung chính
      </a>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-[hsl(var(--vn-red))]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--vn-red))] text-xs font-extrabold text-white">
            VS
          </span>
          VIETNAMESE SOULS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[hsl(var(--vn-red)/0.12)] text-[hsl(var(--vn-red))]'
                    : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--vn-red))] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[hsl(var(--vn-red)/0.9)]"
          >
            Đăng nhập
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[hsl(var(--vn-red)/0.12)] text-[hsl(var(--vn-red))]'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-[hsl(var(--vn-red))] px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              Đăng nhập
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
