'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/data/siteConfig'

// アクセス情報
const accessInfo = [
  {
    icon: '📍',
    label: '住所',
    value: siteConfig.address,
  },
  {
    icon: '📞',
    label: '電話番号',
    value: siteConfig.tel,
    href: siteConfig.telHref,
  },
  {
    icon: '🗓',
    label: '定休日',
    value: siteConfig.holiday,
  },
  {
    icon: '🕐',
    label: '営業時間',
    value: siteConfig.hours,
  },
]

export default function Access() {
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
    <section id="access" ref={sectionRef} className="py-24 md:py-36 px-6 relative">
      {/* 背景デコレーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1520]/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— LOCATION —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            ACCESS
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">アクセス</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Google Map */}
          <div className="reveal-left">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video map-container">
              {/*
                Google Mapの更新方法：
                1. Google Maps で「MAISON HALU」を検索
                2. 「共有」→「地図を埋め込む」をクリック
                3. 生成されたiframeのsrcをdata/siteConfig.tsのgoogleMap.embedUrlに設定
              */}
              <iframe
                src={siteConfig.googleMap.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAISON HALU の地図"
              />
            </div>
          </div>

          {/* アクセス情報 */}
          <div className="reveal-right space-y-4">
            {/* 店舗名 */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.4em] text-[#7DD3F7]/70 mb-1">HAIR SALON</p>
              <h3 className="font-serif text-3xl text-gradient tracking-wider">MAISON HALU</h3>
            </div>

            {/* 情報リスト */}
            {accessInfo.map((info) => (
              <div
                key={info.label}
                className="flex gap-4 p-5 rounded-xl glass border border-white/8 hover:border-[#7DD3F7]/20 transition-colors duration-300"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{info.icon}</span>
                <div>
                  <p className="text-xs text-[#C0C0C0]/50 tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#E8E8E8] hover:text-[#7DD3F7] transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[#E8E8E8] font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {/* Googleマップで開く */}
              <a
                href={siteConfig.googleMap.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-xl text-sm tracking-wider font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)',
                  color: '#0A0A0F',
                }}
              >
                📍 Googleマップで開く
              </a>

              {/* ルート案内 */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-xl glass border border-white/15 text-sm tracking-wider text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
              >
                🚗 ルート案内
              </a>
            </div>

            {/* 電話ボタン */}
            <a
              href={siteConfig.telHref}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl glass border border-white/10 text-sm tracking-wider text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
            >
              📞 {siteConfig.tel} に電話する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
