# ADR-0002: 技術スタックの初期方針

## ステータス

検討中

## 現時点の方針

- Frontend: Next.js / TypeScript
- Backend: Laravel / PHP
- Database: MySQL
- Auth: Laravel Sanctum / Fortify / Socialite
- Infrastructure: Docker

## 補足

ログイン後の管理画面は SPA 寄りに実装し、公開ページは SSR / SSG を検討します。

具体的なバージョンは、アプリケーション初期構築時に決定します。

