/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像の最適化設定
  images: {
    // 外部画像ドメインを追加する場合はここに追加
    // domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Vercel デプロイ最適化
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
