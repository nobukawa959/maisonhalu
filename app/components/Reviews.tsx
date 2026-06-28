'use client'

import { useEffect, useRef } from 'react'
import { reviews } from '@/data/reviews'
import { siteConfig } from '@/data/siteConfig'

// 星評価コンポーネント
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-[#FFD700]' : 'text-[#C0C0C0]/20'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="reviews" ref={sectionRef} className="py-24 md:py-36 px-6 relative">
      {/* 背景デコレーション */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— CUSTOMER VOICE —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            REVIEWS
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">お客様の声</p>
        </div>

        {/* 口コミカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`reveal delay-${(i + 1) * 100} group relative p-6 rounded-2xl glass border border-white/10 hover:border-[#7DD3F7]/30 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* 引用符デコレーション */}
              <div className="absolute top-4 right-5 text-5xl text-[#7DD3F7]/10 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* 星評価 */}
              <StarRating rating={review.rating} />

              {/* 口コミテキスト */}
              <p className="mt-4 text-sm text-[#E8E8E8]/80 leading-loose">{review.text}</p>

              {/* 区切り線 */}
              <div className="w-8 h-px bg-gradient-to-r from-[#7DD3F7]/40 to-transparent my-4 group-hover:w-16 transition-all duration-500" />

              {/* 投稿者情報 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#C0C0C0]">{review.name}</p>
                  <p className="text-xs text-[#C0C0C0]/50 mt-0.5">{review.date}</p>
                </div>
                {/* Googleアイコン */}
                <svg className="w-5 h-5 text-[#C0C0C0]/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href={siteConfig.googleMap.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full text-sm tracking-wider font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)',
              color: '#0A0A0F',
            }}
          >
            Google で口コミを書く
          </a>
          <a
            href={siteConfig.googleMap.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass border border-white/15 text-sm tracking-wider text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
          >
            すべての口コミを見る
          </a>
        </div>
      </div>
    </section>
  )
}
