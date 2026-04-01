import { Link } from 'react-router-dom'
import { ChevronRight, Compass, BookOpen, Gamepad2, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { label: 'Khám phá cảnh đẹp Việt Nam', to: '/explore', icon: Compass },
  { label: 'Lịch sử & di sản', to: '/explore', icon: BookOpen },
  { label: 'Trò chơi tương tác', to: '/explore#game', icon: Gamepad2 },
  { label: 'Sinh viên với tình yêu Việt Nam', to: '/stories', icon: Heart },
]

export function PromoBanners({ className }: { className?: string }) {
  return (
    <div className={cn('w-full space-y-4', className)}>
      {/* Main banner */}
      <div
        className="overflow-hidden rounded-2xl border border-emerald-700/20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-5 py-6 text-white shadow-lg sm:px-8 sm:py-7"
        role="region"
        aria-label="Thông tin nổi bật"
      >
        <p className="text-center text-base font-bold sm:text-lg">
          Chào mừng bạn đến với hành trình VIETNAMESE SOULS
        </p>
        <p className="mt-1 text-center text-sm text-emerald-50/80">
          Khám phá, học hỏi và kết nối với văn hóa Việt Nam
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                to={item.to}
                className="group flex flex-col items-center gap-2 rounded-xl bg-white/10 px-3 py-4 text-center backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Icon className="size-6 text-emerald-200 transition-colors group-hover:text-white" strokeWidth={1.8} />
                <span className="text-xs font-medium leading-tight sm:text-sm">
                  {item.label}
                </span>
                <ChevronRight className="size-3.5 opacity-60" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Student banner */}
      <div className="overflow-hidden rounded-2xl border border-amber-600/20 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-5 py-5 text-white shadow-lg sm:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div>
            <p className="text-base font-bold sm:text-lg">
              Sinh viên với tình yêu Việt Nam
            </p>
            <p className="mt-0.5 text-sm text-white/80">
              Khám phá những câu chuyện đầy cảm hứng từ sinh viên Đại học Mở Hà Nội
            </p>
          </div>
          <Link
            to="/stories"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 transition-all hover:bg-white/90"
          >
            Đọc ngay
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
