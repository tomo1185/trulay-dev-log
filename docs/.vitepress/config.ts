import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Trulay 開発ログ",
  description: "Trulay の公開用開発ログと技術メモ。",
  base: "/trulay-dev-log/",
  lang: "ja-JP",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Trulay 開発ログ",
    nav: [
      { text: "トップ", link: "/" },
      { text: "ロードマップ", link: "/roadmap/project-roadmap" },
      { text: "開発ログ", link: "/dev-logs/2026-05/2026-05-19" },
      { text: "公開方針", link: "/overview/repository-policy" }
    ],
    sidebar: [
      {
        text: "概要",
        items: [
          { text: "プロジェクト概要", link: "/overview/project-summary" },
          { text: "公開方針", link: "/overview/repository-policy" }
        ]
      },
      {
        text: "ロードマップ",
        items: [
          { text: "全体ロードマップ", link: "/roadmap/project-roadmap" },
          { text: "フェーズ計画", link: "/roadmap/phase-plan" }
        ]
      },
      {
        text: "技術メモ",
        items: [
          { text: "フロントエンド", link: "/architecture/frontend" },
          { text: "バックエンド", link: "/architecture/backend" },
          { text: "認証", link: "/architecture/auth" }
        ]
      },
      {
        text: "設計判断",
        items: [
          { text: "製品コード非公開・開発ログ公開", link: "/decisions/adr-0001-private-product-public-log" },
          { text: "技術スタック", link: "/decisions/adr-0002-tech-stack" }
        ]
      },
      {
        text: "開発ログ",
        items: [
          { text: "2026年5月19日（火）", link: "/dev-logs/2026-05/2026-05-19" },
          { text: "2026年5月18日（月）", link: "/dev-logs/2026-05/2026-05-18" },
          { text: "2026年5月17日（日）", link: "/dev-logs/2026-05/2026-05-17" },
          { text: "2026年5月16日（土）", link: "/dev-logs/2026-05/2026-05-16" },
          { text: "2026年5月15日（金）", link: "/dev-logs/2026-05/2026-05-15" }
        ]
      },
      {
        text: "学習メモ",
        items: [
          { text: "Next.js", link: "/learnings/nextjs" },
          { text: "Laravel", link: "/learnings/laravel" },
          { text: "Docker", link: "/learnings/docker" },
          { text: "GitHub Actions", link: "/learnings/github-actions" }
        ]
      }
    ],
    outline: {
      label: "目次"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/tomo1185/trulay-dev-log" }
    ],
    footer: {
      message: "Trulay の公開用開発ログと技術メモ。",
      copyright: "Copyright © 2026 tomo1185"
    }
  }
});
