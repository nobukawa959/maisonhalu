'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { stylists } from '@/data/stylists'

export default function Stylist() {
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
    <section id="stylist" ref={sectionRef} className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* 背景デコレーション */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#7DD3F7]/3 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— OUR TEAM —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            STYLIST
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">スタイリスト紹介</p>
        </div>

        {/* スタイリストカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stylists.map((stylist, i) => (
            <div
              key={stylist.id}
              className={`reveal delay-${(i + 1) * 100} group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-[#7DD3F7]/30 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* グローエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7DD3F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* 画像エリア */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* 下部グラデーション */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
              </div>

              {/* テキストエリア */}
              <div className="p-6">
                {/* 名前 */}
                <h3 className="font-serif text-xl font-bold text-[#E8E8E8] mb-1 tracking-widest">{stylist.name}</h3>

                {/* 役職 */}
                <p className="text-xs text-[#C0C0C0]/50 tracking-wider mb-3">{stylist.role}</p>

                {/* キャッチコピー */}
                <p className="text-sm font-bold text-[#7DD3F7] mb-3 leading-snug">{(stylist as any).catchCopy}</p>

                {/* 区切り線 */}
                <div className="w-8 h-px bg-gradient-to-r from-[#7DD3F7] to-transparent mb-4 group-hover:w-14 transition-all duration-500" />

                {/* プロフィール文 */}
                <p className="text-sm text-[#C0C0C0]/70 leading-loose mb-5">{stylist.bio}</p>

                {/* 得意分野タグ */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {stylist.specialty.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs glass-accent border border-[#7DD3F7]/20 text-[#7DD3F7]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Instagramリンク */}
                <a
                  href={stylist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#C0C0C0]/60 hover:text-[#7DD3F7] transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  {(stylist as any).instagramHandle ?? 'Instagram'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
