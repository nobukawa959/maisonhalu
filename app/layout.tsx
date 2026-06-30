import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/data/siteConfig'
import CookieBanner from './components/CookieBanner'

// ============================
// メタデータ（SEO設定）
// ============================
export const metadata: Metadata = {
  metadataBase: new URL('https://maisonhalu.com'),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // OGP（SNSシェア時の表示）
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: 'https://maisonhalu.com',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  // ファビコン設定
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// ============================
// 構造化データ（JSON-LD）
// LocalBusiness / HairSalon スキーマ
// ============================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'MAISON HALU',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '袋町7-32 2F',
    addressLocality: '広島市中区',
    addressRegion: '広島県',
    postalCode: '730-0036',
    addressCountry: 'JP',
  },
  telephone: '080-3890-3049',
  url: 'https://maisonhalu.com',
  sameAs: [
    'https://www.instagram.com/maison.halu',
    'https://www.tiktok.com/@maison_halu',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
  ],
  priceRange: '¥¥¥',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts - Noto Serif JP & Noto Sans JP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* ============================
            構造化データ（JSON-LD）
            ============================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ============================
            Google Analytics 4 (GA4)
            設定方法:
            1. https://analytics.google.com/ にアクセス
            2. プロパティを作成してMeasurement IDを取得
            3. data/siteConfig.ts の analytics.ga4Id に設定
            ============================ */}
        {(siteConfig.analytics.ga4Id as string) !== 'G-XXXXXXXXXX' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.ga4Id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.analytics.ga4Id}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* ============================
            Microsoft Clarity（ヒートマップ・セッション録画）
            設定方法:
            1. https://clarity.microsoft.com/ にアクセス
            2. プロジェクトを作成してProject IDを取得
            3. data/siteConfig.ts の analytics.clarityId に設定
            ============================ */}
        {(siteConfig.analytics.clarityId as string) !== 'XXXXXXXXXX' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${siteConfig.analytics.clarityId}");
              `,
            }}
          />
        )}
      </head>
      <body className="bg-[#0A0A0F] text-white font-sans antialiased">
        {children}
        {/* Cookie同意バナー（初回訪問時のみ表示） */}
        <CookieBanner />
      </body>
    </html>
  )
}
