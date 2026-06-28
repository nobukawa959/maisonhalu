'use client'

import { useState, useEffect } from 'react'

const COOKIE_CONSENT_KEY = 'maison-halu-cookie-consent'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // localStorage を確認して未同意の場合のみ表示
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // 少し遅らせて表示（UX向上）
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  // 同意する
  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setShow(false)
  }

  // 閉じる（同意なし）
  const handleClose = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'dismissed')
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-700 md:bottom-6 md:left-6 md:right-auto md:max-w-sm ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div
        className="rounded-2xl p-5 border border-white/15"
        style={{
          background: 'rgba(10, 10, 15, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* タイトル */}
        <p className="font-serif text-sm text-[#E8E8E8] mb-2">Cookie について</p>

        {/* 説明文 */}
        <p className="text-xs text-[#C0C0C0]/70 leading-loose mb-4">
          当サイトでは、利便性の向上・アクセス解析のためにCookieを使用しています。
          詳細は
          <a href="#" className="text-[#7DD3F7] hover:underline mx-1">プライバシーポリシー</a>
          をご確認ください。
        </p>

        {/* ボタン */}
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 py-2.5 rounded-lg text-xs tracking-wider font-medium transition-all duration-300 hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #7DD3F7, #E8E8E8)',
              color: '#0A0A0F',
            }}
          >
            同意する
          </button>
          <button
            onClick={handleClose}
            className="flex-1 py-2.5 rounded-lg text-xs tracking-wider text-[#C0C0C0]/70 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
}
