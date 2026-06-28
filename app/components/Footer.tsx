import { siteConfig } from '@/data/siteConfig'

// フッターナビ
const footerLinks = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: 'ヘアスタイル', href: '#hairstyle' },
  { label: 'スタイリスト', href: '#stylist' },
  { label: '口コミ', href: '#reviews' },
  { label: 'アクセス', href: '#access' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-16 pb-32 md:pb-16 px-6 border-t border-white/5">
      {/* 背景グロー */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1520]/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* ブランド情報 */}
          <div>
            <p className="text-xs tracking-[0.3em] text-[#7DD3F7]/60 mb-2">HAIR SALON</p>
            <h2 className="font-serif font-light text-2xl text-gradient tracking-[0.3em] mb-4">
              MAISON HALU
            </h2>
            <p className="text-xs text-[#C0C0C0]/60 leading-loose mb-6">
              {siteConfig.tagline}
            </p>
            {/* SNSリンク */}
            <div className="flex gap-4">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-[#C0C0C0]/60 hover:text-[#7DD3F7] hover:border-[#7DD3F7]/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-[#C0C0C0]/60 hover:text-[#7DD3F7] hover:border-[#7DD3F7]/40 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <p className="text-xs tracking-[0.3em] text-[#C0C0C0]/50 mb-4 uppercase">Navigation</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#C0C0C0]/60 hover:text-[#7DD3F7] transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* 店舗情報 */}
          <div>
            <p className="text-xs tracking-[0.3em] text-[#C0C0C0]/50 mb-4 uppercase">Info</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#C0C0C0]/40 mb-0.5">住所</p>
                <p className="text-sm text-[#C0C0C0]/80">{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-xs text-[#C0C0C0]/40 mb-0.5">電話</p>
                <a href={siteConfig.telHref} className="text-sm text-[#C0C0C0]/80 hover:text-[#7DD3F7] transition-colors">
                  {siteConfig.tel}
                </a>
              </div>
              <div>
                <p className="text-xs text-[#C0C0C0]/40 mb-0.5">定休日</p>
                <p className="text-sm text-[#C0C0C0]/80">{siteConfig.holiday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* コピーライト */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-[#C0C0C0]/30 tracking-wider">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#C0C0C0]/20 tracking-wider">
            広島市中区袋町7-32 2F
          </p>
        </div>
      </div>
    </footer>
  )
}
