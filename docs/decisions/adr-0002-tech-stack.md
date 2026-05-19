# ADR-0002: 技術スタックの初期方針

## 現在の状態

検討中

## 現時点の方針

- フロントエンド: Next.js / TypeScript
- バックエンド: Laravel / PHP
- データベース: MySQL
- 認証: Laravel Sanctum / Fortify / Socialite
- インフラ: Docker

## 補足

ログイン後の管理画面は SPA 寄りに実装し、公開ページは SSR / SSG を検討します。

具体的なバージョンは、アプリケーション初期構築時に決定します。
