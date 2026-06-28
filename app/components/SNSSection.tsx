'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/data/siteConfig'

export default function SNSSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Instagram埋め込みスクリプトの読み込み
  useEffect(() => {
    // Instagramの埋め込みスクリプトを動的に読み込む
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // アニメーション
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

    return () => {
      observer.disconnect()
      // クリーンアップ（スクリプトはページ遷移まで保持）
    }
  }, [])

  return (
    <section id="sns" ref={sectionRef} className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* 背景デコレーション */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#7DD3F7]/3 rounded-full blur-[80px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="reveal text-xs tracking-[0.5em] text-[#7DD3F7] mb-4">— FOLLOW US —</p>
          <h2 className="reveal delay-100 font-serif font-light text-4xl md:text-5xl text-gradient mb-4 tracking-wider">
            SNS
          </h2>
          <p className="reveal delay-200 text-sm text-[#C0C0C0]/60 tracking-wider">最新情報はSNSで発信中</p>
        </div>

        {/* 2カラム：Instagram / TikTok */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instagram */}
          <div className="reveal-left">
            <div className="glass rounded-2xl border border-white/10 p-6 md:p-8">
              {/* ヘッダー */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#E8E8E8] text-sm">Instagram</p>
                    <p className="text-xs text-[#C0C0C0]/60">{siteConfig.instagram.handle}</p>
                  </div>
                </div>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs tracking-wider glass border border-white/15 text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
                >
                  フォローする
                </a>
              </div>

              {/* Instagram埋め込みエリア */}
              {/*
                Instagram投稿の埋め込み方法：
                1. Instagramの投稿を開く
                2. 「…」→「埋め込む」をクリック
                3. 生成されたコードを下記に貼り付ける
              */}
              {/*
                ▼ Instagram投稿の埋め込み方法
                1. Instagramアプリ or PCで投稿を開く
                2. 「…」→「埋め込む」→ コードをコピー
                3. 下の<div>を消して、コピーしたコードを貼り付ける
              */}
              <div className="rounded-xl overflow-hidden bg-[#0A0A0F]/50 min-h-[300px] flex flex-col items-center justify-center border border-white/5 gap-5 p-8">
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 w-full max-w-xs p-6 rounded-2xl border border-white/10 hover:border-[#7DD3F7]/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, rgba(240,148,51,0.08), rgba(188,24,136,0.08))' }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-[#E8E8E8] tracking-wider">{siteConfig.instagram.handle}</p>
                  <p className="text-xs text-[#C0C0C0]/50">最新のヘアスタイルはInstagramで発信中</p>
                  <span className="mt-1 text-xs text-[#7DD3F7] group-hover:underline">プロフィールを見る →</span>
                </a>
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div className="reveal-right">
            <div className="glass rounded-2xl border border-white/10 p-6 md:p-8">
              {/* ヘッダー */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#E8E8E8] text-sm">TikTok</p>
                    <p className="text-xs text-[#C0C0C0]/60">{siteConfig.tiktok.handle}</p>
                  </div>
                </div>
                <a
                  href={siteConfig.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs tracking-wider glass border border-white/15 text-[#C0C0C0] hover:border-[#7DD3F7]/40 hover:text-[#7DD3F7] transition-all duration-300"
                >
                  フォローする
                </a>
              </div>

              {/* TikTok埋め込みエリア */}
              {/*
                TikTok動画の埋め込み方法：
                1. TikTokの動画を開く
                2. 「シェア」→「埋め込む」をクリック
                3. 生成されたコードを下記に貼り付ける
              */}
              {/*
                ▼ TikTok動画の埋め込み方法
                1. TikTokアプリで動画を開く
                2. 「シェア」→「リンクをコピー」でURLを取得
                3. 下の<div>を消して以下を貼り付け（VIDEO_IDを差し替える）:
                   <blockquote className="tiktok-embed" cite="動画URL" data-video-id="VIDEO_ID">
                   </blockquote>
                   <script async src="https://www.tiktok.com/embed.js"></script>
              */}
              <div className="rounded-xl overflow-hidden bg-[#0A0A0F]/50 min-h-[300px] flex flex-col items-center justify-center border border-white/5 gap-5 p-8">
                <a
                  href={siteConfig.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 w-full max-w-xs p-6 rounded-2xl border border-white/10 hover:border-[#7DD3F7]/40 transition-all duration-300 hover:-translate-y-1 bg-black/30"
                >
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border border-white/20">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-[#E8E8E8] tracking-wider">{siteConfig.tiktok.handle}</p>
                  <p className="text-xs text-[#C0C0C0]/50">ビフォーアフター動画はTikTokで発信中</p>
                  <span className="mt-1 text-xs text-[#7DD3F7] group-hover:underline">プロフィールを見る →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
