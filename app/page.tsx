// ============================
// MAISON HALU - TOPページ
// ============================
// 各セクションを順番に並べています。
// 表示/非表示はここでコメントアウトで調整できます。

import Header from './components/Header'
import VideoSlider from './components/VideoSlider'
import Concept from './components/Concept'
import Menu from './components/Menu'
import HairStyle from './components/HairStyle'
import Stylist from './components/Stylist'
import Reviews from './components/Reviews'
import SNSSection from './components/SNSSection'
import Access from './components/Access'
import Contact from './components/Contact'
import FloatingCTA from './components/FloatingCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      {/* ナビゲーションヘッダー */}
      <Header />

      <main>
        {/* ファーストビュー・動画スライダー */}
        <VideoSlider />

        {/* コンセプトセクション */}
        <Concept />

        {/* メニュー・料金 */}
        <Menu />

        {/* ヘアスタイルギャラリー */}
        <HairStyle />

        {/* スタイリスト紹介 */}
        <Stylist />

        {/* Google 口コミ */}
        <Reviews />

        {/* Instagram / TikTok */}
        <SNSSection />

        {/* アクセス・Google Map */}
        <Access />

        {/* お問い合わせ・予約 */}
        <Contact />
      </main>

      {/* フッター */}
      <Footer />

      {/* スマホ固定CTAボタン */}
      <FloatingCTA />
    </>
  )
}
