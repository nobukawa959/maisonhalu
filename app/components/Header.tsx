'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/data/siteConfig'

// ナビゲーションリンク定義
const navLinks = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: 'スタイリスト', href: '#stylist' },
  { label: 'アクセス', href: '#access' },
  { label: '予約', href: siteConfig.instagram.url, external: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // スクロール検知：透明 → ガラスモーフィズム
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // メニュー開閉でbodyスクロール制御
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ロゴ */}
            <a
              href="#"
              className="font-serif font-light tracking-[0.3em] text-lg md:text-xl text-gradient hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              MAISON HALU
            </a>

            {/* デスクトップナビ */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full glass-accent text-[#7DD3F7] text-sm font-medium tracking-wider hover:bg-[#7DD3F7]/20 transition-all duration-300 animate-pulse-glow"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-silver-light tracking-wider hover:text-[#7DD3F7] transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7DD3F7] group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </nav>

            {/* ハンバーガーボタン（スマホ） */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニューを開く"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10, 10, 15, 0.97)', backdropFilter: 'blur(20px)' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-full glass-accent text-[#7DD3F7] text-lg font-medium tracking-widest transition-all duration-300 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-2xl font-serif font-light tracking-[0.25em] text-white hover:text-[#7DD3F7] transition-all duration-300 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {link.label}
              </button>
            )
          )}
          {/* SNSリンク */}
          <div
            className={`flex gap-6 mt-4 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-silver tracking-wider hover:text-[#7DD3F7] transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-silver tracking-wider hover:text-[#7DD3F7] transition-colors"
            >
              TikTok
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
