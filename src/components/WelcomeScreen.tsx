import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HandHelping, Mountain, UtensilsCrossed, HeartHandshake, Vote } from 'lucide-react'

const floatIcons = [
  { icon: HandHelping, label: 'Đoàn kết COVID', style: 'left-[6%] top-[18%]', color: 'text-rose-500' },
  { icon: Mountain, label: 'Cảnh đẹp', style: 'right-[8%] top-[22%]', color: 'text-emerald-500' },
  { icon: UtensilsCrossed, label: 'Ẩm thực', style: 'left-[10%] bottom-[28%]', color: 'text-amber-500' },
  { icon: HeartHandshake, label: 'Tình nguyện', style: 'right-[12%] bottom-[32%]', color: 'text-green-500' },
  { icon: Vote, label: 'Bầu cử', style: 'left-[18%] top-[42%]', color: 'text-blue-500' },
]

function ThreeGirlsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 280"
      className={cn('mx-auto w-full max-w-md drop-shadow-xl', className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="dress" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="255" rx="160" ry="18" fill="rgb(0 0 0 / 0.08)" />
      {/* Left girl */}
      <g>
        <ellipse cx="95" cy="78" rx="22" ry="24" fill="#fecaca" />
        <path
          d="M75 95 L68 125 L58 195 L132 195 L118 125 L115 95 Z"
          fill="url(#dress)"
          stroke="#b45309"
          strokeWidth="1.2"
        />
        <path d="M115 100 L135 108 L138 125" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
        <path d="M68 108 L52 72 L48 58" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* Center girl */}
      <g>
        <ellipse cx="210" cy="72" rx="24" ry="26" fill="#fecaca" />
        <path
          d="M185 92 L175 128 L165 200 L255 200 L245 128 L235 92 Z"
          fill="url(#dress)"
          stroke="#b45309"
          strokeWidth="1.2"
        />
        <path d="M175 105 L155 115" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
        <path d="M245 105 L265 115" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* Right girl */}
      <g>
        <ellipse cx="325" cy="78" rx="22" ry="24" fill="#fecaca" />
        <path
          d="M305 95 L298 125 L288 195 L362 195 L348 125 L345 95 Z"
          fill="url(#dress)"
          stroke="#b45309"
          strokeWidth="1.2" />
        <path d="M345 100 L365 108 L368 125" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
        <path d="M372 108 L388 72 L392 58" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function ArcTitle() {
  return (
    <div className="welcome-arc-title relative mx-auto w-full max-w-2xl px-2">
      <svg viewBox="0 0 520 100" className="h-20 w-full sm:h-24" aria-hidden>
        <defs>
          <path id="welcomeArcPath" d="M 24 78 Q 260 6 496 78" fill="none" />
        </defs>
        <text
          fill="hsl(var(--vn-red))"
          className="font-sans text-[19px] font-extrabold tracking-[0.14em] sm:text-[22px]"
        >
          <textPath href="#welcomeArcPath" startOffset="50%" textAnchor="middle">
            VIETNAMESE SOULS
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export function WelcomeScreen() {
  return (
    <div className="welcome-root relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-amber-50/80 to-white">
      <div className="welcome-bg pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
      </div>

      {floatIcons.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={item.label}
            className={cn(
              'welcome-float-in pointer-events-none absolute',
              item.style
            )}
            style={{
              animationDelay: `${0.85 + i * 0.1}s`,
              animationFillMode: 'forwards',
            }}
            title={item.label}
            aria-hidden
          >
            <span className="inline-flex items-center justify-center rounded-full bg-white/60 p-2.5 shadow-md backdrop-blur-sm">
              <Icon className={cn('size-6 sm:size-7', item.color)} strokeWidth={1.8} />
            </span>
          </div>
        )
      })}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 pt-10 sm:pt-14">
        <div
          className="welcome-chars w-full opacity-0"
          style={{ animation: 'welcomePop 0.85s ease 0.35s forwards' }}
        >
          <ThreeGirlsIllustration />
        </div>

        <div
          className="-mt-4 w-full opacity-0 sm:-mt-6"
          style={{ animation: 'welcomeFade 1s ease 0.5s forwards' }}
        >
          <ArcTitle />
        </div>

        <div
          className="welcome-copy mt-8 max-w-xl space-y-4 text-center opacity-0"
          style={{ animation: 'welcomeRise 0.9s ease 1.2s forwards' }}
        >
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Chào mừng đến với{' '}
            <span className="text-[hsl(var(--vn-red))]">VIETNAMESE SOULS</span>
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Một dự án được thực hiện bởi sinh viên Trường Đại học Mở Hà Nội — nơi dẫn dắt bạn
            khám phá vẻ đẹp Việt Nam qua câu chuyện, con người và những trải nghiệm tương tác đầy
            cảm hứng.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full min-w-[160px] rounded-full border-2 sm:w-auto"
              asChild
            >
              <Link to="/login">Đăng nhập</Link>
            </Button>
            <Button
              size="lg"
              className="w-full min-w-[180px] rounded-full bg-[hsl(var(--vn-gold))] font-semibold text-[hsl(var(--vn-gold-fg))] shadow-md hover:bg-[hsl(var(--vn-gold-hover))]"
              asChild
            >
              <Link to="/explore">Khám phá ngay</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
