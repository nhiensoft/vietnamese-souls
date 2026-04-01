import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const nav = [
  { to: '/', label: 'Trang chủ' },
  { to: '/explore', label: 'Khám phá' },
  { to: '/stories', label: 'Mẩu chuyện' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[hsl(var(--vn-red))] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Bỏ qua đến nội dung chính
      </a>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-[hsl(var(--vn-red))]">
          VIETNAMESE SOULS
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
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
        </nav>
      </div>
    </header>
  )
}
