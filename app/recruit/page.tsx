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
    title: '受賞実績のあるサロン',
    description: 'カミカリスマアワード「カラー部門」受賞、ホットペッパービューティーアワード連続受賞。確かな技術力が評価されているサロンです。',
  },
  {
    title: '早期スタイリストデビュー',
    description: 'パーソナルレッスンと充実した育成プログラムで、新卒でも中途でも早期のスタイリストデビューを後押しします。',
  },
  {
    title: '韓国ヘア特化の専門性',
    description: '韓国ヘア・ワンホンヘアに特化したサロンで、トレンドに強いスタイリストとして専門性を磨けます。',
  },
]

const jobInfo = [
  { label: '募集職種', value: '美容師・スタイリスト' },
  { label: '雇用形態', value: '正社員' },
  {
    label: '給与',
    value: '月給22万円〜60万円（基本給＋歩合制 技術売上3〜10%）／最低賃金保障あり',
  },
  { label: '給与例', value: '売上80万円の場合：基本給22万円＋歩合7万円＝総支給29万円' },
  { label: '勤務時間', value: '固定シフト制（週4〜5勤務・1日8時間）／営業時間 ' + siteConfig.hours + ' 内' },
  { label: '休日・休暇', value: '週休2日制（月4〜8日）／年間休日105日／有給休暇10日／夏季・冬季休暇' },
  { label: '福利厚生', value: '社会保険完備（雇用保険・労災保険・厚生年金）／新人研修あり／勤務時間相談可' },
  { label: '応募条件', value: '美容師免許（取得見込み含む）・スタイリスト経験あり／トレンドヘア・韓国ヘアが好きな方' },
  { label: '試用期間', value: '3ヵ月間' },
  { label: '勤務地', value: siteConfig.address + '（立町駅 徒歩5分／セット面8席）' },
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
              MAISON HALUは、広島・袋町の韓国ヘア・ワンホンヘア特化型サロン。<br />
              カミカリスマアワード「カラー部門」受賞、ホットペッパービューティーアワード連続受賞の実績を持ちます。<br />
              パーソナルレッスンと充実した育成プログラムで、新卒・中途問わず早期デビューを後押し。<br />
              トレンドヘアに意欲のある方、韓国ヘアが好きな方をお待ちしています。
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
