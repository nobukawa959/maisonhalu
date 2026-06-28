# MAISON HALU 公式ホームページ

広島・袋町の美容院「MAISON HALU」の公式ホームページです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** でのホスティングを想定

---

## ローカル起動方法

```bash
# 1. 依存関係のインストール
npm install

# 2. 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

---

## Vercel 公開手順

1. [Vercel](https://vercel.com) にGitHubアカウントでサインイン
2. 「New Project」→ このリポジトリを選択
3. Framework: **Next.js** が自動検出されます
4. 「Deploy」ボタンをクリック
5. 数分でデプロイ完了。URLが発行されます

---

## 画像差し替え方法

`public/images/` フォルダに画像を配置してください。

| ファイル名 | 用途 |
|-----------|------|
| `stylist-1.jpg` | スタイリストAの写真 |
| `stylist-2.jpg` | スタイリストBの写真 |
| `stylist-3.jpg` | スタイリストCの写真 |
| `style-1.jpg` 〜 `style-6.jpg` | ヘアスタイルギャラリー画像 |

画像を配置したら、各コンポーネントの「画像差し替え方法」コメントに従って
`<Image>` コンポーネントに置き換えてください。

**OGP画像（SNSシェア時のサムネイル）:**
- `public/og-image.jpg` を差し替えてください（推奨サイズ：1200×630px）

---

## テキスト・データ変更方法

### `data/` フォルダの説明

| ファイル | 内容 |
|---------|------|
| `data/siteConfig.ts` | 店舗名・住所・電話・SNSリンクなど基本情報 |
| `data/menu.ts` | メニュー名・価格・説明 |
| `data/stylists.ts` | スタイリストの名前・得意分野・プロフィール |
| `data/reviews.ts` | 口コミデータ（仮データ） |

各ファイルを編集するだけでサイト全体に反映されます。

---

## SNSリンク変更方法

`data/siteConfig.ts` を開いて、以下の箇所を編集してください：

```typescript
instagram: {
  handle: "@maison.halu",  // ← ハンドルネーム
  url: "https://www.instagram.com/maison.halu",  // ← URL
},
tiktok: {
  handle: "@maison_halu",
  url: "https://www.tiktok.com/@maison_halu",
},
```

---

## Google Analytics 4 (GA4) 設定方法

1. [Google Analytics](https://analytics.google.com/) でプロパティを作成
2. Measurement ID（`G-XXXXXXXXXX` 形式）を取得
3. `data/siteConfig.ts` の `analytics.ga4Id` に設定：

```typescript
analytics: {
  ga4Id: "G-XXXXXXXXXX",  // ← ここに入力
},
```

---

## Microsoft Clarity 設定方法

Clarityはヒートマップ・セッション録画の無料ツールです。

1. [Microsoft Clarity](https://clarity.microsoft.com/) でアカウント作成
2. 新規プロジェクトを作成してProject IDを取得
3. `data/siteConfig.ts` の `analytics.clarityId` に設定：

```typescript
analytics: {
  clarityId: "XXXXXXXXXX",  // ← ここに入力
},
```

---

## Google Search Console 設定方法

1. [Search Console](https://search.google.com/search-console) にアクセス
2. プロパティを追加（URLプレフィックス形式）
3. 「HTMLタグ」方式で確認コードを取得
4. `app/layout.tsx` の `<head>` 内に追加：

```tsx
<meta name="google-site-verification" content="確認コード" />
```

---

## Google Map 差し替え方法

1. [Google Maps](https://maps.google.com/) で「MAISON HALU 広島」を検索
2. 「共有」→「地図を埋め込む」
3. 生成された `<iframe>` の `src` をコピー
4. `data/siteConfig.ts` の `googleMap.embedUrl` に貼り付け

---

## Instagram / TikTok 埋め込み方法

### Instagram
`app/components/SNSSection.tsx` を開いて、コメントアウト部分を参考に
`<blockquote class="instagram-media" ...>` のコードを貼り付けてください。

### TikTok
同様に `<blockquote class="tiktok-embed" ...>` のコードを貼り付けてください。

---

## Google口コミURL設定方法

1. Google Maps で店舗ページを開く
2. 「口コミを書く」ボタンのURLをコピー
3. `data/siteConfig.ts` の `googleMap.reviewUrl` に設定

---

## フォルダ構成

```
Maison_HALU_HP/
├── app/
│   ├── layout.tsx        ← メタデータ、フォント、GA4、Clarity、JSON-LD
│   ├── page.tsx          ← TOPページ（全コンポーネントを組み合わせる）
│   ├── globals.css       ← グローバルスタイル、ガラスモーフィズム定義
│   └── components/       ← 各セクションのコンポーネント
├── data/                 ← テキスト・設定データ（ここを主に編集する）
├── public/
│   ├── images/           ← 写真を入れるフォルダ
│   └── og-image.jpg      ← SNSシェア用サムネイル
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```
