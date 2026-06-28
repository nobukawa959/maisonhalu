import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー：シルバー
        silver: {
          light: '#E8E8E8',
          DEFAULT: '#C0C0C0',
          dark: '#A0A0A0',
        },
        // アクセントカラー：水色
        sky: {
          accent: '#7DD3F7',
          bright: '#38BDF8',
        },
        // ベースカラー
        base: {
          black: '#0A0A0F',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scroll-down': 'scrollDown 1.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(125, 211, 247, 0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(125, 211, 247, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
