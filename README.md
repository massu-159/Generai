# Generai

AIを活用した生成プラットフォーム

フレームワークはNext.jsを利用。詳しくは下記に記載。

[openAI](https://openai.com/), [Replicate](https://replicate.com/)のAPIを利用しています。(お金がかかるので、現在は停止中)

openaiライブラリ **v4** を使用しています。

認証機能に[clerk](https://clerk.com/)を利用。

サーバレスDBサービスの[planetscale](https://planetscale.com/)を利用。

[stripe](https://stripe.com/jp)による決済。

 AIを活用したチャット形式の問い合わせ機能 [crisp](https://crisp.chat/en/)。

urlはこちら
https://github.com/massu-159/Generai


## 目次
1. 環境構築
2. アプリケーションの仕様
3. 環境変数

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm start
# または
yarn start
# または
pnpm start
# または
bun start
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- 認証(Clerk)
  - サインアップ
  - ログイン
  - ログアウト
- プラン
  - free
    - 合計5回までの生成
  - pro
    - 無制限
- 生成AI
  - チャット
  - コード生成
  - 画像生成
  - 音楽生成
  - 動画生成
- 問い合わせ(Crisp)
  - チャット形式
- 決済(Stripe)
  - サブスクリプション登録

### 2-2. 構成技術
```
@clerk/nextjs: ^4.29.5
@hookform/resolvers: ^3.3.4
axios: ^1.6.7
clsx: ^2.1.0
crisp-sdk-web: ^1.0.21
lucide-react: ^0.321.0
next: 14.1.0
openai: ^4.26.0

react: ^18
react-hook-form: ^7.50.0
react-hot-toast: ^2.4.1
react-markdown: ^9.0.1
replicate: ^0.25.2
stripe: ^14.14.0
typewriter-effect: ^2.21.0
zod: ^3.22.4
zustand: ^4.5.0

eslint: ^8
prisma: ^5.9.1
tailwindcss: ^3.3.0
typescript: ^5
```

## 3. 環境変数
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXXXXXXXXXXXX
CLERK_SECRET_KEY=XXXXXXXXXXXXXXX

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=XXXXXXXXXXXXXXX
REPLICATE_API_TOKEN=XXXXXXXXXXXXXXX

DATABASE_URL=XXXXXXXXXXXXXX

STRIPE_API_KEY=XXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=XXXXXXXXXXX

NEXT_PUBLIC_APP_URL=http://localhost:3000
