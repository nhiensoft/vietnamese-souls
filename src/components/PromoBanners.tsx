import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { label: 'Khám phá cảnh đẹp Việt Nam', to: '/explore' },
  { label: 'Lịch sử & di sản', to: '/explore' },
  { label: 'Trò chơi tương tác', to: '/explore#game' },
  { label: 'Sinh viên với tình yêu Việt Nam', to: '/stories' },
]

export function PromoBanners({ className }: { className?: string }) {
  return (
    <div className={cn('w-full space-y-3', className)}>
      <div
        className="rounded-2xl border border-emerald-700/20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-4 py-4 text-white shadow-lg sm:px-8 sm:py-5"
        role="region"
        aria-label="Thông tin nổi bật"
      >
        <p className="text-center text-sm font-medium text-emerald-50/95 sm:text-base">
          Chào mừng bạn đến với hành trình VIETNAMESE SOULS — khám phá, học hỏi và kết nối.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="inline-flex items-center gap-1 rounded-full bg-white/15 px-4 py-2 text-xs font-medium backdrop-blur-sm transition hover:bg-white/25 sm:text-sm"
            >
              {item.label}
              <ChevronRight className="size-3.5 opacity-80" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
