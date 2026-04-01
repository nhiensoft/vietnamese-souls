import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Trang chủ' },
  { to: '/explore', label: 'Khám phá' },
  { to: '/stories', label: 'Mẩu chuyện' },
  { to: '/about', label: 'Về HOU' },
  { to: '/contact', label: 'Liên hệ' },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-zinc-900 text-zinc-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[hsl(var(--vn-gold))]">
            Thông tin về chúng tôi
          </h2>
        </div>

        <div className="grid gap-10 text-sm sm:grid-cols-3">
          {/* Links */}
          <div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="uppercase tracking-wide transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="font-semibold uppercase tracking-wide text-white">Liên hệ</h3>
            <p>024 3868 2299</p>
            <p>024 6297 4545</p>
            <p>
              <a href="mailto:daotao@hou.edu.vn" className="transition-colors hover:text-white">
                daotao@hou.edu.vn
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="font-semibold uppercase tracking-wide text-white">
              Hãy theo dõi thêm các bài đăng của chúng tôi tại:
            </h3>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} VIETNAMESE SOULS — Đại học Mở Hà Nội</p>
        </div>
      </div>
    </footer>
  )
}
