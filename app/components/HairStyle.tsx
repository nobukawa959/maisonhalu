'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const categories = ['すべて', '韓国ヘア', 'ワンホンヘア', '艶髪カラー', 'ライトニングWカラー']

const galleryItems = [
  { id: 1, image: '/images/hairstyle-1.jpg', categories: [] },
  { id: 2, image: '/images/hairstyle-2.jpg', categories: [] },
  { id: 3, image: '/images/hairstyle-3.jpg', categories: ['艶髪カラー', 'ワンホンヘア'] },
  { id: 4, image: '/images/hairstyle-4.jpg', categories: ['ライトニングWカラー', 'ワンホンヘア'] },
  { id: 5, image: '/images/hairstyle-5.jpg', categories: ['艶髪カラー', '韓国ヘア'] },
  { id: 6, image: '/images/hairstyle-6.jpg', categories: ['韓国ヘア', '艶髪カラー'] },
]

export default function HairStyle() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState('すべて')

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

  const isMatch = (item: typeof galleryItems[0]) =>
    activeCategory === 'すべて' || item.categories.includes(activeCategory)

  const filtered = galleryItems

  return (
    <section id="hairstyle" ref={sectionRef} className="py-24 md:py-36 px-6 relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C0C0C0]/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— GALLERY —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            HAIR STYLE
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">ヘアスタイルギャラリー</p>
        </div>

        {/* カテゴリーフィルター */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#7DD3F7] text-[#0A0A0F] font-medium'
                  : 'glass border border-white/10 text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ギャラリーグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal delay-${(i % 3) * 100} group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-opacity duration-400 ${isMatch(item) ? 'opacity-100' : 'opacity-25'}`}
            >
              <Image
                src={item.image}
                alt={item.categories.join(' / ') || 'ヘアスタイル'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* カテゴリータグ（ホバー時表示） */}
              {item.categories.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-wrap gap-1">
                  {item.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block px-3 py-1 rounded-full text-xs tracking-wider glass-accent text-[#7DD3F7] border border-[#7DD3F7]/30"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div className="reveal text-center mt-12">
          <p className="text-sm text-[#C0C0C0]/60 mb-4">さらに多くのスタイルはInstagramで</p>
          <a
            href="https://www.instagram.com/maison_halu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-[#C0C0C0]/20 text-sm text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @maison_halu を見る
          </a>
        </div>
      </div>
    </section>
  )
}
