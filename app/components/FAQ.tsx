'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/data/siteConfig'

const faqs = [
  {
    q: '初めてでも安心して通えますか？',
    a: 'もちろんです。骨格・髪質・ライフスタイルを丁寧にお伺いするカウンセリングから始めますので、イメージが曖昧な状態でもご相談いただけます。',
  },
  {
    q: '予約はどうすればいいですか？',
    a: 'Instagram DM、お電話、またはホットペッパービューティーからご予約いただけます。お好きな方法でご連絡ください。',
  },
  {
    q: 'カットなしでカラーやトリートメントだけの利用は可能ですか？',
    a: '可能です。トリートメントやカラーのみのご利用も承っておりますので、お気軽にご相談ください。',
  },
  {
    q: 'スタイリストを指名できますか？',
    a: 'はい、指名可能です。各スタイリストの得意分野はスタイリスト紹介ページをご覧の上、お好みのスタイリストをご指定ください。',
  },
  {
    q: '駐車場はありますか？',
    a: '専用駐車場はございません。お近くのコインパーキングをご利用ください。お車でお越しの際は事前にご相談いただけるとスムーズです。',
  },
  {
    q: 'キャンセル・日時変更はできますか？',
    a: 'ご予約の変更・キャンセルは、できるだけ早めにInstagram DMまたはお電話にてご連絡ください。',
  },
  {
    q: '学生でも利用できますか？',
    a: '高校生以下限定のメニューもご用意しております。学生の方もぜひお気軽にご来店ください。',
  },
  {
    q: 'お支払い方法を教えてください。',
    a: '現金のほか各種キャッシュレス決済に対応しております。詳しくは店舗までお問い合わせください。',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
    <section id="faq" ref={sectionRef} className="py-24 md:py-36 px-6 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#7DD3F7]/3 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— FAQ —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            初めての方へ
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">よくあるご質問</p>
        </div>

        {/* FAQリスト */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className={`reveal delay-${(i % 3) * 100} rounded-2xl glass border border-white/10 overflow-hidden transition-colors duration-300 hover:border-[#7DD3F7]/25`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#7DD3F7] font-serif mt-0.5 flex-shrink-0">Q.</span>
                    <span className="text-sm text-[#E8E8E8] tracking-wide leading-relaxed">{faq.q}</span>
                  </div>
                  <span
                    className={`text-[#7DD3F7]/60 text-lg flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 flex items-start gap-3">
                      <span className="text-sm text-[#C0C0C0]/40 font-serif mt-0.5 flex-shrink-0">A.</span>
                      <p className="text-sm text-[#C0C0C0]/70 leading-loose">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 補足 */}
        <div className="reveal text-center mt-12">
          <p className="text-sm text-[#C0C0C0]/60 mb-4">他にもご不明な点があればお気軽にご相談ください</p>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/15 text-sm text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
          >
            Instagram DM で質問する →
          </a>
        </div>
      </div>
    </section>
  )
}
