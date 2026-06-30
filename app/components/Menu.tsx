'use client'

import { useEffect, useRef } from 'react'
import { menuCategories } from '@/data/menu'

export default function Menu() {
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
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 md:py-36 px-6 relative overflow-hidden"
    >
      {/* 背景デコレーション */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7DD3F7]/3 rounded-full blur-[80px]" />

      <div className="max-w-4xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— PRICE LIST —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            MENU
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">メニュー・料金</p>
        </div>

        {/* メニューカテゴリー */}
        <div className="space-y-8">
          {menuCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`reveal delay-${(catIndex + 1) * 100}`}
            >
              {/* カテゴリーヘッダー */}
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-serif text-lg tracking-[0.2em] text-[#7DD3F7]">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#7DD3F7]/40 to-transparent" />
              </div>

              {/* メニューアイテム */}
              <div className="glass rounded-2xl overflow-hidden border border-white/10">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className={`group flex items-center justify-between px-6 py-5 hover:bg-white/5 transition-colors duration-300 ${
                      itemIndex !== category.items.length - 1
                        ? 'border-b border-white/5'
                        : ''
                    }`}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-[#E8E8E8] tracking-wide group-hover:text-[#7DD3F7] transition-colors duration-300">
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="text-xs text-[#C0C0C0]/60 mt-1">{item.description}</p>
                      )}
                    </div>
                    <p className="font-serif text-lg text-[#C0C0C0] ml-6 whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 注意書き */}
        <div className="reveal mt-10 p-6 rounded-xl glass-accent border border-[#7DD3F7]/20">
          <p className="text-xs text-[#C0C0C0]/70 leading-loose text-center">
            ※ 料金はすべて税込表示です。<br />
            ※ 髪の長さ・量・状態によってカウンセリング後に料金が変動する場合があります。<br />
            ※ 詳しくはInstagramのDM、またはお電話にてお気軽にご相談ください。
          </p>
        </div>

        {/* 予約CTAボタン */}
        <div className="reveal text-center mt-10">
          <a
            href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000311760&add=1&addMenu=1&rootCd=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)',
              color: '#0A0A0F',
            }}
          >
            メニューを選んで予約する
          </a>
        </div>
      </div>
    </section>
  )
}
