'use client'

import { useEffect, useRef } from 'react'

// コンセプトの強み3項目
const strengths = [
  {
    icon: '—',
    title: 'ワンホンレイヤーカット',
    titleEn: 'Korean Layer Cut',
    description:
      '韓国トレンドを取り入れた繊細なレイヤーカット。骨格と髪質を見極めながら、動くたびに美しいフォルムを作り出します。',
  },
  {
    icon: '◇',
    title: '艶髪カラー',
    titleEn: 'Glossy Hair Color',
    description:
      '光を受けるたびに輝く、ツヤと透明感のカラーリング。ダメージを抑えながらトレンドカラーを再現します。',
  },
  {
    icon: '×',
    title: 'ケラチントリートメント',
    titleEn: 'Keratin Treatment',
    description:
      '縮毛矯正なしでまとまる理想の質感へ。毎朝のスタイリングが格段に楽になる、髪質改善の決定版。',
  },
]

export default function Concept() {
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer でスクロールアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="concept" ref={sectionRef} className="py-24 md:py-36 px-6 max-w-6xl mx-auto">
      {/* セクションヘッダー */}
      <div className="text-center mb-20">
        <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— OUR CONCEPT —</p>
        <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-8 tracking-wider">
          CONCEPT
        </h2>
        <div className="reveal delay-200 max-w-2xl mx-auto">
          <p className="font-serif text-lg text-[#E8E8E8]/80 leading-relaxed mb-4">
            あなたの「なりたい」を、ここで叶える。
          </p>
          <p className="text-sm text-[#C0C0C0]/70 leading-loose">
            MAISON HALUは、広島・袋町のトレンドサロン。<br />
            中韓 MIX トレンドと似合わせを両立した<br />
            「今まで最上級」のスタイルを提案します。<br />
            骨格・髪質・ライフスタイルに合わせた丁寧なカウンセリングで、<br />
            あなただけのヘアをご提案します。
          </p>
        </div>
      </div>

      {/* 強み3つのカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strengths.map((item, i) => (
          <div
            key={item.title}
            className={`reveal delay-${(i + 1) * 100} group relative p-8 rounded-2xl glass border border-white/10 hover:border-[#7DD3F7]/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 cursor-default`}
          >
            {/* グローエフェクト */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7DD3F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* アイコン */}
            <div className="text-4xl mb-6">{item.icon}</div>

            {/* 英語サブタイトル */}
            <p className="text-xs tracking-[0.3em] text-[#7DD3F7]/70 mb-2">{item.titleEn}</p>

            {/* タイトル */}
            <h3 className="font-serif font-medium text-xl text-[#E8E8E8] mb-4 leading-tight">
              {item.title}
            </h3>

            {/* 区切り線 */}
            <div className="w-8 h-px bg-gradient-to-r from-[#7DD3F7] to-transparent mb-4 group-hover:w-16 transition-all duration-500" />

            {/* 説明文 */}
            <p className="text-sm text-[#C0C0C0]/70 leading-loose">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
