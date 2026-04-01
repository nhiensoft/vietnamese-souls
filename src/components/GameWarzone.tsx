import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

const GAME_URL = 'https://web-battlegrounds.lovable.app/'

export function GameWarzone({ className }: { className?: string }) {
  return (
    <section
      id="game"
      className={cn(
        'scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-xl',
        className
      )}
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 bg-muted/40 p-8 md:p-10">
          <span className="inline-flex w-fit rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-destructive">
            WARZONE
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Câu chuyện lính trẻ trên đường bảo vệ Tổ quốc
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Một khung truyện ngắn về sự dũng cảm của những người lính trong Chiến dịch Hồ Chí
            Minh — nơi đồng đội, hy sinh và khát vọng hòa bình hòa quyện. Hình ảnh nhân vật gợi
            nhớ hình bóng người chiến sĩ: kiên định giữa lửa đạn.
          </p>
          <p className="text-xs text-muted-foreground">
            Nhấn Play để mở trải nghiệm game (liên kết bên ngoài).
          </p>
        </div>
        <a
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex min-h-[220px] cursor-pointer items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-950 md:min-h-[280px]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 40%, rgba(220,38,38,0.35), transparent 50%), radial-gradient(circle at 70% 60%, rgba(234,179,8,0.2), transparent 45%)',
            }}
          />
          <div className="relative flex flex-col items-center gap-4">
            <div className="flex h-24 w-20 flex-col items-center justify-end rounded-t-lg border-2 border-amber-700/60 bg-gradient-to-b from-stone-600 to-stone-800 shadow-lg">
              <div className="mb-2 h-10 w-14 rounded-sm border border-stone-500/50 bg-stone-700/80" />
            </div>
            <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-stone-300">
              Hình bộ đội — minh họa
            </span>
            <span className="flex h-16 w-28 items-center justify-center rounded-xl bg-[#c41e1e] text-white shadow-lg transition-all duration-200 group-hover:scale-105 group-hover:bg-[#a01818]">
              <Play className="size-9 fill-current" aria-hidden />
              <span className="sr-only">Play</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
