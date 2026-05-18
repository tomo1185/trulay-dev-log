import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Trulay Dev Log",
  description: "Public development log and engineering notes for Trulay.",
  base: "/trulay-dev-log/",
  lang: "ja-JP",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Trulay Dev Log",
    nav: [
      { text: "Home", link: "/" },
      { text: "Roadmap", link: "/roadmap/project-roadmap" },
      { text: "Dev Logs", link: "/dev-logs/2026-05/2026-05-18" },
      { text: "Policy", link: "/overview/repository-policy" }
    ],
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Project Summary", link: "/overview/project-summary" },
          { text: "Repository Policy", link: "/overview/repository-policy" }
        ]
      },
      {
        text: "Roadmap",
        items: [
          { text: "Project Roadmap", link: "/roadmap/project-roadmap" },
          { text: "Phase Plan", link: "/roadmap/phase-plan" }
        ]
      },
      {
        text: "Architecture Notes",
        items: [
          { text: "Frontend", link: "/architecture/frontend" },
          { text: "Backend", link: "/architecture/backend" },
          { text: "Auth", link: "/architecture/auth" }
        ]
      },
      {
        text: "Decisions",
        items: [
          { text: "Private Product / Public Log", link: "/decisions/adr-0001-private-product-public-log" },
          { text: "Tech Stack", link: "/decisions/adr-0002-tech-stack" }
        ]
      },
      {
        text: "Dev Logs",
        items: [
          { text: "2026-05-15 Fri", link: "/dev-logs/2026-05/2026-05-15" },
          { text: "2026-05-16 Sat", link: "/dev-logs/2026-05/2026-05-16" },
          { text: "2026-05-17 Sun", link: "/dev-logs/2026-05/2026-05-17" },
          { text: "2026-05-18 Mon", link: "/dev-logs/2026-05/2026-05-18" }
        ]
      },
      {
        text: "Learnings",
        items: [
          { text: "Next.js", link: "/learnings/nextjs" },
          { text: "Laravel", link: "/learnings/laravel" },
          { text: "Docker", link: "/learnings/docker" },
          { text: "GitHub Actions", link: "/learnings/github-actions" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/tomo1185/trulay-dev-log" }
    ],
    footer: {
      message: "Public development log and engineering notes for Trulay.",
      copyright: "Copyright © 2026 tomo1185"
    }
  }
});
