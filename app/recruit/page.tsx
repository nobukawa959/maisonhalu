import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: '採用情報 | MAISON HALU',
  description: '広島・袋町のトレンドサロン MAISON HALU の採用情報。一緒に「なりたい」を叶えるスタイリストを募集しています。',
}

const strengths = [
  {
    title: '技術力を磨ける環境',
    description: 'トレンドレイヤーカット・艶髪カラー・ケラチントリートメントなど、専門性の高い技術を学びながら成長できます。',
  },
  {
    title: '個性を活かせる指名制',
    description: 'スタイリスト一人ひとりの得意分野・世界観を大切にし、指名で選ばれる美容師を目指せます。',
  },
  {
    title: 'トレンドを発信できる',
    description: 'SNS発信やビフォーアフター撮影など、技術だけでなく発信力も身につけられる環境です。',
  },
]

const jobInfo = [
  { label: '募集職種', value: '美容師（スタイリスト・アシスタント）' },
  { label: '雇用形態', value: '正社員 / 業務委託 ご相談ください' },
  { label: '給与', value: '経験・スキルに応じて応相談' },
  { label: '勤務時間', value: siteConfig.hours },
  { label: '休日', value: siteConfig.holiday },
  { label: '待遇', value: '技術研修あり・SNS発信サポートあり（詳細はご相談ください）' },
]

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— WE ARE HIRING —</p>
            <h1 className="font-serif font-light text-4xl md:text-6xl text-gradient mb-6 tracking-wider">
              RECRUIT
            </h1>
            <p className="text-sm text-[#C0C0C0]/60 tracking-wider">採用情報</p>
          </div>

          {/* メッセージ */}
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <p className="font-serif text-lg text-[#E8E8E8]/80 leading-relaxed mb-4">
              あなたの「なりたい」を、一緒に叶える仲間へ。
            </p>
            <p className="text-sm text-[#C0C0C0]/70 leading-loose">
              MAISON HALUは、広島・袋町のトレンドサロン。<br />
              中韓 MIX トレンドと技術力を大切にしながら、<br />
              スタイリスト一人ひとりが指名で選ばれるサロンを目指しています。<br />
              経験者はもちろん、これから技術を磨いていきたい方も歓迎です。
            </p>
          </div>

          {/* 選ばれる理由 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl glass border border-white/10 hover:border-[#7DD3F7]/30 transition-all duration-500"
              >
                <h3 className="font-serif font-medium text-lg text-[#E8E8E8] mb-3">{item.title}</h3>
                <div className="w-8 h-px bg-gradient-to-r from-[#7DD3F7] to-transparent mb-4" />
                <p className="text-sm text-[#C0C0C0]/70 leading-loose">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 募集要項 */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— JOB INFO —</p>
              <h2 className="font-serif font-light text-3xl text-gradient tracking-wider">募集要項</h2>
            </div>
            <div className="glass rounded-2xl overflow-hidden border border-white/10">
              {jobInfo.map((info, i) => (
                <div
                  key={info.label}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-5 ${
                    i !== jobInfo.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <p className="w-32 flex-shrink-0 text-xs tracking-wider text-[#7DD3F7]">{info.label}</p>
                  <p className="text-sm text-[#E8E8E8]">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 応募方法 */}
          <div className="text-center">
            <p className="text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— APPLY —</p>
            <h2 className="font-serif font-light text-3xl text-gradient tracking-wider mb-6">応募方法</h2>
            <p className="text-sm text-[#C0C0C0]/70 leading-loose mb-10">
              ご応募・お問い合わせは、Instagram DM またはお電話にて承っております。<br />
              まずはお気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-sm tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7DD3F7, #38BDF8)', color: '#0A0A0F' }}
              >
                Instagram DM で問い合わせる
              </a>
              <a
                href={siteConfig.telHref}
                className="px-8 py-4 rounded-full border border-[#7DD3F7]/30 text-sm tracking-[0.2em] text-[#E8E8E8] hover:border-[#7DD3F7]/70 hover:text-[#7DD3F7] transition-all duration-300 hover:scale-105"
              >
                {siteConfig.tel}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
