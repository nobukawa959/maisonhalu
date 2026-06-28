'use client'

import { useEffect, useState, useRef } from 'react'
import { siteConfig } from '@/data/siteConfig'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // パーティクルアニメーション
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; opacityDir: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        opacityDir: Math.random() > 0.5 ? 1 : -1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.opacity += p.opacityDir * 0.005
        if (p.opacity >= 1 || p.opacity <= 0) p.opacityDir *= -1
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(125, 211, 247, ${p.opacity * 0.6})`
        ctx.fill()
      })

      // パーティクル間の線（近いもの同士）
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(125, 211, 247, ${(1 - dist / 120) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const timer = setTimeout(() => setLoaded(true), 200)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0f1520] to-[#0A0A0F]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7DD3F7]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C0C0C0]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* パーティクルCanvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* グリッドライン */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(125,211,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,247,0.8) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 上部装飾ライン */}
        <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#7DD3F7]/60" />
          <span className="text-xs tracking-[0.4em] text-[#7DD3F7]/80 font-light">HIROSHIMA · FUKUROMACHI</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#7DD3F7]/60" />
        </div>

        {/* サロン名 - グリッチエフェクト付き */}
        <h1
          className={`font-serif font-light tracking-[0.4em] text-5xl sm:text-7xl md:text-8xl mb-6 text-gradient transition-all duration-1000 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 0 40px rgba(125,211,247,0.15)' }}
        >
          MAISON HALU
        </h1>

        {/* キャッチコピー */}
        <p className={`font-serif font-light text-lg sm:text-xl md:text-2xl text-[#E8E8E8]/80 mb-4 leading-relaxed tracking-wider transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {siteConfig.tagline}
        </p>

        {/* サブコピー */}
        <p className={`text-sm text-[#7DD3F7]/50 tracking-widest mb-12 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          韓国ヘア · ワンホンレイヤー · 髪質改善 · ケラチントリートメント
        </p>

        {/* CTAボタン */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full overflow-hidden text-sm tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)', color: '#0A0A0F' }}
          >
            <span className="relative z-10">Instagram で予約する</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* ホバー時の光エフェクト */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', transform: 'skewX(-20deg)' }} />
          </a>
          <a
            href={siteConfig.telHref}
            className="group px-8 py-4 rounded-full border border-[#7DD3F7]/30 text-sm tracking-[0.2em] text-[#E8E8E8] hover:border-[#7DD3F7]/80 hover:text-[#7DD3F7] hover:bg-[#7DD3F7]/5 transition-all duration-300 hover:scale-105"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            {siteConfig.tel}
          </a>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-xs tracking-[0.4em] text-[#7DD3F7]/40">SCROLL</span>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7DD3F7]/60 to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
