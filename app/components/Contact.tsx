'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/data/siteConfig'

// 予約方法の選択肢
const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    title: 'Instagram DM',
    description: 'Instagramのダイレクトメッセージからご予約いただけます。スタイルの相談もお気軽に。',
    buttonLabel: 'DMで予約する',
    href: siteConfig.instagram.url,
    external: true,
    accent: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    title: 'お電話',
    description: 'お急ぎの方はお電話でもご相談承ります。',
    buttonLabel: siteConfig.tel,
    href: siteConfig.telHref,
    external: false,
    accent: false,
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* 背景デコレーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A1F]/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7DD3F7]/3 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— GET IN TOUCH —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            CONTACT
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider mb-4">お問い合わせ・ご予約</p>
          <p className="reveal delay-300 text-sm text-[#C0C0C0]/70 leading-loose">
            ご予約はInstagram DMにてお気軽にお申し付けください。<br />
            カット・カラー・トリートメントなど、施術のご相談もお受けしております。
          </p>
        </div>

        {/* 予約方法カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, i) => (
            <div
              key={method.title}
              className={`reveal delay-${(i + 1) * 100} group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                method.accent
                  ? 'glass-accent border-[#7DD3F7]/20 hover:border-[#7DD3F7]/50'
                  : 'glass border-white/10 hover:border-white/20'
              }`}
            >
              {/* グローエフェクト */}
              {method.accent && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7DD3F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}

              {/* アイコン */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  method.accent
                    ? 'text-[#7DD3F7]'
                    : 'text-[#C0C0C0]'
                }`}
                style={{
                  background: method.accent
                    ? 'rgba(125, 211, 247, 0.1)'
                    : 'rgba(192, 192, 192, 0.1)',
                }}
              >
                {method.icon}
              </div>

              {/* タイトル */}
              <h3
                className={`font-serif text-xl mb-3 ${
                  method.accent ? 'text-[#7DD3F7]' : 'text-[#E8E8E8]'
                }`}
              >
                {method.title}
              </h3>

              {/* 説明文 */}
              <p className="text-sm text-[#C0C0C0]/70 leading-loose mb-6">{method.description}</p>

              {/* ボタン */}
              <a
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wider font-medium transition-all duration-300 hover:scale-105 ${
                  method.accent
                    ? 'text-[#0A0A0F]'
                    : 'glass border border-white/15 text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7]'
                }`}
                style={
                  method.accent
                    ? { background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)' }
                    : {}
                }
              >
                {method.buttonLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* 補足テキスト */}
        <div className="reveal mt-10 text-center">
          <p className="text-xs text-[#C0C0C0]/50 leading-loose">
            ご予約の際は、ご希望の施術・日時・お名前をお知らせください。<br />
            定休日：{siteConfig.holiday}
          </p>
        </div>
      </div>
    </section>
  )
}
