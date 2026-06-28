'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/data/siteConfig'

const slides = [
  { src: '/videos/video-1.mp4' },
  { src: '/videos/video-2.mp4' },
  { src: '/videos/video-3.mp4' },
]

export default function VideoSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
    setCurrent(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)

    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth)
      setCurrent(index)
      videoRefs.current.forEach((v, i) => {
        if (!v) return
        if (i === index) {
          v.play().catch(() => {})
        } else {
          v.pause()
          v.currentTime = 0
        }
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    videoRefs.current[0]?.play().catch(() => {})

    return () => {
      clearTimeout(timer)
      track.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = trackRef.current?.scrollLeft ?? 0
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    trackRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current)
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    isDragging.current = false
    const diff = e.pageX - startX.current
    const width = trackRef.current.clientWidth
    if (Math.abs(diff) > width * 0.15) {
      goTo(diff < 0 ? Math.min(current + 1, slides.length - 1) : Math.max(current - 1, 0))
    } else {
      goTo(current)
    }
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* スライダートラック */}
      <div
        ref={trackRef}
        className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-none w-full h-full snap-start">
            <video
              ref={(el) => { videoRefs.current[i] = el }}
              src={slide.src}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* 暗幕 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/70 via-[#050508]/20 to-[#050508]/30" />
          </div>
        ))}
      </div>

      {/* グリッドライン（サイバー感） */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(125,211,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,247,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* コーナーマーク */}
      {[['top-5 left-5 border-t border-l',''],['top-5 right-5 border-t border-r',''],['bottom-16 left-5 border-b border-l',''],['bottom-16 right-5 border-b border-r','']].map(([cls],i) => (
        <div key={i} className={`absolute w-5 h-5 border-[#7DD3F7]/25 pointer-events-none ${cls}`} />
      ))}

      {/* メインテキストオーバーレイ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-6">
        <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#7DD3F7]/50" />
            <span className="text-[10px] tracking-[0.5em] text-[#7DD3F7]/70 font-light">HIROSHIMA · FUKUROMACHI</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#7DD3F7]/50" />
          </div>
          <h1
            className="font-serif font-light tracking-[0.35em] text-5xl sm:text-7xl md:text-8xl text-white mb-5"
            style={{ textShadow: '0 0 60px rgba(200,200,200,0.15)' }}
          >
            MAISON HALU
          </h1>
          <p className="font-serif font-light text-base sm:text-lg text-white/70 mb-3 tracking-wider">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-[#7DD3F7]/50 tracking-widest mb-10">
            韓国ヘア · ワンホンレイヤー · 髪質改善 · ケラチントリートメント
          </p>
        </div>

        {/* CTAボタン */}
        <div className={`flex flex-col sm:flex-row gap-4 pointer-events-auto transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-sm tracking-[0.2em] font-medium hover:scale-105 transition-transform duration-300"
            style={{ background: 'linear-gradient(135deg, #7DD3F7, #38BDF8)', color: '#0A0A0F' }}
          >
            Instagram で予約する
          </a>
          <a
            href={siteConfig.telHref}
            className="px-8 py-4 rounded-full border border-[#7DD3F7]/30 text-sm tracking-[0.2em] text-white hover:border-[#7DD3F7]/70 hover:text-[#7DD3F7] transition-all duration-300 hover:scale-105"
            style={{ backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.2)' }}
          >
            {siteConfig.tel}
          </a>
        </div>
      </div>

      {/* ドットインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '28px' : '8px',
              height: '2px',
              background: i === current ? '#7DD3F7' : 'rgba(125,211,247,0.25)',
              borderRadius: '1px',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.4s',
            }}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>

      {/* スライド番号 */}
      <div className="absolute bottom-8 right-6 z-20 pointer-events-none">
        <span className="font-mono text-[10px] text-[#7DD3F7]/40 tracking-widest">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* 左右矢印 */}
      <button
        onClick={() => goTo(Math.max(current - 1, 0))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 border border-white/15 text-white/40 hover:border-[#7DD3F7]/50 hover:text-[#7DD3F7] transition-all duration-300"
        style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.25)', fontSize: '20px' }}
        aria-label="前のスライド"
      >‹</button>
      <button
        onClick={() => goTo(Math.min(current + 1, slides.length - 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 border border-white/15 text-white/40 hover:border-[#7DD3F7]/50 hover:text-[#7DD3F7] transition-all duration-300"
        style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.25)', fontSize: '20px' }}
        aria-label="次のスライド"
      >›</button>

      {/* スクロール誘導 */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: 'calc(50% - 60px)' }}>
        <span className="text-[10px] tracking-[0.4em] text-[#7DD3F7]/40">SCROLL</span>
        <div className="relative w-px h-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7DD3F7]/60 to-transparent animate-scroll-line" />
        </div>
      </div>

      <style>{`.scrollbar-none::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}
