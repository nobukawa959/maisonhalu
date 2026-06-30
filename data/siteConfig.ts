export const siteConfig = {
  name: "MAISON HALU",
  tagline: "広島・袋町で叶える、トレンドヘアと艶髪の新定番。",
  address: "広島市中区袋町7-32 2F",
  tel: "080-3890-3049",
  telHref: "tel:080-3890-3049",
  holiday: "毎週月曜日・お盆・正月",
  hours: "10:00 — 20:00",
  instagram: {
    handle: "@maison_halu",
    url: "https://www.instagram.com/maison_halu",
  },
  tiktok: {
    handle: "@maison.halu",
    url: "https://www.tiktok.com/@maison.halu",
  },
  googleMap: {
    embedUrl: "https://www.google.com/maps?q=Maison+HALU+広島県広島市中区袋町7-32&z=17&output=embed",
    reviewUrl: "https://search.google.com/local/writereview?cid=14630259296356372304",
    placeUrl: "https://www.google.com/maps/place/Maison+HALU/@34.3915683,132.4609717,17z",
  },
  // ========================
  // GA4・Clarity 設定場所
  // ========================
  // Google Analytics 4: https://analytics.google.com/ でIDを取得
  // Microsoft Clarity: https://clarity.microsoft.com/ でIDを取得
  analytics: {
    ga4Id: "G-XXXXXXXXXX", // ← ここにGA4のMeasurement IDを入れてください
    clarityId: "XXXXXXXXXX", // ← ここにClarityのProject IDを入れてください
  },
  seo: {
    title: "MAISON HALU | 広島・袋町の韓国ヘア・レイヤーカット・髪質改善専門美容院",
    description: "広島市中区袋町にある韓国ヘア・ワンホンレイヤー・髪質改善・ケラチントリートメント専門の美容院。トレンド感と似合わせを大切に、上品で今っぽいヘアスタイルを提案します。",
    keywords: "広島 韓国ヘア, 広島 レイヤーカット, 広島 ワンホンヘア, 袋町 美容院, 髪質改善 広島, ケラチントリートメント 広島",
    ogImage: "/og-image.jpg",
  },
} as const
