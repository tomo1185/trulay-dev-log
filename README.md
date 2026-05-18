# Trulay Dev Log

Trulay の公開開発ログ・技術メモ用リポジトリです。

製品コード本体は private repository で管理し、このリポジトリでは公開可能な開発ログ、技術選定、設計判断、学習メモ、サンプルコードのみを扱います。

## 公開サイト

GitHub Pages で公開予定です。

- Site: https://tomo1185.github.io/trulay-dev-log/

## 公開する内容

- 開発ログ
- 技術選定の理由
- 設計判断の記録
- 学習メモ
- 公開しても問題ないサンプルコード

## 公開しない内容

- 製品コード本体
- 詳細な内部仕様
- DB設計の詳細
- 環境変数、APIキー、シークレット
- セキュリティ上公開すべきでない情報

## ローカル確認

```bash
npm install
npm run docs:dev
```

## ビルド確認

```bash
npm run docs:build
```

## GitHub Pages

GitHub Pages は GitHub Actions からデプロイする想定です。

Repository Settings の Pages で Source を `GitHub Actions` に設定します。
